import { importShared, Uk, defineStore, gz, zr, nz, _l, ol, Kk } from './index.BxB45aCK1767105581793.js';
import './reflectorDiffuse.vue_vue_type_script_setup_true_lang.BuW1EemC1767105581793.js';
import { _sfc_main as _sfc_main$a } from './reflectorDUDV.vue_vue_type_script_setup_true_lang.Cce3m26z1767105581793.js';
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
import { loading$2 as loading } from './generalFont.vue_vue_type_script_setup_true_lang.DqoG1H6g1767105581793.js';
import './default.vue_vue_type_script_setup_true_lang.DQGKkIwV1767105581793.js';
import './three-mesh-ui.module.CjQAT-M_1767105581793.js';
import './domPanel.vue_vue_type_style_index_0_lang.dV59iE041767105581793.js';
import { instance } from './Resource.Dxl2bF_-1767105581793.js';
import { _sfc_main as _sfc_main$8, _sfc_main$1 as _sfc_main$9, useTexture } from './customShaderMaterial.vue_vue_type_script_setup_true_lang.rDMIDGqx1767105581793.js';
import './index.vue_vue_type_script_setup_true_lang.D7-hpzmy1767105581793.js';

const {defineComponent:_defineComponent$7} = await importShared('vue');

const {normalizeProps:_normalizeProps$3,guardReactiveProps:_guardReactiveProps$3,createElementVNode:_createElementVNode$6,unref:_unref$7,mergeProps:_mergeProps$4,withCtx:_withCtx$6,createVNode:_createVNode$7,Suspense:_Suspense$3,openBlock:_openBlock$7,createBlock:_createBlock$4,Fragment:_Fragment$5,createElementBlock:_createElementBlock$6} = await importShared('vue');
const _sfc_main$7 = /* @__PURE__ */ _defineComponent$7({
  __name: "livingRoomInfo",
  props: {
    title: {
      default: "客厅"
    },
    temperature: {
      default: "26.2"
    },
    humidity: {
      default: "31"
    }
  },
  setup(__props) {
    const t3dConfig = {
      height: 0.1,
      curveSegments: 5,
      bevelEnabled: true,
      bevelThickness: 0.065,
      bevelSize: 0.032,
      bevelOffset: 0.02,
      bevelSegments: 6
    };
    const clearcoatState = {
      color: "#ffffff",
      metalness: 0.6,
      roughness: 0,
      reflectivity: 0
    };
    return (_ctx, _cache) => {
      return _openBlock$7(), _createElementBlock$6(_Fragment$5, null, [
        (_openBlock$7(), _createBlock$4(_Suspense$3, null, {
          default: _withCtx$6(() => [
            _createVNode$7(_unref$7(Uk), _mergeProps$4({
              text: __props.title,
              rotation: [Math.PI / 2, Math.PI, -Math.PI / 2],
              position: [-2.2, 0.2, 1]
            }, t3dConfig, {
              "cast-shadow": "",
              size: 0.5,
              font: "./plugins/freeDigitalHome/fonts/FZLanTingHeiS-UL-GB_Regular.json"
            }), {
              default: _withCtx$6(() => [
                _createElementVNode$6("TresMeshPhysicalMaterial", _normalizeProps$3(_guardReactiveProps$3(clearcoatState)), null, 16)
              ]),
              _: 1
            }, 16, ["text", "rotation"])
          ]),
          _: 1
        })),
        (_openBlock$7(), _createBlock$4(_Suspense$3, null, {
          default: _withCtx$6(() => [
            _createVNode$7(_unref$7(Uk), _mergeProps$4({
              text: `${__props.temperature} ℃ `,
              rotation: [Math.PI / 2, Math.PI, -Math.PI / 2],
              position: [-1.2, 0.2, 1]
            }, t3dConfig, {
              "cast-shadow": "",
              size: 0.3,
              font: "./plugins/freeDigitalHome/fonts/FZLanTingHeiS-UL-GB_Regular.json"
            }), {
              default: _withCtx$6(() => [
                _createElementVNode$6("TresMeshPhysicalMaterial", _normalizeProps$3(_guardReactiveProps$3(clearcoatState)), null, 16)
              ]),
              _: 1
            }, 16, ["text", "rotation"])
          ]),
          _: 1
        })),
        (_openBlock$7(), _createBlock$4(_Suspense$3, null, {
          default: _withCtx$6(() => [
            _createVNode$7(_unref$7(Uk), _mergeProps$4({
              text: `${__props.humidity} % `,
              rotation: [Math.PI / 2, Math.PI, -Math.PI / 2],
              position: [-0.6, 0.2, 0.8]
            }, t3dConfig, {
              "cast-shadow": "",
              size: 0.3,
              font: "./plugins/freeDigitalHome/fonts/FZLanTingHeiS-UL-GB_Regular.json"
            }), {
              default: _withCtx$6(() => [
                _createElementVNode$6("TresMeshPhysicalMaterial", _normalizeProps$3(_guardReactiveProps$3(clearcoatState)), null, 16)
              ]),
              _: 1
            }, 16, ["text", "rotation"])
          ]),
          _: 1
        }))
      ], 64);
    };
  }
});

