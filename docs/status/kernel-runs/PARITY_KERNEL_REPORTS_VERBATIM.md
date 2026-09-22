# ATH H2 CPU/MJX parity kernel - run reports

Kernel: https://www.kaggle.com/code/danielharkin/ath-h2-mjx-parity (private, T4). Covers v1 through v8 plus v9 launch.

Verbatim dated reports from the ATH task agent to the coordinating agent. Paths under /home/sandbox or /tmp are workspace-local and may not exist in the repo.


---

## Tuesday, September 22, 2026, 3:22:20 PM CDT

GPU parity run is now actually RUNNING under `danielharkin` on Kaggle T4. Private kernel: https://www.kaggle.com/code/danielharkin/ath-h2-mjx-parity . API status is `RUNNING`, version 1, `enableGpu=true`, `machineShape=NvidiaTeslaT4`, 30-minute timeout. This is the real 29-actuator/66-collision-geom H2 physics model with visual meshes stripped only to fit Kaggle's 1MB source limit; inertias, joints, actuators, contact geoms, floor and keyframe are unchanged. It runs a 500-step / 1.0s identical-state CPU MuJoCo vs MJX controlled-fall/contact comparison. I will report the numbers when output lands.

---

## Tuesday, September 22, 2026, 3:26:34 PM CDT

Applied. Training/parity artifacts will stay physics-only and speed-first: visual meshes/materials/rendering can be removed, while inertias, collision geometry, joint/actuator parameters, contacts, timestep and state semantics remain exact and hash-gated. Webpage remains the only visual-polish lane. Current parity kernel already follows this split.

---

## Tuesday, September 22, 2026, 3:54:11 PM CDT

Parity v1 timed out at the 30-minute ceiling, not a physics failure. Exact persisted logs: dependencies installed; T4 saw two CUDA devices; then no further output. Kaggle ended `cancelAcknowledged`, empty failure message; output zip contained only the generated physics XML, no report. Root cause is the 500-step Python-unrolled function being handed to one giant JIT graph, reproducing the compile blow-up.

I fixed the execution shape without changing model/state/steps: v2 now JIT-compiles a single exact MJX step once, then calls that cached step 500 times while recording each state/contact count. Same 1.0s H2 fixture and thresholds, much smaller compilation. Version 2 is pushed and starting now at the same private URL: https://www.kaggle.com/code/danielharkin/ath-h2-mjx-parity .

---

## Tuesday, September 22, 2026, 4:03:04 PM CDT

First actual parity numbers landed. v2 completed on T4, and the gate FAILS:
- exact model: nq 36, nv 35, nu 29, 34 physics geoms after visuals removed, 500 steps / 1.0 s
- compile first step: 78.184 s
- cached 499-step rollout: 280.921 s (0.563 s per simulated step due Python dispatch/blocking)
- max qpos error: 2.8632e-4 rad vs 1e-4 threshold (fail)
- max qvel error: 1.37031e-2 rad/s vs 1e-3 (fail)
- final max qpos: 6.7810e-5; final max qvel: 2.8966e-3
- max root-height error: 5.043e-6 m
- CPU max contacts 28; MJX capacity/`ncon` read reports 533 and exact per-step ncon equality false, so that raw ncon comparison is invalid/failed and must be replaced with active contact filtering/event classification.

Report URL: https://www.kaggle.com/code/danielharkin/ath-h2-mjx-parity

Speed response: current 6-minute runtime is dominated by 500 host-dispatched synchronized steps, not physics. Next compile will use a chunked `lax.scan` (25-50 static steps/chunk) to avoid the giant-500 graph and host dispatch, persistent JAX cache in `/kaggle/working`, no per-step blocking, donated carry where accepted, and active-contact extraction only at chunk boundaries/full recorded scan. The gate genuinely needs 1.0 s to include fall/floor contact; I won't shorten the authoritative fixture below the event window, but compile tuning can use 50-step trials. Realistic target is ~1-2 min cold compile + seconds for the 1 s trajectory; warm execution should be seconds if Kaggle preserves cache in the session, but separate kernel versions do not reliably preserve `/kaggle/working`, so cross-run cache requires a dataset/output cache artifact. Physics remains unchanged.

