import{u as t,_ as o,a as n}from"./mergeTres.w_6c7z8-1731053920743.js";import{l as r}from"./utils.fnmbBTyc1731053920743.js";import{e}from"./@tresjs.hJVQLtpa1731053920743.js";import{d as a,r as i,a3 as l,o as c,D as s,F as u,V as f,J as p,m as v,e as d,j as g,g as m,f as h,al as _}from"./@vue.u2cBPEWn1731053920743.js";import{_ as y}from"./@fesjs.jcfJqFb-1731053920743.js";import"./@amap.p7X0bWcq1731053920743.js";import"./pinia.OLC9kXJl1731053920743.js";import"./vue-demi.C4xddsk91731053920743.js";import"./three.eGpwEcxC1731053920743.js";import"./three-mesh-bvh.TTgO3_lh1731053920743.js";import"./@vueuse.weJ7f3dz1731053920743.js";import"./vue-router.VZFAJYMT1731053920743.js";import"./lodash-es.guXTxyfJ1731053920743.js";import"./@qlin.yHhFDldE1731053920743.js";import"./@floating-ui.BPbuo5Gx1731053920743.js";import"./@juggle.7yjBMqoW1731053920743.js";function C(){const t=["position","far","uniforms","1952356kNJZPN","input","2611428HWWagp","apply","6282430SLNLsJ","value","8617869svyEXt","2NjAcyN","counter","atan","normalArray","geometry","gger","action","customCoords","bind","debu","info","stateObject","uvArray","function *\\( *\\)","TresMesh","__proto__","tbgRef","u_near","constructor","normal","buildings","toString","5222808oHJYWj","TresBufferGeometry","warn","push","TresGroup","chain","62744VVlyGb","exp","length","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","mapHandle","faceUv","init","getZoom","637QZhovO","test","near","return (function() ","prototype","trace","cameraState","table",'{}.constructor("return this")( )',"string","buildingModels","7640YweIaw","console","exception","lngLatToCoord","u_far"];return(C=function(){return t})()}const w=S;!function(t,o){const n=S,r=C();for(;;)try{if(637377===-parseInt(n(213))/1+-parseInt(n(247))/2*(parseInt(n(242))/3)+parseInt(n(240))/4+parseInt(n(244))/5+parseInt(n(207))/6+parseInt(n(221))/7*(-parseInt(n(232))/8)+-parseInt(n(246))/9)break;r.push(r.shift())}catch(e){r.push(r.shift())}}();const x=function(){let t=!0;return function(o,n){const r=t?function(){if(n){const t=n.apply(o,arguments);return n=null,t}}:function(){};return t=!1,r}}();!function(){x(this,(function(){const t=S,o=new RegExp(t(198)),n=new RegExp(t(216),"i"),r=z(t(219));o[t(222)](r+t(212))&&n[t(222)](r+t(241))?z():r("0")}))()}();const b=function(){let t=!0;return function(o,n){const r=t?function(){if(n){const t=n[S(243)](o,arguments);return n=null,t}}:function(){};return t=!1,r}}();b(void 0,(function(){const t=S;let o;try{o=Function(t(224)+t(229)+");")()}catch(e){o=window}const n=o[t(233)]=o[t(233)]||{},r=["log",t(209),t(195),"error",t(234),t(228),t(226)];for(let a=0;a<r[t(215)];a++){const o=b[t(203)][t(225)].bind(b),e=r[a],i=n[e]||o;o[t(200)]=b.bind(b),o[t(206)]=i[t(206)][t(193)](i),n[e]=o}}))();const I=[w(237),w(218),w(204)];function S(t,o){const n=C();return(S=function(t,o){return n[t-=193]})(t,o)}const j=a({__name:w(231),setup(o){const n=t(),a=t=>{const o=S;for(let r=0;r<t[o(215)];r+=3){const e=[t[r],t[r+1]],a=n[o(217)][o(254)][o(235)](e);t[r]=a[0],t[r+1]=a[1],t[r+2]=.2*t[r+2]}},d=i([]),g={uniforms:{u_opacity:{value:1},u_time:{value:.45},u_color:{value:[.02,.15,.5,1]},u_zoom:{value:1},u_brightColor:{value:[1,1,1,1]},u_windowColor:{value:[.07,.07,.03,1]},u_near:{value:1},u_far:{value:1e3}},vertexShader:"precision highp float;\n#define ambientRatio .5\n#define diffuseRatio .4\n#define specularRatio .1\n\nattribute vec2 faceUv;\nuniform vec4 u_color;\nvarying vec2 v_texCoord;\nvarying vec4 v_color;\nvarying float v_lightWeight;\n\nvoid main(){\n\t\n\tmat4 matModelViewProjection=projectionMatrix*modelViewMatrix;\n\t\n\tv_texCoord=faceUv;\n\t\n\tif(normal==vec3(0.,0.,1.)){\n\t\tv_color=u_color;\n\t\tgl_Position=matModelViewProjection*vec4(position,1.);\n\t\treturn;\n\t}\n\t\n\tvec3 worldPos=vec3(vec4(position,1.)*modelMatrix);\n\tvec3 worldNormal=vec3(vec4(normal,1.)*modelMatrix);// N\n\t// //cal light weight  光亮度的权重\n\tvec3 viewDir=normalize(cameraPosition-worldPos);// V\n\t// 光照的方向， 前上方    Ild = k*I*(N·L)\n\tvec3 lightDir=normalize(vec3(0.,-10.,1.));// L\n\tvec3 halfDir=normalize(viewDir+lightDir);\n\t// //lambert\n\tfloat lambert=dot(worldNormal,lightDir);\n\t//specular  //反射\n\tfloat specular=pow(max(0.,dot(worldNormal,halfDir)),32.);\n\t//sum to light weight  （lambert + 环境光）  Idiff = Iad + Ild = k*Ia + k*Il*（N·L）\n\tfloat lightWeight=ambientRatio+diffuseRatio*lambert+specularRatio*specular;\n\tv_texCoord=faceUv;\n\tv_lightWeight=lightWeight;\n\t\n\t// 根据光照方向，调整光线明暗\n\t\n\t// v_lightWeight =  pow( 0.0 + 1.0 * abs(dot(worldNormal, worldPos)), 2.0);\n\t\n\tv_color=vec4(u_color.rgb*v_lightWeight,u_color.w);\n\t\n\tgl_Position=matModelViewProjection*vec4(position,1.);\n}",fragmentShader:"precision highp float;\nuniform float u_opacity;\nuniform vec4 u_baseColor;\nuniform vec4 u_color;\nuniform vec4 u_brightColor;\nuniform vec4 u_windowColor;\n\nuniform float u_zoom;\nuniform float u_time;\nuniform float u_near;\nuniform float u_far;\nvarying vec2 v_texCoord;\nvarying vec4 v_color;\nvarying float v_lightWeight;\n\nvec3 getWindowColor(float n,float hot,vec3 brightColor,vec3 darkColor){\n\tfloat s=step(hot,n);\n\tvec3 color=mix(brightColor,vec3(1.,1.,1.),n);\n\treturn mix(darkColor,color,s);\n}\n\nfloat random(vec2 st){\n\treturn fract(sin(dot(st.xy,vec2(12.9898,78.233)))*43758.5453123);\n}\n\nfloat LinearizeDepth()\n{\n\tfloat z=gl_FragCoord.z*2.-1.;\n\treturn(2.*u_near*u_far)/(u_far+u_near-z*(u_far-u_near));\n}\n\nvec3 fog(vec3 color,vec3 fogColor,float depth){\n\tfloat fogFactor=clamp(depth,0.,1.);\n\tvec3 output_color=mix(fogColor,color,fogFactor);\n\treturn output_color;\n}\n\nfloat sdRect(vec2 p,vec2 sz){\n\tvec2 d=abs(p)-sz;\n\tfloat outside=length(max(d,0.));\n\tfloat inside=min(max(d.x,d.y),0.);\n\treturn outside+inside;\n}\n\nvoid main(){\n\tif(v_color.w==0.){\n\t\tdiscard;\n\t\treturn;\n\t}\n\tvec3 baseColor=u_color.xyz;\n\tvec3 brightColor=u_brightColor.xyz;\n\tvec3 windowColor=u_windowColor.xyz;\n\tfloat targetColId=5.;\n\tfloat depth=1.-LinearizeDepth()/u_far*u_zoom;// 深度，调节明暗，远的颜色暗，近的颜色亮\n\tvec3 fogColor=vec3(23./255.,31./255.,51./255.);\n\t\n\tif(v_texCoord.x<0.){//顶部颜色\n\t\tvec3 foggedColor=fog(baseColor.xyz+vec3(.12*.9,.2*.9,.3*.9),fogColor,depth);\n\t\tgl_FragColor=vec4(foggedColor,v_color.w*u_opacity);\n\t}else{// 侧面颜色\n\t\t\n\t\tif(u_zoom<14.){\n\t\t\tgl_FragColor=v_color;\n\t\t\treturn;\n\t\t}\n\t\t\n\t\tif(v_texCoord.x<.01||v_texCoord.x>.99||v_texCoord.y<.01){\n\t\t\tgl_FragColor=vec4(1.,.7,.25,.5);\n\t\t\treturn;\n\t\t}\n\t\t\n\t\tvec2 st=v_texCoord;\n\t\tvec2 UvScale=v_texCoord;\n\t\tvec2 tStep=vec2(.05,.125);\n\t\tvec2 tStart=vec2(tStep.x*.25,tStep.y*.25);\n\t\tvec2 tEnd=vec2(tStep.x*.75,tStep.y*.75);\n\t\t\n\t\tfloat u=mod(UvScale.x,tStep.x);\n\t\tfloat v=mod(UvScale.y,tStep.y);\n\t\tfloat ux=floor(UvScale.x/tStep.x);\n\t\tfloat uy=floor(UvScale.y/tStep.y);\n\t\tfloat n=random(vec2(ux,uy));\n\t\tfloat lightP=u_time;\n\t\tfloat head=1.-step(.005,st.y);\n\t\t/*step3*/\n\t\t// 将窗户颜色和墙面颜色区别开来\n\t\tfloat sU=step(tStart.x,u)-step(tEnd.x,u);\n\t\tfloat sV=step(tStart.y,v)-step(tEnd.y,v);\n\t\tvec2 windowSize=vec2(abs(tEnd.x-tStart.x),abs(tEnd.y-tStart.y));\n\t\tfloat dist=sdRect(vec2(u,v),windowSize);\n\t\tfloat s=sU*sV;\n\t\t\n\t\tfloat curColId=ux;// floor(UvScale.x / tStep.x);\n\t\tfloat sCol=step(targetColId-.2,curColId)-step(targetColId+.2,curColId);\n\t\t\n\t\tfloat mLightP=mod(lightP,2.);\n\t\tfloat sRow=step(mLightP-.2,st.y)-step(mLightP,st.y);\n\t\tif(ux==targetColId){\n\t\t\tn=0.;\n\t\t}\n\t\t// float hot = min(1.0, abs (sin(u_time/6.0) ) );\n\t\t// float hot = smoothstep(1.0,0.0,timeP);\n\t\t//hot = clamp(hot,0.2,0.8);\n\t\tvec3 color=mix(baseColor,getWindowColor(n,u_time,brightColor,windowColor),s);\n\t\t\n\t\tfloat sFinal=s*sCol*sRow;\n\t\tcolor+=mix(baseColor,brightColor,sFinal*n);\n\t\t\n\t\tif(head==1.){// 顶部亮线\n\t\t\tcolor=brightColor;\n\t\t}\n\t\tcolor=color*v_lightWeight;\n\t\t\n\t\tvec3 foggedColor=fog(color,fogColor,depth);\n\t\t\n\t\tgl_FragColor=vec4(foggedColor,1.);\n\t}\n\t\n}"};l((()=>{n[S(227)]&&(async()=>{const t=S,o=await r("https://opensource-1314935952.cos.ap-nanjing.myqcloud.com/json/AMapGIS/latlngbuildings.geojson",t(205));for(let n=0;n<o[t(215)];n++){const r=o[n];a(r[t(251)]);const e=new Float32Array(r[t(251)]),i=new Float32Array(r[t(218)]),l=new Float32Array(r.geometry.length);d[t(210)]({positionArray:e,uvArray:i,normalArray:l})}})()}));const{onLoop:m}=e();return m((()=>{const t=S;n[t(227)]&&(g[t(239)].u_zoom.value=n.mapHandle[t(220)](),g.uniforms[t(202)][t(245)]=n[t(227)][t(223)],g.uniforms[t(236)].value=n[t(227)][t(238)])})),(t,o)=>{const n=S;return c(),s(n(211),null,[(c(!0),s(u,null,f(d,((t,o)=>{const r=n;return c(),s(r(199),{key:""+o},[p(r(208),{ref_for:!0,ref:r(201),position:[t.positionArray,3],faceUv:[t[r(197)],2],normal:[t[r(250)],3]},null,8,I),p("TresShaderMaterial",v({ref_for:!0},g),null,16)])})),128))])}}});function z(t){function o(t){const n=S;if(typeof t===n(230))return function(t){}[n(203)]("while (true) {}")[n(243)](n(248));1!==(""+t/t)[n(215)]||t%20==0?function(){return!0}[n(203)](n(194)+n(252)).call(n(253)):function(){return!1}.constructor(n(194)+"gger")[n(243)](n(196)),o(++t)}try{if(t)return o;o(0)}catch(n){}}!function(t,o){const n=A,r=F();for(;;)try{if(754704===parseInt(n(450))/1+parseInt(n(442))/2*(-parseInt(n(457))/3)+-parseInt(n(439))/4*(parseInt(n(467))/5)+parseInt(n(462))/6*(parseInt(n(443))/7)+parseInt(n(466))/8*(-parseInt(n(461))/9)+parseInt(n(451))/10+-parseInt(n(481))/11*(-parseInt(n(480))/12))break;r.push(r.shift())}catch(e){r.push(r.shift())}}();const P=function(){let t=!0;return function(o,n){const r=t?function(){if(n){const t=n[A(455)](o,arguments);return n=null,t}}:function(){};return t=!1,r}}();!function(){P(this,(function(){const t=A,o=new RegExp("function *\\( *\\)"),n=new RegExp(t(478),"i"),r=W(t(470));o[t(444)](r+t(465))&&n[t(444)](r+t(460))?W():r("0")}))()}();const R=function(){let t=!0;return function(o,n){const r=t?function(){if(n){const t=n.apply(o,arguments);return n=null,t}}:function(){};return t=!1,r}}();function F(){const t=["112HzbFFD","action","TresCanvas","163678dBbrGT","386890EItBfs","test","darkblue","return (function() ","string","table","manual","1044224DWpPlh","2525160ghpota","tresCanvas","while (true) {}",'{}.constructor("return this")( )',"apply","info","51PgNJTX","debu","prototype","input","897705KaWRet","24fIiulV","bind","exception","chain","80vNHCqp","46415YpRWQQ","log","length","init","__proto__","console","TresPerspectiveCamera","counter","toString","TresAmbientLight","gger","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","warn","2244YSmaeb","110913TpfqeJ","constructor"];return(F=function(){return t})()}function A(t,o){const n=F();return(A=function(t,o){return n[t-=439]})(t,o)}R(void 0,(function(){const t=A;let o;try{o=Function(t(446)+t(454)+");")()}catch(e){o=window}const n=o.console=o[t(472)]||{},r=[t(468),t(479),t(456),"error",t(464),t(448),"trace"];for(let a=0;a<r[t(469)];a++){const o=R.constructor[t(459)].bind(R),e=r[a],i=n[e]||o;o[t(471)]=R[t(463)](R),o[t(475)]=i.toString[t(463)](i),n[e]=o}}))();function W(t){function o(t){const n=A;if(typeof t===n(447))return function(t){}.constructor(n(453))[n(455)](n(474));1!==(""+t/t)[n(469)]||t%20==0?function(){return!0}[n(482)]("debugger").call(n(440)):function(){return!1}[n(482)](n(458)+n(477)).apply("stateObject"),o(++t)}try{if(t)return o;o(0)}catch(n){}}const N=y(a({__name:"buildings",setup(t){const r=A,e=[121.407867,31.157717],a=i({alpha:!0,antialias:!0,autoClear:!1,renderMode:r(449)});return(t,i)=>{const l=r,f=d(l(441));return c(),s(u,null,[g(o,{center:e,zoom:19,pitch:65.59312320916906,mapStyle:l(445)}),g(f,v({id:l(452),ref:"tcRef"},a),{default:m((()=>[i[0]||(i[0]=p(l(473),{fov:60,near:.1,far:2e3},null,-1)),i[1]||(i[1]=p(l(476),{intensity:.5},null,-1)),g(n,{center:e}),(c(),h(_,null,{default:m((()=>[g(j)])),_:1}))])),_:1},16)],64)}}}),[["__scopeId","data-v-f2059998"]]);export{N as default};