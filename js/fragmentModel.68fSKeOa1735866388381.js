import{_ as n,a as t,c3 as o,ai as e}from"./three.Rja0AEnA1735866388381.js";import{e as r,a,b as s,U as i}from"./@tresjs.FlKhQDQ71735866388381.js";import{P as c}from"./tweakpane.yHWGBmom1735866388381.js";import{d as u,a4 as l,r as p,b as f,w as m,o as v,D as g,J as x,aj as d,ak as y,u as b,e as h,f as w,g as C,j as I,al as _}from"./@vue.yG49nQHr1735866388381.js";import"./@vueuse.YI3Exu6_1735866388381.js";const z=A;!function(n,t){const o=A,e=V();for(;;)try{if(793967===parseInt(o(339))/1*(parseInt(o(343))/2)+parseInt(o(356))/3*(parseInt(o(373))/4)+parseInt(o(320))/5*(parseInt(o(383))/6)+parseInt(o(382))/7*(-parseInt(o(381))/8)+parseInt(o(379))/9*(parseInt(o(358))/10)+parseInt(o(317))/11+-parseInt(o(338))/12*(parseInt(o(391))/13))break;e.push(e.shift())}catch(r){e.push(e.shift())}}();const P=function(){let n=!0;return function(t,o){const e=n?function(){if(o){const n=o[A(345)](t,arguments);return o=null,n}}:function(){};return n=!1,e}}();function A(n,t){const o=V();return(A=function(n,t){return o[n-=312]})(n,t)}!function(){P(this,(function(){const n=A,t=new RegExp("function *\\( *\\)"),o=new RegExp(n(384),"i"),e=N(n(315));t[n(377)](e+n(325))&&o[n(377)](e+n(351))?N():e("0")}))()}();const j=function(){let n=!0;return function(t,o){const e=n?function(){if(o){const n=o[A(345)](t,arguments);return o=null,n}}:function(){};return n=!1,e}}();j(void 0,(function(){const n=A;let t;try{t=Function(n(324)+n(395)+");")()}catch(r){t=window}const o=t.console=t[n(321)]||{},e=[n(312),n(368),n(365),n(394),n(318),n(367),n(333)];for(let a=0;a<e[n(340)];a++){const t=j[n(323)].prototype[n(330)](j),r=e[a],s=o[r]||t;t[n(386)]=j[n(330)](j),t.toString=s[n(313)][n(330)](s),o[r]=t}}))();const M=[z(389)];function V(){const n=["uniforms","disabled","test","rotateY","4581eCmEbm","fragmentModelCom","47824PxjAxL","1498VhzAja","577074TTjHqs","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","TresShaderMaterial","__proto__","sin","Color","geometry","BufferAttribute","487383RZVMYm","Vector3","#ffc0fa","error",'{}.constructor("return this")( )',"log","toString","array","init","stateObject","7944233gXeuSh","exception","rotateX","25XrGCwE","console","value","constructor","return (function() ","chain","translate","mergeGeometries","tangent","setAttribute","bind","u_progress","addBinding","trace","onLoop","call","变化量","counter","732aBFkAf","196SDtMpM","length","aRandom","颜色1st","15898ccIOfZ","string","apply","toNonIndexed","clone","aCenter","set","Mesh","input","./draco/","TresMesh","attributes","m2Color","706899jtLGVA","random","8270SGFjbA","颜色2rd","children","#bcd4ff","scene","toPosition","debu","info","position","table","warn","https://opensource-1314935952.cos.ap-nanjing.myqcloud.com/model/eCommerce/guanYu.glb","toNormal","count","m1Color","20DThZNp","deleteAttribute"];return(V=function(){return n})()}const D=u({__name:z(380),async setup(e){const i=z;let u,h;const w=t=>{const e=A,r=[];return t.traverse((t=>{const o=A;t instanceof n[o(350)]&&(t.geometry[o(374)]("uv"),t.geometry.deleteAttribute(o(328)),r.push(t[o(389)]))})),o[e(327)](r)},C=w(([u,h]=l((()=>a(i(369),{draco:!0,decoderPath:i(352)}))),u=await u,h(),u).scene[i(360)][0]);C[i(319)](Math.PI/2),C[i(326)](0,-.9,0);const I=C.clone()[i(346)](),_=w(([u,h]=l((()=>a("./plugins/industry4/model/modelDraco.glb",{draco:!0,decoderPath:i(352)}))),u=await u,h(),u)[i(362)][i(360)][0]);_[i(319)](-Math.PI/2),_[i(378)](Math.PI/3);const P=_[i(347)]()[i(346)](),j=I[i(354)][i(366)].array,V=I.attributes[i(366)][i(371)],D=P.attributes[i(366)][i(314)],N=P[i(354)].normal[i(314)],R=P.attributes[i(366)][i(371)],S=new Float32Array(V),F=new Float32Array(3*(V+2)),T=new Float32Array(3*(V+2)),Z=new Float32Array(3*(V+2));for(let t=0;t<V;t+=3){const o=1*Math[i(357)](),e=t%R;S[t]=o,S[t+1]=o,S[t+2]=o;const r=3*t,a=j[r],s=j[r+1],c=j[r+2],u=j[r+3],l=j[r+4],p=j[r+5],f=j[r+6],m=j[r+7],v=j[r+8],g=new(n[i(392)])(a+u+f,s+l+m,c+p+v).divideScalar(3);F[i(349)]([g.x,g.y,g.z],3*t),F.set([g.x,g.y,g.z],3*(t+1)),F.set([g.x,g.y,g.z],3*(t+2));const x=(n,t,o)=>{const e=i,r=3*o;for(let a=0;a<3;a++){const s=r+3*a;t[e(349)]([n[s],n[s+1],n[s+2]],3*(o+a))}};x(D,T,e),x(N,Z,e)}I[i(329)](i(341),new(n[i(390)])(S,1)),I.setAttribute(i(348),new(n[i(390)])(F,3)),I[i(329)](i(363),new t(T,3)),I.setAttribute(i(370),new(n[i(390)])(Z,3)),console[i(312)](I.attributes);const L=([u,h]=l((()=>s(["./plugins/visualArts/image/fragment512px.png"]))),u=await u,h(),u),k={uniforms:{u_progress:{value:-.1},matcap1:{value:L},m1Color:{type:"v3",value:new(n[i(388)])(i(393))},matcap2:{value:L},m2Color:{type:"v3",value:new(n[i(388)])("#bcd4ff")}},vertexShader:"varying vec2 vUv;\nvarying vec3 vNormal;\nvarying vec3 vViewPosition;\n\nattribute vec3 aCenter;\nattribute vec3 toPosition;\nattribute vec3 toNormal;\nattribute float aRandom;\n\nuniform float u_progress;\n\n#include <common>\n\nmat4 rotation3d(vec3 axis, float angle) {\n  axis = normalize(axis);\n  float s = sin(angle);\n  float c = cos(angle);\n  float oc = 1.0 - c;\n\n  return mat4(\n      oc * axis.x * axis.x + c, oc * axis.x * axis.y - axis.z * s,\n      oc * axis.z * axis.x + axis.y * s, 0.0, oc * axis.x * axis.y + axis.z * s,\n      oc * axis.y * axis.y + c, oc * axis.y * axis.z - axis.x * s, 0.0,\n      oc * axis.z * axis.x - axis.y * s, oc * axis.y * axis.z + axis.x * s,\n      oc * axis.z * axis.z + c, 0.0, 0.0, 0.0, 0.0, 1.0);\n}\n\nvoid main() {\n  vUv = uv;\n\n  float progress = u_progress;\n  float sinProgress = sin(progress * PI);\n\n  vec3 pos = mix(position, toPosition, progress);\n  vec3 nor = mix(normal, toNormal, progress);\n\n  vNormal = normalMatrix * normalize(nor);\n\n  float prog = ((pos.y + 1.) / 2.) * 1.1;\n\n  float locprog = clamp((sinProgress - 0.9 * prog) / 0.2, 0., 1.);\n\n  vec3 transform = pos - aCenter;\n\n  transform += 3. * aRandom * nor * locprog;\n\n  transform *= (1.0 - locprog);\n\n  transform += aCenter;\n\n  mat4 rotation = rotation3d(vec3(0., 1., 0.), aRandom * (locprog)*PI * 3.);\n\n  transform = (rotation * vec4(transform, 1.)).xyz;\n\n  vec4 modelViewPosition = modelViewMatrix * vec4(transform, 1.0);\n\n  gl_Position = projectionMatrix * modelViewPosition;\n\n  vViewPosition = -modelViewPosition.xyz;\n}",fragmentShader:"varying vec3 vNormal;\nvarying vec2 vUv;\nvarying vec3 vViewPosition;\nuniform sampler2D matcap;\nuniform sampler2D matcap2;\nuniform float u_progress;\nuniform vec3 m1Color;\nuniform vec3 m2Color;\n\nvoid main() {\n  vec3 viewDir = normalize(vViewPosition);\n  vec3 x = normalize(vec3(viewDir.z, 0.0, -viewDir.x));\n  vec3 y = cross(viewDir, x);\n  vec2 uv = vec2(dot(x, vNormal), dot(y, vNormal)) * 0.495 + 0.5;\n\n  float progress = abs(sin(u_progress));\n\n  vec3 matcapColor = texture2D(matcap, uv).rgb;\n  matcapColor = mix(matcapColor, m1Color, 0.5);\n  vec3 matcap2Color = texture2D(matcap2, uv).rgb;\n  matcap2Color = mix(matcap2Color, m2Color, 0.5);\n\n  vec3 color = vec3(matcapColor);\n  color = mix(color, matcap2Color, progress);\n\n  gl_FragColor = vec4(color, 1.0);\n}"},E=p({c1:i(393),c2:i(361)}),q=f(.5),B=new c({title:"参数"});return B[i(332)](k[i(375)][i(331)],i(322),{label:i(336),min:-.1,max:1,step:.001})[i(376)]=!0,B[i(332)](E,"c1",{label:i(342)}),B[i(332)](E,"c2",{label:i(359)}),B[i(332)](q,i(322),{label:"速度",min:.001,max:1,step:.001}),m(E,(n=>{const t=i;k[t(375)][t(372)].value.set(n.c1),k[t(375)][t(355)][t(322)][t(349)](n.c2)}),{deep:!0}),r()[i(334)]((({elapsed:n})=>{const t=i;k[t(375)].u_progress[t(322)]=(Math[t(387)](n*q.value)+1)/2,B.refresh()})),(n,t)=>{const o=i;return v(),g(o(353),{geometry:b(I)},[x(o(385),d(y(k)),null,16)],8,M)}}});function N(n){function t(n){const o=A;if(typeof n===o(344))return function(n){}.constructor("while (true) {}")[o(345)](o(337));1!==(""+n/n)[o(340)]||n%20==0?function(){return!0}[o(323)](o(364)+"gger")[o(335)]("action"):function(){return!1}[o(323)](o(364)+"gger").apply(o(316)),t(++n)}try{if(n)return t;t(0)}catch(o){}}function R(){const n=["console","80073hSYcht","TresCanvas","4688LkcsQq","apply","warn","TresAmbientLight","__proto__","TresPerspectiveCamera",'{}.constructor("return this")( )',"exception","6131192PeoTqq","length","debu","7HLtXsY","8128194WLFvdz","error","toString","4484997HnCbyq","constructor","bind","4745UvJKmw","function *\\( *\\)","log","18jTBZRV","1942636NNcmQB","counter","#000000","info","test","50218000VLgklh","prototype"];return(R=function(){return n})()}!function(n,t){const o=T,e=R();for(;;)try{if(860287===parseInt(o(178))/1+-parseInt(o(170))/2+-parseInt(o(195))/3+-parseInt(o(180))/4*(-parseInt(o(166))/5)+parseInt(o(192))/6*(-parseInt(o(191))/7)+-parseInt(o(188))/8*(parseInt(o(169))/9)+parseInt(o(175))/10)break;e.push(e.shift())}catch(r){e.push(e.shift())}}();const S=function(){let n=!0;return function(t,o){const e=n?function(){if(o){const n=o.apply(t,arguments);return o=null,n}}:function(){};return n=!1,e}}();!function(){S(this,(function(){const n=T,t=new RegExp(n(167)),o=new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","i"),e=L("init");t[n(174)](e+"chain")&&o[n(174)](e+"input")?L():e("0")}))()}();const F=function(){let n=!0;return function(t,o){const e=n?function(){if(o){const n=o[T(181)](t,arguments);return o=null,n}}:function(){};return n=!1,e}}();function T(n,t){const o=R();return(T=function(n,t){return o[n-=164]})(n,t)}F(void 0,(function(){const n=T;let t;try{t=Function("return (function() "+n(186)+");")()}catch(r){t=window}const o=t[n(177)]=t.console||{},e=[n(168),n(182),n(173),n(193),n(187),"table","trace"];for(let a=0;a<e.length;a++){const t=F[n(164)][n(176)].bind(F),r=e[a],s=o[r]||t;t[n(184)]=F[n(165)](F),t[n(194)]=s[n(194)][n(165)](s),o[r]=t}}))();const Z=u({__name:"fragmentModel",setup(n){const t=T,o=p({enableDamping:!0,enableZoom:!0,autoRotate:!0,enablePan:!0,enableRotate:!0}),r={clearColor:t(172),windowSize:!0,toneMapping:e,toneMappingExposure:.8};return(n,e)=>{const a=t,s=h(a(179));return v(),w(s,d(y(r)),{default:C((()=>[e[0]||(e[0]=x(a(185),{position:[0,2,8],fov:45,near:.1,far:1e3},null,-1)),I(b(i),d(y(o)),null,16),e[1]||(e[1]=x(a(183),{intensity:2},null,-1)),(v(),w(_,null,{default:C((()=>[I(D)])),_:1}))])),_:1},16)}}});function L(n){function t(n){const o=T;if("string"==typeof n)return function(n){}[o(164)]("while (true) {}")[o(181)](o(171));1!==(""+n/n)[o(189)]||n%20==0?function(){return!0}[o(164)]("debugger").call("action"):function(){return!1}[o(164)](o(190)+"gger")[o(181)]("stateObject"),t(++n)}try{if(n)return t;t(0)}catch(o){}}export{Z as default};