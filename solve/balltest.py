exec(open('volley.py').read().split("if __name__")[0])
q = at(1.5); q[-7:-4] = [0.9, -0.12, 1.52]
d.qpos[:] = q; mujoco.mj_forward(m, d)
print('ball qpos check:', d.qpos[-7:-4])
c = mujoco.MjvCamera(); c.azimuth, c.elevation, c.distance = 90, 10, 2.5; c.lookat[:] = [0.9, -0.12, 1.4]
r = mujoco.Renderer(m, height=720, width=1280); r.update_scene(d, c)
imageio.imwrite('/tmp/uturn/balltest.png', r.render())
print('ok')
