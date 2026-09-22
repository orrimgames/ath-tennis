# ATH research reports

LATENT, AdaPT, serve dataset, humanoid-tennis literature, ball aero, stringbed/ITF sources, H2 locomotion baselines.

Verbatim dated reports from the ATH task agent to the coordinating agent. Paths under /home/sandbox or /tmp are workspace-local and may not exist in the repo.


---

## Monday, September 21, 2026, 1:16:13 PM CDT

H1 re-plan, grounded:

- Asset path is open: Google DeepMind MuJoCo Menagerie ships `unitree_h1/h1.xml` plus meshes, sourced from Unitree's original URDF/assets under BSD-3-Clause: https://github.com/google-deepmind/mujoco_menagerie/tree/main/unitree_h1. Unitree also has its own H1 URDF/MJCF in `unitree_ros`. This removes the model-availability blocker.
- OpenTrack is G1-hardcoded, not morphology-agnostic as shipped. Porting means an H1 constants/model/env package, remapped action/observation joints, H1 torque/position/velocity limits and gains, contact geoms, termination thresholds, and retarget preprocessing. Its code is Apache 2.0, so this reuse is clean.
- Retarget path: use the original retargeted tennis trajectories as Cartesian targets, not copy G1 joint angles. Solve H1 whole-body IK/QP frame-by-frame with foot pose/contact, pelvis/COM balance, racket-hand pose/orientation and joint-limit constraints; smooth; recompute velocities; replay in CPU MuJoCo; reject frames with penetration, slip, torque or velocity violations. H1 has fewer stock arm DOFs than the 29-DOF G1 model, so racket pose quality is the central feasibility test. If needed, use the expandable-arm H1 variant, not fake wrist kinematics.
- Tracker path: first train H1 specialist trackers for stance, split-step, lateral shuffle/crossover, recovery, and each stroke family; then DAgger-distill into an H1 generalist using OpenTrack's teacher/student flow; finally train AnyAdapter-style dynamics adaptation under measured randomization. G1 ONNX weights are useful as architecture/config references only, not loadable H1 priors.
- First H1 run should be a physics-valid retarget smoke test, not RL: one 10-20 second pro footwork clip retargeted to H1, replayed at the exact target control rate with torque, slip, self-collision, COM margin, racket-pose and tracking-error plots. Then a small H1 MJX tracking specialist on that validated motion, gated by CPU MuJoCo/MJX trajectory parity before scale-out.
- Cost vs G1: adds a new morphology port, IK/retarget validation, and tracker-from-scratch stage before the prior Stage 1. Expect several engineering days to first credible H1 tracking smoke test, then multiple Kaggle GPU runs for a stable specialist/generalist. This is real extra work, but no current hard blocker.
- Fidelity: the released Menagerie H1 has a 0.002 s physics timestep (500 Hz). That is a source default, not yet proof of the real robot command rate. Daniel's requirement means we must verify real low-level command/sensor rates from Unitree docs/hardware and preserve them; policy rate may be a measured integer divisor, never chosen for speed. All acceleration comes from batching identical physics, not a coarser step.
- UTR 16 evaluation: do not claim a UTR from drills. The rating target must eventually be estimated from actual regulation-format results against calibrated human/robot opponents and the UTR algorithm/window. Before match readiness, track proxies only: serve speed/spin/placement and double-fault rate, return rate by incoming pace/spin, rally tolerance, shot-depth/width error, forced/unforced error rates, court recovery time, and performance by surface/opponent band. Call it a `UTR-16 target`, never `UTR 16 achieved`, until match evidence supports it.

The existing G1 tennis mocap download and OpenTrack v1/v2 checkpoints are now local. The interrupted Google Drive folder transfer recovered the two generalist ONNX files/configs and several specialist configs/logs; enough to inspect architecture, not enough to pretend they transfer to H1.

---

## Monday, September 21, 2026, 3:42:01 PM CDT

Two grounded updates while I keep v2 out of publishing until its transitions pass:

1. LATENT's actual released randomization is narrower and more aggressive than we should copy blindly. In `latent_mj/dr/domain_randomize_tracking.py` it samples foot-floor friction U(0.4,1.5); joint friction loss xU(0.75,1.25); armature xU(1.0,1.05); torso inertial position by a sampled 3-vector (comment says ±0.05 m but code is ±0.15 m); every link mass xU(0.75,1.25); torso mass ±1 kg; initial joint pose ±0.05 rad; motor Kp and Kd xU(0.75,1.25); and random force injection at 5-15% of torque limits. The tennis tracking env also adds joint-position noise 0.03 rad, joint-velocity noise 1.5 rad/s, gravity-vector noise 0.05, gyro noise 0.2, reset XY ±0.1 m, reset yaw ±0.27 rad, random horizontal pushes every 5-10 s with 0.1-1.0 m/s velocity increments, and randomizes the start frame. Control is 50 Hz (`ctrl_dt=.02`) over 500 Hz physics (`sim_dt=.002`). It does not randomize a ball because the released environment has no ball.

