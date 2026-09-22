# ATH tennis-ball aerodynamics status

Implemented now in `ball_aerodynamics.py` with fixtures in `out/ath_h2_ball_aerodynamics.json`.

- Relative-air drag: `F_D = -0.5 rho A C_D |v_rel| v_rel`.
- Magnus: `F_M = 0.5 rho A C_L(S) |v_rel|^2 unit(omega × v_rel)`, so +y topspin on +x flight pushes downward.
- Baseline: `C_D = 0.507` with published SD `0.024`; provisional `C_L(S)` interpolates `(0,0), (0.14,0.10), (0.53,0.30)`.
- Nominal 80 mph / 2708 rpm / 7 degree fixture: drag+Magnus lands at 20.31 m instead of ballistic 38.07 m, apex 1.51 m instead of 1.97 m. This is a sanity fixture, not the final launch solution.
- Topspin/backspin sign fixture passes. RK2 at 0.5 ms is compared to 0.25 ms and passes the current centimeter/flight-time convergence gate.

Remaining before physics PASS: fit/interpolate coefficients from calibration trajectories across speed/spin/ball wear, spin decay/precession, wind/air conditions, uncertainty randomization, bounce calibration, and integration into the canonical MuJoCo environment/site. Training remains blocked.
