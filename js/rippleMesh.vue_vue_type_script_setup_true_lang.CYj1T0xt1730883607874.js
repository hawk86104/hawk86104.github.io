import{a0 as n,_ as t,bL as o}from"./three.fIUcjaNz1730883607874.js";import{e}from"./@tresjs.C3WO4ZW41730883607874.js";import{g as r}from"./utils.DqGdOV081730883607874.js";import{d as i,b as s,a3 as c,o as a,D as u,J as f,u as l,aj as p,ak as v}from"./@vue.Cfu43fwq1730883607874.js";const m=h;!function(n,t){const o=h,e=x();for(;;)try{if(278197===-parseInt(o(193))/1+parseInt(o(235))/2*(parseInt(o(211))/3)+parseInt(o(230))/4+-parseInt(o(238))/5*(-parseInt(o(215))/6)+-parseInt(o(222))/7+parseInt(o(225))/8+-parseInt(o(214))/9*(parseInt(o(189))/10))break;e.push(e.shift())}catch(r){e.push(e.shift())}}();const y=function(){let n=!0;return function(t,o){const e=n?function(){if(o){const n=o.apply(t,arguments);return o=null,n}}:function(){};return n=!1,e}}();!function(){y(this,(function(){const n=h,t=new RegExp(n(194)),o=new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","i"),e=_(n(213));t[n(240)](e+n(216))&&o.test(e+n(197))?_():e("0")}))()}();const d=function(){let n=!0;return function(t,o){const e=n?function(){if(o){const n=o[h(208)](t,arguments);return o=null,n}}:function(){};return n=!1,e}}();function h(n,t){const o=x();return(h=function(n,t){return o[n-=187]})(n,t)}d(void 0,(function(){const n=h,t=function(){const n=h;let t;try{t=Function(n(234)+n(207)+");")()}catch(o){t=window}return t}(),o=t[n(212)]=t[n(212)]||{},e=["log",n(201),n(218),n(202),n(241),n(195),"trace"];for(let r=0;r<e[n(227)];r++){const t=d.constructor[n(187)][n(196)](d),i=e[r],s=o[i]||t;t[n(233)]=d[n(196)](d),t[n(219)]=s[n(219)][n(196)](s),o[i]=t}}))();const g=[m(188),"uv"];function x(){const n=["bind","input","\nvarying vec2 vUv;\nvoid main() {\n    vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n    vUv = uv;\n    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n    ","height","TresShaderMaterial","warn","error","fog_pars_vertex","num","action","ShaderChunk",'{}.constructor("return this")( )',"apply","call","string","15tQIkfe","console","init","268065wYZvSv","12iRgOTQ","chain","\n}\n","info","toString","value","fog_vertex","2958158tQHCJE","counter","constructor","1419072FmVwyN","\nprecision lowp float;\nprecision lowp int;\n","length","Color","time","1777864etbehu","set","pv2","__proto__","return (function() ","161780tdvIem","gger","debu","1096535YPpjVF","rippleMesh","test","exception","speed","uniforms","prototype","position","210aWPIej","opacity","color","TresMesh","138638AqpSHJ","function *\\( *\\)","table"];return(x=function(){return n})()}const w=i({__name:m(239),props:{positionSrc:{default:[{x:0,y:0},{x:10,y:10}]},color:{default:"#ffff00"},opacity:{default:.8},height:{default:100},num:{default:8},speed:{default:.15}},setup(i){const y=m,d=i,h=s(),x={side:n,transparent:!0,depthWrite:!1,depthTest:!0,vertexShader:y(226)+t[y(206)][y(203)]+y(198)+o[y(221)]+y(217),fragmentShader:"\n  precision lowp float;\n  precision lowp int;\n  uniform float time;\n  uniform float opacity;\n  uniform vec3 color;\n  uniform float num;\n  uniform float speed;\n  varying vec2 vUv;\n  void main() {\n    vec4 fragColor = vec4(0.);\n    float sin = sin((vUv.y - time * speed) * 10. * num);\n    float high = 0.92;\n    float medium = 0.4;\n    if (sin > high) {\n      fragColor = vec4(mix(vec3(.8, 1., 1.), color, (1. - sin) / (1. - high)), 1.);\n    } else if(sin > medium) {\n      fragColor = vec4(color, mix(1., 0., 1.-(sin - medium) / (high - medium)));\n    } else {\n      fragColor = vec4(color, 0.);\n    }\n    vec3 fade = mix(color, vec3(0., 0., 0.), vUv.y);\n    fragColor = mix(fragColor, vec4(fade, 1.), 0.85);\n    gl_FragColor = vec4(fragColor.rgb, fragColor.a * opacity * (1. - vUv.y));\n  }\n\t",uniforms:{time:{type:"pv2",value:0},color:{type:"uvs",value:new(t[y(228)])(d[y(191)])},opacity:{type:y(232),value:d[y(190)]},num:{type:y(232),value:d[y(204)]},speed:{type:y(232),value:d[y(242)]}}};let w=null,_=null;const{centerPoint:I,points:C}=r(d.positionSrc);!function(n=[],t){const o=y,e=[],r=[];for(let i=0,s=e[o(227)],c=r[o(227)];i<n[o(227)]-1;i++){let o=1,a=n[i],u=n[i+1];e[s++]=a.x,e[s++]=0,e[s++]=a.y,r[c++]=0,r[c++]=0,e[s++]=u.x,e[s++]=0,e[s++]=u.y,r[c++]=1,r[c++]=0,e[s++]=a.x,e[s++]=t,e[s++]=a.y,r[c++]=0,r[c++]=o,e[s++]=a.x,e[s++]=t,e[s++]=a.y,r[c++]=0,r[c++]=o,e[s++]=u.x,e[s++]=0,e[s++]=u.y,r[c++]=1,r[c++]=0,e[s++]=u.x,e[s++]=t,e[s++]=u.y,r[c++]=1,r[c++]=o}w=new Float32Array(e),_=new Float32Array(r)}(C,d[y(199)]);const{onLoop:j}=e();return j((({delta:n})=>{const t=y;x.uniforms[t(229)][t(220)]+=n})),c((()=>{const n=y;d.color&&(x.uniforms[n(191)][n(220)]=new(t[n(228)])(d.color)),d[n(190)]&&(x[n(243)][n(190)][n(220)]=d.opacity),d.num&&(x[n(243)].num[n(220)]=d.num),d[n(242)]&&(x[n(243)][n(242)][n(220)]=d[n(242)]),h[n(220)]&&h[n(220)][n(188)][n(231)](I.x,h.value[n(188)].y,I.y)})),(n,t)=>{const o=y;return a(),u(o(192),{renderOrder:2200,ref_key:"tresMeshRef",ref:h},[f("TresBufferGeometry",{position:[l(w),3],uv:[l(_),2]},null,8,g),f(o(200),p(v(x)),null,16)],512)}}});function _(n){function t(n){const o=h;if(typeof n===o(210))return function(n){}[o(224)]("while (true) {}")[o(208)](o(223));1!==(""+n/n)[o(227)]||n%20==0?function(){return!0}[o(224)](o(237)+"gger")[o(209)](o(205)):function(){return!1}[o(224)](o(237)+o(236))[o(208)]("stateObject"),t(++n)}try{if(n)return t;t(0)}catch(o){}}export{w as _};