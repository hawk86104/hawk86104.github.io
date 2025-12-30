import { importShared, ol, Kk } from './index.BxB45aCK1767105581793.js';
import { _sfc_main$7 as _sfc_main$1, _sfc_main as _sfc_main$2, _sfc_main$1 as _sfc_main$3 } from './customShaderMaterial.vue_vue_type_script_setup_true_lang.rDMIDGqx1767105581793.js';
import './index.vue_vue_type_script_setup_true_lang.D7-hpzmy1767105581793.js';
import { Pane } from './tweakpane.Cvt5w0bb1767105581793.js';

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,unref:_unref,normalizeProps:_normalizeProps,guardReactiveProps:_guardReactiveProps,createVNode:_createVNode,withCtx:_withCtx,Suspense:_Suspense,openBlock:_openBlock,createBlock:_createBlock,mergeProps:_mergeProps} = await importShared('vue');

const _hoisted_1 = {
  position: [0, 0.9, 0],
  name: "torus"
};
const {ACESFilmicToneMapping} = await importShared('three');

const {reactive} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "clearcoat",
  setup(__props) {
    const state = reactive({
      alpha: true,
      toneMapping: ACESFilmicToneMapping,
      windowSize: true,
      clearColor: "#000000"
    });
    const controlsState = reactive({
      enableDamping: true
    });
    const clearcoatState = reactive({
      color: "#ff00fc",
      metalness: 1,
      roughness: 1,
      clearcoat: 1,
      clearcoatRoughness: 0
    });
    const paneControl = new Pane();
    paneControl.addBinding(clearcoatState, "color", {
      label: "颜色"
    });
    paneControl.addBinding(clearcoatState, "metalness", {
      label: "metalness",
      min: 0,
      max: 1,
      step: 0.01
    });
    paneControl.addBinding(clearcoatState, "roughness", {
      label: "roughness",
      min: 0,
      max: 1,
      step: 0.01
    });
    paneControl.addBinding(clearcoatState, "clearcoat", {
      label: "clearcoat",
      min: 0.01,
      max: 1,
      step: 0.01
    });
    paneControl.addBinding(clearcoatState, "clearcoatRoughness", {
      label: "clearcoatRoughness",
      min: 0,
      max: 1,
      step: 0.01
    });
    return (_ctx, _cache) => {
      return _openBlock(), _createBlock(_unref(ol), _mergeProps(state, { "window-size": "" }), {
        default: _withCtx(() => [
          _cache[1] || (_cache[1] = _createElementVNode("TresPerspectiveCamera", {
            position: [6, 6, 6],
            fov: 45,
            near: 1,
            far: 1e3
          }, null, -1)),
          _createVNode(_unref(Kk), _normalizeProps(_guardReactiveProps(controlsState)), null, 16),
          _cache[2] || (_cache[2] = _createElementVNode("TresAmbientLight", { intensity: 0.5 }, null, -1)),
          _cache[3] || (_cache[3] = _createElementVNode("TresDirectionalLight", {
            position: [7, 10, -5.5],
            intensity: 5
          }, null, -1)),
          _createElementVNode("TresMesh", _hoisted_1, [
            _cache[0] || (_cache[0] = _createElementVNode("TresTorusKnotGeometry", { args: [1, 0.35, 100, 32] }, null, -1)),
            _createVNode(_unref(_sfc_main$1), _normalizeProps(_guardReactiveProps(clearcoatState)), null, 16)
          ]),
          _cache[4] || (_cache[4] = _createElementVNode("TresMesh", {
            position: [-2.5, 0.5, 2.5],
            "receive-shadow": "",
            "cast-shadow": "",
            name: "cube"
          }, [
            _createElementVNode("TresCylinderGeometry", { args: [1.5, 1.5, 2] }),
            _createElementVNode("TresMeshStandardMaterial", {
              color: 16737826,
              roughness: 0,
              metalness: 0
            })
          ], -1)),
          (_openBlock(), _createBlock(_Suspense, null, {
            default: _withCtx(() => [
              _createVNode(_unref(_sfc_main$2), {
                resolution: 256,
                blur: 1,
                background: ""
              }, {
                default: _withCtx(() => [
                  _createVNode(_unref(_sfc_main$3), {
                    intensity: 2,
                    form: "circle",
                    "rotation-x": Math.PI / 2,
                    position: [2 * 4 - 3 * 4 / 2, 4, 0],
                    scale: [1, 5, 0]
                  }, null, 8, ["rotation-x"]),
                  _createVNode(_unref(_sfc_main$3), {
                    intensity: 2,
                    form: "circle",
                    "rotation-x": Math.PI / 2,
                    position: [-12 / 2, 4, 0],
                    scale: [1, 5, 0]
                  }, null, 8, ["rotation-x"]),
                  _createVNode(_unref(_sfc_main$3), {
                    intensity: 1,
                    "rotation-y": -Math.PI / 2,
                    position: [-1, 0, 0],
                    scale: [10, 0.2, 1]
                  }, null, 8, ["rotation-y"]),
                  _createVNode(_unref(_sfc_main$3), {
                    intensity: 1,
                    "rotation-y": -Math.PI / 2,
                    position: [1, 0, 0],
                    scale: [10, 0.2, 1]
                  }, null, 8, ["rotation-y"])
                ]),
                _: 1
              })
            ]),
            _: 1
          }))
        ]),
        _: 1
      }, 16);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=clearcoat.DooYCL601767105581793.js.map
