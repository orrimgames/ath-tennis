# Parity kernels (Kaggle)

Kaggle notebook sources and raw reports for the CPU-vs-MJX H2 parity gate.
v14 is the CURRENT reference: official H2 effort limits and joint ranges
(unitree_ros H2_loop.xml/H2.urdf), armature 0.01 / damping 0.05 /
frictionloss 0.2, float64 both backends, solver budget 100/50.

Gate thresholds (both v12 and v14): max_qpos 1e-4, max_qvel 1e-3 over
50 steps x batch 4 (0.1 s). v14 achieved max qpos err 1.13e-13, qvel
1.43e-11 - those are achieved errors, not the gate.

- `h2_parity_v14.py` + `h2_parity_report_v14.json` - current reference, PASS.
- `h2_parity_v12.py` + `h2_parity_report_v12.json` - PASS but predates the
  limits correction (solver-budget root-cause run). Kept for provenance.
- v13 (float32 fail) deliberately omitted.
- Older runs (v4-v9) live in `docs/status/kernel-runs/`.
