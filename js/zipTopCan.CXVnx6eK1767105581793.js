import { importShared, zr, _l, Kk, tk } from './index.BxB45aCK1767105581793.js';
import { _sfc_main$6 as _sfc_main$3 } from './generalFont.vue_vue_type_script_setup_true_lang.DqoG1H6g1767105581793.js';
import './default.vue_vue_type_script_setup_true_lang.DQGKkIwV1767105581793.js';
import './three-mesh-ui.module.CjQAT-M_1767105581793.js';
import './domPanel.vue_vue_type_style_index_0_lang.dV59iE041767105581793.js';
import { gsapWithCSS } from './index.Dxfioss_1767105581793.js';
import './customShaderMaterial.vue_vue_type_script_setup_true_lang.rDMIDGqx1767105581793.js';
import './index.vue_vue_type_script_setup_true_lang.D7-hpzmy1767105581793.js';
import { useGLTF } from './index.CTrIPOkZ1767105581793.js';

const noise = `
//	Classic Perlin 3D Noise 
//	by Stefan Gustavson
//
vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}
vec4 fade(vec4 t) {return t*t*t*(t*(t*6.0-15.0)+10.0);}

float cnoise(vec4 P){
  ;
  vec4 Pi0 = floor(P); // Integer part for indexing
  vec4 Pi1 = Pi0 + 1.0; // Integer part + 1
  Pi0 = mod(Pi0, 289.0);
  Pi1 = mod(Pi1, 289.0);
  vec4 Pf0 = fract(P); // Fractional part for interpolation
  vec4 Pf1 = Pf0 - 1.0; // Fractional part - 1.0
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
  vec4 iy = vec4(Pi0.yy, Pi1.yy);
  vec4 iz0 = vec4(Pi0.zzzz);
  vec4 iz1 = vec4(Pi1.zzzz);
  vec4 iw0 = vec4(Pi0.wwww);
  vec4 iw1 = vec4(Pi1.wwww);

  vec4 ixy = permute(permute(ix) + iy);
  vec4 ixy0 = permute(ixy + iz0);
  vec4 ixy1 = permute(ixy + iz1);
  vec4 ixy00 = permute(ixy0 + iw0);
  vec4 ixy01 = permute(ixy0 + iw1);
  vec4 ixy10 = permute(ixy1 + iw0);
  vec4 ixy11 = permute(ixy1 + iw1);

  vec4 gx00 = ixy00 / 7.0;
  vec4 gy00 = floor(gx00) / 7.0;
  vec4 gz00 = floor(gy00) / 6.0;
  gx00 = fract(gx00) - 0.5;
  gy00 = fract(gy00) - 0.5;
  gz00 = fract(gz00) - 0.5;
  vec4 gw00 = vec4(0.75) - abs(gx00) - abs(gy00) - abs(gz00);
  vec4 sw00 = step(gw00, vec4(0.0));
  gx00 -= sw00 * (step(0.0, gx00) - 0.5);
  gy00 -= sw00 * (step(0.0, gy00) - 0.5);

  vec4 gx01 = ixy01 / 7.0;
  vec4 gy01 = floor(gx01) / 7.0;
  vec4 gz01 = floor(gy01) / 6.0;
  gx01 = fract(gx01) - 0.5;
  gy01 = fract(gy01) - 0.5;
  gz01 = fract(gz01) - 0.5;
  vec4 gw01 = vec4(0.75) - abs(gx01) - abs(gy01) - abs(gz01);
  vec4 sw01 = step(gw01, vec4(0.0));
  gx01 -= sw01 * (step(0.0, gx01) - 0.5);
  gy01 -= sw01 * (step(0.0, gy01) - 0.5);

  vec4 gx10 = ixy10 / 7.0;
  vec4 gy10 = floor(gx10) / 7.0;
  vec4 gz10 = floor(gy10) / 6.0;
  gx10 = fract(gx10) - 0.5;
  gy10 = fract(gy10) - 0.5;
  gz10 = fract(gz10) - 0.5;
  vec4 gw10 = vec4(0.75) - abs(gx10) - abs(gy10) - abs(gz10);
  vec4 sw10 = step(gw10, vec4(0.0));
  gx10 -= sw10 * (step(0.0, gx10) - 0.5);
  gy10 -= sw10 * (step(0.0, gy10) - 0.5);

  vec4 gx11 = ixy11 / 7.0;
  vec4 gy11 = floor(gx11) / 7.0;
  vec4 gz11 = floor(gy11) / 6.0;
  gx11 = fract(gx11) - 0.5;
  gy11 = fract(gy11) - 0.5;
  gz11 = fract(gz11) - 0.5;
  vec4 gw11 = vec4(0.75) - abs(gx11) - abs(gy11) - abs(gz11);
  vec4 sw11 = step(gw11, vec4(0.0));
  gx11 -= sw11 * (step(0.0, gx11) - 0.5);
  gy11 -= sw11 * (step(0.0, gy11) - 0.5);

  vec4 g0000 = vec4(gx00.x,gy00.x,gz00.x,gw00.x);
  vec4 g1000 = vec4(gx00.y,gy00.y,gz00.y,gw00.y);
  vec4 g0100 = vec4(gx00.z,gy00.z,gz00.z,gw00.z);
  vec4 g1100 = vec4(gx00.w,gy00.w,gz00.w,gw00.w);
  vec4 g0010 = vec4(gx10.x,gy10.x,gz10.x,gw10.x);
  vec4 g1010 = vec4(gx10.y,gy10.y,gz10.y,gw10.y);
  vec4 g0110 = vec4(gx10.z,gy10.z,gz10.z,gw10.z);
  vec4 g1110 = vec4(gx10.w,gy10.w,gz10.w,gw10.w);
  vec4 g0001 = vec4(gx01.x,gy01.x,gz01.x,gw01.x);
  vec4 g1001 = vec4(gx01.y,gy01.y,gz01.y,gw01.y);
  vec4 g0101 = vec4(gx01.z,gy01.z,gz01.z,gw01.z);
  vec4 g1101 = vec4(gx01.w,gy01.w,gz01.w,gw01.w);
  vec4 g0011 = vec4(gx11.x,gy11.x,gz11.x,gw11.x);
  vec4 g1011 = vec4(gx11.y,gy11.y,gz11.y,gw11.y);
  vec4 g0111 = vec4(gx11.z,gy11.z,gz11.z,gw11.z);
  vec4 g1111 = vec4(gx11.w,gy11.w,gz11.w,gw11.w);

  vec4 norm00 = taylorInvSqrt(vec4(dot(g0000, g0000), dot(g0100, g0100), dot(g1000, g1000), dot(g1100, g1100)));
  g0000 *= norm00.x;
  g0100 *= norm00.y;
  g1000 *= norm00.z;
  g1100 *= norm00.w;

  vec4 norm01 = taylorInvSqrt(vec4(dot(g0001, g0001), dot(g0101, g0101), dot(g1001, g1001), dot(g1101, g1101)));
  g0001 *= norm01.x;
  g0101 *= norm01.y;
  g1001 *= norm01.z;
  g1101 *= norm01.w;

  vec4 norm10 = taylorInvSqrt(vec4(dot(g0010, g0010), dot(g0110, g0110), dot(g1010, g1010), dot(g1110, g1110)));
  g0010 *= norm10.x;
  g0110 *= norm10.y;
  g1010 *= norm10.z;
  g1110 *= norm10.w;

  vec4 norm11 = taylorInvSqrt(vec4(dot(g0011, g0011), dot(g0111, g0111), dot(g1011, g1011), dot(g1111, g1111)));
  g0011 *= norm11.x;
  g0111 *= norm11.y;
  g1011 *= norm11.z;
  g1111 *= norm11.w;

  float n0000 = dot(g0000, Pf0);
  float n1000 = dot(g1000, vec4(Pf1.x, Pf0.yzw));
  float n0100 = dot(g0100, vec4(Pf0.x, Pf1.y, Pf0.zw));
  float n1100 = dot(g1100, vec4(Pf1.xy, Pf0.zw));
  float n0010 = dot(g0010, vec4(Pf0.xy, Pf1.z, Pf0.w));
  float n1010 = dot(g1010, vec4(Pf1.x, Pf0.y, Pf1.z, Pf0.w));
  float n0110 = dot(g0110, vec4(Pf0.x, Pf1.yz, Pf0.w));
  float n1110 = dot(g1110, vec4(Pf1.xyz, Pf0.w));
  float n0001 = dot(g0001, vec4(Pf0.xyz, Pf1.w));
  float n1001 = dot(g1001, vec4(Pf1.x, Pf0.yz, Pf1.w));
  float n0101 = dot(g0101, vec4(Pf0.x, Pf1.y, Pf0.z, Pf1.w));
  float n1101 = dot(g1101, vec4(Pf1.xy, Pf0.z, Pf1.w));
  float n0011 = dot(g0011, vec4(Pf0.xy, Pf1.zw));
  float n1011 = dot(g1011, vec4(Pf1.x, Pf0.y, Pf1.zw));
  float n0111 = dot(g0111, vec4(Pf0.x, Pf1.yzw));
  float n1111 = dot(g1111, Pf1);

  vec4 fade_xyzw = fade(Pf0);
  vec4 n_0w = mix(vec4(n0000, n1000, n0100, n1100), vec4(n0001, n1001, n0101, n1101), fade_xyzw.w);
  vec4 n_1w = mix(vec4(n0010, n1010, n0110, n1110), vec4(n0011, n1011, n0111, n1111), fade_xyzw.w);
  vec4 n_zw = mix(n_0w, n_1w, fade_xyzw.z);
  vec2 n_yzw = mix(n_zw.xy, n_zw.zw, fade_xyzw.y);
  float n_xyzw = mix(n_yzw.x, n_yzw.y, fade_xyzw.x);
  return 2.2 * n_xyzw;
}
`;

