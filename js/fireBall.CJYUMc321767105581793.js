import { importShared, no, _l } from './index.BxB45aCK1767105581793.js';
import { _sfc_main as _sfc_main$2 } from './pagesShow.vue_vue_type_script_setup_true_lang.DfPQrWBQ1767105581793.js';
import { SPE } from './SPE.Dx-oWBwi1767105581793.js';

const {defineComponent:_defineComponent$1} = await importShared('vue');

const {openBlock:_openBlock$1,createElementBlock:_createElementBlock,createCommentVNode:_createCommentVNode} = await importShared('vue');

const _hoisted_1 = ["object"];
const {watch,toRaw,ref} = await importShared('vue');
const THREE = await importShared('three');
const _sfc_main$1 = /* @__PURE__ */ _defineComponent$1({
  __name: "fireBall",
  setup(__props) {
    const { state: pTexture } = no("./plugins/digitalCity/image/sprite-explosion.png");
    let particleGroup = null;
    const objCloud = ref(null);
    watch(
      () => pTexture.value,
      (mapv) => {
        if (mapv) {
          particleGroup = new SPE.Group({
            texture: {
              value: mapv,
              frames: new THREE.Vector2(5, 5),
              loop: 1
            },
            depthTest: true,
            depthWrite: false,
            blending: THREE.AdditiveBlending,
            scale: 600
          });
          const emitter = new SPE.Emitter({
            particleCount: 20,
            type: SPE.distributions.SPHERE,
            position: {
              radius: 1
            },
            maxAge: { value: 2 },
            // duration: 1,
            activeMultiplier: 20,
            velocity: {
              value: new THREE.Vector3(10)
            },
            size: { value: [20, 100] },
            color: {
              value: [
                new THREE.Color(0.5, 0.1, 0.05),
                new THREE.Color(0.2, 0.2, 0.2)
              ]
            },
            opacity: { value: [0.5, 0.35, 0.1, 0] }
          });
          const flash = new SPE.Emitter({
            particleCount: 50,
            position: { spread: new THREE.Vector3(5, 5, 5) },
            velocity: {
              spread: new THREE.Vector3(30),
              distribution: SPE.distributions.SPHERE
            },
            size: { value: [2, 20, 20, 20] },
            maxAge: { value: 2 },
            activeMultiplier: 2e3,
            opacity: { value: [0.5, 0.25, 0, 0] }
          });
          particleGroup.addEmitter(emitter).addEmitter(flash);
          objCloud.value = particleGroup.mesh;
        }
      }
    );
    const { onBeforeRender } = _l();
    onBeforeRender(() => {
      particleGroup?.tick();
    });
    return (_ctx, _cache) => {
      return objCloud.value ? (_openBlock$1(), _createElementBlock("primitive", {
        key: 0,
        object: toRaw(objCloud.value),
        position: [-130, 60, 20],
        renderOrder: 3e3
      }, null, 8, _hoisted_1)) : _createCommentVNode("", true);
    };
  }
});

const {defineComponent:_defineComponent} = await importShared('vue');

const {createVNode:_createVNode,withCtx:_withCtx,openBlock:_openBlock,createBlock:_createBlock} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "fireBall",
  setup(__props) {
    return (_ctx, _cache) => {
      return _openBlock(), _createBlock(_sfc_main$2, null, {
        ability: _withCtx(() => [
          _createVNode(_sfc_main$1)
        ]),
        _: 1
      });
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=fireBall.CJYUMc321767105581793.js.map
