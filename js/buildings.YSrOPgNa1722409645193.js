import{u as t,_ as n,a as o}from"./mergeTres.F5_cAOPH1722409645193.js";import{l as r}from"./utils.qo3aX1Gv1722409645193.js";import{$ as e}from"./@tresjs.qmCJ68Vp1722409645193.js";import{d as a,r as i,a1 as l,o as c,D as s,F as u,V as f,J as p,m as v,e as d,j as g,g as m,f as h,al as _,am as C,an as y}from"./@vue.9bHx4gg21722409645193.js";import{_ as w}from"./@fesjs.QnrTigdw1722409645193.js";import"./@amap.VDWlHANn1722409645193.js";import"./pinia.QNLxZzKW1722409645193.js";import"./three.6E5muTWJ1722409645193.js";import"./three-mesh-bvh.7hCYy4D71722409645193.js";import"./tweakpane.yHWGBmom1722409645193.js";import"./@vueuse.NFOCyQQL1722409645193.js";import"./vue-router.14za1TD_1722409645193.js";import"./lodash-es.nFpJXAf-1722409645193.js";import"./@qlin.yHhFDldE1722409645193.js";import"./@floating-ui.BPbuo5Gx1722409645193.js";import"./@juggle.7yjBMqoW1722409645193.js";const x=j;!function(t,n){const o=j,r=z();for(;;)try{if(648148===-parseInt(o(493))/1+-parseInt(o(486))/2+parseInt(o(465))/3+parseInt(o(470))/4*(-parseInt(o(447))/5)+-parseInt(o(499))/6*(parseInt(o(450))/7)+parseInt(o(466))/8+parseInt(o(442))/9)break;r.push(r.shift())}catch(e){r.push(r.shift())}}();const b=function(){let t=!0;return function(n,o){const r=t?function(){if(o){const t=o.apply(n,arguments);return o=null,t}}:function(){};return t=!1,r}}();!function(){b(this,(function(){const t=j,n=new RegExp(t(444)),o=new RegExp(t(437),"i"),r=R(t(461));n[t(446)](r+t(484))&&o[t(446)](r+t(485))?R():r("0")}))()}();const I=function(){let t=!0;return function(n,o){const r=t?function(){if(o){const t=o[j(448)](n,arguments);return o=null,t}}:function(){};return t=!1,r}}();I(void 0,(function(){const t=j,n=function(){const t=j;let n;try{n=Function("return (function() "+t(473)+");")()}catch(o){n=window}return n}(),o=n[t(490)]=n[t(490)]||{},r=[t(481),t(463),t(472),t(492),"exception","table","trace"];for(let e=0;e<r[t(498)];e++){const n=I[t(452)][t(449)][t(464)](I),a=r[e],i=o[a]||n;n[t(479)]=I[t(464)](I),n[t(439)]=i[t(439)][t(464)](i),o[a]=n}}))();const S=[x(441),x(480),x(491)];function j(t,n){const o=z();return(j=function(t,n){return o[t-=437]})(t,n)}function z(){const t=["4894032IZebmH","exp","lngLatToCoord","cameraState","4ouUggX","mapHandle","info",'{}.constructor("return this")( )',"TresGroup","TresBufferGeometry","string","while (true) {}","call","__proto__","faceUv","log","u_far","getZoom","chain","input","503670FNprEK","debu","customCoords","value","console","normal","error","314946JwBTPy","uvArray","atan","push","https://opensource-1314935952.cos.ap-nanjing.myqcloud.com/json/AMapGIS/latlngbuildings.geojson","length","11142sqZwJH","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","positionArray","toString","u_zoom","position","14803992VhPrTn","buildings","function *\\( *\\)","gger","test","1867610BZOOZC","apply","prototype","4228LnCtVP","uniforms","constructor","TresMesh","TresShaderMaterial","geometry","stateObject","action","u_near","buildingModels","tbgRef","init","near","warn","bind","1360311uzrTEr"];return(z=function(){return t})()}const P=a({__name:x(459),setup(n){const o=t(),a=t=>{const n=j;for(let r=0;r<t[n(498)];r+=3){const e=[t[r],t[r+1]],a=o[n(471)][n(488)][n(468)](e);t[r]=a[0],t[r+1]=a[1],t[r+2]=.2*t[r+2]}},d=i([]),g={uniforms:{u_opacity:{value:1},u_time:{value:.45},u_color:{value:[.02,.15,.5,1]},u_zoom:{value:1},u_brightColor:{value:[1,1,1,1]},u_windowColor:{value:[.07,.07,.03,1]},u_near:{value:1},u_far:{value:1e3}},vertexShader:"precision highp float;\n#define ambientRatio .5\n#define diffuseRatio .4\n#define specularRatio .1\n\nattribute vec2 faceUv;\nuniform vec4 u_color;\nvarying vec2 v_texCoord;\nvarying vec4 v_color;\nvarying float v_lightWeight;\n\nvoid main(){\n\t\n\tmat4 matModelViewProjection=projectionMatrix*modelViewMatrix;\n\t\n\tv_texCoord=faceUv;\n\t\n\tif(normal==vec3(0.,0.,1.)){\n\t\tv_color=u_color;\n\t\tgl_Position=matModelViewProjection*vec4(position,1.);\n\t\treturn;\n\t}\n\t\n\tvec3 worldPos=vec3(vec4(position,1.)*modelMatrix);\n\tvec3 worldNormal=vec3(vec4(normal,1.)*modelMatrix);// N\n\t// //cal light weight  光亮度的权重\n\tvec3 viewDir=normalize(cameraPosition-worldPos);// V\n\t// 光照的方向， 前上方    Ild = k*I*(N·L)\n\tvec3 lightDir=normalize(vec3(0.,-10.,1.));// L\n\tvec3 halfDir=normalize(viewDir+lightDir);\n\t// //lambert\n\tfloat lambert=dot(worldNormal,lightDir);\n\t//specular  //反射\n\tfloat specular=pow(max(0.,dot(worldNormal,halfDir)),32.);\n\t//sum to light weight  （lambert + 环境光）  Idiff = Iad + Ild = k*Ia + k*Il*（N·L）\n\tfloat lightWeight=ambientRatio+diffuseRatio*lambert+specularRatio*specular;\n\tv_texCoord=faceUv;\n\tv_lightWeight=lightWeight;\n\t\n\t// 根据光照方向，调整光线明暗\n\t\n\t// v_lightWeight =  pow( 0.0 + 1.0 * abs(dot(worldNormal, worldPos)), 2.0);\n\t\n\tv_color=vec4(u_color.rgb*v_lightWeight,u_color.w);\n\t\n\tgl_Position=matModelViewProjection*vec4(position,1.);\n}",fragmentShader:"precision highp float;\nuniform float u_opacity;\nuniform vec4 u_baseColor;\nuniform vec4 u_color;\nuniform vec4 u_brightColor;\nuniform vec4 u_windowColor;\n\nuniform float u_zoom;\nuniform float u_time;\nuniform float u_near;\nuniform float u_far;\nvarying vec2 v_texCoord;\nvarying vec4 v_color;\nvarying float v_lightWeight;\n\nvec3 getWindowColor(float n,float hot,vec3 brightColor,vec3 darkColor){\n\tfloat s=step(hot,n);\n\tvec3 color=mix(brightColor,vec3(1.,1.,1.),n);\n\treturn mix(darkColor,color,s);\n}\n\nfloat random(vec2 st){\n\treturn fract(sin(dot(st.xy,vec2(12.9898,78.233)))*43758.5453123);\n}\n\nfloat LinearizeDepth()\n{\n\tfloat z=gl_FragCoord.z*2.-1.;\n\treturn(2.*u_near*u_far)/(u_far+u_near-z*(u_far-u_near));\n}\n\nvec3 fog(vec3 color,vec3 fogColor,float depth){\n\tfloat fogFactor=clamp(depth,0.,1.);\n\tvec3 output_color=mix(fogColor,color,fogFactor);\n\treturn output_color;\n}\n\nfloat sdRect(vec2 p,vec2 sz){\n\tvec2 d=abs(p)-sz;\n\tfloat outside=length(max(d,0.));\n\tfloat inside=min(max(d.x,d.y),0.);\n\treturn outside+inside;\n}\n\nvoid main(){\n\tif(v_color.w==0.){\n\t\tdiscard;\n\t\treturn;\n\t}\n\tvec3 baseColor=u_color.xyz;\n\tvec3 brightColor=u_brightColor.xyz;\n\tvec3 windowColor=u_windowColor.xyz;\n\tfloat targetColId=5.;\n\tfloat depth=1.-LinearizeDepth()/u_far*u_zoom;// 深度，调节明暗，远的颜色暗，近的颜色亮\n\tvec3 fogColor=vec3(23./255.,31./255.,51./255.);\n\t\n\tif(v_texCoord.x<0.){//顶部颜色\n\t\tvec3 foggedColor=fog(baseColor.xyz+vec3(.12*.9,.2*.9,.3*.9),fogColor,depth);\n\t\tgl_FragColor=vec4(foggedColor,v_color.w*u_opacity);\n\t}else{// 侧面颜色\n\t\t\n\t\tif(u_zoom<14.){\n\t\t\tgl_FragColor=v_color;\n\t\t\treturn;\n\t\t}\n\t\t\n\t\tif(v_texCoord.x<.01||v_texCoord.x>.99||v_texCoord.y<.01){\n\t\t\tgl_FragColor=vec4(1.,.7,.25,.5);\n\t\t\treturn;\n\t\t}\n\t\t\n\t\tvec2 st=v_texCoord;\n\t\tvec2 UvScale=v_texCoord;\n\t\tvec2 tStep=vec2(.05,.125);\n\t\tvec2 tStart=vec2(tStep.x*.25,tStep.y*.25);\n\t\tvec2 tEnd=vec2(tStep.x*.75,tStep.y*.75);\n\t\t\n\t\tfloat u=mod(UvScale.x,tStep.x);\n\t\tfloat v=mod(UvScale.y,tStep.y);\n\t\tfloat ux=floor(UvScale.x/tStep.x);\n\t\tfloat uy=floor(UvScale.y/tStep.y);\n\t\tfloat n=random(vec2(ux,uy));\n\t\tfloat lightP=u_time;\n\t\tfloat head=1.-step(.005,st.y);\n\t\t/*step3*/\n\t\t// 将窗户颜色和墙面颜色区别开来\n\t\tfloat sU=step(tStart.x,u)-step(tEnd.x,u);\n\t\tfloat sV=step(tStart.y,v)-step(tEnd.y,v);\n\t\tvec2 windowSize=vec2(abs(tEnd.x-tStart.x),abs(tEnd.y-tStart.y));\n\t\tfloat dist=sdRect(vec2(u,v),windowSize);\n\t\tfloat s=sU*sV;\n\t\t\n\t\tfloat curColId=ux;// floor(UvScale.x / tStep.x);\n\t\tfloat sCol=step(targetColId-.2,curColId)-step(targetColId+.2,curColId);\n\t\t\n\t\tfloat mLightP=mod(lightP,2.);\n\t\tfloat sRow=step(mLightP-.2,st.y)-step(mLightP,st.y);\n\t\tif(ux==targetColId){\n\t\t\tn=0.;\n\t\t}\n\t\t// float hot = min(1.0, abs (sin(u_time/6.0) ) );\n\t\t// float hot = smoothstep(1.0,0.0,timeP);\n\t\t//hot = clamp(hot,0.2,0.8);\n\t\tvec3 color=mix(baseColor,getWindowColor(n,u_time,brightColor,windowColor),s);\n\t\t\n\t\tfloat sFinal=s*sCol*sRow;\n\t\tcolor+=mix(baseColor,brightColor,sFinal*n);\n\t\t\n\t\tif(head==1.){// 顶部亮线\n\t\t\tcolor=brightColor;\n\t\t}\n\t\tcolor=color*v_lightWeight;\n\t\t\n\t\tvec3 foggedColor=fog(color,fogColor,depth);\n\t\t\n\t\tgl_FragColor=vec4(foggedColor,1.);\n\t}\n\t\n}"};l((()=>{o[j(469)]&&(async()=>{const t=j,n=await r(t(497),t(443));for(let o=0;o<n[t(498)];o++){const r=n[o];a(r[t(455)]);const e=new Float32Array(r[t(455)]),i=new Float32Array(r[t(480)]),l=new Float32Array(r.geometry[t(498)]);d[t(496)]({positionArray:e,uvArray:i,normalArray:l})}})()}));const{onLoop:m}=e();return m((()=>{const t=j;o[t(469)]&&(g.uniforms[t(440)][t(489)]=o.mapHandle[t(483)](),g[t(451)][t(458)][t(489)]=o.cameraState[t(462)],g[t(451)][t(482)][t(489)]=o[t(469)].far)})),(t,n)=>{const o=j;return c(),s(o(474),null,[(c(!0),s(u,null,f(d,((t,n)=>{const r=o;return c(),s(r(453),{key:""+n},[p(r(475),{ref_for:!0,ref:r(460),position:[t[r(438)],3],faceUv:[t[r(494)],2],normal:[t.normalArray,3]},null,8,S),p(r(454),v({ref_for:!0},g),null,16)])})),128))])}}});function R(t){function n(t){const o=j;if(typeof t===o(476))return function(t){}[o(452)](o(477))[o(448)]("counter");1!==(""+t/t)[o(498)]||t%20==0?function(){return!0}[o(452)]("debu"+o(445))[o(478)](o(457)):function(){return!1}.constructor(o(487)+o(445))[o(448)](o(456)),n(++t)}try{if(t)return n;n(0)}catch(o){}}function A(t,n){const o=U();return(A=function(t,n){return o[t-=136]})(t,n)}const F=A;function U(){const t=["buildings","console","11GmwNvM","tresCanvas","__proto__","5326KARQVI","12891112NOVGlA","apply","trace","return (function() ","1298175vEYatc","while (true) {}","toString","data-v-40288e17","table","call","init","input","13391712dfPqkD","counter","prototype","gger","stateObject","debu","6VfgXHe","tcRef","error","warn","action","812511WniLep","test","5037798tVQRBu","constructor","bind","TresPerspectiveCamera","length","function *\\( *\\)","exception","8jEdNUU",'{}.constructor("return this")( )',"log","30888730VbnLhT","info"];return(U=function(){return t})()}!function(t,n){const o=A,r=U();for(;;)try{if(868392===-parseInt(o(149))/1*(parseInt(o(152))/2)+-parseInt(o(178))/3+-parseInt(o(142))/4*(parseInt(o(157))/5)+parseInt(o(171))/6*(-parseInt(o(176))/7)+parseInt(o(153))/8+-parseInt(o(165))/9+parseInt(o(145))/10)break;r.push(r.shift())}catch(e){r.push(r.shift())}}();const V=function(){let t=!0;return function(n,o){const r=t?function(){if(o){const t=o[A(154)](n,arguments);return o=null,t}}:function(){};return t=!1,r}}();!function(){V(this,(function(){const t=A,n=new RegExp(t(140)),o=new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","i"),r=M(t(163));n[t(177)](r+"chain")&&o[t(177)](r+t(164))?M():r("0")}))()}();const L=function(){let t=!0;return function(n,o){const r=t?function(){if(o){const t=o[A(154)](n,arguments);return o=null,t}}:function(){};return t=!1,r}}();L(void 0,(function(){const t=A,n=function(){const t=A;let n;try{n=Function(t(156)+t(143)+");")()}catch(o){n=window}return n}(),o=n[t(148)]=n[t(148)]||{},r=[t(144),t(174),t(146),t(173),t(141),t(161),t(155)];for(let e=0;e<r[t(139)];e++){const n=L[t(136)][t(167)][t(137)](L),a=r[e],i=o[a]||n;n[t(151)]=L[t(137)](L),n[t(159)]=i.toString[t(137)](i),o[a]=n}}))();const E=t=>(C(F(160)),t=t(),y(),t),T=E((()=>p(F(138),{fov:60,near:.1,far:2e3},null,-1))),k=E((()=>p("TresAmbientLight",{intensity:.5},null,-1)));function M(t){function n(t){const o=A;if("string"==typeof t)return function(t){}[o(136)](o(158))[o(154)](o(166));1!==(""+t/t).length||t%20==0?function(){return!0}[o(136)]("debu"+o(168))[o(162)](o(175)):function(){return!1}[o(136)](o(170)+o(168))[o(154)](o(169)),n(++t)}try{if(t)return n;n(0)}catch(o){}}const N=w(a({__name:F(147),setup(t){const r=[121.407867,31.157717],e=i({alpha:!0,antialias:!0,autoClear:!1,disableRender:!0});return(t,a)=>{const i=A,l=d("TresCanvas");return c(),s(u,null,[g(n,{center:r,zoom:19,pitch:65.59312320916906,mapStyle:"darkblue"}),g(l,v({id:i(150),ref:i(172)},e),{default:m((()=>[T,k,g(o,{center:r}),(c(),h(_,null,{default:m((()=>[g(P)])),_:1}))])),_:1},16)],64)}}}),[["__scopeId","data-v-40288e17"]]);export{N as default};