# ATH research notes - summary

Full dated reports with every source link: RESEARCH_REPORTS_VERBATIM.md. This file is the index and verdicts.

## Cross / ITF ball and impact data
Status: partial. No dedicated bounce (ball-court) calibration dataset has been ingested yet. What exists:
- Flight aero: Cross, R. & Lindsey, C., "Measurements of drag and lift on tennis balls in flight," Sports Engineering 17, 89-96 (2014), plus Alam et al. 2008 (WSEAS Trans. Fluid Mech. 3(3)). Used for the drag and Magnus lift fixtures in ath_h2_ball_aerodynamics.json. Lift coefficient interpolated on spin ratio S = r*|omega|/|v_rel| (knots 0, 0.14, 0.53). Status in AERODYNAMICS_STATUS.md: first-flight fixtures implemented; coefficients across speed/spin/wear/air, spin decay/precession and bounce calibration still remain before physics PASS.
- Racket/string impact (ITF): ITF Technical Centre spin rig uses 25 m/s inbound, 40/60 degrees, 0-4000 rpm inbound spin, 1000 fps, sweeping tension, gauge, type and pattern: https://www.itftennis.com/media/2283/rackets-and-strings-research.pdf . Validated stringbed FE envelope (20-30 m/s, 20-60 deg, 0-600 rad/s backspin): https://shura.shu.ac.uk/2158/ . Dwell data: Kawazoe et al. 2012 (~3.8 ms nylon release at 30 m/s), Washida/Elliott/Allen 2014 matrix. These seed STRINGBED_CALIBRATION_TRACK.md.
- Bounce: the parity gate (MJX_PRIMARY_PARITY_GATE.md) requires normal/oblique impacts, restitution, tangential friction and post-bounce spin exchange, but measured Cross/ITF bounce targets (COR vs speed, COF/court pace, spin reversal vs incidence angle) are not yet collected. Open item.
- Contact rate finding (local fixture, 2026-09-21): a 2 ms step is not converged for stiff 5 ms impacts (6.10 mm penetration and 0.0718 restitution error vs a 0.125 ms reference; 1 ms: 0.762 mm / 0.0123; 0.25 ms: 0.241 mm / 0.00240). Ball/racket/court contact needs substepping to at least 1 kHz, likely 4 kHz.

## LATENT (Tsinghua / Galbot)
Sources: https://arxiv.org/html/2603.12686v1 , https://github.com/GalaxyGeneralRobotics/LATENT , https://zzk273.github.io/LATENT/
- Pipeline: staged motion tracker on fragment primitives -> DAgger-distilled correctable latent model -> PPO high-level planner. Not a generic walking policy, not end-to-end from scratch.
- Latent is a state-conditioned Gaussian prior P(z|s); the high-level policy outputs a residual, decoded as mu + lambda*sigma*tanh(residual), a bounded barrier against out-of-distribution latents. Right-wrist roll/pitch/yaw are excluded from tracking and driven directly by the high-level policy (wrist-correction ablation: forehand 96.52% -> 82.36%, backhand 82.10% -> 68.94%).
- PPO on MJX, 50 Hz control, released sim dt 2 ms, 32,768 envs, 3B target steps. Vanilla PPO and kinematic MotionVAE fail to converge; AMP viable but much weaker.
- Released robot is G1; env is mocap tracking only, no ball body in the released training env.
- Verdict: preferred execution/control representation for ATH (correctable primitive latent + direct wrist residual), rebuilt on exact H2. LATENT clips on disk are not admitted: naive retarget fails joint limits, branch jumps, velocity/acceleration and floating-foot checks.

## AdaPT (Noitom Robotics et al.)
Sources: https://github.com/noitom-robotics/AdaPT , https://arxiv.org/html/2608.20087 , https://humanoidtennis.github.io/AdaPT
- Broadcast video -> GVHMR -> GMR retarget -> tracker correction -> MVAE generator -> ball-conditioned planner with execution-speed control; separate serve pipeline with keyframe reward.
- Apache-2.0. Ships Mjlab/MuJoCo-Warp + PyTorch/RSL-RL, G1-only configs, two G1 serve clips, one G1 checkpoint.
- Verdict: useful ideas and data schema. Not an H2 IK solution and not a replacement for our MJX stage 1. No weight transplant.

## UVA Tennis Serve Analysis Dataset
Sources: https://github.com/jasnwag/tennis_serve_dataset , https://drive.google.com/drive/folders/1Wr7UjMvgLwgqCQ09wSaw94ozvRYRO8fB
- 2024 US Open broadcast pose estimates: 5,966 serves, 109 players, 113 matches. RTMDet -> RTMPose COCO-17 -> MotionBERT 3D lift. CC BY 4.0.
- Live Drive exposes 5,500 keypoint files and 2,696 angular-velocity files (README layout differs; 467 metadata serves lack keypoints). Sample keypoints float32 (88,17,3); effective 60 Hz from metadata.
- Verdict: rights-clear serve-style corpus for later, after learned body reconstruction. Relative 17-point keypoints are not direct H2 IK input and cannot enter the admission gate as-is.

## Other literature checked
SMASH (https://arxiv.org/html/2604.01158v1), HITTER (https://arxiv.org/html/2508.21043v2), PACE (https://arxiv.org/html/2509.21690v4), GR00T N1.7 / SONIC, Unitree unitree_rl_gym (H1-2) and unitree_rl_mjlab (H2). Details and numbers in the verbatim file.
