(async function () {
  async function load(u) {
    const r = await fetch(u);
    const j = await r.json();
    return j && j.frames && j.frames.length ? j.frames : null;
  }
  let shuffle = null, forehand = null;
  try { shuffle = await load("./assets/ath_h12_shuffle_v2.json"); } catch (e) {}
  try { forehand = await load("./assets/ath_h12_balanced_forehand_noclip.json"); } catch (e) {}
  window.__ATH_CLIPS = {};
  if (shuffle) window.__ATH_CLIPS.shuffle = shuffle;
  if (forehand) window.__ATH_CLIPS.forehand = forehand;
  window.__ATH_ACTIVE = shuffle ? "shuffle" : "forehand";
  if (!window.__ATH_CLIPS[window.__ATH_ACTIVE]) return;
  window.__ATH_TE = function (data, base, t, side, origTe, idx) {
    var F = window.__ATH_CLIPS[window.__ATH_ACTIVE];
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
  document.addEventListener("DOMContentLoaded", function () {
    var c = document.querySelector(".controls");
    if (!c || Object.keys(window.__ATH_CLIPS).length < 2) return;
    var b = document.createElement("button");
    function label() { b.textContent = "Motion: " + (window.__ATH_ACTIVE === "shuffle" ? "Shuffle" : "Forehand"); }
    b.addEventListener("click", function () {
      window.__ATH_ACTIVE = window.__ATH_ACTIVE === "shuffle" ? "forehand" : "shuffle";
      label();
    });
    label();
    c.appendChild(b);
  });
})();
