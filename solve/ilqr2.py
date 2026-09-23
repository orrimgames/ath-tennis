import numpy as np, pinocchio as pin, mujoco, json, time

exec(open('/tmp/uturn/build_h2_pin.py').read().split("if __name__ == '__main__':")[0])
pm, _mmj = build('/tmp/uturn/model/scene.xml')
pm.armature[:] = 0.01          # corrected model: armature 0.01 all dofs
pd = pm.createData()
JOINT_DAMPING = 0.05           # N.m.s/rad all joints
JOINT_FRIC = 0.2               # N.m dry friction all joints

# ---- ready pose (literal) ----
q0 = np.zeros(36)
q0[0:3] = [-2.6, 0.0, 0.98]
q0[3:7] = [0., 0., 0., 1.]
q0[7:36] = [-0.25,0,0,0.5,0,-0.25, -0.25,0,0,0.5,0,-0.25, 0,0,0,
            0.35,0.18,0,0.87,0,0,0, 0.35,-0.18,0,0.87,0,0,0]
q0[7+15] = -0.25; q0[7+16] = 0.25; q0[7+18] = 0.90
q0[7+22] = -0.25; q0[7+23] = -0.22; q0[7+25] = 1.25; q0[7+27] = -0.40
v0 = np.zeros(pm.nv)

# ---- limits ----
LIM = json.load(open('/tmp/uturn/h2_limits.json'))
for _i in range(2, pm.njoints):
    _n = pm.names[_i]
    if 'shoulder_roll' in _n:
        pm.lowerPositionLimit[_i+5] = -2.494; pm.upperPositionLimit[_i+5] = 2.494
    if 'wrist_pitch' in _n:
        pm.lowerPositionLimit[_i+5] = -0.576; pm.upperPositionLimit[_i+5] = 0.576
_mmj2 = mujoco.MjModel.from_xml_path('/tmp/uturn/model/scene.xml')
jnames = []
for i in range(2, pm.njoints):
    bid = mujoco.mj_name2id(_mmj2, mujoco.mjtObj.mjOBJ_BODY, pm.names[i])
    jnames.append(mujoco.mj_id2name(_mmj2, mujoco.mjtObj.mjOBJ_JOINT, _mmj2.body_jntadr[bid]))
effort = np.array([LIM[n]['effort'] for n in jnames])
vellim = np.array([LIM[n]['velocity'] for n in jnames])
print('actuated:', len(jnames), 'effort', effort.min(), '-', effort.max(), flush=True)

# ---- frames/targets ----
pin.forwardKinematics(pm, pd, q0); pin.updateFramePlacements(pm, pd)
LF, RF = pm.getFrameId('left_foot'), pm.getFrameId('right_foot')
RK = pm.getFrameId('tennis_racket')
feet_ref = {f: pd.oMf[f].copy() for f in (LF, RF)}
FJ = {f: pm.frames[f].parentJoint for f in (LF, RF)}
FP = {f: pm.frames[f].placement for f in (LF, RF)}
p_off = np.array([0.1025, -0.004, 0.4])
n_body = np.array([0., -1., 0.])
C = np.array([-2.05, -0.25, 1.13])
n_tgt = np.array([np.cos(np.radians(2)), 0., np.sin(np.radians(2))])
v_tgt = 22.0 * np.array([np.cos(np.radians(17)), 0., np.sin(np.radians(17))])
com_ref = np.array([-2.6, 0., 0.95])
MASS = sum(x.mass for x in pm.inertias)
MU_G = 0.6

NQ, NV = pm.nq, pm.nv
NJ = 29              # joint torques
NW = 12              # two 6D foot wrenches
NU = NJ + NW
DT, N = 0.01, 15
SUB = 2  # integration substeps per knot (h=0.005, stable)
S = np.zeros((NV, NJ)); S[6:, :] = np.eye(NJ)

def skew(w):
    return np.array([[0,-w[2],w[1]],[w[2],0,-w[0]],[-w[1],w[0],0]])

