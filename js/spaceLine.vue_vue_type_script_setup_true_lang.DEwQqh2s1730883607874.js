import{a as t,e as n,W as e}from"./@tresjs.C3WO4ZW41730883607874.js";import{a3 as r,_ as o,$ as a}from"./three.fIUcjaNz1730883607874.js";import{d as s,a6 as i,w as c,o as u,D as l,J as f,u as p,j as d}from"./@vue.Cfu43fwq1730883607874.js";const g=S;function m(){const t=["Color","TresMesh","clockwise","input","gger","2jNIhWV","chain","wrapT","forEach","#ffffff","debu","console","vertexShader","3432FWZgSn","radius","baseMaterial","constructor","fragmentShader","623004MikVIA","magFilter","radialSegments","3944TXNzbx","action","5038548xzoYqe","log","659964uqYMgB","tubularSegments","wrapS","toString","5ccdTFk","info","33030jDUKti","fromArray","repeat","exception","DoubleSide","Vector3","linesList","speed","uColor2","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","string","CatmullRomCurve3","color2","color","test","NearestFilter","warn",'{}.constructor("return this")( )',"init","fewNum","2446893RavkpZ","error","closed","function *\\( *\\)","map","\n\t\t\t\tvoid main() {\n\t\t\t\t\tcsm_Position = position * vec3(1.0);\n\t\t\t\t}\n\t\t\t","apply","blending","2024949YpnglS","TresTubeGeometry","call","needsUpdate","AdditiveBlending","value","stateObject","bind","rotation","set","2639aBgQVJ","uniforms","length"];return(m=function(){return t})()}!function(t,n){const e=S,r=m();for(;;)try{if(437730===parseInt(e(356))/1*(-parseInt(e(336))/2)+parseInt(e(318))/3+parseInt(e(349))/4+-parseInt(e(288))/5*(-parseInt(e(354))/6)+-parseInt(e(328))/7*(-parseInt(e(352))/8)+parseInt(e(310))/9+-parseInt(e(290))/10*(parseInt(e(344))/11))break;r.push(r.shift())}catch(o){r.push(r.shift())}}();const h=function(){let t=!0;return function(n,e){const r=t?function(){if(e){const t=e[S(316)](n,arguments);return e=null,t}}:function(){};return t=!1,r}}();!function(){h(this,(function(){const t=S,n=new RegExp(t(313)),e=new RegExp(t(299),"i"),r=I(t(308));n[t(304)](r+t(337))&&e[t(304)](r+t(334))?I():r("0")}))()}();const w=function(){let t=!0;return function(n,e){const r=t?function(){if(e){const t=e[S(316)](n,arguments);return e=null,t}}:function(){};return t=!1,r}}();w(void 0,(function(){const t=S,n=function(){const t=S;let n;try{n=Function("return (function() "+t(307)+");")()}catch(e){n=window}return n}(),e=n.console=n[t(342)]||{},r=[t(355),t(306),t(289),t(311),t(293),"table","trace"];for(let o=0;o<r[t(330)];o++){const n=w[t(347)].prototype[t(325)](w),a=r[o],s=e[a]||n;n.__proto__=w[t(325)](w),n[t(287)]=s[t(287)].bind(s),e[a]=n}}))();const b={renderOrder:999999},_=["args"];function S(t,n){const e=m();return(S=function(t,n){return e[t-=285]})(t,n)}const v=s({__name:"spaceLine",props:{color:{default:"#ff6700"},color2:{default:g(340)},radius:{default:.2},speed:{default:1},radialSegments:{default:6},tubularSegments:{default:64},closed:{type:Boolean,default:!1},clockwise:{type:Boolean,default:!0},fewNum:{default:1},linesList:{default:[[15,0,15],[15,0,-15],[-15,0,-15],[-15,0,10],[15,0,15]]}},async setup(s){const m=g;let h,w;const S=s,{map:v}=([h,w]=i((()=>t({map:"./plugins/digitalMapBlock/images/bwPath.png"}))),h=await h,w(),h);v[m(321)]=!0,v[m(286)]=v[m(338)]=r,v[m(292)][m(327)](S[m(309)],1),v[m(326)]=S[m(333)]?0:Math.PI,v.generateMipmaps=!1,v[m(350)]=o[m(305)];let I=[];S[m(296)][m(339)]((t=>{const n=m;I.push((new(o[n(295)]))[n(291)](t))}));const C=new(o[m(301)])(I),{onLoop:y}=n();y((()=>{const t=m;v.offset.x+=.002*S[t(297)]})),c((()=>[S[m(333)],S[m(309)]]),(([t,n])=>{const e=m;v[e(326)]=t?0:Math.PI,v[e(292)][e(327)](n,1)}));const F={vertexShader:m(315),fragmentShader:"\n\t\tuniform vec3 uColor2;\n      void main () {\n\t\t\t\t\tif(csm_FragColor.r < 0.001 && csm_FragColor.g < 0.001 && csm_FragColor.b < 0.001){\n\t\t\t\t\t\tcsm_FragColor = vec4(uColor2,1.0);\n\t\t\t\t\t}else{\n          \tcsm_FragColor = csm_FragColor;\n\t\t\t\t\t}\n\t\t\t}\n\t\t",uniforms:{uColor2:{value:new(o[m(331)])(S.color2)}}};return c((()=>S[m(302)]),(t=>{const n=m;F[n(329)][n(298)][n(323)]=new(o[n(331)])(t)})),(t,n)=>{const r=m;return u(),l(r(332),b,[f(r(319),{args:[p(C),S[r(285)],S[r(345)],S[r(351)],S[r(312)]]},null,8,_),d(p(e),{baseMaterial:a,vertexShader:F[r(343)],fragmentShader:F[r(348)],uniforms:F[r(329)],side:o[r(294)],flatShading:!1,blending:o[r(322)],map:p(v),alphaMap:p(v),transparent:!0,color:S[r(303)],depthTest:!0,depthWrite:!1,silent:""},null,8,[r(346),r(343),r(348),r(329),"side",r(317),r(314),"alphaMap",r(303)])])}}});function I(t){function n(t){const e=S;if(typeof t===e(300))return function(t){}[e(347)]("while (true) {}")[e(316)]("counter");1!==(""+t/t).length||t%20==0?function(){return!0}[e(347)](e(341)+"gger")[e(320)](e(353)):function(){return!1}[e(347)]("debu"+e(335))[e(316)](e(324)),n(++t)}try{if(t)return n;n(0)}catch(e){}}export{v as _};