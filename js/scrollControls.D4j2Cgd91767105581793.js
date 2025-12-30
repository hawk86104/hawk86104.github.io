import { importShared, Qz, Dz, Tz, _export_sfc } from './index.BxB45aCK1767105581793.js';
import { _sfc_main$7 as _sfc_main$1 } from './generalFont.vue_vue_type_script_setup_true_lang.DqoG1H6g1767105581793.js';
import './default.vue_vue_type_script_setup_true_lang.DQGKkIwV1767105581793.js';
import './three-mesh-ui.module.CjQAT-M_1767105581793.js';
import './domPanel.vue_vue_type_style_index_0_lang.dV59iE041767105581793.js';

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,unref:_unref,createVNode:_createVNode,withCtx:_withCtx,resolveComponent:_resolveComponent,mergeProps:_mergeProps,Fragment:_Fragment,openBlock:_openBlock,createElementBlock:_createElementBlock} = await importShared('vue');

const {ref,watchEffect} = await importShared('vue');
const {SRGBColorSpace,NoToneMapping} = await importShared('three');

const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "scrollControls",
  setup(__props) {
    const boxRef = ref();
    const progress = ref(0);
    watchEffect(() => {
      console.log("jaime ~ progress:", progress.value);
    });
    const gl = {
      clearColor: "#333",
      alpha: true,
      outputColorSpace: SRGBColorSpace,
      toneMapping: NoToneMapping
    };
    const onLoop = () => {
      if (boxRef.value) {
        boxRef.value.instance.rotation.x = progress.value * 10;
        boxRef.value.instance.rotation.y = progress.value * 2;
      }
    };
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createElementBlock(_Fragment, null, [
        _createVNode(_component_TresCanvas, _mergeProps(gl, {
          "window-size": "",
          class: "canvas-class",
          onLoop
        }), {
          default: _withCtx(() => [
            _cache[1] || (_cache[1] = _createElementVNode("TresPerspectiveCamera", { position: [0, 2, 5] }, null, -1)),
            _createVNode(_unref(Qz), { radius: 1 }),
            _cache[2] || (_cache[2] = _createElementVNode("TresGridHelper", { args: [10, 10] }, null, -1)),
            _createVNode(_unref(_sfc_main$1), {
              modelValue: progress.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => progress.value = $event),
              distance: 10,
              "smooth-scroll": 0.1,
              htmlScroll: ""
            }, {
              default: _withCtx(() => [
                _createVNode(_unref(Dz), {
                  scale: 0.1,
                  position: [1, 2, 0]
                }),
                _createVNode(_unref(Tz), {
                  ref_key: "boxRef",
                  ref: boxRef,
                  scale: 0.5,
                  color: 16711935,
                  position: [-1, 1, 0]
                }, null, 512)
              ]),
              _: 1
            }, 8, ["modelValue"])
          ]),
          _: 1
        }, 16),
        _cache[3] || (_cache[3] = _createElementVNode("main", null, [
          _createElementVNode("section", null, [
            _createElementVNode("h1", null, "First section")
          ]),
          _createElementVNode("section", null, [
            _createElementVNode("h2", null, "Second section")
          ])
        ], -1))
      ], 64);
    };
  }
});

const scrollControls = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c5a40636"]]);

export { scrollControls as default };
//# sourceMappingURL=scrollControls.D4j2Cgd91767105581793.js.map
