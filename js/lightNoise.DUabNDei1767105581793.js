import { importShared, _l, Fs, _export_sfc, Kk } from './index.BxB45aCK1767105581793.js';
import { EffectComposer, RenderPass, ShaderPass } from './RenderPass.XMM8w9Yd1767105581793.js';
import { UnrealBloomPass } from './UnrealBloomPass.DHFMJH-X1767105581793.js';

var lightNoise_default="float N21(vec2 st){\n	return fract(sin(dot(st.xy,vec2(12.9898,78.233)))*43758.5453123);\n}\nfloat smoothNoise(vec2 ip){\n	vec2 lv=fract(ip);\n	vec2 id=floor(ip);\n	\n	lv=lv*lv*(3.-2.*lv);\n	\n	float bl=N21(id);\n	float br=N21(id+vec2(1,0));\n	float b=mix(bl,br,lv.x);\n	\n	float tl=N21(id+vec2(0,1));\n	float tr=N21(id+vec2(1,1));\n	float t=mix(tl,tr,lv.x);\n	\n	return clamp(mix(b,t,lv.y)*.5+.5,0.,1.);\n}\nfloat smoothNoise2(vec2 p){\n	p.y+=time;\n	p/=4.;\n	\n	float n=smoothNoise(p)*1.5;\n	n+=smoothNoise(p*2.01)*.25;\n	n+=smoothNoise(p*4.02)*.125;\n	n+=smoothNoise(p*8.03)*.0625;\n	n/=(1.5+.25+.125+.0625);\n	return clamp(n,0.,1.);\n}";

const {defineComponent:_defineComponent$4} = await importShared('vue');

const {unref:_unref$3,createElementVNode:_createElementVNode$3,Fragment:_Fragment$2,openBlock:_openBlock$5,createElementBlock:_createElementBlock$5} = await importShared('vue');