const {defineComponent:_defineComponent$6} = await importShared('vue');

const {normalizeProps:_normalizeProps$2,guardReactiveProps:_guardReactiveProps$2,createElementVNode:_createElementVNode$5,unref:_unref$6,mergeProps:_mergeProps$3,withCtx:_withCtx$5,createVNode:_createVNode$6,Suspense:_Suspense$2,openBlock:_openBlock$6,createBlock:_createBlock$3,Fragment:_Fragment$4,createElementBlock:_createElementBlock$5} = await importShared('vue');
const _sfc_main$6 = /* @__PURE__ */ _defineComponent$6({
  __name: "bedRoomA",
  props: {
    title: {
      default: "主卧"
    },
    temperature: {
      default: "16.2"
    },
    humidity: {
      default: "22"
    }
  },
  setup(__props) {
    const t3dConfig = {
      height: 0.1,
      curveSegments: 5,
      bevelEnabled: true,
      bevelThickness: 0.065,
      bevelSize: 0.032,
      bevelOffset: 0.02,
      bevelSegments: 6
    };
    const clearcoatState = {
      color: "#ffffff",
      metalness: 0.6,
      roughness: 0,
      reflectivity: 0
    };
    return (_ctx, _cache) => {
      return _openBlock$6(), _createElementBlock$5(_Fragment$4, null, [
        (_openBlock$6(), _createBlock$3(_Suspense$2, null, {
          default: _withCtx$5(() => [
            _createVNode$6(_unref$6(Uk), _mergeProps$3({
              text: __props.title,
              rotation: [Math.PI / 2, Math.PI, -Math.PI / 2],
              position: [2.56, 0.6, 5.5]
            }, t3dConfig, {
              "cast-shadow": "",
              size: 0.5,
              font: "./plugins/freeDigitalHome/fonts/FZLanTingHeiS-UL-GB_Regular.json"
            }), {
              default: _withCtx$5(() => [
                _createElementVNode$5("TresMeshPhysicalMaterial", _normalizeProps$2(_guardReactiveProps$2(clearcoatState)), null, 16)
              ]),
              _: 1
            }, 16, ["text", "rotation"])
          ]),
          _: 1
        })),
        (_openBlock$6(), _createBlock$3(_Suspense$2, null, {
          default: _withCtx$5(() => [
            _createVNode$6(_unref$6(Uk), _mergeProps$3({
              text: `${__props.temperature} ℃ `,
              rotation: [Math.PI / 2, Math.PI, -Math.PI / 2],
              position: [1.881, 0.2, 2.865]
            }, t3dConfig, {
              "cast-shadow": "",
              size: 0.26,
              font: "./plugins/freeDigitalHome/fonts/FZLanTingHeiS-UL-GB_Regular.json"
            }), {
              default: _withCtx$5(() => [
                _createElementVNode$5("TresMeshPhysicalMaterial", _normalizeProps$2(_guardReactiveProps$2(clearcoatState)), null, 16)
              ]),
              _: 1
            }, 16, ["text", "rotation"])
          ]),
          _: 1
        })),
        (_openBlock$6(), _createBlock$3(_Suspense$2, null, {
          default: _withCtx$5(() => [
            _createVNode$6(_unref$6(Uk), _mergeProps$3({
              text: `${__props.humidity} % `,
              rotation: [Math.PI / 2, Math.PI, -Math.PI / 2],
              position: [2.56, 0.2, 2.865]
            }, t3dConfig, {
              "cast-shadow": "",
              size: 0.3,
              font: "./plugins/freeDigitalHome/fonts/FZLanTingHeiS-UL-GB_Regular.json"
            }), {
              default: _withCtx$5(() => [
                _createElementVNode$5("TresMeshPhysicalMaterial", _normalizeProps$2(_guardReactiveProps$2(clearcoatState)), null, 16)
              ]),
              _: 1
            }, 16, ["text", "rotation"])
          ]),
          _: 1
        }))
      ], 64);
    };
  }
});

