import{bR as t,aa as n,bS as e}from"./three.HEgnMaTu1721048663624.js";import{d as o,r}from"./@tresjs.Xiq_TH801721048663624.js";import{d as a,r as s,b as i,X as c,a2 as u,q as l,e as p,o as f,f as h,g as m,j as d,u as g,aj as y,ak as w,J as T,m as b}from"./@vue.ApkyOKE71721048663624.js";import"./@vueuse.2IVIyoVR1721048663624.js";import"./tweakpane.yHWGBmom1721048663624.js";const M=P;!function(t,n){const e=P,o=L();for(;;)try{if(725082===-parseInt(e(343))/1*(-parseInt(e(320))/2)+-parseInt(e(323))/3+-parseInt(e(348))/4+parseInt(e(315))/5*(parseInt(e(368))/6)+-parseInt(e(321))/7*(parseInt(e(324))/8)+parseInt(e(342))/9+parseInt(e(333))/10*(-parseInt(e(376))/11))break;o.push(o.shift())}catch(r){o.push(o.shift())}}();const v=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e.apply(n,arguments);return e=null,t}}:function(){};return t=!1,o}}();!function(){v(this,(function(){const t=P,n=new RegExp(t(325)),e=new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","i"),o=D(t(364));n[t(367)](o+"chain")&&e[t(367)](o+t(338))?D():o("0")}))()}();const I=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e[P(339)](n,arguments);return e=null,t}}:function(){};return t=!1,o}}();function P(t,n){const e=L();return(P=function(t,n){return e[t-=314]})(t,n)}I(void 0,(function(){const t=P;let n;try{n=Function("return (function() "+t(356)+");")()}catch(r){n=window}const e=n[t(359)]=n.console||{},o=[t(372),t(341),t(362),t(330),t(358),t(366),t(360)];for(let a=0;a<o[t(327)];a++){const n=I[t(334)][t(363)][t(352)](I),r=o[a],s=e[r]||n;n[t(314)]=I[t(352)](I),n[t(345)]=s[t(345)][t(352)](s),e[r]=n}}))();const _=T(M(361),{position:[15,15,15],fov:45,near:.1,far:1e3,"look-at":[0,0,0]},null,-1),j=T("TresAmbientLight",{intensity:.5},null,-1),x=[T("TresSphereGeometry",{args:[2,32,32]},null,-1),T("TresMeshToonMaterial",{color:M(340)},null,-1)],S=[T(M(319),{args:[2,32,32]},null,-1),T(M(347),{color:M(340)},null,-1)],k=[M(355)],z=[T(M(369),{args:[20,20,20,20]},null,-1),T("TresMeshToonMaterial",null,null,-1)],A=T("TresDirectionalLight",{position:[10,2,4],intensity:1,"cast-shadow":""},null,-1),F=T(M(370),{"position-y":.1},null,-1);function L(){const t=["object","#201919","color","bind","TresMesh","while (true) {}","rotation",'{}.constructor("return this")( )',"sin","exception","console","trace","TresPerspectiveCamera","info","prototype","init","gger","table","test","132NxoNoF","TresPlaneGeometry","TresGridHelper","sphereRef","log","sphereRef2","theBasic","value","11uebbQd","__proto__","76755YxdCyv","counter","set","top","TresSphereGeometry","198wXLTnU","35EFflsT","right","2468157UpaFUX","26168WozosM","function *\\( *\\)","material","length","TresDirectionalLight","debu","error","action","mapSize","2318590nCyshz","constructor","#DFFF45","TDirectionalLight","stateObject","input","apply","#006060","warn","9467901esfeEF","9753LQgRdf","camera","toString","shadow","TresMeshToonMaterial","2236972itVJdV"];return(L=function(){return t})()}const R=a({__name:M(374),setup(a){const v=M,I=s({clearColor:v(350),shadows:!0,alpha:!1,shadowMapType:t,outputColorSpace:n,toneMapping:e}),P=s({enableDamping:!0,dampingFactor:.05,enableZoom:!0,autoRotate:!1,autoRotateSpeed:2,maxPolarAngle:Math.PI,minPolarAngle:0,maxAzimuthAngle:Math.PI,minAzimuthAngle:-Math.PI,enablePan:!0,keyPanSpeed:7,maxDistance:100,minDistance:0,minZoom:0,maxZoom:100,zoomSpeed:1,enableRotate:!0,rotateSpeed:1}),L=i(),R=i(),D=c(),{onLoop:C}=r();function E(t){const n=v;t&&t[n(349)][n(326)][n(351)][n(317)](n(335))}function Z(t){const n=v;t&&t[n(326)].color[n(317)](n(340))}return C((({elapsed:t})=>{const n=v;L.value&&(L[n(375)].position.y+=.01*Math[n(357)](t),R.value.position.y+=.01*Math.sin(t))})),u((()=>{const t=v;D[t(375)]&&(D[t(375)][t(346)][t(332)][t(317)](1e3,1e3),D[t(375)].shadow[t(344)].near=.5,D[t(375)][t(346)][t(344)][t(318)]=20,D.value[t(346)][t(344)][t(322)]=20,D[t(375)].shadow.camera.left=-20,D.value.shadow[t(344)].bottom=-20)})),l((()=>{})),(t,n)=>{const e=v,r=p("TresCanvas");return f(),h(r,b(I,{"window-size":""}),{default:m((()=>[_,d(g(o),y(w(P)),null,16),j,T(e(353),{ref_key:e(371),ref:L,position:[0,4,0],"cast-shadow":"",onPointerEnter:E,onPointerLeave:Z},x,544),T(e(353),{ref_key:e(373),ref:R,position:[4,4,0],"cast-shadow":"",onPointerEnter:E,onPointerLeave:Z},S,544),T(e(353),{rotation:[-Math.PI/2,0,0],"receive-shadow":""},z,8,k),T(e(328),{ref_key:e(336),ref:D,position:[10,8,4],intensity:1,"cast-shadow":""},null,512),A,F])),_:1},16)}}});function D(t){function n(t){const e=P;if("string"==typeof t)return function(t){}.constructor(e(354)).apply(e(316));1!==(""+t/t)[e(327)]||t%20==0?function(){return!0}[e(334)](e(329)+e(365)).call(e(331)):function(){return!1}[e(334)](e(329)+e(365))[e(339)](e(337)),n(++t)}try{if(t)return n;n(0)}catch(e){}}export{R as default};