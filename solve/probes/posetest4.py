import mujoco, numpy as np, imageio.v2 as imageio
m = mujoco.MjModel.from_xml_path('/tmp/uturn/model/scene.xml')
d = mujoco.MjData(m)
jid = lambda n: mujoco.mj_name2id(m, mujoco.mjtObj.mjOBJ_JOINT, n)
adr = lambda n: m.jnt_qposadr[jid(n)]
HOME = np.array([0,0,1.03, 1,0,0,0, -0.25,0,0,0.5,0,-0.25, -0.25,0,0,0.5,0,-0.25, 0,0,0, 0.35,0.18,0,0.87,0,0,0, 0.35,-0.18,0,0.87,0,0,0, 0,0,-2, 1,0,0,0])

COIL = HOME.copy(); COIL[0], COIL[1], COIL[2] = 8.0, 0, 0.98
COIL[adr('waist_yaw_joint')] = 0.80
COIL[adr('waist_pitch_joint')] = 0.08
COIL[adr('right_shoulder_pitch_joint')] = -0.85
COIL[adr('right_shoulder_roll_joint')] = -0.30
COIL[adr('right_elbow_joint')] = 1.90
COIL[adr('left_shoulder_pitch_joint')] = 1.25
COIL[adr('left_shoulder_roll_joint')] = 0.20
COIL[adr('left_elbow_joint')] = 0.45

r = mujoco.Renderer(m, height=720, width=1280)
for az in [300, 320, 340]:
    cam = mujoco.MjvCamera(); cam.azimuth, cam.elevation, cam.distance = az, 10, 4.2; cam.lookat[:] = [8.0, 0, 1.0]
    d.qpos[:] = COIL; mujoco.mj_forward(m, d); r.update_scene(d, cam)
    imageio.imwrite(f'/tmp/uturn/coil4_az{az}.png', r.render())
print('ok')
