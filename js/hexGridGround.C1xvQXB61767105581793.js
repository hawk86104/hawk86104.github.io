import { importShared, no, _l, oz, Kk } from './index.BxB45aCK1767105581793.js';
import { Pane } from './tweakpane.Cvt5w0bb1767105581793.js';
import { _sfc_main as _sfc_main$3 } from './reflectorDUDV.vue_vue_type_script_setup_true_lang.Cce3m26z1767105581793.js';

var hexGridMaterial_default="varying vec2 uvPosition;\n\nuniform float time;\n\nuniform float raisedBottom;\nuniform float waveFrequency;\nuniform float wavePow;\nuniform int direction;\n\nuniform float division;\nuniform float divisionScaleX;\n\nuniform bool hasMaskTexture;\nuniform sampler2D maskTexture;\n\nuniform bool isReversed;\n\nuniform float gridWeight;\n\nfloat hexDist(vec2 p) {\n  p = abs(p);\n  float d = dot(p, normalize(vec2(1.0, 1.73)));\n  return max(d, p.x);\n}\nvec4 hexCoords(vec2 uv) {\n  vec2 r = vec2(1.0, 1.73);\n  vec2 h = r * 0.5;\n  vec2 a = mod(uv, r) - h;\n  vec2 b = mod(uv - h, r) - h;\n\n  vec2 gv = length(a) < length(b) ? a : b;\n  vec2 id = uv - gv;\n\n  float x = atan(gv.x, gv.y);\n  float y = 0.5 - hexDist(gv);\n\n  return vec4(x, y, id);\n}\n\nvoid main() {\n  vec2 uv = uvPosition * vec2(division * divisionScaleX, division);\n  vec4 hc = hexCoords(uv);\n  vec2 id = hc.zw;\n  float distance = id.y;\n  if (direction == 3) {\n    distance = id.x;\n  } else if (direction == 5) {\n    distance = length(id.xy);\n  } else if (direction == 6) {\n    vec2 center = vec2(0.5 * division * divisionScaleX, 0.5 * division);\n    distance = length(uv - center);\n  }\n  float wavy =\n      pow(sin((distance * waveFrequency - time)), wavePow) + raisedBottom;\n\n  float diffuseColorA = csm_DiffuseColor.a;\n  diffuseColorA *= wavy;\n\n  float mask = 1.0;\n  if (hasMaskTexture) {\n    vec2 uVm = id / vec2(division * divisionScaleX, division);\n    mask = texture2D(maskTexture, uVm).g;\n  }\n\n  float w = gridWeight + (1.0 - mask);\n  w = clamp(w, 0.0, 1.0);\n\n  float margin = clamp(w * 0.33, 0.00, 0.02);\n  float stepMax = w + margin;\n\n  float gridLine = smoothstep(w, stepMax, hc.y);\n  gridLine = isReversed ? 1.0 - gridLine : gridLine;\n  diffuseColorA *= gridLine;\n\n  \n  \n  csm_DiffuseColor.rgb *= diffuseColorA;\n\nfloat brightness = length(csm_DiffuseColor.rgb);\n\nfloat alphaBlend = smoothstep(0.0, 1.0, brightness);\n\ncsm_DiffuseColor.a *= alphaBlend;\n\ncsm_FragColor = vec4(csm_DiffuseColor.rgb, csm_DiffuseColor.a);\n}";

const {defineComponent:_defineComponent$2} = await importShared('vue');

const {unref:_unref$2,openBlock:_openBlock$2,createBlock:_createBlock$1} = await importShared('vue');

const {watch} = await importShared('vue');

const THREE$1 = await importShared('three');
const vertexShader = `
varying vec2 uvPosition;
void main() {
    uvPosition = uv;
}
`;
const _sfc_main$2 = /* @__PURE__ */ _defineComponent$2({
  __name: "hexGridMaterial",
  props: {
    baseMaterial: {
      default: THREE$1.MeshBasicMaterial
    },
    speed: {
      default: 1
    },
    gridWeight: {
      default: 0.03
    },
    raisedBottom: { default: 0.05 },
    waveFrequency: { default: 0.2 },
    wavePow: { default: 4 },
    division: { default: 32 },
    divisionScaleX: { default: 1 },
    direction: { default: 4 },
    // vertical: 4, horizontal: 3, radial: 5 , circle: 6
    isReversed: { default: false },
    hasMaskTexture: { default: false },
    maskTexture: { default: "" }
  },
  setup(__props) {
    const props = __props;
    const uniforms = {
      gridWeight: { value: props.gridWeight },
      raisedBottom: { value: props.raisedBottom },
      waveFrequency: { value: props.waveFrequency },
      wavePow: { value: props.wavePow },
      direction: { value: props.direction },
      isReversed: { value: props.isReversed },
      hasMaskTexture: { value: props.hasMaskTexture },
      maskTexture: { value: null },
      division: { value: props.division },
      divisionScaleX: { value: props.divisionScaleX },
      time: { value: 0 }
    };
    if (props.maskTexture) {
      const { state: pTexture } = no(props.maskTexture);
      uniforms.maskTexture = pTexture;
    }
    watch(
      () => [
        props.gridWeight,
        props.raisedBottom,
        props.waveFrequency,
        props.wavePow,
        props.division,
        props.divisionScaleX,
        props.direction,
        props.isReversed,
        props.hasMaskTexture
      ],
      ([gridWeight, raisedBottom, waveFrequency, wavePow, division, divisionScaleX, direction, isReversed, hasMaskTexture]) => {
        uniforms.gridWeight.value = gridWeight;
        uniforms.raisedBottom.value = raisedBottom;
        uniforms.waveFrequency.value = waveFrequency;
        uniforms.wavePow.value = wavePow;
        uniforms.division.value = division;
        uniforms.divisionScaleX.value = divisionScaleX;
        uniforms.direction.value = direction;
        uniforms.isReversed.value = isReversed;
        uniforms.hasMaskTexture.value = hasMaskTexture;
      }
    );
    const { onBeforeRender } = _l();
    onBeforeRender(({ delta }) => {
      uniforms.time.value += delta * props.speed;
    });
    return (_ctx, _cache) => {
      return _openBlock$2(), _createBlock$1(_unref$2(oz), {
        baseMaterial: __props.baseMaterial,
        vertexShader,
        side: THREE$1.DoubleSide,
        transparent: "",
        fragmentShader: _unref$2(hexGridMaterial_default),
        uniforms
      }, null, 8, ["baseMaterial", "side", "fragmentShader"]);
    };
  }
});

