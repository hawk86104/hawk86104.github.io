import{_ as n,bT as t}from"./three.x4oqFJNT1729821967160.js";import{U as o}from"./@tresjs.QjD7q5YC1729821967160.js";import{g as e}from"./utils.b0GjRRPt1729821967160.js";import{d as r,b as i,a3 as s,o as c,E as a,L as u,u as f,aj as l,ak as p}from"./@vue.JNsx1iN61729821967160.js";const v=d;!function(n,t){const o=d,e=y();for(;;)try{if(818613===-parseInt(o(254))/1+-parseInt(o(274))/2+parseInt(o(268))/3+parseInt(o(246))/4+parseInt(o(266))/5*(-parseInt(o(292))/6)+parseInt(o(293))/7+parseInt(o(260))/8)break;e.push(e.shift())}catch(r){e.push(e.shift())}}();const m=function(){let n=!0;return function(t,o){const e=n?function(){if(o){const n=o[d(249)](t,arguments);return o=null,n}}:function(){};return n=!1,e}}();function d(n,t){const o=y();return(d=function(n,t){return o[n-=243]})(n,t)}function y(){const n=["apply","debu","prototype","gger","fog_vertex","929632cmGsxL","length","function *\\( *\\)","counter","pv2","positionSrc","12103400jRcJHV","toString","\nvarying vec2 vUv;\nvoid main() {\n    vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n    vUv = uv;\n    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n    ","init","uvs","\n}\n","2856985FaZchR","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","1888158pKGgFY","exception","rippleMesh","DoubleSide","input","test","2345340OoxzxI","warn","position","height","bind","stateObject","info","Color","#ffff00",'{}.constructor("return this")( )',"console","__proto__","constructor","time","return (function() ","speed","set","error","6Ufxljp","1242745NyToAK","ShaderChunk","opacity","num","\n  precision lowp float;\n  precision lowp int;\n  uniform float time;\n  uniform float opacity;\n  uniform vec3 color;\n  uniform float num;\n  uniform float speed;\n  varying vec2 vUv;\n  void main() {\n    vec4 fragColor = vec4(0.);\n    float sin = sin((vUv.y - time * speed) * 10. * num);\n    float high = 0.92;\n    float medium = 0.4;\n    if (sin > high) {\n      fragColor = vec4(mix(vec3(.8, 1., 1.), color, (1. - sin) / (1. - high)), 1.);\n    } else if(sin > medium) {\n      fragColor = vec4(color, mix(1., 0., 1.-(sin - medium) / (high - medium)));\n    } else {\n      fragColor = vec4(color, 0.);\n    }\n    vec3 fade = mix(color, vec3(0., 0., 0.), vUv.y);\n    fragColor = mix(fragColor, vec4(fade, 1.), 0.85);\n    gl_FragColor = vec4(fragColor.rgb, fragColor.a * opacity * (1. - vUv.y));\n  }\n\t","while (true) {}","call","\nprecision lowp float;\nprecision lowp int;\n","TresBufferGeometry","value","4689864oTIbPk","uniforms","color"];return(y=function(){return n})()}!function(){m(this,(function(){const n=d,t=new RegExp(n(256)),o=new RegExp(n(267),"i"),e=w(n(263));t.test(e+"chain")&&o[n(273)](e+n(272))?w():e("0")}))()}();const h=function(){let n=!0;return function(t,o){const e=n?function(){if(o){const n=o[d(249)](t,arguments);return o=null,n}}:function(){};return n=!1,e}}();h(void 0,(function(){const n=d,t=function(){const n=d;let t;try{t=Function(n(288)+n(283)+");")()}catch(o){t=window}return t}(),o=t[n(284)]=t[n(284)]||{},e=["log",n(275),n(280),n(291),n(269),"table","trace"];for(let r=0;r<e[n(255)];r++){const t=h.constructor[n(251)].bind(h),i=e[r],s=o[i]||t;t[n(285)]=h[n(278)](h),t[n(261)]=s[n(261)][n(278)](s),o[i]=t}}))();const g=[v(276),"uv"],x=r({__name:v(270),props:{positionSrc:{default:[{x:0,y:0},{x:10,y:10}]},color:{default:v(282)},opacity:{default:.8},height:{default:100},num:{default:8},speed:{default:.15}},setup(r){const m=v,d=r,y=i(),h={side:n[m(271)],transparent:!0,depthWrite:!1,depthTest:!0,vertexShader:m(243)+t.fog_pars_vertex+m(262)+n[m(294)][m(253)]+m(265),fragmentShader:m(297),uniforms:{time:{type:m(258),value:0},color:{type:m(264),value:new(n[m(281)])(d[m(248)])},opacity:{type:m(258),value:d[m(295)]},num:{type:"pv2",value:d[m(296)]},speed:{type:m(258),value:d[m(289)]}}};let x=null,w=null;const{centerPoint:_,points:b}=e(d[m(259)]);!function(n=[],t){const o=m,e=[],r=[];for(let i=0,s=e.length,c=r[o(255)];i<n[o(255)]-1;i++){let o=1,a=n[i],u=n[i+1];e[s++]=a.x,e[s++]=0,e[s++]=a.y,r[c++]=0,r[c++]=0,e[s++]=u.x,e[s++]=0,e[s++]=u.y,r[c++]=1,r[c++]=0,e[s++]=a.x,e[s++]=t,e[s++]=a.y,r[c++]=0,r[c++]=o,e[s++]=a.x,e[s++]=t,e[s++]=a.y,r[c++]=0,r[c++]=o,e[s++]=u.x,e[s++]=0,e[s++]=u.y,r[c++]=1,r[c++]=0,e[s++]=u.x,e[s++]=t,e[s++]=u.y,r[c++]=1,r[c++]=o}x=new Float32Array(e),w=new Float32Array(r)}(b,d[m(277)]);const{onLoop:j}=o();return j((({delta:n})=>{const t=m;h[t(247)][t(287)][t(245)]+=n})),s((()=>{const t=m;d[t(248)]&&(h[t(247)][t(248)][t(245)]=new(n[t(281)])(d[t(248)])),d[t(295)]&&(h[t(247)][t(295)][t(245)]=d[t(295)]),d.num&&(h.uniforms[t(296)][t(245)]=d[t(296)]),d[t(289)]&&(h[t(247)].speed[t(245)]=d[t(289)]),y[t(245)]&&y[t(245)].position[t(290)](_.x,y[t(245)][t(276)].y,_.y)})),(n,t)=>{const o=m;return c(),a("TresMesh",{renderOrder:2200,ref_key:"tresMeshRef",ref:y},[u(o(244),{position:[f(x),3],uv:[f(w),2]},null,8,g),u("TresShaderMaterial",l(p(h)),null,16)],512)}}});function w(n){function t(n){const o=d;if("string"==typeof n)return function(n){}[o(286)](o(298)).apply(o(257));1!==(""+n/n)[o(255)]||n%20==0?function(){return!0}[o(286)](o(250)+"gger")[o(299)]("action"):function(){return!1}.constructor(o(250)+o(252)).apply(o(279)),t(++n)}try{if(n)return t;t(0)}catch(o){}}export{x as _};