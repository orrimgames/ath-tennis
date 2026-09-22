# ATH status - 2026-09-22

## Gates

| Gate | State | Reference |
| --- | --- | --- |
| CPU MuJoCo vs MJX H2 parity | BLOCKED - training held. v5: perturbed case diverges at first contact evolution (step 12/13). v6 isolation (condim 6 -> 3) in progress. | docs/status/h2-mjx-parity.md |
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

- No trained locomotion yet: the parity gate blocks all training.
- The site robot runs a zero-step untrained policy - it demonstrates the
  model and physics, not competence.
- Scripted-motion demo mode (keyframed poses, physics paused) is proven
  feasible (H2 unit-turn clip rendered from this MJCF) but not yet a site
  feature.