def split_u(u):
    return u[:NJ], u[NJ:NJ+6], u[NJ+6:]

def make_fext(q, v, fl, fr):
    pin.forwardKinematics(pm, pd, q, v)
    pin.updateFramePlacements(pm, pd)
    fext = [pin.Force(np.zeros(6)) for _ in range(pm.njoints)]
    for f, W6 in ((LF, fl), (RF, fr)):
        p = pd.oMf[f].translation
        W = np.concatenate([W6[:3], W6[3:] + np.cross(p, W6[:3])])  # frame-point moment -> world-origin moment
        fext[FJ[f]] = pd.oMi[FJ[f]].actInv(pin.Force(W))
    return fext


def genforce_columns(q):
    """G (NV x 12): generalized force per unit world-frame foot wrench, via rnea (validated path)."""
    v0_ = np.zeros(NV)
    a0_ = np.zeros(NV)
    base = np.array(pin.rnea(pm, pd, q, v0_, a0_))
    G = np.zeros((NV, 12))
    for i in range(12):
        Wl = np.zeros(6); Wr = np.zeros(6)
        if i < 6: Wl[i] = 1.0
        else: Wr[i-6] = 1.0
        fext = make_fext(q, v0_, Wl, Wr)
        G[:, i] = base - np.array(pin.rnea(pm, pd, q, v0_, a0_, fext))
    return G

def dyn(q, v, u):
    uj, fl, fr = split_u(u)
    h = DT / SUB
    for _ in range(SUB):
        fext = make_fext(q, v, fl, fr)
        tau = S @ uj - JOINT_DAMPING * v - JOINT_FRIC * np.tanh(v / 0.05)
        a = pin.aba(pm, pd, q, v, tau, fext)
        v = v + np.array(a) * h
        q = pin.integrate(pm, q, v * h)
    return q, v

def dyn_derivs(q, v, u):
    uj, fl, fr = split_u(u)
    h = DT / SUB
    A_tot = np.eye(2*NV); B_tot = np.zeros((2*NV, NU))
    qc, vc = q.copy(), v.copy()
    for _ in range(SUB):
        fext = make_fext(qc, vc, fl, fr)
        tau = S @ uj - JOINT_DAMPING * vc - JOINT_FRIC * np.tanh(vc / 0.05)
        pin.computeABADerivatives(pm, pd, qc, vc, tau, fext)
        da_dq = np.array(pd.ddq_dq); da_dv = np.array(pd.ddq_dv)
        da_dv -= JOINT_DAMPING * np.eye(NV) + JOINT_FRIC * np.diag(1.0 / (0.05 * np.cosh(np.clip(vc/0.05, -20, 20))**2))
        Minv = np.array(pd.Minv)
        da_du = np.zeros((NV, NU))
        da_du[:, :NJ] = Minv @ S
        da_du[:, NJ:] = Minv @ genforce_columns(qc)
        a = np.array(pin.aba(pm, pd, qc, vc, tau, fext))
        v1 = vc + a * h
        J0 = np.array(pin.dIntegrate(pm, qc, v1 * h, pin.ARG0))
        J1 = np.array(pin.dIntegrate(pm, qc, v1 * h, pin.ARG1))
        Dv = da_dq * h; Evv = np.eye(NV) + da_dv * h; Fv = da_du * h
        As = np.zeros((2*NV, 2*NV))
        As[:NV,:NV] = J0 + J1 @ Dv; As[:NV,NV:] = J1 @ Evv
        As[NV:,:NV] = Dv; As[NV:,NV:] = Evv
        Bs = np.zeros((2*NV, NU)); Bs[:NV] = J1 @ Fv; Bs[NV:] = Fv
        A_tot = As @ A_tot
        B_tot = As @ B_tot + Bs
        vc = v1
        qc = pin.integrate(pm, qc, v1 * h)
    return A_tot, B_tot