ATH mapping: preserve that category structure but center plausible bounds on measured H1-2 identification, then widen only under held-out transfer tests. Add actuator gain/strength, Coulomb/viscous friction, armature/reflected inertia, link mass/inertia/COM, initial state, encoder/IMU noise and bias, command/sensor delay, missed packets, court friction/compliance, racket mount pose/compliance, and pushes. For the ball, explicitly randomize regulation-grounded mass, diameter, drag/Magnus coefficients, seam/air-density effects, incoming linear velocity and all three spin components, ball-court and ball-racket restitution/friction/contact time. Spin remains dynamic state with drag, Magnus and spin-dependent bounce, never a kinematic trajectory. LATENT is the baseline pattern, not the physics ceiling.

2. Throw prior: Daniel's idea is useful as a foundation, but it should not replace serve-video priors. A 500 Hz, 22-camera study of elite players found similar preparation, but throws had higher trunk-twist/elbow-extension speeds while serves had higher shoulder internal-rotation/wrist-flexion speeds and earlier timing. Authors conclude throwing can prime transverse trunk mechanics but is less useful for serve-specific arm timing. Source: https://doi.org/10.1080/02640414.2014.962572. Best design is a shared overhead kinetic-chain prior initialized from throwing, then a serve-specific expert conditioned on toss, racket, contact height, pronation/internal rotation, target and spin, using actual serve video/mocap. Serve is now an explicit curriculum branch: toss/control, shadow serve, racket-speed/contact, flat serve, then slice/kick with physical spin.

Line-to-line number: I will not call a kinematic clip a hardware maximum. The compact reference uses 0.14 m steps at 3.75 steps/s, implying 0.525 m/s sustained and about 15.7 s across 8.23 m. A plausible 4-5 steps/s curriculum band implies 0.56-0.70 m/s and 14.7-11.8 s, facing the court throughout. That is a target range, not a verified max. The honest max must come from torque-limited dynamic H1-2 rollouts with no falls/slips and then hardware measurement; actuator velocity limits and real command-loop limits are not established in the supplied MJCF. Peak lateral velocity should therefore remain unclaimed until that test.

---

## Monday, September 21, 2026, 5:44:02 PM CDT

Stringbed dynamics is now a blocking physics gate, not a later feature. The model will cover normal stringbed compliance/damping, tangential stick-slip, inter-string sliding/snapback, finite contact patch, position-dependent response, racket swingweight/frame recoil, and the real contact regimes: sliding, overspin, and rolling. Required outputs are dwell time, normal/tangential impulse, rebound velocity/angle/spin, string snapback and energy residual. A scalar restitution/friction shortcut cannot pass.

Grounded fixture envelope: published validated stringbed FE work used 20-30 m/s inbound speed, 20-60 degree impacts and 0-600 rad/s backspin, comparing rebound velocity/angle/spin: https://shura.shu.ac.uk/2158/. ITF's own spin rig uses 25 m/s, 40/60 degrees, inbound 0-4000 rpm and 1000 fps, while sweeping string tension, gauge, type and pattern: https://www.itftennis.com/media/2283/rackets-and-strings-research.pdf. Those become our initial calibration grid, followed by held-out combinations.

Current gate status is BLOCKED: no racket/string specification selected, no measured deflection/dwell/spin dataset, no deformable stringbed implementation, and contact substep convergence is not accepted. Training remains frozen. Spec and machine-readable blockers attached.

---

## Monday, September 21, 2026, 10:09:09 PM CDT

Daniel was exactly right about LATENT. I found the official project: https://github.com/GalaxyGeneralRobotics/LATENT. Its README explicitly released a small tennis-motion subset and links the archive. I downloaded and inspected it: four 50 Hz tennis clips totaling 11,121 frames. The files are already robot-reference NPZs with root qpos/qvel, 29 named G1 joints, 31 body transforms, feet/palm sites, and the model schema.

This is the cleanest path found so far. G1 and H2 share all 29 named joints. I mapped by exact joint name, not index, which correctly handles the different H2 ankle pitch/roll ordering. All four outputs are finite; quaternion error is under 4.1e-8. The first clip has 37 joint-limit samples to fix, so it is not accepted yet.

