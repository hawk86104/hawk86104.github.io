import{e as n,U as e}from"./@tresjs.XlmHwCPa1735906732968.js";import{a0 as t,aB as r}from"./three.VhLXWX0H1735906732968.js";import{_ as o}from"./argestCircle.iQbYZf4A1735906732968.js";import{d as i,e as a,o as s,f as u,g as c,J as l,j as f,u as p,aj as v,ak as d,m}from"./@vue.yG49nQHr1735906732968.js";import"./@vueuse.HCIFcVWX1735906732968.js";const g=T;!function(n,e){const t=T,r=y();for(;;)try{if(748159===-parseInt(t(261))/1*(-parseInt(t(270))/2)+parseInt(t(297))/3+-parseInt(t(309))/4*(-parseInt(t(294))/5)+parseInt(t(284))/6+parseInt(t(282))/7*(parseInt(t(303))/8)+-parseInt(t(296))/9*(-parseInt(t(300))/10)+-parseInt(t(268))/11)break;r.push(r.shift())}catch(o){r.push(r.shift())}}();const h=function(){let n=!0;return function(e,t){const r=n?function(){if(t){const n=t.apply(e,arguments);return t=null,n}}:function(){};return n=!1,r}}();function T(n,e){const t=y();return(T=function(n,e){return t[n-=261]})(n,e)}!function(){h(this,(function(){const n=T,e=new RegExp(n(262)),t=new RegExp(n(264),"i"),r=j(n(285));e[n(311)](r+"chain")&&t[n(311)](r+n(279))?j():r("0")}))()}();const x=function(){let n=!0;return function(e,t){const r=n?function(){if(t){const n=t[T(291)](e,arguments);return t=null,n}}:function(){};return n=!1,r}}();function y(){const n=["2300XXPduA","perspectiveCameraRef","test","133JVDMBJ","function *\\( *\\)","error","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","console","#000000","log","45352890QaGhDD","exception","8238amTLIm","debu","bind","TresShaderMaterial","while (true) {}","TresGridHelper","action","TresMesh","call","input","TresPlaneGeometry","TresAmbientLight","503048ZuwmzH","rotation-x","8177352ApqBkp","init","tunnel","constructor","#ffffff","TresPerspectiveCamera","stateObject","apply","string","uniforms","680qgaFnG","trace","45WVYEkl","935511wdFGPy","\nvarying vec2 vUv;\nuniform float uTime;\nvec3 palette(float t) {\n    vec3 a = vec3(0.5, 0.5, 0.5);\n    vec3 b = vec3(0.5, 0.5, 0.5);\n    vec3 c = vec3(1.0, 1.0, 1.0);\n    vec3 d = vec3(sin(uTime * 0.2) * 0.5 + 0.5, cos(uTime * 0.25) * 0.5 + 0.5, sin(uTime * 0.3 + 1.0) * 0.5 + 0.5);\n    \n    return a + b * cos(6.28318 * (c * t + d));\n}\n\nvoid main(){\n    vec2 uv = vUv-vec2(0.5);\n    \n    float angle = atan(uv.y, uv.x);\n    float radius = length(uv);\n    \n    int sides = int(5.0 + 4.0 * sin(uTime * 0.5)); \n    angle = mod(angle, 6.28318 / float(sides)) * float(sides);\n    \n    vec2 uv0 = vec2(radius, angle);\n    vec3 finalColor = vec3(0.0);\n    \n    for(float i = 0.0; i < 5.0; i++) {\n        uv0.x = fract(uv0.x * (1.5 + 0.1 * sin(uTime)));\n        \n        float d = uv0.x * exp(-radius);\n\n        vec3 col = palette(uv0.x + i * 0.4 + uTime * 0.4);\n\n        d = sin(d * (8.0 + 4.0 * sin(uTime * 0.1)) + uTime) / 8.0;\n        d = abs(d);\n\n        d = pow(0.01 / d, 1.2 + 0.1 * sin(uTime));\n\n        finalColor += col * d;\n    }\n    \n    gl_FragColor = vec4(finalColor, 1.0);\n}\n","return (function() ","2697410dICegp","warn","TresAxesHelper","136SgAngh","info","counter","TresDirectionalLight","table","length"];return(y=function(){return n})()}x(void 0,(function(){const n=T;let e;try{e=Function(n(299)+'{}.constructor("return this")( ));')()}catch(o){e=window}const t=e[n(265)]=e[n(265)]||{},r=[n(267),n(301),n(304),n(263),n(269),n(307),n(295)];for(let i=0;i<r[n(308)];i++){const e=x[n(287)].prototype[n(272)](x),o=r[i],a=t[o]||e;e.__proto__=x.bind(x),e.toString=a.toString[n(272)](a),t[o]=e}}))();const I={ref:g(310),position:[600,750,-1221],fov:45,near:1,far:1e4},b=[g(283)],w=g(298),_=i({__name:g(286),setup(i){const h=g,T={clearColor:h(266),shadows:!0,alpha:!1,useLegacyLights:!0},x={autoRotate:!0,enableDamping:!0},y={uniforms:{uTime:{type:"f",value:0}},vertexShader:o,fragmentShader:w,side:t,blending:r,depthWrite:!1,transparent:!0},{onLoop:_}=n();return _((({delta:n})=>{y[h(293)].uTime.value+=n})),(n,t)=>{const r=h,o=a("TresCanvas");return s(),u(o,m(T,{"window-size":""}),{default:c((()=>[l(r(289),I,null,512),f(p(e),v(d(x)),null,16),t[1]||(t[1]=l(r(281),{color:r(288)},null,-1)),t[2]||(t[2]=l(r(306),{position:[100,100,0],intensity:.5,color:r(288)},null,-1)),l(r(277),{ref:"quanMeshRef",position:[0,100,0],"rotation-x":2*Math.PI/360*90},[t[0]||(t[0]=l(r(280),{args:[1e3,1e3]},null,-1)),l(r(273),v(d(y)),null,16)],8,b),t[3]||(t[3]=l(r(302),{args:[1e3],position:[0,19,0]},null,-1)),t[4]||(t[4]=l(r(275),{args:[6e3,100],position:[0,19,0]},null,-1))])),_:1},16)}}});function j(n){function e(n){const t=T;if(typeof n===t(292))return function(n){}[t(287)](t(274))[t(291)](t(305));1!==(""+n/n)[t(308)]||n%20==0?function(){return!0}[t(287)](t(271)+"gger")[t(278)](t(276)):function(){return!1}[t(287)](t(271)+"gger")[t(291)](t(290)),e(++n)}try{if(n)return e;e(0)}catch(t){}}export{_ as default};