import { importShared, no, _l } from './index.BxB45aCK1767105581793.js';
import { SPE } from './SPE.Dx-oWBwi1767105581793.js';

const {defineComponent:_defineComponent} = await importShared('vue');

const {openBlock:_openBlock,createElementBlock:_createElementBlock,createCommentVNode:_createCommentVNode} = await importShared('vue');

const _hoisted_1 = ["object"];
const {watch,ref,toRaw} = await importShared('vue');
const THREE = await importShared('three');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "cloudMesh",
  setup(__props) {
    const { state: pTexture } = no("./plugins/digitalCity/image/cloud.png");
    let particleGroup = null;
    const objCloud = ref(null);
    watch(
      () => pTexture.value,
      (mapv) => {
        if (!mapv) return;
        mapv.magFilter = THREE.LinearMipMapLinearFilter;
        mapv.minFilter = THREE.LinearMipMapLinearFilter;
        try {
          particleGroup = new SPE.Group({
            texture: {
              value: mapv
            },
            blending: THREE.NormalBlending,
            // fog: true,
            depthTest: false,
            depthWrite: false
          });
          const emitter = new SPE.Emitter({
            type: SPE.distributions.BOX,
            particleCount: 26,
            maxAge: {
              value: 10
            },
            position: {
              value: new THREE.Vector3(0, 0, 0),
              spread: new THREE.Vector3(2e3, 100, 2e3)
            },
            velocity: {
              value: new THREE.Vector3(0, 0, 30)
            },
            wiggle: {
              spread: 10
            },
            size: {
              value: 520,
              spread: [100, 220],
              randomise: true
            },
            drag: {
              value: 220
            },
            opacity: {
              value: [0, 1, 0],
              randomise: true
            },
            color: {
              value: new THREE.Color(1, 1, 1),
              spread: new THREE.Color(0.1, 0.1, 0.1)
            },
            angle: {
              value: [0, Math.PI * 1 / 8]
            }
          });
          particleGroup.addEmitter(emitter);
          objCloud.value = particleGroup.mesh;
        } catch (err) {
          console.warn("Failed to set particleGroup texture:", err);
        }
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
        position: [0, 200, 0],
        renderOrder: 3e3
      }, null, 8, _hoisted_1)) : _createCommentVNode("", true);
    };
  }
});

export { _sfc_main };
//# sourceMappingURL=cloudMesh.vue_vue_type_script_setup_true_lang.t0Z5pxFM1767105581793.js.map
