import{ak as e,z as n}from"./three.fIUcjaNz1730883607874.js";import{a as t,e as a,U as o}from"./@tresjs.C3WO4ZW41730883607874.js";import{P as r}from"./tweakpane.BCjFYDHx1730883607874.js";import{d as i,a6 as l,X as s,e as u,o as c,f,g as p,J as v,j as m,u as d,m as h,aj as g,ak as x}from"./@vue.Cfu43fwq1730883607874.js";import"./@vueuse.BSum2YDk1730883607874.js";const y=b;!function(e,n){const t=b,a=S();for(;;)try{if(670093===-parseInt(t(257))/1*(-parseInt(t(295))/2)+parseInt(t(261))/3+parseInt(t(289))/4*(-parseInt(t(312))/5)+parseInt(t(263))/6*(-parseInt(t(265))/7)+-parseInt(t(303))/8+-parseInt(t(309))/9*(-parseInt(t(288))/10)+parseInt(t(287))/11)break;a.push(a.shift())}catch(o){a.push(a.shift())}}();const T=function(){let e=!0;return function(n,t){const a=e?function(){if(t){const e=t[b(292)](n,arguments);return t=null,e}}:function(){};return e=!1,a}}();!function(){T(this,(function(){const e=b,n=new RegExp("function *\\( *\\)"),t=new RegExp(e(278),"i"),a=z(e(286));n[e(277)](a+e(284))&&t[e(277)](a+"input")?z():a("0")}))()}();const w=function(){let e=!0;return function(n,t){const a=e?function(){if(t){const e=t[b(292)](n,arguments);return t=null,e}}:function(){};return e=!1,a}}();function b(e,n){const t=S();return(b=function(e,n){return t[e-=255]})(e,n)}function S(){const e=["3826311qcWqDL","海浪高度","7417656vuBIhI","string","7gzJTrh","bind","debu","pointsEarth","warn","value","console","TresMeshBasicMaterial","pointSize","return (function() ","color","log","test","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","action","call","TresPerspectiveCamera","size","change","chain","rotation","init","26663758fufhbN","7050gXnAsU","644YfgGdC","TresShaderMaterial","uniforms","apply","#080820","constructor","2piopwq","Debug","exception","while (true) {}","__proto__","TresGroup","toString","TresPoints","8996648chZOmd","wireframeMaterialRef","粒子大小","#ffffff","trace","#122148","5067iSBNbA","info","length","41615AfKepF","TresCanvas","stateObject","addFolder","addBinding",'{}.constructor("return this")( )',"274623IxAPdH","TresMesh","TresIcosahedronGeometry","gger"];return(S=function(){return e})()}w(void 0,(function(){const e=b,n=function(){const e=b;let n;try{n=Function(e(274)+e(256)+");")()}catch(t){n=window}return n}(),t=n.console=n[e(271)]||{},a=[e(276),e(269),e(310),"error",e(297),"table",e(307)];for(let o=0;o<a[e(311)];o++){const n=w[e(294)].prototype[e(266)](w),r=a[o],i=t[r]||n;n[e(299)]=w.bind(w),n[e(301)]=i[e(301)][e(266)](i),t[r]=n}}))();const _=i({__name:y(268),async setup(i){const T=y;let w,b;const S={color:"#17c5a9",pointSize:4},_={clearColor:T(308),shadows:!1,alpha:!1,outputColorSpace:e},z={color:S[T(275)],wireframe:!0,transparent:!0,opacity:.2},j=([w,b]=l((()=>t(["./plugins/earthSample/image/pointsEarth/00_earthmap1k.jpg","./plugins/earthSample/image/pointsEarth/circle.png","./plugins/earthSample/image/pointsEarth/04_rainbow1k.jpg","./plugins/earthSample/image/pointsEarth/01_earthbump1k.jpg","./plugins/earthSample/image/pointsEarth/02_earthspec1k.jpg"]))),w=await w,b(),w),E=j[0],P=j[1],I=j[2],D=j[3],A=j[4],k={uniforms:{size:{type:"f",value:S[T(273)]},uTime:{type:"f",value:0},uWaveHeight:{type:"f",value:.075},uWaveSpeed:{type:"f",value:.2},colorTexture:{type:"t",value:I},elevTexture:{type:"t",value:D},alphaTexture:{type:"t",value:A},earthTexture:{type:"t",value:E},starTexture:{type:"t",value:P}},vertexShader:"  uniform float size;\n  uniform sampler2D elevTexture;\n  uniform sampler2D alphaTexture;\n  uniform float uTime;\n  uniform float uWaveHeight;\n  uniform float uWaveSpeed;\n\n  varying vec2 vUv;\n  varying float vVisible;\n  varying float vAlpha;\n  varying float vElevation;\n  // Function to generate fBm with vec3 input\n  float random(vec3 st) {\n    return fract(sin(dot(st.xyz, vec3(12.9898,78.233,45.164))) * 43758.5453123);\n}\n\nfloat noise(vec3 st) {\n    vec3 i = floor(st);\n    vec3 f = fract(st);\n\n    // Eight corners in 3D of a tile\n    float a = random(i);\n    float b = random(i + vec3(1.0, 0.0, 0.0));\n    float c = random(i + vec3(0.0, 1.0, 0.0));\n    float d = random(i + vec3(1.0, 1.0, 0.0));\n    float e = random(i + vec3(0.0, 0.0, 1.0));\n    float f1 = random(i + vec3(1.0, 0.0, 1.0));\n    float g = random(i + vec3(0.0, 1.0, 1.0));\n    float h = random(i + vec3(1.0, 1.0, 1.0));\n\n    vec3 u = f * f * (3.0 - 2.0 * f);\n\n    return mix(mix(mix(a, b, u.x), mix(c, d, u.x), u.y),\n               mix(mix(e, f1, u.x), mix(g, h, u.x), u.y), u.z);\n}\n\nfloat fbm(vec3 st) {\n    float value = 0.0;\n    float amplitude = 0.5;\n\n    for (int i = 0; i < 5; i++) {\n        value += amplitude * noise(st);\n        st *= 2.0;\n        amplitude *= 0.5;\n    }\n    return value;\n}\n\n  void main() {\n    vUv = uv;\n    float alphaLand = 1.0 - texture2D(alphaTexture, vUv).r;\n    vAlpha = alphaLand;\n    vec3 newPosition = position;\n\n    if(alphaLand < 0.5) {\n      // Sea\n      // fBm for wave-like displacement\n      float waveHeight = uWaveHeight; // Adjust wave height as needed\n      float waveSpeed = uWaveSpeed;  // Adjust wave speed as needed\n      float displacement = (fbm(newPosition * 5.0 + uTime * waveSpeed) * 2.0 - 1.0) * waveHeight;\n      vElevation = displacement;\n      newPosition += normal * displacement ;\n    }\n\n    vec4 mvPosition = modelViewMatrix * vec4( newPosition, 1.0 );\n    float elv = texture2D(elevTexture, vUv).r;\n    vec3 vNormal = normalMatrix * normal;\n    vVisible = step(0.0, dot( -normalize(mvPosition.xyz), normalize(vNormal)));\n    mvPosition.z += 0.45 * elv;\n\n    // 求出 mvPosition 距离相机的距离\n    float dist = length(mvPosition.xyz);\n    // 根据距离调整 size\n    float pointSize = size * (1.0 - dist / 10.0);\n    gl_PointSize = max(pointSize, 1.0);\n    gl_PointSize = pointSize;\n    gl_Position = projectionMatrix * mvPosition;\n  }\n",fragmentShader:"  uniform sampler2D colorTexture;\n  // uniform sampler2D alphaTexture;\n  uniform sampler2D earthTexture;\n  uniform sampler2D starTexture;\n\n  varying vec2 vUv;\n  varying float vVisible;\n  varying float vAlpha;\n  varying float vElevation;\n\n  void main() {\n    if (floor(vVisible + 0.1) == 0.0) discard;\n    vec2 coord = gl_PointCoord;\n    float alpha = texture2D(starTexture, coord).a;\n    // 根据 alpha 值来裁剪形状\n    if (alpha < 0.1) discard;\n\n    // float alphaLand = 1.0 - texture2D(alphaTexture, vUv).r;\n    vec3 color = texture2D(colorTexture, vUv).rgb;\n    vec3 earth = texture2D(earthTexture, vUv).rgb;\n    color = mix(color, earth, 0.65);\n    if(\n      vAlpha > 0.5\n    ) {\n      gl_FragColor = vec4(color, vAlpha);\n    }else {\n      // 对于海洋部分，根据 vElevation 调整颜色\n      float elevationEffect = clamp(vElevation*30.0, -1.0, 1.0); // 将 vElevation 限制在 [-1, 1] 范围内\n      vec3 deep_sea_blue = vec3(0.004, 0.227, 0.388);\n      vec3 adjustedColor = mix(deep_sea_blue, earth*1.75, (elevationEffect + 1.0) * 0.5); // 根据 vElevation 调整颜色\n      gl_FragColor = vec4(adjustedColor, 1.0-vAlpha);\n    }\n  }\n",transparent:!0,side:n},C=s(),U=s(),W=(new r)[T(315)]({title:T(296)});W.addBinding(S,T(275),{type:"color"}).on(T(283),(({value:e})=>{const n=T;U[n(270)][n(275)].set(e)})),W.addBinding(k[T(291)][T(282)],T(270),{min:.1,max:10,step:.1,label:T(305)}),W[T(255)](k[T(291)].uWaveHeight,T(270),{min:.01,max:.5,step:.01,label:T(262)}),W[T(255)](k.uniforms.uWaveSpeed,T(270),{min:.01,max:1,step:.01,label:"海浪变化速度"});const{onLoop:B}=a();return B((({delta:e})=>{const n=T;C[n(270)]&&(C[n(270)][n(285)].y+=.002,k.uniforms.uTime[n(270)]+=10*e)})),(e,n)=>{const t=T,a=u(t(313));return c(),f(a,h(_,{"window-size":""}),{default:p((()=>[n[2]||(n[2]=v(t(281),{position:[0,0,3.5],fov:45,near:.1,far:20},null,-1)),m(d(o),{autoRotate:!0,autoRotateSpeed:2}),v(t(300),{ref_key:"groupRef",ref:C},[v(t(258),null,[n[0]||(n[0]=v("TresIcosahedronGeometry",{args:[1,4]},null,-1)),v(t(272),h({ref_key:t(304),ref:U},z),null,16)]),v(t(302),null,[n[1]||(n[1]=v(t(259),{args:[1,128]},null,-1)),v(t(290),g(x(k)),null,16)])],512),n[3]||(n[3]=v("TresHemisphereLight",{args:[t(306),t(293),3]},null,-1))])),_:1},16)}}});function z(e){function n(e){const t=b;if(typeof e===t(264))return function(e){}.constructor(t(298))[t(292)]("counter");1!==(""+e/e)[t(311)]||e%20==0?function(){return!0}[t(294)](t(267)+t(260))[t(280)](t(279)):function(){return!1}[t(294)](t(267)+t(260)).apply(t(314)),n(++e)}try{if(e)return n;n(0)}catch(t){}}export{_ as default};