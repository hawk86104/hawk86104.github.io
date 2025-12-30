import { importShared, _l } from './index.BxB45aCK1767105581793.js';

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,normalizeProps:_normalizeProps,guardReactiveProps:_guardReactiveProps,openBlock:_openBlock,createElementBlock:_createElementBlock} = await importShared('vue');

const _hoisted_1 = ["rotation-x"];
const _hoisted_2 = ["args"];
const THREE = await importShared('three');

const {watch,reactive,ref} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "videoFloor",
  props: {
    size: { default: [10, 10] },
    vSrcPath: {},
    loop: { type: Boolean, default: true },
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
    let video = document.createElement("video");
    video.src = props.vSrcPath;
    video.loop = props.loop;
    video.muted = true;
    video.crossOrigin = "";
    video.play();
    let videoTexture = new THREE.VideoTexture(video);
    videoTexture.wrapS = THREE.RepeatWrapping;
    videoTexture.wrapT = THREE.RepeatWrapping;
    videoTexture.repeat.set(props.textureRepeat[0], props.textureRepeat[1]);
    const tmsMaterial = reactive({
      color: props.color,
      alphaMap: videoTexture,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: props.opacity,
      blending: THREE.AdditiveBlending,
      flatShading: true,
      depthTest: true,
      depthWrite: true
    });
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
      return _openBlock(), _createElementBlock("TresMesh", {
        ref_key: "tmRef",
        ref: tmRef,
        "rotation-x": -Math.PI / 2
      }, [
        _createElementVNode("TresPlaneGeometry", {
          args: props.size
        }, null, 8, _hoisted_2),
        _createElementVNode("TresMeshStandardMaterial", _normalizeProps(_guardReactiveProps(tmsMaterial)), null, 16)
      ], 8, _hoisted_1);
    };
  }
});

export { _sfc_main };
//# sourceMappingURL=videoFloor.vue_vue_type_script_setup_true_lang.BEyCiDvU1767105581793.js.map
