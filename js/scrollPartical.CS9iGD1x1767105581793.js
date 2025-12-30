import { importShared, NA, _l, Fs, _export_sfc } from './index.BxB45aCK1767105581793.js';
import { loading$1 as loading, _sfc_main$7 as _sfc_main$4 } from './generalFont.vue_vue_type_script_setup_true_lang.DqoG1H6g1767105581793.js';
import './default.vue_vue_type_script_setup_true_lang.DQGKkIwV1767105581793.js';
import './three-mesh-ui.module.CjQAT-M_1767105581793.js';
import './domPanel.vue_vue_type_style_index_0_lang.dV59iE041767105581793.js';
import { Pane } from './tweakpane.Cvt5w0bb1767105581793.js';
import { mergeGeometries } from './BufferGeometryUtils.NxcZsV4J1767105581793.js';
import { OBJLoader, loadOBJ } from './util.B1yBATjg1767105581793.js';
import { RenderPass, EffectComposer } from './RenderPass.XMM8w9Yd1767105581793.js';
import { UnrealBloomPass } from './UnrealBloomPass.DHFMJH-X1767105581793.js';

var simVertex_default="varying vec2 vUv;\nvoid main() {\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n  vUv = uv;\n}";

var simFragment_default="uniform sampler2D uTextureA;\nuniform sampler2D uTextureB;\nprecision mediump float; \nuniform float uTime;\nuniform float uScroll;\nvarying vec2 vUv;\n\nmat3 rotationMatrix3(vec3 axis, float angle) {\n  axis = normalize(axis);\n  float s = sin(angle);\n  float c = cos(angle);\n  float oc = 1. - c;\n\n  return mat3(oc * axis.x * axis.x + c, oc * axis.x * axis.y - axis.z * s,\n              oc * axis.z * axis.x + axis.y * s,\n              oc * axis.x * axis.y + axis.z * s, oc * axis.y * axis.y + c,\n              oc * axis.y * axis.z - axis.x * s,\n              oc * axis.z * axis.x - axis.y * s,\n              oc * axis.y * axis.z + axis.x * s, oc * axis.z * axis.z + c);\n}\n\nvoid main() {\n  vec3 textureA = rotationMatrix3(vec3(10., 6., 3.), sin(uTime) * .1) *\n                  texture2D(uTextureA, vUv).xyz;\n  \n\n  vec3 textureB = rotationMatrix3(vec3(10., 6., 3.), sin(uTime) * .1) *\n                  texture2D(uTextureB, vUv).xyz;\n  \n\n  float t = uScroll;\n  vec3 pos = mix(textureA, textureB, t);\n\n  gl_FragColor = vec4(pos, 1.);\n}";