const _hoisted_1$3 = ["geometry", "material"];
const _hoisted_2 = ["material"];
const _hoisted_3 = ["rotateX"];
const THREE$4 = await importShared('three');
const instCount = 100;
const _sfc_main$5 = /* @__PURE__ */ _defineComponent$4({
  __name: "lucesPlane",
  props: {
    globalUniforms: {}
  },
  setup(__props) {
    const props = __props;
    const luces = [];
    const lucesInit = [];
    const sphereGeometry = new THREE$4.SphereGeometry(1, 36, 18);
    const lGeometry = new THREE$4.InstancedBufferGeometry().copy(sphereGeometry);
    lGeometry.instanceCount = instCount;
    const instData = [];
    for (let i = 0; i < instCount; i++) {
      let x = THREE$4.MathUtils.randFloatSpread(49);
      let z = THREE$4.MathUtils.randFloatSpread(49);
      let scale = THREE$4.MathUtils.randFloat(0.0625, 0.125);
      let ldist = THREE$4.MathUtils.randFloat(1, 3);
      instData.push(x, z, scale);
      lucesInit.push(new THREE$4.Vector4(x, z, ldist, THREE$4.MathUtils.randFloat(1, 2)));
      luces.push(new THREE$4.Vector4(x, z, scale, ldist));
    }
    lGeometry.setAttribute("instData", new THREE$4.InstancedBufferAttribute(new Float32Array(instData), 3));
    const lMaterial = new THREE$4.MeshBasicMaterial({
      color: 16720418,
      // @ts-ignore
      onBeforeCompile: (shader) => {
        shader.uniforms.noiseTex = props.globalUniforms.noise;
        shader.vertexShader = `
      uniform sampler2D noiseTex;
      attribute vec4 instData;
      ${shader.vertexShader}
    `.replace(
          `#include <begin_vertex>`,
          `#include <begin_vertex>
      transformed = position * instData.z;
      
      transformed.x += instData.x;
      transformed.z += instData.y;
      vec2 nUv = (vec2(instData.x, -instData.y) - vec2(-25.)) / 50.;
      float h = texture2D(noiseTex, nUv).g;
      h = (h - 0.5) * 4.;
      transformed.y += h;
      `
        );
      }
    });
    const planeUniforms = {
      luces: { value: luces }
    };
    const pMaterial = new THREE$4.MeshLambertMaterial({
      color: 2363940,
      // @ts-ignore
      onBeforeCompile: (shader) => {
        shader.uniforms.luces = planeUniforms.luces;
        shader.uniforms.globalBloom = props.globalUniforms.globalBloom;
        shader.uniforms.noiseTex = props.globalUniforms.noise;
        shader.vertexShader = `
      uniform float time;
      uniform sampler2D noiseTex;
      varying vec3 vPos;
      varying float intensity;
      
      //// https://discourse.threejs.org/t/calculating-vertex-normals-after-displacement-in-the-vertex-shader/16989/8 ///
      
      // the function which defines the displacement
      float displace(vec2 vUv) {
        return (texture2D(noiseTex, vUv).g - 0.5) * 4.;
      }

      vec3 getNormal(vec2 vUv){
        vec3 displacedPosition = position + normal * displace(vUv);

        float texelSize = 1.0 / 512.0; // temporarily hardcoding texture resolution
        float offset = 0.1;

        vec3 neighbour1 = position + vec3(1., 0., 0.) * offset;
        vec3 neighbour2 = position + vec3(0., 0., 1.) * offset;
        vec2 neighbour1uv = vUv + vec2(-texelSize, 0);
        vec2 neighbour2uv = vUv  + vec2(0, -texelSize);
        vec3 displacedNeighbour1 = neighbour1 + normal * displace(neighbour1uv);
        vec3 displacedNeighbour2 = neighbour2 + normal * displace(neighbour2uv);

        // https://i.ya-webdesign.com/images/vector-normals-tangent-16.png
        vec3 displacedTangent = displacedNeighbour1 - displacedPosition;
        vec3 displacedBitangent = displacedNeighbour2 - displacedPosition;

        // https://upload.wikimedia.org/wikipedia/commons/d/d2/Right_hand_rule_cross_product.svg
        vec3 displacedNormal = normalize(cross(displacedBitangent, displacedTangent));
        return displacedNormal;
      }
      
      ${shader.vertexShader}
    `.replace(
          `#include <begin_vertex>`,
          `#include <begin_vertex>

        float h = texture2D(noiseTex, uv).g;
        intensity = h;
        h = (h - 0.5) * 4.;
        transformed.y = h;
        vPos = transformed;
        transformedNormal = normalMatrix * getNormal(uv);
      `
        );
        shader.fragmentShader = `
      uniform vec4 luces[${instCount}];
      uniform sampler2D noiseTex;
      uniform float globalBloom;
      varying vec3 vPos;
      varying float intensity;

      ${shader.fragmentShader}
    `.replace(
          `#include <fog_fragment>`,
          `
        vec3 col = vec3(1, 0, 0)*0.75;
        float intensity = 0.;
        for(int i = 0;i < ${instCount}; i++){
          vec4 lux = luces[i];
          vec2 luxUv = (vec2(lux.x, -lux.y) - vec2(-25.)) / 50.;
          float h = texture2D(noiseTex, luxUv).g;
          h = (h - 0.5) * 4.;
          vec3 lightPos = vec3(lux.x, h, lux.y);
          float currIntensity = smoothstep(lux.z + lux.w, lux.z, distance(vPos, lightPos));
          intensity += pow(currIntensity, 16.);
        }
        intensity = clamp(intensity, 0., 1.);
        col = mix(col * 0.5, col, intensity);
        col = mix(gl_FragColor.rgb, col, intensity);
        col += vec3(1) * intensity * 0.01;
        gl_FragColor = vec4( col, opacity );
        #include <fog_fragment>
      `
        ).replace(
          `#include <dithering_fragment>`,
          `#include <dithering_fragment>
        if (globalBloom > 0.5) {
          gl_FragColor = vec4(0);
        }
      `
        );
      }
    });
    const { onBeforeRender } = _l();
    onBeforeRender(({ elapsed }) => {
      for (let i = 0; i < instCount; i++) {
        const li = lucesInit[i];
        let z = (li.y + elapsed + 25) % 50 - 25;
        luces[i].y = z;
        luces[i].w = (Math.sin(elapsed * li.w * (i % 3 + 1)) * Math.cos(elapsed * li.w * (i % 5 + 1)) * 0.25 + 0.25) * li.z + li.z * 0.75;
        lGeometry.attributes.instData.setY(i, z);
      }
      lGeometry.attributes.instData.needsUpdate = true;
    });
    return (_ctx, _cache) => {
      return _openBlock$5(), _createElementBlock$5(_Fragment$2, null, [
        _createElementVNode$3("TresMesh", {
          geometry: _unref$3(lGeometry),
          material: _unref$3(lMaterial)
        }, null, 8, _hoisted_1$3),
        _createElementVNode$3("TresMesh", { material: _unref$3(pMaterial) }, [
          _createElementVNode$3("TresPlaneGeometry", {
            args: [50, 50, 500, 500],
            rotateX: -Math.PI * 0.5
          }, null, 8, _hoisted_3)
        ], 8, _hoisted_2)
      ], 64);
    };
  }
});