def residuals(q, v, terminal=False):
    pin.forwardKinematics(pm, pd, q, v)
    pin.updateFramePlacements(pm, pd)
    pin.computeJointJacobians(pm, pd, q)
    out = []
    r_q = (q[7:] - q0[7:])
    Jq = np.zeros((len(r_q), NV)); Jq[:, 6:] = np.eye(NQ-7)
    out.append((r_q, Jq, np.zeros((len(r_q), NV)), 3e-2 * np.ones(len(r_q))))
    out.append((v, np.zeros((NV, NV)), np.eye(NV), 3e-3 * np.ones(NV)))
    for f in (LF, RF):
        M = pd.oMf[f]; R = M.rotation
        J = pin.getFrameJacobian(pm, pd, f, pin.WORLD)
        ref = feet_ref[f]
        out.append((M.translation - ref.translation, J[:3], np.zeros((3, NV)), 1e3 * np.ones(3)))
        r_o = 0.5 * sum(np.cross(R[:, i], ref.rotation[:, i]) for i in range(3))
        out.append((r_o, J[3:], np.zeros((3, NV)), 3e1 * np.ones(3)))
    com = pin.centerOfMass(pm, pd, q)
    Jcom = pin.jacobianCenterOfMass(pm, pd, q)
    out.append((com - com_ref, Jcom, np.zeros((3, NV)), 1e-1 * np.ones(3)))
    if terminal:
        M = pd.oMf[RK]; R = M.rotation
        J = pin.getFrameJacobian(pm, pd, RK, pin.WORLD)
        p_disc = M.translation + R @ p_off
        Jp = J[:3] - skew(R @ p_off) @ J[3:]
        out.append((p_disc - C, Jp, np.zeros((3, NV)), 1e5 * np.ones(3)))
        nw = R @ n_body
        Jn = -0.5 * skew(n_tgt) @ (-skew(nw) @ J[3:])
        out.append((0.5 * np.cross(nw, n_tgt), Jn, np.zeros((3, NV)), 1e4 * np.ones(3)))
        out.append((Jp @ v - v_tgt, np.zeros((3, NV)), Jp, 3e3 * np.ones(3)))
        out.append((J[3:] @ v, np.zeros((3, NV)), J[3:], 1e2 * np.ones(3)))
    return out

def limit_penalty(q, v):
    gq = np.zeros(NV); gv = np.zeros(NV); hq = np.zeros(NV); hv = np.zeros(NV); c = 0.0
    lo = pm.lowerPositionLimit[7:] + 0.03; hi = pm.upperPositionLimit[7:] - 0.03
    qj = q[7:]
    over = np.maximum(qj - hi, 0); under = np.maximum(lo - qj, 0)
    c += 10.0 * (np.sum(over**2) + np.sum(under**2))
    gq[6:] = 20.0 * (over - under); hq[6:] = 20.0 * ((over > 0) | (under > 0))
    vj = v[6:]
    vo = np.maximum(np.abs(vj) - 0.9 * vellim, 0)
    c += 0.5 * np.sum(vo**2)
    gv[6:] = vo * np.sign(vj); hv[6:] = (vo > 0)
    return c, gq, gv, hq, hv

