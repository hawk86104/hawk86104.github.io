import { importShared, _l, oz, Kk } from './index.BxB45aCK1767105581793.js';
import { _sfc_main as _sfc_main$2, _sfc_main$1 as _sfc_main$3 } from './customShaderMaterial.vue_vue_type_script_setup_true_lang.rDMIDGqx1767105581793.js';
import './index.vue_vue_type_script_setup_true_lang.D7-hpzmy1767105581793.js';
import { Pane } from './tweakpane.Cvt5w0bb1767105581793.js';

var waterGlass_default="uniform float time;\nuniform float amplitude;\nuniform float speed;\nuniform float frequency;\n\nvec3 mod289(vec3 x){\n	return x-floor(x*(1./289.))*289.;\n}\n\nvec4 mod289(vec4 x){\n	return x-floor(x*(1./289.))*289.;\n}\n\nvec4 permute(vec4 x){\n	return mod289(((x*34.)+1.)*x);\n}\n\nvec4 taylorInvSqrt(vec4 r){\n	return 1.79284291400159-.85373472095314*r;\n}\n\nfloat noise(vec3 v){\n	const vec2 C=vec2(1./6.,1./3.);\n	const vec4 D=vec4(0.,.5,1.,2.);\n	\n	\n	vec3 i=floor(v+dot(v,C.yyy));\n	vec3 x0=v-i+dot(i,C.xxx);\n	\n	\n	vec3 g=step(x0.yzx,x0.xyz);\n	vec3 l=1.-g;\n	vec3 i1=min(g.xyz,l.zxy);\n	vec3 i2=max(g.xyz,l.zxy);\n	\n	vec3 x1=x0-i1+C.xxx;\n	vec3 x2=x0-i2+C.yyy;\n	vec3 x3=x0-D.yyy;\n	\n	\n	i=mod289(i);\n	vec4 p=permute(permute(permute(\n				i.z+vec4(0.,i1.z,i2.z,1.))\n				+i.y+vec4(0.,i1.y,i2.y,1.))\n				+i.x+vec4(0.,i1.x,i2.x,1.));\n				\n				float n_=.142857142857;\n				vec3 ns=n_*D.wyz-D.xzx;\n				\n				vec4 j=p-49.*floor(p*ns.z*ns.z);\n				\n				vec4 x_=floor(j*ns.z);\n				vec4 y_=floor(j-7.*x_);\n				\n				vec4 x=x_*ns.x+ns.yyyy;\n				vec4 y=y_*ns.x+ns.yyyy;\n				vec4 h=1.-abs(x)-abs(y);\n				\n				vec4 b0=vec4(x.xy,y.xy);\n				vec4 b1=vec4(x.zw,y.zw);\n				\n				vec4 s0=floor(b0)*2.+1.;\n				vec4 s1=floor(b1)*2.+1.;\n				vec4 sh=-step(h,vec4(0.));\n				\n				vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;\n				vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;\n				\n				vec3 p0=vec3(a0.xy,h.x);\n				vec3 p1=vec3(a0.zw,h.y);\n				vec3 p2=vec3(a1.xy,h.z);\n				vec3 p3=vec3(a1.zw,h.w);\n				\n				\n				vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));\n				p0*=norm.x;\n				p1*=norm.y;\n				p2*=norm.z;\n				p3*=norm.w;\n				\n				\n				vec4 m=max(.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.);\n				m=m*m;\n				return 42.*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),\n				dot(p2,x2),dot(p3,x3)));\n			}\n			\n			\n			float displace(vec3 point){\n				return noise(vec3(point.x*frequency,point.y*frequency,time*speed))*amplitude;\n			}\n			\n			vec3 orthogonal(vec3 v){\n				return normalize(abs(v.x)>abs(v.z)\n				?vec3(-v.y,v.x,0.)\n				:vec3(0.,-v.z,v.y));\n			}\n			\n			void main(){\n				vec3 displacedPosition=position+normal*displace(position);\n				\n				float offset=.0001;\n				vec3 tangent=orthogonal(normal);\n				vec3 bitangent=normalize(cross(normal,tangent));\n				vec3 neighbour1=position+tangent*offset;\n				vec3 neighbour2=position+bitangent*offset;\n				vec3 displacedNeighbour1=neighbour1+normal*displace(neighbour1);\n				vec3 displacedNeighbour2=neighbour2+normal*displace(neighbour2);\n				\n				vec3 displacedTangent=displacedNeighbour1-displacedPosition;\n				vec3 displacedBitangent=displacedNeighbour2-displacedPosition;\n				\n				vec3 displacedNormal=normalize(cross(displacedTangent,displacedBitangent));\n				\n				\n				\n				csm_Normal=normalMatrix*displacedNormal;\n				\n				\n				csm_Position=displacedPosition;\n			}";

const {defineComponent:_defineComponent$1} = await importShared('vue');

const {createElementVNode:_createElementVNode$1,unref:_unref$1,mergeProps:_mergeProps$1,createVNode:_createVNode$1,openBlock:_openBlock$1,createElementBlock:_createElementBlock} = await importShared('vue');

