import{ai as t}from"./three.8iJMi2lU1733198294833.js";import{e as n,U as e,c as s}from"./@tresjs.sklxXn0u1733198294833.js";import{_ as o}from"./index.judEBZXv1733198294833.js";import{P as r}from"./tweakpane.yHWGBmom1733198294833.js";import{e as i}from"./index.8Rx_x_Ij1733198294833.js";import{d as a,r as l,b as u,o as c,f as p,g as m,J as f,j as d,u as h,aj as g,ak as j,al as _,m as y}from"./@vue.-THQH3GC1733198294833.js";import"./@vueuse.N_fQXUYA1733198294833.js";import"./lamina.GvZDVWM61733198294833.js";import"./glsl-tokenizer.7tkRo9R51733198294833.js";import"./@amap.DgFRMjnW1733198294833.js";import"./glsl-token-descope.qECHOTlR1733198294833.js";import"./glsl-token-depth.MrkiT5Ml1733198294833.js";import"./glsl-token-scope._wYnQZ581733198294833.js";import"./glsl-token-properties.ZDsvdWRh1733198294833.js";import"./glsl-token-assignments.ypFygMMN1733198294833.js";import"./glsl-token-string.0S-ITOcx1733198294833.js";import"./glsl-token-functions.GuL0xH_91733198294833.js";import"./object-hash.GOIeDp-W1733198294833.js";import"./jszip.eQOVOH091733198294833.js";import"./skyBoxAmesh.vue_vue_type_script_setup_true_lang.RffuWbEl1733198294833.js";import"./skyBoxBmesh.vue_vue_type_script_setup_true_lang.wgbGwaaC1733198294833.js";import"./utils.Fl38vYlE1733198294833.js";import"./skyBoxDmesh.vue_vue_type_script_setup_true_lang.HHU8koHR1733198294833.js";import"./three-stdlib.IR1PgtX51733198294833.js";import"./@pmndrs.D5ZkFGQo1733198294833.js";const x=v;!function(t,n){const e=v,s=w();for(;;)try{if(404144===parseInt(e(202))/1*(-parseInt(e(208))/2)+parseInt(e(223))/3*(parseInt(e(241))/4)+-parseInt(e(222))/5+parseInt(e(216))/6+-parseInt(e(226))/7*(parseInt(e(189))/8)+-parseInt(e(193))/9*(parseInt(e(185))/10)+parseInt(e(218))/11)break;s.push(s.shift())}catch(o){s.push(s.shift())}}();const b=function(){let t=!0;return function(n,e){const s=t?function(){if(e){const t=e[v(242)](n,arguments);return e=null,t}}:function(){};return t=!1,s}}();!function(){b(this,(function(){const t=v,n=new RegExp(t(215)),e=new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","i"),s=M(t(219));n.test(s+"chain")&&e.test(s+"input")?M():s("0")}))()}();const k=function(){let t=!0;return function(n,e){const s=t?function(){if(e){const t=e[v(242)](n,arguments);return e=null,t}}:function(){};return t=!1,s}}();function v(t,n){const e=w();return(v=function(t,n){return e[t-=183]})(t,n)}function w(){const t=["stateObject","TresMeshPhysicalMaterial","232834aDVoxa","lightSource","可视距离","toString","torusMesh","string","#33ffff","constructor","log","TresDirectionalLight","far","折射系数","table","worldRadius","只显示投射","404HkWhdo","apply","TresMeshStandardMaterial","TresTorusKnotGeometry","TresMesh","2438810dIdmmx","call","value","return (function() ","32GoKAYB","exception","TresPerspectiveCamera","prototype","27vxMPZy","折射系数2","sphere","bind","console","trace","材质大小","action","causticsDemo","1MxvvEU","info","光源位置","color",'{}.constructor("return this")( )',"rotation","162040tsDOMT","addBinding","torus","intensity","length","#ffffff","TresSphereGeometry","function *\\( *\\)","1118094avPJOU","gger","10090388KkAeDv","init","ior","debu","615290IWSHNF","10968titiwj"];return(w=function(){return t})()}k(void 0,(function(){const t=v;let n;try{n=Function(t(188)+t(206)+");")()}catch(o){n=window}const e=n[t(197)]=n.console||{},s=[t(234),"warn",t(203),"error",t(190),t(238),t(198)];for(let r=0;r<s.length;r++){const n=k[t(233)][t(192)][t(196)](k),o=s[r],i=e[o]||n;n.__proto__=k[t(196)](k),n.toString=i[t(229)].bind(i),e[o]=n}}))();const I=a({__name:x(201),setup(a){const b=x,k=l({alpha:!0,toneMapping:t,windowSize:!0,clearColor:10066329}),w=l({enableDamping:!0,autoRotate:!1}),I=u(null),{onBeforeLoop:M}=n();M((({elapsed:t})=>{const n=v;I.value&&(I[n(187)][n(207)].x=t,I[n(187)][n(207)].y=t)}));const T=l({color:b(213),ior:1.1,backsideIOR:1.1,far:30,worldRadius:.3,intensity:.05,causticsOnly:!1,lightSource:{x:1,y:1,z:1}}),B=new r({title:"参数"});return B[b(209)](T,b(205),{label:"颜色"}),B.addBinding(T,b(220),{label:b(237),min:.6,max:1.3,step:.01}),B[b(209)](T,"backsideIOR",{label:b(194),min:.6,max:1.3,step:.01}),B[b(209)](T,b(236),{label:b(228),min:0,max:30,step:1}),B[b(209)](T,b(239),{label:b(199),min:.001,max:.5,step:.001}),B[b(209)](T,b(211),{label:"强度",min:0,max:1,step:.01}),B.addBinding(T,"causticsOnly",{label:b(240)}),B[b(209)](T,b(227),{label:b(204),x:{min:-1,max:1},y:{min:-1,max:1},z:{min:-1,max:1}}),(t,n)=>{const r=b;return c(),p(h(s),y(k,{"window-size":""}),{default:m((()=>[n[2]||(n[2]=f(r(191),{position:[-20,20,15],fov:45,near:1,far:1e3},null,-1)),d(h(e),g(j(w)),null,16),n[3]||(n[3]=f(r(235),{position:[10,2,4],intensity:1},null,-1)),d(h(i),g(j(T)),{default:m((()=>[n[1]||(n[1]=f(r(184),{position:[8,5.5,8.5],"receive-shadow":"","cast-shadow":"",name:r(195)},[f(r(214),{args:[3.5]}),f(r(243),{color:16724991,roughness:0,metalness:1})],-1)),f(r(184),{ref_key:r(230),ref:I,position:[-8,6,-8],name:r(210)},n[0]||(n[0]=[f(r(183),{args:[3,1,100,32]},null,-1),f(r(225),{color:r(232),transmission:1,roughness:0,thickness:2},null,-1)]),512)])),_:1},16),(c(),p(_,null,{default:m((()=>[d(h(o),{position:[0,-.1,0]})])),_:1}))])),_:1},16)}}});function M(t){function n(t){const e=v;if(typeof t===e(231))return function(t){}[e(233)]("while (true) {}")[e(242)]("counter");1!==(""+t/t)[e(212)]||t%20==0?function(){return!0}[e(233)](e(221)+e(217))[e(186)](e(200)):function(){return!1}[e(233)]("debu"+e(217)).apply(e(224)),n(++t)}try{if(t)return n;n(0)}catch(e){}}export{I as default};