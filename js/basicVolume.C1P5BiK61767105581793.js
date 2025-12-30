import { importShared, Fs, _l, Kk, _export_sfc } from './index.BxB45aCK1767105581793.js';
import { Pane } from './tweakpane.Cvt5w0bb1767105581793.js';

var vertex_default="precision mediump float;\n\nuniform vec3 u_camera;\nuniform vec3 u_resolution;\nuniform float u_time;\n\nvarying vec3 v_hitPos;\nvarying vec3 v_hitPosWorldSpace;\nvarying vec3 v_cameraObjectSpace;\n\nvoid main() {\n  vec3 pos = position;\n\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);\n\n  v_hitPos = position.xyz;\n\n  v_hitPosWorldSpace = (modelMatrix * vec4(position, 1.0)).xyz;\n\n  v_cameraObjectSpace = (inverse(modelMatrix) * vec4(u_camera, 1.0)).xyz;\n}";

var fragment_default="precision mediump int;\nprecision mediump float;\n\nuniform vec3 u_camera;\nuniform vec3 u_resolution;\nuniform mediump sampler3D u_volume;\nuniform vec3 u_crossSectionSize;\nuniform float u_dt;\nuniform float u_time;\nuniform float u_color;\nuniform float u_isoValue;\nuniform float u_alphaVal;\n\nvec3 palette(in float t) {\n  vec3 a = vec3(0.5, 0.5, 0.5);\n  vec3 b = vec3(0.5, 0.5, 0.5);\n  vec3 c = vec3(1.0, 1.0, 1.0);\n  vec3 d = vec3(0.00, 0.33, 0.67);\n\n  return a + b * cos(6.28318 * (c * t + d));\n}\n\nvarying vec3 v_hitPos;\nvarying vec3 v_hitPosWorldSpace;\nvarying vec3 v_cameraObjectSpace;\n\nvec2 intersect_box(vec3 orig, vec3 dir) {\n\n  vec3 box_min = vec3(-u_crossSectionSize);\n  vec3 box_max = vec3(u_crossSectionSize);\n  vec3 inv_dir = 1.0 / dir;\n  vec3 tmin_tmp = (box_min - orig) * inv_dir;\n  vec3 tmax_tmp = (box_max - orig) * inv_dir;\n  vec3 tmin = min(tmin_tmp, tmax_tmp);\n  vec3 tmax = max(tmin_tmp, tmax_tmp);\n  float t0 = max(tmin.x, max(tmin.y, tmin.z));\n  float t1 = min(tmax.x, min(tmax.y, tmax.z));\n  return vec2(t0, t1);\n}\n\nvoid main() {\n  vec3 rayOrigin = vec3(0.0, 0.0, -3.0);\n  rayOrigin = v_cameraObjectSpace;\n\n  vec2 uv = 2.0 * gl_FragCoord.xy / u_resolution.xy - 1.0;\n  vec3 rayDir = normalize(vec3(uv, 1.0));\n  rayDir = normalize(v_hitPos - rayOrigin);\n\n  vec2 t_hit = intersect_box(rayOrigin, rayDir);\n  if (t_hit.x > t_hit.y) {\n    discard;\n  }\n\n  t_hit.x = max(t_hit.x, 0.0);\n\n  float dt = u_dt;\n\n  vec4 color = vec4(0.0);\n\n  vec3 p = rayOrigin + t_hit.x * rayDir + 0.5;\n  for (float t = t_hit.x; t < t_hit.y; t += dt) {\n\n    float textureVal = texture(u_volume, p).r;\n\n    vec4 val_color = vec4(0.0);\n    float val_color_alpha = textureVal * 0.1;\n\n    val_color_alpha = smoothstep(0.0, u_alphaVal, val_color_alpha);\n\n    vec3 red = vec3(1.0, 0.0, 0.0);\n    vec3 white = vec3(1.0);\n    if (abs(u_color - 1.0) <= 0.01) {\n      val_color = vec4(white, val_color_alpha);\n    } else if (abs(u_color - 2.0) <= 0.01) {\n      val_color = vec4(mix(red, white, val_color_alpha), val_color_alpha);\n    } else {\n      val_color = vec4(palette(textureVal), val_color_alpha);\n    }\n\n    color.rgb += (1.0 - color.a) * val_color.a * val_color.rgb;\n    color.a += (1.0 - color.a) * val_color.a;\n\n    if (textureVal > u_isoValue) {\n      float gxLess = texture(u_volume, vec3(p.x - rayDir.x * u_dt, p.y, p.z)).r;\n      float gxMore = texture(u_volume, vec3(p.x + rayDir.x * u_dt, p.y, p.z)).r;\n      float dgx = gxMore - gxLess;\n\n      float gyLess = texture(u_volume, vec3(p.x, p.y - rayDir.y * u_dt, p.z)).r;\n      float gyMore = texture(u_volume, vec3(p.x, p.y + rayDir.y * u_dt, p.z)).r;\n      float dgy = gyMore - gyLess;\n\n      float gzLess = texture(u_volume, vec3(p.x, p.y, p.z - rayDir.z * u_dt)).r;\n      float gzMore = texture(u_volume, vec3(p.x, p.y, p.z + rayDir.z * u_dt)).r;\n      float dgz = gzMore - gzLess;\n      vec3 n = normalize(vec3(dgx, dgy, dgz));\n\n      vec3 lightSource = vec3(1.0);\n      vec3 lightDir = normalize(lightSource);\n      float diffuseStrength = max(dot(n, lightDir), 0.0);\n\n      vec3 viewSource = normalize(rayOrigin);\n      vec3 reflectSource = normalize(reflect(-lightSource, n));\n      float specularStrength = max(0.0, dot(viewSource, reflectSource));\n      specularStrength = pow(specularStrength, 64.0);\n\n      color.rgb = diffuseStrength * val_color.rgb + specularStrength * val_color.rgb;\n      color.rgb *= val_color.rgb;\n      color.a = 0.95;\n      break;\n    }\n\n    if (color.a >= 0.95) {\n      break;\n    }\n\n    p += rayDir * dt;\n  }\n\n  gl_FragColor = color;\n}";

