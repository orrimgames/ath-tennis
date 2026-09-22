# ATH open questions - state at 2026-09-22 7:00 PM CDT

## Blocking now
1. H2 CPU/MJX contact parity. Perturbed (and under pyramidal cone, home) trajectories split at first floor impact (steps 11-13 at 2 ms). Ruled out: condim 6 (v6), self-collision (v7). Pyramidal cone changes it but makes it worse (v8). Running: v9 float64 MJX + teacher-forced one-step diagnostic. Next: solver iterations/ls_iterations, solver type, impratio, solref/solimp, per-contact-pair dist/force at first divergent step. Stage-1 training blocked until this passes.
2. MJX compile and throughput at scale. Long scans exceed Kaggle's session cap; self-collision cost must be solved (collision pair pruning, capsule simplification, or MuJoCo-Warp) before 1024-4096 env runs.
3. Exact-H2 whole-body IK. Needs an efficient constrained solver (Mink/QP or warm-started Jacobian) and the ablation matrix over permanent fixtures (LATENT clip 1 frame 1125 shoulder jump, clips 2-4 wrist jumps, joint limits, contact locks, unreachable wrist, missing head targets, ankle ordering, floating root). Per-frame SciPy least-squares is too slow.

## Physics still to calibrate
4. Ball-court bounce targets (COR vs speed, friction/court pace, spin reversal vs incidence). No Cross/ITF bounce data ingested yet.
5. Stringbed: racket/string spec, measured deflection/dwell/spin dataset, deformable implementation, contact substep rate (>=1 kHz, likely 4 kHz).
6. Aero: coefficients across speed/spin/wear/air, spin decay/precession, wind.
7. Actuator/latency: H2 torque-speed/thermal curves, measured latency and sensor noise.

## Design questions without an empirical answer yet
8. RL vs classical: no classical H2 baseline has been run.
9. LATENT-style correctable latent vs bounded AMP/RSI baseline: planned A/B, not run.
10. Human-to-H2 motion: MotionBERT+IK vs a direct video-to-H2-qpos model; pseudo-label quality sets the ceiling.
11. Multi-rate architecture: H2 body at the validated rate, ball/racket contact substepped. Exact rates not fixed.

## No user or parent decision is pending.
