import{_ as t,m as n,c as e}from"./gl-matrix.AFK4LjqA1725245456099.js";import{i as r,r as o,d as i}from"./ice-utils.mm8CnbSO1725245456099.js";import{d as a,q as c,o as u,D as s}from"./@vue.Q1VpS3901725245456099.js";const f=_;function _(t,n){const e=p();return(_=function(t,n){return e[t-=138]})(t,n)}!function(t,n){const e=_,r=p();for(;;)try{if(392540===parseInt(e(184))/1*(parseInt(e(179))/2)+parseInt(e(165))/3+-parseInt(e(206))/4+-parseInt(e(173))/5+parseInt(e(157))/6+-parseInt(e(202))/7+parseInt(e(176))/8)break;r.push(r.shift())}catch(o){r.push(r.shift())}}();const l=function(){let t=!0;return function(n,e){const r=t?function(){if(e){const t=e.apply(n,arguments);return e=null,t}}:function(){};return t=!1,r}}();!function(){l(this,(function(){const t=_,n=new RegExp("function *\\( *\\)"),e=new RegExp(t(226),"i"),r=m("init");n.test(r+t(144))&&e[t(203)](r+t(223))?m():r("0")}))()}();const E=function(){let t=!0;return function(n,e){const r=t?function(){if(e){const t=e.apply(n,arguments);return e=null,t}}:function(){};return t=!1,r}}();E(void 0,(function(){const t=_;let n;try{n=Function(t(197)+t(205)+");")()}catch(o){n=window}const e=n[t(180)]=n.console||{},r=[t(213),t(217),"info",t(155),t(219),t(162),t(146)];for(let i=0;i<r[t(208)];i++){const n=E[t(185)][t(207)][t(172)](E),o=r[i],a=e[o]||n;n[t(210)]=E.bind(E),n.toString=a[t(175)][t(172)](a),e[o]=n}}))();const T={id:f(225),style:{height:f(141),width:f(141)}};function p(){const t=["3110564LUlXIA","prototype","length","pixelStorei","__proto__","ARRAY_BUFFER","COLOR_ATTACHMENT0","log","webgl","texParameteri","mat4","warn","clearColor","exception","perspective","uniform1i","lookAt","input","action","canvaswebgl","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","uniformMatrix4fv","while (true) {}","createBuffer","500px","bufferData","height","chain","TEXTURE_WRAP_T","trace","multiply","TRIANGLES","rotate","clear","createTexture","canvas","clientHeight","gger","error","call","1326594iCRjoX","querySelector","string","enableVertexAttribArray","viewport","table","bindTexture","useProgram","1188912savcBW","bindFramebuffer","CLAMP_TO_EDGE","bindBuffer","u_matrix","TEXTURE_MAG_FILTER","createFramebuffer","bind","225220TknvyY","TEXTURE_MIN_FILTER","toString","1453480zMKPiy","STATIC_DRAW","texImage2D","212NnCBFS","console","TEXTURE_2D","debu","FRAMEBUFFER","6041AVXXsU","constructor","UNSIGNED_BYTE","#canvaswebgl","RGBA","create","counter","getUniformLocation","stateObject","DEPTH_BUFFER_BIT","NEAREST","enable","getAttribLocation","return (function() ","apply","FLOAT","drawArrays","u_texture","1569463NbzuEI","test","getContext",'{}.constructor("return this")( )'];return(p=function(){return t})()}const R=a({__name:"webglFrameBuffer",setup(a){const f=function(){const a=_,c=document[a(158)](a(187)),u=null==c?void 0:c[a(204)](a(214));if(!u)return;var s=r(u,"\nattribute vec4 a_position;\nattribute vec2 a_texcoord;\nuniform mat4 u_matrix;\nvarying vec2 v_texcoord;\nvoid main() {\n  gl_Position = u_matrix * a_position;\n  v_texcoord = a_texcoord;\n}","\nprecision mediump float;\nvarying vec2 v_texcoord;\nuniform sampler2D u_texture;\nvoid main(){\n\tgl_FragColor=texture2D(u_texture, v_texcoord.xy);\n}\n"),f=u[a(196)](s,"a_position"),l=u[a(196)](s,"a_texcoord"),E=u[a(191)](s,a(169)),T=u[a(191)](s,a(201)),p=u[a(140)]();u[a(168)](u[a(211)],p),function(t){const n=_;var e=new Float32Array([-.5,-.5,-.5,-.5,.5,-.5,.5,-.5,-.5,-.5,.5,-.5,.5,.5,-.5,.5,-.5,-.5,-.5,-.5,.5,.5,-.5,.5,-.5,.5,.5,-.5,.5,.5,.5,-.5,.5,.5,.5,.5,-.5,.5,-.5,-.5,.5,.5,.5,.5,-.5,-.5,.5,.5,.5,.5,.5,.5,.5,-.5,-.5,-.5,-.5,.5,-.5,-.5,-.5,-.5,.5,-.5,-.5,.5,.5,-.5,-.5,.5,-.5,.5,-.5,-.5,-.5,-.5,-.5,.5,-.5,.5,-.5,-.5,-.5,.5,-.5,.5,.5,-.5,.5,-.5,.5,-.5,-.5,.5,.5,-.5,.5,-.5,.5,.5,-.5,.5,.5,.5,-.5,.5,.5,.5]);t[n(142)](t[n(211)],e,t[n(177)])}(u);var R=u.createBuffer();u[a(168)](u[a(211)],R),function(t){const n=_;t.bufferData(t[n(211)],new Float32Array([0,0,0,1,1,0,0,1,1,1,1,0,0,0,0,1,1,0,1,0,0,1,1,1,0,0,0,1,1,0,0,1,1,1,1,0,0,0,0,1,1,0,1,0,0,1,1,1,0,0,0,1,1,0,0,1,1,1,1,0,0,0,0,1,1,0,1,0,0,1,1,1]),t[n(177)])}(u);var m=u.createTexture();u[a(163)](u[a(181)],m);{const t=0,n=u[a(188)],e=1,r=1,o=0,i=u[a(188)],c=u[a(186)],s=new Uint8Array([255,255,0,255]),f=1;u[a(209)](u.UNPACK_ALIGNMENT,f),u[a(178)](u.TEXTURE_2D,t,n,e,r,o,i,c,s),u[a(215)](u.TEXTURE_2D,u[a(174)],u.NEAREST),u[a(215)](u[a(181)],u[a(170)],u[a(194)]),u.texParameteri(u.TEXTURE_2D,u.TEXTURE_WRAP_S,u[a(167)]),u[a(215)](u[a(181)],u[a(145)],u[a(167)])}const A=u[a(151)]();u.bindTexture(u[a(181)],A);{const t=0,n=u[a(188)],e=0,r=u.RGBA,o=u.UNSIGNED_BYTE,i=null;u[a(178)](u[a(181)],t,n,256,256,e,r,o,i),u[a(215)](u[a(181)],u[a(174)],u.LINEAR),u[a(215)](u[a(181)],u.TEXTURE_WRAP_S,u[a(167)]),u[a(215)](u.TEXTURE_2D,u[a(145)],u[a(167)])}const v=u[a(171)]();u.bindFramebuffer(u.FRAMEBUFFER,v);const x=u[a(212)];u.framebufferTexture2D(u.FRAMEBUFFER,x,u[a(181)],A,0);var b=i(0),F=0;function d(r){const o=a;u[o(164)](s),u[o(160)](f),u[o(168)](u[o(211)],p);var i=3,c=u[o(199)],_=!1,m=0,A=0;u.vertexAttribPointer(f,i,c,_,m,A),u[o(160)](l),u[o(168)](u[o(211)],R);i=2,c=u[o(199)],_=!1,m=0,A=0;u.vertexAttribPointer(l,i,c,_,m,A);var v=t[o(216)][o(189)]();n[o(220)](v,-30,r,.1,1e4);let x=e();x=t[o(216)][o(149)](x,x,b,[0,1,0]);var F=e();t[o(216)][o(222)](F,[0,0,2],[0,0,0],[0,1,0]);let d=t[o(216)][o(189)]();t[o(216)][o(147)](d,F,x);var g=e();t[o(216)][o(147)](g,v,d),u[o(138)](E,!1,g),u[o(221)](T,0),u[o(200)](u[o(148)],0,36)}requestAnimationFrame((function t(n){const e=a;var r=(n*=.001)-F;F=n,b+=-.4*r,o(u.canvas),u[e(195)](u.CULL_FACE),u[e(195)](u.DEPTH_TEST);u.bindFramebuffer(u[e(183)],v),u[e(163)](u[e(181)],m),u[e(161)](0,0,256,256),u[e(218)](0,1,0,1),u[e(150)](u.COLOR_BUFFER_BIT|u[e(193)]);d(1);u[e(166)](u[e(183)],null),u.bindTexture(u.TEXTURE_2D,A),u[e(161)](0,0,u.canvas.width,u[e(152)][e(143)]),u[e(218)](1,1,1,1),u[e(150)](u.COLOR_BUFFER_BIT|u[e(193)]);d(u.canvas.clientWidth/u[e(152)][e(153)]);requestAnimationFrame(t)}))};return c((()=>{f()})),(t,n)=>{const e=_;return u(),s(e(152),T)}}});function m(t){function n(t){const e=_;if(typeof t===e(159))return function(t){}[e(185)](e(139))[e(198)](e(190));1!==(""+t/t)[e(208)]||t%20==0?function(){return!0}[e(185)](e(182)+e(154))[e(156)](e(224)):function(){return!1}.constructor(e(182)+e(154))[e(198)](e(192)),n(++t)}try{if(t)return n;n(0)}catch(e){}}export{R as default};