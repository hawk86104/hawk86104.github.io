import{U as t,Y as n}from"./@tresjs.QjD7q5YC1729821967160.js";import{a0 as e,aL as o}from"./three.x4oqFJNT1729821967160.js";import{_ as r}from"./argestCircle.iQbYZf4A1729821967160.js";import{d as i,e as s,o as a,f as c,g as u,L as f,j as l,aj as p,ak as d,u as v,m as g}from"./@vue.JNsx1iN61729821967160.js";import"./@vueuse.HMG_JnUD1729821967160.js";const m=z;!function(t,n){const e=z,o=j();for(;;)try{if(387279===parseInt(e(115))/1+-parseInt(e(134))/2+parseInt(e(151))/3+-parseInt(e(147))/4*(-parseInt(e(131))/5)+parseInt(e(152))/6*(parseInt(e(120))/7)+parseInt(e(140))/8+parseInt(e(139))/9*(-parseInt(e(128))/10))break;o.push(o.shift())}catch(r){o.push(o.shift())}}();const h=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e[z(121)](n,arguments);return e=null,t}}:function(){};return t=!1,o}}();!function(){h(this,(function(){const t=z,n=new RegExp("function *\\( *\\)"),e=new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","i"),o=C("init");n[t(155)](o+t(136))&&e[t(155)](o+t(137))?C():o("0")}))()}();const y=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e[z(121)](n,arguments);return e=null,t}}:function(){};return t=!1,o}}();function j(){const t=["TresCanvas","error","140450Uebwkl","action","TresAmbientLight","19925VXiDrR","quanMeshRef","constructor","613544twCHNq","TresPerspectiveCamera","chain","input","uTime","1071tfeFyL","2942960nyMQDZ","call","TresGridHelper","return (function() ","length","while (true) {}","TresShaderMaterial","568oszHQg","rotation-x","info","argestCircle","1806357VTBgEv","6RzHtoZ","#ffffff","log","test","gger","__proto__","prototype","TresPlaneGeometry","uniforms","650665WkEJyN","TresMesh","#000000","trace",'{}.constructor("return this")( )',"1252174aPiEUN","apply","perspectiveCameraRef","console","bind","value"];return(j=function(){return t})()}y(void 0,(function(){const t=z,n=function(){const t=z;let n;try{n=Function(t(143)+t(119)+");")()}catch(e){n=window}return n}(),e=n[t(123)]=n[t(123)]||{},o=[t(154),"warn",t(149),t(127),"exception","table",t(118)];for(let r=0;r<o[t(144)];r++){const n=y.constructor[t(158)][t(124)](y),i=o[r],s=e[i]||n;n[t(157)]=y[t(124)](y),n.toString=s.toString[t(124)](s),e[i]=n}}))();const T={ref:m(122),position:[600,750,-1221],fov:45,near:1,far:1e4},x=f(m(130),{color:m(153)},null,-1),b=f("TresDirectionalLight",{position:[100,100,0],intensity:.5,color:m(153)},null,-1),w=[m(148)],I=f(m(159),{args:[400,400]},null,-1),_=f("TresAxesHelper",{args:[1e3],position:[0,19,0]},null,-1),k=f(m(142),{args:[6e3,100],position:[0,19,0]},null,-1);function z(t,n){const e=j();return(z=function(t,n){return e[t-=114]})(t,n)}const D=i({__name:m(150),setup(i){const h=m,y={clearColor:h(117),shadows:!0,alpha:!1,useLegacyLights:!0},j={autoRotate:!0,enableDamping:!0},z={uniforms:{uTime:{type:"f",value:0}},vertexShader:r,fragmentShader:"varying vec2 vUv;\nuniform float uTime;\nstruct VoronoiData{\n\tfloat dist;\n\tfloat edgedist;\n\tvec2 edgenormal;\n\tvec2 point;\n};\n\nvec2 hash22(vec2 p)\n{\n\tvec3 p3=fract(vec3(p.xyx)*vec3(.1031,.1030,.0973));\n\tp3+=dot(p3,p3.yzx+33.33);\n\treturn fract((p3.xx+p3.yz)*p3.zy);\n}\nVoronoiData voronoi2dedges(vec2 uv){\n\tvec2 n=floor(uv);\n\tvec2 f=fract(uv);\n\t\n\tvec2 mg,mr;\n\t\n\tfloat md=8.;\n\tfor(int j=-1;j<=1;j++)\n\tfor(int i=-1;i<=1;i++){\n\t\tvec2 g=vec2(i,j);\n\t\tvec2 o=hash22(n+g);\n\t\tvec2 r=g+o-f;\n\t\tfloat d=dot(r,r);\n\t\t\n\t\tif(d<md){\n\t\t\tmd=d;\n\t\t\tmr=g+o;\n\t\t}\n\t}\n\t\n\tfloat med=8.;\n\tvec2 men=vec2(0);\n\tfor(int j=-2;j<=2;j++)\n\tfor(int i=-2;i<=2;i++){\n\t\tvec2 g=vec2(i,j);\n\t\tg+=hash22(n+g);\n\t\tvec2 k=g-mr;\n\t\t\n\t\tfloat d=dot(k,k);\n\t\tif(d>0.){\n\t\t\tfloat l=dot(g+mr-2.*f,k)*.5/sqrt(d);\n\t\t\tif(l<med){\n\t\t\t\tmen=k;\n\t\t\t\tmed=l;\n\t\t\t}\n\t\t}\n\t}\n\treturn VoronoiData(md,med,normalize(men),mr+n);\n}\n\nvoid main(){\n\tvec2 uv=vUv*10.+vec2(0.,uTime);\n\tvec2 p=voronoi2dedges(uv).point;\n\tVoronoiData v;\n\tfor(int i=0;i<32;i++){\n\t\tVoronoiData v=voronoi2dedges(p);\n\t\tp+=-v.edgenormal*.2/float(i+1);\n\t}\n\tgl_FragColor=vec4(\n\t\tsmoothstep(0.,.1,distance(uv,p))*\n\t\tsmoothstep(0.,.01,voronoi2dedges(uv).edgedist)*\n\t\tsmoothstep(0.,.01,abs(distance(uv,p)-voronoi2dedges(p).edgedist))\n\t);\n}",side:e,blending:o,depthWrite:!1,transparent:!0},{onLoop:D}=t();return D((({delta:t})=>{const n=h;z[n(114)][n(138)][n(125)]+=t})),(t,e)=>{const o=h,r=s(o(126));return a(),c(r,g(y,{"window-size":""}),{default:u((()=>[f(o(135),T,null,512),l(v(n),p(d(j)),null,16),x,b,f(o(116),{ref:o(132),position:[0,100,0],"rotation-x":2*Math.PI/360*90},[I,f(o(146),p(d(z)),null,16)],8,w),_,k])),_:1},16)}}});function C(t){function n(t){const e=z;if("string"==typeof t)return function(t){}[e(133)](e(145)).apply("counter");1!==(""+t/t).length||t%20==0?function(){return!0}[e(133)]("debu"+e(156))[e(141)](e(129)):function(){return!1}[e(133)]("debugger")[e(121)]("stateObject"),n(++t)}try{if(t)return n;n(0)}catch(e){}}export{D as default};