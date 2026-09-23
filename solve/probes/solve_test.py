import numpy as np, pinocchio as pin, crocoddyl, mujoco, time

# ---------- load + verify model ----------
pmodel = pin.buildModelFromMJCF('/tmp/uturn/model/scene_robot.xml')
pdata = pmodel.createData()
exec(open('impact.py').read().split("def run_impact")[0])   # mujoco m, d, base_pose, READY, ARM

q_mj = base_pose(**READY)
q0 = q_mj[:36].copy()
q0[3], q0[4], q0[5], q0[6] = q_mj[4], q_mj[5], q_mj[6], q_mj[3]   # (w,x,y,z)->(x,y,z,w)
v0 = np.zeros(pmodel.nv)
x0 = np.hstack([q0, v0])

pin.forwardKinematics(pmodel, pdata, q0); pin.updateFramePlacements(pmodel, pdata)
pin.computeJointJacobians(pmodel, pdata, q0)

state = crocoddyl.StateMultibody(pmodel)
class ActFF(crocoddyl.ActuationModelAbstract):
    def __init__(self, state):
        crocoddyl.ActuationModelAbstract.__init__(self, state, state.nv - 6)
    def calc(self, data, x, u):
        data.tau[:6] = 0.0
        data.tau[6:] = u
    def calcDiff(self, data, x, u):
        data.dtau_du.setZero()
        data.dtau_du[6:, :] = np.eye(self.nu)
actuation = ActFF(state)
nu = actuation.nu
print('nu', nu)

lf = pmodel.getFrameId('left_foot'); rf = pmodel.getFrameId('right_foot')
rk = pmodel.getFrameId('tennis_racket'); pelv = pmodel.getFrameId('pelvis')

# ---------- target: disc center C, normal n, velocity v ----------
C = np.array([-2.05, -0.25, 1.13])
n = np.array([np.cos(np.radians(2)), 0., np.sin(np.radians(2))])
v_des = 22.0 * np.array([np.cos(np.radians(17)), 0., np.sin(np.radians(17))])
# R_disc: z = n, x ~ up
x_ax = np.array([0.,0.,1.]) - n[2]*n; x_ax /= np.linalg.norm(x_ax)
y_ax = np.cross(n, x_ax)
R_disc = np.column_stack([x_ax, y_ax, n])
# disc offset in racket body: pos + quat (w,x,y,z)=(0,0,-0.7071,0.7071)
p_off = np.array([0.1025, -0.004, 0.4])
ax = np.array([0., -1., 1.]) / np.sqrt(2)
R_off = 2*np.outer(ax,ax) - np.eye(3)   # 180 deg about ax
T_disc = pin.SE3(R_disc, C)
T_off = pin.SE3(R_off, p_off)
T_racket = T_disc * T_off.inverse()
M_target = T_racket
print('target racket origin:', np.round(T_racket.translation, 3))
print('check disc:', np.round((T_racket*T_off).translation, 4), '== C', C)

# ---------- contacts ----------
contacts = crocoddyl.ContactModelMultiple(state, nu)
for fid in (lf, rf):
    pref = pdata.oMf[fid].copy()
    cm = crocoddyl.ContactModel6D(state, fid, pref, pin.LOCAL, nu, np.array([50., 10.]))
    contacts.addContact(f'c_{fid}', cm)

# ---------- costs ----------
def running_costs():
    costs = crocoddyl.CostModelSum(state, nu)
    # state reg
    costs.addCost('xReg', crocoddyl.CostModelResidual(state, crocoddyl.ResidualModelState(state, x0, nu)), 5e-2)
    # control reg
    costs.addCost('uReg', crocoddyl.CostModelResidual(state, crocoddyl.ResidualModelControl(state, nu)), 1e-4)
    # torso stays near ready (soft)
    costs.addCost('torso', crocoddyl.CostModelResidual(state, crocoddyl.ResidualModelFramePlacement(state, pelv, pdata.oMf[pelv].copy(), nu)), 5e-2)
    # CoM over support midpoint (soft)
    costs.addCost('com', crocoddyl.CostModelResidual(state, crocoddyl.ResidualModelCoMPosition(state, np.array([-2.6, 0., 0.95]), nu)), 5e-2)
    # joint limits barrier (full state: wide on base, tight on joints, speed cap)
    lb = np.full(state.ndx, -1e3); ub = np.full(state.ndx, 1e3)
    lb[6:35] = pmodel.lowerPositionLimit[7:] + 0.03
    ub[6:35] = pmodel.upperPositionLimit[7:] - 0.03
    lb[35:] = -25.0; ub[35:] = 25.0
    costs.addCost('limits', crocoddyl.CostModelResidual(state,
        crocoddyl.ActivationModelQuadraticBarrier(crocoddyl.ActivationBounds(lb, ub)),
        crocoddyl.ResidualModelState(state, np.zeros(state.nx), nu)), 1e1)
    # friction cones
    for fid in (lf, rf):
        cone = crocoddyl.FrictionCone(np.eye(3), 0.6)
        res = crocoddyl.ResidualModelContactFrictionCone(state, fid, cone, nu)
        cb = crocoddyl.ActivationBounds(np.full(res.nr, -1e3), np.zeros(res.nr))
        costs.addCost(f'cone_{fid}', crocoddyl.CostModelResidual(state, crocoddyl.ActivationModelQuadraticBarrier(cb), res), 5e-1)
    return costs

