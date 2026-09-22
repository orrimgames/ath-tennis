# ATH decision reports

Platform choice, learning design, MJX primary path, physics-first gating, volley-first curriculum.

Verbatim dated reports from the ATH task agent to the coordinating agent. Paths under /home/sandbox or /tmp are workspace-local and may not exist in the repo.


---

## Monday, September 21, 2026, 4:37:42 PM CDT

Headline verdict: H2 is the better long-term tennis body on paper, but not enough better to switch ATH today. Keep H1-2 as the active training platform, and open an H2 parity branch only after the walking/forehand pipeline passes. The main H2 advantage is kinematic quality, not headline torque.

Numbers from current Unitree sources:
- H2: 182 cm, ~70 kg, 31 body DOF. Arms are 7 DOF each (3 shoulder, 2 elbow, 2 wrist); legs 6 each; waist 3; head 2. Arm+forearm length 690 mm. Official max arm joint 120 Nm, leg 360 Nm, rated arm payload ~7 kg / peak ~15 kg. Base price $29,900 before tax/shipping; only EDU supports secondary development. https://www.unitree.com/H2 and https://support.unitree.com/home/en/H2_developer/About_H2 and https://shop.unitree.com/products/unitree-h2
- H1-2: ~178 cm, ~70 kg, 27 actuators in our handless model. Arms 7 DOF each but its layout is 3 shoulder + 1 elbow + 3 wrist; waist only yaw; legs 6 each. Official max arm 120 Nm, leg 360 Nm, claimed mobility under 2 m/s. Current H1 shop listing is $90,000/contact-sales, but that mixes H1-family commercial packaging and is not a clean H1-2 quote. https://www.unitree.com/h1/ and https://shop.unitree.com/products/unitree-h1

Why H2 is tennis-friendlier:
- Three-axis waist versus H1-2's one-axis torso lets it reproduce separation, lateral bend and extension in serves/forehands instead of forcing compensation into hips and shoulders.
- Two elbow axes are a more human chain for racket preparation and serve pronation timing; the 690 mm arm chain gives useful reach.
- Same advertised peak arm/leg torque at roughly the same mass, so H2 buys articulation without an obvious torque penalty.
- Unitree describes low-inertia high-speed internal-rotor motors and crossed-roller bearings, which are promising for racket acceleration and repeatability.

Why not switch now:
- Unitree does not publish per-joint speed curves or sustained torque/thermal envelopes on the product page. We cannot yet prove H2 swings a racket faster or shuffles faster. Peak torque equality does not settle tennis performance.
- H2 is newer. The official Unitree RL Mjlab already has current H2 MJCF, full-collision config and velocity task, but ships no H2 checkpoint. I found one community H2 MuJoCo/ONNX runner, while H1-2 already has several released policies and our current retargeting, collision racket, validation, and video-prior work.
- Switching resets morphology mapping, all references, racket mount, contact calibration, randomization bounds and controller validation. The work is reusable architecturally, but not free.
- H2 EDU pricing/availability requires sales contact; $29,900 standard does not establish an open-development unit. Any purchase is a separate money decision.

Recommendation: H1-2 stays ATH v1. Build one H2 shadow benchmark in parallel later: same walk, compact shuffle, and learned forehand priors, same continuous gates, native official MJCF. Switch only if H2 wins measured racket-head speed, balance/contact, tracking error and thermal/torque headroom by a material margin. Honest asterisk: the H2's extra waist/elbow DOF make it my expected winner for 16-UTR motion fidelity, but that is still a hypothesis until policy-to-policy physics tests.

---

## Monday, September 21, 2026, 4:39:25 PM CDT

Headline: H1-2 has not demonstrated the physical potential for UTR 16, and with today's published limits I would not promise it. It can plausibly become a strong drill machine and perhaps a competitive lower-level player, but UTR 16 match play is conditional on tests it has not passed and court coverage is the biggest likely hardware ceiling.

