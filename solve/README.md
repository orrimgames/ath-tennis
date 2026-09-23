# Swing solve (offline)

Offline swing solver: given a terminal racket state at the impact point,
solve a whole-body H2 swing trajectory that delivers it, under official
Unitree H2 actuator limits. Physics core is pinocchio built from the H2
MJCF (`build_h2_pin.py`), cross-validated against MuJoCo forward dynamics
to 1e-9 on random-torque tests, with exact contact-static equilibrium.

Status 2026-09-22: physics validated; iLQR descends then stalls in the
backward pass (line search rejects all steps after ~10 iterations,
identically 3x - a backward-pass gradient bug, not physics). Solve
ownership handed to the training pipeline; this directory is the durable
copy of the rig. `swing_sol.npz` from this solver was a stall artifact and
is deliberately not committed.

## Files

- `build_h2_pin.py` - pinocchio model builder from MJCF (quat order, contact
  wrench world-origin conversion, genforce columns via rnea).
- `ilqr.py`, `ilqr2.py` - iLQR solvers (ilqr2 is the latest; ready-pose q0
  has base z 0.98 - known to sink feet ~3.2 cm into the floor in the
  corrected scene; the training pipeline fixes base height).
- `impact.py`, `impact2.py` - stringbed impact rig. Terminal racket state
  (impact point C, face normal, 22 m/s along-flight speed, offset, body
  normal) -> exit 29.57 m/s vs 29.1 target, spin 1003 rpm vs 1000 target,
  e~0.41, dwell 4.0 ms. NOTE: `impact.py`'s READY keyframe wrist pitch
  (-1.15) disagrees with `ilqr2.py`'s ready q0 (-0.40) - flagged, use the
  shipped trajectory's q0 for any replay.
- `volley.py` - keyframed volley animation (NOT a solved trajectory).
- `render.py`, `anim.py` - MuJoCo offscreen rendering (xvfb + GLFW).
- `solve_ddp.py`, `balltest.py`, `money.py`, `postoverhead.py` - earlier
  solver attempts and checks kept for reference.
- `probes/` - validation/debug probes (fkprobe4 = final pinocchio-MuJoCo
  cross-check, camsweep/posetest finals, mini repro).

Actuator limits: `../physics/h2_limits.json` (corrected official table).
Scene: `../models/swing-solve/` (scene.xml SUPERSEDED - see its README).
URDFs: `../models/urdf/`.
