import { importShared, Kk, Tz } from './index.BxB45aCK1767105581793.js';
import { yo, Do, Mo, Po, Eo } from './tres-post-processing.CBYUVLxv1767105581793.js';

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,unref:_unref,createVNode:_createVNode,withCtx:_withCtx,resolveComponent:_resolveComponent,openBlock:_openBlock,createBlock:_createBlock} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "fusion",
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createBlock(_component_TresCanvas, {
        "window-size": "",
        clearColor: "#000000"
      }, {
        default: _withCtx(() => [
          _cache[0] || (_cache[0] = _createElementVNode("TresPerspectiveCamera", { position: [10, 10, 10] }, null, -1)),
          _cache[1] || (_cache[1] = _createElementVNode("TresAmbientLight", { intensity: 1 }, null, -1)),
          _createVNode(_unref(Kk)),
          _createVNode(_unref(Tz), {
            args: [1, 1, 1],
            color: "orange",
            position: [3, 2, 1]
          }),
          _cache[2] || (_cache[2] = _createElementVNode("TresMesh", { position: [0, 2, -4] }, [
            _createElementVNode("TresBoxGeometry", { args: [1, 1, 1] }),
            _createElementVNode("TresMeshNormalMaterial")
          ], -1)),
          _cache[3] || (_cache[3] = _createElementVNode("TresGridHelper", { args: [10, 10] }, null, -1)),
          _createVNode(_unref(yo), null, {
            default: _withCtx(() => [
              _createVNode(_unref(Do), {
                radius: 0.8,
                strength: 2.5,
                threshold: 0.8
              }),
              _createVNode(_unref(Mo)),
              _createVNode(_unref(Po), {
                width: 1920,
                height: 1080
              }),
              _createVNode(_unref(Eo))
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=fusion.D883kaRS1767105581793.js.map
