import{p as t,$ as n,d as e}from"./@tresjs.DDzpLB7Q1725236486446.js";import{bV as r,bX as o,bW as s,a6 as u,c7 as c,c8 as i,c5 as a,c9 as l}from"./three.0IuNGJsA1725236486446.js";import{d as f,b as p,a1 as h,o as d,D as v,J as g,F as m,e as x,f as w,g as b,j as y,u as I}from"./@vue.9bHx4gg21725236486446.js";import"./tweakpane.yHWGBmom1725236486446.js";import"./@vueuse.XXpXaOwX1725236486446.js";const T=z;!function(t,n){const e=z,r=U();for(;;)try{if(126482===parseInt(e(285))/1*(parseInt(e(247))/2)+-parseInt(e(265))/3*(-parseInt(e(293))/4)+parseInt(e(235))/5+parseInt(e(294))/6*(parseInt(e(256))/7)+-parseInt(e(258))/8*(-parseInt(e(254))/9)+parseInt(e(290))/10*(-parseInt(e(253))/11)+-parseInt(e(244))/12*(parseInt(e(284))/13))break;r.push(r.shift())}catch(o){r.push(r.shift())}}();const _=function(){let t=!0;return function(n,e){const r=t?function(){if(e){const t=e[z(267)](n,arguments);return e=null,t}}:function(){};return t=!1,r}}();!function(){_(this,(function(){const t=z,n=new RegExp(t(243)),e=new RegExp(t(249),"i"),r=A("init");n[t(279)](r+t(263))&&e[t(279)](r+t(228))?A():r("0")}))()}();const S=function(){let t=!0;return function(n,e){const r=t?function(){if(e){const t=e[z(267)](n,arguments);return e=null,t}}:function(){};return t=!1,r}}();S(void 0,(function(){const t=z;let n;try{n=Function(t(273)+t(257)+");")()}catch(o){n=window}const e=n[t(255)]=n[t(255)]||{},r=[t(240),t(283),t(261),t(275),"exception",t(234),"trace"];for(let s=0;s<r[t(260)];s++){const n=S[t(250)].prototype[t(242)](S),o=r[s],u=e[o]||n;n[t(270)]=S.bind(S),n[t(292)]=u.toString.bind(u),e[o]=n}}))();const k=[g("TresBoxGeometry",{args:[1,1,1]},null,-1),g(T(276),null,null,-1)],j=[g(T(239),{args:[1,1,1]},null,-1),g(T(276),null,null,-1)],D=[g(T(239),{args:[1,1,1]},null,-1),g(T(276),null,null,-1)],M=[g("TresSphereGeometry",{args:[.8,32,16]},null,-1),g(T(276),null,null,-1)];function U(){const t=["render","return (function() ","normalBox","error","TresMeshNormalMaterial","shineBox","renderToScreen","test","layers","ecLayerMultiple","stateObject","warn","2950324UoUUqw","1186nDtWXd","Vector2","radius","clearDepth","gger","201410gecuks","action","toString","17288KMaxHV","67008kwHgdS","input","counter","TresMesh","\n            uniform sampler2D baseTexture;\n            uniform sampler2D bloomTexture;\n\t\t\t\t\t\tuniform sampler2D filmTexture;\n\t\t\t\t\t\tuniform sampler2D glitchTexture;\n            varying vec2 vUv;\n            void main() {\n                gl_FragColor = ( \n\t\t\t\t\t\t\t\t\tvec4( 1.0 ) * texture2D( baseTexture, vUv )  + \n\t\t\t\t\t\t\t\t\tvec4( 1.0 ) * texture2D( bloomTexture, vUv ) + \n\t\t\t\t\t\t\t\t\tvec4( 1.0 ) * texture2D( filmTexture, vUv ) + \n\t\t\t\t\t\t\t\t\tvec4( 1.0 ) * texture2D( glitchTexture, vUv ) \n\t\t\t\t\t\t\t\t);\n            }\n        ","while (true) {}","texture","table","322950JwHsSf","debu","baseTexture","filmBox","TresBoxGeometry","log","needsSwap","bind","function *\\( *\\)","12bNXucy","height","renderTarget2","106tIkxet","uniforms","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","constructor","glitchSphere","getDrawingBufferSize","44XRQAip","26496RAYMtQ","console","70naFfpE",'{}.constructor("return this")( )',"48zKhJUE","width","length","info","string","chain","value","123JBfrxb","ShaderMaterial","apply","strength","addPass","__proto__","set"];return(U=function(){return t})()}const B=f({__name:T(281),setup(e){const f=p(),x=p(),w=p(),b=p();h((()=>{const t=z;f.value&&f[t(264)].layers[t(271)](0),x[t(264)]&&x[t(264)].layers.set(1),w.value&&w[t(264)][t(280)][t(271)](2),b[t(264)]&&b[t(264)][t(280)][t(271)](3)}));const{camera:y,renderer:I,scene:T,sizes:_}=t(),S={strength:.572,radius:.51,threshold:0};let U=null,B=null;let A=null;let R=null;let C=null;h((()=>{const t=z;_[t(259)].value&&(((t,n,e,c,i)=>{const a=z;U=new r(t,n),B=new o(e),B.renderToScreen=!1,B[a(269)](U);const l=new s(new(u[a(286)])(c,i),S[a(268)],S[a(287)],S.threshold);B[a(269)](l)})(T[t(264)],y[t(264)],I.value,_[t(259)][t(264)],_[t(245)].value),(t=>{const n=z;R=new o(t),R[n(278)]=!1,R[n(269)](U);const e=new i;R[n(269)](e)})(I[t(264)]),(t=>{const n=z;A=new o(t),A[n(278)]=!1,A[n(269)](U);const e=new c;A[n(269)](e)})(I[t(264)]),(t=>{const n=z;C=new o(t),C[n(269)](U);const e=new(u[n(266)])({uniforms:{baseTexture:{value:null},bloomTexture:{value:B[n(246)][n(233)]},filmTexture:{value:A[n(246)][n(233)]},glitchTexture:{value:R[n(246)][n(233)]}},vertexShader:"\n            varying vec2 vUv;\n            void main() {\n                vUv = uv;\n                gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n            }\n        ",fragmentShader:n(231),defines:{}}),r=new a(e,n(237));r[n(241)]=!0,C.addPass(r);const{width:s,height:c}=t[n(252)](new(u[n(286)])),i=new a(l);i[n(248)].resolution[n(264)][n(271)](1/s,1/c),C[n(269)](i)})(I[t(264)]))}));const{onLoop:E}=n();return E((()=>{const t=z;B&&C&&y[t(264)]&&(I[t(264)].clear(),y[t(264)][t(280)][t(271)](1),B.render(),y[t(264)][t(280)].set(2),A[t(272)](),y[t(264)][t(280)][t(271)](3),R.render(),I.value[t(288)](),y.value[t(280)][t(271)](0),C[t(272)](T.value,y[t(264)]))})),(t,n)=>{const e=z;return d(),v(m,null,[g(e(230),{ref_key:e(274),ref:f,position:[3,2,1]},k,512),g(e(230),{ref_key:e(277),ref:x,position:[0,2,-4]},j,512),g(e(230),{ref_key:e(238),ref:w,position:[1,2,3]},D,512),g(e(230),{ref_key:e(251),ref:b,position:[-3,2,0]},M,512)],64)}}});function z(t,n){const e=U();return(z=function(t,n){return e[t-=228]})(t,n)}function A(t){function n(t){const e=z;if(typeof t===e(262))return function(t){}[e(250)](e(232)).apply(e(229));1!==(""+t/t).length||t%20==0?function(){return!0}[e(250)]("debu"+e(289)).call(e(291)):function(){return!1}.constructor(e(236)+e(289))[e(267)](e(282)),n(++t)}try{if(t)return n;n(0)}catch(e){}}const R=O;!function(t,n){const e=O,r=E();for(;;)try{if(352792===-parseInt(e(214))/1*(-parseInt(e(186))/2)+parseInt(e(211))/3+-parseInt(e(212))/4+-parseInt(e(221))/5*(parseInt(e(208))/6)+parseInt(e(217))/7+parseInt(e(201))/8*(parseInt(e(222))/9)+parseInt(e(198))/10)break;r.push(r.shift())}catch(o){r.push(r.shift())}}();const C=function(){let t=!0;return function(n,e){const r=t?function(){if(e){const t=e[O(206)](n,arguments);return e=null,t}}:function(){};return t=!1,r}}();function E(){const t=["action","counter","constructor","autoClear","length","17494JgCvqB","return (function() ","value","console","exception","context","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","function *\\( *\\)",'{}.constructor("return this")( )',"warn","toString","while (true) {}","4441510Bdfdhr","manual","debu","45400OCeAle","tcRef","TresCanvas","renderer","prototype","apply","log","2434062hvTFKS","error","table","276828eLIxNN","1438648VfgObs","TresGridHelper","26jydqeK","test","effectComposerMultiple","851249EkIKSY","init","input","chain","5ppRZmO","369NoxxSi","gger"];return(E=function(){return t})()}!function(){C(this,(function(){const t=O,n=new RegExp(t(193)),e=new RegExp(t(192),"i"),r=Z(t(218));n[t(215)](r+t(220))&&e[t(215)](r+t(219))?Z():r("0")}))()}();const F=function(){let t=!0;return function(n,e){const r=t?function(){if(e){const t=e[O(206)](n,arguments);return e=null,t}}:function(){};return t=!1,r}}();F(void 0,(function(){const t=O;let n;try{n=Function(t(187)+t(194)+");")()}catch(o){n=window}const e=n[t(189)]=n[t(189)]||{},r=[t(207),t(195),"info",t(209),t(190),t(210),"trace"];for(let s=0;s<r[t(185)];s++){const n=F.constructor[t(205)].bind(F),o=r[s],u=e[o]||n;n.__proto__=F.bind(F),n.toString=u[t(196)].bind(u),e[o]=n}}))();const J=g("TresPerspectiveCamera",{position:[10,10,10]},null,-1),K=g("TresAmbientLight",{intensity:1},null,-1),N=g(R(213),{args:[10,10]},null,-1);function O(t,n){const e=E();return(O=function(t,n){return e[t-=183]})(t,n)}const V=f({__name:R(216),setup(t){const n=p();return h((()=>{const t=O;if(n.value){n.value[t(191)][t(204)][t(188)][t(184)]=!1}})),(t,r)=>{const o=O,s=x(o(203));return d(),w(s,{renderMode:o(199),"window-size":"",ref_key:o(202),ref:n},{default:b((()=>[J,K,y(I(e)),N,y(B)])),_:1},512)}}});function Z(t){function n(t){const e=O;if("string"==typeof t)return function(t){}[e(183)](e(197)).apply(e(225));1!==(""+t/t)[e(185)]||t%20==0?function(){return!0}[e(183)](e(200)+e(223)).call(e(224)):function(){return!1}.constructor("debugger")[e(206)]("stateObject"),n(++t)}try{if(t)return n;n(0)}catch(e){}}export{V as default};