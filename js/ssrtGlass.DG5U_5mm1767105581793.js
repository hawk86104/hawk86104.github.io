import { importShared, Fs, _l, Kk } from './index.BxB45aCK1767105581793.js';
import { _sfc_main$6 as _sfc_main$2 } from './generalFont.vue_vue_type_script_setup_true_lang.DqoG1H6g1767105581793.js';
import './default.vue_vue_type_script_setup_true_lang.DQGKkIwV1767105581793.js';
import './three-mesh-ui.module.CjQAT-M_1767105581793.js';
import './domPanel.vue_vue_type_style_index_0_lang.dV59iE041767105581793.js';
import { _sfc_main as _sfc_main$3 } from './whiteFloorMesh.vue_vue_type_script_setup_true_lang.B9UIV1AE1767105581793.js';
import { _sfc_main as _sfc_main$4 } from './skyBoxAmesh.vue_vue_type_script_setup_true_lang.Cd3eKmZW1767105581793.js';
import { Pane } from './tweakpane.Cvt5w0bb1767105581793.js';
import { useTexture } from './customShaderMaterial.vue_vue_type_script_setup_true_lang.rDMIDGqx1767105581793.js';
import './index.vue_vue_type_script_setup_true_lang.D7-hpzmy1767105581793.js';
import { useGLTF } from './index.CTrIPOkZ1767105581793.js';

var SSRTGlass_default$1="varying vec3 vWorldSpaceFragPos;\nvarying vec3 vWorldSpaceNormal;\n\nvarying mat4 vProjViewMatrix;\nvarying mat4 vViewMatrix;\n\nvoid main(){\n	\n	vWorldSpaceFragPos=(modelMatrix*vec4(position,1.)).xyz;\n	vWorldSpaceNormal=normalize((modelMatrix*vec4(normal,0.)).xyz);\n	\n	gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);\n	vProjViewMatrix=projectionMatrix*viewMatrix;\n	vViewMatrix=viewMatrix;\n}";

