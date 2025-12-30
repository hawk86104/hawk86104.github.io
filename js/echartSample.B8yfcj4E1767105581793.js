import { importShared, _l, Kk } from './index.BxB45aCK1767105581793.js';
import { init, LinearGradient } from './index.DEqE8egL1767105581793.js';

const {defineComponent:_defineComponent$3} = await importShared('vue');

const {unref:_unref$3,createElementVNode:_createElementVNode$3,openBlock:_openBlock$3,createElementBlock:_createElementBlock$2} = await importShared('vue');

const _hoisted_1$2 = ["scale"];
const _hoisted_2$2 = ["side", "map"];
const THREE$2 = await importShared('three');

const {createVNode: createVNode$2,render: render$2} = await importShared('vue');

const width$2 = 1024;
const height$2 = 768;
const _sfc_main$3 = /* @__PURE__ */ _defineComponent$3({
  __name: "spriteChart",
  setup(__props) {
    const scale = [6e-3, 5e-3];
    const chartNode = createVNode$2("canvas", { width: width$2, height: height$2, style: {} });
    render$2(chartNode, document.createElement("div"));
    const pieChart = init(chartNode.el, "dark");
    const option = {
      color: ["#80FFA5", "#00DDFF", "#37A2FF", "#FF0087", "#FFBF00"],
      title: {
        text: "Gradient Stacked Area Chart",
        padding: 20
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "cross",
          label: {
            backgroundColor: "#6a7985"
          }
        }
      },
      legend: {
        data: ["Line 1", "Line 2", "Line 3", "Line 4", "Line 5"],
        padding: [20, 0]
      },
      grid: {
        left: "30",
        right: "30",
        bottom: "30",
        top: "60",
        containLabel: true
      },
      xAxis: [
        {
          type: "category",
          boundaryGap: false,
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        }
      ],
      yAxis: [
        {
          type: "value"
        }
      ],
      series: [
        {
          name: "Line 1",
          type: "line",
          stack: "Total",
          smooth: true,
          lineStyle: {
            width: 0
          },
          showSymbol: false,
          areaStyle: {
            opacity: 0.8,
            color: new LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "rgb(128, 255, 165)"
              },
              {
                offset: 1,
                color: "rgb(1, 191, 236)"
              }
            ])
          },
          emphasis: {
            focus: "series"
          },
          data: [140, 232, 101, 264, 90, 340, 250]
        },
        {
          name: "Line 2",
          type: "line",
          stack: "Total",
          smooth: true,
          lineStyle: {
            width: 0
          },
          showSymbol: false,
          areaStyle: {
            opacity: 0.8,
            color: new LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "rgb(0, 221, 255)"
              },
              {
                offset: 1,
                color: "rgb(77, 119, 255)"
              }
            ])
          },
          emphasis: {
            focus: "series"
          },
          data: [120, 282, 111, 234, 220, 340, 310]
        },
        {
          name: "Line 3",
          type: "line",
          stack: "Total",
          smooth: true,
          lineStyle: {
            width: 0
          },
          showSymbol: false,
          areaStyle: {
            opacity: 0.8,
            color: new LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "rgb(55, 162, 255)"
              },
              {
                offset: 1,
                color: "rgb(116, 21, 219)"
              }
            ])
          },
          emphasis: {
            focus: "series"
          },
          data: [320, 132, 201, 334, 190, 130, 220]
        },
        {
          name: "Line 4",
          type: "line",
          stack: "Total",
          smooth: true,
          lineStyle: {
            width: 0
          },
          showSymbol: false,
          areaStyle: {
            opacity: 0.8,
            color: new LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "rgb(255, 0, 135)"
              },
              {
                offset: 1,
                color: "rgb(135, 0, 157)"
              }
            ])
          },
          emphasis: {
            focus: "series"
          },
          data: [220, 402, 231, 134, 190, 230, 120]
        },
        {
          name: "Line 5",
          type: "line",
          stack: "Total",
          smooth: true,
          lineStyle: {
            width: 0
          },
          showSymbol: false,
          label: {
            show: true,
            position: "top"
          },
          areaStyle: {
            opacity: 0.8,
            color: new LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "rgb(255, 191, 0)"
              },
              {
                offset: 1,
                color: "rgb(224, 62, 76)"
              }
            ])
          },
          emphasis: {
            focus: "series"
          },
          data: [220, 302, 181, 234, 210, 290, 150]
        }
      ]
    };
    pieChart.setOption(option);
    const chartTexture = new THREE$2.CanvasTexture(chartNode.el);
    pieChart.on("finished", () => {
      chartTexture.needsUpdate = true;
    });
    return (_ctx, _cache) => {
      return _openBlock$3(), _createElementBlock$2("TresSprite", {
        scale: [width$2 * scale[0], height$2 * scale[1], 1]
      }, [
        _createElementVNode$3("TresSpriteMaterial", {
          transparent: "",
          side: THREE$2.DoubleSide,
          map: _unref$3(chartTexture)
        }, null, 8, _hoisted_2$2)
      ], 8, _hoisted_1$2);
    };
  }
});

