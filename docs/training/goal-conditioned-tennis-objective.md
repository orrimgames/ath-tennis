# Goal-conditioned tennis objective

## North star

ATH's tennis foundation is a universal goal-conditioned shot executor. Given the current robot/ball/court state and an explicit shot request, it chooses a feasible contact time and body/racket motion that realizes the requested outcome. Winning is a strategy layer above this foundation, not the base reward.

## Command space

The command is a structured vector, not a stroke-class label:

- target landing distribution or court point;
- outgoing pace/power;
- net clearance, apex, depth and trajectory shape;
- signed 3D spin: topspin, backspin/slice and sidespin, including mixed axes;
- outgoing direction;
- contact-time policy, including "hit on the rise," apex, falling-ball, or unconstrained choice;
- shot family and handed side when prescribed: forehand, backhand, serve, volley, half-volley, overhead, slice, lob, drop shot and later extensions;
- style conditioning: a named distribution over the deterministic command fields above (clearance, spin axis/amount incl. sidespin curve, pace, placement, contact timing). Example: "high and heavy" = high clearance + heavy topspin; a "banana" shot = strong signed sidespin. Style is not human motion data;
- ability-level conditioning: requested precision, pace, movement, risk and consistency envelope;
- drill conditioning: feeds, target patterns, footwork constraints, repetition structure and scoring rules.

A command may leave fields free. The policy must improvise over unspecified dimensions while meeting every specified constraint and respecting reachability/safety.

## Timing as a decision

Contact time is part of the action/plan, not fixed preprocessing. The policy observes or predicts the incoming trajectory, maintains a feasible contact window, and chooses when to strike. "On the rise" means selecting a post-bounce contact before the ball apex, verified from the ball's vertical state and event timing. Timing rewards are based on the requested phase/window, never a hard-coded single contact frame.

## Architecture boundary

1. **Shot execution layer** - goal-conditioned contact selection, footwork, whole-body/racket control and physical outcome matching.
2. **Repertoire/style layer** - style/ability/drill conditioning expressed as distributions over the command space, plus multiple valid body paths to the same racket state (the underdetermined degrees of freedom) without collapsing to one canonical swing.
3. **Strategy layer** - chooses shot commands from match context to win points. It is trained/evaluated after the executor can reliably realize commands across its envelope.

The strategy layer cannot compensate for an executor that ignores commanded spin, pace, placement, timing or style.

## Shot solver chain (Daniel, 2026-09-22 7:44 PM)

Daniel: "if we know where we want to hit the ball, how hard, how much spin, and we know the current trajectory and speed of incoming ball, inverse kinematic solver can find needed racket angle, speed, and velocity at time of contact, and robot simply needs to match that in any way possible."

The shot pipeline is a three-stage chain:

1. **Ballistics inverse** - shot command (landing target, pace, clearance/trajectory, signed 3D spin, direction) -> required exit-ball state (position, velocity, spin vector) at contact. Uses the BALL_MODEL_SPEC aero model (drag, 3D Magnus incl. sidespin, spin decay) and bounce model.
2. **Impact inverse** - required exit-ball state + predicted incoming ball state at the chosen contact time -> required racket state at contact (face position, face normal/orientation, linear velocity, angular velocity, impact point on the stringbed). Solved through the calibrated stringbed model (STRINGBED_CALIBRATION_TRACK.md), never a scalar restitution shortcut.
3. **Whole-body tracker** - the RL policy reaches that racket state at the chosen contact time. The contact-time choice follows "Timing as a decision" above.

The body path to a racket state is underdetermined. Those free degrees of freedom are where improvisation and body-path variety live.

Live inference path (Daniel, 7:50 PM): the RL policy outputs joint targets directly from (racket-state target, contact time, robot state, ball state). There is no IK solve in the live loop. Whole-body QP IK is kept only as an offline baseline and fallback comparison.

## Robustness is trained, not assumed (Daniel, 7:44 PM)

Daniel: "The rl handles the stochastic nature of environment, latency, small perturbations in measurements, wind, frictions, etc."

The inverse solvers produce the nominal racket-state target. The RL tracker must hit it under domain randomization: wind, air density, court friction/restitution variation, ball wear, actuation latency and jitter, observation noise and delay on robot and ball state, actuator strength/friction, and perturbed feeds. Randomization ranges come from measured uncertainty. Evaluation reports target error under held-out perturbation levels.

## Data requirement (Daniel, 7:45-7:46 PM)

The core executor needs no human motion data. The dense goal-conditioned reward (racket-state error at contact plus ball-outcome error, plus safety/physical terms) is self-sufficient. Human references are allowed only as an optional bootstrap for early balance training. Style comes from command-space distributions, not player mocap (Daniel: "Not really nadal data. Nadal plays high and heavy. Nadal can do banana shot. These are all pretty deterministic.").

## Dense reward contract

Base executor reward is uncertainty-normalized command error plus safety and physical-quality terms. Racket-state error at contact (position, face orientation, linear and angular velocity vs the impact-inverse target) is a dense term alongside ball-outcome error:

- landing/target distribution error;
- outgoing velocity/pace and direction error;
- trajectory/apex/net-clearance error;
- full 3D spin-vector error;
- requested contact-phase/window error;
- legal stringbed contact and calibrated impact-envelope margin;
- reachability, balance, support/slip, collision, joint/velocity/acceleration/torque and actuator margin;
- recovery-to-ready-state quality;
- no human-motion or reference-likelihood term in the core executor reward. Optional human references may only bootstrap early balance training and must anneal out.

Do not make point outcome/winning the dominant base reward. Sparse task success is reported, while dense component errors expose why a shot failed.

## Curriculum and evaluation

Progress from one controlled dimension at a time to combinatorial commands: placement -> pace -> trajectory -> one spin axis -> mixed spin -> timing choice -> stroke families -> style/ability/drill conditions -> strategy. Maintain uniform and adversarial coverage of the command space rather than training only common shots.

Evaluation uses held-out combinations and reports feasible-command coverage, command error distributions, success by stroke/timing/style/ability/drill, improvisation under perturbed feeds, and calibration of declared infeasibility. Promotion requires the latest checkpoint to improve or preserve the entire declared envelope, not one aggregate score.
