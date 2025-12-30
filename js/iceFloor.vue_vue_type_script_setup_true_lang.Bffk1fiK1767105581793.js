import { importShared } from './index.BxB45aCK1767105581793.js';
import { useTexture$1 as useTexture } from './customShaderMaterial.vue_vue_type_script_setup_true_lang.rDMIDGqx1767105581793.js';
import './index.vue_vue_type_script_setup_true_lang.D7-hpzmy1767105581793.js';

var vertex_default="uniform float uParallaxDistance;\n\nvarying vec2 vParallax;\nvarying vec2 vUv;\n\nvoid main() {\n\n  vUv = uv;\n\n  vec3 pos = position;\n  vec4 wPos = modelMatrix * vec4(pos, 1.0);\n\n  mat3 tbn = mat3(vec3(1.,0,0), vec3(0,0.,-1.), vec3(0.,1.,0.));\n  tbn = transpose(tbn);\n\n  vec3 viewDir = normalize(wPos.xyz - cameraPosition);\n  vec3 tbnViewDir = tbn * viewDir;\n\n  vParallax = tbnViewDir.xy;\n  vParallax *= uParallaxDistance / dot(-tbnViewDir, vec3(0.0,0.0,1.0));\n\n  gl_Position = projectionMatrix * viewMatrix * wPos;\n\n}";

var fragment_default="uniform sampler2D uCracksMap;\nuniform sampler2D uTrailMap;\nuniform sampler2D uPerlin;\nuniform vec3 uTintColor;   \nuniform float uTintStrength; \n\nvarying vec2 vParallax;\nvarying vec2 vUv;\n\nvoid main() {\n\n  float perlin = texture(uPerlin, vUv).r;\n  float perlin2 = texture(uPerlin, vUv * 10.).r;\n  vec3 trail = texture(uTrailMap, vUv).rgb;\n  float cracks = texture(uCracksMap, vUv * 4.).r;\n  float nomalization = 1.0;\n\n  vec3 colorBlue = vec3(0.0,0.2,0.25);\n  vec3 colorDeepBlue = vec3(0.0,0.01,0.03);\n  vec3 colorGreen = vec3(0.1,0.2,0.35);\n\n  float accumulateFrosted = 0.;\n\n  for (int i = 0; i < 50; i++) {\n    float aplitude = float(70 - i) / 1.;\n    vec2 uv = vUv * 4. + vParallax * 0.002 * float(i + 1);\n\n    float currCrack = (1. - texture(uCracksMap, uv ).r) * aplitude;\n\n    float currTrail = texture(uTrailMap, vUv + vParallax * 0.0025 * float(i + 1)).r;\n\n    currCrack = currCrack * step(0.7, 1. - pow(currTrail,0.7));\n\n    cracks += currCrack;\n    nomalization += aplitude;\n\n    accumulateFrosted += currTrail * aplitude;\n  }\n  cracks /= nomalization;\n  accumulateFrosted /= nomalization;\n  cracks += pow(1. - texture(uCracksMap, vUv * 4.).r, 3.) * 3. * step(0.92, 1. - pow(trail.r,0.6));\n  \n  vec3 cracksParallax = texture(uCracksMap, vUv * 2. + vParallax * 0.1).rgb;\n\n  vec3 frosted = colorBlue * 3. + perlin * 0.6 + perlin2 * 0.6;\n  vec3 cracksColor = mix(colorBlue, colorGreen, pow(cracks,1.) * 1.);\n  cracksColor += pow(cracks,1.) * 2.;\n  cracksColor *= perlin * 8. * colorBlue;\n  cracksColor += pow(cracks,1.) * 0.5;\n\n  vec3 prxCracksColor = mix(colorDeepBlue, colorBlue, pow(1. - cracksParallax.r,3.) * 10.);\n  prxCracksColor *= perlin;\n  \n  cracksColor = mix(cracksColor, prxCracksColor, 0.3);\n\n  vec3 deepColor = mix(vec3(0.1,0.7,0.7),vec3(0., 0.3, 1.), 1. - pow(accumulateFrosted,1.5));\n  cracksColor = mix(cracksColor, deepColor, pow(accumulateFrosted,1.5));\n  vec3 color = mix(cracksColor, frosted, pow(trail.r,0.5) );\n\n  \n  color = mix(color, uTintColor, uTintStrength);\n\n  vec2 uvCentered = vUv - 0.5;\n  float dist = length(uvCentered * 2.0); \n  float edgeFade = smoothstep(0.6, 1.0, dist); \n\n  float alpha = mix(1.0, 0.0, edgeFade);\n\n  if (alpha < 0.01) discard;\n\n  gl_FragColor = vec4(color, alpha);\n\n  #include <tonemapping_fragment>\n  #include <colorspace_fragment>\n}";

