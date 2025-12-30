import { importShared, _export_sfc } from './index.BxB45aCK1767105581793.js';
import { zy, Gy, Hy, _sfc_main as _sfc_main$1, Z_ } from './DevTDTTiles.vue_vue_type_script_setup_true_lang.xgh0_FRH1767105581793.js';

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,toDisplayString:_toDisplayString,unref:_unref,createVNode:_createVNode,normalizeClass:_normalizeClass,normalizeStyle:_normalizeStyle,withCtx:_withCtx,renderList:_renderList,Fragment:_Fragment,openBlock:_openBlock,createElementBlock:_createElementBlock} = await importShared('vue');

const _hoisted_1 = { style: { "position": "absolute", "top": "0", "left": "0", "width": "100%", "height": "100%", "z-index": "1000", "pointer-events": "none" } };
const _hoisted_2 = { style: { "position": "absolute", "top": "20px", "left": "20px", "background": "rgba(0, 0, 0, 0.8)", "color": "white", "padding": "15px", "border-radius": "8px", "pointer-events": "auto", "max-width": "300px" } };
const _hoisted_3 = { style: { "margin-bottom": "10px" } };
const _hoisted_4 = { style: { "margin-bottom": "10px" } };
const _hoisted_5 = { style: { "margin-bottom": "10px" } };
const _hoisted_6 = { style: { "font-size": "12px", "margin-bottom": "3px" } };
const _hoisted_7 = { style: { "font-size": "12px", "margin-bottom": "3px" } };
const _hoisted_8 = { style: { "font-size": "12px", "margin-bottom": "3px" } };
const _hoisted_9 = { style: { "font-size": "11px", "color": "#666" } };
const _hoisted_10 = { class: "info-panel" };
const _hoisted_11 = { class: "panel-content" };
const _hoisted_12 = { class: "progress-bar" };
const _hoisted_13 = { class: "progress-text" };
const _hoisted_14 = { class: "status-indicator" };
const _hoisted_15 = { class: "status-text" };
const _hoisted_16 = { class: "chart-container" };
const _hoisted_17 = { class: "chart-bars" };
const _hoisted_18 = { class: "chart-labels" };
const {ref,onMounted,onUnmounted,computed} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "case-css2d",
  setup(__props) {
    const sceneConfig = ref({
      effectProps: {
        enabled: true,
        focusArea: 0.7,
        feather: 0.1
      },
      ambientLight: {
        color: "#fff",
        intensity: 1
      },
      directionalLight: {
        color: "#fff",
        intensity: 2,
        position: [-1500, 500, 500]
      },
      background: "/plugins/topoProject/image/farm_field_puresky_2k.jpg"
    });
    const cameraPosition = ref({
      heading: 90,
      pitch: -45,
      distance: 1800,
      longitude: 118.77769951084647,
      latitude: 32.04365724404713
    });
    const markerPosition = ref({
      lon: 118.778677,
      lat: 32.043848,
      height: 50
    });
    const currentTime = ref("");
    const updateTime = () => {
      currentTime.value = (/* @__PURE__ */ new Date()).toLocaleTimeString();
    };
    const currentStyleIndex = ref(0);
    const styleClasses = ["label-style-1", "label-style-2", "label-style-3"];
    const currentStyleClass = computed(() => styleClasses[currentStyleIndex.value]);
    const isAnimating = ref(false);
    const animationStyle = ref({});
    const isOnline = ref(true);
    const progressValue = ref(0);
    const chartData = ref([30, 60, 45, 80, 25]);
    const chartLabels = ["A", "B", "C", "D", "E"];
    const basicLabelRef = ref();
    const infoPanelRef = ref();
    let timeInterval;
    let progressInterval;
    let statusInterval;
    let chartInterval;
    let animationInterval;
    const moveMarker = (direction) => {
      const step = 1e-3;
      switch (direction) {
        case "north":
          markerPosition.value.lat += step;
          break;
        case "south":
          markerPosition.value.lat -= step;
          break;
        case "east":
          markerPosition.value.lon += step;
          break;
        case "west":
          markerPosition.value.lon -= step;
          break;
      }
    };
    const changeHeight = (delta) => {
      markerPosition.value.height = Math.max(0, markerPosition.value.height + delta);
    };
    const toggleStyle = () => {
      currentStyleIndex.value = (currentStyleIndex.value + 1) % styleClasses.length;
      basicLabelRef.value?.update();
    };
    const toggleAnimation = () => {
      isAnimating.value = !isAnimating.value;
      if (isAnimating.value) {
        startAnimation();
      } else {
        stopAnimation();
      }
    };
    const startAnimation = () => {
      let scale = 1;
      let direction = 1;
      animationInterval = window.setInterval(() => {
        scale += direction * 0.05;
        if (scale >= 1.2) direction = -1;
        if (scale <= 0.8) direction = 1;
        animationStyle.value = {
          transform: `scale(${scale})`,
          transition: "transform 0.1s ease"
        };
        basicLabelRef.value?.update();
      }, 100);
    };
    const stopAnimation = () => {
      if (animationInterval) {
        clearInterval(animationInterval);
        animationStyle.value = {};
        basicLabelRef.value?.update();
      }
    };
    onMounted(() => {
      updateTime();
      timeInterval = window.setInterval(() => {
        updateTime();
        basicLabelRef.value?.update();
      }, 1e3);
      progressInterval = window.setInterval(() => {
        progressValue.value = (progressValue.value + 1) % 101;
        infoPanelRef.value?.update();
      }, 200);
      statusInterval = window.setInterval(() => {
        isOnline.value = !isOnline.value;
      }, 3e3);
      chartInterval = window.setInterval(() => {
        chartData.value = chartData.value.map(() => Math.floor(Math.random() * 100));
      }, 2e3);
    });
    onUnmounted(() => {
      if (timeInterval) clearInterval(timeInterval);
      if (progressInterval) clearInterval(progressInterval);
      if (statusInterval) clearInterval(statusInterval);
      if (chartInterval) clearInterval(chartInterval);
      if (animationInterval) clearInterval(animationInterval);
    });
    return (_ctx, _cache) => {
      return _openBlock(), _createElementBlock(_Fragment, null, [
        _createElementVNode("div", _hoisted_1, [
          _createElementVNode("div", _hoisted_2, [
            _cache[11] || (_cache[11] = _createElementVNode("h3", { style: { "margin": "0 0 10px 0", "color": "#4caf50" } }, "GeoKit 点相关组件示例控制面板", -1)),
            _createElementVNode("div", _hoisted_3, [
              _cache[8] || (_cache[8] = _createElementVNode("label", { style: { "display": "block", "margin-bottom": "5px" } }, "标签位置控制:", -1)),
              _createElementVNode("button", {
                onClick: _cache[0] || (_cache[0] = ($event) => moveMarker("north")),
                style: { "margin": "2px", "padding": "5px 10px", "background": "#2196f3", "color": "white", "border": "none", "border-radius": "4px", "cursor": "pointer" }
              }, " 北移 "),
              _createElementVNode("button", {
                onClick: _cache[1] || (_cache[1] = ($event) => moveMarker("south")),
                style: { "margin": "2px", "padding": "5px 10px", "background": "#2196f3", "color": "white", "border": "none", "border-radius": "4px", "cursor": "pointer" }
              }, " 南移 "),
              _createElementVNode("button", {
                onClick: _cache[2] || (_cache[2] = ($event) => moveMarker("east")),
                style: { "margin": "2px", "padding": "5px 10px", "background": "#2196f3", "color": "white", "border": "none", "border-radius": "4px", "cursor": "pointer" }
              }, " 东移 "),
              _createElementVNode("button", {
                onClick: _cache[3] || (_cache[3] = ($event) => moveMarker("west")),
                style: { "margin": "2px", "padding": "5px 10px", "background": "#2196f3", "color": "white", "border": "none", "border-radius": "4px", "cursor": "pointer" }
              }, " 西移 ")
            ]),
            _createElementVNode("div", _hoisted_4, [
              _cache[9] || (_cache[9] = _createElementVNode("label", { style: { "display": "block", "margin-bottom": "5px" } }, "高度控制:", -1)),
              _createElementVNode("button", {
                onClick: _cache[4] || (_cache[4] = ($event) => changeHeight(10)),
                style: { "margin": "2px", "padding": "5px 10px", "background": "#ff9800", "color": "white", "border": "none", "border-radius": "4px", "cursor": "pointer" }
              }, " 升高 +10m "),
              _createElementVNode("button", {
                onClick: _cache[5] || (_cache[5] = ($event) => changeHeight(-10)),
                style: { "margin": "2px", "padding": "5px 10px", "background": "#ff9800", "color": "white", "border": "none", "border-radius": "4px", "cursor": "pointer" }
              }, " 降低 -10m ")
            ]),
            _createElementVNode("div", _hoisted_5, [
              _cache[10] || (_cache[10] = _createElementVNode("label", { style: { "display": "block", "margin-bottom": "5px" } }, "标签样式:", -1)),
              _createElementVNode("button", {
                onClick: toggleStyle,
                style: { "margin": "2px", "padding": "5px 10px", "background": "#9c27b0", "color": "white", "border": "none", "border-radius": "4px", "cursor": "pointer" }
              }, " 切换样式 "),
              _createElementVNode("button", {
                onClick: toggleAnimation,
                style: { "margin": "2px", "padding": "5px 10px", "background": "#e91e63", "color": "white", "border": "none", "border-radius": "4px", "cursor": "pointer" }
              }, _toDisplayString(isAnimating.value ? "停止动画" : "开始动画"), 1)
            ])
          ])
        ]),
        _createVNode(_unref(zy), {
          position: cameraPosition.value,
          "onUpdate:position": _cache[7] || (_cache[7] = ($event) => cameraPosition.value = $event)
        }, {
          default: _withCtx(() => [
            _createVNode(_unref(Gy), {
              position: cameraPosition.value,
              "onUpdate:position": _cache[6] || (_cache[6] = ($event) => cameraPosition.value = $event)
            }, null, 8, ["position"]),
            _createVNode(_unref(Hy), { sceneConfig: sceneConfig.value }, null, 8, ["sceneConfig"]),
            _createVNode(_sfc_main$1),
            _createVNode(_unref(Z_), {
              point: markerPosition.value,
              height: markerPosition.value.height,
              ref_key: "basicLabelRef",
              ref: basicLabelRef
            }, {
              default: _withCtx(() => [
                _createElementVNode("div", {
                  class: _normalizeClass(currentStyleClass.value),
                  style: _normalizeStyle(animationStyle.value)
                }, [
                  _cache[12] || (_cache[12] = _createElementVNode("div", { style: { "font-weight": "bold", "margin-bottom": "5px", "color": "#2196f3" } }, "📍 动态标签", -1)),
                  _createElementVNode("div", _hoisted_6, "经度: " + _toDisplayString(markerPosition.value.lon.toFixed(6)), 1),
                  _createElementVNode("div", _hoisted_7, "纬度: " + _toDisplayString(markerPosition.value.lat.toFixed(6)), 1),
                  _createElementVNode("div", _hoisted_8, "高度: " + _toDisplayString(markerPosition.value.height) + "m", 1),
                  _createElementVNode("div", _hoisted_9, _toDisplayString(currentTime.value), 1)
                ], 6)
              ]),
              _: 1
            }, 8, ["point", "height"]),
            _createVNode(_unref(Z_), {
              point: { lon: 118.78, lat: 32.045, height: 20 },
              ref_key: "infoPanelRef",
              ref: infoPanelRef
            }, {
              default: _withCtx(() => [
                _createElementVNode("div", _hoisted_10, [
                  _cache[16] || (_cache[16] = _createElementVNode("div", { class: "panel-header" }, [
                    _createElementVNode("span", { class: "panel-icon" }, "🏢"),
                    _createElementVNode("span", { class: "panel-title" }, "建筑信息")
                  ], -1)),
                  _createElementVNode("div", _hoisted_11, [
                    _cache[13] || (_cache[13] = _createElementVNode("div", { class: "info-item" }, [
                      _createElementVNode("span", { class: "label" }, "名称:"),
                      _createElementVNode("span", { class: "value" }, "示例建筑")
                    ], -1)),
                    _cache[14] || (_cache[14] = _createElementVNode("div", { class: "info-item" }, [
                      _createElementVNode("span", { class: "label" }, "高度:"),
                      _createElementVNode("span", { class: "value" }, "80米")
                    ], -1)),
                    _cache[15] || (_cache[15] = _createElementVNode("div", { class: "info-item" }, [
                      _createElementVNode("span", { class: "label" }, "类型:"),
                      _createElementVNode("span", { class: "value" }, "商业建筑")
                    ], -1)),
                    _createElementVNode("div", _hoisted_12, [
                      _createElementVNode("div", {
                        class: "progress-fill",
                        style: _normalizeStyle({ width: progressValue.value + "%" })
                      }, null, 4)
                    ]),
                    _createElementVNode("div", _hoisted_13, "完成度: " + _toDisplayString(progressValue.value) + "%", 1)
                  ])
                ])
              ]),
              _: 1
            }, 512),
            _createVNode(_unref(Z_), { point: { lon: 118.776, lat: 32.041, height: 30 } }, {
              default: _withCtx(() => [..._cache[17] || (_cache[17] = [
                _createElementVNode("div", { class: "warning-label" }, [
                  _createElementVNode("div", { class: "warning-icon" }, "⚠️"),
                  _createElementVNode("div", { class: "warning-text" }, "施工区域"),
                  _createElementVNode("div", { class: "warning-subtext" }, "请注意安全")
                ], -1)
              ])]),
              _: 1
            }),
            _createVNode(_unref(Z_), { point: { lon: 118.782, lat: 32.046, height: 15 } }, {
              default: _withCtx(() => [
                _createElementVNode("div", _hoisted_14, [
                  _createElementVNode("div", {
                    class: _normalizeClass(["status-dot", { active: isOnline.value }])
                  }, null, 2),
                  _createElementVNode("span", _hoisted_15, _toDisplayString(isOnline.value ? "在线" : "离线"), 1)
                ])
              ]),
              _: 1
            }),
            _createVNode(_unref(Z_), { point: { lon: 118.775, lat: 32.047, height: 60 } }, {
              default: _withCtx(() => [
                _createElementVNode("div", _hoisted_16, [
                  _cache[18] || (_cache[18] = _createElementVNode("div", { class: "chart-title" }, "实时数据", -1)),
                  _createElementVNode("div", _hoisted_17, [
                    (_openBlock(true), _createElementBlock(_Fragment, null, _renderList(chartData.value, (value, index) => {
                      return _openBlock(), _createElementBlock("div", {
                        class: "bar",
                        key: index,
                        style: _normalizeStyle({ height: value + "%" })
                      }, null, 4);
                    }), 128))
                  ]),
                  _createElementVNode("div", _hoisted_18, [
                    (_openBlock(), _createElementBlock(_Fragment, null, _renderList(chartLabels, (label, index) => {
                      return _createElementVNode("span", { key: index }, _toDisplayString(label), 1);
                    }), 64))
                  ])
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["position"])
      ], 64);
    };
  }
});

const caseCss2d = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-33ba9d19"]]);

export { caseCss2d as default };
//# sourceMappingURL=case-css2d.BGYboMj21767105581793.js.map
