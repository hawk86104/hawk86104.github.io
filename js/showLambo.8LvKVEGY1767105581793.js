import { importShared, Kk } from './index.BxB45aCK1767105581793.js';
import { _sfc_main as _sfc_main$4, _sfc_main$1 as _sfc_main$5 } from './customShaderMaterial.vue_vue_type_script_setup_true_lang.rDMIDGqx1767105581793.js';
import './index.vue_vue_type_script_setup_true_lang.D7-hpzmy1767105581793.js';
import { _sfc_main$6 as _sfc_main$2 } from './generalFont.vue_vue_type_script_setup_true_lang.DqoG1H6g1767105581793.js';
import './default.vue_vue_type_script_setup_true_lang.DQGKkIwV1767105581793.js';
import './three-mesh-ui.module.CjQAT-M_1767105581793.js';
import './domPanel.vue_vue_type_style_index_0_lang.dV59iE041767105581793.js';
import './reflectorDiffuse.vue_vue_type_script_setup_true_lang.BuW1EemC1767105581793.js';
import { _sfc_main as _sfc_main$3 } from './reflectorDUDV.vue_vue_type_script_setup_true_lang.Cce3m26z1767105581793.js';
import './reflectorShaderMesh.vue_vue_type_script_setup_true_lang.D0T9d0go1767105581793.js';
import './dynamicRotatingBase.vue_vue_type_script_setup_true_lang.B3Epdjc31767105581793.js';
import './whiteFloorMesh.vue_vue_type_script_setup_true_lang.B9UIV1AE1767105581793.js';
import './gridPlusCom.vue_vue_type_script_setup_true_lang.BIqyIrzr1767105581793.js';
import './videoFloor.vue_vue_type_script_setup_true_lang.BEyCiDvU1767105581793.js';
import './digitalGround.vue_vue_type_script_setup_true_lang.BPvRJNY41767105581793.js';
import './imgFloor.vue_vue_type_script_setup_true_lang.D-OHfrvs1767105581793.js';
import './reflectorRoundedBox.vue_vue_type_script_setup_true_lang.B0i-7O7p1767105581793.js';
import './particleBase.vue_vue_type_script_setup_true_lang.BTwaqkrr1767105581793.js';
import './rippleFloor.vue_vue_type_script_setup_true_lang.DU-KS3_f1767105581793.js';
import { useGLTF } from './index.CTrIPOkZ1767105581793.js';
import { _sfc_main as _sfc_main$6 } from './lamboEffect.vue_vue_type_script_setup_true_lang.DS1uPw3c1767105581793.js';

const {withAsyncContext:_withAsyncContext} = await importShared('vue');

const {unref:_unref$1,createElementVNode:_createElementVNode$1,openBlock:_openBlock$1,createElementBlock:_createElementBlock$1} = await importShared('vue');

const _hoisted_1$1 = { ref: "contactShadowsRef" };
const _hoisted_2$1 = ["object", "rotation"];
const THREE$1 = await importShared('three');

const {toRaw} = await importShared('vue');

const _sfc_main$1 = {
  __name: "lamboModel",
  async setup(__props) {
    let __temp, __restore;
    const { scene, nodes, materials } = ([__temp, __restore] = _withAsyncContext(() => useGLTF(
      `${"https://opensource.cdn.icegl.cn"}/model/industry4/lambo.glb`,
      { draco: true, decoderPath: "./draco/" }
    )), __temp = await __temp, __restore(), __temp);
    Object.values(nodes).forEach((node) => {
      if (node.isMesh) {
        if (node.name.startsWith("glass")) node.geometry.computeVertexNormals();
        if (node.name === "silver_001_BreakDiscs_0") {
          node.material = materials.BreakDiscs.clone();
          node.material.color = new THREE$1.Color("#ddd");
        }
      }
    });
    nodes.glass_003.scale.setScalar(2.7);
    materials.FrameBlack.color = new THREE$1.Color("black");
    materials.FrameBlack.roughness = 0;
    materials.FrameBlack.metalness = 0.75;
    materials.Chrome.color = new THREE$1.Color("#333");
    materials.Chrome.metalness = 1;
    materials.Chrome.roughness = 0;
    materials.BreakDiscs.color = new THREE$1.Color("#555");
    materials.BreakDiscs.metalness = 0.2;
    materials.BreakDiscs.roughness = 0.2;
    materials.TiresGum.color = new THREE$1.Color("#181818");
    materials.TiresGum.metalness = 0;
    materials.TiresGum.roughness = 0.4;
    materials.GreyElements.color = new THREE$1.Color("#292929");
    materials.GreyElements.metalness = 0;
    nodes.yellow_WhiteCar_0.material = new THREE$1.MeshPhysicalMaterial({
      roughness: 0.3,
      metalness: 0.05,
      color: "#111",
      envMapIntensity: 0.75,
      clearcoatRoughness: 0,
      clearcoat: 1
    });
    return (_ctx, _cache) => {
      return _openBlock$1(), _createElementBlock$1("TresGroup", _hoisted_1$1, [
        _createElementVNode$1("primitive", {
          object: toRaw(_unref$1(scene)),
          scale: 0.015,
          rotation: [0, Math.PI / 1.5, 0]
        }, null, 8, _hoisted_2$1)
      ], 512);
    };
  }
};

const {defineComponent:_defineComponent} = await importShared('vue');

const {unref:_unref,createVNode:_createVNode,createElementVNode:_createElementVNode,normalizeProps:_normalizeProps,guardReactiveProps:_guardReactiveProps,Suspense:_Suspense,withCtx:_withCtx,openBlock:_openBlock,createBlock:_createBlock,resolveComponent:_resolveComponent,mergeProps:_mergeProps,Fragment:_Fragment,createElementBlock:_createElementBlock} = await importShared('vue');