const {defineComponent:_defineComponent$5} = await importShared('vue');

const {normalizeProps:_normalizeProps$1,guardReactiveProps:_guardReactiveProps$1,createElementVNode:_createElementVNode$4,unref:_unref$5,mergeProps:_mergeProps$2,withCtx:_withCtx$4,createVNode:_createVNode$5,Suspense:_Suspense$1,openBlock:_openBlock$5,createBlock:_createBlock$2,Fragment:_Fragment$3,createElementBlock:_createElementBlock$4} = await importShared('vue');
const _sfc_main$5 = /* @__PURE__ */ _defineComponent$5({
  __name: "bedRoomB",
  props: {
    title: {
      default: "次卧"
    },
    temperature: {
      default: "28.6"
    },
    humidity: {
      default: "18"
    }
  },
  setup(__props) {
    const t3dConfig = {
      height: 0.1,
      curveSegments: 5,
      bevelEnabled: true,
      bevelThickness: 0.065,
      bevelSize: 0.032,
      bevelOffset: 0.02,
      bevelSegments: 6
    };
    const clearcoatState = {
      color: "#ffffff",
      metalness: 0.6,
      roughness: 0,
      reflectivity: 0
    };
    return (_ctx, _cache) => {
      return _openBlock$5(), _createElementBlock$4(_Fragment$3, null, [
        (_openBlock$5(), _createBlock$2(_Suspense$1, null, {
          default: _withCtx$4(() => [
            _createVNode$5(_unref$5(Uk), _mergeProps$2({
              text: __props.title,
              rotation: [Math.PI / 2, Math.PI, -Math.PI / 2],
              position: [3.92, 0.99, -2.499]
            }, t3dConfig, {
              "cast-shadow": "",
              size: 0.5,
              font: "./plugins/freeDigitalHome/fonts/FZLanTingHeiS-UL-GB_Regular.json"
            }), {
              default: _withCtx$4(() => [
                _createElementVNode$4("TresMeshPhysicalMaterial", _normalizeProps$1(_guardReactiveProps$1(clearcoatState)), null, 16)
              ]),
              _: 1
            }, 16, ["text", "rotation"])
          ]),
          _: 1
        })),
        (_openBlock$5(), _createBlock$2(_Suspense$1, null, {
          default: _withCtx$4(() => [
            _createVNode$5(_unref$5(Uk), _mergeProps$2({
              text: `${__props.temperature} ℃ `,
              rotation: [Math.PI / 2, Math.PI, -Math.PI / 2],
              position: [1.8, 0.2, -2.499]
            }, t3dConfig, {
              "cast-shadow": "",
              size: 0.28,
              font: "./plugins/freeDigitalHome/fonts/FZLanTingHeiS-UL-GB_Regular.json"
            }), {
              default: _withCtx$4(() => [
                _createElementVNode$4("TresMeshPhysicalMaterial", _normalizeProps$1(_guardReactiveProps$1(clearcoatState)), null, 16)
              ]),
              _: 1
            }, 16, ["text", "rotation"])
          ]),
          _: 1
        })),
        (_openBlock$5(), _createBlock$2(_Suspense$1, null, {
          default: _withCtx$4(() => [
            _createVNode$5(_unref$5(Uk), _mergeProps$2({
              text: `${__props.humidity} % `,
              rotation: [Math.PI / 2, Math.PI, -Math.PI / 2],
              position: [2.36, 0.2, -2.499]
            }, t3dConfig, {
              "cast-shadow": "",
              size: 0.3,
              font: "./plugins/freeDigitalHome/fonts/FZLanTingHeiS-UL-GB_Regular.json"
            }), {
              default: _withCtx$4(() => [
                _createElementVNode$4("TresMeshPhysicalMaterial", _normalizeProps$1(_guardReactiveProps$1(clearcoatState)), null, 16)
              ]),
              _: 1
            }, 16, ["text", "rotation"])
          ]),
          _: 1
        }))
      ], 64);
    };
  }
});

