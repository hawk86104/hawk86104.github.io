import { importShared, no, _l } from './index.BxB45aCK1767105581793.js';
import { SPE } from './SPE.Dx-oWBwi1767105581793.js';

const {defineComponent:_defineComponent} = await importShared('vue');

const {openBlock:_openBlock,createElementBlock:_createElementBlock,createCommentVNode:_createCommentVNode} = await importShared('vue');

const _hoisted_1 = ["object"];
const {watch,ref,toRaw} = await importShared('vue');
const THREE = await importShared('three');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "fireB",
  setup(__props) {
    const { state: pTexture } = no("./plugins/digitalCity/image/smokeparticle.png");
    let particleGroup = null;
    const objCloud = ref(null);
    watch(
      () => pTexture.value,
      (mapv) => {
        if (!mapv) return;
        particleGroup = new SPE.Group({
          blending: THREE.AdditiveBlending,
          depthTest: true,
          depthWrite: false,
          texture: {
            value: mapv
          }
        });
        const emitter = new SPE.Emitter({
          type: SPE.distributions.SPHERE,
          particleCount: 150,
          maxAge: { value: 3 },
          position: {
            value: new THREE.Vector3(0, 0, 0),
            spread: new THREE.Vector3(1, 1, 1),
            radius: 1
          },
          velocity: {
            value: new THREE.Vector3(0, 20, 0),
            spread: new THREE.Vector3(12, 40, 12),
            distribution: SPE.distributions.BOX
          },
          size: { value: [200, 100, 10] },
          color: { value: new THREE.Color("#ff0000"), spread: new THREE.Vector3(0.05, 0.05, 0.01) }
        });
        particleGroup.addEmitter(emitter);
        objCloud.value = particleGroup.mesh;
      }
    );
    const { onBeforeRender } = _l();
    onBeforeRender(() => {
      particleGroup?.tick();
    });
    return (_ctx, _cache) => {
      return objCloud.value ? (_openBlock(), _createElementBlock("primitive", {
        key: 0,
        object: toRaw(objCloud.value),
        renderOrder: 3001
      }, null, 8, _hoisted_1)) : _createCommentVNode("", true);
    };
  }
});

export { _sfc_main };
//# sourceMappingURL=fireB.vue_vue_type_script_setup_true_lang.BvbRi80N1767105581793.js.map
