import { importShared, Kk } from './index.BxB45aCK1767105581793.js';
import { useTexture } from './customShaderMaterial.vue_vue_type_script_setup_true_lang.rDMIDGqx1767105581793.js';
import './index.vue_vue_type_script_setup_true_lang.D7-hpzmy1767105581793.js';
import { B } from './three-custom-shader-material.es.CWVfv5Xe1767105581793.js';
import { Pane } from './tweakpane.Cvt5w0bb1767105581793.js';

const {DoubleSide: DoubleSide$1,MeshPhysicalMaterial} = await importShared('three');
class ShaderToyMaterial {
    constructor(shaderToySample, options_) {
        const usedUniforms = ShaderToyMaterial.replaceVariable(shaderToySample);
        const material = new B({
            baseMaterial: MeshPhysicalMaterial,
            vertexShader: `	
            varying vec2 vUv;
            void main() {
                csm_Position = position * vec3(1.0);
                vUv = uv;
            } `,
            fragmentShader: usedUniforms,
            side: DoubleSide$1,
            uniforms: options_.material.uniforms,
        });

        this.material = material;
        console.log(this.material);
    }
    static replaceVariable(shaderToySample) {
        shaderToySample = 'varying vec2 vUv;\n' + shaderToySample;
        let time = /iTime|iTimeDelta/g;
        if (time.test(shaderToySample)) {
            let shaderToySampleuv = shaderToySample.split('varying vec2 vUv;\n');
            shaderToySample = 'varying vec2 vUv;\n' + 'uniform float utime;\n' + shaderToySampleuv[1];
            shaderToySample = shaderToySample.replace(/iTime|iTimeDelta/g, 'utime');
        }

        let iResolution = /iResolution\.[a-zA-Z_]+/g;
        if (iResolution.test(shaderToySample)) {
            let shaderToySampleuv = shaderToySample.split('varying vec2 vUv;\n');
            shaderToySample = 'varying vec2 vUv;\n' + 'uniform vec2 uresolution;\n' + shaderToySampleuv[1];
            shaderToySample = shaderToySample.replace(/iResolution\.[a-zA-Z_]+/g, '1.');
            shaderToySample = shaderToySample.replace(/iResolution/g, '1.');
        }
        let utexture = /iChannel0|iChannel1|iChannel2|iChannel3/g;
        if (utexture.test(shaderToySample)) {
            let shaderToySampleuv = shaderToySample.split('varying vec2 vUv;\n');
            shaderToySample = 'varying vec2 vUv;\n' + 'uniform sampler2D  utexture;\n' + shaderToySampleuv[1];
            shaderToySample = shaderToySample.replace(/iChannel0|iChannel1|iChannel2|iChannel3/g, 'utexture');
        }

        shaderToySample.replace(/iMouse/g, 'umouse');
        let mainImage = shaderToySample.replace(/void mainImage\( out vec4 fragColor, in vec2 fragCoord \)/g, 'void main()');
        let fragColor = mainImage.replace(/fragColor/g, 'csm_DiffuseColor');
        let fragCoord = fragColor.replace(/fragCoord/g, 'vUv');
        return fragCoord;
    }
}

const {withAsyncContext:_withAsyncContext,defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,unref:_unref,normalizeProps:_normalizeProps,guardReactiveProps:_guardReactiveProps,createVNode:_createVNode,resolveComponent:_resolveComponent,mergeProps:_mergeProps,withCtx:_withCtx,openBlock:_openBlock,createBlock:_createBlock} = await importShared('vue');

