import { importShared, Fs, _l } from './index.BxB45aCK1767105581793.js';
import { useTexture } from './customShaderMaterial.vue_vue_type_script_setup_true_lang.rDMIDGqx1767105581793.js';
import './index.vue_vue_type_script_setup_true_lang.D7-hpzmy1767105581793.js';
import { mergeGeometries } from './BufferGeometryUtils.NxcZsV4J1767105581793.js';

var xRay_default$1="uniform float c;\nuniform float p;\nuniform float uTime;\nvarying float intensity;\nvarying vec2 vUv;\nvoid main(){\n    vUv=uv;\n    vec3 vNormal=normalize(normalMatrix*normal);\n    intensity=pow(c-abs(dot(vNormal,vec3(0,0,1))),p);\n    gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);\n}";

var xRay_default="uniform vec3 glowColor;\nuniform sampler2D lightningTexture;\nvarying float intensity;\nvarying vec2 vUv;\nuniform float offsetY;\nuniform float uTime;\nuniform float uOpacity;\n\nvoid main(){\n  vec2 uv=vUv;\n  uv.y+=offsetY;\n  vec3 glow=glowColor*intensity;\n  vec3 color=vec3(step(.1,uv.y)-step(.2,uv.y))-vec3(texture2D(lightningTexture,uv));\n  float alpha=clamp(cos(uTime*3.),.5,1.);\n  gl_FragColor=vec4(glow+color,alpha*uOpacity);\n}";

const {defineComponent:_defineComponent$1} = await importShared('vue');

const {createElementVNode:_createElementVNode$1,normalizeProps:_normalizeProps$1,guardReactiveProps:_guardReactiveProps$1,openBlock:_openBlock$1,createElementBlock:_createElementBlock$1} = await importShared('vue');

const THREE$1 = await importShared('three');
const {ref: ref$1,watchEffect: watchEffect$1,onMounted} = await importShared('vue');

const _sfc_main$1 = /* @__PURE__ */ _defineComponent$1({
  __name: "xRayEffect",
  props: {
    model: {},
    color: { default: "#84ccff" },
    opacity: { default: 1 }
  },
  setup(__props) {
    const props = __props;
    const TresMeshRef = ref$1();
    const brainBufferGeometries = [];
    props.model.traverse((child) => {
      if (child instanceof THREE$1.Mesh) {
        child.geometry.verticesNeedUpdate = true;
        brainBufferGeometries.push(child.geometry);
      }
    });
    const xRayMaterial = {
      uniforms: {
        c: { type: "f", value: 1.11 },
        p: { type: "f", value: 1 },
        glowColor: { type: "c", value: new THREE$1.Color(props.color) },
        lightningTexture: { type: "t", value: null },
        offsetY: { type: "f", value: 0.1 },
        uTime: { type: "f", value: 0 },
        uOpacity: { type: "f", value: props.opacity }
      },
      vertexShader: xRay_default$1,
      fragmentShader: xRay_default,
      side: THREE$1.DoubleSide,
      blending: THREE$1.AdditiveBlending,
      depthWrite: false
    };
    onMounted(async () => {
      const pTexture = await useTexture("./plugins/medical/image/brainXRayLight.png");
      xRayMaterial.uniforms.lightningTexture.value = pTexture;
      console.log(pTexture);
    });
    xRayMaterial.uniforms.offsetY.value = Math.sin(5);
    const { camera } = Fs();
    const { onBeforeRender } = _l();
    onBeforeRender(({ delta }) => {
      if (camera.value?.position && TresMeshRef.value) {
        xRayMaterial.uniforms.uTime.value += delta;
      }
    });
    watchEffect$1(() => {
      if (TresMeshRef.value) {
        TresMeshRef.value.geometry.dispose();
        TresMeshRef.value.geometry = mergeGeometries(
          brainBufferGeometries
        );
      }
      if (props.color) {
        xRayMaterial.uniforms.glowColor.value = new THREE$1.Color(props.color);
      }
      if (props.opacity) {
        xRayMaterial.uniforms.uOpacity.value = props.opacity;
      }
    });
    return (_ctx, _cache) => {
      return _openBlock$1(), _createElementBlock$1("TresMesh", {
        ref_key: "TresMeshRef",
        ref: TresMeshRef,
        "render-order": 9
      }, [
        _cache[0] || (_cache[0] = _createElementVNode$1("TresBufferGeometry", null, null, -1)),
        _createElementVNode$1("TresShaderMaterial", _normalizeProps$1(_guardReactiveProps$1(xRayMaterial)), null, 16)
      ], 512);
    };
  }
});

