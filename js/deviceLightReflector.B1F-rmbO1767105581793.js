import { importShared, gz, _l, Kk } from './index.BxB45aCK1767105581793.js';
import { _sfc_main as _sfc_main$5 } from './reflectorShaderMesh.vue_vue_type_script_setup_true_lang.D0T9d0go1767105581793.js';
import { _sfc_main$6 as _sfc_main$3 } from './generalFont.vue_vue_type_script_setup_true_lang.DqoG1H6g1767105581793.js';
import './default.vue_vue_type_script_setup_true_lang.DQGKkIwV1767105581793.js';
import './three-mesh-ui.module.CjQAT-M_1767105581793.js';
import './domPanel.vue_vue_type_style_index_0_lang.dV59iE041767105581793.js';
import { init } from './index.DEqE8egL1767105581793.js';
import { _sfc_main as _sfc_main$4 } from './device.vue_vue_type_script_setup_true_lang.BD3Sn2Lg1767105581793.js';

const {defineComponent:_defineComponent$2} = await importShared('vue');

const {createElementVNode:_createElementVNode$2,createTextVNode:_createTextVNode,unref:_unref$2,mergeProps:_mergeProps$2,withCtx:_withCtx$2,openBlock:_openBlock$2,createBlock:_createBlock$2} = await importShared('vue');

const {reactive: reactive$2} = await importShared('vue');
const _sfc_main$2 = /* @__PURE__ */ _defineComponent$2({
  __name: "divContent",
  setup(__props) {
    const state = reactive$2({
      wrapperClass: "illustrateTire",
      as: "div",
      transform: true,
      distanceFactor: 1,
      zIndexRange: [9e5, 0]
    });
    return (_ctx, _cache) => {
      return _openBlock$2(), _createBlock$2(_unref$2(gz), _mergeProps$2(state, {
        position: [1, 0, 2],
        scale: [2, 2, 2],
        rotation: [-Math.PI / 2, 0, -Math.PI / 2]
      }), {
        default: _withCtx$2(() => [..._cache[0] || (_cache[0] = [
          _createElementVNode$2("div", { class: "card pos-relative text-white" }, [
            _createElementVNode$2("div", { class: "card-body" }, [
              _createElementVNode$2("h3", null, [
                _createElementVNode$2("span", null, "⚙️"),
                _createTextVNode(" Toyota 2JZ-GTE")
              ]),
              _createElementVNode$2("div", { class: "flex justify-between flex-wrap" }, [
                _createElementVNode$2("div", { class: "Onec" }, [
                  _createElementVNode$2("p", null, " 输出功率 kW "),
                  _createElementVNode$2("h1", null, " 980 - 1000 ")
                ]),
                _createElementVNode$2("div", { class: "Onec" }, [
                  _createElementVNode$2("p", null, " 排量 升 "),
                  _createElementVNode$2("h1", null, " 3.0 - 3.5 ")
                ]),
                _createElementVNode$2("div", { class: "Onec" }, [
                  _createElementVNode$2("p", null, " 最大扭矩 磅-英尺 "),
                  _createElementVNode$2("h1", null, " 320 - 330 ")
                ])
              ])
            ])
          ], -1)
        ])]),
        _: 1
      }, 16, ["rotation"]);
    };
  }
});

const {defineComponent:_defineComponent$1} = await importShared('vue');

const {createElementVNode:_createElementVNode$1,unref:_unref$1,mergeProps:_mergeProps$1,withCtx:_withCtx$1,openBlock:_openBlock$1,createBlock:_createBlock$1} = await importShared('vue');

