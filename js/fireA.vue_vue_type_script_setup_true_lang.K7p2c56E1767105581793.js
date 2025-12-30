import { importShared, no, _l } from './index.BxB45aCK1767105581793.js';

var fireA_default$1="varying vec3 vWorldPos;\nuniform float fireScale;\nuniform vec3 offsetPositin;\nvarying vec3 vUnCameraPosition;\nvoid main(){\n    gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);\n    vWorldPos=(modelMatrix*vec4(position,1.)).xyz;\n    vUnCameraPosition=cameraPosition-offsetPositin;\n    vWorldPos.x=vWorldPos.x-offsetPositin.x;\n    vWorldPos.y=vWorldPos.y-offsetPositin.y-.46*fireScale;\n    vWorldPos.z=vWorldPos.z-offsetPositin.z;\n    vWorldPos=vWorldPos/fireScale;\n}";

var fireA_default="uniform vec3 color;\nuniform float time;\nuniform float seed;\nuniform mat4 invModelMatrix;\nuniform vec3 scale;\n\nuniform vec4 noiseScale;\nuniform float magnitude;\nuniform float lacunarity;\nuniform float gain;\n\nuniform sampler2D fireTex;\n\nvarying vec3 vWorldPos;\nvarying vec3 vUnCameraPosition;\n\nvec3 mod289(vec3 x){\n    return x-floor(x*(1./289.))*289.;\n}\n\nvec4 mod289(vec4 x){\n    return x-floor(x*(1./289.))*289.;\n}\n\nvec4 permute(vec4 x){\n    return mod289(((x*34.)+1.)*x);\n}\n\nvec4 taylorInvSqrt(vec4 r){\n    return 1.79284291400159-.85373472095314*r;\n}\n\nfloat snoise(vec3 v){\n    const vec2 C=vec2(1./6.,1./3.);\n    const vec4 D=vec4(0.,.5,1.,2.);\n    \n    \n    vec3 i=floor(v+dot(v,C.yyy));\n    vec3 x0=v-i+dot(i,C.xxx);\n    \n    \n    vec3 g=step(x0.yzx,x0.xyz);\n    vec3 l=1.-g;\n    vec3 i1=min(g.xyz,l.zxy);\n    vec3 i2=max(g.xyz,l.zxy);\n    \n    \n    \n    \n    \n    vec3 x1=x0-i1+C.xxx;\n    vec3 x2=x0-i2+C.yyy;\n    vec3 x3=x0-D.yyy;\n    \n    \n    i=mod289(i);\n    vec4 p=permute(permute(permute(\n                i.z+vec4(0.,i1.z,i2.z,1.))\n                +i.y+vec4(0.,i1.y,i2.y,1.))\n                +i.x+vec4(0.,i1.x,i2.x,1.));\n                \n                \n                \n                float n_=.142857142857;\n                vec3 ns=n_*D.wyz-D.xzx;\n                \n                vec4 j=p-49.*floor(p*ns.z*ns.z);\n                \n                vec4 x_=floor(j*ns.z);\n                vec4 y_=floor(j-7.*x_);\n                \n                vec4 x=x_*ns.x+ns.yyyy;\n                vec4 y=y_*ns.x+ns.yyyy;\n                vec4 h=1.-abs(x)-abs(y);\n                \n                vec4 b0=vec4(x.xy,y.xy);\n                vec4 b1=vec4(x.zw,y.zw);\n                \n                \n                \n                vec4 s0=floor(b0)*2.+1.;\n                vec4 s1=floor(b1)*2.+1.;\n                vec4 sh=-step(h,vec4(0.));\n                \n                vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;\n                vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;\n                \n                vec3 p0=vec3(a0.xy,h.x);\n                vec3 p1=vec3(a0.zw,h.y);\n                vec3 p2=vec3(a1.xy,h.z);\n                vec3 p3=vec3(a1.zw,h.w);\n                \n                \n                vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));\n                p0*=norm.x;\n                p1*=norm.y;\n                p2*=norm.z;\n                p3*=norm.w;\n                \n                \n                vec4 m=max(.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.);\n                m=m*m;\n                return 42.*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));\n            }\n            \n            \n            float turbulence(vec3 p){\n                float sum=0.;\n                float freq=1.;\n                float amp=1.;\n                \n                for(int i=0;i<OCTIVES;i++){\n                    sum+=abs(snoise(p*freq))*amp;\n                    freq*=lacunarity;\n                    amp*=gain;\n                }\n                \n                return sum;\n            }\n            \n            vec4 samplerFire(vec3 p,vec4 scale){\n                vec2 st=vec2(sqrt(dot(p.xz,p.xz)),p.y);\n                \n                if(st.x<=0.||st.x>=1.||st.y<=0.||st.y>=1.)return vec4(0.);\n                \n                p.y-=(seed+time)*scale.w;\n                p*=scale.xyz;\n                \n                st.y+=sqrt(st.y)*magnitude*turbulence(p);\n                \n                if(st.y<=0.||st.y>=1.)return vec4(0.);\n                \n                return texture2D(fireTex,st);\n            }\n            \n            vec3 localize(vec3 p){\n                return(invModelMatrix*vec4(p,1.)).xyz;\n            }\n            \n            void main(){\n                vec3 rayPos=vWorldPos;\n                vec3 rayDir=normalize(rayPos-vUnCameraPosition);\n                float rayLen=.0288*length(scale.xyz);\n                \n                vec4 col=vec4(0.);\n                \n                for(int i=0;i<ITERATIONS;i++){\n                    rayPos+=rayDir*rayLen;\n                    \n                    vec3 lp=localize(rayPos);\n                    \n                    lp.y+=.5;\n                    lp.xz*=2.;\n                    col+=samplerFire(lp,noiseScale);\n                }\n                if(col.x<.12&&col.y<.12&&col.z<.12){\n                    gl_FragColor=vec4(0,0,0,0);\n                    \n                }else{\n                    gl_FragColor=col;\n                    \n                }\n                \n            }";

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,normalizeProps:_normalizeProps,guardReactiveProps:_guardReactiveProps,openBlock:_openBlock,createElementBlock:_createElementBlock} = await importShared('vue');

