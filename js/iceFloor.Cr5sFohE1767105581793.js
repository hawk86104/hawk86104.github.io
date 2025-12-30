import { importShared, Kk } from './index.BxB45aCK1767105581793.js';
import { Pane } from './tweakpane.Cvt5w0bb1767105581793.js';
import { _sfc_main as _sfc_main$1 } from './iceFloor.vue_vue_type_script_setup_true_lang.Bffk1fiK1767105581793.js';

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,unref:_unref,createVNode:_createVNode,normalizeProps:_normalizeProps,guardReactiveProps:_guardReactiveProps,Suspense:_Suspense,withCtx:_withCtx,openBlock:_openBlock,createBlock:_createBlock,resolveComponent:_resolveComponent,mergeProps:_mergeProps} = await importShared('vue');
const {reactive} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "iceFloor",
  setup(__props) {
    const gl = {
      clearColor: "#010A13",
      antialias: true
    };
    const iceState = reactive({
      uParallaxDistance: 1,
      uTintColor: "#666666",
      // 偏色，默认白色
      uTintStrength: 0.1,
      // 偏色强度
      uStyle: 1
      // 纹理样式
    });
    const paneControl = new Pane();
    paneControl.addBinding(iceState, "uTintColor", {
      label: "偏色"
    });
    paneControl.addBinding(iceState, "uTintStrength", {
      label: "偏色强度",
      min: 0,
      max: 1,
      step: 0.01
    });
    paneControl.addBinding(iceState, "uParallaxDistance", {
      label: "视觉差强度",
      min: 0.01,
      max: 2,
      step: 0.01
    });
    paneControl.addBinding(iceState, "uStyle", {
      label: "纹理样式",
      options: {
        样式1: 0,
        样式2: 1,
        样式3: 2,
        样式4: 3,
        样式5: 4,
        样式6: 5,
        样式7: 6
      }
    });
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createBlock(_component_TresCanvas, _mergeProps(gl, { "window-size": "" }), {
        default: _withCtx(() => [
          _cache[0] || (_cache[0] = _createElementVNode("TresPerspectiveCamera", {
            position: [4, 8, 8],
            fov: 60,
            near: 0.1
          }, null, -1)),
          _cache[1] || (_cache[1] = _createElementVNode("TresAmbientLight", { intensity: 1 }, null, -1)),
          _createVNode(_unref(Kk)),
          (_openBlock(), _createBlock(_Suspense, null, {
            default: _withCtx(() => [
              _createVNode(_sfc_main$1, _normalizeProps(_guardReactiveProps(iceState)), null, 16)
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
//# sourceMappingURL=iceFloor.Cr5sFohE1767105581793.js.map