const {defineComponent:_defineComponent$1} = await importShared('vue');

const {createElementVNode:_createElementVNode$1,unref:_unref$1,openBlock:_openBlock$1,createElementBlock:_createElementBlock$1} = await importShared('vue');

const _hoisted_1 = ["rotation-x"];
const _hoisted_2 = ["uniforms", "vertexShader", "fragmentShader"];
const {ref,reactive: reactive$1,onMounted,watch} = await importShared('vue');

const Three = await importShared('three');
const dim = 41;
const _sfc_main$1 = /* @__PURE__ */ _defineComponent$1({
  __name: "basicVolumeRendering",
  setup(__props) {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const meshRef = ref(null);
    const volumeData = ref(null);
    const handleVolumeFileUpload = () => {
      fetch("/plugins/volumeRendering/image/nucleon_41x41x41_uint8.raw").then((response) => response.arrayBuffer()).then((arrayBuffer) => {
        const uint8Array = new Uint8Array(arrayBuffer);
        const data = new Uint8Array(dim * dim * dim);
        for (let i = 0; i < uint8Array.length; i++) {
          data[i] = uint8Array[i];
        }
        volumeData.value = data;
      }).catch((error) => {
        console.error("Error fetching volume data:", error);
      });
    };
    const clock = new Three.Clock();
    clock.start();
    const panel = new Pane();
    const folder = panel.addFolder({ title: "Display Settings" });
    const crossFolder = folder.addFolder({ title: "Cross Section Settings" });
    const crossSectionSize = new Three.Vector3(0.5, 0.5, 0.5);
    crossFolder.addBinding(crossSectionSize, "x", { label: "X", min: 0.02, max: 0.5, step: 0.02 });
    crossFolder.addBinding(crossSectionSize, "y", { label: "Y", min: 0.02, max: 0.5, step: 0.02 });
    crossFolder.addBinding(crossSectionSize, "z", { label: "Z", min: 0.02, max: 0.5, step: 0.02 });
    crossFolder.expanded = true;
    const { camera } = Fs();
    const uniforms = reactive$1({
      u_camera: {
        value: camera.value?.position
      },
      u_resolution: {
        value: new Three.Vector3(width, height, 1)
      },
      u_dt: {
        value: 4e-3
      },
      u_time: {
        value: 0
      },
      u_crossSectionSize: {
        value: crossSectionSize
      },
      u_color: {
        value: 1
      },
      u_volume: {
        value: null
      },
      u_isoValue: {
        value: 0.2
      },
      u_alphaVal: {
        value: 0.2
      }
    });
    const algoFolder = folder.addFolder({ title: "Algorithm Settings" });
    algoFolder.addBinding(uniforms.u_dt, "value", { label: "dt", min: 4e-4, max: 0.016, step: 2e-4 });
    algoFolder.addBinding(uniforms.u_color, "value", { label: "color", min: 1, max: 3, step: 1 });
    algoFolder.addBinding(uniforms.u_alphaVal, "value", { label: "alphaVal", min: 0.01, max: 1, step: 0.01 });
    algoFolder.addBinding(uniforms.u_isoValue, "value", { label: "isoValue", min: 0, max: 1, step: 0.04 });
    watch(volumeData, (newData) => {
      if (newData) {
        const volumeDataTexture = new Three.Data3DTexture(newData, dim, dim, dim);
        volumeDataTexture.format = Three.RedFormat;
        volumeDataTexture.minFilter = Three.LinearFilter;
        volumeDataTexture.magFilter = Three.LinearFilter;
        volumeDataTexture.wrapT = Three.RepeatWrapping;
        volumeDataTexture.needsUpdate = true;
        uniforms.u_volume.value = volumeDataTexture;
      }
    });
    const { onBeforeRender } = _l();
    onBeforeRender(() => {
      uniforms.u_time.value = clock.getElapsedTime();
    });
    onMounted(() => {
      handleVolumeFileUpload();
    });
    return (_ctx, _cache) => {
      return _openBlock$1(), _createElementBlock$1("TresMesh", {
        ref_key: "meshRef",
        ref: meshRef,
        "rotation-x": Math.PI / -2
      }, [
        _cache[0] || (_cache[0] = _createElementVNode$1("TresSphereGeometry", { args: [1, 16, 16] }, null, -1)),
        _createElementVNode$1("TresShaderMaterial", {
          uniforms,
          vertexShader: _unref$1(vertex_default),
          fragmentShader: _unref$1(fragment_default)
        }, null, 8, _hoisted_2)
      ], 8, _hoisted_1);
    };
  }
});

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,createTextVNode:_createTextVNode,unref:_unref,normalizeProps:_normalizeProps,guardReactiveProps:_guardReactiveProps,createVNode:_createVNode,Suspense:_Suspense,withCtx:_withCtx,openBlock:_openBlock,createBlock:_createBlock,resolveComponent:_resolveComponent,mergeProps:_mergeProps,Fragment:_Fragment,createElementBlock:_createElementBlock} = await importShared('vue');

