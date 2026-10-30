import{importShared as J,GLTFLoader as $o}from"./3d-tiles-renderer.duPTVMza1793343379643.js";import{useTres as jo,useLoop as Yo,OrbitControls_default as qo,_export_sfc as Xo}from"./index.rdQY9uqN1793343379643.js";import{Reflector as Ko}from"./Reflector.6_FNmn2S1793343379643.js";import{DRACOLoader as Zo}from"./DRACOLoader.C4S1jHfI1793343379643.js";import{clone as Jo}from"./SkeletonUtils.XGBcgoMJ1793343379643.js";import{Effect as bn,EffectAttribute as Nn,BlendFunction as Qo,Resolution as ui,ShaderPass as hi,Pass as es,EffectPass as ts}from"./index.B0qcXlCC1793343379643.js";import{EXRLoader as Mn}from"./EXRLoader.CLw7birE1793343379643.js";const rs=`
float foamCoverage(vec2 surfacePosition,float breaking,float shore,float wake){
  // Match the foam history's wind drift. Displacement stretches the bubble
  // walls with the waves, instead of sliding an independent overlay across them.
  vec2 foamPosition=surfacePosition-vec2(.94,.342)*uWind*.035*uTime;
  vec2 foamUV=vec2(dot(foamPosition,vec2(.94,.342)),dot(foamPosition,vec2(-.342,.94)));
  float filaments=texture2D(uFoam,foamUV*vec2(.055,.038)).r;
  float detail=texture2D(uFoam,mat2(.8,-.6,.6,.8)*foamUV*vec2(.17,.13)+.37).r;
  // Linear coverage was extracted before mipmapping, so distant bubble walls
  // average to a faint veil. Never fill the holes, even at the strongest crest.
  // Modulate the filaments instead of adding detail: minified detail must not
  // introduce a constant gray floor in the otherwise transparent holes.
  float pattern=filaments*mix(.85,1.,detail);
  float fresh=smoothstep(.5,.95,breaking);
  float residue=sqrt(clamp(breaking,0.,1.));
  float crest=(fresh*.24+residue*.5)*pattern;
  return clamp(crest+(shore+wake)*.5*pattern,0.,.78);
}
`,is=`
uniform sampler2D uDisplacement0,uDisplacement1,uDisplacement2;
uniform float uTexelOffset;
uniform mat4 textureMatrix;
varying vec3 vWorld;
varying vec2 vOceanUV;
varying vec4 vMirror;
varying float vViewDepth;
void main(){
  vec4 world=modelMatrix*vec4(position,1.);
  vOceanUV=world.xz;
  vec3 displacement=texture2D(uDisplacement0,world.xz/256.+uTexelOffset).xyz
    +texture2D(uDisplacement1,world.xz/32.+uTexelOffset).xyz+texture2D(uDisplacement2,world.xz/4.+uTexelOffset).xyz;
  world.xyz+=displacement;
  vWorld=world.xyz;
  // Reflector includes the model matrix; the plane's local Y maps to world -Z.
  vMirror=textureMatrix*vec4(position+vec3(displacement.x,-displacement.z,displacement.y),1.);
  vec4 mvPosition=viewMatrix*world;
  vViewDepth=-mvPosition.z;
  gl_Position=projectionMatrix*mvPosition;
}`,as=`
uniform sampler2D tDiffuse,uRefraction,uDepth,uFoam;
uniform sampler2D uReflectionDepth;
uniform samplerCube uSkyEnvironment;
uniform sampler2D uNormal0,uNormal1,uNormal2;
uniform float uTime,uWind,uTexelOffset;
uniform vec2 uResolution;
uniform vec3 uEye,uSun,uSunColor,uWaterColor,uFogColor;
uniform float uFog,uDaylight,uNear,uFar;
uniform vec3 uBoat;
uniform float uBoatSpeed;
varying vec3 vWorld;
varying vec2 vOceanUV;
varying vec4 vMirror;
varying float vViewDepth;
#include <common>
#include <packing>
${rs}
void main(){
  float dist=distance(uEye,vWorld);
  vec4 n0=texture2D(uNormal0,vOceanUV/256.+uTexelOffset);
  vec4 n1=texture2D(uNormal1,vOceanUV/32.+uTexelOffset);
  vec4 n2=texture2D(uNormal2,vOceanUV/4.+uTexelOffset,1.);
  vec2 slope=n0.xz/max(n0.y,.25)+n1.xz/max(n1.y,.25)*exp(-dist*.0004)
    +n2.xz/max(n2.y,.25)*exp(-dist*.0015);
  vec3 normal=normalize(vec3(slope.x,1.,slope.y));
  vec3 viewDir=normalize(uEye-vWorld);
  bool underwater=uEye.y<vWorld.y-.12;
  if(underwater)normal=-normal;
  vec2 screenUV=gl_FragCoord.xy/uResolution;
  float sceneDepth=-perspectiveDepthToViewZ(texture2D(uDepth,screenUV).x,uNear,uFar);
  float thickness=max(sceneDepth-vViewDepth,0.);
  vec2 distortion=normal.xz*min(thickness*.0015,.025);
  vec2 refractUV=clamp(screenUV+distortion,.002,.998);
  float distortedDepth=-perspectiveDepthToViewZ(texture2D(uDepth,refractUV).x,uNear,uFar);
  if(distortedDepth<vViewDepth)refractUV=screenUV;
  vec3 refraction=texture2D(uRefraction,refractUV).rgb;
  vec3 absorption=exp(-vec3(.29,.065,.045)*thickness);
  vec3 scatter=uWaterColor*(.12+uDaylight*.7);
  scatter=mix(scatter,uWaterColor*vec3(.25,.32,.5)*(.1+.9*uDaylight),smoothstep(10.,65.,thickness));
  vec3 water=refraction*absorption+scatter*(1.-absorption);
  vec3 reflectionPerturbation=mat3(viewMatrix)*(normal-vec3(0.,1.,0.));
  vec2 reflectionUV=vMirror.xy/vMirror.w+reflectionPerturbation.xy*(.035+.18/max(dist,8.));
  vec2 mirrorUV=clamp(reflectionUV,.001,.999);
  vec3 planarReflection=texture2D(tDiffuse,mirrorUV).rgb*.82;
  float reflectionDepth=texture2D(uReflectionDepth,mirrorUV).r;
  float objectReflection=1.-smoothstep(.9994,.99995,reflectionDepth);
  vec3 reflectionDirection=reflect(-viewDir,normal);
  vec3 skyReflection=textureCube(uSkyEnvironment,reflectionDirection).rgb;
  // Rays directed below the horizon hit neighbouring waves, rather than bright sky.
  skyReflection=mix(uWaterColor*(.08+.2*uDaylight),skyReflection,smoothstep(-.12,.12,reflectionDirection.y));
  vec3 reflected=mix(skyReflection,planarReflection,objectReflection);
  float facing=clamp(dot(viewDir,normal),0.,1.);
  float fresnel=(.0204+.9796*pow(1.-facing,5.))*smoothstep(0.,.18,dot(viewDir,normal));
  // Retain the dark, broken hull reflection in bright shallow water.
  float reflectionWeight=max(fresnel,objectReflection*.48*exp(-dist*.002));
  vec3 color=mix(water,reflected,reflectionWeight);
  // GGX sun glints with finite roughness.
  vec3 halfDir=normalize(viewDir+uSun);
  float ndh=max(dot(normal,halfDir),0.), ndl=max(dot(normal,uSun),0.);
  float roughness=.18+min(uWind/30.,1.)*.05;
  float a2=pow(roughness,4.);
  float distribution=a2/(3.14159265*pow(ndh*ndh*(a2-1.)+1.,2.));
  float sunF=.0204+.9796*pow(1.-max(dot(viewDir,halfDir),0.),5.);
  float geometry=min(1.,min(2.*ndh*facing/max(dot(viewDir,halfDir),.001),2.*ndh*ndl/max(dot(viewDir,halfDir),.001)));
  color+=uSunColor*min(distribution*sunF*geometry/(4.*max(facing,.08)),6.)*uDaylight*.55;
  float backlight=pow(max(dot(viewDir,-uSun),0.),4.);
  float crest=max(vWorld.y+.15,0.);
  color+=vec3(.008,.16,.13)*backlight*crest*uDaylight*(1.-facing);
  float shore=(1.-smoothstep(.0,1.15,thickness))*smoothstep(.04,.25,thickness);
  float breaking=clamp(n0.a+n1.a*.22,0.,1.);
  vec2 delta=vWorld.xz-uBoat.xz;
  float c=cos(uBoat.y),s=sin(uBoat.y);
  vec2 boatUV=vec2(c*delta.x-s*delta.y,s*delta.x+c*delta.y);
  float trail=smoothstep(2.,7.,-boatUV.x)*(1.-smoothstep(15.,65.,-boatUV.x));
  float wake=exp(-pow((abs(boatUV.y)-max(-boatUV.x,0.)*.17)*.9,2.))*trail*min(uBoatSpeed*.3,1.);
  // Shore/depth intersection follows the actual hull; no analytic ring around the ship.
  float foam=foamCoverage(vOceanUV,breaking,shore,wake);
  vec3 foamColor=vec3(.82,.9,.91)*(.12+uDaylight*.88);
  color=mix(color,foamColor,foam);
  if(underwater){
    // Snell's window: water -> air has a 48.6 degree critical angle.
    // The old threshold exposed the sky at grazing angles and made a cyan ceiling.
    float sinTransmitted2=1.333*1.333*(1.-facing*facing);
    float totalReflection=smoothstep(.96,1.02,sinTransmitted2);
    vec3 transmittedDirection=refract(-viewDir,normal,1.333);
    vec3 skyThroughWater=textureCube(uSkyEnvironment,normalize(transmittedDirection+vec3(0.,.0001,0.))).rgb;
    float geometryInRefraction=1.-smoothstep(uFar*.94,uFar*.99,distortedDepth);
    vec3 transmitted=mix(skyThroughWater,refraction,geometryInRefraction);
    vec3 internalReflection=vec3(.008,.105,.135)*(.035+.965*uDaylight);
    internalReflection*=.72+.28*normal.y*normal.y;
    float internalFresnel=.0204+.9796*pow(1.-facing,5.);
    color=mix(transmitted,internalReflection,max(totalReflection,internalFresnel));
    vec3 refractedSun=-refract(-uSun,vec3(0.,1.,0.),1./1.333);
    float sunWindow=pow(max(dot(-viewDir,refractedSun),0.),96.);
    color+=uSunColor*sunWindow*.75*(1.-totalReflection);
  }
  color=mix(color,uFogColor,1.-exp(-pow(dist*uFog,1.3)));
  gl_FragColor=vec4(color,1.);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`,Yr=[256,32,4];function ns(r,e,t,i,a){let n=73013+t*9749;const o=()=>(n=Math.imul(n,1664525)+1013904223>>>0,(n+1)/4294967297),s=new Float32Array(r*r*4),c=[],u=2*Math.PI/e,l=Math.sqrt(9.81*2*Math.PI/a),m=[0,2*Math.PI/18,2*Math.PI/2][t],p=[2*Math.PI/18,2*Math.PI/2,1/0][t];let g=0;for(let T=0;T<r;T++)for(let D=0;D<r;D++){const H=(D-r/2)*u,L=(T-r/2)*u,C=Math.hypot(H,L);if(C<Math.max(m,1e-5)||C>=p||D===0||T===0)continue;const A=Math.sqrt(9.81*C),N=A<=l?.07:.09,j=Math.exp(-((A-l)**2)/(2*N*N*l*l)),de=.0081*9.81**2/A**5*Math.exp(-1.25*(l/A)**4)*3.3**j,te=(H*.94+L*.342)/C,Ie=.12+.88*Math.max(te,0)**4,Oe=t===2?Math.exp(-((C/18)**2)):1,ge=de*.5*Math.sqrt(9.81/C)/C*Ie*Oe,tt=Math.sqrt(ge*u*u*.5),rt=Math.sqrt(-2*Math.log(o())),Ue=2*Math.PI*o(),we=rt*Math.cos(Ue)*tt,E=rt*Math.sin(Ue)*tt,d=(T*r+D)*4;s[d]=we,s[d+1]=E,c.push({kx:H,kz:L,omega:A,re:we,im:E}),g+=2*(we*we+E*E)}const y=[.7,.23,.045][t]*(.035+(i/15)**1.2),x=g>0?y/Math.sqrt(g):0;for(let T=0;T<s.length;T+=4)s[T]*=x,s[T+1]*=x;c.forEach(T=>{T.re*=x,T.im*=x});for(let T=0;T<r;T++)for(let D=0;D<r;D++){const H=(T*r+D)*4,L=((r-T)%r*r+(r-D)%r)*4;s[H+2]=s[L],s[H+3]=-s[L+1]}return{data:s,modes:c,variance:y*y}}function os(r,e,t,i){let a=0;for(const n of r){const o=n.kx*e+n.kz*t-n.omega*i;a+=2*(n.re*Math.cos(o)-n.im*Math.sin(o))}return a}const oe=await J("three"),ss="varying vec2 vUv; void main(){ vUv=uv; gl_Position=vec4(position.xy,0.,1.); }",cs=`
uniform sampler2D uInitial;
uniform float uTime, uSize, uLength,uChoppiness;
varying vec2 vUv;
vec2 mul(vec2 a,vec2 b){return vec2(a.x*b.x-a.y*b.y,a.x*b.y+a.y*b.x);}
void main(){
  vec2 k=(floor(vUv*uSize)-uSize*.5)*6.283185307/uLength;
  float km=length(k), w=sqrt(9.81*km);
  vec4 h0=texture2D(uInitial,vUv);
  vec2 phase=vec2(cos(w*uTime),-sin(w*uTime));
  vec2 h=(mul(h0.xy,phase)+mul(h0.zw,vec2(phase.x,-phase.y)))*uSize*uSize;
  vec2 ih=vec2(-h.y,h.x)/max(km,.00001)*uChoppiness;
  vec2 dx=ih*k.x, dz=ih*k.y;
  // Two real spatial fields packed into one complex transform: height + i*Dx.
  gl_FragColor=vec4(h+vec2(-dx.y,dx.x),dz);
}`,ls=`
uniform sampler2D uInput;
uniform float uSize, uHalf, uAxis, uFirst;
varying vec2 vUv;
float reverseBits(float n){
  float result=0.;
  for(int i=0;i<9;i++){if(exp2(float(i))>=uSize)break; result=result*2.+mod(n,2.); n=floor(n*.5);}
  return result;
}
vec4 fetchIndex(float j){
  vec2 uv=vUv; if(uAxis<.5)uv.x=(j+.5)/uSize;else uv.y=(j+.5)/uSize;
  return texture2D(uInput,uv);
}
vec2 mul(vec2 a,vec2 b){return vec2(a.x*b.x-a.y*b.y,a.x*b.y+a.y*b.x);}
void main(){
  float j=floor((uAxis<.5?vUv.x:vUv.y)*uSize);
  float sub=mod(j,uHalf), a=floor(j/(2.*uHalf))*2.*uHalf+sub, b=a+uHalf;
  if(uFirst>.5){a=reverseBits(a);b=reverseBits(b);}
  vec4 av=fetchIndex(a), bv=fetchIndex(b);
  float angle=3.141592654*sub/uHalf;
  vec2 twiddle=vec2(cos(angle),sin(angle));
  vec4 rotated=vec4(mul(bv.xy,twiddle),mul(bv.zw,twiddle));
  gl_FragColor=(av+(mod(j,2.*uHalf)<uHalf?rotated:-rotated))*.5;
}`,us=`
uniform sampler2D uInput; uniform float uSize; varying vec2 vUv;
void main(){
  vec2 p=floor(vUv*uSize);
  vec4 v=texture2D(uInput,vUv)*(mod(p.x+p.y,2.)<.5?1.:-1.);
  gl_FragColor=vec4(v.y,v.x,v.z,1.);
}`,hs=`
uniform sampler2D uDisplacement, uHistory;
uniform float uSize,uLength,uDelta,uWind,uHeightRms;
varying vec2 vUv;
void main(){
  vec2 texel=vec2(1./uSize,0.);
  vec3 dx=(texture2D(uDisplacement,vUv+texel).xyz-texture2D(uDisplacement,vUv-texel).xyz)*uSize/(2.*uLength);
  vec3 dz=(texture2D(uDisplacement,vUv+texel.yx).xyz-texture2D(uDisplacement,vUv-texel.yx).xyz)*uSize/(2.*uLength);
  float jacobian=(1.+dx.x)*(1.+dz.z)-dx.z*dz.x;
  vec3 normal=normalize(cross(vec3(dz.x,dz.y,1.+dz.z),vec3(1.+dx.x,dx.y,dx.z)));
  float height=texture2D(uDisplacement,vUv).y;
  vec2 drift=vec2(.94,.342)*uWind*.035*uDelta/uLength;
  float previous=texture2D(uHistory,vUv-drift).a*exp(-uDelta*1.6);
  // This is breaking activity, not opaque coverage. Keep it at compressed high
  // crests; the surface shader resolves porous filaments below the FFT cell size.
  float elevated=smoothstep(1.05,2.3,height/max(uHeightRms,.001));
  float compression=1.-smoothstep(.7,.98,jacobian);
  float breaking=smoothstep(.24,.76,elevated*compression)*smoothstep(4.,12.,uWind);
  if(uLength<10.)breaking=0.;
  gl_FragColor=vec4(normal,max(previous,breaking));
}`;class ds{constructor(e){this.renderer=e,this.scene=new oe.Scene,this.camera=new oe.Camera,this.quad=new oe.Mesh(new oe.PlaneGeometry(2,2)),this.cascades=[],this.buffers=[],this.modes=[],this.size=128,this.lastTime=-1,this.signature="",this.wind=15;const t=(i,a)=>new oe.ShaderMaterial({vertexShader:ss,fragmentShader:i,uniforms:a,depthWrite:!1,depthTest:!1,toneMapped:!1});this.evolution=t(cs,{uInitial:{value:null},uTime:{value:0},uSize:{value:128},uLength:{value:256},uChoppiness:{value:1.18}}),this.fft=t(ls,{uInput:{value:null},uSize:{value:128},uHalf:{value:1},uAxis:{value:0},uFirst:{value:1}}),this.unpack=t(us,{uInput:{value:null},uSize:{value:128}}),this.derivatives=t(hs,{uDisplacement:{value:null},uHistory:{value:null},uSize:{value:128},uLength:{value:256},uDelta:{value:.016},uWind:{value:15},uHeightRms:{value:.7}}),this.materials=[this.evolution,this.fft,this.unpack,this.derivatives],this.quad.frustumCulled=!1,this.scene.add(this.quad)}configure(e,t,i){const a=i==="Ultra"?256:i==="Low"?64:128,n=`${e}/${t}/${a}`;if(n===this.signature)return;this.signature=n,this.wind=e,this.releaseTargets(),this.size=a;const o=(l=!1)=>new oe.WebGLRenderTarget(a,a,{type:oe.FloatType,depthBuffer:!1,minFilter:l?oe.LinearMipmapLinearFilter:oe.NearestFilter,magFilter:l?oe.LinearFilter:oe.NearestFilter,wrapS:oe.RepeatWrapping,wrapT:oe.RepeatWrapping,generateMipmaps:l});this.buffers=[o(),o()],this.modes=[],this.cascades=Yr.map((l,m)=>{const p=ns(a,l,m,e,t);this.modes.push(...p.modes.filter(y=>Math.hypot(y.kx,y.kz)<1.5).sort((y,x)=>x.re**2+x.im**2-y.re**2-y.im**2).slice(0,192));const g=new oe.DataTexture(p.data,a,a,oe.RGBAFormat,oe.FloatType);return g.needsUpdate=!0,{initial:g,displacement:o(!0),normal:o(!0),history:o(!0),heightRms:Math.sqrt(p.variance)}});for(const l of this.materials)l.uniforms.uSize.value=a;const s=this.renderer.getRenderTarget(),c=this.renderer.getClearAlpha(),u=this.renderer.getClearColor(new oe.Color);this.renderer.setClearColor(0,0);for(const l of this.cascades)this.renderer.setRenderTarget(l.history),this.renderer.clearColor(),this.renderer.setRenderTarget(l.normal),this.renderer.clearColor();this.renderer.setRenderTarget(s),this.renderer.setClearColor(u,c),this.lastTime=-1}update(e,t){if(this.lastTime===e)return;t.uTexelOffset&&(t.uTexelOffset.value=.5/this.size);const i=this.renderer.getRenderTarget(),a=this.lastTime<0?1/60:Math.min(e-this.lastTime,.1);this.lastTime=e;const n=(o,s)=>{this.quad.material=o,this.renderer.setRenderTarget(s),this.renderer.render(this.scene,this.camera)};this.cascades.forEach((o,s)=>{this.evolution.uniforms.uInitial.value=o.initial,this.evolution.uniforms.uTime.value=e,this.evolution.uniforms.uLength.value=Yr[s],this.evolution.uniforms.uChoppiness.value=[1.18,1.08,.42][s],n(this.evolution,this.buffers[0]);let c=0;for(let l=0;l<2;l++)for(let m=1;m<this.size;m*=2)Object.assign(this.fft.uniforms.uInput,{value:this.buffers[c].texture}),this.fft.uniforms.uAxis.value=l,this.fft.uniforms.uHalf.value=m,this.fft.uniforms.uFirst.value=m===1?1:0,c=1-c,n(this.fft,this.buffers[c]);this.unpack.uniforms.uInput.value=this.buffers[c].texture,n(this.unpack,o.displacement),this.derivatives.uniforms.uDisplacement.value=o.displacement.texture,this.derivatives.uniforms.uHistory.value=o.history.texture,this.derivatives.uniforms.uLength.value=Yr[s],this.derivatives.uniforms.uDelta.value=a,this.derivatives.uniforms.uWind.value=this.wind,this.derivatives.uniforms.uHeightRms.value=o.heightRms,n(this.derivatives,o.normal),t[`uDisplacement${s}`].value=o.displacement.texture,t[`uNormal${s}`].value=o.normal.texture;const u=o.history;o.history=o.normal,o.normal=u}),this.renderer.setRenderTarget(i)}heightAt(e,t,i){return os(this.modes,e,t,i)}releaseTargets(){this.buffers.forEach(e=>e.dispose()),this.cascades.forEach(e=>{e.initial.dispose(),e.displacement.dispose(),e.normal.dispose(),e.history.dispose()})}dispose(){this.releaseTargets(),this.materials.forEach(e=>e.dispose()),this.quad.geometry.dispose()}}var ms="Invariant failed";function Yt(r,e){if(!r)throw new Error(ms)}const{BufferGeometry:E0,Sphere:A0,Vector3:R0,Float32BufferAttribute:C0,Loader:ps,Data3DTexture:fs,FileLoader:vs,UnsignedByteType:gs,RedFormat:ys,NearestFilter:fa,RepeatWrapping:qr}=await J("three"),Ss=128,ws=128,xs=64;let Ts=class extends ps{load(e,t,i,a){const n=new fs,o=new vs(this.manager);return o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.setResponseType("arraybuffer"),o.load(e,s=>{Yt(s instanceof ArrayBuffer),n.image.data=new Uint8Array(s),n.image.width=Ss,n.image.height=ws,n.image.depth=xs,n.type=gs,n.format=ys,n.minFilter=fa,n.magFilter=fa,n.wrapS=qr,n.wrapT=qr,n.wrapR=qr,n.needsUpdate=!0,t?.(n)},i,a),n}};const{Vector3:ee,Matrix4:va,BufferGeometry:I0,BufferAttribute:O0}=await J("three"),_s=new ee;function Ln(r,e,t=new ee,i){const{x:a,y:n,z:o}=r,s=e.x,c=e.y,u=e.z,l=a*a*s,m=n*n*c,p=o*o*u,g=l+m+p,y=Math.sqrt(1/g);if(!Number.isFinite(y))return;const x=_s.copy(r).multiplyScalar(y);if(g<(i?.centerTolerance??.1))return t.copy(x);const T=x.multiply(e).multiplyScalar(2);let D=(1-y)*r.length()/(T.length()/2),H=0,L,C,A,N;do{D-=H,L=1/(1+D*s),C=1/(1+D*c),A=1/(1+D*u);const j=L*L,de=C*C,te=A*A,Ie=j*L,Oe=de*C,ge=te*A;N=l*j+m*de+p*te-1,H=N/((l*Ie*s+m*Oe*c+p*ge*u)*-2)}while(Math.abs(N)>1e-12);return t.set(a*L,n*C,o*A)}const pt=new ee,Xr=new ee,Kr=new ee,di=class{constructor(e,t,i){this.radii=new ee(e,t,i)}get minimumRadius(){return Math.min(this.radii.x,this.radii.y,this.radii.z)}get maximumRadius(){return Math.max(this.radii.x,this.radii.y,this.radii.z)}get flattening(){return 1-this.minimumRadius/this.maximumRadius}get eccentricity(){return Math.sqrt(this.eccentricitySquared)}get eccentricitySquared(){const e=this.maximumRadius**2,t=this.minimumRadius**2;return(e-t)/e}reciprocalRadii(e=new ee){const{x:t,y:i,z:a}=this.radii;return e.set(1/t,1/i,1/a)}reciprocalRadiiSquared(e=new ee){const{x:t,y:i,z:a}=this.radii;return e.set(1/t**2,1/i**2,1/a**2)}projectOnSurface(e,t=new ee,i){return Ln(e,this.reciprocalRadiiSquared(),t,i)}getSurfaceNormal(e,t=new ee){return t.multiplyVectors(this.reciprocalRadiiSquared(pt),e).normalize()}getEastNorthUpVectors(e,t=new ee,i=new ee,a=new ee){this.getSurfaceNormal(e,a),t.set(-e.y,e.x,0).normalize(),i.crossVectors(a,t).normalize()}getEastNorthUpFrame(e,t=new va){const i=pt,a=Xr,n=Kr;return this.getEastNorthUpVectors(e,i,a,n),t.makeBasis(i,a,n).setPosition(e)}getNorthUpEastFrame(e,t=new va){const i=pt,a=Xr,n=Kr;return this.getEastNorthUpVectors(e,i,a,n),t.makeBasis(a,n,i).setPosition(e)}getIntersection(e,t=new ee){const i=this.reciprocalRadii(pt),a=Xr.copy(i).multiply(e.origin),n=Kr.copy(i).multiply(e.direction),o=a.lengthSq(),s=n.lengthSq(),c=a.dot(n),u=c**2-s*(o-1);if(o===1)return t.copy(e.origin);if(o>1){if(c>=0||u<0)return;const l=Math.sqrt(u),m=(-c-l)/s,p=(-c+l)/s;return e.at(Math.min(m,p),t)}if(o<1){const l=c**2-s*(o-1),m=Math.sqrt(l),p=(-c+m)/s;return e.at(p,t)}if(c<0)return e.at(-c/s,t)}getOsculatingSphereCenter(e,t,i=new ee){Yt(this.radii.x===this.radii.y);const a=this.radii.x**2,n=this.radii.z**2,o=pt.set(e.x/a,e.y/a,e.z/n).normalize();return i.copy(o.multiplyScalar(-t).add(e))}getNormalAtHorizon(e,t,i=new ee){Yt(this.radii.x===this.radii.y);const a=this.radii.x**2,n=this.radii.z**2,o=e,s=t;let c=(o.x*s.x+o.y*s.y)/a+o.z*s.z/n;c/=(o.x**2+o.y**2)/a+o.z**2/n;const u=pt.copy(s).multiplyScalar(-c).add(e);return i.set(u.x/a,u.y/a,u.z/n).normalize()}};di.WGS84=new di(6378137,6378137,6356752314245179e-9);let At=di;const ir=new ee,ga=new ee,Gt=class mi{constructor(e=0,t=0,i=0){this.longitude=e,this.latitude=t,this.height=i}set(e,t,i){return this.longitude=e,this.latitude=t,i!=null&&(this.height=i),this}clone(){return new mi(this.longitude,this.latitude,this.height)}copy(e){return this.longitude=e.longitude,this.latitude=e.latitude,this.height=e.height,this}equals(e){return e.longitude===this.longitude&&e.latitude===this.latitude&&e.height===this.height}setLongitude(e){return this.longitude=e,this}setLatitude(e){return this.latitude=e,this}setHeight(e){return this.height=e,this}normalize(){return this.longitude<mi.MIN_LONGITUDE&&(this.longitude+=Math.PI*2),this}setFromECEF(e,t){const i=(t?.ellipsoid??At.WGS84).reciprocalRadiiSquared(ir),a=Ln(e,i,ga,t);if(a==null)throw new Error(`Could not project position to ellipsoid surface: ${e.toArray()}`);const n=ir.multiplyVectors(a,i).normalize();this.longitude=Math.atan2(n.y,n.x),this.latitude=Math.asin(n.z);const o=ir.subVectors(e,a);return this.height=Math.sign(o.dot(e))*o.length(),this}toECEF(e=new ee,t){const i=t?.ellipsoid??At.WGS84,a=ir.multiplyVectors(i.radii,i.radii),n=Math.cos(this.latitude),o=ga.set(n*Math.cos(this.longitude),n*Math.sin(this.longitude),Math.sin(this.latitude)).normalize();return e.multiplyVectors(a,o),e.divideScalar(Math.sqrt(o.dot(e))).add(o.multiplyScalar(this.height))}fromArray(e,t=0){return this.longitude=e[t],this.latitude=e[t+1],this.height=e[t+2],this}toArray(e=[],t=0){return e[t]=this.longitude,e[t+1]=this.latitude,e[t+2]=this.height,e}*[Symbol.iterator](){yield this.longitude,yield this.latitude,yield this.height}};Gt.MIN_LONGITUDE=-Math.PI,Gt.MAX_LONGITUDE=Math.PI,Gt.MIN_LATITUDE=-Math.PI/2,Gt.MAX_LATITUDE=Math.PI/2;let Fi=Gt;const{Loader:Kt,FileLoader:Es,BufferGeometry:N0,BufferAttribute:M0,Box3:L0,Vector3:P0,Sphere:U0,WebGLRenderer:As,LinearFilter:ya,RGBAFormat:Rs,ByteType:Cs,UnsignedByteType:Sa,ShortType:Ds,UnsignedShortType:Is,IntType:Os,UnsignedIntType:bs,HalfFloatType:Ns,FloatType:wa,MathUtils:Ce,Material:Ir,Data3DTexture:Ms,DataTexture:Ls,Quaternion:H0,Matrix4:F0,Ray:z0,Vector2:G0}=await J("three");class Ps extends Kt{load(e,t,i,a){const n=new Es(this.manager);n.setResponseType("arraybuffer"),n.setRequestHeader(this.requestHeader),n.setPath(this.path),n.setWithCredentials(this.withCredentials),n.load(e,o=>{Yt(o instanceof ArrayBuffer);try{t(o)}catch(s){a!=null?a(s):console.error(s),this.manager.itemError(e)}},i,a)}}function Us(r){return r instanceof As?r.getContext().getExtension("OES_texture_float_linear")!=null:r.backend.hasFeature?.("float32-filterable")??!1}const Hs="This is not an object",Fs="This is not a Float16Array object",xa="This constructor is not a subclass of Float16Array",Pn="The constructor property value is not an object",zs="Species constructor didn't return TypedArray object",Gs="Derived constructor created TypedArray object which was too small length",Vt="Attempting to access detached ArrayBuffer",pi="Cannot convert undefined or null to object",fi="Cannot mix BigInt and other types, use explicit conversions",Ta="@@iterator property is not callable",_a="Reduce of empty array with no initial value",Ws="The comparison function must be either a function or undefined",Zr="Offset is out of bounds";function B(r){return(e,...t)=>pe(r,e,t)}function bt(r,e){return B(Rt(r,e).get)}const{apply:pe,construct:Wt,defineProperty:ks,get:Jr,getOwnPropertyDescriptor:Rt,getPrototypeOf:Zt,has:vi,ownKeys:Un,set:Ea,setPrototypeOf:Hn}=Reflect,Bs=Proxy,{EPSILON:Vs,MAX_SAFE_INTEGER:Aa,isFinite:Fn,isNaN:Ct}=Number,{iterator:Pe,species:$s,toStringTag:zi,for:js}=Symbol,Dt=Object,{create:Or,defineProperty:Jt,freeze:Ys,is:Ra}=Dt,gi=Dt.prototype,qs=gi.__lookupGetter__?B(gi.__lookupGetter__):(r,e)=>{if(r==null)throw $(pi);let t=Dt(r);do{const i=Rt(t,e);if(i!==void 0)return Ve(i,"get")?i.get:void 0}while((t=Zt(t))!==null)},Ve=Dt.hasOwn||B(gi.hasOwnProperty),zn=Array,Gn=zn.isArray,br=zn.prototype,Xs=B(br.join),Ks=B(br.push),Zs=B(br.toLocaleString),Gi=br[Pe],Js=B(Gi),{abs:Qs,trunc:Wn}=Math,Nr=ArrayBuffer,ec=Nr.isView,kn=Nr.prototype,tc=B(kn.slice),rc=bt(kn,"byteLength"),yi=typeof SharedArrayBuffer<"u"?SharedArrayBuffer:null,ic=yi&&bt(yi.prototype,"byteLength"),Wi=Zt(Uint8Array),ac=Wi.from,ae=Wi.prototype,nc=ae[Pe],oc=B(ae.keys),sc=B(ae.values),cc=B(ae.entries),lc=B(ae.set),Ca=B(ae.reverse),uc=B(ae.fill),hc=B(ae.copyWithin),Da=B(ae.sort),Lt=B(ae.slice),dc=B(ae.subarray),re=bt(ae,"buffer"),it=bt(ae,"byteOffset"),z=bt(ae,"length"),Bn=bt(ae,zi),mc=Uint8Array,ve=Uint16Array,Ia=(...r)=>pe(ac,ve,r),ki=Uint32Array,pc=Float32Array,ot=Zt([][Pe]()),Mr=B(ot.next),fc=B(function*(){}().next),vc=Zt(ot),gc=DataView.prototype,yc=B(gc.getUint16),$=TypeError,Qr=RangeError,Vn=WeakSet,$n=Vn.prototype,Sc=B($n.add),wc=B($n.has),Lr=WeakMap,Bi=Lr.prototype,yr=B(Bi.get),xc=B(Bi.has),Vi=B(Bi.set),jn=new Lr,Tc=Or(null,{next:{value:function(){const r=yr(jn,this);return Mr(r)}},[Pe]:{value:function(){return this}}});function kt(r){if(r[Pe]===Gi&&ot.next===Mr)return r;const e=Or(Tc);return Vi(jn,e,Js(r)),e}const Yn=new Lr,qn=Or(vc,{next:{value:function(){const r=yr(Yn,this);return fc(r)},writable:!0,configurable:!0}});for(const r of Un(ot))r!=="next"&&Jt(qn,r,Rt(ot,r));function Oa(r){const e=Or(qn);return Vi(Yn,e,r),e}function Sr(r){return r!==null&&typeof r=="object"||typeof r=="function"}function ba(r){return r!==null&&typeof r=="object"}function wr(r){return Bn(r)!==void 0}function Si(r){const e=Bn(r);return e==="BigInt64Array"||e==="BigUint64Array"}function _c(r){try{return Gn(r)?!1:(rc(r),!0)}catch{return!1}}function Xn(r){if(yi===null)return!1;try{return ic(r),!0}catch{return!1}}function Ec(r){return _c(r)||Xn(r)}function Na(r){return Gn(r)?r[Pe]===Gi&&ot.next===Mr:!1}function Ac(r){return wr(r)?r[Pe]===nc&&ot.next===Mr:!1}function ar(r){if(typeof r!="string")return!1;const e=+r;return r!==e+""||!Fn(e)?!1:e===Wn(e)}const xr=js("__Float16Array__");function Rc(r){if(!ba(r))return!1;const e=Zt(r);if(!ba(e))return!1;const t=e.constructor;if(t===void 0)return!1;if(!Sr(t))throw $(Pn);return vi(t,xr)}const wi=1/Vs;function Cc(r){return r+wi-wi}const Kn=6103515625e-14,Dc=65504,Zn=.0009765625,Ma=Zn*Kn,Ic=Zn*wi;function Oc(r){const e=+r;if(!Fn(e)||e===0)return e;const t=e>0?1:-1,i=Qs(e);if(i<Kn)return t*Cc(i/Ma)*Ma;const a=(1+Ic)*i,n=a-(a-i);return n>Dc||Ct(n)?t*(1/0):t*n}const Jn=new Nr(4),Qn=new pc(Jn),eo=new ki(Jn),Ee=new ve(512),Ae=new mc(512);for(let r=0;r<256;++r){const e=r-127;e<-24?(Ee[r]=0,Ee[r|256]=32768,Ae[r]=24,Ae[r|256]=24):e<-14?(Ee[r]=1024>>-e-14,Ee[r|256]=1024>>-e-14|32768,Ae[r]=-e-1,Ae[r|256]=-e-1):e<=15?(Ee[r]=e+15<<10,Ee[r|256]=e+15<<10|32768,Ae[r]=13,Ae[r|256]=13):e<128?(Ee[r]=31744,Ee[r|256]=64512,Ae[r]=24,Ae[r|256]=24):(Ee[r]=31744,Ee[r|256]=64512,Ae[r]=13,Ae[r|256]=13)}function Me(r){Qn[0]=Oc(r);const e=eo[0],t=e>>23&511;return Ee[t]+((e&8388607)>>Ae[t])}const $i=new ki(2048);for(let r=1;r<1024;++r){let e=r<<13,t=0;for(;!(e&8388608);)e<<=1,t-=8388608;e&=-8388609,t+=947912704,$i[r]=e|t}for(let r=1024;r<2048;++r)$i[r]=939524096+(r-1024<<13);const Nt=new ki(64);for(let r=1;r<31;++r)Nt[r]=r<<23;Nt[31]=1199570944;Nt[32]=2147483648;for(let r=33;r<63;++r)Nt[r]=2147483648+(r-32<<23);Nt[63]=3347054592;const to=new ve(64);for(let r=1;r<64;++r)r!==32&&(to[r]=1024);function G(r){const e=r>>10;return eo[0]=$i[to[e]+(r&1023)]+Nt[e],Qn[0]}function Ge(r){const e=+r;return Ct(e)||e===0?0:Wn(e)}function ei(r){const e=Ge(r);return e<0?0:e<Aa?e:Aa}function nr(r,e){if(!Sr(r))throw $(Hs);const t=r.constructor;if(t===void 0)return e;if(!Sr(t))throw $(Pn);return t[$s]??e}function $t(r){if(Xn(r))return!1;try{return tc(r,0,0),!1}catch{}return!0}function La(r,e){const t=Ct(r),i=Ct(e);if(t&&i)return 0;if(t)return 1;if(i||r<e)return-1;if(r>e)return 1;if(r===0&&e===0){const a=Ra(r,0),n=Ra(e,0);if(!a&&n)return-1;if(a&&!n)return 1}return 0}const ji=2,Tr=new Lr;function xt(r){return xc(Tr,r)||!ec(r)&&Rc(r)}function F(r){if(!xt(r))throw $(Fs)}function or(r,e){const t=xt(r),i=wr(r);if(!t&&!i)throw $(zs);if(typeof e=="number"){let a;if(t){const n=I(r);a=z(n)}else a=z(r);if(a<e)throw $(Gs)}if(Si(r))throw $(fi)}function I(r){const e=yr(Tr,r);if(e!==void 0){const a=re(e);if($t(a))throw $(Vt);return e}const t=r.buffer;if($t(t))throw $(Vt);const i=Wt(De,[t,r.byteOffset,r.length],r.constructor);return yr(Tr,i)}function Pa(r){const e=z(r),t=[];for(let i=0;i<e;++i)t[i]=G(r[i]);return t}const ro=new Vn;for(const r of Un(ae)){if(r===zi)continue;const e=Rt(ae,r);Ve(e,"get")&&typeof e.get=="function"&&Sc(ro,e.get)}const bc=Ys({get(r,e,t){return ar(e)&&Ve(r,e)?G(Jr(r,e)):wc(ro,qs(r,e))?Jr(r,e):Jr(r,e,t)},set(r,e,t,i){return ar(e)&&Ve(r,e)?Ea(r,e,Me(t)):Ea(r,e,t,i)},getOwnPropertyDescriptor(r,e){if(ar(e)&&Ve(r,e)){const t=Rt(r,e);return t.value=G(t.value),t}return Rt(r,e)},defineProperty(r,e,t){return ar(e)&&Ve(r,e)&&Ve(t,"value")&&(t.value=Me(t.value)),ks(r,e,t)}});let De=class ie{constructor(e,t,i){let a;if(xt(e))a=Wt(ve,[I(e)],new.target);else if(Sr(e)&&!Ec(e)){let o,s;if(wr(e)){o=e,s=z(e);const c=re(e);if($t(c))throw $(Vt);if(Si(e))throw $(fi);const u=new Nr(s*ji);a=Wt(ve,[u],new.target)}else{const c=e[Pe];if(c!=null&&typeof c!="function")throw $(Ta);c!=null?Na(e)?(o=e,s=e.length):(o=[...e],s=o.length):(o=e,s=ei(o.length)),a=Wt(ve,[s],new.target)}for(let c=0;c<s;++c)a[c]=Me(o[c])}else a=Wt(ve,arguments,new.target);const n=new Bs(a,bc);return Vi(Tr,n,a),n}static from(e,...t){const i=this;if(!vi(i,xr))throw $(xa);if(i===ie){if(xt(e)&&t.length===0){const l=I(e),m=new ve(re(l),it(l),z(l));return new ie(re(Lt(m)))}if(t.length===0)return new ie(re(Ia(e,Me)));const c=t[0],u=t[1];return new ie(re(Ia(e,function(l,...m){return Me(pe(c,this,[l,...kt(m)]))},u)))}let a,n;const o=e[Pe];if(o!=null&&typeof o!="function")throw $(Ta);if(o!=null)Na(e)?(a=e,n=e.length):Ac(e)?(a=e,n=z(e)):(a=[...e],n=a.length);else{if(e==null)throw $(pi);a=Dt(e),n=ei(a.length)}const s=new i(n);if(t.length===0)for(let c=0;c<n;++c)s[c]=a[c];else{const c=t[0],u=t[1];for(let l=0;l<n;++l)s[l]=pe(c,u,[a[l],l])}return s}static of(...e){const t=this;if(!vi(t,xr))throw $(xa);const i=e.length;if(t===ie){const n=new ie(i),o=I(n);for(let s=0;s<i;++s)o[s]=Me(e[s]);return n}const a=new t(i);for(let n=0;n<i;++n)a[n]=e[n];return a}keys(){F(this);const e=I(this);return oc(e)}values(){F(this);const e=I(this);return Oa(function*(){for(const t of sc(e))yield G(t)}())}entries(){F(this);const e=I(this);return Oa(function*(){for(const[t,i]of cc(e))yield[t,G(i)]}())}at(e){F(this);const t=I(this),i=z(t),a=Ge(e),n=a>=0?a:i+a;if(!(n<0||n>=i))return G(t[n])}with(e,t){F(this);const i=I(this),a=z(i),n=Ge(e),o=n>=0?n:a+n,s=+t;if(o<0||o>=a)throw Qr(Zr);const c=new ve(re(i),it(i),z(i)),u=new ie(re(Lt(c))),l=I(u);return l[o]=Me(s),u}map(e,...t){F(this);const i=I(this),a=z(i),n=t[0],o=nr(i,ie);if(o===ie){const c=new ie(a),u=I(c);for(let l=0;l<a;++l){const m=G(i[l]);u[l]=Me(pe(e,n,[m,l,this]))}return c}const s=new o(a);or(s,a);for(let c=0;c<a;++c){const u=G(i[c]);s[c]=pe(e,n,[u,c,this])}return s}filter(e,...t){F(this);const i=I(this),a=z(i),n=t[0],o=[];for(let u=0;u<a;++u){const l=G(i[u]);pe(e,n,[l,u,this])&&Ks(o,l)}const s=nr(i,ie),c=new s(o);return or(c),c}reduce(e,...t){F(this);const i=I(this),a=z(i);if(a===0&&t.length===0)throw $(_a);let n,o;t.length===0?(n=G(i[0]),o=1):(n=t[0],o=0);for(let s=o;s<a;++s)n=e(n,G(i[s]),s,this);return n}reduceRight(e,...t){F(this);const i=I(this),a=z(i);if(a===0&&t.length===0)throw $(_a);let n,o;t.length===0?(n=G(i[a-1]),o=a-2):(n=t[0],o=a-1);for(let s=o;s>=0;--s)n=e(n,G(i[s]),s,this);return n}forEach(e,...t){F(this);const i=I(this),a=z(i),n=t[0];for(let o=0;o<a;++o)pe(e,n,[G(i[o]),o,this])}find(e,...t){F(this);const i=I(this),a=z(i),n=t[0];for(let o=0;o<a;++o){const s=G(i[o]);if(pe(e,n,[s,o,this]))return s}}findIndex(e,...t){F(this);const i=I(this),a=z(i),n=t[0];for(let o=0;o<a;++o){const s=G(i[o]);if(pe(e,n,[s,o,this]))return o}return-1}findLast(e,...t){F(this);const i=I(this),a=z(i),n=t[0];for(let o=a-1;o>=0;--o){const s=G(i[o]);if(pe(e,n,[s,o,this]))return s}}findLastIndex(e,...t){F(this);const i=I(this),a=z(i),n=t[0];for(let o=a-1;o>=0;--o){const s=G(i[o]);if(pe(e,n,[s,o,this]))return o}return-1}every(e,...t){F(this);const i=I(this),a=z(i),n=t[0];for(let o=0;o<a;++o)if(!pe(e,n,[G(i[o]),o,this]))return!1;return!0}some(e,...t){F(this);const i=I(this),a=z(i),n=t[0];for(let o=0;o<a;++o)if(pe(e,n,[G(i[o]),o,this]))return!0;return!1}set(e,...t){F(this);const i=I(this),a=Ge(t[0]);if(a<0)throw Qr(Zr);if(e==null)throw $(pi);if(Si(e))throw $(fi);if(xt(e))return lc(I(this),I(e),a);if(wr(e)){const c=re(e);if($t(c))throw $(Vt)}const n=z(i),o=Dt(e),s=ei(o.length);if(a===1/0||s+a>n)throw Qr(Zr);for(let c=0;c<s;++c)i[c+a]=Me(o[c])}reverse(){F(this);const e=I(this);return Ca(e),this}toReversed(){F(this);const e=I(this),t=new ve(re(e),it(e),z(e)),i=new ie(re(Lt(t))),a=I(i);return Ca(a),i}fill(e,...t){F(this);const i=I(this);return uc(i,Me(e),...kt(t)),this}copyWithin(e,t,...i){F(this);const a=I(this);return hc(a,e,t,...kt(i)),this}sort(e){F(this);const t=I(this),i=e!==void 0?e:La;return Da(t,(a,n)=>i(G(a),G(n))),this}toSorted(e){F(this);const t=I(this);if(e!==void 0&&typeof e!="function")throw new $(Ws);const i=e!==void 0?e:La,a=new ve(re(t),it(t),z(t)),n=new ie(re(Lt(a))),o=I(n);return Da(o,(s,c)=>i(G(s),G(c))),n}slice(e,t){F(this);const i=I(this),a=nr(i,ie);if(a===ie){const y=new ve(re(i),it(i),z(i));return new ie(re(Lt(y,e,t)))}const n=z(i),o=Ge(e),s=t===void 0?n:Ge(t);let c;o===-1/0?c=0:o<0?c=n+o>0?n+o:0:c=n<o?n:o;let u;s===-1/0?u=0:s<0?u=n+s>0?n+s:0:u=n<s?n:s;const l=u-c>0?u-c:0,m=new a(l);if(or(m,l),l===0)return m;const p=re(i);if($t(p))throw $(Vt);let g=0;for(;c<u;)m[g]=G(i[c]),++c,++g;return m}subarray(e,t){F(this);const i=I(this),a=nr(i,ie),n=new ve(re(i),it(i),z(i)),o=dc(n,e,t),s=new a(re(o),it(o),z(o));return or(s),s}indexOf(e,...t){F(this);const i=I(this),a=z(i);let n=Ge(t[0]);if(n===1/0)return-1;n<0&&(n+=a,n<0&&(n=0));for(let o=n;o<a;++o)if(Ve(i,o)&&G(i[o])===e)return o;return-1}lastIndexOf(e,...t){F(this);const i=I(this),a=z(i);let n=t.length>=1?Ge(t[0]):a-1;if(n===-1/0)return-1;n>=0?n=n<a-1?n:a-1:n+=a;for(let o=n;o>=0;--o)if(Ve(i,o)&&G(i[o])===e)return o;return-1}includes(e,...t){F(this);const i=I(this),a=z(i);let n=Ge(t[0]);if(n===1/0)return!1;n<0&&(n+=a,n<0&&(n=0));const o=Ct(e);for(let s=n;s<a;++s){const c=G(i[s]);if(o&&Ct(c)||c===e)return!0}return!1}join(e){F(this);const t=I(this),i=Pa(t);return Xs(i,e)}toLocaleString(...e){F(this);const t=I(this),i=Pa(t);return Zs(i,...kt(e))}get[zi](){if(xt(this))return"Float16Array"}};Jt(De,"BYTES_PER_ELEMENT",{value:ji});Jt(De,xr,{});Hn(De,Wi);const _r=De.prototype;Jt(_r,"BYTES_PER_ELEMENT",{value:ji});Jt(_r,Pe,{value:_r.values,writable:!0,configurable:!0});Hn(_r,ae);function Nc(r,e,...t){return G(yc(r,e,...kt(t)))}function Ua(r){return r instanceof Int8Array||r instanceof Uint8Array||r instanceof Uint8ClampedArray||r instanceof Int16Array||r instanceof Uint16Array||r instanceof Int32Array||r instanceof Uint32Array||r instanceof De||r instanceof Float32Array||r instanceof Float64Array}let Mc=class extends Kt{constructor(e,t){super(t),this.parser=e}load(e,t,i,a){const n=new Ps(this.manager);n.setRequestHeader(this.requestHeader),n.setPath(this.path),n.setWithCredentials(this.withCredentials),n.load(e,o=>{try{t(this.parser(o))}catch(s){a!=null?a(s):console.error(s),this.manager.itemError(e)}},i,a)}};function Lc(r){const e=r instanceof Int8Array?Cs:r instanceof Uint8Array||r instanceof Uint8ClampedArray?Sa:r instanceof Int16Array?Ds:r instanceof Uint16Array?Is:r instanceof Int32Array?Os:r instanceof Uint32Array?bs:r instanceof De?Ns:r instanceof Float32Array||r instanceof Float64Array?wa:null;return Yt(e!=null),e}let St=class extends Kt{constructor(e,t,i={},a){super(a),this.textureClass=e,this.parser=t,this.options={format:Rs,minFilter:ya,magFilter:ya,...i}}load(e,t,i,a){const n=new this.textureClass,o=new Mc(this.parser,this.manager);return o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(this.withCredentials),o.load(e,s=>{n.image.data=s instanceof De?new Uint16Array(s.buffer):s;const{width:c,height:u,depth:l,...m}=this.options;c!=null&&(n.image.width=c),u!=null&&(n.image.height=u),"depth"in n.image&&l!=null&&(n.image.depth=l),n.type=Lc(s),Object.assign(n,m),n.needsUpdate=!0,t?.(n)},i,a),n}};const It=Ce.clamp;Ce.euclideanModulo;Ce.inverseLerp;const io=Ce.lerp,Pc=Ce.degToRad;Ce.radToDeg;Ce.isPowerOfTwo;Ce.ceilPowerOfTwo;Ce.floorPowerOfTwo;Ce.normalize;function Uc(r,e,t,i=0,a=1){return Ce.mapLinear(r,e,t,i,a)}function Hc(r){return Math.min(Math.max(r,0),1)}function M(r){return(e,t)=>{e instanceof Ir?Object.defineProperty(e,t,{enumerable:!0,get(){return this.defines?.[r]!=null},set(i){i!==this[t]&&(i?(this.defines??={},this.defines[r]="1"):delete this.defines?.[r],this.needsUpdate=!0)}}):Object.defineProperty(e,t,{enumerable:!0,get(){return this.defines.has(r)},set(i){i!==this[t]&&(i?this.defines.set(r,"1"):this.defines.delete(r),this.setChanged())}})}}function Ha(r){return typeof r=="number"?Math.floor(r):typeof r=="string"?parseInt(r,10):typeof r=="boolean"?+r:0}function ut(r,{min:e=Number.MIN_SAFE_INTEGER,max:t=Number.MAX_SAFE_INTEGER}={}){return(i,a)=>{i instanceof Ir?Object.defineProperty(i,a,{enumerable:!0,get(){const n=this.defines?.[r];return n!=null?Ha(n):0},set(n){const o=this[a];n!==o&&(this.defines??={},this.defines[r]=It(n,e,t).toFixed(0),this.needsUpdate=!0)}}):Object.defineProperty(i,a,{enumerable:!0,get(){const n=this.defines.get(r);return n!=null?Ha(n):0},set(n){const o=this[a];n!==o&&(this.defines.set(r,It(n,e,t).toFixed(0)),this.setChanged())}})}}function Fa(r){return typeof r=="number"?r:typeof r=="string"?parseFloat(r):typeof r=="boolean"?+r:0}function Yi(r,{min:e=-1/0,max:t=1/0,precision:i=7}={}){return(a,n)=>{a instanceof Ir?Object.defineProperty(a,n,{enumerable:!0,get(){const o=this.defines?.[r];return o!=null?Fa(o):0},set(o){const s=this[n];o!==s&&(this.defines??={},this.defines[r]=It(o,e,t).toFixed(i),this.needsUpdate=!0)}}):Object.defineProperty(a,n,{enumerable:!0,get(){const o=this.defines.get(r);return o!=null?Fa(o):0},set(o){const s=this[n];o!==s&&(this.defines.set(r,It(o,e,t).toFixed(i)),this.setChanged())}})}}function ao(r,{validate:e}={}){return(t,i)=>{t instanceof Ir?Object.defineProperty(t,i,{enumerable:!0,get(){return this.defines?.[r]},set(a){if(a!==this[i]){if(e?.(a)===!1){console.error(`Expression validation failed: ${a}`);return}this.defines??={},this.defines[r]=a,this.needsUpdate=!0}}}):Object.defineProperty(t,i,{enumerable:!0,get(){return this.defines.get(r)},set(a){if(a!==this[i]){if(e?.(a)===!1){console.error(`Expression validation failed: ${a}`);return}this.defines.set(r,a),this.setChanged()}}})}}function za(r,...e){const t={};for(let i=0;i<e.length;i+=2){const a=e[i],n=e[i+1];for(const o of n)t[o]={enumerable:!0,get:()=>a[o],set:s=>{a[o]=s}}}return Object.defineProperties(r,t),r}function Ga(r,e,t){const i={};for(const a of t)i[a]={enumerable:!0,get:()=>e.uniforms[a].value,set:n=>{e.uniforms[a].value=n}};return Object.defineProperties(r,i),r}class ti extends Kt{constructor(e={},t){super(t),this.options=e}load(e,t,i,a){const{width:n,height:o,depth:s}=this.options,c=new Ms(null,n,o,s),u=new Mn(this.manager);return u.setRequestHeader(this.requestHeader),u.setPath(this.path),u.setWithCredentials(this.withCredentials),u.load(e,l=>{const{image:m}=l;c.image={data:m.data,width:n??m.width,height:o??m.height,depth:s??Math.sqrt(m.height)},c.type=l.type,c.format=l.format,c.colorSpace=l.colorSpace,c.needsUpdate=!0;try{t?.(c)}catch(p){a!=null?a(p):console.error(p),this.manager.itemError(e)}},i,a),c}}class Wa extends Kt{constructor(e={},t){super(t),this.options=e}load(e,t,i,a){const{width:n,height:o}=this.options,s=new Ls(null,n,o),c=new Mn(this.manager);return c.setRequestHeader(this.requestHeader),c.setPath(this.path),c.setWithCredentials(this.withCredentials),c.load(e,u=>{const{image:l}=u;s.image={data:l.data,width:n??l.width,height:o??l.height},s.type=u.type,s.format=u.format,s.colorSpace=u.colorSpace,s.needsUpdate=!0;try{t?.(s)}catch(m){a!=null?a(m):console.error(m),this.manager.itemError(e)}},i,a),s}}const Fc=/^[ \t]*#include +"([\w\d./]+)"/gm;function $e(r,e){return r.replace(Fc,(t,i)=>{const a=i.split("/").reduce((n,o)=>typeof n!="string"&&n!=null?n[o]:void 0,e);if(typeof a!="string")throw new Error(`Could not find include for ${i}.`);return $e(a,e)})}let sr;function zc(){if(sr!=null)return sr;const r=new Uint32Array([268435456]);return sr=new Uint8Array(r.buffer,r.byteOffset,r.byteLength)[0]===0,sr}function Gc(r,e,t,i=!0){if(i===zc())return new e(r);const a=Object.assign(new DataView(r),{getFloat16(o,s){return Nc(this,o,s)}}),n=new e(a.byteLength/e.BYTES_PER_ELEMENT);for(let o=0,s=0;o<n.length;++o,s+=e.BYTES_PER_ELEMENT)n[o]=a[t](s,i);return n}const Wc=r=>new Uint8Array(r),Pt=(r,e)=>Gc(r,De,"getFloat16",e);const kc=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*(?:i\s*\+\+|\+\+\s*i)\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bc(r,e,t,i){let a="";for(let n=parseInt(e,10);n<parseInt(t,10);++n)a+=i.replace(/\[\s*i\s*\]/g,`[${n}]`).replace(/UNROLLED_LOOP_INDEX/g,`${n}`);return a}function Qt(r){return r.replace(kc,Bc)}const Vc=`// Reference: https://github.com/mrdoob/three.js/blob/r171/examples/jsm/csm/CSMShader.js

#ifndef SHADOW_CASCADE_COUNT
#error "SHADOW_CASCADE_COUNT macro must be defined."
#endif // SHADOW_CASCADE_COUNT

int getCascadeIndex(
  const mat4 viewMatrix,
  const vec3 worldPosition,
  const vec2 intervals[SHADOW_CASCADE_COUNT],
  const float near,
  const float far
) {
  vec4 viewPosition = viewMatrix * vec4(worldPosition, 1.0);
  float depth = viewZToOrthographicDepth(viewPosition.z, near, far);
  vec2 interval;
  #pragma unroll_loop_start
  for (int i = 0; i < 4; ++i) {
    #if UNROLLED_LOOP_INDEX < SHADOW_CASCADE_COUNT
    interval = intervals[i];
    if (depth >= interval.x && depth < interval.y) {
      return UNROLLED_LOOP_INDEX;
    }
    #endif // UNROLLED_LOOP_INDEX < SHADOW_CASCADE_COUNT
  }
  #pragma unroll_loop_end
  return SHADOW_CASCADE_COUNT - 1;
}

int getFadedCascadeIndex(
  const mat4 viewMatrix,
  const vec3 worldPosition,
  const vec2 intervals[SHADOW_CASCADE_COUNT],
  const float near,
  const float far,
  const float jitter
) {
  vec4 viewPosition = viewMatrix * vec4(worldPosition, 1.0);
  float depth = viewZToOrthographicDepth(viewPosition.z, near, far);

  vec2 interval;
  float intervalCenter;
  float closestEdge;
  float margin;
  int nextIndex = -1;
  int prevIndex = -1;
  float alpha;

  #pragma unroll_loop_start
  for (int i = 0; i < 4; ++i) {
    #if UNROLLED_LOOP_INDEX < SHADOW_CASCADE_COUNT
    interval = intervals[i];
    intervalCenter = (interval.x + interval.y) * 0.5;
    closestEdge = depth < intervalCenter ? interval.x : interval.y;
    margin = closestEdge * closestEdge * 0.5;
    interval += margin * vec2(-0.5, 0.5);

    #if UNROLLED_LOOP_INDEX < SHADOW_CASCADE_COUNT - 1
    if (depth >= interval.x && depth < interval.y) {
      prevIndex = nextIndex;
      nextIndex = UNROLLED_LOOP_INDEX;
      alpha = saturate(min(depth - interval.x, interval.y - depth) / margin);
    }
    #else // UNROLLED_LOOP_INDEX < SHADOW_CASCADE_COUNT - 1
    // Don't fade out the last cascade.
    if (depth >= interval.x) {
      prevIndex = nextIndex;
      nextIndex = UNROLLED_LOOP_INDEX;
      alpha = saturate((depth - interval.x) / margin);
    }
    #endif // UNROLLED_LOOP_INDEX < SHADOW_CASCADE_COUNT - 1
    #endif // UNROLLED_LOOP_INDEX < SHADOW_CASCADE_COUNT
  }
  #pragma unroll_loop_end

  return jitter <= alpha
    ? nextIndex
    : prevIndex;
}
`,$c=`// cSpell:words logdepthbuf

#ifdef DEPTH_PACKING
float readDepthValue(const sampler2D depthBuffer, const vec2 uv) {
  #if DEPTH_PACKING == 3201
  return unpackRGBAToDepth(texture(depthBuffer, uv));
  #else // DEPTH_PACKING == 3201
  return texture(depthBuffer, uv).r;
  #endif // DEPTH_PACKING == 3201
}
#endif // DEPTH_PACKING

float reverseLogDepth(const float depth, const float near, const float far) {
  #if defined(USE_LOGDEPTHBUF) || defined(USE_LOGARITHMIC_DEPTH_BUFFER)
  float d = pow(2.0, depth * log2(far + 1.0)) - 1.0;
  float a = far / (far - near);
  float b = far * near / (near - far);
  return a + b / d;
  #else // defined(USE_LOGARITHMIC_DEPTH_BUFFER) || defined(USE_LOGARITHMIC_DEPTH_BUFFER)
  return depth;
  #endif // defined(USE_LOGARITHMIC_DEPTH_BUFFER) || defined(USE_LOGARITHMIC_DEPTH_BUFFER)
}

float linearizeDepth(const float depth, const float near, const float far) {
  float ndc = depth * 2.0 - 1.0;
  return 2.0 * near * far / (far + near - ndc * (far - near));
}
`,jc=`float checker(const vec2 uv, const vec2 repeats) {
  vec2 c = floor(repeats * uv);
  float result = mod(c.x + c.y, 2.0);
  return sign(result);
}

float checker(const vec2 uv, const float repeats) {
  return checker(uv, vec2(repeats));
}
`,Yc=`// Reference: https://advances.realtimerendering.com/s2014/index.html#_NEXT_GENERATION_POST

float interleavedGradientNoise(const vec2 coord) {
  const vec3 magic = vec3(0.06711056, 0.00583715, 52.9829189);
  return fract(magic.z * fract(dot(coord, magic.xy)));
}
`,qc=`#if !defined(saturate)
#define saturate(a) clamp(a, 0.0, 1.0)
#endif // !defined(saturate)

float remap(const float x, const float min1, const float max1, const float min2, const float max2) {
  return min2 + (x - min1) / (max1 - min1) * (max2 - min2);
}

vec2 remap(const vec2 x, const vec2 min1, const vec2 max1, const vec2 min2, const vec2 max2) {
  return min2 + (x - min1) / (max1 - min1) * (max2 - min2);
}

vec3 remap(const vec3 x, const vec3 min1, const vec3 max1, const vec3 min2, const vec3 max2) {
  return min2 + (x - min1) / (max1 - min1) * (max2 - min2);
}

vec4 remap(const vec4 x, const vec4 min1, const vec4 max1, const vec4 min2, const vec4 max2) {
  return min2 + (x - min1) / (max1 - min1) * (max2 - min2);
}

float remapClamped(
  const float x,
  const float min1,
  const float max1,
  const float min2,
  const float max2
) {
  return clamp(min2 + (x - min1) / (max1 - min1) * (max2 - min2), min2, max2);
}

vec2 remapClamped(
  const vec2 x,
  const vec2 min1,
  const vec2 max1,
  const vec2 min2,
  const vec2 max2
) {
  return clamp(min2 + (x - min1) / (max1 - min1) * (max2 - min2), min2, max2);
}

vec3 remapClamped(
  const vec3 x,
  const vec3 min1,
  const vec3 max1,
  const vec3 min2,
  const vec3 max2
) {
  return clamp(min2 + (x - min1) / (max1 - min1) * (max2 - min2), min2, max2);
}

vec4 remapClamped(
  const vec4 x,
  const vec4 min1,
  const vec4 max1,
  const vec4 min2,
  const vec4 max2
) {
  return clamp(min2 + (x - min1) / (max1 - min1) * (max2 - min2), min2, max2);
}

// Implicitly remap to 0 and 1
float remap(const float x, const float min1, const float max1) {
  return (x - min1) / (max1 - min1);
}

vec2 remap(const vec2 x, const vec2 min1, const vec2 max1) {
  return (x - min1) / (max1 - min1);
}

vec3 remap(const vec3 x, const vec3 min1, const vec3 max1) {
  return (x - min1) / (max1 - min1);
}

vec4 remap(const vec4 x, const vec4 min1, const vec4 max1) {
  return (x - min1) / (max1 - min1);
}

float remapClamped(const float x, const float min1, const float max1) {
  return saturate((x - min1) / (max1 - min1));
}

vec2 remapClamped(const vec2 x, const vec2 min1, const vec2 max1) {
  return saturate((x - min1) / (max1 - min1));
}

vec3 remapClamped(const vec3 x, const vec3 min1, const vec3 max1) {
  return saturate((x - min1) / (max1 - min1));
}

vec4 remapClamped(const vec4 x, const vec4 min1, const vec4 max1) {
  return saturate((x - min1) / (max1 - min1));
}
`,Xc=`// Reference: https://jcgt.org/published/0003/02/01/paper.pdf

vec2 signNotZero(vec2 v) {
  return vec2(v.x >= 0.0 ? 1.0 : -1.0, v.y >= 0.0 ? 1.0 : -1.0);
}

vec2 packNormalToVec2(vec3 v) {
  vec2 p = v.xy * (1.0 / (abs(v.x) + abs(v.y) + abs(v.z)));
  return v.z <= 0.0
    ? (1.0 - abs(p.yx)) * signNotZero(p)
    : p;
}

vec3 unpackVec2ToNormal(vec2 e) {
  vec3 v = vec3(e.xy, 1.0 - abs(e.x) - abs(e.y));
  if (v.z < 0.0) {
    v.xy = (1.0 - abs(v.yx)) * signNotZero(v.xy);
  }
  return normalize(v);
}
`,Kc=`float raySphereFirstIntersection(
  const vec3 origin,
  const vec3 direction,
  const vec3 center,
  const float radius
) {
  vec3 a = origin - center;
  float b = 2.0 * dot(direction, a);
  float c = dot(a, a) - radius * radius;
  float discriminant = b * b - 4.0 * c;
  return discriminant < 0.0
    ? -1.0
    : (-b - sqrt(discriminant)) * 0.5;
}

float raySphereFirstIntersection(const vec3 origin, const vec3 direction, const float radius) {
  return raySphereFirstIntersection(origin, direction, vec3(0.0), radius);
}

vec4 raySphereFirstIntersection(
  const vec3 origin,
  const vec3 direction,
  const vec3 center,
  const vec4 radius
) {
  vec3 a = origin - center;
  float b = 2.0 * dot(direction, a);
  vec4 c = dot(a, a) - radius * radius;
  vec4 discriminant = b * b - 4.0 * c;
  vec4 mask = step(discriminant, vec4(0.0));
  return mix((-b - sqrt(max(vec4(0.0), discriminant))) * 0.5, vec4(-1.0), mask);
}

vec4 raySphereFirstIntersection(const vec3 origin, const vec3 direction, const vec4 radius) {
  return raySphereFirstIntersection(origin, direction, vec3(0.0), radius);
}

float raySphereSecondIntersection(
  const vec3 origin,
  const vec3 direction,
  const vec3 center,
  const float radius
) {
  vec3 a = origin - center;
  float b = 2.0 * dot(direction, a);
  float c = dot(a, a) - radius * radius;
  float discriminant = b * b - 4.0 * c;
  return discriminant < 0.0
    ? -1.0
    : (-b + sqrt(discriminant)) * 0.5;
}

float raySphereSecondIntersection(const vec3 origin, const vec3 direction, const float radius) {
  return raySphereSecondIntersection(origin, direction, vec3(0.0), radius);
}

vec4 raySphereSecondIntersection(
  const vec3 origin,
  const vec3 direction,
  const vec3 center,
  const vec4 radius
) {
  vec3 a = origin - center;
  float b = 2.0 * dot(direction, a);
  vec4 c = dot(a, a) - radius * radius;
  vec4 discriminant = b * b - 4.0 * c;
  vec4 mask = step(discriminant, vec4(0.0));
  return mix((-b + sqrt(max(vec4(0.0), discriminant))) * 0.5, vec4(-1.0), mask);
}

vec4 raySphereSecondIntersection(const vec3 origin, const vec3 direction, const vec4 radius) {
  return raySphereSecondIntersection(origin, direction, vec3(0.0), radius);
}

void raySphereIntersections(
  const vec3 origin,
  const vec3 direction,
  const vec3 center,
  const float radius,
  out float intersection1,
  out float intersection2
) {
  vec3 a = origin - center;
  float b = 2.0 * dot(direction, a);
  float c = dot(a, a) - radius * radius;
  float discriminant = b * b - 4.0 * c;
  if (discriminant < 0.0) {
    intersection1 = -1.0;
    intersection2 = -1.0;
    return;
  } else {
    float Q = sqrt(discriminant);
    intersection1 = (-b - Q) * 0.5;
    intersection2 = (-b + Q) * 0.5;
  }
}

void raySphereIntersections(
  const vec3 origin,
  const vec3 direction,
  const float radius,
  out float intersection1,
  out float intersection2
) {
  raySphereIntersections(origin, direction, vec3(0.0), radius, intersection1, intersection2);
}

void raySphereIntersections(
  const vec3 origin,
  const vec3 direction,
  const vec3 center,
  const vec4 radius,
  out vec4 intersection1,
  out vec4 intersection2
) {
  vec3 a = origin - center;
  float b = 2.0 * dot(direction, a);
  vec4 c = dot(a, a) - radius * radius;
  vec4 discriminant = b * b - 4.0 * c;
  vec4 mask = step(discriminant, vec4(0.0));
  vec4 Q = sqrt(max(vec4(0.0), discriminant));
  intersection1 = mix((-b - Q) * 0.5, vec4(-1.0), mask);
  intersection2 = mix((-b + Q) * 0.5, vec4(-1.0), mask);
}

void raySphereIntersections(
  const vec3 origin,
  const vec3 direction,
  const vec4 radius,
  out vec4 intersection1,
  out vec4 intersection2
) {
  raySphereIntersections(origin, direction, vec3(0.0), radius, intersection1, intersection2);
}
`,Zc=`vec3 screenToView(
  const vec2 uv,
  const float depth,
  const float viewZ,
  const mat4 projectionMatrix,
  const mat4 inverseProjectionMatrix
) {
  vec4 clip = vec4(vec3(uv, depth) * 2.0 - 1.0, 1.0);
  float clipW = projectionMatrix[2][3] * viewZ + projectionMatrix[3][3];
  clip *= clipW;
  return (inverseProjectionMatrix * clip).xyz;
}
`,Jc=`// A fifth-order polynomial approximation of Turbo color map.
// See: https://observablehq.com/@mbostock/turbo
// prettier-ignore
vec3 turbo(const float x) {
  float r = 0.1357 + x * (4.5974 - x * (42.3277 - x * (130.5887 - x * (150.5666 - x * 58.1375))));
  float g = 0.0914 + x * (2.1856 + x * (4.8052 - x * (14.0195 - x * (4.2109 + x * 2.7747))));
  float b = 0.1067 + x * (12.5925 - x * (60.1097 - x * (109.0745 - x * (88.5066 - x * 26.8183))));
  return vec3(r, g, b);
}
`,Qc=`// Reference: https://www.gamedev.net/tutorials/programming/graphics/contact-hardening-soft-shadows-made-fast-r4906/

vec2 vogelDisk(const int index, const int sampleCount, const float phi) {
  const float goldenAngle = 2.39996322972865332;
  float r = sqrt(float(index) + 0.5) / sqrt(float(sampleCount));
  float theta = float(index) * goldenAngle + phi;
  return r * vec2(cos(theta), sin(theta));
}
`,no=Vc,oo=$c,el=jc,so=Yc,qi=qc,tl=Xc,Pr=Kc,rl=Zc,co=Jc,lo=Qc,{Matrix3:B0,Vector3:il}=await J("three"),Xi=64,Ki=16,Zi=32,Ji=128,Qi=32,ea=8,al=ea*Qi,nl=Ji,ol=Zi,Ur=256,Hr=64,Er=1/1e3,sl=new il;function ta(r,e,t,i){const a=t.projectOnSurface(r,sl);return a!=null?t.getOsculatingSphereCenter(a,e,i).negate():i.setScalar(0)}const Fr=`// Based on: https://github.com/ebruneton/precomputed_atmospheric_scattering/blob/master/atmosphere/functions.glsl

/**
 * Copyright (c) 2017 Eric Bruneton
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 * 1. Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright
 *    notice, this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 * 3. Neither the name of the copyright holders nor the names of its
 *    contributors may be used to endorse or promote products derived from
 *    this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF
 * THE POSSIBILITY OF SUCH DAMAGE.
 *
 * Precomputed Atmospheric Scattering
 * Copyright (c) 2008 INRIA
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 * 1. Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright
 *    notice, this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 * 3. Neither the name of the copyright holders nor the names of its
 *    contributors may be used to endorse or promote products derived from
 *    this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF
 * THE POSSIBILITY OF SUCH DAMAGE.
 */

Number ClampCosine(const Number mu) {
  return clamp(mu, Number(-1.0), Number(1.0));
}

Length ClampDistance(const Length d) {
  return max(d, 0.0 * m);
}

Length ClampRadius(const AtmosphereParameters atmosphere, const Length r) {
  return clamp(r, atmosphere.bottom_radius, atmosphere.top_radius);
}

Length SafeSqrt(const Area a) {
  return sqrt(max(a, 0.0 * m2));
}

Length DistanceToTopAtmosphereBoundary(const AtmosphereParameters atmosphere,
    const Length r, const Number mu) {
  assert(r <= atmosphere.top_radius);
  assert(mu >= -1.0 && mu <= 1.0);
  Area discriminant = r * r * (mu * mu - 1.0) +
      atmosphere.top_radius * atmosphere.top_radius;
  return ClampDistance(-r * mu + SafeSqrt(discriminant));
}

Length DistanceToBottomAtmosphereBoundary(const AtmosphereParameters atmosphere,
    const Length r, const Number mu) {
  assert(r >= atmosphere.bottom_radius);
  assert(mu >= -1.0 && mu <= 1.0);
  Area discriminant = r * r * (mu * mu - 1.0) +
      atmosphere.bottom_radius * atmosphere.bottom_radius;
  return ClampDistance(-r * mu - SafeSqrt(discriminant));
}

bool RayIntersectsGround(const AtmosphereParameters atmosphere,
    const Length r, const Number mu) {
  assert(r >= atmosphere.bottom_radius);
  assert(mu >= -1.0 && mu <= 1.0);
  return mu < 0.0 && r * r * (mu * mu - 1.0) +
      atmosphere.bottom_radius * atmosphere.bottom_radius >= 0.0 * m2;
}

Number GetTextureCoordFromUnitRange(const Number x, const int texture_size) {
  return 0.5 / Number(texture_size) + x * (1.0 - 1.0 / Number(texture_size));
}

vec2 GetTransmittanceTextureUvFromRMu(const AtmosphereParameters atmosphere,
    const Length r, const Number mu) {
  assert(r >= atmosphere.bottom_radius && r <= atmosphere.top_radius);
  assert(mu >= -1.0 && mu <= 1.0);
  // Distance to top atmosphere boundary for a horizontal ray at ground level.
  Length H = sqrt(atmosphere.top_radius * atmosphere.top_radius -
      atmosphere.bottom_radius * atmosphere.bottom_radius);
  // Distance to the horizon.
  Length rho =
      SafeSqrt(r * r - atmosphere.bottom_radius * atmosphere.bottom_radius);
  // Distance to the top atmosphere boundary for the ray (r,mu), and its minimum
  // and maximum values over all mu - obtained for (r,1) and (r,mu_horizon).
  Length d = DistanceToTopAtmosphereBoundary(atmosphere, r, mu);
  Length d_min = atmosphere.top_radius - r;
  Length d_max = rho + H;
  Number x_mu = (d - d_min) / (d_max - d_min);
  Number x_r = rho / H;
  return vec2(GetTextureCoordFromUnitRange(x_mu, TRANSMITTANCE_TEXTURE_WIDTH),
              GetTextureCoordFromUnitRange(x_r, TRANSMITTANCE_TEXTURE_HEIGHT));
}

DimensionlessSpectrum GetTransmittanceToTopAtmosphereBoundary(
    const AtmosphereParameters atmosphere,
    const TransmittanceTexture transmittance_texture,
    const Length r, const Number mu) {
  assert(r >= atmosphere.bottom_radius && r <= atmosphere.top_radius);
  vec2 uv = GetTransmittanceTextureUvFromRMu(atmosphere, r, mu);
  // @shotamatsuda: Added for the precomputation stage in half-float precision.
  #ifdef TRANSMITTANCE_PRECISION_LOG
  // Manually interpolate the transmittance instead of the optical depth.
  const vec2 size = vec2(TRANSMITTANCE_TEXTURE_WIDTH, TRANSMITTANCE_TEXTURE_HEIGHT);
  const vec3 texel_size = vec3(1.0 / size, 0.0);
  vec2 coord = (uv * size) - 0.5;
  vec2 i = (floor(coord) + 0.5) * texel_size.xy;
  vec2 f = fract(coord);
  vec4 t1 = exp(-texture(transmittance_texture, i));
  vec4 t2 = exp(-texture(transmittance_texture, i + texel_size.xz));
  vec4 t3 = exp(-texture(transmittance_texture, i + texel_size.zy));
  vec4 t4 = exp(-texture(transmittance_texture, i + texel_size.xy));
  return DimensionlessSpectrum(mix(mix(t1, t2, f.x), mix(t3, t4, f.x), f.y));
  #else // TRANSMITTANCE_PRECISION_LOG
  return DimensionlessSpectrum(texture(transmittance_texture, uv));
  #endif // TRANSMITTANCE_PRECISION_LOG
}

DimensionlessSpectrum GetTransmittance(
    const AtmosphereParameters atmosphere,
    const TransmittanceTexture transmittance_texture,
    const Length r, const Number mu, const Length d,
    const bool ray_r_mu_intersects_ground) {
  assert(r >= atmosphere.bottom_radius && r <= atmosphere.top_radius);
  assert(mu >= -1.0 && mu <= 1.0);
  assert(d >= 0.0 * m);

  Length r_d = ClampRadius(atmosphere, sqrt(d * d + 2.0 * r * mu * d + r * r));
  Number mu_d = ClampCosine((r * mu + d) / r_d);

  if (ray_r_mu_intersects_ground) {
    return min(
        GetTransmittanceToTopAtmosphereBoundary(
            atmosphere, transmittance_texture, r_d, -mu_d) /
        GetTransmittanceToTopAtmosphereBoundary(
            atmosphere, transmittance_texture, r, -mu),
        DimensionlessSpectrum(1.0));
  } else {
    return min(
        GetTransmittanceToTopAtmosphereBoundary(
            atmosphere, transmittance_texture, r, mu) /
        GetTransmittanceToTopAtmosphereBoundary(
            atmosphere, transmittance_texture, r_d, mu_d),
        DimensionlessSpectrum(1.0));
  }
}

DimensionlessSpectrum GetTransmittanceToSun(
    const AtmosphereParameters atmosphere,
    const TransmittanceTexture transmittance_texture,
    const Length r, const Number mu_s) {
  Number sin_theta_h = atmosphere.bottom_radius / r;
  Number cos_theta_h = -sqrt(max(1.0 - sin_theta_h * sin_theta_h, 0.0));
  return GetTransmittanceToTopAtmosphereBoundary(
          atmosphere, transmittance_texture, r, mu_s) *
      smoothstep(-sin_theta_h * atmosphere.sun_angular_radius / rad,
                 sin_theta_h * atmosphere.sun_angular_radius / rad,
                 mu_s - cos_theta_h);
}

InverseSolidAngle RayleighPhaseFunction(const Number nu) {
  InverseSolidAngle k = 3.0 / (16.0 * PI * sr);
  return k * (1.0 + nu * nu);
}

InverseSolidAngle MiePhaseFunction(const Number g, const Number nu) {
  InverseSolidAngle k = 3.0 / (8.0 * PI * sr) * (1.0 - g * g) / (2.0 + g * g);
  return k * (1.0 + nu * nu) / pow(1.0 + g * g - 2.0 * g * nu, 1.5);
}

vec4 GetScatteringTextureUvwzFromRMuMuSNu(const AtmosphereParameters atmosphere,
    const Length r, const Number mu, const Number mu_s, const Number nu,
    const bool ray_r_mu_intersects_ground) {
  assert(r >= atmosphere.bottom_radius && r <= atmosphere.top_radius);
  assert(mu >= -1.0 && mu <= 1.0);
  assert(mu_s >= -1.0 && mu_s <= 1.0);
  assert(nu >= -1.0 && nu <= 1.0);

  // Distance to top atmosphere boundary for a horizontal ray at ground level.
  Length H = sqrt(atmosphere.top_radius * atmosphere.top_radius -
      atmosphere.bottom_radius * atmosphere.bottom_radius);
  // Distance to the horizon.
  Length rho =
      SafeSqrt(r * r - atmosphere.bottom_radius * atmosphere.bottom_radius);
  Number u_r = GetTextureCoordFromUnitRange(rho / H, SCATTERING_TEXTURE_R_SIZE);

  // Discriminant of the quadratic equation for the intersections of the ray
  // (r,mu) with the ground (see RayIntersectsGround).
  Length r_mu = r * mu;
  Area discriminant =
      r_mu * r_mu - r * r + atmosphere.bottom_radius * atmosphere.bottom_radius;
  Number u_mu;
  if (ray_r_mu_intersects_ground) {
    // Distance to the ground for the ray (r,mu), and its minimum and maximum
    // values over all mu - obtained for (r,-1) and (r,mu_horizon).
    Length d = -r_mu - SafeSqrt(discriminant);
    Length d_min = r - atmosphere.bottom_radius;
    Length d_max = rho;
    u_mu = 0.5 - 0.5 * GetTextureCoordFromUnitRange(d_max == d_min ? 0.0 :
        (d - d_min) / (d_max - d_min), SCATTERING_TEXTURE_MU_SIZE / 2);
  } else {
    // Distance to the top atmosphere boundary for the ray (r,mu), and its
    // minimum and maximum values over all mu - obtained for (r,1) and
    // (r,mu_horizon).
    Length d = -r_mu + SafeSqrt(discriminant + H * H);
    Length d_min = atmosphere.top_radius - r;
    Length d_max = rho + H;
    u_mu = 0.5 + 0.5 * GetTextureCoordFromUnitRange(
        (d - d_min) / (d_max - d_min), SCATTERING_TEXTURE_MU_SIZE / 2);
  }

  Length d = DistanceToTopAtmosphereBoundary(
      atmosphere, atmosphere.bottom_radius, mu_s);
  Length d_min = atmosphere.top_radius - atmosphere.bottom_radius;
  Length d_max = H;
  Number a = (d - d_min) / (d_max - d_min);
  Length D = DistanceToTopAtmosphereBoundary(
      atmosphere, atmosphere.bottom_radius, atmosphere.mu_s_min);
  Number A = (D - d_min) / (d_max - d_min);
  // An ad-hoc function equal to 0 for mu_s = mu_s_min (because then d = D and
  // thus a = A), equal to 1 for mu_s = 1 (because then d = d_min and thus
  // a = 0), and with a large slope around mu_s = 0, to get more texture
  // samples near the horizon.
  Number u_mu_s = GetTextureCoordFromUnitRange(
      max(1.0 - a / A, 0.0) / (1.0 + a), SCATTERING_TEXTURE_MU_S_SIZE);

  Number u_nu = (nu + 1.0) / 2.0;
  return vec4(u_nu, u_mu_s, u_mu, u_r);
}

vec2 GetIrradianceTextureUvFromRMuS(const AtmosphereParameters atmosphere,
    const Length r, const Number mu_s) {
  assert(r >= atmosphere.bottom_radius && r <= atmosphere.top_radius);
  assert(mu_s >= -1.0 && mu_s <= 1.0);
  Number x_r = (r - atmosphere.bottom_radius) /
      (atmosphere.top_radius - atmosphere.bottom_radius);
  Number x_mu_s = mu_s * 0.5 + 0.5;
  return vec2(GetTextureCoordFromUnitRange(x_mu_s, IRRADIANCE_TEXTURE_WIDTH),
              GetTextureCoordFromUnitRange(x_r, IRRADIANCE_TEXTURE_HEIGHT));
}

IrradianceSpectrum GetIrradiance(
    const AtmosphereParameters atmosphere,
    const IrradianceTexture irradiance_texture,
    const Length r, const Number mu_s) {
  vec2 uv = GetIrradianceTextureUvFromRMuS(atmosphere, r, mu_s);
  return IrradianceSpectrum(texture(irradiance_texture, uv));
}
`,zr=`// Based on: https://github.com/ebruneton/precomputed_atmospheric_scattering/blob/master/atmosphere/definitions.glsl

/**
 * Copyright (c) 2017 Eric Bruneton
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 * 1. Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright
 *    notice, this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 * 3. Neither the name of the copyright holders nor the names of its
 *    contributors may be used to endorse or promote products derived from
 *    this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF
 * THE POSSIBILITY OF SUCH DAMAGE.
 */

#define assert(x)

#define Length float
#define Wavelength float
#define Angle float
#define SolidAngle float
#define Power float
#define LuminousPower float

#define Number float
#define InverseLength float
#define Area float
#define Volume float
#define NumberDensity float
#define Irradiance float
#define Radiance float
#define SpectralPower float
#define SpectralIrradiance float
#define SpectralRadiance float
#define SpectralRadianceDensity float
#define ScatteringCoefficient float
#define InverseSolidAngle float
#define LuminousIntensity float
#define Luminance float
#define Illuminance float

// A generic function from Wavelength to some other type.
#define AbstractSpectrum vec3
// A function from Wavelength to Number.
#define DimensionlessSpectrum vec3
// A function from Wavelength to SpectralPower.
#define PowerSpectrum vec3
// A function from Wavelength to SpectralIrradiance.
#define IrradianceSpectrum vec3
// A function from Wavelength to SpectralRadiance.
#define RadianceSpectrum vec3
// A function from Wavelength to SpectralRadianceDensity.
#define RadianceDensitySpectrum vec3
// A function from Wavelength to ScatteringCoefficient.
#define ScatteringSpectrum vec3

// A position in 3D (3 length values).
#define Position vec3
// A unit direction vector in 3D (3 unit-less values).
#define Direction vec3
// A vector of 3 luminance values.
#define Luminance3 vec3
// A vector of 3 illuminance values.
#define Illuminance3 vec3

#define TransmittanceTexture sampler2D
#define AbstractScatteringTexture sampler3D
#define ReducedScatteringTexture sampler3D
#define ScatteringTexture sampler3D
#define ScatteringDensityTexture sampler3D
#define IrradianceTexture sampler2D

const Length m = 1.0;
const Wavelength nm = 1.0;
const Angle rad = 1.0;
const SolidAngle sr = 1.0;
const Power watt = 1.0;
const LuminousPower lm = 1.0;

#if !defined(PI)
const float PI = 3.14159265358979323846;
#endif // !defined(PI)

const Length km = 1000.0 * m;
const Area m2 = m * m;
const Volume m3 = m * m * m;
const Angle pi = PI * rad;
const Angle deg = pi / 180.0;
const Irradiance watt_per_square_meter = watt / m2;
const Radiance watt_per_square_meter_per_sr = watt / (m2 * sr);
const SpectralIrradiance watt_per_square_meter_per_nm = watt / (m2 * nm);
const SpectralRadiance watt_per_square_meter_per_sr_per_nm = watt / (m2 * sr * nm);
const SpectralRadianceDensity watt_per_cubic_meter_per_sr_per_nm = watt / (m3 * sr * nm);
const LuminousIntensity cd = lm / sr;
const LuminousIntensity kcd = 1000.0 * cd;
const Luminance cd_per_square_meter = cd / m2;
const Luminance kcd_per_square_meter = kcd / m2;

struct DensityProfileLayer {
  Length width;
  Number exp_term;
  InverseLength exp_scale;
  InverseLength linear_term;
  Number constant_term;
};

struct DensityProfile {
  DensityProfileLayer layers[2];
};

// See AtmosphereParameter.ts for further details.
struct AtmosphereParameters {
  IrradianceSpectrum solar_irradiance;
  Angle sun_angular_radius;
  Length bottom_radius;
  Length top_radius;
  DensityProfile rayleigh_density;
  ScatteringSpectrum rayleigh_scattering;
  DensityProfile mie_density;
  ScatteringSpectrum mie_scattering;
  ScatteringSpectrum mie_extinction;
  Number mie_phase_function_g;
  DensityProfile absorption_density;
  ScatteringSpectrum absorption_extinction;
  DimensionlessSpectrum ground_albedo;
  Number mu_s_min;
};
`,Gr=`// Based on: https://github.com/ebruneton/precomputed_atmospheric_scattering/blob/master/atmosphere/functions.glsl

/**
 * Copyright (c) 2017 Eric Bruneton
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 * 1. Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright
 *    notice, this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 * 3. Neither the name of the copyright holders nor the names of its
 *    contributors may be used to endorse or promote products derived from
 *    this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF
 * THE POSSIBILITY OF SUCH DAMAGE.
 *
 * Precomputed Atmospheric Scattering
 * Copyright (c) 2008 INRIA
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 * 1. Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright
 *    notice, this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 * 3. Neither the name of the copyright holders nor the names of its
 *    contributors may be used to endorse or promote products derived from
 *    this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF
 * THE POSSIBILITY OF SUCH DAMAGE.
 */

#ifdef COMBINED_SCATTERING_TEXTURES
vec3 GetExtrapolatedSingleMieScattering(
    const AtmosphereParameters atmosphere, const vec4 scattering) {
  // Algebraically this can never be negative, but rounding errors can produce
  // that effect for sufficiently short view rays.
  // @shotamatsuda: Avoid division by infinitesimal values.
  // See https://github.com/takram-design-engineering/three-geospatial/issues/47
  if (scattering.r < 1e-5) {
    return vec3(0.0);
  }
  return scattering.rgb * scattering.a / scattering.r *
	    (atmosphere.rayleigh_scattering.r / atmosphere.mie_scattering.r) *
	    (atmosphere.mie_scattering / atmosphere.rayleigh_scattering);
}
#endif // COMBINED_SCATTERING_TEXTURES

IrradianceSpectrum GetCombinedScattering(
    const AtmosphereParameters atmosphere,
    const ReducedScatteringTexture scattering_texture,
    const ReducedScatteringTexture single_mie_scattering_texture,
    const Length r, const Number mu, const Number mu_s, const Number nu,
    const bool ray_r_mu_intersects_ground,
    out IrradianceSpectrum single_mie_scattering) {
  vec4 uvwz = GetScatteringTextureUvwzFromRMuMuSNu(
      atmosphere, r, mu, mu_s, nu, ray_r_mu_intersects_ground);
  Number tex_coord_x = uvwz.x * Number(SCATTERING_TEXTURE_NU_SIZE - 1);
  Number tex_x = floor(tex_coord_x);
  Number lerp = tex_coord_x - tex_x;
  vec3 uvw0 = vec3((tex_x + uvwz.y) / Number(SCATTERING_TEXTURE_NU_SIZE),
      uvwz.z, uvwz.w);
  vec3 uvw1 = vec3((tex_x + 1.0 + uvwz.y) / Number(SCATTERING_TEXTURE_NU_SIZE),
      uvwz.z, uvwz.w);
#ifdef COMBINED_SCATTERING_TEXTURES
  vec4 combined_scattering =
      texture(scattering_texture, uvw0) * (1.0 - lerp) +
      texture(scattering_texture, uvw1) * lerp;
  IrradianceSpectrum scattering = IrradianceSpectrum(combined_scattering);
  single_mie_scattering =
      GetExtrapolatedSingleMieScattering(atmosphere, combined_scattering);
#else // COMBINED_SCATTERING_TEXTURES
  IrradianceSpectrum scattering = IrradianceSpectrum(
      texture(scattering_texture, uvw0) * (1.0 - lerp) +
      texture(scattering_texture, uvw1) * lerp);
  single_mie_scattering = IrradianceSpectrum(
      texture(single_mie_scattering_texture, uvw0) * (1.0 - lerp) +
      texture(single_mie_scattering_texture, uvw1) * lerp);
#endif // COMBINED_SCATTERING_TEXTURES
  return scattering;
}

// @shotamatsuda: Added for reading higher-order scattering texture.
#ifdef HAS_HIGHER_ORDER_SCATTERING_TEXTURE
IrradianceSpectrum GetScattering(
    const AtmosphereParameters atmosphere,
    const ReducedScatteringTexture scattering_texture,
    const Length r, const Number mu, const Number mu_s, const Number nu,
    const bool ray_r_mu_intersects_ground) {
  vec4 uvwz = GetScatteringTextureUvwzFromRMuMuSNu(
      atmosphere, r, mu, mu_s, nu, ray_r_mu_intersects_ground);
  Number tex_coord_x = uvwz.x * Number(SCATTERING_TEXTURE_NU_SIZE - 1);
  Number tex_x = floor(tex_coord_x);
  Number lerp = tex_coord_x - tex_x;
  vec3 uvw0 = vec3((tex_x + uvwz.y) / Number(SCATTERING_TEXTURE_NU_SIZE),
      uvwz.z, uvwz.w);
  vec3 uvw1 = vec3((tex_x + 1.0 + uvwz.y) / Number(SCATTERING_TEXTURE_NU_SIZE),
      uvwz.z, uvwz.w);
  IrradianceSpectrum scattering = IrradianceSpectrum(
      texture(scattering_texture, uvw0) * (1.0 - lerp) +
      texture(scattering_texture, uvw1) * lerp);
  return scattering;
}
#endif // HAS_HIGHER_ORDER_SCATTERING_TEXTURE

RadianceSpectrum GetSkyRadiance(
    const AtmosphereParameters atmosphere,
    const TransmittanceTexture transmittance_texture,
    const ReducedScatteringTexture scattering_texture,
    const ReducedScatteringTexture single_mie_scattering_texture,
    Position camera, const Direction view_ray, const Length shadow_length,
    const Direction sun_direction,
    out DimensionlessSpectrum transmittance) {
  // Compute the distance to the top atmosphere boundary along the view ray,
  // assuming the viewer is in space (or NaN if the view ray does not intersect
  // the atmosphere).
  Length r = length(camera);
  Length rmu = dot(camera, view_ray);
  // @shotamatsuda: Use SafeSqrt instead.
  // See: https://github.com/takram-design-engineering/three-geospatial/pull/26
  Length distance_to_top_atmosphere_boundary = -rmu -
      SafeSqrt(rmu * rmu - r * r +
          atmosphere.top_radius * atmosphere.top_radius);
  // If the viewer is in space and the view ray intersects the atmosphere, move
  // the viewer to the top atmosphere boundary (along the view ray):
  if (distance_to_top_atmosphere_boundary > 0.0 * m) {
    camera = camera + view_ray * distance_to_top_atmosphere_boundary;
    r = atmosphere.top_radius;
    rmu += distance_to_top_atmosphere_boundary;
  } else if (r > atmosphere.top_radius) {
    // If the view ray does not intersect the atmosphere, simply return 0.
    transmittance = DimensionlessSpectrum(1.0);
    return RadianceSpectrum(0.0 * watt_per_square_meter_per_sr_per_nm);
  }
  // Compute the r, mu, mu_s and nu parameters needed for the texture lookups.
  Number mu = rmu / r;
  Number mu_s = dot(camera, sun_direction) / r;
  Number nu = dot(view_ray, sun_direction);

  // @shotamatsuda: For rendering points below the bottom atmosphere.
  #ifdef GROUND
  bool ray_r_mu_intersects_ground = RayIntersectsGround(atmosphere, r, mu);
  #else // GROUND
  bool ray_r_mu_intersects_ground = false;
  #endif // GROUND

  transmittance = ray_r_mu_intersects_ground ? DimensionlessSpectrum(0.0) :
      GetTransmittanceToTopAtmosphereBoundary(
          atmosphere, transmittance_texture, r, mu);
  IrradianceSpectrum single_mie_scattering;
  IrradianceSpectrum scattering;
  if (shadow_length == 0.0 * m) {
    scattering = GetCombinedScattering(
        atmosphere, scattering_texture, single_mie_scattering_texture,
        r, mu, mu_s, nu, ray_r_mu_intersects_ground,
        single_mie_scattering);
  } else {
    // Case of light shafts (shadow_length is the total length noted l in our
    // paper): we omit the scattering between the camera and the point at
    // distance l, by implementing Eq. (18) of the paper (shadow_transmittance
    // is the T(x,x_s) term, scattering is the S|x_s=x+lv term).
    Length d = shadow_length;
    Length r_p =
        ClampRadius(atmosphere, sqrt(d * d + 2.0 * r * mu * d + r * r));
    Number mu_p = (r * mu + d) / r_p;
    Number mu_s_p = (r * mu_s + d * nu) / r_p;

    scattering = GetCombinedScattering(
        atmosphere, scattering_texture, single_mie_scattering_texture,
        r_p, mu_p, mu_s_p, nu, ray_r_mu_intersects_ground,
        single_mie_scattering);
    DimensionlessSpectrum shadow_transmittance =
        GetTransmittance(atmosphere, transmittance_texture,
            r, mu, shadow_length, ray_r_mu_intersects_ground);
    // @shotamatsuda: Occlude only single Rayleigh scattering by the shadow.
#ifdef HAS_HIGHER_ORDER_SCATTERING_TEXTURE
    IrradianceSpectrum higher_order_scattering = GetScattering(
        atmosphere, higher_order_scattering_texture,
        r_p, mu_p, mu_s_p, nu, ray_r_mu_intersects_ground);
    IrradianceSpectrum single_scattering = scattering - higher_order_scattering;
    scattering = single_scattering * shadow_transmittance + higher_order_scattering;
#else // HAS_HIGHER_ORDER_SCATTERING_TEXTURE
    scattering = scattering * shadow_transmittance;
#endif // HAS_HIGHER_ORDER_SCATTERING_TEXTURE
    single_mie_scattering = single_mie_scattering * shadow_transmittance;
  }
  return scattering * RayleighPhaseFunction(nu) + single_mie_scattering *
      MiePhaseFunction(atmosphere.mie_phase_function_g, nu);
}

// @shotamatsuda: Returns the point on the ray closest to the origin.
vec3 ClosestPointOnRay(const Position camera, const Position point) {
  Position ray = point - camera;
  Number t = clamp(-dot(camera, ray) / dot(ray, ray), 0.0, 1.0);
  return camera + t * ray;
}

vec2 RaySphereIntersections(
    const Position camera, const Direction direction, const Length radius) {
  float b = 2.0 * dot(direction, camera);
  float c = dot(camera, camera) - radius * radius;
  float discriminant = b * b - 4.0 * c;
  float Q = sqrt(discriminant);
  return vec2(-b - Q, -b + Q) * 0.5;
}

// @shotamatsuda: Clip the view ray at the bottom atmosphere boundary.
bool ClipAtBottomAtmosphere(
    const AtmosphereParameters atmosphere,
    const Direction view_ray, inout Position camera, inout Position point) {
  const Length eps = 0.0;
  Length bottom_radius = atmosphere.bottom_radius + eps;
  Length r_camera = length(camera);
  Length r_point = length(point);
  bool camera_below = r_camera < bottom_radius;
  bool point_below = r_point < bottom_radius;

  vec2 t = RaySphereIntersections(camera, view_ray, bottom_radius);
  Position intersection = camera + view_ray * (camera_below ? t.y : t.x);
  camera = camera_below ? intersection : camera;
  point = point_below ? intersection : point;

  return camera_below && point_below;
}

RadianceSpectrum GetSkyRadianceToPoint(
    const AtmosphereParameters atmosphere,
    const TransmittanceTexture transmittance_texture,
    const ReducedScatteringTexture scattering_texture,
    const ReducedScatteringTexture single_mie_scattering_texture,
    Position camera, Position point, const Length shadow_length,
    const Direction sun_direction, out DimensionlessSpectrum transmittance) {
  // @shotamatsuda: Avoid artifacts when the ray does not intersect the top
  // atmosphere boundary.
  if (length(ClosestPointOnRay(camera, point)) > atmosphere.top_radius) {
    transmittance = vec3(1.0);
    return vec3(0.0);
  }

  Direction view_ray = normalize(point - camera);
  if (ClipAtBottomAtmosphere(atmosphere, view_ray, camera, point)) {
    transmittance = vec3(1.0);
    return vec3(0.0);
  }

  // Compute the distance to the top atmosphere boundary along the view ray,
  // assuming the viewer is in space (or NaN if the view ray does not intersect
  // the atmosphere).
  Length r = length(camera);
  Length rmu = dot(camera, view_ray);
  // @shotamatsuda: Use SafeSqrt instead.
  // See: https://github.com/takram-design-engineering/three-geospatial/pull/26
  Length distance_to_top_atmosphere_boundary = -rmu -
      SafeSqrt(rmu * rmu - r * r +
          atmosphere.top_radius * atmosphere.top_radius);
  // If the viewer is in space and the view ray intersects the atmosphere, move
  // the viewer to the top atmosphere boundary (along the view ray):
  if (distance_to_top_atmosphere_boundary > 0.0 * m) {
    camera = camera + view_ray * distance_to_top_atmosphere_boundary;
    r = atmosphere.top_radius;
    rmu += distance_to_top_atmosphere_boundary;
  }

  // Compute the r, mu, mu_s and nu parameters for the first texture lookup.
  Number mu = rmu / r;
  Number mu_s = dot(camera, sun_direction) / r;
  Number nu = dot(view_ray, sun_direction);
  Length d = length(point - camera);
  bool ray_r_mu_intersects_ground = RayIntersectsGround(atmosphere, r, mu);

  // @shotamatsuda: Hack to avoid rendering artifacts near the horizon, due to
  // finite atmosphere texture resolution and finite floating point precision.
  // See: https://github.com/ebruneton/precomputed_atmospheric_scattering/pull/32
  if (!ray_r_mu_intersects_ground) {
    Number mu_horizon = -SafeSqrt(1.0 -
        (atmosphere.bottom_radius * atmosphere.bottom_radius) / (r * r));
    const Number eps = 0.004;
    mu = max(mu, mu_horizon + eps);
  }

  transmittance = GetTransmittance(atmosphere, transmittance_texture,
      r, mu, d, ray_r_mu_intersects_ground);

  IrradianceSpectrum single_mie_scattering;
  IrradianceSpectrum scattering = GetCombinedScattering(
      atmosphere, scattering_texture, single_mie_scattering_texture,
      r, mu, mu_s, nu, ray_r_mu_intersects_ground,
      single_mie_scattering);

  // Compute the r, mu, mu_s and nu parameters for the second texture lookup.
  // If shadow_length is not 0 (case of light shafts), we want to ignore the
  // scattering along the last shadow_length meters of the view ray, which we
  // do by subtracting shadow_length from d (this way scattering_p is equal to
  // the S|x_s=x_0-lv term in Eq. (17) of our paper).
  d = max(d - shadow_length, 0.0 * m);
  Length r_p = ClampRadius(atmosphere, sqrt(d * d + 2.0 * r * mu * d + r * r));
  Number mu_p = (r * mu + d) / r_p;
  Number mu_s_p = (r * mu_s + d * nu) / r_p;

  IrradianceSpectrum single_mie_scattering_p;
  IrradianceSpectrum scattering_p = GetCombinedScattering(
      atmosphere, scattering_texture, single_mie_scattering_texture,
      r_p, mu_p, mu_s_p, nu, ray_r_mu_intersects_ground,
      single_mie_scattering_p);

  // Combine the lookup results to get the scattering between camera and point.
  DimensionlessSpectrum shadow_transmittance = transmittance;
  if (shadow_length > 0.0 * m) {
    // This is the T(x,x_s) term in Eq. (17) of our paper, for light shafts.
    shadow_transmittance = GetTransmittance(atmosphere, transmittance_texture,
        r, mu, d, ray_r_mu_intersects_ground);
  }
  // @shotamatsuda: Occlude only single Rayleigh scattering by the shadow.
#ifdef HAS_HIGHER_ORDER_SCATTERING_TEXTURE
  IrradianceSpectrum higher_order_scattering = GetScattering(
      atmosphere, higher_order_scattering_texture,
      r, mu, mu_s, nu, ray_r_mu_intersects_ground);
  IrradianceSpectrum single_scattering = scattering - higher_order_scattering;
  IrradianceSpectrum higher_order_scattering_p = GetScattering(
      atmosphere, higher_order_scattering_texture,
      r_p, mu_p, mu_s_p, nu, ray_r_mu_intersects_ground);
  IrradianceSpectrum single_scattering_p =
      scattering_p - higher_order_scattering_p;
  scattering =
      single_scattering - shadow_transmittance * single_scattering_p +
      higher_order_scattering - transmittance * higher_order_scattering_p;
#else // HAS_HIGHER_ORDER_SCATTERING_TEXTURE
  scattering = scattering - shadow_transmittance * scattering_p;
#endif // HAS_HIGHER_ORDER_SCATTERING_TEXTURE

  single_mie_scattering =
      single_mie_scattering - shadow_transmittance * single_mie_scattering_p;
#ifdef COMBINED_SCATTERING_TEXTURES
  single_mie_scattering = GetExtrapolatedSingleMieScattering(
      atmosphere, vec4(scattering, single_mie_scattering.r));
#endif // COMBINED_SCATTERING_TEXTURES

  // Hack to avoid rendering artifacts when the sun is below the horizon.
  single_mie_scattering = single_mie_scattering *
      smoothstep(Number(0.0), Number(0.01), mu_s);

  return scattering * RayleighPhaseFunction(nu) + single_mie_scattering *
      MiePhaseFunction(atmosphere.mie_phase_function_g, nu);
}

IrradianceSpectrum GetSunAndSkyIrradiance(
    const AtmosphereParameters atmosphere,
    const TransmittanceTexture transmittance_texture,
    const IrradianceTexture irradiance_texture,
    const Position point, const Direction normal, const Direction sun_direction,
    out IrradianceSpectrum sky_irradiance) {
  Length r = length(point);
  Number mu_s = dot(point, sun_direction) / r;

  // Indirect irradiance (approximated if the surface is not horizontal).
  sky_irradiance = GetIrradiance(atmosphere, irradiance_texture, r, mu_s) *
      (1.0 + dot(normal, point) / r) * 0.5;

  // Direct irradiance.
  return atmosphere.solar_irradiance *
      GetTransmittanceToSun(
          atmosphere, transmittance_texture, r, mu_s) *
      max(dot(normal, sun_direction), 0.0);
}

// @shotamatsuda: Added for the clouds.
IrradianceSpectrum GetSunAndSkyScalarIrradiance(
    const AtmosphereParameters atmosphere,
    const TransmittanceTexture transmittance_texture,
    const IrradianceTexture irradiance_texture,
    const Position point, const Direction sun_direction,
    out IrradianceSpectrum sky_irradiance) {
  Length r = length(point);
  Number mu_s = dot(point, sun_direction) / r;

  // Indirect irradiance. Integral over sphere yields 2π.
  sky_irradiance = GetIrradiance(atmosphere, irradiance_texture, r, mu_s) *
      2.0 * PI;

  // Direct irradiance. Omit the cosine term.
  return atmosphere.solar_irradiance *
      GetTransmittanceToSun(atmosphere, transmittance_texture, r, mu_s);
}

Luminance3 GetSolarLuminance() {
  return ATMOSPHERE.solar_irradiance /
      (PI * ATMOSPHERE.sun_angular_radius * ATMOSPHERE.sun_angular_radius) *
      SUN_SPECTRAL_RADIANCE_TO_LUMINANCE;
}

Luminance3 GetSkyLuminance(
    const Position camera, Direction view_ray, const Length shadow_length,
    const Direction sun_direction, out DimensionlessSpectrum transmittance) {
  return GetSkyRadiance(ATMOSPHERE, transmittance_texture,
      scattering_texture, single_mie_scattering_texture,
      camera, view_ray, shadow_length, sun_direction,
      transmittance) * SKY_SPECTRAL_RADIANCE_TO_LUMINANCE;
}

Luminance3 GetSkyLuminanceToPoint(
    const Position camera, const Position point, const Length shadow_length,
    const Direction sun_direction, out DimensionlessSpectrum transmittance) {
  return GetSkyRadianceToPoint(ATMOSPHERE, transmittance_texture,
      scattering_texture, single_mie_scattering_texture,
      camera, point, shadow_length, sun_direction, transmittance) *
      SKY_SPECTRAL_RADIANCE_TO_LUMINANCE;
}

Illuminance3 GetSunAndSkyIlluminance(
    const Position p, const Direction normal, const Direction sun_direction,
    out IrradianceSpectrum sky_irradiance) {
  IrradianceSpectrum sun_irradiance = GetSunAndSkyIrradiance(
      ATMOSPHERE, transmittance_texture, irradiance_texture, p, normal,
      sun_direction, sky_irradiance);
  sky_irradiance *= SKY_SPECTRAL_RADIANCE_TO_LUMINANCE;
  return sun_irradiance * SUN_SPECTRAL_RADIANCE_TO_LUMINANCE;
}

// @shotamatsuda: Added for the clouds.
Illuminance3 GetSunAndSkyScalarIlluminance(
    const Position p, const Direction sun_direction,
    out IrradianceSpectrum sky_irradiance) {
  IrradianceSpectrum sun_irradiance = GetSunAndSkyScalarIrradiance(
      ATMOSPHERE, transmittance_texture, irradiance_texture, p,
      sun_direction, sky_irradiance);
  sky_irradiance *= SKY_SPECTRAL_RADIANCE_TO_LUMINANCE;
  return sun_irradiance * SUN_SPECTRAL_RADIANCE_TO_LUMINANCE;
}

#define GetSolarRadiance GetSolarLuminance
#define GetSkyRadiance GetSkyLuminance
#define GetSkyRadianceToPoint GetSkyLuminanceToPoint
#define GetSunAndSkyIrradiance GetSunAndSkyIlluminance
#define GetSunAndSkyScalarIrradiance GetSunAndSkyScalarIlluminance
`,{Vector3:U,Color:ra,Uniform:_,Camera:cl,Vector2:ia,Matrix4:se,RawShaderMaterial:ll,Quaternion:V0,HalfFloatType:xi,MeshBasicMaterial:$0,DepthTexture:j0,UnsignedIntType:Y0,WebGLRenderTarget:q0,RedFormat:X0,RGBADepthPacking:K0,LessEqualDepth:Z0,BasicDepthPacking:J0,Matrix3:Q0,Mesh:e1,PlaneGeometry:t1,Scene:r1,FloatType:ka,GLSL3:uo,CustomBlending:i1,NoBlending:a1,AddEquation:n1,OneFactor:o1,RGBAFormat:s1,LinearFilter:Ba,ClampToEdgeWrapping:c1,NoColorSpace:l1,WebGL3DRenderTarget:u1,Loader:ul,Data3DTexture:ri,DataTexture:Va,LightProbe:h1,BufferGeometry:d1,InterleavedBuffer:m1,InterleavedBufferAttribute:p1,Sphere:f1,DirectionalLight:v1}=await J("three"),hl=new U(.2126,.7152,.0722),dl=["solarIrradiance","sunAngularRadius","bottomRadius","topRadius","rayleighDensity","rayleighScattering","mieDensity","mieScattering","mieExtinction","miePhaseFunctionG","absorptionDensity","absorptionExtinction","groundAlbedo","muSMin","skyRadianceToLuminance","sunRadianceToLuminance"];function ml(r,e){if(e!=null)for(const t of dl){const i=e[t];i!=null&&(r[t]instanceof U?r[t].copy(i):r[t]=i)}}class ft{constructor(e,t,i,a,n){this.width=e,this.expTerm=t,this.expScale=i,this.linearTerm=a,this.constantTerm=n}toUniform(){return new _({width:this.width,exp_term:this.expTerm,exp_scale:this.expScale,linear_term:this.linearTerm,constant_term:this.constantTerm})}}const Ti=class{constructor(e){this.solarIrradiance=new U(1.474,1.8504,1.91198),this.sunAngularRadius=.004675,this.bottomRadius=636e4,this.topRadius=642e4,this.rayleighDensity=[new ft(0,0,0,0,0),new ft(0,1,-.125,0,0)],this.rayleighScattering=new U(.005802,.013558,.0331),this.mieDensity=[new ft(0,0,0,0,0),new ft(0,1,-.833333,0,0)],this.mieScattering=new U(.003996,.003996,.003996),this.mieExtinction=new U(.00444,.00444,.00444),this.miePhaseFunctionG=.8,this.absorptionDensity=[new ft(25,0,0,1/15,-2/3),new ft(0,0,0,-1/15,8/3)],this.absorptionExtinction=new U(65e-5,.001881,85e-6),this.groundAlbedo=new ra().setScalar(.1),this.muSMin=Math.cos(Pc(120)),this.sunRadianceToLuminance=new U(98242.786222,69954.398112,66475.012354),this.skyRadianceToLuminance=new U(114974.916437,71305.954816,65310.548555),this.sunRadianceToRelativeLuminance=new U,this.skyRadianceToRelativeLuminance=new U,ml(this,e);const t=hl.dot(this.sunRadianceToLuminance);this.sunRadianceToRelativeLuminance.copy(this.sunRadianceToLuminance).divideScalar(t),this.skyRadianceToRelativeLuminance.copy(this.skyRadianceToLuminance).divideScalar(t)}toUniform(){return new _({solar_irradiance:this.solarIrradiance,sun_angular_radius:this.sunAngularRadius,bottom_radius:this.bottomRadius*Er,top_radius:this.topRadius*Er,rayleigh_density:{layers:this.rayleighDensity.map(e=>e.toUniform().value)},rayleigh_scattering:this.rayleighScattering,mie_density:{layers:this.mieDensity.map(e=>e.toUniform().value)},mie_scattering:this.mieScattering,mie_extinction:this.mieExtinction,mie_phase_function_g:this.miePhaseFunctionG,absorption_density:{layers:this.absorptionDensity.map(e=>e.toUniform().value)},absorption_extinction:this.absorptionExtinction,ground_albedo:this.groundAlbedo,mu_s_min:this.muSMin})}};Ti.DEFAULT=new Ti;let er=Ti;const pl=`precision highp sampler2DArray;

#include "core/depth"
#include "core/math"
#include "core/packing"
#include "core/transform"
#ifdef HAS_SHADOW
#include "core/raySphereIntersection"
#include "core/cascadedShadowMaps"
#include "core/interleavedGradientNoise"
#include "core/vogelDisk"
#endif // HAS_SHADOW

#include "bruneton/definitions"

uniform AtmosphereParameters ATMOSPHERE;
uniform vec3 SUN_SPECTRAL_RADIANCE_TO_LUMINANCE;
uniform vec3 SKY_SPECTRAL_RADIANCE_TO_LUMINANCE;

uniform sampler2D transmittance_texture;
uniform sampler3D scattering_texture;
uniform sampler2D irradiance_texture;
uniform sampler3D single_mie_scattering_texture;
uniform sampler3D higher_order_scattering_texture;

#include "bruneton/common"
#include "bruneton/runtime"

uniform sampler2D normalBuffer;

uniform mat4 projectionMatrix;
uniform mat4 viewMatrix;
uniform mat4 inverseProjectionMatrix;
uniform mat4 inverseViewMatrix;
uniform float bottomRadius;
uniform mat4 worldToECEFMatrix;
uniform float geometricErrorCorrectionAmount;
uniform vec3 sunDirection;
uniform float cosSunAngularRadius;
uniform vec3 moonDirection;
uniform float moonAngularRadius;
uniform float lunarRadianceScale;
uniform float albedoScale;

#include "sky"

#ifdef HAS_LIGHTING_MASK
uniform sampler2D lightingMaskBuffer;
#endif // HAS_LIGHTING_MASK

// prettier-ignore
#define LIGHTING_MASK_CHANNEL_ LIGHTING_MASK_CHANNEL

#ifdef HAS_OVERLAY
uniform sampler2D overlayBuffer;
#endif // HAS_OVERLAY

#ifdef HAS_SHADOW
uniform sampler2DArray shadowBuffer;
uniform vec2 shadowIntervals[SHADOW_CASCADE_COUNT];
uniform mat4 shadowMatrices[SHADOW_CASCADE_COUNT];
uniform mat4 inverseShadowMatrices[SHADOW_CASCADE_COUNT];
uniform float shadowFar;
uniform float shadowTopHeight;
uniform float shadowRadius;
uniform sampler3D stbnTexture;
uniform int frame;
#endif // HAS_SHADOW

#ifdef HAS_SHADOW_LENGTH
uniform sampler2D shadowLengthBuffer;
#endif // HAS_SHADOW_LENGTH

varying vec3 vCameraPosition;
varying vec3 vRayDirection;
varying vec3 vGeometryAltitudeCorrection;
varying vec3 vEllipsoidRadiiSquared;

vec3 readNormal(const vec2 uv, out bool degenerate) {
  vec3 normal = texture(normalBuffer, uv).xyz;
  degenerate = normal == vec3(0.0);
  #ifdef OCT_ENCODED_NORMAL
  return unpackVec2ToNormal(normal.xy);
  #else // OCT_ENCODED_NORMAL
  return 2.0 * normal - 1.0;
  #endif // OCT_ENCODED_NORMAL
}

void correctGeometricError(inout vec3 positionECEF, inout vec3 normalECEF) {
  // TODO: The error is pronounced at the edge of the ellipsoid due to the
  // large difference between the sphere position and the unprojected position
  // at the current fragment. Calculating the sphere position from the fragment
  // UV may resolve this.

  // Correct way is slerp, but this will be small-angle interpolation anyways.
  vec3 sphereNormal = normalize(positionECEF / vEllipsoidRadiiSquared);
  vec3 spherePosition = ATMOSPHERE.bottom_radius * sphereNormal;
  normalECEF = mix(normalECEF, sphereNormal, geometricErrorCorrectionAmount);
  positionECEF = mix(positionECEF, spherePosition, geometricErrorCorrectionAmount);
}

#if defined(SUN_LIGHT) || defined(SKY_LIGHT)

vec3 getSunSkyIrradiance(
  const vec3 positionECEF,
  const vec3 normal,
  const vec3 inputColor,
  const float sunTransmittance
) {
  // Assume lambertian BRDF. If both SUN_LIGHT and SKY_LIGHT are not defined,
  // regard the inputColor as radiance at the texel.
  vec3 diffuse = inputColor * albedoScale * RECIPROCAL_PI;
  vec3 skyIrradiance;
  vec3 sunIrradiance = GetSunAndSkyIrradiance(positionECEF, normal, sunDirection, skyIrradiance);

  #ifdef HAS_SHADOW
  sunIrradiance *= sunTransmittance;
  #endif // HAS_SHADOW

  #if defined(SUN_LIGHT) && defined(SKY_LIGHT)
  return diffuse * (sunIrradiance + skyIrradiance);
  #elif defined(SUN_LIGHT)
  return diffuse * sunIrradiance;
  #elif defined(SKY_LIGHT)
  return diffuse * skyIrradiance;
  #endif // defined(SUN_LIGHT) && defined(SKY_LIGHT)
}

#endif // defined(SUN_LIGHT) || defined(SKY_LIGHT)

#if defined(TRANSMITTANCE) || defined(INSCATTER)

void applyTransmittanceInscatter(const vec3 positionECEF, float shadowLength, inout vec3 radiance) {
  vec3 transmittance;
  vec3 inscatter = GetSkyRadianceToPoint(
    vCameraPosition,
    positionECEF,
    shadowLength,
    sunDirection,
    transmittance
  );
  #ifdef TRANSMITTANCE
  radiance = radiance * transmittance;
  #endif // TRANSMITTANCE
  #ifdef INSCATTER
  radiance = radiance + inscatter;
  #endif // INSCATTER
}

#endif // defined(TRANSMITTANCE) || defined(INSCATTER)

#ifdef HAS_SHADOW

float getSTBN() {
  ivec3 size = textureSize(stbnTexture, 0);
  vec3 scale = 1.0 / vec3(size);
  return texture(stbnTexture, vec3(gl_FragCoord.xy, float(frame % size.z)) * scale).r;
}

vec2 getShadowUv(const vec3 worldPosition, const int cascadeIndex) {
  vec4 clip = shadowMatrices[cascadeIndex] * vec4(worldPosition, 1.0);
  clip /= clip.w;
  return clip.xy * 0.5 + 0.5;
}

float getDistanceToShadowTop(const vec3 positionECEF) {
  // Distance to the top of the shadows along the sun direction, which matches
  // the ray origin of BSM.
  return raySphereSecondIntersection(
    positionECEF / METER_TO_LENGTH_UNIT, // TODO: Make units consistent
    sunDirection,
    vec3(0.0),
    bottomRadius + shadowTopHeight
  );
}

float readShadowOpticalDepth(const vec2 uv, const float distanceToTop, const int cascadeIndex) {
  // r: frontDepth, g: meanExtinction, b: maxOpticalDepth, a: maxOpticalDepthTail
  vec4 shadow = texture(shadowBuffer, vec3(uv, float(cascadeIndex)));
  // Omit adding maxOpticalDepthTail to avoid pronounced aliasing. Ground
  // shadow will be attenuated by inscatter anyways.
  return min(shadow.b, shadow.g * max(0.0, distanceToTop - shadow.r));
}

float sampleShadowOpticalDepthPCF(
  const vec3 worldPosition,
  const float distanceToTop,
  const float radius,
  const int cascadeIndex
) {
  vec2 uv = getShadowUv(worldPosition, cascadeIndex);
  if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) {
    return 0.0;
  }

  vec2 texelSize = vec2(1.0) / vec2(textureSize(shadowBuffer, 0).xy);
  float sum = 0.0;
  vec2 offset;
  #pragma unroll_loop_start
  for (int i = 0; i < 16; ++i) {
    #if UNROLLED_LOOP_INDEX < SHADOW_SAMPLE_COUNT
    offset = vogelDisk(
      UNROLLED_LOOP_INDEX,
      SHADOW_SAMPLE_COUNT,
      interleavedGradientNoise(gl_FragCoord.xy) * PI2
    );
    sum += readShadowOpticalDepth(uv + offset * radius * texelSize, distanceToTop, cascadeIndex);
    #endif // UNROLLED_LOOP_INDEX < SHADOW_SAMPLE_COUNT
  }
  #pragma unroll_loop_end
  return sum / float(SHADOW_SAMPLE_COUNT);
}

float sampleShadowOpticalDepth(
  const vec3 worldPosition,
  const vec3 positionECEF,
  const float radius,
  const float jitter
) {
  float distanceToTop = getDistanceToShadowTop(positionECEF);
  if (distanceToTop <= 0.0) {
    return 0.0;
  }
  int cascadeIndex = getFadedCascadeIndex(
    viewMatrix,
    worldPosition,
    shadowIntervals,
    cameraNear,
    shadowFar,
    jitter
  );
  return cascadeIndex >= 0
    ? sampleShadowOpticalDepthPCF(worldPosition, distanceToTop, radius, cascadeIndex)
    : 0.0;
}

float getShadowRadius(const vec3 worldPosition) {
  vec4 clip = shadowMatrices[0] * vec4(worldPosition, 1.0);
  clip /= clip.w;

  // Offset by 1px in each direction in shadow's clip coordinates.
  vec2 shadowSize = vec2(textureSize(shadowBuffer, 0));
  vec3 offset = vec3(2.0 / shadowSize, 0.0);
  vec4 clipX = clip + offset.xzzz;
  vec4 clipY = clip + offset.zyzz;

  // Convert back to world space.
  vec4 worldX = inverseShadowMatrices[0] * clipX;
  vec4 worldY = inverseShadowMatrices[0] * clipY;

  // Project into the main camera's clip space.
  mat4 viewProjectionMatrix = projectionMatrix * viewMatrix;
  vec4 projected = viewProjectionMatrix * vec4(worldPosition, 1.0);
  vec4 projectedX = viewProjectionMatrix * worldX;
  vec4 projectedY = viewProjectionMatrix * worldY;
  projected /= projected.w;
  projectedX /= projectedX.w;
  projectedY /= projectedY.w;

  // Take the mean of pixel sizes.
  vec2 center = (projected.xy * 0.5 + 0.5) * resolution;
  vec2 offsetX = (projectedX.xy * 0.5 + 0.5) * resolution;
  vec2 offsetY = (projectedY.xy * 0.5 + 0.5) * resolution;
  float size = max(length(offsetX - center), length(offsetY - center));

  return remapClamped(size, 10.0, 50.0, 0.0, shadowRadius);
}

#endif // HAS_SHADOW

void mainImage(const vec4 inputColor, const vec2 uv, out vec4 outputColor) {
  #if defined(HAS_LIGHTING_MASK) && defined(DEBUG_SHOW_LIGHTING_MASK)
  outputColor.rgb = vec3(texture(lightingMaskBuffer, uv).LIGHTING_MASK_CHANNEL_);
  outputColor.a = 1.0;
  return;
  #endif // defined(HAS_LIGHTING_MASK) && defined(DEBUG_SHOW_LIGHTING_MASK)

  float shadowLength = 0.0;
  #ifdef HAS_SHADOW_LENGTH
  shadowLength = texture(shadowLengthBuffer, uv).r;
  #endif // HAS_SHADOW_LENGTH

  #ifdef HAS_OVERLAY
  vec4 overlay = texture(overlayBuffer, uv);
  if (overlay.a == 1.0) {
    outputColor = overlay;
    return;
  }
  #endif // HAS_OVERLAY

  vec3 rayDirection = normalize(vRayDirection);
  vec3 dRDdx = dFdx(rayDirection);
  vec3 dRDdy = dFdy(rayDirection);
  float fragmentAngle = length(dRDdx + dRDdy) / length(rayDirection);

  float depth = readDepthValue(depthBuffer, uv);
  if (depth >= 1.0 - 1e-8) {
    #ifdef SKY
    outputColor.rgb = getSkyRadiance(
      vCameraPosition,
      rayDirection,
      shadowLength,
      sunDirection,
      moonDirection,
      moonAngularRadius,
      lunarRadianceScale,
      fragmentAngle
    );
    outputColor.a = 1.0;
    #else // SKY
    outputColor = inputColor;
    #endif // SKY

    #ifdef HAS_OVERLAY
    outputColor.rgb = outputColor.rgb * (1.0 - overlay.a) + overlay.rgb;
    #endif // HAS_OVERLAY
    return;
  }
  depth = reverseLogDepth(depth, cameraNear, cameraFar);

  // Reconstruct position and normal in world space.
  vec3 viewPosition = screenToView(
    uv,
    depth,
    getViewZ(depth),
    projectionMatrix,
    inverseProjectionMatrix
  );
  vec3 worldPosition = (inverseViewMatrix * vec4(viewPosition, 1.0)).xyz;
  vec3 positionECEF = (worldToECEFMatrix * vec4(worldPosition, 1.0)).xyz;
  positionECEF = positionECEF * METER_TO_LENGTH_UNIT + vGeometryAltitudeCorrection;

  vec3 viewNormal;
  bool degenerateNormal = false;
  #ifdef RECONSTRUCT_NORMAL
  vec3 dVPdx = dFdx(viewPosition);
  vec3 dVPdy = dFdy(viewPosition);
  viewNormal = normalize(cross(dVPdx, dVPdy));
  #elif defined(HAS_NORMALS)
  viewNormal = readNormal(uv, degenerateNormal);
  #endif // defined(HAS_NORMALS)

  #if defined(RECONSTRUCT_NORMAL) || defined(HAS_NORMALS)
  vec3 worldNormal = (inverseViewMatrix * vec4(viewNormal, 0.0)).xyz;
  vec3 normalECEF = (worldToECEFMatrix * vec4(worldNormal, 0.0)).xyz;
  #else // defined(RECONSTRUCT_NORMAL) || defined(HAS_NORMALS)
  vec3 normalECEF = normalize(positionECEF);
  #endif // defined(RECONSTRUCT_NORMAL) || defined(HAS_NORMALS)

  #ifdef CORRECT_GEOMETRIC_ERROR
  correctGeometricError(positionECEF, normalECEF);
  #endif // CORRECT_GEOMETRIC_ERROR

  #ifdef HAS_SHADOW
  float stbn = getSTBN();
  float radius = getShadowRadius(worldPosition);
  float opticalDepth = sampleShadowOpticalDepth(worldPosition, positionECEF, radius, stbn);
  float sunTransmittance = exp(-opticalDepth);
  #else // HAS_SHADOW
  float sunTransmittance = 1.0;
  #endif // HAS_SHADOW

  vec3 radiance;
  #if defined(SUN_LIGHT) || defined(SKY_LIGHT)
  // WORKAROUND: When both post-process lighting and sky options are enabled,
  // stars have degenerate normals. We use this to disable irradiance, which is
  // irrelevant for them.
  if (!degenerateNormal) {
    radiance = getSunSkyIrradiance(positionECEF, normalECEF, inputColor.rgb, sunTransmittance);
  } else {
    radiance = inputColor.rgb;
  }
  #ifdef HAS_LIGHTING_MASK
  float lightingMask = texture(lightingMaskBuffer, uv).LIGHTING_MASK_CHANNEL_;
  radiance = mix(inputColor.rgb, radiance, lightingMask);
  #endif // HAS_LIGHTING_MASK
  #else // defined(SUN_LIGHT) || defined(SKY_LIGHT)
  radiance = inputColor.rgb;
  #endif // defined(SUN_LIGHT) || defined(SKY_LIGHT)

  #if defined(TRANSMITTANCE) || defined(INSCATTER)
  applyTransmittanceInscatter(positionECEF, shadowLength, radiance);
  #endif // defined(TRANSMITTANCE) || defined(INSCATTER)

  outputColor = vec4(radiance, inputColor.a);

  #ifdef HAS_OVERLAY
  outputColor.rgb = outputColor.rgb * (1.0 - overlay.a) + overlay.rgb;
  #endif // HAS_OVERLAY
}
`,fl=`uniform mat4 inverseViewMatrix;
uniform mat4 inverseProjectionMatrix;
uniform vec3 cameraPosition;
uniform mat4 worldToECEFMatrix;
uniform vec3 altitudeCorrection;
uniform float geometricErrorCorrectionAmount;
uniform vec3 ellipsoidRadii;

varying vec3 vCameraPosition;
varying vec3 vRayDirection;
varying vec3 vGeometryAltitudeCorrection;
varying vec3 vEllipsoidRadiiSquared;

void getCameraRay(out vec3 origin, out vec3 direction) {
  bool isPerspective = inverseProjectionMatrix[2][3] != 0.0; // 4th entry in the 3rd column

  if (isPerspective) {
    // Calculate the camera ray for a perspective camera.
    vec4 viewPosition = inverseProjectionMatrix * vec4(position, 1.0);
    vec4 worldDirection = inverseViewMatrix * vec4(viewPosition.xyz, 0.0);
    origin = cameraPosition;
    direction = worldDirection.xyz;
  } else {
    // Unprojected points to calculate direction.
    vec4 nearPoint = inverseProjectionMatrix * vec4(position.xy, -1.0, 1.0);
    vec4 farPoint = inverseProjectionMatrix * vec4(position.xy, -0.9, 1.0);
    nearPoint /= nearPoint.w;
    farPoint /= farPoint.w;

    // Calculate world values.
    vec4 worldDirection = inverseViewMatrix * vec4(farPoint.xyz - nearPoint.xyz, 0.0);
    vec4 worldOrigin = inverseViewMatrix * nearPoint;

    // Outputs
    direction = worldDirection.xyz;
    origin = worldOrigin.xyz;
  }
}

void mainSupport() {
  vec3 direction, origin;
  getCameraRay(origin, direction);

  vec3 cameraPositionECEF = (worldToECEFMatrix * vec4(origin, 1.0)).xyz;
  vCameraPosition = (cameraPositionECEF + altitudeCorrection) * METER_TO_LENGTH_UNIT;
  vRayDirection = (worldToECEFMatrix * vec4(direction, 0.0)).xyz;

  vGeometryAltitudeCorrection = altitudeCorrection * METER_TO_LENGTH_UNIT;
  // Gradually turn off the altitude correction on geometries as the geometric
  // error correction takes effect, because that on the ideal sphere will be
  // over corrected.
  // See: https://github.com/takram-design-engineering/three-geospatial/pull/23#issuecomment-2542914656
  #ifdef CORRECT_GEOMETRIC_ERROR
  vGeometryAltitudeCorrection *= 1.0 - geometricErrorCorrectionAmount;
  #endif // CORRECT_GEOMETRIC_ERROR

  vec3 radii = ellipsoidRadii * METER_TO_LENGTH_UNIT;
  vEllipsoidRadiiSquared = radii * radii;
}
`,ho=`vec3 getLunarRadiance(const float moonAngularRadius) {
  // Not a physical number but the order of 10^-6 relative to the sun may fit.
  vec3 radiance =
    ATMOSPHERE.solar_irradiance *
    0.000002 /
    (PI * moonAngularRadius * moonAngularRadius) *
    SUN_SPECTRAL_RADIANCE_TO_LUMINANCE;
  return radiance;
}

float intersectSphere(const vec3 ray, const vec3 point, const float radius) {
  vec3 P = -point;
  float PoR = dot(P, ray);
  float D = dot(P, P) - radius * radius;
  return -PoR - sqrt(PoR * PoR - D);
}

float orenNayarDiffuse(const vec3 L, const vec3 V, const vec3 N) {
  float NoL = dot(N, L);
  float NoV = dot(N, V);
  float s = dot(L, V) - NoL * NoV;
  float t = mix(1.0, max(NoL, NoV), step(0.0, s));
  return max(0.0, NoL) * (0.62406015 + 0.41284404 * s / t);
}

vec3 getSkyRadiance(
  const vec3 cameraPosition,
  const vec3 rayDirection,
  const float shadowLength,
  const vec3 sunDirection,
  const vec3 moonDirection,
  const float moonAngularRadius,
  const float lunarRadianceScale,
  const float fragmentAngle
) {
  vec3 transmittance;
  vec3 radiance = GetSkyRadiance(
    cameraPosition,
    rayDirection,
    shadowLength,
    sunDirection,
    transmittance
  );

  // Rendering celestial objects without perspective doesn't make sense.
  #ifdef PERSPECTIVE_CAMERA

  #ifdef SUN
  float viewDotSun = dot(rayDirection, sunDirection);
  if (viewDotSun > cosSunAngularRadius) {
    float angle = acos(clamp(viewDotSun, -1.0, 1.0));
    float antialias = smoothstep(
      ATMOSPHERE.sun_angular_radius,
      ATMOSPHERE.sun_angular_radius - fragmentAngle,
      angle
    );
    radiance += transmittance * GetSolarRadiance() * antialias;
  }
  #endif // SUN

  #ifdef MOON
  float intersection = intersectSphere(rayDirection, moonDirection, moonAngularRadius);
  if (intersection > 0.0) {
    vec3 normal = normalize(moonDirection - rayDirection * intersection);
    float diffuse = orenNayarDiffuse(-sunDirection, rayDirection, normal);
    float viewDotMoon = dot(rayDirection, moonDirection);
    float angle = acos(clamp(viewDotMoon, -1.0, 1.0));
    float antialias = smoothstep(moonAngularRadius, moonAngularRadius - fragmentAngle, angle);
    radiance +=
      transmittance *
      getLunarRadiance(moonAngularRadius) *
      lunarRadianceScale *
      diffuse *
      antialias;
  }
  #endif // MOON

  #endif // PERSPECTIVE_CAMERA

  return radiance;
}
`;var vl=Object.defineProperty,ue=(r,e,t,i)=>{for(var a=void 0,n=r.length-1,o;n>=0;n--)(o=r[n])&&(a=o(e,t,a)||a);return a&&vl(e,t,a),a};const gl=new U,yl=new U,Sl=new Fi,wl={blendFunction:Qo.NORMAL,octEncodedNormal:!1,reconstructNormal:!1,ellipsoid:At.WGS84,correctAltitude:!0,correctGeometricError:!0,sunLight:!1,skyLight:!1,transmittance:!0,inscatter:!0,albedoScale:1,sky:!1,sun:!0,moon:!0,moonAngularRadius:.0045,lunarRadianceScale:1,ground:!0};class ce extends bn{constructor(e=new cl,t,i=er.DEFAULT){const{blendFunction:a,normalBuffer:n=null,octEncodedNormal:o,reconstructNormal:s,irradianceTexture:c=null,scatteringTexture:u=null,transmittanceTexture:l=null,singleMieScatteringTexture:m=null,higherOrderScatteringTexture:p=null,ellipsoid:g,correctAltitude:y,correctGeometricError:x,sunDirection:T,sunLight:D,skyLight:H,transmittance:L,inscatter:C,albedoScale:A,sky:N,sun:j,moon:de,moonDirection:te,moonAngularRadius:Ie,lunarRadianceScale:Oe,ground:ge}={...wl,...t};super("AerialPerspectiveEffect",Qt($e(pl,{core:{depth:oo,packing:tl,math:qi,transform:rl,raySphereIntersection:Pr,cascadedShadowMaps:no,interleavedGradientNoise:so,vogelDisk:lo},bruneton:{common:Fr,definitions:zr,runtime:Gr},sky:ho})),{blendFunction:a,vertexShader:fl,attributes:Nn.DEPTH,uniforms:new Map(Object.entries({normalBuffer:new _(n),projectionMatrix:new _(new se),viewMatrix:new _(new se),inverseProjectionMatrix:new _(new se),inverseViewMatrix:new _(new se),cameraPosition:new _(new U),bottomRadius:new _(i.bottomRadius),ellipsoidRadii:new _(new U),worldToECEFMatrix:new _(new se),altitudeCorrection:new _(new U),geometricErrorCorrectionAmount:new _(0),sunDirection:new _(T?.clone()??new U),cosSunAngularRadius:new _(i.sunAngularRadius),albedoScale:new _(A),moonDirection:new _(te?.clone()??new U),moonAngularRadius:new _(Ie),lunarRadianceScale:new _(Oe),overlayBuffer:new _(null),shadowBuffer:new _(null),shadowMapSize:new _(new ia),shadowIntervals:new _([]),shadowMatrices:new _([]),inverseShadowMatrices:new _([]),shadowFar:new _(0),shadowTopHeight:new _(0),shadowRadius:new _(3),stbnTexture:new _(null),frame:new _(0),shadowLengthBuffer:new _(null),lightingMaskBuffer:new _(null),ATMOSPHERE:i.toUniform(),SUN_SPECTRAL_RADIANCE_TO_LUMINANCE:new _(i.sunRadianceToRelativeLuminance),SKY_SPECTRAL_RADIANCE_TO_LUMINANCE:new _(i.skyRadianceToRelativeLuminance),irradiance_texture:new _(c),scattering_texture:new _(u),transmittance_texture:new _(l),single_mie_scattering_texture:new _(null),higher_order_scattering_texture:new _(null)})),defines:new Map([["TRANSMITTANCE_TEXTURE_WIDTH",Ur.toFixed(0)],["TRANSMITTANCE_TEXTURE_HEIGHT",Hr.toFixed(0)],["SCATTERING_TEXTURE_R_SIZE",Zi.toFixed(0)],["SCATTERING_TEXTURE_MU_SIZE",Ji.toFixed(0)],["SCATTERING_TEXTURE_MU_S_SIZE",Qi.toFixed(0)],["SCATTERING_TEXTURE_NU_SIZE",ea.toFixed(0)],["IRRADIANCE_TEXTURE_WIDTH",Xi.toFixed(0)],["IRRADIANCE_TEXTURE_HEIGHT",Ki.toFixed(0)],["METER_TO_LENGTH_UNIT",Er.toFixed(7)]])}),this.camera=e,this.atmosphere=i,this.overlay=null,this.shadow=null,this.shadowLength=null,this.lightingMask=null,this.hasNormals=!1,this.combinedScatteringTextures=!1,this.hasHigherOrderScatteringTexture=!1,this.shadowSampleCount=8,this.octEncodedNormal=o,this.reconstructNormal=s,this.singleMieScatteringTexture=m,this.higherOrderScatteringTexture=p,this.ellipsoid=g,this.correctAltitude=y,this.correctGeometricError=x,this.sunLight=D,this.skyLight=H,this.transmittance=L,this.inscatter=C,this.sky=N,this.sun=j,this.moon=de,this.ground=ge}get mainCamera(){return this.camera}set mainCamera(e){this.camera=e}copyCameraSettings(e){const{projectionMatrix:t,matrixWorldInverse:i,projectionMatrixInverse:a,matrixWorld:n}=e,o=this.uniforms;o.get("projectionMatrix").value.copy(t),o.get("viewMatrix").value.copy(i),o.get("inverseProjectionMatrix").value.copy(a),o.get("inverseViewMatrix").value.copy(n);const s=e.getWorldPosition(o.get("cameraPosition").value),c=o.get("worldToECEFMatrix").value,u=gl.copy(s).applyMatrix4(c);try{const m=Sl.setFromECEF(u).height,p=yl.set(0,this.ellipsoid.maximumRadius,-Math.max(0,m)).applyMatrix4(t);o.get("geometricErrorCorrectionAmount").value=Hc(Uc(p.y,41.5,13.8,0,1))}catch{return}const l=o.get("altitudeCorrection");this.correctAltitude?ta(u,this.atmosphere.bottomRadius,this.ellipsoid,l.value):l.value.setScalar(0)}updateOverlay(){let e=!1;const{uniforms:t,defines:i,overlay:a}=this,n=i.has("HAS_OVERLAY"),o=a!=null;return o!==n&&(o?i.set("HAS_OVERLAY","1"):(i.delete("HAS_OVERLAY"),t.get("overlayBuffer").value=null),e=!0),o&&(t.get("overlayBuffer").value=a.map),e}updateShadow(){let e=!1;const{uniforms:t,defines:i,shadow:a}=this,n=i.has("HAS_SHADOW"),o=a!=null;if(o!==n&&(o?i.set("HAS_SHADOW","1"):(i.delete("HAS_SHADOW"),t.get("shadowBuffer").value=null),e=!0),o){const s=i.get("SHADOW_CASCADE_COUNT"),c=`${a.cascadeCount}`;s!==c&&(i.set("SHADOW_CASCADE_COUNT",a.cascadeCount.toFixed(0)),e=!0),t.get("shadowBuffer").value=a.map,t.get("shadowMapSize").value=a.mapSize,t.get("shadowIntervals").value=a.intervals,t.get("shadowMatrices").value=a.matrices,t.get("inverseShadowMatrices").value=a.inverseMatrices,t.get("shadowFar").value=a.far,t.get("shadowTopHeight").value=a.topHeight}return e}updateShadowLength(){let e=!1;const{uniforms:t,defines:i,shadowLength:a}=this,n=i.has("HAS_SHADOW_LENGTH"),o=a!=null;return o!==n&&(o?i.set("HAS_SHADOW_LENGTH","1"):(i.delete("HAS_SHADOW_LENGTH"),t.get("shadowLengthBuffer").value=null),e=!0),o&&(t.get("shadowLengthBuffer").value=a.map),e}updateLightingMask(){let e=!1;const{uniforms:t,defines:i,lightingMask:a}=this,n=i.has("HAS_LIGHTING_MASK"),o=a!=null;if(o!==n&&(o?i.set("HAS_LIGHTING_MASK","1"):(i.delete("HAS_LIGHTING_MASK"),t.get("lightingMaskBuffer").value=null),e=!0),o){t.get("lightingMaskBuffer").value=a.map;const s=i.get("LIGHTING_MASK_CHANNEL"),c=a.channel;c!==s&&(/^[rgba]$/.test(c)?(i.set("LIGHTING_MASK_CHANNEL",c),e=!0):console.error(`Expression validation failed: ${c}`))}return e}update(e,t,i){this.copyCameraSettings(this.camera);let a=!1;a||=this.updateOverlay(),a||=this.updateShadow(),a||=this.updateShadowLength(),a||=this.updateLightingMask(),a&&this.setChanged(),++this.uniforms.get("frame").value}get normalBuffer(){return this.uniforms.get("normalBuffer").value}set normalBuffer(e){this.uniforms.get("normalBuffer").value=e,this.hasNormals=e!=null}get irradianceTexture(){return this.uniforms.get("irradiance_texture").value}set irradianceTexture(e){this.uniforms.get("irradiance_texture").value=e}get scatteringTexture(){return this.uniforms.get("scattering_texture").value}set scatteringTexture(e){this.uniforms.get("scattering_texture").value=e}get transmittanceTexture(){return this.uniforms.get("transmittance_texture").value}set transmittanceTexture(e){this.uniforms.get("transmittance_texture").value=e}get singleMieScatteringTexture(){return this.uniforms.get("single_mie_scattering_texture").value}set singleMieScatteringTexture(e){this.uniforms.get("single_mie_scattering_texture").value=e,this.combinedScatteringTextures=e==null}get higherOrderScatteringTexture(){return this.uniforms.get("higher_order_scattering_texture").value}set higherOrderScatteringTexture(e){this.uniforms.get("higher_order_scattering_texture").value=e,this.hasHigherOrderScatteringTexture=e!=null}get ellipsoid(){return this._ellipsoid}set ellipsoid(e){this._ellipsoid=e,this.uniforms.get("ellipsoidRadii").value.copy(e.radii)}get worldToECEFMatrix(){return this.uniforms.get("worldToECEFMatrix").value}get sunDirection(){return this.uniforms.get("sunDirection").value}get sunAngularRadius(){return this.uniforms.get("ATMOSPHERE").value.sun_angular_radius}set sunAngularRadius(e){this.uniforms.get("ATMOSPHERE").value.sun_angular_radius=e,this.uniforms.get("cosSunAngularRadius").value=Math.cos(e)}get albedoScale(){return this.uniforms.get("albedoScale").value}set albedoScale(e){this.uniforms.get("albedoScale").value=e}get moonDirection(){return this.uniforms.get("moonDirection").value}get moonAngularRadius(){return this.uniforms.get("moonAngularRadius").value}set moonAngularRadius(e){this.uniforms.get("moonAngularRadius").value=e}get lunarRadianceScale(){return this.uniforms.get("lunarRadianceScale").value}set lunarRadianceScale(e){this.uniforms.get("lunarRadianceScale").value=e}get stbnTexture(){return this.uniforms.get("stbnTexture").value}set stbnTexture(e){this.uniforms.get("stbnTexture").value=e}get shadowRadius(){return this.uniforms.get("shadowRadius").value}set shadowRadius(e){this.uniforms.get("shadowRadius").value=e}}ue([M("OCT_ENCODED_NORMAL")],ce.prototype,"octEncodedNormal");ue([M("RECONSTRUCT_NORMAL")],ce.prototype,"reconstructNormal");ue([M("HAS_NORMALS")],ce.prototype,"hasNormals");ue([M("COMBINED_SCATTERING_TEXTURES")],ce.prototype,"combinedScatteringTextures");ue([M("HAS_HIGHER_ORDER_SCATTERING_TEXTURE")],ce.prototype,"hasHigherOrderScatteringTexture");ue([M("CORRECT_GEOMETRIC_ERROR")],ce.prototype,"correctGeometricError");ue([M("SUN_LIGHT")],ce.prototype,"sunLight");ue([M("SKY_LIGHT")],ce.prototype,"skyLight");ue([M("TRANSMITTANCE")],ce.prototype,"transmittance");ue([M("INSCATTER")],ce.prototype,"inscatter");ue([M("SKY")],ce.prototype,"sky");ue([M("SUN")],ce.prototype,"sun");ue([M("MOON")],ce.prototype,"moon");ue([M("GROUND")],ce.prototype,"ground");ue([ut("SHADOW_SAMPLE_COUNT",{min:1,max:16})],ce.prototype,"shadowSampleCount");var xl=Object.defineProperty,mo=(r,e,t,i)=>{for(var a=void 0,n=r.length-1,o;n>=0;n--)(o=r[n])&&(a=o(e,t,a)||a);return a&&xl(e,t,a),a};const Tl=new U;function _l(r,e){let t="",i="";for(let a=1;a<e;++a)t+=`layout(location = ${a}) out float renderTarget${a};
`,i+=`renderTarget${a} = 0.0;
`;return r.replace("#include <mrt_layout>",t).replace("#include <mrt_output>",i)}const aa={ellipsoid:At.WGS84,correctAltitude:!0,renderTargetCount:1};let tr=class extends ll{constructor(e,t=er.DEFAULT){const{irradianceTexture:i=null,scatteringTexture:a=null,transmittanceTexture:n=null,singleMieScatteringTexture:o=null,higherOrderScatteringTexture:s=null,ellipsoid:c,correctAltitude:u,sunDirection:l,sunAngularRadius:m,renderTargetCount:p,...g}={...aa,...e};super({toneMapped:!1,depthWrite:!1,depthTest:!1,...g,uniforms:{cameraPosition:new _(new U),worldToECEFMatrix:new _(new se),altitudeCorrection:new _(new U),sunDirection:new _(l?.clone()??new U),cosSunAngularRadius:new _(t.sunAngularRadius),ATMOSPHERE:t.toUniform(),SUN_SPECTRAL_RADIANCE_TO_LUMINANCE:new _(t.sunRadianceToRelativeLuminance),SKY_SPECTRAL_RADIANCE_TO_LUMINANCE:new _(t.skyRadianceToRelativeLuminance),irradiance_texture:new _(i),scattering_texture:new _(a),transmittance_texture:new _(n),single_mie_scattering_texture:new _(null),higher_order_scattering_texture:new _(null),...g.uniforms},defines:{PI:`${Math.PI}`,TRANSMITTANCE_TEXTURE_WIDTH:Ur.toFixed(0),TRANSMITTANCE_TEXTURE_HEIGHT:Hr.toFixed(0),SCATTERING_TEXTURE_R_SIZE:Zi.toFixed(0),SCATTERING_TEXTURE_MU_SIZE:Ji.toFixed(0),SCATTERING_TEXTURE_MU_S_SIZE:Qi.toFixed(0),SCATTERING_TEXTURE_NU_SIZE:ea.toFixed(0),IRRADIANCE_TEXTURE_WIDTH:Xi.toFixed(0),IRRADIANCE_TEXTURE_HEIGHT:Ki.toFixed(0),METER_TO_LENGTH_UNIT:Er.toFixed(7),...g.defines}}),this.atmosphere=t,this.combinedScatteringTextures=!1,this.hasHigherOrderScatteringTexture=!1,this.singleMieScatteringTexture=o,this.higherOrderScatteringTexture=s,this.ellipsoid=c,this.correctAltitude=u,m!=null&&(this.sunAngularRadius=m),this.renderTargetCount=p}copyCameraSettings(e){const t=this.uniforms,i=e.getWorldPosition(t.cameraPosition.value),a=Tl.copy(i).applyMatrix4(t.worldToECEFMatrix.value),n=t.altitudeCorrection.value;this.correctAltitude?ta(a,this.atmosphere.bottomRadius,this.ellipsoid,n):n.setScalar(0)}onBeforeCompile(e,t){e.fragmentShader=_l(e.fragmentShader,this.renderTargetCount)}onBeforeRender(e,t,i,a,n,o){this.copyCameraSettings(i)}get irradianceTexture(){return this.uniforms.irradiance_texture.value}set irradianceTexture(e){this.uniforms.irradiance_texture.value=e}get scatteringTexture(){return this.uniforms.scattering_texture.value}set scatteringTexture(e){this.uniforms.scattering_texture.value=e}get transmittanceTexture(){return this.uniforms.transmittance_texture.value}set transmittanceTexture(e){this.uniforms.transmittance_texture.value=e}get singleMieScatteringTexture(){return this.uniforms.single_mie_scattering_texture.value}set singleMieScatteringTexture(e){this.uniforms.single_mie_scattering_texture.value=e,this.combinedScatteringTextures=e==null}get higherOrderScatteringTexture(){return this.uniforms.higher_order_scattering_texture.value}set higherOrderScatteringTexture(e){this.uniforms.higher_order_scattering_texture.value=e,this.hasHigherOrderScatteringTexture=e!=null}get worldToECEFMatrix(){return this.uniforms.worldToECEFMatrix.value}get sunDirection(){return this.uniforms.sunDirection.value}get sunAngularRadius(){return this.uniforms.ATMOSPHERE.value.sun_angular_radius}set sunAngularRadius(e){this.uniforms.ATMOSPHERE.value.sun_angular_radius=e,this.uniforms.cosSunAngularRadius.value=Math.cos(e)}get renderTargetCount(){return this._renderTargetCount}set renderTargetCount(e){e!==this.renderTargetCount&&(this._renderTargetCount=e,this.needsUpdate=!0)}};mo([M("COMBINED_SCATTERING_TEXTURES")],tr.prototype,"combinedScatteringTextures");mo([M("HAS_HIGHER_ORDER_SCATTERING_TEXTURE")],tr.prototype,"hasHigherOrderScatteringTexture");/**
    @preserve

    Astronomy library for JavaScript (browser and Node.js).
    https://github.com/cosinekitty/astronomy

    MIT License

    Copyright (c) 2019-2023 Don Cross <cosinekitty@gmail.com>

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
*//**
 * @fileoverview Astronomy calculation library for browser scripting and Node.js.
 * @author Don Cross <cosinekitty@gmail.com>
 * @license MIT
 */const El=173.1446326846693,po=14959787069098932e-8,st=.017453292519943295,Al=365.24217,$a=new Date("2000-01-01T12:00:00Z"),We=2*Math.PI,Xe=3600*(180/Math.PI),Tt=484813681109536e-20,Rl=10800*60,Cl=2*Rl,Dl=6378.1366,Il=Dl/po,Ol=81.30056,na=.0002959122082855911,_i=2825345909524226e-22,Ei=8459715185680659e-23,Ai=1292024916781969e-23,Ri=1524358900784276e-23;function fr(r){if(!Number.isFinite(r))throw console.trace(),`Value is not a finite number: ${r}`;return r}function vt(r){return r-Math.floor(r)}var W;(function(r){r.Sun="Sun",r.Moon="Moon",r.Mercury="Mercury",r.Venus="Venus",r.Earth="Earth",r.Mars="Mars",r.Jupiter="Jupiter",r.Saturn="Saturn",r.Uranus="Uranus",r.Neptune="Neptune",r.Pluto="Pluto",r.SSB="SSB",r.EMB="EMB",r.Star1="Star1",r.Star2="Star2",r.Star3="Star3",r.Star4="Star4",r.Star5="Star5",r.Star6="Star6",r.Star7="Star7",r.Star8="Star8"})(W||(W={}));const bl=[W.Star1,W.Star2,W.Star3,W.Star4,W.Star5,W.Star6,W.Star7,W.Star8],Nl=[{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0}];function Ml(r){const e=bl.indexOf(r);return e>=0?Nl[e]:null}function fo(r){const e=Ml(r);return e&&e.dist>0?e:null}var je;(function(r){r[r.From2000=0]="From2000",r[r.Into2000=1]="Into2000"})(je||(je={}));const _t={Mercury:[[[[4.40250710144,0,0],[.40989414977,1.48302034195,26087.9031415742],[.050462942,4.47785489551,52175.8062831484],[.00855346844,1.16520322459,78263.70942472259],[.00165590362,4.11969163423,104351.61256629678],[.00034561897,.77930768443,130439.51570787099],[7583476e-11,3.71348404924,156527.41884944518]],[[26087.90313685529,0,0],[.01131199811,6.21874197797,26087.9031415742],[.00292242298,3.04449355541,52175.8062831484],[.00075775081,6.08568821653,78263.70942472259],[.00019676525,2.80965111777,104351.61256629678]]],[[[.11737528961,1.98357498767,26087.9031415742],[.02388076996,5.03738959686,52175.8062831484],[.01222839532,3.14159265359,0],[.0054325181,1.79644363964,78263.70942472259],[.0012977877,4.83232503958,104351.61256629678],[.00031866927,1.58088495658,130439.51570787099],[7963301e-11,4.60972126127,156527.41884944518]],[[.00274646065,3.95008450011,26087.9031415742],[.00099737713,3.14159265359,0]]],[[[.39528271651,0,0],[.07834131818,6.19233722598,26087.9031415742],[.00795525558,2.95989690104,52175.8062831484],[.00121281764,6.01064153797,78263.70942472259],[.00021921969,2.77820093972,104351.61256629678],[4354065e-11,5.82894543774,130439.51570787099]],[[.0021734774,4.65617158665,26087.9031415742],[.00044141826,1.42385544001,52175.8062831484]]]],Venus:[[[[3.17614666774,0,0],[.01353968419,5.59313319619,10213.285546211],[.00089891645,5.30650047764,20426.571092422],[5477194e-11,4.41630661466,7860.4193924392],[3455741e-11,2.6996444782,11790.6290886588],[2372061e-11,2.99377542079,3930.2096962196],[1317168e-11,5.18668228402,26.2983197998],[1664146e-11,4.25018630147,1577.3435424478],[1438387e-11,4.15745084182,9683.5945811164],[1200521e-11,6.15357116043,30639.856638633]],[[10213.28554621638,0,0],[.00095617813,2.4640651111,10213.285546211],[7787201e-11,.6247848222,20426.571092422]]],[[[.05923638472,.26702775812,10213.285546211],[.00040107978,1.14737178112,20426.571092422],[.00032814918,3.14159265359,0]],[[.00287821243,1.88964962838,10213.285546211]]],[[[.72334820891,0,0],[.00489824182,4.02151831717,10213.285546211],[1658058e-11,4.90206728031,20426.571092422],[1378043e-11,1.12846591367,11790.6290886588],[1632096e-11,2.84548795207,7860.4193924392],[498395e-11,2.58682193892,9683.5945811164],[221985e-11,2.01346696541,19367.1891622328],[237454e-11,2.55136053886,15720.8387848784]],[[.00034551041,.89198706276,10213.285546211]]]],Earth:[[[[1.75347045673,0,0],[.03341656453,4.66925680415,6283.0758499914],[.00034894275,4.62610242189,12566.1516999828],[3417572e-11,2.82886579754,3.523118349],[3497056e-11,2.74411783405,5753.3848848968],[3135899e-11,3.62767041756,77713.7714681205],[2676218e-11,4.41808345438,7860.4193924392],[2342691e-11,6.13516214446,3930.2096962196],[1273165e-11,2.03709657878,529.6909650946],[1324294e-11,.74246341673,11506.7697697936],[901854e-11,2.04505446477,26.2983197998],[1199167e-11,1.10962946234,1577.3435424478],[857223e-11,3.50849152283,398.1490034082],[779786e-11,1.17882681962,5223.6939198022],[99025e-10,5.23268072088,5884.9268465832],[753141e-11,2.53339052847,5507.5532386674],[505267e-11,4.58292599973,18849.2275499742],[492392e-11,4.20505711826,775.522611324],[356672e-11,2.91954114478,.0673103028],[284125e-11,1.89869240932,796.2980068164],[242879e-11,.34481445893,5486.777843175],[317087e-11,5.84901948512,11790.6290886588],[271112e-11,.31486255375,10977.078804699],[206217e-11,4.80646631478,2544.3144198834],[205478e-11,1.86953770281,5573.1428014331],[202318e-11,2.45767790232,6069.7767545534],[126225e-11,1.08295459501,20.7753954924],[155516e-11,.83306084617,213.299095438]],[[6283.0758499914,0,0],[.00206058863,2.67823455808,6283.0758499914],[4303419e-11,2.63512233481,12566.1516999828]],[[8721859e-11,1.07253635559,6283.0758499914]]],[[],[[.00227777722,3.4137662053,6283.0758499914],[3805678e-11,3.37063423795,12566.1516999828]]],[[[1.00013988784,0,0],[.01670699632,3.09846350258,6283.0758499914],[.00013956024,3.05524609456,12566.1516999828],[308372e-10,5.19846674381,77713.7714681205],[1628463e-11,1.17387558054,5753.3848848968],[1575572e-11,2.84685214877,7860.4193924392],[924799e-11,5.45292236722,11506.7697697936],[542439e-11,4.56409151453,3930.2096962196],[47211e-10,3.66100022149,5884.9268465832],[85831e-11,1.27079125277,161000.6857376741],[57056e-11,2.01374292245,83996.84731811189],[55736e-11,5.2415979917,71430.69561812909],[174844e-11,3.01193636733,18849.2275499742],[243181e-11,4.2734953079,11790.6290886588]],[[.00103018607,1.10748968172,6283.0758499914],[1721238e-11,1.06442300386,12566.1516999828]],[[4359385e-11,5.78455133808,6283.0758499914]]]],Mars:[[[[6.20347711581,0,0],[.18656368093,5.0503710027,3340.6124266998],[.01108216816,5.40099836344,6681.2248533996],[.00091798406,5.75478744667,10021.8372800994],[.00027744987,5.97049513147,3.523118349],[.00010610235,2.93958560338,2281.2304965106],[.00012315897,.84956094002,2810.9214616052],[8926784e-11,4.15697846427,.0172536522],[8715691e-11,6.11005153139,13362.4497067992],[6797556e-11,.36462229657,398.1490034082],[7774872e-11,3.33968761376,5621.8429232104],[3575078e-11,1.6618650571,2544.3144198834],[4161108e-11,.22814971327,2942.4634232916],[3075252e-11,.85696614132,191.4482661116],[2628117e-11,.64806124465,3337.0893083508],[2937546e-11,6.07893711402,.0673103028],[2389414e-11,5.03896442664,796.2980068164],[2579844e-11,.02996736156,3344.1355450488],[1528141e-11,1.14979301996,6151.533888305],[1798806e-11,.65634057445,529.6909650946],[1264357e-11,3.62275122593,5092.1519581158],[1286228e-11,3.06796065034,2146.1654164752],[1546404e-11,2.91579701718,1751.539531416],[1024902e-11,3.69334099279,8962.4553499102],[891566e-11,.18293837498,16703.062133499],[858759e-11,2.4009381194,2914.0142358238],[832715e-11,2.46418619474,3340.5951730476],[83272e-10,4.49495782139,3340.629680352],[712902e-11,3.66335473479,1059.3819301892],[748723e-11,3.82248614017,155.4203994342],[723861e-11,.67497311481,3738.761430108],[635548e-11,2.92182225127,8432.7643848156],[655162e-11,.48864064125,3127.3133312618],[550474e-11,3.81001042328,.9803210682],[55275e-10,4.47479317037,1748.016413067],[425966e-11,.55364317304,6283.0758499914],[415131e-11,.49662285038,213.299095438],[472167e-11,3.62547124025,1194.4470102246],[306551e-11,.38052848348,6684.7479717486],[312141e-11,.99853944405,6677.7017350506],[293198e-11,4.22131299634,20.7753954924],[302375e-11,4.48618007156,3532.0606928114],[274027e-11,.54222167059,3340.545116397],[281079e-11,5.88163521788,1349.8674096588],[231183e-11,1.28242156993,3870.3033917944],[283602e-11,5.7688543494,3149.1641605882],[236117e-11,5.75503217933,3333.498879699],[274033e-11,.13372524985,3340.6797370026],[299395e-11,2.78323740866,6254.6266625236]],[[3340.61242700512,0,0],[.01457554523,3.60433733236,3340.6124266998],[.00168414711,3.92318567804,6681.2248533996],[.00020622975,4.26108844583,10021.8372800994],[3452392e-11,4.7321039319,3.523118349],[2586332e-11,4.60670058555,13362.4497067992],[841535e-11,4.45864030426,2281.2304965106]],[[.00058152577,2.04961712429,3340.6124266998],[.00013459579,2.45738706163,6681.2248533996]]],[[[.03197134986,3.76832042431,3340.6124266998],[.00298033234,4.10616996305,6681.2248533996],[.00289104742,0,0],[.00031365539,4.4465105309,10021.8372800994],[34841e-9,4.7881254926,13362.4497067992]],[[.00217310991,6.04472194776,3340.6124266998],[.00020976948,3.14159265359,0],[.00012834709,1.60810667915,6681.2248533996]]],[[[1.53033488271,0,0],[.1418495316,3.47971283528,3340.6124266998],[.00660776362,3.81783443019,6681.2248533996],[.00046179117,4.15595316782,10021.8372800994],[8109733e-11,5.55958416318,2810.9214616052],[7485318e-11,1.77239078402,5621.8429232104],[5523191e-11,1.3643630377,2281.2304965106],[382516e-10,4.49407183687,13362.4497067992],[2306537e-11,.09081579001,2544.3144198834],[1999396e-11,5.36059617709,3337.0893083508],[2484394e-11,4.9254563992,2942.4634232916],[1960195e-11,4.74249437639,3344.1355450488],[1167119e-11,2.11260868341,5092.1519581158],[1102816e-11,5.00908403998,398.1490034082],[899066e-11,4.40791133207,529.6909650946],[992252e-11,5.83861961952,6151.533888305],[807354e-11,2.10217065501,1059.3819301892],[797915e-11,3.44839203899,796.2980068164],[740975e-11,1.49906336885,2146.1654164752]],[[.01107433345,2.03250524857,3340.6124266998],[.00103175887,2.37071847807,6681.2248533996],[128772e-9,0,0],[.0001081588,2.70888095665,10021.8372800994]],[[.00044242249,.47930604954,3340.6124266998],[8138042e-11,.86998389204,6681.2248533996]]]],Jupiter:[[[[.59954691494,0,0],[.09695898719,5.06191793158,529.6909650946],[.00573610142,1.44406205629,7.1135470008],[.00306389205,5.41734730184,1059.3819301892],[.00097178296,4.14264726552,632.7837393132],[.00072903078,3.64042916389,522.5774180938],[.00064263975,3.41145165351,103.0927742186],[.00039806064,2.29376740788,419.4846438752],[.00038857767,1.27231755835,316.3918696566],[.00027964629,1.7845459182,536.8045120954],[.0001358973,5.7748104079,1589.0728952838],[8246349e-11,3.5822792584,206.1855484372],[8768704e-11,3.63000308199,949.1756089698],[7368042e-11,5.0810119427,735.8765135318],[626315e-10,.02497628807,213.299095438],[6114062e-11,4.51319998626,1162.4747044078],[4905396e-11,1.32084470588,110.2063212194],[5305285e-11,1.30671216791,14.2270940016],[5305441e-11,4.18625634012,1052.2683831884],[4647248e-11,4.69958103684,3.9321532631],[3045023e-11,4.31676431084,426.598190876],[2609999e-11,1.56667394063,846.0828347512],[2028191e-11,1.06376530715,3.1813937377],[1764763e-11,2.14148655117,1066.49547719],[1722972e-11,3.88036268267,1265.5674786264],[1920945e-11,.97168196472,639.897286314],[1633223e-11,3.58201833555,515.463871093],[1431999e-11,4.29685556046,625.6701923124],[973272e-11,4.09764549134,95.9792272178]],[[529.69096508814,0,0],[.00489503243,4.2208293947,529.6909650946],[.00228917222,6.02646855621,7.1135470008],[.00030099479,4.54540782858,1059.3819301892],[.0002072092,5.45943156902,522.5774180938],[.00012103653,.16994816098,536.8045120954],[6067987e-11,4.42422292017,103.0927742186],[5433968e-11,3.98480737746,419.4846438752],[4237744e-11,5.89008707199,14.2270940016]],[[.00047233601,4.32148536482,7.1135470008],[.00030649436,2.929777887,529.6909650946],[.00014837605,3.14159265359,0]]],[[[.02268615702,3.55852606721,529.6909650946],[.00109971634,3.90809347197,1059.3819301892],[.00110090358,0,0],[8101428e-11,3.60509572885,522.5774180938],[6043996e-11,4.25883108339,1589.0728952838],[6437782e-11,.30627119215,536.8045120954]],[[.00078203446,1.52377859742,529.6909650946]]],[[[5.20887429326,0,0],[.25209327119,3.49108639871,529.6909650946],[.00610599976,3.84115365948,1059.3819301892],[.00282029458,2.57419881293,632.7837393132],[.00187647346,2.07590383214,522.5774180938],[.00086792905,.71001145545,419.4846438752],[.00072062974,.21465724607,536.8045120954],[.00065517248,5.9799588479,316.3918696566],[.00029134542,1.67759379655,103.0927742186],[.00030135335,2.16132003734,949.1756089698],[.00023453271,3.54023522184,735.8765135318],[.00022283743,4.19362594399,1589.0728952838],[.00023947298,.2745803748,7.1135470008],[.00013032614,2.96042965363,1162.4747044078],[970336e-10,1.90669633585,206.1855484372],[.00012749023,2.71550286592,1052.2683831884],[7057931e-11,2.18184839926,1265.5674786264],[6137703e-11,6.26418240033,846.0828347512],[2616976e-11,2.00994012876,1581.959348283]],[[.0127180152,2.64937512894,529.6909650946],[.00061661816,3.00076460387,1059.3819301892],[.00053443713,3.89717383175,522.5774180938],[.00031185171,4.88276958012,536.8045120954],[.00041390269,0,0]]]],Saturn:[[[[.87401354025,0,0],[.11107659762,3.96205090159,213.299095438],[.01414150957,4.58581516874,7.1135470008],[.00398379389,.52112032699,206.1855484372],[.00350769243,3.30329907896,426.598190876],[.00206816305,.24658372002,103.0927742186],[792713e-9,3.84007056878,220.4126424388],[.00023990355,4.66976924553,110.2063212194],[.00016573588,.43719228296,419.4846438752],[.00014906995,5.76903183869,316.3918696566],[.0001582029,.93809155235,632.7837393132],[.00014609559,1.56518472,3.9321532631],[.00013160301,4.44891291899,14.2270940016],[.00015053543,2.71669915667,639.897286314],[.00013005299,5.98119023644,11.0457002639],[.00010725067,3.12939523827,202.2533951741],[5863206e-11,.23656938524,529.6909650946],[5227757e-11,4.20783365759,3.1813937377],[6126317e-11,1.76328667907,277.0349937414],[5019687e-11,3.17787728405,433.7117378768],[459255e-10,.61977744975,199.0720014364],[4005867e-11,2.24479718502,63.7358983034],[2953796e-11,.98280366998,95.9792272178],[387367e-10,3.22283226966,138.5174968707],[2461186e-11,2.03163875071,735.8765135318],[3269484e-11,.77492638211,949.1756089698],[1758145e-11,3.2658010994,522.5774180938],[1640172e-11,5.5050445305,846.0828347512],[1391327e-11,4.02333150505,323.5054166574],[1580648e-11,4.37265307169,309.2783226558],[1123498e-11,2.83726798446,415.5524906121],[1017275e-11,3.71700135395,227.5261894396],[848642e-11,3.1915017083,209.3669421749]],[[213.2990952169,0,0],[.01297370862,1.82834923978,213.299095438],[.00564345393,2.88499717272,7.1135470008],[.00093734369,1.06311793502,426.598190876],[.00107674962,2.27769131009,206.1855484372],[.00040244455,2.04108104671,220.4126424388],[.00019941774,1.2795439047,103.0927742186],[.00010511678,2.7488034213,14.2270940016],[6416106e-11,.38238295041,639.897286314],[4848994e-11,2.43037610229,419.4846438752],[4056892e-11,2.92133209468,110.2063212194],[3768635e-11,3.6496533078,3.9321532631]],[[.0011644133,1.17988132879,7.1135470008],[.00091841837,.0732519584,213.299095438],[.00036661728,0,0],[.00015274496,4.06493179167,206.1855484372]]],[[[.04330678039,3.60284428399,213.299095438],[.00240348302,2.85238489373,426.598190876],[.00084745939,0,0],[.00030863357,3.48441504555,220.4126424388],[.00034116062,.57297307557,206.1855484372],[.0001473407,2.11846596715,639.897286314],[9916667e-11,5.79003188904,419.4846438752],[6993564e-11,4.7360468972,7.1135470008],[4807588e-11,5.43305312061,316.3918696566]],[[.00198927992,4.93901017903,213.299095438],[.00036947916,3.14159265359,0],[.00017966989,.5197943111,426.598190876]]],[[[9.55758135486,0,0],[.52921382865,2.39226219573,213.299095438],[.01873679867,5.2354960466,206.1855484372],[.01464663929,1.64763042902,426.598190876],[.00821891141,5.93520042303,316.3918696566],[.00547506923,5.0153261898,103.0927742186],[.0037168465,2.27114821115,220.4126424388],[.00361778765,3.13904301847,7.1135470008],[.00140617506,5.70406606781,632.7837393132],[.00108974848,3.29313390175,110.2063212194],[.00069006962,5.94099540992,419.4846438752],[.00061053367,.94037691801,639.897286314],[.00048913294,1.55733638681,202.2533951741],[.00034143772,.19519102597,277.0349937414],[.00032401773,5.47084567016,949.1756089698],[.00020936596,.46349251129,735.8765135318],[9796004e-11,5.20477537945,1265.5674786264],[.00011993338,5.98050967385,846.0828347512],[208393e-9,1.52102476129,433.7117378768],[.00015298404,3.0594381494,529.6909650946],[6465823e-11,.17732249942,1052.2683831884],[.00011380257,1.7310542704,522.5774180938],[3419618e-11,4.94550542171,1581.959348283]],[[.0618298134,.2584351148,213.299095438],[.00506577242,.71114625261,206.1855484372],[.00341394029,5.79635741658,426.598190876],[.00188491195,.47215589652,220.4126424388],[.00186261486,3.14159265359,0],[.00143891146,1.40744822888,7.1135470008]],[[.00436902572,4.78671677509,213.299095438]]]],Uranus:[[[[5.48129294297,0,0],[.09260408234,.89106421507,74.7815985673],[.01504247898,3.6271926092,1.4844727083],[.00365981674,1.89962179044,73.297125859],[.00272328168,3.35823706307,149.5631971346],[.00070328461,5.39254450063,63.7358983034],[.00068892678,6.09292483287,76.2660712756],[.00061998615,2.26952066061,2.9689454166],[.00061950719,2.85098872691,11.0457002639],[.0002646877,3.14152083966,71.8126531507],[.00025710476,6.11379840493,454.9093665273],[.0002107885,4.36059339067,148.0787244263],[.00017818647,1.74436930289,36.6485629295],[.00014613507,4.73732166022,3.9321532631],[.00011162509,5.8268179635,224.3447957019],[.0001099791,.48865004018,138.5174968707],[9527478e-11,2.95516862826,35.1640902212],[7545601e-11,5.236265824,109.9456887885],[4220241e-11,3.23328220918,70.8494453042],[40519e-9,2.277550173,151.0476698429],[3354596e-11,1.0654900738,4.4534181249],[2926718e-11,4.62903718891,9.5612275556],[349034e-10,5.48306144511,146.594251718],[3144069e-11,4.75199570434,77.7505439839],[2922333e-11,5.35235361027,85.8272988312],[2272788e-11,4.36600400036,70.3281804424],[2051219e-11,1.51773566586,.1118745846],[2148602e-11,.60745949945,38.1330356378],[1991643e-11,4.92437588682,277.0349937414],[1376226e-11,2.04283539351,65.2203710117],[1666902e-11,3.62744066769,380.12776796],[1284107e-11,3.11347961505,202.2533951741],[1150429e-11,.93343589092,3.1813937377],[1533221e-11,2.58594681212,52.6901980395],[1281604e-11,.54271272721,222.8603229936],[1372139e-11,4.19641530878,111.4301614968],[1221029e-11,.1990065003,108.4612160802],[946181e-11,1.19253165736,127.4717966068],[1150989e-11,4.17898916639,33.6796175129]],[[74.7815986091,0,0],[.00154332863,5.24158770553,74.7815985673],[.00024456474,1.71260334156,1.4844727083],[9258442e-11,.4282973235,11.0457002639],[8265977e-11,1.50218091379,63.7358983034],[915016e-10,1.41213765216,149.5631971346]]],[[[.01346277648,2.61877810547,74.7815985673],[623414e-9,5.08111189648,149.5631971346],[.00061601196,3.14159265359,0],[9963722e-11,1.61603805646,76.2660712756],[992616e-10,.57630380333,73.297125859]],[[.00034101978,.01321929936,74.7815985673]]],[[[19.21264847206,0,0],[.88784984413,5.60377527014,74.7815985673],[.03440836062,.32836099706,73.297125859],[.0205565386,1.7829515933,149.5631971346],[.0064932241,4.52247285911,76.2660712756],[.00602247865,3.86003823674,63.7358983034],[.00496404167,1.40139935333,454.9093665273],[.00338525369,1.58002770318,138.5174968707],[.00243509114,1.57086606044,71.8126531507],[.00190522303,1.99809394714,1.4844727083],[.00161858838,2.79137786799,148.0787244263],[.00143706183,1.38368544947,11.0457002639],[.00093192405,.17437220467,36.6485629295],[.00071424548,4.24509236074,224.3447957019],[.00089806014,3.66105364565,109.9456887885],[.00039009723,1.66971401684,70.8494453042],[.00046677296,1.39976401694,35.1640902212],[.00039025624,3.36234773834,277.0349937414],[.00036755274,3.88649278513,146.594251718],[.00030348723,.70100838798,151.0476698429],[.00029156413,3.180563367,77.7505439839],[.00022637073,.72518687029,529.6909650946],[.00011959076,1.7504339214,984.6003316219],[.00025620756,5.25656086672,380.12776796]],[[.01479896629,3.67205697578,74.7815985673]]]],Neptune:[[[[5.31188633046,0,0],[.0179847553,2.9010127389,38.1330356378],[.01019727652,.48580922867,1.4844727083],[.00124531845,4.83008090676,36.6485629295],[.00042064466,5.41054993053,2.9689454166],[.00037714584,6.09221808686,35.1640902212],[.00033784738,1.24488874087,76.2660712756],[.00016482741,7727998e-11,491.5579294568],[9198584e-11,4.93747051954,39.6175083461],[899425e-10,.27462171806,175.1660598002]],[[38.13303563957,0,0],[.00016604172,4.86323329249,1.4844727083],[.00015744045,2.27887427527,38.1330356378]]],[[[.03088622933,1.44104372644,38.1330356378],[.00027780087,5.91271884599,76.2660712756],[.00027623609,0,0],[.00015355489,2.52123799551,36.6485629295],[.00015448133,3.50877079215,39.6175083461]]],[[[30.07013205828,0,0],[.27062259632,1.32999459377,38.1330356378],[.01691764014,3.25186135653,36.6485629295],[.00807830553,5.18592878704,1.4844727083],[.0053776051,4.52113935896,35.1640902212],[.00495725141,1.5710564165,491.5579294568],[.00274571975,1.84552258866,175.1660598002],[.0001201232,1.92059384991,1021.2488945514],[.00121801746,5.79754470298,76.2660712756],[.00100896068,.3770272493,73.297125859],[.00135134092,3.37220609835,39.6175083461],[7571796e-11,1.07149207335,388.4651552382]]]]};function Ll(r){var e,t,i,a,n,o,s;const c=2e3+(r-14)/Al;return c<-500?(e=(c-1820)/100,-20+32*e*e):c<500?(e=c/100,t=e*e,i=e*t,a=t*t,n=t*i,o=i*i,10583.6-1014.41*e+33.78311*t-5.952053*i-.1798452*a+.022174192*n+.0090316521*o):c<1600?(e=(c-1e3)/100,t=e*e,i=e*t,a=t*t,n=t*i,o=i*i,1574.2-556.01*e+71.23472*t+.319781*i-.8503463*a-.005050998*n+.0083572073*o):c<1700?(e=c-1600,t=e*e,i=e*t,120-.9808*e-.01532*t+i/7129):c<1800?(e=c-1700,t=e*e,i=e*t,a=t*t,8.83+.1603*e-.0059285*t+13336e-8*i-a/1174e3):c<1860?(e=c-1800,t=e*e,i=e*t,a=t*t,n=t*i,o=i*i,s=i*a,13.72-.332447*e+.0068612*t+.0041116*i-37436e-8*a+121272e-10*n-1699e-10*o+875e-12*s):c<1900?(e=c-1860,t=e*e,i=e*t,a=t*t,n=t*i,7.62+.5737*e-.251754*t+.01680668*i-.0004473624*a+n/233174):c<1920?(e=c-1900,t=e*e,i=e*t,a=t*t,-2.79+1.494119*e-.0598939*t+.0061966*i-197e-6*a):c<1941?(e=c-1920,t=e*e,i=e*t,21.2+.84493*e-.0761*t+.0020936*i):c<1961?(e=c-1950,t=e*e,i=e*t,29.07+.407*e-t/233+i/2547):c<1986?(e=c-1975,t=e*e,i=e*t,45.45+1.067*e-t/260-i/718):c<2005?(e=c-2e3,t=e*e,i=e*t,a=t*t,n=t*i,63.86+.3345*e-.060374*t+.0017275*i+651814e-9*a+2373599e-11*n):c<2050?(e=c-2e3,62.92+.32217*e+.005589*e*e):c<2150?(e=(c-1820)/100,-20+32*e*e-.5628*(2150-c)):(e=(c-1820)/100,-20+32*e*e)}let Pl=Ll;function ja(r){return r+Pl(r)/86400}class et{constructor(e){if(e instanceof et){this.date=e.date,this.ut=e.ut,this.tt=e.tt;return}const t=1e3*3600*24;if(e instanceof Date&&Number.isFinite(e.getTime())){this.date=e,this.ut=(e.getTime()-$a.getTime())/t,this.tt=ja(this.ut);return}if(Number.isFinite(e)){this.date=new Date($a.getTime()+e*t),this.ut=e,this.tt=ja(this.ut);return}throw"Argument must be a Date object, an AstroTime object, or a numeric UTC Julian date."}static FromTerrestrialTime(e){let t=new et(e);for(;;){const i=e-t.tt;if(Math.abs(i)<1e-12)return t;t=t.AddDays(i)}}toString(){return this.date.toISOString()}AddDays(e){return new et(this.ut+e)}}function ht(r){return r instanceof et?r:new et(r)}function Ul(r){function e(p){return p%Cl*Tt}const t=r.tt/36525,i=e(128710479305e-5+t*1295965810481e-4),a=e(335779.526232+t*17395272628478e-4),n=e(107226070369e-5+t*1602961601209e-3),o=e(450160.398036-t*69628905431e-4);let s=Math.sin(o),c=Math.cos(o),u=(-172064161-174666*t)*s+33386*c,l=(92052331+9086*t)*c+15377*s,m=2*(a-n+o);return s=Math.sin(m),c=Math.cos(m),u+=(-13170906-1675*t)*s-13696*c,l+=(5730336-3015*t)*c-4587*s,m=2*(a+o),s=Math.sin(m),c=Math.cos(m),u+=(-2276413-234*t)*s+2796*c,l+=(978459-485*t)*c+1374*s,m=2*o,s=Math.sin(m),c=Math.cos(m),u+=(2074554+207*t)*s-698*c,l+=(-897492+470*t)*c-291*s,s=Math.sin(i),c=Math.cos(i),u+=(1475877-3633*t)*s+11817*c,l+=(73871-184*t)*c-1924*s,{dpsi:-135e-6+u*1e-7,deps:388e-6+l*1e-7}}function vo(r){var e=r.tt/36525,t=((((-434e-10*e-576e-9)*e+.0020034)*e-1831e-7)*e-46.836769)*e+84381.406;return t/3600}var cr;function go(r){if(!cr||Math.abs(cr.tt-r.tt)>1e-6){const e=Ul(r),t=vo(r),i=t+e.deps/3600;cr={tt:r.tt,dpsi:e.dpsi,deps:e.deps,ee:e.dpsi*Math.cos(t*st)/15,mobl:t,tobl:i}}return cr}function Hl(r,e){const t=r*st,i=Math.cos(t),a=Math.sin(t);return[e[0],e[1]*i-e[2]*a,e[1]*a+e[2]*i]}function Fl(r,e){return Hl(vo(r),e)}function zl(r){const e=r.tt/36525;function t(P,k){const K=[];let Q;for(Q=0;Q<=k-P;++Q)K.push(0);return{min:P,array:K}}function i(P,k,K,Q){const ne=[];for(let qe=0;qe<=k-P;++qe)ne.push(t(K,Q));return{min:P,array:ne}}function a(P,k,K){const Q=P.array[k-P.min];return Q.array[K-Q.min]}function n(P,k,K,Q){const ne=P.array[k-P.min];ne.array[K-ne.min]=Q}let o,s,c,u,l,m,p,g,y,x,T,D,H,L,C,A,N,j,de,te,Ie,Oe,ge,tt=i(-6,6,1,4),rt=i(-6,6,1,4);function Ue(P,k){return a(tt,P,k)}function we(P,k){return a(rt,P,k)}function E(P,k,K){return n(tt,P,k,K)}function d(P,k,K){return n(rt,P,k,K)}function xe(P,k,K,Q,ne){ne(P*K-k*Q,k*K+P*Q)}function S(P){return Math.sin(We*P)}p=e*e,y=0,ge=0,T=0,D=3422.7;var ye=S(.19833+.05611*e),Ye=S(.27869+.04508*e),Br=S(.16827-.36903*e),Vr=S(.34734-5.37261*e),$r=S(.10498-5.37899*e),rr=S(.42681-.41855*e),Bo=S(.14943-5.37511*e);for(j=.84*ye+.31*Ye+14.27*Br+7.26*Vr+.28*$r+.24*rr,de=2.94*ye+.31*Ye+14.27*Br+9.34*Vr+1.12*$r+.83*rr,te=-6.4*ye-1.89*rr,Ie=.21*ye+.31*Ye+14.27*Br-88.7*Vr-15.3*$r+.24*rr-1.86*Bo,Oe=j-te,g=-3332e-9*S(.59734-5.37261*e)-539e-9*S(.35498-5.37899*e)-64e-9*S(.39943-5.37511*e),H=We*vt(.60643382+1336.85522467*e-313e-8*p)+j/Xe,L=We*vt(.37489701+1325.55240982*e+2565e-8*p)+de/Xe,C=We*vt(.99312619+99.99735956*e-44e-8*p)+te/Xe,A=We*vt(.25909118+1342.2278298*e-892e-8*p)+Ie/Xe,N=We*vt(.82736186+1236.85308708*e-397e-8*p)+Oe/Xe,l=1;l<=4;++l){switch(l){case 1:c=L,s=4,u=1.000002208;break;case 2:c=C,s=3,u=.997504612-.002495388*e;break;case 3:c=A,s=4,u=1.000002708+139.978*g;break;case 4:c=N,s=6,u=1;break;default:throw`Internal error: I = ${l}`}for(E(0,l,1),E(1,l,Math.cos(c)*u),d(0,l,0),d(1,l,Math.sin(c)*u),m=2;m<=s;++m)xe(Ue(m-1,l),we(m-1,l),Ue(1,l),we(1,l),(P,k)=>(E(m,l,P),d(m,l,k)));for(m=1;m<=s;++m)E(-m,l,Ue(m,l)),d(-m,l,-we(m,l))}function pa(P,k,K,Q){for(var ne={x:1,y:0},qe=[0,P,k,K,Q],He=1;He<=4;++He)qe[He]!==0&&xe(ne.x,ne.y,Ue(qe[He],He),we(qe[He],He),(jr,mt)=>(ne.x=jr,ne.y=mt));return ne}function v(P,k,K,Q,ne,qe,He,jr){var mt=pa(ne,qe,He,jr);y+=P*mt.y,ge+=k*mt.y,T+=K*mt.x,D+=Q*mt.x}v(13.902,14.06,-.001,.2607,0,0,0,4),v(.403,-4.01,.394,.0023,0,0,0,3),v(2369.912,2373.36,.601,28.2333,0,0,0,2),v(-125.154,-112.79,-.725,-.9781,0,0,0,1),v(1.979,6.98,-.445,.0433,1,0,0,4),v(191.953,192.72,.029,3.0861,1,0,0,2),v(-8.466,-13.51,.455,-.1093,1,0,0,1),v(22639.5,22609.07,.079,186.5398,1,0,0,0),v(18.609,3.59,-.094,.0118,1,0,0,-1),v(-4586.465,-4578.13,-.077,34.3117,1,0,0,-2),v(3.215,5.44,.192,-.0386,1,0,0,-3),v(-38.428,-38.64,.001,.6008,1,0,0,-4),v(-.393,-1.43,-.092,.0086,1,0,0,-6),v(-.289,-1.59,.123,-.0053,0,1,0,4),v(-24.42,-25.1,.04,-.3,0,1,0,2),v(18.023,17.93,.007,.1494,0,1,0,1),v(-668.146,-126.98,-1.302,-.3997,0,1,0,0),v(.56,.32,-.001,-.0037,0,1,0,-1),v(-165.145,-165.06,.054,1.9178,0,1,0,-2),v(-1.877,-6.46,-.416,.0339,0,1,0,-4),v(.213,1.02,-.074,.0054,2,0,0,4),v(14.387,14.78,-.017,.2833,2,0,0,2),v(-.586,-1.2,.054,-.01,2,0,0,1),v(769.016,767.96,.107,10.1657,2,0,0,0),v(1.75,2.01,-.018,.0155,2,0,0,-1),v(-211.656,-152.53,5.679,-.3039,2,0,0,-2),v(1.225,.91,-.03,-.0088,2,0,0,-3),v(-30.773,-34.07,-.308,.3722,2,0,0,-4),v(-.57,-1.4,-.074,.0109,2,0,0,-6),v(-2.921,-11.75,.787,-.0484,1,1,0,2),v(1.267,1.52,-.022,.0164,1,1,0,1),v(-109.673,-115.18,.461,-.949,1,1,0,0),v(-205.962,-182.36,2.056,1.4437,1,1,0,-2),v(.233,.36,.012,-.0025,1,1,0,-3),v(-4.391,-9.66,-.471,.0673,1,1,0,-4),v(.283,1.53,-.111,.006,1,-1,0,4),v(14.577,31.7,-1.54,.2302,1,-1,0,2),v(147.687,138.76,.679,1.1528,1,-1,0,0),v(-1.089,.55,.021,0,1,-1,0,-1),v(28.475,23.59,-.443,-.2257,1,-1,0,-2),v(-.276,-.38,-.006,-.0036,1,-1,0,-3),v(.636,2.27,.146,-.0102,1,-1,0,-4),v(-.189,-1.68,.131,-.0028,0,2,0,2),v(-7.486,-.66,-.037,-.0086,0,2,0,0),v(-8.096,-16.35,-.74,.0918,0,2,0,-2),v(-5.741,-.04,0,-9e-4,0,0,2,2),v(.255,0,0,0,0,0,2,1),v(-411.608,-.2,0,-.0124,0,0,2,0),v(.584,.84,0,.0071,0,0,2,-1),v(-55.173,-52.14,0,-.1052,0,0,2,-2),v(.254,.25,0,-.0017,0,0,2,-3),v(.025,-1.67,0,.0031,0,0,2,-4),v(1.06,2.96,-.166,.0243,3,0,0,2),v(36.124,50.64,-1.3,.6215,3,0,0,0),v(-13.193,-16.4,.258,-.1187,3,0,0,-2),v(-1.187,-.74,.042,.0074,3,0,0,-4),v(-.293,-.31,-.002,.0046,3,0,0,-6),v(-.29,-1.45,.116,-.0051,2,1,0,2),v(-7.649,-10.56,.259,-.1038,2,1,0,0),v(-8.627,-7.59,.078,-.0192,2,1,0,-2),v(-2.74,-2.54,.022,.0324,2,1,0,-4),v(1.181,3.32,-.212,.0213,2,-1,0,2),v(9.703,11.67,-.151,.1268,2,-1,0,0),v(-.352,-.37,.001,-.0028,2,-1,0,-1),v(-2.494,-1.17,-.003,-.0017,2,-1,0,-2),v(.36,.2,-.012,-.0043,2,-1,0,-4),v(-1.167,-1.25,.008,-.0106,1,2,0,0),v(-7.412,-6.12,.117,.0484,1,2,0,-2),v(-.311,-.65,-.032,.0044,1,2,0,-4),v(.757,1.82,-.105,.0112,1,-2,0,2),v(2.58,2.32,.027,.0196,1,-2,0,0),v(2.533,2.4,-.014,-.0212,1,-2,0,-2),v(-.344,-.57,-.025,.0036,0,3,0,-2),v(-.992,-.02,0,0,1,0,2,2),v(-45.099,-.02,0,-.001,1,0,2,0),v(-.179,-9.52,0,-.0833,1,0,2,-2),v(-.301,-.33,0,.0014,1,0,2,-4),v(-6.382,-3.37,0,-.0481,1,0,-2,2),v(39.528,85.13,0,-.7136,1,0,-2,0),v(9.366,.71,0,-.0112,1,0,-2,-2),v(.202,.02,0,0,1,0,-2,-4),v(.415,.1,0,.0013,0,1,2,0),v(-2.152,-2.26,0,-.0066,0,1,2,-2),v(-1.44,-1.3,0,.0014,0,1,-2,2),v(.384,-.04,0,0,0,1,-2,-2),v(1.938,3.6,-.145,.0401,4,0,0,0),v(-.952,-1.58,.052,-.013,4,0,0,-2),v(-.551,-.94,.032,-.0097,3,1,0,0),v(-.482,-.57,.005,-.0045,3,1,0,-2),v(.681,.96,-.026,.0115,3,-1,0,0),v(-.297,-.27,.002,-9e-4,2,2,0,-2),v(.254,.21,-.003,0,2,-2,0,-2),v(-.25,-.22,.004,.0014,1,3,0,-2),v(-3.996,0,0,4e-4,2,0,2,0),v(.557,-.75,0,-.009,2,0,2,-2),v(-.459,-.38,0,-.0053,2,0,-2,2),v(-1.298,.74,0,4e-4,2,0,-2,0),v(.538,1.14,0,-.0141,2,0,-2,-2),v(.263,.02,0,0,1,1,2,0),v(.426,.07,0,-6e-4,1,1,-2,-2),v(-.304,.03,0,3e-4,1,-1,2,0),v(-.372,-.19,0,-.0027,1,-1,-2,2),v(.418,0,0,0,0,0,4,0),v(-.33,-.04,0,0,3,0,2,0);function be(P,k,K,Q,ne){return P*pa(k,K,Q,ne).y}x=0,x+=be(-526.069,0,0,1,-2),x+=be(-3.352,0,0,1,-4),x+=be(44.297,1,0,1,-2),x+=be(-6,1,0,1,-4),x+=be(20.599,-1,0,1,0),x+=be(-30.598,-1,0,1,-2),x+=be(-24.649,-2,0,1,0),x+=be(-2,-2,0,1,-2),x+=be(-22.571,0,1,1,-2),x+=be(10.985,0,-1,1,-2),y+=.82*S(.7736-62.5512*e)+.31*S(.0466-125.1025*e)+.35*S(.5785-25.1042*e)+.66*S(.4591+1335.8075*e)+.64*S(.313-91.568*e)+1.14*S(.148+1331.2898*e)+.21*S(.5918+1056.5859*e)+.44*S(.5784+1322.8595*e)+.24*S(.2275-5.7374*e)+.28*S(.2965+2.6929*e)+.33*S(.3132+6.3368*e),o=A+ge/Xe;let Vo=(1.000002708+139.978*g)*(18518.511+1.189+T)*Math.sin(o)-6.24*Math.sin(3*o)+x;return{geo_eclip_lon:We*vt((H+y/Xe)/We),geo_eclip_lat:Math.PI/(180*3600)*Vo,distance_au:Xe*Il/(.999953253*D)}}function Gl(r,e){return[r.rot[0][0]*e[0]+r.rot[1][0]*e[1]+r.rot[2][0]*e[2],r.rot[0][1]*e[0]+r.rot[1][1]*e[1]+r.rot[2][1]*e[2],r.rot[0][2]*e[0]+r.rot[1][2]*e[1]+r.rot[2][2]*e[2]]}function Wl(r,e,t){const i=yo(e,t);return Gl(i,r)}function yo(r,e){const t=r.tt/36525;let i=84381.406,a=((((-951e-10*t+132851e-9)*t-.00114045)*t-1.0790069)*t+5038.481507)*t,n=((((3337e-10*t-467e-9)*t-.00772503)*t+.0512623)*t-.025754)*t+i,o=((((-56e-9*t+170663e-9)*t-.00121197)*t-2.3814292)*t+10.556403)*t;i*=Tt,a*=Tt,n*=Tt,o*=Tt;const s=Math.sin(i),c=Math.cos(i),u=Math.sin(-a),l=Math.cos(-a),m=Math.sin(-n),p=Math.cos(-n),g=Math.sin(o),y=Math.cos(o),x=y*l-u*g*p,T=y*u*c+g*p*l*c-s*g*m,D=y*u*s+g*p*l*s+c*g*m,H=-g*l-u*y*p,L=-g*u*c+y*p*l*c-s*y*m,C=-g*u*s+y*p*l*s+c*y*m,A=u*m,N=-m*l*c-s*p,j=-m*l*s+p*c;if(e===je.Into2000)return new Ot([[x,T,D],[H,L,C],[A,N,j]]);if(e===je.From2000)return new Ot([[x,H,A],[T,L,N],[D,C,j]]);throw"Invalid precess direction"}function kl(r){const e=.779057273264+.00273781191135448*r.ut,t=r.ut%1;let i=360*((e+t)%1);return i<0&&(i+=360),i}let lr;function Bl(r){if(!lr||lr.tt!==r.tt){const e=r.tt/36525;let t=15*go(r).ee;const i=kl(r);let a=((t+.014506+((((-368e-10*e-29956e-9)*e-44e-8)*e+1.3915817)*e+4612.156534)*e)/3600+i)%360/15;a<0&&(a+=24),lr={tt:r.tt,st:a}}return lr.st}function Vl(r){const e=ht(r);return Bl(e)}function $l(r,e){const t=go(r),i=t.mobl*st,a=t.tobl*st,n=t.dpsi*Tt,o=Math.cos(i),s=Math.sin(i),c=Math.cos(a),u=Math.sin(a),l=Math.cos(n),m=Math.sin(n),p=l,g=-m*o,y=-m*s,x=m*c,T=l*o*c+s*u,D=l*s*c-o*u,H=m*u,L=l*o*u-s*c,C=l*s*u+o*c;if(e===je.From2000)return new Ot([[p,x,H],[g,T,L],[y,D,C]]);if(e===je.Into2000)return new Ot([[p,g,y],[x,T,D],[H,L,C]]);throw"Invalid precess direction"}let Re=class{constructor(e,t,i,a){this.x=e,this.y=t,this.z=i,this.t=a}Length(){return Math.hypot(this.x,this.y,this.z)}};class jl{constructor(e,t,i,a,n,o,s){this.x=e,this.y=t,this.z=i,this.vx=a,this.vy=n,this.vz=o,this.t=s}}let Yl=class{constructor(e,t,i){this.lat=fr(e),this.lon=fr(t),this.dist=fr(i)}};class Ot{constructor(e){this.rot=e}}function Ci(r){const e=ht(r),t=zl(e),i=t.distance_au*Math.cos(t.geo_eclip_lat),a=[i*Math.cos(t.geo_eclip_lon),i*Math.sin(t.geo_eclip_lon),t.distance_au*Math.sin(t.geo_eclip_lat)],n=Fl(e,a),o=Wl(n,e,je.Into2000);return new Re(o[0],o[1],o[2],e)}function Et(r,e,t){let i=1,a=0;for(let n of r){let o=0;for(let[c,u,l]of n)o+=c*Math.cos(u+e*l);let s=i*o;t&&(s%=We),a+=s,i*=e}return a}function ii(r,e){let t=1,i=0,a=0,n=0;for(let o of r){let s=0,c=0;for(let[u,l,m]of o){let p=l+e*m;s+=u*m*Math.sin(p),n>0&&(c+=u*Math.cos(p))}a+=n*i*c-t*s,i=t,t*=e,++n}return a}const Bt=365250,Di=0,Ii=1,Oi=2;function bi(r){return new ct(r[0]+44036e-11*r[1]-190919e-12*r[2],-479966e-12*r[0]+.917482137087*r[1]-.397776982902*r[2],.397776982902*r[1]+.917482137087*r[2])}function So(r,e,t){const i=t*Math.cos(e),a=Math.cos(r),n=Math.sin(r);return[i*a,i*n,t*Math.sin(e)]}function vr(r,e){const t=e.tt/Bt,i=Et(r[Di],t,!0),a=Et(r[Ii],t,!1),n=Et(r[Oi],t,!1),o=So(i,a,n);return bi(o).ToAstroVector(e)}function ql(r,e){const t=e/Bt,i=Et(r[Di],t,!0),a=Et(r[Ii],t,!1),n=Et(r[Oi],t,!1),o=ii(r[Di],t),s=ii(r[Ii],t),c=ii(r[Oi],t),u=Math.cos(i),l=Math.sin(i),m=Math.cos(a),p=Math.sin(a),g=+(c*m*u)-n*p*u*s-n*m*l*o,y=+(c*m*l)-n*p*l*s+n*m*u*o,x=+(c*p)+n*m*s,T=So(i,a,n),D=[g/Bt,y/Bt,x/Bt],H=bi(T),L=bi(D);return new lt(e,H,L)}function ur(r,e,t,i){const a=i/(i+na),n=vr(_t[t],e);r.x+=a*n.x,r.y+=a*n.y,r.z+=a*n.z}function Xl(r){const e=new Re(0,0,0,r);return ur(e,r,W.Jupiter,_i),ur(e,r,W.Saturn,Ei),ur(e,r,W.Uranus,Ai),ur(e,r,W.Neptune,Ri),e}const Ni=51,Kl=29200,Ar=146,ke=201,nt=[[-73e4,[-26.118207232108,-14.376168177825,3.384402515299],[.0016339372163656,-.0027861699588508,-.0013585880229445]],[-700800,[41.974905202127,-.448502952929,-12.770351505989],[.00073458569351457,.0022785014891658,.00048619778602049]],[-671600,[14.706930780744,44.269110540027,9.353698474772],[-.00210001479998,.00022295915939915,.00070143443551414]],[-642400,[-29.441003929957,-6.43016153057,6.858481011305],[.00084495803960544,-.0030783914758711,-.0012106305981192]],[-613200,[39.444396946234,-6.557989760571,-13.913760296463],[.0011480029005873,.0022400006880665,.00035168075922288]],[-584e3,[20.2303809507,43.266966657189,7.382966091923],[-.0019754081700585,.00053457141292226,.00075929169129793]],[-554800,[-30.65832536462,2.093818874552,9.880531138071],[61010603013347e-18,-.0031326500935382,-.00099346125151067]],[-525600,[35.737703251673,-12.587706024764,-14.677847247563],[.0015802939375649,.0021347678412429,.00019074436384343]],[-496400,[25.466295188546,41.367478338417,5.216476873382],[-.0018054401046468,.0008328308359951,.00080260156912107]],[-467200,[-29.847174904071,10.636426313081,12.297904180106],[-.00063257063052907,-.0029969577578221,-.00074476074151596]],[-438e3,[30.774692107687,-18.236637015304,-14.945535879896],[.0020113162005465,.0019353827024189,-20937793168297e-19]],[-408800,[30.243153324028,38.656267888503,2.938501750218],[-.0016052508674468,.0011183495337525,.00083333973416824]],[-379600,[-27.288984772533,18.643162147874,14.023633623329],[-.0011856388898191,-.0027170609282181,-.00049015526126399]],[-350400,[24.519605196774,-23.245756064727,-14.626862367368],[.0024322321483154,.0016062008146048,-.00023369181613312]],[-321200,[34.505274805875,35.125338586954,.557361475637],[-.0013824391637782,.0013833397561817,.00084823598806262]],[-292e3,[-23.275363915119,25.818514298769,15.055381588598],[-.0016062295460975,-.0023395961498533,-.00024377362639479]],[-262800,[17.050384798092,-27.180376290126,-13.608963321694],[.0028175521080578,.0011358749093955,-.00049548725258825]],[-233600,[38.093671910285,30.880588383337,-1.843688067413],[-.0011317697153459,.0016128814698472,.00084177586176055]],[-204400,[-18.197852930878,31.932869934309,15.438294826279],[-.0019117272501813,-.0019146495909842,-19657304369835e-18]],[-175200,[8.528924039997,-29.618422200048,-11.805400994258],[.0031034370787005,.0005139363329243,-.00077293066202546]],[-146e3,[40.94685725864,25.904973592021,-4.256336240499],[-.00083652705194051,.0018129497136404,.0008156422827306]],[-116800,[-12.326958895325,36.881883446292,15.217158258711],[-.0021166103705038,-.001481442003599,.00017401209844705]],[-87600,[-.633258375909,-30.018759794709,-9.17193287495],[.0032016994581737,-.00025279858672148,-.0010411088271861]],[-58400,[42.936048423883,20.344685584452,-6.588027007912],[-.00050525450073192,.0019910074335507,.00077440196540269]],[-29200,[-5.975910552974,40.61180995846,14.470131723673],[-.0022184202156107,-.0010562361130164,.00033652250216211]],[0,[-9.875369580774,-27.978926224737,-5.753711824704],[.0030287533248818,-.0011276087003636,-.0012651326732361]],[29200,[43.958831986165,14.214147973292,-8.808306227163],[-.00014717608981871,.0021404187242141,.00071486567806614]],[58400,[.67813676352,43.094461639362,13.243238780721],[-.0022358226110718,-.00063233636090933,.00047664798895648]],[87600,[-18.282602096834,-23.30503958666,-1.766620508028],[.0025567245263557,-.0019902940754171,-.0013943491701082]],[116800,[43.873338744526,7.700705617215,-10.814273666425],[.00023174803055677,.0022402163127924,.00062988756452032]],[146e3,[7.392949027906,44.382678951534,11.629500214854],[-.002193281545383,-.00021751799585364,.00059556516201114]],[175200,[-24.981690229261,-16.204012851426,2.466457544298],[.001819398914958,-.0026765419531201,-.0013848283502247]],[204400,[42.530187039511,.845935508021,-12.554907527683],[.00065059779150669,.0022725657282262,.00051133743202822]],[233600,[13.999526486822,44.462363044894,9.669418486465],[-.0021079296569252,.00017533423831993,.00069128485798076]],[262800,[-29.184024803031,-7.371243995762,6.493275957928],[.00093581363109681,-.0030610357109184,-.0012364201089345]],[292e3,[39.831980671753,-6.078405766765,-13.909815358656],[.0011117769689167,.0022362097830152,.00036230548231153]],[321200,[20.294955108476,43.417190420251,7.450091985932],[-.0019742157451535,.00053102050468554,.00075938408813008]],[350400,[-30.66999230216,2.318743558955,9.973480913858],[45605107450676e-18,-.0031308219926928,-.00099066533301924]],[379600,[35.626122155983,-12.897647509224,-14.777586508444],[.0016015684949743,.0021171931182284,.00018002516202204]],[408800,[26.133186148561,41.232139187599,5.00640132622],[-.0017857704419579,.00086046232702817,.00080614690298954]],[438e3,[-29.57674022923,11.863535943587,12.631323039872],[-.00072292830060955,-.0029587820140709,-.000708242964503]],[467200,[29.910805787391,-19.159019294,-15.013363865194],[.0020871080437997,.0018848372554514,-38528655083926e-18]],[496400,[31.375957451819,38.050372720763,2.433138343754],[-.0015546055556611,.0011699815465629,.00083565439266001]],[525600,[-26.360071336928,20.662505904952,14.414696258958],[-.0013142373118349,-.0026236647854842,-.00042542017598193]],[554800,[22.599441488648,-24.508879898306,-14.484045731468],[.0025454108304806,.0014917058755191,-.00030243665086079]],[584e3,[35.877864013014,33.894226366071,-.224524636277],[-.0012941245730845,.0014560427668319,.00084762160640137]],[613200,[-21.538149762417,28.204068269761,15.321973799534],[-.001731211740901,-.0021939631314577,-.0001631691327518]],[642400,[13.971521374415,-28.339941764789,-13.083792871886],[.0029334630526035,.00091860931752944,-.00059939422488627]],[671600,[39.526942044143,28.93989736011,-2.872799527539],[-.0010068481658095,.001702113288809,.00083578230511981]],[700800,[-15.576200701394,34.399412961275,15.466033737854],[-.0020098814612884,-.0017191109825989,70414782780416e-18]],[73e4,[4.24325283709,-30.118201690825,-10.707441231349],[.0031725847067411,.0001609846120227,-.00090672150593868]]];let ct=class Be{constructor(e,t,i){this.x=e,this.y=t,this.z=i}clone(){return new Be(this.x,this.y,this.z)}ToAstroVector(e){return new Re(this.x,this.y,this.z,e)}static zero(){return new Be(0,0,0)}quadrature(){return this.x*this.x+this.y*this.y+this.z*this.z}add(e){return new Be(this.x+e.x,this.y+e.y,this.z+e.z)}sub(e){return new Be(this.x-e.x,this.y-e.y,this.z-e.z)}incr(e){this.x+=e.x,this.y+=e.y,this.z+=e.z}decr(e){this.x-=e.x,this.y-=e.y,this.z-=e.z}mul(e){return new Be(e*this.x,e*this.y,e*this.z)}div(e){return new Be(this.x/e,this.y/e,this.z/e)}mean(e){return new Be((this.x+e.x)/2,(this.y+e.y)/2,(this.z+e.z)/2)}neg(){return new Be(-this.x,-this.y,-this.z)}};class lt{constructor(e,t,i){this.tt=e,this.r=t,this.v=i}clone(){return new lt(this.tt,this.r,this.v)}sub(e){return new lt(this.tt,this.r.sub(e.r),this.v.sub(e.v))}}function Zl(r){let[e,[t,i,a],[n,o,s]]=r;return new lt(e,new ct(t,i,a),new ct(n,o,s))}function hr(r,e,t,i){const a=i/(i+na),n=ql(_t[t],e);return r.r.incr(n.r.mul(a)),r.v.incr(n.v.mul(a)),n}function Ut(r,e,t){const i=t.sub(r),a=i.quadrature();return i.mul(e/(a*Math.sqrt(a)))}let oa=class{constructor(e){let t=new lt(e,new ct(0,0,0),new ct(0,0,0));this.Jupiter=hr(t,e,W.Jupiter,_i),this.Saturn=hr(t,e,W.Saturn,Ei),this.Uranus=hr(t,e,W.Uranus,Ai),this.Neptune=hr(t,e,W.Neptune,Ri),this.Jupiter.r.decr(t.r),this.Jupiter.v.decr(t.v),this.Saturn.r.decr(t.r),this.Saturn.v.decr(t.v),this.Uranus.r.decr(t.r),this.Uranus.v.decr(t.v),this.Neptune.r.decr(t.r),this.Neptune.v.decr(t.v),this.Sun=new lt(e,t.r.mul(-1),t.v.mul(-1))}Acceleration(e){let t=Ut(e,na,this.Sun.r);return t.incr(Ut(e,_i,this.Jupiter.r)),t.incr(Ut(e,Ei,this.Saturn.r)),t.incr(Ut(e,Ai,this.Uranus.r)),t.incr(Ut(e,Ri,this.Neptune.r)),t}},wo=class xo{constructor(e,t,i,a){this.tt=e,this.r=t,this.v=i,this.a=a}clone(){return new xo(this.tt,this.r.clone(),this.v.clone(),this.a.clone())}},To=class{constructor(e,t){this.bary=e,this.grav=t}};function Rr(r,e,t,i){return new ct(e.x+r*(t.x+r*i.x/2),e.y+r*(t.y+r*i.y/2),e.z+r*(t.z+r*i.z/2))}function Ya(r,e,t){return new ct(e.x+r*t.x,e.y+r*t.y,e.z+r*t.z)}function Mi(r,e){const t=r-e.tt,i=new oa(r),a=Rr(t,e.r,e.v,e.a),n=i.Acceleration(a).mean(e.a),o=Rr(t,e.r,e.v,n),s=e.v.add(n.mul(t)),c=i.Acceleration(o),u=new wo(r,o,s,c);return new To(i,u)}const Jl=[];function _o(r,e){const t=Math.floor(r);return t<0?0:t>=e?e-1:t}function Li(r){const e=Zl(r),t=new oa(e.tt),i=e.r.add(t.Sun.r),a=e.v.add(t.Sun.v),n=t.Acceleration(i),o=new wo(e.tt,i,a,n);return new To(t,o)}function Ql(r,e){const t=nt[0][0];if(e<t||e>nt[Ni-1][0])return null;const i=_o((e-t)/Kl,Ni-1);if(!r[i]){const n=r[i]=[];n[0]=Li(nt[i]).grav,n[ke-1]=Li(nt[i+1]).grav;let o,s=n[0].tt;for(o=1;o<ke-1;++o)n[o]=Mi(s+=Ar,n[o-1]).grav;s=n[ke-1].tt;var a=[];for(a[ke-1]=n[ke-1],o=ke-2;o>0;--o)a[o]=Mi(s-=Ar,a[o+1]).grav;for(o=ke-2;o>0;--o){const c=o/(ke-1);n[o].r=n[o].r.mul(1-c).add(a[o].r.mul(c)),n[o].v=n[o].v.mul(1-c).add(a[o].v.mul(c)),n[o].a=n[o].a.mul(1-c).add(a[o].a.mul(c))}}return r[i]}function qa(r,e,t){let i=Li(r);const a=Math.ceil((e-i.grav.tt)/t);for(let n=0;n<a;++n)i=Mi(n+1===a?e:i.grav.tt+t,i.grav);return i}function eu(r,e){let t,i,a;const n=Ql(Jl,r.tt);if(n){const o=_o((r.tt-n[0].tt)/Ar,ke-1),s=n[o],c=n[o+1],u=s.a.mean(c.a),l=Rr(r.tt-s.tt,s.r,s.v,u),m=Ya(r.tt-s.tt,s.v,u),p=Rr(r.tt-c.tt,c.r,c.v,u),g=Ya(r.tt-c.tt,c.v,u),y=(r.tt-s.tt)/Ar;t=l.mul(1-y).add(p.mul(y)),i=m.mul(1-y).add(g.mul(y))}else{let o;r.tt<nt[0][0]?o=qa(nt[0],r.tt,-146):o=qa(nt[Ni-1],r.tt,146),t=o.grav.r,i=o.grav.v,a=o.bary}return a||(a=new oa(r.tt)),t=t.sub(a.Sun.r),i=i.sub(a.Sun.v),new jl(t.x,t.y,t.z,i.x,i.y,i.z,r)}function jt(r,e){var t=ht(e);if(r in _t)return vr(_t[r],t);if(r===W.Pluto){const o=eu(t);return new Re(o.x,o.y,o.z,t)}if(r===W.Sun)return new Re(0,0,0,t);if(r===W.Moon){var i=vr(_t.Earth,t),a=Ci(t);return new Re(i.x+a.x,i.y+a.y,i.z+a.z,t)}if(r===W.EMB){const o=vr(_t.Earth,t),s=Ci(t),c=1+Ol;return new Re(o.x+s.x/c,o.y+s.y/c,o.z+s.z/c,t)}if(r===W.SSB)return Xl(t);const n=fo(r);if(n){const o=new Yl(n.dec,15*n.ra,n.dist);return su(o,t)}throw`HelioVector: Unknown body "${r}"`}function tu(r,e){let t=e,i=0;for(let a=0;a<10;++a){const n=r(t),o=n.Length()/El;if(o>1)throw"Object is too distant for light-travel solver.";const s=e.AddDays(-o);if(i=Math.abs(s.tt-t.tt),i<1e-9)return n;t=s}throw`Light-travel time solver did not converge: dt = ${i}`}class ru{constructor(e,t,i,a){this.observerBody=e,this.targetBody=t,this.aberration=i,this.observerPos=a}Position(e){this.aberration&&(this.observerPos=jt(this.observerBody,e));const t=jt(this.targetBody,e);return new Re(t.x-this.observerPos.x,t.y-this.observerPos.y,t.z-this.observerPos.z,e)}}function iu(r,e,t,i){const a=ht(r);if(fo(t)){const s=jt(t,a),c=jt(e,a);return new Re(s.x-c.x,s.y-c.y,s.z-c.z,a)}let n;n=jt(e,a);const o=new ru(e,t,i,n);return tu(s=>o.Position(s),a)}function au(r,e,t){const i=ht(e);switch(r){case W.Earth:return new Re(0,0,0,i);case W.Moon:return Ci(i);default:const a=iu(i,W.Earth,r,t);return a.t=i,a}}var Xa;(function(r){r[r.Pericenter=0]="Pericenter",r[r.Apocenter=1]="Apocenter"})(Xa||(Xa={}));function nu(r,e){return new Ot([[e.rot[0][0]*r.rot[0][0]+e.rot[1][0]*r.rot[0][1]+e.rot[2][0]*r.rot[0][2],e.rot[0][1]*r.rot[0][0]+e.rot[1][1]*r.rot[0][1]+e.rot[2][1]*r.rot[0][2],e.rot[0][2]*r.rot[0][0]+e.rot[1][2]*r.rot[0][1]+e.rot[2][2]*r.rot[0][2]],[e.rot[0][0]*r.rot[1][0]+e.rot[1][0]*r.rot[1][1]+e.rot[2][0]*r.rot[1][2],e.rot[0][1]*r.rot[1][0]+e.rot[1][1]*r.rot[1][1]+e.rot[2][1]*r.rot[1][2],e.rot[0][2]*r.rot[1][0]+e.rot[1][2]*r.rot[1][1]+e.rot[2][2]*r.rot[1][2]],[e.rot[0][0]*r.rot[2][0]+e.rot[1][0]*r.rot[2][1]+e.rot[2][0]*r.rot[2][2],e.rot[0][1]*r.rot[2][0]+e.rot[1][1]*r.rot[2][1]+e.rot[2][1]*r.rot[2][2],e.rot[0][2]*r.rot[2][0]+e.rot[1][2]*r.rot[2][1]+e.rot[2][2]*r.rot[2][2]]])}function ou(r,e,t){const i=fr(t)*st,a=Math.cos(i),n=Math.sin(i),o=(e+1)%3,s=(e+2)%3,c=e;let u=[[0,0,0],[0,0,0],[0,0,0]];return u[o][o]=a*r.rot[o][o]-n*r.rot[o][s],u[o][s]=n*r.rot[o][o]+a*r.rot[o][s],u[o][c]=r.rot[o][c],u[s][o]=a*r.rot[s][o]-n*r.rot[s][s],u[s][s]=n*r.rot[s][o]+a*r.rot[s][s],u[s][c]=r.rot[s][c],u[c][o]=a*r.rot[c][o]-n*r.rot[c][s],u[c][s]=n*r.rot[c][o]+a*r.rot[c][s],u[c][c]=r.rot[c][c],new Ot(u)}function su(r,e){e=ht(e);const t=r.lat*st,i=r.lon*st,a=r.dist*Math.cos(t);return new Re(a*Math.cos(i),a*Math.sin(i),r.dist*Math.sin(t),e)}function cu(r){r=ht(r);const e=yo(r,je.From2000),t=$l(r,je.From2000);return nu(e,t)}var Ka;(function(r){r.Penumbral="penumbral",r.Partial="partial",r.Annular="annular",r.Total="total"})(Ka||(Ka={}));var Za;(function(r){r[r.Invalid=0]="Invalid",r[r.Ascending=1]="Ascending",r[r.Descending=-1]="Descending"})(Za||(Za={}));const lu=.001/po,uu=new U,Eo=new se,hu=new se;function sa(r){return r instanceof et?r:new et(r instanceof Date?r:new Date(r))}function du(r,e=new U){const{x:t,y:i,z:a}=r;return e.set(t,i,a)}function mu(r,e=new se){const[t,i,a]=r.rot;return e.set(t[0],i[0],a[0],0,t[1],i[1],a[1],0,t[2],i[2],a[2],0,0,0,0,1)}function ca(r,e=new se){const t=sa(r),i=ou(cu(t),2,-15*Vl(t));return mu(i,e)}function Ao(r,e,t,i,a){const n=au(r,e,!1);if(du(n,t),i!=null){const o=ca(e,hu).transpose();t.sub(uu.copy(i).applyMatrix4(o).multiplyScalar(lu))}return t.normalize()}function pu(r,e=new U,t){const i=sa(r);return Ao(W.Sun,i,e,t).applyMatrix4(ca(i,Eo))}function fu(r,e=new U,t){const i=sa(r);return Ao(W.Moon,i,e,t).applyMatrix4(ca(i,Eo))}function Ro(r){return Math.sqrt(Math.max(r,0))}function vu(r){return Math.max(r,0)}function gu(r,e,t){const{bottomRadius:i}=r;return t<0&&e**2*(t**2-1)+i**2>=0}function yu(r,e,t){const{topRadius:i}=r,a=e**2*(t**2-1)+i**2;return vu(-e*t+Ro(a))}function Ja(r,e){return .5/e+r*(1-1/e)}const Su=new U,Qa=new U,wu=new U,en=new WeakMap;function xu(r){r.image;let e=Ua(r.image.data)?r.image.data:Ua(r.userData.imageData)?r.userData.imageData:void 0;if(r.type===xi&&e instanceof Uint16Array){const t=en.get(e.buffer);t==null?(e=new De(e.buffer),en.set(e.buffer,e)):e=t}return e}function dr(r,e,t){const i=e*4;return t.set(r[i],r[i+1],r[i+2])}function Tu(r,e,t){const i=xu(r);if(i==null)return t.setScalar(0);r.image;const{width:a,height:n}=r.image,o=It(e.x,0,1)*(a-1),s=It(e.y,0,1)*(n-1),c=Math.floor(o),u=Math.floor(s),l=o-c,m=s-u,p=l,g=m,y=c%a,x=(y+1)%a,T=u%n,D=(T+1)%n,H=dr(i,T*a+y,Su),L=dr(i,T*a+x,Qa),C=H.lerp(L,p),A=dr(i,D*a+y,Qa),N=dr(i,D*a+x,wu),j=A.lerp(N,p);return t.copy(C.lerp(j,g))}function _u(r,e,t,i){const{topRadius:a,bottomRadius:n}=r,o=Math.sqrt(a**2-n**2),s=Ro(e**2-n**2),c=yu(r,e,t),u=a-e,l=s+o,m=(c-u)/(l-u),p=s/o;return i.set(Ja(m,Ur),Ja(p,Hr))}const Eu=new U,ai=new U,Au=new ia;function Ru(r,e,t,i=new ra,{ellipsoid:a=At.WGS84,correctAltitude:n=!0}={},o=er.DEFAULT){const s=Eu.copy(e);if(n){const y=a.projectOnSurface(e,ai);y!=null&&s.sub(a.getOsculatingSphereCenter(y,o.bottomRadius,ai))}const c=ai;let u=s.length(),l=s.dot(t);const{topRadius:m}=o,p=-l-Math.sqrt(l**2-u**2+m**2);if(p>0&&(u=m,l+=p),u>m)c.set(1,1,1);else{const y=l/u;if(gu(o,u,y))c.setScalar(0);else{const x=_u(o,u,y,Au);Tu(r,x,c)}}const g=c.multiply(o.solarIrradiance).multiply(o.sunRadianceToRelativeLuminance);return i.setFromVector3(g)}function Cu(r){var e=[];if(r.length===0)return"";if(typeof r[0]!="string")throw new TypeError("Url must be a string. Received "+r[0]);if(r[0].match(/^[^/:]+:\/*$/)&&r.length>1){var t=r.shift();r[0]=t+r[0]}r[0].match(/^file:\/\/\//)?r[0]=r[0].replace(/^([^/:]+):\/*/,"$1:///"):r[0]=r[0].replace(/^([^/:]+):\/*/,"$1://");for(var i=0;i<r.length;i++){var a=r[i];if(typeof a!="string")throw new TypeError("Url must be a string. Received "+a);a!==""&&(i>0&&(a=a.replace(/^[\/]+/,"")),i<r.length-1?a=a.replace(/[\/]+$/,""):a=a.replace(/[\/]+$/,"/"),e.push(a))}var n=e.join("/");n=n.replace(/\/(\?|&|#[^!])/g,"$1");var o=n.split("?");return n=o.shift()+(o.length>0?"?":"")+o.join("&"),n}function Du(){var r;return typeof arguments[0]=="object"?r=arguments[0]:r=[].slice.call(arguments),Cu(r)}const tn={width:Ur,height:Hr},gt={width:al,height:nl,depth:ol},rn={width:Xi,height:Ki};class Iu extends ul{constructor({format:e="exr",type:t=xi,combinedScattering:i=!0,higherOrderScattering:a=!0}={},n){super(n),this.format=e,this.type=t,this.combinedScattering=i,this.higherOrderScattering=a}setType(e){return this.type=Us(e)?ka:xi,this}load(e,t,i,a){const n={},o=({key:s,loader:c,path:u})=>(c.setRequestHeader(this.requestHeader),c.setPath(this.path),c.setWithCredentials(this.withCredentials),c.load(Du(e,u),l=>{l.type=this.type,this.type===ka&&(l.image,l.image.data!=null&&(l.image.data=new Float32Array(new De(l.image.data?.buffer)))),l.minFilter=Ba,l.magFilter=Ba,n[`${s}Texture`]=l,n.irradianceTexture!=null&&n.scatteringTexture!=null&&n.transmittanceTexture!=null&&(this.combinedScattering||n.singleMieScatteringTexture!=null)&&(!this.higherOrderScattering||n.higherOrderScatteringTexture!=null)&&t?.(n)},i,a));return this.format==="exr"?{transmittanceTexture:o({key:"transmittance",loader:new Wa(tn,this.manager),path:"transmittance.exr"}),scatteringTexture:o({key:"scattering",loader:new ti(gt,this.manager),path:"scattering.exr"}),irradianceTexture:o({key:"irradiance",loader:new Wa(rn,this.manager),path:"irradiance.exr"}),singleMieScatteringTexture:this.combinedScattering?void 0:o({key:"singleMieScattering",loader:new ti(gt,this.manager),path:"single_mie_scattering.exr"}),higherOrderScatteringTexture:this.higherOrderScattering?o({key:"higherOrderScattering",loader:new ti(gt,this.manager),path:"higher_order_scattering.exr"}):void 0}:{transmittanceTexture:o({key:"transmittance",loader:new St(Va,Pt,tn,this.manager),path:"transmittance.bin"}),scatteringTexture:o({key:"scattering",loader:new St(ri,Pt,gt,this.manager),path:"scattering.bin"}),irradianceTexture:o({key:"irradiance",loader:new St(Va,Pt,rn,this.manager),path:"irradiance.bin"}),singleMieScatteringTexture:this.combinedScattering?void 0:o({key:"singleMieScattering",loader:new St(ri,Pt,gt,this.manager),path:"single_mie_scattering.bin"}),higherOrderScatteringTexture:this.higherOrderScattering?o({key:"higherOrderScattering",loader:new St(ri,Pt,gt,this.manager),path:"higher_order_scattering.bin"}):void 0}}}const Ou=`precision highp float;
precision highp sampler3D;

#define RECIPROCAL_PI 0.3183098861837907

#include "core/raySphereIntersection"

#include "bruneton/definitions"

uniform AtmosphereParameters ATMOSPHERE;
uniform vec3 SUN_SPECTRAL_RADIANCE_TO_LUMINANCE;
uniform vec3 SKY_SPECTRAL_RADIANCE_TO_LUMINANCE;

uniform sampler2D transmittance_texture;
uniform sampler3D scattering_texture;
uniform sampler2D irradiance_texture;
uniform sampler3D single_mie_scattering_texture;
uniform sampler3D higher_order_scattering_texture;

#include "bruneton/common"
#include "bruneton/runtime"

uniform vec3 sunDirection;
uniform float cosSunAngularRadius;
uniform vec3 moonDirection;
uniform float moonAngularRadius;
uniform float lunarRadianceScale;
uniform vec3 groundAlbedo;

#include "sky"

#ifdef HAS_SHADOW_LENGTH
uniform sampler2D shadowLengthBuffer;
#endif // HAS_SHADOW_LENGTH

in vec2 vUv;
in vec3 vCameraPosition;
in vec3 vRayDirection;

layout(location = 0) out vec4 outputColor;

#include <mrt_layout>

void main() {
  float shadowLength = 0.0;
  #ifdef HAS_SHADOW_LENGTH
  shadowLength = texture(shadowLengthBuffer, vUv).r;
  #endif // HAS_SHADOW_LENGTH

  vec3 cameraPosition = vCameraPosition;
  vec3 rayDirection = normalize(vRayDirection);
  vec3 dRDdx = dFdx(rayDirection);
  vec3 dRDdy = dFdy(rayDirection);
  float fragmentAngle = length(dRDdx + dRDdy) / length(rayDirection);

  #ifdef GROUND_ALBEDO

  float r = length(cameraPosition);
  float mu = dot(cameraPosition, rayDirection) / r;
  bool intersectsGround = RayIntersectsGround(ATMOSPHERE, r, mu);
  if (intersectsGround) {
    float distanceToGround = raySphereFirstIntersection(
      cameraPosition,
      rayDirection,
      ATMOSPHERE.bottom_radius
    );
    vec3 groundPosition = rayDirection * distanceToGround + cameraPosition;
    vec3 surfaceNormal = normalize(groundPosition);
    vec3 skyIrradiance;
    vec3 sunIrradiance = GetSunAndSkyIrradiance(
      cameraPosition,
      surfaceNormal,
      sunDirection,
      skyIrradiance
    );
    vec3 transmittance;
    vec3 inscatter = GetSkyRadianceToPoint(
      cameraPosition,
      ATMOSPHERE.bottom_radius * surfaceNormal,
      shadowLength,
      sunDirection,
      transmittance
    );
    vec3 radiance = groundAlbedo * RECIPROCAL_PI * (sunIrradiance + skyIrradiance);
    outputColor.rgb = radiance * transmittance + inscatter;
  } else {
    outputColor.rgb = getSkyRadiance(
      cameraPosition,
      rayDirection,
      shadowLength,
      sunDirection,
      moonDirection,
      moonAngularRadius,
      lunarRadianceScale,
      fragmentAngle
    );
  }

  #else // GROUND_ALBEDO

  outputColor.rgb = getSkyRadiance(
    cameraPosition,
    rayDirection,
    shadowLength,
    sunDirection,
    moonDirection,
    moonAngularRadius,
    lunarRadianceScale,
    fragmentAngle
  );

  #endif // GROUND_ALBEDO

  outputColor.a = 1.0;

  #include <mrt_output>
}
`,bu=`precision highp float;
precision highp sampler3D;

uniform mat4 inverseProjectionMatrix;
uniform mat4 inverseViewMatrix;
uniform vec3 cameraPosition;
uniform mat4 worldToECEFMatrix;
uniform vec3 altitudeCorrection;

layout(location = 0) in vec3 position;

out vec2 vUv;
out vec3 vCameraPosition;
out vec3 vRayDirection;

void getCameraRay(out vec3 origin, out vec3 direction) {
  bool isPerspective = inverseProjectionMatrix[2][3] != 0.0; // 4th entry in the 3rd column

  if (isPerspective) {
    // Calculate the camera ray for a perspective camera.
    vec4 viewPosition = inverseProjectionMatrix * vec4(position, 1.0);
    vec4 worldDirection = inverseViewMatrix * vec4(viewPosition.xyz, 0.0);
    origin = cameraPosition;
    direction = worldDirection.xyz;
  } else {
    // Unprojected points to calculate direction.
    vec4 nearPoint = inverseProjectionMatrix * vec4(position.xy, -1.0, 1.0);
    vec4 farPoint = inverseProjectionMatrix * vec4(position.xy, -0.9, 1.0);
    nearPoint /= nearPoint.w;
    farPoint /= farPoint.w;

    // Calculate world values
    vec4 worldDirection = inverseViewMatrix * vec4(farPoint.xyz - nearPoint.xyz, 0.0);
    vec4 worldOrigin = inverseViewMatrix * nearPoint;

    // Outputs
    direction = worldDirection.xyz;
    origin = worldOrigin.xyz;
  }
}

void main() {
  vUv = position.xy * 0.5 + 0.5;

  vec3 direction, origin;
  getCameraRay(origin, direction);

  vec3 cameraPositionECEF = (worldToECEFMatrix * vec4(origin, 1.0)).xyz;
  vCameraPosition = (cameraPositionECEF + altitudeCorrection) * METER_TO_LENGTH_UNIT;
  vRayDirection = (worldToECEFMatrix * vec4(direction, 0.0)).xyz;

  gl_Position = vec4(position.xy, 1.0, 1.0);
}
`;var Nu=Object.defineProperty,la=(r,e,t,i)=>{for(var a=void 0,n=r.length-1,o;n>=0;n--)(o=r[n])&&(a=o(e,t,a)||a);return a&&Nu(e,t,a),a};const Mu={...aa,sun:!0,moon:!0,moonAngularRadius:.0045,lunarRadianceScale:1,ground:!0,groundAlbedo:new ra(0)};class ua extends tr{constructor(e){const{sun:t,moon:i,moonDirection:a,moonAngularRadius:n,lunarRadianceScale:o,ground:s,groundAlbedo:c,...u}={...Mu,...e};super({name:"SkyMaterial",glslVersion:uo,vertexShader:bu,fragmentShader:$e(Ou,{core:{raySphereIntersection:Pr},bruneton:{common:Fr,definitions:zr,runtime:Gr},sky:ho}),...u,uniforms:{inverseProjectionMatrix:new _(new se),inverseViewMatrix:new _(new se),moonDirection:new _(a?.clone()??new U),moonAngularRadius:new _(n),lunarRadianceScale:new _(o),groundAlbedo:new _(c.clone()),shadowLengthBuffer:new _(null),...u.uniforms},defines:{PERSPECTIVE_CAMERA:"1"},depthWrite:!1,depthTest:!0}),this.shadowLength=null,this.sun=t,this.moon=i,this.ground=s}onBeforeRender(e,t,i,a,n,o){super.onBeforeRender(e,t,i,a,n,o);const{uniforms:s,defines:c}=this;s.inverseProjectionMatrix.value.copy(i.projectionMatrixInverse),s.inverseViewMatrix.value.copy(i.matrixWorld);const u=c.PERSPECTIVE_CAMERA!=null,l=i.isPerspectiveCamera===!0;l!==u&&(l?c.PERSPECTIVE_CAMERA="1":delete c.PERSPECTIVE_CAMERA,this.needsUpdate=!0);const m=this.groundAlbedo,p=c.GROUND_ALBEDO!=null,g=m.r!==0||m.g!==0||m.b!==0;g!==p&&(g?this.defines.GROUND_ALBEDO="1":delete this.defines.GROUND_ALBEDO,this.needsUpdate=!0);const y=this.shadowLength,x=c.HAS_SHADOW_LENGTH!=null,T=y!=null;T!==x&&(T?c.HAS_SHADOW_LENGTH="1":(delete c.HAS_SHADOW_LENGTH,s.shadowLengthBuffer.value=null),this.needsUpdate=!0),T&&(s.shadowLengthBuffer.value=y.map)}get moonDirection(){return this.uniforms.moonDirection.value}get moonAngularRadius(){return this.uniforms.moonAngularRadius.value}set moonAngularRadius(e){this.uniforms.moonAngularRadius.value=e}get lunarRadianceScale(){return this.uniforms.lunarRadianceScale.value}set lunarRadianceScale(e){this.uniforms.lunarRadianceScale.value=e}get groundAlbedo(){return this.uniforms.groundAlbedo.value}}la([M("SUN")],ua.prototype,"sun");la([M("MOON")],ua.prototype,"moon");la([M("GROUND")],ua.prototype,"ground");const Lu=`precision highp float;
precision highp sampler3D;

#include "bruneton/definitions"

uniform AtmosphereParameters ATMOSPHERE;
uniform vec3 SUN_SPECTRAL_RADIANCE_TO_LUMINANCE;
uniform vec3 SKY_SPECTRAL_RADIANCE_TO_LUMINANCE;

uniform sampler2D transmittance_texture;
uniform sampler3D scattering_texture;
uniform sampler2D irradiance_texture;
uniform sampler3D single_mie_scattering_texture;
uniform sampler3D higher_order_scattering_texture;

#include "bruneton/common"
#include "bruneton/runtime"

uniform vec3 sunDirection;

in vec3 vCameraPosition;
in vec3 vRayDirection;

layout(location = 0) out vec4 outputColor;

#include <mrt_layout>

in vec3 vColor;

void main() {
  #if !defined(PERSPECTIVE_CAMERA)
  outputColor = vec4(0.0);
  discard; // Rendering celestial objects without perspective doesn't make sense.
  #endif // !defined(PERSPECTIVE_CAMERA)

  #ifdef BACKGROUND
  vec3 rayDirection = normalize(vRayDirection);
  float r = length(vCameraPosition);
  float mu = dot(vCameraPosition, rayDirection) / r;

  if (RayIntersectsGround(ATMOSPHERE, r, mu)) {
    discard;
  }

  vec3 transmittance;
  vec3 radiance = GetSkyRadiance(
    vCameraPosition,
    normalize(vRayDirection),
    0.0, // Shadow length
    sunDirection,
    transmittance
  );
  radiance += transmittance * vColor;
  outputColor = vec4(radiance, 1.0);
  #else // BACKGROUND
  outputColor = vec4(vColor, 1.0);
  #endif // BACKGROUND

  #include <mrt_output>
}
`,Pu=`precision highp float;
precision highp sampler3D;

#define saturate(x) clamp(x, 0.0, 1.0)

uniform mat4 projectionMatrix;
uniform mat4 modelViewMatrix;
uniform mat4 viewMatrix;
uniform mat4 matrixWorld;
uniform vec3 cameraPosition;
uniform float cameraFar;
uniform mat4 worldToECEFMatrix;
uniform vec3 altitudeCorrection;
uniform float pointSize;
uniform vec2 magnitudeRange;
uniform float intensity;

layout(location = 0) in vec3 position;
layout(location = 1) in float magnitude;
layout(location = 2) in vec3 color;

out vec3 vCameraPosition;
out vec3 vRayDirection;
out vec3 vEllipsoidCenter;
out vec3 vColor;

void main() {
  // Magnitude is stored between 0 to 1 within the given range.
  float m = mix(magnitudeRange.x, magnitudeRange.y, magnitude);
  vec3 v = pow(vec3(10.0), -vec3(magnitudeRange, m) / 2.5);
  vColor = vec3(intensity * color);
  vColor *= saturate((v.z - v.y) / (v.x - v.y));

  #ifdef BACKGROUND
  vec3 worldDirection = normalize(matrixWorld * vec4(position, 1.0)).xyz;
  vec3 cameraPositionECEF = (worldToECEFMatrix * vec4(cameraPosition, 1.0)).xyz;
  vCameraPosition = (cameraPositionECEF + altitudeCorrection) * METER_TO_LENGTH_UNIT;
  vRayDirection = (worldToECEFMatrix * vec4(worldDirection, 0.0)).xyz;
  gl_Position =
    projectionMatrix * viewMatrix * vec4(cameraPosition + worldDirection * cameraFar, 1.0);
  #else // BACKGROUND
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  #endif // BACKGROUND

  gl_PointSize = pointSize;
}
`;var Uu=Object.defineProperty,Co=(r,e,t,i)=>{for(var a=void 0,n=r.length-1,o;n>=0;n--)(o=r[n])&&(a=o(e,t,a)||a);return a&&Uu(e,t,a),a};const Hu={...aa,pointSize:1,intensity:1,background:!0,ground:!0};let Do=class extends tr{constructor(e){const{pointSize:t,intensity:i,background:a,ground:n,...o}={...Hu,...e};super({name:"StarsMaterial",glslVersion:uo,vertexShader:Pu,fragmentShader:$e(Lu,{bruneton:{common:Fr,definitions:zr,runtime:Gr}}),...o,uniforms:{projectionMatrix:new _(new se),modelViewMatrix:new _(new se),viewMatrix:new _(new se),matrixWorld:new _(new se),cameraFar:new _(0),pointSize:new _(0),magnitudeRange:new _(new ia(-2,8)),intensity:new _(i),...o.uniforms},defines:{PERSPECTIVE_CAMERA:"1"},depthWrite:!0,depthTest:!0}),this.pointSize=t,this.background=a,this.ground=n}onBeforeRender(e,t,i,a,n,o){super.onBeforeRender(e,t,i,a,n,o);const s=this.uniforms;s.projectionMatrix.value.copy(i.projectionMatrix),s.modelViewMatrix.value.copy(i.modelViewMatrix),s.viewMatrix.value.copy(i.matrixWorldInverse),s.matrixWorld.value.copy(n.matrixWorld),s.cameraFar.value=i.far,s.pointSize.value=this.pointSize*e.getPixelRatio();const c=i.isPerspectiveCamera===!0;this.defines.PERSPECTIVE_CAMERA!=null!==c&&(c?this.defines.PERSPECTIVE_CAMERA="1":delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}get magnitudeRange(){return this.uniforms.magnitudeRange.value}get intensity(){return this.uniforms.intensity.value}set intensity(e){this.uniforms.intensity.value=e}};Co([M("BACKGROUND")],Do.prototype,"background");Co([M("GROUND")],Do.prototype,"ground");const an=Gr,nn=Fr,on=zr,{Vector3:q,Vector2:X,Matrix4:Z,Object3D:sn,Box3:Fu,Uniform:f,GLSL3:Wr,Vector4:me,RawShaderMaterial:ha,Camera:Io,WebGLRenderTarget:zu,HalfFloatType:Oo,LinearFilter:Cr,RedFormat:Gu,WebGLArrayRenderTarget:Wu,EventDispatcher:ku,Matrix3:Bu,Texture:cn,Data3DTexture:ln}=await J("three");class kr{constructor(e=0,t=0,i=0,a=0){this.expTerm=e,this.exponent=t,this.linearTerm=i,this.constantTerm=a}set(e=0,t=0,i=0,a=0){return this.expTerm=e,this.exponent=t,this.linearTerm=i,this.constantTerm=a,this}clone(){return new kr(this.expTerm,this.exponent,this.linearTerm,this.constantTerm)}copy(e){return this.expTerm=e.expTerm,this.exponent=e.exponent,this.linearTerm=e.linearTerm,this.constantTerm=e.constantTerm,this}}const Vu=["channel","altitude","height","densityScale","shapeAmount","shapeDetailAmount","weatherExponent","shapeAlteringBias","coverageFilterWidth","shadow","densityProfile"];function $u(r,e){if(e!=null)for(const t of Vu){const i=e[t];i!=null&&(r[t]instanceof kr?r[t].copy(i):r[t]=i)}}const Pi=class bo{constructor(e){this.channel="r",this.altitude=0,this.height=0,this.densityScale=.2,this.shapeAmount=1,this.shapeDetailAmount=1,this.weatherExponent=1,this.shapeAlteringBias=.35,this.coverageFilterWidth=.6,this.densityProfile=new kr(0,0,.75,.25),this.shadow=!1,this.set(e)}set(e){return $u(this,e),this}clone(){return new bo(this)}copy(e){return this.channel=e.channel,this.altitude=e.altitude,this.height=e.height,this.densityScale=e.densityScale,this.shapeAmount=e.shapeAmount,this.shapeDetailAmount=e.shapeDetailAmount,this.weatherExponent=e.weatherExponent,this.shapeAlteringBias=e.shapeAlteringBias,this.coverageFilterWidth=e.coverageFilterWidth,this.densityProfile.copy(e.densityProfile),this.shadow=e.shadow,this}};Pi.DEFAULT=new Pi;let Ke=Pi;const yt=Array.from({length:8},()=>({value:0,flag:0})),Ht=Array.from({length:3},()=>({min:0,max:0}));function ju(r,e){return r.value!==e.value?r.value-e.value:r.flag-e.flag}const Ui=class No extends Array{constructor(e){super(new Ke(e?.[0]),new Ke(e?.[1]),new Ke(e?.[2]),new Ke(e?.[3]))}set(e){return this[0].set(e?.[0]),this[1].set(e?.[1]),this[2].set(e?.[2]),this[3].set(e?.[3]),this}reset(){return this[0].copy(Ke.DEFAULT),this[1].copy(Ke.DEFAULT),this[2].copy(Ke.DEFAULT),this[3].copy(Ke.DEFAULT),this}clone(){return new No(this)}copy(e){return this[0].copy(e[0]),this[1].copy(e[1]),this[2].copy(e[2]),this[3].copy(e[3]),this}get localWeatherChannels(){return this[0].channel+this[1].channel+this[2].channel+this[3].channel}packValues(e,t){return t.set(this[0][e],this[1][e],this[2][e],this[3][e])}packSums(e,t,i){return i.set(this[0][e]+this[0][t],this[1][e]+this[1][t],this[2][e]+this[2][t],this[3][e]+this[3][t])}packDensityProfiles(e,t){return t.set(this[0].densityProfile[e],this[1].densityProfile[e],this[2].densityProfile[e],this[3].densityProfile[e])}packIntervalHeights(e,t){for(let o=0;o<4;++o){const s=this[o];let c=yt[o];c.value=s.altitude,c.flag=0,c=yt[o+4],c.value=s.altitude+s.height,c.flag=1}yt.sort(ju);let i=0,a=0;for(let o=0;o<yt.length;++o){const{value:s,flag:c}=yt[o];if(a===0&&o>0){const u=Ht[i++];u.min=yt[o-1].value,u.max=s}a+=c===0?1:-1}for(;i<3;++i){const o=Ht[i];o.min=0,o.max=0}let n=Ht[0];e.x=n.min,t.x=n.max,n=Ht[1],e.y=n.min,t.y=n.max,n=Ht[2],e.z=n.min,t.z=n.max}};Ui.DEFAULT=new Ui([{channel:"r",altitude:750,height:650,densityScale:.2,shapeAmount:1,shapeDetailAmount:1,weatherExponent:1,shapeAlteringBias:.35,coverageFilterWidth:.6,shadow:!0},{channel:"g",altitude:1e3,height:1200,densityScale:.2,shapeAmount:1,shapeDetailAmount:1,weatherExponent:1,shapeAlteringBias:.35,coverageFilterWidth:.6,shadow:!0},{channel:"b",altitude:7500,height:500,densityScale:.003,shapeAmount:.4,shapeDetailAmount:0,weatherExponent:1,shapeAlteringBias:.35,coverageFilterWidth:.5},{channel:"a"}]);let Yu=Ui;var qu="Invariant failed";function Qe(r,e){if(!r)throw new Error(qu)}class qt{constructor(e,t){this.near=[new q,new q,new q,new q],this.far=[new q,new q,new q,new q],e!=null&&t!=null&&this.setFromCamera(e,t)}clone(){return new qt().copy(this)}copy(e){for(let t=0;t<4;++t)this.near[t].copy(e.near[t]),this.far[t].copy(e.far[t]);return this}setFromCamera(e,t){const i=e.isOrthographicCamera===!0,a=e.projectionMatrixInverse;this.near[0].set(1,1,-1),this.near[1].set(1,-1,-1),this.near[2].set(-1,-1,-1),this.near[3].set(-1,1,-1);for(let n=0;n<4;++n)this.near[n].applyMatrix4(a);this.far[0].set(1,1,1),this.far[1].set(1,-1,1),this.far[2].set(-1,-1,1),this.far[3].set(-1,1,1);for(let n=0;n<4;++n){const o=this.far[n];o.applyMatrix4(a);const s=Math.abs(o.z);i?o.z*=Math.min(t/s,1):o.multiplyScalar(Math.min(t/s,1))}return this}split(e,t=[]){for(let i=0;i<e.length;++i){const a=t[i]??=new qt;if(i===0)for(let n=0;n<4;++n)a.near[n].copy(this.near[n]);else for(let n=0;n<4;++n)a.near[n].lerpVectors(this.near[n],this.far[n],e[i-1]);if(i===e.length-1)for(let n=0;n<4;++n)a.far[n].copy(this.far[n]);else for(let n=0;n<4;++n)a.far[n].lerpVectors(this.near[n],this.far[n],e[i])}return t.length=e.length,t}applyMatrix4(e){for(let t=0;t<4;++t)this.near[t].applyMatrix4(e),this.far[t].applyMatrix4(e);return this}}const Xu={uniform:(r,e,t,i,a=[])=>{for(let n=0;n<r;++n)a[n]=(e+(t-e)*(n+1)/r)/t;return a.length=r,a},logarithmic:(r,e,t,i,a=[])=>{for(let n=0;n<r;++n)a[n]=e*(t/e)**((n+1)/r)/t;return a.length=r,a},practical:(r,e,t,i=.5,a=[])=>{for(let n=0;n<r;++n){const o=(e+(t-e)*(n+1)/r)/t,s=e*(t/e)**((n+1)/r)/t;a[n]=io(o,s,i)}return a.length=r,a}};function Ku(r,e,t,i,a,n=[]){return Xu[r](e,t,i,a,n)}const un=new q,hn=new q,Zu=new Z,dn=new Z,Ju=new qt,Qu=new Fu,eh={maxFar:null,farScale:1,splitMode:"practical",splitLambda:.5,margin:0,fade:!0};class th{constructor(e){this.cascades=[],this.mapSize=new X,this.cameraFrustum=new qt,this.frusta=[],this.splits=[],this._far=0;const{cascadeCount:t,mapSize:i,maxFar:a,farScale:n,splitMode:o,splitLambda:s,margin:c,fade:u}={...eh,...e};this.cascadeCount=t,this.mapSize.copy(i),this.maxFar=a,this.farScale=n,this.splitMode=o,this.splitLambda=s,this.margin=c,this.fade=u}get cascadeCount(){return this.cascades.length}set cascadeCount(e){if(e!==this.cascadeCount){for(let t=0;t<e;++t)this.cascades[t]??={interval:new X,matrix:new Z,inverseMatrix:new Z,projectionMatrix:new Z,inverseProjectionMatrix:new Z,viewMatrix:new Z,inverseViewMatrix:new Z};this.cascades.length=e}}get far(){return this._far}updateIntervals(e){const t=this.cascadeCount,i=this.splits,a=this.far;Ku(this.splitMode,t,e.near,a,this.splitLambda,i),this.cameraFrustum.setFromCamera(e,a),this.cameraFrustum.split(i,this.frusta);const n=this.cascades;for(let o=0;o<t;++o)n[o].interval.set(i[o-1]??0,i[o]??0)}getFrustumRadius(e,t){const i=t.near,a=t.far;let n=Math.max(a[0].distanceTo(a[2]),a[0].distanceTo(i[2]));if(this.fade){const o=e.near,s=this.far,c=a[0].z/(s-o);n+=.25*c**2*(s-o)}return n*.5}updateMatrices(e,t,i=1){const a=Zu.lookAt(un.setScalar(0),hn.copy(t).multiplyScalar(-1),sn.DEFAULT_UP),n=dn.multiplyMatrices(dn.copy(a).invert(),e.matrixWorld),o=this.frusta,s=this.cascades;Qe(o.length===s.length);const c=this.margin,u=this.mapSize;for(let l=0;l<o.length;++l){const m=o[l],p=s[l],g=this.getFrustumRadius(e,o[l]),y=-g,x=g,T=g,D=-g;p.projectionMatrix.makeOrthographic(y,x,T,D,-this.margin,g*2+this.margin);const{near:H,far:L}=Ju.copy(m).applyMatrix4(n),C=Qu.makeEmpty();for(let te=0;te<4;te++)C.expandByPoint(H[te]),C.expandByPoint(L[te]);const A=C.getCenter(un);A.z=C.max.z+c;const N=(x-y)/u.width,j=(T-D)/u.height;A.x=Math.round(A.x/N)*N,A.y=Math.round(A.y/j)*j,A.applyMatrix4(a);const de=hn.copy(t).multiplyScalar(i).add(A);p.inverseViewMatrix.lookAt(A,de,sn.DEFAULT_UP).setPosition(de)}}update(e,t,i){this._far=this.maxFar!=null?Math.min(this.maxFar,e.far*this.farScale):e.far*this.farScale,this.updateIntervals(e),this.updateMatrices(e,t,i);const a=this.cascades,n=this.cascadeCount;for(let o=0;o<n;++o){const{matrix:s,inverseMatrix:c,projectionMatrix:u,inverseProjectionMatrix:l,viewMatrix:m,inverseViewMatrix:p}=a[o];l.copy(u).invert(),m.copy(p).invert(),s.copy(u).multiply(m),c.copy(p).multiply(l)}}}const mn=[0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5],Mo=mn.reduce((r,e,t)=>{const i=new X;for(let a=0;a<16;++a)if(mn[a]===t){i.set((a%4+.5)/4,(Math.floor(a/4)+.5)/4);break}return[...r,i]},[]),rh={resolutionScale:1,lightShafts:!0,shapeDetail:!0,turbulence:!0,haze:!0,clouds:{multiScatteringOctaves:8,accurateSunSkyLight:!0,accuratePhaseFunction:!1,maxIterationCount:500,minStepSize:50,maxStepSize:1e3,maxRayDistance:2e5,perspectiveStepScale:1.01,minDensity:1e-5,minExtinction:1e-5,minTransmittance:.01,maxIterationCountToGround:3,maxIterationCountToSun:2,minSecondaryStepSize:100,secondaryStepScale:2,maxShadowLengthIterationCount:500,minShadowLengthStepSize:50,maxShadowLengthRayDistance:2e5},shadow:{cascadeCount:3,mapSize:new X(512,512),maxIterationCount:50,minStepSize:100,maxStepSize:1e3,minDensity:1e-5,minExtinction:1e-5,minTransmittance:1e-4}},R=rh,ih={low:{...R,lightShafts:!1,shapeDetail:!1,turbulence:!1,clouds:{...R.clouds,accurateSunSkyLight:!1,maxIterationCount:200,minStepSize:100,maxRayDistance:1e5,minDensity:1e-4,minExtinction:1e-4,minTransmittance:.1,maxIterationCountToGround:0,maxIterationCountToSun:1},shadow:{...R.shadow,maxIterationCount:25,minDensity:1e-4,minExtinction:1e-4,minTransmittance:.01,cascadeCount:2,mapSize:new X(256,256)}},medium:{...R,lightShafts:!1,turbulence:!1,clouds:{...R.clouds,minDensity:1e-4,minExtinction:1e-4,accurateSunSkyLight:!1,maxIterationCountToSun:2,maxIterationCountToGround:1},shadow:{...R.shadow,minDensity:1e-4,minExtinction:1e-4,mapSize:new X(256,256)}},high:R,ultra:{...R,clouds:{...R.clouds,minStepSize:10},shadow:{...R.shadow,mapSize:new X(1024,1024)}}},ah=`precision highp float;
precision highp sampler3D;
precision highp sampler2DArray;

#include <common>
#include <packing>

#include "core/depth"
#include "core/math"
#include "core/turbo"
#include "core/generators"
#include "core/raySphereIntersection"
#include "core/cascadedShadowMaps"
#include "core/interleavedGradientNoise"
#include "core/vogelDisk"

#include "atmosphere/bruneton/definitions"

uniform AtmosphereParameters ATMOSPHERE;
uniform vec3 SUN_SPECTRAL_RADIANCE_TO_LUMINANCE;
uniform vec3 SKY_SPECTRAL_RADIANCE_TO_LUMINANCE;

uniform sampler2D transmittance_texture;
uniform sampler3D scattering_texture;
uniform sampler2D irradiance_texture;
uniform sampler3D single_mie_scattering_texture;
uniform sampler3D higher_order_scattering_texture;

#include "atmosphere/bruneton/common"
#include "atmosphere/bruneton/runtime"

#include "types"
#include "parameters"
#include "clouds"

#if !defined(RECIPROCAL_PI4)
#define RECIPROCAL_PI4 0.07957747154594767
#endif // !defined(RECIPROCAL_PI4)

uniform sampler2D depthBuffer;
uniform mat4 viewMatrix;
uniform mat4 reprojectionMatrix;
uniform mat4 viewReprojectionMatrix;
uniform float cameraNear;
uniform float cameraFar;
uniform float cameraHeight;
uniform vec2 temporalJitter;
uniform vec2 targetUvScale;
uniform float mipLevelScale;

// Scattering
const vec2 scatterAnisotropy = vec2(SCATTER_ANISOTROPY_1, SCATTER_ANISOTROPY_2);
const float scatterAnisotropyMix = SCATTER_ANISOTROPY_MIX;
uniform float skyLightScale;
uniform float groundBounceScale;
uniform float powderScale;
uniform float powderExponent;

// Primary raymarch
uniform int maxIterationCount;
uniform float minStepSize;
uniform float maxStepSize;
uniform float maxRayDistance;
uniform float perspectiveStepScale;

// Secondary raymarch
uniform int maxIterationCountToSun;
uniform int maxIterationCountToGround;
uniform float minSecondaryStepSize;
uniform float secondaryStepScale;

// Beer shadow map
uniform sampler2DArray shadowBuffer;
uniform vec2 shadowTexelSize;
uniform vec2 shadowIntervals[SHADOW_CASCADE_COUNT];
uniform mat4 shadowMatrices[SHADOW_CASCADE_COUNT];
uniform float shadowFar;
uniform float maxShadowFilterRadius;

// Shadow length
#ifdef SHADOW_LENGTH
uniform int maxShadowLengthIterationCount;
uniform float minShadowLengthStepSize;
uniform float maxShadowLengthRayDistance;
#endif // SHADOW_LENGTH

in vec2 vUv;
in vec3 vCameraPosition;
in vec3 vCameraDirection; // Direction to the center of screen
in vec3 vRayDirection; // Direction to the texel
in vec3 vViewPosition;
in GroundIrradiance vGroundIrradiance;
in CloudsIrradiance vCloudsIrradiance;

layout(location = 0) out vec4 outputColor;
layout(location = 1) out vec3 outputDepthVelocity;
#ifdef SHADOW_LENGTH
layout(location = 2) out float outputShadowLength;
#endif // SHADOW_LENGTH

float getViewZ(const float depth) {
  #ifdef PERSPECTIVE_CAMERA
  return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
  #else // PERSPECTIVE_CAMERA
  return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
  #endif // PERSPECTIVE_CAMERA
}

vec3 ecefToWorld(const vec3 positionECEF) {
  return (ecefToWorldMatrix * vec4(positionECEF - altitudeCorrection, 1.0)).xyz;
}

vec2 getShadowUv(const vec3 worldPosition, const int cascadeIndex) {
  vec4 clip = shadowMatrices[cascadeIndex] * vec4(worldPosition, 1.0);
  clip /= clip.w;
  return clip.xy * 0.5 + 0.5;
}

float getDistanceToShadowTop(const vec3 rayPosition) {
  // Distance to the top of the shadows along the sun direction, which matches
  // the ray origin of BSM.
  return raySphereSecondIntersection(
    rayPosition,
    sunDirection,
    vec3(0.0),
    bottomRadius + shadowTopHeight
  );
}

#ifdef DEBUG_SHOW_CASCADES

const vec3 cascadeColors[4] = vec3[4](
  vec3(1.0, 0.0, 0.0),
  vec3(0.0, 1.0, 0.0),
  vec3(0.0, 0.0, 1.0),
  vec3(1.0, 1.0, 0.0)
);

vec3 getCascadeColor(const vec3 rayPosition) {
  vec3 worldPosition = ecefToWorld(rayPosition);
  int cascadeIndex = getCascadeIndex(
    viewMatrix,
    worldPosition,
    shadowIntervals,
    cameraNear,
    shadowFar
  );
  vec2 uv = getShadowUv(worldPosition, cascadeIndex);
  if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) {
    return vec3(1.0);
  }
  return cascadeColors[cascadeIndex];
}

vec3 getFadedCascadeColor(const vec3 rayPosition, const float jitter) {
  vec3 worldPosition = ecefToWorld(rayPosition);
  int cascadeIndex = getFadedCascadeIndex(
    viewMatrix,
    worldPosition,
    shadowIntervals,
    cameraNear,
    shadowFar,
    jitter
  );
  return cascadeIndex >= 0
    ? cascadeColors[cascadeIndex]
    : vec3(1.0);
}

#endif // DEBUG_SHOW_CASCADES

float readShadowOpticalDepth(
  const vec2 uv,
  const float distanceToTop,
  const float distanceOffset,
  const int cascadeIndex
) {
  // r: frontDepth, g: meanExtinction, b: maxOpticalDepth, a: maxOpticalDepthTail
  // Also see the discussion here: https://x.com/shotamatsuda/status/1885322308908442106
  vec4 shadow = texture(shadowBuffer, vec3(uv, float(cascadeIndex)));
  float distanceToFront = max(0.0, distanceToTop - distanceOffset - shadow.r);
  return min(shadow.b + shadow.a, shadow.g * distanceToFront);
}

float sampleShadowOpticalDepthPCF(
  const vec3 worldPosition,
  const float distanceToTop,
  const float distanceOffset,
  const float radius,
  const int cascadeIndex
) {
  vec2 uv = getShadowUv(worldPosition, cascadeIndex);
  if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) {
    return 0.0;
  }
  if (radius < 0.1) {
    return readShadowOpticalDepth(uv, distanceToTop, distanceOffset, cascadeIndex);
  }
  float sum = 0.0;
  vec2 offset;
  #pragma unroll_loop_start
  for (int i = 0; i < 16; ++i) {
    #if UNROLLED_LOOP_INDEX < SHADOW_SAMPLE_COUNT
    offset = vogelDisk(
      UNROLLED_LOOP_INDEX,
      SHADOW_SAMPLE_COUNT,
      interleavedGradientNoise(gl_FragCoord.xy + temporalJitter * resolution) * PI2
    );
    sum += readShadowOpticalDepth(
      uv + offset * radius * shadowTexelSize,
      distanceToTop,
      distanceOffset,
      cascadeIndex
    );
    #endif // UNROLLED_LOOP_INDEX < SHADOW_SAMPLE_COUNT
  }
  #pragma unroll_loop_end
  return sum / float(SHADOW_SAMPLE_COUNT);
}

float sampleShadowOpticalDepth(
  const vec3 rayPosition,
  const float distanceOffset,
  const float radius,
  const float jitter
) {
  float distanceToTop = getDistanceToShadowTop(rayPosition);
  if (distanceToTop <= 0.0) {
    return 0.0;
  }
  vec3 worldPosition = ecefToWorld(rayPosition);
  int cascadeIndex = getFadedCascadeIndex(
    viewMatrix,
    worldPosition,
    shadowIntervals,
    cameraNear,
    shadowFar,
    jitter
  );
  return cascadeIndex >= 0
    ? sampleShadowOpticalDepthPCF(
      worldPosition,
      distanceToTop,
      distanceOffset,
      radius,
      cascadeIndex
    )
    : 0.0;
}

#ifdef DEBUG_SHOW_SHADOW_MAP
vec4 getCascadedShadowMaps(vec2 uv) {
  vec4 coord = vec4(vUv, vUv - 0.5) * 2.0;
  vec4 shadow = vec4(0.0);
  if (uv.y > 0.5) {
    if (uv.x < 0.5) {
      shadow = texture(shadowBuffer, vec3(coord.xw, 0.0));
    } else {
      #if SHADOW_CASCADE_COUNT > 1
      shadow = texture(shadowBuffer, vec3(coord.zw, 1.0));
      #endif // SHADOW_CASCADE_COUNT > 1
    }
  } else {
    if (uv.x < 0.5) {
      #if SHADOW_CASCADE_COUNT > 2
      shadow = texture(shadowBuffer, vec3(coord.xy, 2.0));
      #endif // SHADOW_CASCADE_COUNT > 2
    } else {
      #if SHADOW_CASCADE_COUNT > 3
      shadow = texture(shadowBuffer, vec3(coord.zy, 3.0));
      #endif // SHADOW_CASCADE_COUNT > 3
    }
  }

  #if !defined(DEBUG_SHOW_SHADOW_MAP_TYPE)
  #define DEBUG_SHOW_SHADOW_MAP_TYPE 0
  #endif // !defined(DEBUG_SHOW_SHADOW_MAP_TYPE

  const float frontDepthScale = 1e-5;
  const float meanExtinctionScale = 10.0;
  const float maxOpticalDepthScale = 0.01;
  vec3 color;
  #if DEBUG_SHOW_SHADOW_MAP_TYPE == 1
  color = vec3(shadow.r * frontDepthScale);
  #elif DEBUG_SHOW_SHADOW_MAP_TYPE == 2
  color = vec3(shadow.g * meanExtinctionScale);
  #elif DEBUG_SHOW_SHADOW_MAP_TYPE == 3
  color = vec3((shadow.b + shadow.a) * maxOpticalDepthScale);
  #else // DEBUG_SHOW_SHADOW_MAP_TYPE
  color =
    (shadow.rgb + vec3(0.0, 0.0, shadow.a)) *
    vec3(frontDepthScale, meanExtinctionScale, maxOpticalDepthScale);
  #endif // DEBUG_SHOW_SHADOW_MAP_TYPE
  return vec4(color, 1.0);
}
#endif // DEBUG_SHOW_SHADOW_MAP

vec2 henyeyGreenstein(const vec2 g, const float cosTheta) {
  vec2 g2 = g * g;
  // prettier-ignore
  return RECIPROCAL_PI4 *
    ((1.0 - g2) / max(vec2(1e-7), pow(1.0 + g2 - 2.0 * g * cosTheta, vec2(1.5))));
}

#ifdef ACCURATE_PHASE_FUNCTION

float draine(float u, float g, float a) {
  float g2 = g * g;
  // prettier-ignore
  return (1.0 - g2) *
    (1.0 + a * u * u) /
    (4.0 * (1.0 + a * (1.0 + 2.0 * g2) / 3.0) * PI * pow(1.0 + g2 - 2.0 * g * u, 1.5));
}

// Numerically-fitted large particles (d=10) phase function It won't be
// plausible without a more precise multiple scattering.
// Reference: https://research.nvidia.com/labs/rtr/approximate-mie/
float phaseFunction(const float cosTheta, const float attenuation) {
  const float gHG = 0.988176691700256; // exp(-0.0990567/(d-1.67154))
  const float gD = 0.5556712547839497; // exp(-2.20679/(d+3.91029) - 0.428934)
  const float alpha = 21.995520856274638; // exp(3.62489 - 8.29288/(d+5.52825))
  const float weight = 0.4819554318404214; // exp(-0.599085/(d-0.641583)-0.665888)
  return mix(
    henyeyGreenstein(vec2(gHG) * attenuation, cosTheta).x,
    draine(cosTheta, gD * attenuation, alpha),
    weight
  );
}

#else // ACCURATE_PHASE_FUNCTION

float phaseFunction(const float cosTheta, const float attenuation) {
  const vec2 g = scatterAnisotropy;
  const vec2 weights = vec2(1.0 - scatterAnisotropyMix, scatterAnisotropyMix);
  // A similar approximation is described in the Frostbite's paper, where phase
  // angle is attenuated instead of anisotropy.
  return dot(henyeyGreenstein(g * attenuation, cosTheta), weights);
}

#endif // ACCURATE_PHASE_FUNCTION

float phaseFunction(const float cosTheta) {
  return phaseFunction(cosTheta, 1.0);
}

float marchOpticalDepth(
  const vec3 rayOrigin,
  const vec3 rayDirection,
  const int maxIterationCount,
  const float mipLevel,
  const float jitter,
  out float rayDistance
) {
  int iterationCount = int(
    max(0.0, remap(mipLevel, 0.0, 1.0, float(maxIterationCount + 1), 1.0) - jitter)
  );
  if (iterationCount == 0) {
    // Fudge factor to approximate the mean optical depth.
    // TODO: Remove it.
    return 0.5;
  }
  float stepSize = minSecondaryStepSize / float(iterationCount);
  float nextDistance = stepSize * jitter;
  float opticalDepth = 0.0;
  for (int i = 0; i < iterationCount; ++i) {
    rayDistance = nextDistance;
    vec3 position = rayDistance * rayDirection + rayOrigin;
    vec2 uv = getGlobeUv(position);
    float height = length(position) - bottomRadius;
    WeatherSample weather = sampleWeather(uv, height, mipLevel);
    MediaSample media = sampleMedia(weather, position, uv, mipLevel, jitter);
    opticalDepth += media.extinction * stepSize;
    nextDistance += stepSize;
    stepSize *= secondaryStepScale;
  }
  return opticalDepth;
}

float marchOpticalDepth(
  const vec3 rayOrigin,
  const vec3 rayDirection,
  const int maxIterationCount,
  const float mipLevel,
  const float jitter
) {
  float rayDistance;
  return marchOpticalDepth(
    rayOrigin,
    rayDirection,
    maxIterationCount,
    mipLevel,
    jitter,
    rayDistance
  );
}

float approximateMultipleScattering(const float opticalDepth, const float cosTheta) {
  // Multiple scattering approximation
  // See: https://fpsunflower.github.io/ckulla/data/oz_volumes.pdf
  // a: attenuation, b: contribution, c: phase attenuation
  vec3 coeffs = vec3(1.0); // [a, b, c]
  const vec3 attenuation = vec3(0.5, 0.5, 0.5); // Should satisfy a <= b
  float scattering = 0.0;
  float beerLambert;
  #pragma unroll_loop_start
  for (int i = 0; i < 12; ++i) {
    #if UNROLLED_LOOP_INDEX < MULTI_SCATTERING_OCTAVES
    beerLambert = exp(-opticalDepth * coeffs.y);
    scattering += coeffs.x * beerLambert * phaseFunction(cosTheta, coeffs.z);
    coeffs *= attenuation;
    #endif // UNROLLED_LOOP_INDEX < MULTI_SCATTERING_OCTAVES
  }
  #pragma unroll_loop_end
  return scattering;
}

// TODO: Construct spherical harmonics of degree 2 using 2 sample points
// positioned near the horizon occlusion points on the sun direction plane.
vec3 getGroundSunSkyIrradiance(
  const vec3 position,
  const vec3 surfaceNormal,
  const float height,
  out vec3 skyIrradiance
) {
  #ifdef ACCURATE_SUN_SKY_LIGHT
  return GetSunAndSkyIrradiance(
    (position - surfaceNormal * height) * METER_TO_LENGTH_UNIT,
    surfaceNormal,
    sunDirection,
    skyIrradiance
  );
  #else // ACCURATE_SUN_SKY_LIGHT
  skyIrradiance = vGroundIrradiance.sky;
  return vGroundIrradiance.sun;
  #endif // ACCURATE_SUN_SKY_LIGHT
}

vec3 getCloudsSunSkyIrradiance(const vec3 position, const float height, out vec3 skyIrradiance) {
  #ifdef ACCURATE_SUN_SKY_LIGHT
  return GetSunAndSkyScalarIrradiance(position * METER_TO_LENGTH_UNIT, sunDirection, skyIrradiance);
  #else // ACCURATE_SUN_SKY_LIGHT
  float alpha = remapClamped(height, minHeight, maxHeight);
  skyIrradiance = mix(vCloudsIrradiance.minSky, vCloudsIrradiance.maxSky, alpha);
  return mix(vCloudsIrradiance.minSun, vCloudsIrradiance.maxSun, alpha);
  #endif // ACCURATE_SUN_SKY_LIGHT
}

#ifdef GROUND_BOUNCE
vec3 approximateRadianceFromGround(
  const vec3 position,
  const vec3 surfaceNormal,
  const float height,
  const float mipLevel,
  const float jitter
) {
  float opticalDepthToGround = marchOpticalDepth(
    position,
    -surfaceNormal,
    maxIterationCountToGround,
    mipLevel,
    jitter
  );
  vec3 skyIrradiance;
  vec3 sunIrradiance = getGroundSunSkyIrradiance(position, surfaceNormal, height, skyIrradiance);
  const float groundAlbedo = 0.3;
  vec3 groundIrradiance = skyIrradiance + (1.0 - coverage) * sunIrradiance;
  vec3 bouncedRadiance = groundAlbedo * RECIPROCAL_PI * groundIrradiance;
  return bouncedRadiance * exp(-opticalDepthToGround);
}
#endif // GROUND_BOUNCE

vec4 marchClouds(
  const vec3 rayOrigin,
  const vec3 rayDirection,
  const vec2 rayNearFar,
  const float cosTheta,
  const float jitter,
  const float rayStartTexelsPerPixel,
  out float frontDepth,
  out ivec3 sampleCount
) {
  vec3 radianceIntegral = vec3(0.0);
  float transmittanceIntegral = 1.0;
  float weightedDistanceSum = 0.0;
  float transmittanceSum = 0.0;

  float maxRayDistance = rayNearFar.y - rayNearFar.x;
  float stepSize = minStepSize + (perspectiveStepScale - 1.0) * rayNearFar.x;
  // I don't understand why spatial aliasing remains unless doubling the jitter.
  float rayDistance = stepSize * jitter * 2.0;

  for (int i = 0; i < maxIterationCount; ++i) {
    if (rayDistance > maxRayDistance) {
      break; // Termination
    }

    vec3 position = rayDistance * rayDirection + rayOrigin;
    float height = length(position) - bottomRadius;
    float mipLevel = log2(max(1.0, rayStartTexelsPerPixel + rayDistance * 1e-5));

    #if !defined(DEBUG_MARCH_INTERVALS)
    if (insideLayerIntervals(height)) {
      stepSize *= perspectiveStepScale;
      rayDistance += mix(stepSize, maxStepSize, min(1.0, mipLevel));
      continue;
    }
    #endif // !defined(DEBUG_MARCH_INTERVALS)

    // Sample rough weather.
    vec2 uv = getGlobeUv(position);
    WeatherSample weather = sampleWeather(uv, height, mipLevel);

    #ifdef DEBUG_SHOW_SAMPLE_COUNT
    ++sampleCount.x;
    #endif // DEBUG_SHOW_SAMPLE_COUNT

    if (!any(greaterThan(weather.density, vec4(minDensity)))) {
      // Step longer in empty space.
      // TODO: This produces banding artifacts.
      // Possible improvement: Binary search refinement
      stepSize *= perspectiveStepScale;
      rayDistance += mix(stepSize, maxStepSize, min(1.0, mipLevel));
      continue;
    }

    // Sample detailed participating media.
    MediaSample media = sampleMedia(weather, position, uv, mipLevel, jitter, sampleCount);

    if (media.extinction > minExtinction) {
      vec3 skyIrradiance;
      vec3 sunIrradiance = getCloudsSunSkyIrradiance(position, height, skyIrradiance);
      vec3 surfaceNormal = normalize(position);

      // March optical depth to the sun for finer details, which BSM lacks.
      float sunRayDistance = 0.0;
      float opticalDepth = marchOpticalDepth(
        position,
        sunDirection,
        maxIterationCountToSun,
        mipLevel,
        jitter,
        sunRayDistance
      );

      if (height < shadowTopHeight) {
        // Obtain the optical depth from BSM at the ray position.
        opticalDepth += sampleShadowOpticalDepth(
          position,
          // Take account of only positions further than the marched ray
          // distance.
          sunRayDistance,
          // Apply PCF only when the sun is close to the horizon.
          maxShadowFilterRadius * remapClamped(dot(sunDirection, surfaceNormal), 0.1, 0.0),
          jitter
        );
      }

      vec3 radiance = sunIrradiance * approximateMultipleScattering(opticalDepth, cosTheta);

      #ifdef GROUND_BOUNCE
      // Fudge factor for the irradiance from ground.
      if (height < shadowTopHeight && mipLevel < 0.5) {
        vec3 groundRadiance = approximateRadianceFromGround(
          position,
          surfaceNormal,
          height,
          mipLevel,
          jitter
        );
        radiance += groundRadiance * RECIPROCAL_PI4 * groundBounceScale;
      }
      #endif // GROUND_BOUNCE

      // Crude approximation of sky gradient. Better than none in the shadows.
      float skyGradient = dot(weather.heightFraction * 0.5 + 0.5, media.weight);
      radiance += skyIrradiance * RECIPROCAL_PI4 * skyGradient * skyLightScale;

      // Finally multiply by scattering.
      radiance *= media.scattering;

      #ifdef POWDER
      radiance *= 1.0 - powderScale * exp(-media.extinction * powderExponent);
      #endif // POWDER

      #ifdef DEBUG_SHOW_CASCADES
      if (height < shadowTopHeight) {
        radiance = 1e-3 * getFadedCascadeColor(position, jitter);
      }
      #endif // DEBUG_SHOW_CASCADES

      // Energy-conserving analytical integration of scattered light
      // See 5.6.3 in https://media.contentapi.ea.com/content/dam/eacom/frostbite/files/s2016-pbs-frostbite-sky-clouds-new.pdf
      float transmittance = exp(-media.extinction * stepSize);
      float clampedExtinction = max(media.extinction, 1e-7);
      vec3 scatteringIntegral = (radiance - radiance * transmittance) / clampedExtinction;
      radianceIntegral += transmittanceIntegral * scatteringIntegral;
      transmittanceIntegral *= transmittance;

      // Aerial perspective affecting clouds
      // See 5.9.1 in https://media.contentapi.ea.com/content/dam/eacom/frostbite/files/s2016-pbs-frostbite-sky-clouds-new.pdf
      weightedDistanceSum += rayDistance * transmittanceIntegral;
      transmittanceSum += transmittanceIntegral;
    }

    if (transmittanceIntegral <= minTransmittance) {
      break; // Early termination
    }

    // Take a shorter step because we've already hit the clouds.
    stepSize *= perspectiveStepScale;
    rayDistance += stepSize;
  }

  // The final product of 5.9.1 and we'll evaluate this in aerial perspective.
  frontDepth = transmittanceSum > 0.0 ? weightedDistanceSum / transmittanceSum : -1.0;

  return vec4(radianceIntegral, remapClamped(transmittanceIntegral, 1.0, minTransmittance));
}

#ifdef SHADOW_LENGTH

float marchShadowLength(
  const vec3 rayOrigin,
  const vec3 rayDirection,
  const vec2 rayNearFar,
  const float jitter
) {
  float shadowLength = 0.0;
  float maxRayDistance = rayNearFar.y - rayNearFar.x;
  float stepSize = minShadowLengthStepSize;
  float rayDistance = stepSize * jitter;
  const float attenuationFactor = 1.0 - 5e-4;
  float attenuation = 1.0;

  // TODO: This march is closed, and sample resolution can be much lower.
  // Refining the termination by binary search will make it much more efficient.
  for (int i = 0; i < maxShadowLengthIterationCount; ++i) {
    if (rayDistance > maxRayDistance) {
      break; // Termination
    }
    vec3 position = rayDistance * rayDirection + rayOrigin;
    float opticalDepth = sampleShadowOpticalDepth(position, 0.0, 0.0, jitter);
    shadowLength += (1.0 - exp(-opticalDepth)) * stepSize * attenuation;
    stepSize *= perspectiveStepScale;
    rayDistance += stepSize;
  }
  return shadowLength;
}

#endif // SHADOW_LENGTH

#ifdef HAZE

vec4 approximateHaze(
  const vec3 rayOrigin,
  const vec3 rayDirection,
  const float maxRayDistance,
  const float cosTheta,
  const float shadowLength
) {
  float modulation = remapClamped(coverage, 0.2, 0.4);
  if (cameraHeight * modulation < 0.0) {
    return vec4(0.0);
  }
  float density = modulation * hazeDensityScale * exp(-cameraHeight * hazeExponent);
  if (density < 1e-7) {
    return vec4(0.0); // Prevent artifact in views from space
  }

  // Blend two normals by the difference in angle so that normal near the
  // ground becomes that of the origin, and in the sky that of the horizon.
  vec3 normalAtOrigin = normalize(rayOrigin);
  vec3 normalAtHorizon = (rayOrigin - dot(rayOrigin, rayDirection) * rayDirection) / bottomRadius;
  float alpha = remapClamped(dot(normalAtOrigin, normalAtHorizon), 0.9, 1.0);
  vec3 normal = mix(normalAtOrigin, normalAtHorizon, alpha);

  // Analytical optical depth where density exponentially decreases with height.
  // Based on: https://iquilezles.org/articles/fog/
  float angle = max(dot(normal, rayDirection), 1e-5);
  float exponent = angle * hazeExponent;
  float linearTerm = density / hazeExponent / angle;

  // Derive the optical depths separately for with and without shadow length.
  float expTerm = 1.0 - exp(-maxRayDistance * exponent);
  float shadowExpTerm = 1.0 - exp(-min(maxRayDistance, shadowLength) * exponent);
  float opticalDepth = expTerm * linearTerm;
  float shadowOpticalDepth = max((expTerm - shadowExpTerm) * linearTerm, 0.0);
  float transmittance = saturate(1.0 - exp(-opticalDepth));
  float shadowTransmittance = saturate(1.0 - exp(-shadowOpticalDepth));

  vec3 skyIrradiance = vGroundIrradiance.sky;
  vec3 sunIrradiance = vGroundIrradiance.sun;
  vec3 inscatter = sunIrradiance * phaseFunction(cosTheta) * shadowTransmittance;
  inscatter += skyIrradiance * RECIPROCAL_PI4 * skyLightScale * transmittance;
  inscatter *= hazeScatteringCoefficient / (hazeAbsorptionCoefficient + hazeScatteringCoefficient);
  return vec4(inscatter, transmittance);
}

#endif // HAZE

void applyAerialPerspective(
  const vec3 cameraPosition,
  const vec3 frontPosition,
  const float shadowLength,
  inout vec4 color
) {
  vec3 transmittance;
  vec3 inscatter = GetSkyRadianceToPoint(
    cameraPosition * METER_TO_LENGTH_UNIT,
    frontPosition * METER_TO_LENGTH_UNIT,
    shadowLength * METER_TO_LENGTH_UNIT,
    sunDirection,
    transmittance
  );
  color.rgb = color.rgb * transmittance + inscatter * color.a;
}

bool rayIntersectsGround(const vec3 cameraPosition, const vec3 rayDirection) {
  float r = length(cameraPosition);
  float mu = dot(cameraPosition, rayDirection) / r;
  return mu < 0.0 && r * r * (mu * mu - 1.0) + bottomRadius * bottomRadius >= 0.0;
}

struct IntersectionResult {
  bool ground;
  vec4 first;
  vec4 second;
};

IntersectionResult getIntersections(const vec3 cameraPosition, const vec3 rayDirection) {
  IntersectionResult intersections;
  intersections.ground = rayIntersectsGround(cameraPosition, rayDirection);
  raySphereIntersections(
    cameraPosition,
    rayDirection,
    bottomRadius + vec4(0.0, minHeight, maxHeight, shadowTopHeight),
    intersections.first,
    intersections.second
  );
  return intersections;
}

vec2 getRayNearFar(const IntersectionResult intersections) {
  vec2 nearFar;
  if (cameraHeight < minHeight) {
    // View below the clouds
    if (intersections.ground) {
      nearFar = vec2(-1.0); // No clouds to the ground
    } else {
      nearFar = vec2(intersections.second.y, intersections.second.z);
      nearFar.y = min(nearFar.y, maxRayDistance);
    }
  } else if (cameraHeight < maxHeight) {
    // View inside the total cloud layer
    if (intersections.ground) {
      nearFar = vec2(cameraNear, intersections.first.y);
    } else {
      nearFar = vec2(cameraNear, intersections.second.z);
    }
  } else {
    // View above the clouds
    nearFar = vec2(intersections.first.z, intersections.second.z);
    if (intersections.ground) {
      // Clamp the ray at the min height.
      nearFar.y = intersections.first.y;
    }
  }
  return nearFar;
}

#ifdef SHADOW_LENGTH
vec2 getShadowRayNearFar(const IntersectionResult intersections) {
  vec2 nearFar;
  if (cameraHeight < shadowTopHeight) {
    if (intersections.ground) {
      nearFar = vec2(cameraNear, intersections.first.x);
    } else {
      nearFar = vec2(cameraNear, intersections.second.w);
    }
  } else {
    nearFar = vec2(intersections.first.w, intersections.second.w);
    if (intersections.ground) {
      // Clamp the ray at the ground.
      nearFar.y = intersections.first.x;
    }
  }
  nearFar.y = min(nearFar.y, maxShadowLengthRayDistance);
  return nearFar;
}
#endif // SHADOW_LENGTH

#ifdef HAZE
vec2 getHazeRayNearFar(const IntersectionResult intersections) {
  vec2 nearFar;
  if (cameraHeight < maxHeight) {
    if (intersections.ground) {
      nearFar = vec2(cameraNear, intersections.first.x);
    } else {
      nearFar = vec2(cameraNear, intersections.second.z);
    }
  } else {
    nearFar = vec2(cameraNear, intersections.second.z);
    if (intersections.ground) {
      // Clamp the ray at the ground.
      nearFar.y = intersections.first.x;
    }
  }
  return nearFar;
}
#endif // HAZE

float getRayDistanceToScene(const vec3 rayDirection, out float viewZ) {
  float depth = readDepthValue(depthBuffer, vUv * targetUvScale + temporalJitter);
  if (depth < 1.0 - 1e-7) {
    depth = reverseLogDepth(depth, cameraNear, cameraFar);
    viewZ = getViewZ(depth);
    return -viewZ / dot(rayDirection, vCameraDirection);
  }
  viewZ = 0.0;
  return 0.0;
}

void main() {
  #ifdef DEBUG_SHOW_SHADOW_MAP
  outputColor = getCascadedShadowMaps(vUv);
  outputDepthVelocity = vec3(0.0);
  #ifdef SHADOW_LENGTH
  outputShadowLength = 0.0;
  #endif // SHADOW_LENGTH
  return;
  #endif // DEBUG_SHOW_SHADOW_MAP

  vec3 cameraPosition = vCameraPosition + altitudeCorrection;
  vec3 rayDirection = normalize(vRayDirection);
  float cosTheta = dot(sunDirection, rayDirection);

  IntersectionResult intersections = getIntersections(cameraPosition, rayDirection);
  vec2 rayNearFar = getRayNearFar(intersections);
  #ifdef SHADOW_LENGTH
  vec2 shadowRayNearFar = getShadowRayNearFar(intersections);
  #endif // SHADOW_LENGTH
  #ifdef HAZE
  vec2 hazeRayNearFar = getHazeRayNearFar(intersections);
  #endif // HAZE

  float sceneViewZ;
  float rayDistanceToScene = getRayDistanceToScene(rayDirection, sceneViewZ);
  if (rayDistanceToScene > 0.0) {
    rayNearFar.y = min(rayNearFar.y, rayDistanceToScene);
    #ifdef SHADOW_LENGTH
    shadowRayNearFar.y = min(shadowRayNearFar.y, rayDistanceToScene);
    #endif // SHADOW_LENGTH
    #ifdef HAZE
    hazeRayNearFar.y = min(hazeRayNearFar.y, rayDistanceToScene);
    #endif // HAZE
  }

  bool intersectsGround = any(lessThan(rayNearFar, vec2(0.0)));
  bool intersectsScene = rayNearFar.y < rayNearFar.x;

  float stbn = getSTBN();

  vec4 color = vec4(0.0);
  float frontDepth = rayNearFar.y;
  vec3 depthVelocity = vec3(0.0);
  float shadowLength = 0.0;
  bool hitClouds = false;

  if (!intersectsGround && !intersectsScene) {
    vec3 rayOrigin = rayNearFar.x * rayDirection + cameraPosition;

    vec2 globeUv = getGlobeUv(rayOrigin);
    #ifdef DEBUG_SHOW_UV
    outputColor = vec4(vec3(checker(globeUv, localWeatherRepeat + localWeatherOffset)), 1.0);
    outputDepthVelocity = vec3(0.0);
    #ifdef SHADOW_LENGTH
    outputShadowLength = 0.0;
    #endif // SHADOW_LENGTH
    return;
    #endif // DEBUG_SHOW_UV

    float mipLevel = getMipLevel(globeUv * localWeatherRepeat) * mipLevelScale;
    mipLevel = mix(0.0, mipLevel, min(1.0, 0.2 * cameraHeight / maxHeight));

    float marchedFrontDepth;
    ivec3 sampleCount = ivec3(0);
    color = marchClouds(
      rayOrigin,
      rayDirection,
      rayNearFar,
      cosTheta,
      stbn,
      pow(2.0, mipLevel),
      marchedFrontDepth,
      sampleCount
    );

    #ifdef DEBUG_SHOW_SAMPLE_COUNT
    outputColor = vec4(vec3(sampleCount) / vec3(500.0, 5.0, 5.0), 1.0);
    outputDepthVelocity = vec3(0.0);
    #ifdef SHADOW_LENGTH
    outputShadowLength = 0.0;
    #endif // SHADOW_LENGTH
    return;
    #endif // DEBUG_SHOW_SAMPLE_COUNT

    // Front depth will be -1.0 when no samples are accumulated.
    hitClouds = marchedFrontDepth >= 0.0;
    if (hitClouds) {
      frontDepth = rayNearFar.x + marchedFrontDepth;

      #ifdef SHADOW_LENGTH
      // Clamp the shadow length ray at the clouds.
      shadowRayNearFar.y = mix(
        shadowRayNearFar.y,
        min(frontDepth, shadowRayNearFar.y),
        color.a // Interpolate by the alpha for smoother edges.
      );

      // Shadow length must be computed before applying aerial perspective.
      if (all(greaterThanEqual(shadowRayNearFar, vec2(0.0)))) {
        shadowLength = marchShadowLength(
          shadowRayNearFar.x * rayDirection + cameraPosition,
          rayDirection,
          shadowRayNearFar,
          stbn
        );
      }
      #endif // SHADOW_LENGTH

      #ifdef HAZE
      // Clamp the haze ray at the clouds.
      hazeRayNearFar.y = mix(
        hazeRayNearFar.y,
        min(frontDepth, hazeRayNearFar.y),
        color.a // Interpolate by the alpha for smoother edges.
      );
      #endif // HAZE

      // Apply aerial perspective.
      vec3 frontPosition = cameraPosition + frontDepth * rayDirection;
      applyAerialPerspective(cameraPosition, frontPosition, shadowLength, color);

      // Velocity for temporal resolution.
      vec3 frontPositionWorld = ecefToWorld(frontPosition);
      vec4 prevClip = reprojectionMatrix * vec4(frontPositionWorld, 1.0);
      prevClip /= prevClip.w;
      vec2 prevUv = prevClip.xy * 0.5 + 0.5;
      vec2 velocity = vUv - prevUv;
      depthVelocity = vec3(frontDepth, velocity);
    }
  }

  if (!hitClouds) {
    #ifdef SHADOW_LENGTH
    if (all(greaterThanEqual(shadowRayNearFar, vec2(0.0)))) {
      shadowLength = marchShadowLength(
        shadowRayNearFar.x * rayDirection + cameraPosition,
        rayDirection,
        shadowRayNearFar,
        stbn
      );
    }
    #endif // SHADOW_LENGTH

    // Velocity for temporal resolution. Here reproject in the view space for
    // greatly reducing the precision errors.
    frontDepth = sceneViewZ < 0.0 ? -sceneViewZ : cameraFar;
    vec3 frontView = vViewPosition * frontDepth;
    vec4 prevClip = viewReprojectionMatrix * vec4(frontView, 1.0);
    prevClip /= prevClip.w;
    vec2 prevUv = prevClip.xy * 0.5 + 0.5;
    vec2 velocity = vUv - prevUv;
    depthVelocity = vec3(frontDepth, velocity);
  }

  #ifdef DEBUG_SHOW_FRONT_DEPTH
  outputColor = vec4(turbo(frontDepth / maxRayDistance), 1.0);
  outputDepthVelocity = vec3(0.0);
  #ifdef SHADOW_LENGTH
  outputShadowLength = 0.0;
  #endif // SHADOW_LENGTH
  return;
  #endif // DEBUG_SHOW_FRONT_DEPTH

  #ifdef HAZE
  vec4 haze = approximateHaze(
    cameraNear * rayDirection + cameraPosition,
    rayDirection,
    hazeRayNearFar.y - hazeRayNearFar.x,
    cosTheta,
    shadowLength
  );
  color.rgb = mix(color.rgb, haze.rgb, haze.a);
  color.a = color.a * (1.0 - haze.a) + haze.a;
  #endif // HAZE

  outputColor = color;
  outputDepthVelocity = depthVelocity;
  #ifdef SHADOW_LENGTH
  outputShadowLength = shadowLength * METER_TO_LENGTH_UNIT;
  #endif // SHADOW_LENGTH
}
`,Lo=`float getSTBN() {
  ivec3 size = textureSize(stbnTexture, 0);
  vec3 scale = 1.0 / vec3(size);
  return texture(stbnTexture, vec3(gl_FragCoord.xy, float(frame % size.z)) * scale).r;
}

// Straightforward spherical mapping
vec2 getSphericalUv(const vec3 position) {
  vec2 st = normalize(position.yx);
  float phi = atan(st.x, st.y);
  float theta = asin(normalize(position).z);
  return vec2(phi * RECIPROCAL_PI2 + 0.5, theta * RECIPROCAL_PI + 0.5);
}

vec2 getCubeSphereUv(const vec3 position) {
  // Cube-sphere relaxation by: http://mathproofs.blogspot.com/2005/07/mapping-cube-to-sphere.html
  // TODO: Tile and fix seams.
  // Possible improvements:
  // https://iquilezles.org/articles/texturerepetition/
  // https://gamedev.stackexchange.com/questions/184388/fragment-shader-map-dot-texture-repeatedly-over-the-sphere
  // https://github.com/mmikk/hextile-demo

  vec3 n = normalize(position);
  vec3 f = abs(n);
  vec3 c = n / max(f.x, max(f.y, f.z));
  vec2 m;
  if (all(greaterThan(f.yy, f.xz))) {
    m = c.y > 0.0 ? vec2(-n.x, n.z) : n.xz;
  } else if (all(greaterThan(f.xx, f.yz))) {
    m = c.x > 0.0 ? n.yz : vec2(-n.y, n.z);
  } else {
    m = c.z > 0.0 ? n.xy : vec2(n.x, -n.y);
  }

  vec2 m2 = m * m;
  float q = dot(m2.xy, vec2(-2.0, 2.0)) - 3.0;
  float q2 = q * q;
  vec2 uv;
  uv.x = sqrt(1.5 + m2.x - m2.y - 0.5 * sqrt(-24.0 * m2.x + q2)) * (m.x > 0.0 ? 1.0 : -1.0);
  uv.y = sqrt(6.0 / (3.0 - uv.x * uv.x)) * m.y;
  return uv * 0.5 + 0.5;
}

vec2 getGlobeUv(const vec3 position) {
  return getCubeSphereUv(position);
}

float getMipLevel(const vec2 uv) {
  const float mipLevelScale = 0.1;
  vec2 coord = uv * resolution;
  vec2 ddx = dFdx(coord);
  vec2 ddy = dFdy(coord);
  float deltaMaxSqr = max(dot(ddx, ddx), dot(ddy, ddy)) * mipLevelScale;
  return max(0.0, 0.5 * log2(max(1.0, deltaMaxSqr)));
}

bool insideLayerIntervals(const float height) {
  bvec3 gt = greaterThan(vec3(height), minIntervalHeights);
  bvec3 lt = lessThan(vec3(height), maxIntervalHeights);
  return any(bvec3(gt.x && lt.x, gt.y && lt.y, gt.z && lt.z));
}

struct WeatherSample {
  vec4 heightFraction; // Normalized height of each layer
  vec4 density;
};

vec4 shapeAlteringFunction(const vec4 heightFraction, const vec4 bias) {
  // Apply a semi-circle transform to round the clouds towards the top.
  vec4 biased = pow(heightFraction, bias);
  vec4 x = clamp(biased * 2.0 - 1.0, -1.0, 1.0);
  return 1.0 - x * x;
}

WeatherSample sampleWeather(const vec2 uv, const float height, const float mipLevel) {
  WeatherSample weather;
  weather.heightFraction = remapClamped(vec4(height), minLayerHeights, maxLayerHeights);

  vec4 localWeather = pow(
    textureLod(
      localWeatherTexture,
      uv * localWeatherRepeat + localWeatherOffset,
      mipLevel
    ).LOCAL_WEATHER_CHANNELS,
    weatherExponents
  );
  #ifdef SHADOW
  localWeather *= shadowLayerMask;
  #endif // SHADOW

  vec4 heightScale = shapeAlteringFunction(weather.heightFraction, shapeAlteringBiases);

  // Modulation to control weather by coverage parameter.
  // Reference: https://github.com/Prograda/Skybolt/blob/master/Assets/Core/Shaders/Clouds.h#L63
  vec4 factor = 1.0 - coverage * heightScale;
  weather.density = remapClamped(
    mix(localWeather, vec4(1.0), coverageFilterWidths),
    factor,
    factor + coverageFilterWidths
  );

  return weather;
}

vec4 getLayerDensity(const vec4 heightFraction) {
  // prettier-ignore
  return densityProfile.expTerms * exp(densityProfile.exponents * heightFraction) +
    densityProfile.linearTerms * heightFraction +
    densityProfile.constantTerms;
}

struct MediaSample {
  float density;
  vec4 weight;
  float scattering;
  float extinction;
};

MediaSample sampleMedia(
  const WeatherSample weather,
  const vec3 position,
  const vec2 uv,
  const float mipLevel,
  const float jitter,
  out ivec3 sampleCount
) {
  vec4 density = weather.density;

  // TODO: Define in physical length.
  vec3 surfaceNormal = normalize(position);
  float localWeatherSpeed = length(localWeatherOffset);
  vec3 evolution = -surfaceNormal * localWeatherSpeed * 2e4;

  vec3 turbulence = vec3(0.0);
  #ifdef TURBULENCE
  vec2 turbulenceUv = uv * localWeatherRepeat * turbulenceRepeat;
  turbulence =
    turbulenceDisplacement *
    (texture(turbulenceTexture, turbulenceUv).rgb * 2.0 - 1.0) *
    dot(density, remapClamped(weather.heightFraction, vec4(0.3), vec4(0.0)));
  #endif // TURBULENCE

  vec3 shapePosition = (position + evolution + turbulence) * shapeRepeat + shapeOffset;
  float shape = texture(shapeTexture, shapePosition).r;
  density = remapClamped(density, vec4(1.0 - shape) * shapeAmounts, vec4(1.0));

  #ifdef DEBUG_SHOW_SAMPLE_COUNT
  ++sampleCount.y;
  #endif // DEBUG_SHOW_SAMPLE_COUNT

  #ifdef SHAPE_DETAIL
  if (mipLevel * 0.5 + (jitter - 0.5) * 0.5 < 0.5) {
    vec3 detailPosition = (position + turbulence) * shapeDetailRepeat + shapeDetailOffset;
    float detail = texture(shapeDetailTexture, detailPosition).r;
    // Fluffy at the top and whippy at the bottom.
    vec4 modifier = mix(
      vec4(pow(detail, 6.0)),
      vec4(1.0 - detail),
      remapClamped(weather.heightFraction, vec4(0.2), vec4(0.4))
    );
    modifier = mix(vec4(0.0), modifier, shapeDetailAmounts);
    density = remapClamped(density * 2.0, vec4(modifier * 0.5), vec4(1.0));

    #ifdef DEBUG_SHOW_SAMPLE_COUNT
    ++sampleCount.z;
    #endif // DEBUG_SHOW_SAMPLE_COUNT
  }
  #endif // SHAPE_DETAIL

  // Apply the density profiles.
  density = saturate(density * densityScales * getLayerDensity(weather.heightFraction));

  MediaSample media;
  float densitySum = density.x + density.y + density.z + density.w;
  media.weight = density / densitySum;
  media.scattering = densitySum * scatteringCoefficient;
  media.extinction = densitySum * absorptionCoefficient + media.scattering;
  return media;
}

MediaSample sampleMedia(
  const WeatherSample weather,
  const vec3 position,
  const vec2 uv,
  const float mipLevel,
  const float jitter
) {
  ivec3 sampleCount;
  return sampleMedia(weather, position, uv, mipLevel, jitter, sampleCount);
}
`,nh=`precision highp float;
precision highp sampler3D;

#include "atmosphere/bruneton/definitions"

uniform AtmosphereParameters ATMOSPHERE;
uniform vec3 SUN_SPECTRAL_RADIANCE_TO_LUMINANCE;
uniform vec3 SKY_SPECTRAL_RADIANCE_TO_LUMINANCE;

uniform sampler2D transmittance_texture;
uniform sampler3D scattering_texture;
uniform sampler2D irradiance_texture;
uniform sampler3D single_mie_scattering_texture;
uniform sampler3D higher_order_scattering_texture;

#include "atmosphere/bruneton/common"
#include "atmosphere/bruneton/runtime"

#include "types"

uniform mat4 inverseProjectionMatrix;
uniform mat4 inverseViewMatrix;
uniform vec3 cameraPosition;
uniform mat4 worldToECEFMatrix;
uniform vec3 altitudeCorrection;

// Atmosphere
uniform float bottomRadius;
uniform vec3 sunDirection;

// Cloud layers
uniform float minHeight;
uniform float maxHeight;

layout(location = 0) in vec3 position;

out vec2 vUv;
out vec3 vCameraPosition;
out vec3 vCameraDirection; // Direction to the center of screen
out vec3 vRayDirection; // Direction to the texel
out vec3 vViewPosition;

out GroundIrradiance vGroundIrradiance;
out CloudsIrradiance vCloudsIrradiance;

void sampleSunSkyIrradiance(const vec3 positionECEF) {
  vGroundIrradiance.sun = GetSunAndSkyScalarIrradiance(
    positionECEF * METER_TO_LENGTH_UNIT,
    sunDirection,
    vGroundIrradiance.sky
  );

  vec3 surfaceNormal = normalize(positionECEF);
  vec2 radii = (bottomRadius + vec2(minHeight, maxHeight)) * METER_TO_LENGTH_UNIT;
  vCloudsIrradiance.minSun = GetSunAndSkyScalarIrradiance(
    surfaceNormal * radii.x,
    sunDirection,
    vCloudsIrradiance.minSky
  );
  vCloudsIrradiance.maxSun = GetSunAndSkyScalarIrradiance(
    surfaceNormal * radii.y,
    sunDirection,
    vCloudsIrradiance.maxSky
  );
}

void main() {
  vUv = position.xy * 0.5 + 0.5;

  vec3 viewPosition = (inverseProjectionMatrix * vec4(position, 1.0)).xyz;
  vec3 worldDirection = (inverseViewMatrix * vec4(viewPosition.xyz, 0.0)).xyz;
  vec3 cameraDirection = normalize((inverseViewMatrix * vec4(0.0, 0.0, -1.0, 0.0)).xyz);
  vCameraPosition = (worldToECEFMatrix * vec4(cameraPosition, 1.0)).xyz;
  vCameraDirection = (worldToECEFMatrix * vec4(cameraDirection, 0.0)).xyz;
  vRayDirection = (worldToECEFMatrix * vec4(worldDirection, 0.0)).xyz;
  vViewPosition = viewPosition;

  sampleSunSkyIrradiance(vCameraPosition + altitudeCorrection);

  gl_Position = vec4(position.xy, 1.0, 1.0);
}
`,Po=`uniform vec2 resolution;
uniform int frame;
uniform sampler3D stbnTexture;

// Atmosphere
uniform float bottomRadius;
uniform mat4 worldToECEFMatrix;
uniform mat4 ecefToWorldMatrix;
uniform vec3 altitudeCorrection;
uniform vec3 sunDirection;

// Participating medium
uniform float scatteringCoefficient;
uniform float absorptionCoefficient;

// Primary raymarch
uniform float minDensity;
uniform float minExtinction;
uniform float minTransmittance;

// Shape and weather
uniform sampler2D localWeatherTexture;
uniform vec2 localWeatherRepeat;
uniform vec2 localWeatherOffset;
uniform float coverage;
uniform sampler3D shapeTexture;
uniform vec3 shapeRepeat;
uniform vec3 shapeOffset;

#ifdef SHAPE_DETAIL
uniform sampler3D shapeDetailTexture;
uniform vec3 shapeDetailRepeat;
uniform vec3 shapeDetailOffset;
#endif // SHAPE_DETAIL

#ifdef TURBULENCE
uniform sampler2D turbulenceTexture;
uniform vec2 turbulenceRepeat;
uniform float turbulenceDisplacement;
#endif // TURBULENCE

// Haze
#ifdef HAZE
uniform float hazeDensityScale;
uniform float hazeExponent;
uniform float hazeScatteringCoefficient;
uniform float hazeAbsorptionCoefficient;
#endif // HAZE

// Cloud layers
uniform vec4 minLayerHeights;
uniform vec4 maxLayerHeights;
uniform vec3 minIntervalHeights;
uniform vec3 maxIntervalHeights;
uniform vec4 densityScales;
uniform vec4 shapeAmounts;
uniform vec4 shapeDetailAmounts;
uniform vec4 weatherExponents;
uniform vec4 shapeAlteringBiases;
uniform vec4 coverageFilterWidths;
uniform float minHeight;
uniform float maxHeight;
uniform float shadowTopHeight;
uniform float shadowBottomHeight;
uniform vec4 shadowLayerMask;
uniform CloudDensityProfile densityProfile;
`,Hi=`struct GroundIrradiance {
  vec3 sun;
  vec3 sky;
};

struct CloudsIrradiance {
  vec3 minSun;
  vec3 minSky;
  vec3 maxSun;
  vec3 maxSky;
};

struct CloudDensityProfile {
  vec4 expTerms;
  vec4 exponents;
  vec4 linearTerms;
  vec4 constantTerms;
};
`;var oh=Object.defineProperty,fe=(r,e,t,i)=>{for(var a=void 0,n=r.length-1,o;n>=0;n--)(o=r[n])&&(a=o(e,t,a)||a);return a&&oh(e,t,a),a};const sh=new q,ch=new Fi;let he=class extends tr{constructor({parameterUniforms:e,layerUniforms:t,atmosphereUniforms:i},a=er.DEFAULT){super({name:"CloudsMaterial",glslVersion:Wr,vertexShader:$e(nh,{atmosphere:{bruneton:{common:nn,definitions:on,runtime:an}},types:Hi}),fragmentShader:Qt($e(ah,{core:{depth:oo,math:qi,turbo:co,generators:el,raySphereIntersection:Pr,cascadedShadowMaps:no,interleavedGradientNoise:so,vogelDisk:lo},atmosphere:{bruneton:{common:nn,definitions:on,runtime:an}},types:Hi,parameters:Po,clouds:Lo})),uniforms:{...e,...t,...i,depthBuffer:new f(null),viewMatrix:new f(new Z),inverseProjectionMatrix:new f(new Z),inverseViewMatrix:new f(new Z),reprojectionMatrix:new f(new Z),viewReprojectionMatrix:new f(new Z),resolution:new f(new X),cameraNear:new f(0),cameraFar:new f(0),cameraHeight:new f(0),frame:new f(0),temporalJitter:new f(new X),targetUvScale:new f(new X),mipLevelScale:new f(1),stbnTexture:new f(null),skyLightScale:new f(1),groundBounceScale:new f(1),powderScale:new f(.8),powderExponent:new f(150),maxIterationCount:new f(R.clouds.maxIterationCount),minStepSize:new f(R.clouds.minStepSize),maxStepSize:new f(R.clouds.maxStepSize),maxRayDistance:new f(R.clouds.maxRayDistance),perspectiveStepScale:new f(R.clouds.perspectiveStepScale),minDensity:new f(R.clouds.minDensity),minExtinction:new f(R.clouds.minExtinction),minTransmittance:new f(R.clouds.minTransmittance),maxIterationCountToSun:new f(R.clouds.maxIterationCountToSun),maxIterationCountToGround:new f(R.clouds.maxIterationCountToGround),minSecondaryStepSize:new f(R.clouds.minSecondaryStepSize),secondaryStepScale:new f(R.clouds.secondaryStepScale),shadowBuffer:new f(null),shadowTexelSize:new f(new X),shadowIntervals:new f(Array.from({length:4},()=>new X)),shadowMatrices:new f(Array.from({length:4},()=>new Z)),shadowFar:new f(0),maxShadowFilterRadius:new f(6),shadowLayerMask:new f(new me().setScalar(1)),maxShadowLengthIterationCount:new f(R.clouds.maxShadowLengthIterationCount),minShadowLengthStepSize:new f(R.clouds.minShadowLengthStepSize),maxShadowLengthRayDistance:new f(R.clouds.maxShadowLengthRayDistance),hazeDensityScale:new f(3e-5),hazeExponent:new f(.001),hazeScatteringCoefficient:new f(.9),hazeAbsorptionCoefficient:new f(.5)}},a),this.temporalUpscale=!0,this.depthPacking=0,this.localWeatherChannels="rgba",this.shapeDetail=R.shapeDetail,this.turbulence=R.turbulence,this.shadowLength=R.lightShafts,this.haze=R.haze,this.multiScatteringOctaves=R.clouds.multiScatteringOctaves,this.accurateSunSkyLight=R.clouds.accurateSunSkyLight,this.accuratePhaseFunction=R.clouds.accuratePhaseFunction,this.shadowCascadeCount=R.shadow.cascadeCount,this.shadowSampleCount=8,this.scatterAnisotropy1=.7,this.scatterAnisotropy2=-.2,this.scatterAnisotropyMix=.5}onBeforeRender(e,t,i,a,n,o){const s=this.defines.USE_LOGARITHMIC_DEPTH_BUFFER!=null,c=e.capabilities.logarithmicDepthBuffer;c!==s&&(c?this.defines.USE_LOGARITHMIC_DEPTH_BUFFER="1":delete this.defines.USE_LOGARITHMIC_DEPTH_BUFFER);const u=this.defines.POWDER!=null,l=this.uniforms.powderScale.value>0;l!==u&&(l?this.defines.POWDER="1":delete this.defines.POWDER,this.needsUpdate=!0);const m=this.defines.GROUND_BOUNCE!=null;(this.uniforms.groundBounceScale.value>0&&this.uniforms.maxIterationCountToGround.value>0)!==m&&(l?this.defines.GROUND_BOUNCE="1":delete this.defines.GROUND_BOUNCE,this.needsUpdate=!0)}copyCameraSettings(e){e.isPerspectiveCamera===!0?this.defines.PERSPECTIVE_CAMERA!=="1"&&(this.defines.PERSPECTIVE_CAMERA="1",this.needsUpdate=!0):this.defines.PERSPECTIVE_CAMERA!=null&&(delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0);const t=this.uniforms;t.viewMatrix.value.copy(e.matrixWorldInverse),t.inverseViewMatrix.value.copy(e.matrixWorld);const i=this.previousProjectionMatrix??e.projectionMatrix,a=this.previousViewMatrix??e.matrixWorldInverse,n=t.inverseProjectionMatrix.value,o=t.inverseViewMatrix.value,s=t.reprojectionMatrix.value,c=t.viewReprojectionMatrix.value;if(this.temporalUpscale){const m=t.frame.value%16,p=t.resolution.value,g=Mo[m],y=(g.x-.5)/p.x*4,x=(g.y-.5)/p.y*4;t.temporalJitter.value.set(y,x),t.mipLevelScale.value=.25,n.copy(e.projectionMatrix),n.elements[8]+=y*2,n.elements[9]+=x*2,n.invert(),s.copy(i),s.elements[8]+=y*2,s.elements[9]+=x*2,s.multiply(a),c.copy(s).multiply(o)}else t.temporalJitter.value.setScalar(0),t.mipLevelScale.value=1,n.copy(e.projectionMatrixInverse),s.copy(i).multiply(a),c.copy(s).multiply(o);t.cameraNear.value=e.near,t.cameraFar.value=e.far;const u=e.getWorldPosition(t.cameraPosition.value),l=sh.copy(u).applyMatrix4(t.worldToECEFMatrix.value);try{t.cameraHeight.value=ch.setFromECEF(l).height}catch{}}copyReprojectionMatrix(e){this.previousProjectionMatrix??=new Z,this.previousViewMatrix??=new Z,this.previousProjectionMatrix.copy(e.projectionMatrix),this.previousViewMatrix.copy(e.matrixWorldInverse)}setSize(e,t,i,a){this.uniforms.resolution.value.set(e,t),i!=null&&a!=null?this.uniforms.targetUvScale.value.set(e/i,t/a):this.uniforms.targetUvScale.value.setScalar(1),this.previousProjectionMatrix=void 0,this.previousViewMatrix=void 0}setShadowSize(e,t){this.uniforms.shadowTexelSize.value.set(1/e,1/t)}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(e){this.uniforms.depthBuffer.value=e}};fe([ut("DEPTH_PACKING")],he.prototype,"depthPacking");fe([ao("LOCAL_WEATHER_CHANNELS",{validate:r=>/^[rgba]{4}$/.test(r)})],he.prototype,"localWeatherChannels");fe([M("SHAPE_DETAIL")],he.prototype,"shapeDetail");fe([M("TURBULENCE")],he.prototype,"turbulence");fe([M("SHADOW_LENGTH")],he.prototype,"shadowLength");fe([M("HAZE")],he.prototype,"haze");fe([ut("MULTI_SCATTERING_OCTAVES",{min:1,max:12})],he.prototype,"multiScatteringOctaves");fe([M("ACCURATE_SUN_SKY_LIGHT")],he.prototype,"accurateSunSkyLight");fe([M("ACCURATE_PHASE_FUNCTION")],he.prototype,"accuratePhaseFunction");fe([ut("SHADOW_CASCADE_COUNT",{min:1,max:4})],he.prototype,"shadowCascadeCount");fe([ut("SHADOW_SAMPLE_COUNT",{min:1,max:16})],he.prototype,"shadowSampleCount");fe([Yi("SCATTER_ANISOTROPY_1")],he.prototype,"scatterAnisotropy1");fe([Yi("SCATTER_ANISOTROPY_2")],he.prototype,"scatterAnisotropy2");fe([Yi("SCATTER_ANISOTROPY_MIX")],he.prototype,"scatterAnisotropyMix");const lh=`// Taken from https://gist.github.com/TheRealMJP/c83b8c0f46b63f3a88a5986f4fa982b1
// TODO: Use 5-taps version: https://www.shadertoy.com/view/MtVGWz
// Or even 4 taps (requires preprocessing in the input buffer):
// https://www.shadertoy.com/view/4tyGDD

/**
 * MIT License
 *
 * Copyright (c) 2019 MJP
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

vec4 textureCatmullRom(sampler2D tex, vec2 uv) {
  vec2 texSize = vec2(textureSize(tex, 0));

  // We're going to sample a a 4x4 grid of texels surrounding the target UV
  // coordinate. We'll do this by rounding down the sample location to get the
  // exact center of our "starting" texel. The starting texel will be at
  // location [1, 1] in the grid, where [0, 0] is the top left corner.
  vec2 samplePos = uv * texSize;
  vec2 texPos1 = floor(samplePos - 0.5) + 0.5;

  // Compute the fractional offset from our starting texel to our original
  // sample location, which we'll feed into the Catmull-Rom spline function to
  // get our filter weights.
  vec2 f = samplePos - texPos1;

  // Compute the Catmull-Rom weights using the fractional offset that we
  // calculated earlier. These equations are pre-expanded based on our knowledge
  // of where the texels will be located, which lets us avoid having to evaluate
  // a piece-wise function.
  vec2 w0 = f * (-0.5 + f * (1.0 - 0.5 * f));
  vec2 w1 = 1.0 + f * f * (-2.5 + 1.5 * f);
  vec2 w2 = f * (0.5 + f * (2.0 - 1.5 * f));
  vec2 w3 = f * f * (-0.5 + 0.5 * f);

  // Work out weighting factors and sampling offsets that will let us use
  // bilinear filtering to simultaneously evaluate the middle 2 samples from the
  // 4x4 grid.
  vec2 w12 = w1 + w2;
  vec2 offset12 = w2 / (w1 + w2);

  // Compute the final UV coordinates we'll use for sampling the texture
  vec2 texPos0 = texPos1 - 1.0;
  vec2 texPos3 = texPos1 + 2.0;
  vec2 texPos12 = texPos1 + offset12;

  texPos0 /= texSize;
  texPos3 /= texSize;
  texPos12 /= texSize;

  vec4 result = vec4(0.0);
  result += texture(tex, vec2(texPos0.x, texPos0.y)) * w0.x * w0.y;
  result += texture(tex, vec2(texPos12.x, texPos0.y)) * w12.x * w0.y;
  result += texture(tex, vec2(texPos3.x, texPos0.y)) * w3.x * w0.y;

  result += texture(tex, vec2(texPos0.x, texPos12.y)) * w0.x * w12.y;
  result += texture(tex, vec2(texPos12.x, texPos12.y)) * w12.x * w12.y;
  result += texture(tex, vec2(texPos3.x, texPos12.y)) * w3.x * w12.y;

  result += texture(tex, vec2(texPos0.x, texPos3.y)) * w0.x * w3.y;
  result += texture(tex, vec2(texPos12.x, texPos3.y)) * w12.x * w3.y;
  result += texture(tex, vec2(texPos3.x, texPos3.y)) * w3.x * w3.y;

  return result;
}

vec4 textureCatmullRom(sampler2DArray tex, vec3 uv) {
  vec2 texSize = vec2(textureSize(tex, 0));
  vec2 samplePos = uv.xy * texSize;
  vec2 texPos1 = floor(samplePos - 0.5) + 0.5;
  vec2 f = samplePos - texPos1;
  vec2 w0 = f * (-0.5 + f * (1.0 - 0.5 * f));
  vec2 w1 = 1.0 + f * f * (-2.5 + 1.5 * f);
  vec2 w2 = f * (0.5 + f * (2.0 - 1.5 * f));
  vec2 w3 = f * f * (-0.5 + 0.5 * f);
  vec2 w12 = w1 + w2;
  vec2 offset12 = w2 / (w1 + w2);
  vec2 texPos0 = texPos1 - 1.0;
  vec2 texPos3 = texPos1 + 2.0;
  vec2 texPos12 = texPos1 + offset12;
  texPos0 /= texSize;
  texPos3 /= texSize;
  texPos12 /= texSize;
  vec4 result = vec4(0.0);
  result += texture(tex, vec3(texPos0.x, texPos0.y, uv.z)) * w0.x * w0.y;
  result += texture(tex, vec3(texPos12.x, texPos0.y, uv.z)) * w12.x * w0.y;
  result += texture(tex, vec3(texPos3.x, texPos0.y, uv.z)) * w3.x * w0.y;
  result += texture(tex, vec3(texPos0.x, texPos12.y, uv.z)) * w0.x * w12.y;
  result += texture(tex, vec3(texPos12.x, texPos12.y, uv.z)) * w12.x * w12.y;
  result += texture(tex, vec3(texPos3.x, texPos12.y, uv.z)) * w3.x * w12.y;
  result += texture(tex, vec3(texPos0.x, texPos3.y, uv.z)) * w0.x * w3.y;
  result += texture(tex, vec3(texPos12.x, texPos3.y, uv.z)) * w12.x * w3.y;
  result += texture(tex, vec3(texPos3.x, texPos3.y, uv.z)) * w3.x * w3.y;
  return result;
}
`,uh=`precision highp float;
precision highp sampler2DArray;

#include "core/turbo"
#include "catmullRomSampling"
#include "varianceClipping"

uniform sampler2D colorBuffer;
uniform sampler2D depthVelocityBuffer;
uniform sampler2D colorHistoryBuffer;

#ifdef SHADOW_LENGTH
uniform sampler2D shadowLengthBuffer;
uniform sampler2D shadowLengthHistoryBuffer;
#endif // SHADOW_LENGTH

uniform vec2 texelSize;
uniform int frame;
uniform float varianceGamma;
uniform float temporalAlpha;
uniform vec2 jitterOffset;

in vec2 vUv;

layout(location = 0) out vec4 outputColor;
#ifdef SHADOW_LENGTH
layout(location = 1) out float outputShadowLength;
#endif // SHADOW_LENGTH

const ivec2 neighborOffsets[9] = ivec2[9](
  ivec2(-1, -1),
  ivec2(-1, 0),
  ivec2(-1, 1),
  ivec2(0, -1),
  ivec2(0, 0),
  ivec2(0, 1),
  ivec2(1, -1),
  ivec2(1, 0),
  ivec2(1, 1)
);

const ivec4[4] bayerIndices = ivec4[4](
  ivec4(0, 12, 3, 15),
  ivec4(8, 4, 11, 7),
  ivec4(2, 14, 1, 13),
  ivec4(10, 6, 9, 5)
);

vec4 getClosestFragment(const ivec2 coord) {
  vec4 result = vec4(1e7, 0.0, 0.0, 0.0);
  vec4 neighbor;
  #pragma unroll_loop_start
  for (int i = 0; i < 9; ++i) {
    neighbor = texelFetchOffset(depthVelocityBuffer, coord, 0, neighborOffsets[i]);
    if (neighbor.r < result.r) {
      result = neighbor;
    }
  }
  #pragma unroll_loop_end
  return result;
}

void temporalUpscale(
  const ivec2 coord,
  const ivec2 lowResCoord,
  const bool currentFrame,
  out vec4 outputColor,
  out float outputShadowLength
) {
  vec4 currentColor = texelFetch(colorBuffer, lowResCoord, 0);
  #ifdef SHADOW_LENGTH
  vec4 currentShadowLength = vec4(texelFetch(shadowLengthBuffer, lowResCoord, 0).rgb, 1.0);
  #endif // SHADOW_LENGTH

  if (currentFrame) {
    // Use the texel just rendered without any accumulation.
    outputColor = currentColor;
    #ifdef SHADOW_LENGTH
    outputShadowLength = currentShadowLength.r;
    #endif // SHADOW_LENGTH
    return;
  }

  vec4 depthVelocity = getClosestFragment(lowResCoord);
  vec2 velocity = depthVelocity.gb;
  vec2 prevUv = vUv - velocity;
  if (prevUv.x < 0.0 || prevUv.x > 1.0 || prevUv.y < 0.0 || prevUv.y > 1.0) {
    outputColor = currentColor;
    #ifdef SHADOW_LENGTH
    outputShadowLength = currentShadowLength.r;
    #endif // SHADOW_LENGTH
    return; // Rejection
  }

  // Variance clipping with a large variance gamma seems to work fine for
  // upsampling. This increases ghosting, of course, but it's hard to notice on
  // clouds.
  // vec4 historyColor = textureCatmullRom(colorHistoryBuffer, prevUv);
  vec4 historyColor = texture(colorHistoryBuffer, prevUv);
  vec4 clippedColor = varianceClipping(colorBuffer, vUv, currentColor, historyColor, varianceGamma);
  outputColor = clippedColor;

  #ifdef SHADOW_LENGTH
  // Sampling the shadow length history using scene depth doesn't make much
  // sense, but it's too hard to derive it properly. At least this approach
  // resolves the edges of scene objects.
  // vec4 historyShadowLength = vec4(textureCatmullRom(shadowLengthHistoryBuffer, prevUv).rgb, 1.0);
  vec4 historyShadowLength = vec4(texture(shadowLengthHistoryBuffer, prevUv).rgb, 1.0);
  vec4 clippedShadowLength = varianceClipping(
    shadowLengthBuffer,
    vUv,
    currentShadowLength,
    historyShadowLength,
    varianceGamma
  );
  outputShadowLength = clippedShadowLength.r;
  #endif // SHADOW_LENGTH
}

void temporalAntialiasing(const ivec2 coord, out vec4 outputColor, out float outputShadowLength) {
  vec4 currentColor = texelFetch(colorBuffer, coord, 0);
  #ifdef SHADOW_LENGTH
  vec4 currentShadowLength = vec4(texelFetch(shadowLengthBuffer, coord, 0).rgb, 1.0);
  #endif // SHADOW_LENGTH

  vec4 depthVelocity = getClosestFragment(coord);
  vec2 velocity = depthVelocity.gb;

  vec2 prevUv = vUv - velocity;
  if (prevUv.x < 0.0 || prevUv.x > 1.0 || prevUv.y < 0.0 || prevUv.y > 1.0) {
    outputColor = currentColor;
    #ifdef SHADOW_LENGTH
    outputShadowLength = currentShadowLength.r;
    #endif // SHADOW_LENGTH
    return; // Rejection
  }

  vec4 historyColor = texture(colorHistoryBuffer, prevUv);
  vec4 clippedColor = varianceClipping(colorBuffer, coord, currentColor, historyColor);
  outputColor = mix(clippedColor, currentColor, temporalAlpha);

  #ifdef SHADOW_LENGTH
  vec4 historyShadowLength = vec4(texture(shadowLengthHistoryBuffer, prevUv).rgb, 1.0);
  vec4 clippedShadowLength = varianceClipping(
    shadowLengthBuffer,
    coord,
    currentShadowLength,
    historyShadowLength
  );
  outputShadowLength = mix(clippedShadowLength.r, currentShadowLength.r, temporalAlpha);
  #endif // SHADOW_LENGTH
}

void main() {
  ivec2 coord = ivec2(gl_FragCoord.xy);

  #if !defined(SHADOW_LENGTH)
  float outputShadowLength;
  #endif // !defined(SHADOW_LENGTH)

  #ifdef TEMPORAL_UPSCALE
  ivec2 lowResCoord = coord / 4;
  int bayerValue = bayerIndices[coord.x % 4][coord.y % 4];
  bool currentFrame = bayerValue == frame % 16;
  temporalUpscale(coord, lowResCoord, currentFrame, outputColor, outputShadowLength);
  #else // TEMPORAL_UPSCALE
  temporalAntialiasing(coord, outputColor, outputShadowLength);
  #endif // TEMPORAL_UPSCALE

  #if defined(SHADOW_LENGTH) && defined(DEBUG_SHOW_SHADOW_LENGTH)
  outputColor = vec4(turbo(outputShadowLength * 0.05), 1.0);
  #endif // defined(SHADOW_LENGTH) && defined(DEBUG_SHOW_SHADOW_LENGTH)

  #ifdef DEBUG_SHOW_VELOCITY
  outputColor.rgb = outputColor.rgb + vec3(abs(texture(depthVelocityBuffer, vUv).gb) * 10.0, 0.0);
  #endif // DEBUG_SHOW_VELOCITY
}
`,hh=`precision highp float;

layout(location = 0) in vec3 position;

out vec2 vUv;

void main() {
  vUv = position.xy * 0.5 + 0.5;
  gl_Position = vec4(position.xy, 1.0, 1.0);
}
`,Uo=`#ifdef VARIANCE_9_SAMPLES
#define VARIANCE_OFFSET_COUNT 8
const ivec2 varianceOffsets[8] = ivec2[8](
  ivec2(-1, -1),
  ivec2(-1, 1),
  ivec2(1, -1),
  ivec2(1, 1),
  ivec2(1, 0),
  ivec2(0, -1),
  ivec2(0, 1),
  ivec2(-1, 0)
);
#else // VARIANCE_9_SAMPLES
#define VARIANCE_OFFSET_COUNT 4
const ivec2 varianceOffsets[4] = ivec2[4](ivec2(1, 0), ivec2(0, -1), ivec2(0, 1), ivec2(-1, 0));
#endif // VARIANCE_9_SAMPLES

// Reference: https://github.com/playdeadgames/temporal
vec4 clipAABB(const vec4 current, const vec4 history, const vec4 minColor, const vec4 maxColor) {
  vec3 pClip = 0.5 * (maxColor.rgb + minColor.rgb);
  vec3 eClip = 0.5 * (maxColor.rgb - minColor.rgb) + 1e-7;
  vec4 vClip = history - vec4(pClip, current.a);
  vec3 vUnit = vClip.xyz / eClip;
  vec3 aUnit = abs(vUnit);
  float maUnit = max(aUnit.x, max(aUnit.y, aUnit.z));
  if (maUnit > 1.0) {
    return vec4(pClip, current.a) + vClip / maUnit;
  }
  return history;
}

#ifdef VARIANCE_SAMPLER_ARRAY
#define VARIANCE_SAMPLER sampler2DArray
#define VARIANCE_SAMPLER_COORD ivec3
#else // VARIANCE_SAMPLER_ARRAY
#define VARIANCE_SAMPLER sampler2D
#define VARIANCE_SAMPLER_COORD ivec2
#endif // VARIANCE_SAMPLER_ARRAY

// Variance clipping
// Reference: https://developer.download.nvidia.com/gameworks/events/GDC2016/msalvi_temporal_supersampling.pdf
vec4 varianceClipping(
  const VARIANCE_SAMPLER inputBuffer,
  const VARIANCE_SAMPLER_COORD coord,
  const vec4 current,
  const vec4 history,
  const float gamma
) {
  vec4 moment1 = current;
  vec4 moment2 = current * current;
  vec4 neighbor;
  #pragma unroll_loop_start
  for (int i = 0; i < 8; ++i) {
    #if UNROLLED_LOOP_INDEX < VARIANCE_OFFSET_COUNT
    neighbor = texelFetchOffset(inputBuffer, coord, 0, varianceOffsets[i]);
    moment1 += neighbor;
    moment2 += neighbor * neighbor;
    #endif // UNROLLED_LOOP_INDEX < VARIANCE_OFFSET_COUNT
  }
  #pragma unroll_loop_end

  const float N = float(VARIANCE_OFFSET_COUNT + 1);
  vec4 mean = moment1 / N;
  vec4 varianceGamma = sqrt(max(moment2 / N - mean * mean, 0.0)) * gamma;
  vec4 minColor = mean - varianceGamma;
  vec4 maxColor = mean + varianceGamma;
  return clipAABB(clamp(mean, minColor, maxColor), history, minColor, maxColor);
}

vec4 varianceClipping(
  const VARIANCE_SAMPLER inputBuffer,
  const VARIANCE_SAMPLER_COORD coord,
  const vec4 current,
  const vec4 history
) {
  return varianceClipping(inputBuffer, coord, current, history, 1.0);
}

vec4 varianceClipping(
  const sampler2D inputBuffer,
  const vec2 coord,
  const vec4 current,
  const vec4 history,
  const float gamma
) {
  vec4 moment1 = current;
  vec4 moment2 = current * current;
  vec4 neighbor;
  #pragma unroll_loop_start
  for (int i = 0; i < 8; ++i) {
    #if UNROLLED_LOOP_INDEX < VARIANCE_OFFSET_COUNT
    neighbor = textureOffset(inputBuffer, coord, varianceOffsets[i]);
    moment1 += neighbor;
    moment2 += neighbor * neighbor;
    #endif // UNROLLED_LOOP_INDEX < VARIANCE_OFFSET_COUNT
  }
  #pragma unroll_loop_end

  const float N = float(VARIANCE_OFFSET_COUNT + 1);
  vec4 mean = moment1 / N;
  vec4 varianceGamma = sqrt(max(moment2 / N - mean * mean, 0.0)) * gamma;
  vec4 minColor = mean - varianceGamma;
  vec4 maxColor = mean + varianceGamma;
  return clipAABB(clamp(mean, minColor, maxColor), history, minColor, maxColor);
}

vec4 varianceClipping(
  const sampler2D inputBuffer,
  const vec2 coord,
  const vec4 current,
  const vec4 history
) {
  return varianceClipping(inputBuffer, coord, current, history, 1.0);
}
`;var dh=Object.defineProperty,Ho=(r,e,t,i)=>{for(var a=void 0,n=r.length-1,o;n>=0;n--)(o=r[n])&&(a=o(e,t,a)||a);return a&&dh(e,t,a),a};class da extends ha{constructor({colorBuffer:e=null,depthVelocityBuffer:t=null,shadowLengthBuffer:i=null,colorHistoryBuffer:a=null,shadowLengthHistoryBuffer:n=null}={}){super({name:"CloudsResolveMaterial",glslVersion:Wr,vertexShader:hh,fragmentShader:Qt($e(uh,{core:{turbo:co},catmullRomSampling:lh,varianceClipping:Uo})),uniforms:{colorBuffer:new f(e),depthVelocityBuffer:new f(t),shadowLengthBuffer:new f(i),colorHistoryBuffer:new f(a),shadowLengthHistoryBuffer:new f(n),texelSize:new f(new X),frame:new f(0),jitterOffset:new f(new X),varianceGamma:new f(2),temporalAlpha:new f(.1)}}),this.temporalUpscale=!0,this.shadowLength=!0}setSize(e,t){this.uniforms.texelSize.value.set(1/e,1/t)}onBeforeRender(e,t,i,a,n,o){const s=this.uniforms.frame.value%16,c=Mo[s],u=(c.x-.5)*4,l=(c.y-.5)*4;this.uniforms.jitterOffset.value.set(u,l)}}Ho([M("TEMPORAL_UPSCALE")],da.prototype,"temporalUpscale");Ho([M("SHADOW_LENGTH")],da.prototype,"shadowLength");class Fo extends es{constructor(e,t){super(e),this._mainCamera=new Io;const{shadow:i}=t;this.shadow=i}get mainCamera(){return this._mainCamera}set mainCamera(e){this._mainCamera=e}}function ni(r,{depthVelocity:e,shadowLength:t}){const i=new zu(1,1,{depthBuffer:!1,type:Oo});i.texture.minFilter=Cr,i.texture.magFilter=Cr,i.texture.name=r;let a;e&&(a=i.texture.clone(),a.isRenderTargetTexture=!0,i.depthVelocity=a,i.textures.push(a));let n;return t&&(n=i.texture.clone(),n.isRenderTargetTexture=!0,n.format=Gu,i.shadowLength=n,i.textures.push(n)),Object.assign(i,{depthVelocity:a??null,shadowLength:n??null})}class mh extends Fo{constructor({parameterUniforms:e,layerUniforms:t,atmosphereUniforms:i,...a},n){super("CloudsPass",a),this.atmosphere=n,this.width=0,this.height=0,this.currentMaterial=new he({parameterUniforms:e,layerUniforms:t,atmosphereUniforms:i},n),this.currentPass=new hi(this.currentMaterial),this.resolveMaterial=new da,this.resolvePass=new hi(this.resolveMaterial),this.initRenderTargets({depthVelocity:!0,shadowLength:R.lightShafts})}copyCameraSettings(e){this.currentMaterial.copyCameraSettings(e)}initialize(e,t,i){this.currentPass.initialize(e,t,i),this.resolvePass.initialize(e,t,i)}initRenderTargets(e){this.currentRenderTarget?.dispose(),this.resolveRenderTarget?.dispose(),this.historyRenderTarget?.dispose();const t=ni("Clouds",e),i=ni("Clouds.A",{...e,depthVelocity:!1}),a=ni("Clouds.B",{...e,depthVelocity:!1});this.currentRenderTarget=t,this.resolveRenderTarget=i,this.historyRenderTarget=a;const n=this.resolveMaterial.uniforms;n.colorBuffer.value=t.texture,n.depthVelocityBuffer.value=t.depthVelocity,n.shadowLengthBuffer.value=t.shadowLength,n.colorHistoryBuffer.value=a.texture,n.shadowLengthHistoryBuffer.value=a.shadowLength}copyShadow(){const e=this.shadow,t=this.currentMaterial.uniforms;for(let i=0;i<e.cascadeCount;++i){const a=e.cascades[i];t.shadowIntervals.value[i].copy(a.interval),t.shadowMatrices.value[i].copy(a.matrix)}t.shadowFar.value=e.far}copyReprojection(){this.currentMaterial.copyReprojectionMatrix(this.mainCamera)}swapBuffers(){const e=this.historyRenderTarget,t=this.resolveRenderTarget;this.resolveRenderTarget=e,this.historyRenderTarget=t;const i=this.resolveMaterial.uniforms;i.colorHistoryBuffer.value=t.texture,i.shadowLengthHistoryBuffer.value=t.shadowLength}update(e,t,i){this.currentMaterial.uniforms.frame.value=t,this.resolveMaterial.uniforms.frame.value=t,this.copyCameraSettings(this.mainCamera),this.copyShadow(),this.currentPass.render(e,null,this.currentRenderTarget),this.resolvePass.render(e,null,this.resolveRenderTarget),this.copyReprojection(),this.swapBuffers()}setSize(e,t){if(this.width=e,this.height=t,this.temporalUpscale){const i=Math.ceil(e/4),a=Math.ceil(t/4);this.currentRenderTarget.setSize(i,a),this.currentMaterial.setSize(i*4,a*4,e,t)}else this.currentRenderTarget.setSize(e,t),this.currentMaterial.setSize(e,t);this.resolveRenderTarget.setSize(e,t),this.resolveMaterial.setSize(e,t),this.historyRenderTarget.setSize(e,t)}setShadowSize(e,t,i){this.currentMaterial.shadowCascadeCount=i,this.currentMaterial.setShadowSize(e,t)}setDepthTexture(e,t){this.currentMaterial.depthBuffer=e,this.currentMaterial.depthPacking=t??0}get outputBuffer(){return this.historyRenderTarget.texture}get shadowBuffer(){return this.currentMaterial.uniforms.shadowBuffer.value}set shadowBuffer(e){this.currentMaterial.uniforms.shadowBuffer.value=e}get shadowLengthBuffer(){return this.historyRenderTarget.shadowLength}get temporalUpscale(){return this.currentMaterial.temporalUpscale}set temporalUpscale(e){e!==this.temporalUpscale&&(this.currentMaterial.temporalUpscale=e,this.resolveMaterial.temporalUpscale=e,this.setSize(this.width,this.height))}get lightShafts(){return this.currentMaterial.shadowLength}set lightShafts(e){e!==this.lightShafts&&(this.currentMaterial.shadowLength=e,this.resolveMaterial.shadowLength=e,this.initRenderTargets({depthVelocity:!0,shadowLength:e}),this.setSize(this.width,this.height))}}function ph(r,e){const t=r.properties.get(e.texture).__webglTexture,i=r.getContext();Qe(i instanceof WebGL2RenderingContext),r.setRenderTarget(e);const a=[];if(t!=null)for(let n=0;n<e.depth;++n)i.framebufferTextureLayer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+n,t,0,n),a.push(i.COLOR_ATTACHMENT0+n);i.drawBuffers(a)}class pn extends hi{render(e,t,i,a,n){const o=this.fullscreenMaterial.uniforms;t!==null&&o?.[this.input]!=null&&(o[this.input].value=t.texture),ph(e,i),e.render(this.scene,this.camera)}}const fh=`precision highp float;
precision highp sampler3D;

#include <common>

#include "core/math"
#include "core/raySphereIntersection"
#include "types"
#include "parameters"
#include "structuredSampling"
#include "clouds"

uniform mat4 inverseShadowMatrices[CASCADE_COUNT];
uniform mat4 reprojectionMatrices[CASCADE_COUNT];

// Primary raymarch
uniform int maxIterationCount;
uniform float minStepSize;
uniform float maxStepSize;
uniform float opticalDepthTailScale;

in vec2 vUv;

layout(location = 0) out vec4 outputColor[CASCADE_COUNT];

// Redundant notation for prettier.
#if CASCADE_COUNT == 1
layout(location = 1) out vec3 outputDepthVelocity[CASCADE_COUNT];
#elif CASCADE_COUNT == 2
layout(location = 2) out vec3 outputDepthVelocity[CASCADE_COUNT];
#elif CASCADE_COUNT == 3
layout(location = 3) out vec3 outputDepthVelocity[CASCADE_COUNT];
#elif CASCADE_COUNT == 4
layout(location = 4) out vec3 outputDepthVelocity[CASCADE_COUNT];
#endif // CASCADE_COUNT

vec4 marchClouds(
  const vec3 rayOrigin,
  const vec3 rayDirection,
  const float maxRayDistance,
  const float jitter,
  const float mipLevel
) {
  // Setup structured volume sampling (SVS).
  // While SVS introduces spatial aliasing, it is indeed temporally stable,
  // which is important for lower-resolution shadow maps where a flickering
  // single pixel can be highly noticeable.
  vec3 normal = getStructureNormal(rayDirection, jitter);
  float rayDistance;
  float stepSize;
  intersectStructuredPlanes(
    normal,
    rayOrigin,
    rayDirection,
    clamp(maxRayDistance / float(maxIterationCount), minStepSize, maxStepSize),
    rayDistance,
    stepSize
  );

  #ifdef TEMPORAL_JITTER
  rayDistance -= stepSize * jitter;
  #endif // TEMPORAL_JITTER

  float extinctionSum = 0.0;
  float maxOpticalDepth = 0.0;
  float maxOpticalDepthTail = 0.0;
  float transmittanceIntegral = 1.0;
  float weightedDistanceSum = 0.0;
  float transmittanceSum = 0.0;

  int sampleCount = 0;
  for (int i = 0; i < maxIterationCount; ++i) {
    if (rayDistance > maxRayDistance) {
      break; // Termination
    }

    vec3 position = rayDistance * rayDirection + rayOrigin;
    float height = length(position) - bottomRadius;

    #if !defined(DEBUG_MARCH_INTERVALS)
    if (insideLayerIntervals(height)) {
      rayDistance += stepSize;
      continue;
    }
    #endif // !defined(DEBUG_MARCH_INTERVALS)

    // Sample rough weather.
    vec2 uv = getGlobeUv(position);
    WeatherSample weather = sampleWeather(uv, height, mipLevel);

    if (any(greaterThan(weather.density, vec4(minDensity)))) {
      // Sample detailed participating media.
      // Note this assumes an homogeneous medium.
      MediaSample media = sampleMedia(weather, position, uv, mipLevel, jitter);
      if (media.extinction > minExtinction) {
        extinctionSum += media.extinction;
        maxOpticalDepth += media.extinction * stepSize;
        transmittanceIntegral *= exp(-media.extinction * stepSize);
        weightedDistanceSum += rayDistance * transmittanceIntegral;
        transmittanceSum += transmittanceIntegral;
        ++sampleCount;
      }
    }

    if (transmittanceIntegral <= minTransmittance) {
      // A large amount of optical depth accumulates in the tail, beyond the
      // point of minimum transmittance. The expected optical depth seems to
      // decrease exponentially with the number of samples taken before reaching
      // the minimum transmittance.
      // See the discussion here: https://x.com/shotamatsuda/status/1886259549931520437
      maxOpticalDepthTail = min(
        opticalDepthTailScale * stepSize * exp(float(1 - sampleCount)),
        stepSize * 0.5 // Excessive optical depth only introduces aliasing.
      );
      break; // Early termination
    }
    rayDistance += stepSize;
  }

  if (sampleCount == 0) {
    return vec4(maxRayDistance, 0.0, 0.0, 0.0);
  }
  float frontDepth = min(weightedDistanceSum / transmittanceSum, maxRayDistance);
  float meanExtinction = extinctionSum / float(sampleCount);
  return vec4(frontDepth, meanExtinction, maxOpticalDepth, maxOpticalDepthTail);
}

void getRayNearFar(
  const vec3 sunPosition,
  const vec3 rayDirection,
  out float rayNear,
  out float rayFar
) {
  vec4 firstIntersections = raySphereFirstIntersection(
    sunPosition,
    rayDirection,
    vec3(0.0),
    bottomRadius + vec4(shadowTopHeight, shadowBottomHeight, 0.0, 0.0)
  );
  rayNear = max(0.0, firstIntersections.x);
  rayFar = firstIntersections.y;
  if (rayFar < 0.0) {
    rayFar = 1e6;
  }
}

void cascade(
  const int cascadeIndex,
  const float mipLevel,
  out vec4 outputColor,
  out vec3 outputDepthVelocity
) {
  vec2 clip = vUv * 2.0 - 1.0;
  vec4 point = inverseShadowMatrices[cascadeIndex] * vec4(clip.xy, -1.0, 1.0);
  point /= point.w;
  vec3 sunPosition = (worldToECEFMatrix * vec4(point.xyz, 1.0)).xyz + altitudeCorrection;

  vec3 rayDirection = normalize(-sunDirection);
  float rayNear;
  float rayFar;
  getRayNearFar(sunPosition, rayDirection, rayNear, rayFar);

  vec3 rayOrigin = rayNear * rayDirection + sunPosition;
  float stbn = getSTBN();
  vec4 color = marchClouds(rayOrigin, rayDirection, rayFar - rayNear, stbn, mipLevel);
  outputColor = color;

  // Velocity for temporal resolution.
  #ifdef TEMPORAL_PASS
  vec3 frontPosition = color.x * rayDirection + rayOrigin;
  vec3 frontPositionWorld = (ecefToWorldMatrix * vec4(frontPosition - altitudeCorrection, 1.0)).xyz;
  vec4 prevClip = reprojectionMatrices[cascadeIndex] * vec4(frontPositionWorld, 1.0);
  prevClip /= prevClip.w;
  vec2 prevUv = prevClip.xy * 0.5 + 0.5;
  vec2 velocity = (vUv - prevUv) * resolution;
  outputDepthVelocity = vec3(color.x, velocity);
  #else // TEMPORAL_PASS
  outputDepthVelocity = vec3(0.0);
  #endif // TEMPORAL_PASS
}

// TODO: Calculate from the main camera frustum perhaps?
const float mipLevels[4] = float[4](0.0, 0.5, 1.0, 2.0);

void main() {
  #pragma unroll_loop_start
  for (int i = 0; i < 4; ++i) {
    #if UNROLLED_LOOP_INDEX < CASCADE_COUNT
    cascade(UNROLLED_LOOP_INDEX, mipLevels[i], outputColor[i], outputDepthVelocity[i]);
    #endif // UNROLLED_LOOP_INDEX < CASCADE_COUNT
  }
  #pragma unroll_loop_end
}
`,vh=`precision highp float;

layout(location = 0) in vec3 position;

out vec2 vUv;

void main() {
  vUv = position.xy * 0.5 + 0.5;
  gl_Position = vec4(position.xy, 1.0, 1.0);
}
`,gh=`// Implements Structured Volume Sampling in fragment shader:
// https://github.com/huwb/volsample
// Implementation reference:
// https://www.shadertoy.com/view/ttVfDc

void getIcosahedralVertices(const vec3 direction, out vec3 v1, out vec3 v2, out vec3 v3) {
  // Normalization scalers to fit dodecahedron to unit sphere.
  const float a = 0.85065080835204; // phi / sqrt(2 + phi)
  const float b = 0.5257311121191336; // 1 / sqrt(2 + phi)

  // Derive the vertices of icosahedron where triangle intersects the direction.
  // See: https://www.ppsloan.org/publications/AmbientDice.pdf
  const float kT = 0.6180339887498948; // 1 / phi
  const float kT2 = 0.38196601125010515; // 1 / phi^2
  vec3 absD = abs(direction);
  float selector1 = dot(absD, vec3(1.0, kT2, -kT));
  float selector2 = dot(absD, vec3(-kT, 1.0, kT2));
  float selector3 = dot(absD, vec3(kT2, -kT, 1.0));
  v1 = selector1 > 0.0 ? vec3(a, b, 0.0) : vec3(-b, 0.0, a);
  v2 = selector2 > 0.0 ? vec3(0.0, a, b) : vec3(a, -b, 0.0);
  v3 = selector3 > 0.0 ? vec3(b, 0.0, a) : vec3(0.0, a, -b);
  vec3 octantSign = sign(direction);
  v1 *= octantSign;
  v2 *= octantSign;
  v3 *= octantSign;
}

void swapIfBigger(inout vec4 a, inout vec4 b) {
  if (a.w > b.w) {
    vec4 t = a;
    a = b;
    b = t;
  }
}

void sortVertices(inout vec3 a, inout vec3 b, inout vec3 c) {
  const vec3 base = vec3(0.5, 0.5, 1.0);
  vec4 aw = vec4(a, dot(a, base));
  vec4 bw = vec4(b, dot(b, base));
  vec4 cw = vec4(c, dot(c, base));
  swapIfBigger(aw, bw);
  swapIfBigger(bw, cw);
  swapIfBigger(aw, bw);
  a = aw.xyz;
  b = bw.xyz;
  c = cw.xyz;
}

vec3 getPentagonalWeights(const vec3 direction, const vec3 v1, const vec3 v2, const vec3 v3) {
  float d1 = dot(v1, direction);
  float d2 = dot(v2, direction);
  float d3 = dot(v3, direction);
  vec3 w = exp(vec3(d1, d2, d3) * 40.0);
  return w / (w.x + w.y + w.z);
}

vec3 getStructureNormal(
  const vec3 direction,
  const float jitter,
  out vec3 a,
  out vec3 b,
  out vec3 c,
  out vec3 weights
) {
  getIcosahedralVertices(direction, a, b, c);
  sortVertices(a, b, c);
  weights = getPentagonalWeights(direction, a, b, c);
  return jitter < weights.x
    ? a
    : jitter < weights.x + weights.y
      ? b
      : c;
}

vec3 getStructureNormal(const vec3 direction, const float jitter) {
  vec3 a, b, c, weights;
  return getStructureNormal(direction, jitter, a, b, c, weights);
}

// Reference: https://github.com/huwb/volsample/blob/master/src/unity/Assets/Shaders/RayMarchCore.cginc
void intersectStructuredPlanes(
  const vec3 normal,
  const vec3 rayOrigin,
  const vec3 rayDirection,
  const float samplePeriod,
  out float stepOffset,
  out float stepSize
) {
  float NoD = dot(rayDirection, normal);
  stepSize = samplePeriod / abs(NoD);

  // Skips leftover bit to get from rayOrigin to first strata plane.
  stepOffset = -mod(dot(rayOrigin, normal), samplePeriod) / NoD;

  // mod() gives different results depending on if the arg is negative or
  // positive. This line makes it consistent, and ensures the first sample is in
  // front of the viewer.
  if (stepOffset < 0.0) {
    stepOffset += stepSize;
  }
}
`;var yh=Object.defineProperty,Mt=(r,e,t,i)=>{for(var a=void 0,n=r.length-1,o;n>=0;n--)(o=r[n])&&(a=o(e,t,a)||a);return a&&yh(e,t,a),a};class dt extends ha{constructor({parameterUniforms:e,layerUniforms:t,atmosphereUniforms:i}){super({name:"ShadowMaterial",glslVersion:Wr,vertexShader:vh,fragmentShader:Qt($e(fh,{core:{math:qi,raySphereIntersection:Pr},types:Hi,parameters:Po,structuredSampling:gh,clouds:Lo})),uniforms:{...e,...t,...i,inverseShadowMatrices:new f(Array.from({length:4},()=>new Z)),reprojectionMatrices:new f(Array.from({length:4},()=>new Z)),resolution:new f(new X),frame:new f(0),stbnTexture:new f(null),maxIterationCount:new f(R.shadow.maxIterationCount),minStepSize:new f(R.shadow.minStepSize),maxStepSize:new f(R.shadow.maxStepSize),minDensity:new f(R.shadow.minDensity),minExtinction:new f(R.shadow.minExtinction),minTransmittance:new f(R.shadow.minTransmittance),opticalDepthTailScale:new f(2)},defines:{SHADOW:"1",TEMPORAL_PASS:"1",TEMPORAL_JITTER:"1"}}),this.localWeatherChannels="rgba",this.cascadeCount=R.shadow.cascadeCount,this.temporalPass=!0,this.temporalJitter=!0,this.shapeDetail=R.shapeDetail,this.turbulence=R.turbulence,this.cascadeCount=R.shadow.cascadeCount}setSize(e,t){this.uniforms.resolution.value.set(e,t)}}Mt([ao("LOCAL_WEATHER_CHANNELS",{validate:r=>/^[rgba]{4}$/.test(r)})],dt.prototype,"localWeatherChannels");Mt([ut("CASCADE_COUNT",{min:1,max:4})],dt.prototype,"cascadeCount");Mt([M("TEMPORAL_PASS")],dt.prototype,"temporalPass");Mt([M("TEMPORAL_JITTER")],dt.prototype,"temporalJitter");Mt([M("SHAPE_DETAIL")],dt.prototype,"shapeDetail");Mt([M("TURBULENCE")],dt.prototype,"turbulence");const Sh=`precision highp float;
precision highp sampler2DArray;

#define VARIANCE_9_SAMPLES 1
#define VARIANCE_SAMPLER_ARRAY 1

#include "varianceClipping"

uniform sampler2DArray inputBuffer;
uniform sampler2DArray historyBuffer;

uniform vec2 texelSize;
uniform float varianceGamma;
uniform float temporalAlpha;

in vec2 vUv;

layout(location = 0) out vec4 outputColor[CASCADE_COUNT];

const ivec2 neighborOffsets[9] = ivec2[9](
  ivec2(-1, -1),
  ivec2(-1, 0),
  ivec2(-1, 1),
  ivec2(0, -1),
  ivec2(0, 0),
  ivec2(0, 1),
  ivec2(1, -1),
  ivec2(1, 0),
  ivec2(1, 1)
);

vec4 getClosestFragment(const ivec3 coord) {
  vec4 result = vec4(1e7, 0.0, 0.0, 0.0);
  vec4 neighbor;
  #pragma unroll_loop_start
  for (int i = 0; i < 9; ++i) {
    neighbor = texelFetchOffset(
      inputBuffer,
      coord + ivec3(0, 0, CASCADE_COUNT),
      0,
      neighborOffsets[i]
    );
    if (neighbor.r < result.r) {
      result = neighbor;
    }
  }
  #pragma unroll_loop_end
  return result;
}

void cascade(const int cascadeIndex, out vec4 outputColor) {
  ivec3 coord = ivec3(gl_FragCoord.xy, cascadeIndex);
  vec4 current = texelFetch(inputBuffer, coord, 0);

  vec4 depthVelocity = getClosestFragment(coord);
  vec2 velocity = depthVelocity.gb * texelSize;
  vec2 prevUv = vUv - velocity;
  if (prevUv.x < 0.0 || prevUv.x > 1.0 || prevUv.y < 0.0 || prevUv.y > 1.0) {
    outputColor = current;
    return; // Rejection
  }

  vec4 history = texture(historyBuffer, vec3(prevUv, float(cascadeIndex)));
  vec4 clippedHistory = varianceClipping(inputBuffer, coord, current, history, varianceGamma);
  outputColor = mix(clippedHistory, current, temporalAlpha);
}

void main() {
  #pragma unroll_loop_start
  for (int i = 0; i < 4; ++i) {
    #if UNROLLED_LOOP_INDEX < CASCADE_COUNT
    cascade(UNROLLED_LOOP_INDEX, outputColor[i]);
    #endif // UNROLLED_LOOP_INDEX < CASCADE_COUNT
  }
  #pragma unroll_loop_end
}
`,wh=`precision highp float;

layout(location = 0) in vec3 position;

out vec2 vUv;

void main() {
  vUv = position.xy * 0.5 + 0.5;
  gl_Position = vec4(position.xy, 1.0, 1.0);
}
`;var xh=Object.defineProperty,Th=(r,e,t,i)=>{for(var a=void 0,n=r.length-1,o;n>=0;n--)(o=r[n])&&(a=o(e,t,a)||a);return a&&xh(e,t,a),a};class zo extends ha{constructor({inputBuffer:e=null,historyBuffer:t=null}={}){super({name:"ShadowResolveMaterial",glslVersion:Wr,vertexShader:wh,fragmentShader:Qt($e(Sh,{varianceClipping:Uo})),uniforms:{inputBuffer:new f(e),historyBuffer:new f(t),texelSize:new f(new X),varianceGamma:new f(1),temporalAlpha:new f(.01)},defines:{}}),this.cascadeCount=R.shadow.cascadeCount}setSize(e,t){this.uniforms.texelSize.value.set(1/e,1/t)}}Th([ut("CASCADE_COUNT",{min:1,max:4})],zo.prototype,"cascadeCount");function oi(r){const e=new Wu(1,1,1,{depthBuffer:!1});return e.texture.type=Oo,e.texture.minFilter=Cr,e.texture.magFilter=Cr,e.texture.name=r,e}class _h extends Fo{constructor({parameterUniforms:e,layerUniforms:t,atmosphereUniforms:i,...a}){super("ShadowPass",a),this.width=0,this.height=0,this.currentMaterial=new dt({parameterUniforms:e,layerUniforms:t,atmosphereUniforms:i}),this.currentPass=new pn(this.currentMaterial),this.resolveMaterial=new zo,this.resolvePass=new pn(this.resolveMaterial),this.initRenderTargets()}initialize(e,t,i){this.currentPass.initialize(e,t,i),this.resolvePass.initialize(e,t,i)}initRenderTargets(){this.currentRenderTarget?.dispose(),this.resolveRenderTarget?.dispose(),this.historyRenderTarget?.dispose();const e=oi("Shadow"),t=this.temporalPass?oi("Shadow.A"):null,i=this.temporalPass?oi("Shadow.B"):null;this.currentRenderTarget=e,this.resolveRenderTarget=t,this.historyRenderTarget=i;const a=this.resolveMaterial.uniforms;a.inputBuffer.value=e.texture,a.historyBuffer.value=i?.texture??null}copyShadow(){const e=this.shadow,t=this.currentMaterial.uniforms;for(let i=0;i<e.cascadeCount;++i){const a=e.cascades[i];t.inverseShadowMatrices.value[i].copy(a.inverseMatrix)}}copyReprojection(){const e=this.shadow,t=this.currentMaterial.uniforms;for(let i=0;i<e.cascadeCount;++i){const a=e.cascades[i];t.reprojectionMatrices.value[i].copy(a.matrix)}}swapBuffers(){Qe(this.historyRenderTarget!=null),Qe(this.resolveRenderTarget!=null);const e=this.historyRenderTarget,t=this.resolveRenderTarget;this.resolveRenderTarget=e,this.historyRenderTarget=t,this.resolveMaterial.uniforms.historyBuffer.value=t.texture}update(e,t,i){this.currentMaterial.uniforms.frame.value=t,this.copyShadow(),this.currentPass.render(e,null,this.currentRenderTarget),this.temporalPass&&(Qe(this.resolveRenderTarget!=null),this.resolvePass.render(e,null,this.resolveRenderTarget),this.copyReprojection(),this.swapBuffers())}setSize(e,t,i=this.shadow.cascadeCount){this.width=e,this.height=t,this.currentMaterial.cascadeCount=i,this.resolveMaterial.cascadeCount=i,this.currentMaterial.setSize(e,t),this.resolveMaterial.setSize(e,t),this.currentRenderTarget.setSize(e,t,this.temporalPass?i*2:i),this.resolveRenderTarget?.setSize(e,t,i),this.historyRenderTarget?.setSize(e,t,i)}get outputBuffer(){return this.temporalPass?(Qe(this.historyRenderTarget!=null),this.historyRenderTarget.texture):this.currentRenderTarget.texture}get temporalPass(){return this.currentMaterial.temporalPass}set temporalPass(e){e!==this.temporalPass&&(this.currentMaterial.temporalPass=e,this.initRenderTargets(),this.setSize(this.width,this.height))}}function Eh(r){return{scatteringCoefficient:new f(1),absorptionCoefficient:new f(0),coverage:new f(.3),localWeatherTexture:new f(r.localWeatherTexture),localWeatherRepeat:new f(r.localWeatherRepeat),localWeatherOffset:new f(r.localWeatherOffset),shapeTexture:new f(r.shapeTexture),shapeRepeat:new f(r.shapeRepeat),shapeOffset:new f(r.shapeOffset),shapeDetailTexture:new f(r.shapeDetailTexture),shapeDetailRepeat:new f(r.shapeDetailRepeat),shapeDetailOffset:new f(r.shapeDetailOffset),turbulenceTexture:new f(r.turbulenceTexture),turbulenceRepeat:new f(r.turbulenceRepeat),turbulenceDisplacement:new f(350)}}function Ah(){return{minLayerHeights:new f(new me),maxLayerHeights:new f(new me),minIntervalHeights:new f(new q),maxIntervalHeights:new f(new q),densityScales:new f(new me),shapeAmounts:new f(new me),shapeDetailAmounts:new f(new me),weatherExponents:new f(new me),shapeAlteringBiases:new f(new me),coverageFilterWidths:new f(new me),minHeight:new f(0),maxHeight:new f(0),shadowTopHeight:new f(0),shadowBottomHeight:new f(0),shadowLayerMask:new f(new me),densityProfile:new f({expTerms:new me,exponents:new me,linearTerms:new me,constantTerms:new me})}}const si=[0,0,0,0];function Rh(r,e){e.packValues("altitude",r.minLayerHeights.value),e.packSums("altitude","height",r.maxLayerHeights.value),e.packIntervalHeights(r.minIntervalHeights.value,r.maxIntervalHeights.value),e.packValues("densityScale",r.densityScales.value),e.packValues("shapeAmount",r.shapeAmounts.value),e.packValues("shapeDetailAmount",r.shapeDetailAmounts.value),e.packValues("weatherExponent",r.weatherExponents.value),e.packValues("shapeAlteringBias",r.shapeAlteringBiases.value),e.packValues("coverageFilterWidth",r.coverageFilterWidths.value);const t=r.densityProfile.value;e.packDensityProfiles("expTerm",t.expTerms),e.packDensityProfiles("exponent",t.exponents),e.packDensityProfiles("linearTerm",t.linearTerms),e.packDensityProfiles("constantTerm",t.constantTerms);let i=1/0,a=0,n=1/0,o=0;si.fill(0);for(let s=0;s<e.length;++s){const{altitude:c,height:u,shadow:l}=e[s],m=c+u;u>0&&(c<i&&(i=c),l&&c<n&&(n=c),m>a&&(a=m),l&&m>o&&(o=m)),si[s]=l?1:0}i!==1/0?(r.minHeight.value=i,r.maxHeight.value=a):(Qe(a===0),r.minHeight.value=0),n!==1/0?(r.shadowBottomHeight.value=n,r.shadowTopHeight.value=o):(Qe(o===0),r.shadowBottomHeight.value=0),r.shadowLayerMask.value.fromArray(si)}function Ch(r,e){return{bottomRadius:new f(r.bottomRadius),topRadius:new f(r.topRadius),worldToECEFMatrix:new f(e.worldToECEFMatrix),ecefToWorldMatrix:new f(e.ecefToWorldMatrix),altitudeCorrection:new f(e.altitudeCorrection),sunDirection:new f(e.sunDirection)}}const Dh=`uniform sampler2D cloudsBuffer;

void mainImage(const vec4 inputColor, const vec2 uv, out vec4 outputColor) {
  #ifdef SKIP_RENDERING
  outputColor = inputColor;
  #else // SKIP_RENDERING
  vec4 clouds = texture(cloudsBuffer, uv);
  outputColor.rgb = inputColor.rgb * (1.0 - clouds.a) + clouds.rgb;
  outputColor.a = inputColor.a * (1.0 - clouds.a) + clouds.a;
  #endif // SKIP_RENDERING
}
`;var Ih=Object.defineProperty,Oh=(r,e,t,i)=>{for(var a=void 0,n=r.length-1,o;n>=0;n--)(o=r[n])&&(a=o(e,t,a)||a);return a&&Ih(e,t,a),a};const Ft=new q,bh=new X,Nh=new Bu,Mh=["maxIterationCount","minStepSize","maxStepSize","maxRayDistance","perspectiveStepScale","minDensity","minExtinction","minTransmittance","maxIterationCountToSun","maxIterationCountToGround","minSecondaryStepSize","secondaryStepScale","maxShadowFilterRadius","maxShadowLengthIterationCount","minShadowLengthStepSize","maxShadowLengthRayDistance","hazeDensityScale","hazeExponent","hazeScatteringCoefficient","hazeAbsorptionCoefficient"],Lh=["multiScatteringOctaves","accurateSunSkyLight","accuratePhaseFunction"],Ph=["maxIterationCount","minStepSize","maxStepSize","minDensity","minExtinction","minTransmittance","opticalDepthTailScale"],Uh=["temporalJitter"],Hh=["temporalPass"],Fh=["cascadeCount","mapSize","maxFar","farScale","splitMode","splitLambda"],Fe={type:"change"},zh={resolutionScale:R.resolutionScale,width:ui.AUTO_SIZE,height:ui.AUTO_SIZE};class Go extends bn{constructor(e=new Io,t,i=er.DEFAULT){super("CloudsEffect",Dh,{attributes:Nn.DEPTH,uniforms:new Map([["cloudsBuffer",new f(null)]])}),this.camera=e,this.atmosphere=i,this.cloudLayers=Yu.DEFAULT.clone(),this.correctAltitude=!0,this.localWeatherRepeat=new X().setScalar(100),this.localWeatherOffset=new X,this.shapeRepeat=new q().setScalar(3e-4),this.shapeOffset=new q,this.shapeDetailRepeat=new q().setScalar(.006),this.shapeDetailOffset=new q,this.turbulenceRepeat=new X().setScalar(20),this.worldToECEFMatrix=new Z,this.ecefToWorldMatrix=new Z,this.altitudeCorrection=new q,this.sunDirection=new q,this.localWeatherVelocity=new X,this.shapeVelocity=new q,this.shapeDetailVelocity=new q,this._atmosphereOverlay=null,this._atmosphereShadow=null,this._atmosphereShadowLength=null,this.events=new ku,this.frame=0,this.shadowCascadeCount=0,this.shadowMapSize=new X,this.onResolutionChange=()=>{this.setSize(this.resolution.baseWidth,this.resolution.baseHeight)},this.skipRendering=!0;const{resolutionScale:a,width:n,height:o,resolutionX:s=n,resolutionY:c=o}={...zh,...t};this.shadowMaps=new th({cascadeCount:R.shadow.cascadeCount,mapSize:R.shadow.mapSize,splitLambda:.6}),this.parameterUniforms=Eh({localWeatherTexture:this.proceduralLocalWeather?.texture??null,localWeatherRepeat:this.localWeatherRepeat,localWeatherOffset:this.localWeatherOffset,shapeTexture:this.proceduralShape?.texture??null,shapeRepeat:this.shapeRepeat,shapeOffset:this.shapeOffset,shapeDetailTexture:this.proceduralShapeDetail?.texture??null,shapeDetailRepeat:this.shapeDetailRepeat,shapeDetailOffset:this.shapeDetailOffset,turbulenceTexture:this.proceduralTurbulence?.texture??null,turbulenceRepeat:this.turbulenceRepeat}),this.layerUniforms=Ah(),this.atmosphereUniforms=Ch(i,{worldToECEFMatrix:this.worldToECEFMatrix,ecefToWorldMatrix:this.ecefToWorldMatrix,altitudeCorrection:this.altitudeCorrection,sunDirection:this.sunDirection});const u={shadow:this.shadowMaps,parameterUniforms:this.parameterUniforms,layerUniforms:this.layerUniforms,atmosphereUniforms:this.atmosphereUniforms};this.shadowPass=new _h(u),this.shadowPass.mainCamera=e,this.cloudsPass=new mh(u,i),this.cloudsPass.mainCamera=e,this.clouds=za(Ga({},this.cloudsPass.currentMaterial,Mh),this.cloudsPass.currentMaterial,Lh),this.shadow=za(Ga({},this.shadowPass.currentMaterial,Ph),this.shadowPass.currentMaterial,Uh,this.shadowPass,Hh,this.shadowMaps,Fh),this.resolution=new ui(this,s,c,a),this.resolution.addEventListener("change",this.onResolutionChange)}get mainCamera(){return this.camera}set mainCamera(e){this.camera=e,this.shadowPass.mainCamera=e,this.cloudsPass.mainCamera=e}initialize(e,t,i){this.shadowPass.initialize(e,t,i),this.cloudsPass.initialize(e,t,i)}updateSharedUniforms(e){Rh(this.layerUniforms,this.cloudLayers);const{parameterUniforms:t}=this;t.localWeatherOffset.value.add(bh.copy(this.localWeatherVelocity).multiplyScalar(e)),t.shapeOffset.value.add(Ft.copy(this.shapeVelocity).multiplyScalar(e)),t.shapeDetailOffset.value.add(Ft.copy(this.shapeDetailVelocity).multiplyScalar(e));const i=this.worldToECEFMatrix;this.ecefToWorldMatrix.copy(i).invert();const a=this.camera.getWorldPosition(Ft).applyMatrix4(this.worldToECEFMatrix),n=this.altitudeCorrection;this.correctAltitude?ta(a,this.atmosphere.bottomRadius,this.ellipsoid,n):n.setScalar(0);const o=this.ellipsoid.getSurfaceNormal(a,Ft),s=this.sunDirection.dot(o),c=io(1e6,1e3,s),u=Nh.setFromMatrix4(i).transpose();this.shadowMaps.update(this.camera,Ft.copy(this.sunDirection).applyMatrix3(u),c)}updateWeatherTextureChannels(){const e=this.cloudLayers.localWeatherChannels;this.cloudsPass.currentMaterial.localWeatherChannels=e,this.shadowPass.currentMaterial.localWeatherChannels=e}updateAtmosphereComposition(){const{shadowMaps:e,shadowPass:t,cloudsPass:i}=this,a=t.currentMaterial.uniforms,n=i.currentMaterial.uniforms,o=this._atmosphereOverlay,s=Object.assign(this._atmosphereOverlay??{},{map:i.outputBuffer});o!==s&&(this._atmosphereOverlay=s,Fe.target=this,Fe.property="atmosphereOverlay",this.events.dispatchEvent(Fe));const c=this._atmosphereShadow,u=Object.assign(this._atmosphereShadow??{},{map:t.outputBuffer,mapSize:e.mapSize,cascadeCount:e.cascadeCount,intervals:n.shadowIntervals.value,matrices:n.shadowMatrices.value,inverseMatrices:a.inverseShadowMatrices.value,far:e.far,topHeight:n.shadowTopHeight.value});c!==u&&(this._atmosphereShadow=u,Fe.target=this,Fe.property="atmosphereShadow",this.events.dispatchEvent(Fe));const l=this._atmosphereShadowLength,m=i.shadowLengthBuffer!=null?Object.assign(this._atmosphereShadowLength??{},{map:i.shadowLengthBuffer}):null;l!==m&&(this._atmosphereShadowLength=m,Fe.target=this,Fe.property="atmosphereShadowLength",this.events.dispatchEvent(Fe))}update(e,t,i=0){const{shadowMaps:a,shadowPass:n,cloudsPass:o}=this;if(a.cascadeCount!==this.shadowCascadeCount||!a.mapSize.equals(this.shadowMapSize)){const{width:s,height:c}=a.mapSize,u=a.cascadeCount;this.shadowMapSize.set(s,c),this.shadowCascadeCount=u,n.setSize(s,c,u),o.setShadowSize(s,c,u)}this.proceduralLocalWeather?.render(e,i),this.proceduralShape?.render(e,i),this.proceduralShapeDetail?.render(e,i),this.proceduralTurbulence?.render(e,i),++this.frame,this.updateSharedUniforms(i),this.updateWeatherTextureChannels(),n.update(e,this.frame,i),o.shadowBuffer=n.outputBuffer,o.update(e,this.frame,i),this.updateAtmosphereComposition(),this.uniforms.get("cloudsBuffer").value=this.cloudsPass.outputBuffer}setSize(e,t){const{resolution:i}=this;i.setBaseSize(e,t);const{width:a,height:n}=i;this.cloudsPass.setSize(a,n)}setDepthTexture(e,t){this.shadowPass.setDepthTexture(e,t),this.cloudsPass.setDepthTexture(e,t)}set qualityPreset(e){const{clouds:t,shadow:i,...a}=ih[e];Object.assign(this,a),Object.assign(this.clouds,t),Object.assign(this.shadow,i)}get localWeatherTexture(){return this.proceduralLocalWeather??this.parameterUniforms.localWeatherTexture.value}set localWeatherTexture(e){e instanceof cn||e==null?(this.proceduralLocalWeather=void 0,this.parameterUniforms.localWeatherTexture.value=e):(this.proceduralLocalWeather=e,this.parameterUniforms.localWeatherTexture.value=e.texture)}get shapeTexture(){return this.proceduralShape??this.parameterUniforms.shapeTexture.value}set shapeTexture(e){e instanceof ln||e==null?(this.proceduralShape=void 0,this.parameterUniforms.shapeTexture.value=e):(this.proceduralShape=e,this.parameterUniforms.shapeTexture.value=e.texture)}get shapeDetailTexture(){return this.proceduralShapeDetail??this.parameterUniforms.shapeDetailTexture.value}set shapeDetailTexture(e){e instanceof ln||e==null?(this.proceduralShapeDetail=void 0,this.parameterUniforms.shapeDetailTexture.value=e):(this.proceduralShapeDetail=e,this.parameterUniforms.shapeDetailTexture.value=e.texture)}get turbulenceTexture(){return this.proceduralTurbulence??this.parameterUniforms.turbulenceTexture.value}set turbulenceTexture(e){e instanceof cn||e==null?(this.proceduralTurbulence=void 0,this.parameterUniforms.turbulenceTexture.value=e):(this.proceduralTurbulence=e,this.parameterUniforms.turbulenceTexture.value=e.texture)}get stbnTexture(){return this.cloudsPass.currentMaterial.uniforms.stbnTexture.value}set stbnTexture(e){this.cloudsPass.currentMaterial.uniforms.stbnTexture.value=e,this.shadowPass.currentMaterial.uniforms.stbnTexture.value=e}get resolutionScale(){return this.resolution.scale}set resolutionScale(e){this.resolution.scale=e}get temporalUpscale(){return this.cloudsPass.temporalUpscale}set temporalUpscale(e){this.cloudsPass.temporalUpscale=e}get lightShafts(){return this.cloudsPass.lightShafts}set lightShafts(e){this.cloudsPass.lightShafts=e}get shapeDetail(){return this.cloudsPass.currentMaterial.shapeDetail}set shapeDetail(e){this.cloudsPass.currentMaterial.shapeDetail=e,this.shadowPass.currentMaterial.shapeDetail=e}get turbulence(){return this.cloudsPass.currentMaterial.turbulence}set turbulence(e){this.cloudsPass.currentMaterial.turbulence=e,this.shadowPass.currentMaterial.turbulence=e}get haze(){return this.cloudsPass.currentMaterial.haze}set haze(e){this.cloudsPass.currentMaterial.haze=e}get scatteringCoefficient(){return this.parameterUniforms.scatteringCoefficient.value}set scatteringCoefficient(e){this.parameterUniforms.scatteringCoefficient.value=e}get absorptionCoefficient(){return this.parameterUniforms.absorptionCoefficient.value}set absorptionCoefficient(e){this.parameterUniforms.absorptionCoefficient.value=e}get coverage(){return this.parameterUniforms.coverage.value}set coverage(e){this.parameterUniforms.coverage.value=e}get turbulenceDisplacement(){return this.parameterUniforms.turbulenceDisplacement.value}set turbulenceDisplacement(e){this.parameterUniforms.turbulenceDisplacement.value=e}get scatterAnisotropy1(){return this.cloudsPass.currentMaterial.scatterAnisotropy1}set scatterAnisotropy1(e){this.cloudsPass.currentMaterial.scatterAnisotropy1=e}get scatterAnisotropy2(){return this.cloudsPass.currentMaterial.scatterAnisotropy2}set scatterAnisotropy2(e){this.cloudsPass.currentMaterial.scatterAnisotropy2=e}get scatterAnisotropyMix(){return this.cloudsPass.currentMaterial.scatterAnisotropyMix}set scatterAnisotropyMix(e){this.cloudsPass.currentMaterial.scatterAnisotropyMix=e}get skyLightScale(){return this.cloudsPass.currentMaterial.uniforms.skyLightScale.value}set skyLightScale(e){this.cloudsPass.currentMaterial.uniforms.skyLightScale.value=e}get groundBounceScale(){return this.cloudsPass.currentMaterial.uniforms.groundBounceScale.value}set groundBounceScale(e){this.cloudsPass.currentMaterial.uniforms.groundBounceScale.value=e}get powderScale(){return this.cloudsPass.currentMaterial.uniforms.powderScale.value}set powderScale(e){this.cloudsPass.currentMaterial.uniforms.powderScale.value=e}get powderExponent(){return this.cloudsPass.currentMaterial.uniforms.powderExponent.value}set powderExponent(e){this.cloudsPass.currentMaterial.uniforms.powderExponent.value=e}get atmosphereOverlay(){return this._atmosphereOverlay}get atmosphereShadow(){return this._atmosphereShadow}get atmosphereShadowLength(){return this._atmosphereShadowLength}get irradianceTexture(){return this.cloudsPass.currentMaterial.irradianceTexture}set irradianceTexture(e){this.cloudsPass.currentMaterial.irradianceTexture=e}get scatteringTexture(){return this.cloudsPass.currentMaterial.scatteringTexture}set scatteringTexture(e){this.cloudsPass.currentMaterial.scatteringTexture=e}get transmittanceTexture(){return this.cloudsPass.currentMaterial.transmittanceTexture}set transmittanceTexture(e){this.cloudsPass.currentMaterial.transmittanceTexture=e}get singleMieScatteringTexture(){return this.cloudsPass.currentMaterial.singleMieScatteringTexture}set singleMieScatteringTexture(e){this.cloudsPass.currentMaterial.singleMieScatteringTexture=e}get higherOrderScatteringTexture(){return this.cloudsPass.currentMaterial.higherOrderScatteringTexture}set higherOrderScatteringTexture(e){this.cloudsPass.currentMaterial.higherOrderScatteringTexture=e}get ellipsoid(){return this.cloudsPass.currentMaterial.ellipsoid}set ellipsoid(e){this.cloudsPass.currentMaterial.ellipsoid=e}get sunAngularRadius(){return this.cloudsPass.currentMaterial.sunAngularRadius}set sunAngularRadius(e){this.cloudsPass.currentMaterial.sunAngularRadius=e}}Oh([M("SKIP_RENDERING")],Go.prototype,"skipRendering");const{Camera:A1,RawShaderMaterial:R1,Uniform:C1,GLSL3:D1,Mesh:I1,PlaneGeometry:O1,WebGL3DRenderTarget:b1,RedFormat:N1,LinearFilter:M1,RepeatWrapping:L1,NoColorSpace:P1,WebGLRenderTarget:U1,RGBAFormat:H1,LinearMipMapLinearFilter:F1}=await J("three"),{MathUtils:Le,Matrix4:Gh,Vector3:fn}=await J("three"),ma=2026,Wo=139.8146,Wh=35.7455,Dr=new Fi(Le.degToRad(Wo),Le.degToRad(Wh)).toECEF(),Xt=At.WGS84.getEastNorthUpFrame(Dr).multiply(new Gh().makeRotationX(Math.PI/2)),vn=Xt.clone().invert(),kh=365*24;function ko(r,e){const t=Number.isFinite(r)?Le.clamp(Math.floor(r),1,365):170,i=Number.isFinite(e)?e:15,a=Le.euclideanModulo((t-1)*24+i,kh);return{dayOfYear:Math.floor(a/24)+1,timeOfDay:a%24}}function Bh(r,e){return new Date(Date.UTC(ma,0,1)+((r-1)*24+e-Wo/15)*36e5)}function Vh(r){const e=new Date(Date.UTC(ma,0,r));return`${String(e.getUTCMonth()+1).padStart(2,"0")} / ${String(e.getUTCDate()).padStart(2,"0")}`}class $h{constructor(e){this.dayOfYear=170,this.timeOfDay=15,this.cloudTime=0,this.sunDirection=new fn,this.moonDirection=new fn,this.setDate(e.dayOfYear,e.timeOfDay)}setDate(e,t){Object.assign(this,ko(e,t));const i=Bh(this.dayOfYear,this.timeOfDay);pu(i,this.sunDirection,Dr).transformDirection(vn),fu(i,this.moonDirection,Dr).transformDirection(vn)}advance(e,t){return t.paused||!Number.isFinite(e)||e<=0||(t.animateClouds&&Number.isFinite(t.cloudSpeed)&&(this.cloudTime+=e*Le.clamp(t.cloudSpeed,0,5)),!t.animateTime||!Number.isFinite(t.timeSpeed)||t.timeSpeed===0)?!1:(this.setDate(this.dayOfYear,this.timeOfDay+e*60*Le.clamp(t.timeSpeed,-.5,.5)),!0)}snapshot(){return{dayOfYear:this.dayOfYear,timeOfDay:this.timeOfDay,sunElevation:Le.radToDeg(Math.asin(Le.clamp(this.sunDirection.y,-1,1))),sunAzimuth:Le.euclideanModulo(Le.radToDeg(Math.atan2(this.sunDirection.x,-this.sunDirection.z)),360)}}}const jh=window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__||"./",Yh=new URL("plugins/water/oceanWeather/",new URL(jh,document.baseURI)).href,wt=r=>`${Yh}${r}`,O=await J("three"),mr=wt("takram"),gn={Low:{screenScale:.65,reflection:128},Medium:{screenScale:.85,reflection:192},High:{screenScale:1,reflection:256},Ultra:{screenScale:1,reflection:384}},yn=`
  varying vec2 vSkyUV;
  void main() {
    vSkyUV = uv;
    gl_Position = vec4(position.xy, 1.0, 1.0);
  }
`,Sn=`
  vec3 skyRadiance(vec3 radiance, float daylight, float exposure) {
    return radiance * exposure + vec3(0.002, 0.004, 0.009) * (1.0 - daylight);
  }
`;class wn{constructor(e){this.input=new O.WebGLRenderTarget(1,1,{type:O.HalfFloatType}),this.output=new O.WebGLRenderTarget(1,1,{type:O.HalfFloatType,depthBuffer:!1}),this.clouds=new Go(e),this.atmosphere=new ce(e,{sky:!0,sunLight:!1,skyLight:!1}),this.clouds.worldToECEFMatrix.copy(Xt),this.atmosphere.worldToECEFMatrix.copy(Xt),this.clouds.events.addEventListener("change",()=>{this.atmosphere.overlay=this.clouds.atmosphereOverlay,this.atmosphere.shadowLength=this.clouds.atmosphereShadowLength}),this.input.depthTexture=new O.DepthTexture(1,1,O.UnsignedIntType),this.pass=new ts(e,this.clouds,this.atmosphere),this.pass.renderToScreen=!1,this.pass.encodeOutput=!1,this.pass.fullscreenMaterial.toneMapped=!1,this.pass.setDepthTexture(this.input.depthTexture)}initialize(e,t){Object.assign(this.clouds,t.atmosphere,{localWeatherTexture:t.weather,shapeTexture:t.shape,shapeDetailTexture:t.detail,turbulenceTexture:t.turbulence,stbnTexture:t.noise}),Object.assign(this.atmosphere,t.atmosphere,{stbnTexture:t.noise}),this.pass.initialize(e,!1,O.HalfFloatType)}setSize(e,t){this.input.setSize(e,t),this.output.setSize(e,t),this.pass.setSize(e,t)}render(e,t,i,a,n,o){this.pass.mainCamera=t,this.clouds.sunDirection.copy(i),this.atmosphere.sunDirection.copy(i),this.atmosphere.moonDirection.copy(a),this.clouds.coverage=n,this.clouds.localWeatherOffset.set(o*.001,0),this.clouds.shapeOffset.set(0,0,0),this.clouds.shapeDetailOffset.set(0,0,0),e.setRenderTarget(this.input),e.setClearColor(0,0),e.clear(!0,!0,!1),this.pass.render(e,this.input,this.output,0,!1)}dispose(){this.pass.dispose(),this.input.depthTexture?.dispose(),this.input.dispose(),this.output.dispose()}}class qh{constructor(e,t){this.renderer=e,this.camera=t,this.cubeTarget=new O.WebGLCubeRenderTarget(256,{type:O.HalfFloatType,depthBuffer:!1,generateMipmaps:!1,minFilter:O.LinearFilter,magFilter:O.LinearFilter}),this.cubeCamera=new O.CubeCamera(.1,2e5,this.cubeTarget),this.copyScene=new O.Scene,this.copyCamera=new O.Camera,this.assets=new Set,this.sun=new O.Vector3,this.moon=new O.Vector3,this.previousCamera=new O.Matrix4,this.clearColor=new O.Color,this.viewport=new O.Vector4,this.scissor=new O.Vector4,this.quality="High",this.coverage=.37,this.width=1,this.height=1,this.loaded=!1,this.disposed=!1,this.dirty=!0,this.lightingChanged=!1,this.haze=!0,this.settleFrames=32,this.lastTime=-1,this.lastReflectionTime=-1,this.nextFace=0,this.view=new wn(t),this.reflection=new wn(t),this.reflection.atmosphere.sun=!1,this.cubeCamera.coordinateSystem=e.coordinateSystem,this.cubeCamera.updateCoordinateSystem(),this.copyMaterial=new O.ShaderMaterial({depthTest:!1,depthWrite:!1,toneMapped:!1,uniforms:{uSky:{value:this.reflection.output.texture},uDaylight:{value:1},uExposure:{value:10}},vertexShader:yn,fragmentShader:`
        uniform sampler2D uSky;
        uniform float uDaylight;
        uniform float uExposure;
        varying vec2 vSkyUV;
        ${Sn}
        void main() { gl_FragColor = vec4(skyRadiance(texture2D(uSky, vSkyUV).rgb, uDaylight, uExposure), 1.0); }
      `}),this.copyQuad=new O.Mesh(new O.PlaneGeometry(2,2),this.copyMaterial),this.copyQuad.frustumCulled=!1,this.copyScene.add(this.copyQuad);const i=new O.ShaderMaterial({depthWrite:!1,uniforms:{uViewSky:{value:this.view.output.texture},uEnvironment:{value:this.cubeTarget.texture},uInverseProjection:{value:new O.Matrix4},uInverseView:{value:new O.Matrix4},uUseScreen:{value:!0},uDaylight:{value:1},uExposure:{value:10},uUnderwater:{value:0}},vertexShader:yn,fragmentShader:`
        uniform sampler2D uViewSky;
        uniform samplerCube uEnvironment;
        uniform mat4 uInverseProjection;
        uniform mat4 uInverseView;
        uniform bool uUseScreen;
        uniform float uDaylight;
        uniform float uExposure;
        uniform float uUnderwater;
        varying vec2 vSkyUV;
        ${Sn}
        void main() {
          vec4 view = uInverseProjection * vec4(vSkyUV * 2.0 - 1.0, 1.0, 1.0);
          vec3 direction = normalize(mat3(uInverseView) * view.xyz);
          vec3 color = uUseScreen
            ? skyRadiance(texture2D(uViewSky, vSkyUV).rgb, uDaylight, uExposure)
            : textureCube(uEnvironment, direction).rgb;
          color = mix(color, vec3(0.006, 0.07, 0.1), uUnderwater * 0.93);
          gl_FragColor = vec4(color, 1.0);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }
      `});i.onBeforeRender=(a,n,o)=>{i.uniforms.uUseScreen.value=o===this.camera,i.uniforms.uInverseProjection.value.copy(o.projectionMatrixInverse),i.uniforms.uInverseView.value.copy(o.matrixWorld)},this.mesh=new O.Mesh(new O.PlaneGeometry(2,2),i),this.mesh.frustumCulled=!1,this.mesh.renderOrder=-10,this.configure("High"),this.ready=this.loadAssets()}get texture(){return this.cubeTarget.texture}get isReady(){return this.loaded}own(e){return this.disposed?e.dispose():this.assets.add(e),e}async loadAssets(){const e=async m=>{const p=this.own(await new O.TextureLoader().loadAsync(`${mr}/clouds/${m}`));return p.wrapS=p.wrapT=O.RepeatWrapping,p.colorSpace=O.NoColorSpace,p.needsUpdate=!0,p},t=async(m,p)=>this.own(await new St(O.Data3DTexture,Wc,{width:p,height:p,depth:p,format:O.RedFormat,minFilter:O.LinearFilter,magFilter:O.LinearFilter,wrapS:O.RepeatWrapping,wrapT:O.RepeatWrapping,wrapR:O.RepeatWrapping}).loadAsync(`${mr}/clouds/${m}`)),i=new Promise((m,p)=>{const g=new Iu().setType(this.renderer).load(`${mr}/atmosphere`,m,void 0,p);Object.values(g).forEach(y=>{y instanceof O.Texture&&this.own(y)})}),[a,n,o,s,c,u]=await Promise.all([i,e("local_weather.png"),t("shape.bin",128),t("shape_detail.bin",32),e("turbulence.png"),new Ts().loadAsync(`${mr}/core/stbn.bin`).then(m=>this.own(m))]);if(this.disposed)return;const l={atmosphere:a,weather:n,shape:o,detail:s,turbulence:c,noise:u};this.view.initialize(this.renderer,l),this.reflection.initialize(this.renderer,l),this.loaded=!0,this.dirty=!0}configure(e){if(this.quality===e&&this.width>1)return;this.quality=e,this.view.clouds.qualityPreset=e.toLowerCase(),this.view.clouds.temporalUpscale=!0,this.reflection.clouds.qualityPreset="medium",this.view.clouds.haze=this.reflection.clouds.haze=this.haze,this.reflection.clouds.temporalUpscale=!1,this.reflection.clouds.cloudsPass.resolveMaterial.uniforms.temporalAlpha.value=1,this.reflection.clouds.shadow.temporalPass=!1,this.reflection.clouds.shadow.temporalJitter=!1,this.reflection.clouds.shadow.cascadeCount=2,this.reflection.clouds.shadow.mapSize.setScalar(256);const t=gn[e].reflection;this.reflection.setSize(t,t),this.cubeTarget.setSize(t,t),this.setSize(this.width,this.height)}setSize(e,t){this.width=e,this.height=t;const i=gn[this.quality].screenScale;this.view.setSize(Math.max(1,Math.round(e*i)),Math.max(1,Math.round(t*i))),this.dirty=!0}setWeather(e,t){(this.mesh.material.uniforms.uExposure.value!==e||this.haze!==t)&&(this.dirty=!0),this.mesh.material.uniforms.uExposure.value=this.copyMaterial.uniforms.uExposure.value=e,this.haze=t,this.view.clouds.haze=this.reflection.clouds.haze=t}setLighting(e,t,i,a={}){const n=e.clone().transformDirection(Xt),o=a.moon?.clone().transformDirection(Xt)??n.clone().negate();(!n.equals(this.sun)||!o.equals(this.moon))&&(this.lightingChanged=!0,a.immediate!==!1&&(this.dirty=!0)),t!==this.coverage&&(this.dirty=!0),this.sun.copy(n),this.moon.copy(o),this.coverage=t,this.mesh.material.uniforms.uDaylight.value=i,this.copyMaterial.uniforms.uDaylight.value=i}sunLightColor(e){const t=this.view.atmosphere.transmittanceTexture;return t?Ru(t,Dr,this.sun,e):e.setRGB(1,.96,.89)}update(e,t=!1,i=e){if(!this.loaded||this.disposed)return;this.camera.updateMatrixWorld();const a=!this.previousCamera.equals(this.camera.matrixWorld);if((t||this.dirty||this.lightingChanged||a||e!==this.lastTime)&&(this.settleFrames=32),this.settleFrames<=0)return;this.settleFrames--;const n=this.renderer,o=n.getRenderTarget(),s=n.getActiveCubeFace(),c=n.getActiveMipmapLevel(),u=n.getClearAlpha(),l=n.getScissorTest();n.getClearColor(this.clearColor),n.getViewport(this.viewport),n.getScissor(this.scissor);try{if(n.setScissorTest(!1),this.view.render(n,this.camera,this.sun,this.moon,this.coverage,e),t||this.dirty||this.lightingChanged||i-this.lastReflectionTime>=.25){this.cubeCamera.position.copy(this.camera.position),this.cubeCamera.updateMatrixWorld(!0);const m=t||this.dirty?6:1;for(let p=0;p<m;p++){const g=this.nextFace++%6;this.reflection.render(n,this.cubeCamera.children[g],this.sun,this.moon,this.coverage,e),n.setRenderTarget(this.cubeTarget,g),n.render(this.copyScene,this.copyCamera)}this.lastReflectionTime=i}this.previousCamera.copy(this.camera.matrixWorld),this.lastTime=e,this.dirty=!1,this.lightingChanged=!1}finally{n.setRenderTarget(o,s,c),n.setClearColor(this.clearColor,u),n.setViewport(this.viewport),n.setScissor(this.scissor),n.setScissorTest(l)}}dispose(){this.disposed=!0,this.view.dispose(),this.reflection.dispose(),this.cubeTarget.dispose(),this.copyQuad.geometry.dispose(),this.copyMaterial.dispose(),this.assets.forEach(e=>e.dispose()),this.assets.clear()}}const Y=await J("three"),xn=`
  varying vec2 vUv;
  void main() { vUv = uv; gl_Position = vec4(position.xy, 0., 1.); }
`,Xh=`
  uniform float uTime;
  varying vec2 vUv;
  vec2 hash(vec2 p) {
    p = mod(p, 24.);
    return fract(sin(vec2(dot(p, vec2(127.1,311.7)), dot(p, vec2(269.5,183.3)))) * 43758.5453);
  }
  void main() {
    vec2 p = vUv * 24.;
    p += vec2(sin(vUv.y*25.1327+uTime*.32),cos(vUv.x*18.84956-uTime*.27))*.7;
    p += vec2(sin(dot(vUv,vec2(18.84956,75.39822))+uTime*.4),cos(dot(vUv,vec2(75.39822,-25.13274))-uTime*.36))*.27;
    vec2 cell = floor(p), local = fract(p);
    float nearest = 10., second = 10.;
    for(int y=-1;y<=1;y++) for(int x=-1;x<=1;x++) {
      vec2 offset = vec2(float(x),float(y));
      vec2 seed = hash(cell+offset);
      vec2 point = .5 + .32*sin(uTime*.55 + 6.283185*seed);
      float d = length(offset+point-local);
      if(d<nearest) { second=nearest; nearest=d; } else second=min(second,d);
    }
    float edge = second-nearest;
    float caustic = exp(-edge*edge*420.);
    gl_FragColor = vec4(vec3(caustic),1.);
  }
`,Tn=`
  uniform sampler2D uWaterCaustics;
  uniform vec3 uWaterSun;
  uniform float uWaterSunStrength;
  float waterCaustic(vec3 p) {
    float depth = max(-p.y,0.);
    vec2 surface = p.xz + uWaterSun.xz * depth/max(uWaterSun.y,.2);
    vec2 uv = surface / 24.;
    float a = texture2D(uWaterCaustics,uv).r;
    float b = texture2D(uWaterCaustics,mat2(.8,-.6,.6,.8)*uv*1.73 + .31).r;
    return a*.72 + b*.28;
  }
`;class Kh{constructor(){this.target=new Y.WebGLRenderTarget(1,1,{type:Y.HalfFloatType,samples:0}),this.caustics=new Y.WebGLRenderTarget(512,512,{depthBuffer:!1}),this.camera=new Y.Camera,this.quad=new Y.Mesh(new Y.PlaneGeometry(2,2)),this.scene=new Y.Scene,this.clock={value:0},this.sunDirection={value:new Y.Vector3(0,1,0)},this.sunStrength={value:1},this.materials=new WeakSet,this.lastTime=NaN,this.caustics.texture.generateMipmaps=!0,this.caustics.texture.minFilter=Y.LinearMipmapLinearFilter,this.caustics.texture.wrapS=this.caustics.texture.wrapT=Y.RepeatWrapping,this.target.depthTexture=new Y.DepthTexture(1,1,Y.UnsignedIntType),this.causticMaterial=new Y.ShaderMaterial({uniforms:{uTime:this.clock},vertexShader:xn,fragmentShader:Xh,depthTest:!1,depthWrite:!1,toneMapped:!1}),this.composite=new Y.ShaderMaterial({uniforms:{uColor:{value:this.target.texture},uDepth:{value:this.target.depthTexture},...this.sharedUniforms(),uInverseProjection:{value:new Y.Matrix4},uCameraWorld:{value:new Y.Matrix4},uEye:{value:new Y.Vector3},uSunColor:{value:new Y.Color},uDaylight:{value:1},uWaterLevel:{value:0},uSteps:{value:24},uShadow:{value:null},uShadowMatrix:{value:new Y.Matrix4},uHasShadow:{value:!1}},vertexShader:xn,fragmentShader:`
        #include <packing>
        varying vec2 vUv;
        uniform sampler2D uColor, uDepth, uShadow;
        uniform mat4 uInverseProjection, uCameraWorld, uShadowMatrix;
        uniform vec3 uEye, uSunColor;
        uniform float uDaylight, uWaterLevel;
        uniform int uSteps;
        uniform bool uHasShadow;
        ${Tn}
        float visibility(vec3 p) {
          if(!uHasShadow) return 1.;
          // Trace the refracted ray to the interface, then test the air-side sun shadow.
          p += uWaterSun * max(uWaterLevel-p.y,0.)/max(uWaterSun.y,.2);
          vec4 coord = uShadowMatrix * vec4(p,1.);
          vec3 uv = coord.xyz/coord.w;
          if(any(lessThan(uv,vec3(0.))) || any(greaterThan(uv,vec3(1.)))) return 1.;
          float depth = unpackRGBAToDepth(texture2D(uShadow,uv.xy));
          return smoothstep(uv.z-.0012,uv.z+.0004,depth);
        }
        void main() {
          float depth = texture2D(uDepth,vUv).r;
          vec4 view = uInverseProjection * vec4(vUv*2.-1.,depth*2.-1.,1.);
          vec3 endpoint = (uCameraWorld * vec4(view.xyz/view.w,1.)).xyz;
          vec3 direction = normalize(endpoint-uEye);
          float distanceToScene = min(length(endpoint-uEye),95.);
          // Geometry depth stops shafts in front of the seabed, rocks and hull.
          float waterLength = distanceToScene;
          if(direction.y>.0001) waterLength = min(waterLength,max((uWaterLevel-uEye.y)/direction.y,0.));
          waterLength = max(waterLength,0.);
          vec3 extinction = vec3(.17,.06,.035);
          vec3 transmission = exp(-extinction*waterLength);
          vec3 ambient = vec3(.004,.047,.09)*(.025+.975*uDaylight);
          vec3 scattered = ambient*(1.-transmission);
          float phase = .55 + 1.15*pow(max(dot(direction,uWaterSun),0.),8.);
          float rayLength = min(waterLength,36.);
          float stepLength = rayLength/float(uSteps);
          // Filter the light footprint instead of adding screen-space grain.
          vec3 shafts = vec3(0.);
          for(int i=0;i<64;i++) {
            if(i>=uSteps) break;
            float t = (float(i)+.5)*stepLength;
            vec3 p = uEye+direction*t;
            float sunPath = max(uWaterLevel-p.y,0.)/max(uWaterSun.y,.2);
            vec3 sunTransmittance = exp(-vec3(.23,.068,.03)*sunPath);
            vec2 surface = p.xz + uWaterSun.xz * sunPath;
            float focus = textureLod(uWaterCaustics,surface/84.,2.5).r;
            focus = smoothstep(.08,.65,focus);
            float lit = visibility(p);
            shafts += exp(-extinction*t)*sunTransmittance*(.012+focus*.5)*lit*stepLength;
          }
          scattered += shafts * vec3(.10,.32,.42) * uSunColor * uWaterSunStrength * phase;
          vec3 color = texture2D(uColor,vUv).rgb*transmission + scattered;
          gl_FragColor = vec4(color,1.);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }
      `,depthTest:!1,depthWrite:!1}),this.quad.frustumCulled=!1,this.scene.add(this.quad)}sharedUniforms(){return{uWaterCaustics:{value:this.caustics.texture},uWaterSun:this.sunDirection,uWaterSunStrength:this.sunStrength}}applyTo(e){!(e instanceof Y.MeshStandardMaterial)||this.materials.has(e)||(this.materials.add(e),e.onBeforeCompile=t=>{Object.assign(t.uniforms,this.sharedUniforms()),t.vertexShader=`varying vec3 vWaterWorld;
`+t.vertexShader,t.vertexShader=t.vertexShader.replace("#include <worldpos_vertex>",`
        #include <worldpos_vertex>
        vec4 waterPosition = vec4(transformed, 1.);
        #ifdef USE_INSTANCING
          waterPosition = instanceMatrix * waterPosition;
        #endif
        vWaterWorld = (modelMatrix * waterPosition).xyz;
      `),t.fragmentShader=`varying vec3 vWaterWorld;
`+Tn+t.fragmentShader,t.fragmentShader=t.fragmentShader.replace("#include <lights_fragment_end>",`
        #include <lights_fragment_end>
        float waterDepth = max(-vWaterWorld.y,0.);
        float submerged = smoothstep(0.,.4,waterDepth);
        float pattern = waterCaustic(vWaterWorld);
        // Modulate lit diffuse radiance before tone mapping; existing cast shadows remain dark.
        reflectedLight.directDiffuse *= mix(1.,.65+pattern*3.4,submerged*uWaterSunStrength);
        vec3 waterTransmission = exp(-vec3(.23,.068,.03)*waterDepth/max(uWaterSun.y,.35));
        reflectedLight.directDiffuse *= mix(vec3(1.),waterTransmission,submerged);
        reflectedLight.indirectDiffuse *= mix(vec3(1.),waterTransmission*.7,submerged);
      `)},e.customProgramCacheKey=()=>"ocean-underwater-caustics-v1",e.needsUpdate=!0)}setSize(e,t,i){this.target.setSize(e,t),this.composite.uniforms.uSteps.value={Low:16,Medium:28,High:40,Ultra:56}[i]}update(e,t,i,a,n,o){if(this.sunDirection.value.set(i.x/1.333,Math.sqrt(Math.max(1-(i.x*i.x+i.z*i.z)/(1.333*1.333),0)),i.z/1.333),this.sunStrength.value=Y.MathUtils.clamp(o,0,1)*Y.MathUtils.smoothstep(i.y,0,.12),this.composite.uniforms.uSunColor.value.copy(a),this.composite.uniforms.uDaylight.value=n,this.lastTime===t)return;this.clock.value=t;const s=e.getRenderTarget();this.quad.material=this.causticMaterial,e.setRenderTarget(this.caustics),e.render(this.scene,this.camera),e.setRenderTarget(s),this.lastTime=t}render(e,t,i,a,n=null){this.composite.uniforms.uInverseProjection.value.copy(t.projectionMatrixInverse),this.composite.uniforms.uCameraWorld.value.copy(t.matrixWorld),this.composite.uniforms.uEye.value.copy(t.position),this.composite.uniforms.uWaterLevel.value=a,this.composite.uniforms.uShadow.value=i.shadow.map?.texture??null,this.composite.uniforms.uShadowMatrix.value.copy(i.shadow.matrix),this.composite.uniforms.uHasShadow.value=i.castShadow&&!!i.shadow.map,this.quad.material=this.composite,e.setRenderTarget(n),e.render(this.scene,this.camera)}dispose(){this.target.depthTexture?.dispose(),this.target.dispose(),this.caustics.dispose(),this.causticMaterial.dispose(),this.composite.dispose(),this.quad.geometry.dispose()}}const Je={"Three.js Sky Pro":{wind:15,wavelength:47,timeOfDay:15,clouds:.37,water:"#007d9e",fog:9e-4},Arctic:{wind:8,wavelength:31,timeOfDay:9,clouds:.48,water:"#23667e",fog:.002},"Black Flag":{wind:18,wavelength:47,timeOfDay:16.5,clouds:.48,water:"#096574",fog:.0012},Dusk:{wind:9,wavelength:38,timeOfDay:19.5,clouds:.34,water:"#25435e",fog:.0018},Foggy:{wind:7,wavelength:35,timeOfDay:11,clouds:.88,water:"#527a7d",fog:.011},Moonlit:{wind:8,wavelength:36,timeOfDay:0,clouds:.2,water:"#082c48",fog:.0015},"Sea of Thieves":{wind:17,wavelength:55,timeOfDay:13,clouds:.3,water:"#008c87",fog:7e-4},Storm:{wind:28,wavelength:68,timeOfDay:16,clouds:.95,water:"#23454b",fog:.0045},Sunset:{wind:10,wavelength:42,timeOfDay:18.9,clouds:.4,water:"#175d68",fog:.0014}},gr={preset:"Three.js Sky Pro",quality:"High",wind:15,wavelength:47,dayOfYear:170,timeOfDay:15,animateTime:!1,timeSpeed:.05,animateClouds:!0,cloudSpeed:1,skyExposure:10,haze:!0,clouds:.37,pixelRatio:1,buoyancyProbes:!1,wakeProbes:!1,paused:!1},_n={...gr},Ze={Low:{segments:128,reflection:512,refraction:.5},Medium:{segments:192,reflection:768,refraction:.7},High:{segments:256,reflection:1024,refraction:1},Ultra:{segments:384,reflection:1536,refraction:1}},w=await J("three");function En(r){const e=new Set,t=new Set,i=new Set;r.traverse(a=>{const n=a;if(a instanceof w.InstancedMesh&&a.dispose(),a instanceof w.SkinnedMesh&&a.skeleton.dispose(),n.geometry&&e.add(n.geometry),n.material)for(const o of Array.isArray(n.material)?n.material:[n.material]){t.add(o);for(const s of Object.values(o))s instanceof w.Texture&&i.add(s)}}),i.forEach(a=>a.dispose()),t.forEach(a=>a.dispose()),e.forEach(a=>a.dispose())}class Zh{constructor(e,t,i,a,n,o,s){this.host=e,this.renderer=t,this.scene=i,this.camera=a,this.controls=n,this.callbacks=s,this.content=new w.Group,this.events=new AbortController,this.textures=[],this.draco=new Zo,this.refraction=new w.WebGLRenderTarget(1,1,{type:w.HalfFloatType}),this.sun=new w.DirectionalLight(16774623,2.8),this.ambient=new w.HemisphereLight(11852538,4813943,1.6),this.fill=new w.DirectionalLight(13098218,1.1),this.underwaterFogColor=new w.Color("#064052"),this.ship=new w.Group,this.hull=new w.Group,this.probes=new w.Group,this.wakeProbes=new w.Group,this.buoys=[],this.fish=[],this.mixers=[],this.keys=new Set,this.environment=null,this.lastEnvironmentUpdate=0,this.lastWeatherStats=0,this.disposed=!1,this.contextLost=!1,this.time=0,this.lastFrame=0,this.lastStats=0,this.frameCount=0,this.mode="orbit",this.speed=0,this.heading=-.12,this.width=1,this.underwaterLight=new Kh,this.underwater=!1,this.waterLevel=0,this.settings={...o},this.weather=new $h(o),this.renderer.domElement.setAttribute("aria-label","可交互的海洋三维场景"),this.renderer.domElement.tabIndex=0,this.controls.target.set(-4,6,-3),this.camera.position.set(17,11,37),this.controls.update(),this.refraction.depthTexture=new w.DepthTexture(1,1,w.UnsignedIntType),this.sun.position.set(-70,110,-110),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(2048,2048),Object.assign(this.sun.shadow.camera,{left:-100,right:100,top:100,bottom:-100,near:1,far:400}),this.sun.shadow.bias=-25e-5,this.sun.shadow.normalBias=.035,this.fill.position.set(28,42,65),this.fill.color.set("#fff0d7"),this.scene.add(this.content),this.content.add(this.sun,this.ambient,this.fill),this.atmosphere=new qh(this.renderer,this.camera),this.sky=this.atmosphere.mesh,this.content.add(this.sky),this.spectrum=new ds(this.renderer);const c=this.loadTexture(wt("textures/foam-filaments.png"));this.ocean=new Ko(this.waterGeometry(o.quality),{textureWidth:Ze[o.quality].reflection,textureHeight:Ze[o.quality].reflection,multisample:0,clipBias:.002,shader:{name:"OceanSurface",vertexShader:is,fragmentShader:as,uniforms:{color:{value:new w.Color},textureMatrix:{value:new w.Matrix4},tDiffuse:{value:null},uTime:{value:0},uWind:{value:o.wind},uTexelOffset:{value:.5/128},uRefraction:{value:null},uDepth:{value:null},uFoam:{value:null},uDisplacement0:{value:null},uDisplacement1:{value:null},uDisplacement2:{value:null},uNormal0:{value:null},uNormal1:{value:null},uNormal2:{value:null},uSkyEnvironment:{value:null},uReflectionDepth:{value:null},uResolution:{value:new w.Vector2},uEye:{value:new w.Vector3},uSun:{value:new w.Vector3},uSunColor:{value:new w.Color},uWaterColor:{value:new w.Color},uFogColor:{value:new w.Color},uFog:{value:.001},uDaylight:{value:1},uNear:{value:this.camera.near},uFar:{value:this.camera.far},uBoat:{value:new w.Vector3},uBoatSpeed:{value:0}}}}),this.material=this.ocean.material,this.ocean.getRenderTarget().depthTexture=new w.DepthTexture(Ze[o.quality].reflection,Ze[o.quality].reflection,w.UnsignedIntType),this.material.uniforms.uReflectionDepth.value=this.ocean.getRenderTarget().depthTexture,this.material.uniforms.uSkyEnvironment.value=this.atmosphere.texture,this.material.side=w.DoubleSide,this.material.uniforms.uRefraction.value=this.refraction.texture,this.material.uniforms.uDepth.value=this.refraction.depthTexture,this.material.uniforms.uFoam.value=c,this.ocean.rotation.x=-Math.PI/2,this.ocean.frustumCulled=!1,this.content.add(this.ocean),this.ship.add(this.hull),this.ship.position.set(0,0,4),this.content.add(this.ship,this.probes,this.wakeProbes),this.createSeabed(),this.createProbes(),this.applySettings(o),this.resize();const u=this.events.signal;window.addEventListener("keydown",l=>{l.target instanceof HTMLElement&&(/INPUT|SELECT|TEXTAREA/.test(l.target.tagName)||l.target.isContentEditable)||["KeyW","KeyA","KeyS","KeyD","KeyQ","KeyE","ShiftLeft","ShiftRight","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(l.code)&&(l.preventDefault(),this.keys.add(l.code))},{signal:u}),window.addEventListener("keyup",l=>this.keys.delete(l.code),{signal:u}),window.addEventListener("blur",()=>this.keys.clear(),{signal:u}),document.addEventListener("visibilitychange",()=>{this.lastFrame=0,this.keys.clear()},{signal:u}),this.renderer.domElement.addEventListener("webglcontextlost",l=>{l.preventDefault(),this.contextLost=!0,s.error("图形上下文已中断，请重新加载场景。")},{signal:u}),this.loadModels()}loadTexture(e,t=!1){const i=new w.TextureLoader().load(e,a=>{this.disposed&&a.dispose()},void 0,()=>{this.disposed||this.callbacks.error(`纹理加载失败：${e}`)});return i.wrapS=i.wrapT=w.RepeatWrapping,i.anisotropy=Math.min(8,this.renderer.capabilities.getMaxAnisotropy()),t&&(i.colorSpace=w.SRGBColorSpace),this.textures.push(i),i}waterGeometry(e){const t=new w.PlaneGeometry(2,2,Ze[e].segments,Ze[e].segments),i=t.getAttribute("position");for(let a=0;a<i.count;a++){const n=i.getX(a),o=i.getY(a);i.setXY(a,n*(90+Math.pow(Math.abs(n),4)*6e3),o*(90+Math.pow(Math.abs(o),4)*6e3))}return t.computeBoundingSphere(),t}seabedHeight(e,t){return-5.4-Math.min(Math.hypot(e,t+20)*.037,28)+Math.sin(e*.085)*Math.cos(t*.07)*.85}createSeabed(){const e=new w.PlaneGeometry(1400,1400,180,180);e.rotateX(-Math.PI/2);const t=e.getAttribute("position");for(let s=0;s<t.count;s++)t.setY(s,this.seabedHeight(t.getX(s),t.getZ(s)));e.computeVertexNormals();const i=this.loadTexture(wt("textures/sand.jpg"),!0),a=this.loadTexture(wt("textures/sand-normal.jpg"));i.repeat.set(160,160),a.repeat.set(160,160);const n=new w.MeshStandardMaterial({map:i,normalMap:a,color:"#bac8ad",roughness:.95,normalScale:new w.Vector2(.45,.45)});this.underwaterLight.applyTo(n);const o=new w.Mesh(e,n);o.receiveShadow=!0,this.content.add(o)}normalizeModel(e,t,i){let a=new w.Box3().setFromObject(e);const n=a.getSize(new w.Vector3);e.scale.multiplyScalar(t/Math.max(n.x,n.z)),e.updateMatrixWorld(!0),a=new w.Box3().setFromObject(e);const o=a.getCenter(new w.Vector3);return e.position.x-=o.x,e.position.z-=o.z,e.position.y-=a.min.y+i,e.traverse(s=>{if(s instanceof w.Mesh){s.castShadow=!0,s.receiveShadow=!0;for(const c of Array.isArray(s.material)?s.material:[s.material])this.underwaterLight.applyTo(c)}}),e}addSeabedInstances(e,t,i){e.updateWorldMatrix(!0,!0);const a=new w.Matrix4().copy(e.matrixWorld).invert(),n=[];e.traverse(c=>{if(!(c instanceof w.Mesh))return;const u=new w.InstancedMesh(c.geometry,c.material,t);u.castShadow=c.castShadow,u.receiveShadow=c.receiveShadow,this.content.add(u),n.push({mesh:u,local:new w.Matrix4().multiplyMatrices(a,c.matrixWorld)})});const o=new w.Object3D,s=new w.Matrix4;for(let c=0;c<t;c++){const u=(i()-.5)*175,l=(i()-.5)*145;o.position.copy(e.position).add(new w.Vector3(u,this.seabedHeight(u,l)-.1,l)),o.rotation.copy(e.rotation),o.rotation.y=i()*Math.PI*2,o.scale.copy(e.scale).multiplyScalar(.6+i()*1.1),o.updateMatrix();for(const{mesh:m,local:p}of n)m.setMatrixAt(c,s.multiplyMatrices(o.matrix,p))}for(const{mesh:c}of n)c.instanceMatrix.needsUpdate=!0,c.computeBoundingSphere()}async loadModels(){this.draco.setDecoderPath(wt("draco/"));const e=new $o().setDRACOLoader(this.draco),t=["dutch_ship_medium_2k","island","buoy","rocks","seaweed","grass","fish"],i=["木帆船","沙滩海岛","航道浮标","海底礁石","海藻","海草","鱼群"];let a=0;try{const[n]=await Promise.all([Promise.all(t.map(async(C,A)=>{const N=await e.loadAsync(wt(`models/${C}.glb`));return this.disposed?(En(N.scene),null):(N.scene.visible=!1,this.content.add(N.scene),this.callbacks.progress(Math.round(++a/(t.length+1)*100),`${i[A]}已就绪`),N)})),this.atmosphere.ready.then(()=>{this.disposed||this.callbacks.progress(Math.round(++a/(t.length+1)*100),"体积云与大气已就绪")})]);if(this.disposed)return;const[o,s,c,u,l,m,p]=n;if(!o||!s||!c||!u||!l||!m||!p)return;const g=this.normalizeModel(o.scene,28,1.65),y=new w.Box3().setFromObject(g).getSize(new w.Vector3);y.z>y.x&&(g.rotation.y=Math.PI/2),g.visible=!0,this.hull.add(g),s.scene.rotation.x=-Math.PI/2;const x=this.normalizeModel(s.scene,66,0);x.position.y=2.25,x.position.add(new w.Vector3(-25,0,-48)),x.visible=!0;const T=this.normalizeModel(c.scene,.35,.18);for(let C=0;C<8;C++){const A=new w.Group,N=T.clone(!0);N.visible=!0,A.add(N),A.position.set(-45+C*13,0,C%2?-20:20),this.content.add(A),this.buoys.push(A)}let D=8437;const H=()=>(D=D*1664525+1013904223>>>0,D/4294967296);for(const[C,A,N]of[[u.scene,5,24],[l.scene,2,42],[m.scene,2.6,54]])this.normalizeModel(C,A,0),this.addSeabedInstances(C,N,H);const L=this.normalizeModel(p.scene,.8,0);for(let C=0;C<16;C++){const A=Jo(L);if(A.visible=!0,this.content.add(A),this.fish.push(A),p.animations.length){const N=new w.AnimationMixer(A);N.clipAction(p.animations[0]).play(),this.mixers.push(N)}}this.updateWeatherLighting(),this.updateEnvironment(),this.callbacks.ready()}catch(n){this.disposed||this.callbacks.error(`场景资源加载失败，请重试。${n instanceof Error?n.message:""}`)}}createProbes(){const e=new w.SphereGeometry(.22,10,8),t=new w.MeshBasicMaterial({color:"#7cffe6",depthTest:!1});for(const n of[-9,0,9])for(const o of[-2.4,2.4]){const s=new w.Mesh(e,t);s.userData.offset=new w.Vector2(n,o),s.renderOrder=20,this.probes.add(s)}const i=new w.MeshBasicMaterial({color:"#ffc96b",wireframe:!0,depthTest:!1}),a=new w.TorusGeometry(.5,.08,4,16);for(let n=0;n<12;n++){const o=new w.Mesh(a,i);o.rotation.x=-Math.PI/2,o.renderOrder=20,this.wakeProbes.add(o)}}applySettings(e){const t=this.settings;this.settings={...e};const i=Je[e.preset]??Je["Three.js Sky Pro"];if(this.material.uniforms.uWind.value=e.wind,this.spectrum.configure(e.wind,e.wavelength,e.quality),this.atmosphere.configure(e.quality),this.atmosphere.setWeather(e.skyExposure,e.haze),this.material.uniforms.uWaterColor.value.set(i.water),this.probes.visible=e.buoyancyProbes,this.wakeProbes.visible=e.wakeProbes,(t.dayOfYear!==e.dayOfYear||t.timeOfDay!==e.timeOfDay)&&this.weather.setDate(e.dayOfYear,e.timeOfDay),this.updateWeatherLighting(),this.callbacks.weather?.(this.weather.snapshot()),t.quality!==e.quality){this.environment?.dispose(),this.environment=null,this.ocean.geometry.dispose(),this.ocean.geometry=this.waterGeometry(e.quality);const a=Ze[e.quality].reflection;this.ocean.getRenderTarget().setSize(a,a)}(t.quality!==e.quality||t.pixelRatio!==e.pixelRatio||this.width===1)&&this.resize(),(!this.environment||t.quality!==e.quality||t.timeOfDay!==e.timeOfDay||t.dayOfYear!==e.dayOfYear||t.skyExposure!==e.skyExposure||t.haze!==e.haze||t.clouds!==e.clouds||t.preset!==e.preset)&&(clearTimeout(this.environmentTimer),this.environmentTimer=setTimeout(()=>this.updateEnvironment(),200))}updateWeatherLighting(e=!0){const t=this.weather.sunDirection,i=t.y,a=w.MathUtils.smoothstep(i,-.12,.22),n=(1-w.MathUtils.smoothstep(Math.abs(i),.02,.45))*a;this.atmosphere.setLighting(t,this.settings.clouds,a,{moon:this.weather.moonDirection,immediate:e}),this.sun.position.copy(t).multiplyScalar(170),this.atmosphere.sunLightColor(this.sun.color);const o=Math.max(this.sun.color.r,this.sun.color.g,this.sun.color.b);o>0&&this.sun.color.multiplyScalar(1/o);const s=Math.min(o,1)*w.MathUtils.smoothstep(i,-.01,.03);this.sun.intensity=3.8*s*(1-this.settings.clouds*.42),this.sun.castShadow=i>0,this.ambient.intensity=.45+a*1.23,this.fill.intensity=(.25+a*3.25)*(1-this.settings.clouds*.3),this.ambient.color.set(a>.3?"#b7d7ed":"#507299"),this.material.uniforms.uSun.value.copy(t),this.material.uniforms.uSunColor.value.copy(this.sun.color).multiplyScalar(s),this.material.uniforms.uDaylight.value=a;const c=Je[this.settings.preset]??Je["Three.js Sky Pro"];this.material.uniforms.uFog.value=c.fog;const u=this.material.uniforms.uFogColor.value;u.setRGB(.2,.26,.33).multiplyScalar(.035+a*.965),u.lerp(new w.Color("#d79873"),n*.26),this.scene.fog||(this.scene.fog=new w.FogExp2(u,c.fog))}getWeather(){return this.weather.snapshot()}setWeatherDate(e,t){this.weather.setDate(e,t),this.settings.dayOfYear=this.weather.dayOfYear,this.settings.timeOfDay=this.weather.timeOfDay,this.updateWeatherLighting(),this.callbacks.weather?.(this.weather.snapshot()),clearTimeout(this.environmentTimer),this.environmentTimer=setTimeout(()=>this.updateEnvironment(),150)}updateEnvironment(e=!0){this.disposed||!this.atmosphere.isReady||(e&&this.atmosphere.update(this.weather.cloudTime,!0,this.time),this.environmentGenerator??=new w.PMREMGenerator(this.renderer),this.environment=this.environmentGenerator.fromCubemap(this.atmosphere.texture,this.environment),this.scene.environment=this.environment.texture,this.lastEnvironmentUpdate=this.time)}setMode(e){if(this.mode=e,this.keys.clear(),this.controls.enablePan=e==="orbit",this.controls.minDistance=e==="fly"?.1:3,e==="fly"){const t=this.camera.getWorldDirection(new w.Vector3);this.controls.target.copy(this.camera.position).addScaledVector(t,3)}e==="orbit"&&this.controls.target.copy(this.ship.position).add(new w.Vector3(0,5,0)),e==="boat"&&(this.controls.target.copy(this.ship.position).add(new w.Vector3(0,5,0)),this.camera.position.copy(this.ship.position).add(new w.Vector3(-34,16,30))),this.controls.update()}resetCamera(){this.ship.position.set(0,0,4),this.heading=-.12,this.speed=0,this.setMode("orbit"),this.camera.position.set(17,11,37),this.controls.target.set(-4,6,-3),this.controls.update()}underwaterView(){this.setMode("fly"),this.camera.position.set(18,-3.4,25);const e=new w.Vector3(0,-4.6,-15).sub(this.camera.position).normalize();this.controls.target.copy(this.camera.position).addScaledVector(e,3),this.controls.update()}async fullscreen(){document.fullscreenElement?await document.exitFullscreen():await this.host.parentElement?.requestFullscreen()}screenshot(){this.render(),this.renderer.domElement.toBlob(e=>{if(!e)return;const t=URL.createObjectURL(e),i=document.createElement("a");i.href=t,i.download=`ocean-${new Date().toISOString().replace(/[:.]/g,"-")}.png`,i.click(),setTimeout(()=>URL.revokeObjectURL(t),1e3)})}resize(){if(this.disposed||!this.renderer)return;this.width=Math.max(this.host.clientWidth,1);const e=this.renderer.getDrawingBufferSize(new w.Vector2);e.set(Math.max(1,e.x),Math.max(1,e.y)),this.atmosphere?.setSize(e.x,e.y),this.underwaterLight.setSize(e.x,e.y,this.settings.quality),this.material?.uniforms.uResolution.value.copy(e);const t=Ze[this.settings.quality].refraction;this.refraction.setSize(Math.max(1,Math.round(e.x*t)),Math.max(1,Math.round(e.y*t)))}updateMovement(e){const t=Number(this.keys.has("KeyW")||this.keys.has("ArrowUp"))-Number(this.keys.has("KeyS")||this.keys.has("ArrowDown")),i=Number(this.keys.has("KeyD")||this.keys.has("ArrowRight"))-Number(this.keys.has("KeyA")||this.keys.has("ArrowLeft"));if(this.mode==="fly"){const a=this.camera.getWorldDirection(new w.Vector3),n=new w.Vector3().crossVectors(a,this.camera.up).normalize(),o=a.multiplyScalar(t).addScaledVector(n,i);o.y+=Number(this.keys.has("KeyE"))-Number(this.keys.has("KeyQ")),o.multiplyScalar(e*(this.keys.has("ShiftLeft")||this.keys.has("ShiftRight")?45:15)),this.camera.position.add(o),this.controls.target.add(o);const s=this.seabedHeight(this.camera.position.x,this.camera.position.z)+.65;this.camera.position.y<s&&(this.controls.target.y+=s-this.camera.position.y,this.camera.position.y=s)}if(this.mode==="boat"&&!this.settings.paused){this.speed=w.MathUtils.damp(this.speed,t*7.5,.8,e),this.heading-=i*e*.42;const a=new w.Vector3(Math.cos(this.heading),0,-Math.sin(this.heading)).multiplyScalar(this.speed*e),n=this.ship.position.clone().add(a);Math.hypot(n.x+25,n.z+48)>31&&Math.hypot(n.x,n.z)<210?(this.ship.position.add(a),this.camera.position.add(a),this.controls.target.add(a)):this.speed=0}else this.speed=w.MathUtils.damp(this.speed,0,2,e)}update(e){if(this.disposed||this.contextLost)return;if(document.hidden){this.lastFrame=0;return}const t=this.lastFrame?Math.min((e-this.lastFrame)/1e3,.05):1/60;this.lastFrame=e,this.updateMovement(t),this.settings.paused||(this.time+=t),this.weather.advance(t,this.settings)&&this.updateWeatherLighting(!1);const{wind:i}=this.settings,a=(l,m)=>this.spectrum.heightAt(l,m,this.time),{x:n,z:o}=this.ship.position;this.ship.position.y=a(n,o)*.78,this.ship.rotation.y=this.heading,this.hull.rotation.x=-(a(n,o+3)-a(n,o-3))/6*.65,this.hull.rotation.z=(a(n+8,o)-a(n-8,o))/16*.65,this.buoys.forEach((l,m)=>{l.position.y=a(l.position.x,l.position.z),l.rotation.z=Math.sin(this.time*1.2+m)*i*.004,l.rotation.x=Math.cos(this.time*.9+m)*i*.003}),this.fish.forEach((l,m)=>{const p=this.time*.12+m*.6;l.position.set(Math.cos(p)*(13+m*.9),-3.9+Math.sin(p*2+m)*.7,Math.sin(p)*18+3),l.rotation.y=-p}),this.settings.paused||this.mixers.forEach(l=>l.update(t)),this.probes.visible&&this.probes.children.forEach(l=>{const m=l.userData.offset,p=n+m.x*Math.cos(this.heading)+m.y*Math.sin(this.heading),g=o-m.x*Math.sin(this.heading)+m.y*Math.cos(this.heading);l.position.set(p,a(p,g)+.3,g)}),this.wakeProbes.visible&&this.wakeProbes.children.forEach((l,m)=>{const p=10+Math.floor(m/2)*5,g=(m%2?1:-1)*p*.17,y=n-p*Math.cos(this.heading)+g*Math.sin(this.heading),x=o+p*Math.sin(this.heading)+g*Math.cos(this.heading);l.position.set(y,a(y,x)+.12,x)}),this.material.uniforms.uTime.value=this.time,this.material.uniforms.uEye.value.copy(this.camera.position),this.material.uniforms.uBoat.value.set(n,this.heading,o),this.material.uniforms.uBoatSpeed.value=Math.abs(this.speed),this.atmosphere.update(this.weather.cloudTime,!1,this.time),!this.settings.paused&&(this.settings.animateTime||this.settings.animateClouds)&&this.time-this.lastEnvironmentUpdate>=.5&&this.updateEnvironment(!1),this.spectrum.update(this.time,this.material.uniforms),this.underwaterLight.update(this.renderer,this.time,this.weather.sunDirection,this.sun.color,this.material.uniforms.uDaylight.value,this.sun.intensity/3.8),this.waterLevel=a(this.camera.position.x,this.camera.position.z);const s=this.camera.position.y<this.waterLevel-.1;this.underwater=s;const c=Je[this.settings.preset]??Je["Three.js Sky Pro"],u=this.scene.fog;u.density=s?0:c.fog,u.color.copy(s?this.underwaterFogColor:this.material.uniforms.uFogColor.value),this.sky.material.uniforms.uUnderwater.value=s?1:0,e-this.lastWeatherStats>=100&&(this.callbacks.weather?.(this.weather.snapshot()),this.lastWeatherStats=e),this.frameCount++,e-this.lastStats>700&&(this.callbacks.stats(Math.round(this.frameCount*1e3/(e-this.lastStats)),s,Math.abs(this.speed)*1.94384),this.frameCount=0,this.lastStats=e)}render(){this.disposed||this.contextLost||(this.ocean.visible=!1,this.sky.material.uniforms.uUnderwater.value=0,this.renderer.setRenderTarget(this.refraction),this.renderer.render(this.scene,this.camera),this.ocean.visible=!0,this.sky.material.uniforms.uUnderwater.value=this.underwater?1:0,this.renderer.setRenderTarget(this.underwater?this.underwaterLight.target:null),this.renderer.render(this.scene,this.camera),this.underwater&&this.underwaterLight.render(this.renderer,this.camera,this.sun,this.waterLevel))}dispose(){this.disposed=!0,clearTimeout(this.environmentTimer),this.events.abort(),this.keys.clear(),this.mixers.forEach(e=>{e.stopAllAction(),e.uncacheRoot(e.getRoot())}),this.draco.dispose(),this.spectrum.dispose(),this.atmosphere.dispose(),this.underwaterLight.dispose(),En(this.content),this.content.removeFromParent(),this.textures.forEach(e=>e.dispose()),this.environment?.dispose(),this.environmentGenerator?.dispose(),this.ocean.getRenderTarget().depthTexture?.dispose(),this.ocean.dispose(),this.refraction.dispose(),this.refraction.depthTexture?.dispose(),this.sun.shadow.dispose(),this.scene.environment=null,this.scene.fog=null}}const{defineComponent:Jh}=await J("vue"),{nextTick:Qh,onBeforeUnmount:ed,watch:An}=await J("vue"),td=Jh({__name:"experience",props:{settings:{}},emits:["engine","progress","ready","error","weather","stats"],setup(r,{emit:e}){const t=r,i=e,{renderer:a,scene:n,camera:o,controls:s,sizes:c}=jo(),u=a,{onBeforeRender:l,render:m}=Yo();let p;return An([o,s],([g,y])=>{if(!(p||!g||!y))try{p=new Zh(u.domElement.parentElement,u,n.value,g,y,t.settings,{progress:(x,T)=>i("progress",x,T),ready:()=>i("ready"),error:x=>i("error",x),weather:x=>i("weather",x),stats:(x,T,D)=>i("stats",x,T,D)}),i("engine",p)}catch(x){i("error",`无法初始化三维场景：${x instanceof Error?x.message:String(x)}`)}},{immediate:!0,flush:"post"}),An([c.width,c.height,()=>t.settings.pixelRatio],()=>{Qh(()=>p?.resize())},{flush:"post"}),l(()=>p?.update(performance.now())),m(g=>{p?p.render():o.value&&u.render(n.value,o.value),g()}),ed(()=>p?.dispose()),(g,y)=>null}}),{defineComponent:rd}=await J("vue"),{unref:ze,createElementVNode:h,createVNode:ci,isRef:id,resolveComponent:ad,withCtx:Rn,openBlock:Se,createBlock:nd,toDisplayString:V,normalizeClass:pr,renderList:Cn,Fragment:li,createElementBlock:Te,createTextVNode:b,createCommentVNode:Dn,vModelSelect:In,withDirectives:le,normalizeStyle:Ne,vModelText:at,vModelCheckbox:zt,vShow:od,Transition:sd}=await J("vue"),cd={class:"water-scene","aria-label":"海洋场景"},ld={class:"water-canvas"},ud={class:"camera-panel glass-panel","aria-label":"视角控制"},hd={class:"fps-readout"},dd={class:"camera-modes"},md=["aria-pressed","onClick"],pd={key:0,class:"camera-help"},fd={key:1,class:"camera-help"},vd={key:2,class:"camera-help"},gd=["aria-expanded","title"],yd={class:"settings-panel glass-panel","aria-label":"海洋参数"},Sd={class:"settings-body"},wd={class:"select-control"},xd={class:"weather-group",open:""},Td={class:"weather-content"},_d={class:"weather-location"},Ed={class:"weather-control"},Ad=["value"],Rd=["value"],Cd={class:"weather-control"},Dd={for:"weather-hour"},Id=["value"],Od=["value"],bd={class:"weather-control"},Nd=["aria-pressed","aria-label"],Md={class:"sun-readout"},Ld={class:"weather-group",open:""},Pd={class:"weather-content"},Ud={class:"switch-control"},Hd={class:"range-control"},Fd={class:"range-control"},zd={class:"weather-group"},Gd={class:"weather-content"},Wd={class:"range-control"},kd={class:"switch-control"},Bd={class:"weather-group"},Vd={class:"weather-content"},$d={class:"select-control"},jd={class:"range-control"},Yd={class:"range-control"},qd={class:"range-control pixel-control"},Xd={class:"switch-control"},Kd={class:"switch-control"},Zd={class:"switch-control pause-all"},Jd={class:"secondary-actions"},Qd={class:"scene-caption"},e0={class:"scene-status"},t0={key:0,class:"toast",role:"status"},r0={key:0,class:"loading-overlay"},i0={class:"loading-card glass-panel",role:"status","aria-live":"polite"},a0={class:"loading-track"},{computed:n0,onBeforeUnmount:o0,onMounted:s0,reactive:On,ref:_e,watch:c0}=await J("vue"),{ACESFilmicToneMapping:l0,PCFSoftShadowMap:u0,SRGBColorSpace:h0}=await J("three"),d0=rd({__name:"index",setup(r){const e=_e(0),t=[17,11,37],i=[-4,6,-3],a=On({..._n}),n=On({dayOfYear:a.dayOfYear,timeOfDay:a.timeOfDay,sunElevation:0,sunAzimuth:0}),o=_e("orbit"),s=_e(0),c=_e(0),u=_e(!1),l=_e(!0),m=_e(0),p=_e("正在加载海岛与木帆船"),g=_e(""),y=_e(!0),x=_e("");let T,D;const H=new AbortController,L=n0(()=>{const E=Math.floor(n.timeOfDay*60+1e-6)%1440;return`${String(Math.floor(E/60)).padStart(2,"0")}:${String(E%60).padStart(2,"0")}`}),C=[{value:"orbit",name:"环绕",key:"1"},{value:"fly",name:"漫游",key:"2"},{value:"boat",name:"航行",key:"3"}];function A(E){o.value=E,T?.setMode(E)}function N(){const E=Je[a.preset];Object.assign(a,{wind:E.wind,wavelength:E.wavelength,dayOfYear:170,timeOfDay:E.timeOfDay,animateTime:!1,clouds:E.clouds}),T?.setWeatherDate(170,E.timeOfDay)}function j(E,d){const xe=E.target,S=T?.getWeather()??n,ye=xe.valueAsNumber;if(!Number.isFinite(ye)){xe.value=String(S[d]);return}const Ye=ko(d==="dayOfYear"?ye:S.dayOfYear,d==="timeOfDay"?ye:S.timeOfDay);T?.setWeatherDate(Ye.dayOfYear,Ye.timeOfDay),Object.assign(n,Ye),Object.assign(a,Ye,{animateTime:!1})}function de(){const E=T?.getWeather()??n;Object.assign(a,{dayOfYear:E.dayOfYear,timeOfDay:E.timeOfDay,animateTime:!a.animateTime})}function te(){if(!a.animateTime)return;const E=T?.getWeather()??n;Object.assign(a,{dayOfYear:E.dayOfYear,timeOfDay:E.timeOfDay,animateTime:!1})}function Ie(){Object.assign(a,gr),T?.setWeatherDate(gr.dayOfYear,gr.timeOfDay),o.value="orbit",T?.resetCamera()}function Oe(){o.value="fly",T?.underwaterView()}function ge(E){x.value=E,clearTimeout(D),D=setTimeout(()=>x.value="",3e3)}function tt(){T=void 0,g.value="",l.value=!0,m.value=0,e.value++}function rt(E,d){m.value=E,p.value=d}function Ue(E){g.value=E,l.value=!1}function we(E,d,xe){s.value=E,u.value=d,c.value=xe}return c0(a,E=>T?.applySettings(E),{deep:!0}),s0(()=>{window.addEventListener("keydown",E=>{if(E.target instanceof HTMLElement&&(/INPUT|SELECT|TEXTAREA/.test(E.target.tagName)||E.target.isContentEditable))return;const d=C.find(xe=>xe.key===E.key);d&&A(d.value),E.code==="Space"&&!(E.target instanceof HTMLButtonElement)&&(E.preventDefault(),a.paused=!a.paused),E.key.toLowerCase()==="h"&&(y.value=!y.value)},{signal:H.signal})}),o0(()=>{const E=T?.getWeather()??n;Object.assign(_n,a,{dayOfYear:E.dayOfYear,timeOfDay:E.timeOfDay}),H.abort(),clearTimeout(D)}),(E,d)=>{const xe=ad("TresCanvas");return Se(),Te("section",cd,[h("div",ld,[(Se(),nd(xe,{key:e.value,dpr:a.pixelRatio,antialias:!0,alpha:!1,shadows:!0,"power-preference":"high-performance","tone-mapping":ze(l0),"tone-mapping-exposure":.95,"shadow-map-type":ze(u0),"output-color-space":ze(h0)},{default:Rn(()=>[h("TresPerspectiveCamera",{position:t,fov:48,near:.15,far:16e3}),ci(ze(qo),{"make-default":"",target:i,"enable-damping":!0,"damping-factor":.065,"min-distance":3,"max-distance":650,"max-polar-angle":Math.PI*.78},null,8,["max-polar-angle"]),ci(td,{settings:a,onEngine:d[0]||(d[0]=S=>id(T)?T.value=S:T=S),onProgress:rt,onReady:d[1]||(d[1]=S=>l.value=!1),onError:Ue,onWeather:d[2]||(d[2]=S=>Object.assign(n,S)),onStats:we},null,8,["settings"])]),_:1},8,["dpr","tone-mapping","shadow-map-type","output-color-space"]))]),h("aside",ud,[h("div",hd,[h("strong",{class:pr({slow:s.value<30})},V(s.value||"—"),3),d[24]||(d[24]=h("span",null,"FPS",-1))]),h("div",dd,[(Se(),Te(li,null,Cn(C,S=>h("button",{key:S.value,class:pr({active:o.value===S.value}),"aria-pressed":o.value===S.value,onClick:ye=>A(S.value)},[h("b",null,V(S.key),1),h("span",null,V(S.name),1)],10,md)),64))]),o.value==="orbit"?(Se(),Te("div",pd,[...d[25]||(d[25]=[h("span",null,[b("旋转视角 "),h("kbd",null,"左键")],-1),h("span",null,[b("平移视角 "),h("kbd",null,"右键")],-1),h("span",null,[b("拉近 / 远离 "),h("kbd",null,"滚轮")],-1)])])):o.value==="fly"?(Se(),Te("div",fd,[...d[26]||(d[26]=[h("span",null,[b("前后 / 左右 "),h("kbd",null,"W A S D")],-1),h("span",null,[b("下潜 / 上浮 "),h("kbd",null,"Q / E")],-1),h("span",null,[b("加速漫游 "),h("kbd",null,"Shift")],-1),h("span",null,[b("转动视角 "),h("kbd",null,"左键")],-1)])])):(Se(),Te("div",vd,[d[28]||(d[28]=h("span",null,[b("前进 / 后退 "),h("kbd",null,"W / S")],-1)),d[29]||(d[29]=h("span",null,[b("左转 / 右转 "),h("kbd",null,"A / D")],-1)),h("span",null,[d[27]||(d[27]=b("航行速度 ",-1)),h("em",null,V(c.value.toFixed(1))+" kn",1)])])),h("button",{class:"dive-button",onClick:Oe},[...d[30]||(d[30]=[b("⌁ ",-1),h("span",null,"探索水下世界",-1)])])]),h("button",{class:"panel-toggle glass-panel","aria-expanded":y.value,onClick:d[3]||(d[3]=S=>y.value=!y.value),title:y.value?"隐藏参数 H":"显示参数 H"},V(y.value?"收起参数 ›":"‹ 场景参数"),9,gd),le(h("aside",yd,[d[69]||(d[69]=h("header",{class:"panel-heading"},[h("div",null,[b("WATER "),h("b",null,"& WEATHER")]),h("span",null,"OCEAN · ATMOSPHERE")],-1)),h("div",Sd,[h("label",wd,[d[31]||(d[31]=h("span",null,[b("天气预设 "),h("small",null,"ENVIRONMENT")],-1)),le(h("select",{"onUpdate:modelValue":d[4]||(d[4]=S=>a.preset=S),"aria-label":"环境预设",onChange:N},[(Se(!0),Te(li,null,Cn(ze(Je),(S,ye)=>(Se(),Te("option",{key:ye},V(ye),1))),128))],544),[[In,a.preset]])]),h("details",xd,[d[38]||(d[38]=h("summary",null,[b("local date "),h("small",null,"太阳与季节")],-1)),h("div",Td,[h("div",_d,[b(V(ze(ma))+" · 东京 · 本地太阳时 ",1),h("span",null,V(ze(Vh)(n.dayOfYear)),1)]),h("div",Ed,[d[32]||(d[32]=h("label",{for:"weather-day"},[b("dayOfYear "),h("small",null,"年内日期")],-1)),h("input",{class:"number-input",type:"number",min:"1",max:"365",step:"1",value:n.dayOfYear,"aria-label":"dayOfYear 数值",onFocus:te,onChange:d[5]||(d[5]=S=>j(S,"dayOfYear"))},null,40,Ad),h("input",{id:"weather-day",value:n.dayOfYear,"aria-label":"dayOfYear",type:"range",min:"1",max:"365",step:"1",style:Ne({"--fill":`${(n.dayOfYear-1)/364*100}%`}),onInput:d[6]||(d[6]=S=>j(S,"dayOfYear"))},null,44,Rd)]),h("div",Cd,[h("label",Dd,[d[33]||(d[33]=b("timeOfDay ",-1)),h("small",null,V(L.value),1)]),h("input",{class:"number-input",type:"number",min:"0",max:"24",step:"0.1",value:Number(n.timeOfDay.toFixed(2)),"aria-label":"timeOfDay 数值",onFocus:te,onChange:d[7]||(d[7]=S=>j(S,"timeOfDay"))},null,40,Id),h("input",{id:"weather-hour",value:n.timeOfDay,"aria-label":"timeOfDay",type:"range",min:"0",max:"24",step:"0.01",style:Ne({"--fill":`${n.timeOfDay/24*100}%`}),onInput:d[8]||(d[8]=S=>j(S,"timeOfDay"))},null,44,Od)]),h("div",bd,[d[34]||(d[34]=h("label",{for:"weather-speed"},[b("speed "),h("small",null,"播放速度")],-1)),h("output",null,V(a.timeSpeed.toFixed(2)),1),le(h("input",{id:"weather-speed","onUpdate:modelValue":d[9]||(d[9]=S=>a.timeSpeed=S),"aria-label":"太阳时间 speed",type:"range",min:"-0.5",max:"0.5",step:"0.01",style:Ne({"--fill":`${(a.timeSpeed+.5)*100}%`})},null,4),[[at,a.timeSpeed,void 0,{number:!0}]])]),h("button",{class:pr(["animate-button",{running:a.animateTime}]),"aria-pressed":a.animateTime,"aria-label":a.animateTime?"太阳时间 stop":"太阳时间 animate",onClick:de},V(a.animateTime?"■ stop":"▶ animate"),11,Nd),h("div",Md,[h("span",null,[d[35]||(d[35]=b("太阳高度 ",-1)),h("b",null,V(n.sunElevation.toFixed(1))+"°",1)]),h("span",null,[d[36]||(d[36]=b("方位 ",-1)),h("b",null,V(n.sunAzimuth.toFixed(1))+"°",1)])]),d[37]||(d[37]=h("p",{class:"weather-hint"},"日期与时间可拖动或输入；拖动会停止播放。",-1))])]),h("details",Ld,[d[45]||(d[45]=h("summary",null,[b("clouds "),h("small",null,"体积云")],-1)),h("div",Pd,[h("label",Ud,[d[39]||(d[39]=h("span",null,[b("animate "),h("small",null,"云层移动")],-1)),le(h("input",{"onUpdate:modelValue":d[10]||(d[10]=S=>a.animateClouds=S),"aria-label":"体积云 animate",type:"checkbox",role:"switch"},null,512),[[zt,a.animateClouds]]),d[40]||(d[40]=h("i",null,null,-1))]),h("label",Hd,[h("span",null,[d[41]||(d[41]=b("coverage ",-1)),d[42]||(d[42]=h("small",null,"云层覆盖",-1)),h("output",null,V(Math.round(a.clouds*100))+"%",1)]),le(h("input",{"onUpdate:modelValue":d[11]||(d[11]=S=>a.clouds=S),"aria-label":"云层覆盖",type:"range",min:"0",max:"1",step:"0.01",style:Ne({"--fill":`${a.clouds*100}%`})},null,4),[[at,a.clouds,void 0,{number:!0}]])]),h("label",Fd,[h("span",null,[d[43]||(d[43]=b("speed ",-1)),d[44]||(d[44]=h("small",null,"移动速度",-1)),h("output",null,V(a.cloudSpeed.toFixed(1))+"×",1)]),le(h("input",{"onUpdate:modelValue":d[12]||(d[12]=S=>a.cloudSpeed=S),"aria-label":"云层移动速度",type:"range",min:"0",max:"5",step:"0.1",style:Ne({"--fill":`${a.cloudSpeed/5*100}%`})},null,4),[[at,a.cloudSpeed,void 0,{number:!0}]])])])]),h("details",zd,[d[50]||(d[50]=h("summary",null,[b("atmosphere "),h("small",null,"大气")],-1)),h("div",Gd,[h("label",Wd,[h("span",null,[d[46]||(d[46]=b("exposure ",-1)),d[47]||(d[47]=h("small",null,"天空曝光",-1)),h("output",null,V(a.skyExposure.toFixed(1)),1)]),le(h("input",{"onUpdate:modelValue":d[13]||(d[13]=S=>a.skyExposure=S),"aria-label":"大气曝光",type:"range",min:"0.5",max:"20",step:"0.1",style:Ne({"--fill":`${(a.skyExposure-.5)/19.5*100}%`})},null,4),[[at,a.skyExposure,void 0,{number:!0}]])]),h("label",kd,[d[48]||(d[48]=h("span",null,[b("haze "),h("small",null,"大气薄雾")],-1)),le(h("input",{"onUpdate:modelValue":d[14]||(d[14]=S=>a.haze=S),"aria-label":"大气薄雾 haze",type:"checkbox",role:"switch"},null,512),[[zt,a.haze]]),d[49]||(d[49]=h("i",null,null,-1))])])]),h("details",Bd,[d[63]||(d[63]=h("summary",null,[b("ocean "),h("small",null,"海况与渲染")],-1)),h("div",Vd,[h("label",$d,[d[52]||(d[52]=h("span",null,[b("渲染质量 "),h("small",null,"QUALITY")],-1)),le(h("select",{"onUpdate:modelValue":d[15]||(d[15]=S=>a.quality=S),"aria-label":"渲染质量"},[...d[51]||(d[51]=[h("option",null,"Low",-1),h("option",null,"Medium",-1),h("option",null,"High",-1),h("option",null,"Ultra",-1)])],512),[[In,a.quality]])]),h("label",jd,[h("span",null,[d[53]||(d[53]=b("风速 ",-1)),d[54]||(d[54]=h("small",null,"WIND SPEED",-1)),h("output",null,V(a.wind.toFixed(1))+" m/s",1)]),le(h("input",{"onUpdate:modelValue":d[16]||(d[16]=S=>a.wind=S),"aria-label":"风速",type:"range",min:"0",max:"30",step:"0.1",style:Ne({"--fill":`${a.wind/30*100}%`})},null,4),[[at,a.wind,void 0,{number:!0}]])]),h("label",Yd,[h("span",null,[d[55]||(d[55]=b("主波波长 ",-1)),d[56]||(d[56]=h("small",null,"WAVELENGTH",-1)),h("output",null,V(a.wavelength)+" m",1)]),le(h("input",{"onUpdate:modelValue":d[17]||(d[17]=S=>a.wavelength=S),"aria-label":"主波波长",type:"range",min:"10",max:"120",step:"1",style:Ne({"--fill":`${(a.wavelength-10)/110*100}%`})},null,4),[[at,a.wavelength,void 0,{number:!0}]])]),h("label",qd,[h("span",null,[d[57]||(d[57]=b("像素倍率 ",-1)),d[58]||(d[58]=h("small",null,"PIXEL RATIO",-1)),h("output",null,V(a.pixelRatio.toFixed(2))+"×",1)]),le(h("input",{"onUpdate:modelValue":d[18]||(d[18]=S=>a.pixelRatio=S),"aria-label":"像素倍率",type:"range",min:"0.5",max:"2",step:"0.25",style:Ne({"--fill":`${(a.pixelRatio-.5)/1.5*100}%`})},null,4),[[at,a.pixelRatio,void 0,{number:!0}]])]),h("label",Xd,[d[59]||(d[59]=h("span",null,[b("浮力探针 "),h("small",null,"BUOYANCY")],-1)),le(h("input",{"onUpdate:modelValue":d[19]||(d[19]=S=>a.buoyancyProbes=S),"aria-label":"浮力探针",type:"checkbox",role:"switch"},null,512),[[zt,a.buoyancyProbes]]),d[60]||(d[60]=h("i",null,null,-1))]),h("label",Kd,[d[61]||(d[61]=h("span",null,[b("尾流探针 "),h("small",null,"WAKE")],-1)),le(h("input",{"onUpdate:modelValue":d[20]||(d[20]=S=>a.wakeProbes=S),"aria-label":"尾流探针",type:"checkbox",role:"switch"},null,512),[[zt,a.wakeProbes]]),d[62]||(d[62]=h("i",null,null,-1))])])]),h("label",Zd,[d[64]||(d[64]=h("span",null,[b("暂停全部 "),h("small",null,"海水 · 天气")],-1)),le(h("input",{"onUpdate:modelValue":d[21]||(d[21]=S=>a.paused=S),"aria-label":"暂停时间",type:"checkbox",role:"switch"},null,512),[[zt,a.paused]]),d[65]||(d[65]=h("i",null,null,-1))]),h("button",{class:"primary-button",onClick:Ie},[...d[66]||(d[66]=[b("重置场景 ",-1),h("span",null,"↺",-1)])]),h("div",Jd,[h("button",{onClick:d[22]||(d[22]=S=>{ze(T)?.screenshot(),ge("场景截图已生成")})},"保存画面"),h("button",{onClick:d[23]||(d[23]=S=>ze(T)?.fullscreen().catch(()=>ge("当前浏览器未允许全屏")))},"全屏浏览 ⛶")]),d[67]||(d[67]=h("a",{class:"reference-link",href:"https://takram-design-engineering.github.io/three-geospatial/?path=/story/clouds-3d-tiles-renderer-integration--tokyo",target:"_blank",rel:"noopener noreferrer"},"THREE-GEOSPATIAL · 天气参考 ↗",-1)),d[68]||(d[68]=h("a",{class:"reference-link",href:"https://www.threejswaterpro.com/",target:"_blank",rel:"noopener noreferrer"},"THREE.JS WATER PRO · 海洋参考 ↗",-1))])],512),[[od,y.value]]),h("div",Qd,[d[72]||(d[72]=h("span",{class:"caption-rule"},null,-1)),h("div",null,[d[70]||(d[70]=h("small",null,"01 / INTERACTIVE ENVIRONMENT",-1)),d[71]||(d[71]=h("h1",null,[b("蔚蓝之境"),h("span",null,"THE OPEN WATER")],-1)),h("p",null,V(u.value?"水下漫游 · Q 下潜 / E 上浮":"海风、浪涌与光的实时交汇"),1)])]),h("div",e0,[h("i",{class:pr({paused:a.paused})},null,2),b(V(a.paused?"时间已暂停":u.value?"UNDERWATER":"LIVE OCEAN"),1),d[73]||(d[73]=h("span",null,"WebGL 2",-1))]),ci(sd,{name:"fade"},{default:Rn(()=>[x.value?(Se(),Te("div",t0,V(x.value),1)):Dn("",!0)]),_:1}),l.value||g.value?(Se(),Te("div",r0,[h("div",i0,[d[74]||(d[74]=h("div",{class:"loading-symbol"},"≈",-1)),h("h2",null,V(g.value?"场景加载遇到问题":"驶向蔚蓝之境"),1),h("p",null,V(g.value||p.value),1),g.value?(Se(),Te("button",{key:1,class:"primary-button",onClick:tt},"重新加载")):(Se(),Te(li,{key:0},[h("div",a0,[h("i",{style:Ne({width:`${Math.max(m.value,4)}%`})},null,4)]),h("small",null,V(m.value)+"% · 首次加载需要编译水面着色器",1)],64))])])):Dn("",!0)])}}}),m0=Xo(d0,[["__scopeId","data-v-57a6000a"]]),{defineComponent:p0}=await J("vue"),{openBlock:f0,createBlock:v0}=await J("vue"),z1=p0({__name:"oceanWeather",setup(r){return(e,t)=>(f0(),v0(m0))}});export{z1 as default};
