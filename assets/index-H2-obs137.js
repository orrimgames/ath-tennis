(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const a of document.querySelectorAll('link[rel="modulepreload"]')) n(a);
  new MutationObserver((a) => {
    for (const o of a)
      if (o.type === "childList")
        for (const u of o.addedNodes)
          u.tagName === "LINK" && u.rel === "modulepreload" && n(u);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(a) {
    const o = {};
    return (
      a.integrity && (o.integrity = a.integrity),
      a.referrerPolicy && (o.referrerPolicy = a.referrerPolicy),
      a.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : a.crossOrigin === "anonymous"
          ? (o.credentials = "omit")
          : (o.credentials = "same-origin"),
      o
    );
  }
  function n(a) {
    if (a.ep) return;
    a.ep = !0;
    const o = t(a);
    fetch(a.href, o);
  }
})();
/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */ const yo = "180",
  Zi = { ROTATE: 0, DOLLY: 1, PAN: 2 },
  Yi = { ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3 },
  pm = 0,
  Tl = 1,
  mm = 2,
  Rc = 1,
  Cc = 2,
  Xn = 3,
  oi = 0,
  cn = 1,
  $n = 2,
  si = 0,
  Ji = 1,
  wl = 2,
  bl = 3,
  Al = 4,
  _m = 5,
  Ti = 100,
  gm = 101,
  vm = 102,
  xm = 103,
  Em = 104,
  Sm = 200,
  ym = 201,
  Mm = 202,
  Tm = 203,
  La = 204,
  Fa = 205,
  wm = 206,
  bm = 207,
  Am = 208,
  Rm = 209,
  Cm = 210,
  Pm = 211,
  Dm = 212,
  Lm = 213,
  Fm = 214,
  Ia = 0,
  Ua = 1,
  Na = 2,
  er = 3,
  Oa = 4,
  ka = 5,
  Ba = 6,
  za = 7,
  Pc = 0,
  Im = 1,
  Um = 2,
  ai = 0,
  Nm = 1,
  Om = 2,
  km = 3,
  Bm = 4,
  zm = 5,
  Hm = 6,
  Vm = 7,
  Dc = 300,
  tr = 301,
  nr = 302,
  Ha = 303,
  Va = 304,
  Cs = 306,
  Ga = 1e3,
  bi = 1001,
  Wa = 1002,
  wn = 1003,
  Gm = 1004,
  Jr = 1005,
  Dn = 1006,
  Js = 1007,
  Ai = 1008,
  In = 1009,
  Lc = 1010,
  Fc = 1011,
  Er = 1012,
  Mo = 1013,
  Ri = 1014,
  jn = 1015,
  Ar = 1016,
  To = 1017,
  wo = 1018,
  Sr = 1020,
  Ic = 35902,
  Uc = 35899,
  Nc = 1021,
  Oc = 1022,
  Tn = 1023,
  yr = 1026,
  Mr = 1027,
  kc = 1028,
  bo = 1029,
  Bc = 1030,
  Ao = 1031,
  Ro = 1033,
  Ss = 33776,
  ys = 33777,
  Ms = 33778,
  Ts = 33779,
  Xa = 35840,
  $a = 35841,
  ja = 35842,
  qa = 35843,
  Ya = 36196,
  Ka = 37492,
  Za = 37496,
  Ja = 37808,
  Qa = 37809,
  eo = 37810,
  to = 37811,
  no = 37812,
  io = 37813,
  ro = 37814,
  so = 37815,
  ao = 37816,
  oo = 37817,
  lo = 37818,
  co = 37819,
  uo = 37820,
  ho = 37821,
  fo = 36492,
  po = 36494,
  mo = 36495,
  _o = 36283,
  go = 36284,
  vo = 36285,
  xo = 36286,
  Wm = 3200,
  Xm = 3201,
  zc = 0,
  $m = 1,
  ri = "",
  on = "srgb",
  ir = "srgb-linear",
  As = "linear",
  wt = "srgb",
  Ii = 7680,
  Rl = 519,
  jm = 512,
  qm = 513,
  Ym = 514,
  Hc = 515,
  Km = 516,
  Zm = 517,
  Jm = 518,
  Qm = 519,
  Cl = 35044,
  Pl = "300 es",
  Ln = 2e3,
  Rs = 2001;
class Li {
  addEventListener(e, t) {
    this._listeners === void 0 && (this._listeners = {});
    const n = this._listeners;
    (n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t));
  }
  hasEventListener(e, t) {
    const n = this._listeners;
    return n === void 0 ? !1 : n[e] !== void 0 && n[e].indexOf(t) !== -1;
  }
  removeEventListener(e, t) {
    const n = this._listeners;
    if (n === void 0) return;
    const a = n[e];
    if (a !== void 0) {
      const o = a.indexOf(t);
      o !== -1 && a.splice(o, 1);
    }
  }
  dispatchEvent(e) {
    const t = this._listeners;
    if (t === void 0) return;
    const n = t[e.type];
    if (n !== void 0) {
      e.target = this;
      const a = n.slice(0);
      for (let o = 0, u = a.length; o < u; o++) a[o].call(this, e);
      e.target = null;
    }
  }
}
const Zt = [
    "00",
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "0a",
    "0b",
    "0c",
    "0d",
    "0e",
    "0f",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "1a",
    "1b",
    "1c",
    "1d",
    "1e",
    "1f",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "2a",
    "2b",
    "2c",
    "2d",
    "2e",
    "2f",
    "30",
    "31",
    "32",
    "33",
    "34",
    "35",
    "36",
    "37",
    "38",
    "39",
    "3a",
    "3b",
    "3c",
    "3d",
    "3e",
    "3f",
    "40",
    "41",
    "42",
    "43",
    "44",
    "45",
    "46",
    "47",
    "48",
    "49",
    "4a",
    "4b",
    "4c",
    "4d",
    "4e",
    "4f",
    "50",
    "51",
    "52",
    "53",
    "54",
    "55",
    "56",
    "57",
    "58",
    "59",
    "5a",
    "5b",
    "5c",
    "5d",
    "5e",
    "5f",
    "60",
    "61",
    "62",
    "63",
    "64",
    "65",
    "66",
    "67",
    "68",
    "69",
    "6a",
    "6b",
    "6c",
    "6d",
    "6e",
    "6f",
    "70",
    "71",
    "72",
    "73",
    "74",
    "75",
    "76",
    "77",
    "78",
    "79",
    "7a",
    "7b",
    "7c",
    "7d",
    "7e",
    "7f",
    "80",
    "81",
    "82",
    "83",
    "84",
    "85",
    "86",
    "87",
    "88",
    "89",
    "8a",
    "8b",
    "8c",
    "8d",
    "8e",
    "8f",
    "90",
    "91",
    "92",
    "93",
    "94",
    "95",
    "96",
    "97",
    "98",
    "99",
    "9a",
    "9b",
    "9c",
    "9d",
    "9e",
    "9f",
    "a0",
    "a1",
    "a2",
    "a3",
    "a4",
    "a5",
    "a6",
    "a7",
    "a8",
    "a9",
    "aa",
    "ab",
    "ac",
    "ad",
    "ae",
    "af",
    "b0",
    "b1",
    "b2",
    "b3",
    "b4",
    "b5",
    "b6",
    "b7",
    "b8",
    "b9",
    "ba",
    "bb",
    "bc",
    "bd",
    "be",
    "bf",
    "c0",
    "c1",
    "c2",
    "c3",
    "c4",
    "c5",
    "c6",
    "c7",
    "c8",
    "c9",
    "ca",
    "cb",
    "cc",
    "cd",
    "ce",
    "cf",
    "d0",
    "d1",
    "d2",
    "d3",
    "d4",
    "d5",
    "d6",
    "d7",
    "d8",
    "d9",
    "da",
    "db",
    "dc",
    "dd",
    "de",
    "df",
    "e0",
    "e1",
    "e2",
    "e3",
    "e4",
    "e5",
    "e6",
    "e7",
    "e8",
    "e9",
    "ea",
    "eb",
    "ec",
    "ed",
    "ee",
    "ef",
    "f0",
    "f1",
    "f2",
    "f3",
    "f4",
    "f5",
    "f6",
    "f7",
    "f8",
    "f9",
    "fa",
    "fb",
    "fc",
    "fd",
    "fe",
    "ff",
  ],
  ws = Math.PI / 180,
  Eo = 180 / Math.PI;
function Rr() {
  const r = (Math.random() * 4294967295) | 0,
    e = (Math.random() * 4294967295) | 0,
    t = (Math.random() * 4294967295) | 0,
    n = (Math.random() * 4294967295) | 0;
  return (
    Zt[r & 255] +
    Zt[(r >> 8) & 255] +
    Zt[(r >> 16) & 255] +
    Zt[(r >> 24) & 255] +
    "-" +
    Zt[e & 255] +
    Zt[(e >> 8) & 255] +
    "-" +
    Zt[((e >> 16) & 15) | 64] +
    Zt[(e >> 24) & 255] +
    "-" +
    Zt[(t & 63) | 128] +
    Zt[(t >> 8) & 255] +
    "-" +
    Zt[(t >> 16) & 255] +
    Zt[(t >> 24) & 255] +
    Zt[n & 255] +
    Zt[(n >> 8) & 255] +
    Zt[(n >> 16) & 255] +
    Zt[(n >> 24) & 255]
  ).toLowerCase();
}
function ut(r, e, t) {
  return Math.max(e, Math.min(t, r));
}
function e_(r, e) {
  return ((r % e) + e) % e;
}
function Qs(r, e, t) {
  return (1 - t) * r + t * e;
}
function dr(r, e) {
  switch (e.constructor) {
    case Float32Array:
      return r;
    case Uint32Array:
      return r / 4294967295;
    case Uint16Array:
      return r / 65535;
    case Uint8Array:
      return r / 255;
    case Int32Array:
      return Math.max(r / 2147483647, -1);
    case Int16Array:
      return Math.max(r / 32767, -1);
    case Int8Array:
      return Math.max(r / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function sn(r, e) {
  switch (e.constructor) {
    case Float32Array:
      return r;
    case Uint32Array:
      return Math.round(r * 4294967295);
    case Uint16Array:
      return Math.round(r * 65535);
    case Uint8Array:
      return Math.round(r * 255);
    case Int32Array:
      return Math.round(r * 2147483647);
    case Int16Array:
      return Math.round(r * 32767);
    case Int8Array:
      return Math.round(r * 127);
    default:
      throw new Error("Invalid component type.");
  }
}
const t_ = { DEG2RAD: ws };
class it {
  constructor(e = 0, t = 0) {
    ((it.prototype.isVector2 = !0), (this.x = e), (this.y = t));
  }
  get width() {
    return this.x;
  }
  set width(e) {
    this.x = e;
  }
  get height() {
    return this.y;
  }
  set height(e) {
    this.y = e;
  }
  set(e, t) {
    return ((this.x = e), (this.y = t), this);
  }
  setScalar(e) {
    return ((this.x = e), (this.y = e), this);
  }
  setX(e) {
    return ((this.x = e), this);
  }
  setY(e) {
    return ((this.y = e), this);
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(e) {
    return ((this.x = e.x), (this.y = e.y), this);
  }
  add(e) {
    return ((this.x += e.x), (this.y += e.y), this);
  }
  addScalar(e) {
    return ((this.x += e), (this.y += e), this);
  }
  addVectors(e, t) {
    return ((this.x = e.x + t.x), (this.y = e.y + t.y), this);
  }
  addScaledVector(e, t) {
    return ((this.x += e.x * t), (this.y += e.y * t), this);
  }
  sub(e) {
    return ((this.x -= e.x), (this.y -= e.y), this);
  }
  subScalar(e) {
    return ((this.x -= e), (this.y -= e), this);
  }
  subVectors(e, t) {
    return ((this.x = e.x - t.x), (this.y = e.y - t.y), this);
  }
  multiply(e) {
    return ((this.x *= e.x), (this.y *= e.y), this);
  }
  multiplyScalar(e) {
    return ((this.x *= e), (this.y *= e), this);
  }
  divide(e) {
    return ((this.x /= e.x), (this.y /= e.y), this);
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  applyMatrix3(e) {
    const t = this.x,
      n = this.y,
      a = e.elements;
    return (
      (this.x = a[0] * t + a[3] * n + a[6]),
      (this.y = a[1] * t + a[4] * n + a[7]),
      this
    );
  }
  min(e) {
    return (
      (this.x = Math.min(this.x, e.x)),
      (this.y = Math.min(this.y, e.y)),
      this
    );
  }
  max(e) {
    return (
      (this.x = Math.max(this.x, e.x)),
      (this.y = Math.max(this.y, e.y)),
      this
    );
  }
  clamp(e, t) {
    return (
      (this.x = ut(this.x, e.x, t.x)),
      (this.y = ut(this.y, e.y, t.y)),
      this
    );
  }
  clampScalar(e, t) {
    return ((this.x = ut(this.x, e, t)), (this.y = ut(this.y, e, t)), this);
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(ut(n, e, t));
  }
  floor() {
    return ((this.x = Math.floor(this.x)), (this.y = Math.floor(this.y)), this);
  }
  ceil() {
    return ((this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), this);
  }
  round() {
    return ((this.x = Math.round(this.x)), (this.y = Math.round(this.y)), this);
  }
  roundToZero() {
    return ((this.x = Math.trunc(this.x)), (this.y = Math.trunc(this.y)), this);
  }
  negate() {
    return ((this.x = -this.x), (this.y = -this.y), this);
  }
  dot(e) {
    return this.x * e.x + this.y * e.y;
  }
  cross(e) {
    return this.x * e.y - this.y * e.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(ut(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x,
      n = this.y - e.y;
    return t * t + n * n;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return (
      (this.x += (e.x - this.x) * t),
      (this.y += (e.y - this.y) * t),
      this
    );
  }
  lerpVectors(e, t, n) {
    return (
      (this.x = e.x + (t.x - e.x) * n),
      (this.y = e.y + (t.y - e.y) * n),
      this
    );
  }
  equals(e) {
    return e.x === this.x && e.y === this.y;
  }
  fromArray(e, t = 0) {
    return ((this.x = e[t]), (this.y = e[t + 1]), this);
  }
  toArray(e = [], t = 0) {
    return ((e[t] = this.x), (e[t + 1] = this.y), e);
  }
  fromBufferAttribute(e, t) {
    return ((this.x = e.getX(t)), (this.y = e.getY(t)), this);
  }
  rotateAround(e, t) {
    const n = Math.cos(t),
      a = Math.sin(t),
      o = this.x - e.x,
      u = this.y - e.y;
    return (
      (this.x = o * n - u * a + e.x),
      (this.y = o * a + u * n + e.y),
      this
    );
  }
  random() {
    return ((this.x = Math.random()), (this.y = Math.random()), this);
  }
  *[Symbol.iterator]() {
    (yield this.x, yield this.y);
  }
}
class Ci {
  constructor(e = 0, t = 0, n = 0, a = 1) {
    ((this.isQuaternion = !0),
      (this._x = e),
      (this._y = t),
      (this._z = n),
      (this._w = a));
  }
  static slerpFlat(e, t, n, a, o, u, h) {
    let p = n[a + 0],
      d = n[a + 1],
      v = n[a + 2],
      _ = n[a + 3];
    const x = o[u + 0],
      y = o[u + 1],
      R = o[u + 2],
      D = o[u + 3];
    if (h === 0) {
      ((e[t + 0] = p), (e[t + 1] = d), (e[t + 2] = v), (e[t + 3] = _));
      return;
    }
    if (h === 1) {
      ((e[t + 0] = x), (e[t + 1] = y), (e[t + 2] = R), (e[t + 3] = D));
      return;
    }
    if (_ !== D || p !== x || d !== y || v !== R) {
      let E = 1 - h;
      const m = p * x + d * y + v * R + _ * D,
        N = m >= 0 ? 1 : -1,
        U = 1 - m * m;
      if (U > Number.EPSILON) {
        const k = Math.sqrt(U),
          P = Math.atan2(k, m * N);
        ((E = Math.sin(E * P) / k), (h = Math.sin(h * P) / k));
      }
      const L = h * N;
      if (
        ((p = p * E + x * L),
        (d = d * E + y * L),
        (v = v * E + R * L),
        (_ = _ * E + D * L),
        E === 1 - h)
      ) {
        const k = 1 / Math.sqrt(p * p + d * d + v * v + _ * _);
        ((p *= k), (d *= k), (v *= k), (_ *= k));
      }
    }
    ((e[t] = p), (e[t + 1] = d), (e[t + 2] = v), (e[t + 3] = _));
  }
  static multiplyQuaternionsFlat(e, t, n, a, o, u) {
    const h = n[a],
      p = n[a + 1],
      d = n[a + 2],
      v = n[a + 3],
      _ = o[u],
      x = o[u + 1],
      y = o[u + 2],
      R = o[u + 3];
    return (
      (e[t] = h * R + v * _ + p * y - d * x),
      (e[t + 1] = p * R + v * x + d * _ - h * y),
      (e[t + 2] = d * R + v * y + h * x - p * _),
      (e[t + 3] = v * R - h * _ - p * x - d * y),
      e
    );
  }
  get x() {
    return this._x;
  }
  set x(e) {
    ((this._x = e), this._onChangeCallback());
  }
  get y() {
    return this._y;
  }
  set y(e) {
    ((this._y = e), this._onChangeCallback());
  }
  get z() {
    return this._z;
  }
  set z(e) {
    ((this._z = e), this._onChangeCallback());
  }
  get w() {
    return this._w;
  }
  set w(e) {
    ((this._w = e), this._onChangeCallback());
  }
  set(e, t, n, a) {
    return (
      (this._x = e),
      (this._y = t),
      (this._z = n),
      (this._w = a),
      this._onChangeCallback(),
      this
    );
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(e) {
    return (
      (this._x = e.x),
      (this._y = e.y),
      (this._z = e.z),
      (this._w = e.w),
      this._onChangeCallback(),
      this
    );
  }
  setFromEuler(e, t = !0) {
    const n = e._x,
      a = e._y,
      o = e._z,
      u = e._order,
      h = Math.cos,
      p = Math.sin,
      d = h(n / 2),
      v = h(a / 2),
      _ = h(o / 2),
      x = p(n / 2),
      y = p(a / 2),
      R = p(o / 2);
    switch (u) {
      case "XYZ":
        ((this._x = x * v * _ + d * y * R),
          (this._y = d * y * _ - x * v * R),
          (this._z = d * v * R + x * y * _),
          (this._w = d * v * _ - x * y * R));
        break;
      case "YXZ":
        ((this._x = x * v * _ + d * y * R),
          (this._y = d * y * _ - x * v * R),
          (this._z = d * v * R - x * y * _),
          (this._w = d * v * _ + x * y * R));
        break;
      case "ZXY":
        ((this._x = x * v * _ - d * y * R),
          (this._y = d * y * _ + x * v * R),
          (this._z = d * v * R + x * y * _),
          (this._w = d * v * _ - x * y * R));
        break;
      case "ZYX":
        ((this._x = x * v * _ - d * y * R),
          (this._y = d * y * _ + x * v * R),
          (this._z = d * v * R - x * y * _),
          (this._w = d * v * _ + x * y * R));
        break;
      case "YZX":
        ((this._x = x * v * _ + d * y * R),
          (this._y = d * y * _ + x * v * R),
          (this._z = d * v * R - x * y * _),
          (this._w = d * v * _ - x * y * R));
        break;
      case "XZY":
        ((this._x = x * v * _ - d * y * R),
          (this._y = d * y * _ - x * v * R),
          (this._z = d * v * R + x * y * _),
          (this._w = d * v * _ + x * y * R));
        break;
      default:
        console.warn(
          "THREE.Quaternion: .setFromEuler() encountered an unknown order: " +
            u,
        );
    }
    return (t === !0 && this._onChangeCallback(), this);
  }
  setFromAxisAngle(e, t) {
    const n = t / 2,
      a = Math.sin(n);
    return (
      (this._x = e.x * a),
      (this._y = e.y * a),
      (this._z = e.z * a),
      (this._w = Math.cos(n)),
      this._onChangeCallback(),
      this
    );
  }
  setFromRotationMatrix(e) {
    const t = e.elements,
      n = t[0],
      a = t[4],
      o = t[8],
      u = t[1],
      h = t[5],
      p = t[9],
      d = t[2],
      v = t[6],
      _ = t[10],
      x = n + h + _;
    if (x > 0) {
      const y = 0.5 / Math.sqrt(x + 1);
      ((this._w = 0.25 / y),
        (this._x = (v - p) * y),
        (this._y = (o - d) * y),
        (this._z = (u - a) * y));
    } else if (n > h && n > _) {
      const y = 2 * Math.sqrt(1 + n - h - _);
      ((this._w = (v - p) / y),
        (this._x = 0.25 * y),
        (this._y = (a + u) / y),
        (this._z = (o + d) / y));
    } else if (h > _) {
      const y = 2 * Math.sqrt(1 + h - n - _);
      ((this._w = (o - d) / y),
        (this._x = (a + u) / y),
        (this._y = 0.25 * y),
        (this._z = (p + v) / y));
    } else {
      const y = 2 * Math.sqrt(1 + _ - n - h);
      ((this._w = (u - a) / y),
        (this._x = (o + d) / y),
        (this._y = (p + v) / y),
        (this._z = 0.25 * y));
    }
    return (this._onChangeCallback(), this);
  }
  setFromUnitVectors(e, t) {
    let n = e.dot(t) + 1;
    return (
      n < 1e-8
        ? ((n = 0),
          Math.abs(e.x) > Math.abs(e.z)
            ? ((this._x = -e.y), (this._y = e.x), (this._z = 0), (this._w = n))
            : ((this._x = 0), (this._y = -e.z), (this._z = e.y), (this._w = n)))
        : ((this._x = e.y * t.z - e.z * t.y),
          (this._y = e.z * t.x - e.x * t.z),
          (this._z = e.x * t.y - e.y * t.x),
          (this._w = n)),
      this.normalize()
    );
  }
  angleTo(e) {
    return 2 * Math.acos(Math.abs(ut(this.dot(e), -1, 1)));
  }
  rotateTowards(e, t) {
    const n = this.angleTo(e);
    if (n === 0) return this;
    const a = Math.min(1, t / n);
    return (this.slerp(e, a), this);
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    return (
      (this._x *= -1),
      (this._y *= -1),
      (this._z *= -1),
      this._onChangeCallback(),
      this
    );
  }
  dot(e) {
    return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
  }
  lengthSq() {
    return (
      this._x * this._x +
      this._y * this._y +
      this._z * this._z +
      this._w * this._w
    );
  }
  length() {
    return Math.sqrt(
      this._x * this._x +
        this._y * this._y +
        this._z * this._z +
        this._w * this._w,
    );
  }
  normalize() {
    let e = this.length();
    return (
      e === 0
        ? ((this._x = 0), (this._y = 0), (this._z = 0), (this._w = 1))
        : ((e = 1 / e),
          (this._x = this._x * e),
          (this._y = this._y * e),
          (this._z = this._z * e),
          (this._w = this._w * e)),
      this._onChangeCallback(),
      this
    );
  }
  multiply(e) {
    return this.multiplyQuaternions(this, e);
  }
  premultiply(e) {
    return this.multiplyQuaternions(e, this);
  }
  multiplyQuaternions(e, t) {
    const n = e._x,
      a = e._y,
      o = e._z,
      u = e._w,
      h = t._x,
      p = t._y,
      d = t._z,
      v = t._w;
    return (
      (this._x = n * v + u * h + a * d - o * p),
      (this._y = a * v + u * p + o * h - n * d),
      (this._z = o * v + u * d + n * p - a * h),
      (this._w = u * v - n * h - a * p - o * d),
      this._onChangeCallback(),
      this
    );
  }
  slerp(e, t) {
    if (t === 0) return this;
    if (t === 1) return this.copy(e);
    const n = this._x,
      a = this._y,
      o = this._z,
      u = this._w;
    let h = u * e._w + n * e._x + a * e._y + o * e._z;
    if (
      (h < 0
        ? ((this._w = -e._w),
          (this._x = -e._x),
          (this._y = -e._y),
          (this._z = -e._z),
          (h = -h))
        : this.copy(e),
      h >= 1)
    )
      return ((this._w = u), (this._x = n), (this._y = a), (this._z = o), this);
    const p = 1 - h * h;
    if (p <= Number.EPSILON) {
      const y = 1 - t;
      return (
        (this._w = y * u + t * this._w),
        (this._x = y * n + t * this._x),
        (this._y = y * a + t * this._y),
        (this._z = y * o + t * this._z),
        this.normalize(),
        this
      );
    }
    const d = Math.sqrt(p),
      v = Math.atan2(d, h),
      _ = Math.sin((1 - t) * v) / d,
      x = Math.sin(t * v) / d;
    return (
      (this._w = u * _ + this._w * x),
      (this._x = n * _ + this._x * x),
      (this._y = a * _ + this._y * x),
      (this._z = o * _ + this._z * x),
      this._onChangeCallback(),
      this
    );
  }
  slerpQuaternions(e, t, n) {
    return this.copy(e).slerp(t, n);
  }
  random() {
    const e = 2 * Math.PI * Math.random(),
      t = 2 * Math.PI * Math.random(),
      n = Math.random(),
      a = Math.sqrt(1 - n),
      o = Math.sqrt(n);
    return this.set(
      a * Math.sin(e),
      a * Math.cos(e),
      o * Math.sin(t),
      o * Math.cos(t),
    );
  }
  equals(e) {
    return (
      e._x === this._x &&
      e._y === this._y &&
      e._z === this._z &&
      e._w === this._w
    );
  }
  fromArray(e, t = 0) {
    return (
      (this._x = e[t]),
      (this._y = e[t + 1]),
      (this._z = e[t + 2]),
      (this._w = e[t + 3]),
      this._onChangeCallback(),
      this
    );
  }
  toArray(e = [], t = 0) {
    return (
      (e[t] = this._x),
      (e[t + 1] = this._y),
      (e[t + 2] = this._z),
      (e[t + 3] = this._w),
      e
    );
  }
  fromBufferAttribute(e, t) {
    return (
      (this._x = e.getX(t)),
      (this._y = e.getY(t)),
      (this._z = e.getZ(t)),
      (this._w = e.getW(t)),
      this._onChangeCallback(),
      this
    );
  }
  toJSON() {
    return this.toArray();
  }
  _onChange(e) {
    return ((this._onChangeCallback = e), this);
  }
  _onChangeCallback() {}
  *[Symbol.iterator]() {
    (yield this._x, yield this._y, yield this._z, yield this._w);
  }
}
class K {
  constructor(e = 0, t = 0, n = 0) {
    ((K.prototype.isVector3 = !0), (this.x = e), (this.y = t), (this.z = n));
  }
  set(e, t, n) {
    return (
      n === void 0 && (n = this.z),
      (this.x = e),
      (this.y = t),
      (this.z = n),
      this
    );
  }
  setScalar(e) {
    return ((this.x = e), (this.y = e), (this.z = e), this);
  }
  setX(e) {
    return ((this.x = e), this);
  }
  setY(e) {
    return ((this.y = e), this);
  }
  setZ(e) {
    return ((this.z = e), this);
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(e) {
    return ((this.x = e.x), (this.y = e.y), (this.z = e.z), this);
  }
  add(e) {
    return ((this.x += e.x), (this.y += e.y), (this.z += e.z), this);
  }
  addScalar(e) {
    return ((this.x += e), (this.y += e), (this.z += e), this);
  }
  addVectors(e, t) {
    return (
      (this.x = e.x + t.x),
      (this.y = e.y + t.y),
      (this.z = e.z + t.z),
      this
    );
  }
  addScaledVector(e, t) {
    return (
      (this.x += e.x * t),
      (this.y += e.y * t),
      (this.z += e.z * t),
      this
    );
  }
  sub(e) {
    return ((this.x -= e.x), (this.y -= e.y), (this.z -= e.z), this);
  }
  subScalar(e) {
    return ((this.x -= e), (this.y -= e), (this.z -= e), this);
  }
  subVectors(e, t) {
    return (
      (this.x = e.x - t.x),
      (this.y = e.y - t.y),
      (this.z = e.z - t.z),
      this
    );
  }
  multiply(e) {
    return ((this.x *= e.x), (this.y *= e.y), (this.z *= e.z), this);
  }
  multiplyScalar(e) {
    return ((this.x *= e), (this.y *= e), (this.z *= e), this);
  }
  multiplyVectors(e, t) {
    return (
      (this.x = e.x * t.x),
      (this.y = e.y * t.y),
      (this.z = e.z * t.z),
      this
    );
  }
  applyEuler(e) {
    return this.applyQuaternion(Dl.setFromEuler(e));
  }
  applyAxisAngle(e, t) {
    return this.applyQuaternion(Dl.setFromAxisAngle(e, t));
  }
  applyMatrix3(e) {
    const t = this.x,
      n = this.y,
      a = this.z,
      o = e.elements;
    return (
      (this.x = o[0] * t + o[3] * n + o[6] * a),
      (this.y = o[1] * t + o[4] * n + o[7] * a),
      (this.z = o[2] * t + o[5] * n + o[8] * a),
      this
    );
  }
  applyNormalMatrix(e) {
    return this.applyMatrix3(e).normalize();
  }
  applyMatrix4(e) {
    const t = this.x,
      n = this.y,
      a = this.z,
      o = e.elements,
      u = 1 / (o[3] * t + o[7] * n + o[11] * a + o[15]);
    return (
      (this.x = (o[0] * t + o[4] * n + o[8] * a + o[12]) * u),
      (this.y = (o[1] * t + o[5] * n + o[9] * a + o[13]) * u),
      (this.z = (o[2] * t + o[6] * n + o[10] * a + o[14]) * u),
      this
    );
  }
  applyQuaternion(e) {
    const t = this.x,
      n = this.y,
      a = this.z,
      o = e.x,
      u = e.y,
      h = e.z,
      p = e.w,
      d = 2 * (u * a - h * n),
      v = 2 * (h * t - o * a),
      _ = 2 * (o * n - u * t);
    return (
      (this.x = t + p * d + u * _ - h * v),
      (this.y = n + p * v + h * d - o * _),
      (this.z = a + p * _ + o * v - u * d),
      this
    );
  }
  project(e) {
    return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(
      e.projectionMatrix,
    );
  }
  unproject(e) {
    return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(
      e.matrixWorld,
    );
  }
  transformDirection(e) {
    const t = this.x,
      n = this.y,
      a = this.z,
      o = e.elements;
    return (
      (this.x = o[0] * t + o[4] * n + o[8] * a),
      (this.y = o[1] * t + o[5] * n + o[9] * a),
      (this.z = o[2] * t + o[6] * n + o[10] * a),
      this.normalize()
    );
  }
  divide(e) {
    return ((this.x /= e.x), (this.y /= e.y), (this.z /= e.z), this);
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  min(e) {
    return (
      (this.x = Math.min(this.x, e.x)),
      (this.y = Math.min(this.y, e.y)),
      (this.z = Math.min(this.z, e.z)),
      this
    );
  }
  max(e) {
    return (
      (this.x = Math.max(this.x, e.x)),
      (this.y = Math.max(this.y, e.y)),
      (this.z = Math.max(this.z, e.z)),
      this
    );
  }
  clamp(e, t) {
    return (
      (this.x = ut(this.x, e.x, t.x)),
      (this.y = ut(this.y, e.y, t.y)),
      (this.z = ut(this.z, e.z, t.z)),
      this
    );
  }
  clampScalar(e, t) {
    return (
      (this.x = ut(this.x, e, t)),
      (this.y = ut(this.y, e, t)),
      (this.z = ut(this.z, e, t)),
      this
    );
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(ut(n, e, t));
  }
  floor() {
    return (
      (this.x = Math.floor(this.x)),
      (this.y = Math.floor(this.y)),
      (this.z = Math.floor(this.z)),
      this
    );
  }
  ceil() {
    return (
      (this.x = Math.ceil(this.x)),
      (this.y = Math.ceil(this.y)),
      (this.z = Math.ceil(this.z)),
      this
    );
  }
  round() {
    return (
      (this.x = Math.round(this.x)),
      (this.y = Math.round(this.y)),
      (this.z = Math.round(this.z)),
      this
    );
  }
  roundToZero() {
    return (
      (this.x = Math.trunc(this.x)),
      (this.y = Math.trunc(this.y)),
      (this.z = Math.trunc(this.z)),
      this
    );
  }
  negate() {
    return ((this.x = -this.x), (this.y = -this.y), (this.z = -this.z), this);
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return (
      (this.x += (e.x - this.x) * t),
      (this.y += (e.y - this.y) * t),
      (this.z += (e.z - this.z) * t),
      this
    );
  }
  lerpVectors(e, t, n) {
    return (
      (this.x = e.x + (t.x - e.x) * n),
      (this.y = e.y + (t.y - e.y) * n),
      (this.z = e.z + (t.z - e.z) * n),
      this
    );
  }
  cross(e) {
    return this.crossVectors(this, e);
  }
  crossVectors(e, t) {
    const n = e.x,
      a = e.y,
      o = e.z,
      u = t.x,
      h = t.y,
      p = t.z;
    return (
      (this.x = a * p - o * h),
      (this.y = o * u - n * p),
      (this.z = n * h - a * u),
      this
    );
  }
  projectOnVector(e) {
    const t = e.lengthSq();
    if (t === 0) return this.set(0, 0, 0);
    const n = e.dot(this) / t;
    return this.copy(e).multiplyScalar(n);
  }
  projectOnPlane(e) {
    return (ea.copy(this).projectOnVector(e), this.sub(ea));
  }
  reflect(e) {
    return this.sub(ea.copy(e).multiplyScalar(2 * this.dot(e)));
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(ut(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x,
      n = this.y - e.y,
      a = this.z - e.z;
    return t * t + n * n + a * a;
  }
  manhattanDistanceTo(e) {
    return (
      Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z)
    );
  }
  setFromSpherical(e) {
    return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
  }
  setFromSphericalCoords(e, t, n) {
    const a = Math.sin(t) * e;
    return (
      (this.x = a * Math.sin(n)),
      (this.y = Math.cos(t) * e),
      (this.z = a * Math.cos(n)),
      this
    );
  }
  setFromCylindrical(e) {
    return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
  }
  setFromCylindricalCoords(e, t, n) {
    return (
      (this.x = e * Math.sin(t)),
      (this.y = n),
      (this.z = e * Math.cos(t)),
      this
    );
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return ((this.x = t[12]), (this.y = t[13]), (this.z = t[14]), this);
  }
  setFromMatrixScale(e) {
    const t = this.setFromMatrixColumn(e, 0).length(),
      n = this.setFromMatrixColumn(e, 1).length(),
      a = this.setFromMatrixColumn(e, 2).length();
    return ((this.x = t), (this.y = n), (this.z = a), this);
  }
  setFromMatrixColumn(e, t) {
    return this.fromArray(e.elements, t * 4);
  }
  setFromMatrix3Column(e, t) {
    return this.fromArray(e.elements, t * 3);
  }
  setFromEuler(e) {
    return ((this.x = e._x), (this.y = e._y), (this.z = e._z), this);
  }
  setFromColor(e) {
    return ((this.x = e.r), (this.y = e.g), (this.z = e.b), this);
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z;
  }
  fromArray(e, t = 0) {
    return ((this.x = e[t]), (this.y = e[t + 1]), (this.z = e[t + 2]), this);
  }
  toArray(e = [], t = 0) {
    return ((e[t] = this.x), (e[t + 1] = this.y), (e[t + 2] = this.z), e);
  }
  fromBufferAttribute(e, t) {
    return (
      (this.x = e.getX(t)),
      (this.y = e.getY(t)),
      (this.z = e.getZ(t)),
      this
    );
  }
  random() {
    return (
      (this.x = Math.random()),
      (this.y = Math.random()),
      (this.z = Math.random()),
      this
    );
  }
  randomDirection() {
    const e = Math.random() * Math.PI * 2,
      t = Math.random() * 2 - 1,
      n = Math.sqrt(1 - t * t);
    return (
      (this.x = n * Math.cos(e)),
      (this.y = t),
      (this.z = n * Math.sin(e)),
      this
    );
  }
  *[Symbol.iterator]() {
    (yield this.x, yield this.y, yield this.z);
  }
}
const ea = new K(),
  Dl = new Ci();
class rt {
  constructor(e, t, n, a, o, u, h, p, d) {
    ((rt.prototype.isMatrix3 = !0),
      (this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1]),
      e !== void 0 && this.set(e, t, n, a, o, u, h, p, d));
  }
  set(e, t, n, a, o, u, h, p, d) {
    const v = this.elements;
    return (
      (v[0] = e),
      (v[1] = a),
      (v[2] = h),
      (v[3] = t),
      (v[4] = o),
      (v[5] = p),
      (v[6] = n),
      (v[7] = u),
      (v[8] = d),
      this
    );
  }
  identity() {
    return (this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this);
  }
  copy(e) {
    const t = this.elements,
      n = e.elements;
    return (
      (t[0] = n[0]),
      (t[1] = n[1]),
      (t[2] = n[2]),
      (t[3] = n[3]),
      (t[4] = n[4]),
      (t[5] = n[5]),
      (t[6] = n[6]),
      (t[7] = n[7]),
      (t[8] = n[8]),
      this
    );
  }
  extractBasis(e, t, n) {
    return (
      e.setFromMatrix3Column(this, 0),
      t.setFromMatrix3Column(this, 1),
      n.setFromMatrix3Column(this, 2),
      this
    );
  }
  setFromMatrix4(e) {
    const t = e.elements;
    return (
      this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]),
      this
    );
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements,
      a = t.elements,
      o = this.elements,
      u = n[0],
      h = n[3],
      p = n[6],
      d = n[1],
      v = n[4],
      _ = n[7],
      x = n[2],
      y = n[5],
      R = n[8],
      D = a[0],
      E = a[3],
      m = a[6],
      N = a[1],
      U = a[4],
      L = a[7],
      k = a[2],
      P = a[5],
      H = a[8];
    return (
      (o[0] = u * D + h * N + p * k),
      (o[3] = u * E + h * U + p * P),
      (o[6] = u * m + h * L + p * H),
      (o[1] = d * D + v * N + _ * k),
      (o[4] = d * E + v * U + _ * P),
      (o[7] = d * m + v * L + _ * H),
      (o[2] = x * D + y * N + R * k),
      (o[5] = x * E + y * U + R * P),
      (o[8] = x * m + y * L + R * H),
      this
    );
  }
  multiplyScalar(e) {
    const t = this.elements;
    return (
      (t[0] *= e),
      (t[3] *= e),
      (t[6] *= e),
      (t[1] *= e),
      (t[4] *= e),
      (t[7] *= e),
      (t[2] *= e),
      (t[5] *= e),
      (t[8] *= e),
      this
    );
  }
  determinant() {
    const e = this.elements,
      t = e[0],
      n = e[1],
      a = e[2],
      o = e[3],
      u = e[4],
      h = e[5],
      p = e[6],
      d = e[7],
      v = e[8];
    return (
      t * u * v - t * h * d - n * o * v + n * h * p + a * o * d - a * u * p
    );
  }
  invert() {
    const e = this.elements,
      t = e[0],
      n = e[1],
      a = e[2],
      o = e[3],
      u = e[4],
      h = e[5],
      p = e[6],
      d = e[7],
      v = e[8],
      _ = v * u - h * d,
      x = h * p - v * o,
      y = d * o - u * p,
      R = t * _ + n * x + a * y;
    if (R === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const D = 1 / R;
    return (
      (e[0] = _ * D),
      (e[1] = (a * d - v * n) * D),
      (e[2] = (h * n - a * u) * D),
      (e[3] = x * D),
      (e[4] = (v * t - a * p) * D),
      (e[5] = (a * o - h * t) * D),
      (e[6] = y * D),
      (e[7] = (n * p - d * t) * D),
      (e[8] = (u * t - n * o) * D),
      this
    );
  }
  transpose() {
    let e;
    const t = this.elements;
    return (
      (e = t[1]),
      (t[1] = t[3]),
      (t[3] = e),
      (e = t[2]),
      (t[2] = t[6]),
      (t[6] = e),
      (e = t[5]),
      (t[5] = t[7]),
      (t[7] = e),
      this
    );
  }
  getNormalMatrix(e) {
    return this.setFromMatrix4(e).invert().transpose();
  }
  transposeIntoArray(e) {
    const t = this.elements;
    return (
      (e[0] = t[0]),
      (e[1] = t[3]),
      (e[2] = t[6]),
      (e[3] = t[1]),
      (e[4] = t[4]),
      (e[5] = t[7]),
      (e[6] = t[2]),
      (e[7] = t[5]),
      (e[8] = t[8]),
      this
    );
  }
  setUvTransform(e, t, n, a, o, u, h) {
    const p = Math.cos(o),
      d = Math.sin(o);
    return (
      this.set(
        n * p,
        n * d,
        -n * (p * u + d * h) + u + e,
        -a * d,
        a * p,
        -a * (-d * u + p * h) + h + t,
        0,
        0,
        1,
      ),
      this
    );
  }
  scale(e, t) {
    return (this.premultiply(ta.makeScale(e, t)), this);
  }
  rotate(e) {
    return (this.premultiply(ta.makeRotation(-e)), this);
  }
  translate(e, t) {
    return (this.premultiply(ta.makeTranslation(e, t)), this);
  }
  makeTranslation(e, t) {
    return (
      e.isVector2
        ? this.set(1, 0, e.x, 0, 1, e.y, 0, 0, 1)
        : this.set(1, 0, e, 0, 1, t, 0, 0, 1),
      this
    );
  }
  makeRotation(e) {
    const t = Math.cos(e),
      n = Math.sin(e);
    return (this.set(t, -n, 0, n, t, 0, 0, 0, 1), this);
  }
  makeScale(e, t) {
    return (this.set(e, 0, 0, 0, t, 0, 0, 0, 1), this);
  }
  equals(e) {
    const t = this.elements,
      n = e.elements;
    for (let a = 0; a < 9; a++) if (t[a] !== n[a]) return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 9; n++) this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return (
      (e[t] = n[0]),
      (e[t + 1] = n[1]),
      (e[t + 2] = n[2]),
      (e[t + 3] = n[3]),
      (e[t + 4] = n[4]),
      (e[t + 5] = n[5]),
      (e[t + 6] = n[6]),
      (e[t + 7] = n[7]),
      (e[t + 8] = n[8]),
      e
    );
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
const ta = new rt();
function Vc(r) {
  for (let e = r.length - 1; e >= 0; --e) if (r[e] >= 65535) return !0;
  return !1;
}
function Tr(r) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", r);
}
function n_() {
  const r = Tr("canvas");
  return ((r.style.display = "block"), r);
}
const Ll = {};
function wr(r) {
  r in Ll || ((Ll[r] = !0), console.warn(r));
}
function i_(r, e, t) {
  return new Promise(function (n, a) {
    function o() {
      switch (r.clientWaitSync(e, r.SYNC_FLUSH_COMMANDS_BIT, 0)) {
        case r.WAIT_FAILED:
          a();
          break;
        case r.TIMEOUT_EXPIRED:
          setTimeout(o, t);
          break;
        default:
          n();
      }
    }
    setTimeout(o, t);
  });
}
const Fl = new rt().set(
    0.4123908,
    0.3575843,
    0.1804808,
    0.212639,
    0.7151687,
    0.0721923,
    0.0193308,
    0.1191948,
    0.9505322,
  ),
  Il = new rt().set(
    3.2409699,
    -1.5373832,
    -0.4986108,
    -0.9692436,
    1.8759675,
    0.0415551,
    0.0556301,
    -0.203977,
    1.0569715,
  );
function r_() {
  const r = {
      enabled: !0,
      workingColorSpace: ir,
      spaces: {},
      convert: function (a, o, u) {
        return (
          this.enabled === !1 ||
            o === u ||
            !o ||
            !u ||
            (this.spaces[o].transfer === wt &&
              ((a.r = qn(a.r)), (a.g = qn(a.g)), (a.b = qn(a.b))),
            this.spaces[o].primaries !== this.spaces[u].primaries &&
              (a.applyMatrix3(this.spaces[o].toXYZ),
              a.applyMatrix3(this.spaces[u].fromXYZ)),
            this.spaces[u].transfer === wt &&
              ((a.r = Qi(a.r)), (a.g = Qi(a.g)), (a.b = Qi(a.b)))),
          a
        );
      },
      workingToColorSpace: function (a, o) {
        return this.convert(a, this.workingColorSpace, o);
      },
      colorSpaceToWorking: function (a, o) {
        return this.convert(a, o, this.workingColorSpace);
      },
      getPrimaries: function (a) {
        return this.spaces[a].primaries;
      },
      getTransfer: function (a) {
        return a === ri ? As : this.spaces[a].transfer;
      },
      getToneMappingMode: function (a) {
        return (
          this.spaces[a].outputColorSpaceConfig.toneMappingMode || "standard"
        );
      },
      getLuminanceCoefficients: function (a, o = this.workingColorSpace) {
        return a.fromArray(this.spaces[o].luminanceCoefficients);
      },
      define: function (a) {
        Object.assign(this.spaces, a);
      },
      _getMatrix: function (a, o, u) {
        return a.copy(this.spaces[o].toXYZ).multiply(this.spaces[u].fromXYZ);
      },
      _getDrawingBufferColorSpace: function (a) {
        return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace;
      },
      _getUnpackColorSpace: function (a = this.workingColorSpace) {
        return this.spaces[a].workingColorSpaceConfig.unpackColorSpace;
      },
      fromWorkingColorSpace: function (a, o) {
        return (
          wr(
            "THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().",
          ),
          r.workingToColorSpace(a, o)
        );
      },
      toWorkingColorSpace: function (a, o) {
        return (
          wr(
            "THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().",
          ),
          r.colorSpaceToWorking(a, o)
        );
      },
    },
    e = [0.64, 0.33, 0.3, 0.6, 0.15, 0.06],
    t = [0.2126, 0.7152, 0.0722],
    n = [0.3127, 0.329];
  return (
    r.define({
      [ir]: {
        primaries: e,
        whitePoint: n,
        transfer: As,
        toXYZ: Fl,
        fromXYZ: Il,
        luminanceCoefficients: t,
        workingColorSpaceConfig: { unpackColorSpace: on },
        outputColorSpaceConfig: { drawingBufferColorSpace: on },
      },
      [on]: {
        primaries: e,
        whitePoint: n,
        transfer: wt,
        toXYZ: Fl,
        fromXYZ: Il,
        luminanceCoefficients: t,
        outputColorSpaceConfig: { drawingBufferColorSpace: on },
      },
    }),
    r
  );
}
const gt = r_();
function qn(r) {
  return r < 0.04045
    ? r * 0.0773993808
    : Math.pow(r * 0.9478672986 + 0.0521327014, 2.4);
}
function Qi(r) {
  return r < 0.0031308 ? r * 12.92 : 1.055 * Math.pow(r, 0.41666) - 0.055;
}
let Ui;
class s_ {
  static getDataURL(e, t = "image/png") {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u") return e.src;
    let n;
    if (e instanceof HTMLCanvasElement) n = e;
    else {
      (Ui === void 0 && (Ui = Tr("canvas")),
        (Ui.width = e.width),
        (Ui.height = e.height));
      const a = Ui.getContext("2d");
      (e instanceof ImageData
        ? a.putImageData(e, 0, 0)
        : a.drawImage(e, 0, 0, e.width, e.height),
        (n = Ui));
    }
    return n.toDataURL(t);
  }
  static sRGBToLinear(e) {
    if (
      (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement) ||
      (typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement) ||
      (typeof ImageBitmap < "u" && e instanceof ImageBitmap)
    ) {
      const t = Tr("canvas");
      ((t.width = e.width), (t.height = e.height));
      const n = t.getContext("2d");
      n.drawImage(e, 0, 0, e.width, e.height);
      const a = n.getImageData(0, 0, e.width, e.height),
        o = a.data;
      for (let u = 0; u < o.length; u++) o[u] = qn(o[u] / 255) * 255;
      return (n.putImageData(a, 0, 0), t);
    } else if (e.data) {
      const t = e.data.slice(0);
      for (let n = 0; n < t.length; n++)
        t instanceof Uint8Array || t instanceof Uint8ClampedArray
          ? (t[n] = Math.floor(qn(t[n] / 255) * 255))
          : (t[n] = qn(t[n]));
      return { data: t, width: e.width, height: e.height };
    } else
      return (
        console.warn(
          "THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.",
        ),
        e
      );
  }
}
let a_ = 0;
class Co {
  constructor(e = null) {
    ((this.isSource = !0),
      Object.defineProperty(this, "id", { value: a_++ }),
      (this.uuid = Rr()),
      (this.data = e),
      (this.dataReady = !0),
      (this.version = 0));
  }
  getSize(e) {
    const t = this.data;
    return (
      typeof HTMLVideoElement < "u" && t instanceof HTMLVideoElement
        ? e.set(t.videoWidth, t.videoHeight, 0)
        : t instanceof VideoFrame
          ? e.set(t.displayHeight, t.displayWidth, 0)
          : t !== null
            ? e.set(t.width, t.height, t.depth || 0)
            : e.set(0, 0, 0),
      e
    );
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.images[this.uuid] !== void 0) return e.images[this.uuid];
    const n = { uuid: this.uuid, url: "" },
      a = this.data;
    if (a !== null) {
      let o;
      if (Array.isArray(a)) {
        o = [];
        for (let u = 0, h = a.length; u < h; u++)
          a[u].isDataTexture ? o.push(na(a[u].image)) : o.push(na(a[u]));
      } else o = na(a);
      n.url = o;
    }
    return (t || (e.images[this.uuid] = n), n);
  }
}
function na(r) {
  return (typeof HTMLImageElement < "u" && r instanceof HTMLImageElement) ||
    (typeof HTMLCanvasElement < "u" && r instanceof HTMLCanvasElement) ||
    (typeof ImageBitmap < "u" && r instanceof ImageBitmap)
    ? s_.getDataURL(r)
    : r.data
      ? {
          data: Array.from(r.data),
          width: r.width,
          height: r.height,
          type: r.data.constructor.name,
        }
      : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let o_ = 0;
const ia = new K();
class rn extends Li {
  constructor(
    e = rn.DEFAULT_IMAGE,
    t = rn.DEFAULT_MAPPING,
    n = bi,
    a = bi,
    o = Dn,
    u = Ai,
    h = Tn,
    p = In,
    d = rn.DEFAULT_ANISOTROPY,
    v = ri,
  ) {
    (super(),
      (this.isTexture = !0),
      Object.defineProperty(this, "id", { value: o_++ }),
      (this.uuid = Rr()),
      (this.name = ""),
      (this.source = new Co(e)),
      (this.mipmaps = []),
      (this.mapping = t),
      (this.channel = 0),
      (this.wrapS = n),
      (this.wrapT = a),
      (this.magFilter = o),
      (this.minFilter = u),
      (this.anisotropy = d),
      (this.format = h),
      (this.internalFormat = null),
      (this.type = p),
      (this.offset = new it(0, 0)),
      (this.repeat = new it(1, 1)),
      (this.center = new it(0, 0)),
      (this.rotation = 0),
      (this.matrixAutoUpdate = !0),
      (this.matrix = new rt()),
      (this.generateMipmaps = !0),
      (this.premultiplyAlpha = !1),
      (this.flipY = !0),
      (this.unpackAlignment = 4),
      (this.colorSpace = v),
      (this.userData = {}),
      (this.updateRanges = []),
      (this.version = 0),
      (this.onUpdate = null),
      (this.renderTarget = null),
      (this.isRenderTargetTexture = !1),
      (this.isArrayTexture = !!(e && e.depth && e.depth > 1)),
      (this.pmremVersion = 0));
  }
  get width() {
    return this.source.getSize(ia).x;
  }
  get height() {
    return this.source.getSize(ia).y;
  }
  get depth() {
    return this.source.getSize(ia).z;
  }
  get image() {
    return this.source.data;
  }
  set image(e = null) {
    this.source.data = e;
  }
  updateMatrix() {
    this.matrix.setUvTransform(
      this.offset.x,
      this.offset.y,
      this.repeat.x,
      this.repeat.y,
      this.rotation,
      this.center.x,
      this.center.y,
    );
  }
  addUpdateRange(e, t) {
    this.updateRanges.push({ start: e, count: t });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return (
      (this.name = e.name),
      (this.source = e.source),
      (this.mipmaps = e.mipmaps.slice(0)),
      (this.mapping = e.mapping),
      (this.channel = e.channel),
      (this.wrapS = e.wrapS),
      (this.wrapT = e.wrapT),
      (this.magFilter = e.magFilter),
      (this.minFilter = e.minFilter),
      (this.anisotropy = e.anisotropy),
      (this.format = e.format),
      (this.internalFormat = e.internalFormat),
      (this.type = e.type),
      this.offset.copy(e.offset),
      this.repeat.copy(e.repeat),
      this.center.copy(e.center),
      (this.rotation = e.rotation),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      this.matrix.copy(e.matrix),
      (this.generateMipmaps = e.generateMipmaps),
      (this.premultiplyAlpha = e.premultiplyAlpha),
      (this.flipY = e.flipY),
      (this.unpackAlignment = e.unpackAlignment),
      (this.colorSpace = e.colorSpace),
      (this.renderTarget = e.renderTarget),
      (this.isRenderTargetTexture = e.isRenderTargetTexture),
      (this.isArrayTexture = e.isArrayTexture),
      (this.userData = JSON.parse(JSON.stringify(e.userData))),
      (this.needsUpdate = !0),
      this
    );
  }
  setValues(e) {
    for (const t in e) {
      const n = e[t];
      if (n === void 0) {
        console.warn(
          `THREE.Texture.setValues(): parameter '${t}' has value of undefined.`,
        );
        continue;
      }
      const a = this[t];
      if (a === void 0) {
        console.warn(
          `THREE.Texture.setValues(): property '${t}' does not exist.`,
        );
        continue;
      }
      (a && n && a.isVector2 && n.isVector2) ||
      (a && n && a.isVector3 && n.isVector3) ||
      (a && n && a.isMatrix3 && n.isMatrix3)
        ? a.copy(n)
        : (this[t] = n);
    }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.textures[this.uuid] !== void 0) return e.textures[this.uuid];
    const n = {
      metadata: { version: 4.7, type: "Texture", generator: "Texture.toJSON" },
      uuid: this.uuid,
      name: this.name,
      image: this.source.toJSON(e).uuid,
      mapping: this.mapping,
      channel: this.channel,
      repeat: [this.repeat.x, this.repeat.y],
      offset: [this.offset.x, this.offset.y],
      center: [this.center.x, this.center.y],
      rotation: this.rotation,
      wrap: [this.wrapS, this.wrapT],
      format: this.format,
      internalFormat: this.internalFormat,
      type: this.type,
      colorSpace: this.colorSpace,
      minFilter: this.minFilter,
      magFilter: this.magFilter,
      anisotropy: this.anisotropy,
      flipY: this.flipY,
      generateMipmaps: this.generateMipmaps,
      premultiplyAlpha: this.premultiplyAlpha,
      unpackAlignment: this.unpackAlignment,
    };
    return (
      Object.keys(this.userData).length > 0 && (n.userData = this.userData),
      t || (e.textures[this.uuid] = n),
      n
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  transformUv(e) {
    if (this.mapping !== Dc) return e;
    if ((e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1))
      switch (this.wrapS) {
        case Ga:
          e.x = e.x - Math.floor(e.x);
          break;
        case bi:
          e.x = e.x < 0 ? 0 : 1;
          break;
        case Wa:
          Math.abs(Math.floor(e.x) % 2) === 1
            ? (e.x = Math.ceil(e.x) - e.x)
            : (e.x = e.x - Math.floor(e.x));
          break;
      }
    if (e.y < 0 || e.y > 1)
      switch (this.wrapT) {
        case Ga:
          e.y = e.y - Math.floor(e.y);
          break;
        case bi:
          e.y = e.y < 0 ? 0 : 1;
          break;
        case Wa:
          Math.abs(Math.floor(e.y) % 2) === 1
            ? (e.y = Math.ceil(e.y) - e.y)
            : (e.y = e.y - Math.floor(e.y));
          break;
      }
    return (this.flipY && (e.y = 1 - e.y), e);
  }
  set needsUpdate(e) {
    e === !0 && (this.version++, (this.source.needsUpdate = !0));
  }
  set needsPMREMUpdate(e) {
    e === !0 && this.pmremVersion++;
  }
}
rn.DEFAULT_IMAGE = null;
rn.DEFAULT_MAPPING = Dc;
rn.DEFAULT_ANISOTROPY = 1;
class It {
  constructor(e = 0, t = 0, n = 0, a = 1) {
    ((It.prototype.isVector4 = !0),
      (this.x = e),
      (this.y = t),
      (this.z = n),
      (this.w = a));
  }
  get width() {
    return this.z;
  }
  set width(e) {
    this.z = e;
  }
  get height() {
    return this.w;
  }
  set height(e) {
    this.w = e;
  }
  set(e, t, n, a) {
    return ((this.x = e), (this.y = t), (this.z = n), (this.w = a), this);
  }
  setScalar(e) {
    return ((this.x = e), (this.y = e), (this.z = e), (this.w = e), this);
  }
  setX(e) {
    return ((this.x = e), this);
  }
  setY(e) {
    return ((this.y = e), this);
  }
  setZ(e) {
    return ((this.z = e), this);
  }
  setW(e) {
    return ((this.w = e), this);
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      case 3:
        this.w = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(e) {
    return (
      (this.x = e.x),
      (this.y = e.y),
      (this.z = e.z),
      (this.w = e.w !== void 0 ? e.w : 1),
      this
    );
  }
  add(e) {
    return (
      (this.x += e.x),
      (this.y += e.y),
      (this.z += e.z),
      (this.w += e.w),
      this
    );
  }
  addScalar(e) {
    return ((this.x += e), (this.y += e), (this.z += e), (this.w += e), this);
  }
  addVectors(e, t) {
    return (
      (this.x = e.x + t.x),
      (this.y = e.y + t.y),
      (this.z = e.z + t.z),
      (this.w = e.w + t.w),
      this
    );
  }
  addScaledVector(e, t) {
    return (
      (this.x += e.x * t),
      (this.y += e.y * t),
      (this.z += e.z * t),
      (this.w += e.w * t),
      this
    );
  }
  sub(e) {
    return (
      (this.x -= e.x),
      (this.y -= e.y),
      (this.z -= e.z),
      (this.w -= e.w),
      this
    );
  }
  subScalar(e) {
    return ((this.x -= e), (this.y -= e), (this.z -= e), (this.w -= e), this);
  }
  subVectors(e, t) {
    return (
      (this.x = e.x - t.x),
      (this.y = e.y - t.y),
      (this.z = e.z - t.z),
      (this.w = e.w - t.w),
      this
    );
  }
  multiply(e) {
    return (
      (this.x *= e.x),
      (this.y *= e.y),
      (this.z *= e.z),
      (this.w *= e.w),
      this
    );
  }
  multiplyScalar(e) {
    return ((this.x *= e), (this.y *= e), (this.z *= e), (this.w *= e), this);
  }
  applyMatrix4(e) {
    const t = this.x,
      n = this.y,
      a = this.z,
      o = this.w,
      u = e.elements;
    return (
      (this.x = u[0] * t + u[4] * n + u[8] * a + u[12] * o),
      (this.y = u[1] * t + u[5] * n + u[9] * a + u[13] * o),
      (this.z = u[2] * t + u[6] * n + u[10] * a + u[14] * o),
      (this.w = u[3] * t + u[7] * n + u[11] * a + u[15] * o),
      this
    );
  }
  divide(e) {
    return (
      (this.x /= e.x),
      (this.y /= e.y),
      (this.z /= e.z),
      (this.w /= e.w),
      this
    );
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  setAxisAngleFromQuaternion(e) {
    this.w = 2 * Math.acos(e.w);
    const t = Math.sqrt(1 - e.w * e.w);
    return (
      t < 1e-4
        ? ((this.x = 1), (this.y = 0), (this.z = 0))
        : ((this.x = e.x / t), (this.y = e.y / t), (this.z = e.z / t)),
      this
    );
  }
  setAxisAngleFromRotationMatrix(e) {
    let t, n, a, o;
    const p = e.elements,
      d = p[0],
      v = p[4],
      _ = p[8],
      x = p[1],
      y = p[5],
      R = p[9],
      D = p[2],
      E = p[6],
      m = p[10];
    if (
      Math.abs(v - x) < 0.01 &&
      Math.abs(_ - D) < 0.01 &&
      Math.abs(R - E) < 0.01
    ) {
      if (
        Math.abs(v + x) < 0.1 &&
        Math.abs(_ + D) < 0.1 &&
        Math.abs(R + E) < 0.1 &&
        Math.abs(d + y + m - 3) < 0.1
      )
        return (this.set(1, 0, 0, 0), this);
      t = Math.PI;
      const U = (d + 1) / 2,
        L = (y + 1) / 2,
        k = (m + 1) / 2,
        P = (v + x) / 4,
        H = (_ + D) / 4,
        q = (R + E) / 4;
      return (
        U > L && U > k
          ? U < 0.01
            ? ((n = 0), (a = 0.707106781), (o = 0.707106781))
            : ((n = Math.sqrt(U)), (a = P / n), (o = H / n))
          : L > k
            ? L < 0.01
              ? ((n = 0.707106781), (a = 0), (o = 0.707106781))
              : ((a = Math.sqrt(L)), (n = P / a), (o = q / a))
            : k < 0.01
              ? ((n = 0.707106781), (a = 0.707106781), (o = 0))
              : ((o = Math.sqrt(k)), (n = H / o), (a = q / o)),
        this.set(n, a, o, t),
        this
      );
    }
    let N = Math.sqrt(
      (E - R) * (E - R) + (_ - D) * (_ - D) + (x - v) * (x - v),
    );
    return (
      Math.abs(N) < 0.001 && (N = 1),
      (this.x = (E - R) / N),
      (this.y = (_ - D) / N),
      (this.z = (x - v) / N),
      (this.w = Math.acos((d + y + m - 1) / 2)),
      this
    );
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return (
      (this.x = t[12]),
      (this.y = t[13]),
      (this.z = t[14]),
      (this.w = t[15]),
      this
    );
  }
  min(e) {
    return (
      (this.x = Math.min(this.x, e.x)),
      (this.y = Math.min(this.y, e.y)),
      (this.z = Math.min(this.z, e.z)),
      (this.w = Math.min(this.w, e.w)),
      this
    );
  }
  max(e) {
    return (
      (this.x = Math.max(this.x, e.x)),
      (this.y = Math.max(this.y, e.y)),
      (this.z = Math.max(this.z, e.z)),
      (this.w = Math.max(this.w, e.w)),
      this
    );
  }
  clamp(e, t) {
    return (
      (this.x = ut(this.x, e.x, t.x)),
      (this.y = ut(this.y, e.y, t.y)),
      (this.z = ut(this.z, e.z, t.z)),
      (this.w = ut(this.w, e.w, t.w)),
      this
    );
  }
  clampScalar(e, t) {
    return (
      (this.x = ut(this.x, e, t)),
      (this.y = ut(this.y, e, t)),
      (this.z = ut(this.z, e, t)),
      (this.w = ut(this.w, e, t)),
      this
    );
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(ut(n, e, t));
  }
  floor() {
    return (
      (this.x = Math.floor(this.x)),
      (this.y = Math.floor(this.y)),
      (this.z = Math.floor(this.z)),
      (this.w = Math.floor(this.w)),
      this
    );
  }
  ceil() {
    return (
      (this.x = Math.ceil(this.x)),
      (this.y = Math.ceil(this.y)),
      (this.z = Math.ceil(this.z)),
      (this.w = Math.ceil(this.w)),
      this
    );
  }
  round() {
    return (
      (this.x = Math.round(this.x)),
      (this.y = Math.round(this.y)),
      (this.z = Math.round(this.z)),
      (this.w = Math.round(this.w)),
      this
    );
  }
  roundToZero() {
    return (
      (this.x = Math.trunc(this.x)),
      (this.y = Math.trunc(this.y)),
      (this.z = Math.trunc(this.z)),
      (this.w = Math.trunc(this.w)),
      this
    );
  }
  negate() {
    return (
      (this.x = -this.x),
      (this.y = -this.y),
      (this.z = -this.z),
      (this.w = -this.w),
      this
    );
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
  }
  lengthSq() {
    return (
      this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
    );
  }
  length() {
    return Math.sqrt(
      this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w,
    );
  }
  manhattanLength() {
    return (
      Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
    );
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return (
      (this.x += (e.x - this.x) * t),
      (this.y += (e.y - this.y) * t),
      (this.z += (e.z - this.z) * t),
      (this.w += (e.w - this.w) * t),
      this
    );
  }
  lerpVectors(e, t, n) {
    return (
      (this.x = e.x + (t.x - e.x) * n),
      (this.y = e.y + (t.y - e.y) * n),
      (this.z = e.z + (t.z - e.z) * n),
      (this.w = e.w + (t.w - e.w) * n),
      this
    );
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
  }
  fromArray(e, t = 0) {
    return (
      (this.x = e[t]),
      (this.y = e[t + 1]),
      (this.z = e[t + 2]),
      (this.w = e[t + 3]),
      this
    );
  }
  toArray(e = [], t = 0) {
    return (
      (e[t] = this.x),
      (e[t + 1] = this.y),
      (e[t + 2] = this.z),
      (e[t + 3] = this.w),
      e
    );
  }
  fromBufferAttribute(e, t) {
    return (
      (this.x = e.getX(t)),
      (this.y = e.getY(t)),
      (this.z = e.getZ(t)),
      (this.w = e.getW(t)),
      this
    );
  }
  random() {
    return (
      (this.x = Math.random()),
      (this.y = Math.random()),
      (this.z = Math.random()),
      (this.w = Math.random()),
      this
    );
  }
  *[Symbol.iterator]() {
    (yield this.x, yield this.y, yield this.z, yield this.w);
  }
}
class l_ extends Li {
  constructor(e = 1, t = 1, n = {}) {
    (super(),
      (n = Object.assign(
        {
          generateMipmaps: !1,
          internalFormat: null,
          minFilter: Dn,
          depthBuffer: !0,
          stencilBuffer: !1,
          resolveDepthBuffer: !0,
          resolveStencilBuffer: !0,
          depthTexture: null,
          samples: 0,
          count: 1,
          depth: 1,
          multiview: !1,
        },
        n,
      )),
      (this.isRenderTarget = !0),
      (this.width = e),
      (this.height = t),
      (this.depth = n.depth),
      (this.scissor = new It(0, 0, e, t)),
      (this.scissorTest = !1),
      (this.viewport = new It(0, 0, e, t)));
    const a = { width: e, height: t, depth: n.depth },
      o = new rn(a);
    this.textures = [];
    const u = n.count;
    for (let h = 0; h < u; h++)
      ((this.textures[h] = o.clone()),
        (this.textures[h].isRenderTargetTexture = !0),
        (this.textures[h].renderTarget = this));
    (this._setTextureOptions(n),
      (this.depthBuffer = n.depthBuffer),
      (this.stencilBuffer = n.stencilBuffer),
      (this.resolveDepthBuffer = n.resolveDepthBuffer),
      (this.resolveStencilBuffer = n.resolveStencilBuffer),
      (this._depthTexture = null),
      (this.depthTexture = n.depthTexture),
      (this.samples = n.samples),
      (this.multiview = n.multiview));
  }
  _setTextureOptions(e = {}) {
    const t = {
      minFilter: Dn,
      generateMipmaps: !1,
      flipY: !1,
      internalFormat: null,
    };
    (e.mapping !== void 0 && (t.mapping = e.mapping),
      e.wrapS !== void 0 && (t.wrapS = e.wrapS),
      e.wrapT !== void 0 && (t.wrapT = e.wrapT),
      e.wrapR !== void 0 && (t.wrapR = e.wrapR),
      e.magFilter !== void 0 && (t.magFilter = e.magFilter),
      e.minFilter !== void 0 && (t.minFilter = e.minFilter),
      e.format !== void 0 && (t.format = e.format),
      e.type !== void 0 && (t.type = e.type),
      e.anisotropy !== void 0 && (t.anisotropy = e.anisotropy),
      e.colorSpace !== void 0 && (t.colorSpace = e.colorSpace),
      e.flipY !== void 0 && (t.flipY = e.flipY),
      e.generateMipmaps !== void 0 && (t.generateMipmaps = e.generateMipmaps),
      e.internalFormat !== void 0 && (t.internalFormat = e.internalFormat));
    for (let n = 0; n < this.textures.length; n++)
      this.textures[n].setValues(t);
  }
  get texture() {
    return this.textures[0];
  }
  set texture(e) {
    this.textures[0] = e;
  }
  set depthTexture(e) {
    (this._depthTexture !== null && (this._depthTexture.renderTarget = null),
      e !== null && (e.renderTarget = this),
      (this._depthTexture = e));
  }
  get depthTexture() {
    return this._depthTexture;
  }
  setSize(e, t, n = 1) {
    if (this.width !== e || this.height !== t || this.depth !== n) {
      ((this.width = e), (this.height = t), (this.depth = n));
      for (let a = 0, o = this.textures.length; a < o; a++)
        ((this.textures[a].image.width = e),
          (this.textures[a].image.height = t),
          (this.textures[a].image.depth = n),
          (this.textures[a].isArrayTexture = this.textures[a].image.depth > 1));
      this.dispose();
    }
    (this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t));
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    ((this.width = e.width),
      (this.height = e.height),
      (this.depth = e.depth),
      this.scissor.copy(e.scissor),
      (this.scissorTest = e.scissorTest),
      this.viewport.copy(e.viewport),
      (this.textures.length = 0));
    for (let t = 0, n = e.textures.length; t < n; t++) {
      ((this.textures[t] = e.textures[t].clone()),
        (this.textures[t].isRenderTargetTexture = !0),
        (this.textures[t].renderTarget = this));
      const a = Object.assign({}, e.textures[t].image);
      this.textures[t].source = new Co(a);
    }
    return (
      (this.depthBuffer = e.depthBuffer),
      (this.stencilBuffer = e.stencilBuffer),
      (this.resolveDepthBuffer = e.resolveDepthBuffer),
      (this.resolveStencilBuffer = e.resolveStencilBuffer),
      e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()),
      (this.samples = e.samples),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class Pi extends l_ {
  constructor(e = 1, t = 1, n = {}) {
    (super(e, t, n), (this.isWebGLRenderTarget = !0));
  }
}
class Gc extends rn {
  constructor(e = null, t = 1, n = 1, a = 1) {
    (super(null),
      (this.isDataArrayTexture = !0),
      (this.image = { data: e, width: t, height: n, depth: a }),
      (this.magFilter = wn),
      (this.minFilter = wn),
      (this.wrapR = bi),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1),
      (this.layerUpdates = new Set()));
  }
  addLayerUpdate(e) {
    this.layerUpdates.add(e);
  }
  clearLayerUpdates() {
    this.layerUpdates.clear();
  }
}
class c_ extends rn {
  constructor(e = null, t = 1, n = 1, a = 1) {
    (super(null),
      (this.isData3DTexture = !0),
      (this.image = { data: e, width: t, height: n, depth: a }),
      (this.magFilter = wn),
      (this.minFilter = wn),
      (this.wrapR = bi),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1));
  }
}
class Cr {
  constructor(
    e = new K(1 / 0, 1 / 0, 1 / 0),
    t = new K(-1 / 0, -1 / 0, -1 / 0),
  ) {
    ((this.isBox3 = !0), (this.min = e), (this.max = t));
  }
  set(e, t) {
    return (this.min.copy(e), this.max.copy(t), this);
  }
  setFromArray(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t += 3)
      this.expandByPoint(En.fromArray(e, t));
    return this;
  }
  setFromBufferAttribute(e) {
    this.makeEmpty();
    for (let t = 0, n = e.count; t < n; t++)
      this.expandByPoint(En.fromBufferAttribute(e, t));
    return this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t++) this.expandByPoint(e[t]);
    return this;
  }
  setFromCenterAndSize(e, t) {
    const n = En.copy(t).multiplyScalar(0.5);
    return (this.min.copy(e).sub(n), this.max.copy(e).add(n), this);
  }
  setFromObject(e, t = !1) {
    return (this.makeEmpty(), this.expandByObject(e, t));
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return (this.min.copy(e.min), this.max.copy(e.max), this);
  }
  makeEmpty() {
    return (
      (this.min.x = this.min.y = this.min.z = 1 / 0),
      (this.max.x = this.max.y = this.max.z = -1 / 0),
      this
    );
  }
  isEmpty() {
    return (
      this.max.x < this.min.x ||
      this.max.y < this.min.y ||
      this.max.z < this.min.z
    );
  }
  getCenter(e) {
    return this.isEmpty()
      ? e.set(0, 0, 0)
      : e.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
  }
  expandByPoint(e) {
    return (this.min.min(e), this.max.max(e), this);
  }
  expandByVector(e) {
    return (this.min.sub(e), this.max.add(e), this);
  }
  expandByScalar(e) {
    return (this.min.addScalar(-e), this.max.addScalar(e), this);
  }
  expandByObject(e, t = !1) {
    e.updateWorldMatrix(!1, !1);
    const n = e.geometry;
    if (n !== void 0) {
      const o = n.getAttribute("position");
      if (t === !0 && o !== void 0 && e.isInstancedMesh !== !0)
        for (let u = 0, h = o.count; u < h; u++)
          (e.isMesh === !0
            ? e.getVertexPosition(u, En)
            : En.fromBufferAttribute(o, u),
            En.applyMatrix4(e.matrixWorld),
            this.expandByPoint(En));
      else
        (e.boundingBox !== void 0
          ? (e.boundingBox === null && e.computeBoundingBox(),
            Qr.copy(e.boundingBox))
          : (n.boundingBox === null && n.computeBoundingBox(),
            Qr.copy(n.boundingBox)),
          Qr.applyMatrix4(e.matrixWorld),
          this.union(Qr));
    }
    const a = e.children;
    for (let o = 0, u = a.length; o < u; o++) this.expandByObject(a[o], t);
    return this;
  }
  containsPoint(e) {
    return (
      e.x >= this.min.x &&
      e.x <= this.max.x &&
      e.y >= this.min.y &&
      e.y <= this.max.y &&
      e.z >= this.min.z &&
      e.z <= this.max.z
    );
  }
  containsBox(e) {
    return (
      this.min.x <= e.min.x &&
      e.max.x <= this.max.x &&
      this.min.y <= e.min.y &&
      e.max.y <= this.max.y &&
      this.min.z <= e.min.z &&
      e.max.z <= this.max.z
    );
  }
  getParameter(e, t) {
    return t.set(
      (e.x - this.min.x) / (this.max.x - this.min.x),
      (e.y - this.min.y) / (this.max.y - this.min.y),
      (e.z - this.min.z) / (this.max.z - this.min.z),
    );
  }
  intersectsBox(e) {
    return (
      e.max.x >= this.min.x &&
      e.min.x <= this.max.x &&
      e.max.y >= this.min.y &&
      e.min.y <= this.max.y &&
      e.max.z >= this.min.z &&
      e.min.z <= this.max.z
    );
  }
  intersectsSphere(e) {
    return (
      this.clampPoint(e.center, En),
      En.distanceToSquared(e.center) <= e.radius * e.radius
    );
  }
  intersectsPlane(e) {
    let t, n;
    return (
      e.normal.x > 0
        ? ((t = e.normal.x * this.min.x), (n = e.normal.x * this.max.x))
        : ((t = e.normal.x * this.max.x), (n = e.normal.x * this.min.x)),
      e.normal.y > 0
        ? ((t += e.normal.y * this.min.y), (n += e.normal.y * this.max.y))
        : ((t += e.normal.y * this.max.y), (n += e.normal.y * this.min.y)),
      e.normal.z > 0
        ? ((t += e.normal.z * this.min.z), (n += e.normal.z * this.max.z))
        : ((t += e.normal.z * this.max.z), (n += e.normal.z * this.min.z)),
      t <= -e.constant && n >= -e.constant
    );
  }
  intersectsTriangle(e) {
    if (this.isEmpty()) return !1;
    (this.getCenter(pr),
      es.subVectors(this.max, pr),
      Ni.subVectors(e.a, pr),
      Oi.subVectors(e.b, pr),
      ki.subVectors(e.c, pr),
      Zn.subVectors(Oi, Ni),
      Jn.subVectors(ki, Oi),
      gi.subVectors(Ni, ki));
    let t = [
      0,
      -Zn.z,
      Zn.y,
      0,
      -Jn.z,
      Jn.y,
      0,
      -gi.z,
      gi.y,
      Zn.z,
      0,
      -Zn.x,
      Jn.z,
      0,
      -Jn.x,
      gi.z,
      0,
      -gi.x,
      -Zn.y,
      Zn.x,
      0,
      -Jn.y,
      Jn.x,
      0,
      -gi.y,
      gi.x,
      0,
    ];
    return !ra(t, Ni, Oi, ki, es) ||
      ((t = [1, 0, 0, 0, 1, 0, 0, 0, 1]), !ra(t, Ni, Oi, ki, es))
      ? !1
      : (ts.crossVectors(Zn, Jn),
        (t = [ts.x, ts.y, ts.z]),
        ra(t, Ni, Oi, ki, es));
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return this.clampPoint(e, En).distanceTo(e);
  }
  getBoundingSphere(e) {
    return (
      this.isEmpty()
        ? e.makeEmpty()
        : (this.getCenter(e.center),
          (e.radius = this.getSize(En).length() * 0.5)),
      e
    );
  }
  intersect(e) {
    return (
      this.min.max(e.min),
      this.max.min(e.max),
      this.isEmpty() && this.makeEmpty(),
      this
    );
  }
  union(e) {
    return (this.min.min(e.min), this.max.max(e.max), this);
  }
  applyMatrix4(e) {
    return this.isEmpty()
      ? this
      : (zn[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e),
        zn[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e),
        zn[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e),
        zn[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e),
        zn[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e),
        zn[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e),
        zn[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e),
        zn[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e),
        this.setFromPoints(zn),
        this);
  }
  translate(e) {
    return (this.min.add(e), this.max.add(e), this);
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
  toJSON() {
    return { min: this.min.toArray(), max: this.max.toArray() };
  }
  fromJSON(e) {
    return (this.min.fromArray(e.min), this.max.fromArray(e.max), this);
  }
}
const zn = [
    new K(),
    new K(),
    new K(),
    new K(),
    new K(),
    new K(),
    new K(),
    new K(),
  ],
  En = new K(),
  Qr = new Cr(),
  Ni = new K(),
  Oi = new K(),
  ki = new K(),
  Zn = new K(),
  Jn = new K(),
  gi = new K(),
  pr = new K(),
  es = new K(),
  ts = new K(),
  vi = new K();
function ra(r, e, t, n, a) {
  for (let o = 0, u = r.length - 3; o <= u; o += 3) {
    vi.fromArray(r, o);
    const h =
        a.x * Math.abs(vi.x) + a.y * Math.abs(vi.y) + a.z * Math.abs(vi.z),
      p = e.dot(vi),
      d = t.dot(vi),
      v = n.dot(vi);
    if (Math.max(-Math.max(p, d, v), Math.min(p, d, v)) > h) return !1;
  }
  return !0;
}
const u_ = new Cr(),
  mr = new K(),
  sa = new K();
class Po {
  constructor(e = new K(), t = -1) {
    ((this.isSphere = !0), (this.center = e), (this.radius = t));
  }
  set(e, t) {
    return (this.center.copy(e), (this.radius = t), this);
  }
  setFromPoints(e, t) {
    const n = this.center;
    t !== void 0 ? n.copy(t) : u_.setFromPoints(e).getCenter(n);
    let a = 0;
    for (let o = 0, u = e.length; o < u; o++)
      a = Math.max(a, n.distanceToSquared(e[o]));
    return ((this.radius = Math.sqrt(a)), this);
  }
  copy(e) {
    return (this.center.copy(e.center), (this.radius = e.radius), this);
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    return (this.center.set(0, 0, 0), (this.radius = -1), this);
  }
  containsPoint(e) {
    return e.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(e) {
    return e.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(e) {
    const t = this.radius + e.radius;
    return e.center.distanceToSquared(this.center) <= t * t;
  }
  intersectsBox(e) {
    return e.intersectsSphere(this);
  }
  intersectsPlane(e) {
    return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(e, t) {
    const n = this.center.distanceToSquared(e);
    return (
      t.copy(e),
      n > this.radius * this.radius &&
        (t.sub(this.center).normalize(),
        t.multiplyScalar(this.radius).add(this.center)),
      t
    );
  }
  getBoundingBox(e) {
    return this.isEmpty()
      ? (e.makeEmpty(), e)
      : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
  }
  applyMatrix4(e) {
    return (
      this.center.applyMatrix4(e),
      (this.radius = this.radius * e.getMaxScaleOnAxis()),
      this
    );
  }
  translate(e) {
    return (this.center.add(e), this);
  }
  expandByPoint(e) {
    if (this.isEmpty()) return (this.center.copy(e), (this.radius = 0), this);
    mr.subVectors(e, this.center);
    const t = mr.lengthSq();
    if (t > this.radius * this.radius) {
      const n = Math.sqrt(t),
        a = (n - this.radius) * 0.5;
      (this.center.addScaledVector(mr, a / n), (this.radius += a));
    }
    return this;
  }
  union(e) {
    return e.isEmpty()
      ? this
      : this.isEmpty()
        ? (this.copy(e), this)
        : (this.center.equals(e.center) === !0
            ? (this.radius = Math.max(this.radius, e.radius))
            : (sa.subVectors(e.center, this.center).setLength(e.radius),
              this.expandByPoint(mr.copy(e.center).add(sa)),
              this.expandByPoint(mr.copy(e.center).sub(sa))),
          this);
  }
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    return { radius: this.radius, center: this.center.toArray() };
  }
  fromJSON(e) {
    return ((this.radius = e.radius), this.center.fromArray(e.center), this);
  }
}
const Hn = new K(),
  aa = new K(),
  ns = new K(),
  Qn = new K(),
  oa = new K(),
  is = new K(),
  la = new K();
class Wc {
  constructor(e = new K(), t = new K(0, 0, -1)) {
    ((this.origin = e), (this.direction = t));
  }
  set(e, t) {
    return (this.origin.copy(e), this.direction.copy(t), this);
  }
  copy(e) {
    return (this.origin.copy(e.origin), this.direction.copy(e.direction), this);
  }
  at(e, t) {
    return t.copy(this.origin).addScaledVector(this.direction, e);
  }
  lookAt(e) {
    return (this.direction.copy(e).sub(this.origin).normalize(), this);
  }
  recast(e) {
    return (this.origin.copy(this.at(e, Hn)), this);
  }
  closestPointToPoint(e, t) {
    t.subVectors(e, this.origin);
    const n = t.dot(this.direction);
    return n < 0
      ? t.copy(this.origin)
      : t.copy(this.origin).addScaledVector(this.direction, n);
  }
  distanceToPoint(e) {
    return Math.sqrt(this.distanceSqToPoint(e));
  }
  distanceSqToPoint(e) {
    const t = Hn.subVectors(e, this.origin).dot(this.direction);
    return t < 0
      ? this.origin.distanceToSquared(e)
      : (Hn.copy(this.origin).addScaledVector(this.direction, t),
        Hn.distanceToSquared(e));
  }
  distanceSqToSegment(e, t, n, a) {
    (aa.copy(e).add(t).multiplyScalar(0.5),
      ns.copy(t).sub(e).normalize(),
      Qn.copy(this.origin).sub(aa));
    const o = e.distanceTo(t) * 0.5,
      u = -this.direction.dot(ns),
      h = Qn.dot(this.direction),
      p = -Qn.dot(ns),
      d = Qn.lengthSq(),
      v = Math.abs(1 - u * u);
    let _, x, y, R;
    if (v > 0)
      if (((_ = u * p - h), (x = u * h - p), (R = o * v), _ >= 0))
        if (x >= -R)
          if (x <= R) {
            const D = 1 / v;
            ((_ *= D),
              (x *= D),
              (y = _ * (_ + u * x + 2 * h) + x * (u * _ + x + 2 * p) + d));
          } else
            ((x = o),
              (_ = Math.max(0, -(u * x + h))),
              (y = -_ * _ + x * (x + 2 * p) + d));
        else
          ((x = -o),
            (_ = Math.max(0, -(u * x + h))),
            (y = -_ * _ + x * (x + 2 * p) + d));
      else
        x <= -R
          ? ((_ = Math.max(0, -(-u * o + h))),
            (x = _ > 0 ? -o : Math.min(Math.max(-o, -p), o)),
            (y = -_ * _ + x * (x + 2 * p) + d))
          : x <= R
            ? ((_ = 0),
              (x = Math.min(Math.max(-o, -p), o)),
              (y = x * (x + 2 * p) + d))
            : ((_ = Math.max(0, -(u * o + h))),
              (x = _ > 0 ? o : Math.min(Math.max(-o, -p), o)),
              (y = -_ * _ + x * (x + 2 * p) + d));
    else
      ((x = u > 0 ? -o : o),
        (_ = Math.max(0, -(u * x + h))),
        (y = -_ * _ + x * (x + 2 * p) + d));
    return (
      n && n.copy(this.origin).addScaledVector(this.direction, _),
      a && a.copy(aa).addScaledVector(ns, x),
      y
    );
  }
  intersectSphere(e, t) {
    Hn.subVectors(e.center, this.origin);
    const n = Hn.dot(this.direction),
      a = Hn.dot(Hn) - n * n,
      o = e.radius * e.radius;
    if (a > o) return null;
    const u = Math.sqrt(o - a),
      h = n - u,
      p = n + u;
    return p < 0 ? null : h < 0 ? this.at(p, t) : this.at(h, t);
  }
  intersectsSphere(e) {
    return e.radius < 0
      ? !1
      : this.distanceSqToPoint(e.center) <= e.radius * e.radius;
  }
  distanceToPlane(e) {
    const t = e.normal.dot(this.direction);
    if (t === 0) return e.distanceToPoint(this.origin) === 0 ? 0 : null;
    const n = -(this.origin.dot(e.normal) + e.constant) / t;
    return n >= 0 ? n : null;
  }
  intersectPlane(e, t) {
    const n = this.distanceToPlane(e);
    return n === null ? null : this.at(n, t);
  }
  intersectsPlane(e) {
    const t = e.distanceToPoint(this.origin);
    return t === 0 || e.normal.dot(this.direction) * t < 0;
  }
  intersectBox(e, t) {
    let n, a, o, u, h, p;
    const d = 1 / this.direction.x,
      v = 1 / this.direction.y,
      _ = 1 / this.direction.z,
      x = this.origin;
    return (
      d >= 0
        ? ((n = (e.min.x - x.x) * d), (a = (e.max.x - x.x) * d))
        : ((n = (e.max.x - x.x) * d), (a = (e.min.x - x.x) * d)),
      v >= 0
        ? ((o = (e.min.y - x.y) * v), (u = (e.max.y - x.y) * v))
        : ((o = (e.max.y - x.y) * v), (u = (e.min.y - x.y) * v)),
      n > u ||
      o > a ||
      ((o > n || isNaN(n)) && (n = o),
      (u < a || isNaN(a)) && (a = u),
      _ >= 0
        ? ((h = (e.min.z - x.z) * _), (p = (e.max.z - x.z) * _))
        : ((h = (e.max.z - x.z) * _), (p = (e.min.z - x.z) * _)),
      n > p || h > a) ||
      ((h > n || n !== n) && (n = h), (p < a || a !== a) && (a = p), a < 0)
        ? null
        : this.at(n >= 0 ? n : a, t)
    );
  }
  intersectsBox(e) {
    return this.intersectBox(e, Hn) !== null;
  }
  intersectTriangle(e, t, n, a, o) {
    (oa.subVectors(t, e), is.subVectors(n, e), la.crossVectors(oa, is));
    let u = this.direction.dot(la),
      h;
    if (u > 0) {
      if (a) return null;
      h = 1;
    } else if (u < 0) ((h = -1), (u = -u));
    else return null;
    Qn.subVectors(this.origin, e);
    const p = h * this.direction.dot(is.crossVectors(Qn, is));
    if (p < 0) return null;
    const d = h * this.direction.dot(oa.cross(Qn));
    if (d < 0 || p + d > u) return null;
    const v = -h * Qn.dot(la);
    return v < 0 ? null : this.at(v / u, o);
  }
  applyMatrix4(e) {
    return (
      this.origin.applyMatrix4(e),
      this.direction.transformDirection(e),
      this
    );
  }
  equals(e) {
    return e.origin.equals(this.origin) && e.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class Ut {
  constructor(e, t, n, a, o, u, h, p, d, v, _, x, y, R, D, E) {
    ((Ut.prototype.isMatrix4 = !0),
      (this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]),
      e !== void 0 && this.set(e, t, n, a, o, u, h, p, d, v, _, x, y, R, D, E));
  }
  set(e, t, n, a, o, u, h, p, d, v, _, x, y, R, D, E) {
    const m = this.elements;
    return (
      (m[0] = e),
      (m[4] = t),
      (m[8] = n),
      (m[12] = a),
      (m[1] = o),
      (m[5] = u),
      (m[9] = h),
      (m[13] = p),
      (m[2] = d),
      (m[6] = v),
      (m[10] = _),
      (m[14] = x),
      (m[3] = y),
      (m[7] = R),
      (m[11] = D),
      (m[15] = E),
      this
    );
  }
  identity() {
    return (this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this);
  }
  clone() {
    return new Ut().fromArray(this.elements);
  }
  copy(e) {
    const t = this.elements,
      n = e.elements;
    return (
      (t[0] = n[0]),
      (t[1] = n[1]),
      (t[2] = n[2]),
      (t[3] = n[3]),
      (t[4] = n[4]),
      (t[5] = n[5]),
      (t[6] = n[6]),
      (t[7] = n[7]),
      (t[8] = n[8]),
      (t[9] = n[9]),
      (t[10] = n[10]),
      (t[11] = n[11]),
      (t[12] = n[12]),
      (t[13] = n[13]),
      (t[14] = n[14]),
      (t[15] = n[15]),
      this
    );
  }
  copyPosition(e) {
    const t = this.elements,
      n = e.elements;
    return ((t[12] = n[12]), (t[13] = n[13]), (t[14] = n[14]), this);
  }
  setFromMatrix3(e) {
    const t = e.elements;
    return (
      this.set(
        t[0],
        t[3],
        t[6],
        0,
        t[1],
        t[4],
        t[7],
        0,
        t[2],
        t[5],
        t[8],
        0,
        0,
        0,
        0,
        1,
      ),
      this
    );
  }
  extractBasis(e, t, n) {
    return (
      e.setFromMatrixColumn(this, 0),
      t.setFromMatrixColumn(this, 1),
      n.setFromMatrixColumn(this, 2),
      this
    );
  }
  makeBasis(e, t, n) {
    return (
      this.set(
        e.x,
        t.x,
        n.x,
        0,
        e.y,
        t.y,
        n.y,
        0,
        e.z,
        t.z,
        n.z,
        0,
        0,
        0,
        0,
        1,
      ),
      this
    );
  }
  extractRotation(e) {
    const t = this.elements,
      n = e.elements,
      a = 1 / Bi.setFromMatrixColumn(e, 0).length(),
      o = 1 / Bi.setFromMatrixColumn(e, 1).length(),
      u = 1 / Bi.setFromMatrixColumn(e, 2).length();
    return (
      (t[0] = n[0] * a),
      (t[1] = n[1] * a),
      (t[2] = n[2] * a),
      (t[3] = 0),
      (t[4] = n[4] * o),
      (t[5] = n[5] * o),
      (t[6] = n[6] * o),
      (t[7] = 0),
      (t[8] = n[8] * u),
      (t[9] = n[9] * u),
      (t[10] = n[10] * u),
      (t[11] = 0),
      (t[12] = 0),
      (t[13] = 0),
      (t[14] = 0),
      (t[15] = 1),
      this
    );
  }
  makeRotationFromEuler(e) {
    const t = this.elements,
      n = e.x,
      a = e.y,
      o = e.z,
      u = Math.cos(n),
      h = Math.sin(n),
      p = Math.cos(a),
      d = Math.sin(a),
      v = Math.cos(o),
      _ = Math.sin(o);
    if (e.order === "XYZ") {
      const x = u * v,
        y = u * _,
        R = h * v,
        D = h * _;
      ((t[0] = p * v),
        (t[4] = -p * _),
        (t[8] = d),
        (t[1] = y + R * d),
        (t[5] = x - D * d),
        (t[9] = -h * p),
        (t[2] = D - x * d),
        (t[6] = R + y * d),
        (t[10] = u * p));
    } else if (e.order === "YXZ") {
      const x = p * v,
        y = p * _,
        R = d * v,
        D = d * _;
      ((t[0] = x + D * h),
        (t[4] = R * h - y),
        (t[8] = u * d),
        (t[1] = u * _),
        (t[5] = u * v),
        (t[9] = -h),
        (t[2] = y * h - R),
        (t[6] = D + x * h),
        (t[10] = u * p));
    } else if (e.order === "ZXY") {
      const x = p * v,
        y = p * _,
        R = d * v,
        D = d * _;
      ((t[0] = x - D * h),
        (t[4] = -u * _),
        (t[8] = R + y * h),
        (t[1] = y + R * h),
        (t[5] = u * v),
        (t[9] = D - x * h),
        (t[2] = -u * d),
        (t[6] = h),
        (t[10] = u * p));
    } else if (e.order === "ZYX") {
      const x = u * v,
        y = u * _,
        R = h * v,
        D = h * _;
      ((t[0] = p * v),
        (t[4] = R * d - y),
        (t[8] = x * d + D),
        (t[1] = p * _),
        (t[5] = D * d + x),
        (t[9] = y * d - R),
        (t[2] = -d),
        (t[6] = h * p),
        (t[10] = u * p));
    } else if (e.order === "YZX") {
      const x = u * p,
        y = u * d,
        R = h * p,
        D = h * d;
      ((t[0] = p * v),
        (t[4] = D - x * _),
        (t[8] = R * _ + y),
        (t[1] = _),
        (t[5] = u * v),
        (t[9] = -h * v),
        (t[2] = -d * v),
        (t[6] = y * _ + R),
        (t[10] = x - D * _));
    } else if (e.order === "XZY") {
      const x = u * p,
        y = u * d,
        R = h * p,
        D = h * d;
      ((t[0] = p * v),
        (t[4] = -_),
        (t[8] = d * v),
        (t[1] = x * _ + D),
        (t[5] = u * v),
        (t[9] = y * _ - R),
        (t[2] = R * _ - y),
        (t[6] = h * v),
        (t[10] = D * _ + x));
    }
    return (
      (t[3] = 0),
      (t[7] = 0),
      (t[11] = 0),
      (t[12] = 0),
      (t[13] = 0),
      (t[14] = 0),
      (t[15] = 1),
      this
    );
  }
  makeRotationFromQuaternion(e) {
    return this.compose(h_, e, f_);
  }
  lookAt(e, t, n) {
    const a = this.elements;
    return (
      un.subVectors(e, t),
      un.lengthSq() === 0 && (un.z = 1),
      un.normalize(),
      ei.crossVectors(n, un),
      ei.lengthSq() === 0 &&
        (Math.abs(n.z) === 1 ? (un.x += 1e-4) : (un.z += 1e-4),
        un.normalize(),
        ei.crossVectors(n, un)),
      ei.normalize(),
      rs.crossVectors(un, ei),
      (a[0] = ei.x),
      (a[4] = rs.x),
      (a[8] = un.x),
      (a[1] = ei.y),
      (a[5] = rs.y),
      (a[9] = un.y),
      (a[2] = ei.z),
      (a[6] = rs.z),
      (a[10] = un.z),
      this
    );
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements,
      a = t.elements,
      o = this.elements,
      u = n[0],
      h = n[4],
      p = n[8],
      d = n[12],
      v = n[1],
      _ = n[5],
      x = n[9],
      y = n[13],
      R = n[2],
      D = n[6],
      E = n[10],
      m = n[14],
      N = n[3],
      U = n[7],
      L = n[11],
      k = n[15],
      P = a[0],
      H = a[4],
      q = a[8],
      C = a[12],
      M = a[1],
      z = a[5],
      Y = a[9],
      te = a[13],
      J = a[2],
      he = a[6],
      ae = a[10],
      ie = a[14],
      Q = a[3],
      Ee = a[7],
      we = a[11],
      Re = a[15];
    return (
      (o[0] = u * P + h * M + p * J + d * Q),
      (o[4] = u * H + h * z + p * he + d * Ee),
      (o[8] = u * q + h * Y + p * ae + d * we),
      (o[12] = u * C + h * te + p * ie + d * Re),
      (o[1] = v * P + _ * M + x * J + y * Q),
      (o[5] = v * H + _ * z + x * he + y * Ee),
      (o[9] = v * q + _ * Y + x * ae + y * we),
      (o[13] = v * C + _ * te + x * ie + y * Re),
      (o[2] = R * P + D * M + E * J + m * Q),
      (o[6] = R * H + D * z + E * he + m * Ee),
      (o[10] = R * q + D * Y + E * ae + m * we),
      (o[14] = R * C + D * te + E * ie + m * Re),
      (o[3] = N * P + U * M + L * J + k * Q),
      (o[7] = N * H + U * z + L * he + k * Ee),
      (o[11] = N * q + U * Y + L * ae + k * we),
      (o[15] = N * C + U * te + L * ie + k * Re),
      this
    );
  }
  multiplyScalar(e) {
    const t = this.elements;
    return (
      (t[0] *= e),
      (t[4] *= e),
      (t[8] *= e),
      (t[12] *= e),
      (t[1] *= e),
      (t[5] *= e),
      (t[9] *= e),
      (t[13] *= e),
      (t[2] *= e),
      (t[6] *= e),
      (t[10] *= e),
      (t[14] *= e),
      (t[3] *= e),
      (t[7] *= e),
      (t[11] *= e),
      (t[15] *= e),
      this
    );
  }
  determinant() {
    const e = this.elements,
      t = e[0],
      n = e[4],
      a = e[8],
      o = e[12],
      u = e[1],
      h = e[5],
      p = e[9],
      d = e[13],
      v = e[2],
      _ = e[6],
      x = e[10],
      y = e[14],
      R = e[3],
      D = e[7],
      E = e[11],
      m = e[15];
    return (
      R *
        (+o * p * _ -
          a * d * _ -
          o * h * x +
          n * d * x +
          a * h * y -
          n * p * y) +
      D *
        (+t * p * y -
          t * d * x +
          o * u * x -
          a * u * y +
          a * d * v -
          o * p * v) +
      E *
        (+t * d * _ -
          t * h * y -
          o * u * _ +
          n * u * y +
          o * h * v -
          n * d * v) +
      m *
        (-a * h * v - t * p * _ + t * h * x + a * u * _ - n * u * x + n * p * v)
    );
  }
  transpose() {
    const e = this.elements;
    let t;
    return (
      (t = e[1]),
      (e[1] = e[4]),
      (e[4] = t),
      (t = e[2]),
      (e[2] = e[8]),
      (e[8] = t),
      (t = e[6]),
      (e[6] = e[9]),
      (e[9] = t),
      (t = e[3]),
      (e[3] = e[12]),
      (e[12] = t),
      (t = e[7]),
      (e[7] = e[13]),
      (e[13] = t),
      (t = e[11]),
      (e[11] = e[14]),
      (e[14] = t),
      this
    );
  }
  setPosition(e, t, n) {
    const a = this.elements;
    return (
      e.isVector3
        ? ((a[12] = e.x), (a[13] = e.y), (a[14] = e.z))
        : ((a[12] = e), (a[13] = t), (a[14] = n)),
      this
    );
  }
  invert() {
    const e = this.elements,
      t = e[0],
      n = e[1],
      a = e[2],
      o = e[3],
      u = e[4],
      h = e[5],
      p = e[6],
      d = e[7],
      v = e[8],
      _ = e[9],
      x = e[10],
      y = e[11],
      R = e[12],
      D = e[13],
      E = e[14],
      m = e[15],
      N = _ * E * d - D * x * d + D * p * y - h * E * y - _ * p * m + h * x * m,
      U = R * x * d - v * E * d - R * p * y + u * E * y + v * p * m - u * x * m,
      L = v * D * d - R * _ * d + R * h * y - u * D * y - v * h * m + u * _ * m,
      k = R * _ * p - v * D * p - R * h * x + u * D * x + v * h * E - u * _ * E,
      P = t * N + n * U + a * L + o * k;
    if (P === 0)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const H = 1 / P;
    return (
      (e[0] = N * H),
      (e[1] =
        (D * x * o -
          _ * E * o -
          D * a * y +
          n * E * y +
          _ * a * m -
          n * x * m) *
        H),
      (e[2] =
        (h * E * o -
          D * p * o +
          D * a * d -
          n * E * d -
          h * a * m +
          n * p * m) *
        H),
      (e[3] =
        (_ * p * o -
          h * x * o -
          _ * a * d +
          n * x * d +
          h * a * y -
          n * p * y) *
        H),
      (e[4] = U * H),
      (e[5] =
        (v * E * o -
          R * x * o +
          R * a * y -
          t * E * y -
          v * a * m +
          t * x * m) *
        H),
      (e[6] =
        (R * p * o -
          u * E * o -
          R * a * d +
          t * E * d +
          u * a * m -
          t * p * m) *
        H),
      (e[7] =
        (u * x * o -
          v * p * o +
          v * a * d -
          t * x * d -
          u * a * y +
          t * p * y) *
        H),
      (e[8] = L * H),
      (e[9] =
        (R * _ * o -
          v * D * o -
          R * n * y +
          t * D * y +
          v * n * m -
          t * _ * m) *
        H),
      (e[10] =
        (u * D * o -
          R * h * o +
          R * n * d -
          t * D * d -
          u * n * m +
          t * h * m) *
        H),
      (e[11] =
        (v * h * o -
          u * _ * o -
          v * n * d +
          t * _ * d +
          u * n * y -
          t * h * y) *
        H),
      (e[12] = k * H),
      (e[13] =
        (v * D * a -
          R * _ * a +
          R * n * x -
          t * D * x -
          v * n * E +
          t * _ * E) *
        H),
      (e[14] =
        (R * h * a -
          u * D * a -
          R * n * p +
          t * D * p +
          u * n * E -
          t * h * E) *
        H),
      (e[15] =
        (u * _ * a -
          v * h * a +
          v * n * p -
          t * _ * p -
          u * n * x +
          t * h * x) *
        H),
      this
    );
  }
  scale(e) {
    const t = this.elements,
      n = e.x,
      a = e.y,
      o = e.z;
    return (
      (t[0] *= n),
      (t[4] *= a),
      (t[8] *= o),
      (t[1] *= n),
      (t[5] *= a),
      (t[9] *= o),
      (t[2] *= n),
      (t[6] *= a),
      (t[10] *= o),
      (t[3] *= n),
      (t[7] *= a),
      (t[11] *= o),
      this
    );
  }
  getMaxScaleOnAxis() {
    const e = this.elements,
      t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2],
      n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6],
      a = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
    return Math.sqrt(Math.max(t, n, a));
  }
  makeTranslation(e, t, n) {
    return (
      e.isVector3
        ? this.set(1, 0, 0, e.x, 0, 1, 0, e.y, 0, 0, 1, e.z, 0, 0, 0, 1)
        : this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, n, 0, 0, 0, 1),
      this
    );
  }
  makeRotationX(e) {
    const t = Math.cos(e),
      n = Math.sin(e);
    return (this.set(1, 0, 0, 0, 0, t, -n, 0, 0, n, t, 0, 0, 0, 0, 1), this);
  }
  makeRotationY(e) {
    const t = Math.cos(e),
      n = Math.sin(e);
    return (this.set(t, 0, n, 0, 0, 1, 0, 0, -n, 0, t, 0, 0, 0, 0, 1), this);
  }
  makeRotationZ(e) {
    const t = Math.cos(e),
      n = Math.sin(e);
    return (this.set(t, -n, 0, 0, n, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this);
  }
  makeRotationAxis(e, t) {
    const n = Math.cos(t),
      a = Math.sin(t),
      o = 1 - n,
      u = e.x,
      h = e.y,
      p = e.z,
      d = o * u,
      v = o * h;
    return (
      this.set(
        d * u + n,
        d * h - a * p,
        d * p + a * h,
        0,
        d * h + a * p,
        v * h + n,
        v * p - a * u,
        0,
        d * p - a * h,
        v * p + a * u,
        o * p * p + n,
        0,
        0,
        0,
        0,
        1,
      ),
      this
    );
  }
  makeScale(e, t, n) {
    return (this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this);
  }
  makeShear(e, t, n, a, o, u) {
    return (this.set(1, n, o, 0, e, 1, u, 0, t, a, 1, 0, 0, 0, 0, 1), this);
  }
  compose(e, t, n) {
    const a = this.elements,
      o = t._x,
      u = t._y,
      h = t._z,
      p = t._w,
      d = o + o,
      v = u + u,
      _ = h + h,
      x = o * d,
      y = o * v,
      R = o * _,
      D = u * v,
      E = u * _,
      m = h * _,
      N = p * d,
      U = p * v,
      L = p * _,
      k = n.x,
      P = n.y,
      H = n.z;
    return (
      (a[0] = (1 - (D + m)) * k),
      (a[1] = (y + L) * k),
      (a[2] = (R - U) * k),
      (a[3] = 0),
      (a[4] = (y - L) * P),
      (a[5] = (1 - (x + m)) * P),
      (a[6] = (E + N) * P),
      (a[7] = 0),
      (a[8] = (R + U) * H),
      (a[9] = (E - N) * H),
      (a[10] = (1 - (x + D)) * H),
      (a[11] = 0),
      (a[12] = e.x),
      (a[13] = e.y),
      (a[14] = e.z),
      (a[15] = 1),
      this
    );
  }
  decompose(e, t, n) {
    const a = this.elements;
    let o = Bi.set(a[0], a[1], a[2]).length();
    const u = Bi.set(a[4], a[5], a[6]).length(),
      h = Bi.set(a[8], a[9], a[10]).length();
    (this.determinant() < 0 && (o = -o),
      (e.x = a[12]),
      (e.y = a[13]),
      (e.z = a[14]),
      Sn.copy(this));
    const d = 1 / o,
      v = 1 / u,
      _ = 1 / h;
    return (
      (Sn.elements[0] *= d),
      (Sn.elements[1] *= d),
      (Sn.elements[2] *= d),
      (Sn.elements[4] *= v),
      (Sn.elements[5] *= v),
      (Sn.elements[6] *= v),
      (Sn.elements[8] *= _),
      (Sn.elements[9] *= _),
      (Sn.elements[10] *= _),
      t.setFromRotationMatrix(Sn),
      (n.x = o),
      (n.y = u),
      (n.z = h),
      this
    );
  }
  makePerspective(e, t, n, a, o, u, h = Ln, p = !1) {
    const d = this.elements,
      v = (2 * o) / (t - e),
      _ = (2 * o) / (n - a),
      x = (t + e) / (t - e),
      y = (n + a) / (n - a);
    let R, D;
    if (p) ((R = o / (u - o)), (D = (u * o) / (u - o)));
    else if (h === Ln) ((R = -(u + o) / (u - o)), (D = (-2 * u * o) / (u - o)));
    else if (h === Rs) ((R = -u / (u - o)), (D = (-u * o) / (u - o)));
    else
      throw new Error(
        "THREE.Matrix4.makePerspective(): Invalid coordinate system: " + h,
      );
    return (
      (d[0] = v),
      (d[4] = 0),
      (d[8] = x),
      (d[12] = 0),
      (d[1] = 0),
      (d[5] = _),
      (d[9] = y),
      (d[13] = 0),
      (d[2] = 0),
      (d[6] = 0),
      (d[10] = R),
      (d[14] = D),
      (d[3] = 0),
      (d[7] = 0),
      (d[11] = -1),
      (d[15] = 0),
      this
    );
  }
  makeOrthographic(e, t, n, a, o, u, h = Ln, p = !1) {
    const d = this.elements,
      v = 2 / (t - e),
      _ = 2 / (n - a),
      x = -(t + e) / (t - e),
      y = -(n + a) / (n - a);
    let R, D;
    if (p) ((R = 1 / (u - o)), (D = u / (u - o)));
    else if (h === Ln) ((R = -2 / (u - o)), (D = -(u + o) / (u - o)));
    else if (h === Rs) ((R = -1 / (u - o)), (D = -o / (u - o)));
    else
      throw new Error(
        "THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + h,
      );
    return (
      (d[0] = v),
      (d[4] = 0),
      (d[8] = 0),
      (d[12] = x),
      (d[1] = 0),
      (d[5] = _),
      (d[9] = 0),
      (d[13] = y),
      (d[2] = 0),
      (d[6] = 0),
      (d[10] = R),
      (d[14] = D),
      (d[3] = 0),
      (d[7] = 0),
      (d[11] = 0),
      (d[15] = 1),
      this
    );
  }
  equals(e) {
    const t = this.elements,
      n = e.elements;
    for (let a = 0; a < 16; a++) if (t[a] !== n[a]) return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 16; n++) this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return (
      (e[t] = n[0]),
      (e[t + 1] = n[1]),
      (e[t + 2] = n[2]),
      (e[t + 3] = n[3]),
      (e[t + 4] = n[4]),
      (e[t + 5] = n[5]),
      (e[t + 6] = n[6]),
      (e[t + 7] = n[7]),
      (e[t + 8] = n[8]),
      (e[t + 9] = n[9]),
      (e[t + 10] = n[10]),
      (e[t + 11] = n[11]),
      (e[t + 12] = n[12]),
      (e[t + 13] = n[13]),
      (e[t + 14] = n[14]),
      (e[t + 15] = n[15]),
      e
    );
  }
}
const Bi = new K(),
  Sn = new Ut(),
  h_ = new K(0, 0, 0),
  f_ = new K(1, 1, 1),
  ei = new K(),
  rs = new K(),
  un = new K(),
  Ul = new Ut(),
  Nl = new Ci();
class Un {
  constructor(e = 0, t = 0, n = 0, a = Un.DEFAULT_ORDER) {
    ((this.isEuler = !0),
      (this._x = e),
      (this._y = t),
      (this._z = n),
      (this._order = a));
  }
  get x() {
    return this._x;
  }
  set x(e) {
    ((this._x = e), this._onChangeCallback());
  }
  get y() {
    return this._y;
  }
  set y(e) {
    ((this._y = e), this._onChangeCallback());
  }
  get z() {
    return this._z;
  }
  set z(e) {
    ((this._z = e), this._onChangeCallback());
  }
  get order() {
    return this._order;
  }
  set order(e) {
    ((this._order = e), this._onChangeCallback());
  }
  set(e, t, n, a = this._order) {
    return (
      (this._x = e),
      (this._y = t),
      (this._z = n),
      (this._order = a),
      this._onChangeCallback(),
      this
    );
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(e) {
    return (
      (this._x = e._x),
      (this._y = e._y),
      (this._z = e._z),
      (this._order = e._order),
      this._onChangeCallback(),
      this
    );
  }
  setFromRotationMatrix(e, t = this._order, n = !0) {
    const a = e.elements,
      o = a[0],
      u = a[4],
      h = a[8],
      p = a[1],
      d = a[5],
      v = a[9],
      _ = a[2],
      x = a[6],
      y = a[10];
    switch (t) {
      case "XYZ":
        ((this._y = Math.asin(ut(h, -1, 1))),
          Math.abs(h) < 0.9999999
            ? ((this._x = Math.atan2(-v, y)), (this._z = Math.atan2(-u, o)))
            : ((this._x = Math.atan2(x, d)), (this._z = 0)));
        break;
      case "YXZ":
        ((this._x = Math.asin(-ut(v, -1, 1))),
          Math.abs(v) < 0.9999999
            ? ((this._y = Math.atan2(h, y)), (this._z = Math.atan2(p, d)))
            : ((this._y = Math.atan2(-_, o)), (this._z = 0)));
        break;
      case "ZXY":
        ((this._x = Math.asin(ut(x, -1, 1))),
          Math.abs(x) < 0.9999999
            ? ((this._y = Math.atan2(-_, y)), (this._z = Math.atan2(-u, d)))
            : ((this._y = 0), (this._z = Math.atan2(p, o))));
        break;
      case "ZYX":
        ((this._y = Math.asin(-ut(_, -1, 1))),
          Math.abs(_) < 0.9999999
            ? ((this._x = Math.atan2(x, y)), (this._z = Math.atan2(p, o)))
            : ((this._x = 0), (this._z = Math.atan2(-u, d))));
        break;
      case "YZX":
        ((this._z = Math.asin(ut(p, -1, 1))),
          Math.abs(p) < 0.9999999
            ? ((this._x = Math.atan2(-v, d)), (this._y = Math.atan2(-_, o)))
            : ((this._x = 0), (this._y = Math.atan2(h, y))));
        break;
      case "XZY":
        ((this._z = Math.asin(-ut(u, -1, 1))),
          Math.abs(u) < 0.9999999
            ? ((this._x = Math.atan2(x, d)), (this._y = Math.atan2(h, o)))
            : ((this._x = Math.atan2(-v, y)), (this._y = 0)));
        break;
      default:
        console.warn(
          "THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " +
            t,
        );
    }
    return ((this._order = t), n === !0 && this._onChangeCallback(), this);
  }
  setFromQuaternion(e, t, n) {
    return (
      Ul.makeRotationFromQuaternion(e),
      this.setFromRotationMatrix(Ul, t, n)
    );
  }
  setFromVector3(e, t = this._order) {
    return this.set(e.x, e.y, e.z, t);
  }
  reorder(e) {
    return (Nl.setFromEuler(this), this.setFromQuaternion(Nl, e));
  }
  equals(e) {
    return (
      e._x === this._x &&
      e._y === this._y &&
      e._z === this._z &&
      e._order === this._order
    );
  }
  fromArray(e) {
    return (
      (this._x = e[0]),
      (this._y = e[1]),
      (this._z = e[2]),
      e[3] !== void 0 && (this._order = e[3]),
      this._onChangeCallback(),
      this
    );
  }
  toArray(e = [], t = 0) {
    return (
      (e[t] = this._x),
      (e[t + 1] = this._y),
      (e[t + 2] = this._z),
      (e[t + 3] = this._order),
      e
    );
  }
  _onChange(e) {
    return ((this._onChangeCallback = e), this);
  }
  _onChangeCallback() {}
  *[Symbol.iterator]() {
    (yield this._x, yield this._y, yield this._z, yield this._order);
  }
}
Un.DEFAULT_ORDER = "XYZ";
class Xc {
  constructor() {
    this.mask = 1;
  }
  set(e) {
    this.mask = ((1 << e) | 0) >>> 0;
  }
  enable(e) {
    this.mask |= (1 << e) | 0;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(e) {
    this.mask ^= (1 << e) | 0;
  }
  disable(e) {
    this.mask &= ~((1 << e) | 0);
  }
  disableAll() {
    this.mask = 0;
  }
  test(e) {
    return (this.mask & e.mask) !== 0;
  }
  isEnabled(e) {
    return (this.mask & ((1 << e) | 0)) !== 0;
  }
}
let d_ = 0;
const Ol = new K(),
  zi = new Ci(),
  Vn = new Ut(),
  ss = new K(),
  _r = new K(),
  p_ = new K(),
  m_ = new Ci(),
  kl = new K(1, 0, 0),
  Bl = new K(0, 1, 0),
  zl = new K(0, 0, 1),
  Hl = { type: "added" },
  __ = { type: "removed" },
  Hi = { type: "childadded", child: null },
  ca = { type: "childremoved", child: null };
class qt extends Li {
  constructor() {
    (super(),
      (this.isObject3D = !0),
      Object.defineProperty(this, "id", { value: d_++ }),
      (this.uuid = Rr()),
      (this.name = ""),
      (this.type = "Object3D"),
      (this.parent = null),
      (this.children = []),
      (this.up = qt.DEFAULT_UP.clone()));
    const e = new K(),
      t = new Un(),
      n = new Ci(),
      a = new K(1, 1, 1);
    function o() {
      n.setFromEuler(t, !1);
    }
    function u() {
      t.setFromQuaternion(n, void 0, !1);
    }
    (t._onChange(o),
      n._onChange(u),
      Object.defineProperties(this, {
        position: { configurable: !0, enumerable: !0, value: e },
        rotation: { configurable: !0, enumerable: !0, value: t },
        quaternion: { configurable: !0, enumerable: !0, value: n },
        scale: { configurable: !0, enumerable: !0, value: a },
        modelViewMatrix: { value: new Ut() },
        normalMatrix: { value: new rt() },
      }),
      (this.matrix = new Ut()),
      (this.matrixWorld = new Ut()),
      (this.matrixAutoUpdate = qt.DEFAULT_MATRIX_AUTO_UPDATE),
      (this.matrixWorldAutoUpdate = qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE),
      (this.matrixWorldNeedsUpdate = !1),
      (this.layers = new Xc()),
      (this.visible = !0),
      (this.castShadow = !1),
      (this.receiveShadow = !1),
      (this.frustumCulled = !0),
      (this.renderOrder = 0),
      (this.animations = []),
      (this.customDepthMaterial = void 0),
      (this.customDistanceMaterial = void 0),
      (this.userData = {}));
  }
  onBeforeShadow() {}
  onAfterShadow() {}
  onBeforeRender() {}
  onAfterRender() {}
  applyMatrix4(e) {
    (this.matrixAutoUpdate && this.updateMatrix(),
      this.matrix.premultiply(e),
      this.matrix.decompose(this.position, this.quaternion, this.scale));
  }
  applyQuaternion(e) {
    return (this.quaternion.premultiply(e), this);
  }
  setRotationFromAxisAngle(e, t) {
    this.quaternion.setFromAxisAngle(e, t);
  }
  setRotationFromEuler(e) {
    this.quaternion.setFromEuler(e, !0);
  }
  setRotationFromMatrix(e) {
    this.quaternion.setFromRotationMatrix(e);
  }
  setRotationFromQuaternion(e) {
    this.quaternion.copy(e);
  }
  rotateOnAxis(e, t) {
    return (zi.setFromAxisAngle(e, t), this.quaternion.multiply(zi), this);
  }
  rotateOnWorldAxis(e, t) {
    return (zi.setFromAxisAngle(e, t), this.quaternion.premultiply(zi), this);
  }
  rotateX(e) {
    return this.rotateOnAxis(kl, e);
  }
  rotateY(e) {
    return this.rotateOnAxis(Bl, e);
  }
  rotateZ(e) {
    return this.rotateOnAxis(zl, e);
  }
  translateOnAxis(e, t) {
    return (
      Ol.copy(e).applyQuaternion(this.quaternion),
      this.position.add(Ol.multiplyScalar(t)),
      this
    );
  }
  translateX(e) {
    return this.translateOnAxis(kl, e);
  }
  translateY(e) {
    return this.translateOnAxis(Bl, e);
  }
  translateZ(e) {
    return this.translateOnAxis(zl, e);
  }
  localToWorld(e) {
    return (this.updateWorldMatrix(!0, !1), e.applyMatrix4(this.matrixWorld));
  }
  worldToLocal(e) {
    return (
      this.updateWorldMatrix(!0, !1),
      e.applyMatrix4(Vn.copy(this.matrixWorld).invert())
    );
  }
  lookAt(e, t, n) {
    e.isVector3 ? ss.copy(e) : ss.set(e, t, n);
    const a = this.parent;
    (this.updateWorldMatrix(!0, !1),
      _r.setFromMatrixPosition(this.matrixWorld),
      this.isCamera || this.isLight
        ? Vn.lookAt(_r, ss, this.up)
        : Vn.lookAt(ss, _r, this.up),
      this.quaternion.setFromRotationMatrix(Vn),
      a &&
        (Vn.extractRotation(a.matrixWorld),
        zi.setFromRotationMatrix(Vn),
        this.quaternion.premultiply(zi.invert())));
  }
  add(e) {
    if (arguments.length > 1) {
      for (let t = 0; t < arguments.length; t++) this.add(arguments[t]);
      return this;
    }
    return e === this
      ? (console.error(
          "THREE.Object3D.add: object can't be added as a child of itself.",
          e,
        ),
        this)
      : (e && e.isObject3D
          ? (e.removeFromParent(),
            (e.parent = this),
            this.children.push(e),
            e.dispatchEvent(Hl),
            (Hi.child = e),
            this.dispatchEvent(Hi),
            (Hi.child = null))
          : console.error(
              "THREE.Object3D.add: object not an instance of THREE.Object3D.",
              e,
            ),
        this);
  }
  remove(e) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++) this.remove(arguments[n]);
      return this;
    }
    const t = this.children.indexOf(e);
    return (
      t !== -1 &&
        ((e.parent = null),
        this.children.splice(t, 1),
        e.dispatchEvent(__),
        (ca.child = e),
        this.dispatchEvent(ca),
        (ca.child = null)),
      this
    );
  }
  removeFromParent() {
    const e = this.parent;
    return (e !== null && e.remove(this), this);
  }
  clear() {
    return this.remove(...this.children);
  }
  attach(e) {
    return (
      this.updateWorldMatrix(!0, !1),
      Vn.copy(this.matrixWorld).invert(),
      e.parent !== null &&
        (e.parent.updateWorldMatrix(!0, !1), Vn.multiply(e.parent.matrixWorld)),
      e.applyMatrix4(Vn),
      e.removeFromParent(),
      (e.parent = this),
      this.children.push(e),
      e.updateWorldMatrix(!1, !0),
      e.dispatchEvent(Hl),
      (Hi.child = e),
      this.dispatchEvent(Hi),
      (Hi.child = null),
      this
    );
  }
  getObjectById(e) {
    return this.getObjectByProperty("id", e);
  }
  getObjectByName(e) {
    return this.getObjectByProperty("name", e);
  }
  getObjectByProperty(e, t) {
    if (this[e] === t) return this;
    for (let n = 0, a = this.children.length; n < a; n++) {
      const u = this.children[n].getObjectByProperty(e, t);
      if (u !== void 0) return u;
    }
  }
  getObjectsByProperty(e, t, n = []) {
    this[e] === t && n.push(this);
    const a = this.children;
    for (let o = 0, u = a.length; o < u; o++)
      a[o].getObjectsByProperty(e, t, n);
    return n;
  }
  getWorldPosition(e) {
    return (
      this.updateWorldMatrix(!0, !1),
      e.setFromMatrixPosition(this.matrixWorld)
    );
  }
  getWorldQuaternion(e) {
    return (
      this.updateWorldMatrix(!0, !1),
      this.matrixWorld.decompose(_r, e, p_),
      e
    );
  }
  getWorldScale(e) {
    return (
      this.updateWorldMatrix(!0, !1),
      this.matrixWorld.decompose(_r, m_, e),
      e
    );
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(!0, !1);
    const t = this.matrixWorld.elements;
    return e.set(t[8], t[9], t[10]).normalize();
  }
  raycast() {}
  traverse(e) {
    e(this);
    const t = this.children;
    for (let n = 0, a = t.length; n < a; n++) t[n].traverse(e);
  }
  traverseVisible(e) {
    if (this.visible === !1) return;
    e(this);
    const t = this.children;
    for (let n = 0, a = t.length; n < a; n++) t[n].traverseVisible(e);
  }
  traverseAncestors(e) {
    const t = this.parent;
    t !== null && (e(t), t.traverseAncestors(e));
  }
  updateMatrix() {
    (this.matrix.compose(this.position, this.quaternion, this.scale),
      (this.matrixWorldNeedsUpdate = !0));
  }
  updateMatrixWorld(e) {
    (this.matrixAutoUpdate && this.updateMatrix(),
      (this.matrixWorldNeedsUpdate || e) &&
        (this.matrixWorldAutoUpdate === !0 &&
          (this.parent === null
            ? this.matrixWorld.copy(this.matrix)
            : this.matrixWorld.multiplyMatrices(
                this.parent.matrixWorld,
                this.matrix,
              )),
        (this.matrixWorldNeedsUpdate = !1),
        (e = !0)));
    const t = this.children;
    for (let n = 0, a = t.length; n < a; n++) t[n].updateMatrixWorld(e);
  }
  updateWorldMatrix(e, t) {
    const n = this.parent;
    if (
      (e === !0 && n !== null && n.updateWorldMatrix(!0, !1),
      this.matrixAutoUpdate && this.updateMatrix(),
      this.matrixWorldAutoUpdate === !0 &&
        (this.parent === null
          ? this.matrixWorld.copy(this.matrix)
          : this.matrixWorld.multiplyMatrices(
              this.parent.matrixWorld,
              this.matrix,
            )),
      t === !0)
    ) {
      const a = this.children;
      for (let o = 0, u = a.length; o < u; o++) a[o].updateWorldMatrix(!1, !0);
    }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string",
      n = {};
    t &&
      ((e = {
        geometries: {},
        materials: {},
        textures: {},
        images: {},
        shapes: {},
        skeletons: {},
        animations: {},
        nodes: {},
      }),
      (n.metadata = {
        version: 4.7,
        type: "Object",
        generator: "Object3D.toJSON",
      }));
    const a = {};
    ((a.uuid = this.uuid),
      (a.type = this.type),
      this.name !== "" && (a.name = this.name),
      this.castShadow === !0 && (a.castShadow = !0),
      this.receiveShadow === !0 && (a.receiveShadow = !0),
      this.visible === !1 && (a.visible = !1),
      this.frustumCulled === !1 && (a.frustumCulled = !1),
      this.renderOrder !== 0 && (a.renderOrder = this.renderOrder),
      Object.keys(this.userData).length > 0 && (a.userData = this.userData),
      (a.layers = this.layers.mask),
      (a.matrix = this.matrix.toArray()),
      (a.up = this.up.toArray()),
      this.matrixAutoUpdate === !1 && (a.matrixAutoUpdate = !1),
      this.isInstancedMesh &&
        ((a.type = "InstancedMesh"),
        (a.count = this.count),
        (a.instanceMatrix = this.instanceMatrix.toJSON()),
        this.instanceColor !== null &&
          (a.instanceColor = this.instanceColor.toJSON())),
      this.isBatchedMesh &&
        ((a.type = "BatchedMesh"),
        (a.perObjectFrustumCulled = this.perObjectFrustumCulled),
        (a.sortObjects = this.sortObjects),
        (a.drawRanges = this._drawRanges),
        (a.reservedRanges = this._reservedRanges),
        (a.geometryInfo = this._geometryInfo.map((h) => ({
          ...h,
          boundingBox: h.boundingBox ? h.boundingBox.toJSON() : void 0,
          boundingSphere: h.boundingSphere ? h.boundingSphere.toJSON() : void 0,
        }))),
        (a.instanceInfo = this._instanceInfo.map((h) => ({ ...h }))),
        (a.availableInstanceIds = this._availableInstanceIds.slice()),
        (a.availableGeometryIds = this._availableGeometryIds.slice()),
        (a.nextIndexStart = this._nextIndexStart),
        (a.nextVertexStart = this._nextVertexStart),
        (a.geometryCount = this._geometryCount),
        (a.maxInstanceCount = this._maxInstanceCount),
        (a.maxVertexCount = this._maxVertexCount),
        (a.maxIndexCount = this._maxIndexCount),
        (a.geometryInitialized = this._geometryInitialized),
        (a.matricesTexture = this._matricesTexture.toJSON(e)),
        (a.indirectTexture = this._indirectTexture.toJSON(e)),
        this._colorsTexture !== null &&
          (a.colorsTexture = this._colorsTexture.toJSON(e)),
        this.boundingSphere !== null &&
          (a.boundingSphere = this.boundingSphere.toJSON()),
        this.boundingBox !== null &&
          (a.boundingBox = this.boundingBox.toJSON())));
    function o(h, p) {
      return (h[p.uuid] === void 0 && (h[p.uuid] = p.toJSON(e)), p.uuid);
    }
    if (this.isScene)
      (this.background &&
        (this.background.isColor
          ? (a.background = this.background.toJSON())
          : this.background.isTexture &&
            (a.background = this.background.toJSON(e).uuid)),
        this.environment &&
          this.environment.isTexture &&
          this.environment.isRenderTargetTexture !== !0 &&
          (a.environment = this.environment.toJSON(e).uuid));
    else if (this.isMesh || this.isLine || this.isPoints) {
      a.geometry = o(e.geometries, this.geometry);
      const h = this.geometry.parameters;
      if (h !== void 0 && h.shapes !== void 0) {
        const p = h.shapes;
        if (Array.isArray(p))
          for (let d = 0, v = p.length; d < v; d++) {
            const _ = p[d];
            o(e.shapes, _);
          }
        else o(e.shapes, p);
      }
    }
    if (
      (this.isSkinnedMesh &&
        ((a.bindMode = this.bindMode),
        (a.bindMatrix = this.bindMatrix.toArray()),
        this.skeleton !== void 0 &&
          (o(e.skeletons, this.skeleton), (a.skeleton = this.skeleton.uuid))),
      this.material !== void 0)
    )
      if (Array.isArray(this.material)) {
        const h = [];
        for (let p = 0, d = this.material.length; p < d; p++)
          h.push(o(e.materials, this.material[p]));
        a.material = h;
      } else a.material = o(e.materials, this.material);
    if (this.children.length > 0) {
      a.children = [];
      for (let h = 0; h < this.children.length; h++)
        a.children.push(this.children[h].toJSON(e).object);
    }
    if (this.animations.length > 0) {
      a.animations = [];
      for (let h = 0; h < this.animations.length; h++) {
        const p = this.animations[h];
        a.animations.push(o(e.animations, p));
      }
    }
    if (t) {
      const h = u(e.geometries),
        p = u(e.materials),
        d = u(e.textures),
        v = u(e.images),
        _ = u(e.shapes),
        x = u(e.skeletons),
        y = u(e.animations),
        R = u(e.nodes);
      (h.length > 0 && (n.geometries = h),
        p.length > 0 && (n.materials = p),
        d.length > 0 && (n.textures = d),
        v.length > 0 && (n.images = v),
        _.length > 0 && (n.shapes = _),
        x.length > 0 && (n.skeletons = x),
        y.length > 0 && (n.animations = y),
        R.length > 0 && (n.nodes = R));
    }
    return ((n.object = a), n);
    function u(h) {
      const p = [];
      for (const d in h) {
        const v = h[d];
        (delete v.metadata, p.push(v));
      }
      return p;
    }
  }
  clone(e) {
    return new this.constructor().copy(this, e);
  }
  copy(e, t = !0) {
    if (
      ((this.name = e.name),
      this.up.copy(e.up),
      this.position.copy(e.position),
      (this.rotation.order = e.rotation.order),
      this.quaternion.copy(e.quaternion),
      this.scale.copy(e.scale),
      this.matrix.copy(e.matrix),
      this.matrixWorld.copy(e.matrixWorld),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      (this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate),
      (this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate),
      (this.layers.mask = e.layers.mask),
      (this.visible = e.visible),
      (this.castShadow = e.castShadow),
      (this.receiveShadow = e.receiveShadow),
      (this.frustumCulled = e.frustumCulled),
      (this.renderOrder = e.renderOrder),
      (this.animations = e.animations.slice()),
      (this.userData = JSON.parse(JSON.stringify(e.userData))),
      t === !0)
    )
      for (let n = 0; n < e.children.length; n++) {
        const a = e.children[n];
        this.add(a.clone());
      }
    return this;
  }
}
qt.DEFAULT_UP = new K(0, 1, 0);
qt.DEFAULT_MATRIX_AUTO_UPDATE = !0;
qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
const yn = new K(),
  Gn = new K(),
  ua = new K(),
  Wn = new K(),
  Vi = new K(),
  Gi = new K(),
  Vl = new K(),
  ha = new K(),
  fa = new K(),
  da = new K(),
  pa = new It(),
  ma = new It(),
  _a = new It();
class Mn {
  constructor(e = new K(), t = new K(), n = new K()) {
    ((this.a = e), (this.b = t), (this.c = n));
  }
  static getNormal(e, t, n, a) {
    (a.subVectors(n, t), yn.subVectors(e, t), a.cross(yn));
    const o = a.lengthSq();
    return o > 0 ? a.multiplyScalar(1 / Math.sqrt(o)) : a.set(0, 0, 0);
  }
  static getBarycoord(e, t, n, a, o) {
    (yn.subVectors(a, t), Gn.subVectors(n, t), ua.subVectors(e, t));
    const u = yn.dot(yn),
      h = yn.dot(Gn),
      p = yn.dot(ua),
      d = Gn.dot(Gn),
      v = Gn.dot(ua),
      _ = u * d - h * h;
    if (_ === 0) return (o.set(0, 0, 0), null);
    const x = 1 / _,
      y = (d * p - h * v) * x,
      R = (u * v - h * p) * x;
    return o.set(1 - y - R, R, y);
  }
  static containsPoint(e, t, n, a) {
    return this.getBarycoord(e, t, n, a, Wn) === null
      ? !1
      : Wn.x >= 0 && Wn.y >= 0 && Wn.x + Wn.y <= 1;
  }
  static getInterpolation(e, t, n, a, o, u, h, p) {
    return this.getBarycoord(e, t, n, a, Wn) === null
      ? ((p.x = 0),
        (p.y = 0),
        "z" in p && (p.z = 0),
        "w" in p && (p.w = 0),
        null)
      : (p.setScalar(0),
        p.addScaledVector(o, Wn.x),
        p.addScaledVector(u, Wn.y),
        p.addScaledVector(h, Wn.z),
        p);
  }
  static getInterpolatedAttribute(e, t, n, a, o, u) {
    return (
      pa.setScalar(0),
      ma.setScalar(0),
      _a.setScalar(0),
      pa.fromBufferAttribute(e, t),
      ma.fromBufferAttribute(e, n),
      _a.fromBufferAttribute(e, a),
      u.setScalar(0),
      u.addScaledVector(pa, o.x),
      u.addScaledVector(ma, o.y),
      u.addScaledVector(_a, o.z),
      u
    );
  }
  static isFrontFacing(e, t, n, a) {
    return (yn.subVectors(n, t), Gn.subVectors(e, t), yn.cross(Gn).dot(a) < 0);
  }
  set(e, t, n) {
    return (this.a.copy(e), this.b.copy(t), this.c.copy(n), this);
  }
  setFromPointsAndIndices(e, t, n, a) {
    return (this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[a]), this);
  }
  setFromAttributeAndIndices(e, t, n, a) {
    return (
      this.a.fromBufferAttribute(e, t),
      this.b.fromBufferAttribute(e, n),
      this.c.fromBufferAttribute(e, a),
      this
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return (this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this);
  }
  getArea() {
    return (
      yn.subVectors(this.c, this.b),
      Gn.subVectors(this.a, this.b),
      yn.cross(Gn).length() * 0.5
    );
  }
  getMidpoint(e) {
    return e
      .addVectors(this.a, this.b)
      .add(this.c)
      .multiplyScalar(1 / 3);
  }
  getNormal(e) {
    return Mn.getNormal(this.a, this.b, this.c, e);
  }
  getPlane(e) {
    return e.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(e, t) {
    return Mn.getBarycoord(e, this.a, this.b, this.c, t);
  }
  getInterpolation(e, t, n, a, o) {
    return Mn.getInterpolation(e, this.a, this.b, this.c, t, n, a, o);
  }
  containsPoint(e) {
    return Mn.containsPoint(e, this.a, this.b, this.c);
  }
  isFrontFacing(e) {
    return Mn.isFrontFacing(this.a, this.b, this.c, e);
  }
  intersectsBox(e) {
    return e.intersectsTriangle(this);
  }
  closestPointToPoint(e, t) {
    const n = this.a,
      a = this.b,
      o = this.c;
    let u, h;
    (Vi.subVectors(a, n), Gi.subVectors(o, n), ha.subVectors(e, n));
    const p = Vi.dot(ha),
      d = Gi.dot(ha);
    if (p <= 0 && d <= 0) return t.copy(n);
    fa.subVectors(e, a);
    const v = Vi.dot(fa),
      _ = Gi.dot(fa);
    if (v >= 0 && _ <= v) return t.copy(a);
    const x = p * _ - v * d;
    if (x <= 0 && p >= 0 && v <= 0)
      return ((u = p / (p - v)), t.copy(n).addScaledVector(Vi, u));
    da.subVectors(e, o);
    const y = Vi.dot(da),
      R = Gi.dot(da);
    if (R >= 0 && y <= R) return t.copy(o);
    const D = y * d - p * R;
    if (D <= 0 && d >= 0 && R <= 0)
      return ((h = d / (d - R)), t.copy(n).addScaledVector(Gi, h));
    const E = v * R - y * _;
    if (E <= 0 && _ - v >= 0 && y - R >= 0)
      return (
        Vl.subVectors(o, a),
        (h = (_ - v) / (_ - v + (y - R))),
        t.copy(a).addScaledVector(Vl, h)
      );
    const m = 1 / (E + D + x);
    return (
      (u = D * m),
      (h = x * m),
      t.copy(n).addScaledVector(Vi, u).addScaledVector(Gi, h)
    );
  }
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
const $c = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074,
  },
  ti = { h: 0, s: 0, l: 0 },
  as = { h: 0, s: 0, l: 0 };
function ga(r, e, t) {
  return (
    t < 0 && (t += 1),
    t > 1 && (t -= 1),
    t < 1 / 6
      ? r + (e - r) * 6 * t
      : t < 1 / 2
        ? e
        : t < 2 / 3
          ? r + (e - r) * 6 * (2 / 3 - t)
          : r
  );
}
class pt {
  constructor(e, t, n) {
    return (
      (this.isColor = !0),
      (this.r = 1),
      (this.g = 1),
      (this.b = 1),
      this.set(e, t, n)
    );
  }
  set(e, t, n) {
    if (t === void 0 && n === void 0) {
      const a = e;
      a && a.isColor
        ? this.copy(a)
        : typeof a == "number"
          ? this.setHex(a)
          : typeof a == "string" && this.setStyle(a);
    } else this.setRGB(e, t, n);
    return this;
  }
  setScalar(e) {
    return ((this.r = e), (this.g = e), (this.b = e), this);
  }
  setHex(e, t = on) {
    return (
      (e = Math.floor(e)),
      (this.r = ((e >> 16) & 255) / 255),
      (this.g = ((e >> 8) & 255) / 255),
      (this.b = (e & 255) / 255),
      gt.colorSpaceToWorking(this, t),
      this
    );
  }
  setRGB(e, t, n, a = gt.workingColorSpace) {
    return (
      (this.r = e),
      (this.g = t),
      (this.b = n),
      gt.colorSpaceToWorking(this, a),
      this
    );
  }
  setHSL(e, t, n, a = gt.workingColorSpace) {
    if (((e = e_(e, 1)), (t = ut(t, 0, 1)), (n = ut(n, 0, 1)), t === 0))
      this.r = this.g = this.b = n;
    else {
      const o = n <= 0.5 ? n * (1 + t) : n + t - n * t,
        u = 2 * n - o;
      ((this.r = ga(u, o, e + 1 / 3)),
        (this.g = ga(u, o, e)),
        (this.b = ga(u, o, e - 1 / 3)));
    }
    return (gt.colorSpaceToWorking(this, a), this);
  }
  setStyle(e, t = on) {
    function n(o) {
      o !== void 0 &&
        parseFloat(o) < 1 &&
        console.warn(
          "THREE.Color: Alpha component of " + e + " will be ignored.",
        );
    }
    let a;
    if ((a = /^(\w+)\(([^\)]*)\)/.exec(e))) {
      let o;
      const u = a[1],
        h = a[2];
      switch (u) {
        case "rgb":
        case "rgba":
          if (
            (o =
              /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                h,
              ))
          )
            return (
              n(o[4]),
              this.setRGB(
                Math.min(255, parseInt(o[1], 10)) / 255,
                Math.min(255, parseInt(o[2], 10)) / 255,
                Math.min(255, parseInt(o[3], 10)) / 255,
                t,
              )
            );
          if (
            (o =
              /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                h,
              ))
          )
            return (
              n(o[4]),
              this.setRGB(
                Math.min(100, parseInt(o[1], 10)) / 100,
                Math.min(100, parseInt(o[2], 10)) / 100,
                Math.min(100, parseInt(o[3], 10)) / 100,
                t,
              )
            );
          break;
        case "hsl":
        case "hsla":
          if (
            (o =
              /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                h,
              ))
          )
            return (
              n(o[4]),
              this.setHSL(
                parseFloat(o[1]) / 360,
                parseFloat(o[2]) / 100,
                parseFloat(o[3]) / 100,
                t,
              )
            );
          break;
        default:
          console.warn("THREE.Color: Unknown color model " + e);
      }
    } else if ((a = /^\#([A-Fa-f\d]+)$/.exec(e))) {
      const o = a[1],
        u = o.length;
      if (u === 3)
        return this.setRGB(
          parseInt(o.charAt(0), 16) / 15,
          parseInt(o.charAt(1), 16) / 15,
          parseInt(o.charAt(2), 16) / 15,
          t,
        );
      if (u === 6) return this.setHex(parseInt(o, 16), t);
      console.warn("THREE.Color: Invalid hex color " + e);
    } else if (e && e.length > 0) return this.setColorName(e, t);
    return this;
  }
  setColorName(e, t = on) {
    const n = $c[e.toLowerCase()];
    return (
      n !== void 0
        ? this.setHex(n, t)
        : console.warn("THREE.Color: Unknown color " + e),
      this
    );
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(e) {
    return ((this.r = e.r), (this.g = e.g), (this.b = e.b), this);
  }
  copySRGBToLinear(e) {
    return ((this.r = qn(e.r)), (this.g = qn(e.g)), (this.b = qn(e.b)), this);
  }
  copyLinearToSRGB(e) {
    return ((this.r = Qi(e.r)), (this.g = Qi(e.g)), (this.b = Qi(e.b)), this);
  }
  convertSRGBToLinear() {
    return (this.copySRGBToLinear(this), this);
  }
  convertLinearToSRGB() {
    return (this.copyLinearToSRGB(this), this);
  }
  getHex(e = on) {
    return (
      gt.workingToColorSpace(Jt.copy(this), e),
      Math.round(ut(Jt.r * 255, 0, 255)) * 65536 +
        Math.round(ut(Jt.g * 255, 0, 255)) * 256 +
        Math.round(ut(Jt.b * 255, 0, 255))
    );
  }
  getHexString(e = on) {
    return ("000000" + this.getHex(e).toString(16)).slice(-6);
  }
  getHSL(e, t = gt.workingColorSpace) {
    gt.workingToColorSpace(Jt.copy(this), t);
    const n = Jt.r,
      a = Jt.g,
      o = Jt.b,
      u = Math.max(n, a, o),
      h = Math.min(n, a, o);
    let p, d;
    const v = (h + u) / 2;
    if (h === u) ((p = 0), (d = 0));
    else {
      const _ = u - h;
      switch (((d = v <= 0.5 ? _ / (u + h) : _ / (2 - u - h)), u)) {
        case n:
          p = (a - o) / _ + (a < o ? 6 : 0);
          break;
        case a:
          p = (o - n) / _ + 2;
          break;
        case o:
          p = (n - a) / _ + 4;
          break;
      }
      p /= 6;
    }
    return ((e.h = p), (e.s = d), (e.l = v), e);
  }
  getRGB(e, t = gt.workingColorSpace) {
    return (
      gt.workingToColorSpace(Jt.copy(this), t),
      (e.r = Jt.r),
      (e.g = Jt.g),
      (e.b = Jt.b),
      e
    );
  }
  getStyle(e = on) {
    gt.workingToColorSpace(Jt.copy(this), e);
    const t = Jt.r,
      n = Jt.g,
      a = Jt.b;
    return e !== on
      ? `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${a.toFixed(3)})`
      : `rgb(${Math.round(t * 255)},${Math.round(n * 255)},${Math.round(a * 255)})`;
  }
  offsetHSL(e, t, n) {
    return (this.getHSL(ti), this.setHSL(ti.h + e, ti.s + t, ti.l + n));
  }
  add(e) {
    return ((this.r += e.r), (this.g += e.g), (this.b += e.b), this);
  }
  addColors(e, t) {
    return (
      (this.r = e.r + t.r),
      (this.g = e.g + t.g),
      (this.b = e.b + t.b),
      this
    );
  }
  addScalar(e) {
    return ((this.r += e), (this.g += e), (this.b += e), this);
  }
  sub(e) {
    return (
      (this.r = Math.max(0, this.r - e.r)),
      (this.g = Math.max(0, this.g - e.g)),
      (this.b = Math.max(0, this.b - e.b)),
      this
    );
  }
  multiply(e) {
    return ((this.r *= e.r), (this.g *= e.g), (this.b *= e.b), this);
  }
  multiplyScalar(e) {
    return ((this.r *= e), (this.g *= e), (this.b *= e), this);
  }
  lerp(e, t) {
    return (
      (this.r += (e.r - this.r) * t),
      (this.g += (e.g - this.g) * t),
      (this.b += (e.b - this.b) * t),
      this
    );
  }
  lerpColors(e, t, n) {
    return (
      (this.r = e.r + (t.r - e.r) * n),
      (this.g = e.g + (t.g - e.g) * n),
      (this.b = e.b + (t.b - e.b) * n),
      this
    );
  }
  lerpHSL(e, t) {
    (this.getHSL(ti), e.getHSL(as));
    const n = Qs(ti.h, as.h, t),
      a = Qs(ti.s, as.s, t),
      o = Qs(ti.l, as.l, t);
    return (this.setHSL(n, a, o), this);
  }
  setFromVector3(e) {
    return ((this.r = e.x), (this.g = e.y), (this.b = e.z), this);
  }
  applyMatrix3(e) {
    const t = this.r,
      n = this.g,
      a = this.b,
      o = e.elements;
    return (
      (this.r = o[0] * t + o[3] * n + o[6] * a),
      (this.g = o[1] * t + o[4] * n + o[7] * a),
      (this.b = o[2] * t + o[5] * n + o[8] * a),
      this
    );
  }
  equals(e) {
    return e.r === this.r && e.g === this.g && e.b === this.b;
  }
  fromArray(e, t = 0) {
    return ((this.r = e[t]), (this.g = e[t + 1]), (this.b = e[t + 2]), this);
  }
  toArray(e = [], t = 0) {
    return ((e[t] = this.r), (e[t + 1] = this.g), (e[t + 2] = this.b), e);
  }
  fromBufferAttribute(e, t) {
    return (
      (this.r = e.getX(t)),
      (this.g = e.getY(t)),
      (this.b = e.getZ(t)),
      this
    );
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    (yield this.r, yield this.g, yield this.b);
  }
}
const Jt = new pt();
pt.NAMES = $c;
let g_ = 0;
class Pr extends Li {
  constructor() {
    (super(),
      (this.isMaterial = !0),
      Object.defineProperty(this, "id", { value: g_++ }),
      (this.uuid = Rr()),
      (this.name = ""),
      (this.type = "Material"),
      (this.blending = Ji),
      (this.side = oi),
      (this.vertexColors = !1),
      (this.opacity = 1),
      (this.transparent = !1),
      (this.alphaHash = !1),
      (this.blendSrc = La),
      (this.blendDst = Fa),
      (this.blendEquation = Ti),
      (this.blendSrcAlpha = null),
      (this.blendDstAlpha = null),
      (this.blendEquationAlpha = null),
      (this.blendColor = new pt(0, 0, 0)),
      (this.blendAlpha = 0),
      (this.depthFunc = er),
      (this.depthTest = !0),
      (this.depthWrite = !0),
      (this.stencilWriteMask = 255),
      (this.stencilFunc = Rl),
      (this.stencilRef = 0),
      (this.stencilFuncMask = 255),
      (this.stencilFail = Ii),
      (this.stencilZFail = Ii),
      (this.stencilZPass = Ii),
      (this.stencilWrite = !1),
      (this.clippingPlanes = null),
      (this.clipIntersection = !1),
      (this.clipShadows = !1),
      (this.shadowSide = null),
      (this.colorWrite = !0),
      (this.precision = null),
      (this.polygonOffset = !1),
      (this.polygonOffsetFactor = 0),
      (this.polygonOffsetUnits = 0),
      (this.dithering = !1),
      (this.alphaToCoverage = !1),
      (this.premultipliedAlpha = !1),
      (this.forceSinglePass = !1),
      (this.allowOverride = !0),
      (this.visible = !0),
      (this.toneMapped = !0),
      (this.userData = {}),
      (this.version = 0),
      (this._alphaTest = 0));
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(e) {
    (this._alphaTest > 0 != e > 0 && this.version++, (this._alphaTest = e));
  }
  onBeforeRender() {}
  onBeforeCompile() {}
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(e) {
    if (e !== void 0)
      for (const t in e) {
        const n = e[t];
        if (n === void 0) {
          console.warn(
            `THREE.Material: parameter '${t}' has value of undefined.`,
          );
          continue;
        }
        const a = this[t];
        if (a === void 0) {
          console.warn(
            `THREE.Material: '${t}' is not a property of THREE.${this.type}.`,
          );
          continue;
        }
        a && a.isColor
          ? a.set(n)
          : a && a.isVector3 && n && n.isVector3
            ? a.copy(n)
            : (this[t] = n);
      }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    t && (e = { textures: {}, images: {} });
    const n = {
      metadata: {
        version: 4.7,
        type: "Material",
        generator: "Material.toJSON",
      },
    };
    ((n.uuid = this.uuid),
      (n.type = this.type),
      this.name !== "" && (n.name = this.name),
      this.color && this.color.isColor && (n.color = this.color.getHex()),
      this.roughness !== void 0 && (n.roughness = this.roughness),
      this.metalness !== void 0 && (n.metalness = this.metalness),
      this.sheen !== void 0 && (n.sheen = this.sheen),
      this.sheenColor &&
        this.sheenColor.isColor &&
        (n.sheenColor = this.sheenColor.getHex()),
      this.sheenRoughness !== void 0 &&
        (n.sheenRoughness = this.sheenRoughness),
      this.emissive &&
        this.emissive.isColor &&
        (n.emissive = this.emissive.getHex()),
      this.emissiveIntensity !== void 0 &&
        this.emissiveIntensity !== 1 &&
        (n.emissiveIntensity = this.emissiveIntensity),
      this.specular &&
        this.specular.isColor &&
        (n.specular = this.specular.getHex()),
      this.specularIntensity !== void 0 &&
        (n.specularIntensity = this.specularIntensity),
      this.specularColor &&
        this.specularColor.isColor &&
        (n.specularColor = this.specularColor.getHex()),
      this.shininess !== void 0 && (n.shininess = this.shininess),
      this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat),
      this.clearcoatRoughness !== void 0 &&
        (n.clearcoatRoughness = this.clearcoatRoughness),
      this.clearcoatMap &&
        this.clearcoatMap.isTexture &&
        (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid),
      this.clearcoatRoughnessMap &&
        this.clearcoatRoughnessMap.isTexture &&
        (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid),
      this.clearcoatNormalMap &&
        this.clearcoatNormalMap.isTexture &&
        ((n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid),
        (n.clearcoatNormalScale = this.clearcoatNormalScale.toArray())),
      this.sheenColorMap &&
        this.sheenColorMap.isTexture &&
        (n.sheenColorMap = this.sheenColorMap.toJSON(e).uuid),
      this.sheenRoughnessMap &&
        this.sheenRoughnessMap.isTexture &&
        (n.sheenRoughnessMap = this.sheenRoughnessMap.toJSON(e).uuid),
      this.dispersion !== void 0 && (n.dispersion = this.dispersion),
      this.iridescence !== void 0 && (n.iridescence = this.iridescence),
      this.iridescenceIOR !== void 0 &&
        (n.iridescenceIOR = this.iridescenceIOR),
      this.iridescenceThicknessRange !== void 0 &&
        (n.iridescenceThicknessRange = this.iridescenceThicknessRange),
      this.iridescenceMap &&
        this.iridescenceMap.isTexture &&
        (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid),
      this.iridescenceThicknessMap &&
        this.iridescenceThicknessMap.isTexture &&
        (n.iridescenceThicknessMap =
          this.iridescenceThicknessMap.toJSON(e).uuid),
      this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy),
      this.anisotropyRotation !== void 0 &&
        (n.anisotropyRotation = this.anisotropyRotation),
      this.anisotropyMap &&
        this.anisotropyMap.isTexture &&
        (n.anisotropyMap = this.anisotropyMap.toJSON(e).uuid),
      this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid),
      this.matcap &&
        this.matcap.isTexture &&
        (n.matcap = this.matcap.toJSON(e).uuid),
      this.alphaMap &&
        this.alphaMap.isTexture &&
        (n.alphaMap = this.alphaMap.toJSON(e).uuid),
      this.lightMap &&
        this.lightMap.isTexture &&
        ((n.lightMap = this.lightMap.toJSON(e).uuid),
        (n.lightMapIntensity = this.lightMapIntensity)),
      this.aoMap &&
        this.aoMap.isTexture &&
        ((n.aoMap = this.aoMap.toJSON(e).uuid),
        (n.aoMapIntensity = this.aoMapIntensity)),
      this.bumpMap &&
        this.bumpMap.isTexture &&
        ((n.bumpMap = this.bumpMap.toJSON(e).uuid),
        (n.bumpScale = this.bumpScale)),
      this.normalMap &&
        this.normalMap.isTexture &&
        ((n.normalMap = this.normalMap.toJSON(e).uuid),
        (n.normalMapType = this.normalMapType),
        (n.normalScale = this.normalScale.toArray())),
      this.displacementMap &&
        this.displacementMap.isTexture &&
        ((n.displacementMap = this.displacementMap.toJSON(e).uuid),
        (n.displacementScale = this.displacementScale),
        (n.displacementBias = this.displacementBias)),
      this.roughnessMap &&
        this.roughnessMap.isTexture &&
        (n.roughnessMap = this.roughnessMap.toJSON(e).uuid),
      this.metalnessMap &&
        this.metalnessMap.isTexture &&
        (n.metalnessMap = this.metalnessMap.toJSON(e).uuid),
      this.emissiveMap &&
        this.emissiveMap.isTexture &&
        (n.emissiveMap = this.emissiveMap.toJSON(e).uuid),
      this.specularMap &&
        this.specularMap.isTexture &&
        (n.specularMap = this.specularMap.toJSON(e).uuid),
      this.specularIntensityMap &&
        this.specularIntensityMap.isTexture &&
        (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid),
      this.specularColorMap &&
        this.specularColorMap.isTexture &&
        (n.specularColorMap = this.specularColorMap.toJSON(e).uuid),
      this.envMap &&
        this.envMap.isTexture &&
        ((n.envMap = this.envMap.toJSON(e).uuid),
        this.combine !== void 0 && (n.combine = this.combine)),
      this.envMapRotation !== void 0 &&
        (n.envMapRotation = this.envMapRotation.toArray()),
      this.envMapIntensity !== void 0 &&
        (n.envMapIntensity = this.envMapIntensity),
      this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity),
      this.refractionRatio !== void 0 &&
        (n.refractionRatio = this.refractionRatio),
      this.gradientMap &&
        this.gradientMap.isTexture &&
        (n.gradientMap = this.gradientMap.toJSON(e).uuid),
      this.transmission !== void 0 && (n.transmission = this.transmission),
      this.transmissionMap &&
        this.transmissionMap.isTexture &&
        (n.transmissionMap = this.transmissionMap.toJSON(e).uuid),
      this.thickness !== void 0 && (n.thickness = this.thickness),
      this.thicknessMap &&
        this.thicknessMap.isTexture &&
        (n.thicknessMap = this.thicknessMap.toJSON(e).uuid),
      this.attenuationDistance !== void 0 &&
        this.attenuationDistance !== 1 / 0 &&
        (n.attenuationDistance = this.attenuationDistance),
      this.attenuationColor !== void 0 &&
        (n.attenuationColor = this.attenuationColor.getHex()),
      this.size !== void 0 && (n.size = this.size),
      this.shadowSide !== null && (n.shadowSide = this.shadowSide),
      this.sizeAttenuation !== void 0 &&
        (n.sizeAttenuation = this.sizeAttenuation),
      this.blending !== Ji && (n.blending = this.blending),
      this.side !== oi && (n.side = this.side),
      this.vertexColors === !0 && (n.vertexColors = !0),
      this.opacity < 1 && (n.opacity = this.opacity),
      this.transparent === !0 && (n.transparent = !0),
      this.blendSrc !== La && (n.blendSrc = this.blendSrc),
      this.blendDst !== Fa && (n.blendDst = this.blendDst),
      this.blendEquation !== Ti && (n.blendEquation = this.blendEquation),
      this.blendSrcAlpha !== null && (n.blendSrcAlpha = this.blendSrcAlpha),
      this.blendDstAlpha !== null && (n.blendDstAlpha = this.blendDstAlpha),
      this.blendEquationAlpha !== null &&
        (n.blendEquationAlpha = this.blendEquationAlpha),
      this.blendColor &&
        this.blendColor.isColor &&
        (n.blendColor = this.blendColor.getHex()),
      this.blendAlpha !== 0 && (n.blendAlpha = this.blendAlpha),
      this.depthFunc !== er && (n.depthFunc = this.depthFunc),
      this.depthTest === !1 && (n.depthTest = this.depthTest),
      this.depthWrite === !1 && (n.depthWrite = this.depthWrite),
      this.colorWrite === !1 && (n.colorWrite = this.colorWrite),
      this.stencilWriteMask !== 255 &&
        (n.stencilWriteMask = this.stencilWriteMask),
      this.stencilFunc !== Rl && (n.stencilFunc = this.stencilFunc),
      this.stencilRef !== 0 && (n.stencilRef = this.stencilRef),
      this.stencilFuncMask !== 255 &&
        (n.stencilFuncMask = this.stencilFuncMask),
      this.stencilFail !== Ii && (n.stencilFail = this.stencilFail),
      this.stencilZFail !== Ii && (n.stencilZFail = this.stencilZFail),
      this.stencilZPass !== Ii && (n.stencilZPass = this.stencilZPass),
      this.stencilWrite === !0 && (n.stencilWrite = this.stencilWrite),
      this.rotation !== void 0 &&
        this.rotation !== 0 &&
        (n.rotation = this.rotation),
      this.polygonOffset === !0 && (n.polygonOffset = !0),
      this.polygonOffsetFactor !== 0 &&
        (n.polygonOffsetFactor = this.polygonOffsetFactor),
      this.polygonOffsetUnits !== 0 &&
        (n.polygonOffsetUnits = this.polygonOffsetUnits),
      this.linewidth !== void 0 &&
        this.linewidth !== 1 &&
        (n.linewidth = this.linewidth),
      this.dashSize !== void 0 && (n.dashSize = this.dashSize),
      this.gapSize !== void 0 && (n.gapSize = this.gapSize),
      this.scale !== void 0 && (n.scale = this.scale),
      this.dithering === !0 && (n.dithering = !0),
      this.alphaTest > 0 && (n.alphaTest = this.alphaTest),
      this.alphaHash === !0 && (n.alphaHash = !0),
      this.alphaToCoverage === !0 && (n.alphaToCoverage = !0),
      this.premultipliedAlpha === !0 && (n.premultipliedAlpha = !0),
      this.forceSinglePass === !0 && (n.forceSinglePass = !0),
      this.wireframe === !0 && (n.wireframe = !0),
      this.wireframeLinewidth > 1 &&
        (n.wireframeLinewidth = this.wireframeLinewidth),
      this.wireframeLinecap !== "round" &&
        (n.wireframeLinecap = this.wireframeLinecap),
      this.wireframeLinejoin !== "round" &&
        (n.wireframeLinejoin = this.wireframeLinejoin),
      this.flatShading === !0 && (n.flatShading = !0),
      this.visible === !1 && (n.visible = !1),
      this.toneMapped === !1 && (n.toneMapped = !1),
      this.fog === !1 && (n.fog = !1),
      Object.keys(this.userData).length > 0 && (n.userData = this.userData));
    function a(o) {
      const u = [];
      for (const h in o) {
        const p = o[h];
        (delete p.metadata, u.push(p));
      }
      return u;
    }
    if (t) {
      const o = a(e.textures),
        u = a(e.images);
      (o.length > 0 && (n.textures = o), u.length > 0 && (n.images = u));
    }
    return n;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    ((this.name = e.name),
      (this.blending = e.blending),
      (this.side = e.side),
      (this.vertexColors = e.vertexColors),
      (this.opacity = e.opacity),
      (this.transparent = e.transparent),
      (this.blendSrc = e.blendSrc),
      (this.blendDst = e.blendDst),
      (this.blendEquation = e.blendEquation),
      (this.blendSrcAlpha = e.blendSrcAlpha),
      (this.blendDstAlpha = e.blendDstAlpha),
      (this.blendEquationAlpha = e.blendEquationAlpha),
      this.blendColor.copy(e.blendColor),
      (this.blendAlpha = e.blendAlpha),
      (this.depthFunc = e.depthFunc),
      (this.depthTest = e.depthTest),
      (this.depthWrite = e.depthWrite),
      (this.stencilWriteMask = e.stencilWriteMask),
      (this.stencilFunc = e.stencilFunc),
      (this.stencilRef = e.stencilRef),
      (this.stencilFuncMask = e.stencilFuncMask),
      (this.stencilFail = e.stencilFail),
      (this.stencilZFail = e.stencilZFail),
      (this.stencilZPass = e.stencilZPass),
      (this.stencilWrite = e.stencilWrite));
    const t = e.clippingPlanes;
    let n = null;
    if (t !== null) {
      const a = t.length;
      n = new Array(a);
      for (let o = 0; o !== a; ++o) n[o] = t[o].clone();
    }
    return (
      (this.clippingPlanes = n),
      (this.clipIntersection = e.clipIntersection),
      (this.clipShadows = e.clipShadows),
      (this.shadowSide = e.shadowSide),
      (this.colorWrite = e.colorWrite),
      (this.precision = e.precision),
      (this.polygonOffset = e.polygonOffset),
      (this.polygonOffsetFactor = e.polygonOffsetFactor),
      (this.polygonOffsetUnits = e.polygonOffsetUnits),
      (this.dithering = e.dithering),
      (this.alphaTest = e.alphaTest),
      (this.alphaHash = e.alphaHash),
      (this.alphaToCoverage = e.alphaToCoverage),
      (this.premultipliedAlpha = e.premultipliedAlpha),
      (this.forceSinglePass = e.forceSinglePass),
      (this.visible = e.visible),
      (this.toneMapped = e.toneMapped),
      (this.userData = JSON.parse(JSON.stringify(e.userData))),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
}
class jc extends Pr {
  constructor(e) {
    (super(),
      (this.isMeshBasicMaterial = !0),
      (this.type = "MeshBasicMaterial"),
      (this.color = new pt(16777215)),
      (this.map = null),
      (this.lightMap = null),
      (this.lightMapIntensity = 1),
      (this.aoMap = null),
      (this.aoMapIntensity = 1),
      (this.specularMap = null),
      (this.alphaMap = null),
      (this.envMap = null),
      (this.envMapRotation = new Un()),
      (this.combine = Pc),
      (this.reflectivity = 1),
      (this.refractionRatio = 0.98),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.wireframeLinecap = "round"),
      (this.wireframeLinejoin = "round"),
      (this.fog = !0),
      this.setValues(e));
  }
  copy(e) {
    return (
      super.copy(e),
      this.color.copy(e.color),
      (this.map = e.map),
      (this.lightMap = e.lightMap),
      (this.lightMapIntensity = e.lightMapIntensity),
      (this.aoMap = e.aoMap),
      (this.aoMapIntensity = e.aoMapIntensity),
      (this.specularMap = e.specularMap),
      (this.alphaMap = e.alphaMap),
      (this.envMap = e.envMap),
      this.envMapRotation.copy(e.envMapRotation),
      (this.combine = e.combine),
      (this.reflectivity = e.reflectivity),
      (this.refractionRatio = e.refractionRatio),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.wireframeLinecap = e.wireframeLinecap),
      (this.wireframeLinejoin = e.wireframeLinejoin),
      (this.fog = e.fog),
      this
    );
  }
}
const Ot = new K(),
  os = new it();
let v_ = 0;
class _n {
  constructor(e, t, n = !1) {
    if (Array.isArray(e))
      throw new TypeError(
        "THREE.BufferAttribute: array should be a Typed Array.",
      );
    ((this.isBufferAttribute = !0),
      Object.defineProperty(this, "id", { value: v_++ }),
      (this.name = ""),
      (this.array = e),
      (this.itemSize = t),
      (this.count = e !== void 0 ? e.length / t : 0),
      (this.normalized = n),
      (this.usage = Cl),
      (this.updateRanges = []),
      (this.gpuType = jn),
      (this.version = 0));
  }
  onUploadCallback() {}
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  setUsage(e) {
    return ((this.usage = e), this);
  }
  addUpdateRange(e, t) {
    this.updateRanges.push({ start: e, count: t });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(e) {
    return (
      (this.name = e.name),
      (this.array = new e.array.constructor(e.array)),
      (this.itemSize = e.itemSize),
      (this.count = e.count),
      (this.normalized = e.normalized),
      (this.usage = e.usage),
      (this.gpuType = e.gpuType),
      this
    );
  }
  copyAt(e, t, n) {
    ((e *= this.itemSize), (n *= t.itemSize));
    for (let a = 0, o = this.itemSize; a < o; a++)
      this.array[e + a] = t.array[n + a];
    return this;
  }
  copyArray(e) {
    return (this.array.set(e), this);
  }
  applyMatrix3(e) {
    if (this.itemSize === 2)
      for (let t = 0, n = this.count; t < n; t++)
        (os.fromBufferAttribute(this, t),
          os.applyMatrix3(e),
          this.setXY(t, os.x, os.y));
    else if (this.itemSize === 3)
      for (let t = 0, n = this.count; t < n; t++)
        (Ot.fromBufferAttribute(this, t),
          Ot.applyMatrix3(e),
          this.setXYZ(t, Ot.x, Ot.y, Ot.z));
    return this;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.count; t < n; t++)
      (Ot.fromBufferAttribute(this, t),
        Ot.applyMatrix4(e),
        this.setXYZ(t, Ot.x, Ot.y, Ot.z));
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      (Ot.fromBufferAttribute(this, t),
        Ot.applyNormalMatrix(e),
        this.setXYZ(t, Ot.x, Ot.y, Ot.z));
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      (Ot.fromBufferAttribute(this, t),
        Ot.transformDirection(e),
        this.setXYZ(t, Ot.x, Ot.y, Ot.z));
    return this;
  }
  set(e, t = 0) {
    return (this.array.set(e, t), this);
  }
  getComponent(e, t) {
    let n = this.array[e * this.itemSize + t];
    return (this.normalized && (n = dr(n, this.array)), n);
  }
  setComponent(e, t, n) {
    return (
      this.normalized && (n = sn(n, this.array)),
      (this.array[e * this.itemSize + t] = n),
      this
    );
  }
  getX(e) {
    let t = this.array[e * this.itemSize];
    return (this.normalized && (t = dr(t, this.array)), t);
  }
  setX(e, t) {
    return (
      this.normalized && (t = sn(t, this.array)),
      (this.array[e * this.itemSize] = t),
      this
    );
  }
  getY(e) {
    let t = this.array[e * this.itemSize + 1];
    return (this.normalized && (t = dr(t, this.array)), t);
  }
  setY(e, t) {
    return (
      this.normalized && (t = sn(t, this.array)),
      (this.array[e * this.itemSize + 1] = t),
      this
    );
  }
  getZ(e) {
    let t = this.array[e * this.itemSize + 2];
    return (this.normalized && (t = dr(t, this.array)), t);
  }
  setZ(e, t) {
    return (
      this.normalized && (t = sn(t, this.array)),
      (this.array[e * this.itemSize + 2] = t),
      this
    );
  }
  getW(e) {
    let t = this.array[e * this.itemSize + 3];
    return (this.normalized && (t = dr(t, this.array)), t);
  }
  setW(e, t) {
    return (
      this.normalized && (t = sn(t, this.array)),
      (this.array[e * this.itemSize + 3] = t),
      this
    );
  }
  setXY(e, t, n) {
    return (
      (e *= this.itemSize),
      this.normalized && ((t = sn(t, this.array)), (n = sn(n, this.array))),
      (this.array[e + 0] = t),
      (this.array[e + 1] = n),
      this
    );
  }
  setXYZ(e, t, n, a) {
    return (
      (e *= this.itemSize),
      this.normalized &&
        ((t = sn(t, this.array)),
        (n = sn(n, this.array)),
        (a = sn(a, this.array))),
      (this.array[e + 0] = t),
      (this.array[e + 1] = n),
      (this.array[e + 2] = a),
      this
    );
  }
  setXYZW(e, t, n, a, o) {
    return (
      (e *= this.itemSize),
      this.normalized &&
        ((t = sn(t, this.array)),
        (n = sn(n, this.array)),
        (a = sn(a, this.array)),
        (o = sn(o, this.array))),
      (this.array[e + 0] = t),
      (this.array[e + 1] = n),
      (this.array[e + 2] = a),
      (this.array[e + 3] = o),
      this
    );
  }
  onUpload(e) {
    return ((this.onUploadCallback = e), this);
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const e = {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.from(this.array),
      normalized: this.normalized,
    };
    return (
      this.name !== "" && (e.name = this.name),
      this.usage !== Cl && (e.usage = this.usage),
      e
    );
  }
}
class qc extends _n {
  constructor(e, t, n) {
    super(new Uint16Array(e), t, n);
  }
}
class Yc extends _n {
  constructor(e, t, n) {
    super(new Uint32Array(e), t, n);
  }
}
class Qt extends _n {
  constructor(e, t, n) {
    super(new Float32Array(e), t, n);
  }
}
let x_ = 0;
const pn = new Ut(),
  va = new qt(),
  Wi = new K(),
  hn = new Cr(),
  gr = new Cr(),
  Xt = new K();
class gn extends Li {
  constructor() {
    (super(),
      (this.isBufferGeometry = !0),
      Object.defineProperty(this, "id", { value: x_++ }),
      (this.uuid = Rr()),
      (this.name = ""),
      (this.type = "BufferGeometry"),
      (this.index = null),
      (this.indirect = null),
      (this.attributes = {}),
      (this.morphAttributes = {}),
      (this.morphTargetsRelative = !1),
      (this.groups = []),
      (this.boundingBox = null),
      (this.boundingSphere = null),
      (this.drawRange = { start: 0, count: 1 / 0 }),
      (this.userData = {}));
  }
  getIndex() {
    return this.index;
  }
  setIndex(e) {
    return (
      Array.isArray(e)
        ? (this.index = new (Vc(e) ? Yc : qc)(e, 1))
        : (this.index = e),
      this
    );
  }
  setIndirect(e) {
    return ((this.indirect = e), this);
  }
  getIndirect() {
    return this.indirect;
  }
  getAttribute(e) {
    return this.attributes[e];
  }
  setAttribute(e, t) {
    return ((this.attributes[e] = t), this);
  }
  deleteAttribute(e) {
    return (delete this.attributes[e], this);
  }
  hasAttribute(e) {
    return this.attributes[e] !== void 0;
  }
  addGroup(e, t, n = 0) {
    this.groups.push({ start: e, count: t, materialIndex: n });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(e, t) {
    ((this.drawRange.start = e), (this.drawRange.count = t));
  }
  applyMatrix4(e) {
    const t = this.attributes.position;
    t !== void 0 && (t.applyMatrix4(e), (t.needsUpdate = !0));
    const n = this.attributes.normal;
    if (n !== void 0) {
      const o = new rt().getNormalMatrix(e);
      (n.applyNormalMatrix(o), (n.needsUpdate = !0));
    }
    const a = this.attributes.tangent;
    return (
      a !== void 0 && (a.transformDirection(e), (a.needsUpdate = !0)),
      this.boundingBox !== null && this.computeBoundingBox(),
      this.boundingSphere !== null && this.computeBoundingSphere(),
      this
    );
  }
  applyQuaternion(e) {
    return (pn.makeRotationFromQuaternion(e), this.applyMatrix4(pn), this);
  }
  rotateX(e) {
    return (pn.makeRotationX(e), this.applyMatrix4(pn), this);
  }
  rotateY(e) {
    return (pn.makeRotationY(e), this.applyMatrix4(pn), this);
  }
  rotateZ(e) {
    return (pn.makeRotationZ(e), this.applyMatrix4(pn), this);
  }
  translate(e, t, n) {
    return (pn.makeTranslation(e, t, n), this.applyMatrix4(pn), this);
  }
  scale(e, t, n) {
    return (pn.makeScale(e, t, n), this.applyMatrix4(pn), this);
  }
  lookAt(e) {
    return (
      va.lookAt(e),
      va.updateMatrix(),
      this.applyMatrix4(va.matrix),
      this
    );
  }
  center() {
    return (
      this.computeBoundingBox(),
      this.boundingBox.getCenter(Wi).negate(),
      this.translate(Wi.x, Wi.y, Wi.z),
      this
    );
  }
  setFromPoints(e) {
    const t = this.getAttribute("position");
    if (t === void 0) {
      const n = [];
      for (let a = 0, o = e.length; a < o; a++) {
        const u = e[a];
        n.push(u.x, u.y, u.z || 0);
      }
      this.setAttribute("position", new Qt(n, 3));
    } else {
      const n = Math.min(e.length, t.count);
      for (let a = 0; a < n; a++) {
        const o = e[a];
        t.setXYZ(a, o.x, o.y, o.z || 0);
      }
      (e.length > t.count &&
        console.warn(
          "THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.",
        ),
        (t.needsUpdate = !0));
    }
    return this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new Cr());
    const e = this.attributes.position,
      t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      (console.error(
        "THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",
        this,
      ),
        this.boundingBox.set(
          new K(-1 / 0, -1 / 0, -1 / 0),
          new K(1 / 0, 1 / 0, 1 / 0),
        ));
      return;
    }
    if (e !== void 0) {
      if ((this.boundingBox.setFromBufferAttribute(e), t))
        for (let n = 0, a = t.length; n < a; n++) {
          const o = t[n];
          (hn.setFromBufferAttribute(o),
            this.morphTargetsRelative
              ? (Xt.addVectors(this.boundingBox.min, hn.min),
                this.boundingBox.expandByPoint(Xt),
                Xt.addVectors(this.boundingBox.max, hn.max),
                this.boundingBox.expandByPoint(Xt))
              : (this.boundingBox.expandByPoint(hn.min),
                this.boundingBox.expandByPoint(hn.max)));
        }
    } else this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) ||
      isNaN(this.boundingBox.min.y) ||
      isNaN(this.boundingBox.min.z)) &&
      console.error(
        'THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',
        this,
      );
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new Po());
    const e = this.attributes.position,
      t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      (console.error(
        "THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",
        this,
      ),
        this.boundingSphere.set(new K(), 1 / 0));
      return;
    }
    if (e) {
      const n = this.boundingSphere.center;
      if ((hn.setFromBufferAttribute(e), t))
        for (let o = 0, u = t.length; o < u; o++) {
          const h = t[o];
          (gr.setFromBufferAttribute(h),
            this.morphTargetsRelative
              ? (Xt.addVectors(hn.min, gr.min),
                hn.expandByPoint(Xt),
                Xt.addVectors(hn.max, gr.max),
                hn.expandByPoint(Xt))
              : (hn.expandByPoint(gr.min), hn.expandByPoint(gr.max)));
        }
      hn.getCenter(n);
      let a = 0;
      for (let o = 0, u = e.count; o < u; o++)
        (Xt.fromBufferAttribute(e, o),
          (a = Math.max(a, n.distanceToSquared(Xt))));
      if (t)
        for (let o = 0, u = t.length; o < u; o++) {
          const h = t[o],
            p = this.morphTargetsRelative;
          for (let d = 0, v = h.count; d < v; d++)
            (Xt.fromBufferAttribute(h, d),
              p && (Wi.fromBufferAttribute(e, d), Xt.add(Wi)),
              (a = Math.max(a, n.distanceToSquared(Xt))));
        }
      ((this.boundingSphere.radius = Math.sqrt(a)),
        isNaN(this.boundingSphere.radius) &&
          console.error(
            'THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',
            this,
          ));
    }
  }
  computeTangents() {
    const e = this.index,
      t = this.attributes;
    if (
      e === null ||
      t.position === void 0 ||
      t.normal === void 0 ||
      t.uv === void 0
    ) {
      console.error(
        "THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)",
      );
      return;
    }
    const n = t.position,
      a = t.normal,
      o = t.uv;
    this.hasAttribute("tangent") === !1 &&
      this.setAttribute("tangent", new _n(new Float32Array(4 * n.count), 4));
    const u = this.getAttribute("tangent"),
      h = [],
      p = [];
    for (let q = 0; q < n.count; q++) ((h[q] = new K()), (p[q] = new K()));
    const d = new K(),
      v = new K(),
      _ = new K(),
      x = new it(),
      y = new it(),
      R = new it(),
      D = new K(),
      E = new K();
    function m(q, C, M) {
      (d.fromBufferAttribute(n, q),
        v.fromBufferAttribute(n, C),
        _.fromBufferAttribute(n, M),
        x.fromBufferAttribute(o, q),
        y.fromBufferAttribute(o, C),
        R.fromBufferAttribute(o, M),
        v.sub(d),
        _.sub(d),
        y.sub(x),
        R.sub(x));
      const z = 1 / (y.x * R.y - R.x * y.y);
      isFinite(z) &&
        (D.copy(v)
          .multiplyScalar(R.y)
          .addScaledVector(_, -y.y)
          .multiplyScalar(z),
        E.copy(_)
          .multiplyScalar(y.x)
          .addScaledVector(v, -R.x)
          .multiplyScalar(z),
        h[q].add(D),
        h[C].add(D),
        h[M].add(D),
        p[q].add(E),
        p[C].add(E),
        p[M].add(E));
    }
    let N = this.groups;
    N.length === 0 && (N = [{ start: 0, count: e.count }]);
    for (let q = 0, C = N.length; q < C; ++q) {
      const M = N[q],
        z = M.start,
        Y = M.count;
      for (let te = z, J = z + Y; te < J; te += 3)
        m(e.getX(te + 0), e.getX(te + 1), e.getX(te + 2));
    }
    const U = new K(),
      L = new K(),
      k = new K(),
      P = new K();
    function H(q) {
      (k.fromBufferAttribute(a, q), P.copy(k));
      const C = h[q];
      (U.copy(C),
        U.sub(k.multiplyScalar(k.dot(C))).normalize(),
        L.crossVectors(P, C));
      const z = L.dot(p[q]) < 0 ? -1 : 1;
      u.setXYZW(q, U.x, U.y, U.z, z);
    }
    for (let q = 0, C = N.length; q < C; ++q) {
      const M = N[q],
        z = M.start,
        Y = M.count;
      for (let te = z, J = z + Y; te < J; te += 3)
        (H(e.getX(te + 0)), H(e.getX(te + 1)), H(e.getX(te + 2)));
    }
  }
  computeVertexNormals() {
    const e = this.index,
      t = this.getAttribute("position");
    if (t !== void 0) {
      let n = this.getAttribute("normal");
      if (n === void 0)
        ((n = new _n(new Float32Array(t.count * 3), 3)),
          this.setAttribute("normal", n));
      else for (let x = 0, y = n.count; x < y; x++) n.setXYZ(x, 0, 0, 0);
      const a = new K(),
        o = new K(),
        u = new K(),
        h = new K(),
        p = new K(),
        d = new K(),
        v = new K(),
        _ = new K();
      if (e)
        for (let x = 0, y = e.count; x < y; x += 3) {
          const R = e.getX(x + 0),
            D = e.getX(x + 1),
            E = e.getX(x + 2);
          (a.fromBufferAttribute(t, R),
            o.fromBufferAttribute(t, D),
            u.fromBufferAttribute(t, E),
            v.subVectors(u, o),
            _.subVectors(a, o),
            v.cross(_),
            h.fromBufferAttribute(n, R),
            p.fromBufferAttribute(n, D),
            d.fromBufferAttribute(n, E),
            h.add(v),
            p.add(v),
            d.add(v),
            n.setXYZ(R, h.x, h.y, h.z),
            n.setXYZ(D, p.x, p.y, p.z),
            n.setXYZ(E, d.x, d.y, d.z));
        }
      else
        for (let x = 0, y = t.count; x < y; x += 3)
          (a.fromBufferAttribute(t, x + 0),
            o.fromBufferAttribute(t, x + 1),
            u.fromBufferAttribute(t, x + 2),
            v.subVectors(u, o),
            _.subVectors(a, o),
            v.cross(_),
            n.setXYZ(x + 0, v.x, v.y, v.z),
            n.setXYZ(x + 1, v.x, v.y, v.z),
            n.setXYZ(x + 2, v.x, v.y, v.z));
      (this.normalizeNormals(), (n.needsUpdate = !0));
    }
  }
  normalizeNormals() {
    const e = this.attributes.normal;
    for (let t = 0, n = e.count; t < n; t++)
      (Xt.fromBufferAttribute(e, t),
        Xt.normalize(),
        e.setXYZ(t, Xt.x, Xt.y, Xt.z));
  }
  toNonIndexed() {
    function e(h, p) {
      const d = h.array,
        v = h.itemSize,
        _ = h.normalized,
        x = new d.constructor(p.length * v);
      let y = 0,
        R = 0;
      for (let D = 0, E = p.length; D < E; D++) {
        h.isInterleavedBufferAttribute
          ? (y = p[D] * h.data.stride + h.offset)
          : (y = p[D] * v);
        for (let m = 0; m < v; m++) x[R++] = d[y++];
      }
      return new _n(x, v, _);
    }
    if (this.index === null)
      return (
        console.warn(
          "THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.",
        ),
        this
      );
    const t = new gn(),
      n = this.index.array,
      a = this.attributes;
    for (const h in a) {
      const p = a[h],
        d = e(p, n);
      t.setAttribute(h, d);
    }
    const o = this.morphAttributes;
    for (const h in o) {
      const p = [],
        d = o[h];
      for (let v = 0, _ = d.length; v < _; v++) {
        const x = d[v],
          y = e(x, n);
        p.push(y);
      }
      t.morphAttributes[h] = p;
    }
    t.morphTargetsRelative = this.morphTargetsRelative;
    const u = this.groups;
    for (let h = 0, p = u.length; h < p; h++) {
      const d = u[h];
      t.addGroup(d.start, d.count, d.materialIndex);
    }
    return t;
  }
  toJSON() {
    const e = {
      metadata: {
        version: 4.7,
        type: "BufferGeometry",
        generator: "BufferGeometry.toJSON",
      },
    };
    if (
      ((e.uuid = this.uuid),
      (e.type = this.type),
      this.name !== "" && (e.name = this.name),
      Object.keys(this.userData).length > 0 && (e.userData = this.userData),
      this.parameters !== void 0)
    ) {
      const p = this.parameters;
      for (const d in p) p[d] !== void 0 && (e[d] = p[d]);
      return e;
    }
    e.data = { attributes: {} };
    const t = this.index;
    t !== null &&
      (e.data.index = {
        type: t.array.constructor.name,
        array: Array.prototype.slice.call(t.array),
      });
    const n = this.attributes;
    for (const p in n) {
      const d = n[p];
      e.data.attributes[p] = d.toJSON(e.data);
    }
    const a = {};
    let o = !1;
    for (const p in this.morphAttributes) {
      const d = this.morphAttributes[p],
        v = [];
      for (let _ = 0, x = d.length; _ < x; _++) {
        const y = d[_];
        v.push(y.toJSON(e.data));
      }
      v.length > 0 && ((a[p] = v), (o = !0));
    }
    o &&
      ((e.data.morphAttributes = a),
      (e.data.morphTargetsRelative = this.morphTargetsRelative));
    const u = this.groups;
    u.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(u)));
    const h = this.boundingSphere;
    return (h !== null && (e.data.boundingSphere = h.toJSON()), e);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    ((this.index = null),
      (this.attributes = {}),
      (this.morphAttributes = {}),
      (this.groups = []),
      (this.boundingBox = null),
      (this.boundingSphere = null));
    const t = {};
    this.name = e.name;
    const n = e.index;
    n !== null && this.setIndex(n.clone());
    const a = e.attributes;
    for (const d in a) {
      const v = a[d];
      this.setAttribute(d, v.clone(t));
    }
    const o = e.morphAttributes;
    for (const d in o) {
      const v = [],
        _ = o[d];
      for (let x = 0, y = _.length; x < y; x++) v.push(_[x].clone(t));
      this.morphAttributes[d] = v;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const u = e.groups;
    for (let d = 0, v = u.length; d < v; d++) {
      const _ = u[d];
      this.addGroup(_.start, _.count, _.materialIndex);
    }
    const h = e.boundingBox;
    h !== null && (this.boundingBox = h.clone());
    const p = e.boundingSphere;
    return (
      p !== null && (this.boundingSphere = p.clone()),
      (this.drawRange.start = e.drawRange.start),
      (this.drawRange.count = e.drawRange.count),
      (this.userData = e.userData),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
const Gl = new Ut(),
  xi = new Wc(),
  ls = new Po(),
  Wl = new K(),
  cs = new K(),
  us = new K(),
  hs = new K(),
  xa = new K(),
  fs = new K(),
  Xl = new K(),
  ds = new K();
class ln extends qt {
  constructor(e = new gn(), t = new jc()) {
    (super(),
      (this.isMesh = !0),
      (this.type = "Mesh"),
      (this.geometry = e),
      (this.material = t),
      (this.morphTargetDictionary = void 0),
      (this.morphTargetInfluences = void 0),
      (this.count = 1),
      this.updateMorphTargets());
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      e.morphTargetInfluences !== void 0 &&
        (this.morphTargetInfluences = e.morphTargetInfluences.slice()),
      e.morphTargetDictionary !== void 0 &&
        (this.morphTargetDictionary = Object.assign(
          {},
          e.morphTargetDictionary,
        )),
      (this.material = Array.isArray(e.material)
        ? e.material.slice()
        : e.material),
      (this.geometry = e.geometry),
      this
    );
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes,
      n = Object.keys(t);
    if (n.length > 0) {
      const a = t[n[0]];
      if (a !== void 0) {
        ((this.morphTargetInfluences = []), (this.morphTargetDictionary = {}));
        for (let o = 0, u = a.length; o < u; o++) {
          const h = a[o].name || String(o);
          (this.morphTargetInfluences.push(0),
            (this.morphTargetDictionary[h] = o));
        }
      }
    }
  }
  getVertexPosition(e, t) {
    const n = this.geometry,
      a = n.attributes.position,
      o = n.morphAttributes.position,
      u = n.morphTargetsRelative;
    t.fromBufferAttribute(a, e);
    const h = this.morphTargetInfluences;
    if (o && h) {
      fs.set(0, 0, 0);
      for (let p = 0, d = o.length; p < d; p++) {
        const v = h[p],
          _ = o[p];
        v !== 0 &&
          (xa.fromBufferAttribute(_, e),
          u ? fs.addScaledVector(xa, v) : fs.addScaledVector(xa.sub(t), v));
      }
      t.add(fs);
    }
    return t;
  }
  raycast(e, t) {
    const n = this.geometry,
      a = this.material,
      o = this.matrixWorld;
    a !== void 0 &&
      (n.boundingSphere === null && n.computeBoundingSphere(),
      ls.copy(n.boundingSphere),
      ls.applyMatrix4(o),
      xi.copy(e.ray).recast(e.near),
      !(
        ls.containsPoint(xi.origin) === !1 &&
        (xi.intersectSphere(ls, Wl) === null ||
          xi.origin.distanceToSquared(Wl) > (e.far - e.near) ** 2)
      ) &&
        (Gl.copy(o).invert(),
        xi.copy(e.ray).applyMatrix4(Gl),
        !(n.boundingBox !== null && xi.intersectsBox(n.boundingBox) === !1) &&
          this._computeIntersections(e, t, xi)));
  }
  _computeIntersections(e, t, n) {
    let a;
    const o = this.geometry,
      u = this.material,
      h = o.index,
      p = o.attributes.position,
      d = o.attributes.uv,
      v = o.attributes.uv1,
      _ = o.attributes.normal,
      x = o.groups,
      y = o.drawRange;
    if (h !== null)
      if (Array.isArray(u))
        for (let R = 0, D = x.length; R < D; R++) {
          const E = x[R],
            m = u[E.materialIndex],
            N = Math.max(E.start, y.start),
            U = Math.min(
              h.count,
              Math.min(E.start + E.count, y.start + y.count),
            );
          for (let L = N, k = U; L < k; L += 3) {
            const P = h.getX(L),
              H = h.getX(L + 1),
              q = h.getX(L + 2);
            ((a = ps(this, m, e, n, d, v, _, P, H, q)),
              a &&
                ((a.faceIndex = Math.floor(L / 3)),
                (a.face.materialIndex = E.materialIndex),
                t.push(a)));
          }
        }
      else {
        const R = Math.max(0, y.start),
          D = Math.min(h.count, y.start + y.count);
        for (let E = R, m = D; E < m; E += 3) {
          const N = h.getX(E),
            U = h.getX(E + 1),
            L = h.getX(E + 2);
          ((a = ps(this, u, e, n, d, v, _, N, U, L)),
            a && ((a.faceIndex = Math.floor(E / 3)), t.push(a)));
        }
      }
    else if (p !== void 0)
      if (Array.isArray(u))
        for (let R = 0, D = x.length; R < D; R++) {
          const E = x[R],
            m = u[E.materialIndex],
            N = Math.max(E.start, y.start),
            U = Math.min(
              p.count,
              Math.min(E.start + E.count, y.start + y.count),
            );
          for (let L = N, k = U; L < k; L += 3) {
            const P = L,
              H = L + 1,
              q = L + 2;
            ((a = ps(this, m, e, n, d, v, _, P, H, q)),
              a &&
                ((a.faceIndex = Math.floor(L / 3)),
                (a.face.materialIndex = E.materialIndex),
                t.push(a)));
          }
        }
      else {
        const R = Math.max(0, y.start),
          D = Math.min(p.count, y.start + y.count);
        for (let E = R, m = D; E < m; E += 3) {
          const N = E,
            U = E + 1,
            L = E + 2;
          ((a = ps(this, u, e, n, d, v, _, N, U, L)),
            a && ((a.faceIndex = Math.floor(E / 3)), t.push(a)));
        }
      }
  }
}
function E_(r, e, t, n, a, o, u, h) {
  let p;
  if (
    (e.side === cn
      ? (p = n.intersectTriangle(u, o, a, !0, h))
      : (p = n.intersectTriangle(a, o, u, e.side === oi, h)),
    p === null)
  )
    return null;
  (ds.copy(h), ds.applyMatrix4(r.matrixWorld));
  const d = t.ray.origin.distanceTo(ds);
  return d < t.near || d > t.far
    ? null
    : { distance: d, point: ds.clone(), object: r };
}
function ps(r, e, t, n, a, o, u, h, p, d) {
  (r.getVertexPosition(h, cs),
    r.getVertexPosition(p, us),
    r.getVertexPosition(d, hs));
  const v = E_(r, e, t, n, cs, us, hs, Xl);
  if (v) {
    const _ = new K();
    (Mn.getBarycoord(Xl, cs, us, hs, _),
      a && (v.uv = Mn.getInterpolatedAttribute(a, h, p, d, _, new it())),
      o && (v.uv1 = Mn.getInterpolatedAttribute(o, h, p, d, _, new it())),
      u &&
        ((v.normal = Mn.getInterpolatedAttribute(u, h, p, d, _, new K())),
        v.normal.dot(n.direction) > 0 && v.normal.multiplyScalar(-1)));
    const x = { a: h, b: p, c: d, normal: new K(), materialIndex: 0 };
    (Mn.getNormal(cs, us, hs, x.normal), (v.face = x), (v.barycoord = _));
  }
  return v;
}
class ar extends gn {
  constructor(e = 1, t = 1, n = 1, a = 1, o = 1, u = 1) {
    (super(),
      (this.type = "BoxGeometry"),
      (this.parameters = {
        width: e,
        height: t,
        depth: n,
        widthSegments: a,
        heightSegments: o,
        depthSegments: u,
      }));
    const h = this;
    ((a = Math.floor(a)), (o = Math.floor(o)), (u = Math.floor(u)));
    const p = [],
      d = [],
      v = [],
      _ = [];
    let x = 0,
      y = 0;
    (R("z", "y", "x", -1, -1, n, t, e, u, o, 0),
      R("z", "y", "x", 1, -1, n, t, -e, u, o, 1),
      R("x", "z", "y", 1, 1, e, n, t, a, u, 2),
      R("x", "z", "y", 1, -1, e, n, -t, a, u, 3),
      R("x", "y", "z", 1, -1, e, t, n, a, o, 4),
      R("x", "y", "z", -1, -1, e, t, -n, a, o, 5),
      this.setIndex(p),
      this.setAttribute("position", new Qt(d, 3)),
      this.setAttribute("normal", new Qt(v, 3)),
      this.setAttribute("uv", new Qt(_, 2)));
    function R(D, E, m, N, U, L, k, P, H, q, C) {
      const M = L / H,
        z = k / q,
        Y = L / 2,
        te = k / 2,
        J = P / 2,
        he = H + 1,
        ae = q + 1;
      let ie = 0,
        Q = 0;
      const Ee = new K();
      for (let we = 0; we < ae; we++) {
        const Re = we * z - te;
        for (let We = 0; We < he; We++) {
          const Ke = We * M - Y;
          ((Ee[D] = Ke * N),
            (Ee[E] = Re * U),
            (Ee[m] = J),
            d.push(Ee.x, Ee.y, Ee.z),
            (Ee[D] = 0),
            (Ee[E] = 0),
            (Ee[m] = P > 0 ? 1 : -1),
            v.push(Ee.x, Ee.y, Ee.z),
            _.push(We / H),
            _.push(1 - we / q),
            (ie += 1));
        }
      }
      for (let we = 0; we < q; we++)
        for (let Re = 0; Re < H; Re++) {
          const We = x + Re + he * we,
            Ke = x + Re + he * (we + 1),
            tt = x + (Re + 1) + he * (we + 1),
            Qe = x + (Re + 1) + he * we;
          (p.push(We, Ke, Qe), p.push(Ke, tt, Qe), (Q += 6));
        }
      (h.addGroup(y, Q, C), (y += Q), (x += ie));
    }
  }
  copy(e) {
    return (
      super.copy(e),
      (this.parameters = Object.assign({}, e.parameters)),
      this
    );
  }
  static fromJSON(e) {
    return new ar(
      e.width,
      e.height,
      e.depth,
      e.widthSegments,
      e.heightSegments,
      e.depthSegments,
    );
  }
}
function rr(r) {
  const e = {};
  for (const t in r) {
    e[t] = {};
    for (const n in r[t]) {
      const a = r[t][n];
      a &&
      (a.isColor ||
        a.isMatrix3 ||
        a.isMatrix4 ||
        a.isVector2 ||
        a.isVector3 ||
        a.isVector4 ||
        a.isTexture ||
        a.isQuaternion)
        ? a.isRenderTargetTexture
          ? (console.warn(
              "UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().",
            ),
            (e[t][n] = null))
          : (e[t][n] = a.clone())
        : Array.isArray(a)
          ? (e[t][n] = a.slice())
          : (e[t][n] = a);
    }
  }
  return e;
}
function nn(r) {
  const e = {};
  for (let t = 0; t < r.length; t++) {
    const n = rr(r[t]);
    for (const a in n) e[a] = n[a];
  }
  return e;
}
function S_(r) {
  const e = [];
  for (let t = 0; t < r.length; t++) e.push(r[t].clone());
  return e;
}
function Kc(r) {
  const e = r.getRenderTarget();
  return e === null
    ? r.outputColorSpace
    : e.isXRRenderTarget === !0
      ? e.texture.colorSpace
      : gt.workingColorSpace;
}
const y_ = { clone: rr, merge: nn };
var M_ = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,
  T_ = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class li extends Pr {
  constructor(e) {
    (super(),
      (this.isShaderMaterial = !0),
      (this.type = "ShaderMaterial"),
      (this.defines = {}),
      (this.uniforms = {}),
      (this.uniformsGroups = []),
      (this.vertexShader = M_),
      (this.fragmentShader = T_),
      (this.linewidth = 1),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.fog = !1),
      (this.lights = !1),
      (this.clipping = !1),
      (this.forceSinglePass = !0),
      (this.extensions = { clipCullDistance: !1, multiDraw: !1 }),
      (this.defaultAttributeValues = {
        color: [1, 1, 1],
        uv: [0, 0],
        uv1: [0, 0],
      }),
      (this.index0AttributeName = void 0),
      (this.uniformsNeedUpdate = !1),
      (this.glslVersion = null),
      e !== void 0 && this.setValues(e));
  }
  copy(e) {
    return (
      super.copy(e),
      (this.fragmentShader = e.fragmentShader),
      (this.vertexShader = e.vertexShader),
      (this.uniforms = rr(e.uniforms)),
      (this.uniformsGroups = S_(e.uniformsGroups)),
      (this.defines = Object.assign({}, e.defines)),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.fog = e.fog),
      (this.lights = e.lights),
      (this.clipping = e.clipping),
      (this.extensions = Object.assign({}, e.extensions)),
      (this.glslVersion = e.glslVersion),
      this
    );
  }
  toJSON(e) {
    const t = super.toJSON(e);
    ((t.glslVersion = this.glslVersion), (t.uniforms = {}));
    for (const a in this.uniforms) {
      const u = this.uniforms[a].value;
      u && u.isTexture
        ? (t.uniforms[a] = { type: "t", value: u.toJSON(e).uuid })
        : u && u.isColor
          ? (t.uniforms[a] = { type: "c", value: u.getHex() })
          : u && u.isVector2
            ? (t.uniforms[a] = { type: "v2", value: u.toArray() })
            : u && u.isVector3
              ? (t.uniforms[a] = { type: "v3", value: u.toArray() })
              : u && u.isVector4
                ? (t.uniforms[a] = { type: "v4", value: u.toArray() })
                : u && u.isMatrix3
                  ? (t.uniforms[a] = { type: "m3", value: u.toArray() })
                  : u && u.isMatrix4
                    ? (t.uniforms[a] = { type: "m4", value: u.toArray() })
                    : (t.uniforms[a] = { value: u });
    }
    (Object.keys(this.defines).length > 0 && (t.defines = this.defines),
      (t.vertexShader = this.vertexShader),
      (t.fragmentShader = this.fragmentShader),
      (t.lights = this.lights),
      (t.clipping = this.clipping));
    const n = {};
    for (const a in this.extensions) this.extensions[a] === !0 && (n[a] = !0);
    return (Object.keys(n).length > 0 && (t.extensions = n), t);
  }
}
class Zc extends qt {
  constructor() {
    (super(),
      (this.isCamera = !0),
      (this.type = "Camera"),
      (this.matrixWorldInverse = new Ut()),
      (this.projectionMatrix = new Ut()),
      (this.projectionMatrixInverse = new Ut()),
      (this.coordinateSystem = Ln),
      (this._reversedDepth = !1));
  }
  get reversedDepth() {
    return this._reversedDepth;
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      this.matrixWorldInverse.copy(e.matrixWorldInverse),
      this.projectionMatrix.copy(e.projectionMatrix),
      this.projectionMatrixInverse.copy(e.projectionMatrixInverse),
      (this.coordinateSystem = e.coordinateSystem),
      this
    );
  }
  getWorldDirection(e) {
    return super.getWorldDirection(e).negate();
  }
  updateMatrixWorld(e) {
    (super.updateMatrixWorld(e),
      this.matrixWorldInverse.copy(this.matrixWorld).invert());
  }
  updateWorldMatrix(e, t) {
    (super.updateWorldMatrix(e, t),
      this.matrixWorldInverse.copy(this.matrixWorld).invert());
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const ni = new K(),
  $l = new it(),
  jl = new it();
class mn extends Zc {
  constructor(e = 50, t = 1, n = 0.1, a = 2e3) {
    (super(),
      (this.isPerspectiveCamera = !0),
      (this.type = "PerspectiveCamera"),
      (this.fov = e),
      (this.zoom = 1),
      (this.near = n),
      (this.far = a),
      (this.focus = 10),
      (this.aspect = t),
      (this.view = null),
      (this.filmGauge = 35),
      (this.filmOffset = 0),
      this.updateProjectionMatrix());
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.fov = e.fov),
      (this.zoom = e.zoom),
      (this.near = e.near),
      (this.far = e.far),
      (this.focus = e.focus),
      (this.aspect = e.aspect),
      (this.view = e.view === null ? null : Object.assign({}, e.view)),
      (this.filmGauge = e.filmGauge),
      (this.filmOffset = e.filmOffset),
      this
    );
  }
  setFocalLength(e) {
    const t = (0.5 * this.getFilmHeight()) / e;
    ((this.fov = Eo * 2 * Math.atan(t)), this.updateProjectionMatrix());
  }
  getFocalLength() {
    const e = Math.tan(ws * 0.5 * this.fov);
    return (0.5 * this.getFilmHeight()) / e;
  }
  getEffectiveFOV() {
    return Eo * 2 * Math.atan(Math.tan(ws * 0.5 * this.fov) / this.zoom);
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  getViewBounds(e, t, n) {
    (ni.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse),
      t.set(ni.x, ni.y).multiplyScalar(-e / ni.z),
      ni.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse),
      n.set(ni.x, ni.y).multiplyScalar(-e / ni.z));
  }
  getViewSize(e, t) {
    return (this.getViewBounds(e, $l, jl), t.subVectors(jl, $l));
  }
  setViewOffset(e, t, n, a, o, u) {
    ((this.aspect = e / t),
      this.view === null &&
        (this.view = {
          enabled: !0,
          fullWidth: 1,
          fullHeight: 1,
          offsetX: 0,
          offsetY: 0,
          width: 1,
          height: 1,
        }),
      (this.view.enabled = !0),
      (this.view.fullWidth = e),
      (this.view.fullHeight = t),
      (this.view.offsetX = n),
      (this.view.offsetY = a),
      (this.view.width = o),
      (this.view.height = u),
      this.updateProjectionMatrix());
  }
  clearViewOffset() {
    (this.view !== null && (this.view.enabled = !1),
      this.updateProjectionMatrix());
  }
  updateProjectionMatrix() {
    const e = this.near;
    let t = (e * Math.tan(ws * 0.5 * this.fov)) / this.zoom,
      n = 2 * t,
      a = this.aspect * n,
      o = -0.5 * a;
    const u = this.view;
    if (this.view !== null && this.view.enabled) {
      const p = u.fullWidth,
        d = u.fullHeight;
      ((o += (u.offsetX * a) / p),
        (t -= (u.offsetY * n) / d),
        (a *= u.width / p),
        (n *= u.height / d));
    }
    const h = this.filmOffset;
    (h !== 0 && (o += (e * h) / this.getFilmWidth()),
      this.projectionMatrix.makePerspective(
        o,
        o + a,
        t,
        t - n,
        e,
        this.far,
        this.coordinateSystem,
        this.reversedDepth,
      ),
      this.projectionMatrixInverse.copy(this.projectionMatrix).invert());
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      (t.object.fov = this.fov),
      (t.object.zoom = this.zoom),
      (t.object.near = this.near),
      (t.object.far = this.far),
      (t.object.focus = this.focus),
      (t.object.aspect = this.aspect),
      this.view !== null && (t.object.view = Object.assign({}, this.view)),
      (t.object.filmGauge = this.filmGauge),
      (t.object.filmOffset = this.filmOffset),
      t
    );
  }
}
const Xi = -90,
  $i = 1;
class w_ extends qt {
  constructor(e, t, n) {
    (super(),
      (this.type = "CubeCamera"),
      (this.renderTarget = n),
      (this.coordinateSystem = null),
      (this.activeMipmapLevel = 0));
    const a = new mn(Xi, $i, e, t);
    ((a.layers = this.layers), this.add(a));
    const o = new mn(Xi, $i, e, t);
    ((o.layers = this.layers), this.add(o));
    const u = new mn(Xi, $i, e, t);
    ((u.layers = this.layers), this.add(u));
    const h = new mn(Xi, $i, e, t);
    ((h.layers = this.layers), this.add(h));
    const p = new mn(Xi, $i, e, t);
    ((p.layers = this.layers), this.add(p));
    const d = new mn(Xi, $i, e, t);
    ((d.layers = this.layers), this.add(d));
  }
  updateCoordinateSystem() {
    const e = this.coordinateSystem,
      t = this.children.concat(),
      [n, a, o, u, h, p] = t;
    for (const d of t) this.remove(d);
    if (e === Ln)
      (n.up.set(0, 1, 0),
        n.lookAt(1, 0, 0),
        a.up.set(0, 1, 0),
        a.lookAt(-1, 0, 0),
        o.up.set(0, 0, -1),
        o.lookAt(0, 1, 0),
        u.up.set(0, 0, 1),
        u.lookAt(0, -1, 0),
        h.up.set(0, 1, 0),
        h.lookAt(0, 0, 1),
        p.up.set(0, 1, 0),
        p.lookAt(0, 0, -1));
    else if (e === Rs)
      (n.up.set(0, -1, 0),
        n.lookAt(-1, 0, 0),
        a.up.set(0, -1, 0),
        a.lookAt(1, 0, 0),
        o.up.set(0, 0, 1),
        o.lookAt(0, 1, 0),
        u.up.set(0, 0, -1),
        u.lookAt(0, -1, 0),
        h.up.set(0, -1, 0),
        h.lookAt(0, 0, 1),
        p.up.set(0, -1, 0),
        p.lookAt(0, 0, -1));
    else
      throw new Error(
        "THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " +
          e,
      );
    for (const d of t) (this.add(d), d.updateMatrixWorld());
  }
  update(e, t) {
    this.parent === null && this.updateMatrixWorld();
    const { renderTarget: n, activeMipmapLevel: a } = this;
    this.coordinateSystem !== e.coordinateSystem &&
      ((this.coordinateSystem = e.coordinateSystem),
      this.updateCoordinateSystem());
    const [o, u, h, p, d, v] = this.children,
      _ = e.getRenderTarget(),
      x = e.getActiveCubeFace(),
      y = e.getActiveMipmapLevel(),
      R = e.xr.enabled;
    e.xr.enabled = !1;
    const D = n.texture.generateMipmaps;
    ((n.texture.generateMipmaps = !1),
      e.setRenderTarget(n, 0, a),
      e.render(t, o),
      e.setRenderTarget(n, 1, a),
      e.render(t, u),
      e.setRenderTarget(n, 2, a),
      e.render(t, h),
      e.setRenderTarget(n, 3, a),
      e.render(t, p),
      e.setRenderTarget(n, 4, a),
      e.render(t, d),
      (n.texture.generateMipmaps = D),
      e.setRenderTarget(n, 5, a),
      e.render(t, v),
      e.setRenderTarget(_, x, y),
      (e.xr.enabled = R),
      (n.texture.needsPMREMUpdate = !0));
  }
}
class Jc extends rn {
  constructor(e = [], t = tr, n, a, o, u, h, p, d, v) {
    (super(e, t, n, a, o, u, h, p, d, v),
      (this.isCubeTexture = !0),
      (this.flipY = !1));
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class b_ extends Pi {
  constructor(e = 1, t = {}) {
    (super(e, e, t), (this.isWebGLCubeRenderTarget = !0));
    const n = { width: e, height: e, depth: 1 },
      a = [n, n, n, n, n, n];
    ((this.texture = new Jc(a)),
      this._setTextureOptions(t),
      (this.texture.isRenderTargetTexture = !0));
  }
  fromEquirectangularTexture(e, t) {
    ((this.texture.type = t.type),
      (this.texture.colorSpace = t.colorSpace),
      (this.texture.generateMipmaps = t.generateMipmaps),
      (this.texture.minFilter = t.minFilter),
      (this.texture.magFilter = t.magFilter));
    const n = {
        uniforms: { tEquirect: { value: null } },
        vertexShader: `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,
        fragmentShader: `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`,
      },
      a = new ar(5, 5, 5),
      o = new li({
        name: "CubemapFromEquirect",
        uniforms: rr(n.uniforms),
        vertexShader: n.vertexShader,
        fragmentShader: n.fragmentShader,
        side: cn,
        blending: si,
      });
    o.uniforms.tEquirect.value = t;
    const u = new ln(a, o),
      h = t.minFilter;
    return (
      t.minFilter === Ai && (t.minFilter = Dn),
      new w_(1, 10, this).update(e, u),
      (t.minFilter = h),
      u.geometry.dispose(),
      u.material.dispose(),
      this
    );
  }
  clear(e, t = !0, n = !0, a = !0) {
    const o = e.getRenderTarget();
    for (let u = 0; u < 6; u++) (e.setRenderTarget(this, u), e.clear(t, n, a));
    e.setRenderTarget(o);
  }
}
class ms extends qt {
  constructor() {
    (super(), (this.isGroup = !0), (this.type = "Group"));
  }
}
const A_ = { type: "move" };
class Ea {
  constructor() {
    ((this._targetRay = null), (this._grip = null), (this._hand = null));
  }
  getHandSpace() {
    return (
      this._hand === null &&
        ((this._hand = new ms()),
        (this._hand.matrixAutoUpdate = !1),
        (this._hand.visible = !1),
        (this._hand.joints = {}),
        (this._hand.inputState = { pinching: !1 })),
      this._hand
    );
  }
  getTargetRaySpace() {
    return (
      this._targetRay === null &&
        ((this._targetRay = new ms()),
        (this._targetRay.matrixAutoUpdate = !1),
        (this._targetRay.visible = !1),
        (this._targetRay.hasLinearVelocity = !1),
        (this._targetRay.linearVelocity = new K()),
        (this._targetRay.hasAngularVelocity = !1),
        (this._targetRay.angularVelocity = new K())),
      this._targetRay
    );
  }
  getGripSpace() {
    return (
      this._grip === null &&
        ((this._grip = new ms()),
        (this._grip.matrixAutoUpdate = !1),
        (this._grip.visible = !1),
        (this._grip.hasLinearVelocity = !1),
        (this._grip.linearVelocity = new K()),
        (this._grip.hasAngularVelocity = !1),
        (this._grip.angularVelocity = new K())),
      this._grip
    );
  }
  dispatchEvent(e) {
    return (
      this._targetRay !== null && this._targetRay.dispatchEvent(e),
      this._grip !== null && this._grip.dispatchEvent(e),
      this._hand !== null && this._hand.dispatchEvent(e),
      this
    );
  }
  connect(e) {
    if (e && e.hand) {
      const t = this._hand;
      if (t) for (const n of e.hand.values()) this._getHandJoint(t, n);
    }
    return (this.dispatchEvent({ type: "connected", data: e }), this);
  }
  disconnect(e) {
    return (
      this.dispatchEvent({ type: "disconnected", data: e }),
      this._targetRay !== null && (this._targetRay.visible = !1),
      this._grip !== null && (this._grip.visible = !1),
      this._hand !== null && (this._hand.visible = !1),
      this
    );
  }
  update(e, t, n) {
    let a = null,
      o = null,
      u = null;
    const h = this._targetRay,
      p = this._grip,
      d = this._hand;
    if (e && t.session.visibilityState !== "visible-blurred") {
      if (d && e.hand) {
        u = !0;
        for (const D of e.hand.values()) {
          const E = t.getJointPose(D, n),
            m = this._getHandJoint(d, D);
          (E !== null &&
            (m.matrix.fromArray(E.transform.matrix),
            m.matrix.decompose(m.position, m.rotation, m.scale),
            (m.matrixWorldNeedsUpdate = !0),
            (m.jointRadius = E.radius)),
            (m.visible = E !== null));
        }
        const v = d.joints["index-finger-tip"],
          _ = d.joints["thumb-tip"],
          x = v.position.distanceTo(_.position),
          y = 0.02,
          R = 0.005;
        d.inputState.pinching && x > y + R
          ? ((d.inputState.pinching = !1),
            this.dispatchEvent({
              type: "pinchend",
              handedness: e.handedness,
              target: this,
            }))
          : !d.inputState.pinching &&
            x <= y - R &&
            ((d.inputState.pinching = !0),
            this.dispatchEvent({
              type: "pinchstart",
              handedness: e.handedness,
              target: this,
            }));
      } else
        p !== null &&
          e.gripSpace &&
          ((o = t.getPose(e.gripSpace, n)),
          o !== null &&
            (p.matrix.fromArray(o.transform.matrix),
            p.matrix.decompose(p.position, p.rotation, p.scale),
            (p.matrixWorldNeedsUpdate = !0),
            o.linearVelocity
              ? ((p.hasLinearVelocity = !0),
                p.linearVelocity.copy(o.linearVelocity))
              : (p.hasLinearVelocity = !1),
            o.angularVelocity
              ? ((p.hasAngularVelocity = !0),
                p.angularVelocity.copy(o.angularVelocity))
              : (p.hasAngularVelocity = !1)));
      h !== null &&
        ((a = t.getPose(e.targetRaySpace, n)),
        a === null && o !== null && (a = o),
        a !== null &&
          (h.matrix.fromArray(a.transform.matrix),
          h.matrix.decompose(h.position, h.rotation, h.scale),
          (h.matrixWorldNeedsUpdate = !0),
          a.linearVelocity
            ? ((h.hasLinearVelocity = !0),
              h.linearVelocity.copy(a.linearVelocity))
            : (h.hasLinearVelocity = !1),
          a.angularVelocity
            ? ((h.hasAngularVelocity = !0),
              h.angularVelocity.copy(a.angularVelocity))
            : (h.hasAngularVelocity = !1),
          this.dispatchEvent(A_)));
    }
    return (
      h !== null && (h.visible = a !== null),
      p !== null && (p.visible = o !== null),
      d !== null && (d.visible = u !== null),
      this
    );
  }
  _getHandJoint(e, t) {
    if (e.joints[t.jointName] === void 0) {
      const n = new ms();
      ((n.matrixAutoUpdate = !1),
        (n.visible = !1),
        (e.joints[t.jointName] = n),
        e.add(n));
    }
    return e.joints[t.jointName];
  }
}
class Do {
  constructor(e, t = 1, n = 1e3) {
    ((this.isFog = !0),
      (this.name = ""),
      (this.color = new pt(e)),
      (this.near = t),
      (this.far = n));
  }
  clone() {
    return new Do(this.color, this.near, this.far);
  }
  toJSON() {
    return {
      type: "Fog",
      name: this.name,
      color: this.color.getHex(),
      near: this.near,
      far: this.far,
    };
  }
}
class R_ extends qt {
  constructor() {
    (super(),
      (this.isScene = !0),
      (this.type = "Scene"),
      (this.background = null),
      (this.environment = null),
      (this.fog = null),
      (this.backgroundBlurriness = 0),
      (this.backgroundIntensity = 1),
      (this.backgroundRotation = new Un()),
      (this.environmentIntensity = 1),
      (this.environmentRotation = new Un()),
      (this.overrideMaterial = null),
      typeof __THREE_DEVTOOLS__ < "u" &&
        __THREE_DEVTOOLS__.dispatchEvent(
          new CustomEvent("observe", { detail: this }),
        ));
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      e.background !== null && (this.background = e.background.clone()),
      e.environment !== null && (this.environment = e.environment.clone()),
      e.fog !== null && (this.fog = e.fog.clone()),
      (this.backgroundBlurriness = e.backgroundBlurriness),
      (this.backgroundIntensity = e.backgroundIntensity),
      this.backgroundRotation.copy(e.backgroundRotation),
      (this.environmentIntensity = e.environmentIntensity),
      this.environmentRotation.copy(e.environmentRotation),
      e.overrideMaterial !== null &&
        (this.overrideMaterial = e.overrideMaterial.clone()),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      this
    );
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      this.fog !== null && (t.object.fog = this.fog.toJSON()),
      this.backgroundBlurriness > 0 &&
        (t.object.backgroundBlurriness = this.backgroundBlurriness),
      this.backgroundIntensity !== 1 &&
        (t.object.backgroundIntensity = this.backgroundIntensity),
      (t.object.backgroundRotation = this.backgroundRotation.toArray()),
      this.environmentIntensity !== 1 &&
        (t.object.environmentIntensity = this.environmentIntensity),
      (t.object.environmentRotation = this.environmentRotation.toArray()),
      t
    );
  }
}
const Sa = new K(),
  C_ = new K(),
  P_ = new rt();
class ii {
  constructor(e = new K(1, 0, 0), t = 0) {
    ((this.isPlane = !0), (this.normal = e), (this.constant = t));
  }
  set(e, t) {
    return (this.normal.copy(e), (this.constant = t), this);
  }
  setComponents(e, t, n, a) {
    return (this.normal.set(e, t, n), (this.constant = a), this);
  }
  setFromNormalAndCoplanarPoint(e, t) {
    return (this.normal.copy(e), (this.constant = -t.dot(this.normal)), this);
  }
  setFromCoplanarPoints(e, t, n) {
    const a = Sa.subVectors(n, t).cross(C_.subVectors(e, t)).normalize();
    return (this.setFromNormalAndCoplanarPoint(a, e), this);
  }
  copy(e) {
    return (this.normal.copy(e.normal), (this.constant = e.constant), this);
  }
  normalize() {
    const e = 1 / this.normal.length();
    return (this.normal.multiplyScalar(e), (this.constant *= e), this);
  }
  negate() {
    return ((this.constant *= -1), this.normal.negate(), this);
  }
  distanceToPoint(e) {
    return this.normal.dot(e) + this.constant;
  }
  distanceToSphere(e) {
    return this.distanceToPoint(e.center) - e.radius;
  }
  projectPoint(e, t) {
    return t.copy(e).addScaledVector(this.normal, -this.distanceToPoint(e));
  }
  intersectLine(e, t) {
    const n = e.delta(Sa),
      a = this.normal.dot(n);
    if (a === 0)
      return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
    const o = -(e.start.dot(this.normal) + this.constant) / a;
    return o < 0 || o > 1 ? null : t.copy(e.start).addScaledVector(n, o);
  }
  intersectsLine(e) {
    const t = this.distanceToPoint(e.start),
      n = this.distanceToPoint(e.end);
    return (t < 0 && n > 0) || (n < 0 && t > 0);
  }
  intersectsBox(e) {
    return e.intersectsPlane(this);
  }
  intersectsSphere(e) {
    return e.intersectsPlane(this);
  }
  coplanarPoint(e) {
    return e.copy(this.normal).multiplyScalar(-this.constant);
  }
  applyMatrix4(e, t) {
    const n = t || P_.getNormalMatrix(e),
      a = this.coplanarPoint(Sa).applyMatrix4(e),
      o = this.normal.applyMatrix3(n).normalize();
    return ((this.constant = -a.dot(o)), this);
  }
  translate(e) {
    return ((this.constant -= e.dot(this.normal)), this);
  }
  equals(e) {
    return e.normal.equals(this.normal) && e.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Ei = new Po(),
  D_ = new it(0.5, 0.5),
  _s = new K();
class Lo {
  constructor(
    e = new ii(),
    t = new ii(),
    n = new ii(),
    a = new ii(),
    o = new ii(),
    u = new ii(),
  ) {
    this.planes = [e, t, n, a, o, u];
  }
  set(e, t, n, a, o, u) {
    const h = this.planes;
    return (
      h[0].copy(e),
      h[1].copy(t),
      h[2].copy(n),
      h[3].copy(a),
      h[4].copy(o),
      h[5].copy(u),
      this
    );
  }
  copy(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) t[n].copy(e.planes[n]);
    return this;
  }
  setFromProjectionMatrix(e, t = Ln, n = !1) {
    const a = this.planes,
      o = e.elements,
      u = o[0],
      h = o[1],
      p = o[2],
      d = o[3],
      v = o[4],
      _ = o[5],
      x = o[6],
      y = o[7],
      R = o[8],
      D = o[9],
      E = o[10],
      m = o[11],
      N = o[12],
      U = o[13],
      L = o[14],
      k = o[15];
    if (
      (a[0].setComponents(d - u, y - v, m - R, k - N).normalize(),
      a[1].setComponents(d + u, y + v, m + R, k + N).normalize(),
      a[2].setComponents(d + h, y + _, m + D, k + U).normalize(),
      a[3].setComponents(d - h, y - _, m - D, k - U).normalize(),
      n)
    )
      (a[4].setComponents(p, x, E, L).normalize(),
        a[5].setComponents(d - p, y - x, m - E, k - L).normalize());
    else if (
      (a[4].setComponents(d - p, y - x, m - E, k - L).normalize(), t === Ln)
    )
      a[5].setComponents(d + p, y + x, m + E, k + L).normalize();
    else if (t === Rs) a[5].setComponents(p, x, E, L).normalize();
    else
      throw new Error(
        "THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " +
          t,
      );
    return this;
  }
  intersectsObject(e) {
    if (e.boundingSphere !== void 0)
      (e.boundingSphere === null && e.computeBoundingSphere(),
        Ei.copy(e.boundingSphere).applyMatrix4(e.matrixWorld));
    else {
      const t = e.geometry;
      (t.boundingSphere === null && t.computeBoundingSphere(),
        Ei.copy(t.boundingSphere).applyMatrix4(e.matrixWorld));
    }
    return this.intersectsSphere(Ei);
  }
  intersectsSprite(e) {
    Ei.center.set(0, 0, 0);
    const t = D_.distanceTo(e.center);
    return (
      (Ei.radius = 0.7071067811865476 + t),
      Ei.applyMatrix4(e.matrixWorld),
      this.intersectsSphere(Ei)
    );
  }
  intersectsSphere(e) {
    const t = this.planes,
      n = e.center,
      a = -e.radius;
    for (let o = 0; o < 6; o++) if (t[o].distanceToPoint(n) < a) return !1;
    return !0;
  }
  intersectsBox(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) {
      const a = t[n];
      if (
        ((_s.x = a.normal.x > 0 ? e.max.x : e.min.x),
        (_s.y = a.normal.y > 0 ? e.max.y : e.min.y),
        (_s.z = a.normal.z > 0 ? e.max.z : e.min.z),
        a.distanceToPoint(_s) < 0)
      )
        return !1;
    }
    return !0;
  }
  containsPoint(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) if (t[n].distanceToPoint(e) < 0) return !1;
    return !0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class Qc extends rn {
  constructor(e, t, n = Ri, a, o, u, h = wn, p = wn, d, v = yr, _ = 1) {
    if (v !== yr && v !== Mr)
      throw new Error(
        "DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat",
      );
    const x = { width: e, height: t, depth: _ };
    (super(x, a, o, u, h, p, v, n, d),
      (this.isDepthTexture = !0),
      (this.flipY = !1),
      (this.generateMipmaps = !1),
      (this.compareFunction = null));
  }
  copy(e) {
    return (
      super.copy(e),
      (this.source = new Co(Object.assign({}, e.image))),
      (this.compareFunction = e.compareFunction),
      this
    );
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      this.compareFunction !== null &&
        (t.compareFunction = this.compareFunction),
      t
    );
  }
}
class eu extends rn {
  constructor(e = null) {
    (super(), (this.sourceTexture = e), (this.isExternalTexture = !0));
  }
  copy(e) {
    return (super.copy(e), (this.sourceTexture = e.sourceTexture), this);
  }
}
class Fo extends gn {
  constructor(e = 1, t = 1, n = 4, a = 8, o = 1) {
    (super(),
      (this.type = "CapsuleGeometry"),
      (this.parameters = {
        radius: e,
        height: t,
        capSegments: n,
        radialSegments: a,
        heightSegments: o,
      }),
      (t = Math.max(0, t)),
      (n = Math.max(1, Math.floor(n))),
      (a = Math.max(3, Math.floor(a))),
      (o = Math.max(1, Math.floor(o))));
    const u = [],
      h = [],
      p = [],
      d = [],
      v = t / 2,
      _ = (Math.PI / 2) * e,
      x = t,
      y = 2 * _ + x,
      R = n * 2 + o,
      D = a + 1,
      E = new K(),
      m = new K();
    for (let N = 0; N <= R; N++) {
      let U = 0,
        L = 0,
        k = 0,
        P = 0;
      if (N <= n) {
        const C = N / n,
          M = (C * Math.PI) / 2;
        ((L = -v - e * Math.cos(M)),
          (k = e * Math.sin(M)),
          (P = -e * Math.cos(M)),
          (U = C * _));
      } else if (N <= n + o) {
        const C = (N - n) / o;
        ((L = -v + C * t), (k = e), (P = 0), (U = _ + C * x));
      } else {
        const C = (N - n - o) / n,
          M = (C * Math.PI) / 2;
        ((L = v + e * Math.sin(M)),
          (k = e * Math.cos(M)),
          (P = e * Math.sin(M)),
          (U = _ + x + C * _));
      }
      const H = Math.max(0, Math.min(1, U / y));
      let q = 0;
      N === 0 ? (q = 0.5 / a) : N === R && (q = -0.5 / a);
      for (let C = 0; C <= a; C++) {
        const M = C / a,
          z = M * Math.PI * 2,
          Y = Math.sin(z),
          te = Math.cos(z);
        ((m.x = -k * te),
          (m.y = L),
          (m.z = k * Y),
          h.push(m.x, m.y, m.z),
          E.set(-k * te, P, k * Y),
          E.normalize(),
          p.push(E.x, E.y, E.z),
          d.push(M + q, H));
      }
      if (N > 0) {
        const C = (N - 1) * D;
        for (let M = 0; M < a; M++) {
          const z = C + M,
            Y = C + M + 1,
            te = N * D + M,
            J = N * D + M + 1;
          (u.push(z, Y, te), u.push(Y, J, te));
        }
      }
    }
    (this.setIndex(u),
      this.setAttribute("position", new Qt(h, 3)),
      this.setAttribute("normal", new Qt(p, 3)),
      this.setAttribute("uv", new Qt(d, 2)));
  }
  copy(e) {
    return (
      super.copy(e),
      (this.parameters = Object.assign({}, e.parameters)),
      this
    );
  }
  static fromJSON(e) {
    return new Fo(
      e.radius,
      e.height,
      e.capSegments,
      e.radialSegments,
      e.heightSegments,
    );
  }
}
class Ps extends gn {
  constructor(
    e = 1,
    t = 1,
    n = 1,
    a = 32,
    o = 1,
    u = !1,
    h = 0,
    p = Math.PI * 2,
  ) {
    (super(),
      (this.type = "CylinderGeometry"),
      (this.parameters = {
        radiusTop: e,
        radiusBottom: t,
        height: n,
        radialSegments: a,
        heightSegments: o,
        openEnded: u,
        thetaStart: h,
        thetaLength: p,
      }));
    const d = this;
    ((a = Math.floor(a)), (o = Math.floor(o)));
    const v = [],
      _ = [],
      x = [],
      y = [];
    let R = 0;
    const D = [],
      E = n / 2;
    let m = 0;
    (N(),
      u === !1 && (e > 0 && U(!0), t > 0 && U(!1)),
      this.setIndex(v),
      this.setAttribute("position", new Qt(_, 3)),
      this.setAttribute("normal", new Qt(x, 3)),
      this.setAttribute("uv", new Qt(y, 2)));
    function N() {
      const L = new K(),
        k = new K();
      let P = 0;
      const H = (t - e) / n;
      for (let q = 0; q <= o; q++) {
        const C = [],
          M = q / o,
          z = M * (t - e) + e;
        for (let Y = 0; Y <= a; Y++) {
          const te = Y / a,
            J = te * p + h,
            he = Math.sin(J),
            ae = Math.cos(J);
          ((k.x = z * he),
            (k.y = -M * n + E),
            (k.z = z * ae),
            _.push(k.x, k.y, k.z),
            L.set(he, H, ae).normalize(),
            x.push(L.x, L.y, L.z),
            y.push(te, 1 - M),
            C.push(R++));
        }
        D.push(C);
      }
      for (let q = 0; q < a; q++)
        for (let C = 0; C < o; C++) {
          const M = D[C][q],
            z = D[C + 1][q],
            Y = D[C + 1][q + 1],
            te = D[C][q + 1];
          ((e > 0 || C !== 0) && (v.push(M, z, te), (P += 3)),
            (t > 0 || C !== o - 1) && (v.push(z, Y, te), (P += 3)));
        }
      (d.addGroup(m, P, 0), (m += P));
    }
    function U(L) {
      const k = R,
        P = new it(),
        H = new K();
      let q = 0;
      const C = L === !0 ? e : t,
        M = L === !0 ? 1 : -1;
      for (let Y = 1; Y <= a; Y++)
        (_.push(0, E * M, 0), x.push(0, M, 0), y.push(0.5, 0.5), R++);
      const z = R;
      for (let Y = 0; Y <= a; Y++) {
        const J = (Y / a) * p + h,
          he = Math.cos(J),
          ae = Math.sin(J);
        ((H.x = C * ae),
          (H.y = E * M),
          (H.z = C * he),
          _.push(H.x, H.y, H.z),
          x.push(0, M, 0),
          (P.x = he * 0.5 + 0.5),
          (P.y = ae * 0.5 * M + 0.5),
          y.push(P.x, P.y),
          R++);
      }
      for (let Y = 0; Y < a; Y++) {
        const te = k + Y,
          J = z + Y;
        (L === !0 ? v.push(J, J + 1, te) : v.push(J + 1, J, te), (q += 3));
      }
      (d.addGroup(m, q, L === !0 ? 1 : 2), (m += q));
    }
  }
  copy(e) {
    return (
      super.copy(e),
      (this.parameters = Object.assign({}, e.parameters)),
      this
    );
  }
  static fromJSON(e) {
    return new Ps(
      e.radiusTop,
      e.radiusBottom,
      e.height,
      e.radialSegments,
      e.heightSegments,
      e.openEnded,
      e.thetaStart,
      e.thetaLength,
    );
  }
}
class Di extends gn {
  constructor(e = 1, t = 1, n = 1, a = 1) {
    (super(),
      (this.type = "PlaneGeometry"),
      (this.parameters = {
        width: e,
        height: t,
        widthSegments: n,
        heightSegments: a,
      }));
    const o = e / 2,
      u = t / 2,
      h = Math.floor(n),
      p = Math.floor(a),
      d = h + 1,
      v = p + 1,
      _ = e / h,
      x = t / p,
      y = [],
      R = [],
      D = [],
      E = [];
    for (let m = 0; m < v; m++) {
      const N = m * x - u;
      for (let U = 0; U < d; U++) {
        const L = U * _ - o;
        (R.push(L, -N, 0), D.push(0, 0, 1), E.push(U / h), E.push(1 - m / p));
      }
    }
    for (let m = 0; m < p; m++)
      for (let N = 0; N < h; N++) {
        const U = N + d * m,
          L = N + d * (m + 1),
          k = N + 1 + d * (m + 1),
          P = N + 1 + d * m;
        (y.push(U, L, P), y.push(L, k, P));
      }
    (this.setIndex(y),
      this.setAttribute("position", new Qt(R, 3)),
      this.setAttribute("normal", new Qt(D, 3)),
      this.setAttribute("uv", new Qt(E, 2)));
  }
  copy(e) {
    return (
      super.copy(e),
      (this.parameters = Object.assign({}, e.parameters)),
      this
    );
  }
  static fromJSON(e) {
    return new Di(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
class br extends gn {
  constructor(
    e = 1,
    t = 32,
    n = 16,
    a = 0,
    o = Math.PI * 2,
    u = 0,
    h = Math.PI,
  ) {
    (super(),
      (this.type = "SphereGeometry"),
      (this.parameters = {
        radius: e,
        widthSegments: t,
        heightSegments: n,
        phiStart: a,
        phiLength: o,
        thetaStart: u,
        thetaLength: h,
      }),
      (t = Math.max(3, Math.floor(t))),
      (n = Math.max(2, Math.floor(n))));
    const p = Math.min(u + h, Math.PI);
    let d = 0;
    const v = [],
      _ = new K(),
      x = new K(),
      y = [],
      R = [],
      D = [],
      E = [];
    for (let m = 0; m <= n; m++) {
      const N = [],
        U = m / n;
      let L = 0;
      m === 0 && u === 0
        ? (L = 0.5 / t)
        : m === n && p === Math.PI && (L = -0.5 / t);
      for (let k = 0; k <= t; k++) {
        const P = k / t;
        ((_.x = -e * Math.cos(a + P * o) * Math.sin(u + U * h)),
          (_.y = e * Math.cos(u + U * h)),
          (_.z = e * Math.sin(a + P * o) * Math.sin(u + U * h)),
          R.push(_.x, _.y, _.z),
          x.copy(_).normalize(),
          D.push(x.x, x.y, x.z),
          E.push(P + L, 1 - U),
          N.push(d++));
      }
      v.push(N);
    }
    for (let m = 0; m < n; m++)
      for (let N = 0; N < t; N++) {
        const U = v[m][N + 1],
          L = v[m][N],
          k = v[m + 1][N],
          P = v[m + 1][N + 1];
        ((m !== 0 || u > 0) && y.push(U, L, P),
          (m !== n - 1 || p < Math.PI) && y.push(L, k, P));
      }
    (this.setIndex(y),
      this.setAttribute("position", new Qt(R, 3)),
      this.setAttribute("normal", new Qt(D, 3)),
      this.setAttribute("uv", new Qt(E, 2)));
  }
  copy(e) {
    return (
      super.copy(e),
      (this.parameters = Object.assign({}, e.parameters)),
      this
    );
  }
  static fromJSON(e) {
    return new br(
      e.radius,
      e.widthSegments,
      e.heightSegments,
      e.phiStart,
      e.phiLength,
      e.thetaStart,
      e.thetaLength,
    );
  }
}
class xr extends Pr {
  constructor(e) {
    (super(),
      (this.isMeshStandardMaterial = !0),
      (this.type = "MeshStandardMaterial"),
      (this.defines = { STANDARD: "" }),
      (this.color = new pt(16777215)),
      (this.roughness = 1),
      (this.metalness = 0),
      (this.map = null),
      (this.lightMap = null),
      (this.lightMapIntensity = 1),
      (this.aoMap = null),
      (this.aoMapIntensity = 1),
      (this.emissive = new pt(0)),
      (this.emissiveIntensity = 1),
      (this.emissiveMap = null),
      (this.bumpMap = null),
      (this.bumpScale = 1),
      (this.normalMap = null),
      (this.normalMapType = zc),
      (this.normalScale = new it(1, 1)),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.roughnessMap = null),
      (this.metalnessMap = null),
      (this.alphaMap = null),
      (this.envMap = null),
      (this.envMapRotation = new Un()),
      (this.envMapIntensity = 1),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.wireframeLinecap = "round"),
      (this.wireframeLinejoin = "round"),
      (this.flatShading = !1),
      (this.fog = !0),
      this.setValues(e));
  }
  copy(e) {
    return (
      super.copy(e),
      (this.defines = { STANDARD: "" }),
      this.color.copy(e.color),
      (this.roughness = e.roughness),
      (this.metalness = e.metalness),
      (this.map = e.map),
      (this.lightMap = e.lightMap),
      (this.lightMapIntensity = e.lightMapIntensity),
      (this.aoMap = e.aoMap),
      (this.aoMapIntensity = e.aoMapIntensity),
      this.emissive.copy(e.emissive),
      (this.emissiveMap = e.emissiveMap),
      (this.emissiveIntensity = e.emissiveIntensity),
      (this.bumpMap = e.bumpMap),
      (this.bumpScale = e.bumpScale),
      (this.normalMap = e.normalMap),
      (this.normalMapType = e.normalMapType),
      this.normalScale.copy(e.normalScale),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      (this.roughnessMap = e.roughnessMap),
      (this.metalnessMap = e.metalnessMap),
      (this.alphaMap = e.alphaMap),
      (this.envMap = e.envMap),
      this.envMapRotation.copy(e.envMapRotation),
      (this.envMapIntensity = e.envMapIntensity),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.wireframeLinecap = e.wireframeLinecap),
      (this.wireframeLinejoin = e.wireframeLinejoin),
      (this.flatShading = e.flatShading),
      (this.fog = e.fog),
      this
    );
  }
}
class L_ extends Pr {
  constructor(e) {
    (super(),
      (this.isMeshDepthMaterial = !0),
      (this.type = "MeshDepthMaterial"),
      (this.depthPacking = Wm),
      (this.map = null),
      (this.alphaMap = null),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      this.setValues(e));
  }
  copy(e) {
    return (
      super.copy(e),
      (this.depthPacking = e.depthPacking),
      (this.map = e.map),
      (this.alphaMap = e.alphaMap),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      this
    );
  }
}
class F_ extends Pr {
  constructor(e) {
    (super(),
      (this.isMeshDistanceMaterial = !0),
      (this.type = "MeshDistanceMaterial"),
      (this.map = null),
      (this.alphaMap = null),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      this.setValues(e));
  }
  copy(e) {
    return (
      super.copy(e),
      (this.map = e.map),
      (this.alphaMap = e.alphaMap),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      this
    );
  }
}
const ya = {
  enabled: !1,
  files: {},
  add: function (r, e) {
    this.enabled !== !1 && (this.files[r] = e);
  },
  get: function (r) {
    if (this.enabled !== !1) return this.files[r];
  },
  remove: function (r) {
    delete this.files[r];
  },
  clear: function () {
    this.files = {};
  },
};
class I_ {
  constructor(e, t, n) {
    const a = this;
    let o = !1,
      u = 0,
      h = 0,
      p;
    const d = [];
    ((this.onStart = void 0),
      (this.onLoad = e),
      (this.onProgress = t),
      (this.onError = n),
      (this.abortController = new AbortController()),
      (this.itemStart = function (v) {
        (h++, o === !1 && a.onStart !== void 0 && a.onStart(v, u, h), (o = !0));
      }),
      (this.itemEnd = function (v) {
        (u++,
          a.onProgress !== void 0 && a.onProgress(v, u, h),
          u === h && ((o = !1), a.onLoad !== void 0 && a.onLoad()));
      }),
      (this.itemError = function (v) {
        a.onError !== void 0 && a.onError(v);
      }),
      (this.resolveURL = function (v) {
        return p ? p(v) : v;
      }),
      (this.setURLModifier = function (v) {
        return ((p = v), this);
      }),
      (this.addHandler = function (v, _) {
        return (d.push(v, _), this);
      }),
      (this.removeHandler = function (v) {
        const _ = d.indexOf(v);
        return (_ !== -1 && d.splice(_, 2), this);
      }),
      (this.getHandler = function (v) {
        for (let _ = 0, x = d.length; _ < x; _ += 2) {
          const y = d[_],
            R = d[_ + 1];
          if ((y.global && (y.lastIndex = 0), y.test(v))) return R;
        }
        return null;
      }),
      (this.abort = function () {
        return (
          this.abortController.abort(),
          (this.abortController = new AbortController()),
          this
        );
      }));
  }
}
const U_ = new I_();
class Io {
  constructor(e) {
    ((this.manager = e !== void 0 ? e : U_),
      (this.crossOrigin = "anonymous"),
      (this.withCredentials = !1),
      (this.path = ""),
      (this.resourcePath = ""),
      (this.requestHeader = {}));
  }
  load() {}
  loadAsync(e, t) {
    const n = this;
    return new Promise(function (a, o) {
      n.load(e, a, t, o);
    });
  }
  parse() {}
  setCrossOrigin(e) {
    return ((this.crossOrigin = e), this);
  }
  setWithCredentials(e) {
    return ((this.withCredentials = e), this);
  }
  setPath(e) {
    return ((this.path = e), this);
  }
  setResourcePath(e) {
    return ((this.resourcePath = e), this);
  }
  setRequestHeader(e) {
    return ((this.requestHeader = e), this);
  }
  abort() {
    return this;
  }
}
Io.DEFAULT_MATERIAL_NAME = "__DEFAULT";
const ji = new WeakMap();
class N_ extends Io {
  constructor(e) {
    super(e);
  }
  load(e, t, n, a) {
    (this.path !== void 0 && (e = this.path + e),
      (e = this.manager.resolveURL(e)));
    const o = this,
      u = ya.get(`image:${e}`);
    if (u !== void 0) {
      if (u.complete === !0)
        (o.manager.itemStart(e),
          setTimeout(function () {
            (t && t(u), o.manager.itemEnd(e));
          }, 0));
      else {
        let _ = ji.get(u);
        (_ === void 0 && ((_ = []), ji.set(u, _)),
          _.push({ onLoad: t, onError: a }));
      }
      return u;
    }
    const h = Tr("img");
    function p() {
      (v(), t && t(this));
      const _ = ji.get(this) || [];
      for (let x = 0; x < _.length; x++) {
        const y = _[x];
        y.onLoad && y.onLoad(this);
      }
      (ji.delete(this), o.manager.itemEnd(e));
    }
    function d(_) {
      (v(), a && a(_), ya.remove(`image:${e}`));
      const x = ji.get(this) || [];
      for (let y = 0; y < x.length; y++) {
        const R = x[y];
        R.onError && R.onError(_);
      }
      (ji.delete(this), o.manager.itemError(e), o.manager.itemEnd(e));
    }
    function v() {
      (h.removeEventListener("load", p, !1),
        h.removeEventListener("error", d, !1));
    }
    return (
      h.addEventListener("load", p, !1),
      h.addEventListener("error", d, !1),
      e.slice(0, 5) !== "data:" &&
        this.crossOrigin !== void 0 &&
        (h.crossOrigin = this.crossOrigin),
      ya.add(`image:${e}`, h),
      o.manager.itemStart(e),
      (h.src = e),
      h
    );
  }
}
class O_ extends Io {
  constructor(e) {
    super(e);
  }
  load(e, t, n, a) {
    const o = new rn(),
      u = new N_(this.manager);
    return (
      u.setCrossOrigin(this.crossOrigin),
      u.setPath(this.path),
      u.load(
        e,
        function (h) {
          ((o.image = h), (o.needsUpdate = !0), t !== void 0 && t(o));
        },
        n,
        a,
      ),
      o
    );
  }
}
class tu extends qt {
  constructor(e, t = 1) {
    (super(),
      (this.isLight = !0),
      (this.type = "Light"),
      (this.color = new pt(e)),
      (this.intensity = t));
  }
  dispose() {}
  copy(e, t) {
    return (
      super.copy(e, t),
      this.color.copy(e.color),
      (this.intensity = e.intensity),
      this
    );
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      (t.object.color = this.color.getHex()),
      (t.object.intensity = this.intensity),
      this.groundColor !== void 0 &&
        (t.object.groundColor = this.groundColor.getHex()),
      this.distance !== void 0 && (t.object.distance = this.distance),
      this.angle !== void 0 && (t.object.angle = this.angle),
      this.decay !== void 0 && (t.object.decay = this.decay),
      this.penumbra !== void 0 && (t.object.penumbra = this.penumbra),
      this.shadow !== void 0 && (t.object.shadow = this.shadow.toJSON()),
      this.target !== void 0 && (t.object.target = this.target.uuid),
      t
    );
  }
}
class k_ extends tu {
  constructor(e, t, n) {
    (super(e, n),
      (this.isHemisphereLight = !0),
      (this.type = "HemisphereLight"),
      this.position.copy(qt.DEFAULT_UP),
      this.updateMatrix(),
      (this.groundColor = new pt(t)));
  }
  copy(e, t) {
    return (super.copy(e, t), this.groundColor.copy(e.groundColor), this);
  }
}
const Ma = new Ut(),
  ql = new K(),
  Yl = new K();
class B_ {
  constructor(e) {
    ((this.camera = e),
      (this.intensity = 1),
      (this.bias = 0),
      (this.normalBias = 0),
      (this.radius = 1),
      (this.blurSamples = 8),
      (this.mapSize = new it(512, 512)),
      (this.mapType = In),
      (this.map = null),
      (this.mapPass = null),
      (this.matrix = new Ut()),
      (this.autoUpdate = !0),
      (this.needsUpdate = !1),
      (this._frustum = new Lo()),
      (this._frameExtents = new it(1, 1)),
      (this._viewportCount = 1),
      (this._viewports = [new It(0, 0, 1, 1)]));
  }
  getViewportCount() {
    return this._viewportCount;
  }
  getFrustum() {
    return this._frustum;
  }
  updateMatrices(e) {
    const t = this.camera,
      n = this.matrix;
    (ql.setFromMatrixPosition(e.matrixWorld),
      t.position.copy(ql),
      Yl.setFromMatrixPosition(e.target.matrixWorld),
      t.lookAt(Yl),
      t.updateMatrixWorld(),
      Ma.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse),
      this._frustum.setFromProjectionMatrix(
        Ma,
        t.coordinateSystem,
        t.reversedDepth,
      ),
      t.reversedDepth
        ? n.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 1, 0, 0, 0, 0, 1)
        : n.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1),
      n.multiply(Ma));
  }
  getViewport(e) {
    return this._viewports[e];
  }
  getFrameExtents() {
    return this._frameExtents;
  }
  dispose() {
    (this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose());
  }
  copy(e) {
    return (
      (this.camera = e.camera.clone()),
      (this.intensity = e.intensity),
      (this.bias = e.bias),
      (this.radius = e.radius),
      (this.autoUpdate = e.autoUpdate),
      (this.needsUpdate = e.needsUpdate),
      (this.normalBias = e.normalBias),
      (this.blurSamples = e.blurSamples),
      this.mapSize.copy(e.mapSize),
      this
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    const e = {};
    return (
      this.intensity !== 1 && (e.intensity = this.intensity),
      this.bias !== 0 && (e.bias = this.bias),
      this.normalBias !== 0 && (e.normalBias = this.normalBias),
      this.radius !== 1 && (e.radius = this.radius),
      (this.mapSize.x !== 512 || this.mapSize.y !== 512) &&
        (e.mapSize = this.mapSize.toArray()),
      (e.camera = this.camera.toJSON(!1).object),
      delete e.camera.matrix,
      e
    );
  }
}
class nu extends Zc {
  constructor(e = -1, t = 1, n = 1, a = -1, o = 0.1, u = 2e3) {
    (super(),
      (this.isOrthographicCamera = !0),
      (this.type = "OrthographicCamera"),
      (this.zoom = 1),
      (this.view = null),
      (this.left = e),
      (this.right = t),
      (this.top = n),
      (this.bottom = a),
      (this.near = o),
      (this.far = u),
      this.updateProjectionMatrix());
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.left = e.left),
      (this.right = e.right),
      (this.top = e.top),
      (this.bottom = e.bottom),
      (this.near = e.near),
      (this.far = e.far),
      (this.zoom = e.zoom),
      (this.view = e.view === null ? null : Object.assign({}, e.view)),
      this
    );
  }
  setViewOffset(e, t, n, a, o, u) {
    (this.view === null &&
      (this.view = {
        enabled: !0,
        fullWidth: 1,
        fullHeight: 1,
        offsetX: 0,
        offsetY: 0,
        width: 1,
        height: 1,
      }),
      (this.view.enabled = !0),
      (this.view.fullWidth = e),
      (this.view.fullHeight = t),
      (this.view.offsetX = n),
      (this.view.offsetY = a),
      (this.view.width = o),
      (this.view.height = u),
      this.updateProjectionMatrix());
  }
  clearViewOffset() {
    (this.view !== null && (this.view.enabled = !1),
      this.updateProjectionMatrix());
  }
  updateProjectionMatrix() {
    const e = (this.right - this.left) / (2 * this.zoom),
      t = (this.top - this.bottom) / (2 * this.zoom),
      n = (this.right + this.left) / 2,
      a = (this.top + this.bottom) / 2;
    let o = n - e,
      u = n + e,
      h = a + t,
      p = a - t;
    if (this.view !== null && this.view.enabled) {
      const d = (this.right - this.left) / this.view.fullWidth / this.zoom,
        v = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      ((o += d * this.view.offsetX),
        (u = o + d * this.view.width),
        (h -= v * this.view.offsetY),
        (p = h - v * this.view.height));
    }
    (this.projectionMatrix.makeOrthographic(
      o,
      u,
      h,
      p,
      this.near,
      this.far,
      this.coordinateSystem,
      this.reversedDepth,
    ),
      this.projectionMatrixInverse.copy(this.projectionMatrix).invert());
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      (t.object.zoom = this.zoom),
      (t.object.left = this.left),
      (t.object.right = this.right),
      (t.object.top = this.top),
      (t.object.bottom = this.bottom),
      (t.object.near = this.near),
      (t.object.far = this.far),
      this.view !== null && (t.object.view = Object.assign({}, this.view)),
      t
    );
  }
}
class z_ extends B_ {
  constructor() {
    (super(new nu(-5, 5, 5, -5, 0.5, 500)),
      (this.isDirectionalLightShadow = !0));
  }
}
class H_ extends tu {
  constructor(e, t) {
    (super(e, t),
      (this.isDirectionalLight = !0),
      (this.type = "DirectionalLight"),
      this.position.copy(qt.DEFAULT_UP),
      this.updateMatrix(),
      (this.target = new qt()),
      (this.shadow = new z_()));
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e) {
    return (
      super.copy(e),
      (this.target = e.target.clone()),
      (this.shadow = e.shadow.clone()),
      this
    );
  }
}
class V_ extends mn {
  constructor(e = []) {
    (super(),
      (this.isArrayCamera = !0),
      (this.isMultiViewCamera = !1),
      (this.cameras = e));
  }
}
class Kl {
  constructor(e = 1, t = 0, n = 0) {
    ((this.radius = e), (this.phi = t), (this.theta = n));
  }
  set(e, t, n) {
    return ((this.radius = e), (this.phi = t), (this.theta = n), this);
  }
  copy(e) {
    return (
      (this.radius = e.radius),
      (this.phi = e.phi),
      (this.theta = e.theta),
      this
    );
  }
  makeSafe() {
    return ((this.phi = ut(this.phi, 1e-6, Math.PI - 1e-6)), this);
  }
  setFromVector3(e) {
    return this.setFromCartesianCoords(e.x, e.y, e.z);
  }
  setFromCartesianCoords(e, t, n) {
    return (
      (this.radius = Math.sqrt(e * e + t * t + n * n)),
      this.radius === 0
        ? ((this.theta = 0), (this.phi = 0))
        : ((this.theta = Math.atan2(e, n)),
          (this.phi = Math.acos(ut(t / this.radius, -1, 1)))),
      this
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class G_ extends Li {
  constructor(e, t = null) {
    (super(),
      (this.object = e),
      (this.domElement = t),
      (this.enabled = !0),
      (this.state = -1),
      (this.keys = {}),
      (this.mouseButtons = { LEFT: null, MIDDLE: null, RIGHT: null }),
      (this.touches = { ONE: null, TWO: null }));
  }
  connect(e) {
    if (e === void 0) {
      console.warn("THREE.Controls: connect() now requires an element.");
      return;
    }
    (this.domElement !== null && this.disconnect(), (this.domElement = e));
  }
  disconnect() {}
  dispose() {}
  update() {}
}
function Zl(r, e, t, n) {
  const a = W_(n);
  switch (t) {
    case Nc:
      return r * e;
    case kc:
      return ((r * e) / a.components) * a.byteLength;
    case bo:
      return ((r * e) / a.components) * a.byteLength;
    case Bc:
      return ((r * e * 2) / a.components) * a.byteLength;
    case Ao:
      return ((r * e * 2) / a.components) * a.byteLength;
    case Oc:
      return ((r * e * 3) / a.components) * a.byteLength;
    case Tn:
      return ((r * e * 4) / a.components) * a.byteLength;
    case Ro:
      return ((r * e * 4) / a.components) * a.byteLength;
    case Ss:
    case ys:
      return Math.floor((r + 3) / 4) * Math.floor((e + 3) / 4) * 8;
    case Ms:
    case Ts:
      return Math.floor((r + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case $a:
    case qa:
      return (Math.max(r, 16) * Math.max(e, 8)) / 4;
    case Xa:
    case ja:
      return (Math.max(r, 8) * Math.max(e, 8)) / 2;
    case Ya:
    case Ka:
      return Math.floor((r + 3) / 4) * Math.floor((e + 3) / 4) * 8;
    case Za:
      return Math.floor((r + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case Ja:
      return Math.floor((r + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case Qa:
      return Math.floor((r + 4) / 5) * Math.floor((e + 3) / 4) * 16;
    case eo:
      return Math.floor((r + 4) / 5) * Math.floor((e + 4) / 5) * 16;
    case to:
      return Math.floor((r + 5) / 6) * Math.floor((e + 4) / 5) * 16;
    case no:
      return Math.floor((r + 5) / 6) * Math.floor((e + 5) / 6) * 16;
    case io:
      return Math.floor((r + 7) / 8) * Math.floor((e + 4) / 5) * 16;
    case ro:
      return Math.floor((r + 7) / 8) * Math.floor((e + 5) / 6) * 16;
    case so:
      return Math.floor((r + 7) / 8) * Math.floor((e + 7) / 8) * 16;
    case ao:
      return Math.floor((r + 9) / 10) * Math.floor((e + 4) / 5) * 16;
    case oo:
      return Math.floor((r + 9) / 10) * Math.floor((e + 5) / 6) * 16;
    case lo:
      return Math.floor((r + 9) / 10) * Math.floor((e + 7) / 8) * 16;
    case co:
      return Math.floor((r + 9) / 10) * Math.floor((e + 9) / 10) * 16;
    case uo:
      return Math.floor((r + 11) / 12) * Math.floor((e + 9) / 10) * 16;
    case ho:
      return Math.floor((r + 11) / 12) * Math.floor((e + 11) / 12) * 16;
    case fo:
    case po:
    case mo:
      return Math.ceil(r / 4) * Math.ceil(e / 4) * 16;
    case _o:
    case go:
      return Math.ceil(r / 4) * Math.ceil(e / 4) * 8;
    case vo:
    case xo:
      return Math.ceil(r / 4) * Math.ceil(e / 4) * 16;
  }
  throw new Error(`Unable to determine texture byte length for ${t} format.`);
}
function W_(r) {
  switch (r) {
    case In:
    case Lc:
      return { byteLength: 1, components: 1 };
    case Er:
    case Fc:
    case Ar:
      return { byteLength: 2, components: 1 };
    case To:
    case wo:
      return { byteLength: 2, components: 4 };
    case Ri:
    case Mo:
    case jn:
      return { byteLength: 4, components: 1 };
    case Ic:
    case Uc:
      return { byteLength: 4, components: 3 };
  }
  throw new Error(`Unknown texture type ${r}.`);
}
typeof __THREE_DEVTOOLS__ < "u" &&
  __THREE_DEVTOOLS__.dispatchEvent(
    new CustomEvent("register", { detail: { revision: yo } }),
  );
typeof window < "u" &&
  (window.__THREE__
    ? console.warn("WARNING: Multiple instances of Three.js being imported.")
    : (window.__THREE__ = yo));
/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */ function iu() {
  let r = null,
    e = !1,
    t = null,
    n = null;
  function a(o, u) {
    (t(o, u), (n = r.requestAnimationFrame(a)));
  }
  return {
    start: function () {
      e !== !0 && t !== null && ((n = r.requestAnimationFrame(a)), (e = !0));
    },
    stop: function () {
      (r.cancelAnimationFrame(n), (e = !1));
    },
    setAnimationLoop: function (o) {
      t = o;
    },
    setContext: function (o) {
      r = o;
    },
  };
}
function X_(r) {
  const e = new WeakMap();
  function t(h, p) {
    const d = h.array,
      v = h.usage,
      _ = d.byteLength,
      x = r.createBuffer();
    (r.bindBuffer(p, x), r.bufferData(p, d, v), h.onUploadCallback());
    let y;
    if (d instanceof Float32Array) y = r.FLOAT;
    else if (typeof Float16Array < "u" && d instanceof Float16Array)
      y = r.HALF_FLOAT;
    else if (d instanceof Uint16Array)
      h.isFloat16BufferAttribute ? (y = r.HALF_FLOAT) : (y = r.UNSIGNED_SHORT);
    else if (d instanceof Int16Array) y = r.SHORT;
    else if (d instanceof Uint32Array) y = r.UNSIGNED_INT;
    else if (d instanceof Int32Array) y = r.INT;
    else if (d instanceof Int8Array) y = r.BYTE;
    else if (d instanceof Uint8Array) y = r.UNSIGNED_BYTE;
    else if (d instanceof Uint8ClampedArray) y = r.UNSIGNED_BYTE;
    else
      throw new Error(
        "THREE.WebGLAttributes: Unsupported buffer data format: " + d,
      );
    return {
      buffer: x,
      type: y,
      bytesPerElement: d.BYTES_PER_ELEMENT,
      version: h.version,
      size: _,
    };
  }
  function n(h, p, d) {
    const v = p.array,
      _ = p.updateRanges;
    if ((r.bindBuffer(d, h), _.length === 0)) r.bufferSubData(d, 0, v);
    else {
      _.sort((y, R) => y.start - R.start);
      let x = 0;
      for (let y = 1; y < _.length; y++) {
        const R = _[x],
          D = _[y];
        D.start <= R.start + R.count + 1
          ? (R.count = Math.max(R.count, D.start + D.count - R.start))
          : (++x, (_[x] = D));
      }
      _.length = x + 1;
      for (let y = 0, R = _.length; y < R; y++) {
        const D = _[y];
        r.bufferSubData(d, D.start * v.BYTES_PER_ELEMENT, v, D.start, D.count);
      }
      p.clearUpdateRanges();
    }
    p.onUploadCallback();
  }
  function a(h) {
    return (h.isInterleavedBufferAttribute && (h = h.data), e.get(h));
  }
  function o(h) {
    h.isInterleavedBufferAttribute && (h = h.data);
    const p = e.get(h);
    p && (r.deleteBuffer(p.buffer), e.delete(h));
  }
  function u(h, p) {
    if (
      (h.isInterleavedBufferAttribute && (h = h.data), h.isGLBufferAttribute)
    ) {
      const v = e.get(h);
      (!v || v.version < h.version) &&
        e.set(h, {
          buffer: h.buffer,
          type: h.type,
          bytesPerElement: h.elementSize,
          version: h.version,
        });
      return;
    }
    const d = e.get(h);
    if (d === void 0) e.set(h, t(h, p));
    else if (d.version < h.version) {
      if (d.size !== h.array.byteLength)
        throw new Error(
          "THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.",
        );
      (n(d.buffer, h, p), (d.version = h.version));
    }
  }
  return { get: a, remove: o, update: u };
}
var $_ = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,
  j_ = `#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,
  q_ = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,
  Y_ = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,
  K_ = `#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,
  Z_ = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,
  J_ = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,
  Q_ = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,
  eg = `#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,
  tg = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,
  ng = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,
  ig = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,
  rg = `float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,
  sg = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,
  ag = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,
  og = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,
  lg = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,
  cg = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,
  ug = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,
  hg = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,
  fg = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,
  dg = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,
  pg = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,
  mg = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,
  _g = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,
  gg = `vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,
  vg = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,
  xg = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,
  Eg = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,
  Sg = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,
  yg = "gl_FragColor = linearToOutputTexel( gl_FragColor );",
  Mg = `vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,
  Tg = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,
  wg = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,
  bg = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,
  Ag = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,
  Rg = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,
  Cg = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,
  Pg = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`,
  Dg = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,
  Lg = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,
  Fg = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,
  Ig = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,
  Ug = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,
  Ng = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,
  Og = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,
  kg = `#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,
  Bg = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,
  zg = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,
  Hg = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,
  Vg = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,
  Gg = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,
  Wg = `struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,
  Xg = `
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,
  $g = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,
  jg = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,
  qg = `#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,
  Yg = `#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,
  Kg = `#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,
  Zg = `#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,
  Jg = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,
  Qg = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`,
  ev = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,
  tv = `#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,
  nv = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,
  iv = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,
  rv = `#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,
  sv = `#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,
  av = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,
  ov = `#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,
  lv = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,
  cv = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,
  uv = `#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,
  hv = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,
  fv = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,
  dv = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,
  pv = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,
  mv = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,
  _v = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,
  gv = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,
  vv = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,
  xv = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,
  Ev = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,
  Sv = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,
  yv = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,
  Mv = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,
  Tv = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,
  wv = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,
  bv = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,
  Av = `#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,
  Rv = `#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,
  Cv = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,
  Pv = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,
  Dv = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,
  Lv = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,
  Fv = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,
  Iv = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,
  Uv = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,
  Nv = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,
  Ov = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,
  kv = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,
  Bv = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,
  zv = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,
  Hv = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,
  Vv = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,
  Gv = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,
  Wv = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const Xv = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,
  $v = `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
  jv = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,
  qv = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
  Yv = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,
  Kv = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
  Zv = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,
  Jv = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,
  Qv = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,
  e0 = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,
  t0 = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,
  n0 = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
  i0 = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,
  r0 = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,
  s0 = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,
  a0 = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  o0 = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  l0 = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  c0 = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,
  u0 = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  h0 = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,
  f0 = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,
  d0 = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  p0 = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  m0 = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,
  _0 = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  g0 = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  v0 = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  x0 = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,
  E0 = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,
  S0 = `#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  y0 = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,
  M0 = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,
  T0 = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,
  ot = {
    alphahash_fragment: $_,
    alphahash_pars_fragment: j_,
    alphamap_fragment: q_,
    alphamap_pars_fragment: Y_,
    alphatest_fragment: K_,
    alphatest_pars_fragment: Z_,
    aomap_fragment: J_,
    aomap_pars_fragment: Q_,
    batching_pars_vertex: eg,
    batching_vertex: tg,
    begin_vertex: ng,
    beginnormal_vertex: ig,
    bsdfs: rg,
    iridescence_fragment: sg,
    bumpmap_pars_fragment: ag,
    clipping_planes_fragment: og,
    clipping_planes_pars_fragment: lg,
    clipping_planes_pars_vertex: cg,
    clipping_planes_vertex: ug,
    color_fragment: hg,
    color_pars_fragment: fg,
    color_pars_vertex: dg,
    color_vertex: pg,
    common: mg,
    cube_uv_reflection_fragment: _g,
    defaultnormal_vertex: gg,
    displacementmap_pars_vertex: vg,
    displacementmap_vertex: xg,
    emissivemap_fragment: Eg,
    emissivemap_pars_fragment: Sg,
    colorspace_fragment: yg,
    colorspace_pars_fragment: Mg,
    envmap_fragment: Tg,
    envmap_common_pars_fragment: wg,
    envmap_pars_fragment: bg,
    envmap_pars_vertex: Ag,
    envmap_physical_pars_fragment: kg,
    envmap_vertex: Rg,
    fog_vertex: Cg,
    fog_pars_vertex: Pg,
    fog_fragment: Dg,
    fog_pars_fragment: Lg,
    gradientmap_pars_fragment: Fg,
    lightmap_pars_fragment: Ig,
    lights_lambert_fragment: Ug,
    lights_lambert_pars_fragment: Ng,
    lights_pars_begin: Og,
    lights_toon_fragment: Bg,
    lights_toon_pars_fragment: zg,
    lights_phong_fragment: Hg,
    lights_phong_pars_fragment: Vg,
    lights_physical_fragment: Gg,
    lights_physical_pars_fragment: Wg,
    lights_fragment_begin: Xg,
    lights_fragment_maps: $g,
    lights_fragment_end: jg,
    logdepthbuf_fragment: qg,
    logdepthbuf_pars_fragment: Yg,
    logdepthbuf_pars_vertex: Kg,
    logdepthbuf_vertex: Zg,
    map_fragment: Jg,
    map_pars_fragment: Qg,
    map_particle_fragment: ev,
    map_particle_pars_fragment: tv,
    metalnessmap_fragment: nv,
    metalnessmap_pars_fragment: iv,
    morphinstance_vertex: rv,
    morphcolor_vertex: sv,
    morphnormal_vertex: av,
    morphtarget_pars_vertex: ov,
    morphtarget_vertex: lv,
    normal_fragment_begin: cv,
    normal_fragment_maps: uv,
    normal_pars_fragment: hv,
    normal_pars_vertex: fv,
    normal_vertex: dv,
    normalmap_pars_fragment: pv,
    clearcoat_normal_fragment_begin: mv,
    clearcoat_normal_fragment_maps: _v,
    clearcoat_pars_fragment: gv,
    iridescence_pars_fragment: vv,
    opaque_fragment: xv,
    packing: Ev,
    premultiplied_alpha_fragment: Sv,
    project_vertex: yv,
    dithering_fragment: Mv,
    dithering_pars_fragment: Tv,
    roughnessmap_fragment: wv,
    roughnessmap_pars_fragment: bv,
    shadowmap_pars_fragment: Av,
    shadowmap_pars_vertex: Rv,
    shadowmap_vertex: Cv,
    shadowmask_pars_fragment: Pv,
    skinbase_vertex: Dv,
    skinning_pars_vertex: Lv,
    skinning_vertex: Fv,
    skinnormal_vertex: Iv,
    specularmap_fragment: Uv,
    specularmap_pars_fragment: Nv,
    tonemapping_fragment: Ov,
    tonemapping_pars_fragment: kv,
    transmission_fragment: Bv,
    transmission_pars_fragment: zv,
    uv_pars_fragment: Hv,
    uv_pars_vertex: Vv,
    uv_vertex: Gv,
    worldpos_vertex: Wv,
    background_vert: Xv,
    background_frag: $v,
    backgroundCube_vert: jv,
    backgroundCube_frag: qv,
    cube_vert: Yv,
    cube_frag: Kv,
    depth_vert: Zv,
    depth_frag: Jv,
    distanceRGBA_vert: Qv,
    distanceRGBA_frag: e0,
    equirect_vert: t0,
    equirect_frag: n0,
    linedashed_vert: i0,
    linedashed_frag: r0,
    meshbasic_vert: s0,
    meshbasic_frag: a0,
    meshlambert_vert: o0,
    meshlambert_frag: l0,
    meshmatcap_vert: c0,
    meshmatcap_frag: u0,
    meshnormal_vert: h0,
    meshnormal_frag: f0,
    meshphong_vert: d0,
    meshphong_frag: p0,
    meshphysical_vert: m0,
    meshphysical_frag: _0,
    meshtoon_vert: g0,
    meshtoon_frag: v0,
    points_vert: x0,
    points_frag: E0,
    shadow_vert: S0,
    shadow_frag: y0,
    sprite_vert: M0,
    sprite_frag: T0,
  },
  Pe = {
    common: {
      diffuse: { value: new pt(16777215) },
      opacity: { value: 1 },
      map: { value: null },
      mapTransform: { value: new rt() },
      alphaMap: { value: null },
      alphaMapTransform: { value: new rt() },
      alphaTest: { value: 0 },
    },
    specularmap: {
      specularMap: { value: null },
      specularMapTransform: { value: new rt() },
    },
    envmap: {
      envMap: { value: null },
      envMapRotation: { value: new rt() },
      flipEnvMap: { value: -1 },
      reflectivity: { value: 1 },
      ior: { value: 1.5 },
      refractionRatio: { value: 0.98 },
    },
    aomap: {
      aoMap: { value: null },
      aoMapIntensity: { value: 1 },
      aoMapTransform: { value: new rt() },
    },
    lightmap: {
      lightMap: { value: null },
      lightMapIntensity: { value: 1 },
      lightMapTransform: { value: new rt() },
    },
    bumpmap: {
      bumpMap: { value: null },
      bumpMapTransform: { value: new rt() },
      bumpScale: { value: 1 },
    },
    normalmap: {
      normalMap: { value: null },
      normalMapTransform: { value: new rt() },
      normalScale: { value: new it(1, 1) },
    },
    displacementmap: {
      displacementMap: { value: null },
      displacementMapTransform: { value: new rt() },
      displacementScale: { value: 1 },
      displacementBias: { value: 0 },
    },
    emissivemap: {
      emissiveMap: { value: null },
      emissiveMapTransform: { value: new rt() },
    },
    metalnessmap: {
      metalnessMap: { value: null },
      metalnessMapTransform: { value: new rt() },
    },
    roughnessmap: {
      roughnessMap: { value: null },
      roughnessMapTransform: { value: new rt() },
    },
    gradientmap: { gradientMap: { value: null } },
    fog: {
      fogDensity: { value: 25e-5 },
      fogNear: { value: 1 },
      fogFar: { value: 2e3 },
      fogColor: { value: new pt(16777215) },
    },
    lights: {
      ambientLightColor: { value: [] },
      lightProbe: { value: [] },
      directionalLights: {
        value: [],
        properties: { direction: {}, color: {} },
      },
      directionalLightShadows: {
        value: [],
        properties: {
          shadowIntensity: 1,
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
        },
      },
      directionalShadowMap: { value: [] },
      directionalShadowMatrix: { value: [] },
      spotLights: {
        value: [],
        properties: {
          color: {},
          position: {},
          direction: {},
          distance: {},
          coneCos: {},
          penumbraCos: {},
          decay: {},
        },
      },
      spotLightShadows: {
        value: [],
        properties: {
          shadowIntensity: 1,
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
        },
      },
      spotLightMap: { value: [] },
      spotShadowMap: { value: [] },
      spotLightMatrix: { value: [] },
      pointLights: {
        value: [],
        properties: { color: {}, position: {}, decay: {}, distance: {} },
      },
      pointLightShadows: {
        value: [],
        properties: {
          shadowIntensity: 1,
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
          shadowCameraNear: {},
          shadowCameraFar: {},
        },
      },
      pointShadowMap: { value: [] },
      pointShadowMatrix: { value: [] },
      hemisphereLights: {
        value: [],
        properties: { direction: {}, skyColor: {}, groundColor: {} },
      },
      rectAreaLights: {
        value: [],
        properties: { color: {}, position: {}, width: {}, height: {} },
      },
      ltc_1: { value: null },
      ltc_2: { value: null },
    },
    points: {
      diffuse: { value: new pt(16777215) },
      opacity: { value: 1 },
      size: { value: 1 },
      scale: { value: 1 },
      map: { value: null },
      alphaMap: { value: null },
      alphaMapTransform: { value: new rt() },
      alphaTest: { value: 0 },
      uvTransform: { value: new rt() },
    },
    sprite: {
      diffuse: { value: new pt(16777215) },
      opacity: { value: 1 },
      center: { value: new it(0.5, 0.5) },
      rotation: { value: 0 },
      map: { value: null },
      mapTransform: { value: new rt() },
      alphaMap: { value: null },
      alphaMapTransform: { value: new rt() },
      alphaTest: { value: 0 },
    },
  },
  Pn = {
    basic: {
      uniforms: nn([
        Pe.common,
        Pe.specularmap,
        Pe.envmap,
        Pe.aomap,
        Pe.lightmap,
        Pe.fog,
      ]),
      vertexShader: ot.meshbasic_vert,
      fragmentShader: ot.meshbasic_frag,
    },
    lambert: {
      uniforms: nn([
        Pe.common,
        Pe.specularmap,
        Pe.envmap,
        Pe.aomap,
        Pe.lightmap,
        Pe.emissivemap,
        Pe.bumpmap,
        Pe.normalmap,
        Pe.displacementmap,
        Pe.fog,
        Pe.lights,
        { emissive: { value: new pt(0) } },
      ]),
      vertexShader: ot.meshlambert_vert,
      fragmentShader: ot.meshlambert_frag,
    },
    phong: {
      uniforms: nn([
        Pe.common,
        Pe.specularmap,
        Pe.envmap,
        Pe.aomap,
        Pe.lightmap,
        Pe.emissivemap,
        Pe.bumpmap,
        Pe.normalmap,
        Pe.displacementmap,
        Pe.fog,
        Pe.lights,
        {
          emissive: { value: new pt(0) },
          specular: { value: new pt(1118481) },
          shininess: { value: 30 },
        },
      ]),
      vertexShader: ot.meshphong_vert,
      fragmentShader: ot.meshphong_frag,
    },
    standard: {
      uniforms: nn([
        Pe.common,
        Pe.envmap,
        Pe.aomap,
        Pe.lightmap,
        Pe.emissivemap,
        Pe.bumpmap,
        Pe.normalmap,
        Pe.displacementmap,
        Pe.roughnessmap,
        Pe.metalnessmap,
        Pe.fog,
        Pe.lights,
        {
          emissive: { value: new pt(0) },
          roughness: { value: 1 },
          metalness: { value: 0 },
          envMapIntensity: { value: 1 },
        },
      ]),
      vertexShader: ot.meshphysical_vert,
      fragmentShader: ot.meshphysical_frag,
    },
    toon: {
      uniforms: nn([
        Pe.common,
        Pe.aomap,
        Pe.lightmap,
        Pe.emissivemap,
        Pe.bumpmap,
        Pe.normalmap,
        Pe.displacementmap,
        Pe.gradientmap,
        Pe.fog,
        Pe.lights,
        { emissive: { value: new pt(0) } },
      ]),
      vertexShader: ot.meshtoon_vert,
      fragmentShader: ot.meshtoon_frag,
    },
    matcap: {
      uniforms: nn([
        Pe.common,
        Pe.bumpmap,
        Pe.normalmap,
        Pe.displacementmap,
        Pe.fog,
        { matcap: { value: null } },
      ]),
      vertexShader: ot.meshmatcap_vert,
      fragmentShader: ot.meshmatcap_frag,
    },
    points: {
      uniforms: nn([Pe.points, Pe.fog]),
      vertexShader: ot.points_vert,
      fragmentShader: ot.points_frag,
    },
    dashed: {
      uniforms: nn([
        Pe.common,
        Pe.fog,
        {
          scale: { value: 1 },
          dashSize: { value: 1 },
          totalSize: { value: 2 },
        },
      ]),
      vertexShader: ot.linedashed_vert,
      fragmentShader: ot.linedashed_frag,
    },
    depth: {
      uniforms: nn([Pe.common, Pe.displacementmap]),
      vertexShader: ot.depth_vert,
      fragmentShader: ot.depth_frag,
    },
    normal: {
      uniforms: nn([
        Pe.common,
        Pe.bumpmap,
        Pe.normalmap,
        Pe.displacementmap,
        { opacity: { value: 1 } },
      ]),
      vertexShader: ot.meshnormal_vert,
      fragmentShader: ot.meshnormal_frag,
    },
    sprite: {
      uniforms: nn([Pe.sprite, Pe.fog]),
      vertexShader: ot.sprite_vert,
      fragmentShader: ot.sprite_frag,
    },
    background: {
      uniforms: {
        uvTransform: { value: new rt() },
        t2D: { value: null },
        backgroundIntensity: { value: 1 },
      },
      vertexShader: ot.background_vert,
      fragmentShader: ot.background_frag,
    },
    backgroundCube: {
      uniforms: {
        envMap: { value: null },
        flipEnvMap: { value: -1 },
        backgroundBlurriness: { value: 0 },
        backgroundIntensity: { value: 1 },
        backgroundRotation: { value: new rt() },
      },
      vertexShader: ot.backgroundCube_vert,
      fragmentShader: ot.backgroundCube_frag,
    },
    cube: {
      uniforms: {
        tCube: { value: null },
        tFlip: { value: -1 },
        opacity: { value: 1 },
      },
      vertexShader: ot.cube_vert,
      fragmentShader: ot.cube_frag,
    },
    equirect: {
      uniforms: { tEquirect: { value: null } },
      vertexShader: ot.equirect_vert,
      fragmentShader: ot.equirect_frag,
    },
    distanceRGBA: {
      uniforms: nn([
        Pe.common,
        Pe.displacementmap,
        {
          referencePosition: { value: new K() },
          nearDistance: { value: 1 },
          farDistance: { value: 1e3 },
        },
      ]),
      vertexShader: ot.distanceRGBA_vert,
      fragmentShader: ot.distanceRGBA_frag,
    },
    shadow: {
      uniforms: nn([
        Pe.lights,
        Pe.fog,
        { color: { value: new pt(0) }, opacity: { value: 1 } },
      ]),
      vertexShader: ot.shadow_vert,
      fragmentShader: ot.shadow_frag,
    },
  };
Pn.physical = {
  uniforms: nn([
    Pn.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatMapTransform: { value: new rt() },
      clearcoatNormalMap: { value: null },
      clearcoatNormalMapTransform: { value: new rt() },
      clearcoatNormalScale: { value: new it(1, 1) },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatRoughnessMapTransform: { value: new rt() },
      dispersion: { value: 0 },
      iridescence: { value: 0 },
      iridescenceMap: { value: null },
      iridescenceMapTransform: { value: new rt() },
      iridescenceIOR: { value: 1.3 },
      iridescenceThicknessMinimum: { value: 100 },
      iridescenceThicknessMaximum: { value: 400 },
      iridescenceThicknessMap: { value: null },
      iridescenceThicknessMapTransform: { value: new rt() },
      sheen: { value: 0 },
      sheenColor: { value: new pt(0) },
      sheenColorMap: { value: null },
      sheenColorMapTransform: { value: new rt() },
      sheenRoughness: { value: 1 },
      sheenRoughnessMap: { value: null },
      sheenRoughnessMapTransform: { value: new rt() },
      transmission: { value: 0 },
      transmissionMap: { value: null },
      transmissionMapTransform: { value: new rt() },
      transmissionSamplerSize: { value: new it() },
      transmissionSamplerMap: { value: null },
      thickness: { value: 0 },
      thicknessMap: { value: null },
      thicknessMapTransform: { value: new rt() },
      attenuationDistance: { value: 0 },
      attenuationColor: { value: new pt(0) },
      specularColor: { value: new pt(1, 1, 1) },
      specularColorMap: { value: null },
      specularColorMapTransform: { value: new rt() },
      specularIntensity: { value: 1 },
      specularIntensityMap: { value: null },
      specularIntensityMapTransform: { value: new rt() },
      anisotropyVector: { value: new it() },
      anisotropyMap: { value: null },
      anisotropyMapTransform: { value: new rt() },
    },
  ]),
  vertexShader: ot.meshphysical_vert,
  fragmentShader: ot.meshphysical_frag,
};
const gs = { r: 0, b: 0, g: 0 },
  Si = new Un(),
  w0 = new Ut();
function b0(r, e, t, n, a, o, u) {
  const h = new pt(0);
  let p = o === !0 ? 0 : 1,
    d,
    v,
    _ = null,
    x = 0,
    y = null;
  function R(U) {
    let L = U.isScene === !0 ? U.background : null;
    return (
      L && L.isTexture && (L = (U.backgroundBlurriness > 0 ? t : e).get(L)),
      L
    );
  }
  function D(U) {
    let L = !1;
    const k = R(U);
    k === null ? m(h, p) : k && k.isColor && (m(k, 1), (L = !0));
    const P = r.xr.getEnvironmentBlendMode();
    (P === "additive"
      ? n.buffers.color.setClear(0, 0, 0, 1, u)
      : P === "alpha-blend" && n.buffers.color.setClear(0, 0, 0, 0, u),
      (r.autoClear || L) &&
        (n.buffers.depth.setTest(!0),
        n.buffers.depth.setMask(!0),
        n.buffers.color.setMask(!0),
        r.clear(r.autoClearColor, r.autoClearDepth, r.autoClearStencil)));
  }
  function E(U, L) {
    const k = R(L);
    k && (k.isCubeTexture || k.mapping === Cs)
      ? (v === void 0 &&
          ((v = new ln(
            new ar(1, 1, 1),
            new li({
              name: "BackgroundCubeMaterial",
              uniforms: rr(Pn.backgroundCube.uniforms),
              vertexShader: Pn.backgroundCube.vertexShader,
              fragmentShader: Pn.backgroundCube.fragmentShader,
              side: cn,
              depthTest: !1,
              depthWrite: !1,
              fog: !1,
              allowOverride: !1,
            }),
          )),
          v.geometry.deleteAttribute("normal"),
          v.geometry.deleteAttribute("uv"),
          (v.onBeforeRender = function (P, H, q) {
            this.matrixWorld.copyPosition(q.matrixWorld);
          }),
          Object.defineProperty(v.material, "envMap", {
            get: function () {
              return this.uniforms.envMap.value;
            },
          }),
          a.update(v)),
        Si.copy(L.backgroundRotation),
        (Si.x *= -1),
        (Si.y *= -1),
        (Si.z *= -1),
        k.isCubeTexture &&
          k.isRenderTargetTexture === !1 &&
          ((Si.y *= -1), (Si.z *= -1)),
        (v.material.uniforms.envMap.value = k),
        (v.material.uniforms.flipEnvMap.value =
          k.isCubeTexture && k.isRenderTargetTexture === !1 ? -1 : 1),
        (v.material.uniforms.backgroundBlurriness.value =
          L.backgroundBlurriness),
        (v.material.uniforms.backgroundIntensity.value = L.backgroundIntensity),
        v.material.uniforms.backgroundRotation.value.setFromMatrix4(
          w0.makeRotationFromEuler(Si),
        ),
        (v.material.toneMapped = gt.getTransfer(k.colorSpace) !== wt),
        (_ !== k || x !== k.version || y !== r.toneMapping) &&
          ((v.material.needsUpdate = !0),
          (_ = k),
          (x = k.version),
          (y = r.toneMapping)),
        v.layers.enableAll(),
        U.unshift(v, v.geometry, v.material, 0, 0, null))
      : k &&
        k.isTexture &&
        (d === void 0 &&
          ((d = new ln(
            new Di(2, 2),
            new li({
              name: "BackgroundMaterial",
              uniforms: rr(Pn.background.uniforms),
              vertexShader: Pn.background.vertexShader,
              fragmentShader: Pn.background.fragmentShader,
              side: oi,
              depthTest: !1,
              depthWrite: !1,
              fog: !1,
              allowOverride: !1,
            }),
          )),
          d.geometry.deleteAttribute("normal"),
          Object.defineProperty(d.material, "map", {
            get: function () {
              return this.uniforms.t2D.value;
            },
          }),
          a.update(d)),
        (d.material.uniforms.t2D.value = k),
        (d.material.uniforms.backgroundIntensity.value = L.backgroundIntensity),
        (d.material.toneMapped = gt.getTransfer(k.colorSpace) !== wt),
        k.matrixAutoUpdate === !0 && k.updateMatrix(),
        d.material.uniforms.uvTransform.value.copy(k.matrix),
        (_ !== k || x !== k.version || y !== r.toneMapping) &&
          ((d.material.needsUpdate = !0),
          (_ = k),
          (x = k.version),
          (y = r.toneMapping)),
        d.layers.enableAll(),
        U.unshift(d, d.geometry, d.material, 0, 0, null));
  }
  function m(U, L) {
    (U.getRGB(gs, Kc(r)), n.buffers.color.setClear(gs.r, gs.g, gs.b, L, u));
  }
  function N() {
    (v !== void 0 && (v.geometry.dispose(), v.material.dispose(), (v = void 0)),
      d !== void 0 &&
        (d.geometry.dispose(), d.material.dispose(), (d = void 0)));
  }
  return {
    getClearColor: function () {
      return h;
    },
    setClearColor: function (U, L = 1) {
      (h.set(U), (p = L), m(h, p));
    },
    getClearAlpha: function () {
      return p;
    },
    setClearAlpha: function (U) {
      ((p = U), m(h, p));
    },
    render: D,
    addToRenderList: E,
    dispose: N,
  };
}
function A0(r, e) {
  const t = r.getParameter(r.MAX_VERTEX_ATTRIBS),
    n = {},
    a = x(null);
  let o = a,
    u = !1;
  function h(M, z, Y, te, J) {
    let he = !1;
    const ae = _(te, Y, z);
    (o !== ae && ((o = ae), d(o.object)),
      (he = y(M, te, Y, J)),
      he && R(M, te, Y, J),
      J !== null && e.update(J, r.ELEMENT_ARRAY_BUFFER),
      (he || u) &&
        ((u = !1),
        L(M, z, Y, te),
        J !== null && r.bindBuffer(r.ELEMENT_ARRAY_BUFFER, e.get(J).buffer)));
  }
  function p() {
    return r.createVertexArray();
  }
  function d(M) {
    return r.bindVertexArray(M);
  }
  function v(M) {
    return r.deleteVertexArray(M);
  }
  function _(M, z, Y) {
    const te = Y.wireframe === !0;
    let J = n[M.id];
    J === void 0 && ((J = {}), (n[M.id] = J));
    let he = J[z.id];
    he === void 0 && ((he = {}), (J[z.id] = he));
    let ae = he[te];
    return (ae === void 0 && ((ae = x(p())), (he[te] = ae)), ae);
  }
  function x(M) {
    const z = [],
      Y = [],
      te = [];
    for (let J = 0; J < t; J++) ((z[J] = 0), (Y[J] = 0), (te[J] = 0));
    return {
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: z,
      enabledAttributes: Y,
      attributeDivisors: te,
      object: M,
      attributes: {},
      index: null,
    };
  }
  function y(M, z, Y, te) {
    const J = o.attributes,
      he = z.attributes;
    let ae = 0;
    const ie = Y.getAttributes();
    for (const Q in ie)
      if (ie[Q].location >= 0) {
        const we = J[Q];
        let Re = he[Q];
        if (
          (Re === void 0 &&
            (Q === "instanceMatrix" &&
              M.instanceMatrix &&
              (Re = M.instanceMatrix),
            Q === "instanceColor" && M.instanceColor && (Re = M.instanceColor)),
          we === void 0 || we.attribute !== Re || (Re && we.data !== Re.data))
        )
          return !0;
        ae++;
      }
    return o.attributesNum !== ae || o.index !== te;
  }
  function R(M, z, Y, te) {
    const J = {},
      he = z.attributes;
    let ae = 0;
    const ie = Y.getAttributes();
    for (const Q in ie)
      if (ie[Q].location >= 0) {
        let we = he[Q];
        we === void 0 &&
          (Q === "instanceMatrix" &&
            M.instanceMatrix &&
            (we = M.instanceMatrix),
          Q === "instanceColor" && M.instanceColor && (we = M.instanceColor));
        const Re = {};
        ((Re.attribute = we),
          we && we.data && (Re.data = we.data),
          (J[Q] = Re),
          ae++);
      }
    ((o.attributes = J), (o.attributesNum = ae), (o.index = te));
  }
  function D() {
    const M = o.newAttributes;
    for (let z = 0, Y = M.length; z < Y; z++) M[z] = 0;
  }
  function E(M) {
    m(M, 0);
  }
  function m(M, z) {
    const Y = o.newAttributes,
      te = o.enabledAttributes,
      J = o.attributeDivisors;
    ((Y[M] = 1),
      te[M] === 0 && (r.enableVertexAttribArray(M), (te[M] = 1)),
      J[M] !== z && (r.vertexAttribDivisor(M, z), (J[M] = z)));
  }
  function N() {
    const M = o.newAttributes,
      z = o.enabledAttributes;
    for (let Y = 0, te = z.length; Y < te; Y++)
      z[Y] !== M[Y] && (r.disableVertexAttribArray(Y), (z[Y] = 0));
  }
  function U(M, z, Y, te, J, he, ae) {
    ae === !0
      ? r.vertexAttribIPointer(M, z, Y, J, he)
      : r.vertexAttribPointer(M, z, Y, te, J, he);
  }
  function L(M, z, Y, te) {
    D();
    const J = te.attributes,
      he = Y.getAttributes(),
      ae = z.defaultAttributeValues;
    for (const ie in he) {
      const Q = he[ie];
      if (Q.location >= 0) {
        let Ee = J[ie];
        if (
          (Ee === void 0 &&
            (ie === "instanceMatrix" &&
              M.instanceMatrix &&
              (Ee = M.instanceMatrix),
            ie === "instanceColor" &&
              M.instanceColor &&
              (Ee = M.instanceColor)),
          Ee !== void 0)
        ) {
          const we = Ee.normalized,
            Re = Ee.itemSize,
            We = e.get(Ee);
          if (We === void 0) continue;
          const Ke = We.buffer,
            tt = We.type,
            Qe = We.bytesPerElement,
            se = tt === r.INT || tt === r.UNSIGNED_INT || Ee.gpuType === Mo;
          if (Ee.isInterleavedBufferAttribute) {
            const de = Ee.data,
              le = de.stride,
              Me = Ee.offset;
            if (de.isInstancedInterleavedBuffer) {
              for (let He = 0; He < Q.locationSize; He++)
                m(Q.location + He, de.meshPerAttribute);
              M.isInstancedMesh !== !0 &&
                te._maxInstanceCount === void 0 &&
                (te._maxInstanceCount = de.meshPerAttribute * de.count);
            } else
              for (let He = 0; He < Q.locationSize; He++) E(Q.location + He);
            r.bindBuffer(r.ARRAY_BUFFER, Ke);
            for (let He = 0; He < Q.locationSize; He++)
              U(
                Q.location + He,
                Re / Q.locationSize,
                tt,
                we,
                le * Qe,
                (Me + (Re / Q.locationSize) * He) * Qe,
                se,
              );
          } else {
            if (Ee.isInstancedBufferAttribute) {
              for (let de = 0; de < Q.locationSize; de++)
                m(Q.location + de, Ee.meshPerAttribute);
              M.isInstancedMesh !== !0 &&
                te._maxInstanceCount === void 0 &&
                (te._maxInstanceCount = Ee.meshPerAttribute * Ee.count);
            } else
              for (let de = 0; de < Q.locationSize; de++) E(Q.location + de);
            r.bindBuffer(r.ARRAY_BUFFER, Ke);
            for (let de = 0; de < Q.locationSize; de++)
              U(
                Q.location + de,
                Re / Q.locationSize,
                tt,
                we,
                Re * Qe,
                (Re / Q.locationSize) * de * Qe,
                se,
              );
          }
        } else if (ae !== void 0) {
          const we = ae[ie];
          if (we !== void 0)
            switch (we.length) {
              case 2:
                r.vertexAttrib2fv(Q.location, we);
                break;
              case 3:
                r.vertexAttrib3fv(Q.location, we);
                break;
              case 4:
                r.vertexAttrib4fv(Q.location, we);
                break;
              default:
                r.vertexAttrib1fv(Q.location, we);
            }
        }
      }
    }
    N();
  }
  function k() {
    q();
    for (const M in n) {
      const z = n[M];
      for (const Y in z) {
        const te = z[Y];
        for (const J in te) (v(te[J].object), delete te[J]);
        delete z[Y];
      }
      delete n[M];
    }
  }
  function P(M) {
    if (n[M.id] === void 0) return;
    const z = n[M.id];
    for (const Y in z) {
      const te = z[Y];
      for (const J in te) (v(te[J].object), delete te[J]);
      delete z[Y];
    }
    delete n[M.id];
  }
  function H(M) {
    for (const z in n) {
      const Y = n[z];
      if (Y[M.id] === void 0) continue;
      const te = Y[M.id];
      for (const J in te) (v(te[J].object), delete te[J]);
      delete Y[M.id];
    }
  }
  function q() {
    (C(), (u = !0), o !== a && ((o = a), d(o.object)));
  }
  function C() {
    ((a.geometry = null), (a.program = null), (a.wireframe = !1));
  }
  return {
    setup: h,
    reset: q,
    resetDefaultState: C,
    dispose: k,
    releaseStatesOfGeometry: P,
    releaseStatesOfProgram: H,
    initAttributes: D,
    enableAttribute: E,
    disableUnusedAttributes: N,
  };
}
function R0(r, e, t) {
  let n;
  function a(d) {
    n = d;
  }
  function o(d, v) {
    (r.drawArrays(n, d, v), t.update(v, n, 1));
  }
  function u(d, v, _) {
    _ !== 0 && (r.drawArraysInstanced(n, d, v, _), t.update(v, n, _));
  }
  function h(d, v, _) {
    if (_ === 0) return;
    e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n, d, 0, v, 0, _);
    let y = 0;
    for (let R = 0; R < _; R++) y += v[R];
    t.update(y, n, 1);
  }
  function p(d, v, _, x) {
    if (_ === 0) return;
    const y = e.get("WEBGL_multi_draw");
    if (y === null) for (let R = 0; R < d.length; R++) u(d[R], v[R], x[R]);
    else {
      y.multiDrawArraysInstancedWEBGL(n, d, 0, v, 0, x, 0, _);
      let R = 0;
      for (let D = 0; D < _; D++) R += v[D] * x[D];
      t.update(R, n, 1);
    }
  }
  ((this.setMode = a),
    (this.render = o),
    (this.renderInstances = u),
    (this.renderMultiDraw = h),
    (this.renderMultiDrawInstances = p));
}
function C0(r, e, t, n) {
  let a;
  function o() {
    if (a !== void 0) return a;
    if (e.has("EXT_texture_filter_anisotropic") === !0) {
      const H = e.get("EXT_texture_filter_anisotropic");
      a = r.getParameter(H.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else a = 0;
    return a;
  }
  function u(H) {
    return !(
      H !== Tn &&
      n.convert(H) !== r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT)
    );
  }
  function h(H) {
    const q =
      H === Ar &&
      (e.has("EXT_color_buffer_half_float") || e.has("EXT_color_buffer_float"));
    return !(
      H !== In &&
      n.convert(H) !== r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE) &&
      H !== jn &&
      !q
    );
  }
  function p(H) {
    if (H === "highp") {
      if (
        r.getShaderPrecisionFormat(r.VERTEX_SHADER, r.HIGH_FLOAT).precision >
          0 &&
        r.getShaderPrecisionFormat(r.FRAGMENT_SHADER, r.HIGH_FLOAT).precision >
          0
      )
        return "highp";
      H = "mediump";
    }
    return H === "mediump" &&
      r.getShaderPrecisionFormat(r.VERTEX_SHADER, r.MEDIUM_FLOAT).precision >
        0 &&
      r.getShaderPrecisionFormat(r.FRAGMENT_SHADER, r.MEDIUM_FLOAT).precision >
        0
      ? "mediump"
      : "lowp";
  }
  let d = t.precision !== void 0 ? t.precision : "highp";
  const v = p(d);
  v !== d &&
    (console.warn(
      "THREE.WebGLRenderer:",
      d,
      "not supported, using",
      v,
      "instead.",
    ),
    (d = v));
  const _ = t.logarithmicDepthBuffer === !0,
    x = t.reversedDepthBuffer === !0 && e.has("EXT_clip_control"),
    y = r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),
    R = r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
    D = r.getParameter(r.MAX_TEXTURE_SIZE),
    E = r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),
    m = r.getParameter(r.MAX_VERTEX_ATTRIBS),
    N = r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),
    U = r.getParameter(r.MAX_VARYING_VECTORS),
    L = r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),
    k = R > 0,
    P = r.getParameter(r.MAX_SAMPLES);
  return {
    isWebGL2: !0,
    getMaxAnisotropy: o,
    getMaxPrecision: p,
    textureFormatReadable: u,
    textureTypeReadable: h,
    precision: d,
    logarithmicDepthBuffer: _,
    reversedDepthBuffer: x,
    maxTextures: y,
    maxVertexTextures: R,
    maxTextureSize: D,
    maxCubemapSize: E,
    maxAttributes: m,
    maxVertexUniforms: N,
    maxVaryings: U,
    maxFragmentUniforms: L,
    vertexTextures: k,
    maxSamples: P,
  };
}
function P0(r) {
  const e = this;
  let t = null,
    n = 0,
    a = !1,
    o = !1;
  const u = new ii(),
    h = new rt(),
    p = { value: null, needsUpdate: !1 };
  ((this.uniform = p),
    (this.numPlanes = 0),
    (this.numIntersection = 0),
    (this.init = function (_, x) {
      const y = _.length !== 0 || x || n !== 0 || a;
      return ((a = x), (n = _.length), y);
    }),
    (this.beginShadows = function () {
      ((o = !0), v(null));
    }),
    (this.endShadows = function () {
      o = !1;
    }),
    (this.setGlobalState = function (_, x) {
      t = v(_, x, 0);
    }),
    (this.setState = function (_, x, y) {
      const R = _.clippingPlanes,
        D = _.clipIntersection,
        E = _.clipShadows,
        m = r.get(_);
      if (!a || R === null || R.length === 0 || (o && !E)) o ? v(null) : d();
      else {
        const N = o ? 0 : n,
          U = N * 4;
        let L = m.clippingState || null;
        ((p.value = L), (L = v(R, x, U, y)));
        for (let k = 0; k !== U; ++k) L[k] = t[k];
        ((m.clippingState = L),
          (this.numIntersection = D ? this.numPlanes : 0),
          (this.numPlanes += N));
      }
    }));
  function d() {
    (p.value !== t && ((p.value = t), (p.needsUpdate = n > 0)),
      (e.numPlanes = n),
      (e.numIntersection = 0));
  }
  function v(_, x, y, R) {
    const D = _ !== null ? _.length : 0;
    let E = null;
    if (D !== 0) {
      if (((E = p.value), R !== !0 || E === null)) {
        const m = y + D * 4,
          N = x.matrixWorldInverse;
        (h.getNormalMatrix(N),
          (E === null || E.length < m) && (E = new Float32Array(m)));
        for (let U = 0, L = y; U !== D; ++U, L += 4)
          (u.copy(_[U]).applyMatrix4(N, h),
            u.normal.toArray(E, L),
            (E[L + 3] = u.constant));
      }
      ((p.value = E), (p.needsUpdate = !0));
    }
    return ((e.numPlanes = D), (e.numIntersection = 0), E);
  }
}
function D0(r) {
  let e = new WeakMap();
  function t(u, h) {
    return (h === Ha ? (u.mapping = tr) : h === Va && (u.mapping = nr), u);
  }
  function n(u) {
    if (u && u.isTexture) {
      const h = u.mapping;
      if (h === Ha || h === Va)
        if (e.has(u)) {
          const p = e.get(u).texture;
          return t(p, u.mapping);
        } else {
          const p = u.image;
          if (p && p.height > 0) {
            const d = new b_(p.height);
            return (
              d.fromEquirectangularTexture(r, u),
              e.set(u, d),
              u.addEventListener("dispose", a),
              t(d.texture, u.mapping)
            );
          } else return null;
        }
    }
    return u;
  }
  function a(u) {
    const h = u.target;
    h.removeEventListener("dispose", a);
    const p = e.get(h);
    p !== void 0 && (e.delete(h), p.dispose());
  }
  function o() {
    e = new WeakMap();
  }
  return { get: n, dispose: o };
}
const Ki = 4,
  Jl = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582],
  wi = 20,
  Ta = new nu(),
  Ql = new pt();
let wa = null,
  ba = 0,
  Aa = 0,
  Ra = !1;
const Mi = (1 + Math.sqrt(5)) / 2,
  qi = 1 / Mi,
  ec = [
    new K(-Mi, qi, 0),
    new K(Mi, qi, 0),
    new K(-qi, 0, Mi),
    new K(qi, 0, Mi),
    new K(0, Mi, -qi),
    new K(0, Mi, qi),
    new K(-1, 1, -1),
    new K(1, 1, -1),
    new K(-1, 1, 1),
    new K(1, 1, 1),
  ],
  L0 = new K();
class tc {
  constructor(e) {
    ((this._renderer = e),
      (this._pingPongRenderTarget = null),
      (this._lodMax = 0),
      (this._cubeSize = 0),
      (this._lodPlanes = []),
      (this._sizeLods = []),
      (this._sigmas = []),
      (this._blurMaterial = null),
      (this._cubemapMaterial = null),
      (this._equirectMaterial = null),
      this._compileMaterial(this._blurMaterial));
  }
  fromScene(e, t = 0, n = 0.1, a = 100, o = {}) {
    const { size: u = 256, position: h = L0 } = o;
    ((wa = this._renderer.getRenderTarget()),
      (ba = this._renderer.getActiveCubeFace()),
      (Aa = this._renderer.getActiveMipmapLevel()),
      (Ra = this._renderer.xr.enabled),
      (this._renderer.xr.enabled = !1),
      this._setSize(u));
    const p = this._allocateTargets();
    return (
      (p.depthBuffer = !0),
      this._sceneToCubeUV(e, n, a, p, h),
      t > 0 && this._blur(p, 0, 0, t),
      this._applyPMREM(p),
      this._cleanup(p),
      p
    );
  }
  fromEquirectangular(e, t = null) {
    return this._fromTexture(e, t);
  }
  fromCubemap(e, t = null) {
    return this._fromTexture(e, t);
  }
  compileCubemapShader() {
    this._cubemapMaterial === null &&
      ((this._cubemapMaterial = rc()),
      this._compileMaterial(this._cubemapMaterial));
  }
  compileEquirectangularShader() {
    this._equirectMaterial === null &&
      ((this._equirectMaterial = ic()),
      this._compileMaterial(this._equirectMaterial));
  }
  dispose() {
    (this._dispose(),
      this._cubemapMaterial !== null && this._cubemapMaterial.dispose(),
      this._equirectMaterial !== null && this._equirectMaterial.dispose());
  }
  _setSize(e) {
    ((this._lodMax = Math.floor(Math.log2(e))),
      (this._cubeSize = Math.pow(2, this._lodMax)));
  }
  _dispose() {
    (this._blurMaterial !== null && this._blurMaterial.dispose(),
      this._pingPongRenderTarget !== null &&
        this._pingPongRenderTarget.dispose());
    for (let e = 0; e < this._lodPlanes.length; e++)
      this._lodPlanes[e].dispose();
  }
  _cleanup(e) {
    (this._renderer.setRenderTarget(wa, ba, Aa),
      (this._renderer.xr.enabled = Ra),
      (e.scissorTest = !1),
      vs(e, 0, 0, e.width, e.height));
  }
  _fromTexture(e, t) {
    (e.mapping === tr || e.mapping === nr
      ? this._setSize(
          e.image.length === 0
            ? 16
            : e.image[0].width || e.image[0].image.width,
        )
      : this._setSize(e.image.width / 4),
      (wa = this._renderer.getRenderTarget()),
      (ba = this._renderer.getActiveCubeFace()),
      (Aa = this._renderer.getActiveMipmapLevel()),
      (Ra = this._renderer.xr.enabled),
      (this._renderer.xr.enabled = !1));
    const n = t || this._allocateTargets();
    return (
      this._textureToCubeUV(e, n),
      this._applyPMREM(n),
      this._cleanup(n),
      n
    );
  }
  _allocateTargets() {
    const e = 3 * Math.max(this._cubeSize, 112),
      t = 4 * this._cubeSize,
      n = {
        magFilter: Dn,
        minFilter: Dn,
        generateMipmaps: !1,
        type: Ar,
        format: Tn,
        colorSpace: ir,
        depthBuffer: !1,
      },
      a = nc(e, t, n);
    if (
      this._pingPongRenderTarget === null ||
      this._pingPongRenderTarget.width !== e ||
      this._pingPongRenderTarget.height !== t
    ) {
      (this._pingPongRenderTarget !== null && this._dispose(),
        (this._pingPongRenderTarget = nc(e, t, n)));
      const { _lodMax: o } = this;
      (({
        sizeLods: this._sizeLods,
        lodPlanes: this._lodPlanes,
        sigmas: this._sigmas,
      } = F0(o)),
        (this._blurMaterial = I0(o, e, t)));
    }
    return a;
  }
  _compileMaterial(e) {
    const t = new ln(this._lodPlanes[0], e);
    this._renderer.compile(t, Ta);
  }
  _sceneToCubeUV(e, t, n, a, o) {
    const p = new mn(90, 1, t, n),
      d = [1, -1, 1, 1, 1, 1],
      v = [1, 1, 1, -1, -1, -1],
      _ = this._renderer,
      x = _.autoClear,
      y = _.toneMapping;
    (_.getClearColor(Ql),
      (_.toneMapping = ai),
      (_.autoClear = !1),
      _.state.buffers.depth.getReversed() &&
        (_.setRenderTarget(a), _.clearDepth(), _.setRenderTarget(null)));
    const D = new jc({
        name: "PMREM.Background",
        side: cn,
        depthWrite: !1,
        depthTest: !1,
      }),
      E = new ln(new ar(), D);
    let m = !1;
    const N = e.background;
    N
      ? N.isColor && (D.color.copy(N), (e.background = null), (m = !0))
      : (D.color.copy(Ql), (m = !0));
    for (let U = 0; U < 6; U++) {
      const L = U % 3;
      L === 0
        ? (p.up.set(0, d[U], 0),
          p.position.set(o.x, o.y, o.z),
          p.lookAt(o.x + v[U], o.y, o.z))
        : L === 1
          ? (p.up.set(0, 0, d[U]),
            p.position.set(o.x, o.y, o.z),
            p.lookAt(o.x, o.y + v[U], o.z))
          : (p.up.set(0, d[U], 0),
            p.position.set(o.x, o.y, o.z),
            p.lookAt(o.x, o.y, o.z + v[U]));
      const k = this._cubeSize;
      (vs(a, L * k, U > 2 ? k : 0, k, k),
        _.setRenderTarget(a),
        m && _.render(E, p),
        _.render(e, p));
    }
    (E.geometry.dispose(),
      E.material.dispose(),
      (_.toneMapping = y),
      (_.autoClear = x),
      (e.background = N));
  }
  _textureToCubeUV(e, t) {
    const n = this._renderer,
      a = e.mapping === tr || e.mapping === nr;
    a
      ? (this._cubemapMaterial === null && (this._cubemapMaterial = rc()),
        (this._cubemapMaterial.uniforms.flipEnvMap.value =
          e.isRenderTargetTexture === !1 ? -1 : 1))
      : this._equirectMaterial === null && (this._equirectMaterial = ic());
    const o = a ? this._cubemapMaterial : this._equirectMaterial,
      u = new ln(this._lodPlanes[0], o),
      h = o.uniforms;
    h.envMap.value = e;
    const p = this._cubeSize;
    (vs(t, 0, 0, 3 * p, 2 * p), n.setRenderTarget(t), n.render(u, Ta));
  }
  _applyPMREM(e) {
    const t = this._renderer,
      n = t.autoClear;
    t.autoClear = !1;
    const a = this._lodPlanes.length;
    for (let o = 1; o < a; o++) {
      const u = Math.sqrt(
          this._sigmas[o] * this._sigmas[o] -
            this._sigmas[o - 1] * this._sigmas[o - 1],
        ),
        h = ec[(a - o - 1) % ec.length];
      this._blur(e, o - 1, o, u, h);
    }
    t.autoClear = n;
  }
  _blur(e, t, n, a, o) {
    const u = this._pingPongRenderTarget;
    (this._halfBlur(e, u, t, n, a, "latitudinal", o),
      this._halfBlur(u, e, n, n, a, "longitudinal", o));
  }
  _halfBlur(e, t, n, a, o, u, h) {
    const p = this._renderer,
      d = this._blurMaterial;
    u !== "latitudinal" &&
      u !== "longitudinal" &&
      console.error(
        "blur direction must be either latitudinal or longitudinal!",
      );
    const v = 3,
      _ = new ln(this._lodPlanes[a], d),
      x = d.uniforms,
      y = this._sizeLods[n] - 1,
      R = isFinite(o) ? Math.PI / (2 * y) : (2 * Math.PI) / (2 * wi - 1),
      D = o / R,
      E = isFinite(o) ? 1 + Math.floor(v * D) : wi;
    E > wi &&
      console.warn(
        `sigmaRadians, ${o}, is too large and will clip, as it requested ${E} samples when the maximum is set to ${wi}`,
      );
    const m = [];
    let N = 0;
    for (let H = 0; H < wi; ++H) {
      const q = H / D,
        C = Math.exp((-q * q) / 2);
      (m.push(C), H === 0 ? (N += C) : H < E && (N += 2 * C));
    }
    for (let H = 0; H < m.length; H++) m[H] = m[H] / N;
    ((x.envMap.value = e.texture),
      (x.samples.value = E),
      (x.weights.value = m),
      (x.latitudinal.value = u === "latitudinal"),
      h && (x.poleAxis.value = h));
    const { _lodMax: U } = this;
    ((x.dTheta.value = R), (x.mipInt.value = U - n));
    const L = this._sizeLods[a],
      k = 3 * L * (a > U - Ki ? a - U + Ki : 0),
      P = 4 * (this._cubeSize - L);
    (vs(t, k, P, 3 * L, 2 * L), p.setRenderTarget(t), p.render(_, Ta));
  }
}
function F0(r) {
  const e = [],
    t = [],
    n = [];
  let a = r;
  const o = r - Ki + 1 + Jl.length;
  for (let u = 0; u < o; u++) {
    const h = Math.pow(2, a);
    t.push(h);
    let p = 1 / h;
    (u > r - Ki ? (p = Jl[u - r + Ki - 1]) : u === 0 && (p = 0), n.push(p));
    const d = 1 / (h - 2),
      v = -d,
      _ = 1 + d,
      x = [v, v, _, v, _, _, v, v, _, _, v, _],
      y = 6,
      R = 6,
      D = 3,
      E = 2,
      m = 1,
      N = new Float32Array(D * R * y),
      U = new Float32Array(E * R * y),
      L = new Float32Array(m * R * y);
    for (let P = 0; P < y; P++) {
      const H = ((P % 3) * 2) / 3 - 1,
        q = P > 2 ? 0 : -1,
        C = [
          H,
          q,
          0,
          H + 2 / 3,
          q,
          0,
          H + 2 / 3,
          q + 1,
          0,
          H,
          q,
          0,
          H + 2 / 3,
          q + 1,
          0,
          H,
          q + 1,
          0,
        ];
      (N.set(C, D * R * P), U.set(x, E * R * P));
      const M = [P, P, P, P, P, P];
      L.set(M, m * R * P);
    }
    const k = new gn();
    (k.setAttribute("position", new _n(N, D)),
      k.setAttribute("uv", new _n(U, E)),
      k.setAttribute("faceIndex", new _n(L, m)),
      e.push(k),
      a > Ki && a--);
  }
  return { lodPlanes: e, sizeLods: t, sigmas: n };
}
function nc(r, e, t) {
  const n = new Pi(r, e, t);
  return (
    (n.texture.mapping = Cs),
    (n.texture.name = "PMREM.cubeUv"),
    (n.scissorTest = !0),
    n
  );
}
function vs(r, e, t, n, a) {
  (r.viewport.set(e, t, n, a), r.scissor.set(e, t, n, a));
}
function I0(r, e, t) {
  const n = new Float32Array(wi),
    a = new K(0, 1, 0);
  return new li({
    name: "SphericalGaussianBlur",
    defines: {
      n: wi,
      CUBEUV_TEXEL_WIDTH: 1 / e,
      CUBEUV_TEXEL_HEIGHT: 1 / t,
      CUBEUV_MAX_MIP: `${r}.0`,
    },
    uniforms: {
      envMap: { value: null },
      samples: { value: 1 },
      weights: { value: n },
      latitudinal: { value: !1 },
      dTheta: { value: 0 },
      mipInt: { value: 0 },
      poleAxis: { value: a },
    },
    vertexShader: Uo(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,
    blending: si,
    depthTest: !1,
    depthWrite: !1,
  });
}
function ic() {
  return new li({
    name: "EquirectangularToCubeUV",
    uniforms: { envMap: { value: null } },
    vertexShader: Uo(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,
    blending: si,
    depthTest: !1,
    depthWrite: !1,
  });
}
function rc() {
  return new li({
    name: "CubemapToCubeUV",
    uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 } },
    vertexShader: Uo(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,
    blending: si,
    depthTest: !1,
    depthWrite: !1,
  });
}
function Uo() {
  return `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`;
}
function U0(r) {
  let e = new WeakMap(),
    t = null;
  function n(h) {
    if (h && h.isTexture) {
      const p = h.mapping,
        d = p === Ha || p === Va,
        v = p === tr || p === nr;
      if (d || v) {
        let _ = e.get(h);
        const x = _ !== void 0 ? _.texture.pmremVersion : 0;
        if (h.isRenderTargetTexture && h.pmremVersion !== x)
          return (
            t === null && (t = new tc(r)),
            (_ = d ? t.fromEquirectangular(h, _) : t.fromCubemap(h, _)),
            (_.texture.pmremVersion = h.pmremVersion),
            e.set(h, _),
            _.texture
          );
        if (_ !== void 0) return _.texture;
        {
          const y = h.image;
          return (d && y && y.height > 0) || (v && y && a(y))
            ? (t === null && (t = new tc(r)),
              (_ = d ? t.fromEquirectangular(h) : t.fromCubemap(h)),
              (_.texture.pmremVersion = h.pmremVersion),
              e.set(h, _),
              h.addEventListener("dispose", o),
              _.texture)
            : null;
        }
      }
    }
    return h;
  }
  function a(h) {
    let p = 0;
    const d = 6;
    for (let v = 0; v < d; v++) h[v] !== void 0 && p++;
    return p === d;
  }
  function o(h) {
    const p = h.target;
    p.removeEventListener("dispose", o);
    const d = e.get(p);
    d !== void 0 && (e.delete(p), d.dispose());
  }
  function u() {
    ((e = new WeakMap()), t !== null && (t.dispose(), (t = null)));
  }
  return { get: n, dispose: u };
}
function N0(r) {
  const e = {};
  function t(n) {
    if (e[n] !== void 0) return e[n];
    let a;
    switch (n) {
      case "WEBGL_depth_texture":
        a =
          r.getExtension("WEBGL_depth_texture") ||
          r.getExtension("MOZ_WEBGL_depth_texture") ||
          r.getExtension("WEBKIT_WEBGL_depth_texture");
        break;
      case "EXT_texture_filter_anisotropic":
        a =
          r.getExtension("EXT_texture_filter_anisotropic") ||
          r.getExtension("MOZ_EXT_texture_filter_anisotropic") ||
          r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
        break;
      case "WEBGL_compressed_texture_s3tc":
        a =
          r.getExtension("WEBGL_compressed_texture_s3tc") ||
          r.getExtension("MOZ_WEBGL_compressed_texture_s3tc") ||
          r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
        break;
      case "WEBGL_compressed_texture_pvrtc":
        a =
          r.getExtension("WEBGL_compressed_texture_pvrtc") ||
          r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
        break;
      default:
        a = r.getExtension(n);
    }
    return ((e[n] = a), a);
  }
  return {
    has: function (n) {
      return t(n) !== null;
    },
    init: function () {
      (t("EXT_color_buffer_float"),
        t("WEBGL_clip_cull_distance"),
        t("OES_texture_float_linear"),
        t("EXT_color_buffer_half_float"),
        t("WEBGL_multisampled_render_to_texture"),
        t("WEBGL_render_shared_exponent"));
    },
    get: function (n) {
      const a = t(n);
      return (
        a === null &&
          wr("THREE.WebGLRenderer: " + n + " extension not supported."),
        a
      );
    },
  };
}
function O0(r, e, t, n) {
  const a = {},
    o = new WeakMap();
  function u(_) {
    const x = _.target;
    x.index !== null && e.remove(x.index);
    for (const R in x.attributes) e.remove(x.attributes[R]);
    (x.removeEventListener("dispose", u), delete a[x.id]);
    const y = o.get(x);
    (y && (e.remove(y), o.delete(x)),
      n.releaseStatesOfGeometry(x),
      x.isInstancedBufferGeometry === !0 && delete x._maxInstanceCount,
      t.memory.geometries--);
  }
  function h(_, x) {
    return (
      a[x.id] === !0 ||
        (x.addEventListener("dispose", u),
        (a[x.id] = !0),
        t.memory.geometries++),
      x
    );
  }
  function p(_) {
    const x = _.attributes;
    for (const y in x) e.update(x[y], r.ARRAY_BUFFER);
  }
  function d(_) {
    const x = [],
      y = _.index,
      R = _.attributes.position;
    let D = 0;
    if (y !== null) {
      const N = y.array;
      D = y.version;
      for (let U = 0, L = N.length; U < L; U += 3) {
        const k = N[U + 0],
          P = N[U + 1],
          H = N[U + 2];
        x.push(k, P, P, H, H, k);
      }
    } else if (R !== void 0) {
      const N = R.array;
      D = R.version;
      for (let U = 0, L = N.length / 3 - 1; U < L; U += 3) {
        const k = U + 0,
          P = U + 1,
          H = U + 2;
        x.push(k, P, P, H, H, k);
      }
    } else return;
    const E = new (Vc(x) ? Yc : qc)(x, 1);
    E.version = D;
    const m = o.get(_);
    (m && e.remove(m), o.set(_, E));
  }
  function v(_) {
    const x = o.get(_);
    if (x) {
      const y = _.index;
      y !== null && x.version < y.version && d(_);
    } else d(_);
    return o.get(_);
  }
  return { get: h, update: p, getWireframeAttribute: v };
}
function k0(r, e, t) {
  let n;
  function a(x) {
    n = x;
  }
  let o, u;
  function h(x) {
    ((o = x.type), (u = x.bytesPerElement));
  }
  function p(x, y) {
    (r.drawElements(n, y, o, x * u), t.update(y, n, 1));
  }
  function d(x, y, R) {
    R !== 0 && (r.drawElementsInstanced(n, y, o, x * u, R), t.update(y, n, R));
  }
  function v(x, y, R) {
    if (R === 0) return;
    e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n, y, 0, o, x, 0, R);
    let E = 0;
    for (let m = 0; m < R; m++) E += y[m];
    t.update(E, n, 1);
  }
  function _(x, y, R, D) {
    if (R === 0) return;
    const E = e.get("WEBGL_multi_draw");
    if (E === null) for (let m = 0; m < x.length; m++) d(x[m] / u, y[m], D[m]);
    else {
      E.multiDrawElementsInstancedWEBGL(n, y, 0, o, x, 0, D, 0, R);
      let m = 0;
      for (let N = 0; N < R; N++) m += y[N] * D[N];
      t.update(m, n, 1);
    }
  }
  ((this.setMode = a),
    (this.setIndex = h),
    (this.render = p),
    (this.renderInstances = d),
    (this.renderMultiDraw = v),
    (this.renderMultiDrawInstances = _));
}
function B0(r) {
  const e = { geometries: 0, textures: 0 },
    t = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 };
  function n(o, u, h) {
    switch ((t.calls++, u)) {
      case r.TRIANGLES:
        t.triangles += h * (o / 3);
        break;
      case r.LINES:
        t.lines += h * (o / 2);
        break;
      case r.LINE_STRIP:
        t.lines += h * (o - 1);
        break;
      case r.LINE_LOOP:
        t.lines += h * o;
        break;
      case r.POINTS:
        t.points += h * o;
        break;
      default:
        console.error("THREE.WebGLInfo: Unknown draw mode:", u);
        break;
    }
  }
  function a() {
    ((t.calls = 0), (t.triangles = 0), (t.points = 0), (t.lines = 0));
  }
  return {
    memory: e,
    render: t,
    programs: null,
    autoReset: !0,
    reset: a,
    update: n,
  };
}
function z0(r, e, t) {
  const n = new WeakMap(),
    a = new It();
  function o(u, h, p) {
    const d = u.morphTargetInfluences,
      v =
        h.morphAttributes.position ||
        h.morphAttributes.normal ||
        h.morphAttributes.color,
      _ = v !== void 0 ? v.length : 0;
    let x = n.get(h);
    if (x === void 0 || x.count !== _) {
      let C = function () {
        (H.dispose(), n.delete(h), h.removeEventListener("dispose", C));
      };
      x !== void 0 && x.texture.dispose();
      const y = h.morphAttributes.position !== void 0,
        R = h.morphAttributes.normal !== void 0,
        D = h.morphAttributes.color !== void 0,
        E = h.morphAttributes.position || [],
        m = h.morphAttributes.normal || [],
        N = h.morphAttributes.color || [];
      let U = 0;
      (y === !0 && (U = 1), R === !0 && (U = 2), D === !0 && (U = 3));
      let L = h.attributes.position.count * U,
        k = 1;
      L > e.maxTextureSize &&
        ((k = Math.ceil(L / e.maxTextureSize)), (L = e.maxTextureSize));
      const P = new Float32Array(L * k * 4 * _),
        H = new Gc(P, L, k, _);
      ((H.type = jn), (H.needsUpdate = !0));
      const q = U * 4;
      for (let M = 0; M < _; M++) {
        const z = E[M],
          Y = m[M],
          te = N[M],
          J = L * k * 4 * M;
        for (let he = 0; he < z.count; he++) {
          const ae = he * q;
          (y === !0 &&
            (a.fromBufferAttribute(z, he),
            (P[J + ae + 0] = a.x),
            (P[J + ae + 1] = a.y),
            (P[J + ae + 2] = a.z),
            (P[J + ae + 3] = 0)),
            R === !0 &&
              (a.fromBufferAttribute(Y, he),
              (P[J + ae + 4] = a.x),
              (P[J + ae + 5] = a.y),
              (P[J + ae + 6] = a.z),
              (P[J + ae + 7] = 0)),
            D === !0 &&
              (a.fromBufferAttribute(te, he),
              (P[J + ae + 8] = a.x),
              (P[J + ae + 9] = a.y),
              (P[J + ae + 10] = a.z),
              (P[J + ae + 11] = te.itemSize === 4 ? a.w : 1)));
        }
      }
      ((x = { count: _, texture: H, size: new it(L, k) }),
        n.set(h, x),
        h.addEventListener("dispose", C));
    }
    if (u.isInstancedMesh === !0 && u.morphTexture !== null)
      p.getUniforms().setValue(r, "morphTexture", u.morphTexture, t);
    else {
      let y = 0;
      for (let D = 0; D < d.length; D++) y += d[D];
      const R = h.morphTargetsRelative ? 1 : 1 - y;
      (p.getUniforms().setValue(r, "morphTargetBaseInfluence", R),
        p.getUniforms().setValue(r, "morphTargetInfluences", d));
    }
    (p.getUniforms().setValue(r, "morphTargetsTexture", x.texture, t),
      p.getUniforms().setValue(r, "morphTargetsTextureSize", x.size));
  }
  return { update: o };
}
function H0(r, e, t, n) {
  let a = new WeakMap();
  function o(p) {
    const d = n.render.frame,
      v = p.geometry,
      _ = e.get(p, v);
    if (
      (a.get(_) !== d && (e.update(_), a.set(_, d)),
      p.isInstancedMesh &&
        (p.hasEventListener("dispose", h) === !1 &&
          p.addEventListener("dispose", h),
        a.get(p) !== d &&
          (t.update(p.instanceMatrix, r.ARRAY_BUFFER),
          p.instanceColor !== null && t.update(p.instanceColor, r.ARRAY_BUFFER),
          a.set(p, d))),
      p.isSkinnedMesh)
    ) {
      const x = p.skeleton;
      a.get(x) !== d && (x.update(), a.set(x, d));
    }
    return _;
  }
  function u() {
    a = new WeakMap();
  }
  function h(p) {
    const d = p.target;
    (d.removeEventListener("dispose", h),
      t.remove(d.instanceMatrix),
      d.instanceColor !== null && t.remove(d.instanceColor));
  }
  return { update: o, dispose: u };
}
const ru = new rn(),
  sc = new Qc(1, 1),
  su = new Gc(),
  au = new c_(),
  ou = new Jc(),
  ac = [],
  oc = [],
  lc = new Float32Array(16),
  cc = new Float32Array(9),
  uc = new Float32Array(4);
function or(r, e, t) {
  const n = r[0];
  if (n <= 0 || n > 0) return r;
  const a = e * t;
  let o = ac[a];
  if ((o === void 0 && ((o = new Float32Array(a)), (ac[a] = o)), e !== 0)) {
    n.toArray(o, 0);
    for (let u = 1, h = 0; u !== e; ++u) ((h += t), r[u].toArray(o, h));
  }
  return o;
}
function Gt(r, e) {
  if (r.length !== e.length) return !1;
  for (let t = 0, n = r.length; t < n; t++) if (r[t] !== e[t]) return !1;
  return !0;
}
function Wt(r, e) {
  for (let t = 0, n = e.length; t < n; t++) r[t] = e[t];
}
function Ds(r, e) {
  let t = oc[e];
  t === void 0 && ((t = new Int32Array(e)), (oc[e] = t));
  for (let n = 0; n !== e; ++n) t[n] = r.allocateTextureUnit();
  return t;
}
function V0(r, e) {
  const t = this.cache;
  t[0] !== e && (r.uniform1f(this.addr, e), (t[0] = e));
}
function G0(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) &&
      (r.uniform2f(this.addr, e.x, e.y), (t[0] = e.x), (t[1] = e.y));
  else {
    if (Gt(t, e)) return;
    (r.uniform2fv(this.addr, e), Wt(t, e));
  }
}
function W0(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) &&
      (r.uniform3f(this.addr, e.x, e.y, e.z),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z));
  else if (e.r !== void 0)
    (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) &&
      (r.uniform3f(this.addr, e.r, e.g, e.b),
      (t[0] = e.r),
      (t[1] = e.g),
      (t[2] = e.b));
  else {
    if (Gt(t, e)) return;
    (r.uniform3fv(this.addr, e), Wt(t, e));
  }
}
function X0(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) &&
      (r.uniform4f(this.addr, e.x, e.y, e.z, e.w),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z),
      (t[3] = e.w));
  else {
    if (Gt(t, e)) return;
    (r.uniform4fv(this.addr, e), Wt(t, e));
  }
}
function $0(r, e) {
  const t = this.cache,
    n = e.elements;
  if (n === void 0) {
    if (Gt(t, e)) return;
    (r.uniformMatrix2fv(this.addr, !1, e), Wt(t, e));
  } else {
    if (Gt(t, n)) return;
    (uc.set(n), r.uniformMatrix2fv(this.addr, !1, uc), Wt(t, n));
  }
}
function j0(r, e) {
  const t = this.cache,
    n = e.elements;
  if (n === void 0) {
    if (Gt(t, e)) return;
    (r.uniformMatrix3fv(this.addr, !1, e), Wt(t, e));
  } else {
    if (Gt(t, n)) return;
    (cc.set(n), r.uniformMatrix3fv(this.addr, !1, cc), Wt(t, n));
  }
}
function q0(r, e) {
  const t = this.cache,
    n = e.elements;
  if (n === void 0) {
    if (Gt(t, e)) return;
    (r.uniformMatrix4fv(this.addr, !1, e), Wt(t, e));
  } else {
    if (Gt(t, n)) return;
    (lc.set(n), r.uniformMatrix4fv(this.addr, !1, lc), Wt(t, n));
  }
}
function Y0(r, e) {
  const t = this.cache;
  t[0] !== e && (r.uniform1i(this.addr, e), (t[0] = e));
}
function K0(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) &&
      (r.uniform2i(this.addr, e.x, e.y), (t[0] = e.x), (t[1] = e.y));
  else {
    if (Gt(t, e)) return;
    (r.uniform2iv(this.addr, e), Wt(t, e));
  }
}
function Z0(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) &&
      (r.uniform3i(this.addr, e.x, e.y, e.z),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z));
  else {
    if (Gt(t, e)) return;
    (r.uniform3iv(this.addr, e), Wt(t, e));
  }
}
function J0(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) &&
      (r.uniform4i(this.addr, e.x, e.y, e.z, e.w),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z),
      (t[3] = e.w));
  else {
    if (Gt(t, e)) return;
    (r.uniform4iv(this.addr, e), Wt(t, e));
  }
}
function Q0(r, e) {
  const t = this.cache;
  t[0] !== e && (r.uniform1ui(this.addr, e), (t[0] = e));
}
function ex(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) &&
      (r.uniform2ui(this.addr, e.x, e.y), (t[0] = e.x), (t[1] = e.y));
  else {
    if (Gt(t, e)) return;
    (r.uniform2uiv(this.addr, e), Wt(t, e));
  }
}
function tx(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) &&
      (r.uniform3ui(this.addr, e.x, e.y, e.z),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z));
  else {
    if (Gt(t, e)) return;
    (r.uniform3uiv(this.addr, e), Wt(t, e));
  }
}
function nx(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) &&
      (r.uniform4ui(this.addr, e.x, e.y, e.z, e.w),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z),
      (t[3] = e.w));
  else {
    if (Gt(t, e)) return;
    (r.uniform4uiv(this.addr, e), Wt(t, e));
  }
}
function ix(r, e, t) {
  const n = this.cache,
    a = t.allocateTextureUnit();
  n[0] !== a && (r.uniform1i(this.addr, a), (n[0] = a));
  let o;
  (this.type === r.SAMPLER_2D_SHADOW
    ? ((sc.compareFunction = Hc), (o = sc))
    : (o = ru),
    t.setTexture2D(e || o, a));
}
function rx(r, e, t) {
  const n = this.cache,
    a = t.allocateTextureUnit();
  (n[0] !== a && (r.uniform1i(this.addr, a), (n[0] = a)),
    t.setTexture3D(e || au, a));
}
function sx(r, e, t) {
  const n = this.cache,
    a = t.allocateTextureUnit();
  (n[0] !== a && (r.uniform1i(this.addr, a), (n[0] = a)),
    t.setTextureCube(e || ou, a));
}
function ax(r, e, t) {
  const n = this.cache,
    a = t.allocateTextureUnit();
  (n[0] !== a && (r.uniform1i(this.addr, a), (n[0] = a)),
    t.setTexture2DArray(e || su, a));
}
function ox(r) {
  switch (r) {
    case 5126:
      return V0;
    case 35664:
      return G0;
    case 35665:
      return W0;
    case 35666:
      return X0;
    case 35674:
      return $0;
    case 35675:
      return j0;
    case 35676:
      return q0;
    case 5124:
    case 35670:
      return Y0;
    case 35667:
    case 35671:
      return K0;
    case 35668:
    case 35672:
      return Z0;
    case 35669:
    case 35673:
      return J0;
    case 5125:
      return Q0;
    case 36294:
      return ex;
    case 36295:
      return tx;
    case 36296:
      return nx;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return ix;
    case 35679:
    case 36299:
    case 36307:
      return rx;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return sx;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return ax;
  }
}
function lx(r, e) {
  r.uniform1fv(this.addr, e);
}
function cx(r, e) {
  const t = or(e, this.size, 2);
  r.uniform2fv(this.addr, t);
}
function ux(r, e) {
  const t = or(e, this.size, 3);
  r.uniform3fv(this.addr, t);
}
function hx(r, e) {
  const t = or(e, this.size, 4);
  r.uniform4fv(this.addr, t);
}
function fx(r, e) {
  const t = or(e, this.size, 4);
  r.uniformMatrix2fv(this.addr, !1, t);
}
function dx(r, e) {
  const t = or(e, this.size, 9);
  r.uniformMatrix3fv(this.addr, !1, t);
}
function px(r, e) {
  const t = or(e, this.size, 16);
  r.uniformMatrix4fv(this.addr, !1, t);
}
function mx(r, e) {
  r.uniform1iv(this.addr, e);
}
function _x(r, e) {
  r.uniform2iv(this.addr, e);
}
function gx(r, e) {
  r.uniform3iv(this.addr, e);
}
function vx(r, e) {
  r.uniform4iv(this.addr, e);
}
function xx(r, e) {
  r.uniform1uiv(this.addr, e);
}
function Ex(r, e) {
  r.uniform2uiv(this.addr, e);
}
function Sx(r, e) {
  r.uniform3uiv(this.addr, e);
}
function yx(r, e) {
  r.uniform4uiv(this.addr, e);
}
function Mx(r, e, t) {
  const n = this.cache,
    a = e.length,
    o = Ds(t, a);
  Gt(n, o) || (r.uniform1iv(this.addr, o), Wt(n, o));
  for (let u = 0; u !== a; ++u) t.setTexture2D(e[u] || ru, o[u]);
}
function Tx(r, e, t) {
  const n = this.cache,
    a = e.length,
    o = Ds(t, a);
  Gt(n, o) || (r.uniform1iv(this.addr, o), Wt(n, o));
  for (let u = 0; u !== a; ++u) t.setTexture3D(e[u] || au, o[u]);
}
function wx(r, e, t) {
  const n = this.cache,
    a = e.length,
    o = Ds(t, a);
  Gt(n, o) || (r.uniform1iv(this.addr, o), Wt(n, o));
  for (let u = 0; u !== a; ++u) t.setTextureCube(e[u] || ou, o[u]);
}
function bx(r, e, t) {
  const n = this.cache,
    a = e.length,
    o = Ds(t, a);
  Gt(n, o) || (r.uniform1iv(this.addr, o), Wt(n, o));
  for (let u = 0; u !== a; ++u) t.setTexture2DArray(e[u] || su, o[u]);
}
function Ax(r) {
  switch (r) {
    case 5126:
      return lx;
    case 35664:
      return cx;
    case 35665:
      return ux;
    case 35666:
      return hx;
    case 35674:
      return fx;
    case 35675:
      return dx;
    case 35676:
      return px;
    case 5124:
    case 35670:
      return mx;
    case 35667:
    case 35671:
      return _x;
    case 35668:
    case 35672:
      return gx;
    case 35669:
    case 35673:
      return vx;
    case 5125:
      return xx;
    case 36294:
      return Ex;
    case 36295:
      return Sx;
    case 36296:
      return yx;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return Mx;
    case 35679:
    case 36299:
    case 36307:
      return Tx;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return wx;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return bx;
  }
}
class Rx {
  constructor(e, t, n) {
    ((this.id = e),
      (this.addr = n),
      (this.cache = []),
      (this.type = t.type),
      (this.setValue = ox(t.type)));
  }
}
class Cx {
  constructor(e, t, n) {
    ((this.id = e),
      (this.addr = n),
      (this.cache = []),
      (this.type = t.type),
      (this.size = t.size),
      (this.setValue = Ax(t.type)));
  }
}
class Px {
  constructor(e) {
    ((this.id = e), (this.seq = []), (this.map = {}));
  }
  setValue(e, t, n) {
    const a = this.seq;
    for (let o = 0, u = a.length; o !== u; ++o) {
      const h = a[o];
      h.setValue(e, t[h.id], n);
    }
  }
}
const Ca = /(\w+)(\])?(\[|\.)?/g;
function hc(r, e) {
  (r.seq.push(e), (r.map[e.id] = e));
}
function Dx(r, e, t) {
  const n = r.name,
    a = n.length;
  for (Ca.lastIndex = 0; ; ) {
    const o = Ca.exec(n),
      u = Ca.lastIndex;
    let h = o[1];
    const p = o[2] === "]",
      d = o[3];
    if ((p && (h = h | 0), d === void 0 || (d === "[" && u + 2 === a))) {
      hc(t, d === void 0 ? new Rx(h, r, e) : new Cx(h, r, e));
      break;
    } else {
      let _ = t.map[h];
      (_ === void 0 && ((_ = new Px(h)), hc(t, _)), (t = _));
    }
  }
}
class bs {
  constructor(e, t) {
    ((this.seq = []), (this.map = {}));
    const n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
    for (let a = 0; a < n; ++a) {
      const o = e.getActiveUniform(t, a),
        u = e.getUniformLocation(t, o.name);
      Dx(o, u, this);
    }
  }
  setValue(e, t, n, a) {
    const o = this.map[t];
    o !== void 0 && o.setValue(e, n, a);
  }
  setOptional(e, t, n) {
    const a = t[n];
    a !== void 0 && this.setValue(e, n, a);
  }
  static upload(e, t, n, a) {
    for (let o = 0, u = t.length; o !== u; ++o) {
      const h = t[o],
        p = n[h.id];
      p.needsUpdate !== !1 && h.setValue(e, p.value, a);
    }
  }
  static seqWithValue(e, t) {
    const n = [];
    for (let a = 0, o = e.length; a !== o; ++a) {
      const u = e[a];
      u.id in t && n.push(u);
    }
    return n;
  }
}
function fc(r, e, t) {
  const n = r.createShader(e);
  return (r.shaderSource(n, t), r.compileShader(n), n);
}
const Lx = 37297;
let Fx = 0;
function Ix(r, e) {
  const t = r.split(`
`),
    n = [],
    a = Math.max(e - 6, 0),
    o = Math.min(e + 6, t.length);
  for (let u = a; u < o; u++) {
    const h = u + 1;
    n.push(`${h === e ? ">" : " "} ${h}: ${t[u]}`);
  }
  return n.join(`
`);
}
const dc = new rt();
function Ux(r) {
  gt._getMatrix(dc, gt.workingColorSpace, r);
  const e = `mat3( ${dc.elements.map((t) => t.toFixed(4))} )`;
  switch (gt.getTransfer(r)) {
    case As:
      return [e, "LinearTransferOETF"];
    case wt:
      return [e, "sRGBTransferOETF"];
    default:
      return (
        console.warn("THREE.WebGLProgram: Unsupported color space: ", r),
        [e, "LinearTransferOETF"]
      );
  }
}
function pc(r, e, t) {
  const n = r.getShaderParameter(e, r.COMPILE_STATUS),
    o = (r.getShaderInfoLog(e) || "").trim();
  if (n && o === "") return "";
  const u = /ERROR: 0:(\d+)/.exec(o);
  if (u) {
    const h = parseInt(u[1]);
    return (
      t.toUpperCase() +
      `

` +
      o +
      `

` +
      Ix(r.getShaderSource(e), h)
    );
  } else return o;
}
function Nx(r, e) {
  const t = Ux(e);
  return [
    `vec4 ${r}( vec4 value ) {`,
    `	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,
    "}",
  ].join(`
`);
}
function Ox(r, e) {
  let t;
  switch (e) {
    case Nm:
      t = "Linear";
      break;
    case Om:
      t = "Reinhard";
      break;
    case km:
      t = "Cineon";
      break;
    case Bm:
      t = "ACESFilmic";
      break;
    case Hm:
      t = "AgX";
      break;
    case Vm:
      t = "Neutral";
      break;
    case zm:
      t = "Custom";
      break;
    default:
      (console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e),
        (t = "Linear"));
  }
  return (
    "vec3 " + r + "( vec3 color ) { return " + t + "ToneMapping( color ); }"
  );
}
const xs = new K();
function kx() {
  gt.getLuminanceCoefficients(xs);
  const r = xs.x.toFixed(4),
    e = xs.y.toFixed(4),
    t = xs.z.toFixed(4);
  return [
    "float luminance( const in vec3 rgb ) {",
    `	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,
    "	return dot( weights, rgb );",
    "}",
  ].join(`
`);
}
function Bx(r) {
  return [
    r.extensionClipCullDistance
      ? "#extension GL_ANGLE_clip_cull_distance : require"
      : "",
    r.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : "",
  ].filter(vr).join(`
`);
}
function zx(r) {
  const e = [];
  for (const t in r) {
    const n = r[t];
    n !== !1 && e.push("#define " + t + " " + n);
  }
  return e.join(`
`);
}
function Hx(r, e) {
  const t = {},
    n = r.getProgramParameter(e, r.ACTIVE_ATTRIBUTES);
  for (let a = 0; a < n; a++) {
    const o = r.getActiveAttrib(e, a),
      u = o.name;
    let h = 1;
    (o.type === r.FLOAT_MAT2 && (h = 2),
      o.type === r.FLOAT_MAT3 && (h = 3),
      o.type === r.FLOAT_MAT4 && (h = 4),
      (t[u] = {
        type: o.type,
        location: r.getAttribLocation(e, u),
        locationSize: h,
      }));
  }
  return t;
}
function vr(r) {
  return r !== "";
}
function mc(r, e) {
  const t =
    e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
  return r
    .replace(/NUM_DIR_LIGHTS/g, e.numDirLights)
    .replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights)
    .replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps)
    .replace(/NUM_SPOT_LIGHT_COORDS/g, t)
    .replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights)
    .replace(/NUM_POINT_LIGHTS/g, e.numPointLights)
    .replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights)
    .replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows)
    .replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps)
    .replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows)
    .replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}
function _c(r, e) {
  return r
    .replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes)
    .replace(
      /UNION_CLIPPING_PLANES/g,
      e.numClippingPlanes - e.numClipIntersection,
    );
}
const Vx = /^[ \t]*#include +<([\w\d./]+)>/gm;
function So(r) {
  return r.replace(Vx, Wx);
}
const Gx = new Map();
function Wx(r, e) {
  let t = ot[e];
  if (t === void 0) {
    const n = Gx.get(e);
    if (n !== void 0)
      ((t = ot[n]),
        console.warn(
          'THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',
          e,
          n,
        ));
    else throw new Error("Can not resolve #include <" + e + ">");
  }
  return So(t);
}
const Xx =
  /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function gc(r) {
  return r.replace(Xx, $x);
}
function $x(r, e, t, n) {
  let a = "";
  for (let o = parseInt(e); o < parseInt(t); o++)
    a += n
      .replace(/\[\s*i\s*\]/g, "[ " + o + " ]")
      .replace(/UNROLLED_LOOP_INDEX/g, o);
  return a;
}
function vc(r) {
  let e = `precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;
  return (
    r.precision === "highp"
      ? (e += `
#define HIGH_PRECISION`)
      : r.precision === "mediump"
        ? (e += `
#define MEDIUM_PRECISION`)
        : r.precision === "lowp" &&
          (e += `
#define LOW_PRECISION`),
    e
  );
}
function jx(r) {
  let e = "SHADOWMAP_TYPE_BASIC";
  return (
    r.shadowMapType === Rc
      ? (e = "SHADOWMAP_TYPE_PCF")
      : r.shadowMapType === Cc
        ? (e = "SHADOWMAP_TYPE_PCF_SOFT")
        : r.shadowMapType === Xn && (e = "SHADOWMAP_TYPE_VSM"),
    e
  );
}
function qx(r) {
  let e = "ENVMAP_TYPE_CUBE";
  if (r.envMap)
    switch (r.envMapMode) {
      case tr:
      case nr:
        e = "ENVMAP_TYPE_CUBE";
        break;
      case Cs:
        e = "ENVMAP_TYPE_CUBE_UV";
        break;
    }
  return e;
}
function Yx(r) {
  let e = "ENVMAP_MODE_REFLECTION";
  if (r.envMap)
    switch (r.envMapMode) {
      case nr:
        e = "ENVMAP_MODE_REFRACTION";
        break;
    }
  return e;
}
function Kx(r) {
  let e = "ENVMAP_BLENDING_NONE";
  if (r.envMap)
    switch (r.combine) {
      case Pc:
        e = "ENVMAP_BLENDING_MULTIPLY";
        break;
      case Im:
        e = "ENVMAP_BLENDING_MIX";
        break;
      case Um:
        e = "ENVMAP_BLENDING_ADD";
        break;
    }
  return e;
}
function Zx(r) {
  const e = r.envMapCubeUVHeight;
  if (e === null) return null;
  const t = Math.log2(e) - 2,
    n = 1 / e;
  return {
    texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 112)),
    texelHeight: n,
    maxMip: t,
  };
}
function Jx(r, e, t, n) {
  const a = r.getContext(),
    o = t.defines;
  let u = t.vertexShader,
    h = t.fragmentShader;
  const p = jx(t),
    d = qx(t),
    v = Yx(t),
    _ = Kx(t),
    x = Zx(t),
    y = Bx(t),
    R = zx(o),
    D = a.createProgram();
  let E,
    m,
    N = t.glslVersion
      ? "#version " +
        t.glslVersion +
        `
`
      : "";
  (t.isRawShaderMaterial
    ? ((E = [
        "#define SHADER_TYPE " + t.shaderType,
        "#define SHADER_NAME " + t.shaderName,
        R,
      ].filter(vr).join(`
`)),
      E.length > 0 &&
        (E += `
`),
      (m = [
        "#define SHADER_TYPE " + t.shaderType,
        "#define SHADER_NAME " + t.shaderName,
        R,
      ].filter(vr).join(`
`)),
      m.length > 0 &&
        (m += `
`))
    : ((E = [
        vc(t),
        "#define SHADER_TYPE " + t.shaderType,
        "#define SHADER_NAME " + t.shaderName,
        R,
        t.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "",
        t.batching ? "#define USE_BATCHING" : "",
        t.batchingColor ? "#define USE_BATCHING_COLOR" : "",
        t.instancing ? "#define USE_INSTANCING" : "",
        t.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
        t.instancingMorph ? "#define USE_INSTANCING_MORPH" : "",
        t.useFog && t.fog ? "#define USE_FOG" : "",
        t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
        t.map ? "#define USE_MAP" : "",
        t.envMap ? "#define USE_ENVMAP" : "",
        t.envMap ? "#define " + v : "",
        t.lightMap ? "#define USE_LIGHTMAP" : "",
        t.aoMap ? "#define USE_AOMAP" : "",
        t.bumpMap ? "#define USE_BUMPMAP" : "",
        t.normalMap ? "#define USE_NORMALMAP" : "",
        t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
        t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
        t.displacementMap ? "#define USE_DISPLACEMENTMAP" : "",
        t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
        t.anisotropy ? "#define USE_ANISOTROPY" : "",
        t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
        t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
        t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
        t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
        t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
        t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
        t.specularMap ? "#define USE_SPECULARMAP" : "",
        t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
        t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
        t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
        t.metalnessMap ? "#define USE_METALNESSMAP" : "",
        t.alphaMap ? "#define USE_ALPHAMAP" : "",
        t.alphaHash ? "#define USE_ALPHAHASH" : "",
        t.transmission ? "#define USE_TRANSMISSION" : "",
        t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
        t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
        t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
        t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
        t.mapUv ? "#define MAP_UV " + t.mapUv : "",
        t.alphaMapUv ? "#define ALPHAMAP_UV " + t.alphaMapUv : "",
        t.lightMapUv ? "#define LIGHTMAP_UV " + t.lightMapUv : "",
        t.aoMapUv ? "#define AOMAP_UV " + t.aoMapUv : "",
        t.emissiveMapUv ? "#define EMISSIVEMAP_UV " + t.emissiveMapUv : "",
        t.bumpMapUv ? "#define BUMPMAP_UV " + t.bumpMapUv : "",
        t.normalMapUv ? "#define NORMALMAP_UV " + t.normalMapUv : "",
        t.displacementMapUv
          ? "#define DISPLACEMENTMAP_UV " + t.displacementMapUv
          : "",
        t.metalnessMapUv ? "#define METALNESSMAP_UV " + t.metalnessMapUv : "",
        t.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + t.roughnessMapUv : "",
        t.anisotropyMapUv
          ? "#define ANISOTROPYMAP_UV " + t.anisotropyMapUv
          : "",
        t.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + t.clearcoatMapUv : "",
        t.clearcoatNormalMapUv
          ? "#define CLEARCOAT_NORMALMAP_UV " + t.clearcoatNormalMapUv
          : "",
        t.clearcoatRoughnessMapUv
          ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + t.clearcoatRoughnessMapUv
          : "",
        t.iridescenceMapUv
          ? "#define IRIDESCENCEMAP_UV " + t.iridescenceMapUv
          : "",
        t.iridescenceThicknessMapUv
          ? "#define IRIDESCENCE_THICKNESSMAP_UV " + t.iridescenceThicknessMapUv
          : "",
        t.sheenColorMapUv
          ? "#define SHEEN_COLORMAP_UV " + t.sheenColorMapUv
          : "",
        t.sheenRoughnessMapUv
          ? "#define SHEEN_ROUGHNESSMAP_UV " + t.sheenRoughnessMapUv
          : "",
        t.specularMapUv ? "#define SPECULARMAP_UV " + t.specularMapUv : "",
        t.specularColorMapUv
          ? "#define SPECULAR_COLORMAP_UV " + t.specularColorMapUv
          : "",
        t.specularIntensityMapUv
          ? "#define SPECULAR_INTENSITYMAP_UV " + t.specularIntensityMapUv
          : "",
        t.transmissionMapUv
          ? "#define TRANSMISSIONMAP_UV " + t.transmissionMapUv
          : "",
        t.thicknessMapUv ? "#define THICKNESSMAP_UV " + t.thicknessMapUv : "",
        t.vertexTangents && t.flatShading === !1 ? "#define USE_TANGENT" : "",
        t.vertexColors ? "#define USE_COLOR" : "",
        t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
        t.vertexUv1s ? "#define USE_UV1" : "",
        t.vertexUv2s ? "#define USE_UV2" : "",
        t.vertexUv3s ? "#define USE_UV3" : "",
        t.pointsUvs ? "#define USE_POINTS_UV" : "",
        t.flatShading ? "#define FLAT_SHADED" : "",
        t.skinning ? "#define USE_SKINNING" : "",
        t.morphTargets ? "#define USE_MORPHTARGETS" : "",
        t.morphNormals && t.flatShading === !1
          ? "#define USE_MORPHNORMALS"
          : "",
        t.morphColors ? "#define USE_MORPHCOLORS" : "",
        t.morphTargetsCount > 0
          ? "#define MORPHTARGETS_TEXTURE_STRIDE " + t.morphTextureStride
          : "",
        t.morphTargetsCount > 0
          ? "#define MORPHTARGETS_COUNT " + t.morphTargetsCount
          : "",
        t.doubleSided ? "#define DOUBLE_SIDED" : "",
        t.flipSided ? "#define FLIP_SIDED" : "",
        t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
        t.shadowMapEnabled ? "#define " + p : "",
        t.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
        t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
        t.logarithmicDepthBuffer ? "#define USE_LOGARITHMIC_DEPTH_BUFFER" : "",
        t.reversedDepthBuffer ? "#define USE_REVERSED_DEPTH_BUFFER" : "",
        "uniform mat4 modelMatrix;",
        "uniform mat4 modelViewMatrix;",
        "uniform mat4 projectionMatrix;",
        "uniform mat4 viewMatrix;",
        "uniform mat3 normalMatrix;",
        "uniform vec3 cameraPosition;",
        "uniform bool isOrthographic;",
        "#ifdef USE_INSTANCING",
        "	attribute mat4 instanceMatrix;",
        "#endif",
        "#ifdef USE_INSTANCING_COLOR",
        "	attribute vec3 instanceColor;",
        "#endif",
        "#ifdef USE_INSTANCING_MORPH",
        "	uniform sampler2D morphTexture;",
        "#endif",
        "attribute vec3 position;",
        "attribute vec3 normal;",
        "attribute vec2 uv;",
        "#ifdef USE_UV1",
        "	attribute vec2 uv1;",
        "#endif",
        "#ifdef USE_UV2",
        "	attribute vec2 uv2;",
        "#endif",
        "#ifdef USE_UV3",
        "	attribute vec2 uv3;",
        "#endif",
        "#ifdef USE_TANGENT",
        "	attribute vec4 tangent;",
        "#endif",
        "#if defined( USE_COLOR_ALPHA )",
        "	attribute vec4 color;",
        "#elif defined( USE_COLOR )",
        "	attribute vec3 color;",
        "#endif",
        "#ifdef USE_SKINNING",
        "	attribute vec4 skinIndex;",
        "	attribute vec4 skinWeight;",
        "#endif",
        `
`,
      ].filter(vr).join(`
`)),
      (m = [
        vc(t),
        "#define SHADER_TYPE " + t.shaderType,
        "#define SHADER_NAME " + t.shaderName,
        R,
        t.useFog && t.fog ? "#define USE_FOG" : "",
        t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
        t.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "",
        t.map ? "#define USE_MAP" : "",
        t.matcap ? "#define USE_MATCAP" : "",
        t.envMap ? "#define USE_ENVMAP" : "",
        t.envMap ? "#define " + d : "",
        t.envMap ? "#define " + v : "",
        t.envMap ? "#define " + _ : "",
        x ? "#define CUBEUV_TEXEL_WIDTH " + x.texelWidth : "",
        x ? "#define CUBEUV_TEXEL_HEIGHT " + x.texelHeight : "",
        x ? "#define CUBEUV_MAX_MIP " + x.maxMip + ".0" : "",
        t.lightMap ? "#define USE_LIGHTMAP" : "",
        t.aoMap ? "#define USE_AOMAP" : "",
        t.bumpMap ? "#define USE_BUMPMAP" : "",
        t.normalMap ? "#define USE_NORMALMAP" : "",
        t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
        t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
        t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
        t.anisotropy ? "#define USE_ANISOTROPY" : "",
        t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
        t.clearcoat ? "#define USE_CLEARCOAT" : "",
        t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
        t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
        t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
        t.dispersion ? "#define USE_DISPERSION" : "",
        t.iridescence ? "#define USE_IRIDESCENCE" : "",
        t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
        t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
        t.specularMap ? "#define USE_SPECULARMAP" : "",
        t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
        t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
        t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
        t.metalnessMap ? "#define USE_METALNESSMAP" : "",
        t.alphaMap ? "#define USE_ALPHAMAP" : "",
        t.alphaTest ? "#define USE_ALPHATEST" : "",
        t.alphaHash ? "#define USE_ALPHAHASH" : "",
        t.sheen ? "#define USE_SHEEN" : "",
        t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
        t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
        t.transmission ? "#define USE_TRANSMISSION" : "",
        t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
        t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
        t.vertexTangents && t.flatShading === !1 ? "#define USE_TANGENT" : "",
        t.vertexColors || t.instancingColor || t.batchingColor
          ? "#define USE_COLOR"
          : "",
        t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
        t.vertexUv1s ? "#define USE_UV1" : "",
        t.vertexUv2s ? "#define USE_UV2" : "",
        t.vertexUv3s ? "#define USE_UV3" : "",
        t.pointsUvs ? "#define USE_POINTS_UV" : "",
        t.gradientMap ? "#define USE_GRADIENTMAP" : "",
        t.flatShading ? "#define FLAT_SHADED" : "",
        t.doubleSided ? "#define DOUBLE_SIDED" : "",
        t.flipSided ? "#define FLIP_SIDED" : "",
        t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
        t.shadowMapEnabled ? "#define " + p : "",
        t.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
        t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
        t.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
        t.decodeVideoTextureEmissive
          ? "#define DECODE_VIDEO_TEXTURE_EMISSIVE"
          : "",
        t.logarithmicDepthBuffer ? "#define USE_LOGARITHMIC_DEPTH_BUFFER" : "",
        t.reversedDepthBuffer ? "#define USE_REVERSED_DEPTH_BUFFER" : "",
        "uniform mat4 viewMatrix;",
        "uniform vec3 cameraPosition;",
        "uniform bool isOrthographic;",
        t.toneMapping !== ai ? "#define TONE_MAPPING" : "",
        t.toneMapping !== ai ? ot.tonemapping_pars_fragment : "",
        t.toneMapping !== ai ? Ox("toneMapping", t.toneMapping) : "",
        t.dithering ? "#define DITHERING" : "",
        t.opaque ? "#define OPAQUE" : "",
        ot.colorspace_pars_fragment,
        Nx("linearToOutputTexel", t.outputColorSpace),
        kx(),
        t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "",
        `
`,
      ].filter(vr).join(`
`))),
    (u = So(u)),
    (u = mc(u, t)),
    (u = _c(u, t)),
    (h = So(h)),
    (h = mc(h, t)),
    (h = _c(h, t)),
    (u = gc(u)),
    (h = gc(h)),
    t.isRawShaderMaterial !== !0 &&
      ((N = `#version 300 es
`),
      (E =
        [
          y,
          "#define attribute in",
          "#define varying out",
          "#define texture2D texture",
        ].join(`
`) +
        `
` +
        E),
      (m =
        [
          "#define varying in",
          t.glslVersion === Pl
            ? ""
            : "layout(location = 0) out highp vec4 pc_fragColor;",
          t.glslVersion === Pl ? "" : "#define gl_FragColor pc_fragColor",
          "#define gl_FragDepthEXT gl_FragDepth",
          "#define texture2D texture",
          "#define textureCube texture",
          "#define texture2DProj textureProj",
          "#define texture2DLodEXT textureLod",
          "#define texture2DProjLodEXT textureProjLod",
          "#define textureCubeLodEXT textureLod",
          "#define texture2DGradEXT textureGrad",
          "#define texture2DProjGradEXT textureProjGrad",
          "#define textureCubeGradEXT textureGrad",
        ].join(`
`) +
        `
` +
        m)));
  const U = N + E + u,
    L = N + m + h,
    k = fc(a, a.VERTEX_SHADER, U),
    P = fc(a, a.FRAGMENT_SHADER, L);
  (a.attachShader(D, k),
    a.attachShader(D, P),
    t.index0AttributeName !== void 0
      ? a.bindAttribLocation(D, 0, t.index0AttributeName)
      : t.morphTargets === !0 && a.bindAttribLocation(D, 0, "position"),
    a.linkProgram(D));
  function H(z) {
    if (r.debug.checkShaderErrors) {
      const Y = a.getProgramInfoLog(D) || "",
        te = a.getShaderInfoLog(k) || "",
        J = a.getShaderInfoLog(P) || "",
        he = Y.trim(),
        ae = te.trim(),
        ie = J.trim();
      let Q = !0,
        Ee = !0;
      if (a.getProgramParameter(D, a.LINK_STATUS) === !1)
        if (((Q = !1), typeof r.debug.onShaderError == "function"))
          r.debug.onShaderError(a, D, k, P);
        else {
          const we = pc(a, k, "vertex"),
            Re = pc(a, P, "fragment");
          console.error(
            "THREE.WebGLProgram: Shader Error " +
              a.getError() +
              " - VALIDATE_STATUS " +
              a.getProgramParameter(D, a.VALIDATE_STATUS) +
              `

Material Name: ` +
              z.name +
              `
Material Type: ` +
              z.type +
              `

Program Info Log: ` +
              he +
              `
` +
              we +
              `
` +
              Re,
          );
        }
      else
        he !== ""
          ? console.warn("THREE.WebGLProgram: Program Info Log:", he)
          : (ae === "" || ie === "") && (Ee = !1);
      Ee &&
        (z.diagnostics = {
          runnable: Q,
          programLog: he,
          vertexShader: { log: ae, prefix: E },
          fragmentShader: { log: ie, prefix: m },
        });
    }
    (a.deleteShader(k), a.deleteShader(P), (q = new bs(a, D)), (C = Hx(a, D)));
  }
  let q;
  this.getUniforms = function () {
    return (q === void 0 && H(this), q);
  };
  let C;
  this.getAttributes = function () {
    return (C === void 0 && H(this), C);
  };
  let M = t.rendererExtensionParallelShaderCompile === !1;
  return (
    (this.isReady = function () {
      return (M === !1 && (M = a.getProgramParameter(D, Lx)), M);
    }),
    (this.destroy = function () {
      (n.releaseStatesOfProgram(this),
        a.deleteProgram(D),
        (this.program = void 0));
    }),
    (this.type = t.shaderType),
    (this.name = t.shaderName),
    (this.id = Fx++),
    (this.cacheKey = e),
    (this.usedTimes = 1),
    (this.program = D),
    (this.vertexShader = k),
    (this.fragmentShader = P),
    this
  );
}
let Qx = 0;
class eE {
  constructor() {
    ((this.shaderCache = new Map()), (this.materialCache = new Map()));
  }
  update(e) {
    const t = e.vertexShader,
      n = e.fragmentShader,
      a = this._getShaderStage(t),
      o = this._getShaderStage(n),
      u = this._getShaderCacheForMaterial(e);
    return (
      u.has(a) === !1 && (u.add(a), a.usedTimes++),
      u.has(o) === !1 && (u.add(o), o.usedTimes++),
      this
    );
  }
  remove(e) {
    const t = this.materialCache.get(e);
    for (const n of t)
      (n.usedTimes--, n.usedTimes === 0 && this.shaderCache.delete(n.code));
    return (this.materialCache.delete(e), this);
  }
  getVertexShaderID(e) {
    return this._getShaderStage(e.vertexShader).id;
  }
  getFragmentShaderID(e) {
    return this._getShaderStage(e.fragmentShader).id;
  }
  dispose() {
    (this.shaderCache.clear(), this.materialCache.clear());
  }
  _getShaderCacheForMaterial(e) {
    const t = this.materialCache;
    let n = t.get(e);
    return (n === void 0 && ((n = new Set()), t.set(e, n)), n);
  }
  _getShaderStage(e) {
    const t = this.shaderCache;
    let n = t.get(e);
    return (n === void 0 && ((n = new tE(e)), t.set(e, n)), n);
  }
}
class tE {
  constructor(e) {
    ((this.id = Qx++), (this.code = e), (this.usedTimes = 0));
  }
}
function nE(r, e, t, n, a, o, u) {
  const h = new Xc(),
    p = new eE(),
    d = new Set(),
    v = [],
    _ = a.logarithmicDepthBuffer,
    x = a.vertexTextures;
  let y = a.precision;
  const R = {
    MeshDepthMaterial: "depth",
    MeshDistanceMaterial: "distanceRGBA",
    MeshNormalMaterial: "normal",
    MeshBasicMaterial: "basic",
    MeshLambertMaterial: "lambert",
    MeshPhongMaterial: "phong",
    MeshToonMaterial: "toon",
    MeshStandardMaterial: "physical",
    MeshPhysicalMaterial: "physical",
    MeshMatcapMaterial: "matcap",
    LineBasicMaterial: "basic",
    LineDashedMaterial: "dashed",
    PointsMaterial: "points",
    ShadowMaterial: "shadow",
    SpriteMaterial: "sprite",
  };
  function D(C) {
    return (d.add(C), C === 0 ? "uv" : `uv${C}`);
  }
  function E(C, M, z, Y, te) {
    const J = Y.fog,
      he = te.geometry,
      ae = C.isMeshStandardMaterial ? Y.environment : null,
      ie = (C.isMeshStandardMaterial ? t : e).get(C.envMap || ae),
      Q = ie && ie.mapping === Cs ? ie.image.height : null,
      Ee = R[C.type];
    C.precision !== null &&
      ((y = a.getMaxPrecision(C.precision)),
      y !== C.precision &&
        console.warn(
          "THREE.WebGLProgram.getParameters:",
          C.precision,
          "not supported, using",
          y,
          "instead.",
        ));
    const we =
        he.morphAttributes.position ||
        he.morphAttributes.normal ||
        he.morphAttributes.color,
      Re = we !== void 0 ? we.length : 0;
    let We = 0;
    (he.morphAttributes.position !== void 0 && (We = 1),
      he.morphAttributes.normal !== void 0 && (We = 2),
      he.morphAttributes.color !== void 0 && (We = 3));
    let Ke, tt, Qe, se;
    if (Ee) {
      const st = Pn[Ee];
      ((Ke = st.vertexShader), (tt = st.fragmentShader));
    } else
      ((Ke = C.vertexShader),
        (tt = C.fragmentShader),
        p.update(C),
        (Qe = p.getVertexShaderID(C)),
        (se = p.getFragmentShaderID(C)));
    const de = r.getRenderTarget(),
      le = r.state.buffers.depth.getReversed(),
      Me = te.isInstancedMesh === !0,
      He = te.isBatchedMesh === !0,
      lt = !!C.map,
      At = !!C.matcap,
      O = !!ie,
      xt = !!C.aoMap,
      et = !!C.lightMap,
      Ye = !!C.bumpMap,
      Oe = !!C.normalMap,
      Rt = !!C.displacementMap,
      Ie = !!C.emissiveMap,
      Ze = !!C.metalnessMap,
      Pt = !!C.roughnessMap,
      St = C.anisotropy > 0,
      I = C.clearcoat > 0,
      b = C.dispersion > 0,
      $ = C.iridescence > 0,
      re = C.sheen > 0,
      pe = C.transmission > 0,
      oe = St && !!C.anisotropyMap,
      Ve = I && !!C.clearcoatMap,
      Te = I && !!C.clearcoatNormalMap,
      ke = I && !!C.clearcoatRoughnessMap,
      ze = $ && !!C.iridescenceMap,
      Se = $ && !!C.iridescenceThicknessMap,
      De = re && !!C.sheenColorMap,
      je = re && !!C.sheenRoughnessMap,
      Be = !!C.specularMap,
      Ae = !!C.specularColorMap,
      nt = !!C.specularIntensityMap,
      V = pe && !!C.transmissionMap,
      ye = pe && !!C.thicknessMap,
      be = !!C.gradientMap,
      Le = !!C.alphaMap,
      G = C.alphaTest > 0,
      B = !!C.alphaHash,
      Fe = !!C.extensions;
    let Je = ai;
    C.toneMapped &&
      (de === null || de.isXRRenderTarget === !0) &&
      (Je = r.toneMapping);
    const mt = {
      shaderID: Ee,
      shaderType: C.type,
      shaderName: C.name,
      vertexShader: Ke,
      fragmentShader: tt,
      defines: C.defines,
      customVertexShaderID: Qe,
      customFragmentShaderID: se,
      isRawShaderMaterial: C.isRawShaderMaterial === !0,
      glslVersion: C.glslVersion,
      precision: y,
      batching: He,
      batchingColor: He && te._colorsTexture !== null,
      instancing: Me,
      instancingColor: Me && te.instanceColor !== null,
      instancingMorph: Me && te.morphTexture !== null,
      supportsVertexTextures: x,
      outputColorSpace:
        de === null
          ? r.outputColorSpace
          : de.isXRRenderTarget === !0
            ? de.texture.colorSpace
            : ir,
      alphaToCoverage: !!C.alphaToCoverage,
      map: lt,
      matcap: At,
      envMap: O,
      envMapMode: O && ie.mapping,
      envMapCubeUVHeight: Q,
      aoMap: xt,
      lightMap: et,
      bumpMap: Ye,
      normalMap: Oe,
      displacementMap: x && Rt,
      emissiveMap: Ie,
      normalMapObjectSpace: Oe && C.normalMapType === $m,
      normalMapTangentSpace: Oe && C.normalMapType === zc,
      metalnessMap: Ze,
      roughnessMap: Pt,
      anisotropy: St,
      anisotropyMap: oe,
      clearcoat: I,
      clearcoatMap: Ve,
      clearcoatNormalMap: Te,
      clearcoatRoughnessMap: ke,
      dispersion: b,
      iridescence: $,
      iridescenceMap: ze,
      iridescenceThicknessMap: Se,
      sheen: re,
      sheenColorMap: De,
      sheenRoughnessMap: je,
      specularMap: Be,
      specularColorMap: Ae,
      specularIntensityMap: nt,
      transmission: pe,
      transmissionMap: V,
      thicknessMap: ye,
      gradientMap: be,
      opaque:
        C.transparent === !1 && C.blending === Ji && C.alphaToCoverage === !1,
      alphaMap: Le,
      alphaTest: G,
      alphaHash: B,
      combine: C.combine,
      mapUv: lt && D(C.map.channel),
      aoMapUv: xt && D(C.aoMap.channel),
      lightMapUv: et && D(C.lightMap.channel),
      bumpMapUv: Ye && D(C.bumpMap.channel),
      normalMapUv: Oe && D(C.normalMap.channel),
      displacementMapUv: Rt && D(C.displacementMap.channel),
      emissiveMapUv: Ie && D(C.emissiveMap.channel),
      metalnessMapUv: Ze && D(C.metalnessMap.channel),
      roughnessMapUv: Pt && D(C.roughnessMap.channel),
      anisotropyMapUv: oe && D(C.anisotropyMap.channel),
      clearcoatMapUv: Ve && D(C.clearcoatMap.channel),
      clearcoatNormalMapUv: Te && D(C.clearcoatNormalMap.channel),
      clearcoatRoughnessMapUv: ke && D(C.clearcoatRoughnessMap.channel),
      iridescenceMapUv: ze && D(C.iridescenceMap.channel),
      iridescenceThicknessMapUv: Se && D(C.iridescenceThicknessMap.channel),
      sheenColorMapUv: De && D(C.sheenColorMap.channel),
      sheenRoughnessMapUv: je && D(C.sheenRoughnessMap.channel),
      specularMapUv: Be && D(C.specularMap.channel),
      specularColorMapUv: Ae && D(C.specularColorMap.channel),
      specularIntensityMapUv: nt && D(C.specularIntensityMap.channel),
      transmissionMapUv: V && D(C.transmissionMap.channel),
      thicknessMapUv: ye && D(C.thicknessMap.channel),
      alphaMapUv: Le && D(C.alphaMap.channel),
      vertexTangents: !!he.attributes.tangent && (Oe || St),
      vertexColors: C.vertexColors,
      vertexAlphas:
        C.vertexColors === !0 &&
        !!he.attributes.color &&
        he.attributes.color.itemSize === 4,
      pointsUvs: te.isPoints === !0 && !!he.attributes.uv && (lt || Le),
      fog: !!J,
      useFog: C.fog === !0,
      fogExp2: !!J && J.isFogExp2,
      flatShading: C.flatShading === !0 && C.wireframe === !1,
      sizeAttenuation: C.sizeAttenuation === !0,
      logarithmicDepthBuffer: _,
      reversedDepthBuffer: le,
      skinning: te.isSkinnedMesh === !0,
      morphTargets: he.morphAttributes.position !== void 0,
      morphNormals: he.morphAttributes.normal !== void 0,
      morphColors: he.morphAttributes.color !== void 0,
      morphTargetsCount: Re,
      morphTextureStride: We,
      numDirLights: M.directional.length,
      numPointLights: M.point.length,
      numSpotLights: M.spot.length,
      numSpotLightMaps: M.spotLightMap.length,
      numRectAreaLights: M.rectArea.length,
      numHemiLights: M.hemi.length,
      numDirLightShadows: M.directionalShadowMap.length,
      numPointLightShadows: M.pointShadowMap.length,
      numSpotLightShadows: M.spotShadowMap.length,
      numSpotLightShadowsWithMaps: M.numSpotLightShadowsWithMaps,
      numLightProbes: M.numLightProbes,
      numClippingPlanes: u.numPlanes,
      numClipIntersection: u.numIntersection,
      dithering: C.dithering,
      shadowMapEnabled: r.shadowMap.enabled && z.length > 0,
      shadowMapType: r.shadowMap.type,
      toneMapping: Je,
      decodeVideoTexture:
        lt &&
        C.map.isVideoTexture === !0 &&
        gt.getTransfer(C.map.colorSpace) === wt,
      decodeVideoTextureEmissive:
        Ie &&
        C.emissiveMap.isVideoTexture === !0 &&
        gt.getTransfer(C.emissiveMap.colorSpace) === wt,
      premultipliedAlpha: C.premultipliedAlpha,
      doubleSided: C.side === $n,
      flipSided: C.side === cn,
      useDepthPacking: C.depthPacking >= 0,
      depthPacking: C.depthPacking || 0,
      index0AttributeName: C.index0AttributeName,
      extensionClipCullDistance:
        Fe &&
        C.extensions.clipCullDistance === !0 &&
        n.has("WEBGL_clip_cull_distance"),
      extensionMultiDraw:
        ((Fe && C.extensions.multiDraw === !0) || He) &&
        n.has("WEBGL_multi_draw"),
      rendererExtensionParallelShaderCompile: n.has(
        "KHR_parallel_shader_compile",
      ),
      customProgramCacheKey: C.customProgramCacheKey(),
    };
    return (
      (mt.vertexUv1s = d.has(1)),
      (mt.vertexUv2s = d.has(2)),
      (mt.vertexUv3s = d.has(3)),
      d.clear(),
      mt
    );
  }
  function m(C) {
    const M = [];
    if (
      (C.shaderID
        ? M.push(C.shaderID)
        : (M.push(C.customVertexShaderID), M.push(C.customFragmentShaderID)),
      C.defines !== void 0)
    )
      for (const z in C.defines) (M.push(z), M.push(C.defines[z]));
    return (
      C.isRawShaderMaterial === !1 &&
        (N(M, C), U(M, C), M.push(r.outputColorSpace)),
      M.push(C.customProgramCacheKey),
      M.join()
    );
  }
  function N(C, M) {
    (C.push(M.precision),
      C.push(M.outputColorSpace),
      C.push(M.envMapMode),
      C.push(M.envMapCubeUVHeight),
      C.push(M.mapUv),
      C.push(M.alphaMapUv),
      C.push(M.lightMapUv),
      C.push(M.aoMapUv),
      C.push(M.bumpMapUv),
      C.push(M.normalMapUv),
      C.push(M.displacementMapUv),
      C.push(M.emissiveMapUv),
      C.push(M.metalnessMapUv),
      C.push(M.roughnessMapUv),
      C.push(M.anisotropyMapUv),
      C.push(M.clearcoatMapUv),
      C.push(M.clearcoatNormalMapUv),
      C.push(M.clearcoatRoughnessMapUv),
      C.push(M.iridescenceMapUv),
      C.push(M.iridescenceThicknessMapUv),
      C.push(M.sheenColorMapUv),
      C.push(M.sheenRoughnessMapUv),
      C.push(M.specularMapUv),
      C.push(M.specularColorMapUv),
      C.push(M.specularIntensityMapUv),
      C.push(M.transmissionMapUv),
      C.push(M.thicknessMapUv),
      C.push(M.combine),
      C.push(M.fogExp2),
      C.push(M.sizeAttenuation),
      C.push(M.morphTargetsCount),
      C.push(M.morphAttributeCount),
      C.push(M.numDirLights),
      C.push(M.numPointLights),
      C.push(M.numSpotLights),
      C.push(M.numSpotLightMaps),
      C.push(M.numHemiLights),
      C.push(M.numRectAreaLights),
      C.push(M.numDirLightShadows),
      C.push(M.numPointLightShadows),
      C.push(M.numSpotLightShadows),
      C.push(M.numSpotLightShadowsWithMaps),
      C.push(M.numLightProbes),
      C.push(M.shadowMapType),
      C.push(M.toneMapping),
      C.push(M.numClippingPlanes),
      C.push(M.numClipIntersection),
      C.push(M.depthPacking));
  }
  function U(C, M) {
    (h.disableAll(),
      M.supportsVertexTextures && h.enable(0),
      M.instancing && h.enable(1),
      M.instancingColor && h.enable(2),
      M.instancingMorph && h.enable(3),
      M.matcap && h.enable(4),
      M.envMap && h.enable(5),
      M.normalMapObjectSpace && h.enable(6),
      M.normalMapTangentSpace && h.enable(7),
      M.clearcoat && h.enable(8),
      M.iridescence && h.enable(9),
      M.alphaTest && h.enable(10),
      M.vertexColors && h.enable(11),
      M.vertexAlphas && h.enable(12),
      M.vertexUv1s && h.enable(13),
      M.vertexUv2s && h.enable(14),
      M.vertexUv3s && h.enable(15),
      M.vertexTangents && h.enable(16),
      M.anisotropy && h.enable(17),
      M.alphaHash && h.enable(18),
      M.batching && h.enable(19),
      M.dispersion && h.enable(20),
      M.batchingColor && h.enable(21),
      M.gradientMap && h.enable(22),
      C.push(h.mask),
      h.disableAll(),
      M.fog && h.enable(0),
      M.useFog && h.enable(1),
      M.flatShading && h.enable(2),
      M.logarithmicDepthBuffer && h.enable(3),
      M.reversedDepthBuffer && h.enable(4),
      M.skinning && h.enable(5),
      M.morphTargets && h.enable(6),
      M.morphNormals && h.enable(7),
      M.morphColors && h.enable(8),
      M.premultipliedAlpha && h.enable(9),
      M.shadowMapEnabled && h.enable(10),
      M.doubleSided && h.enable(11),
      M.flipSided && h.enable(12),
      M.useDepthPacking && h.enable(13),
      M.dithering && h.enable(14),
      M.transmission && h.enable(15),
      M.sheen && h.enable(16),
      M.opaque && h.enable(17),
      M.pointsUvs && h.enable(18),
      M.decodeVideoTexture && h.enable(19),
      M.decodeVideoTextureEmissive && h.enable(20),
      M.alphaToCoverage && h.enable(21),
      C.push(h.mask));
  }
  function L(C) {
    const M = R[C.type];
    let z;
    if (M) {
      const Y = Pn[M];
      z = y_.clone(Y.uniforms);
    } else z = C.uniforms;
    return z;
  }
  function k(C, M) {
    let z;
    for (let Y = 0, te = v.length; Y < te; Y++) {
      const J = v[Y];
      if (J.cacheKey === M) {
        ((z = J), ++z.usedTimes);
        break;
      }
    }
    return (z === void 0 && ((z = new Jx(r, M, C, o)), v.push(z)), z);
  }
  function P(C) {
    if (--C.usedTimes === 0) {
      const M = v.indexOf(C);
      ((v[M] = v[v.length - 1]), v.pop(), C.destroy());
    }
  }
  function H(C) {
    p.remove(C);
  }
  function q() {
    p.dispose();
  }
  return {
    getParameters: E,
    getProgramCacheKey: m,
    getUniforms: L,
    acquireProgram: k,
    releaseProgram: P,
    releaseShaderCache: H,
    programs: v,
    dispose: q,
  };
}
function iE() {
  let r = new WeakMap();
  function e(u) {
    return r.has(u);
  }
  function t(u) {
    let h = r.get(u);
    return (h === void 0 && ((h = {}), r.set(u, h)), h);
  }
  function n(u) {
    r.delete(u);
  }
  function a(u, h, p) {
    r.get(u)[h] = p;
  }
  function o() {
    r = new WeakMap();
  }
  return { has: e, get: t, remove: n, update: a, dispose: o };
}
function rE(r, e) {
  return r.groupOrder !== e.groupOrder
    ? r.groupOrder - e.groupOrder
    : r.renderOrder !== e.renderOrder
      ? r.renderOrder - e.renderOrder
      : r.material.id !== e.material.id
        ? r.material.id - e.material.id
        : r.z !== e.z
          ? r.z - e.z
          : r.id - e.id;
}
function xc(r, e) {
  return r.groupOrder !== e.groupOrder
    ? r.groupOrder - e.groupOrder
    : r.renderOrder !== e.renderOrder
      ? r.renderOrder - e.renderOrder
      : r.z !== e.z
        ? e.z - r.z
        : r.id - e.id;
}
function Ec() {
  const r = [];
  let e = 0;
  const t = [],
    n = [],
    a = [];
  function o() {
    ((e = 0), (t.length = 0), (n.length = 0), (a.length = 0));
  }
  function u(_, x, y, R, D, E) {
    let m = r[e];
    return (
      m === void 0
        ? ((m = {
            id: _.id,
            object: _,
            geometry: x,
            material: y,
            groupOrder: R,
            renderOrder: _.renderOrder,
            z: D,
            group: E,
          }),
          (r[e] = m))
        : ((m.id = _.id),
          (m.object = _),
          (m.geometry = x),
          (m.material = y),
          (m.groupOrder = R),
          (m.renderOrder = _.renderOrder),
          (m.z = D),
          (m.group = E)),
      e++,
      m
    );
  }
  function h(_, x, y, R, D, E) {
    const m = u(_, x, y, R, D, E);
    y.transmission > 0
      ? n.push(m)
      : y.transparent === !0
        ? a.push(m)
        : t.push(m);
  }
  function p(_, x, y, R, D, E) {
    const m = u(_, x, y, R, D, E);
    y.transmission > 0
      ? n.unshift(m)
      : y.transparent === !0
        ? a.unshift(m)
        : t.unshift(m);
  }
  function d(_, x) {
    (t.length > 1 && t.sort(_ || rE),
      n.length > 1 && n.sort(x || xc),
      a.length > 1 && a.sort(x || xc));
  }
  function v() {
    for (let _ = e, x = r.length; _ < x; _++) {
      const y = r[_];
      if (y.id === null) break;
      ((y.id = null),
        (y.object = null),
        (y.geometry = null),
        (y.material = null),
        (y.group = null));
    }
  }
  return {
    opaque: t,
    transmissive: n,
    transparent: a,
    init: o,
    push: h,
    unshift: p,
    finish: v,
    sort: d,
  };
}
function sE() {
  let r = new WeakMap();
  function e(n, a) {
    const o = r.get(n);
    let u;
    return (
      o === void 0
        ? ((u = new Ec()), r.set(n, [u]))
        : a >= o.length
          ? ((u = new Ec()), o.push(u))
          : (u = o[a]),
      u
    );
  }
  function t() {
    r = new WeakMap();
  }
  return { get: e, dispose: t };
}
function aE() {
  const r = {};
  return {
    get: function (e) {
      if (r[e.id] !== void 0) return r[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = { direction: new K(), color: new pt() };
          break;
        case "SpotLight":
          t = {
            position: new K(),
            direction: new K(),
            color: new pt(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0,
          };
          break;
        case "PointLight":
          t = { position: new K(), color: new pt(), distance: 0, decay: 0 };
          break;
        case "HemisphereLight":
          t = { direction: new K(), skyColor: new pt(), groundColor: new pt() };
          break;
        case "RectAreaLight":
          t = {
            color: new pt(),
            position: new K(),
            halfWidth: new K(),
            halfHeight: new K(),
          };
          break;
      }
      return ((r[e.id] = t), t);
    },
  };
}
function oE() {
  const r = {};
  return {
    get: function (e) {
      if (r[e.id] !== void 0) return r[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new it(),
          };
          break;
        case "SpotLight":
          t = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new it(),
          };
          break;
        case "PointLight":
          t = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new it(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3,
          };
          break;
      }
      return ((r[e.id] = t), t);
    },
  };
}
let lE = 0;
function cE(r, e) {
  return (
    (e.castShadow ? 2 : 0) -
    (r.castShadow ? 2 : 0) +
    (e.map ? 1 : 0) -
    (r.map ? 1 : 0)
  );
}
function uE(r) {
  const e = new aE(),
    t = oE(),
    n = {
      version: 0,
      hash: {
        directionalLength: -1,
        pointLength: -1,
        spotLength: -1,
        rectAreaLength: -1,
        hemiLength: -1,
        numDirectionalShadows: -1,
        numPointShadows: -1,
        numSpotShadows: -1,
        numSpotMaps: -1,
        numLightProbes: -1,
      },
      ambient: [0, 0, 0],
      probe: [],
      directional: [],
      directionalShadow: [],
      directionalShadowMap: [],
      directionalShadowMatrix: [],
      spot: [],
      spotLightMap: [],
      spotShadow: [],
      spotShadowMap: [],
      spotLightMatrix: [],
      rectArea: [],
      rectAreaLTC1: null,
      rectAreaLTC2: null,
      point: [],
      pointShadow: [],
      pointShadowMap: [],
      pointShadowMatrix: [],
      hemi: [],
      numSpotLightShadowsWithMaps: 0,
      numLightProbes: 0,
    };
  for (let d = 0; d < 9; d++) n.probe.push(new K());
  const a = new K(),
    o = new Ut(),
    u = new Ut();
  function h(d) {
    let v = 0,
      _ = 0,
      x = 0;
    for (let C = 0; C < 9; C++) n.probe[C].set(0, 0, 0);
    let y = 0,
      R = 0,
      D = 0,
      E = 0,
      m = 0,
      N = 0,
      U = 0,
      L = 0,
      k = 0,
      P = 0,
      H = 0;
    d.sort(cE);
    for (let C = 0, M = d.length; C < M; C++) {
      const z = d[C],
        Y = z.color,
        te = z.intensity,
        J = z.distance,
        he = z.shadow && z.shadow.map ? z.shadow.map.texture : null;
      if (z.isAmbientLight) ((v += Y.r * te), (_ += Y.g * te), (x += Y.b * te));
      else if (z.isLightProbe) {
        for (let ae = 0; ae < 9; ae++)
          n.probe[ae].addScaledVector(z.sh.coefficients[ae], te);
        H++;
      } else if (z.isDirectionalLight) {
        const ae = e.get(z);
        if (
          (ae.color.copy(z.color).multiplyScalar(z.intensity), z.castShadow)
        ) {
          const ie = z.shadow,
            Q = t.get(z);
          ((Q.shadowIntensity = ie.intensity),
            (Q.shadowBias = ie.bias),
            (Q.shadowNormalBias = ie.normalBias),
            (Q.shadowRadius = ie.radius),
            (Q.shadowMapSize = ie.mapSize),
            (n.directionalShadow[y] = Q),
            (n.directionalShadowMap[y] = he),
            (n.directionalShadowMatrix[y] = z.shadow.matrix),
            N++);
        }
        ((n.directional[y] = ae), y++);
      } else if (z.isSpotLight) {
        const ae = e.get(z);
        (ae.position.setFromMatrixPosition(z.matrixWorld),
          ae.color.copy(Y).multiplyScalar(te),
          (ae.distance = J),
          (ae.coneCos = Math.cos(z.angle)),
          (ae.penumbraCos = Math.cos(z.angle * (1 - z.penumbra))),
          (ae.decay = z.decay),
          (n.spot[D] = ae));
        const ie = z.shadow;
        if (
          (z.map &&
            ((n.spotLightMap[k] = z.map),
            k++,
            ie.updateMatrices(z),
            z.castShadow && P++),
          (n.spotLightMatrix[D] = ie.matrix),
          z.castShadow)
        ) {
          const Q = t.get(z);
          ((Q.shadowIntensity = ie.intensity),
            (Q.shadowBias = ie.bias),
            (Q.shadowNormalBias = ie.normalBias),
            (Q.shadowRadius = ie.radius),
            (Q.shadowMapSize = ie.mapSize),
            (n.spotShadow[D] = Q),
            (n.spotShadowMap[D] = he),
            L++);
        }
        D++;
      } else if (z.isRectAreaLight) {
        const ae = e.get(z);
        (ae.color.copy(Y).multiplyScalar(te),
          ae.halfWidth.set(z.width * 0.5, 0, 0),
          ae.halfHeight.set(0, z.height * 0.5, 0),
          (n.rectArea[E] = ae),
          E++);
      } else if (z.isPointLight) {
        const ae = e.get(z);
        if (
          (ae.color.copy(z.color).multiplyScalar(z.intensity),
          (ae.distance = z.distance),
          (ae.decay = z.decay),
          z.castShadow)
        ) {
          const ie = z.shadow,
            Q = t.get(z);
          ((Q.shadowIntensity = ie.intensity),
            (Q.shadowBias = ie.bias),
            (Q.shadowNormalBias = ie.normalBias),
            (Q.shadowRadius = ie.radius),
            (Q.shadowMapSize = ie.mapSize),
            (Q.shadowCameraNear = ie.camera.near),
            (Q.shadowCameraFar = ie.camera.far),
            (n.pointShadow[R] = Q),
            (n.pointShadowMap[R] = he),
            (n.pointShadowMatrix[R] = z.shadow.matrix),
            U++);
        }
        ((n.point[R] = ae), R++);
      } else if (z.isHemisphereLight) {
        const ae = e.get(z);
        (ae.skyColor.copy(z.color).multiplyScalar(te),
          ae.groundColor.copy(z.groundColor).multiplyScalar(te),
          (n.hemi[m] = ae),
          m++);
      }
    }
    (E > 0 &&
      (r.has("OES_texture_float_linear") === !0
        ? ((n.rectAreaLTC1 = Pe.LTC_FLOAT_1), (n.rectAreaLTC2 = Pe.LTC_FLOAT_2))
        : ((n.rectAreaLTC1 = Pe.LTC_HALF_1), (n.rectAreaLTC2 = Pe.LTC_HALF_2))),
      (n.ambient[0] = v),
      (n.ambient[1] = _),
      (n.ambient[2] = x));
    const q = n.hash;
    (q.directionalLength !== y ||
      q.pointLength !== R ||
      q.spotLength !== D ||
      q.rectAreaLength !== E ||
      q.hemiLength !== m ||
      q.numDirectionalShadows !== N ||
      q.numPointShadows !== U ||
      q.numSpotShadows !== L ||
      q.numSpotMaps !== k ||
      q.numLightProbes !== H) &&
      ((n.directional.length = y),
      (n.spot.length = D),
      (n.rectArea.length = E),
      (n.point.length = R),
      (n.hemi.length = m),
      (n.directionalShadow.length = N),
      (n.directionalShadowMap.length = N),
      (n.pointShadow.length = U),
      (n.pointShadowMap.length = U),
      (n.spotShadow.length = L),
      (n.spotShadowMap.length = L),
      (n.directionalShadowMatrix.length = N),
      (n.pointShadowMatrix.length = U),
      (n.spotLightMatrix.length = L + k - P),
      (n.spotLightMap.length = k),
      (n.numSpotLightShadowsWithMaps = P),
      (n.numLightProbes = H),
      (q.directionalLength = y),
      (q.pointLength = R),
      (q.spotLength = D),
      (q.rectAreaLength = E),
      (q.hemiLength = m),
      (q.numDirectionalShadows = N),
      (q.numPointShadows = U),
      (q.numSpotShadows = L),
      (q.numSpotMaps = k),
      (q.numLightProbes = H),
      (n.version = lE++));
  }
  function p(d, v) {
    let _ = 0,
      x = 0,
      y = 0,
      R = 0,
      D = 0;
    const E = v.matrixWorldInverse;
    for (let m = 0, N = d.length; m < N; m++) {
      const U = d[m];
      if (U.isDirectionalLight) {
        const L = n.directional[_];
        (L.direction.setFromMatrixPosition(U.matrixWorld),
          a.setFromMatrixPosition(U.target.matrixWorld),
          L.direction.sub(a),
          L.direction.transformDirection(E),
          _++);
      } else if (U.isSpotLight) {
        const L = n.spot[y];
        (L.position.setFromMatrixPosition(U.matrixWorld),
          L.position.applyMatrix4(E),
          L.direction.setFromMatrixPosition(U.matrixWorld),
          a.setFromMatrixPosition(U.target.matrixWorld),
          L.direction.sub(a),
          L.direction.transformDirection(E),
          y++);
      } else if (U.isRectAreaLight) {
        const L = n.rectArea[R];
        (L.position.setFromMatrixPosition(U.matrixWorld),
          L.position.applyMatrix4(E),
          u.identity(),
          o.copy(U.matrixWorld),
          o.premultiply(E),
          u.extractRotation(o),
          L.halfWidth.set(U.width * 0.5, 0, 0),
          L.halfHeight.set(0, U.height * 0.5, 0),
          L.halfWidth.applyMatrix4(u),
          L.halfHeight.applyMatrix4(u),
          R++);
      } else if (U.isPointLight) {
        const L = n.point[x];
        (L.position.setFromMatrixPosition(U.matrixWorld),
          L.position.applyMatrix4(E),
          x++);
      } else if (U.isHemisphereLight) {
        const L = n.hemi[D];
        (L.direction.setFromMatrixPosition(U.matrixWorld),
          L.direction.transformDirection(E),
          D++);
      }
    }
  }
  return { setup: h, setupView: p, state: n };
}
function Sc(r) {
  const e = new uE(r),
    t = [],
    n = [];
  function a(v) {
    ((d.camera = v), (t.length = 0), (n.length = 0));
  }
  function o(v) {
    t.push(v);
  }
  function u(v) {
    n.push(v);
  }
  function h() {
    e.setup(t);
  }
  function p(v) {
    e.setupView(t, v);
  }
  const d = {
    lightsArray: t,
    shadowsArray: n,
    camera: null,
    lights: e,
    transmissionRenderTarget: {},
  };
  return {
    init: a,
    state: d,
    setupLights: h,
    setupLightsView: p,
    pushLight: o,
    pushShadow: u,
  };
}
function hE(r) {
  let e = new WeakMap();
  function t(a, o = 0) {
    const u = e.get(a);
    let h;
    return (
      u === void 0
        ? ((h = new Sc(r)), e.set(a, [h]))
        : o >= u.length
          ? ((h = new Sc(r)), u.push(h))
          : (h = u[o]),
      h
    );
  }
  function n() {
    e = new WeakMap();
  }
  return { get: t, dispose: n };
}
const fE = `void main() {
	gl_Position = vec4( position, 1.0 );
}`,
  dE = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;
function pE(r, e, t) {
  let n = new Lo();
  const a = new it(),
    o = new it(),
    u = new It(),
    h = new L_({ depthPacking: Xm }),
    p = new F_(),
    d = {},
    v = t.maxTextureSize,
    _ = { [oi]: cn, [cn]: oi, [$n]: $n },
    x = new li({
      defines: { VSM_SAMPLES: 8 },
      uniforms: {
        shadow_pass: { value: null },
        resolution: { value: new it() },
        radius: { value: 4 },
      },
      vertexShader: fE,
      fragmentShader: dE,
    }),
    y = x.clone();
  y.defines.HORIZONTAL_PASS = 1;
  const R = new gn();
  R.setAttribute(
    "position",
    new _n(new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]), 3),
  );
  const D = new ln(R, x),
    E = this;
  ((this.enabled = !1),
    (this.autoUpdate = !0),
    (this.needsUpdate = !1),
    (this.type = Rc));
  let m = this.type;
  this.render = function (P, H, q) {
    if (
      E.enabled === !1 ||
      (E.autoUpdate === !1 && E.needsUpdate === !1) ||
      P.length === 0
    )
      return;
    const C = r.getRenderTarget(),
      M = r.getActiveCubeFace(),
      z = r.getActiveMipmapLevel(),
      Y = r.state;
    (Y.setBlending(si),
      Y.buffers.depth.getReversed() === !0
        ? Y.buffers.color.setClear(0, 0, 0, 0)
        : Y.buffers.color.setClear(1, 1, 1, 1),
      Y.buffers.depth.setTest(!0),
      Y.setScissorTest(!1));
    const te = m !== Xn && this.type === Xn,
      J = m === Xn && this.type !== Xn;
    for (let he = 0, ae = P.length; he < ae; he++) {
      const ie = P[he],
        Q = ie.shadow;
      if (Q === void 0) {
        console.warn("THREE.WebGLShadowMap:", ie, "has no shadow.");
        continue;
      }
      if (Q.autoUpdate === !1 && Q.needsUpdate === !1) continue;
      a.copy(Q.mapSize);
      const Ee = Q.getFrameExtents();
      if (
        (a.multiply(Ee),
        o.copy(Q.mapSize),
        (a.x > v || a.y > v) &&
          (a.x > v &&
            ((o.x = Math.floor(v / Ee.x)),
            (a.x = o.x * Ee.x),
            (Q.mapSize.x = o.x)),
          a.y > v &&
            ((o.y = Math.floor(v / Ee.y)),
            (a.y = o.y * Ee.y),
            (Q.mapSize.y = o.y))),
        Q.map === null || te === !0 || J === !0)
      ) {
        const Re = this.type !== Xn ? { minFilter: wn, magFilter: wn } : {};
        (Q.map !== null && Q.map.dispose(),
          (Q.map = new Pi(a.x, a.y, Re)),
          (Q.map.texture.name = ie.name + ".shadowMap"),
          Q.camera.updateProjectionMatrix());
      }
      (r.setRenderTarget(Q.map), r.clear());
      const we = Q.getViewportCount();
      for (let Re = 0; Re < we; Re++) {
        const We = Q.getViewport(Re);
        (u.set(o.x * We.x, o.y * We.y, o.x * We.z, o.y * We.w),
          Y.viewport(u),
          Q.updateMatrices(ie, Re),
          (n = Q.getFrustum()),
          L(H, q, Q.camera, ie, this.type));
      }
      (Q.isPointLightShadow !== !0 && this.type === Xn && N(Q, q),
        (Q.needsUpdate = !1));
    }
    ((m = this.type), (E.needsUpdate = !1), r.setRenderTarget(C, M, z));
  };
  function N(P, H) {
    const q = e.update(D);
    (x.defines.VSM_SAMPLES !== P.blurSamples &&
      ((x.defines.VSM_SAMPLES = P.blurSamples),
      (y.defines.VSM_SAMPLES = P.blurSamples),
      (x.needsUpdate = !0),
      (y.needsUpdate = !0)),
      P.mapPass === null && (P.mapPass = new Pi(a.x, a.y)),
      (x.uniforms.shadow_pass.value = P.map.texture),
      (x.uniforms.resolution.value = P.mapSize),
      (x.uniforms.radius.value = P.radius),
      r.setRenderTarget(P.mapPass),
      r.clear(),
      r.renderBufferDirect(H, null, q, x, D, null),
      (y.uniforms.shadow_pass.value = P.mapPass.texture),
      (y.uniforms.resolution.value = P.mapSize),
      (y.uniforms.radius.value = P.radius),
      r.setRenderTarget(P.map),
      r.clear(),
      r.renderBufferDirect(H, null, q, y, D, null));
  }
  function U(P, H, q, C) {
    let M = null;
    const z =
      q.isPointLight === !0 ? P.customDistanceMaterial : P.customDepthMaterial;
    if (z !== void 0) M = z;
    else if (
      ((M = q.isPointLight === !0 ? p : h),
      (r.localClippingEnabled &&
        H.clipShadows === !0 &&
        Array.isArray(H.clippingPlanes) &&
        H.clippingPlanes.length !== 0) ||
        (H.displacementMap && H.displacementScale !== 0) ||
        (H.alphaMap && H.alphaTest > 0) ||
        (H.map && H.alphaTest > 0) ||
        H.alphaToCoverage === !0)
    ) {
      const Y = M.uuid,
        te = H.uuid;
      let J = d[Y];
      J === void 0 && ((J = {}), (d[Y] = J));
      let he = J[te];
      (he === void 0 &&
        ((he = M.clone()), (J[te] = he), H.addEventListener("dispose", k)),
        (M = he));
    }
    if (
      ((M.visible = H.visible),
      (M.wireframe = H.wireframe),
      C === Xn
        ? (M.side = H.shadowSide !== null ? H.shadowSide : H.side)
        : (M.side = H.shadowSide !== null ? H.shadowSide : _[H.side]),
      (M.alphaMap = H.alphaMap),
      (M.alphaTest = H.alphaToCoverage === !0 ? 0.5 : H.alphaTest),
      (M.map = H.map),
      (M.clipShadows = H.clipShadows),
      (M.clippingPlanes = H.clippingPlanes),
      (M.clipIntersection = H.clipIntersection),
      (M.displacementMap = H.displacementMap),
      (M.displacementScale = H.displacementScale),
      (M.displacementBias = H.displacementBias),
      (M.wireframeLinewidth = H.wireframeLinewidth),
      (M.linewidth = H.linewidth),
      q.isPointLight === !0 && M.isMeshDistanceMaterial === !0)
    ) {
      const Y = r.properties.get(M);
      Y.light = q;
    }
    return M;
  }
  function L(P, H, q, C, M) {
    if (P.visible === !1) return;
    if (
      P.layers.test(H.layers) &&
      (P.isMesh || P.isLine || P.isPoints) &&
      (P.castShadow || (P.receiveShadow && M === Xn)) &&
      (!P.frustumCulled || n.intersectsObject(P))
    ) {
      P.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse, P.matrixWorld);
      const te = e.update(P),
        J = P.material;
      if (Array.isArray(J)) {
        const he = te.groups;
        for (let ae = 0, ie = he.length; ae < ie; ae++) {
          const Q = he[ae],
            Ee = J[Q.materialIndex];
          if (Ee && Ee.visible) {
            const we = U(P, Ee, C, M);
            (P.onBeforeShadow(r, P, H, q, te, we, Q),
              r.renderBufferDirect(q, null, te, we, P, Q),
              P.onAfterShadow(r, P, H, q, te, we, Q));
          }
        }
      } else if (J.visible) {
        const he = U(P, J, C, M);
        (P.onBeforeShadow(r, P, H, q, te, he, null),
          r.renderBufferDirect(q, null, te, he, P, null),
          P.onAfterShadow(r, P, H, q, te, he, null));
      }
    }
    const Y = P.children;
    for (let te = 0, J = Y.length; te < J; te++) L(Y[te], H, q, C, M);
  }
  function k(P) {
    P.target.removeEventListener("dispose", k);
    for (const q in d) {
      const C = d[q],
        M = P.target.uuid;
      M in C && (C[M].dispose(), delete C[M]);
    }
  }
}
const mE = {
  [Ia]: Ua,
  [Na]: Ba,
  [Oa]: za,
  [er]: ka,
  [Ua]: Ia,
  [Ba]: Na,
  [za]: Oa,
  [ka]: er,
};
function _E(r, e) {
  function t() {
    let V = !1;
    const ye = new It();
    let be = null;
    const Le = new It(0, 0, 0, 0);
    return {
      setMask: function (G) {
        be !== G && !V && (r.colorMask(G, G, G, G), (be = G));
      },
      setLocked: function (G) {
        V = G;
      },
      setClear: function (G, B, Fe, Je, mt) {
        (mt === !0 && ((G *= Je), (B *= Je), (Fe *= Je)),
          ye.set(G, B, Fe, Je),
          Le.equals(ye) === !1 && (r.clearColor(G, B, Fe, Je), Le.copy(ye)));
      },
      reset: function () {
        ((V = !1), (be = null), Le.set(-1, 0, 0, 0));
      },
    };
  }
  function n() {
    let V = !1,
      ye = !1,
      be = null,
      Le = null,
      G = null;
    return {
      setReversed: function (B) {
        if (ye !== B) {
          const Fe = e.get("EXT_clip_control");
          (B
            ? Fe.clipControlEXT(Fe.LOWER_LEFT_EXT, Fe.ZERO_TO_ONE_EXT)
            : Fe.clipControlEXT(Fe.LOWER_LEFT_EXT, Fe.NEGATIVE_ONE_TO_ONE_EXT),
            (ye = B));
          const Je = G;
          ((G = null), this.setClear(Je));
        }
      },
      getReversed: function () {
        return ye;
      },
      setTest: function (B) {
        B ? de(r.DEPTH_TEST) : le(r.DEPTH_TEST);
      },
      setMask: function (B) {
        be !== B && !V && (r.depthMask(B), (be = B));
      },
      setFunc: function (B) {
        if ((ye && (B = mE[B]), Le !== B)) {
          switch (B) {
            case Ia:
              r.depthFunc(r.NEVER);
              break;
            case Ua:
              r.depthFunc(r.ALWAYS);
              break;
            case Na:
              r.depthFunc(r.LESS);
              break;
            case er:
              r.depthFunc(r.LEQUAL);
              break;
            case Oa:
              r.depthFunc(r.EQUAL);
              break;
            case ka:
              r.depthFunc(r.GEQUAL);
              break;
            case Ba:
              r.depthFunc(r.GREATER);
              break;
            case za:
              r.depthFunc(r.NOTEQUAL);
              break;
            default:
              r.depthFunc(r.LEQUAL);
          }
          Le = B;
        }
      },
      setLocked: function (B) {
        V = B;
      },
      setClear: function (B) {
        G !== B && (ye && (B = 1 - B), r.clearDepth(B), (G = B));
      },
      reset: function () {
        ((V = !1), (be = null), (Le = null), (G = null), (ye = !1));
      },
    };
  }
  function a() {
    let V = !1,
      ye = null,
      be = null,
      Le = null,
      G = null,
      B = null,
      Fe = null,
      Je = null,
      mt = null;
    return {
      setTest: function (st) {
        V || (st ? de(r.STENCIL_TEST) : le(r.STENCIL_TEST));
      },
      setMask: function (st) {
        ye !== st && !V && (r.stencilMask(st), (ye = st));
      },
      setFunc: function (st, vn, Nt) {
        (be !== st || Le !== vn || G !== Nt) &&
          (r.stencilFunc(st, vn, Nt), (be = st), (Le = vn), (G = Nt));
      },
      setOp: function (st, vn, Nt) {
        (B !== st || Fe !== vn || Je !== Nt) &&
          (r.stencilOp(st, vn, Nt), (B = st), (Fe = vn), (Je = Nt));
      },
      setLocked: function (st) {
        V = st;
      },
      setClear: function (st) {
        mt !== st && (r.clearStencil(st), (mt = st));
      },
      reset: function () {
        ((V = !1),
          (ye = null),
          (be = null),
          (Le = null),
          (G = null),
          (B = null),
          (Fe = null),
          (Je = null),
          (mt = null));
      },
    };
  }
  const o = new t(),
    u = new n(),
    h = new a(),
    p = new WeakMap(),
    d = new WeakMap();
  let v = {},
    _ = {},
    x = new WeakMap(),
    y = [],
    R = null,
    D = !1,
    E = null,
    m = null,
    N = null,
    U = null,
    L = null,
    k = null,
    P = null,
    H = new pt(0, 0, 0),
    q = 0,
    C = !1,
    M = null,
    z = null,
    Y = null,
    te = null,
    J = null;
  const he = r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let ae = !1,
    ie = 0;
  const Q = r.getParameter(r.VERSION);
  Q.indexOf("WebGL") !== -1
    ? ((ie = parseFloat(/^WebGL (\d)/.exec(Q)[1])), (ae = ie >= 1))
    : Q.indexOf("OpenGL ES") !== -1 &&
      ((ie = parseFloat(/^OpenGL ES (\d)/.exec(Q)[1])), (ae = ie >= 2));
  let Ee = null,
    we = {};
  const Re = r.getParameter(r.SCISSOR_BOX),
    We = r.getParameter(r.VIEWPORT),
    Ke = new It().fromArray(Re),
    tt = new It().fromArray(We);
  function Qe(V, ye, be, Le) {
    const G = new Uint8Array(4),
      B = r.createTexture();
    (r.bindTexture(V, B),
      r.texParameteri(V, r.TEXTURE_MIN_FILTER, r.NEAREST),
      r.texParameteri(V, r.TEXTURE_MAG_FILTER, r.NEAREST));
    for (let Fe = 0; Fe < be; Fe++)
      V === r.TEXTURE_3D || V === r.TEXTURE_2D_ARRAY
        ? r.texImage3D(ye, 0, r.RGBA, 1, 1, Le, 0, r.RGBA, r.UNSIGNED_BYTE, G)
        : r.texImage2D(ye + Fe, 0, r.RGBA, 1, 1, 0, r.RGBA, r.UNSIGNED_BYTE, G);
    return B;
  }
  const se = {};
  ((se[r.TEXTURE_2D] = Qe(r.TEXTURE_2D, r.TEXTURE_2D, 1)),
    (se[r.TEXTURE_CUBE_MAP] = Qe(
      r.TEXTURE_CUBE_MAP,
      r.TEXTURE_CUBE_MAP_POSITIVE_X,
      6,
    )),
    (se[r.TEXTURE_2D_ARRAY] = Qe(r.TEXTURE_2D_ARRAY, r.TEXTURE_2D_ARRAY, 1, 1)),
    (se[r.TEXTURE_3D] = Qe(r.TEXTURE_3D, r.TEXTURE_3D, 1, 1)),
    o.setClear(0, 0, 0, 1),
    u.setClear(1),
    h.setClear(0),
    de(r.DEPTH_TEST),
    u.setFunc(er),
    Ye(!1),
    Oe(Tl),
    de(r.CULL_FACE),
    xt(si));
  function de(V) {
    v[V] !== !0 && (r.enable(V), (v[V] = !0));
  }
  function le(V) {
    v[V] !== !1 && (r.disable(V), (v[V] = !1));
  }
  function Me(V, ye) {
    return _[V] !== ye
      ? (r.bindFramebuffer(V, ye),
        (_[V] = ye),
        V === r.DRAW_FRAMEBUFFER && (_[r.FRAMEBUFFER] = ye),
        V === r.FRAMEBUFFER && (_[r.DRAW_FRAMEBUFFER] = ye),
        !0)
      : !1;
  }
  function He(V, ye) {
    let be = y,
      Le = !1;
    if (V) {
      ((be = x.get(ye)), be === void 0 && ((be = []), x.set(ye, be)));
      const G = V.textures;
      if (be.length !== G.length || be[0] !== r.COLOR_ATTACHMENT0) {
        for (let B = 0, Fe = G.length; B < Fe; B++)
          be[B] = r.COLOR_ATTACHMENT0 + B;
        ((be.length = G.length), (Le = !0));
      }
    } else be[0] !== r.BACK && ((be[0] = r.BACK), (Le = !0));
    Le && r.drawBuffers(be);
  }
  function lt(V) {
    return R !== V ? (r.useProgram(V), (R = V), !0) : !1;
  }
  const At = {
    [Ti]: r.FUNC_ADD,
    [gm]: r.FUNC_SUBTRACT,
    [vm]: r.FUNC_REVERSE_SUBTRACT,
  };
  ((At[xm] = r.MIN), (At[Em] = r.MAX));
  const O = {
    [Sm]: r.ZERO,
    [ym]: r.ONE,
    [Mm]: r.SRC_COLOR,
    [La]: r.SRC_ALPHA,
    [Cm]: r.SRC_ALPHA_SATURATE,
    [Am]: r.DST_COLOR,
    [wm]: r.DST_ALPHA,
    [Tm]: r.ONE_MINUS_SRC_COLOR,
    [Fa]: r.ONE_MINUS_SRC_ALPHA,
    [Rm]: r.ONE_MINUS_DST_COLOR,
    [bm]: r.ONE_MINUS_DST_ALPHA,
    [Pm]: r.CONSTANT_COLOR,
    [Dm]: r.ONE_MINUS_CONSTANT_COLOR,
    [Lm]: r.CONSTANT_ALPHA,
    [Fm]: r.ONE_MINUS_CONSTANT_ALPHA,
  };
  function xt(V, ye, be, Le, G, B, Fe, Je, mt, st) {
    if (V === si) {
      D === !0 && (le(r.BLEND), (D = !1));
      return;
    }
    if ((D === !1 && (de(r.BLEND), (D = !0)), V !== _m)) {
      if (V !== E || st !== C) {
        if (
          ((m !== Ti || L !== Ti) &&
            (r.blendEquation(r.FUNC_ADD), (m = Ti), (L = Ti)),
          st)
        )
          switch (V) {
            case Ji:
              r.blendFuncSeparate(
                r.ONE,
                r.ONE_MINUS_SRC_ALPHA,
                r.ONE,
                r.ONE_MINUS_SRC_ALPHA,
              );
              break;
            case wl:
              r.blendFunc(r.ONE, r.ONE);
              break;
            case bl:
              r.blendFuncSeparate(r.ZERO, r.ONE_MINUS_SRC_COLOR, r.ZERO, r.ONE);
              break;
            case Al:
              r.blendFuncSeparate(
                r.DST_COLOR,
                r.ONE_MINUS_SRC_ALPHA,
                r.ZERO,
                r.ONE,
              );
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", V);
              break;
          }
        else
          switch (V) {
            case Ji:
              r.blendFuncSeparate(
                r.SRC_ALPHA,
                r.ONE_MINUS_SRC_ALPHA,
                r.ONE,
                r.ONE_MINUS_SRC_ALPHA,
              );
              break;
            case wl:
              r.blendFuncSeparate(r.SRC_ALPHA, r.ONE, r.ONE, r.ONE);
              break;
            case bl:
              console.error(
                "THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true",
              );
              break;
            case Al:
              console.error(
                "THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true",
              );
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", V);
              break;
          }
        ((N = null),
          (U = null),
          (k = null),
          (P = null),
          H.set(0, 0, 0),
          (q = 0),
          (E = V),
          (C = st));
      }
      return;
    }
    ((G = G || ye),
      (B = B || be),
      (Fe = Fe || Le),
      (ye !== m || G !== L) &&
        (r.blendEquationSeparate(At[ye], At[G]), (m = ye), (L = G)),
      (be !== N || Le !== U || B !== k || Fe !== P) &&
        (r.blendFuncSeparate(O[be], O[Le], O[B], O[Fe]),
        (N = be),
        (U = Le),
        (k = B),
        (P = Fe)),
      (Je.equals(H) === !1 || mt !== q) &&
        (r.blendColor(Je.r, Je.g, Je.b, mt), H.copy(Je), (q = mt)),
      (E = V),
      (C = !1));
  }
  function et(V, ye) {
    V.side === $n ? le(r.CULL_FACE) : de(r.CULL_FACE);
    let be = V.side === cn;
    (ye && (be = !be),
      Ye(be),
      V.blending === Ji && V.transparent === !1
        ? xt(si)
        : xt(
            V.blending,
            V.blendEquation,
            V.blendSrc,
            V.blendDst,
            V.blendEquationAlpha,
            V.blendSrcAlpha,
            V.blendDstAlpha,
            V.blendColor,
            V.blendAlpha,
            V.premultipliedAlpha,
          ),
      u.setFunc(V.depthFunc),
      u.setTest(V.depthTest),
      u.setMask(V.depthWrite),
      o.setMask(V.colorWrite));
    const Le = V.stencilWrite;
    (h.setTest(Le),
      Le &&
        (h.setMask(V.stencilWriteMask),
        h.setFunc(V.stencilFunc, V.stencilRef, V.stencilFuncMask),
        h.setOp(V.stencilFail, V.stencilZFail, V.stencilZPass)),
      Ie(V.polygonOffset, V.polygonOffsetFactor, V.polygonOffsetUnits),
      V.alphaToCoverage === !0
        ? de(r.SAMPLE_ALPHA_TO_COVERAGE)
        : le(r.SAMPLE_ALPHA_TO_COVERAGE));
  }
  function Ye(V) {
    M !== V && (V ? r.frontFace(r.CW) : r.frontFace(r.CCW), (M = V));
  }
  function Oe(V) {
    (V !== pm
      ? (de(r.CULL_FACE),
        V !== z &&
          (V === Tl
            ? r.cullFace(r.BACK)
            : V === mm
              ? r.cullFace(r.FRONT)
              : r.cullFace(r.FRONT_AND_BACK)))
      : le(r.CULL_FACE),
      (z = V));
  }
  function Rt(V) {
    V !== Y && (ae && r.lineWidth(V), (Y = V));
  }
  function Ie(V, ye, be) {
    V
      ? (de(r.POLYGON_OFFSET_FILL),
        (te !== ye || J !== be) &&
          (r.polygonOffset(ye, be), (te = ye), (J = be)))
      : le(r.POLYGON_OFFSET_FILL);
  }
  function Ze(V) {
    V ? de(r.SCISSOR_TEST) : le(r.SCISSOR_TEST);
  }
  function Pt(V) {
    (V === void 0 && (V = r.TEXTURE0 + he - 1),
      Ee !== V && (r.activeTexture(V), (Ee = V)));
  }
  function St(V, ye, be) {
    be === void 0 && (Ee === null ? (be = r.TEXTURE0 + he - 1) : (be = Ee));
    let Le = we[be];
    (Le === void 0 && ((Le = { type: void 0, texture: void 0 }), (we[be] = Le)),
      (Le.type !== V || Le.texture !== ye) &&
        (Ee !== be && (r.activeTexture(be), (Ee = be)),
        r.bindTexture(V, ye || se[V]),
        (Le.type = V),
        (Le.texture = ye)));
  }
  function I() {
    const V = we[Ee];
    V !== void 0 &&
      V.type !== void 0 &&
      (r.bindTexture(V.type, null), (V.type = void 0), (V.texture = void 0));
  }
  function b() {
    try {
      r.compressedTexImage2D(...arguments);
    } catch (V) {
      console.error("THREE.WebGLState:", V);
    }
  }
  function $() {
    try {
      r.compressedTexImage3D(...arguments);
    } catch (V) {
      console.error("THREE.WebGLState:", V);
    }
  }
  function re() {
    try {
      r.texSubImage2D(...arguments);
    } catch (V) {
      console.error("THREE.WebGLState:", V);
    }
  }
  function pe() {
    try {
      r.texSubImage3D(...arguments);
    } catch (V) {
      console.error("THREE.WebGLState:", V);
    }
  }
  function oe() {
    try {
      r.compressedTexSubImage2D(...arguments);
    } catch (V) {
      console.error("THREE.WebGLState:", V);
    }
  }
  function Ve() {
    try {
      r.compressedTexSubImage3D(...arguments);
    } catch (V) {
      console.error("THREE.WebGLState:", V);
    }
  }
  function Te() {
    try {
      r.texStorage2D(...arguments);
    } catch (V) {
      console.error("THREE.WebGLState:", V);
    }
  }
  function ke() {
    try {
      r.texStorage3D(...arguments);
    } catch (V) {
      console.error("THREE.WebGLState:", V);
    }
  }
  function ze() {
    try {
      r.texImage2D(...arguments);
    } catch (V) {
      console.error("THREE.WebGLState:", V);
    }
  }
  function Se() {
    try {
      r.texImage3D(...arguments);
    } catch (V) {
      console.error("THREE.WebGLState:", V);
    }
  }
  function De(V) {
    Ke.equals(V) === !1 && (r.scissor(V.x, V.y, V.z, V.w), Ke.copy(V));
  }
  function je(V) {
    tt.equals(V) === !1 && (r.viewport(V.x, V.y, V.z, V.w), tt.copy(V));
  }
  function Be(V, ye) {
    let be = d.get(ye);
    be === void 0 && ((be = new WeakMap()), d.set(ye, be));
    let Le = be.get(V);
    Le === void 0 && ((Le = r.getUniformBlockIndex(ye, V.name)), be.set(V, Le));
  }
  function Ae(V, ye) {
    const Le = d.get(ye).get(V);
    p.get(ye) !== Le &&
      (r.uniformBlockBinding(ye, Le, V.__bindingPointIndex), p.set(ye, Le));
  }
  function nt() {
    (r.disable(r.BLEND),
      r.disable(r.CULL_FACE),
      r.disable(r.DEPTH_TEST),
      r.disable(r.POLYGON_OFFSET_FILL),
      r.disable(r.SCISSOR_TEST),
      r.disable(r.STENCIL_TEST),
      r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),
      r.blendEquation(r.FUNC_ADD),
      r.blendFunc(r.ONE, r.ZERO),
      r.blendFuncSeparate(r.ONE, r.ZERO, r.ONE, r.ZERO),
      r.blendColor(0, 0, 0, 0),
      r.colorMask(!0, !0, !0, !0),
      r.clearColor(0, 0, 0, 0),
      r.depthMask(!0),
      r.depthFunc(r.LESS),
      u.setReversed(!1),
      r.clearDepth(1),
      r.stencilMask(4294967295),
      r.stencilFunc(r.ALWAYS, 0, 4294967295),
      r.stencilOp(r.KEEP, r.KEEP, r.KEEP),
      r.clearStencil(0),
      r.cullFace(r.BACK),
      r.frontFace(r.CCW),
      r.polygonOffset(0, 0),
      r.activeTexture(r.TEXTURE0),
      r.bindFramebuffer(r.FRAMEBUFFER, null),
      r.bindFramebuffer(r.DRAW_FRAMEBUFFER, null),
      r.bindFramebuffer(r.READ_FRAMEBUFFER, null),
      r.useProgram(null),
      r.lineWidth(1),
      r.scissor(0, 0, r.canvas.width, r.canvas.height),
      r.viewport(0, 0, r.canvas.width, r.canvas.height),
      (v = {}),
      (Ee = null),
      (we = {}),
      (_ = {}),
      (x = new WeakMap()),
      (y = []),
      (R = null),
      (D = !1),
      (E = null),
      (m = null),
      (N = null),
      (U = null),
      (L = null),
      (k = null),
      (P = null),
      (H = new pt(0, 0, 0)),
      (q = 0),
      (C = !1),
      (M = null),
      (z = null),
      (Y = null),
      (te = null),
      (J = null),
      Ke.set(0, 0, r.canvas.width, r.canvas.height),
      tt.set(0, 0, r.canvas.width, r.canvas.height),
      o.reset(),
      u.reset(),
      h.reset());
  }
  return {
    buffers: { color: o, depth: u, stencil: h },
    enable: de,
    disable: le,
    bindFramebuffer: Me,
    drawBuffers: He,
    useProgram: lt,
    setBlending: xt,
    setMaterial: et,
    setFlipSided: Ye,
    setCullFace: Oe,
    setLineWidth: Rt,
    setPolygonOffset: Ie,
    setScissorTest: Ze,
    activeTexture: Pt,
    bindTexture: St,
    unbindTexture: I,
    compressedTexImage2D: b,
    compressedTexImage3D: $,
    texImage2D: ze,
    texImage3D: Se,
    updateUBOMapping: Be,
    uniformBlockBinding: Ae,
    texStorage2D: Te,
    texStorage3D: ke,
    texSubImage2D: re,
    texSubImage3D: pe,
    compressedTexSubImage2D: oe,
    compressedTexSubImage3D: Ve,
    scissor: De,
    viewport: je,
    reset: nt,
  };
}
function gE(r, e, t, n, a, o, u) {
  const h = e.has("WEBGL_multisampled_render_to_texture")
      ? e.get("WEBGL_multisampled_render_to_texture")
      : null,
    p =
      typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent),
    d = new it(),
    v = new WeakMap();
  let _;
  const x = new WeakMap();
  let y = !1;
  try {
    y =
      typeof OffscreenCanvas < "u" &&
      new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {}
  function R(I, b) {
    return y ? new OffscreenCanvas(I, b) : Tr("canvas");
  }
  function D(I, b, $) {
    let re = 1;
    const pe = St(I);
    if (
      ((pe.width > $ || pe.height > $) &&
        (re = $ / Math.max(pe.width, pe.height)),
      re < 1)
    )
      if (
        (typeof HTMLImageElement < "u" && I instanceof HTMLImageElement) ||
        (typeof HTMLCanvasElement < "u" && I instanceof HTMLCanvasElement) ||
        (typeof ImageBitmap < "u" && I instanceof ImageBitmap) ||
        (typeof VideoFrame < "u" && I instanceof VideoFrame)
      ) {
        const oe = Math.floor(re * pe.width),
          Ve = Math.floor(re * pe.height);
        _ === void 0 && (_ = R(oe, Ve));
        const Te = b ? R(oe, Ve) : _;
        return (
          (Te.width = oe),
          (Te.height = Ve),
          Te.getContext("2d").drawImage(I, 0, 0, oe, Ve),
          console.warn(
            "THREE.WebGLRenderer: Texture has been resized from (" +
              pe.width +
              "x" +
              pe.height +
              ") to (" +
              oe +
              "x" +
              Ve +
              ").",
          ),
          Te
        );
      } else
        return (
          "data" in I &&
            console.warn(
              "THREE.WebGLRenderer: Image in DataTexture is too big (" +
                pe.width +
                "x" +
                pe.height +
                ").",
            ),
          I
        );
    return I;
  }
  function E(I) {
    return I.generateMipmaps;
  }
  function m(I) {
    r.generateMipmap(I);
  }
  function N(I) {
    return I.isWebGLCubeRenderTarget
      ? r.TEXTURE_CUBE_MAP
      : I.isWebGL3DRenderTarget
        ? r.TEXTURE_3D
        : I.isWebGLArrayRenderTarget || I.isCompressedArrayTexture
          ? r.TEXTURE_2D_ARRAY
          : r.TEXTURE_2D;
  }
  function U(I, b, $, re, pe = !1) {
    if (I !== null) {
      if (r[I] !== void 0) return r[I];
      console.warn(
        "THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" +
          I +
          "'",
      );
    }
    let oe = b;
    if (
      (b === r.RED &&
        ($ === r.FLOAT && (oe = r.R32F),
        $ === r.HALF_FLOAT && (oe = r.R16F),
        $ === r.UNSIGNED_BYTE && (oe = r.R8)),
      b === r.RED_INTEGER &&
        ($ === r.UNSIGNED_BYTE && (oe = r.R8UI),
        $ === r.UNSIGNED_SHORT && (oe = r.R16UI),
        $ === r.UNSIGNED_INT && (oe = r.R32UI),
        $ === r.BYTE && (oe = r.R8I),
        $ === r.SHORT && (oe = r.R16I),
        $ === r.INT && (oe = r.R32I)),
      b === r.RG &&
        ($ === r.FLOAT && (oe = r.RG32F),
        $ === r.HALF_FLOAT && (oe = r.RG16F),
        $ === r.UNSIGNED_BYTE && (oe = r.RG8)),
      b === r.RG_INTEGER &&
        ($ === r.UNSIGNED_BYTE && (oe = r.RG8UI),
        $ === r.UNSIGNED_SHORT && (oe = r.RG16UI),
        $ === r.UNSIGNED_INT && (oe = r.RG32UI),
        $ === r.BYTE && (oe = r.RG8I),
        $ === r.SHORT && (oe = r.RG16I),
        $ === r.INT && (oe = r.RG32I)),
      b === r.RGB_INTEGER &&
        ($ === r.UNSIGNED_BYTE && (oe = r.RGB8UI),
        $ === r.UNSIGNED_SHORT && (oe = r.RGB16UI),
        $ === r.UNSIGNED_INT && (oe = r.RGB32UI),
        $ === r.BYTE && (oe = r.RGB8I),
        $ === r.SHORT && (oe = r.RGB16I),
        $ === r.INT && (oe = r.RGB32I)),
      b === r.RGBA_INTEGER &&
        ($ === r.UNSIGNED_BYTE && (oe = r.RGBA8UI),
        $ === r.UNSIGNED_SHORT && (oe = r.RGBA16UI),
        $ === r.UNSIGNED_INT && (oe = r.RGBA32UI),
        $ === r.BYTE && (oe = r.RGBA8I),
        $ === r.SHORT && (oe = r.RGBA16I),
        $ === r.INT && (oe = r.RGBA32I)),
      b === r.RGB &&
        ($ === r.UNSIGNED_INT_5_9_9_9_REV && (oe = r.RGB9_E5),
        $ === r.UNSIGNED_INT_10F_11F_11F_REV && (oe = r.R11F_G11F_B10F)),
      b === r.RGBA)
    ) {
      const Ve = pe ? As : gt.getTransfer(re);
      ($ === r.FLOAT && (oe = r.RGBA32F),
        $ === r.HALF_FLOAT && (oe = r.RGBA16F),
        $ === r.UNSIGNED_BYTE && (oe = Ve === wt ? r.SRGB8_ALPHA8 : r.RGBA8),
        $ === r.UNSIGNED_SHORT_4_4_4_4 && (oe = r.RGBA4),
        $ === r.UNSIGNED_SHORT_5_5_5_1 && (oe = r.RGB5_A1));
    }
    return (
      (oe === r.R16F ||
        oe === r.R32F ||
        oe === r.RG16F ||
        oe === r.RG32F ||
        oe === r.RGBA16F ||
        oe === r.RGBA32F) &&
        e.get("EXT_color_buffer_float"),
      oe
    );
  }
  function L(I, b) {
    let $;
    return (
      I
        ? b === null || b === Ri || b === Sr
          ? ($ = r.DEPTH24_STENCIL8)
          : b === jn
            ? ($ = r.DEPTH32F_STENCIL8)
            : b === Er &&
              (($ = r.DEPTH24_STENCIL8),
              console.warn(
                "DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.",
              ))
        : b === null || b === Ri || b === Sr
          ? ($ = r.DEPTH_COMPONENT24)
          : b === jn
            ? ($ = r.DEPTH_COMPONENT32F)
            : b === Er && ($ = r.DEPTH_COMPONENT16),
      $
    );
  }
  function k(I, b) {
    return E(I) === !0 ||
      (I.isFramebufferTexture && I.minFilter !== wn && I.minFilter !== Dn)
      ? Math.log2(Math.max(b.width, b.height)) + 1
      : I.mipmaps !== void 0 && I.mipmaps.length > 0
        ? I.mipmaps.length
        : I.isCompressedTexture && Array.isArray(I.image)
          ? b.mipmaps.length
          : 1;
  }
  function P(I) {
    const b = I.target;
    (b.removeEventListener("dispose", P),
      q(b),
      b.isVideoTexture && v.delete(b));
  }
  function H(I) {
    const b = I.target;
    (b.removeEventListener("dispose", H), M(b));
  }
  function q(I) {
    const b = n.get(I);
    if (b.__webglInit === void 0) return;
    const $ = I.source,
      re = x.get($);
    if (re) {
      const pe = re[b.__cacheKey];
      (pe.usedTimes--,
        pe.usedTimes === 0 && C(I),
        Object.keys(re).length === 0 && x.delete($));
    }
    n.remove(I);
  }
  function C(I) {
    const b = n.get(I);
    r.deleteTexture(b.__webglTexture);
    const $ = I.source,
      re = x.get($);
    (delete re[b.__cacheKey], u.memory.textures--);
  }
  function M(I) {
    const b = n.get(I);
    if (
      (I.depthTexture && (I.depthTexture.dispose(), n.remove(I.depthTexture)),
      I.isWebGLCubeRenderTarget)
    )
      for (let re = 0; re < 6; re++) {
        if (Array.isArray(b.__webglFramebuffer[re]))
          for (let pe = 0; pe < b.__webglFramebuffer[re].length; pe++)
            r.deleteFramebuffer(b.__webglFramebuffer[re][pe]);
        else r.deleteFramebuffer(b.__webglFramebuffer[re]);
        b.__webglDepthbuffer && r.deleteRenderbuffer(b.__webglDepthbuffer[re]);
      }
    else {
      if (Array.isArray(b.__webglFramebuffer))
        for (let re = 0; re < b.__webglFramebuffer.length; re++)
          r.deleteFramebuffer(b.__webglFramebuffer[re]);
      else r.deleteFramebuffer(b.__webglFramebuffer);
      if (
        (b.__webglDepthbuffer && r.deleteRenderbuffer(b.__webglDepthbuffer),
        b.__webglMultisampledFramebuffer &&
          r.deleteFramebuffer(b.__webglMultisampledFramebuffer),
        b.__webglColorRenderbuffer)
      )
        for (let re = 0; re < b.__webglColorRenderbuffer.length; re++)
          b.__webglColorRenderbuffer[re] &&
            r.deleteRenderbuffer(b.__webglColorRenderbuffer[re]);
      b.__webglDepthRenderbuffer &&
        r.deleteRenderbuffer(b.__webglDepthRenderbuffer);
    }
    const $ = I.textures;
    for (let re = 0, pe = $.length; re < pe; re++) {
      const oe = n.get($[re]);
      (oe.__webglTexture &&
        (r.deleteTexture(oe.__webglTexture), u.memory.textures--),
        n.remove($[re]));
    }
    n.remove(I);
  }
  let z = 0;
  function Y() {
    z = 0;
  }
  function te() {
    const I = z;
    return (
      I >= a.maxTextures &&
        console.warn(
          "THREE.WebGLTextures: Trying to use " +
            I +
            " texture units while this GPU supports only " +
            a.maxTextures,
        ),
      (z += 1),
      I
    );
  }
  function J(I) {
    const b = [];
    return (
      b.push(I.wrapS),
      b.push(I.wrapT),
      b.push(I.wrapR || 0),
      b.push(I.magFilter),
      b.push(I.minFilter),
      b.push(I.anisotropy),
      b.push(I.internalFormat),
      b.push(I.format),
      b.push(I.type),
      b.push(I.generateMipmaps),
      b.push(I.premultiplyAlpha),
      b.push(I.flipY),
      b.push(I.unpackAlignment),
      b.push(I.colorSpace),
      b.join()
    );
  }
  function he(I, b) {
    const $ = n.get(I);
    if (
      (I.isVideoTexture && Ze(I),
      I.isRenderTargetTexture === !1 &&
        I.isExternalTexture !== !0 &&
        I.version > 0 &&
        $.__version !== I.version)
    ) {
      const re = I.image;
      if (re === null)
        console.warn(
          "THREE.WebGLRenderer: Texture marked for update but no image data found.",
        );
      else if (re.complete === !1)
        console.warn(
          "THREE.WebGLRenderer: Texture marked for update but image is incomplete",
        );
      else {
        se($, I, b);
        return;
      }
    } else
      I.isExternalTexture &&
        ($.__webglTexture = I.sourceTexture ? I.sourceTexture : null);
    t.bindTexture(r.TEXTURE_2D, $.__webglTexture, r.TEXTURE0 + b);
  }
  function ae(I, b) {
    const $ = n.get(I);
    if (
      I.isRenderTargetTexture === !1 &&
      I.version > 0 &&
      $.__version !== I.version
    ) {
      se($, I, b);
      return;
    }
    t.bindTexture(r.TEXTURE_2D_ARRAY, $.__webglTexture, r.TEXTURE0 + b);
  }
  function ie(I, b) {
    const $ = n.get(I);
    if (
      I.isRenderTargetTexture === !1 &&
      I.version > 0 &&
      $.__version !== I.version
    ) {
      se($, I, b);
      return;
    }
    t.bindTexture(r.TEXTURE_3D, $.__webglTexture, r.TEXTURE0 + b);
  }
  function Q(I, b) {
    const $ = n.get(I);
    if (I.version > 0 && $.__version !== I.version) {
      de($, I, b);
      return;
    }
    t.bindTexture(r.TEXTURE_CUBE_MAP, $.__webglTexture, r.TEXTURE0 + b);
  }
  const Ee = { [Ga]: r.REPEAT, [bi]: r.CLAMP_TO_EDGE, [Wa]: r.MIRRORED_REPEAT },
    we = {
      [wn]: r.NEAREST,
      [Gm]: r.NEAREST_MIPMAP_NEAREST,
      [Jr]: r.NEAREST_MIPMAP_LINEAR,
      [Dn]: r.LINEAR,
      [Js]: r.LINEAR_MIPMAP_NEAREST,
      [Ai]: r.LINEAR_MIPMAP_LINEAR,
    },
    Re = {
      [jm]: r.NEVER,
      [Qm]: r.ALWAYS,
      [qm]: r.LESS,
      [Hc]: r.LEQUAL,
      [Ym]: r.EQUAL,
      [Jm]: r.GEQUAL,
      [Km]: r.GREATER,
      [Zm]: r.NOTEQUAL,
    };
  function We(I, b) {
    if (
      (b.type === jn &&
        e.has("OES_texture_float_linear") === !1 &&
        (b.magFilter === Dn ||
          b.magFilter === Js ||
          b.magFilter === Jr ||
          b.magFilter === Ai ||
          b.minFilter === Dn ||
          b.minFilter === Js ||
          b.minFilter === Jr ||
          b.minFilter === Ai) &&
        console.warn(
          "THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.",
        ),
      r.texParameteri(I, r.TEXTURE_WRAP_S, Ee[b.wrapS]),
      r.texParameteri(I, r.TEXTURE_WRAP_T, Ee[b.wrapT]),
      (I === r.TEXTURE_3D || I === r.TEXTURE_2D_ARRAY) &&
        r.texParameteri(I, r.TEXTURE_WRAP_R, Ee[b.wrapR]),
      r.texParameteri(I, r.TEXTURE_MAG_FILTER, we[b.magFilter]),
      r.texParameteri(I, r.TEXTURE_MIN_FILTER, we[b.minFilter]),
      b.compareFunction &&
        (r.texParameteri(I, r.TEXTURE_COMPARE_MODE, r.COMPARE_REF_TO_TEXTURE),
        r.texParameteri(I, r.TEXTURE_COMPARE_FUNC, Re[b.compareFunction])),
      e.has("EXT_texture_filter_anisotropic") === !0)
    ) {
      if (
        b.magFilter === wn ||
        (b.minFilter !== Jr && b.minFilter !== Ai) ||
        (b.type === jn && e.has("OES_texture_float_linear") === !1)
      )
        return;
      if (b.anisotropy > 1 || n.get(b).__currentAnisotropy) {
        const $ = e.get("EXT_texture_filter_anisotropic");
        (r.texParameterf(
          I,
          $.TEXTURE_MAX_ANISOTROPY_EXT,
          Math.min(b.anisotropy, a.getMaxAnisotropy()),
        ),
          (n.get(b).__currentAnisotropy = b.anisotropy));
      }
    }
  }
  function Ke(I, b) {
    let $ = !1;
    I.__webglInit === void 0 &&
      ((I.__webglInit = !0), b.addEventListener("dispose", P));
    const re = b.source;
    let pe = x.get(re);
    pe === void 0 && ((pe = {}), x.set(re, pe));
    const oe = J(b);
    if (oe !== I.__cacheKey) {
      (pe[oe] === void 0 &&
        ((pe[oe] = { texture: r.createTexture(), usedTimes: 0 }),
        u.memory.textures++,
        ($ = !0)),
        pe[oe].usedTimes++);
      const Ve = pe[I.__cacheKey];
      (Ve !== void 0 &&
        (pe[I.__cacheKey].usedTimes--, Ve.usedTimes === 0 && C(b)),
        (I.__cacheKey = oe),
        (I.__webglTexture = pe[oe].texture));
    }
    return $;
  }
  function tt(I, b, $) {
    return Math.floor(Math.floor(I / $) / b);
  }
  function Qe(I, b, $, re) {
    const oe = I.updateRanges;
    if (oe.length === 0)
      t.texSubImage2D(r.TEXTURE_2D, 0, 0, 0, b.width, b.height, $, re, b.data);
    else {
      oe.sort((Se, De) => Se.start - De.start);
      let Ve = 0;
      for (let Se = 1; Se < oe.length; Se++) {
        const De = oe[Ve],
          je = oe[Se],
          Be = De.start + De.count,
          Ae = tt(je.start, b.width, 4),
          nt = tt(De.start, b.width, 4);
        je.start <= Be + 1 &&
        Ae === nt &&
        tt(je.start + je.count - 1, b.width, 4) === Ae
          ? (De.count = Math.max(De.count, je.start + je.count - De.start))
          : (++Ve, (oe[Ve] = je));
      }
      oe.length = Ve + 1;
      const Te = r.getParameter(r.UNPACK_ROW_LENGTH),
        ke = r.getParameter(r.UNPACK_SKIP_PIXELS),
        ze = r.getParameter(r.UNPACK_SKIP_ROWS);
      r.pixelStorei(r.UNPACK_ROW_LENGTH, b.width);
      for (let Se = 0, De = oe.length; Se < De; Se++) {
        const je = oe[Se],
          Be = Math.floor(je.start / 4),
          Ae = Math.ceil(je.count / 4),
          nt = Be % b.width,
          V = Math.floor(Be / b.width),
          ye = Ae,
          be = 1;
        (r.pixelStorei(r.UNPACK_SKIP_PIXELS, nt),
          r.pixelStorei(r.UNPACK_SKIP_ROWS, V),
          t.texSubImage2D(r.TEXTURE_2D, 0, nt, V, ye, be, $, re, b.data));
      }
      (I.clearUpdateRanges(),
        r.pixelStorei(r.UNPACK_ROW_LENGTH, Te),
        r.pixelStorei(r.UNPACK_SKIP_PIXELS, ke),
        r.pixelStorei(r.UNPACK_SKIP_ROWS, ze));
    }
  }
  function se(I, b, $) {
    let re = r.TEXTURE_2D;
    ((b.isDataArrayTexture || b.isCompressedArrayTexture) &&
      (re = r.TEXTURE_2D_ARRAY),
      b.isData3DTexture && (re = r.TEXTURE_3D));
    const pe = Ke(I, b),
      oe = b.source;
    t.bindTexture(re, I.__webglTexture, r.TEXTURE0 + $);
    const Ve = n.get(oe);
    if (oe.version !== Ve.__version || pe === !0) {
      t.activeTexture(r.TEXTURE0 + $);
      const Te = gt.getPrimaries(gt.workingColorSpace),
        ke = b.colorSpace === ri ? null : gt.getPrimaries(b.colorSpace),
        ze =
          b.colorSpace === ri || Te === ke ? r.NONE : r.BROWSER_DEFAULT_WEBGL;
      (r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL, b.flipY),
        r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL, b.premultiplyAlpha),
        r.pixelStorei(r.UNPACK_ALIGNMENT, b.unpackAlignment),
        r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL, ze));
      let Se = D(b.image, !1, a.maxTextureSize);
      Se = Pt(b, Se);
      const De = o.convert(b.format, b.colorSpace),
        je = o.convert(b.type);
      let Be = U(b.internalFormat, De, je, b.colorSpace, b.isVideoTexture);
      We(re, b);
      let Ae;
      const nt = b.mipmaps,
        V = b.isVideoTexture !== !0,
        ye = Ve.__version === void 0 || pe === !0,
        be = oe.dataReady,
        Le = k(b, Se);
      if (b.isDepthTexture)
        ((Be = L(b.format === Mr, b.type)),
          ye &&
            (V
              ? t.texStorage2D(r.TEXTURE_2D, 1, Be, Se.width, Se.height)
              : t.texImage2D(
                  r.TEXTURE_2D,
                  0,
                  Be,
                  Se.width,
                  Se.height,
                  0,
                  De,
                  je,
                  null,
                )));
      else if (b.isDataTexture)
        if (nt.length > 0) {
          V &&
            ye &&
            t.texStorage2D(r.TEXTURE_2D, Le, Be, nt[0].width, nt[0].height);
          for (let G = 0, B = nt.length; G < B; G++)
            ((Ae = nt[G]),
              V
                ? be &&
                  t.texSubImage2D(
                    r.TEXTURE_2D,
                    G,
                    0,
                    0,
                    Ae.width,
                    Ae.height,
                    De,
                    je,
                    Ae.data,
                  )
                : t.texImage2D(
                    r.TEXTURE_2D,
                    G,
                    Be,
                    Ae.width,
                    Ae.height,
                    0,
                    De,
                    je,
                    Ae.data,
                  ));
          b.generateMipmaps = !1;
        } else
          V
            ? (ye && t.texStorage2D(r.TEXTURE_2D, Le, Be, Se.width, Se.height),
              be && Qe(b, Se, De, je))
            : t.texImage2D(
                r.TEXTURE_2D,
                0,
                Be,
                Se.width,
                Se.height,
                0,
                De,
                je,
                Se.data,
              );
      else if (b.isCompressedTexture)
        if (b.isCompressedArrayTexture) {
          V &&
            ye &&
            t.texStorage3D(
              r.TEXTURE_2D_ARRAY,
              Le,
              Be,
              nt[0].width,
              nt[0].height,
              Se.depth,
            );
          for (let G = 0, B = nt.length; G < B; G++)
            if (((Ae = nt[G]), b.format !== Tn))
              if (De !== null)
                if (V) {
                  if (be)
                    if (b.layerUpdates.size > 0) {
                      const Fe = Zl(Ae.width, Ae.height, b.format, b.type);
                      for (const Je of b.layerUpdates) {
                        const mt = Ae.data.subarray(
                          (Je * Fe) / Ae.data.BYTES_PER_ELEMENT,
                          ((Je + 1) * Fe) / Ae.data.BYTES_PER_ELEMENT,
                        );
                        t.compressedTexSubImage3D(
                          r.TEXTURE_2D_ARRAY,
                          G,
                          0,
                          0,
                          Je,
                          Ae.width,
                          Ae.height,
                          1,
                          De,
                          mt,
                        );
                      }
                      b.clearLayerUpdates();
                    } else
                      t.compressedTexSubImage3D(
                        r.TEXTURE_2D_ARRAY,
                        G,
                        0,
                        0,
                        0,
                        Ae.width,
                        Ae.height,
                        Se.depth,
                        De,
                        Ae.data,
                      );
                } else
                  t.compressedTexImage3D(
                    r.TEXTURE_2D_ARRAY,
                    G,
                    Be,
                    Ae.width,
                    Ae.height,
                    Se.depth,
                    0,
                    Ae.data,
                    0,
                    0,
                  );
              else
                console.warn(
                  "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()",
                );
            else
              V
                ? be &&
                  t.texSubImage3D(
                    r.TEXTURE_2D_ARRAY,
                    G,
                    0,
                    0,
                    0,
                    Ae.width,
                    Ae.height,
                    Se.depth,
                    De,
                    je,
                    Ae.data,
                  )
                : t.texImage3D(
                    r.TEXTURE_2D_ARRAY,
                    G,
                    Be,
                    Ae.width,
                    Ae.height,
                    Se.depth,
                    0,
                    De,
                    je,
                    Ae.data,
                  );
        } else {
          V &&
            ye &&
            t.texStorage2D(r.TEXTURE_2D, Le, Be, nt[0].width, nt[0].height);
          for (let G = 0, B = nt.length; G < B; G++)
            ((Ae = nt[G]),
              b.format !== Tn
                ? De !== null
                  ? V
                    ? be &&
                      t.compressedTexSubImage2D(
                        r.TEXTURE_2D,
                        G,
                        0,
                        0,
                        Ae.width,
                        Ae.height,
                        De,
                        Ae.data,
                      )
                    : t.compressedTexImage2D(
                        r.TEXTURE_2D,
                        G,
                        Be,
                        Ae.width,
                        Ae.height,
                        0,
                        Ae.data,
                      )
                  : console.warn(
                      "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()",
                    )
                : V
                  ? be &&
                    t.texSubImage2D(
                      r.TEXTURE_2D,
                      G,
                      0,
                      0,
                      Ae.width,
                      Ae.height,
                      De,
                      je,
                      Ae.data,
                    )
                  : t.texImage2D(
                      r.TEXTURE_2D,
                      G,
                      Be,
                      Ae.width,
                      Ae.height,
                      0,
                      De,
                      je,
                      Ae.data,
                    ));
        }
      else if (b.isDataArrayTexture)
        if (V) {
          if (
            (ye &&
              t.texStorage3D(
                r.TEXTURE_2D_ARRAY,
                Le,
                Be,
                Se.width,
                Se.height,
                Se.depth,
              ),
            be)
          )
            if (b.layerUpdates.size > 0) {
              const G = Zl(Se.width, Se.height, b.format, b.type);
              for (const B of b.layerUpdates) {
                const Fe = Se.data.subarray(
                  (B * G) / Se.data.BYTES_PER_ELEMENT,
                  ((B + 1) * G) / Se.data.BYTES_PER_ELEMENT,
                );
                t.texSubImage3D(
                  r.TEXTURE_2D_ARRAY,
                  0,
                  0,
                  0,
                  B,
                  Se.width,
                  Se.height,
                  1,
                  De,
                  je,
                  Fe,
                );
              }
              b.clearLayerUpdates();
            } else
              t.texSubImage3D(
                r.TEXTURE_2D_ARRAY,
                0,
                0,
                0,
                0,
                Se.width,
                Se.height,
                Se.depth,
                De,
                je,
                Se.data,
              );
        } else
          t.texImage3D(
            r.TEXTURE_2D_ARRAY,
            0,
            Be,
            Se.width,
            Se.height,
            Se.depth,
            0,
            De,
            je,
            Se.data,
          );
      else if (b.isData3DTexture)
        V
          ? (ye &&
              t.texStorage3D(
                r.TEXTURE_3D,
                Le,
                Be,
                Se.width,
                Se.height,
                Se.depth,
              ),
            be &&
              t.texSubImage3D(
                r.TEXTURE_3D,
                0,
                0,
                0,
                0,
                Se.width,
                Se.height,
                Se.depth,
                De,
                je,
                Se.data,
              ))
          : t.texImage3D(
              r.TEXTURE_3D,
              0,
              Be,
              Se.width,
              Se.height,
              Se.depth,
              0,
              De,
              je,
              Se.data,
            );
      else if (b.isFramebufferTexture) {
        if (ye)
          if (V) t.texStorage2D(r.TEXTURE_2D, Le, Be, Se.width, Se.height);
          else {
            let G = Se.width,
              B = Se.height;
            for (let Fe = 0; Fe < Le; Fe++)
              (t.texImage2D(r.TEXTURE_2D, Fe, Be, G, B, 0, De, je, null),
                (G >>= 1),
                (B >>= 1));
          }
      } else if (nt.length > 0) {
        if (V && ye) {
          const G = St(nt[0]);
          t.texStorage2D(r.TEXTURE_2D, Le, Be, G.width, G.height);
        }
        for (let G = 0, B = nt.length; G < B; G++)
          ((Ae = nt[G]),
            V
              ? be && t.texSubImage2D(r.TEXTURE_2D, G, 0, 0, De, je, Ae)
              : t.texImage2D(r.TEXTURE_2D, G, Be, De, je, Ae));
        b.generateMipmaps = !1;
      } else if (V) {
        if (ye) {
          const G = St(Se);
          t.texStorage2D(r.TEXTURE_2D, Le, Be, G.width, G.height);
        }
        be && t.texSubImage2D(r.TEXTURE_2D, 0, 0, 0, De, je, Se);
      } else t.texImage2D(r.TEXTURE_2D, 0, Be, De, je, Se);
      (E(b) && m(re), (Ve.__version = oe.version), b.onUpdate && b.onUpdate(b));
    }
    I.__version = b.version;
  }
  function de(I, b, $) {
    if (b.image.length !== 6) return;
    const re = Ke(I, b),
      pe = b.source;
    t.bindTexture(r.TEXTURE_CUBE_MAP, I.__webglTexture, r.TEXTURE0 + $);
    const oe = n.get(pe);
    if (pe.version !== oe.__version || re === !0) {
      t.activeTexture(r.TEXTURE0 + $);
      const Ve = gt.getPrimaries(gt.workingColorSpace),
        Te = b.colorSpace === ri ? null : gt.getPrimaries(b.colorSpace),
        ke =
          b.colorSpace === ri || Ve === Te ? r.NONE : r.BROWSER_DEFAULT_WEBGL;
      (r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL, b.flipY),
        r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL, b.premultiplyAlpha),
        r.pixelStorei(r.UNPACK_ALIGNMENT, b.unpackAlignment),
        r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL, ke));
      const ze = b.isCompressedTexture || b.image[0].isCompressedTexture,
        Se = b.image[0] && b.image[0].isDataTexture,
        De = [];
      for (let B = 0; B < 6; B++)
        (!ze && !Se
          ? (De[B] = D(b.image[B], !0, a.maxCubemapSize))
          : (De[B] = Se ? b.image[B].image : b.image[B]),
          (De[B] = Pt(b, De[B])));
      const je = De[0],
        Be = o.convert(b.format, b.colorSpace),
        Ae = o.convert(b.type),
        nt = U(b.internalFormat, Be, Ae, b.colorSpace),
        V = b.isVideoTexture !== !0,
        ye = oe.__version === void 0 || re === !0,
        be = pe.dataReady;
      let Le = k(b, je);
      We(r.TEXTURE_CUBE_MAP, b);
      let G;
      if (ze) {
        V &&
          ye &&
          t.texStorage2D(r.TEXTURE_CUBE_MAP, Le, nt, je.width, je.height);
        for (let B = 0; B < 6; B++) {
          G = De[B].mipmaps;
          for (let Fe = 0; Fe < G.length; Fe++) {
            const Je = G[Fe];
            b.format !== Tn
              ? Be !== null
                ? V
                  ? be &&
                    t.compressedTexSubImage2D(
                      r.TEXTURE_CUBE_MAP_POSITIVE_X + B,
                      Fe,
                      0,
                      0,
                      Je.width,
                      Je.height,
                      Be,
                      Je.data,
                    )
                  : t.compressedTexImage2D(
                      r.TEXTURE_CUBE_MAP_POSITIVE_X + B,
                      Fe,
                      nt,
                      Je.width,
                      Je.height,
                      0,
                      Je.data,
                    )
                : console.warn(
                    "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()",
                  )
              : V
                ? be &&
                  t.texSubImage2D(
                    r.TEXTURE_CUBE_MAP_POSITIVE_X + B,
                    Fe,
                    0,
                    0,
                    Je.width,
                    Je.height,
                    Be,
                    Ae,
                    Je.data,
                  )
                : t.texImage2D(
                    r.TEXTURE_CUBE_MAP_POSITIVE_X + B,
                    Fe,
                    nt,
                    Je.width,
                    Je.height,
                    0,
                    Be,
                    Ae,
                    Je.data,
                  );
          }
        }
      } else {
        if (((G = b.mipmaps), V && ye)) {
          G.length > 0 && Le++;
          const B = St(De[0]);
          t.texStorage2D(r.TEXTURE_CUBE_MAP, Le, nt, B.width, B.height);
        }
        for (let B = 0; B < 6; B++)
          if (Se) {
            V
              ? be &&
                t.texSubImage2D(
                  r.TEXTURE_CUBE_MAP_POSITIVE_X + B,
                  0,
                  0,
                  0,
                  De[B].width,
                  De[B].height,
                  Be,
                  Ae,
                  De[B].data,
                )
              : t.texImage2D(
                  r.TEXTURE_CUBE_MAP_POSITIVE_X + B,
                  0,
                  nt,
                  De[B].width,
                  De[B].height,
                  0,
                  Be,
                  Ae,
                  De[B].data,
                );
            for (let Fe = 0; Fe < G.length; Fe++) {
              const mt = G[Fe].image[B].image;
              V
                ? be &&
                  t.texSubImage2D(
                    r.TEXTURE_CUBE_MAP_POSITIVE_X + B,
                    Fe + 1,
                    0,
                    0,
                    mt.width,
                    mt.height,
                    Be,
                    Ae,
                    mt.data,
                  )
                : t.texImage2D(
                    r.TEXTURE_CUBE_MAP_POSITIVE_X + B,
                    Fe + 1,
                    nt,
                    mt.width,
                    mt.height,
                    0,
                    Be,
                    Ae,
                    mt.data,
                  );
            }
          } else {
            V
              ? be &&
                t.texSubImage2D(
                  r.TEXTURE_CUBE_MAP_POSITIVE_X + B,
                  0,
                  0,
                  0,
                  Be,
                  Ae,
                  De[B],
                )
              : t.texImage2D(
                  r.TEXTURE_CUBE_MAP_POSITIVE_X + B,
                  0,
                  nt,
                  Be,
                  Ae,
                  De[B],
                );
            for (let Fe = 0; Fe < G.length; Fe++) {
              const Je = G[Fe];
              V
                ? be &&
                  t.texSubImage2D(
                    r.TEXTURE_CUBE_MAP_POSITIVE_X + B,
                    Fe + 1,
                    0,
                    0,
                    Be,
                    Ae,
                    Je.image[B],
                  )
                : t.texImage2D(
                    r.TEXTURE_CUBE_MAP_POSITIVE_X + B,
                    Fe + 1,
                    nt,
                    Be,
                    Ae,
                    Je.image[B],
                  );
            }
          }
      }
      (E(b) && m(r.TEXTURE_CUBE_MAP),
        (oe.__version = pe.version),
        b.onUpdate && b.onUpdate(b));
    }
    I.__version = b.version;
  }
  function le(I, b, $, re, pe, oe) {
    const Ve = o.convert($.format, $.colorSpace),
      Te = o.convert($.type),
      ke = U($.internalFormat, Ve, Te, $.colorSpace),
      ze = n.get(b),
      Se = n.get($);
    if (((Se.__renderTarget = b), !ze.__hasExternalTextures)) {
      const De = Math.max(1, b.width >> oe),
        je = Math.max(1, b.height >> oe);
      pe === r.TEXTURE_3D || pe === r.TEXTURE_2D_ARRAY
        ? t.texImage3D(pe, oe, ke, De, je, b.depth, 0, Ve, Te, null)
        : t.texImage2D(pe, oe, ke, De, je, 0, Ve, Te, null);
    }
    (t.bindFramebuffer(r.FRAMEBUFFER, I),
      Ie(b)
        ? h.framebufferTexture2DMultisampleEXT(
            r.FRAMEBUFFER,
            re,
            pe,
            Se.__webglTexture,
            0,
            Rt(b),
          )
        : (pe === r.TEXTURE_2D ||
            (pe >= r.TEXTURE_CUBE_MAP_POSITIVE_X &&
              pe <= r.TEXTURE_CUBE_MAP_NEGATIVE_Z)) &&
          r.framebufferTexture2D(r.FRAMEBUFFER, re, pe, Se.__webglTexture, oe),
      t.bindFramebuffer(r.FRAMEBUFFER, null));
  }
  function Me(I, b, $) {
    if ((r.bindRenderbuffer(r.RENDERBUFFER, I), b.depthBuffer)) {
      const re = b.depthTexture,
        pe = re && re.isDepthTexture ? re.type : null,
        oe = L(b.stencilBuffer, pe),
        Ve = b.stencilBuffer ? r.DEPTH_STENCIL_ATTACHMENT : r.DEPTH_ATTACHMENT,
        Te = Rt(b);
      (Ie(b)
        ? h.renderbufferStorageMultisampleEXT(
            r.RENDERBUFFER,
            Te,
            oe,
            b.width,
            b.height,
          )
        : $
          ? r.renderbufferStorageMultisample(
              r.RENDERBUFFER,
              Te,
              oe,
              b.width,
              b.height,
            )
          : r.renderbufferStorage(r.RENDERBUFFER, oe, b.width, b.height),
        r.framebufferRenderbuffer(r.FRAMEBUFFER, Ve, r.RENDERBUFFER, I));
    } else {
      const re = b.textures;
      for (let pe = 0; pe < re.length; pe++) {
        const oe = re[pe],
          Ve = o.convert(oe.format, oe.colorSpace),
          Te = o.convert(oe.type),
          ke = U(oe.internalFormat, Ve, Te, oe.colorSpace),
          ze = Rt(b);
        $ && Ie(b) === !1
          ? r.renderbufferStorageMultisample(
              r.RENDERBUFFER,
              ze,
              ke,
              b.width,
              b.height,
            )
          : Ie(b)
            ? h.renderbufferStorageMultisampleEXT(
                r.RENDERBUFFER,
                ze,
                ke,
                b.width,
                b.height,
              )
            : r.renderbufferStorage(r.RENDERBUFFER, ke, b.width, b.height);
      }
    }
    r.bindRenderbuffer(r.RENDERBUFFER, null);
  }
  function He(I, b) {
    if (b && b.isWebGLCubeRenderTarget)
      throw new Error(
        "Depth Texture with cube render targets is not supported",
      );
    if (
      (t.bindFramebuffer(r.FRAMEBUFFER, I),
      !(b.depthTexture && b.depthTexture.isDepthTexture))
    )
      throw new Error(
        "renderTarget.depthTexture must be an instance of THREE.DepthTexture",
      );
    const re = n.get(b.depthTexture);
    ((re.__renderTarget = b),
      (!re.__webglTexture ||
        b.depthTexture.image.width !== b.width ||
        b.depthTexture.image.height !== b.height) &&
        ((b.depthTexture.image.width = b.width),
        (b.depthTexture.image.height = b.height),
        (b.depthTexture.needsUpdate = !0)),
      he(b.depthTexture, 0));
    const pe = re.__webglTexture,
      oe = Rt(b);
    if (b.depthTexture.format === yr)
      Ie(b)
        ? h.framebufferTexture2DMultisampleEXT(
            r.FRAMEBUFFER,
            r.DEPTH_ATTACHMENT,
            r.TEXTURE_2D,
            pe,
            0,
            oe,
          )
        : r.framebufferTexture2D(
            r.FRAMEBUFFER,
            r.DEPTH_ATTACHMENT,
            r.TEXTURE_2D,
            pe,
            0,
          );
    else if (b.depthTexture.format === Mr)
      Ie(b)
        ? h.framebufferTexture2DMultisampleEXT(
            r.FRAMEBUFFER,
            r.DEPTH_STENCIL_ATTACHMENT,
            r.TEXTURE_2D,
            pe,
            0,
            oe,
          )
        : r.framebufferTexture2D(
            r.FRAMEBUFFER,
            r.DEPTH_STENCIL_ATTACHMENT,
            r.TEXTURE_2D,
            pe,
            0,
          );
    else throw new Error("Unknown depthTexture format");
  }
  function lt(I) {
    const b = n.get(I),
      $ = I.isWebGLCubeRenderTarget === !0;
    if (b.__boundDepthTexture !== I.depthTexture) {
      const re = I.depthTexture;
      if ((b.__depthDisposeCallback && b.__depthDisposeCallback(), re)) {
        const pe = () => {
          (delete b.__boundDepthTexture,
            delete b.__depthDisposeCallback,
            re.removeEventListener("dispose", pe));
        };
        (re.addEventListener("dispose", pe), (b.__depthDisposeCallback = pe));
      }
      b.__boundDepthTexture = re;
    }
    if (I.depthTexture && !b.__autoAllocateDepthBuffer) {
      if ($)
        throw new Error(
          "target.depthTexture not supported in Cube render targets",
        );
      const re = I.texture.mipmaps;
      re && re.length > 0
        ? He(b.__webglFramebuffer[0], I)
        : He(b.__webglFramebuffer, I);
    } else if ($) {
      b.__webglDepthbuffer = [];
      for (let re = 0; re < 6; re++)
        if (
          (t.bindFramebuffer(r.FRAMEBUFFER, b.__webglFramebuffer[re]),
          b.__webglDepthbuffer[re] === void 0)
        )
          ((b.__webglDepthbuffer[re] = r.createRenderbuffer()),
            Me(b.__webglDepthbuffer[re], I, !1));
        else {
          const pe = I.stencilBuffer
              ? r.DEPTH_STENCIL_ATTACHMENT
              : r.DEPTH_ATTACHMENT,
            oe = b.__webglDepthbuffer[re];
          (r.bindRenderbuffer(r.RENDERBUFFER, oe),
            r.framebufferRenderbuffer(r.FRAMEBUFFER, pe, r.RENDERBUFFER, oe));
        }
    } else {
      const re = I.texture.mipmaps;
      if (
        (re && re.length > 0
          ? t.bindFramebuffer(r.FRAMEBUFFER, b.__webglFramebuffer[0])
          : t.bindFramebuffer(r.FRAMEBUFFER, b.__webglFramebuffer),
        b.__webglDepthbuffer === void 0)
      )
        ((b.__webglDepthbuffer = r.createRenderbuffer()),
          Me(b.__webglDepthbuffer, I, !1));
      else {
        const pe = I.stencilBuffer
            ? r.DEPTH_STENCIL_ATTACHMENT
            : r.DEPTH_ATTACHMENT,
          oe = b.__webglDepthbuffer;
        (r.bindRenderbuffer(r.RENDERBUFFER, oe),
          r.framebufferRenderbuffer(r.FRAMEBUFFER, pe, r.RENDERBUFFER, oe));
      }
    }
    t.bindFramebuffer(r.FRAMEBUFFER, null);
  }
  function At(I, b, $) {
    const re = n.get(I);
    (b !== void 0 &&
      le(
        re.__webglFramebuffer,
        I,
        I.texture,
        r.COLOR_ATTACHMENT0,
        r.TEXTURE_2D,
        0,
      ),
      $ !== void 0 && lt(I));
  }
  function O(I) {
    const b = I.texture,
      $ = n.get(I),
      re = n.get(b);
    I.addEventListener("dispose", H);
    const pe = I.textures,
      oe = I.isWebGLCubeRenderTarget === !0,
      Ve = pe.length > 1;
    if (
      (Ve ||
        (re.__webglTexture === void 0 &&
          (re.__webglTexture = r.createTexture()),
        (re.__version = b.version),
        u.memory.textures++),
      oe)
    ) {
      $.__webglFramebuffer = [];
      for (let Te = 0; Te < 6; Te++)
        if (b.mipmaps && b.mipmaps.length > 0) {
          $.__webglFramebuffer[Te] = [];
          for (let ke = 0; ke < b.mipmaps.length; ke++)
            $.__webglFramebuffer[Te][ke] = r.createFramebuffer();
        } else $.__webglFramebuffer[Te] = r.createFramebuffer();
    } else {
      if (b.mipmaps && b.mipmaps.length > 0) {
        $.__webglFramebuffer = [];
        for (let Te = 0; Te < b.mipmaps.length; Te++)
          $.__webglFramebuffer[Te] = r.createFramebuffer();
      } else $.__webglFramebuffer = r.createFramebuffer();
      if (Ve)
        for (let Te = 0, ke = pe.length; Te < ke; Te++) {
          const ze = n.get(pe[Te]);
          ze.__webglTexture === void 0 &&
            ((ze.__webglTexture = r.createTexture()), u.memory.textures++);
        }
      if (I.samples > 0 && Ie(I) === !1) {
        (($.__webglMultisampledFramebuffer = r.createFramebuffer()),
          ($.__webglColorRenderbuffer = []),
          t.bindFramebuffer(r.FRAMEBUFFER, $.__webglMultisampledFramebuffer));
        for (let Te = 0; Te < pe.length; Te++) {
          const ke = pe[Te];
          (($.__webglColorRenderbuffer[Te] = r.createRenderbuffer()),
            r.bindRenderbuffer(r.RENDERBUFFER, $.__webglColorRenderbuffer[Te]));
          const ze = o.convert(ke.format, ke.colorSpace),
            Se = o.convert(ke.type),
            De = U(
              ke.internalFormat,
              ze,
              Se,
              ke.colorSpace,
              I.isXRRenderTarget === !0,
            ),
            je = Rt(I);
          (r.renderbufferStorageMultisample(
            r.RENDERBUFFER,
            je,
            De,
            I.width,
            I.height,
          ),
            r.framebufferRenderbuffer(
              r.FRAMEBUFFER,
              r.COLOR_ATTACHMENT0 + Te,
              r.RENDERBUFFER,
              $.__webglColorRenderbuffer[Te],
            ));
        }
        (r.bindRenderbuffer(r.RENDERBUFFER, null),
          I.depthBuffer &&
            (($.__webglDepthRenderbuffer = r.createRenderbuffer()),
            Me($.__webglDepthRenderbuffer, I, !0)),
          t.bindFramebuffer(r.FRAMEBUFFER, null));
      }
    }
    if (oe) {
      (t.bindTexture(r.TEXTURE_CUBE_MAP, re.__webglTexture),
        We(r.TEXTURE_CUBE_MAP, b));
      for (let Te = 0; Te < 6; Te++)
        if (b.mipmaps && b.mipmaps.length > 0)
          for (let ke = 0; ke < b.mipmaps.length; ke++)
            le(
              $.__webglFramebuffer[Te][ke],
              I,
              b,
              r.COLOR_ATTACHMENT0,
              r.TEXTURE_CUBE_MAP_POSITIVE_X + Te,
              ke,
            );
        else
          le(
            $.__webglFramebuffer[Te],
            I,
            b,
            r.COLOR_ATTACHMENT0,
            r.TEXTURE_CUBE_MAP_POSITIVE_X + Te,
            0,
          );
      (E(b) && m(r.TEXTURE_CUBE_MAP), t.unbindTexture());
    } else if (Ve) {
      for (let Te = 0, ke = pe.length; Te < ke; Te++) {
        const ze = pe[Te],
          Se = n.get(ze);
        let De = r.TEXTURE_2D;
        ((I.isWebGL3DRenderTarget || I.isWebGLArrayRenderTarget) &&
          (De = I.isWebGL3DRenderTarget ? r.TEXTURE_3D : r.TEXTURE_2D_ARRAY),
          t.bindTexture(De, Se.__webglTexture),
          We(De, ze),
          le($.__webglFramebuffer, I, ze, r.COLOR_ATTACHMENT0 + Te, De, 0),
          E(ze) && m(De));
      }
      t.unbindTexture();
    } else {
      let Te = r.TEXTURE_2D;
      if (
        ((I.isWebGL3DRenderTarget || I.isWebGLArrayRenderTarget) &&
          (Te = I.isWebGL3DRenderTarget ? r.TEXTURE_3D : r.TEXTURE_2D_ARRAY),
        t.bindTexture(Te, re.__webglTexture),
        We(Te, b),
        b.mipmaps && b.mipmaps.length > 0)
      )
        for (let ke = 0; ke < b.mipmaps.length; ke++)
          le($.__webglFramebuffer[ke], I, b, r.COLOR_ATTACHMENT0, Te, ke);
      else le($.__webglFramebuffer, I, b, r.COLOR_ATTACHMENT0, Te, 0);
      (E(b) && m(Te), t.unbindTexture());
    }
    I.depthBuffer && lt(I);
  }
  function xt(I) {
    const b = I.textures;
    for (let $ = 0, re = b.length; $ < re; $++) {
      const pe = b[$];
      if (E(pe)) {
        const oe = N(I),
          Ve = n.get(pe).__webglTexture;
        (t.bindTexture(oe, Ve), m(oe), t.unbindTexture());
      }
    }
  }
  const et = [],
    Ye = [];
  function Oe(I) {
    if (I.samples > 0) {
      if (Ie(I) === !1) {
        const b = I.textures,
          $ = I.width,
          re = I.height;
        let pe = r.COLOR_BUFFER_BIT;
        const oe = I.stencilBuffer
            ? r.DEPTH_STENCIL_ATTACHMENT
            : r.DEPTH_ATTACHMENT,
          Ve = n.get(I),
          Te = b.length > 1;
        if (Te)
          for (let ze = 0; ze < b.length; ze++)
            (t.bindFramebuffer(
              r.FRAMEBUFFER,
              Ve.__webglMultisampledFramebuffer,
            ),
              r.framebufferRenderbuffer(
                r.FRAMEBUFFER,
                r.COLOR_ATTACHMENT0 + ze,
                r.RENDERBUFFER,
                null,
              ),
              t.bindFramebuffer(r.FRAMEBUFFER, Ve.__webglFramebuffer),
              r.framebufferTexture2D(
                r.DRAW_FRAMEBUFFER,
                r.COLOR_ATTACHMENT0 + ze,
                r.TEXTURE_2D,
                null,
                0,
              ));
        t.bindFramebuffer(
          r.READ_FRAMEBUFFER,
          Ve.__webglMultisampledFramebuffer,
        );
        const ke = I.texture.mipmaps;
        ke && ke.length > 0
          ? t.bindFramebuffer(r.DRAW_FRAMEBUFFER, Ve.__webglFramebuffer[0])
          : t.bindFramebuffer(r.DRAW_FRAMEBUFFER, Ve.__webglFramebuffer);
        for (let ze = 0; ze < b.length; ze++) {
          if (
            (I.resolveDepthBuffer &&
              (I.depthBuffer && (pe |= r.DEPTH_BUFFER_BIT),
              I.stencilBuffer &&
                I.resolveStencilBuffer &&
                (pe |= r.STENCIL_BUFFER_BIT)),
            Te)
          ) {
            r.framebufferRenderbuffer(
              r.READ_FRAMEBUFFER,
              r.COLOR_ATTACHMENT0,
              r.RENDERBUFFER,
              Ve.__webglColorRenderbuffer[ze],
            );
            const Se = n.get(b[ze]).__webglTexture;
            r.framebufferTexture2D(
              r.DRAW_FRAMEBUFFER,
              r.COLOR_ATTACHMENT0,
              r.TEXTURE_2D,
              Se,
              0,
            );
          }
          (r.blitFramebuffer(0, 0, $, re, 0, 0, $, re, pe, r.NEAREST),
            p === !0 &&
              ((et.length = 0),
              (Ye.length = 0),
              et.push(r.COLOR_ATTACHMENT0 + ze),
              I.depthBuffer &&
                I.resolveDepthBuffer === !1 &&
                (et.push(oe),
                Ye.push(oe),
                r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER, Ye)),
              r.invalidateFramebuffer(r.READ_FRAMEBUFFER, et)));
        }
        if (
          (t.bindFramebuffer(r.READ_FRAMEBUFFER, null),
          t.bindFramebuffer(r.DRAW_FRAMEBUFFER, null),
          Te)
        )
          for (let ze = 0; ze < b.length; ze++) {
            (t.bindFramebuffer(
              r.FRAMEBUFFER,
              Ve.__webglMultisampledFramebuffer,
            ),
              r.framebufferRenderbuffer(
                r.FRAMEBUFFER,
                r.COLOR_ATTACHMENT0 + ze,
                r.RENDERBUFFER,
                Ve.__webglColorRenderbuffer[ze],
              ));
            const Se = n.get(b[ze]).__webglTexture;
            (t.bindFramebuffer(r.FRAMEBUFFER, Ve.__webglFramebuffer),
              r.framebufferTexture2D(
                r.DRAW_FRAMEBUFFER,
                r.COLOR_ATTACHMENT0 + ze,
                r.TEXTURE_2D,
                Se,
                0,
              ));
          }
        t.bindFramebuffer(
          r.DRAW_FRAMEBUFFER,
          Ve.__webglMultisampledFramebuffer,
        );
      } else if (I.depthBuffer && I.resolveDepthBuffer === !1 && p) {
        const b = I.stencilBuffer
          ? r.DEPTH_STENCIL_ATTACHMENT
          : r.DEPTH_ATTACHMENT;
        r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER, [b]);
      }
    }
  }
  function Rt(I) {
    return Math.min(a.maxSamples, I.samples);
  }
  function Ie(I) {
    const b = n.get(I);
    return (
      I.samples > 0 &&
      e.has("WEBGL_multisampled_render_to_texture") === !0 &&
      b.__useRenderToTexture !== !1
    );
  }
  function Ze(I) {
    const b = u.render.frame;
    v.get(I) !== b && (v.set(I, b), I.update());
  }
  function Pt(I, b) {
    const $ = I.colorSpace,
      re = I.format,
      pe = I.type;
    return (
      I.isCompressedTexture === !0 ||
        I.isVideoTexture === !0 ||
        ($ !== ir &&
          $ !== ri &&
          (gt.getTransfer($) === wt
            ? (re !== Tn || pe !== In) &&
              console.warn(
                "THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.",
              )
            : console.error(
                "THREE.WebGLTextures: Unsupported texture color space:",
                $,
              ))),
      b
    );
  }
  function St(I) {
    return (
      typeof HTMLImageElement < "u" && I instanceof HTMLImageElement
        ? ((d.width = I.naturalWidth || I.width),
          (d.height = I.naturalHeight || I.height))
        : typeof VideoFrame < "u" && I instanceof VideoFrame
          ? ((d.width = I.displayWidth), (d.height = I.displayHeight))
          : ((d.width = I.width), (d.height = I.height)),
      d
    );
  }
  ((this.allocateTextureUnit = te),
    (this.resetTextureUnits = Y),
    (this.setTexture2D = he),
    (this.setTexture2DArray = ae),
    (this.setTexture3D = ie),
    (this.setTextureCube = Q),
    (this.rebindTextures = At),
    (this.setupRenderTarget = O),
    (this.updateRenderTargetMipmap = xt),
    (this.updateMultisampleRenderTarget = Oe),
    (this.setupDepthRenderbuffer = lt),
    (this.setupFrameBufferTexture = le),
    (this.useMultisampledRTT = Ie));
}
function vE(r, e) {
  function t(n, a = ri) {
    let o;
    const u = gt.getTransfer(a);
    if (n === In) return r.UNSIGNED_BYTE;
    if (n === To) return r.UNSIGNED_SHORT_4_4_4_4;
    if (n === wo) return r.UNSIGNED_SHORT_5_5_5_1;
    if (n === Ic) return r.UNSIGNED_INT_5_9_9_9_REV;
    if (n === Uc) return r.UNSIGNED_INT_10F_11F_11F_REV;
    if (n === Lc) return r.BYTE;
    if (n === Fc) return r.SHORT;
    if (n === Er) return r.UNSIGNED_SHORT;
    if (n === Mo) return r.INT;
    if (n === Ri) return r.UNSIGNED_INT;
    if (n === jn) return r.FLOAT;
    if (n === Ar) return r.HALF_FLOAT;
    if (n === Nc) return r.ALPHA;
    if (n === Oc) return r.RGB;
    if (n === Tn) return r.RGBA;
    if (n === yr) return r.DEPTH_COMPONENT;
    if (n === Mr) return r.DEPTH_STENCIL;
    if (n === kc) return r.RED;
    if (n === bo) return r.RED_INTEGER;
    if (n === Bc) return r.RG;
    if (n === Ao) return r.RG_INTEGER;
    if (n === Ro) return r.RGBA_INTEGER;
    if (n === Ss || n === ys || n === Ms || n === Ts)
      if (u === wt)
        if (((o = e.get("WEBGL_compressed_texture_s3tc_srgb")), o !== null)) {
          if (n === Ss) return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (n === ys) return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (n === Ms) return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (n === Ts) return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else return null;
      else if (((o = e.get("WEBGL_compressed_texture_s3tc")), o !== null)) {
        if (n === Ss) return o.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (n === ys) return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (n === Ms) return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (n === Ts) return o.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else return null;
    if (n === Xa || n === $a || n === ja || n === qa)
      if (((o = e.get("WEBGL_compressed_texture_pvrtc")), o !== null)) {
        if (n === Xa) return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (n === $a) return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (n === ja) return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (n === qa) return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else return null;
    if (n === Ya || n === Ka || n === Za)
      if (((o = e.get("WEBGL_compressed_texture_etc")), o !== null)) {
        if (n === Ya || n === Ka)
          return u === wt ? o.COMPRESSED_SRGB8_ETC2 : o.COMPRESSED_RGB8_ETC2;
        if (n === Za)
          return u === wt
            ? o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC
            : o.COMPRESSED_RGBA8_ETC2_EAC;
      } else return null;
    if (
      n === Ja ||
      n === Qa ||
      n === eo ||
      n === to ||
      n === no ||
      n === io ||
      n === ro ||
      n === so ||
      n === ao ||
      n === oo ||
      n === lo ||
      n === co ||
      n === uo ||
      n === ho
    )
      if (((o = e.get("WEBGL_compressed_texture_astc")), o !== null)) {
        if (n === Ja)
          return u === wt
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR
            : o.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (n === Qa)
          return u === wt
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR
            : o.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (n === eo)
          return u === wt
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR
            : o.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (n === to)
          return u === wt
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR
            : o.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (n === no)
          return u === wt
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR
            : o.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (n === io)
          return u === wt
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR
            : o.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (n === ro)
          return u === wt
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR
            : o.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (n === so)
          return u === wt
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR
            : o.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (n === ao)
          return u === wt
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR
            : o.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (n === oo)
          return u === wt
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR
            : o.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (n === lo)
          return u === wt
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR
            : o.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (n === co)
          return u === wt
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR
            : o.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (n === uo)
          return u === wt
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR
            : o.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (n === ho)
          return u === wt
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR
            : o.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else return null;
    if (n === fo || n === po || n === mo)
      if (((o = e.get("EXT_texture_compression_bptc")), o !== null)) {
        if (n === fo)
          return u === wt
            ? o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT
            : o.COMPRESSED_RGBA_BPTC_UNORM_EXT;
        if (n === po) return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
        if (n === mo) return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
      } else return null;
    if (n === _o || n === go || n === vo || n === xo)
      if (((o = e.get("EXT_texture_compression_rgtc")), o !== null)) {
        if (n === _o) return o.COMPRESSED_RED_RGTC1_EXT;
        if (n === go) return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;
        if (n === vo) return o.COMPRESSED_RED_GREEN_RGTC2_EXT;
        if (n === xo) return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
      } else return null;
    return n === Sr ? r.UNSIGNED_INT_24_8 : r[n] !== void 0 ? r[n] : null;
  }
  return { convert: t };
}
const xE = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`,
  EE = `
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;
class SE {
  constructor() {
    ((this.texture = null),
      (this.mesh = null),
      (this.depthNear = 0),
      (this.depthFar = 0));
  }
  init(e, t) {
    if (this.texture === null) {
      const n = new eu(e.texture);
      ((e.depthNear !== t.depthNear || e.depthFar !== t.depthFar) &&
        ((this.depthNear = e.depthNear), (this.depthFar = e.depthFar)),
        (this.texture = n));
    }
  }
  getMesh(e) {
    if (this.texture !== null && this.mesh === null) {
      const t = e.cameras[0].viewport,
        n = new li({
          vertexShader: xE,
          fragmentShader: EE,
          uniforms: {
            depthColor: { value: this.texture },
            depthWidth: { value: t.z },
            depthHeight: { value: t.w },
          },
        });
      this.mesh = new ln(new Di(20, 20), n);
    }
    return this.mesh;
  }
  reset() {
    ((this.texture = null), (this.mesh = null));
  }
  getDepthTexture() {
    return this.texture;
  }
}
class yE extends Li {
  constructor(e, t) {
    super();
    const n = this;
    let a = null,
      o = 1,
      u = null,
      h = "local-floor",
      p = 1,
      d = null,
      v = null,
      _ = null,
      x = null,
      y = null,
      R = null;
    const D = typeof XRWebGLBinding < "u",
      E = new SE(),
      m = {},
      N = t.getContextAttributes();
    let U = null,
      L = null;
    const k = [],
      P = [],
      H = new it();
    let q = null;
    const C = new mn();
    C.viewport = new It();
    const M = new mn();
    M.viewport = new It();
    const z = [C, M],
      Y = new V_();
    let te = null,
      J = null;
    ((this.cameraAutoUpdate = !0),
      (this.enabled = !1),
      (this.isPresenting = !1),
      (this.getController = function (se) {
        let de = k[se];
        return (
          de === void 0 && ((de = new Ea()), (k[se] = de)),
          de.getTargetRaySpace()
        );
      }),
      (this.getControllerGrip = function (se) {
        let de = k[se];
        return (
          de === void 0 && ((de = new Ea()), (k[se] = de)),
          de.getGripSpace()
        );
      }),
      (this.getHand = function (se) {
        let de = k[se];
        return (
          de === void 0 && ((de = new Ea()), (k[se] = de)),
          de.getHandSpace()
        );
      }));
    function he(se) {
      const de = P.indexOf(se.inputSource);
      if (de === -1) return;
      const le = k[de];
      le !== void 0 &&
        (le.update(se.inputSource, se.frame, d || u),
        le.dispatchEvent({ type: se.type, data: se.inputSource }));
    }
    function ae() {
      (a.removeEventListener("select", he),
        a.removeEventListener("selectstart", he),
        a.removeEventListener("selectend", he),
        a.removeEventListener("squeeze", he),
        a.removeEventListener("squeezestart", he),
        a.removeEventListener("squeezeend", he),
        a.removeEventListener("end", ae),
        a.removeEventListener("inputsourceschange", ie));
      for (let se = 0; se < k.length; se++) {
        const de = P[se];
        de !== null && ((P[se] = null), k[se].disconnect(de));
      }
      ((te = null), (J = null), E.reset());
      for (const se in m) delete m[se];
      (e.setRenderTarget(U),
        (y = null),
        (x = null),
        (_ = null),
        (a = null),
        (L = null),
        Qe.stop(),
        (n.isPresenting = !1),
        e.setPixelRatio(q),
        e.setSize(H.width, H.height, !1),
        n.dispatchEvent({ type: "sessionend" }));
    }
    ((this.setFramebufferScaleFactor = function (se) {
      ((o = se),
        n.isPresenting === !0 &&
          console.warn(
            "THREE.WebXRManager: Cannot change framebuffer scale while presenting.",
          ));
    }),
      (this.setReferenceSpaceType = function (se) {
        ((h = se),
          n.isPresenting === !0 &&
            console.warn(
              "THREE.WebXRManager: Cannot change reference space type while presenting.",
            ));
      }),
      (this.getReferenceSpace = function () {
        return d || u;
      }),
      (this.setReferenceSpace = function (se) {
        d = se;
      }),
      (this.getBaseLayer = function () {
        return x !== null ? x : y;
      }),
      (this.getBinding = function () {
        return (_ === null && D && (_ = new XRWebGLBinding(a, t)), _);
      }),
      (this.getFrame = function () {
        return R;
      }),
      (this.getSession = function () {
        return a;
      }),
      (this.setSession = async function (se) {
        if (((a = se), a !== null)) {
          if (
            ((U = e.getRenderTarget()),
            a.addEventListener("select", he),
            a.addEventListener("selectstart", he),
            a.addEventListener("selectend", he),
            a.addEventListener("squeeze", he),
            a.addEventListener("squeezestart", he),
            a.addEventListener("squeezeend", he),
            a.addEventListener("end", ae),
            a.addEventListener("inputsourceschange", ie),
            N.xrCompatible !== !0 && (await t.makeXRCompatible()),
            (q = e.getPixelRatio()),
            e.getSize(H),
            D && "createProjectionLayer" in XRWebGLBinding.prototype)
          ) {
            let le = null,
              Me = null,
              He = null;
            N.depth &&
              ((He = N.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24),
              (le = N.stencil ? Mr : yr),
              (Me = N.stencil ? Sr : Ri));
            const lt = {
              colorFormat: t.RGBA8,
              depthFormat: He,
              scaleFactor: o,
            };
            ((_ = this.getBinding()),
              (x = _.createProjectionLayer(lt)),
              a.updateRenderState({ layers: [x] }),
              e.setPixelRatio(1),
              e.setSize(x.textureWidth, x.textureHeight, !1),
              (L = new Pi(x.textureWidth, x.textureHeight, {
                format: Tn,
                type: In,
                depthTexture: new Qc(
                  x.textureWidth,
                  x.textureHeight,
                  Me,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  le,
                ),
                stencilBuffer: N.stencil,
                colorSpace: e.outputColorSpace,
                samples: N.antialias ? 4 : 0,
                resolveDepthBuffer: x.ignoreDepthValues === !1,
                resolveStencilBuffer: x.ignoreDepthValues === !1,
              })));
          } else {
            const le = {
              antialias: N.antialias,
              alpha: !0,
              depth: N.depth,
              stencil: N.stencil,
              framebufferScaleFactor: o,
            };
            ((y = new XRWebGLLayer(a, t, le)),
              a.updateRenderState({ baseLayer: y }),
              e.setPixelRatio(1),
              e.setSize(y.framebufferWidth, y.framebufferHeight, !1),
              (L = new Pi(y.framebufferWidth, y.framebufferHeight, {
                format: Tn,
                type: In,
                colorSpace: e.outputColorSpace,
                stencilBuffer: N.stencil,
                resolveDepthBuffer: y.ignoreDepthValues === !1,
                resolveStencilBuffer: y.ignoreDepthValues === !1,
              })));
          }
          ((L.isXRRenderTarget = !0),
            this.setFoveation(p),
            (d = null),
            (u = await a.requestReferenceSpace(h)),
            Qe.setContext(a),
            Qe.start(),
            (n.isPresenting = !0),
            n.dispatchEvent({ type: "sessionstart" }));
        }
      }),
      (this.getEnvironmentBlendMode = function () {
        if (a !== null) return a.environmentBlendMode;
      }),
      (this.getDepthTexture = function () {
        return E.getDepthTexture();
      }));
    function ie(se) {
      for (let de = 0; de < se.removed.length; de++) {
        const le = se.removed[de],
          Me = P.indexOf(le);
        Me >= 0 && ((P[Me] = null), k[Me].disconnect(le));
      }
      for (let de = 0; de < se.added.length; de++) {
        const le = se.added[de];
        let Me = P.indexOf(le);
        if (Me === -1) {
          for (let lt = 0; lt < k.length; lt++)
            if (lt >= P.length) {
              (P.push(le), (Me = lt));
              break;
            } else if (P[lt] === null) {
              ((P[lt] = le), (Me = lt));
              break;
            }
          if (Me === -1) break;
        }
        const He = k[Me];
        He && He.connect(le);
      }
    }
    const Q = new K(),
      Ee = new K();
    function we(se, de, le) {
      (Q.setFromMatrixPosition(de.matrixWorld),
        Ee.setFromMatrixPosition(le.matrixWorld));
      const Me = Q.distanceTo(Ee),
        He = de.projectionMatrix.elements,
        lt = le.projectionMatrix.elements,
        At = He[14] / (He[10] - 1),
        O = He[14] / (He[10] + 1),
        xt = (He[9] + 1) / He[5],
        et = (He[9] - 1) / He[5],
        Ye = (He[8] - 1) / He[0],
        Oe = (lt[8] + 1) / lt[0],
        Rt = At * Ye,
        Ie = At * Oe,
        Ze = Me / (-Ye + Oe),
        Pt = Ze * -Ye;
      if (
        (de.matrixWorld.decompose(se.position, se.quaternion, se.scale),
        se.translateX(Pt),
        se.translateZ(Ze),
        se.matrixWorld.compose(se.position, se.quaternion, se.scale),
        se.matrixWorldInverse.copy(se.matrixWorld).invert(),
        He[10] === -1)
      )
        (se.projectionMatrix.copy(de.projectionMatrix),
          se.projectionMatrixInverse.copy(de.projectionMatrixInverse));
      else {
        const St = At + Ze,
          I = O + Ze,
          b = Rt - Pt,
          $ = Ie + (Me - Pt),
          re = ((xt * O) / I) * St,
          pe = ((et * O) / I) * St;
        (se.projectionMatrix.makePerspective(b, $, re, pe, St, I),
          se.projectionMatrixInverse.copy(se.projectionMatrix).invert());
      }
    }
    function Re(se, de) {
      (de === null
        ? se.matrixWorld.copy(se.matrix)
        : se.matrixWorld.multiplyMatrices(de.matrixWorld, se.matrix),
        se.matrixWorldInverse.copy(se.matrixWorld).invert());
    }
    this.updateCamera = function (se) {
      if (a === null) return;
      let de = se.near,
        le = se.far;
      (E.texture !== null &&
        (E.depthNear > 0 && (de = E.depthNear),
        E.depthFar > 0 && (le = E.depthFar)),
        (Y.near = M.near = C.near = de),
        (Y.far = M.far = C.far = le),
        (te !== Y.near || J !== Y.far) &&
          (a.updateRenderState({ depthNear: Y.near, depthFar: Y.far }),
          (te = Y.near),
          (J = Y.far)),
        (Y.layers.mask = se.layers.mask | 6),
        (C.layers.mask = Y.layers.mask & 3),
        (M.layers.mask = Y.layers.mask & 5));
      const Me = se.parent,
        He = Y.cameras;
      Re(Y, Me);
      for (let lt = 0; lt < He.length; lt++) Re(He[lt], Me);
      (He.length === 2
        ? we(Y, C, M)
        : Y.projectionMatrix.copy(C.projectionMatrix),
        We(se, Y, Me));
    };
    function We(se, de, le) {
      (le === null
        ? se.matrix.copy(de.matrixWorld)
        : (se.matrix.copy(le.matrixWorld),
          se.matrix.invert(),
          se.matrix.multiply(de.matrixWorld)),
        se.matrix.decompose(se.position, se.quaternion, se.scale),
        se.updateMatrixWorld(!0),
        se.projectionMatrix.copy(de.projectionMatrix),
        se.projectionMatrixInverse.copy(de.projectionMatrixInverse),
        se.isPerspectiveCamera &&
          ((se.fov = Eo * 2 * Math.atan(1 / se.projectionMatrix.elements[5])),
          (se.zoom = 1)));
    }
    ((this.getCamera = function () {
      return Y;
    }),
      (this.getFoveation = function () {
        if (!(x === null && y === null)) return p;
      }),
      (this.setFoveation = function (se) {
        ((p = se),
          x !== null && (x.fixedFoveation = se),
          y !== null && y.fixedFoveation !== void 0 && (y.fixedFoveation = se));
      }),
      (this.hasDepthSensing = function () {
        return E.texture !== null;
      }),
      (this.getDepthSensingMesh = function () {
        return E.getMesh(Y);
      }),
      (this.getCameraTexture = function (se) {
        return m[se];
      }));
    let Ke = null;
    function tt(se, de) {
      if (((v = de.getViewerPose(d || u)), (R = de), v !== null)) {
        const le = v.views;
        y !== null &&
          (e.setRenderTargetFramebuffer(L, y.framebuffer),
          e.setRenderTarget(L));
        let Me = !1;
        le.length !== Y.cameras.length && ((Y.cameras.length = 0), (Me = !0));
        for (let O = 0; O < le.length; O++) {
          const xt = le[O];
          let et = null;
          if (y !== null) et = y.getViewport(xt);
          else {
            const Oe = _.getViewSubImage(x, xt);
            ((et = Oe.viewport),
              O === 0 &&
                (e.setRenderTargetTextures(
                  L,
                  Oe.colorTexture,
                  Oe.depthStencilTexture,
                ),
                e.setRenderTarget(L)));
          }
          let Ye = z[O];
          (Ye === void 0 &&
            ((Ye = new mn()),
            Ye.layers.enable(O),
            (Ye.viewport = new It()),
            (z[O] = Ye)),
            Ye.matrix.fromArray(xt.transform.matrix),
            Ye.matrix.decompose(Ye.position, Ye.quaternion, Ye.scale),
            Ye.projectionMatrix.fromArray(xt.projectionMatrix),
            Ye.projectionMatrixInverse.copy(Ye.projectionMatrix).invert(),
            Ye.viewport.set(et.x, et.y, et.width, et.height),
            O === 0 &&
              (Y.matrix.copy(Ye.matrix),
              Y.matrix.decompose(Y.position, Y.quaternion, Y.scale)),
            Me === !0 && Y.cameras.push(Ye));
        }
        const He = a.enabledFeatures;
        if (
          He &&
          He.includes("depth-sensing") &&
          a.depthUsage == "gpu-optimized" &&
          D
        ) {
          _ = n.getBinding();
          const O = _.getDepthInformation(le[0]);
          O && O.isValid && O.texture && E.init(O, a.renderState);
        }
        if (He && He.includes("camera-access") && D) {
          (e.state.unbindTexture(), (_ = n.getBinding()));
          for (let O = 0; O < le.length; O++) {
            const xt = le[O].camera;
            if (xt) {
              let et = m[xt];
              et || ((et = new eu()), (m[xt] = et));
              const Ye = _.getCameraImage(xt);
              et.sourceTexture = Ye;
            }
          }
        }
      }
      for (let le = 0; le < k.length; le++) {
        const Me = P[le],
          He = k[le];
        Me !== null && He !== void 0 && He.update(Me, de, d || u);
      }
      (Ke && Ke(se, de),
        de.detectedPlanes &&
          n.dispatchEvent({ type: "planesdetected", data: de }),
        (R = null));
    }
    const Qe = new iu();
    (Qe.setAnimationLoop(tt),
      (this.setAnimationLoop = function (se) {
        Ke = se;
      }),
      (this.dispose = function () {}));
  }
}
const yi = new Un(),
  ME = new Ut();
function TE(r, e) {
  function t(E, m) {
    (E.matrixAutoUpdate === !0 && E.updateMatrix(), m.value.copy(E.matrix));
  }
  function n(E, m) {
    (m.color.getRGB(E.fogColor.value, Kc(r)),
      m.isFog
        ? ((E.fogNear.value = m.near), (E.fogFar.value = m.far))
        : m.isFogExp2 && (E.fogDensity.value = m.density));
  }
  function a(E, m, N, U, L) {
    m.isMeshBasicMaterial || m.isMeshLambertMaterial
      ? o(E, m)
      : m.isMeshToonMaterial
        ? (o(E, m), _(E, m))
        : m.isMeshPhongMaterial
          ? (o(E, m), v(E, m))
          : m.isMeshStandardMaterial
            ? (o(E, m), x(E, m), m.isMeshPhysicalMaterial && y(E, m, L))
            : m.isMeshMatcapMaterial
              ? (o(E, m), R(E, m))
              : m.isMeshDepthMaterial
                ? o(E, m)
                : m.isMeshDistanceMaterial
                  ? (o(E, m), D(E, m))
                  : m.isMeshNormalMaterial
                    ? o(E, m)
                    : m.isLineBasicMaterial
                      ? (u(E, m), m.isLineDashedMaterial && h(E, m))
                      : m.isPointsMaterial
                        ? p(E, m, N, U)
                        : m.isSpriteMaterial
                          ? d(E, m)
                          : m.isShadowMaterial
                            ? (E.color.value.copy(m.color),
                              (E.opacity.value = m.opacity))
                            : m.isShaderMaterial && (m.uniformsNeedUpdate = !1);
  }
  function o(E, m) {
    ((E.opacity.value = m.opacity),
      m.color && E.diffuse.value.copy(m.color),
      m.emissive &&
        E.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),
      m.map && ((E.map.value = m.map), t(m.map, E.mapTransform)),
      m.alphaMap &&
        ((E.alphaMap.value = m.alphaMap), t(m.alphaMap, E.alphaMapTransform)),
      m.bumpMap &&
        ((E.bumpMap.value = m.bumpMap),
        t(m.bumpMap, E.bumpMapTransform),
        (E.bumpScale.value = m.bumpScale),
        m.side === cn && (E.bumpScale.value *= -1)),
      m.normalMap &&
        ((E.normalMap.value = m.normalMap),
        t(m.normalMap, E.normalMapTransform),
        E.normalScale.value.copy(m.normalScale),
        m.side === cn && E.normalScale.value.negate()),
      m.displacementMap &&
        ((E.displacementMap.value = m.displacementMap),
        t(m.displacementMap, E.displacementMapTransform),
        (E.displacementScale.value = m.displacementScale),
        (E.displacementBias.value = m.displacementBias)),
      m.emissiveMap &&
        ((E.emissiveMap.value = m.emissiveMap),
        t(m.emissiveMap, E.emissiveMapTransform)),
      m.specularMap &&
        ((E.specularMap.value = m.specularMap),
        t(m.specularMap, E.specularMapTransform)),
      m.alphaTest > 0 && (E.alphaTest.value = m.alphaTest));
    const N = e.get(m),
      U = N.envMap,
      L = N.envMapRotation;
    (U &&
      ((E.envMap.value = U),
      yi.copy(L),
      (yi.x *= -1),
      (yi.y *= -1),
      (yi.z *= -1),
      U.isCubeTexture &&
        U.isRenderTargetTexture === !1 &&
        ((yi.y *= -1), (yi.z *= -1)),
      E.envMapRotation.value.setFromMatrix4(ME.makeRotationFromEuler(yi)),
      (E.flipEnvMap.value =
        U.isCubeTexture && U.isRenderTargetTexture === !1 ? -1 : 1),
      (E.reflectivity.value = m.reflectivity),
      (E.ior.value = m.ior),
      (E.refractionRatio.value = m.refractionRatio)),
      m.lightMap &&
        ((E.lightMap.value = m.lightMap),
        (E.lightMapIntensity.value = m.lightMapIntensity),
        t(m.lightMap, E.lightMapTransform)),
      m.aoMap &&
        ((E.aoMap.value = m.aoMap),
        (E.aoMapIntensity.value = m.aoMapIntensity),
        t(m.aoMap, E.aoMapTransform)));
  }
  function u(E, m) {
    (E.diffuse.value.copy(m.color),
      (E.opacity.value = m.opacity),
      m.map && ((E.map.value = m.map), t(m.map, E.mapTransform)));
  }
  function h(E, m) {
    ((E.dashSize.value = m.dashSize),
      (E.totalSize.value = m.dashSize + m.gapSize),
      (E.scale.value = m.scale));
  }
  function p(E, m, N, U) {
    (E.diffuse.value.copy(m.color),
      (E.opacity.value = m.opacity),
      (E.size.value = m.size * N),
      (E.scale.value = U * 0.5),
      m.map && ((E.map.value = m.map), t(m.map, E.uvTransform)),
      m.alphaMap &&
        ((E.alphaMap.value = m.alphaMap), t(m.alphaMap, E.alphaMapTransform)),
      m.alphaTest > 0 && (E.alphaTest.value = m.alphaTest));
  }
  function d(E, m) {
    (E.diffuse.value.copy(m.color),
      (E.opacity.value = m.opacity),
      (E.rotation.value = m.rotation),
      m.map && ((E.map.value = m.map), t(m.map, E.mapTransform)),
      m.alphaMap &&
        ((E.alphaMap.value = m.alphaMap), t(m.alphaMap, E.alphaMapTransform)),
      m.alphaTest > 0 && (E.alphaTest.value = m.alphaTest));
  }
  function v(E, m) {
    (E.specular.value.copy(m.specular),
      (E.shininess.value = Math.max(m.shininess, 1e-4)));
  }
  function _(E, m) {
    m.gradientMap && (E.gradientMap.value = m.gradientMap);
  }
  function x(E, m) {
    ((E.metalness.value = m.metalness),
      m.metalnessMap &&
        ((E.metalnessMap.value = m.metalnessMap),
        t(m.metalnessMap, E.metalnessMapTransform)),
      (E.roughness.value = m.roughness),
      m.roughnessMap &&
        ((E.roughnessMap.value = m.roughnessMap),
        t(m.roughnessMap, E.roughnessMapTransform)),
      m.envMap && (E.envMapIntensity.value = m.envMapIntensity));
  }
  function y(E, m, N) {
    ((E.ior.value = m.ior),
      m.sheen > 0 &&
        (E.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),
        (E.sheenRoughness.value = m.sheenRoughness),
        m.sheenColorMap &&
          ((E.sheenColorMap.value = m.sheenColorMap),
          t(m.sheenColorMap, E.sheenColorMapTransform)),
        m.sheenRoughnessMap &&
          ((E.sheenRoughnessMap.value = m.sheenRoughnessMap),
          t(m.sheenRoughnessMap, E.sheenRoughnessMapTransform))),
      m.clearcoat > 0 &&
        ((E.clearcoat.value = m.clearcoat),
        (E.clearcoatRoughness.value = m.clearcoatRoughness),
        m.clearcoatMap &&
          ((E.clearcoatMap.value = m.clearcoatMap),
          t(m.clearcoatMap, E.clearcoatMapTransform)),
        m.clearcoatRoughnessMap &&
          ((E.clearcoatRoughnessMap.value = m.clearcoatRoughnessMap),
          t(m.clearcoatRoughnessMap, E.clearcoatRoughnessMapTransform)),
        m.clearcoatNormalMap &&
          ((E.clearcoatNormalMap.value = m.clearcoatNormalMap),
          t(m.clearcoatNormalMap, E.clearcoatNormalMapTransform),
          E.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),
          m.side === cn && E.clearcoatNormalScale.value.negate())),
      m.dispersion > 0 && (E.dispersion.value = m.dispersion),
      m.iridescence > 0 &&
        ((E.iridescence.value = m.iridescence),
        (E.iridescenceIOR.value = m.iridescenceIOR),
        (E.iridescenceThicknessMinimum.value = m.iridescenceThicknessRange[0]),
        (E.iridescenceThicknessMaximum.value = m.iridescenceThicknessRange[1]),
        m.iridescenceMap &&
          ((E.iridescenceMap.value = m.iridescenceMap),
          t(m.iridescenceMap, E.iridescenceMapTransform)),
        m.iridescenceThicknessMap &&
          ((E.iridescenceThicknessMap.value = m.iridescenceThicknessMap),
          t(m.iridescenceThicknessMap, E.iridescenceThicknessMapTransform))),
      m.transmission > 0 &&
        ((E.transmission.value = m.transmission),
        (E.transmissionSamplerMap.value = N.texture),
        E.transmissionSamplerSize.value.set(N.width, N.height),
        m.transmissionMap &&
          ((E.transmissionMap.value = m.transmissionMap),
          t(m.transmissionMap, E.transmissionMapTransform)),
        (E.thickness.value = m.thickness),
        m.thicknessMap &&
          ((E.thicknessMap.value = m.thicknessMap),
          t(m.thicknessMap, E.thicknessMapTransform)),
        (E.attenuationDistance.value = m.attenuationDistance),
        E.attenuationColor.value.copy(m.attenuationColor)),
      m.anisotropy > 0 &&
        (E.anisotropyVector.value.set(
          m.anisotropy * Math.cos(m.anisotropyRotation),
          m.anisotropy * Math.sin(m.anisotropyRotation),
        ),
        m.anisotropyMap &&
          ((E.anisotropyMap.value = m.anisotropyMap),
          t(m.anisotropyMap, E.anisotropyMapTransform))),
      (E.specularIntensity.value = m.specularIntensity),
      E.specularColor.value.copy(m.specularColor),
      m.specularColorMap &&
        ((E.specularColorMap.value = m.specularColorMap),
        t(m.specularColorMap, E.specularColorMapTransform)),
      m.specularIntensityMap &&
        ((E.specularIntensityMap.value = m.specularIntensityMap),
        t(m.specularIntensityMap, E.specularIntensityMapTransform)));
  }
  function R(E, m) {
    m.matcap && (E.matcap.value = m.matcap);
  }
  function D(E, m) {
    const N = e.get(m).light;
    (E.referencePosition.value.setFromMatrixPosition(N.matrixWorld),
      (E.nearDistance.value = N.shadow.camera.near),
      (E.farDistance.value = N.shadow.camera.far));
  }
  return { refreshFogUniforms: n, refreshMaterialUniforms: a };
}
function wE(r, e, t, n) {
  let a = {},
    o = {},
    u = [];
  const h = r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);
  function p(N, U) {
    const L = U.program;
    n.uniformBlockBinding(N, L);
  }
  function d(N, U) {
    let L = a[N.id];
    L === void 0 &&
      (R(N), (L = v(N)), (a[N.id] = L), N.addEventListener("dispose", E));
    const k = U.program;
    n.updateUBOMapping(N, k);
    const P = e.render.frame;
    o[N.id] !== P && (x(N), (o[N.id] = P));
  }
  function v(N) {
    const U = _();
    N.__bindingPointIndex = U;
    const L = r.createBuffer(),
      k = N.__size,
      P = N.usage;
    return (
      r.bindBuffer(r.UNIFORM_BUFFER, L),
      r.bufferData(r.UNIFORM_BUFFER, k, P),
      r.bindBuffer(r.UNIFORM_BUFFER, null),
      r.bindBufferBase(r.UNIFORM_BUFFER, U, L),
      L
    );
  }
  function _() {
    for (let N = 0; N < h; N++) if (u.indexOf(N) === -1) return (u.push(N), N);
    return (
      console.error(
        "THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.",
      ),
      0
    );
  }
  function x(N) {
    const U = a[N.id],
      L = N.uniforms,
      k = N.__cache;
    r.bindBuffer(r.UNIFORM_BUFFER, U);
    for (let P = 0, H = L.length; P < H; P++) {
      const q = Array.isArray(L[P]) ? L[P] : [L[P]];
      for (let C = 0, M = q.length; C < M; C++) {
        const z = q[C];
        if (y(z, P, C, k) === !0) {
          const Y = z.__offset,
            te = Array.isArray(z.value) ? z.value : [z.value];
          let J = 0;
          for (let he = 0; he < te.length; he++) {
            const ae = te[he],
              ie = D(ae);
            typeof ae == "number" || typeof ae == "boolean"
              ? ((z.__data[0] = ae),
                r.bufferSubData(r.UNIFORM_BUFFER, Y + J, z.__data))
              : ae.isMatrix3
                ? ((z.__data[0] = ae.elements[0]),
                  (z.__data[1] = ae.elements[1]),
                  (z.__data[2] = ae.elements[2]),
                  (z.__data[3] = 0),
                  (z.__data[4] = ae.elements[3]),
                  (z.__data[5] = ae.elements[4]),
                  (z.__data[6] = ae.elements[5]),
                  (z.__data[7] = 0),
                  (z.__data[8] = ae.elements[6]),
                  (z.__data[9] = ae.elements[7]),
                  (z.__data[10] = ae.elements[8]),
                  (z.__data[11] = 0))
                : (ae.toArray(z.__data, J),
                  (J += ie.storage / Float32Array.BYTES_PER_ELEMENT));
          }
          r.bufferSubData(r.UNIFORM_BUFFER, Y, z.__data);
        }
      }
    }
    r.bindBuffer(r.UNIFORM_BUFFER, null);
  }
  function y(N, U, L, k) {
    const P = N.value,
      H = U + "_" + L;
    if (k[H] === void 0)
      return (
        typeof P == "number" || typeof P == "boolean"
          ? (k[H] = P)
          : (k[H] = P.clone()),
        !0
      );
    {
      const q = k[H];
      if (typeof P == "number" || typeof P == "boolean") {
        if (q !== P) return ((k[H] = P), !0);
      } else if (q.equals(P) === !1) return (q.copy(P), !0);
    }
    return !1;
  }
  function R(N) {
    const U = N.uniforms;
    let L = 0;
    const k = 16;
    for (let H = 0, q = U.length; H < q; H++) {
      const C = Array.isArray(U[H]) ? U[H] : [U[H]];
      for (let M = 0, z = C.length; M < z; M++) {
        const Y = C[M],
          te = Array.isArray(Y.value) ? Y.value : [Y.value];
        for (let J = 0, he = te.length; J < he; J++) {
          const ae = te[J],
            ie = D(ae),
            Q = L % k,
            Ee = Q % ie.boundary,
            we = Q + Ee;
          ((L += Ee),
            we !== 0 && k - we < ie.storage && (L += k - we),
            (Y.__data = new Float32Array(
              ie.storage / Float32Array.BYTES_PER_ELEMENT,
            )),
            (Y.__offset = L),
            (L += ie.storage));
        }
      }
    }
    const P = L % k;
    return (P > 0 && (L += k - P), (N.__size = L), (N.__cache = {}), this);
  }
  function D(N) {
    const U = { boundary: 0, storage: 0 };
    return (
      typeof N == "number" || typeof N == "boolean"
        ? ((U.boundary = 4), (U.storage = 4))
        : N.isVector2
          ? ((U.boundary = 8), (U.storage = 8))
          : N.isVector3 || N.isColor
            ? ((U.boundary = 16), (U.storage = 12))
            : N.isVector4
              ? ((U.boundary = 16), (U.storage = 16))
              : N.isMatrix3
                ? ((U.boundary = 48), (U.storage = 48))
                : N.isMatrix4
                  ? ((U.boundary = 64), (U.storage = 64))
                  : N.isTexture
                    ? console.warn(
                        "THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.",
                      )
                    : console.warn(
                        "THREE.WebGLRenderer: Unsupported uniform value type.",
                        N,
                      ),
      U
    );
  }
  function E(N) {
    const U = N.target;
    U.removeEventListener("dispose", E);
    const L = u.indexOf(U.__bindingPointIndex);
    (u.splice(L, 1), r.deleteBuffer(a[U.id]), delete a[U.id], delete o[U.id]);
  }
  function m() {
    for (const N in a) r.deleteBuffer(a[N]);
    ((u = []), (a = {}), (o = {}));
  }
  return { bind: p, update: d, dispose: m };
}
class bE {
  constructor(e = {}) {
    const {
      canvas: t = n_(),
      context: n = null,
      depth: a = !0,
      stencil: o = !1,
      alpha: u = !1,
      antialias: h = !1,
      premultipliedAlpha: p = !0,
      preserveDrawingBuffer: d = !1,
      powerPreference: v = "default",
      failIfMajorPerformanceCaveat: _ = !1,
      reversedDepthBuffer: x = !1,
    } = e;
    this.isWebGLRenderer = !0;
    let y;
    if (n !== null) {
      if (
        typeof WebGLRenderingContext < "u" &&
        n instanceof WebGLRenderingContext
      )
        throw new Error(
          "THREE.WebGLRenderer: WebGL 1 is not supported since r163.",
        );
      y = n.getContextAttributes().alpha;
    } else y = u;
    const R = new Uint32Array(4),
      D = new Int32Array(4);
    let E = null,
      m = null;
    const N = [],
      U = [];
    ((this.domElement = t),
      (this.debug = { checkShaderErrors: !0, onShaderError: null }),
      (this.autoClear = !0),
      (this.autoClearColor = !0),
      (this.autoClearDepth = !0),
      (this.autoClearStencil = !0),
      (this.sortObjects = !0),
      (this.clippingPlanes = []),
      (this.localClippingEnabled = !1),
      (this.toneMapping = ai),
      (this.toneMappingExposure = 1),
      (this.transmissionResolutionScale = 1));
    const L = this;
    let k = !1;
    this._outputColorSpace = on;
    let P = 0,
      H = 0,
      q = null,
      C = -1,
      M = null;
    const z = new It(),
      Y = new It();
    let te = null;
    const J = new pt(0);
    let he = 0,
      ae = t.width,
      ie = t.height,
      Q = 1,
      Ee = null,
      we = null;
    const Re = new It(0, 0, ae, ie),
      We = new It(0, 0, ae, ie);
    let Ke = !1;
    const tt = new Lo();
    let Qe = !1,
      se = !1;
    const de = new Ut(),
      le = new K(),
      Me = new It(),
      He = {
        background: null,
        fog: null,
        environment: null,
        overrideMaterial: null,
        isScene: !0,
      };
    let lt = !1;
    function At() {
      return q === null ? Q : 1;
    }
    let O = n;
    function xt(A, X) {
      return t.getContext(A, X);
    }
    try {
      const A = {
        alpha: !0,
        depth: a,
        stencil: o,
        antialias: h,
        premultipliedAlpha: p,
        preserveDrawingBuffer: d,
        powerPreference: v,
        failIfMajorPerformanceCaveat: _,
      };
      if (
        ("setAttribute" in t &&
          t.setAttribute("data-engine", `three.js r${yo}`),
        t.addEventListener("webglcontextlost", be, !1),
        t.addEventListener("webglcontextrestored", Le, !1),
        t.addEventListener("webglcontextcreationerror", G, !1),
        O === null)
      ) {
        const X = "webgl2";
        if (((O = xt(X, A)), O === null))
          throw xt(X)
            ? new Error(
                "Error creating WebGL context with your selected attributes.",
              )
            : new Error("Error creating WebGL context.");
      }
    } catch (A) {
      throw (console.error("THREE.WebGLRenderer: " + A.message), A);
    }
    let et,
      Ye,
      Oe,
      Rt,
      Ie,
      Ze,
      Pt,
      St,
      I,
      b,
      $,
      re,
      pe,
      oe,
      Ve,
      Te,
      ke,
      ze,
      Se,
      De,
      je,
      Be,
      Ae,
      nt;
    function V() {
      ((et = new N0(O)),
        et.init(),
        (Be = new vE(O, et)),
        (Ye = new C0(O, et, e, Be)),
        (Oe = new _E(O, et)),
        Ye.reversedDepthBuffer && x && Oe.buffers.depth.setReversed(!0),
        (Rt = new B0(O)),
        (Ie = new iE()),
        (Ze = new gE(O, et, Oe, Ie, Ye, Be, Rt)),
        (Pt = new D0(L)),
        (St = new U0(L)),
        (I = new X_(O)),
        (Ae = new A0(O, I)),
        (b = new O0(O, I, Rt, Ae)),
        ($ = new H0(O, b, I, Rt)),
        (Se = new z0(O, Ye, Ze)),
        (Te = new P0(Ie)),
        (re = new nE(L, Pt, St, et, Ye, Ae, Te)),
        (pe = new TE(L, Ie)),
        (oe = new sE()),
        (Ve = new hE(et)),
        (ze = new b0(L, Pt, St, Oe, $, y, p)),
        (ke = new pE(L, $, Ye)),
        (nt = new wE(O, Rt, Ye, Oe)),
        (De = new R0(O, et, Rt)),
        (je = new k0(O, et, Rt)),
        (Rt.programs = re.programs),
        (L.capabilities = Ye),
        (L.extensions = et),
        (L.properties = Ie),
        (L.renderLists = oe),
        (L.shadowMap = ke),
        (L.state = Oe),
        (L.info = Rt));
    }
    V();
    const ye = new yE(L, O);
    ((this.xr = ye),
      (this.getContext = function () {
        return O;
      }),
      (this.getContextAttributes = function () {
        return O.getContextAttributes();
      }),
      (this.forceContextLoss = function () {
        const A = et.get("WEBGL_lose_context");
        A && A.loseContext();
      }),
      (this.forceContextRestore = function () {
        const A = et.get("WEBGL_lose_context");
        A && A.restoreContext();
      }),
      (this.getPixelRatio = function () {
        return Q;
      }),
      (this.setPixelRatio = function (A) {
        A !== void 0 && ((Q = A), this.setSize(ae, ie, !1));
      }),
      (this.getSize = function (A) {
        return A.set(ae, ie);
      }),
      (this.setSize = function (A, X, ne = !0) {
        if (ye.isPresenting) {
          console.warn(
            "THREE.WebGLRenderer: Can't change size while VR device is presenting.",
          );
          return;
        }
        ((ae = A),
          (ie = X),
          (t.width = Math.floor(A * Q)),
          (t.height = Math.floor(X * Q)),
          ne === !0 &&
            ((t.style.width = A + "px"), (t.style.height = X + "px")),
          this.setViewport(0, 0, A, X));
      }),
      (this.getDrawingBufferSize = function (A) {
        return A.set(ae * Q, ie * Q).floor();
      }),
      (this.setDrawingBufferSize = function (A, X, ne) {
        ((ae = A),
          (ie = X),
          (Q = ne),
          (t.width = Math.floor(A * ne)),
          (t.height = Math.floor(X * ne)),
          this.setViewport(0, 0, A, X));
      }),
      (this.getCurrentViewport = function (A) {
        return A.copy(z);
      }),
      (this.getViewport = function (A) {
        return A.copy(Re);
      }),
      (this.setViewport = function (A, X, ne, ee) {
        (A.isVector4 ? Re.set(A.x, A.y, A.z, A.w) : Re.set(A, X, ne, ee),
          Oe.viewport(z.copy(Re).multiplyScalar(Q).round()));
      }),
      (this.getScissor = function (A) {
        return A.copy(We);
      }),
      (this.setScissor = function (A, X, ne, ee) {
        (A.isVector4 ? We.set(A.x, A.y, A.z, A.w) : We.set(A, X, ne, ee),
          Oe.scissor(Y.copy(We).multiplyScalar(Q).round()));
      }),
      (this.getScissorTest = function () {
        return Ke;
      }),
      (this.setScissorTest = function (A) {
        Oe.setScissorTest((Ke = A));
      }),
      (this.setOpaqueSort = function (A) {
        Ee = A;
      }),
      (this.setTransparentSort = function (A) {
        we = A;
      }),
      (this.getClearColor = function (A) {
        return A.copy(ze.getClearColor());
      }),
      (this.setClearColor = function () {
        ze.setClearColor(...arguments);
      }),
      (this.getClearAlpha = function () {
        return ze.getClearAlpha();
      }),
      (this.setClearAlpha = function () {
        ze.setClearAlpha(...arguments);
      }),
      (this.clear = function (A = !0, X = !0, ne = !0) {
        let ee = 0;
        if (A) {
          let j = !1;
          if (q !== null) {
            const _e = q.texture.format;
            j = _e === Ro || _e === Ao || _e === bo;
          }
          if (j) {
            const _e = q.texture.type,
              Ce =
                _e === In ||
                _e === Ri ||
                _e === Er ||
                _e === Sr ||
                _e === To ||
                _e === wo,
              Ne = ze.getClearColor(),
              Ue = ze.getClearAlpha(),
              Ge = Ne.r,
              qe = Ne.g,
              ve = Ne.b;
            Ce
              ? ((R[0] = Ge),
                (R[1] = qe),
                (R[2] = ve),
                (R[3] = Ue),
                O.clearBufferuiv(O.COLOR, 0, R))
              : ((D[0] = Ge),
                (D[1] = qe),
                (D[2] = ve),
                (D[3] = Ue),
                O.clearBufferiv(O.COLOR, 0, D));
          } else ee |= O.COLOR_BUFFER_BIT;
        }
        (X && (ee |= O.DEPTH_BUFFER_BIT),
          ne &&
            ((ee |= O.STENCIL_BUFFER_BIT),
            this.state.buffers.stencil.setMask(4294967295)),
          O.clear(ee));
      }),
      (this.clearColor = function () {
        this.clear(!0, !1, !1);
      }),
      (this.clearDepth = function () {
        this.clear(!1, !0, !1);
      }),
      (this.clearStencil = function () {
        this.clear(!1, !1, !0);
      }),
      (this.dispose = function () {
        (t.removeEventListener("webglcontextlost", be, !1),
          t.removeEventListener("webglcontextrestored", Le, !1),
          t.removeEventListener("webglcontextcreationerror", G, !1),
          ze.dispose(),
          oe.dispose(),
          Ve.dispose(),
          Ie.dispose(),
          Pt.dispose(),
          St.dispose(),
          $.dispose(),
          Ae.dispose(),
          nt.dispose(),
          re.dispose(),
          ye.dispose(),
          ye.removeEventListener("sessionstart", Nt),
          ye.removeEventListener("sessionend", ci),
          Nn.stop());
      }));
    function be(A) {
      (A.preventDefault(),
        console.log("THREE.WebGLRenderer: Context Lost."),
        (k = !0));
    }
    function Le() {
      (console.log("THREE.WebGLRenderer: Context Restored."), (k = !1));
      const A = Rt.autoReset,
        X = ke.enabled,
        ne = ke.autoUpdate,
        ee = ke.needsUpdate,
        j = ke.type;
      (V(),
        (Rt.autoReset = A),
        (ke.enabled = X),
        (ke.autoUpdate = ne),
        (ke.needsUpdate = ee),
        (ke.type = j));
    }
    function G(A) {
      console.error(
        "THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",
        A.statusMessage,
      );
    }
    function B(A) {
      const X = A.target;
      (X.removeEventListener("dispose", B), Fe(X));
    }
    function Fe(A) {
      (Je(A), Ie.remove(A));
    }
    function Je(A) {
      const X = Ie.get(A).programs;
      X !== void 0 &&
        (X.forEach(function (ne) {
          re.releaseProgram(ne);
        }),
        A.isShaderMaterial && re.releaseShaderCache(A));
    }
    this.renderBufferDirect = function (A, X, ne, ee, j, _e) {
      X === null && (X = He);
      const Ce = j.isMesh && j.matrixWorld.determinant() < 0,
        Ne = Fs(A, X, ne, ee, j);
      Oe.setMaterial(ee, Ce);
      let Ue = ne.index,
        Ge = 1;
      if (ee.wireframe === !0) {
        if (((Ue = b.getWireframeAttribute(ne)), Ue === void 0)) return;
        Ge = 2;
      }
      const qe = ne.drawRange,
        ve = ne.attributes.position;
      let ct = qe.start * Ge,
        vt = (qe.start + qe.count) * Ge;
      (_e !== null &&
        ((ct = Math.max(ct, _e.start * Ge)),
        (vt = Math.min(vt, (_e.start + _e.count) * Ge))),
        Ue !== null
          ? ((ct = Math.max(ct, 0)), (vt = Math.min(vt, Ue.count)))
          : ve != null &&
            ((ct = Math.max(ct, 0)), (vt = Math.min(vt, ve.count))));
      const Ft = vt - ct;
      if (Ft < 0 || Ft === 1 / 0) return;
      Ae.setup(j, ee, Ne, ne, Ue);
      let Mt,
        yt = De;
      if (
        (Ue !== null && ((Mt = I.get(Ue)), (yt = je), yt.setIndex(Mt)),
        j.isMesh)
      )
        ee.wireframe === !0
          ? (Oe.setLineWidth(ee.wireframeLinewidth * At()), yt.setMode(O.LINES))
          : yt.setMode(O.TRIANGLES);
      else if (j.isLine) {
        let Xe = ee.linewidth;
        (Xe === void 0 && (Xe = 1),
          Oe.setLineWidth(Xe * At()),
          j.isLineSegments
            ? yt.setMode(O.LINES)
            : j.isLineLoop
              ? yt.setMode(O.LINE_LOOP)
              : yt.setMode(O.LINE_STRIP));
      } else
        j.isPoints
          ? yt.setMode(O.POINTS)
          : j.isSprite && yt.setMode(O.TRIANGLES);
      if (j.isBatchedMesh)
        if (j._multiDrawInstances !== null)
          (wr(
            "THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection.",
          ),
            yt.renderMultiDrawInstances(
              j._multiDrawStarts,
              j._multiDrawCounts,
              j._multiDrawCount,
              j._multiDrawInstances,
            ));
        else if (et.get("WEBGL_multi_draw"))
          yt.renderMultiDraw(
            j._multiDrawStarts,
            j._multiDrawCounts,
            j._multiDrawCount,
          );
        else {
          const Xe = j._multiDrawStarts,
            Dt = j._multiDrawCounts,
            ht = j._multiDrawCount,
            en = Ue ? I.get(Ue).bytesPerElement : 1,
            kn = Ie.get(ee).currentProgram.getUniforms();
          for (let S = 0; S < ht; S++)
            (kn.setValue(O, "_gl_DrawID", S), yt.render(Xe[S] / en, Dt[S]));
        }
      else if (j.isInstancedMesh) yt.renderInstances(ct, Ft, j.count);
      else if (ne.isInstancedBufferGeometry) {
        const Xe =
            ne._maxInstanceCount !== void 0 ? ne._maxInstanceCount : 1 / 0,
          Dt = Math.min(ne.instanceCount, Xe);
        yt.renderInstances(ct, Ft, Dt);
      } else yt.render(ct, Ft);
    };
    function mt(A, X, ne) {
      A.transparent === !0 && A.side === $n && A.forceSinglePass === !1
        ? ((A.side = cn),
          (A.needsUpdate = !0),
          Kn(A, X, ne),
          (A.side = oi),
          (A.needsUpdate = !0),
          Kn(A, X, ne),
          (A.side = $n))
        : Kn(A, X, ne);
    }
    ((this.compile = function (A, X, ne = null) {
      (ne === null && (ne = A),
        (m = Ve.get(ne)),
        m.init(X),
        U.push(m),
        ne.traverseVisible(function (j) {
          j.isLight &&
            j.layers.test(X.layers) &&
            (m.pushLight(j), j.castShadow && m.pushShadow(j));
        }),
        A !== ne &&
          A.traverseVisible(function (j) {
            j.isLight &&
              j.layers.test(X.layers) &&
              (m.pushLight(j), j.castShadow && m.pushShadow(j));
          }),
        m.setupLights());
      const ee = new Set();
      return (
        A.traverse(function (j) {
          if (!(j.isMesh || j.isPoints || j.isLine || j.isSprite)) return;
          const _e = j.material;
          if (_e)
            if (Array.isArray(_e))
              for (let Ce = 0; Ce < _e.length; Ce++) {
                const Ne = _e[Ce];
                (mt(Ne, ne, j), ee.add(Ne));
              }
            else (mt(_e, ne, j), ee.add(_e));
        }),
        (m = U.pop()),
        ee
      );
    }),
      (this.compileAsync = function (A, X, ne = null) {
        const ee = this.compile(A, X, ne);
        return new Promise((j) => {
          function _e() {
            if (
              (ee.forEach(function (Ce) {
                Ie.get(Ce).currentProgram.isReady() && ee.delete(Ce);
              }),
              ee.size === 0)
            ) {
              j(A);
              return;
            }
            setTimeout(_e, 10);
          }
          et.get("KHR_parallel_shader_compile") !== null
            ? _e()
            : setTimeout(_e, 10);
        });
      }));
    let st = null;
    function vn(A) {
      st && st(A);
    }
    function Nt() {
      Nn.stop();
    }
    function ci() {
      Nn.start();
    }
    const Nn = new iu();
    (Nn.setAnimationLoop(vn),
      typeof self < "u" && Nn.setContext(self),
      (this.setAnimationLoop = function (A) {
        ((st = A), ye.setAnimationLoop(A), A === null ? Nn.stop() : Nn.start());
      }),
      ye.addEventListener("sessionstart", Nt),
      ye.addEventListener("sessionend", ci),
      (this.render = function (A, X) {
        if (X !== void 0 && X.isCamera !== !0) {
          console.error(
            "THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.",
          );
          return;
        }
        if (k === !0) return;
        if (
          (A.matrixWorldAutoUpdate === !0 && A.updateMatrixWorld(),
          X.parent === null &&
            X.matrixWorldAutoUpdate === !0 &&
            X.updateMatrixWorld(),
          ye.enabled === !0 &&
            ye.isPresenting === !0 &&
            (ye.cameraAutoUpdate === !0 && ye.updateCamera(X),
            (X = ye.getCamera())),
          A.isScene === !0 && A.onBeforeRender(L, A, X, q),
          (m = Ve.get(A, U.length)),
          m.init(X),
          U.push(m),
          de.multiplyMatrices(X.projectionMatrix, X.matrixWorldInverse),
          tt.setFromProjectionMatrix(de, Ln, X.reversedDepth),
          (se = this.localClippingEnabled),
          (Qe = Te.init(this.clippingPlanes, se)),
          (E = oe.get(A, N.length)),
          E.init(),
          N.push(E),
          ye.enabled === !0 && ye.isPresenting === !0)
        ) {
          const _e = L.xr.getDepthSensingMesh();
          _e !== null && lr(_e, X, -1 / 0, L.sortObjects);
        }
        (lr(A, X, 0, L.sortObjects),
          E.finish(),
          L.sortObjects === !0 && E.sort(Ee, we),
          (lt =
            ye.enabled === !1 ||
            ye.isPresenting === !1 ||
            ye.hasDepthSensing() === !1),
          lt && ze.addToRenderList(E, A),
          this.info.render.frame++,
          Qe === !0 && Te.beginShadows());
        const ne = m.state.shadowsArray;
        (ke.render(ne, A, X),
          Qe === !0 && Te.endShadows(),
          this.info.autoReset === !0 && this.info.reset());
        const ee = E.opaque,
          j = E.transmissive;
        if ((m.setupLights(), X.isArrayCamera)) {
          const _e = X.cameras;
          if (j.length > 0)
            for (let Ce = 0, Ne = _e.length; Ce < Ne; Ce++) {
              const Ue = _e[Ce];
              Lr(ee, j, A, Ue);
            }
          lt && ze.render(A);
          for (let Ce = 0, Ne = _e.length; Ce < Ne; Ce++) {
            const Ue = _e[Ce];
            fn(E, A, Ue, Ue.viewport);
          }
        } else
          (j.length > 0 && Lr(ee, j, A, X), lt && ze.render(A), fn(E, A, X));
        (q !== null &&
          H === 0 &&
          (Ze.updateMultisampleRenderTarget(q), Ze.updateRenderTargetMipmap(q)),
          A.isScene === !0 && A.onAfterRender(L, A, X),
          Ae.resetDefaultState(),
          (C = -1),
          (M = null),
          U.pop(),
          U.length > 0
            ? ((m = U[U.length - 1]),
              Qe === !0 && Te.setGlobalState(L.clippingPlanes, m.state.camera))
            : (m = null),
          N.pop(),
          N.length > 0 ? (E = N[N.length - 1]) : (E = null));
      }));
    function lr(A, X, ne, ee) {
      if (A.visible === !1) return;
      if (A.layers.test(X.layers)) {
        if (A.isGroup) ne = A.renderOrder;
        else if (A.isLOD) A.autoUpdate === !0 && A.update(X);
        else if (A.isLight) (m.pushLight(A), A.castShadow && m.pushShadow(A));
        else if (A.isSprite) {
          if (!A.frustumCulled || tt.intersectsSprite(A)) {
            ee && Me.setFromMatrixPosition(A.matrixWorld).applyMatrix4(de);
            const Ce = $.update(A),
              Ne = A.material;
            Ne.visible && E.push(A, Ce, Ne, ne, Me.z, null);
          }
        } else if (
          (A.isMesh || A.isLine || A.isPoints) &&
          (!A.frustumCulled || tt.intersectsObject(A))
        ) {
          const Ce = $.update(A),
            Ne = A.material;
          if (
            (ee &&
              (A.boundingSphere !== void 0
                ? (A.boundingSphere === null && A.computeBoundingSphere(),
                  Me.copy(A.boundingSphere.center))
                : (Ce.boundingSphere === null && Ce.computeBoundingSphere(),
                  Me.copy(Ce.boundingSphere.center)),
              Me.applyMatrix4(A.matrixWorld).applyMatrix4(de)),
            Array.isArray(Ne))
          ) {
            const Ue = Ce.groups;
            for (let Ge = 0, qe = Ue.length; Ge < qe; Ge++) {
              const ve = Ue[Ge],
                ct = Ne[ve.materialIndex];
              ct && ct.visible && E.push(A, Ce, ct, ne, Me.z, ve);
            }
          } else Ne.visible && E.push(A, Ce, Ne, ne, Me.z, null);
        }
      }
      const _e = A.children;
      for (let Ce = 0, Ne = _e.length; Ce < Ne; Ce++) lr(_e[Ce], X, ne, ee);
    }
    function fn(A, X, ne, ee) {
      const j = A.opaque,
        _e = A.transmissive,
        Ce = A.transparent;
      (m.setupLightsView(ne),
        Qe === !0 && Te.setGlobalState(L.clippingPlanes, ne),
        ee && Oe.viewport(z.copy(ee)),
        j.length > 0 && On(j, X, ne),
        _e.length > 0 && On(_e, X, ne),
        Ce.length > 0 && On(Ce, X, ne),
        Oe.buffers.depth.setTest(!0),
        Oe.buffers.depth.setMask(!0),
        Oe.buffers.color.setMask(!0),
        Oe.setPolygonOffset(!1));
    }
    function Lr(A, X, ne, ee) {
      if ((ne.isScene === !0 ? ne.overrideMaterial : null) !== null) return;
      m.state.transmissionRenderTarget[ee.id] === void 0 &&
        (m.state.transmissionRenderTarget[ee.id] = new Pi(1, 1, {
          generateMipmaps: !0,
          type:
            et.has("EXT_color_buffer_half_float") ||
            et.has("EXT_color_buffer_float")
              ? Ar
              : In,
          minFilter: Ai,
          samples: 4,
          stencilBuffer: o,
          resolveDepthBuffer: !1,
          resolveStencilBuffer: !1,
          colorSpace: gt.workingColorSpace,
        }));
      const _e = m.state.transmissionRenderTarget[ee.id],
        Ce = ee.viewport || z;
      _e.setSize(
        Ce.z * L.transmissionResolutionScale,
        Ce.w * L.transmissionResolutionScale,
      );
      const Ne = L.getRenderTarget(),
        Ue = L.getActiveCubeFace(),
        Ge = L.getActiveMipmapLevel();
      (L.setRenderTarget(_e),
        L.getClearColor(J),
        (he = L.getClearAlpha()),
        he < 1 && L.setClearColor(16777215, 0.5),
        L.clear(),
        lt && ze.render(ne));
      const qe = L.toneMapping;
      L.toneMapping = ai;
      const ve = ee.viewport;
      if (
        (ee.viewport !== void 0 && (ee.viewport = void 0),
        m.setupLightsView(ee),
        Qe === !0 && Te.setGlobalState(L.clippingPlanes, ee),
        On(A, ne, ee),
        Ze.updateMultisampleRenderTarget(_e),
        Ze.updateRenderTargetMipmap(_e),
        et.has("WEBGL_multisampled_render_to_texture") === !1)
      ) {
        let ct = !1;
        for (let vt = 0, Ft = X.length; vt < Ft; vt++) {
          const Mt = X[vt],
            yt = Mt.object,
            Xe = Mt.geometry,
            Dt = Mt.material,
            ht = Mt.group;
          if (Dt.side === $n && yt.layers.test(ee.layers)) {
            const en = Dt.side;
            ((Dt.side = cn),
              (Dt.needsUpdate = !0),
              ui(yt, ne, ee, Xe, Dt, ht),
              (Dt.side = en),
              (Dt.needsUpdate = !0),
              (ct = !0));
          }
        }
        ct === !0 &&
          (Ze.updateMultisampleRenderTarget(_e),
          Ze.updateRenderTargetMipmap(_e));
      }
      (L.setRenderTarget(Ne, Ue, Ge),
        L.setClearColor(J, he),
        ve !== void 0 && (ee.viewport = ve),
        (L.toneMapping = qe));
    }
    function On(A, X, ne) {
      const ee = X.isScene === !0 ? X.overrideMaterial : null;
      for (let j = 0, _e = A.length; j < _e; j++) {
        const Ce = A[j],
          Ne = Ce.object,
          Ue = Ce.geometry,
          Ge = Ce.group;
        let qe = Ce.material;
        (qe.allowOverride === !0 && ee !== null && (qe = ee),
          Ne.layers.test(ne.layers) && ui(Ne, X, ne, Ue, qe, Ge));
      }
    }
    function ui(A, X, ne, ee, j, _e) {
      (A.onBeforeRender(L, X, ne, ee, j, _e),
        A.modelViewMatrix.multiplyMatrices(
          ne.matrixWorldInverse,
          A.matrixWorld,
        ),
        A.normalMatrix.getNormalMatrix(A.modelViewMatrix),
        j.onBeforeRender(L, X, ne, ee, A, _e),
        j.transparent === !0 && j.side === $n && j.forceSinglePass === !1
          ? ((j.side = cn),
            (j.needsUpdate = !0),
            L.renderBufferDirect(ne, X, ee, j, A, _e),
            (j.side = oi),
            (j.needsUpdate = !0),
            L.renderBufferDirect(ne, X, ee, j, A, _e),
            (j.side = $n))
          : L.renderBufferDirect(ne, X, ee, j, A, _e),
        A.onAfterRender(L, X, ne, ee, j, _e));
    }
    function Kn(A, X, ne) {
      X.isScene !== !0 && (X = He);
      const ee = Ie.get(A),
        j = m.state.lights,
        _e = m.state.shadowsArray,
        Ce = j.state.version,
        Ne = re.getParameters(A, j.state, _e, X, ne),
        Ue = re.getProgramCacheKey(Ne);
      let Ge = ee.programs;
      ((ee.environment = A.isMeshStandardMaterial ? X.environment : null),
        (ee.fog = X.fog),
        (ee.envMap = (A.isMeshStandardMaterial ? St : Pt).get(
          A.envMap || ee.environment,
        )),
        (ee.envMapRotation =
          ee.environment !== null && A.envMap === null
            ? X.environmentRotation
            : A.envMapRotation),
        Ge === void 0 &&
          (A.addEventListener("dispose", B),
          (Ge = new Map()),
          (ee.programs = Ge)));
      let qe = Ge.get(Ue);
      if (qe !== void 0) {
        if (ee.currentProgram === qe && ee.lightsStateVersion === Ce)
          return (Ir(A, Ne), qe);
      } else
        ((Ne.uniforms = re.getUniforms(A)),
          A.onBeforeCompile(Ne, L),
          (qe = re.acquireProgram(Ne, Ue)),
          Ge.set(Ue, qe),
          (ee.uniforms = Ne.uniforms));
      const ve = ee.uniforms;
      return (
        ((!A.isShaderMaterial && !A.isRawShaderMaterial) ||
          A.clipping === !0) &&
          (ve.clippingPlanes = Te.uniform),
        Ir(A, Ne),
        (ee.needsLights = Is(A)),
        (ee.lightsStateVersion = Ce),
        ee.needsLights &&
          ((ve.ambientLightColor.value = j.state.ambient),
          (ve.lightProbe.value = j.state.probe),
          (ve.directionalLights.value = j.state.directional),
          (ve.directionalLightShadows.value = j.state.directionalShadow),
          (ve.spotLights.value = j.state.spot),
          (ve.spotLightShadows.value = j.state.spotShadow),
          (ve.rectAreaLights.value = j.state.rectArea),
          (ve.ltc_1.value = j.state.rectAreaLTC1),
          (ve.ltc_2.value = j.state.rectAreaLTC2),
          (ve.pointLights.value = j.state.point),
          (ve.pointLightShadows.value = j.state.pointShadow),
          (ve.hemisphereLights.value = j.state.hemi),
          (ve.directionalShadowMap.value = j.state.directionalShadowMap),
          (ve.directionalShadowMatrix.value = j.state.directionalShadowMatrix),
          (ve.spotShadowMap.value = j.state.spotShadowMap),
          (ve.spotLightMatrix.value = j.state.spotLightMatrix),
          (ve.spotLightMap.value = j.state.spotLightMap),
          (ve.pointShadowMap.value = j.state.pointShadowMap),
          (ve.pointShadowMatrix.value = j.state.pointShadowMatrix)),
        (ee.currentProgram = qe),
        (ee.uniformsList = null),
        qe
      );
    }
    function Fr(A) {
      if (A.uniformsList === null) {
        const X = A.currentProgram.getUniforms();
        A.uniformsList = bs.seqWithValue(X.seq, A.uniforms);
      }
      return A.uniformsList;
    }
    function Ir(A, X) {
      const ne = Ie.get(A);
      ((ne.outputColorSpace = X.outputColorSpace),
        (ne.batching = X.batching),
        (ne.batchingColor = X.batchingColor),
        (ne.instancing = X.instancing),
        (ne.instancingColor = X.instancingColor),
        (ne.instancingMorph = X.instancingMorph),
        (ne.skinning = X.skinning),
        (ne.morphTargets = X.morphTargets),
        (ne.morphNormals = X.morphNormals),
        (ne.morphColors = X.morphColors),
        (ne.morphTargetsCount = X.morphTargetsCount),
        (ne.numClippingPlanes = X.numClippingPlanes),
        (ne.numIntersection = X.numClipIntersection),
        (ne.vertexAlphas = X.vertexAlphas),
        (ne.vertexTangents = X.vertexTangents),
        (ne.toneMapping = X.toneMapping));
    }
    function Fs(A, X, ne, ee, j) {
      (X.isScene !== !0 && (X = He), Ze.resetTextureUnits());
      const _e = X.fog,
        Ce = ee.isMeshStandardMaterial ? X.environment : null,
        Ne =
          q === null
            ? L.outputColorSpace
            : q.isXRRenderTarget === !0
              ? q.texture.colorSpace
              : ir,
        Ue = (ee.isMeshStandardMaterial ? St : Pt).get(ee.envMap || Ce),
        Ge =
          ee.vertexColors === !0 &&
          !!ne.attributes.color &&
          ne.attributes.color.itemSize === 4,
        qe = !!ne.attributes.tangent && (!!ee.normalMap || ee.anisotropy > 0),
        ve = !!ne.morphAttributes.position,
        ct = !!ne.morphAttributes.normal,
        vt = !!ne.morphAttributes.color;
      let Ft = ai;
      ee.toneMapped &&
        (q === null || q.isXRRenderTarget === !0) &&
        (Ft = L.toneMapping);
      const Mt =
          ne.morphAttributes.position ||
          ne.morphAttributes.normal ||
          ne.morphAttributes.color,
        yt = Mt !== void 0 ? Mt.length : 0,
        Xe = Ie.get(ee),
        Dt = m.state.lights;
      if (Qe === !0 && (se === !0 || A !== M)) {
        const jt = A === M && ee.id === C;
        Te.setState(ee, A, jt);
      }
      let ht = !1;
      ee.version === Xe.__version
        ? ((Xe.needsLights && Xe.lightsStateVersion !== Dt.state.version) ||
            Xe.outputColorSpace !== Ne ||
            (j.isBatchedMesh && Xe.batching === !1) ||
            (!j.isBatchedMesh && Xe.batching === !0) ||
            (j.isBatchedMesh &&
              Xe.batchingColor === !0 &&
              j.colorTexture === null) ||
            (j.isBatchedMesh &&
              Xe.batchingColor === !1 &&
              j.colorTexture !== null) ||
            (j.isInstancedMesh && Xe.instancing === !1) ||
            (!j.isInstancedMesh && Xe.instancing === !0) ||
            (j.isSkinnedMesh && Xe.skinning === !1) ||
            (!j.isSkinnedMesh && Xe.skinning === !0) ||
            (j.isInstancedMesh &&
              Xe.instancingColor === !0 &&
              j.instanceColor === null) ||
            (j.isInstancedMesh &&
              Xe.instancingColor === !1 &&
              j.instanceColor !== null) ||
            (j.isInstancedMesh &&
              Xe.instancingMorph === !0 &&
              j.morphTexture === null) ||
            (j.isInstancedMesh &&
              Xe.instancingMorph === !1 &&
              j.morphTexture !== null) ||
            Xe.envMap !== Ue ||
            (ee.fog === !0 && Xe.fog !== _e) ||
            (Xe.numClippingPlanes !== void 0 &&
              (Xe.numClippingPlanes !== Te.numPlanes ||
                Xe.numIntersection !== Te.numIntersection)) ||
            Xe.vertexAlphas !== Ge ||
            Xe.vertexTangents !== qe ||
            Xe.morphTargets !== ve ||
            Xe.morphNormals !== ct ||
            Xe.morphColors !== vt ||
            Xe.toneMapping !== Ft ||
            Xe.morphTargetsCount !== yt) &&
          (ht = !0)
        : ((ht = !0), (Xe.__version = ee.version));
      let en = Xe.currentProgram;
      ht === !0 && (en = Kn(ee, X, j));
      let kn = !1,
        S = !1,
        Et = !1;
      const Lt = en.getUniforms(),
        $t = Xe.uniforms;
      if (
        (Oe.useProgram(en.program) && ((kn = !0), (S = !0), (Et = !0)),
        ee.id !== C && ((C = ee.id), (S = !0)),
        kn || M !== A)
      ) {
        (Oe.buffers.depth.getReversed() &&
          A.reversedDepth !== !0 &&
          ((A._reversedDepth = !0), A.updateProjectionMatrix()),
          Lt.setValue(O, "projectionMatrix", A.projectionMatrix),
          Lt.setValue(O, "viewMatrix", A.matrixWorldInverse));
        const Yt = Lt.map.cameraPosition;
        (Yt !== void 0 &&
          Yt.setValue(O, le.setFromMatrixPosition(A.matrixWorld)),
          Ye.logarithmicDepthBuffer &&
            Lt.setValue(
              O,
              "logDepthBufFC",
              2 / (Math.log(A.far + 1) / Math.LN2),
            ),
          (ee.isMeshPhongMaterial ||
            ee.isMeshToonMaterial ||
            ee.isMeshLambertMaterial ||
            ee.isMeshBasicMaterial ||
            ee.isMeshStandardMaterial ||
            ee.isShaderMaterial) &&
            Lt.setValue(O, "isOrthographic", A.isOrthographicCamera === !0),
          M !== A && ((M = A), (S = !0), (Et = !0)));
      }
      if (j.isSkinnedMesh) {
        (Lt.setOptional(O, j, "bindMatrix"),
          Lt.setOptional(O, j, "bindMatrixInverse"));
        const jt = j.skeleton;
        jt &&
          (jt.boneTexture === null && jt.computeBoneTexture(),
          Lt.setValue(O, "boneTexture", jt.boneTexture, Ze));
      }
      j.isBatchedMesh &&
        (Lt.setOptional(O, j, "batchingTexture"),
        Lt.setValue(O, "batchingTexture", j._matricesTexture, Ze),
        Lt.setOptional(O, j, "batchingIdTexture"),
        Lt.setValue(O, "batchingIdTexture", j._indirectTexture, Ze),
        Lt.setOptional(O, j, "batchingColorTexture"),
        j._colorsTexture !== null &&
          Lt.setValue(O, "batchingColorTexture", j._colorsTexture, Ze));
      const kt = ne.morphAttributes;
      if (
        ((kt.position !== void 0 ||
          kt.normal !== void 0 ||
          kt.color !== void 0) &&
          Se.update(j, ne, en),
        (S || Xe.receiveShadow !== j.receiveShadow) &&
          ((Xe.receiveShadow = j.receiveShadow),
          Lt.setValue(O, "receiveShadow", j.receiveShadow)),
        ee.isMeshGouraudMaterial &&
          ee.envMap !== null &&
          (($t.envMap.value = Ue),
          ($t.flipEnvMap.value =
            Ue.isCubeTexture && Ue.isRenderTargetTexture === !1 ? -1 : 1)),
        ee.isMeshStandardMaterial &&
          ee.envMap === null &&
          X.environment !== null &&
          ($t.envMapIntensity.value = X.environmentIntensity),
        S &&
          (Lt.setValue(O, "toneMappingExposure", L.toneMappingExposure),
          Xe.needsLights && Ur($t, Et),
          _e && ee.fog === !0 && pe.refreshFogUniforms($t, _e),
          pe.refreshMaterialUniforms(
            $t,
            ee,
            Q,
            ie,
            m.state.transmissionRenderTarget[A.id],
          ),
          bs.upload(O, Fr(Xe), $t, Ze)),
        ee.isShaderMaterial &&
          ee.uniformsNeedUpdate === !0 &&
          (bs.upload(O, Fr(Xe), $t, Ze), (ee.uniformsNeedUpdate = !1)),
        ee.isSpriteMaterial && Lt.setValue(O, "center", j.center),
        Lt.setValue(O, "modelViewMatrix", j.modelViewMatrix),
        Lt.setValue(O, "normalMatrix", j.normalMatrix),
        Lt.setValue(O, "modelMatrix", j.matrixWorld),
        ee.isShaderMaterial || ee.isRawShaderMaterial)
      ) {
        const jt = ee.uniformsGroups;
        for (let Yt = 0, cr = jt.length; Yt < cr; Yt++) {
          const Bn = jt[Yt];
          (nt.update(Bn, en), nt.bind(Bn, en));
        }
      }
      return en;
    }
    function Ur(A, X) {
      ((A.ambientLightColor.needsUpdate = X),
        (A.lightProbe.needsUpdate = X),
        (A.directionalLights.needsUpdate = X),
        (A.directionalLightShadows.needsUpdate = X),
        (A.pointLights.needsUpdate = X),
        (A.pointLightShadows.needsUpdate = X),
        (A.spotLights.needsUpdate = X),
        (A.spotLightShadows.needsUpdate = X),
        (A.rectAreaLights.needsUpdate = X),
        (A.hemisphereLights.needsUpdate = X));
    }
    function Is(A) {
      return (
        A.isMeshLambertMaterial ||
        A.isMeshToonMaterial ||
        A.isMeshPhongMaterial ||
        A.isMeshStandardMaterial ||
        A.isShadowMaterial ||
        (A.isShaderMaterial && A.lights === !0)
      );
    }
    ((this.getActiveCubeFace = function () {
      return P;
    }),
      (this.getActiveMipmapLevel = function () {
        return H;
      }),
      (this.getRenderTarget = function () {
        return q;
      }),
      (this.setRenderTargetTextures = function (A, X, ne) {
        const ee = Ie.get(A);
        ((ee.__autoAllocateDepthBuffer = A.resolveDepthBuffer === !1),
          ee.__autoAllocateDepthBuffer === !1 && (ee.__useRenderToTexture = !1),
          (Ie.get(A.texture).__webglTexture = X),
          (Ie.get(A.depthTexture).__webglTexture = ee.__autoAllocateDepthBuffer
            ? void 0
            : ne),
          (ee.__hasExternalTextures = !0));
      }),
      (this.setRenderTargetFramebuffer = function (A, X) {
        const ne = Ie.get(A);
        ((ne.__webglFramebuffer = X),
          (ne.__useDefaultFramebuffer = X === void 0));
      }));
    const Us = O.createFramebuffer();
    ((this.setRenderTarget = function (A, X = 0, ne = 0) {
      ((q = A), (P = X), (H = ne));
      let ee = !0,
        j = null,
        _e = !1,
        Ce = !1;
      if (A) {
        const Ue = Ie.get(A);
        if (Ue.__useDefaultFramebuffer !== void 0)
          (Oe.bindFramebuffer(O.FRAMEBUFFER, null), (ee = !1));
        else if (Ue.__webglFramebuffer === void 0) Ze.setupRenderTarget(A);
        else if (Ue.__hasExternalTextures)
          Ze.rebindTextures(
            A,
            Ie.get(A.texture).__webglTexture,
            Ie.get(A.depthTexture).__webglTexture,
          );
        else if (A.depthBuffer) {
          const ve = A.depthTexture;
          if (Ue.__boundDepthTexture !== ve) {
            if (
              ve !== null &&
              Ie.has(ve) &&
              (A.width !== ve.image.width || A.height !== ve.image.height)
            )
              throw new Error(
                "WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.",
              );
            Ze.setupDepthRenderbuffer(A);
          }
        }
        const Ge = A.texture;
        (Ge.isData3DTexture ||
          Ge.isDataArrayTexture ||
          Ge.isCompressedArrayTexture) &&
          (Ce = !0);
        const qe = Ie.get(A).__webglFramebuffer;
        (A.isWebGLCubeRenderTarget
          ? (Array.isArray(qe[X]) ? (j = qe[X][ne]) : (j = qe[X]), (_e = !0))
          : A.samples > 0 && Ze.useMultisampledRTT(A) === !1
            ? (j = Ie.get(A).__webglMultisampledFramebuffer)
            : Array.isArray(qe)
              ? (j = qe[ne])
              : (j = qe),
          z.copy(A.viewport),
          Y.copy(A.scissor),
          (te = A.scissorTest));
      } else
        (z.copy(Re).multiplyScalar(Q).floor(),
          Y.copy(We).multiplyScalar(Q).floor(),
          (te = Ke));
      if (
        (ne !== 0 && (j = Us),
        Oe.bindFramebuffer(O.FRAMEBUFFER, j) && ee && Oe.drawBuffers(A, j),
        Oe.viewport(z),
        Oe.scissor(Y),
        Oe.setScissorTest(te),
        _e)
      ) {
        const Ue = Ie.get(A.texture);
        O.framebufferTexture2D(
          O.FRAMEBUFFER,
          O.COLOR_ATTACHMENT0,
          O.TEXTURE_CUBE_MAP_POSITIVE_X + X,
          Ue.__webglTexture,
          ne,
        );
      } else if (Ce) {
        const Ue = X;
        for (let Ge = 0; Ge < A.textures.length; Ge++) {
          const qe = Ie.get(A.textures[Ge]);
          O.framebufferTextureLayer(
            O.FRAMEBUFFER,
            O.COLOR_ATTACHMENT0 + Ge,
            qe.__webglTexture,
            ne,
            Ue,
          );
        }
      } else if (A !== null && ne !== 0) {
        const Ue = Ie.get(A.texture);
        O.framebufferTexture2D(
          O.FRAMEBUFFER,
          O.COLOR_ATTACHMENT0,
          O.TEXTURE_2D,
          Ue.__webglTexture,
          ne,
        );
      }
      C = -1;
    }),
      (this.readRenderTargetPixels = function (
        A,
        X,
        ne,
        ee,
        j,
        _e,
        Ce,
        Ne = 0,
      ) {
        if (!(A && A.isWebGLRenderTarget)) {
          console.error(
            "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.",
          );
          return;
        }
        let Ue = Ie.get(A).__webglFramebuffer;
        if ((A.isWebGLCubeRenderTarget && Ce !== void 0 && (Ue = Ue[Ce]), Ue)) {
          Oe.bindFramebuffer(O.FRAMEBUFFER, Ue);
          try {
            const Ge = A.textures[Ne],
              qe = Ge.format,
              ve = Ge.type;
            if (!Ye.textureFormatReadable(qe)) {
              console.error(
                "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.",
              );
              return;
            }
            if (!Ye.textureTypeReadable(ve)) {
              console.error(
                "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.",
              );
              return;
            }
            X >= 0 &&
              X <= A.width - ee &&
              ne >= 0 &&
              ne <= A.height - j &&
              (A.textures.length > 1 && O.readBuffer(O.COLOR_ATTACHMENT0 + Ne),
              O.readPixels(X, ne, ee, j, Be.convert(qe), Be.convert(ve), _e));
          } finally {
            const Ge = q !== null ? Ie.get(q).__webglFramebuffer : null;
            Oe.bindFramebuffer(O.FRAMEBUFFER, Ge);
          }
        }
      }),
      (this.readRenderTargetPixelsAsync = async function (
        A,
        X,
        ne,
        ee,
        j,
        _e,
        Ce,
        Ne = 0,
      ) {
        if (!(A && A.isWebGLRenderTarget))
          throw new Error(
            "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.",
          );
        let Ue = Ie.get(A).__webglFramebuffer;
        if ((A.isWebGLCubeRenderTarget && Ce !== void 0 && (Ue = Ue[Ce]), Ue))
          if (X >= 0 && X <= A.width - ee && ne >= 0 && ne <= A.height - j) {
            Oe.bindFramebuffer(O.FRAMEBUFFER, Ue);
            const Ge = A.textures[Ne],
              qe = Ge.format,
              ve = Ge.type;
            if (!Ye.textureFormatReadable(qe))
              throw new Error(
                "THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.",
              );
            if (!Ye.textureTypeReadable(ve))
              throw new Error(
                "THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.",
              );
            const ct = O.createBuffer();
            (O.bindBuffer(O.PIXEL_PACK_BUFFER, ct),
              O.bufferData(O.PIXEL_PACK_BUFFER, _e.byteLength, O.STREAM_READ),
              A.textures.length > 1 && O.readBuffer(O.COLOR_ATTACHMENT0 + Ne),
              O.readPixels(X, ne, ee, j, Be.convert(qe), Be.convert(ve), 0));
            const vt = q !== null ? Ie.get(q).__webglFramebuffer : null;
            Oe.bindFramebuffer(O.FRAMEBUFFER, vt);
            const Ft = O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE, 0);
            return (
              O.flush(),
              await i_(O, Ft, 4),
              O.bindBuffer(O.PIXEL_PACK_BUFFER, ct),
              O.getBufferSubData(O.PIXEL_PACK_BUFFER, 0, _e),
              O.deleteBuffer(ct),
              O.deleteSync(Ft),
              _e
            );
          } else
            throw new Error(
              "THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.",
            );
      }),
      (this.copyFramebufferToTexture = function (A, X = null, ne = 0) {
        const ee = Math.pow(2, -ne),
          j = Math.floor(A.image.width * ee),
          _e = Math.floor(A.image.height * ee),
          Ce = X !== null ? X.x : 0,
          Ne = X !== null ? X.y : 0;
        (Ze.setTexture2D(A, 0),
          O.copyTexSubImage2D(O.TEXTURE_2D, ne, 0, 0, Ce, Ne, j, _e),
          Oe.unbindTexture());
      }));
    const Ns = O.createFramebuffer(),
      Os = O.createFramebuffer();
    ((this.copyTextureToTexture = function (
      A,
      X,
      ne = null,
      ee = null,
      j = 0,
      _e = null,
    ) {
      _e === null &&
        (j !== 0
          ? (wr(
              "WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels.",
            ),
            (_e = j),
            (j = 0))
          : (_e = 0));
      let Ce, Ne, Ue, Ge, qe, ve, ct, vt, Ft;
      const Mt = A.isCompressedTexture ? A.mipmaps[_e] : A.image;
      if (ne !== null)
        ((Ce = ne.max.x - ne.min.x),
          (Ne = ne.max.y - ne.min.y),
          (Ue = ne.isBox3 ? ne.max.z - ne.min.z : 1),
          (Ge = ne.min.x),
          (qe = ne.min.y),
          (ve = ne.isBox3 ? ne.min.z : 0));
      else {
        const kt = Math.pow(2, -j);
        ((Ce = Math.floor(Mt.width * kt)),
          (Ne = Math.floor(Mt.height * kt)),
          A.isDataArrayTexture
            ? (Ue = Mt.depth)
            : A.isData3DTexture
              ? (Ue = Math.floor(Mt.depth * kt))
              : (Ue = 1),
          (Ge = 0),
          (qe = 0),
          (ve = 0));
      }
      ee !== null
        ? ((ct = ee.x), (vt = ee.y), (Ft = ee.z))
        : ((ct = 0), (vt = 0), (Ft = 0));
      const yt = Be.convert(X.format),
        Xe = Be.convert(X.type);
      let Dt;
      (X.isData3DTexture
        ? (Ze.setTexture3D(X, 0), (Dt = O.TEXTURE_3D))
        : X.isDataArrayTexture || X.isCompressedArrayTexture
          ? (Ze.setTexture2DArray(X, 0), (Dt = O.TEXTURE_2D_ARRAY))
          : (Ze.setTexture2D(X, 0), (Dt = O.TEXTURE_2D)),
        O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL, X.flipY),
        O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL, X.premultiplyAlpha),
        O.pixelStorei(O.UNPACK_ALIGNMENT, X.unpackAlignment));
      const ht = O.getParameter(O.UNPACK_ROW_LENGTH),
        en = O.getParameter(O.UNPACK_IMAGE_HEIGHT),
        kn = O.getParameter(O.UNPACK_SKIP_PIXELS),
        S = O.getParameter(O.UNPACK_SKIP_ROWS),
        Et = O.getParameter(O.UNPACK_SKIP_IMAGES);
      (O.pixelStorei(O.UNPACK_ROW_LENGTH, Mt.width),
        O.pixelStorei(O.UNPACK_IMAGE_HEIGHT, Mt.height),
        O.pixelStorei(O.UNPACK_SKIP_PIXELS, Ge),
        O.pixelStorei(O.UNPACK_SKIP_ROWS, qe),
        O.pixelStorei(O.UNPACK_SKIP_IMAGES, ve));
      const Lt = A.isDataArrayTexture || A.isData3DTexture,
        $t = X.isDataArrayTexture || X.isData3DTexture;
      if (A.isDepthTexture) {
        const kt = Ie.get(A),
          jt = Ie.get(X),
          Yt = Ie.get(kt.__renderTarget),
          cr = Ie.get(jt.__renderTarget);
        (Oe.bindFramebuffer(O.READ_FRAMEBUFFER, Yt.__webglFramebuffer),
          Oe.bindFramebuffer(O.DRAW_FRAMEBUFFER, cr.__webglFramebuffer));
        for (let Bn = 0; Bn < Ue; Bn++)
          (Lt &&
            (O.framebufferTextureLayer(
              O.READ_FRAMEBUFFER,
              O.COLOR_ATTACHMENT0,
              Ie.get(A).__webglTexture,
              j,
              ve + Bn,
            ),
            O.framebufferTextureLayer(
              O.DRAW_FRAMEBUFFER,
              O.COLOR_ATTACHMENT0,
              Ie.get(X).__webglTexture,
              _e,
              Ft + Bn,
            )),
            O.blitFramebuffer(
              Ge,
              qe,
              Ce,
              Ne,
              ct,
              vt,
              Ce,
              Ne,
              O.DEPTH_BUFFER_BIT,
              O.NEAREST,
            ));
        (Oe.bindFramebuffer(O.READ_FRAMEBUFFER, null),
          Oe.bindFramebuffer(O.DRAW_FRAMEBUFFER, null));
      } else if (j !== 0 || A.isRenderTargetTexture || Ie.has(A)) {
        const kt = Ie.get(A),
          jt = Ie.get(X);
        (Oe.bindFramebuffer(O.READ_FRAMEBUFFER, Ns),
          Oe.bindFramebuffer(O.DRAW_FRAMEBUFFER, Os));
        for (let Yt = 0; Yt < Ue; Yt++)
          (Lt
            ? O.framebufferTextureLayer(
                O.READ_FRAMEBUFFER,
                O.COLOR_ATTACHMENT0,
                kt.__webglTexture,
                j,
                ve + Yt,
              )
            : O.framebufferTexture2D(
                O.READ_FRAMEBUFFER,
                O.COLOR_ATTACHMENT0,
                O.TEXTURE_2D,
                kt.__webglTexture,
                j,
              ),
            $t
              ? O.framebufferTextureLayer(
                  O.DRAW_FRAMEBUFFER,
                  O.COLOR_ATTACHMENT0,
                  jt.__webglTexture,
                  _e,
                  Ft + Yt,
                )
              : O.framebufferTexture2D(
                  O.DRAW_FRAMEBUFFER,
                  O.COLOR_ATTACHMENT0,
                  O.TEXTURE_2D,
                  jt.__webglTexture,
                  _e,
                ),
            j !== 0
              ? O.blitFramebuffer(
                  Ge,
                  qe,
                  Ce,
                  Ne,
                  ct,
                  vt,
                  Ce,
                  Ne,
                  O.COLOR_BUFFER_BIT,
                  O.NEAREST,
                )
              : $t
                ? O.copyTexSubImage3D(Dt, _e, ct, vt, Ft + Yt, Ge, qe, Ce, Ne)
                : O.copyTexSubImage2D(Dt, _e, ct, vt, Ge, qe, Ce, Ne));
        (Oe.bindFramebuffer(O.READ_FRAMEBUFFER, null),
          Oe.bindFramebuffer(O.DRAW_FRAMEBUFFER, null));
      } else
        $t
          ? A.isDataTexture || A.isData3DTexture
            ? O.texSubImage3D(Dt, _e, ct, vt, Ft, Ce, Ne, Ue, yt, Xe, Mt.data)
            : X.isCompressedArrayTexture
              ? O.compressedTexSubImage3D(
                  Dt,
                  _e,
                  ct,
                  vt,
                  Ft,
                  Ce,
                  Ne,
                  Ue,
                  yt,
                  Mt.data,
                )
              : O.texSubImage3D(Dt, _e, ct, vt, Ft, Ce, Ne, Ue, yt, Xe, Mt)
          : A.isDataTexture
            ? O.texSubImage2D(O.TEXTURE_2D, _e, ct, vt, Ce, Ne, yt, Xe, Mt.data)
            : A.isCompressedTexture
              ? O.compressedTexSubImage2D(
                  O.TEXTURE_2D,
                  _e,
                  ct,
                  vt,
                  Mt.width,
                  Mt.height,
                  yt,
                  Mt.data,
                )
              : O.texSubImage2D(O.TEXTURE_2D, _e, ct, vt, Ce, Ne, yt, Xe, Mt);
      (O.pixelStorei(O.UNPACK_ROW_LENGTH, ht),
        O.pixelStorei(O.UNPACK_IMAGE_HEIGHT, en),
        O.pixelStorei(O.UNPACK_SKIP_PIXELS, kn),
        O.pixelStorei(O.UNPACK_SKIP_ROWS, S),
        O.pixelStorei(O.UNPACK_SKIP_IMAGES, Et),
        _e === 0 && X.generateMipmaps && O.generateMipmap(Dt),
        Oe.unbindTexture());
    }),
      (this.initRenderTarget = function (A) {
        Ie.get(A).__webglFramebuffer === void 0 && Ze.setupRenderTarget(A);
      }),
      (this.initTexture = function (A) {
        (A.isCubeTexture
          ? Ze.setTextureCube(A, 0)
          : A.isData3DTexture
            ? Ze.setTexture3D(A, 0)
            : A.isDataArrayTexture || A.isCompressedArrayTexture
              ? Ze.setTexture2DArray(A, 0)
              : Ze.setTexture2D(A, 0),
          Oe.unbindTexture());
      }),
      (this.resetState = function () {
        ((P = 0), (H = 0), (q = null), Oe.reset(), Ae.reset());
      }),
      typeof __THREE_DEVTOOLS__ < "u" &&
        __THREE_DEVTOOLS__.dispatchEvent(
          new CustomEvent("observe", { detail: this }),
        ));
  }
  get coordinateSystem() {
    return Ln;
  }
  get outputColorSpace() {
    return this._outputColorSpace;
  }
  set outputColorSpace(e) {
    this._outputColorSpace = e;
    const t = this.getContext();
    ((t.drawingBufferColorSpace = gt._getDrawingBufferColorSpace(e)),
      (t.unpackColorSpace = gt._getUnpackColorSpace()));
  }
}
const yc = { type: "change" },
  No = { type: "start" },
  lu = { type: "end" },
  Es = new Wc(),
  Mc = new ii(),
  AE = Math.cos(70 * t_.DEG2RAD),
  Vt = new K(),
  an = 2 * Math.PI,
  bt = {
    NONE: -1,
    ROTATE: 0,
    DOLLY: 1,
    PAN: 2,
    TOUCH_ROTATE: 3,
    TOUCH_PAN: 4,
    TOUCH_DOLLY_PAN: 5,
    TOUCH_DOLLY_ROTATE: 6,
  },
  Pa = 1e-6;
class RE extends G_ {
  constructor(e, t = null) {
    (super(e, t),
      (this.state = bt.NONE),
      (this.target = new K()),
      (this.cursor = new K()),
      (this.minDistance = 0),
      (this.maxDistance = 1 / 0),
      (this.minZoom = 0),
      (this.maxZoom = 1 / 0),
      (this.minTargetRadius = 0),
      (this.maxTargetRadius = 1 / 0),
      (this.minPolarAngle = 0),
      (this.maxPolarAngle = Math.PI),
      (this.minAzimuthAngle = -1 / 0),
      (this.maxAzimuthAngle = 1 / 0),
      (this.enableDamping = !1),
      (this.dampingFactor = 0.05),
      (this.enableZoom = !0),
      (this.zoomSpeed = 1),
      (this.enableRotate = !0),
      (this.rotateSpeed = 1),
      (this.keyRotateSpeed = 1),
      (this.enablePan = !0),
      (this.panSpeed = 1),
      (this.screenSpacePanning = !0),
      (this.keyPanSpeed = 7),
      (this.zoomToCursor = !1),
      (this.autoRotate = !1),
      (this.autoRotateSpeed = 2),
      (this.keys = {
        LEFT: "ArrowLeft",
        UP: "ArrowUp",
        RIGHT: "ArrowRight",
        BOTTOM: "ArrowDown",
      }),
      (this.mouseButtons = {
        LEFT: Zi.ROTATE,
        MIDDLE: Zi.DOLLY,
        RIGHT: Zi.PAN,
      }),
      (this.touches = { ONE: Yi.ROTATE, TWO: Yi.DOLLY_PAN }),
      (this.target0 = this.target.clone()),
      (this.position0 = this.object.position.clone()),
      (this.zoom0 = this.object.zoom),
      (this._domElementKeyEvents = null),
      (this._lastPosition = new K()),
      (this._lastQuaternion = new Ci()),
      (this._lastTargetPosition = new K()),
      (this._quat = new Ci().setFromUnitVectors(e.up, new K(0, 1, 0))),
      (this._quatInverse = this._quat.clone().invert()),
      (this._spherical = new Kl()),
      (this._sphericalDelta = new Kl()),
      (this._scale = 1),
      (this._panOffset = new K()),
      (this._rotateStart = new it()),
      (this._rotateEnd = new it()),
      (this._rotateDelta = new it()),
      (this._panStart = new it()),
      (this._panEnd = new it()),
      (this._panDelta = new it()),
      (this._dollyStart = new it()),
      (this._dollyEnd = new it()),
      (this._dollyDelta = new it()),
      (this._dollyDirection = new K()),
      (this._mouse = new it()),
      (this._performCursorZoom = !1),
      (this._pointers = []),
      (this._pointerPositions = {}),
      (this._controlActive = !1),
      (this._onPointerMove = PE.bind(this)),
      (this._onPointerDown = CE.bind(this)),
      (this._onPointerUp = DE.bind(this)),
      (this._onContextMenu = kE.bind(this)),
      (this._onMouseWheel = IE.bind(this)),
      (this._onKeyDown = UE.bind(this)),
      (this._onTouchStart = NE.bind(this)),
      (this._onTouchMove = OE.bind(this)),
      (this._onMouseDown = LE.bind(this)),
      (this._onMouseMove = FE.bind(this)),
      (this._interceptControlDown = BE.bind(this)),
      (this._interceptControlUp = zE.bind(this)),
      this.domElement !== null && this.connect(this.domElement),
      this.update());
  }
  connect(e) {
    (super.connect(e),
      this.domElement.addEventListener("pointerdown", this._onPointerDown),
      this.domElement.addEventListener("pointercancel", this._onPointerUp),
      this.domElement.addEventListener("contextmenu", this._onContextMenu),
      this.domElement.addEventListener("wheel", this._onMouseWheel, {
        passive: !1,
      }),
      this.domElement
        .getRootNode()
        .addEventListener("keydown", this._interceptControlDown, {
          passive: !0,
          capture: !0,
        }),
      (this.domElement.style.touchAction = "none"));
  }
  disconnect() {
    (this.domElement.removeEventListener("pointerdown", this._onPointerDown),
      this.domElement.removeEventListener("pointermove", this._onPointerMove),
      this.domElement.removeEventListener("pointerup", this._onPointerUp),
      this.domElement.removeEventListener("pointercancel", this._onPointerUp),
      this.domElement.removeEventListener("wheel", this._onMouseWheel),
      this.domElement.removeEventListener("contextmenu", this._onContextMenu),
      this.stopListenToKeyEvents(),
      this.domElement
        .getRootNode()
        .removeEventListener("keydown", this._interceptControlDown, {
          capture: !0,
        }),
      (this.domElement.style.touchAction = "auto"));
  }
  dispose() {
    this.disconnect();
  }
  getPolarAngle() {
    return this._spherical.phi;
  }
  getAzimuthalAngle() {
    return this._spherical.theta;
  }
  getDistance() {
    return this.object.position.distanceTo(this.target);
  }
  listenToKeyEvents(e) {
    (e.addEventListener("keydown", this._onKeyDown),
      (this._domElementKeyEvents = e));
  }
  stopListenToKeyEvents() {
    this._domElementKeyEvents !== null &&
      (this._domElementKeyEvents.removeEventListener(
        "keydown",
        this._onKeyDown,
      ),
      (this._domElementKeyEvents = null));
  }
  saveState() {
    (this.target0.copy(this.target),
      this.position0.copy(this.object.position),
      (this.zoom0 = this.object.zoom));
  }
  reset() {
    (this.target.copy(this.target0),
      this.object.position.copy(this.position0),
      (this.object.zoom = this.zoom0),
      this.object.updateProjectionMatrix(),
      this.dispatchEvent(yc),
      this.update(),
      (this.state = bt.NONE));
  }
  update(e = null) {
    const t = this.object.position;
    (Vt.copy(t).sub(this.target),
      Vt.applyQuaternion(this._quat),
      this._spherical.setFromVector3(Vt),
      this.autoRotate &&
        this.state === bt.NONE &&
        this._rotateLeft(this._getAutoRotationAngle(e)),
      this.enableDamping
        ? ((this._spherical.theta +=
            this._sphericalDelta.theta * this.dampingFactor),
          (this._spherical.phi +=
            this._sphericalDelta.phi * this.dampingFactor))
        : ((this._spherical.theta += this._sphericalDelta.theta),
          (this._spherical.phi += this._sphericalDelta.phi)));
    let n = this.minAzimuthAngle,
      a = this.maxAzimuthAngle;
    (isFinite(n) &&
      isFinite(a) &&
      (n < -Math.PI ? (n += an) : n > Math.PI && (n -= an),
      a < -Math.PI ? (a += an) : a > Math.PI && (a -= an),
      n <= a
        ? (this._spherical.theta = Math.max(
            n,
            Math.min(a, this._spherical.theta),
          ))
        : (this._spherical.theta =
            this._spherical.theta > (n + a) / 2
              ? Math.max(n, this._spherical.theta)
              : Math.min(a, this._spherical.theta))),
      (this._spherical.phi = Math.max(
        this.minPolarAngle,
        Math.min(this.maxPolarAngle, this._spherical.phi),
      )),
      this._spherical.makeSafe(),
      this.enableDamping === !0
        ? this.target.addScaledVector(this._panOffset, this.dampingFactor)
        : this.target.add(this._panOffset),
      this.target.sub(this.cursor),
      this.target.clampLength(this.minTargetRadius, this.maxTargetRadius),
      this.target.add(this.cursor));
    let o = !1;
    if (
      (this.zoomToCursor && this._performCursorZoom) ||
      this.object.isOrthographicCamera
    )
      this._spherical.radius = this._clampDistance(this._spherical.radius);
    else {
      const u = this._spherical.radius;
      ((this._spherical.radius = this._clampDistance(
        this._spherical.radius * this._scale,
      )),
        (o = u != this._spherical.radius));
    }
    if (
      (Vt.setFromSpherical(this._spherical),
      Vt.applyQuaternion(this._quatInverse),
      t.copy(this.target).add(Vt),
      this.object.lookAt(this.target),
      this.enableDamping === !0
        ? ((this._sphericalDelta.theta *= 1 - this.dampingFactor),
          (this._sphericalDelta.phi *= 1 - this.dampingFactor),
          this._panOffset.multiplyScalar(1 - this.dampingFactor))
        : (this._sphericalDelta.set(0, 0, 0), this._panOffset.set(0, 0, 0)),
      this.zoomToCursor && this._performCursorZoom)
    ) {
      let u = null;
      if (this.object.isPerspectiveCamera) {
        const h = Vt.length();
        u = this._clampDistance(h * this._scale);
        const p = h - u;
        (this.object.position.addScaledVector(this._dollyDirection, p),
          this.object.updateMatrixWorld(),
          (o = !!p));
      } else if (this.object.isOrthographicCamera) {
        const h = new K(this._mouse.x, this._mouse.y, 0);
        h.unproject(this.object);
        const p = this.object.zoom;
        ((this.object.zoom = Math.max(
          this.minZoom,
          Math.min(this.maxZoom, this.object.zoom / this._scale),
        )),
          this.object.updateProjectionMatrix(),
          (o = p !== this.object.zoom));
        const d = new K(this._mouse.x, this._mouse.y, 0);
        (d.unproject(this.object),
          this.object.position.sub(d).add(h),
          this.object.updateMatrixWorld(),
          (u = Vt.length()));
      } else
        (console.warn(
          "WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled.",
        ),
          (this.zoomToCursor = !1));
      u !== null &&
        (this.screenSpacePanning
          ? this.target
              .set(0, 0, -1)
              .transformDirection(this.object.matrix)
              .multiplyScalar(u)
              .add(this.object.position)
          : (Es.origin.copy(this.object.position),
            Es.direction.set(0, 0, -1).transformDirection(this.object.matrix),
            Math.abs(this.object.up.dot(Es.direction)) < AE
              ? this.object.lookAt(this.target)
              : (Mc.setFromNormalAndCoplanarPoint(this.object.up, this.target),
                Es.intersectPlane(Mc, this.target))));
    } else if (this.object.isOrthographicCamera) {
      const u = this.object.zoom;
      ((this.object.zoom = Math.max(
        this.minZoom,
        Math.min(this.maxZoom, this.object.zoom / this._scale),
      )),
        u !== this.object.zoom &&
          (this.object.updateProjectionMatrix(), (o = !0)));
    }
    return (
      (this._scale = 1),
      (this._performCursorZoom = !1),
      o ||
      this._lastPosition.distanceToSquared(this.object.position) > Pa ||
      8 * (1 - this._lastQuaternion.dot(this.object.quaternion)) > Pa ||
      this._lastTargetPosition.distanceToSquared(this.target) > Pa
        ? (this.dispatchEvent(yc),
          this._lastPosition.copy(this.object.position),
          this._lastQuaternion.copy(this.object.quaternion),
          this._lastTargetPosition.copy(this.target),
          !0)
        : !1
    );
  }
  _getAutoRotationAngle(e) {
    return e !== null
      ? (an / 60) * this.autoRotateSpeed * e
      : (an / 60 / 60) * this.autoRotateSpeed;
  }
  _getZoomScale(e) {
    const t = Math.abs(e * 0.01);
    return Math.pow(0.95, this.zoomSpeed * t);
  }
  _rotateLeft(e) {
    this._sphericalDelta.theta -= e;
  }
  _rotateUp(e) {
    this._sphericalDelta.phi -= e;
  }
  _panLeft(e, t) {
    (Vt.setFromMatrixColumn(t, 0),
      Vt.multiplyScalar(-e),
      this._panOffset.add(Vt));
  }
  _panUp(e, t) {
    (this.screenSpacePanning === !0
      ? Vt.setFromMatrixColumn(t, 1)
      : (Vt.setFromMatrixColumn(t, 0), Vt.crossVectors(this.object.up, Vt)),
      Vt.multiplyScalar(e),
      this._panOffset.add(Vt));
  }
  _pan(e, t) {
    const n = this.domElement;
    if (this.object.isPerspectiveCamera) {
      const a = this.object.position;
      Vt.copy(a).sub(this.target);
      let o = Vt.length();
      ((o *= Math.tan(((this.object.fov / 2) * Math.PI) / 180)),
        this._panLeft((2 * e * o) / n.clientHeight, this.object.matrix),
        this._panUp((2 * t * o) / n.clientHeight, this.object.matrix));
    } else
      this.object.isOrthographicCamera
        ? (this._panLeft(
            (e * (this.object.right - this.object.left)) /
              this.object.zoom /
              n.clientWidth,
            this.object.matrix,
          ),
          this._panUp(
            (t * (this.object.top - this.object.bottom)) /
              this.object.zoom /
              n.clientHeight,
            this.object.matrix,
          ))
        : (console.warn(
            "WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.",
          ),
          (this.enablePan = !1));
  }
  _dollyOut(e) {
    this.object.isPerspectiveCamera || this.object.isOrthographicCamera
      ? (this._scale /= e)
      : (console.warn(
          "WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.",
        ),
        (this.enableZoom = !1));
  }
  _dollyIn(e) {
    this.object.isPerspectiveCamera || this.object.isOrthographicCamera
      ? (this._scale *= e)
      : (console.warn(
          "WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.",
        ),
        (this.enableZoom = !1));
  }
  _updateZoomParameters(e, t) {
    if (!this.zoomToCursor) return;
    this._performCursorZoom = !0;
    const n = this.domElement.getBoundingClientRect(),
      a = e - n.left,
      o = t - n.top,
      u = n.width,
      h = n.height;
    ((this._mouse.x = (a / u) * 2 - 1),
      (this._mouse.y = -(o / h) * 2 + 1),
      this._dollyDirection
        .set(this._mouse.x, this._mouse.y, 1)
        .unproject(this.object)
        .sub(this.object.position)
        .normalize());
  }
  _clampDistance(e) {
    return Math.max(this.minDistance, Math.min(this.maxDistance, e));
  }
  _handleMouseDownRotate(e) {
    this._rotateStart.set(e.clientX, e.clientY);
  }
  _handleMouseDownDolly(e) {
    (this._updateZoomParameters(e.clientX, e.clientX),
      this._dollyStart.set(e.clientX, e.clientY));
  }
  _handleMouseDownPan(e) {
    this._panStart.set(e.clientX, e.clientY);
  }
  _handleMouseMoveRotate(e) {
    (this._rotateEnd.set(e.clientX, e.clientY),
      this._rotateDelta
        .subVectors(this._rotateEnd, this._rotateStart)
        .multiplyScalar(this.rotateSpeed));
    const t = this.domElement;
    (this._rotateLeft((an * this._rotateDelta.x) / t.clientHeight),
      this._rotateUp((an * this._rotateDelta.y) / t.clientHeight),
      this._rotateStart.copy(this._rotateEnd),
      this.update());
  }
  _handleMouseMoveDolly(e) {
    (this._dollyEnd.set(e.clientX, e.clientY),
      this._dollyDelta.subVectors(this._dollyEnd, this._dollyStart),
      this._dollyDelta.y > 0
        ? this._dollyOut(this._getZoomScale(this._dollyDelta.y))
        : this._dollyDelta.y < 0 &&
          this._dollyIn(this._getZoomScale(this._dollyDelta.y)),
      this._dollyStart.copy(this._dollyEnd),
      this.update());
  }
  _handleMouseMovePan(e) {
    (this._panEnd.set(e.clientX, e.clientY),
      this._panDelta
        .subVectors(this._panEnd, this._panStart)
        .multiplyScalar(this.panSpeed),
      this._pan(this._panDelta.x, this._panDelta.y),
      this._panStart.copy(this._panEnd),
      this.update());
  }
  _handleMouseWheel(e) {
    (this._updateZoomParameters(e.clientX, e.clientY),
      e.deltaY < 0
        ? this._dollyIn(this._getZoomScale(e.deltaY))
        : e.deltaY > 0 && this._dollyOut(this._getZoomScale(e.deltaY)),
      this.update());
  }
  _handleKeyDown(e) {
    let t = !1;
    switch (e.code) {
      case this.keys.UP:
        (e.ctrlKey || e.metaKey || e.shiftKey
          ? this.enableRotate &&
            this._rotateUp(
              (an * this.keyRotateSpeed) / this.domElement.clientHeight,
            )
          : this.enablePan && this._pan(0, this.keyPanSpeed),
          (t = !0));
        break;
      case this.keys.BOTTOM:
        (e.ctrlKey || e.metaKey || e.shiftKey
          ? this.enableRotate &&
            this._rotateUp(
              (-an * this.keyRotateSpeed) / this.domElement.clientHeight,
            )
          : this.enablePan && this._pan(0, -this.keyPanSpeed),
          (t = !0));
        break;
      case this.keys.LEFT:
        (e.ctrlKey || e.metaKey || e.shiftKey
          ? this.enableRotate &&
            this._rotateLeft(
              (an * this.keyRotateSpeed) / this.domElement.clientHeight,
            )
          : this.enablePan && this._pan(this.keyPanSpeed, 0),
          (t = !0));
        break;
      case this.keys.RIGHT:
        (e.ctrlKey || e.metaKey || e.shiftKey
          ? this.enableRotate &&
            this._rotateLeft(
              (-an * this.keyRotateSpeed) / this.domElement.clientHeight,
            )
          : this.enablePan && this._pan(-this.keyPanSpeed, 0),
          (t = !0));
        break;
    }
    t && (e.preventDefault(), this.update());
  }
  _handleTouchStartRotate(e) {
    if (this._pointers.length === 1) this._rotateStart.set(e.pageX, e.pageY);
    else {
      const t = this._getSecondPointerPosition(e),
        n = 0.5 * (e.pageX + t.x),
        a = 0.5 * (e.pageY + t.y);
      this._rotateStart.set(n, a);
    }
  }
  _handleTouchStartPan(e) {
    if (this._pointers.length === 1) this._panStart.set(e.pageX, e.pageY);
    else {
      const t = this._getSecondPointerPosition(e),
        n = 0.5 * (e.pageX + t.x),
        a = 0.5 * (e.pageY + t.y);
      this._panStart.set(n, a);
    }
  }
  _handleTouchStartDolly(e) {
    const t = this._getSecondPointerPosition(e),
      n = e.pageX - t.x,
      a = e.pageY - t.y,
      o = Math.sqrt(n * n + a * a);
    this._dollyStart.set(0, o);
  }
  _handleTouchStartDollyPan(e) {
    (this.enableZoom && this._handleTouchStartDolly(e),
      this.enablePan && this._handleTouchStartPan(e));
  }
  _handleTouchStartDollyRotate(e) {
    (this.enableZoom && this._handleTouchStartDolly(e),
      this.enableRotate && this._handleTouchStartRotate(e));
  }
  _handleTouchMoveRotate(e) {
    if (this._pointers.length == 1) this._rotateEnd.set(e.pageX, e.pageY);
    else {
      const n = this._getSecondPointerPosition(e),
        a = 0.5 * (e.pageX + n.x),
        o = 0.5 * (e.pageY + n.y);
      this._rotateEnd.set(a, o);
    }
    this._rotateDelta
      .subVectors(this._rotateEnd, this._rotateStart)
      .multiplyScalar(this.rotateSpeed);
    const t = this.domElement;
    (this._rotateLeft((an * this._rotateDelta.x) / t.clientHeight),
      this._rotateUp((an * this._rotateDelta.y) / t.clientHeight),
      this._rotateStart.copy(this._rotateEnd));
  }
  _handleTouchMovePan(e) {
    if (this._pointers.length === 1) this._panEnd.set(e.pageX, e.pageY);
    else {
      const t = this._getSecondPointerPosition(e),
        n = 0.5 * (e.pageX + t.x),
        a = 0.5 * (e.pageY + t.y);
      this._panEnd.set(n, a);
    }
    (this._panDelta
      .subVectors(this._panEnd, this._panStart)
      .multiplyScalar(this.panSpeed),
      this._pan(this._panDelta.x, this._panDelta.y),
      this._panStart.copy(this._panEnd));
  }
  _handleTouchMoveDolly(e) {
    const t = this._getSecondPointerPosition(e),
      n = e.pageX - t.x,
      a = e.pageY - t.y,
      o = Math.sqrt(n * n + a * a);
    (this._dollyEnd.set(0, o),
      this._dollyDelta.set(
        0,
        Math.pow(this._dollyEnd.y / this._dollyStart.y, this.zoomSpeed),
      ),
      this._dollyOut(this._dollyDelta.y),
      this._dollyStart.copy(this._dollyEnd));
    const u = (e.pageX + t.x) * 0.5,
      h = (e.pageY + t.y) * 0.5;
    this._updateZoomParameters(u, h);
  }
  _handleTouchMoveDollyPan(e) {
    (this.enableZoom && this._handleTouchMoveDolly(e),
      this.enablePan && this._handleTouchMovePan(e));
  }
  _handleTouchMoveDollyRotate(e) {
    (this.enableZoom && this._handleTouchMoveDolly(e),
      this.enableRotate && this._handleTouchMoveRotate(e));
  }
  _addPointer(e) {
    this._pointers.push(e.pointerId);
  }
  _removePointer(e) {
    delete this._pointerPositions[e.pointerId];
    for (let t = 0; t < this._pointers.length; t++)
      if (this._pointers[t] == e.pointerId) {
        this._pointers.splice(t, 1);
        return;
      }
  }
  _isTrackingPointer(e) {
    for (let t = 0; t < this._pointers.length; t++)
      if (this._pointers[t] == e.pointerId) return !0;
    return !1;
  }
  _trackPointer(e) {
    let t = this._pointerPositions[e.pointerId];
    (t === void 0 &&
      ((t = new it()), (this._pointerPositions[e.pointerId] = t)),
      t.set(e.pageX, e.pageY));
  }
  _getSecondPointerPosition(e) {
    const t =
      e.pointerId === this._pointers[0] ? this._pointers[1] : this._pointers[0];
    return this._pointerPositions[t];
  }
  _customWheelEvent(e) {
    const t = e.deltaMode,
      n = { clientX: e.clientX, clientY: e.clientY, deltaY: e.deltaY };
    switch (t) {
      case 1:
        n.deltaY *= 16;
        break;
      case 2:
        n.deltaY *= 100;
        break;
    }
    return (e.ctrlKey && !this._controlActive && (n.deltaY *= 10), n);
  }
}
function CE(r) {
  this.enabled !== !1 &&
    (this._pointers.length === 0 &&
      (this.domElement.setPointerCapture(r.pointerId),
      this.domElement.addEventListener("pointermove", this._onPointerMove),
      this.domElement.addEventListener("pointerup", this._onPointerUp)),
    !this._isTrackingPointer(r) &&
      (this._addPointer(r),
      r.pointerType === "touch"
        ? this._onTouchStart(r)
        : this._onMouseDown(r)));
}
function PE(r) {
  this.enabled !== !1 &&
    (r.pointerType === "touch" ? this._onTouchMove(r) : this._onMouseMove(r));
}
function DE(r) {
  switch ((this._removePointer(r), this._pointers.length)) {
    case 0:
      (this.domElement.releasePointerCapture(r.pointerId),
        this.domElement.removeEventListener("pointermove", this._onPointerMove),
        this.domElement.removeEventListener("pointerup", this._onPointerUp),
        this.dispatchEvent(lu),
        (this.state = bt.NONE));
      break;
    case 1:
      const e = this._pointers[0],
        t = this._pointerPositions[e];
      this._onTouchStart({ pointerId: e, pageX: t.x, pageY: t.y });
      break;
  }
}
function LE(r) {
  let e;
  switch (r.button) {
    case 0:
      e = this.mouseButtons.LEFT;
      break;
    case 1:
      e = this.mouseButtons.MIDDLE;
      break;
    case 2:
      e = this.mouseButtons.RIGHT;
      break;
    default:
      e = -1;
  }
  switch (e) {
    case Zi.DOLLY:
      if (this.enableZoom === !1) return;
      (this._handleMouseDownDolly(r), (this.state = bt.DOLLY));
      break;
    case Zi.ROTATE:
      if (r.ctrlKey || r.metaKey || r.shiftKey) {
        if (this.enablePan === !1) return;
        (this._handleMouseDownPan(r), (this.state = bt.PAN));
      } else {
        if (this.enableRotate === !1) return;
        (this._handleMouseDownRotate(r), (this.state = bt.ROTATE));
      }
      break;
    case Zi.PAN:
      if (r.ctrlKey || r.metaKey || r.shiftKey) {
        if (this.enableRotate === !1) return;
        (this._handleMouseDownRotate(r), (this.state = bt.ROTATE));
      } else {
        if (this.enablePan === !1) return;
        (this._handleMouseDownPan(r), (this.state = bt.PAN));
      }
      break;
    default:
      this.state = bt.NONE;
  }
  this.state !== bt.NONE && this.dispatchEvent(No);
}
function FE(r) {
  switch (this.state) {
    case bt.ROTATE:
      if (this.enableRotate === !1) return;
      this._handleMouseMoveRotate(r);
      break;
    case bt.DOLLY:
      if (this.enableZoom === !1) return;
      this._handleMouseMoveDolly(r);
      break;
    case bt.PAN:
      if (this.enablePan === !1) return;
      this._handleMouseMovePan(r);
      break;
  }
}
function IE(r) {
  this.enabled === !1 ||
    this.enableZoom === !1 ||
    this.state !== bt.NONE ||
    (r.preventDefault(),
    this.dispatchEvent(No),
    this._handleMouseWheel(this._customWheelEvent(r)),
    this.dispatchEvent(lu));
}
function UE(r) {
  this.enabled !== !1 && this._handleKeyDown(r);
}
function NE(r) {
  switch ((this._trackPointer(r), this._pointers.length)) {
    case 1:
      switch (this.touches.ONE) {
        case Yi.ROTATE:
          if (this.enableRotate === !1) return;
          (this._handleTouchStartRotate(r), (this.state = bt.TOUCH_ROTATE));
          break;
        case Yi.PAN:
          if (this.enablePan === !1) return;
          (this._handleTouchStartPan(r), (this.state = bt.TOUCH_PAN));
          break;
        default:
          this.state = bt.NONE;
      }
      break;
    case 2:
      switch (this.touches.TWO) {
        case Yi.DOLLY_PAN:
          if (this.enableZoom === !1 && this.enablePan === !1) return;
          (this._handleTouchStartDollyPan(r),
            (this.state = bt.TOUCH_DOLLY_PAN));
          break;
        case Yi.DOLLY_ROTATE:
          if (this.enableZoom === !1 && this.enableRotate === !1) return;
          (this._handleTouchStartDollyRotate(r),
            (this.state = bt.TOUCH_DOLLY_ROTATE));
          break;
        default:
          this.state = bt.NONE;
      }
      break;
    default:
      this.state = bt.NONE;
  }
  this.state !== bt.NONE && this.dispatchEvent(No);
}
function OE(r) {
  switch ((this._trackPointer(r), this.state)) {
    case bt.TOUCH_ROTATE:
      if (this.enableRotate === !1) return;
      (this._handleTouchMoveRotate(r), this.update());
      break;
    case bt.TOUCH_PAN:
      if (this.enablePan === !1) return;
      (this._handleTouchMovePan(r), this.update());
      break;
    case bt.TOUCH_DOLLY_PAN:
      if (this.enableZoom === !1 && this.enablePan === !1) return;
      (this._handleTouchMoveDollyPan(r), this.update());
      break;
    case bt.TOUCH_DOLLY_ROTATE:
      if (this.enableZoom === !1 && this.enableRotate === !1) return;
      (this._handleTouchMoveDollyRotate(r), this.update());
      break;
    default:
      this.state = bt.NONE;
  }
}
function kE(r) {
  this.enabled !== !1 && r.preventDefault();
}
function BE(r) {
  r.key === "Control" &&
    ((this._controlActive = !0),
    this.domElement
      .getRootNode()
      .addEventListener("keyup", this._interceptControlUp, {
        passive: !0,
        capture: !0,
      }));
}
function zE(r) {
  r.key === "Control" &&
    ((this._controlActive = !1),
    this.domElement
      .getRootNode()
      .removeEventListener("keyup", this._interceptControlUp, {
        passive: !0,
        capture: !0,
      }));
}
const HE = "modulepreload",
  VE = function (r) {
    return "/" + r;
  },
  Tc = {},
  GE = function (e, t, n) {
    let a = Promise.resolve();
    if (t && t.length > 0) {
      let p = function (d) {
        return Promise.all(
          d.map((v) =>
            Promise.resolve(v).then(
              (_) => ({ status: "fulfilled", value: _ }),
              (_) => ({ status: "rejected", reason: _ }),
            ),
          ),
        );
      };
      document.getElementsByTagName("link");
      const u = document.querySelector("meta[property=csp-nonce]"),
        h = u?.nonce || u?.getAttribute("nonce");
      a = p(
        t.map((d) => {
          if (((d = VE(d)), d in Tc)) return;
          Tc[d] = !0;
          const v = d.endsWith(".css"),
            _ = v ? '[rel="stylesheet"]' : "";
          if (document.querySelector(`link[href="${d}"]${_}`)) return;
          const x = document.createElement("link");
          if (
            ((x.rel = v ? "stylesheet" : HE),
            v || (x.as = "script"),
            (x.crossOrigin = ""),
            (x.href = d),
            h && x.setAttribute("nonce", h),
            document.head.appendChild(x),
            v)
          )
            return new Promise((y, R) => {
              (x.addEventListener("load", y),
                x.addEventListener("error", () =>
                  R(new Error(`Unable to preload CSS for ${d}`)),
                ));
            });
        }),
      );
    }
    function o(u) {
      const h = new Event("vite:preloadError", { cancelable: !0 });
      if (((h.payload = u), window.dispatchEvent(h), !h.defaultPrevented))
        throw u;
    }
    return a.then((u) => {
      for (const h of u || []) h.status === "rejected" && o(h.reason);
      return e().catch(o);
    });
  };
var WE = async function (r = {}) {
  var e,
    t = r,
    n = typeof window == "object",
    a = typeof WorkerGlobalScope < "u",
    o =
      typeof process == "object" &&
      process.versions?.node &&
      process.type != "renderer",
    u = !n && !o && !a;
  if (o) {
    const { createRequire: i } = await GE(
      async () => {
        const { createRequire: s } = await Promise.resolve().then(() => JE);
        return { createRequire: s };
      },
      void 0,
    );
    var h = i(import.meta.url);
  }
  var p = "./this.program",
    d = (i, s) => {
      throw s;
    },
    v = import.meta.url,
    _ = "";
  function x(i) {
    return t.locateFile ? t.locateFile(i, _) : _ + i;
  }
  var y, R;
  if (o) {
    if (
      !(
        typeof process == "object" &&
        process.versions?.node &&
        process.type != "renderer"
      )
    )
      throw new Error(
        "not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)",
      );
    var D = process.versions.node,
      E = D.split(".").slice(0, 3);
    if (((E = E[0] * 1e4 + E[1] * 100 + E[2].split("-")[0] * 1), E < 16e4))
      throw new Error(
        "This emscripten-generated code requires node v16.0.0 (detected v" +
          D +
          ")",
      );
    var m = h("fs");
    (v.startsWith("file:") &&
      (_ = h("path").dirname(h("url").fileURLToPath(v)) + "/"),
      (R = (s) => {
        s = H(s) ? new URL(s) : s;
        var l = m.readFileSync(s);
        return (P(Buffer.isBuffer(l)), l);
      }),
      (y = async (s, l = !0) => {
        s = H(s) ? new URL(s) : s;
        var c = m.readFileSync(s, l ? void 0 : "utf8");
        return (P(l ? Buffer.isBuffer(c) : typeof c == "string"), c);
      }),
      process.argv.length > 1 && (p = process.argv[1].replace(/\\/g, "/")),
      process.argv.slice(2),
      (d = (s, l) => {
        throw ((process.exitCode = s), l);
      }));
  } else if (u) {
    if (
      (typeof process == "object" &&
        process.versions?.node &&
        process.type != "renderer") ||
      typeof window == "object" ||
      typeof WorkerGlobalScope < "u"
    )
      throw new Error(
        "not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)",
      );
  } else if (n || a) {
    try {
      _ = new URL(".", v).href;
    } catch {}
    if (!(typeof window == "object" || typeof WorkerGlobalScope < "u"))
      throw new Error(
        "not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)",
      );
    (a &&
      (R = (i) => {
        var s = new XMLHttpRequest();
        return (
          s.open("GET", i, !1),
          (s.responseType = "arraybuffer"),
          s.send(null),
          new Uint8Array(s.response)
        );
      }),
      (y = async (i) => {
        if (H(i))
          return new Promise((l, c) => {
            var f = new XMLHttpRequest();
            (f.open("GET", i, !0),
              (f.responseType = "arraybuffer"),
              (f.onload = () => {
                if (f.status == 200 || (f.status == 0 && f.response)) {
                  l(f.response);
                  return;
                }
                c(f.status);
              }),
              (f.onerror = c),
              f.send(null));
          });
        var s = await fetch(i, { credentials: "same-origin" });
        if (s.ok) return s.arrayBuffer();
        throw new Error(s.status + " : " + s.url);
      }));
  } else throw new Error("environment detection error");
  var N = console.log.bind(console),
    U = console.error.bind(console);
  P(
    !u,
    "shell environment detected but not enabled at build time.  Add `shell` to `-sENVIRONMENT` to enable.",
  );
  var L;
  typeof WebAssembly != "object" && U("no native wasm support detected");
  var k = !1;
  function P(i, s) {
    i || $("Assertion failed" + (s ? ": " + s : ""));
  }
  var H = (i) => i.startsWith("file://");
  function q() {
    var i = Ys();
    (P((i & 3) == 0),
      i == 0 && (i += 4),
      (Me[i >> 2] = 34821223),
      (Me[(i + 4) >> 2] = 2310721022),
      (Me[0] = 1668509029));
  }
  function C() {
    if (!k) {
      var i = Ys();
      i == 0 && (i += 4);
      var s = Me[i >> 2],
        l = Me[(i + 4) >> 2];
      ((s != 34821223 || l != 2310721022) &&
        $(
          `Stack overflow! Stack cookie has been overwritten at ${Le(i)}, expected hex dwords 0x89BACDFE and 0x2135467, but received ${Le(l)} ${Le(s)}`,
        ),
        Me[0] != 1668509029 &&
          $(
            "Runtime error: The application has corrupted its heap memory area (address zero)!",
          ));
    }
  }
  class M extends Error {}
  class z extends M {}
  class Y extends M {
    constructor(s) {
      (super(s), (this.excPtr = s));
      const l = cl(s);
      ((this.name = l[0]), (this.message = l[1]));
    }
  }
  (() => {
    var i = new Int16Array(1),
      s = new Int8Array(i.buffer);
    if (((i[0] = 25459), s[0] !== 115 || s[1] !== 99))
      throw "Runtime error: expected the system to be little-endian! (Run with -sSUPPORT_BIG_ENDIAN to bypass)";
  })();
  function te(i) {
    Object.getOwnPropertyDescriptor(t, i) ||
      Object.defineProperty(t, i, {
        configurable: !0,
        set() {
          $(
            `Attempt to set \`Module.${i}\` after it has already been processed.  This can happen, for example, when code is injected via '--post-js' rather than '--pre-js'`,
          );
        },
      });
  }
  function J(i) {
    return () =>
      P(
        !1,
        `call to '${i}' via reference taken before Wasm module initialization`,
      );
  }
  function he(i) {
    Object.getOwnPropertyDescriptor(t, i) &&
      $(
        `\`Module.${i}\` was supplied but \`${i}\` not included in INCOMING_MODULE_JS_API`,
      );
  }
  function ae(i) {
    return (
      i === "FS_createPath" ||
      i === "FS_createDataFile" ||
      i === "FS_createPreloadedFile" ||
      i === "FS_unlink" ||
      i === "addRunDependency" ||
      i === "FS_createLazyFile" ||
      i === "FS_createDevice" ||
      i === "removeRunDependency"
    );
  }
  function ie(i, s) {
    typeof globalThis < "u" &&
      !Object.getOwnPropertyDescriptor(globalThis, i) &&
      Object.defineProperty(globalThis, i, {
        configurable: !0,
        get() {
          s();
        },
      });
  }
  function Q(i, s) {
    ie(i, () => {
      Fe(`\`${i}\` is not longer defined by emscripten. ${s}`);
    });
  }
  (Q("buffer", "Please use HEAP8.buffer or wasmMemory.buffer"),
    Q("asm", "Please use wasmExports instead"));
  function Ee(i) {
    (ie(i, () => {
      var s = `\`${i}\` is a library symbol and not included by default; add it to your library.js __deps or to DEFAULT_LIBRARY_FUNCS_TO_INCLUDE on the command line`,
        l = i;
      (l.startsWith("_") || (l = "$" + i),
        (s += ` (e.g. -sDEFAULT_LIBRARY_FUNCS_TO_INCLUDE='${l}')`),
        ae(i) &&
          (s +=
            ". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you"),
        Fe(s));
    }),
      we(i));
  }
  function we(i) {
    Object.getOwnPropertyDescriptor(t, i) ||
      Object.defineProperty(t, i, {
        configurable: !0,
        get() {
          var s = `'${i}' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the Emscripten FAQ)`;
          (ae(i) &&
            (s +=
              ". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you"),
            $(s));
        },
      });
  }
  var Re,
    We,
    Ke,
    tt,
    Qe,
    se,
    de,
    le,
    Me,
    He,
    lt,
    At,
    O,
    xt = !1;
  function et() {
    var i = Ke.buffer;
    ((tt = new Int8Array(i)),
      (se = new Int16Array(i)),
      (Qe = new Uint8Array(i)),
      (de = new Uint16Array(i)),
      (le = new Int32Array(i)),
      (Me = new Uint32Array(i)),
      (He = new Float32Array(i)),
      (lt = new Float64Array(i)),
      (At = new BigInt64Array(i)),
      (O = new BigUint64Array(i)));
  }
  P(
    typeof Int32Array < "u" &&
      typeof Float64Array < "u" &&
      Int32Array.prototype.subarray != null &&
      Int32Array.prototype.set != null,
    "JS engine does not provide full typed array support",
  );
  function Ye() {
    if (t.preRun)
      for (
        typeof t.preRun == "function" && (t.preRun = [t.preRun]);
        t.preRun.length;

      )
        ye(t.preRun.shift());
    (te("preRun"), Be(V));
  }
  function Oe() {
    (P(!xt),
      (xt = !0),
      C(),
      !t.noFSInit && !S.initialized && S.init(),
      mi.__wasm_call_ctors(),
      (S.ignorePermissions = !1));
  }
  function Rt() {
    if ((C(), t.postRun))
      for (
        typeof t.postRun == "function" && (t.postRun = [t.postRun]);
        t.postRun.length;

      )
        nt(t.postRun.shift());
    (te("postRun"), Be(Ae));
  }
  var Ie = 0,
    Ze = null,
    Pt = {},
    St = null;
  function I(i) {
    (Ie++,
      t.monitorRunDependencies?.(Ie),
      i
        ? (P(!Pt[i]),
          (Pt[i] = 1),
          St === null &&
            typeof setInterval < "u" &&
            (St = setInterval(() => {
              if (k) {
                (clearInterval(St), (St = null));
                return;
              }
              var s = !1;
              for (var l in Pt)
                (s || ((s = !0), U("still waiting on run dependencies:")),
                  U(`dependency: ${l}`));
              s && U("(end of list)");
            }, 1e4)))
        : U("warning: run dependency added without ID"));
  }
  function b(i) {
    if (
      (Ie--,
      t.monitorRunDependencies?.(Ie),
      i
        ? (P(Pt[i]), delete Pt[i])
        : U("warning: run dependency removed without ID"),
      Ie == 0 && (St !== null && (clearInterval(St), (St = null)), Ze))
    ) {
      var s = Ze;
      ((Ze = null), s());
    }
  }
  function $(i) {
    (t.onAbort?.(i), (i = "Aborted(" + i + ")"), U(i), (k = !0));
    var s = new WebAssembly.RuntimeError(i);
    throw (We?.(s), s);
  }
  function re(i, s) {
    return (...l) => {
      P(xt, `native function \`${i}\` called before runtime initialization`);
      var c = mi[i];
      return (
        P(c, `exported native function \`${i}\` not found`),
        P(
          l.length <= s,
          `native function \`${i}\` called with ${l.length} args but expects ${s}`,
        ),
        c(...l)
      );
    };
  }
  var pe;
  function oe() {
    return t.locateFile
      ? x("mujoco.wasm")
      : new URL("./mujoco-D9UjOFNX.wasm", import.meta.url).href;
  }
  function Ve(i) {
    if (i == pe && L) return new Uint8Array(L);
    if (R) return R(i);
    throw "both async and sync fetching of the wasm failed";
  }
  async function Te(i) {
    if (!L)
      try {
        var s = await y(i);
        return new Uint8Array(s);
      } catch {}
    return Ve(i);
  }
  async function ke(i, s) {
    try {
      var l = await Te(i),
        c = await WebAssembly.instantiate(l, s);
      return c;
    } catch (f) {
      (U(`failed to asynchronously prepare wasm: ${f}`),
        H(pe) &&
          U(
            `warning: Loading from a file URI (${pe}) is not supported in most browsers. See https://emscripten.org/docs/getting_started/FAQ.html#how-do-i-run-a-local-webserver-for-testing-why-does-my-program-stall-in-downloading-or-preparing`,
          ),
        $(f));
    }
  }
  async function ze(i, s, l) {
    if (
      !i &&
      typeof WebAssembly.instantiateStreaming == "function" &&
      !H(s) &&
      !o
    )
      try {
        var c = fetch(s, { credentials: "same-origin" }),
          f = await WebAssembly.instantiateStreaming(c, l);
        return f;
      } catch (g) {
        (U(`wasm streaming compile failed: ${g}`),
          U("falling back to ArrayBuffer instantiation"));
      }
    return ke(s, l);
  }
  function Se() {
    return { env: Sl, wasi_snapshot_preview1: Sl };
  }
  async function De() {
    function i(T, w) {
      return (
        (mi = T.exports),
        (Ke = mi.memory),
        P(Ke, "memory not found in wasm exports"),
        et(),
        (Wr = mi.__indirect_function_table),
        P(Wr, "table not found in wasm exports"),
        _f(mi),
        b("wasm-instantiate"),
        mi
      );
    }
    I("wasm-instantiate");
    var s = t;
    function l(T) {
      return (
        P(
          t === s,
          "the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?",
        ),
        (s = null),
        i(T.instance)
      );
    }
    var c = Se();
    if (t.instantiateWasm)
      return new Promise((T, w) => {
        try {
          t.instantiateWasm(c, (F, W) => {
            T(i(F, W));
          });
        } catch (F) {
          (U(`Module.instantiateWasm callback failed with error: ${F}`), w(F));
        }
      });
    pe ??= oe();
    var f = await ze(L, pe, c),
      g = l(f);
    return g;
  }
  class je {
    name = "ExitStatus";
    constructor(s) {
      ((this.message = `Program terminated with exit(${s})`),
        (this.status = s));
    }
  }
  var Be = (i) => {
      for (; i.length > 0; ) i.shift()(t);
    },
    Ae = [],
    nt = (i) => Ae.push(i),
    V = [],
    ye = (i) => V.push(i),
    be = !0,
    Le = (i) => (
      P(typeof i == "number"),
      (i >>>= 0),
      "0x" + i.toString(16).padStart(8, "0")
    ),
    G = (i) => ml(i),
    B = () => gl(),
    Fe = (i) => {
      ((Fe.shown ||= {}),
        Fe.shown[i] || ((Fe.shown[i] = 1), o && (i = "warning: " + i), U(i)));
    },
    Je = typeof TextDecoder < "u" ? new TextDecoder() : void 0,
    mt = (i, s = 0, l = NaN) => {
      for (var c = s + l, f = s; i[f] && !(f >= c); ) ++f;
      if (f - s > 16 && i.buffer && Je) return Je.decode(i.subarray(s, f));
      for (var g = ""; s < f; ) {
        var T = i[s++];
        if (!(T & 128)) {
          g += String.fromCharCode(T);
          continue;
        }
        var w = i[s++] & 63;
        if ((T & 224) == 192) {
          g += String.fromCharCode(((T & 31) << 6) | w);
          continue;
        }
        var F = i[s++] & 63;
        if (
          ((T & 240) == 224
            ? (T = ((T & 15) << 12) | (w << 6) | F)
            : ((T & 248) != 240 &&
                Fe(
                  "Invalid UTF-8 leading byte " +
                    Le(T) +
                    " encountered when deserializing a UTF-8 string in wasm memory to a JS string!",
                ),
              (T = ((T & 7) << 18) | (w << 12) | (F << 6) | (i[s++] & 63))),
          T < 65536)
        )
          g += String.fromCharCode(T);
        else {
          var W = T - 65536;
          g += String.fromCharCode(55296 | (W >> 10), 56320 | (W & 1023));
        }
      }
      return g;
    },
    st = (i, s) => (
      P(
        typeof i == "number",
        `UTF8ToString expects a number (got ${typeof i})`,
      ),
      i ? mt(Qe, i, s) : ""
    ),
    vn = (i, s, l, c) =>
      $(
        `Assertion failed: ${st(i)}, at: ` +
          [s ? st(s) : "unknown filename", l, c ? st(c) : "unknown function"],
      ),
    Nt = [],
    ci = 0,
    Nn = (i) => {
      var s = new On(i);
      return (
        s.get_caught() || (s.set_caught(!0), ci--),
        s.set_rethrown(!1),
        Nt.push(s),
        Zr(i),
        El(i)
      );
    },
    lr = () => {
      if (!Nt.length) return 0;
      var i = Nt[Nt.length - 1];
      return (Zr(i.excPtr), i.excPtr);
    },
    fn = 0,
    Lr = () => {
      (ge(0, 0), P(Nt.length > 0));
      var i = Nt.pop();
      (Ks(i.excPtr), (fn = 0));
    };
  class On {
    constructor(s) {
      ((this.excPtr = s), (this.ptr = s - 24));
    }
    set_type(s) {
      Me[(this.ptr + 4) >> 2] = s;
    }
    get_type() {
      return Me[(this.ptr + 4) >> 2];
    }
    set_destructor(s) {
      Me[(this.ptr + 8) >> 2] = s;
    }
    get_destructor() {
      return Me[(this.ptr + 8) >> 2];
    }
    set_caught(s) {
      ((s = s ? 1 : 0), (tt[this.ptr + 12] = s));
    }
    get_caught() {
      return tt[this.ptr + 12] != 0;
    }
    set_rethrown(s) {
      ((s = s ? 1 : 0), (tt[this.ptr + 13] = s));
    }
    get_rethrown() {
      return tt[this.ptr + 13] != 0;
    }
    init(s, l) {
      (this.set_adjusted_ptr(0), this.set_type(s), this.set_destructor(l));
    }
    set_adjusted_ptr(s) {
      Me[(this.ptr + 16) >> 2] = s;
    }
    get_adjusted_ptr() {
      return Me[(this.ptr + 16) >> 2];
    }
  }
  var ui = (i) => dl(i),
    Kn = (i) => {
      var s = fn?.excPtr;
      if (!s) return (ui(0), 0);
      var l = new On(s);
      l.set_adjusted_ptr(s);
      var c = l.get_type();
      if (!c) return (ui(0), s);
      for (var f of i) {
        if (f === 0 || f === c) break;
        var g = l.ptr + 16;
        if (xl(f, c, g)) return (ui(f), s);
      }
      return (ui(c), s);
    },
    Fr = () => Kn([]),
    Ir = (i) => Kn([i]),
    Fs = (i, s) => Kn([i, s]),
    Ur = () => {
      var i = Nt.pop();
      i || $("no exception to throw");
      var s = i.excPtr;
      throw (
        i.get_rethrown() ||
          (Nt.push(i), i.set_rethrown(!0), i.set_caught(!1), ci++),
        (fn = new Y(s)),
        fn
      );
    },
    Is = (i) => {
      if (i) {
        var s = new On(i);
        (Nt.push(s), s.set_rethrown(!0), Ur());
      }
    },
    Us = (i, s, l) => {
      var c = new On(i);
      throw (c.init(s, l), (fn = new Y(i)), ci++, fn);
    },
    Ns = () => ci,
    Os = (i) => {
      throw (fn || (fn = new Y(i)), fn);
    },
    A = {
      isAbs: (i) => i.charAt(0) === "/",
      splitPath: (i) => {
        var s = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
        return s.exec(i).slice(1);
      },
      normalizeArray: (i, s) => {
        for (var l = 0, c = i.length - 1; c >= 0; c--) {
          var f = i[c];
          f === "."
            ? i.splice(c, 1)
            : f === ".."
              ? (i.splice(c, 1), l++)
              : l && (i.splice(c, 1), l--);
        }
        if (s) for (; l; l--) i.unshift("..");
        return i;
      },
      normalize: (i) => {
        var s = A.isAbs(i),
          l = i.slice(-1) === "/";
        return (
          (i = A.normalizeArray(
            i.split("/").filter((c) => !!c),
            !s,
          ).join("/")),
          !i && !s && (i = "."),
          i && l && (i += "/"),
          (s ? "/" : "") + i
        );
      },
      dirname: (i) => {
        var s = A.splitPath(i),
          l = s[0],
          c = s[1];
        return !l && !c ? "." : (c && (c = c.slice(0, -1)), l + c);
      },
      basename: (i) => i && i.match(/([^\/]+|\/)\/*$/)[1],
      join: (...i) => A.normalize(i.join("/")),
      join2: (i, s) => A.normalize(i + "/" + s),
    },
    X = () => {
      if (o) {
        var i = h("crypto");
        return (s) => i.randomFillSync(s);
      }
      return (s) => crypto.getRandomValues(s);
    },
    ne = (i) => {
      (ne = X())(i);
    },
    ee = {
      resolve: (...i) => {
        for (var s = "", l = !1, c = i.length - 1; c >= -1 && !l; c--) {
          var f = c >= 0 ? i[c] : S.cwd();
          if (typeof f != "string")
            throw new TypeError("Arguments to path.resolve must be strings");
          if (!f) return "";
          ((s = f + "/" + s), (l = A.isAbs(f)));
        }
        return (
          (s = A.normalizeArray(
            s.split("/").filter((g) => !!g),
            !l,
          ).join("/")),
          (l ? "/" : "") + s || "."
        );
      },
      relative: (i, s) => {
        ((i = ee.resolve(i).slice(1)), (s = ee.resolve(s).slice(1)));
        function l(W) {
          for (var Z = 0; Z < W.length && W[Z] === ""; Z++);
          for (var ce = W.length - 1; ce >= 0 && W[ce] === ""; ce--);
          return Z > ce ? [] : W.slice(Z, ce - Z + 1);
        }
        for (
          var c = l(i.split("/")),
            f = l(s.split("/")),
            g = Math.min(c.length, f.length),
            T = g,
            w = 0;
          w < g;
          w++
        )
          if (c[w] !== f[w]) {
            T = w;
            break;
          }
        for (var F = [], w = T; w < c.length; w++) F.push("..");
        return ((F = F.concat(f.slice(T))), F.join("/"));
      },
    },
    j = [],
    _e = (i) => {
      for (var s = 0, l = 0; l < i.length; ++l) {
        var c = i.charCodeAt(l);
        c <= 127
          ? s++
          : c <= 2047
            ? (s += 2)
            : c >= 55296 && c <= 57343
              ? ((s += 4), ++l)
              : (s += 3);
      }
      return s;
    },
    Ce = (i, s, l, c) => {
      if (
        (P(
          typeof i == "string",
          `stringToUTF8Array expects a string (got ${typeof i})`,
        ),
        !(c > 0))
      )
        return 0;
      for (var f = l, g = l + c - 1, T = 0; T < i.length; ++T) {
        var w = i.codePointAt(T);
        if (w <= 127) {
          if (l >= g) break;
          s[l++] = w;
        } else if (w <= 2047) {
          if (l + 1 >= g) break;
          ((s[l++] = 192 | (w >> 6)), (s[l++] = 128 | (w & 63)));
        } else if (w <= 65535) {
          if (l + 2 >= g) break;
          ((s[l++] = 224 | (w >> 12)),
            (s[l++] = 128 | ((w >> 6) & 63)),
            (s[l++] = 128 | (w & 63)));
        } else {
          if (l + 3 >= g) break;
          (w > 1114111 &&
            Fe(
              "Invalid Unicode code point " +
                Le(w) +
                " encountered when serializing a JS string to a UTF-8 string in wasm memory! (Valid unicode code points should be in range 0-0x10FFFF).",
            ),
            (s[l++] = 240 | (w >> 18)),
            (s[l++] = 128 | ((w >> 12) & 63)),
            (s[l++] = 128 | ((w >> 6) & 63)),
            (s[l++] = 128 | (w & 63)),
            T++);
        }
      }
      return ((s[l] = 0), l - f);
    },
    Ne = (i, s, l) => {
      var c = _e(i) + 1,
        f = new Array(c),
        g = Ce(i, f, 0, f.length);
      return ((f.length = g), f);
    },
    Ue = () => {
      if (!j.length) {
        var i = null;
        if (o) {
          var s = 256,
            l = Buffer.alloc(s),
            c = 0,
            f = process.stdin.fd;
          try {
            c = m.readSync(f, l, 0, s);
          } catch (g) {
            if (g.toString().includes("EOF")) c = 0;
            else throw g;
          }
          c > 0 && (i = l.slice(0, c).toString("utf-8"));
        } else
          typeof window < "u" &&
            typeof window.prompt == "function" &&
            ((i = window.prompt("Input: ")),
            i !== null &&
              (i += `
`));
        if (!i) return null;
        j = Ne(i);
      }
      return j.shift();
    },
    Ge = {
      ttys: [],
      init() {},
      shutdown() {},
      register(i, s) {
        ((Ge.ttys[i] = { input: [], output: [], ops: s }),
          S.registerDevice(i, Ge.stream_ops));
      },
      stream_ops: {
        open(i) {
          var s = Ge.ttys[i.node.rdev];
          if (!s) throw new S.ErrnoError(43);
          ((i.tty = s), (i.seekable = !1));
        },
        close(i) {
          i.tty.ops.fsync(i.tty);
        },
        fsync(i) {
          i.tty.ops.fsync(i.tty);
        },
        read(i, s, l, c, f) {
          if (!i.tty || !i.tty.ops.get_char) throw new S.ErrnoError(60);
          for (var g = 0, T = 0; T < c; T++) {
            var w;
            try {
              w = i.tty.ops.get_char(i.tty);
            } catch {
              throw new S.ErrnoError(29);
            }
            if (w === void 0 && g === 0) throw new S.ErrnoError(6);
            if (w == null) break;
            (g++, (s[l + T] = w));
          }
          return (g && (i.node.atime = Date.now()), g);
        },
        write(i, s, l, c, f) {
          if (!i.tty || !i.tty.ops.put_char) throw new S.ErrnoError(60);
          try {
            for (var g = 0; g < c; g++) i.tty.ops.put_char(i.tty, s[l + g]);
          } catch {
            throw new S.ErrnoError(29);
          }
          return (c && (i.node.mtime = i.node.ctime = Date.now()), g);
        },
      },
      default_tty_ops: {
        get_char(i) {
          return Ue();
        },
        put_char(i, s) {
          s === null || s === 10
            ? (N(mt(i.output)), (i.output = []))
            : s != 0 && i.output.push(s);
        },
        fsync(i) {
          i.output?.length > 0 && (N(mt(i.output)), (i.output = []));
        },
        ioctl_tcgets(i) {
          return {
            c_iflag: 25856,
            c_oflag: 5,
            c_cflag: 191,
            c_lflag: 35387,
            c_cc: [
              3, 28, 127, 21, 4, 0, 1, 0, 17, 19, 26, 0, 18, 15, 23, 22, 0, 0,
              0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            ],
          };
        },
        ioctl_tcsets(i, s, l) {
          return 0;
        },
        ioctl_tiocgwinsz(i) {
          return [24, 80];
        },
      },
      default_tty1_ops: {
        put_char(i, s) {
          s === null || s === 10
            ? (U(mt(i.output)), (i.output = []))
            : s != 0 && i.output.push(s);
        },
        fsync(i) {
          i.output?.length > 0 && (U(mt(i.output)), (i.output = []));
        },
      },
    },
    qe = (i) => {
      $(
        "internal error: mmapAlloc called but `emscripten_builtin_memalign` native symbol not exported",
      );
    },
    ve = {
      ops_table: null,
      mount(i) {
        return ve.createNode(null, "/", 16895, 0);
      },
      createNode(i, s, l, c) {
        if (S.isBlkdev(l) || S.isFIFO(l)) throw new S.ErrnoError(63);
        ve.ops_table ||= {
          dir: {
            node: {
              getattr: ve.node_ops.getattr,
              setattr: ve.node_ops.setattr,
              lookup: ve.node_ops.lookup,
              mknod: ve.node_ops.mknod,
              rename: ve.node_ops.rename,
              unlink: ve.node_ops.unlink,
              rmdir: ve.node_ops.rmdir,
              readdir: ve.node_ops.readdir,
              symlink: ve.node_ops.symlink,
            },
            stream: { llseek: ve.stream_ops.llseek },
          },
          file: {
            node: {
              getattr: ve.node_ops.getattr,
              setattr: ve.node_ops.setattr,
            },
            stream: {
              llseek: ve.stream_ops.llseek,
              read: ve.stream_ops.read,
              write: ve.stream_ops.write,
              mmap: ve.stream_ops.mmap,
              msync: ve.stream_ops.msync,
            },
          },
          link: {
            node: {
              getattr: ve.node_ops.getattr,
              setattr: ve.node_ops.setattr,
              readlink: ve.node_ops.readlink,
            },
            stream: {},
          },
          chrdev: {
            node: {
              getattr: ve.node_ops.getattr,
              setattr: ve.node_ops.setattr,
            },
            stream: S.chrdev_stream_ops,
          },
        };
        var f = S.createNode(i, s, l, c);
        return (
          S.isDir(f.mode)
            ? ((f.node_ops = ve.ops_table.dir.node),
              (f.stream_ops = ve.ops_table.dir.stream),
              (f.contents = {}))
            : S.isFile(f.mode)
              ? ((f.node_ops = ve.ops_table.file.node),
                (f.stream_ops = ve.ops_table.file.stream),
                (f.usedBytes = 0),
                (f.contents = null))
              : S.isLink(f.mode)
                ? ((f.node_ops = ve.ops_table.link.node),
                  (f.stream_ops = ve.ops_table.link.stream))
                : S.isChrdev(f.mode) &&
                  ((f.node_ops = ve.ops_table.chrdev.node),
                  (f.stream_ops = ve.ops_table.chrdev.stream)),
          (f.atime = f.mtime = f.ctime = Date.now()),
          i && ((i.contents[s] = f), (i.atime = i.mtime = i.ctime = f.atime)),
          f
        );
      },
      getFileDataAsTypedArray(i) {
        return i.contents
          ? i.contents.subarray
            ? i.contents.subarray(0, i.usedBytes)
            : new Uint8Array(i.contents)
          : new Uint8Array(0);
      },
      expandFileStorage(i, s) {
        var l = i.contents ? i.contents.length : 0;
        if (!(l >= s)) {
          var c = 1024 * 1024;
          ((s = Math.max(s, (l * (l < c ? 2 : 1.125)) >>> 0)),
            l != 0 && (s = Math.max(s, 256)));
          var f = i.contents;
          ((i.contents = new Uint8Array(s)),
            i.usedBytes > 0 && i.contents.set(f.subarray(0, i.usedBytes), 0));
        }
      },
      resizeFileStorage(i, s) {
        if (i.usedBytes != s)
          if (s == 0) ((i.contents = null), (i.usedBytes = 0));
          else {
            var l = i.contents;
            ((i.contents = new Uint8Array(s)),
              l && i.contents.set(l.subarray(0, Math.min(s, i.usedBytes))),
              (i.usedBytes = s));
          }
      },
      node_ops: {
        getattr(i) {
          var s = {};
          return (
            (s.dev = S.isChrdev(i.mode) ? i.id : 1),
            (s.ino = i.id),
            (s.mode = i.mode),
            (s.nlink = 1),
            (s.uid = 0),
            (s.gid = 0),
            (s.rdev = i.rdev),
            S.isDir(i.mode)
              ? (s.size = 4096)
              : S.isFile(i.mode)
                ? (s.size = i.usedBytes)
                : S.isLink(i.mode)
                  ? (s.size = i.link.length)
                  : (s.size = 0),
            (s.atime = new Date(i.atime)),
            (s.mtime = new Date(i.mtime)),
            (s.ctime = new Date(i.ctime)),
            (s.blksize = 4096),
            (s.blocks = Math.ceil(s.size / s.blksize)),
            s
          );
        },
        setattr(i, s) {
          for (const l of ["mode", "atime", "mtime", "ctime"])
            s[l] != null && (i[l] = s[l]);
          s.size !== void 0 && ve.resizeFileStorage(i, s.size);
        },
        lookup(i, s) {
          throw new S.ErrnoError(44);
        },
        mknod(i, s, l, c) {
          return ve.createNode(i, s, l, c);
        },
        rename(i, s, l) {
          var c;
          try {
            c = S.lookupNode(s, l);
          } catch {}
          if (c) {
            if (S.isDir(i.mode))
              for (var f in c.contents) throw new S.ErrnoError(55);
            S.hashRemoveNode(c);
          }
          (delete i.parent.contents[i.name],
            (s.contents[l] = i),
            (i.name = l),
            (s.ctime = s.mtime = i.parent.ctime = i.parent.mtime = Date.now()));
        },
        unlink(i, s) {
          (delete i.contents[s], (i.ctime = i.mtime = Date.now()));
        },
        rmdir(i, s) {
          var l = S.lookupNode(i, s);
          for (var c in l.contents) throw new S.ErrnoError(55);
          (delete i.contents[s], (i.ctime = i.mtime = Date.now()));
        },
        readdir(i) {
          return [".", "..", ...Object.keys(i.contents)];
        },
        symlink(i, s, l) {
          var c = ve.createNode(i, s, 41471, 0);
          return ((c.link = l), c);
        },
        readlink(i) {
          if (!S.isLink(i.mode)) throw new S.ErrnoError(28);
          return i.link;
        },
      },
      stream_ops: {
        read(i, s, l, c, f) {
          var g = i.node.contents;
          if (f >= i.node.usedBytes) return 0;
          var T = Math.min(i.node.usedBytes - f, c);
          if ((P(T >= 0), T > 8 && g.subarray)) s.set(g.subarray(f, f + T), l);
          else for (var w = 0; w < T; w++) s[l + w] = g[f + w];
          return T;
        },
        write(i, s, l, c, f, g) {
          if (
            (P(!(s instanceof ArrayBuffer)),
            s.buffer === tt.buffer && (g = !1),
            !c)
          )
            return 0;
          var T = i.node;
          if (
            ((T.mtime = T.ctime = Date.now()),
            s.subarray && (!T.contents || T.contents.subarray))
          ) {
            if (g)
              return (
                P(
                  f === 0,
                  "canOwn must imply no weird position inside the file",
                ),
                (T.contents = s.subarray(l, l + c)),
                (T.usedBytes = c),
                c
              );
            if (T.usedBytes === 0 && f === 0)
              return ((T.contents = s.slice(l, l + c)), (T.usedBytes = c), c);
            if (f + c <= T.usedBytes)
              return (T.contents.set(s.subarray(l, l + c), f), c);
          }
          if (
            (ve.expandFileStorage(T, f + c), T.contents.subarray && s.subarray)
          )
            T.contents.set(s.subarray(l, l + c), f);
          else for (var w = 0; w < c; w++) T.contents[f + w] = s[l + w];
          return ((T.usedBytes = Math.max(T.usedBytes, f + c)), c);
        },
        llseek(i, s, l) {
          var c = s;
          if (
            (l === 1
              ? (c += i.position)
              : l === 2 && S.isFile(i.node.mode) && (c += i.node.usedBytes),
            c < 0)
          )
            throw new S.ErrnoError(28);
          return c;
        },
        mmap(i, s, l, c, f) {
          if (!S.isFile(i.node.mode)) throw new S.ErrnoError(43);
          var g,
            T,
            w = i.node.contents;
          if (!(f & 2) && w && w.buffer === tt.buffer)
            ((T = !1), (g = w.byteOffset));
          else {
            if (((T = !0), (g = qe()), !g)) throw new S.ErrnoError(48);
            w &&
              ((l > 0 || l + s < w.length) &&
                (w.subarray
                  ? (w = w.subarray(l, l + s))
                  : (w = Array.prototype.slice.call(w, l, l + s))),
              tt.set(w, g));
          }
          return { ptr: g, allocated: T };
        },
        msync(i, s, l, c, f) {
          return (ve.stream_ops.write(i, s, 0, c, l, !1), 0);
        },
      },
    },
    ct = async (i) => {
      var s = await y(i);
      return (
        P(s, `Loading data file "${i}" failed (no arrayBuffer).`),
        new Uint8Array(s)
      );
    },
    vt = (...i) => S.createDataFile(...i),
    Ft = (i) => {
      for (var s = i; ; ) {
        if (!Pt[i]) return i;
        i = s + Math.random();
      }
    },
    Mt = [],
    yt = (i, s, l, c) => {
      typeof Browser < "u" && Browser.init();
      var f = !1;
      return (
        Mt.forEach((g) => {
          f || (g.canHandle(s) && (g.handle(i, s, l, c), (f = !0)));
        }),
        f
      );
    },
    Xe = (i, s, l, c, f, g, T, w, F, W) => {
      var Z = s ? ee.resolve(A.join2(i, s)) : i,
        ce = Ft(`cp ${Z}`);
      function fe(ue) {
        function me($e) {
          (W?.(), w || vt(i, s, $e, c, f, F), g?.(), b(ce));
        }
        yt(ue, Z, me, () => {
          (T?.(), b(ce));
        }) || me(ue);
      }
      (I(ce), typeof l == "string" ? ct(l).then(fe, T) : fe(l));
    },
    Dt = (i) => {
      var s = { r: 0, "r+": 2, w: 577, "w+": 578, a: 1089, "a+": 1090 },
        l = s[i];
      if (typeof l > "u") throw new Error(`Unknown file open mode: ${i}`);
      return l;
    },
    ht = (i, s) => {
      var l = 0;
      return (i && (l |= 365), s && (l |= 146), l);
    },
    en = (i) => st(fl(i)),
    kn = {
      EPERM: 63,
      ENOENT: 44,
      ESRCH: 71,
      EINTR: 27,
      EIO: 29,
      ENXIO: 60,
      E2BIG: 1,
      ENOEXEC: 45,
      EBADF: 8,
      ECHILD: 12,
      EAGAIN: 6,
      EWOULDBLOCK: 6,
      ENOMEM: 48,
      EACCES: 2,
      EFAULT: 21,
      ENOTBLK: 105,
      EBUSY: 10,
      EEXIST: 20,
      EXDEV: 75,
      ENODEV: 43,
      ENOTDIR: 54,
      EISDIR: 31,
      EINVAL: 28,
      ENFILE: 41,
      EMFILE: 33,
      ENOTTY: 59,
      ETXTBSY: 74,
      EFBIG: 22,
      ENOSPC: 51,
      ESPIPE: 70,
      EROFS: 69,
      EMLINK: 34,
      EPIPE: 64,
      EDOM: 18,
      ERANGE: 68,
      ENOMSG: 49,
      EIDRM: 24,
      ECHRNG: 106,
      EL2NSYNC: 156,
      EL3HLT: 107,
      EL3RST: 108,
      ELNRNG: 109,
      EUNATCH: 110,
      ENOCSI: 111,
      EL2HLT: 112,
      EDEADLK: 16,
      ENOLCK: 46,
      EBADE: 113,
      EBADR: 114,
      EXFULL: 115,
      ENOANO: 104,
      EBADRQC: 103,
      EBADSLT: 102,
      EDEADLOCK: 16,
      EBFONT: 101,
      ENOSTR: 100,
      ENODATA: 116,
      ETIME: 117,
      ENOSR: 118,
      ENONET: 119,
      ENOPKG: 120,
      EREMOTE: 121,
      ENOLINK: 47,
      EADV: 122,
      ESRMNT: 123,
      ECOMM: 124,
      EPROTO: 65,
      EMULTIHOP: 36,
      EDOTDOT: 125,
      EBADMSG: 9,
      ENOTUNIQ: 126,
      EBADFD: 127,
      EREMCHG: 128,
      ELIBACC: 129,
      ELIBBAD: 130,
      ELIBSCN: 131,
      ELIBMAX: 132,
      ELIBEXEC: 133,
      ENOSYS: 52,
      ENOTEMPTY: 55,
      ENAMETOOLONG: 37,
      ELOOP: 32,
      EOPNOTSUPP: 138,
      EPFNOSUPPORT: 139,
      ECONNRESET: 15,
      ENOBUFS: 42,
      EAFNOSUPPORT: 5,
      EPROTOTYPE: 67,
      ENOTSOCK: 57,
      ENOPROTOOPT: 50,
      ESHUTDOWN: 140,
      ECONNREFUSED: 14,
      EADDRINUSE: 3,
      ECONNABORTED: 13,
      ENETUNREACH: 40,
      ENETDOWN: 38,
      ETIMEDOUT: 73,
      EHOSTDOWN: 142,
      EHOSTUNREACH: 23,
      EINPROGRESS: 26,
      EALREADY: 7,
      EDESTADDRREQ: 17,
      EMSGSIZE: 35,
      EPROTONOSUPPORT: 66,
      ESOCKTNOSUPPORT: 137,
      EADDRNOTAVAIL: 4,
      ENETRESET: 39,
      EISCONN: 30,
      ENOTCONN: 53,
      ETOOMANYREFS: 141,
      EUSERS: 136,
      EDQUOT: 19,
      ESTALE: 72,
      ENOTSUP: 138,
      ENOMEDIUM: 148,
      EILSEQ: 25,
      EOVERFLOW: 61,
      ECANCELED: 11,
      ENOTRECOVERABLE: 56,
      EOWNERDEAD: 62,
      ESTRPIPE: 135,
    },
    S = {
      root: null,
      mounts: [],
      devices: {},
      streams: [],
      nextInode: 1,
      nameTable: null,
      currentPath: "/",
      initialized: !1,
      ignorePermissions: !0,
      filesystems: null,
      syncFSRequests: 0,
      readFiles: {},
      ErrnoError: class extends Error {
        name = "ErrnoError";
        constructor(i) {
          (super(xt ? en(i) : ""), (this.errno = i));
          for (var s in kn)
            if (kn[s] === i) {
              this.code = s;
              break;
            }
        }
      },
      FSStream: class {
        shared = {};
        get object() {
          return this.node;
        }
        set object(i) {
          this.node = i;
        }
        get isRead() {
          return (this.flags & 2097155) !== 1;
        }
        get isWrite() {
          return (this.flags & 2097155) !== 0;
        }
        get isAppend() {
          return this.flags & 1024;
        }
        get flags() {
          return this.shared.flags;
        }
        set flags(i) {
          this.shared.flags = i;
        }
        get position() {
          return this.shared.position;
        }
        set position(i) {
          this.shared.position = i;
        }
      },
      FSNode: class {
        node_ops = {};
        stream_ops = {};
        readMode = 365;
        writeMode = 146;
        mounted = null;
        constructor(i, s, l, c) {
          (i || (i = this),
            (this.parent = i),
            (this.mount = i.mount),
            (this.id = S.nextInode++),
            (this.name = s),
            (this.mode = l),
            (this.rdev = c),
            (this.atime = this.mtime = this.ctime = Date.now()));
        }
        get read() {
          return (this.mode & this.readMode) === this.readMode;
        }
        set read(i) {
          i ? (this.mode |= this.readMode) : (this.mode &= ~this.readMode);
        }
        get write() {
          return (this.mode & this.writeMode) === this.writeMode;
        }
        set write(i) {
          i ? (this.mode |= this.writeMode) : (this.mode &= ~this.writeMode);
        }
        get isFolder() {
          return S.isDir(this.mode);
        }
        get isDevice() {
          return S.isChrdev(this.mode);
        }
      },
      lookupPath(i, s = {}) {
        if (!i) throw new S.ErrnoError(44);
        ((s.follow_mount ??= !0), A.isAbs(i) || (i = S.cwd() + "/" + i));
        e: for (var l = 0; l < 40; l++) {
          for (
            var c = i.split("/").filter((W) => !!W), f = S.root, g = "/", T = 0;
            T < c.length;
            T++
          ) {
            var w = T === c.length - 1;
            if (w && s.parent) break;
            if (c[T] !== ".") {
              if (c[T] === "..") {
                if (((g = A.dirname(g)), S.isRoot(f))) {
                  i = g + "/" + c.slice(T + 1).join("/");
                  continue e;
                } else f = f.parent;
                continue;
              }
              g = A.join2(g, c[T]);
              try {
                f = S.lookupNode(f, c[T]);
              } catch (W) {
                if (W?.errno === 44 && w && s.noent_okay) return { path: g };
                throw W;
              }
              if (
                (S.isMountpoint(f) &&
                  (!w || s.follow_mount) &&
                  (f = f.mounted.root),
                S.isLink(f.mode) && (!w || s.follow))
              ) {
                if (!f.node_ops.readlink) throw new S.ErrnoError(52);
                var F = f.node_ops.readlink(f);
                (A.isAbs(F) || (F = A.dirname(g) + "/" + F),
                  (i = F + "/" + c.slice(T + 1).join("/")));
                continue e;
              }
            }
          }
          return { path: g, node: f };
        }
        throw new S.ErrnoError(32);
      },
      getPath(i) {
        for (var s; ; ) {
          if (S.isRoot(i)) {
            var l = i.mount.mountpoint;
            return s ? (l[l.length - 1] !== "/" ? `${l}/${s}` : l + s) : l;
          }
          ((s = s ? `${i.name}/${s}` : i.name), (i = i.parent));
        }
      },
      hashName(i, s) {
        for (var l = 0, c = 0; c < s.length; c++)
          l = ((l << 5) - l + s.charCodeAt(c)) | 0;
        return ((i + l) >>> 0) % S.nameTable.length;
      },
      hashAddNode(i) {
        var s = S.hashName(i.parent.id, i.name);
        ((i.name_next = S.nameTable[s]), (S.nameTable[s] = i));
      },
      hashRemoveNode(i) {
        var s = S.hashName(i.parent.id, i.name);
        if (S.nameTable[s] === i) S.nameTable[s] = i.name_next;
        else
          for (var l = S.nameTable[s]; l; ) {
            if (l.name_next === i) {
              l.name_next = i.name_next;
              break;
            }
            l = l.name_next;
          }
      },
      lookupNode(i, s) {
        var l = S.mayLookup(i);
        if (l) throw new S.ErrnoError(l);
        for (
          var c = S.hashName(i.id, s), f = S.nameTable[c];
          f;
          f = f.name_next
        ) {
          var g = f.name;
          if (f.parent.id === i.id && g === s) return f;
        }
        return S.lookup(i, s);
      },
      createNode(i, s, l, c) {
        P(typeof i == "object");
        var f = new S.FSNode(i, s, l, c);
        return (S.hashAddNode(f), f);
      },
      destroyNode(i) {
        S.hashRemoveNode(i);
      },
      isRoot(i) {
        return i === i.parent;
      },
      isMountpoint(i) {
        return !!i.mounted;
      },
      isFile(i) {
        return (i & 61440) === 32768;
      },
      isDir(i) {
        return (i & 61440) === 16384;
      },
      isLink(i) {
        return (i & 61440) === 40960;
      },
      isChrdev(i) {
        return (i & 61440) === 8192;
      },
      isBlkdev(i) {
        return (i & 61440) === 24576;
      },
      isFIFO(i) {
        return (i & 61440) === 4096;
      },
      isSocket(i) {
        return (i & 49152) === 49152;
      },
      flagsToPermissionString(i) {
        var s = ["r", "w", "rw"][i & 3];
        return (i & 512 && (s += "w"), s);
      },
      nodePermissions(i, s) {
        return S.ignorePermissions
          ? 0
          : (s.includes("r") && !(i.mode & 292)) ||
              (s.includes("w") && !(i.mode & 146)) ||
              (s.includes("x") && !(i.mode & 73))
            ? 2
            : 0;
      },
      mayLookup(i) {
        if (!S.isDir(i.mode)) return 54;
        var s = S.nodePermissions(i, "x");
        return s || (i.node_ops.lookup ? 0 : 2);
      },
      mayCreate(i, s) {
        if (!S.isDir(i.mode)) return 54;
        try {
          var l = S.lookupNode(i, s);
          return 20;
        } catch {}
        return S.nodePermissions(i, "wx");
      },
      mayDelete(i, s, l) {
        var c;
        try {
          c = S.lookupNode(i, s);
        } catch (g) {
          return g.errno;
        }
        var f = S.nodePermissions(i, "wx");
        if (f) return f;
        if (l) {
          if (!S.isDir(c.mode)) return 54;
          if (S.isRoot(c) || S.getPath(c) === S.cwd()) return 10;
        } else if (S.isDir(c.mode)) return 31;
        return 0;
      },
      mayOpen(i, s) {
        return i
          ? S.isLink(i.mode)
            ? 32
            : S.isDir(i.mode) &&
                (S.flagsToPermissionString(s) !== "r" || s & 576)
              ? 31
              : S.nodePermissions(i, S.flagsToPermissionString(s))
          : 44;
      },
      checkOpExists(i, s) {
        if (!i) throw new S.ErrnoError(s);
        return i;
      },
      MAX_OPEN_FDS: 4096,
      nextfd() {
        for (var i = 0; i <= S.MAX_OPEN_FDS; i++) if (!S.streams[i]) return i;
        throw new S.ErrnoError(33);
      },
      getStreamChecked(i) {
        var s = S.getStream(i);
        if (!s) throw new S.ErrnoError(8);
        return s;
      },
      getStream: (i) => S.streams[i],
      createStream(i, s = -1) {
        return (
          P(s >= -1),
          (i = Object.assign(new S.FSStream(), i)),
          s == -1 && (s = S.nextfd()),
          (i.fd = s),
          (S.streams[s] = i),
          i
        );
      },
      closeStream(i) {
        S.streams[i] = null;
      },
      dupStream(i, s = -1) {
        var l = S.createStream(i, s);
        return (l.stream_ops?.dup?.(l), l);
      },
      doSetAttr(i, s, l) {
        var c = i?.stream_ops.setattr,
          f = c ? i : s;
        ((c ??= s.node_ops.setattr), S.checkOpExists(c, 63), c(f, l));
      },
      chrdev_stream_ops: {
        open(i) {
          var s = S.getDevice(i.node.rdev);
          ((i.stream_ops = s.stream_ops), i.stream_ops.open?.(i));
        },
        llseek() {
          throw new S.ErrnoError(70);
        },
      },
      major: (i) => i >> 8,
      minor: (i) => i & 255,
      makedev: (i, s) => (i << 8) | s,
      registerDevice(i, s) {
        S.devices[i] = { stream_ops: s };
      },
      getDevice: (i) => S.devices[i],
      getMounts(i) {
        for (var s = [], l = [i]; l.length; ) {
          var c = l.pop();
          (s.push(c), l.push(...c.mounts));
        }
        return s;
      },
      syncfs(i, s) {
        (typeof i == "function" && ((s = i), (i = !1)),
          S.syncFSRequests++,
          S.syncFSRequests > 1 &&
            U(
              `warning: ${S.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`,
            ));
        var l = S.getMounts(S.root.mount),
          c = 0;
        function f(T) {
          return (P(S.syncFSRequests > 0), S.syncFSRequests--, s(T));
        }
        function g(T) {
          if (T) return g.errored ? void 0 : ((g.errored = !0), f(T));
          ++c >= l.length && f(null);
        }
        l.forEach((T) => {
          if (!T.type.syncfs) return g(null);
          T.type.syncfs(T, i, g);
        });
      },
      mount(i, s, l) {
        if (typeof i == "string") throw i;
        var c = l === "/",
          f = !l,
          g;
        if (c && S.root) throw new S.ErrnoError(10);
        if (!c && !f) {
          var T = S.lookupPath(l, { follow_mount: !1 });
          if (((l = T.path), (g = T.node), S.isMountpoint(g)))
            throw new S.ErrnoError(10);
          if (!S.isDir(g.mode)) throw new S.ErrnoError(54);
        }
        var w = { type: i, opts: s, mountpoint: l, mounts: [] },
          F = i.mount(w);
        return (
          (F.mount = w),
          (w.root = F),
          c
            ? (S.root = F)
            : g && ((g.mounted = w), g.mount && g.mount.mounts.push(w)),
          F
        );
      },
      unmount(i) {
        var s = S.lookupPath(i, { follow_mount: !1 });
        if (!S.isMountpoint(s.node)) throw new S.ErrnoError(28);
        var l = s.node,
          c = l.mounted,
          f = S.getMounts(c);
        (Object.keys(S.nameTable).forEach((T) => {
          for (var w = S.nameTable[T]; w; ) {
            var F = w.name_next;
            (f.includes(w.mount) && S.destroyNode(w), (w = F));
          }
        }),
          (l.mounted = null));
        var g = l.mount.mounts.indexOf(c);
        (P(g !== -1), l.mount.mounts.splice(g, 1));
      },
      lookup(i, s) {
        return i.node_ops.lookup(i, s);
      },
      mknod(i, s, l) {
        var c = S.lookupPath(i, { parent: !0 }),
          f = c.node,
          g = A.basename(i);
        if (!g) throw new S.ErrnoError(28);
        if (g === "." || g === "..") throw new S.ErrnoError(20);
        var T = S.mayCreate(f, g);
        if (T) throw new S.ErrnoError(T);
        if (!f.node_ops.mknod) throw new S.ErrnoError(63);
        return f.node_ops.mknod(f, g, s, l);
      },
      statfs(i) {
        return S.statfsNode(S.lookupPath(i, { follow: !0 }).node);
      },
      statfsStream(i) {
        return S.statfsNode(i.node);
      },
      statfsNode(i) {
        var s = {
          bsize: 4096,
          frsize: 4096,
          blocks: 1e6,
          bfree: 5e5,
          bavail: 5e5,
          files: S.nextInode,
          ffree: S.nextInode - 1,
          fsid: 42,
          flags: 2,
          namelen: 255,
        };
        return (
          i.node_ops.statfs &&
            Object.assign(s, i.node_ops.statfs(i.mount.opts.root)),
          s
        );
      },
      create(i, s = 438) {
        return ((s &= 4095), (s |= 32768), S.mknod(i, s, 0));
      },
      mkdir(i, s = 511) {
        return ((s &= 1023), (s |= 16384), S.mknod(i, s, 0));
      },
      mkdirTree(i, s) {
        var l = i.split("/"),
          c = "";
        for (var f of l)
          if (f) {
            ((c || A.isAbs(i)) && (c += "/"), (c += f));
            try {
              S.mkdir(c, s);
            } catch (g) {
              if (g.errno != 20) throw g;
            }
          }
      },
      mkdev(i, s, l) {
        return (
          typeof l > "u" && ((l = s), (s = 438)),
          (s |= 8192),
          S.mknod(i, s, l)
        );
      },
      symlink(i, s) {
        if (!ee.resolve(i)) throw new S.ErrnoError(44);
        var l = S.lookupPath(s, { parent: !0 }),
          c = l.node;
        if (!c) throw new S.ErrnoError(44);
        var f = A.basename(s),
          g = S.mayCreate(c, f);
        if (g) throw new S.ErrnoError(g);
        if (!c.node_ops.symlink) throw new S.ErrnoError(63);
        return c.node_ops.symlink(c, f, i);
      },
      rename(i, s) {
        var l = A.dirname(i),
          c = A.dirname(s),
          f = A.basename(i),
          g = A.basename(s),
          T,
          w,
          F;
        if (
          ((T = S.lookupPath(i, { parent: !0 })),
          (w = T.node),
          (T = S.lookupPath(s, { parent: !0 })),
          (F = T.node),
          !w || !F)
        )
          throw new S.ErrnoError(44);
        if (w.mount !== F.mount) throw new S.ErrnoError(75);
        var W = S.lookupNode(w, f),
          Z = ee.relative(i, c);
        if (Z.charAt(0) !== ".") throw new S.ErrnoError(28);
        if (((Z = ee.relative(s, l)), Z.charAt(0) !== "."))
          throw new S.ErrnoError(55);
        var ce;
        try {
          ce = S.lookupNode(F, g);
        } catch {}
        if (W !== ce) {
          var fe = S.isDir(W.mode),
            ue = S.mayDelete(w, f, fe);
          if (ue) throw new S.ErrnoError(ue);
          if (((ue = ce ? S.mayDelete(F, g, fe) : S.mayCreate(F, g)), ue))
            throw new S.ErrnoError(ue);
          if (!w.node_ops.rename) throw new S.ErrnoError(63);
          if (S.isMountpoint(W) || (ce && S.isMountpoint(ce)))
            throw new S.ErrnoError(10);
          if (F !== w && ((ue = S.nodePermissions(w, "w")), ue))
            throw new S.ErrnoError(ue);
          S.hashRemoveNode(W);
          try {
            (w.node_ops.rename(W, F, g), (W.parent = F));
          } catch (me) {
            throw me;
          } finally {
            S.hashAddNode(W);
          }
        }
      },
      rmdir(i) {
        var s = S.lookupPath(i, { parent: !0 }),
          l = s.node,
          c = A.basename(i),
          f = S.lookupNode(l, c),
          g = S.mayDelete(l, c, !0);
        if (g) throw new S.ErrnoError(g);
        if (!l.node_ops.rmdir) throw new S.ErrnoError(63);
        if (S.isMountpoint(f)) throw new S.ErrnoError(10);
        (l.node_ops.rmdir(l, c), S.destroyNode(f));
      },
      readdir(i) {
        var s = S.lookupPath(i, { follow: !0 }),
          l = s.node,
          c = S.checkOpExists(l.node_ops.readdir, 54);
        return c(l);
      },
      unlink(i) {
        var s = S.lookupPath(i, { parent: !0 }),
          l = s.node;
        if (!l) throw new S.ErrnoError(44);
        var c = A.basename(i),
          f = S.lookupNode(l, c),
          g = S.mayDelete(l, c, !1);
        if (g) throw new S.ErrnoError(g);
        if (!l.node_ops.unlink) throw new S.ErrnoError(63);
        if (S.isMountpoint(f)) throw new S.ErrnoError(10);
        (l.node_ops.unlink(l, c), S.destroyNode(f));
      },
      readlink(i) {
        var s = S.lookupPath(i),
          l = s.node;
        if (!l) throw new S.ErrnoError(44);
        if (!l.node_ops.readlink) throw new S.ErrnoError(28);
        return l.node_ops.readlink(l);
      },
      stat(i, s) {
        var l = S.lookupPath(i, { follow: !s }),
          c = l.node,
          f = S.checkOpExists(c.node_ops.getattr, 63);
        return f(c);
      },
      fstat(i) {
        var s = S.getStreamChecked(i),
          l = s.node,
          c = s.stream_ops.getattr,
          f = c ? s : l;
        return ((c ??= l.node_ops.getattr), S.checkOpExists(c, 63), c(f));
      },
      lstat(i) {
        return S.stat(i, !0);
      },
      doChmod(i, s, l, c) {
        S.doSetAttr(i, s, {
          mode: (l & 4095) | (s.mode & -4096),
          ctime: Date.now(),
          dontFollow: c,
        });
      },
      chmod(i, s, l) {
        var c;
        if (typeof i == "string") {
          var f = S.lookupPath(i, { follow: !l });
          c = f.node;
        } else c = i;
        S.doChmod(null, c, s, l);
      },
      lchmod(i, s) {
        S.chmod(i, s, !0);
      },
      fchmod(i, s) {
        var l = S.getStreamChecked(i);
        S.doChmod(l, l.node, s, !1);
      },
      doChown(i, s, l) {
        S.doSetAttr(i, s, { timestamp: Date.now(), dontFollow: l });
      },
      chown(i, s, l, c) {
        var f;
        if (typeof i == "string") {
          var g = S.lookupPath(i, { follow: !c });
          f = g.node;
        } else f = i;
        S.doChown(null, f, c);
      },
      lchown(i, s, l) {
        S.chown(i, s, l, !0);
      },
      fchown(i, s, l) {
        var c = S.getStreamChecked(i);
        S.doChown(c, c.node, !1);
      },
      doTruncate(i, s, l) {
        if (S.isDir(s.mode)) throw new S.ErrnoError(31);
        if (!S.isFile(s.mode)) throw new S.ErrnoError(28);
        var c = S.nodePermissions(s, "w");
        if (c) throw new S.ErrnoError(c);
        S.doSetAttr(i, s, { size: l, timestamp: Date.now() });
      },
      truncate(i, s) {
        if (s < 0) throw new S.ErrnoError(28);
        var l;
        if (typeof i == "string") {
          var c = S.lookupPath(i, { follow: !0 });
          l = c.node;
        } else l = i;
        S.doTruncate(null, l, s);
      },
      ftruncate(i, s) {
        var l = S.getStreamChecked(i);
        if (s < 0 || (l.flags & 2097155) === 0) throw new S.ErrnoError(28);
        S.doTruncate(l, l.node, s);
      },
      utime(i, s, l) {
        var c = S.lookupPath(i, { follow: !0 }),
          f = c.node,
          g = S.checkOpExists(f.node_ops.setattr, 63);
        g(f, { atime: s, mtime: l });
      },
      open(i, s, l = 438) {
        if (i === "") throw new S.ErrnoError(44);
        ((s = typeof s == "string" ? Dt(s) : s),
          s & 64 ? (l = (l & 4095) | 32768) : (l = 0));
        var c, f;
        if (typeof i == "object") c = i;
        else {
          f = i.endsWith("/");
          var g = S.lookupPath(i, { follow: !(s & 131072), noent_okay: !0 });
          ((c = g.node), (i = g.path));
        }
        var T = !1;
        if (s & 64)
          if (c) {
            if (s & 128) throw new S.ErrnoError(20);
          } else {
            if (f) throw new S.ErrnoError(31);
            ((c = S.mknod(i, l | 511, 0)), (T = !0));
          }
        if (!c) throw new S.ErrnoError(44);
        if ((S.isChrdev(c.mode) && (s &= -513), s & 65536 && !S.isDir(c.mode)))
          throw new S.ErrnoError(54);
        if (!T) {
          var w = S.mayOpen(c, s);
          if (w) throw new S.ErrnoError(w);
        }
        (s & 512 && !T && S.truncate(c, 0), (s &= -131713));
        var F = S.createStream({
          node: c,
          path: S.getPath(c),
          flags: s,
          seekable: !0,
          position: 0,
          stream_ops: c.stream_ops,
          ungotten: [],
          error: !1,
        });
        return (
          F.stream_ops.open && F.stream_ops.open(F),
          T && S.chmod(c, l & 511),
          t.logReadFiles &&
            !(s & 1) &&
            (i in S.readFiles || (S.readFiles[i] = 1)),
          F
        );
      },
      close(i) {
        if (S.isClosed(i)) throw new S.ErrnoError(8);
        i.getdents && (i.getdents = null);
        try {
          i.stream_ops.close && i.stream_ops.close(i);
        } catch (s) {
          throw s;
        } finally {
          S.closeStream(i.fd);
        }
        i.fd = null;
      },
      isClosed(i) {
        return i.fd === null;
      },
      llseek(i, s, l) {
        if (S.isClosed(i)) throw new S.ErrnoError(8);
        if (!i.seekable || !i.stream_ops.llseek) throw new S.ErrnoError(70);
        if (l != 0 && l != 1 && l != 2) throw new S.ErrnoError(28);
        return (
          (i.position = i.stream_ops.llseek(i, s, l)),
          (i.ungotten = []),
          i.position
        );
      },
      read(i, s, l, c, f) {
        if ((P(l >= 0), c < 0 || f < 0)) throw new S.ErrnoError(28);
        if (S.isClosed(i)) throw new S.ErrnoError(8);
        if ((i.flags & 2097155) === 1) throw new S.ErrnoError(8);
        if (S.isDir(i.node.mode)) throw new S.ErrnoError(31);
        if (!i.stream_ops.read) throw new S.ErrnoError(28);
        var g = typeof f < "u";
        if (!g) f = i.position;
        else if (!i.seekable) throw new S.ErrnoError(70);
        var T = i.stream_ops.read(i, s, l, c, f);
        return (g || (i.position += T), T);
      },
      write(i, s, l, c, f, g) {
        if ((P(l >= 0), c < 0 || f < 0)) throw new S.ErrnoError(28);
        if (S.isClosed(i)) throw new S.ErrnoError(8);
        if ((i.flags & 2097155) === 0) throw new S.ErrnoError(8);
        if (S.isDir(i.node.mode)) throw new S.ErrnoError(31);
        if (!i.stream_ops.write) throw new S.ErrnoError(28);
        i.seekable && i.flags & 1024 && S.llseek(i, 0, 2);
        var T = typeof f < "u";
        if (!T) f = i.position;
        else if (!i.seekable) throw new S.ErrnoError(70);
        var w = i.stream_ops.write(i, s, l, c, f, g);
        return (T || (i.position += w), w);
      },
      mmap(i, s, l, c, f) {
        if ((c & 2) !== 0 && (f & 2) === 0 && (i.flags & 2097155) !== 2)
          throw new S.ErrnoError(2);
        if ((i.flags & 2097155) === 1) throw new S.ErrnoError(2);
        if (!i.stream_ops.mmap) throw new S.ErrnoError(43);
        if (!s) throw new S.ErrnoError(28);
        return i.stream_ops.mmap(i, s, l, c, f);
      },
      msync(i, s, l, c, f) {
        return (
          P(l >= 0),
          i.stream_ops.msync ? i.stream_ops.msync(i, s, l, c, f) : 0
        );
      },
      ioctl(i, s, l) {
        if (!i.stream_ops.ioctl) throw new S.ErrnoError(59);
        return i.stream_ops.ioctl(i, s, l);
      },
      readFile(i, s = {}) {
        if (
          ((s.flags = s.flags || 0),
          (s.encoding = s.encoding || "binary"),
          s.encoding !== "utf8" && s.encoding !== "binary")
        )
          throw new Error(`Invalid encoding type "${s.encoding}"`);
        var l = S.open(i, s.flags),
          c = S.stat(i),
          f = c.size,
          g = new Uint8Array(f);
        return (
          S.read(l, g, 0, f, 0),
          s.encoding === "utf8" && (g = mt(g)),
          S.close(l),
          g
        );
      },
      writeFile(i, s, l = {}) {
        l.flags = l.flags || 577;
        var c = S.open(i, l.flags, l.mode);
        if (
          (typeof s == "string" && (s = new Uint8Array(Ne(s))),
          ArrayBuffer.isView(s))
        )
          S.write(c, s, 0, s.byteLength, void 0, l.canOwn);
        else throw new Error("Unsupported data type");
        S.close(c);
      },
      cwd: () => S.currentPath,
      chdir(i) {
        var s = S.lookupPath(i, { follow: !0 });
        if (s.node === null) throw new S.ErrnoError(44);
        if (!S.isDir(s.node.mode)) throw new S.ErrnoError(54);
        var l = S.nodePermissions(s.node, "x");
        if (l) throw new S.ErrnoError(l);
        S.currentPath = s.path;
      },
      createDefaultDirectories() {
        (S.mkdir("/tmp"), S.mkdir("/home"), S.mkdir("/home/web_user"));
      },
      createDefaultDevices() {
        (S.mkdir("/dev"),
          S.registerDevice(S.makedev(1, 3), {
            read: () => 0,
            write: (c, f, g, T, w) => T,
            llseek: () => 0,
          }),
          S.mkdev("/dev/null", S.makedev(1, 3)),
          Ge.register(S.makedev(5, 0), Ge.default_tty_ops),
          Ge.register(S.makedev(6, 0), Ge.default_tty1_ops),
          S.mkdev("/dev/tty", S.makedev(5, 0)),
          S.mkdev("/dev/tty1", S.makedev(6, 0)));
        var i = new Uint8Array(1024),
          s = 0,
          l = () => (s === 0 && (ne(i), (s = i.byteLength)), i[--s]);
        (S.createDevice("/dev", "random", l),
          S.createDevice("/dev", "urandom", l),
          S.mkdir("/dev/shm"),
          S.mkdir("/dev/shm/tmp"));
      },
      createSpecialDirectories() {
        S.mkdir("/proc");
        var i = S.mkdir("/proc/self");
        (S.mkdir("/proc/self/fd"),
          S.mount(
            {
              mount() {
                var s = S.createNode(i, "fd", 16895, 73);
                return (
                  (s.stream_ops = { llseek: ve.stream_ops.llseek }),
                  (s.node_ops = {
                    lookup(l, c) {
                      var f = +c,
                        g = S.getStreamChecked(f),
                        T = {
                          parent: null,
                          mount: { mountpoint: "fake" },
                          node_ops: { readlink: () => g.path },
                          id: f + 1,
                        };
                      return ((T.parent = T), T);
                    },
                    readdir() {
                      return Array.from(S.streams.entries())
                        .filter(([l, c]) => c)
                        .map(([l, c]) => l.toString());
                    },
                  }),
                  s
                );
              },
            },
            {},
            "/proc/self/fd",
          ));
      },
      createStandardStreams(i, s, l) {
        (i
          ? S.createDevice("/dev", "stdin", i)
          : S.symlink("/dev/tty", "/dev/stdin"),
          s
            ? S.createDevice("/dev", "stdout", null, s)
            : S.symlink("/dev/tty", "/dev/stdout"),
          l
            ? S.createDevice("/dev", "stderr", null, l)
            : S.symlink("/dev/tty1", "/dev/stderr"));
        var c = S.open("/dev/stdin", 0),
          f = S.open("/dev/stdout", 1),
          g = S.open("/dev/stderr", 1);
        (P(c.fd === 0, `invalid handle for stdin (${c.fd})`),
          P(f.fd === 1, `invalid handle for stdout (${f.fd})`),
          P(g.fd === 2, `invalid handle for stderr (${g.fd})`));
      },
      staticInit() {
        ((S.nameTable = new Array(4096)),
          S.mount(ve, {}, "/"),
          S.createDefaultDirectories(),
          S.createDefaultDevices(),
          S.createSpecialDirectories(),
          (S.filesystems = { MEMFS: ve }));
      },
      init(i, s, l) {
        (P(
          !S.initialized,
          "FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)",
        ),
          (S.initialized = !0),
          (i ??= t.stdin),
          (s ??= t.stdout),
          (l ??= t.stderr),
          S.createStandardStreams(i, s, l));
      },
      quit() {
        ((S.initialized = !1), qs(0));
        for (var i of S.streams) i && S.close(i);
      },
      findObject(i, s) {
        var l = S.analyzePath(i, s);
        return l.exists ? l.object : null;
      },
      analyzePath(i, s) {
        try {
          var l = S.lookupPath(i, { follow: !s });
          i = l.path;
        } catch {}
        var c = {
          isRoot: !1,
          exists: !1,
          error: 0,
          name: null,
          path: null,
          object: null,
          parentExists: !1,
          parentPath: null,
          parentObject: null,
        };
        try {
          var l = S.lookupPath(i, { parent: !0 });
          ((c.parentExists = !0),
            (c.parentPath = l.path),
            (c.parentObject = l.node),
            (c.name = A.basename(i)),
            (l = S.lookupPath(i, { follow: !s })),
            (c.exists = !0),
            (c.path = l.path),
            (c.object = l.node),
            (c.name = l.node.name),
            (c.isRoot = l.path === "/"));
        } catch (f) {
          c.error = f.errno;
        }
        return c;
      },
      createPath(i, s, l, c) {
        i = typeof i == "string" ? i : S.getPath(i);
        for (var f = s.split("/").reverse(); f.length; ) {
          var g = f.pop();
          if (g) {
            var T = A.join2(i, g);
            try {
              S.mkdir(T);
            } catch (w) {
              if (w.errno != 20) throw w;
            }
            i = T;
          }
        }
        return T;
      },
      createFile(i, s, l, c, f) {
        var g = A.join2(typeof i == "string" ? i : S.getPath(i), s),
          T = ht(c, f);
        return S.create(g, T);
      },
      createDataFile(i, s, l, c, f, g) {
        var T = s;
        i &&
          ((i = typeof i == "string" ? i : S.getPath(i)),
          (T = s ? A.join2(i, s) : i));
        var w = ht(c, f),
          F = S.create(T, w);
        if (l) {
          if (typeof l == "string") {
            for (var W = new Array(l.length), Z = 0, ce = l.length; Z < ce; ++Z)
              W[Z] = l.charCodeAt(Z);
            l = W;
          }
          S.chmod(F, w | 146);
          var fe = S.open(F, 577);
          (S.write(fe, l, 0, l.length, 0, g), S.close(fe), S.chmod(F, w));
        }
      },
      createDevice(i, s, l, c) {
        var f = A.join2(typeof i == "string" ? i : S.getPath(i), s),
          g = ht(!!l, !!c);
        S.createDevice.major ??= 64;
        var T = S.makedev(S.createDevice.major++, 0);
        return (
          S.registerDevice(T, {
            open(w) {
              w.seekable = !1;
            },
            close(w) {
              c?.buffer?.length && c(10);
            },
            read(w, F, W, Z, ce) {
              for (var fe = 0, ue = 0; ue < Z; ue++) {
                var me;
                try {
                  me = l();
                } catch {
                  throw new S.ErrnoError(29);
                }
                if (me === void 0 && fe === 0) throw new S.ErrnoError(6);
                if (me == null) break;
                (fe++, (F[W + ue] = me));
              }
              return (fe && (w.node.atime = Date.now()), fe);
            },
            write(w, F, W, Z, ce) {
              for (var fe = 0; fe < Z; fe++)
                try {
                  c(F[W + fe]);
                } catch {
                  throw new S.ErrnoError(29);
                }
              return (Z && (w.node.mtime = w.node.ctime = Date.now()), fe);
            },
          }),
          S.mkdev(f, g, T)
        );
      },
      forceLoadFile(i) {
        if (i.isDevice || i.isFolder || i.link || i.contents) return !0;
        if (typeof XMLHttpRequest < "u")
          throw new Error(
            "Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.",
          );
        try {
          ((i.contents = R(i.url)), (i.usedBytes = i.contents.length));
        } catch {
          throw new S.ErrnoError(29);
        }
      },
      createLazyFile(i, s, l, c, f) {
        class g {
          lengthKnown = !1;
          chunks = [];
          get(ue) {
            if (!(ue > this.length - 1 || ue < 0)) {
              var me = ue % this.chunkSize,
                $e = (ue / this.chunkSize) | 0;
              return this.getter($e)[me];
            }
          }
          setDataGetter(ue) {
            this.getter = ue;
          }
          cacheLength() {
            var ue = new XMLHttpRequest();
            if (
              (ue.open("HEAD", l, !1),
              ue.send(null),
              !((ue.status >= 200 && ue.status < 300) || ue.status === 304))
            )
              throw new Error("Couldn't load " + l + ". Status: " + ue.status);
            var me = Number(ue.getResponseHeader("Content-length")),
              $e,
              ft =
                ($e = ue.getResponseHeader("Accept-Ranges")) && $e === "bytes",
              at =
                ($e = ue.getResponseHeader("Content-Encoding")) &&
                $e === "gzip",
              Ct = 1024 * 1024;
            ft || (Ct = me);
            var _t = (Ht, tn) => {
                if (Ht > tn)
                  throw new Error(
                    "invalid range (" +
                      Ht +
                      ", " +
                      tn +
                      ") or no bytes requested!",
                  );
                if (tn > me - 1)
                  throw new Error(
                    "only " + me + " bytes available! programmer error!",
                  );
                var Tt = new XMLHttpRequest();
                if (
                  (Tt.open("GET", l, !1),
                  me !== Ct &&
                    Tt.setRequestHeader("Range", "bytes=" + Ht + "-" + tn),
                  (Tt.responseType = "arraybuffer"),
                  Tt.overrideMimeType &&
                    Tt.overrideMimeType("text/plain; charset=x-user-defined"),
                  Tt.send(null),
                  !((Tt.status >= 200 && Tt.status < 300) || Tt.status === 304))
                )
                  throw new Error(
                    "Couldn't load " + l + ". Status: " + Tt.status,
                  );
                return Tt.response !== void 0
                  ? new Uint8Array(Tt.response || [])
                  : Ne(Tt.responseText || "");
              },
              Kt = this;
            (Kt.setDataGetter((Ht) => {
              var tn = Ht * Ct,
                Tt = (Ht + 1) * Ct - 1;
              if (
                ((Tt = Math.min(Tt, me - 1)),
                typeof Kt.chunks[Ht] > "u" && (Kt.chunks[Ht] = _t(tn, Tt)),
                typeof Kt.chunks[Ht] > "u")
              )
                throw new Error("doXHR failed!");
              return Kt.chunks[Ht];
            }),
              (at || !me) &&
                ((Ct = me = 1),
                (me = this.getter(0).length),
                (Ct = me),
                N(
                  "LazyFiles on gzip forces download of the whole file when length is accessed",
                )),
              (this._length = me),
              (this._chunkSize = Ct),
              (this.lengthKnown = !0));
          }
          get length() {
            return (this.lengthKnown || this.cacheLength(), this._length);
          }
          get chunkSize() {
            return (this.lengthKnown || this.cacheLength(), this._chunkSize);
          }
        }
        if (typeof XMLHttpRequest < "u") {
          if (!a)
            throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
          var T = new g(),
            w = { isDevice: !1, contents: T };
        } else var w = { isDevice: !1, url: l };
        var F = S.createFile(i, s, w, c, f);
        (w.contents
          ? (F.contents = w.contents)
          : w.url && ((F.contents = null), (F.url = w.url)),
          Object.defineProperties(F, {
            usedBytes: {
              get: function () {
                return this.contents.length;
              },
            },
          }));
        var W = {},
          Z = Object.keys(F.stream_ops);
        Z.forEach((fe) => {
          var ue = F.stream_ops[fe];
          W[fe] = (...me) => (S.forceLoadFile(F), ue(...me));
        });
        function ce(fe, ue, me, $e, ft) {
          var at = fe.node.contents;
          if (ft >= at.length) return 0;
          var Ct = Math.min(at.length - ft, $e);
          if ((P(Ct >= 0), at.slice))
            for (var _t = 0; _t < Ct; _t++) ue[me + _t] = at[ft + _t];
          else for (var _t = 0; _t < Ct; _t++) ue[me + _t] = at.get(ft + _t);
          return Ct;
        }
        return (
          (W.read = (fe, ue, me, $e, ft) => (
            S.forceLoadFile(F),
            ce(fe, ue, me, $e, ft)
          )),
          (W.mmap = (fe, ue, me, $e, ft) => {
            S.forceLoadFile(F);
            var at = qe();
            if (!at) throw new S.ErrnoError(48);
            return (ce(fe, tt, at, ue, me), { ptr: at, allocated: !0 });
          }),
          (F.stream_ops = W),
          F
        );
      },
      absolutePath() {
        $("FS.absolutePath has been removed; use PATH_FS.resolve instead");
      },
      createFolder() {
        $("FS.createFolder has been removed; use FS.mkdir instead");
      },
      createLink() {
        $("FS.createLink has been removed; use FS.symlink instead");
      },
      joinPath() {
        $("FS.joinPath has been removed; use PATH.join instead");
      },
      mmapAlloc() {
        $("FS.mmapAlloc has been replaced by the top level function mmapAlloc");
      },
      standardizePath() {
        $("FS.standardizePath has been removed; use PATH.normalize instead");
      },
    },
    Et = {
      DEFAULT_POLLMASK: 5,
      calculateAt(i, s, l) {
        if (A.isAbs(s)) return s;
        var c;
        if (i === -100) c = S.cwd();
        else {
          var f = Et.getStreamFromFD(i);
          c = f.path;
        }
        if (s.length == 0) {
          if (!l) throw new S.ErrnoError(44);
          return c;
        }
        return c + "/" + s;
      },
      writeStat(i, s) {
        ((le[i >> 2] = s.dev),
          (le[(i + 4) >> 2] = s.mode),
          (Me[(i + 8) >> 2] = s.nlink),
          (le[(i + 12) >> 2] = s.uid),
          (le[(i + 16) >> 2] = s.gid),
          (le[(i + 20) >> 2] = s.rdev),
          (At[(i + 24) >> 3] = BigInt(s.size)),
          (le[(i + 32) >> 2] = 4096),
          (le[(i + 36) >> 2] = s.blocks));
        var l = s.atime.getTime(),
          c = s.mtime.getTime(),
          f = s.ctime.getTime();
        return (
          (At[(i + 40) >> 3] = BigInt(Math.floor(l / 1e3))),
          (Me[(i + 48) >> 2] = (l % 1e3) * 1e3 * 1e3),
          (At[(i + 56) >> 3] = BigInt(Math.floor(c / 1e3))),
          (Me[(i + 64) >> 2] = (c % 1e3) * 1e3 * 1e3),
          (At[(i + 72) >> 3] = BigInt(Math.floor(f / 1e3))),
          (Me[(i + 80) >> 2] = (f % 1e3) * 1e3 * 1e3),
          (At[(i + 88) >> 3] = BigInt(s.ino)),
          0
        );
      },
      writeStatFs(i, s) {
        ((le[(i + 4) >> 2] = s.bsize),
          (le[(i + 40) >> 2] = s.bsize),
          (le[(i + 8) >> 2] = s.blocks),
          (le[(i + 12) >> 2] = s.bfree),
          (le[(i + 16) >> 2] = s.bavail),
          (le[(i + 20) >> 2] = s.files),
          (le[(i + 24) >> 2] = s.ffree),
          (le[(i + 28) >> 2] = s.fsid),
          (le[(i + 44) >> 2] = s.flags),
          (le[(i + 36) >> 2] = s.namelen));
      },
      doMsync(i, s, l, c, f) {
        if (!S.isFile(s.node.mode)) throw new S.ErrnoError(43);
        if (c & 2) return 0;
        var g = Qe.slice(i, i + l);
        S.msync(s, g, f, l, c);
      },
      getStreamFromFD(i) {
        var s = S.getStreamChecked(i);
        return s;
      },
      varargs: void 0,
      getStr(i) {
        var s = st(i);
        return s;
      },
    };
  function Lt(i, s, l) {
    try {
      var c = Et.getStreamFromFD(i);
      if ((P(!l), c.fd === s)) return -28;
      if (s < 0 || s >= S.MAX_OPEN_FDS) return -8;
      var f = S.getStream(s);
      return (f && S.close(f), S.dupStream(c, s).fd);
    } catch (g) {
      if (typeof S > "u" || g.name !== "ErrnoError") throw g;
      return -g.errno;
    }
  }
  var $t = () => {
      P(Et.varargs != null);
      var i = le[+Et.varargs >> 2];
      return ((Et.varargs += 4), i);
    },
    kt = $t;
  function jt(i, s, l) {
    Et.varargs = l;
    try {
      var c = Et.getStreamFromFD(i);
      switch (s) {
        case 0: {
          var f = $t();
          if (f < 0) return -28;
          for (; S.streams[f]; ) f++;
          var g;
          return ((g = S.dupStream(c, f)), g.fd);
        }
        case 1:
        case 2:
          return 0;
        case 3:
          return c.flags;
        case 4: {
          var f = $t();
          return ((c.flags |= f), 0);
        }
        case 12: {
          var f = kt(),
            T = 0;
          return ((se[(f + T) >> 1] = 2), 0);
        }
        case 13:
        case 14:
          return 0;
      }
      return -28;
    } catch (w) {
      if (typeof S > "u" || w.name !== "ErrnoError") throw w;
      return -w.errno;
    }
  }
  function Yt(i, s) {
    try {
      return Et.writeStat(s, S.fstat(i));
    } catch (l) {
      if (typeof S > "u" || l.name !== "ErrnoError") throw l;
      return -l.errno;
    }
  }
  function cr(i, s, l) {
    Et.varargs = l;
    try {
      var c = Et.getStreamFromFD(i);
      switch (s) {
        case 21509:
          return c.tty ? 0 : -59;
        case 21505: {
          if (!c.tty) return -59;
          if (c.tty.ops.ioctl_tcgets) {
            var f = c.tty.ops.ioctl_tcgets(c),
              g = kt();
            ((le[g >> 2] = f.c_iflag || 0),
              (le[(g + 4) >> 2] = f.c_oflag || 0),
              (le[(g + 8) >> 2] = f.c_cflag || 0),
              (le[(g + 12) >> 2] = f.c_lflag || 0));
            for (var T = 0; T < 32; T++) tt[g + T + 17] = f.c_cc[T] || 0;
            return 0;
          }
          return 0;
        }
        case 21510:
        case 21511:
        case 21512:
          return c.tty ? 0 : -59;
        case 21506:
        case 21507:
        case 21508: {
          if (!c.tty) return -59;
          if (c.tty.ops.ioctl_tcsets) {
            for (
              var g = kt(),
                w = le[g >> 2],
                F = le[(g + 4) >> 2],
                W = le[(g + 8) >> 2],
                Z = le[(g + 12) >> 2],
                ce = [],
                T = 0;
              T < 32;
              T++
            )
              ce.push(tt[g + T + 17]);
            return c.tty.ops.ioctl_tcsets(c.tty, s, {
              c_iflag: w,
              c_oflag: F,
              c_cflag: W,
              c_lflag: Z,
              c_cc: ce,
            });
          }
          return 0;
        }
        case 21519: {
          if (!c.tty) return -59;
          var g = kt();
          return ((le[g >> 2] = 0), 0);
        }
        case 21520:
          return c.tty ? -28 : -59;
        case 21531: {
          var g = kt();
          return S.ioctl(c, s, g);
        }
        case 21523: {
          if (!c.tty) return -59;
          if (c.tty.ops.ioctl_tiocgwinsz) {
            var fe = c.tty.ops.ioctl_tiocgwinsz(c.tty),
              g = kt();
            ((se[g >> 1] = fe[0]), (se[(g + 2) >> 1] = fe[1]));
          }
          return 0;
        }
        case 21524:
          return c.tty ? 0 : -59;
        case 21515:
          return c.tty ? 0 : -59;
        default:
          return -28;
      }
    } catch (ue) {
      if (typeof S > "u" || ue.name !== "ErrnoError") throw ue;
      return -ue.errno;
    }
  }
  function Bn(i, s) {
    try {
      return ((i = Et.getStr(i)), Et.writeStat(s, S.lstat(i)));
    } catch (l) {
      if (typeof S > "u" || l.name !== "ErrnoError") throw l;
      return -l.errno;
    }
  }
  function cu(i, s, l, c) {
    try {
      s = Et.getStr(s);
      var f = c & 256,
        g = c & 4096;
      return (
        (c = c & -6401),
        P(!c, `unknown flags in __syscall_newfstatat: ${c}`),
        (s = Et.calculateAt(i, s, g)),
        Et.writeStat(l, f ? S.lstat(s) : S.stat(s))
      );
    } catch (T) {
      if (typeof S > "u" || T.name !== "ErrnoError") throw T;
      return -T.errno;
    }
  }
  function uu(i, s, l, c) {
    Et.varargs = c;
    try {
      ((s = Et.getStr(s)), (s = Et.calculateAt(i, s)));
      var f = c ? $t() : 0;
      return S.open(s, l, f).fd;
    } catch (g) {
      if (typeof S > "u" || g.name !== "ErrnoError") throw g;
      return -g.errno;
    }
  }
  function hu(i, s) {
    try {
      return ((i = Et.getStr(i)), Et.writeStat(s, S.stat(i)));
    } catch (l) {
      if (typeof S > "u" || l.name !== "ErrnoError") throw l;
      return -l.errno;
    }
  }
  var fu = () => $("native code called abort()"),
    Bt = (i) => {
      for (var s = ""; ; ) {
        var l = Qe[i++];
        if (!l) return s;
        s += String.fromCharCode(l);
      }
    },
    Fi = {},
    hi = {},
    Nr = {},
    ur = class extends Error {
      constructor(s) {
        (super(s), (this.name = "BindingError"));
      }
    },
    dt = (i) => {
      throw new ur(i);
    };
  function du(i, s, l = {}) {
    var c = s.name;
    if (
      (i || dt(`type "${c}" must have a positive integer typeid pointer`),
      hi.hasOwnProperty(i))
    ) {
      if (l.ignoreDuplicateRegistrations) return;
      dt(`Cannot register type '${c}' twice`);
    }
    if (((hi[i] = s), delete Nr[i], Fi.hasOwnProperty(i))) {
      var f = Fi[i];
      (delete Fi[i], f.forEach((g) => g()));
    }
  }
  function dn(i, s, l = {}) {
    if (s.argPackAdvance === void 0)
      throw new TypeError(
        "registerType registeredInstance requires argPackAdvance",
      );
    return du(i, s, l);
  }
  var Oo = (i, s, l) => {
      switch (s) {
        case 1:
          return l ? (c) => tt[c] : (c) => Qe[c];
        case 2:
          return l ? (c) => se[c >> 1] : (c) => de[c >> 1];
        case 4:
          return l ? (c) => le[c >> 2] : (c) => Me[c >> 2];
        case 8:
          return l ? (c) => At[c >> 3] : (c) => O[c >> 3];
        default:
          throw new TypeError(`invalid integer width (${s}): ${i}`);
      }
    },
    fi = (i) => {
      if (i === null) return "null";
      var s = typeof i;
      return s === "object" || s === "array" || s === "function"
        ? i.toString()
        : "" + i;
    },
    ko = (i, s, l, c) => {
      if (s < l || s > c)
        throw new TypeError(
          `Passing a number "${fi(s)}" from JS side to C/C++ side to an argument of type "${i}", which is outside the valid range [${l}, ${c}]!`,
        );
    },
    pu = (i, s, l, c, f) => {
      s = Bt(s);
      const g = c === 0n;
      let T = (w) => w;
      if (g) {
        const w = l * 8;
        ((T = (F) => BigInt.asUintN(w, F)), (f = T(f)));
      }
      dn(i, {
        name: s,
        fromWireType: T,
        toWireType: (w, F) => {
          if (typeof F == "number") F = BigInt(F);
          else if (typeof F != "bigint")
            throw new TypeError(`Cannot convert "${fi(F)}" to ${this.name}`);
          return (ko(s, F, c, f), F);
        },
        argPackAdvance: bn,
        readValueFromPointer: Oo(s, l, !g),
        destructorFunction: null,
      });
    },
    bn = 8,
    mu = (i, s, l, c) => {
      ((s = Bt(s)),
        dn(i, {
          name: s,
          fromWireType: function (f) {
            return !!f;
          },
          toWireType: function (f, g) {
            return g ? l : c;
          },
          argPackAdvance: bn,
          readValueFromPointer: function (f) {
            return this.fromWireType(Qe[f]);
          },
          destructorFunction: null,
        }));
    },
    _u = (i) => ({
      count: i.count,
      deleteScheduled: i.deleteScheduled,
      preservePointerOnDelete: i.preservePointerOnDelete,
      ptr: i.ptr,
      ptrType: i.ptrType,
      smartPtr: i.smartPtr,
      smartPtrType: i.smartPtrType,
    }),
    ks = (i) => {
      function s(l) {
        return l.$$.ptrType.registeredClass.name;
      }
      dt(s(i) + " instance already deleted");
    },
    Bs = !1,
    Bo = (i) => {},
    gu = (i) => {
      i.smartPtr
        ? i.smartPtrType.rawDestructor(i.smartPtr)
        : i.ptrType.registeredClass.rawDestructor(i.ptr);
    },
    zo = (i) => {
      i.count.value -= 1;
      var s = i.count.value === 0;
      s && gu(i);
    },
    Ho = (i, s, l) => {
      if (s === l) return i;
      if (l.baseClass === void 0) return null;
      var c = Ho(i, s, l.baseClass);
      return c === null ? null : l.downcast(c);
    },
    Vo = {},
    vu = {},
    xu = (i, s) => {
      for (s === void 0 && dt("ptr should not be undefined"); i.baseClass; )
        ((s = i.upcast(s)), (i = i.baseClass));
      return s;
    },
    Eu = (i, s) => ((s = xu(i, s)), vu[s]),
    Su = class extends Error {
      constructor(s) {
        (super(s), (this.name = "InternalError"));
      }
    },
    Or = (i) => {
      throw new Su(i);
    },
    kr = (i, s) => {
      (!s.ptrType || !s.ptr) && Or("makeClassHandle requires ptr and ptrType");
      var l = !!s.smartPtrType,
        c = !!s.smartPtr;
      return (
        l !== c && Or("Both smartPtrType and smartPtr must be specified"),
        (s.count = { value: 1 }),
        hr(Object.create(i, { $$: { value: s, writable: !0 } }))
      );
    };
  function Go(i) {
    var s = this.getPointee(i);
    if (!s) return (this.destructor(i), null);
    var l = Eu(this.registeredClass, s);
    if (l !== void 0) {
      if (l.$$.count.value === 0)
        return ((l.$$.ptr = s), (l.$$.smartPtr = i), l.clone());
      var c = l.clone();
      return (this.destructor(i), c);
    }
    function f() {
      return this.isSmartPointer
        ? kr(this.registeredClass.instancePrototype, {
            ptrType: this.pointeeType,
            ptr: s,
            smartPtrType: this,
            smartPtr: i,
          })
        : kr(this.registeredClass.instancePrototype, { ptrType: this, ptr: i });
    }
    var g = this.registeredClass.getActualType(s),
      T = Vo[g];
    if (!T) return f.call(this);
    var w;
    this.isConst ? (w = T.constPointerType) : (w = T.pointerType);
    var F = Ho(s, this.registeredClass, w.registeredClass);
    return F === null
      ? f.call(this)
      : this.isSmartPointer
        ? kr(w.registeredClass.instancePrototype, {
            ptrType: w,
            ptr: F,
            smartPtrType: this,
            smartPtr: i,
          })
        : kr(w.registeredClass.instancePrototype, { ptrType: w, ptr: F });
  }
  var hr = (i) =>
      typeof FinalizationRegistry > "u"
        ? ((hr = (s) => s), i)
        : ((Bs = new FinalizationRegistry((s) => {
            (console.warn(s.leakWarning), zo(s.$$));
          })),
          (hr = (s) => {
            var l = s.$$,
              c = !!l.smartPtr;
            if (c) {
              var f = { $$: l },
                g = l.ptrType.registeredClass,
                T =
                  new Error(`Embind found a leaked C++ instance ${g.name} <${Le(l.ptr)}>.
We'll free it automatically in this case, but this functionality is not reliable across various environments.
Make sure to invoke .delete() manually once you're done with the instance instead.
Originally allocated`);
              ("captureStackTrace" in Error && Error.captureStackTrace(T, Go),
                (f.leakWarning = T.stack.replace(/^Error: /, "")),
                Bs.register(s, f, s));
            }
            return s;
          }),
          (Bo = (s) => Bs.unregister(s)),
          hr(i)),
    yu = () => {
      let i = Br.prototype;
      Object.assign(i, {
        isAliasOf(l) {
          if (!(this instanceof Br) || !(l instanceof Br)) return !1;
          var c = this.$$.ptrType.registeredClass,
            f = this.$$.ptr;
          l.$$ = l.$$;
          for (
            var g = l.$$.ptrType.registeredClass, T = l.$$.ptr;
            c.baseClass;

          )
            ((f = c.upcast(f)), (c = c.baseClass));
          for (; g.baseClass; ) ((T = g.upcast(T)), (g = g.baseClass));
          return c === g && f === T;
        },
        clone() {
          if ((this.$$.ptr || ks(this), this.$$.preservePointerOnDelete))
            return ((this.$$.count.value += 1), this);
          var l = hr(
            Object.create(Object.getPrototypeOf(this), {
              $$: { value: _u(this.$$) },
            }),
          );
          return ((l.$$.count.value += 1), (l.$$.deleteScheduled = !1), l);
        },
        delete() {
          (this.$$.ptr || ks(this),
            this.$$.deleteScheduled &&
              !this.$$.preservePointerOnDelete &&
              dt("Object already scheduled for deletion"),
            Bo(this),
            zo(this.$$),
            this.$$.preservePointerOnDelete ||
              ((this.$$.smartPtr = void 0), (this.$$.ptr = void 0)));
        },
        isDeleted() {
          return !this.$$.ptr;
        },
        deleteLater() {
          return (
            this.$$.ptr || ks(this),
            this.$$.deleteScheduled &&
              !this.$$.preservePointerOnDelete &&
              dt("Object already scheduled for deletion"),
            (this.$$.deleteScheduled = !0),
            this
          );
        },
      });
      const s = Symbol.dispose;
      s && (i[s] = i.delete);
    };
  function Br() {}
  var zr = (i, s) => Object.defineProperty(s, "name", { value: i }),
    zs = (i, s, l) => {
      if (i[s].overloadTable === void 0) {
        var c = i[s];
        ((i[s] = function (...f) {
          return (
            i[s].overloadTable.hasOwnProperty(f.length) ||
              dt(
                `Function '${l}' called with an invalid number of arguments (${f.length}) - expects one of (${i[s].overloadTable})!`,
              ),
            i[s].overloadTable[f.length].apply(this, f)
          );
        }),
          (i[s].overloadTable = []),
          (i[s].overloadTable[c.argCount] = c));
      }
    },
    Hs = (i, s, l) => {
      t.hasOwnProperty(i)
        ? ((l === void 0 ||
            (t[i].overloadTable !== void 0 &&
              t[i].overloadTable[l] !== void 0)) &&
            dt(`Cannot register public name '${i}' twice`),
          zs(t, i, i),
          t[i].overloadTable.hasOwnProperty(l) &&
            dt(
              `Cannot register multiple overloads of a function with the same number of arguments (${l})!`,
            ),
          (t[i].overloadTable[l] = s))
        : ((t[i] = s), (t[i].argCount = l));
    },
    Mu = 48,
    Tu = 57,
    wu = (i) => {
      (P(typeof i == "string"), (i = i.replace(/[^a-zA-Z0-9_]/g, "$")));
      var s = i.charCodeAt(0);
      return s >= Mu && s <= Tu ? `_${i}` : i;
    };
  function bu(i, s, l, c, f, g, T, w) {
    ((this.name = i),
      (this.constructor = s),
      (this.instancePrototype = l),
      (this.rawDestructor = c),
      (this.baseClass = f),
      (this.getActualType = g),
      (this.upcast = T),
      (this.downcast = w),
      (this.pureVirtualFunctions = []));
  }
  var Hr = (i, s, l) => {
    for (; s !== l; )
      (s.upcast ||
        dt(
          `Expected null or instance of ${l.name}, got an instance of ${s.name}`,
        ),
        (i = s.upcast(i)),
        (s = s.baseClass));
    return i;
  };
  function Au(i, s) {
    if (s === null)
      return (this.isReference && dt(`null is not a valid ${this.name}`), 0);
    (s.$$ || dt(`Cannot pass "${fi(s)}" as a ${this.name}`),
      s.$$.ptr ||
        dt(`Cannot pass deleted object as a pointer of type ${this.name}`));
    var l = s.$$.ptrType.registeredClass,
      c = Hr(s.$$.ptr, l, this.registeredClass);
    return c;
  }
  function Ru(i, s) {
    var l;
    if (s === null)
      return (
        this.isReference && dt(`null is not a valid ${this.name}`),
        this.isSmartPointer
          ? ((l = this.rawConstructor()),
            i !== null && i.push(this.rawDestructor, l),
            l)
          : 0
      );
    ((!s || !s.$$) && dt(`Cannot pass "${fi(s)}" as a ${this.name}`),
      s.$$.ptr ||
        dt(`Cannot pass deleted object as a pointer of type ${this.name}`),
      !this.isConst &&
        s.$$.ptrType.isConst &&
        dt(
          `Cannot convert argument of type ${s.$$.smartPtrType ? s.$$.smartPtrType.name : s.$$.ptrType.name} to parameter type ${this.name}`,
        ));
    var c = s.$$.ptrType.registeredClass;
    if (((l = Hr(s.$$.ptr, c, this.registeredClass)), this.isSmartPointer))
      switch (
        (s.$$.smartPtr === void 0 &&
          dt("Passing raw pointer to smart pointer is illegal"),
        this.sharingPolicy)
      ) {
        case 0:
          s.$$.smartPtrType === this
            ? (l = s.$$.smartPtr)
            : dt(
                `Cannot convert argument of type ${s.$$.smartPtrType ? s.$$.smartPtrType.name : s.$$.ptrType.name} to parameter type ${this.name}`,
              );
          break;
        case 1:
          l = s.$$.smartPtr;
          break;
        case 2:
          if (s.$$.smartPtrType === this) l = s.$$.smartPtr;
          else {
            var f = s.clone();
            ((l = this.rawShare(
              l,
              zt.toHandle(() => f.delete()),
            )),
              i !== null && i.push(this.rawDestructor, l));
          }
          break;
        default:
          dt("Unsupporting sharing policy");
      }
    return l;
  }
  function Cu(i, s) {
    if (s === null)
      return (this.isReference && dt(`null is not a valid ${this.name}`), 0);
    (s.$$ || dt(`Cannot pass "${fi(s)}" as a ${this.name}`),
      s.$$.ptr ||
        dt(`Cannot pass deleted object as a pointer of type ${this.name}`),
      s.$$.ptrType.isConst &&
        dt(
          `Cannot convert argument of type ${s.$$.ptrType.name} to parameter type ${this.name}`,
        ));
    var l = s.$$.ptrType.registeredClass,
      c = Hr(s.$$.ptr, l, this.registeredClass);
    return c;
  }
  function Vr(i) {
    return this.fromWireType(Me[i >> 2]);
  }
  var Pu = () => {
    Object.assign(Gr.prototype, {
      getPointee(i) {
        return (this.rawGetPointee && (i = this.rawGetPointee(i)), i);
      },
      destructor(i) {
        this.rawDestructor?.(i);
      },
      argPackAdvance: bn,
      readValueFromPointer: Vr,
      fromWireType: Go,
    });
  };
  function Gr(i, s, l, c, f, g, T, w, F, W, Z) {
    ((this.name = i),
      (this.registeredClass = s),
      (this.isReference = l),
      (this.isConst = c),
      (this.isSmartPointer = f),
      (this.pointeeType = g),
      (this.sharingPolicy = T),
      (this.rawGetPointee = w),
      (this.rawConstructor = F),
      (this.rawShare = W),
      (this.rawDestructor = Z),
      !f && s.baseClass === void 0
        ? c
          ? ((this.toWireType = Au), (this.destructorFunction = null))
          : ((this.toWireType = Cu), (this.destructorFunction = null))
        : (this.toWireType = Ru));
  }
  var Wo = (i, s, l) => {
      (t.hasOwnProperty(i) || Or("Replacing nonexistent public symbol"),
        t[i].overloadTable !== void 0 && l !== void 0
          ? (t[i].overloadTable[l] = s)
          : ((t[i] = s), (t[i].argCount = l)));
    },
    Xo = [],
    Wr,
    xe = (i) => {
      var s = Xo[i];
      return (
        s || (Xo[i] = s = Wr.get(i)),
        P(
          Wr.get(i) == s,
          "JavaScript-side Wasm function table mirror is out of date!",
        ),
        s
      );
    },
    An = (i, s, l = !1) => {
      (P(!l, "Async bindings are only supported with JSPI."), (i = Bt(i)));
      function c() {
        var g = xe(s);
        return g;
      }
      var f = c();
      return (
        typeof f != "function" &&
          dt(`unknown function pointer with signature ${i}: ${s}`),
        f
      );
    };
  class Du extends Error {}
  var $o = (i) => {
      var s = hl(i),
        l = Bt(s);
      return (Cn(s), l);
    },
    di = (i, s) => {
      var l = [],
        c = {};
      function f(g) {
        if (!c[g] && !hi[g]) {
          if (Nr[g]) {
            Nr[g].forEach(f);
            return;
          }
          (l.push(g), (c[g] = !0));
        }
      }
      throw (s.forEach(f), new Du(`${i}: ` + l.map($o).join([", "])));
    },
    xn = (i, s, l) => {
      i.forEach((w) => (Nr[w] = s));
      function c(w) {
        var F = l(w);
        F.length !== i.length && Or("Mismatched type converter count");
        for (var W = 0; W < i.length; ++W) dn(i[W], F[W]);
      }
      var f = new Array(s.length),
        g = [],
        T = 0;
      (s.forEach((w, F) => {
        hi.hasOwnProperty(w)
          ? (f[F] = hi[w])
          : (g.push(w),
            Fi.hasOwnProperty(w) || (Fi[w] = []),
            Fi[w].push(() => {
              ((f[F] = hi[w]), ++T, T === g.length && c(f));
            }));
      }),
        g.length === 0 && c(f));
    },
    Lu = (i, s, l, c, f, g, T, w, F, W, Z, ce, fe) => {
      ((Z = Bt(Z)),
        (g = An(f, g)),
        (w &&= An(T, w)),
        (W &&= An(F, W)),
        (fe = An(ce, fe)));
      var ue = wu(Z);
      (Hs(ue, function () {
        di(`Cannot construct ${Z} due to unbound types`, [c]);
      }),
        xn([i, s, l], c ? [c] : [], (me) => {
          me = me[0];
          var $e, ft;
          c
            ? (($e = me.registeredClass), (ft = $e.instancePrototype))
            : (ft = Br.prototype);
          var at = zr(Z, function (...Tt) {
              if (Object.getPrototypeOf(this) !== Ct)
                throw new ur(`Use 'new' to construct ${Z}`);
              if (_t.constructor_body === void 0)
                throw new ur(`${Z} has no accessible constructor`);
              var _i = _t.constructor_body[Tt.length];
              if (_i === void 0)
                throw new ur(
                  `Tried to invoke ctor of ${Z} with invalid number of parameters (${Tt.length}) - expected (${Object.keys(_t.constructor_body).toString()}) parameters instead!`,
                );
              return _i.apply(this, Tt);
            }),
            Ct = Object.create(ft, { constructor: { value: at } });
          at.prototype = Ct;
          var _t = new bu(Z, at, Ct, fe, $e, g, w, W);
          _t.baseClass &&
            ((_t.baseClass.__derivedClasses ??= []),
            _t.baseClass.__derivedClasses.push(_t));
          var Kt = new Gr(Z, _t, !0, !1, !1),
            Ht = new Gr(Z + "*", _t, !1, !1, !1),
            tn = new Gr(Z + " const*", _t, !1, !0, !1);
          return (
            (Vo[i] = { pointerType: Ht, constPointerType: tn }),
            Wo(ue, at),
            [Kt, Ht, tn]
          );
        }));
    },
    Vs = (i) => {
      for (; i.length; ) {
        var s = i.pop(),
          l = i.pop();
        l(s);
      }
    };
  function jo(i) {
    for (var s = 1; s < i.length; ++s)
      if (i[s] !== null && i[s].destructorFunction === void 0) return !0;
    return !1;
  }
  function Fu(i, s, l, c, f) {
    if (i < s || i > l) {
      var g = s == l ? s : `${s} to ${l}`;
      f(`function ${c} called with ${i} arguments, expected ${g}`);
    }
  }
  function Iu(i, s, l, c) {
    var f = jo(i),
      g = i.length - 2,
      T = [],
      w = ["fn"];
    s && w.push("thisWired");
    for (var F = 0; F < g; ++F) (T.push(`arg${F}`), w.push(`arg${F}Wired`));
    ((T = T.join(",")), (w = w.join(",")));
    var W = `return function (${T}) {
`;
    ((W += `checkArgCount(arguments.length, minArgs, maxArgs, humanName, throwBindingError);
`),
      f &&
        (W += `var destructors = [];
`));
    var Z = f ? "destructors" : "null",
      ce = [
        "humanName",
        "throwBindingError",
        "invoker",
        "fn",
        "runDestructors",
        "retType",
        "classParam",
      ];
    s &&
      (W += `var thisWired = classParam['toWireType'](${Z}, this);
`);
    for (var F = 0; F < g; ++F)
      ((W += `var arg${F}Wired = argType${F}['toWireType'](${Z}, arg${F});
`),
        ce.push(`argType${F}`));
    if (
      ((W +=
        (l || c ? "var rv = " : "") +
        `invoker(${w});
`),
      f)
    )
      W += `runDestructors(destructors);
`;
    else
      for (var F = s ? 1 : 2; F < i.length; ++F) {
        var fe = F === 1 ? "thisWired" : "arg" + (F - 2) + "Wired";
        i[F].destructorFunction !== null &&
          ((W += `${fe}_dtor(${fe});
`),
          ce.push(`${fe}_dtor`));
      }
    return (
      l &&
        (W += `var ret = retType['fromWireType'](rv);
return ret;
`),
      (W += `}
`),
      ce.push("checkArgCount", "minArgs", "maxArgs"),
      (W = `if (arguments.length !== ${ce.length}){ throw new Error(humanName + "Expected ${ce.length} closure arguments " + arguments.length + " given."); }
${W}`),
      [ce, W]
    );
  }
  function Uu(i) {
    for (var s = i.length - 2, l = i.length - 1; l >= 2 && i[l].optional; --l)
      s--;
    return s;
  }
  function Xr(i, s, l, c, f, g) {
    var T = s.length;
    (T < 2 &&
      dt(
        "argTypes array size mismatch! Must at least get return value and 'this' types!",
      ),
      P(!g, "Async bindings are only supported with JSPI."));
    for (
      var w = s[1] !== null && l !== null,
        F = jo(s),
        W = s[0].name !== "void",
        Z = T - 2,
        ce = Uu(s),
        fe = [i, dt, c, f, Vs, s[0], s[1]],
        ue = 0;
      ue < T - 2;
      ++ue
    )
      fe.push(s[ue + 2]);
    if (!F)
      for (var ue = w ? 1 : 2; ue < s.length; ++ue)
        s[ue].destructorFunction !== null && fe.push(s[ue].destructorFunction);
    fe.push(Fu, ce, Z);
    let [me, $e] = Iu(s, w, W, g);
    var ft = new Function(...me, $e)(...fe);
    return zr(i, ft);
  }
  var $r = (i, s) => {
      for (var l = [], c = 0; c < i; c++) l.push(Me[(s + c * 4) >> 2]);
      return l;
    },
    Gs = (i) => {
      i = i.trim();
      const s = i.indexOf("(");
      return s === -1
        ? i
        : (P(i.endsWith(")"), "Parentheses for argument names should match."),
          i.slice(0, s));
    },
    Nu = (i, s, l, c, f, g, T, w, F) => {
      var W = $r(l, c);
      ((s = Bt(s)),
        (s = Gs(s)),
        (g = An(f, g, w)),
        xn([], [i], (Z) => {
          Z = Z[0];
          var ce = `${Z.name}.${s}`;
          function fe() {
            di(`Cannot call ${ce} due to unbound types`, W);
          }
          s.startsWith("@@") && (s = Symbol[s.substring(2)]);
          var ue = Z.registeredClass.constructor;
          return (
            ue[s] === void 0
              ? ((fe.argCount = l - 1), (ue[s] = fe))
              : (zs(ue, s, ce), (ue[s].overloadTable[l - 1] = fe)),
            xn([], W, (me) => {
              var $e = [me[0], null].concat(me.slice(1)),
                ft = Xr(ce, $e, null, g, T, w);
              if (
                (ue[s].overloadTable === void 0
                  ? ((ft.argCount = l - 1), (ue[s] = ft))
                  : (ue[s].overloadTable[l - 1] = ft),
                Z.registeredClass.__derivedClasses)
              )
                for (const at of Z.registeredClass.__derivedClasses)
                  at.constructor.hasOwnProperty(s) || (at.constructor[s] = ft);
              return [];
            }),
            []
          );
        }));
    },
    Ou = (i, s, l, c, f, g) => {
      P(s > 0);
      var T = $r(s, l);
      ((f = An(c, f)),
        xn([], [i], (w) => {
          w = w[0];
          var F = `constructor ${w.name}`;
          if (
            (w.registeredClass.constructor_body === void 0 &&
              (w.registeredClass.constructor_body = []),
            w.registeredClass.constructor_body[s - 1] !== void 0)
          )
            throw new ur(
              `Cannot register multiple constructors with identical number of parameters (${s - 1}) for class '${w.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`,
            );
          return (
            (w.registeredClass.constructor_body[s - 1] = () => {
              di(`Cannot construct ${w.name} due to unbound types`, T);
            }),
            xn(
              [],
              T,
              (W) => (
                W.splice(1, 0, null),
                (w.registeredClass.constructor_body[s - 1] = Xr(
                  F,
                  W,
                  null,
                  f,
                  g,
                )),
                []
              ),
            ),
            []
          );
        }));
    },
    ku = (i, s, l, c, f, g, T, w, F, W) => {
      var Z = $r(l, c);
      ((s = Bt(s)),
        (s = Gs(s)),
        (g = An(f, g, F)),
        xn([], [i], (ce) => {
          ce = ce[0];
          var fe = `${ce.name}.${s}`;
          (s.startsWith("@@") && (s = Symbol[s.substring(2)]),
            w && ce.registeredClass.pureVirtualFunctions.push(s));
          function ue() {
            di(`Cannot call ${fe} due to unbound types`, Z);
          }
          var me = ce.registeredClass.instancePrototype,
            $e = me[s];
          return (
            $e === void 0 ||
            ($e.overloadTable === void 0 &&
              $e.className !== ce.name &&
              $e.argCount === l - 2)
              ? ((ue.argCount = l - 2), (ue.className = ce.name), (me[s] = ue))
              : (zs(me, s, fe), (me[s].overloadTable[l - 2] = ue)),
            xn([], Z, (ft) => {
              var at = Xr(fe, ft, ce, g, T, F);
              return (
                me[s].overloadTable === void 0
                  ? ((at.argCount = l - 2), (me[s] = at))
                  : (me[s].overloadTable[l - 2] = at),
                []
              );
            }),
            []
          );
        }));
    },
    qo = (i, s, l) => (
      i instanceof Object || dt(`${l} with invalid "this": ${i}`),
      i instanceof s.registeredClass.constructor ||
        dt(`${l} incompatible with "this" of type ${i.constructor.name}`),
      i.$$.ptr ||
        dt(`cannot call emscripten binding method ${l} on deleted object`),
      Hr(i.$$.ptr, i.$$.ptrType.registeredClass, s.registeredClass)
    ),
    Bu = (i, s, l, c, f, g, T, w, F, W) => {
      ((s = Bt(s)),
        (f = An(c, f)),
        xn([], [i], (Z) => {
          Z = Z[0];
          var ce = `${Z.name}.${s}`,
            fe = {
              get() {
                di(`Cannot access ${ce} due to unbound types`, [l, T]);
              },
              enumerable: !0,
              configurable: !0,
            };
          return (
            F
              ? (fe.set = () =>
                  di(`Cannot access ${ce} due to unbound types`, [l, T]))
              : (fe.set = (ue) => dt(ce + " is a read-only property")),
            Object.defineProperty(Z.registeredClass.instancePrototype, s, fe),
            xn([], F ? [l, T] : [l], (ue) => {
              var me = ue[0],
                $e = {
                  get() {
                    var at = qo(this, Z, ce + " getter");
                    return me.fromWireType(f(g, at));
                  },
                  enumerable: !0,
                };
              if (F) {
                F = An(w, F);
                var ft = ue[1];
                $e.set = function (at) {
                  var Ct = qo(this, Z, ce + " setter"),
                    _t = [];
                  (F(W, Ct, ft.toWireType(_t, at)), Vs(_t));
                };
              }
              return (
                Object.defineProperty(
                  Z.registeredClass.instancePrototype,
                  s,
                  $e,
                ),
                []
              );
            }),
            []
          );
        }));
    },
    zu = (i, s, l) => {
      ((i = Bt(i)),
        xn([], [s], (c) => ((c = c[0]), (t[i] = c.fromWireType(l)), [])));
    },
    Yo = [],
    Rn = [0, 1, , 1, null, 1, !0, 1, !1, 1],
    Ws = (i) => {
      i > 9 &&
        --Rn[i + 1] === 0 &&
        (P(Rn[i] !== void 0, "Decref for unallocated handle."),
        (Rn[i] = void 0),
        Yo.push(i));
    },
    zt = {
      toValue: (i) => (
        i || dt(`Cannot use deleted val. handle = ${i}`),
        P(i === 2 || (Rn[i] !== void 0 && i % 2 === 0), `invalid handle: ${i}`),
        Rn[i]
      ),
      toHandle: (i) => {
        switch (i) {
          case void 0:
            return 2;
          case null:
            return 4;
          case !0:
            return 6;
          case !1:
            return 8;
          default: {
            const s = Yo.pop() || Rn.length;
            return ((Rn[s] = i), (Rn[s + 1] = 1), s);
          }
        }
      },
    },
    Ko = {
      name: "emscripten::val",
      fromWireType: (i) => {
        var s = zt.toValue(i);
        return (Ws(i), s);
      },
      toWireType: (i, s) => zt.toHandle(s),
      argPackAdvance: bn,
      readValueFromPointer: Vr,
      destructorFunction: null,
    },
    Zo = (i) => dn(i, Ko),
    Hu = (i, s, l) => {
      switch (s) {
        case 1:
          return l
            ? function (c) {
                return this.fromWireType(tt[c]);
              }
            : function (c) {
                return this.fromWireType(Qe[c]);
              };
        case 2:
          return l
            ? function (c) {
                return this.fromWireType(se[c >> 1]);
              }
            : function (c) {
                return this.fromWireType(de[c >> 1]);
              };
        case 4:
          return l
            ? function (c) {
                return this.fromWireType(le[c >> 2]);
              }
            : function (c) {
                return this.fromWireType(Me[c >> 2]);
              };
        default:
          throw new TypeError(`invalid integer width (${s}): ${i}`);
      }
    },
    Vu = (i, s, l, c) => {
      s = Bt(s);
      function f() {}
      ((f.values = {}),
        dn(i, {
          name: s,
          constructor: f,
          fromWireType: function (g) {
            return this.constructor.values[g];
          },
          toWireType: (g, T) => T.value,
          argPackAdvance: bn,
          readValueFromPointer: Hu(s, l, c),
          destructorFunction: null,
        }),
        Hs(s, f));
    },
    jr = (i, s) => {
      var l = hi[i];
      return (l === void 0 && dt(`${s} has unknown type ${$o(i)}`), l);
    },
    Gu = (i, s, l) => {
      var c = jr(i, "enum");
      s = Bt(s);
      var f = c.constructor,
        g = Object.create(c.constructor.prototype, {
          value: { value: l },
          constructor: { value: zr(`${c.name}_${s}`, function () {}) },
        });
      ((f.values[l] = g), (f[s] = g));
    },
    Wu = (i, s) => {
      switch (s) {
        case 4:
          return function (l) {
            return this.fromWireType(He[l >> 2]);
          };
        case 8:
          return function (l) {
            return this.fromWireType(lt[l >> 3]);
          };
        default:
          throw new TypeError(`invalid float width (${s}): ${i}`);
      }
    },
    Xu = (i, s, l) => {
      ((s = Bt(s)),
        dn(i, {
          name: s,
          fromWireType: (c) => c,
          toWireType: (c, f) => {
            if (typeof f != "number" && typeof f != "boolean")
              throw new TypeError(`Cannot convert ${fi(f)} to ${this.name}`);
            return f;
          },
          argPackAdvance: bn,
          readValueFromPointer: Wu(s, l),
          destructorFunction: null,
        }));
    },
    $u = (i, s, l, c, f, g, T, w) => {
      var F = $r(s, l);
      ((i = Bt(i)),
        (i = Gs(i)),
        (f = An(c, f, T)),
        Hs(
          i,
          function () {
            di(`Cannot call ${i} due to unbound types`, F);
          },
          s - 1,
        ),
        xn([], F, (W) => {
          var Z = [W[0], null].concat(W.slice(1));
          return (Wo(i, Xr(i, Z, null, f, g, T), s - 1), []);
        }));
    },
    ju = (i, s, l, c, f) => {
      s = Bt(s);
      const g = c === 0;
      let T = (F) => F;
      if (g) {
        var w = 32 - 8 * l;
        ((T = (F) => (F << w) >>> w), (f = T(f)));
      }
      dn(i, {
        name: s,
        fromWireType: T,
        toWireType: (F, W) => {
          if (typeof W != "number" && typeof W != "boolean")
            throw new TypeError(`Cannot convert "${fi(W)}" to ${s}`);
          return (ko(s, W, c, f), W);
        },
        argPackAdvance: bn,
        readValueFromPointer: Oo(s, l, c !== 0),
        destructorFunction: null,
      });
    },
    qu = (i, s, l) => {
      var c = [
          Int8Array,
          Uint8Array,
          Int16Array,
          Uint16Array,
          Int32Array,
          Uint32Array,
          Float32Array,
          Float64Array,
          BigInt64Array,
          BigUint64Array,
        ],
        f = c[s];
      function g(T) {
        var w = Me[T >> 2],
          F = Me[(T + 4) >> 2];
        return new f(tt.buffer, F, w);
      }
      ((l = Bt(l)),
        dn(
          i,
          {
            name: l,
            fromWireType: g,
            argPackAdvance: bn,
            readValueFromPointer: g,
          },
          { ignoreDuplicateRegistrations: !0 },
        ));
    },
    Yu = Object.assign({ optional: !0 }, Ko),
    Ku = (i, s) => {
      dn(i, Yu);
    },
    pi = (i, s, l) => (
      P(
        typeof l == "number",
        "stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!",
      ),
      Ce(i, Qe, s, l)
    ),
    Zu = (i, s) => {
      ((s = Bt(s)),
        dn(i, {
          name: s,
          fromWireType(l) {
            for (
              var c = Me[l >> 2], f = l + 4, g, T, w = f, T = 0;
              T <= c;
              ++T
            ) {
              var F = f + T;
              if (T == c || Qe[F] == 0) {
                var W = F - w,
                  Z = st(w, W);
                (g === void 0 ? (g = Z) : ((g += "\0"), (g += Z)), (w = F + 1));
              }
            }
            return (Cn(l), g);
          },
          toWireType(l, c) {
            c instanceof ArrayBuffer && (c = new Uint8Array(c));
            var f,
              g = typeof c == "string";
            (g ||
              (ArrayBuffer.isView(c) && c.BYTES_PER_ELEMENT == 1) ||
              dt("Cannot pass non-string to std::string"),
              g ? (f = _e(c)) : (f = c.length));
            var T = js(4 + f + 1),
              w = T + 4;
            return (
              (Me[T >> 2] = f),
              g ? pi(c, w, f + 1) : Qe.set(c, w),
              l !== null && l.push(Cn, T),
              T
            );
          },
          argPackAdvance: bn,
          readValueFromPointer: Vr,
          destructorFunction(l) {
            Cn(l);
          },
        }));
    },
    Jo = typeof TextDecoder < "u" ? new TextDecoder("utf-16le") : void 0,
    Ju = (i, s) => {
      P(
        i % 2 == 0,
        "Pointer passed to UTF16ToString must be aligned to two bytes!",
      );
      for (var l = i >> 1, c = l + s / 2, f = l; !(f >= c) && de[f]; ) ++f;
      if (f - l > 16 && Jo) return Jo.decode(de.subarray(l, f));
      for (var g = "", T = l; !(T >= c); ++T) {
        var w = de[T];
        if (w == 0) break;
        g += String.fromCharCode(w);
      }
      return g;
    },
    Qu = (i, s, l) => {
      if (
        (P(
          s % 2 == 0,
          "Pointer passed to stringToUTF16 must be aligned to two bytes!",
        ),
        P(
          typeof l == "number",
          "stringToUTF16(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!",
        ),
        (l ??= 2147483647),
        l < 2)
      )
        return 0;
      l -= 2;
      for (
        var c = s, f = l < i.length * 2 ? l / 2 : i.length, g = 0;
        g < f;
        ++g
      ) {
        var T = i.charCodeAt(g);
        ((se[s >> 1] = T), (s += 2));
      }
      return ((se[s >> 1] = 0), s - c);
    },
    eh = (i) => i.length * 2,
    th = (i, s) => {
      P(
        i % 4 == 0,
        "Pointer passed to UTF32ToString must be aligned to four bytes!",
      );
      for (var l = "", c = 0; !(c >= s / 4); c++) {
        var f = le[(i + c * 4) >> 2];
        if (!f) break;
        l += String.fromCodePoint(f);
      }
      return l;
    },
    nh = (i, s, l) => {
      if (
        (P(
          s % 4 == 0,
          "Pointer passed to stringToUTF32 must be aligned to four bytes!",
        ),
        P(
          typeof l == "number",
          "stringToUTF32(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!",
        ),
        (l ??= 2147483647),
        l < 4)
      )
        return 0;
      for (var c = s, f = c + l - 4, g = 0; g < i.length; ++g) {
        var T = i.codePointAt(g);
        if ((T > 65535 && g++, (le[s >> 2] = T), (s += 4), s + 4 > f)) break;
      }
      return ((le[s >> 2] = 0), s - c);
    },
    ih = (i) => {
      for (var s = 0, l = 0; l < i.length; ++l) {
        var c = i.codePointAt(l);
        (c > 65535 && l++, (s += 4));
      }
      return s;
    },
    rh = (i, s, l) => {
      l = Bt(l);
      var c, f, g, T;
      (s === 2
        ? ((c = Ju), (f = Qu), (T = eh), (g = (w) => de[w >> 1]))
        : s === 4 && ((c = th), (f = nh), (T = ih), (g = (w) => Me[w >> 2])),
        dn(i, {
          name: l,
          fromWireType: (w) => {
            for (var F = Me[w >> 2], W, Z = w + 4, ce = 0; ce <= F; ++ce) {
              var fe = w + 4 + ce * s;
              if (ce == F || g(fe) == 0) {
                var ue = fe - Z,
                  me = c(Z, ue);
                (W === void 0 ? (W = me) : ((W += "\0"), (W += me)),
                  (Z = fe + s));
              }
            }
            return (Cn(w), W);
          },
          toWireType: (w, F) => {
            typeof F != "string" &&
              dt(`Cannot pass non-string to C++ string type ${l}`);
            var W = T(F),
              Z = js(4 + W + s);
            return (
              (Me[Z >> 2] = W / s),
              f(F, Z + 4, W + s),
              w !== null && w.push(Cn, Z),
              Z
            );
          },
          argPackAdvance: bn,
          readValueFromPointer: Vr,
          destructorFunction(w) {
            Cn(w);
          },
        }));
    },
    sh = (i, s) => {
      Zo(i);
    },
    ah = (i, s) => {
      ((s = Bt(s)),
        dn(i, {
          isVoid: !0,
          name: s,
          argPackAdvance: 0,
          fromWireType: () => {},
          toWireType: (l, c) => {},
        }));
    },
    oh = () => {
      throw new z();
    },
    Qo = (i, s, l) => {
      var c = [],
        f = i.toWireType(c, l);
      return (c.length && (Me[s >> 2] = zt.toHandle(c)), f);
    },
    lh = (i, s, l) => (
      (i = zt.toValue(i)),
      (s = jr(s, "emval::as")),
      Qo(s, l, i)
    ),
    qr = [],
    ch = (i, s, l, c) => ((i = qr[i]), (s = zt.toValue(s)), i(null, s, l, c)),
    uh = {},
    Xs = (i) => {
      var s = uh[i];
      return s === void 0 ? Bt(i) : s;
    },
    hh = (i, s, l, c, f) => (
      (i = qr[i]),
      (s = zt.toValue(s)),
      (l = Xs(l)),
      i(s, s[l], c, f)
    ),
    el = () => globalThis,
    fh = (i) =>
      i === 0 ? zt.toHandle(el()) : ((i = Xs(i)), zt.toHandle(el()[i])),
    dh = (i) => {
      var s = qr.length;
      return (qr.push(i), s);
    },
    ph = (i, s) => {
      for (var l = new Array(i), c = 0; c < i; ++c)
        l[c] = jr(Me[(s + c * 4) >> 2], `parameter ${c}`);
      return l;
    },
    mh = (i, s, l) => {
      var c = ph(i, s),
        f = c.shift();
      i--;
      var g = `return function (obj, func, destructorsRef, args) {
`,
        T = 0,
        w = [];
      l === 0 && w.push("obj");
      for (var F = ["retType"], W = [f], Z = 0; Z < i; ++Z)
        (w.push(`arg${Z}`),
          F.push(`argType${Z}`),
          W.push(c[Z]),
          (g += `  var arg${Z} = argType${Z}.readValueFromPointer(args${T ? "+" + T : ""});
`),
          (T += c[Z].argPackAdvance));
      var ce = l === 1 ? "new func" : "func.call";
      ((g += `  var rv = ${ce}(${w.join(", ")});
`),
        f.isVoid ||
          (F.push("emval_returnValue"),
          W.push(Qo),
          (g += `  return emval_returnValue(retType, destructorsRef, rv);
`)),
        (g += `};
`));
      var fe = new Function(...F, g)(...W),
        ue = `methodCaller<(${c.map((me) => me.name).join(", ")}) => ${f.name}>`;
      return dh(zr(ue, fe));
    },
    _h = (i, s) => (
      (i = zt.toValue(i)),
      (s = zt.toValue(s)),
      zt.toHandle(i[s])
    ),
    gh = (i) => {
      i > 9 && (Rn[i + 1] += 1);
    },
    vh = (i) => ((i = zt.toValue(i)), typeof i == "number"),
    xh = (i) => ((i = zt.toValue(i)), typeof i == "string"),
    Eh = () => zt.toHandle([]),
    Sh = (i) => zt.toHandle(Xs(i)),
    yh = (i) => {
      var s = zt.toValue(i);
      (Vs(s), Ws(i));
    },
    Mh = (i, s) => {
      i = jr(i, "_emval_take_value");
      var l = i.readValueFromPointer(s);
      return zt.toHandle(l);
    },
    Th = (i) => {
      throw ((i = zt.toValue(i)), i);
    },
    wh = (i) => i % 4 === 0 && (i % 100 !== 0 || i % 400 === 0),
    bh = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335],
    Ah = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
    tl = (i) => {
      var s = wh(i.getFullYear()),
        l = s ? bh : Ah,
        c = l[i.getMonth()] + i.getDate() - 1;
      return c;
    },
    Rh = 9007199254740992,
    Ch = -9007199254740992,
    nl = (i) => (i < Ch || i > Rh ? NaN : Number(i));
  function Ph(i, s) {
    i = nl(i);
    var l = new Date(i * 1e3);
    ((le[s >> 2] = l.getSeconds()),
      (le[(s + 4) >> 2] = l.getMinutes()),
      (le[(s + 8) >> 2] = l.getHours()),
      (le[(s + 12) >> 2] = l.getDate()),
      (le[(s + 16) >> 2] = l.getMonth()),
      (le[(s + 20) >> 2] = l.getFullYear() - 1900),
      (le[(s + 24) >> 2] = l.getDay()));
    var c = tl(l) | 0;
    ((le[(s + 28) >> 2] = c),
      (le[(s + 36) >> 2] = -(l.getTimezoneOffset() * 60)));
    var f = new Date(l.getFullYear(), 0, 1),
      g = new Date(l.getFullYear(), 6, 1).getTimezoneOffset(),
      T = f.getTimezoneOffset(),
      w = (g != T && l.getTimezoneOffset() == Math.min(T, g)) | 0;
    le[(s + 32) >> 2] = w;
  }
  var Dh = function (i) {
      var s = (() => {
        var l = new Date(
            le[(i + 20) >> 2] + 1900,
            le[(i + 16) >> 2],
            le[(i + 12) >> 2],
            le[(i + 8) >> 2],
            le[(i + 4) >> 2],
            le[i >> 2],
            0,
          ),
          c = le[(i + 32) >> 2],
          f = l.getTimezoneOffset(),
          g = new Date(l.getFullYear(), 0, 1),
          T = new Date(l.getFullYear(), 6, 1).getTimezoneOffset(),
          w = g.getTimezoneOffset(),
          F = Math.min(w, T);
        if (c < 0) le[(i + 32) >> 2] = +(T != w && F == f);
        else if (c > 0 != (F == f)) {
          var W = Math.max(w, T),
            Z = c > 0 ? F : W;
          l.setTime(l.getTime() + (Z - f) * 6e4);
        }
        le[(i + 24) >> 2] = l.getDay();
        var ce = tl(l) | 0;
        ((le[(i + 28) >> 2] = ce),
          (le[i >> 2] = l.getSeconds()),
          (le[(i + 4) >> 2] = l.getMinutes()),
          (le[(i + 8) >> 2] = l.getHours()),
          (le[(i + 12) >> 2] = l.getDate()),
          (le[(i + 16) >> 2] = l.getMonth()),
          (le[(i + 20) >> 2] = l.getYear()));
        var fe = l.getTime();
        return isNaN(fe) ? -1 : fe / 1e3;
      })();
      return BigInt(s);
    },
    Lh = (i, s, l, c) => {
      var f = new Date().getFullYear(),
        g = new Date(f, 0, 1),
        T = new Date(f, 6, 1),
        w = g.getTimezoneOffset(),
        F = T.getTimezoneOffset(),
        W = Math.max(w, F);
      ((Me[i >> 2] = W * 60), (le[s >> 2] = +(w != F)));
      var Z = (ue) => {
          var me = ue >= 0 ? "-" : "+",
            $e = Math.abs(ue),
            ft = String(Math.floor($e / 60)).padStart(2, "0"),
            at = String($e % 60).padStart(2, "0");
          return `UTC${me}${ft}${at}`;
        },
        ce = Z(w),
        fe = Z(F);
      (P(ce),
        P(fe),
        P(_e(ce) <= 16, `timezone name truncated to fit in TZNAME_MAX (${ce})`),
        P(_e(fe) <= 16, `timezone name truncated to fit in TZNAME_MAX (${fe})`),
        F < w
          ? (pi(ce, l, 17), pi(fe, c, 17))
          : (pi(ce, c, 17), pi(fe, l, 17)));
    },
    il = () => performance.now(),
    rl = () => Date.now(),
    Fh = (i) => i >= 0 && i <= 3;
  function Ih(i, s, l) {
    if (!Fh(i)) return 28;
    var c;
    i === 0 ? (c = rl()) : (c = il());
    var f = Math.round(c * 1e3 * 1e3);
    return ((At[l >> 3] = BigInt(f)), 0);
  }
  var Yr = [],
    Uh = (i, s) => {
      (P(Array.isArray(Yr)), P(s % 16 == 0), (Yr.length = 0));
      for (var l; (l = Qe[i++]); ) {
        var c = String.fromCharCode(l),
          f = ["d", "f", "i", "p"];
        (f.push("j"),
          P(
            f.includes(c),
            `Invalid character ${l}("${c}") in readEmAsmArgs! Use only [${f}], and do not specify "v" for void return argument.`,
          ));
        var g = l != 105;
        ((g &= l != 112),
          (s += g && s % 8 ? 4 : 0),
          Yr.push(
            l == 112
              ? Me[s >> 2]
              : l == 106
                ? At[s >> 3]
                : l == 105
                  ? le[s >> 2]
                  : lt[s >> 3],
          ),
          (s += g ? 8 : 4));
      }
      return Yr;
    },
    Nh = (i, s, l) => {
      var c = Uh(s, l);
      return (
        P(
          ul.hasOwnProperty(i),
          `No EM_ASM constant found at address ${i}.  The loaded WebAssembly file is likely out of sync with the generated JavaScript.`,
        ),
        ul[i](...c)
      );
    },
    Oh = (i, s, l) => Nh(i, s, l),
    sl = () => 2147483648,
    kh = () => sl(),
    Bh = (i, s) => (
      P(s, "alignment argument is required"),
      Math.ceil(i / s) * s
    ),
    zh = (i) => {
      var s = Ke.buffer,
        l = ((i - s.byteLength + 65535) / 65536) | 0;
      try {
        return (Ke.grow(l), et(), 1);
      } catch (c) {
        U(
          `growMemory: Attempted to grow heap from ${s.byteLength} bytes to ${i} bytes, but got error: ${c}`,
        );
      }
    },
    Hh = (i) => {
      var s = Qe.length;
      ((i >>>= 0), P(i > s));
      var l = sl();
      if (i > l)
        return (
          U(
            `Cannot enlarge memory, requested ${i} bytes, but the limit is ${l} bytes!`,
          ),
          !1
        );
      for (var c = 1; c <= 4; c *= 2) {
        var f = s * (1 + 0.2 / c);
        f = Math.min(f, i + 100663296);
        var g = Math.min(l, Bh(Math.max(i, f), 65536)),
          T = zh(g);
        if (T) return !0;
      }
      return (
        U(
          `Failed to grow the heap from ${s} bytes to ${g} bytes, not enough memory!`,
        ),
        !1
      );
    },
    $s = {},
    Vh = () => p || "./this.program",
    fr = () => {
      if (!fr.strings) {
        var i =
            (
              (typeof navigator == "object" && navigator.language) ||
              "C"
            ).replace("-", "_") + ".UTF-8",
          s = {
            USER: "web_user",
            LOGNAME: "web_user",
            PATH: "/",
            PWD: "/",
            HOME: "/home/web_user",
            LANG: i,
            _: Vh(),
          };
        for (var l in $s) $s[l] === void 0 ? delete s[l] : (s[l] = $s[l]);
        var c = [];
        for (var l in s) c.push(`${l}=${s[l]}`);
        fr.strings = c;
      }
      return fr.strings;
    },
    Gh = (i, s) => {
      var l = 0,
        c = 0;
      for (var f of fr()) {
        var g = s + l;
        ((Me[(i + c) >> 2] = g), (l += pi(f, g, 1 / 0) + 1), (c += 4));
      }
      return 0;
    },
    Wh = (i, s) => {
      var l = fr();
      Me[i >> 2] = l.length;
      var c = 0;
      for (var f of l) c += _e(f) + 1;
      return ((Me[s >> 2] = c), 0);
    },
    al = 0,
    ol = () => be || al > 0,
    Xh = (i) => {
      (ol() || (t.onExit?.(i), (k = !0)), d(i, new je(i)));
    },
    $h = (i, s) => {
      if ((rp(), ol() && !s)) {
        var l = `program exited (with status: ${i}), but keepRuntimeAlive() is set (counter=${al}) due to an async operation, so halting execution but not exiting the runtime or preventing further async execution (you can use emscripten_force_exit, if you want to force a true shutdown)`;
        (We?.(l), U(l));
      }
      Xh(i);
    },
    jh = $h;
  function qh(i) {
    try {
      var s = Et.getStreamFromFD(i);
      return (S.close(s), 0);
    } catch (l) {
      if (typeof S > "u" || l.name !== "ErrnoError") throw l;
      return l.errno;
    }
  }
  var Yh = (i, s, l, c) => {
    for (var f = 0, g = 0; g < l; g++) {
      var T = Me[s >> 2],
        w = Me[(s + 4) >> 2];
      s += 8;
      var F = S.read(i, tt, T, w, c);
      if (F < 0) return -1;
      if (((f += F), F < w)) break;
    }
    return f;
  };
  function Kh(i, s, l, c) {
    try {
      var f = Et.getStreamFromFD(i),
        g = Yh(f, s, l);
      return ((Me[c >> 2] = g), 0);
    } catch (T) {
      if (typeof S > "u" || T.name !== "ErrnoError") throw T;
      return T.errno;
    }
  }
  function Zh(i, s, l, c) {
    s = nl(s);
    try {
      if (isNaN(s)) return 61;
      var f = Et.getStreamFromFD(i);
      return (
        S.llseek(f, s, l),
        (At[c >> 3] = BigInt(f.position)),
        f.getdents && s === 0 && l === 0 && (f.getdents = null),
        0
      );
    } catch (g) {
      if (typeof S > "u" || g.name !== "ErrnoError") throw g;
      return g.errno;
    }
  }
  var Jh = (i, s, l, c) => {
    for (var f = 0, g = 0; g < l; g++) {
      var T = Me[s >> 2],
        w = Me[(s + 4) >> 2];
      s += 8;
      var F = S.write(i, tt, T, w, c);
      if (F < 0) return -1;
      if (((f += F), F < w)) break;
    }
    return f;
  };
  function Qh(i, s, l, c) {
    try {
      var f = Et.getStreamFromFD(i),
        g = Jh(f, s, l);
      return ((Me[c >> 2] = g), 0);
    } catch (T) {
      if (typeof S > "u" || T.name !== "ErrnoError") throw T;
      return T.errno;
    }
  }
  var ef = (i) => i,
    tf = (i) => {
      var s = t["_" + i];
      return (
        P(
          s,
          "Cannot call unknown function " + i + ", make sure it is exported",
        ),
        s
      );
    },
    nf = (i, s) => {
      (P(
        i.length >= 0,
        "writeArrayToMemory array must have a length (should be an array or typed array)",
      ),
        tt.set(i, s));
    },
    Kr = (i) => _l(i),
    rf = (i) => {
      var s = _e(i) + 1,
        l = Kr(s);
      return (pi(i, l, s), l);
    },
    ll = (i, s, l, c, f) => {
      var g = {
        string: (me) => {
          var $e = 0;
          return (me != null && me !== 0 && ($e = rf(me)), $e);
        },
        array: (me) => {
          var $e = Kr(me.length);
          return (nf(me, $e), $e);
        },
      };
      function T(me) {
        return s === "string" ? st(me) : s === "boolean" ? !!me : me;
      }
      var w = tf(i),
        F = [],
        W = 0;
      if ((P(s !== "array", 'Return type should not be "array".'), c))
        for (var Z = 0; Z < c.length; Z++) {
          var ce = g[l[Z]];
          ce ? (W === 0 && (W = B()), (F[Z] = ce(c[Z]))) : (F[Z] = c[Z]);
        }
      var fe = w(...F);
      function ue(me) {
        return (W !== 0 && G(W), T(me));
      }
      return ((fe = ue(fe)), fe);
    },
    sf =
      (i, s, l, c) =>
      (...f) =>
        ll(i, s, l, f),
    af = (...i) => S.createPath(...i),
    of = (...i) => S.unlink(...i),
    lf = (...i) => S.createLazyFile(...i),
    cf = (...i) => S.createDevice(...i),
    uf = (i) => Zr(i),
    hf = (i) => Ks(i),
    ff = (i) => {
      var s = B(),
        l = Kr(4),
        c = Kr(4);
      vl(i, l, c);
      var f = Me[l >> 2],
        g = Me[c >> 2],
        T = st(f);
      Cn(f);
      var w;
      return (g && ((w = st(g)), Cn(g)), G(s), [T, w]);
    },
    cl = (i) => ff(i);
  ((S.createPreloadedFile = Xe),
    S.staticInit(),
    yu(),
    Pu(),
    P(Rn.length === 10),
    t.noExitRuntime && (be = t.noExitRuntime),
    t.preloadPlugins && (Mt = t.preloadPlugins),
    t.print && (N = t.print),
    t.printErr && (U = t.printErr),
    t.wasmBinary && (L = t.wasmBinary),
    mf(),
    t.arguments && t.arguments,
    t.thisProgram && (p = t.thisProgram),
    P(
      typeof t.memoryInitializerPrefixURL > "u",
      "Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead",
    ),
    P(
      typeof t.pthreadMainPrefixURL > "u",
      "Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead",
    ),
    P(
      typeof t.cdInitializerPrefixURL > "u",
      "Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead",
    ),
    P(
      typeof t.filePackagePrefixURL > "u",
      "Module.filePackagePrefixURL option was removed, use Module.locateFile instead",
    ),
    P(typeof t.read > "u", "Module.read option was removed"),
    P(
      typeof t.readAsync > "u",
      "Module.readAsync option was removed (modify readAsync in JS)",
    ),
    P(
      typeof t.readBinary > "u",
      "Module.readBinary option was removed (modify readBinary in JS)",
    ),
    P(
      typeof t.setWindowTitle > "u",
      "Module.setWindowTitle option was removed (modify emscripten_set_window_title in JS)",
    ),
    P(
      typeof t.TOTAL_MEMORY > "u",
      "Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY",
    ),
    P(
      typeof t.ENVIRONMENT > "u",
      "Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -sENVIRONMENT=web or -sENVIRONMENT=node)",
    ),
    P(
      typeof t.STACK_SIZE > "u",
      "STACK_SIZE can no longer be set at runtime.  Use -sSTACK_SIZE at link time",
    ),
    P(
      typeof t.wasmMemory > "u",
      "Use of `wasmMemory` detected.  Use -sIMPORTED_MEMORY to define wasmMemory externally",
    ),
    P(
      typeof t.INITIAL_MEMORY > "u",
      "Detected runtime INITIAL_MEMORY setting.  Use -sIMPORTED_MEMORY to define wasmMemory dynamically",
    ),
    (t.addRunDependency = I),
    (t.removeRunDependency = b),
    (t.ccall = ll),
    (t.cwrap = sf),
    (t.FS_createPreloadedFile = Xe),
    (t.FS_unlink = of),
    (t.FS_createPath = af),
    (t.FS_createDevice = cf),
    (t.FS = S),
    (t.FS_createDataFile = vt),
    (t.FS_createLazyFile = lf),
    (t.MEMFS = ve));
  var df = [
    "writeI53ToI64",
    "writeI53ToI64Clamped",
    "writeI53ToI64Signaling",
    "writeI53ToU64Clamped",
    "writeI53ToU64Signaling",
    "readI53FromI64",
    "readI53FromU64",
    "convertI32PairToI53",
    "convertI32PairToI53Checked",
    "convertU32PairToI53",
    "getTempRet0",
    "zeroMemory",
    "withStackSave",
    "inetPton4",
    "inetNtop4",
    "inetPton6",
    "inetNtop6",
    "readSockaddr",
    "writeSockaddr",
    "emscriptenLog",
    "runMainThreadEmAsm",
    "jstoi_q",
    "autoResumeAudioContext",
    "getDynCaller",
    "dynCall",
    "handleException",
    "runtimeKeepalivePush",
    "runtimeKeepalivePop",
    "callUserCallback",
    "maybeExit",
    "asmjsMangle",
    "HandleAllocator",
    "getNativeTypeSize",
    "addOnInit",
    "addOnPostCtor",
    "addOnPreMain",
    "addOnExit",
    "STACK_SIZE",
    "STACK_ALIGN",
    "POINTER_SIZE",
    "ASSERTIONS",
    "uleb128Encode",
    "sigToWasmTypes",
    "generateFuncType",
    "convertJsFunctionToWasm",
    "getEmptyTableSlot",
    "updateTableMap",
    "getFunctionAddress",
    "addFunction",
    "removeFunction",
    "reallyNegative",
    "unSign",
    "strLen",
    "reSign",
    "formatString",
    "intArrayToString",
    "stringToAscii",
    "stringToNewUTF8",
    "registerKeyEventCallback",
    "maybeCStringToJsString",
    "findEventTarget",
    "getBoundingClientRect",
    "fillMouseEventData",
    "registerMouseEventCallback",
    "registerWheelEventCallback",
    "registerUiEventCallback",
    "registerFocusEventCallback",
    "fillDeviceOrientationEventData",
    "registerDeviceOrientationEventCallback",
    "fillDeviceMotionEventData",
    "registerDeviceMotionEventCallback",
    "screenOrientation",
    "fillOrientationChangeEventData",
    "registerOrientationChangeEventCallback",
    "fillFullscreenChangeEventData",
    "registerFullscreenChangeEventCallback",
    "JSEvents_requestFullscreen",
    "JSEvents_resizeCanvasForFullscreen",
    "registerRestoreOldStyle",
    "hideEverythingExceptGivenElement",
    "restoreHiddenElements",
    "setLetterbox",
    "softFullscreenResizeWebGLRenderTarget",
    "doRequestFullscreen",
    "fillPointerlockChangeEventData",
    "registerPointerlockChangeEventCallback",
    "registerPointerlockErrorEventCallback",
    "requestPointerLock",
    "fillVisibilityChangeEventData",
    "registerVisibilityChangeEventCallback",
    "registerTouchEventCallback",
    "fillGamepadEventData",
    "registerGamepadEventCallback",
    "registerBeforeUnloadEventCallback",
    "fillBatteryEventData",
    "battery",
    "registerBatteryEventCallback",
    "setCanvasElementSize",
    "getCanvasElementSize",
    "jsStackTrace",
    "getCallstack",
    "convertPCtoSourceLocation",
    "wasiRightsToMuslOFlags",
    "wasiOFlagsToMuslOFlags",
    "safeSetTimeout",
    "setImmediateWrapped",
    "safeRequestAnimationFrame",
    "clearImmediateWrapped",
    "registerPostMainLoop",
    "registerPreMainLoop",
    "getPromise",
    "makePromise",
    "idsToPromises",
    "makePromiseCallback",
    "Browser_asyncPrepareDataCounter",
    "arraySum",
    "addDays",
    "getSocketFromFD",
    "getSocketAddress",
    "FS_mkdirTree",
    "_setNetworkCallback",
    "heapObjectForWebGLType",
    "toTypedArrayIndex",
    "webgl_enable_ANGLE_instanced_arrays",
    "webgl_enable_OES_vertex_array_object",
    "webgl_enable_WEBGL_draw_buffers",
    "webgl_enable_WEBGL_multi_draw",
    "webgl_enable_EXT_polygon_offset_clamp",
    "webgl_enable_EXT_clip_control",
    "webgl_enable_WEBGL_polygon_mode",
    "emscriptenWebGLGet",
    "computeUnpackAlignedImageSize",
    "colorChannelsInGlTextureFormat",
    "emscriptenWebGLGetTexPixelData",
    "emscriptenWebGLGetUniform",
    "webglGetUniformLocation",
    "webglPrepareUniformLocationsBeforeFirstUse",
    "webglGetLeftBracePos",
    "emscriptenWebGLGetVertexAttrib",
    "__glGetActiveAttribOrUniform",
    "writeGLArray",
    "registerWebGlEventCallback",
    "runAndAbortIfError",
    "ALLOC_NORMAL",
    "ALLOC_STACK",
    "allocate",
    "writeStringToMemory",
    "writeAsciiToMemory",
    "demangle",
    "stackTrace",
    "getFunctionArgsName",
    "createJsInvokerSignature",
    "PureVirtualError",
    "registerInheritedInstance",
    "unregisterInheritedInstance",
    "getInheritedInstanceCount",
    "getLiveInheritedInstances",
    "setDelayFunction",
    "count_emval_handles",
  ];
  df.forEach(Ee);
  var pf = [
    "run",
    "out",
    "err",
    "callMain",
    "abort",
    "wasmMemory",
    "wasmExports",
    "HEAPF32",
    "HEAPF64",
    "HEAP8",
    "HEAPU8",
    "HEAP16",
    "HEAPU16",
    "HEAP32",
    "HEAPU32",
    "HEAP64",
    "HEAPU64",
    "writeStackCookie",
    "checkStackCookie",
    "INT53_MAX",
    "INT53_MIN",
    "bigintToI53Checked",
    "stackSave",
    "stackRestore",
    "stackAlloc",
    "setTempRet0",
    "ptrToString",
    "exitJS",
    "getHeapMax",
    "growMemory",
    "ENV",
    "ERRNO_CODES",
    "strError",
    "DNS",
    "Protocols",
    "Sockets",
    "timers",
    "warnOnce",
    "readEmAsmArgsArray",
    "readEmAsmArgs",
    "runEmAsmFunction",
    "getExecutableName",
    "keepRuntimeAlive",
    "asyncLoad",
    "alignMemory",
    "mmapAlloc",
    "wasmTable",
    "getUniqueRunDependency",
    "noExitRuntime",
    "addOnPreRun",
    "addOnPostRun",
    "freeTableIndexes",
    "functionsInTableMap",
    "setValue",
    "getValue",
    "PATH",
    "PATH_FS",
    "UTF8Decoder",
    "UTF8ArrayToString",
    "UTF8ToString",
    "stringToUTF8Array",
    "stringToUTF8",
    "lengthBytesUTF8",
    "intArrayFromString",
    "AsciiToString",
    "UTF16Decoder",
    "UTF16ToString",
    "stringToUTF16",
    "lengthBytesUTF16",
    "UTF32ToString",
    "stringToUTF32",
    "lengthBytesUTF32",
    "stringToUTF8OnStack",
    "writeArrayToMemory",
    "JSEvents",
    "specialHTMLTargets",
    "findCanvasEventTarget",
    "currentFullscreenStrategy",
    "restoreOldWindowedStyle",
    "UNWIND_CACHE",
    "ExitStatus",
    "getEnvStrings",
    "checkWasiClock",
    "doReadv",
    "doWritev",
    "initRandomFill",
    "randomFill",
    "emSetImmediate",
    "emClearImmediate_deps",
    "emClearImmediate",
    "promiseMap",
    "uncaughtExceptionCount",
    "exceptionLast",
    "exceptionCaught",
    "ExceptionInfo",
    "findMatchingCatch",
    "getExceptionMessageCommon",
    "Browser",
    "requestFullscreen",
    "requestFullScreen",
    "setCanvasSize",
    "getUserMedia",
    "createContext",
    "getPreloadedImageData__data",
    "wget",
    "MONTH_DAYS_REGULAR",
    "MONTH_DAYS_LEAP",
    "MONTH_DAYS_REGULAR_CUMULATIVE",
    "MONTH_DAYS_LEAP_CUMULATIVE",
    "isLeapYear",
    "ydayFromDate",
    "SYSCALLS",
    "preloadPlugins",
    "FS_modeStringToFlags",
    "FS_getMode",
    "FS_stdin_getChar_buffer",
    "FS_stdin_getChar",
    "FS_readFile",
    "FS_root",
    "FS_mounts",
    "FS_devices",
    "FS_streams",
    "FS_nextInode",
    "FS_nameTable",
    "FS_currentPath",
    "FS_initialized",
    "FS_ignorePermissions",
    "FS_filesystems",
    "FS_syncFSRequests",
    "FS_readFiles",
    "FS_lookupPath",
    "FS_getPath",
    "FS_hashName",
    "FS_hashAddNode",
    "FS_hashRemoveNode",
    "FS_lookupNode",
    "FS_createNode",
    "FS_destroyNode",
    "FS_isRoot",
    "FS_isMountpoint",
    "FS_isFile",
    "FS_isDir",
    "FS_isLink",
    "FS_isChrdev",
    "FS_isBlkdev",
    "FS_isFIFO",
    "FS_isSocket",
    "FS_flagsToPermissionString",
    "FS_nodePermissions",
    "FS_mayLookup",
    "FS_mayCreate",
    "FS_mayDelete",
    "FS_mayOpen",
    "FS_checkOpExists",
    "FS_nextfd",
    "FS_getStreamChecked",
    "FS_getStream",
    "FS_createStream",
    "FS_closeStream",
    "FS_dupStream",
    "FS_doSetAttr",
    "FS_chrdev_stream_ops",
    "FS_major",
    "FS_minor",
    "FS_makedev",
    "FS_registerDevice",
    "FS_getDevice",
    "FS_getMounts",
    "FS_syncfs",
    "FS_mount",
    "FS_unmount",
    "FS_lookup",
    "FS_mknod",
    "FS_statfs",
    "FS_statfsStream",
    "FS_statfsNode",
    "FS_create",
    "FS_mkdir",
    "FS_mkdev",
    "FS_symlink",
    "FS_rename",
    "FS_rmdir",
    "FS_readdir",
    "FS_readlink",
    "FS_stat",
    "FS_fstat",
    "FS_lstat",
    "FS_doChmod",
    "FS_chmod",
    "FS_lchmod",
    "FS_fchmod",
    "FS_doChown",
    "FS_chown",
    "FS_lchown",
    "FS_fchown",
    "FS_doTruncate",
    "FS_truncate",
    "FS_ftruncate",
    "FS_utime",
    "FS_open",
    "FS_close",
    "FS_isClosed",
    "FS_llseek",
    "FS_read",
    "FS_write",
    "FS_mmap",
    "FS_msync",
    "FS_ioctl",
    "FS_writeFile",
    "FS_cwd",
    "FS_chdir",
    "FS_createDefaultDirectories",
    "FS_createDefaultDevices",
    "FS_createSpecialDirectories",
    "FS_createStandardStreams",
    "FS_staticInit",
    "FS_init",
    "FS_quit",
    "FS_findObject",
    "FS_analyzePath",
    "FS_createFile",
    "FS_forceLoadFile",
    "FS_absolutePath",
    "FS_createFolder",
    "FS_createLink",
    "FS_joinPath",
    "FS_mmapAlloc",
    "FS_standardizePath",
    "TTY",
    "PIPEFS",
    "SOCKFS",
    "tempFixedLengthArray",
    "miniTempWebGLFloatBuffers",
    "miniTempWebGLIntBuffers",
    "GL",
    "AL",
    "GLUT",
    "EGL",
    "GLEW",
    "IDBStore",
    "SDL",
    "SDL_gfx",
    "allocateUTF8",
    "allocateUTF8OnStack",
    "print",
    "printErr",
    "jstoi_s",
    "InternalError",
    "BindingError",
    "throwInternalError",
    "throwBindingError",
    "registeredTypes",
    "awaitingDependencies",
    "typeDependencies",
    "tupleRegistrations",
    "structRegistrations",
    "sharedRegisterType",
    "whenDependentTypesAreResolved",
    "getTypeName",
    "getFunctionName",
    "heap32VectorToArray",
    "requireRegisteredType",
    "usesDestructorStack",
    "checkArgCount",
    "getRequiredArgCount",
    "createJsInvoker",
    "UnboundTypeError",
    "GenericWireTypeSize",
    "EmValType",
    "EmValOptionalType",
    "throwUnboundTypeError",
    "ensureOverloadTable",
    "exposePublicSymbol",
    "replacePublicSymbol",
    "createNamedFunction",
    "embindRepr",
    "registeredInstances",
    "getBasestPointer",
    "getInheritedInstance",
    "registeredPointers",
    "registerType",
    "integerReadValueFromPointer",
    "enumReadValueFromPointer",
    "floatReadValueFromPointer",
    "assertIntegerRange",
    "readPointer",
    "runDestructors",
    "craftInvokerFunction",
    "embind__requireFunction",
    "genericPointerToWireType",
    "constNoSmartPtrRawPointerToWireType",
    "nonConstNoSmartPtrRawPointerToWireType",
    "init_RegisteredPointer",
    "RegisteredPointer",
    "RegisteredPointer_fromWireType",
    "runDestructor",
    "releaseClassHandle",
    "finalizationRegistry",
    "detachFinalizer_deps",
    "detachFinalizer",
    "attachFinalizer",
    "makeClassHandle",
    "init_ClassHandle",
    "ClassHandle",
    "throwInstanceAlreadyDeleted",
    "deletionQueue",
    "flushPendingDeletes",
    "delayFunction",
    "RegisteredClass",
    "shallowCopyInternalPointer",
    "downcastPointer",
    "upcastPointer",
    "validateThis",
    "char_0",
    "char_9",
    "makeLegalFunctionName",
    "emval_freelist",
    "emval_handles",
    "emval_symbols",
    "getStringOrSymbol",
    "Emval",
    "emval_get_global",
    "emval_returnValue",
    "emval_lookupTypes",
    "emval_methodCallers",
    "emval_addMethodCaller",
  ];
  (pf.forEach(we),
    (t.incrementExceptionRefcount = uf),
    (t.decrementExceptionRefcount = hf),
    (t.getExceptionMessage = cl));
  function mf() {
    he("fetchSettings");
  }
  var ul = {
      667668: () => {
        typeof t < "u" &&
          "mjDISABLESTRING mjENABLESTRING mjFRAMESTRING mjLABELSTRING mjRNDSTRING mjTIMERSTRING mjVISSTRING"
            .split(" ")
            .forEach(function (i) {
              Object.defineProperty(t, i, {
                get: function () {
                  return t["get_" + i]();
                },
                set: function (s) {},
                enumerable: !0,
                configurable: !0,
              });
            });
      },
    },
    hl = J("___getTypeName"),
    js = J("_malloc"),
    qs = J("_fflush"),
    Cn = J("_free"),
    Ys = J("_emscripten_stack_get_end"),
    fl = J("_strerror"),
    ge = J("_setThrew"),
    dl = J("__emscripten_tempret_set"),
    pl = J("_emscripten_stack_init"),
    ml = J("__emscripten_stack_restore"),
    _l = J("__emscripten_stack_alloc"),
    gl = J("_emscripten_stack_get_current"),
    Ks = J("___cxa_decrement_exception_refcount"),
    Zr = J("___cxa_increment_exception_refcount"),
    vl = J("___get_exception_message"),
    xl = J("___cxa_can_catch"),
    El = J("___cxa_get_exception_ptr");
  function _f(i) {
    ((hl = re("__getTypeName", 1)),
      (js = re("malloc", 1)),
      (qs = re("fflush", 1)),
      (Cn = re("free", 1)),
      (Ys = i.emscripten_stack_get_end),
      i.emscripten_stack_get_base,
      (fl = re("strerror", 1)),
      (ge = re("setThrew", 2)),
      (dl = re("_emscripten_tempret_set", 1)),
      (pl = i.emscripten_stack_init),
      i.emscripten_stack_get_free,
      (ml = i._emscripten_stack_restore),
      (_l = i._emscripten_stack_alloc),
      (gl = i.emscripten_stack_get_current),
      (Ks = re("__cxa_decrement_exception_refcount", 1)),
      (Zr = re("__cxa_increment_exception_refcount", 1)),
      (vl = re("__get_exception_message", 3)),
      (xl = re("__cxa_can_catch", 3)),
      (El = re("__cxa_get_exception_ptr", 1)));
  }
  var Sl = {
      __assert_fail: vn,
      __cxa_begin_catch: Nn,
      __cxa_current_primary_exception: lr,
      __cxa_end_catch: Lr,
      __cxa_find_matching_catch_2: Fr,
      __cxa_find_matching_catch_3: Ir,
      __cxa_find_matching_catch_4: Fs,
      __cxa_rethrow: Ur,
      __cxa_rethrow_primary_exception: Is,
      __cxa_throw: Us,
      __cxa_uncaught_exceptions: Ns,
      __resumeException: Os,
      __syscall_dup3: Lt,
      __syscall_fcntl64: jt,
      __syscall_fstat64: Yt,
      __syscall_ioctl: cr,
      __syscall_lstat64: Bn,
      __syscall_newfstatat: cu,
      __syscall_openat: uu,
      __syscall_stat64: hu,
      _abort_js: fu,
      _embind_register_bigint: pu,
      _embind_register_bool: mu,
      _embind_register_class: Lu,
      _embind_register_class_class_function: Nu,
      _embind_register_class_constructor: Ou,
      _embind_register_class_function: ku,
      _embind_register_class_property: Bu,
      _embind_register_constant: zu,
      _embind_register_emval: Zo,
      _embind_register_enum: Vu,
      _embind_register_enum_value: Gu,
      _embind_register_float: Xu,
      _embind_register_function: $u,
      _embind_register_integer: ju,
      _embind_register_memory_view: qu,
      _embind_register_optional: Ku,
      _embind_register_std_string: Zu,
      _embind_register_std_wstring: rh,
      _embind_register_user_type: sh,
      _embind_register_void: ah,
      _emscripten_throw_longjmp: oh,
      _emval_as: lh,
      _emval_call: ch,
      _emval_call_method: hh,
      _emval_decref: Ws,
      _emval_get_global: fh,
      _emval_get_method_caller: mh,
      _emval_get_property: _h,
      _emval_incref: gh,
      _emval_is_number: vh,
      _emval_is_string: xh,
      _emval_new_array: Eh,
      _emval_new_cstring: Sh,
      _emval_run_destructors: yh,
      _emval_take_value: Mh,
      _emval_throw: Th,
      _localtime_js: Ph,
      _mktime_js: Dh,
      _tzset_js: Lh,
      clock_time_get: Ih,
      emscripten_asm_const_int: Oh,
      emscripten_date_now: rl,
      emscripten_get_heap_max: kh,
      emscripten_get_now: il,
      emscripten_resize_heap: Hh,
      environ_get: Gh,
      environ_sizes_get: Wh,
      exit: jh,
      fd_close: qh,
      fd_read: Kh,
      fd_seek: Zh,
      fd_write: Qh,
      invoke_ddd: Gd,
      invoke_dddi: ad,
      invoke_dddidi: od,
      invoke_ddidi: sd,
      invoke_di: ld,
      invoke_dii: Kf,
      invoke_diii: Pf,
      invoke_diiii: rd,
      invoke_diiiidd: nd,
      invoke_diiiidi: Ff,
      invoke_diiiii: wf,
      invoke_diiiiii: Bf,
      invoke_diiiiiii: cd,
      invoke_diiiiiiiii: Of,
      invoke_diiiiiiiiiiii: kf,
      invoke_fiii: ep,
      invoke_i: bf,
      invoke_id: kd,
      invoke_ii: xf,
      invoke_iid: xd,
      invoke_iidddd: qd,
      invoke_iidiii: jf,
      invoke_iidiiid: Xf,
      invoke_iidiiiiidi: qf,
      invoke_iif: jd,
      invoke_iii: gf,
      invoke_iiid: Yf,
      invoke_iiididdddddd: $f,
      invoke_iiidiiiiiiii: Wf,
      invoke_iiii: yf,
      invoke_iiiidddiiiii: hd,
      invoke_iiiii: Cf,
      invoke_iiiiid: Cd,
      invoke_iiiiii: Td,
      invoke_iiiiiii: Sd,
      invoke_iiiiiiii: vd,
      invoke_iiiiiiiidd: Pd,
      invoke_iiiiiiiii: td,
      invoke_iiiiiiiiii: yd,
      invoke_iiiiiiiiiidddiiiiiiiii: Gf,
      invoke_iiiiiiiiiii: Qd,
      invoke_iiiiiiiiiiii: tp,
      invoke_iiiiiiiiiiiii: Od,
      invoke_iiij: Md,
      invoke_iiji: Rd,
      invoke_j: Zd,
      invoke_ji: Nd,
      invoke_jiiii: wd,
      invoke_jij: Ud,
      invoke_v: Sf,
      invoke_vi: Ef,
      invoke_vid: Ed,
      invoke_viddd: bd,
      invoke_vidddd: Ad,
      invoke_vidi: id,
      invoke_vidiii: Hf,
      invoke_vii: Tf,
      invoke_viid: Qf,
      invoke_viiddi: Id,
      invoke_viiddidi: Fd,
      invoke_viiddii: ud,
      invoke_viidi: Jf,
      invoke_viidii: Lf,
      invoke_viidiii: _d,
      invoke_viidiiid: pd,
      invoke_viidiiiii: Vf,
      invoke_viidiiiiidi: gd,
      invoke_viidiiiiiiii: zf,
      invoke_viii: vf,
      invoke_viiid: Uf,
      invoke_viiidd: Ld,
      invoke_viiidi: Zf,
      invoke_viiididdddddd: md,
      invoke_viiidiiiiiiii: dd,
      invoke_viiii: Rf,
      invoke_viiiiddd: Dd,
      invoke_viiiidi: Wd,
      invoke_viiiifi: Xd,
      invoke_viiiii: Mf,
      invoke_viiiiid: If,
      invoke_viiiiii: Af,
      invoke_viiiiiii: Df,
      invoke_viiiiiiii: ed,
      invoke_viiiiiiiiii: Hd,
      invoke_viiiiiiiiiidddiiiiiiiii: fd,
      invoke_viiiiiiiiiiid: Nf,
      invoke_viiiiiiiiiiiii: zd,
      invoke_viiiiiiiiiiiiiii: np,
      invoke_viiiiiiiiiiiiiiiiii: Vd,
      invoke_viiiij: Yd,
      invoke_viij: Kd,
      invoke_viijii: Jd,
      invoke_vij: $d,
      invoke_vijjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj:
        Bd,
      llvm_eh_typeid_for: ef,
    },
    mi = await De();
  function gf(i, s, l) {
    var c = B();
    try {
      return xe(i)(s, l);
    } catch (f) {
      if ((G(c), !(f instanceof M))) throw f;
      ge(1, 0);
    }
  }
  function vf(i, s, l, c) {
    var f = B();
    try {
      xe(i)(s, l, c);
    } catch (g) {
      if ((G(f), !(g instanceof M))) throw g;
      ge(1, 0);
    }
  }
  function xf(i, s) {
    var l = B();
    try {
      return xe(i)(s);
    } catch (c) {
      if ((G(l), !(c instanceof M))) throw c;
      ge(1, 0);
    }
  }
  function Ef(i, s) {
    var l = B();
    try {
      xe(i)(s);
    } catch (c) {
      if ((G(l), !(c instanceof M))) throw c;
      ge(1, 0);
    }
  }
  function Sf(i) {
    var s = B();
    try {
      xe(i)();
    } catch (l) {
      if ((G(s), !(l instanceof M))) throw l;
      ge(1, 0);
    }
  }
  function yf(i, s, l, c) {
    var f = B();
    try {
      return xe(i)(s, l, c);
    } catch (g) {
      if ((G(f), !(g instanceof M))) throw g;
      ge(1, 0);
    }
  }
  function Mf(i, s, l, c, f, g) {
    var T = B();
    try {
      xe(i)(s, l, c, f, g);
    } catch (w) {
      if ((G(T), !(w instanceof M))) throw w;
      ge(1, 0);
    }
  }
  function Tf(i, s, l) {
    var c = B();
    try {
      xe(i)(s, l);
    } catch (f) {
      if ((G(c), !(f instanceof M))) throw f;
      ge(1, 0);
    }
  }
  function wf(i, s, l, c, f, g) {
    var T = B();
    try {
      return xe(i)(s, l, c, f, g);
    } catch (w) {
      if ((G(T), !(w instanceof M))) throw w;
      ge(1, 0);
    }
  }
  function bf(i) {
    var s = B();
    try {
      return xe(i)();
    } catch (l) {
      if ((G(s), !(l instanceof M))) throw l;
      ge(1, 0);
    }
  }
  function Af(i, s, l, c, f, g, T) {
    var w = B();
    try {
      xe(i)(s, l, c, f, g, T);
    } catch (F) {
      if ((G(w), !(F instanceof M))) throw F;
      ge(1, 0);
    }
  }
  function Rf(i, s, l, c, f) {
    var g = B();
    try {
      xe(i)(s, l, c, f);
    } catch (T) {
      if ((G(g), !(T instanceof M))) throw T;
      ge(1, 0);
    }
  }
  function Cf(i, s, l, c, f) {
    var g = B();
    try {
      return xe(i)(s, l, c, f);
    } catch (T) {
      if ((G(g), !(T instanceof M))) throw T;
      ge(1, 0);
    }
  }
  function Pf(i, s, l, c) {
    var f = B();
    try {
      return xe(i)(s, l, c);
    } catch (g) {
      if ((G(f), !(g instanceof M))) throw g;
      ge(1, 0);
    }
  }
  function Df(i, s, l, c, f, g, T, w) {
    var F = B();
    try {
      xe(i)(s, l, c, f, g, T, w);
    } catch (W) {
      if ((G(F), !(W instanceof M))) throw W;
      ge(1, 0);
    }
  }
  function Lf(i, s, l, c, f, g) {
    var T = B();
    try {
      xe(i)(s, l, c, f, g);
    } catch (w) {
      if ((G(T), !(w instanceof M))) throw w;
      ge(1, 0);
    }
  }
  function Ff(i, s, l, c, f, g, T) {
    var w = B();
    try {
      return xe(i)(s, l, c, f, g, T);
    } catch (F) {
      if ((G(w), !(F instanceof M))) throw F;
      ge(1, 0);
    }
  }
  function If(i, s, l, c, f, g, T) {
    var w = B();
    try {
      xe(i)(s, l, c, f, g, T);
    } catch (F) {
      if ((G(w), !(F instanceof M))) throw F;
      ge(1, 0);
    }
  }
  function Uf(i, s, l, c, f) {
    var g = B();
    try {
      xe(i)(s, l, c, f);
    } catch (T) {
      if ((G(g), !(T instanceof M))) throw T;
      ge(1, 0);
    }
  }
  function Nf(i, s, l, c, f, g, T, w, F, W, Z, ce, fe) {
    var ue = B();
    try {
      xe(i)(s, l, c, f, g, T, w, F, W, Z, ce, fe);
    } catch (me) {
      if ((G(ue), !(me instanceof M))) throw me;
      ge(1, 0);
    }
  }
  function Of(i, s, l, c, f, g, T, w, F, W) {
    var Z = B();
    try {
      return xe(i)(s, l, c, f, g, T, w, F, W);
    } catch (ce) {
      if ((G(Z), !(ce instanceof M))) throw ce;
      ge(1, 0);
    }
  }
  function kf(i, s, l, c, f, g, T, w, F, W, Z, ce, fe) {
    var ue = B();
    try {
      return xe(i)(s, l, c, f, g, T, w, F, W, Z, ce, fe);
    } catch (me) {
      if ((G(ue), !(me instanceof M))) throw me;
      ge(1, 0);
    }
  }
  function Bf(i, s, l, c, f, g, T) {
    var w = B();
    try {
      return xe(i)(s, l, c, f, g, T);
    } catch (F) {
      if ((G(w), !(F instanceof M))) throw F;
      ge(1, 0);
    }
  }
  function zf(i, s, l, c, f, g, T, w, F, W, Z, ce) {
    var fe = B();
    try {
      xe(i)(s, l, c, f, g, T, w, F, W, Z, ce);
    } catch (ue) {
      if ((G(fe), !(ue instanceof M))) throw ue;
      ge(1, 0);
    }
  }
  function Hf(i, s, l, c, f, g) {
    var T = B();
    try {
      xe(i)(s, l, c, f, g);
    } catch (w) {
      if ((G(T), !(w instanceof M))) throw w;
      ge(1, 0);
    }
  }
  function Vf(i, s, l, c, f, g, T, w, F) {
    var W = B();
    try {
      xe(i)(s, l, c, f, g, T, w, F);
    } catch (Z) {
      if ((G(W), !(Z instanceof M))) throw Z;
      ge(1, 0);
    }
  }
  function Gf(
    i,
    s,
    l,
    c,
    f,
    g,
    T,
    w,
    F,
    W,
    Z,
    ce,
    fe,
    ue,
    me,
    $e,
    ft,
    at,
    Ct,
    _t,
    Kt,
    Ht,
  ) {
    var tn = B();
    try {
      return xe(i)(
        s,
        l,
        c,
        f,
        g,
        T,
        w,
        F,
        W,
        Z,
        ce,
        fe,
        ue,
        me,
        $e,
        ft,
        at,
        Ct,
        _t,
        Kt,
        Ht,
      );
    } catch (Tt) {
      if ((G(tn), !(Tt instanceof M))) throw Tt;
      ge(1, 0);
    }
  }
  function Wf(i, s, l, c, f, g, T, w, F, W, Z, ce) {
    var fe = B();
    try {
      return xe(i)(s, l, c, f, g, T, w, F, W, Z, ce);
    } catch (ue) {
      if ((G(fe), !(ue instanceof M))) throw ue;
      ge(1, 0);
    }
  }
  function Xf(i, s, l, c, f, g, T) {
    var w = B();
    try {
      return xe(i)(s, l, c, f, g, T);
    } catch (F) {
      if ((G(w), !(F instanceof M))) throw F;
      ge(1, 0);
    }
  }
  function $f(i, s, l, c, f, g, T, w, F, W, Z, ce) {
    var fe = B();
    try {
      return xe(i)(s, l, c, f, g, T, w, F, W, Z, ce);
    } catch (ue) {
      if ((G(fe), !(ue instanceof M))) throw ue;
      ge(1, 0);
    }
  }
  function jf(i, s, l, c, f, g) {
    var T = B();
    try {
      return xe(i)(s, l, c, f, g);
    } catch (w) {
      if ((G(T), !(w instanceof M))) throw w;
      ge(1, 0);
    }
  }
  function qf(i, s, l, c, f, g, T, w, F, W) {
    var Z = B();
    try {
      return xe(i)(s, l, c, f, g, T, w, F, W);
    } catch (ce) {
      if ((G(Z), !(ce instanceof M))) throw ce;
      ge(1, 0);
    }
  }
  function Yf(i, s, l, c) {
    var f = B();
    try {
      return xe(i)(s, l, c);
    } catch (g) {
      if ((G(f), !(g instanceof M))) throw g;
      ge(1, 0);
    }
  }
  function Kf(i, s, l) {
    var c = B();
    try {
      return xe(i)(s, l);
    } catch (f) {
      if ((G(c), !(f instanceof M))) throw f;
      ge(1, 0);
    }
  }
  function Zf(i, s, l, c, f, g) {
    var T = B();
    try {
      xe(i)(s, l, c, f, g);
    } catch (w) {
      if ((G(T), !(w instanceof M))) throw w;
      ge(1, 0);
    }
  }
  function Jf(i, s, l, c, f) {
    var g = B();
    try {
      xe(i)(s, l, c, f);
    } catch (T) {
      if ((G(g), !(T instanceof M))) throw T;
      ge(1, 0);
    }
  }
  function Qf(i, s, l, c) {
    var f = B();
    try {
      xe(i)(s, l, c);
    } catch (g) {
      if ((G(f), !(g instanceof M))) throw g;
      ge(1, 0);
    }
  }
  function ed(i, s, l, c, f, g, T, w, F) {
    var W = B();
    try {
      xe(i)(s, l, c, f, g, T, w, F);
    } catch (Z) {
      if ((G(W), !(Z instanceof M))) throw Z;
      ge(1, 0);
    }
  }
  function td(i, s, l, c, f, g, T, w, F) {
    var W = B();
    try {
      return xe(i)(s, l, c, f, g, T, w, F);
    } catch (Z) {
      if ((G(W), !(Z instanceof M))) throw Z;
      ge(1, 0);
    }
  }
  function nd(i, s, l, c, f, g, T) {
    var w = B();
    try {
      return xe(i)(s, l, c, f, g, T);
    } catch (F) {
      if ((G(w), !(F instanceof M))) throw F;
      ge(1, 0);
    }
  }
  function id(i, s, l, c) {
    var f = B();
    try {
      xe(i)(s, l, c);
    } catch (g) {
      if ((G(f), !(g instanceof M))) throw g;
      ge(1, 0);
    }
  }
  function rd(i, s, l, c, f) {
    var g = B();
    try {
      return xe(i)(s, l, c, f);
    } catch (T) {
      if ((G(g), !(T instanceof M))) throw T;
      ge(1, 0);
    }
  }
  function sd(i, s, l, c, f) {
    var g = B();
    try {
      return xe(i)(s, l, c, f);
    } catch (T) {
      if ((G(g), !(T instanceof M))) throw T;
      ge(1, 0);
    }
  }
  function ad(i, s, l, c) {
    var f = B();
    try {
      return xe(i)(s, l, c);
    } catch (g) {
      if ((G(f), !(g instanceof M))) throw g;
      ge(1, 0);
    }
  }
  function od(i, s, l, c, f, g) {
    var T = B();
    try {
      return xe(i)(s, l, c, f, g);
    } catch (w) {
      if ((G(T), !(w instanceof M))) throw w;
      ge(1, 0);
    }
  }
  function ld(i, s) {
    var l = B();
    try {
      return xe(i)(s);
    } catch (c) {
      if ((G(l), !(c instanceof M))) throw c;
      ge(1, 0);
    }
  }
  function cd(i, s, l, c, f, g, T, w) {
    var F = B();
    try {
      return xe(i)(s, l, c, f, g, T, w);
    } catch (W) {
      if ((G(F), !(W instanceof M))) throw W;
      ge(1, 0);
    }
  }
  function ud(i, s, l, c, f, g, T) {
    var w = B();
    try {
      xe(i)(s, l, c, f, g, T);
    } catch (F) {
      if ((G(w), !(F instanceof M))) throw F;
      ge(1, 0);
    }
  }
  function hd(i, s, l, c, f, g, T, w, F, W, Z, ce) {
    var fe = B();
    try {
      return xe(i)(s, l, c, f, g, T, w, F, W, Z, ce);
    } catch (ue) {
      if ((G(fe), !(ue instanceof M))) throw ue;
      ge(1, 0);
    }
  }
  function fd(
    i,
    s,
    l,
    c,
    f,
    g,
    T,
    w,
    F,
    W,
    Z,
    ce,
    fe,
    ue,
    me,
    $e,
    ft,
    at,
    Ct,
    _t,
    Kt,
    Ht,
    tn,
  ) {
    var Tt = B();
    try {
      xe(i)(
        s,
        l,
        c,
        f,
        g,
        T,
        w,
        F,
        W,
        Z,
        ce,
        fe,
        ue,
        me,
        $e,
        ft,
        at,
        Ct,
        _t,
        Kt,
        Ht,
        tn,
      );
    } catch (_i) {
      if ((G(Tt), !(_i instanceof M))) throw _i;
      ge(1, 0);
    }
  }
  function dd(i, s, l, c, f, g, T, w, F, W, Z, ce, fe) {
    var ue = B();
    try {
      xe(i)(s, l, c, f, g, T, w, F, W, Z, ce, fe);
    } catch (me) {
      if ((G(ue), !(me instanceof M))) throw me;
      ge(1, 0);
    }
  }
  function pd(i, s, l, c, f, g, T, w) {
    var F = B();
    try {
      xe(i)(s, l, c, f, g, T, w);
    } catch (W) {
      if ((G(F), !(W instanceof M))) throw W;
      ge(1, 0);
    }
  }
  function md(i, s, l, c, f, g, T, w, F, W, Z, ce, fe) {
    var ue = B();
    try {
      xe(i)(s, l, c, f, g, T, w, F, W, Z, ce, fe);
    } catch (me) {
      if ((G(ue), !(me instanceof M))) throw me;
      ge(1, 0);
    }
  }
  function _d(i, s, l, c, f, g, T) {
    var w = B();
    try {
      xe(i)(s, l, c, f, g, T);
    } catch (F) {
      if ((G(w), !(F instanceof M))) throw F;
      ge(1, 0);
    }
  }
  function gd(i, s, l, c, f, g, T, w, F, W, Z) {
    var ce = B();
    try {
      xe(i)(s, l, c, f, g, T, w, F, W, Z);
    } catch (fe) {
      if ((G(ce), !(fe instanceof M))) throw fe;
      ge(1, 0);
    }
  }
  function vd(i, s, l, c, f, g, T, w) {
    var F = B();
    try {
      return xe(i)(s, l, c, f, g, T, w);
    } catch (W) {
      if ((G(F), !(W instanceof M))) throw W;
      ge(1, 0);
    }
  }
  function xd(i, s, l) {
    var c = B();
    try {
      return xe(i)(s, l);
    } catch (f) {
      if ((G(c), !(f instanceof M))) throw f;
      ge(1, 0);
    }
  }
  function Ed(i, s, l) {
    var c = B();
    try {
      xe(i)(s, l);
    } catch (f) {
      if ((G(c), !(f instanceof M))) throw f;
      ge(1, 0);
    }
  }
  function Sd(i, s, l, c, f, g, T) {
    var w = B();
    try {
      return xe(i)(s, l, c, f, g, T);
    } catch (F) {
      if ((G(w), !(F instanceof M))) throw F;
      ge(1, 0);
    }
  }
  function yd(i, s, l, c, f, g, T, w, F, W) {
    var Z = B();
    try {
      return xe(i)(s, l, c, f, g, T, w, F, W);
    } catch (ce) {
      if ((G(Z), !(ce instanceof M))) throw ce;
      ge(1, 0);
    }
  }
  function Md(i, s, l, c) {
    var f = B();
    try {
      return xe(i)(s, l, c);
    } catch (g) {
      if ((G(f), !(g instanceof M))) throw g;
      ge(1, 0);
    }
  }
  function Td(i, s, l, c, f, g) {
    var T = B();
    try {
      return xe(i)(s, l, c, f, g);
    } catch (w) {
      if ((G(T), !(w instanceof M))) throw w;
      ge(1, 0);
    }
  }
  function wd(i, s, l, c, f) {
    var g = B();
    try {
      return xe(i)(s, l, c, f);
    } catch (T) {
      if ((G(g), !(T instanceof M))) throw T;
      return (ge(1, 0), 0n);
    }
  }
  function bd(i, s, l, c, f) {
    var g = B();
    try {
      xe(i)(s, l, c, f);
    } catch (T) {
      if ((G(g), !(T instanceof M))) throw T;
      ge(1, 0);
    }
  }
  function Ad(i, s, l, c, f, g) {
    var T = B();
    try {
      xe(i)(s, l, c, f, g);
    } catch (w) {
      if ((G(T), !(w instanceof M))) throw w;
      ge(1, 0);
    }
  }
  function Rd(i, s, l, c) {
    var f = B();
    try {
      return xe(i)(s, l, c);
    } catch (g) {
      if ((G(f), !(g instanceof M))) throw g;
      ge(1, 0);
    }
  }
  function Cd(i, s, l, c, f, g) {
    var T = B();
    try {
      return xe(i)(s, l, c, f, g);
    } catch (w) {
      if ((G(T), !(w instanceof M))) throw w;
      ge(1, 0);
    }
  }
  function Pd(i, s, l, c, f, g, T, w, F, W) {
    var Z = B();
    try {
      return xe(i)(s, l, c, f, g, T, w, F, W);
    } catch (ce) {
      if ((G(Z), !(ce instanceof M))) throw ce;
      ge(1, 0);
    }
  }
  function Dd(i, s, l, c, f, g, T, w) {
    var F = B();
    try {
      xe(i)(s, l, c, f, g, T, w);
    } catch (W) {
      if ((G(F), !(W instanceof M))) throw W;
      ge(1, 0);
    }
  }
  function Ld(i, s, l, c, f, g) {
    var T = B();
    try {
      xe(i)(s, l, c, f, g);
    } catch (w) {
      if ((G(T), !(w instanceof M))) throw w;
      ge(1, 0);
    }
  }
  function Fd(i, s, l, c, f, g, T, w) {
    var F = B();
    try {
      xe(i)(s, l, c, f, g, T, w);
    } catch (W) {
      if ((G(F), !(W instanceof M))) throw W;
      ge(1, 0);
    }
  }
  function Id(i, s, l, c, f, g) {
    var T = B();
    try {
      xe(i)(s, l, c, f, g);
    } catch (w) {
      if ((G(T), !(w instanceof M))) throw w;
      ge(1, 0);
    }
  }
  function Ud(i, s, l) {
    var c = B();
    try {
      return xe(i)(s, l);
    } catch (f) {
      if ((G(c), !(f instanceof M))) throw f;
      return (ge(1, 0), 0n);
    }
  }
  function Nd(i, s) {
    var l = B();
    try {
      return xe(i)(s);
    } catch (c) {
      if ((G(l), !(c instanceof M))) throw c;
      return (ge(1, 0), 0n);
    }
  }
  function Od(i, s, l, c, f, g, T, w, F, W, Z, ce, fe) {
    var ue = B();
    try {
      return xe(i)(s, l, c, f, g, T, w, F, W, Z, ce, fe);
    } catch (me) {
      if ((G(ue), !(me instanceof M))) throw me;
      ge(1, 0);
    }
  }
  function kd(i, s) {
    var l = B();
    try {
      return xe(i)(s);
    } catch (c) {
      if ((G(l), !(c instanceof M))) throw c;
      ge(1, 0);
    }
  }
  function Bd(
    i,
    s,
    l,
    c,
    f,
    g,
    T,
    w,
    F,
    W,
    Z,
    ce,
    fe,
    ue,
    me,
    $e,
    ft,
    at,
    Ct,
    _t,
    Kt,
    Ht,
    tn,
    Tt,
    _i,
    ap,
    op,
    lp,
    cp,
    up,
    hp,
    fp,
    dp,
    pp,
    mp,
    _p,
    gp,
    vp,
    xp,
    Ep,
    Sp,
    yp,
    Mp,
    Tp,
    wp,
    bp,
    Ap,
    Rp,
    Cp,
    Pp,
    Dp,
    Lp,
    Fp,
    Ip,
    Up,
    Np,
    Op,
    kp,
    Bp,
    zp,
    Hp,
    Vp,
    Gp,
    Wp,
    Xp,
    $p,
    jp,
    qp,
    Yp,
    Kp,
    Zp,
    Jp,
    Qp,
    em,
    tm,
    nm,
    im,
    rm,
    sm,
    am,
    om,
    lm,
    cm,
    um,
    hm,
    fm,
  ) {
    var dm = B();
    try {
      xe(i)(
        s,
        l,
        c,
        f,
        g,
        T,
        w,
        F,
        W,
        Z,
        ce,
        fe,
        ue,
        me,
        $e,
        ft,
        at,
        Ct,
        _t,
        Kt,
        Ht,
        tn,
        Tt,
        _i,
        ap,
        op,
        lp,
        cp,
        up,
        hp,
        fp,
        dp,
        pp,
        mp,
        _p,
        gp,
        vp,
        xp,
        Ep,
        Sp,
        yp,
        Mp,
        Tp,
        wp,
        bp,
        Ap,
        Rp,
        Cp,
        Pp,
        Dp,
        Lp,
        Fp,
        Ip,
        Up,
        Np,
        Op,
        kp,
        Bp,
        zp,
        Hp,
        Vp,
        Gp,
        Wp,
        Xp,
        $p,
        jp,
        qp,
        Yp,
        Kp,
        Zp,
        Jp,
        Qp,
        em,
        tm,
        nm,
        im,
        rm,
        sm,
        am,
        om,
        lm,
        cm,
        um,
        hm,
        fm,
      );
    } catch (Ml) {
      if ((G(dm), !(Ml instanceof M))) throw Ml;
      ge(1, 0);
    }
  }
  function zd(i, s, l, c, f, g, T, w, F, W, Z, ce, fe, ue) {
    var me = B();
    try {
      xe(i)(s, l, c, f, g, T, w, F, W, Z, ce, fe, ue);
    } catch ($e) {
      if ((G(me), !($e instanceof M))) throw $e;
      ge(1, 0);
    }
  }
  function Hd(i, s, l, c, f, g, T, w, F, W, Z) {
    var ce = B();
    try {
      xe(i)(s, l, c, f, g, T, w, F, W, Z);
    } catch (fe) {
      if ((G(ce), !(fe instanceof M))) throw fe;
      ge(1, 0);
    }
  }
  function Vd(i, s, l, c, f, g, T, w, F, W, Z, ce, fe, ue, me, $e, ft, at, Ct) {
    var _t = B();
    try {
      xe(i)(s, l, c, f, g, T, w, F, W, Z, ce, fe, ue, me, $e, ft, at, Ct);
    } catch (Kt) {
      if ((G(_t), !(Kt instanceof M))) throw Kt;
      ge(1, 0);
    }
  }
  function Gd(i, s, l) {
    var c = B();
    try {
      return xe(i)(s, l);
    } catch (f) {
      if ((G(c), !(f instanceof M))) throw f;
      ge(1, 0);
    }
  }
  function Wd(i, s, l, c, f, g, T) {
    var w = B();
    try {
      xe(i)(s, l, c, f, g, T);
    } catch (F) {
      if ((G(w), !(F instanceof M))) throw F;
      ge(1, 0);
    }
  }
  function Xd(i, s, l, c, f, g, T) {
    var w = B();
    try {
      xe(i)(s, l, c, f, g, T);
    } catch (F) {
      if ((G(w), !(F instanceof M))) throw F;
      ge(1, 0);
    }
  }
  function $d(i, s, l) {
    var c = B();
    try {
      xe(i)(s, l);
    } catch (f) {
      if ((G(c), !(f instanceof M))) throw f;
      ge(1, 0);
    }
  }
  function jd(i, s, l) {
    var c = B();
    try {
      return xe(i)(s, l);
    } catch (f) {
      if ((G(c), !(f instanceof M))) throw f;
      ge(1, 0);
    }
  }
  function qd(i, s, l, c, f, g) {
    var T = B();
    try {
      return xe(i)(s, l, c, f, g);
    } catch (w) {
      if ((G(T), !(w instanceof M))) throw w;
      ge(1, 0);
    }
  }
  function Yd(i, s, l, c, f, g) {
    var T = B();
    try {
      xe(i)(s, l, c, f, g);
    } catch (w) {
      if ((G(T), !(w instanceof M))) throw w;
      ge(1, 0);
    }
  }
  function Kd(i, s, l, c) {
    var f = B();
    try {
      xe(i)(s, l, c);
    } catch (g) {
      if ((G(f), !(g instanceof M))) throw g;
      ge(1, 0);
    }
  }
  function Zd(i) {
    var s = B();
    try {
      return xe(i)();
    } catch (l) {
      if ((G(s), !(l instanceof M))) throw l;
      return (ge(1, 0), 0n);
    }
  }
  function Jd(i, s, l, c, f, g) {
    var T = B();
    try {
      xe(i)(s, l, c, f, g);
    } catch (w) {
      if ((G(T), !(w instanceof M))) throw w;
      ge(1, 0);
    }
  }
  function Qd(i, s, l, c, f, g, T, w, F, W, Z) {
    var ce = B();
    try {
      return xe(i)(s, l, c, f, g, T, w, F, W, Z);
    } catch (fe) {
      if ((G(ce), !(fe instanceof M))) throw fe;
      ge(1, 0);
    }
  }
  function ep(i, s, l, c) {
    var f = B();
    try {
      return xe(i)(s, l, c);
    } catch (g) {
      if ((G(f), !(g instanceof M))) throw g;
      ge(1, 0);
    }
  }
  function tp(i, s, l, c, f, g, T, w, F, W, Z, ce) {
    var fe = B();
    try {
      return xe(i)(s, l, c, f, g, T, w, F, W, Z, ce);
    } catch (ue) {
      if ((G(fe), !(ue instanceof M))) throw ue;
      ge(1, 0);
    }
  }
  function np(i, s, l, c, f, g, T, w, F, W, Z, ce, fe, ue, me, $e) {
    var ft = B();
    try {
      xe(i)(s, l, c, f, g, T, w, F, W, Z, ce, fe, ue, me, $e);
    } catch (at) {
      if ((G(ft), !(at instanceof M))) throw at;
      ge(1, 0);
    }
  }
  var yl;
  function ip() {
    (pl(), q());
  }
  function Zs() {
    if (Ie > 0) {
      Ze = Zs;
      return;
    }
    if ((ip(), Ye(), Ie > 0)) {
      Ze = Zs;
      return;
    }
    function i() {
      (P(!yl),
        (yl = !0),
        (t.calledRun = !0),
        !k &&
          (Oe(),
          Re?.(t),
          t.onRuntimeInitialized?.(),
          te("onRuntimeInitialized"),
          P(
            !t._main,
            'compiled without a main, but one is present. if you added it from JS, use Module["onRuntimeInitialized"]',
          ),
          Rt()));
    }
    (t.setStatus
      ? (t.setStatus("Running..."),
        setTimeout(() => {
          (setTimeout(() => t.setStatus(""), 1), i());
        }, 1))
      : i(),
      C());
  }
  function rp() {
    var i = N,
      s = U,
      l = !1;
    N = U = (c) => {
      l = !0;
    };
    try {
      (qs(0),
        ["stdout", "stderr"].forEach((c) => {
          var f = S.analyzePath("/dev/" + c);
          if (f) {
            var g = f.object,
              T = g.rdev,
              w = Ge.ttys[T];
            w?.output?.length && (l = !0);
          }
        }));
    } catch {}
    ((N = i),
      (U = s),
      l &&
        Fe(
          "stdio streams had content in them that was not flushed. you should set EXIT_RUNTIME to 1 (see the Emscripten FAQ), or make sure to emit a newline when you printf etc.",
        ));
  }
  function sp() {
    if (t.preInit)
      for (
        typeof t.preInit == "function" && (t.preInit = [t.preInit]);
        t.preInit.length > 0;

      )
        t.preInit.shift()();
    te("preInit");
  }
  (sp(),
    Zs(),
    xt
      ? (e = t)
      : (e = new Promise((i, s) => {
          ((Re = i), (We = s));
        })));
  for (const i of Object.keys(t))
    i in r ||
      Object.defineProperty(r, i, {
        configurable: !0,
        get() {
          $(
            `Access to module property ('${i}') is no longer possible via the module constructor argument; Instead, use the result of the module constructor.`,
          );
        },
      });
  return e;
};
const XE = document.querySelector("#app"),
  wc = document.querySelector("#loading"),
  bc = document.querySelector("#loadmsg"),
  Fn = new R_();
Fn.background = new pt(6390412);
Fn.fog = new Do(8893910, 30, 90);
const sr = new mn(43, innerWidth / innerHeight, 0.05, 100);
sr.up.set(0, 0, 1);
sr.position.set(12.8, 5.0, 3.1);
const Yn = new bE({ antialias: !0, powerPreference: "high-performance" });
Yn.setPixelRatio(Math.min(devicePixelRatio, 2));
Yn.setSize(innerWidth, innerHeight);
Yn.shadowMap.enabled = !0;
Yn.shadowMap.type = Cc;
Yn.outputColorSpace = on;
XE.append(Yn.domElement);
const Dr = new RE(sr, Yn.domElement);
Dr.target.set(7.4, 2.85, 1.0);
Dr.enableDamping = !0;
Dr.minDistance = 1.2;
Dr.maxDistance = 32;
window.__CAM = sr; window.__ORBIT = Dr;
Fn.add(new k_(16773600, 4866104, 2.15));
const Ls = new H_(16777215, 2.9);
Ls.position.set(-7, -10, 16);
Ls.castShadow = !0;
Ls.shadow.mapSize.set(2048, 2048);
Ls.shadow.bias = -0.00035; Ls.shadow.normalBias = 0.04; Ls.shadow.camera.left = -16; Ls.shadow.camera.right = 16; Ls.shadow.camera.top = 16; Ls.shadow.camera.bottom = -16; Ls.shadow.camera.near = 1; Ls.shadow.camera.far = 60;
Fn.add(Ls);
const Fs = new H_(16777215, 1.7);
Fs.position.set(8, 10, 12);
Fs.castShadow = !1;
Fn.add(Fs);
const Gs = new H_(16777215, 0.9);
Gs.position.set(0, 14, 6);
Gs.castShadow = !1;
Fn.add(Gs);
const Da = "./assets/unitree_h2/",
  Ac = [
    "pelvis.stl",
    "waist_yaw_link.stl",
    "waist_roll_link.stl",
    "torso_link.stl",
    "head_pitch_link.stl",
    "head_yaw_link.stl",
    "right_shoulder_pitch_link.stl",
    "right_shoulder_roll_link.stl",
    "right_shoulder_yaw_link.stl",
    "right_elbow_link.stl",
    "right_wrist_roll_link.stl",
    "right_wrist_pitch_link.stl",
    "right_wrist_yaw_link.stl",
    "left_shoulder_pitch_link.stl",
    "left_shoulder_roll_link.stl",
    "left_shoulder_yaw_link.stl",
    "left_elbow_link.stl",
    "left_wrist_roll_link.stl",
    "left_wrist_pitch_link.stl",
    "left_wrist_yaw_link.stl",
    "left_hip_pitch_link.stl",
    "left_hip_roll_link.stl",
    "left_hip_yaw_link.stl",
    "left_knee_link.stl",
    "left_ankle_roll_link.stl",
    "left_ankle_pitch_link.stl",
    "right_hip_pitch_link.stl",
    "right_hip_roll_link.stl",
    "right_hip_yaw_link.stl",
    "right_knee_link.stl",
    "right_ankle_roll_link.stl",
    "right_ankle_pitch_link.stl",
    "tennis/entire_visual.STL",
    "tennis/tennis_court_clay.png"
  ];
async function $E(r) {
  const e = await fetch(r);
  if (!e.ok) throw new Error(`${r}: ${e.status}`);
  return new Uint8Array(await e.arrayBuffer());
}
function jE(r, e, t, n) {
  const a = new Ut(),
    o = 1;
  return (
    a.set(
      r[0] * o,
      r[1] * o,
      r[2],
      e[0] + t[0],
      r[3] * o,
      r[4] * o,
      r[5],
      e[1] + t[1],
      r[6],
      r[7],
      r[8],
      e[2] + t[2],
      0,
      0,
      0,
      1,
    ),
    a
  );
}
function qE(r, e, t) {
  return r === t.mjtGeom.mjGEOM_PLANE.value
    ? new Di(40, 20)
    : r === t.mjtGeom.mjGEOM_SPHERE.value
      ? new br(e[0], 24, 16)
      : r === t.mjtGeom.mjGEOM_CAPSULE.value
        ? new Fo(e[0], 2 * e[2], 8, 16).rotateX(Math.PI / 2)
        : r === t.mjtGeom.mjGEOM_BOX.value
          ? new ar(2 * e[0], 2 * e[1], 2 * e[2])
          : r === t.mjtGeom.mjGEOM_CYLINDER.value
            ? new Ps(e[0], e[0], 2 * e[2], 20).rotateX(Math.PI / 2)
            : r === t.mjtGeom.mjGEOM_ELLIPSOID.value
              ? new br(1, 20, 14).scale(e[0], e[1], e[2])
              : new gn();
}
function YE(r, e) {
  const t = r.mesh_vertadr[e],
    n = r.mesh_vertnum[e],
    a = r.mesh_faceadr[e],
    o = r.mesh_facenum[e],
    u = new Float32Array(n * 3),
    h = new Uint32Array(o * 3);
  for (let d = 0; d < n * 3; d++) u[d] = r.mesh_vert[t * 3 + d];
  for (let d = 0; d < o * 3; d++) h[d] = r.mesh_face[a * 3 + d];
  const p = new gn();
  return (
    p.setAttribute("position", new _n(u, 3)),
    p.setIndex(new _n(h, 1)),
    p.computeVertexNormals(),
    p
  );
}
function KE(r) {
  const e = new O_().load(r);
  e.colorSpace = on;
  e.anisotropy = 8;
  const t = new ln(new Di(23.77, 10.97), new xr({ map: e, roughness: 0.85 }));
  ((t.position.z = 0.002), (t.receiveShadow = !0), Fn.add(t));
  // Fine alpha-grid net (cutout texture) so it reads as mesh, not a grey slab, from the ATP-high camera.
  const __nc = document.createElement("canvas");
  __nc.width = 1024; __nc.height = 72;
  const __nx = __nc.getContext("2d");
  __nx.clearRect(0, 0, 1024, 72);
  __nx.strokeStyle = "rgba(26,26,28,0.94)";
  __nx.lineWidth = 2;
  for (let __gi = 0; __gi <= 108; __gi++) { const __gx = Math.round(__gi * (1024/108)) + 0.5; __nx.beginPath(); __nx.moveTo(__gx, 0); __nx.lineTo(__gx, 72); __nx.stroke(); }
  for (let __gj = 0; __gj <= 8; __gj++) { const __gy = __gj * 9 + 0.5; __nx.beginPath(); __nx.moveTo(0, __gy); __nx.lineTo(1024, __gy); __nx.stroke(); }
  __nx.fillStyle = "rgba(245,245,245,0.98)";
  __nx.fillRect(0, 0, 1024, 8);
  const __ntx = new rn(__nc);
  ((__ntx.colorSpace = on), (__ntx.anisotropy = 8), (__ntx.needsUpdate = !0));
  const n = new xr({ map: __ntx, alphaTest: 0.28, side: $n, roughness: 0.9 }),
    a = new ln(new Di(12.8, 0.92), n);
  ((a.rotation.set(0, Math.PI / 2, Math.PI / 2)), (a.position.z = 0.46), Fn.add(a));
  for (const o of [-6.4, 6.4]) {
    const u = new ln(
      new Ps(0.035, 0.035, 1.07, 12),
      new xr({ color: 13358301 }),
    );
    ((u.rotation.x = Math.PI / 2), u.position.set(0, o, 0.535), Fn.add(u));
  }
}
async function ZE() {
  try {
    let Y = function (ie, Q) {
        const Ee = Number(Q.type),
          we = Number(Q.dataid),
          Re = Ee + ":" + we + ":" + Array.from(Q.size);
        if (E[ie].has(Re)) return E[ie].get(Re);
        const We =
          Ee === r.mjtGeom.mjGEOM_MESH.value
            ? YE(N[ie], we)
            : qE(Ee, Array.from(Q.size), r);
        return (E[ie].set(Re, We), We);
      },
      te = function (ie, Q, Ee, we) {
        // One H2 visibly attempts each feed. Procedural site demo only, not an executable policy.
        ie.qpos.set(Q);
        var __cy = Math.floor(Ee / 4.0);
        var __h = function (n) { var x = Math.sin(__cy * 127.1 + n * 311.7) * 43758.5453; return x - Math.floor(x); };
        var __lx = -12.6 + 1.0 * __h(1), __ly = -3.5 + 7.0 * __h(2);
        var __bx = 5.5 + 3.0 * __h(3), __by = -3.0 + 6.0 * __h(4);
        var __A = Math.atan2(__by - __ly, __bx - __lx);
        var __cx = __bx + 2.2 * Math.cos(__A), __cyy = __by + 2.2 * Math.sin(__A);
        var __zc = 0.9 + 0.4 * __h(7);
        var __sx2 = 10.8 + 1.2 * __h(5), __sy2 = -3.0 + 6.0 * __h(6);
        var __v1 = 33 + 3 * __h(8);
        var __d1 = Math.sqrt(Math.pow(__bx - __lx - 0.9 * Math.cos(__A), 2) + Math.pow(__by - __ly - 0.9 * Math.sin(__A), 2));
        var __tf1 = __d1 / __v1;
        var __tf2 = 2.2 / (15 + 3 * __h(9));
        var __tc = __tf1 + __tf2;
        var __ix = __cx + 0.45, __iy = __cyy;
        var __u = Math.min(1, Math.max(0, (Ee - 0.15) / Math.max(0.2, __tc - 0.2)));
        __u = __u * __u * (3 - 2 * __u);
        var __rx = __sx2 + (__ix - __sx2) * __u, __ry = __sy2 + (__iy - __sy2) * __u;
        window.__CP = { lx: __lx, ly: __ly, bx: __bx, by: __by, cx: __cx, cy: __cyy, zc: __zc, A: __A, tf1: __tf1, tf2: __tf2, curve: -0.3 + 0.6 * __h(10), rarc: 1.5 + 0.7 * __h(11) };
        ie.qpos[0] = __rx;
        ie.qpos[1] = __ry;
        ie.qpos[2] = 1.06;
        var __th = Math.atan2(__ly - __ry, __lx - __rx);
        var __c = Math.cos(__th / 2), __s = Math.sin(__th / 2);
        var _qw = ie.qpos[3], _qx = ie.qpos[4], _qy = ie.qpos[5], _qz = ie.qpos[6];
        ie.qpos[3] = __c * _qw - __s * _qz;
        ie.qpos[4] = __c * _qx - __s * _qy;
        ie.qpos[5] = __c * _qy + __s * _qx;
        ie.qpos[6] = __c * _qz + __s * _qw;
        try {
          var __M0 = N[0], __nb = Number(__M0.nbody) - 1;
          var __la = Math.atan2(__by - __ly, __bx - __lx);
          __M0.body_pos[__nb * 3] = __lx; __M0.body_pos[__nb * 3 + 1] = __ly; __M0.body_pos[__nb * 3 + 2] = 0;
          __M0.body_quat[__nb * 4] = Math.cos(__la / 2); __M0.body_quat[__nb * 4 + 1] = 0; __M0.body_quat[__nb * 4 + 2] = 0; __M0.body_quat[__nb * 4 + 3] = Math.sin(__la / 2);
        } catch (e) {}
        const phase = ((Ee % 4.0) + 4.0) % 4.0 / 4.0;
        const hit = Math.exp(-Math.pow((phase - (__tc / 4 + 0.01)) / 0.075, 2));
        const recover = Math.exp(-Math.pow((phase - (__tc / 4 + 0.14)) / 0.12, 2));
        const ready = 1 - Math.min(1, hit + recover);
        // H2 qpos after free base: legs 7..18, waist 19..21, left arm 22..28, right arm 29..35.
        ie.qpos[8] = 0.05; ie.qpos[10] = 0.18; ie.qpos[14] = -0.05; ie.qpos[16] = 0.18;
        ie.qpos[19] = -0.12 + 0.72 * hit; ie.qpos[20] = -0.08 * hit; ie.qpos[21] = 0.08 + 0.20 * hit;
        ie.qpos[22] = 0.18; ie.qpos[23] = 0.25; ie.qpos[25] = 0.55;
        ie.qpos[29] = -0.40 + 1.15 * hit - 0.25 * recover;
        ie.qpos[30] = -0.65 + 0.35 * hit;
        ie.qpos[31] = 0.55 - 1.25 * hit;
        ie.qpos[32] = 1.15 - 0.78 * hit;
        ie.qpos[33] = 0.25 + 0.60 * hit;
        ie.qpos[34] = -0.18 + 0.30 * hit;
        ie.qpos[35] = 0.18 - 0.75 * hit;
      },
      he = function (ie, Q) {
        ((window.__ATH_TE||te)(U[ie], ie ? C : q, Q, ie ? 1 : -1, te, ie), r.mj_forward(N[ie], U[ie]));
        const Ee = N[ie],
          we = U[ie],
          Re = Number(Ee.ngeom);
        for (let Ke = 0; Ke < Re; Ke++) {
          // H2 official visual meshes are group 0; racket visual is group 2 and the site launcher/court/net are group 0.
          // Render all opaque geoms except group 3 helper/collision-only geometry.
          if (Number(Ee.geom_group[Ke]) === 3) {
            if (m[ie][Ke]) m[ie][Ke].visible = !1;
            continue;
          }
          // Hide the MJCF "net" box (0.018 x 6.4 x 0.457 solid slab); the textured Three.js net renders instead.
          if (Math.abs(Ee.geom_size[Ke * 3] - 0.018) < 0.004 && Math.abs(Ee.geom_size[Ke * 3 + 1] - 6.4) < 0.02 && Math.abs(Ee.geom_size[Ke * 3 + 2] - 0.457) < 0.01) {
            if (m[ie][Ke]) m[ie][Ke].visible = !1;
            continue;
          }
          // SONIC view: hide the model ball geom (r~0.033 sphere) - the sync loop re-shows it every frame from geom rgba.
          if (window.__SONIC && window.__SONIC.active && Number(Ee.geom_type[Ke]) === 2 && Math.abs(Ee.geom_size[Ke * 3] - 0.033) < 0.004) {
            if (m[ie][Ke]) m[ie][Ke].visible = !1;
            continue;
          }
          const tt = Number(Ee.geom_type[Ke]),
            Qe = Number(Ee.geom_dataid[Ke]),
            se = [
              Ee.geom_size[Ke * 3],
              Ee.geom_size[Ke * 3 + 1],
              Ee.geom_size[Ke * 3 + 2],
            ],
            de = [
              Ee.geom_rgba[Ke * 4],
              Ee.geom_rgba[Ke * 4 + 1],
              Ee.geom_rgba[Ke * 4 + 2],
              Ee.geom_rgba[Ke * 4 + 3],
            ],
            le = [],
            Me = [];
          for (let He = 0; He < 9; He++) le.push(we.geom_xmat[Ke * 9 + He]);
          for (let He = 0; He < 3; He++) Me.push(we.geom_xpos[Ke * 3 + He]);
          const He = tt + ":" + Qe + ":" + se,
            At =
              E[ie].get(He) ||
              (E[ie].set(
                He,
                tt === r.mjtGeom.mjGEOM_MESH.value ? YE(Ee, Qe) : qE(tt, se, r),
              ),
              E[ie].get(He));
          let xt = m[ie][Ke];
          if (!xt) {
            const A = new xr({
              color: new pt(
                Math.max(de[0], 0.16),
                Math.max(de[1], 0.19),
                Math.max(de[2], 0.23),
              ),
              roughness: 0.5,
              metalness: 0.04,
              side: $n,
              flatShading: !1,
              transparent: de[3] < 1,
              opacity: de[3],
            });
            ((xt = new ln(At, A)),
              (xt.castShadow = xt.receiveShadow = !0),
              (m[ie][Ke] = xt),
              Fn.add(xt));
          }
          ((xt.geometry = At),
            xt.material.color.setRGB(
              Math.max(de[0], 0.16),
              Math.max(de[1], 0.19),
              Math.max(de[2], 0.23),
            ),
            (xt.material.opacity = de[3]),
            (xt.material.transparent = de[3] < 1),
            (xt.matrixAutoUpdate = !1),
            xt.matrix.copy(jE(le, Me, [0, 0, 0], !1)),
            (xt.matrixWorldNeedsUpdate = !0),
            (xt.visible = de[3] > 0));
        }
        for (let Ke = Re; Ke < m[ie].length; Ke++) m[ie][Ke].visible = !1;
      },
      ae = function (ie) {
        if ((requestAnimationFrame(ae), Dr.update(), !M)) {
          const Q = (ie - z) / 1e3;
          if (!window.__SONIC || !window.__SONIC.active) __PHYS(Q);
          he(0, Q);
          const Ee = ((Q % 4.0) + 4.0) % 4.0 / 4.0;
          // feed ball follows the real MuJoCo body (aero forces + contacts)
        }
        Yn.render(Fn, sr);
      };
    ((bc.textContent = "Streaming MuJoCo WebAssembly…"),
      document.querySelector("#loadbarfill") &&
        (document.querySelector("#loadbarfill").style.width = "8%"));
    const r = await WE({
      locateFile: (ie) => (ie.endsWith(".wasm") ? "./assets/mujoco.wasm" : ie),
    });
    ((bc.textContent = "MuJoCo ready · loading optimized robot meshes…"),
      document.querySelector("#loadbarfill") &&
        (document.querySelector("#loadbarfill").style.width = "18%"));
    console.log("T137 wasm ready");
    const __urls = [
        Da + "h2_stand_v3.xml",
        ...Ac.map((ie) => Da + "assets/" + ie),
      ],
      __out = new Array(__urls.length);
    let __idx = 0;
    async function __worker() {
      while (__idx < __urls.length) {
        const k = __idx++;
        let er = null;
        for (let a = 0; a < 4; a++) {
          try {
            __out[k] = await (k === 0
              ? fetch(__urls[k] + "?t=" + Date.now()).then((ie) => {
                  if (!ie.ok) throw new Error(__urls[k] + ": " + ie.status);
                  return ie.text();
                })
              : $E(__urls[k] + "?t=" + Date.now()));
            ((bc.textContent = `Loading robot assets… ${k + 1}/${__urls.length}`),
              document.querySelector("#loadbarfill") &&
                (document.querySelector("#loadbarfill").style.width =
                  `${18 + (70 * (k + 1)) / __urls.length}%`));
            er = null;
            break;
          } catch (z) {
            er = z;
            await new Promise((s) => setTimeout(s, 500 * (a + 1)));
          }
        }
        if (er) throw er;
      }
    }
    await Promise.all(Array.from({ length: 6 }, __worker));
    console.log("T137 assets loaded n=" + __out.length);
    let [e, ...t] = __out;
    e = e.replace(/(<body name="ball_machine" pos=")[^"]+("[^>]*>)/, "$1-7.8 3.0 0$2");
    console.log("T137 probe start");
    let __BALLMODE = false, __FEEDS = null, __RCSITE = 5, __epStep = 0, __bounces = 0, __bnArm = false, __contact = false, __HIST = [], __HORIZON = 172;
    try {
      console.log("T137 fetching spec"); const __sp = await (await fetch("https://huggingface.co/danielharkin21/ath-h2-policies/resolve/main/best/spec.json", { cache: "no-store" })).json(); console.log("T137 spec ok obs=" + (__sp && __sp.obs_size));
      const __on = __sp && (__sp.obs_size || +(((__sp.onnx && __sp.onnx.input) || "").match(/batch,(\d+)/) || [0, 0])[1] || 0);
      if (__on === 137) {
        console.log("T137 fetching xml"); const __BXML = await (await fetch(Da + "h2_ball.xml?t=" + Date.now())).text(); console.log("T137 xml ok len=" + __BXML.length);
        if (__BXML.indexOf("tennis_racket") >= 0 && __BXML.indexOf('name="ball"') >= 0) {
          e = __BXML; __BALLMODE = true;
          const __sm = [...__BXML.matchAll(/<site name="([^"]+)"/g)].map((m2) => m2[1]);
          const __ri = __sm.indexOf("racket_center"); if (__ri >= 0) __RCSITE = __ri;
          try {
            console.log("T137 fetching feeds"); const __fb = await (await fetch(Da + "feeds.npy?t=" + Date.now())).arrayBuffer(); console.log("T137 feeds ok bytes=" + __fb.byteLength);
            const __dv = new DataView(__fb);
            const __hl = __dv.getUint16(8, true);
            const __hd = new TextDecoder().decode(new Uint8Array(__fb, 10, __hl));
            const __shm = /'shape':\s*\((\d+),\s*(\d+)\)/.exec(__hd);
            if (__shm) __FEEDS = { n: +__shm[1], d: new Float32Array(__fb, 10 + __hl, (+__shm[1]) * 13) };
          } catch (__e3) { console.log("feeds.npy unavailable", __e3); }
          if (!__FEEDS || !__FEEDS.n) { e = __out[0]; __BALLMODE = false; }
        }
      }
    } catch (__e2) { console.log("ball-mode probe failed - keeping stand v3", __e2); }
    console.log("T137 probe done ballmode=" + __BALLMODE);
    window.__BALLMODE = __BALLMODE;
    ((bc.textContent = "Compiling official Unitree H2 model…"),
      document.querySelector("#loadbarfill") &&
        (document.querySelector("#loadbarfill").style.width = "92%"));
    window.__MJ = r; const n = new r.MjVFS();
    Ac.forEach((ie, Q) => n.addBuffer(ie, t[Q]));
    console.log("INIT137 pre-compile ballmode=" + window.__BALLMODE + " xmllen=" + (e ? e.length : -1));
    let a = null, o = null;
    try {
      a = r.MjModel.from_xml_string(e, n);
      console.log("INIT137 first compile ok");
      o = r.MjModel.from_xml_string(e, n);
      console.log("INIT137 second compile ok");
    } catch (e2) { console.log("INIT137 COMPILE FAIL", String(e2 && e2.message || e2)); throw e2; }
    if (!a || !o) { console.log("INIT137 null model"); throw new Error("MuJoCo could not compile the released MJCF"); }
    const u = new r.MjData(a),
      h = new r.MjData(o),
      p = new r.MjvOption(),
      d = new r.MjvOption(),
      v = new r.MjvPerturb(),
      _ = new r.MjvPerturb(),
      x = new r.MjvCamera(),
      y = new r.MjvCamera(),
      R = new r.MjvScene(a, 2048),
      D = new r.MjvScene(o, 2048),
      E = [new Map(), new Map()],
      m = [[], []],
      N = [a, o],
      U = [u, h],
      L = [p, d],
      k = [v, _],
      P = [x, y],
      H = [R, D],
      q = Array.from(u.qpos),
      C = Array.from(h.qpos);
    let M = !1,
      z = performance.now();
    // ---- ATH untrained-policy driver: real dynamics, no puppeteering ----
    // Robot is stepped by MuJoCo dynamics (500Hz) under the actual random-init ONNX policy
    // (50Hz, zero observation input - browser smoke schema). Feed ball is a real MuJoCo body
    // carrying gravity + drag + Magnus forces from the training aero model; bounce/net/robot
    // contacts are MuJoCo's own. Spin held constant over flight (no decay - training limitation).
    const __DT = 0.002, __CTRL_DT = 0.02;
    const __NB = Number(a.nbody), __NQ = Number(a.nq), __NV = Number(a.nv), __NA = Number(a.nu);
    const __BALLB = __NB - 1, __MACHB = __NB - 2, __BALLQ = __NQ - 7, __BALLV = __NV - 6;
    const __HOME = [0, 0, 1.03, 1, 0, 0, 0, -0.25, 0, 0, 0.5, 0, -0.25, -0.25, 0, 0, 0.5, 0, -0.25, 0, 0, 0, 0.35, 0.18, 0, 0.87, 0, 0, 0, 0.35, -0.18, 0, 0.87, 0, 0, 0];
    const __SPAWNQ = [11.5, 0, 0.985, 0, 0, 0, 1];
    const __MIDF = [0.16141, 0.8507095, 0, 1.2215, -0.02618, -0.2617975, 0.16141, -0.8507095, 0, 1.2215, 0.02618, -0.2617975, 0, 0, 0.043635, -0.392695, 1.0594165, 0, 1.0428345, 0, 0, 0, -0.392695, -1.0594165, 0, 1.0428345, 0, 0, 0];
    let __MID = __MIDF;
    try {
      const cr = a.actuator_ctrlrange;
      if (cr && cr.length >= 2 * __NA) {
        __MID = [];
        for (let i = 0; i < __NA; i++) __MID.push(0.5 * (Number(cr[2 * i]) + Number(cr[2 * i + 1])));
      }
    } catch (e) {}
    const __RHO = 1.21, __BCD = 0.55, __BRAD = 0.033, __BAREA = Math.PI * __BRAD * __BRAD;
    let __omg = [0, 0, 0];
    function __aeroF(vx, vy, vz) {
      const sp = Math.hypot(vx, vy, vz);
      if (sp < 1e-9) return [0, 0, 0];
      const S = __BRAD * Math.hypot(__omg[0], __omg[1], __omg[2]) / sp;
      let cl;
      cl = S / (2 * S + 1);
      const q = 0.5 * __RHO * __BAREA * sp * sp;
      const cx = __omg[1] * vz - __omg[2] * vy, cy = __omg[2] * vx - __omg[0] * vz, cz = __omg[0] * vy - __omg[1] * vx;
      const cn = Math.hypot(cx, cy, cz);
      const lx = cn > 1e-12 ? q * cl * cx / cn : 0, ly = cn > 1e-12 ? q * cl * cy / cn : 0, lz = cn > 1e-12 ? q * cl * cz / cn : 0;
      const kd = q * __BCD / sp;
      return [lx - kd * vx, ly - kd * vy, lz - kd * vz];
    }

    function __simFlight(x0, y0, z0, az, el, v, w, ws) {
      const RB = 0.033;
      ws = ws || 0;
      let px = x0, py = y0, pz = z0;
      let vx = v * Math.cos(el) * Math.cos(az), vy = v * Math.cos(el) * Math.sin(az), vz = v * Math.sin(el);
      const ox = -w * Math.sin(az), oy = w * Math.cos(az), oz = ws;
      let apex = z0, znet = null, t = 0;
      const dt = 0.001, AR = Math.PI * RB * RB;
      while (t < 8) {
        const sp = Math.hypot(vx, vy, vz);
        let ax = 0, ay = 0, az2 = -9.81;
        if (sp > 1e-9) {
          const S = RB * Math.hypot(w, ws) / sp;
          let cl; if (S <= 0) cl = 0; else if (S >= 0.53) cl = 0.30; else if (S <= 0.14) cl = 0.10 * (S / 0.14); else cl = 0.10 + 0.20 * ((S - 0.14) / 0.39);
          const qd = 0.5 * 1.21 * AR * sp * sp;
          const cx = oy * vz - oz * vy, cy = oz * vx - ox * vz, cz = ox * vy - oy * vx;
          const cn = Math.hypot(cx, cy, cz);
          const lx = cn > 1e-12 ? qd * cl * cx / cn : 0, ly = cn > 1e-12 ? qd * cl * cy / cn : 0, lz = cn > 1e-12 ? qd * cl * cz / cn : 0;
          const kd = qd * 0.507 / sp;
          ax = (lx - kd * vx) / 0.057; ay = (ly - kd * vy) / 0.057; az2 = (lz - kd * vz) / 0.057 - 9.81;
        }
        vx += ax * dt; vy += ay * dt; vz += az2 * dt;
        px += vx * dt; py += vy * dt; pz += vz * dt; t += dt;
        if (pz > apex) apex = pz;
        if (znet === null && px >= 0) znet = pz;
        if (pz <= RB && t > 0.15) break;
      }
      return { land: px, yland: py, apex: apex, znet: znet, t: t };
    }
    function __solveLaunch(x0, y0, z0, az, v, w, clear, ws) {
      const tgt = 0.914 + clear;
      ws = ws || 0;
      let lo = 0.02, hi = 1.35;
      for (let i = 0; i < 24; i++) {
        const mid = 0.5 * (lo + hi);
        const r = __simFlight(x0, y0, z0, az, mid, v, w, ws);
        const zn = (r.znet === null) ? -1 : r.znet;
        if (zn < tgt) lo = mid; else hi = mid;
      }
      return 0.5 * (lo + hi);
    }
    function __maxPace(x0, y0, z0, az, w, clear, ws) {
      ws = ws || 0;
      for (let v = 34; v >= 12; v -= 0.5) {
        const el = __solveLaunch(x0, y0, z0, az, v, w, clear, ws);
        const r = __simFlight(x0, y0, z0, az, el, v, w, ws);
        if (r.znet !== null && r.land <= 11.3 && r.land >= 0.5 && Math.abs(r.yland) <= 5.6) return v;
      }
      return 12;
    }
    const __FEED = { clear: 2.5, rpm: 3000, speed: 23, side: 0, auto: true, rand: true, custom: false };
    function __buildFeedUI() {
      try {
        const wrap = document.createElement("div");
        wrap.id = "feedctl";
        wrap.innerHTML = '<button id="feedtoggle" type="button">FEED &#9662;</button>' +
          '<div id="feedpanel">' +
          '<label>Net clearance <span id="fv_clear"></span></label><input id="fs_clear" type="range" min="0.01" max="8" step="0.01" value="2.5">' +
          '<label>Spin <span id="fv_spin"></span></label><input id="fs_spin" type="range" min="-4000" max="4500" step="250" value="3000">' +
          '<label>Sidespin <span id="fv_side"></span></label><input id="fs_side" type="range" min="-4000" max="4000" step="250" value="0">' +
          '<label>Speed <span id="fv_speed"></span> <button id="fs_auto" type="button">AUTO</button><button id="fs_rand" type="button">RANDOM</button></label><input id="fs_speed" type="range" min="10" max="62.6" step="0.5" value="23"><div id="fv_mode"></div>' +
          '</div>';
        const st = document.createElement("style");
        st.textContent = "#feedctl{position:fixed;left:18px;bottom:96px;z-index:60;font-family:inherit;user-select:none}" +
          "#feedctl #feedtoggle,#feedctl #fs_auto{background:rgba(12,14,18,.88);color:#e8e8e8;border:1px solid rgba(255,255,255,.22);border-radius:8px;padding:6px 12px;font-size:11px;letter-spacing:.12em;cursor:pointer}" +
          "#feedctl #fs_auto,#feedctl #fs_rand{padding:2px 8px;margin-left:6px;letter-spacing:.06em}" +
          "#feedctl #fs_auto.off,#feedctl #fs_rand.off{opacity:.45}" +
          "#feedpanel{display:none;margin-top:8px;background:rgba(10,12,16,.9);border:1px solid rgba(255,255,255,.14);border-radius:10px;padding:10px 12px;width:208px}" +
          "#feedpanel.open{display:block}" +
          "#feedpanel label{display:block;color:#cfd4da;font-size:11px;letter-spacing:.08em;margin:8px 0 2px}" +
          "#feedpanel label span{color:#9be15d}" +
          "#feedpanel input[type=range]{width:100%;height:26px;accent-color:#9be15d}" +
          "#feedctl #fv_mode{margin-top:8px;font-size:10px;letter-spacing:.1em;color:#9be15d}" + "#feedctl #fv_mode.custom{color:#ff9040}";
        document.head.appendChild(st);
        document.body.appendChild(wrap);
        const $ = (id) => document.getElementById(id);
        const panel = $("feedpanel");
        /* feed panel starts closed; FEED pill toggles it */
        $("feedtoggle").onclick = () => panel.classList.toggle("open");
        const show = () => {
          $("fv_clear").textContent = __FEED.clear.toFixed(2) + " m";
          $("fv_spin").textContent = (__FEED.rpm >= 0 ? "+" : "") + __FEED.rpm + " rpm " + (__FEED.rpm >= 0 ? "(topspin)" : "(slice)");
          $("fv_side").textContent = (__FEED.side >= 0 ? "+" : "") + __FEED.side + " rpm " + (__FEED.side === 0 ? "(none)" : "(sidespin)");
          $("fv_speed").textContent = __FEED.speed.toFixed(1) + " m/s (" + Math.round(__FEED.speed * 2.23694) + " mph)";
          $("fs_auto").classList.toggle("off", !__FEED.auto);
          $("fs_rand").classList.toggle("off", __FEED.custom);
          const __fm = $("fv_mode"); if (__fm) { __fm.textContent = __FEED.custom ? "CUSTOM FEED (NOT FROM TRAINING)" : "LIVE TRAINING FEED"; __fm.classList.toggle("custom", __FEED.custom); }
        };
        $("fs_clear").oninput = (e) => { __FEED.clear = Number(e.target.value); __FEED.custom = true; show(); };
        $("fs_spin").oninput = (e) => { __FEED.rpm = Number(e.target.value); __FEED.custom = true; show(); };
        $("fs_side").oninput = (e) => { __FEED.side = Number(e.target.value); __FEED.custom = true; show(); };
        $("fs_speed").oninput = (e) => { __FEED.speed = Number(e.target.value); __FEED.auto = false; __FEED.custom = true; show(); };
        $("fs_auto").onclick = () => { __FEED.auto = !__FEED.auto; __FEED.custom = true; show(); };
        $("fs_rand").onclick = () => { __FEED.custom = false; show(); };
        
        window.__feedUISync = () => { try { $("fs_clear").value = __FEED.clear; $("fs_spin").value = __FEED.rpm; $("fs_side").value = __FEED.side; $("fs_speed").value = __FEED.speed; } catch (e) {} show(); };
        show();
      } catch (e) {}
    }
    let __simT = 0, __lastWall = null, __fallen = false, __fallT = 0, __ep = 0, __nextCtrl = 0, __lastCy = -1, __infer = false, __sess = null;
    const __OBS = new Float32Array(__BALLMODE ? 137 : 93);
    const __Q0 = __HOME.slice(7, 36);
    const __PREV = new Float32Array(29);
    function __fillOBS(dd) {
      try {
        const m = dd.xmat;
        __OBS[0] = -m[15]; __OBS[1] = -m[16]; __OBS[2] = -m[17];
        __OBS[3] = dd.qvel[3]; __OBS[4] = dd.qvel[4]; __OBS[5] = dd.qvel[5];
        for (let i = 0; i < 29; i++) { __OBS[6+i] = dd.qpos[7+i] - __Q0[i]; __OBS[35+i] = 0.1*dd.qvel[6+i]; __OBS[64+i] = __PREV[i]; }
        if (__BALLMODE) {
          const r0 = [m[9], m[10], m[11]], r1 = [m[12], m[13], m[14]], r2 = [m[15], m[16], m[17]];
          const RT = (v) => [r0[0]*v[0]+r1[0]*v[1]+r2[0]*v[2], r0[1]*v[0]+r1[1]*v[1]+r2[1]*v[2], r0[2]*v[0]+r1[2]*v[1]+r2[2]*v[2]];
          const bs = [dd.qpos[0], dd.qpos[1], dd.qpos[2]];
          const bp = [dd.qpos[36], dd.qpos[37], dd.qpos[38]];
          const bv = [dd.qvel[35], dd.qvel[36], dd.qvel[37]];
          const rp = RT([bp[0]-bs[0], bp[1]-bs[1], bp[2]-bs[2]]);
          const rv = RT(bv);
          __OBS[93] = rp[0]; __OBS[94] = rp[1]; __OBS[95] = rp[2];
          __OBS[96] = 0.1*rv[0]; __OBS[97] = 0.1*rv[1]; __OBS[98] = 0.1*rv[2];
          const sx = dd.site_xpos[__RCSITE*3], sy = dd.site_xpos[__RCSITE*3+1], sz = dd.site_xpos[__RCSITE*3+2];
          const rc = RT([sx-bp[0], sy-bp[1], sz-bp[2]]);
          __OBS[99] = rc[0]; __OBS[100] = rc[1]; __OBS[101] = rc[2];
          const lv = RT([dd.qvel[0], dd.qvel[1], dd.qvel[2]]);
          __OBS[102] = lv[0]; __OBS[103] = lv[1]; __OBS[104] = lv[2];
          __OBS[105] = dd.qpos[2];
          __OBS[106] = __epStep / 172;
          for (let k = 0; k < 5; k++) {
            const h = __HIST[k] || [bp[0], bp[1], bp[2], bv[0], bv[1], bv[2]];
            const hp = RT([h[0]-bs[0], h[1]-bs[1], h[2]-bs[2]]);
            const hv = RT([h[3], h[4], h[5]]);
            __OBS[107+3*k] = hp[0]; __OBS[108+3*k] = hp[1]; __OBS[109+3*k] = hp[2];
            __OBS[122+3*k] = 0.1*hv[0]; __OBS[123+3*k] = 0.1*hv[1]; __OBS[124+3*k] = 0.1*hv[2];
          }
        }
      } catch (e) {}
    }
    function __histPush(dd) {
      try {
        __HIST.push([dd.qpos[36], dd.qpos[37], dd.qpos[38], dd.qvel[35], dd.qvel[36], dd.qvel[37]]);
        while (__HIST.length > 5) __HIST.shift();
      } catch (e) {}
    }
    window.__ATH_TE = function () {}; // physics owns the robot; procedural writer retired
    (async function () {
      try {
        if (typeof ort === "undefined") return;
        ort.env.wasm.numThreads = 1; // Pages has no cross-origin isolation; single-thread wasm
        let buf;
        try {
          const spec = await (await fetch("https://huggingface.co/danielharkin21/ath-h2-policies/resolve/main/best/spec.json", { cache: "no-store" })).json();
          const __obsN = spec && (spec.obs_size || +(((spec.onnx && spec.onnx.input) || "").match(/batch,(\d+)/) || [0, 0])[1] || Math.max.apply(null, (spec.obs_layout || []).map(function (s) { return s.slice[1]; })));
          if (__obsN === 93 || (__BALLMODE && __obsN === 137)) {
            buf = await (await fetch("https://huggingface.co/danielharkin21/ath-h2-policies/resolve/main/best/policy.onnx", { cache: "no-store" })).arrayBuffer();
            console.log("policy: HF best/ loaded (" + (spec.model || "policy.onnx") + ", obs " + __obsN + ")");
          } else {
            console.log("policy: best/ spec obs " + __obsN + " does not match runtime 93 - keeping bundled stand v3");
            buf = await $E(Da + "../ath_h2_stand_v3.onnx?t=" + Date.now());
          }
        } catch (e) {
          console.log("policy: HF best/ unavailable - keeping bundled stand v3", e);
          buf = await $E(Da + "../ath_h2_stand_v3.onnx?t=" + Date.now());
        }
        __sess = await ort.InferenceSession.create(buf, { executionProviders: ["wasm"] });
      } catch (e) { __sess = null; }
    })();
    window.__MUJOCO_REF = function (rf) {
      if (!__BALLMODE) throw new Error("not in ball mode");
      try { r.mj_resetData(a, u); } catch (e) {}
      for (let i = 0; i < 43; i++) u.qpos[i] = rf.qpos[i];
      for (let i = 0; i < 41; i++) u.qvel[i] = rf.qvel[i];
      __PREV.fill(0); __epStep = 0; __bounces = 0; __bnArm = false; __contact = false;
      __HIST.length = 0;
      const F = rf.feed;
      for (let i = 0; i < 5; i++) __HIST.push([F[0], F[1], F[2], F[3], F[4], F[5]]);
      r.mj_forward(a, u);
      __fillOBS(u);
      let maxd = 0, mi = -1;
      for (let i = 0; i < 137; i++) { const d = Math.abs(__OBS[i] - rf.obs[i]); if (d > maxd) { maxd = d; mi = i; } }
      window.__PARITY = { maxdiff: maxd, worst_index: mi, got: __OBS[mi], want: rf.obs[mi] };
      console.log("PARITY137 maxdiff=" + maxd.toExponential(3) + " @" + mi + " got=" + __OBS[mi] + " want=" + rf.obs[mi]);
      document.title = "PARITY maxdiff=" + maxd.toExponential(3) + " @" + mi;
    };
    function __resetEpisode() {
      if (window.__DBG137) { window.__rstN = (window.__rstN || 0) + 1; if (window.__rstN <= 5 || window.__rstN % 50 === 0) console.log("RESET137 #" + window.__rstN); }
      try { r.mj_resetData(a, u); } catch (e) {}
      for (let i = 0; i < 36; i++) u.qpos[i] = __HOME[i];
      u.qpos[0] = __HOME[0] + 9.0; u.qpos[1] = __HOME[1] + 3.0;
      { const hw = __HOME[3], hx = __HOME[4], hy = __HOME[5], hz = __HOME[6];
        u.qpos[3] = -hz; u.qpos[4] = -hy; u.qpos[5] = hx; u.qpos[6] = hw; }
      __PREV.fill(0);
      try { u.qvel.fill(0); } catch (e) {}
      try { const xf = u.xfrc_applied; if (xf && xf.fill) xf.fill(0); } catch (e) {}
      for (let i = 0; i < __NA; i++) u.ctrl[i] = __MID[i];
      __simT = 0; __nextCtrl = 0; __fallen = false; __ep++; if (window.__RACKET) window.__RACKET.visible = true; __lastCy = -1; if (__BALLMODE && __FEEDS && __FEEDS.n > 0) {
        const F = __FEEDS.d, o13 = ((Math.random() * __FEEDS.n) | 0) * 13;
        const rx = 9 + Math.random() * 4, ry = -4 + Math.random() * 8, yaw = Math.PI + (Math.random() - 0.5);
        u.qpos[0] = rx; u.qpos[1] = ry; u.qpos[2] = 1.03;
        u.qpos[3] = Math.cos(yaw / 2); u.qpos[4] = 0; u.qpos[5] = 0; u.qpos[6] = Math.sin(yaw / 2);
        for (let i = 0; i < 29; i++) u.qpos[7 + i] = __HOME[7 + i] + (Math.random() - 0.5) * 0.1;
        u.qpos[36] = F[o13]; u.qpos[37] = F[o13+1]; u.qpos[38] = F[o13+2];
        u.qpos[39] = 1; u.qpos[40] = 0; u.qpos[41] = 0; u.qpos[42] = 0;
        u.qvel[35] = F[o13+3]; u.qvel[36] = F[o13+4]; u.qvel[37] = F[o13+5];
        u.qvel[38] = F[o13+6]; u.qvel[39] = F[o13+7]; u.qvel[40] = F[o13+8];
        __omg = [F[o13+6], F[o13+7], F[o13+8]];
        __epStep = 0; __bounces = 0; __bnArm = false; __contact = false;
        __HIST.length = 0;
        for (let i = 0; i < 5; i++) __HIST.push([F[o13], F[o13+1], F[o13+2], F[o13+3], F[o13+4], F[o13+5]]);
        __HORIZON = Math.ceil((F[o13+12] + 0.2) / 0.02);
        window.__FEEDIDX = o13 / 13;
        try { if (window.__MACHG) { const __p0x = F[o13], __p0y = F[o13+1], __p0z = F[o13+2]; let __dx = F[o13+9] - __p0x, __dy = F[o13+10] - __p0y, __dz = F[o13+11] - __p0z; const __dl = Math.sqrt(__dx*__dx + __dy*__dy + __dz*__dz) || 1; __dx /= __dl; __dy /= __dl; __dz /= __dl; const __q = new Ci(); __q.setFromUnitVectors(new K(1, 0, 0), new K(__dx, __dy, __dz)); window.__MACHG.quaternion.copy(__q); const __off = new K(0.94, 0, 0.78).applyQuaternion(__q); window.__MACHG.position.set(__p0x - __off.x, __p0y - __off.y, Math.max(__p0z - __off.z, -0.05)); } } catch (e) {}
        if (__FEED.custom) {
          const __cp0x = F[o13], __cp0y = F[o13+1], __cp0z = F[o13+2];
          const __caz = Math.atan2(F[o13+10] - __cp0y, F[o13+9] - __cp0x);
          const __cw = __FEED.rpm * 2 * Math.PI / 60, __cws = __FEED.side * 2 * Math.PI / 60;
          const __cv = __FEED.auto ? __maxPace(__cp0x, __cp0y, __cp0z, __caz, __cw, __FEED.clear, __cws) : __FEED.speed;
          const __cel = __solveLaunch(__cp0x, __cp0y, __cp0z, __caz, __cv, __cw, __FEED.clear, __cws);
          u.qvel[35] = __cv * Math.cos(__cel) * Math.cos(__caz); u.qvel[36] = __cv * Math.cos(__cel) * Math.sin(__caz); u.qvel[37] = __cv * Math.sin(__cel);
          u.qvel[38] = -__cw * Math.sin(__caz); u.qvel[39] = __cw * Math.cos(__caz); u.qvel[40] = __cws;
          __omg = [u.qvel[38], u.qvel[39], u.qvel[40]];
          for (let i = 0; i < 5; i++) { const h = __HIST[__HIST.length - 5 + i]; if (h) { h[3] = u.qvel[35]; h[4] = u.qvel[36]; h[5] = u.qvel[37]; } }
          const __rf = __simFlight(__cp0x, __cp0y, __cp0z, __caz, __cel, __cv, __cw, __cws);
          __HORIZON = Math.ceil((__rf.t + 0.2) / 0.02);
        } else {
          const __mvx = F[o13+3], __mvy = F[o13+4], __mvz = F[o13+5];
          const __mvv = Math.hypot(__mvx, __mvy, __mvz) || 1;
          const __maz = Math.atan2(__mvy, __mvx), __mel = Math.asin(Math.min(1, Math.max(-1, __mvz / __mvv)));
          const __mw = -F[o13+6] * Math.sin(__maz) + F[o13+7] * Math.cos(__maz), __mws = F[o13+8];
          __FEED.speed = Math.min(62.6, Math.max(10, Math.round(__mvv * 2) / 2));
          __FEED.rpm = Math.min(4500, Math.max(-4000, Math.round(__mw * 60 / (2 * Math.PI) / 250) * 250));
          __FEED.side = Math.min(4000, Math.max(-4000, Math.round(__mws * 60 / (2 * Math.PI) / 250) * 250));
          const __rf0 = __simFlight(F[o13], F[o13+1], F[o13+2], __maz, __mel, __mvv, __mw, __mws);
          if (__rf0.znet !== null) __FEED.clear = Math.min(8, Math.max(0.01, Math.round((__rf0.znet - 0.914) * 100) / 100));
          if (window.__feedUISync) window.__feedUISync();
        }
      } try { if (u.qacc_warmstart && u.qacc_warmstart.fill) u.qacc_warmstart.fill(0); } catch (e) {}
      r.mj_forward(a, u);
    }
    window.__PHYS_STATE = function () {
      return { simT: __simT, fallen: __fallen, ep: __ep, sess: !!__sess,
        root: [u.qpos[0], u.qpos[1], u.qpos[2]],
        ball: [u.qpos[__BALLQ], u.qpos[__BALLQ + 1], u.qpos[__BALLQ + 2]],
        ballv: [u.qvel[__BALLV], u.qvel[__BALLV + 1], u.qvel[__BALLV + 2]],
        ctrl0: u.ctrl[0], nq: __NQ, nv: __NV, nu: __NA, nbody: __NB };
    };
    function __PHYS(Q) {
      if (__lastWall === null) { __lastWall = Q; __resetEpisode(); }
      if (Q < __simT - 1) __resetEpisode(); // page reset button jumped the clock back
      let adv = Q - __lastWall; __lastWall = Q;
      if (adv > (__BALLMODE ? 0.06 : 0.25)) adv = __BALLMODE ? 0.06 : 0.25;
      if (adv < 0) adv = 0;
      const target = __simT + adv;
      const __pt0 = performance.now();
      let __sub = 0;
      while (__simT < target) { if (__BALLMODE && (__sub & 7) === 0 && performance.now() - __pt0 > 10) break; __sub++;
        if (__simT >= __nextCtrl) {
          __nextCtrl += __CTRL_DT;
          if (__sess && !__infer) {
            __infer = true;
            try { __fillOBS(u);
                            __sess.run({ [__sess.inputNames[0]]: new ort.Tensor("float32", __OBS, [1, __OBS.length]) })
                .then((res) => { window.__ACT = res[__sess.outputNames[0]].data; try { __PREV.set(window.__ACT); } catch (e) {} __infer = false; })
                .catch(() => { __infer = false; });
            } catch (e) { __infer = false; }
          }
          if (__BALLMODE) { __epStep++; __histPush(u); }
          const aa = window.__ACT;
          try {
            const cr = a.actuator_ctrlrange;
            for (let i = 0; i < __NA; i++) {
              u.ctrl[i] = (aa && cr && cr.length >= 2 * __NA)
                ? Math.min(Math.max(__Q0[i] + 0.3 * Number(aa[i]), Number(cr[2 * i])), Number(cr[2 * i + 1]))
                : __Q0[i];
            }
          } catch (e) { for (let i = 0; i < __NA; i++) u.ctrl[i] = __MID[i]; }
        }
        const __cy = Math.floor(__simT / 4.0);
        if (false && __cy !== __lastCy) {
          __lastCy = __cy;
          const __h = (n) => { const x = Math.sin(__cy * 127.1 + n * 311.7) * 43758.5453; return x - Math.floor(x); };
          const __lx = -12.6 + 1.0 * __h(1), __ly = -3.5 + 7.0 * __h(2);
          const __tx = 5.5 + 3.0 * __h(3), __ty = -3.0 + 6.0 * __h(4);
          const __A = Math.atan2(__ty - __ly, __tx - __lx);
          const az = __A + 0.10 * (__h(6) - 0.5);
          const w = __FEED.rpm * 2 * Math.PI / 60;
          const ws = __FEED.side * 2 * Math.PI / 60;
          const __sx = __lx + 0.9 * Math.cos(__A), __sy = __ly + 0.9 * Math.sin(__A);
          const v = __FEED.auto ? __maxPace(__sx, __sy, 0.82, az, w, __FEED.clear, ws) : __FEED.speed;
          const el = __solveLaunch(__sx, __sy, 0.82, az, v, w, __FEED.clear, ws);
          try {
            a.body_pos[__MACHB * 3] = __lx; a.body_pos[__MACHB * 3 + 1] = __ly; a.body_pos[__MACHB * 3 + 2] = 0;
            a.body_quat[__MACHB * 4] = Math.cos(__A / 2); a.body_quat[__MACHB * 4 + 1] = 0; a.body_quat[__MACHB * 4 + 2] = 0; a.body_quat[__MACHB * 4 + 3] = Math.sin(__A / 2);
          } catch (e) {}
          u.qpos[__BALLQ] = __lx + 0.9 * Math.cos(__A); u.qpos[__BALLQ + 1] = __ly + 0.9 * Math.sin(__A); u.qpos[__BALLQ + 2] = 0.82;
          u.qpos[__BALLQ + 3] = 1; u.qpos[__BALLQ + 4] = 0; u.qpos[__BALLQ + 5] = 0; u.qpos[__BALLQ + 6] = 0;
          u.qvel[__BALLV] = v * Math.cos(el) * Math.cos(az); u.qvel[__BALLV + 1] = v * Math.cos(el) * Math.sin(az); u.qvel[__BALLV + 2] = v * Math.sin(el);
          u.qvel[__BALLV + 3] = 0; u.qvel[__BALLV + 4] = 0; u.qvel[__BALLV + 5] = 0;
          __omg = [-w * Math.sin(az), w * Math.cos(az), ws]; // topspin axis = z x flight_dir (signed: negative = slice); z-comp = sidespin (vertical axis)
          u.qvel[__BALLV + 3] = __omg[0]; u.qvel[__BALLV + 4] = __omg[1]; u.qvel[__BALLV + 5] = __omg[2];
        }
        try {
          const xf = u.xfrc_applied;
          if (__BALLMODE && xf) {
            const f = __aeroF(u.qvel[__BALLV], u.qvel[__BALLV + 1], u.qvel[__BALLV + 2]);
            xf[__BALLB * 6] = f[0]; xf[__BALLB * 6 + 1] = f[1]; xf[__BALLB * 6 + 2] = f[2];
            xf[__BALLB * 6 + 3] = 0; xf[__BALLB * 6 + 4] = 0; xf[__BALLB * 6 + 5] = 0;
          }
        } catch (e) {}
        if (window.__DBG137 && (__simT - (window.__lastDbg || 0) >= 1)) { window.__lastDbg = __simT; console.log("DBG137 t=" + __simT.toFixed(2) + " z=" + u.qpos[2].toFixed(3) + " ball=" + u.qpos[36].toFixed(2) + "," + u.qpos[37].toFixed(2) + "," + u.qpos[38].toFixed(2) + " ep=" + __epStep + " bnc=" + __bounces + " hist=" + __HIST.length); }
        try { r.mj_step(a, u); } catch (e) { if (!window.__stepErr) { window.__stepErr = 1; console.log("STEP ERR", String(e)); } __simT += __DT; continue; }
        if (__BALLMODE) {
          try {
            const bz = u.qpos[__BALLQ + 2], bvz = u.qvel[__BALLV + 2];
            if (bz <= 0.036 && bvz < -0.01 && !__bnArm) { __bounces++; __bnArm = true; }
            if (bz > 0.05) __bnArm = false;
            const sx2 = u.site_xpos[__RCSITE*3], sy2 = u.site_xpos[__RCSITE*3+1], sz2 = u.site_xpos[__RCSITE*3+2];
            const dcq = Math.hypot(u.qpos[__BALLQ]-sx2, u.qpos[__BALLQ+1]-sy2, u.qpos[__BALLQ+2]-sz2);
            if (dcq < 0.16) __contact = true;
            if ((u.xmat[17] < 0.6) || u.qpos[2] < 0.65 || __contact || __bounces >= 2 || __epStep >= __HORIZON) {
              window.__whyN = (window.__whyN || 0) + 1;
              if (window.__whyN <= 12) console.log("WHY137 up=" + u.xmat[17].toFixed(3) + " z=" + u.qpos[2].toFixed(3) + " contact=" + __contact + " bnc=" + __bounces + " ep=" + __epStep + " H=" + __HORIZON + " dcq=" + dcq.toFixed(3) + " ballz=" + u.qpos[__BALLQ+2].toFixed(3) + " simT=" + __simT.toFixed(2));
              __resetEpisode();
            }
          } catch (e) {}
        }
        try {
          const RB = 0.033, bq = __BALLQ, bv = __BALLV; if (true) throw 0;
          if (u.qpos[bq + 2] <= RB + 0.002 && u.qvel[bv + 2] < 0) {
            // spin-coupled rigid-body bounce calibrated to ITF/Cross hard-court measurements (grip: sticking impulse; slide: mu-capped; hollow-ball inertia)
            const e = 0.78, mu = 0.65, KC = 1.5; // hollow-ball inertia I=(2/3)mR^2 -> spin coupling KC/R (Cross: w2 = (mR/I)(vx1-vx2))
            const vx = u.qvel[bv], vy = u.qvel[bv + 1], vz = u.qvel[bv + 2];
            const cvx = vx - RB * __omg[1], cvy = vy + RB * __omg[0];
            const jn = (1 + e) * (-vz);
            const slip = Math.hypot(cvx, cvy);
            let jx = 0, jy = 0;
            if (slip > 1e-9) { const jt = Math.min(slip / (1 + KC), mu * jn); jx = -jt * cvx / slip; jy = -jt * cvy / slip; } // grip: stop contact slip consistently with spin change; slide: mu cap
            u.qvel[bv] = vx + jx; u.qvel[bv + 1] = vy + jy; u.qvel[bv + 2] = e * (-vz);
            __omg = [__omg[0] + KC * jy / RB, __omg[1] - KC * jx / RB, __omg[2]];
            u.qvel[bv + 3] = __omg[0]; u.qvel[bv + 4] = __omg[1]; u.qvel[bv + 5] = __omg[2];
            u.qpos[bq + 2] = RB + 0.002;
          }
        } catch (e2) {}
        __simT += __DT;
        if (!__fallen && u.qpos[2] < 0.65) { __fallen = true; __fallT = __simT; if (window.__RACKET) window.__RACKET.visible = false; }
      }
      if (__fallen && __simT - __fallT > 2.5) __resetEpisode();
    }

    // === display skin: cosmetic STLs mapped onto the training physics bodies (physics unchanged) ===
    const __SKIN = [];
    function __qmul(a, b) { return [a[0]*b[0]-a[1]*b[1]-a[2]*b[2]-a[3]*b[3], a[0]*b[1]+a[1]*b[0]+a[2]*b[3]-a[3]*b[2], a[0]*b[2]-a[1]*b[3]+a[2]*b[0]+a[3]*b[1], a[0]*b[3]+a[1]*b[2]-a[2]*b[1]+a[3]*b[0]]; }
    function __qrot(q, v) { const u=[0,v[0],v[1],v[2]], c=[q[0],-q[1],-q[2],-q[3]]; const r=__qmul(__qmul(q,u),c); return [r[1],r[2],r[3]]; }
    try {
      const __xmlT = await (await fetch(Da + "h2_stand_v3.xml?t=" + Date.now())).text();
      const __bidx = {}; [...__xmlT.matchAll(/<body name="([^"]+)"/g)].forEach((m, i) => { __bidx[m[1]] = i + 1; });
      const __stl = (ab) => {
        const dv = new DataView(ab), n = dv.getUint32(80, true), uu = new Float32Array(n * 9);
        for (let k = 0; k < n; k++) { const o = 84 + k * 50 + 12; for (let c = 0; c < 9; c++) uu[k * 9 + c] = dv.getFloat32(o + c * 4, true); }
        const g = new gn(); g.setAttribute("position", new _n(uu, 3)); g.computeVertexNormals(); return g;
      };
      const __mat = new xr({ color: 0xb9b9b9, roughness: 0.55, metalness: 0.3 });
      await Promise.all(Ac.map(async (f) => {
        try {
          const nm = f.replace(/\.stl$/i, "");
          if (!__bidx[nm]) return;
          const ab = await (await fetch(Da + "assets/" + f)).arrayBuffer();
          const m = new ln(__stl(ab), __mat); m.castShadow = !0; Fn.add(m);
          __SKIN.push({ bi: __bidx[nm], mesh: m, op: null, oq: null });
        } catch (e) {}
      }));
      try {
        const ab = await (await fetch(Da + "assets/tennis/entire_visual.STL?t=" + Date.now())).arrayBuffer();
        const m = new ln(__stl(ab), __mat); m.castShadow = !0; Fn.add(m);
        __SKIN.push({ bi: __bidx["right_wrist_yaw_link"], mesh: m, op: [0.0415, -0.003, 0], oq: [0.5, -0.5, 0.5, -0.5] }); window.__RACKET = m;;
      } catch (e) {}
      const __mach = new ln(new ar(1.1, 0.96, 1.04), new xr({ color: 0xff5905 })); __mach.position.set(0, 0, 0.52); __mach.castShadow = !0;
      const __tube = new ln(new Ps(0.16, 0.16, 0.92, 20), new xr({ color: 0x1a1a1a })); __tube.rotation.z = Math.PI / 2; __tube.position.set(0.48, 0, 0.78);
      const __wheel = new ln(new Ps(0.18, 0.18, 0.09, 20), new xr({ color: 0x0d0d0d })); __wheel.rotation.x = Math.PI / 2; __wheel.position.set(0, -0.38, 0.15);
      const __wheel2 = __wheel.clone(); __wheel2.position.set(0, 0.38, 0.15);
      const __MACHG = new ms(); __MACHG.add(__mach); __MACHG.add(__tube); __MACHG.add(__wheel); __MACHG.add(__wheel2); __MACHG.position.set(-7.8, 3.0, 0); Fn.add(__MACHG); window.__MACHG = __MACHG;
      // === lawn setting: plain grass, stadium removed (display-only) ===       try {         const __ground = new ln(new Di(200, 200), new jc({ color: 0x35772f }));         __ground.position.set(0, 0, -0.02); __ground.receiveShadow = !0; Fn.add(__ground);       } catch (e) {}

      let __feedLastCy = -1, __feedLastEp = -1, __feedP = null, __feedV = null, __feedAge = 0, __prevSimT = -1;
      (function __skinTick() {
        try {
          for (const s2 of __SKIN) {
            const __sd = (window.__SONIC && window.__SONIC.active && window.__SONIC.u) || u, i3 = s2.bi * 3, i4 = s2.bi * 4;
            const bq = [__sd.xquat[i4], __sd.xquat[i4+1], __sd.xquat[i4+2], __sd.xquat[i4+3]];
            if (s2.op) {
              const wp = __qrot(bq, s2.op);
              s2.mesh.position.set(__sd.xpos[i3] + wp[0], __sd.xpos[i3+1] + wp[1], __sd.xpos[i3+2] + wp[2]);
              const wq = __qmul(bq, s2.oq);
              s2.mesh.quaternion.set(wq[1], wq[2], wq[3], wq[0]);
            } else {
              s2.mesh.position.set(__sd.xpos[i3], __sd.xpos[i3+1], __sd.xpos[i3+2]);
              s2.mesh.quaternion.set(bq[1], bq[2], bq[3], bq[0]);
            }
          }
          try {
            const __pst = window.__PHYS_STATE();
            const sT = __pst.simT;
            const sdt = __prevSimT < 0 ? 0 : Math.min(0.05, Math.max(0, sT - __prevSimT));
            __prevSimT = sT;
            if (__pst.ep !== __feedLastEp) { __feedLastEp = __pst.ep; __feedLastCy = -1; }
            const __cy = Math.floor(sT / 4.0);
            if (!__BALLMODE && __cy !== __feedLastCy) {
              __feedLastCy = __cy;
              let __h = (n) => { const x = Math.sin(__cy * 127.1 + n * 311.7) * 43758.5453; return x - Math.floor(x); };
              if (__FEED.rand) {
                __h = (n) => Math.random();
                __FEED.clear = Math.round((0.5 + Math.random() * 2.5) * 100) / 100; // net clearance 0.5-3.0 m
                __FEED.rpm = Math.round((Math.random() * 2 - 1) * 4000 / 250) * 250; // topspin/slice mix, training band
                __FEED.side = Math.round((Math.random() * 2 - 1) * 4000 / 250) * 250; // sidespin
                __FEED.speed = Math.round((16 + Math.random() * 19) * 2) / 2; // 16-35 m/s, training band
              }
              const __lx = -12.6 + 1.0 * __h(1), __ly = -3.5 + 7.0 * __h(2);
              const __tx = 5.5 + 3.0 * __h(3), __ty = -3.0 + 6.0 * __h(4);
              const __A = Math.atan2(__ty - __ly, __tx - __lx);
              const az = __A + 0.10 * (__h(6) - 0.5);
              const w = __FEED.rpm * 2 * Math.PI / 60;
              const ws = __FEED.side * 2 * Math.PI / 60;
              const __sx = __lx + 0.9 * Math.cos(__A), __sy = __ly + 0.9 * Math.sin(__A);
              const __cap = __maxPace(__sx, __sy, 0.82, az, w, __FEED.clear, ws);
              let v = __FEED.rand ? Math.min(__FEED.speed, __cap) : (__FEED.auto ? __cap : __FEED.speed);
              let el = __solveLaunch(__sx, __sy, 0.82, az, v, w, __FEED.clear, ws);
              if (__FEED.rand) {
                const __chk = __simFlight(__sx, __sy, 0.82, az, el, v, w, ws);
                if (!(__chk.znet !== null && __chk.land >= 0.5 && __chk.land <= 11.3 && Math.abs(__chk.yland) <= 5.6)) { v = __cap; el = __solveLaunch(__sx, __sy, 0.82, az, v, w, __FEED.clear, ws); }
                __FEED.speed = v;
                try { if (window.__feedUISync) window.__feedUISync(); } catch (e) {}
              }
              __omg = [-w * Math.sin(az), w * Math.cos(az), ws];
              __feedP = [__sx, __sy, 0.82];
              __feedV = [v * Math.cos(el) * Math.cos(az), v * Math.cos(el) * Math.sin(az), v * Math.sin(el)];
              __feedAge = 0;
              window.__FEEDDBG = { lx: +__lx.toFixed(2), ly: +__ly.toFixed(2), tx: +__tx.toFixed(2), ty: +__ty.toFixed(2), v: +v.toFixed(1), el: +el.toFixed(3), cy: __cy };
              try {
                __mach.position.set(__lx, __ly, 0.52); __mach.rotation.z = __A;
                __tube.position.set(__lx + 0.48 * Math.cos(__A), __ly + 0.48 * Math.sin(__A), 0.78); __tube.rotation.z = Math.PI / 2 + __A;
                __wheel.position.set(__lx - 0.38 * Math.sin(__A), __ly + 0.38 * Math.cos(__A), 0.15); __wheel.rotation.z = __A;
                __wheel2.position.set(__lx + 0.38 * Math.sin(__A), __ly - 0.38 * Math.cos(__A), 0.15); __wheel2.rotation.z = __A;
              } catch (me) {}
            }
            if (__feedP && sdt > 0 && !__BALLMODE) {
              __feedAge += sdt;
              const f2 = __aeroF(__feedV[0], __feedV[1], __feedV[2]);
              __feedV[0] += f2[0] / 0.057 * sdt; __feedV[1] += f2[1] / 0.057 * sdt; __feedV[2] += (f2[2] / 0.057 - 9.81) * sdt;
              __feedP[0] += __feedV[0] * sdt; __feedP[1] += __feedV[1] * sdt; __feedP[2] += __feedV[2] * sdt;
              const RB2 = 0.033;
              if (__feedP[2] <= RB2 + 0.002 && __feedV[2] < 0) {
                const e2 = 0.78, mu2 = 0.65, KC2 = 1.5;
                const vx2 = __feedV[0], vy2 = __feedV[1], vz2 = __feedV[2];
                const cvx = vx2 - RB2 * __omg[1], cvy = vy2 + RB2 * __omg[0];
                const jn = (1 + e2) * (-vz2), slip = Math.hypot(cvx, cvy);
                let jx = 0, jy = 0;
                if (slip > 1e-9) { const jt = Math.min(slip / (1 + KC2), mu2 * jn); jx = -jt * cvx / slip; jy = -jt * cvy / slip; }
                __feedV[0] = vx2 + jx; __feedV[1] = vy2 + jy; __feedV[2] = e2 * (-vz2);
                __omg = [__omg[0] + KC2 * jy / RB2, __omg[1] - KC2 * jx / RB2, __omg[2]];
                __feedP[2] = RB2 + 0.002;
                if (Math.abs(__feedV[2]) < 0.6) __feedV[2] = 0;
              }
              if (__feedP[2] <= RB2 + 0.003 && __feedV[2] === 0) { const fr = Math.max(0, 1 - 1.4 * sdt); __feedV[0] *= fr; __feedV[1] *= fr; }
              if (__feedAge > 12 || __feedP[0] > 13 || Math.abs(__feedP[1]) > 7) __feedP = null;
            }
            if (__BALLMODE) { J.visible = !(window.__SONIC && window.__SONIC.active); J.position.set(u.xpos[__BALLB*3], u.xpos[__BALLB*3+1], Math.max(u.xpos[__BALLB*3+2], 0.033)); } else if (__feedP) { J.visible = !(window.__SONIC && window.__SONIC.active); J.position.set(__feedP[0], __feedP[1], Math.max(__feedP[2], 0.033)); }
            else { J.visible = !(window.__SONIC && window.__SONIC.active); J.position.set(__mach.position.x, __mach.position.y, 1.08); }
          } catch (fe) {}
        } catch (e) {}
        requestAnimationFrame(__skinTick);
      })();
    } catch (e) {}
    const J = new ln(
      new br(0.033, 20, 14),
      new jc({ color: 14745408 }),
    );
    (J.material.fog = !1, (J.castShadow = !0),
      Fn.add(J), window.__BALLM = J,
      KE(Da + "assets/tennis/tennis_court_clay.png?t=" + Date.now()),
      __buildFeedUI(),
      (document.querySelector("#pause").onclick = (ie) => {
        ((M = !M), (ie.target.textContent = M ? "Resume" : "Pause"));
      }),
      (document.querySelector("#reset").onclick = () =>
        (z = performance.now())),
      (document.querySelector("#physics").textContent =
        "MuJoCo 3.13 WASM · live"),
      (document.querySelector("#geo").textContent =
        "display skin · training physics (v3 MJCF)"),
      (document.querySelector("#badge").textContent = "REAL MUJOCO · LIVE"),
      document.querySelector("#loadbarfill") &&
        (document.querySelector("#loadbarfill").style.width = "100%"),
      wc.remove(),
      requestAnimationFrame(ae));
  } catch (r) {
    (console.error(r),
      (wc.innerHTML = `<div class="error"><b>SIM LOAD FAILED</b><small>${String(r.message || r)}</small></div>`),
      (document.querySelector("#badge").textContent = "LOAD ERROR"));
  }
}
addEventListener("resize", () => {
  ((sr.aspect = innerWidth / innerHeight),
    sr.updateProjectionMatrix(),
    Yn.setSize(innerWidth, innerHeight));
});
ZE();
const JE = Object.freeze(
  Object.defineProperty({ __proto__: null }, Symbol.toStringTag, {
    value: "Module",
  }),
);

// ---- obs-137 parity hook (?parity=1): reset to ref episode, build obs, report max abs diff ----
if (/[?&]parity=1/.test(location.search)) (async function () {
  try {
    for (let i = 0; i < 240 && !window.__BALLMODE; i++) await new Promise((s2) => setTimeout(s2, 500));
    const rf = await (await fetch("./assets/unitree_h2/ref_obs.json?t=" + Date.now())).json();
    const mm = window.__MUJOCO_REF;
    if (!mm) throw new Error("no mujoco ref hook");
    mm(rf);
  } catch (e4) { window.__PARITY = { error: String(e4) }; console.log("PARITY137 ERROR " + e4); document.title = "PARITY ERROR " + e4; }
})();

window.__DBG137 = /[?&]dbg137=1/.test(location.search);
;(function __uiHide(){
  try{
    var st=document.createElement('style');
    st.textContent='body.__uihide .top,body.__uihide .hud,body.__uihide .copy,body.__uihide .controls,body.__uihide .truth,body.__uihide .chip,body.__uihide #trainprog,body.__uihide #feedctl,body.__uihide #sonicbtn,body.__uihide #soniccap{display:none!important}'+
    '#uihidebtn{position:fixed;right:14px;bottom:14px;z-index:400;background:rgba(12,14,18,.55);color:#cfd8e3;border:1px solid rgba(140,160,180,.25);border-radius:8px;padding:4px 9px;font-size:10px;letter-spacing:.12em;cursor:pointer;opacity:.6;font-family:inherit}'+
    '#uihidebtn:hover{opacity:1}';
    document.head.appendChild(st);
    var b=document.createElement('button'); b.id='uihidebtn'; b.type='button'; b.textContent='HIDE UI (H)';
    b.onclick=function(){window.__toggleUIHide();};
    document.body.appendChild(b);
    window.__toggleUIHide=function(){document.body.classList.toggle('__uihide');b.textContent=document.body.classList.contains('__uihide')?'SHOW UI (H)':'HIDE UI (H)';};
    window.addEventListener('keydown',function(e){var t=e.target;if(t&&(t.tagName==='INPUT'||t.tagName==='TEXTAREA'||t.isContentEditable))return;if((e.key||'').toLowerCase()==='h')window.__toggleUIHide();});
  }catch(e){}
})();
;(function __wasdNav(){var __tries=0;var __iv=setInterval(function(){__tries++;try{var cam=window.__CAM,orb=window.__ORBIT;if(!cam||!orb){if(__tries>600)clearInterval(__iv);return;}clearInterval(__iv);var keys={};window.addEventListener('keydown',function(e){var t=e.target;if(t&&(t.tagName==='INPUT'||t.tagName==='TEXTAREA'||t.isContentEditable))return;var k=(e.key||'').toLowerCase();keys[k]=true;if(k==='w'||k==='a'||k==='s'||k==='d'||k.indexOf('arrow')===0)e.preventDefault();});window.addEventListener('keyup',function(e){keys[(e.key||'').toLowerCase()]=false;});window.addEventListener('blur',function(){keys={};});setInterval(function(){var f=0,st=0;if(keys['w']||keys['arrowup'])f+=1;if(keys['s']||keys['arrowdown'])f-=1;if(keys['d']||keys['arrowright'])st+=1;if(keys['a']||keys['arrowleft'])st-=1;if(!f&&!st)return;var dx=orb.target.x-cam.position.x,dy=orb.target.y-cam.position.y;var dl=Math.hypot(dx,dy)||1;dx/=dl;dy/=dl;var __now=performance.now();var __dt=Math.min(50,__now-(window.__wasdT||__now-16))/1000;window.__wasdT=__now;var sp=(keys['shift']?14:6)*__dt;var mx=(dx*f-dy*st)*sp,my=(dy*f+dx*st)*sp;cam.position.x+=mx;cam.position.y+=my;orb.target.x+=mx;orb.target.y+=my;orb.update();},16);}catch(e){}},250);})();
;(function __lawnFix2(){var __tries=0;var __iv=setInterval(function(){__tries++;try{var rk=window.__RACKET;if(!rk){if(__tries>600)clearInterval(__iv);return;}var sc=rk,n=0;while(sc.parent&&n<20){sc=sc.parent;n++;}var court=null,ball=null,lawn=null,apron=null;sc.traverse(function(o){if(o.isMesh){var g=o.geometry;if(g.type==="PlaneGeometry"){if(g.parameters.width===200)lawn=o;else if(g.parameters.width===23.77)court=o;else if(g.parameters.width===35.77)apron=o;}if(g.type==="SphereGeometry"&&g.parameters&&g.parameters.radius<0.1&&o.material.type==="MeshBasicMaterial")ball=o;}});if(!court||!ball){if(__tries>600)clearInterval(__iv);return;}var BM=ball.material.constructor,SM=court.material.constructor,PG=court.geometry.constructor,Msh=court.constructor,Tex=court.material.map.constructor;
if(!window.__GRASSTEX){var cv=document.createElement("canvas");cv.width=1024;cv.height=1024;var cx=cv.getContext("2d");cx.fillStyle="#2f6e2b";cx.fillRect(0,0,1024,1024);for(var bi=0;bi<16;bi++){cx.fillStyle=bi%2===0?"rgba(255,255,255,0.055)":"rgba(0,0,0,0.065)";cx.fillRect(bi*64,0,64,1024);}var img=cx.getImageData(0,0,1024,1024),dd=img.data;for(var p=0;p<dd.length;p+=4){var nz=(Math.random()-0.5)*30;dd[p]+=nz*0.8;dd[p+1]+=nz*1.25;dd[p+2]+=nz*0.7;}cx.putImageData(img,0,0);cx.globalAlpha=0.06;cx.strokeStyle="#a8d884";for(var k=0;k<4500;k++){var x=Math.random()*1024,y=Math.random()*1024;cx.beginPath();cx.moveTo(x,y);cx.lineTo(x+(Math.random()*2-1),y-2-Math.random()*2.5);cx.stroke();}cx.globalAlpha=0.05;cx.strokeStyle="#1d4d1c";for(var k2=0;k2<2500;k2++){var x2=Math.random()*1024,y2=Math.random()*1024;cx.beginPath();cx.moveTo(x2,y2);cx.lineTo(x2+(Math.random()*2-1),y2-2-Math.random()*2);cx.stroke();}cx.globalAlpha=1;var gt=new Tex(cv);gt.needsUpdate=true;gt.colorSpace=court.material.map.colorSpace;gt.wrapS=gt.wrapT=1000;gt.repeat.set(14,14);gt.anisotropy=8;window.__GRASSTEX=gt;
var at=new O_().load(Da+"assets/tennis/tennis_apron_clay.png?t="+Date.now());at.colorSpace=court.material.map.colorSpace;at.anisotropy=8;window.__AProntEX=at;}
if(!lawn){lawn=new Msh(new PG(200,200),new BM({map:window.__GRASSTEX}));lawn.position.set(0,0,-0.02);lawn.receiveShadow=true;sc.add(lawn);}else if(lawn.material.map!==window.__GRASSTEX){lawn.material=new BM({map:window.__GRASSTEX});}
if(!apron){apron=new Msh(new PG(35.77,17.97),new SM({map:window.__AProntEX,roughness:0.85}));apron.position.set(0,0,0.001);apron.receiveShadow=true;sc.add(apron);}

clearInterval(__iv);}catch(e){if(__tries>600)clearInterval(__iv);}},100);})();
;(function __sonicMode(){
  try {
    var MJ31 = ["left_hip_pitch_joint","left_hip_roll_joint","left_hip_yaw_joint","left_knee_joint","left_ankle_roll_joint","left_ankle_pitch_joint","right_hip_pitch_joint","right_hip_roll_joint","right_hip_yaw_joint","right_knee_joint","right_ankle_roll_joint","right_ankle_pitch_joint","waist_yaw_joint","waist_roll_joint","waist_pitch_joint","head_pitch_joint","head_yaw_joint","left_shoulder_pitch_joint","left_shoulder_roll_joint","left_shoulder_yaw_joint","left_elbow_joint","left_wrist_roll_joint","left_wrist_pitch_joint","left_wrist_yaw_joint","right_shoulder_pitch_joint","right_shoulder_roll_joint","right_shoulder_yaw_joint","right_elbow_joint","right_wrist_roll_joint","right_wrist_pitch_joint","right_wrist_yaw_joint"];
    // welded-out of the ath body: slots 15 (head_pitch), 16 (head_yaw) stay inert
    var XJ = MJ31.map(function(_,m){ return m<15 ? m : (m>16 ? m-2 : -1); }); // MJ31 slot -> model joint index (0..28) or -1
    var ISA31 = ["left_hip_pitch_joint", "right_hip_pitch_joint", "waist_yaw_joint", "left_hip_roll_joint", "right_hip_roll_joint", "waist_roll_joint", "left_hip_yaw_joint", "right_hip_yaw_joint", "waist_pitch_joint", "left_knee_joint", "right_knee_joint", "head_pitch_joint", "left_shoulder_pitch_joint", "right_shoulder_pitch_joint", "left_ankle_roll_joint", "right_ankle_roll_joint", "head_yaw_joint", "left_shoulder_roll_joint", "right_shoulder_roll_joint", "left_ankle_pitch_joint", "right_ankle_pitch_joint", "left_shoulder_yaw_joint", "right_shoulder_yaw_joint", "left_elbow_joint", "right_elbow_joint", "left_wrist_roll_joint", "right_wrist_roll_joint", "left_wrist_pitch_joint", "right_wrist_pitch_joint", "left_wrist_yaw_joint", "right_wrist_yaw_joint"]; // policy obs/action order (pipeline training order - ORDER=mj permutation FALLS at 0.22s locally, ISA stands)
    var PERM = ISA31.map(function(n){ return MJ31.indexOf(n); });
    var XJp = PERM.map(function(m){ return m<15 ? m : (m>16 ? m-2 : -1); });
    var EFFR = [360,360,360,360,19,66.88,360,360,360,360,19,66.88,120,180,180,0,0,120,54,54,54,54,25,25,120,54,54,54,54,25,25]; // EFF=real per published harness: actuatorfrcrange of its /tmp/h2.xml (validated locally: stand rmse 0.133, no fall)
    var AA = {A5020:0.003609725, A7520_14:0.010177520, A7520_22:0.025101925, A4010:0.00425};
    var WW = 10*2*Math.PI, ZZ = 2.0;
    function gn(n){ var K=function(a){return a*WW*WW;}, D=function(a){return 2*ZZ*a*WW;};
      if (n.indexOf('hip_yaw')>=0) return [K(AA.A7520_14),D(AA.A7520_14),AA.A7520_14];
      if (n.indexOf('hip')>=0 || n.indexOf('knee')>=0) return [K(AA.A7520_22),D(AA.A7520_22),AA.A7520_22];
      if (n.indexOf('ankle')>=0 || n==='waist_roll_joint' || n==='waist_pitch_joint' || n.indexOf('head')>=0) return [2*K(AA.A5020),2*D(AA.A5020),2*AA.A5020];
      if (n==='waist_yaw_joint') return [K(AA.A7520_14),D(AA.A7520_14),AA.A7520_14];
      if (n.indexOf('wrist_pitch')>=0 || n.indexOf('wrist_yaw')>=0) return [K(AA.A4010),D(AA.A4010),AA.A4010];
      return [K(AA.A5020),D(AA.A5020),AA.A5020]; }
    var KP=MJ31.map(function(n){return gn(n)[0];}), KD=MJ31.map(function(n){return gn(n)[1];}), ARM=MJ31.map(function(n){return gn(n)[2];});
    var DEFV=MJ31.map(function(n){ var v=0;
      if (n.indexOf('hip_pitch')>=0) v=-0.312; if (n.indexOf('knee')>=0) v=0.669;
      if (n.indexOf('ankle_pitch')>=0) v=-0.363; if (n.indexOf('elbow')>=0) v=0.6;
      if (n==='left_shoulder_roll_joint') v=0.2; if (n==='left_shoulder_pitch_joint') v=0.2;
      if (n==='right_shoulder_roll_joint') v=-0.2; if (n==='right_shoulder_pitch_joint') v=0.2; return v; });
    var SCALE=MJ31.map(function(_,i){ return KP[i]>0 ? 0.25*EFFR[i]/KP[i] : 0; });
    var DEFVp = PERM.map(function(m){ return DEFV[m]; });
    var SCALEp = PERM.map(function(m){ return SCALE[m]; });
    var S = window.__SONIC = { active:false, u:null, ready:false, loading:false, err:null, clipName:'stand', stepCount:0, lastErr:null };
    var mS=null, dS=null, r=null, sess=null, clip=null, simT=0, lastWall=-1, nextCtrl=0, frame=0, fallT=-1;
    var last=new Float64Array(31), hist={av:[],jp:[],jv:[],ac:[],g:[]};
    var OFF={x:7.4,y:2.85};
    function qmul(a,b){ return [a[0]*b[0]-a[1]*b[1]-a[2]*b[2]-a[3]*b[3], a[0]*b[1]+a[1]*b[0]+a[2]*b[3]-a[3]*b[2], a[0]*b[2]-a[1]*b[3]+a[2]*b[0]+a[3]*b[1], a[0]*b[3]+a[1]*b[2]-a[2]*b[1]+a[3]*b[0]]; }
    function qmat(q){ var w=q[0],x=q[1],y=q[2],z=q[3]; return [1-2*(y*y+z*z),2*(x*y-z*w),2*(x*z+y*w), 2*(x*y+z*w),1-2*(x*x+z*z),2*(y*z-x*w), 2*(x*z-y*w),2*(y*z+x*w),1-2*(x*x+y*y)]; }
    function qrot(q,v){ var m=qmat(q); return [m[0]*v[0]+m[1]*v[1]+m[2]*v[2], m[3]*v[0]+m[4]*v[1]+m[5]*v[2], m[6]*v[0]+m[7]*v[1]+m[8]*v[2]]; }
    function obs1670(){
      var q=dS.qpos, v=dS.qvel, quat=[q[3],q[4],q[5],q[6]];
      var g=qrot([quat[0],-quat[1],-quat[2],-quat[3]],[0,0,-1]);
      var jp=[], jv=[];
      for (var m=0;m<31;m++){ var j=XJp[m]; jp.push(j>=0 ? q[7+j]-DEFVp[m] : 0); jv.push(j>=0 ? v[6+j] : 0); }
      var cur={av:[v[3],v[4],v[5]], jp:jp, jv:jv, ac:Array.from(last), g:g};
      ['av','jp','jv','ac','g'].forEach(function(k){ hist[k].push(cur[k]); if (hist[k].length>10) hist[k].shift(); while (hist[k].length<10) hist[k].unshift(hist[k][0]); });
      var out=new Float32Array(1670), o=0, n=clip.frames, f, k2;
      for (k2=0;k2<10;k2++){ f=Math.min(frame+k2*5,n-1); out.set(clip.dof(f),o); o+=31; }
      for (k2=0;k2<10;k2++){ f=Math.min(frame+k2*5,n-1); out.set(clip.dofv(f),o); o+=31; }
      var fw=qrot(quat,[1,0,0]), yaw=Math.atan2(fw[1],fw[0]), hq=[Math.cos(yaw/2),0,0,Math.sin(yaw/2)];
      for (k2=0;k2<10;k2++){ f=Math.min(frame+k2*5,n-1);
        var mm=qmat(qmul([hq[0],-hq[1],-hq[2],-hq[3]],Array.from(clip.rq(f))));
        out.set([mm[0],mm[1],mm[3],mm[4],mm[6],mm[7]],o); o+=6; }
      ['av','jp','jv','ac','g'].forEach(function(k){ hist[k].forEach(function(h){ out.set(h,o); o+=h.length; }); });
      return out;
    }
    var infer=false;
    function policyTick(){ /* retired: synchronous-apply loop below (tracking policy falls with >=1 tick action delay) */ }
    function reset(){
      try { r.mj_resetData(mS,dS); } catch(e){}
      var rp=clip.rp(0), rq=clip.rq(0);
      dS.qpos[0]=rp[0]+OFF.x; dS.qpos[1]=rp[1]+OFF.y; dS.qpos[2]=rp[2];
      dS.qpos[3]=rq[0]; dS.qpos[4]=rq[1]; dS.qpos[5]=rq[2]; dS.qpos[6]=rq[3];
      var d0=clip.dof(0), dv0=clip.dofv(0);
      for (var m=0;m<31;m++){ var j=XJp[m]; if (j>=0){ dS.qpos[7+j]=d0[m]; dS.qvel[6+j]=dv0[m]; } }
      for (var j2=0;j2<29;j2++){ var mm=j2<15?j2:j2+2; dS.ctrl[j2]=DEFV[mm]; }
      last.fill(0); hist={av:[],jp:[],jv:[],ac:[],g:[]};
      frame=0; fallT=-1; simT=0; nextCtrl=0;
      r.mj_forward(mS,dS);
    }
    var looping=false;
    async function ctrlLoop(){
      if (looping) return; looping=true;
      var wall0=performance.now()/1000, sim0=simT;
      while (S.active && S.ready){
        var ob=obs1670();
        try {
          var res=await sess.run({obs_dict:new ort.Tensor('float32', ob, [1,1670])});
          var a=res[sess.outputNames[0]].data;
          for (var m=0;m<31;m++){ var cl=Math.max(-20,Math.min(20,a[m])); last[m]=cl;
            var j=XJp[m]; if (j>=0) dS.ctrl[j]=DEFVp[m]+cl*SCALEp[m]; }
        } catch(e){}
        frame=Math.min(frame+1, clip.frames-1);
        for (var k=0;k<4;k++){ try { r.mj_step(mS,dS); S.stepCount++; } catch(e){ S.lastErr=String(e); } simT+=0.005; }
        if (frame>=clip.frames-1){ S.lastReset='clip_end@'+simT.toFixed(2); reset(); wall0=performance.now()/1000; sim0=simT; continue; }
        var cz=clip.rp(frame)[2], up=dS.xmat[17];
        if (fallT<0 && (dS.qpos[2]<cz-0.3 || up<0.5)){ fallT=simT; }
        if (fallT>=0 && simT-fallT>1.5){ S.lastReset='fall@'+simT.toFixed(2)+' z='+dS.qpos[2].toFixed(3); reset(); wall0=performance.now()/1000; sim0=simT; continue; }
        var wallNow=performance.now()/1000, target=wall0+(simT-sim0);
        if (target>wallNow) await new Promise(function(rs){ setTimeout(rs, Math.min(250,(target-wallNow)*1000)); });
      }
      looping=false;
    }
    function tick(){ /* replaced by ctrlLoop */ }
    function setBtn(t){ var b=document.getElementById('sonicbtn'); if (b) b.textContent=t; }
    function activate(){
      if (!S.ready || S.active) return;
      S.active=true; lastWall=-1;
      try { if (window.__MACHG) window.__MACHG.visible=false; if (window.__RACKET) window.__RACKET.visible=false; } catch(e){}
      try {
        S.__hb = function(on){ var sc=window.__BALLM; if(!sc) return; var root=sc; while(root.parent) root=root.parent; root.traverse(function(o){ if(o.isMesh && o.geometry && o.geometry.type==='SphereGeometry' && o.geometry.parameters && o.geometry.parameters.radius<0.1) o.visible=!on; }); };
        S.__hb(true); clearInterval(S.__hideIv); S.__hideIv=setInterval(function(){ if (S.active) S.__hb(true); }, 400);
      } catch(e){}
      try { if (window.__CAM && window.__ORBIT){ window.__CAM.position.set(11.4,6.6,2.7); window.__ORBIT.target.set(7.4,2.85,1); window.__ORBIT.update(); } } catch(e){}
      var cap=document.getElementById('soniccap'); if (cap) cap.style.display='block';
      setBtn('SONIC: ON');
      reset();
      ctrlLoop();
    }
    function deactivate(){
      S.active=false;
      try { clearInterval(S.__hideIv); S.__hideIv=null; if (window.__MACHG) window.__MACHG.visible=true; if (window.__RACKET) window.__RACKET.visible=true; if (S.__hb) S.__hb(false); if (window.__BALLM) window.__BALLM.visible=true; } catch(e){}
      var cap=document.getElementById('soniccap'); if (cap) cap.style.display='none';
      setBtn('SONIC DEMO');
    }
    async function load(){
      if (S.loading || S.ready) return; S.loading=true; setBtn('SONIC: LOADING');
      try {
        var tries=0; while (!window.__MJ && tries<600){ await new Promise(function(rs){setTimeout(rs,250);}); tries++; }
        r=window.__MJ; if (!r) throw new Error('mujoco runtime unavailable');
        var base='./assets/unitree_h2/';
        var xml=await (await fetch(base+'h2_ath.xml?t='+Date.now())).text();
        var hdr=await (await fetch(base+'sonic_stand.json?t='+Date.now())).json();
        var buf=await (await fetch(base+'sonic_stand.bin?t='+Date.now())).arrayBuffer();
        var fa=new Float32Array(buf), F=hdr.frames, o1=0, o2=o1+F*3, o3=o2+F*4, o4=o3+F*31;
        clip={ frames:F,
          rp:function(i){return fa.subarray(o1+i*3,o1+i*3+3);}, rq:function(i){return fa.subarray(o2+i*4,o2+i*4+4);},
          dof:function(i){return fa.subarray(o3+i*31,o3+i*31+31);}, dofv:function(i){return fa.subarray(o4+i*31,o4+i*31+31);} };
        (function(){ var tmp=new Float32Array(31); for (var i=0;i<F;i++){ var d=clip.dof(i); tmp.set(d); for (var k=0;k<31;k++) d[k]=tmp[PERM[k]]; var v=clip.dofv(i); tmp.set(v); for (var k2=0;k2<31;k2++) v[k2]=tmp[PERM[k2]]; } })(); // clip now in ISA (policy) order window.__SONIC.clipName=hdr.name||'clip';
        mS=r.MjModel.from_xml_string(xml, new r.MjVFS());
        if(!window.__SONICDBG) window.__SONICDBG={}; window.__SONICDBG.m=mS;
        dS=new r.MjData(mS);
        window.__SONICDBG.d=dS;
        // runtime gain override (sonic_mj.py build()): fixed-gain PD per joint, effort from file ranges
        try {
          for (var j=0;j<29;j++){ var m=j<15?j:j+2;
            mS.actuator_gaintype[j]=0; mS.actuator_biastype[j]=1;
            mS.actuator_gainprm[j*10]=KP[m]; mS.actuator_biasprm[j*10+1]=-KP[m]; mS.actuator_biasprm[j*10+2]=-KD[m];
            mS.actuator_forcerange[j*2]=-EFFR[m]; mS.actuator_forcerange[j*2+1]=EFFR[m];
            mS.dof_armature[6+j]=ARM[m]; } // forcelimited/ctrllimited stay as the MJCF declares (forcelimited=true via actuatorfrcrange; no ctrlrange)
          console.log('SONIC gains overridden (EFF=real from h2_ath.xml)'); S.gains=mS.actuator_forcerange[0]+','+mS.actuator_forcerange[1];
        } catch(e){ console.log('SONIC gain override failed', e); }
        setBtn('SONIC: POLICY');
        var spec=await (await fetch('https://huggingface.co/danielharkin21/ath-h2-policies/resolve/main/sonic/policy/spec.json',{cache:'no-store'})).json();
        if (!spec || !spec.input || spec.input.dim!==1670) throw new Error('sonic spec gate failed');
        var ob=await (await fetch('https://huggingface.co/danielharkin21/ath-h2-policies/resolve/main/sonic/policy/model_step_100000_g1.onnx')).arrayBuffer();
        sess=await ort.InferenceSession.create(ob,{executionProviders:['wasm']});
        var test=await sess.run({obs_dict:new ort.Tensor('float32',new Float32Array(1670),[1,1670])});
        var ta=test[sess.outputNames[0]].data, ok=ta.length===31;
        for (var i=0;i<31;i++) if (!isFinite(ta[i]) || Math.abs(ta[i])>20) ok=false;
        if (!ok) throw new Error('sonic sanity gate failed');
        S.u=dS; S.ready=true; S.loading=false; S.timestep=mS.opt.timestep;
        setBtn('SONIC DEMO'); console.log('SONIC ready: h2_ath + model_step_100000_g1 (1670->31), clip='+hdr.name+' '+F+'f');
        reset();
      } catch(e){ S.err=String(e); S.loading=false; setBtn('SONIC: ERR'); console.log('SONIC load failed', e); }
    }
    // UI
    var btn=document.createElement('button'); btn.id='sonicbtn'; btn.type='button'; btn.textContent='SONIC DEMO';
    var cap=document.createElement('div'); cap.id='soniccap';
    cap.textContent='SONIC motion-tracking checkpoint · Unitree-exact H2 body · skill: RODDICK SERVE (reference tracking) · toggle off for the trained ball policy (old body)';
    var st=document.createElement('style');
    st.textContent='#sonicbtn{position:fixed;right:18px;bottom:96px;z-index:60;background:rgba(12,14,18,.88);color:#e8e8e8;border:1px solid rgba(255,255,255,.22);border-radius:8px;padding:6px 12px;font-size:11px;letter-spacing:.12em;cursor:pointer;font-family:inherit}'+
      '#soniccap{display:none;position:fixed;left:50%;transform:translateX(-50%);bottom:64px;z-index:60;max-width:82vw;text-align:center;background:rgba(10,12,16,.85);color:#cfd4da;border:1px solid rgba(255,255,255,.14);border-radius:8px;padding:5px 10px;font-size:10px;letter-spacing:.06em;font-family:inherit}';
    document.head.appendChild(st); document.body.appendChild(btn); document.body.appendChild(cap);
    btn.onclick=function(){ if (S.active) deactivate(); else if (S.ready) activate(); else load(); };
    var __auto=setInterval(function(){ try { if (window.__MJ && !S.ready && !S.loading) load(); if (S.ready && !S.active){ clearInterval(__auto); activate(); } if (S.err) clearInterval(__auto); } catch(e){} }, 1000);
    (function loop(){ tick(); requestAnimationFrame(loop); })();
  } catch(e){ console.log('SONIC mode init failed', e); }
})();
