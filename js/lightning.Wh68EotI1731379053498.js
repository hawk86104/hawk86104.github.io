import{m as t,e as n,U as o}from"./@tresjs.bLKO3xyw1731379053498.js";import{k as e,b$ as r,bZ as i,c9 as c}from"./three.bXjbKLxC1731379053498.js";import{d as a,e as u,o as s,f,g as l,J as v,j as p,u as d,al as h,m as g}from"./@vue.-THQH3GC1731379053498.js";import"./@vueuse.DWZrQ1Sl1731379053498.js";const m=y;!function(t,n){const o=y,e=b();for(;;)try{if(434081===-parseInt(o(389))/1+parseInt(o(383))/2+-parseInt(o(381))/3+-parseInt(o(399))/4+parseInt(o(385))/5*(parseInt(o(408))/6)+parseInt(o(402))/7*(parseInt(o(374))/8)+-parseInt(o(393))/9*(-parseInt(o(376))/10))break;e.push(e.shift())}catch(r){e.push(e.shift())}}();const x=function(){let t=!0;return function(n,o){const e=t?function(){if(o){const t=o[y(377)](n,arguments);return o=null,t}}:function(){};return t=!1,e}}();!function(){x(this,(function(){const t=y,n=new RegExp(t(395)),o=new RegExp(t(378),"i"),e=k(t(371));n[t(400)](e+"chain")&&o.test(e+"input")?k():e("0")}))()}();const w=function(){let t=!0;return function(n,o){const e=t?function(){if(o){const t=o[y(377)](n,arguments);return o=null,t}}:function(){};return t=!1,e}}();function y(t,n){const o=b();return(y=function(t,n){return o[t-=368]})(t,n)}function b(){const t=["iTime","info","lightEffect","1686936PIccrH","test","innerHeight","434wmhDpr","console","gger","debu","constructor","uniforms","110586HpnbIM","prototype","bind","log","trace","init","action","length","83896RAcSpJ","addPass","20TvGBAe","apply","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","innerWidth","call","1503942CdwHfv","string","691866WvHthr","exception","185MYTjKC","toString","while (true) {}","warn","745459XXOMUX","table","value","counter","1910313iuZwyH","stateObject","function *\\( *\\)"];return(b=function(){return t})()}w(void 0,(function(){const t=y,n=function(){let t;try{t=Function('return (function() {}.constructor("return this")( ));')()}catch(n){t=window}return t}(),o=n[t(403)]=n[t(403)]||{},e=[t(369),t(388),t(397),"error",t(384),t(390),t(370)];for(let r=0;r<e[t(373)];r++){const n=w.constructor[t(409)][t(368)](w),i=e[r],c=o[i]||n;n.__proto__=w[t(368)](w),n[t(386)]=c[t(386)][t(368)](c),o[i]=n}}))();const I=a({__name:m(398),setup(o){const a=m,{camera:u,renderer:s,scene:f,sizes:l}=t(),{onLoop:v,onAfterLoop:p}=n(),d={uniforms:{iResolution:{type:"v2",value:new e(window[a(379)],window[a(401)])},iTime:{type:"f",value:null},tDiffuse:{value:null}},vertexShader:"varying vec2 vUv;\nvoid main(){\n\tvec4 mvPosition=modelViewMatrix*vec4(position,1.);\n\tgl_Position=projectionMatrix*mvPosition;\n\tvUv=uv;\n}",fragmentShader:"uniform vec2 iResolution;\nuniform float iTime;\nvarying vec2 vUv;\nuniform sampler2D tDiffuse;\nfloat rand(float x)\n{\n\treturn fract(sin(x)*75154.32912);\n}\n\nfloat rand3d(vec3 x)\n{\n\treturn fract(375.10297*sin(dot(x,vec3(103.0139,227.0595,31.05914))));\n}\n\nfloat noise(float x)\n{\n\tfloat i=floor(x);\n\tfloat a=rand(i),b=rand(i+1.);\n\tfloat f=x-i;\n\treturn mix(a,b,f);\n}\n\nfloat perlin(float x)\n{\n\tfloat r=0.,s=1.,w=1.;\n\tfor(int i=0;i<6;i++){\n\t\ts*=2.;\n\t\tw*=.5;\n\t\tr+=w*noise(s*x);\n\t}\n\treturn r;\n}\n\nfloat noise3d(vec3 x)\n{\n\tvec3 i=floor(x);\n\tfloat i000=rand3d(i+vec3(0.,0.,0.)),i001=rand3d(i+vec3(0.,0.,1.));\n\tfloat i010=rand3d(i+vec3(0.,1.,0.)),i011=rand3d(i+vec3(0.,1.,1.));\n\tfloat i100=rand3d(i+vec3(1.,0.,0.)),i101=rand3d(i+vec3(1.,0.,1.));\n\tfloat i110=rand3d(i+vec3(1.,1.,0.)),i111=rand3d(i+vec3(1.,1.,1.));\n\tvec3 f=x-i;\n\treturn mix(mix(mix(i000,i001,f.z),mix(i010,i011,f.z),f.y),\n\tmix(mix(i100,i101,f.z),mix(i110,i111,f.z),f.y),f.x);\n}\n\nfloat perlin3d(vec3 x)\n{\n\tfloat r=0.;\n\tfloat w=1.,s=1.;\n\tfor(int i=0;i<5;i++){\n\t\tw*=.5;\n\t\ts*=2.;\n\t\tr+=w*noise3d(s*x);\n\t}\n\treturn r;\n}\n\nfloat f(float y)\n{\n\tfloat w=.4;// width of strike\n\treturn w*(perlin(2.*y)-.5);\n}\n\nfloat plot(vec2 p,float d,bool thicker)\n{\n\tif(thicker)d+=5.*abs(f(p.y+.001)-f(p.y));\n\treturn smoothstep(d,0.,abs(f(p.y)-p.x));\n}\n\nfloat cloud(vec2 uv,float speed,float scale,float cover)\n{\n\tfloat c=perlin3d(vec3(uv*scale,iTime*speed*2.));\n\treturn max(0.,c-(1.-cover));\n}\n\nfloat mountain(vec2 uv,float scale,float offset,float h1,float h2)\n{\n\tfloat h=h1+perlin(scale*uv.x+offset)*(h2-h1);\n\treturn smoothstep(h,h+.01,uv.y);\n}\n\nvec3 render(vec2 uv)\n{\n\tfloat x=iTime+.1;\n\t\n\tfloat m=.25;// max duration of strike\n\tfloat i=floor(x/m);\n\tfloat f=x/m-i;\n\tfloat k=.4;// frequency of strikes\n\tfloat n=noise(i);\n\tfloat t=ceil(n-k);// occurrence\n\tfloat d=max(0.,n-k)/(1.-k);// duration\n\tfloat o=ceil(t-f-(1.-d));// occurrence with duration\n\tfloat gt=.1;// glare duration\n\tfloat go=ceil(t-f-(1.-gt));// glare occurrence\n\t\n\tfloat lightning=0.;\n\tfloat light=0.;\n\tfloat glare=0.;\n\t\n\tif(o==1.){\n\t\tvec2 uv2=uv;\n\t\tuv2.y+=i*2.;// select type of lightning\n\t\tfloat p=(noise(i+10.)-.5)*2.;// position of lightning\n\t\tuv2.x-=p;\n\t\t\n\t\tfloat strike=plot(uv2,.01,true);\n\t\tfloat glow=plot(uv2,.04,false);\n\t\tfloat glow2=plot(uv2,1.5,false);\n\t\t\n\t\tlightning=strike*.4+glow*.15;\n\t\t\n\t\tfloat h=noise(i+5.);// height\n\t\tlightning*=smoothstep(h,h+.05,uv.y+perlin(1.2*uv.x+4.*h)*.03);\n\t\tlightning+=glow2*.3;\n\t\tlight=smoothstep(5.,0.,abs(uv.x-p));\n\t\tglare=go*light;\n\t}\n\t\n\tvec3 clouds=\n\tvec3(.5,.7,1.)*mix(.6,.9,cloud(uv,.2,.1,1.))+\n\tvec3(.7,.8,1.)*.6*cloud(uv*vec2(.5,1.),.06,.8,.8)+\n\tvec3(.9,.9,1.)*.3*cloud(uv*vec2(.1,1.),.08,5.5,.6)+\n\tvec3(1.,1.,1.)*.4*cloud(uv*vec2(.1,1.),.07,10.,.5);\n\t\n\tfloat horizon=mountain(uv,.8,9.,.3,.6);\n\tvec3 terrain=mix(vec3(.25,.3,.3)*.5,1.5*vec3(.15,.2,.3),\n\t1.-(1.-mountain(uv,.8,3.,.2,.4))*.5-\n\t(1.-mountain(uv,.8,17.5,.05,.25))*.5);\n\t\n\tvec3 background=mix(terrain,clouds,horizon);\n\tbackground*=(.2+light*.5);\n\tvec4 previousPassColor=texture2D(tDiffuse,vUv);\n\treturn vec3(background+lightning+previousPassColor.xyz);\n}\n\nvoid main()\n{\n\tvec2 uv=vUv;\n\tuv.x=2.*uv.x-1.;\n\tuv.x*=iResolution.x/iResolution.y;\n\t\n\tgl_FragColor=vec4(render(uv),1.);\n}"},h=new r(s.value);h[a(375)](new i(f.value,u.value));const g=new c(d);return h[a(375)](g),v((({elapsed:t})=>{const n=a;g[n(407)][n(396)][n(391)]=.3*t})),p((()=>{h.render()})),(t,n)=>null}});function k(t){function n(t){const o=y;if(typeof t===o(382))return function(t){}[o(406)](o(387))[o(377)](o(392));1!==(""+t/t).length||t%20==0?function(){return!0}.constructor("debu"+o(404))[o(380)](o(372)):function(){return!1}[o(406)](o(405)+o(404)).apply(o(394)),n(++t)}try{if(t)return n;n(0)}catch(o){}}const _=R;function R(t,n){const o=C();return(R=function(t,n){return o[t-=137]})(t,n)}!function(t,n){const o=R,e=C();for(;;)try{if(860127===-parseInt(o(150))/1*(parseInt(o(177))/2)+parseInt(o(145))/3*(-parseInt(o(139))/4)+-parseInt(o(147))/5+-parseInt(o(179))/6*(-parseInt(o(160))/7)+parseInt(o(170))/8+parseInt(o(152))/9*(parseInt(o(155))/10)+parseInt(o(176))/11)break;e.push(e.shift())}catch(r){e.push(e.shift())}}();const z=function(){let t=!0;return function(n,o){const e=t?function(){if(o){const t=o[R(178)](n,arguments);return o=null,t}}:function(){};return t=!1,e}}();!function(){z(this,(function(){const t=R,n=new RegExp(t(175)),o=new RegExp(t(153),"i"),e=A(t(138));n[t(162)](e+t(159))&&o.test(e+t(169))?A():e("0")}))()}();const T=function(){let t=!0;return function(n,o){const e=t?function(){if(o){const t=o.apply(n,arguments);return o=null,t}}:function(){};return t=!1,e}}();T(void 0,(function(){const t=R;let n;try{n=Function(t(165)+t(163)+");")()}catch(r){n=window}const o=n.console=n[t(181)]||{},e=[t(141),"warn","info",t(142),t(171),t(161),t(183)];for(let i=0;i<e.length;i++){const n=T.constructor[t(166)].bind(T),r=e[i],c=o[r]||n;n[t(151)]=T[t(158)](T),n[t(143)]=c[t(143)][t(158)](c),o[r]=n}}))();const j={ref:_(154),position:[600,750,-1221],fov:45,near:1,far:1e4};function C(){const t=["red","console","lightning","trace","while (true) {}","init","156OXfgZt","counter","log","error","toString","stateObject","101991njIWSR","TresAmbientLight","7200405YRlSEa","length","string","1xguZNN","__proto__","1359kRQBTb","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","perspectiveCameraRef","73460XSCNER","#ffffff","TresCanvas","bind","chain","1547GMQkrE","table","test",'{}.constructor("return this")( )',"#000000","return (function() ","prototype","action","debu","input","1267920TWgxlk","exception","TresDirectionalLight","constructor","TresPerspectiveCamera","function *\\( *\\)","26841639vWOkGv","1800314ZnGHQX","apply","22218wLKlIv"];return(C=function(){return t})()}const Z=a({__name:_(182),setup(t){const n=_,e={clearColor:n(164),shadows:!0,alpha:!1,useLegacyLights:!0};return(t,r)=>{const i=n,c=u(i(157));return s(),f(c,g(e,{"window-size":""}),{default:l((()=>[v(i(174),j,null,512),p(d(o)),r[0]||(r[0]=v(i(146),{color:i(156)},null,-1)),r[1]||(r[1]=v(i(172),{position:[400,400,400],intensity:1,color:i(180)},null,-1)),(s(),f(h,null,{default:l((()=>[p(I)])),_:1}))])),_:1},16)}}});function A(t){function n(t){const o=R;if(typeof t===o(149))return function(t){}[o(173)](o(137)).apply(o(140));1!==(""+t/t)[o(148)]||t%20==0?function(){return!0}.constructor(o(168)+"gger").call(o(167)):function(){return!1}.constructor(o(168)+"gger")[o(178)](o(144)),n(++t)}try{if(t)return n;n(0)}catch(o){}}export{Z as default};