import{_ as t}from"./earth.vue_vue_type_script_setup_true_lang.O3jFJ8tT1721048663624.js";import{r as n,d as e}from"./@tresjs.Xiq_TH801721048663624.js";import{a5 as r,C as o}from"./three.HEgnMaTu1721048663624.js";import{d as u,w as i,o as c,D as s,J as a,aj as f,ak as l,r as p,e as d,f as v,g as m,j as h,u as g,al as y}from"./@vue.ApkyOKE71721048663624.js";import{P as I}from"./tweakpane.yHWGBmom1721048663624.js";import"./@vueuse.2IVIyoVR1721048663624.js";const _=T;function w(){const t=["prototype","56077MTGHPl","info","input","test","20AMnYMH","init","\n\t\t\t\t\tvarying vec2 vUv;\n                    void main(){\n\t\t\t\t\t\tvUv=uv;\n\t\t\t\t\t\tgl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n                    }","string","357mjyOfj","opacity","while (true) {}","uOpacity","value","bind","Vector2","TresShaderMaterial","action","console","apply","function *\\( *\\)","uColor","debu","__proto__","\n\t\t\t\t\tfloat PI = acos(-1.0);\n                    uniform vec3 uColor;\n                    uniform vec2 pointNum;\n                    uniform float uTime;\n                    varying vec2 vUv;\n\t\t\t\t\tuniform float uOpacity;\n                    void main(){\n\t\t\t\t\t\tvec2 uv = vUv+ vec2(0.0, uTime);\n\t\t\t\t\t\tfloat current = abs(sin(uv.y * PI));\n\t\t\t\t\t\tif(current < sin(0.4714*PI)) {\n\t\t\t\t\t\t\tcurrent=current*0.5;\n\t\t\t\t\t\t}\n\t\t\t\t\t\tfloat d = distance(fract(uv * pointNum*2.0), vec2(0.5, 0.5));\n\n\t\t\t\t\t\tif(d > current*0.2 ) {\n\t\t\t\t\t\t\tdiscard;\n\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\tgl_FragColor =vec4(uColor,current*uOpacity);\n\t\t\t\t\t\t}\n                    }","toString","table","color","log","2127851LrLeWA","trace","gger","pointsScan","return (function() ","uniforms","5mSqTVX","TresSphereGeometry","call","constructor","counter","length","error","80QsuwIl","608632cfvRRU",'{}.constructor("return this")( )',"7537986ITpmGc","18730YGXZkB","exception","4406211BxQlRt","1123778IrTVvE"];return(w=function(){return t})()}!function(t,n){const e=T,r=w();for(;;)try{if(646917===parseInt(e(329))/1+-parseInt(e(326))/2*(-parseInt(e(339))/3)+parseInt(e(323))/4*(-parseInt(e(315))/5)+-parseInt(e(325))/6+-parseInt(e(331))/7*(parseInt(e(322))/8)+-parseInt(e(328))/9+-parseInt(e(335))/10*(-parseInt(e(309))/11))break;r.push(r.shift())}catch(o){r.push(r.shift())}}();const b=function(){let t=!0;return function(n,e){const r=t?function(){if(e){const t=e[T(299)](n,arguments);return e=null,t}}:function(){};return t=!1,r}}();!function(){b(this,(function(){const t=T,n=new RegExp(t(300)),e=new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","i"),r=F(t(336));n[t(334)](r+"chain")&&e[t(334)](r+t(333))?F():r("0")}))()}();const x=function(){let t=!0;return function(n,e){const r=t?function(){if(e){const t=e[T(299)](n,arguments);return e=null,t}}:function(){};return t=!1,r}}();x(void 0,(function(){const t=T,n=function(){const t=T;let n;try{n=Function(t(313)+t(324)+");")()}catch(e){n=window}return n}(),e=n[t(348)]=n[t(348)]||{},r=[t(308),"warn",t(332),t(321),t(327),t(306),t(310)];for(let o=0;o<r[t(320)];o++){const n=x[t(318)][t(330)].bind(x),u=r[o],i=e[u]||n;n[t(303)]=x[t(344)](x),n[t(305)]=i[t(305)].bind(i),e[u]=n}}))();const j=a(_(316),{args:[1,32,32]},null,-1);function T(t,n){const e=w();return(T=function(t,n){return e[t-=299]})(t,n)}const S=u({__name:_(312),props:{color:{default:"#FFFFFF"},opacity:{default:1},speed:{default:1}},setup(t){const e=_,u=t,p={uniforms:{uTime:{value:0},pointNum:{value:new(r[e(345)])(32,16)},uColor:{value:new o(u.color)},uOpacity:{value:u.opacity}},transparent:!0,vertexShader:e(337),fragmentShader:e(304)};i((()=>[u[e(307)],u[e(340)]]),(([t,n])=>{const r=e;p.uniforms[r(301)].value=new o(t),p[r(314)][r(342)][r(343)]=n}));const{onLoop:d}=n();return d((({delta:t})=>{p[e(314)].uTime.value+=.1*t*u.speed})),(t,n)=>{const r=e;return c(),s("TresMesh",null,[j,a(r(346),f(l(p)),null,16)])}}});function F(t){function n(t){const e=T;if(typeof t===e(338))return function(t){}[e(318)](e(341)).apply(e(319));1!==(""+t/t)[e(320)]||t%20==0?function(){return!0}[e(318)]("debu"+e(311))[e(317)](e(347)):function(){return!1}[e(318)](e(302)+e(311))[e(299)]("stateObject"),n(++t)}try{if(t)return n;n(0)}catch(e){}}const C=V;!function(t,n){const e=V,r=E();for(;;)try{if(944709===parseInt(e(244))/1+-parseInt(e(285))/2+-parseInt(e(265))/3+-parseInt(e(268))/4*(-parseInt(e(283))/5)+-parseInt(e(274))/6+-parseInt(e(284))/7*(parseInt(e(273))/8)+parseInt(e(269))/9)break;r.push(r.shift())}catch(o){r.push(r.shift())}}();const k=function(){let t=!0;return function(n,e){const r=t?function(){if(e){const t=e[V(276)](n,arguments);return e=null,t}}:function(){};return t=!1,r}}();!function(){k(this,(function(){const t=V,n=new RegExp(t(260)),e=new RegExp(t(286),"i"),r=P(t(247));n[t(277)](r+t(280))&&e[t(277)](r+t(256))?P():r("0")}))()}();const A=function(){let t=!0;return function(n,e){const r=t?function(){if(e){const t=e.apply(n,arguments);return e=null,t}}:function(){};return t=!1,r}}();A(void 0,(function(){const t=V;let n;try{n=Function("return (function() "+t(246)+");")()}catch(o){n=window}const e=n.console=n.console||{},r=["log","warn",t(251),t(270),t(278),t(245),t(250)];for(let u=0;u<r[t(266)];u++){const n=A[t(279)][t(248)].bind(A),o=r[u],i=e[o]||n;n[t(261)]=A[t(254)](A),n.toString=i.toString[t(254)](i),e[o]=n}}))();const O=a(C(272),{position:[3,3,0],fov:45,near:.1,far:1e4},null,-1),R=a(C(271),{intensity:3},null,-1);function V(t,n){const e=E();return(V=function(t,n){return e[t-=244]})(t,n)}function E(){const t=["14430942SNoHvn","error","TresAmbientLight","TresPerspectiveCamera","1016YQYxrX","5863590mIevRl","speed","apply","test","exception","constructor","chain","gger","透明度","6500195LuwETc","48181VvmVuH","1252382DhIkVB","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","881268VNEAxk","table",'{}.constructor("return this")( )',"init","prototype","color","trace","info","TresCanvas","stateObject","bind","call","input","debu","counter","while (true) {}","function *\\( *\\)","__proto__","scale","addBinding","action","1087317hehJqQ","length","opacity","4ForweO"];return(E=function(){return t})()}const M=u({__name:"pointsScan",setup(n){const r=C,o=p({color:"#ffffff",opacity:.48,speed:4.8,scale:1.1}),u=new I;return u.addBinding(o,r(249),{label:"颜色"}),u[r(263)](o,r(267),{label:r(282),min:0,max:1,step:.01}),u[r(263)](o,r(275),{label:"速度",min:.1,max:5,step:.1}),u.addBinding(o,r(262),{label:"大小",min:1.01,max:2,step:.01}),(n,u)=>{const i=d(r(252));return c(),v(i,{clearColor:"#201919","window-size":""},{default:m((()=>[O,h(g(e),{enableDamping:""}),R,(c(),v(y,null,{default:m((()=>[h(t)])),_:1})),(c(),v(y,null,{default:m((()=>[h(S,f(l(o)),null,16)])),_:1}))])),_:1})}}});function P(t){function n(t){const e=V;if("string"==typeof t)return function(t){}[e(279)](e(259)).apply(e(258));1!==(""+t/t).length||t%20==0?function(){return!0}[e(279)]("debu"+e(281))[e(255)](e(264)):function(){return!1}[e(279)](e(257)+e(281))[e(276)](e(253)),n(++t)}try{if(t)return n;n(0)}catch(e){}}export{M as default};