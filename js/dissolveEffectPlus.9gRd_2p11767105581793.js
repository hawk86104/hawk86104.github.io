import { importShared, Fs, _l, Kk } from './index.BxB45aCK1767105581793.js';
import './index.EB9aFE0Q1767105581793.js';
import './skyBoxAmesh.vue_vue_type_script_setup_true_lang.Cd3eKmZW1767105581793.js';
import './skyBoxBmesh.vue_vue_type_script_setup_true_lang.DvKDLewX1767105581793.js';
import { _sfc_main as _sfc_main$5 } from './skyBoxDmesh.vue_vue_type_script_setup_true_lang.DRUMhbde1767105581793.js';
import { Pane } from './tweakpane.Cvt5w0bb1767105581793.js';
import { snoise_default, _sfc_main as _sfc_main$4 } from './material.vue_vue_type_script_setup_true_lang.KsUSDVCK1767105581793.js';
import { useTexture } from './customShaderMaterial.vue_vue_type_script_setup_true_lang.rDMIDGqx1767105581793.js';
import './index.vue_vue_type_script_setup_true_lang.D7-hpzmy1767105581793.js';
import { RenderPass, EffectComposer } from './RenderPass.XMM8w9Yd1767105581793.js';
import { UnrealBloomPass } from './UnrealBloomPass.DHFMJH-X1767105581793.js';

const {withAsyncContext:_withAsyncContext,defineComponent:_defineComponent$3} = await importShared('vue');

const {unref:_unref$2,createElementVNode:_createElementVNode$2,openBlock:_openBlock$2,createElementBlock:_createElementBlock$1} = await importShared('vue');

const _hoisted_1$1 = ["geometry"];
const _hoisted_2 = ["blending"];
const {watch} = await importShared('vue');