Attached a 6-second H2 render. Pixel review: much more tennis-like than the generic OptiTrack calibration and feet point consistently. One sampled phase shows a severe body inversion/flip, so the raw cross-morphology mapping still needs H2 limit/contact/root-orientation cleanup. Do not present it as final, but Daniel may want to see that his LATENT lead was real and is now running.

Important source facts: LATENT says it captured with 50+ mocap cameras over a 19x15 m area, released this subset on March 13, 2026, and trains its tracker around these motions. Repo currently has no explicit license file, so use for internal validation while we clarify redistribution/training rights.

---

## Monday, September 21, 2026, 10:09:37 PM CDT

Deeper search recommendation, with primary links:

Main line: LATENT's released tennis references + NVIDIA SOMA's H2 branch, with Tennis-MoCap as independent gold validation.

1. LATENT official release: https://github.com/GalaxyGeneralRobotics/LATENT. Four real tennis reference clips, 11,121 frames at 50 Hz, robot root/joints/bodies/feet/palms already packaged. Their G1 joint names cover all 29 H2 joints exactly, so this is the shortest transfer path. Caveat: no explicit repo license, internal validation only until clarified.
2. NVIDIA SOMA Retargeter: https://github.com/NVIDIA/soma-retargeter, Apache-2.0. Its open H2 PR is highly relevant: https://github.com/NVIDIA/soma-retargeter/pull/16. It includes explicit H2 scaler, retarget config, FeetStabilizer, deployment exporter, and validation docs. PR is unmerged/dirty, so pin and test instead of blindly trusting it.
3. Tennis-MoCap: https://github.com/jdpulgarin/Tennis-MoCap. Real 100 Hz OptiTrack, six strokes, CC BY-SA 3.0. Keep as independent metric calibration/held-out test.
4. University of Bath serve mocap: https://researchdata.bath.ac.uk/1454/
5. Current markerless tennis mocap benchmark: https://doi.org/10.6084/m9.figshare.32085123.v1
6. UVA pro serve corpus: https://github.com/jasnwag/tennis_serve_dataset. 5,966 serves/109 players, CC BY 4.0, but MotionBERT-derived rather than mocap. Good diversity set.
7. CalTennis multiview benchmark: https://ilonadem.github.io/caltennis-website/

Clean mapping recipe: joint-name mapping only; neutral-frame calibration per body/foot; enforce limits inside solve; contact detection from source foot height+velocity; constrain foot 6D pose and solve free root+CoM; retain hand/racket path and torso/hip orientation; gate with self-collision, support polygon, slip, continuity, and pixels.

I already downloaded and converted LATENT's four clips. First H2 render is finite and tennis-like but has 37 limit samples and one flip in the opening six seconds, so it remains a validation candidate. Next technical move should be SOMA H2 FeetStabilizer and limit-aware solve, not more ad-hoc GMR weight tuning.

---

## Monday, September 21, 2026, 11:11:07 PM CDT

Attached LATENT clips 2-4, each a 10-second review window at 25 fps, correctly labeled. I inspected all three.

- Clip 2: best of the three. Clear lateral/ready/swing-like upper-body motion, no root inversion in this window. It still has foot skating and camera-follow zoom near the end.
- Clip 3: coherent running/lateral recovery, no inversion, but mostly locomotion rather than a clean stroke. Camera-follow gets close at one phase.
- Clip 4: weakest visual. The robot leaves the fixed review frame early and the camera catches up later; low/kneeling phase around 7.5s. I included it because Daniel asked to see the real state rather than hiding failures.

These are limit-clamped review renders only. Raw source overruns: clip 2 = 111 samples, clip 3 = 123, clip 4 = 128. The selected windows have no upside-down root frames, but clipping is not a valid final solver.

Progress pulse: LATENT cleanup has identified and bypassed the inversion windows for review, exact name mapping is done, and violations are measured across all four clips. SOMA H2 integration has not yet produced an executable render; I found and inspected the dedicated H2 PR/config/FeetStabilizer, but it is unmerged/dirty and still needs a pinned build. A genuinely review-passing contact-locked render is not honest to promise in minutes; realistic target is the next focused work block after SOMA setup and validation, not tonight's raw-clamp review.

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

## Tuesday, September 22, 2026, 12:02:14 AM CDT

Full LATENT paper + appendix + released repo read is complete. Digest: `/home/sandbox/g1-tennis/h2_pipeline/motion_priors/LATENT_FULL_PAPER_DIGEST.md`.

