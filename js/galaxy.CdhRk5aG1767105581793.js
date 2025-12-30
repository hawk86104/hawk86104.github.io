import { importShared, Kk } from './index.BxB45aCK1767105581793.js';
import { It, Kt } from './tresleches.B9l4RiSE1767105581793.js';

var galaxyVertex_default="uniform float uSize;\nuniform float uTime;\n\nattribute float aScale;\nattribute vec3 aRandomness;\n\nvarying vec3 vColor;\n\nvoid main() {\n    vec4 modelPosition = modelMatrix * vec4(position, 1.0);\n\n    \n    float angle = atan(modelPosition.x, modelPosition.z);\n    float distanceToCenter = length(modelPosition.xz);\n    float angleOffset = (1.0 / distanceToCenter) * uTime * 0.2;\n    angle += angleOffset;\n\n    modelPosition.x = distanceToCenter * cos(angle);\n    modelPosition.z = distanceToCenter * sin(angle);\n\n    \n    modelPosition.xyz += aRandomness;\n\n    vec4 viewPosition = viewMatrix * modelPosition;\n    vec4 projectedPosition = projectionMatrix * viewPosition;\n    gl_Position = projectedPosition;\n\n    gl_PointSize = uSize * aScale;\n\n    \n    gl_PointSize *= ( 1.0 / - viewPosition.z);\n\n    \n    vColor = color;\n\n}";

var galaxyFragment_default="varying vec3 vColor;\n\nvoid main()\n{\n    \n    float strength = distance(gl_PointCoord, vec2(0.5));\n    strength = 1.0 - strength;\n    strength = pow(strength, 5.0);\n\n    \n    vec3 color = mix(vec3(0.0), vColor, strength);\n    gl_FragColor = vec4(color, 1.0);\n}";

const {defineComponent:_defineComponent} = await importShared('vue');

const {unref:_unref,createVNode:_createVNode,createElementVNode:_createElementVNode,normalizeProps:_normalizeProps,guardReactiveProps:_guardReactiveProps,resolveComponent:_resolveComponent,mergeProps:_mergeProps,withCtx:_withCtx,Fragment:_Fragment,openBlock:_openBlock,createElementBlock:_createElementBlock} = await importShared('vue');

