import{m as n,U as t}from"./@tresjs.C3WO4ZW41730883607874.js";import{_ as e,c as o}from"./three.fIUcjaNz1730883607874.js";import{P as r}from"./tweakpane.BCjFYDHx1730883607874.js";import{d as c,b as i,q as s,a3 as a,r as u,e as l,o as f,f as p,g as d,J as w,j as h,u as b,aj as g,ak as m,al as y,m as I}from"./@vue.Cfu43fwq1730883607874.js";import"./@vueuse.BSum2YDk1730883607874.js";const _=x;!function(n,t){const e=x,o=k();for(;;)try{if(862379===parseInt(e(383))/1*(parseInt(e(423))/2)+-parseInt(e(379))/3+-parseInt(e(386))/4*(-parseInt(e(396))/5)+parseInt(e(385))/6+-parseInt(e(447))/7+parseInt(e(392))/8*(parseInt(e(384))/9)+parseInt(e(436))/10*(-parseInt(e(373))/11))break;o.push(o.shift())}catch(r){o.push(o.shift())}}();const j=function(){let n=!0;return function(t,e){const o=n?function(){if(e){const n=e[x(439)](t,arguments);return e=null,n}}:function(){};return n=!1,o}}();function k(){const n=["5895hzTekJ","5705256DEyiGR","452jggVkn","normal","stateObject","length","innerWidth","push","17288cPfkak","addButton","bind","setFromCamera","30215sRuNxi","clientY","参数(鼠标间断点两个点，分别作为箭头的起点)","DoubleSide","abs","set","value","setAttribute","copy","MeshBasicMaterial","return (function() ","CatmullRomCurve3","rotation","normalize","console","Mesh","drawArrows","test","innerHeight","warn","function *\\( *\\)","clientX","Vector2","debu","trace","input","add","173164EIDZbv","clone","point","while (true) {}","addVectors","info","TubeGeometry","constructor","PlaneGeometry","绘制箭头","log","chain","Vector3","34860lqjJVG","addEventListener","line","apply","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","removeEventListener","addFolder","click","position","__proto__","toString","158781qfIiOM","counter","8701KMhjTT","getPointAt","SphereGeometry","intersectObject","BufferGeometry","gger","817566ExPpFN","multiplyScalar","prototype","exception","10VFLqeC"];return(k=function(){return n})()}!function(){j(this,(function(){const n=x,t=new RegExp(n(416)),e=new RegExp(n(440),"i"),o=E("init");t[n(413)](o+n(434))&&e[n(413)](o+n(421))?E():o("0")}))()}();const v=function(){let n=!0;return function(t,e){const o=n?function(){if(e){const n=e[x(439)](t,arguments);return e=null,n}}:function(){};return n=!1,o}}();function x(n,t){const e=k();return(x=function(n,t){return e[n-=373]})(n,t)}v(void 0,(function(){const n=x,t=function(){const n=x;let t;try{t=Function(n(406)+'{}.constructor("return this")( ));')()}catch(e){t=window}return t}(),e=t[n(410)]=t[n(410)]||{},o=[n(433),n(415),n(428),"error",n(382),"table",n(420)];for(let r=0;r<o.length;r++){const t=v[n(430)][n(381)][n(394)](v),c=o[r],i=e[c]||t;t[n(445)]=v.bind(v),t[n(446)]=i[n(446)][n(394)](i),e[c]=t}}))();const M=c({__name:_(412),setup(t){const c=_,{camera:u,renderer:l,scene:f,sizes:p,raycaster:d,controls:w}=n();let h=new(e[c(418)]),b=[];i(null);const g=new(e[c(431)])(200,200),m=new(e[c(405)])({color:65280,side:e[c(399)]}),y=new(e[c(411)])(g,m);y[c(408)][c(401)](0,0,Math.PI/2),f[c(402)][c(422)](y);let I="",j=function(n){const t=c;h.x=n[t(417)]/window[t(390)]*2-1,h.y=-n[t(397)]/window[t(414)]*2+1,d[t(402)][t(395)](h,u[t(402)]);const o=d[t(402)][t(376)](y);if(o[t(389)]>0){const n=o[0][t(425)];if(b[t(391)](new(e[t(435)])(n.x,n.y,0)),"line"===I)k(o[0][t(387)])}},k=function(n){const t=c;if(2==b.length){const o=new(e[t(407)])(b),r=new(e[t(429)])(o,20,2,8,!1),c=new(e[t(405)])({color:16711680}),i=new(e[t(411)])(r,c);f[t(402)][t(422)](i);let s=n,a=x(o,s,Math.PI/5);f[t(402)][t(422)](a);let u=x(o,s,-Math.PI/5);f[t(402)][t(422)](u);let l=v(b[1]);f[t(402)][t(422)](l),b[t(389)]=0}},v=function(n){const t=c,o=new(e[t(375)])(1.8,32,32),r=new(e[t(405)])({color:16711680}),i=new(e[t(411)])(o,r);return i[t(444)].copy(n),i},x=function(n,t,r){const i=c,s=new(e[i(407)])([n[i(374)](.8),n[i(374)](1)]),a=new(e[i(429)])(s,30,2,8,!1),u=new(e[i(405)])({color:16711680}),l=new(e[i(411)])(a,u).clone(),f=new o;return f.add(l),f.position[i(404)](b[1]),l.position.sub(b[1]),f[i(408)].set(Math[i(400)](t.x)*r,Math[i(400)](t.y)*r,Math.abs(t.z)*r),f},M=function(){const n=c;new r({title:"箭头",expanded:!0})[n(442)]({title:n(398)})[n(393)]({title:n(432),label:"激活"}).on("click",(()=>{const t=n;window[t(441)](t(443),j,!1),I=t(438),function(){const n=c;window[n(437)](n(443),j,!1)}()}))};return s((()=>{M()})),a((()=>{})),(n,t)=>null}});function E(n){function t(n){const e=x;if("string"==typeof n)return function(n){}[e(430)](e(426)).apply(e(448));1!==(""+n/n).length||n%20==0?function(){return!0}[e(430)](e(419)+"gger").call("action"):function(){return!1}.constructor("debu"+e(378)).apply(e(388)),t(++n)}try{if(n)return t;t(0)}catch(e){}}const P=C;function z(){const n=["390kbhyGM","12423792rZtEUU","chain","11dAqSLj","prototype","TresCanvas","apply","string","bind","586578JbLBVw","6kIlTuv","toString","exception","console","1308xpBXBo","19aRkeMe","gger","init","236646EFDRDK","90dfgfzP","__proto__","2071405EGAidu","return (function() ","call","drawArrows","170NvUQNq","info","log","length","counter","action",'{}.constructor("return this")( )',"test","debu","1133800eFpPjD","constructor","while (true) {}","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","input","TresPerspectiveCamera"];return(z=function(){return n})()}!function(n,t){const e=C,o=z();for(;;)try{if(150681===parseInt(e(377))/1*(-parseInt(e(362))/2)+-parseInt(e(371))/3+parseInt(e(376))/4*(-parseInt(e(387))/5)+-parseInt(e(372))/6*(parseInt(e(383))/7)+-parseInt(e(396))/8+-parseInt(e(380))/9*(parseInt(e(381))/10)+parseInt(e(365))/11*(parseInt(e(363))/12))break;o.push(o.shift())}catch(r){o.push(o.shift())}}();const A=function(){let n=!0;return function(t,e){const o=n?function(){if(e){const n=e[C(368)](t,arguments);return e=null,n}}:function(){};return n=!1,o}}();!function(){A(this,(function(){const n=C,t=new RegExp("function *\\( *\\)"),e=new RegExp(n(399),"i"),o=F(n(379));t[n(394)](o+n(364))&&e[n(394)](o+n(360))?F():o("0")}))()}();const R=function(){let n=!0;return function(t,e){const o=n?function(){if(e){const n=e[C(368)](t,arguments);return e=null,n}}:function(){};return n=!1,o}}();function C(n,t){const e=z();return(C=function(n,t){return e[n-=360]})(n,t)}R(void 0,(function(){const n=C;let t;try{t=Function(n(384)+n(393)+");")()}catch(r){t=window}const e=t[n(375)]=t[n(375)]||{},o=[n(389),"warn",n(388),"error",n(374),"table","trace"];for(let c=0;c<o.length;c++){const t=R[n(397)][n(366)].bind(R),r=o[c],i=e[r]||t;t[n(382)]=R[n(370)](R),t[n(373)]=i[n(373)].bind(i),e[r]=t}}))();const D=c({__name:P(386),setup(n){const e=u({windowSize:!0,alpha:!0,antialias:!0,autoClear:!1,disableRender:!0}),o=u({enableDamping:!0,enableZoom:!0,enablePan:!0,enableRotate:!0,makeDefault:!0});return(n,r)=>{const c=C,i=l(c(367));return f(),p(i,I({clearColor:"#201919","window-size":""},e),{default:d((()=>[r[0]||(r[0]=w(c(361),{fov:60,near:.1,far:2e3,position:[0,0,200],"look-at":[0,0,0]},null,-1)),r[1]||(r[1]=w("TresAmbientLight",{intensity:2},null,-1)),h(b(t),g(m(o)),null,16),(f(),p(y,null,{default:d((()=>[h(M)])),_:1}))])),_:1},16)}}});function F(n){function t(n){const e=C;if(typeof n===e(369))return function(n){}.constructor(e(398))[e(368)](e(391));1!==(""+n/n)[e(390)]||n%20==0?function(){return!0}[e(397)](e(395)+"gger")[e(385)](e(392)):function(){return!1}.constructor("debu"+e(378)).apply("stateObject"),t(++n)}try{if(n)return t;t(0)}catch(e){}}export{D as default};