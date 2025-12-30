import { importShared, cz, Dz, Tz, Kk } from './index.BxB45aCK1767105581793.js';

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,unref:_unref,createVNode:_createVNode,withCtx:_withCtx,resolveComponent:_resolveComponent,mergeProps:_mergeProps,openBlock:_openBlock,createBlock:_createBlock} = await importShared('vue');

const _hoisted_1 = { "position-x": 3 };
const _hoisted_2 = { position: [0, 0, -1] };
const _hoisted_3 = ["side"];
const {ref,shallowRef,watch} = await importShared('vue');
const {BasicShadowMap,SRGBColorSpace,NoToneMapping,DoubleSide} = await importShared('three');

const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "glassMaterial",
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
    const glassMaterialRef = shallowRef();
    const boxRef = shallowRef();
    watch(glassMaterialRef, (value) => {
      boxRef.value.instance.material.dispose();
      boxRef.value.instance.material = value.instance;
    });
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createBlock(_component_TresCanvas, _mergeProps(gl, {
        ref_key: "context",
        ref: context,
        "window-size": ""
      }), {
        default: _withCtx(() => [
          _cache[2] || (_cache[2] = _createElementVNode("TresPerspectiveCamera", { position: [3, 3, 3] }, null, -1)),
          _createElementVNode("TresMesh", _hoisted_1, [
            _cache[0] || (_cache[0] = _createElementVNode("TresTorusKnotGeometry", { args: [1, 0.4, 256, 20] }, null, -1)),
            _createVNode(_unref(cz), {
              ref_key: "glassMaterialRef",
              ref: glassMaterialRef
            }, null, 512)
          ]),
          _createVNode(_unref(Dz), { scale: 0.5 }, {
            default: _withCtx(() => [
              _createVNode(_unref(cz))
            ]),
            _: 1
          }),
          _createVNode(_unref(Tz), {
            ref_key: "boxRef",
            ref: boxRef,
            "position-x": -3
          }, null, 512),
          _createElementVNode("TresMesh", _hoisted_2, [
            _cache[1] || (_cache[1] = _createElementVNode("TresPlaneGeometry", { args: [3, 3] }, null, -1)),
            _createElementVNode("TresMeshBasicMaterial", {
              side: _unref(DoubleSide),
              color: 16716049
            }, null, 8, _hoisted_3)
          ]),
          _cache[3] || (_cache[3] = _createElementVNode("TresGridHelper", { args: [10, 10] }, null, -1)),
          _cache[4] || (_cache[4] = _createElementVNode("TresAmbientLight", { intensity: 1 }, null, -1)),
          _cache[5] || (_cache[5] = _createElementVNode("TresDirectionalLight", {
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
//# sourceMappingURL=glassMaterial.D5Q0CkKs1767105581793.js.map
