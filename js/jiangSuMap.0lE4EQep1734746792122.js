import{m as t,e,b as n,J as o,U as r}from"./@tresjs.vA_UT8oy1734746792122.js";import{B as s,s as i,C as a,f as p,V as c,ck as l,a0 as u,cY as m}from"./three.1FILWcBb1734746792122.js";import{l as f}from"./utils.bDGdWJWR1734746792122.js";import{f as d}from"./utils.rZz3n_ca1734746792122.js";import{a6 as h,b as j,a3 as y,o as g,D as v,F as T,V as w,f as b,g as M,J as _,H as x,m as I,u as z,I as k,d as S,r as C,e as E,j as L,aj as O,ak as B,al as G}from"./@vue.-THQH3GC1734746792122.js";import{m as P}from"./d3-geo.R9cE6Wau1734746792122.js";import{c as F,d as A,a as D}from"./three-mesh-bvh.VBrofT861734746792122.js";import"./@vueuse.lqJslAkC1734746792122.js";import"./@fesjs.Y0rSBxCv1734746792122.js";import"./vue-router.PPpNBBl21734746792122.js";import"./lodash-es.kYt-_xTG1734746792122.js";import"./@qlin.yHhFDldE1734746792122.js";import"./pinia.fA-Uqav61734746792122.js";import"./vue-demi.C4xddsk91734746792122.js";import"./@floating-ui.BPbuo5Gx1734746792122.js";import"./@juggle.7yjBMqoW1734746792122.js";import"./@tweenjs.oXZvc3ug1734746792122.js";import"./http.iNNsohX_1734746792122.js";import"./axios.Ng308AU61734746792122.js";import"./color.wzR1lYDd1734746792122.js";import"./@amap.zNgKkCGX1734746792122.js";import"./color-string.OsW9nx8b1734746792122.js";import"./color-name.5h595HLw1734746792122.js";import"./simple-swizzle.C_qyH7011734746792122.js";import"./is-arrayish.pCO2O0P31734746792122.js";import"./color-convert.d6UkidG01734746792122.js";import"./lodash.yyi1K8Wk1734746792122.js";import"./naive-ui.MiBRXiC81734746792122.js";import"./date-fns.dsKIdits1734746792122.js";import"./@css-render.pik6McA-1734746792122.js";import"./seemly.SjiSeX2v1734746792122.js";import"./css-render.xqXdn7BN1734746792122.js";import"./@emotion.ZD_ZYAgY1734746792122.js";import"./vooks.nfwcqL4t1734746792122.js";import"./evtd.DtfwxtIl1734746792122.js";import"./vueuc.BLS9VtIq1734746792122.js";import"./vdirs.3eMQB3aH1734746792122.js";import"./treemate.dcEdf2le1734746792122.js";import"./date-fns-tz.u2TZEX621734746792122.js";import"./async-validator.-YBkpS4I1734746792122.js";import"./d3-array.AhNJy1f41734746792122.js";const H=["position"],R=["blending","map"],J=["name","renderOrder","pCenter"],Z=["args"],q=["color","side"],N=["renderOrder","position-z"],U=["position"],V=["renderOrder"],W=["position"],$={__name:"jiangSuMapMesh",async setup(r){let S,C;s.prototype.computeBoundsTree=F,s.prototype.disposeBoundsTree=A,i.prototype.raycast=D;const E=([S,C]=h((()=>f("./plugins/simpleGIS/json/320000_full.json","features"))),S=await S,C(),S),{map:L}=([S,C]=h((()=>n({map:"./plugins/simpleGIS/image/icon.png"}))),S=await S,C(),S),O=E[0].properties.centroid,B=P();B.center(O).translate([0,0]);const G=[];E.forEach((t=>{const e=new a("hsl( ".concat(16,", ").concat(30*Math.random()+55,"%, ").concat(30*Math.random()+55,"%)")).getHex(),n=.3*Math.random()+.3,{centroid:o,oneCenter:r,center:s,name:i}=t.properties,{coordinates:p,type:c}=t.geometry,l=o||r||s||[0,0],u=B(l);u[1]=-u[1],u[2]=n,G.push({type:"Html",position:u,name:i});const f=B(l);f[1]=.2-f[1],f[2]=n+.22,G.push({type:"Sprite",position:f}),p.forEach((t=>{function o(t){const o=new m;t.forEach(((t,e)=>{const[n,r]=B(t);0===e?o.moveTo(n,-r):o.lineTo(n,-r)})),G.push({type:"Shape",shape:o,name:i,color:e,depth:n,pCenter:f});const r=[];t.forEach((t=>{const[e,n]=B(t);r.push(e,-n,0)})),G.push({type:"Line",points:new Float32Array(r),depth:n})}"MultiPolygon"===c&&t.forEach((t=>o(t))),"Polygon"===c&&o(t)}))}));const $=j();y((()=>{$.value&&((t=>{t.rotation.x=-Math.PI/2;const e=(new p).setFromObject(t).getCenter(new c),n=[0,0];t.position.x=t.position.x-e.x-n[0],t.position.z=t.position.z-e.z-n[1]})($.value),$.value.children.forEach((t=>{"Mesh"===t.type&&t.geometry.computeBoundsTree()})))}));const K=t=>{t.object.material.opacity=.4},Q=t=>{t.eventObject.material.opacity=1},{camera:X,controls:Y}=t();let tt=null;const et=t=>{const e=new c;e.x=t.point.x,e.y=t.point.y+10,e.z=t.point.z,tt=d(X,e,Y)},{onBeforeLoop:nt}=e();nt((()=>{null==tt||tt.update()}));const ot={wrapperClass:"wrapper",as:"div",center:!0,sprite:!0,prepend:!0,transform:!0};return(t,e)=>(g(),v("TresGroup",{ref_key:"tgRef",ref:$},[(g(),v(T,null,w(G,((t,n)=>(g(),v(T,{key:"".concat(n)},["Html"===t.type?(g(),b(z(o),I({key:0,ref_for:!0},ot,{position:t.position}),{default:M((()=>[_("span",null,x(t.name),1)])),_:2},1040,["position"])):k("",!0),"Sprite"===t.type?(g(),v("TresSprite",{key:1,position:t.position,scale:.3,renderOrder:1e3},[_("TresSpriteMaterial",{color:16711680,blending:l,map:z(L)},null,8,R)],8,H)):k("",!0),"Shape"===t.type?(g(),v("TresMesh",{key:2,name:t.name,renderOrder:n,pCenter:t.pCenter,onPointerEnter:K,onPointerLeave:Q,onClick:et},[_("TresExtrudeGeometry",{args:[t.shape,{depth:t.depth,bevelEnabled:!1}]},null,8,Z),_("TresMeshStandardMaterial",{color:t.color,emissive:0,roughness:.45,metalness:.8,transparent:!0,side:u},null,8,q)],40,J)):k("",!0),"Line"===t.type?(g(),v(T,{key:3},[_("TresLine",{renderOrder:n,"position-z":t.depth+1e-4},[_("TresBufferGeometry",{position:[t.points,3]},null,8,U),e[0]||(e[0]=_("TresLineBasicMaterial",{color:16777215,linewidth:.5},null,-1))],8,N),_("TresLine",{renderOrder:n,"position-z":-1e-4},[_("TresBufferGeometry",{position:[t.points,3]},null,8,W),e[1]||(e[1]=_("TresLineBasicMaterial",{color:0,linewidth:.5},null,-1))],8,V)],64)):k("",!0)],64)))),64))],512))}},K=Q;function Q(t,e){const n=tt();return(Q=function(t,e){return n[t-=137]})(t,e)}!function(t,e){const n=Q,o=tt();for(;;)try{if(547465===parseInt(n(162))/1*(parseInt(n(154))/2)+parseInt(n(177))/3*(parseInt(n(137))/4)+parseInt(n(156))/5*(parseInt(n(176))/6)+parseInt(n(153))/7*(parseInt(n(164))/8)+parseInt(n(161))/9+parseInt(n(151))/10+-parseInt(n(169))/11)break;o.push(o.shift())}catch(r){o.push(o.shift())}}();const X=function(){let t=!0;return function(e,n){const o=t?function(){if(n){const t=n[Q(139)](e,arguments);return n=null,t}}:function(){};return t=!1,o}}();!function(){X(this,(function(){const t=Q,e=new RegExp(t(148)),n=new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","i"),o=nt(t(163));e[t(174)](o+t(149))&&n[t(174)](o+t(145))?nt():o("0")}))()}();const Y=function(){let t=!0;return function(e,n){const o=t?function(){if(n){const t=n[Q(139)](e,arguments);return n=null,t}}:function(){};return t=!1,o}}();function tt(){const t=["TresAmbientLight","6GNFhra","1641XxkwxM","warn","error","7184wWdufM","bind","apply","call","gger","jiangSuMap","while (true) {}","constructor","input","TresCanvas","prototype","function *\\( *\\)","chain","length","7061860RJqjOL","TresDirectionalLight","434iTyTHU","1155260AJebLb","exception","371195TRPTrR","string","debu","table","counter","1422090QSMKCZ","1vGgNpf","init","44344JoZdsy","console","TresGridHelper","TresPerspectiveCamera","trace","25241458WDETFD","action","toString","#ffdbd1","return (function() ","test"];return(tt=function(){return t})()}Y(void 0,(function(){const t=Q;let e;try{e=Function(t(173)+'{}.constructor("return this")( ));')()}catch(r){e=window}const n=e.console=e[t(165)]||{},o=["log",t(178),"info",t(179),t(155),t(159),t(168)];for(let s=0;s<o[t(150)];s++){const e=Y[t(144)][t(147)][t(138)](Y),r=o[s],i=n[r]||e;e.__proto__=Y[t(138)](Y),e.toString=i[t(171)][t(138)](i),n[r]=e}}))();const et=S({__name:K(142),setup(t){const e=K,n=C({clearColor:e(172),alpha:!0,antialias:!0}),o=C({enableDamping:!0,dampingFactor:.05,makeDefault:!0});return(t,s)=>{const i=e,a=E(i(146));return g(),b(a,I(n,{"window-size":""}),{default:M((()=>[s[0]||(s[0]=_(i(167),{position:[0,12,0],fov:75,near:.1,far:1e3,up:[0,0,-1]},null,-1)),L(z(r),O(B(o)),null,16),s[1]||(s[1]=_(i(175),{intensity:8.8},null,-1)),s[2]||(s[2]=_(i(152),{position:[0,10,5],intensity:.2},null,-1)),s[3]||(s[3]=_(i(152),{position:[0,10,-5],intensity:.2},null,-1)),s[4]||(s[4]=_(i(152),{position:[5,10,0],intensity:.2},null,-1)),s[5]||(s[5]=_(i(152),{position:[-5,10,0],intensity:.2},null,-1)),s[6]||(s[6]=_(i(166),{args:[20,10]},null,-1)),(g(),b(G,null,{default:M((()=>[L($)])),_:1}))])),_:1},16)}}});function nt(t){function e(t){const n=Q;if(typeof t===n(157))return function(t){}[n(144)](n(143)).apply(n(160));1!==(""+t/t).length||t%20==0?function(){return!0}.constructor(n(158)+n(141))[n(140)](n(170)):function(){return!1}[n(144)](n(158)+n(141)).apply("stateObject"),e(++t)}try{if(t)return e;e(0)}catch(n){}}export{et as default};