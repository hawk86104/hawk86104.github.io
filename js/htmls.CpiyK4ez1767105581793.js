import { importShared, Kk, gz } from './index.BxB45aCK1767105581793.js';

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,unref:_unref,createVNode:_createVNode,mergeProps:_mergeProps,withCtx:_withCtx,resolveComponent:_resolveComponent,openBlock:_openBlock,createBlock:_createBlock} = await importShared('vue');

const _hoisted_1 = { position: [1, 1, 1] };
const {ref,reactive} = await importShared('vue');

const {BasicShadowMap,SRGBColorSpace,NoToneMapping} = await importShared('three');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "htmls",
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
    const torusRef = ref(null);
    const state = reactive({
      wrapperClass: "wrapper",
      as: "div",
      center: true
    });
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createBlock(_component_TresCanvas, _mergeProps(gl, { "window-size": "" }), {
        default: _withCtx(() => [
          _cache[10] || (_cache[10] = _createElementVNode("TresPerspectiveCamera", { position: [3, 0, 8] }, null, -1)),
          _createVNode(_unref(Kk)),
          _createElementVNode("TresMesh", _hoisted_1, [
            _cache[1] || (_cache[1] = _createElementVNode("TresBoxGeometry", null, null, -1)),
            _cache[2] || (_cache[2] = _createElementVNode("TresMeshNormalMaterial", null, null, -1)),
            _createVNode(_unref(gz), _mergeProps(state, {
              transform: "",
              occlude: [sphereRef.value]
            }), {
              default: _withCtx(() => [..._cache[0] || (_cache[0] = [
                _createElementVNode("h1", { class: "bg-white text-xs p-0.5 rounded" }, " I'm a Box 📦 ", -1)
              ])]),
              _: 1
            }, 16, ["occlude"])
          ]),
          _createElementVNode("TresMesh", {
            ref_key: "sphereRef",
            ref: sphereRef,
            position: [4, 1, 1]
          }, [
            _cache[4] || (_cache[4] = _createElementVNode("TresSphereGeometry", null, null, -1)),
            _cache[5] || (_cache[5] = _createElementVNode("TresMeshNormalMaterial", null, null, -1)),
            _createVNode(_unref(gz), _mergeProps(state, { transform: "" }), {
              default: _withCtx(() => [..._cache[3] || (_cache[3] = [
                _createElementVNode("h1", { class: "bg-white text-xs p-0.5 rounded" }, " I'm a Sphere ⭕️ ", -1)
              ])]),
              _: 1
            }, 16)
          ], 512),
          _createElementVNode("TresMesh", {
            ref_key: "torusRef",
            ref: torusRef,
            position: [7, 1, 1]
          }, [
            _cache[7] || (_cache[7] = _createElementVNode("TresTorusGeometry", null, null, -1)),
            _cache[8] || (_cache[8] = _createElementVNode("TresMeshNormalMaterial", null, null, -1)),
            _createVNode(_unref(gz), _mergeProps(state, {
              transform: "",
              sprite: ""
            }), {
              default: _withCtx(() => [..._cache[6] || (_cache[6] = [
                _createElementVNode("h1", { class: "bg-white text-xs p-0.5 text-fuchsia-500" }, " I'm a Sprite 👻 ", -1)
              ])]),
              _: 1
            }, 16)
          ], 512),
          _createVNode(_unref(gz), _mergeProps({ position: [2, -1, 1] }, state, {
            transform: "",
            sprite: ""
          }), {
            default: _withCtx(() => [..._cache[9] || (_cache[9] = [
              _createElementVNode("h1", { class: "bg-blue-gray-900 text-xs rounded p-0.5 text-green-100" }, " I'm just a Div 🔖 ", -1)
            ])]),
            _: 1
          }, 16),
          _cache[11] || (_cache[11] = _createElementVNode("TresAmbientLight", { intensity: 1 }, null, -1))
        ]),
        _: 1
      }, 16);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=htmls.CpiyK4ez1767105581793.js.map
