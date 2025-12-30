import { importShared, Kk } from './index.BxB45aCK1767105581793.js';
import { argestCircle_default as argestCircle_default$1 } from './argestCircle.B4IuVIc61767105581793.js';

var argestCircle_default="varying vec2 vUv;\nuniform float uTime;\nstruct VoronoiData{\n	float dist;\n	float edgedist;\n	vec2 edgenormal;\n	vec2 point;\n};\n\nvec2 hash22(vec2 p)\n{\n	vec3 p3=fract(vec3(p.xyx)*vec3(.1031,.1030,.0973));\n	p3+=dot(p3,p3.yzx+33.33);\n	return fract((p3.xx+p3.yz)*p3.zy);\n}\nVoronoiData voronoi2dedges(vec2 uv){\n	vec2 n=floor(uv);\n	vec2 f=fract(uv);\n	\n	vec2 mg,mr;\n	\n	float md=8.;\n	for(int j=-1;j<=1;j++)\n	for(int i=-1;i<=1;i++){\n		vec2 g=vec2(i,j);\n		vec2 o=hash22(n+g);\n		vec2 r=g+o-f;\n		float d=dot(r,r);\n		\n		if(d<md){\n			md=d;\n			mr=g+o;\n		}\n	}\n	\n	float med=8.;\n	vec2 men=vec2(0);\n	for(int j=-2;j<=2;j++)\n	for(int i=-2;i<=2;i++){\n		vec2 g=vec2(i,j);\n		g+=hash22(n+g);\n		vec2 k=g-mr;\n		\n		float d=dot(k,k);\n		if(d>0.){\n			float l=dot(g+mr-2.*f,k)*.5/sqrt(d);\n			if(l<med){\n				men=k;\n				med=l;\n			}\n		}\n	}\n	return VoronoiData(md,med,normalize(men),mr+n);\n}\n\nvoid main(){\n	vec2 uv=vUv*10.+vec2(0.,uTime);\n	vec2 p=voronoi2dedges(uv).point;\n	VoronoiData v;\n	for(int i=0;i<32;i++){\n		VoronoiData v=voronoi2dedges(p);\n		p+=-v.edgenormal*.2/float(i+1);\n	}\n	gl_FragColor=vec4(\n		smoothstep(0.,.1,distance(uv,p))*\n		smoothstep(0.,.01,voronoi2dedges(uv).edgedist)*\n		smoothstep(0.,.01,abs(distance(uv,p)-voronoi2dedges(p).edgedist))\n	);\n}";

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,unref:_unref,normalizeProps:_normalizeProps,guardReactiveProps:_guardReactiveProps,createVNode:_createVNode,resolveComponent:_resolveComponent,mergeProps:_mergeProps,withCtx:_withCtx,openBlock:_openBlock,createBlock:_createBlock} = await importShared('vue');

const _hoisted_1 = {
  ref: "perspectiveCameraRef",
  position: [600, 750, -1221],
  fov: 45,
  near: 1,
  far: 1e4
};
const _hoisted_2 = ["rotation-x"];
const {AdditiveBlending,DoubleSide} = await importShared('three');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "argestCircle",
  setup(__props) {
    const state = {
      clearColor: "#000000",
      shadows: true,
      alpha: false,
      useLegacyLights: true
    };
    const controlsState = { autoRotate: true, enableDamping: true };
    const Material = {
      uniforms: {
        uTime: { type: "f", value: 0 }
      },
      vertexShader: argestCircle_default$1,
      fragmentShader: argestCircle_default,
      side: DoubleSide,
      blending: AdditiveBlending,
      depthWrite: false,
      transparent: true
    };
    const onLoop = function() {
      Material.uniforms.uTime.value += 0.01;
    };
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createBlock(_component_TresCanvas, _mergeProps(state, {
        "window-size": "",
        onLoop
      }), {
        default: _withCtx(() => [
          _createElementVNode("TresPerspectiveCamera", _hoisted_1, null, 512),
          _createVNode(_unref(Kk), _normalizeProps(_guardReactiveProps(controlsState)), null, 16),
          _cache[1] || (_cache[1] = _createElementVNode("TresAmbientLight", { color: "#ffffff" }, null, -1)),
          _cache[2] || (_cache[2] = _createElementVNode("TresDirectionalLight", {
            position: [100, 100, 0],
            intensity: 0.5,
            color: "#ffffff"
          }, null, -1)),
          _createElementVNode("TresMesh", {
            ref: "quanMeshRef",
            position: [0, 100, 0],
            "rotation-x": 2 * Math.PI / 360 * 90
          }, [
            _cache[0] || (_cache[0] = _createElementVNode("TresPlaneGeometry", { args: [400, 400] }, null, -1)),
            _createElementVNode("TresShaderMaterial", _normalizeProps(_guardReactiveProps(Material)), null, 16)
          ], 8, _hoisted_2),
          _cache[3] || (_cache[3] = _createElementVNode("TresAxesHelper", {
            args: [1e3],
            position: [0, 19, 0]
          }, null, -1)),
          _cache[4] || (_cache[4] = _createElementVNode("TresGridHelper", {
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
//# sourceMappingURL=argestCircle.-EUCH-H61767105581793.js.map
