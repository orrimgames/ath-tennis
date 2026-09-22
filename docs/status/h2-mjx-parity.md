# ATH H2 MJX parity status - 2026-09-22

## Current gate

Training is blocked. CPU MuJoCo versus MJX H2 rigid/contact parity has not passed.

## Latest verified baseline: Kaggle kernel version 5

URL: https://www.kaggle.com/code/danielharkin/ath-h2-mjx-parity

- MuJoCo/MJX 3.3.7, JAX 0.5.3, 2x NVIDIA T4.
- Exact embedded H2 model: nq 36, nv 35, nu 29, 34 geoms, XML SHA-256 `92dec3e2aa0023f6800e8e09d893799424bbcefecd15bd4ddcd25c0983678191`.
- Solver: implicitfast, Newton, elliptic cone, 8 solver iterations, 8 line-search iterations, timestep 0.002 s.
- Fixture: home plus deterministic perturbation, 2 cases x 25 steps, CPU oracle first, MJX `lax.scan` over time plus `vmap` over cases.
- Gate thresholds: max qpos 1e-4, max qvel 1e-3.
- Home case passes the short probe: max qpos `5.9598e-7`, max qvel `1.1874e-4`.
- Perturbed case fails at first contact evolution: first qpos and qvel threshold crossing at step 12; overall max qpos `0.0238110`, max qvel `2.46538`.
- Active contact counts (`contact.dist <= 0` on both backends) match through initial impact, then diverge from step 13.
- Runtime: 128.24 s cold compile+rollout, 36.45 s cached for 50 env-steps.
- Stage-1 report: `started:false`, `reason:"parity gate failed"`. No training progress claimed.

## Active isolation matrix

Kaggle version 6 changes collision default `condim=6` to `condim=3`, preserving geometry, mass, actuators and solver settings. It uses the same two-case/25-step fixture and intentionally disables training even if parity passes. This tests whether torsional/rolling friction dimensions trigger the branch split.

If divergence remains, continue one-factor isolation over cone, solver, iteration count, contact pairs, material/friction parameters and serialized pre-impact single-step comparisons. Every failed case becomes a regression fixture. Do not weaken tolerances or remove physics merely to pass.

## Training design constraint

Stage 1 uses the minimal H2 environment only: floor, gravity, H2 rigid contacts and actuators. No tennis apparatus. Full training starts only after the stage-relevant gate passes. The production rollout must remain fully vectorized and device-resident; checkpoint/resume and paired deterministic evaluation are required.
