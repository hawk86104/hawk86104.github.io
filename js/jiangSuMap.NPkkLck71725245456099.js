import{p as t,$ as e,N as n,t as o,d as r}from"./@tresjs.j5vdYITq1725245456099.js";import{B as s,q as i,C as a,f as p,V as c,cx as l,Z as u,cK as m}from"./three.KG2-8r0_1725245456099.js";import{l as f}from"./utils.kPQpcjJB1725245456099.js";import{u as d}from"./@tweenjs.F-UCJBA91725245456099.js";import{f as h}from"./utils.iIf-CUNx1725245456099.js";import{c as j,d as y,a as g}from"./three-mesh-bvh.MH1NM3HB1725245456099.js";import{a4 as v,b as T,a1 as w,o as b,D as x,F as z,V as I,f as _,g as M,J as E,H as k,m as C,u as B,I as L,d as S,r as G,e as O,j as D,aj as H,ak as P,al as N}from"./@vue.Q1VpS3901725245456099.js";import{m as Z}from"./d3-geo.DG0Vvqei1725245456099.js";import"./tweakpane.yHWGBmom1725245456099.js";import"./@vueuse.whMtq_7M1725245456099.js";import"./@fesjs.Ns9rHvZ61725245456099.js";import"./vue-router.tVftT0SA1725245456099.js";import"./lodash-es.nFpJXAf-1725245456099.js";import"./@qlin.yHhFDldE1725245456099.js";import"./pinia.-1zGxVQz1725245456099.js";import"./@floating-ui.BPbuo5Gx1725245456099.js";import"./@juggle.7yjBMqoW1725245456099.js";import"./http.yRxKyeoE1725245456099.js";import"./axios.FVFoCDiv1725245456099.js";import"./color.EAXNp2Fj1725245456099.js";import"./@amap.jyJWu-u51725245456099.js";import"./color-string.3fonawwK1725245456099.js";import"./color-name.IOvr1kHa1725245456099.js";import"./simple-swizzle.ssU5obXD1725245456099.js";import"./is-arrayish.Nlsdsael1725245456099.js";import"./color-convert.HmRt2jZr1725245456099.js";import"./lodash.G-rO3RAg1725245456099.js";import"./naive-ui.OmeJonpP1725245456099.js";import"./css-render.mCyw8W1V1725245456099.js";import"./@emotion.ZD_ZYAgY1725245456099.js";import"./@css-render.TuYkq5ot1725245456099.js";import"./seemly.SjiSeX2v1725245456099.js";import"./vooks.ESIgGhQl1725245456099.js";import"./evtd.DtfwxtIl1725245456099.js";import"./vueuc.73_6yAYl1725245456099.js";import"./vdirs.lRnxnLyt1725245456099.js";import"./treemate.dcEdf2le1725245456099.js";import"./date-fns.WPOMTQIS1725245456099.js";import"./date-fns-tz.4Pb3tE1S1725245456099.js";import"./async-validator.-YBkpS4I1725245456099.js";import"./d3-array.E5C1cfJ61725245456099.js";const A=["position"],F=["blending","map"],R=["name","renderOrder","pCenter"],q=["args"],K=["color","side"],$=["renderOrder","position-z"],Q=["position"],V=E("TresLineBasicMaterial",{color:16777215,linewidth:.5},null,-1),W=["renderOrder"],Y=["position"],J=E("TresLineBasicMaterial",{color:0,linewidth:.5},null,-1),U={__name:"jiangSuMapMesh",async setup(r){let S,G;s.prototype.computeBoundsTree=j,s.prototype.disposeBoundsTree=y,i.prototype.raycast=g;const O=([S,G]=v((()=>f("./plugins/simpleGIS/json/320000_full.json","features"))),S=await S,G(),S),{map:D}=([S,G]=v((()=>n({map:"./plugins/simpleGIS/image/icon.png"}))),S=await S,G(),S),H=O[0].properties.centroid,P=Z();P.center(H).translate([0,0]);const N=[];O.forEach((t=>{const e=new a("hsl( ".concat(16,", ").concat(30*Math.random()+55,"%, ").concat(30*Math.random()+55,"%)")).getHex(),n=.3*Math.random()+.3,{centroid:o,oneCenter:r,center:s,name:i}=t.properties,{coordinates:p,type:c}=t.geometry,l=o||r||s||[0,0],u=P(l);u[1]=-u[1],u[2]=n,N.push({type:"Html",position:u,name:i});const f=P(l);f[1]=.2-f[1],f[2]=n+.22,N.push({type:"Sprite",position:f}),p.forEach((t=>{function o(t){const o=new m;t.forEach(((t,e)=>{const[n,r]=P(t);0===e?o.moveTo(n,-r):o.lineTo(n,-r)})),N.push({type:"Shape",shape:o,name:i,color:e,depth:n,pCenter:f});const r=[];t.forEach((t=>{const[e,n]=P(t);r.push(e,-n,0)})),N.push({type:"Line",points:new Float32Array(r),depth:n})}"MultiPolygon"===c&&t.forEach((t=>o(t))),"Polygon"===c&&o(t)}))}));const U=T();w((()=>{U.value&&((t=>{t.rotation.x=-Math.PI/2;const e=(new p).setFromObject(t).getCenter(new c),n=[0,0];t.position.x=t.position.x-e.x-n[0],t.position.z=t.position.z-e.z-n[1]})(U.value),U.value.children.forEach((t=>{"Mesh"===t.type&&t.geometry.computeBoundsTree()})))}));const X=t=>{t.object.material.opacity=.4},tt=t=>{t.eventObject.material.opacity=1},{camera:et,controls:nt}=t(),ot=t=>{const e=new c;e.x=t.point.x,e.y=t.point.y+10,e.z=t.point.z,h(et,e,nt)},{onBeforeLoop:rt}=e();rt((()=>{d()}));const st={wrapperClass:"wrapper",as:"div",center:!0,sprite:!0,prepend:!0,transform:!0};return(t,e)=>(b(),x("TresGroup",{ref_key:"tgRef",ref:U},[(b(),x(z,null,I(N,((t,e)=>(b(),x(z,{key:"".concat(e)},["Html"===t.type?(b(),_(B(o),C({key:0,ref_for:!0},st,{position:t.position}),{default:M((()=>[E("span",null,k(t.name),1)])),_:2},1040,["position"])):L("",!0),"Sprite"===t.type?(b(),x("TresSprite",{key:1,position:t.position,scale:.3,renderOrder:1e3},[E("TresSpriteMaterial",{color:16711680,blending:l,map:B(D)},null,8,F)],8,A)):L("",!0),"Shape"===t.type?(b(),x("TresMesh",{key:2,name:t.name,renderOrder:e,pCenter:t.pCenter,onPointerEnter:X,onPointerLeave:tt,onClick:ot},[E("TresExtrudeGeometry",{args:[t.shape,{depth:t.depth,bevelEnabled:!1}]},null,8,q),E("TresMeshStandardMaterial",{color:t.color,emissive:0,roughness:.45,metalness:.8,transparent:!0,side:u},null,8,K)],40,R)):L("",!0),"Line"===t.type?(b(),x(z,{key:3},[E("TresLine",{renderOrder:e,"position-z":t.depth+1e-4},[E("TresBufferGeometry",{position:[t.points,3]},null,8,Q),V],8,$),E("TresLine",{renderOrder:e,"position-z":-1e-4},[E("TresBufferGeometry",{position:[t.points,3]},null,8,Y),J],8,W)],64)):L("",!0)],64)))),64))],512))}},X=ot;!function(t,e){const n=ot,o=et();for(;;)try{if(822900===-parseInt(n(421))/1+parseInt(n(387))/2+parseInt(n(386))/3+parseInt(n(413))/4*(-parseInt(n(410))/5)+parseInt(n(392))/6*(-parseInt(n(420))/7)+parseInt(n(401))/8*(-parseInt(n(399))/9)+-parseInt(n(416))/10*(-parseInt(n(412))/11))break;o.push(o.shift())}catch(r){o.push(o.shift())}}();const tt=function(){let t=!0;return function(e,n){const o=t?function(){if(n){const t=n[ot(409)](e,arguments);return n=null,t}}:function(){};return t=!1,o}}();function et(){const t=["return (function() ","input","6845069aRyBHz","838389rsaQaE","error","test","action","table","console","constructor","debu","2680869iqaGRv","2682246aZHUNN","stateObject","TresPerspectiveCamera","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","init","6cGDXQm","info","TresGridHelper","TresAmbientLight","trace","chain","while (true) {}","57357sKxGEZ","TresCanvas","1096GeNDoh","prototype","__proto__","length","string","call","exception","counter","apply","25vEysqg",'{}.constructor("return this")( )',"22rsWPoN","971644NnBuTK","toString","TresDirectionalLight","12460330mnmYsp","gger"];return(et=function(){return t})()}!function(){tt(this,(function(){const t=ot,e=new RegExp("function *\\( *\\)"),n=new RegExp(t(390),"i"),o=mt(t(391));e.test(o+t(397))&&n[t(423)](o+t(419))?mt():o("0")}))()}();const nt=function(){let t=!0;return function(e,n){const o=t?function(){if(n){const t=n[ot(409)](e,arguments);return n=null,t}}:function(){};return t=!1,o}}();function ot(t,e){const n=et();return(ot=function(t,e){return n[t-=384]})(t,e)}nt(void 0,(function(){const t=ot;let e;try{e=Function(t(418)+t(411)+");")()}catch(r){e=window}const n=e[t(426)]=e.console||{},o=["log","warn",t(393),t(422),t(407),t(425),t(396)];for(let s=0;s<o[t(404)];s++){const e=nt.constructor[t(402)].bind(nt),r=o[s],i=n[r]||e;e[t(403)]=nt.bind(nt),e[t(414)]=i[t(414)].bind(i),n[r]=e}}))();const rt=E(X(389),{position:[0,12,0],fov:75,near:.1,far:1e3,up:[0,0,-1]},null,-1),st=E(X(395),{intensity:8.8},null,-1),it=E("TresDirectionalLight",{position:[0,10,5],intensity:.2},null,-1),at=E("TresDirectionalLight",{position:[0,10,-5],intensity:.2},null,-1),pt=E(X(415),{position:[5,10,0],intensity:.2},null,-1),ct=E(X(415),{position:[-5,10,0],intensity:.2},null,-1),lt=E(X(394),{args:[20,10]},null,-1),ut=S({__name:"jiangSuMap",setup(t){const e=G({clearColor:"#ffdbd1",alpha:!0,antialias:!0}),n=G({enableDamping:!0,dampingFactor:.05,makeDefault:!0});return(t,o)=>{const s=O(ot(400));return b(),_(s,C(e,{"window-size":""}),{default:M((()=>[rt,D(B(r),H(P(n)),null,16),st,it,at,pt,ct,lt,(b(),_(N,null,{default:M((()=>[D(U)])),_:1}))])),_:1},16)}}});function mt(t){function e(t){const n=ot;if(typeof t===n(405))return function(t){}[n(384)](n(398))[n(409)](n(408));1!==(""+t/t)[n(404)]||t%20==0?function(){return!0}[n(384)](n(385)+n(417))[n(406)](n(424)):function(){return!1}[n(384)]("debu"+n(417)).apply(n(388)),e(++t)}try{if(t)return e;e(0)}catch(n){}}export{ut as default};