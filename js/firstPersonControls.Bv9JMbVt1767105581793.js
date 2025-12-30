import { importShared, wA, Xk } from './index.BxB45aCK1767105581793.js';

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,unref:_unref,createVNode:_createVNode,resolveComponent:_resolveComponent,mergeProps:_mergeProps,withCtx:_withCtx,openBlock:_openBlock,createBlock:_createBlock} = await importShared('vue');

const {BasicShadowMap,NoToneMapping} = await importShared('three');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "firstPersonControls",
  setup(__props) {
    const gl = {
      clearColor: "#82DBC5",
      shadows: true,
      alpha: false,
      shadowMapType: BasicShadowMap,
      toneMapping: NoToneMapping
    };
    const isActive = (state) => console.log(state);
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createBlock(_component_TresCanvas, _mergeProps(gl, { "window-size": "" }), {
        default: _withCtx(() => [
          _cache[1] || (_cache[1] = _createElementVNode("TresPerspectiveCamera", { position: [0, 3, 10] }, null, -1)),
          _createVNode(_unref(wA), {
            "make-default": "",
            onIsLock: _cache[0] || (_cache[0] = (state) => isActive(state))
          }),
          _createVNode(_unref(Xk)),
          _cache[2] || (_cache[2] = _createElementVNode("TresGridHelper", { args: [100, 100] }, null, -1)),
          _cache[3] || (_cache[3] = _createElementVNode("TresAmbientLight", { intensity: 1 }, null, -1))
        ]),
        _: 1
      }, 16);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=firstPersonControls.Bv9JMbVt1767105581793.js.map
