import { importShared, Fs } from './index.BxB45aCK1767105581793.js';
import { _sfc_main as _sfc_main$2 } from './pagesShow.vue_vue_type_script_setup_true_lang.DfPQrWBQ1767105581793.js';
import { Pane } from './tweakpane.Cvt5w0bb1767105581793.js';

const {defineComponent:_defineComponent$1} = await importShared('vue');
const {Color,FogExp2,Fog} = await importShared('three');

const {watch} = await importShared('vue');

const _sfc_main$1 = /* @__PURE__ */ _defineComponent$1({
  __name: "index",
  props: {
    type: { default: "Fog" },
    color: { default: "#000" },
    density: { default: 0.01 },
    near: { default: 100 },
    far: { default: 4e3 }
  },
  setup(__props) {
    const props = __props;
    const { scene } = Fs();
    watch(
      () => props.type,
      (nv) => {
        if (nv === "FogExp2") {
          scene.value.fog = new FogExp2(props.color, props.density);
        } else {
          scene.value.fog = new Fog(props.color, props.near, props.far);
        }
      },
      { immediate: true }
    );
    watch(
      () => [props.color, props.near, props.far, props.density],
      ([color, near, far, density]) => {
        scene.value.fog.color = new Color(color);
        if (props.type === "Fog") {
          scene.value.fog.near = near;
          scene.value.fog.far = far;
        } else {
          scene.value.fog.density = density;
        }
      }
    );
    return (_ctx, _cache) => {
      return null;
    };
  }
});

const {defineComponent:_defineComponent} = await importShared('vue');

const {normalizeProps:_normalizeProps,guardReactiveProps:_guardReactiveProps,createVNode:_createVNode,withCtx:_withCtx,openBlock:_openBlock,createBlock:_createBlock} = await importShared('vue');
const {reactive} = await importShared('vue');

const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "fog",
  setup(__props) {
    const fogState = reactive({
      type: "Fog",
      color: "#000",
      density: 1e-3,
      near: 100,
      far: 4e3
    });
    const pane = new Pane();
    pane.addBlade({
      view: "list",
      label: "类型",
      options: [
        { text: "普通雾", value: "Fog" },
        { text: "雾Exp2", value: "FogExp2" }
      ],
      value: "Fog"
    }).on("change", (ev) => {
      fogState.type = ev.value;
      pane.children[2].hidden = ev.value === "Fog";
      pane.children[3].hidden = ev.value === "FogExp2";
      pane.children[4].hidden = ev.value === "FogExp2";
    });
    pane.addBinding(fogState, "color", { label: "颜色" });
    pane.addBinding(fogState, "density", {
      label: "密度",
      min: 25e-5,
      max: 1e-3,
      step: 1e-4
    });
    pane.children[2].hidden = true;
    pane.addBinding(fogState, "near", {
      label: "最小距离",
      min: 100,
      max: 1e3,
      step: 10
    });
    pane.addBinding(fogState, "far", {
      label: "最大距离",
      min: 1e3,
      max: 1e4,
      step: 100
    });
    return (_ctx, _cache) => {
      return _openBlock(), _createBlock(_sfc_main$2, { ref: "pagesShowRef" }, {
        ability: _withCtx(() => [
          _createVNode(_sfc_main$1, _normalizeProps(_guardReactiveProps(fogState)), null, 16)
        ]),
        _: 1
      }, 512);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=fog.Dg5-Qzom1767105581793.js.map
