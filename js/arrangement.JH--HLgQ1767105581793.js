import { importShared, _l, Kk } from './index.BxB45aCK1767105581793.js';
import { _sfc_main$6 as _sfc_main$9 } from './generalFont.vue_vue_type_script_setup_true_lang.DqoG1H6g1767105581793.js';
import './default.vue_vue_type_script_setup_true_lang.DQGKkIwV1767105581793.js';
import './three-mesh-ui.module.CjQAT-M_1767105581793.js';
import './domPanel.vue_vue_type_style_index_0_lang.dV59iE041767105581793.js';
import { _sfc_main as _sfc_main$3, _sfc_main$1 as _sfc_main$4, _sfc_main$3 as _sfc_main$5, _sfc_main$4 as _sfc_main$6, _sfc_main$2 as _sfc_main$7 } from './customShaderMaterial.vue_vue_type_script_setup_true_lang.rDMIDGqx1767105581793.js';
import './index.vue_vue_type_script_setup_true_lang.D7-hpzmy1767105581793.js';
import { useGLTF } from './index.CTrIPOkZ1767105581793.js';
import { _sfc_main as _sfc_main$8 } from './accumulativeShadowsCom.vue_vue_type_script_setup_true_lang.CDWJotXL1767105581793.js';
import { Pane } from './tweakpane.Cvt5w0bb1767105581793.js';

const {defineComponent:_defineComponent$2} = await importShared('vue');

const {unref:_unref$2,createVNode:_createVNode$2,renderList:_renderList,Fragment:_Fragment$1,openBlock:_openBlock$2,createElementBlock:_createElementBlock$2,createElementVNode:_createElementVNode$2,withCtx:_withCtx$2,Suspense:_Suspense$1,createBlock:_createBlock$1} = await importShared('vue');

const _hoisted_1$1 = ["rotation"];
const _hoisted_2$1 = ["rotation-x"];
const {ref} = await importShared('vue');
const _sfc_main$2 = /* @__PURE__ */ _defineComponent$2({
  __name: "env",
  setup(__props) {
    const refgroup = ref(null);
    const { onBeforeRender } = _l();
    onBeforeRender(({ delta }) => {
      if (refgroup.value) {
        refgroup.value.rotation.z += delta;
      }
    });
    const lightList = [2, -2, 2, -4, 2, -5, 2, -9];
    return (_ctx, _cache) => {
      return _openBlock$2(), _createBlock$1(_Suspense$1, null, {
        default: _withCtx$2(() => [
          _createVNode$2(_unref$2(_sfc_main$3), {
            intensity: 0.1,
            resolution: 256,
            background: "",
            blur: 0.8,
            files: ["pos-x.jpg", "neg-x.jpg", "pos-y.jpg", "neg-y.jpg", "pos-z.jpg", "neg-z.jpg"],
            path: ("https://opensource.cdn.icegl.cn") + "/images/skyBox/6jpg/"
          }, {
            default: _withCtx$2(() => [
              _createVNode$2(_unref$2(_sfc_main$4), {
                intensity: 4,
                "rotation-x": Math.PI / 2,
                position: [0, 5, -9],
                scale: [10, 10, 1]
              }, null, 8, ["rotation-x"]),
              _createVNode$2(_unref$2(_sfc_main$4), {
                intensity: 4,
                "rotation-x": Math.PI / 2,
                position: [0, 5, -9],
                scale: [10, 10, 1]
              }, null, 8, ["rotation-x"]),
              _createElementVNode$2("TresGroup", {
                rotation: [Math.PI / 2, 1, 0]
              }, [
                (_openBlock$2(), _createElementBlock$2(_Fragment$1, null, _renderList(lightList, (x, i) => {
                  return _createVNode$2(_unref$2(_sfc_main$4), {
                    key: i,
                    intensity: 1,
                    rotation: [Math.PI / 4, 0, 0],
                    position: [x, 4, i * 4],
                    scale: [4, 1, 1]
                  }, null, 8, ["rotation", "position"]);
                }), 64))
              ], 8, _hoisted_1$1),
              _createVNode$2(_unref$2(_sfc_main$4), {
                intensity: 0.5,
                "rotation-y": Math.PI / 2,
                position: [-5, 1, -1],
                scale: [50, 2, 1]
              }, null, 8, ["rotation-y"]),
              _createVNode$2(_unref$2(_sfc_main$4), {
                intensity: 0.5,
                "rotation-y": Math.PI / 2,
                position: [-5, -1, -1],
                scale: [50, 2, 1]
              }, null, 8, ["rotation-y"]),
              _createVNode$2(_unref$2(_sfc_main$4), {
                intensity: 0.5,
                "rotation-y": -Math.PI / 2,
                position: [10, 1, 0],
                scale: [50, 2, 1]
              }, null, 8, ["rotation-y"]),
              _createElementVNode$2("TresGroup", {
                ref_key: "refgroup",
                ref: refgroup,
                "rotation-x": Math.PI / 2
              }, [
                _createVNode$2(_unref$2(_sfc_main$4), {
                  form: "ring",
                  color: "red",
                  "rotation-y": Math.PI / 2,
                  intensity: 5,
                  scale: [10, 10, 1],
                  position: [-5, 2, -1]
                }, null, 8, ["rotation-y"])
              ], 8, _hoisted_2$1)
            ]),
            _: 1
          }, 8, ["path"])
        ]),
        _: 1
      });
    };
  }
});

