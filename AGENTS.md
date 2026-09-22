# AGENTS.md - working on ATH tennis

ATH is a humanoid-tennis project: train a Unitree H2 to play real tennis in
physics simulation, and publish the simulation honestly on the web. This
repository is the public site and the canonical spec/docs home. It is
self-contained: nothing here fetches from another repository at runtime.

Read this file fully before changing anything. Then read STATUS.md for the
current gates and docs/ for the subsystem you are touching.

## Live site

- https://orrimgames.github.io/ath-tennis/ - front page (trained-geometry bundle)
- https://orrimgames.github.io/ath-tennis/index-dev.html - dev page (untrained-policy bundle)
- Legacy mirror (kept live so old links do not break): https://orrimgames.github.io/latent-tennis/

## Repository map

- `index.html` - front page. Loads `assets/index-H2-modelgeom.js?v=<tag>`.
- `index-dev.html` - dev page. Loads `assets/index-H2-untrained.js?v=<tag>`.
  Both pages must always point at the same deployed bundle content; bump both
  `?v` tags together on every bundle deploy.
- `assets/` - everything the sim needs at runtime: MuJoCo WASM
  (`mujoco.wasm`, `mujoco-D9UjOFNX.wasm`), the H2 MJCF and meshes
  (`unitree_h2/`), the untrained ONNX policy (`policy_random_init.onnx`),
  ONNX Runtime WASM (`ort/`), court textures, clip JSONs and older bundles
  kept for reference.
- `docs/physics/` - ball model and stringbed calibration contracts.
- `docs/training/` - goal-conditioned objective and the staged curriculum.
- `docs/motion/` - whole-body IK engineering track.
- `docs/engineering/` - the test-and-iteration method every change follows.
- `docs/status/` - parity gate status (currently blocking training), the
  kernel run logs with raw JSON reports (`kernel-runs/`) and the live
  open-questions list (`open-questions.md`).
- `docs/research/` - literature notes and measured-data verdicts (Cross/ITF
  bounce, LATENT pipeline, AdaPT, UVA dataset, aerodynamics).
- `docs/decisions/` - design decisions with rationale (RL over classical
  control, volley-first curriculum order, MJX/JAX backend).
- `*_VALIDATION.json`, `*-manifest.json` - machine-readable records of
  model-swap and collision validations.

## Runtime architecture (site)

The browser runs real MuJoCo (WASM build) against the official Unitree H2
MJCF with its meshes. A zero-step untrained ONNX policy drives the 29
actuators through ONNX Runtime Web. The FEED panel launches balls with a
solver; ball flight uses drag plus a full 3-axis Magnus force (topspin,
backspin, sidespin as a signed vector). The bounce is calibrated to
published ITF/Cross hard-court measurements: grip-impulse sticking model
with hollow-ball inertia (KC=1.5), e=0.78, mu=0.65; sliding regime recovers
the Coulomb limit. Ball radius is the true 0.033 m.

## Invariants - do not break these

1. Honest-limits copy. The site is a publishing visualization bundle. The
   racket is visual/non-colliding; tennis contact is NOT validated until the
   stringbed gate (docs/physics/stringbed-calibration.md) passes. Never
   present tuned proxies as calibrated physics in user-facing copy, and
   never remove the existing disclaimers.
2. Sidespin and curve come from the 3D Magnus force only. No scripted
   lateral curve, ever.
3. Parity gate. Training is blocked until CPU MuJoCo vs MJX parity passes
   (docs/status/h2-mjx-parity.md). Do not weaken tolerances or remove
   physics to make a gate pass.
4. Keep failed cases as regression fixtures; never narrow evaluation scope
   to hide a failure.
5. Deploys use the Git Data API only. The GitHub web uploader rewrites
   files. Parse-check any JS bundle as an ES module (`.mjs`) before
   shipping, byte-verify the deployed file against raw.githubusercontent.com
   after push, then bump `?v` on both HTML pages.

## How to run and test

- Site: open the live URLs above; there is no build step. Test by loading
  the page, exercising the FEED panel across speed/spin/clearance, and
  checking desktop and mobile viewports. Visual review is required for
  anything spatial.
- Physics changes: ship with measured before/after numbers against the
  published targets in docs/physics/, using the deployed bundle bytes, not
  local-only runs.
- Training/parity work: follow docs/engineering/test-iteration-method.md
  and the fixture/isolation discipline in docs/status/h2-mjx-parity.md.

## Conventions

- SI units everywhere; spin reported as a 3D vector in rad/s and rpm.
- One factor at a time when isolating failures; ablation matrices over
  one-off runs.
- A run without a reproducible report (inputs, versions, seeds, thresholds,
  artifacts) is not evidence.
- Commit messages state what changed and, for user-visible changes, why.