var glow_default$1="uniform float p;\nuniform float uTime;\nuniform float uSlowTime;\nuniform float uBubblesUp;\nvarying float intensity;\nattribute vec2 aDelayDuration;\nattribute float size;\nattribute vec4 bubbles;\nvarying float alpha;\n\nfloat easeExpoInOut(float p){\n    return((p*=2.)<1.)?.5*pow(2.,10.*(p-1.)):.5*(2.-pow(2.,-10.*(p-1.)));\n}\n\nvoid main()\n{\n    intensity=.9;\n    vec4 mvPosition=modelViewMatrix*vec4(position,1.);\n    gl_PointSize=size*(300./-mvPosition.z);\n    float m=mod(size,sin(uSlowTime*.12+size));\n    \n    alpha=step(.5,abs(m));\n    if(m>.5&&m<.7){\n        gl_PointSize=.9*size;\n    }\n    if(m>.8){\n        gl_PointSize=.9*size;\n    }\n    \n    gl_Position=projectionMatrix*mvPosition;\n    \n    if(bubbles.w>0.&&bubbles.w<2.&&bubbles.x!=0.&&bubbles.y!=0.){\n        gl_PointSize=size+15.;\n        alpha=clamp(abs(sin(uTime-bubbles.y)),.3,1.);\n        \n        float tProgress=smoothstep(0.,aDelayDuration.x,uBubblesUp);\n        vec3 tranlated=mix(position,bubbles.xyz,tProgress);\n        vec4 bPosition=modelViewMatrix*vec4(tranlated,1.);\n        \n        gl_PointSize=uBubblesUp*gl_PointSize;\n        gl_Position+=projectionMatrix*bPosition;\n        alpha=5.;\n    }\n    \n    if(bubbles.w==2.){\n        alpha=clamp(abs(sin(uTime-bubbles.y)),.3,.6);\n        gl_PointSize=size+60.;\n        \n        gl_PointSize=uBubblesUp*gl_PointSize;\n        float normalized=clamp(uBubblesUp,0.,2.)*2.;\n        vec3 tranlated=mix(position,bubbles.xyz,normalized);\n        vec4 bPosition=modelViewMatrix*vec4(tranlated,1.);\n        gl_Position+=projectionMatrix*bPosition;\n    }\n    if(bubbles.w==3.){\n        alpha=clamp(abs(sin(uTime-bubbles.y)),.3,1.);\n        gl_PointSize=size+90.;\n        \n        gl_PointSize=uBubblesUp*gl_PointSize;\n        float normalized=clamp(uBubblesUp,0.,2.)*2.;\n        vec3 tranlated=mix(position,bubbles.xyz,normalized);\n        vec4 bPosition=modelViewMatrix*vec4(tranlated,1.);\n        gl_Position+=projectionMatrix*bPosition;\n    }\n}";

var glow_default="precision mediump float;\nuniform vec3 glowColor;\nvarying float intensity;\nvarying float alpha;\nuniform float uOpacity;\nvoid main() {\n  float distanceToCenter = distance(gl_PointCoord, vec2(.5));\n  float pct = 1. - smoothstep(0., .5, distanceToCenter);\n  vec3 color = vec3(1.) * gl_FragColor.rgb;\n  vec3 glow = glowColor * intensity;\n  gl_FragColor = vec4(glow, clamp(alpha, 0., 1.));\n  gl_FragColor = vec4(glow, pct * gl_FragColor.a);\n  gl_FragColor = vec4(gl_FragColor.rgb, gl_FragColor.a * uOpacity);\n  \n}";

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,unref:_unref,normalizeProps:_normalizeProps,guardReactiveProps:_guardReactiveProps,openBlock:_openBlock,createElementBlock:_createElementBlock} = await importShared('vue');

const THREE = await importShared('three');

