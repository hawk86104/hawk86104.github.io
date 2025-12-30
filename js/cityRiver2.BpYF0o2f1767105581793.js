import { importShared, NA } from './index.BxB45aCK1767105581793.js';
import { _sfc_main as _sfc_main$3 } from './pagesShow.vue_vue_type_script_setup_true_lang.DfPQrWBQ1767105581793.js';
import { _sfc_main as _sfc_main$2 } from './threeWater2.vue_vue_type_script_setup_true_lang.035_zBjl1767105581793.js';
import { Pane } from './tweakpane.Cvt5w0bb1767105581793.js';

const {defineComponent:_defineComponent$1} = await importShared('vue');

const {unref:_unref,openBlock:_openBlock$1,createElementBlock:_createElementBlock,createCommentVNode:_createCommentVNode,mergeProps:_mergeProps,createVNode:_createVNode$1,Suspense:_Suspense$1,withCtx:_withCtx$1,createBlock:_createBlock$1} = await importShared('vue');

const _hoisted_1 = {
  position: [-1553.1671459739368, 160.56147161757758, 1938.3955926284068],
  scale: 400,
  rotation: [-3.141592653589793, 1.0149796591022564, -3.141592653589793]
};
const _hoisted_2 = ["object"];
const {reactive} = await importShared('vue');
const {watch} = await importShared('vue');

const _sfc_main$1 = /* @__PURE__ */ _defineComponent$1({
  __name: "indexBackup",
  setup(__props) {
    const { state: pState, nodes } = NA("https://a.amap.com/jsapi_demos/static/gltf-online/shanghai/scene.gltf");
    watch(
      () => pState.value,
      (state) => {
        if (!state?.scene) return;
        state.scene.renderOrder = 9999;
      }
    );
    nodes.mesh_0.material.transparent = false;
    nodes.mesh_0.material.depthWrite = true;
    nodes.mesh_0.material.depthTest = true;
    nodes.mesh_0.material.opacity = 0.7;
    const water2State = reactive({
      color: "#FFF",
      scale: 1
    });
    const paneControl = new Pane({
      title: "河流参数",
      expanded: true
    });
    paneControl.addBinding(water2State, "color");
    return (_ctx, _cache) => {
      return _openBlock$1(), _createElementBlock("TresGroup", _hoisted_1, [
        _unref(pState) ? (_openBlock$1(), _createElementBlock("primitive", {
          key: 0,
          object: _unref(pState)?.scene
        }, null, 8, _hoisted_2)) : _createCommentVNode("", true),
        (_openBlock$1(), _createBlock$1(_Suspense$1, null, {
          default: _withCtx$1(() => [
            _createVNode$1(_sfc_main$2, _mergeProps({
              "position-y": 1e-4,
              waterGeometry: _unref(nodes).mesh_0.geometry
            }, water2State), null, 16, ["waterGeometry"])
          ]),
          _: 1
        }))
      ]);
    };
  }
});

const {defineComponent:_defineComponent} = await importShared('vue');

const {createVNode:_createVNode,Suspense:_Suspense,withCtx:_withCtx,openBlock:_openBlock,createBlock:_createBlock} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "cityRiver2",
  setup(__props) {
    return (_ctx, _cache) => {
      return _openBlock(), _createBlock(_sfc_main$3, {
        showAxesHelper: false,
        showGridHelper: false,
        showBuildings: true
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
      });
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=cityRiver2.BpYF0o2f1767105581793.js.map
