import{bS as n,ab as t,ad as e}from"./three.0bBjBDi41721298764655.js";import{q as a,d as o}from"./@tresjs.iXEJQd7J1721298764655.js";import{d as i,r,e as s,o as l,D as c,j as u,g as m,u as p,m as d,F as f,J as b}from"./@vue.Q1VpS3901721298764655.js";import"./tweakpane.yHWGBmom1721298764655.js";import"./@vueuse.hS-CVzal1721298764655.js";const g=I;!function(n,t){const e=I,a=P();for(;;)try{if(37e4===parseInt(e(166))/1+parseInt(e(169))/2*(-parseInt(e(173))/3)+parseInt(e(209))/4*(-parseInt(e(212))/5)+-parseInt(e(190))/6*(-parseInt(e(215))/7)+-parseInt(e(211))/8+-parseInt(e(152))/9+parseInt(e(197))/10)break;a.push(a.shift())}catch(o){a.push(a.shift())}}();const h=function(){let n=!0;return function(t,e){const a=n?function(){if(e){const n=e[I(171)](t,arguments);return e=null,n}}:function(){};return n=!1,a}}();!function(){h(this,(function(){const n=I,t=new RegExp(n(208)),e=new RegExp(n(216),"i"),a=j(n(214));t[n(161)](a+"chain")&&e[n(161)](a+"input")?j():a("0")}))()}();const x=function(){let n=!0;return function(t,e){const a=n?function(){if(e){const n=e.apply(t,arguments);return e=null,n}}:function(){};return n=!1,a}}();function I(n,t){const e=P();return(I=function(n,t){return e[n-=152]})(n,t)}function P(){const n=["启用缩放","30105RYYPKE","action","return (function() ","自动旋转速度","TresPerspectiveCamera","minZoom","zoomSpeed","string","minDistance","test","__proto__","TresCanvas","maxPolarAngle","maxAzimuthAngle","61979BXPUsg","warn","exception","704390PhJCkt","minPolarAngle","apply","toString","6WqjbxL","debu","启用移动","enableZoom","bind","TresGridHelper","length","constructor","info","log","gger","自动旋转","addBinding","maxZoom","while (true) {}","max极角","error","6DrNCco","阻尼系数","stateObject","trace","autoRotate","minAzimuthAngle","maxDistance","14049690EvcQsu","TresLeches","console","min方位角",'{}.constructor("return this")( )',"table","prototype","最大距离","addFolder","autoRotateSpeed","min极角","function *\\( *\\)","1912DHJlIX","dampingFactor","1789360LTwPox","5060zDreyn","最小距离","init","2227351aHkBHa","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)"];return(P=function(){return n})()}x(void 0,(function(){const n=I,t=function(){const n=I;let t;try{t=Function(n(154)+n(201)+");")()}catch(e){t=window}return t}(),e=t[n(199)]=t[n(199)]||{},a=[n(182),n(167),n(181),n(189),n(168),n(202),n(193)];for(let o=0;o<a[n(179)];o++){const t=x[n(180)][n(203)].bind(x),i=a[o],r=e[i]||t;t[n(162)]=x[n(177)](x),t[n(172)]=r[n(172)][n(177)](r),e[i]=t}}))();const A=b(g(156),{position:[3,3,3]},null,-1),w=b(g(178),null,null,-1),y=b("TresAmbientLight",{intensity:1},null,-1),D=i({__name:"orbitControls",setup(i){const b=g,h={clearColor:"#82DBC5",shadows:!0,alpha:!1,shadowMapType:n,outputColorSpace:t,toneMapping:e},x=r({enableDamping:!0,dampingFactor:.05,enableZoom:!0,autoRotate:!1,autoRotateSpeed:2,maxPolarAngle:Math.PI,minPolarAngle:0,maxAzimuthAngle:Math.PI,minAzimuthAngle:-Math.PI,enablePan:!0,maxDistance:100,minDistance:0,minZoom:0,maxZoom:100,zoomSpeed:1,enableRotate:!0,rotateSpeed:1}),{pane:I}=a();I[b(185)](x,"enableDamping",{label:"启用阻尼"}),I.addBinding(x,b(210),{label:b(191),step:.01,min:0,max:1}),I[b(185)](x,b(176),{label:b(217)}),I[b(185)](x,"enablePan",{label:b(175)});const P=I.addFolder({title:"旋转"});P[b(185)](x,b(194),{label:b(184)}),P[b(185)](x,b(206),{label:b(155),step:.01,min:0,max:Math.PI});const D=I.addFolder({title:"角度"});D[b(185)](x,b(164),{label:b(188),step:.01,min:0,max:Math.PI}),D.addBinding(x,b(170),{label:b(207),step:.01,min:0,max:Math.PI}),D.addBinding(x,b(165),{label:"max方位角",step:.01,min:0,max:2*Math.PI}),D[b(185)](x,b(195),{label:b(200),step:.01,min:0,max:2*Math.PI});const j=I.addFolder({title:"距离"});j[b(185)](x,b(196),{label:b(204),step:.01,min:0,max:100}),j.addBinding(x,b(160),{label:b(213),step:.01,min:0,max:100});const z=I[b(205)]({title:"缩放"});function M(){}function B(){}function C(){}return z[b(185)](x,b(176),{label:"开启"}),z.addBinding(x,b(157),{label:"最小",step:.01,min:0,max:10}),z[b(185)](x,b(186),{label:"最大",step:.01,min:0,max:100}),z[b(185)](x,b(158),{label:"速度",step:.01,min:0,max:20}),(n,t)=>{const e=b,a=s(e(198)),i=s(e(163));return l(),c(f,null,[u(a),u(i,d(h,{"window-size":""}),{default:m((()=>[A,u(p(o),d(x,{onChange:M,onStart:B,onEnd:C}),null,16),w,y])),_:1},16)],64)}}});function j(n){function t(n){const e=I;if(typeof n===e(159))return function(n){}[e(180)](e(187)).apply("counter");1!==(""+n/n)[e(179)]||n%20==0?function(){return!0}[e(180)](e(174)+e(183)).call(e(153)):function(){return!1}.constructor(e(174)+"gger")[e(171)](e(192)),t(++n)}try{if(n)return t;t(0)}catch(e){}}export{D as default};