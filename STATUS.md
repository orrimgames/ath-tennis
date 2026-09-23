# ATH status - 2026-09-22

## Gates

| Gate | State | Reference |
| --- | --- | --- |
| CPU MuJoCo vs MJX H2 parity | PASS (v14, 2026-09-22 - current reference). Official H2 effort limits + armature 0.01/damping 0.05/frictionloss 0.2 baked in; float64 both backends; gate max_qpos 1e-4 / max_qvel 1e-3 (50 steps x batch 4); achieved max qpos err 1.13e-13, qvel 1.43e-11. Supersedes v12 (pre-limits-correction solver-budget root-cause run; PASS at the same gate, achieved 1.39e-10 / 1.85e-8). Stage-1 training unblocked. | docs/status/h2-mjx-parity.md |
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

- No trained locomotion yet (parity gate passed v14 on 2026-09-22; training pipeline restart is next).
- Stage-1 XML actuator limits were wrong pre-training (18/29). Corrected to the official
  unitree_ros H2.urdf: shoulder pitch 130, shoulder roll/elbow/wrist roll 60, wrist pitch/yaw 10,
  waist 180 serial-equivalent, ankle pitch 66.88; armature 0.01, damping 0.05, frictionloss 0.2
  on all joints; shoulder-roll range 2.494, wrist pitch +/-0.576.
- The site robot runs a zero-step untrained policy - it demonstrates the
  model and physics, not competence.
- Scripted-motion demo mode (keyframed poses, physics paused) is proven
  feasible (H2 unit-turn clip rendered from this MJCF) but not yet a site
  feature.
- The site has NO committed source tree: the web app ships as built
  bundles only (assets/index-*.js), no src/, no package.json. Ball flight /
  bounce / FEED physics exist only inside those minified bundles. Known
  risk to fix separately - a lost build environment means a rewrite.
