import{Y as t,a0 as n}from"./three.bXjbKLxC1731379053498.js";import{_ as e}from"./heatmap.js-fix.xXqX1yMJ1731379053498.js";import{d as o,a3 as a,o as r,D as i,J as s,aj as u,ak as c}from"./@vue.-THQH3GC1731379053498.js";function l(){const t=["\n\tvarying float hValue;\n\tvarying vec3 cl;\n\tvoid main() {\n\t\tfloat v = abs(hValue - 1.);\n\t\tgl_FragColor = vec4(cl, .8 - v * v*1.1) ; \n\t}","1882778RJufqD","1475148PRqeMY","bind","height","174123GofYpx","heightRatio","top","init","test","210uXyton","appendChild","create","width","4HwmtXq","error","setData","prototype","250348yBdomR","gger","needsUpdate","table","input","TresPlaneGeometry","while (true) {}","value","style","chain","trace","_renderer","string","position","length","canvas","console","166113sfOIdZ","debu","createElement","args","232rAbTaS","__proto__","random","body","TresShaderMaterial","info","TresMesh","apply","round","2562096KLVCRV","constructor","toString","heatmap-canvas","show2dCanvas","\n\tuniform sampler2D heightMap;\n\tuniform float heightRatio;\n\tvarying vec2 vUv;\n\tvarying float hValue;\n\tvarying vec3 cl;\n\tvoid main() {\n\t  vUv = uv;\n\t  vec3 pos = position;\n\t  cl = texture2D(heightMap, vUv).rgb;\n\t  hValue = texture2D(heightMap, vUv).r;\n\t  pos.y = hValue * heightRatio;\n\t  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos,1.0);\n\t}","push",'{}.constructor("return this")( )',"display","function *\\( *\\)","1409105XaPjqI"];return(l=function(){return t})()}const h=v;!function(t,n){const e=v,o=l();for(;;)try{if(564518===parseInt(e(412))/1+parseInt(e(408))/2+-parseInt(e(409))/3+parseInt(e(421))/4*(-parseInt(e(406))/5)+-parseInt(e(396))/6+-parseInt(e(425))/7*(-parseInt(e(446))/8)+parseInt(e(442))/9*(-parseInt(e(417))/10))break;o.push(o.shift())}catch(a){o.push(o.shift())}}();const f=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e[v(453)](n,arguments);return e=null,t}}:function(){};return t=!1,o}}();!function(){f(this,(function(){const t=v,n=new RegExp(t(405)),e=new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","i"),o=y(t(415));n[t(416)](o+t(434))&&e.test(o+t(429))?y():o("0")}))()}();const p=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e[v(453)](n,arguments);return e=null,t}}:function(){};return t=!1,o}}();p(void 0,(function(){const t=v;let n;try{n=Function("return (function() "+t(403)+");")()}catch(a){n=window}const e=n[t(441)]=n[t(441)]||{},o=["log","warn",t(451),t(422),"exception",t(428),t(435)];for(let r=0;r<o[t(439)];r++){const n=p[t(397)][t(424)][t(410)](p),a=o[r],i=e[a]||n;n[t(447)]=p.bind(p),n[t(398)]=i.toString[t(410)](i),e[a]=n}}))();const d=["position"],g=[h(445),"rotate-x"];function v(t,n){const e=l();return(v=function(t,n){return e[t-=395]})(t,n)}const m=o({__name:"heatmapJS",props:{position:{default:[0,0,0]},Plane:{default:[50,50,1e3,1e3]},show2dCanvas:{type:Boolean,default:!0},heightRatio:{default:6}},setup(o,{expose:l}){const f=h,p=o;let m=null;const y=(t,n)=>{const e=v;return Math[e(395)](10*(Math[e(448)]()*(t-n+1)+n))/10};let x=null;const R=t=>{const n=v;if(t);else{let e=0;for(t=[];e<2e3;)t[n(402)]({x:y(1,256),y:y(1,256),value:y(1,6)}),e++}m[n(423)]({max:12,data:t}),b[n(427)]=!0},b=new t((()=>{const t=v;return x=document[t(444)](t(399)),x[t(420)]=100,x[t(411)]=100,x.style[t(438)]="absolute",x[t(433)][t(414)]="0",x.style.left="0",document[t(449)][t(418)](x),m=e[t(419)]({container:x,width:256,height:256,blur:".8",radius:10}),m})()[f(436)][f(440)]);R();const w={transparent:!0,side:n,vertexShader:f(401),fragmentShader:f(407),uniforms:{heightMap:{type:"t",value:b},heightRatio:{value:p[f(413)]}}};return a((()=>{const t=f;x.style[t(404)]=p[t(400)]?"block":"none",p.heightRatio&&(w.uniforms.heightRatio[t(432)]=p.heightRatio)})),l({setData:R}),(t,n)=>{const e=f;return r(),i(e(452),{position:p[e(438)]},[s(e(430),{args:p.Plane,"rotate-x":.5*-Math.PI},null,8,g),s(e(450),u(c(w)),null,16)],8,d)}}});function y(t){function n(t){const e=v;if(typeof t===e(437))return function(t){}[e(397)](e(431))[e(453)]("counter");1!==(""+t/t).length||t%20==0?function(){return!0}[e(397)](e(443)+e(426)).call("action"):function(){return!1}[e(397)](e(443)+e(426))[e(453)]("stateObject"),n(++t)}try{if(t)return n;n(0)}catch(e){}}export{m as _};