import { importShared, useWindowSize, useStorage, isClient, useEventListener, useMouse, useMousePressed, useKeyModifier, useRafFn, useFps } from './index.BxB45aCK1767105581793.js';

/**
 * name: @tresjs/leches
 * version: v0.14.1
 * (c) 2025
 * description: Tasty GUI for Vue controls 🍰
 * author: Alvaro Saburido <hola@alvarosaburido.dev> (https://github.com/alvarosabu/)
 */
const {toValue:se,isRef:G,toRefs:B,customRef:me,ref:d,watch:U,computed:V,defineComponent:$,reactive:N,h:ye,provide:he,isReactive:_e,openBlock:p,createElementBlock:h,normalizeClass:M,Fragment:O,createTextVNode:ue,toDisplayString:F,createVNode:X,createElementVNode:f,withDirectives:ce,vShow:ie,normalizeStyle:we,renderList:j,unref:D,createCommentVNode:H,createBlock:C,Transition:xe,withCtx:pe} = await importShared('vue');
const fe = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
function Ae(t, o = {}) {
  if (!G(t))
    return B(t);
  const l = Array.isArray(t.value) ? Array.from({ length: t.value.length }) : {};
  for (const n in t.value)
    l[n] = me(() => ({
      get() {
        return t.value[n];
      },
      set(e) {
        var c;
        if ((c = se(o.replaceRef)) != null ? c : true)
          if (Array.isArray(t.value)) {
            const u = [...t.value];
            u[n] = e, t.value = u;
          } else {
            const u = { ...t.value, [n]: e };
            Object.setPrototypeOf(u, Object.getPrototypeOf(t.value)), t.value = u;
          }
        else
          t.value[n] = e;
      }
    }));
  return l;
}
const q = se, Te = fe ? window : void 0;
function Ie(t, o = {}) {
  const {
    pointerTypes: l,
    preventDefault: n,
    stopPropagation: e,
    exact: c,
    onMove: r,
    onEnd: u,
    onStart: i,
    initialValue: _,
    axis: y = "both",
    draggingElement: s = Te,
    handle: a = t
  } = o, { width: m } = useWindowSize();
  let S = m.value;
  const v = d(
    q(_) ?? { x: 0, y: 0 }
  );
  U(m, () => {
    const g = m.value - S;
    v.value.x += g, S = m.value;
  });
  const A = d(), K = (g) => l ? l.includes(g.pointerType) : true, k = (g) => {
    q(n) && g.preventDefault(), q(e) && g.stopPropagation();
  }, T = (g) => {
    if (!K(g) || q(c) && g.target !== q(t))
      return;
    const b = q(t).getBoundingClientRect(), x = {
      x: g.clientX - b.left,
      y: g.clientY - b.top
    };
    (i == null ? void 0 : i(x, g)) !== false && (A.value = x, k(g));
  }, E = (g) => {
    if (!K(g) || !A.value)
      return;
    let { x: b, y: x } = v.value;
    (y === "x" || y === "both") && (b = g.clientX - A.value.x), (y === "y" || y === "both") && (x = g.clientY - A.value.y), v.value = {
      x: b,
      y: x
    }, r == null || r(v.value, g), k(g);
  }, P = (g) => {
    K(g) && A.value && (A.value = void 0, u == null || u(v.value, g), k(g));
  };
  if (fe) {
    const g = { capture: o.capture ?? true };
    useEventListener(a, "pointerdown", T, g), useEventListener(s, "pointermove", E, g), useEventListener(s, "pointerup", P, g);
  }
  return {
    ...Ae(v),
    position: v,
    isDragging: V(() => !!A.value),
    style: V(
      () => `left:${v.value.x}px;top:${v.value.y}px;`
    )
  };
}
const Ke = /* @__PURE__ */ $({
  name: "UseDraggable",
  props: [
    "storageKey",
    "storageType",
    "initialValue",
    "exact",
    "preventDefault",
    "stopPropagation",
    "pointerTypes",
    "as",
    "handle",
    "axis",
    "onStart",
    "onMove",
    "onEnd"
  ],
  setup(t, { slots: o }) {
    const l = d(), n = V(() => t.handle ?? l.value), e = t.storageKey && useStorage(
      t.storageKey,
      q(t.initialValue) || { x: 0, y: 0 },
      isClient ? t.storageType === "session" ? sessionStorage : localStorage : void 0
    ), c = e || t.initialValue || { x: 0, y: 0 }, u = N(Ie(l, {
      ...t,
      handle: n,
      initialValue: c,
      onEnd: (i, _) => {
        var y;
        (y = t.onEnd) == null || y.call(t, i, _), e && (e.value.x = i.x, e.value.y = i.y);
      }
    }));
    return () => {
      if (o.default)
        return ye(t.as || "div", { ref: l, style: `touch-action:none;${u.style}` }, o.default(u));
    };
  }
}), De = Symbol("CONTROLS_CONTEXT_KEY"), ve = "default", L = N({});
function Fe(t = ve) {
  return he(De, L), L[t];
}
const Q = (t) => {
  const o = /^#(?:[A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$|^0x(?:[A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
  return typeof t == "boolean" ? "boolean" : typeof t == "number" ? "number" : typeof t == "string" && o.test(t) ? "color" : typeof t == "string" ? "string" : t.isVector3 || t.isVector2 || t.isEuler || Array.isArray(t.value) || t.value.isVector3 || t.value.isVector2 || t.value.isEuler || Array.isArray(t.value.value) ? "vector" : t.min !== void 0 || t.max !== void 0 || t.step !== void 0 ? "range" : t.options && Array.isArray(t.options) ? "select" : "unknown";
}, Y = (t, o, l, n) => {
  const e = {
    key: d(t),
    label: d(t),
    name: d(t),
    type: d(l),
    value: d(o),
    visible: d(true),
    icon: d(),
    uniqueKey: d(t),
    [t]: d(o)
  };
  return n && (e.folder = d(n)), e;
}, It = (t, o, l) => {
  const n = {}, e = typeof t == "string" ? t : null, c = e ? o : t, u = ve;
  if (L[u] || (L[u] = N({})), t === "fpsgraph") {
    const s = Y("fpsgraph", null, "fpsgraph", null);
    return L[u].fpsgraph = s, n.fpsgraph = s, B(N(n));
  }
  const i = L[u], _ = _e(c), y = _ ? B(c) : {};
  for (const s in c) {
    let a = c[s], m = s;
    if (_ && y[s] && (a = y[s]), e && (m = `${e}${s.charAt(0).toUpperCase() + s.slice(1)}`), typeof a == "object" && !G(a) && !Array.isArray(a) && a.value !== void 0) {
      const v = a, A = G(v.value) ? v.value : d(v.value), K = v.type || Q(v), k = Y(s, A, K, e);
      K === "select" && (k.options = d(v.options.map((T) => typeof T == "object" && T.text && T.value ? T : {
        text: T,
        value: T
      }))), K === "range" && (k.min = d(v.min || 0), k.max = d(v.max || 1), k.step = d(v.step || 0.1)), k.label.value = v.label || s, k.icon.value = v.icon, k.visible.value = v.visible !== void 0 ? v.visible : true, k.uniqueKey.value = m, i[m] = k, n[m] = k;
      continue;
    }
    if (G(a)) {
      const v = Y(s, a, a.value.type || Q(a.value), e);
      i[m] = v, n[m] = v;
      continue;
    } else if (typeof a == "object" && !Array.isArray(a)) {
      const v = B(a);
      v[s] && (a = v[s]);
    }
    const S = Y(s, a, a.type || Q(a), e);
    i[m] = S, n[m] = S, S.uniqueKey.value = m;
  }
  return Object.keys(n).length > 1 ? B(N(n)) : Object.values(n)[0];
}, Ve = ["for", "title"], R = /* @__PURE__ */ $({
  __name: "ControlLabel",
  props: {
    label: {},
    control: {}
  },
  setup(t) {
    return (o, l) => (p(), h("label", {
      for: o.control.uniqueKey,
      title: o.label,
      class: "tl-text-gray-500 tl-w-1/3 tl-truncate"
    }, [
      o.control.icon ? (p(), h("i", {
        key: 0,
        class: M(o.control.icon)
      }, null, 2)) : (p(), h(O, { key: 1 }, [
        ue(F(o.label), 1)
      ], 64))
    ], 8, Ve));
  }
}), Ee = { class: "tl-flex tl-px-4 tl-justify-between tl-gap-4 tl-items-center tl-mb-2" }, ze = ["id", "value", "min", "max", "step"], qe = /* @__PURE__ */ $({
  __name: "NumberControl",
  props: {
    label: {},
    control: {}
  },
  emits: ["change"],
  setup(t, { emit: o }) {
    const l = t, n = o;
    function e(s) {
      const { target: a } = s;
      n("change", a.valueAsNumber);
    }
    const c = useMouse(), r = d(0), u = d(false), i = (s) => {
      r.value = s.clientX, u.value = true;
    }, _ = () => {
      u.value = false;
    }, y = (s) => Math.floor(Math.abs(s) / 10);
    return U(c.x, (s) => {
      if (u.value) {
        const a = s - r.value, m = y(a);
        a > 0 ? n("change", l.control.value + 1 + m) : a < 0 && n("change", l.control.value - 1 + m), l.control.min !== void 0 && l.control.value < l.control.min && n("change", l.control.min), l.control.max !== void 0 && l.control.value > l.control.max && n("change", l.control.max), r.value = s;
      }
    }), (s, a) => (p(), h("div", Ee, [
      X(R, {
        label: s.label,
        control: s.control
      }, null, 8, ["label", "control"]),
      f("input", {
        id: s.control.uniqueKey,
        value: s.control.value,
        class: M(["tl-p-2 tl-w-1/3 tl-rounded tl-text-right tl-text-xs tl-text-gray-400 tl-bg-gray-100 tl-focus:border-gray-200 tl-outline-none tl-border-none tl-font-sans", { "tl-cursor-ew-resize": u.value }]),
        type: "number",
        min: s.control.min,
        max: s.control.max,
        step: s.control.step,
        onInput: e,
        onMousedown: i,
        onMouseup: _
      }, null, 42, ze)
    ]));
  }
}), Ue = { class: "tl-flex tl-px-4 tl-justify-between tl-gap-4 tl-items-center tl-mb-2 tl-min-h-32px" }, Oe = ["id", "value", "aria-label"], Xe = /* @__PURE__ */ $({
  __name: "TextControl",
  props: {
    label: {},
    control: {}
  },
  emits: ["change"],
  setup(t, { emit: o }) {
    const l = o;
    function n(e) {
      const { target: c } = e;
      l("change", c.value);
    }
    return (e, c) => (p(), h("div", Ue, [
      X(R, {
        label: e.label,
        control: e.control
      }, null, 8, ["label", "control"]),
      f("input", {
        id: e.control.uniqueKey,
        value: e.control.value,
        type: "text",
        tabindex: "0",
        class: "tl-p-2 tl-w-2/3 tl-rounded tl-text-right tl-text-xs tl-text-gray-400 tl-bg-gray-100 focus:tl-border-gray-200 tl-border-none tl-font-sans",
        "aria-label": e.label,
        placeholder: "Enter value here...",
        onChange: n
      }, null, 40, Oe)
    ]));
  }
}), Be = { class: "tl-flex tl-px-4 tl-justify-start tl-gap-2 tl-items-center tl-mb-2 tl-min-h-32px" }, Le = { class: "tl-text-gray-500 tl-w-1/3" }, Pe = ["id", "checked"], We = ["for"], Ne = ["aria-checked"], je = { class: "i-ic:baseline-check tl-text-light" }, Re = /* @__PURE__ */ $({
  __name: "BooleanControl",
  props: {
    label: {},
    control: {}
  },
  emits: ["change"],
  setup(t, { emit: o }) {
    const l = t, n = o;
    function e(r) {
      const { target: u } = r;
      n("change", u.checked);
    }
    function c(r) {
      (r.code === "Space" || r.code === "Enter") && (r.preventDefault(), n("change", !l.control.value));
    }
    return (r, u) => (p(), h("div", Be, [
      f("label", Le, F(r.label), 1),
      f("input", {
        id: r.control.uniqueKey,
        checked: r.control.value,
        class: "tl-hidden",
        type: "checkbox",
        onInput: e
      }, null, 40, Pe),
      f("label", {
        for: r.control.uniqueKey,
        class: "tl-inline-flex tl-items-center tl-cursor-pointer"
      }, [
        f("span", {
          tabindex: "0",
          role: "checkbox",
          "aria-checked": r.control.value.toString(),
          class: M([{ "tl-bg-dark-500": r.control.value, "tl-bg-gray-200": !r.control.value }, "tl-w-4 tl-h-4 tl-flex tl-justify-center tl-items-center tl-rounded tl-border tl-border-gray-300 tl-mr-2 tl-transition-colors tl-duration-200"]),
          onKeydown: c
        }, [
          ce(f("i", je, null, 512), [
            [ie, r.control.value]
          ])
        ], 42, Ne)
      ], 8, We)
    ]));
  }
}), Ye = { class: "tl-px-4 tl-relative tl-flex tl-justify-between tl-gap-4 tl-items-center tl-mb-2" }, Ge = ["value", "min", "max", "step"], He = ["value", "min", "max", "step"], Je = /* @__PURE__ */ $({
  __name: "SliderControl",
  props: {
    label: {},
    control: {}
  },
  emits: ["change"],
  setup(t, { emit: o }) {
    const l = t, n = o;
    function e(a) {
      const { target: m } = a;
      n("change", m.valueAsNumber);
    }
    const c = V(() => ({
      backgroundImage: `linear-gradient(to right, #333 0% ${100 * (l.control.value - (l.control.min || 0)) / ((l.control.max || 100) - (l.control.min || 0))}%, #e2e2e2 0%)`
    })), r = useMouse(), u = d(0), i = d(false), _ = (a) => {
      u.value = a.clientX, i.value = true;
    }, y = () => {
      i.value = false;
    }, s = (a) => Math.floor(Math.abs(a) / 10);
    return U(r.x, (a) => {
      if (i.value) {
        const m = a - u.value, S = s(m);
        m > 0 ? n("change", l.control.value + 1 + S) : m < 0 && n("change", l.control.value - 1 + S), l.control.min !== void 0 && l.control.value < l.control.min && n("change", l.control.min), l.control.max !== void 0 && l.control.value > l.control.max && n("change", l.control.max), u.value = a;
      }
    }), (a, m) => (p(), h("div", Ye, [
      X(R, {
        label: a.label,
        control: a.control
      }, null, 8, ["label", "control"]),
      f("input", {
        value: a.control.value,
        class: "tl-w-1/2 tl-h-0.75 tl-bg-dark-200 tl-rounded-full tl-appearance-none",
        style: we(c.value),
        type: "range",
        min: a.control.min,
        max: a.control.max,
        step: a.control.step,
        onInput: e
      }, null, 44, Ge),
      f("input", {
        value: a.control.value,
        class: M(["tl-p-2 tl-w-1/4 tl-rounded tl-text-right tl-text-xs tl-text-gray-400 tl-bg-gray-100 tl-focus:border-gray-200 tl-outline-none tl-border-none tl-font-sans", { "tl-cursor-ew-resize": i.value }]),
        type: "number",
        min: a.control.min,
        max: a.control.max,
        step: a.control.step,
        onInput: e,
        onMousedown: _,
        onMouseup: y
      }, null, 42, He)
    ]));
  }
}), be = (t, o) => {
  const l = t.__vccOpts || t;
  for (const [n, e] of o)
    l[n] = e;
  return l;
}, Qe = /* @__PURE__ */ be(Je, [["__scopeId", "data-v-207d19a7"]]), Ze = { class: "tl-flex tl-px-4 tl-justify-between tl-gap-4 tl-items-center tl-mb-2" }, et = { class: "tl-text-gray-500 tl-w-1/3" }, tt = ["id", "value", "aria-label"], lt = ["id", "aria-label", "value"], nt = /* @__PURE__ */ $({
  __name: "ColorControl",
  props: {
    label: {},
    control: {}
  },
  emits: ["change"],
  setup(t, { emit: o }) {
    const l = o;
    function n(e) {
      const { target: c } = e;
      l("change", c.value);
    }
    return (e, c) => (p(), h("div", Ze, [
      f("label", et, F(e.label), 1),
      f("input", {
        id: e.control.uniqueKey,
        tabindex: "0",
        value: e.control.value,
        "aria-label": e.label,
        class: M(["focus:tl-outline-none focus:tl-ring-2 focus:tl-ring-blue-600", { "important-tl-outline-gray-200": e.control.value === "#ffffff" }]),
        type: "color",
        onInput: n
      }, null, 42, tt),
      f("input", {
        id: e.control.uniqueKey,
        tabindex: "0",
        "aria-label": e.label,
        value: e.control.value,
        class: "tl-p-2 tl-w-2/3 tl-rounded tl-text-right tl-text-xs tl-text-gray-400 tl-bg-gray-100 tl-border-none tl-font-sans",
        type: "text",
        onInput: n
      }, null, 40, lt)
    ]));
  }
});
function ee(t) {
  return t && typeof t.x == "number" && typeof t.y == "number";
}
function te(t) {
  return t && typeof t.x == "number" && typeof t.y == "number" && typeof t.z == "number";
}
function ot(t) {
  if (typeof t == "number")
    return [t, t, t];
  if (te(t)) {
    const { x: o, y: l, z: n } = t;
    return [o, l, n];
  }
  if (ee(t)) {
    const { x: o, y: l } = t;
    return [o, l];
  }
  return t;
}
const at = { class: "tl-relative tl-w-2/3 tl-flex tl-justify-between tl-gap-0.5" }, rt = {
  key: 0,
  class: "tl-font-bold tl-px-1 tl-py-1 tl-text-0.65rem tl-text-gray-300"
}, st = ["id", "step", "value", "onInput", "onMousedown", "onMouseup", "onFocus"], ut = /* @__PURE__ */ $({
  __name: "VectorControl",
  props: {
    label: {},
    control: {}
  },
  emits: ["change"],
  setup(t, { emit: o }) {
    const l = t, n = o, e = useMouse(), { pressed: c } = useMousePressed(), r = d(0), u = d(false), i = d(0), _ = d(null), y = d(1), s = useKeyModifier("Shift"), a = useKeyModifier("Alt");
    U(s, (b) => {
      y.value = b ? 10 : 1;
    }), U(a, (b) => {
      y.value = b ? 0.1 : 1;
    });
    const m = (b) => {
      _.value = b;
    }, S = () => {
      _.value = null;
    }, v = (b, x) => {
      i.value = x, r.value = b.clientX, u.value = true;
    }, A = (b, x) => {
      i.value = x, u.value = false;
    }, K = () => {
      u.value = false;
    };
    U(c, (b) => {
      b || (u.value = false);
    });
    const k = (b) => Math.floor(Math.abs(b) / 10), T = V(() => ot(l.control.value)), E = d(["x", "y", "z"]), P = V(() => ee(l.control.value) || te(l.control.value));
    function g(b, x) {
      const { value: z } = l.control, { target: w } = b;
      i.value = x, z[P.value ? E.value[i.value] : i.value] = Number.parseFloat(w.value), n("change", z);
    }
    return U(e.x, (b) => {
      if (u.value) {
        const x = b - r.value, z = k(x), { value: w } = l.control, I = P.value ? E.value[i.value] : i.value;
        x > 0 ? w[I] += y.value + z : x < 0 && (w[I] -= y.value + z), l.control.min !== void 0 && w < l.control.min && (w[I] = l.control.min), l.control.max !== void 0 && w > l.control.max && (w[I] = l.control.max), n("change", w), r.value = b;
      }
    }), (b, x) => (p(), h("div", {
      class: "tl-flex tl-px-4 tl-justify-between tl-gap-1 tl-items-center tl-mb-2",
      onMouseup: x[0] || (x[0] = (z) => K())
    }, [
      X(R, {
        label: b.label,
        control: b.control
      }, null, 8, ["label", "control"]),
      f("div", at, [
        (p(true), h(O, null, j(T.value, (z, w) => (p(), h("div", {
          key: b.label + w,
          class: M(["tl-flex tl-items-center tl-bg-gray-100 tl-rounded", {
            "tl-w-2/5": _.value === w,
            "tl-w-1/3": D(te)(b.control.value),
            "tl-w-1/2": D(ee)(b.control.value)
          }])
        }, [
          E.value[w] && P.value ? (p(), h("span", rt, F(E.value[w]), 1)) : H("", true),
          f("input", {
            id: `${b.control.uniqueKey}-${E.value[w]}`,
            type: "number",
            step: y.value,
            class: M(["tl-w-full tl-px-0 tl-p-1 tl-text-right tl-text-0.65rem tl-text-gray-400 tl-bg-transparent focus:tl-border-gray-200 tl-outline-none tl-border-none tl-font-sans tl-appearence-none", { "tl-cursor-ew-resize": u.value }]),
            value: T.value[w].toFixed(2),
            onInput: (I) => g(I, w),
            onMousedown: (I) => v(I, w),
            onMouseup: (I) => A(I, w),
            onFocus: (I) => m(w),
            onBlur: S
          }, null, 42, st)
        ], 2))), 128))
      ])
    ], 32));
  }
}), ct = { class: "tl-flex tl-px-4 tl-justify-between tl-gap-4 tl-items-center tl-mb-2" }, it = { class: "tl-text-gray-500 tl-w-1/3" }, pt = { class: "tl-relative tl-w-2/3 tl-p-1 tl-rounded tl-text-right tl-text-xs tl-text-gray-400 tl-bg-gray-100 tl-focus:border-gray-200 tl-outline-none tl-border-none tl-font-sans" }, dt = { class: "tl-absolute tl-bottom-0.5 tl-right-0.5 tl-font-sans tl-text-xs" }, ft = ["points"], oe = 160, Z = 40, W = 2, ae = 100, re = 20, vt = /* @__PURE__ */ $({
  __name: "FPSGraph",
  props: {
    label: {},
    control: {}
  },
  setup(t) {
    const o = useFps({ every: ae }), l = d(""), n = d([]), e = d(oe / W);
    let c = performance.now();
    return useRafFn(({ timestamp: r }) => {
      r - c >= ae && (c = r, n.value.push(o.value), n.value.length > e.value && n.value.shift(), l.value = n.value.map(
        (u, i) => `${i * W},${Z + re - W / 2 - u * (Z + re - W) / 120}`
      ).join(" "));
    }), (r, u) => (p(), h("div", ct, [
      f("label", it, F(r.label), 1),
      f("div", pt, [
        f("div", dt, F(Math.round(D(o))) + " FPS ", 1),
        (p(), h("svg", {
          width: oe,
          height: Z,
          xmlns: "http://www.w3.org/2000/svg",
          class: "tl-bg-gray-100"
        }, [
          f("polyline", {
            points: l.value,
            fill: "none",
            stroke: "lightgray",
            "stroke-width": W,
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, 8, ft)
        ]))
      ])
    ]));
  }
}), bt = { class: "tl-flex tl-px-4 tl-justify-between tl-gap-4 tl-items-center tl-mb-2 tl-min-h-32px" }, gt = ["id", "value"], mt = ["value"], yt = /* @__PURE__ */ $({
  __name: "SelectControl",
  props: {
    label: {},
    control: {}
  },
  emits: ["change"],
  setup(t, { emit: o }) {
    const l = o;
    function n(e) {
      l("change", e.target.value);
    }
    return (e, c) => (p(), h("div", bt, [
      X(R, {
        label: e.label,
        control: e.control
      }, null, 8, ["label", "control"]),
      f("select", {
        id: e.control.uniqueKey,
        value: e.control.value,
        class: "tl-p-2 tl-w-2/3 tl-rounded tl-text-left tl-text-xs tl-text-gray-400 tl-bg-gray-100 focus:tl-border-gray-200 tl-outline-none tl-border-none tl-font-sans",
        onChange: n
      }, [
        (p(true), h(O, null, j(e.control.options, (r) => (p(), h("option", {
          key: r.value,
          value: r.value
        }, F(r.text), 9, mt))), 128))
      ], 40, gt)
    ]));
  }
}), ht = /* @__PURE__ */ $({
  __name: "ButtonControl",
  props: {
    label: {},
    control: {}
  },
  setup(t) {
    const o = t, l = V(() => {
      const n = "leches-btn", e = `leches-btn-${o.control.value.variant || "primary"}`, c = `leches-btn-${o.control.value.size || "sm"}`;
      return [n, e, c];
    });
    return (n, e) => (p(), h("button", {
      class: M(l.value),
      onClick: e[0] || (e[0] = //@ts-ignore
      (...c) => n.control.value.onClick && n.control.value.onClick(...c))
    }, [
      f("i", {
        class: M([n.control.value.icon, n.control.value.label ? "mr-1" : ""])
      }, null, 2),
      ue(" " + F(n.control.value.label), 1)
    ], 2));
  }
}), _t = /* @__PURE__ */ be(ht, [["__scopeId", "data-v-926dfadc"]]), wt = { key: 0 }, ge = /* @__PURE__ */ $({
  __name: "ControlInput",
  props: {
    control: {}
  },
  emits: ["change"],
  setup(t, { emit: o }) {
    const l = o;
    function n(e) {
      l("change", e);
    }
    return (e, c) => e.control.visible ? (p(), h("div", wt, [
      e.control.type === "color" ? (p(), C(nt, {
        key: 0,
        label: e.control.label,
        control: e.control,
        onChange: n
      }, null, 8, ["label", "control"])) : e.control.type === "select" ? (p(), C(yt, {
        key: 1,
        label: e.control.label,
        control: e.control,
        onChange: n
      }, null, 8, ["label", "control"])) : e.control.type === "vector" ? (p(), C(ut, {
        key: 2,
        label: e.control.label,
        control: e.control,
        onChange: n
      }, null, 8, ["label", "control"])) : e.control.type === "boolean" ? (p(), C(Re, {
        key: 3,
        label: e.control.label,
        control: e.control,
        onChange: n
      }, null, 8, ["label", "control"])) : e.control.type === "fpsgraph" ? (p(), C(vt, {
        key: 4,
        label: e.control.label,
        control: e.control
      }, null, 8, ["label", "control"])) : e.control.type === "number" ? (p(), C(qe, {
        key: 5,
        label: e.control.label,
        control: e.control,
        onChange: n
      }, null, 8, ["label", "control"])) : e.control.type === "range" ? (p(), C(Qe, {
        key: 6,
        label: e.control.label,
        control: e.control,
        onChange: n
      }, null, 8, ["label", "control"])) : e.control.type === "button" ? (p(), h("div", {
        key: 7,
        class: M(["tl-p-2", e.control.value.size === "tl-block" ? "tl-flex" : "tl-inline-flex"])
      }, [
        X(_t, {
          label: e.control.label,
          control: e.control
        }, null, 8, ["label", "control"])
      ], 2)) : (p(), C(Xe, {
        key: 8,
        label: e.control.label,
        control: e.control,
        onChange: n
      }, null, 8, ["label", "control"]))
    ])) : H("", true);
  }
}), xt = { class: "tl-mb-4" }, kt = ["aria-expanded", "data-folder"], $t = {
  class: "tl-bg-white tl-rounded-b tl-pt-4",
  role: "menu"
}, Ct = /* @__PURE__ */ $({
  __name: "Folder",
  props: {
    controls: {},
    label: {}
  },
  setup(t) {
    function o(e, c) {
      c.value = e;
    }
    const l = d(false), n = () => {
      l.value = !l.value;
    };
    return (e, c) => (p(), h("div", xt, [
      f("button", {
        class: "tl-flex tl-items-center tl-justify-between tl-w-full tl-py-2 tl-px-4 tl-bg-gray-100 tl-border-none tl-text-gray-400 tl-font-bold tl-text-xs tl-font-sans tl-cursor-pointer",
        "aria-expanded": l.value,
        "aria-haspopup": "true",
        role: "button",
        "data-folder": e.label,
        tabindex: "0",
        onClick: n
      }, [
        f("span", null, F(e.label), 1),
        f("i", {
          class: M(l.value ? "i-ic:baseline-keyboard-arrow-up" : "i-ic:baseline-keyboard-arrow-down")
        }, null, 2)
      ], 8, kt),
      X(xe, {
        name: "slide",
        "enter-active-class": "tl-animate-fade-in tl-animate-duration-200 tl-animate-ease-in-out",
        "leave-active-class": "tl-animate-fade-out tl-animate-duration-200 tl-animate-ease-in-out"
      }, {
        default: pe(() => [
          ce(f("div", $t, [
            (p(true), h(O, null, j(e.controls, (r) => (p(), C(ge, {
              key: r.label,
              control: r,
              role: "menuitem",
              onChange: (u) => o(u, r)
            }, null, 8, ["control", "onChange"]))), 128))
          ], 512), [
            [ie, l.value]
          ])
        ]),
        _: 1
      })
    ]));
  }
}), Mt = {
  tabindex: "0",
  class: "tl-bg-white tl-shadow-xl tl-rounded tl-border-4 tl-border-solid tl-border-black"
}, St = 280, Kt = /* @__PURE__ */ $({
  __name: "TresLeches",
  props: {
    uuid: {}
  },
  setup(t) {
    const o = t, { uuid: l } = B(o), { width: n } = useWindowSize(), e = d(null), c = Fe(l == null ? void 0 : l.value);
    function r(i, _) {
      c[D(i)].value = _, c[D(i)][D(i)] = _;
    }
    const u = V(() => {
      const i = {};
      for (const _ in c) {
        const y = c[_], s = y.folder || "default";
        i[s] || (i[s] = []), i[s].push(y);
      }
      return i;
    });
    return (i, _) => (p(), C(D(Ke), {
      id: D(l),
      "initial-value": { x: D(n) - St - 40, y: 10 },
      class: M(["tl-absolute tl-select-none tl-z-24 tl-w-280px tl-font-sans tl-text-xs", i.$attrs.class]),
      handle: e.value
    }, {
      default: pe(() => [
        f("div", Mt, [
          f("header", {
            ref_key: "handle",
            ref: e,
            class: "tl-relative tl-cursor-grabbing tl-p-4 tl-flex tl-justify-between tl-text-gray-200 tl-relative"
          }, _[0] || (_[0] = [
            f("i", { class: "tl-h-4 tl-w-4 tl-p-1.5 tl-flex tl-items-center tl-line-height-0 tl-rounded-full tl-bg-gray-100 tl-text-xs" }, "🍰", -1),
            f("div", null, [
              f("i", { class: "i-ic-baseline-drag-indicator" }),
              f("i", { class: "i-ic-baseline-drag-indicator" }),
              f("i", { class: "i-ic-baseline-drag-indicator" })
            ], -1),
            f("div", null, null, -1)
          ]), 512),
          (p(true), h(O, null, j(u.value, (y, s) => (p(), h(O, { key: s }, [
            s !== "default" ? (p(), C(Ct, {
              key: 0,
              label: s,
              controls: y
            }, null, 8, ["label", "controls"])) : H("", true),
            s === "default" ? (p(true), h(O, { key: 1 }, j(y, (a) => (p(), C(ge, {
              key: a.label,
              control: a,
              onChange: (m) => r(a.key, m)
            }, null, 8, ["control", "onChange"]))), 128)) : H("", true)
          ], 64))), 128))
        ])
      ]),
      _: 1
    }, 8, ["id", "initial-value", "class", "handle"]));
  }
});

export { It, Kt };
//# sourceMappingURL=tresleches.B9l4RiSE1767105581793.js.map
