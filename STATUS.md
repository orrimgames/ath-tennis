# ATH status - 2026-09-22

## Gates

| Gate | State | Reference |
| --- | --- | --- |
| CPU MuJoCo vs MJX H2 parity | PASS (v12, 2026-09-22). Root cause was MJX solver iteration budget vs the float64 CPU oracle. max qpos err 1.39e-10, max qvel err 1.85e-8. Stage-1 training unblocked. | docs/status/h2-mjx-parity.md |
| Stringbed calibration | OPEN - parallel track. Current dwell ~10 ms vs measured 2.6-4.1 ms band: fail. Fit and spatial grid pending. | docs/physics/stringbed-calibration.md |
| Whole-body IK admission | OPEN - engineering track defined; fixture matrix and ablations pending. | docs/motion/ik-engineering-track.md |
| Curriculum | DEFINED - static volley is the first trained shot, after standing + arm tracking and the physics gates. | docs/training/h2-curriculum.md |

## Site (this repo)

Live at https://orrimgames.github.io/ath-tennis/. Real MuJoCo WASM + H2
MJCF + untrained policy. FEED panel with solver; drag + 3-axis Magnus
(topspin/backspin/sidespin); bounce calibrated to ITF/Cross hard-court
measurements (grip-impulse model, e=0.78, mu=0.65, hollow-ball KC=1.5).
Racket is visual/non-colliding: the site is a visualization bundle, not a
validated tennis contact model.

Open problems with current state: docs/status/open-questions.md.

## Known limits (kept honest on purpose)

- No trained locomotion yet (parity gate passed v12 on 2026-09-22; training pipeline restart is next).
- Stage-1 XML actuator limits were wrong pre-training (18/29). Corrected to the official
  unitree_ros H2.urdf: shoulder pitch 130, shoulder roll/elbow/wrist roll 60, wrist pitch/yaw 10,
  waist 180 serial-equivalent, ankle pitch 66.88; armature 0.01, damping 0.05, frictionloss 0.2
  on all joints; shoulder-roll range 2.494, wrist pitch +/-0.576.
- The site robot runs a zero-step untrained policy - it demonstrates the
  model and physics, not competence.
- Scripted-motion demo mode (keyframed poses, physics paused) is proven
  feasible (H2 unit-turn clip rendered from this MJCF) but not yet a site
  feature.
