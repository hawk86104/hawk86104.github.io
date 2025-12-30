import { importShared, qiankunWindow_1, Kk } from './index.BxB45aCK1767105581793.js';
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
import { _sfc_main as _sfc_main$1 } from './index.vue_vue_type_script_setup_true_lang.CMAjMlgU1767105581793.js';

const {defineComponent:_defineComponent} = await importShared('vue');

const {unref:_unref,createElementVNode:_createElementVNode,createVNode:_createVNode,normalizeProps:_normalizeProps,guardReactiveProps:_guardReactiveProps,mergeProps:_mergeProps,Suspense:_Suspense,withCtx:_withCtx,openBlock:_openBlock,createBlock:_createBlock,resolveComponent:_resolveComponent,normalizeStyle:_normalizeStyle,createElementBlock:_createElementBlock,createCommentVNode:_createCommentVNode,Fragment:_Fragment} = await importShared('vue');

const _hoisted_1 = {
  key: 0,
  class: "text-center text-white w-full absolute"
};
const {reactive,ref,onMounted} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "other",
  setup(__props) {
    const reflectorState = reactive({
      reflectivity: 0.8,
      showGridHelper: false,
      scale: 1
    });
    const yuriBrainConfig = reactive({
      tubesColor: "#59b5ff",
      particlesColor: "#97ffcc",
      speed: 1
    });
    const height = ref("auto");
    onMounted(() => {
      const parentElement = document.querySelector(".app-main");
      if (parentElement) {
        height.value = `${parentElement.clientHeight}px`;
      }
    });
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createElementBlock(_Fragment, null, [
        _createVNode(_component_TresCanvas, {
          clearColor: "#000",
          windowSize: !_unref(qiankunWindow_1).__POWERED_BY_QIANKUN__,
          style: _normalizeStyle({ height: height.value })
        }, {
          default: _withCtx(() => [
            _cache[0] || (_cache[0] = _createElementVNode("TresPerspectiveCamera", {
              position: [6, 3, 0],
              fov: 45,
              near: 0.1,
              far: 1e4
            }, null, -1)),
            _createVNode(_unref(Kk), {
              enableDamping: "",
              autoRotate: ""
            }),
            _createVNode(_sfc_main$1, _normalizeProps(_guardReactiveProps(yuriBrainConfig)), null, 16),
            (_openBlock(), _createBlock(_Suspense, null, {
              default: _withCtx(() => [
                _createVNode(_unref(_sfc_main$2), _mergeProps({ position: [0, -1.36, 0] }, reflectorState), null, 16)
              ]),
              _: 1
            }))
          ]),
          _: 1
        }, 8, ["windowSize", "style"]),
        !_unref(qiankunWindow_1).__POWERED_BY_QIANKUN__ ? (_openBlock(), _createElementBlock("h1", _hoisted_1, "请通过qiankun主程序访问此页面")) : _createCommentVNode("", true)
      ], 64);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=other.BP_FlEKR1767105581793.js.map