const {defineComponent:_defineComponent$2} = await importShared('vue');

const {createElementVNode:_createElementVNode$2,unref:_unref$2,openBlock:_openBlock$2,createElementBlock:_createElementBlock$1} = await importShared('vue');

const _hoisted_1$1 = ["scale"];
const _hoisted_2$1 = ["side", "map"];
const THREE$1 = await importShared('three');

const {createVNode: createVNode$1,render: render$1} = await importShared('vue');
const width$1 = 1024;
const height$1 = 768;
const _sfc_main$2 = /* @__PURE__ */ _defineComponent$2({
  __name: "meshChart",
  setup(__props) {
    const scale = [6e-3, 6e-3];
    const chartNode = createVNode$1("canvas", { width: width$1, height: height$1, style: {} });
    render$1(chartNode, document.createElement("div"));
    const pieChart = init(chartNode.el, "dark");
    const option = {
      backgroundColor: "transparent",
      legend: {
        top: "bottom",
        padding: [0, 0, 30, 0]
      },
      tooltip: {
        trigger: "item"
      },
      series: [
        {
          name: "Nightingale Chart",
          type: "pie",
          radius: [50, 250],
          center: ["50%", "50%"],
          roseType: "area",
          itemStyle: {
            borderRadius: 8
          },
          data: [
            { value: 40, name: "rose 1" },
            { value: 38, name: "rose 2" },
            { value: 32, name: "rose 3" },
            { value: 30, name: "rose 4" },
            { value: 28, name: "rose 5" },
            { value: 26, name: "rose 6" },
            { value: 22, name: "rose 7" },
            { value: 18, name: "rose 8" }
          ]
        }
      ]
    };
    pieChart.setOption(option);
    let isFinished = false;
    const chartTexture = new THREE$1.CanvasTexture(chartNode.el);
    pieChart.on("finished", () => {
      isFinished = true;
      chartTexture.needsUpdate = true;
    });
    const { onRender } = _l();
    const dataLength = option.series[0].data.length;
    let currentIndex = 0;
    let deltaCount = 0;
    onRender(() => {
      if (isFinished && deltaCount++ % 60 === 0) {
        pieChart.dispatchAction({
          type: "downplay",
          seriesIndex: 0,
          dataIndex: currentIndex
        });
        currentIndex = (currentIndex + 1) % dataLength;
        pieChart.dispatchAction({
          type: "highlight",
          seriesIndex: 0,
          dataIndex: currentIndex
        });
        pieChart.dispatchAction({
          type: "showTip",
          seriesIndex: 0,
          dataIndex: currentIndex
        });
        chartTexture.needsUpdate = true;
      }
    });
    return (_ctx, _cache) => {
      return _openBlock$2(), _createElementBlock$1("TresMesh", {
        scale: [width$1 * scale[0], height$1 * scale[1], 1]
      }, [
        _cache[0] || (_cache[0] = _createElementVNode$2("TresPlaneGeometry", { args: [1, 1] }, null, -1)),
        _createElementVNode$2("TresMeshBasicMaterial", {
          transparent: "",
          side: THREE$1.DoubleSide,
          map: _unref$2(chartTexture),
          depthWrite: false
        }, null, 8, _hoisted_2$1)
      ], 8, _hoisted_1$1);
    };
  }
});

const {defineComponent:_defineComponent$1} = await importShared('vue');

const {createElementVNode:_createElementVNode$1,unref:_unref$1,openBlock:_openBlock$1,createElementBlock:_createElementBlock} = await importShared('vue');

