import mujoco, numpy as np, imageio.v2 as imageio
m = mujoco.MjModel.from_xml_path('/tmp/uturn/model/scene.xml')
d = mujoco.MjData(m)
jid = lambda n: mujoco.mj_name2id(m, mujoco.mjtObj.mjOBJ_JOINT, n)
adr = lambda n: m.jnt_qposadr[jid(n)]
HOME = np.array([0,0,1.03, 1,0,0,0, -0.25,0,0,0.5,0,-0.25, -0.25,0,0,0.5,0,-0.25, 0,0,0, 0.35,0.18,0,0.87,0,0,0, 0.35,-0.18,0,0.87,0,0,0, 0,0,-2, 1,0,0,0])
base = HOME.copy(); base[0], base[1], base[2] = 8.0, 0, 0.98
coil = base.copy(); coil[adr('waist_yaw_joint')] = 0.8
r = mujoco.Renderer(m, height=720, width=1280)
cam = mujoco.MjvCamera(); cam.azimuth, cam.elevation, cam.distance = 0, -89, 3.0; cam.lookat[:] = [8.0, 0, 1.0]
for name, q in [('oh_home', base), ('oh_coil', coil)]:
    d.qpos[:] = q; mujoco.mj_forward(m, d); r.update_scene(d, cam)
    imageio.imwrite(f'/tmp/uturn/{name}.png', r.render())
print('ok')
