# Swing-solve MuJoCo scene (offline solve rig)

Offline MuJoCo scene used by the swing solver in `solve/`. This is NOT the
site model - the site's H2 MJCFs live in `assets/unitree_h2/`.

**`scene.xml` is SUPERSEDED** by `scene_v14.xml`: it carries pre-correction
physics (old forceranges 54/25/120, zero armature/damping/frictionloss,
solver budget 8/8). `scene_v14.xml` (committed as shipped by the training
pipeline, 2026-09-22) has the official actuator table
(`physics/h2_limits.json`), armature 0.01 / damping 0.05 / frictionloss 0.2
on all joints, solver budget 100/50, and the `racket_contact` site.
Do not measure anything against `scene.xml`.

**WARNING - rolling friction:** `scene_v14.xml` still carries rolling
friction 0.02 on the ball and racket geoms (the spin-killer: a replay
there shows ~50 rpm whatever the trajectory does). Any ball-contact work
MUST patch rolling friction to 0.001 on those geoms at load time until the
next scene revision bakes it in. The 0.001 value is calibrated in the
impact rig (`solve/impact2.py`, the 105 rad/s contact result).

## Meshes

This scene uses `meshdir="assets"`. Its meshes are byte-identical (git blob
SHA verified, 34/34) to `assets/unitree_h2/assets/` in this repo - to run
the scene, copy or symlink that directory to `models/swing-solve/assets/`.
The meshes are not duplicated here on purpose.

## Files

- `scene.xml` - SUPERSEDED full solve scene (robot + court + racket + ball contact rig).
- `scene_nokey.xml`, `scene_robot.xml`, `scene_robot_fj.xml` - scene variants from debugging.
- `robot_only.xml`, `robot_nf2.xml`, `robot_nofix.xml` - robot-only MJCF extractions.
- `mini.xml` - minimal repro scene.
