# ATH tennis

ATH trains a Unitree H2 humanoid to play tennis in physics simulation -
real MuJoCo, real contacts, a goal-conditioned shot executor - and this
repository is its public site and canonical documentation home.

**Live site:** https://orrimgames.github.io/ath-tennis/
(dev page: https://orrimgames.github.io/ath-tennis/index-dev.html)

The site runs actual MuJoCo compiled to WASM in your browser: the official
Unitree H2 model (29 actuators) under an untrained policy on a tennis
court, with a ball FEED panel whose flight physics are drag plus a full
3-axis Magnus force and whose bounce is calibrated to published ITF/Cross
hard-court measurements. Spin is a signed 3D vector - topspin, backspin
and sidespin all curve the ball through physics, never scripted paths.

## Honest status

Training is currently blocked on a CPU-vs-MJX physics parity gate, and the
racket on the site is visual-only: tennis contact is not validated yet.
See [STATUS.md](STATUS.md) for exact gate states and
[ROADMAP.md](ROADMAP.md) for the order of work. Approximations are labeled
as approximations throughout; tuned proxies are never presented as
calibrated physics.

## Documentation

- [AGENTS.md](AGENTS.md) - architecture, invariants, deploy and test
  conventions for coding agents (start here if you are one).
- docs/physics/ - [ball model](docs/physics/ball-model.md),
  [stringbed calibration](docs/physics/stringbed-calibration.md)
- docs/training/ - [goal-conditioned objective](docs/training/goal-conditioned-tennis-objective.md),
  [H2 curriculum](docs/training/h2-curriculum.md)
- docs/motion/ - [whole-body IK track](docs/motion/ik-engineering-track.md)
- docs/engineering/ - [test & iteration method](docs/engineering/test-iteration-method.md)
- docs/status/ - [H2 MJX parity](docs/status/h2-mjx-parity.md),
  [kernel run logs](docs/status/kernel-runs/),
  [open questions](docs/status/open-questions.md)
- docs/research/ - [literature notes & verdicts](docs/research/)
- docs/decisions/ - [design decision rationale](docs/decisions/)

## Layout

No build step; GitHub Pages serves the repo root. `index.html` and
`index-dev.html` load versioned bundles from `assets/`, which also holds
the MuJoCo WASM runtime, H2 MJCF + meshes, ONNX policy and ONNX Runtime
Web. Validation manifests (`*_VALIDATION.json`, `*-manifest.json`) record
model-swap and collision checks in machine-readable form.

The legacy mirror at https://orrimgames.github.io/latent-tennis/ stays
live so existing links keep working.
