import{a6 as t}from"./three.6cxCQsIj1724511658098.js";import{N as n}from"./@tresjs.6SjGVF2a1724511658098.js";import{d as r,a4 as e,o,D as i,J as a,aj as s,ak as c}from"./@vue.Q1VpS3901724511658098.js";const u=g;!function(t,n){const r=g,e=m();for(;;)try{if(531543===parseInt(r(437))/1*(-parseInt(r(406))/2)+parseInt(r(407))/3*(-parseInt(r(433))/4)+-parseInt(r(422))/5+parseInt(r(398))/6*(-parseInt(r(434))/7)+-parseInt(r(408))/8+-parseInt(r(431))/9*(parseInt(r(397))/10)+parseInt(r(394))/11*(parseInt(r(429))/12))break;e.push(e.shift())}catch(o){e.push(e.shift())}}();const p=function(){let t=!0;return function(n,r){const e=t?function(){if(r){const t=r[g(416)](n,arguments);return r=null,t}}:function(){};return t=!1,e}}();!function(){p(this,(function(){const t=g,n=new RegExp(t(414)),r=new RegExp(t(426),"i"),e=h(t(400));n[t(401)](e+"chain")&&r[t(401)](e+"input")?h():e("0")}))()}();const f=function(){let t=!0;return function(n,r){const e=t?function(){if(r){const t=r.apply(n,arguments);return r=null,t}}:function(){};return t=!1,e}}();f(void 0,(function(){const t=g;let n;try{n=Function(t(412)+t(411)+");")()}catch(o){n=window}const r=n[t(428)]=n[t(428)]||{},e=[t(396),t(402),t(399),"error","exception","table",t(391)];for(let i=0;i<e[t(424)];i++){const n=f[t(421)][t(390)][t(420)](f),o=e[i],a=r[o]||n;n[t(427)]=f[t(420)](f),n[t(395)]=a[t(395)][t(420)](a),r[o]=n}}))();const l=[u(389)];function g(t,n){const r=m();return(g=function(t,n){return r[t-=389]})(t,n)}function m(){const t=["248180VNYiBJ","6jeeqKP","info","init","test","warn","string","\n\t\tuniform sampler2D uSkybox;\n\t\tvarying vec3 vFragPos;\n\t\tconst float PI = 3.14159265359;\n\t\tvoid main() {\n\t\t\t\tvec3 dir = normalize(vFragPos);\n\t\t\t\tfloat v = (asin(dir.y) + PI * 0.5) / (PI); \n\t\t\t\tfloat u = (atan(dir.x, dir.z) + PI) / (PI * 2.0);\n\t\t\t\tgl_FragColor = texture2D(uSkybox, vec2(u, v));\n\t\t}","action","45932UxlXEl","3hgHpMb","7675408mfoSgU","wrapT","texture",'{}.constructor("return this")( )',"return (function() ","wrapS","function *\\( *\\)","debu","apply","stateObject","size","skyBoxAmesh","bind","constructor","3096665OHSttv","BackSide","length","TresBoxGeometry","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","__proto__","console","24cLGaRs","counter","189UVVqcb","TresMesh","208636VHSlKx","5626705NFrmiV","gger","ClampToEdgeWrapping","11MRvniF","args","prototype","trace","LinearFilter","call","20570440hfUUze","toString","log"];return(m=function(){return t})()}const v=r({__name:u(419),props:{texture:{},size:{default:1e3}},async setup(r){const p=u;let f,g;const m=r,{map:v}=([f,g]=e((()=>n({map:m[p(410)]}))),f=await f,g(),f);v[p(413)]=v[p(409)]=t[p(436)],v.generateMipmaps=!1,v.magFilter=t[p(392)],v.minFilter=t[p(392)];const h={uniforms:{uSkybox:{type:"t",value:v}},side:t[p(423)],vertexShader:"\n\t\tvarying vec3 vFragPos;\n\n\t\tvoid main() {\n\t\t\t\tvFragPos = position.xyz;\n\t\t\t\tvec4 viewSpace = vec4(mat3(modelViewMatrix) * position, 0.0);\n\t\t\t\tviewSpace.w = 1.0;\n\t\t\t\tgl_Position = projectionMatrix * viewSpace;    \n\t\t}",fragmentShader:p(404),depthWrite:!1};return(t,n)=>{const r=p;return o(),i(r(432),null,[a(r(425),{args:[m.size,m[r(418)],m[r(418)]]},null,8,l),a("TresShaderMaterial",s(c(h)),null,16)])}}});function h(t){function n(t){const r=g;if(typeof t===r(403))return function(t){}.constructor("while (true) {}").apply(r(430));1!==(""+t/t)[r(424)]||t%20==0?function(){return!0}[r(421)](r(415)+r(435))[r(393)](r(405)):function(){return!1}.constructor(r(415)+r(435))[r(416)](r(417)),n(++t)}try{if(t)return n;n(0)}catch(r){}}export{v as _};