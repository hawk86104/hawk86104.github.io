import { importShared } from './index.BxB45aCK1767105581793.js';
import { Pane } from './tweakpane.Cvt5w0bb1767105581793.js';
import { _sfc_main as _sfc_main$1 } from './default.vue_vue_type_script_setup_true_lang.DQGKkIwV1767105581793.js';
import { _sfc_main as _sfc_main$2 } from './pagesShow.vue_vue_type_script_setup_true_lang.DfPQrWBQ1767105581793.js';
import { _sfc_main as _sfc_main$3 } from './precipitation.vue_vue_type_script_setup_true_lang.DHN0dZRK1767105581793.js';

const {defineComponent:_defineComponent} = await importShared('vue');

const {createVNode:_createVNode,normalizeProps:_normalizeProps,guardReactiveProps:_guardReactiveProps,Suspense:_Suspense,withCtx:_withCtx,openBlock:_openBlock,createBlock:_createBlock,Fragment:_Fragment,createElementBlock:_createElementBlock} = await importShared('vue');

const {ref,watch,reactive,toRefs} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "weather",
  setup(__props) {
    const pagesShowRef = ref();
    watch(
      () => pagesShowRef.value?.contextReady,
      (newVal) => {
        if (newVal) {
          pagesShowRef.value.context.context.camera.activeCamera.value.position.set(750, 500, 800);
        }
      }
    );
    const precipitationState = reactive({
      speed: 12,
      size: 10,
      count: 6e3,
      color: "#fff",
      type: "snow"
      // snow rain point
    });
    const areaXYZ = reactive({
      areaX: 1500,
      areaY: 1e3,
      areaZ: 1500
    });
    const toRefsState = reactive({
      ...toRefs(precipitationState),
      ...toRefs(areaXYZ)
    });
    const paneControl = new Pane({
      title: "天气",
      expanded: true
    });
    const f1 = paneControl.addFolder({
      title: "下落物"
    });
    f1.addBinding(precipitationState, "speed", {
      label: "速度",
      min: 0,
      max: 30,
      step: 1
    });
    f1.addBinding(precipitationState, "color", {
      label: "颜色"
    });
    f1.addBinding(precipitationState, "size", {
      label: "大小",
      min: 0,
      max: 26,
      step: 1
    });
    f1.addBinding(precipitationState, "count", {
      label: "数量",
      min: 1e3,
      max: 1e4,
      step: 100
    });
    f1.addBinding(precipitationState, "type", {
      view: "list",
      label: "类型",
      options: [
        { text: "雪", value: "snow" },
        { text: "雨", value: "rain" },
        { text: "点", value: "point" }
      ]
    });
    return (_ctx, _cache) => {
      return _openBlock(), _createElementBlock(_Fragment, null, [
        _createVNode(_sfc_main$1),
        _createVNode(_sfc_main$2, {
          ref_key: "pagesShowRef",
          ref: pagesShowRef,
          autoRotate: false
        }, {
          ability: _withCtx(() => [
            (_openBlock(), _createBlock(_Suspense, null, {
              default: _withCtx(() => [
                _createVNode(_sfc_main$3, _normalizeProps(_guardReactiveProps(toRefsState)), null, 16)
              ]),
              _: 1
            }))
          ]),
          _: 1
        }, 512)
      ], 64);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=weather.CoyEXALQ1767105581793.js.map