Numbers:
- Arm speed envelope from Unitree's own H1-2 URDF: shoulder pitch/roll 9 rad/s; shoulder yaw and elbow 20 rad/s; wrist axes 31.4 rad/s. Effort limits are 40 Nm shoulder pitch/roll, 18 Nm shoulder yaw/elbow, 19 Nm wrist. Those no-load joint-speed limits are fast enough in principle to synthesize substantial racket-tip speed through a serial chain. However, Unitree publishes no coupled loaded speed-torque curve, so we cannot validly turn those maxima into a 30-40 m/s pro contact claim. A collegiate forehand study measured 15.4 m/s horizontal plus 6.6 m/s vertical racket-head velocity (about 16.8 m/s resultant), not 30-40: https://pmc.ncbi.nlm.nih.gov/articles/PMC5721180/. Serve is harder: professional ball speeds over 200 km/h are regularly recorded, and shoulder internal rotation plus wrist contribution dominate racket velocity. H1-2's 1-DOF elbow and 1-DOF waist make the human kinetic chain less faithful even if the distal motors are numerically fast.
- Movement is the clearer gap. Unitree claims H1-2 mobility under 2 m/s: https://www.unitree.com/h1/. Grand Slam end-range movement data shows 3.70 m lateral travel under 0.44 s pressure, and top-10 players around 5.92 m/s maximum, with ~9-10 m/s² deceleration/reacceleration: https://doi.org/10.26182/n7qv-de41. Our untrained compact-shuffle reference was only 0.5-0.7 m/s, but that is not a hardware max. Even closing all the way to Unitree's advertised <2 m/s leaves roughly a 3x peak-speed gap to elite movement and cannot cover the cited 3.7 m in 0.44 s.
- Reaction: ATP-ranked players averaged 248 ± 70 ms; defensive actions are often under 120 ms. Expert returners initiate lateral movement around 177 ms after serve contact, with anticipation involved. Sources: https://www.scitepress.org/Papers/2023/121849/121849.pdf and https://docta.ucm.es/entities/publication/cdf8427f-2c53-487c-b7a2-96555ac59b4f. A robot perception/control stack could compute faster than humans, but camera exposure + inference + state estimation + command latency are currently unmeasured, and mechanics still must reach the ball. Anticipation is necessary, not optional.

Practical ceiling today:
- Credible: stationary/limited-mobility high-speed shadow strokes; repeatable feeds and stroke drills; controlled rallies once ball physics and control pass.
- Plausible but unproven: strong recreational/club match play with anticipation and optimized positioning.
- Not presently supportable: UTR 16 open-court match play. UTR 16 is elite/pro territory; the movement gap alone blocks the claim.

Honest asterisks: URDF speed values are joint safety/design limits, not sustained loaded performance. The <2 m/s mobility is vendor-level, not a tennis change-of-direction measurement. Racket speed might be adequate because distal angular limits are high, but only a torque-speed + racket-inertia simulation and then hardware test can prove it. If UTR 16 is non-negotiable, H2's extra waist/elbow articulation helps stroke fidelity but does not solve the same unproven court-speed problem. The project should define a UTR ladder with objective gates rather than label the robot 16 before it can cover elite movement fixtures.

---

## Monday, September 21, 2026, 5:59:38 PM CDT

Made this a standing learning rule in the architecture: "coach priors, not cages." The policy starts from a versioned library covering movement, court positioning/intercepts, shot shape and kinetic chain, balance/recovery, and anticipation, so it does not waste samples rediscovering basic coaching knowledge. Every prior records inputs, reference, confidence, provenance, and validity domain; it can shape demonstrations, curricula, proposals, warm starts, dense rewards, or residual references, but never becomes a hard action constraint or physics substitute. Added mandatory ablations to prove each prior improves time-to-competence or safety without lowering the final ceiling, robustness, or strategy diversity, plus tracking how often RL overrides it. Unsupported priors get narrowed or retired.

---

## Monday, September 21, 2026, 11:23:16 PM CDT

Concrete self-play recommendation:

Start simpler than two learning H2s. Stage A is one H2 against a scripted, curriculum ball launcher/opponent. The H2 sees ball state + proprioception, moves, and returns over the net. Only after it can sustain returns do we clone league snapshots into a second side for true self-play. Two untrained robots creates almost no successful-contact signal and wastes samples.

Minimal outcome reward:
- +1 valid racket contact
- +2 ball crosses net
- +3 lands in opposite court
- +small rally-length bonus
- penalties for net/out/double bounce, fall, foot slip, self-collision, torque/speed violation, and wasted energy
Dense shaping before contact: reachable intercept, racket-to-ball distance/relative velocity, face orientation, support margin, and recovery posture. Keep it outcome-led, not imitation-caged.

