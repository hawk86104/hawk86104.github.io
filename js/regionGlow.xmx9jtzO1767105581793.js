import { importShared } from './index.BxB45aCK1767105581793.js';
import { Pane } from './tweakpane.Cvt5w0bb1767105581793.js';
import { _sfc_main as _sfc_main$1 } from './pagesShow.vue_vue_type_script_setup_true_lang.DfPQrWBQ1767105581793.js';
import { _sfc_main as _sfc_main$2 } from './regionGlow.vue_vue_type_script_setup_true_lang.BrZi8ehe1767105581793.js';

const {defineComponent:_defineComponent} = await importShared('vue');

const {createVNode:_createVNode,withCtx:_withCtx,openBlock:_openBlock,createBlock:_createBlock} = await importShared('vue');

const {reactive} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "regionGlow",
  setup(__props) {
    const regionGlowState = reactive({
      color: "#00ffdd",
      height: 26
    });
    const paneControl = new Pane({
      title: "区域边界发光",
      expanded: true
    });
    paneControl.addBinding(regionGlowState, "color", { label: "颜色" });
    paneControl.addBinding(regionGlowState, "height", { label: "高度", min: 0, max: 80, step: 1 });
    return (_ctx, _cache) => {
      return _openBlock(), _createBlock(_sfc_main$1, { ref: "pagesShowRef" }, {
        ability: _withCtx(() => [
          _createVNode(_sfc_main$2, {
            "position-y": 26,
            positionSrc: [[-7.3 * 40, 4.27 * 40], [-7.4 * 40, 10.05 * 40], [-4.9 * 40, 10.03 * 40], [-4.9 * 40, 4.46 * 40], [-7.3 * 40, 4.27 * 40]]
          }),
          _createVNode(_sfc_main$2, {
            "position-y": regionGlowState.height,
            color: regionGlowState.color,
            positionSrc: [
              [0.27 * 40, -1.19 * 40],
              [0.32 * 40, -5.5 * 40],
              [-7.59 * 40, -5.9 * 40],
              [-7.6 * 40, -1.3 * 40],
              [0.27 * 40, -1.19 * 40]
            ]
          }, null, 8, ["position-y", "color"]),
          _createVNode(_sfc_main$2, {
            position: [500, 86, 300],
            color: "#0054ff",
            positionSrc: [
              [0.27 * 40, -1.19 * 40],
              [0.32 * 40, -5.5 * 40],
              [-7.59 * 40, -5.9 * 40],
              [-8.59 * 40, -3.9 * 40],
              [-7.6 * 40, -1.3 * 40],
              [-2.6 * 40, 1.3 * 40],
              [2.6 * 40, -1.3 * 40],
              [0.27 * 40, -1.19 * 40]
            ]
          })
        ]),
        _: 1
      }, 512);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=regionGlow.xmx9jtzO1767105581793.js.map
