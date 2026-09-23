# Exact-H2 whole-body IK engineering track

Status (Daniel, 2026-09-22 7:45 PM): demoted from the critical path to a background bootstrap utility. The main line (parity -> standing/balance -> goal-conditioned static volley) uses no mocap. The live control loop has no IK; the RL policy maps racket-state targets directly to joint targets. Keep these fixtures and the solver track for optional balance bootstrap references and as an offline baseline/fallback. No urgency.

Inverse kinematics is a first-class ATH subsystem, not a file-format conversion utility. Its output is admissible only after independent kinematic, temporal, contact, dynamics and visual gates.

## Modules

1. **Source normalization** - coordinate-frame declaration, metric scale, joint/body map, missing-body policy, root trajectory, quaternion sign continuity and timebase.
2. **Target builder** - Cartesian body targets, segment orientations, root targets, confidence/weights, floor estimate and contact-phase labels.
3. **Exact-H2 model adapter** - named H2 joints/bodies, DOF order, limits, collision geometry, Jacobians, FK and actuator/dynamics metadata.
4. **Per-frame constrained solve** - Mink/QP or damped Jacobian solve with warm start, trust region, joint-limit barriers and weighted position/orientation tasks.
5. **Temporal solve** - velocity/acceleration regularization, quaternion/geodesic continuity and branch-consistent angle representation.
6. **Contact locking** - stance-foot position/orientation constraints, slip monitoring, support transitions and root correction without floating.
7. **Admission** - limits, velocity, acceleration, contacts, orientation, collisions, dynamics and matched-view pixel review.

## Smallest reproducible fixtures

- static home-pose FK/IK round trip;
- one joint driven near each lower/upper limit;
- clip-1 frame 1125 right-shoulder Euler branch jump;
- clips 2-4 wrist branch jumps;
- one stance interval with one locked foot;
- double-support to single-support transition;
- intentionally unreachable wrist target;
- noisy/missing head target (LATENT has no head links while H2 does);
- source/target ankle-roll versus ankle-pitch order mismatch;
- root-height/floor mismatch that previously produced floating playback.

## Solver ablation matrix

Hold the source targets and initialization fixed while comparing:

- Mink QP versus damped least-squares Jacobian;
- position-only versus position+orientation tasks;
- frame-independent versus warm-started sequential solve;
- no temporal term versus velocity and velocity+acceleration terms;
- hard joint constraints versus barrier/soft-limit margins;
- no contact constraint versus position lock versus full foot pose lock;
- fixed root versus optimized root;
- task-weight and damping/trust-region grids.

Every ablation reports convergence, iterations/time, weighted residual by task, limit margin, maximum velocity/acceleration, foot slip, root error, collision count and failure class. A low Cartesian residual cannot compensate for branch jumps, limit saturation, floating feet or visual mismatch.

## Promotion sequence

1. pass synthetic fixtures and FK/IK round trips;
2. pass each isolated LATENT failure window;
3. pass complete clips with temporal and contact constraints;
4. run exact-H2 admission and dynamic replay;
5. visually inspect matched-view pixels and feet/contact phases;
6. retain every failure window as a permanent regression fixture.

No approximate G1/H1 result, clipped angle stream or smoothed-but-invalid trajectory is promoted as an H2 reference.
