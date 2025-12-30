import { importShared, Kk, gz, FButton } from './index.BxB45aCK1767105581793.js';
import { Button } from './Button.CtEklqVH1767105581793.js';

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,unref:_unref,createVNode:_createVNode,createTextVNode:_createTextVNode,withCtx:_withCtx,mergeProps:_mergeProps,resolveComponent:_resolveComponent,openBlock:_openBlock,createBlock:_createBlock} = await importShared('vue');

const _hoisted_1 = { position: [-3, 1, 1] };
const {ref,reactive} = await importShared('vue');

const {BasicShadowMap,SRGBColorSpace,NoToneMapping} = await importShared('three');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "component3UI",
  setup(__props) {
    const gl = {
      clearColor: "#82DBC5",
      shadows: true,
      alpha: false,
      shadowMapType: BasicShadowMap,
      outputColorSpace: SRGBColorSpace,
      toneMapping: NoToneMapping
    };
    const sphereRef = ref(null);
    const state = reactive({
      wrapperClass: "wrapper",
      as: "div",
      center: true
    });
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createBlock(_component_TresCanvas, _mergeProps(gl, { "window-size": "" }), {
        default: _withCtx(() => [
          _cache[6] || (_cache[6] = _createElementVNode("TresPerspectiveCamera", { position: [3, 0, 8] }, null, -1)),
          _createVNode(_unref(Kk)),
          _createElementVNode("TresMesh", _hoisted_1, [
            _cache[1] || (_cache[1] = _createElementVNode("TresBoxGeometry", null, null, -1)),
            _cache[2] || (_cache[2] = _createElementVNode("TresMeshNormalMaterial", null, null, -1)),
            _createVNode(_unref(gz), _mergeProps(state, { transform: "" }), {
              default: _withCtx(() => [
                _createVNode(_unref(FButton), {
                  type: "primary",
                  size: "small"
                }, {
                  default: _withCtx(() => [..._cache[0] || (_cache[0] = [
                    _createTextVNode(" fes-design按钮 ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 16)
          ]),
          _createElementVNode("TresMesh", {
            ref_key: "sphereRef",
            ref: sphereRef,
            position: [1, 1, 1]
          }, [
            _cache[4] || (_cache[4] = _createElementVNode("TresSphereGeometry", null, null, -1)),
            _cache[5] || (_cache[5] = _createElementVNode("TresMeshNormalMaterial", null, null, -1)),
            _createVNode(_unref(gz), _mergeProps(state, { transform: "" }), {
              default: _withCtx(() => [
                _createVNode(_unref(Button), {
                  type: "primary",
                  dashed: ""
                }, {
                  default: _withCtx(() => [..._cache[3] || (_cache[3] = [
                    _createTextVNode(" naiveui按钮 ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 16)
          ], 512),
          _cache[7] || (_cache[7] = _createElementVNode("TresAmbientLight", { intensity: 1 }, null, -1))
        ]),
        _: 1
      }, 16);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=component3UI.USUIEx2q1767105581793.js.map
