import{bg as t,n,_ as r}from"./three.NPKhDGTA1734239885681.js";import{b as e}from"./@tresjs.qWeugQU61734239885681.js";import{d as o,a6 as i,o as s,D as a,J as c,aj as u,ak as f}from"./@vue.-THQH3GC1734239885681.js";const p=m;!function(t,n){const r=m,e=d();for(;;)try{if(692261===-parseInt(r(212))/1*(parseInt(r(206))/2)+parseInt(r(202))/3*(-parseInt(r(203))/4)+-parseInt(r(217))/5+-parseInt(r(213))/6*(-parseInt(r(226))/7)+parseInt(r(208))/8+parseInt(r(211))/9+parseInt(r(196))/10)break;e.push(e.shift())}catch(o){e.push(e.shift())}}();const l=function(){let t=!0;return function(n,r){const e=t?function(){if(r){const t=r[m(188)](n,arguments);return r=null,t}}:function(){};return t=!1,e}}();!function(){l(this,(function(){const t=m,n=new RegExp(t(205)),r=new RegExp(t(201),"i"),e=y(t(228));n[t(182)](e+"chain")&&r[t(182)](e+t(223))?y():e("0")}))()}();const g=function(){let t=!0;return function(n,r){const e=t?function(){if(r){const t=r[m(188)](n,arguments);return r=null,t}}:function(){};return t=!1,e}}();function m(t,n){const r=d();return(m=function(t,n){return r[t-=182]})(t,n)}g(void 0,(function(){const t=m,n=function(){const t=m;let n;try{n=Function(t(199)+'{}.constructor("return this")( ));')()}catch(r){n=window}return n}(),r=n[t(190)]=n[t(190)]||{},e=[t(218),"warn",t(183),"error",t(227),"table",t(198)];for(let o=0;o<e[t(210)];o++){const n=g[t(207)].prototype[t(191)](g),i=e[o],s=r[i]||n;n[t(224)]=g.bind(g),n[t(195)]=s[t(195)][t(191)](s),r[i]=n}}))();const v=[p(186)];function d(){const t=["skyBoxAmesh","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","81lyJnGM","196776BIfMsX","TresMesh","function *\\( *\\)","2160120XmzGLu","constructor","2602888oEGUpg","call","length","1612170bEBfuG","1XMRNys","540qvUciu","counter","minFilter","wrapS","3313745NepURR","log","action","wrapT","BackSide","debu","input","__proto__","\n\t\tvarying vec3 vFragPos;\n\n\t\tvoid main() {\n\t\t\t\tvFragPos = position.xyz;\n\t\t\t\tvec4 viewSpace = vec4(mat3(modelViewMatrix) * position, 0.0);\n\t\t\t\tviewSpace.w = 1.0;\n\t\t\t\tgl_Position = projectionMatrix * viewSpace;    \n\t\t}","48489TfARZL","exception","init","test","info","string","while (true) {}","args","TresBoxGeometry","apply","texture","console","bind","TresShaderMaterial","\n\t\tuniform sampler2D uSkybox;\n\t\tvarying vec3 vFragPos;\n\t\tconst float PI = 3.14159265359;\n\t\tvoid main() {\n\t\t\t\tvec3 dir = normalize(vFragPos);\n\t\t\t\tfloat v = (asin(dir.y) + PI * 0.5) / (PI); \n\t\t\t\tfloat u = (atan(dir.x, dir.z) + PI) / (PI * 2.0);\n\t\t\t\tgl_FragColor = texture2D(uSkybox, vec2(u, v));\n\t\t}","size","toString","26353870uRCidp","magFilter","trace","return (function() "];return(d=function(){return t})()}const h=o({__name:p(200),props:{texture:{},size:{default:1e3}},async setup(o){const l=p;let g,m;const d=o,{map:h}=([g,m]=i((()=>e({map:d[l(189)]}))),g=await g,m(),g);h[l(216)]=h[l(220)]=t,h.generateMipmaps=!1,h[l(197)]=n,h[l(215)]=n;const y={uniforms:{uSkybox:{type:"t",value:h}},side:r[l(221)],vertexShader:l(225),fragmentShader:l(193),depthWrite:!1};return(t,n)=>{const r=l;return s(),a(r(204),null,[c(r(187),{args:[d[r(194)],d.size,d[r(194)]]},null,8,v),c(r(192),u(f(y)),null,16)])}}});function y(t){function n(t){const r=m;if(typeof t===r(184))return function(t){}[r(207)](r(185))[r(188)](r(214));1!==(""+t/t)[r(210)]||t%20==0?function(){return!0}[r(207)](r(222)+"gger")[r(209)](r(219)):function(){return!1}[r(207)]("debugger")[r(188)]("stateObject"),n(++t)}try{if(t)return n;n(0)}catch(r){}}export{h as _};