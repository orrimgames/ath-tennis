import mujoco, numpy as np, imageio.v2 as imageio
m = mujoco.MjModel.from_xml_path('/tmp/uturn/model/scene.xml')
d = mujoco.MjData(m)
HOME = np.array([0,0,1.03, 1,0,0,0, -0.25,0,0,0.5,0,-0.25, -0.25,0,0,0.5,0,-0.25, 0,0,0, 0.35,0.18,0,0.87,0,0,0, 0.35,-0.18,0,0.87,0,0,0, 0,0,-2, 1,0,0,0])
q = HOME.copy(); q[0], q[1], q[2] = 8.0, 0, 0.98
d.qpos[:] = q; mujoco.mj_forward(m, d)
r = mujoco.Renderer(m, height=540, width=960)
for az in [35, 50, 65]:
    cam = mujoco.MjvCamera(); cam.azimuth, cam.elevation, cam.distance = az, 10, 4.2; cam.lookat[:] = [8.0, 0, 1.0]
    r.update_scene(d, cam); imageio.imwrite(f'/tmp/uturn/f{az}.png', r.render())
print('ok')
