import { importShared, _l } from './index.BxB45aCK1767105581793.js';
import { getcenterPoint } from './utils.-sNu4bkd1767105581793.js';

const {defineComponent:_defineComponent} = await importShared('vue');

const {unref:_unref,createElementVNode:_createElementVNode,normalizeProps:_normalizeProps,guardReactiveProps:_guardReactiveProps,openBlock:_openBlock,createElementBlock:_createElementBlock} = await importShared('vue');

const _hoisted_1 = ["position", "uv"];
const THREE = await importShared('three');

const {watchEffect,ref,watch} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "rippleMesh",
  props: {
    positionSrc: { default: [
      { x: 0, y: 0 },
      { x: 10, y: 10 }
    ] },
    color: { default: "#ffff00" },
    opacity: { default: 0.8 },
    height: { default: 100 },
    num: { default: 8 },
    speed: { default: 0.15 }
  },
  setup(__props) {
    const props = __props;
    const tresMeshRef = ref();
    const rippleShader = {
      side: THREE.DoubleSide,
      transparent: true,
      depthWrite: false,
      depthTest: true,
      vertexShader: `
precision lowp float;
precision lowp int;
${THREE.ShaderChunk.fog_pars_vertex}
varying vec2 vUv;
void main() {
	vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
	vUv = uv;
	gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
	${THREE.ShaderChunk.fog_vertex}
}
`,
      fragmentShader: `
precision lowp float;
precision lowp int;
uniform float time;
uniform float opacity;
uniform vec3 color;
uniform float num;
uniform float speed;
varying vec2 vUv;
void main() {
	vec4 fragColor = vec4(0.);
	float sin = sin((vUv.y - time * speed) * 10. * num);
	float high = 0.92;
	float medium = 0.4;
	if (sin > high) {
		fragColor = vec4(mix(vec3(.8, 1., 1.), color, (1. - sin) / (1. - high)), 1.);
	} else if(sin > medium) {
		fragColor = vec4(color, mix(1., 0., 1.-(sin - medium) / (high - medium)));
	} else {
		fragColor = vec4(color, 0.);
	}
	vec3 fade = mix(color, vec3(0., 0., 0.), vUv.y);
	fragColor = mix(fragColor, vec4(fade, 1.), 0.85);
	gl_FragColor = vec4(fragColor.rgb, fragColor.a * opacity * (1. - vUv.y));
}
`,
      uniforms: {
        time: {
          type: "pv2",
          value: 0
        },
        color: {
          type: "uvs",
          value: new THREE.Color(props.color)
        },
        opacity: {
          type: "pv2",
          value: props.opacity
        },
        num: {
          type: "pv2",
          value: props.num
        },
        speed: {
          type: "pv2",
          value: props.speed
        }
      }
    };
    let positionArray = null;
    let uvArray = null;
    function getRippleGeometry(points2 = [], height) {
      const positions = [];
      const uvs = [];
      for (let i = 0, j = positions.length, t = uvs.length; i < points2.length - 1; i++) {
        let vUvyMax = 1;
        let left = points2[i];
        let right = points2[i + 1];
        positions[j++] = left.x;
        positions[j++] = 0;
        positions[j++] = left.y;
        uvs[t++] = 0;
        uvs[t++] = 0;
        positions[j++] = right.x;
        positions[j++] = 0;
        positions[j++] = right.y;
        uvs[t++] = 1;
        uvs[t++] = 0;
        positions[j++] = left.x;
        positions[j++] = height;
        positions[j++] = left.y;
        uvs[t++] = 0;
        uvs[t++] = vUvyMax;
        positions[j++] = left.x;
        positions[j++] = height;
        positions[j++] = left.y;
        uvs[t++] = 0;
        uvs[t++] = vUvyMax;
        positions[j++] = right.x;
        positions[j++] = 0;
        positions[j++] = right.y;
        uvs[t++] = 1;
        uvs[t++] = 0;
        positions[j++] = right.x;
        positions[j++] = height;
        positions[j++] = right.y;
        uvs[t++] = 1;
        uvs[t++] = vUvyMax;
      }
      positionArray = new Float32Array(positions);
      uvArray = new Float32Array(uvs);
    }
    let { centerPoint, points } = getcenterPoint(props.positionSrc);
    getRippleGeometry(points, props.height);
    const { onRender } = _l();
    onRender(({ delta }) => {
      rippleShader.uniforms.time.value += delta;
    });
    watchEffect(() => {
      if (props.color) {
        rippleShader.uniforms.color.value = new THREE.Color(props.color);
      }
      if (props.opacity) {
        rippleShader.uniforms.opacity.value = props.opacity;
      }
      if (props.num) {
        rippleShader.uniforms.num.value = props.num;
      }
      if (props.speed) {
        rippleShader.uniforms.speed.value = props.speed;
      }
      if (tresMeshRef.value) {
        tresMeshRef.value.position.set(centerPoint.x, tresMeshRef.value.position.y, centerPoint.y);
      }
    });
    watch(
      () => props.positionSrc,
      (val) => {
        const { centerPoint: tcenterPoint, points: tpoints } = getcenterPoint(val);
        centerPoint = tcenterPoint;
        points = tpoints;
        getRippleGeometry(points, props.height);
        if (tresMeshRef.value) {
          tresMeshRef.value.position.set(centerPoint.x, tresMeshRef.value.position.y, centerPoint.y);
        }
      }
    );
    return (_ctx, _cache) => {
      return _openBlock(), _createElementBlock("TresMesh", {
        renderOrder: 2200,
        ref_key: "tresMeshRef",
        ref: tresMeshRef
      }, [
        _createElementVNode("TresBufferGeometry", {
          position: [_unref(positionArray), 3],
          uv: [_unref(uvArray), 2]
        }, null, 8, _hoisted_1),
        _createElementVNode("TresShaderMaterial", _normalizeProps(_guardReactiveProps(rippleShader)), null, 16)
      ], 512);
    };
  }
});

export { _sfc_main };
//# sourceMappingURL=rippleMesh.vue_vue_type_script_setup_true_lang.BMAAJsoC1767105581793.js.map
