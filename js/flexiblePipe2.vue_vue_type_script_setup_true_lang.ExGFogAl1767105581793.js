import { importShared, _l, oz } from './index.BxB45aCK1767105581793.js';
import { buildRoundedPath } from './buildFlexiblePipe.CSvv9UZ71767105581793.js';

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,unref:_unref,createVNode:_createVNode,openBlock:_openBlock,createElementBlock:_createElementBlock} = await importShared('vue');

const _hoisted_1 = { renderOrder: 9999 };
const _hoisted_2 = ["args"];
const {watch,ref} = await importShared('vue');

const THREE = await importShared('three');
const vertexShader = `
	varying vec2 vUv;
	void main() {
		vUv = vec3( uv, 1 ).xy; 
	}
`;
const fragmentShader = `
  uniform float uTime;
  varying vec2 vUv;
  uniform vec3 uGapColor;
	uniform float uStripeScale;

	void main() {
		vec2 vUV;  
		vUV=vUv;
		vUV.x+=uTime/uStripeScale;

		float ssColor = smoothstep(.31,.49,fract(vUV.x*uStripeScale));
		vec3 finalColor = mix(uGapColor, csm_DiffuseColor.xyz, ssColor);
    csm_DiffuseColor=vec4(finalColor,1.0);
	}
`;
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "flexiblePipe2",
  props: {
    color: { default: "0xff0000" },
    uGapColor: { default: "#ffffff" },
    radius: { default: 0.1 },
    bodyLength: { default: 2 },
    headLength: { default: 1 },
    headAngle: { default: 0 },
    radialSegments: { default: 16 },
    tailAngle: { default: 0 },
    tailLength: { default: 0.5 },
    filletRadius: { default: 0.3 },
    speed: { default: 0.01 },
    uStripeScale: { default: 10 },
    metalness: { default: 0.3 },
    roughness: { default: 0.5 },
    reflectivity: { default: 0.5 },
    ior: { default: 1.5 }
  },
  setup(__props) {
    const props = __props;
    const path = ref(new THREE.CurvePath());
    watch(
      () => [props.bodyLength, props.headLength, props.headAngle, props.tailAngle, props.tailLength, props.filletRadius, props.radialSegments],
      ([bodyLength, headLength, headAngle, tailAngle, tailLength, filletRadius, radialSegments]) => {
        const halfMid = bodyLength / 2;
        const midStart = new THREE.Vector3(0, 0, -halfMid);
        const midEnd = new THREE.Vector3(0, 0, halfMid);
        const headRad = THREE.MathUtils.degToRad(headAngle);
        const headDir = new THREE.Vector3(Math.cos(headRad), Math.sin(headRad), 0);
        const headPoint = midEnd.clone().add(headDir.multiplyScalar(headLength));
        const tailRad = THREE.MathUtils.degToRad(tailAngle);
        const tailDir = new THREE.Vector3(Math.cos(tailRad), Math.sin(tailRad), 0);
        const tailPoint = midStart.clone().add(tailDir.multiplyScalar(tailLength));
        const pts = [tailPoint, midStart, midEnd, headPoint];
        path.value = buildRoundedPath(pts, filletRadius, radialSegments);
      },
      { immediate: true }
    );
    const uniformData = {
      uTime: {
        value: 0
      },
      uStripeScale: {
        value: 10
      },
      uGapColor: {
        value: new THREE.Color(props.uGapColor)
      }
    };
    watch(
      () => [props.uGapColor, props.uStripeScale],
      ([uGapColor, uStripeScale]) => {
        uniformData.uStripeScale.value = uStripeScale;
        uniformData.uGapColor.value.setStyle(uGapColor);
      },
      { immediate: true }
    );
    const { onBeforeRender } = _l();
    onBeforeRender(() => {
      uniformData.uTime.value += props.speed;
    });
    return (_ctx, _cache) => {
      return _openBlock(), _createElementBlock("TresMesh", _hoisted_1, [
        _createElementVNode("TresTubeGeometry", {
          args: [path.value, 64, _ctx.radius, _ctx.radialSegments, false]
        }, null, 8, _hoisted_2),
        _createVNode(_unref(oz), {
          baseMaterial: THREE.MeshPhysicalMaterial,
          color: _ctx.color,
          metalness: _ctx.metalness,
          roughness: _ctx.roughness,
          reflectivity: _ctx.reflectivity,
          ior: _ctx.ior,
          side: THREE.DoubleSide,
          transparent: "",
          vertexShader,
          fragmentShader,
          uniforms: uniformData
        }, null, 8, ["baseMaterial", "color", "metalness", "roughness", "reflectivity", "ior", "side"])
      ]);
    };
  }
});

export { _sfc_main };
//# sourceMappingURL=flexiblePipe2.vue_vue_type_script_setup_true_lang.ExGFogAl1767105581793.js.map
