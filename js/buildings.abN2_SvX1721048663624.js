import{u as t,_ as n,a as o}from"./mergeTres.QifG87En1721048663624.js";import{l as e}from"./utils.gFXkBUyz1721048663624.js";import{r}from"./@tresjs.Xiq_TH801721048663624.js";import{d as a,r as i,a2 as l,o as c,D as s,F as u,V as f,J as p,aj as v,ak as d,e as g,j as m,g as h,f as _,al as C,m as y,am as x,an as w}from"./@vue.ApkyOKE71721048663624.js";import{_ as b}from"./@fesjs.vljLn8mq1721048663624.js";import"./@amap.IXBtourJ1721048663624.js";import"./pinia.gP9-G6bs1721048663624.js";import"./three.HEgnMaTu1721048663624.js";import"./three-mesh-bvh.wAcaRjKH1721048663624.js";import"./@vueuse.2IVIyoVR1721048663624.js";import"./tweakpane.yHWGBmom1721048663624.js";import"./vue-router.v6lvLH0N1721048663624.js";import"./lodash-es.nFpJXAf-1721048663624.js";import"./@qlin.yHhFDldE1721048663624.js";import"./@floating-ui.BPbuo5Gx1721048663624.js";import"./@juggle.7yjBMqoW1721048663624.js";const I=S;!function(t,n){const o=S,e=k();for(;;)try{if(131827===-parseInt(o(180))/1+parseInt(o(155))/2*(parseInt(o(167))/3)+parseInt(o(189))/4+-parseInt(o(202))/5+-parseInt(o(179))/6+parseInt(o(197))/7*(-parseInt(o(168))/8)+parseInt(o(208))/9)break;e.push(e.shift())}catch(r){e.push(e.shift())}}();const j=function(){let t=!0;return function(n,o){const e=t?function(){if(o){const t=o[S(161)](n,arguments);return o=null,t}}:function(){};return t=!1,e}}();function S(t,n){const o=k();return(S=function(t,n){return o[t-=154]})(t,n)}!function(){j(this,(function(){const t=S,n=new RegExp(t(176)),o=new RegExp(t(194),"i"),e=L(t(185));n[t(186)](e+t(163))&&o[t(186)](e+t(158))?L():e("0")}))()}();const z=function(){let t=!0;return function(n,o){const e=t?function(){if(o){const t=o[S(161)](n,arguments);return o=null,t}}:function(){};return t=!1,e}}();z(void 0,(function(){const t=S;let n;try{n=Function(t(203)+t(188)+");")()}catch(r){n=window}const o=n[t(154)]=n[t(154)]||{},e=[t(177),t(205),"info",t(157),t(195),t(212),t(164)];for(let a=0;a<e.length;a++){const n=z[t(190)][t(160)][t(178)](z),r=e[a],i=o[r]||n;n[t(192)]=z.bind(z),n[t(182)]=i[t(182)].bind(i),o[r]=n}}))();const R=[I(210),I(193),I(172)];function k(){const t=["value","position","stateObject","table","console","62NvYiKK","buildings","error","input","geometry","prototype","apply","customCoords","chain","trace","TresGroup","cameraState","15495fiJiel","70536OYTKdT","TresBufferGeometry","push","while (true) {}","normal","debu","TresMesh","string","function *\\( *\\)","log","bind","706662kGGLkK","91146ftTSOG","far","toString","u_near","counter","init","test","gger",'{}.constructor("return this")( )',"579508FijlIQ","constructor","tbgRef","__proto__","faceUv","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","exception","call","77lDMYZi","action","mapHandle","u_far","length","629955rxjmQE","return (function() ","lngLatToCoord","warn","uniforms","exp","2328624QxssRk"];return(k=function(){return t})()}const F=a({__name:"buildingModels",setup(n){const o=t(),a=t=>{const n=S;for(let e=0;e<t[n(201)];e+=3){const r=[t[e],t[e+1]],a=o.mapHandle[n(162)].lngLatToCoord(r);t[e]=a[0],t[e+1]=a[1],t[e+2]=.2*t[e+2]}},g=i([]),m={uniforms:{u_opacity:{value:1},u_time:{value:.45},u_color:{value:[.02,.15,.5,1]},u_zoom:{value:1},u_brightColor:{value:[1,1,1,1]},u_windowColor:{value:[.07,.07,.03,1]},u_near:{value:1},u_far:{value:1e3}},vertexShader:"precision highp float;\n#define ambientRatio .5\n#define diffuseRatio .4\n#define specularRatio .1\n\nattribute vec2 faceUv;\nuniform vec4 u_color;\nvarying vec2 v_texCoord;\nvarying vec4 v_color;\nvarying float v_lightWeight;\n\nvoid main(){\n\t\n\tmat4 matModelViewProjection=projectionMatrix*modelViewMatrix;\n\t\n\tv_texCoord=faceUv;\n\t\n\tif(normal==vec3(0.,0.,1.)){\n\t\tv_color=u_color;\n\t\tgl_Position=matModelViewProjection*vec4(position,1.);\n\t\treturn;\n\t}\n\t\n\tvec3 worldPos=vec3(vec4(position,1.)*modelMatrix);\n\tvec3 worldNormal=vec3(vec4(normal,1.)*modelMatrix);// N\n\t// //cal light weight  光亮度的权重\n\tvec3 viewDir=normalize(cameraPosition-worldPos);// V\n\t// 光照的方向， 前上方    Ild = k*I*(N·L)\n\tvec3 lightDir=normalize(vec3(0.,-10.,1.));// L\n\tvec3 halfDir=normalize(viewDir+lightDir);\n\t// //lambert\n\tfloat lambert=dot(worldNormal,lightDir);\n\t//specular  //反射\n\tfloat specular=pow(max(0.,dot(worldNormal,halfDir)),32.);\n\t//sum to light weight  （lambert + 环境光）  Idiff = Iad + Ild = k*Ia + k*Il*（N·L）\n\tfloat lightWeight=ambientRatio+diffuseRatio*lambert+specularRatio*specular;\n\tv_texCoord=faceUv;\n\tv_lightWeight=lightWeight;\n\t\n\t// 根据光照方向，调整光线明暗\n\t\n\t// v_lightWeight =  pow( 0.0 + 1.0 * abs(dot(worldNormal, worldPos)), 2.0);\n\t\n\tv_color=vec4(u_color.rgb*v_lightWeight,u_color.w);\n\t\n\tgl_Position=matModelViewProjection*vec4(position,1.);\n}",fragmentShader:"precision highp float;\nuniform float u_opacity;\nuniform vec4 u_baseColor;\nuniform vec4 u_color;\nuniform vec4 u_brightColor;\nuniform vec4 u_windowColor;\n\nuniform float u_zoom;\nuniform float u_time;\nuniform float u_near;\nuniform float u_far;\nvarying vec2 v_texCoord;\nvarying vec4 v_color;\nvarying float v_lightWeight;\n\nvec3 getWindowColor(float n,float hot,vec3 brightColor,vec3 darkColor){\n\tfloat s=step(hot,n);\n\tvec3 color=mix(brightColor,vec3(1.,1.,1.),n);\n\treturn mix(darkColor,color,s);\n}\n\nfloat random(vec2 st){\n\treturn fract(sin(dot(st.xy,vec2(12.9898,78.233)))*43758.5453123);\n}\n\nfloat LinearizeDepth()\n{\n\tfloat z=gl_FragCoord.z*2.-1.;\n\treturn(2.*u_near*u_far)/(u_far+u_near-z*(u_far-u_near));\n}\n\nvec3 fog(vec3 color,vec3 fogColor,float depth){\n\tfloat fogFactor=clamp(depth,0.,1.);\n\tvec3 output_color=mix(fogColor,color,fogFactor);\n\treturn output_color;\n}\n\nfloat sdRect(vec2 p,vec2 sz){\n\tvec2 d=abs(p)-sz;\n\tfloat outside=length(max(d,0.));\n\tfloat inside=min(max(d.x,d.y),0.);\n\treturn outside+inside;\n}\n\nvoid main(){\n\tif(v_color.w==0.){\n\t\tdiscard;\n\t\treturn;\n\t}\n\tvec3 baseColor=u_color.xyz;\n\tvec3 brightColor=u_brightColor.xyz;\n\tvec3 windowColor=u_windowColor.xyz;\n\tfloat targetColId=5.;\n\tfloat depth=1.-LinearizeDepth()/u_far*u_zoom;// 深度，调节明暗，远的颜色暗，近的颜色亮\n\tvec3 fogColor=vec3(23./255.,31./255.,51./255.);\n\t\n\tif(v_texCoord.x<0.){//顶部颜色\n\t\tvec3 foggedColor=fog(baseColor.xyz+vec3(.12*.9,.2*.9,.3*.9),fogColor,depth);\n\t\tgl_FragColor=vec4(foggedColor,v_color.w*u_opacity);\n\t}else{// 侧面颜色\n\t\t\n\t\tif(u_zoom<14.){\n\t\t\tgl_FragColor=v_color;\n\t\t\treturn;\n\t\t}\n\t\t\n\t\tif(v_texCoord.x<.01||v_texCoord.x>.99||v_texCoord.y<.01){\n\t\t\tgl_FragColor=vec4(1.,.7,.25,.5);\n\t\t\treturn;\n\t\t}\n\t\t\n\t\tvec2 st=v_texCoord;\n\t\tvec2 UvScale=v_texCoord;\n\t\tvec2 tStep=vec2(.05,.125);\n\t\tvec2 tStart=vec2(tStep.x*.25,tStep.y*.25);\n\t\tvec2 tEnd=vec2(tStep.x*.75,tStep.y*.75);\n\t\t\n\t\tfloat u=mod(UvScale.x,tStep.x);\n\t\tfloat v=mod(UvScale.y,tStep.y);\n\t\tfloat ux=floor(UvScale.x/tStep.x);\n\t\tfloat uy=floor(UvScale.y/tStep.y);\n\t\tfloat n=random(vec2(ux,uy));\n\t\tfloat lightP=u_time;\n\t\tfloat head=1.-step(.005,st.y);\n\t\t/*step3*/\n\t\t// 将窗户颜色和墙面颜色区别开来\n\t\tfloat sU=step(tStart.x,u)-step(tEnd.x,u);\n\t\tfloat sV=step(tStart.y,v)-step(tEnd.y,v);\n\t\tvec2 windowSize=vec2(abs(tEnd.x-tStart.x),abs(tEnd.y-tStart.y));\n\t\tfloat dist=sdRect(vec2(u,v),windowSize);\n\t\tfloat s=sU*sV;\n\t\t\n\t\tfloat curColId=ux;// floor(UvScale.x / tStep.x);\n\t\tfloat sCol=step(targetColId-.2,curColId)-step(targetColId+.2,curColId);\n\t\t\n\t\tfloat mLightP=mod(lightP,2.);\n\t\tfloat sRow=step(mLightP-.2,st.y)-step(mLightP,st.y);\n\t\tif(ux==targetColId){\n\t\t\tn=0.;\n\t\t}\n\t\t// float hot = min(1.0, abs (sin(u_time/6.0) ) );\n\t\t// float hot = smoothstep(1.0,0.0,timeP);\n\t\t//hot = clamp(hot,0.2,0.8);\n\t\tvec3 color=mix(baseColor,getWindowColor(n,u_time,brightColor,windowColor),s);\n\t\t\n\t\tfloat sFinal=s*sCol*sRow;\n\t\tcolor+=mix(baseColor,brightColor,sFinal*n);\n\t\t\n\t\tif(head==1.){// 顶部亮线\n\t\t\tcolor=brightColor;\n\t\t}\n\t\tcolor=color*v_lightWeight;\n\t\t\n\t\tvec3 foggedColor=fog(color,fogColor,depth);\n\t\t\n\t\tgl_FragColor=vec4(foggedColor,1.);\n\t}\n\t\n}"};l((()=>{o[S(166)]&&(async()=>{const t=S,n=await e("https://opensource-1314935952.cos.ap-nanjing.myqcloud.com/json/AMapGIS/latlngbuildings.geojson",t(156));for(let o=0;o<n.length;o++){const e=n[o];a(e[t(159)]);const r=new Float32Array(e.geometry),i=new Float32Array(e.faceUv),l=new Float32Array(e[t(159)].length);g[t(170)]({positionArray:r,uvArray:i,normalArray:l})}})()}));const{onLoop:h}=r();return h((()=>{const t=S;o.cameraState&&(m[t(206)].u_zoom[t(209)]=o[t(199)].getZoom(),m[t(206)][t(183)][t(209)]=o[t(166)].near,m[t(206)][t(200)].value=o[t(166)][t(181)])})),(t,n)=>{const o=S;return c(),s(o(165),null,[(c(!0),s(u,null,f(g,((t,n)=>{const e=o;return c(),s(e(174),{key:""+n},[p(e(169),{ref_for:!0,ref:e(191),position:[t.positionArray,3],faceUv:[t.uvArray,2],normal:[t.normalArray,3]},null,8,R),p("TresShaderMaterial",v(d(m)),null,16)])})),128))])}}});function L(t){function n(t){const o=S;if(typeof t===o(175))return function(t){}[o(190)](o(171))[o(161)](o(184));1!==(""+t/t)[o(201)]||t%20==0?function(){return!0}[o(190)](o(173)+o(187))[o(196)](o(198)):function(){return!1}[o(190)](o(173)+"gger")[o(161)](o(211)),n(++t)}try{if(t)return n;n(0)}catch(o){}}const A=P;function P(t,n){const o=U();return(P=function(t,n){return o[t-=301]})(t,n)}!function(t,n){const o=P,e=U();for(;;)try{if(929960===-parseInt(o(304))/1*(-parseInt(o(322))/2)+-parseInt(o(330))/3*(-parseInt(o(312))/4)+-parseInt(o(303))/5+parseInt(o(337))/6*(parseInt(o(331))/7)+parseInt(o(324))/8*(parseInt(o(341))/9)+-parseInt(o(311))/10*(-parseInt(o(339))/11)+-parseInt(o(316))/12)break;e.push(e.shift())}catch(r){e.push(e.shift())}}();const T=function(){let t=!0;return function(n,o){const e=t?function(){if(o){const t=o[P(323)](n,arguments);return o=null,t}}:function(){};return t=!1,e}}();function U(){const t=["data-v-40288e17","while (true) {}","table","console","8626470EDSvaI","4gtMmdE","darkblue","constructor","test",'{}.constructor("return this")( )',"info","string","6960urLiej","20OIIWkB","TresPerspectiveCamera","stateObject","toString","16180716JRvROB","prototype","TresCanvas","counter","tresCanvas","TresAmbientLight","470132qELxrt","apply","9807520hSnBik","error","length","tcRef","call","log","29853dafQRa","28TejYUe","bind","function *\\( *\\)","warn","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","input","1026792odAJFJ","gger","17435LTgbds","buildings","9zXLEjn","debu"];return(U=function(){return t})()}!function(){T(this,(function(){const t=P,n=new RegExp(t(333)),o=new RegExp(t(335),"i"),e=N("init");n[t(307)](e+"chain")&&o[t(307)](e+t(336))?N():e("0")}))()}();const E=function(){let t=!0;return function(n,o){const e=t?function(){if(o){const t=o.apply(n,arguments);return o=null,t}}:function(){};return t=!1,e}}();E(void 0,(function(){const t=P,n=function(){const t=P;let n;try{n=Function("return (function() "+t(308)+");")()}catch(o){n=window}return n}(),o=n[t(302)]=n.console||{},e=[t(329),t(334),t(309),t(325),"exception",t(301),"trace"];for(let r=0;r<e[t(326)];r++){const n=E[t(306)][t(317)][t(332)](E),a=e[r],i=o[a]||n;n.__proto__=E[t(332)](E),n[t(315)]=i[t(315)][t(332)](i),o[a]=n}}))();const M=t=>(x(A(343)),t=t(),w(),t),D=M((()=>p(A(313),{fov:60,near:.1,far:2e3},null,-1))),W=M((()=>p(A(321),{intensity:.5},null,-1)));function N(t){function n(t){const o=P;if(typeof t===o(310))return function(t){}[o(306)](o(344))[o(323)](o(319));1!==(""+t/t)[o(326)]||t%20==0?function(){return!0}[o(306)](o(342)+o(338))[o(328)]("action"):function(){return!1}[o(306)]("debu"+o(338))[o(323)](o(314)),n(++t)}try{if(t)return n;n(0)}catch(o){}}const V=b(a({__name:A(340),setup(t){const e=[121.407867,31.157717],r=i({alpha:!0,antialias:!0,autoClear:!1,disableRender:!0});return(t,a)=>{const i=P,l=g(i(318));return c(),s(u,null,[m(n,{center:e,zoom:19,pitch:65.59312320916906,mapStyle:i(305)}),m(l,y({id:i(320),ref:i(327)},r),{default:h((()=>[D,W,m(o,{center:e}),(c(),_(C,null,{default:h((()=>[m(F)])),_:1}))])),_:1},16)],64)}}}),[["__scopeId","data-v-40288e17"]]);export{V as default};