---

## Tuesday, September 22, 2026, 4:07:56 PM CDT

Applied: parity will move from a scalar fixture to one fully device-resident `vmap` batch over an ensemble of identical serialized CPU/MJX initial conditions, with time stepping inside jitted `scan`, no host loop. One compile will yield per-case error/contact-event distributions. Then the same shape becomes the 1024/2048/4096 throughput-knee benchmark for training. Current v3 is only the chunk-size timing probe; the next authoritative diagnostic version will be batched and fully vectorized.

---

## Tuesday, September 22, 2026, 4:13:48 PM CDT

v3 chunk test complete: 25-step chunks did not improve wall-time. Cold compile 106.134 s and cached remaining rollout 264.075 s, total physics ~370.2 s versus v2 ~359.1 s. Gate still fails: max qpos 2.3322e-4, max qvel 1.60458e-2, final qpos 2.1034e-4, final qvel 3.8138e-3; root-height error 1.605e-6 m. This confirms scan length reduction alone is not enough because 20 host-dispatched chunks remain very expensive and each chunk still synchronizes/transfers recorded contacts/states.

Next architecture follows Daniel's correction: fully device-resident `scan` over time and `vmap` over cases, with one compiled executable, no chunk host loop, and summarized metrics returned rather than full 533-slot contact tensors. Compile tests use a 50-step static trace first; authoritative remains 500 steps once compile shape is proven. The diagnostic report will include solver config, per-step error curve, active contacts/onset/impulses and ensemble distribution.

---

## Tuesday, September 22, 2026, 4:24:28 PM CDT

Concrete string track is queued in `self_play/STRINGBED_CALIBRATION_TRACK.md` and can run beside parity.

Measured basis, not a guessed 5 ms point:
- Kawazoe et al. 2012 ultrahigh-speed (10,000 fps): new nylon releases at ~3.8 ms; reported/calculated impacts span 2.6, 3.4, 3.9, 4.1 ms at 30 m/s. Player new-gut impact is ~3.8-4.0 ms; used/notched gut ~3.4 ms; new gut produced ~50 rps. https://www.jstage.jst.go.jp/article/jsdd/6/2/6_2_213/_pdf
- Washida/Elliott/Allen 2014 controlled matrix: 30 +/-1.5 m/s, 24°/38°, spin 0-500 rad/s, polyester 245 N, 16x19 vs 16x12. It measures lateral string movement and rebound speed/spin; fewer crosses added ~25 rad/s rebound spin at 24° and 16 rad/s at 38° above 100 rad/s inbound. https://shura.shu.ac.uk/8206/1/washida%2Celliott%2Callen_-_measurement_of_main_strings.pdf
- James/Haake 2008 measured in-flight spin decay with two high-speed cameras and found decay linear in initial spin x speed with ball-specific coefficient. I will not invent the coefficient from its abstract; extract the tennis rows/full table before fitting. https://shura.shu.ac.uk/2132/ and https://doi.org/10.1007/978-2-287-09413-2_20

Fit order: stiffness/damping + ball shell to the 2.6-4.1 ms dwell band while preserving rebound normal speed; then ball/string and inter-string friction/snapback to lateral deflection + rebound speed/spin across the Washida matrix, holding out an angle/pattern; then add `dω/dt=-K|v|ω` only from measured James-Haake coefficients, separate new/worn balls. Current ~10 ms dwell remains a fail.

---

## Tuesday, September 22, 2026, 5:03:45 PM CDT

