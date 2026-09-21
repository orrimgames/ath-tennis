(async function () {
  try {
    const res = await fetch("./assets/ath_h12_balanced_forehand_noclip.json");
    const clip = await res.json();
    if (!clip || !clip.frames || !clip.frames.length) return;
    window.__ATH_FRAMES = clip.frames;
    window.__ATH_TE = function (data, base, t, side, origTe, idx) {
      var F = window.__ATH_FRAMES;
      if (idx !== 0 || !F || !F.length) { origTe(data, base, t, side); return; }
      var q = data.qpos;
      q.set(base);
      q[0] = side * 4.6;
      q[1] = side * 0.4;
      q[2] = 1.06;
      var n = F.length, pos = (t * 60) % n;
      var i0 = Math.floor(pos), i1 = (i0 + 1) % n, a = pos - i0;
      var f0 = F[i0], f1 = F[i1];
      for (var j = 0; j < 27; j++) q[7 + j] = f0[j] + (f1[j] - f0[j]) * a;
    };
  } catch (e) {}
})();
