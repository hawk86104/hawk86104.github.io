import { importShared, _l, Kk } from './index.BxB45aCK1767105581793.js';
import { _sfc_main as _sfc_main$2 } from './earth.vue_vue_type_script_setup_true_lang.BwOFi9NL1767105581793.js';
import { Pane } from './tweakpane.Cvt5w0bb1767105581793.js';

const {defineComponent:_defineComponent$1} = await importShared('vue');

const {createElementVNode:_createElementVNode$1,normalizeProps:_normalizeProps$1,guardReactiveProps:_guardReactiveProps$1,openBlock:_openBlock$1,createElementBlock:_createElementBlock} = await importShared('vue');

const _hoisted_1 = ["args"];
const THREE = await importShared('three');

const {watch} = await importShared('vue');

const _sfc_main$1 = /* @__PURE__ */ _defineComponent$1({
  __name: "smokeSphere",
  props: {
    color: { default: "#FFFFFF" },
    opacity: { default: 1 },
    speed: { default: 1 },
    phiLength: { default: 2 * Math.PI },
    thetaLength: { default: Math.PI }
  },
  setup(__props) {
    const props = __props;
    const tsm = {
      uniforms: {
        iTime: { value: 1 },
        smokeStrengthScale: { value: 1 },
        uColor: { value: new THREE.Color(props.color) },
        uOpacity: { value: props.opacity }
      },
      transparent: true,
      vertexShader: `
								varying vec2 vUv;
								void main(){
									vUv=uv;
									gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
								}`,
      fragmentShader: `
		precision highp float;
		varying vec2 vUv;
		uniform float iTime;
		uniform float smokeStrengthScale;
		uniform vec3 uColor;
		uniform float uOpacity;
		float R21 (vec2 p) {
			return fract(sin(dot(p.xy, vec2(2.3245,5.234)))*123.5632145);
		}
		float NoiseValue (vec2 uv) {
			vec2 gv = fract(uv);
			vec2 id = floor(uv);
			gv = gv * gv * (3. - 2. * gv);
			float a = R21(id);
			float b = R21(id + vec2(1., 0.));
			float c = R21(id + vec2(0., 1.));
			float d = R21(id + vec2(1., 1.));
		
			return mix(a, b, gv.x) + (c - a)* gv.y * (1. - gv.x) + (d - b) * gv.x * gv.y;
		}
		float SmoothNoise (vec2 uv) {
		
			float value = 0.;
			float amplitude = .5;
		
			for (int i = 0; i < 8; i++) {
				value += NoiseValue(uv) * amplitude;
				uv *= 2.;
				amplitude *= .5;
			}
			
			return value;
		}
		void main() {
			vec2 uv = 1.0 - vUv;
			vec3 col = vec3(0.);
			vec3 smokeCol = uColor;
			vec2 rn = vec2(0.5, 0.5);
			rn.x = SmoothNoise(uv + 1.984 * vec2(1.7,9.2)+ 0.158*iTime );
			rn.y = SmoothNoise(uv + 1. * vec2(8.3,2.8)+ 0.126*iTime);
			float smokeStrength = smoothstep(0.0, 1.0, SmoothNoise(uv+rn*2.5));
			gl_FragColor = vec4(smokeCol, smokeStrength * smokeStrengthScale * uOpacity);
		}
		`
    };
    watch(
      () => [props.color, props.opacity],
      ([color, opacity]) => {
        tsm.uniforms.uColor.value = new THREE.Color(color);
        tsm.uniforms.uOpacity.value = opacity;
      }
    );
    const { onBeforeRender } = _l();
    onBeforeRender(({ delta }) => {
      tsm.uniforms.iTime.value += delta * props.speed;
    });
    return (_ctx, _cache) => {
      return _openBlock$1(), _createElementBlock("TresMesh", null, [
        _createElementVNode$1("TresSphereGeometry", {
          args: [1, 32, 32, 0, _ctx.phiLength, 0, _ctx.thetaLength]
        }, null, 8, _hoisted_1),
        _createElementVNode$1("TresShaderMaterial", _normalizeProps$1(_guardReactiveProps$1(tsm)), null, 16)
      ]);
    };
  }
});

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,unref:_unref,createVNode:_createVNode,Suspense:_Suspense,withCtx:_withCtx,openBlock:_openBlock,createBlock:_createBlock,normalizeProps:_normalizeProps,guardReactiveProps:_guardReactiveProps,resolveComponent:_resolveComponent} = await importShared('vue');

const {reactive} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "smokeEarth",
  setup(__props) {
    const configState = reactive({
      color: "#00d5ff",
      opacity: 0.58,
      speed: 1.8,
      scale: 1.1,
      phiLength: 2 * Math.PI,
      thetaLength: Math.PI
    });
    const paneControl = new Pane();
    paneControl.addBinding(configState, "color", { label: "颜色" });
    paneControl.addBinding(configState, "opacity", { label: "透明度", min: 0, max: 1, step: 0.01 });
    paneControl.addBinding(configState, "speed", { label: "速度", min: 0.1, max: 5, step: 0.1 });
    paneControl.addBinding(configState, "scale", { label: "大小", min: 1.01, max: 2, step: 0.01 });
    paneControl.addBinding(configState, "phiLength", { label: "水平范围", min: 0, max: 2 * Math.PI, step: 0.01 });
    paneControl.addBinding(configState, "thetaLength", { label: "垂直范围", min: 0, max: Math.PI, step: 0.01 });
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createBlock(_component_TresCanvas, {
        clearColor: "#201919",
        "window-size": ""
      }, {
        default: _withCtx(() => [
          _cache[0] || (_cache[0] = _createElementVNode("TresPerspectiveCamera", {
            position: [3, 3, 0],
            fov: 45,
            near: 0.1,
            far: 1e4
          }, null, -1)),
          _createVNode(_unref(Kk), { enableDamping: "" }),
          _cache[1] || (_cache[1] = _createElementVNode("TresAmbientLight", { intensity: 3 }, null, -1)),
          (_openBlock(), _createBlock(_Suspense, null, {
            default: _withCtx(() => [
              _createVNode(_sfc_main$2)
            ]),
            _: 1
          })),
          (_openBlock(), _createBlock(_Suspense, null, {
            default: _withCtx(() => [
              _createVNode(_sfc_main$1, _normalizeProps(_guardReactiveProps(configState)), null, 16)
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
//# sourceMappingURL=smokeEarth.DIbqxfbT1767105581793.js.map
