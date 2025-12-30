import { importShared, Kk } from './index.BxB45aCK1767105581793.js';
import { _sfc_main as _sfc_main$2 } from './index.EB9aFE0Q1767105581793.js';
import './skyBoxAmesh.vue_vue_type_script_setup_true_lang.Cd3eKmZW1767105581793.js';
import './skyBoxBmesh.vue_vue_type_script_setup_true_lang.DvKDLewX1767105581793.js';
import './skyBoxDmesh.vue_vue_type_script_setup_true_lang.DRUMhbde1767105581793.js';
import { Pane } from './tweakpane.Cvt5w0bb1767105581793.js';
import { _sfc_main$4 as _sfc_main$1 } from './customShaderMaterial.vue_vue_type_script_setup_true_lang.rDMIDGqx1767105581793.js';
import './index.vue_vue_type_script_setup_true_lang.D7-hpzmy1767105581793.js';

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,unref:_unref,normalizeProps:_normalizeProps,guardReactiveProps:_guardReactiveProps,createVNode:_createVNode,withCtx:_withCtx,Suspense:_Suspense,openBlock:_openBlock,createBlock:_createBlock,resolveComponent:_resolveComponent,mergeProps:_mergeProps} = await importShared('vue');

const {ACESFilmicToneMapping} = await importShared('three');

const {reactive,ref} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "causticsDemo",
  setup(__props) {
    const state = reactive({
      alpha: true,
      toneMapping: ACESFilmicToneMapping,
      windowSize: true,
      clearColor: 10066329
    });
    const controlsState = reactive({
      enableDamping: true,
      autoRotate: false
    });
    const torusMesh = ref(null);
    const onLoop = ({ elapsed }) => {
      if (torusMesh.value) {
        torusMesh.value.rotation.x = elapsed;
        torusMesh.value.rotation.y = elapsed;
      }
    };
    const causticsState = reactive({
      color: "#ffffff",
      ior: 1.1,
      backsideIOR: 1.1,
      far: 30,
      worldRadius: 0.3,
      intensity: 0.05,
      causticsOnly: false,
      lightSource: { x: 1, y: 1, z: 1 }
    });
    const paneControl = new Pane({ title: "参数" });
    paneControl.addBinding(causticsState, "color", {
      label: "颜色"
    });
    paneControl.addBinding(causticsState, "ior", {
      label: "折射系数",
      min: 0.6,
      max: 1.3,
      step: 0.01
    });
    paneControl.addBinding(causticsState, "backsideIOR", {
      label: "折射系数2",
      min: 0.6,
      max: 1.3,
      step: 0.01
    });
    paneControl.addBinding(causticsState, "far", {
      label: "可视距离",
      min: 0,
      max: 30,
      step: 1
    });
    paneControl.addBinding(causticsState, "worldRadius", {
      label: "材质大小",
      min: 1e-3,
      max: 0.5,
      step: 1e-3
    });
    paneControl.addBinding(causticsState, "intensity", {
      label: "强度",
      min: 0,
      max: 1,
      step: 0.01
    });
    paneControl.addBinding(causticsState, "causticsOnly", {
      label: "只显示投射"
    });
    paneControl.addBinding(causticsState, "lightSource", {
      label: "光源位置",
      x: { min: -1, max: 1 },
      y: { min: -1, max: 1 },
      z: { min: -1, max: 1 }
    });
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createBlock(_component_TresCanvas, _mergeProps(state, {
        "window-size": "",
        onLoop
      }), {
        default: _withCtx(() => [
          _cache[2] || (_cache[2] = _createElementVNode("TresPerspectiveCamera", {
            position: [-20, 20, 15],
            fov: 45,
            near: 1,
            far: 1e3
          }, null, -1)),
          _createVNode(_unref(Kk), _normalizeProps(_guardReactiveProps(controlsState)), null, 16),
          _cache[3] || (_cache[3] = _createElementVNode("TresDirectionalLight", {
            position: [10, 2, 4],
            intensity: 1
          }, null, -1)),
          _createVNode(_unref(_sfc_main$1), _normalizeProps(_guardReactiveProps(causticsState)), {
            default: _withCtx(() => [
              _cache[1] || (_cache[1] = _createElementVNode("TresMesh", {
                position: [8, 5.5, 8.5],
                "receive-shadow": "",
                "cast-shadow": "",
                name: "sphere"
              }, [
                _createElementVNode("TresSphereGeometry", { args: [3.5] }),
                _createElementVNode("TresMeshStandardMaterial", {
                  color: 16724991,
                  roughness: 0,
                  metalness: 1
                })
              ], -1)),
              _createElementVNode("TresMesh", {
                ref_key: "torusMesh",
                ref: torusMesh,
                position: [-8, 6, -8],
                name: "torus"
              }, [..._cache[0] || (_cache[0] = [
                _createElementVNode("TresTorusKnotGeometry", { args: [3, 1, 100, 32] }, null, -1),
                _createElementVNode("TresMeshPhysicalMaterial", {
                  color: "#33ffff",
                  transmission: 1,
                  roughness: 0,
                  thickness: 2
                }, null, -1)
              ])], 512)
            ]),
            _: 1
          }, 16),
          (_openBlock(), _createBlock(_Suspense, null, {
            default: _withCtx(() => [
              _createVNode(_unref(_sfc_main$2), { position: [0, -0.1, 0] })
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
//# sourceMappingURL=causticsDemo.D1e2DU1-1767105581793.js.map