const THREE$4 = await importShared('three');
const makeTexture = (geometry) => {
  let vertAmount = geometry.attributes.position.count;
  let texWidth = Math.ceil(Math.sqrt(vertAmount));
  let texHeight = Math.ceil(vertAmount / texWidth);
  let data = new Float32Array(texWidth * texHeight * 4);
  function shuffleArrayByThree(array) {
    const groupLength = 3;
    let numGroups = Math.floor(array.length / groupLength);
    for (let i = numGroups - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      for (let k = 0; k < groupLength; k++) {
        let temp = array[i * groupLength + k];
        array[i * groupLength + k] = array[j * groupLength + k];
        array[j * groupLength + k] = temp;
      }
    }
    return array;
  }
  shuffleArrayByThree(geometry.attributes.position.array);
  for (let i = 0; i < vertAmount; i++) {
    const x = geometry.attributes.position.array[i * 3 + 0];
    const y = geometry.attributes.position.array[i * 3 + 1];
    const z = geometry.attributes.position.array[i * 3 + 2];
    const w = 0;
    data[i * 4 + 0] = x;
    data[i * 4 + 1] = y;
    data[i * 4 + 2] = z;
    data[i * 4 + 3] = w;
  }
  let dataTexture = new THREE$4.DataTexture(data, texWidth, texHeight, THREE$4.RGBAFormat, THREE$4.FloatType);
  dataTexture.needsUpdate = true;
  return dataTexture;
};
const makeSimMaterial = () => {
  const simMaterial = new THREE$4.ShaderMaterial({
    uniforms: {
      uTextureA: { value: null },
      uTextureB: { value: null },
      uTime: { value: 0 },
      uScroll: { value: 0 }
    },
    vertexShader: simVertex_default,
    fragmentShader: simFragment_default
  });
  return simMaterial;
};
const makeSimMesh = () => {
  const simMaterial = makeSimMaterial();
  const geometry = new THREE$4.BufferGeometry();
  geometry.setAttribute("position", new THREE$4.BufferAttribute(
    new Float32Array([
      -1,
      -1,
      0,
      1,
      -1,
      0,
      1,
      1,
      0,
      -1,
      -1,
      0,
      1,
      1,
      0,
      -1,
      1,
      0
    ]),
    3
  ));
  geometry.setAttribute("uv", new THREE$4.BufferAttribute(
    new Float32Array([
      0,
      1,
      1,
      1,
      1,
      0,
      0,
      1,
      1,
      0,
      0,
      0
    ]),
    2
  ));
  return new THREE$4.Mesh(geometry, simMaterial);
};

var particles_default$1="uniform sampler2D\n    uPositions; \nuniform float uSize;\nuniform float uPixelRatio;\nvarying vec3 vPos;\nvarying vec2 vUv;\nvoid main() {\n  vec3 pos = texture2D(uPositions, position.xy).xyz;\n\n  float customSize = uSize;\n\n  vec4 modelPosition = modelMatrix * vec4(pos, 1.0);\n  vec4 viewPosition = viewMatrix * modelPosition;\n  vec4 projectionPosition = projectionMatrix * viewPosition;\n\n  gl_Position = projectionPosition;\n  gl_PointSize = customSize * uPixelRatio;\n  gl_PointSize *= (1.0 / -viewPosition.z);\n\n  vPos = pos;\n}";

var particles_default="precision mediump float;\nvarying vec3 vPos;\nuniform vec3 uColor; \nvoid main() {\n\n  float distanceToCenter = distance(gl_PointCoord, vec2(0.5));\n  float strength = 0.05 / distanceToCenter - 0.1;\n\n  \n\n  gl_FragColor = vec4(uColor, strength * length(vPos));\n}";

const {defineComponent:_defineComponent$3} = await importShared('vue');

const {unref:_unref$1,openBlock:_openBlock$2,createElementBlock:_createElementBlock$1} = await importShared('vue');

const _hoisted_1 = ["object"];
const THREE$3 = await importShared('three');
const _sfc_main$3 = /* @__PURE__ */ _defineComponent$3({
  __name: "particalMesh",
  props: {
    progress: { default: 0 },
    width: { default: 256 },
    height: { default: 256 }
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const makeRenderMaterial = () => {
      return new THREE$3.ShaderMaterial({
        uniforms: {
          uPositions: { value: null },
          uSize: { value: 12 },
          uPixelRatio: { value: Math.min(window.devicePixelRatio, 2) },
          uColor: {
            value: new THREE$3.Color("#ffaa00")
          }
        },
        vertexShader: particles_default$1,
        fragmentShader: particles_default,
        transparent: true,
        depthWrite: false,
        blending: THREE$3.AdditiveBlending
      });
    };
    const createParticles = (width, height) => {
      const length = width * height;
      let vertices = new Float32Array(length * 3);
      for (let i = 0; i < length; i++) {
        let i3 = i * 3;
        vertices[i3 + 0] = i % width / width;
        vertices[i3 + 1] = i / width / height;
      }
      const geometry = new THREE$3.BufferGeometry();
      geometry.setAttribute("position", new THREE$3.BufferAttribute(vertices, 3));
      return new THREE$3.Points(geometry, makeRenderMaterial());
    };
    let particles = createParticles(props.width, props.height);
    __expose({
      particles
    });
    return (_ctx, _cache) => {
      return _openBlock$2(), _createElementBlock$1("primitive", { object: _unref$1(particles) }, null, 8, _hoisted_1);
    };
  }
});

