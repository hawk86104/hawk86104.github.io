import { importShared, _l, NA, Kk } from './index.BxB45aCK1767105581793.js';
import { LineSegmentsGeometry, LineMaterial, LineSegments2 } from './LineSegments2.3MkrpAcm1767105581793.js';
import { B } from './three-custom-shader-material.es.CWVfv5Xe1767105581793.js';
import { resetUV, initMeshBvh, setThreeWater2 } from './utils.-sNu4bkd1767105581793.js';
import { buildingsCustomShaderMaterial_default, buildingsCustomShaderMaterial_default$1 } from './buildingsCustomShaderMaterial.geCsebl-1767105581793.js';
import { _sfc_main as _sfc_main$3 } from './roadLight.vue_vue_type_script_setup_true_lang.D6rNsF3j1767105581793.js';

/**
 * Holographic material by Anderson Mancini - Dec 2023.
 */
const {ShaderMaterial,Clock,Uniform,Color: Color$2,NormalBlending,AdditiveBlending: AdditiveBlending$1,FrontSide,BackSide,DoubleSide: DoubleSide$2} = await importShared('three');


class HolographicMaterial extends ShaderMaterial {

  /**
   * Create a HolographicMaterial.
   *
   * @param {Object} parameters - The parameters to configure the material.
   * @param {number} [parameters.time=0.0] - The time uniform representing animation time.
   * @param {number} [parameters.fresnelOpacity=1.0] - The opacity for the fresnel effect.
   * @param {number} [parameters.fresnelAmount=1.0] - The strength of the fresnel effect.
   * @param {number} [parameters.scanlineSize=15.0] - The size of the scanline effect.
   * @param {number} [parameters.hologramBrightness=1.0] - The brightness of the hologram.
   * @param {number} [parameters.signalSpeed=1.0] - The speed of the signal effect.
   * @param {Color} [parameters.hologramColor=new Color('#00d5ff')] - The color of the hologram.
   * @param {boolean} [parameters.enableBlinking=true] - Enable/disable blinking effect.
   * @param {boolean} [parameters.blinkFresnelOnly=false] - Enable blinking only on the fresnel effect.
   * @param {number} [parameters.hologramOpacity=1.0] - The opacity of the hologram.
   * @param {number} [parameters.blendMode=NormalBlending] - The blending mode. Use `THREE.NormalBlending` or `THREE.AdditiveBlending`.
   * @param {number} [parameters.side=FrontSide] - The rendering side. Use `THREE.FrontSide`, `THREE.BackSide`, or `THREE.DoubleSide`.
   * @param {Boolean} [parameters.depthTest=true] - Enable or disable depthTest.
   */