const colors = [0x8c75ff, 0x5cffab, 0xf74a8a, 0x3df2f2];

const {defineComponent:_defineComponent$2} = await importShared('vue');

const {unref:_unref$2,createElementVNode:_createElementVNode$2,normalizeProps:_normalizeProps$1,guardReactiveProps:_guardReactiveProps$1,openBlock:_openBlock$2,createElementBlock:_createElementBlock$2} = await importShared('vue');

const _hoisted_1$1 = ["args"];
const THREE$2 = await importShared('three');
const _sfc_main$2 = /* @__PURE__ */ _defineComponent$2({
  __name: "background",
  setup(__props, { expose: __expose }) {
    const { sizes } = zr();
    let colorIndex = 0;
    const tsMaterialConfig = {
      uniforms: {
        u_time: { value: 0 },
        u_progress: { value: 0 },
        u_aspect: { value: sizes.width.value / sizes.height.value },
        u_color: { value: new THREE$2.Color(colors[colorIndex]) }
      },
      vertexShader: `
		varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
		`,
      fragmentShader: `
	uniform float u_time;
    uniform float u_progress;
    uniform float u_aspect;
    uniform vec3 u_color;
    varying vec2 vUv;
    #define PI 3.14159265
    ${noise}

    void main() {
        vec2 newUv = (vUv - vec2(0.5)) * vec2(u_aspect,1.);
        float dist = length(newUv);
        float density = 1.8 - dist;
        float noise = cnoise(vec4(newUv*40.*density, u_time, 1.));
        float grain = (fract(sin(dot(vUv, vec2(12.9898,78.233)*2000.0)) * 43758.5453));
        
        float facets = noise*2.;
        float dots = smoothstep(0.1, 0.15, noise);
        float n = facets * dots;
        n = step(.2,facets)*dots;
        n = 1. - n;

        float radius = 1.5;
        float outerProgress = clamp(1.1*u_progress, 0., 1.);
        float innerProgress = clamp(1.1*u_progress - 0.05, 0., 1.);
  
        float innerCircle = 1. - smoothstep((innerProgress-0.4)*radius, innerProgress*radius, dist);
        float outerCircle = 1. - smoothstep((outerProgress-0.1)*radius, innerProgress*radius, dist);
  
        float displacement = outerCircle-innerCircle;
        
        float grainStrength = 0.3;
        vec3 final = vec3(displacement-(n+noise)) - vec3(grain*grainStrength);

        gl_FragColor = vec4(final, 1.0);
        gl_FragColor.rgb*=u_color*2.;

        #include <colorspace_fragment>
    }
		`
    };
    function onClick() {
      if (++colorIndex >= colors.length) {
        colorIndex = 0;
      }
      console.log("backgroud colorIndex", colorIndex);
      tsMaterialConfig.uniforms.u_color.value = new THREE$2.Color(colors[colorIndex]);
      const uprogress = tsMaterialConfig.uniforms.u_progress;
      gsapWithCSS.killTweensOf(uprogress);
      uprogress.value = 0;
      gsapWithCSS.to(uprogress, {
        duration: 5,
        ease: "power1.out",
        value: 1
      });
    }
    const { onBeforeRender } = _l();
    onBeforeRender(({ elapsed }) => {
      if (tsMaterialConfig) {
        tsMaterialConfig.uniforms.u_time.value = elapsed;
      }
    });
    __expose({
      onClick
    });
    return (_ctx, _cache) => {
      return _openBlock$2(), _createElementBlock$2("TresMesh", null, [
        _createElementVNode$2("TresPlaneGeometry", {
          args: [_unref$2(sizes).width.value / 50, _unref$2(sizes).height.value / 50]
        }, null, 8, _hoisted_1$1),
        _createElementVNode$2("TresShaderMaterial", _normalizeProps$1(_guardReactiveProps$1(tsMaterialConfig)), null, 16)
      ]);
    };
  }
});

