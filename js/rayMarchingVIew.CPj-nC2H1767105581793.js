import { importShared, _l, Kk } from './index.BxB45aCK1767105581793.js';

const stringVertex = "varying vec2 vUv;\nvoid main(){\n\tgl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);\n\tvUv=uv;\n}";

const stringFrag = "#ifdef GL_ES\nprecision mediump float;\n#endif\n\nuniform vec2 u_resolution;\nuniform vec3 u_mouse;\nuniform float u_time;\nvarying vec2 vUv;\nvec3 palette(float t){\n\tvec3 a=vec3(.5,.5,.5);\n\tvec3 b=vec3(.5,.5,.5);\n\tvec3 c=vec3(1.,1.,1.);\n\tvec3 d=vec3(.263,.416,.557);\n\t\n\treturn a+b*cos(6.28318*(c*t+d));\n}\n\nmat2 rot2D(float angle){\n\tfloat s=sin(angle);\n\tfloat c=cos(angle);\n\treturn mat2(c,-s,s,c);\n}\n\nfloat sdPyramid(vec3 p,float h)\n{\n\tfloat m2=h*h+.25;\n\t\n\tp.xz=abs(p.xz);\n\tp.xz=(p.z>p.x)?p.zx:p.xz;\n\tp.xz-=.5;\n\t\n\tvec3 q=vec3(p.z,h*p.y-.5*p.x,h*p.x+.5*p.y);\n\t\n\tfloat s=max(-q.x,0.);\n\tfloat t=clamp((q.y-.5*p.z)/(m2+.25),0.,1.);\n\t\n\tfloat a=m2*(q.x+s)*(q.x+s)+q.y*q.y;\n\tfloat b=m2*(q.x+.5*t)*(q.x+.5*t)+(q.y-m2*t)*(q.y-m2*t);\n\t\n\tfloat d2=min(q.y,-q.x*m2-q.y*.5)>0.?0.:min(a,b);\n\t\n\treturn sqrt((d2+q.z*q.z)/m2)*sign(max(q.z,-p.y));\n}\nfloat sdBoxFrame(vec3 p,vec3 b,float e)\n{\n\tp=abs(p)-b;\n\tvec3 q=abs(p+e)-e;\n\treturn min(min(\n\t\t\tlength(max(vec3(p.x,q.y,q.z),0.))+min(max(p.x,max(q.y,q.z)),0.),\n\t\t\tlength(max(vec3(q.x,p.y,q.z),0.))+min(max(q.x,max(p.y,q.z)),0.)),\n\t\t\tlength(max(vec3(q.x,q.y,p.z),0.))+min(max(q.x,max(q.y,p.z)),0.));\n\t\t}\n\t\tfloat map(vec3 p){\n\t\t\tp.z+=u_time*.4;\n\t\t\t\n\t\t\tp.xy=fract(p.xy)-.5;\n\t\t\tp.z=mod(p.z,.25)-.125;\n\t\t\tfloat box=sdBoxFrame(p*8.,vec3(.5,.3,.5),.025)/8.;\n\t\t\t// box=min(sdPyramid(p*15.,1.5)/15.,box);\n\t\t\treturn box;\n\t\t}\n\t\t\n\t\tvoid main(){\n\t\t\tvec2 uv=vUv-vec2(.5);\n\t\t\tvec2 m=(u_mouse.xy*2.-u_resolution.xy)/u_resolution.y;\n\t\t\t\n\t\t\t//变量初始化\n\t\t\tvec3 ro=vec3(0.,0.,-3.);\n\t\t\tvec3 rd=normalize(vec3(uv,1.));\n\t\t\tvec3 col=vec3(0);\n\t\t\t\n\t\t\tfloat t=0.;\n\t\t\t\n\t\t\t// 鼠标控制\n\t\t\t// if(u_mouse.z<0.)\n\t\t\t// m=vec2(cos(u_time*.2),sin(u_time*.2));\n\t\t\t\n\t\t\t// 光追\n\t\t\tint i;\n\t\t\tfor(i=0;i<80;i++){\n\t\t\t\tvec3 p=ro+rd*t;\n\t\t\t\t\n\t\t\t\tp.xy*=rot2D(t*.2);\n\t\t\t\tp.y+=sin(t*(1.)*.5)*.35;\n\t\t\t\t\n\t\t\t\tfloat d=map(p);\n\t\t\t\t\n\t\t\t\tt+=d;\n\t\t\t\t\n\t\t\t\tif(d<.001||t>100.)break;\n\t\t\t}\n\t\t\t\n\t\t\t// coloring\n\t\t\tcol=palette(t*.04+float(i)*.005);\n\t\t\t\n\t\t\tgl_FragColor=vec4(col,1.);\n\t\t}";

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
  __name: "rayMarchingMaterial",
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
    onBeforeRender(() => {
      shader.uniforms.u_time.value += 0.01;
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
  position: [0, 500, 0],
  fov: 45,
  near: 1,
  far: 1e4
};
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "rayMarchingVIew",
  setup(__props) {
    const state = {
      clearColor: "#000000",
      shadows: true,
      alpha: false,
      useLegacyLights: true
    };
    const controlsState = { autoRotate: false, enableDamping: true };
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
          _createVNode(_sfc_main$1),
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
//# sourceMappingURL=rayMarchingVIew.CPj-nC2H1767105581793.js.map