The fully vectorized parity diagnostic source is now implemented: device-resident `lax.scan` over time, `vmap` across independently perturbed H2 initial states, summarized per-step/per-case qpos and qvel error curves, first threshold crossings, active-contact filtering by `dist <= 0`, and a recorded solver settings block. A tiny 2-case x 5-step local run still exceeded 120 seconds in MJX compilation on this CPU-only workspace, so there is no runtime result yet and no stale report was emitted. This source belongs on the already authenticated Kaggle GPU lane for the 50-step shape test, followed by 500 steps and 1024/2048/4096 throughput once correctness is confirmed.

---

## Tuesday, September 22, 2026, 5:05:14 PM CDT

Acknowledging the walking-policy delegation - folded into the roadmap as follows:

1. Parity stays first: pushing the vectorized batched MJX parity diagnostic (scan over time + vmap over 16 perturbed cases, per-step qpos/qvel error curves, 1e-4/1e-3 first-crossing steps, contact counts) to the Kaggle T4 lane now via the working kagglehub/kagglesdk Bearer route. First run is the 15-min smoke; full gate run follows if clean.
2. One kernel, phase-gated: the same kernel then runs parity -> on PASS transitions straight into the stage-1 standing/balance policy smoke (vectorized, thousands-of-env shaped via vmap; 15-min initial window). Checkpoints written to a Kaggle dataset at intervals with resume-from-dataset logic across Kaggle session/quota limits, so training survives session death.
3. Best-checkpoint export: I'll add an export step that writes the best qualifying checkpoint in a web-friendly format for orrimgames.github.io/latent-tennis. Per Daniel's standing rule, the site shows only the latest QUALIFYING checkpoint - zero-step placeholder until one passes its eval gate; nothing unqualified gets displayed.
4. LATENT admission lane continues in parallel: building mink/Jacobian whole-body IK with an authored exact-H2 retarget config (root from source xpos, Cartesian body targets, quaternion continuity, foot-ground contact locking) to replace the failed per-frame least-squares prototype.

Next report lands when the Kaggle kernel push result + first parity numbers exist, or on a blocker.

---

## Tuesday, September 22, 2026, 5:19:08 PM CDT

LATENT did not start its final tennis learner from a generic policy that could already walk, but it also did not learn the whole tennis behavior end-to-end from scratch.

Their bootstrap is a staged, motion-prior pipeline:
1. They collect/retarget human fragments containing the needed primitives, including lateral shuffle, crossover steps, forehand and backhand strokes.
2. They pre-train an Any2Track-style low-level RL motion tracker to imitate those fragments while balancing. It maps proprioception plus the next reference-motion target to joint position targets, which a PD controller turns into torque. The racket-side wrist control signal is deliberately removed and that wrist is perturbed during tracker training, so the body controller learns to stay stable under later wrist corrections.
3. They distill that tracker online with DAgger into a conditional-VAE latent action model. The tracker is the teacher; the student decoder learns the teacher's body actions, and a learned state-conditioned prior models which latent actions fit each robot state.
4. Only then do they train the high-level tennis planner with PPO. It observes robot/root/ball state, selects and composes residual latent actions around the learned prior, and directly controls the racket wrist. A Mahalanobis-distance Latent Action Barrier limits exploration to plausible regions of the state-conditioned prior. Rewards train it to return randomized incoming balls to target locations while retaining balance, safety and natural motion.

So the direct answer is: no separate pretrained walking controller is described as their starting point. The low-level tracker itself is trained on their motion corpus, whose primitives include footwork/locomotion. The released tracker config defaults to random policy/value initialization and `restore_checkpoint_path=None`, supporting that reading. But the high-level tennis policy definitely starts from a learned controller/prior, not from scratch. Their vanilla-PPO-from-scratch baseline failed to converge.

Scale/details: MuJoCo JAX, PPO, 8 GPUs; planner/controller at 50 Hz and simulation at 2,000 Hz. The released tracker config specifies 32,768 parallel envs and 3 billion timesteps. Note that the public repo currently releases the tracker and a small motion subset, but still marks the DAgger distillation code, pretrained latent model, and high-level tennis-policy code as unreleased.

