import{e as t,U as e}from"./@tresjs.FlKhQDQ71735866388381.js";import{l as n}from"./utils.B-Lr6Pag1735866388381.js";import{ac as r,B as o,s,cX as a}from"./three.Rja0AEnA1735866388381.js";import{m as i}from"./d3-geo.JmGzCcHN1735866388381.js";import{a4 as c,b as p,a1 as l,o as u,D as f,F as d,V as m,J as h,d as y,r as j,e as b,f as g,g as v,j as w,u as I,aj as E,ak as T,al as x,m as _}from"./@vue.yG49nQHr1735866388381.js";import{c as B,d as M,a as k}from"./three-mesh-bvh.uuNiUzrn1735866388381.js";import"./@vueuse.YI3Exu6_1735866388381.js";import"./@fesjs.u6K5q1hz1735866388381.js";import"./vue-router.9bMbssc81735866388381.js";import"./lodash-es.kYt-_xTG1735866388381.js";import"./@qlin.yHhFDldE1735866388381.js";import"./pinia.U7dsyb111735866388381.js";import"./vue-demi.C4xddsk91735866388381.js";import"./@floating-ui.BPbuo5Gx1735866388381.js";import"./@juggle.7yjBMqoW1735866388381.js";import"./d3-array.AhNJy1f41735866388381.js";const P=["properties","renderOrder"],C=["args"],R={__name:"chinaMapMesh",async setup(e){let y,j;o.prototype.computeBoundsTree=B,o.prototype.disposeBoundsTree=M,s.prototype.raycast=k;const b=i().center([104,37.5]).translate([0,0]),g=([y,j]=c((()=>n("./plugins/simpleGIS/json/china.json","features"))),y=await y,j(),y),v={depth:10,bevelEnabled:!1},w=[];g.forEach((t=>{t.geometry.coordinates.forEach((e=>{e.forEach((e=>{const n=new a;for(let t=0;t<e.length;t++){const[r,o]=b(e[t]);0===t&&n.moveTo(r,-o),n.lineTo(r,-o)}w.push({shape:n,properties:t.properties})}))}))}));const I=new r({color:"#3480C4",linewidth:1,linecap:"round"}),E=p();l((()=>{E.value&&E.value.children.forEach((t=>{t.geometry.computeBoundsTree();const e=[t.material,I];t.material=e}))}));let T=null;(()=>{const t=document.createElement("div");t.className="tooltip",t.style.border="1px solid white",t.style.position="absolute",t.style.color="white",t.style.padding="0px 6px",t.style.whiteSpace="no-wrap",t.style.visibility="hidden",document.body.appendChild(t),T=t})();const x=t=>{t.object.material[0].color.set(16711680),T.innerText=t.object.properties.name,T.style.visibility="visible"},_=t=>{t.eventObject.material[0].color.set(3010559),T.style.visibility="hidden"},R=t=>{T.style.left="".concat(t.clientX+6,"px"),T.style.top="".concat(t.clientY+6,"px")},{onLoop:O}=t();return O((()=>{})),(t,e)=>(u(),f("TresGroup",{ref_key:"tgRef",ref:E},[(u(),f(d,null,m(w,((t,n)=>h("TresMesh",{key:"".concat(n),properties:t.properties,renderOrder:n,onPointerEnter:x,onPointerLeave:_,onPointerMove:R},[h("TresExtrudeGeometry",{args:[t.shape,v]},null,8,C),e[0]||(e[0]=h("TresMeshBasicMaterial",{color:"#2defff",transparent:!0,opacity:.6},null,-1))],40,P))),64))],512))}};function O(){const t=["toString","exception","info","prototype","length","72836jCQdBc","__proto__","constructor","warn","while (true) {}","test","chinaMap","debu","2tRaTbW","error","stateObject","apply","5721144eYrNdI","bind","init","20838VaQxEt","function *\\( *\\)","TresCanvas","741834YRjxfZ","6QgEiDw","196ZkBkun","chain","10MEySGe","gger","counter","254089NKXWUB","7idPbPJ","input","console","table","#201919","2757535VHmiTd","6396448lHsSEb","576RiaOPI"];return(O=function(){return t})()}const S=z;function z(t,e){const n=O();return(z=function(t,e){return n[t-=449]})(t,e)}!function(t,e){const n=z,r=O();for(;;)try{if(585949===parseInt(n(477))/1*(-parseInt(n(469))/2)+parseInt(n(484))/3*(-parseInt(n(450))/4)+parseInt(n(461))/5*(-parseInt(n(449))/6)+-parseInt(n(456))/7*(-parseInt(n(462))/8)+-parseInt(n(487))/9*(-parseInt(n(452))/10)+parseInt(n(455))/11*(parseInt(n(463))/12)+-parseInt(n(481))/13)break;r.push(r.shift())}catch(o){r.push(r.shift())}}();const G=function(){let t=!0;return function(e,n){const r=t?function(){if(n){const t=n.apply(e,arguments);return n=null,t}}:function(){};return t=!1,r}}();!function(){G(this,(function(){const t=z,e=new RegExp(t(485)),n=new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","i"),r=F(t(483));e.test(r+t(451))&&n[t(474)](r+t(457))?F():r("0")}))()}();const Z=function(){let t=!0;return function(e,n){const r=t?function(){if(n){const t=n.apply(e,arguments);return n=null,t}}:function(){};return t=!1,r}}();Z(void 0,(function(){const t=z,e=function(){let t;try{t=Function('return (function() {}.constructor("return this")( ));')()}catch(e){t=window}return t}(),n=e.console=e[t(458)]||{},r=["log",t(472),t(466),t(478),t(465),t(459),"trace"];for(let o=0;o<r[t(468)];o++){const e=Z[t(471)][t(467)].bind(Z),s=r[o],a=n[s]||e;e[t(470)]=Z[t(482)](Z),e[t(464)]=a[t(464)].bind(a),n[s]=e}}))();const D=y({__name:S(475),setup(n){const r=S,o=j({clearColor:r(460)}),s=j({enableDamping:!0,dampingFactor:.05}),{onLoop:a}=t();return a((()=>{})),l((()=>{})),(t,n)=>{const a=b(r(486));return u(),g(a,_(o,{"window-size":""}),{default:v((()=>[n[0]||(n[0]=h("TresPerspectiveCamera",{position:[0,0,166],fov:75,near:.1,far:1e3,"look-at":[0,0,0]},null,-1)),w(I(e),E(T(s)),null,16),(u(),g(x,null,{default:v((()=>[w(R)])),_:1}))])),_:1},16)}}});function F(t){function e(t){const n=z;if("string"==typeof t)return function(t){}[n(471)](n(473))[n(480)](n(454));1!==(""+t/t).length||t%20==0?function(){return!0}.constructor(n(476)+n(453)).call("action"):function(){return!1}.constructor("debu"+n(453))[n(480)](n(479)),e(++t)}try{if(t)return e;e(0)}catch(n){}}export{D as default};