const {defineComponent:_defineComponent$1} = await importShared('vue');

const {unref:_unref$1,createElementVNode:_createElementVNode$1,openBlock:_openBlock$1,createElementBlock:_createElementBlock$1,createCommentVNode:_createCommentVNode} = await importShared('vue');

const _hoisted_1 = ["rotation", "position"];
const _hoisted_2 = ["rotation"];
const _hoisted_3 = ["geometry", "material"];
const _hoisted_4 = ["geometry", "material"];
const THREE$1 = await importShared('three');
const {ref: ref$1,onMounted} = await importShared('vue');

const _sfc_main$1 = /* @__PURE__ */ _defineComponent$1({
  __name: "model",
  setup(__props, { expose: __expose }) {
    let nodes, materials;
    const contextReady = ref$1(false);
    onMounted(async () => {
      const { nodes: n, materials: m } = await useGLTF(("https://opensource.cdn.icegl.cn") + "/model/eCommerce/energy-can.glb");
      nodes = n;
      materials = m;
      materials.Body.metalness = 0;
      materials.Body.roughness = 1;
      materials.Body.onBeforeCompile = (shader) => {
        shader.uniforms = Object.assign(shader.uniforms, uniforms);
        shader.vertexShader = shader.vertexShader.replace(
          `#include <common>`,
          `
          #include <common>
          varying vec2 vUv;
        `
        );
        shader.vertexShader = shader.vertexShader.replace(
          "#include <begin_vertex>",
          `
          #include <begin_vertex>
          vUv = uv;
        `
        );
        shader.fragmentShader = shader.fragmentShader.replace(
          `#include <common>`,
          `
          #include <common>
          uniform float u_time;
          uniform vec3 u_color1;
          uniform vec3 u_color2;
          uniform float u_progress;
          uniform float u_width;
          uniform float u_scaleX;
          uniform float u_scaleY;
          uniform vec2 u_textureSize;
          varying vec2 vUv;
          ${noise}
          float parabola( float x, float k ) {
            return pow( 4. * x * ( 1. - x ), k );
          }
      `
        );
        shader.fragmentShader = shader.fragmentShader.replace(
          `#include <color_fragment>`,
          `
          #include <color_fragment>
            float aspect = u_textureSize.x/u_textureSize.y;
            float dt = parabola(u_progress,1.);
            float border = 1.;
            float noise = 0.5*(cnoise(vec4(vUv.x*u_scaleX  + 0.5*u_time/3., vUv.y*u_scaleY,0.5*u_time/3.,0.)) + 1.);
            float w = u_width*dt;
            float maskValue = smoothstep(1. - w,1.,vUv.y + mix(-w/2., 1. - w/2., u_progress));
            maskValue += maskValue * noise;
            float mask = smoothstep(border,border+0.01,maskValue);
            diffuseColor.rgb += mix(u_color1,u_color2,mask);
        `
        );
      };
      uniforms.u_textureSize.value = new THREE$1.Vector2(materials.Body.map.source.data.width, materials.Body.map.source.data.height);
      contextReady.value = true;
    });
    const uniforms = {
      u_time: { value: 0 },
      u_color1: { value: new THREE$1.Color(colors[0]) },
      u_color2: { value: new THREE$1.Color(colors[1]) },
      u_progress: { value: 0.5 },
      u_width: { value: 0.8 },
      u_scaleX: { value: 50 },
      u_scaleY: { value: 50 },
      u_textureSize: {
        value: new THREE$1.Vector2(0, 0)
      }
    };
    let colorIndex = 0;
    function onClick() {
      if (++colorIndex >= colors.length) {
        colorIndex = 0;
      }
      console.log("model colorIndex", colorIndex);
      let nextTexture = new THREE$1.Color(colors[colorIndex]);
      uniforms.u_color2.value = nextTexture;
      const uprogress = uniforms.u_progress;
      gsapWithCSS.killTweensOf(uprogress);
      uprogress.value = 0.5;
      gsapWithCSS.to(uprogress, {
        duration: 1.5,
        ease: "power1.out",
        value: 1,
        onComplete: () => {
          uniforms.u_color1.value = nextTexture;
        }
      });
    }
    let tgpY = ref$1(0);
    const { onBeforeRender } = _l();
    onBeforeRender(({ elapsed }) => {
      tgpY.value = Math.sin(elapsed) * 0.12;
      uniforms.u_time.value = elapsed;
    });
    __expose({
      onClick
    });
    return (_ctx, _cache) => {
      return contextReady.value ? (_openBlock$1(), _createElementBlock$1("TresGroup", {
        key: 0,
        rotation: [-Math.PI / 2, 1.7, Math.PI / 2],
        position: [0, _unref$1(tgpY), 5]
      }, [
        _createElementVNode$1("TresGroup", {
          rotation: [-Math.PI / 2, 0, 0]
        }, [
          _createElementVNode$1("TresMesh", {
            geometry: _unref$1(nodes).LowRes_Can_Alluminium_0.geometry,
            material: _unref$1(materials).Alluminium
          }, null, 8, _hoisted_3),
          _createElementVNode$1("TresMesh", {
            geometry: _unref$1(nodes).LowRes_Can_Body_0.geometry,
            material: _unref$1(materials).Body
          }, null, 8, _hoisted_4)
        ], 8, _hoisted_2)
      ], 8, _hoisted_1)) : _createCommentVNode("", true);
    };
  }
});

