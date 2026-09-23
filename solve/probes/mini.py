import numpy as np, pinocchio as pin, crocoddyl
print('imports ok')
pmodel = pin.buildModelFromMJCF('/tmp/uturn/model/scene_robot.xml')
pdata = pmodel.createData()
print('model ok')
state = crocoddyl.StateMultibody(pmodel)
class ActFF(crocoddyl.ActuationModelAbstract):
    def __init__(self, state):
        crocoddyl.ActuationModelAbstract.__init__(self, state, state.nv - 6)
    def calc(self, data, x, u):
        data.tau[:6] = 0.0; data.tau[6:] = u
    def calcDiff(self, data, x, u):
        data.dtau_du.setZero(); data.dtau_du[6:, :] = np.eye(self.nu)
act = ActFF(state); nu = act.nu
print('actuation ok, nu', nu)
contacts = crocoddyl.ContactModelMultiple(state, nu)
q0 = pin.neutral(pmodel)
pin.forwardKinematics(pmodel, pdata, q0); pin.updateFramePlacements(pmodel, pdata)
for f in ('left_foot','right_foot'):
    fid = pmodel.getFrameId(f)
    contacts.addContact('c_' + f, crocoddyl.ContactModel6D(state, fid, pdata.oMf[fid].copy(), pin.LOCAL, nu, np.array([50.,10.])))
print('contacts ok')
costs = crocoddyl.CostModelSum(state, nu)
x0 = np.hstack([q0, np.zeros(pmodel.nv)])
costs.addCost('xReg', crocoddyl.CostModelResidual(state, crocoddyl.ResidualModelState(state, x0, nu)), 1e-2)
print('costs ok')
dam = crocoddyl.DifferentialActionModelContactFwdDynamics(state, act, contacts, costs, 1e-9, True)
print('dam built')
dd = dam.createData()
dam.calc(dd, x0, np.zeros(nu))
print('DAM calc ok, cost', dd.cost)
dam.calcDiff(dd, x0, np.zeros(nu))
print('DAM calcDiff ok')
