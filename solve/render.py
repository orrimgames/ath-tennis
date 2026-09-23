import mujoco, numpy as np, sys, os

XML = '/tmp/uturn/model/scene.xml'
m = mujoco.MjModel.from_xml_path(XML)
d = mujoco.MjData(m)

# color the court like the site's blue
cid = mujoco.mj_name2id(m, mujoco.mjtObj.mjOBJ_GEOM, 'court')
if cid >= 0: m.geom_rgba[cid] = [0.16, 0.34, 0.55, 1.0]

HOME = np.array([0,0,1.03, 1,0,0,0,
  -0.25,0,0,0.5,0,-0.25,  -0.25,0,0,0.5,0,-0.25,
  0,0,0,  0.35,0.18,0,0.87,0,0,0,  0.35,-0.18,0,0.87,0,0,0,
  0,0,-2, 1,0,0,0])
assert len(HOME) == m.nq, (len(HOME), m.nq)

jid = lambda n: mujoco.mj_name2id(m, mujoco.mjtObj.mjOBJ_JOINT, n)
adr = lambda n: m.jnt_qposadr[jid(n)]

def pose(**kw):
    q = HOME.copy()
    for k,v in kw.items(): q[adr(k)] = v
    return q

def render(q, cam, path, renderer):
    d.qpos[:] = q
    mujoco.mj_forward(m, d)
    renderer.update_scene(d, cam)
    renderer.render()
    import imageio.v2 as imageio
    imageio.imwrite(path, renderer.render())

cam = mujoco.MjvCamera()
cam.azimuth, cam.elevation, cam.distance = -48, 6, 3.8
cam.lookat[:] = [-2.3, 0, 1.0]

renderer = mujoco.Renderer(m, height=720, width=1280)

q_home = pose()
q_home[0], q_home[1], q_home[2] = -2.5, 0, 0.98
render(q_home, cam, '/tmp/uturn/test_home.png', renderer)

q_coil = pose(waist_yaw_joint=-0.7)
q_coil[0], q_coil[1], q_coil[2] = -2.5, 0, 0.98
render(q_coil, cam, '/tmp/uturn/test_coil.png', renderer)
print('done')
