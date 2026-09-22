# Stringbed calibration parallel track

Runs independently of H2/MJX parity. Training contact remains blocked until this passes.

## Measured targets

1. Kawazoe et al. (2012), ultrahigh-speed 10,000 fps video: new nylon top-spin impact releases at about 3.8 ms, and calculated examples report 2.6, 3.4, 4.1 and 3.9 ms contact times at 30 m/s. Player tests with new gut show contact-to-release about 3.8-4.0 ms; used/notched gut about 3.4 ms; new gut produced about 50 rps. This is the primary dwell band, not an assumed single 5 ms point. Source: https://www.jstage.jst.go.jp/article/jsdd/6/2/6_2_213/_pdf
2. Washida, Elliott and Allen (2014): controlled head-clamped impact at 30 +/-1.5 m/s, 24°/38°, inbound spin 0-500 rad/s, polyester at 245 N, 16x19 vs 16x12 patterns, high-speed ball and string tracking. Fewer crosses raised lateral string deflection and rebound spin (for inbound spin >100 rad/s, +25 rad/s at 24°, +16 rad/s at 38°). Use for snapback/spin/deflection surface validation. Source: https://shura.shu.ac.uk/8206/1/washida%2Celliott%2Callen_-_measurement_of_main_strings.pdf
3. James and Haake (2008): launched new/worn tennis balls and other balls at varied speeds/spins; high-speed cameras measured trajectory-start/end spin. Reported a strong linear relation between spin decay and initial spin x speed, with ball-specific constant driven chiefly by moment of inertia and also roughness/boundary regime. Use the tennis-ball rows/fit when full numeric table is obtained; do not invent its coefficient from the abstract. Source: https://shura.shu.ac.uk/2132/ and DOI https://doi.org/10.1007/978-2-287-09413-2_20
4. Goodwill, Chin and Haake (2004): wind-tunnel drag/lift measurements for new/used spinning tennis balls over 20-60 m/s, Re 85k-250k. Use as a compatibility check for spin-dependent aero while adding decay. Source: https://shura.shu.ac.uk/634/

## Calibration sequence

- Build fixture matrix matching the literature: 30 m/s, 24°/38°, spin 0-500 rad/s, 245 N, 16x19 and 16x12; add new/used nylon and gut condition bands where parameters are known.
- Fit normal stiffness/damping and ball shell response first to 2.6-4.1 ms dwell while preserving rebound normal speed. Current ~10 ms is a fail.
- Fit inter-string friction, ball-string friction and lateral return/snapback to measured lateral deflection, rebound horizontal/vertical speeds and spin changes. Hold out one angle and pattern.
- Require timestep convergence and energy/impulse closure, then report uncertainty rather than overfit sparse literature points.
- Add aerodynamic torque model `domega/dt = -K |v_rel| omega` only after extracting the James-Haake tennis coefficients or obtaining equivalent measured time-series. Validate new and worn balls separately and preserve spin axis in full 3D.
- Export calibration identity/hash used by CPU and JAX string networks. Tennis checkpoint promotion must match it.

## Spatial contact and shank classification

Representation is discrete physics plus continuous reporting:
- String mechanics remain the resolved main/cross string node network. Ball contact uses a finite patch across nearby string segments/nodes, not a single plane impulse.
- Every contact reports continuous racket-frame coordinates `(u,v)` from the patch pressure centroid, patch covariance/radius, contacted main/cross indices, peak/mean deflection, normal/tangential impulse and dwell.
- Local response emerges from node/segment stiffness, boundary distance, pattern and local inter-string state. Calibration surfaces for dwell, COR, outgoing spin and racket recoil are binned by `(u,v)` but do not replace the network.
- Net force and moment are applied to the dynamic racket at the actual patch points, so off-axis impact generates twist about the handle/long axis and changes face pose/direction during dwell.

Classify mutually exclusive contact paths from collision provenance:
1. `STRINGBED`: patch touches string segments and no rim geom during the contact episode.
2. `FRAME_CONTACT`: first/material contact is racket frame/rim/edge; no stringbed impact map is allowed. Resolve the actual rim/frame collision geometry, local material compliance, COR/friction and racket recoil. The outgoing state must emerge from those mechanics, never a scripted weak or erratic outcome.
3. `MIXED_EDGE`: string and rim both active during one episode; preserve and report each impulse separately. The resulting outcome emerges from the combined mechanics. For analytics it can be labeled an edge/frame contact, but no canned penalty or rebound replaces physics.
4. `MISS`: neither.

No nearest-plane heuristic can relabel a frame contact as a string hit. Promotion/evaluation records location/class and reports center, radial/sector, edge, shank and mixed-edge rates separately.

Spatial calibration sources to extract:
- Kawazoe/related high-speed work varies impact region and reports rebound/spin/contact behavior; use exact numeric tables if recoverable, not plot estimates without uncertainty.
- ITF Technical Centre racket power/COR and sweet-spot test protocols can anchor center vs off-center response and twist/recoil.
- Washida et al. targets geometric center and therefore anchors only the center slice; it cannot justify off-center extrapolation.

Required fixture grid: center plus symmetric `(u,v)` grid to near-rim points, rim-only and grazing mixed-edge cases, across speed/angle/spin. Check symmetry, continuity between cells, boundary effects, impulse/moment closure, and held-out locations.
