import { importShared, _l, Fs, Kk } from './index.BxB45aCK1767105581793.js';
import './reflectorDiffuse.vue_vue_type_script_setup_true_lang.BuW1EemC1767105581793.js';
import { _sfc_main as _sfc_main$3 } from './reflectorDUDV.vue_vue_type_script_setup_true_lang.Cce3m26z1767105581793.js';
import './reflectorShaderMesh.vue_vue_type_script_setup_true_lang.D0T9d0go1767105581793.js';
import './dynamicRotatingBase.vue_vue_type_script_setup_true_lang.B3Epdjc31767105581793.js';
import './whiteFloorMesh.vue_vue_type_script_setup_true_lang.B9UIV1AE1767105581793.js';
import './gridPlusCom.vue_vue_type_script_setup_true_lang.BIqyIrzr1767105581793.js';
import './videoFloor.vue_vue_type_script_setup_true_lang.BEyCiDvU1767105581793.js';
import './digitalGround.vue_vue_type_script_setup_true_lang.BPvRJNY41767105581793.js';
import './imgFloor.vue_vue_type_script_setup_true_lang.D-OHfrvs1767105581793.js';
import './reflectorRoundedBox.vue_vue_type_script_setup_true_lang.B0i-7O7p1767105581793.js';
import './particleBase.vue_vue_type_script_setup_true_lang.BTwaqkrr1767105581793.js';
import './rippleFloor.vue_vue_type_script_setup_true_lang.DU-KS3_f1767105581793.js';
import { Pane } from './tweakpane.Cvt5w0bb1767105581793.js';
import './customShaderMaterial.vue_vue_type_script_setup_true_lang.rDMIDGqx1767105581793.js';
import './index.vue_vue_type_script_setup_true_lang.D7-hpzmy1767105581793.js';
import { useGLTF } from './index.CTrIPOkZ1767105581793.js';

