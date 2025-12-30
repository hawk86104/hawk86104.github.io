import { importShared, _l, Kk } from './index.BxB45aCK1767105581793.js';
import { mergeGeometries } from './BufferGeometryUtils.NxcZsV4J1767105581793.js';
import { useTexture } from './customShaderMaterial.vue_vue_type_script_setup_true_lang.rDMIDGqx1767105581793.js';
import './index.vue_vue_type_script_setup_true_lang.D7-hpzmy1767105581793.js';
import { useGLTF } from './index.CTrIPOkZ1767105581793.js';
import { Pane } from './tweakpane.Cvt5w0bb1767105581793.js';

var fragmentModel_default$1="varying vec2 vUv;\nvarying vec3 vNormal;\nvarying vec3 vViewPosition;\n\nattribute vec3 aCenter;\nattribute vec3 toPosition;\nattribute vec3 toNormal;\nattribute float aRandom;\n\nuniform float u_progress;\n\n#include <common>\n\nmat4 rotation3d(vec3 axis, float angle) {\n  axis = normalize(axis);\n  float s = sin(angle);\n  float c = cos(angle);\n  float oc = 1.0 - c;\n\n  return mat4(\n      oc * axis.x * axis.x + c, oc * axis.x * axis.y - axis.z * s,\n      oc * axis.z * axis.x + axis.y * s, 0.0, oc * axis.x * axis.y + axis.z * s,\n      oc * axis.y * axis.y + c, oc * axis.y * axis.z - axis.x * s, 0.0,\n      oc * axis.z * axis.x - axis.y * s, oc * axis.y * axis.z + axis.x * s,\n      oc * axis.z * axis.z + c, 0.0, 0.0, 0.0, 0.0, 1.0);\n}\n\nvoid main() {\n  vUv = uv;\n\n  float progress = u_progress;\n  float sinProgress = sin(progress * PI);\n\n  vec3 pos = mix(position, toPosition, progress);\n  vec3 nor = mix(normal, toNormal, progress);\n\n  vNormal = normalMatrix * normalize(nor);\n\n  float prog = ((pos.y + 1.) / 2.) * 1.1;\n\n  float locprog = clamp((sinProgress - 0.9 * prog) / 0.2, 0., 1.);\n\n  vec3 transform = pos - aCenter;\n\n  transform += 3. * aRandom * nor * locprog;\n\n  transform *= (1.0 - locprog);\n\n  transform += aCenter;\n\n  mat4 rotation = rotation3d(vec3(0., 1., 0.), aRandom * (locprog)*PI * 3.);\n\n  transform = (rotation * vec4(transform, 1.)).xyz;\n\n  vec4 modelViewPosition = modelViewMatrix * vec4(transform, 1.0);\n\n  gl_Position = projectionMatrix * modelViewPosition;\n\n  vViewPosition = -modelViewPosition.xyz;\n}";

var fragmentModel_default="varying vec3 vNormal;\nvarying vec2 vUv;\nvarying vec3 vViewPosition;\nuniform sampler2D matcap;\nuniform sampler2D matcap2;\nuniform float u_progress;\nuniform vec3 m1Color;\nuniform vec3 m2Color;\n\nvoid main() {\n  vec3 viewDir = normalize(vViewPosition);\n  vec3 x = normalize(vec3(viewDir.z, 0.0, -viewDir.x));\n  vec3 y = cross(viewDir, x);\n  vec2 uv = vec2(dot(x, vNormal), dot(y, vNormal)) * 0.495 + 0.5;\n\n  float progress = abs(sin(u_progress));\n\n  vec3 matcapColor = texture2D(matcap, uv).rgb;\n  matcapColor = mix(matcapColor, m1Color, 0.5);\n  vec3 matcap2Color = texture2D(matcap2, uv).rgb;\n  matcap2Color = mix(matcap2Color, m2Color, 0.5);\n\n  vec3 color = vec3(matcapColor);\n  color = mix(color, matcap2Color, progress);\n\n  gl_FragColor = vec4(color, 1.0);\n}";

