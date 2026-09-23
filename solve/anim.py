import mujoco, numpy as np, imageio.v2 as imageio, os

m = mujoco.MjModel.from_xml_path('/tmp/uturn/model/scene.xml')
d = mujoco.MjData(m)
jid = lambda n: mujoco.mj_name2id(m, mujoco.mjtObj.mjOBJ_JOINT, n)
adr = lambda n: m.jnt_qposadr[jid(n)]
HOME = np.array([0,0,1.03, 1,0,0,0, -0.25,0,0,0.5,0,-0.25, -0.25,0,0,0.5,0,-0.25, 0,0,0, 0.35,0.18,0,0.87,0,0,0, 0.35,-0.18,0,0.87,0,0,0, 0,0,-2, 1,0,0,0])
READY = HOME.copy(); READY[0], READY[1], READY[2] = -4.0, 0, 0.98

COIL = READY.copy()
COIL[adr('waist_yaw_joint')] = -0.80
COIL[adr('waist_pitch_joint')] = 0.08
COIL[adr('right_shoulder_pitch_joint')] = -0.85
COIL[adr('right_shoulder_roll_joint')] = -0.30
COIL[adr('right_elbow_joint')] = 1.90
COIL[adr('left_shoulder_pitch_joint')] = 1.25
COIL[adr('left_shoulder_roll_joint')] = 0.20
COIL[adr('left_elbow_joint')] = 0.45

FPS, DUR = 30, 4.5
N = int(FPS * DUR)
def weight(t):
    # 0->coil between 0.7-2.0, hold to 2.7, back by 4.0
    if t < 0.7: return 0.0
    if t < 2.0: return 0.5 * (1 - np.cos(np.pi * (t - 0.7) / 1.3))
    if t < 2.7: return 1.0
    if t < 4.0: return 0.5 * (1 + np.cos(np.pi * (t - 2.7) / 1.3))
    return 0.0

os.makedirs('/tmp/uturn/frames', exist_ok=True)
r = mujoco.Renderer(m, height=720, width=1280)
cam = mujoco.MjvCamera(); cam.azimuth, cam.elevation, cam.distance = 60, 10, 4.2; cam.lookat[:] = [-4.0, 0, 1.0]
for i in range(N):
    t = i / FPS
    w = weight(t)
    q = READY + (COIL - READY) * w
    q[3:7] = READY[3:7]  # keep root quat fixed (no interp of quaternion needed - same in both)
    d.qpos[:] = q
    mujoco.mj_forward(m, d)
    r.update_scene(d, cam)
    imageio.imwrite(f'/tmp/uturn/frames2/{i:04d}.png', r.render())
print('frames:', N)