Kaggle mechanism: one notebook only, with thousands of vectorized MJX environments in that single session. First run is exactly 15 minutes. Hard stop, save checkpoint + optimizer + RNG + curriculum + league state, metrics JSONL, and evaluation videos. It passes only if simulation is stable, returns/contact rate improve above baseline, no NaNs, checkpoint resume reproduces the run, and physics violations remain bounded. Then scale 15m -> 30m -> 2h, never straight to a long quota burn. Serialize SOMA/reconstruction and RL jobs through the same one-notebook queue.

Important sequencing: the current stringbed/contact-convergence physics gate still fails, so real racket-ball self-play must not start against the unvalidated impact model. We can build and smoke-test the vectorized environment/checkpoint/dashboard now using a non-learning diagnostic or abstract contact proxy, but no claim of learned tennis until the impact gate passes. Daniel's earlier “don't train until everything is perfectly simulated” still governs unless he explicitly narrows it.

Dashboard: static self-refreshing page fed by immutable timestamped JSON/video artifacts plus a small latest.json pointer. Show run state, elapsed/quota, env steps/sec, reward/contact/net/in-bounds/rally/fall/slip/torque metrics, curves, and periodic deterministic replay. Cache-bust fetches with timestamps so he never clears cache.

---

## Monday, September 21, 2026, 11:38:12 PM CDT

I fact-checked Claude's answer against the primary papers and integrated only what survives. Full design: `/home/sandbox/g1-tennis/h2_pipeline/self_play/VERIFIED_LEARNING_DESIGN.md`; config updated.

Verified:
- SMASH uses strike-window-gated racket position/orientation/velocity rewards (0.02 s position, 0.1 s orientation/velocity), excludes wrist joints from motion tracking, and uses PPO asymmetric actor-critic. It starts with 400 mocap strikes and adds 5,000 generated, dynamically filtered motions. Success is 77.17% for 400 mocap only vs 86.38% for 400+5,000 generated. Removing adaptive tracking sigma collapses 86.38% to 22.60%. Its 642-launch/50-minute run is real: 66.7% forehand vs 38.9% backhand, attributed to camera occlusion and aggressive posture/control instability. Source: https://arxiv.org/html/2604.01158v1
- LATENT is exactly a fragment-primitives -> correctable latent space -> high-level composition policy. It uses PPO/MJX, 50 Hz policy/controller and 2,000 Hz simulation, removes the right wrist from latent control and lets the high-level policy correct it. Wrist correction ablation drops forehand 96.52% to 82.36%, backhand 82.10% to 68.94%. Vanilla PPO and kinematic MotionVAE fail to converge; AMP is viable but much weaker. Source: https://arxiv.org/html/2603.12686v1
- HITTER uses model-based ball/racket planning plus PPO WBC, gated near-strike goal rewards, dense imitation/regularization, and asymmetric actor-critic. Source: https://arxiv.org/html/2508.21043v2
- PACE uses PPO asymmetric AC with 4,096 envs; predictive dense hit/return rewards are necessary in its ablation, and it randomizes launcher trajectories. Hardware success drops to 61.3%, with ankle model mismatch, unmodeled motor dynamics, and contact cited. Source: https://arxiv.org/html/2509.21690v4

Failed/overstated:
- “400 -> 5,400 clips” is shorthand, not the paper's reported label; it says 400 mocap + 5,000 generated.
- “Cut tracking error nearly in half” is false: MPJPE improves 5.28 -> 4.42 cm (~16%); foot error 0.46 -> 0.35 cm (~24%).
- The 86 -> 23 ablation validates adaptive reward-scale tightening, not changing temporal windows.
- “AMP locomotion + RSI swing with annealed imitation is best” is not shown. LATENT directly reports AMP much worse and supports correctable latent primitives instead.
- Mixing an uncalibrated proxy with the final contact model from day one is not supported and can bake in false timing. Contact randomization should be within measured uncertainty after one calibration passes.
- PPO is the clear production default across these papers, but claims of universal superiority over Dreamer/TD-MPC2/SAC are not tested.
- Thermal throttling remains a hypothesis, not a result in these papers.

Design changes made:
- Outcomes dominate: first valid strike, net crossing, in-bounds landing, per-exchange continuation.
- Exactly three potential-difference dense terms: predicted-intercept approach; strike-gated face/relative-velocity alignment; support/recovery margin. Torque/action-rate and safety terms remain regularizers.
- Carry exploit guard: only first contact scores, calibrated dwell limit, multiple/prolonged contact rejection. Launcher randomizes trajectory, pace, spin, bounce, placement and timing; reachable-feed accounting blocks intentional forfeits.
- A/B test: preferred LATENT-style correctable primitive latent + direct wrist residual + latent barrier versus a bounded AMP-locomotion/RSI-swing annealed baseline. No wrist imitation in either.
- PPO asymmetric AC: actor only sees deployable noisy/delayed timestamped history; critic gets privileged true states/time-left.
- Metrics split by forehand/backhand and workspace/latency/contact bucket, with adaptive sampling of weak reachable cells.