const {defineComponent:_defineComponent$3} = await importShared('vue');

const {unref:_unref$2,createElementVNode:_createElementVNode$2,openBlock:_openBlock$4,createElementBlock:_createElementBlock$4} = await importShared('vue');

const _hoisted_1$2 = ["material"];
const THREE$3 = await importShared('three');
const _sfc_main$4 = /* @__PURE__ */ _defineComponent$3({
  __name: "portal",
  props: {
    globalUniforms: {}
  },
  setup(__props) {
    const props = __props;
    const pMaterial = new THREE$3.MeshBasicMaterial({
      color: 16737843,
      transparent: true,
      // @ts-ignore
      onBeforeCompile: (shader) => {
        shader.uniforms.time = props.globalUniforms.time;
        shader.uniforms.globalBloom = props.globalUniforms.globalBloom;
        shader.fragmentShader = `
      #define S(a, b, t) smoothstep(a, b, t)
      uniform float time;
      uniform float globalBloom;
      
      ${lightNoise_default}
      
      float getTri(vec2 uv, float shift){
        uv = uv * 2.-1.;
        float a = atan(uv.x + shift,uv.y) + 3.1415926;
        float r = 3.1415926 * 2./3.;
        return cos(floor(.5+a/r)*r-a)*length(uv);
      }
      
      float doubleTri(vec2 uv, float still, float width){
        vec2 baseUv = uv;
        vec2 e2 = fwidth(baseUv * 20.);
        float e = min(e2.x, e2.y) * width;
        float baseTri = getTri(baseUv, cos(baseUv.y * 31. + time) * sin(baseUv.y * 27. + time * 4.) * 0.025 * still);
        float td = abs(fract(baseTri * 20.) - 0.5);
        float tri = S(e, 0., td) - S(0., e, td);
        tri *= step(0.4, baseTri) -  step(0.5, baseTri);
        return tri;
      }
      
      ${shader.fragmentShader}
    `.replace(
          `vec4 diffuseColor = vec4( diffuse, opacity );`,
          `
        float tri = doubleTri(vUv, 0.0, 16.);
        float triWave = doubleTri(vUv, 1.0, 8.);
        float fullTri = max(tri, triWave);
        
        if (fullTri < 0.5) discard;
        
        vec3 col = mix(diffuse, vec3(0.75), fullTri);
        
        float blinking = smoothNoise(vec2(time, time * 5.));
        blinking = blinking * 0.9 + 0.1;
        
        vec4 diffuseColor = vec4(col * blinking, fullTri);
      `
        ).replace(
          `#include <dithering_fragment>`,
          `#include <dithering_fragment>
        if (globalBloom > 0.5) {
          gl_FragColor = vec4(gl_FragColor.rgb * 0.375, fullTri);
        }
      `
        );
      }
    });
    pMaterial.defines = { USE_UV: "" };
    return (_ctx, _cache) => {
      return _openBlock$4(), _createElementBlock$4("TresMesh", {
        material: _unref$2(pMaterial),
        position: [0, 1.25 + 2.5, -12]
      }, [..._cache[0] || (_cache[0] = [
        _createElementVNode$2("TresPlaneGeometry", { args: [5, 5] }, null, -1)
      ])], 8, _hoisted_1$2);
    };
  }
});

const {defineComponent:_defineComponent$2} = await importShared('vue');

const {unref:_unref$1,openBlock:_openBlock$3,createElementBlock:_createElementBlock$3} = await importShared('vue');

