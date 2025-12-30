import { importShared } from './index.BxB45aCK1767105581793.js';
import { T_, Gy, Hy, _sfc_main as _sfc_main$1 } from './DevTDTTiles.vue_vue_type_script_setup_true_lang.xgh0_FRH1767105581793.js';
import './tileMapBuildingsMesh.vue_vue_type_script_setup_true_lang.BAhJ7QKa1767105581793.js';
import { _sfc_main as _sfc_main$2 } from './tilesCom.vue_vue_type_script_setup_true_lang.F-6N_4461767105581793.js';
import './obliquePhoto.vue_vue_type_script_setup_true_lang.BUTwkNtD1767105581793.js';
import './mapBoxShow.vue_vue_type_script_setup_true_lang.Bn2M8Kh51767105581793.js';
import './informationDiv.BpVz_Xf81767105581793.js';
import './utils.uRDybWT71767105581793.js';
import { Pane } from './tweakpane.Cvt5w0bb1767105581793.js';

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,unref:_unref,createVNode:_createVNode,mergeProps:_mergeProps,resolveComponent:_resolveComponent,withCtx:_withCtx,openBlock:_openBlock,createBlock:_createBlock} = await importShared('vue');

const {SRGBColorSpace,BasicShadowMap,NoToneMapping} = await importShared('three');

const {reactive,ref} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "case-tvt-3dtilesBuildings",
  setup(__props) {
    const state = reactive({
      clearColor: "#201919",
      shadows: true,
      alpha: false,
      shadowMapType: BasicShadowMap,
      outputColorSpace: SRGBColorSpace,
      toneMapping: NoToneMapping
    });
    const sceneConfig = ref({
      effectProps: {
        enabled: false,
        focusArea: 0.7,
        feather: 0.1
      },
      ambientLight: {
        color: "#fff",
        intensity: 1
      },
      directionalLight: {
        color: "#fff",
        intensity: 2,
        position: [-1500, 500, 500]
      },
      background: "/plugins/earthSample/image/menuA/bg-img.png"
    });
    const cameraPosition = ref({
      heading: 102,
      pitch: -51,
      distance: 5368,
      longitude: 113.95,
      latitude: 22.53
    });
    const configState = {
      tilesUrl: "https://jdvop.oss-cn-qingdao.aliyuncs.com/mapv-data/titleset/sz_ns/tileset.json",
      isRotation: false,
      isRranslation: false,
      bulidingsColor: "#ffffff",
      topColor: "#82e8b3",
      lightColor: "#00f843",
      borderWidth: 8.5,
      opacity: 0.75,
      gradient: true,
      speed: 1.5,
      lineOpacity: 1,
      linewidth: 0.38,
      lineColor: "#954200"
    };
    const paneControl = new Pane();
    paneControl.addBinding(configState, "bulidingsColor", { label: "建筑物颜色" });
    paneControl.addBinding(configState, "topColor", { label: "顶部颜色" });
    paneControl.addBinding(configState, "gradient", { label: "是否渐变色" });
    paneControl.addBinding(configState, "lightColor", { label: "跑光颜色" });
    paneControl.addBinding(configState, "speed", {
      label: "跑光速度",
      min: -2,
      max: 2,
      step: 0.01
    });
    paneControl.addBinding(configState, "borderWidth", {
      label: "跑光宽度",
      min: 0,
      max: 20,
      step: 0.1
    });
    paneControl.addBinding(configState, "opacity", {
      label: "透明度",
      min: 0,
      max: 1,
      step: 0.01
    });
    paneControl.addBinding(configState, "lineColor", { label: "边框颜色" });
    paneControl.addBinding(configState, "linewidth", {
      label: "边框宽度",
      min: 0,
      max: 5,
      step: 0.01
    });
    paneControl.addBinding(configState, "lineOpacity", {
      label: "边框透明度",
      min: 0,
      max: 1,
      step: 0.01
    });
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createBlock(_component_TresCanvas, _mergeProps(state, { "window-size": "" }), {
        default: _withCtx(() => [
          _cache[1] || (_cache[1] = _createElementVNode("TresPerspectiveCamera", {
            fov: 45,
            near: 0.1,
            far: 1e3,
            "look-at": [0, 0, 0]
          }, null, -1)),
          _createVNode(_unref(T_)),
          _createVNode(_unref(Gy), {
            position: cameraPosition.value,
            "onUpdate:position": _cache[0] || (_cache[0] = ($event) => cameraPosition.value = $event),
            "min-distance": 1
          }, null, 8, ["position"]),
          _createVNode(_unref(Hy), { sceneConfig: sceneConfig.value }, null, 8, ["sceneConfig"]),
          _createVNode(_sfc_main$1),
          _createVNode(_unref(_sfc_main$2), _mergeProps(configState, { position: [500, 100, 300] }), null, 16)
        ]),
        _: 1
      }, 16);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=case-tvt-3dtilesBuildings.DFg4DB0A1767105581793.js.map
