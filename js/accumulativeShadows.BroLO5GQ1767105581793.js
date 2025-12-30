import { importShared, ol, Kk } from './index.BxB45aCK1767105581793.js';
import { _sfc_main as _sfc_main$2 } from './customShaderMaterial.vue_vue_type_script_setup_true_lang.rDMIDGqx1767105581793.js';
import './index.vue_vue_type_script_setup_true_lang.D7-hpzmy1767105581793.js';
import { Pane } from './tweakpane.Cvt5w0bb1767105581793.js';
import { _sfc_main as _sfc_main$1 } from './accumulativeShadowsCom.vue_vue_type_script_setup_true_lang.CDWJotXL1767105581793.js';

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,unref:_unref,normalizeProps:_normalizeProps,guardReactiveProps:_guardReactiveProps,createVNode:_createVNode,Suspense:_Suspense,withCtx:_withCtx,openBlock:_openBlock,createBlock:_createBlock,mergeProps:_mergeProps} = await importShared('vue');

const {ACESFilmicToneMapping,Color} = await importShared('three');

const {reactive,watchEffect,shallowRef} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "accumulativeShadows",
  setup(__props) {
    const state = reactive({
      alpha: true,
      shadows: true,
      shadowMap: true,
      toneMapping: ACESFilmicToneMapping
    });
    const controlsState = reactive({
      enableDamping: true,
      autoRotate: false
    });
    const tcRef = shallowRef();
    watchEffect(() => {
      if (tcRef.value) {
        const scene = tcRef.value.context.scene.value;
        scene.background = new Color("grey");
      }
    });
    const shadowState = reactive({
      opacity: 0.8,
      alphaTest: 0.9,
      color: "#000000",
      blend: 2,
      lightPosition: { x: 3, y: 5, z: 3 },
      frames: 60,
      blendWindow: 100,
      ambient: 0.5
    });
    const paneControl = new Pane({ title: "参数" });
    paneControl.addBinding(shadowState, "opacity", {
      label: "透明度",
      min: 0,
      max: 1,
      step: 0.1
    });
    paneControl.addBinding(shadowState, "alphaTest", {
      label: "透明检测",
      min: 0,
      max: 1,
      step: 0.1
    });
    paneControl.addBinding(shadowState, "color", {
      label: "颜色"
    });
    paneControl.addBinding(shadowState, "blend", {
      label: "颜色混合",
      min: 0,
      max: 3,
      step: 0.1
    });
    paneControl.addBinding(shadowState, "lightPosition", {
      label: "光源位置",
      x: { min: -5, max: 5 },
      y: { min: 1, max: 5 },
      z: { min: -5, max: 5 }
    });
    paneControl.addBinding(shadowState, "frames", {
      label: "渲染帧数",
      min: 1,
      max: 100,
      step: 1
    });
    paneControl.addBinding(shadowState, "blendWindow", {
      label: "blend",
      min: 1,
      max: 100,
      step: 1
    });
    paneControl.addBinding(shadowState, "ambient", {
      label: "ambient",
      min: 0,
      max: 1,
      step: 0.1
    });
    return (_ctx, _cache) => {
      return _openBlock(), _createBlock(_unref(ol), _mergeProps(state, {
        ref_key: "tcRef",
        ref: tcRef,
        "window-size": ""
      }), {
        default: _withCtx(() => [
          _cache[0] || (_cache[0] = _createElementVNode("TresPerspectiveCamera", {
            position: [2, 3, 4],
            fov: 45,
            near: 1,
            far: 1e3
          }, null, -1)),
          _createVNode(_unref(Kk), _normalizeProps(_guardReactiveProps(controlsState)), null, 16),
          _cache[1] || (_cache[1] = _createElementVNode("TresAmbientLight", { intensity: 0.5 }, null, -1)),
          _cache[2] || (_cache[2] = _createElementVNode("TresMesh", {
            position: [2, 0.5, -1.5],
            "receive-shadow": "",
            "cast-shadow": "",
            name: "sphere"
          }, [
            _createElementVNode("TresSphereGeometry", { args: [0.5] }),
            _createElementVNode("TresMeshStandardMaterial", {
              color: 16724991,
              roughness: 0,
              metalness: 1
            })
          ], -1)),
          _cache[3] || (_cache[3] = _createElementVNode("TresMesh", {
            position: [-1.5, 0.5, 1.5],
            "receive-shadow": "",
            "cast-shadow": "",
            name: "cube"
          }, [
            _createElementVNode("TresCylinderGeometry", { args: [0.5, 0.5, 1] }),
            _createElementVNode("TresMeshStandardMaterial", {
              color: 3407871,
              roughness: 0,
              metalness: 0
            })
          ], -1)),
          _cache[4] || (_cache[4] = _createElementVNode("TresMesh", {
            position: [0, 0.9, 0],
            "receive-shadow": "",
            "cast-shadow": "",
            name: "torus"
          }, [
            _createElementVNode("TresTorusKnotGeometry", { args: [0.5, 0.2, 80, 64] }),
            _createElementVNode("TresMeshStandardMaterial", {
              color: 16777011,
              roughness: 0.3,
              metalness: 0.5
            })
          ], -1)),
          _createVNode(_sfc_main$1, _normalizeProps(_guardReactiveProps(shadowState)), null, 16),
          (_openBlock(), _createBlock(_Suspense, null, {
            default: _withCtx(() => [
              _createVNode(_unref(_sfc_main$2), {
                files: ["pos-x.jpg", "neg-x.jpg", "pos-y.jpg", "neg-y.jpg", "pos-z.jpg", "neg-z.jpg"],
                path: ("https://opensource.cdn.icegl.cn") + "/images/skyBox/6jpg/"
              }, null, 8, ["path"])
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
//# sourceMappingURL=accumulativeShadows.BroLO5GQ1767105581793.js.map