def force_penalty(u):
    """foot wrench feasibility: fz>=0, |ft|<=mu*fz, small moments. elementwise on u[NJ:]"""
    c = 0.0; g = np.zeros(NU); h = np.zeros(NU)
    for sl in (slice(NJ, NJ+6), slice(NJ+6, NJ+12)):
        fx, fy, fz, tx, ty, tz = (u[sl.start+i] for i in range(6))
        pen = np.maximum(-fz, 0.0)
        c += 5e2 * pen**2
        g[sl.start+2] += 5e2 * 2 * pen * (-1)
        h[sl.start+2] += 1e3 * (pen > 0)
        ft = np.hypot(fx, fy)
        cone = np.maximum(ft - MU_G * fz, 0.0)
        c += 5e2 * cone**2
        if cone > 0 and ft > 1e-9:
            dc = np.array([fx/ft, fy/ft, -MU_G])
            g[sl.start:sl.start+3] += 1e3 * cone * dc
            h[sl.start:sl.start+3] += 1e3
        # physical moment bounds: |m_xy| <= FOOT_HALF*fz, |m_z| <= 10
        for mi, mval in ((3, tx), (4, ty)):
            mb = np.maximum(abs(mval) - 0.11 * fz, 0.0)
            c += 5e2 * mb**2
            if mb > 0:
                g[sl.start+mi] += 1e3 * mb * np.sign(mval)
                h[sl.start+mi] += 1e3
                g[sl.start+2] += 1e3 * mb * (-0.11)
                h[sl.start+2] += 1e3 * 0.11**2
        mz = np.maximum(abs(tz) - 10.0, 0.0)
        c += 5e2 * mz**2
        if mz > 0:
            g[sl.start+5] += 1e3 * mz * np.sign(tz)
            h[sl.start+5] += 1e3
        c += 1e-5 * (tx**2 + ty**2 + tz**2)
        g[sl.start+3:sl.start+6] += 2e-5 * np.array([tx, ty, tz])
        h[sl.start+3:sl.start+6] += 2e-5
        # tiny force reg
        c += 1e-6 * (fx**2 + fy**2 + fz**2)
        g[sl.start:sl.start+3] += 2e-6 * np.array([fx, fy, fz])
        h[sl.start:sl.start+3] += 2e-6
    return c, g, h

def cost_and_grad(q, v, u, terminal=False):
    c = 0.0
    lq = np.zeros(NV); lv = np.zeros(NV); lu = np.zeros(NU)
    Lqq = np.zeros((NV, NV)); Lvv = np.zeros((NV, NV)); Luu = np.zeros((NU, NU))
    for r, Jq, Jv, w in residuals(q, v, terminal):
        c += 0.5 * np.sum(w * r**2)
        lq += Jq.T @ (w * r); lv += Jv.T @ (w * r)
        Lqq += Jq.T @ (w[:, None] * Jq); Lvv += Jv.T @ (w[:, None] * Jv)
    wu = 1e-4 / effort**2
    c += 0.5 * np.sum(wu * u[:NJ]**2); lu[:NJ] = wu * u[:NJ]; Luu[:NJ,:NJ] = np.diag(wu)
    cl, gq, gv, hq, hv = limit_penalty(q, v)
    c += cl; lq += gq; lv += gv; Lqq += np.diag(hq); Lvv += np.diag(hv)
    cf, gf, hf = force_penalty(u)
    c += cf; lu += gf; Luu += np.diag(hf)
    return c, lq, lv, lu, Lqq, Lvv, Luu

def clip_u(u):
    u = u.copy()
    u[:NJ] = np.clip(u[:NJ], -effort, effort)
    for b in (NJ, NJ+6):
        fz = np.clip(u[b+2], 0.0, 1500.0)
        u[b+2] = fz
        u[b+0] = np.clip(u[b+0], -0.6*fz, 0.6*fz)
        u[b+1] = np.clip(u[b+1], -0.6*fz, 0.6*fz)
        u[b+3] = np.clip(u[b+3], -0.11*fz, 0.11*fz)
        u[b+4] = np.clip(u[b+4], -0.11*fz, 0.11*fz)
        u[b+5] = np.clip(u[b+5], -10.0, 10.0)
    return u

def rollout(us, x0q, x0v):
    qs = [x0q]; vs = [x0v]; tot = 0.0
    for k in range(N):
        u = clip_u(us[k])
        c, *_ = cost_and_grad(qs[-1], vs[-1], u)
        tot += c * DT
        q1, v1 = dyn(qs[-1], vs[-1], u)
        if not (np.all(np.isfinite(q1)) and np.all(np.isfinite(v1))) :
            return qs, vs, float('inf')
        qs.append(q1); vs.append(v1)
    ct, *_ = cost_and_grad(qs[-1], vs[-1], us[-1], terminal=True)
    tot += ct
    if not np.isfinite(tot):
        tot = float('inf')
    return qs, vs, tot