var SSRTGlass_default="uniform sampler2D uSkybox;\nuniform sampler2D uBackFaceBuffer;\nuniform sampler2D uFrontFaceBuffer;\n\nuniform vec3 uExtintionColor1;\nuniform vec3 uExtintionColor2;\nuniform float uExtintionFactor;\nuniform float uExposure;\nuniform float uReflectionFactor;\nuniform vec4 uExtinctionFX1;\n\nuniform float uTime;\n\nuniform vec3 uCameraPos;\nuniform vec2 uScreenSizeInv;\nuniform float uCameraFarInverse;\n\nvarying vec3 vWorldSpaceFragPos;\nvarying vec3 vWorldSpaceNormal;\nvarying mat4 vProjViewMatrix;\nvarying mat4 vViewMatrix;\n\nconst float PI=3.14159265359;\nconst float e=2.7182818284590;\n\nconst float planeSize=3.;\nconst vec3 planeColor=pow(vec3(202./255.,205./255.,185./255.),vec3(3.));\n\nfloat mod289(float x){return x-floor(x*(1./289.))*289.;}\nvec4 mod289(vec4 x){return x-floor(x*(1./289.))*289.;}\nvec4 perm(vec4 x){return mod289(((x*34.)+1.)*x);}\n\nfloat noise(vec3 p){\n	vec3 a=floor(p);\n	vec3 d=p-a;\n	d=d*d*(3.-2.*d);\n	\n	vec4 b=a.xxyy+vec4(0.,1.,0.,1.);\n	vec4 k1=perm(b.xyxy);\n	vec4 k2=perm(k1.xyxy+b.zzww);\n	\n	vec4 c=k2+a.zzzz;\n	vec4 k3=perm(c);\n	vec4 k4=perm(c+1.);\n	\n	vec4 o1=fract(k3*(1./41.));\n	vec4 o2=fract(k4*(1./41.));\n	\n	vec4 o3=o2*d.z+o1*(1.-d.z);\n	vec2 o4=o3.yw*d.x+o3.xz*(1.-d.x);\n	\n	return o4.y*d.y+o4.x*(1.-d.y);\n}\n\nvec3 acesFilm(const vec3 x){\n	const float a=2.51;\n	const float b=.03;\n	const float c=2.43;\n	const float d=.59;\n	const float e=.14;\n	return clamp((x*(a*x+b))/(x*(c*x+d)+e),0.,1.);\n}\n\nvec3 getSkyboxColor(vec3 viewDir){\n	\n	vec2 skyboxUV=vec2(\n		(atan(viewDir.x,viewDir.z)+PI)/(PI*2.),\n		(asin(viewDir.y)+PI*.5)/(PI)\n	);\n	\n	vec3 col=texture2D(uSkybox,skyboxUV).xyz;\n	col=pow(col,vec3(2.2));\n	return col;\n}\n\nbool refract2(vec3 v,vec3 n,float ni_over_nt,inout vec3 refracted){\n	vec3 uv=normalize(v);\n	float dt=dot(uv,n);\n	float discriminant=1.-ni_over_nt*ni_over_nt*(1.-dt*dt);\n	if(discriminant>0.){\n		refracted=ni_over_nt*(v-n*dt)-n*sqrt(discriminant);\n		return true;\n	}\n	\n	return false;\n}\n\nvec3 binarySearchHitPoint(vec3 lastP,vec3 hitP,vec3 rayDir){\n	\n	for(int i=0;i<10;i++){\n		vec3 midP=(lastP+hitP)*.5;\n		\n		\n		vec4 projCoord=vProjViewMatrix*vec4(midP,1.);\n		projCoord.xyz/=projCoord.w;\n		\n		vec2 midpNDC=projCoord.xy;\n		vec2 midpUV=midpNDC*.5+.5;\n		\n		\n		vec4 backBuffer=texture2D(uBackFaceBuffer,midpUV);\n		float depth=backBuffer.w;\n		\n		float midpDepth=abs((vViewMatrix*vec4(midP,1.)).z)*uCameraFarInverse;\n		if(midpDepth>depth){\n			hitP=midP;\n		}else{\n			lastP=midP;\n		}\n	}\n	\n	return hitP;\n}\n\nvec3 getRefractedColor(vec3 refractionDir,vec3 hitPoint,float refractionIndex){\n	\n	hitPoint+=refractionDir*.0001;\n	\n	\n	float stepSize=.02;\n	float stepMult=1.5;\n	\n	vec3 lastP=hitPoint;\n	vec3 p=hitPoint;\n	vec3 hitPNormal;\n	float currStepSize=stepSize;\n	float transmissionDistance=0.;\n	for(int i=0;i<20;i++){\n		p+=currStepSize*refractionDir;\n		\n		\n		vec4 projCoord=vProjViewMatrix*vec4(p,1.);\n		projCoord.xyz/=projCoord.w;\n		\n		vec2 pNDC=projCoord.xy;\n		vec2 pUV=pNDC*.5+.5;\n		\n		\n		vec4 backBuffer=texture2D(uBackFaceBuffer,pUV);\n		float depth=backBuffer.w;\n		vec3 norm=backBuffer.xyz;\n		\n		\n		float pDepth=abs((vViewMatrix*vec4(p,1.)).z)*uCameraFarInverse;\n		\n		if(pDepth>depth){\n			\n			vec3 hitp=binarySearchHitPoint(lastP,p,refractionDir);\n			p=hitp;\n			\n			\n			vec4 projCoord=vProjViewMatrix*vec4(p,1.);\n			projCoord.xyz/=projCoord.w;\n			\n			vec2 pNDC=projCoord.xy;\n			vec2 pUV=pNDC*.5+.5;\n			\n			\n			hitPNormal=texture2D(uBackFaceBuffer,pUV).xyz;\n			\n			\n			break;\n		}\n		\n		lastP=p;\n		currStepSize*=stepMult;\n	}\n	\n	transmissionDistance=length(hitPoint-p);\n	\n	\n	vec3 outward_normal;\n	vec3 reflected=reflect(refractionDir,hitPNormal);\n	float ni_over_nt;\n	vec3 refr;\n	\n	float reflect_prob;\n	float cosine;\n	\n	if(dot(refractionDir,hitPNormal)>0.){\n		outward_normal=-hitPNormal;\n		ni_over_nt=refractionIndex;\n		cosine=refractionIndex*dot(refractionDir,hitPNormal);\n	}else{\n		outward_normal=hitPNormal;\n		ni_over_nt=1./refractionIndex;\n		cosine=-dot(refractionDir,hitPNormal);\n	}\n	\n	\n		if(refract2(refractionDir,outward_normal,ni_over_nt,refr)){\n			float r0=(1.-refractionIndex)/(1.+refractionIndex);\n			r0*=r0;\n			reflect_prob=r0+(1.-r0)*pow((1.-cosine),5.);\n		}else{\n			reflect_prob=1.;\n		}\n		\n		\n		\n		vec3 col;\n		vec3 colrefl;\n		vec3 colrefr;\n		\n			if(refr.y<0.){\n				\n				\n				float t=p.y/abs(refr.y);\n				vec3 planeHitP=p+refr*t;\n				if(abs(planeHitP.x)<planeSize&&abs(planeHitP.z)<planeSize){\n					colrefr=planeColor;\n				}else{\n					\n					colrefr=getSkyboxColor(refr);\n				}\n			}else{\n				\n				colrefr=getSkyboxColor(refr);\n			}\n			\n			if(reflected.y<0.){\n				float t=p.y/abs(reflected.y);\n				vec3 planeHitP=p+reflected*t;\n				if(abs(planeHitP.x)<planeSize&&abs(planeHitP.z)<planeSize){\n					colrefl=planeColor;\n				}else{\n					colrefl=getSkyboxColor(reflected);\n				}\n			}else{\n				colrefl=getSkyboxColor(reflected);\n			}\n			\n			col=colrefl*(reflect_prob*uReflectionFactor)+colrefr*(1.-reflect_prob);\n			\n			\n			vec3 transm=vec3(1.);\n			\n			const int steps=15;\n			float step=transmissionDistance/float(steps);\n			float fc=uExtintionFactor*.07;\n			\n			\n			\n			\n			float noiseSpeed=.5;\n			float noiseTimeSpeed=.5;\n			\n			for(int i=0;i<steps;i++){\n				vec3 np=hitPoint+refractionDir*float(i)*step;\n				\n				vec3 nnp=np;\n				vec3 w=normalize(np-vec3(.75,1.5,0.));\n				vec3 u=vec3(0.,0.,1.);\n				\n				vec3 timeOffset=cos(uTime)*w+sin(uTime)*u;\n				float colorNoiseX=noise(np*noiseSpeed+timeOffset*noiseTimeSpeed);\n				float colorNoiseY=noise(np*noiseSpeed+timeOffset*noiseTimeSpeed+vec3(15.3278,125.19879,0.));\n				float colorNoiseZ=noise(np*noiseSpeed+timeOffset*noiseTimeSpeed+vec3(2.6008,78.19879,543.12993));\n				\n				float targ=length(nnp*.8*uExtinctionFX1.w-vec3(.75,1.5,0.));\n				float targAperture=.25;\n				\n				\n				if(uExtinctionFX1.z>.5){\n					nnp=np+sin(np.x*2.5+uTime*1.5)*.3;\n					targ=nnp.y-.85*uExtinctionFX1.w;\n				}else{\n					nnp=np+vec3(colorNoiseX,colorNoiseY,colorNoiseZ)*1.05;\n					vec3 diff=nnp-vec3(3.3,4.5,0.);\n					float angle=(atan(diff.x,diff.y)+PI)/(PI*2.);\n					targ=length(diff)+sin(angle*32.*PI+uTime*1.5)*.4;\n					targ*=.475;\n					targAperture=.5+colorNoiseX*.75;\n				}\n				\n				\n				vec3 col1=uExtintionColor1;\n				vec3 col2=uExtintionColor2;\n				if(uExtinctionFX1.x>.5){\n					col1=vec3(colorNoiseX,colorNoiseY,colorNoiseZ)*.85;\n				}\n				if(uExtinctionFX1.y>.5){\n					col2=vec3(colorNoiseX,colorNoiseY,colorNoiseZ)*.85;\n				}\n				\n				if(targ<1.){\n					\n					transm*=exp(-step*col2*fc);\n					\n				}else if(targ>1.&&targ<1.+targAperture){\n					float t=(targ-1.)/targAperture;\n					\n					transm*=exp(-step*(col1*t+col2*(1.-t))*fc);\n					\n				}else if(targ<(1.+targAperture)*1.85){\n					transm*=exp(-step*col1*fc);\n					\n				}else{\n					\n					\n					\n				}\n			}\n			\n			\n			col*=transm;\n			\n			return col;\n		}\n		\n		void main(){\n			vec2 screenUV=gl_FragCoord.xy*uScreenSizeInv;\n			\n			vec3 viewDir=normalize(vWorldSpaceFragPos-uCameraPos);\n			vec3 normal=vWorldSpaceNormal;\n			float refractionIndex=1.5;\n			\n			vec3 outward_normal;\n			vec3 reflected=reflect(viewDir,normal);\n			float ni_over_nt;\n			vec3 refracted;\n			float reflect_prob;\n			float cosine;\n			\n			if(dot(viewDir,normal)>0.){\n				outward_normal=-normal;\n				ni_over_nt=refractionIndex;\n				cosine=refractionIndex*dot(viewDir,normal);\n			}else{\n				outward_normal=normal;\n				ni_over_nt=1./refractionIndex;\n				cosine=-dot(viewDir,normal);\n			}\n			\n			if(refract2(viewDir,outward_normal,ni_over_nt,refracted)){\n				float r0=(1.-refractionIndex)/(1.+refractionIndex);\n				r0*=r0;\n				reflect_prob=r0+(1.-r0)*pow((1.-cosine),5.);\n			}else{\n				reflect_prob=1.;\n			}\n			\n			vec3 reflectedCol;\n			if(reflected.y<0.){\n				float t=vWorldSpaceFragPos.y/abs(reflected.y);\n				vec3 planeHitP=vWorldSpaceFragPos+reflected*t;\n				if(abs(planeHitP.x)<planeSize&&abs(planeHitP.z)<planeSize){\n					reflectedCol=planeColor;\n				}else{\n					reflectedCol=getSkyboxColor(reflected);\n				}\n			}else{\n				reflectedCol=getSkyboxColor(reflected);\n			}\n			\n			vec3 col=reflectedCol*reflect_prob*uReflectionFactor+getRefractedColor(refracted,vWorldSpaceFragPos,refractionIndex)*(1.-reflect_prob);\n			\n			\n			\n			\n			\n			\n			\n			\n			\n			\n			\n			\n			col*=pow(2.,uExposure);\n			col=acesFilm(col);\n			col=pow(col,vec3(1./2.2));\n			\n			gl_FragColor=vec4(col,1.);\n			\n		}";

