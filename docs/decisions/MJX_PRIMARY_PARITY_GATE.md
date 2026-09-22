# MJX primary backend parity gate

Decision: MJX GPU is the primary ATH training backend. CPU MuJoCo remains the source-reference and fallback. Environment count is chosen by the 1024/2048/4096 scaling knee, not fixed in advance.

Status: design gate. Training remains blocked until calibrated physics exists and this parity suite passes.

## Principle

Passing on CPU MuJoCo does not transfer automatically to MJX. Every action-driving physics component must be supported or reproduced, tested against identical initial state and parameters, and kept within a predeclared tolerance. Unsupported custom physics is a blocker, not a reason to simplify silently.

## Frozen comparison protocol

- same MuJoCo/MJX version, 64-bit state where supported for calibration, same MJCF/assets and timestep/substep schedule;
- same initial qpos/qvel, controls, contacts, material parameters, random seed and air/contact model hashes;
- compare CPU and MJX from serialized initial states, never separately randomized episodes;
- compare both open-loop controls and closed-loop actor rollouts;
- at least 100 cases per fixture family, including boundary and held-out calibration cases;
- record complete trajectories and event timestamps, not only endpoint averages.

## Required fixture families

### H2 rigid-body/contact

- free fall, pendulum, energy/momentum fixtures;
- planted stance, foot friction cone and slip onset;
- self-collision and racket-body clearance;
- joint limits, actuator position/velocity/torque saturation;
- latency FIFO and action-rate stepping;
- controlled fall and floor impact.

### Ball flight

- no-spin drag at speed grid;
- topspin, backspin and sidespin sign/magnitude grid;
- full 3D mixed-spin axes;
- wind/relative-air velocity when enabled;
- first-flight landing, apex, time, terminal velocity and full trajectory;
- calibrated spin decay/precession once added.

### Bounce

- normal and oblique court impacts;
- restitution, tangential friction and post-bounce spin exchange;
- landing/bounce event time and second-flight state.

### Racket/stringbed

- center, oblique brushing, off-center and edge cases;
- dwell, patch growth, normal/tangential impulse, slip/snapback;
- outgoing velocity/spin and racket recoil;
- string state and energy residual;
- timestep/substep convergence independently on both backends.

The resolved Python/network stringbed may require a JAX-native force/state implementation. Until that implementation reproduces the calibrated CPU fixture, MJX tennis contact is not valid.

## Tolerances

Initial parity thresholds, tightened after calibration noise is known:

- rigid-body state: max joint position 1e-4 rad, velocity 1e-3 rad/s over deterministic 1 s fixtures;
- event time: 0.25 ms or one accepted contact substep, whichever is larger;
- ball first-flight: 10 mm landing, 5 mm apex, 0.5 ms flight time, 0.1 m/s terminal speed;
- bounce: 0.15 m/s linear velocity, 3 rad/s spin, 0.5 ms event time;
- stringbed: 0.25 ms dwell, 0.5 m/s outgoing linear speed, 8 rad/s spin, 1 mm maximum deflection, 5% impulse/energy diagnostics;
- policy outcome: identical legal-contact/net/in-bounds event classification and no safety-gate disagreement.

For chaotic long rollouts, use paired distributions after short-horizon state parity: confidence intervals for goal error, fall, slip, torque and contacts must overlap predeclared equivalence bands.

## Implementation layout

```
parity/
  fixtures/*.json              # serialized initial states/parameters
  cpu/<fixture>/<case>.npz     # reference trajectories/events
  mjx/<fixture>/<case>.npz
  reports/<physics_hash>.json
```

One harness emits a canonical record from each backend. The report pins library versions, accelerator, XLA flags, precision, hashes, tolerances and every failed case.

## Unlock

MJX training unlocks only when:

1. CPU calibration gates pass;
2. every required fixture is implemented on MJX;
3. all deterministic parity thresholds pass;
4. closed-loop event/safety classifications match;
5. 1024/2048/4096 benchmark identifies the throughput knee without semantic drift;
6. checkpoint/resume and deterministic evaluation pass on that count.

If any required contact primitive or force callback cannot be reproduced in MJX, use CPU MuJoCo for that phase or redesign transparently. Never train on a reduced physics model and call it equivalent.
