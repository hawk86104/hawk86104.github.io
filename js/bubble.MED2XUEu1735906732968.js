import{Y as t,Z as n,aB as e,a1 as s,_ as i}from"./three.VhLXWX0H1735906732968.js";import{m as a,U as o}from"./@tresjs.XlmHwCPa1735906732968.js";import{g as r}from"./gsap.5FgWo1mD1735906732968.js";import{a1 as c,d as p,b as u,w as A,r as l,e as h,o as f,f as m,g as d,J as v,j as y,u as g,aj as E,ak as w,al as Y}from"./@vue.yG49nQHr1735906732968.js";import{P as z}from"./tweakpane.yHWGBmom1735906732968.js";import"./@vueuse.HCIFcVWX1735906732968.js";const C={__name:"bubble",props:{opacity:{type:Number,default:.8}},setup(i){const{scene:o}=a();let p;const u=i;function A(){this.init(),this.shuffle()}function l(){const t=Math.floor(16777215*Math.random()).toString(16);return"#".concat(t.padStart(6,"0"))}function h(t,n){return n?2*Math.random()*t-t:Math.random()*t}return A.prototype.init=function(){this.material=new n({color:l(),map:p,transparent:!0,opacity:1,depthTest:!1,depthWrite:!1,blending:e}),this.sprite=new s(this.material)},A.prototype.shuffle=function(){this.scale1=.1,this.scale2=2+h(3),this.sprite.scale.set(this.scale1,this.scale1,1);const t=function(){const t=Math.random(),n=Math.random(),e=2*t*Math.PI,s=Math.acos(2*n-1),i=Math.cbrt(Math.random()),a=Math.sin(e),o=Math.cos(e),r=Math.sin(s);return{x:i*r*o,y:i*r*a,z:i*Math.cos(s)}}();this.sprite.position.set(t.x,t.y,t.z).multiplyScalar(50),this.sprite.position.y-=25,this.material.opacity=u.opacity,this.tt=this.scale2,r.to(this.sprite.scale,1,{x:this.scale2,y:this.scale2,ease:"power1.inOut"}),r.to(this.sprite.position,this.scale2,{y:this.sprite.position.y+100,ease:"power1.inOut"}),this.t1=1,r.to(this.sprite.position,this.t1,{x:this.sprite.position.x+h(10,!0),z:this.sprite.position.z+h(10,!0),ease:"power1.inOut",repeat:Math.floor(this.tt/this.t1/2),yoyo:!0}),r.to(this.material,1,{opacity:0,delay:this.tt-1,ease:"power1.inOut",onCompleteParams:[this],onComplete(t){t.shuffle()}})},function(){p=new t;const n=new Image;n.src="data:image/png;base64,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",n.onload=function(){p.image=n,p.needsUpdate=!0};for(let t=0;t<800;t++){const t=new A;o.value.add(t.sprite)}}(),c((()=>{var t,n;u.opacity&&(t=o.value,n=u.opacity,t.traverse((t=>{t.isMesh&&(Array.isArray(t.material)?t.material.forEach((t=>{t.transparent=!0,t.opacity=n})):(t.material.transparent=!0,t.material.opacity=n))})))})),(t,n)=>null}},I=K;!function(t,n){const e=K,s=j();for(;;)try{if(916621===-parseInt(e(271))/1+-parseInt(e(251))/2*(parseInt(e(250))/3)+-parseInt(e(266))/4+parseInt(e(248))/5+-parseInt(e(261))/6+-parseInt(e(246))/7*(-parseInt(e(265))/8)+parseInt(e(232))/9)break;s.push(s.shift())}catch(i){s.push(s.shift())}}();const W=function(){let t=!0;return function(n,e){const s=t?function(){if(e){const t=e[K(236)](n,arguments);return e=null,t}}:function(){};return t=!1,s}}();!function(){W(this,(function(){const t=K,n=new RegExp(t(255)),e=new RegExp(t(260),"i"),s=B(t(268));n.test(s+"chain")&&e.test(s+t(256))?B():s("0")}))()}();const X=function(){let t=!0;return function(n,e){const s=t?function(){if(e){const t=e[K(236)](n,arguments);return e=null,t}}:function(){};return t=!1,s}}();function K(t,n){const e=j();return(K=function(t,n){return e[t-=232]})(t,n)}function j(){const t=["24493185ELqzmQ","constructor","gger","table","apply","__proto__","debu","exception","info","warn","while (true) {}","TresCanvas","toString","return (function() ","7yycpPq","#000000","9140010CYhEgA","counter","22209tliMtS","274SmMqDO","TresAmbientLight","bubble","addBinding","function *\\( *\\)","input","camera","stateObject","console","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","8516526rqxcqJ","log","shadow","OrthographicCamera","3532640MBbdPi","5957296nRmhuj","bind","init","ACESFilmicToneMapping","length","151470sfDzRu","透明度","TresPerspectiveCamera"];return(j=function(){return t})()}X(void 0,(function(){const t=K,n=function(){const t=K;let n;try{n=Function(t(245)+'{}.constructor("return this")( ));')()}catch(e){n=window}return n}(),e=n[t(259)]=n[t(259)]||{},s=[t(262),t(241),t(240),"error",t(239),t(235),"trace"];for(let i=0;i<s[t(270)];i++){const n=X[t(233)].prototype[t(267)](X),a=s[i],o=e[a]||n;n[t(237)]=X[t(267)](X),n[t(244)]=o.toString[t(267)](o),e[a]=n}}))();const R=p({__name:I(253),setup(t){const n=I,e=u(null);A(e,(t=>{const n=K;t&&(t[n(263)][n(257)]=new(i[n(264)])(-8.5,8.5,8.5,-8.5,.1,20))}));const s=l({enableDamping:!0,enableZoom:!0,autoRotate:!0,enablePan:!0,enableRotate:!0,makeDefault:!0}),a={clearColor:n(247),windowSize:!0,toneMapping:i[n(269)],toneMappingExposure:.8,shadows:!0},r=l({opacity:.5});return new z({title:"参数"})[n(254)](r,"opacity",{label:n(272),min:0,max:1,step:.1}),(t,e)=>{const i=n,c=h(i(243));return f(),m(c,E(w(a)),{default:d((()=>[e[0]||(e[0]=v(i(273),{position:[0,20,30],fov:45,near:.1,far:1e3},null,-1)),y(g(o),E(w(s)),null,16),e[1]||(e[1]=v(i(252),{intensity:2},null,-1)),(f(),m(Y,null,{default:d((()=>[y(C,E(w(r)),null,16)])),_:1}))])),_:1},16)}}});function B(t){function n(t){const e=K;if("string"==typeof t)return function(t){}[e(233)](e(242))[e(236)](e(249));1!==(""+t/t)[e(270)]||t%20==0?function(){return!0}[e(233)](e(238)+e(234)).call("action"):function(){return!1}[e(233)]("debu"+e(234))[e(236)](e(258)),n(++t)}try{if(t)return n;n(0)}catch(e){}}export{R as default};