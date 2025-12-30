import { importShared, Kk } from './index.BxB45aCK1767105581793.js';
import { Pane } from './tweakpane.Cvt5w0bb1767105581793.js';
import { _sfc_main as _sfc_main$1 } from './reflectorDUDV.vue_vue_type_script_setup_true_lang.Cce3m26z1767105581793.js';

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,unref:_unref,createVNode:_createVNode,mergeProps:_mergeProps,Suspense:_Suspense,withCtx:_withCtx,openBlock:_openBlock,createBlock:_createBlock,resolveComponent:_resolveComponent} = await importShared('vue');
const {reactive,ref} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "reflectorDUDV",
  setup(__props) {
    const configState = reactive({
      reflectivity: 2.6,
      showGridHelper: true
    });
    const paneControl = new Pane({
      title: "镜面参数",
      expanded: true
    });
    paneControl.addBinding(configState, "reflectivity", {
      label: "反射率",
      min: 0,
      max: 10,
      step: 0.1
    });
    paneControl.addBinding(configState, "showGridHelper", { label: "显示网格" });
    const cube = ref(null);
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createBlock(_component_TresCanvas, {
        clearColor: "#201919",
        "window-size": ""
      }, {
        default: _withCtx(() => [
          _cache[1] || (_cache[1] = _createElementVNode("TresPerspectiveCamera", {
            position: [-15, 15, -15],
            fov: 45,
            near: 0.1,
            far: 1e4,
            "look-at": [0, 0, 0]
          }, null, -1)),
          _createVNode(_unref(Kk), { enableDamping: "" }),
          _cache[2] || (_cache[2] = _createElementVNode("TresAmbientLight", { intensity: 10 }, null, -1)),
          _cache[3] || (_cache[3] = _createElementVNode("TresMesh", { position: [3, 1, 0] }, [
            _createElementVNode("TresBoxGeometry", { args: [2, 2, 2] }),
            _createElementVNode("TresMeshNormalMaterial", { wireframe: true })
          ], -1)),
          _createElementVNode("TresMesh", {
            position: [0, 2, 4],
            ref_key: "cube",
            ref: cube
          }, [..._cache[0] || (_cache[0] = [
            _createElementVNode("TresBoxGeometry", { args: [1, 1, 1] }, null, -1),
            _createElementVNode("TresMeshNormalMaterial", null, null, -1)
          ])], 512),
          (_openBlock(), _createBlock(_Suspense, null, {
            default: _withCtx(() => [
              _createVNode(_sfc_main$1, _mergeProps(configState, {
                ignoreObjects: [cube.value]
              }), null, 16, ["ignoreObjects"])
            ]),
            _: 1
          })),
          _cache[4] || (_cache[4] = _createElementVNode("TresMesh", { position: [3, -1.5, 2] }, [
            _createElementVNode("TresBoxGeometry", { args: [2, 2, 2] }),
            _createElementVNode("TresMeshNormalMaterial")
          ], -1))
        ]),
        _: 1
      });
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=reflectorDUDV.DDEjpxkL1767105581793.js.map