const _hoisted_1 = {
  ref: "perspectiveCameraRef",
  position: [300, 250, -122],
  fov: 45,
  near: 1,
  far: 1e4
};
const _hoisted_2 = ["object", "side"];
const {reactive,onMounted} = await importShared('vue');
const {DoubleSide,Mesh,Vector2,BoxGeometry,Group,PlaneGeometry,TorusKnotGeometry} = await importShared('three');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "shadertoyMaterial",
  async setup(__props) {
    let __temp, __restore;
    const state = {
      clearColor: "#000000",
      shadows: true,
      alpha: false,
      useLegacyLights: true
    };
    const controlsState = { autoRotate: true, enableDamping: true };
    const paneControl = new Pane({ title: "参数" });
    let pTexture = ([__temp, __restore] = _withAsyncContext(() => useTexture("./plugins/earthSample/image/earthA/moon_ring.png")), __temp = await __temp, __restore(), __temp);
    let cloudModel = new Group();
    let ShaderToymaterialParams = reactive({
      material: {
        uniforms: {
          utime: {
            value: 0
          },
          uresolution: {
            value: new Vector2(40, 40)
          },
          utexture: {
            value: pTexture
          }
        }
      }
    });
    let geometry = new BoxGeometry(100, 100, 100);
    let ShaderToymaterial = new ShaderToyMaterial(`/* 
    Kishimisu's video: https://youtu.be/f4s1h2YETNY
    Kishumisu's shader link: https://www.shadertoy.com/view/mtyGWy
*/

vec3 palette( float t ) {
    vec3 a = vec3(0.5, 0.5, 0.5);
    vec3 b = vec3(0.5, 0.5, 0.5);
    vec3 c = vec3(1.0, 1.0, 1.0);
    vec3 d = vec3(0.263,0.416,0.557);

    return a + b*cos( 6.28318*(c*t+d) );
}

void mainImage( out vec4 fragColor, in vec2 fragCoord ) {
    vec2 uv = (fragCoord * 2.0 - iResolution.xy) / iResolution.y;
    vec2 uv0 = uv;
    vec3 finalColor = vec3(0.0);
    
    for (float i = 0.0; i < 5.0; i++) {
        uv = fract(uv * 1.5) - 0.5;

        float d = length(uv) * exp(-length(uv0));

        vec3 col = palette(length(uv0) + i*.4 + iTime*.4);

        d = sin(d*8. + iTime)/8.;
        d = abs(d);

        d = pow(0.01 / d, 1.2);

        finalColor += col * d;
    }
        
    fragColor = vec4(finalColor, 1.0);
}`, ShaderToymaterialParams);
    let mesh = new Mesh(geometry, ShaderToymaterial.material);
    paneControl.addBlade({
      view: "list",
      label: "shadertoy在线地址",
      parse: (v) => String(v),
      options: [
        {
          text: "1",
          value: `/* 
    Kishimisu's video: https://youtu.be/f4s1h2YETNY
    Kishumisu's shader link: https://www.shadertoy.com/view/mtyGWy
*/

vec3 palette( float t ) {
    vec3 a = vec3(0.5, 0.5, 0.5);
    vec3 b = vec3(0.5, 0.5, 0.5);
    vec3 c = vec3(1.0, 1.0, 1.0);
    vec3 d = vec3(0.263,0.416,0.557);

    return a + b*cos( 6.28318*(c*t+d) );
}

void mainImage( out vec4 fragColor, in vec2 fragCoord ) {
    vec2 uv = (fragCoord * 2.0 - iResolution.xy) / iResolution.y;
    vec2 uv0 = uv;
    vec3 finalColor = vec3(0.0);
    
    for (float i = 0.0; i < 5.0; i++) {
        uv = fract(uv * 1.5) - 0.5;

        float d = length(uv) * exp(-length(uv0));

        vec3 col = palette(length(uv0) + i*.4 + iTime*.4);

        d = sin(d*8. + iTime)/8.;
        d = abs(d);

        d = pow(0.01 / d, 1.2);

        finalColor += col * d;
    }
        
    fragColor = vec4(finalColor, 1.0);
}`
        },
        {
          text: "2",
          value: `precision highp float;


mat2 rot(float a) {
    float c = cos(a), s = sin(a);
    return mat2(c,s,-s,c);
}

const float pi = acos(-1.0);
const float pi2 = pi*2.0;

vec2 pmod(vec2 p, float r) {
    float a = atan(p.x, p.y) + pi/r;
    float n = pi2 / r;
    a = floor(a/n)*n;
    return p*rot(-a);
}

float box( vec3 p, vec3 b ) {
    vec3 d = abs(p) - b;
    return min(max(d.x,max(d.y,d.z)),0.0) + length(max(d,0.0));
}

float ifsBox(vec3 p) {
    for (int i=0; i<5; i++) {
        p = abs(p) - 1.0;
        p.xy *= rot(iTime*0.3);
        p.xz *= rot(iTime*0.1);
    }
    p.xz *= rot(iTime);
    return box(p, vec3(0.4,0.8,0.3));
}

float map(vec3 p, vec3 cPos) {
    vec3 p1 = p;
    p1.x = mod(p1.x-5., 10.) - 5.;
    p1.y = mod(p1.y-5., 10.) - 5.;
    p1.z = mod(p1.z, 16.)-8.;
    p1.xy = pmod(p1.xy, 5.0);
    return ifsBox(p1);
}

void mainImage( out vec4 fragColor, in vec2 fragCoord ) {
    vec2 p = (fragCoord.xy * 2.0 - iResolution.xy) / min(iResolution.x, iResolution.y);

    vec3 cPos = vec3(0.0,0.0, -3.0 * iTime);
    // vec3 cPos = vec3(0.3*sin(iTime*0.8), 0.4*cos(iTime*0.3), -6.0 * iTime);
    vec3 cDir = normalize(vec3(0.0, 0.0, -1.0));
    vec3 cUp  = vec3(sin(iTime), 1.0, 0.0);
    vec3 cSide = cross(cDir, cUp);

    vec3 ray = normalize(cSide * p.x + cUp * p.y + cDir);

    // Phantom Mode https://www.shadertoy.com/view/MtScWW by aiekick
    float acc = 0.0;
    float acc2 = 0.0;
    float t = 0.0;
    for (int i = 0; i < 99; i++) {
        vec3 pos = cPos + ray * t;
        float dist = map(pos, cPos);
        dist = max(abs(dist), 0.02);
        float a = exp(-dist*3.0);
        if (mod(length(pos)+24.0*iTime, 30.0) < 3.0) {
            a *= 2.0;
            acc2 += a;
        }
        acc += a;
        t += dist * 0.5;
    }

    vec3 col = vec3(acc * 0.01, acc * 0.011 + acc2*0.002, acc * 0.012+ acc2*0.005);
    fragColor = vec4(col, 1.0 - t * 0.03);
}`
        }
      ],
      value: `/* 
    Kishimisu's video: https://youtu.be/f4s1h2YETNY
    Kishumisu's shader link: https://www.shadertoy.com/view/mtyGWy
*/

vec3 palette( float t ) {
    vec3 a = vec3(0.5, 0.5, 0.5);
    vec3 b = vec3(0.5, 0.5, 0.5);
    vec3 c = vec3(1.0, 1.0, 1.0);
    vec3 d = vec3(0.263,0.416,0.557);

    return a + b*cos( 6.28318*(c*t+d) );
}

void mainImage( out vec4 fragColor, in vec2 fragCoord ) {
    vec2 uv = (fragCoord * 2.0 - iResolution.xy) / iResolution.y;
    vec2 uv0 = uv;
    vec3 finalColor = vec3(0.0);
    
    for (float i = 0.0; i < 5.0; i++) {
        uv = fract(uv * 1.5) - 0.5;

        float d = length(uv) * exp(-length(uv0));

        vec3 col = palette(length(uv0) + i*.4 + iTime*.4);

        d = sin(d*8. + iTime)/8.;
        d = abs(d);

        d = pow(0.01 / d, 1.2);

        finalColor += col * d;
    }
        
    fragColor = vec4(finalColor, 1.0);
}`
    }).on("change", (e) => {
      ShaderToymaterial = new ShaderToyMaterial(e.value, ShaderToymaterialParams);
      mesh.material = ShaderToymaterial.material;
      cloudModel.add(mesh);
      updateGroupGeometry(cloudModel, geometry);
    });
    let BOX = new BoxGeometry(100, 100, 100);
    let Plane = new PlaneGeometry(100, 100);
    let TorusKnot = new TorusKnotGeometry(100, 10, 100, 16);
    paneControl.addBlade({
      view: "list",
      label: "几何体",
      options: [
        { text: "BOX", value: BOX },
        { text: "Plane", value: Plane },
        { text: "TorusKnot", value: TorusKnot }
      ],
      value: BOX
    }).on("change", (e) => {
      geometry = e.value;
      mesh.geometry = geometry;
      cloudModel.add(mesh);
      updateGroupGeometry(cloudModel, geometry);
    });
    const updateGroupGeometry = (mesh2, geometry2) => {
      mesh2.children[0].geometry.dispose();
      mesh2.children[0].geometry = geometry2;
    };
    const onLoop = ({ delta }) => {
      ShaderToymaterialParams.material.uniforms.utime.value += delta * 10;
    };
    onMounted(() => {
      cloudModel.add(mesh);
      updateGroupGeometry(cloudModel, geometry);
    });
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createBlock(_component_TresCanvas, _mergeProps(state, {
        "window-size": "",
        onLoop
      }), {
        default: _withCtx(() => [
          _createElementVNode("TresPerspectiveCamera", _hoisted_1, null, 512),
          _createVNode(_unref(Kk), _normalizeProps(_guardReactiveProps(controlsState)), null, 16),
          _cache[0] || (_cache[0] = _createElementVNode("TresAmbientLight", { color: "#ffffff" }, null, -1)),
          _cache[1] || (_cache[1] = _createElementVNode("TresDirectionalLight", {
            position: [100, 100, 0],
            intensity: 0.5,
            color: "#ffffff"
          }, null, -1)),
          _createElementVNode("primitive", {
            object: _unref(cloudModel),
            side: _unref(DoubleSide)
          }, null, 8, _hoisted_2),
          _cache[2] || (_cache[2] = _createElementVNode("TresAxesHelper", {
            args: [1e3],
            position: [0, 19, 0]
          }, null, -1)),
          _cache[3] || (_cache[3] = _createElementVNode("TresGridHelper", {
            args: [6e3, 100],
            position: [0, 19, 0]
          }, null, -1))
        ]),
        _: 1
      }, 16);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=shadertoyMaterial.XFLtwwqF1767105581793.js.map