const {reactive: reactive$1,ref: ref$1} = await importShared('vue');


const useHaswStore = defineStore('hasw', () => {
    const lights = reactive$1({
        living: true,
        bedA: true,
        bedB: true,
    });
    const tv = reactive$1({
        switch: true,
        live: '',
    });

    const infors = reactive$1({
        living: {
            temp: 16,
            hum: 30,
        },
        bedA: {
            temp: 16,
            hum: 30,
        },
        bedB: {
            temp: 16,
            hum: 30,
        },
    });

    return { lights, tv, infors }
});

const {defineComponent:_defineComponent$4} = await importShared('vue');

const {unref:_unref$4,createElementVNode:_createElementVNode$3,createVNode:_createVNode$4,openBlock:_openBlock$4,createElementBlock:_createElementBlock$3} = await importShared('vue');

const _hoisted_1$2 = ["object"];
const THREE$1 = await importShared('three');
const _sfc_main$4 = /* @__PURE__ */ _defineComponent$4({
  __name: "rooms",
  setup(__props) {
    const haswStore = useHaswStore();
    const { scene, nodes } = instance.getItem("rooms");
    const ma = new THREE$1.MeshPhysicalMaterial({ color: "#707070" });
    ma.reflectivity = 6;
    ma.ior = 1.2;
    ma.roughness = 1;
    ma.metalness = 0;
    ma.transparent = true;
    ma.opacity = 0.88;
    Object.values(nodes).forEach((node) => {
      node.material = ma;
    });
    return (_ctx, _cache) => {
      return _openBlock$4(), _createElementBlock$3("TresGroup", null, [
        _createElementVNode$3("primitive", {
          object: _unref$4(scene),
          scale: 1,
          position: [-8.832, -2.036, 2.174],
          rotation: [0, 0, 0]
        }, null, 8, _hoisted_1$2),
        _createVNode$4(_sfc_main$7, {
          temperature: _unref$4(haswStore).infors.living.temp,
          humidity: _unref$4(haswStore).infors.living.hum
        }, null, 8, ["temperature", "humidity"]),
        _createVNode$4(_sfc_main$6),
        _createVNode$4(_sfc_main$5)
      ]);
    };
  }
});

const {defineComponent:_defineComponent$3} = await importShared('vue');

const {createElementVNode:_createElementVNode$2,unref:_unref$3,normalizeClass:_normalizeClass$1,mergeProps:_mergeProps$1,withCtx:_withCtx$3,createVNode:_createVNode$3,Fragment:_Fragment$2,openBlock:_openBlock$3,createElementBlock:_createElementBlock$2} = await importShared('vue');

