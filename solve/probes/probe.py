import mujoco, numpy as np, imageio.v2 as imageio
m = mujoco.MjModel.from_xml_path('/tmp/uturn/model/scene.xml')
d = mujoco.MjData(m)
HOME = np.array([0,0,1.03, 1,0,0,0, -0.25,0,0,0.5,0,-0.25, -0.25,0,0,0.5,0,-0.25, 0,0,0, 0.35,0.18,0,0.87,0,0,0, 0.35,-0.18,0,0.87,0,0,0, 0,0,-2, 1,0,0,0])
r = mujoco.Renderer(m, height=720, width=1280)
d.qpos[:] = HOME; d.qpos[0], d.qpos[1], d.qpos[2] = 3.0, 0, 0.98
mujoco.mj_forward(m, d)
bid = mujoco.mj_name2id(m, mujoco.mjtObj.mjOBJ_BODY, 'tennis_racket')
print('racket xpos HOME:', np.round(d.xpos[bid], 3))
for az in [0, 90, 180, 270]:
    cam = mujoco.MjvCamera(); cam.azimuth, cam.elevation, cam.distance = az, 8, 4.0; cam.lookat[:] = [3.0, 0, 1.0]
    r.update_scene(d, cam); imageio.imwrite(f'/tmp/uturn/probe_{az}.png', r.render())
print('ok')