const THREE$3 = await importShared('three');
const fragmentShader = `
    uniform vec3 uColor;
    uniform float uEdge;
    uniform float uProgress;
    uniform sampler2D uTexture;

    varying float vNoise;
    varying float vAngle;

    void main(){
        if( vNoise < uProgress ) discard;
        if( vNoise > uProgress + uEdge) discard;

        vec2 coord = gl_PointCoord;
        coord = coord - 0.5; // get the coordinate from 0-1 ot -0.5 to 0.5
        coord = coord * mat2(cos(vAngle),sin(vAngle) , -sin(vAngle), cos(vAngle)); // apply the rotation transformaion
        coord = coord +  0.5; // reset the coordinate to 0-1  

        vec4 texture = texture2D(uTexture,coord);

        gl_FragColor = vec4(vec3(uColor.xyz * texture.xyz),1.0);
    }
`;
const _sfc_main$3 = /* @__PURE__ */ _defineComponent$3({
  __name: "particlesPoints",
  props: {
    geo: {
      default: new THREE$3.BufferGeometry()
    },
    uEdge: { default: 6 },
    uFreq: {
      default: 0.41
    },
    uAmp: { default: 20 },
    uProgress: { default: -2 },
    uColor: {
      default: "#4d9bff"
    },
    uPointSize: {
      default: 200
    },
    particleData: {
      default: {
        particleSpeedFactor: 0.02,
        // for tweaking velocity
        velocityFactor: { x: 2.5, y: 2 },
        waveAmplitude: 0
      }
    }
  },
  async setup(__props) {
    let __temp, __restore;
    const props = __props;
    const meshGeo = props.geo.clone();
    const pTexture = ([__temp, __restore] = _withAsyncContext(() => useTexture("./plugins/industry4/image/particle.png")), __temp = await __temp, __restore(), __temp);
    let particleCount = meshGeo.attributes.position.count;
    let particleMaxOffsetArr;
    let particleInitPosArr;
    let particleCurrPosArr;
    let particleVelocityArr;
    let particleDistArr;
    let particleRotationArr;
    function initParticleAttributes(meshGeo2) {
      particleCount = meshGeo2.attributes.position.count;
      particleMaxOffsetArr = new Float32Array(particleCount);
      particleInitPosArr = new Float32Array(meshGeo2.getAttribute("position").array);
      particleCurrPosArr = new Float32Array(meshGeo2.getAttribute("position").array);
      particleVelocityArr = new Float32Array(particleCount * 3);
      particleDistArr = new Float32Array(particleCount);
      particleRotationArr = new Float32Array(particleCount);
      for (let i = 0; i < particleCount; i++) {
        let x = i * 3 + 0;
        let y = i * 3 + 1;
        let z = i * 3 + 2;
        particleMaxOffsetArr[i] = Math.random() * 5.5 + 1.5;
        particleVelocityArr[x] = Math.random() * 0.5 + 0.5;
        particleVelocityArr[y] = Math.random() * 0.5 + 0.5;
        particleVelocityArr[z] = Math.random() * 0.1;
        particleDistArr[i] = 1e-3;
        particleRotationArr[i] = Math.random() * Math.PI * 2;
      }
      meshGeo2.setAttribute("aOffset", new THREE$3.BufferAttribute(particleMaxOffsetArr, 1));
      meshGeo2.setAttribute("aCurrentPos", new THREE$3.BufferAttribute(particleCurrPosArr, 3));
      meshGeo2.setAttribute("aVelocity", new THREE$3.BufferAttribute(particleVelocityArr, 3));
      meshGeo2.setAttribute("aDist", new THREE$3.BufferAttribute(particleDistArr, 1));
      meshGeo2.setAttribute("aAngle", new THREE$3.BufferAttribute(particleRotationArr, 1));
    }
    initParticleAttributes(meshGeo);
    const { renderer } = Fs();
    const particlesUniformData = {
      uTexture: {
        value: pTexture
      },
      uPixelDensity: {
        value: renderer.getPixelRatio()
      },
      uProgress: {
        value: props.uProgress
      },
      uEdge: {
        value: props.uEdge
      },
      uAmp: {
        value: props.uAmp
      },
      uFreq: {
        value: props.uFreq
      },
      uBaseSize: {
        value: props.uPointSize
      },
      uColor: {
        value: new THREE$3.Color(props.uColor)
      }
    };
    const vertexShader = `
    ${snoise_default}
    uniform float uPixelDensity;
    uniform float uBaseSize;
    uniform float uFreq;
    uniform float uAmp;
    uniform float uEdge;
    uniform float uProgress;

    varying float vNoise;
    varying float vAngle;

    attribute vec3 aCurrentPos;
    attribute float aDist;
    attribute float aAngle;

    void main() {
        vec3 pos = position;

        float noise = snoise(pos * uFreq) * uAmp;
        vNoise =noise;

        vAngle = aAngle;

        if( vNoise > uProgress-2.0 && vNoise < uProgress + uEdge+2.0){
            pos = aCurrentPos;
        }

        vec4 modelPosition = modelMatrix * vec4(pos, 1.0);
        vec4 viewPosition = viewMatrix * modelPosition;
        vec4 projectedPosition = projectionMatrix * viewPosition;
        gl_Position = projectedPosition;

        float size = uBaseSize * uPixelDensity;
        size = size  / (aDist + 1.0);
        gl_PointSize = size / -viewPosition.z;
}
`;
    function calculateWaveOffset(idx) {
      const posx = particleCurrPosArr[idx * 3 + 0];
      const posy = particleCurrPosArr[idx * 3 + 1];
      let xwave1 = Math.sin(posy * 2) * (0.8 + props.particleData.waveAmplitude);
      let ywave1 = Math.sin(posx * 2) * (0.6 + props.particleData.waveAmplitude);
      let xwave2 = Math.sin(posy * 5) * (0.2 + props.particleData.waveAmplitude);
      let ywave2 = Math.sin(posx * 1) * (0.9 + props.particleData.waveAmplitude);
      let xwave3 = Math.sin(posy * 8) * (0.8 + props.particleData.waveAmplitude);
      let ywave3 = Math.sin(posx * 5) * (0.6 + props.particleData.waveAmplitude);
      let xwave4 = Math.sin(posy * 3) * (0.8 + props.particleData.waveAmplitude);
      let ywave4 = Math.sin(posx * 7) * (0.6 + props.particleData.waveAmplitude);
      let xwave = xwave1 + xwave2 + xwave3 + xwave4;
      let ywave = ywave1 + ywave2 + ywave3 + ywave4;
      return { xwave, ywave };
    }
    function updateVelocity(idx) {
      let vx = particleVelocityArr[idx * 3 + 0];
      let vy = particleVelocityArr[idx * 3 + 1];
      let vz = particleVelocityArr[idx * 3 + 2];
      vx *= props.particleData.velocityFactor.x;
      vy *= props.particleData.velocityFactor.y;
      let { xwave, ywave } = calculateWaveOffset(idx);
      vx += xwave;
      vy += ywave;
      vx *= Math.abs(props.particleData.particleSpeedFactor);
      vy *= Math.abs(props.particleData.particleSpeedFactor);
      vz *= Math.abs(props.particleData.particleSpeedFactor);
      return { vx, vy, vz };
    }
    function updateParticleAttriutes() {
      for (let i = 0; i < particleCount; i++) {
        let x = i * 3 + 0;
        let y = i * 3 + 1;
        let z = i * 3 + 2;
        let { vx, vy, vz } = updateVelocity(i);
        particleCurrPosArr[x] += vx;
        particleCurrPosArr[y] += vy;
        particleCurrPosArr[z] += vz;
        const vec1 = new THREE$3.Vector3(particleInitPosArr[x], particleInitPosArr[y], particleInitPosArr[z]);
        const vec2 = new THREE$3.Vector3(particleCurrPosArr[x], particleCurrPosArr[y], particleCurrPosArr[z]);
        const dist = vec1.distanceTo(vec2);
        particleDistArr[i] = dist;
        particleRotationArr[i] += 0.01;
        if (dist > particleMaxOffsetArr[i]) {
          particleCurrPosArr[x] = particleInitPosArr[x];
          particleCurrPosArr[y] = particleInitPosArr[y];
          particleCurrPosArr[z] = particleInitPosArr[z];
        }
      }
      meshGeo.setAttribute("aOffset", new THREE$3.BufferAttribute(particleMaxOffsetArr, 1));
      meshGeo.setAttribute("aCurrentPos", new THREE$3.BufferAttribute(particleCurrPosArr, 3));
      meshGeo.setAttribute("aVelocity", new THREE$3.BufferAttribute(particleVelocityArr, 3));
      meshGeo.setAttribute("aDist", new THREE$3.BufferAttribute(particleDistArr, 1));
      meshGeo.setAttribute("aAngle", new THREE$3.BufferAttribute(particleRotationArr, 1));
    }
    const { onBeforeRender } = _l();
    onBeforeRender(() => {
      updateParticleAttriutes();
    });
    watch(
      () => [props.uColor, props.uEdge, props.uFreq, props.uAmp, props.uProgress, props.uPointSize],
      ([uColor, uEdge, uFreq, uAmp, uProgress, uPointSize]) => {
        particlesUniformData.uColor.value.setStyle(uColor);
        particlesUniformData.uEdge.value = uEdge;
        particlesUniformData.uFreq.value = uFreq;
        particlesUniformData.uAmp.value = uAmp;
        particlesUniformData.uProgress.value = uProgress;
        particlesUniformData.uBaseSize.value = uPointSize;
      }
    );
    return (_ctx, _cache) => {
      return _openBlock$2(), _createElementBlock$1("TresPoints", { geometry: _unref$2(meshGeo) }, [
        _createElementVNode$2("TresShaderMaterial", {
          transparent: "",
          blending: THREE$3.AdditiveBlending,
          uniforms: particlesUniformData,
          vertexShader,
          fragmentShader
        }, null, 8, _hoisted_2)
      ], 8, _hoisted_1$1);
    };
  }
});

