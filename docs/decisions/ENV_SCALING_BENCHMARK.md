# Kaggle vector-environment scaling benchmark

Status: benchmark contract only. Do not run until physics gates permit the first real training smoke. One Kaggle notebook at a time.

## Question

Find the throughput/latency/memory knee rather than fixing 256 environments by assumption. CPU MuJoCo candidates: 256, 512, 1024. MJX GPU candidates: 1024, 2048, 4096, subject to compile and memory viability on the active Kaggle accelerator.

## Fair benchmark protocol

Run all candidates in one serialized 15-minute notebook smoke. Detect accelerator type and record driver/runtime versions. Use the identical physics hash, H2 model, environment state/action schema, policy architecture, rollout horizon, PPO minibatch epochs, seeds and logging settings.

For each count:

1. warm up and compile outside the timed interval; report compile time separately;
2. take three timed windows after steady state, minimum 30 s each;
3. run at least two PPO updates, not simulator-only loops;
4. save checkpoint and release all arrays before the next count;
5. stop a candidate on OOM, NaN, solver divergence, timeout, or device throttling and record the exact failure.

Do not change rollout horizon merely to fit memory without reporting the change. If a reduced horizon is tested, treat it as a separate configuration.

## Required metrics

- aggregate environment steps/s and median/p10 per-window steps/s;
- simulation-only steps/s and end-to-end PPO steps/s;
- policy inference, environment step, GAE, minibatch update and checkpoint wall time;
- complete rollout + update time and policy updates/minute;
- GPU allocated/reserved/peak memory and device utilization;
- host RAM, CPU utilization and data-transfer time;
- per-environment memory and rollout-buffer memory;
- falls/contact events/reward and deterministic-eval agreement to catch semantic drift;
- compile time, first-update time and checkpoint size.

## Selection rule

A count is eligible only if it completes two updates without NaN/divergence, saves/reloads a checkpoint, and matches fixed-seed evaluation semantics.

Pick the smallest count at the throughput knee. Define the knee as the last doubling that yields at least 25% more end-to-end steps/s while:

- per-update wall time grows no more than 60%;
- peak GPU memory stays below 85% of available memory;
- checkpoint interval remains within the 2-minute contract;
- updates/minute and deterministic evaluation remain healthy.

Prefer fewer environments when more environments improve simulator throughput but reduce optimizer updates/minute enough to hurt learning. Environment count is not the goal; time-to-threshold is.

## Recommendation format

Report a table with backend, env count, accelerator, steps/s, update seconds, updates/min, peak GPU memory, host RAM, compile time, checkpoint/reload pass and status. Plot throughput and memory versus count. State the measured knee and the next run's chosen count.

Before measurements, 256 is only a safe initial floor. More is technically possible. MJX may make 1024-4096 sensible on a GPU, but no count is authorized for a training run until this benchmark and physics gates pass.