const THREE$3 = await importShared('three');


class Blit {
    constructor(renderer, customFragment) {

        this.material = new THREE$3.ShaderMaterial({
            uniforms: {
                uTexture: { type: "t", value: null }
            },

            vertexShader: `
                varying vec2 vUv;

                void main() {
                    vUv = uv;
                    gl_Position = vec4(position.xy, 0.0, 1.0);    
                }`,

            fragmentShader: `
                uniform sampler2D uTexture;

                varying vec2 vUv;

                void main() {
                    ${customFragment ? customFragment : "gl_FragColor = texture2D(uTexture, vUv);"}  
                }`,

            depthTest: false,
            depthWrite: false,
        });

        this.mesh = new THREE$3.Mesh(new THREE$3.PlaneGeometry(2, 2), this.material);
        this.camera = new THREE$3.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
        this.renderer = renderer;

        this.scene = new THREE$3.Scene();
        this.scene.add(this.mesh);
    }

    blit (textureFrom, renderTargetDest) {
        this.renderer.setRenderTarget(renderTargetDest);

        this.material.uniforms.uTexture.value = textureFrom;
        this.renderer.render(this.scene, this.camera);

        this.renderer.setRenderTarget(null);
    }
}

const THREE$2 = await importShared('three');


class DoubleDepthBuffer {
    constructor(mesh, camera, renderer) {
        this.mesh = mesh.clone();
        this.camera = camera;
        this.renderer = renderer;

        this.scene = new THREE$2.Scene();
        this.scene.add(this.mesh);

        this.blitProgram = new Blit(this.renderer);

        this.ping = new THREE$2.WebGLRenderTarget(innerWidth, innerHeight, {
            type: THREE$2.FloatType,
            depthBuffer: false,
            stencilBuffer: false,
        });

        this.pong = new THREE$2.WebGLRenderTarget(innerWidth, innerHeight, {
            type: THREE$2.FloatType,
            depthBuffer: false,
            stencilBuffer: false,
        });

        this.frontFaceRT = new THREE$2.WebGLRenderTarget(innerWidth, innerHeight, {
            type: THREE$2.FloatType,
        });

        this.frontFaceMaterial = new THREE$2.ShaderMaterial({
            uniforms: {
                uCameraFarInverse: { value: 1 / this.camera.far },
            },

            vertexShader: `
                varying vec3 vCameraSpacePos;
                varying vec3 vWorldSpaceNormal;

                void main() {
                    vCameraSpacePos = (modelViewMatrix * vec4(position, 1.0)).xyz;
                    vWorldSpaceNormal = normal;

                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);    
                }`,

            fragmentShader: `
                uniform float uCameraFarInverse;

                varying vec3 vWorldSpaceNormal;
                varying vec3 vCameraSpacePos;

                void main() {
                    float currentDepth = abs(vCameraSpacePos.z) * uCameraFarInverse;
                    gl_FragColor = vec4(vWorldSpaceNormal, currentDepth);    
                }`,

            depthTest: true,
            depthWrite: true,
            side: THREE$2.FrontSide,
        });


        this.material = new THREE$2.ShaderMaterial({
            uniforms: {
                uScreenSize: { value: new THREE$2.Vector2(innerWidth, innerHeight) },
                uPrevDepth: { type: "t", value: this.ping.texture },
                uCameraFarInverse: { value: 1 / this.camera.far },
                uSample: { value: 0 },
            },

            vertexShader: `
                varying vec3 vCameraSpacePos;
                varying vec3 vWorldSpaceNormal;

                void main() {
                    vCameraSpacePos = (modelViewMatrix * vec4(position, 1.0)).xyz;
                    vWorldSpaceNormal = normalize((modelMatrix * vec4(normal, 0.0)).xyz);

                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);    
                }`,

            fragmentShader: `
                uniform sampler2D uPrevDepth;
                uniform float uCameraFarInverse;
                uniform float uSample;
                uniform vec2  uScreenSize;

                varying vec3 vWorldSpaceNormal;
                varying vec3 vCameraSpacePos;

                void main() {

                    vec2 uv = gl_FragCoord.xy / uScreenSize;
                    float prevRegisteredDepth = texture2D(uPrevDepth, uv).w;
                    float currentDepth        = abs(vCameraSpacePos.z) * uCameraFarInverse;

                    if(currentDepth <= prevRegisteredDepth) {
                        discard;
                    }

                    gl_FragColor = vec4(vWorldSpaceNormal, currentDepth);    
                }`,

            depthTest: false,
            depthWrite: false,
            side: THREE$2.DoubleSide,
        });


        this.mesh.traverse((child) => {
            if (child instanceof THREE$2.Mesh) {
                child.material = this.material;
            }
        });
    }