const _hoisted_1 = ["rotation"];
const _hoisted_2 = ["side"];
const _hoisted_3 = ["rotation"];
const _hoisted_4 = ["side"];
const {reactive} = await importShared('vue');
const THREE = await importShared('three');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "showLambo",
  setup(__props) {
    const state = reactive({
      clearColor: "#15151a",
      antialias: false,
      logarithmicDepthBuffer: true,
      renderMode: "manual"
    });
    const controlsState = reactive({
      autoRotate: true
    });
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createElementBlock(_Fragment, null, [
        _createVNode(_unref(_sfc_main$2)),
        _createVNode(_component_TresCanvas, _mergeProps(state, { "window-size": "" }), {
          default: _withCtx(() => [
            _cache[2] || (_cache[2] = _createElementVNode("TresPerspectiveCamera", {
              position: [0, 10, 15],
              fov: 25,
              near: 0.1,
              far: 1e4
            }, null, -1)),
            _createVNode(_unref(Kk), _normalizeProps(_guardReactiveProps(controlsState)), null, 16),
            _cache[3] || (_cache[3] = _createElementVNode("TresHemisphereLight", { intensity: 0.5 }, null, -1)),
            (_openBlock(), _createBlock(_Suspense, null, {
              default: _withCtx(() => [
                _createVNode(_sfc_main$1)
              ]),
              _: 1
            })),
            (_openBlock(), _createBlock(_Suspense, null, {
              default: _withCtx(() => [
                _createVNode(_unref(_sfc_main$3), {
                  position: [0, -1.562, 0],
                  reflectivity: 2.6,
                  showGridHelper: false,
                  scale: 1.5
                })
              ]),
              _: 1
            })),
            _createElementVNode("TresMesh", {
              scale: 4,
              position: [3, -1.161, -1.5],
              rotation: [-Math.PI / 2, 0, Math.PI / 2.5]
            }, [
              _cache[0] || (_cache[0] = _createElementVNode("TresRingGeometry", { args: [0.9, 1, 4, 1] }, null, -1)),
              _createElementVNode("TresMeshStandardMaterial", {
                color: "white",
                roughness: 0.75,
                side: THREE.DoubleSide
              }, null, 8, _hoisted_2)
            ], 8, _hoisted_1),
            _createElementVNode("TresMesh", {
              scale: 4,
              position: [-3, -1.161, -1],
              rotation: [-Math.PI / 2, 0, Math.PI / 2.5]
            }, [
              _cache[1] || (_cache[1] = _createElementVNode("TresRingGeometry", { args: [0.9, 1, 3, 1] }, null, -1)),
              _createElementVNode("TresMeshStandardMaterial", {
                color: "white",
                roughness: 0.75,
                side: THREE.DoubleSide
              }, null, 8, _hoisted_4)
            ], 8, _hoisted_3),
            (_openBlock(), _createBlock(_Suspense, null, {
              default: _withCtx(() => [
                _createVNode(_unref(_sfc_main$4), { resolution: 512 }, {
                  default: _withCtx(() => [
                    _createVNode(_unref(_sfc_main$5), {
                      intensity: 2,
                      position: [0, 1, 3],
                      scale: [10, 1, 1]
                    }),
                    _createVNode(_unref(_sfc_main$5), {
                      intensity: 2,
                      "rotation-x": Math.PI / 2,
                      position: [0, 4, -6],
                      scale: [10, 1, 1]
                    }, null, 8, ["rotation-x"]),
                    _createVNode(_unref(_sfc_main$5), {
                      intensity: 2,
                      "rotation-x": Math.PI / 2,
                      position: [0, 4, -3],
                      scale: [10, 1, 1]
                    }, null, 8, ["rotation-x"]),
                    _createVNode(_unref(_sfc_main$5), {
                      intensity: 2,
                      "rotation-x": Math.PI / 2,
                      position: [0, 4, 0],
                      scale: [10, 1, 1]
                    }, null, 8, ["rotation-x"]),
                    _createVNode(_unref(_sfc_main$5), {
                      intensity: 2,
                      "rotation-x": Math.PI / 2,
                      position: [0, 4, 3],
                      scale: [10, 1, 1]
                    }, null, 8, ["rotation-x"]),
                    _createVNode(_unref(_sfc_main$5), {
                      intensity: 2,
                      "rotation-x": Math.PI / 2,
                      position: [0, 4, 6],
                      scale: [10, 1, 1]
                    }, null, 8, ["rotation-x"]),
                    _createVNode(_unref(_sfc_main$5), {
                      intensity: 2,
                      "rotation-x": Math.PI / 2,
                      position: [0, 4, 9],
                      scale: [10, 1, 1]
                    }, null, 8, ["rotation-x"]),
                    _createVNode(_unref(_sfc_main$5), {
                      intensity: 2,
                      "rotation-y": Math.PI / 2,
                      position: [-50, 2, 0],
                      scale: [100, 2, 1]
                    }, null, 8, ["rotation-y"]),
                    _createVNode(_unref(_sfc_main$5), {
                      intensity: 2,
                      "rotation-y": -Math.PI / 2,
                      position: [50, 2, 0],
                      scale: [100, 2, 1]
                    }, null, 8, ["rotation-y"]),
                    _createVNode(_unref(_sfc_main$5), {
                      form: "ring",
                      color: "red",
                      intensity: 10,
                      scale: 2,
                      position: [10, 5, 10]
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })),
            _createVNode(_sfc_main$6)
          ]),
          _: 1
        }, 16)
      ], 64);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=showLambo.8LvKVEGY1767105581793.js.map
