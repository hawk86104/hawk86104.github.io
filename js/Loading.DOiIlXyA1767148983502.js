import{importShared as f}from"./3d-tiles-renderer.DZNovkLO1767148983502.js";import{createInjectionKey as b,c as l,commonVariables as v,cB as $,cE as c}from"./light.Bp388JKA1767148983502.js";import{isMounted as y}from"./use-rtl.q0hodkC81767148983502.js";import{useStyle as k}from"./use-style.DGMS3HNI1767148983502.js";const E=typeof document<"u"&&typeof window<"u";function K(t){return t.replace(/#|\(|\)|,|\s|\./g,"_")}const{computed:d,inject:C,onBeforeUnmount:_,provide:B}=await f("vue"),h=b("n-form-item");function M(t,{defaultSize:i="medium",mergedSize:o,mergedDisabled:s}={}){const e=C(h,null);B(h,null);const n=d(o?()=>o(e):()=>{const{size:a}=t;if(a)return a;if(e){const{mergedSize:m}=e;if(m.value!==void 0)return m.value}return i}),g=d(s?()=>s(e):()=>{const{disabled:a}=t;return a!==void 0?a:e?e.disabled.value:!1}),w=d(()=>{const{status:a}=t;return a||e?.mergedValidationStatus.value});return _(()=>{e&&e.restoreValidation()}),{mergedSizeRef:n,mergedDisabledRef:g,mergedStatusRef:w,nTriggerFormBlur(){e&&e.handleContentBlur()},nTriggerFormChange(){e&&e.handleContentChange()},nTriggerFormFocus(){e&&e.handleContentFocus()},nTriggerFormInput(){e&&e.handleContentInput()}}}const{defineComponent:I,h:S,Transition:T}=await f("vue"),N=I({name:"BaseIconSwitchTransition",setup(t,{slots:i}){const o=y();return()=>S(T,{name:"icon-switch-transition",appear:o.value},i)}}),{cubicBezierEaseInOut:x}=v;function p({originalTransform:t="",left:i=0,top:o=0,transition:s=`all .3s ${x} !important`}={}){return[l("&.icon-switch-transition-enter-from, &.icon-switch-transition-leave-to",{transform:`${t} scale(0.75)`,left:i,top:o,opacity:0}),l("&.icon-switch-transition-enter-to, &.icon-switch-transition-leave-from",{transform:`scale(1) ${t}`,left:i,top:o,opacity:1}),l("&.icon-switch-transition-enter-active, &.icon-switch-transition-leave-active",{transformOrigin:"center",position:"absolute",left:i,top:o,transition:s})]}const F=l([l("@keyframes rotator",`
 0% {
 -webkit-transform: rotate(0deg);
 transform: rotate(0deg);
 }
 100% {
 -webkit-transform: rotate(360deg);
 transform: rotate(360deg);
 }`),$("base-loading",`
 position: relative;
 line-height: 0;
 width: 1em;
 height: 1em;
 `,[c("transition-wrapper",`
 position: absolute;
 width: 100%;
 height: 100%;
 `,[p()]),c("placeholder",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[p({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})]),c("container",`
 animation: rotator 3s linear infinite both;
 `,[c("icon",`
 height: 1em;
 width: 1em;
 `)])])]),{defineComponent:z,h:r,toRef:R}=await f("vue"),u="1.6s",j={strokeWidth:{type:Number,default:28},stroke:{type:String,default:void 0}},W=z({name:"BaseLoading",props:Object.assign({clsPrefix:{type:String,required:!0},show:{type:Boolean,default:!0},scale:{type:Number,default:1},radius:{type:Number,default:100}},j),setup(t){k("-base-loading",F,R(t,"clsPrefix"))},render(){const{clsPrefix:t,radius:i,strokeWidth:o,stroke:s,scale:e}=this,n=i/e;return r("div",{class:`${t}-base-loading`,role:"img","aria-label":"loading"},r(N,null,{default:()=>this.show?r("div",{key:"icon",class:`${t}-base-loading__transition-wrapper`},r("div",{class:`${t}-base-loading__container`},r("svg",{class:`${t}-base-loading__icon`,viewBox:`0 0 ${2*n} ${2*n}`,xmlns:"http://www.w3.org/2000/svg",style:{color:s}},r("g",null,r("animateTransform",{attributeName:"transform",type:"rotate",values:`0 ${n} ${n};270 ${n} ${n}`,begin:"0s",dur:u,fill:"freeze",repeatCount:"indefinite"}),r("circle",{class:`${t}-base-loading__icon`,fill:"none",stroke:"currentColor","stroke-width":o,"stroke-linecap":"round",cx:n,cy:n,r:i-o/2,"stroke-dasharray":5.67*i,"stroke-dashoffset":18.48*i},r("animateTransform",{attributeName:"transform",type:"rotate",values:`0 ${n} ${n};135 ${n} ${n};450 ${n} ${n}`,begin:"0s",dur:u,fill:"freeze",repeatCount:"indefinite"}),r("animate",{attributeName:"stroke-dashoffset",values:`${5.67*i};${1.42*i};${5.67*i}`,begin:"0s",dur:u,fill:"freeze",repeatCount:"indefinite"})))))):r("div",{key:"placeholder",class:`${t}-base-loading__placeholder`},this.$slots)}))}});export{W as NBaseLoading,N as NIconSwitchTransition,K as color2Class,h as formItemInjectionKey,p as iconSwitchTransition,E as isBrowser,M as useFormItem};
