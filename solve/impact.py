import mujoco, numpy as np

m = mujoco.MjModel.from_xml_path('/tmp/uturn/model/scene.xml')
m.opt.timestep = 2.5e-4
d = mujoco.MjData(m)
jid = lambda n: mujoco.mj_name2id(m, mujoco.mjtObj.mjOBJ_JOINT, n)
adr = lambda n: m.jnt_qposadr[jid(n)]
vadr = lambda n: m.jnt_dofadr[jid(n)]
bid = mujoco.mj_name2id(m, mujoco.mjtObj.mjOBJ_BODY, 'tennis_racket')
gid_ball = mujoco.mj_name2id(m, mujoco.mjtObj.mjOBJ_GEOM, 'feed_ball_geom')
gid_rack = mujoco.mj_name2id(m, mujoco.mjtObj.mjOBJ_GEOM, 'tennis_racket_collision')
HOME = np.array([0,0,1.03, 1,0,0,0, -0.25,0,0,0.5,0,-0.25, -0.25,0,0,0.5,0,-0.25, 0,0,0, 0.35,0.18,0,0.87,0,0,0, 0.35,-0.18,0,0.87,0,0,0, 0,0,-2, 1,0,0,0])
RX, RY, RZ = -2.6, 0.0, 0.98
ARM = ['right_shoulder_pitch','right_shoulder_roll','right_shoulder_yaw','right_elbow','right_wrist_pitch','right_wrist_roll','right_wrist_yaw']
READY = dict(right_shoulder_pitch=-0.25, right_shoulder_roll=-0.22, right_elbow=1.25, right_wrist_pitch=-0.40,
             left_shoulder_pitch=-0.25, left_shoulder_roll=0.25, left_elbow=0.90)

def base_pose(**kw):
    q = HOME.copy(); q[0], q[1], q[2] = RX, RY, RZ
    for k, v in kw.items(): q[adr(k + '_joint')] = v
    return q

def fk(q):
    d.qpos[:] = q; d.qvel[:] = 0; mujoco.mj_forward(m, d)
    return d.xpos[bid].copy(), d.xmat[bid].reshape(3, 3).copy()

def ik(q0, p_tgt, n_tgt, iters=1500):
    q = q0.copy(); nv = m.nv
    didx = [vadr(a + '_joint') for a in ARM]
    for it in range(iters):
        p, R = fk(q)
        ep = p_tgt - p
        z = R[:, 2]
        eo = 0.5 * np.cross(z, n_tgt)
        if np.linalg.norm(ep) < 2e-4 and np.linalg.norm(eo) < 2e-3: break
        jacp = np.zeros((3, nv)); jacr = np.zeros((3, nv))
        mujoco.mj_jacBody(m, d, jacp, jacr, bid)
        Ja = np.vstack([jacp, 0.6 * jacr])[:, didx]
        e = np.hstack([ep, 0.6 * eo])
        dq = Ja.T @ np.linalg.solve(Ja @ Ja.T + 3e-4 * np.eye(6), e)
        for k, a in enumerate(ARM):
            lo, hi = m.jnt_range[jid(a + '_joint')]
            q[adr(a + '_joint')] = np.clip(q[adr(a + '_joint')] + 0.25 * dq[k], lo, hi)
    return q, np.linalg.norm(ep)

def run_impact(V, tilt_deg, brush_deg, verbose=True):
    tilt = np.radians(tilt_deg); brush = np.radians(brush_deg)
    n = np.array([np.cos(tilt), 0, np.sin(tilt)])
    s = np.array([np.cos(brush), 0, np.sin(brush)])
    C = np.array([-1.85, -0.15, 0.90])
    pA, pB = C - 0.28 * s, C + 0.10 * s
    T = 0.38 / V
    q0 = base_pose(**READY)
    qA, eA = ik(q0, pA, n); qB, eB = ik(qA, pB, n)
    dt = m.opt.timestep
    N = int(T / dt); N2 = N + int(0.08 / dt)
    d.qpos[:] = qA; d.qvel[:] = 0
    d.qpos[-7:-4] = C  # ball at contact point
    mujoco.mj_forward(m, d)
    frozen = True; first = None; last = None; exitv = exitw = None
    qv_full = np.zeros(m.nv)
    for a in ARM: qv_full[vadr(a + '_joint')] = (qB[adr(a + '_joint')] - qA[adr(a + '_joint')]) / T
    for i in range(N2):
        t = i * dt
        w = min(t / T, 1.0)
        q = qA + (qB - qA) * w
        if frozen:
            q[-7:-4] = C; q[-4:] = [1, 0, 0, 0]
        d.qpos[:] = q
        qv = qv_full if t < T else np.zeros(m.nv)
        if frozen: qv[-6:] = 0
        d.qvel[:] = qv
        mujoco.mj_step(m, d)
        touch = any((c.geom1 == gid_ball and c.geom2 == gid_rack) or (c.geom2 == gid_ball and c.geom1 == gid_rack) for c in d.contact[:d.ncon])
        if touch and first is None: first = t; frozen = False
        if first is not None and touch: last = t
        if first is not None and not touch and last is not None:
            exitv = d.qvel[-6:-3].copy(); exitw = d.qvel[-3:].copy()
            break
    if verbose:
        if exitv is None:
            print(f'  V={V} tilt={tilt_deg} brush={brush_deg}: NO CONTACT (ik {eA:.1e}/{eB:.1e})')
        else:
            sp = np.linalg.norm(exitv); om = np.linalg.norm(exitw)
            print(f'  V={V} tilt={tilt_deg} brush={brush_deg}: dwell {(last-first)*1000:.1f}ms exit {sp:.2f} m/s ({sp*2.23694:.1f} mph) spin {om:.1f} rad/s ({om*9.5493:.0f} rpm) dir={np.round(exitv/sp,3)} spinax={np.round(exitw/max(om,1e-9),2)}')
    return exitv, exitw

if __name__ == '__main__':
    print('--- e measurement: brush=0, tilt=2 ---')
    for V in [14, 17, 20]: run_impact(V, 2, 0)
    print('--- brush sweep, V=17, tilt=2 ---')
    for b in [5, 10, 20, 30, 45]: run_impact(17, 2, b)
