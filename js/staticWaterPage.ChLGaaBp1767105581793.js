import { importShared, ol, Kk, tk } from './index.BxB45aCK1767105581793.js';
import { Pane } from './tweakpane.Cvt5w0bb1767105581793.js';
import { _sfc_main as _sfc_main$1 } from './staticWater.vue_vue_type_script_setup_true_lang.4m35QlAa1767105581793.js';

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,unref:_unref,createVNode:_createVNode,Suspense:_Suspense,withCtx:_withCtx,openBlock:_openBlock,createBlock:_createBlock,normalizeProps:_normalizeProps,guardReactiveProps:_guardReactiveProps} = await importShared('vue');

const {reactive} = await importShared('vue');

const {SRGBColorSpace,BasicShadowMap,NoToneMapping} = await importShared('three');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "staticWaterPage",
  setup(__props) {
    const state = {
      clearColor: "#201919",
      shadows: true,
      alpha: false,
      windowSize: true,
      shadowMapType: BasicShadowMap,
      outputColorSpace: SRGBColorSpace,
      toneMapping: NoToneMapping
    };
    const modepath = `${"https://opensource.cdn.icegl.cn"}/images/water/belfast_sunset_puresky_1k.hdr`;
    const waterState = reactive({
      waterColor: "#2CC2E8",
      metalness: 0.64,
      roughness: 0
    });
    const paneControl = new Pane();
    paneControl.addBinding(waterState, "waterColor", {
      label: "水体颜色"
    });
    paneControl.addBinding(waterState, "metalness", {
      label: "金属度",
      min: 0,
      max: 1,
      step: 0.01
    });
    paneControl.addBinding(waterState, "roughness", {
      label: "粗糙度",
      min: 0,
      max: 1,
      step: 0.01
    });
    return (_ctx, _cache) => {
      return _openBlock(), _createBlock(_unref(ol), _normalizeProps(_guardReactiveProps(state)), {
        default: _withCtx(() => [
          _cache[0] || (_cache[0] = _createElementVNode("TresPerspectiveCamera", {
            position: [6, 3, -2],
            fov: 75,
            near: 0.01,
            far: 1e3
          }, null, -1)),
          _createVNode(_unref(Kk)),
          (_openBlock(), _createBlock(_Suspense, null, {
            default: _withCtx(() => [
              _createVNode(_unref(tk), {
                background: true,
                files: modepath
              })
            ]),
            _: 1
          })),
          _createVNode(_sfc_main$1, _normalizeProps(_guardReactiveProps(waterState)), null, 16)
        ]),
        _: 1
      }, 16);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=staticWaterPage.ChLGaaBp1767105581793.js.map
