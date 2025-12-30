import { importShared, Fs, _l, Kk } from './index.BxB45aCK1767105581793.js';
import { EffectComposer, RenderPass, ShaderPass } from './RenderPass.XMM8w9Yd1767105581793.js';

var light_default$1="varying vec2 vUv;\nvoid main(){\n	vec4 mvPosition=modelViewMatrix*vec4(position,1.);\n	gl_Position=projectionMatrix*mvPosition;\n	vUv=uv;\n}";

var light_default="uniform vec2 iResolution;\nuniform float iTime;\nvarying vec2 vUv;\nuniform sampler2D tDiffuse;\nfloat rand(float x)\n{\n	return fract(sin(x)*75154.32912);\n}\n\nfloat rand3d(vec3 x)\n{\n	return fract(375.10297*sin(dot(x,vec3(103.0139,227.0595,31.05914))));\n}\n\nfloat noise(float x)\n{\n	float i=floor(x);\n	float a=rand(i),b=rand(i+1.);\n	float f=x-i;\n	return mix(a,b,f);\n}\n\nfloat perlin(float x)\n{\n	float r=0.,s=1.,w=1.;\n	for(int i=0;i<6;i++){\n		s*=2.;\n		w*=.5;\n		r+=w*noise(s*x);\n	}\n	return r;\n}\n\nfloat noise3d(vec3 x)\n{\n	vec3 i=floor(x);\n	float i000=rand3d(i+vec3(0.,0.,0.)),i001=rand3d(i+vec3(0.,0.,1.));\n	float i010=rand3d(i+vec3(0.,1.,0.)),i011=rand3d(i+vec3(0.,1.,1.));\n	float i100=rand3d(i+vec3(1.,0.,0.)),i101=rand3d(i+vec3(1.,0.,1.));\n	float i110=rand3d(i+vec3(1.,1.,0.)),i111=rand3d(i+vec3(1.,1.,1.));\n	vec3 f=x-i;\n	return mix(mix(mix(i000,i001,f.z),mix(i010,i011,f.z),f.y),\n	mix(mix(i100,i101,f.z),mix(i110,i111,f.z),f.y),f.x);\n}\n\nfloat perlin3d(vec3 x)\n{\n	float r=0.;\n	float w=1.,s=1.;\n	for(int i=0;i<5;i++){\n		w*=.5;\n		s*=2.;\n		r+=w*noise3d(s*x);\n	}\n	return r;\n}\n\nfloat f(float y)\n{\n	float w=.4;\n	return w*(perlin(2.*y)-.5);\n}\n\nfloat plot(vec2 p,float d,bool thicker)\n{\n	if(thicker)d+=5.*abs(f(p.y+.001)-f(p.y));\n	return smoothstep(d,0.,abs(f(p.y)-p.x));\n}\n\nfloat cloud(vec2 uv,float speed,float scale,float cover)\n{\n	float c=perlin3d(vec3(uv*scale,iTime*speed*2.));\n	return max(0.,c-(1.-cover));\n}\n\nfloat mountain(vec2 uv,float scale,float offset,float h1,float h2)\n{\n	float h=h1+perlin(scale*uv.x+offset)*(h2-h1);\n	return smoothstep(h,h+.01,uv.y);\n}\n\nvec3 render(vec2 uv)\n{\n	float x=iTime+.1;\n	\n	float m=.25;\n	float i=floor(x/m);\n	float f=x/m-i;\n	float k=.4;\n	float n=noise(i);\n	float t=ceil(n-k);\n	float d=max(0.,n-k)/(1.-k);\n	float o=ceil(t-f-(1.-d));\n	float gt=.1;\n	float go=ceil(t-f-(1.-gt));\n	\n	float lightning=0.;\n	float light=0.;\n	float glare=0.;\n	\n	if(o==1.){\n		vec2 uv2=uv;\n		uv2.y+=i*2.;\n		float p=(noise(i+10.)-.5)*2.;\n		uv2.x-=p;\n		\n		float strike=plot(uv2,.01,true);\n		float glow=plot(uv2,.04,false);\n		float glow2=plot(uv2,1.5,false);\n		\n		lightning=strike*.4+glow*.15;\n		\n		float h=noise(i+5.);\n		lightning*=smoothstep(h,h+.05,uv.y+perlin(1.2*uv.x+4.*h)*.03);\n		lightning+=glow2*.3;\n		light=smoothstep(5.,0.,abs(uv.x-p));\n		glare=go*light;\n	}\n	\n	vec3 clouds=\n	vec3(.5,.7,1.)*mix(.6,.9,cloud(uv,.2,.1,1.))+\n	vec3(.7,.8,1.)*.6*cloud(uv*vec2(.5,1.),.06,.8,.8)+\n	vec3(.9,.9,1.)*.3*cloud(uv*vec2(.1,1.),.08,5.5,.6)+\n	vec3(1.,1.,1.)*.4*cloud(uv*vec2(.1,1.),.07,10.,.5);\n	\n	float horizon=mountain(uv,.8,9.,.3,.6);\n	vec3 terrain=mix(vec3(.25,.3,.3)*.5,1.5*vec3(.15,.2,.3),\n	1.-(1.-mountain(uv,.8,3.,.2,.4))*.5-\n	(1.-mountain(uv,.8,17.5,.05,.25))*.5);\n	\n	vec3 background=mix(terrain,clouds,horizon);\n	background*=(.2+light*.5);\n	vec4 previousPassColor=texture2D(tDiffuse,vUv);\n	return vec3(background+lightning+previousPassColor.xyz);\n}\n\nvoid main()\n{\n	vec2 uv=vUv;\n	uv.x=2.*uv.x-1.;\n	uv.x*=iResolution.x/iResolution.y;\n	\n	gl_FragColor=vec4(render(uv),1.);\n}";

