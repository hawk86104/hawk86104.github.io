import{_ as t,l as n,m as r,a as e}from"./gl-matrix.0nyMfTXR1733198294833.js";import{i as o,r as i,d as a}from"./ice-utils.mF7frmb01733198294833.js";import{d as c,q as u,o as s,D as f}from"./@vue.-THQH3GC1733198294833.js";const l=v;!function(t,n){const r=v,e=T();for(;;)try{if(183108===-parseInt(r(304))/1+parseInt(r(316))/2*(-parseInt(r(312))/3)+parseInt(r(285))/4+parseInt(r(303))/5*(-parseInt(r(334))/6)+parseInt(r(327))/7+parseInt(r(335))/8+parseInt(r(310))/9)break;e.push(e.shift())}catch(o){e.push(e.shift())}}();const _=function(){let t=!0;return function(n,r){const e=t?function(){if(r){const t=r.apply(n,arguments);return r=null,t}}:function(){};return t=!1,e}}();!function(){_(this,(function(){const t=v,n=new RegExp(t(326)),r=new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","i"),e=R(t(333));n.test(e+t(336))&&r[t(338)](e+"input")?R():e("0")}))()}();const E=function(){let t=!0;return function(n,r){const e=t?function(){if(r){const t=r.apply(n,arguments);return r=null,t}}:function(){};return t=!1,e}}();function T(){const t=["1759105FOuGGD","13553ADOCfi","UNPACK_ALIGNMENT","RGBA","bindFramebuffer","createBuffer","enableVertexAttribArray","1381509dzKqAD","bufferData","18wpWyvM","querySelector","vertexAttribPointer","createFramebuffer","98906Hlpcdu",'{}.constructor("return this")( )',"FRAMEBUFFER","length","TEXTURE_WRAP_S","webgl","trace","createTexture","ARRAY_BUFFER","a_texcoord","function *\\( *\\)","1095696ypeXsT","a_position","#canvaswebgl","bindTexture","CULL_FACE","log","init","6TutUgr","1991080aSBSil","chain","enable","test","apply","CLAMP_TO_EDGE","framebufferTexture2D","STATIC_DRAW","getAttribLocation","console","warn","error","FLOAT","TEXTURE_2D","TEXTURE_WRAP_T","clientHeight","uniform1i","canvas","clear","COLOR_BUFFER_BIT","canvaswebgl","DEPTH_BUFFER_BIT","multiply","NEAREST","webglFrameBuffer","action","LINEAR","drawArrays","\nattribute vec4 a_position;\nattribute vec2 a_texcoord;\nuniform mat4 u_matrix;\nvarying vec2 v_texcoord;\nvoid main() {\n  gl_Position = u_matrix * a_position;\n  v_texcoord = a_texcoord;\n}","TEXTURE_MAG_FILTER","return (function() ","perspective","rotate","COLOR_ATTACHMENT0","clearColor","mat4","width","texParameteri","constructor","getUniformLocation","viewport","1145144tGlrrn","exception","useProgram","string","texImage2D","create","bindBuffer","TEXTURE_MIN_FILTER","while (true) {}","debu","clientWidth","bind","DEPTH_TEST","gger","toString","counter","info","table"];return(T=function(){return t})()}E(void 0,(function(){const t=v,n=function(){const t=v;let n;try{n=Function(t(274)+t(317)+");")()}catch(r){n=window}return n}(),r=n[t(344)]=n.console||{},e=[t(332),t(345),t(301),t(346),t(286),t(302),t(322)];for(let o=0;o<e[t(319)];o++){const n=E[t(282)].prototype[t(296)](E),i=e[o],a=r[i]||n;n.__proto__=E[t(296)](E),n[t(299)]=a[t(299)][t(296)](a),r[i]=n}}))();const p={id:l(264),style:{height:"500px",width:"500px"}},m=l(272),A=c({__name:l(268),setup(c){const l=function(){const c=v,u=document[c(313)](c(329)),s=null==u?void 0:u.getContext(c(321));if(!s)return;var f=o(s,m,"\nprecision mediump float;\nvarying vec2 v_texcoord;\nuniform sampler2D u_texture;\nvoid main(){\n\tgl_FragColor=texture2D(u_texture, v_texcoord.xy);\n}\n"),l=s[c(343)](f,c(328)),_=s.getAttribLocation(f,c(325)),E=s[c(283)](f,"u_matrix"),T=s[c(283)](f,"u_texture"),p=s[c(308)]();s.bindBuffer(s[c(324)],p),function(t){const n=v;var r=new Float32Array([-.5,-.5,-.5,-.5,.5,-.5,.5,-.5,-.5,-.5,.5,-.5,.5,.5,-.5,.5,-.5,-.5,-.5,-.5,.5,.5,-.5,.5,-.5,.5,.5,-.5,.5,.5,.5,-.5,.5,.5,.5,.5,-.5,.5,-.5,-.5,.5,.5,.5,.5,-.5,-.5,.5,.5,.5,.5,.5,.5,.5,-.5,-.5,-.5,-.5,.5,-.5,-.5,-.5,-.5,.5,-.5,-.5,.5,.5,-.5,-.5,.5,-.5,.5,-.5,-.5,-.5,-.5,-.5,.5,-.5,.5,-.5,-.5,-.5,.5,-.5,.5,.5,-.5,.5,-.5,.5,-.5,-.5,.5,.5,-.5,.5,-.5,.5,.5,-.5,.5,.5,.5,-.5,.5,.5,.5]);t[n(311)](t[n(324)],r,t[n(342)])}(s);var A=s.createBuffer();s[c(291)](s[c(324)],A),function(t){const n=v;t[n(311)](t[n(324)],new Float32Array([0,0,0,1,1,0,0,1,1,1,1,0,0,0,0,1,1,0,1,0,0,1,1,1,0,0,0,1,1,0,0,1,1,1,1,0,0,0,0,1,1,0,1,0,0,1,1,1,0,0,0,1,1,0,0,1,1,1,1,0,0,0,0,1,1,0,1,0,0,1,1,1]),t[n(342)])}(s);var R=s[c(323)]();s[c(330)](s.TEXTURE_2D,R);{const t=0,n=s.RGBA,r=1,e=1,o=0,i=s[c(306)],a=s.UNSIGNED_BYTE,u=new Uint8Array([255,255,0,255]),f=1;s.pixelStorei(s[c(305)],f),s[c(289)](s[c(257)],t,n,r,e,o,i,a,u),s.texParameteri(s.TEXTURE_2D,s[c(292)],s[c(267)]),s[c(281)](s.TEXTURE_2D,s[c(273)],s.NEAREST),s[c(281)](s[c(257)],s[c(320)],s[c(340)]),s[c(281)](s[c(257)],s[c(258)],s[c(340)])}const x=s[c(323)]();s[c(330)](s[c(257)],x);{const t=0,n=s[c(306)],r=0,e=s[c(306)],o=s.UNSIGNED_BYTE,i=null;s[c(289)](s[c(257)],t,n,256,256,r,e,o,i),s[c(281)](s[c(257)],s[c(292)],s[c(270)]),s.texParameteri(s[c(257)],s[c(320)],s[c(340)]),s[c(281)](s[c(257)],s[c(258)],s[c(340)])}const d=s[c(315)]();s[c(307)](s[c(318)],d);const g=s[c(277)];s[c(341)](s.FRAMEBUFFER,g,s[c(257)],x,0);var F=a(0),b=0;function I(o){const i=c;s[i(287)](f),s[i(309)](l),s[i(291)](s[i(324)],p);var a=3,u=s[i(256)],m=!1,v=0,R=0;s.vertexAttribPointer(l,a,u,m,v,R),s[i(309)](_),s.bindBuffer(s[i(324)],A);a=2,u=s[i(256)],m=!1,v=0,R=0;s[i(314)](_,a,u,m,v,R);var x=t[i(279)][i(290)]();t[i(279)][i(275)](x,-30,o,.1,1e4);let d=t[i(279)][i(290)]();d=t[i(279)][i(276)](d,d,F,[0,1,0]);var g=t[i(279)][i(290)]();n(g,[0,0,2],[0,0,0],[0,1,0]);let b=t[i(279)].create();r(b,g,d);var I=t[i(279)][i(290)]();e[i(266)](I,x,b),s.uniformMatrix4fv(E,!1,I),s[i(260)](T,0),s[i(271)](s.TRIANGLES,0,36)}requestAnimationFrame((function t(n){const r=c;var e=(n*=.001)-b;b=n,F+=-.4*e,i(s[r(261)]),s.enable(s[r(331)]),s[r(337)](s[r(297)]);s[r(307)](s[r(318)],d),s[r(330)](s.TEXTURE_2D,R),s[r(284)](0,0,256,256),s[r(278)](0,1,0,1),s.clear(s[r(263)]|s.DEPTH_BUFFER_BIT);I(1);s[r(307)](s[r(318)],null),s[r(330)](s[r(257)],x),s[r(284)](0,0,s.canvas[r(280)],s.canvas.height),s[r(278)](1,1,1,1),s[r(262)](s.COLOR_BUFFER_BIT|s[r(265)]);I(s[r(261)][r(295)]/s.canvas[r(259)]);requestAnimationFrame(t)}))};return u((()=>{l()})),(t,n)=>{const r=v;return s(),f(r(261),p)}}});function v(t,n){const r=T();return(v=function(t,n){return r[t-=256]})(t,n)}function R(t){function n(t){const r=v;if(typeof t===r(288))return function(t){}.constructor(r(293))[r(339)](r(300));1!==(""+t/t)[r(319)]||t%20==0?function(){return!0}[r(282)]("debu"+r(298)).call(r(269)):function(){return!1}[r(282)](r(294)+"gger")[r(339)]("stateObject"),n(++t)}try{if(t)return n;n(0)}catch(r){}}export{A as default};