const _hoisted_1$1 = ["visible"];
const _hoisted_2$1 = ["visible"];
const _hoisted_3 = ["visible"];
const _sfc_main$3 = /* @__PURE__ */ _defineComponent$3({
  __name: "lights",
  setup(__props) {
    const haswStore = useHaswStore();
    const state = {
      wrapperClass: "illustrate2",
      as: "div",
      sprite: true,
      transform: true,
      distanceFactor: 3,
      center: true
    };
    const lightList = haswStore.lights;
    const clickked = (sel) => {
      lightList[sel] = !lightList[sel];
    };
    return (_ctx, _cache) => {
      return _openBlock$3(), _createElementBlock$2(_Fragment$2, null, [
        _cache[9] || (_cache[9] = _createElementVNode$2("TresAmbientLight", { intensity: 0.06 }, null, -1)),
        _createVNode$3(_unref$3(gz), _mergeProps$1(state, { position: [-2.1, 1.739, 2.88] }), {
          default: _withCtx$3(() => [
            _cache[4] || (_cache[4] = _createElementVNode$2("div", { class: "cStyle1 pos-relative text-white" }, null, -1)),
            _createElementVNode$2("div", {
              class: _normalizeClass$1(["parallelogram", { off: !_unref$3(lightList).living }])
            }, [
              _createElementVNode$2("span", {
                onClick: _cache[0] || (_cache[0] = ($event) => clickked("living"))
              }, "💡 客厅灯"),
              _cache[3] || (_cache[3] = _createElementVNode$2("div", { class: "contentDiv" }, "点击开关", -1))
            ], 2)
          ]),
          _: 1
        }, 16),
        _createVNode$3(_unref$3(gz), _mergeProps$1(state, { position: [3.445, 1.93, 4.281] }), {
          default: _withCtx$3(() => [
            _cache[6] || (_cache[6] = _createElementVNode$2("div", { class: "cStyle1 cRight pos-relative text-white" }, null, -1)),
            _createElementVNode$2("div", {
              class: _normalizeClass$1(["parallelogram cRight bedA", { off: !_unref$3(lightList).bedA }])
            }, [
              _createElementVNode$2("span", {
                onClick: _cache[1] || (_cache[1] = ($event) => clickked("bedA"))
              }, "💡 主卧灯"),
              _cache[5] || (_cache[5] = _createElementVNode$2("div", { class: "contentDiv" }, "点击开关", -1))
            ], 2)
          ]),
          _: 1
        }, 16),
        _createVNode$3(_unref$3(gz), _mergeProps$1(state, { position: [3.912, 1.532, -2.41] }), {
          default: _withCtx$3(() => [
            _cache[8] || (_cache[8] = _createElementVNode$2("div", { class: "cStyle1 cRight pos-relative text-white" }, null, -1)),
            _createElementVNode$2("div", {
              class: _normalizeClass$1(["parallelogram cRight bedB", { off: !_unref$3(lightList).bedB }])
            }, [
              _createElementVNode$2("span", {
                onClick: _cache[2] || (_cache[2] = ($event) => clickked("bedB"))
              }, "💡 次卧灯"),
              _cache[7] || (_cache[7] = _createElementVNode$2("div", { class: "contentDiv" }, "点击开关", -1))
            ], 2)
          ]),
          _: 1
        }, 16),
        _createElementVNode$2("TresPointLight", {
          color: "#D485FF",
          visible: _unref$3(lightList).living,
          position: [-2.1, 1.739, 2.88],
          intensity: 9.54,
          distance: 5.378,
          decay: 0
        }, null, 8, _hoisted_1$1),
        _createElementVNode$2("TresPointLight", {
          color: "#FFEE99",
          visible: _unref$3(lightList).bedA,
          position: [3.445, 1.93, 4.281],
          intensity: 10,
          distance: 3.478,
          decay: 0
        }, null, 8, _hoisted_2$1),
        _createElementVNode$2("TresPointLight", {
          color: "#ffa66b",
          visible: _unref$3(lightList).bedB,
          position: [3.912, 1.532, -2.41],
          intensity: 11,
          distance: 4.12,
          decay: 0.52
        }, null, 8, _hoisted_3)
      ], 64);
    };
  }
});

const {defineComponent:_defineComponent$2} = await importShared('vue');

