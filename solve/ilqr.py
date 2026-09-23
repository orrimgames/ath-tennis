import numpy as np, pinocchio as pin, mujoco, json, time, sys

exec(open('/tmp/uturn/build_h2_pin.py').read().split("if __name__ == '__main__':")[0])
pm, _mmj = build('/tmp/uturn/model/scene.xml')
pd = pm.createData()

# ---- ready pose (literal, from impact.py HOME/READY) ----
q0 = np.zeros(36)
q0[0:3] = [-2.6, 0.0, 0.98]
q0[3:7] = [0., 0., 0., 1.]   # pinocchio freeflyer (x,y,z,w)
q0[7:36] = [-0.25,0,0,0.5,0,-0.25, -0.25,0,0,0.5,0,-0.25, 0,0,0,
            0.35,0.18,0,0.87,0,0,0, 0.35,-0.18,0,0.87,0,0,0]
# READY overrides (joint order: legs 0-11, waist 12-14, left arm 15-21, right arm 22-28)
q0[7+15] = -0.25   # left_shoulder_pitch
q0[7+16] =  0.25   # left_shoulder_roll
q0[7+18] =  0.90   # left_elbow
q0[7+22] = -0.25   # right_shoulder_pitch
q0[7+23] = -0.22   # right_shoulder_roll
q0[7+25] =  1.25   # right_elbow
q0[7+27] = -0.40   # right_wrist_pitch
v0 = np.zeros(pm.nv)

# ---- limits ----
LIM = json.load(open('/tmp/uturn/h2_limits.json'))
_mmj2 = mujoco.MjModel.from_xml_path('/tmp/uturn/model/scene.xml')
jnames = []
for i in range(2, pm.njoints):
    bid = mujoco.mj_name2id(_mmj2, mujoco.mjtObj.mjOBJ_BODY, pm.names[i])
    jid_ = _mmj2.body_jntadr[bid]
    jnames.append(mujoco.mj_id2name(_mmj2, mujoco.mjtObj.mjOBJ_JOINT, jid_))
effort = np.array([LIM[n]['effort'] for n in jnames])
vellim = np.array([LIM[n]['velocity'] for n in jnames])
print('actuated:', len(jnames), 'effort range', effort.min(), '-', effort.max())

# ---- frames/targets ----
pin.forwardKinematics(pm, pd, q0); pin.updateFramePlacements(pm, pd)
LF, RF = pm.getFrameId('left_foot'), pm.getFrameId('right_foot')
RK = pm.getFrameId('tennis_racket')
feet_ref = {f: pd.oMf[f].copy() for f in (LF, RF)}
p_off = np.array([0.1025, -0.004, 0.4])
n_body = np.array([0., -1., 0.])           # disc normal in racket frame
C = np.array([-2.05, -0.25, 1.13])
n_tgt = np.array([np.cos(np.radians(2)), 0., np.sin(np.radians(2))])
v_tgt = 22.0 * np.array([np.cos(np.radians(17)), 0., np.sin(np.radians(17))])
com_ref = np.array([-2.6, 0., 0.95])

NQ, NV, NU = pm.nq, pm.nv, 29
DT, N = 0.01, 100
S = np.zeros((NV, NU)); S[6:, :] = np.eye(NU)

def dyn(q, v, u):
    tau = S @ u
    a = pin.aba(pm, pd, q, v, tau)
    v1 = v + a * DT
    q1 = pin.integrate(pm, q, v1 * DT)
    return q1, v1

def dyn_derivs(q, v, u):
    pin.computeABADerivatives(pm, pd, q, v, S @ u)
    # da/dq (nvxnv), da/dv, da/dtau -> da/du
    da_dq = np.array(pd.ddq_dq); da_dv = np.array(pd.ddq_dv); da_du = np.array(pd.Minv) @ S
    v1 = v + np.array(pin.aba(pm, pd, q, v, S @ u)) * DT
    J0 = np.array(pin.dIntegrate(pm, q, v1 * DT, pin.ARG0))
    J1 = np.array(pin.dIntegrate(pm, q, v1 * DT, pin.ARG1))
    # tangent sizes: dq part nv=35, but J0/J1 are nq x nv? pin returns (nq, nv)?? -> shapes printed once
    return da_dq, da_dv, da_du, J0, J1

