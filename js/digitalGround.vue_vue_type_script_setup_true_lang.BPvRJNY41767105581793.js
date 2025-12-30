import { importShared, rz, _l } from './index.BxB45aCK1767105581793.js';

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,normalizeProps:_normalizeProps,guardReactiveProps:_guardReactiveProps,openBlock:_openBlock,createElementBlock:_createElementBlock} = await importShared('vue');

const _hoisted_1 = ["rotateX"];
const _hoisted_2 = ["args"];
const {watch} = await importShared('vue');

const THREE = await importShared('three');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "digitalGround",
  props: {
    size: { default: 10 },
    speed: { default: 1 },
    color: { default: "#FFFFFF" }
  },
  setup(__props) {
    const props = __props;
    const { textures: pTexture, isLoading } = rz([
      "./plugins/floor/image/digitalGround1.png",
      "./plugins/floor/image/digitalGround2.png",
      "./plugins/floor/image/digitalGround3.png",
      "./plugins/floor/image/digitalGround4.png"
    ]);
    const tsmConfig = {
      uniforms: {
        time: {
          value: 0
        },
        radius: {
          value: props.size
        },
        uColor: {
          value: new THREE.Color(props.color)
        },
        texture0: {
          value: null
        },
        texture1: {
          value: null
        },
        texture2: {
          value: null
        },
        texture3: {
          value: null
        }
      },
      vertexShader: `
        varying vec3 vPosition;
        varying vec2 vUv;
        void main(){
            vPosition = position;
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
        }
    `,
      fragmentShader: `
        uniform float time;
        uniform float radius;

        uniform sampler2D texture0;
        uniform sampler2D texture1;
        uniform sampler2D texture2;
        uniform sampler2D texture3;

        varying vec3 vPosition;
        uniform vec3 uColor;
        varying vec2 vUv;

        float wave(float a, float l, float s, float second, float val) {
            float PI = 3.141592653;
            float wave = a * sin(- val * 2.0 * PI / l + second * s * 2.0 * PI / l);
            return (wave + 1.0) / 2.0;
        }
        void main(){
            vec4 basceColor = vec4(uColor, 1.0);
            vec4 back = texture2D( texture0, vUv * 16.0);

            vec4 ori1 = texture2D( texture1, vUv * 4.0); // 电子元件
            vec4 ori2 = texture2D( texture2, vUv * 16.0 ); // 点
            vec4 ori3 = texture2D( texture3, vUv * 16.0 ); // 网格

            float length = length( vec2(vPosition.x, vPosition.y) );
            // 应用波函数蒙版
            float flag1 = wave(1.0, radius / 2.0, 45.0, time, length);
            if (flag1 < 0.5) {
                flag1 = 0.0;
            }
            ori1.a = ori1.a * (flag1 * 0.8 + 0.2);
            float flag2 = wave(1.0, radius / 3.0, 30.0, time, length);
            ori2.a = ori2.a * (flag2 * 0.8 + 0.2);
            float flag3 = wave(1.0, 60.0, 20.0, time, length);
            ori3.a = ori3.a * (flag3 * 2.0 - 1.5);
            // 应用蒙版
            float alpha = clamp(ori1.a + ori2.a + ori3.a + back.a * 0.01, 0.0, 1.0);
            basceColor.a = alpha*2.0;

            gl_FragColor = basceColor * clamp((2.0 - (length * 2.0 / radius)), 0.0, 1.0);
        }
    `,
      side: THREE.DoubleSide,
      transparent: true
    };
    watch([pTexture, isLoading], ([pTexture2, isLoading2]) => {
      if (pTexture2 && !isLoading2) {
        for (let i = 0; i < pTexture2.length; i++) {
          pTexture2[i].colorSpace = THREE.LinearSRGBColorSpace;
          pTexture2[i].wrapS = THREE.RepeatWrapping;
          pTexture2[i].wrapT = THREE.RepeatWrapping;
          pTexture2[i].magFilter = THREE.LinearFilter;
          pTexture2[i].minFilter = THREE.LinearMipmapLinearFilter;
        }
        tsmConfig.uniforms.texture0.value = pTexture2[0];
        tsmConfig.uniforms.texture1.value = pTexture2[1];
        tsmConfig.uniforms.texture2.value = pTexture2[2];
        tsmConfig.uniforms.texture3.value = pTexture2[3];
      }
    });
    watch(
      () => props.color,
      (newVal) => {
        tsmConfig.uniforms.uColor.value = new THREE.Color(newVal);
      }
    );
    const { onBeforeRender } = _l();
    onBeforeRender(({ elapsed }) => {
      tsmConfig.uniforms.time.value = elapsed / 10 * props.speed;
    });
    return (_ctx, _cache) => {
      return _openBlock(), _createElementBlock("TresGroup", null, [
        _createElementVNode("TresMesh", {
          rotateX: -Math.PI / 2
        }, [
          _createElementVNode("TresCircleGeometry", {
            args: [_ctx.size]
          }, null, 8, _hoisted_2),
          _createElementVNode("TresShaderMaterial", _normalizeProps(_guardReactiveProps(tsmConfig)), null, 16)
        ], 8, _hoisted_1)
      ]);
    };
  }
});

export { _sfc_main };
//# sourceMappingURL=digitalGround.vue_vue_type_script_setup_true_lang.BPvRJNY41767105581793.js.map