  constructor(parameters = {}) {
    super();

    this.vertexShader = /*GLSL */
      `
      #define STANDARD
      varying vec3 vViewPosition;
      #ifdef USE_TRANSMISSION
      varying vec3 vWorldPosition;
      #endif
    
      varying vec2 vUv;
      varying vec4 vPos;
      varying vec3 vNormalW;
      varying vec3 vPositionW;

      #include <common>
      #include <uv_pars_vertex>
      #include <envmap_pars_vertex>
      #include <color_pars_vertex>
      #include <fog_pars_vertex>
      #include <morphtarget_pars_vertex>
      #include <skinning_pars_vertex>
      #include <logdepthbuf_pars_vertex>
      #include <clipping_planes_pars_vertex>

      void main() {
        
        #include <uv_vertex>
        #include <color_vertex>
        #include <morphcolor_vertex>
      
        #if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
      
          #include <beginnormal_vertex>
          #include <morphnormal_vertex>
          #include <skinbase_vertex>
          #include <skinnormal_vertex>
          #include <defaultnormal_vertex>
      
        #endif
      
        #include <begin_vertex>
        #include <morphtarget_vertex>
        #include <skinning_vertex>
        #include <project_vertex>
        #include <logdepthbuf_vertex>
        #include <clipping_planes_vertex>
      
        #include <worldpos_vertex>
        #include <envmap_vertex>
        #include <fog_vertex>

        mat4 modelViewProjectionMatrix = projectionMatrix * modelViewMatrix;

        vUv = uv;
        vPos = projectionMatrix * modelViewMatrix * vec4( transformed, 1.0 );
        vPositionW = vec3( vec4( transformed, 1.0 ) * modelMatrix);
        vNormalW = normalize( vec3( vec4( normal, 0.0 ) * modelMatrix ) );
        
        gl_Position = modelViewProjectionMatrix * vec4( transformed, 1.0 );

      }`;

    this.fragmentShader = /*GLSL */
      ` 
      varying vec2 vUv;
      varying vec3 vPositionW;
      varying vec4 vPos;
      varying vec3 vNormalW;
      
      uniform float time;
      uniform float fresnelOpacity;
      uniform float scanlineSize;
      uniform float fresnelAmount;
      uniform float signalSpeed;
      uniform float hologramBrightness;
      uniform float hologramOpacity;
      uniform bool blinkFresnelOnly;
      uniform bool enableBlinking;
      uniform vec3 hologramColor;

      float flicker( float amt, float time ) {return clamp( fract( cos( time ) * 43758.5453123 ), amt, 1.0 );}
      float random(in float a, in float b) { return fract((cos(dot(vec2(a,b) ,vec2(12.9898,78.233))) * 43758.5453)); }

      void main() {
        vec2 vCoords = vPos.xy;
        vCoords /= vPos.w;
        vCoords = vCoords * 0.5 + 0.5;
        vec2 myUV = fract( vCoords );

        // Defines hologram main color
        vec4 hologramColor = vec4(hologramColor, mix(hologramBrightness, vUv.y, 0.5));

        // Add scanlines
        float scanlines = 10.;
        scanlines += 20. * sin(time *signalSpeed * 20.8 - myUV.y * 60. * scanlineSize);
        scanlines *= smoothstep(1.3 * cos(time *signalSpeed + myUV.y * scanlineSize), 0.78, 0.9);
        scanlines *= max(0.25, sin(time *signalSpeed) * 1.0);        
        
        // Scanlines offsets
        float r = random(vUv.x, vUv.y);
        float g = random(vUv.y * 20.2, 	vUv.y * .2);
        float b = random(vUv.y * .9, 	vUv.y * .2);

        // Scanline composition
        hologramColor += vec4(r*scanlines, b*scanlines, r, 1.0) / 84.;
        vec4 scanlineMix = mix(vec4(0.0), hologramColor, hologramColor.a);

        // Calculates fresnel
        vec3 viewDirectionW = normalize(cameraPosition - vPositionW);
        float fresnelEffect = dot(viewDirectionW, vNormalW) * (1.6 - fresnelOpacity/2.);
        fresnelEffect = clamp(fresnelAmount - fresnelEffect, 0., fresnelOpacity);

        // Blinkin effect
        //Suggested by Octano - https://x.com/OtanoDesign?s=20
        float blinkValue = enableBlinking ? 0.6 - signalSpeed : 1.0;
        float blink = flicker(blinkValue, time * signalSpeed * .02);
    
        // Final shader composition
        vec3 finalColor;

        if(blinkFresnelOnly){
          // finalColor = vec3(1.0,1.0,0);
          finalColor = scanlineMix.rgb + fresnelEffect * blink;
        }else{
          finalColor = scanlineMix.rgb * blink + fresnelEffect;
        }

        gl_FragColor = vec4( finalColor, hologramOpacity);

      }`;

    // Set default values or modify existing properties if needed
    this.uniforms = {
      /**
       * The time uniform representing animation time.
       * @type {Uniform<number>}
       * @default 0.0
       */
      time: new Uniform(0),

      /**
       * The opacity for the fresnel effect.
       * @type {Uniform<number>}
       * @default 1.0
       */
      fresnelOpacity: new Uniform(parameters.fresnelOpacity !== undefined ? parameters.fresnelOpacity : 1.0),

      /**
       * The strength of the fresnel effect.
       * @type {Uniform<number>}
       * @default 1.0
       */
      fresnelAmount: new Uniform(parameters.fresnelAmount !== undefined ? parameters.fresnelAmount : 0.45),

      /**
       * The size of the scanline effect.
       * @type {Uniform<number>}
       * @default 1.0
       */
      scanlineSize: new Uniform(parameters.scanlineSize !== undefined ? parameters.scanlineSize : 8.0),

      /**
       * The brightness of the hologram.
       * @type {Uniform<number>}
       * @default 1.0
       */
      hologramBrightness: new Uniform(parameters.hologramBrightness !== undefined ? parameters.hologramBrightness : 1.0),

      /**
       * The speed of the signal effect.
       * @type {Uniform<number>}
       * @default 1.0
       */
      signalSpeed: new Uniform(parameters.signalSpeed !== undefined ? parameters.signalSpeed : 1.0),

      /**
       * The color of the hologram.
       * @type {Uniform<Color>}
       * @default new Color(0xFFFFFF)
       */
      hologramColor: new Uniform(parameters.hologramColor !== undefined ? new Color$2(parameters.hologramColor) : new Color$2("#00d5ff")),

      /**
       * Enable/disable blinking effect.
       * @type {Uniform<boolean>}
       * @default true
       */
      enableBlinking: new Uniform(parameters.enableBlinking !== undefined ? parameters.enableBlinking : true),

      /**
       * Enable blinking only on the fresnel effect.
       * @type {Uniform<boolean>}
       * @default false
       */
      blinkFresnelOnly: new Uniform(parameters.blinkFresnelOnly !== undefined ? parameters.blinkFresnelOnly : true),

      /**
       * The opacity of the hologram.
       * @type {Uniform<number>}
       * @default 1.0
       */
      hologramOpacity: new Uniform(parameters.hologramOpacity !== undefined ? parameters.hologramOpacity : 1.0),
    };

    this.clock = new Clock();
    this.setValues(parameters);
    this.depthTest = parameters.depthTest !== undefined ? parameters.depthTest : false;
    this.blending = parameters.blendMode !== undefined ? parameters.blendMode : AdditiveBlending$1;
    this.transparent = true;
    this.side = parameters.side !== undefined ? parameters.side : FrontSide;

  }