const _hoisted_1 = ["scale"];
const _hoisted_2 = ["side", "map"];
const THREE = await importShared('three');

const {createVNode,render} = await importShared('vue');
const width = 1024;
const height = 768;
const _sfc_main$1 = /* @__PURE__ */ _defineComponent$1({
  __name: "animationChart",
  setup(__props) {
    var xAxisData = [];
    var data1 = [];
    var data2 = [];
    for (var i = 0; i < 100; i++) {
      xAxisData.push("A" + i);
      data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
      data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);
    }
    const scale = [6e-3, 6e-3];
    const chartNode = createVNode("canvas", { width, height, style: {} });
    render(chartNode, document.createElement("div"));
    const pieChart = init(chartNode.el, "dark");
    const option = {
      title: {
        text: "Bar Animation Delay",
        padding: 20
      },
      legend: {
        data: ["bar", "bar2"],
        padding: 20
      },
      xAxis: {
        data: xAxisData,
        splitLine: {
          show: false
        }
      },
      yAxis: {},
      series: [
        {
          name: "bar",
          type: "bar",
          data: data1,
          emphasis: {
            focus: "series"
          },
          animationDelay: function(idx) {
            return idx * 10;
          }
        },
        {
          name: "bar2",
          type: "bar",
          data: data2,
          emphasis: {
            focus: "series"
          },
          animationDelay: function(idx) {
            return idx * 10 + 100;
          }
        }
      ],
      animationEasing: "elasticOut"
    };
    const chartTexture = new THREE.CanvasTexture(chartNode.el);
    let isFinished = false;
    const resetChart = () => {
      isFinished = false;
      pieChart.off("finished");
      pieChart.clear();
      pieChart.on("finished", () => {
        isFinished = true;
      });
      pieChart.setOption(option);
    };
    resetChart();
    const { onRender } = _l();
    onRender(() => {
      if (!isFinished) {
        chartTexture.needsUpdate = true;
      } else {
        resetChart();
      }
    });
    return (_ctx, _cache) => {
      return _openBlock$1(), _createElementBlock("TresMesh", {
        scale: [width * scale[0], height * scale[1], 1]
      }, [
        _cache[0] || (_cache[0] = _createElementVNode$1("TresPlaneGeometry", { args: [1, 1] }, null, -1)),
        _createElementVNode$1("TresMeshBasicMaterial", {
          transparent: "",
          side: THREE.DoubleSide,
          map: _unref$1(chartTexture),
          depthWrite: false
        }, null, 8, _hoisted_2)
      ], 8, _hoisted_1);
    };
  }
});

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,unref:_unref,createVNode:_createVNode,resolveComponent:_resolveComponent,withCtx:_withCtx,openBlock:_openBlock,createBlock:_createBlock} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "echartSample",
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createBlock(_component_TresCanvas, {
        clearColor: "#000000",
        "window-size": ""
      }, {
        default: _withCtx(() => [
          _cache[0] || (_cache[0] = _createElementVNode("TresPerspectiveCamera", { position: [2, -6, 12] }, null, -1)),
          _createVNode(_unref(Kk)),
          _cache[1] || (_cache[1] = _createElementVNode("TresMesh", { position: [-2.5, -1, -1] }, [
            _createElementVNode("TresBoxGeometry"),
            _createElementVNode("TresMeshNormalMaterial")
          ], -1)),
          _createVNode(_sfc_main$3, { position: [-2.5, 1, -1] }),
          _cache[2] || (_cache[2] = _createElementVNode("TresMesh", { position: [2.5, -0.6, -1] }, [
            _createElementVNode("TresBoxGeometry"),
            _createElementVNode("TresMeshNormalMaterial")
          ], -1)),
          _createVNode(_sfc_main$2, {
            position: [2.5, 2, -1],
            renderOrder: 1
          }),
          _cache[3] || (_cache[3] = _createElementVNode("TresMesh", { position: [1, -7, -1] }, [
            _createElementVNode("TresBoxGeometry"),
            _createElementVNode("TresMeshNormalMaterial")
          ], -1)),
          _createVNode(_sfc_main$1, {
            position: [1.5, -4, -1],
            renderOrder: 2
          })
        ]),
        _: 1
      });
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=echartSample.B8yfcj4E1767105581793.js.map
