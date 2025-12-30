import { importShared, gz, Kk } from './index.BxB45aCK1767105581793.js';

const {defineComponent:_defineComponent$3} = await importShared('vue');

const {createElementVNode:_createElementVNode$3,unref:_unref$3,normalizeProps:_normalizeProps$2,guardReactiveProps:_guardReactiveProps$2,withCtx:_withCtx$3,openBlock:_openBlock$3,createBlock:_createBlock$3} = await importShared('vue');

const {reactive: reactive$2} = await importShared('vue');
const _sfc_main$3 = /* @__PURE__ */ _defineComponent$3({
  __name: "divS1",
  setup(__props) {
    const state = reactive$2({
      wrapperClass: "divS1",
      as: "div"
    });
    return (_ctx, _cache) => {
      return _openBlock$3(), _createBlock$3(_unref$3(gz), _normalizeProps$2(_guardReactiveProps$2(state)), {
        default: _withCtx$3(() => [..._cache[0] || (_cache[0] = [
          _createElementVNode$3("div", { class: "boxStyle1 pos-relative left-20 top--30 text-white" }, " 这是正方形 📦 ", -1)
        ])]),
        _: 1
      }, 16);
    };
  }
});

const {defineComponent:_defineComponent$2} = await importShared('vue');

const {createElementVNode:_createElementVNode$2,unref:_unref$2,normalizeProps:_normalizeProps$1,guardReactiveProps:_guardReactiveProps$1,withCtx:_withCtx$2,openBlock:_openBlock$2,createBlock:_createBlock$2} = await importShared('vue');

const _hoisted_1$2 = { class: "poputs_show_cl" };
const _hoisted_2$1 = { class: "oneline" };
const _hoisted_3$1 = ["src"];
const _hoisted_4$1 = { class: "oneline" };
const _hoisted_5$1 = ["src"];
const _hoisted_6$1 = { class: "oneline" };
const _hoisted_7$1 = ["src"];
const {reactive: reactive$1} = await importShared('vue');
const _sfc_main$2 = /* @__PURE__ */ _defineComponent$2({
  __name: "divS2",
  setup(__props) {
    const state = reactive$1({
      wrapperClass: "divS2",
      as: "div"
    });
    let publicPath = "./";
    return (_ctx, _cache) => {
      return _openBlock$2(), _createBlock$2(_unref$2(gz), _normalizeProps$1(_guardReactiveProps$1(state)), {
        default: _withCtx$2(() => [
          _createElementVNode$2("div", _hoisted_1$2, [
            _createElementVNode$2("div", _hoisted_2$1, [
              _cache[0] || (_cache[0] = _createElementVNode$2("div", { class: "name" }, "最远距离(km)", -1)),
              _cache[1] || (_cache[1] = _createElementVNode$2("div", { class: "num_s" }, "120", -1)),
              _createElementVNode$2("img", {
                src: _unref$2(publicPath) + "/plugins/UIdemo/image/jiantou1.png"
              }, null, 8, _hoisted_3$1),
              _cache[2] || (_cache[2] = _createElementVNode$2("div", { class: "num_end" }, "30", -1))
            ]),
            _createElementVNode$2("div", _hoisted_4$1, [
              _cache[3] || (_cache[3] = _createElementVNode$2("div", { class: "name" }, "切片(层)", -1)),
              _cache[4] || (_cache[4] = _createElementVNode$2("div", { class: "num_s" }, "10", -1)),
              _createElementVNode$2("img", {
                src: _unref$2(publicPath) + "/plugins/UIdemo/image/jiantou2.png"
              }, null, 8, _hoisted_5$1),
              _cache[5] || (_cache[5] = _createElementVNode$2("div", { class: "num_end" }, "50", -1))
            ]),
            _createElementVNode$2("div", _hoisted_6$1, [
              _cache[6] || (_cache[6] = _createElementVNode$2("div", { class: "name" }, "最大速度(m/s)", -1)),
              _cache[7] || (_cache[7] = _createElementVNode$2("div", { class: "num_s" }, "12", -1)),
              _createElementVNode$2("img", {
                src: _unref$2(publicPath) + "/plugins/UIdemo/image/jiantou2.png"
              }, null, 8, _hoisted_7$1),
              _cache[8] || (_cache[8] = _createElementVNode$2("div", { class: "num_end" }, "46", -1))
            ])
          ])
        ]),
        _: 1
      }, 16);
    };
  }
});

