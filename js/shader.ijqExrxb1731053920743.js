import{e as n,m as t,U as e,s as r,b as o}from"./@tresjs.hJVQLtpa1731053920743.js";import{_ as s,az as i,C as a,K as c,cd as u}from"./three.eGpwEcxC1731053920743.js";import{P as l}from"./tweakpane.yHWGBmom1731053920743.js";import{L as f}from"./three-subdivide.5vAo87Kg1731053920743.js";import{d as p,b as d,a3 as m,w as h,o as g,D as v,J as y,aj as b,ak as w,a6 as M,r as _,e as I,f as x,g as T,j as S,u as j,m as B,I as C}from"./@vue.u2cBPEWn1731053920743.js";import"./@vueuse.weJ7f3dz1731053920743.js";const k=V;!function(n,t){const e=V,r=A();for(;;)try{if(475933===parseInt(e(252))/1*(-parseInt(e(196))/2)+-parseInt(e(241))/3*(-parseInt(e(216))/4)+-parseInt(e(209))/5*(-parseInt(e(207))/6)+parseInt(e(211))/7+parseInt(e(248))/8*(-parseInt(e(225))/9)+-parseInt(e(237))/10+parseInt(e(235))/11*(parseInt(e(220))/12))break;r.push(r.shift())}catch(o){r.push(r.shift())}}();const z=function(){let n=!0;return function(t,e){const r=n?function(){if(e){const n=e.apply(t,arguments);return e=null,n}}:function(){};return n=!1,r}}();function A(){const n=["copy","1132159fHbduC","length","bind","position","TresMesh","812yRtNax","console","exception","glowColor","20103708mpdFQi","info","call","gger","scale","81153oiGLLw","init","\n          uniform vec3 viewVector;\n          uniform float c;\n          uniform float p;\n          varying float intensity;\n          void main() {\n            vec3 vNormal = normalize( normalMatrix * normal);\n            vec3 vNormel = normalize( normalMatrix * viewVector);\n            intensity = pow( c - dot(vNormal, vNormel), p );\n            gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0);\n          }\n            ","debu","test","stateObject","geometry","Color","side","function *\\( *\\)","11osuCGs","uniforms","8143940hIMbtS","subVectors","toString","blending","279ePzSRj","constructor",'{}.constructor("return this")( )',"FrontSide","Vector3","input","__proto__","208JnoWrQ","clone","srcMesh","trace","116786DUPmOr","\n          uniform vec3 glowColor;\n          varying float intensity;\n          void main() \n          {\n          \tvec3 glow = glowColor * intensity;\n\t\t\t\t\t\tif(intensity < 1.0){\n            \tgl_FragColor = vec4( glow, 1.0 );\n\t\t\t\t\t\t}\n          }\n        ","8BEeEFm","apply","viewVector","TresShaderMaterial","prototype","while (true) {}","value","material","subdivision","color","error","12kwbzfE","#ffff00","339970lXsuih"];return(A=function(){return n})()}!function(){z(this,(function(){const n=V,t=new RegExp(n(234)),e=new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","i"),r=G(n(226));t[n(229)](r+"chain")&&e[n(229)](r+n(246))?G():r("0")}))()}();const F=function(){let n=!0;return function(t,e){const r=n?function(){if(e){const n=e[V(197)](t,arguments);return e=null,n}}:function(){};return n=!1,r}}();F(void 0,(function(){const n=V;let t;try{t=Function("return (function() "+n(243)+");")()}catch(o){t=window}const e=t[n(217)]=t[n(217)]||{},r=["log","warn",n(221),n(206),n(218),"table",n(251)];for(let s=0;s<r[n(212)];s++){const t=F[n(242)][n(200)].bind(F),o=r[s],i=e[o]||t;t[n(247)]=F.bind(F),t[n(239)]=i[n(239)][n(213)](i),e[o]=t}}))();const R=["scale"],E=p({__name:"shineShader",props:{srcMesh:{},scale:{default:1.2},color:{default:k(208)},subdivision:{type:Boolean,default:!0},c:{default:1.1},p:{default:1.4},side:{default:s[k(244)]},blending:{default:i}},setup(e){const r=k,o=e,i=d(),c={uniforms:{c:{type:"f",value:o.c},p:{type:"f",value:o.p},glowColor:{type:"c",value:new(s[r(232)])(o[r(205)])},viewVector:{type:"v3",value:{x:0,y:0,z:0}}},vertexShader:r(227),fragmentShader:r(195),side:o.side,transparent:!0,depthWrite:!1,depthTest:!0,blending:o[r(240)]};m((()=>{const n=r;if(o[n(250)]&&i[n(202)]&&!i.value[n(231)].attributes[n(214)]){let t=o[n(250)][n(231)].clone();o[n(204)]&&(t=f.modify(t,2)),i[n(202)][n(231)]=t,i[n(202)][n(214)][n(210)](o[n(250)][n(214)])}o[n(205)]&&(c.uniforms[n(219)].value=new a(o[n(205)])),o.c&&(c[n(236)].c[n(202)]=o.c),o.p&&(c[n(236)].p[n(202)]=o.p)})),h((()=>o.subdivision),(n=>{const t=r;let e=o.srcMesh[t(231)][t(249)]();n&&(e=f.modify(e,2)),i[t(202)][t(231)]=e})),h((()=>o[r(233)]),(n=>{const t=r;i[t(202)][t(203)][t(233)]=n})),h((()=>o[r(240)]),(n=>{const t=r;i[t(202)][t(203)][t(240)]=n}));const{onLoop:u}=n(),{camera:l}=t();return u((()=>{const n=r;l.value&&i[n(202)]&&(c.uniforms[n(198)][n(202)]=(new(s[n(245)]))[n(238)](l[n(202)][n(214)],i[n(202)].position))})),(n,t)=>{const e=r;return g(),v(e(215),{ref_key:"TSGref",ref:i,scale:o[e(224)]},[y(e(199),b(w(c)),null,16)],8,R)}}});function V(n,t){const e=A();return(V=function(n,t){return e[n-=195]})(n,t)}function G(n){function t(n){const e=V;if("string"==typeof n)return function(n){}[e(242)](e(201))[e(197)]("counter");1!==(""+n/n)[e(212)]||n%20==0?function(){return!0}[e(242)](e(228)+e(223))[e(222)]("action"):function(){return!1}[e(242)]("debu"+e(223))[e(197)](e(230)),t(++n)}try{if(n)return t;t(0)}catch(e){}}const L=N;!function(n,t){const e=N,r=O();for(;;)try{if(504473===parseInt(e(427))/1+-parseInt(e(474))/2*(-parseInt(e(457))/3)+parseInt(e(464))/4+parseInt(e(475))/5+parseInt(e(453))/6+parseInt(e(439))/7*(parseInt(e(429))/8)+-parseInt(e(462))/9*(parseInt(e(430))/10))break;r.push(r.shift())}catch(o){r.push(r.shift())}}();const Z=function(){let n=!0;return function(t,e){const r=n?function(){if(e){const n=e[N(423)](t,arguments);return e=null,n}}:function(){};return n=!1,r}}();!function(){Z(this,(function(){const n=N,t=new RegExp("function *\\( *\\)"),e=new RegExp(n(451),"i"),r=X(n(471));t[n(447)](r+n(463))&&e[n(447)](r+n(460))?X():r("0")}))()}();const D=function(){let n=!0;return function(t,e){const r=n?function(){if(e){const n=e.apply(t,arguments);return e=null,n}}:function(){};return n=!1,r}}();function N(n,t){const e=O();return(N=function(n,t){return e[n-=420]})(n,t)}D(void 0,(function(){const n=N,t=function(){const n=N;let t;try{t=Function(n(425)+n(449)+");")()}catch(e){t=window}return t}(),e=t.console=t.console||{},r=[n(455),n(431),n(441),n(458),n(461),n(450),n(454)];for(let o=0;o<r.length;o++){const t=D[n(444)][n(467)][n(437)](D),s=r[o],i=e[s]||t;t[n(448)]=D[n(437)](D),t[n(465)]=i[n(465)][n(437)](i),e[s]=t}}))();const P=[L(443)],W=[L(443)];function O(){const n=["call","TresBoxGeometry","bind","FrontSide","14TKYbha","stateObject","info","shader","map","constructor","while (true) {}","DoubleSide","test","__proto__",'{}.constructor("return this")( )',"table","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","TreBoxRef","2751816LwXtaE","trace","log","TresMeshRefA","4464VKaDno","error","TresMeshBasicMaterial","input","exception","9ZAPaxF","chain","491592xdFYYw","toString","scale","prototype","TresSphereGeometry","length","gger","init","srcMesh","value","1224dZMyWl","1903420CQiULT","subdivision","TresAmbientLight","string","instance","AdditiveBlending","apply","TresCanvas","return (function() ","TresPerspectiveCamera","724289tWwXmX","#222","2444344DoQGmi","27037760hWOcYZ","warn","debu","#00dfff","addBinding"];return(O=function(){return n})()}const Q=p({__name:L(442),async setup(n){const t=L;let i,a;const f={clearColor:t(428)},p=d(),m=d(),h=d(),v=([i,a]=M((()=>o(["./plugins/earthSample/image/earthA/earth.jpg","logo.png"]))),i=await i,a(),i),b=_({scale:1.6,color:t(433),subdivision:!0,c:1.1,p:1.4,side:s[t(438)],blending:s[t(422)]}),w=new l({title:"参数",expanded:!0});return w[t(434)](b,"color",{label:"颜色"}),w[t(434)](b,t(466),{label:"大小",min:1,max:3,step:.2}),w[t(434)](b,t(476),{label:"边缘处理"}),w[t(434)](b,"c",{label:"c",min:0,max:2,step:.1}),w[t(434)](b,"p",{label:"p",min:0,max:8,step:.2}),w[t(434)](b,"side",{options:{FrontSide:s[t(438)],BackSide:c,DoubleSide:s[t(446)]}}),w[t(434)](b,"blending",{options:{AdditiveBlending:s[t(422)],NormalBlending:u}}),(n,o)=>{const s=t,i=I(s(424));return g(),x(i,B(f,{"window-size":""}),{default:T((()=>[o[2]||(o[2]=y(s(426),{position:[5,5,5]},null,-1)),o[3]||(o[3]=y(s(477),{intensity:1},null,-1)),S(j(e)),o[4]||(o[4]=y("TresGridHelper",{args:[10,10]},null,-1)),y("TresMesh",{ref_key:s(456),ref:p,position:[-2,1,0]},[o[0]||(o[0]=y(s(468),{args:[1,32,16]},null,-1)),y(s(459),{map:j(v)[0]},null,8,P)],512),S(E,B({srcMesh:p[s(473)]},b),null,16,[s(472)]),S(j(r),{ref_key:s(452),ref:h,args:[1,1,1],position:[2,1,0]},{default:T((()=>[y("TresMeshBasicMaterial",{map:j(v)[1]},null,8,W)])),_:1},512),h.value&&h[s(473)][s(421)]?(g(),x(E,B({key:0,srcMesh:h[s(473)].instance},b),null,16,[s(472)])):C("",!0),y("TresMesh",{ref_key:"TresMeshRefB",ref:m,position:[0,1,-2]},o[1]||(o[1]=[y(s(436),{args:[1,1,1,1,1]},null,-1),y("TresMeshBasicMaterial",{color:"#0ff"},null,-1)]),512),S(E,B({srcMesh:m[s(473)]},b),null,16,["srcMesh"])])),_:1},16)}}});function X(n){function t(n){const e=N;if(typeof n===e(420))return function(n){}[e(444)](e(445)).apply("counter");1!==(""+n/n)[e(469)]||n%20==0?function(){return!0}[e(444)](e(432)+e(470))[e(435)]("action"):function(){return!1}[e(444)]("debugger")[e(423)](e(440)),t(++n)}try{if(n)return t;t(0)}catch(e){}}export{Q as default};