import{importShared as o}from"./3d-tiles-renderer.DeLENXj81776915551521.js";import{useTexture as v,useLoop as h,customShaderMaterial_default as g}from"./index.Bp1TXbF61776915551521.js";const{defineComponent:_}=await o("vue"),{unref:y,mergeProps:w,createElementVNode:x,openBlock:C,createElementBlock:M}=await o("vue"),E=["map"],{reactive:S,shallowRef:T,watchEffect:k}=await o("vue"),K=_({__name:"buildingsMarkA",props:{color:{default:"#fff"},img:{},offset:{default:[.344,.394]},foremost:{type:Boolean,default:!0},sizeAttenuation:{type:Boolean,default:!1}},setup(c){const e=c,{state:a}=v(e.img),l=S({color:e.color,transparent:!0,depthWrite:!1,sizeAttenuation:e.sizeAttenuation,toneMapped:!1,depthTest:!e.foremost}),t=T(null);return k(()=>{t.value&&(t.value.geometry=t.value.geometry.clone(),t.value.geometry.translate(e.offset[0],e.offset[1],0))}),(r,n)=>(C(),M("TresSprite",{ref_key:"tsRef",ref:t,scale:.1,renderOrder:"99999"},[x("TresSpriteMaterial",w(l,{map:y(a)}),null,16,E)],512))}}),{defineComponent:$}=await o("vue"),{createElementVNode:B,unref:R,createVNode:A,openBlock:F,createElementBlock:P}=await o("vue"),V=["args"],{nextTick:W,ref:O,watch:p,watchEffect:z}=await o("vue"),i=await o("three"),Q=$({__name:"radraA",props:{size:{default:300},radius:{default:240},color:{default:"#ffff00"},opacity:{default:.9},speed:{default:1},followWidth:{default:220}},setup(c){const e=c,{onBeforeRender:a}=h(),l={value:0},t=O();a(()=>{l.value+=.02*e.speed});const r={vertexShader:`
	varying vec3 vPosition;
	void main() {
		vPosition = position;
  }
  `,fragmentShader:`
	uniform float uRadius;     
  uniform float uTime;      
  uniform float uFollowWidth; 
  varying vec3 vPosition;
	uniform float uOpacity;
	uniform vec3 ncolor;
  float calcAngle(vec3 oFrag){
    float fragAngle;
    const vec3 ox = vec3(1,0,0);
    float dianji = oFrag.x * ox.x + oFrag.z*ox.z;
    float oFrag_length = length(oFrag); // length是内置函数
    float ox_length = length(ox); // length是内置函数
    float yuxian = dianji / (oFrag_length * ox_length);
    fragAngle = acos(yuxian);
    fragAngle = degrees(fragAngle);
    if(oFrag.z > 0.0) {
      fragAngle = -fragAngle + 360.0;
    }
    float scanAngle = uTime * 100.0 - floor(uTime * 100.0 / 360.0) * 360.0;
    float angle = scanAngle - fragAngle;
    if(angle < 0.0){
      angle = angle + 360.0;
    }
    return angle;
  }
  void main() {
		vec4 radarColor;
			// length内置函数，取向量的长度
		if(length(vPosition) == 0.0 || length(vPosition) > uRadius-2.0){
			radarColor = vec4( ncolor, uOpacity );
		} else {
			float angle = calcAngle(vPosition);
			if(angle < uFollowWidth){
				// 尾焰区域
				float opacity =  1.0 - angle / uFollowWidth; 
				radarColor = vec4( ncolor, uOpacity * opacity );
			} else {
				// 其他位置的像素均为透明
				radarColor = vec4( ncolor, 0.0 );
			}
		}
		csm_DiffuseColor = radarColor;
		csm_FragColor = radarColor;
	}
  `,uniforms:{uRadius:{value:e.radius},uTime:l,uFollowWidth:{value:e.followWidth},ncolor:{value:new i.Color(e.color)},uOpacity:{value:e.opacity}}};return p(t,(n,u)=>{n&&u===void 0&&t.value.applyMatrix4(new i.Matrix4().makeRotationX(-Math.PI/2))}),p(()=>e.size,()=>{W(()=>{t.value.applyMatrix4(new i.Matrix4().makeRotationX(Math.PI/2))})}),z(()=>{e.color&&(r.uniforms.ncolor.value=new i.Color(e.color)),e.opacity&&(r.uniforms.uOpacity.value=e.opacity),e.radius&&(r.uniforms.uRadius.value=e.radius),e.followWidth&&(r.uniforms.uFollowWidth.value=e.followWidth)}),(n,u)=>(F(),P("TresMesh",null,[B("TresCircleGeometry",{ref_key:"TresCircleGeometryRef",ref:t,args:[e.size,64]},null,8,V),A(R(g),{baseMaterial:i.MeshBasicMaterial,vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,uniforms:r.uniforms,side:i.DoubleSide,depthWrite:!1,depthTest:!0,toneMapped:!1,transparent:"",silent:""},null,8,["baseMaterial","vertexShader","fragmentShader","uniforms","side"])]))}}),{defineComponent:N}=await o("vue"),{createElementVNode:b,unref:H,createVNode:D,openBlock:G,createElementBlock:Y}=await o("vue"),j=["args"],{ref:m,watchEffect:I}=await o("vue"),s=await o("three"),L=`
    uniform float uScale;
    varying float vY;

    void main() {
      vec3 p = position;
      p.xz *= uScale;
      vY = position.y;
      csm_Position = p;
    }
  `,X=`
    uniform vec3 uColor;
    uniform float uOpacity;
    uniform float uHeight;
    varying float vY;

    void main() {
      float alpha = (1.0 - vY / uHeight) * uOpacity;
      csm_DiffuseColor = vec4(uColor, alpha);
    }
  `,U=N({__name:"radraB",props:{radius:{default:1},maxRadius:{default:20},color:{default:"#ffff00"},opacity:{default:1},speed:{default:.3},height:{default:100}},setup(c,{expose:e}){const a=c,l=m(),t={uColor:{value:new s.Color(a.color)},uOpacity:{value:a.opacity},uHeight:{value:a.height},uScale:{value:1}};I(()=>{t.uColor.value.set(a.color),t.uOpacity.value=a.opacity,t.uHeight.value=a.height});const{onBeforeRender:r}=h();let n=0;r(()=>{n+=.02*a.speed;const f=n%1,d=a.radius+f*(a.maxRadius-a.radius);t.uScale.value=d/a.radius});const u=m(new s.LineCurve3(new s.Vector3(0,0,0),new s.Vector3(0,10,0)));return e({MeshRef:l}),(f,d)=>(G(),Y("TresMesh",{ref_key:"MeshRef",ref:l,renderOrder:2e3},[b("TresTubeGeometry",{args:[u.value,20,a.radius,64,!1]},null,8,j),D(H(g),{baseMaterial:s.MeshBasicMaterial,vertexShader:L,fragmentShader:X,uniforms:t,side:s.DoubleSide,depthWrite:!1,depthTest:!0,toneMapped:!1,transparent:"",silent:""},null,8,["baseMaterial","side"])],512))}});export{K as _sfc_main,Q as _sfc_main$1,U as _sfc_main$2};