Primary paper: https://arxiv.org/html/2603.12686v1
Official repo: https://github.com/GalaxyGeneralRobotics/LATENT
Official project: https://zzk273.github.io/LATENT/

---

## Tuesday, September 22, 2026, 5:20:27 PM CDT

Kaggle H2 parity kernel version 4 is pushed and running on the T4 lane: https://www.kaggle.com/code/danielharkin/ath-h2-mjx-parity (kernel 135430420).

This version replaces the invalid raw-`ncon` comparison with active-contact counts (`contact.dist <= 0`) on both CPU MuJoCo and MJX, adds 8 diverse deterministic H2 initial states, case-major CPU oracles, and a single device-resident `lax.scan` over time plus `vmap` over cases. It records per-step qpos/qvel error curves and first threshold crossings. The parity gate is strictly max qpos <= 1e-4 and max qvel <= 1e-3; contact counts are diagnostic, not a false equality gate.

I also applied Daniel's 5:05 minimal-environment steer: only after parity passes, the kernel launches a vectorized standing/balance training-loop smoke on the H2 model with floor, gravity, rigid contacts and actuators only. The embedded model has no ball, racket, court or net. It saves a checkpoint and reloads it for an additional optimizer update to verify resume mechanics. This is an honest differentiable policy-gradient smoke, not yet the full PPO walking run. If parity fails, training does not start.

I set a five-minute status wake and will inspect the output artifacts or repair the run if it fails.

---

## Tuesday, September 22, 2026, 5:25:39 PM CDT

AdaPT is a new, directly relevant tennis-motion project, but it does not replace either of our immediate H2 gates.

What it is
- "Adaptive Motion Planning and Tracking," from Noitom Robotics and collaborators. It learns professional serve/rally styles from broadcast video using a decoupled hierarchy: a kinematic motion planner generates style, and a low-level tracker physically executes it.
- Rally: GVHMR reconstruction -> GMR retargeting -> general tracker correction -> MVAE motion generator -> high-level planner conditioned on ball trajectory and a learned execution-speed control.
- Serve: a speed-randomized motion tracker plus a high-level timing/speed planner and residual action correction, with a strong backswing keyframe reward and ball-toss guidance.
- Paper targets Unitree G1 and reports deployment on full-size Dobot Atom. The released code/configs are G1-only.

What the repository actually ships
- Full Mjlab/MuJoCo-Warp + PyTorch/RSL-RL framework and G1 MJCF/assets, left- and right-racket variants.
- G1 AdaPT stage-1 serve-tracking PPO task/config, 4,096-env training command, random motion-time-step curriculum, perturbations/domain randomization, self-collision and racket-ground sensors, tracking rewards, and keyframe shaping.
- Two processed G1 serve reference clips: player1 and player2.
- One pretrained checkpoint only: player1 `model_24000.pt` (about 6 MB). There is no player2 weight in the repo.
- Utilities that convert GMR-style PKL output into Mjlab NPZ, preserving joint states plus world-space body position/orientation/linear/angular velocity.
- Apache-2.0 repository license. No GitHub releases/tags are currently listed. The paper's full rally planner/MVAE, broadcast corpus, Dobot Atom configuration, and Atom weights are not evident in the public tree.
- Current commit inspected: 615b42f8edf8d78b1c8a9601673c70ea67e45ee9.

Fit for our LATENT clip admission / whole-body IK lane
- Useful as a reference and downstream adapter, not as the IK solver. It confirms the exact production chain we are pursuing: GVHMR -> GMR -> physics correction through a tracker. Its GMR-PKL converter and motion schema can be reused after we produce valid exact-H2 retargets.
- It does not ship an H2 GMR config, H2 MJCF, H2 IK, contact-locking retargeter, or an admission validator. Therefore it does not fix our current LATENT failures: H2 joint limits, Euler/quaternion discontinuity, feet floating, velocity/acceleration spikes, and foot-contact locking still need our exact-H2 IK and validation gate.
- Its strongest addition is a possible second "physical correction" stage after geometric admission: train a tracker over admitted H2 references at randomized execution speed, then replay and revalidate the dynamically executable rollouts. That is valuable later, but tracker output cannot be used to excuse a failed source-reference admission.

