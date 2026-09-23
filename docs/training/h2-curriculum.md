# H2 locomotion and striking curriculum

Order updated by Daniel on 2026-09-22: a static volley is the first tennis shot, immediately after standing plus arm tracking and the racket/stringbed/ball physics gate. Movement competence then precedes moving volleys and groundstrokes.

Reprioritized by Daniel on 2026-09-22 7:45 PM: the main line is Gate 0 parity -> standing/balance -> goal-conditioned static volley, all trained without mocap. Human references are optional only as an early balance bootstrap. The exact-H2 IK retarget lane is a background utility, off the critical path (see motion_priors/IK_ENGINEERING_TRACK.md).

## Gate 0 - physics/backend parity
CPU MuJoCo vs MJX H2 rigid-body/contact, actuator, limits, stepping, controlled-fall and support-contact fixtures. No training until the stage-relevant fixtures pass.

## Stage 1 - bilateral standing and recovery
Zero commanded velocity. Upright/root-height, support polygon, foot slip, limit/torque use, fall time, impulse recovery. Promote on paired deterministic evaluation and checkpoint reload/export parity.

## Stage 1A - standing arm and racket tracking
While maintaining a static bilateral base, track commanded racket states (from the impact-inverse solver, not mocap) across reachable face angles, contact heights and impact points. Enforce standing safety metrics, racket-body clearance, limits, velocities, accelerations and torque margins. No ball is present until this stage and the independent racket/stringbed/ball physics gates pass.

## Stage 1B - static volley from a feed
First trained tennis shot. Feed a controlled incoming ball to a stationary robot at net-like contact height. Use compact forehand and backhand volley actions without locomotion. The goal-conditioned shot-execution objective governs placement, pace, trajectory, signed 3D spin, direction and contact-time choice within the volley envelope. This stage exercises calibrated ball/racket/stringbed contact physics at the earliest safe point.

Start with fixed feed/contact windows, then randomize feed position, velocity, height, spin and commanded outcome. Promote on legal stringbed contact, goal error, balance/recovery, collision and actuator metrics. Do not introduce scripted rebound or fixed contact outcomes.

## Stage 2 - dynamic balance
- single-leg stance, both legs, randomized dwell and mild pushes;
- hopping on each foot with controlled flight and repeated contacts;
- jump-and-stick landings across height/direction/impulse ranges.
Track support-foot slip, flight/landing event accuracy, peak impact/torque, orientation, root-height settling, falls and self-collision.

## Stage 3 - walking
Port Unitree official MJLab H2 velocity-task observation/reward/action layout into verified MJX. Command-conditioned forward/lateral/yaw progression, starts/stops and direction changes. Promote only across held-out commands and perturbations.

## Stage 4 - running
Increase velocity and cadence only after walk competence. Track command error, flight phases, energy/torque/limits, slip, landing impact, fall and recovery. Randomize mass/friction/pushes inside measured bounds.

## Stage 5 - tennis footwork and moving volleys
Split step, lateral recovery, crossover and approach patterns conditioned on commanded court targets while preserving locomotion safety metrics. Then combine qualified movement with the static-volley skill and evaluate moving contact plus recovery.

## Stage 6 - groundstrokes and full repertoire
Groundstrokes enter only after static volley, movement stages and moving volleys qualify. Condition strikes on commanded landing, pace/power, height/trajectory and full signed 3D spin: topspin, backspin/slice and sidespin. Sidespin must arise from lateral Magnus force, never a scripted curve. Contact time is selected by the policy, including commanded on-the-rise, apex, falling-ball or free timing.

Expand from forehand/backhand groundstrokes to serve, half-volley, overhead, slice, lob, drop shot and later extensions. Preserve improvisation plus style, ability-level and drill conditioning. Winning is introduced only in the strategy layer above the goal-conditioned executor.

Each stage uses paired seeds, frequent checkpoints, deterministic reload evaluation and CPU/MJX outcome checks. Failure causes regression to the preceding stage mixture rather than bypassing it. The goal-conditioned reward and evaluation contract lives in `GOAL_CONDITIONED_TENNIS_OBJECTIVE.md`.
