import { importShared, NA } from './index.BxB45aCK1767105581793.js';
import { _sfc_main as _sfc_main$3 } from './pagesShow.vue_vue_type_script_setup_true_lang.DfPQrWBQ1767105581793.js';
import { _sfc_main as _sfc_main$2 } from './threeWater2.vue_vue_type_script_setup_true_lang.035_zBjl1767105581793.js';
import { Pane } from './tweakpane.Cvt5w0bb1767105581793.js';

const {defineComponent:_defineComponent$1} = await importShared('vue');

const {unref:_unref,openBlock:_openBlock$1,createElementBlock:_createElementBlock,createCommentVNode:_createCommentVNode,mergeProps:_mergeProps,createBlock:_createBlock$1} = await importShared('vue');

const _hoisted_1 = { position: [0, 0, -2] };
const _hoisted_2 = ["object"];
const {reactive} = await importShared('vue');
const {watch: watch$1} = await importShared('vue');

const _sfc_main$1 = /* @__PURE__ */ _defineComponent$1({
  __name: "index",
  setup(__props) {
    const { state: pState, nodes } = NA("https://a.amap.com/jsapi_demos/static/gltf-online/shanghai/scene.gltf");
    watch$1(
      () => pState.value,
      (state) => {
        if (!state?.scene) return;
        state.scene.renderOrder = 9999;
        nodes.value.mesh_0.material.transparent = true;
        nodes.value.mesh_0.material.depthWrite = true;
        nodes.value.mesh_0.material.depthTest = true;
        nodes.value.mesh_0.material.opacity = 0.7;
      }
    );
    const water2State = reactive({
      color: "#f857cc",
      scale: 3.1,
      modelVisible: true
    });
    const paneControl = new Pane({
      title: "河流参数",
      expanded: true
    });
    paneControl.addBinding(water2State, "modelVisible", { label: "模型显示" }).on("change", (ev) => {
      nodes.value.mesh_0.visible = ev.value;
    });
    paneControl.addBinding(water2State, "scale", {
      label: "分辨率",
      min: 0.1,
      max: 10,
      step: 0.1
    });
    paneControl.addBinding(water2State, "color", { label: "河水颜色" });
    return (_ctx, _cache) => {
      return _openBlock$1(), _createElementBlock("TresGroup", _hoisted_1, [
        _unref(pState) ? (_openBlock$1(), _createElementBlock("primitive", {
          key: 0,
          object: _unref(pState)?.scene
        }, null, 8, _hoisted_2)) : _createCommentVNode("", true),
        _unref(pState) ? (_openBlock$1(), _createBlock$1(_sfc_main$2, _mergeProps({
          key: 1,
          "position-y": 1e-4,
          waterGeometry: _unref(nodes).mesh_0.geometry
        }, water2State), null, 16, ["waterGeometry"])) : _createCommentVNode("", true)
      ]);
    };
  }
});

const {defineComponent:_defineComponent} = await importShared('vue');

const {createVNode:_createVNode,Suspense:_Suspense,withCtx:_withCtx,openBlock:_openBlock,createBlock:_createBlock} = await importShared('vue');

const {shallowRef,watch} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "cityRiver",
  setup(__props) {
    const pagesShowRef = shallowRef();
    watch(
      () => pagesShowRef.value?.contextReady,
      (newVal) => {
        if (newVal) {
          pagesShowRef.value.context.context.camera.activeCamera.value.position.set(4, 2.15, 3.6);
        }
      }
    );
    watch(
      () => pagesShowRef.value?.context.context.controls.value,
      (newVal) => {
        if (newVal) {
          newVal.target.set(0, -1, 0);
        }
      }
    );
    return (_ctx, _cache) => {
      return _openBlock(), _createBlock(_sfc_main$3, {
        ref_key: "pagesShowRef",
        ref: pagesShowRef,
        showAxesHelper: false,
        showGridHelper: false,
        showBuildings: false,
        autoRotate: false
      }, {
        ability: _withCtx(() => [
          (_openBlock(), _createBlock(_Suspense, null, {
            default: _withCtx(() => [
              _createVNode(_sfc_main$1)
            ]),
            _: 1
          }))
        ]),
        _: 1
      }, 512);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=cityRiver.D4W6kAyU1767105581793.js.map