var voxelized_default$1="uniform float time;\nvarying vec3 vNormal;\nuniform float triScale;\nuniform float progress;\nuniform float mosaic;\nattribute vec3 center;\nvec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}\nvec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}\nvec4 fade(vec4 t) {return t*t*t*(t*(t*6.0-15.0)+10.0);}\n\nfloat cnoise(vec4 P){\n  vec4 Pi0 = floor(P); \n  vec4 Pi1 = Pi0 + 1.0; \n  Pi0 = mod(Pi0, 289.0);\n  Pi1 = mod(Pi1, 289.0);\n  vec4 Pf0 = fract(P); \n  vec4 Pf1 = Pf0 - 1.0; \n  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\n  vec4 iy = vec4(Pi0.yy, Pi1.yy);\n  vec4 iz0 = vec4(Pi0.zzzz);\n  vec4 iz1 = vec4(Pi1.zzzz);\n  vec4 iw0 = vec4(Pi0.wwww);\n  vec4 iw1 = vec4(Pi1.wwww);\n\n  vec4 ixy = permute(permute(ix) + iy);\n  vec4 ixy0 = permute(ixy + iz0);\n  vec4 ixy1 = permute(ixy + iz1);\n  vec4 ixy00 = permute(ixy0 + iw0);\n  vec4 ixy01 = permute(ixy0 + iw1);\n  vec4 ixy10 = permute(ixy1 + iw0);\n  vec4 ixy11 = permute(ixy1 + iw1);\n\nvec4 gx00 = ixy00 / 7.0;\n  vec4 gy00 = floor(gx00) / 7.0;\n  vec4 gz00 = floor(gy00) / 6.0;\n  gx00 = fract(gx00) - 0.5;\n  gy00 = fract(gy00) - 0.5;\n  gz00 = fract(gz00) - 0.5;\n  vec4 gw00 = vec4(0.75) - abs(gx00) - abs(gy00) - abs(gz00);\n  vec4 sw00 = step(gw00, vec4(0.0));\n  gx00 -= sw00 * (step(0.0, gx00) - 0.5);\n  gy00 -= sw00 * (step(0.0, gy00) - 0.5);\n\n  vec4 gx01 = ixy01 / 7.0;\n  vec4 gy01 = floor(gx01) / 7.0;\n  vec4 gz01 = floor(gy01) / 6.0;\n  gx01 = fract(gx01) - 0.5;\n  gy01 = fract(gy01) - 0.5;\n  gz01 = fract(gz01) - 0.5;\n  vec4 gw01 = vec4(0.75) - abs(gx01) - abs(gy01) - abs(gz01);\n  vec4 sw01 = step(gw01, vec4(0.0));\n  gx01 -= sw01 * (step(0.0, gx01) - 0.5);\n  gy01 -= sw01 * (step(0.0, gy01) - 0.5);\n\n  vec4 gx10 = ixy10 / 7.0;\n  vec4 gy10 = floor(gx10) / 7.0;\n  vec4 gz10 = floor(gy10) / 6.0;\n  gx10 = fract(gx10) - 0.5;\n  gy10 = fract(gy10) - 0.5;\n  gz10 = fract(gz10) - 0.5;\n  vec4 gw10 = vec4(0.75) - abs(gx10) - abs(gy10) - abs(gz10);\n  vec4 sw10 = step(gw10, vec4(0.0));\n  gx10 -= sw10 * (step(0.0, gx10) - 0.5);\n  gy10 -= sw10 * (step(0.0, gy10) - 0.5);\n\nvec4 gx11 = ixy11 / 7.0;\n  vec4 gy11 = floor(gx11) / 7.0;\n  vec4 gz11 = floor(gy11) / 6.0;\n  gx11 = fract(gx11) - 0.5;\n  gy11 = fract(gy11) - 0.5;\n  gz11 = fract(gz11) - 0.5;\n  vec4 gw11 = vec4(0.75) - abs(gx11) - abs(gy11) - abs(gz11);\n  vec4 sw11 = step(gw11, vec4(0.0));\n  gx11 -= sw11 * (step(0.0, gx11) - 0.5);\n  gy11 -= sw11 * (step(0.0, gy11) - 0.5);\n\n  vec4 g0000 = vec4(gx00.x,gy00.x,gz00.x,gw00.x);\n  vec4 g1000 = vec4(gx00.y,gy00.y,gz00.y,gw00.y);\n  vec4 g0100 = vec4(gx00.z,gy00.z,gz00.z,gw00.z);\n  vec4 g1100 = vec4(gx00.w,gy00.w,gz00.w,gw00.w);\n  vec4 g0010 = vec4(gx10.x,gy10.x,gz10.x,gw10.x);\n  vec4 g1010 = vec4(gx10.y,gy10.y,gz10.y,gw10.y);\n  vec4 g0110 = vec4(gx10.z,gy10.z,gz10.z,gw10.z);\n  vec4 g1110 = vec4(gx10.w,gy10.w,gz10.w,gw10.w);\n  vec4 g0001 = vec4(gx01.x,gy01.x,gz01.x,gw01.x);\n  vec4 g1001 = vec4(gx01.y,gy01.y,gz01.y,gw01.y);\n  vec4 g0101 = vec4(gx01.z,gy01.z,gz01.z,gw01.z);\n  vec4 g1101 = vec4(gx01.w,gy01.w,gz01.w,gw01.w);\n  vec4 g0011 = vec4(gx11.x,gy11.x,gz11.x,gw11.x);\n  vec4 g1011 = vec4(gx11.y,gy11.y,gz11.y,gw11.y);\n  vec4 g0111 = vec4(gx11.z,gy11.z,gz11.z,gw11.z);\n  vec4 g1111 = vec4(gx11.w,gy11.w,gz11.w,gw11.w);\n\n  vec4 norm00 = taylorInvSqrt(vec4(dot(g0000, g0000), dot(g0100, g0100), dot(g1000, g1000), dot(g1100, g1100)));\n  g0000 *= norm00.x;\n  g0100 *= norm00.y;\n  g1000 *= norm00.z;\n  g1100 *= norm00.w;\n\n  vec4 norm01 = taylorInvSqrt(vec4(dot(g0001, g0001), dot(g0101, g0101), dot(g1001, g1001), dot(g1101, g1101)));\n  g0001 *= norm01.x;\n  g0101 *= norm01.y;\n  g1001 *= norm01.z;\n  g1101 *= norm01.w;\n  vec4 norm10 = taylorInvSqrt(vec4(dot(g0010, g0010), dot(g0110, g0110), dot(g1010, g1010), dot(g1110, g1110)));\n  g0010 *= norm10.x;\n  g0110 *= norm10.y;\n  g1010 *= norm10.z;\n  g1110 *= norm10.w;\n\n  vec4 norm11 = taylorInvSqrt(vec4(dot(g0011, g0011), dot(g0111, g0111), dot(g1011, g1011), dot(g1111, g1111)));\n  g0011 *= norm11.x;\n  g0111 *= norm11.y;\n  g1011 *= norm11.z;\n  g1111 *= norm11.w;\n\n  float n0000 = dot(g0000, Pf0);\n  float n1000 = dot(g1000, vec4(Pf1.x, Pf0.yzw));\n  float n0100 = dot(g0100, vec4(Pf0.x, Pf1.y, Pf0.zw));\n  float n1100 = dot(g1100, vec4(Pf1.xy, Pf0.zw));\n  float n0010 = dot(g0010, vec4(Pf0.xy, Pf1.z, Pf0.w));\n  float n1010 = dot(g1010, vec4(Pf1.x, Pf0.y, Pf1.z, Pf0.w));\n  float n0110 = dot(g0110, vec4(Pf0.x, Pf1.yz, Pf0.w));\n  float n1110 = dot(g1110, vec4(Pf1.xyz, Pf0.w));\n  float n0001 = dot(g0001, vec4(Pf0.xyz, Pf1.w));\n  float n1001 = dot(g1001, vec4(Pf1.x, Pf0.yz, Pf1.w));\n  float n0101 = dot(g0101, vec4(Pf0.x, Pf1.y, Pf0.z, Pf1.w));\n  float n1101 = dot(g1101, vec4(Pf1.xy, Pf0.z, Pf1.w));\n  float n0011 = dot(g0011, vec4(Pf0.xy, Pf1.zw));\n  float n1011 = dot(g1011, vec4(Pf1.x, Pf0.y, Pf1.zw));\n  float n0111 = dot(g0111, vec4(Pf0.x, Pf1.yzw));\n  float n1111 = dot(g1111, Pf1);\n\n  vec4 fade_xyzw = fade(Pf0);\n  vec4 n_0w = mix(vec4(n0000, n1000, n0100, n1100), vec4(n0001, n1001, n0101, n1101), fade_xyzw.w);\n  vec4 n_1w = mix(vec4(n0010, n1010, n0110, n1110), vec4(n0011, n1011, n0111, n1111), fade_xyzw.w);\n  vec4 n_zw = mix(n_0w, n_1w, fade_xyzw.z);\n  vec2 n_yzw = mix(n_zw.xy, n_zw.zw, fade_xyzw.y);\n  float n_xyzw = mix(n_yzw.x, n_yzw.y, fade_xyzw.x);\n  return 2.2 * n_xyzw;\n}\n\nmat4 rotationMatrix(vec3 axis, float angle) {\n    axis = normalize(axis);\n    float s = sin(angle);\n    float c = cos(angle);\n    float oc = 1.0 - c;\n    \n    return mat4(oc * axis.x * axis.x + c,           oc * axis.x * axis.y - axis.z * s,  oc * axis.z * axis.x + axis.y * s,  0.0,\n                oc * axis.x * axis.y + axis.z * s,  oc * axis.y * axis.y + c,           oc * axis.y * axis.z - axis.x * s,  0.0,\n                oc * axis.z * axis.x - axis.y * s,  oc * axis.y * axis.z + axis.x * s,  oc * axis.z * axis.z + c,           0.0,\n                0.0,                                0.0,                                0.0,                                1.0);\n}\n\nvec3 rotate(vec3 v, vec3 axis, float angle) {\n	mat4 m = rotationMatrix(axis, angle);\n	return (m * vec4(v, 1.0)).xyz;\n}\nfloat PI = 3.141592653589793238;\n\nfloat backout(float progress, float swing)\n	{\n		float p = progress - 1.;\n		return (p * p * ((swing + 1.) * p + swing) + 1.);\n	}\n\nvoid main(){\n  vNormal = normal;\n\n  vec3 pos = position;\n\n  float transformStart = -(position.y*0.1+0.5 )*4.;\n  float transformProgress = backout(clamp(progress*10. + transformStart, 0., 1.), 10.);\n\n  \n  pos = (pos - center) * triScale + center;\n\n  \n  vec3 posPixelated = floor(pos * mosaic +0.5) / mosaic;\n  pos = mix(pos, posPixelated, transformProgress);\n\n  float noise = cnoise(vec4(pos, time*0.4)*0.1);\n\n  float rotation = noise * PI * 0.1;\n  pos = rotate(pos, vec3(1.,0.,0.), rotation);\n  pos = rotate(pos, vec3(0.,1.,0.), rotation);\n  pos = rotate(pos, vec3(0.,1.,1.), rotation);\n\n  float scale = 1.0 + noise*0.05;\n  pos *= scale;\n\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);\n}";

