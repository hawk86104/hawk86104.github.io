import { importShared, gz, cz, Kk } from './index.BxB45aCK1767105581793.js';
import { _sfc_main$6 as _sfc_main$5 } from './generalFont.vue_vue_type_script_setup_true_lang.DqoG1H6g1767105581793.js';
import './default.vue_vue_type_script_setup_true_lang.DQGKkIwV1767105581793.js';
import './three-mesh-ui.module.CjQAT-M_1767105581793.js';
import './domPanel.vue_vue_type_style_index_0_lang.dV59iE041767105581793.js';
import { _sfc_main as _sfc_main$7 } from './reflectorShaderMesh.vue_vue_type_script_setup_true_lang.D0T9d0go1767105581793.js';
import { _sfc_main as _sfc_main$6 } from './model.vue_vue_type_script_setup_true_lang.CEnsjPVr1767105581793.js';

const {defineComponent:_defineComponent$4} = await importShared('vue');

const {createElementVNode:_createElementVNode$4,toDisplayString:_toDisplayString,unref:_unref$4,mergeProps:_mergeProps$4,withCtx:_withCtx$4,openBlock:_openBlock$4,createBlock:_createBlock$2} = await importShared('vue');

const _hoisted_1 = { class: "parallelogram" };
const _hoisted_2 = { class: "timeDiv" };
const {reactive: reactive$4,ref: ref$1} = await importShared('vue');
const _sfc_main$4 = /* @__PURE__ */ _defineComponent$4({
  __name: "illustratePropeller",
  setup(__props) {
    const state = reactive$4({
      wrapperClass: "illustrate1",
      as: "div",
      transform: true,
      distanceFactor: 120
    });
    const currentTime = ref$1((/* @__PURE__ */ new Date()).toLocaleString());
    setInterval(() => {
      currentTime.value = (/* @__PURE__ */ new Date()).toLocaleString();
    }, 1e3);
    return (_ctx, _cache) => {
      return _openBlock$4(), _createBlock$2(_unref$4(gz), _mergeProps$4(state, {
        position: [20, 150, 260],
        "rotation-y": -1
      }), {
        default: _withCtx$4(() => [
          _cache[1] || (_cache[1] = _createElementVNode$4("div", { class: "cStyle1 pos-relative text-white" }, null, -1)),
          _createElementVNode$4("div", _hoisted_1, [
            _cache[0] || (_cache[0] = _createElementVNode$4("span", null, "🔆 飞机螺旋桨", -1)),
            _createElementVNode$4("div", _hoisted_2, "📆: " + _toDisplayString(currentTime.value), 1)
          ])
        ]),
        _: 1
      }, 16);
    };
  }
});

const {defineComponent:_defineComponent$3} = await importShared('vue');

const {createElementVNode:_createElementVNode$3,unref:_unref$3,mergeProps:_mergeProps$3,withCtx:_withCtx$3,openBlock:_openBlock$3,createBlock:_createBlock$1} = await importShared('vue');

const {reactive: reactive$3} = await importShared('vue');
const _sfc_main$3 = /* @__PURE__ */ _defineComponent$3({
  __name: "illustrateWing",
  setup(__props) {
    const state = reactive$3({
      wrapperClass: "illustrate2",
      as: "div",
      sprite: true,
      transform: true,
      distanceFactor: 120,
      center: true
    });
    return (_ctx, _cache) => {
      return _openBlock$3(), _createBlock$1(_unref$3(gz), _mergeProps$3(state, { position: [-110, 180, 60] }), {
        default: _withCtx$3(() => [..._cache[0] || (_cache[0] = [
          _createElementVNode$3("div", { class: "cStyle1 pos-relative text-white" }, null, -1),
          _createElementVNode$3("div", { class: "parallelogram" }, [
            _createElementVNode$3("span", null, "🪃 飞机机翼"),
            _createElementVNode$3("div", { class: "contentDiv" }, "改善飞行的稳定性和操纵性")
          ], -1)
        ])]),
        _: 1
      }, 16);
    };
  }
});

const {defineComponent:_defineComponent$2} = await importShared('vue');

const {createElementVNode:_createElementVNode$2,unref:_unref$2,mergeProps:_mergeProps$2,withCtx:_withCtx$2,openBlock:_openBlock$2,createBlock:_createBlock} = await importShared('vue');