const {defineComponent:_defineComponent$1} = await importShared('vue');

const {createElementVNode:_createElementVNode$1,unref:_unref$1,normalizeProps:_normalizeProps,guardReactiveProps:_guardReactiveProps,withCtx:_withCtx$1,openBlock:_openBlock$1,createBlock:_createBlock$1} = await importShared('vue');

const _hoisted_1$1 = { class: "poputs_show_cl" };
const _hoisted_2 = { class: "oneline" };
const _hoisted_3 = ["src"];
const _hoisted_4 = { class: "oneline" };
const _hoisted_5 = ["src"];
const _hoisted_6 = { class: "oneline" };
const _hoisted_7 = ["src"];
const {reactive} = await importShared('vue');
const _sfc_main$1 = /* @__PURE__ */ _defineComponent$1({
  __name: "divSprite",
  setup(__props) {
    const state = reactive({
      wrapperClass: "divS2",
      as: "div",
      sprite: true,
      center: true,
      //居中
      transform: true,
      //根据模型同步变换矩阵
      distanceFactor: 1
      // material: new MeshPhongMaterial({ color: 'red' }),
      // geometry: new BoxGeometry()
    });
    let publicPath = "./";
    return (_ctx, _cache) => {
      return _openBlock$1(), _createBlock$1(_unref$1(gz), _normalizeProps(_guardReactiveProps(state)), {
        default: _withCtx$1(() => [
          _createElementVNode$1("div", _hoisted_1$1, [
            _createElementVNode$1("div", _hoisted_2, [
              _cache[0] || (_cache[0] = _createElementVNode$1("div", { class: "name" }, "最远距离(km)", -1)),
              _cache[1] || (_cache[1] = _createElementVNode$1("div", { class: "num_s" }, "120", -1)),
              _createElementVNode$1("img", {
                src: _unref$1(publicPath) + "/plugins/UIdemo/image/jiantou1.png"
              }, null, 8, _hoisted_3),
              _cache[2] || (_cache[2] = _createElementVNode$1("div", { class: "num_end" }, "30", -1))
            ]),
            _createElementVNode$1("div", _hoisted_4, [
              _cache[3] || (_cache[3] = _createElementVNode$1("div", { class: "name" }, "切片(层)", -1)),
              _cache[4] || (_cache[4] = _createElementVNode$1("div", { class: "num_s" }, "10", -1)),
              _createElementVNode$1("img", {
                src: _unref$1(publicPath) + "/plugins/UIdemo/image/jiantou2.png"
              }, null, 8, _hoisted_5),
              _cache[5] || (_cache[5] = _createElementVNode$1("div", { class: "num_end" }, "50", -1))
            ]),
            _createElementVNode$1("div", _hoisted_6, [
              _cache[6] || (_cache[6] = _createElementVNode$1("div", { class: "name" }, "最大速度(m/s)", -1)),
              _cache[7] || (_cache[7] = _createElementVNode$1("div", { class: "num_s" }, "12", -1)),
              _createElementVNode$1("img", {
                src: _unref$1(publicPath) + "/plugins/UIdemo/image/jiantou2.png"
              }, null, 8, _hoisted_7),
              _cache[8] || (_cache[8] = _createElementVNode$1("div", { class: "num_end" }, "46", -1))
            ])
          ])
        ]),
        _: 1
      }, 16);
    };
  }
});

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,unref:_unref,createVNode:_createVNode,resolveComponent:_resolveComponent,withCtx:_withCtx,openBlock:_openBlock,createBlock:_createBlock} = await importShared('vue');

const _hoisted_1 = { position: [1, 1, 1] };
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "divSample",
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createBlock(_component_TresCanvas, {
        clearColor: "#999",
        "window-size": ""
      }, {
        default: _withCtx(() => [
          _cache[2] || (_cache[2] = _createElementVNode("TresPerspectiveCamera", { position: [3, 0, 8] }, null, -1)),
          _createVNode(_unref(Kk)),
          _createElementVNode("TresMesh", _hoisted_1, [
            _cache[0] || (_cache[0] = _createElementVNode("TresBoxGeometry", null, null, -1)),
            _cache[1] || (_cache[1] = _createElementVNode("TresMeshNormalMaterial", null, null, -1)),
            _createVNode(_sfc_main$3),
            _createVNode(_sfc_main$2),
            _createVNode(_sfc_main$1)
          ])
        ]),
        _: 1
      });
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=divSample.CDkvalfr1767105581793.js.map