const {ref,watchEffect} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "bubblesEffect",
  props: {
    model: {},
    color: { default: "#FFF" },
    opacity: { default: 1 }
  },
  setup(__props) {
    const props = __props;
    const memorySelected = ["afective", "semantic", "episodic", "process", "amigdala", "brainstem", "bridge", "cerebellum", "analitic"];
    const memories = {};
    props.model.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        memorySelected.map((m) => {
          if (child.name.includes(m)) {
            if (memories[m]) {
              const tmpGeometry = [memories[m], child.geometry];
              memories[m] = mergeGeometries(tmpGeometry);
              return memories;
            }
            return memories[m] = child.geometry;
          }
          return [];
        });
      }
    });
    const BufferGeometryRef = ref();
    const initBufferGeometry = () => {
      const particles = 2e4;
      const sizes = [];
      const positions = [];
      const colors = [];
      const delay = [];
      const duration = 2.5;
      const maxPointDelay = 1.5;
      const bubbles = [];
      for (let i = 0; i < particles - memorySelected.length * 3; i += 1) {
        const r = THREE.MathUtils.randInt(0, memorySelected.length - 1);
        const mSelector = memorySelected[r];
        const x = memories[mSelector].attributes.position.array[i * 3 + 0] || 0;
        const y = memories[mSelector].attributes.position.array[i * 3 + 1] || 0;
        const z = memories[mSelector].attributes.position.array[i * 3 + 2] || 0;
        positions.push(x, y, z);
        sizes[i] = THREE.MathUtils.randFloat(10, 20);
        if (i % 100 === 0) {
          const altitude = THREE.MathUtils.randInt(100, 250) + y;
          bubbles.push(x, altitude, z, 1);
        } else {
          bubbles.push(x, y, z, 0);
        }
        delay[i * 2 + 0] = THREE.MathUtils.randFloat(0.5, maxPointDelay);
        delay[i * 2 + 1] = duration;
      }
      BufferGeometryRef.value.setAttribute("aDelayDuration", new THREE.Float32BufferAttribute(delay, 2));
      BufferGeometryRef.value.setAttribute("bubbles", new THREE.Float32BufferAttribute(bubbles, 4));
      BufferGeometryRef.value.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
      BufferGeometryRef.value.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));
      BufferGeometryRef.value.setAttribute("size", new THREE.Float32BufferAttribute(sizes, 1));
      BufferGeometryRef.value.computeBoundingSphere();
    };
    const customMaterial = new THREE.ShaderMaterial({
      uniforms: {
        glowColor: { type: "c", value: new THREE.Color(props.color) },
        uTime: { type: "f", value: 0 },
        uSlowTime: { type: "f", value: 0 },
        uBubblesUp: { type: "f", value: 1 },
        uOpacity: { type: "f", value: props.opacity }
      },
      vertexShader: glow_default$1,
      fragmentShader: glow_default,
      blending: THREE.AdditiveBlending,
      side: THREE.DoubleSide,
      depthTest: false,
      vertexColors: false,
      transparent: true
    });
    watchEffect(() => {
      if (BufferGeometryRef.value) {
        initBufferGeometry();
      }
    });
    const TresMeshRef = ref();
    const { onBeforeRender } = _l();
    onBeforeRender(() => {
      if (TresMeshRef.value) {
        TresMeshRef.value.material.uniforms.uTime.value += 1 / 20;
        TresMeshRef.value.material.uniforms.uSlowTime.value += 1 / 400;
      }
      if (props.color) {
        customMaterial.uniforms.glowColor.value = new THREE.Color(props.color);
      }
      if (props.opacity) {
        customMaterial.uniforms.uOpacity.value = props.opacity;
      }
    });
    return (_ctx, _cache) => {
      return _openBlock(), _createElementBlock("TresPoints", {
        ref_key: "TresMeshRef",
        ref: TresMeshRef
      }, [
        _createElementVNode("TresBufferGeometry", {
          ref_key: "BufferGeometryRef",
          ref: BufferGeometryRef
        }, null, 512),
        _createElementVNode("TresShaderMaterial", _normalizeProps(_guardReactiveProps(_unref(customMaterial))), null, 16)
      ], 512);
    };
  }
});

export { _sfc_main$1 as _sfc_main, _sfc_main as _sfc_main$1 };
//# sourceMappingURL=bubblesEffect.vue_vue_type_script_setup_true_lang.Ddg5fmvx1767105581793.js.map
