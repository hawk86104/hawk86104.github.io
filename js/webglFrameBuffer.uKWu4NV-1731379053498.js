import{_ as t,m as n}from"./gl-matrix.oVMHBNGj1731379053498.js";import{i as r,r as e,d as o}from"./ice-utils.0tdaXwny1731379053498.js";import{d as i,q as a,o as c,D as u}from"./@vue.-THQH3GC1731379053498.js";const s=E;!function(t,n){const r=E,e=T();for(;;)try{if(557632===-parseInt(r(444))/1+parseInt(r(462))/2+-parseInt(r(421))/3*(parseInt(r(377))/4)+-parseInt(r(405))/5*(-parseInt(r(457))/6)+-parseInt(r(404))/7+parseInt(r(389))/8+-parseInt(r(424))/9*(-parseInt(r(432))/10))break;e.push(e.shift())}catch(o){e.push(e.shift())}}();const f=function(){let t=!0;return function(n,r){const e=t?function(){if(r){const t=r.apply(n,arguments);return r=null,t}}:function(){};return t=!1,e}}();!function(){f(this,(function(){const t=E,n=new RegExp("function *\\( *\\)"),r=new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","i"),e=R(t(383));n.test(e+"chain")&&r[t(392)](e+t(446))?R():e("0")}))()}();const _=function(){let t=!0;return function(n,r){const e=t?function(){if(r){const t=r.apply(n,arguments);return r=null,t}}:function(){};return t=!1,e}}();_(void 0,(function(){const t=E,n=function(){const t=E;let n;try{n=Function("return (function() "+t(388)+");")()}catch(r){n=window}return n}(),r=n[t(391)]=n[t(391)]||{},e=[t(400),t(465),t(376),t(434),t(464),t(433),t(425)];for(let o=0;o<e.length;o++){const n=_[t(384)].prototype[t(415)](_),i=e[o],a=r[i]||n;n[t(397)]=_[t(415)](_),n.toString=a[t(466)][t(415)](a),r[i]=n}}))();const l={id:s(403),style:{height:s(449),width:s(449)}};function E(t,n){const r=T();return(E=function(t,n){return r[t-=375]})(t,n)}function T(){const t=["CULL_FACE","LINEAR","multiply","DEPTH_BUFFER_BIT","720dolbIi","length","texParameteri","981SiqaaQ","trace","a_position","enableVertexAttribArray","canvas","string","DEPTH_TEST","action","54790dCRdGa","table","error","bindFramebuffer","FLOAT","rotate","while (true) {}","clearColor","ARRAY_BUFFER","TRIANGLES","perspective","mat4","520249bwOXyD","vertexAttribPointer","input","#canvaswebgl","createBuffer","500px","createFramebuffer","create","debu","CLAMP_TO_EDGE","counter","UNPACK_ALIGNMENT","enable","6TLbXIC","UNSIGNED_BYTE","u_matrix","texImage2D","gger","1616454foJrCt","lookAt","exception","warn","toString","getAttribLocation","info","11224wNvWov","FRAMEBUFFER","uniformMatrix4fv","bindTexture","TEXTURE_WRAP_T","apply","init","constructor","TEXTURE_MIN_FILTER","drawArrays","TEXTURE_2D",'{}.constructor("return this")( )',"2365232DjslJa","bindBuffer","console","test","height","viewport","TEXTURE_WRAP_S","createTexture","__proto__","TEXTURE_MAG_FILTER","bufferData","log","RGBA","framebufferTexture2D","canvaswebgl","3040226bdyCzq","2422735TSYolQ","COLOR_ATTACHMENT0","getContext","NEAREST","COLOR_BUFFER_BIT","u_texture","clear","querySelector","stateObject","width","bind","a_texcoord"];return(T=function(){return t})()}const A=i({__name:"webglFrameBuffer",setup(i){const s=function(){const i=E,a=document[i(412)](i(447)),c=null==a?void 0:a[i(407)]("webgl");if(!c)return;var u=r(c,"\nattribute vec4 a_position;\nattribute vec2 a_texcoord;\nuniform mat4 u_matrix;\nvarying vec2 v_texcoord;\nvoid main() {\n  gl_Position = u_matrix * a_position;\n  v_texcoord = a_texcoord;\n}","\nprecision mediump float;\nvarying vec2 v_texcoord;\nuniform sampler2D u_texture;\nvoid main(){\n\tgl_FragColor=texture2D(u_texture, v_texcoord.xy);\n}\n"),s=c[i(375)](u,i(426)),f=c.getAttribLocation(u,i(416)),_=c.getUniformLocation(u,i(459)),l=c.getUniformLocation(u,i(410)),T=c[i(448)]();c.bindBuffer(c.ARRAY_BUFFER,T),function(t){const n=E;var r=new Float32Array([-.5,-.5,-.5,-.5,.5,-.5,.5,-.5,-.5,-.5,.5,-.5,.5,.5,-.5,.5,-.5,-.5,-.5,-.5,.5,.5,-.5,.5,-.5,.5,.5,-.5,.5,.5,.5,-.5,.5,.5,.5,.5,-.5,.5,-.5,-.5,.5,.5,.5,.5,-.5,-.5,.5,.5,.5,.5,.5,.5,.5,-.5,-.5,-.5,-.5,.5,-.5,-.5,-.5,-.5,.5,-.5,-.5,.5,.5,-.5,-.5,.5,-.5,.5,-.5,-.5,-.5,-.5,-.5,.5,-.5,.5,-.5,-.5,-.5,.5,-.5,.5,.5,-.5,.5,-.5,.5,-.5,-.5,.5,.5,-.5,.5,-.5,.5,.5,-.5,.5,.5,.5,-.5,.5,.5,.5]);t[n(399)](t[n(440)],r,t.STATIC_DRAW)}(c);var A=c.createBuffer();c[i(390)](c.ARRAY_BUFFER,A),function(t){const n=E;t[n(399)](t[n(440)],new Float32Array([0,0,0,1,1,0,0,1,1,1,1,0,0,0,0,1,1,0,1,0,0,1,1,1,0,0,0,1,1,0,0,1,1,1,1,0,0,0,0,1,1,0,1,0,0,1,1,1,0,0,0,1,1,0,0,1,1,1,1,0,0,0,0,1,1,0,1,0,0,1,1,1]),t.STATIC_DRAW)}(c);var R=c[i(396)]();c[i(380)](c[i(387)],R);{const t=0,n=c.RGBA,r=1,e=1,o=0,a=c[i(401)],u=c[i(458)],s=new Uint8Array([255,255,0,255]),f=1;c.pixelStorei(c[i(455)],f),c[i(460)](c[i(387)],t,n,r,e,o,a,u,s),c[i(423)](c[i(387)],c[i(385)],c.NEAREST),c.texParameteri(c[i(387)],c[i(398)],c[i(408)]),c[i(423)](c[i(387)],c[i(395)],c.CLAMP_TO_EDGE),c[i(423)](c[i(387)],c[i(381)],c[i(453)])}const p=c[i(396)]();c[i(380)](c.TEXTURE_2D,p);{const t=0,n=c.RGBA,r=0,e=c[i(401)],o=c[i(458)],a=null;c[i(460)](c[i(387)],t,n,256,256,r,e,o,a),c[i(423)](c.TEXTURE_2D,c[i(385)],c[i(418)]),c[i(423)](c[i(387)],c[i(395)],c[i(453)]),c[i(423)](c.TEXTURE_2D,c.TEXTURE_WRAP_T,c[i(453)])}const m=c[i(450)]();c[i(435)](c.FRAMEBUFFER,m);const F=c[i(406)];c[i(402)](c.FRAMEBUFFER,F,c[i(387)],p,0);var v=o(0),d=0;function x(r){const e=i;c.useProgram(u),c[e(427)](s),c[e(390)](c[e(440)],T);var o=3,a=c.FLOAT,E=!1,R=0,p=0;c[e(445)](s,o,a,E,R,p),c[e(427)](f),c[e(390)](c[e(440)],A);o=2,a=c[e(436)],E=!1,R=0,p=0;c.vertexAttribPointer(f,o,a,E,R,p);var m=t[e(443)][e(451)]();t[e(443)][e(442)](m,-30,r,.1,1e4);let F=t[e(443)][e(451)]();F=t[e(443)][e(437)](F,F,v,[0,1,0]);var d=t[e(443)][e(451)]();t[e(443)][e(463)](d,[0,0,2],[0,0,0],[0,1,0]);let x=t[e(443)][e(451)]();t[e(443)][e(419)](x,d,F);var b=n[e(451)]();t[e(443)][e(419)](b,m,x),c[e(379)](_,!1,b),c.uniform1i(l,0),c[e(386)](c[e(441)],0,36)}requestAnimationFrame((function t(n){const r=i;var o=(n*=.001)-d;d=n,v+=-.4*o,e(c[r(428)]),c.enable(c[r(417)]),c[r(456)](c[r(430)]);c[r(435)](c[r(378)],m),c[r(380)](c[r(387)],R),c.viewport(0,0,256,256),c[r(439)](0,1,0,1),c[r(411)](c[r(409)]|c[r(420)]);x(1);c[r(435)](c.FRAMEBUFFER,null),c[r(380)](c.TEXTURE_2D,p),c[r(394)](0,0,c[r(428)][r(414)],c[r(428)][r(393)]),c[r(439)](1,1,1,1),c[r(411)](c[r(409)]|c.DEPTH_BUFFER_BIT);x(c[r(428)].clientWidth/c[r(428)].clientHeight);requestAnimationFrame(t)}))};return a((()=>{s()})),(t,n)=>{const r=E;return c(),u(r(428),l)}}});function R(t){function n(t){const r=E;if(typeof t===r(429))return function(t){}.constructor(r(438))[r(382)](r(454));1!==(""+t/t)[r(422)]||t%20==0?function(){return!0}[r(384)]("debu"+r(461)).call(r(431)):function(){return!1}[r(384)](r(452)+r(461))[r(382)](r(413)),n(++t)}try{if(t)return n;n(0)}catch(r){}}export{A as default};