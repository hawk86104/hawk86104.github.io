import{e as t,U as e}from"./@tresjs.XlmHwCPa1735906732968.js";import{l as n}from"./utils.fcbD8SSm1735906732968.js";import{ac as r,B as o,s,cW as a}from"./three.VhLXWX0H1735906732968.js";import{m as i}from"./d3-geo.4Di6JovN1735906732968.js";import{a4 as c,b as p,a1 as l,o as u,D as f,F as m,V as d,J as h,d as y,r as j,e as g,f as b,g as v,j as w,u as I,aj as T,ak as _,al as x,m as E}from"./@vue.yG49nQHr1735906732968.js";import{c as M,d as A,a as k}from"./three-mesh-bvh.vwwt1TUO1735906732968.js";import"./@vueuse.HCIFcVWX1735906732968.js";import"./@fesjs.OL5agSaf1735906732968.js";import"./vue-router.OGOa9Z4t1735906732968.js";import"./lodash-es.kYt-_xTG1735906732968.js";import"./@qlin.yHhFDldE1735906732968.js";import"./pinia.ZaWyowAg1735906732968.js";import"./vue-demi.C4xddsk91735906732968.js";import"./@floating-ui.BPbuo5Gx1735906732968.js";import"./@juggle.7yjBMqoW1735906732968.js";import"./d3-array.AhNJy1f41735906732968.js";const B=["properties","renderOrder"],C=["args"],G={__name:"chinaMapMesh",async setup(e){let y,j;o.prototype.computeBoundsTree=M,o.prototype.disposeBoundsTree=A,s.prototype.raycast=k;const g=i().center([104,37.5]).translate([0,0]),b=([y,j]=c((()=>n("./plugins/simpleGIS/json/china.json","features"))),y=await y,j(),y),v={depth:10,bevelEnabled:!1},w=[];b.forEach((t=>{t.geometry.coordinates.forEach((e=>{e.forEach((e=>{const n=new a;for(let t=0;t<e.length;t++){const[r,o]=g(e[t]);0===t&&n.moveTo(r,-o),n.lineTo(r,-o)}w.push({shape:n,properties:t.properties})}))}))}));const I=new r({color:"#3480C4",linewidth:1,linecap:"round"}),T=p();l((()=>{T.value&&T.value.children.forEach((t=>{t.geometry.computeBoundsTree();const e=[t.material,I];t.material=e}))}));let _=null;(()=>{const t=document.createElement("div");t.className="tooltip",t.style.border="1px solid white",t.style.position="absolute",t.style.color="white",t.style.padding="0px 6px",t.style.whiteSpace="no-wrap",t.style.visibility="hidden",document.body.appendChild(t),_=t})();const x=t=>{t.object.material[0].color.set(16711680),_.innerText=t.object.properties.name,_.style.visibility="visible"},E=t=>{t.eventObject.material[0].color.set(3010559),_.style.visibility="hidden"},G=t=>{_.style.left="".concat(t.clientX+6,"px"),_.style.top="".concat(t.clientY+6,"px")},{onLoop:L}=t();return L((()=>{})),(t,e)=>(u(),f("TresGroup",{ref_key:"tgRef",ref:T},[(u(),f(m,null,d(w,((t,n)=>h("TresMesh",{key:"".concat(n),properties:t.properties,renderOrder:n,onPointerEnter:x,onPointerLeave:E,onPointerMove:G},[h("TresExtrudeGeometry",{args:[t.shape,v]},null,8,C),e[0]||(e[0]=h("TresMeshBasicMaterial",{color:"#2defff",transparent:!0,opacity:.6},null,-1))],40,B))),64))],512))}},L=O;!function(t,e){const n=O,r=F();for(;;)try{if(142300===-parseInt(n(410))/1+-parseInt(n(413))/2*(-parseInt(n(408))/3)+parseInt(n(393))/4+parseInt(n(424))/5*(parseInt(n(391))/6)+-parseInt(n(403))/7*(-parseInt(n(415))/8)+-parseInt(n(390))/9*(-parseInt(n(419))/10)+-parseInt(n(394))/11*(parseInt(n(412))/12))break;r.push(r.shift())}catch(o){r.push(r.shift())}}();const R=function(){let t=!0;return function(e,n){const r=t?function(){if(n){const t=n[O(414)](e,arguments);return n=null,t}}:function(){};return t=!1,r}}();!function(){R(this,(function(){const t=O,e=new RegExp(t(422)),n=new RegExp(t(398),"i"),r=S(t(389));e[t(409)](r+t(418))&&n.test(r+t(402))?S():r("0")}))()}();const z=function(){let t=!0;return function(e,n){const r=t?function(){if(n){const t=n[O(414)](e,arguments);return n=null,t}}:function(){};return t=!1,r}}();function O(t,e){const n=F();return(O=function(t,e){return n[t-=388]})(t,e)}z(void 0,(function(){const t=O,e=function(){let t;try{t=Function('return (function() {}.constructor("return this")( ));')()}catch(e){t=window}return t}(),n=e[t(420)]=e[t(420)]||{},r=[t(421),t(405),t(411),t(400),t(401),t(423),t(425)];for(let o=0;o<r.length;o++){const e=z[t(395)].prototype[t(407)](z),s=r[o],a=n[s]||e;e.__proto__=z[t(407)](z),e[t(417)]=a.toString[t(407)](a),n[s]=e}}))();const P=y({__name:L(392),setup(n){const r=j({clearColor:L(396)}),o=j({enableDamping:!0,dampingFactor:.05}),{onLoop:s}=t();return s((()=>{})),l((()=>{})),(t,n)=>{const s=g("TresCanvas");return u(),b(s,E(r,{"window-size":""}),{default:v((()=>[n[0]||(n[0]=h("TresPerspectiveCamera",{position:[0,0,166],fov:75,near:.1,far:1e3,"look-at":[0,0,0]},null,-1)),w(I(e),T(_(o)),null,16),(u(),b(x,null,{default:v((()=>[w(G)])),_:1}))])),_:1},16)}}});function S(t){function e(t){const n=O;if("string"==typeof t)return function(t){}.constructor(n(406))[n(414)]("counter");1!==(""+t/t)[n(404)]||t%20==0?function(){return!0}[n(395)](n(397)+n(416))[n(399)](n(388)):function(){return!1}[n(395)](n(397)+n(416)).apply("stateObject"),e(++t)}try{if(t)return e;e(0)}catch(n){}}function F(){const t=["exception","input","51751IJXpTt","length","warn","while (true) {}","bind","73221UnsRgk","test","102386PgfdwM","info","3110532iLplLV","10YGReXo","apply","160ECWVUN","gger","toString","chain","490LhNfJJ","console","log","function *\\( *\\)","table","15NOqTtA","trace","action","init","16029DRSmWc","347226bHzFAr","chinaMap","929324ZtBmVA","22AGGAUn","constructor","#201919","debu","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","call","error"];return(F=function(){return t})()}export{P as default};