# init: contact-static equilibrium with PHYSICAL bounds (CoP moments limited by foot size)
from scipy.optimize import lsq_linear
pin.forwardKinematics(pm, pd, q0, v0); pin.updateFramePlacements(pm, pd)
pin.computeJointJacobians(pm, pd, q0)
nle = np.array(pin.nonLinearEffects(pm, pd, q0, v0))
Aeq = np.zeros((NV, NU)); Aeq[:, :NJ] = S
Aeq[:, NJ:] = genforce_columns(q0)
FOOT_HALF = 0.11  # m, CoP travel allowance -> moment bound per axis
lb = np.full(NU, -np.inf); ub = np.full(NU, np.inf)
lb[:NJ] = -effort; ub[:NJ] = effort
for base in (NJ, NJ+6):
    lb[base+2] = 100.0; ub[base+2] = 1500.0      # fz
    lb[base+0] = -400.0; ub[base+0] = 400.0      # fx
    lb[base+1] = -400.0; ub[base+1] = 400.0      # fy
    lb[base+3] = -45.0;  ub[base+3] = 45.0       # mx
    lb[base+4] = -45.0;  ub[base+4] = 45.0       # my
    lb[base+5] = -10.0;  ub[base+5] = 10.0       # mz
res = lsq_linear(Aeq, nle, bounds=(lb, ub), method='bvls', max_iter=5000, tol=1e-12)
xs = res.x
resid = Aeq @ xs - nle
print('static init residual max', float(np.abs(resid).max()), flush=True)
u_g = xs[:NJ].copy()
fl_init = xs[NJ:NJ+6].copy(); fr_init = xs[NJ+6:NJ+12].copy()
print('init fz', fl_init[2], fr_init[2], 'my', fl_init[4], fr_init[4], flush=True)
_chk_fext = make_fext(q0, v0, fl_init, fr_init)
_chk = pin.aba(pm, pd, q0, v0, S @ u_g, _chk_fext)
print('init max|a|', float(np.abs(_chk).max()), flush=True)
us = []
for k in range(N):
    u = np.zeros(NU)
    u[:NJ] = u_g
    u[NJ:NJ+6] = fl_init
    u[NJ+6:] = fr_init
    us.append(u)
qs, vs, best = rollout(us, q0, v0)
print('initial cost', round(best, 2) if np.isfinite(best) else 'inf', flush=True)
while len(qs) < N + 1:
    qs.append(qs[-1]); vs.append(vs[-1])
if not np.isfinite(best):
    best = 1e12
    print('WARNING: initial rollout diverged, starting from padded trajectory', flush=True)

