import { importShared, _l, Kk } from './index.BxB45aCK1767105581793.js';
import { Pane } from './tweakpane.Cvt5w0bb1767105581793.js';

var tilingCaustics_default$1="varying vec2 vUv;\n\nvoid main(){\n	\n	\n	vUv=uv;\n	\n	\n	\n	gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);\n}";

var tilingCaustics_default="#define TAU 6.28318530718\n#define MAX_ITER 5\n\nuniform vec2 resolution;\nuniform vec3 backgroundColor;\nuniform vec3 color;\nuniform float speed;\nuniform vec2 flowSpeed;\nuniform float brightness;\nuniform float time;\n\nvarying vec2 vUv;\n\nvoid main(){\n	vec2 uv=(vUv.xy+(time*flowSpeed))*resolution;\n	\n	vec2 p=mod(uv*TAU,TAU)-250.;\n	vec2 i=vec2(p);\n	\n	float c=1.;\n	float inten=.005;\n	\n	for(int n=0;n<MAX_ITER;n++){\n		float t=time*speed*(1.-(3.5/float(n+1)));\n		i=p+vec2(cos(t-i.x)+sin(t+i.y),sin(t-i.y)+cos(t+i.x));\n		c+=1./length(vec2(p.x/(sin(i.x+t)/inten),p.y/(cos(i.y+t)/inten)));\n	}\n	\n	c/=float(MAX_ITER);\n	c=1.17-pow(c,brightness);\n	\n	vec3 rgb=vec3(pow(abs(c),8.));\n	\n	gl_FragColor=vec4(rgb*color+backgroundColor,length(rgb)+.1);\n}";

const {defineComponent:_defineComponent$1} = await importShared('vue');

const {createElementVNode:_createElementVNode$1,normalizeProps:_normalizeProps$1,guardReactiveProps:_guardReactiveProps$1,openBlock:_openBlock$1,createElementBlock:_createElementBlock} = await importShared('vue');

const _hoisted_1 = ["rotation-x"];
const {watch} = await importShared('vue');

const THREE = await importShared('three');
const _sfc_main$1 = /* @__PURE__ */ _defineComponent$1({
  __name: "tilingCaustics",
  props: {
    speed: { default: 0.478 },
    backgroundColor: {},
    color: { default: "#fff" },
    flowSpeed: { default: { x: 0.01, y: 0.01 } },
    brightness: { default: 1.5 }
  },
  setup(__props) {
    const props = __props;
    const smState = {
      uniforms: {
        resolution: { type: "v2", value: { x: 1, y: 1 } },
        backgroundColor: { type: "c", value: new THREE.Color(props.color) },
        color: { type: "c", value: new THREE.Color("#fff") },
        speed: { type: "f", value: props.speed },
        flowSpeed: { type: "v2", value: props.flowSpeed },
        brightness: { type: "f", value: props.brightness },
        time: { type: "f", value: 0.1 }
      },
      // 顶点着色器
      vertexShader: tilingCaustics_default$1,
      // 片段着色器
      fragmentShader: tilingCaustics_default,
      side: THREE.DoubleSide,
      transparent: true,
      depthWrite: false,
      depthTest: true
    };
    const { onBeforeRender } = _l();
    onBeforeRender(({ delta }) => {
      smState.uniforms.time.value += delta;
    });
    watch(() => props, () => {
      smState.uniforms.speed.value = props.speed;
      smState.uniforms.brightness.value = props.brightness;
      smState.uniforms.backgroundColor.value = new THREE.Color(props.color);
    }, { deep: true });
    return (_ctx, _cache) => {
      return _openBlock$1(), _createElementBlock("TresMesh", {
        "rotation-x": -Math.PI / 2,
        "position-y": 1
      }, [
        _cache[0] || (_cache[0] = _createElementVNode$1("TresPlaneGeometry", { args: [10, 10] }, null, -1)),
        _createElementVNode$1("TresShaderMaterial", _normalizeProps$1(_guardReactiveProps$1(smState)), null, 16)
      ], 8, _hoisted_1);
    };
  }
});

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,unref:_unref,createVNode:_createVNode,normalizeProps:_normalizeProps,guardReactiveProps:_guardReactiveProps,resolveComponent:_resolveComponent,mergeProps:_mergeProps,withCtx:_withCtx,openBlock:_openBlock,createBlock:_createBlock} = await importShared('vue');
const {reactive} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "tilingCaustics",
  setup(__props) {
    const gl = {
      clearColor: "#222"
    };
    const typeState = reactive({
      color: "#fff",
      speed: 0.1,
      brightness: 1.5,
      flowSpeed: { x: 0.01, y: 0.01 }
    });
    const paneControl = new Pane({
      title: "参数",
      expanded: true
    });
    paneControl.addBinding(typeState, "color", {
      label: "颜色"
    });
    paneControl.addBinding(typeState, "speed", {
      label: "速度",
      min: 0.1,
      max: 1,
      step: 0.1
    });
    paneControl.addBinding(typeState, "brightness", {
      label: "亮度",
      min: 0.1,
      max: 2,
      step: 0.1
    });
    paneControl.addBinding(typeState, "flowSpeed", {
      label: "流动速度",
      picker: "inline",
      expanded: true,
      x: { min: 0.01, step: 0.02, max: 0.6, inverted: true },
      y: { min: 0.01, step: 0.02, max: 0.6, inverted: true }
    });
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createBlock(_component_TresCanvas, _mergeProps(gl, { "window-size": "" }), {
        default: _withCtx(() => [
          _cache[0] || (_cache[0] = _createElementVNode("TresPerspectiveCamera", { position: [10, 10, 10] }, null, -1)),
          _cache[1] || (_cache[1] = _createElementVNode("TresAmbientLight", { intensity: 1 }, null, -1)),
          _createVNode(_unref(Kk)),
          _cache[2] || (_cache[2] = _createElementVNode("TresGridHelper", { args: [10, 10] }, null, -1)),
          _createVNode(_sfc_main$1, _normalizeProps(_guardReactiveProps({ ...typeState })), null, 16)
        ]),
        _: 1
      }, 16);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=tilingCaustics.BnbxczRA1767105581793.js.map