Fit for H2 stage-1 standing/walking
- The released task is motion-mimic serve tracking with a racket-bearing G1, not a generic stand/walk controller. Its checkpoint is embodiment-specific and cannot be transplanted to H2.
- Backend mismatch matters: AdaPT uses MuJoCo-Warp + PyTorch/RSL-RL, whereas Daniel selected MJX/JAX as our primary backend. Adopting the framework wholesale would split the lane and bypass our current CPU-MuJoCo vs MJX parity gate.
- We should borrow ideas, not weights/backend: random reference-speed training, motion-time adaptation, push/COM/friction/PD/effort randomization, self-collision checks, dense pose/velocity tracking, and eventually separate standing versus rally policies. For minimal H2 stage 1, only the robustness/randomization patterns apply; no racket or tennis scene enters.

Verdict to relay
AdaPT validates our architecture and gives us useful open G1 reference code, data formats, rewards, and robustness mechanisms. It does not change the current next steps: finish exact-H2 retarget/admission, pass H2 MJX parity, then train H2 standing/walking from scratch. After those gates, port AdaPT's random-speed tracker concepts into the H2 motion-prior stage and compare against LATENT's latent-controller route. Do not transplant the G1 checkpoint.

Sources:
- Official repo: https://github.com/noitom-robotics/AdaPT
- Paper: https://arxiv.org/html/2608.20087
- Project page: https://humanoidtennis.github.io/AdaPT

---

## Tuesday, September 22, 2026, 5:36:50 PM CDT

Kaggle v4 did not complete. It was canceled at the 15-minute timeout while compiling the first batched MJX trajectory; logs reached the 2xT4 device check and the `contact.dist` trace but produced no parity summary or stage-1 training artifact. I am not counting it as a parity result or training progress.

I pushed version 5 as a bounded compile probe with the same corrected parity semantics and vectorized structure but only 2 cases x 25 steps, plus a tiny 8-env x 8-step, 3-update gated training/resume smoke if parity passes: https://www.kaggle.com/code/danielharkin/ath-h2-mjx-parity. This isolates whether the full-trajectory MJX graph is feasible under Kaggle's 15-minute session cap before we scale it. Status wake is set.

---

## Tuesday, September 22, 2026, 5:42:06 PM CDT

Verified Kaggle v5 result: the corrected H2 parity gate FAILS, so stage-1 training correctly did not start.

Evidence from the downloaded report:
- Model: nq 36, nv 35, nu 29, 34 geoms; MuJoCo/MJX 3.3.7, JAX 0.5.3, 2xT4.
- Probe: 2 cases x 25 steps at 2 ms, device-resident `lax.scan` + `vmap`.
- Home case remains close: max qpos 5.96e-7, max qvel 1.19e-4, under both thresholds.
- Perturbed case diverges exactly when contact begins: first qpos >1e-4 and qvel >1e-3 at step 12. Overall max qpos 0.023811 and max qvel 2.46538, far over 1e-4/1e-3.
- Active contact counts match through initial impact, then differ from step 13 onward (CPU 14 versus MJX 15, then larger differences), confirming the divergence is in contact evolution rather than free flight.
- Runtime: 128.24 s cold compile+rollout, 36.45 s cached for only 50 env-steps, so the unoptimized full scan is also too slow for the 15-minute lane.
- `h2_stage1_smoke_report.json` says `started:false`, reason `parity gate failed`; minimal env/no-tennis condition preserved.

Run: https://www.kaggle.com/code/danielharkin/ath-h2-mjx-parity

