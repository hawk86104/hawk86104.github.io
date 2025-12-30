import { importShared, _l, Kk } from './index.BxB45aCK1767105581793.js';

const stringVertex = "varying vec2 vUv;\nvoid main(){\n\tgl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);\n\tvUv=uv;\n}";

const stringFrag = "#ifdef GL_ES\nprecision mediump float;\n#endif\n\nuniform vec2 u_resolution;\nuniform vec3 u_mouse;\nuniform float u_time;\nvarying vec2 vUv;\n\nmat2 rot2D(float angle){\n  float s=sin(angle);\n  float c=cos(angle);\n  return mat2(c,-s,s,c);\n}\n\nfloat sdCutHollowSphere(vec3 p,float r,float h,float t)\n{\n  float w=sqrt(r*r-h*h);\n  vec2 q=vec2(length(p.xz),p.y);\n  return((h*q.x<w*q.y)?length(q-vec2(w,h)):\n  abs(length(q)-r))-t;\n}\nvec4 sdstripe(vec3 p,vec3 color){\n  p.xz=abs(p.xz);\n  float d1=sdCutHollowSphere(p-vec3(.0,-3.3,0.),.8,.01,.01);\n  float d2=sdCutHollowSphere(p-vec3(.9,-3.3,.9),.5,.005,.01);\n  float d=min(d1,d2);\n  return vec4(d,color);\n}\nvec4 sdCutSphere(vec3 p,float r,float h,vec3 color)\n{\n  \n  float w=sqrt(r*r-h*h);\n  \n  vec2 q=vec2(length(p.xz),p.y);\n  float s=max((h-r)*q.x*q.x+w*w*(h+r-2.*q.y),h*q.x-w*q.y);\n  float d=(s<0.)?length(q)-r:\n  (q.x<w)?h-q.y:\n  length(q-vec2(w,h));\n  \n  return vec4(d,color);\n}\nvec4 sdPlane(vec3 p,vec3 color){\n  return vec4(-p.y+.2,color);\n  \n}\nvec4 sdCappedCone(vec3 p,vec3 a,vec3 b,float ra,float rb,vec3 color)\n{\n  float rba=rb-ra;\n  float baba=dot(b-a,b-a);\n  float papa=dot(p-a,p-a);\n  float paba=dot(p-a,b-a)/baba;\n  float x=sqrt(papa-paba*paba*baba);\n  float cax=max(0.,x-((paba<.5)?ra:rb));\n  float cay=abs(paba-.5)-.5;\n  float k=rba*rba+baba;\n  float f=clamp((rba*(x-ra)+paba*baba)/k,0.,1.);\n  float cbx=x-ra-f*rba;\n  float cby=paba-f;\n  float s=(cbx<0.&&cay<0.)?-1.:1.;\n  return vec4(s*sqrt(min(cax*cax+cay*cay*baba,\n      cbx*cbx+cby*cby*baba)),color);\n    }\n    float smin(float d1,float d2,float k){\n      float h=clamp(.5+.5*(d2-d1)/k,0.,1.);\n      return mix(d2,d1,h)-k*h*(1.-h);\n    }\n    vec4 colorMin(vec4 a,vec4 b){\n      if(a.x<b.x){\n        return a;\n      }else{\n        return b;\n      }\n    }\n    //模糊摆动，y的值越大，摆动频率越大\n    vec3 bendPoint(vec3 p,float k)\n    {\n      float c=cos(k*p.y);\n      float s=sin(k*p.y);\n      mat2 m=mat2(c,-s,s,c);\n      vec3 q=vec3(m*p.xy,p.z);\n      return q;\n    }\n    vec4 map(vec3 p){\n      vec3 q=p;\n      p=bendPoint(p,sin(u_time*5.));\n      vec3 pp2=vec3(0.,.8,0.);\n      vec3 pp1=vec3(0.,-.2,0.);\n      vec4 CappedConesdf=sdCappedCone(-p,pp1,pp2,.2,.1,vec3(.8667,.8667,.7216));\n      vec4 CutSpheresdf=sdCutSphere(-p-vec3(0.,.4,0.),.5,.2,vec3(.9608,.4667,.4))-.1;\n      vec4 entity=colorMin(CappedConesdf,CutSpheresdf);\n      entity=colorMin(entity,sdstripe(p*4.,vec3(3.5))/4.);\n      entity=colorMin(entity,sdPlane(q,vec3(.4196,.5529,.3647)));\n      return entity;\n    }\n    \n    void main(){\n      vec3 ro=vec3(0.,0.,-8.);//起始位置\n      vec3 rd=normalize(vec3(vUv-.5,1.));//方向\n      ro.xz*=rot2D(-u_time);\n      rd.xz*=rot2D(-u_time);\n      ro.y-=4.;\n      rd.y+=.5;\n      float t=0.;\n      vec4 color=vec4(0.);\n      for(int i=0;i<80;i++){\n        vec3 p=ro+rd*t;\n        vec4 d=map(p)/1.8;\n        t+=d.x;\n        //优化效率\n        if(t>100.||d.x<.001){\n          break;\n        }\n        color=vec4(t*d.yzw*.13,1.);\n      }\n      \n      gl_FragColor=color;\n      \n    }";

