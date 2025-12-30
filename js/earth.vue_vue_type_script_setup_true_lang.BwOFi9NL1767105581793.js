import { importShared } from './index.BxB45aCK1767105581793.js';
import { useTexture$1 as useTexture } from './customShaderMaterial.vue_vue_type_script_setup_true_lang.rDMIDGqx1767105581793.js';
import './index.vue_vue_type_script_setup_true_lang.D7-hpzmy1767105581793.js';

const {withAsyncContext:_withAsyncContext,defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,unref:_unref,openBlock:_openBlock,createElementBlock:_createElementBlock} = await importShared('vue');

const _hoisted_1 = ["map", "bumpMap"];
const THREE = await importShared('three');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "earth",
  async setup(__props) {
    let __temp, __restore;
    const pTexture = ([__temp, __restore] = _withAsyncContext(() => useTexture(["./plugins/earthSample/image/worldMap.jpg", "./plugins/earthSample/image/wordBump.jpg"])), __temp = await __temp, __restore(), __temp);
    pTexture[0].wrapS = pTexture[0].wrapT = pTexture[1].wrapS = pTexture[1].wrapT = THREE.RepeatWrapping;
    return (_ctx, _cache) => {
      return _openBlock(), _createElementBlock("TresMesh", null, [
        _cache[0] || (_cache[0] = _createElementVNode("TresSphereGeometry", { args: [1, 32, 32] }, null, -1)),
        _createElementVNode("TresMeshStandardMaterial", {
          map: _unref(pTexture)[0],
          bumpMap: _unref(pTexture)[1],
          bumpScale: 10
        }, null, 8, _hoisted_1)
      ]);
    };
  }
});

export { _sfc_main };
//# sourceMappingURL=earth.vue_vue_type_script_setup_true_lang.BwOFi9NL1767105581793.js.map