    compute (samples) {
        // *********** render back face material ***********
        this.renderer.setRenderTarget(this.ping);
        this.renderer.clear();
        this.renderer.setRenderTarget(this.pong);
        this.renderer.clear();

        this.mesh.traverse((child) => {
            if (child instanceof THREE$2.Mesh) {
                child.material = this.material;
            }
        });

        this.material.uniforms.uCameraFarInverse.value = 1 / this.camera.far;

        for (let i = 0; i < samples; i++) {
            let p1 = (i % 2) === 0 ? this.ping : this.pong;
            let p2 = (i % 2) === 0 ? this.pong : this.ping;

            this.material.uniforms.uPrevDepth.value = p1.texture;
            this.material.uniforms.uSample.value = i;

            this.renderer.autoClear = false;
            this.renderer.setRenderTarget(p2);
            this.renderer.render(this.scene, this.camera);
            this.renderer.autoClear = true;

            // this will make sure that if all fragments fail the depth test and get discarded, we at least have the fallback texture computed
            this.blitProgram.blit(p2.texture, p1);
        }

        if (samples % 2 === 0) {
            this.resultBuffer = this.ping;
        } else {
            this.resultBuffer = this.pong;
        }
        // *********** render back face material ***********




        // *********** render front face material ***********
        this.mesh.traverse((child) => {
            if (child instanceof THREE$2.Mesh) {
                child.material = this.frontFaceMaterial;
            }
        });
        this.renderer.setRenderTarget(this.frontFaceRT);
        this.renderer.render(this.scene, this.camera);
        // *********** render front face material - END ***********
    }

