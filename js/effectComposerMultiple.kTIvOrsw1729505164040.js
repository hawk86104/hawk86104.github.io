import{p as t,U as n,Y as e}from"./@tresjs.IsKybBdF1729505164040.js";import{bX as r,bZ as o,bY as s,k as u,c8 as c,c9 as i,m as a,c6 as l,_ as f,ca as p}from"./three.YREzp-_G1729505164040.js";import{d as h,b as v,a3 as m,o as g,E as d,L as y,F as x,e as w,f as T,g as b,j as _,u as I}from"./@vue.JNsx1iN61729505164040.js";import"./@vueuse.9dhnH8nd1729505164040.js";function M(){const t=["2404750JgwIhC","chain","bind","log","gger","getDrawingBufferSize","renderTarget2","toString","error","debu","exception","resolution","while (true) {}",'{}.constructor("return this")( )',"953571mYtqkK","TresBoxGeometry","return (function() ","set","2616bYFeOf","glitchSphere","18939372MKVLRd","layers","needsSwap","clearDepth","test","Vector2","apply","addPass","TresMesh","baseTexture","5680JZQNEf","console","trace","renderToScreen","uniforms","strength","658910WkOppD","function *\\( *\\)","filmBox","25263UXLyMj","2yZqMsk","warn","TresMeshNormalMaterial","init","prototype","width","action","render","info","texture","constructor","2357327xBWdAi","table","42vKQFDR","\n            varying vec2 vUv;\n            void main() {\n                vUv = uv;\n                gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n            }\n        ","value","99VHTPBN","length","call","6isrjFC","threshold","height"];return(M=function(){return t})()}const D=B;!function(t,n){const e=B,r=M();for(;;)try{if(537751===parseInt(e(156))/1*(parseInt(e(120))/2)+parseInt(e(133))/3*(parseInt(e(110))/4)+parseInt(e(142))/5+parseInt(e(139))/6*(parseInt(e(131))/7)+parseInt(e(160))/8*(parseInt(e(119))/9)+-parseInt(e(116))/10*(parseInt(e(136))/11)+-parseInt(e(100))/12)break;r.push(r.shift())}catch(o){r.push(r.shift())}}();const j=function(){let t=!0;return function(n,e){const r=t?function(){if(e){const t=e[B(106)](n,arguments);return e=null,t}}:function(){};return t=!1,r}}();!function(){j(this,(function(){const t=B,n=new RegExp(t(117)),e=new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","i"),r=A(t(123));n[t(104)](r+t(143))&&e[t(104)](r+"input")?A():r("0")}))()}();const k=function(){let t=!0;return function(n,e){const r=t?function(){if(e){const t=e.apply(n,arguments);return e=null,t}}:function(){};return t=!1,r}}();k(void 0,(function(){const t=B,n=function(){const t=B;let n;try{n=Function(t(158)+t(155)+");")()}catch(e){n=window}return n}(),e=n[t(111)]=n[t(111)]||{},r=[t(145),t(121),t(128),t(150),t(152),t(132),t(112)];for(let o=0;o<r[t(137)];o++){const n=k.constructor[t(124)].bind(k),s=r[o],u=e[s]||n;n.__proto__=k[t(144)](k),n[t(149)]=u[t(149)][t(144)](u),e[s]=n}}))();const S=[y(D(157),{args:[1,1,1]},null,-1),y(D(122),null,null,-1)],U=[y(D(157),{args:[1,1,1]},null,-1),y(D(122),null,null,-1)],C=[y(D(157),{args:[1,1,1]},null,-1),y("TresMeshNormalMaterial",null,null,-1)],Z=[y("TresSphereGeometry",{args:[.8,32,16]},null,-1),y(D(122),null,null,-1)];function B(t,n){const e=M();return(B=function(t,n){return e[t-=100]})(t,n)}const z=h({__name:"ecLayerMultiple",setup(e){const h=v(),w=v(),T=v(),b=v();m((()=>{const t=B;h[t(135)]&&h[t(135)][t(101)][t(159)](0),w.value&&w[t(135)][t(101)].set(1),T.value&&T[t(135)].layers[t(159)](2),b.value&&b[t(135)].layers.set(3)}));const{camera:_,renderer:I,scene:M,sizes:D}=t(),j={strength:.572,radius:.51,threshold:0};let k=null,z=null;let A=null;let E=null;let F=null;m((()=>{const t=B;D[t(125)][t(135)]&&(((t,n,e,c,i)=>{const a=B;k=new r(t,n),z=new o(e),z[a(113)]=!1,z[a(107)](k);const l=new s(new u(c,i),j[a(115)],j.radius,j[a(140)]);z[a(107)](l)})(M.value,_[t(135)],I.value,D[t(125)][t(135)],D[t(141)].value),(t=>{const n=B;E=new o(t),E[n(113)]=!1,E[n(107)](k);const e=new i;E[n(107)](e)})(I[t(135)]),(t=>{const n=B;A=new o(t),A[n(113)]=!1,A[n(107)](k);const e=new c;A[n(107)](e)})(I[t(135)]),(t=>{const n=B;F=new o(t),F[n(107)](k);const e=new a({uniforms:{baseTexture:{value:null},bloomTexture:{value:z[n(148)][n(129)]},filmTexture:{value:A[n(148)][n(129)]},glitchTexture:{value:E[n(148)][n(129)]}},vertexShader:n(134),fragmentShader:"\n            uniform sampler2D baseTexture;\n            uniform sampler2D bloomTexture;\n\t\t\t\t\t\tuniform sampler2D filmTexture;\n\t\t\t\t\t\tuniform sampler2D glitchTexture;\n            varying vec2 vUv;\n            void main() {\n                gl_FragColor = ( \n\t\t\t\t\t\t\t\t\tvec4( 1.0 ) * texture2D( baseTexture, vUv )  + \n\t\t\t\t\t\t\t\t\tvec4( 1.0 ) * texture2D( bloomTexture, vUv ) + \n\t\t\t\t\t\t\t\t\tvec4( 1.0 ) * texture2D( filmTexture, vUv ) + \n\t\t\t\t\t\t\t\t\tvec4( 1.0 ) * texture2D( glitchTexture, vUv ) \n\t\t\t\t\t\t\t\t);\n            }\n        ",defines:{}}),r=new l(e,n(109));r[n(102)]=!0,F.addPass(r);const{width:s,height:u}=t[n(147)](new(f[n(105)])),c=new l(p);c[n(114)][n(153)][n(135)].set(1/s,1/u),F[n(107)](c)})(I[t(135)]))}));const{onLoop:L}=n();return L((()=>{const t=B;z&&F&&_[t(135)]&&(I.value.clear(),_[t(135)][t(101)][t(159)](1),z[t(127)](),_[t(135)][t(101)][t(159)](2),A[t(127)](),_[t(135)][t(101)][t(159)](3),E.render(),I[t(135)][t(103)](),_[t(135)][t(101)][t(159)](0),F[t(127)](M[t(135)],_[t(135)]))})),(t,n)=>{const e=B;return g(),d(x,null,[y(e(108),{ref_key:"normalBox",ref:h,position:[3,2,1]},S,512),y("TresMesh",{ref_key:"shineBox",ref:w,position:[0,2,-4]},U,512),y(e(108),{ref_key:e(118),ref:T,position:[1,2,3]},C,512),y("TresMesh",{ref_key:e(161),ref:b,position:[-3,2,0]},Z,512)],64)}}});function A(t){function n(t){const e=B;if("string"==typeof t)return function(t){}[e(130)](e(154))[e(106)]("counter");1!==(""+t/t)[e(137)]||t%20==0?function(){return!0}[e(130)](e(151)+e(146))[e(138)](e(126)):function(){return!1}.constructor(e(151)+e(146))[e(106)]("stateObject"),n(++t)}try{if(t)return n;n(0)}catch(e){}}const E=V;!function(t,n){const e=V,r=J();for(;;)try{if(334361===-parseInt(e(357))/1+parseInt(e(345))/2*(-parseInt(e(380))/3)+-parseInt(e(377))/4+-parseInt(e(351))/5+parseInt(e(359))/6*(parseInt(e(382))/7)+-parseInt(e(365))/8+parseInt(e(371))/9)break;r.push(r.shift())}catch(o){r.push(r.shift())}}();const F=function(){let t=!0;return function(n,e){const r=t?function(){if(e){const t=e[V(358)](n,arguments);return e=null,t}}:function(){};return t=!1,r}}();!function(){F(this,(function(){const t=V,n=new RegExp(t(342)),e=new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","i"),r=O("init");n.test(r+"chain")&&e[t(376)](r+t(350))?O():r("0")}))()}();const L=function(){let t=!0;return function(n,e){const r=t?function(){if(e){const t=e[V(358)](n,arguments);return e=null,t}}:function(){};return t=!1,r}}();L(void 0,(function(){const t=V,n=function(){const t=V;let n;try{n=Function(t(367)+t(356)+");")()}catch(e){n=window}return n}(),e=n[t(362)]=n[t(362)]||{},r=[t(360),t(368),t(366),"error",t(354),"table",t(361)];for(let o=0;o<r[t(379)];o++){const n=L[t(348)][t(353)][t(344)](L),s=r[o],u=e[s]||n;n[t(346)]=L[t(344)](L),n.toString=u[t(355)].bind(u),e[s]=n}}))();const N=y(E(370),{position:[10,10,10]},null,-1),R=y(E(343),{intensity:1},null,-1),P=y("TresGridHelper",{args:[10,10]},null,-1);function V(t,n){const e=J();return(V=function(t,n){return e[t-=341]})(t,n)}function J(){const t=["prototype","exception","toString",'{}.constructor("return this")( )',"384552LZjSCC","apply","6yyTDty","log","trace","console","value","counter","2217600khVJmE","info","return (function() ","warn","TresCanvas","TresPerspectiveCamera","12993435ckpKJi","debu","string","autoClear","renderer","test","1689320ymNNuu","tcRef","length","135039olNrUc","effectComposerMultiple","2808113ZUgxcP","stateObject","function *\\( *\\)","TresAmbientLight","bind","2AmyocI","__proto__","action","constructor","call","input","1907090DCBiMo","gger"];return(J=function(){return t})()}const K=h({__name:E(381),setup(t){const n=v();return m((()=>{const t=V;if(n[t(363)]){n[t(363)].context[t(375)][t(363)][t(374)]=!1}})),(t,r)=>{const o=V,s=w(o(369));return g(),T(s,{renderMode:"manual","window-size":"",ref_key:o(378),ref:n},{default:b((()=>[N,R,_(I(e)),P,_(z)])),_:1},512)}}});function O(t){function n(t){const e=V;if(typeof t===e(373))return function(t){}[e(348)]("while (true) {}").apply(e(364));1!==(""+t/t)[e(379)]||t%20==0?function(){return!0}[e(348)](e(372)+e(352))[e(349)](e(347)):function(){return!1}[e(348)](e(372)+e(352)).apply(e(341)),n(++t)}try{if(t)return n;n(0)}catch(e){}}export{K as default};