Next technical move is not training. I am isolating the contact branch: same impacted state, single-step CPU/MJX comparison of contact pairs/distances/forces plus solver/contact parameters, then simplifying/fixing collision/contact settings until the perturbed contact case passes. Separately, the training rollout will need a static one-step JIT with device loop/chunk strategy rather than compiling a long monolithic MJX scan under Kaggle's cap.

---

## Tuesday, September 22, 2026, 6:15:30 PM CDT

Recorded. I added `self_play/BALL_MODEL_SPEC.md` as the canonical training-facing ball contract and updated stage 6 in `H2_LOCOMOTION_CURRICULUM.md`.

The spec now requires a full signed 3D spin command with independent topspin, backspin/slice, and sidespin dimensions; mixed axes are valid. Sidespin is defined as vertical-axis rotation whose `omega x v_rel` Magnus force produces signed lateral acceleration. Scripted lateral curvature is explicitly forbidden. It also adds pure left/right sidespin and mixed-spin CPU/MJX tests, lateral landing error, and commanded-versus-achieved spin-vector reporting in rad/s and rpm.

No change to current priority: H2 contact-parity isolation remains first, and no ball/racket/stringbed apparatus enters stage 1.

---

## Tuesday, September 22, 2026, 6:27:25 PM CDT

Applied the grant. I will keep ATH technical decisions moving on judgment and report evidence, without stopping for user questions. Money and third-party actions remain with you.

Contact isolation is underway: Kaggle version 6 is running the same failing 2-case/25-step fixture with collision contact dimension reduced from 6 to 3, preserving geometry, masses, actuators and solver settings. Training is intentionally disabled in this diagnostic even if it passes. This tests whether torsional/rolling contact dimensions cause the CPU/MJX branch split. Status wake is set; I will continue the matrix based on the result.

---

## Tuesday, September 22, 2026, 6:28:06 PM CDT

Applied. I added `self_play/ATH_TEST_ITERATION_METHOD.md` as the standing engineering method: modular contracts, deterministic/boundary/failure/held-out fixtures, parameter matrices and ablations, reproducible artifacts, tight smallest-case loops, regression retention, integration/parity/reload/visual gates, and no tolerance weakening to hide failures.

The contact work will extend from the current condim isolation into cone, solver, iteration, contact-pair, and material matrices anchored to the same serialized pre-impact state and first divergent event. Each failed case stays as a regression fixture.

---

## Tuesday, September 22, 2026, 6:32:02 PM CDT

Updated `H2_LOCOMOTION_CURRICULUM.md`. The striking ladder is now:

Gate 0 parity -> standing/recovery -> standing arm+racket tracking -> static forehand/backhand volley from a controlled feed -> dynamic balance -> walking -> running -> tennis footwork and moving volleys -> groundstrokes/full repertoire.

The static volley is explicitly the first trained tennis shot and enters only after standing/arm tracking plus the independent calibrated racket/stringbed/ball physics gates. It begins with fixed feed/contact windows, then randomizes feed position, velocity, height, spin and commanded outcome. The goal-conditioned objective remains the reward contract; no scripted rebound or contact outcomes.

---

## Tuesday, September 22, 2026, 6:34:53 PM CDT

Attached the canonical spec bundle plus a standalone current parity-status file for the publishing agent. Bundle SHA-256: `1727b38da73a236ba970de64f98bd308da360ef406e4147c3fadb5d59778f7c8`.

Source paths and recommended repo destinations:
- `/home/sandbox/g1-tennis/h2_pipeline/self_play/BALL_MODEL_SPEC.md` -> `docs/physics/ball-model.md`
- `/home/sandbox/g1-tennis/h2_pipeline/self_play/GOAL_CONDITIONED_TENNIS_OBJECTIVE.md` -> `docs/training/goal-conditioned-tennis-objective.md`
- `/home/sandbox/g1-tennis/h2_pipeline/self_play/H2_LOCOMOTION_CURRICULUM.md` -> `docs/training/h2-curriculum.md`
- `/home/sandbox/g1-tennis/h2_pipeline/motion_priors/IK_ENGINEERING_TRACK.md` -> `docs/motion/ik-engineering-track.md`
- `/home/sandbox/g1-tennis/h2_pipeline/self_play/ATH_TEST_ITERATION_METHOD.md` -> `docs/engineering/test-iteration-method.md`
- `/home/sandbox/g1-tennis/h2_pipeline/self_play/STRINGBED_CALIBRATION_TRACK.md` -> `docs/physics/stringbed-calibration.md`
- attached `/tmp/ATH_PARITY_STATUS_2026-09-22.md` -> `docs/status/h2-mjx-parity.md`