const {withAsyncContext:_withAsyncContext,defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,unref:_unref,openBlock:_openBlock,createElementBlock:_createElementBlock} = await importShared('vue');

const _hoisted_1 = ["rotate-x"];
const _hoisted_2 = ["vertexShader", "fragmentShader"];
const THREE = await importShared('three');

const {watch} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "iceFloor",
  props: {
    uParallaxDistance: {
      default: 1
      // 视觉差强度
    },
    uTintColor: {
      default: "#666666"
      // 偏色，默认白色
    },
    uTintStrength: {
      default: 0.1
      // 偏色强度
    },
    uStyle: {
      default: 1
    }
  },
  async setup(__props) {
    let __temp, __restore;
    const props = __props;
    const imgList = Array.from({ length: 7 }, (_, i) => `./plugins/water/images/textures/${i + 1}.png`);
    imgList.push("./plugins/water/images/textures/super-perlin.png");
    const pTexture = ([__temp, __restore] = _withAsyncContext(() => useTexture(imgList)), __temp = await __temp, __restore(), __temp);
    pTexture.forEach((texture) => {
      texture.colorSpace = THREE.LinearSRGBColorSpace;
      texture.wrapS = THREE.RepeatWrapping;
      texture.wrapT = THREE.RepeatWrapping;
      texture.magFilter = THREE.LinearFilter;
      texture.minFilter = THREE.LinearMipmapLinearFilter;
    });
    const uniforms = {
      uTrailMap: { value: null },
      uCracksMap: new THREE.Uniform(pTexture[props.uStyle]),
      uPerlin: new THREE.Uniform(pTexture[7]),
      uParallaxDistance: { value: props.uParallaxDistance },
      //  视觉差
      uTintColor: { value: new THREE.Color(props.uTintColor) },
      // 偏色，默认白色
      uTintStrength: { value: props.uTintStrength }
      // 偏色强
    };
    watch(
      () => [props.uParallaxDistance, props.uTintColor, props.uTintStrength, props.uStyle],
      ([newParallaxDistance, newTintColor, newTintStrength, newStyle]) => {
        uniforms.uParallaxDistance.value = newParallaxDistance;
        uniforms.uTintColor.value.set(newTintColor);
        uniforms.uTintStrength.value = newTintStrength;
        uniforms.uCracksMap.value = pTexture[newStyle];
      }
    );
    return (_ctx, _cache) => {
      return _openBlock(), _createElementBlock("TresGroup", null, [
        _createElementVNode("TresMesh", {
          "rotate-x": -Math.PI / 2
        }, [
          _cache[0] || (_cache[0] = _createElementVNode("TresPlaneGeometry", { args: [40, 40] }, null, -1)),
          _createElementVNode("TresShaderMaterial", {
            vertexShader: _unref(vertex_default),
            fragmentShader: _unref(fragment_default),
            transparent: "",
            uniforms
          }, null, 8, _hoisted_2)
        ], 8, _hoisted_1)
      ]);
    };
  }
});

export { _sfc_main };
//# sourceMappingURL=iceFloor.vue_vue_type_script_setup_true_lang.Bffk1fiK1767105581793.js.map
