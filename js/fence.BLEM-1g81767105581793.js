import { importShared } from './index.BxB45aCK1767105581793.js';
import { Pane } from './tweakpane.Cvt5w0bb1767105581793.js';
import { _sfc_main as _sfc_main$1 } from './pagesShow.vue_vue_type_script_setup_true_lang.DfPQrWBQ1767105581793.js';
import { _sfc_main as _sfc_main$2 } from './rippleMesh.vue_vue_type_script_setup_true_lang.BMAAJsoC1767105581793.js';

const {defineComponent:_defineComponent} = await importShared('vue');

const {createVNode:_createVNode,mergeProps:_mergeProps,withCtx:_withCtx,openBlock:_openBlock,createBlock:_createBlock} = await importShared('vue');

const {ref,watch,reactive} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "fence",
  setup(__props) {
    const pagesShowRef = ref();
    watch(
      () => pagesShowRef.value?.contextReady,
      (newVal) => {
        if (newVal) {
          pagesShowRef.value.context.context.camera.activeCamera.value.position.set(880, 660, 800);
        }
      }
    );
    const typeState = reactive({
      color: "#00ffdd",
      opacity: 0.8,
      num: 8,
      speed: 0.2
    });
    const paneControl = new Pane({
      title: "围墙效果",
      expanded: true
    });
    paneControl.addBinding(typeState, "color", { label: "颜色" });
    paneControl.addBinding(typeState, "opacity", {
      label: "透明度",
      min: 0,
      max: 1,
      step: 0.1
    });
    paneControl.addBinding(typeState, "speed", {
      label: "滚动速度",
      min: 0,
      max: 1,
      step: 0.1
    });
    paneControl.addBinding(typeState, "num", {
      label: "条纹数",
      min: 0,
      max: 20,
      step: 1
    });
    return (_ctx, _cache) => {
      return _openBlock(), _createBlock(_sfc_main$1, {
        ref_key: "pagesShowRef",
        ref: pagesShowRef
      }, {
        ability: _withCtx(() => [
          _createVNode(_sfc_main$2, {
            "position-y": 20,
            positionSrc: [{ x: -7.3 * 40, y: 4.27 * 40 }, { x: -7.4 * 40, y: 10.05 * 40 }, { x: -4.9 * 40, y: 10.03 * 40 }, { x: -4.9 * 40, y: 4.46 * 40 }, { x: -7.3 * 40, y: 4.27 * 40 }],
            height: 180
          }),
          _createVNode(_sfc_main$2, _mergeProps({
            "position-y": 20,
            positionSrc: [{ x: 0.27 * 40, y: -1.19 * 40 }, { x: 0.32 * 40, y: -5.5 * 40 }, { x: -7.59 * 40, y: -5.9 * 40 }, { x: -7.6 * 40, y: -1.3 * 40 }, { x: 0.27 * 40, y: -1.19 * 40 }]
          }, typeState), null, 16)
        ]),
        _: 1
      }, 512);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=fence.BLEM-1g81767105581793.js.map