var voxelized_default="varying vec3 vNormal;\nvoid main(){\n    gl_FragColor = vec4(vNormal, 1.0);\n     \n     #include <colorspace_fragment>\n}";

const {withAsyncContext:_withAsyncContext,defineComponent:_defineComponent$2} = await importShared('vue');

const {unref:_unref$1,openBlock:_openBlock$1,createElementBlock:_createElementBlock} = await importShared('vue');

const _hoisted_1 = ["object"];
const {watch: watch$1,toRaw} = await importShared('vue');

const THREE$1 = await importShared('three');
const _sfc_main$2 = /* @__PURE__ */ _defineComponent$2({
  __name: "model",
  props: {
    mosaic: { default: 2.31 },
    progress: { default: 0.31 },
    triScale: { default: 1 }
  },
  async setup(__props) {
    let __temp, __restore;
    const props = __props;
    const voxelizedMaterial = new THREE$1.ShaderMaterial({
      side: THREE$1.DoubleSide,
      uniforms: {
        time: { value: 0 },
        mosaic: { value: props.mosaic },
        progress: { value: props.progress },
        triScale: { value: props.triScale }
      },
      vertexShader: voxelized_default$1,
      fragmentShader: voxelized_default
    });
    const { scene } = ([__temp, __restore] = _withAsyncContext(() => useGLTF("./plugins/visualArts/model/LeePerrySmith.glb")), __temp = await __temp, __restore(), __temp);
    scene.traverse((child) => {
      if (child.isMesh) {
        child.material = voxelizedMaterial;
      }
    });
    scene.children[0].geometry = scene.children[0].geometry.toNonIndexed();
    scene.children[0].geometry.center();
    let pos = scene.children[0].geometry.attributes.position.array;
    let centers = [];
    for (let i = 0; i < pos.length; i += 9) {
      let centerX = (pos[i] + pos[i + 3] + pos[i + 6]) / 3;
      let centerY = (pos[i + 1] + pos[i + 4] + pos[i + 7]) / 3;
      let centerZ = (pos[i + 2] + pos[i + 5] + pos[i + 8]) / 3;
      centers.push(centerX, centerY, centerZ);
      centers.push(centerX, centerY, centerZ);
      centers.push(centerX, centerY, centerZ);
    }
    scene.children[0].geometry.setAttribute("center", new THREE$1.BufferAttribute(new Float32Array(centers), 3));
    const { onBeforeRender } = _l();
    onBeforeRender(({}) => {
      voxelizedMaterial.uniforms.time.value += 0.05;
    });
    watch$1(
      () => [props.mosaic, props.progress, props.triScale],
      ([mosaic, progress, triScale]) => {
        voxelizedMaterial.uniforms.mosaic.value = mosaic;
        voxelizedMaterial.uniforms.progress.value = progress;
        voxelizedMaterial.uniforms.triScale.value = triScale;
      }
    );
    return (_ctx, _cache) => {
      return _openBlock$1(), _createElementBlock("primitive", {
        object: toRaw(_unref$1(scene))
      }, null, 8, _hoisted_1);
    };
  }
});