const {defineComponent:_defineComponent$1} = await importShared('vue');

const {createElementVNode:_createElementVNode$1,normalizeProps:_normalizeProps$1,guardReactiveProps:_guardReactiveProps$1,openBlock:_openBlock$1,createElementBlock:_createElementBlock} = await importShared('vue');

const _hoisted_1$1 = ["rotation"];
const _hoisted_2 = {
  ref: "TresTubeGeometryRef",
  args: [1e3, 1e3]
};
const {DoubleSide,Vector2} = await importShared('three');

const {watchEffect} = await importShared('vue');
const _sfc_main$1 = /* @__PURE__ */ _defineComponent$1({
  __name: "rayMarchingMaterialMushroom",
  setup(__props) {
    const { onBeforeRender } = _l();
    const shader = {
      transparent: true,
      depthWrite: true,
      depthTest: true,
      side: DoubleSide,
      vertexShader: stringVertex,
      fragmentShader: stringFrag,
      uniforms: {
        u_resolution: {
          value: new Vector2(window.innerWidth, window.innerHeight)
        },
        u_mouse: {
          value: new Vector2(0, 0)
        },
        u_time: {
          value: 0
        }
      }
    };
    const windowHalfX = window.innerWidth / 2;
    const windowHalfY = window.innerHeight / 2;
    let mouseX = 0;
    let mouseY = 0;
    function onMouseMove(e) {
      mouseX = e.clientX - windowHalfX;
      mouseY = e.clientY - windowHalfY;
    }
    document.addEventListener("mousemove", onMouseMove, false);
    watchEffect(() => {
    });
    onBeforeRender(({ elapsed }) => {
      shader.uniforms.u_time.value += 1e-3;
      shader.uniforms.u_mouse.value = new Vector2(mouseX, mouseY);
    });
    return (_ctx, _cache) => {
      return _openBlock$1(), _createElementBlock("TresMesh", {
        ref: "MeshRef",
        rotation: [Math.PI / 2, 0, 0]
      }, [
        _createElementVNode$1("TresPlaneGeometry", _hoisted_2, null, 512),
        _createElementVNode$1("TresShaderMaterial", _normalizeProps$1(_guardReactiveProps$1(shader)), null, 16)
      ], 8, _hoisted_1$1);
    };
  }
});

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,unref:_unref,normalizeProps:_normalizeProps,guardReactiveProps:_guardReactiveProps,createVNode:_createVNode,resolveComponent:_resolveComponent,mergeProps:_mergeProps,withCtx:_withCtx,openBlock:_openBlock,createBlock:_createBlock} = await importShared('vue');

const _hoisted_1 = {
  ref: "perspectiveCameraRef",
  position: [0, 1500, 0],
  fov: 45,
  near: 1,
  far: 1e4
};
const {onMounted} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "rayMarchingMushroom",
  setup(__props) {
    const state = {
      clearColor: "#000000",
      shadows: true,
      alpha: false,
      useLegacyLights: true
    };
    const controlsState = { autoRotate: false, enableDamping: true };
    onMounted(() => {
    });
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createBlock(_component_TresCanvas, _mergeProps(state, { "window-size": "" }), {
        default: _withCtx(() => [
          _createElementVNode("TresPerspectiveCamera", _hoisted_1, null, 512),
          _createVNode(_unref(Kk), _normalizeProps(_guardReactiveProps(controlsState)), null, 16),
          _cache[0] || (_cache[0] = _createElementVNode("TresAmbientLight", { color: "#ffffff" }, null, -1)),
          _cache[1] || (_cache[1] = _createElementVNode("TresDirectionalLight", {
            position: [100, 100, 0],
            intensity: 0.5,
            color: "#ffffff"
          }, null, -1)),
          _createVNode(_sfc_main$1)
        ]),
        _: 1
      }, 16);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=rayMarchingMushroom.CQnhHUmF1767105581793.js.map
