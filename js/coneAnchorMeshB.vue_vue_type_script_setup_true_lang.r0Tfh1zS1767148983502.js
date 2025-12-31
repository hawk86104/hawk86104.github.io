import{importShared as o}from"./3d-tiles-renderer.DZNovkLO1767148983502.js";import{rz as q,_l as b,Fs as I,no as j,sz as O}from"./index.DTe2qqjO1767148983502.js";import{useFBO as H,useTexture as Y}from"./customShaderMaterial.vue_vue_type_script_setup_true_lang.B7dQ_CiZ1767148983502.js";import"./index.vue_vue_type_script_setup_true_lang.CjsHShHS1767148983502.js";import{getcenterPoint as J,loadGeojson as Z}from"./utils.DURg_k-q1767148983502.js";import{lonLatToUtm as K}from"./TerrainMeshProvider.DkO8ghB01767148983502.js";import{useGLTF as Q}from"./index.Bk2zy1aS1767148983502.js";const{defineComponent:ee}=await o("vue"),{createElementVNode:C,unref:P,openBlock:oe,createElementBlock:te}=await o("vue"),re=["scale"],ae={renderOrder:2200},ne=["args"],ie=["side","map","color","opacity"],le=["position"],se=["args"],ce=["side","map","color","opacity"],R=await o("three"),{ref:W,watch:ue}=await o("vue"),Bo=ee({__name:"diffuseCircle",props:{radius:{default:100},ballColor:{default:"#ffff00"},wallColor:{default:"#ffffff"},speed:{default:1}},setup(h){const e=h,{textures:r,isLoading:a}=q(["./plugins/digitalCity/image/diffuseCircle1.png","./plugins/digitalCity/image/diffuseCircle2.png"]);ue([r,a],([i,u])=>{i&&!u&&i[1].offset.set(.5,.5)});const t=W(0),d=W(1),{onBeforeRender:s}=b();return s(({delta:i})=>{t.value>1&&(t.value=0),t.value+=i*e.speed,d.value=1.4-t.value}),(i,u)=>(oe(),te("TresGroup",{scale:t.value},[C("TresMesh",ae,[C("TresSphereGeometry",{args:[e.radius,64,64,0,Math.PI*2,0,Math.PI/2]},null,8,ne),C("TresMeshBasicMaterial",{side:R.DoubleSide,transparent:"",map:P(r)[0],color:i.ballColor,opacity:d.value},null,8,ie)]),C("TresMesh",{renderOrder:2201,position:[0,e.radius*.3,0]},[C("TresCylinderGeometry",{args:[e.radius*1.02,e.radius*1.02,e.radius*.6,32,1,!0],openEnded:!0},null,8,se),C("TresMeshBasicMaterial",{side:R.DoubleSide,transparent:"",map:P(r)[1],color:i.wallColor,opacity:d.value},null,8,ce)],8,le)],8,re))}}),{defineComponent:de}=await o("vue"),{createElementVNode:z,normalizeProps:fe,guardReactiveProps:pe,openBlock:he,createElementBlock:me}=await o("vue"),ve={renderOrder:2200},_e=["args"],{toRaw:ge,watch:ye}=await o("vue"),N=await o("three"),Eo=de({__name:"depthBufferDiffuse",props:{radius:{default:100},shieldColor:{default:"#ffff00"},rimColor:{default:"#ffffff"},threshold:{default:.005}},setup(h){const e=h,{sizes:r,camera:a}=I(),t=r.aspectRatio.value,d=r.width.value,s=r.height.value,i=d*t,u=s*t,v=H({height:i,width:u,depth:!0,isLoop:!0}),c={blending:N.NormalBlending,transparent:!0,depthWrite:!1,depthTest:!0,side:N.DoubleSide,vertexShader:`
        varying vec2 vUv;
        varying vec3 vNormal;
        varying vec3 vPosition;
        void main() {
            vUv = uv;
            vec4 worldPos = modelMatrix * vec4(position, 1.0);
            vec4 modelNormal = modelMatrix * vec4(normal, 0.0);
            vec4 mvPosition = viewMatrix * worldPos;
            gl_Position = projectionMatrix * mvPosition;
            vNormal = modelNormal.xyz;
            vPosition = worldPos.xyz;
        }
    `,fragmentShader:`
        uniform sampler2D uDepthTexture; 
        uniform vec2 uResolution;
        uniform float uNear;
        uniform float uFar;
        uniform float uThreshold;
        uniform vec3 uShieldColor;
        uniform vec3 uRimColor;

        varying vec2 vUv;
        varying vec3 vNormal;
        varying vec3 vPosition;

        #include <packing>

        float LinearizeDepth(float depth) {
            float zNdc = 2.0 * depth - 1.0;
            float zEye = (2.0 * uFar * uNear) / ((uFar + uNear) - zNdc * (uFar - uNear));
            float linearDepth = (zEye - uNear) / (uFar - uNear);
            return linearDepth;
        }

        void main() {
            vec3 normal = normalize(vNormal);
            if(gl_FrontFacing) {
                normal *= -1.0;
            }

            vec3 viewDirection = normalize(cameraPosition - vPosition);
            float fresnel = 1. + dot(normal, viewDirection);
            fresnel = pow(fresnel, 4.0);

            vec2 worldCoords = gl_FragCoord.xy/uResolution;

            float sceneDepth = LinearizeDepth(texture2D(uDepthTexture, worldCoords).r);
            float bubbleDepth = LinearizeDepth(gl_FragCoord.z);

            float difference = abs(sceneDepth - bubbleDepth);
            float normalizedDistance = clamp(difference / uThreshold, 0.0, 1.0);
            vec4 intersection = mix(vec4(1.0), vec4(0.0), normalizedDistance);
            intersection.rgb *= uRimColor;

            vec4 color = vec4(uShieldColor, 0.3);
            gl_FragColor = color + intersection + vec4(uRimColor, 1.0) * fresnel;
        }
    `,uniforms:{uDepthTexture:{value:ge(v?.value?.depthTexture)},uResolution:{value:new N.Vector2(d,s)},uNear:{value:a.value?.near??1},uFar:{value:a.value?.far??1e4},uThreshold:{value:e.threshold},uShieldColor:{value:new N.Color(e.shieldColor)},uRimColor:{value:new N.Color(e.rimColor)}}},{onRender:p}=b();return p(()=>{}),ye(()=>[e.rimColor,e.shieldColor,e.threshold],([n,l,_])=>{c.uniforms.uRimColor.value.setStyle(n),c.uniforms.uShieldColor.value.setStyle(l),c.uniforms.uThreshold.value=_}),(n,l)=>(he(),me("TresMesh",ve,[z("TresSphereGeometry",{args:[e.radius,64,64]},null,8,_e),z("TresShaderMaterial",fe(pe(c)),null,16)]))}}),{withAsyncContext:xo,defineComponent:So}=await o("vue"),{unref:ko,openBlock:Po,createBlock:Ro}=await o("vue"),{watch:Wo}=await o("vue");await o("three");const{defineComponent:zo}=await o("vue"),{openBlock:Do,createElementBlock:Go,createCommentVNode:Uo}=await o("vue"),{watch:Vo,watchEffect:Fo,toRaw:Ao,ref:Lo}=await o("vue");await o("three");const{defineComponent:we}=await o("vue"),{createElementVNode:$,normalizeProps:D,guardReactiveProps:G,openBlock:Ce,createElementBlock:$e}=await o("vue"),Te={renderOrder:9999},be=["rotation"],Ne=["args"],Me=["rotation"],Be=["args"],g=await o("three"),{watchEffect:Ee}=await o("vue"),Xo=we({__name:"rectangleGlow",props:{w:{default:100},h:{default:100},pColor:{default:"#ffff00"},gradientWidth:{default:.99},glowWidth:{default:.99},nNumber:{default:8},lineWidth:{default:2},lColor:{default:"#ffff00"}},setup(h){const e=h,r={vertexShader:`
 		varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,fragmentShader:`
    varying vec2 vUv;
		uniform vec3 color;
		uniform float gradientWidth;
		uniform float glowWidth;
		uniform float nNumber;

    void main() {
 			float distX = abs(vUv.x - 0.5) / 0.5;
      float distY = abs(vUv.y - 0.5) / 0.5;

      // 使用 Minkowski 距离，平滑矩形感 + 中心无交叉线 + 对角线也平滑
      float dist = pow(pow(distX, nNumber) + pow(distY, nNumber), 1.0 / nNumber);

      float cutoff = 1.0 - gradientWidth;
  		float alpha = smoothstep(cutoff, cutoff + glowWidth, dist);

      gl_FragColor = vec4(color, alpha);
    }
  `,transparent:!0,side:g.DoubleSide,depthWrite:!1,depthTest:!0,uniforms:{color:{type:"uvs",value:new g.Color(e.pColor)},gradientWidth:{type:"f",value:e.gradientWidth},glowWidth:{type:"f",value:e.glowWidth},nNumber:{type:"f",value:e.nNumber}}},a={transparent:!0,side:g.DoubleSide,depthWrite:!1,depthTest:!0,uniforms:{borderWidth:{value:e.lineWidth},borderColor:{value:new g.Color(e.lColor)},size:{value:new g.Vector2(e.w,e.h)}},vertexShader:`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,fragmentShader:`
    uniform float borderWidth;
    uniform vec3 borderColor;
    varying vec2 vUv;
		uniform vec2 size;

    void main() {
		 	float borderX = borderWidth / size.x;
  		float borderY = borderWidth / size.y;

      float left   = step(vUv.x, borderX);
      float right  = step(1.0 - borderX, vUv.x);
      float bottom = step(vUv.y, borderY);
      float top    = step(1.0 - borderY, vUv.y);

      float edge = max(max(left, right), max(bottom, top)); // 只保留边缘线
      float alpha = edge;

      gl_FragColor = vec4(borderColor, alpha);
    }
  `};return Ee(()=>{r.uniforms.color.value=new g.Color(e.pColor),r.uniforms.gradientWidth.value=e.gradientWidth,r.uniforms.glowWidth.value=e.glowWidth,r.uniforms.nNumber.value=e.nNumber,a.uniforms.borderColor.value=new g.Color(e.lColor),a.uniforms.borderWidth.value=e.lineWidth,a.uniforms.size.value.set(e.w,e.h)}),(t,d)=>(Ce(),$e("TresGroup",Te,[$("TresMesh",{rotation:[Math.PI/2,0,0]},[$("TresPlaneGeometry",{args:[t.w,t.h]},null,8,Ne),$("TresShaderMaterial",D(G(r)),null,16)],8,be),$("TresMesh",{rotation:[Math.PI/2,0,0]},[$("TresPlaneGeometry",{args:[t.w+t.lineWidth,t.h+t.lineWidth]},null,8,Be),$("TresShaderMaterial",D(G(a)),null,16)],8,Me)]))}}),{defineComponent:xe}=await o("vue"),{unref:U,createElementVNode:V,normalizeProps:Se,guardReactiveProps:ke,openBlock:Pe,createElementBlock:Re}=await o("vue"),We=["position","uv"],E=await o("three"),{watchEffect:ze,ref:De,watch:Ge}=await o("vue"),qo=xe({__name:"wave",props:{positionSrc:{default:[{x:0,y:0},{x:10,y:10}]},color:{default:"#ffff00"},opacity:{default:.8},height:{default:100},frequencyNum:{default:8},speed:{default:1}},setup(h){const e=h,r=De(),a={side:E.DoubleSide,transparent:!0,depthWrite:!1,depthTest:!0,vertexShader:`
varying vec2 vUv; 
void main(){
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
}
`,fragmentShader:`
	uniform float uTime;
	varying vec2 vUv;
	#define PI 3.14159265
  uniform float speed;
  uniform vec3 color;
  uniform float opacity;
  uniform float frequencyNum;
	void main(){
			
	float amplitude = 1.;

	float x = vUv.x;
	float y = sin(x * frequencyNum) ;
	float t = 0.01*(-uTime*130.0*speed);
	y += sin(x*frequencyNum*2.1 + t)*4.5;
	y += sin(x*frequencyNum*1.72 + t*1.121)*4.0;
	y += sin(x*frequencyNum*2.221 + t*0.437)*5.0;
	y += sin(x*frequencyNum*3.1122+ t*4.269)*2.5;
	y *= amplitude*0.06;
	y /= 3.;
	y += 0.55;

	float ap = step(vUv.y,y) * (y-vUv.y)/y;

	gl_FragColor = vec4(color,ap*opacity);
}
	`,uniforms:{uTime:{type:"pv2",value:0},color:{type:"uvs",value:new E.Color(e.color)},opacity:{type:"pv2",value:e.opacity},frequencyNum:{type:"pv2",value:e.frequencyNum},speed:{type:"pv2",value:e.speed}}};let t=null,d=null;function s(c=[],p){const n=[],l=[];for(let _=0,f=n.length,m=l.length;_<c.length-1;_++){let B=1,y=c[_],w=c[_+1];n[f++]=y.x,n[f++]=0,n[f++]=y.y,l[m++]=0,l[m++]=0,n[f++]=w.x,n[f++]=0,n[f++]=w.y,l[m++]=1,l[m++]=0,n[f++]=y.x,n[f++]=p,n[f++]=y.y,l[m++]=0,l[m++]=B,n[f++]=y.x,n[f++]=p,n[f++]=y.y,l[m++]=0,l[m++]=B,n[f++]=w.x,n[f++]=0,n[f++]=w.y,l[m++]=1,l[m++]=0,n[f++]=w.x,n[f++]=p,n[f++]=w.y,l[m++]=1,l[m++]=B}t=new Float32Array(n),d=new Float32Array(l)}const{centerPoint:i,points:u}=J(e.positionSrc);s(u,e.height);const{onBeforeRender:v}=b();return v(({delta:c})=>{a.uniforms.uTime.value+=c}),ze(()=>{e.color&&(a.uniforms.color.value=new E.Color(e.color)),e.opacity&&(a.uniforms.opacity.value=e.opacity),e.frequencyNum&&(a.uniforms.frequencyNum.value=e.frequencyNum),e.speed&&(a.uniforms.speed.value=e.speed),r.value&&r.value.position.set(i.x,r.value.position.y,i.y)}),Ge(()=>e.height,c=>{s(u,e.height),r.value&&r.value.position.set(i.x,r.value.position.y,i.y)}),(c,p)=>(Pe(),Re("TresMesh",{renderOrder:2200,ref_key:"tresMeshRef",ref:r},[V("TresBufferGeometry",{position:[U(t),3],uv:[U(d),2]},null,8,We),V("TresShaderMaterial",Se(ke(a)),null,16)],512))}}),{withAsyncContext:Ue,defineComponent:Ve}=await o("vue"),{unref:x,renderList:Fe,Fragment:Ae,openBlock:S,createElementBlock:k,createElementVNode:F}=await o("vue"),Le=["args"],Xe=["map","side","color"],{watch:qe}=await o("vue"),{CatmullRomCurve3:Ie,Vector3:je,RepeatWrapping:Oe,DoubleSide:He}=await o("three"),Io=Ve({__name:"roadLightByLonLat",props:{geoJson:{},color:{default:"#ffff00"},radius:{default:2},speed:{default:1}},async setup(h){let e,r;const a=h,{state:t}=j("./plugins/digitalCity/image/line.png");qe(t,u=>{u&&(u.needsUpdate=!0,u.wrapS=u.wrapT=Oe,u.repeat.set(1,1))});const d=([e,r]=Ue(()=>Z(a.geoJson)),e=await e,r(),e);let s=[];for(let u=0;u<d.length;u++){const v=d[u],c=[];v.geometry.coordinates.forEach(n=>{const l=K(n[0],n[1],50);c.push(new je(l[0],0,-l[1]))});let p=a.color;v.properties.highway==="primary"?p="#7eff10":v.properties.highway==="tertiary"?p="#0eeeee":v.properties.highway==="secondary"?p="#ffffff":p="#ff0ffe",s.push({cr3:new Ie(c),color:p})}const{onBeforeRender:i}=b();return i(()=>{t.value&&(t.value.offset.x-=Math.random()/20*a.speed)}),(u,v)=>(S(),k("TresGroup",null,[(S(!0),k(Ae,null,Fe(x(s),(c,p)=>(S(),k("TresMesh",{key:p,renderOrder:3e3},[F("TresTubeGeometry",{args:[c.cr3,64,a.radius,20,!1]},null,8,Le),F("TresMeshBasicMaterial",{map:x(t),side:x(He),transparent:!0,color:c.color},null,8,Xe)]))),128))]))}}),{defineComponent:Ye}=await o("vue"),{createElementVNode:T,unref:Je,withCtx:Ze,createVNode:Ke,openBlock:Qe,createElementBlock:eo}=await o("vue"),oo=["rotateX"],to=["rotateX","position"],ro=["args"],ao=["map","depthTest","side","color"],no=["rotateX","position"],io=["args"],lo=["map","depthTest","side","color"],{ref:so}=await o("vue"),A=await o("three"),jo=Ye({__name:"coneAnchorMeshA",props:{height:{default:40},color:{default:"#b0ffff"},occlusion:{type:Boolean,default:!0},speed:{default:.05}},setup(h){const e=h,r=so(),{onBeforeRender:a}=b();return a(()=>{r.value?.rotateZ(e.speed)}),(t,d)=>(Qe(),eo("TresGroup",{rotateX:-Math.PI/2,ref_key:"coneGroup",ref:r,renderOrder:1e4},[Ke(Je(O),{path:"./plugins/digitalCity/image/midGradient.png"},{default:Ze(({state:s})=>[T("TresMesh",{rotateX:Math.PI/2,position:[0,0,t.height*1.25],"scale-y":.5},[T("TresConeGeometry",{args:[15,t.height,4,1,!0]},null,8,ro),T("TresMeshLambertMaterial",{map:s,transparent:!0,depthTest:t.occlusion,side:A.DoubleSide,color:t.color,depthWrite:!0},null,8,ao)],8,to),T("TresMesh",{rotateX:-Math.PI/2,position:[0,0,t.height/2]},[T("TresConeGeometry",{args:[15,t.height,4,1,!0]},null,8,io),T("TresMeshLambertMaterial",{map:s,transparent:!0,depthTest:t.occlusion,side:A.DoubleSide,color:t.color,depthWrite:!0},null,8,lo)],8,no)]),_:1})],8,oo))}}),{withAsyncContext:L,defineComponent:co}=await o("vue"),{unref:X,createElementVNode:M,openBlock:uo,createElementBlock:fo}=await o("vue"),po=["rotateX"],ho=["object"],mo=["args"],vo=["color","depthTest","map"],{ref:_o,watch:go}=await o("vue"),yo=await o("three"),Oo=co({__name:"coneAnchorMeshB",props:{anchorColor:{default:"#b0ffff"},rotateSpeed:{default:.05},depthTest:{type:Boolean,default:!0},floorSize:{default:12},floorColor:{default:"#b0ffff"},floorSpeed:{default:.6}},async setup(h){let e,r;const a=h,{scene:t}=([e,r]=L(()=>Q("./plugins/digitalCity/model/coneAnchorB.glb")),e=await e,r(),e),d=t?.clone(),s=d.children[0].material.clone();s.color.set(a.anchorColor),s.metalness=0,s.roughness=.5,s.transparent=!0,s.opacity=1,s.depthTest=a.depthTest,d.children[0].renderOrder=0,d.children[0].material=s;const i=([e,r]=L(()=>Y("./plugins/digitalCity/image/waveCircle.png")),e=await e,r(),e),{width:u,height:v}=i.image;i.wrapS=i.wrapT=yo.RepeatWrapping,i.repeat.set(1/(u/v),1),go(()=>[a.anchorColor,a.depthTest],([l,_])=>{s.color.set(l),s.depthTest=_});const c=_o(null),{onRender:p}=b();let n=0;return p(()=>{c.value?.children[0].rotateZ(a.rotateSpeed),i&&(n+=a.floorSpeed,i.offset.x=Math.floor(n)/(i.image.width/i.image.height))}),(l,_)=>(uo(),fo("TresGroup",null,[M("TresGroup",{rotateX:-Math.PI/2,ref_key:"coneGroup",ref:c},[M("primitive",{object:X(d)},null,8,ho),M("TresMesh",null,[M("TresCircleGeometry",{args:[l.floorSize,32]},null,8,mo),M("TresMeshStandardMaterial",{color:l.floorColor,metalness:0,roughness:.6,transparent:"",opacity:.8,depthTest:a.depthTest,depthWrite:!1,map:X(i)},null,8,vo)])],8,po)]))}});export{jo as _sfc_main,Oo as _sfc_main$1,Eo as _sfc_main$2,Bo as _sfc_main$3,qo as _sfc_main$4,Xo as _sfc_main$5,Io as _sfc_main$6};
