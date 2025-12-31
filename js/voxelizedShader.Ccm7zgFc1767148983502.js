import{importShared as v}from"./3d-tiles-renderer.DZNovkLO1767148983502.js";import{_l as T,Fs as k,Kk as I}from"./index.DTe2qqjO1767148983502.js";import"./reflectorDiffuse.vue_vue_type_script_setup_true_lang.Cxj_Ip691767148983502.js";import{_sfc_main as $}from"./reflectorDUDV.vue_vue_type_script_setup_true_lang.DYMkkQ781767148983502.js";import"./reflectorShaderMesh.vue_vue_type_script_setup_true_lang.T7UkXoyg1767148983502.js";import"./dynamicRotatingBase.vue_vue_type_script_setup_true_lang.BVQWYa0i1767148983502.js";import"./whiteFloorMesh.vue_vue_type_script_setup_true_lang.BCd7Uxt-1767148983502.js";import"./gridPlusCom.vue_vue_type_script_setup_true_lang.x_N2tft71767148983502.js";import"./videoFloor.vue_vue_type_script_setup_true_lang.Xg1Eqw4f1767148983502.js";import"./digitalGround.vue_vue_type_script_setup_true_lang.DBVFezcY1767148983502.js";import"./imgFloor.vue_vue_type_script_setup_true_lang.BPVumalx1767148983502.js";import"./reflectorRoundedBox.vue_vue_type_script_setup_true_lang.BOdU7iQo1767148983502.js";import"./particleBase.vue_vue_type_script_setup_true_lang.CIf_5jma1767148983502.js";import"./rippleFloor.vue_vue_type_script_setup_true_lang.BmWDhTNl1767148983502.js";import{Pane as N}from"./tweakpane.BQRZXf8M1767148983502.js";import"./customShaderMaterial.vue_vue_type_script_setup_true_lang.B7dQ_CiZ1767148983502.js";import"./index.vue_vue_type_script_setup_true_lang.CjsHShHS1767148983502.js";import{useGLTF as E}from"./index.Bk2zy1aS1767148983502.js";var A=`uniform float time;
varying vec3 vNormal;
uniform float triScale;
uniform float progress;
uniform float mosaic;
attribute vec3 center;
vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}
vec4 fade(vec4 t) {return t*t*t*(t*(t*6.0-15.0)+10.0);}

float cnoise(vec4 P){
  vec4 Pi0 = floor(P); 
  vec4 Pi1 = Pi0 + 1.0; 
  Pi0 = mod(Pi0, 289.0);
  Pi1 = mod(Pi1, 289.0);
  vec4 Pf0 = fract(P); 
  vec4 Pf1 = Pf0 - 1.0; 
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
  vec4 iy = vec4(Pi0.yy, Pi1.yy);
  vec4 iz0 = vec4(Pi0.zzzz);
  vec4 iz1 = vec4(Pi1.zzzz);
  vec4 iw0 = vec4(Pi0.wwww);
  vec4 iw1 = vec4(Pi1.wwww);

  vec4 ixy = permute(permute(ix) + iy);
  vec4 ixy0 = permute(ixy + iz0);
  vec4 ixy1 = permute(ixy + iz1);
  vec4 ixy00 = permute(ixy0 + iw0);
  vec4 ixy01 = permute(ixy0 + iw1);
  vec4 ixy10 = permute(ixy1 + iw0);
  vec4 ixy11 = permute(ixy1 + iw1);

vec4 gx00 = ixy00 / 7.0;
  vec4 gy00 = floor(gx00) / 7.0;
  vec4 gz00 = floor(gy00) / 6.0;
  gx00 = fract(gx00) - 0.5;
  gy00 = fract(gy00) - 0.5;
  gz00 = fract(gz00) - 0.5;
  vec4 gw00 = vec4(0.75) - abs(gx00) - abs(gy00) - abs(gz00);
  vec4 sw00 = step(gw00, vec4(0.0));
  gx00 -= sw00 * (step(0.0, gx00) - 0.5);
  gy00 -= sw00 * (step(0.0, gy00) - 0.5);

  vec4 gx01 = ixy01 / 7.0;
  vec4 gy01 = floor(gx01) / 7.0;
  vec4 gz01 = floor(gy01) / 6.0;
  gx01 = fract(gx01) - 0.5;
  gy01 = fract(gy01) - 0.5;
  gz01 = fract(gz01) - 0.5;
  vec4 gw01 = vec4(0.75) - abs(gx01) - abs(gy01) - abs(gz01);
  vec4 sw01 = step(gw01, vec4(0.0));
  gx01 -= sw01 * (step(0.0, gx01) - 0.5);
  gy01 -= sw01 * (step(0.0, gy01) - 0.5);

  vec4 gx10 = ixy10 / 7.0;
  vec4 gy10 = floor(gx10) / 7.0;
  vec4 gz10 = floor(gy10) / 6.0;
  gx10 = fract(gx10) - 0.5;
  gy10 = fract(gy10) - 0.5;
  gz10 = fract(gz10) - 0.5;
  vec4 gw10 = vec4(0.75) - abs(gx10) - abs(gy10) - abs(gz10);
  vec4 sw10 = step(gw10, vec4(0.0));
  gx10 -= sw10 * (step(0.0, gx10) - 0.5);
  gy10 -= sw10 * (step(0.0, gy10) - 0.5);

vec4 gx11 = ixy11 / 7.0;
  vec4 gy11 = floor(gx11) / 7.0;
  vec4 gz11 = floor(gy11) / 6.0;
  gx11 = fract(gx11) - 0.5;
  gy11 = fract(gy11) - 0.5;
  gz11 = fract(gz11) - 0.5;
  vec4 gw11 = vec4(0.75) - abs(gx11) - abs(gy11) - abs(gz11);
  vec4 sw11 = step(gw11, vec4(0.0));
  gx11 -= sw11 * (step(0.0, gx11) - 0.5);
  gy11 -= sw11 * (step(0.0, gy11) - 0.5);

  vec4 g0000 = vec4(gx00.x,gy00.x,gz00.x,gw00.x);
  vec4 g1000 = vec4(gx00.y,gy00.y,gz00.y,gw00.y);
  vec4 g0100 = vec4(gx00.z,gy00.z,gz00.z,gw00.z);
  vec4 g1100 = vec4(gx00.w,gy00.w,gz00.w,gw00.w);
  vec4 g0010 = vec4(gx10.x,gy10.x,gz10.x,gw10.x);
  vec4 g1010 = vec4(gx10.y,gy10.y,gz10.y,gw10.y);
  vec4 g0110 = vec4(gx10.z,gy10.z,gz10.z,gw10.z);
  vec4 g1110 = vec4(gx10.w,gy10.w,gz10.w,gw10.w);
  vec4 g0001 = vec4(gx01.x,gy01.x,gz01.x,gw01.x);
  vec4 g1001 = vec4(gx01.y,gy01.y,gz01.y,gw01.y);
  vec4 g0101 = vec4(gx01.z,gy01.z,gz01.z,gw01.z);
  vec4 g1101 = vec4(gx01.w,gy01.w,gz01.w,gw01.w);
  vec4 g0011 = vec4(gx11.x,gy11.x,gz11.x,gw11.x);
  vec4 g1011 = vec4(gx11.y,gy11.y,gz11.y,gw11.y);
  vec4 g0111 = vec4(gx11.z,gy11.z,gz11.z,gw11.z);
  vec4 g1111 = vec4(gx11.w,gy11.w,gz11.w,gw11.w);

  vec4 norm00 = taylorInvSqrt(vec4(dot(g0000, g0000), dot(g0100, g0100), dot(g1000, g1000), dot(g1100, g1100)));
  g0000 *= norm00.x;
  g0100 *= norm00.y;
  g1000 *= norm00.z;
  g1100 *= norm00.w;

  vec4 norm01 = taylorInvSqrt(vec4(dot(g0001, g0001), dot(g0101, g0101), dot(g1001, g1001), dot(g1101, g1101)));
  g0001 *= norm01.x;
  g0101 *= norm01.y;
  g1001 *= norm01.z;
  g1101 *= norm01.w;
  vec4 norm10 = taylorInvSqrt(vec4(dot(g0010, g0010), dot(g0110, g0110), dot(g1010, g1010), dot(g1110, g1110)));
  g0010 *= norm10.x;
  g0110 *= norm10.y;
  g1010 *= norm10.z;
  g1110 *= norm10.w;

  vec4 norm11 = taylorInvSqrt(vec4(dot(g0011, g0011), dot(g0111, g0111), dot(g1011, g1011), dot(g1111, g1111)));
  g0011 *= norm11.x;
  g0111 *= norm11.y;
  g1011 *= norm11.z;
  g1111 *= norm11.w;

  float n0000 = dot(g0000, Pf0);
  float n1000 = dot(g1000, vec4(Pf1.x, Pf0.yzw));
  float n0100 = dot(g0100, vec4(Pf0.x, Pf1.y, Pf0.zw));
  float n1100 = dot(g1100, vec4(Pf1.xy, Pf0.zw));
  float n0010 = dot(g0010, vec4(Pf0.xy, Pf1.z, Pf0.w));
  float n1010 = dot(g1010, vec4(Pf1.x, Pf0.y, Pf1.z, Pf0.w));
  float n0110 = dot(g0110, vec4(Pf0.x, Pf1.yz, Pf0.w));
  float n1110 = dot(g1110, vec4(Pf1.xyz, Pf0.w));
  float n0001 = dot(g0001, vec4(Pf0.xyz, Pf1.w));
  float n1001 = dot(g1001, vec4(Pf1.x, Pf0.yz, Pf1.w));
  float n0101 = dot(g0101, vec4(Pf0.x, Pf1.y, Pf0.z, Pf1.w));
  float n1101 = dot(g1101, vec4(Pf1.xy, Pf0.z, Pf1.w));
  float n0011 = dot(g0011, vec4(Pf0.xy, Pf1.zw));
  float n1011 = dot(g1011, vec4(Pf1.x, Pf0.y, Pf1.zw));
  float n0111 = dot(g0111, vec4(Pf0.x, Pf1.yzw));
  float n1111 = dot(g1111, Pf1);

  vec4 fade_xyzw = fade(Pf0);
  vec4 n_0w = mix(vec4(n0000, n1000, n0100, n1100), vec4(n0001, n1001, n0101, n1101), fade_xyzw.w);
  vec4 n_1w = mix(vec4(n0010, n1010, n0110, n1110), vec4(n0011, n1011, n0111, n1111), fade_xyzw.w);
  vec4 n_zw = mix(n_0w, n_1w, fade_xyzw.z);
  vec2 n_yzw = mix(n_zw.xy, n_zw.zw, fade_xyzw.y);
  float n_xyzw = mix(n_yzw.x, n_yzw.y, fade_xyzw.x);
  return 2.2 * n_xyzw;
}

mat4 rotationMatrix(vec3 axis, float angle) {
    axis = normalize(axis);
    float s = sin(angle);
    float c = cos(angle);
    float oc = 1.0 - c;
    
    return mat4(oc * axis.x * axis.x + c,           oc * axis.x * axis.y - axis.z * s,  oc * axis.z * axis.x + axis.y * s,  0.0,
                oc * axis.x * axis.y + axis.z * s,  oc * axis.y * axis.y + c,           oc * axis.y * axis.z - axis.x * s,  0.0,
                oc * axis.z * axis.x - axis.y * s,  oc * axis.y * axis.z + axis.x * s,  oc * axis.z * axis.z + c,           0.0,
                0.0,                                0.0,                                0.0,                                1.0);
}

vec3 rotate(vec3 v, vec3 axis, float angle) {
	mat4 m = rotationMatrix(axis, angle);
	return (m * vec4(v, 1.0)).xyz;
}
float PI = 3.141592653589793238;

float backout(float progress, float swing)
	{
		float p = progress - 1.;
		return (p * p * ((swing + 1.) * p + swing) + 1.);
	}

void main(){
  vNormal = normal;

  vec3 pos = position;

  float transformStart = -(position.y*0.1+0.5 )*4.;
  float transformProgress = backout(clamp(progress*10. + transformStart, 0., 1.), 10.);

  
  pos = (pos - center) * triScale + center;

  
  vec3 posPixelated = floor(pos * mosaic +0.5) / mosaic;
  pos = mix(pos, posPixelated, transformProgress);

  float noise = cnoise(vec4(pos, time*0.4)*0.1);

  float rotation = noise * PI * 0.1;
  pos = rotate(pos, vec3(1.,0.,0.), rotation);
  pos = rotate(pos, vec3(0.,1.,0.), rotation);
  pos = rotate(pos, vec3(0.,1.,1.), rotation);

  float scale = 1.0 + noise*0.05;
  pos *= scale;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}`,G=`varying vec3 vNormal;
void main(){
    gl_FragColor = vec4(vNormal, 1.0);
     
     #include <colorspace_fragment>
}`;const{withAsyncContext:U,defineComponent:F}=await v("vue"),{unref:L,openBlock:V,createElementBlock:q}=await v("vue"),D=["object"],{watch:j,toRaw:H}=await v("vue"),w=await v("three"),W=F({__name:"model",props:{mosaic:{default:2.31},progress:{default:.31},triScale:{default:1}},async setup(u){let a,l;const e=u,o=new w.ShaderMaterial({side:w.DoubleSide,uniforms:{time:{value:0},mosaic:{value:e.mosaic},progress:{value:e.progress},triScale:{value:e.triScale}},vertexShader:A,fragmentShader:G}),{scene:r}=([a,l]=U(()=>E("./plugins/visualArts/model/LeePerrySmith.glb")),a=await a,l(),a);r.traverse(n=>{n.isMesh&&(n.material=o)}),r.children[0].geometry=r.children[0].geometry.toNonIndexed(),r.children[0].geometry.center();let t=r.children[0].geometry.attributes.position.array,s=[];for(let n=0;n<t.length;n+=9){let g=(t[n]+t[n+3]+t[n+6])/3,i=(t[n+1]+t[n+4]+t[n+7])/3,x=(t[n+2]+t[n+5]+t[n+8])/3;s.push(g,i,x),s.push(g,i,x),s.push(g,i,x)}r.children[0].geometry.setAttribute("center",new w.BufferAttribute(new Float32Array(s),3));const{onBeforeRender:f}=T();return f(({})=>{o.uniforms.time.value+=.05}),j(()=>[e.mosaic,e.progress,e.triScale],([n,g,i])=>{o.uniforms.mosaic.value=n,o.uniforms.progress.value=g,o.uniforms.triScale.value=i}),(n,g)=>(V(),q("primitive",{object:H(L(r))},null,8,D))}}),{defineComponent:Q}=await v("vue"),{watch:K}=await v("vue"),c=await v("three"),O=Q({__name:"postProcessing",props:{use:{default:!0},start:{default:0},translate:{default:0}},setup(u){const a=u,{camera:l,renderer:e,scene:o,sizes:r}=k(),t=new c.WebGLRenderTarget(r.width.value,r.height.value);let s=new c.WebGLRenderTarget(r.width.value,r.height.value),f=new c.WebGLRenderTarget(r.width.value,r.height.value);const n=new c.OrthographicCamera(-1,1,1,-1,0,1);n.position.z=1;const g=new c.Scene,i=new c.Mesh(new c.PlaneGeometry(2,2),new c.ShaderMaterial({uniforms:{current:{value:null},prev:{value:null},start:{value:a.start},time:{value:0},translate:{value:a.translate}},vertexShader:`
        varying vec2 vUv;
        void main(){
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
            `,fragmentShader:`
        uniform sampler2D current;
        uniform sampler2D prev;
        uniform float start;
        uniform float time;
        uniform float translate;
        varying vec2 vUv;
        void main(){
            float PI = 3.14159265359;
            vec2 uv = vUv;
            uv -= vec2(0.5);
            uv *= vec2(2., 1.);
            uv.y += translate;
            uv /= 4.;
            
            uv.x += sin(uv.y * PI * 4. + time*0.3)*0.15;
            uv.x += sin(uv.y * PI * 16. + time*0.5)*0.15;

            uv += vec2(0.5);

            uv = mix(vUv,uv, start);

            vec4 currentColor = texture2D(current, uv);
            vec4 prevColor = texture2D(prev,vUv);

            vec4 color = vec4(mix( prevColor.rgb, currentColor.rgb, 0.05), 1.0);
            gl_FragColor = color;
            //gl_FragColor = vec4(vUv, 0.0, 1.0);
    }`}));g.add(i);const x=new c.Scene,d=new c.Mesh(new c.PlaneGeometry(2,2),new c.MeshBasicMaterial({color:16777215,map:null}));x.add(d);const{onBeforeRender:R,onRender:M}=T();return R(({elapsed:m})=>{i.material.uniforms.time.value=m}),M(()=>{if(a.use){e.setRenderTarget(t),e.render(o.value,l.value),i.material.uniforms.current.value=t.texture,i.material.uniforms.prev.value=s.texture,e.setRenderTarget(f),e.render(g,n),d.material.map=s.texture,e.setRenderTarget(null),e.render(x,n);const m=s;s=f,f=m,e.render(g,n)}else e.render(o.value,l.value)}),K(()=>[a.start,a.translate],([m,p])=>{i.material.uniforms.start.value=m,i.material.uniforms.translate.value=p}),(m,p)=>null}}),{defineComponent:X}=await v("vue"),{createElementVNode:z,unref:P,createVNode:y,mergeProps:_,Suspense:Y,withCtx:h,openBlock:b,createBlock:S,normalizeProps:C,guardReactiveProps:B,resolveComponent:Z}=await v("vue"),{reactive:J}=await v("vue"),de=X({__name:"voxelizedShader",setup(u){const a={clearColor:"#050505",antialias:!1},l={reflectivity:.8,showGridHelper:!1,scale:6},e=J({mosaic:2.31,progress:.31,triScale:1,use:!0,start:0,translate:0}),o=new N({title:"参数"});return o.addBinding(e,"progress",{label:"进度",min:0,max:.5,step:.01}),o.addBinding(e,"mosaic",{label:"像素化",min:0,max:10,step:.01}),o.addBinding(e,"triScale",{label:"三角片大小",min:0,max:1,step:.01}),o.addBinding(e,"use",{label:"开启延迟"}),o.addBinding(e,"start",{label:"曲折度",min:0,max:1,step:.01}),o.addBinding(e,"translate",{label:"偏移量",min:0,max:1,step:.01}),(r,t)=>{const s=Z("TresCanvas");return b(),S(s,_(a,{"window-size":""}),{default:h(()=>[t[0]||(t[0]=z("TresPerspectiveCamera",{position:[0,0,30],fov:45,near:.1,far:1e3},null,-1)),y(P(I)),t[1]||(t[1]=z("TresAmbientLight",{intensity:.5},null,-1)),(b(),S(Y,null,{default:h(()=>[y(W,_({position:[0,4,0]},e),null,16)]),_:1})),y(P($),C(B(l)),null,16),y(O,C(B(e)),null,16)]),_:1},16)}}});export{de as default};