mu = 1e-2
t0 = time.time()
for it in range(500):
    ct, lqT, lvT, _, LqqT, LvvT, _ = cost_and_grad(qs[-1], vs[-1], us[-1], terminal=True)
    Vx = np.hstack([lqT, lvT])
    Vxx = np.zeros((2*NV, 2*NV)); Vxx[:NV,:NV] = LqqT; Vxx[NV:,NV:] = LvvT
    ks = [None]*N; Ks = [None]*N
    ok = True
    for k in range(N-1, -1, -1):
        q, v, u = qs[k], vs[k], us[k]
        uc = u.copy(); uc[:NJ] = np.clip(uc[:NJ], -effort, effort)
        c, lq, lv, lu, Lqq, Lvv, Luu = cost_and_grad(q, v, uc)
        A, B = dyn_derivs(q, v, uc)
        lx = np.hstack([lq, lv]) * DT
        lxx = np.zeros((2*NV, 2*NV)); lxx[:NV,:NV] = Lqq*DT; lxx[NV:,NV:] = Lvv*DT
        Qx = lx + A.T @ Vx
        Qu = lu * DT + B.T @ Vx
        Qxx = lxx + A.T @ Vxx @ A
        Quu = Luu * DT + B.T @ Vxx @ B
        Qux = B.T @ Vxx @ A
        Quu_r = Quu + mu * np.eye(NU)
        try:
            kff = -np.linalg.solve(Quu_r, Qu)
            K = -np.linalg.solve(Quu_r, Qux)
        except np.linalg.LinAlgError:
            mu *= 10; ok = False; break
        ks[k] = kff; Ks[k] = K
        Vx = Qx + K.T @ Quu @ kff + K.T @ Qu + Qux.T @ kff
        Vxx = Qxx + K.T @ Quu @ K + K.T @ Qux + Qux.T @ K
        Vxx = 0.5 * (Vxx + Vxx.T)
    if not ok:
        continue
    done = False
    for alpha in (1.0, 0.5, 0.25, 0.1, 0.03):
        qn = [q0]; vn = [v0]; un = []
        for k in range(N):
            dx = np.hstack([pin.difference(pm, qs[k], qn[k]), vn[k] - vs[k]])
            u = clip_u(us[k] + alpha * ks[k] + Ks[k] @ dx)
            un.append(u)
            q1, v1 = dyn(qn[k], vn[k], u)
            qn.append(q1); vn.append(v1)
        qs2, vs2, tot2 = rollout(un, q0, v0)
        if tot2 < best and np.isfinite(tot2):
            best = tot2; us = un; qs, vs = qs2, vs2
            mu = max(mu/3, 1e-6); done = True
            break
    if not done:
        mu *= 5
    if it % 10 == 0 or it < 5:
        print(f'it {it:3d} cost {best:9.3f} mu {mu:.1e} t {time.time()-t0:.0f}s', flush=True)
    if it > 150 and mu > 1e6:
        print('stalled'); break

# ---- report ----
qf, vf = qs[-1], vs[-1]
pin.forwardKinematics(pm, pd, qf, vf); pin.updateFramePlacements(pm, pd)
pin.computeJointJacobians(pm, pd, qf)
M = pd.oMf[RK]
p_disc = M.translation + M.rotation @ p_off
nw = M.rotation @ n_body
J = pin.getFrameJacobian(pm, pd, RK, pin.WORLD)
Jp = J[:3] - skew(M.rotation @ p_off) @ J[3:]
v_disc = Jp @ vf
print('FINAL disc pos', np.round(p_disc, 4), 'target', np.round(C, 4), 'err', round(float(np.linalg.norm(p_disc-C)), 5))
print('FINAL normal ang err deg', round(float(np.degrees(np.arccos(np.clip(nw @ n_tgt, -1, 1)))), 3))
print('FINAL |v_disc|', round(float(np.linalg.norm(v_disc)), 3), 'target 22.0 dir', np.round(v_disc/max(np.linalg.norm(v_disc),1e-9), 3))
print('FINAL foot slip: L', np.round(pd.oMf[LF].translation - feet_ref[LF].translation, 4), 'R', np.round(pd.oMf[RF].translation - feet_ref[RF].translation, 4))
U = np.array(us)
print('peak torques vs limits:')
for i, nme in enumerate(jnames):
    pk = float(np.abs(U[:, i]).max())
    flag = ' <<< BINDING' if pk > 0.85 * effort[i] else ''
    print(f'  {nme:30s} {pk:7.1f} / {effort[i]:6.1f}{flag}')
wl = U[:, NJ:NJ+6]; wr = U[:, NJ+6:]
print('foot force ranges: fz L [%.1f, %.1f] R [%.1f, %.1f]' % (wl[:,2].min(), wl[:,2].max(), wr[:,2].min(), wr[:,2].max()))
cone_l = np.hypot(wl[:,0], wl[:,1]) - MU_G*wl[:,2]; cone_r = np.hypot(wr[:,0], wr[:,1]) - MU_G*wr[:,2]
print('worst cone violation L %.1f R %.1f (<=0 ok)' % (cone_l.max(), cone_r.max()))
np.savez('/tmp/uturn/swing_sol.npz', qs=np.array(qs), vs=np.array(vs), us=U, dt=DT, C=C, n_tgt=n_tgt, v_tgt=v_tgt, effort=effort, jnames=jnames)
print('saved /tmp/uturn/swing_sol.npz')
