import{importShared as r}from"./3d-tiles-renderer.DZNovkLO1767148983502.js";import{no as y,_l as _}from"./index.DTe2qqjO1767148983502.js";const{defineComponent:x}=await r("vue"),{unref:P,mergeProps:C,createElementVNode:k,openBlock:$,createElementBlock:M}=await r("vue"),R=["map"],{reactive:T,shallowRef:B,watchEffect:E}=await r("vue"),ee=x({__name:"buildingsMarkA",props:{color:{default:"#fff"},img:{},offset:{default:[.344,.394]},foremost:{type:Boolean,default:!0},sizeAttenuation:{type:Boolean,default:!1}},setup(l){const e=l,{state:o}=y(e.img),n=T({color:e.color,transparent:!0,depthWrite:!1,sizeAttenuation:e.sizeAttenuation,toneMapped:!1,depthTest:!e.foremost}),t=B(null);return E(()=>{t.value&&(t.value.geometry=t.value.geometry.clone(),t.value.geometry.translate(e.offset[0],e.offset[1],0))}),(a,i)=>($(),M("TresSprite",{ref_key:"tsRef",ref:t,scale:.1,renderOrder:"99999"},[k("TresSpriteMaterial",C(n,{map:P(o)}),null,16,R)],512))}}),{defineComponent:A}=await r("vue"),{createElementVNode:d,unref:F,mergeProps:S,openBlock:z,createElementBlock:W}=await r("vue"),O=["args"],V=["side"],{nextTick:b,ref:j,watch:p,watchEffect:N}=await r("vue"),{Matrix4:m,DoubleSide:D,Color:g}=await r("three"),oe=A({__name:"radraA",props:{size:{default:300},radius:{default:240},color:{default:"#ffff00"},opacity:{default:.9},speed:{default:1},followWidth:{default:220}},setup(l){const e=l,{onBeforeRender:o}=_(),n={value:0},t=j();o(()=>{n.value+=.02*e.speed});const a={transparent:!0,depthWrite:!1,depthTest:!0,vertexShader:`
	varying vec3 vPosition;
	void main() {
		vPosition = position;
		vec4 modelPosition = modelMatrix * vec4(position, 1.0);
		vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectionPosition = projectionMatrix * viewPosition;
    gl_Position = projectionPosition;
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
			// length内置函数，取向量的长度
		if(length(vPosition) == 0.0 || length(vPosition) > uRadius-2.0){
			gl_FragColor = vec4( ncolor, uOpacity );
		} else {
			float angle = calcAngle(vPosition);
			if(angle < uFollowWidth){
				// 尾焰区域
				float opacity =  1.0 - angle / uFollowWidth; 
				gl_FragColor = vec4( ncolor, uOpacity * opacity );  
			} else {
				// 其他位置的像素均为透明
				gl_FragColor = vec4( ncolor, 0.0 ); 
			}
		}
	}
  `,uniforms:{uRadius:{value:e.radius},uTime:n,uFollowWidth:{value:e.followWidth},ncolor:{value:new g(e.color)},uOpacity:{value:e.opacity}}};return p(t,(i,s)=>{i&&s===void 0&&t.value.applyMatrix4(new m().makeRotationX(-Math.PI/2))}),p(()=>e.size,()=>{b(()=>{t.value.applyMatrix4(new m().makeRotationX(Math.PI/2))})}),N(()=>{e.color&&(a.uniforms.ncolor.value=new g(e.color)),e.opacity&&(a.uniforms.uOpacity.value=e.opacity),e.radius&&(a.uniforms.uRadius.value=e.radius),e.followWidth&&(a.uniforms.uFollowWidth.value=e.followWidth)}),(i,s)=>(z(),W("TresMesh",null,[d("TresCircleGeometry",{ref_key:"TresCircleGeometryRef",ref:t,args:[e.size,64]},null,8,O),d("TresShaderMaterial",S(a,{side:F(D)}),null,16,V)]))}}),{defineComponent:G}=await r("vue"),{createElementVNode:v,normalizeProps:H,guardReactiveProps:Y,openBlock:I,createElementBlock:X}=await r("vue"),L=["args"],{ref:c,watchEffect:q}=await r("vue"),{DoubleSide:J,Color:K,LineCurve3:Q,Vector3:h}=await r("three"),te=G({__name:"radraB",props:{radius:{default:1},maxRadius:{default:20},color:{default:"#ffff00"},opacity:{default:1},speed:{default:.3},height:{default:100}},setup(l,{expose:e}){const o=l,n=c(),t=c(1),a={transparent:!0,depthWrite:!1,side:J,uniforms:{uColor:{value:new K(o.color)},uOpacity:{value:o.opacity},uHeight:{value:o.height},uScale:t},vertexShader:`
    uniform float uScale;
    varying float vY;

    void main() {
      vec3 p = position;
      p.xz *= uScale;
      vY = position.y;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
    }
  `,fragmentShader:`
    uniform vec3 uColor;
    uniform float uOpacity;
    uniform float uHeight;
    varying float vY;

    void main() {
      float alpha = (1.0 - vY / uHeight) * uOpacity;
      gl_FragColor = vec4(uColor, alpha);
    }
  `};q(()=>{a.uniforms.uColor.value.set(o.color),a.uniforms.uOpacity.value=o.opacity,a.uniforms.uHeight.value=o.height});const{onBeforeRender:i}=_();let s=0;i(()=>{s+=.02*o.speed;const u=s%1,f=o.radius+u*(o.maxRadius-o.radius);t.value=f/o.radius});const w=c(new Q(new h(0,0,0),new h(0,10,0)));return e({MeshRef:n}),(u,f)=>(I(),X("TresMesh",{ref_key:"MeshRef",ref:n,renderOrder:2e3},[v("TresTubeGeometry",{args:[w.value,20,o.radius,64,!1]},null,8,L),v("TresShaderMaterial",H(Y(a)),null,16)],512))}});export{ee as _sfc_main,oe as _sfc_main$1,te as _sfc_main$2};