const {withAsyncContext:_withAsyncContext,defineComponent:_defineComponent$2} = await importShared('vue');

const {openBlock:_openBlock$1,createBlock:_createBlock$1} = await importShared('vue');

const THREE$2 = await importShared('three');
const {ref: ref$1,watch} = await importShared('vue');

const _sfc_main$2 = /* @__PURE__ */ _defineComponent$2({
  __name: "particalFBO",
  props: {
    progress: { default: 0 },
    width: { default: 256 },
    height: { default: 256 },
    color: { default: "#ffaa00" }
  },
  async setup(__props) {
    let __temp, __restore;
    const props = __props;
    const pMesh = ref$1(null);
    const fboTarget = new THREE$2.WebGLRenderTarget(props.width, props.height, {
      minFilter: THREE$2.NearestFilter,
      magFilter: THREE$2.NearestFilter,
      generateMipmaps: false,
      colorSpace: THREE$2.SRGBColorSpace,
      depthBuffer: false,
      stencilBuffer: false,
      format: THREE$2.RGBAFormat,
      type: THREE$2.FloatType
    });
    const mergeGeometriesForMesh = (model) => {
      const gList = [];
      model.traverse((child) => {
        if (child instanceof THREE$2.Mesh) {
          child.geometry.deleteAttribute("uv");
          child.geometry.deleteAttribute("normal");
          child.geometry.deleteAttribute("tangent");
          gList.push(child.geometry);
        }
      });
      return mergeGeometries(gList);
    };
    const baseUrl = "https://opensource.cdn.icegl.cn";
    const brainpartsPath = baseUrl + "/model/medical/brainparts.OBJ";
    const objLoader = new OBJLoader();
    const brainpartsModel = ([__temp, __restore] = _withAsyncContext(() => loadOBJ(brainpartsPath, objLoader)), __temp = await __temp, __restore(), __temp);
    const brainpartsGeometries = mergeGeometriesForMesh(brainpartsModel);
    brainpartsGeometries.scale(0.01, 0.01, 0.01);
    const brainTexture = makeTexture(brainpartsGeometries);
    const guanyuTexture = ref$1(null);
    const planeTexture = ref$1(null);
    const guanyuPath = baseUrl + "/model/eCommerce/guanYu.glb";
    const { state: guanyuState, nodes: guanyuNodes, materials: guanyuMaterials, animations: guanyuAnimations } = NA(guanyuPath, { draco: true, decoderPath: "./draco/" });
    watch(
      () => guanyuState.value,
      (state) => {
        if (!state?.scene) return;
        try {
          const target = state.scene || state?.scene || state.scene;
          const targetChild = target.children?.[0] ?? target;
          const guanyuGeometries = mergeGeometriesForMesh(targetChild);
          guanyuGeometries.rotateX(Math.PI / 2);
          guanyuGeometries.translate(0, -0.9, 0);
          guanyuTexture.value = makeTexture(guanyuGeometries);
        } catch (e) {
          console.warn("guanyu merge error", e);
        }
      },
      { immediate: true }
    );
    const planePath = baseUrl + "/model/industry4/modelDraco.glb";
    const { state: planeState, nodes: planeNodes, materials: planeMaterials, animations: planeAnimations } = NA(planePath, { draco: true, decoderPath: "./draco/" });
    watch(
      () => planeState.value,
      (state) => {
        if (!state?.scene) return;
        try {
          const target = state.scene || state;
          const targetChild = target.children?.[0] ?? target;
          const planeGeometries = mergeGeometriesForMesh(targetChild);
          planeGeometries.rotateX(-Math.PI / 2);
          planeGeometries.rotateY(Math.PI / 3);
          planeGeometries.translate(0, 0, 0);
          planeTexture.value = makeTexture(planeGeometries);
        } catch (e) {
          console.warn("plane merge error", e);
        }
      },
      { immediate: true }
    );
    const simMesh = makeSimMesh();
    const FBOscene = new THREE$2.Scene();
    const FBOcamera = new THREE$2.OrthographicCamera(-1, 1, 1, -1, 1 / Math.pow(2, 53), 1);
    FBOscene.add(simMesh);
    const { onBeforeRender } = _l();
    const { camera, renderer } = Fs();
    onBeforeRender(({ elapsed }) => {
      if (renderer && camera.value && pMesh.value) {
        renderer.setRenderTarget(fboTarget);
        renderer.clear();
        renderer.render(FBOscene, FBOcamera);
        renderer.setRenderTarget(null);
        const gTex = guanyuTexture.value || null;
        const bTex = brainTexture || null;
        const plTex = planeTexture.value || null;
        const progress = THREE$2.MathUtils.clamp(-props.progress / 2, 0, 1);
        if (progress < 1 / 2) {
          simMesh.material.uniforms.uTextureA.value = gTex ?? bTex;
          simMesh.material.uniforms.uTextureB.value = bTex;
          simMesh.material.uniforms.uScroll.value = progress * 2;
        } else {
          simMesh.material.uniforms.uTextureA.value = bTex;
          simMesh.material.uniforms.uTextureB.value = plTex ?? bTex;
          simMesh.material.uniforms.uScroll.value = (progress - 1 / 2) * 2;
        }
        simMesh.material.uniforms.uTime.value = elapsed;
        if (pMesh.value?.particles?.material?.uniforms) {
          pMesh.value.particles.material.uniforms.uPositions.value = fboTarget.texture;
          const cUniform = pMesh.value.particles.material.uniforms.uColor;
          if (cUniform) {
            cUniform.value.setStyle(props.color);
          }
        }
      }
    });
    return (_ctx, _cache) => {
      return _openBlock$1(), _createBlock$1(_sfc_main$3, {
        ref_key: "pMesh",
        ref: pMesh,
        progress: _ctx.progress
      }, null, 8, ["progress"]);
    };
  }
});