def terminal_costs():
    costs = crocoddyl.CostModelSum(state, nu)
    costs.addCost('xReg', crocoddyl.CostModelResidual(state, crocoddyl.ResidualModelState(state, x0, nu)), 1e-2)
    costs.addCost('uReg', crocoddyl.CostModelResidual(state, crocoddyl.ResidualModelControl(state, nu)), 1e-4)
    costs.addCost('racketPlace', crocoddyl.CostModelResidual(state, crocoddyl.ResidualModelFramePlacement(state, rk, M_target, nu)), 1e5)
    costs.addCost('racketVel', crocoddyl.CostModelResidual(state, crocoddyl.ResidualModelFrameVelocity(state, rk, pin.Motion(v_des, np.zeros(3)), pin.WORLD, nu)), 1e4)
    lb = np.full(state.ndx, -1e3); ub = np.full(state.ndx, 1e3)
    lb[6:35] = pmodel.lowerPositionLimit[7:] + 0.03
    ub[6:35] = pmodel.upperPositionLimit[7:] - 0.03
    costs.addCost('limits', crocoddyl.CostModelResidual(state,
        crocoddyl.ActivationModelQuadraticBarrier(crocoddyl.ActivationBounds(lb, ub)),
        crocoddyl.ResidualModelState(state, np.zeros(state.nx), nu)), 1e1)
    return costs

# ---------- problem ----------
N = 5; dt = 0.01
dams, iams = [], []
for i in range(N):
    dam = crocoddyl.DifferentialActionModelContactFwdDynamics(state, actuation, contacts, running_costs(), 1e-9, True)
    dams.append(dam); iams.append(crocoddyl.IntegratedActionModelEuler(dam, dt))
damT = crocoddyl.DifferentialActionModelContactFwdDynamics(state, actuation, contacts, terminal_costs(), 1e-9, True)
iamT = crocoddyl.IntegratedActionModelEuler(damT, 0.)
problem = crocoddyl.ShootingProblem(x0, iams, iamT)

solver = crocoddyl.SolverFDDP(problem)
solver.setCallbacks([crocoddyl.CallbackVerbose()])
xs = [x0] * (N + 1)
us = [np.zeros(nu)] * N
t0 = time.time()
done = solver.solve(xs, us, 3, False, 1e-9)
print('solved', done, 'iters', solver.iter, 'cost', solver.cost, 'time %.1fs' % (time.time() - t0))

xs = np.array(solver.xs); us = np.array(solver.us)
np.savez('/tmp/uturn/swing_sol.npz', xs=xs, us=us, dt=dt, C=C, n=n, v_des=v_des)

# ---------- verify terminal state in pinocchio ----------
qf = xs[-1, :36]; vf = xs[-1, 36:]
pin.forwardKinematics(pmodel, pdata, qf); pin.updateFramePlacements(pmodel, pdata)
pr = pdata.oMf[rk]
disc = pr * T_off
print('FINAL disc center:', np.round(disc.translation, 4), 'target', np.round(C, 4), 'pos err', round(float(np.linalg.norm(disc.translation - C)), 5))
zf = disc.rotation[:, 2]
print('FINAL normal:', np.round(zf, 4), 'target', np.round(n, 4), 'ang err deg', round(float(np.degrees(np.arccos(np.clip(zf @ n, -1, 1)))), 3))
J = pin.computeFrameJacobian(pmodel, pdata, qf, rk, pin.WORLD)
tw = J @ vf
v_disc = tw[:3] + np.cross(tw[3:], disc.translation - pr.translation)
print('FINAL disc vel:', np.round(v_disc, 3), 'target', np.round(v_des, 3), '|v|', round(float(np.linalg.norm(v_disc)), 2))
print('angular vel:', np.round(tw[3:], 3))
print('peak torques |u|:', np.round(np.abs(us).max(axis=0), 1))
print('feet z during swing: min', round(float(xs[:, 2].min()), 3), 'max', round(float(xs[:, 2].max()), 3))