const _hoisted_1 = ["rotation-x"];
const THREE$1 = await importShared('three');
const {watch} = await importShared('vue');
const _sfc_main$1 = /* @__PURE__ */ _defineComponent$1({
  __name: "waterGlass",
  props: {
    color: { default: "#fff" },
    amplitude: { default: 0.066 },
    frequency: { default: 5 }
  },
  setup(__props) {
    const props = __props;
    const uniforms = {
      time: { type: "f", value: 0.1 },
      amplitude: { type: "f", value: props.amplitude },
      speed: { type: "f", value: 0.277 },
      frequency: { type: "f", value: props.frequency }
    };
    const smState = {
      side: THREE$1.DoubleSide,
      // ior: 1.0,
      // reflectivity: 1.0,
      // sheen: 0.1,
      // sheenColor: new THREE.Color('#346DB7'),
      // transparent: true,
      // opacity: 0.9,
      // depthWrite: false,
      // depthTest: true,
      color: new THREE$1.Color(props.color),
      metalness: 0.087,
      roughness: 0,
      transmission: 1,
      thickness: 1.5,
      refractionRatio: 1.5
    };
    const { onBeforeRender } = _l();
    onBeforeRender(({ delta }) => {
      uniforms.time.value += delta;
    });
    watch(
      () => props,
      () => {
        smState.color = new THREE$1.Color(props.color);
        uniforms.amplitude.value = props.amplitude;
        uniforms.frequency.value = props.frequency;
      },
      { deep: true }
    );
    return (_ctx, _cache) => {
      return _openBlock$1(), _createElementBlock("TresMesh", {
        "rotation-x": -Math.PI / 2,
        "position-y": 0.1
      }, [
        _cache[0] || (_cache[0] = _createElementVNode$1("TresPlaneGeometry", { args: [1, 1, 64, 64] }, null, -1)),
        _createVNode$1(_unref$1(oz), _mergeProps$1(smState, {
          baseMaterial: THREE$1.MeshPhysicalMaterial,
          vertexShader: _unref$1(waterGlass_default),
          uniforms,
          silent: ""
        }), null, 16, ["baseMaterial", "vertexShader"])
      ], 8, _hoisted_1);
    };
  }
});

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,normalizeProps:_normalizeProps,guardReactiveProps:_guardReactiveProps,createVNode:_createVNode,unref:_unref,withCtx:_withCtx,Suspense:_Suspense,openBlock:_openBlock,createBlock:_createBlock,resolveComponent:_resolveComponent,mergeProps:_mergeProps} = await importShared('vue');
const {reactive} = await importShared('vue');

const THREE = await importShared('three');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "waterGlass",
  setup(__props) {
    const gl = {
      clearColor: "#222",
      shadows: true,
      alpha: false,
      shadowMapType: THREE.BasicShadowMap,
      outputColorSpace: THREE.SRGBColorSpace,
      toneMapping: THREE.NoToneMapping,
      useLegacyLights: true,
      antialias: true,
      //开启锯齿
      logarithmicDepthBuffer: true
    };
    const typeState = reactive({
      color: "#b367ff",
      amplitude: 0.066,
      frequency: 5
    });
    const paneControl = new Pane({
      title: "参数",
      expanded: true
    });
    paneControl.addBinding(typeState, "color", {
      label: "颜色"
    });
    paneControl.addBinding(typeState, "amplitude", {
      label: "amplitude",
      min: 0.01,
      max: 0.2,
      step: 0.01
    });
    paneControl.addBinding(typeState, "frequency", {
      label: "frequency",
      min: 0.1,
      max: 10,
      step: 0.1
    });
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createBlock(_component_TresCanvas, _mergeProps(gl, { "window-size": "" }), {
        default: _withCtx(() => [
          _cache[0] || (_cache[0] = _createElementVNode("TresPerspectiveCamera", { position: [1, 1, 1] }, null, -1)),
          _cache[1] || (_cache[1] = _createElementVNode("TresAmbientLight", { intensity: 1 }, null, -1)),
          _createVNode(_sfc_main$1, _normalizeProps(_guardReactiveProps(typeState)), null, 16),
          _createVNode(_unref(Kk)),
          _cache[2] || (_cache[2] = _createElementVNode("TresGridHelper", { args: [1, 10] }, null, -1)),
          (_openBlock(), _createBlock(_Suspense, null, {
            default: _withCtx(() => [
              _createVNode(_unref(_sfc_main$2), {
                intensity: 16,
                resolution: 256,
                background: "",
                blur: 0.6
              }, {
                default: _withCtx(() => [
                  _createVNode(_unref(_sfc_main$3), {
                    intensity: 10,
                    form: "circle",
                    "rotation-x": Math.PI / 2,
                    position: [2 * 4 - 3 * 4 / 2, 4, 0],
                    scale: [1, 5, 0]
                  }, null, 8, ["rotation-x"]),
                  _createVNode(_unref(_sfc_main$3), {
                    intensity: 10,
                    form: "circle",
                    "rotation-x": Math.PI / 2,
                    position: [-12 / 2, 4, 0],
                    scale: [1, 5, 0]
                  }, null, 8, ["rotation-x"]),
                  _createVNode(_unref(_sfc_main$3), {
                    intensity: 5,
                    "rotation-y": -Math.PI / 2,
                    position: [-1, 0, 0],
                    scale: [10, 0.2, 1]
                  }, null, 8, ["rotation-y"]),
                  _createVNode(_unref(_sfc_main$3), {
                    intensity: 5,
                    "rotation-y": -Math.PI / 2,
                    position: [1, 0, 0],
                    scale: [10, 0.2, 1]
                  }, null, 8, ["rotation-y"])
                ]),
                _: 1
              })
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
//# sourceMappingURL=waterGlass.C8b_Vg3g1767105581793.js.map
