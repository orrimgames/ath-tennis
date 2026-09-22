# ATH test and iteration method

Standing engineering method for every ATH subsystem:

1. Decompose the system into modules with explicit inputs, outputs, invariants, parameters and version/hash identity.
2. Give each module deterministic unit fixtures, boundary fixtures, failure fixtures and a held-out validation set.
3. Prefer parameter matrices and ablations over one-off runs. Change one factor at a time when isolating a failure; use factorial or sampled grids only after single-factor causality is understood.
4. Record complete inputs, versions, seeds, trajectories/events, thresholds and artifacts. A run without a reproducible report is not evidence.
5. Iterate in tight bounded loops: smallest fixture that reproduces the issue, repair, regression-test the repair, then scale duration, diversity and environment count.
6. Promote only after independent module tests, integration tests, cross-backend parity, checkpoint/reload checks and visual review where spatial behavior matters.
7. Keep failed cases as regression fixtures. Never hide a failure by weakening physics, tolerances or evaluation scope.
8. Training, website promotion and downstream modules consume only versioned artifacts that pass their declared gates.

Current contact-parity matrix proceeds from contact dimension to cone/solver/iteration/contact-pair/material/isolation tests, preserving a common serialized pre-impact state and the first divergent event as the comparison anchor.
