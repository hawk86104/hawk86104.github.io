import{e as t,U as n}from"./@tresjs.FlKhQDQ71735866388381.js";import{a0 as e,aB as o}from"./three.Rja0AEnA1735866388381.js";import{_ as r}from"./argestCircle.iQbYZf4A1735866388381.js";import{d as i,e as s,o as a,f as c,g as u,J as f,j as l,u as p,aj as d,ak as v,m}from"./@vue.yG49nQHr1735866388381.js";import"./@vueuse.YI3Exu6_1735866388381.js";const g=I;!function(t,n){const e=I,o=y();for(;;)try{if(427621===parseInt(e(472))/1+-parseInt(e(484))/2+parseInt(e(471))/3*(-parseInt(e(481))/4)+parseInt(e(483))/5*(-parseInt(e(488))/6)+parseInt(e(451))/7*(-parseInt(e(491))/8)+parseInt(e(485))/9+parseInt(e(461))/10*(parseInt(e(449))/11))break;o.push(o.shift())}catch(r){o.push(o.shift())}}();const h=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e[I(476)](n,arguments);return e=null,t}}:function(){};return t=!1,o}}();function y(){const t=["chain","error","32WrWDyE","prototype","280590YWktry","395892FRuzEB","1136583XzqcIp","TresAmbientLight","TresAxesHelper","60FAefrF","TresPerspectiveCamera","table","11960lUNrcS","call","value","function *\\( *\\)","action","51491ZygItl","length","2933mqUUKA","perspectiveCameraRef","info","#000000","bind","gger","counter","#ffffff","TresDirectionalLight","__proto__","4100PcyTxs","stateObject","TresCanvas",'{}.constructor("return this")( )',"rotation-x","debu","exception","uniforms","uTime","argestCircle","174429CMltzq","232799CTaUaE","test","TresShaderMaterial","init","apply","TresPlaneGeometry","constructor"];return(y=function(){return t})()}!function(){h(this,(function(){const t=I,n=new RegExp(t(447)),e=new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","i"),o=_(t(475));n[t(473)](o+t(479))&&e[t(473)](o+"input")?_():o("0")}))()}();const j=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e.apply(n,arguments);return e=null,t}}:function(){};return t=!1,o}}();j(void 0,(function(){const t=I,n=function(){const t=I;let n;try{n=Function("return (function() "+t(464)+");")()}catch(e){n=window}return n}(),e=n.console=n.console||{},o=["log","warn",t(453),t(480),t(467),t(490),"trace"];for(let r=0;r<o[t(450)];r++){const n=j[t(478)][t(482)][t(455)](j),i=o[r],s=e[i]||n;n[t(460)]=j.bind(j),n.toString=s.toString.bind(s),e[i]=n}}))();const T={ref:g(452),position:[600,750,-1221],fov:45,near:1,far:1e4},x=[g(465)];function I(t,n){const e=y();return(I=function(t,n){return e[t-=445]})(t,n)}const b=i({__name:g(470),setup(i){const h=g,y={clearColor:h(454),shadows:!0,alpha:!1,useLegacyLights:!0},j={autoRotate:!0,enableDamping:!0},I={uniforms:{uTime:{type:"f",value:0}},vertexShader:r,fragmentShader:"varying vec2 vUv;\nuniform float uTime;\nstruct VoronoiData{\n\tfloat dist;\n\tfloat edgedist;\n\tvec2 edgenormal;\n\tvec2 point;\n};\n\nvec2 hash22(vec2 p)\n{\n\tvec3 p3=fract(vec3(p.xyx)*vec3(.1031,.1030,.0973));\n\tp3+=dot(p3,p3.yzx+33.33);\n\treturn fract((p3.xx+p3.yz)*p3.zy);\n}\nVoronoiData voronoi2dedges(vec2 uv){\n\tvec2 n=floor(uv);\n\tvec2 f=fract(uv);\n\t\n\tvec2 mg,mr;\n\t\n\tfloat md=8.;\n\tfor(int j=-1;j<=1;j++)\n\tfor(int i=-1;i<=1;i++){\n\t\tvec2 g=vec2(i,j);\n\t\tvec2 o=hash22(n+g);\n\t\tvec2 r=g+o-f;\n\t\tfloat d=dot(r,r);\n\t\t\n\t\tif(d<md){\n\t\t\tmd=d;\n\t\t\tmr=g+o;\n\t\t}\n\t}\n\t\n\tfloat med=8.;\n\tvec2 men=vec2(0);\n\tfor(int j=-2;j<=2;j++)\n\tfor(int i=-2;i<=2;i++){\n\t\tvec2 g=vec2(i,j);\n\t\tg+=hash22(n+g);\n\t\tvec2 k=g-mr;\n\t\t\n\t\tfloat d=dot(k,k);\n\t\tif(d>0.){\n\t\t\tfloat l=dot(g+mr-2.*f,k)*.5/sqrt(d);\n\t\t\tif(l<med){\n\t\t\t\tmen=k;\n\t\t\t\tmed=l;\n\t\t\t}\n\t\t}\n\t}\n\treturn VoronoiData(md,med,normalize(men),mr+n);\n}\n\nvoid main(){\n\tvec2 uv=vUv*10.+vec2(0.,uTime);\n\tvec2 p=voronoi2dedges(uv).point;\n\tVoronoiData v;\n\tfor(int i=0;i<32;i++){\n\t\tVoronoiData v=voronoi2dedges(p);\n\t\tp+=-v.edgenormal*.2/float(i+1);\n\t}\n\tgl_FragColor=vec4(\n\t\tsmoothstep(0.,.1,distance(uv,p))*\n\t\tsmoothstep(0.,.01,voronoi2dedges(uv).edgedist)*\n\t\tsmoothstep(0.,.01,abs(distance(uv,p)-voronoi2dedges(p).edgedist))\n\t);\n}",side:e,blending:o,depthWrite:!1,transparent:!0},{onLoop:b}=t();return b((({delta:t})=>{const n=h;I[n(468)][n(469)][n(446)]+=t})),(t,e)=>{const o=h,r=s(o(463));return a(),c(r,m(y,{"window-size":""}),{default:u((()=>[f(o(489),T,null,512),l(p(n),d(v(j)),null,16),e[1]||(e[1]=f(o(486),{color:o(458)},null,-1)),e[2]||(e[2]=f(o(459),{position:[100,100,0],intensity:.5,color:o(458)},null,-1)),f("TresMesh",{ref:"quanMeshRef",position:[0,100,0],"rotation-x":2*Math.PI/360*90},[e[0]||(e[0]=f(o(477),{args:[400,400]},null,-1)),f(o(474),d(v(I)),null,16)],8,x),e[3]||(e[3]=f(o(487),{args:[1e3],position:[0,19,0]},null,-1)),e[4]||(e[4]=f("TresGridHelper",{args:[6e3,100],position:[0,19,0]},null,-1))])),_:1},16)}}});function _(t){function n(t){const e=I;if("string"==typeof t)return function(t){}[e(478)]("while (true) {}")[e(476)](e(457));1!==(""+t/t)[e(450)]||t%20==0?function(){return!0}[e(478)](e(466)+e(456))[e(445)](e(448)):function(){return!1}[e(478)](e(466)+e(456))[e(476)](e(462)),n(++t)}try{if(t)return n;n(0)}catch(e){}}export{b as default};