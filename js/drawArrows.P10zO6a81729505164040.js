import{p as n,Y as t}from"./@tresjs.IsKybBdF1729505164040.js";import{_ as e,t as o,ch as r,s as c}from"./three.YREzp-_G1729505164040.js";import{P as s}from"./tweakpane.yHWGBmom1729505164040.js";import{d as i,b as u,q as a,a3 as f,r as l,e as p,o as w,f as d,g as h,j as m,aj as I,ak as b,u as y,al as g,m as _,L as v}from"./@vue.JNsx1iN61729505164040.js";import"./@vueuse.9dhnH8nd1729505164040.js";const j=C;!function(n,t){const e=C,o=z();for(;;)try{if(577940===parseInt(e(265))/1*(-parseInt(e(259))/2)+parseInt(e(277))/3*(parseInt(e(300))/4)+parseInt(e(253))/5+parseInt(e(290))/6*(-parseInt(e(260))/7)+-parseInt(e(252))/8*(parseInt(e(294))/9)+-parseInt(e(284))/10*(-parseInt(e(263))/11)+parseInt(e(273))/12)break;o.push(o.shift())}catch(r){o.push(o.shift())}}();const x=function(){let n=!0;return function(t,e){const o=n?function(){if(e){const n=e[C(293)](t,arguments);return e=null,n}}:function(){};return n=!1,o}}();!function(){x(this,(function(){const n=C,t=new RegExp(n(303)),e=new RegExp(n(271),"i"),o=P(n(254));t[n(321)](o+"chain")&&e.test(o+"input")?P():o("0")}))()}();const A=function(){let n=!0;return function(t,e){const o=n?function(){if(e){const n=e[C(293)](t,arguments);return e=null,n}}:function(){};return n=!1,o}}();function C(n,t){const e=z();return(C=function(n,t){return e[n-=251]})(n,t)}function z(){const n=["addEventListener","length","test","exception","click","Vector2","info","removeEventListener","参数(鼠标间断点两个点，分别作为箭头的起点)","8icNuCp","1415435arVhie","init","toString","copy","subVectors","Vector3","2fryHMD","98yGTaZP","Mesh","绘制箭头","4498582badiRu","CatmullRomCurve3","656669dHikgr","console","while (true) {}","bind","setAttribute","TubeGeometry","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","sub","16222020aHICIr","MeshBasicMaterial","clone","setFromCamera","126381TaBLxz","warn","addFolder","debu","position","abs","getPointAt","10IwmCXT","action","Group","DoubleSide",'{}.constructor("return this")( )',"add","43788cDOqty","constructor","clientY","apply","7880499zEWIkv","__proto__","addVectors","distanceTo","clientX","log","16VuEPdB","SphereGeometry","PlaneGeometry","function *\\( *\\)","BufferGeometry","BufferAttribute","innerHeight","counter","prototype","gger","trace","string","drawArrows","value","innerWidth","set","return (function() ","line","call"];return(z=function(){return n})()}A(void 0,(function(){const n=C,t=function(){const n=C;let t;try{t=Function(n(316)+n(288)+");")()}catch(e){t=window}return t}(),e=t[n(266)]=t[n(266)]||{},o=[n(299),n(278),n(325),"error",n(322),"table",n(310)];for(let r=0;r<o[n(320)];r++){const t=A[n(291)][n(308)][n(268)](A),c=o[r],s=e[c]||t;t[n(295)]=A[n(268)](A),t.toString=s[n(255)][n(268)](s),e[c]=t}}))();const M=i({__name:j(312),setup(t){const i=j,{camera:l,renderer:p,scene:w,sizes:d,raycaster:h,controls:m}=n();let I=new(e[i(324)]),b=[];u(null);const y=new o(200,200),g=new(e[i(274)])({color:65280,side:e[i(287)]}),_=new(e[i(261)])(y,g);_.rotation[i(315)](0,0,Math.PI/2),w[i(313)][i(289)](_);let v="",x=function(n){const t=i;I.x=n[t(298)]/window[t(314)]*2-1,I.y=-n[t(292)]/window[t(306)]*2+1,h[t(313)][t(276)](I,l[t(313)]);const o=h[t(313)].intersectObject(_);if(o[t(320)]>0){const n=o[0].point;if(b.push(new(e[t(258)])(n.x,n.y,0)),v===t(317))A(o[0].normal)}},A=function(n){const t=i;if(2==b[t(320)]){const o=new r(b),c=new(e[t(270)])(o,20,2,8,!1),s=new(e[t(274)])({color:16711680}),i=new(e[t(261)])(c,s);w[t(313)][t(289)](i);let u=n,a=z(o,u,Math.PI/5);w[t(313)][t(289)](a);let f=z(o,u,-Math.PI/5);w[t(313)][t(289)](f);let l=C(b[1]);w[t(313)].add(l),b.length=0}},C=function(n){const t=i,o=new(e[t(301)])(1.8,32,32),r=new(e[t(274)])({color:16711680}),c=new(e[t(261)])(o,r);return c.position[t(256)](n),c},z=function(n,t,o){const r=i,s=new(e[r(264)])([n[r(283)](.8),n[r(283)](1)]),u=new(e[r(270)])(s,30,2,8,!1),a=new(e[r(274)])({color:16711680}),f=new c(u,a)[r(275)](),l=new(e[r(286)]);return l[r(289)](f),l[r(281)][r(256)](b[1]),f[r(281)][r(272)](b[1]),l.rotation[r(315)](Math[r(282)](t.x)*o,Math[r(282)](t.y)*o,Math[r(282)](t.z)*o),l},M=function(){const n=i;new s({title:"箭头",expanded:!0})[n(279)]({title:n(251)}).addButton({title:n(262),label:"激活"}).on(n(323),(()=>{const t=n;window[t(326)](t(323),x,!1),v=t(317),function(){const n=i;window[n(319)](n(323),x,!1)}()}))};return a((()=>{M()})),f((()=>{})),(n,t)=>null}});function P(n){function t(n){const e=C;if(typeof n===e(311))return function(n){}.constructor(e(267))[e(293)](e(307));1!==(""+n/n)[e(320)]||n%20==0?function(){return!0}.constructor("debu"+e(309))[e(318)](e(285)):function(){return!1}.constructor(e(280)+"gger").apply("stateObject"),t(++n)}try{if(n)return t;t(0)}catch(e){}}const k=R;!function(n,t){const e=R,o=T();for(;;)try{if(600432===parseInt(e(435))/1*(parseInt(e(438))/2)+parseInt(e(429))/3+-parseInt(e(456))/4+parseInt(e(452))/5+parseInt(e(446))/6*(-parseInt(e(439))/7)+-parseInt(e(444))/8*(parseInt(e(451))/9)+parseInt(e(453))/10*(parseInt(e(445))/11))break;o.push(o.shift())}catch(r){o.push(o.shift())}}();const S=function(){let n=!0;return function(t,e){const o=n?function(){if(e){const n=e[R(427)](t,arguments);return e=null,n}}:function(){};return n=!1,o}}();!function(){S(this,(function(){const n=R,t=new RegExp(n(458)),e=new RegExp(n(442),"i"),o=V(n(455));t[n(432)](o+n(434))&&e[n(432)](o+n(461))?V():o("0")}))()}();const E=function(){let n=!0;return function(t,e){const o=n?function(){if(e){const n=e[R(427)](t,arguments);return e=null,n}}:function(){};return n=!1,o}}();function R(n,t){const e=T();return(R=function(n,t){return e[n-=425]})(n,t)}function T(){const n=["info","bind","8924vXfUDj","497OsXIkm","counter","TresCanvas","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","toString","120872HFnMFq","34232dAyoVJ","91986SyAgSU","string","log","#201919","trace","279qDuNWQ","3427950Jywial","1990HfPiQB","gger","init","682572ufCeew","debu","function *\\( *\\)","warn","constructor","input","length","TresPerspectiveCamera","stateObject","drawArrows","call","console","apply","error","1221963SyKanv","prototype","while (true) {}","test","TresAmbientLight","chain","138CNLFoz"];return(T=function(){return n})()}E(void 0,(function(){const n=R;let t;try{t=Function('return (function() {}.constructor("return this")( ));')()}catch(r){t=window}const e=t.console=t[n(426)]||{},o=[n(448),n(459),n(436),n(428),"exception","table",n(450)];for(let c=0;c<o[n(462)];c++){const t=E[n(460)][n(430)].bind(E),r=o[c],s=e[r]||t;t.__proto__=E[n(437)](E),t[n(443)]=s[n(443)][n(437)](s),e[r]=t}}))();const B=v(k(463),{fov:60,near:.1,far:2e3,position:[0,0,200],"look-at":[0,0,0]},null,-1),D=v(k(433),{intensity:2},null,-1),F=i({__name:k(465),setup(n){const e=l({windowSize:!0,alpha:!0,antialias:!0,autoClear:!1,disableRender:!0}),o=l({enableDamping:!0,enableZoom:!0,enablePan:!0,enableRotate:!0,makeDefault:!0});return(n,r)=>{const c=R,s=p(c(441));return w(),d(s,_({clearColor:c(449),"window-size":""},e),{default:h((()=>[B,D,m(y(t),I(b(o)),null,16),(w(),d(g,null,{default:h((()=>[m(M)])),_:1}))])),_:1},16)}}});function V(n){function t(n){const e=R;if(typeof n===e(447))return function(n){}[e(460)](e(431))[e(427)](e(440));1!==(""+n/n).length||n%20==0?function(){return!0}[e(460)](e(457)+e(454))[e(425)]("action"):function(){return!1}[e(460)](e(457)+e(454))[e(427)](e(464)),t(++n)}try{if(n)return t;t(0)}catch(e){}}export{F as default};