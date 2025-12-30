import { importShared, Yk, Dz } from './index.BxB45aCK1767105581793.js';

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,unref:_unref,createVNode:_createVNode,withCtx:_withCtx,resolveComponent:_resolveComponent,mergeProps:_mergeProps,openBlock:_openBlock,createBlock:_createBlock} = await importShared('vue');
const {SRGBColorSpace,NoToneMapping} = await importShared('three');

const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "mapControls",
  setup(__props) {
    const gl = {
      clearColor: "#82DBC5",
      alpha: false,
      outputColorSpace: SRGBColorSpace,
      toneMapping: NoToneMapping
    };
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createBlock(_component_TresCanvas, _mergeProps(gl, { "window-size": "" }), {
        default: _withCtx(() => [
          _cache[1] || (_cache[1] = _createElementVNode("TresPerspectiveCamera", { position: [3, 3, 3] }, null, -1)),
          _createVNode(_unref(Yk)),
          _createVNode(_unref(Dz), { scale: 0.5 }, {
            default: _withCtx(() => [..._cache[0] || (_cache[0] = [
              _createElementVNode("TresMeshNormalMaterial", null, null, -1)
            ])]),
            _: 1
          }),
          _cache[2] || (_cache[2] = _createElementVNode("TresGridHelper", { args: [10, 10] }, null, -1)),
          _cache[3] || (_cache[3] = _createElementVNode("TresAmbientLight", { intensity: 1 }, null, -1))
        ]),
        _: 1
      }, 16);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=mapControls.DBrGFG7v1767105581793.js.map