const _hoisted_1 = ["scale"];
const {watch,watchEffect,useAttrs} = await importShared('vue');
const {Vector4,Color,Matrix4,Vector3,DoubleSide} = await importShared('three');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "fireA",
  props: {
    fireScale: { default: 60 },
    magnitude: { default: 1.3 },
    lacunarity: { default: 2 },
    gain: { default: 1 }
  },
  setup(__props) {
    const props = __props;
    const { state: fireTex } = no("./plugins/digitalCity/image/fire.png");
    const attrs = useAttrs();
    const fireShader = {
      defines: {
        ITERATIONS: "20",
        OCTIVES: "3"
      },
      uniforms: {
        fireScale: { value: props.fireScale },
        offsetPositin: { value: attrs.position },
        fireTex: { value: null },
        color: { value: new Color(16777215) },
        time: { value: 0 },
        seed: { value: Math.random() * 19.19 },
        invModelMatrix: { value: new Matrix4() },
        scale: { value: new Vector3(1, 1, 1) },
        noiseScale: { value: new Vector4(1, 2, 1, 0.3) },
        magnitude: { value: props.magnitude },
        lacunarity: { value: props.lacunarity },
        gain: { value: props.gain }
      },
      vertexShader: fireA_default$1,
      fragmentShader: fireA_default,
      transparent: true,
      depthWrite: true,
      depthTest: true,
      side: DoubleSide
    };
    watch(
      () => fireTex.value,
      (mapv) => {
        if (!mapv) return;
        fireShader.uniforms.fireTex.value = mapv;
      }
    );
    const { onBeforeRender } = _l();
    onBeforeRender(() => {
      fireShader.uniforms.time.value += 0.01;
    });
    watchEffect(() => {
      if (props.fireScale) {
        fireShader.uniforms.fireScale.value = props.fireScale;
      }
      if (props.magnitude) {
        fireShader.uniforms.magnitude.value = props.magnitude;
      }
      if (props.lacunarity) {
        fireShader.uniforms.lacunarity.value = props.lacunarity;
      }
      if (props.gain) {
        fireShader.uniforms.gain.value = props.gain;
      }
    });
    return (_ctx, _cache) => {
      return _openBlock(), _createElementBlock("TresMesh", {
        scale: props.fireScale,
        renderOrder: 9999
      }, [
        _cache[0] || (_cache[0] = _createElementVNode("TresSphereGeometry", { args: [1, 32, 16] }, null, -1)),
        _createElementVNode("TresShaderMaterial", _normalizeProps(_guardReactiveProps(fireShader)), null, 16)
      ], 8, _hoisted_1);
    };
  }
});

export { _sfc_main };
//# sourceMappingURL=fireA.vue_vue_type_script_setup_true_lang.K7p2c56E1767105581793.js.map
