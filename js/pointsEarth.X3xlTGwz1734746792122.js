import{ak as e,_ as n}from"./three.1FILWcBb1734746792122.js";import{e as t,U as a,b as o}from"./@tresjs.vA_UT8oy1734746792122.js";import{P as r}from"./tweakpane.yHWGBmom1734746792122.js";import{d as i,a6 as l,X as s,e as u,o as c,f as p,g as f,J as v,j as m,u as d,m as h,aj as g,ak as x}from"./@vue.-THQH3GC1734746792122.js";import"./@vueuse.lqJslAkC1734746792122.js";const y=S;!function(e,n){const t=S,a=z();for(;;)try{if(361285===parseInt(t(481))/1+parseInt(t(475))/2+-parseInt(t(454))/3+-parseInt(t(447))/4*(parseInt(t(450))/5)+-parseInt(t(476))/6*(-parseInt(t(488))/7)+-parseInt(t(487))/8*(parseInt(t(501))/9)+parseInt(t(507))/10)break;a.push(a.shift())}catch(o){a.push(a.shift())}}();const T=function(){let e=!0;return function(n,t){const a=e?function(){if(t){const e=t[S(480)](n,arguments);return t=null,e}}:function(){};return e=!1,a}}();!function(){T(this,(function(){const e=S,n=new RegExp(e(494)),t=new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","i"),a=_(e(506));n[e(493)](a+"chain")&&t[e(493)](a+"input")?_():a("0")}))()}();const w=function(){let e=!0;return function(n,t){const a=e?function(){if(t){const e=t.apply(n,arguments);return t=null,e}}:function(){};return e=!1,a}}();function S(e,n){const t=z();return(S=function(e,n){return t[e-=443]})(e,n)}w(void 0,(function(){const e=S,n=function(){const e=S;let n;try{n=Function(e(451)+e(504)+");")()}catch(t){n=window}return n}(),t=n[e(460)]=n.console||{},a=[e(489),e(473),e(486),e(482),e(465),e(472),e(445)];for(let o=0;o<a[e(499)];o++){const n=w[e(446)][e(467)].bind(w),r=a[o],i=t[r]||n;n[e(443)]=w[e(469)](w),n[e(468)]=i[e(468)].bind(i),t[r]=n}}))();const b=i({__name:y(505),async setup(i){const T=y;let w,S;const b={color:T(495),pointSize:4},_={clearColor:T(498),shadows:!1,alpha:!1,outputColorSpace:e},z={color:b.color,wireframe:!0,transparent:!0,opacity:.2},E=([w,S]=l((()=>o(["./plugins/earthSample/image/pointsEarth/00_earthmap1k.jpg","./plugins/earthSample/image/pointsEarth/circle.png","./plugins/earthSample/image/pointsEarth/04_rainbow1k.jpg","./plugins/earthSample/image/pointsEarth/01_earthbump1k.jpg","./plugins/earthSample/image/pointsEarth/02_earthspec1k.jpg"]))),w=await w,S(),w),j=E[0],P=E[1],D=E[2],k=E[3],A=E[4],I={uniforms:{size:{type:"f",value:b[T(457)]},uTime:{type:"f",value:0},uWaveHeight:{type:"f",value:.075},uWaveSpeed:{type:"f",value:.2},colorTexture:{type:"t",value:D},elevTexture:{type:"t",value:k},alphaTexture:{type:"t",value:A},earthTexture:{type:"t",value:j},starTexture:{type:"t",value:P}},vertexShader:"  uniform float size;\n  uniform sampler2D elevTexture;\n  uniform sampler2D alphaTexture;\n  uniform float uTime;\n  uniform float uWaveHeight;\n  uniform float uWaveSpeed;\n\n  varying vec2 vUv;\n  varying float vVisible;\n  varying float vAlpha;\n  varying float vElevation;\n  // Function to generate fBm with vec3 input\n  float random(vec3 st) {\n    return fract(sin(dot(st.xyz, vec3(12.9898,78.233,45.164))) * 43758.5453123);\n}\n\nfloat noise(vec3 st) {\n    vec3 i = floor(st);\n    vec3 f = fract(st);\n\n    // Eight corners in 3D of a tile\n    float a = random(i);\n    float b = random(i + vec3(1.0, 0.0, 0.0));\n    float c = random(i + vec3(0.0, 1.0, 0.0));\n    float d = random(i + vec3(1.0, 1.0, 0.0));\n    float e = random(i + vec3(0.0, 0.0, 1.0));\n    float f1 = random(i + vec3(1.0, 0.0, 1.0));\n    float g = random(i + vec3(0.0, 1.0, 1.0));\n    float h = random(i + vec3(1.0, 1.0, 1.0));\n\n    vec3 u = f * f * (3.0 - 2.0 * f);\n\n    return mix(mix(mix(a, b, u.x), mix(c, d, u.x), u.y),\n               mix(mix(e, f1, u.x), mix(g, h, u.x), u.y), u.z);\n}\n\nfloat fbm(vec3 st) {\n    float value = 0.0;\n    float amplitude = 0.5;\n\n    for (int i = 0; i < 5; i++) {\n        value += amplitude * noise(st);\n        st *= 2.0;\n        amplitude *= 0.5;\n    }\n    return value;\n}\n\n  void main() {\n    vUv = uv;\n    float alphaLand = 1.0 - texture2D(alphaTexture, vUv).r;\n    vAlpha = alphaLand;\n    vec3 newPosition = position;\n\n    if(alphaLand < 0.5) {\n      // Sea\n      // fBm for wave-like displacement\n      float waveHeight = uWaveHeight; // Adjust wave height as needed\n      float waveSpeed = uWaveSpeed;  // Adjust wave speed as needed\n      float displacement = (fbm(newPosition * 5.0 + uTime * waveSpeed) * 2.0 - 1.0) * waveHeight;\n      vElevation = displacement;\n      newPosition += normal * displacement ;\n    }\n\n    vec4 mvPosition = modelViewMatrix * vec4( newPosition, 1.0 );\n    float elv = texture2D(elevTexture, vUv).r;\n    vec3 vNormal = normalMatrix * normal;\n    vVisible = step(0.0, dot( -normalize(mvPosition.xyz), normalize(vNormal)));\n    mvPosition.z += 0.45 * elv;\n\n    // 求出 mvPosition 距离相机的距离\n    float dist = length(mvPosition.xyz);\n    // 根据距离调整 size\n    float pointSize = size * (1.0 - dist / 10.0);\n    gl_PointSize = max(pointSize, 1.0);\n    gl_PointSize = pointSize;\n    gl_Position = projectionMatrix * mvPosition;\n  }\n",fragmentShader:"  uniform sampler2D colorTexture;\n  // uniform sampler2D alphaTexture;\n  uniform sampler2D earthTexture;\n  uniform sampler2D starTexture;\n\n  varying vec2 vUv;\n  varying float vVisible;\n  varying float vAlpha;\n  varying float vElevation;\n\n  void main() {\n    if (floor(vVisible + 0.1) == 0.0) discard;\n    vec2 coord = gl_PointCoord;\n    float alpha = texture2D(starTexture, coord).a;\n    // 根据 alpha 值来裁剪形状\n    if (alpha < 0.1) discard;\n\n    // float alphaLand = 1.0 - texture2D(alphaTexture, vUv).r;\n    vec3 color = texture2D(colorTexture, vUv).rgb;\n    vec3 earth = texture2D(earthTexture, vUv).rgb;\n    color = mix(color, earth, 0.65);\n    if(\n      vAlpha > 0.5\n    ) {\n      gl_FragColor = vec4(color, vAlpha);\n    }else {\n      // 对于海洋部分，根据 vElevation 调整颜色\n      float elevationEffect = clamp(vElevation*30.0, -1.0, 1.0); // 将 vElevation 限制在 [-1, 1] 范围内\n      vec3 deep_sea_blue = vec3(0.004, 0.227, 0.388);\n      vec3 adjustedColor = mix(deep_sea_blue, earth*1.75, (elevationEffect + 1.0) * 0.5); // 根据 vElevation 调整颜色\n      gl_FragColor = vec4(adjustedColor, 1.0-vAlpha);\n    }\n  }\n",transparent:!0,side:n[T(471)]},U=s(),C=s(),M=(new r)[T(500)]({title:T(463)});M[T(492)](b,T(477),{type:T(477)}).on(T(496),(({value:e})=>{const n=T;C[n(449)].color[n(459)](e)})),M[T(492)](I[T(461)][T(470)],T(449),{min:.1,max:10,step:.1,label:T(478)}),M[T(492)](I.uniforms[T(466)],T(449),{min:.01,max:.5,step:.01,label:T(452)}),M[T(492)](I[T(461)][T(497)],T(449),{min:.01,max:1,step:.01,label:T(479)});const{onLoop:W}=t();return W((({delta:e})=>{const n=T;U[n(449)]&&(U[n(449)].rotation.y+=.002,I.uniforms.uTime[n(449)]+=10*e)})),(e,n)=>{const t=T,o=u(t(484));return c(),p(o,h(_,{"window-size":""}),{default:f((()=>[n[2]||(n[2]=v(t(444),{position:[0,0,3.5],fov:45,near:.1,far:20},null,-1)),m(d(a),{autoRotate:!0,autoRotateSpeed:2}),v(t(458),{ref_key:"groupRef",ref:U},[v("TresMesh",null,[n[0]||(n[0]=v(t(483),{args:[1,4]},null,-1)),v("TresMeshBasicMaterial",h({ref_key:t(503),ref:C},z),null,16)]),v(t(462),null,[n[1]||(n[1]=v(t(483),{args:[1,128]},null,-1)),v(t(464),g(x(I)),null,16)])],512),n[3]||(n[3]=v(t(456),{args:[t(455),t(491),3]},null,-1))])),_:1},16)}}});function _(e){function n(e){const t=S;if("string"==typeof e)return function(e){}[t(446)]("while (true) {}").apply(t(502));1!==(""+e/e)[t(499)]||e%20==0?function(){return!0}[t(446)](t(448)+"gger")[t(453)](t(490)):function(){return!1}[t(446)](t(448)+t(485)).apply(t(474)),n(++e)}try{if(e)return n;n(0)}catch(t){}}function z(){const e=["#ffffff","TresHemisphereLight","pointSize","TresGroup","set","console","uniforms","TresPoints","Debug","TresShaderMaterial","exception","uWaveHeight","prototype","toString","bind","size","FrontSide","table","warn","stateObject","1150050wvuohZ","3608490kdcErP","color","粒子大小","海浪变化速度","apply","109620WQGDOT","error","TresIcosahedronGeometry","TresCanvas","gger","info","968gszFKS","7NcZNdJ","log","action","#080820","addBinding","test","function *\\( *\\)","#17c5a9","change","uWaveSpeed","#122148","length","addFolder","52623txmdlp","counter","wireframeMaterialRef",'{}.constructor("return this")( )',"pointsEarth","init","8408280zurAdO","__proto__","TresPerspectiveCamera","trace","constructor","650736afmenK","debu","value","15VEtIyN","return (function() ","海浪高度","call","1710192lVMAUG"];return(z=function(){return e})()}export{b as default};