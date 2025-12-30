import { importShared, Kk } from './index.BxB45aCK1767105581793.js';

const {defineComponent:_defineComponent$1} = await importShared('vue');

const {createElementVNode:_createElementVNode$1,openBlock:_openBlock$1,createElementBlock:_createElementBlock} = await importShared('vue');

const {shallowRef,watch} = await importShared('vue');

const _sfc_main$1 = /* @__PURE__ */ _defineComponent$1({
  __name: "SphereWithLOD",
  setup(__props) {
    const lodRef = shallowRef();
    const mesh1Ref = shallowRef();
    const mesh2Ref = shallowRef();
    const mesh3Ref = shallowRef();
    watch([mesh1Ref, mesh2Ref, mesh3Ref], () => {
      if (mesh1Ref.value && mesh2Ref.value && mesh3Ref.value) {
        lodRef.value?.addLevel(mesh1Ref.value, 0);
        lodRef.value?.addLevel(mesh2Ref.value, 10);
        lodRef.value?.addLevel(mesh3Ref.value, 20);
      }
    });
    return (_ctx, _cache) => {
      return _openBlock$1(), _createElementBlock("TresLOD", {
        ref_key: "lodRef",
        ref: lodRef
      }, [
        _createElementVNode$1("TresMesh", {
          ref_key: "mesh1Ref",
          ref: mesh1Ref
        }, [..._cache[0] || (_cache[0] = [
          _createElementVNode$1("TresSphereGeometry", { args: [2, 36, 36] }, null, -1),
          _createElementVNode$1("TresMeshStandardMaterial", {
            color: "#ff0000",
            wireframe: ""
          }, null, -1)
        ])], 512),
        _createElementVNode$1("TresMesh", {
          ref_key: "mesh2Ref",
          ref: mesh2Ref
        }, [..._cache[1] || (_cache[1] = [
          _createElementVNode$1("TresSphereGeometry", { args: [2, 12, 12] }, null, -1),
          _createElementVNode$1("TresMeshStandardMaterial", {
            color: "#00ff00",
            wireframe: ""
          }, null, -1)
        ])], 512),
        _createElementVNode$1("TresMesh", {
          ref_key: "mesh3Ref",
          ref: mesh3Ref
        }, [..._cache[2] || (_cache[2] = [
          _createElementVNode$1("TresSphereGeometry", { args: [2, 4, 4] }, null, -1),
          _createElementVNode$1("TresMeshStandardMaterial", {
            color: "#0000ff",
            wireframe: ""
          }, null, -1)
        ])], 512)
      ], 512);
    };
  }
});

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,unref:_unref,normalizeProps:_normalizeProps,guardReactiveProps:_guardReactiveProps,createVNode:_createVNode,resolveComponent:_resolveComponent,mergeProps:_mergeProps,withCtx:_withCtx,openBlock:_openBlock,createBlock:_createBlock} = await importShared('vue');

const {reactive} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "basicLod",
  setup(__props) {
    const state = reactive({
      windowSize: true,
      alpha: true,
      antialias: true,
      clearAlpha: 0,
      disableRender: true
    });
    const controlsState = reactive({
      enableDamping: true,
      enableZoom: true,
      enablePan: true,
      enableRotate: true,
      makeDefault: true
    });
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createBlock(_component_TresCanvas, _mergeProps({ clearColor: "#201919" }, state), {
        default: _withCtx(() => [
          _cache[0] || (_cache[0] = _createElementVNode("TresPerspectiveCamera", {
            fov: 60,
            near: 0.1,
            far: 2e3,
            position: [0, 0, 200],
            "look-at": [0, 0, 0]
          }, null, -1)),
          _cache[1] || (_cache[1] = _createElementVNode("TresAmbientLight", { intensity: 2 }, null, -1)),
          _createVNode(_unref(Kk), _normalizeProps(_guardReactiveProps(controlsState)), null, 16),
          _createVNode(_sfc_main$1, { position: [10, 0, 0] }),
          _createVNode(_sfc_main$1, { position: [0, 0, 0] }),
          _createVNode(_sfc_main$1, { position: [-10, 0, 0] }),
          _cache[2] || (_cache[2] = _createElementVNode("TresGridHelper", {
            args: [50, 50],
            position: [0, -5, 0]
          }, null, -1))
        ]),
        _: 1
      }, 16);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=basicLod.CT8dmppi1767105581793.js.map
