# H2 whole-body forehand swing solve - final package (scene_v14 physics)

## Result: MuJoCo replay, stationary ball at C (scene_v14, dt 2.5e-4, ball and racket rolling 0.001)
- Racket at first ball contact (t=0.8007 s into the 0.8 s swing): speed 22.09 m/s (target 22.0), direction error 0.75 deg, face-normal error 0.97 deg, racket_contact site 4.2 mm from C
- Ball exit: 26.13 m/s (reference 29.1), spin 98.2 rad/s (reference 104.7), spin axis (ball frame) [-0.07, 0.99, -0.14], elevation 8.9 deg, azimuth 2.3 deg, dwell 4.25 ms
- Feet planted: foot-site drift L 14.1 mm, R 13.0 mm over settle + swing; every WBC QP solved (0 failures)
- Why exit speed is below 29.1: the 29.1/104.7 reference comes from impact2 with a free 10 kg disc. In the same impact2 at V22/brush15/rolling 0.001, a 10 kg disc gives 29.57/105.0, 1 kg gives 28.14/103.1 and 0.4 kg gives 26.04/100.1. The robot-held racket behaves like a ~0.4 kg effective mass, so 26.1 m/s is the physically correct answer for a 22 m/s head. Reaching 29.1 exit would need a faster head (rough estimate ~24.5 m/s; not solved yet).

## Method
1. Symbolic CasADi RNEA of the scene_v14 H2 tree (racket welded to the wrist), validated against MuJoCo on 20 random states: FK 7e-16, joint torque 1.4e-15 relative, base wrench 2e-15.
2. IPOPT direct transcription: 81 knots over 0.8 s (10 ms), constant accel per interval. Constraints:
   - Inverse dynamics with 6D foot wrenches; floating-base rows = 0 at knots AND interval midpoints.
   - Feet 6D locked; friction mu 0.42; CoP |x|<=6 cm and |y|<=1.5 cm (inside the real 7-capsule foot); torsion bound.
   - Torque <= 85% of the official limit (headroom for the tracker); joint velocity <= 95% of limit; position limits with a 5 mm margin; terminal follow-through margin (q + 15 ms * v stays inside limits).
   - Self-collision: 45 arm vs body/other-arm capsule pairs, 2 cm margin (SQP-linearized).
   - Terminal: racket_contact exactly at C, face normal = n, velocity = 22.0 m/s along 17 deg.
   The solve converged (IPOPT Solve_Succeeded, inf_pr 1e-7, obj 0.576). Start is the ilqr2 q0 ready pose (right wrist pitch -0.40) with the base lifted to z 1.01279 so the feet do not penetrate.
3. Closed-loop verification in MuJoCo, not kinematic: a whole-body QP controller (osqp) tracks the plan at 2 ms. It uses full MuJoCo dynamics, contact wrench cone/CoP, torque limits, foot pose+orientation hold, CoM and pelvis tracking, and posture tracking. Torques go through qfrc_applied, and the actuators are position servos zeroed out. Real floor contact, frictionloss and joint limits all apply. It settles for 0.3 s before the swing.
4. Self-collision check on the plan: 0 penetrations over all 474 enabled geom pairs at every 2 ms frame.