const {defineComponent:_defineComponent$2} = await importShared('vue');

const {unref:_unref$1,mergeProps:_mergeProps$1,createVNode:_createVNode$1,createElementVNode:_createElementVNode$1,Suspense:_Suspense$1,withCtx:_withCtx$1,openBlock:_openBlock$1,createBlock:_createBlock$1,createElementBlock:_createElementBlock} = await importShared('vue');

const _hoisted_1 = ["geometry"];
const THREE$2 = await importShared('three');
const _sfc_main$2 = /* @__PURE__ */ _defineComponent$2({
  __name: "torusKnot",
  setup(__props) {
    const knotGeometry = new THREE$2.TorusKnotGeometry(3, 1, 64, 8, 2, 3);
    return (_ctx, _cache) => {
      return _openBlock$1(), _createElementBlock("TresGroup", null, [
        _createElementVNode$1("TresMesh", { geometry: _unref$1(knotGeometry) }, [
          _createVNode$1(_sfc_main$4, _mergeProps$1({
            color: "#636363",
            metalness: 2,
            roughness: 0
          }, _ctx.$attrs), null, 16)
        ], 8, _hoisted_1),
        (_openBlock$1(), _createBlock$1(_Suspense$1, null, {
          default: _withCtx$1(() => [
            _createVNode$1(_sfc_main$3, _mergeProps$1({ geo: _unref$1(knotGeometry) }, _ctx.$attrs, {
              uColor: _ctx.$attrs.uEdgeColor
            }), null, 16, ["geo", "uColor"])
          ]),
          _: 1
        }))
      ]);
    };
  }
});

const {defineComponent:_defineComponent$1} = await importShared('vue');

const {watchEffect} = await importShared('vue');

