import { importShared } from './index.BxB45aCK1767105581793.js';
import { instance } from './Resource.Dxl2bF_-1767105581793.js';

const {defineComponent:_defineComponent} = await importShared('vue');

const {openBlock:_openBlock,createElementBlock:_createElementBlock,createCommentVNode:_createCommentVNode} = await importShared('vue');

const _hoisted_1 = ["object"];
const {watch,ref,toRaw} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "staticWater",
  props: {
    waterColor: { default: "#52a7f7" },
    metalness: { default: 0.64 },
    roughness: { default: 0 }
  },
  setup(__props) {
    const props = __props;
    const lateWatchProp = () => {
      if (modelScene.value) {
        modelScene.value.children[1].material.color.set(props.waterColor);
        modelScene.value.children[1].material.metalness = props.metalness;
        modelScene.value.children[1].material.roughness = props.roughness;
      }
    };
    instance.getResource("GLTFLoader", "./plugins/water/model/staticWater.glb", "staticWater.glb");
    const modelR = instance.getReactiveItem("staticWater.glb");
    const modelScene = ref(null);
    watch(
      modelR,
      (model) => {
        if (model) {
          modelScene.value = toRaw(model.scene).clone();
          if (modelScene.value) {
            modelScene.value.children[1].material = modelScene.value.children[1].material.clone();
            modelScene.value.scale.set(0.2, 0.2, 0.2);
            lateWatchProp();
          }
        }
      },
      { immediate: true }
    );
    watch(
      () => [props.waterColor, props.metalness, props.roughness],
      () => {
        lateWatchProp();
      },
      { immediate: true }
    );
    return (_ctx, _cache) => {
      return _openBlock(), _createElementBlock("TresGroup", null, [
        modelScene.value ? (_openBlock(), _createElementBlock("primitive", {
          key: 0,
          object: toRaw(modelScene.value)
        }, null, 8, _hoisted_1)) : _createCommentVNode("", true)
      ]);
    };
  }
});

export { _sfc_main };
//# sourceMappingURL=staticWater.vue_vue_type_script_setup_true_lang.4m35QlAa1767105581793.js.map
