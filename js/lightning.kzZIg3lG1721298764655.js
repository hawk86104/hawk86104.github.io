import{p as t,$ as n,d as o}from"./@tresjs.iXEJQd7J1721298764655.js";import{j as e,bY as r,bW as i,c5 as c}from"./three.0bBjBDi41721298764655.js";import{d as a,e as u,o as s,f,g as l,J as p,j as v,u as d,al as h,m as g}from"./@vue.Q1VpS3901721298764655.js";import"./tweakpane.yHWGBmom1721298764655.js";import"./@vueuse.hS-CVzal1721298764655.js";const m=w;!function(t,n){const o=w,e=b();for(;;)try{if(186999===parseInt(o(306))/1*(parseInt(o(316))/2)+-parseInt(o(329))/3+-parseInt(o(294))/4*(-parseInt(o(303))/5)+-parseInt(o(312))/6+parseInt(o(319))/7*(parseInt(o(288))/8)+parseInt(o(295))/9*(-parseInt(o(287))/10)+parseInt(o(289))/11*(-parseInt(o(321))/12))break;e.push(e.shift())}catch(r){e.push(e.shift())}}();const x=function(){let t=!0;return function(n,o){const e=t?function(){if(o){const t=o[w(323)](n,arguments);return o=null,t}}:function(){};return t=!1,e}}();function w(t,n){const o=b();return(w=function(t,n){return o[t-=286]})(t,n)}!function(){x(this,(function(){const t=w,n=new RegExp("function *\\( *\\)"),o=new RegExp(t(292),"i"),e=_(t(317));n.test(e+t(297))&&o.test(e+t(299))?_():e("0")}))()}();const y=function(){let t=!0;return function(n,o){const e=t?function(){if(o){const t=o[w(323)](n,arguments);return o=null,t}}:function(){};return t=!1,e}}();function b(){const t=["iTime","exception","action","error","1596444HizJPi","innerHeight","while (true) {}","prototype","356822KrpLrj","init","bind","112VsgtaP","gger","12iMjRen","debu","apply","innerWidth","addPass","warn","console","return (function() ","420699mLeqSl","length","string","60HOAFDF","122696awMdtU","1201849BFwXKT","__proto__","info","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","log","4SAofbA","107136xYAyQz","toString","chain","call","input","table","uniforms","constructor","1750930JPXcoG","value","stateObject","1Evkbzv","lightEffect"];return(b=function(){return t})()}y(void 0,(function(){const t=w;let n;try{n=Function(t(328)+'{}.constructor("return this")( ));')()}catch(r){n=window}const o=n[t(327)]=n.console||{},e=[t(293),t(326),t(291),t(311),t(309),t(300),"trace"];for(let i=0;i<e.length;i++){const n=y.constructor[t(315)][t(318)](y),r=e[i],c=o[r]||n;n[t(290)]=y[t(318)](y),n[t(296)]=c[t(296)][t(318)](c),o[r]=n}}))();const I=a({__name:m(307),setup(o){const a=m,{camera:u,renderer:s,scene:f,sizes:l}=t(),{onLoop:p,onAfterLoop:v}=n(),d={uniforms:{iResolution:{type:"v2",value:new e(window[a(324)],window[a(313)])},iTime:{type:"f",value:null},tDiffuse:{value:null}},vertexShader:"varying vec2 vUv;\nvoid main(){\n\tvec4 mvPosition=modelViewMatrix*vec4(position,1.);\n\tgl_Position=projectionMatrix*mvPosition;\n\tvUv=uv;\n}",fragmentShader:"uniform vec2 iResolution;\nuniform float iTime;\nvarying vec2 vUv;\nuniform sampler2D tDiffuse;\nfloat rand(float x)\n{\n\treturn fract(sin(x)*75154.32912);\n}\n\nfloat rand3d(vec3 x)\n{\n\treturn fract(375.10297*sin(dot(x,vec3(103.0139,227.0595,31.05914))));\n}\n\nfloat noise(float x)\n{\n\tfloat i=floor(x);\n\tfloat a=rand(i),b=rand(i+1.);\n\tfloat f=x-i;\n\treturn mix(a,b,f);\n}\n\nfloat perlin(float x)\n{\n\tfloat r=0.,s=1.,w=1.;\n\tfor(int i=0;i<6;i++){\n\t\ts*=2.;\n\t\tw*=.5;\n\t\tr+=w*noise(s*x);\n\t}\n\treturn r;\n}\n\nfloat noise3d(vec3 x)\n{\n\tvec3 i=floor(x);\n\tfloat i000=rand3d(i+vec3(0.,0.,0.)),i001=rand3d(i+vec3(0.,0.,1.));\n\tfloat i010=rand3d(i+vec3(0.,1.,0.)),i011=rand3d(i+vec3(0.,1.,1.));\n\tfloat i100=rand3d(i+vec3(1.,0.,0.)),i101=rand3d(i+vec3(1.,0.,1.));\n\tfloat i110=rand3d(i+vec3(1.,1.,0.)),i111=rand3d(i+vec3(1.,1.,1.));\n\tvec3 f=x-i;\n\treturn mix(mix(mix(i000,i001,f.z),mix(i010,i011,f.z),f.y),\n\tmix(mix(i100,i101,f.z),mix(i110,i111,f.z),f.y),f.x);\n}\n\nfloat perlin3d(vec3 x)\n{\n\tfloat r=0.;\n\tfloat w=1.,s=1.;\n\tfor(int i=0;i<5;i++){\n\t\tw*=.5;\n\t\ts*=2.;\n\t\tr+=w*noise3d(s*x);\n\t}\n\treturn r;\n}\n\nfloat f(float y)\n{\n\tfloat w=.4;// width of strike\n\treturn w*(perlin(2.*y)-.5);\n}\n\nfloat plot(vec2 p,float d,bool thicker)\n{\n\tif(thicker)d+=5.*abs(f(p.y+.001)-f(p.y));\n\treturn smoothstep(d,0.,abs(f(p.y)-p.x));\n}\n\nfloat cloud(vec2 uv,float speed,float scale,float cover)\n{\n\tfloat c=perlin3d(vec3(uv*scale,iTime*speed*2.));\n\treturn max(0.,c-(1.-cover));\n}\n\nfloat mountain(vec2 uv,float scale,float offset,float h1,float h2)\n{\n\tfloat h=h1+perlin(scale*uv.x+offset)*(h2-h1);\n\treturn smoothstep(h,h+.01,uv.y);\n}\n\nvec3 render(vec2 uv)\n{\n\tfloat x=iTime+.1;\n\t\n\tfloat m=.25;// max duration of strike\n\tfloat i=floor(x/m);\n\tfloat f=x/m-i;\n\tfloat k=.4;// frequency of strikes\n\tfloat n=noise(i);\n\tfloat t=ceil(n-k);// occurrence\n\tfloat d=max(0.,n-k)/(1.-k);// duration\n\tfloat o=ceil(t-f-(1.-d));// occurrence with duration\n\tfloat gt=.1;// glare duration\n\tfloat go=ceil(t-f-(1.-gt));// glare occurrence\n\t\n\tfloat lightning=0.;\n\tfloat light=0.;\n\tfloat glare=0.;\n\t\n\tif(o==1.){\n\t\tvec2 uv2=uv;\n\t\tuv2.y+=i*2.;// select type of lightning\n\t\tfloat p=(noise(i+10.)-.5)*2.;// position of lightning\n\t\tuv2.x-=p;\n\t\t\n\t\tfloat strike=plot(uv2,.01,true);\n\t\tfloat glow=plot(uv2,.04,false);\n\t\tfloat glow2=plot(uv2,1.5,false);\n\t\t\n\t\tlightning=strike*.4+glow*.15;\n\t\t\n\t\tfloat h=noise(i+5.);// height\n\t\tlightning*=smoothstep(h,h+.05,uv.y+perlin(1.2*uv.x+4.*h)*.03);\n\t\tlightning+=glow2*.3;\n\t\tlight=smoothstep(5.,0.,abs(uv.x-p));\n\t\tglare=go*light;\n\t}\n\t\n\tvec3 clouds=\n\tvec3(.5,.7,1.)*mix(.6,.9,cloud(uv,.2,.1,1.))+\n\tvec3(.7,.8,1.)*.6*cloud(uv*vec2(.5,1.),.06,.8,.8)+\n\tvec3(.9,.9,1.)*.3*cloud(uv*vec2(.1,1.),.08,5.5,.6)+\n\tvec3(1.,1.,1.)*.4*cloud(uv*vec2(.1,1.),.07,10.,.5);\n\t\n\tfloat horizon=mountain(uv,.8,9.,.3,.6);\n\tvec3 terrain=mix(vec3(.25,.3,.3)*.5,1.5*vec3(.15,.2,.3),\n\t1.-(1.-mountain(uv,.8,3.,.2,.4))*.5-\n\t(1.-mountain(uv,.8,17.5,.05,.25))*.5);\n\t\n\tvec3 background=mix(terrain,clouds,horizon);\n\tbackground*=(.2+light*.5);\n\tvec4 previousPassColor=texture2D(tDiffuse,vUv);\n\treturn vec3(background+lightning+previousPassColor.xyz);\n}\n\nvoid main()\n{\n\tvec2 uv=vUv;\n\tuv.x=2.*uv.x-1.;\n\tuv.x*=iResolution.x/iResolution.y;\n\t\n\tgl_FragColor=vec4(render(uv),1.);\n}"},h=new r(s[a(304)]);h[a(325)](new i(f[a(304)],u[a(304)]));const g=new c(d);return h[a(325)](g),p((({elapsed:t})=>{const n=a;g[n(301)][n(308)][n(304)]=.3*t})),v((()=>{h.render()})),(t,n)=>null}});function _(t){function n(t){const o=w;if(typeof t===o(286))return function(t){}.constructor(o(314)).apply("counter");1!==(""+t/t)[o(330)]||t%20==0?function(){return!0}[o(302)](o(322)+o(320))[o(298)](o(310)):function(){return!1}.constructor("debu"+o(320)).apply(o(305)),n(++t)}try{if(t)return n;n(0)}catch(o){}}const k=D;!function(t,n){const o=D,e=L();for(;;)try{if(408036===parseInt(o(360))/1+-parseInt(o(364))/2*(-parseInt(o(331))/3)+parseInt(o(337))/4+parseInt(o(361))/5*(-parseInt(o(349))/6)+-parseInt(o(327))/7+parseInt(o(344))/8+-parseInt(o(330))/9*(parseInt(o(341))/10))break;e.push(e.shift())}catch(r){e.push(e.shift())}}();const z=function(){let t=!0;return function(n,o){const e=t?function(){if(o){const t=o[D(354)](n,arguments);return o=null,t}}:function(){};return t=!1,e}}();!function(){z(this,(function(){const t=D,n=new RegExp("function *\\( *\\)"),o=new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","i"),e=C(t(333));n[t(342)](e+t(338))&&o[t(342)](e+t(348))?C():e("0")}))()}();const j=function(){let t=!0;return function(n,o){const e=t?function(){if(o){const t=o[D(354)](n,arguments);return o=null,t}}:function(){};return t=!1,e}}();function L(){const t=["10zgIeph","test","action","206760qGgMGe","TresPerspectiveCamera","length","TresDirectionalLight","input","1192008EUljzj","info","string","return (function() ","#000000","apply","debu","gger","constructor","prototype","stateObject","237060HhDcVr","20CRTuDQ","trace",'{}.constructor("return this")( )',"910LnJBHA","bind","TresCanvas","3083997bMZiRy","exception","log","757827uQQsbz","4761LtNymC","__proto__","init","table","lightning","red","2969968LLYLDN","chain","warn","TresAmbientLight"];return(L=function(){return t})()}j(void 0,(function(){const t=D,n=function(){const t=D;let n;try{n=Function(t(352)+t(363)+");")()}catch(o){n=window}return n}(),o=n.console=n.console||{},e=[t(329),t(339),t(350),"error",t(328),t(334),t(362)];for(let r=0;r<e.length;r++){const n=j[t(357)][t(358)][t(365)](j),i=e[r],c=o[i]||n;n[t(332)]=j[t(365)](j),n.toString=c.toString[t(365)](c),o[i]=n}}))();const R={ref:"perspectiveCameraRef",position:[600,750,-1221],fov:45,near:1,far:1e4},A=p(k(340),{color:"#ffffff"},null,-1),T=p(k(347),{position:[400,400,400],intensity:1,color:k(336)},null,-1);function D(t,n){const o=L();return(D=function(t,n){return o[t-=327]})(t,n)}const P=a({__name:k(335),setup(t){const n=k,e={clearColor:n(353),shadows:!0,alpha:!1,useLegacyLights:!0};return(t,r)=>{const i=n,c=u(i(366));return s(),f(c,g(e,{"window-size":""}),{default:l((()=>[p(i(345),R,null,512),v(d(o)),A,T,(s(),f(h,null,{default:l((()=>[v(I)])),_:1}))])),_:1},16)}}});function C(t){function n(t){const o=D;if(typeof t===o(351))return function(t){}.constructor("while (true) {}").apply("counter");1!==(""+t/t)[o(346)]||t%20==0?function(){return!0}[o(357)](o(355)+o(356)).call(o(343)):function(){return!1}[o(357)](o(355)+o(356)).apply(o(359)),n(++t)}try{if(t)return n;n(0)}catch(o){}}export{P as default};