def skew(w):
    return np.array([[0,-w[2],w[1]],[w[2],0,-w[0]],[-w[1],w[0],0]])

def residuals(q, v, terminal=False):
    """returns list of (r, Jr_dq, Jr_dv, w) tuples; Jr_* map (dq_tangent nv, dv nv)"""
    pin.forwardKinematics(pm, pd, q, v)
    pin.updateFramePlacements(pm, pd)
    pin.computeJointJacobians(pm, pd, q)
    out = []
    # state reg (joints only, mild) + velocity reg
    r_q = (q[7:] - q0[7:])
    Jq = np.zeros((len(r_q), NV)); Jq[:, 6:] = np.eye(NQ-7)
    out.append((r_q, Jq, np.zeros((len(r_q), NV)), 3e-2 * np.ones(len(r_q))))
    r_v = v
    Jv = np.eye(NV)
    out.append((r_v, np.zeros((NV, NV)), Jv, 3e-3 * np.ones(NV)))
    # feet welds
    for f in (LF, RF):
        M = pd.oMf[f]; R = M.rotation; p = M.translation
        J = pin.getFrameJacobian(pm, pd, f, pin.WORLD)
        ref = feet_ref[f]
        r_p = p - ref.translation
        out.append((r_p, J[:3], np.zeros((3, NV)), 1e2 * np.ones(3)))
        r_o = 0.5 * sum(np.cross(R[:, i], ref.rotation[:, i]) for i in range(3))
        out.append((r_o, J[3:], np.zeros((3, NV)), 1e1 * np.ones(3)))
    # com
    com = pin.centerOfMass(pm, pd, q)
    Jcom = pin.jacobianCenterOfMass(pm, pd, q)
    out.append((com - com_ref, Jcom, np.zeros((3, NV)), 1e-1 * np.ones(3)))
    if terminal:
        M = pd.oMf[RK]; R = M.rotation; p = M.translation
        J = pin.getFrameJacobian(pm, pd, RK, pin.WORLD)
        p_disc = p + R @ p_off
        Jp_disc = J[:3] - skew(R @ p_off) @ J[3:]
        r_p = p_disc - C
        out.append((r_p, Jp_disc, np.zeros((3, NV)), 1e5 * np.ones(3)))
        nw = R @ n_body
        r_n = 0.5 * np.cross(nw, n_tgt)
        Jn = -0.5 * skew(n_tgt) @ (-skew(nw) @ J[3:])
        out.append((r_n, Jn, np.zeros((3, NV)), 1e4 * np.ones(3)))
        v_disc = Jp_disc @ v
        r_vd = v_disc - v_tgt
        out.append((r_vd, np.zeros((3, NV)), Jp_disc, 3e3 * np.ones(3)))
        r_w = J[3:] @ v
        out.append((r_w, np.zeros((3, NV)), J[3:], 1e2 * np.ones(3)))
    return out

def limit_penalty(q, v):
    """elementwise quadratic penalties outside margins; returns (cost, g_dq(nv), g_dv(nv), Hdiag_dq, Hdiag_dv)"""
    gq = np.zeros(NV); gv = np.zeros(NV); hq = np.zeros(NV); hv = np.zeros(NV); c = 0.0
    lo = pm.lowerPositionLimit[7:] + 0.03; hi = pm.upperPositionLimit[7:] - 0.03
    qj = q[7:]
    over = np.maximum(qj - hi, 0); under = np.maximum(lo - qj, 0)
    c += 10.0 * (np.sum(over**2) + np.sum(under**2))
    gq[6:] = 20.0 * (over - under); hq[6:] = 20.0 * ((over > 0) | (under > 0))
    vj = v[6:]
    vo = np.maximum(np.abs(vj) - 0.9 * vellim, 0)
    c += 0.5 * np.sum(vo**2)
    gv[6:] = 1.0 * vo * np.sign(vj); hv[6:] = 1.0 * (vo > 0)
    return c, gq, gv, hq, hv

