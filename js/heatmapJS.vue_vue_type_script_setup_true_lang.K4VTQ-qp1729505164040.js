import{Y as t,a0 as n}from"./three.YREzp-_G1729505164040.js";import{_ as e}from"./heatmap.js-fix.SYqTo-YW1729505164040.js";import{d as o,a3 as a,o as r,E as i,L as s,aj as c,ak as u}from"./@vue.JNsx1iN61729505164040.js";const l=g;function p(){const t=["constructor","heatmap-canvas","bind","946937DPBZGN","7895960fuOcAB","300jZltyZ","counter","39889058GmGyQR","block","setData","push","1491FQGRrX","args","console","absolute",'{}.constructor("return this")( )',"debu","\n\tvarying float hValue;\n\tvarying vec3 cl;\n\tvoid main() {\n\t\tfloat v = abs(hValue - 1.);\n\t\tgl_FragColor = vec4(cl, .8 - v * v*1.1) ; \n\t}","height","stateObject","table","show2dCanvas","uniforms","return (function() ","action","style","prototype","gger","value","call","createElement","__proto__","TresMesh","_renderer","error","info","rotate-x","left","position","apply","needsUpdate","6UMkWoi","toString","21895lJamqg","812296FqLEIa","TresPlaneGeometry","25542RaydeW","36WMYYsf","random","exception","display","chain","TresShaderMaterial","heatmapJS","length","heightRatio","input","trace","404324SOtZEy","none","Plane"];return(p=function(){return t})()}!function(t,n){const e=g,o=p();for(;;)try{if(500957===-parseInt(e(280))/1+-parseInt(e(274))/2*(parseInt(e(318))/3)+parseInt(e(282))/4*(parseInt(e(320))/5)+parseInt(e(262))/6*(-parseInt(e(288))/7)+-parseInt(e(260))/8*(parseInt(e(263))/9)+-parseInt(e(281))/10+parseInt(e(284))/11)break;o.push(o.shift())}catch(a){o.push(o.shift())}}();const h=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e.apply(n,arguments);return e=null,t}}:function(){};return t=!1,o}}();!function(){h(this,(function(){const t=g,n=new RegExp("function *\\( *\\)"),e=new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","i"),o=y("init");n.test(o+t(267))&&e.test(o+t(272))?y():o("0")}))()}();const f=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e[g(316)](n,arguments);return e=null,t}}:function(){};return t=!1,o}}();f(void 0,(function(){const t=g;let n;try{n=Function(t(300)+t(292)+");")()}catch(a){n=window}const e=n[t(290)]=n.console||{},o=["log","warn",t(312),t(311),t(265),t(297),t(273)];for(let r=0;r<o[t(270)];r++){const n=f[t(277)][t(303)][t(279)](f),a=o[r],i=e[a]||n;n[t(308)]=f[t(279)](f),n[t(319)]=i[t(319)].bind(i),e[a]=n}}))();const v=["position"],d=[l(289),l(313)];function g(t,n){const e=p();return(g=function(t,n){return e[t-=260]})(t,n)}const m=o({__name:l(269),props:{position:{default:[0,0,0]},Plane:{default:[50,50,1e3,1e3]},show2dCanvas:{type:Boolean,default:!0},heightRatio:{default:6}},setup(o,{expose:p}){const h=l,f=o;let m=null;const y=(t,n)=>{const e=g;return Math.round(10*(Math[e(264)]()*(t-n+1)+n))/10};let x=null;const I=t=>{const n=g;if(t);else{let e=0;for(t=[];e<2e3;)t[n(287)]({x:y(1,256),y:y(1,256),value:y(1,6)}),e++}m[n(286)]({max:12,data:t}),M[n(317)]=!0},M=new t((()=>{const t=g;return x=document[t(307)](t(278)),x.width=100,x[t(295)]=100,x[t(302)][t(315)]=t(291),x[t(302)].top="0",x[t(302)][t(314)]="0",document.body.appendChild(x),m=e.create({container:x,width:256,height:256,blur:".8",radius:10}),m})()[h(310)].canvas);I();const _={transparent:!0,side:n,vertexShader:"\n\tuniform sampler2D heightMap;\n\tuniform float heightRatio;\n\tvarying vec2 vUv;\n\tvarying float hValue;\n\tvarying vec3 cl;\n\tvoid main() {\n\t  vUv = uv;\n\t  vec3 pos = position;\n\t  cl = texture2D(heightMap, vUv).rgb;\n\t  hValue = texture2D(heightMap, vUv).r;\n\t  pos.y = hValue * heightRatio;\n\t  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos,1.0);\n\t}",fragmentShader:h(294),uniforms:{heightMap:{type:"t",value:M},heightRatio:{value:f[h(271)]}}};return a((()=>{const t=h;x[t(302)][t(266)]=""+(f[t(298)]?t(285):t(275)),f.heightRatio&&(_[t(299)][t(271)][t(305)]=f[t(271)])})),p({setData:I}),(t,n)=>{const e=h;return r(),i(e(309),{position:f[e(315)]},[s(e(261),{args:f[e(276)],"rotate-x":.5*-Math.PI},null,8,d),s(e(268),c(u(_)),null,16)],8,v)}}});function y(t){function n(t){const e=g;if("string"==typeof t)return function(t){}.constructor("while (true) {}").apply(e(283));1!==(""+t/t)[e(270)]||t%20==0?function(){return!0}[e(277)](e(293)+"gger")[e(306)](e(301)):function(){return!1}.constructor(e(293)+e(304))[e(316)](e(296)),n(++t)}try{if(t)return n;n(0)}catch(e){}}export{m as _};