const {defineComponent:_defineComponent$1} = await importShared('vue');

const {watch} = await importShared('vue');

const THREE = await importShared('three');
const _sfc_main$1 = /* @__PURE__ */ _defineComponent$1({
  __name: "postProcessing",
  props: {
    use: { default: true },
    start: { default: 0 },
    translate: { default: 0 }
  },
  setup(__props) {
    const props = __props;
    const { camera, renderer, scene, sizes } = Fs();
    const sourceRenderTarget = new THREE.WebGLRenderTarget(sizes.width.value, sizes.height.value);
    let renderTarget1 = new THREE.WebGLRenderTarget(sizes.width.value, sizes.height.value);
    let renderTarget2 = new THREE.WebGLRenderTarget(sizes.width.value, sizes.height.value);
    const orthoCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    orthoCamera.position.z = 1;
    const orthoScene = new THREE.Scene();
    const postQuad = new THREE.Mesh(
      new THREE.PlaneGeometry(2, 2),
      new THREE.ShaderMaterial({
        uniforms: {
          current: { value: null },
          prev: { value: null },
          start: { value: props.start },
          time: { value: 0 },
          translate: { value: props.translate }
        },
        vertexShader: `
        varying vec2 vUv;
        void main(){
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
            `,
        fragmentShader: `
        uniform sampler2D current;
        uniform sampler2D prev;
        uniform float start;
        uniform float time;
        uniform float translate;
        varying vec2 vUv;
        void main(){
            float PI = 3.14159265359;
            vec2 uv = vUv;
            uv -= vec2(0.5);
            uv *= vec2(2., 1.);
            uv.y += translate;
            uv /= 4.;
            
            uv.x += sin(uv.y * PI * 4. + time*0.3)*0.15;
            uv.x += sin(uv.y * PI * 16. + time*0.5)*0.15;

            uv += vec2(0.5);

            uv = mix(vUv,uv, start);

            vec4 currentColor = texture2D(current, uv);
            vec4 prevColor = texture2D(prev,vUv);

            vec4 color = vec4(mix( prevColor.rgb, currentColor.rgb, 0.05), 1.0);
            gl_FragColor = color;
            //gl_FragColor = vec4(vUv, 0.0, 1.0);
    }`
      })
    );
    orthoScene.add(postQuad);
    const finalScene = new THREE.Scene();
    const finalQuad = new THREE.Mesh(
      new THREE.PlaneGeometry(2, 2),
      new THREE.MeshBasicMaterial({
        color: 16777215,
        map: null
      })
    );
    finalScene.add(finalQuad);
    const { onBeforeRender, onRender } = _l();
    onBeforeRender(({ elapsed }) => {
      postQuad.material.uniforms.time.value = elapsed;
    });
    onRender(() => {
      if (props.use) {
        renderer.setRenderTarget(sourceRenderTarget);
        renderer.render(scene.value, camera.value);
        postQuad.material.uniforms.current.value = sourceRenderTarget.texture;
        postQuad.material.uniforms.prev.value = renderTarget1.texture;
        renderer.setRenderTarget(renderTarget2);
        renderer.render(orthoScene, orthoCamera);
        finalQuad.material.map = renderTarget1.texture;
        renderer.setRenderTarget(null);
        renderer.render(finalScene, orthoCamera);
        const temp = renderTarget1;
        renderTarget1 = renderTarget2;
        renderTarget2 = temp;
        renderer.render(orthoScene, orthoCamera);
      } else {
        renderer.render(scene.value, camera.value);
      }
    });
    watch(
      () => [props.start, props.translate],
      ([start, translate]) => {
        postQuad.material.uniforms.start.value = start;
        postQuad.material.uniforms.translate.value = translate;
      }
    );
    return (_ctx, _cache) => {
      return null;
    };
  }
});

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,unref:_unref,createVNode:_createVNode,mergeProps:_mergeProps,Suspense:_Suspense,withCtx:_withCtx,openBlock:_openBlock,createBlock:_createBlock,normalizeProps:_normalizeProps,guardReactiveProps:_guardReactiveProps,resolveComponent:_resolveComponent} = await importShared('vue');

