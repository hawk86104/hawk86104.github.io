import{e as t,U as e}from"./@tresjs.sklxXn0u1733198294833.js";import{l as n}from"./utils.mPUSF2NM1733198294833.js";import{ac as o,B as r,s,cm as i}from"./three.8iJMi2lU1733198294833.js";import{m as a}from"./d3-geo.kglYp31S1733198294833.js";import{a6 as c,b as p,a3 as u,o as l,D as f,F as d,V as m,J as h,d as y,r as j,e as b,f as g,g as v,j as w,u as x,aj as T,ak as _,al as E,m as I}from"./@vue.-THQH3GC1733198294833.js";import{c as M,d as P,a as O}from"./three-mesh-bvh.oXi0pqYE1733198294833.js";import"./@vueuse.N_fQXUYA1733198294833.js";import"./@fesjs.X1U4uwri1733198294833.js";import"./vue-router.H2Xo87u11733198294833.js";import"./lodash-es.kYt-_xTG1733198294833.js";import"./@qlin.yHhFDldE1733198294833.js";import"./pinia.ZJJJwhVu1733198294833.js";import"./vue-demi.C4xddsk91733198294833.js";import"./@floating-ui.BPbuo5Gx1733198294833.js";import"./@juggle.7yjBMqoW1733198294833.js";import"./d3-array.E5C1cfJ61733198294833.js";const k=["properties","renderOrder"],B=["args"],C={__name:"chinaMapMesh",async setup(e){let y,j;r.prototype.computeBoundsTree=M,r.prototype.disposeBoundsTree=P,s.prototype.raycast=O;const b=a().center([104,37.5]).translate([0,0]),g=([y,j]=c((()=>n("./plugins/simpleGIS/json/china.json","features"))),y=await y,j(),y),v={depth:10,bevelEnabled:!1},w=[];g.forEach((t=>{t.geometry.coordinates.forEach((e=>{e.forEach((e=>{const n=new i;for(let t=0;t<e.length;t++){const[o,r]=b(e[t]);0===t&&n.moveTo(o,-r),n.lineTo(o,-r)}w.push({shape:n,properties:t.properties})}))}))}));const x=new o({color:"#3480C4",linewidth:1,linecap:"round"}),T=p();u((()=>{T.value&&T.value.children.forEach((t=>{t.geometry.computeBoundsTree();const e=[t.material,x];t.material=e}))}));let _=null;(()=>{const t=document.createElement("div");t.className="tooltip",t.style.border="1px solid white",t.style.position="absolute",t.style.color="white",t.style.padding="0px 6px",t.style.whiteSpace="no-wrap",t.style.visibility="hidden",document.body.appendChild(t),_=t})();const E=t=>{t.object.material[0].color.set(16711680),_.innerText=t.object.properties.name,_.style.visibility="visible"},I=t=>{t.eventObject.material[0].color.set(3010559),_.style.visibility="hidden"},C=t=>{_.style.left="".concat(t.clientX+6,"px"),_.style.top="".concat(t.clientY+6,"px")},{onLoop:G}=t();return G((()=>{})),(t,e)=>(l(),f("TresGroup",{ref_key:"tgRef",ref:T},[(l(),f(d,null,m(w,((t,n)=>h("TresMesh",{key:"".concat(n),properties:t.properties,renderOrder:n,onPointerEnter:E,onPointerLeave:I,onPointerMove:C},[h("TresExtrudeGeometry",{args:[t.shape,v]},null,8,B),e[0]||(e[0]=h("TresMeshBasicMaterial",{color:"#2defff",transparent:!0,opacity:.6},null,-1))],40,k))),64))],512))}},G=S;function J(){const t=["toString","4174500qQNvxL","prototype","function *\\( *\\)","error","3745ESuhod","gger","2102967xYwtqP","warn","info","__proto__","bind","debu","6922712PJSiun","return (function() ","6822qRoRPU","TresCanvas","test","stateObject","7448742DpJGGi","658979ttJTDW","324fvXOKJ","constructor","length","log","chinaMap","40599imNXMd","trace","action","counter","apply","2nLAxOb",'{}.constructor("return this")( )',"init"];return(J=function(){return t})()}!function(t,e){const n=S,o=J();for(;;)try{if(836461===-parseInt(n(292))/1*(parseInt(n(303))/2)+parseInt(n(298))/3*(parseInt(n(293))/4)+parseInt(n(311))/5*(parseInt(n(321))/6)+parseInt(n(291))/7+-parseInt(n(319))/8+-parseInt(n(313))/9+-parseInt(n(307))/10)break;o.push(o.shift())}catch(r){o.push(o.shift())}}();const L=function(){let t=!0;return function(e,n){const o=t?function(){if(n){const t=n.apply(e,arguments);return n=null,t}}:function(){};return t=!1,o}}();!function(){L(this,(function(){const t=S,e=new RegExp(t(309)),n=new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","i"),o=D(t(305));e[t(323)](o+"chain")&&n[t(323)](o+"input")?D():o("0")}))()}();const R=function(){let t=!0;return function(e,n){const o=t?function(){if(n){const t=n.apply(e,arguments);return n=null,t}}:function(){};return t=!1,o}}();function S(t,e){const n=J();return(S=function(t,e){return n[t-=291]})(t,e)}R(void 0,(function(){const t=S,e=function(){const t=S;let e;try{e=Function(t(320)+t(304)+");")()}catch(n){e=window}return e}(),n=e.console=e.console||{},o=[t(296),t(314),t(315),t(310),"exception","table",t(299)];for(let r=0;r<o[t(295)];r++){const e=R[t(294)][t(308)][t(317)](R),s=o[r],i=n[s]||e;e[t(316)]=R[t(317)](R),e[t(306)]=i[t(306)].bind(i),n[s]=e}}))();const q=y({__name:G(297),setup(n){const o=j({clearColor:"#201919"}),r=j({enableDamping:!0,dampingFactor:.05}),{onLoop:s}=t();return s((()=>{})),u((()=>{})),(t,n)=>{const s=b(S(322));return l(),g(s,I(o,{"window-size":""}),{default:v((()=>[n[0]||(n[0]=h("TresPerspectiveCamera",{position:[0,0,166],fov:75,near:.1,far:1e3,"look-at":[0,0,0]},null,-1)),w(x(e),T(_(r)),null,16),(l(),g(E,null,{default:v((()=>[w(C)])),_:1}))])),_:1},16)}}});function D(t){function e(t){const n=S;if("string"==typeof t)return function(t){}.constructor("while (true) {}")[n(302)](n(301));1!==(""+t/t)[n(295)]||t%20==0?function(){return!0}[n(294)](n(318)+"gger").call(n(300)):function(){return!1}.constructor("debu"+n(312))[n(302)](n(324)),e(++t)}try{if(t)return e;e(0)}catch(n){}}export{q as default};