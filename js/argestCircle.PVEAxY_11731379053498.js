import{e as t,U as n}from"./@tresjs.bLKO3xyw1731379053498.js";import{a0 as e,aB as o}from"./three.bXjbKLxC1731379053498.js";import{_ as r}from"./argestCircle.iQbYZf4A1731379053498.js";import{d as i,e as s,o as a,f as c,g as u,J as f,j as l,u as p,aj as d,ak as v,m}from"./@vue.-THQH3GC1731379053498.js";import"./@vueuse.DWZrQ1Sl1731379053498.js";const g=b;!function(t,n){const e=b,o=j();for(;;)try{if(931901===parseInt(e(344))/1+-parseInt(e(369))/2+parseInt(e(386))/3+-parseInt(e(362))/4+parseInt(e(363))/5*(parseInt(e(380))/6)+parseInt(e(378))/7+-parseInt(e(388))/8*(parseInt(e(387))/9))break;o.push(o.shift())}catch(r){o.push(o.shift())}}();const h=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e.apply(n,arguments);return e=null,t}}:function(){};return t=!1,o}}();!function(){h(this,(function(){const t=b,n=new RegExp(t(349)),e=new RegExp(t(375),"i"),o=w(t(376));n.test(o+t(358))&&e[t(355)](o+t(364))?w():o("0")}))()}();const y=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e[b(377)](n,arguments);return e=null,t}}:function(){};return t=!1,o}}();function j(){const t=["constructor","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","init","apply","3609438ySRPdo","uniforms","1562034YUuDbq","while (true) {}","rotation-x","prototype","TresPlaneGeometry","stateObject","3552870wqyMLy","4122tGdBTS","36184vqVPep","value",'{}.constructor("return this")( )',"length","1849510CWeyCM","call","perspectiveCameraRef","trace","warn","function *\\( *\\)","TresDirectionalLight","#ffffff","action","TresMesh","argestCircle","test","toString","TresAxesHelper","chain","bind","console","TresAmbientLight","3304728ANGZOx","15naUahl","input","debu","#000000","counter","error","1001668szamNV","TresGridHelper","log","string","TresCanvas"];return(j=function(){return t})()}y(void 0,(function(){const t=b,n=function(){const t=b;let n;try{n=Function("return (function() "+t(342)+");")()}catch(e){n=window}return n}(),e=n[t(360)]=n[t(360)]||{},o=[t(371),t(348),"info",t(368),"exception","table",t(347)];for(let r=0;r<o.length;r++){const n=y[t(374)][t(383)][t(359)](y),i=o[r],s=e[i]||n;n.__proto__=y[t(359)](y),n[t(356)]=s[t(356)][t(359)](s),e[i]=n}}))();const x={ref:g(346),position:[600,750,-1221],fov:45,near:1,far:1e4},T=[g(382)];function b(t,n){const e=j();return(b=function(t,n){return e[t-=342]})(t,n)}const _=i({__name:g(354),setup(i){const h=g,y={clearColor:h(366),shadows:!0,alpha:!1,useLegacyLights:!0},j={autoRotate:!0,enableDamping:!0},b={uniforms:{uTime:{type:"f",value:0}},vertexShader:r,fragmentShader:"varying vec2 vUv;\nuniform float uTime;\nstruct VoronoiData{\n\tfloat dist;\n\tfloat edgedist;\n\tvec2 edgenormal;\n\tvec2 point;\n};\n\nvec2 hash22(vec2 p)\n{\n\tvec3 p3=fract(vec3(p.xyx)*vec3(.1031,.1030,.0973));\n\tp3+=dot(p3,p3.yzx+33.33);\n\treturn fract((p3.xx+p3.yz)*p3.zy);\n}\nVoronoiData voronoi2dedges(vec2 uv){\n\tvec2 n=floor(uv);\n\tvec2 f=fract(uv);\n\t\n\tvec2 mg,mr;\n\t\n\tfloat md=8.;\n\tfor(int j=-1;j<=1;j++)\n\tfor(int i=-1;i<=1;i++){\n\t\tvec2 g=vec2(i,j);\n\t\tvec2 o=hash22(n+g);\n\t\tvec2 r=g+o-f;\n\t\tfloat d=dot(r,r);\n\t\t\n\t\tif(d<md){\n\t\t\tmd=d;\n\t\t\tmr=g+o;\n\t\t}\n\t}\n\t\n\tfloat med=8.;\n\tvec2 men=vec2(0);\n\tfor(int j=-2;j<=2;j++)\n\tfor(int i=-2;i<=2;i++){\n\t\tvec2 g=vec2(i,j);\n\t\tg+=hash22(n+g);\n\t\tvec2 k=g-mr;\n\t\t\n\t\tfloat d=dot(k,k);\n\t\tif(d>0.){\n\t\t\tfloat l=dot(g+mr-2.*f,k)*.5/sqrt(d);\n\t\t\tif(l<med){\n\t\t\t\tmen=k;\n\t\t\t\tmed=l;\n\t\t\t}\n\t\t}\n\t}\n\treturn VoronoiData(md,med,normalize(men),mr+n);\n}\n\nvoid main(){\n\tvec2 uv=vUv*10.+vec2(0.,uTime);\n\tvec2 p=voronoi2dedges(uv).point;\n\tVoronoiData v;\n\tfor(int i=0;i<32;i++){\n\t\tVoronoiData v=voronoi2dedges(p);\n\t\tp+=-v.edgenormal*.2/float(i+1);\n\t}\n\tgl_FragColor=vec4(\n\t\tsmoothstep(0.,.1,distance(uv,p))*\n\t\tsmoothstep(0.,.01,voronoi2dedges(uv).edgedist)*\n\t\tsmoothstep(0.,.01,abs(distance(uv,p)-voronoi2dedges(p).edgedist))\n\t);\n}",side:e,blending:o,depthWrite:!1,transparent:!0},{onLoop:_}=t();return _((({delta:t})=>{const n=h;b[n(379)].uTime[n(389)]+=t})),(t,e)=>{const o=h,r=s(o(373));return a(),c(r,m(y,{"window-size":""}),{default:u((()=>[f("TresPerspectiveCamera",x,null,512),l(p(n),d(v(j)),null,16),e[1]||(e[1]=f(o(361),{color:"#ffffff"},null,-1)),e[2]||(e[2]=f(o(350),{position:[100,100,0],intensity:.5,color:o(351)},null,-1)),f(o(353),{ref:"quanMeshRef",position:[0,100,0],"rotation-x":2*Math.PI/360*90},[e[0]||(e[0]=f(o(384),{args:[400,400]},null,-1)),f("TresShaderMaterial",d(v(b)),null,16)],8,T),e[3]||(e[3]=f(o(357),{args:[1e3],position:[0,19,0]},null,-1)),e[4]||(e[4]=f(o(370),{args:[6e3,100],position:[0,19,0]},null,-1))])),_:1},16)}}});function w(t){function n(t){const e=b;if(typeof t===e(372))return function(t){}[e(374)](e(381))[e(377)](e(367));1!==(""+t/t)[e(343)]||t%20==0?function(){return!0}[e(374)](e(365)+"gger")[e(345)](e(352)):function(){return!1}[e(374)]("debugger").apply(e(385)),n(++t)}try{if(t)return n;n(0)}catch(e){}}export{_ as default};