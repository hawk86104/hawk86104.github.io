import { importShared, pt } from './index.BxB45aCK1767105581793.js';
import { RoundedBoxGeometry } from './RoundedBoxGeometry.CdlVEy_31767105581793.js';
import { _sfc_main as _sfc_main$1 } from './index.vue_vue_type_script_setup_true_lang.D7-hpzmy1767105581793.js';

const {defineComponent:_defineComponent} = await importShared('vue');

const {mergeProps:_mergeProps,createVNode:_createVNode,createElementVNode:_createElementVNode,openBlock:_openBlock,createElementBlock:_createElementBlock} = await importShared('vue');

const _hoisted_1 = ["rotation-x", "geometry"];
const {watch,ref} = await importShared('vue');

const THREE = await importShared('three');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "reflectorRoundedBox",
  props: {
    color: { default: "#FFFFFF" },
    width: { default: 2 },
    height: { default: 1 },
    depth: { default: 1 },
    radius: { default: 0.1 },
    roughness: { default: 0.5 },
    metalness: { default: 0.6 },
    reflectorOffset: { default: 0.1 },
    mix: { default: 0.1 },
    sharpMix: { default: 1 }
  },
  setup(__props) {
    const props = __props;
    pt({ RoundedBoxGeometry });
    const trbGeometry = ref(null);
    trbGeometry.value = new RoundedBoxGeometry(props.width, props.height, props.depth, props.radius);
    watch(
      () => [props.width, props.height, props.depth, props.radius],
      ([width, height, depth, radius, smoothness]) => {
        if (trbGeometry.value) {
          trbGeometry.value.dispose();
          trbGeometry.value = new RoundedBoxGeometry(width, height, depth, 4, radius);
          trbGeometry.value.applyMatrix4(new THREE.Matrix4().makeRotationX(Math.PI / 2));
        }
      },
      { immediate: true }
    );
    const reflectionMaterialConfig = {
      resolution: 1024,
      blurDepthScale: 0.1
      // map: pTexture[0],
      // normalMap: pTexture[1],
      // normalScale: new THREE.Vector2(0.6, 0.6),
      // normalMapType: THREE.ObjectSpaceNormalMap,
    };
    return (_ctx, _cache) => {
      return _openBlock(), _createElementBlock("TresGroup", null, [
        _createElementVNode("TresMesh", {
          "rotation-x": -Math.PI / 2,
          geometry: trbGeometry.value
        }, [
          _createVNode(_sfc_main$1, _mergeProps({ color: _ctx.color }, reflectionMaterialConfig, {
            roughness: _ctx.roughness,
            metalness: _ctx.metalness,
            reflectorOffset: _ctx.reflectorOffset,
            mix: _ctx.mix,
            sharpMix: _ctx.sharpMix
          }), null, 16, ["color", "roughness", "metalness", "reflectorOffset", "mix", "sharpMix"])
        ], 8, _hoisted_1)
      ]);
    };
  }
});

export { _sfc_main };
//# sourceMappingURL=reflectorRoundedBox.vue_vue_type_script_setup_true_lang.B0i-7O7p1767105581793.js.map
