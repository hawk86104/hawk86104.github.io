import { importShared, _export_sfc } from './index.BxB45aCK1767105581793.js';
import { mapContainer, _sfc_main as _sfc_main$1 } from './mergeTres.BqzN14ph1767105581793.js';

const {defineComponent:_defineComponent} = await importShared('vue');

const {createVNode:_createVNode,createElementVNode:_createElementVNode,resolveComponent:_resolveComponent,mergeProps:_mergeProps,withCtx:_withCtx,Fragment:_Fragment,openBlock:_openBlock,createElementBlock:_createElementBlock} = await importShared('vue');

const _hoisted_1 = ["rotation"];
const {reactive} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "cubeMesh",
  setup(__props) {
    const mapCenter = [116.52, 39.79];
    const state = reactive({
      // windowSize: true,
      alpha: true,
      antialias: true,
      clearAlpha: 0,
      renderMode: "manual"
    });
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createElementBlock(_Fragment, null, [
        _createVNode(mapContainer, { center: mapCenter }),
        _createVNode(_component_TresCanvas, _mergeProps({ id: "tresCanvas" }, state), {
          default: _withCtx(() => [
            _cache[1] || (_cache[1] = _createElementVNode("TresPerspectiveCamera", {
              fov: 60,
              near: 0.1,
              far: 1e3
            }, null, -1)),
            _cache[2] || (_cache[2] = _createElementVNode("TresAmbientLight", { intensity: 0.5 }, null, -1)),
            _cache[3] || (_cache[3] = _createElementVNode("TresMesh", { position: [0, 0, 500] }, [
              _createElementVNode("TresBoxGeometry", { args: [1e3, 1e3, 1e3] }),
              _createElementVNode("TresMeshNormalMaterial")
            ], -1)),
            _createElementVNode("TresMesh", {
              position: [0, 1500, 1500],
              rotation: [0, 0, Math.PI / 4]
            }, [..._cache[0] || (_cache[0] = [
              _createElementVNode("TresBoxGeometry", { args: [1e3, 1e3, 1e3] }, null, -1),
              _createElementVNode("TresMeshNormalMaterial", null, null, -1)
            ])], 8, _hoisted_1),
            _createVNode(_sfc_main$1, { center: mapCenter })
          ]),
          _: 1
        }, 16)
      ], 64);
    };
  }
});

const cubeMesh = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-912d580f"]]);

export { cubeMesh as default };
//# sourceMappingURL=cubeMesh.C4A-wHbh1767105581793.js.map