const _hoisted_1$1 = ["material", "geometry"];
const THREE$2 = await importShared('three');
const gCount = 2e4;
const _sfc_main$3 = /* @__PURE__ */ _defineComponent$2({
  __name: "drops",
  props: {
    globalUniforms: {}
  },
  setup(__props) {
    const props = __props;
    const gPos = [];
    const gEnds = [];
    for (let i = 0; i < gCount; i++) {
      const x = THREE$2.MathUtils.randFloatSpread(35);
      const y = THREE$2.MathUtils.randFloat(-5, 10);
      const z = THREE$2.MathUtils.randFloatSpread(35);
      const len = THREE$2.MathUtils.randFloat(0.25, 0.5);
      gPos.push(x, y, z, x, y, z);
      gEnds.push(0, len, 1, len);
    }
    const gg = new THREE$2.BufferGeometry();
    gg.setAttribute("position", new THREE$2.Float32BufferAttribute(gPos, 3));
    gg.setAttribute("gEnds", new THREE$2.Float32BufferAttribute(gEnds, 2));
    const gm = new THREE$2.LineBasicMaterial({
      color: 8930440,
      transparent: true,
      // @ts-ignore
      onBeforeCompile: (shader) => {
        shader.uniforms.time = props.globalUniforms.time;
        shader.uniforms.noiseTex = props.globalUniforms.noise;
        shader.uniforms.globalBloom = props.globalUniforms.globalBloom;
        shader.vertexShader = `
      uniform float time;
      uniform sampler2D noiseTex;
      attribute vec2 gEnds;
      varying float vGEnds;
      varying float vH;

      ${shader.vertexShader}
    `.replace(
          `#include <begin_vertex>`,
          `#include <begin_vertex>
        
      vec3 pos = position;
      
      vec2 nUv = (vec2(pos.x, -pos.z) - vec2(-25.)) / 50.;
      float h = texture2D(noiseTex, nUv).g;
      h = (h - 0.5) * 4.;
      
      pos.y = -mod(10. - (pos.y - time * 5.), 15.) + 10.;
      h = pos.y - h;
      pos.y += gEnds.x * gEnds.y;
      transformed = pos;
      vGEnds = gEnds.x;
      vH = smoothstep(3., 0., h);
      `
        );
        shader.fragmentShader = `
      uniform float time;
      uniform float globalBloom;
      varying float vGEnds;
      varying float vH;
      ${lightNoise_default}
      ${shader.fragmentShader}
    `.replace(
          `vec4 diffuseColor = vec4( diffuse, opacity );`,
          `
      float op = 1. - vGEnds;
      op = pow(op, 3.);
      float h = (pow(vH, 3.) * 0.5 + 0.5);
      vec3 col = diffuse * h; // lighter close to the surface
      col *= 1. + smoothstep(0.99, 1., h); // sparkle at the surface
      if (globalBloom > 0.5) {
        //col *= 0.5;
      }
      vec4 diffuseColor = vec4( col, op );
      
      `
        );
      }
    });
    return (_ctx, _cache) => {
      return _openBlock$3(), _createElementBlock$3("TresLineSegments", {
        material: _unref$1(gm),
        geometry: _unref$1(gg)
      }, null, 8, _hoisted_1$1);
    };
  }
});

const {defineComponent:_defineComponent$1} = await importShared('vue');

const {createVNode:_createVNode$1,Fragment:_Fragment$1,openBlock:_openBlock$2,createElementBlock:_createElementBlock$2} = await importShared('vue');

const THREE$1 = await importShared('three');
const {watch} = await importShared('vue');

const _sfc_main$2 = /* @__PURE__ */ _defineComponent$1({
  __name: "fboRender",
  setup(__props) {
    const globalUniforms = {
      time: { value: 0 },
      globalBloom: { value: 0 },
      noise: { value: null }
    };
    const renderTarget = new THREE$1.WebGLRenderTarget(512, 512);
    const rtScene = new THREE$1.Scene();
    const rtCamera = new THREE$1.Camera();
    const rtGeo = new THREE$1.PlaneGeometry(2, 2);
    const rtMat = new THREE$1.MeshBasicMaterial({
      // @ts-ignore
      onBeforeCompile: (shader) => {
        shader.uniforms.time = globalUniforms.time;
        shader.fragmentShader = `
      uniform float time;
      ${lightNoise_default}
      ${shader.fragmentShader}
    `.replace(
          `vec4 diffuseColor = vec4( diffuse, opacity );`,
          `
        vec3 col = vec3(0);
        float h = clamp(smoothNoise2(vUv * 50.), 0., 1.);
        col = vec3(h);
        vec4 diffuseColor = vec4( col, opacity );
      `
        );
      }
    });
    rtMat.defines = { USE_UV: "" };
    const rtPlane = new THREE$1.Mesh(rtGeo, rtMat);
    rtScene.add(rtPlane);
    globalUniforms.noise.value = renderTarget.texture;
    const { camera, renderer, scene, sizes, controls } = Fs();
    watch(
      () => controls.value,
      (v) => {
        v?.target.set(0, 2, 0);
        if (!scene.value.background) {
          scene.value.background = new THREE$1.Color(6706534);
        }
      }
    );
    const bloomComposer = new EffectComposer(renderer);
    const finalComposer = new EffectComposer(renderer);
    const renderScene = new RenderPass(scene.value, camera.value);
    const bloomPass = new UnrealBloomPass(new THREE$1.Vector2(sizes.width.value, sizes.height.value), 1.2, 0.5, 0);
    bloomComposer.renderToScreen = false;
    bloomComposer.addPass(renderScene);
    bloomComposer.addPass(bloomPass);
    const finalPass = new ShaderPass(
      new THREE$1.ShaderMaterial({
        uniforms: {
          baseTexture: { value: null },
          bloomTexture: { value: bloomComposer.renderTarget2.texture }
        },
        vertexShader: `
								varying vec2 vUv;
								void main() {
									vUv = uv;
									gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
								}`,
        fragmentShader: `
								uniform sampler2D baseTexture;
								uniform sampler2D bloomTexture;
								varying vec2 vUv;
								void main() {
									gl_FragColor = ( texture2D( baseTexture, vUv ) + vec4( 1.0 ) * texture2D( bloomTexture, vUv ) );
								}`,
        defines: {}
      }),
      "baseTexture"
    );
    finalPass.needsSwap = true;
    finalComposer.addPass(renderScene);
    finalComposer.addPass(finalPass);
    scene.value.fog = new THREE$1.Fog(6706534, 1, 25);
    const { onBeforeRender } = _l();
    onBeforeRender(({ elapsed }) => {
      globalUniforms.time.value = elapsed;
      if (renderer) {
        renderer.setRenderTarget(renderTarget);
        renderer.render(rtScene, rtCamera);
        renderer.setRenderTarget(null);
        globalUniforms.globalBloom.value = 1.2;
        scene.value.fog.color.set(0);
        scene.value.fog.near = 15;
        scene.value.background?.set(0);
        bloomComposer.render();
        globalUniforms.globalBloom.value = 0;
        scene.value.fog.color.set(6706534);
        scene.value.fog.near = 10;
        scene.value.background?.set(6706534);
        finalComposer.render();
      }
    });
    return (_ctx, _cache) => {
      return _openBlock$2(), _createElementBlock$2(_Fragment$1, null, [
        _createVNode$1(_sfc_main$5, { globalUniforms }),
        _createVNode$1(_sfc_main$4, { globalUniforms }),
        _createVNode$1(_sfc_main$3, { globalUniforms })
      ], 64);
    };
  }
});

