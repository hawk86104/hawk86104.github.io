import { importShared, Kk, tk } from './index.BxB45aCK1767105581793.js';
import { Pane } from './tweakpane.Cvt5w0bb1767105581793.js';

var gridFloor_default$1="varying vec2 vUv;\nvoid main()\n{\n    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n    vUv = uv;\n}";

var gridFloor_default="uniform float uGridThickness;\nuniform vec3 uGridColor;\nuniform float uCrossScale;\nuniform float uCrossThickness;\nuniform float uCross;\nuniform vec3 uCrossColor;\nuniform vec3 uFloorColor;\n\nvarying vec2 vUv;\n\nfloat gridFloor(vec2 uv, vec2 lineWidth) {\n    \n    \n    \n    \n    \n    \n    \n    vec4 uvDDXY = vec4(dFdx(uv), dFdy(uv));\n    vec2 uvDeriv = vec2(length(uvDDXY.xz), length(uvDDXY.yw));\n\n    \n    \n    \n    bool invertLine = lineWidth.x > 0.5;\n    vec2 targetWidth = invertLine ? 1.0 - lineWidth : lineWidth;\n\n    \n    \n    \n    \n    \n    vec2 drawWidth = clamp(targetWidth, uvDeriv, vec2(0.5));\n\n    \n    \n    \n    vec2 lineAA = uvDeriv * 1.5;\n    \n    \n    \n    \n    \n    \n    vec2 gridUV = abs(fract(uv) * 2.0 - 1.0);\n    gridUV = invertLine ? gridUV : 1.0 - gridUV;\n\n    \n    \n    \n    vec2 grid2 = smoothstep(drawWidth + lineAA, drawWidth - lineAA, gridUV);\n\n    \n    \n    \n    grid2 *= clamp(targetWidth / drawWidth, 0.0, 1.0);\n\n    \n    \n    \n    \n    \n    grid2 = mix(grid2, targetWidth, clamp(uvDeriv * 2.0 - 1.0, 0.0, 1.0));\n    grid2 = invertLine ? 1.0 - grid2 : grid2;\n\n    \n    float grid = mix(grid2.x, 1.0, grid2.y);\n\n    return grid;\n}\n\nfloat crossFloor(vec2 uv, float scale, float thickness, float crossIntensity) {\n    vec2 lineWidth = vec2(thickness);\n\n    \n    \n    \n    \n    \n    \n    \n    vec4 uvDDXY = vec4(dFdx(uv), dFdy(uv));\n    vec2 uvDeriv = vec2(length(uvDDXY.xz), length(uvDDXY.yw));\n\n    \n    \n    \n    bool invertLine = lineWidth.x > 0.5;\n    \n    vec2 targetWidth = lineWidth;\n\n    \n    \n    \n    \n    \n    vec2 drawWidth = clamp(targetWidth, uvDeriv, vec2(0.5));\n\n    \n    \n    \n    vec2 lineAA = uvDeriv * 1.5;\n    \n    \n    float cutOffX = abs(fract(uv.y) * 2.0 - 1.0) > crossIntensity ? 1.0 : 0.0;\n    float cutOffY = abs(fract(uv.x) * 2.0 - 1.0) > crossIntensity ? 1.0 : 0.0;\n\n    \n    \n    \n    \n    \n    \n    \n    float uvX = abs(fract(uv.x) * 2.0 - 1.0) + cutOffX;\n    float uvY = abs(fract(uv.y) * 2.0 - 1.0) + cutOffY;\n    vec2 gridUV = vec2(uvX, uvY);\n\n    \n\n    \n    \n    \n    vec2 grid2 = smoothstep(drawWidth + lineAA, drawWidth - lineAA, gridUV);\n\n    \n    \n    \n    grid2 *= clamp(targetWidth / drawWidth, 0.0, 1.0);\n\n    \n    \n    \n    \n    \n    grid2 = mix(grid2, targetWidth, clamp(uvDeriv * 2.0 - 1.0, 0.0, 1.0));\n    \n\n    \n    float grid = mix(grid2.x, 1.0, grid2.y);\n\n    return grid;\n}\n\nvoid main()\n{\n    vec2 lineWidth = vec2(uGridThickness);\n    \n    vec2 uv = vUv * 20.0;\n\n    \n    float grid = gridFloor(uv, lineWidth);\n    \n    vec3 gridColor = mix(uFloorColor, uGridColor, vec3(grid));\n\n    \n    float crossUv = crossFloor(uv, uCrossScale, uCrossThickness, uCross);\n    \n    vec3 gridColor2 = mix(gridColor, uCrossColor, vec3(crossUv));\n    \n    vec3 color =  gridColor2;\n\n    gl_FragColor = vec4(color, 1.0);\n}";

const {defineComponent:_defineComponent$1} = await importShared('vue');

const {createElementVNode:_createElementVNode$1,normalizeProps:_normalizeProps$1,guardReactiveProps:_guardReactiveProps$1,openBlock:_openBlock$1,createElementBlock:_createElementBlock} = await importShared('vue');

const _hoisted_1 = ["rotate-x"];
const THREE = await importShared('three');

