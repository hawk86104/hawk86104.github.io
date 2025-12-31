import{importShared as p}from"./3d-tiles-renderer.DZNovkLO1767148983502.js";import{Fs as T,_l as D}from"./index.DTe2qqjO1767148983502.js";import{ShaderPass as _,RenderPass as S,EffectComposer as E}from"./RenderPass.DewL5X8q1767148983502.js";import{OutputPass as P}from"./OutputPass.BSCzWj0O1767148983502.js";import{UnrealBloomPass as U}from"./UnrealBloomPass.Ct_StmlH1767148983502.js";const{ClampToEdgeWrapping:g,Data3DTexture:L,FileLoader:N,LinearFilter:y,Loader:M,UnsignedByteType:x,Vector3:b}=await p("three");class z extends M{constructor(t){super(t),this.type=x}setType(t){return this.type=t,this}load(t,a,f,r){const s=new N(this.manager);s.setPath(this.path),s.setResponseType("text"),s.load(t,n=>{try{a(this.parse(n))}catch(e){r?r(e):console.error(e),this.manager.itemError(t)}},f,r)}parse(t){const a=/TITLE +"([^"]*)"/,f=/LUT_3D_SIZE +(\d+)/,r=/DOMAIN_MIN +([\d.]+) +([\d.]+) +([\d.]+)/,s=/DOMAIN_MAX +([\d.]+) +([\d.]+) +([\d.]+)/,n=/^([\d.e+-]+) +([\d.e+-]+) +([\d.e+-]+) *$/gm;let e=a.exec(t);const v=e!==null?e[1]:null;if(e=f.exec(t),e===null)throw new Error("LUTCubeLoader: Missing LUT_3D_SIZE information");const o=Number(e[1]),u=o**3*4,l=this.type===x?new Uint8Array(u):new Float32Array(u),m=new b(0,0,0),c=new b(1,1,1);if(e=r.exec(t),e!==null&&m.set(Number(e[1]),Number(e[2]),Number(e[3])),e=s.exec(t),e!==null&&c.set(Number(e[1]),Number(e[2]),Number(e[3])),m.x>c.x||m.y>c.y||m.z>c.z)throw new Error("LUTCubeLoader: Invalid input domain");const d=this.type===x?255:1;let h=0;for(;(e=n.exec(t))!==null;)l[h++]=Number(e[1])*d,l[h++]=Number(e[2])*d,l[h++]=Number(e[3])*d,l[h++]=d;const i=new L;return i.image.data=l,i.image.width=o,i.image.height=o,i.image.depth=o,i.type=this.type,i.magFilter=y,i.minFilter=y,i.wrapS=g,i.wrapT=g,i.wrapR=g,i.generateMipmaps=!1,i.needsUpdate=!0,{title:v,size:o,domainMin:m,domainMax:c,texture3D:i}}}const C={name:"LUTShader",uniforms:{lut:{value:null},lutSize:{value:0},tDiffuse:{value:null},intensity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}

	`,fragmentShader:`

		uniform float lutSize;
		uniform sampler3D lut;

		varying vec2 vUv;
		uniform float intensity;
		uniform sampler2D tDiffuse;
		void main() {

			vec4 val = texture2D( tDiffuse, vUv );
			vec4 lutVal;

			// pull the sample in by half a pixel so the sample begins
			// at the center of the edge pixels.
			float pixelWidth = 1.0 / lutSize;
			float halfPixelWidth = 0.5 / lutSize;
			vec3 uvw = vec3( halfPixelWidth ) + val.rgb * ( 1.0 - pixelWidth );


			lutVal = vec4( texture( lut, uvw ).rgb, val.a );

			gl_FragColor = vec4( mix( val, lutVal, intensity ) );

		}

	`};class F extends _{constructor(t={}){super(C),this.lut=t.lut||null,this.intensity="intensity"in t?t.intensity:1}set lut(t){const a=this.material;t!==this.lut&&(a.uniforms.lut.value=null,t&&(a.uniforms.lutSize.value=t.image.width,a.uniforms.lut.value=t))}get lut(){return this.material.uniforms.lut.value}set intensity(t){this.material.uniforms.intensity.value=t}get intensity(){return this.material.uniforms.intensity.value}}const{defineComponent:I}=await p("vue"),{watchEffect:V}=await p("vue"),A=await p("three"),j=I({__name:"lamboEffect",setup(w){const{camera:t,renderer:a,scene:f,sizes:r}=T(),s={threshold:.666,strength:.366,radius:.33};let n=null,e=null;const v=(u,l,m,c,d)=>{const h=new S(u,l),i=new U(new A.Vector2(c,d),s.strength,s.radius,s.threshold);n=new E(m),n.addPass(h),n.addPass(i),n.addPass(new P),e=new F({intensity:1}),n.addPass(e)};new z().load("https://opensource.cdn.icegl.cn/model/industry4/F-6800-STD.cube",function(u){e.lut=u.texture3D}),V(()=>{r.width.value&&v(f.value,t.value,a,r.width.value,r.height.value)});const{onRender:o}=D();return o(()=>{n&&n.render()}),(u,l)=>null}});export{j as _sfc_main};