const {reactive} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "voxelizedShader",
  setup(__props) {
    const state = {
      clearColor: "#050505",
      antialias: false
    };
    const reflectorState = {
      reflectivity: 0.8,
      showGridHelper: false,
      scale: 6
    };
    const voxelizedShaderConfig = reactive({
      mosaic: 2.31,
      progress: 0.31,
      triScale: 1,
      use: true,
      start: 0,
      translate: 0
    });
    const paneControl = new Pane({ title: "参数" });
    paneControl.addBinding(voxelizedShaderConfig, "progress", {
      label: "进度",
      min: 0,
      max: 0.5,
      step: 0.01
    });
    paneControl.addBinding(voxelizedShaderConfig, "mosaic", {
      label: "像素化",
      min: 0,
      max: 10,
      step: 0.01
    });
    paneControl.addBinding(voxelizedShaderConfig, "triScale", {
      label: "三角片大小",
      min: 0,
      max: 1,
      step: 0.01
    });
    paneControl.addBinding(voxelizedShaderConfig, "use", {
      label: "开启延迟"
    });
    paneControl.addBinding(voxelizedShaderConfig, "start", {
      label: "曲折度",
      min: 0,
      max: 1,
      step: 0.01
    });
    paneControl.addBinding(voxelizedShaderConfig, "translate", {
      label: "偏移量",
      min: 0,
      max: 1,
      step: 0.01
    });
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createBlock(_component_TresCanvas, _mergeProps(state, { "window-size": "" }), {
        default: _withCtx(() => [
          _cache[0] || (_cache[0] = _createElementVNode("TresPerspectiveCamera", {
            position: [0, 0, 30],
            fov: 45,
            near: 0.1,
            far: 1e3
          }, null, -1)),
          _createVNode(_unref(Kk)),
          _cache[1] || (_cache[1] = _createElementVNode("TresAmbientLight", { intensity: 0.5 }, null, -1)),
          (_openBlock(), _createBlock(_Suspense, null, {
            default: _withCtx(() => [
              _createVNode(_sfc_main$2, _mergeProps({ position: [0, 4, 0] }, voxelizedShaderConfig), null, 16)
            ]),
            _: 1
          })),
          _createVNode(_unref(_sfc_main$3), _normalizeProps(_guardReactiveProps(reflectorState)), null, 16),
          _createVNode(_sfc_main$1, _normalizeProps(_guardReactiveProps(voxelizedShaderConfig)), null, 16)
        ]),
        _: 1
      }, 16);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=voxelizedShader.BvLGC9OB1767105581793.js.map
