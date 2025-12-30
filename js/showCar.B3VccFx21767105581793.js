import { importShared, _l, yk, Kk } from './index.BxB45aCK1767105581793.js';
import './reflectorDiffuse.vue_vue_type_script_setup_true_lang.BuW1EemC1767105581793.js';
import './reflectorDUDV.vue_vue_type_script_setup_true_lang.Cce3m26z1767105581793.js';
import { _sfc_main as _sfc_main$9 } from './reflectorShaderMesh.vue_vue_type_script_setup_true_lang.D0T9d0go1767105581793.js';
import './dynamicRotatingBase.vue_vue_type_script_setup_true_lang.B3Epdjc31767105581793.js';
import './whiteFloorMesh.vue_vue_type_script_setup_true_lang.B9UIV1AE1767105581793.js';
import './gridPlusCom.vue_vue_type_script_setup_true_lang.BIqyIrzr1767105581793.js';
import './videoFloor.vue_vue_type_script_setup_true_lang.BEyCiDvU1767105581793.js';
import './digitalGround.vue_vue_type_script_setup_true_lang.BPvRJNY41767105581793.js';
import './imgFloor.vue_vue_type_script_setup_true_lang.D-OHfrvs1767105581793.js';
import './reflectorRoundedBox.vue_vue_type_script_setup_true_lang.B0i-7O7p1767105581793.js';
import './particleBase.vue_vue_type_script_setup_true_lang.BTwaqkrr1767105581793.js';
import './rippleFloor.vue_vue_type_script_setup_true_lang.DU-KS3_f1767105581793.js';
import { _sfc_main$6 as _sfc_main$8 } from './generalFont.vue_vue_type_script_setup_true_lang.DqoG1H6g1767105581793.js';
import './default.vue_vue_type_script_setup_true_lang.DQGKkIwV1767105581793.js';
import './three-mesh-ui.module.CjQAT-M_1767105581793.js';
import './domPanel.vue_vue_type_style_index_0_lang.dV59iE041767105581793.js';
import { _sfc_main as _sfc_main$5, _sfc_main$1 as _sfc_main$6, _sfc_main$2 as _sfc_main$7 } from './displace.vue_vue_type_script_setup_true_lang.DClcUU_f1767105581793.js';
import { _sfc_main as _sfc_main$3, _sfc_main$1 as _sfc_main$4 } from './customShaderMaterial.vue_vue_type_script_setup_true_lang.rDMIDGqx1767105581793.js';
import './index.vue_vue_type_script_setup_true_lang.D7-hpzmy1767105581793.js';
import { useGLTF } from './index.CTrIPOkZ1767105581793.js';

const {defineComponent:_defineComponent$1} = await importShared('vue');

const {unref:_unref$2,createVNode:_createVNode$1,withCtx:_withCtx$1,renderList:_renderList,Fragment:_Fragment$1,openBlock:_openBlock$2,createElementBlock:_createElementBlock$2,createElementVNode:_createElementVNode$2,createBlock:_createBlock$1} = await importShared('vue');

const _hoisted_1$2 = { rotation: [0, 0.5, 0] };
const _hoisted_2$1 = { scale: [100, 100, 100] };
const {ref: ref$1} = await importShared('vue');

