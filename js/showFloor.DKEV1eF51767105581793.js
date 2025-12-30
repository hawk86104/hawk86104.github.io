import { importShared, zr, Kk } from './index.BxB45aCK1767105581793.js';
import './customShaderMaterial.vue_vue_type_script_setup_true_lang.rDMIDGqx1767105581793.js';
import './index.vue_vue_type_script_setup_true_lang.D7-hpzmy1767105581793.js';
import { useGLTF } from './index.CTrIPOkZ1767105581793.js';
import { Reflector, ReflectorMaterial } from './OimoPhysicsController.JGy48uNn1767105581793.js';
import { mergeGeometries } from './BufferGeometryUtils.NxcZsV4J1767105581793.js';

const {withAsyncContext:_withAsyncContext,defineComponent:_defineComponent$1} = await importShared('vue');

const {unref:_unref$1,openBlock:_openBlock$1,createElementBlock:_createElementBlock} = await importShared('vue');

const _hoisted_1 = ["rotation-x", "object"];
const {Vector2,Color,Mesh,Matrix4} = await importShared('three');
const _sfc_main$1 = /* @__PURE__ */ _defineComponent$1({
  __name: "sciFiModular",
  async setup(__props) {
    let __temp, __restore;
    const { scene } = zr();
    const { nodes } = ([__temp, __restore] = _withAsyncContext(() => useGLTF(
      ("https://opensource.cdn.icegl.cn") + "/model/floor/modelDraco.glb"
    )), __temp = await __temp, __restore(), __temp);
    const ob = nodes.Cube016__0;
    const geometry = ob.geometry;
    const bufferGeometries = mergeGeometries([
      geometry.clone(),
      geometry.clone().applyMatrix4(new Matrix4().makeRotationZ(-Math.PI / 2)),
      geometry.clone().applyMatrix4(new Matrix4().makeRotationZ(Math.PI / 2)),
      geometry.clone().applyMatrix4(new Matrix4().makeRotationZ(-Math.PI))
    ]);
    const reflector = new Reflector();
    const material = new ReflectorMaterial({
      reflectivity: 6,
      //反射率
      mirror: 0.1,
      mixStrength: 3,
      color: new Color("#fff"),
      map: ob.material.map.clone(),
      normalMap: ob.material.normalMap.clone(),
      normalScale: new Vector2(1, 1),
      fog: scene.fog,
      dithering: true
    });
    material.uniforms.tReflect = reflector.renderTargetUniform;
    material.uniforms.uMatrix = reflector.textureMatrixUniform;
    const meshOB = new Mesh(bufferGeometries, material);
    meshOB.add(reflector);
    meshOB.onBeforeRender = (rendererSelf, sceneSelf, cameraSelf) => {
      meshOB.visible = false;
      reflector.update(rendererSelf, sceneSelf, cameraSelf);
      meshOB.visible = true;
    };
    return (_ctx, _cache) => {
      return _openBlock$1(), _createElementBlock("primitive", {
        "rotation-x": -Math.PI / 2,
        object: _unref$1(meshOB)
      }, null, 8, _hoisted_1);
    };
  }
});

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,unref:_unref,createVNode:_createVNode,Suspense:_Suspense,withCtx:_withCtx,openBlock:_openBlock,createBlock:_createBlock,resolveComponent:_resolveComponent} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "showFloor",
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createBlock(_component_TresCanvas, {
        clearColor: "#201919",
        "window-size": ""
      }, {
        default: _withCtx(() => [
          _cache[0] || (_cache[0] = _createElementVNode("TresPerspectiveCamera", {
            position: [15, 15, 15],
            fov: 45,
            near: 0.1,
            far: 1e5,
            "look-at": [0, 0, 0]
          }, null, -1)),
          _createVNode(_unref(Kk), { enableDamping: "" }),
          _cache[1] || (_cache[1] = _createElementVNode("TresAmbientLight", { intensity: 10 }, null, -1)),
          _cache[2] || (_cache[2] = _createElementVNode("TresMesh", { position: [3, 2, 0] }, [
            _createElementVNode("TresBoxGeometry", { args: [2, 2, 2] }),
            _createElementVNode("TresMeshNormalMaterial", { wireframe: true })
          ], -1)),
          _cache[3] || (_cache[3] = _createElementVNode("TresMesh", { position: [0, 1.2, 0] }, [
            _createElementVNode("TresBoxGeometry", { args: [1, 1, 1] }),
            _createElementVNode("TresMeshNormalMaterial")
          ], -1)),
          (_openBlock(), _createBlock(_Suspense, null, {
            default: _withCtx(() => [
              _createVNode(_sfc_main$1)
            ]),
            _: 1
          }))
        ]),
        _: 1
      });
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=showFloor.DKEV1eF51767105581793.js.map
