import{e as n,m as t,U as e,s as r,b as o}from"./@tresjs.FlKhQDQ71735866388381.js";import{_ as i,a0 as s}from"./three.Rja0AEnA1735866388381.js";import{P as c}from"./tweakpane.yHWGBmom1735866388381.js";import{L as a}from"./three-subdivide.71VkDg--1735866388381.js";import{d as u,b as l,a1 as f,w as p,o as d,D as g,J as m,aj as h,ak as v,a4 as y,r as b,e as w,f as _,g as I,j as B,u as x,m as M,I as S}from"./@vue.yG49nQHr1735866388381.js";import"./@vueuse.YI3Exu6_1735866388381.js";const j=F;!function(n,t){const e=F,r=k();for(;;)try{if(969857===-parseInt(e(444))/1+-parseInt(e(397))/2+-parseInt(e(434))/3*(parseInt(e(438))/4)+parseInt(e(399))/5+-parseInt(e(439))/6*(parseInt(e(395))/7)+parseInt(e(402))/8+-parseInt(e(446))/9*(-parseInt(e(392))/10))break;r.push(r.shift())}catch(o){r.push(r.shift())}}();const T=function(){let n=!0;return function(t,e){const r=n?function(){if(e){const n=e.apply(t,arguments);return e=null,n}}:function(){};return n=!1,r}}();!function(){T(this,(function(){const n=F,t=new RegExp(n(428)),e=new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","i"),r=z(n(422));t[n(414)](r+n(409))&&e[n(414)](r+n(418))?z():r("0")}))()}();const A=function(){let n=!0;return function(t,e){const r=n?function(){if(e){const n=e[F(411)](t,arguments);return e=null,n}}:function(){};return n=!1,r}}();function k(){const n=["gger","position","chain","log","apply","TSGref","subdivision","test","call","FrontSide","glowColor","input","table","clone","exception","init","debu","TresMesh","string","\n          uniform vec3 glowColor;\n          varying float intensity;\n          void main() \n          {\n          \tvec3 glow = glowColor * intensity;\n\t\t\t\t\t\tif(intensity < 1.0){\n            \tgl_FragColor = vec4( glow, 1.0 );\n\t\t\t\t\t\t}\n          }\n        ","subVectors","function *\\( *\\)","shineShader","constructor","Color","material","bind","8391UrprFJ","viewVector","length","copy","604LBBAtV","714dSbflD","srcMesh","geometry","Vector3","info","1843307IbbNwP","modify","27fAhjPZ","warn","counter","side","__proto__","AdditiveBlending","10424000BmsSDv","console","blending","1407pwEHXh","scale","2696094jjZDJO","color","7399750blpMZH","uniforms","toString","2616inhiYp","value","return (function() ","while (true) {}","stateObject"];return(k=function(){return n})()}A(void 0,(function(){const n=F,t=function(){const n=F;let t;try{t=Function(n(404)+'{}.constructor("return this")( ));')()}catch(e){t=window}return t}(),e=t[n(393)]=t[n(393)]||{},r=[n(410),n(387),n(443),"error",n(421),n(419),"trace"];for(let o=0;o<r[n(436)];o++){const t=A[n(430)].prototype[n(433)](A),i=r[o],s=e[i]||t;t[n(390)]=A[n(433)](A),t.toString=s[n(401)][n(433)](s),e[i]=t}}))();const C=[j(396)];function F(n,t){const e=k();return(F=function(n,t){return e[n-=387]})(n,t)}const V=u({__name:j(429),props:{srcMesh:{},scale:{default:1.2},color:{default:"#ffff00"},subdivision:{type:Boolean,default:!0},c:{default:1.1},p:{default:1.4},side:{default:i[j(416)]},blending:{default:i[j(391)]}},setup(e){const r=j,o=e,s=l(),c={uniforms:{c:{type:"f",value:o.c},p:{type:"f",value:o.p},glowColor:{type:"c",value:new(i[r(431)])(o[r(398)])},viewVector:{type:"v3",value:{x:0,y:0,z:0}}},vertexShader:"\n          uniform vec3 viewVector;\n          uniform float c;\n          uniform float p;\n          varying float intensity;\n          void main() {\n            vec3 vNormal = normalize( normalMatrix * normal);\n            vec3 vNormel = normalize( normalMatrix * viewVector);\n            intensity = pow( c - dot(vNormal, vNormel), p );\n            gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0);\n          }\n            ",fragmentShader:r(426),side:o.side,transparent:!0,depthWrite:!1,depthTest:!0,blending:o.blending};f((()=>{const n=r;if(o[n(440)]&&s[n(403)]&&!s[n(403)][n(441)].attributes[n(408)]){let t=o[n(440)][n(441)][n(420)]();o[n(413)]&&(t=a[n(445)](t,2)),s[n(403)].geometry=t,s[n(403)][n(408)][n(437)](o[n(440)][n(408)])}o.color&&(c.uniforms[n(417)][n(403)]=new(i[n(431)])(o[n(398)])),o.c&&(c[n(400)].c[n(403)]=o.c),o.p&&(c[n(400)].p[n(403)]=o.p)})),p((()=>o[r(413)]),(n=>{const t=r;let e=o[t(440)].geometry[t(420)]();n&&(e=a[t(445)](e,2)),s[t(403)].geometry=e})),p((()=>o[r(389)]),(n=>{const t=r;s[t(403)][t(432)].side=n})),p((()=>o.blending),(n=>{const t=r;s[t(403)][t(432)][t(394)]=n}));const{onLoop:u}=n(),{camera:y}=t();return u((()=>{const n=r;y[n(403)]&&s[n(403)]&&(c[n(400)][n(435)].value=(new(i[n(442)]))[n(427)](y[n(403)][n(408)],s[n(403)][n(408)]))})),(n,t)=>{const e=r;return d(),g(e(424),{ref_key:e(412),ref:s,scale:o[e(396)]},[m("TresShaderMaterial",h(v(c)),null,16)],8,C)}}});function z(n){function t(n){const e=F;if(typeof n===e(425))return function(n){}[e(430)](e(405)).apply(e(388));1!==(""+n/n)[e(436)]||n%20==0?function(){return!0}[e(430)](e(423)+e(407))[e(415)]("action"):function(){return!1}.constructor(e(423)+e(407))[e(411)](e(406)),t(++n)}try{if(n)return t;t(0)}catch(e){}}const R=G;!function(n,t){const e=G,r=P();for(;;)try{if(820382===-parseInt(e(450))/1+parseInt(e(455))/2+-parseInt(e(477))/3+-parseInt(e(492))/4*(-parseInt(e(445))/5)+parseInt(e(478))/6*(parseInt(e(490))/7)+-parseInt(e(488))/8*(parseInt(e(440))/9)+parseInt(e(472))/10)break;r.push(r.shift())}catch(o){r.push(r.shift())}}();const D=function(){let n=!0;return function(t,e){const r=n?function(){if(e){const n=e[G(461)](t,arguments);return e=null,n}}:function(){};return n=!1,r}}();!function(){D(this,(function(){const n=G,t=new RegExp(n(448)),e=new RegExp(n(452),"i"),r=J(n(457));t.test(r+n(447))&&e[n(446)](r+n(465))?J():r("0")}))()}();const N=function(){let n=!0;return function(t,e){const r=n?function(){if(e){const n=e[G(461)](t,arguments);return e=null,n}}:function(){};return n=!1,r}}();function P(){const n=["stateObject","table","BackSide","4366563rBvCsV","20268gQdPhG","TresPerspectiveCamera","shader","srcMesh","value","NormalBlending","counter","instance","#222","FrontSide","8RtTIDy","#0ff","1680BBcxJP","call","2588taFlgI","console","__proto__","while (true) {}","debu","边缘处理","logo.png","length","7000065FihxbA","addBinding","action","warn","bind","7715cdBQDw","test","chain","function *\\( *\\)","#00dfff","923063GHwgdn","TresMeshBasicMaterial","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","constructor","TresBoxGeometry","2562456vvQMTC","color","init","map","gger","info","apply","toString","trace",'{}.constructor("return this")( )',"input","AdditiveBlending","TreBoxRef","blending","error","TresMeshRefB","side","8864820bvUBWE","log"];return(P=function(){return n})()}N(void 0,(function(){const n=G,t=function(){const n=G;let t;try{t=Function("return (function() "+n(464)+");")()}catch(e){t=window}return t}(),e=t.console=t[n(493)]||{},r=[n(473),n(443),n(460),n(469),"exception",n(475),n(463)];for(let o=0;o<r[n(439)];o++){const t=N[n(453)].prototype.bind(N),i=r[o],s=e[i]||t;t[n(494)]=N[n(444)](N),t.toString=s[n(462)][n(444)](s),e[i]=t}}))();const Z=["map"],E=[R(458)];function G(n,t){const e=P();return(G=function(n,t){return e[n-=438]})(n,t)}const H=u({__name:R(480),async setup(n){const t=R;let a,u;const f={clearColor:t(486)},p=l(),g=l(),h=l(),v=([a,u]=y((()=>o(["./plugins/earthSample/image/earthA/earth.jpg",t(438)]))),a=await a,u(),a),j=b({scale:1.6,color:t(449),subdivision:!0,c:1.1,p:1.4,side:i[t(487)],blending:i[t(466)]}),T=new c({title:"参数",expanded:!0});return T[t(441)](j,t(456),{label:"颜色"}),T[t(441)](j,"scale",{label:"大小",min:1,max:3,step:.2}),T[t(441)](j,"subdivision",{label:t(497)}),T[t(441)](j,"c",{label:"c",min:0,max:2,step:.1}),T.addBinding(j,"p",{label:"p",min:0,max:8,step:.2}),T[t(441)](j,t(471),{options:{FrontSide:i[t(487)],BackSide:i[t(476)],DoubleSide:s}}),T.addBinding(j,t(468),{options:{AdditiveBlending:i[t(466)],NormalBlending:i[t(483)]}}),(n,o)=>{const i=t,s=w("TresCanvas");return d(),_(s,M(f,{"window-size":""}),{default:I((()=>[o[2]||(o[2]=m(i(479),{position:[5,5,5]},null,-1)),o[3]||(o[3]=m("TresAmbientLight",{intensity:1},null,-1)),B(x(e)),o[4]||(o[4]=m("TresGridHelper",{args:[10,10]},null,-1)),m("TresMesh",{ref_key:"TresMeshRefA",ref:p,position:[-2,1,0]},[o[0]||(o[0]=m("TresSphereGeometry",{args:[1,32,16]},null,-1)),m(i(451),{map:x(v)[0]},null,8,Z)],512),B(V,M({srcMesh:p.value},j),null,16,["srcMesh"]),B(x(r),{ref_key:i(467),ref:h,args:[1,1,1],position:[2,1,0]},{default:I((()=>[m(i(451),{map:x(v)[1]},null,8,E)])),_:1},512),h[i(482)]&&h.value[i(485)]?(d(),_(V,M({key:0,srcMesh:h[i(482)].instance},j),null,16,[i(481)])):S("",!0),m("TresMesh",{ref_key:i(470),ref:g,position:[0,1,-2]},o[1]||(o[1]=[m(i(454),{args:[1,1,1,1,1]},null,-1),m(i(451),{color:i(489)},null,-1)]),512),B(V,M({srcMesh:g[i(482)]},j),null,16,[i(481)])])),_:1},16)}}});function J(n){function t(n){const e=G;if("string"==typeof n)return function(n){}[e(453)](e(495))[e(461)](e(484));1!==(""+n/n)[e(439)]||n%20==0?function(){return!0}[e(453)](e(496)+e(459))[e(491)](e(442)):function(){return!1}[e(453)](e(496)+"gger")[e(461)](e(474)),t(++n)}try{if(n)return t;t(0)}catch(e){}}export{H as default};