const {defineComponent:_defineComponent$1} = await importShared('vue');

const {watchEffect: watchEffect$1} = await importShared('vue');

const THREE$1 = await importShared('three');
const _sfc_main$1 = /* @__PURE__ */ _defineComponent$1({
  __name: "particalPass",
  props: {
    use: { type: Boolean, default: true }
  },
  setup(__props) {
    const props = __props;
    const { camera, renderer, scene, sizes } = Fs();
    const params = {
      threshold: 0,
      strength: 0.472,
      // 强度
      radius: 1.61
      // 半径
    };
    let effectComposer = null;
    const bloomPassEffect = (scene2, camera2, renderer2, width, height) => {
      const renderScene = new RenderPass(scene2, camera2);
      const bloomPass = new UnrealBloomPass(new THREE$1.Vector2(width, height), params.strength, params.radius, params.threshold);
      const renderTarget = new THREE$1.WebGLRenderTarget(
        width,
        height,
        {
          generateMipmaps: false,
          minFilter: THREE$1.LinearFilter,
          magFilter: THREE$1.LinearFilter,
          format: THREE$1.RGBAFormat,
          colorSpace: THREE$1.SRGBColorSpace,
          samples: 0
        }
      );
      effectComposer = new EffectComposer(renderer2, renderTarget);
      effectComposer.addPass(renderScene);
      effectComposer.addPass(bloomPass);
    };
    watchEffect$1(() => {
      if (sizes.width.value) {
        bloomPassEffect(scene.value, camera.value, renderer, sizes.width.value, sizes.height.value);
      }
    });
    const { onRender } = _l();
    onRender(() => {
      if (props.use) {
        if (effectComposer) {
          effectComposer.render();
        }
      } else {
        if (renderer && camera.value) {
          renderer.render(scene.value, camera.value);
        }
      }
    });
    return (_ctx, _cache) => {
      return null;
    };
  }
});