const {reactive: reactive$1,ref} = await importShared('vue');
const _sfc_main$1 = /* @__PURE__ */ _defineComponent$1({
  __name: "useHtmlComChart",
  setup(__props) {
    const state = reactive$1({
      wrapperClass: "chartDiv",
      as: "div",
      transform: true,
      distanceFactor: 2,
      zIndexRange: [9e5, 0]
    });
    let chart = null;
    const option = {
      title: {
        text: "最大输出功率",
        textStyle: {
          fontSize: 18
        },
        padding: [20, 20]
      },
      backgroundColor: "#b8e4ff3b",
      grid: {
        left: "10",
        right: "20",
        bottom: "10",
        top: "70",
        containLabel: true
      },
      xAxis: {
        type: "category",
        data: ["01", "03", "06", "09", "12", "15", "18"],
        axisLabel: {
          fontSize: 18
        }
      },
      yAxis: {
        type: "value",
        axisLabel: {
          fontSize: 18
        }
      },
      series: [
        {
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: "line",
          smooth: true,
          lineStyle: {
            color: "#ffffffff"
          },
          animationDuration: function(idx) {
            return idx * 100 + 3e3;
          }
        }
      ],
      animationEasing: "elasticOut"
    };
    const intChart = () => {
      chart = init(document.getElementById("main"), "dark");
      chart.setOption(option);
      chart.on("finished", () => {
        isFinished = true;
      });
    };
    const htmlRef = ref(null);
    let isFinished = false;
    const resetChart = () => {
      isFinished = false;
      chart.off("finished");
      chart.clear();
      chart.on("finished", () => {
        isFinished = true;
      });
      chart.setOption(option);
    };
    const { onBeforeRender } = _l();
    onBeforeRender(() => {
      if (htmlRef.value && !chart) {
        intChart();
      }
      if (chart && isFinished) {
        resetChart();
      }
    });
    return (_ctx, _cache) => {
      return _openBlock$1(), _createBlock$1(_unref$1(gz), _mergeProps$1({
        ref_key: "htmlRef",
        ref: htmlRef
      }, state, { position: [0, 0, -1] }), {
        default: _withCtx$1(() => [..._cache[0] || (_cache[0] = [
          _createElementVNode$1("div", {
            id: "main",
            style: { "width": "500px", "height": "300px" }
          }, null, -1)
        ])]),
        _: 1
      }, 16);
    };
  }
});

const {defineComponent:_defineComponent} = await importShared('vue');

const {unref:_unref,createVNode:_createVNode,createElementVNode:_createElementVNode,normalizeProps:_normalizeProps,guardReactiveProps:_guardReactiveProps,Suspense:_Suspense,withCtx:_withCtx,openBlock:_openBlock,createBlock:_createBlock,mergeProps:_mergeProps,resolveComponent:_resolveComponent,Fragment:_Fragment,createElementBlock:_createElementBlock} = await importShared('vue');

const {SRGBColorSpace,BasicShadowMap,NoToneMapping} = await importShared('three');

const {reactive} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "deviceLightReflector",
  setup(__props) {
    const configState = reactive({
      reflectivity: 0.1,
      mirror: 0.92,
      // 去除纹理 镜面化
      mixStrength: 36,
      showGridHelper: false
    });
    const state = reactive({
      clearColor: "#000",
      shadows: true,
      alpha: false,
      shadowMapType: BasicShadowMap,
      outputColorSpace: SRGBColorSpace,
      toneMapping: NoToneMapping,
      renderMode: "manual"
    });
    const controlsState = reactive({
      autoRotate: true
    });
    const deviceState = reactive({
      threshold: 0.37,
      // 阈值
      strength: 1.6,
      // 强度
      radius: 0.1
      // 半径
    });
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createElementBlock(_Fragment, null, [
        _createVNode(_unref(_sfc_main$3)),
        _createVNode(_component_TresCanvas, _mergeProps(state, { "window-size": "" }), {
          default: _withCtx(() => [
            _cache[0] || (_cache[0] = _createElementVNode("TresPerspectiveCamera", {
              position: [-4, 5, 4],
              fov: 45,
              near: 1,
              far: 1e3
            }, null, -1)),
            _createVNode(_unref(Kk), _normalizeProps(_guardReactiveProps(controlsState)), null, 16),
            (_openBlock(), _createBlock(_Suspense, null, {
              default: _withCtx(() => [
                _createVNode(_sfc_main$4, _normalizeProps(_guardReactiveProps(deviceState)), null, 16)
              ]),
              _: 1
            })),
            _createVNode(_sfc_main$5, _mergeProps(configState, { position: [0, 0, 0] }), null, 16),
            _createVNode(_sfc_main$2),
            _createVNode(_sfc_main$1, {
              position: [-0.5, -1e-3, 2.25],
              rotation: [-Math.PI / 2, 0, -Math.PI / 2]
            }, null, 8, ["rotation"])
          ]),
          _: 1
        }, 16)
      ], 64);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=deviceLightReflector.B1F-rmbO1767105581793.js.map
