import { importShared } from './index.BxB45aCK1767105581793.js';
import { Pane } from './tweakpane.Cvt5w0bb1767105581793.js';
import { _sfc_main as _sfc_main$1 } from './pagesShow.vue_vue_type_script_setup_true_lang.DfPQrWBQ1767105581793.js';
import { _sfc_main as _sfc_main$2 } from './fencePlus.vue_vue_type_script_setup_true_lang.CoJnUgMe1767105581793.js';

const {defineComponent:_defineComponent} = await importShared('vue');

const {mergeProps:_mergeProps,createVNode:_createVNode,withCtx:_withCtx,openBlock:_openBlock,createBlock:_createBlock} = await importShared('vue');

const {ref,watch,reactive} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "fencePlusPage",
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
      width: 100,
      height: 100,
      depth: 100,
      color: "#00ffdd",
      opacity: 1,
      num: 6,
      thickness: 0.01,
      speed: 0.2,
      room: 0.7
    });
    const paneControl = new Pane({
      title: "围墙高级效果",
      expanded: true
    });
    paneControl.addBinding(typeState, "width", {
      label: "宽",
      min: 10,
      max: 200,
      step: 1
    });
    paneControl.addBinding(typeState, "depth", {
      label: "长",
      min: 10,
      max: 200,
      step: 1
    });
    paneControl.addBinding(typeState, "height", {
      label: "高",
      min: 10,
      max: 200,
      step: 1
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
      min: -1,
      max: 1,
      step: 0.01
    });
    paneControl.addBinding(typeState, "thickness", {
      label: "粗细",
      min: 0.01,
      max: 1,
      step: 0.01
    });
    paneControl.addBinding(typeState, "num", {
      label: "条纹数",
      min: 0,
      max: 20,
      step: 1
    });
    paneControl.addBinding(typeState, "room", {
      label: "条纹空间占比",
      min: 0,
      max: 1,
      step: 0.01
    });
    return (_ctx, _cache) => {
      return _openBlock(), _createBlock(_sfc_main$1, {
        ref_key: "pagesShowRef",
        ref: pagesShowRef
      }, {
        ability: _withCtx(() => [
          _createVNode(_sfc_main$2, _mergeProps(typeState, {
            "position-y": 23,
            scale: 2
          }), null, 16)
        ]),
        _: 1
      }, 512);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=fencePlusPage.CfBWXI8s1767105581793.js.map
