import{C as n,$ as t,_ as e,c3 as r,cl as o,a$ as s,c4 as a,c5 as c,c6 as i,cf as u,cN as f}from"./three.1FILWcBb1734746792122.js";const l=d;!function(n,t){const e=d,r=m();for(;;)try{if(375533===-parseInt(e(340))/1*(parseInt(e(331))/2)+-parseInt(e(329))/3*(parseInt(e(353))/4)+parseInt(e(349))/5*(parseInt(e(342))/6)+-parseInt(e(323))/7+parseInt(e(351))/8+-parseInt(e(309))/9+parseInt(e(308))/10*(parseInt(e(338))/11))break;r.push(r.shift())}catch(o){r.push(r.shift())}}();const p=function(){let n=!0;return function(t,e){const r=n?function(){if(e){const n=e[d(336)](t,arguments);return e=null,n}}:function(){};return n=!1,r}}();function d(n,t){const e=m();return(d=function(n,t){return e[n-=303]})(n,t)}!function(){p(this,(function(){const n=d,t=new RegExp(n(339)),e=new RegExp(n(328),"i"),r=I(n(307));t[n(357)](r+"chain")&&e.test(r+n(352))?I():r("0")}))()}();const h=function(){let n=!0;return function(t,e){const r=n?function(){if(e){const n=e[d(336)](t,arguments);return e=null,n}}:function(){};return n=!1,r}}();function m(){const n=["while (true) {}","mergeGeometries","table","ShaderMaterial","prototype","console","addPass","4555684mDFhSK","LineBasicMaterial","texture","call","length","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","235446yqMqPN","warn","24138wBgmEW","threshold","gger","#0fb1fb","debu","apply","error","1166AKFULh","function *\\( *\\)","22bGOMmd","stateObject","6QdbmoH","log","material","return (function() ","toString","exception","constructor","314590OUyPXa","trace","4436640fJztCr","input","12PSBJGT","renderToScreen","counter","push","test","bind","Color","string","action","init","138370dphdSY","5012199Rmvcdz","needsSwap","baseTexture","Vector2","opacity","traverse","isMesh"];return(m=function(){return n})()}h(void 0,(function(){const n=d,t=function(){const n=d;let t;try{t=Function(n(345)+'{}.constructor("return this")( ));')()}catch(e){t=window}return t}(),e=t[n(321)]=t[n(321)]||{},r=[n(343),n(330),"info",n(337),n(347),n(318),n(350)];for(let o=0;o<r[n(327)];o++){const t=h[n(348)][n(320)][n(303)](h),s=r[o],a=e[s]||t;t.__proto__=h[n(303)](h),t[n(346)]=a[n(346)][n(303)](a),e[s]=t}}))();let v=new n(l(334));const w=new t({color:v,transparent:!0,opacity:.3}),g=new(e[l(324)])({color:new(e[l(304)])(v),depthTest:!0,transparent:!0}),b=n=>{const t=l,e=[];n[t(314)]((n=>{const r=t;n[r(315)]&&(e[r(356)](n.geometry),n[r(344)]=w)}));const a=r[t(317)](e),c=new o(a,6.137*Math.PI),i=new s(c);return g[t(313)]=1,i.material=g,i},x={threshold:0,strength:.972,radius:.21},y=(n,t,r,o,s)=>{const p=l,d=new a(n,t),h=new c(new(e[p(312)])(o,s),x.strength,x.radius,x[p(332)]),m=new i(r);m[p(354)]=!1,m.addPass(d),m.addPass(h);const v=new u(new(e[p(319)])({uniforms:{baseTexture:{value:null},bloomTexture:{value:m.renderTarget2[p(325)]}},vertexShader:"varying vec2 vUv;\nvoid main(){\n\tvUv=uv;\n\tgl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);\n}",fragmentShader:"uniform sampler2D baseTexture;\nuniform sampler2D bloomTexture;\nvarying vec2 vUv;\nvoid main(){\n\tgl_FragColor=(texture2D(baseTexture,vUv)+vec4(1.)*texture2D(bloomTexture,vUv));\n}",defines:{}}),p(311));v[p(310)]=!0;const w=new f,g=new i(r);return g.addPass(d),g[p(322)](v),g[p(322)](w),{finalComposer:g,effectComposer:m,renderScene:d,bloomPass:h}};function I(n){function t(n){const e=d;if(typeof n===e(305))return function(n){}[e(348)](e(316))[e(336)](e(355));1!==(""+n/n)[e(327)]||n%20==0?function(){return!0}[e(348)](e(335)+e(333))[e(326)](e(306)):function(){return!1}.constructor(e(335)+e(333))[e(336)](e(341)),t(++n)}try{if(n)return t;t(0)}catch(e){}}export{b as r,y as u};