import{importShared as o}from"./3d-tiles-renderer.DZNovkLO1767148983502.js";import{_l as m,Kk as f}from"./index.DTe2qqjO1767148983502.js";import{Pane as g}from"./tweakpane.BQRZXf8M1767148983502.js";var y=`uniform float uTime;

uniform vec3 uPeakColor;
uniform vec3 uValleyColor;
uniform float uColorOffset;
uniform float uColorDamping;

uniform vec2 uSinWaveFrequency;
uniform float uWaveAmplitude;
uniform vec2 uSinWaveSpeed;

uniform float uPerlinWaveIterations;
uniform float uPerlinWaveFrequency;
uniform float uPerlinWaveAmplitude;
uniform float uPerlinWaveSpeed;

varying vec2 vUv;
varying float vElevation;
varying vec3 vPeakColor;
varying vec3 vValleyColor;

# define MAX_ITERATIONS 100.0
#define M_PI 3.1415926535897932384626433832795

vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}
vec3 fade(vec3 t) {return t*t*t*(t*(t*6.0-15.0)+10.0);}
vec4 permute(vec4 x) {return mod(((x*34.0)+1.0)*x, 289.0);}

float cnoise(vec3 P){
  vec3 Pi0 = floor(P); 
  vec3 Pi1 = Pi0 + vec3(1.0); 
  Pi0 = mod(Pi0, 289.0);
  Pi1 = mod(Pi1, 289.0);
  vec3 Pf0 = fract(P); 
  vec3 Pf1 = Pf0 - vec3(1.0); 
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
  vec4 iy = vec4(Pi0.yy, Pi1.yy);
  vec4 iz0 = Pi0.zzzz;
  vec4 iz1 = Pi1.zzzz;

  vec4 ixy = permute(permute(ix) + iy);
  vec4 ixy0 = permute(ixy + iz0);
  vec4 ixy1 = permute(ixy + iz1);

  vec4 gx0 = ixy0 / 7.0;
  vec4 gy0 = fract(floor(gx0) / 7.0) - 0.5;
  gx0 = fract(gx0);
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
  vec4 sz0 = step(gz0, vec4(0.0));
  gx0 -= sz0 * (step(0.0, gx0) - 0.5);
  gy0 -= sz0 * (step(0.0, gy0) - 0.5);

  vec4 gx1 = ixy1 / 7.0;
  vec4 gy1 = fract(floor(gx1) / 7.0) - 0.5;
  gx1 = fract(gx1);
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
  vec4 sz1 = step(gz1, vec4(0.0));
  gx1 -= sz1 * (step(0.0, gx1) - 0.5);
  gy1 -= sz1 * (step(0.0, gy1) - 0.5);

  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
  g000 *= norm0.x;
  g010 *= norm0.y;
  g100 *= norm0.z;
  g110 *= norm0.w;
  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
  g001 *= norm1.x;
  g011 *= norm1.y;
  g101 *= norm1.z;
  g111 *= norm1.w;

  float n000 = dot(g000, Pf0);
  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
  float n111 = dot(g111, Pf1);

  vec3 fade_xyz = fade(Pf0);
  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); 
  return 2.2 * n_xyz;
}

void main()
{
  vUv = uv;
  vPeakColor = uPeakColor;
  vValleyColor = uValleyColor;
  
  vec4 modelPosition = modelMatrix * vec4(position, 1.0);

  float elevation =
    sin(modelPosition.x * uSinWaveFrequency.x + uTime * uSinWaveSpeed.x)
    * sin(modelPosition.z * uSinWaveFrequency.y + uTime * uSinWaveSpeed.y)
    * uWaveAmplitude;

  for (float i = 1.; i < MAX_ITERATIONS; i++) {
    if (i > uPerlinWaveIterations) break;
    elevation -= abs(cnoise(vec3(
      modelPosition.x * uPerlinWaveFrequency * i,
      modelPosition.z * uPerlinWaveFrequency * i,
      uTime * uPerlinWaveSpeed / i
    ))) * uPerlinWaveAmplitude / i;
  }

  modelPosition.y += elevation;
  vElevation = min(1.0, (elevation + uColorOffset) / uColorDamping);

  vec4 viewPosition = viewMatrix * modelPosition;

  vec4 projectedPosition = projectionMatrix * viewPosition;

  gl_Position = projectedPosition;
}`,x=`precision mediump float;

varying vec2 vUv;
varying float vElevation;
varying vec3 vPeakColor;
varying vec3 vValleyColor;

uniform float uTime;

void main()
{
  gl_FragColor = vec4(mix(vValleyColor, vPeakColor, vElevation), 1.0);

  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`;const{defineComponent:P}=await o("vue"),{createElementVNode:u,unref:c,openBlock:W,createElementBlock:z}=await o("vue"),C=["rotation-x"],_=["side","vertexShader","fragmentShader","wireframe"],r=await o("three"),{watch:S}=await o("vue"),w=P({__name:"waveC",props:{wireframe:{type:Boolean,default:!1},peakColor:{default:"#b367ff"},valleyColor:{default:"#184650"},colorOffset:{default:.9},colorDamping:{default:4.5},sinWaveFrequency:{default:{x:.4,y:.3}},waveAmplitude:{default:.8},sinWaveSpeed:{default:{x:.6,y:1.3}},perlinWaveIterations:{default:3},perlinWaveFrequency:{default:.6},perlinWaveAmplitude:{default:.5},perlinWaveSpeed:{default:.6}},setup(v){const e=v,n={uTime:{value:0},uPeakColor:{value:new r.Color(e.peakColor)},uValleyColor:{value:new r.Color(e.valleyColor)},uColorOffset:{value:e.colorOffset},uColorDamping:{value:e.colorDamping},uSinWaveFrequency:{value:new r.Vector2(e.sinWaveFrequency.x,e.sinWaveFrequency.y)},uWaveAmplitude:{value:e.waveAmplitude},uSinWaveSpeed:{value:new r.Vector2(e.sinWaveSpeed.x,e.sinWaveSpeed.y)},uPerlinWaveIterations:{value:e.perlinWaveIterations},uPerlinWaveFrequency:{value:e.perlinWaveFrequency},uPerlinWaveAmplitude:{value:e.perlinWaveAmplitude},uPerlinWaveSpeed:{value:e.perlinWaveSpeed}},{onBeforeRender:a}=m();return a(({elapsed:t})=>{n.uTime.value=t}),S(()=>e,()=>{n.uPeakColor.value.setStyle(e.peakColor),n.uValleyColor.value.setStyle(e.valleyColor),n.uColorOffset.value=e.colorOffset,n.uColorDamping.value=e.colorDamping,n.uSinWaveFrequency.value.set(e.sinWaveFrequency.x,e.sinWaveFrequency.y),n.uWaveAmplitude.value=e.waveAmplitude,n.uSinWaveSpeed.value.set(e.sinWaveSpeed.x,e.sinWaveSpeed.y),n.uPerlinWaveIterations.value=e.perlinWaveIterations,n.uPerlinWaveFrequency.value=e.perlinWaveFrequency,n.uPerlinWaveAmplitude.value=e.perlinWaveAmplitude,n.uPerlinWaveSpeed.value=e.perlinWaveSpeed},{deep:!0}),(t,i)=>(W(),z("TresMesh",{"rotation-x":-Math.PI/2,"position-y":1},[i[0]||(i[0]=u("TresPlaneGeometry",{args:[10,10,512,512]},null,-1)),u("TresShaderMaterial",{side:r.DoubleSide,vertexShader:c(y),fragmentShader:c(x),uniforms:n,wireframe:t.wireframe},null,8,_)],8,C))}}),{defineComponent:k}=await o("vue"),{createElementVNode:d,unref:q,createVNode:p,normalizeProps:B,guardReactiveProps:F,resolveComponent:A,mergeProps:T,withCtx:b,openBlock:h,createBlock:I}=await o("vue"),{reactive:E}=await o("vue"),l=await o("three"),O=k({__name:"waveC",setup(v){const e={clearColor:"#222",shadows:!0,alpha:!1,shadowMapType:l.BasicShadowMap,outputColorSpace:l.SRGBColorSpace,toneMapping:l.NoToneMapping,useLegacyLights:!0,antialias:!0,logarithmicDepthBuffer:!0},n=E({peakColor:"#ff6767",valleyColor:"#310039",wireframe:!1,colorOffset:.9,colorDamping:4.5,sinWaveFrequency:{x:.4,y:.3},waveAmplitude:.8,sinWaveSpeed:{x:.6,y:1.3},perlinWaveIterations:3,perlinWaveFrequency:.6,perlinWaveAmplitude:.5,perlinWaveSpeed:.6}),a=new g({title:"参数",expanded:!0});return a.addBinding(n,"wireframe",{label:"网格化"}),a.addBinding(n,"peakColor",{label:"山峰颜色"}),a.addBinding(n,"valleyColor",{label:"山谷颜色"}),a.addBinding(n,"colorOffset",{label:"颜色偏移",min:.01,max:3,step:.01}),a.addBinding(n,"colorDamping",{label:"颜色抑制",min:.01,max:6,step:.01}),a.addBinding(n,"sinWaveFrequency",{label:"正弦波频率",picker:"inline",x:{min:-1,step:.01,max:1,inverted:!0},y:{min:-1,step:.01,max:1,inverted:!0}}),a.addBinding(n,"waveAmplitude",{label:"正弦波振幅",min:0,max:2,step:.01}),a.addBinding(n,"sinWaveSpeed",{label:"正弦波速度",picker:"inline",x:{min:-3,step:.01,max:3,inverted:!0},y:{min:-3,step:.01,max:3,inverted:!0}}),a.addBinding(n,"perlinWaveIterations",{label:"小波浪层数",min:1,max:7,step:.1}),a.addBinding(n,"perlinWaveFrequency",{label:"小波浪频率",min:0,max:5,step:.01}),a.addBinding(n,"perlinWaveAmplitude",{label:"小波浪幅度",min:0,max:2,step:.01}),a.addBinding(n,"perlinWaveSpeed",{label:"小波浪速度",min:0,max:2,step:.01}),(t,i)=>{const s=A("TresCanvas");return h(),I(s,T(e,{"window-size":""}),{default:b(()=>[i[0]||(i[0]=d("TresPerspectiveCamera",{position:[10,10,10]},null,-1)),p(q(f)),i[1]||(i[1]=d("TresGridHelper",{args:[10,10]},null,-1)),p(w,B(F(n)),null,16)]),_:1},16)}}});export{O as default};
