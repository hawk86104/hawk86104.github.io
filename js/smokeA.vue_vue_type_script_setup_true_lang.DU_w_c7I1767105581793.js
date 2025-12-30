import { importShared, no, _l } from './index.BxB45aCK1767105581793.js';
import { SPE } from './SPE.Dx-oWBwi1767105581793.js';

const {defineComponent:_defineComponent} = await importShared('vue');

const {openBlock:_openBlock,createElementBlock:_createElementBlock,createCommentVNode:_createCommentVNode} = await importShared('vue');

const _hoisted_1 = ["object"];
const {watch,ref,toRaw} = await importShared('vue');
const THREE = await importShared('three');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "smokeA",
  setup(__props) {
    const { state: pTexture } = no("./plugins/digitalCity/image/smokeparticle.png");
    let particleGroup = null;
    const objCloud = ref(null);
    watch(
      () => pTexture.value,
      (mapv) => {
        if (!mapv) return;
        particleGroup = new SPE.Group({
          blending: THREE.NormalBlending,
          texture: {
            value: mapv
          },
          depthTest: true,
          depthWrite: false
          // 先不传 texture，纹理加载后赋值
        });
        const emitter = new SPE.Emitter({
          type: SPE.distributions.BOX,
          particleCount: 100,
          maxAge: { value: 4 },
          position: {
            value: new THREE.Vector3(0, 0, 0),
            spread: new THREE.Vector3(2, 0, 2),
            radius: 1
          },
          velocity: {
            value: new THREE.Vector3(0, 16, 0),
            spread: new THREE.Vector3(12, 40, 12),
            distribution: SPE.distributions.BOX
          },
          size: {
            value: [200, 100, 100],
            spread: [14, 10, 8],
            randomise: true
          },
          acceleration: {
            value: new THREE.Vector3(0, 10, 0)
          },
          angle: {
            value: 0,
            spread: 120
          },
          opacity: {
            value: [0.5, 0.1],
            spread: [0.1, 0],
            randomise: true
          },
          color: {
            value: new THREE.Color("#333333")
          }
        });
        particleGroup.addEmitter(emitter);
        objCloud.value = particleGroup.mesh;
      }
    );
    const { onBeforeRender } = _l();
    onBeforeRender(({ delta }) => {
      if (particleGroup) {
        particleGroup.tick(delta);
      }
    });
    return (_ctx, _cache) => {
      return objCloud.value ? (_openBlock(), _createElementBlock("primitive", {
        key: 0,
        object: toRaw(objCloud.value),
        position: [-130, 26, 20],
        renderOrder: 3e3
      }, null, 8, _hoisted_1)) : _createCommentVNode("", true);
    };
  }
});

export { _sfc_main };
//# sourceMappingURL=smokeA.vue_vue_type_script_setup_true_lang.DU_w_c7I1767105581793.js.map
