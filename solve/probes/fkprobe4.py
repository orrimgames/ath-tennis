import mujoco, numpy as np
m = mujoco.MjModel.from_xml_path('/tmp/uturn/model/scene.xml')
d = mujoco.MjData(m)
jid = lambda n: mujoco.mj_name2id(m, mujoco.mjtObj.mjOBJ_JOINT, n)
HOME = np.array([0,0,1.03, 1,0,0,0, -0.25,0,0,0.5,0,-0.25, -0.25,0,0,0.5,0,-0.25, 0,0,0, 0.35,0.18,0,0.87,0,0,0, 0.35,-0.18,0,0.87,0,0,0, 0,0,-2, 1,0,0,0])
def feet(tag, **kw):
    q = HOME.copy(); q[0], q[1], q[2] = -2.6, 0, 0.98
    for k, v in kw.items():
        if k == 'rootx': q[0] += v
        elif k == 'rootz': q[2] += v
        else: q[m.jnt_qposadr[jid(k + '_joint')]] = v
    d.qpos[:] = q; mujoco.mj_forward(m, d)
    g = lambda n: mujoco.mj_name2id(m, mujoco.mjtObj.mjOBJ_BODY, n)
    print(tag, 'L' + str(np.round(d.xpos[g('left_ankle_roll_link')], 3)), 'R' + str(np.round(d.xpos[g('right_ankle_roll_link')], 3)), 'RK' + str(np.round(d.xpos[g('tennis_racket')], 3)))
feet('plant ', left_hip_pitch=-0.72, left_knee=0.68, left_ankle_pitch=-0.24, right_hip_pitch=0.18, right_knee=0.10, right_ankle_pitch=-0.06, rootx=0.13, rootz=-0.055)
feet('swing ', left_hip_pitch=-0.45, left_knee=1.10, left_ankle_pitch=-0.10, right_hip_pitch=-0.15, right_knee=0.45, rootz=-0.02)
feet('cntct ', left_hip_pitch=-0.72, left_knee=0.68, left_ankle_pitch=-0.24, right_hip_pitch=0.18, right_knee=0.10, right_ankle_pitch=-0.06, rootx=0.13, rootz=-0.055, waist_yaw=0.10, waist_pitch=0.10, right_shoulder_pitch=-0.75, right_shoulder_roll=-0.15, right_elbow=0.95, right_wrist_pitch=-1.15)