    getBackFaceTexture () {
        return this.resultBuffer.texture;
    }
    getFrontFaceTexture () {
        return this.frontFaceRT.texture;
    }
}

const {withAsyncContext:_withAsyncContext,defineComponent:_defineComponent$1} = await importShared('vue');

const {unref:_unref$1,openBlock:_openBlock$1,createElementBlock:_createElementBlock$1} = await importShared('vue');

const _hoisted_1 = ["object"];
const THREE$1 = await importShared('three');
const {watchEffect,watch} = await importShared('vue');
const _sfc_main$1 = /* @__PURE__ */ _defineComponent$1({
  __name: "ssrtGlassMesh",
  props: {
    skyBoxTexture: {},
    modelPath: {},
    modelName: {},
    extintionFactor: { default: 5 },
    reflectionFactor: { default: 1 },
    exposure: { default: 0 },
    extintionColor1: { default: "rgb(192,123,25)" },
    extintionColor2: { default: "rgb(26, 166, 192)" },
    extintionCol1Random: { type: Boolean, default: false },
    extintionCol2Random: { type: Boolean, default: false }
  },
  async setup(__props) {
    let __temp, __restore;
    const props = __props;
    const pTexture = ([__temp, __restore] = _withAsyncContext(() => useTexture(props.skyBoxTexture)), __temp = await __temp, __restore(), __temp);
    pTexture.wrapS = THREE$1.ClampToEdgeWrapping;
    pTexture.wrapT = THREE$1.ClampToEdgeWrapping;
    pTexture.magFilter = THREE$1.LinearMipmapLinearFilter;
    pTexture.minFilter = THREE$1.LinearMipmapLinearFilter;
    const { camera, renderer } = Fs();
    const GlassMaterial = new THREE$1.ShaderMaterial({
      uniforms: {
        uSkybox: { value: pTexture },
        uBackFaceBuffer: { value: null },
        uFrontFaceBuffer: { value: null },
        uCameraFarInverse: { value: 1 / camera.value.far },
        uScreenSizeInv: { value: new THREE$1.Vector2(1 / window.innerWidth, 1 / window.innerHeight) },
        uCameraPos: { value: new THREE$1.Vector3(0, 0, 0) },
        uTime: { value: 0 },
        uExtintionColor1: { value: new THREE$1.Color("#fff").sub(new THREE$1.Color(props.extintionColor1).convertLinearToSRGB()) },
        uExtintionColor2: { value: new THREE$1.Color("#fff").sub(new THREE$1.Color(props.extintionColor2).convertLinearToSRGB()) },
        uExtintionFactor: { value: props.extintionFactor },
        //消光系数
        uExposure: { value: props.exposure },
        uReflectionFactor: { value: props.reflectionFactor },
        uExtinctionFX1: {
          value: new THREE$1.Vector4(
            props.extintionCol1Random ? 1 : 0,
            props.extintionCol2Random ? 1 : 0,
            0,
            1
          )
        }
      },
      vertexShader: SSRTGlass_default$1,
      fragmentShader: SSRTGlass_default
    });
    const { nodes } = ([__temp, __restore] = _withAsyncContext(() => useGLTF(props.modelPath)), __temp = await __temp, __restore(), __temp);
    const getMesh = nodes.Scene.getObjectByName(props.modelName);
    const ddbProgram = new DoubleDepthBuffer(getMesh, camera.value, renderer);
    const showMesh = getMesh?.clone();
    showMesh?.traverse((child) => {
      if (child instanceof THREE$1.Mesh) {
        child.material = GlassMaterial;
        child.material.side = THREE$1.FrontSide;
      }
    });
    const { onBeforeRender } = _l();
    onBeforeRender(({ elapsed }) => {
      if (getMesh && GlassMaterial) {
        GlassMaterial.uniforms.uCameraPos.value = camera.value.position.clone();
        GlassMaterial.uniforms.uTime.value = elapsed;
        ddbProgram.compute(6);
        GlassMaterial.uniforms.uBackFaceBuffer.value = ddbProgram.getBackFaceTexture();
        GlassMaterial.uniforms.uFrontFaceBuffer.value = ddbProgram.getFrontFaceTexture();
        renderer.setRenderTarget(null);
        renderer.autoClear = false;
      }
    });
    watchEffect(() => {
      if (props.extintionFactor) {
        GlassMaterial.uniforms.uExtintionFactor.value = props.extintionFactor;
      }
      if (props.reflectionFactor) {
        GlassMaterial.uniforms.uReflectionFactor.value = props.reflectionFactor;
      }
      if (props.exposure) {
        GlassMaterial.uniforms.uExposure.value = props.exposure;
      }
      if (props.extintionColor1) {
        GlassMaterial.uniforms.uExtintionColor1.value = new THREE$1.Color("#fff").sub(new THREE$1.Color(props.extintionColor1).convertLinearToSRGB());
      }
      if (props.extintionColor2) {
        GlassMaterial.uniforms.uExtintionColor2.value = new THREE$1.Color("#fff").sub(new THREE$1.Color(props.extintionColor2).convertLinearToSRGB());
      }
      if (props.extintionCol1Random) {
        GlassMaterial.uniforms.uExposure.value = props.exposure;
      }
    });
    watch(
      () => props.extintionCol1Random,
      (val) => {
        GlassMaterial.uniforms.uExtinctionFX1.value.x = val ? 1 : 0;
      },
      { immediate: true }
    );
    watch(
      () => props.extintionCol2Random,
      (val) => {
        GlassMaterial.uniforms.uExtinctionFX1.value.y = val ? 1 : 0;
      },
      { immediate: true }
    );
    return (_ctx, _cache) => {
      return _openBlock$1(), _createElementBlock$1("primitive", { object: _unref$1(showMesh) }, null, 8, _hoisted_1);
    };
  }
});