const _hoisted_1 = ["position", "a-scale", "color", "a-randomness"];
const {BasicShadowMap,SRGBColorSpace,NoToneMapping,Color,AdditiveBlending,BufferAttribute} = await importShared('three');
const {ref,watch} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "galaxy",
  setup(__props) {
    const gl = {
      clearColor: "black",
      shadows: true,
      alpha: false,
      shadowMapType: BasicShadowMap,
      outputColorSpace: SRGBColorSpace,
      toneMapping: NoToneMapping,
      windowSize: true
    };
    const parameters = {
      count: 3e4,
      size: 20,
      radius: 5,
      branches: 5,
      spin: 4,
      randomness: 0.13,
      randomnessPower: 7.5,
      insideColor: "#b5f28d",
      outsideColor: "#1b3984"
    };
    const colorInside = new Color(parameters.insideColor);
    const colorOutside = new Color(parameters.outsideColor);
    const positions = new Float32Array(parameters.count * 3);
    const colors = new Float32Array(parameters.count * 3);
    const scales = new Float32Array(parameters.count);
    const randomnessArray = new Float32Array(parameters.count * 3);
    for (let i = 0; i < parameters.count; i++) {
      const i3 = i * 3;
      const radius2 = Math.random() * parameters.radius;
      const branchAngle = i % parameters.branches * Math.PI * 2 / parameters.branches;
      positions[i3] = Math.cos(branchAngle) * radius2;
      positions[i3 + 1] = 0;
      positions[i3 + 2] = Math.sin(branchAngle) * radius2;
      const randomX = Math.random() ** parameters.randomnessPower * (Math.random() < 0.5 ? -1 : 1);
      const randomY = Math.random() ** parameters.randomnessPower * (Math.random() < 0.5 ? -1 : 1);
      const randomZ = Math.random() ** parameters.randomnessPower * (Math.random() < 0.5 ? -1 : 1);
      randomnessArray[i3] = randomX;
      randomnessArray[i3 + 1] = randomY;
      randomnessArray[i3 + 2] = randomZ;
      const mixedColor = colorInside.clone();
      mixedColor.lerp(colorOutside, radius2 / parameters.radius);
      colors[i3 + 0] = mixedColor.r;
      colors[i3 + 1] = mixedColor.g;
      colors[i3 + 2] = mixedColor.b;
      scales[i] = Math.random();
    }
    const shader = {
      transparent: true,
      depthWrite: false,
      blending: AdditiveBlending,
      vertexColors: true,
      vertexShader: galaxyVertex_default,
      fragmentShader: galaxyFragment_default,
      uniforms: {
        uTime: { value: 0 },
        uSize: {
          value: parameters.size
        }
      }
    };
    function updateGalaxy() {
      if (bufferRef.value) {
        const colorInside2 = new Color(parameters.insideColor);
        const colorOutside2 = new Color(parameters.outsideColor);
        const positions2 = new Float32Array(parameters.count * 3);
        const colors2 = new Float32Array(parameters.count * 3);
        const scales2 = new Float32Array(parameters.count);
        const randomness2 = new Float32Array(parameters.count * 3);
        for (let i = 0; i < parameters.count; i++) {
          const i3 = i * 3;
          const radius2 = Math.random() * parameters.radius;
          const branchAngle = i % parameters.branches * Math.PI * 2 / parameters.branches;
          positions2[i3] = Math.cos(branchAngle) * radius2;
          positions2[i3 + 1] = 0;
          positions2[i3 + 2] = Math.sin(branchAngle) * radius2;
          const randomX = Math.random() ** parameters.randomnessPower * (Math.random() < 0.5 ? -1 : 1);
          const randomY = Math.random() ** parameters.randomnessPower * (Math.random() < 0.5 ? -1 : 1);
          const randomZ = Math.random() ** parameters.randomnessPower * (Math.random() < 0.5 ? -1 : 1);
          randomness2[i3] = randomX;
          randomness2[i3 + 1] = randomY;
          randomness2[i3 + 2] = randomZ;
          const mixedColor = colorInside2.clone();
          mixedColor.lerp(colorOutside2, radius2 / parameters.radius);
          colors2[i3 + 0] = mixedColor.r;
          colors2[i3 + 1] = mixedColor.g;
          colors2[i3 + 2] = mixedColor.b;
          scales2[i] = Math.random();
        }
        bufferRef.value.geometry.setAttribute("position", new BufferAttribute(positions2, 3));
        bufferRef.value.geometry.setAttribute("aRandomness", new BufferAttribute(randomness2, 3));
        bufferRef.value.geometry.setAttribute("color", new BufferAttribute(colors2, 3));
        bufferRef.value.geometry.setAttribute("aScale", new BufferAttribute(scales2, 1));
      }
    }
    const bufferRef = ref(null);
    const onLoop = ({ elapsed }) => {
      if (bufferRef.value) {
        bufferRef.value.material.uniforms.uTime.value = elapsed;
      }
    };
    const { count, size, radius, branches, spin, randomness, randomnessPower, insideColor, outsideColor } = It({
      count: {
        value: 3e4,
        min: 0,
        max: 1e5,
        step: 1
      },
      size: {
        value: 20,
        min: 0.01,
        max: 40,
        step: 1
      },
      radius: {
        value: 5,
        min: 0.1,
        max: 20,
        step: 0.01
      },
      branches: {
        value: 5,
        min: 2,
        max: 10,
        step: 1
      },
      spin: {
        value: 4,
        min: -5,
        max: 5,
        step: 0.01
      },
      randomness: {
        value: 0.13,
        min: 0.1,
        max: 0.2,
        step: 0.01
      },
      randomnessPower: {
        value: 7.5,
        min: 1,
        max: 10,
        step: 1e-3
      },
      insideColor: "#b5f28d",
      outsideColor: "#1b3984"
    });
    watch([count.value, size.value, radius.value, branches.value, spin.value, randomness.value, randomnessPower.value, insideColor.value, outsideColor.value], (state) => {
      state.forEach((value, index) => {
        parameters[Object.keys(parameters)[index]] = value.value;
      });
      updateGalaxy();
    });
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createElementBlock(_Fragment, null, [
        _createVNode(_unref(Kt)),
        _createVNode(_component_TresCanvas, _mergeProps(gl, { onLoop }), {
          default: _withCtx(() => [
            _cache[0] || (_cache[0] = _createElementVNode("TresPerspectiveCamera", { position: [3, 3, 3] }, null, -1)),
            _createElementVNode("TresPoints", {
              ref_key: "bufferRef",
              ref: bufferRef
            }, [
              _createElementVNode("TresBufferGeometry", {
                position: [_unref(positions), 3],
                "a-scale": [_unref(scales), 1],
                color: [_unref(colors), 3],
                "a-randomness": [_unref(randomnessArray), 3]
              }, null, 8, _hoisted_1),
              _createElementVNode("TresShaderMaterial", _normalizeProps(_guardReactiveProps(shader)), null, 16)
            ], 512),
            _createVNode(_unref(Kk))
          ]),
          _: 1
        }, 16)
      ], 64);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=galaxy.CdhRk5aG1767105581793.js.map
