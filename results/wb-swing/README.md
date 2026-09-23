# wb-swing - WITHDRAWN (2026-09-22)

The whole-body forehand package in this directory is **withdrawn**: the
solved path is physically impossible. The racket was collision-exempt
versus the robot body (contype/conaffinity 4 vs body 2/2), so
racket-vs-body collision was never checked; full-envelope validation shows
the hoop penetrating the torso (-12.1 cm) and head (-7.6 cm).

Do not cite any number here. Files are kept for provenance. A corrected
package (racket as a real collider) will replace this one.