const {defineComponent:_defineComponent} = await importShared('vue');

const {unref:_unref,createVNode:_createVNode,createElementVNode:_createElementVNode,normalizeProps:_normalizeProps,guardReactiveProps:_guardReactiveProps,Suspense:_Suspense,withCtx:_withCtx,openBlock:_openBlock,createBlock:_createBlock,mergeProps:_mergeProps,resolveComponent:_resolveComponent,Fragment:_Fragment,createElementBlock:_createElementBlock} = await importShared('vue');
const THREE = await importShared('three');
const {reactive} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "ssrtGlass",
  setup(__props) {
    const tcConfig = {
      clearColor: "#201919",
      windowSize: true,
      toneMapping: THREE.ACESFilmicToneMapping,
      toneMappingExposure: 0.8
      // disableRender: true
    };
    const flootrConfigState = reactive({
      size: [20, 20],
      color: "#cbcb96",
      shadowColor: "#b8b59e",
      edge: 0.35
    });
    const glassConfig = reactive({
      extintionFactor: 5,
      reflectionFactor: 1,
      exposure: 0,
      extintionColor1: "rgb(192,123,25)",
      extintionColor2: "rgb(26, 166, 192)",
      extintionCol1Random: false,
      extintionCol2Random: false
    });
    const paneControl = new Pane({ title: "参数" });
    paneControl.addBinding(glassConfig, "extintionFactor", {
      label: "消光系数",
      min: 0,
      max: 10,
      step: 0.1
    });
    paneControl.addBinding(glassConfig, "reflectionFactor", {
      label: "反射系数",
      min: 0,
      max: 2,
      step: 0.1
    });
    paneControl.addBinding(glassConfig, "exposure", {
      label: "曝光系数",
      min: -1,
      max: 1,
      step: 0.1
    });
    paneControl.addBinding(glassConfig, "extintionColor1", {
      label: "消光颜色一"
    });
    paneControl.addBinding(glassConfig, "extintionColor2", {
      label: "消光颜色二"
    });
    paneControl.addBinding(glassConfig, "extintionCol1Random", {
      label: "随机色1"
    });
    paneControl.addBinding(glassConfig, "extintionCol2Random", {
      label: "随机色2"
    });
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createElementBlock(_Fragment, null, [
        _createVNode(_unref(_sfc_main$2)),
        _createVNode(_component_TresCanvas, _normalizeProps(_guardReactiveProps(tcConfig)), {
          default: _withCtx(() => [
            _cache[0] || (_cache[0] = _createElementVNode("TresPerspectiveCamera", {
              position: [0, 8, -13],
              fov: 45,
              near: 0.1,
              far: 1e3,
              "look-at": [0, 0, 0]
            }, null, -1)),
            _createVNode(_unref(Kk), { enableDamping: "" }),
            _cache[1] || (_cache[1] = _createElementVNode("TresAmbientLight", { intensity: 10 }, null, -1)),
            (_openBlock(), _createBlock(_Suspense, null, {
              default: _withCtx(() => [
                _createVNode(_sfc_main$3, _normalizeProps(_guardReactiveProps(flootrConfigState)), null, 16)
              ]),
              _: 1
            })),
            (_openBlock(), _createBlock(_Suspense, null, {
              default: _withCtx(() => [
                _createVNode(_sfc_main$1, _mergeProps({ scale: 2 }, glassConfig, {
                  modelPath: ("https://opensource.cdn.icegl.cn") + "/model/eCommerce/guanYu.glb",
                  modelName: "statue",
                  skyBoxTexture: ("https://opensource.cdn.icegl.cn") + "/images/skyBox/workshop_blur.jpg"
                }), null, 16, ["modelPath", "skyBoxTexture"])
              ]),
              _: 1
            })),
            (_openBlock(), _createBlock(_Suspense, null, {
              default: _withCtx(() => [
                _createVNode(_sfc_main$4, {
                  texture: ("https://opensource.cdn.icegl.cn") + "/images/skyBox/workshop_blur.jpg"
                }, null, 8, ["texture"])
              ]),
              _: 1
            }))
          ]),
          _: 1
        }, 16)
      ], 64);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=ssrtGlass.DG5U_5mm1767105581793.js.map
