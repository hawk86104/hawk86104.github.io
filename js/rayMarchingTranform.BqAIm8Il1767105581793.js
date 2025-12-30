import { importShared, _l, Kk } from './index.BxB45aCK1767105581793.js';

const stringVertex = "varying vec2 vUv;\nvoid main(){\n\tgl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);\n\tvUv=uv;\n}";

const stringFrag = "#ifdef GL_ES\nprecision mediump float;\n#endif\n\nuniform vec2 u_resolution;\nuniform vec3 u_mouse;\nuniform float u_time;\nvarying vec2 vUv;\nfloat sphere(vec3 p,float d){\n  return(length(p*abs(sin(u_time))*2.)-d)/abs(sin(u_time))/2.;\n}\nmat2 rot2D(float angle){\n  float s=sin(angle);\n  float c=cos(angle);\n  return mat2(c,-s,s,c);\n}\nfloat map(vec3 p){\n  p.xy*=rot2D(u_time);\n  vec3 pos=vec3(sin(u_time*10.),0.,0.);\n  float spheresdf=sphere(p-pos,.5);\n  return spheresdf;\n}\n\nvoid main(){\n  vec3 ro=vec3(0.,0.,-3.);//起始位置\n  vec3 rd=normalize(vec3(vUv-.5,1.));//方向\n  float t=0.;\n  vec3 color=vec3(0.);\n  for(int i=0;i<80;i++){\n    vec3 p=ro+rd*t;\n    float d=map(p);\n    t+=d;\n    //优化效率\n    if(t>100.||d<.001){\n      break;\n    }\n    \n  }\n  color=vec3(t)*.2;\n  gl_FragColor=vec4(color,1.);\n  \n}";

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
  __name: "rayMarchingMaterialTranform",
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
  __name: "rayMarchingTranform",
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
//# sourceMappingURL=rayMarchingTranform.BqAIm8Il1767105581793.js.map
