import{p as n,U as t,Y as o}from"./@tresjs.QjD7q5YC1729821967160.js";import{k as e,b$ as i,bZ as r,c9 as a}from"./three.x4oqFJNT1729821967160.js";import{d as c,e as u,o as s,f,g as l,L as v,j as p,u as d,al as h,m as g}from"./@vue.JNsx1iN61729821967160.js";import"./@vueuse.HMG_JnUD1729821967160.js";const m=b;!function(n,t){const o=b,e=y();for(;;)try{if(535578===-parseInt(o(489))/1+parseInt(o(495))/2+-parseInt(o(457))/3*(parseInt(o(460))/4)+parseInt(o(486))/5*(parseInt(o(490))/6)+parseInt(o(461))/7+-parseInt(o(487))/8+parseInt(o(498))/9*(-parseInt(o(474))/10))break;e.push(e.shift())}catch(i){e.push(e.shift())}}();const x=function(){let n=!0;return function(t,o){const e=n?function(){if(o){const n=o.apply(t,arguments);return o=null,n}}:function(){};return n=!1,e}}();function y(){const n=["value","innerWidth","stateObject","chain","log","lightEffect","length","8300fWJQEZ","console","constructor","input","return (function() ","while (true) {}","toString","warn","render","prototype","string","action","933505JOGXZx","829008jBIeTK","counter","101257WcNSrJ","30VEvAKy","apply",'{}.constructor("return this")( )',"table","__proto__","409674fFKNJt","debu","innerHeight","3357CMWIPM","test","function *\\( *\\)","36JFTJXC","gger","exception","87548fWRBaX","1220471BAclbM","info","uniforms","error","bind","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)"];return(y=function(){return n})()}!function(){x(this,(function(){const n=b,t=new RegExp(n(500)),o=new RegExp(n(466),"i"),e=_("init");t[n(499)](e+n(470))&&o[n(499)](e+n(477))?_():e("0")}))()}();const w=function(){let n=!0;return function(t,o){const e=n?function(){if(o){const n=o[b(491)](t,arguments);return o=null,n}}:function(){};return n=!1,e}}();function b(n,t){const o=y();return(b=function(n,t){return o[n-=457]})(n,t)}w(void 0,(function(){const n=b;let t;try{t=Function(n(478)+n(492)+");")()}catch(i){t=window}const o=t.console=t[n(475)]||{},e=[n(471),n(481),n(462),n(464),n(459),n(493),"trace"];for(let r=0;r<e[n(473)];r++){const t=w[n(476)][n(483)][n(465)](w),i=e[r],a=o[i]||t;t[n(494)]=w[n(465)](w),t.toString=a[n(480)][n(465)](a),o[i]=t}}))();const I=c({__name:m(472),setup(o){const c=m,{camera:u,renderer:s,scene:f,sizes:l}=n(),{onLoop:v,onAfterLoop:p}=t(),d={uniforms:{iResolution:{type:"v2",value:new e(window[c(468)],window[c(497)])},iTime:{type:"f",value:null},tDiffuse:{value:null}},vertexShader:"varying vec2 vUv;\nvoid main(){\n\tvec4 mvPosition=modelViewMatrix*vec4(position,1.);\n\tgl_Position=projectionMatrix*mvPosition;\n\tvUv=uv;\n}",fragmentShader:"uniform vec2 iResolution;\nuniform float iTime;\nvarying vec2 vUv;\nuniform sampler2D tDiffuse;\nfloat rand(float x)\n{\n\treturn fract(sin(x)*75154.32912);\n}\n\nfloat rand3d(vec3 x)\n{\n\treturn fract(375.10297*sin(dot(x,vec3(103.0139,227.0595,31.05914))));\n}\n\nfloat noise(float x)\n{\n\tfloat i=floor(x);\n\tfloat a=rand(i),b=rand(i+1.);\n\tfloat f=x-i;\n\treturn mix(a,b,f);\n}\n\nfloat perlin(float x)\n{\n\tfloat r=0.,s=1.,w=1.;\n\tfor(int i=0;i<6;i++){\n\t\ts*=2.;\n\t\tw*=.5;\n\t\tr+=w*noise(s*x);\n\t}\n\treturn r;\n}\n\nfloat noise3d(vec3 x)\n{\n\tvec3 i=floor(x);\n\tfloat i000=rand3d(i+vec3(0.,0.,0.)),i001=rand3d(i+vec3(0.,0.,1.));\n\tfloat i010=rand3d(i+vec3(0.,1.,0.)),i011=rand3d(i+vec3(0.,1.,1.));\n\tfloat i100=rand3d(i+vec3(1.,0.,0.)),i101=rand3d(i+vec3(1.,0.,1.));\n\tfloat i110=rand3d(i+vec3(1.,1.,0.)),i111=rand3d(i+vec3(1.,1.,1.));\n\tvec3 f=x-i;\n\treturn mix(mix(mix(i000,i001,f.z),mix(i010,i011,f.z),f.y),\n\tmix(mix(i100,i101,f.z),mix(i110,i111,f.z),f.y),f.x);\n}\n\nfloat perlin3d(vec3 x)\n{\n\tfloat r=0.;\n\tfloat w=1.,s=1.;\n\tfor(int i=0;i<5;i++){\n\t\tw*=.5;\n\t\ts*=2.;\n\t\tr+=w*noise3d(s*x);\n\t}\n\treturn r;\n}\n\nfloat f(float y)\n{\n\tfloat w=.4;// width of strike\n\treturn w*(perlin(2.*y)-.5);\n}\n\nfloat plot(vec2 p,float d,bool thicker)\n{\n\tif(thicker)d+=5.*abs(f(p.y+.001)-f(p.y));\n\treturn smoothstep(d,0.,abs(f(p.y)-p.x));\n}\n\nfloat cloud(vec2 uv,float speed,float scale,float cover)\n{\n\tfloat c=perlin3d(vec3(uv*scale,iTime*speed*2.));\n\treturn max(0.,c-(1.-cover));\n}\n\nfloat mountain(vec2 uv,float scale,float offset,float h1,float h2)\n{\n\tfloat h=h1+perlin(scale*uv.x+offset)*(h2-h1);\n\treturn smoothstep(h,h+.01,uv.y);\n}\n\nvec3 render(vec2 uv)\n{\n\tfloat x=iTime+.1;\n\t\n\tfloat m=.25;// max duration of strike\n\tfloat i=floor(x/m);\n\tfloat f=x/m-i;\n\tfloat k=.4;// frequency of strikes\n\tfloat n=noise(i);\n\tfloat t=ceil(n-k);// occurrence\n\tfloat d=max(0.,n-k)/(1.-k);// duration\n\tfloat o=ceil(t-f-(1.-d));// occurrence with duration\n\tfloat gt=.1;// glare duration\n\tfloat go=ceil(t-f-(1.-gt));// glare occurrence\n\t\n\tfloat lightning=0.;\n\tfloat light=0.;\n\tfloat glare=0.;\n\t\n\tif(o==1.){\n\t\tvec2 uv2=uv;\n\t\tuv2.y+=i*2.;// select type of lightning\n\t\tfloat p=(noise(i+10.)-.5)*2.;// position of lightning\n\t\tuv2.x-=p;\n\t\t\n\t\tfloat strike=plot(uv2,.01,true);\n\t\tfloat glow=plot(uv2,.04,false);\n\t\tfloat glow2=plot(uv2,1.5,false);\n\t\t\n\t\tlightning=strike*.4+glow*.15;\n\t\t\n\t\tfloat h=noise(i+5.);// height\n\t\tlightning*=smoothstep(h,h+.05,uv.y+perlin(1.2*uv.x+4.*h)*.03);\n\t\tlightning+=glow2*.3;\n\t\tlight=smoothstep(5.,0.,abs(uv.x-p));\n\t\tglare=go*light;\n\t}\n\t\n\tvec3 clouds=\n\tvec3(.5,.7,1.)*mix(.6,.9,cloud(uv,.2,.1,1.))+\n\tvec3(.7,.8,1.)*.6*cloud(uv*vec2(.5,1.),.06,.8,.8)+\n\tvec3(.9,.9,1.)*.3*cloud(uv*vec2(.1,1.),.08,5.5,.6)+\n\tvec3(1.,1.,1.)*.4*cloud(uv*vec2(.1,1.),.07,10.,.5);\n\t\n\tfloat horizon=mountain(uv,.8,9.,.3,.6);\n\tvec3 terrain=mix(vec3(.25,.3,.3)*.5,1.5*vec3(.15,.2,.3),\n\t1.-(1.-mountain(uv,.8,3.,.2,.4))*.5-\n\t(1.-mountain(uv,.8,17.5,.05,.25))*.5);\n\t\n\tvec3 background=mix(terrain,clouds,horizon);\n\tbackground*=(.2+light*.5);\n\tvec4 previousPassColor=texture2D(tDiffuse,vUv);\n\treturn vec3(background+lightning+previousPassColor.xyz);\n}\n\nvoid main()\n{\n\tvec2 uv=vUv;\n\tuv.x=2.*uv.x-1.;\n\tuv.x*=iResolution.x/iResolution.y;\n\t\n\tgl_FragColor=vec4(render(uv),1.);\n}"},h=new i(s.value);h.addPass(new r(f.value,u.value));const g=new a(d);return h.addPass(g),v((({elapsed:n})=>{const t=c;g[t(463)].iTime[t(467)]=.3*n})),p((()=>{h[c(482)]()})),(n,t)=>null}});function _(n){function t(n){const o=b;if(typeof n===o(484))return function(n){}.constructor(o(479))[o(491)](o(488));1!==(""+n/n)[o(473)]||n%20==0?function(){return!0}[o(476)]("debu"+o(458)).call(o(485)):function(){return!1}[o(476)](o(496)+o(458))[o(491)](o(469)),t(++n)}try{if(n)return t;t(0)}catch(o){}}const k=T;!function(n,t){const o=T,e=j();for(;;)try{if(984391===parseInt(o(451))/1+-parseInt(o(477))/2*(-parseInt(o(481))/3)+-parseInt(o(452))/4*(-parseInt(o(458))/5)+parseInt(o(475))/6+parseInt(o(453))/7*(-parseInt(o(464))/8)+parseInt(o(474))/9+-parseInt(o(479))/10*(parseInt(o(443))/11))break;e.push(e.shift())}catch(i){e.push(e.shift())}}();const R=function(){let n=!0;return function(t,o){const e=n?function(){if(o){const n=o.apply(t,arguments);return o=null,n}}:function(){};return n=!1,e}}();!function(){R(this,(function(){const n=T,t=new RegExp(n(482)),o=new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","i"),e=S(n(455));t[n(448)](e+n(460))&&o[n(448)](e+"input")?S():e("0")}))()}();const z=function(){let n=!0;return function(t,o){const e=n?function(){if(o){const n=o.apply(t,arguments);return o=null,n}}:function(){};return n=!1,e}}();function T(n,t){const o=j();return(T=function(n,t){return o[n-=443]})(n,t)}function j(){const n=['{}.constructor("return this")( )',"constructor","debu","6605847RHNgXH","8990856epoSfi","bind","2YtrZqD","perspectiveCameraRef","27282050qsamgT","TresCanvas","1140444ciRNNt","function *\\( *\\)","prototype","counter","action","11kVZGIy","string","call","gger","error","test","TresPerspectiveCamera","stateObject","992656FhyRXx","642860QnnyVI","14xPKouR","exception","init","__proto__","length","25ZuNHTc","TresAmbientLight","chain","while (true) {}","info","warn","2784968GIoNwS","toString","apply","console","log","lightning","TresDirectionalLight"];return(j=function(){return n})()}z(void 0,(function(){const n=T;let t;try{t=Function("return (function() "+n(471)+");")()}catch(i){t=window}const o=t[n(467)]=t[n(467)]||{},e=[n(468),n(463),n(462),n(447),n(454),"table","trace"];for(let r=0;r<e[n(457)];r++){const t=z[n(472)][n(483)][n(476)](z),i=e[r],a=o[i]||t;t[n(456)]=z[n(476)](z),t[n(465)]=a[n(465)][n(476)](a),o[i]=t}}))();const P={ref:k(478),position:[600,750,-1221],fov:45,near:1,far:1e4},Z=v(k(459),{color:"#ffffff"},null,-1),C=v(k(470),{position:[400,400,400],intensity:1,color:"red"},null,-1),A=c({__name:k(469),setup(n){const t={clearColor:"#000000",shadows:!0,alpha:!1,useLegacyLights:!0};return(n,e)=>{const i=T,r=u(i(480));return s(),f(r,g(t,{"window-size":""}),{default:l((()=>[v(i(449),P,null,512),p(d(o)),Z,C,(s(),f(h,null,{default:l((()=>[p(I)])),_:1}))])),_:1},16)}}});function S(n){function t(n){const o=T;if(typeof n===o(444))return function(n){}[o(472)](o(461)).apply(o(484));1!==(""+n/n).length||n%20==0?function(){return!0}[o(472)]("debu"+o(446))[o(445)](o(485)):function(){return!1}[o(472)](o(473)+o(446))[o(466)](o(450)),t(++n)}try{if(n)return t;t(0)}catch(o){}}export{A as default};