# ATH decision rationale

Full dated reports: DECISION_REPORTS_VERBATIM.md. Supporting specs: MJX_PRIMARY_PARITY_GATE.md, ENV_SCALING_BENCHMARK.md.

## 1. Learned control (RL) over a classical controller
Decision: the motor layer is a learned policy (PPO, asymmetric actor-critic) with model-based components used as priors and inputs, not as the controller.
Why:
- Every humanoid-tennis system with real striking results that we checked trains the whole-body striking controller with PPO: LATENT, SMASH, PACE, and HITTER's whole-body controller. HITTER is the closest to a hybrid: model-based ball/racket planning on top of a PPO whole-body controller.
- The target skill is goal-conditioned execution (placement, pace, trajectory, signed 3D spin, direction, contact-time choice incl. on-the-rise), over forehand/backhand/volley/serve plus improvisation and style/ability conditioning. Hand-designed MPC/WBC would need a separate hand-built model per shot and per contact regime; the stringbed/contact physics we require (dwell, snapback, frame recoil) is too stiff and discontinuous for a real-time model-based controller to plan through reliably.
- H2 is a 29-actuator floating-base body with foot contact switching during fast swings; published classical humanoid controllers show walking and manipulation, not high-speed spin-controlled striking.
What stays model-based ("coach priors, not cages"): ball-flight prediction and contact-window estimation, exact-H2 IK references, interception/footwork priors, and the reward contract. The policy may deviate from priors when the outcome is better.
Honest gap: no head-to-head classical baseline has been run on H2. This is recorded as an open question, not a settled empirical result.

## 2. Static volley as the first tennis shot
Decision (from Daniel, relayed 2026-09-22): Gate 0 parity -> standing/recovery -> standing arm+racket tracking -> static forehand/backhand volley from a controlled feed -> dynamic balance -> walking -> running -> footwork and moving volleys -> groundstrokes/full repertoire.
Why:
- A static volley removes locomotion, intercept planning and long swing timing, so the first shot tests only arm/racket control and racket-ball contact.
- It exercises the stringbed/contact model at a short swing with a controlled feed, which gives clean failure attribution (policy vs contact physics).
- It enters only after independent calibrated racket/stringbed/ball gates pass, so the first shot never trains against uncalibrated contact.
- Feed position, velocity, height, spin and commanded outcome are then randomized; the goal-conditioned objective is the reward contract from the start.

## 3. MJX / JAX as the primary training backend
Decision: MJX (JAX) is the primary training path; CPU MuJoCo is the float64 reference oracle and fallback.
Why:
- Compute is free Kaggle GPUs (T4, one notebook at a time, session caps). MJX runs thousands of environments on one device with jax.vmap over environments and jax.lax.scan over time, with no host stepping loop. v2/v3 showed host-dispatched stepping costs ~0.5 s per simulated step; device-resident scan+vmap is required.
- Same MJCF and physics semantics as CPU MuJoCo, so every fixture can be compared step by step against the CPU oracle from a serialized identical state. That is the parity gate.
- LATENT, the closest precedent, trained PPO on MJX. Unitree's official H2 RL baseline (unitree_rl_mjlab) is MuJoCo-family, so its task/reward/actuator layout ports without changing the physics engine family.
- Physics correctness precedes training: no MJX training counts until the parity gate passes.
Known costs: long monolithic scans are compile-heavy (v1, v4 timed out); self-collision broadphase dominates cost on the tiny fixture (5.18 vs 343 env-steps/s). MuJoCo-Warp (used by AdaPT/mjlab) is a candidate alternative if MJX parity or throughput cannot be fixed.
