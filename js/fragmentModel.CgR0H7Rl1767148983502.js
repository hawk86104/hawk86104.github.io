import{importShared as c,mergeGeometries as te}from"./3d-tiles-renderer.DZNovkLO1767148983502.js";import{_l as ne,Kk as re}from"./index.DTe2qqjO1767148983502.js";import{useTexture as ae}from"./customShaderMaterial.vue_vue_type_script_setup_true_lang.B7dQ_CiZ1767148983502.js";import"./index.vue_vue_type_script_setup_true_lang.CjsHShHS1767148983502.js";import{useGLTF as E}from"./index.Bk2zy1aS1767148983502.js";import{Pane as se}from"./tweakpane.BQRZXf8M1767148983502.js";var ie=`varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vViewPosition;

attribute vec3 aCenter;
attribute vec3 toPosition;
attribute vec3 toNormal;
attribute float aRandom;

uniform float u_progress;

#include <common>

mat4 rotation3d(vec3 axis, float angle) {
  axis = normalize(axis);
  float s = sin(angle);
  float c = cos(angle);
  float oc = 1.0 - c;

  return mat4(
      oc * axis.x * axis.x + c, oc * axis.x * axis.y - axis.z * s,
      oc * axis.z * axis.x + axis.y * s, 0.0, oc * axis.x * axis.y + axis.z * s,
      oc * axis.y * axis.y + c, oc * axis.y * axis.z - axis.x * s, 0.0,
      oc * axis.z * axis.x - axis.y * s, oc * axis.y * axis.z + axis.x * s,
      oc * axis.z * axis.z + c, 0.0, 0.0, 0.0, 0.0, 1.0);
}

void main() {
  vUv = uv;

  float progress = u_progress;
  float sinProgress = sin(progress * PI);

  vec3 pos = mix(position, toPosition, progress);
  vec3 nor = mix(normal, toNormal, progress);

  vNormal = normalMatrix * normalize(nor);

  float prog = ((pos.y + 1.) / 2.) * 1.1;

  float locprog = clamp((sinProgress - 0.9 * prog) / 0.2, 0., 1.);

  vec3 transform = pos - aCenter;

  transform += 3. * aRandom * nor * locprog;

  transform *= (1.0 - locprog);

  transform += aCenter;

  mat4 rotation = rotation3d(vec3(0., 1., 0.), aRandom * (locprog)*PI * 3.);

  transform = (rotation * vec4(transform, 1.)).xyz;

  vec4 modelViewPosition = modelViewMatrix * vec4(transform, 1.0);

  gl_Position = projectionMatrix * modelViewPosition;

  vViewPosition = -modelViewPosition.xyz;
}`,ce=`varying vec3 vNormal;
varying vec2 vUv;
varying vec3 vViewPosition;
uniform sampler2D matcap;
uniform sampler2D matcap2;
uniform float u_progress;
uniform vec3 m1Color;
uniform vec3 m2Color;

void main() {
  vec3 viewDir = normalize(vViewPosition);
  vec3 x = normalize(vec3(viewDir.z, 0.0, -viewDir.x));
  vec3 y = cross(viewDir, x);
  vec2 uv = vec2(dot(x, vNormal), dot(y, vNormal)) * 0.495 + 0.5;

  float progress = abs(sin(u_progress));

  vec3 matcapColor = texture2D(matcap, uv).rgb;
  matcapColor = mix(matcapColor, m1Color, 0.5);
  vec3 matcap2Color = texture2D(matcap2, uv).rgb;
  matcap2Color = mix(matcap2Color, m2Color, 0.5);

  vec3 color = vec3(matcapColor);
  color = mix(color, matcap2Color, progress);

  gl_FragColor = vec4(color, 1.0);
}`;const{withAsyncContext:h,defineComponent:le}=await c("vue"),{unref:me,normalizeProps:ue,guardReactiveProps:pe,createElementVNode:ve,openBlock:fe,createElementBlock:de}=await c("vue"),ge=["geometry"],{reactive:xe,ref:_e,watch:ye}=await c("vue"),i=await c("three"),Ce=le({__name:"fragmentModelCom",async setup(G){let o,a;const y=e=>{const l=[];return e.traverse(m=>{m instanceof i.Mesh&&(m.geometry.deleteAttribute("uv"),m.geometry.deleteAttribute("tangent"),l.push(m.geometry))}),te(l)},u=([o,a]=h(()=>E("https://opensource.cdn.icegl.cn/model/eCommerce/guanYu.glb")),o=await o,a(),o).scene,p=y(u.children[0]);p.rotateX(Math.PI/2),p.translate(0,-.9,0);const s=p.clone().toNonIndexed(),L=([o,a]=h(()=>E("https://opensource.cdn.icegl.cn/model/industry4/modelDraco.glb")),o=await o,a(),o).scene,C=y(L.children[0]);C.rotateX(-Math.PI/2),C.rotateY(Math.PI/3);const w=C.clone().toNonIndexed(),t=s.attributes.position.array,v=s.attributes.position.count,U=w.attributes.position.array,H=w.attributes.normal.array,Y=w.attributes.position.count,g=new Float32Array(v),x=new Float32Array((v+2)*3),M=new Float32Array((v+2)*3),N=new Float32Array((v+2)*3);for(let e=0;e<v;e+=3){const l=Math.random()*1,m=e%Y;g[e]=l,g[e+1]=l,g[e+2]=l;const n=e*3,j=t[n],K=t[n+1],X=t[n+2],Z=t[n+3],q=t[n+4],J=t[n+5],O=t[n+6],Q=t[n+7],W=t[n+8],r=new i.Vector3(j+Z+O,K+q+Q,X+J+W).divideScalar(3);x.set([r.x,r.y,r.z],e*3),x.set([r.x,r.y,r.z],(e+1)*3),x.set([r.x,r.y,r.z],(e+2)*3);const V=(P,ee,R)=>{const oe=R*3;for(let _=0;_<3;_++){const z=oe+_*3;ee.set([P[z],P[z+1],P[z+2]],(R+_)*3)}};V(U,M,m),V(H,N,m)}s.setAttribute("aRandom",new i.BufferAttribute(g,1)),s.setAttribute("aCenter",new i.BufferAttribute(x,3)),s.setAttribute("toPosition",new i.BufferAttribute(M,3)),s.setAttribute("toNormal",new i.BufferAttribute(N,3)),console.log(s.attributes);const A=([o,a]=h(()=>ae("./plugins/visualArts/image/fragment512px.png")),o=await o,a(),o),f={uniforms:{u_progress:{value:-.1},matcap1:{value:A},m1Color:{type:"v3",value:new i.Color("#ffc0fa")},matcap2:{value:A},m2Color:{type:"v3",value:new i.Color("#bcd4ff")}},vertexShader:ie,fragmentShader:ce},b=xe({c1:"#ffc0fa",c2:"#bcd4ff"}),B=_e(.5),d=new se({title:"参数"});return d.addBinding(f.uniforms.u_progress,"value",{label:"变化量",min:-.1,max:1,step:.001}).disabled=!0,d.addBinding(b,"c1",{label:"颜色1st"}),d.addBinding(b,"c2",{label:"颜色2rd"}),d.addBinding(B,"value",{label:"速度",min:.001,max:1,step:.001}),ye(b,e=>{f.uniforms.m1Color.value.set(e.c1),f.uniforms.m2Color.value.set(e.c2)},{deep:!0}),ne().onBeforeRender(({elapsed:e})=>{f.uniforms.u_progress.value=(Math.sin(e*B.value)+1)/2,d.refresh()}),(e,l)=>(fe(),de("TresMesh",{geometry:me(s)},[ve("TresShaderMaterial",ue(pe(f)),null,16)],8,ge))}}),{defineComponent:we}=await c("vue"),{createElementVNode:T,unref:be,normalizeProps:D,guardReactiveProps:S,createVNode:$,Suspense:Pe,withCtx:k,openBlock:F,createBlock:I,resolveComponent:ze}=await c("vue"),he=await c("three"),{reactive:Me}=await c("vue"),Te=we({__name:"fragmentModel",setup(G){const o=Me({enableDamping:!0,enableZoom:!0,autoRotate:!0,enablePan:!0,enableRotate:!0}),a={clearColor:"#000000",windowSize:!0,toneMapping:he.ACESFilmicToneMapping,toneMappingExposure:.8};return(y,u)=>{const p=ze("TresCanvas");return F(),I(p,D(S(a)),{default:k(()=>[u[0]||(u[0]=T("TresPerspectiveCamera",{position:[0,2,8],fov:45,near:.1,far:1e3},null,-1)),$(be(re),D(S(o)),null,16),u[1]||(u[1]=T("TresAmbientLight",{intensity:2},null,-1)),(F(),I(Pe,null,{default:k(()=>[$(Ce)]),_:1}))]),_:1},16)}}});export{Te as default};
