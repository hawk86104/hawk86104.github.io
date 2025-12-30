import { importShared, Yk } from './index.BxB45aCK1767105581793.js';
import { Pane } from './tweakpane.Cvt5w0bb1767105581793.js';
import './reflectorDiffuse.vue_vue_type_script_setup_true_lang.BuW1EemC1767105581793.js';
import { _sfc_main as _sfc_main$2 } from './reflectorDUDV.vue_vue_type_script_setup_true_lang.Cce3m26z1767105581793.js';
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
import { _sfc_main as _sfc_main$1 } from './tilesCom.vue_vue_type_script_setup_true_lang.F-6N_4461767105581793.js';
import { is3DTilesetJson } from './utils.uRDybWT71767105581793.js';

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,unref:_unref,createVNode:_createVNode,normalizeProps:_normalizeProps,guardReactiveProps:_guardReactiveProps,mergeProps:_mergeProps,resolveComponent:_resolveComponent,withCtx:_withCtx,openBlock:_openBlock,createBlock:_createBlock} = await importShared('vue');

const {reactive,ref} = await importShared('vue');

const THREE = await importShared('three');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "3DTilesComPage",
  setup(__props) {
    const state = {
      clearColor: "#201919",
      windowSize: true,
      shadows: true,
      toneMapping: THREE.ACESFilmicToneMapping,
      toneMappingExposure: 1,
      shadowMapType: THREE.PCFSoftShadowMap
    };
    const reflectorState = {
      reflectivity: 1,
      showGridHelper: false,
      scale: 500
    };
    const configState = reactive({
      tilesUrl: "https://jdvop.oss-cn-qingdao.aliyuncs.com/mapv-data/titleset/sz_ns/tileset.json",
      bulidingsColor: "#447eff",
      topColor: "#00efd1",
      lightColor: "#99ff9f",
      borderWidth: 5,
      opacity: 1,
      gradient: true,
      speed: 1,
      lineOpacity: 1,
      linewidth: 1,
      lineColor: "#000000"
    });
    const tilesUrl = ref(configState.tilesUrl);
    const paneControl = new Pane();
    paneControl.addBinding(tilesUrl, "value", { label: "tiles地址" });
    const btn = paneControl.addButton({
      title: "应用",
      label: "从url读取tiles"
    });
    btn.on("click", () => {
      if (tilesUrl.value === configState.tilesUrl) {
        return;
      }
      paneControl.disabled = true;
      is3DTilesetJson(tilesUrl.value).then((isValid) => {
        if (isValid) {
          configState.tilesUrl = tilesUrl.value;
        } else {
          alert("这不是一个有效的3D Tiles地址");
        }
        paneControl.disabled = false;
      });
    });
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
          _cache[0] || (_cache[0] = _createElementVNode("TresPerspectiveCamera", {
            position: [400, 400, 400],
            fov: 60,
            near: 1,
            far: 2e4
          }, null, -1)),
          _createVNode(_unref(Yk)),
          _cache[1] || (_cache[1] = _createElementVNode("TresAmbientLight", { intensity: 1 }, null, -1)),
          _cache[2] || (_cache[2] = _createElementVNode("TresDirectionalLight", {
            position: [1, 2, 3],
            intensity: 1.25
          }, null, -1)),
          _cache[3] || (_cache[3] = _createElementVNode("TresAxesHelper", { args: [100] }, null, -1)),
          _createVNode(_sfc_main$1, _normalizeProps(_guardReactiveProps(configState)), null, 16),
          _createVNode(_unref(_sfc_main$2), _mergeProps({ position: [0, -120, 0] }, reflectorState), null, 16)
        ]),
        _: 1
      }, 16);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=3DTilesComPage.BVT4GXfP1767105581793.js.map
