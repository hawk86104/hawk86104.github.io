import { importShared, _l, no } from './index.BxB45aCK1767105581793.js';

const {defineComponent:_defineComponent} = await importShared('vue');

const {unref:_unref,createElementVNode:_createElementVNode,normalizeProps:_normalizeProps,guardReactiveProps:_guardReactiveProps,openBlock:_openBlock,createElementBlock:_createElementBlock,createCommentVNode:_createCommentVNode} = await importShared('vue');

const _hoisted_1 = ["rotation-x"];
const _hoisted_2 = ["args"];
const THREE = await importShared('three');

const {watch,reactive,ref} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "imgFloor",
  props: {
    size: { default: [10, 10] },
    imgSrcPath: {},
    color: { default: "#fff" },
    opacity: { default: 0.95 },
    rotationZ: { default: 0.01 },
    textureRepeat: { default: [1, 1] }
  },
  setup(__props) {
    const tmRef = ref();
    const { onRender } = _l();
    onRender(() => {
      if (tmRef.value) {
        tmRef.value.rotation.z += props.rotationZ;
      }
    });
    const props = __props;
    const tmsMaterial = reactive({
      color: props.color,
      map: null,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: props.opacity,
      blending: THREE.AdditiveBlending,
      depthTest: true,
      depthWrite: false
    });
    const { state: pTexture, isLoading } = no(props.imgSrcPath);
    watch(
      () => pTexture.value,
      (texture) => {
        if (texture) {
          texture.colorSpace = THREE.SRGBColorSpace;
          texture.wrapS = THREE.RepeatWrapping;
          texture.wrapT = THREE.RepeatWrapping;
          texture.repeat.set(props.textureRepeat[0], props.textureRepeat[1]);
          tmsMaterial.map = texture;
        }
      }
    );
    watch(
      () => props.color,
      (newVal) => {
        tmsMaterial.color = new THREE.Color(newVal);
      }
    );
    watch(
      () => props.opacity,
      (newVal) => {
        tmsMaterial.opacity = newVal;
      }
    );
    return (_ctx, _cache) => {
      return !_unref(isLoading) ? (_openBlock(), _createElementBlock("TresMesh", {
        key: 0,
        ref_key: "tmRef",
        ref: tmRef,
        "rotation-x": -Math.PI / 2
      }, [
        _createElementVNode("TresPlaneGeometry", {
          args: props.size
        }, null, 8, _hoisted_2),
        _createElementVNode("TresMeshBasicMaterial", _normalizeProps(_guardReactiveProps(tmsMaterial)), null, 16)
      ], 8, _hoisted_1)) : _createCommentVNode("", true);
    };
  }
});

export { _sfc_main };
//# sourceMappingURL=imgFloor.vue_vue_type_script_setup_true_lang.D-OHfrvs1767105581793.js.map