Most important mechanism we had not captured precisely: LAB does not merely “regularize a latent.” The distilled model learns a state-conditioned Gaussian prior P(z|s)=(mu,sigma). The high-level policy outputs a normalized residual, and the decoder receives `mu + lambda*sigma*tanh(residual)`. So exploration is bounded per latent dimension by state-dependent uncertainty, a Mahalanobis-scaled barrier. This prevents out-of-distribution latent exploits and rapid primitive switching. The same high-level policy separately outputs direct commands for the three racket-side wrist joints.

The wrist separation begins before distillation: tracker actions and tracking rewards exclude right wrist roll/pitch/yaw, while those joints receive random targets every 0.5-2 s in the released tracker. DAgger distillation continues wrist disturbances. That makes the body/footwork decoder robust to arbitrary racket-wrist corrections rather than encoding bad wrist mocap.

Reproduction-grade released tracker details: 50 Hz control, released sim dt 2 ms, random reference-state init, 32,768 envs, 3B target steps, PPO lr 3e-4, gamma .97, GAE .95, clip .2, unroll 20, batch 1,024 x 32 minibatches, 4 updates, actor/critic MLP 512-512-256-256-128, actor ordinary state/critic privileged. It has detailed tracking/contact/safety rewards, pushes and motor/dynamics randomization. Important discrepancy: paper says final simulation 2,000 Hz (0.5 ms), while released tracker config is 500 Hz (2 ms). We must benchmark rather than silently copy either.

Major reproducibility gap: paper does NOT give latent dimension, encoder/decoder architecture, lambda, KL coefficient, distillation optimizer/schedule, or high-level PPO size/env count. Official repo explicitly says DAgger, latent model, high-level policy and sim2real code are still TODO/unreleased. We need clean-room controlled sweeps, not invented “paper settings.”

Paper-wide findings:
- 5 amateurs, 5 hours primitive fragments; 8 random balls/episode, every 2 s.
- Their robot-robot 25-shot result is evaluation with two policy copies over 50 games, not self-play training. Multi-agent learning is future work.
- Ball observations use uniform noise, frame dropouts, latency and a four-frame velocity average. Exact corruption ranges omitted.
- Full real rates: forehand 90.9%, backhand 77.8%, but only 20 matches and success is relaxed to any opponent-court return; landing error remains 3.15-3.89 m.
- Removing ball DR collapses real forehand/backhand to 16.7/25%; removing ball observation noise gives 50/0%.
- No deformable stringbed, spin transfer or Magnus model is documented, so LATENT does not clear our impact gate.
- Limitations explicitly admit external mocap dependence and random-return task rather than real tennis; active vision and multi-agent training are future work.

ATH changes applied: LATENT-style conditional latent + LAB + direct wrist residual is now the primary architecture once tracker quality passes; four-frame timestamped ball velocity and dropout tests added; latent diagnostics required (Mahalanobis radius, sigma, switching, jerk, OOD rate). Our potential-based reward and calibrated contact constraints stay stricter. True self-play still waits for scripted-launcher competence.

---

## Tuesday, September 22, 2026, 12:19:07 AM CDT

Verified current state and wrote `/home/sandbox/g1-tennis/h2_pipeline/GENERALIST_MODEL_ASSESSMENT.md`.

Short answer: yes as a higher-level brain and maybe a balance/mobility prior; no as the tennis motor controller.

Current facts:
- NVIDIA's latest GA is GR00T N1.7, not N1/N1.5. It is a 3B VLA: Cosmos-Reason2/Qwen3-VL backbone + flow-matching DiT, 40-step action chunks, pretrained with 20k hours of human video and robot data. Official repo: https://github.com/NVIDIA/Isaac-GR00T
- For whole-body humanoids, GR00T uses a separate SONIC controller. The VLA predicts compact latents; SONIC decodes them into full-body motion at 50 Hz. SONIC has real evidence for walking, running, jumping, crawling and G1 loco-manipulation, but not high-speed ball striking or controlled spin. https://github.com/NVlabs/GR00T-WholeBodyControl
- Official real G1 evidence is walk-to-table/object pickup/trigger stepping. The mixed policy used ~18k demos and 60k iterations; fine-tuning recommends 40 GB+ GPUs. That's far beyond an initial Kaggle smoke and is G1, not H2. https://cdn.jsdelivr.net/gh/nvidia/isaac-gr00t@main/examples/GR00TWholeBodyControl/README.md
- Unitree's open UnifoLM-VLA-0/WMA-0 are tabletop/general manipulation systems. WMA's example loop is 15 Hz with 16-step chunks. https://github.com/unitreerobotics/unifolm-vla and https://github.com/unitreerobotics/unifolm-world-model-action
- Newer UnifoLM-WLA-1.0 is a 6B model claimed trained on ~2,500 hours/64 manipulation and whole-body tasks, but its official page still says code/models/datasets “coming soon.” It is not yet a usable open template, and there is no official tennis/running-strike evidence. https://unigen-x.github.io/unifolm-wla.github.io/

