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
- style conditioning: player/style embedding or interpretable style controls;
- ability-level conditioning: requested precision, pace, movement, risk and consistency envelope;
- drill conditioning: feeds, target patterns, footwork constraints, repetition structure and scoring rules.

A command may leave fields free. The policy must improvise over unspecified dimensions while meeting every specified constraint and respecting reachability/safety.

## Timing as a decision

Contact time is part of the action/plan, not fixed preprocessing. The policy observes or predicts the incoming trajectory, maintains a feasible contact window, and chooses when to strike. "On the rise" means selecting a post-bounce contact before the ball apex, verified from the ball's vertical state and event timing. Timing rewards are based on the requested phase/window, never a hard-coded single contact frame.

## Architecture boundary

1. **Shot execution layer** - goal-conditioned contact selection, footwork, whole-body/racket control and physical outcome matching.
2. **Repertoire/style layer** - multiple valid motion modes and style/ability/drill conditioning without collapsing to one canonical swing.
3. **Strategy layer** - chooses shot commands from match context to win points. It is trained/evaluated after the executor can reliably realize commands across its envelope.

The strategy layer cannot compensate for an executor that ignores commanded spin, pace, placement, timing or style.

## Dense reward contract

Base executor reward is uncertainty-normalized command error plus safety and physical-quality terms:

- landing/target distribution error;
- outgoing velocity/pace and direction error;
- trajectory/apex/net-clearance error;
- full 3D spin-vector error;
- requested contact-phase/window error;
- legal stringbed contact and calibrated impact-envelope margin;
- reachability, balance, support/slip, collision, joint/velocity/acceleration/torque and actuator margin;
- recovery-to-ready-state quality;
- style/reference likelihood only when commanded, with enough residual freedom to improvise and accomplish the shot.

Do not make point outcome/winning the dominant base reward. Sparse task success is reported, while dense component errors expose why a shot failed.

## Curriculum and evaluation

Progress from one controlled dimension at a time to combinatorial commands: placement -> pace -> trajectory -> one spin axis -> mixed spin -> timing choice -> stroke families -> style/ability/drill conditions -> strategy. Maintain uniform and adversarial coverage of the command space rather than training only common shots.

Evaluation uses held-out combinations and reports feasible-command coverage, command error distributions, success by stroke/timing/style/ability/drill, improvisation under perturbed feeds, and calibration of declared infeasibility. Promotion requires the latest checkpoint to improve or preserve the entire declared envelope, not one aggregate score.
