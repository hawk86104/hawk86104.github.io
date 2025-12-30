import { importShared, sz, _export_sfc } from './index.BxB45aCK1767105581793.js';
import { zy, Gy, Hy, _sfc_main as _sfc_main$1, ry, cy, oy } from './DevTDTTiles.vue_vue_type_script_setup_true_lang.xgh0_FRH1767105581793.js';

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,toDisplayString:_toDisplayString,unref:_unref,createVNode:_createVNode,withCtx:_withCtx,Suspense:_Suspense,openBlock:_openBlock,createBlock:_createBlock,Fragment:_Fragment,createElementBlock:_createElementBlock} = await importShared('vue');

const _hoisted_1 = { style: { "position": "absolute", "top": "0", "left": "0", "width": "100%", "height": "100%", "z-index": "1000", "pointer-events": "none" } };
const _hoisted_2 = { style: { "position": "absolute", "top": "20px", "left": "20px", "background": "rgba(0, 0, 0, 0.8)", "color": "white", "padding": "15px", "border-radius": "8px", "pointer-events": "auto", "max-width": "350px" } };
const _hoisted_3 = { style: { "margin-bottom": "15px" } };
const _hoisted_4 = { style: { "background": "rgba(255, 255, 255, 0.1)", "padding": "10px", "border-radius": "6px" } };
const _hoisted_5 = { style: { "font-size": "12px", "color": "#ccc", "line-height": "1.6" } };
const _hoisted_6 = ["color", "transparent", "opacity", "wireframe", "side", "map"];
const _hoisted_7 = ["color", "transparent", "opacity", "wireframe", "side", "map"];
const {ref,computed,onMounted,onUnmounted} = await importShared('vue');