def cost_and_grad(q, v, u, terminal=False):
    c = 0.0
    lq = np.zeros(NV); lv = np.zeros(NV); lu = np.zeros(NU)
    Lqq = np.zeros((NV, NV)); Lvv = np.zeros((NV, NV)); Luu = np.zeros((NU, NU))
    for r, Jq, Jv, w in residuals(q, v, terminal):
        c += 0.5 * np.sum(w * r**2)
        lq += Jq.T @ (w * r); lv += Jv.T @ (w * r)
        Lqq += Jq.T @ (w[:, None] * Jq); Lvv += Jv.T @ (w[:, None] * Jv)
    wu = 1e-4 / effort**2
    c += 0.5 * np.sum(wu * u**2); lu = wu * u; Luu = np.diag(wu)
    cl, gq, gv, hq, hv = limit_penalty(q, v)
    c += cl; lq += gq; lv += gv; Lqq += np.diag(hq); Lvv += np.diag(hv)
    return c, lq, lv, lu, Lqq, Lvv, Luu

# ---- iLQR ----
def rollout(us, x0q, x0v):
    qs = [x0q]; vs = [x0v]; tot = 0.0
    for k in range(N):
        u = np.clip(us[k], -effort, effort)
        c, *_ = cost_and_grad(qs[-1], vs[-1], u)
        tot += c * DT
        q1, v1 = dyn(qs[-1], vs[-1], u)
        qs.append(q1); vs.append(v1)
    ct, *_ = cost_and_grad(qs[-1], vs[-1], np.zeros(NU), terminal=True)
    tot += ct
    return qs, vs, tot

u_g = np.array(pin.rnea(pm, pd, q0, v0, np.zeros(NV)))[6:]
us = [u_g.copy() for _ in range(N)]
qs, vs, best = rollout(us, q0, v0)
print('initial cost', round(best, 2))
mu = 1e-2
t_start = time.time()
for it in range(400):
    # derivatives + backward pass
    ks = [None] * N; Ks = [None] * N
    ct, lqT, lvT, _, LqqT, LvvT, _ = cost_and_grad(qs[-1], vs[-1], np.zeros(NU), terminal=True)
    Vx = np.hstack([lqT, lvT])
    Vxx = np.zeros((2*NV, 2*NV)); Vxx[:NV,:NV] = LqqT; Vxx[NV:,NV:] = LvvT
    ok = True
    for k in range(N-1, -1, -1):
        q, v, u = qs[k], vs[k], np.clip(us[k], -effort, effort)
        c, lq, lv, lu, Lqq, Lvv, Luu = cost_and_grad(q, v, u)
        da_dq, da_dv, da_du, Ji0, Ji1 = dyn_derivs(q, v, u)
        # x_{k+1} = (q1, v1); dq1 = Ji0 dq + Ji1 (dv + (da_dq dq + da_dv dv + da_du du) dt)
        Dv = da_dq * DT; Evv = np.eye(NV) + da_dv * DT; Fv = da_du * DT
        A_qq = Ji0 + Ji1 @ Dv
        A_qv = Ji1 @ Evv
        A = np.zeros((2*NV, 2*NV))
        A[:NV, :NV] = A_qq; A[:NV, NV:] = A_qv
        A[NV:, :NV] = Dv; A[NV:, NV:] = Evv
        B = np.zeros((2*NV, NU)); B[:NV] = Ji1 @ Fv; B[NV:] = Fv
        lx = np.hstack([lq, lv]) * DT
        lxx = np.zeros((2*NV, 2*NV)); lxx[:NV,:NV] = Lqq*DT; lxx[NV:,NV:] = Lvv*DT
        Qx = lx + A.T @ Vx
        Qu = lu * DT + B.T @ Vx
        Qxx = lxx + A.T @ Vxx @ A
        Quu = np.diag(1e-4/effort**2) * DT + B.T @ Vxx @ B
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
    # forward line search
    done = False
    for alpha in (1.0, 0.5, 0.25, 0.1, 0.03):
        qn = [q0]; vn = [v0]; un = []
        for k in range(N):
            dx = np.hstack([pin.difference(pm, qs[k], qn[k]), vn[k] - vs[k]])
            u = np.clip(us[k] + alpha * ks[k] + Ks[k] @ dx, -effort, effort)
            un.append(u)
            q1, v1 = dyn(qn[k], vn[k], u)
            qn.append(q1); vn.append(v1)
        qs2, vs2, tot2 = rollout(un, q0, v0)
        if tot2 < best:
            best = tot2; us = un; qs, vs = qs2, vs2
            mu = max(mu / 3, 1e-6)
            done = True
            break
    if not done:
        mu *= 5
    if it % 20 == 0 or it < 5:
        print(f'it {it:3d} cost {best:9.3f} mu {mu:.1e} elapsed {time.time()-t_start:.0f}s', flush=True)
    if it > 60 and mu > 1e4:
        print('stalled'); break

