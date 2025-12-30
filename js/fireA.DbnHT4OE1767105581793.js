import { importShared } from './index.BxB45aCK1767105581793.js';
import { Pane } from './tweakpane.Cvt5w0bb1767105581793.js';
import { _sfc_main as _sfc_main$1 } from './default.vue_vue_type_script_setup_true_lang.DQGKkIwV1767105581793.js';
import { _sfc_main as _sfc_main$2 } from './pagesShow.vue_vue_type_script_setup_true_lang.DfPQrWBQ1767105581793.js';
import { _sfc_main as _sfc_main$3 } from './fireA.vue_vue_type_script_setup_true_lang.K7p2c56E1767105581793.js';

const {defineComponent:_defineComponent} = await importShared('vue');

const {createVNode:_createVNode,mergeProps:_mergeProps,withCtx:_withCtx,Fragment:_Fragment,openBlock:_openBlock,createElementBlock:_createElementBlock} = await importShared('vue');
const {ref,reactive,watch} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "fireA",
  setup(__props) {
    const paneControl = new Pane({
      title: "火-参数",
      expanded: true
    });
    const fireAState = reactive({
      fireScale: 60,
      magnitude: 1.3,
      lacunarity: 2,
      gain: 1
    });
    paneControl.addBinding(fireAState, "fireScale", {
      label: "大小",
      min: 10,
      max: 300,
      step: 10
    });
    paneControl.addBinding(fireAState, "magnitude", {
      label: "magnitude",
      min: 0.05,
      max: 3,
      step: 0.05
    });
    paneControl.addBinding(fireAState, "lacunarity", {
      label: "lacunarity",
      min: 0.1,
      max: 10,
      step: 0.2
    });
    paneControl.addBinding(fireAState, "gain", {
      label: "gain",
      min: 0.1,
      max: 2,
      step: 0.1
    });
    const pagesShowRef = ref();
    watch(
      () => pagesShowRef.value?.contextReady,
      (newVal) => {
        if (newVal) {
          pagesShowRef.value.context.context.camera.activeCamera.value.position.set(580, 360, 500);
        }
      }
    );
    return (_ctx, _cache) => {
      return _openBlock(), _createElementBlock(_Fragment, null, [
        _createVNode(_sfc_main$1),
        _createVNode(_sfc_main$2, {
          ref_key: "pagesShowRef",
          ref: pagesShowRef
        }, {
          ability: _withCtx(() => [
            _createVNode(_sfc_main$3, _mergeProps(fireAState, { position: [200, 19, 120] }), null, 16)
          ]),
          _: 1
        }, 512)
      ], 64);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=fireA.DbnHT4OE1767105581793.js.map
