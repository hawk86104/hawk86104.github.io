import { importShared, Fs, Kk, _export_sfc } from './index.BxB45aCK1767105581793.js';
import { Pane } from './tweakpane.Cvt5w0bb1767105581793.js';

const {defineComponent:_defineComponent$1} = await importShared('vue');

const {createElementVNode:_createElementVNode$1,openBlock:_openBlock$1,createElementBlock:_createElementBlock} = await importShared('vue');
const {shallowRef: shallowRef$1,watch} = await importShared('vue');

const _sfc_main$1 = /* @__PURE__ */ _defineComponent$1({
  __name: "SphereWithManualLOD",
  setup(__props, { expose: __expose }) {
    const lodRef = shallowRef$1();
    const mesh1Ref = shallowRef$1();
    const mesh2Ref = shallowRef$1();
    const mesh3Ref = shallowRef$1();
    watch([mesh1Ref, mesh2Ref, mesh3Ref], () => {
      if (mesh1Ref.value && mesh2Ref.value && mesh3Ref.value) {
        lodRef.value?.addLevel(mesh1Ref.value, 0);
        lodRef.value?.addLevel(mesh2Ref.value, 10);
        lodRef.value?.addLevel(mesh3Ref.value, 20);
        updateLOD();
      }
    });
    const { camera } = Fs();
    const updateLOD = () => {
      if (camera.value) lodRef.value?.update(camera.value);
    };
    const getLevel = () => {
      return lodRef.value?.getCurrentLevel();
    };
    __expose({ updateLOD, getLevel });
    return (_ctx, _cache) => {
      return _openBlock$1(), _createElementBlock("TresLOD", {
        ref_key: "lodRef",
        ref: lodRef,
        autoUpdate: false
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

const {createElementVNode:_createElementVNode,createVNode:_createVNode,unref:_unref,normalizeProps:_normalizeProps,guardReactiveProps:_guardReactiveProps,resolveComponent:_resolveComponent,withCtx:_withCtx,openBlock:_openBlock,createBlock:_createBlock} = await importShared('vue');

const {reactive,shallowRef} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "manualLod",
  setup(__props) {
    const sphereRef = shallowRef();
    const cameraRef = shallowRef();
    const panel = new Pane();
    panel.addButton({ title: "更新LOD" }).on("click", () => {
      sphereRef.value?.updateLOD();
    });
    const levelBinding = panel.addBlade({
      view: "text",
      label: "LOD级别",
      parse: (v) => String(v),
      value: "0"
    });
    panel.addButton({ title: "获取LOD级别" }).on("click", () => {
      if (sphereRef.value) {
        const level = sphereRef.value.getLevel();
        levelBinding.value = level;
      }
    });
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
      return _openBlock(), _createBlock(_component_TresCanvas, _normalizeProps(_guardReactiveProps(state)), {
        default: _withCtx(() => [
          _createElementVNode("TresPerspectiveCamera", {
            ref_key: "cameraRef",
            ref: cameraRef,
            fov: 60,
            near: 0.1,
            far: 2e3,
            position: [0, 0, 25],
            "look-at": [0, 0, 0]
          }, null, 512),
          _cache[0] || (_cache[0] = _createElementVNode("TresAmbientLight", { intensity: 2 }, null, -1)),
          _createVNode(_sfc_main$1, {
            ref_key: "sphereRef",
            ref: sphereRef
          }, null, 512),
          _createVNode(_unref(Kk), _normalizeProps(_guardReactiveProps(controlsState)), null, 16)
        ]),
        _: 1
      }, 16);
    };
  }
});

const manualLod = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ca744c40"]]);

export { manualLod as default };
//# sourceMappingURL=manualLod.Cb5aCvUw1767105581793.js.map
