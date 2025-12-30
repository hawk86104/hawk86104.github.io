import { importShared, dz, Kk } from './index.BxB45aCK1767105581793.js';
import { Pane } from './tweakpane.Cvt5w0bb1767105581793.js';

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,unref:_unref,createVNode:_createVNode,resolveComponent:_resolveComponent,mergeProps:_mergeProps,withCtx:_withCtx,openBlock:_openBlock,createBlock:_createBlock} = await importShared('vue');
const {BasicShadowMap,SRGBColorSpace,NoToneMapping} = await importShared('three');

const {ref} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "wobbleMaterial",
  setup(__props) {
    const gl = {
      clearColor: "#82DBC5",
      shadows: true,
      alpha: false,
      shadowMapType: BasicShadowMap,
      outputColorSpace: SRGBColorSpace,
      toneMapping: NoToneMapping
    };
    const context = ref();
    const color = ref("#5384ff");
    const paneControl = new Pane({
      title: "流体波动",
      expanded: true
    });
    paneControl.addBinding(color, "value", { label: "颜色" });
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createBlock(_component_TresCanvas, _mergeProps(gl, {
        ref_key: "context",
        ref: context,
        "window-size": ""
      }), {
        default: _withCtx(() => [
          _cache[1] || (_cache[1] = _createElementVNode("TresPerspectiveCamera", { position: [3, 3, 3] }, null, -1)),
          _createElementVNode("TresMesh", null, [
            _cache[0] || (_cache[0] = _createElementVNode("TresTorusGeometry", null, null, -1)),
            _createVNode(_unref(dz), {
              color: color.value,
              speed: 3,
              factor: 8
            }, null, 8, ["color"])
          ]),
          _cache[2] || (_cache[2] = _createElementVNode("TresGridHelper", { args: [10, 10] }, null, -1)),
          _cache[3] || (_cache[3] = _createElementVNode("TresAmbientLight", { intensity: 1 }, null, -1)),
          _cache[4] || (_cache[4] = _createElementVNode("TresDirectionalLight", {
            intensity: 1,
            position: [2, 2, 2]
          }, null, -1)),
          _createVNode(_unref(Kk))
        ]),
        _: 1
      }, 16);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=wobbleMaterial.wgkp9ZmM1767105581793.js.map
