import { importShared, Kk } from './index.BxB45aCK1767105581793.js';
import { __federation_method_getRemote, __federation_method_unwrapDefault, __federation_method_setRemote } from './_virtual___federation__.DOWIP4eR1767105581793.js';

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,unref:_unref,createVNode:_createVNode,resolveDynamicComponent:_resolveDynamicComponent,openBlock:_openBlock,createBlock:_createBlock,resolveComponent:_resolveComponent,mergeProps:_mergeProps,withCtx:_withCtx} = await importShared('vue');

const {SRGBColorSpace,BasicShadowMap,NoToneMapping} = await importShared('three');

const {reactive,shallowRef} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "basic",
  setup(__props) {
    const state = reactive({
      clearColor: "#201919",
      shadows: true,
      alpha: false,
      shadowMapType: BasicShadowMap,
      outputColorSpace: SRGBColorSpace,
      toneMapping: NoToneMapping
    });
    const theExperienceCom = shallowRef(null);
    __federation_method_setRemote("tvt", {
      url: () => Promise.resolve("http://dcser.icegl.cn/assets/remoteEntry.js"),
      format: "esm",
      from: "vite"
    });
    __federation_method_getRemote("tvt", "./testBase").then((moduleWraped) => __federation_method_unwrapDefault(moduleWraped)).then((module) => {
      theExperienceCom.value = module;
    });
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createBlock(_component_TresCanvas, _mergeProps(state, { "window-size": "" }), {
        default: _withCtx(() => [
          _cache[0] || (_cache[0] = _createElementVNode("TresPerspectiveCamera", { position: [5, 5, 5] }, null, -1)),
          _createVNode(_unref(Kk)),
          (_openBlock(), _createBlock(_resolveDynamicComponent(theExperienceCom.value))),
          _cache[1] || (_cache[1] = _createElementVNode("TresGridHelper", { "position-y": 0.1 }, null, -1))
        ]),
        _: 1
      }, 16);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=basic.CtbZ_mdM1767105581793.js.map
