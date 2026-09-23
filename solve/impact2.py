import mujoco
import numpy as np

XML = """
<mujoco>
  <option gravity="0 0 0" timestep="0.00025" iterations="60" ls_iterations="20" noslip_iterations="20"/>
  <worldbody>
    <body name="disc" pos="0 0 0">
      <joint type="free" limited="false"/>
      <inertial pos="0 0 0" mass="10.0" diaginertia="0.05 0.05 0.09"/>
      <geom name="discg" type="cylinder" size="0.12 0.005" contype="4" conaffinity="4"
            condim="6" friction="0.6 0.005 0.02" solref="0.004 0.5"/>
    </body>
    <body name="ball" pos="0 0 0">
      <joint type="free" limited="false"/>
      <geom name="ballg" type="sphere" size="0.033" mass="0.057" contype="1" conaffinity="6"
            condim="6" friction="0.6 0.005 0.02" solref="0.004 0.15"/>
    </body>
  </worldbody>
</mujoco>
"""

m = mujoco.MjModel.from_xml_string(XML)
TS = m.opt.timestep

def quat_z_to(n):
    z = np.array([0., 0., 1.])
    n = n / np.linalg.norm(n)
    v = np.cross(z, n)
    c = float(np.dot(z, n))
    if c < -0.999999:
        return np.array([0., 1., 0., 0.])
    q = np.empty(4)
    q[0] = np.sqrt((1 + c) / 2)
    ax = v / np.linalg.norm(v) if np.linalg.norm(v) > 1e-12 else np.array([1., 0., 0.])
    q[1:] = ax * np.sqrt((1 - c) / 2)
    return q

def impact(V, brush_deg, face_tilt_deg=2.0, verbose=False):
    n = np.array([np.cos(np.radians(face_tilt_deg)), 0., np.sin(np.radians(face_tilt_deg))])  # shot dir ~ face normal
    up = np.array([0., 0., 1.])
    t = up - np.dot(up, n) * n
    t /= np.linalg.norm(t)
    v = V * (np.cos(np.radians(brush_deg)) * n + np.sin(np.radians(brush_deg)) * t)
    d = mujoco.MjData(m)
    d.qpos[0:3] = -0.06 * (v / np.linalg.norm(v))   # disc 6cm back along flight
    d.qpos[3:7] = quat_z_to(n)                      # disc normal = n
    d.qpos[7:10] = 0.0                              # ball at origin
    d.qpos[10:14] = np.array([1., 0., 0., 0.])
    d.qvel[0:3] = v
    d.qvel[3:6] = 0.0                               # no disc spin
    d.qvel[6:] = 0.0
    v0 = np.linalg.norm(v)
    t0 = None; t1 = None
    for i in range(4000):
        mujoco.mj_step(m, d)
        if d.ncon > 0 and t0 is None:
            t0 = d.time
        if t0 is not None and d.ncon == 0:
            t1 = d.time
            break
    if t0 is None:
        return None
    if t1 is None:
        t1 = d.time
    bv = d.qvel[6:9].copy()
    bw = d.qvel[9:12].copy()
    dv = d.qvel[0:3].copy()
    el = float(np.degrees(np.arctan2(bv[2], np.hypot(bv[0], bv[1]))))
    az = float(np.degrees(np.arctan2(bv[1], bv[0])))
    return dict(V=V, brush=brush_deg, dwell_ms=(t1 - t0) * 1e3,
                exit_speed=float(np.linalg.norm(bv)), exit_elev=el, exit_azim=az,
                spin_rps=float(np.linalg.norm(bw)), spin_axis=np.round(bw / max(np.linalg.norm(bw), 1e-9), 3).tolist(),
                disc_decel_pct=float(100 * (v0 - np.linalg.norm(dv)) / v0))

if __name__ == '__main__':
    print('--- effective COR sweep (brush=0) ---')
    for V in (14.0, 17.0, 20.0):
        r = impact(V, 0.0)
        print(r)