---

## Tuesday, September 22, 2026, 7:40:42 AM CDT

MJX is now the primary training path, with CPU MuJoCo as reference/fallback. Added `self_play/MJX_PRIMARY_PARITY_GATE.md` and updated the scaling matrix.

Parity suite before any MJX training counts:
- H2 rigid-body/contact: free fall, stance/foot friction, self-collision, limits, torque saturation, latency stepping, controlled fall
- ball aero: drag plus top/back/side/mixed spin, full trajectory/landing/apex/time/terminal speed, wind and later spin decay
- bounce: normal/oblique impacts, post-bounce velocity/spin/events
- stringbed: center/brush/off-center/edge, dwell, patch, impulses, slip/snapback, outgoing velocity/spin, recoil, energy and independent timestep convergence

Every case starts from the same serialized state/parameters and compares full traces/events. Initial thresholds include 10mm flight landing, 5mm apex, 0.5ms flight/event timing; bounce 0.15m/s and 3rad/s; stringbed 0.25ms dwell, 0.5m/s, 8rad/s, 1mm deformation and 5% impulses/energy. Safety/event classification must match exactly.

Critical honesty constraint: our resolved Python string network needs a JAX-native force/state implementation for MJX. Until it reproduces the calibrated CPU fixtures, MJX tennis contact is invalid. We will not silently train on a simplified contact model. After parity passes, benchmark 1024/2048/4096 and select the measured throughput knee.

---

## Tuesday, September 22, 2026, 12:20:10 PM CDT

Execution update: I installed MuJoCo 3.3.7 + MJX/JAX 0.5.3 locally, loaded the actual 29-actuator H2 model (nq 36, nv 35, 66 geoms), and implemented a shared-state CPU/MJX controlled-fall/contact trajectory harness. The first run exposed an MJX x64 carry bug: contact geom indices changed int32→int64 inside `lax.scan`. Switching to x32 got past that, but the JAX CPU compilation did not finish within two 120-second runs, even after reducing the fixture from 500 steps to 25; no report file was produced. Exact blocker is CPU-only XLA compilation for this 66-geom contact model in this workspace, not a missing asset/API. It unblocks on the intended Kaggle GPU runtime (or a much smaller diagnostic model, which would not validate H2 contact). I am not calling parity passed, and smoke has not started.

I also folded Daniel's new order into the curriculum: bilateral standing/recovery → single-leg stance → hopping each foot → jump-and-stick → walking → running → tennis footwork → tennis contact. Walk/run use official Unitree MJLab H2 velocity-task design. File: `self_play/H2_LOCOMOTION_CURRICULUM.md`.

---

## Tuesday, September 22, 2026, 5:05:14 PM CDT

Acknowledging the walking-policy delegation - folded into the roadmap as follows:

1. Parity stays first: pushing the vectorized batched MJX parity diagnostic (scan over time + vmap over 16 perturbed cases, per-step qpos/qvel error curves, 1e-4/1e-3 first-crossing steps, contact counts) to the Kaggle T4 lane now via the working kagglehub/kagglesdk Bearer route. First run is the 15-min smoke; full gate run follows if clean.
2. One kernel, phase-gated: the same kernel then runs parity -> on PASS transitions straight into the stage-1 standing/balance policy smoke (vectorized, thousands-of-env shaped via vmap; 15-min initial window). Checkpoints written to a Kaggle dataset at intervals with resume-from-dataset logic across Kaggle session/quota limits, so training survives session death.
3. Best-checkpoint export: I'll add an export step that writes the best qualifying checkpoint in a web-friendly format for orrimgames.github.io/latent-tennis. Per Daniel's standing rule, the site shows only the latest QUALIFYING checkpoint - zero-step placeholder until one passes its eval gate; nothing unqualified gets displayed.
4. LATENT admission lane continues in parallel: building mink/Jacobian whole-body IK with an authored exact-H2 retarget config (root from source xpos, Cartesian body targets, quaternion continuity, foot-ground contact locking) to replace the failed per-frame least-squares prototype.

Next report lands when the Kaggle kernel push result + first parity numbers exist, or on a blocker.

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