const {defineComponent:_defineComponent} = await importShared('vue');

const {unref:_unref,createVNode:_createVNode,Suspense:_Suspense,withCtx:_withCtx,openBlock:_openBlock,createBlock:_createBlock,createElementVNode:_createElementVNode,resolveComponent:_resolveComponent,normalizeProps:_normalizeProps,guardReactiveProps:_guardReactiveProps,Fragment:_Fragment,createElementBlock:_createElementBlock} = await importShared('vue');

const {ref} = await importShared('vue');
const THREE = await importShared('three');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "zipTopCan",
  setup(__props) {
    const tcConfig = {
      clearColor: "#ffffff",
      windowSize: true,
      toneMapping: THREE.ACESFilmicToneMapping,
      toneMappingExposure: 0.8,
      shadows: true,
      outputColorSpace: THREE.SRGBColorSpace
    };
    const bgRef = ref();
    const modelRef = ref();
    function onClick(ev) {
      console.log("outGroup", ev);
      bgRef.value?.onClick(ev);
      modelRef.value?.onClick(ev);
    }
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createElementBlock(_Fragment, null, [
        (_openBlock(), _createBlock(_Suspense, null, {
          default: _withCtx(() => [
            _createVNode(_unref(_sfc_main$3))
          ]),
          _: 1
        })),
        _createVNode(_component_TresCanvas, _normalizeProps(_guardReactiveProps(tcConfig)), {
          default: _withCtx(() => [
            _cache[0] || (_cache[0] = _createElementVNode("TresPerspectiveCamera", {
              position: [0, 0, 16],
              fov: 45,
              near: 0.1,
              far: 1e4
            }, null, -1)),
            _createVNode(_unref(Kk), {
              enableDamping: "",
              enablePan: false,
              enableZoom: false,
              maxPolarAngle: Math.PI / 1.7,
              minPolarAngle: Math.PI / 2.4,
              maxAzimuthAngle: 0.1,
              minAzimuthAngle: -0.1
            }, null, 8, ["maxPolarAngle", "minPolarAngle"]),
            _cache[1] || (_cache[1] = _createElementVNode("TresAmbientLight", { intensity: 0.5 }, null, -1)),
            _createElementVNode("TresGroup", { onClick }, [
              _createVNode(_sfc_main$2, {
                ref_key: "bgRef",
                ref: bgRef
              }, null, 512),
              (_openBlock(), _createBlock(_Suspense, null, {
                default: _withCtx(() => [
                  _createVNode(_sfc_main$1, {
                    ref_key: "modelRef",
                    ref: modelRef
                  }, null, 512)
                ]),
                _: 1
              }))
            ]),
            (_openBlock(), _createBlock(_Suspense, null, {
              default: _withCtx(() => [
                _createVNode(_unref(tk), { files: "./plugins/eCommerce/platz.hdr" })
              ]),
              _: 1
            }))
          ]),
          _: 1
        }, 16)
      ], 64);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=zipTopCan.CXVnx6eK1767105581793.js.map
