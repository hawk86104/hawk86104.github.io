import{a6 as n,C as t,Z as e,bV as o,h as i,aB as r}from"./three.KG2-8r0_1725245456099.js";import{p as a,$ as s,N as l}from"./@tresjs.j5vdYITq1725245456099.js";import{d as u,b as c,a4 as f,a1 as p,o as m,D as g,J as b,aj as v,ak as d,u as y}from"./@vue.Q1VpS3901725245456099.js";const h=x;function w(){const n=["630290GwkCmv","4YrrbYo","trace","gger","length","value",'{}.constructor("return this")( )',"xRayEffect","chain","#84ccff","763HUsCdd","console","debu","__proto__","table","427120hPjTdE","uniforms","opacity","AdditiveBlending","info","25362VMjTBT","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","verticesNeedUpdate","TresShaderMaterial","3573450ebAwSQ","return (function() ","prototype","string","while (true) {}","sin","log","bind","TresBufferGeometry","color","test","init","Color","TresMeshRef","29301OAJmKd","push","exception","apply","glowColor","constructor","stateObject","traverse","332697LohtYA","176XsUWtw","3266405vqdOJB","mergeGeometries","Mesh","uOpacity","geometry","TresMesh","76YBkoDT","toString"];return(w=function(){return n})()}!function(n,t){const e=x,o=w();for(;;)try{if(358963===parseInt(e(181))/1+-parseInt(e(189))/2*(-parseInt(e(173))/3)+parseInt(e(136))/4*(parseInt(e(183))/5)+-parseInt(e(155))/6*(-parseInt(e(145))/7)+-parseInt(e(150))/8+-parseInt(e(159))/9+-parseInt(e(135))/10*(parseInt(e(182))/11))break;o.push(o.shift())}catch(i){o.push(o.shift())}}();const _=function(){let n=!0;return function(t,e){const o=n?function(){if(e){const n=e.apply(t,arguments);return e=null,n}}:function(){};return n=!1,o}}();!function(){_(this,(function(){const n=x,t=new RegExp("function *\\( *\\)"),e=new RegExp(n(156),"i"),o=S(n(170));t[n(169)](o+n(143))&&e[n(169)](o+"input")?S():o("0")}))()}();const z=function(){let n=!0;return function(t,e){const o=n?function(){if(e){const n=e[x(176)](t,arguments);return e=null,n}}:function(){};return n=!1,o}}();function x(n,t){const e=w();return(x=function(n,t){return e[n-=135]})(n,t)}z(void 0,(function(){const n=x;let t;try{t=Function(n(160)+n(141)+");")()}catch(i){t=window}const e=t[n(146)]=t[n(146)]||{},o=[n(165),"warn",n(154),"error",n(175),n(149),n(137)];for(let r=0;r<o[n(139)];r++){const t=z.constructor[n(161)][n(166)](z),i=o[r],a=e[i]||t;t[n(148)]=z.bind(z),t[n(190)]=a[n(190)][n(166)](a),e[i]=t}}))();const P=b(h(167),null,null,-1),T=u({__name:h(142),props:{model:{},color:{default:h(144)},opacity:{default:1}},async setup(i){const r=h;let u,y;const w=i,_=c(),z=[];w.model[r(180)]((t=>{const e=r;t instanceof n[e(185)]&&(t[e(187)][e(157)]=!0,z[e(174)](t[e(187)]))}));const x=([u,y]=f((()=>l({map:"./plugins/medical/image/brainXRayLight.png"}))),u=await u,y(),u),T={uniforms:{c:{type:"f",value:1.11},p:{type:"f",value:1},glowColor:{type:"c",value:new t(w[r(168)])},lightningTexture:{type:"t",value:x.map},offsetY:{type:"f",value:.1},uTime:{type:"f",value:0},uOpacity:{type:"f",value:w.opacity}},vertexShader:"uniform float c;\nuniform float p;\nuniform float uTime;\nvarying float intensity;\nvarying vec2 vUv;\nvoid main(){\n    vUv=uv;\n    vec3 vNormal=normalize(normalMatrix*normal);\n    intensity=pow(c-abs(dot(vNormal,vec3(0,0,1))),p);\n    gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);\n}",fragmentShader:"uniform vec3 glowColor;\nuniform sampler2D lightningTexture;\nvarying float intensity;\nvarying vec2 vUv;\nuniform float offsetY;\nuniform float uTime;\nuniform float uOpacity;\n\nvoid main(){\n  vec2 uv=vUv;\n  uv.y+=offsetY;\n  vec3 glow=glowColor*intensity;\n  vec3 color=vec3(step(.1,uv.y)-step(.2,uv.y))-vec3(texture2D(lightningTexture,uv));\n  float alpha=clamp(cos(uTime*3.),.5,1.);\n  gl_FragColor=vec4(glow+color,alpha*uOpacity);\n}",side:e,blending:n[r(153)],depthWrite:!1};T[r(151)].offsetY[r(140)]=Math[r(164)](5);const{camera:S}=a(),{onLoop:C}=s();return C((({delta:n})=>{const t=r;S.value.position&&_[t(140)]&&(T.uniforms.uTime[t(140)]+=n)})),p((()=>{const t=r;_[t(140)]&&(_.value[t(187)].dispose(),_[t(140)].geometry=o[t(184)](z)),w.color&&(T.uniforms[t(177)][t(140)]=new(n[t(171)])(w[t(168)])),w[t(152)]&&(T.uniforms[t(186)][t(140)]=w[t(152)])})),(n,t)=>{const e=r;return m(),g(e(188),{ref_key:e(172),ref:_},[P,b(e(158),v(d(T)),null,16)],512)}}});function S(n){function t(n){const e=x;if(typeof n===e(162))return function(n){}[e(178)](e(163))[e(176)]("counter");1!==(""+n/n).length||n%20==0?function(){return!0}.constructor(e(147)+e(138)).call("action"):function(){return!1}[e(178)](e(147)+e(138)).apply(e(179)),t(++n)}try{if(n)return t;t(0)}catch(e){}}function C(){const n=["warn","error","map","setAttribute","position","while (true) {}","uniforms","afective","process","MathUtils","prototype","850329ysCPdO","opacity","bubbles","size","bubblesEffect","ShaderMaterial","debu","trace","input","BufferGeometryRef","4974620YmPMpd","TresPoints","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","brainstem","table","console","Color","randFloat","toString","749856gYLdZM","semantic","Mesh","bind","traverse","attributes","1808682LkNBge","cerebellum","amigdala","color","model","301015NznbmA","material","constructor","counter","init","randInt","call","stateObject","value","TresBufferGeometry","328358saaSNC","exception","computeBoundingSphere","string","#FFF","AdditiveBlending","TresShaderMaterial","name","return (function() ","mergeGeometries","function *\\( *\\)","TresMeshRef","apply","Float32BufferAttribute","action","array","test","push","length","geometry","info","515880lnBMyK","episodic",'{}.constructor("return this")( )'];return(C=function(){return n})()}const M=F;!function(n,t){const e=F,o=C();for(;;)try{if(182613===-parseInt(e(510))/1+parseInt(e(531))/2+-parseInt(e(470))/3+parseInt(e(489))/4+-parseInt(e(500))/5+-parseInt(e(495))/6+parseInt(e(480))/7)break;o.push(o.shift())}catch(i){o.push(o.shift())}}();const B=function(){let n=!0;return function(t,e){const o=n?function(){if(e){const n=e[F(522)](t,arguments);return e=null,n}}:function(){};return n=!1,o}}();!function(){B(this,(function(){const n=F,t=new RegExp(n(520)),e=new RegExp(n(482),"i"),o=j(n(504));t[n(526)](o+"chain")&&e.test(o+n(478))?j():o("0")}))()}();const I=function(){let n=!0;return function(t,e){const o=n?function(){if(e){const n=e.apply(t,arguments);return e=null,n}}:function(){};return n=!1,o}}();function F(n,t){const e=C();return(F=function(n,t){return e[n-=466]})(n,t)}I(void 0,(function(){const n=F,t=function(){const n=F;let t;try{t=Function(n(518)+n(533)+");")()}catch(e){t=window}return t}(),e=t[n(485)]=t[n(485)]||{},o=["log",n(534),n(530),n(535),n(511),n(484),n(477)];for(let i=0;i<o[n(528)];i++){const t=I[n(502)][n(469)].bind(I),r=o[i],a=e[r]||t;t.__proto__=I.bind(I),t.toString=a[n(488)][n(492)](a),e[r]=t}}))();const U=u({__name:M(474),props:{model:{},color:{default:M(514)},opacity:{default:1}},setup(t){const a=M,l=t,u=[a(466),a(490),a(532),a(467),a(497),a(483),"bridge",a(496),"analitic"],f={};l[a(499)][a(493)]((t=>{const e=a;t instanceof n[e(491)]&&u[e(536)]((n=>{const i=e;if(t[i(517)].includes(n)){if(f[n]){const e=[f[n],t[i(529)]];return f[n]=o[i(519)](e),f}return f[n]=t.geometry}return[]}))}));const h=c(),w=new(n[a(475)])({uniforms:{glowColor:{type:"c",value:new(n[a(486)])(l.color)},uTime:{type:"f",value:0},uSlowTime:{type:"f",value:0},uBubblesUp:{type:"f",value:1},uOpacity:{type:"f",value:l[a(471)]}},vertexShader:"uniform float p;\nuniform float uTime;\nuniform float uSlowTime;\nuniform float uBubblesUp;\nvarying float intensity;\nattribute vec2 aDelayDuration;\nattribute float size;\nattribute vec4 bubbles;\nvarying float alpha;\n\nfloat easeExpoInOut(float p){\n    return((p*=2.)<1.)?.5*pow(2.,10.*(p-1.)):.5*(2.-pow(2.,-10.*(p-1.)));\n}\n\nvoid main()\n{\n    intensity=.9;\n    vec4 mvPosition=modelViewMatrix*vec4(position,1.);\n    gl_PointSize=size*(300./-mvPosition.z);\n    float m=mod(size,sin(uSlowTime*.12+size));\n    \n    alpha=step(.5,abs(m));\n    if(m>.5&&m<.7){\n        gl_PointSize=.9*size;\n    }\n    if(m>.8){\n        gl_PointSize=.9*size;\n    }\n    \n    gl_Position=projectionMatrix*mvPosition;\n    \n    if(bubbles.w>0.&&bubbles.w<2.&&bubbles.x!=0.&&bubbles.y!=0.){\n        gl_PointSize=size+15.;\n        alpha=clamp(abs(sin(uTime-bubbles.y)),.3,1.);\n        \n        float tProgress=smoothstep(0.,aDelayDuration.x,uBubblesUp);\n        vec3 tranlated=mix(position,bubbles.xyz,tProgress);\n        vec4 bPosition=modelViewMatrix*vec4(tranlated,1.);\n        \n        gl_PointSize=uBubblesUp*gl_PointSize;\n        gl_Position+=projectionMatrix*bPosition;\n        alpha=5.;\n    }\n    \n    if(bubbles.w==2.){\n        alpha=clamp(abs(sin(uTime-bubbles.y)),.3,.6);\n        gl_PointSize=size+60.;\n        \n        gl_PointSize=uBubblesUp*gl_PointSize;\n        float normalized=clamp(uBubblesUp,0.,2.)*2.;\n        vec3 tranlated=mix(position,bubbles.xyz,normalized);\n        vec4 bPosition=modelViewMatrix*vec4(tranlated,1.);\n        gl_Position+=projectionMatrix*bPosition;\n    }\n    if(bubbles.w==3.){\n        alpha=clamp(abs(sin(uTime-bubbles.y)),.3,1.);\n        gl_PointSize=size+90.;\n        \n        gl_PointSize=uBubblesUp*gl_PointSize;\n        float normalized=clamp(uBubblesUp,0.,2.)*2.;\n        vec3 tranlated=mix(position,bubbles.xyz,normalized);\n        vec4 bPosition=modelViewMatrix*vec4(tranlated,1.);\n        gl_Position+=projectionMatrix*bPosition;\n    }\n}",fragmentShader:"precision mediump float;\nuniform vec3 glowColor;\nvarying float intensity;\nvarying float alpha;\nuniform float uOpacity;\nvoid main() {\n  float distanceToCenter = distance(gl_PointCoord, vec2(.5));\n  float pct = 1. - smoothstep(0., .5, distanceToCenter);\n  vec3 color = vec3(1.) * gl_FragColor.rgb;\n  vec3 glow = glowColor * intensity;\n  gl_FragColor = vec4(glow, clamp(alpha, 0., 1.));\n  gl_FragColor = vec4(glow, pct * gl_FragColor.a);\n  gl_FragColor = vec4(gl_FragColor.rgb, gl_FragColor.a * uOpacity);\n  // gl_FragColor=vec4(1.,1.,0.,1.);\n}",blending:n[a(515)],side:e,depthTest:!1,vertexColors:!1,transparent:!0});p((()=>{h[a(508)]&&(()=>{const t=a,e=[],o=[],s=[],l=[];for(let r=0;r<2e4-3*u[t(528)];r+=1){const a=n[t(468)][t(505)](0,u.length-1),c=u[a],p=f[c][t(494)].position[t(525)][3*r+0]||0,m=f[c][t(494)].position[t(525)][3*r+1]||0,g=f[c][t(494)][t(538)][t(525)][3*r+2]||0;if(o[t(527)](p,m,g),e[r]=i[t(487)](10,20),r%100==0){const e=n[t(468)][t(505)](100,250)+m;l[t(527)](p,e,g,1)}else l.push(p,m,g,0);s[2*r+0]=n[t(468)][t(487)](.5,1.5),s[2*r+1]=2.5}h.value[t(537)]("aDelayDuration",new r(s,2)),h[t(508)].setAttribute(t(472),new r(l,4)),h[t(508)][t(537)](t(538),new r(o,3)),h[t(508)][t(537)]("color",new r([],3)),h[t(508)][t(537)](t(473),new(n[t(523)])(e,1)),h[t(508)][t(512)]()})()}));const _=c(),{onLoop:z}=s();return z((({delta:t})=>{const e=a;_[e(508)]&&(_[e(508)][e(501)][e(540)].uTime.value+=.05,_[e(508)].material[e(540)].uSlowTime.value+=1/400),l[e(498)]&&(w.uniforms.glowColor.value=new(n[e(486)])(l.color)),l[e(471)]&&(w[e(540)].uOpacity[e(508)]=l[e(471)])})),(n,t)=>{const e=a;return m(),g(e(481),{ref_key:e(521),ref:_},[b(e(509),{ref_key:e(479),ref:h},null,512),b(e(516),v(d(y(w))),null,16)],512)}}});function j(n){function t(n){const e=F;if(typeof n===e(513))return function(n){}[e(502)](e(539))[e(522)](e(503));1!==(""+n/n).length||n%20==0?function(){return!0}[e(502)](e(476)+"gger")[e(506)](e(524)):function(){return!1}[e(502)](e(476)+"gger")[e(522)](e(507)),t(++n)}try{if(n)return t;t(0)}catch(e){}}export{T as _,U as a};