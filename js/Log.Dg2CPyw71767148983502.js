import{importShared as L}from"./3d-tiles-renderer.DZNovkLO1767148983502.js";import{configProviderInjectionKey as ee,derived as I,c as P,cB as k,cM as j,cE as w,useConfig as q,useTheme as _,useThemeClass as V,cNotM as W,createTheme as oe,createInjectionKey as te,warn as K}from"./light.Bp388JKA1767148983502.js";import{NBaseLoading as ne}from"./Loading.DOiIlXyA1767148983502.js";import{useLocale as re}from"./Suffix.D4O-Hju71767148983502.js";import{fadeInScaleUpTransition as ie}from"./Card.CLGorf6I1767148983502.js";import{scrollbarLight as le,Scrollbar as se}from"./Scrollbar.BsFc6odp1767148983502.js";import{throttle as ae}from"./index.DTe2qqjO1767148983502.js";const{computed:ce,inject:de,watchEffect:Qe}=await L("vue");function Q(e,o){const t=de(ee,null);return ce(()=>e.hljs||t?.mergedHljsRef.value)}function he(e){const{textColor2:o,fontSize:t,fontWeightStrong:n,textColor3:i}=e;return{textColor:o,fontSize:t,fontWeightStrong:n,"mono-3":"#a0a1a7","hue-1":"#0184bb","hue-2":"#4078f2","hue-3":"#a626a4","hue-4":"#50a14f","hue-5":"#e45649","hue-5-2":"#c91243","hue-6":"#986801","hue-6-2":"#c18401",lineNumberTextColor:i}}const X={name:"Code",common:I,self:he},ue=P([k("code",`
 font-size: var(--n-font-size);
 font-family: var(--n-font-family);
 `,[j("show-line-numbers",`
 display: flex;
 `),w("line-numbers",`
 user-select: none;
 padding-right: 12px;
 text-align: right;
 transition: color .3s var(--n-bezier);
 color: var(--n-line-number-text-color);
 `),j("word-wrap",[P("pre",`
 white-space: pre-wrap;
 word-break: break-all;
 `)]),P("pre",`
 margin: 0;
 line-height: inherit;
 font-size: inherit;
 font-family: inherit;
 `),P("[class^=hljs]",`
 color: var(--n-text-color);
 transition: 
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `)]),({props:e})=>{const o=`${e.bPrefix}code`;return[`${o} .hljs-comment,
 ${o} .hljs-quote {
 color: var(--n-mono-3);
 font-style: italic;
 }`,`${o} .hljs-doctag,
 ${o} .hljs-keyword,
 ${o} .hljs-formula {
 color: var(--n-hue-3);
 }`,`${o} .hljs-section,
 ${o} .hljs-name,
 ${o} .hljs-selector-tag,
 ${o} .hljs-deletion,
 ${o} .hljs-subst {
 color: var(--n-hue-5);
 }`,`${o} .hljs-literal {
 color: var(--n-hue-1);
 }`,`${o} .hljs-string,
 ${o} .hljs-regexp,
 ${o} .hljs-addition,
 ${o} .hljs-attribute,
 ${o} .hljs-meta-string {
 color: var(--n-hue-4);
 }`,`${o} .hljs-built_in,
 ${o} .hljs-class .hljs-title {
 color: var(--n-hue-6-2);
 }`,`${o} .hljs-attr,
 ${o} .hljs-variable,
 ${o} .hljs-template-variable,
 ${o} .hljs-type,
 ${o} .hljs-selector-class,
 ${o} .hljs-selector-attr,
 ${o} .hljs-selector-pseudo,
 ${o} .hljs-number {
 color: var(--n-hue-6);
 }`,`${o} .hljs-symbol,
 ${o} .hljs-bullet,
 ${o} .hljs-link,
 ${o} .hljs-meta,
 ${o} .hljs-selector-id,
 ${o} .hljs-title {
 color: var(--n-hue-2);
 }`,`${o} .hljs-emphasis {
 font-style: italic;
 }`,`${o} .hljs-strong {
 font-weight: var(--n-font-weight-strong);
 }`,`${o} .hljs-link {
 text-decoration: underline;
 }`]}]),{computed:M,defineComponent:fe,h:U,onMounted:me,ref:ge,toRef:Y,watch:E}=await L("vue"),ve=Object.assign(Object.assign({},_.props),{language:String,code:{type:String,default:""},trim:{type:Boolean,default:!0},hljs:Object,uri:Boolean,inline:Boolean,wordWrap:Boolean,showLineNumbers:Boolean,internalFontSize:Number,internalNoHighlight:Boolean}),be=fe({name:"Code",props:ve,setup(e,{slots:o}){const{internalNoHighlight:t}=e,{mergedClsPrefixRef:n,inlineThemeDisabled:i}=q(),r=ge(null),l=t?{value:void 0}:Q(e),b=(s,u,h)=>{const{value:f}=l;return!f||!(s&&f.getLanguage(s))?null:f.highlight(h?u.trim():u,{language:s}).value},R=M(()=>e.inline||e.wordWrap?!1:e.showLineNumbers),v=()=>{if(o.default)return;const{value:s}=r;if(!s)return;const{language:u}=e,h=e.uri?window.decodeURIComponent(e.code):e.code;if(u){const d=b(u,h,e.trim);if(d!==null){if(e.inline)s.innerHTML=d;else{const a=s.querySelector(".__code__");a&&s.removeChild(a);const c=document.createElement("pre");c.className="__code__",c.innerHTML=d,s.appendChild(c)}return}}if(e.inline){s.textContent=h;return}const f=s.querySelector(".__code__");if(f)f.textContent=h;else{const d=document.createElement("pre");d.className="__code__",d.textContent=h,s.innerHTML="",s.appendChild(d)}};me(v),E(Y(e,"language"),v),E(Y(e,"code"),v),t||E(l,v);const z=_("Code","-code",ue,X,e,n),y=M(()=>{const{common:{cubicBezierEaseInOut:s,fontFamilyMono:u},self:{textColor:h,fontSize:f,fontWeightStrong:d,lineNumberTextColor:a,"mono-3":c,"hue-1":$,"hue-2":x,"hue-3":m,"hue-4":T,"hue-5":H,"hue-5-2":N,"hue-6":C,"hue-6-2":g}}=z.value,{internalFontSize:D}=e;return{"--n-font-size":D?`${D}px`:f,"--n-font-family":u,"--n-font-weight-strong":d,"--n-bezier":s,"--n-text-color":h,"--n-mono-3":c,"--n-hue-1":$,"--n-hue-2":x,"--n-hue-3":m,"--n-hue-4":T,"--n-hue-5":H,"--n-hue-5-2":N,"--n-hue-6":C,"--n-hue-6-2":g,"--n-line-number-text-color":a}}),p=i?V("code",M(()=>`${e.internalFontSize||"a"}`),y,e):void 0;return{mergedClsPrefix:n,codeRef:r,mergedShowLineNumbers:R,lineNumbers:M(()=>{let s=1;const u=[];let h=!1;for(const f of e.code)f===`
`?(h=!0,u.push(s++)):h=!1;return h||u.push(s++),u.join(`
`)}),cssVars:i?void 0:y,themeClass:p?.themeClass,onRender:p?.onRender}},render(){var e,o;const{mergedClsPrefix:t,wordWrap:n,mergedShowLineNumbers:i,onRender:r}=this;return r?.(),U("code",{class:[`${t}-code`,this.themeClass,n&&`${t}-code--word-wrap`,i&&`${t}-code--show-line-numbers`],style:this.cssVars,ref:"codeRef"},i?U("pre",{class:`${t}-code__line-numbers`},this.lineNumbers):null,(o=(e=this.$slots).default)===null||o===void 0?void 0:o.call(e))}});function pe(e){const{textColor1:o,dividerColor:t,fontWeightStrong:n}=e;return{textColor:o,color:t,fontWeight:n}}const $e={common:I,self:pe},xe=k("divider",`
 position: relative;
 display: flex;
 width: 100%;
 box-sizing: border-box;
 font-size: 16px;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
`,[W("vertical",`
 margin-top: 24px;
 margin-bottom: 24px;
 `,[W("no-title",`
 display: flex;
 align-items: center;
 `)]),w("title",`
 display: flex;
 align-items: center;
 margin-left: 12px;
 margin-right: 12px;
 white-space: nowrap;
 font-weight: var(--n-font-weight);
 `),j("title-position-left",[w("line",[j("left",{width:"28px"})])]),j("title-position-right",[w("line",[j("right",{width:"28px"})])]),j("dashed",[w("line",`
 background-color: #0000;
 height: 0px;
 width: 100%;
 border-style: dashed;
 border-width: 1px 0 0;
 `)]),j("vertical",`
 display: inline-block;
 height: 1em;
 margin: 0 8px;
 vertical-align: middle;
 width: 1px;
 `),w("line",`
 border: none;
 transition: background-color .3s var(--n-bezier), border-color .3s var(--n-bezier);
 height: 1px;
 width: 100%;
 margin: 0;
 `),W("dashed",[w("line",{backgroundColor:"var(--n-color)"})]),j("dashed",[w("line",{borderColor:"var(--n-color)"})]),j("vertical",{backgroundColor:"var(--n-color)"})]),{computed:Ce,defineComponent:je,Fragment:we,h:B}=await L("vue"),Re=Object.assign(Object.assign({},_.props),{titlePlacement:{type:String,default:"center"},dashed:Boolean,vertical:Boolean}),Xe=je({name:"Divider",props:Re,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:t}=q(e),n=_("Divider","-divider",xe,$e,e,o),i=Ce(()=>{const{common:{cubicBezierEaseInOut:l},self:{color:b,textColor:R,fontWeight:v}}=n.value;return{"--n-bezier":l,"--n-color":b,"--n-text-color":R,"--n-font-weight":v}}),r=t?V("divider",void 0,i,e):void 0;return{mergedClsPrefix:o,cssVars:t?void 0:i,themeClass:r?.themeClass,onRender:r?.onRender}},render(){var e;const{$slots:o,titlePlacement:t,vertical:n,dashed:i,cssVars:r,mergedClsPrefix:l}=this;return(e=this.onRender)===null||e===void 0||e.call(this),B("div",{role:"separator",class:[`${l}-divider`,this.themeClass,{[`${l}-divider--vertical`]:n,[`${l}-divider--no-title`]:!o.default,[`${l}-divider--dashed`]:i,[`${l}-divider--title-position-${t}`]:o.default&&t}],style:r},n?null:B("div",{class:`${l}-divider__line ${l}-divider__line--left`}),!n&&o.default?B(we,null,B("div",{class:`${l}-divider__title`},this.$slots),B("div",{class:`${l}-divider__line ${l}-divider__line--right`})):null)}});function ye(e){const{textColor2:o,modalColor:t,borderColor:n,fontSize:i,primaryColor:r}=e;return{loaderFontSize:i,loaderTextColor:o,loaderColor:t,loaderBorder:`1px solid ${n}`,loadingColor:r}}const Te=oe({name:"Log",common:I,peers:{Scrollbar:le,Code:X},self:ye}),Z=te("n-log"),{computed:ze,defineComponent:Se,h:Le,inject:_e,onMounted:He,ref:Ne,toRef:Be,watch:Pe}=await L("vue"),ke=Se({props:{line:{type:String,default:""}},setup(e){const{trimRef:o,highlightRef:t,languageRef:n,mergedHljsRef:i}=_e(Z),r=Ne(null),l=ze(()=>o.value?e.line.trim():e.line);function b(){r.value&&(r.value.innerHTML=R(n.value,l.value))}function R(v,z){const{value:y}=i;return y&&v&&y.getLanguage(v)?y.highlight(z,{language:v}).value:z}return He(()=>{t.value&&b()}),Pe(Be(e,"line"),()=>{t.value&&b()}),{highlight:t,selfRef:r,maybeTrimmedLines:l}},render(){const{highlight:e,maybeTrimmedLines:o}=this;return Le("pre",{ref:"selfRef"},e?null:o)}}),{defineComponent:Me,h:F}=await L("vue"),Oe=Me({name:"LogLoader",props:{clsPrefix:{type:String,required:!0}},setup(){return{locale:re("Log").localeRef}},render(){const{clsPrefix:e}=this;return F("div",{class:`${e}-log-loader`},F(ne,{clsPrefix:e,strokeWidth:24,scale:.85}),F("span",{class:`${e}-log-loader__content`},this.locale.loading))}}),We=k("log",`
 position: relative;
 box-sizing: border-box;
 transition: border-color .3s var(--n-bezier);
`,[P("pre",`
 white-space: pre-wrap;
 word-break: break-word;
 margin: 0;
 `),k("log-loader",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 box-sizing: border-box;
 position: absolute;
 right: 16px;
 top: 8px;
 height: 34px;
 border-radius: 17px;
 line-height: 34px;
 white-space: nowrap;
 overflow: hidden;
 border: var(--n-loader-border);
 color: var(--n-loader-text-color);
 background-color: var(--n-loader-color);
 font-size: var(--n-loader-font-size);
 `,[ie(),w("content",`
 display: inline-block;
 vertical-align: bottom;
 line-height: 34px;
 padding-left: 40px;
 padding-right: 20px;
 white-space: nowrap;
 `),k("base-loading",`
 color: var(--n-loading-color);
 position: absolute;
 left: 12px;
 top: calc(50% - 10px);
 font-size: 20px;
 width: 20px;
 height: 20px;
 display: inline-block;
 `)])]),{computed:O,defineComponent:Ee,h:S,nextTick:A,provide:Fe,ref:G,toRef:J,Transition:Ie}=await L("vue"),qe=ae,Ve=Object.assign(Object.assign({},_.props),{loading:Boolean,trim:Boolean,log:String,fontSize:{type:Number,default:14},lines:{type:Array,default:()=>[]},lineHeight:{type:Number,default:1.25},language:String,rows:{type:Number,default:15},offsetTop:{type:Number,default:0},offsetBottom:{type:Number,default:0},hljs:Object,onReachTop:Function,onReachBottom:Function,onRequireMore:Function}),Ze=Ee({name:"Log",props:Ve,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:t}=q(e),n=G(!1),i=O(()=>e.language!==void 0),r=O(()=>`calc(${Math.round(e.rows*e.lineHeight*e.fontSize)}px)`),l=O(()=>{const{log:a}=e;return a?a.split(`
`):e.lines}),b=G(null),R=_("Log","-log",We,Te,e,o);function v(a){const c=a.target,$=c.firstElementChild;if(n.value){A(()=>{n.value=!1});return}const x=c.offsetHeight,m=c.scrollTop,T=$.offsetHeight,H=m,N=T-m-x;if(H<=e.offsetTop){const{onReachTop:C,onRequireMore:g}=e;g&&g("top"),C&&C()}if(N<=e.offsetBottom){const{onReachBottom:C,onRequireMore:g}=e;g&&g("bottom"),C&&C()}}const z=qe(y,300);function y(a){if(n.value){A(()=>{n.value=!1});return}if(b.value){const{containerRef:c,contentRef:$}=b.value;if(c&&$){const x=c.offsetHeight,m=c.scrollTop,T=$.offsetHeight,H=m,N=T-m-x,C=a.deltaY;if(H===0&&C<0){const{onRequireMore:g}=e;g&&g("top")}if(N<=0&&C>0){const{onRequireMore:g}=e;g&&g("bottom")}}}}function p(a){const{value:c}=b;if(!c)return;const{silent:$,top:x,position:m}=a;$&&(n.value=!0),x!==void 0?c.scrollTo({left:0,top:x}):(m==="bottom"||m==="top")&&c.scrollTo({position:m})}function s(a=!1){K("log","`scrollToTop` is deprecated, please use `scrollTo({ position: 'top'})` instead."),p({position:"top",silent:a})}function u(a=!1){K("log","`scrollToTop` is deprecated, please use `scrollTo({ position: 'bottom'})` instead."),p({position:"bottom",silent:a})}Fe(Z,{languageRef:J(e,"language"),mergedHljsRef:Q(e),trimRef:J(e,"trim"),highlightRef:i});const h={scrollTo:p},f=O(()=>{const{self:{loaderFontSize:a,loaderTextColor:c,loaderColor:$,loaderBorder:x,loadingColor:m},common:{cubicBezierEaseInOut:T}}=R.value;return{"--n-bezier":T,"--n-loader-font-size":a,"--n-loader-border":x,"--n-loader-color":$,"--n-loader-text-color":c,"--n-loading-color":m}}),d=t?V("log",void 0,f,e):void 0;return Object.assign(Object.assign({},h),{mergedClsPrefix:o,scrollbarRef:b,mergedTheme:R,styleHeight:r,mergedLines:l,scrollToTop:s,scrollToBottom:u,handleWheel:z,handleScroll:v,cssVars:t?void 0:f,themeClass:d?.themeClass,onRender:d?.onRender})},render(){const{mergedClsPrefix:e,mergedTheme:o,onRender:t}=this;return t?.(),S("div",{class:[`${e}-log`,this.themeClass],style:[{lineHeight:this.lineHeight,height:this.styleHeight},this.cssVars],onWheelPassive:this.handleWheel},[S(se,{ref:"scrollbarRef",theme:o.peers.Scrollbar,themeOverrides:o.peerOverrides.Scrollbar,onScroll:this.handleScroll},{default:()=>S(be,{internalNoHighlight:!0,internalFontSize:this.fontSize,theme:o.peers.Code,themeOverrides:o.peerOverrides.Code},{default:()=>this.mergedLines.map((n,i)=>S(ke,{key:i,line:n}))})}),S(Ie,{name:"fade-in-scale-up-transition"},{default:()=>this.loading?S(Oe,{clsPrefix:e}):null})])}});export{be as NCode,Xe as NDivider,Ze as NLog,ve as codeProps,Re as dividerProps,Ve as logProps,pe as self};
