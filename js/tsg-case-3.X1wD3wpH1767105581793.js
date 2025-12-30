import { importShared, Kk } from './index.BxB45aCK1767105581793.js';
import { WebGPURenderer } from './three.webgpu.CKPDRXH51767105581793.js';
import { tsg } from './tsg.DSJ6_cJ41767105581793.js';
import { Mesh, BoxGeometry } from './three.CUbUWUeC1767105581793.js';

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,unref:_unref,normalizeProps:_normalizeProps,guardReactiveProps:_guardReactiveProps,createVNode:_createVNode,openBlock:_openBlock,createElementBlock:_createElementBlock,createCommentVNode:_createCommentVNode,Suspense:_Suspense,withCtx:_withCtx,createBlock:_createBlock,resolveComponent:_resolveComponent,mergeProps:_mergeProps} = await importShared('vue');

const _hoisted_1 = ["object"];
const {reactive,watch,ref,toValue,shallowRef,onMounted} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "tsg-case-3",
  setup(__props) {
    const redMaterial = ref();
    const createWebGPURenderer = (ctx) => {
      const renderer = new WebGPURenderer({
        canvas: toValue(ctx.canvas),
        alpha: true,
        antialias: true
      });
      renderer.setClearColor(1776411);
      return renderer;
    };
    const model = shallowRef();
    onMounted(async () => {
      const tsgStr = await fetch("/plugins/tsl/shader/hologram.tsg").then((res) => res.text());
      const tsgObj = tsg(tsgStr);
      const mesh = new Mesh(
        new BoxGeometry(1, 1, 1, 32, 32, 32),
        tsgObj.material
      );
      model.value = mesh;
    });
    watch(redMaterial, (newVal) => {
      if (newVal) {
        console.log("redMaterial", newVal);
      }
    });
    const state = reactive({
      windowSize: true
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
      return _openBlock(), _createBlock(_component_TresCanvas, _mergeProps(state, { renderer: createWebGPURenderer }), {
        default: _withCtx(() => [
          _cache[0] || (_cache[0] = _createElementVNode("TresPerspectiveCamera", {
            fov: 60,
            near: 0.1,
            far: 2e3,
            position: [3, 3, 3],
            "look-at": [0, 0, 0]
          }, null, -1)),
          _cache[1] || (_cache[1] = _createElementVNode("TresDirectionalLight", {
            intensity: 2,
            position: [10, 100, -50]
          }, null, -1)),
          _cache[2] || (_cache[2] = _createElementVNode("TresDirectionalLight", {
            intensity: 2,
            position: [-10, -10, 100]
          }, null, -1)),
          _createVNode(_unref(Kk), _normalizeProps(_guardReactiveProps(controlsState)), null, 16),
          (_openBlock(), _createBlock(_Suspense, null, {
            default: _withCtx(() => [
              model.value ? (_openBlock(), _createElementBlock("primitive", {
                key: 0,
                "position-y": 0,
                object: model.value
              }, null, 8, _hoisted_1)) : _createCommentVNode("", true)
            ]),
            _: 1
          })),
          _cache[3] || (_cache[3] = _createElementVNode("TresGridHelper", {
            args: [50, 50],
            position: [0, 0, 0]
          }, null, -1))
        ]),
        _: 1
      }, 16);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=tsg-case-3.X1wD3wpH1767105581793.js.map