const _sfc_main$1 = {};
const {createElementVNode:_createElementVNode$1,createTextVNode:_createTextVNode,openBlock:_openBlock$1,createElementBlock:_createElementBlock$1} = await importShared('vue');


const _hoisted_1 = { class: "text" };

function _sfc_render(_ctx, _cache) {
  return (_openBlock$1(), _createElementBlock$1("div", _hoisted_1, [...(_cache[0] || (_cache[0] = [
    _createElementVNode$1("span", { class: "retro noselect" }, [
      _createElementVNode$1("span", { style: {"color":"#eae"} }, "光"),
      _createTextVNode("噪声")
    ], -1)
  ]))]))
}
const textC = /*#__PURE__*/_export_sfc(_sfc_main$1, [['render',_sfc_render],['__scopeId',"data-v-3881bd43"]]);

const {defineComponent:_defineComponent} = await importShared('vue');

const {createVNode:_createVNode,createElementVNode:_createElementVNode,unref:_unref,normalizeProps:_normalizeProps,guardReactiveProps:_guardReactiveProps,resolveComponent:_resolveComponent,withCtx:_withCtx,Fragment:_Fragment,openBlock:_openBlock,createElementBlock:_createElementBlock} = await importShared('vue');

const THREE = await importShared('three');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "lightNoise",
  setup(__props) {
    const tcConfig = {
      windowSize: true,
      antialias: true,
      renderMode: "manual"
    };
    const oc = {
      enableDamping: true,
      minDistance: 5,
      maxDistance: 10,
      minPolarAngle: THREE.MathUtils.DEG2RAD * 60,
      maxPolarAngle: THREE.MathUtils.DEG2RAD * 90,
      makeDefault: true
    };
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createElementBlock(_Fragment, null, [
        _createVNode(textC),
        _createVNode(_component_TresCanvas, _normalizeProps(_guardReactiveProps(tcConfig)), {
          default: _withCtx(() => [
            _cache[0] || (_cache[0] = _createElementVNode("TresPerspectiveCamera", {
              position: [0, 3, 5],
              fov: 45,
              near: 0.1,
              far: 1e3
            }, null, -1)),
            _createVNode(_unref(Kk), _normalizeProps(_guardReactiveProps(oc)), null, 16),
            _cache[1] || (_cache[1] = _createElementVNode("TresAmbientLight", { intensity: 0.5 }, null, -1)),
            _cache[2] || (_cache[2] = _createElementVNode("TresDirectionalLight", {
              position: [0, 3, -12],
              intensity: 1
            }, null, -1)),
            _createVNode(_sfc_main$2)
          ]),
          _: 1
        }, 16)
      ], 64);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=lightNoise.DUabNDei1767105581793.js.map
