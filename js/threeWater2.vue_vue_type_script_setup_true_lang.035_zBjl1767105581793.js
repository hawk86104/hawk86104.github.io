import { importShared, rz } from './index.BxB45aCK1767105581793.js';
import { Water } from './Water2.DO8AhgFS1767105581793.js';

const {defineComponent:_defineComponent} = await importShared('vue');

const {unref:_unref,openBlock:_openBlock,createElementBlock:_createElementBlock,createCommentVNode:_createCommentVNode} = await importShared('vue');

const _hoisted_1 = ["object", "rotation-x"];
const {Vector2,PlaneGeometry,DoubleSide} = await importShared('three');
const {watchEffect,watch} = await importShared('vue');

const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "threeWater2",
  props: {
    waterGeometry: { default: new PlaneGeometry(20, 20) },
    color: { default: "#FFF" },
    scale: { default: 1 }
  },
  setup(__props) {
    const props = __props;
    const { textures: pTexture, isLoading } = rz(["./plugins/water/images/Water_1_M_Normal.jpg", "./plugins/water/images/Water_2_M_Normal.jpg"]);
    const wG = props.waterGeometry.clone();
    let tsWater = null;
    watch([pTexture, isLoading], ([pTexture2, isLoading2]) => {
      if (pTexture2 && !isLoading2) {
        tsWater = new Water(
          wG,
          {
            color: props.color,
            scale: props.scale,
            flowDirection: new Vector2(1, 1),
            textureWidth: 1024,
            textureHeight: 1024,
            normalMap0: pTexture2[0],
            normalMap1: pTexture2[1]
          }
        );
        tsWater.material.transparent = true;
        tsWater.material.depthWrite = true;
        tsWater.material.depthTest = true;
        tsWater.material.side = DoubleSide;
      }
    });
    watchEffect(() => {
      if (props.color) {
        tsWater?.material.uniforms.color.value.set(props.color);
      }
      if (props.scale && tsWater) {
        tsWater.material.uniforms.config.value.w = props.scale;
      }
    });
    return (_ctx, _cache) => {
      return !_unref(isLoading) ? (_openBlock(), _createElementBlock("primitive", {
        key: 0,
        object: _unref(tsWater),
        "rotation-x": -Math.PI / 2
      }, null, 8, _hoisted_1)) : _createCommentVNode("", true);
    };
  }
});

export { _sfc_main };
//# sourceMappingURL=threeWater2.vue_vue_type_script_setup_true_lang.035_zBjl1767105581793.js.map