const {withAsyncContext:_withAsyncContext,defineComponent:_defineComponent$1} = await importShared('vue');

const {unref:_unref$1,createElementVNode:_createElementVNode$1,withCtx:_withCtx$1,createVNode:_createVNode$1,normalizeProps:_normalizeProps$1,guardReactiveProps:_guardReactiveProps$1,openBlock:_openBlock$1,createElementBlock:_createElementBlock$1} = await importShared('vue');

const _hoisted_1 = {
  position: [0, -0.5, 0],
  rotation: [0, -0.75, 0]
};
const _hoisted_2 = ["geometry", "material"];
const _hoisted_3 = ["geometry", "material"];
const _hoisted_4 = ["geometry", "material"];
const _hoisted_5 = ["geometry", "material"];
const _hoisted_6 = ["geometry", "material"];
const _hoisted_7 = ["geometry", "material"];
const _hoisted_8 = ["geometry", "material"];
const _hoisted_9 = ["geometry"];
const _hoisted_10 = ["geometry", "material"];
const _hoisted_11 = ["geometry", "material"];
const THREE$1 = await importShared('three');
const {reactive,toRaw} = await importShared('vue');

const _sfc_main$1 = /* @__PURE__ */ _defineComponent$1({
  __name: "models",
  async setup(__props) {
    let __temp, __restore;
    const innerMaterial = new THREE$1.MeshStandardMaterial({
      transparent: true,
      opacity: 1,
      color: "black",
      roughness: 0,
      side: THREE$1.FrontSide,
      blending: THREE$1.AdditiveBlending,
      polygonOffset: true,
      polygonOffsetFactor: 1,
      envMapIntensity: 0.6
    });
    const { nodes, materials } = ([__temp, __restore] = _withAsyncContext(() => useGLTF(`${"https://opensource.cdn.icegl.cn"}/model/eCommerce/glass-transformed.glb`)), __temp = await __temp, __restore(), __temp);
    const materialFork = toRaw(materials.ForkAndKnivesSet001_1K);
    const materialForkCopy = new THREE$1.MeshStandardMaterial();
    materialForkCopy.copy(materialFork);
    materialForkCopy.color = new THREE$1.Color("#999");
    const shadowState = {
      opacity: 0.8,
      alphaTest: 0.85,
      color: "red",
      blend: 2,
      lightPosition: { x: -1.5, y: 2.5, z: -1 },
      frames: 60,
      blendWindow: 60,
      ambient: 0.5
    };
    const materialState = reactive({
      color: "#ffffff",
      roughness: 0,
      reflectivity: 0.1,
      attenuationColor: "#ffffff",
      attenuationDistance: 2,
      chromaticAberration: 0.05,
      anisotropicBlur: 1,
      distortion: 0,
      temporalDistortion: 0,
      backside: true,
      thickness: 0.65,
      backsideThickness: 0.1,
      clearcoat: 1,
      clearcoatRoughness: 1
    });
    const paneControl = new Pane();
    paneControl.hidden = true;
    paneControl.addBinding(materialState, "color", {
      label: "颜色"
    });
    paneControl.addBinding(materialState, "roughness", {
      label: "roughness",
      min: 0,
      max: 1,
      step: 0.01
    });
    paneControl.addBinding(materialState, "reflectivity", {
      label: "reflectivity",
      min: 0,
      max: 1,
      step: 0.01
    });
    paneControl.addBinding(materialState, "attenuationColor", {
      label: "attenuationColor"
    });
    paneControl.addBinding(materialState, "attenuationDistance", {
      label: "attenuationDistance",
      min: 0,
      max: 2,
      step: 0.01
    });
    paneControl.addBinding(materialState, "chromaticAberration", {
      label: "chromaticAberration",
      min: 0,
      max: 2,
      step: 0.01
    });
    paneControl.addBinding(materialState, "anisotropicBlur", {
      label: "anisotropicBlur",
      min: 0,
      max: 10,
      step: 0.01
    });
    paneControl.addBinding(materialState, "distortion", {
      label: "distortion",
      min: 0,
      max: 10,
      step: 0.01
    });
    paneControl.addBinding(materialState, "temporalDistortion", {
      label: "temporalDistortion",
      min: 0,
      max: 1,
      step: 0.01
    });
    paneControl.addBinding(materialState, "backside", {
      label: "backside"
    });
    paneControl.addBinding(materialState, "thickness", {
      label: "thickness",
      min: 0,
      max: 4,
      step: 0.01
    });
    paneControl.addBinding(materialState, "backsideThickness", {
      label: "backsideThickness",
      min: 0,
      max: 4,
      step: 0.01
    });
    const causticsState = reactive({
      color: "rgb(255,200, 200)",
      ior: 0.97,
      backsideIOR: 0.98,
      far: 30,
      worldRadius: 0.394,
      intensity: 0.02,
      causticsOnly: false,
      lightSource: { x: -0.05, y: 1, z: 1 }
    });
    const paneControl2 = new Pane({ title: "参数" });
    paneControl2.hidden = true;
    paneControl2.addBinding(causticsState, "color", {
      label: "颜色"
    });
    paneControl2.addBinding(causticsState, "ior", {
      label: "折射系数",
      min: 0.6,
      max: 1.3,
      step: 0.01
    });
    paneControl2.addBinding(causticsState, "backsideIOR", {
      label: "折射系数2",
      min: 0.6,
      max: 1.3,
      step: 0.01
    });
    paneControl2.addBinding(causticsState, "far", {
      label: "可视距离",
      min: 0,
      max: 30,
      step: 1
    });
    paneControl2.addBinding(causticsState, "worldRadius", {
      label: "材质大小",
      min: 1e-3,
      max: 0.5,
      step: 1e-3
    });
    paneControl2.addBinding(causticsState, "intensity", {
      label: "强度",
      min: 0,
      max: 1,
      step: 0.01
    });
    paneControl2.addBinding(causticsState, "causticsOnly", {
      label: "只显示投射"
    });
    paneControl2.addBinding(causticsState, "lightSource", {
      label: "光源位置",
      x: { min: -1, max: 1 },
      y: { min: -1, max: 1 },
      z: { min: -1, max: 1 }
    });
    return (_ctx, _cache) => {
      return _openBlock$1(), _createElementBlock$1("TresGroup", _hoisted_1, [
        _createElementVNode$1("TresMesh", {
          geometry: _unref$1(nodes).cake.geometry,
          rotation: [0, -0.5, 0],
          "cast-shadow": true,
          material: toRaw(_unref$1(materials).FruitCakeSlice_u1_v1)
        }, null, 8, _hoisted_2),
        _createElementVNode$1("TresMesh", {
          geometry: _unref$1(nodes).straw_1.geometry,
          castShadow: "",
          material: _unref$1(materials).straw_2
        }, null, 8, _hoisted_3),
        _createElementVNode$1("TresMesh", {
          geometry: _unref$1(nodes).straw_2.geometry,
          castShadow: "",
          material: _unref$1(materials).straw_1
        }, null, 8, _hoisted_4),
        _createElementVNode$1("TresMesh", {
          geometry: _unref$1(nodes).straw001_1.geometry,
          position: [0, -5e-3, 0],
          "cast-shadow": true,
          material: _unref$1(materials).straw_2
        }, null, 8, _hoisted_5),
        _createElementVNode$1("TresMesh", {
          geometry: _unref$1(nodes).straw001_2.geometry,
          position: [0, -5e-3, 0],
          "cast-shadow": true,
          material: _unref$1(materials).straw_1
        }, null, 8, _hoisted_6),
        _createVNode$1(_unref$1(_sfc_main$5), {
          top: "",
          rotation: [0, -0.4, 0],
          position: [-1, -0.01, -2]
        }, {
          default: _withCtx$1(() => [
            _createElementVNode$1("TresMesh", {
              geometry: _unref$1(nodes).flowers.geometry,
              castShadow: "",
              material: _unref$1(materials)["draifrawer_u1_v1.001"],
              scale: 1.2
            }, null, 8, _hoisted_7)
          ]),
          _: 1
        }),
        _createElementVNode$1("TresMesh", {
          castShadow: "",
          geometry: toRaw(_unref$1(nodes).fork.geometry),
          material: _unref$1(materialForkCopy)
        }, null, 8, _hoisted_8),
        _createVNode$1(_unref$1(_sfc_main$6), _normalizeProps$1(_guardReactiveProps$1(causticsState)), {
          default: _withCtx$1(() => [
            _createElementVNode$1("TresMesh", {
              castShadow: "",
              receiveShadow: "",
              geometry: _unref$1(nodes).glass.geometry
            }, [
              _createVNode$1(_unref$1(_sfc_main$7), _normalizeProps$1(_guardReactiveProps$1(materialState)), null, 16)
            ], 8, _hoisted_9)
          ]),
          _: 1
        }, 16),
        _createElementVNode$1("TresMesh", {
          geometry: _unref$1(nodes).glass_back.geometry,
          material: _unref$1(innerMaterial),
          scale: [0.95, 1, 0.95]
        }, null, 8, _hoisted_10),
        _createElementVNode$1("TresMesh", {
          geometry: _unref$1(nodes).glass_inner.geometry,
          material: _unref$1(innerMaterial)
        }, null, 8, _hoisted_11),
        _createVNode$1(_unref$1(_sfc_main$8), _normalizeProps$1(_guardReactiveProps$1(shadowState)), null, 16)
      ]);
    };
  }
});