const {unref:_unref$2,createVNode:_createVNode$2,withCtx:_withCtx$2,openBlock:_openBlock$2,createBlock:_createBlock$1} = await importShared('vue');
const _sfc_main$2 = /* @__PURE__ */ _defineComponent$2({
  __name: "env",
  setup(__props) {
    const { scene } = zr();
    scene.value.backgroundBlurriness = 1;
    return (_ctx, _cache) => {
      return _openBlock$2(), _createBlock$1(_unref$2(_sfc_main$8), {
        resolution: 512,
        background: true
      }, {
        default: _withCtx$2(() => [
          _createVNode$2(_unref$2(_sfc_main$9), {
            intensity: 40,
            "rotation-y": -Math.PI / 2,
            position: [3, 0, 2],
            scale: [1, 1, 1],
            color: "#333333"
          }, null, 8, ["rotation-y"]),
          _createVNode$2(_unref$2(_sfc_main$9), {
            intensity: 40,
            "rotation-y": -Math.PI / 2,
            position: [3, 0, -4],
            scale: [1, 1, 1],
            color: "#222222"
          }, null, 8, ["rotation-y"]),
          _createVNode$2(_unref$2(_sfc_main$9), {
            intensity: 40,
            "rotation-y": -Math.PI / 2,
            position: [3, 0, -2],
            scale: [1, 1, 1],
            color: "#333333"
          }, null, 8, ["rotation-y"]),
          _createVNode$2(_unref$2(_sfc_main$9), {
            intensity: 40,
            "rotation-y": -Math.PI / 2,
            position: [3, 0, 0],
            scale: [1, 1, 1],
            color: "#222222"
          }, null, 8, ["rotation-y"]),
          _createVNode$2(_unref$2(_sfc_main$9), {
            intensity: 40,
            "rotation-y": -Math.PI / 2,
            position: [3, 0, 2],
            scale: [1, 1, 1],
            color: "#333333"
          }, null, 8, ["rotation-y"]),
          _createVNode$2(_unref$2(_sfc_main$9), {
            intensity: 40,
            "rotation-y": -Math.PI / 2,
            position: [3, 0, 3],
            scale: [1, 1, 1],
            color: "#222222"
          }, null, 8, ["rotation-y"]),
          _createVNode$2(_unref$2(_sfc_main$9), {
            intensity: 40,
            "rotation-y": -Math.PI / 2,
            position: [3, 0, 6],
            scale: [1, 1, 1],
            color: "#333333"
          }, null, 8, ["rotation-y"])
        ]),
        _: 1
      });
    };
  }
});

const {withAsyncContext:_withAsyncContext,defineComponent:_defineComponent$1} = await importShared('vue');

const {unref:_unref$1,createElementVNode:_createElementVNode$1,normalizeClass:_normalizeClass,mergeProps:_mergeProps,withCtx:_withCtx$1,createVNode:_createVNode$1,Fragment:_Fragment$1,openBlock:_openBlock$1,createElementBlock:_createElementBlock$1} = await importShared('vue');

const _hoisted_1 = ["visible", "rotation"];
const _hoisted_2 = ["map"];
const {ref} = await importShared('vue');

const THREE = await importShared('three');
const _sfc_main$1 = /* @__PURE__ */ _defineComponent$1({
  __name: "tv",
  async setup(__props) {
    let __temp, __restore;
    const haswStore = useHaswStore();
    const tvon = haswStore.tv;
    const updateTexture = (pTexture) => {
      useTexture(tvon.live).then((newTexture) => {
        pTexture.value.image = newTexture.image;
        pTexture.needsUpdate = true;
      });
    };
    const texture = ref(null);
    if (tvon.live) {
      const textureLoader = new THREE.TextureLoader();
      textureLoader.setCrossOrigin("anonymous");
      texture.value = textureLoader.load(
        tvon.live,
        () => {
          console.log("Texture loaded");
        },
        void 0,
        async (err) => {
          console.error("Error loading texture:", err);
          tvon.live = "";
          texture.value = await nz("./plugins/freeDigitalHome/video/xiaomi.mp4", { loop: true });
        }
      );
    } else {
      texture.value = ([__temp, __restore] = _withAsyncContext(() => nz("./plugins/freeDigitalHome/video/xiaomi.mp4", { loop: true })), __temp = await __temp, __restore(), __temp);
    }
    texture.value.colorSpace = THREE.SRGBColorSpace;
    const clicktv = () => {
      tvon.switch = !tvon.switch;
    };
    const state = {
      wrapperClass: "illustrate2",
      as: "div",
      sprite: true,
      transform: true,
      distanceFactor: 3,
      center: true
    };
    const { onBeforeRender } = _l();
    let lastTime = 0;
    onBeforeRender(({ elapsed }) => {
      const cu = Math.floor(elapsed * 10);
      if (cu === lastTime) {
        return;
      }
      if (cu % 10 === 0) {
        lastTime = cu;
        if (tvon.live) {
          updateTexture(texture);
        }
      }
    });
    return (_ctx, _cache) => {
      return _openBlock$1(), _createElementBlock$1(_Fragment$1, null, [
        _createElementVNode$1("TresMesh", {
          visible: !_unref$1(tvon).switch,
          position: [0.58, 1.526, 4.67],
          rotation: [0, -Math.PI / 2, 0],
          renderOrder: 9999
        }, [
          _cache[0] || (_cache[0] = _createElementVNode$1("TresPlaneGeometry", { args: [1.36, 0.77] }, null, -1)),
          _createElementVNode$1("TresMeshBasicMaterial", { map: texture.value }, null, 8, _hoisted_2)
        ], 8, _hoisted_1),
        _createVNode$1(_unref$1(gz), _mergeProps(state, { position: [0.58, 1.526, 4.67] }), {
          default: _withCtx$1(() => [
            _cache[2] || (_cache[2] = _createElementVNode$1("div", { class: "cStyle1 pos-relative text-white" }, null, -1)),
            _createElementVNode$1("div", {
              class: _normalizeClass(["parallelogram tv", { off: _unref$1(tvon).switch }])
            }, [
              _createElementVNode$1("span", { onClick: clicktv }, "📺 电视"),
              _cache[1] || (_cache[1] = _createElementVNode$1("div", { class: "contentDiv" }, "点击开关", -1))
            ], 2)
          ]),
          _: 1
        }, 16)
      ], 64);
    };
  }
});

