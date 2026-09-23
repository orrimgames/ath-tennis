# ATH H2 CPU/MJX parity kernel - run log

Kernel: https://www.kaggle.com/code/danielharkin/ath-h2-mjx-parity (private, Kaggle T4). Kernel ID 135430420.
Model: official Unitree H2, 29 actuators, nq 36, nv 35, visual meshes stripped (inertias, joints, actuators, collision geoms, floor, keyframe unchanged; 34 physics geoms after visual removal). MuJoCo/MJX 3.3.7, JAX 0.5.3. Timestep 2 ms, implicitfast, Newton solver, 8 iterations / 8 line-search iterations.
Gate thresholds: max |qpos err| <= 1e-4, max |qvel err| <= 1e-3, CPU MuJoCo (float64) as oracle.
Stage-1 training never ran: every version failed or never produced a report. No version counts as training progress.

| Ver | Change | Shape | Result | Key numbers |
|---|---|---|---|---|
| v1 | first GPU parity | 500 steps / 1.0 s, Python-unrolled into one JIT | TIMED OUT (30 min), no report | Compile blow-up; logs stop after device check (2 CUDA devices). |
| v2 | JIT one step, call 500x from host | 1 case x 500 steps | FAIL | compile 78.184 s; cached 499 steps 280.921 s (0.563 s/step); max qpos 2.8632e-4; max qvel 1.37031e-2; final qpos 6.7810e-5, qvel 2.8966e-3; root-height err 5.043e-6 m; raw ncon compare invalid (MJX reports capacity 533 vs CPU max 28) |
| v3 | 25-step scan chunks | 1 case x 500 steps | FAIL | cold compile 106.134 s; cached 264.075 s; total ~370.2 s (vs v2 ~359.1 s); max qpos 2.3322e-4; max qvel 1.60458e-2; final qpos 2.1034e-4, qvel 3.8138e-3; root-height 1.605e-6 m |
| v4 | full device-resident lax.scan + vmap batch | batched, long horizon | CANCELED at 15-min cap while compiling | No parity summary. Logs reached 2xT4 check and contact.dist trace. |
| v5 | bounded probe, same semantics | 2 cases x 25 steps | FAIL | home: qpos 5.96e-7, qvel 1.19e-4 (pass); perturbed: first cross step 12, max qpos 0.023811, qvel 2.46538; active contacts match through initial impact, then split; cold 128.24 s, cached 36.45 s (50 env-steps) |
| v6 | condim 6 -> 3 | 2 x 25 | FAIL | perturbed first cross step 12; qpos 0.0237912, qvel 2.46160. Rules out torsional/rolling friction dims. |
| v7 | v6 + robot self-collision disabled (floor only) | 2 x 25 | FAIL | step 12; qpos 0.0237908, qvel 2.46161. Floor-contact evolution implicated, not self-collision. Throughput 5.18 -> 343 env-steps/s (self-collision broadphase is a separate perf cost). |
| v8 | v6 + cone elliptic -> pyramidal | 2 x 25 | FAIL, worse | BOTH cases now fail, first cross step 13; max qpos 0.020645 (home case 0.009845, previously 6e-7), max qvel 3.05707; MJX home case loses all contacts at step 14 (bounce) while CPU does not. cold 60.15 s, cached 0.125 s, 401 env-steps/s. Pyramidal is not the fix and breaks the home case. |
| v9 | v6 physics + MJX float64 (x64) + teacher-forced one-step diagnostic | 2 x 25 | DONE - superseded by v12 | Float64 did not close the gap by itself; pointed at solver budget. |
| v10-v11 | solver-budget and solver-param iterations | - | superseded | Intermediate scans between v9 and v12; numbers not in this bundle. |
| v12 | oracle solver budget (solver iterations / ls_iterations raised to match the CPU oracle) | contact suite | **PASS** | max qpos err 1.39e-10, max qvel err 1.85e-8 vs gate 1e-4 / 1e-3. Contact divergence resolved: solver iteration budget, not condim, self-collision, cone shape, or float precision. Stage-1 training unblocked. | Tests whether float32 MJX vs float64 CPU at stiff impact causes the split; teacher-forced step starts MJX from the exact CPU pre-step state incl. qacc_warmstart at every step and records CPU/MJX solver_niter, separating one-step solver error from chaotic amplification. Fixes the x64 int32->int64 contact-index carry bug by casting the scan carry. |

Observations so far:
- RESOLVED (v12): the first-impact divergence was the MJX solver iteration budget, not physics parameters. With the oracle budget the full contact suite passes (qpos 1.39e-10, qvel 1.85e-8).
- Divergence began exactly at first floor impact (~22-26 ms, steps 11-13). Free flight matched to ~1e-7.
- Not caused by condim 6, not by self-collision. Pyramidal cone changes the behavior but worsens it.
- All MJX runs before v9 were float32 (JAX_ENABLE_X64=false) against a float64 CPU oracle.
- Remaining matrix after v9: solver iterations/ls_iterations, solver type, impratio, solref/solimp, then per-contact-pair dist/force comparison at the first divergent step.

Raw JSON reports for v5-v8 are in raw_reports/. Kaggle's output API returns only the latest version's files, so v1-v4 numbers come from the dated reports in PARITY_KERNEL_REPORTS_VERBATIM.md (v1 and v4 produced no report file). Kernel sources for v4 and v6-v9 are in kernel_sources/ (model XML embedded as base64).