const {reactive} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "basicVolume",
  setup(__props) {
    const state = reactive({
      windowSize: true,
      alpha: true,
      antialias: true,
      clearAlpha: 0,
      disableRender: true
    });
    const controlsState = reactive({
      enableDamping: true,
      enableZoom: true,
      enablePan: true,
      enableRotate: true,
      makeDefault: true
    });
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createElementBlock(_Fragment, null, [
        _cache[3] || (_cache[3] = _createElementVNode("div", { class: "info" }, [
          _createElementVNode("a", {
            href: "https://klacansky.com/open-scivis-datasets/skull/skull_256x256x256_uint8.raw",
            target: "_blank"
          }, " https://klacansky.com/open-scivis-datasets/skull/skull_256x256x256_uint8.raw "),
          _createElementVNode("br"),
          _createTextVNode(" 请自行下载数据集, 复制到 /plugins/volumeRendering/image/skull_256x256x256_uint8.raw 并更改文件请求指向和 dim 大小 ")
        ], -1)),
        _createVNode(_component_TresCanvas, _mergeProps({ clearColor: "#201919" }, state), {
          default: _withCtx(() => [
            _cache[0] || (_cache[0] = _createElementVNode("TresPerspectiveCamera", {
              fov: 75,
              near: 1e-3,
              far: 1e3,
              position: [-1, 0.4, -1],
              "look-at": [0, 0, 0],
              up: [0, 1, 0]
            }, null, -1)),
            _cache[1] || (_cache[1] = _createElementVNode("TresAmbientLight", { intensity: 2 }, null, -1)),
            _createVNode(_unref(Kk), _normalizeProps(_guardReactiveProps(controlsState)), null, 16),
            (_openBlock(), _createBlock(_Suspense, null, {
              default: _withCtx(() => [
                _createVNode(_sfc_main$1, { position: [0, 0, 0] })
              ]),
              _: 1
            })),
            _cache[2] || (_cache[2] = _createElementVNode("TresGridHelper", {
              args: [50, 50],
              position: [0, -5, 0]
            }, null, -1))
          ]),
          _: 1
        }, 16)
      ], 64);
    };
  }
});

const basicVolume = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-08c577c7"]]);

export { basicVolume as default };
//# sourceMappingURL=basicVolume.C1P5BiK61767105581793.js.map
