# ATH H2 site swap

This package replaces the site's H1-2 load path with the official Unitree H2 geometry used by ATH. The site scene adds the tennis court, net, a clearly visible orange physical ball launcher at the far baseline, and a visual racket. Official H2 inertial and collision geoms are retained.

Camera: initial view is ATP-high behind the baseline, per Daniel's latest correction at 2026-09-22 00:29 CDT. Court-level, side, and overhead remain switchable.

Clips: do not load the old H1-2 shuffle or forehand qpos arrays. H1-2 uses a different 27-actuator index/semantic layout. Ship the H2 procedural fallback until native H2 clips pass joint-limit, contact, collision, dynamics, and pixel review.

Physics scope: this is a publishing visualization bundle, not a claim that the tennis contact model is validated. The racket is visual/non-colliding while calibrated stringbed contact is unfinished.