const {defineComponent:_defineComponent$1} = await importShared('vue');
const {Vector2} = await importShared('three');
const _sfc_main$1 = /* @__PURE__ */ _defineComponent$1({
  __name: "lightEffect",
  setup(__props) {
    const { camera, renderer, scene} = Fs();
    const { onBeforeRender} = _l();
    const resolution = new Vector2(window.innerWidth, window.innerHeight);
    const drawShader = {
      uniforms: {
        iResolution: { type: "v2", value: resolution },
        iTime: { type: "f", value: null },
        tDiffuse: { value: null }
      },
      vertexShader: light_default$1,
      fragmentShader: light_default
    };
    const composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene.value, camera.value));
    const pass = new ShaderPass(drawShader);
    composer.addPass(pass);
    onBeforeRender(({ elapsed }) => {
      pass.uniforms.iTime.value = elapsed * 0.3;
      composer.render();
    });
    return (_ctx, _cache) => {
      return null;
    };
  }
});

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,unref:_unref,createVNode:_createVNode,Suspense:_Suspense,withCtx:_withCtx,openBlock:_openBlock,createBlock:_createBlock,resolveComponent:_resolveComponent,mergeProps:_mergeProps} = await importShared('vue');

const _hoisted_1 = {
  ref: "perspectiveCameraRef",
  position: [600, 750, -1221],
  fov: 45,
  near: 1,
  far: 1e4
};
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "lightning",
  setup(__props) {
    const state = {
      clearColor: "#000000",
      shadows: true,
      alpha: false,
      useLegacyLights: true,
      renderMode: "manual"
    };
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createBlock(_component_TresCanvas, _mergeProps(state, { "window-size": "" }), {
        default: _withCtx(() => [
          _createElementVNode("TresPerspectiveCamera", _hoisted_1, null, 512),
          _createVNode(_unref(Kk)),
          _cache[0] || (_cache[0] = _createElementVNode("TresAmbientLight", { color: "#ffffff" }, null, -1)),
          _cache[1] || (_cache[1] = _createElementVNode("TresDirectionalLight", {
            position: [400, 400, 400],
            intensity: 1,
            color: "red"
          }, null, -1)),
          (_openBlock(), _createBlock(_Suspense, null, {
            default: _withCtx(() => [
              _createVNode(_sfc_main$1)
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
//# sourceMappingURL=lightning.CunJl23w1767105581793.js.map