## Per-joint peak torque vs official limit (closed-loop replay, swing window up to ball contact)
| joint | peak N.m | limit N.m | % | steps at limit |
|---|---|---|---|---|
| left_hip_pitch_joint | 84.07 | 360.0 | 23.4 | 0 |
| left_hip_roll_joint | 86.36 | 360.0 | 24.0 | 0 |
| left_hip_yaw_joint | 27.84 | 360.0 | 7.7 | 0 |
| left_knee_joint | 66.64 | 360.0 | 18.5 | 0 |
| left_ankle_roll_joint | 16.29 | 19.0 | 85.7 | 0 |
| left_ankle_pitch_joint | 66.88 | 66.88 | 100.0 | 2 |
| right_hip_pitch_joint | 59.27 | 360.0 | 16.5 | 0 |
| right_hip_roll_joint | 51.96 | 360.0 | 14.4 | 0 |
| right_hip_yaw_joint | 35.31 | 360.0 | 9.8 | 0 |
| right_knee_joint | 75.55 | 360.0 | 21.0 | 0 |
| right_ankle_roll_joint | 16.71 | 19.0 | 88.0 | 0 |
| right_ankle_pitch_joint | 44.02 | 66.88 | 65.8 | 0 |
| waist_yaw_joint | 39.08 | 120.0 | 32.6 | 0 |
| waist_roll_joint | 81.14 | 180.0 | 45.1 | 0 |
| waist_pitch_joint | 63.84 | 180.0 | 35.5 | 0 |
| left_shoulder_pitch_joint | 24.38 | 130.0 | 18.8 | 0 |
| left_shoulder_roll_joint | 6.94 | 60.0 | 11.6 | 0 |
| left_shoulder_yaw_joint | 4.95 | 60.0 | 8.2 | 0 |
| left_elbow_joint | 11.6 | 60.0 | 19.3 | 0 |
| left_wrist_roll_joint | 0.64 | 60.0 | 1.1 | 0 |
| left_wrist_pitch_joint | 0.92 | 10.0 | 9.2 | 0 |
| left_wrist_yaw_joint | 0.31 | 10.0 | 3.1 | 0 |
| right_shoulder_pitch_joint | 36.55 | 130.0 | 28.1 | 0 |
| right_shoulder_roll_joint | 21.89 | 60.0 | 36.5 | 0 |
| right_shoulder_yaw_joint | 52.06 | 60.0 | 86.8 | 0 |
| right_elbow_joint | 17.32 | 60.0 | 28.9 | 0 |
| right_wrist_roll_joint | 22.58 | 60.0 | 37.6 | 0 |
| right_wrist_pitch_joint | 6.61 | 10.0 | 66.1 | 0 |
| right_wrist_yaw_joint | 1.63 | 10.0 | 16.3 | 0 |

After contact the controller keeps tracking an extrapolated reference. No follow-through is planned, so several arm/waist joints hit their limits for 1-9 steps (ball impact plus sudden braking). See torque_table_after_contact in replay_metrics.json.

## Caveats
- Between knots, a rigid-foot wrench check at 2 ms (plan_dense_check.json) finds quarter-interval points in t=0.65-0.80 s where the tight CoP box cannot be met exactly (torque ratio in that idealized check up to 2.84 on an ankle). The closed-loop MuJoCo replay absorbs this with 13-14 mm foot drift and no torque above the limit. Treat the replay, not the knot plan, as the physics result.
- Frictionloss 0.2 is not in the plan (the tracker handles it). The plan is 0.8 s from the ready pose with no follow-through segment.
- The left ankle pitch touches its limit (66.88 N.m) for 2 control steps (t 0.788 and 0.798 s). Torques are clipped, so nothing exceeds a limit.
- WBC settings that matter: foot orientation is held to the flat q0 orientation, and the joint-limit lookahead is 5 ms (the default 40 ms braked the wrist).

## Files
- wb_swing_solution.npz:
  - plan_*: dense 2 ms plan in MuJoCo qpos/qvel order (36/35, robot only; the feed_ball joint comes after).
  - knots_*: NLP knots in generalized coords [pos, ZYX yaw/pitch/roll, 29 joints].
  - sim_*: closed-loop replay at the 2 ms QP rate: robot qpos, ball qpos, applied torques. sim_t is swing time; the 0.3 s settle comes before it.
- scene_v14_roll001.xml: scene_v14 with ball and racket rolling friction 0.001 (the only change).
- replay_metrics.json: the numbers above plus both torque tables.
- plan_dense_check.json
- code/: model, NLP, WBC and replay scripts. Paths inside assume /tmp/wbswing and /downloads/h2_limits-18bdafd8.json.
- Render lane: for a kinematic replay, set qpos[:36]=sim_qpos[k] and the feed_ball qpos = sim_ball_qpos[k] at time sim_t[k] in scene_v14_roll001.xml. To re-run the physics: code/ball_replay.py with LOOKH=0.005 SETTLE=0.3 TEXT=0.04 CPX=0.06 CPY=0.015 W_RN=0 W_RK=0 W_POST=5 W_PEL=5.