import { importShared, Kk } from './index.BxB45aCK1767105581793.js';
import { Pane } from './tweakpane.Cvt5w0bb1767105581793.js';
import './customShaderMaterial.vue_vue_type_script_setup_true_lang.rDMIDGqx1767105581793.js';
import './index.vue_vue_type_script_setup_true_lang.D7-hpzmy1767105581793.js';
import { useGLTF } from './index.CTrIPOkZ1767105581793.js';
import { h337 } from './heatmap.EAX66iZz1767105581793.js';

const {withAsyncContext:_withAsyncContext,defineComponent:_defineComponent$1} = await importShared('vue');

const {unref:_unref$1,openBlock:_openBlock$1,createElementBlock:_createElementBlock} = await importShared('vue');

const _hoisted_1 = ["object"];
const THREE = await importShared('three');
const {watchEffect,toRaw} = await importShared('vue');

const _sfc_main$1 = /* @__PURE__ */ _defineComponent$1({
  __name: "heatmapClickCom",
  props: {
    show2dCanvas: { type: Boolean, default: true },
    radius: { default: 20 }
  },
  async setup(__props) {
    let __temp, __restore;
    const props = __props;
    const { nodes } = ([__temp, __restore] = _withAsyncContext(() => useGLTF(
      ("https://opensource.cdn.icegl.cn") + "/model/heatmap/test.glb"
    )), __temp = await __temp, __restore(), __temp);
    nodes.mesh_0.position.set(-5088.96, -3.08, 39374.7);
    nodes.mesh_0.scale.setScalar(0.01);
    let heatmap = null;
    let texture = null;
    let heatmapCanvas = null;
    const initHeatmap = () => {
      heatmapCanvas = document.createElement("heatmap-canvas");
      heatmapCanvas.style.position = "absolute";
      heatmapCanvas.style.top = "40px";
      heatmapCanvas.style.left = "0";
      document.body.appendChild(heatmapCanvas);
      heatmap = h337.create({
        container: heatmapCanvas,
        width: 256,
        height: 256,
        blur: "0.8",
        radius: props.radius
      });
      heatmap._renderer.canvas.style.border = "1px solid #5384ff";
      heatmap._renderer.canvas.onclick = function(ev) {
        heatmap.addData({
          x: ev.layerX,
          y: ev.layerY,
          value: 1,
          radius: props.radius
        });
        heatmap.setDataMax(1);
        if (texture) {
          texture.needsUpdate = true;
        }
      };
      return heatmap;
    };
    texture = new THREE.Texture(initHeatmap()._renderer.canvas);
    const shader = {
      vertexShader: `
	varying vec2 vUv;
	void main() {
		gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
		vUv = uv;
	}
	`,
      fragmentShader: `
	uniform sampler2D heightMap;
	uniform float uOpacity;
	varying vec2 vUv;
	void main() {
		gl_FragColor = vec4(texture2D(heightMap, vUv.xy).rgb, uOpacity);
	}
	`,
      uniforms: {
        uOpacity: {
          value: 1
        },
        heightMap: {
          type: "t",
          value: texture
        }
      },
      depthWrite: true,
      depthTest: true,
      transparent: true,
      side: THREE.DoubleSide
    };
    const creatShaderMaterial = new THREE.ShaderMaterial(shader);
    nodes.mesh_0.material = creatShaderMaterial;
    const resetUV = (geometry) => {
      geometry.computeBoundingBox();
      const { max, min } = geometry.boundingBox;
      geometry.deleteAttribute("uv");
      const roomX = max.x - min.x;
      const roomZ = max.z - min.z;
      const PuvList = [];
      for (let i = 0; i < geometry.attributes.position.count; i++) {
        PuvList.push((geometry.attributes.position.getX(i) - min.x) / roomX);
        PuvList.push((geometry.attributes.position.getZ(i) - min.z) / roomZ);
      }
      const Puvs = new Float32Array(PuvList);
      geometry.setAttribute("uv", new THREE.BufferAttribute(Puvs, 2));
    };
    resetUV(nodes.mesh_0.geometry);
    watchEffect(() => {
      heatmapCanvas.style.display = `${props.show2dCanvas ? "block" : "none"}`;
    });
    return (_ctx, _cache) => {
      return _openBlock$1(), _createElementBlock("primitive", {
        object: toRaw(_unref$1(nodes).mesh_0)
      }, null, 8, _hoisted_1);
    };
  }
});

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,unref:_unref,createVNode:_createVNode,normalizeProps:_normalizeProps,guardReactiveProps:_guardReactiveProps,Suspense:_Suspense,withCtx:_withCtx,openBlock:_openBlock,createBlock:_createBlock,resolveComponent:_resolveComponent,mergeProps:_mergeProps} = await importShared('vue');
const {PCFSoftShadowMap,SRGBColorSpace} = await importShared('three');

const {reactive} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "heatmapClick",
  setup(__props) {
    const gl = {
      clearColor: "#030311",
      shadows: true,
      alpha: true,
      outputColorSpace: SRGBColorSpace,
      shadowMapType: PCFSoftShadowMap,
      useLegacyLights: true,
      antialias: true
    };
    const typeState = reactive({
      show2dCanvas: true,
      radius: 20
    });
    const paneControl = new Pane({
      title: "参数",
      expanded: true
    });
    paneControl.addBinding(typeState, "show2dCanvas", {
      label: "显示二维图"
    });
    paneControl.addBinding(typeState, "radius", {
      label: "圆圈的大小",
      min: 0.1,
      max: 30,
      step: 0.1
    });
    paneControl.addButton({ title: "点击左侧蓝色画框" });
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createBlock(_component_TresCanvas, _mergeProps(gl, { "window-size": "" }), {
        default: _withCtx(() => [
          _cache[0] || (_cache[0] = _createElementVNode("TresPerspectiveCamera", {
            position: [21, 34, 55],
            fov: 60,
            near: 1,
            far: 1e5
          }, null, -1)),
          _createVNode(_unref(Kk), {
            autoRotate: false,
            autoRotateSpeed: 2
          }),
          _cache[1] || (_cache[1] = _createElementVNode("TresDirectionalLight", {
            position: [5, 10, 7.5],
            color: "#ffffff",
            intensity: 5
          }, null, -1)),
          _cache[2] || (_cache[2] = _createElementVNode("TresGridHelper", { args: [50, 25] }, null, -1)),
          (_openBlock(), _createBlock(_Suspense, null, {
            default: _withCtx(() => [
              _createVNode(_sfc_main$1, _normalizeProps(_guardReactiveProps(typeState)), null, 16)
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
//# sourceMappingURL=heatmapClick.Ci_Zq7nY1767105581793.js.map