Best ATH roles:
1. translate language/drills into Daniel's target vector (landing, speed, height, path, spin);
2. semantic context/opponent intent later;
3. match strategy that selects targets;
4. bounded A/B test of SONIC-derived balance/shuffle/recovery priors once H2 tracker works.

Keep it out of: 0.0625-0.125 ms impact physics, fast ball estimation and direct racket timing. VLA chunks/server latency are too coarse; generic priors can smooth away explosive timing; G1 weights do not map directly to H2. Recommended stack stays: impact physics -> 50 Hz LATENT/LAB body composer + direct wrist residual -> dedicated ball estimator -> optional 1-5 Hz generalist target selector. Do not pause stringbed/LATENT work for GR00T/UnifoLM.

---

## Tuesday, September 22, 2026, 7:30:23 AM CDT

Magnus and drag are now implemented in parallel, not deferred behind stringbed work.

New artifacts in the rebuilt H2 workspace:
- `ball_aerodynamics.py`
- `out/ath_h2_ball_aerodynamics.json`
- `AERODYNAMICS_STATUS.md`

Model:
- drag `F_D = -0.5 rho A C_D |v_rel| v_rel`
- Magnus `F_M = 0.5 rho A C_L(S) |v_rel|^2 unit(omega x v_rel)`; sign fixture confirms topspin pushes down and backspin lifts
- tennis ball: 57 g, 33 mm radius, rho 1.21 kg/m3
- baseline `C_D = 0.507` with published SD 0.024
- provisional spin-ratio curve `C_L(S)`: (0,0), (0.14,0.10), (0.53,0.30), bounded at 0.30

Sources adopted:
1. Cross & Lindsey, “Measurements of drag and lift on tennis balls in flight,” Sports Engineering 17, 89-96 (2014), https://doi.org/10.1007/s12283-013-0144-9 - 128 free-flight shots, 14-30 m/s, -2400 to +2500 rpm; Cd 0.507±0.024; Cl varied near-linearly with spin ratio.
2. Their equations/data reproduction: https://twu.tennis-warehouse.com/learning_center/aerodynamics2.php
3. Alam et al., spin-effects wind-tunnel study: https://www.wseas.us/e-library/transactions/fluid/2008/MGR-09.pdf - independent confirmation plus useful warning that fuzz/support/testing route changes coefficient magnitude.

Fixture at 80 mph, 2708 rpm topspin, 7 degrees: ballistic flight incorrectly lands at 38.07 m; provisional drag+Magnus lands at 20.31 m, apex 1.51 m, 0.694 s first flight. That large change is exactly why ballistic was unacceptable. RK2 convergence at 0.5 ms versus 0.25 ms is within 0.002 mm landing error; topspin/backspin sign tests pass.

Honest boundary: implemented does not mean calibrated. Cl interpolation, ball wear/fuzz uncertainty, spin decay/precession, air conditions, bounce and integration into the canonical MuJoCo env/site are still gates. Training remains blocked on aero + stringbed calibration. But ball flight is no longer waiting on stringbed work.

---

## Tuesday, September 22, 2026, 7:31:30 AM CDT

Exact source attached for publishing. Byte-fidelity answers:

1. `S = RADIUS * ||omega|| / max(||v_rel||, 1e-9)`. `Cl = np.interp(S, [0, .14, .53], [0, .10, .30], left=0, right=.30)`. So linear 0→0.10 for S 0→0.14, linear 0.10→0.30 for S 0.14→0.53, zero below 0, and clamped 0.30 above 0.53. Since S uses a norm, below-zero is unreachable unless someone bypasses the function. Spin direction comes only from `unit(omega × v_rel)`, not the sign of Cl.

2. Spin decay/precession is NOT included. Omega is held constant over first flight. That limitation must stay in site copy/metadata.

3. `rho = 1.21 kg/m^3`; mass .057 kg; radius .033 m; area `pi*r^2`; Cd .507. Current wind default is `[0,0,0]`.