The archive preserves those relative source paths plus the status file. It contains the latest static-volley-first curriculum, full goal-conditioned objective, 3D sidespin/Magnus contract, IK test matrix, and current v5 failure/v6 isolation state. I am continuing contact isolation in parallel.

---

## Tuesday, September 22, 2026, 6:34:59 PM CDT

Attached the canonical spec bundle plus a standalone current parity-status file for the publishing agent. Bundle SHA-256: `1727b38da73a236ba970de64f98bd308da360ef406e4147c3fadb5d59778f7c8`.

Source paths and recommended repo destinations:
- `/home/sandbox/g1-tennis/h2_pipeline/self_play/BALL_MODEL_SPEC.md` -> `docs/physics/ball-model.md`
- `/home/sandbox/g1-tennis/h2_pipeline/self_play/GOAL_CONDITIONED_TENNIS_OBJECTIVE.md` -> `docs/training/goal-conditioned-tennis-objective.md`
- `/home/sandbox/g1-tennis/h2_pipeline/self_play/H2_LOCOMOTION_CURRICULUM.md` -> `docs/training/h2-curriculum.md`
- `/home/sandbox/g1-tennis/h2_pipeline/motion_priors/IK_ENGINEERING_TRACK.md` -> `docs/motion/ik-engineering-track.md`
- `/home/sandbox/g1-tennis/h2_pipeline/self_play/ATH_TEST_ITERATION_METHOD.md` -> `docs/engineering/test-iteration-method.md`
- `/home/sandbox/g1-tennis/h2_pipeline/self_play/STRINGBED_CALIBRATION_TRACK.md` -> `docs/physics/stringbed-calibration.md`
- attached `/tmp/ATH_PARITY_STATUS_2026-09-22.md` -> `docs/status/h2-mjx-parity.md`

The archive preserves those relative source paths plus the status file. It contains the latest static-volley-first curriculum, full goal-conditioned objective, 3D sidespin/Magnus contract, IK test matrix, and current v5 failure/v6 isolation state. I am continuing contact isolation in parallel.

---

## Tuesday, September 22, 2026, 6:37:51 PM CDT

Contact isolation v6 result: condim 6 -> 3 does not fix parity. Perturbed case still first crosses both thresholds at step 12; max qpos 0.023791 and qvel 2.46160, nearly identical to v5. Active contacts still split after initial impact. This rules out torsional/rolling friction dimensions as the primary cause.

Version 7 is now running a one-factor floor-only isolation: condim 3 remains, robot self-collision filtering is disabled, robot-floor contacts remain. If this passes, I will localize the offending self-collision pair(s); if it fails, I continue cone/solver/material isolation. Training remains disabled.

---

## Tuesday, September 22, 2026, 6:43:14 PM CDT

V7 floor-only isolation also fails with the same step-12 split and nearly identical maxima (qpos 0.0237908, qvel 2.46161). Disabling robot self-collision did not change the trajectory/contact counts, so the mismatch is floor-contact solver evolution, not self-collision.

Useful performance result: removing robot-robot collision filtering raised cached throughput from 5.18 to 343 env-steps/s on this tiny fixture, showing self-collision broadphase is a separate major performance cost even though it is not this parity bug.

V8 is running the next one-factor test: condim 3 plus pyramidal instead of elliptic friction cone, all geometry/material parameters retained. Training remains disabled.
