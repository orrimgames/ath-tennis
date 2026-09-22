# Tennis ball model specification

This is the canonical training-facing ball-state and command contract. It applies when the ball, racket and stringbed apparatus enters the curriculum. It does not relax the H2 rigid/contact parity gate or introduce tennis apparatus into standing, balance, walking or running stages.

## State and commanded outcome

The simulator carries full 3D ball position `p`, linear velocity `v`, and angular velocity `omega` in world coordinates. Tennis-contact policies are conditioned on commanded landing location, outgoing speed, trajectory/clearance, and a signed 3D spin target.

The spin command has three independent dimensions in the ball's local flight frame:

1. **Topspin** - forward rotation that produces a downward Magnus component for forward flight.
2. **Backspin / slice** - the opposite signed vertical-plane rotation, producing an upward Magnus component relative to the corresponding topspin case.
3. **Sidespin** - rotation about the vertical spin axis that produces lateral Magnus acceleration, curving the ball left or right according to spin sign and flight direction.

Mixed commands are valid. The model must preserve and evaluate the full spin vector rather than collapse spin to a categorical label or one scalar rpm value.

## Aerodynamic force

Use air-relative velocity `v_rel = v - v_air` and a 3D Magnus force:

`F_M = 0.5 * rho * A * C_L(S) * |v_rel|^2 * unit(omega x v_rel)`

where `S` is the calibrated spin ratio. For sidespin, `omega x v_rel` must produce the signed lateral force directly. No scripted lateral curve is allowed. Drag, Magnus lift, spin decay/precession, wind, bounce, and stringbed spin transfer remain independently calibrated and parity-tested.

## Required tests before tennis training

- pure topspin and pure backspin sign/magnitude sweeps;
- pure left/right sidespin sign/magnitude sweeps with lateral displacement/landing error;
- mixed topspin-sidespin and backspin-sidespin axes;
- CPU/MJX trajectory and event parity across speed, spin, wear and air-condition grids;
- stringbed and bounce checks that conserve the signed 3D spin vector through contact.

Training and evaluation report commanded versus achieved spin as a vector in rad/s and rpm, plus downrange, vertical and lateral trajectory errors. Sidespin is a first-class third spin dimension, not a style annotation.

## Timing observability

The ball state and event stream must expose bounce time, post-bounce ascending/apex/descending phase, predicted feasible contact windows and uncertainty. This lets the policy choose on-the-rise contact as a physical timing decision rather than receive a fixed strike frame.