const THREE$1 = await importShared('three');
const _sfc_main$1 = /* @__PURE__ */ _defineComponent$1({
  __name: "bloomPass",
  setup(__props) {
    const { camera, renderer, scene, sizes } = Fs();
    const params = {
      threshold: 0,
      strength: 0.216,
      // 强度
      radius: 0.2
      // 半径
    };
    let effectComposer = null;
    const bloomPassEffect = (scene2, camera2, renderer2, width, height) => {
      const renderScene = new RenderPass(scene2, camera2);
      const bloomPass = new UnrealBloomPass(new THREE$1.Vector2(width, height), params.strength, params.radius, params.threshold);
      effectComposer = new EffectComposer(renderer2);
      effectComposer.addPass(renderScene);
      effectComposer.addPass(bloomPass);
    };
    watchEffect(() => {
      if (sizes.width.value) {
        bloomPassEffect(scene.value, camera.value, renderer, sizes.width.value, sizes.height.value);
      }
    });
    const { onBeforeRender } = _l();
    onBeforeRender(() => {
      if (effectComposer) {
        effectComposer.render();
      }
    });
    return (_ctx, _cache) => {
      return null;
    };
  }
});

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,unref:_unref,createVNode:_createVNode,mergeProps:_mergeProps,Suspense:_Suspense,withCtx:_withCtx,openBlock:_openBlock,createBlock:_createBlock,resolveComponent:_resolveComponent,normalizeProps:_normalizeProps,guardReactiveProps:_guardReactiveProps} = await importShared('vue');

const {reactive} = await importShared('vue');

const THREE = await importShared('three');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "dissolveEffectPlus",
  setup(__props) {
    const tcConfig = {
      clearColor: "#201919",
      windowSize: true,
      toneMapping: THREE.ACESFilmicToneMapping,
      toneMappingExposure: 0.8,
      renderMode: "manual"
    };
    const torusKnotConfigState = reactive({
      uEdgeColor: "#ff784d",
      uEdge: 6,
      uFreq: 0.41,
      uAmp: 20,
      uProgress: -4.9,
      uPointSize: 576,
      particleData: {
        particleSpeedFactor: 0.02,
        velocityFactor: { x: 2.5, y: 2 },
        waveAmplitude: 0
      }
    });
    const meshConfig = reactive({
      torusKnotColor: "#7a8c87"
    });
    const paneControl = new Pane({
      title: "参数",
      expanded: true
    });
    paneControl.addBinding(meshConfig, "torusKnotColor", { label: "torusKnotColor" });
    paneControl.addBinding(torusKnotConfigState, "uEdgeColor", { label: "边缘颜色" });
    paneControl.addBinding(torusKnotConfigState, "uEdge", {
      label: "边缘宽度",
      min: 0,
      max: 9,
      step: 0.01
    });
    paneControl.addBinding(torusKnotConfigState, "uFreq", {
      label: "密度",
      min: 2e-3,
      max: 2,
      step: 2e-3
    });
    paneControl.addBinding(torusKnotConfigState, "uAmp", {
      label: "幅度",
      min: 3,
      max: 22,
      step: 0.01
    });
    paneControl.addBinding(torusKnotConfigState, "uProgress", {
      label: "进度",
      min: -25,
      max: 20,
      step: 0.1
    });
    paneControl.addBinding(torusKnotConfigState, "uPointSize", {
      label: "粒子大小",
      min: 10,
      max: 800,
      step: 5
    });
    paneControl.addBinding(torusKnotConfigState.particleData, "particleSpeedFactor", {
      label: "粒子速度",
      min: 1e-4,
      max: 0.1,
      step: 1e-4
    });
    paneControl.addBinding(torusKnotConfigState.particleData, "velocityFactor", {
      picker: "inline",
      label: "粒子飘逸方向",
      expanded: true,
      x: { min: -10, max: 10, step: 0.01 },
      y: { min: -10, max: 10, step: 0.01 }
    });
    paneControl.addBinding(torusKnotConfigState.particleData, "waveAmplitude", {
      label: "粒子扰动幅度",
      min: 0,
      max: 5,
      step: 0.01
    });
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createBlock(_component_TresCanvas, _normalizeProps(_guardReactiveProps(tcConfig)), {
        default: _withCtx(() => [
          _cache[0] || (_cache[0] = _createElementVNode("TresPerspectiveCamera", {
            position: [15, 15, 15],
            fov: 45,
            near: 0.1,
            far: 1e4,
            "look-at": [0, 0, 0]
          }, null, -1)),
          _createVNode(_unref(Kk), { enableDamping: "" }),
          _createVNode(_sfc_main$2, _mergeProps(torusKnotConfigState, {
            color: meshConfig.torusKnotColor
          }), null, 16, ["color"]),
          (_openBlock(), _createBlock(_Suspense, null, {
            default: _withCtx(() => [
              _createVNode(_unref(_sfc_main$5), {
                texture: ("https://opensource.cdn.icegl.cn") + "/images/skyBox/workshop_blur.jpg"
              }, null, 8, ["texture"])
            ]),
            _: 1
          })),
          _createVNode(_sfc_main$1)
        ]),
        _: 1
      }, 16);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=dissolveEffectPlus.9gRd_2p11767105581793.js.map
