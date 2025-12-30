import { importShared, Kk } from './index.BxB45aCK1767105581793.js';
import { OBJLoader, loadOBJ } from './util.B1yBATjg1767105581793.js';
import { Pane } from './tweakpane.Cvt5w0bb1767105581793.js';
import { _sfc_main$6 as _sfc_main$1 } from './generalFont.vue_vue_type_script_setup_true_lang.DqoG1H6g1767105581793.js';
import './default.vue_vue_type_script_setup_true_lang.DQGKkIwV1767105581793.js';
import './three-mesh-ui.module.CjQAT-M_1767105581793.js';
import './domPanel.vue_vue_type_style_index_0_lang.dV59iE041767105581793.js';
import { _sfc_main as _sfc_main$2 } from './cloudPoints.vue_vue_type_script_setup_true_lang.BO607L2f1767105581793.js';
import { _sfc_main as _sfc_main$3, _sfc_main$1 as _sfc_main$4 } from './bubblesEffect.vue_vue_type_script_setup_true_lang.Ddg5fmvx1767105581793.js';

const {withAsyncContext:_withAsyncContext,defineComponent:_defineComponent} = await importShared('vue');

const {unref:_unref,createVNode:_createVNode,createElementVNode:_createElementVNode,normalizeProps:_normalizeProps,guardReactiveProps:_guardReactiveProps,mergeProps:_mergeProps,openBlock:_openBlock,createBlock:_createBlock,createCommentVNode:_createCommentVNode,resolveComponent:_resolveComponent,withCtx:_withCtx,Fragment:_Fragment,createElementBlock:_createElementBlock} = await importShared('vue');

const _hoisted_1 = { position: [0, 120, 0] };
const {SRGBColorSpace,BasicShadowMap,NoToneMapping} = await importShared('three');

const {reactive,toRaw} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "digitalBrain",
  async setup(__props) {
    let __temp, __restore;
    const cloudPointsState = reactive({
      color: "#fff",
      show: true,
      opacity: 1
    });
    const paneControl = new Pane({ title: "参数" });
    paneControl.addBinding(cloudPointsState, "show", { label: "点云显示" });
    paneControl.addBinding(cloudPointsState, "color", { label: "点云颜色" });
    paneControl.addBinding(cloudPointsState, "opacity", {
      label: "点云透明度",
      min: 0,
      max: 1,
      step: 0.1
    });
    const xRayState = reactive({
      color: "#84ccff",
      show: true,
      opacity: 1
    });
    paneControl.addBinding(xRayState, "show", { label: "脑轮廓显示" });
    paneControl.addBinding(xRayState, "color", { label: "脑轮廓颜色" });
    paneControl.addBinding(xRayState, "opacity", {
      label: "脑轮廓透明度",
      min: 0,
      max: 1,
      step: 0.1
    });
    const bubblesState = reactive({
      color: "#9e00af",
      show: true,
      opacity: 1
    });
    paneControl.addBinding(bubblesState, "show", { label: "脑组织显示" });
    paneControl.addBinding(bubblesState, "color", { label: "脑组织颜色" });
    paneControl.addBinding(bubblesState, "opacity", {
      label: "脑组织透明度",
      min: 0,
      max: 1,
      step: 0.1
    });
    const path = `${"https://opensource.cdn.icegl.cn"}/model/medical/brainparts.OBJ`;
    const loader = new OBJLoader();
    const model = ([__temp, __restore] = _withAsyncContext(() => loadOBJ(path, loader)), __temp = await __temp, __restore(), __temp);
    const state = reactive({
      clearColor: "#000",
      shadows: true,
      alpha: false,
      shadowMapType: BasicShadowMap,
      outputColorSpace: SRGBColorSpace,
      toneMapping: NoToneMapping
    });
    const controlsState = reactive({
      autoRotate: true,
      autoRotateSpeed: 2
    });
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createElementBlock(_Fragment, null, [
        _createVNode(_unref(_sfc_main$1)),
        _createVNode(_component_TresCanvas, _mergeProps(state, { "window-size": "" }), {
          default: _withCtx(() => [
            _cache[0] || (_cache[0] = _createElementVNode("TresPerspectiveCamera", {
              position: [100, 400, 500],
              fov: 45,
              near: 0.1,
              far: 1e4,
              "look-at": [0, 0, 0]
            }, null, -1)),
            _createVNode(_unref(Kk), _normalizeProps(_guardReactiveProps(controlsState)), null, 16),
            _cache[1] || (_cache[1] = _createElementVNode("TresAmbientLight", { intensity: 0.5 }, null, -1)),
            _createElementVNode("TresGroup", _hoisted_1, [
              cloudPointsState.show ? (_openBlock(), _createBlock(_sfc_main$2, _mergeProps({
                key: 0,
                model: toRaw(_unref(model))
              }, cloudPointsState), null, 16, ["model"])) : _createCommentVNode("", true),
              xRayState.show ? (_openBlock(), _createBlock(_sfc_main$3, _mergeProps({
                key: 1,
                model: toRaw(_unref(model))
              }, xRayState), null, 16, ["model"])) : _createCommentVNode("", true),
              bubblesState.show ? (_openBlock(), _createBlock(_sfc_main$4, _mergeProps({
                key: 2,
                model: toRaw(_unref(model))
              }, bubblesState), null, 16, ["model"])) : _createCommentVNode("", true)
            ]),
            _cache[2] || (_cache[2] = _createElementVNode("TresGridHelper", { args: [400, 10] }, null, -1))
          ]),
          _: 1
        }, 16)
      ], 64);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=digitalBrain.C1QOrlS61767105581793.js.map
