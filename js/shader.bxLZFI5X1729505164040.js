import{U as n,p as t,Y as e,n as r,z as o}from"./@tresjs.IsKybBdF1729505164040.js";import{_ as s,z as i,aL as a,K as c}from"./three.YREzp-_G1729505164040.js";import{P as u}from"./tweakpane.yHWGBmom1729505164040.js";import{L as l}from"./three-subdivide.I5i8zn3T1729505164040.js";import{d as f,b as p,a3 as d,w as g,o as h,E as m,L as v,aj as b,ak as y,a4 as w,r as M,e as _,f as I,g as x,j as T,u as j,m as B,J as S}from"./@vue.JNsx1iN61729505164040.js";import"./@vueuse.9dhnH8nd1729505164040.js";const z=R;function V(){const n=["action","3403124gTZJgm","Color","while (true) {}","init","geometry","side","value","glowColor","TresMesh","AdditiveBlending","test","__proto__","1186Llarzx","chain","input","blending","modify","2387148WLtMrP","8hVfTWc","187677rWdbkX","function *\\( *\\)","material","TresShaderMaterial","subVectors","position","srcMesh","viewVector","info","6568961fJwdhH","exception","warn","color","subdivision","10pXEShN","FrontSide","gger","\n          uniform vec3 viewVector;\n          uniform float c;\n          uniform float p;\n          varying float intensity;\n          void main() {\n            vec3 vNormal = normalize( normalMatrix * normal);\n            vec3 vNormel = normalize( normalMatrix * viewVector);\n            intensity = pow( c - dot(vNormal, vNormel), p );\n            gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0);\n          }\n            ","Vector3","table","return (function() ","prototype","stateObject","bind","call","11KQjsXZ","TSGref","apply","toString","console","169BvtBmj","copy",'{}.constructor("return this")( )',"clone","uniforms","#ffff00","9649360qBNbVz","scale","counter","2288085oJQvKR","constructor"];return(V=function(){return n})()}!function(n,t){const e=R,r=V();for(;;)try{if(585197===parseInt(e(166))/1*(parseInt(e(129))/2)+parseInt(e(114))/3+parseInt(e(117))/4+parseInt(e(150))/5*(parseInt(e(134))/6)+parseInt(e(145))/7*(-parseInt(e(135))/8)+-parseInt(e(136))/9+parseInt(e(172))/10*(-parseInt(e(161))/11))break;r.push(r.shift())}catch(o){r.push(r.shift())}}();const k=function(){let n=!0;return function(t,e){const r=n?function(){if(e){const n=e[R(163)](t,arguments);return e=null,n}}:function(){};return n=!1,r}}();!function(){k(this,(function(){const n=R,t=new RegExp(n(137)),e=new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","i"),r=L(n(120));t[n(127)](r+n(130))&&e[n(127)](r+n(131))?L():r("0")}))()}();const A=function(){let n=!0;return function(t,e){const r=n?function(){if(e){const n=e[R(163)](t,arguments);return e=null,n}}:function(){};return n=!1,r}}();A(void 0,(function(){const n=R;let t;try{t=Function(n(156)+n(168)+");")()}catch(o){t=window}const e=t.console=t[n(165)]||{},r=["log",n(147),n(144),"error",n(146),n(155),"trace"];for(let s=0;s<r.length;s++){const t=A[n(115)][n(157)][n(159)](A),o=r[s],i=e[o]||t;t[n(128)]=A[n(159)](A),t[n(164)]=i[n(164)][n(159)](i),e[o]=t}}))();const N=[z(112)];function R(n,t){const e=V();return(R=function(n,t){return e[n-=112]})(n,t)}const C=f({__name:"shineShader",props:{srcMesh:{},scale:{default:1.2},color:{default:z(171)},subdivision:{type:Boolean,default:!0},c:{default:1.1},p:{default:1.4},side:{default:s[z(151)]},blending:{default:s[z(126)]}},setup(e){const r=z,o=e,i=p(),a={uniforms:{c:{type:"f",value:o.c},p:{type:"f",value:o.p},glowColor:{type:"c",value:new(s[r(118)])(o[r(148)])},viewVector:{type:"v3",value:{x:0,y:0,z:0}}},vertexShader:r(153),fragmentShader:"\n          uniform vec3 glowColor;\n          varying float intensity;\n          void main() \n          {\n          \tvec3 glow = glowColor * intensity;\n\t\t\t\t\t\tif(intensity < 1.0){\n            \tgl_FragColor = vec4( glow, 1.0 );\n\t\t\t\t\t\t}\n          }\n        ",side:o.side,transparent:!0,depthWrite:!1,depthTest:!0,blending:o[r(132)]};d((()=>{const n=r;if(o[n(142)]&&i.value&&!i[n(123)].geometry.attributes[n(141)]){let t=o.srcMesh.geometry[n(169)]();o[n(149)]&&(t=l[n(133)](t,2)),i[n(123)][n(121)]=t,i[n(123)][n(141)][n(167)](o[n(142)][n(141)])}o.color&&(a[n(170)][n(124)][n(123)]=new(s[n(118)])(o.color)),o.c&&(a.uniforms.c[n(123)]=o.c),o.p&&(a[n(170)].p.value=o.p)})),g((()=>o[r(149)]),(n=>{const t=r;let e=o[t(142)][t(121)][t(169)]();n&&(e=l[t(133)](e,2)),i[t(123)][t(121)]=e})),g((()=>o[r(122)]),(n=>{const t=r;i[t(123)][t(138)].side=n})),g((()=>o[r(132)]),(n=>{const t=r;i[t(123)][t(138)][t(132)]=n}));const{onLoop:c}=n(),{camera:u}=t();return c((()=>{const n=r;u[n(123)]&&i[n(123)]&&(a.uniforms[n(143)][n(123)]=(new(s[n(154)]))[n(140)](u.value[n(141)],i[n(123)][n(141)]))})),(n,t)=>{const e=r;return h(),m(e(125),{ref_key:e(162),ref:i,scale:o[e(112)]},[v(e(139),b(y(a)),null,16)],8,N)}}});function L(n){function t(n){const e=R;if("string"==typeof n)return function(n){}[e(115)](e(119))[e(163)](e(113));1!==(""+n/n).length||n%20==0?function(){return!0}[e(115)]("debu"+e(152))[e(160)](e(116)):function(){return!1}[e(115)]("debugger")[e(163)](e(158)),t(++n)}try{if(n)return t;t(0)}catch(e){}}const F=O;function G(){const n=["scale","TresBoxGeometry","NormalBlending","value","debu",'{}.constructor("return this")( )',"console","TresSphereGeometry","#0ff","91680oOKGGP","shader","7Ppbbjb","srcMesh","side","gger","TresPerspectiveCamera","1161034hiVdiw","chain","exception","input","bind","trace","map","addBinding","FrontSide","subdivision","string","TreBoxRef","blending","test","5555400pHNbkY","8RvhlFh","constructor","action","logo.png","TresCanvas","#00dfff","16zrGjKg","DoubleSide","stateObject","TresMesh","counter","instance","26108viRTLS","call","TresGridHelper","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","toString","apply","length","796803NVVnKo","边缘处理","TresMeshBasicMaterial","77JwpcAd","#222","TresAmbientLight","6gTnXVK","14510yPxFcX","2711655GULweK"];return(G=function(){return n})()}!function(n,t){const e=O,r=G();for(;;)try{if(165620===-parseInt(e(405))/1*(parseInt(e(378))/2)+-parseInt(e(385))/3+parseInt(e(431))/4*(-parseInt(e(392))/5)+-parseInt(e(391))/6*(parseInt(e(410))/7)+-parseInt(e(425))/8*(-parseInt(e(393))/9)+parseInt(e(403))/10*(-parseInt(e(388))/11)+parseInt(e(424))/12)break;r.push(r.shift())}catch(o){r.push(r.shift())}}();const K=function(){let n=!0;return function(t,e){const r=n?function(){if(e){const n=e.apply(t,arguments);return e=null,n}}:function(){};return n=!1,r}}();!function(){K(this,(function(){const n=O,t=new RegExp("function *\\( *\\)"),e=new RegExp(n(381),"i"),r=Q("init");t[n(423)](r+n(411))&&e[n(423)](r+n(413))?Q():r("0")}))()}();const P=function(){let n=!0;return function(t,e){const r=n?function(){if(e){const n=e[O(383)](t,arguments);return e=null,n}}:function(){};return n=!1,r}}();P(void 0,(function(){const n=O,t=function(){const n=O;let t;try{t=Function("return (function() "+n(399)+");")()}catch(e){t=window}return t}(),e=t[n(400)]=t[n(400)]||{},r=["log","warn","info","error",n(412),"table",n(415)];for(let o=0;o<r[n(384)];o++){const t=P.constructor.prototype.bind(P),s=r[o],i=e[s]||t;t.__proto__=P[n(414)](P),t[n(382)]=i[n(382)].bind(i),e[s]=t}}))();const E=v(F(409),{position:[5,5,5]},null,-1),Z=v(F(390),{intensity:1},null,-1),J=v(F(380),{args:[10,10]},null,-1),X=v(F(401),{args:[1,32,16]},null,-1),W=["map"],$=[F(416)],H=[v(F(395),{args:[1,1,1,1,1]},null,-1),v("TresMeshBasicMaterial",{color:F(402)},null,-1)];function O(n,t){const e=G();return(O=function(n,t){return e[n-=377]})(n,t)}const D=f({__name:F(404),async setup(n){const t=F;let l,f;const d={clearColor:t(389)},g=p(),m=p(),b=p(),y=([l,f]=w((()=>o(["./plugins/earthSample/image/earthA/earth.jpg",t(428)]))),l=await l,f(),l),z=M({scale:1.6,color:t(430),subdivision:!0,c:1.1,p:1.4,side:i,blending:a}),V=new u({title:"参数",expanded:!0});return V.addBinding(z,"color",{label:"颜色"}),V.addBinding(z,t(394),{label:"大小",min:1,max:3,step:.2}),V[t(417)](z,t(419),{label:t(386)}),V[t(417)](z,"c",{label:"c",min:0,max:2,step:.1}),V[t(417)](z,"p",{label:"p",min:0,max:8,step:.2}),V[t(417)](z,t(407),{options:{FrontSide:s[t(418)],BackSide:c,DoubleSide:s[t(432)]}}),V[t(417)](z,t(422),{options:{AdditiveBlending:a,NormalBlending:s[t(396)]}}),(n,o)=>{const s=t,i=_(s(429));return h(),I(i,B(d,{"window-size":""}),{default:x((()=>[E,Z,T(j(e)),J,v(s(434),{ref_key:"TresMeshRefA",ref:g,position:[-2,1,0]},[X,v("TresMeshBasicMaterial",{map:j(y)[0]},null,8,W)],512),T(C,B({srcMesh:g[s(397)]},z),null,16,[s(406)]),T(j(r),{ref_key:s(421),ref:b,args:[1,1,1],position:[2,1,0]},{default:x((()=>[v(s(387),{map:j(y)[1]},null,8,$)])),_:1},512),b[s(397)]&&b.value[s(377)]?(h(),I(C,B({key:0,srcMesh:b[s(397)][s(377)]},z),null,16,["srcMesh"])):S("",!0),v(s(434),{ref_key:"TresMeshRefB",ref:m,position:[0,1,-2]},H,512),T(C,B({srcMesh:m[s(397)]},z),null,16,["srcMesh"])])),_:1},16)}}});function Q(n){function t(n){const e=O;if(typeof n===e(420))return function(n){}.constructor("while (true) {}")[e(383)](e(435));1!==(""+n/n)[e(384)]||n%20==0?function(){return!0}[e(426)](e(398)+e(408))[e(379)](e(427)):function(){return!1}[e(426)](e(398)+e(408))[e(383)](e(433)),t(++n)}try{if(n)return t;t(0)}catch(e){}}export{D as default};