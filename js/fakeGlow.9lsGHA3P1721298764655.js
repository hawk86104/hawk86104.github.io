import{d as n,H as t}from"./@tresjs.iXEJQd7J1721298764655.js";import{k as o,ba as e,C as r,aN as i,Z as a,a6 as s,x as l}from"./three.0bBjBDi41721298764655.js";import{P as c}from"./tweakpane.yHWGBmom1721298764655.js";import{d as u,r as f,a1 as p,e as d,o as g,f as m,g as v,j as h,u as w,J as y,al as b}from"./@vue.Q1VpS3901721298764655.js";import"./@vueuse.hS-CVzal1721298764655.js";function I(n,t){var o=_();return(I=function(n,t){return o[n-=298]})(n,t)}!function(n,t){for(var o=I,e=_();;)try{if(140155===parseInt(o(300))/1+parseInt(o(339))/2*(-parseInt(o(329))/3)+-parseInt(o(321))/4+parseInt(o(323))/5+parseInt(o(340))/6+parseInt(o(316))/7*(-parseInt(o(334))/8)+parseInt(o(303))/9*(-parseInt(o(325))/10))break;e.push(e.shift())}catch(r){e.push(e.shift())}}();var x=function(){var n=!0;return function(t,o){var e=n?function(){if(o){var n=o[I(299)](t,arguments);return o=null,n}}:function(){};return n=!1,e}}();!function(){x(this,(function(){var n=new RegExp(I(324)),t=new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","i"),o=P("init");n.test(o+"chain")&&t.test(o+"input")?P():o("0")}))()}();var j=function(){var n=!0;return function(t,o){var e=n?function(){if(o){var n=o[I(299)](t,arguments);return o=null,n}}:function(){};return n=!1,e}}();j(void 0,(function(){var n,t=I;try{n=Function(t(337)+t(342)+");")()}catch(l){n=window}for(var o=n[t(306)]=n[t(306)]||{},e=[t(304),t(312),t(319),"error","exception","table","trace"],r=0;r<e[t(314)];r++){var i=j[t(322)][t(320)][t(311)](j),a=e[r],s=o[a]||i;i.__proto__=j[t(311)](j),i.toString=s[t(315)].bind(s),o[a]=i}}))();const S=class extends o{constructor(n={}){var t=I;super(),this[t(307)]=t(338),this[t(317)]="\n      uniform vec3 glowColor;\n      uniform float falloff;\n      uniform float glowSharpness;\n      uniform float glowInternalRadius;\n      uniform float opacity;\n\n      varying vec3 vPosition;\n      varying vec3 vNormal;\n\n      void main()\n      {\n        // Normal\n        vec3 normal = normalize(vNormal);\n        if(!gl_FrontFacing)\n            normal *= - 1.0;\n        vec3 viewDirection = normalize(cameraPosition - vPosition);\n        float fresnel = dot(viewDirection, normal);\n        fresnel = pow(fresnel, glowInternalRadius + 0.1);\n        float falloff = smoothstep(0., falloff, fresnel);\n        float fakeGlow = fresnel;\n        fakeGlow += fresnel * glowSharpness;\n        fakeGlow *= falloff;\n        gl_FragColor = vec4(clamp(glowColor * fresnel, 0., 1.0), clamp(fakeGlow, 0., opacity));\n\n        #include <tonemapping_fragment>\n        #include <colorspace_fragment>\n      } \n      ",this.uniforms={opacity:new e(void 0!==n[t(318)]?n.opacity:1),glowInternalRadius:new e(void 0!==n[t(327)]?n[t(327)]:6),glowSharpness:new e(void 0!==n[t(302)]?n[t(302)]:.5),falloff:new e(void 0!==n.falloff?n[t(330)]:.1),glowColor:new e(void 0!==n[t(309)]?new r(n[t(309)]):new r(t(313)))},this[t(301)](n),this.depthTest=void 0!==n[t(336)]&&n[t(336)],this[t(326)]=void 0!==n.blendMode?n[t(305)]:i,this[t(341)]=!0,this[t(298)]=void 0!==n[t(298)]?n[t(298)]:a}};function _(){var n=["warn","#00d5ff","length","toString","126jLQeep","fragmentShader","opacity","info","prototype","252244lUyqXP","constructor","881980WNyAff","function *\\( *\\)","20zPhdoI","blending","glowInternalRadius","debu","2178BxEcJX","falloff","string","stateObject","counter","67672pHWZxV","call","depthTest","return (function() ","\n      varying vec3 vPosition;\n      varying vec3 vNormal;\n\n      void main() {\n        vec4 modelPosition = modelMatrix * vec4(position, 1.0);\n        gl_Position = projectionMatrix * viewMatrix * modelPosition;\n        vec4 modelNormal = modelMatrix * vec4(normal, 0.0);\n        vPosition = modelPosition.xyz;\n        vNormal = modelNormal.xyz;\n\n      }\n    ","352NZpKDx","618840cZbfTa","transparent",'{}.constructor("return this")( )',"side","apply","266336ICRCqS","setValues","glowSharpness","281781ppPfpZ","log","blendMode","console","vertexShader","gger","glowColor","while (true) {}","bind"];return(_=function(){return n})()}function P(n){function t(n){var o=I;if(typeof n===o(331))return function(n){}[o(322)](o(310)).apply(o(333));1!==(""+n/n).length||n%20==0?function(){return!0}[o(322)](o(328)+o(308))[o(335)]("action"):function(){return!1}[o(322)]("debu"+o(308)).apply(o(332)),t(++n)}try{if(n)return t;t(0)}catch(o){}}const T=D;!function(n,t){const o=D,e=F();for(;;)try{if(404759===parseInt(o(402))/1*(parseInt(o(384))/2)+parseInt(o(374))/3+parseInt(o(413))/4*(-parseInt(o(420))/5)+-parseInt(o(383))/6+-parseInt(o(434))/7*(parseInt(o(371))/8)+-parseInt(o(386))/9*(parseInt(o(408))/10)+parseInt(o(414))/11)break;e.push(e.shift())}catch(r){e.push(e.shift())}}();const R=function(){let n=!0;return function(t,o){const e=n?function(){if(o){const n=o[D(411)](t,arguments);return o=null,n}}:function(){};return n=!1,e}}();!function(){R(this,(function(){const n=D,t=new RegExp(n(405)),o=new RegExp(n(425),"i"),e=A(n(395));t.test(e+n(429))&&o[n(436)](e+n(406))?A():e("0")}))()}();const k=function(){let n=!0;return function(t,o){const e=n?function(){if(o){const n=o[D(411)](t,arguments);return o=null,n}}:function(){};return n=!1,e}}();k(void 0,(function(){const n=D,t=function(){const n=D;let t;try{t=Function("return (function() "+n(421)+");")()}catch(o){t=window}return t}(),o=t[n(435)]=t.console||{},e=[n(400),n(385),"info","error","exception",n(382),n(398)];for(let r=0;r<e[n(375)];r++){const t=k[n(431)][n(403)].bind(k),i=e[r],a=o[i]||t;t[n(428)]=k[n(426)](k),t[n(380)]=a[n(380)][n(426)](a),o[i]=t}}))();const C=y(T(401),{position:[0,25,25],near:.1,fov:65},null,-1),M=y(T(392),{intensity:1.5},null,-1),z=y(T(381),{position:[100,100,60],intensity:20},null,-1),N=y(T(378),{args:[20,10]},null,-1),G={position:[0,6,0]},Z=y("TresMesh",null,[y("TresTorusKnotGeometry",{args:[4,.5,128,128]}),y("TresMeshPhysicalMaterial",{color:T(427),roughness:.2,clearcoat:1})],-1),B=["object"];function D(n,t){const o=F();return(D=function(n,t){return o[n-=369]})(n,t)}function F(){const n=["fakeGlow","string","TresGroup","3612515RZmBhl",'{}.constructor("return this")( )',"材质面","pos-y.jpg","glowColor","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","bind","blue","__proto__","chain","Mesh","constructor","Color","pos-z.jpg","84lpjZPS","console","test","action","DoubleSide","326312DNQOEv","内半径","addBinding","1114263WyHwFy","length","debu","opacity","TresGridHelper","TorusKnotGeometry","toString","TresDirectionalLight","table","189078MfGWjH","2sjfOtp","warn","9gtHctM","glowSharpness","value","pos-x.jpg","counter","uniforms","TresAmbientLight","FrontSide","glowInternalRadius","init","gger","neg-x.jpg","trace","TresCanvas","log","TresPerspectiveCamera","251347dNrecG","prototype","BackSide","function *\\( *\\)","input","https://opensource-1314935952.cos.ap-nanjing.myqcloud.com/images/skyBox/6jpg/","5308430relOQh","stateObject","call","apply","neg-y.jpg","4HbMLXU","17119498poDWrK","side","while (true) {}"];return(F=function(){return n})()}const H=u({__name:T(417),setup(o){const e=T,r=new c({title:"辉光参数",expanded:!0}),i=f({glowColor:"#a058c1",falloff:1.4,glowInternalRadius:3.7,glowSharpness:0,opacity:1,side:s[e(393)],depthTest:!1}),a=new S,u=new(s[e(430)])(new(s[e(379)])(4,3.8,128,128),a);return r[e(373)](i,e(424),{label:"颜色"}),r[e(373)](i,"falloff",{label:"衰减",min:0,max:10,step:.1}),r[e(373)](i,e(394),{label:e(372),min:-5,max:5,step:.1}),r.addBinding(i,e(387),{label:"清晰度",min:0,max:10,step:.1}),r[e(373)](i,e(377),{label:"透明",min:0,max:1,step:.1}),r.addBinding(i,"side",{label:e(422),options:{FrontSide:l,BackSide:s[e(404)],DoubleSide:s[e(370)]}}),p((()=>{const n=e;a[n(391)].falloff[n(388)]=i.falloff,a[n(391)][n(424)][n(388)]=new(s[n(432)])(i[n(424)]),a[n(391)].glowInternalRadius[n(388)]=i[n(394)],a.uniforms.glowSharpness[n(388)]=i.glowSharpness,a.uniforms[n(377)].value=i.opacity,a[n(415)]=i.side})),(o,r)=>{const i=e,a=d(i(399));return g(),m(a,{"window-size":""},{default:v((()=>[C,M,z,h(w(n),{autoRotate:""}),N,y(i(419),G,[Z,y("primitive",{object:w(u)},null,8,B)]),(g(),m(b,null,{default:v((()=>[h(w(t),{files:[i(389),i(397),i(423),i(412),i(433),"neg-z.jpg"],path:i(407)})])),_:1}))])),_:1})}}});function A(n){function t(n){const o=D;if(typeof n===o(418))return function(n){}.constructor(o(416))[o(411)](o(390));1!==(""+n/n)[o(375)]||n%20==0?function(){return!0}.constructor(o(376)+o(396))[o(410)](o(369)):function(){return!1}[o(431)](o(376)+o(396))[o(411)](o(409)),t(++n)}try{if(n)return t;t(0)}catch(o){}}export{H as default};