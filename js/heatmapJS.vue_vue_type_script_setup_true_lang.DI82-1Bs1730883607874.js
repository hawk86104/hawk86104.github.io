import{Y as t,a0 as n}from"./three.fIUcjaNz1730883607874.js";import{_ as e}from"./heatmap.js-fix.Jcmyfd0K1730883607874.js";import{d as o,a3 as r,o as a,D as i,J as s,aj as u,ak as c}from"./@vue.Cfu43fwq1730883607874.js";const l=h;function h(t,n){const e=f();return(h=function(t,n){return e[t-=207]})(t,n)}!function(t,n){const e=h,o=f();for(;;)try{if(982984===parseInt(e(263))/1*(parseInt(e(255))/2)+parseInt(e(209))/3+-parseInt(e(236))/4*(parseInt(e(250))/5)+parseInt(e(217))/6+parseInt(e(224))/7*(-parseInt(e(228))/8)+-parseInt(e(243))/9+-parseInt(e(212))/10*(-parseInt(e(215))/11))break;o.push(o.shift())}catch(r){o.push(o.shift())}}();const p=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e[h(268)](n,arguments);return e=null,t}}:function(){};return t=!1,o}}();function f(){const t=["length","uniforms","trace","action","14NrvkAs","absolute","appendChild","warn","heatmap-canvas","apply","left","heightRatio","setData","\n\tvarying float hValue;\n\tvarying vec3 cl;\n\tvoid main() {\n\t\tfloat v = abs(hValue - 1.);\n\t\tgl_FragColor = vec4(cl, .8 - v * v*1.1) ; \n\t}","4444191gnEBNh","input","random","812620KWJUOu","chain","gger","418imdPWc",'{}.constructor("return this")( )',"4260180OrGNfo","createElement","TresShaderMaterial","display","none","counter","bind","56ONKqKu","toString","canvas","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","1421424haJFNz","position","init","needsUpdate","exception","__proto__","info","create","7265508wOyyEs","constructor","width","console","TresPlaneGeometry","function *\\( *\\)","prototype","16096392QLzGBd","\n\tuniform sampler2D heightMap;\n\tuniform float heightRatio;\n\tvarying vec2 vUv;\n\tvarying float hValue;\n\tvarying vec3 cl;\n\tvoid main() {\n\t  vUv = uv;\n\t  vec3 pos = position;\n\t  cl = texture2D(heightMap, vUv).rgb;\n\t  hValue = texture2D(heightMap, vUv).r;\n\t  pos.y = hValue * heightRatio;\n\t  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos,1.0);\n\t}","value","stateObject","string","body","call","5YKgfSo","Plane","round","log","debu","104270MSHNYY","heatmapJS","style","while (true) {}"];return(f=function(){return t})()}!function(){p(this,(function(){const t=h,n=new RegExp(t(241)),e=new RegExp(t(227),"i"),o=y(t(230));n.test(o+t(213))&&e.test(o+t(210))?y():o("0")}))()}();const d=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e[h(268)](n,arguments);return e=null,t}}:function(){};return t=!1,o}}();d(void 0,(function(){const t=h;let n;try{n=Function("return (function() "+t(216)+");")()}catch(r){n=window}const e=n[t(239)]=n[t(239)]||{},o=[t(253),t(266),t(234),"error",t(232),"table",t(261)];for(let a=0;a<o[t(259)];a++){const n=d[t(237)][t(242)].bind(d),r=o[a],i=e[r]||n;n[t(233)]=d.bind(d),n.toString=i[t(225)][t(223)](i),e[r]=n}}))();const v=["position"],g=["args","rotate-x"],m=o({__name:l(256),props:{position:{default:[0,0,0]},Plane:{default:[50,50,1e3,1e3]},show2dCanvas:{type:Boolean,default:!0},heightRatio:{default:6}},setup(o,{expose:p}){const f=l,d=o;let m=null;const y=(t,n)=>{const e=h;return Math[e(252)](10*(Math[e(211)]()*(t-n+1)+n))/10};let x=null;const b=t=>{const n=h;if(t);else{let n=0;for(t=[];n<2e3;)t.push({x:y(1,256),y:y(1,256),value:y(1,6)}),n++}m[n(207)]({max:12,data:t}),w[n(231)]=!0},w=new t((()=>{const t=h;return x=document[t(218)](t(267)),x[t(238)]=100,x.height=100,x[t(257)].position=t(264),x[t(257)].top="0",x[t(257)][t(269)]="0",document[t(248)][t(265)](x),m=e[t(235)]({container:x,width:256,height:256,blur:".8",radius:10}),m})()._renderer[f(226)]);b();const _={transparent:!0,side:n,vertexShader:f(244),fragmentShader:f(208),uniforms:{heightMap:{type:"t",value:w},heightRatio:{value:d[f(270)]}}};return r((()=>{const t=f;x[t(257)][t(220)]=""+(d.show2dCanvas?"block":t(221)),d[t(270)]&&(_[t(260)][t(270)][t(245)]=d[t(270)])})),p({setData:b}),(t,n)=>{const e=f;return a(),i("TresMesh",{position:d[e(229)]},[s(e(240),{args:d[e(251)],"rotate-x":.5*-Math.PI},null,8,g),s(e(219),u(c(_)),null,16)],8,v)}}});function y(t){function n(t){const e=h;if(typeof t===e(247))return function(t){}[e(237)](e(258))[e(268)](e(222));1!==(""+t/t)[e(259)]||t%20==0?function(){return!0}[e(237)](e(254)+e(214))[e(249)](e(262)):function(){return!1}[e(237)](e(254)+"gger")[e(268)](e(246)),n(++t)}try{if(t)return n;n(0)}catch(e){}}export{m as _};