4. Relative air velocity is `v_rel = v - wind`. Force evaluation:
- `q = .5*rho*A*|v_rel|^2`
- drag `-q*Cd*unit(v_rel)`
- Magnus `q*Cl*unit(omega × v_rel)`
- acceleration `gravity + (drag+Magnus)/mass`

RK2 midpoint per 0.5 ms site step:
```
a1 = acceleration(v, omega, wind)
v_half = v + 0.5*dt*a1
p += dt*v_half
a2 = acceleration(v_half, omega, wind)
v += dt*a2
```
The Python currently calls `acceleration(vh, omega)` in the fixture, so wind defaults to zero for both stages. If publishing exposes wind later, it must pass the identical wind vector to both stages.

Important implementation note: the current Python first-flight loop uses `p += dt*v_half` before `v += dt*a2`; preserve that order. Topspin sign for +x flight is omega +y, because `omega × v` points -z. Site must not invert that cross product.

---

## Tuesday, September 22, 2026, 11:59:57 AM CDT

Research complete. Best concrete option: use official Unitree `unitree_rl_mjlab` H2 velocity task/reward/actuator layout as the primary bootstrap design, but train fresh on our verified MJX stack. It is Apache-2.0 and the closest H2/MuJoCo-family baseline. I found no committed H2 pretrained weights in that repo.

What is actually released:

- Official Unitree RL Gym H1-2: BSD-3-Clause, real 143KB `motion.pt` weights. Isaac Gym train, MuJoCo sim2sim/real deploy. 12 leg actions, 47 observations, 50Hz (2.5ms x8), recurrent 32 + LSTM64, 10k iterations. Friction 0.1-1.25, mass -1..3kg, pushes every 5s up to 1.5m/s. Useful reward/behavior reference only. H1-2's 12 outputs and embodiment cannot directly initialize H2's 29/31-output actor safely. https://github.com/unitreerobotics/unitree_rl_gym

- Official Unitree RL MJLab H2: Apache-2.0, H2 code/assets, MuJoCo/MuJoCo Warp and ONNX path, but no H2 checkpoint committed. H2 actor/critic 512-256-128 ELU; PPO horizon 24, 5 epochs, 4 minibatches, adaptive 1e-3 LR, gamma .99, lambda .95, 10,001 iterations, nominal 20s episodes/decimation 4. This is our best primary template. https://github.com/unitreerobotics/unitree_rl_mjlab

- WBC-MJLab H2 extension: Apache-2.0, H2 motion tracking wiring/sample motions, no trained weights. Explicitly not production-ready: inferred gains/armature, toe-standing, foot slip/contact artifacts. Design/reference only. https://github.com/wbc-mjlab/wbc-mjlab-extension-h2

- `junsooki/h2_checkpoints`: real H2 31-DoF PT (~462MB) and ONNX (~59MB) SONIC-derived weights. But license metadata is `other`/NVIDIA-SONIC-derived, Bones-SEED terms apply, and it is Isaac-only with no MuJoCo/hardware check. 100k iterations, 4096 envs, 160h on 8 GPUs, 142,220 motions. Reported 500-motion full-body success 93.8%, local MPJPE 33.3mm, global 246mm, below its stated NVIDIA targets; mid-speed locomotion is a weak band. Potential private teacher/reference only after rights review and Isaac-to-MJX parity, not default init. https://huggingface.co/junsooki/h2_checkpoints

- OpenTrack: Apache-2.0, real G1 pretrained generalist checkpoints, MuJoCo JAX. Excellent architecture/distillation reference, but G1 weights are not an H2 init. https://github.com/GalaxyGeneralRobotics/OpenTrack

- Booster Gym: Apache-style code license with notices, real T1 258KB weights, 4096 envs / 24-step horizon / 2ms x10 = 50Hz / 10k iterations, Isaac Gym train + MuJoCo test. Different robot, so reward/domain-randomization reference only. https://github.com/BoosterRobotics/booster_gym

Recommended 15-minute smoke ablation after H2 rigid/contact MJX parity:
1. fresh H2 actor using Unitree H2 MJLab observations/rewards/actions, zero velocity command, 1024/2048/4096 knee;
2. same actor with behavior-cloned upright/admitted H2 reference initialization;
3. optional H2 SONIC teacher distillation only if rights, adapter, and parity pass.

Judge paired seeds on stand duration, upright/root-height error, support/slip, torque/limits and push recovery. Do not raw-load H1-2/T1/G1 weights. Lowest sim-transfer risk is fresh official H2 task design ported to MJX; direct Isaac checkpoints are high risk. Full sourced report is in `/tmp/deep-research/h2-locomotion-bootstrap/report.md` for this run.