const {defineComponent:_defineComponent$1} = await importShared('vue');

const {createElementVNode:_createElementVNode$1,unref:_unref$1,mergeProps:_mergeProps$1,createVNode:_createVNode$1,openBlock:_openBlock$1,createElementBlock:_createElementBlock} = await importShared('vue');

const _hoisted_1 = ["rotation"];
const THREE = await importShared('three');
const _sfc_main$1 = /* @__PURE__ */ _defineComponent$1({
  __name: "hexGridMesh",
  setup(__props) {
    const baseMaterial = THREE.MeshBasicMaterial;
    return (_ctx, _cache) => {
      return _openBlock$1(), _createElementBlock("TresMesh", {
        rotation: [-Math.PI / 2, 0, 0]
      }, [
        _cache[0] || (_cache[0] = _createElementVNode$1("TresPlaneGeometry", { args: [1, 1] }, null, -1)),
        _createVNode$1(_sfc_main$2, _mergeProps$1({ baseMaterial: _unref$1(baseMaterial) }, _ctx.$attrs, { maskTexture: "./plugins/floor/image/logoBlack.png" }), null, 16, ["baseMaterial"])
      ], 8, _hoisted_1);
    };
  }
});

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,unref:_unref,createVNode:_createVNode,mergeProps:_mergeProps,resolveComponent:_resolveComponent,withCtx:_withCtx,openBlock:_openBlock,createBlock:_createBlock} = await importShared('vue');

const {reactive} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "hexGridGround",
  setup(__props) {
    const reflectorState = reactive({
      reflectivity: 0.8,
      showGridHelper: false,
      scale: 1
    });
    const configState = reactive({
      color: "#de62f2",
      speed: 1.9,
      gridWeight: 0.223,
      raisedBottom: 0.66,
      waveFrequency: 0.066,
      wavePow: 19,
      division: 46,
      divisionScaleX: 1,
      isReversed: false,
      direction: 4,
      hasMaskTexture: true
    });
    const paneControl = new Pane({
      title: "hexGridGround",
      expanded: true
    });
    paneControl.addBinding(configState, "hasMaskTexture", {
      label: "图片纹理"
    });
    paneControl.addBinding(configState, "color", { label: "颜色" });
    paneControl.addBinding(configState, "speed", {
      label: "速度",
      min: -5,
      max: 5,
      step: 0.1
    });
    paneControl.addBinding(configState, "gridWeight", {
      label: "网格宽度",
      min: 1e-3,
      max: 0.5,
      step: 1e-3
    });
    paneControl.addBinding(configState, "raisedBottom", {
      label: "渐变宽度",
      min: 1e-3,
      max: 1,
      step: 1e-3
    });
    paneControl.addBinding(configState, "waveFrequency", {
      label: "分段",
      min: 1e-3,
      max: 1,
      step: 1e-3
    });
    paneControl.addBinding(configState, "wavePow", {
      label: "渐变强度",
      min: 1,
      max: 30,
      step: 0.1
    });
    paneControl.addBinding(configState, "division", {
      label: "网格整体缩放",
      min: 0.1,
      max: 50,
      step: 0.1
    });
    paneControl.addBinding(configState, "divisionScaleX", {
      label: "网格横向缩放",
      min: 0.1,
      max: 10,
      step: 0.1
    });
    paneControl.addBinding(configState, "isReversed", {
      label: "颜色取反"
    });
    paneControl.addBinding(configState, "direction", {
      label: "方向类别",
      min: 3,
      max: 6,
      step: 1
    });
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createBlock(_component_TresCanvas, {
        clearColor: "#666666",
        "window-size": ""
      }, {
        default: _withCtx(() => [
          _cache[0] || (_cache[0] = _createElementVNode("TresPerspectiveCamera", {
            position: [3, 3, 0],
            fov: 45,
            near: 0.1,
            far: 1e4
          }, null, -1)),
          _createVNode(_unref(Kk), {
            enableDamping: "",
            autoRotate: ""
          }),
          _createVNode(_sfc_main$1, _mergeProps(configState, { scale: 9 }), null, 16),
          _createVNode(_sfc_main$3, _mergeProps({ position: [0, -0.06, 0] }, reflectorState), null, 16)
        ]),
        _: 1
      });
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=hexGridGround.C1xvQXB61767105581793.js.map
