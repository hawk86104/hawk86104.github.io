import{a6 as t,l as n}from"./three.6cxCQsIj1724511658098.js";import{l as r}from"./utils.EpZEBIyF1724511658098.js";import{d as e,a4 as o,o as i,D as s,J as a,aj as c,ak as u}from"./@vue.Q1VpS3901724511658098.js";const p=m;!function(t,n){const r=m,e=l();for(;;)try{if(775516===parseInt(r(202))/1*(parseInt(r(196))/2)+-parseInt(r(184))/3*(parseInt(r(207))/4)+-parseInt(r(208))/5+-parseInt(r(193))/6+parseInt(r(166))/7*(-parseInt(r(195))/8)+-parseInt(r(206))/9+parseInt(r(163))/10)break;e.push(e.shift())}catch(o){e.push(e.shift())}}();const f=function(){let t=!0;return function(n,r){const e=t?function(){if(r){const t=r.apply(n,arguments);return r=null,t}}:function(){};return t=!1,e}}();function l(){const t=["BackSide","size","error","bind","wrapS","init","TresShaderMaterial","minFilter","stateObject","table","while (true) {}","\n\t\tvarying vec3 vFragPos;\n\n\t\tvoid main() {\n\t\t\t\tvFragPos = position.xyz;\n\t\t\t\tvec4 viewSpace = vec4(mat3(modelViewMatrix) * position, 0.0);\n\t\t\t\tviewSpace.w = 1.0;\n\t\t\t\tgl_Position = projectionMatrix * viewSpace;    \n\t\t}","console","input","test","call","3LAbvtS","gger","function *\\( *\\)","LinearFilter","TresMesh","length","return (function() ","apply","texture","961566OzFyOv","constructor","2212136lsLyiH","152qjMvgX","exception","ClampToEdgeWrapping","counter","skyBoxBmesh",'{}.constructor("return this")( )',"14937mnGYka","debu","generateMipmaps","warn","5442678eCflwD","5622204YuNDrz","5017645pRjjSV","wrapT","info","string","magFilter","30909040jIpIUJ","toString","\n\t\tuniform sampler2D uSkybox;\n\t\tvarying vec3 vFragPos;\n\t\tconst float PI = 3.14159265359;\n\t\tvoid main() {\n\t\t\t\tvec3 dir = normalize(vFragPos);\n\t\t\t\tfloat v = (asin(dir.y) + PI * 0.5) / (PI); \n\t\t\t\tfloat u = (atan(dir.x, dir.z) + PI) / (PI * 2.0);\n\t\t\t\tgl_FragColor = texture2D(uSkybox, vec2(u, v));\n\t\t}","7GgvvxL","TresBoxGeometry"];return(l=function(){return t})()}!function(){f(this,(function(){const t=m,n=new RegExp(t(186)),r=new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","i"),e=h(t(173));n[t(182)](e+"chain")&&r[t(182)](e+t(181))?h():e("0")}))()}();const v=function(){let t=!0;return function(n,r){const e=t?function(){if(r){const t=r[m(191)](n,arguments);return r=null,t}}:function(){};return t=!1,e}}();v(void 0,(function(){const t=m,n=function(){const t=m;let n;try{n=Function(t(190)+t(201)+");")()}catch(r){n=window}return n}(),r=n[t(180)]=n[t(180)]||{},e=["log",t(205),t(160),t(170),t(197),t(177),"trace"];for(let o=0;o<e.length;o++){const n=v[t(194)].prototype[t(171)](v),i=e[o],s=r[i]||n;n.__proto__=v[t(171)](v),n[t(164)]=s[t(164)].bind(s),r[i]=n}}))();const g=["args"];function m(t,n){const r=l();return(m=function(t,n){return r[t-=160]})(t,n)}const d=e({__name:p(200),props:{texture:{},size:{default:1e3}},async setup(e){const f=p;let l,v;const m=e,d=([l,v]=o((()=>r(m[f(192)]))),l=await l,v(),l);d[f(172)]=d[f(209)]=t[f(198)],d[f(204)]=!1,d[f(162)]=n,d[f(175)]=t[f(187)];const h={uniforms:{uSkybox:{type:"t",value:d}},side:t[f(168)],vertexShader:f(179),fragmentShader:f(165),depthWrite:!0};return(t,n)=>{const r=f;return i(),s(r(188),null,[a(r(167),{args:[m.size,m.size,m[r(169)]]},null,8,g),a(r(174),c(u(h)),null,16)])}}});function h(t){function n(t){const r=m;if(typeof t===r(161))return function(t){}[r(194)](r(178))[r(191)](r(199));1!==(""+t/t)[r(189)]||t%20==0?function(){return!0}[r(194)](r(203)+r(185))[r(183)]("action"):function(){return!1}.constructor(r(203)+r(185))[r(191)](r(176)),n(++t)}try{if(t)return n;n(0)}catch(r){}}export{d as _};