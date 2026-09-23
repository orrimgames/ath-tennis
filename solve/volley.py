import mujoco, numpy as np, imageio.v2 as imageio, sys, os

m = mujoco.MjModel.from_xml_path('/tmp/uturn/model/scene.xml')
d = mujoco.MjData(m)
jid = lambda n: mujoco.mj_name2id(m, mujoco.mjtObj.mjOBJ_JOINT, n)
adr = lambda n: m.jnt_qposadr[jid(n)]
HOME = np.array([0,0,1.03, 1,0,0,0, -0.25,0,0,0.5,0,-0.25, -0.25,0,0,0.5,0,-0.25, 0,0,0, 0.35,0.18,0,0.87,0,0,0, 0.35,-0.18,0,0.87,0,0,0, 0,0,-2, 1,0,0,0])
RX, RY, RZ = -2.6, 0.0, 0.98   # robot faces +x: net at x=0 in front

def pose(**kw):
    q = HOME.copy(); q[0], q[1], q[2] = RX, RY, RZ
    for k, v in kw.items():
        if k == 'rootx': q[0] = RX + v
        elif k == 'rootz': q[2] = RZ + v
        else: q[adr(k + '_joint')] = v
    return q

READY = dict(right_shoulder_pitch=-0.25, right_shoulder_roll=-0.22, right_elbow=1.25, right_wrist_pitch=-1.15,
             left_shoulder_pitch=-0.25, left_shoulder_roll=0.25, left_elbow=0.90)
TURN = dict(READY, waist_yaw=-0.30, waist_pitch=0.05, right_shoulder_pitch=-0.15, right_elbow=1.30,
            left_shoulder_pitch=-0.55)
SWING = dict(TURN, left_hip_pitch=-0.62, left_knee=0.95, left_ankle_pitch=-0.10,
             right_hip_pitch=-0.15, right_knee=0.45, rootz=-0.02)
PLANT = dict(TURN, left_hip_pitch=-0.72, left_knee=0.75, left_ankle_pitch=-0.24,
             right_hip_pitch=0.18, right_knee=0.10, right_ankle_pitch=-0.06, rootx=0.13, rootz=-0.035)
CONTACT = dict(PLANT, waist_yaw=0.10, waist_pitch=0.10,
               right_shoulder_pitch=-0.55, right_shoulder_roll=-0.15, right_elbow=1.00,
               left_shoulder_pitch=-0.20)

KF = [(0.0, READY), (0.8, READY), (1.4, TURN), (1.62, SWING), (1.80, PLANT), (1.95, CONTACT),
      (2.6, CONTACT), (3.6, READY), (4.2, READY)]

def at(t):
    if t <= KF[0][0]: return pose(**KF[0][1])
    for i in range(1, len(KF)):
        t1, k1 = KF[i]
        if t <= t1:
            t0, k0 = KF[i-1]
            w = 0.5 * (1 - np.cos(np.pi * (t - t0) / max(t1 - t0, 1e-6)))
            qa, qb = pose(**k0), pose(**k1)
            q = qa + (qb - qa) * w; q[3:7] = qa[3:7]
            return q
    return pose(**KF[-1][1])

CONTACT_PT = None  # set from FK at T_HIT below
BALL_IN_START = np.array([2.5, -0.10, 1.55]); T_IN0, T_HIT = 1.15, 1.93
_d = mujoco.MjData(m); _d.qpos[:] = at(T_HIT); mujoco.mj_forward(m, _d)
_b = mujoco.mj_name2id(m, mujoco.mjtObj.mjOBJ_BODY, 'tennis_racket')
_g0, _gn = m.body_geomadr[_b], m.body_geomnum[_b]
_ctr = np.mean([_d.geom_xpos[_g0+i] for i in range(_gn)], axis=0)
CONTACT_PT = _ctr + np.array([0.045, 0.0, 0.0])
print('stringbed ctr', np.round(_ctr, 3), 'contact pt', np.round(CONTACT_PT, 3))
OUT_DIR = np.array([1.0, 0.03, -0.06]); OUT_DIR /= np.linalg.norm(OUT_DIR)
def ball_at(t):
    if t < T_IN0: return np.array([0, 0, -2.0])
    if t <= T_HIT: return BALL_IN_START + (CONTACT_PT - BALL_IN_START) * ((t - T_IN0) / (T_HIT - T_IN0))
    if t <= 3.0: return CONTACT_PT + OUT_DIR * (13.0 * (t - T_HIT))
    return np.array([0, 0, -2.0])

CAM = (90, 10, 3.8, [-2.4, 0, 1.05])
def render(t, path, cam=CAM):
    q = at(t); q[-7:-4] = ball_at(t)
    d.qpos[:] = q; mujoco.mj_forward(m, d)
    c = mujoco.MjvCamera(); c.azimuth, c.elevation, c.distance = cam[0], cam[1], cam[2]; c.lookat[:] = cam[3]
    r = mujoco.Renderer(m, height=720, width=1280); r.update_scene(d, c)
    imageio.imwrite(path, r.render())

if __name__ == '__main__':
    if sys.argv[1] == 'stills':
        for t, tag in [(0.0, 'ready'), (1.2, 'turn'), (1.68, 'midstep'), (1.95, 'contact'), (2.4, 'finish')]:
            render(t, f'/tmp/uturn/v_{tag}.png')
        print('stills ok')
    else:
        os.makedirs('/tmp/uturn/vframes', exist_ok=True)
        N = int(30 * 4.2)
        for i in range(N):
            render(i / 30.0, f'/tmp/uturn/vframes/{i:04d}.png')
        print('frames:', N)