const THREE$2 = await importShared('three');
const _sfc_main$2 = /* @__PURE__ */ _defineComponent$1({
  __name: "envLightForCar",
  setup(__props) {
    const lightFormerPositions = [2, 0, 2, 0, 2, 0, 2, 0];
    const group = ref$1(null);
    const { onBeforeRender } = _l();
    onBeforeRender(({ delta }) => {
      if (group.value) {
        (group.value.position.z += delta * 10) > 20 && (group.value.position.z = -60);
      }
    });
    return (_ctx, _cache) => {
      return _openBlock$2(), _createBlock$1(_unref$2(_sfc_main$3), {
        blur: 1,
        background: "",
        far: 1e4
      }, {
        default: _withCtx$1(() => [
          _createVNode$1(_unref$2(_sfc_main$4), {
            intensity: 1,
            "rotation-x": Math.PI / 2,
            position: [0, 5, -9],
            scale: [10, 10, 1]
          }, null, 8, ["rotation-x"]),
          _createVNode$1(_unref$2(_sfc_main$4), {
            intensity: 4,
            "rotation-y": Math.PI / 2,
            position: [-5, 1, -1],
            scale: [20, 0.1, 1]
          }, null, 8, ["rotation-y"]),
          _createVNode$1(_unref$2(_sfc_main$4), {
            intensity: 3,
            "rotation-y": Math.PI / 2,
            position: [-5, -1, -1],
            scale: [20, 0.5, 1]
          }, null, 8, ["rotation-y"]),
          _createVNode$1(_unref$2(_sfc_main$4), {
            intensity: 3,
            "rotation-y": -Math.PI / 2,
            position: [10, 1, 0],
            scale: [20, 11, 1]
          }, null, 8, ["rotation-y"]),
          _createVNode$1(_unref$2(yk), {
            speed: 5,
            floatFactor: 2,
            rotationFactor: 2
          }, {
            default: _withCtx$1(() => [
              _createVNode$1(_unref$2(_sfc_main$4), {
                form: "ring",
                color: "red",
                intensity: 3,
                scale: 10,
                position: [-15, 4, -18]
              })
            ]),
            _: 1
          }),
          _createElementVNode$2("TresGroup", _hoisted_1$2, [
            _createElementVNode$2("TresGroup", {
              ref_key: "group",
              ref: group
            }, [
              (_openBlock$2(), _createElementBlock$2(_Fragment$1, null, _renderList(lightFormerPositions, (i, x) => {
                return _createVNode$1(_unref$2(_sfc_main$4), {
                  key: i,
                  form: "circle",
                  intensity: 2,
                  rotation: [Math.PI / 2, 0, 0],
                  position: [x, 4, i * 4],
                  scale: [3, 1, 1]
                }, null, 8, ["rotation", "position"]);
              }), 64))
            ], 512)
          ]),
          _createElementVNode$2("TresMesh", _hoisted_2$1, [
            _cache[0] || (_cache[0] = _createElementVNode$2("TresSphereGeometry", { args: [1, 64, 64] }, null, -1)),
            _createVNode$1(_unref$2(_sfc_main$5), {
              side: THREE$2.BackSide
            }, {
              default: _withCtx$1(() => [
                _createVNode$1(_unref$2(_sfc_main$6), {
                  color: "#444",
                  alpha: 1,
                  mode: "normal"
                }),
                _createVNode$1(_unref$2(_sfc_main$7), {
                  colorA: "blue",
                  colorB: "black",
                  alpha: 0.5,
                  mode: "normal",
                  near: 0,
                  far: 300,
                  origin: new THREE$2.Vector3(100, 100, 100)
                }, null, 8, ["origin"])
              ]),
              _: 1
            }, 8, ["side"])
          ])
        ]),
        _: 1
      });
    };
  }
});

const {withAsyncContext:_withAsyncContext} = await importShared('vue');

const {unref:_unref$1,createElementVNode:_createElementVNode$1,openBlock:_openBlock$1,createElementBlock:_createElementBlock$1} = await importShared('vue');

const _hoisted_1$1 = { ref: "contactShadowsRef" };
const _hoisted_2 = ["object", "rotation"];
const THREE$1 = await importShared('three');

const {toRaw} = await importShared('vue');

const _sfc_main$1 = {
  __name: "carModel",
  async setup(__props) {
    let __temp, __restore;
    const { scene, nodes, materials } = ([__temp, __restore] = _withAsyncContext(() => useGLTF(
      `${"https://opensource.cdn.icegl.cn"}/model/industry4/911-transformed.glb`,
      {
        draco: true,
        decoderPath: "./draco/"
      }
    )), __temp = await __temp, __restore(), __temp);
    Object.values(nodes).forEach((node) => {
      if (node.isMesh) {
        node.receiveShadow = node.castShadow = true;
      }
    });
    materials.rubber.color = new THREE$1.Color("#222");
    materials.rubber.roughness = 0.6;
    materials.rubber.roughnessMap = null;
    materials.rubber.normalScale = [4, 4];
    materials.window.color = new THREE$1.Color("black");
    materials.window.roughness = 0;
    materials.window.clearcoat = 0.1;
    materials.coat.envMapIntensity = 4;
    materials.coat.roughness = 0.5;
    materials.coat.metalness = 1;
    materials.paint.envMapIntensity = 2;
    materials.paint.roughness = 0.45;
    materials.paint.metalness = 0.8;
    materials.paint.color = new THREE$1.Color("#555");
    materials.paint.reflectivity = 1;
    materials.paint.diffuse = new THREE$1.Color(16777215);
    materials.paint.specular = new THREE$1.Color(16777215);
    return (_ctx, _cache) => {
      return _openBlock$1(), _createElementBlock$1("TresGroup", _hoisted_1$1, [
        _createElementVNode$1("primitive", {
          object: toRaw(_unref$1(scene)),
          scale: 1.6,
          position: [-0.5, -0.18, 0],
          rotation: [0, Math.PI / 5, 0]
        }, null, 8, _hoisted_2)
      ], 512);
    };
  }
};