const {defineComponent:_defineComponent} = await importShared('vue');

const {unref:_unref,createVNode:_createVNode,createElementVNode:_createElementVNode,Suspense:_Suspense,withCtx:_withCtx,openBlock:_openBlock,createBlock:_createBlock,resolveComponent:_resolveComponent,normalizeProps:_normalizeProps,guardReactiveProps:_guardReactiveProps,Fragment:_Fragment,createElementBlock:_createElementBlock} = await importShared('vue');
const {ref,watchEffect,reactive} = await importShared('vue');

const THREE = await importShared('three');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "scrollPartical",
  setup(__props) {
    const progress = ref(0);
    watchEffect(() => {
      console.log("jaime ~ progress:", progress.value);
    });
    const gl = {
      clearColor: "#000",
      outputColorSpace: THREE.LinearSRGBColorSpace,
      toneMapping: THREE.NoToneMapping,
      toneMappingExposure: 1,
      windowSize: true,
      renderMode: "manual",
      powerPreference: "high-performance",
      antialias: true,
      alpha: false,
      useLegacyLights: false,
      physicallyCorrectLights: true
    };
    const paneState = reactive({
      pass: true,
      color: "#6aff00"
    });
    const paneControl = new Pane({
      title: "参数",
      expanded: true
    });
    paneControl.addBinding(paneState, "pass", {
      label: "后处理"
    });
    paneControl.addBinding(paneState, "color", {
      label: "颜色"
    });
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createElementBlock(_Fragment, null, [
        _createVNode(_unref(loading), { styleNum: 4 }),
        _createVNode(_component_TresCanvas, _normalizeProps(_guardReactiveProps(gl)), {
          default: _withCtx(() => [
            _cache[1] || (_cache[1] = _createElementVNode("TresPerspectiveCamera", {
              position: [0, 0, -4],
              fov: 45,
              near: 0.1,
              far: 1e3,
              "look-at": [0, 0, 0]
            }, null, -1)),
            _createVNode(_sfc_main$1, {
              use: paneState.pass
            }, null, 8, ["use"]),
            _createVNode(_sfc_main$4, {
              modelValue: progress.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => progress.value = $event),
              distance: 10,
              "smooth-scroll": 0.1,
              htmlScroll: ""
            }, {
              default: _withCtx(() => [
                (_openBlock(), _createBlock(_Suspense, null, {
                  default: _withCtx(() => [
                    _createVNode(_sfc_main$2, {
                      progress: progress.value,
                      color: paneState.color
                    }, null, 8, ["progress", "color"])
                  ]),
                  _: 1
                }))
              ]),
              _: 1
            }, 8, ["modelValue"])
          ]),
          _: 1
        }, 16),
        _cache[2] || (_cache[2] = _createElementVNode("main", null, [
          _createElementVNode("section", null, [
            _createElementVNode("h1", null, "关羽 - GuanYu")
          ]),
          _createElementVNode("section", null, [
            _createElementVNode("h1", { style: { "margin-left": "-11em", "margin-bottom": "-10em" } }, "大脑 - Brain")
          ]),
          _createElementVNode("section", null, [
            _createElementVNode("h1", { style: { "margin-left": "11em", "margin-bottom": "-10em" } }, "设备 - Device")
          ])
        ], -1))
      ], 64);
    };
  }
});

const scrollPartical = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9439621a"]]);

export { scrollPartical as default };
//# sourceMappingURL=scrollPartical.CS9iGD1x1767105581793.js.map