---

## Tuesday, September 22, 2026, 4:55:25 PM CDT

Mocap lane status + extension:

Existing work is real but unfinished. LATENT's 4 real tennis clips (11,121 frames @50Hz) were parsed and mapped to all 29 H2 actuators by exact joint name, including correct ankle-order handling. Last verified report still had 37 joint-limit samples in clip 1 and a severe root/body flip in one phase. I found no later pass artifact proving either was fixed. SOMA H2/FeetStabilizer was pinned, but its unmerged PR, Python/Newton/Warp stack and malformed LFS assets blocked a completed build. So: converted candidates exist; admitted H2 references do not yet.

The direct video→H2 plan also exists but is plan-only, no checkpoint. It predicts root + 29 named qpos + contacts/racket/uncertainty. Synthetic H2 renders alone teach robot-image→qpos, not human-image→qpos, so it needs paired human frames with admitted H2 pseudo-labels plus synthetic multiview/domain randomization. This remains the long-term extraction challenger, not a claim that transfer vanished.

Best current label-factory/baseline:
- GVHMR primary world-grounded extractor: released code + checkpoint, global gravity-aligned SMPL motion/camera; license is research/education/nonprofit only, commercial permission required. https://github.com/zju3dv/GVHMR
- WHAM permissive fallback: released weights, MIT code, world-grounded SMPL + temporal refinement; SMPL files retain separate terms. https://github.com/yohanshin/WHAM/
- GMR retarget scaffold: MIT, MuJoCo/global-body-task formulation and a documented GVHMR path. It supports Unitree H1-2, not verified exact H2. We must add our exact H2 MJCF/config and validate it; no silent H1-2 substitution. https://github.com/YanjieZe/GMR
- xGMR is Apache-2.0/newer general retargeting, also no verified exact H2 config in the inspected tree. https://github.com/Open-X-Humanoid/xGMR

Exact path: video→GVHMR/WHAM SMPL-X world transforms→exact H2 MJCF IK/body-orientation tasks (GMR or mink) with calibrated proportions→foot-contact inference + locking/FeetStabilizer→limits/velocity/accel/self-collision/support/racket-path checks→H2 dynamics projection→matched-view pixel review. References only, never executable control until dynamics pass.

Footage: best is fixed/slow practice-court, full body/feet, high shutter 60-120fps, known court geometry; synchronized multi-view is much better. Stable YouTube drills are usable for gross phase. Broadcast is weakest due pan/zoom/cuts/distance/occlusion. At normal 30fps, torso/root and broad leg/arm phase can be useful; feet at contact, wrist pronation, racket face and impact-frame timing are often unrecoverable, so the system must abstain or use high-speed/multiview/racket tracking. CalTennis is the most relevant tennis-specific evaluation benchmark: https://ilonadem.github.io/caltennis-website/

Curriculum: admitted clips feed motion tracking/style in locomotion; practice clips feed split-step/recovery; stroke/serve clips feed phase and racket-path references only. Ball/string outcomes stay physics-conditioned. Full report: `/tmp/deep-research/h2-video-mocap/report.md`.

---

## Tuesday, September 22, 2026, 4:56:58 PM CDT

LATENT archive is restored (all four source clips, 11,121 frames). The first exact-name replay against the current exact H2 MJCF exposed a larger issue than the old report: raw H2 limit violations are 37/111/123/128 samples across clips 1-4, not just 37 in clip 1. Quaternion sign continuity is repaired representation-safely and post-projection limits are zero, but I am not admitting the outputs: naive projection still has 24-50 rad/s joint peaks, 837-1760 rad/s² acceleration peaks, and extensive collision/contact flags. I marked every generated clip `admitted:false` in an immutable hash-bearing validation JSON rather than laundering them into references. Next I am isolating the offending joints/discontinuities and replacing clipping with time-coupled constrained projection plus correct collision/support filtering and pixel review.

---

## Tuesday, September 22, 2026, 4:59:06 PM CDT

Visual inspection confirms the LATENT replay is not admissible. Attached is clip 1 rendered from the exact H2 MJCF. The sampled pixels show the robot floating above the floor through much of the motion, plus visibly implausible lower-leg/foot poses. The earlier high “non-foot floor contact” count was partly a validator bug: H2 uses multiple foot collision geoms and linkage-brace geoms, so body-name filtering misclassified valid foot assembly contact. But the visual ground-offset/support failure is real and blocking. This needs real GMR/mink whole-body IK with ground/contact constraints, not exact-name joint copying plus clipping. I am treating the current NPZs strictly as diagnostic intermediates, not admitted references.

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

