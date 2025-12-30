import { importShared } from './index.BxB45aCK1767105581793.js';
import { h337 } from './heatmap.EAX66iZz1767105581793.js';

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,normalizeProps:_normalizeProps,guardReactiveProps:_guardReactiveProps,openBlock:_openBlock,createElementBlock:_createElementBlock} = await importShared('vue');

const _hoisted_1 = ["args", "rotate-x"];
const {watchEffect} = await importShared('vue');

const {DoubleSide,Texture} = await importShared('three');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "heatmapJS",
  props: {
    Plane: { default: [50, 50, 1e3, 1e3] },
    show2dCanvas: { type: Boolean, default: true },
    heightRatio: { default: 6 }
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    let heatmap = null;
    const getRandom = (max, min) => {
      return Math.round((Math.random() * (max - min + 1) + min) * 10) / 10;
    };
    let heatmapCanvas = null;
    const initHeatmap = () => {
      heatmapCanvas = document.createElement("heatmap-canvas");
      heatmapCanvas.width = 100;
      heatmapCanvas.height = 100;
      heatmapCanvas.style.position = "absolute";
      heatmapCanvas.style.top = "0";
      heatmapCanvas.style.left = "0";
      document.body.appendChild(heatmapCanvas);
      heatmap = h337.create({
        container: heatmapCanvas,
        width: 256,
        height: 256,
        blur: ".8",
        radius: 10
      });
      return heatmap;
    };
    const setData = (data) => {
      const max = 12;
      if (data) ; else {
        let i = 0;
        data = [];
        while (i < 2e3) {
          data.push({ x: getRandom(1, 256), y: getRandom(1, 256), value: getRandom(1, 6) });
          i++;
        }
      }
      heatmap.setData({
        max,
        data
      });
      texture.needsUpdate = true;
    };
    const texture = new Texture(initHeatmap()._renderer.canvas);
    setData();
    const shader = {
      transparent: true,
      side: DoubleSide,
      vertexShader: `
	uniform sampler2D heightMap;
	uniform float heightRatio;
	varying vec2 vUv;
	varying float hValue;
	varying vec3 cl;
	void main() {
	  vUv = uv;
	  vec3 pos = position;
	  cl = texture2D(heightMap, vUv).rgb;
	  hValue = texture2D(heightMap, vUv).r;
	  pos.y = hValue * heightRatio;
	  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos,1.0);
	}`,
      fragmentShader: `
	varying float hValue;
	varying vec3 cl;
	void main() {
		float v = abs(hValue - 1.);
		gl_FragColor = vec4(cl, .8 - v * v*1.1) ; 
	}`,
      uniforms: {
        heightMap: {
          type: "t",
          value: texture
        },
        heightRatio: { value: props.heightRatio }
      }
    };
    watchEffect(() => {
      heatmapCanvas.style.display = `${props.show2dCanvas ? "block" : "none"}`;
      if (props.heightRatio) {
        shader.uniforms.heightRatio.value = props.heightRatio;
      }
    });
    __expose({
      setData
    });
    return (_ctx, _cache) => {
      return _openBlock(), _createElementBlock("TresMesh", null, [
        _createElementVNode("TresPlaneGeometry", {
          args: props.Plane,
          "rotate-x": -Math.PI * 0.5
        }, null, 8, _hoisted_1),
        _createElementVNode("TresShaderMaterial", _normalizeProps(_guardReactiveProps(shader)), null, 16)
      ]);
    };
  }
});

export { _sfc_main };
//# sourceMappingURL=heatmapJS.vue_vue_type_script_setup_true_lang.DbMNYVxC1767105581793.js.map
