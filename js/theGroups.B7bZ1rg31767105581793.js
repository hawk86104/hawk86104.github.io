import { importShared, Kk } from './index.BxB45aCK1767105581793.js';

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,unref:_unref,createVNode:_createVNode,resolveComponent:_resolveComponent,withCtx:_withCtx,openBlock:_openBlock,createBlock:_createBlock} = await importShared('vue');

const {ref} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "theGroups",
  setup(__props) {
    const groupRef = ref();
    const onLoop = () => {
      if (groupRef.value) {
        groupRef.value.rotation.y += 0.01;
      }
    };
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createBlock(_component_TresCanvas, {
        clearColor: "#000000",
        "window-size": "",
        onLoop
      }, {
        default: _withCtx(() => [
          _cache[1] || (_cache[1] = _createElementVNode("TresPerspectiveCamera", {
            position: [5, 5, 5],
            fov: 75,
            aspect: 1,
            near: 0.1,
            far: 1e3
          }, null, -1)),
          _createVNode(_unref(Kk)),
          _cache[2] || (_cache[2] = _createElementVNode("TresAmbientLight", {
            color: 16777215,
            intensity: 0.5
          }, null, -1)),
          _createElementVNode("TresGroup", {
            ref_key: "groupRef",
            ref: groupRef,
            position: [0, -4, -5]
          }, [..._cache[0] || (_cache[0] = [
            _createElementVNode("TresMesh", {
              scale: 1,
              position: [-4, 0, 0],
              "cast-shadow": ""
            }, [
              _createElementVNode("TresSphereGeometry", { args: [1, 500, 500] }),
              _createElementVNode("TresMeshToonMaterial", { color: "#FBB03B" })
            ], -1),
            _createElementVNode("TresMesh", {
              scale: 1,
              position: [4, 0, 0],
              "cast-shadow": ""
            }, [
              _createElementVNode("TresSphereGeometry", { args: [1, 500, 500] }),
              _createElementVNode("TresMeshToonMaterial", { color: "teal" })
            ], -1)
          ])], 512),
          _cache[3] || (_cache[3] = _createElementVNode("TresDirectionalLight", {
            position: [0, 2, 4],
            intensity: 2,
            "cast-shadow": ""
          }, null, -1)),
          _cache[4] || (_cache[4] = _createElementVNode("TresAxesHelper", null, null, -1))
        ]),
        _: 1
      });
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=theGroups.B7bZ1rg31767105581793.js.map