const {withAsyncContext:_withAsyncContext,defineComponent:_defineComponent$1} = await importShared('vue');

const {unref:_unref$1,normalizeProps:_normalizeProps$1,guardReactiveProps:_guardReactiveProps$1,createElementVNode:_createElementVNode$1,openBlock:_openBlock$1,createElementBlock:_createElementBlock} = await importShared('vue');

const _hoisted_1 = ["geometry"];
const {reactive: reactive$1,ref,watch} = await importShared('vue');

const THREE$1 = await importShared('three');
const _sfc_main$1 = /* @__PURE__ */ _defineComponent$1({
  __name: "fragmentModelCom",
  async setup(__props) {
    let __temp, __restore;
    const mergeGeometriesForMesh = (model) => {
      const gList = [];
      model.traverse((child) => {
        if (child instanceof THREE$1.Mesh) {
          child.geometry.deleteAttribute("uv");
          child.geometry.deleteAttribute("tangent");
          gList.push(child.geometry);
        }
      });
      return mergeGeometries(gList);
    };
    const guanyuModel = ([__temp, __restore] = _withAsyncContext(() => useGLTF(
      ("https://opensource.cdn.icegl.cn") + "/model/eCommerce/guanYu.glb"
    )), __temp = await __temp, __restore(), __temp).scene;
    const guanyuGeometries = mergeGeometriesForMesh(guanyuModel.children[0]);
    guanyuGeometries.rotateX(Math.PI / 2);
    guanyuGeometries.translate(0, -0.9, 0);
    const geometry = guanyuGeometries.clone().toNonIndexed();
    const planeModel = ([__temp, __restore] = _withAsyncContext(() => useGLTF(("https://opensource.cdn.icegl.cn") + "/model/industry4/modelDraco.glb")), __temp = await __temp, __restore(), __temp).scene;
    const planeGeometries = mergeGeometriesForMesh(planeModel.children[0]);
    planeGeometries.rotateX(-Math.PI / 2);
    planeGeometries.rotateY(Math.PI / 3);
    const toGeometry = planeGeometries.clone().toNonIndexed();
    const position = geometry.attributes.position.array;
    const length = geometry.attributes.position.count;
    const NextPosition = toGeometry.attributes.position.array;
    const NextNormal = toGeometry.attributes.normal.array;
    const NextLength = toGeometry.attributes.position.count;
    const randoms = new Float32Array(length);
    const centers = new Float32Array((length + 2) * 3);
    const toPositions = new Float32Array((length + 2) * 3);
    const toNormal = new Float32Array((length + 2) * 3);
    for (let index = 0; index < length; index += 3) {
      const random = Math.random() * 1;
      const clamp = index % NextLength;
      randoms[index] = random;
      randoms[index + 1] = random;
      randoms[index + 2] = random;
      const i3 = index * 3;
      const x = position[i3];
      const y = position[i3 + 1];
      const z = position[i3 + 2];
      const x1 = position[i3 + 3];
      const y1 = position[i3 + 4];
      const z1 = position[i3 + 5];
      const x2 = position[i3 + 6];
      const y2 = position[i3 + 7];
      const z2 = position[i3 + 8];
      const center = new THREE$1.Vector3(x + x1 + x2, y + y1 + y2, z + z1 + z2).divideScalar(3);
      centers.set([center.x, center.y, center.z], index * 3);
      centers.set([center.x, center.y, center.z], (index + 1) * 3);
      centers.set([center.x, center.y, center.z], (index + 2) * 3);
      const setVectors = (sourceArray, targetArray, clampX) => {
        const baseIndex = clampX * 3;
        for (let i = 0; i < 3; i++) {
          const offset = baseIndex + i * 3;
          targetArray.set([sourceArray[offset], sourceArray[offset + 1], sourceArray[offset + 2]], (clampX + i) * 3);
        }
      };
      setVectors(NextPosition, toPositions, clamp);
      setVectors(NextNormal, toNormal, clamp);
    }
    geometry.setAttribute("aRandom", new THREE$1.BufferAttribute(randoms, 1));
    geometry.setAttribute("aCenter", new THREE$1.BufferAttribute(centers, 3));
    geometry.setAttribute("toPosition", new THREE$1.BufferAttribute(toPositions, 3));
    geometry.setAttribute("toNormal", new THREE$1.BufferAttribute(toNormal, 3));
    console.log(geometry.attributes);
    const pTexture = ([__temp, __restore] = _withAsyncContext(() => useTexture("./plugins/visualArts/image/fragment512px.png")), __temp = await __temp, __restore(), __temp);
    const tsMaterialConfig = {
      uniforms: {
        u_progress: { value: -0.1 },
        matcap1: { value: pTexture },
        m1Color: {
          type: "v3",
          value: new THREE$1.Color("#ffc0fa")
        },
        matcap2: { value: pTexture },
        m2Color: {
          type: "v3",
          value: new THREE$1.Color("#bcd4ff")
        }
      },
      vertexShader: fragmentModel_default$1,
      fragmentShader: fragmentModel_default
    };
    const colors = reactive$1({
      c1: "#ffc0fa",
      c2: "#bcd4ff"
    });
    const speed = ref(0.5);
    const paneControl = new Pane({ title: "参数" });
    paneControl.addBinding(tsMaterialConfig.uniforms.u_progress, "value", {
      label: "变化量",
      min: -0.1,
      max: 1,
      step: 1e-3
    }).disabled = true;
    paneControl.addBinding(colors, "c1", {
      label: "颜色1st"
    });
    paneControl.addBinding(colors, "c2", {
      label: "颜色2rd"
    });
    paneControl.addBinding(speed, "value", {
      label: "速度",
      min: 1e-3,
      max: 1,
      step: 1e-3
    });
    watch(
      colors,
      (newValue) => {
        tsMaterialConfig.uniforms.m1Color.value.set(newValue.c1);
        tsMaterialConfig.uniforms.m2Color.value.set(newValue.c2);
      },
      { deep: true }
    );
    _l().onBeforeRender(({ elapsed }) => {
      tsMaterialConfig.uniforms.u_progress.value = (Math.sin(elapsed * speed.value) + 1) / 2;
      paneControl.refresh();
    });
    return (_ctx, _cache) => {
      return _openBlock$1(), _createElementBlock("TresMesh", { geometry: _unref$1(geometry) }, [
        _createElementVNode$1("TresShaderMaterial", _normalizeProps$1(_guardReactiveProps$1(tsMaterialConfig)), null, 16)
      ], 8, _hoisted_1);
    };
  }
});

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,unref:_unref,normalizeProps:_normalizeProps,guardReactiveProps:_guardReactiveProps,createVNode:_createVNode,Suspense:_Suspense,withCtx:_withCtx,openBlock:_openBlock,createBlock:_createBlock,resolveComponent:_resolveComponent} = await importShared('vue');

const THREE = await importShared('three');

const {reactive} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "fragmentModel",
  setup(__props) {
    const controlsState = reactive({
      enableDamping: true,
      enableZoom: true,
      autoRotate: true,
      enablePan: true,
      enableRotate: true
    });
    const tcConfig = {
      clearColor: "#000000",
      windowSize: true,
      toneMapping: THREE.ACESFilmicToneMapping,
      toneMappingExposure: 0.8
    };
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createBlock(_component_TresCanvas, _normalizeProps(_guardReactiveProps(tcConfig)), {
        default: _withCtx(() => [
          _cache[0] || (_cache[0] = _createElementVNode("TresPerspectiveCamera", {
            position: [0, 2, 8],
            fov: 45,
            near: 0.1,
            far: 1e3
          }, null, -1)),
          _createVNode(_unref(Kk), _normalizeProps(_guardReactiveProps(controlsState)), null, 16),
          _cache[1] || (_cache[1] = _createElementVNode("TresAmbientLight", { intensity: 2 }, null, -1)),
          (_openBlock(), _createBlock(_Suspense, null, {
            default: _withCtx(() => [
              _createVNode(_sfc_main$1)
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
//# sourceMappingURL=fragmentModel.B2OEHDUH1767105581793.js.map