# ---- report ----
qf, vf = qs[-1], vs[-1]
pin.forwardKinematics(pm, pd, qf, vf); pin.updateFramePlacements(pm, pd)
M = pd.oMf[RK]
p_disc = M.translation + M.rotation @ p_off
nw = M.rotation @ n_body
J = pin.getFrameJacobian(pm, pd, RK, pin.WORLD)
v_disc = (J[:3] - skew(M.rotation @ p_off) @ J[3:]) @ vf
print('FINAL disc pos', np.round(p_disc, 4), 'target', np.round(C, 4), 'err', round(float(np.linalg.norm(p_disc - C)), 5))
print('FINAL normal', np.round(nw, 4), 'ang err deg', round(float(np.degrees(np.arccos(np.clip(nw @ n_tgt, -1, 1)))), 3))
print('FINAL |v_disc|', round(float(np.linalg.norm(v_disc)), 3), 'target 22.0; v', np.round(v_disc, 3))
U = np.array(us)
print('peak torque per joint vs limit:')
for i, nme in enumerate(jnames):
    pk = float(np.abs(U[:, i]).max())
    flag = ' <<< BINDING' if pk > 0.85 * effort[i] else ''
    print(f'  {nme:30s} peak {pk:7.1f} / {effort[i]:6.1f}{flag}')
# base wrench residual feasibility
worst_fz = 1e9; worst_cone = 0.0
for k in range(0, N+1, 5):
    q, v = qs[k], vs[k]
    u = np.clip(us[min(k, N-1)], -effort, effort)
    a = pin.aba(pm, pd, q, v, S @ u)
    r = pin.rnea(pm, pd, q, v, a) - S @ u   # required base wrench (6,)
    fz = -r[2]  # ground reaction up = -(residual z)? sign check later
    worst_fz = min(worst_fz, r[2])
    cone = np.hypot(r[0], r[1]) - 0.6 * abs(r[2])
    worst_cone = max(worst_cone, cone)
print('base residual wrench: min Fz(raw) ', round(float(worst_fz),1), 'worst cone margin (neg=ok)', round(float(worst_cone),1))
np.savez('/tmp/uturn/swing_sol.npz', qs=np.array(qs), vs=np.array(vs), us=np.array(us), dt=DT,
         C=C, n_tgt=n_tgt, v_tgt=v_tgt, effort=effort, jnames=jnames)
print('saved /tmp/uturn/swing_sol.npz')