const {watchEffect} = await importShared('vue');
const _sfc_main$1 = /* @__PURE__ */ _defineComponent$1({
  __name: "gridFloor",
  props: {
    gridColor: {
      default: "#c4d6ff"
    },
    gridThickness: {
      default: 0.02
    },
    crossColor: {
      default: "#7a91df"
    },
    crossThickness: {
      default: 0.02
    },
    uCross: {
      default: 0.2
    },
    floorColor: {
      default: "#ffffff"
    }
  },
  setup(__props) {
    const props = __props;
    const tsm = {
      vertexShader: gridFloor_default$1,
      fragmentShader: gridFloor_default,
      side: THREE.DoubleSide,
      transparent: true,
      uniforms: {
        uFloorColor: { value: new THREE.Color(props.floorColor) },
        uGridThickness: { value: props.gridThickness },
        uGridColor: { value: new THREE.Color(props.gridColor) },
        uCrossThickness: { value: props.crossThickness },
        uCross: { value: props.uCross },
        uCrossColor: { value: new THREE.Color(props.crossColor) }
      }
    };
    watchEffect(() => {
      tsm.uniforms.uFloorColor.value.set(props.floorColor);
      tsm.uniforms.uGridColor.value.set(props.gridColor);
      tsm.uniforms.uCrossColor.value.set(props.crossColor);
      tsm.uniforms.uGridThickness.value = props.gridThickness;
      tsm.uniforms.uCrossThickness.value = props.crossThickness;
      tsm.uniforms.uCross.value = props.uCross;
    });
    return (_ctx, _cache) => {
      return _openBlock$1(), _createElementBlock("TresMesh", {
        "rotate-x": -Math.PI / 2
      }, [
        _cache[0] || (_cache[0] = _createElementVNode$1("TresPlaneGeometry", { args: [10, 10, 32, 32] }, null, -1)),
        _createElementVNode$1("TresShaderMaterial", _normalizeProps$1(_guardReactiveProps$1(tsm)), null, 16)
      ], 8, _hoisted_1);
    };
  }
});

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,unref:_unref,normalizeProps:_normalizeProps,guardReactiveProps:_guardReactiveProps,createVNode:_createVNode,Suspense:_Suspense,withCtx:_withCtx,openBlock:_openBlock,createBlock:_createBlock,resolveComponent:_resolveComponent,mergeProps:_mergeProps} = await importShared('vue');

const {ACESFilmicToneMapping} = await importShared('three');

const {reactive} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "gridFloor",
  setup(__props) {
    const state = reactive({
      alpha: true,
      toneMapping: ACESFilmicToneMapping,
      windowSize: true,
      clearColor: 3355443
    });
    const controlsState = reactive({
      enableDamping: true,
      autoRotate: false
    });
    const gridState = reactive({
      gridColor: "#ffffff",
      crossColor: "#ef57ff",
      floorColor: "#000000",
      gridThickness: 0.02,
      crossThickness: 0.03,
      uCross: 0.29
    });
    const paneControl = new Pane();
    paneControl.addBinding(gridState, "gridColor", {
      label: "网格颜色"
    });
    paneControl.addBinding(gridState, "gridThickness", {
      label: "网格厚度",
      min: 0.01,
      max: 1,
      step: 0.01
    });
    paneControl.addBinding(gridState, "crossColor", {
      label: "十字颜色"
    });
    paneControl.addBinding(gridState, "crossThickness", {
      label: "十字厚度",
      min: 0.01,
      max: 1,
      step: 0.01
    });
    paneControl.addBinding(gridState, "uCross", {
      label: "十字大小",
      min: 0.01,
      max: 1,
      step: 0.01
    });
    paneControl.addBinding(gridState, "floorColor", {
      label: "地板颜色"
    });
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createBlock(_component_TresCanvas, _mergeProps(state, { "window-size": "" }), {
        default: _withCtx(() => [
          _cache[0] || (_cache[0] = _createElementVNode("TresPerspectiveCamera", {
            position: [6, 6, 6],
            fov: 45,
            near: 0.1,
            far: 1e3
          }, null, -1)),
          _createVNode(_unref(Kk), _normalizeProps(_guardReactiveProps(controlsState)), null, 16),
          _cache[1] || (_cache[1] = _createElementVNode("TresAmbientLight", { intensity: 0.5 }, null, -1)),
          _cache[2] || (_cache[2] = _createElementVNode("TresDirectionalLight", {
            position: [15, 15, 15],
            intensity: 1
          }, null, -1)),
          _cache[3] || (_cache[3] = _createElementVNode("TresMesh", {
            position: [0, 0.5, 0],
            scale: 0.2
          }, [
            _createElementVNode("TresTorusKnotGeometry", { args: [1, 0.35, 100, 32] }),
            _createElementVNode("TresMeshStandardMaterial", {
              color: "#ff33ff",
              roughness: 0,
              metalness: 1
            })
          ], -1)),
          _createVNode(_sfc_main$1, _normalizeProps(_guardReactiveProps(gridState)), null, 16),
          (_openBlock(), _createBlock(_Suspense, null, {
            default: _withCtx(() => [
              _createVNode(_unref(tk), {
                files: ["pos-x.jpg", "neg-x.jpg", "pos-y.jpg", "neg-y.jpg", "pos-z.jpg", "neg-z.jpg"],
                path: ("https://opensource.cdn.icegl.cn") + "/images/skyBox/6jpg/"
              }, null, 8, ["path"])
            ]),
            _: 1
          }))
        ]),
        _: 1
      }, 16);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=gridFloor.CajwREaG1767105581793.js.map