  update () {
    this.uniforms.time.value = this.clock.getElapsedTime();
  }

}

const {defineComponent:_defineComponent$2} = await importShared('vue');
const {Color: Color$1,DoubleSide: DoubleSide$1,AdditiveBlending} = await importShared('three');

const _sfc_main$2 = /* @__PURE__ */ _defineComponent$2({
  __name: "importantBuildings",
  props: {
    group: {}
  },
  setup(__props) {
    const props = __props;
    const PARAMS = {
      fresnelAmount: 0,
      fresnelOpacity: 0,
      scanlineSize: 15,
      signalSpeed: 1.3,
      hologramColor: "#e05b0f"
    };
    const holoMaterial = new HolographicMaterial({ blendMode: AdditiveBlending, hologramBrightness: 2.5, side: DoubleSide$1 });
    holoMaterial.uniforms.fresnelAmount.value = PARAMS.fresnelAmount;
    holoMaterial.uniforms.scanlineSize.value = PARAMS.scanlineSize;
    holoMaterial.uniforms.signalSpeed.value = PARAMS.signalSpeed;
    holoMaterial.uniforms.fresnelOpacity.value = PARAMS.fresnelOpacity;
    holoMaterial.uniforms.hologramColor.value = new Color$1(PARAMS.hologramColor);
    holoMaterial.uniforms.enableBlinking.value = false;
    holoMaterial.depthTest = true;
    let shzx, jmds, dfmzt = null;
    const setImportantBuilds = () => {
      const hqjrzx = props.group.getObjectByName("02-huanqiujinrongzhongxin_huanqiujinrongzhongxin_0");
      hqjrzx.name = "环球金融中心";
      hqjrzx.material.dispose();
      resetUV(hqjrzx.geometry);
      hqjrzx.material = holoMaterial;
      shzx = props.group.getObjectByName("01-shanghaizhongxindasha_shanghaizhongxindasha_0");
      shzx.name = "上海中心";
      shzx.material.dispose();
      resetUV(shzx.geometry);
      shzx.material = holoMaterial.clone();
      shzx.material.uniforms.hologramColor.value = new Color$1("#006cf9");
      shzx.material.uniforms.fresnelAmount.value = 1;
      shzx.material.uniforms.scanlineSize.value = 2.1;
      shzx.material.uniforms.signalSpeed.value = 0.4;
      jmds = props.group.getObjectByName("03-jinmaodasha_jjinmaodasha_0");
      jmds.name = "金茂大厦";
      jmds.material.dispose();
      resetUV(jmds.geometry);
      jmds.material = holoMaterial.clone();
      jmds.material.uniforms.hologramColor.value = new Color$1("#5e0fe0");
      jmds.material.uniforms.scanlineSize.value = 15;
      jmds.material.uniforms.signalSpeed.value = 0.18;
      dfmzt = props.group.getObjectByName("04-dongfangmingzhu_dongfangmingzhu_0");
      dfmzt.name = "东方明珠塔";
      dfmzt.material.dispose();
      resetUV(dfmzt.geometry);
      dfmzt.material = holoMaterial.clone();
      dfmzt.material.uniforms.scanlineSize.value = 5;
      dfmzt.material.uniforms.signalSpeed.value = 1.3;
      dfmzt.material.uniforms.hologramColor.value = new Color$1("#e00f0f");
      dfmzt.material.uniforms.fresnelOpacity.value = 0.1;
    };
    setImportantBuilds();
    const { onBeforeRender } = _l();
    onBeforeRender(() => {
      holoMaterial.update();
      shzx.material.update();
      jmds.material.update();
      dfmzt.material.update();
    });
    return (_ctx, _cache) => {
      return null;
    };
  }
});

