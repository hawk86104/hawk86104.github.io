import{T as t,Z as n}from"./three.6E5muTWJ1722409645193.js";import{_ as e}from"./heatmap.js-fix.U2cqa0Gf1722409645193.js";import{d as o,a1 as r,o as a,D as i,J as s,aj as u,ak as c}from"./@vue.9bHx4gg21722409645193.js";const l=p;!function(t,n){const e=p,o=v();for(;;)try{if(954256===-parseInt(e(442))/1+-parseInt(e(397))/2+-parseInt(e(387))/3+-parseInt(e(429))/4+-parseInt(e(423))/5+parseInt(e(435))/6*(parseInt(e(412))/7)+-parseInt(e(392))/8*(-parseInt(e(424))/9))break;o.push(o.shift())}catch(r){o.push(o.shift())}}();const h=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e[p(400)](n,arguments);return e=null,t}}:function(){};return t=!1,o}}();function p(t,n){const e=v();return(p=function(t,n){return e[t-=385]})(t,n)}!function(){h(this,(function(){const t=p,n=new RegExp(t(401)),e=new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","i"),o=y("init");n[t(422)](o+"chain")&&e[t(422)](o+t(417))?y():o("0")}))()}();const f=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e[p(400)](n,arguments);return e=null,t}}:function(){};return t=!1,o}}();function v(){const t=["width","stateObject","bind","body","needsUpdate","TresMesh","1381289cQdnHz","\n\tuniform sampler2D heightMap;\n\tuniform float heightRatio;\n\tvarying vec2 vUv;\n\tvarying float hValue;\n\tvarying vec3 cl;\n\tvoid main() {\n\t  vUv = uv;\n\t  vec3 pos = position;\n\t  cl = texture2D(heightMap, vUv).rgb;\n\t  hValue = texture2D(heightMap, vUv).r;\n\t  pos.y = hValue * heightRatio;\n\t  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos,1.0);\n\t}","block","uniforms","args","input","create","TresShaderMaterial","TresPlaneGeometry","left","test","6436675BQAize","19847907RDVxbL","action","trace","console","exception","1727904mNvELO","style","warn","top","constructor","debu","18FywXoV","show2dCanvas","length","round","error","position","rotate-x","668204hptvch","heightRatio","Plane","gger","213141RwAfZl","__proto__","height","string","appendChild","16SHZsLg","info","push","random","counter","3179618XODWML","call","setData","apply","function *\\( *\\)","canvas","\n\tvarying float hValue;\n\tvarying vec3 cl;\n\tvoid main() {\n\t\tfloat v = abs(hValue - 1.);\n\t\tgl_FragColor = vec4(cl, .8 - v * v*1.1) ; \n\t}","_renderer","absolute"];return(v=function(){return t})()}f(void 0,(function(){const t=p,n=function(){let t;try{t=Function('return (function() {}.constructor("return this")( ));')()}catch(n){t=window}return t}(),e=n[t(427)]=n[t(427)]||{},o=["log",t(431),t(393),t(439),t(428),"table",t(426)];for(let r=0;r<o.length;r++){const n=f[t(433)].prototype.bind(f),a=o[r],i=e[a]||n;n[t(388)]=f[t(408)](f),n.toString=i.toString[t(408)](i),e[a]=n}}))();const g=["position"],d=[l(416),l(441)],m=o({__name:"heatmapJS",props:{position:{default:[0,0,0]},Plane:{default:[50,50,1e3,1e3]},show2dCanvas:{type:Boolean,default:!0},heightRatio:{default:6}},setup(o,{expose:h}){const f=l,v=o;let m=null;const y=(t,n)=>{const e=p;return Math[e(438)](10*(Math[e(395)]()*(t-n+1)+n))/10};let x=null;const w=t=>{const n=p;if(t);else{let e=0;for(t=[];e<2e3;)t[n(394)]({x:y(1,256),y:y(1,256),value:y(1,6)}),e++}m[n(399)]({max:12,data:t}),b[n(410)]=!0},b=new t((()=>{const t=p;return x=document.createElement("heatmap-canvas"),x[t(406)]=100,x[t(389)]=100,x[t(430)][t(440)]=t(405),x[t(430)][t(432)]="0",x[t(430)][t(421)]="0",document[t(409)][t(391)](x),m=e[t(418)]({container:x,width:256,height:256,blur:".8",radius:10}),m})()[f(404)][f(402)]);w();const _={transparent:!0,side:n,vertexShader:f(413),fragmentShader:f(403),uniforms:{heightMap:{type:"t",value:b},heightRatio:{value:v[f(443)]}}};return r((()=>{const t=f;x.style.display=""+(v[t(436)]?t(414):"none"),v[t(443)]&&(_[t(415)][t(443)].value=v.heightRatio)})),h({setData:w}),(t,n)=>{const e=f;return a(),i(e(411),{position:v[e(440)]},[s(e(420),{args:v[e(385)],"rotate-x":.5*-Math.PI},null,8,d),s(e(419),u(c(_)),null,16)],8,g)}}});function y(t){function n(t){const e=p;if(typeof t===e(390))return function(t){}[e(433)]("while (true) {}").apply(e(396));1!==(""+t/t)[e(437)]||t%20==0?function(){return!0}[e(433)](e(434)+"gger")[e(398)](e(425)):function(){return!1}[e(433)](e(434)+e(386))[e(400)](e(407)),n(++t)}try{if(t)return n;n(0)}catch(e){}}export{m as _};