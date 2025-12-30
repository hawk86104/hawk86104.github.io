import { importShared } from './index.BxB45aCK1767105581793.js';
import { Pane } from './tweakpane.Cvt5w0bb1767105581793.js';
import { _sfc_main as _sfc_main$1 } from './pagesShow.vue_vue_type_script_setup_true_lang.DfPQrWBQ1767105581793.js';
import { _sfc_main as _sfc_main$2 } from './roadLight.vue_vue_type_script_setup_true_lang.D6rNsF3j1767105581793.js';

const {defineComponent:_defineComponent} = await importShared('vue');

const {createVNode:_createVNode,Suspense:_Suspense,withCtx:_withCtx,openBlock:_openBlock,createBlock:_createBlock,mergeProps:_mergeProps} = await importShared('vue');
const {reactive} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "roadLines",
  setup(__props) {
    const roadsState = reactive({
      color: "#ffffff",
      radius: 2,
      speed: 2
    });
    const paneControl = new Pane({
      title: "道路效果",
      expanded: true
    });
    paneControl.addBinding(roadsState, "color", { label: "颜色" });
    paneControl.addBinding(roadsState, "speed", {
      label: "速度",
      min: 0.1,
      max: 5,
      step: 0.1
    });
    paneControl.addBinding(roadsState, "radius", {
      label: "粗细",
      min: 1,
      max: 8,
      step: 0.1
    });
    return (_ctx, _cache) => {
      return _openBlock(), _createBlock(_sfc_main$1, {
        showAxesHelper: false,
        showBuildings: true,
        autoRotate: false,
        showGridHelper: false
      }, {
        ability: _withCtx(() => [
          (_openBlock(), _createBlock(_Suspense, null, {
            default: _withCtx(() => [
              _createVNode(_sfc_main$2, {
                radius: 3,
                scale: 1.5083171193254858,
                geoJson: "plugins/digitalCity/geojson/primary.geojson",
                "rotation-y": -0.3866683251512052,
                position: [1837.0641427711184, 30, -457.0929823910632]
              })
            ]),
            _: 1
          })),
          (_openBlock(), _createBlock(_Suspense, null, {
            default: _withCtx(() => [
              _createVNode(_sfc_main$2, _mergeProps(roadsState, {
                geoJson: "plugins/digitalCity/geojson/secondary.geojson",
                "rotation-y": -0.40417060831376245,
                scale: 1.5083171193254858,
                position: [1835.1352780974694, 30, -358.6036261374844]
              }), null, 16)
            ]),
            _: 1
          }))
        ]),
        _: 1
      });
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=roadLines.C6nIMKjP1767105581793.js.map