const {reactive: reactive$2} = await importShared('vue');
const _sfc_main$2 = /* @__PURE__ */ _defineComponent$2({
  __name: "illustrateTire",
  setup(__props) {
    const state = reactive$2({
      wrapperClass: "illustrateTire",
      as: "div",
      transform: true,
      distanceFactor: 120
    });
    return (_ctx, _cache) => {
      return _openBlock$2(), _createBlock(_unref$2(gz), _mergeProps$2(state, { position: [-120, 130, 150] }), {
        default: _withCtx$2(() => [..._cache[0] || (_cache[0] = [
          _createElementVNode$2("div", { class: "card pos-relative text-white" }, [
            _createElementVNode$2("div", { class: "glass" }),
            _createElementVNode$2("div", { class: "card-body" }, [
              _createElementVNode$2("h1", null, "🚀 WJ5E涡桨发动机"),
              _createElementVNode$2("p", null, " 中功率涡浆，功率2000千瓦，1992年已批量生产。 ")
            ])
          ], -1)
        ])]),
        _: 1
      }, 16);
    };
  }
});

const {defineComponent:_defineComponent$1} = await importShared('vue');

const {createElementVNode:_createElementVNode$1,unref:_unref$1,mergeProps:_mergeProps$1,withCtx:_withCtx$1,createVNode:_createVNode$1,Fragment:_Fragment$1,openBlock:_openBlock$1,createElementBlock:_createElementBlock$1} = await importShared('vue');

const {reactive: reactive$1,ref} = await importShared('vue');
const _sfc_main$1 = /* @__PURE__ */ _defineComponent$1({
  __name: "illustrateTireMesh",
  setup(__props) {
    const state = reactive$1({
      wrapperClass: "illustrateTireMesh",
      as: "div",
      transform: true,
      distanceFactor: 120
    });
    const glassRef = ref(null);
    return (_ctx, _cache) => {
      return _openBlock$1(), _createElementBlock$1(_Fragment$1, null, [
        _createVNode$1(_unref$1(gz), _mergeProps$1(state, { position: [180, 30, 150] }), {
          default: _withCtx$1(() => [..._cache[0] || (_cache[0] = [
            _createElementVNode$1("div", { class: "card pos-relative text-white" }, [
              _createElementVNode$1("div", { class: "glass" }),
              _createElementVNode$1("div", { class: "card-body" }, [
                _createElementVNode$1("h1", null, "🛞 飞机轮胎"),
                _createElementVNode$1("p", null, "良好平衡的轮胎和机轮组件有助于提供无摆振操作，并减少刹车和起落架部件(如扭矩连杆)的磨损。")
              ])
            ], -1)
          ])]),
          _: 1
        }, 16),
        _createElementVNode$1("TresMesh", {
          position: [180, 31, 150],
          ref_key: "glassRef",
          ref: glassRef
        }, [
          _cache[1] || (_cache[1] = _createElementVNode$1("TresBoxGeometry", { args: [106, 58, 6] }, null, -1)),
          _createVNode$1(_unref$1(cz))
        ], 512)
      ], 64);
    };
  }
});

const {defineComponent:_defineComponent} = await importShared('vue');

const {unref:_unref,createVNode:_createVNode,createElementVNode:_createElementVNode,mergeProps:_mergeProps,resolveComponent:_resolveComponent,withCtx:_withCtx,Fragment:_Fragment,openBlock:_openBlock,createElementBlock:_createElementBlock} = await importShared('vue');
const {reactive} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "divIllustrate",
  setup(__props) {
    const configState = reactive({
      reflectivity: 0.941,
      mirror: 113.25,
      mixStrength: 12,
      showGridHelper: true
    });
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createElementBlock(_Fragment, null, [
        _createVNode(_unref(_sfc_main$5)),
        _createVNode(_component_TresCanvas, {
          clearColor: "#333",
          "window-size": ""
        }, {
          default: _withCtx(() => [
            _cache[0] || (_cache[0] = _createElementVNode("TresPerspectiveCamera", {
              position: [-500, 330, 500],
              fov: 50,
              near: 0.1,
              far: 1e4
            }, null, -1)),
            _createVNode(_unref(Kk)),
            _cache[1] || (_cache[1] = _createElementVNode("TresAmbientLight", {
              color: "#ffffff",
              intensity: 1
            }, null, -1)),
            _cache[2] || (_cache[2] = _createElementVNode("TresDirectionalLight", {
              color: "#ffffff",
              position: [300, 300, 250],
              intensity: 6
            }, null, -1)),
            _createVNode(_sfc_main$6),
            _createVNode(_sfc_main$7, _mergeProps(configState, {
              scale: 100,
              position: [0, -1, 0]
            }), null, 16),
            _createVNode(_sfc_main$4),
            _createVNode(_sfc_main$3),
            _createVNode(_sfc_main$2),
            _createVNode(_sfc_main$1)
          ]),
          _: 1
        })
      ], 64);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=divIllustrate.C0m0Z8DC1767105581793.js.map
