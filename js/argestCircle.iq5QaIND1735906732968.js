import{e as t,U as n}from"./@tresjs.XlmHwCPa1735906732968.js";import{a0 as e,aB as o}from"./three.VhLXWX0H1735906732968.js";import{_ as r}from"./argestCircle.iQbYZf4A1735906732968.js";import{d as i,e as s,o as a,f as c,g as u,J as f,j as l,u as p,aj as d,ak as v,m}from"./@vue.yG49nQHr1735906732968.js";import"./@vueuse.HCIFcVWX1735906732968.js";const g=b;!function(t,n){const e=b,o=I();for(;;)try{if(371194===-parseInt(e(425))/1*(-parseInt(e(426))/2)+-parseInt(e(429))/3*(-parseInt(e(390))/4)+parseInt(e(399))/5+-parseInt(e(406))/6+parseInt(e(398))/7*(parseInt(e(396))/8)+parseInt(e(417))/9+-parseInt(e(415))/10*(parseInt(e(403))/11))break;o.push(o.shift())}catch(r){o.push(o.shift())}}();const h=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e[b(404)](n,arguments);return e=null,t}}:function(){};return t=!1,o}}();!function(){h(this,(function(){const t=b,n=new RegExp(t(385)),e=new RegExp(t(424),"i"),o=z(t(428));n.test(o+t(433))&&e[t(409)](o+t(405))?z():o("0")}))()}();const j=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e[b(404)](n,arguments);return e=null,t}}:function(){};return t=!1,o}}();j(void 0,(function(){const t=b,n=function(){const t=b;let n;try{n=Function(t(422)+'{}.constructor("return this")( ));')()}catch(e){n=window}return n}(),e=n[t(392)]=n[t(392)]||{},o=[t(412),t(387),t(432),"error",t(421),t(394),t(391)];for(let r=0;r<o[t(418)];r++){const n=j[t(408)][t(434)][t(395)](j),i=o[r],s=e[i]||n;n.__proto__=j[t(395)](j),n[t(411)]=s[t(411)].bind(s),e[i]=n}}))();const y={ref:"perspectiveCameraRef",position:[600,750,-1221],fov:45,near:1,far:1e4},x=[g(393)],T=i({__name:g(400),setup(i){const g={clearColor:"#000000",shadows:!0,alpha:!1,useLegacyLights:!0},h={autoRotate:!0,enableDamping:!0},j={uniforms:{uTime:{type:"f",value:0}},vertexShader:r,fragmentShader:"varying vec2 vUv;\nuniform float uTime;\nstruct VoronoiData{\n\tfloat dist;\n\tfloat edgedist;\n\tvec2 edgenormal;\n\tvec2 point;\n};\n\nvec2 hash22(vec2 p)\n{\n\tvec3 p3=fract(vec3(p.xyx)*vec3(.1031,.1030,.0973));\n\tp3+=dot(p3,p3.yzx+33.33);\n\treturn fract((p3.xx+p3.yz)*p3.zy);\n}\nVoronoiData voronoi2dedges(vec2 uv){\n\tvec2 n=floor(uv);\n\tvec2 f=fract(uv);\n\t\n\tvec2 mg,mr;\n\t\n\tfloat md=8.;\n\tfor(int j=-1;j<=1;j++)\n\tfor(int i=-1;i<=1;i++){\n\t\tvec2 g=vec2(i,j);\n\t\tvec2 o=hash22(n+g);\n\t\tvec2 r=g+o-f;\n\t\tfloat d=dot(r,r);\n\t\t\n\t\tif(d<md){\n\t\t\tmd=d;\n\t\t\tmr=g+o;\n\t\t}\n\t}\n\t\n\tfloat med=8.;\n\tvec2 men=vec2(0);\n\tfor(int j=-2;j<=2;j++)\n\tfor(int i=-2;i<=2;i++){\n\t\tvec2 g=vec2(i,j);\n\t\tg+=hash22(n+g);\n\t\tvec2 k=g-mr;\n\t\t\n\t\tfloat d=dot(k,k);\n\t\tif(d>0.){\n\t\t\tfloat l=dot(g+mr-2.*f,k)*.5/sqrt(d);\n\t\t\tif(l<med){\n\t\t\t\tmen=k;\n\t\t\t\tmed=l;\n\t\t\t}\n\t\t}\n\t}\n\treturn VoronoiData(md,med,normalize(men),mr+n);\n}\n\nvoid main(){\n\tvec2 uv=vUv*10.+vec2(0.,uTime);\n\tvec2 p=voronoi2dedges(uv).point;\n\tVoronoiData v;\n\tfor(int i=0;i<32;i++){\n\t\tVoronoiData v=voronoi2dedges(p);\n\t\tp+=-v.edgenormal*.2/float(i+1);\n\t}\n\tgl_FragColor=vec4(\n\t\tsmoothstep(0.,.1,distance(uv,p))*\n\t\tsmoothstep(0.,.01,voronoi2dedges(uv).edgedist)*\n\t\tsmoothstep(0.,.01,abs(distance(uv,p)-voronoi2dedges(p).edgedist))\n\t);\n}",side:e,blending:o,depthWrite:!1,transparent:!0},{onLoop:T}=t();return T((({delta:t})=>{const n=b;j[n(423)][n(401)][n(407)]+=t})),(t,e)=>{const o=b,r=s(o(389));return a(),c(r,m(g,{"window-size":""}),{default:u((()=>[f("TresPerspectiveCamera",y,null,512),l(p(n),d(v(h)),null,16),e[1]||(e[1]=f(o(437),{color:o(410)},null,-1)),e[2]||(e[2]=f(o(431),{position:[100,100,0],intensity:.5,color:o(410)},null,-1)),f(o(397),{ref:o(388),position:[0,100,0],"rotation-x":2*Math.PI/360*90},[e[0]||(e[0]=f(o(427),{args:[400,400]},null,-1)),f(o(436),d(v(j)),null,16)],8,x),e[3]||(e[3]=f(o(420),{args:[1e3],position:[0,19,0]},null,-1)),e[4]||(e[4]=f("TresGridHelper",{args:[6e3,100],position:[0,19,0]},null,-1))])),_:1},16)}}});function I(){const t=["chain","prototype","action","TresShaderMaterial","TresAmbientLight","function *\\( *\\)","counter","warn","quanMeshRef","TresCanvas","7292gCZvzL","trace","console","rotation-x","table","bind","8aMkaqx","TresMesh","527954tBnXLi","2886990twdGkC","argestCircle","uTime","string","275SzFyzo","apply","input","883854dnnQJz","value","constructor","test","#ffffff","toString","log","debu","call","263160EEVjmG","while (true) {}","1745154PGsTxZ","length","stateObject","TresAxesHelper","exception","return (function() ","uniforms","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","7852YSKXYB","12FaauIE","TresPlaneGeometry","init","465KlbCLd","gger","TresDirectionalLight","info"];return(I=function(){return t})()}function b(t,n){const e=I();return(b=function(t,n){return e[t-=385]})(t,n)}function z(t){function n(t){const e=b;if(typeof t===e(402))return function(t){}[e(408)](e(416))[e(404)](e(386));1!==(""+t/t)[e(418)]||t%20==0?function(){return!0}.constructor(e(413)+e(430))[e(414)](e(435)):function(){return!1}[e(408)](e(413)+"gger").apply(e(419)),n(++t)}try{if(t)return n;n(0)}catch(e){}}export{T as default};