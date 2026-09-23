import numpy as np, mujoco, pinocchio as pin

def quat_to_R(q):  # mujoco (w,x,y,z)
    w, x, y, z = q
    return np.array([
        [1-2*(y*y+z*z), 2*(x*y-w*z), 2*(x*z+w*y)],
        [2*(x*y+w*z), 1-2*(x*x+z*z), 2*(y*z-w*x)],
        [2*(x*z-w*y), 2*(y*z+w*x), 1-2*(x*x+y*y)]])

def build(xml_path):
    mm = mujoco.MjModel.from_xml_path(xml_path)
    pm = pin.Model()
    body2joint = {0: 0}   # mujoco world -> pinocchio universe
    # pass 1: create joints for every mujoco body that has exactly 1 joint (or the freejoint)
    pelvis = 1
    sub = set()
    def walk(b):
        sub.add(b)
        for c in range(1, mm.nbody):
            if mm.body_parentid[c] == b: walk(c)
    walk(pelvis)
    for b in sorted(sub):
        name = mujoco.mj_id2name(mm, mujoco.mjtObj.mjOBJ_BODY, b)
        nj = mm.body_jntnum[b]
        jadr = mm.body_jntadr[b]
        if nj == 0:
            # welded body: handled in pass 2 as frame+inertia
            continue
        assert nj == 1, (name, nj)
        parent_b = mm.body_parentid[b]
        # skip welded ancestors: compose placement up to nearest jointed ancestor
        pl = pin.SE3(quat_to_R(mm.body_quat[b]), np.array(mm.body_pos[b], dtype=float))
        anc = parent_b
        while anc != 0 and mm.body_jntnum[anc] == 0:
            pl = pin.SE3(quat_to_R(mm.body_quat[anc]), np.array(mm.body_pos[anc], dtype=float)) * pl
            anc = mm.body_parentid[anc]
        parent_j = body2joint[anc]
        j = jadr
        jtype = mm.jnt_type[j]
        assert np.allclose(mm.jnt_pos[j], 0), (name, mm.jnt_pos[j])
        lo, hi = mm.jnt_range[j]
        if jtype == 0:  # free: qpos encodes the full world pose -> identity placement
            jid = pm.addJoint(parent_j, pin.JointModelFreeFlyer(), pin.SE3.Identity(), name)
        elif jtype == 3:  # hinge
            ax = np.array(mm.jnt_axis[j], dtype=float)
            if np.allclose(ax, [1,0,0]): jm = pin.JointModelRX()
            elif np.allclose(ax, [0,1,0]): jm = pin.JointModelRY()
            elif np.allclose(ax, [0,0,1]): jm = pin.JointModelRZ()
            else: raise ValueError((name, ax))
            jid = pm.addJoint(parent_j, jm, pl, name, np.array([1e3]), np.array([1e3]),
                              np.array([lo]), np.array([hi]))
        else:
            raise ValueError((name, jtype))
        body2joint[b] = jid
        pm.addJointFrame(jid, 0)
        # body inertia -> append to joint (in joint/body frame)
        mass = float(mm.body_mass[b])
        ipos = np.array(mm.body_ipos[b], dtype=float)
        R_i = quat_to_R(mm.body_iquat[b])
        I3 = R_i @ np.diag(mm.body_inertia[b]) @ R_i.T
        ine = pin.Inertia(mass, ipos, I3)
        pm.appendBodyToJoint(jid, ine, pin.SE3.Identity())
        pm.addBodyFrame(name + '_body', jid, pin.SE3.Identity(), pm.getFrameId(pm.names[jid]))
    # pass 2: welded bodies -> frames + inertia on parent joint
    for b in sorted(sub):
        if mm.body_jntnum[b] != 0: continue
        name = mujoco.mj_id2name(mm, mujoco.mjtObj.mjOBJ_BODY, b)
        # compose placement up to nearest ancestor that has a joint
        pl = pin.SE3(quat_to_R(mm.body_quat[b]), np.array(mm.body_pos[b], dtype=float))
        anc = mm.body_parentid[b]
        while anc != 0 and mm.body_jntnum[anc] == 0:
            pl = pin.SE3(quat_to_R(mm.body_quat[anc]), np.array(mm.body_pos[anc], dtype=float)) * pl
            anc = mm.body_parentid[anc]
        parent_j = body2joint[anc]
        mass = float(mm.body_mass[b])
        ipos = np.array(mm.body_ipos[b], dtype=float)
        R_i = quat_to_R(mm.body_iquat[b])
        I3 = R_i @ np.diag(mm.body_inertia[b]) @ R_i.T
        # inertia lives in the welded body frame: append at placement pl
        ine = pin.Inertia(mass, ipos, I3)
        pm.appendBodyToJoint(parent_j, ine, pl)
        pm.addFrame(pin.Frame(name, parent_j, pm.getFrameId(pm.names[parent_j]), pl, pin.FrameType.BODY))
    # sites -> OP_FRAMEs
    for s in range(mm.nsite):
        sname = mujoco.mj_id2name(mm, mujoco.mjtObj.mjOBJ_SITE, s)
        if sname in ('left_foot', 'right_foot'):
            sb = mm.site_bodyid[s]
            if sb not in sub: continue
            pl = pin.SE3(quat_to_R(mm.site_quat[s]), np.array(mm.site_pos[s], dtype=float))
            pm.addFrame(pin.Frame(sname, body2joint[sb], pm.getFrameId(pm.names[body2joint[sb]]), pl, pin.FrameType.OP_FRAME))
    return pm, mm

if __name__ == '__main__':
    pm, mm = build('/tmp/uturn/model/scene.xml')
    print('pinocchio: nq', pm.nq, 'nv', pm.nv, 'njoints', pm.njoints, 'frames', len(pm.frames))
    # ---- verify FK against MuJoCo at the ready pose ----
    exec(open('impact.py').read().split("def run_impact")[0])  # m, d, base_pose, READY
    q = base_pose(**READY)
    d.qpos[:] = q; mujoco.mj_forward(m, d)
    qp = q[:36].copy()
    qp[3], qp[4], qp[5], qp[6] = q[4], q[5], q[6], q[3]
    data = pm.createData()
    pin.forwardKinematics(pm, data, qp); pin.updateFramePlacements(pm, data)
    worst = 0.0
    for b in range(1, m.nbody):
        name = mujoco.mj_id2name(m, mujoco.mjtObj.mjOBJ_BODY, b)
        if name is None or name in ('ball_machine','feed_ball'): continue
        mjpos = d.xpos[b]
        if pm.existFrame(name): fid = pm.getFrameId(name)
        elif pm.existFrame(name + '_body'): fid = pm.getFrameId(name + '_body')
        else: continue
        ppos = data.oMf[fid].translation
        err = float(np.linalg.norm(mjpos - ppos))
        worst = max(worst, err)
    print('worst FK body error:', worst)
    for f in ('left_foot','right_foot','tennis_racket'):
        print(f, np.round(data.oMf[pm.getFrameId(f)].translation, 3))
    print('total mass', round(sum(x.mass for x in pm.inertias),3))