const {defineComponent:_defineComponent} = await importShared('vue');

const {unref:_unref,createVNode:_createVNode,createElementVNode:_createElementVNode,Suspense:_Suspense,withCtx:_withCtx,openBlock:_openBlock,createBlock:_createBlock,resolveComponent:_resolveComponent,normalizeProps:_normalizeProps,guardReactiveProps:_guardReactiveProps,Fragment:_Fragment,createElementBlock:_createElementBlock} = await importShared('vue');
const THREE = await importShared('three');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "arrangement",
  setup(__props) {
    const tcConfig = {
      clearColor: "#ffffff",
      windowSize: true,
      toneMapping: THREE.ACESFilmicToneMapping,
      toneMappingExposure: 0.8,
      shadows: true,
      outputColorSpace: THREE.SRGBColorSpace
      // disableRender: true
    };
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createElementBlock(_Fragment, null, [
        _createVNode(_unref(_sfc_main$9)),
        _createVNode(_component_TresCanvas, _normalizeProps(_guardReactiveProps(tcConfig)), {
          default: _withCtx(() => [
            _cache[0] || (_cache[0] = _createElementVNode("TresPerspectiveCamera", {
              position: [2, 1.6, 6],
              fov: 45,
              near: 0.1,
              far: 1e3,
              lookAt: [0, 0, 0]
            }, null, -1)),
            _createVNode(_unref(Kk), { enableDamping: "" }),
            (_openBlock(), _createBlock(_Suspense, null, {
              default: _withCtx(() => [
                _createVNode(_sfc_main$1)
              ]),
              _: 1
            })),
            _createVNode(_sfc_main$2)
          ]),
          _: 1
        }, 16)
      ], 64);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=arrangement.JH--HLgQ1767105581793.js.map