## Tuesday, September 22, 2026, 5:28:10 PM CDT

This is a useful, rights-clear serve corpus, but it is not robot-ready motion and cannot enter the H2 admission gate directly.

What it is
- University of Virginia's Tennis Serve Analysis Dataset: broadcast-video pose estimates for 5,966 serves from the 2024 US Open, 109 players and 113 matches.
- Pipeline: RTMDet server detection -> RTMPose 17-keypoint COCO pose -> MotionBERT 3D lift -> DTW-based analysis/alignment. It is estimated human keypoints, not MoCap and not an articulated SMPL/robot trajectory.

What the hosted data contains
- `metadata.parquet`: 5,966 rows x 20 columns. Includes player/match info, gender, player height, first/second serve, measured serve speed, serve placement/outcome, frames, duration and quality label.
- Google Drive currently enumerates 5,500 keypoint `.npy` files and 2,696 angular-velocity `.npy` files, plus metadata. This is an important discrepancy from the README's advertised directory layout: the live folder does not currently expose `joint_angles/` or `angular_accelerations/`, and 467 metadata serves lack a keypoint file. We should ingest against the live manifest, not assume all 5,966 are present.
- Sample keypoint file verified as float32 `(88,17,3)`; frames vary 60-120. Metadata's frames/duration ratio shows an effective 60 Hz, despite the older documentation page giving `video_fps=30.0` as an example. Use per-record duration to determine timing, not that stale example.
- Sample angular-velocity file verified as float32 `(74,8)`. The 8 scalar biomechanical angles correspond to left/right elbows, shoulders, hips and knees.
- COCO joint order: nose, L/R eyes, L/R ears, L/R shoulders, L/R elbows, L/R wrists, L/R hips, L/R knees, L/R ankles.
- Coordinates are normalized/relative MotionBERT output, not metric global coordinates: documentation says x horizontal, y vertical, z relative depth; no pelvis/root transform, body orientation, joint quaternion, hand/racket pose, toe/heel, spine, or ground/contact labels.
- License: CC BY 4.0, including commercial reuse/adaptation with attribution and change notice. The license notes that publicity/privacy/moral rights may still apply. Cite the CVPRW 2026 dataset paper.

Fit for exact-H2 retarget/admission
- It cannot feed the exact-H2 validator as-is. The validator needs a physically scaled articulated trajectory with root pose, H2 joint positions, orientations, velocities and contacts. These sparse normalized keypoints leave severe ambiguities: root scale/translation, axial twist, shoulder/wrist pronation, ankle/foot orientation and occluded limbs.
- It can feed a new learned reconstruction front end: quality filter -> restore metric scale using player height/bone lengths -> map COCO to a body model -> temporal 3D pose fitting (SMPL-X or equivalent, with priors/contact constraints) -> infer global root and orientations -> exact-H2 GMR/mink IK -> foot-contact locking -> full H2 admission checks and pixel review. It is a harder route than LATENT's already-retargeted 36-qpos clips, so it should not interrupt that lane.
- DTW-aligned or derived angle/velocity series must not be treated as physical time trajectories. Use original keypoints plus record timing for retargeting; use DTW only for phase/style clustering.

Fit for motion priors
- Strong later-stage source for serve diversity: thousands of real pro examples, player identity, first/second serve, speed, outcome and quality enable style- and outcome-conditioned serve priors, phase clustering, prototypes, augmentation, and held-out evaluation.
- Weak for exact racket contact or spin conditioning because it contains no ball/racket trajectory, racket orientation, toss/contact timestamps, or spin labels. Wrist keypoints are specifically among its noisier extremities. It can teach whole-body serve style, not stringbed/contact truth.
- Rights-wise it is materially easier to use than scraped broadcast footage because the released processed dataset is CC BY 4.0, though attribution/provenance must travel with generated references.

Verdict to relay
Add it to the rights-aware motion-corpus backlog as a high-volume serve-style dataset, with a manifest/quality audit and a dedicated 17-keypoint-to-body-model reconstruction adapter. It does not change today's order: finish LATENT exact-H2 admission first, then use this dataset to enlarge the serve prior. Do not send it straight to H2 IK, do not assume metric coordinates or 30 Hz, and do not use the 8 angle channels as robot joint targets.

Sources:
- Official repo/docs/license: https://github.com/jasnwag/tennis_serve_dataset
- Live dataset folder: https://drive.google.com/drive/folders/1Wr7UjMvgLwgqCQ09wSaw94ozvRYRO8fB