const {DoubleSide} = await importShared('three');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "case-face",
  setup(__props) {
    const cameraPosition = ref({
      heading: 90,
      pitch: -45,
      distance: 400,
      longitude: 118.78,
      latitude: 32.044
    });
    const time = ref(0);
    let animationFrameId;
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
    const animate = () => {
      time.value += 0.1;
      animationFrameId = requestAnimationFrame(animate);
    };
    onMounted(() => {
      animationFrameId = requestAnimationFrame(animate);
    });
    onUnmounted(() => {
      cancelAnimationFrame(animationFrameId);
    });
    const currentColor = ref("#ff6b6b");
    const currentOpacity = ref(0.8);
    const isWireframe = ref(false);
    const currentSubdivisions = ref(2);
    const currentFaceHeight = ref(0.5);
    const polygonShapes = [
      {
        name: "GeoJSON三角形",
        geometry: {
          type: "Polygon",
          coordinates: [
            [
              [118.778, 32.044],
              [118.782, 32.044],
              [118.78, 32.048],
              [118.778, 32.044]
            ]
          ]
        }
      },
      {
        name: "GeoJSON矩形",
        geometry: {
          type: "Polygon",
          coordinates: [
            [
              [118.778, 32.044],
              [118.782, 32.044],
              [118.782, 32.048],
              [118.778, 32.048],
              [118.778, 32.044]
            ]
          ]
        }
      },
      {
        name: "GeoJSON带洞矩形",
        geometry: {
          type: "Polygon",
          coordinates: [
            // 外环
            [
              [118.778, 32.044],
              [118.782, 32.044],
              [118.782, 32.048],
              [118.778, 32.048],
              [118.778, 32.044]
            ],
            // 内环（洞）
            [
              [118.7792, 32.0452],
              [118.7808, 32.0452],
              [118.7808, 32.0468],
              [118.7792, 32.0468],
              [118.7792, 32.0452]
            ]
          ]
        }
      },
      {
        name: "GeoJSON复杂多边形",
        geometry: {
          type: "Polygon",
          coordinates: [
            [
              [118.775, 32.045],
              [118.783, 32.045],
              [118.783, 32.05],
              [118.775, 32.05],
              [118.775, 32.045]
            ]
          ]
        }
      },
      {
        name: "GeoJSON大型带洞多边形",
        geometry: {
          type: "Polygon",
          coordinates: [
            // 外环
            [
              [118.775, 32.042],
              [118.785, 32.042],
              [118.785, 32.052],
              [118.775, 32.052],
              [118.775, 32.042]
            ],
            // 内环（洞）
            [
              [118.778, 32.045],
              [118.782, 32.045],
              [118.782, 32.049],
              [118.778, 32.049],
              [118.778, 32.045]
            ]
          ]
        }
      },
      {
        name: "GeoJSON多洞多边形",
        geometry: {
          type: "Polygon",
          coordinates: [
            // 外环
            [
              [118.774, 32.041],
              [118.786, 32.041],
              [118.786, 32.053],
              [118.774, 32.053],
              [118.774, 32.041]
            ],
            // 第一个洞（左上）
            [
              [118.776, 32.05],
              [118.779, 32.05],
              [118.779, 32.052],
              [118.776, 32.052],
              [118.776, 32.05]
            ],
            // 第二个洞（右上）
            [
              [118.781, 32.05],
              [118.784, 32.05],
              [118.784, 32.052],
              [118.781, 32.052],
              [118.781, 32.05]
            ],
            // 第三个洞（中央）
            [
              [118.778, 32.046],
              [118.782, 32.046],
              [118.782, 32.048],
              [118.778, 32.048],
              [118.778, 32.046]
            ],
            // 第四个洞（左下）
            [
              [118.776, 32.042],
              [118.779, 32.042],
              [118.779, 32.044],
              [118.776, 32.044],
              [118.776, 32.042]
            ],
            // 第五个洞（右下）
            [
              [118.781, 32.042],
              [118.784, 32.042],
              [118.784, 32.044],
              [118.781, 32.044],
              [118.781, 32.042]
            ]
          ]
        }
      },
      {
        name: "GeoJSON圆形洞多边形",
        geometry: {
          type: "Polygon",
          coordinates: [
            // 外环（大矩形）
            [
              [118.773, 32.04],
              [118.787, 32.04],
              [118.787, 32.054],
              [118.773, 32.054],
              [118.773, 32.04]
            ],
            // 圆形洞（用多边形近似）
            [
              [118.78, 32.047],
              [118.7805, 32.0465],
              [118.781, 32.0467],
              [118.7815, 32.047],
              [118.7818, 32.0475],
              [118.782, 32.048],
              [118.7818, 32.0485],
              [118.7815, 32.049],
              [118.781, 32.0493],
              [118.7805, 32.0495],
              [118.78, 32.0493],
              [118.7795, 32.049],
              [118.7792, 32.0485],
              [118.779, 32.048],
              [118.7792, 32.0475],
              [118.7795, 32.047],
              [118.78, 32.0467],
              [118.78, 32.047]
            ]
          ]
        }
      },
      {
        name: "GeoJSON嵌套洞多边形",
        geometry: {
          type: "Polygon",
          coordinates: [
            // 外环
            [
              [118.772, 32.039],
              [118.788, 32.039],
              [118.788, 32.055],
              [118.772, 32.055],
              [118.772, 32.039]
            ],
            // 大洞
            [
              [118.775, 32.042],
              [118.785, 32.042],
              [118.785, 32.052],
              [118.775, 32.052],
              [118.775, 32.042]
            ]
          ]
        }
      },
      {
        name: "GeoJSON星形洞多边形",
        geometry: {
          type: "Polygon",
          coordinates: [
            // 外环（大矩形）
            [
              [118.774, 32.041],
              [118.786, 32.041],
              [118.786, 32.053],
              [118.774, 32.053],
              [118.774, 32.041]
            ],
            // 星形洞
            [
              [118.78, 32.044],
              [118.7805, 32.0455],
              [118.782, 32.046],
              [118.7815, 32.0475],
              [118.7825, 32.049],
              [118.78, 32.0485],
              [118.7775, 32.049],
              [118.7785, 32.0475],
              [118.778, 32.046],
              [118.7795, 32.0455],
              [118.78, 32.044]
            ]
          ]
        }
      },
      {
        name: "GeoJSON多重多边形",
        geometry: {
          type: "MultiPolygon",
          coordinates: [
            // 第一个多边形
            [
              [
                [118.775, 32.04],
                [118.78, 32.04],
                [118.78, 32.044],
                [118.775, 32.044],
                [118.775, 32.04]
              ]
            ],
            // 第二个多边形
            [
              [
                [118.782, 32.046],
                [118.787, 32.046],
                [118.787, 32.05],
                [118.782, 32.05],
                [118.782, 32.046]
              ]
            ]
          ]
        }
      },
      {
        name: "GeoJSON多重带洞多边形",
        geometry: {
          type: "MultiPolygon",
          coordinates: [
            // 第一个多边形（带洞）
            [
              // 外环
              [
                [118.773, 32.039],
                [118.779, 32.039],
                [118.779, 32.045],
                [118.773, 32.045],
                [118.773, 32.039]
              ],
              // 内环（洞）
              [
                [118.775, 32.041],
                [118.777, 32.041],
                [118.777, 32.043],
                [118.775, 32.043],
                [118.775, 32.041]
              ]
            ],
            // 第二个多边形（带洞）
            [
              // 外环
              [
                [118.781, 32.047],
                [118.787, 32.047],
                [118.787, 32.053],
                [118.781, 32.053],
                [118.781, 32.047]
              ],
              // 内环（洞）
              [
                [118.783, 32.049],
                [118.785, 32.049],
                [118.785, 32.051],
                [118.783, 32.051],
                [118.783, 32.049]
              ]
            ],
            // 第三个多边形（多个洞）
            [
              // 外环
              [
                [118.774, 32.055],
                [118.786, 32.055],
                [118.786, 32.061],
                [118.774, 32.061],
                [118.774, 32.055]
              ],
              // 第一个洞
              [
                [118.776, 32.057],
                [118.778, 32.057],
                [118.778, 32.059],
                [118.776, 32.059],
                [118.776, 32.057]
              ],
              // 第二个洞
              [
                [118.782, 32.057],
                [118.784, 32.057],
                [118.784, 32.059],
                [118.782, 32.059],
                [118.782, 32.057]
              ]
            ]
          ]
        }
      }
    ];
    const currentShapeIndex = ref(0);
    const currentGeometry = computed(() => {
      return polygonShapes[currentShapeIndex.value].geometry;
    });
    const currentHoleCount = computed(() => {
      const geometry = currentGeometry.value;
      if (geometry.type === "Polygon") {
        return geometry.coordinates.length - 1;
      } else {
        return geometry.coordinates.reduce((total, polygon) => total + (polygon.length - 1), 0);
      }
    });
    const colors = ["#ff6b6b", "#4ecdc4", "#45b7d1", "#96ceb4", "#fcc468", "#f38ba8", "#a8dadc"];
    const opacities = [0.3, 0.5, 0.7, 0.8, 0.9, 1];
    const subdivisions = [1, 2, 3, 4, 5, 10, 20];
    const heights = [0.1, 0.2, 0.3, 0.4, 0.5, 1, 5, 10, 20];
    let colorIndex = 0;
    let opacityIndex = 3;
    let subdivisionsIndex = 1;
    let heightIndex = 2;
    const changeColor = () => {
      colorIndex = (colorIndex + 1) % colors.length;
      currentColor.value = colors[colorIndex];
    };
    const changeOpacity = () => {
      opacityIndex = (opacityIndex + 1) % opacities.length;
      currentOpacity.value = opacities[opacityIndex];
    };
    const toggleWireframe = () => {
      isWireframe.value = !isWireframe.value;
    };
    const changePolygonShape = () => {
      currentShapeIndex.value = (currentShapeIndex.value + 1) % polygonShapes.length;
    };
    const changeSubdivisions = () => {
      subdivisionsIndex = (subdivisionsIndex + 1) % subdivisions.length;
      currentSubdivisions.value = subdivisions[subdivisionsIndex];
    };
    const changeHeight = () => {
      heightIndex = (heightIndex + 1) % heights.length;
      currentFaceHeight.value = heights[heightIndex];
    };
    const resetToDefault = () => {
      colorIndex = 0;
      opacityIndex = 3;
      subdivisionsIndex = 1;
      heightIndex = 2;
      currentColor.value = colors[colorIndex];
      currentOpacity.value = opacities[opacityIndex];
      currentSubdivisions.value = subdivisions[subdivisionsIndex];
      currentFaceHeight.value = heights[heightIndex];
      currentShapeIndex.value = 0;
      isWireframe.value = false;
    };
    return (_ctx, _cache) => {
      return _openBlock(), _createElementBlock(_Fragment, null, [
        _createElementVNode("div", _hoisted_1, [
          _createElementVNode("div", _hoisted_2, [
            _cache[6] || (_cache[6] = _createElementVNode("h3", { style: { "margin": "0 0 15px 0", "color": "#4caf50", "text-align": "center" } }, "GeoKit 面相关组件控制器", -1)),
            _createElementVNode("div", _hoisted_3, [
              _cache[2] || (_cache[2] = _createElementVNode("h4", { style: { "margin": "0 0 8px 0", "color": "#2196f3", "font-size": "14px" } }, "🎨 基础控制", -1)),
              _createElementVNode("button", {
                onClick: changeColor,
                style: { "margin": "2px", "padding": "8px 12px", "background": "#2196f3", "color": "white", "border": "none", "border-radius": "4px", "cursor": "pointer" }
              }, " 切换颜色 "),
              _createElementVNode("button", {
                onClick: changeOpacity,
                style: { "margin": "2px", "padding": "8px 12px", "background": "#2196f3", "color": "white", "border": "none", "border-radius": "4px", "cursor": "pointer" }
              }, " 调节透明度 "),
              _createElementVNode("button", {
                onClick: toggleWireframe,
                style: { "margin": "2px", "padding": "8px 12px", "background": "#2196f3", "color": "white", "border": "none", "border-radius": "4px", "cursor": "pointer" }
              }, _toDisplayString(isWireframe.value ? "关闭线框" : "开启线框"), 1)
            ]),
            _createElementVNode("div", { style: { "margin-bottom": "15px", "border-top": "1px solid #444", "padding-top": "10px" } }, [
              _cache[3] || (_cache[3] = _createElementVNode("h4", { style: { "margin": "0 0 8px 0", "color": "#9c27b0", "font-size": "14px" } }, "🔺 多边形控制", -1)),
              _createElementVNode("button", {
                onClick: changePolygonShape,
                style: { "margin": "2px", "padding": "8px 12px", "background": "#9c27b0", "color": "white", "border": "none", "border-radius": "4px", "cursor": "pointer" }
              }, " 切换形状 "),
              _createElementVNode("button", {
                onClick: changeSubdivisions,
                style: { "margin": "2px", "padding": "8px 12px", "background": "#9c27b0", "color": "white", "border": "none", "border-radius": "4px", "cursor": "pointer" }
              }, " 调节细分度 "),
              _createElementVNode("button", {
                onClick: changeHeight,
                style: { "margin": "2px", "padding": "8px 12px", "background": "#9c27b0", "color": "white", "border": "none", "border-radius": "4px", "cursor": "pointer" }
              }, " 调节高度 ")
            ]),
            _createElementVNode("div", { style: { "margin-bottom": "15px", "border-top": "1px solid #444", "padding-top": "10px" } }, [
              _cache[4] || (_cache[4] = _createElementVNode("h4", { style: { "margin": "0 0 8px 0", "color": "#e91e63", "font-size": "14px" } }, "🎛️ 其他控制", -1)),
              _createElementVNode("button", {
                onClick: resetToDefault,
                style: { "margin": "2px", "padding": "8px 12px", "background": "#607d8b", "color": "white", "border": "none", "border-radius": "4px", "cursor": "pointer" }
              }, " 重置所有 ")
            ]),
            _createElementVNode("div", _hoisted_4, [
              _cache[5] || (_cache[5] = _createElementVNode("h4", { style: { "margin": "0 0 8px 0", "color": "#fff", "font-size": "14px" } }, "当前参数", -1)),
              _createElementVNode("div", _hoisted_5, [
                _createElementVNode("div", null, "🎨 颜色: " + _toDisplayString(currentColor.value), 1),
                _createElementVNode("div", null, "🌫️ 透明度: " + _toDisplayString(currentOpacity.value.toFixed(1)), 1),
                _createElementVNode("div", null, "📐 线框模式: " + _toDisplayString(isWireframe.value ? "开启" : "关闭"), 1),
                _createElementVNode("div", null, "🔺 当前形状: " + _toDisplayString(polygonShapes[currentShapeIndex.value].name), 1),
                _createElementVNode("div", null, "📊 数据格式: GeoJSON " + _toDisplayString(currentGeometry.value.type), 1),
                _createElementVNode("div", null, "🕳️ 洞数量: " + _toDisplayString(currentHoleCount.value), 1),
                _createElementVNode("div", null, "🏗️ 细分程度: " + _toDisplayString(currentSubdivisions.value), 1),
                _createElementVNode("div", null, "📏 面片高度: " + _toDisplayString(currentFaceHeight.value) + "m", 1)
              ])
            ]),
            _cache[7] || (_cache[7] = _createElementVNode("div", { style: { "margin-top": "10px", "font-size": "11px", "color": "#aaa" } }, [
              _createElementVNode("div", null, "🔺 地理多边形 (GeoPolygon) - 基于地理坐标的多边形面片"),
              _createElementVNode("div", null, "🧱 地理墙体 (GeoWall) - 基于多边形边界的立体墙面"),
              _createElementVNode("div", { style: { "margin-top": "5px", "color": "#4caf50" } }, "💡 支持动态纹理旋转效果"),
              _createElementVNode("div", { style: { "margin-top": "5px", "color": "#ff9800" } }, "🕳️ 支持多边形扣洞功能"),
              _createElementVNode("div", { style: { "margin-top": "5px", "color": "#2196f3" } }, "📊 支持GeoJSON Polygon/MultiPolygon格式")
            ], -1))
          ])
        ]),
        _createVNode(_unref(zy), {
          position: cameraPosition.value,
          "onUpdate:position": _cache[1] || (_cache[1] = ($event) => cameraPosition.value = $event)
        }, {
          default: _withCtx(() => [
            _createVNode(_unref(Gy), {
              position: cameraPosition.value,
              "onUpdate:position": _cache[0] || (_cache[0] = ($event) => cameraPosition.value = $event)
            }, null, 8, ["position"]),
            _createVNode(_unref(Hy), { sceneConfig: sceneConfig.value }, null, 8, ["sceneConfig"]),
            _createVNode(_sfc_main$1),
            _createVNode(_unref(ry), {
              geometry: currentGeometry.value,
              subdivisions: currentSubdivisions.value,
              height: currentFaceHeight.value
            }, {
              default: _withCtx(() => [
                (_openBlock(), _createBlock(_Suspense, { fallback: "" }, {
                  default: _withCtx(() => [
                    _createVNode(_unref(sz), { path: "/plugins/digitalCity/image/rain.png" }, {
                      default: _withCtx(({ state }) => [
                        _createVNode(_unref(cy), {
                          texture: state,
                          rotation: time.value * 0.1,
                          center: [0.5, 0.5]
                        }, null, 8, ["texture", "rotation"]),
                        _createElementVNode("TresMeshStandardMaterial", {
                          color: currentColor.value,
                          transparent: currentOpacity.value < 1,
                          opacity: currentOpacity.value,
                          wireframe: isWireframe.value,
                          side: _unref(DoubleSide),
                          map: state
                        }, null, 8, _hoisted_6)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }))
              ]),
              _: 1
            }, 8, ["geometry", "subdivisions", "height"]),
            _createVNode(_unref(oy), {
              geometry: currentGeometry.value,
              height: 50,
              baseHeight: 0
            }, {
              default: _withCtx(() => [
                (_openBlock(), _createBlock(_Suspense, null, {
                  default: _withCtx(() => [
                    _createVNode(_unref(sz), { path: "/plugins/digitalCity/image/line2.png" }, {
                      default: _withCtx(({ state }) => [
                        _createVNode(_unref(cy), {
                          texture: state,
                          rotation: time.value * 0.1,
                          center: [0.5, 0.5]
                        }, null, 8, ["texture", "rotation"]),
                        _createElementVNode("TresMeshStandardMaterial", {
                          color: currentColor.value,
                          transparent: currentOpacity.value < 1,
                          opacity: currentOpacity.value,
                          wireframe: isWireframe.value,
                          side: _unref(DoubleSide),
                          map: state
                        }, null, 8, _hoisted_7)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }))
              ]),
              _: 1
            }, 8, ["geometry"])
          ]),
          _: 1
        }, 8, ["position"])
      ], 64);
    };
  }
});

const caseFace = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3154780e"]]);

export { caseFace as default };
//# sourceMappingURL=case-face.CKpbENBC1767105581793.js.map
