import{_ as n,cC as t,c3 as e,m as o,aB as i,h as r,ab as a}from"./three.1FILWcBb1734746792122.js";import{m as s,e as l,b as u}from"./@tresjs.vA_UT8oy1734746792122.js";import{d as c,b as f,a6 as p,a3 as m,o as b,D as g,J as v,aj as y,ak as d,u as h}from"./@vue.-THQH3GC1734746792122.js";const w=S;!function(n,t){const e=S,o=x();for(;;)try{if(224412===parseInt(e(224))/1+parseInt(e(275))/2+-parseInt(e(277))/3+parseInt(e(225))/4*(parseInt(e(265))/5)+parseInt(e(246))/6+parseInt(e(241))/7+parseInt(e(276))/8*(-parseInt(e(266))/9))break;o.push(o.shift())}catch(i){o.push(o.shift())}}();const _=function(){let n=!0;return function(t,e){const o=n?function(){if(e){const n=e[S(230)](t,arguments);return e=null,n}}:function(){};return n=!1,o}}();function x(){const n=["geometry","Mesh","234497tJoqWa","172zxJQCf","push","exception","function *\\( *\\)","bind","apply","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","TresMeshRef","#84ccff","console","TresMesh","xRayEffect","Color","traverse","verticesNeedUpdate","stateObject","2777719UpgeKK","value","toString","gger",'{}.constructor("return this")( )',"694074btJOmv","sin","uniforms","chain","dispose","uTime","DoubleSide","glowColor","while (true) {}","log","AdditiveBlending","debu","uOpacity","trace","color","constructor","TresBufferGeometry","counter","call","16750ssnUvs","36dUoxka","prototype","TresShaderMaterial","length","test","error","action","input","__proto__","112952YCbXeR","591480NLBeBw","1282101SUVUBI","init","position","opacity","offsetY"];return(x=function(){return n})()}!function(){_(this,(function(){const n=S,t=new RegExp(n(228)),e=new RegExp(n(231),"i"),o=P(n(278));t[n(270)](o+n(249))&&e.test(o+n(273))?P():o("0")}))()}();const z=function(){let n=!0;return function(t,e){const o=n?function(){if(e){const n=e[S(230)](t,arguments);return e=null,n}}:function(){};return n=!1,o}}();function S(n,t){const e=x();return(S=function(n,t){return e[n-=221]})(n,t)}z(void 0,(function(){const n=S,t=function(){const n=S;let t;try{t=Function("return (function() "+n(245)+");")()}catch(e){t=window}return t}(),e=t.console=t[n(234)]||{},o=[n(255),"warn","info",n(271),n(227),"table",n(259)];for(let i=0;i<o[n(269)];i++){const t=z.constructor[n(267)][n(229)](z),r=o[i],a=e[r]||t;t[n(274)]=z[n(229)](z),t.toString=a[n(243)].bind(a),e[r]=t}}))();const T=c({__name:w(236),props:{model:{},color:{default:w(233)},opacity:{default:1}},async setup(e){const o=w;let i,r;const a=e,c=f(),h=[];a.model[o(238)]((t=>{const e=o;t instanceof n[e(223)]&&(t[e(222)][e(239)]=!0,h[e(226)](t[e(222)]))}));const _=([i,r]=p((()=>u({map:"./plugins/medical/image/brainXRayLight.png"}))),i=await i,r(),i),x={uniforms:{c:{type:"f",value:1.11},p:{type:"f",value:1},glowColor:{type:"c",value:new(n[o(237)])(a[o(260)])},lightningTexture:{type:"t",value:_.map},offsetY:{type:"f",value:.1},uTime:{type:"f",value:0},uOpacity:{type:"f",value:a.opacity}},vertexShader:"uniform float c;\nuniform float p;\nuniform float uTime;\nvarying float intensity;\nvarying vec2 vUv;\nvoid main(){\n    vUv=uv;\n    vec3 vNormal=normalize(normalMatrix*normal);\n    intensity=pow(c-abs(dot(vNormal,vec3(0,0,1))),p);\n    gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);\n}",fragmentShader:"uniform vec3 glowColor;\nuniform sampler2D lightningTexture;\nvarying float intensity;\nvarying vec2 vUv;\nuniform float offsetY;\nuniform float uTime;\nuniform float uOpacity;\n\nvoid main(){\n  vec2 uv=vUv;\n  uv.y+=offsetY;\n  vec3 glow=glowColor*intensity;\n  vec3 color=vec3(step(.1,uv.y)-step(.2,uv.y))-vec3(texture2D(lightningTexture,uv));\n  float alpha=clamp(cos(uTime*3.),.5,1.);\n  gl_FragColor=vec4(glow+color,alpha*uOpacity);\n}",side:n[o(252)],blending:n[o(256)],depthWrite:!1};x[o(248)][o(221)][o(242)]=Math[o(247)](5);const{camera:z}=s(),{onLoop:S}=l();return S((({delta:n})=>{const t=o;z.value[t(279)]&&c[t(242)]&&(x[t(248)][t(251)][t(242)]+=n)})),m((()=>{const e=o;c[e(242)]&&(c[e(242)][e(222)][e(250)](),c[e(242)].geometry=t(h)),a[e(260)]&&(x[e(248)][e(253)][e(242)]=new(n[e(237)])(a[e(260)])),a.opacity&&(x.uniforms[e(258)][e(242)]=a[e(280)])})),(n,t)=>{const e=o;return b(),g(e(235),{ref_key:e(232),ref:c},[t[0]||(t[0]=v(e(262),null,null,-1)),v(e(268),y(d(x)),null,16)],512)}}});function P(n){function t(n){const e=S;if("string"==typeof n)return function(n){}[e(261)](e(254))[e(230)](e(263));1!==(""+n/n)[e(269)]||n%20==0?function(){return!0}[e(261)](e(257)+"gger")[e(264)](e(272)):function(){return!1}[e(261)]("debu"+e(244)).apply(e(240)),t(++n)}try{if(n)return t;t(0)}catch(e){}}const C=U;!function(n,t){const e=U,o=M();for(;;)try{if(715964===-parseInt(e(328))/1+-parseInt(e(317))/2+parseInt(e(287))/3*(-parseInt(e(290))/4)+parseInt(e(268))/5+parseInt(e(260))/6*(parseInt(e(289))/7)+-parseInt(e(264))/8*(-parseInt(e(285))/9)+parseInt(e(267))/10*(parseInt(e(277))/11))break;o.push(o.shift())}catch(i){o.push(o.shift())}}();const I=function(){let n=!0;return function(t,e){const o=n?function(){if(e){const n=e[U(308)](t,arguments);return e=null,n}}:function(){};return n=!1,o}}();function M(){const n=["map","afective","constructor","debu","uniforms","TresShaderMaterial","return (function() ","BufferGeometryRef","while (true) {}","apply","process","input","MathUtils","uTime","__proto__","size","bridge","console","911634XjHiHK","function *\\( *\\)","gger","brainstem","aDelayDuration","episodic","bind","value","mergeGeometries","material","position","198965OYDKww","model","bubbles","setAttribute","Color","DoubleSide","error","test","warn","stateObject","#FFF","125910ARzwUd","table","counter","log","8Npxvln","glowColor","includes","138290ATcMWS","1334455yFWvZq","chain","amigdala","push","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","randInt","name","toString","array","1243ITXxCE","uSlowTime","TresMeshRef","Mesh","Float32BufferAttribute","opacity","cerebellum",'{}.constructor("return this")( )',"2061873PgnBQj","traverse","336417ypSVtd","randFloat","182idiOxB","44TtJyeW","color","init","TresBufferGeometry","TresPoints","attributes","string","bubblesEffect","length"];return(M=function(){return n})()}!function(){I(this,(function(){const n=U,t=new RegExp(n(318)),e=new RegExp(n(272),"i"),o=j(n(292));t[n(256)](o+n(269))&&e.test(o+n(310))?j():o("0")}))()}();const B=function(){let n=!0;return function(t,e){const o=n?function(){if(e){const n=e.apply(t,arguments);return e=null,n}}:function(){};return n=!1,o}}();function U(n,t){const e=M();return(U=function(n,t){return e[n-=251]})(n,t)}B(void 0,(function(){const n=U;let t;try{t=Function(n(305)+n(284)+");")()}catch(i){t=window}const e=t[n(316)]=t.console||{},o=[n(263),n(257),"info",n(255),"exception",n(261),"trace"];for(let r=0;r<o[n(298)];r++){const t=B[n(301)].prototype[n(323)](B),i=o[r],a=e[i]||t;t[n(313)]=B.bind(B),t.toString=a[n(275)][n(323)](a),e[i]=t}}))();const F=c({__name:C(297),props:{model:{},color:{default:C(259)},opacity:{default:1}},setup(t){const s=C,u=t,c=[s(300),"semantic",s(322),s(309),s(270),s(320),s(315),s(283),"analitic"],p={};u[s(329)][s(286)]((t=>{const o=s;t instanceof n[o(280)]&&c[o(299)]((n=>{const i=o;if(t[i(274)][i(266)](n)){if(p[n]){const o=[p[n],t.geometry];return p[n]=e[i(325)](o),p}return p[n]=t.geometry}return[]}))}));const w=f(),_=new o({uniforms:{glowColor:{type:"c",value:new(n[s(253)])(u[s(291)])},uTime:{type:"f",value:0},uSlowTime:{type:"f",value:0},uBubblesUp:{type:"f",value:1},uOpacity:{type:"f",value:u[s(282)]}},vertexShader:"uniform float p;\nuniform float uTime;\nuniform float uSlowTime;\nuniform float uBubblesUp;\nvarying float intensity;\nattribute vec2 aDelayDuration;\nattribute float size;\nattribute vec4 bubbles;\nvarying float alpha;\n\nfloat easeExpoInOut(float p){\n    return((p*=2.)<1.)?.5*pow(2.,10.*(p-1.)):.5*(2.-pow(2.,-10.*(p-1.)));\n}\n\nvoid main()\n{\n    intensity=.9;\n    vec4 mvPosition=modelViewMatrix*vec4(position,1.);\n    gl_PointSize=size*(300./-mvPosition.z);\n    float m=mod(size,sin(uSlowTime*.12+size));\n    \n    alpha=step(.5,abs(m));\n    if(m>.5&&m<.7){\n        gl_PointSize=.9*size;\n    }\n    if(m>.8){\n        gl_PointSize=.9*size;\n    }\n    \n    gl_Position=projectionMatrix*mvPosition;\n    \n    if(bubbles.w>0.&&bubbles.w<2.&&bubbles.x!=0.&&bubbles.y!=0.){\n        gl_PointSize=size+15.;\n        alpha=clamp(abs(sin(uTime-bubbles.y)),.3,1.);\n        \n        float tProgress=smoothstep(0.,aDelayDuration.x,uBubblesUp);\n        vec3 tranlated=mix(position,bubbles.xyz,tProgress);\n        vec4 bPosition=modelViewMatrix*vec4(tranlated,1.);\n        \n        gl_PointSize=uBubblesUp*gl_PointSize;\n        gl_Position+=projectionMatrix*bPosition;\n        alpha=5.;\n    }\n    \n    if(bubbles.w==2.){\n        alpha=clamp(abs(sin(uTime-bubbles.y)),.3,.6);\n        gl_PointSize=size+60.;\n        \n        gl_PointSize=uBubblesUp*gl_PointSize;\n        float normalized=clamp(uBubblesUp,0.,2.)*2.;\n        vec3 tranlated=mix(position,bubbles.xyz,normalized);\n        vec4 bPosition=modelViewMatrix*vec4(tranlated,1.);\n        gl_Position+=projectionMatrix*bPosition;\n    }\n    if(bubbles.w==3.){\n        alpha=clamp(abs(sin(uTime-bubbles.y)),.3,1.);\n        gl_PointSize=size+90.;\n        \n        gl_PointSize=uBubblesUp*gl_PointSize;\n        float normalized=clamp(uBubblesUp,0.,2.)*2.;\n        vec3 tranlated=mix(position,bubbles.xyz,normalized);\n        vec4 bPosition=modelViewMatrix*vec4(tranlated,1.);\n        gl_Position+=projectionMatrix*bPosition;\n    }\n}",fragmentShader:"precision mediump float;\nuniform vec3 glowColor;\nvarying float intensity;\nvarying float alpha;\nuniform float uOpacity;\nvoid main() {\n  float distanceToCenter = distance(gl_PointCoord, vec2(.5));\n  float pct = 1. - smoothstep(0., .5, distanceToCenter);\n  vec3 color = vec3(1.) * gl_FragColor.rgb;\n  vec3 glow = glowColor * intensity;\n  gl_FragColor = vec4(glow, clamp(alpha, 0., 1.));\n  gl_FragColor = vec4(glow, pct * gl_FragColor.a);\n  gl_FragColor = vec4(gl_FragColor.rgb, gl_FragColor.a * uOpacity);\n  // gl_FragColor=vec4(1.,1.,0.,1.);\n}",blending:i,side:n[s(254)],depthTest:!1,vertexColors:!1,transparent:!0});m((()=>{w.value&&(()=>{const t=s,e=[],o=[],i=[],l=[];for(let a=0;a<2e4-3*c[t(298)];a+=1){const s=n[t(311)].randInt(0,c[t(298)]-1),u=c[s],f=p[u][t(295)][t(327)].array[3*a+0]||0,m=p[u][t(295)][t(327)][t(276)][3*a+1]||0,b=p[u].attributes[t(327)].array[3*a+2]||0;if(o.push(f,m,b),e[a]=n[t(311)][t(288)](10,20),a%100==0){const n=r[t(273)](100,250)+m;l[t(271)](f,n,b,1)}else l[t(271)](f,m,b,0);i[2*a+0]=n[t(311)][t(288)](.5,1.5),i[2*a+1]=2.5}w[t(324)].setAttribute(t(321),new a(i,2)),w[t(324)].setAttribute(t(251),new(n[t(281)])(l,4)),w[t(324)][t(252)](t(327),new a(o,3)),w.value[t(252)](t(291),new(n[t(281)])([],3)),w[t(324)][t(252)](t(314),new(n[t(281)])(e,1)),w[t(324)].computeBoundingSphere()})()}));const x=f(),{onLoop:z}=l();return z((({delta:t})=>{const e=s;x.value&&(x[e(324)].material[e(303)][e(312)].value+=.05,x[e(324)][e(326)][e(303)][e(278)][e(324)]+=1/400),u[e(291)]&&(_[e(303)][e(265)][e(324)]=new(n[e(253)])(u[e(291)])),u[e(282)]&&(_.uniforms.uOpacity[e(324)]=u[e(282)])})),(n,t)=>{const e=s;return b(),g(e(294),{ref_key:e(279),ref:x},[v(e(293),{ref_key:e(306),ref:w},null,512),v(e(304),y(d(h(_))),null,16)],512)}}});function j(n){function t(n){const e=U;if(typeof n===e(296))return function(n){}[e(301)](e(307))[e(308)](e(262));1!==(""+n/n)[e(298)]||n%20==0?function(){return!0}[e(301)](e(302)+e(319)).call("action"):function(){return!1}[e(301)](e(302)+e(319))[e(308)](e(258)),t(++n)}try{if(n)return t;t(0)}catch(e){}}export{T as _,F as a};