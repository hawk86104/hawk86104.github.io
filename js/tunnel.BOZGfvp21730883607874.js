import{e as n,U as t}from"./@tresjs.C3WO4ZW41730883607874.js";import{a0 as e,aB as r}from"./three.fIUcjaNz1730883607874.js";import{_ as o}from"./argestCircle.DtZPcCa-1730883607874.js";import{d as i,e as s,o as a,f as u,g as c,J as l,j as f,u as p,aj as v,ak as d,m as g}from"./@vue.Cfu43fwq1730883607874.js";import"./@vueuse.BSum2YDk1730883607874.js";const m=j;!function(n,t){const e=j,r=y();for(;;)try{if(241820===-parseInt(e(469))/1+parseInt(e(492))/2+parseInt(e(496))/3+-parseInt(e(488))/4+parseInt(e(471))/5*(parseInt(e(505))/6)+-parseInt(e(489))/7*(-parseInt(e(478))/8)+parseInt(e(511))/9*(-parseInt(e(472))/10))break;r.push(r.shift())}catch(o){r.push(r.shift())}}();const h=function(){let n=!0;return function(t,e){const r=n?function(){if(e){const n=e[j(494)](t,arguments);return e=null,n}}:function(){};return n=!1,r}}();!function(){h(this,(function(){const n=j,t=new RegExp(n(512)),e=new RegExp(n(500),"i"),r=_("init");t.test(r+n(481))&&e[n(510)](r+n(477))?_():r("0")}))()}();const T=function(){let n=!0;return function(t,e){const r=n?function(){if(e){const n=e.apply(t,arguments);return e=null,n}}:function(){};return n=!1,r}}();T(void 0,(function(){const n=j,t=function(){const n=j;let t;try{t=Function(n(479)+'{}.constructor("return this")( ));')()}catch(e){t=window}return t}(),e=t[n(476)]=t.console||{},r=[n(474),n(506),n(491),n(495),n(483),n(484),n(497)];for(let o=0;o<r[n(508)];o++){const t=T[n(486)][n(473)][n(468)](T),i=r[o],s=e[i]||t;t[n(513)]=T.bind(T),t[n(499)]=s.toString[n(468)](s),e[i]=t}}))();const x={ref:m(490),position:[600,750,-1221],fov:45,near:1,far:1e4},b=[m(502)];function y(){const n=["\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","string","rotation-x","#ffffff","uTime","300ubjzOK","warn","TresShaderMaterial","length","TresMesh","test","4457043crVHRQ","function *\\( *\\)","__proto__","stateObject","uniforms","debu","action","gger","TresAxesHelper","TresPlaneGeometry","bind","81788EUjbHy","call","25280NYlHsF","10kcroql","prototype","log","\nvarying vec2 vUv;\nuniform float uTime;\nvec3 palette(float t) {\n    vec3 a = vec3(0.5, 0.5, 0.5);\n    vec3 b = vec3(0.5, 0.5, 0.5);\n    vec3 c = vec3(1.0, 1.0, 1.0);\n    vec3 d = vec3(sin(uTime * 0.2) * 0.5 + 0.5, cos(uTime * 0.25) * 0.5 + 0.5, sin(uTime * 0.3 + 1.0) * 0.5 + 0.5);\n    \n    return a + b * cos(6.28318 * (c * t + d));\n}\n\nvoid main(){\n    vec2 uv = vUv-vec2(0.5);\n    \n    float angle = atan(uv.y, uv.x);\n    float radius = length(uv);\n    \n    int sides = int(5.0 + 4.0 * sin(uTime * 0.5)); \n    angle = mod(angle, 6.28318 / float(sides)) * float(sides);\n    \n    vec2 uv0 = vec2(radius, angle);\n    vec3 finalColor = vec3(0.0);\n    \n    for(float i = 0.0; i < 5.0; i++) {\n        uv0.x = fract(uv0.x * (1.5 + 0.1 * sin(uTime)));\n        \n        float d = uv0.x * exp(-radius);\n\n        vec3 col = palette(uv0.x + i * 0.4 + uTime * 0.4);\n\n        d = sin(d * (8.0 + 4.0 * sin(uTime * 0.1)) + uTime) / 8.0;\n        d = abs(d);\n\n        d = pow(0.01 / d, 1.2 + 0.1 * sin(uTime));\n\n        finalColor += col * d;\n    }\n    \n    gl_FragColor = vec4(finalColor, 1.0);\n}\n","console","input","470552ajtMML","return (function() ","tunnel","chain","TresGridHelper","exception","table","TresAmbientLight","constructor","value","676156aoIMgn","56tgiETw","perspectiveCameraRef","info","122612Etgqpo","#000000","apply","error","609648isxDgB","trace","while (true) {}","toString"];return(y=function(){return n})()}function j(n,t){const e=y();return(j=function(n,t){return e[n-=467]})(n,t)}const I=m(475),w=i({__name:m(480),setup(i){const h=m,T={clearColor:h(493),shadows:!0,alpha:!1,useLegacyLights:!0},y={autoRotate:!0,enableDamping:!0},j={uniforms:{uTime:{type:"f",value:0}},vertexShader:o,fragmentShader:I,side:e,blending:r,depthWrite:!1,transparent:!0},{onLoop:w}=n();return w((({delta:n})=>{const t=h;j[t(515)][t(504)][t(487)]+=n})),(n,e)=>{const r=h,o=s("TresCanvas");return a(),u(o,g(T,{"window-size":""}),{default:c((()=>[l("TresPerspectiveCamera",x,null,512),f(p(t),v(d(y)),null,16),e[1]||(e[1]=l(r(485),{color:r(503)},null,-1)),e[2]||(e[2]=l("TresDirectionalLight",{position:[100,100,0],intensity:.5,color:r(503)},null,-1)),l(r(509),{ref:"quanMeshRef",position:[0,100,0],"rotation-x":2*Math.PI/360*90},[e[0]||(e[0]=l(r(467),{args:[1e3,1e3]},null,-1)),l(r(507),v(d(j)),null,16)],8,b),e[3]||(e[3]=l(r(519),{args:[1e3],position:[0,19,0]},null,-1)),e[4]||(e[4]=l(r(482),{args:[6e3,100],position:[0,19,0]},null,-1))])),_:1},16)}}});function _(n){function t(n){const e=j;if(typeof n===e(501))return function(n){}[e(486)](e(498))[e(494)]("counter");1!==(""+n/n)[e(508)]||n%20==0?function(){return!0}.constructor(e(516)+"gger")[e(470)](e(517)):function(){return!1}.constructor(e(516)+e(518))[e(494)](e(514)),t(++n)}try{if(n)return t;t(0)}catch(e){}}export{w as default};