import { importShared, Fs } from './index.BxB45aCK1767105581793.js';
import { useTexture } from './customShaderMaterial.vue_vue_type_script_setup_true_lang.rDMIDGqx1767105581793.js';
import './index.vue_vue_type_script_setup_true_lang.D7-hpzmy1767105581793.js';

const {withAsyncContext:_withAsyncContext,defineComponent:_defineComponent} = await importShared('vue');

const THREE = await importShared('three');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "skyBoxDmesh",
  props: {
    texture: {},
    background: { type: Boolean, default: true },
    environment: { type: Boolean, default: true }
  },
  async setup(__props) {
    let __temp, __restore;
    const props = __props;
    const { scene } = Fs();
    const pTexture = ([__temp, __restore] = _withAsyncContext(() => useTexture(props.texture)), __temp = await __temp, __restore(), __temp);
    pTexture.wrapS = pTexture.wrapT = THREE.ClampToEdgeWrapping;
    pTexture.generateMipmaps = false;
    pTexture.magFilter = THREE.LinearFilter;
    pTexture.minFilter = THREE.LinearFilter;
    pTexture.mapping = THREE.EquirectangularReflectionMapping;
    scene.value.environment = props.environment ? pTexture : null;
    scene.value.background = props.background ? pTexture : null;
    return (_ctx, _cache) => {
      return null;
    };
  }
});

export { _sfc_main };
//# sourceMappingURL=skyBoxDmesh.vue_vue_type_script_setup_true_lang.DRUMhbde1767105581793.js.map
