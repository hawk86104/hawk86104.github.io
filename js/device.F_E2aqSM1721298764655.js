import{C as t,a6 as n,bV as e,bW as r,bX as o,bY as s,c5 as a,cy as c}from"./three.0bBjBDi41721298764655.js";function i(){const t=["8179317PqjieR","push","console","material","geometry","prototype","init","opacity","length","6245376pjtmQV","4397974VUKLTd","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","debu","LineSegments","22AxNNDN","__proto__","toString","renderTarget2","constructor","ShaderMaterial","test","bind","radius","6777vfoKmx","Color","EdgesGeometry","MeshBasicMaterial","chain","2qRdaoo",'{}.constructor("return this")( )',"5629700uMstNi","threshold","return (function() ","addPass","call","#0fb1fb","function *\\( *\\)","236vpdnOo","isMesh","input","gger","error","traverse","baseTexture","needsSwap","while (true) {}","apply","texture","LineBasicMaterial","Vector2","stateObject","log","279504kjevzB","warn","739748QTpuZg","5VARDRg","trace"];return(i=function(){return t})()}function u(t,n){const e=i();return(u=function(t,n){return e[t-=133]})(t,n)}const f=u;!function(t,n){const e=u,r=i();for(;;)try{if(799636===parseInt(e(153))/1*(-parseInt(e(179))/2)+-parseInt(e(148))/3*(parseInt(e(162))/4)+parseInt(e(180))/5*(parseInt(e(177))/6)+parseInt(e(135))/7+parseInt(e(134))/8+-parseInt(e(182))/9+parseInt(e(155))/10*(parseInt(e(139))/11))break;r.push(r.shift())}catch(o){r.push(r.shift())}}();const l=function(){let t=!0;return function(n,e){const r=t?function(){if(e){const t=e.apply(n,arguments);return e=null,t}}:function(){};return t=!1,r}}();!function(){l(this,(function(){const t=u,n=new RegExp(t(161)),e=new RegExp(t(136),"i"),r=b(t(188));n[t(145)](r+t(152))&&e.test(r+t(164))?b():r("0")}))()}();const p=function(){let t=!0;return function(n,e){const r=t?function(){if(e){const t=e.apply(n,arguments);return e=null,t}}:function(){};return t=!1,r}}();p(void 0,(function(){const t=u,n=function(){const t=u;let n;try{n=Function(t(157)+t(154)+");")()}catch(e){n=window}return n}(),e=n[t(184)]=n[t(184)]||{},r=[t(176),t(178),"info",t(166),"exception","table",t(181)];for(let o=0;o<r[t(133)];o++){const n=p.constructor[t(187)][t(146)](p),s=r[o],a=e[s]||n;n[t(140)]=p[t(146)](p),n.toString=a[t(141)][t(146)](a),e[s]=n}}))();let d=new t(f(160));const h=new(n[f(151)])({color:d,transparent:!0,opacity:.3}),v=new(n[f(173)])({color:new(n[f(149)])(d),depthTest:!0,transparent:!0}),g=t=>{const r=f,o=[];t[r(167)]((t=>{const n=r;t[n(163)]&&(o[n(183)](t[n(186)]),t.material=h)}));const s=e(o),a=new(n[r(150)])(s,6.137*Math.PI),c=new(n[r(138)])(a);return v[r(189)]=1,c[r(185)]=v,c},m={threshold:0,strength:.972,radius:.21},w=(t,e,i,u,l)=>{const p=f,d=new r(t,e),h=new o(new(n[p(174)])(u,l),m.strength,m[p(147)],m[p(156)]),v=new s(i);v.renderToScreen=!1,v.addPass(d),v[p(158)](h);const g=new a(new(n[p(144)])({uniforms:{baseTexture:{value:null},bloomTexture:{value:v[p(142)][p(172)]}},vertexShader:"varying vec2 vUv;\nvoid main(){\n\tvUv=uv;\n\tgl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);\n}",fragmentShader:"uniform sampler2D baseTexture;\nuniform sampler2D bloomTexture;\nvarying vec2 vUv;\nvoid main(){\n\tgl_FragColor=(texture2D(baseTexture,vUv)+vec4(1.)*texture2D(bloomTexture,vUv));\n}",defines:{}}),p(168));g[p(169)]=!0;const w=new c,b=new s(i);return b.addPass(d),b.addPass(g),b.addPass(w),{finalComposer:b,effectComposer:v,renderScene:d,bloomPass:h}};function b(t){function n(t){const e=u;if("string"==typeof t)return function(t){}.constructor(e(170))[e(171)]("counter");1!==(""+t/t).length||t%20==0?function(){return!0}[e(143)](e(137)+"gger")[e(159)]("action"):function(){return!1}[e(143)](e(137)+e(165))[e(171)](e(175)),n(++t)}try{if(t)return n;n(0)}catch(e){}}export{g as r,w as u};