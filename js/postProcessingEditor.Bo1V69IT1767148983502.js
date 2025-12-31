import{importShared as m,mergeGeometries as H}from"./3d-tiles-renderer.DZNovkLO1767148983502.js";import{Fs as O,no as w,_l as W,_export_sfc as q,Kk as X}from"./index.DTe2qqjO1767148983502.js";import{Pane as j}from"./tweakpane.BQRZXf8M1767148983502.js";const $=`varying vec2 vUv;
uniform sampler2D tInput;

void main(){
	
	gl_FragColor=texture2D(tInput,vUv);
	
}`,s=await m("three"),K=function(v,e){const n=/uniform\s+([^\s]+)\s+([^\s]+)\s*;/gi,a=/uniform\s+([^\s]+)\s+([^\s]+)\s*\[\s*(\w+)\s*\]*\s*;/gi,t={sampler2D:{type:"t",value(){return new s.Texture}},samplerCube:{type:"t",value(){}},bool:{type:"b",value(){return 0}},int:{type:"i",value(){return 0}},float:{type:"f",value(){return 0}},vec2:{type:"v2",value(){return new s.Vector2}},vec3:{type:"v3",value(){return new s.Vector3}},vec4:{type:"v4",value(){return new s.Vector4}},bvec2:{type:"v2",value(){return new s.Vector2}},bvec3:{type:"v3",value(){return new s.Vector3}},bvec4:{type:"v4",value(){return new s.Vector4}},ivec2:{type:"v2",value(){return new s.Vector2}},ivec3:{type:"v3",value(){return new s.Vector3}},ivec4:{type:"v4",value(){return new s.Vector4}},mat2:{type:"v2",value(){return new s.Matrix2}},mat3:{type:"v3",value(){return new s.Matrix3}},mat4:{type:"v4",value(){return new s.Matrix4}}},o={float:{type:"fv",value(){return[]}},vec3:{type:"v3v",value(){return[]}}};let l;const p={resolution:{type:"v2",value:new s.Vector2(1,1),default:!0},time:{type:"f",value:Date.now(),default:!0},tInput:{type:"t",value:new s.Texture,default:!0}};let u,c;for(;(l=n.exec(e))!==null;)l.index===n.lastIndex&&n.lastIndex++,u=l[1],c=l[2],p[c]={type:t[u].type,value:t[u].value()};for(;(l=a.exec(e))!==null;)l.index===n.lastIndex&&n.lastIndex++,u=l[1],c=l[2],l[3],p[c]={type:o[u].type,value:o[u].value()};return new s.ShaderMaterial({uniforms:p,vertexShader:v,fragmentShader:e,depthWrite:!1,depthTest:!1,transparent:!0})};function N(v,e,n){if(typeof v!="object"||v===null)return v;const a=Array.isArray(v)?[]:{};for(const t in v)v.hasOwnProperty(t)&&(a[t]=N(v[t])),t==e&&(a[e]=n);return a}const r=await m("three");class J{constructor(e,n){this.width=1,this.height=1,this.settings=n||{},this.useRGBA=this.settings.useRGBA||!1,this.renderer=e,this.copyPass=this.CopyPass(this.settings),this.scene=new r.Scene,this.quad=new r.Mesh(new r.PlaneGeometry(1,1),new r.MeshBasicMaterial),this.scene.add(this.quad),this.camera=new r.OrthographicCamera(1,1,1,1,-1e4,1e4),this.front=new r.WebGLRenderTarget(1,1,{minFilter:this.settings.minFilter!==void 0?this.settings.minFilter:r.LinearFilter,magFilter:this.settings.magFilter!==void 0?this.settings.magFilter:r.LinearFilter,wrapS:this.settings.wrapS!==void 0?this.settings.wrapS:r.ClampToEdgeWrapping,wrapT:this.settings.wrapT!==void 0?this.settings.wrapT:r.ClampToEdgeWrapping,format:this.useRGBA?r.RGBAFormat:r.RGBFormat,type:this.settings.type!==void 0?this.settings.type:r.UnsignedByteType,stencilBuffer:this.settings.stencilBuffer!==void 0?this.settings.stencilBuffer:!0}),this.back=this.front.clone(),this.startTime=Date.now(),this.passes={},this.Stack={passItems:[],passes:[]}}addPass(e,n,a,t){this.loadShadervf(n);const o={shaderName:e,params:a,uuid:t,shader:this.shader};this.Stack.passItems.push(o)}removePass(e){for(let n=this.Stack.passItems.length-1;n>=0;n--)this.Stack.passItems[n].uuid===parseInt(e)&&this.Stack.passItems.splice(n,1);console.log(this.Stack.passItems)}CopyPass(){return this.Pass.call(this),this.loadShadervf($)}loadShadervf(e){const n="varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 ); }";return this.shader=K(n,e),this.shader}Pass(e){this.shader=null,this.params={}}Reset(){this.read=this.front,this.write=this.back}onWindowResize(e,n){const t=window.innerWidth,o=window.innerHeight;return e.setSize(1*t,1*o),n.projectionMatrix.makePerspective(70,t/o,n.near,n.far),this.setSize(t,o),this.getOfflineTexture(t,o,!0)}setSize(e,n){this.width=e,this.height=n,this.camera.projectionMatrix.makeOrthographic(e/-2,e/2,n/2,n/-2,this.camera.near,this.camera.far),this.quad.scale.set(e,n,1),this.front.setSize(e,n),this.back.setSize(e,n)}getOfflineTexture(e,n,a){return new r.WebGLRenderTarget(e,n,{minFilter:r.LinearFilter,magFilter:r.LinearFilter,format:a?r.RGBAFormat:r.RGBFormat})}render(e,n,a,t){this.renderer.setRenderTarget(this.write),this.renderer.render(e,n),t||this.swapBuffers()}swapBuffers(){const e=this.write;this.write=this.read,this.read=e}pass(){for(let e=0;e<this.Stack.passItems.length;e++){const n=this.Stack.passItems[e].shader,a=this.Stack.passItems[e].params;if(this.renderer.setRenderTarget(this.write),n instanceof r.ShaderMaterial){this.quad.material=n,this.quad.material.uniforms.tInput.value=this.read.texture,this.quad.material.uniforms.resolution.value.set(this.width,this.height),this.quad.material.uniforms.time.value=.001*(Date.now()-this.startTime);for(const t in a)this.quad.material.uniforms[t].value=a[t];this.renderer.render(this.scene,this.camera),this.swapBuffers()}}}toScreen(e,n){this.renderer.setRenderTarget(null),this.quad.material=this.copyPass,this.quad.material.uniforms.tInput.value=this.read.texture,this.quad.material.uniforms.resolution.value.set(this.width,this.height),this.renderer.render(this.scene,this.camera)}}var M=`varying vec2 vUv;
uniform sampler2D tInput;

void main() {

	gl_FragColor = texture2D( tInput, vUv );
	gl_FragColor.rgb = 1. - gl_FragColor.rgb;

}`,Q=`uniform sampler2D tInput;
uniform vec2 resolution;
varying vec2 vUv;

#define FXAA_REDUCE_MIN   (1.0/128.0)
#define FXAA_REDUCE_MUL   (1.0/8.0)
#define FXAA_SPAN_MAX     8.0

void main() {

    vec2 res = 1. / resolution;

    vec3 rgbNW = texture2D( tInput, ( vUv.xy + vec2( -1.0, -1.0 ) * res ) ).xyz;
    vec3 rgbNE = texture2D( tInput, ( vUv.xy + vec2( 1.0, -1.0 ) * res ) ).xyz;
    vec3 rgbSW = texture2D( tInput, ( vUv.xy + vec2( -1.0, 1.0 ) * res ) ).xyz;
    vec3 rgbSE = texture2D( tInput, ( vUv.xy + vec2( 1.0, 1.0 ) * res ) ).xyz;
    vec4 rgbaM  = texture2D( tInput,  vUv.xy  * res );
    vec3 rgbM  = rgbaM.xyz;
    vec3 luma = vec3( 0.299, 0.587, 0.114 );

    float lumaNW = dot( rgbNW, luma );
    float lumaNE = dot( rgbNE, luma );
    float lumaSW = dot( rgbSW, luma );
    float lumaSE = dot( rgbSE, luma );
    float lumaM  = dot( rgbM,  luma );
    float lumaMin = min( lumaM, min( min( lumaNW, lumaNE ), min( lumaSW, lumaSE ) ) );
    float lumaMax = max( lumaM, max( max( lumaNW, lumaNE) , max( lumaSW, lumaSE ) ) );

    vec2 dir;
    dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));
    dir.y =  ((lumaNW + lumaSW) - (lumaNE + lumaSE));

    float dirReduce = max( ( lumaNW + lumaNE + lumaSW + lumaSE ) * ( 0.25 * FXAA_REDUCE_MUL ), FXAA_REDUCE_MIN );

    float rcpDirMin = 1.0 / ( min( abs( dir.x ), abs( dir.y ) ) + dirReduce );
    dir = min( vec2( FXAA_SPAN_MAX,  FXAA_SPAN_MAX),
          max( vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),
                dir * rcpDirMin)) * res;
    vec4 rgbA = (1.0/2.0) * (
    texture2D(tInput,  vUv.xy + dir * (1.0/3.0 - 0.5)) +
    texture2D(tInput,  vUv.xy + dir * (2.0/3.0 - 0.5)));
    vec4 rgbB = rgbA * (1.0/2.0) + (1.0/4.0) * (
    texture2D(tInput,  vUv.xy + dir * (0.0/3.0 - 0.5)) +
    texture2D(tInput,  vUv.xy + dir * (3.0/3.0 - 0.5)));
    float lumaB = dot(rgbB, vec4(luma, 0.0));

    if ( ( lumaB < lumaMin ) || ( lumaB > lumaMax ) ) {
        gl_FragColor = rgbA;
    } else {
        gl_FragColor = rgbB;
    }

    
}`,Y=`uniform sampler2D tInput;
uniform float amount;
varying vec2 vUv;

void main() {
	
	vec4 color = texture2D(tInput, vUv);
	float r = color.r;
	float g = color.g;
	float b = color.b;
	
	color.r = min(1.0, (r * (1.0 - (0.607 * amount))) + (g * (0.769 * amount)) + (b * (0.189 * amount)));
	color.g = min(1.0, (r * 0.349 * amount) + (g * (1.0 - (0.314 * amount))) + (b * 0.168 * amount));
	color.b = min(1.0, (r * 0.272 * amount) + (g * 0.534 * amount) + (b * (1.0 - (0.869 * amount))));
	
	gl_FragColor = color;

}`,Z=`uniform sampler2D tInput;
uniform float amount;
uniform float speed;
uniform float time;
varying vec2 vUv;

float random(vec2 n, float offset ){
	
	return .5 - fract(sin(dot(n.xy + vec2( offset, 0. ), vec2(12.9898, 78.233)))* 43758.5453);
}

void main() {

	vec4 color = texture2D(tInput, vUv);

	
	color += vec4( vec3( amount * random( vUv, .00001 * speed * time ) ), 1. );

	gl_FragColor = color;

}`,ee=`varying vec2 vUv;
uniform sampler2D tInput;
uniform float deltax;
uniform float deltay;
uniform float taps;

uniform vec2 resolution;

void main(){
	
	vec4 sum=vec4(0.);
	vec2 inc=vec2(deltax,deltay)/resolution;
	
	sum+=texture2D(tInput,(vUv-inc*4.))*.051;
	sum+=texture2D(tInput,(vUv-inc*3.))*.0918;
	sum+=texture2D(tInput,(vUv-inc*2.))*.12245;
	sum+=texture2D(tInput,(vUv-inc*1.))*.1531;
	sum+=texture2D(tInput,(vUv+inc*0.))*.1633;
	sum+=texture2D(tInput,(vUv+inc*1.))*.1531;
	sum+=texture2D(tInput,(vUv+inc*2.))*.12245;
	sum+=texture2D(tInput,(vUv+inc*3.))*.0918;
	sum+=texture2D(tInput,(vUv+inc*4.))*.051;
	
	gl_FragColor=sum;
	
}`,ne=`uniform sampler2D tInput;
uniform float exponent;
uniform float strength;
uniform vec2 resolution;
varying vec2 vUv;

void main(){
	
	vec4 center=texture2D(tInput,vUv);
	vec4 color=vec4(0.);
	float total=0.;
	for(float x=-4.;x<=4.;x+=1.){
		for(float y=-4.;y<=4.;y+=1.){
			vec4 sample1=texture2D(tInput,vUv+vec2(x,y)/resolution.xy);
			float weight=1.-abs(dot(sample1.rgb-center.rgb,vec3(.25)));
			weight=pow(weight,exponent);
			color+=sample1*weight;
			total+=weight;
		}
	}
	gl_FragColor=color/total;
	
}`,te=`varying vec2 vUv;
uniform sampler2D tInput;
uniform vec2 resolution;
uniform sampler2D cgaMap;
uniform float pixelDensity;

void main() {

	float size = 2. * pixelDensity;
	float dSize = 2. * size;

	float amount = resolution.x / size;
	float d = 1.0 / amount;
	float ar = resolution.x / resolution.y;
	float sx = floor( vUv.x / d ) * d;
	d = ar / amount;
	float sy = floor( vUv.y / d ) * d;

	vec4 base = texture2D( tInput, vec2( sx, sy ) );

	float lum = .2126 * base.r + .7152 * base.g + .0722 * base.b;
	float o = floor( 6. * lum );

	vec3 c1;
	vec3 c2;
	
	vec3 black = vec3( 0. );
	vec3 light = vec3( 85., 255., 255. ) / 255.;
	vec3 dark = vec3( 254., 84., 255. ) / 255.;
	vec3 white = vec3( 1. );

	

	/*light = vec3( 85., 255., 255. ) / 255.;
	dark = vec3( 255., 86., 80. ) / 255.;*/

	if( o == 0. ) { c1 = black; c2 = c1; }
	if( o == 1. ) { c1 = black; c2 = dark; }
	if( o == 2. ) { c1 = dark;  c2 = c1; }
	if( o == 3. ) { c1 = dark;  c2 = light; }
	if( o == 4. ) { c1 = light; c2 = c1; }
	if( o == 5. ) { c1 = light; c2 = white; }
	if( o == 6. ) { c1 = white; c2 = c1; }

	if( mod( gl_FragCoord.x, dSize ) > size ) {
		if( mod( gl_FragCoord.y, dSize ) > size ) {
			base.rgb = c1;
		} else {
			base.rgb = c2;	
		}
	} else {
		if( mod( gl_FragCoord.y, dSize ) > size ) {
			base.rgb = c2;
		} else {
			base.rgb = c1;		
		}
	}

	gl_FragColor = vec4( base.rgb, base.a );

}`,ae=`uniform sampler2D tInput;
uniform vec2 resolution;
varying vec2 vUv;

void main(void) {

	float x = 1.0 / resolution.x;
	float y = 1.0 / resolution.y;
	vec4 horizEdge = vec4( 0.0 );
	horizEdge -= texture2D( tInput, vec2( vUv.x - x, vUv.y - y ) ) * 1.0;
	horizEdge -= texture2D( tInput, vec2( vUv.x - x, vUv.y     ) ) * 2.0;
	horizEdge -= texture2D( tInput, vec2( vUv.x - x, vUv.y + y ) ) * 1.0;
	horizEdge += texture2D( tInput, vec2( vUv.x + x, vUv.y - y ) ) * 1.0;
	horizEdge += texture2D( tInput, vec2( vUv.x + x, vUv.y     ) ) * 2.0;
	horizEdge += texture2D( tInput, vec2( vUv.x + x, vUv.y + y ) ) * 1.0;
	vec4 vertEdge = vec4( 0.0 );
	vertEdge -= texture2D( tInput, vec2( vUv.x - x, vUv.y - y ) ) * 1.0;
	vertEdge -= texture2D( tInput, vec2( vUv.x    , vUv.y - y ) ) * 2.0;
	vertEdge -= texture2D( tInput, vec2( vUv.x + x, vUv.y - y ) ) * 1.0;
	vertEdge += texture2D( tInput, vec2( vUv.x - x, vUv.y + y ) ) * 1.0;
	vertEdge += texture2D( tInput, vec2( vUv.x    , vUv.y + y ) ) * 2.0;
	vertEdge += texture2D( tInput, vec2( vUv.x + x, vUv.y + y ) ) * 1.0;
	vec3 edge = sqrt((horizEdge.rgb * horizEdge.rgb) + (vertEdge.rgb * vertEdge.rgb));
	
	gl_FragColor = vec4( edge, texture2D( tInput, vUv ).a );

}`,re=`varying vec2 vUv;
uniform sampler2D tInput;
uniform float x;
uniform float y;
uniform vec2 resolution;

void main(){
	
	vec2 dir=vUv-vec2(.5);
	float d=.7*length(dir);
	normalize(dir);
	vec2 value=d*dir*vec2(x,y);
	
	vec4 c1=texture2D(tInput,vUv-value/resolution.x);
	vec4 c2=texture2D(tInput,vUv);
	vec4 c3=texture2D(tInput,vUv+value/resolution.y);
	
	gl_FragColor=vec4(c1.r,c2.g,c3.b,c1.a+c2.a+c3.b);
	
}`,se=`uniform sampler2D tInput;
uniform vec2 resolution;
varying vec2 vUv;

float angle=1.57;
float scale=1.;

float pattern(){
	vec2 center=resolution.xy*.5;
	float s=sin(angle),c=cos(angle);
	vec2 tex=vUv*resolution-center;
	vec2 point=vec2(c*tex.x-s*tex.y,s*tex.x+c*tex.y)*scale;
	return(sin(point.x)*sin(point.y))*4.;
}

void main(){
	vec4 color=texture2D(tInput,vUv);
	float average=(color.r+color.g+color.b)/3.;
	gl_FragColor=vec4(vec3(average*10.-5.+pattern()),color.a);
}`,oe=`uniform sampler2D tInput;
uniform vec2 resolution;
varying vec2 vUv;

float nrand( vec2 n ) {
	return fract(sin(dot(n.xy, vec2(12.9898, 78.233)))* 43758.5453);
}

vec2 rot2d( vec2 p, float a ) {
	vec2 sc = vec2(sin(a),cos(a));
	return vec2( dot( p, vec2(sc.y, -sc.x) ), dot( p, sc.xy ) );
}

void main(void)
{
	vec2 uv = gl_FragCoord.xy / resolution.xy;
	uv.x += 0.1;

	float maxofs = 12.0;
	const int NUM_SAMPLES = 16;
	const int NUM_SAMPLES2 = NUM_SAMPLES/2;
	const float NUM_SAMPLES_F = float(NUM_SAMPLES);
	const float anglestep = 6.28 / NUM_SAMPLES_F;
	const float MIPBIAS = -8.0; 

	
	float rnd = nrand( 0.01*gl_FragCoord.xy );
	
	
	

	
	vec2 ofs[NUM_SAMPLES];
	{
		float angle = 3.1416*rnd;
		for( int i=0;i<NUM_SAMPLES2;++i )
		{
			ofs[i] = rot2d( vec2(maxofs,0.0), angle ) / resolution.xy;
			angle += anglestep;
		}
	}
	
	vec4 sum = vec4(0.0);
	
	for( int i=0;i<NUM_SAMPLES2;++i )
		sum += texture2D( tInput, vec2(uv.x, uv.y)+ofs[i], MIPBIAS );

	
	for( int i=0;i<NUM_SAMPLES2;++i )
		sum += texture2D( tInput, vec2(uv.x, uv.y)-ofs[i], MIPBIAS );

	gl_FragColor.rgb = sum.rgb / NUM_SAMPLES_F;
	gl_FragColor.a = texture2D( tInput, vUv ).a;
}`,ie=`uniform sampler2D tInput;
uniform vec2 resolution;
varying vec2 vUv;

float nrand( vec2 n ) {
	return fract(sin(dot(n.xy, vec2(12.9898, 78.233)))* 43758.5453);
}

vec2 rot2d( vec2 p, float a ) {
	vec2 sc = vec2(sin(a),cos(a));
	return vec2( dot( p, vec2(sc.y, -sc.x) ), dot( p, sc.xy ) );
}

void main(void)
{
	const int NUM_TAPS = 12;
	float max_siz = 42.0;
	
	vec2 fTaps_Poisson[NUM_TAPS];
	fTaps_Poisson[0]  = vec2(-.326,-.406);
	fTaps_Poisson[1]  = vec2(-.840,-.074);
	fTaps_Poisson[2]  = vec2(-.696, .457);
	fTaps_Poisson[3]  = vec2(-.203, .621);
	fTaps_Poisson[4]  = vec2( .962,-.195);
	fTaps_Poisson[5]  = vec2( .473,-.480);
	fTaps_Poisson[6]  = vec2( .519, .767);
	fTaps_Poisson[7]  = vec2( .185,-.893);
	fTaps_Poisson[8]  = vec2( .507, .064);
	fTaps_Poisson[9]  = vec2( .896, .412);
	fTaps_Poisson[10] = vec2(-.322,-.933);
	fTaps_Poisson[11] = vec2(-.792,-.598);
	
	vec2 uv = gl_FragCoord.xy / resolution.xy;
	
	vec4 sum = vec4(0);
	float rnd = 6.28 * nrand( uv  );
	
	vec4 basis = vec4( rot2d(vec2(1,0),rnd), rot2d(vec2(0,1),rnd) );
	for (int i=0; i < NUM_TAPS; i++)
	{
		vec2 ofs = fTaps_Poisson[i]; ofs = vec2(dot(ofs,basis.xz),dot(ofs,basis.yw) );
		
		vec2 texcoord = uv + max_siz * ofs / resolution.xy;
		sum += texture2D(tInput, texcoord, -10.0);
	}
	gl_FragColor = sum / vec4(NUM_TAPS);
}`,le=`varying vec2 vUv;
uniform sampler2D tInput;
uniform vec2 resolution;

uniform float reduction;
uniform float boost;

void main() {

	vec4 color = texture2D( tInput, vUv );

	vec2 center = resolution * 0.5;
	float vignette = distance( center, gl_FragCoord.xy ) / resolution.x;
    vignette = boost - vignette * reduction;

    color.rgb *= vignette;
	gl_FragColor = color;

}`,ve=`uniform sampler2D tInput;
uniform float falloff;
uniform float amount;
varying vec2 vUv;

void main() {

    vec4 color = texture2D(tInput, vUv);
    
    float dist = distance(vUv, vec2(0.5, 0.5));
    color.rgb *= smoothstep(0.8, falloff * 0.799, dist * (amount + falloff));
    
    gl_FragColor = color;

}`,ue=`uniform sampler2D tInput;
varying vec2 vUv;
uniform vec2 resolution;

const mat3 g0 = mat3( 0.3535533845424652, 0, -0.3535533845424652, 0.5, 0, -0.5, 0.3535533845424652, 0, -0.3535533845424652 );
const mat3 g1 = mat3( 0.3535533845424652, 0.5, 0.3535533845424652, 0, 0, 0, -0.3535533845424652, -0.5, -0.3535533845424652 );
const mat3 g2 = mat3( 0, 0.3535533845424652, -0.5, -0.3535533845424652, 0, 0.3535533845424652, 0.5, -0.3535533845424652, 0 );
const mat3 g3 = mat3( 0.5, -0.3535533845424652, 0, -0.3535533845424652, 0, 0.3535533845424652, 0, 0.3535533845424652, -0.5 );
const mat3 g4 = mat3( 0, -0.5, 0, 0.5, 0, 0.5, 0, -0.5, 0 );
const mat3 g5 = mat3( -0.5, 0, 0.5, 0, 0, 0, 0.5, 0, -0.5 );
const mat3 g6 = mat3( 0.1666666716337204, -0.3333333432674408, 0.1666666716337204, -0.3333333432674408, 0.6666666865348816, -0.3333333432674408, 0.1666666716337204, -0.3333333432674408, 0.1666666716337204 );
const mat3 g7 = mat3( -0.3333333432674408, 0.1666666716337204, -0.3333333432674408, 0.1666666716337204, 0.6666666865348816, 0.1666666716337204, -0.3333333432674408, 0.1666666716337204, -0.3333333432674408 );
const mat3 g8 = mat3( 0.3333333432674408, 0.3333333432674408, 0.3333333432674408, 0.3333333432674408, 0.3333333432674408, 0.3333333432674408, 0.3333333432674408, 0.3333333432674408, 0.3333333432674408 );

void main(void) {
	vec2 texel = vec2(1.0 / resolution.x, 1.0 / resolution.y);
	mat3 G[9];
	G[0] = g0,
	G[1] = g1,
	G[2] = g2,
	G[3] = g3,
	G[4] = g4,
	G[5] = g5,
	G[6] = g6,
	G[7] = g7,
	G[8] = g8;
	
	mat3 I;
	float cnv[9];
	vec3 sample1;
	
	/* fetch the 3x3 neighbourhood and use the RGB vector's length as intensity value */
	for (float i=0.0; i<3.0; i++) {
		for (float j=0.0; j<3.0; j++) {
			sample1 = texture2D(tInput, vUv + texel * vec2(i-1.0,j-1.0) ).rgb;
			I[int(i)][int(j)] = length(sample1);
		}
	}
	
	/* calculate the convolution values for all the masks */
	for(int i=0;i<9;i++){
		float dp3=dot(G[i][0],I[0])+dot(G[i][1],I[1])+dot(G[i][2],I[2]);
		cnv[i]=dp3*dp3;
	}
	
	float M=(cnv[0]+cnv[1])+(cnv[2]+cnv[3]);
	float S=(cnv[4]+cnv[5])+(cnv[6]+cnv[7])+(cnv[8]+M);
	
	gl_FragColor=vec4(vec3(sqrt(M/S)),texture2D(tInput,vUv).a);
	
}`,ce=`uniform vec3 resolution;
uniform sampler2D tInput;
varying vec2 vUv;

#define HueLevCount 6
#define SatLevCount 7
#define ValLevCount 4
float HueLevels[HueLevCount];
float SatLevels[SatLevCount];
float ValLevels[ValLevCount];
 
vec3 RGBtoHSV( float r, float g, float b) {
   float minv, maxv, delta;
   vec3 res;
 
   minv = min(min(r, g), b);
   maxv = max(max(r, g), b);
   res.z = maxv;            
   
   delta = maxv - minv;
 
   if( maxv != 0.0 )
      res.y = delta / maxv;      
   else {
      
      res.y = 0.0;
      res.x = -1.0;
      return res;
   }
 
   if( r == maxv )
      res.x = ( g - b ) / delta;      
   else if( g == maxv )
      res.x = 2.0 + ( b - r ) / delta;   
   else
      res.x = 4.0 + ( r - g ) / delta;   
 
   res.x = res.x * 60.0;            
   if( res.x < 0.0 )
      res.x = res.x + 360.0;
      
   return res;
}
 
vec3 HSVtoRGB(float h, float s, float v ) {
   int i;
   float f, p, q, t;
   vec3 res;
 
   if( s == 0.0 ) {
      
      res.x = v;
      res.y = v;
      res.z = v;
      return res;
   }
 
   h /= 60.0;         
   i = int(floor( h ));
   f = h - float(i);         
   p = v * ( 1.0 - s );
   q = v * ( 1.0 - s * f );
   t = v * ( 1.0 - s * ( 1.0 - f ) );
 
   if (i==0) {
		res.x = v;
		res.y = t;
		res.z = p;
   	} else if (i==1) {
         res.x = q;
         res.y = v;
         res.z = p;
	} else if (i==2) {
         res.x = p;
         res.y = v;
         res.z = t;
	} else if (i==3) {
         res.x = p;
         res.y = q;
         res.z = v;
	} else if (i==4) {
         res.x = t;
         res.y = p;
         res.z = v;
	} else if (i==5) {
         res.x = v;
         res.y = p;
         res.z = q;
   }
   
   return res;
}
 
float nearestLevel(float col, int mode) {
 
   if (mode==0) {
   		for (int i =0; i<HueLevCount-1; i++ ) {
		    if (col >= HueLevels[i] && col <= HueLevels[i+1]) {
		      return HueLevels[i+1];
		    }
		}
	 }
 
	if (mode==1) {
		for (int i =0; i<SatLevCount-1; i++ ) {
			if (col >= SatLevels[i] && col <= SatLevels[i+1]) {
	          return SatLevels[i+1];
	        }
		}
	}
 
 
	if (mode==2) {
		for (int i =0; i<ValLevCount-1; i++ ) {
			if (col >= ValLevels[i] && col <= ValLevels[i+1]) {
	          return ValLevels[i+1];
	        }
		}
	}
 
 
}
 

float avg_intensity(vec4 pix) {
 return (pix.r + pix.g + pix.b)/3.;
}
 
vec4 get_pixel(vec2 coords, float dx, float dy) {
 return texture2D(tInput,coords + vec2(dx, dy));
}
 

float IsEdge(in vec2 coords){
  float dxtex = 1.0 / resolution.x ;
  float dytex = 1.0 / resolution.y ;
  
  float pix[9];
  
  int k = -1;
  float delta;
 
  
float pix0 = avg_intensity(get_pixel(coords,-1.0*dxtex, -1.0*dytex));
float pix1 = avg_intensity(get_pixel(coords,-1.0*dxtex, 0.0*dytex));
float pix2 = avg_intensity(get_pixel(coords,-1.0*dxtex, 1.0*dytex));
float pix3 = avg_intensity(get_pixel(coords,0.0*dxtex, -1.0*dytex));
float pix4 = avg_intensity(get_pixel(coords,0.0*dxtex, 0.0*dytex));
float pix5 = avg_intensity(get_pixel(coords,0.0*dxtex, 1.0*dytex));
float pix6 = avg_intensity(get_pixel(coords,1.0*dxtex, -1.0*dytex));
float pix7 = avg_intensity(get_pixel(coords,1.0*dxtex, 0.0*dytex));
float pix8 = avg_intensity(get_pixel(coords,1.0*dxtex, 1.0*dytex)); 
  
  delta = (abs(pix1-pix7)+
          abs(pix5-pix3) +
          abs(pix0-pix8)+
          abs(pix2-pix6)
           )/4.;
 
  return clamp(5.5*delta,0.0,1.0);
}
 
void main(void)
{
 
	HueLevels[0] = 0.0;
	HueLevels[1] = 80.0;
	HueLevels[2] = 160.0;
	HueLevels[3] = 240.0;
	HueLevels[4] = 320.0;
	HueLevels[5] = 360.0; 
 
	SatLevels[0] = 0.0;
	SatLevels[1] = 0.1;
	SatLevels[2] = 0.3;
	SatLevels[3] = 0.5;
	SatLevels[4] = 0.6;
	SatLevels[5] = 0.8;
	SatLevels[6] = 1.0;
 
	ValLevels[0] = 0.0;
	ValLevels[1] = 0.3;
	ValLevels[2] = 0.6;
	ValLevels[3] = 1.0; 
 
    vec4 colorOrg = texture2D( tInput, vUv );
    vec3 vHSV =  RGBtoHSV(colorOrg.r,colorOrg.g,colorOrg.b);
    vHSV.x = nearestLevel(vHSV.x, 0);
    vHSV.y = nearestLevel(vHSV.y, 1);
    vHSV.z = nearestLevel(vHSV.z, 2);
    float edg = IsEdge(vUv);
    vec3 vRGB = (edg >= 0.3)? vec3(0.0,0.0,0.0):HSVtoRGB(vHSV.x,vHSV.y,vHSV.z);
    gl_FragColor = vec4(vRGB.x,vRGB.y,vRGB.z,1.0);
}`;const{defineComponent:fe}=await m("vue"),d=await m("three"),{watch:C}=await m("vue"),de=fe({__name:"postProcessing",setup(v){const{camera:e,renderer:n,scene:a}=O();for(var t=new d.BufferGeometry,o=[],l=0;l<100;l++){var p=new d.BoxGeometry(100,100,100);p.translate(Math.random()*1500,Math.random()*1500,Math.random()*1500),o.push(p)}t=H(o);const{state:u}=w("plugins/postProcessing/image/1324.jpg"),{state:c}=w("plugins/postProcessing/image/1324-normal.jpg");var x=new d.MeshPhongMaterial({normalMap:c.map,normalScale:new d.Vector2(.8,-.8),shininess:100}),g=new d.Mesh(t,x);g.castShadow=!0,g.receiveShadow=!0,a.value.add(g);const f=new J(n,{useRGBA:!0}),S=new j;let h=null,B=[{text:"InvertPass",value:{InvertPass:M}},{text:"FXAAPass",value:{FXAAPass:Q}},{text:"SEPIAPass",value:{SEPIAPass:Y,params:{amount:10}}},{text:"SNOISEPass",value:{SNOISEPass:Z,params:{amount:.1,speed:0}}},{text:"BOXBLURPass",value:{BOXBLURPass:ee,params:{deltax:10,deltay:10,taps:1}}},{text:"DENOISEPass",value:{DENOISEPass:ne,params:{exponent:1,strength:10}}},{text:"CGAPass",value:{CGAPass:te,params:{pixelDensity:4,cgaMap:c.map}}},{text:"SOBELPass",value:{SOBELPass:ae}},{text:"RGBPass",value:{RGBPass:re,params:{x:1e3,y:1e3}}},{text:"DOTPass",value:{DOTPass:se}},{text:"CIRCULARPass",value:{CIRCULARPass:oe}},{text:"POISSONPass",value:{POISSONPass:ie}},{text:"VIGNETTE1Pass",value:{VIGNETTE1Pass:ve,params:{falloff:10,amount:2}}},{text:"VIGNETTE2Pass",value:{VIGNETTE2Pass:le,params:{reduction:10,boost:2}}},{text:"FREICHENPass",value:{FREICHENPass:ue}},{text:"TOONPass",value:{TOONPass:ce}}],I="InvertPass",E=M,y=null;S.addBlade({view:"list",label:"后处理类型",options:B,value:""}).on("change",i=>{h=i.value});const R=S.addButton({title:"新增",label:"新增通道"});let z=0;R.on("click",i=>{I=Object.keys(h)[0],E=Object.values(h)[0],y=Object.values(h)[1];let U=z++,b=S.addFolder({title:I});for(const _ in y){let P=y[_];b.addBlade({view:"text",label:_,parse:k=>String(k),value:P})}b.addButton({title:`移除~${U}`,label:"关闭通道"}).on("click",_=>{let P=_.target.title.split("~")[1];f.removePass(P)}).on("click",()=>{b.dispose()});let V=N(y,i.target.label,i.value);f.addPass(I,E,V,U)}),f.onWindowResize(n,e.value),C(()=>u.value,i=>{i&&(i.wrapS=d.RepeatWrapping,x.map=i)}),C(()=>c.value,i=>{i&&(i.wrapS=d.RepeatWrapping,x.normalMap=i)});const{onBeforeRender:G}=W();return G(({delta:i})=>{g&&(n.autoClearColor=!0,f.Reset(),g.material=x,f.render(a.value,e.value),f.pass(),f.toScreen(a.value,e.value))}),(i,U)=>null}}),me=q(de,[["__scopeId","data-v-bd017d61"]]),{defineComponent:pe}=await m("vue"),{createElementVNode:D,unref:xe,normalizeProps:ge,guardReactiveProps:he,createVNode:L,Suspense:ye,withCtx:A,openBlock:F,createBlock:T,resolveComponent:_e,mergeProps:Se}=await m("vue"),Ie={ref:"perspectiveCameraRef",position:[600,850,-1500],fov:45,near:.1,far:1e5},Ee=pe({__name:"postProcessingEditor",setup(v){const e={clearColor:"#000000",shadows:!0,alpha:!1,useLegacyLights:!0,renderMode:"manual"},n={autoRotate:!0,enableDamping:!0};return(a,t)=>{const o=_e("TresCanvas");return F(),T(o,Se(e,{"window-size":""}),{default:A(()=>[D("TresPerspectiveCamera",Ie,null,512),L(xe(X),ge(he(n)),null,16),t[0]||(t[0]=D("TresAmbientLight",{color:"#ffffff",intensity:2},null,-1)),t[1]||(t[1]=D("TresDirectionalLight",{position:[100,100,0],intensity:2,color:"#ffffff"},null,-1)),(F(),T(ye,null,{default:A(()=>[L(me)]),_:1}))]),_:1},16)}}});export{Ee as default};