const {defineComponent:_defineComponent} = await importShared('vue');

const {unref:_unref,createVNode:_createVNode,createElementVNode:_createElementVNode,normalizeProps:_normalizeProps,guardReactiveProps:_guardReactiveProps,openBlock:_openBlock,createBlock:_createBlock,createCommentVNode:_createCommentVNode,Suspense:_Suspense,withCtx:_withCtx,Fragment:_Fragment,createElementBlock:_createElementBlock} = await importShared('vue');

const {SRGBColorSpace,BasicShadowMap,NoToneMapping} = await importShared('three');

const {reactive} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "demo",
  setup(__props) {
    const state = reactive({
      clearColor: "#000000",
      shadows: false,
      alpha: false,
      shadowMapType: BasicShadowMap,
      outputColorSpace: SRGBColorSpace,
      toneMapping: NoToneMapping,
      windowSize: true
    });
    const reflectorState = {
      reflectivity: 8,
      showGridHelper: false,
      scale: 6.6,
      mapUrl: "./plugins/freeDigitalHome/image/waterdudv.jpg"
    };
    const controlsState = reactive({
      enableDamping: true,
      dampingFactor: 0.05,
      enableZoom: true,
      // autoRotate: true,
      autoRotateSpeed: 2
    });
    instance.loadResources([{ functionName: "GLTFLoader", url: "./plugins/freeDigitalHome/models/floor_plan.glb", resourceID: "rooms" }]);
    return (_ctx, _cache) => {
      return _openBlock(), _createElementBlock(_Fragment, null, [
        _createVNode(_unref(loading), { useResourceManager: "" }),
        _createVNode(_unref(ol), _normalizeProps(_guardReactiveProps(state)), {
          default: _withCtx(() => [
            _cache[0] || (_cache[0] = _createElementVNode("TresPerspectiveCamera", {
              position: [15, 15, 15],
              fov: 45,
              near: 0.1,
              far: 1e3
            }, null, -1)),
            _createVNode(_unref(Kk), _normalizeProps(_guardReactiveProps(controlsState)), null, 16),
            _createVNode(_sfc_main$3),
            _unref(instance).hasAllFinished.value ? (_openBlock(), _createBlock(_sfc_main$4, { key: 0 })) : _createCommentVNode("", true),
            (_openBlock(), _createBlock(_Suspense, null, {
              default: _withCtx(() => [
                _createVNode(_sfc_main$1)
              ]),
              _: 1
            })),
            _createVNode(_unref(_sfc_main$a), _normalizeProps(_guardReactiveProps(reflectorState)), null, 16),
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
//# sourceMappingURL=demo.JvQF2hf11767105581793.js.map
