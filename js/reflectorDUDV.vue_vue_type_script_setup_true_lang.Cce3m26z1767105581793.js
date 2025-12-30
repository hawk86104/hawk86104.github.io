import { importShared, qiankunWindow_1, no } from './index.BxB45aCK1767105581793.js';
import { Reflector, ReflectorDudvMaterial } from './OimoPhysicsController.JGy48uNn1767105581793.js';
import { fixSpritesForMirror } from './utils.DIIwn7WV1767105581793.js';

const {defineComponent:_defineComponent} = await importShared('vue');

const {unref:_unref,createElementVNode:_createElementVNode,openBlock:_openBlock,createElementBlock:_createElementBlock,createCommentVNode:_createCommentVNode} = await importShared('vue');

const _hoisted_1 = ["scale"];
const _hoisted_2 = ["object"];
const _hoisted_3 = ["object"];
const THREE = await importShared('three');

const {Mesh,PlaneGeometry,RepeatWrapping,GridHelper} = await importShared('three');
const {watchEffect,watch,ref,toRaw} = await importShared('vue');

const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "reflectorDUDV",
  props: {
    reflectivity: { default: 0.8 },
    showGridHelper: { type: Boolean, default: true },
    scale: { default: 1 },
    ignoreObjects: { default: () => [] },
    size: { default: () => [10, 10] },
    mapUrl: { default: "./plugins/floor/image/waterdudv.jpg" }
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const reflector = new Reflector();
    const gridHelp = new GridHelper(props.size[0] - 0.5, props.size[1]);
    gridHelp.visible = props.showGridHelper;
    let mapurl = props.mapUrl;
    if (qiankunWindow_1.__POWERED_BY_QIANKUN__) {
      mapurl = qiankunWindow_1.__INJECTED_PUBLIC_PATH_BY_QIANKUN__ + mapurl;
      console.log("qiankunWindow.__INJECTED_PUBLIC_PATH_BY_QIANKUN__", qiankunWindow_1.__INJECTED_PUBLIC_PATH_BY_QIANKUN__);
      console.log("process.env.BASE_URL", "./");
    }
    let material = null;
    let mirror = ref(null);
    const { state: map, isLoading } = no(mapurl);
    watch(
      () => map.value,
      (mapv) => {
        if (mapv) {
          mapv.wrapS = RepeatWrapping;
          mapv.wrapT = RepeatWrapping;
          mapv.colorSpace = THREE.SRGBColorSpace;
          mapv.repeat.set(6, 3);
          material = new ReflectorDudvMaterial({
            map: mapv,
            reflectivity: props.reflectivity
          });
          material.uniforms.tReflect = { value: reflector.renderTarget.texture };
          material.uniforms.tReflectBlur = reflector.renderTargetUniform;
          material.uniforms.uMatrix = reflector.textureMatrixUniform;
          mirror.value = new Mesh(new PlaneGeometry(props.size[0], props.size[1]), void 0);
          mirror.value.material = material;
          mirror.value.rotation.x = -Math.PI / 2;
          mirror.value.add(reflector);
          mirror.value.onBeforeRender = (rendererSelf, sceneSelf, cameraSelf) => {
            mirror.value.visible = false;
            props.ignoreObjects.forEach((child) => {
              if (child.isMesh) {
                child.visible = false;
              }
              if (child.value && child.value.isMesh) {
                child.value.visible = false;
              }
            });
            fixSpritesForMirror(sceneSelf);
            reflector.update(rendererSelf, sceneSelf, cameraSelf);
            fixSpritesForMirror(sceneSelf, false);
            props.ignoreObjects.forEach((child) => {
              if (child.isMesh) {
                child.visible = true;
              }
              if (child.value && child.value.isMesh) {
                child.value.visible = true;
              }
            });
            mirror.value.visible = true;
          };
        }
      }
    );
    watchEffect(() => {
      if (props.reflectivity && material) {
        material.uniforms.uReflectivity.value = props.reflectivity;
      }
    });
    watch(
      () => props.showGridHelper,
      (newVal) => {
        gridHelp.visible = newVal;
      }
    );
    __expose({
      reflector
    });
    return (_ctx, _cache) => {
      return !_unref(isLoading) ? (_openBlock(), _createElementBlock("TresGroup", {
        key: 0,
        scale: [_ctx.scale, 1, _ctx.scale]
      }, [
        _createElementVNode("primitive", {
          object: toRaw(_unref(mirror)),
          "position-y": -0.01
        }, null, 8, _hoisted_2),
        _createElementVNode("primitive", { object: _unref(gridHelp) }, null, 8, _hoisted_3)
      ], 8, _hoisted_1)) : _createCommentVNode("", true);
    };
  }
});

export { _sfc_main };
//# sourceMappingURL=reflectorDUDV.vue_vue_type_script_setup_true_lang.Cce3m26z1767105581793.js.map