const {defineComponent:_defineComponent$1} = await importShared('vue');

const {openBlock:_openBlock$1,createElementBlock:_createElementBlock,createCommentVNode:_createCommentVNode,createBlock:_createBlock$1,Fragment:_Fragment} = await importShared('vue');

const _hoisted_1 = ["object"];
const {ref,watch,toRaw} = await importShared('vue');
const {Color,DoubleSide,EdgesGeometry,MeshStandardMaterial} = await importShared('three');
const _sfc_main$1 = /* @__PURE__ */ _defineComponent$1({
  __name: "buildingsMode",
  setup(__props) {
    initMeshBvh();
    const { state: pState } = NA(
      ("https://opensource.cdn.icegl.cn") + "/model/digitalCity/shanghaiDraco/shanghaiDraco.gltf",
      { draco: true, decoderPath: "./draco/" }
    );
    const group = ref(null);
    watch(
      () => pState.value,
      (state) => {
        if (!state?.scene) return;
        group.value = state.scene.clone();
        group.value.traverse(async (mesh) => {
          if (mesh.isMesh && (mesh.name.indexOf("Shanghai") !== -1 || mesh.name.indexOf("Object") !== -1)) {
            if (mesh.name.indexOf("Floor") !== -1) ; else if (mesh.name.indexOf("River") !== -1) {
              const waterm = await setThreeWater2(toRaw(mesh));
              waterm.position.set(0, 0, 1800);
              mesh.add(waterm);
            } else {
              setEffectMaterial(toRaw(mesh));
              setBuildsLine(toRaw(mesh));
            }
          }
        });
      }
    );
    const timeDelta = ref(0);
    const setEffectMaterial = (mesh) => {
      const { geometry } = mesh;
      geometry.computeBoundingBox();
      geometry.computeBoundingSphere();
      geometry.computeBoundsTree();
      const { max, min } = geometry.boundingBox;
      const material = new B({
        baseMaterial: MeshStandardMaterial,
        vertexShader: buildingsCustomShaderMaterial_default$1,
        fragmentShader: buildingsCustomShaderMaterial_default,
        silent: true,
        uniforms: {
          uMax: { value: max },
          uMin: { value: min },
          uBorderWidth: { value: 6e-3 },
          uCircleTime: { value: 3 },
          uColor: {
            value: new Color("#005c58")
          },
          uOpacity: {
            value: 0.8
          },
          uLightColor: {
            value: new Color("#990")
          },
          uTopColor: {
            value: new Color("#888800")
          },
          uTime: timeDelta,
          uGradient: {
            value: true
          }
        },
        depthWrite: true,
        depthTest: true,
        transparent: true,
        //如果材质透明，那么楼宇就被渲染到后面了
        side: DoubleSide
        //双面渲染
      });
      mesh.material.dispose();
      mesh.material = material;
    };
    const setBuildsLine = (mesh) => {
      const edges = new EdgesGeometry(mesh.geometry, 1e3);
      let geometry = new LineSegmentsGeometry();
      let wideEdges = geometry.fromEdgesGeometry(edges);
      wideEdges.computeBoundsTree();
      let edgesmaterial = new LineMaterial({
        color: new Color("#000"),
        linewidth: 0.8,
        opacity: 0.6,
        transparent: true,
        depthWrite: true,
        depthTest: true
      });
      edgesmaterial.resolution.set(window.innerWidth, window.innerHeight);
      mesh.add(new LineSegments2(wideEdges, edgesmaterial));
    };
    const { onBeforeRender } = _l();
    onBeforeRender(({ delta }) => {
      timeDelta.value += delta;
    });
    return (_ctx, _cache) => {
      return _openBlock$1(), _createElementBlock(_Fragment, null, [
        group.value ? (_openBlock$1(), _createElementBlock("primitive", {
          key: 0,
          object: toRaw(group.value),
          position: [1, 0, 1]
        }, null, 8, _hoisted_1)) : _createCommentVNode("", true),
        group.value ? (_openBlock$1(), _createBlock$1(_sfc_main$2, {
          key: 1,
          group: toRaw(group.value)
        }, null, 8, ["group"])) : _createCommentVNode("", true)
      ], 64);
    };
  }
});

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,unref:_unref,createVNode:_createVNode,Suspense:_Suspense,withCtx:_withCtx,openBlock:_openBlock,createBlock:_createBlock,resolveComponent:_resolveComponent} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "city2",
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createBlock(_component_TresCanvas, {
        shadows: "",
        "window-size": "",
        clearColor: "#333"
      }, {
        default: _withCtx(() => [
          _cache[0] || (_cache[0] = _createElementVNode("TresPerspectiveCamera", {
            position: [0.5, 2, 1.5],
            fov: 45,
            near: 0.1,
            far: 1e5
          }, null, -1)),
          _createVNode(_unref(Kk)),
          _cache[1] || (_cache[1] = _createElementVNode("TresAmbientLight", { color: "#ffffff" }, null, -1)),
          _cache[2] || (_cache[2] = _createElementVNode("TresDirectionalLight", {
            position: [0, 3, 3],
            intensity: 2,
            color: "#ffffff",
            "cast-shadow": "",
            "shadow-mapSize-width": 1024,
            "shadow-mapSize-height": 1024
          }, null, -1)),
          (_openBlock(), _createBlock(_Suspense, null, {
            default: _withCtx(() => [
              _createVNode(_sfc_main$1)
            ]),
            _: 1
          })),
          (_openBlock(), _createBlock(_Suspense, null, {
            default: _withCtx(() => [
              _createVNode(_sfc_main$3, {
                color: "#ffffff",
                radius: 1,
                speed: 1,
                geoJson: "plugins/digitalCity/geojson/secondarySmall.geojson",
                "rotation-y": 1.3826597599330712,
                scale: 0.001025905404044292,
                position: [-1.877460474821603, 0.01, -1.5464791950519081]
              })
            ]),
            _: 1
          })),
          _cache[3] || (_cache[3] = _createElementVNode("TresGridHelper", {
            args: [6, 10],
            position: [0, 0, 0]
          }, null, -1))
        ]),
        _: 1
      });
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=city2.DyF1Pt5L1767105581793.js.map
