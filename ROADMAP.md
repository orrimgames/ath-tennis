# ATH roadmap

Ordered by what unblocks the most downstream work. The test-and-iteration
method (docs/engineering/test-iteration-method.md) governs every item.

1. Parity gate. Finish the contact isolation matrix (cone, solver,
   iterations, contact pairs, materials, single-step pre-impact compares)
   until CPU/MJX parity passes at the declared thresholds. Every failure
   becomes a regression fixture.
2. Stringbed calibration. Fit dwell to the measured 2.6-4.1 ms band, then
   lateral/snapback surfaces, then the spatial (u,v) grid and contact-class
   taxonomy. Independent of the parity gate.
3. Curriculum Stage 1 / 1A / 1B: bilateral standing, standing arm+racket
   tracking, then the static volley - the first trained shot - under the
   goal-conditioned objective (docs/training/).
4. Locomotion stages 2-4 (dynamic balance, walking, running), then tennis
   footwork, moving volleys and groundstrokes.
5. IK track: fixture matrix, solver ablations, admission gates; retain all
   failure windows as permanent regression fixtures.
6. Site: scripted-motion demo mode (keyframed poses on the live MJCF -
   pipeline proven), deploy hygiene, mobile experience.
