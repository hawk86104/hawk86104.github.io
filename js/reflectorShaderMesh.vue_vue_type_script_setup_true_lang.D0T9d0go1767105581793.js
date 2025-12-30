import { importShared, Fs, rz } from './index.BxB45aCK1767105581793.js';
import { Reflector, ReflectorMaterial } from './OimoPhysicsController.JGy48uNn1767105581793.js';
import { fixSpritesForMirror } from './utils.DIIwn7WV1767105581793.js';

const {defineComponent:_defineComponent} = await importShared('vue');

const {unref:_unref,createElementVNode:_createElementVNode,openBlock:_openBlock,createElementBlock:_createElementBlock,createCommentVNode:_createCommentVNode} = await importShared('vue');

const _hoisted_1 = { key: 0 };
const _hoisted_2 = ["object"];
const _hoisted_3 = ["object"];
const {Vector2,PlaneGeometry,Mesh,RepeatWrapping,Color,GridHelper} = await importShared('three');
const {watchEffect,watch} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "reflectorShaderMesh",
  props: {
    reflectivity: { default: 0.2 },
    mirror: { default: 0.1 },
    mixStrength: { default: 9 },
    showGridHelper: { type: Boolean, default: true },
    color: { default: "#ffffff" }
  },
  setup(__props) {
    const props = __props;
    const { scene } = Fs();
    const { textures: pTexture, isLoading } = rz([
      "./plugins/floor/image/concrete_wet_floor_basecolor.jpg",
      "./plugins/floor/image/concrete_wet_floor_normal.jpg"
    ]);
    let material = null;
    let meshOB = null;
    let gridHelp = null;
    watch([pTexture, isLoading], ([pTexture2, isLoading2]) => {
      if (pTexture2 && pTexture2.length === 2 && !isLoading2) {
        pTexture2[0].wrapS = RepeatWrapping;
        pTexture2[0].wrapT = RepeatWrapping;
        pTexture2[1].wrapS = RepeatWrapping;
        pTexture2[1].wrapT = RepeatWrapping;
        const reflector = new Reflector();
        material = new ReflectorMaterial({
          reflectivity: props.reflectivity,
          //反射率
          mirror: props.mirror,
          mixStrength: props.mixStrength,
          color: new Color(props.color),
          map: pTexture2[0],
          normalMap: pTexture2[1],
          normalScale: new Vector2(5, 5),
          fog: scene.value.fog,
          dithering: true
        });
        material.uniforms.tReflect = reflector.renderTargetUniform;
        material.uniforms.uMatrix = reflector.textureMatrixUniform;
        const geometry = new PlaneGeometry(10, 10);
        meshOB = new Mesh(geometry, material);
        meshOB.name = "reflectorShaderMesh";
        meshOB.position.y = -0.01;
        meshOB.rotation.x = -Math.PI / 2;
        meshOB.add(reflector);
        meshOB.onBeforeRender = (rendererSelf, sceneSelf, cameraSelf) => {
          meshOB.visible = false;
          fixSpritesForMirror(sceneSelf);
          reflector.update(rendererSelf, sceneSelf, cameraSelf);
          fixSpritesForMirror(sceneSelf, false);
          meshOB.visible = true;
        };
        gridHelp = new GridHelper(9.5, 10);
        gridHelp.visible = props.showGridHelper;
      }
    });
    watchEffect(() => {
      if (props.reflectivity && material) {
        material.uniforms.uReflectivity.value = props.reflectivity;
      }
      if (props.mirror && material) {
        material.uniforms.uMirror.value = props.mirror;
      }
      if (props.mixStrength && material) {
        material.uniforms.uMixStrength.value = props.mixStrength;
      }
      if (props.color && material) {
        material.uniforms.uColor.value = new Color(props.color);
      }
    });
    watch(
      () => props.showGridHelper,
      (newVal) => {
        gridHelp.visible = newVal;
      }
    );
    return (_ctx, _cache) => {
      return !_unref(isLoading) ? (_openBlock(), _createElementBlock("TresGroup", _hoisted_1, [
        _createElementVNode("primitive", { object: _unref(meshOB) }, null, 8, _hoisted_2),
        _createElementVNode("primitive", {
          object: _unref(gridHelp),
          position: [0, 0.01, 0]
        }, null, 8, _hoisted_3)
      ])) : _createCommentVNode("", true);
    };
  }
});

export { _sfc_main };
//# sourceMappingURL=reflectorShaderMesh.vue_vue_type_script_setup_true_lang.D0T9d0go1767105581793.js.map