const {defineComponent:_defineComponent} = await importShared('vue');

const {unref:_unref,createVNode:_createVNode,createElementVNode:_createElementVNode,normalizeProps:_normalizeProps,guardReactiveProps:_guardReactiveProps,Suspense:_Suspense,withCtx:_withCtx,openBlock:_openBlock,createBlock:_createBlock,mergeProps:_mergeProps,resolveComponent:_resolveComponent,Fragment:_Fragment,createElementBlock:_createElementBlock} = await importShared('vue');

const _hoisted_1 = ["angle"];
const {reactive,ref,watchEffect} = await importShared('vue');
const THREE = await importShared('three');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "showCar",
  setup(__props) {
    const spotLight = ref(null);
    watchEffect(() => {
      if (spotLight.value) {
        spotLight.value.shadow.mapSize.width = 1024;
        spotLight.value.shadow.mapSize.height = 1024;
        spotLight.value.shadow.camera.near = 1;
        spotLight.value.shadow.camera.far = 100;
        spotLight.value.shadow.bias = -1e-4;
      }
    });
    const configState = reactive({
      reflectivity: 1,
      mirror: 0.9,
      // 去除纹理 镜面化
      mixStrength: 1.8,
      showGridHelper: false
    });
    const state = reactive({
      clearColor: "#111111",
      shadows: true,
      alpha: false,
      antialias: true,
      pixelRatio: window.devicePixelRatio,
      outputColorSpace: THREE.SRGBColorSpace,
      toneMappingExposure: 2,
      toneMapping: THREE.ACESFilmicToneMapping,
      useLegacyLights: true,
      physicallyCorrectLights: true
    });
    const controlsState = reactive({
      autoRotate: true
    });
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createElementBlock(_Fragment, null, [
        _createVNode(_unref(_sfc_main$8)),
        _createVNode(_component_TresCanvas, _mergeProps(state, { "window-size": "" }), {
          default: _withCtx(() => [
            _cache[0] || (_cache[0] = _createElementVNode("TresPerspectiveCamera", {
              position: [5, 1, 15],
              fov: 30,
              near: 1,
              far: 1e3
            }, null, -1)),
            _createVNode(_unref(Kk), _normalizeProps(_guardReactiveProps(controlsState)), null, 16),
            _cache[1] || (_cache[1] = _createElementVNode("TresAmbientLight", { intensity: 3 }, null, -1)),
            _cache[2] || (_cache[2] = _createElementVNode("TresDirectionalLight", {
              color: "#ffffff",
              intensity: 5,
              castShadow: "",
              position: [0, 3, 0]
            }, null, -1)),
            _createElementVNode("TresSpotLight", {
              ref_key: "spotLight",
              ref: spotLight,
              position: [0, 10, 0],
              angle: Math.PI / 4,
              distance: 20,
              penumbra: 0.1,
              castShadow: "",
              intensity: 60,
              decay: 1.5,
              focus: 0.5
            }, null, 8, _hoisted_1),
            (_openBlock(), _createBlock(_Suspense, null, {
              default: _withCtx(() => [
                _createVNode(_sfc_main$1)
              ]),
              _: 1
            })),
            _createVNode(_unref(_sfc_main$9), _mergeProps(configState, {
              scale: [3, 1, 3],
              position: [0, -1.17, 0]
            }), null, 16),
            (_openBlock(), _createBlock(_Suspense, null, {
              default: _withCtx(() => [
                _createVNode(_sfc_main$2)
              ]),
              _: 1
            }))
          ]),
          _: 1
        }, 16)
      ], 64);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=showCar.B3VccFx21767105581793.js.map
