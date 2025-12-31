import{importShared as Z}from"./3d-tiles-renderer.DZNovkLO1767148983502.js";import{useMemo as Se,useRtl as cr}from"./use-rtl.q0hodkC81767148983502.js";import{isSafari as ur}from"./browser.DwR5nDQ71767148983502.js";import{createTheme as dr,derived as hr,changeColor as pe,createInjectionKey as fr,cB as w,cE as a,cM as T,cNotM as Q,c as E,resolveSlotWithTypedProps as vr,resolveWrappedSlot as ae,resolveSlot as ge,useConfig as pr,useTheme as Ie,createKey as be,useThemeClass as gr,call as C}from"./light.Bp388JKA1767148983502.js";import{scrollbarLight as br,Scrollbar as mr,VResizeObserver as xr,getMargin as wr}from"./Scrollbar.BsFc6odp1767148983502.js";import{useStyle as yr}from"./use-style.DGMS3HNI1767148983502.js";import{useLocale as Cr,NBaseClear as $e,NBaseSuffix as zr}from"./Suffix.D4O-Hju71767148983502.js";import{useMergedState as Sr,on as Fe,off as Ae}from"./use-merged-state.qnrvbG9d1767148983502.js";import{useFormItem as $r}from"./Loading.DOiIlXyA1767148983502.js";import{NBaseIcon as _e}from"./Close.BeIyDfIs1767148983502.js";const{defineComponent:Fr,h:me}=await Z("vue"),Ar=Fr({name:"Eye",render(){return me("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},me("path",{d:"M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 0 0-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 0 0 0-17.47C428.89 172.28 347.8 112 255.66 112z",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"}),me("circle",{cx:"256",cy:"256",r:"80",fill:"none",stroke:"currentColor","stroke-miterlimit":"10","stroke-width":"32"}))}}),{defineComponent:_r,h:N}=await Z("vue"),Rr=_r({name:"EyeOff",render(){return N("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},N("path",{d:"M432 448a15.92 15.92 0 0 1-11.31-4.69l-352-352a16 16 0 0 1 22.62-22.62l352 352A16 16 0 0 1 432 448z",fill:"currentColor"}),N("path",{d:"M255.66 384c-41.49 0-81.5-12.28-118.92-36.5c-34.07-22-64.74-53.51-88.7-91v-.08c19.94-28.57 41.78-52.73 65.24-72.21a2 2 0 0 0 .14-2.94L93.5 161.38a2 2 0 0 0-2.71-.12c-24.92 21-48.05 46.76-69.08 76.92a31.92 31.92 0 0 0-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416a239.13 239.13 0 0 0 75.8-12.58a2 2 0 0 0 .77-3.31l-21.58-21.58a4 4 0 0 0-3.83-1a204.8 204.8 0 0 1-51.16 6.47z",fill:"currentColor"}),N("path",{d:"M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96a227.34 227.34 0 0 0-74.89 12.83a2 2 0 0 0-.75 3.31l21.55 21.55a4 4 0 0 0 3.88 1a192.82 192.82 0 0 1 50.21-6.69c40.69 0 80.58 12.43 118.55 37c34.71 22.4 65.74 53.88 89.76 91a.13.13 0 0 1 0 .16a310.72 310.72 0 0 1-64.12 72.73a2 2 0 0 0-.15 2.95l19.9 19.89a2 2 0 0 0 2.7.13a343.49 343.49 0 0 0 68.64-78.48a32.2 32.2 0 0 0-.1-34.78z",fill:"currentColor"}),N("path",{d:"M256 160a95.88 95.88 0 0 0-21.37 2.4a2 2 0 0 0-1 3.38l112.59 112.56a2 2 0 0 0 3.38-1A96 96 0 0 0 256 160z",fill:"currentColor"}),N("path",{d:"M165.78 233.66a2 2 0 0 0-3.38 1a96 96 0 0 0 115 115a2 2 0 0 0 1-3.38z",fill:"currentColor"}))}}),Er={paddingTiny:"0 8px",paddingSmall:"0 10px",paddingMedium:"0 12px",paddingLarge:"0 14px",clearSize:"16px"};function Tr(r){const{textColor2:f,textColor3:$,textColorDisabled:F,primaryColor:S,primaryColorHover:b,inputColor:s,inputColorDisabled:n,borderColor:v,warningColor:R,warningColorHover:d,errorColor:m,errorColorHover:y,borderRadius:p,lineHeight:i,fontSizeTiny:h,fontSizeSmall:x,fontSizeMedium:A,fontSizeLarge:_,heightTiny:M,heightSmall:j,heightMedium:P,heightLarge:se,actionColor:I,clearColor:W,clearColorHover:B,clearColorPressed:D,placeholderColor:K,placeholderColorDisabled:U,iconColor:ce,iconColorDisabled:ue,iconColorHover:G,iconColorPressed:de,fontWeight:X}=r;return Object.assign(Object.assign({},Er),{fontWeight:X,countTextColorDisabled:F,countTextColor:$,heightTiny:M,heightSmall:j,heightMedium:P,heightLarge:se,fontSizeTiny:h,fontSizeSmall:x,fontSizeMedium:A,fontSizeLarge:_,lineHeight:i,lineHeightTextarea:i,borderRadius:p,iconSize:"16px",groupLabelColor:I,groupLabelTextColor:f,textColor:f,textColorDisabled:F,textDecorationColor:f,caretColor:S,placeholderColor:K,placeholderColorDisabled:U,color:s,colorDisabled:n,colorFocus:s,groupLabelBorder:`1px solid ${v}`,border:`1px solid ${v}`,borderHover:`1px solid ${b}`,borderDisabled:`1px solid ${v}`,borderFocus:`1px solid ${b}`,boxShadowFocus:`0 0 0 2px ${pe(S,{alpha:.2})}`,loadingColor:S,loadingColorWarning:R,borderWarning:`1px solid ${R}`,borderHoverWarning:`1px solid ${d}`,colorFocusWarning:s,borderFocusWarning:`1px solid ${d}`,boxShadowFocusWarning:`0 0 0 2px ${pe(R,{alpha:.2})}`,caretColorWarning:R,loadingColorError:m,borderError:`1px solid ${m}`,borderHoverError:`1px solid ${y}`,colorFocusError:s,borderFocusError:`1px solid ${y}`,boxShadowFocusError:`0 0 0 2px ${pe(m,{alpha:.2})}`,caretColorError:m,clearColor:W,clearColorHover:B,clearColorPressed:D,iconColor:ce,iconColorDisabled:ue,iconColorHover:G,iconColorPressed:de,suffixTextColor:f})}const Br=dr({name:"Input",common:hr,peers:{Scrollbar:br},self:Tr}),ke=fr("n-input"),Pr=w("input",`
 max-width: 100%;
 cursor: text;
 line-height: 1.5;
 z-index: auto;
 outline: none;
 box-sizing: border-box;
 position: relative;
 display: inline-flex;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 transition: background-color .3s var(--n-bezier);
 font-size: var(--n-font-size);
 font-weight: var(--n-font-weight);
 --n-padding-vertical: calc((var(--n-height) - 1.5 * var(--n-font-size)) / 2);
`,[a("input, textarea",`
 overflow: hidden;
 flex-grow: 1;
 position: relative;
 `),a("input-el, textarea-el, input-mirror, textarea-mirror, separator, placeholder",`
 box-sizing: border-box;
 font-size: inherit;
 line-height: 1.5;
 font-family: inherit;
 border: none;
 outline: none;
 background-color: #0000;
 text-align: inherit;
 transition:
 -webkit-text-fill-color .3s var(--n-bezier),
 caret-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 text-decoration-color .3s var(--n-bezier);
 `),a("input-el, textarea-el",`
 -webkit-appearance: none;
 scrollbar-width: none;
 width: 100%;
 min-width: 0;
 text-decoration-color: var(--n-text-decoration-color);
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 background-color: transparent;
 `,[E("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",`
 width: 0;
 height: 0;
 display: none;
 `),E("&::placeholder",`
 color: #0000;
 -webkit-text-fill-color: transparent !important;
 `),E("&:-webkit-autofill ~",[a("placeholder","display: none;")])]),T("round",[Q("textarea","border-radius: calc(var(--n-height) / 2);")]),a("placeholder",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 overflow: hidden;
 color: var(--n-placeholder-color);
 `,[E("span",`
 width: 100%;
 display: inline-block;
 `)]),T("textarea",[a("placeholder","overflow: visible;")]),Q("autosize","width: 100%;"),T("autosize",[a("textarea-el, input-el",`
 position: absolute;
 top: 0;
 left: 0;
 height: 100%;
 `)]),w("input-wrapper",`
 overflow: hidden;
 display: inline-flex;
 flex-grow: 1;
 position: relative;
 padding-left: var(--n-padding-left);
 padding-right: var(--n-padding-right);
 `),a("input-mirror",`
 padding: 0;
 height: var(--n-height);
 line-height: var(--n-height);
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: pre;
 pointer-events: none;
 `),a("input-el",`
 padding: 0;
 height: var(--n-height);
 line-height: var(--n-height);
 `,[E("&[type=password]::-ms-reveal","display: none;"),E("+",[a("placeholder",`
 display: flex;
 align-items: center; 
 `)])]),Q("textarea",[a("placeholder","white-space: nowrap;")]),a("eye",`
 display: flex;
 align-items: center;
 justify-content: center;
 transition: color .3s var(--n-bezier);
 `),T("textarea","width: 100%;",[w("input-word-count",`
 position: absolute;
 right: var(--n-padding-right);
 bottom: var(--n-padding-vertical);
 `),T("resizable",[w("input-wrapper",`
 resize: vertical;
 min-height: var(--n-height);
 `)]),a("textarea-el, textarea-mirror, placeholder",`
 height: 100%;
 padding-left: 0;
 padding-right: 0;
 padding-top: var(--n-padding-vertical);
 padding-bottom: var(--n-padding-vertical);
 word-break: break-word;
 display: inline-block;
 vertical-align: bottom;
 box-sizing: border-box;
 line-height: var(--n-line-height-textarea);
 margin: 0;
 resize: none;
 white-space: pre-wrap;
 scroll-padding-block-end: var(--n-padding-vertical);
 `),a("textarea-mirror",`
 width: 100%;
 pointer-events: none;
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: pre-wrap;
 overflow-wrap: break-word;
 `)]),T("pair",[a("input-el, placeholder","text-align: center;"),a("separator",`
 display: flex;
 align-items: center;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 white-space: nowrap;
 `,[w("icon",`
 color: var(--n-icon-color);
 `),w("base-icon",`
 color: var(--n-icon-color);
 `)])]),T("disabled",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[a("border","border: var(--n-border-disabled);"),a("input-el, textarea-el",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 text-decoration-color: var(--n-text-color-disabled);
 `),a("placeholder","color: var(--n-placeholder-color-disabled);"),a("separator","color: var(--n-text-color-disabled);",[w("icon",`
 color: var(--n-icon-color-disabled);
 `),w("base-icon",`
 color: var(--n-icon-color-disabled);
 `)]),w("input-word-count",`
 color: var(--n-count-text-color-disabled);
 `),a("suffix, prefix","color: var(--n-text-color-disabled);",[w("icon",`
 color: var(--n-icon-color-disabled);
 `),w("internal-icon",`
 color: var(--n-icon-color-disabled);
 `)])]),Q("disabled",[a("eye",`
 color: var(--n-icon-color);
 cursor: pointer;
 `,[E("&:hover",`
 color: var(--n-icon-color-hover);
 `),E("&:active",`
 color: var(--n-icon-color-pressed);
 `)]),E("&:hover",[a("state-border","border: var(--n-border-hover);")]),T("focus","background-color: var(--n-color-focus);",[a("state-border",`
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),a("border, state-border",`
 box-sizing: border-box;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border-radius: inherit;
 border: var(--n-border);
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),a("state-border",`
 border-color: #0000;
 z-index: 1;
 `),a("prefix","margin-right: 4px;"),a("suffix",`
 margin-left: 4px;
 `),a("suffix, prefix",`
 transition: color .3s var(--n-bezier);
 flex-wrap: nowrap;
 flex-shrink: 0;
 line-height: var(--n-height);
 white-space: nowrap;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 color: var(--n-suffix-text-color);
 `,[w("base-loading",`
 font-size: var(--n-icon-size);
 margin: 0 2px;
 color: var(--n-loading-color);
 `),w("base-clear",`
 font-size: var(--n-icon-size);
 `,[a("placeholder",[w("base-icon",`
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)])]),E(">",[w("icon",`
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)]),w("base-icon",`
 font-size: var(--n-icon-size);
 `)]),w("input-word-count",`
 pointer-events: none;
 line-height: 1.5;
 font-size: .85em;
 color: var(--n-count-text-color);
 transition: color .3s var(--n-bezier);
 margin-left: 4px;
 font-variant: tabular-nums;
 `),["warning","error"].map(r=>T(`${r}-status`,[Q("disabled",[w("base-loading",`
 color: var(--n-loading-color-${r})
 `),a("input-el, textarea-el",`
 caret-color: var(--n-caret-color-${r});
 `),a("state-border",`
 border: var(--n-border-${r});
 `),E("&:hover",[a("state-border",`
 border: var(--n-border-hover-${r});
 `)]),E("&:focus",`
 background-color: var(--n-color-focus-${r});
 `,[a("state-border",`
 box-shadow: var(--n-box-shadow-focus-${r});
 border: var(--n-border-focus-${r});
 `)]),T("focus",`
 background-color: var(--n-color-focus-${r});
 `,[a("state-border",`
 box-shadow: var(--n-box-shadow-focus-${r});
 border: var(--n-border-focus-${r});
 `)])])]))]),Ir=w("input",[T("disabled",[a("input-el, textarea-el",`
 -webkit-text-fill-color: var(--n-text-color-disabled);
 `)])]),{ref:kr,watch:Mr}=await Z("vue");function Wr(r){let f=0;for(const $ of r)f++;return f}function le(r){return r===""||r==null}function Dr(r){const f=kr(null);function $(){const{value:b}=r;if(!b?.focus){S();return}const{selectionStart:s,selectionEnd:n,value:v}=b;if(s==null||n==null){S();return}f.value={start:s,end:n,beforeText:v.slice(0,s),afterText:v.slice(n)}}function F(){var b;const{value:s}=f,{value:n}=r;if(!s||!n)return;const{value:v}=n,{start:R,beforeText:d,afterText:m}=s;let y=v.length;if(v.endsWith(m))y=v.length-m.length;else if(v.startsWith(d))y=d.length;else{const p=d[R-1],i=v.indexOf(p,R-1);i!==-1&&(y=i+1)}(b=n.setSelectionRange)===null||b===void 0||b.call(n,y,y)}function S(){f.value=null}return Mr(r,S),{recordCursor:$,restoreCursor:F}}const{computed:Vr,defineComponent:Or,h:Hr,inject:Lr}=await Z("vue"),Re=Or({name:"InputWordCount",setup(r,{slots:f}){const{mergedValueRef:$,maxlengthRef:F,mergedClsPrefixRef:S,countGraphemesRef:b}=Lr(ke),s=Vr(()=>{const{value:n}=$;return n===null||Array.isArray(n)?0:(b.value||Wr)(n)});return()=>{const{value:n}=F,{value:v}=$;return Hr("span",{class:`${S.value}-input-word-count`},vr(f.default,{value:v===null||Array.isArray(v)?"":v},()=>[n===void 0?s.value:`${s.value} / ${n}`]))}}}),{computed:k,defineComponent:Nr,Fragment:jr,getCurrentInstance:Kr,h:l,nextTick:Ee,onMounted:Ur,provide:Gr,ref:z,toRef:Te,watch:Be,watchEffect:Pe}=await Z("vue"),Xr=Object.assign(Object.assign({},Ie.props),{bordered:{type:Boolean,default:void 0},type:{type:String,default:"text"},placeholder:[Array,String],defaultValue:{type:[String,Array],default:null},value:[String,Array],disabled:{type:Boolean,default:void 0},size:String,rows:{type:[Number,String],default:3},round:Boolean,minlength:[String,Number],maxlength:[String,Number],clearable:Boolean,autosize:{type:[Boolean,Object],default:!1},pair:Boolean,separator:String,readonly:{type:[String,Boolean],default:!1},passivelyActivated:Boolean,showPasswordOn:String,stateful:{type:Boolean,default:!0},autofocus:Boolean,inputProps:Object,resizable:{type:Boolean,default:!0},showCount:Boolean,loading:{type:Boolean,default:void 0},allowInput:Function,renderCount:Function,onMousedown:Function,onKeydown:Function,onKeyup:[Function,Array],onInput:[Function,Array],onFocus:[Function,Array],onBlur:[Function,Array],onClick:[Function,Array],onChange:[Function,Array],onClear:[Function,Array],countGraphemes:Function,status:String,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],textDecoration:[String,Array],attrSize:{type:Number,default:20},onInputBlur:[Function,Array],onInputFocus:[Function,Array],onDeactivate:[Function,Array],onActivate:[Function,Array],onWrapperFocus:[Function,Array],onWrapperBlur:[Function,Array],internalDeactivateOnEnter:Boolean,internalForceFocus:Boolean,internalLoadingBeforeSuffix:{type:Boolean,default:!0},showPasswordToggle:Boolean}),an=Nr({name:"Input",props:Xr,slots:Object,setup(r){const{mergedClsPrefixRef:f,mergedBorderedRef:$,inlineThemeDisabled:F,mergedRtlRef:S}=pr(r),b=Ie("Input","-input",Pr,Br,r,f);ur&&yr("-input-safari",Ir,f);const s=z(null),n=z(null),v=z(null),R=z(null),d=z(null),m=z(null),y=z(null),p=Dr(y),i=z(null),{localeRef:h}=Cr("Input"),x=z(r.defaultValue),A=Te(r,"value"),_=Sr(A,x),M=$r(r),{mergedSizeRef:j,mergedDisabledRef:P,mergedStatusRef:se}=M,I=z(!1),W=z(!1),B=z(!1),D=z(!1);let K=null;const U=k(()=>{const{placeholder:e,pair:o}=r;return o?Array.isArray(e)?e:e===void 0?["",""]:[e,e]:e===void 0?[h.value.placeholder]:[e]}),ce=k(()=>{const{value:e}=B,{value:o}=_,{value:t}=U;return!e&&(le(o)||Array.isArray(o)&&le(o[0]))&&t[0]}),ue=k(()=>{const{value:e}=B,{value:o}=_,{value:t}=U;return!e&&t[1]&&(le(o)||Array.isArray(o)&&le(o[1]))}),G=Se(()=>r.internalForceFocus||I.value),de=Se(()=>{if(P.value||r.readonly||!r.clearable||!G.value&&!W.value)return!1;const{value:e}=_,{value:o}=G;return r.pair?!!(Array.isArray(e)&&(e[0]||e[1]))&&(W.value||o):!!e&&(W.value||o)}),X=k(()=>{const{showPasswordOn:e}=r;if(e)return e;if(r.showPasswordToggle)return"click"}),Y=z(!1),Me=k(()=>{const{textDecoration:e}=r;return e?Array.isArray(e)?e.map(o=>({textDecoration:o})):[{textDecoration:e}]:["",""]}),xe=z(void 0),We=()=>{var e,o;if(r.type==="textarea"){const{autosize:t}=r;if(t&&(xe.value=(o=(e=i.value)===null||e===void 0?void 0:e.$el)===null||o===void 0?void 0:o.offsetWidth),!n.value||typeof t=="boolean")return;const{paddingTop:u,paddingBottom:g,lineHeight:c}=window.getComputedStyle(n.value),V=Number(u.slice(0,-2)),O=Number(g.slice(0,-2)),H=Number(c.slice(0,-2)),{value:q}=v;if(!q)return;if(t.minRows){const J=Math.max(t.minRows,1),ve=`${V+O+H*J}px`;q.style.minHeight=ve}if(t.maxRows){const J=`${V+O+H*t.maxRows}px`;q.style.maxHeight=J}}},De=k(()=>{const{maxlength:e}=r;return e===void 0?void 0:Number(e)});Ur(()=>{const{value:e}=_;Array.isArray(e)||fe(e)});const Ve=Kr().proxy;function ee(e,o){const{onUpdateValue:t,"onUpdate:value":u,onInput:g}=r,{nTriggerFormInput:c}=M;t&&C(t,e,o),u&&C(u,e,o),g&&C(g,e,o),x.value=e,c()}function oe(e,o){const{onChange:t}=r,{nTriggerFormChange:u}=M;t&&C(t,e,o),x.value=e,u()}function Oe(e){const{onBlur:o}=r,{nTriggerFormBlur:t}=M;o&&C(o,e),t()}function He(e){const{onFocus:o}=r,{nTriggerFormFocus:t}=M;o&&C(o,e),t()}function Le(e){const{onClear:o}=r;o&&C(o,e)}function Ne(e){const{onInputBlur:o}=r;o&&C(o,e)}function je(e){const{onInputFocus:o}=r;o&&C(o,e)}function Ke(){const{onDeactivate:e}=r;e&&C(e)}function Ue(){const{onActivate:e}=r;e&&C(e)}function Ge(e){const{onClick:o}=r;o&&C(o,e)}function Xe(e){const{onWrapperFocus:o}=r;o&&C(o,e)}function Ye(e){const{onWrapperBlur:o}=r;o&&C(o,e)}function qe(){B.value=!0}function Je(e){B.value=!1,e.target===m.value?re(e,1):re(e,0)}function re(e,o=0,t="input"){const u=e.target.value;if(fe(u),e instanceof InputEvent&&!e.isComposing&&(B.value=!1),r.type==="textarea"){const{value:c}=i;c&&c.syncUnifiedContainer()}if(K=u,B.value)return;p.recordCursor();const g=Qe(u);if(g)if(!r.pair)t==="input"?ee(u,{source:o}):oe(u,{source:o});else{let{value:c}=_;Array.isArray(c)?c=[c[0],c[1]]:c=["",""],c[o]=u,t==="input"?ee(c,{source:o}):oe(c,{source:o})}Ve.$forceUpdate(),g||Ee(p.restoreCursor)}function Qe(e){const{countGraphemes:o,maxlength:t,minlength:u}=r;if(o){let c;if(t!==void 0&&(c===void 0&&(c=o(e)),c>Number(t))||u!==void 0&&(c===void 0&&(c=o(e)),c<Number(t)))return!1}const{allowInput:g}=r;return typeof g=="function"?g(e):!0}function Ze(e){Ne(e),e.relatedTarget===s.value&&Ke(),e.relatedTarget!==null&&(e.relatedTarget===d.value||e.relatedTarget===m.value||e.relatedTarget===n.value)||(D.value=!1),ne(e,"blur"),y.value=null}function eo(e,o){je(e),I.value=!0,D.value=!0,Ue(),ne(e,"focus"),o===0?y.value=d.value:o===1?y.value=m.value:o===2&&(y.value=n.value)}function oo(e){r.passivelyActivated&&(Ye(e),ne(e,"blur"))}function ro(e){r.passivelyActivated&&(I.value=!0,Xe(e),ne(e,"focus"))}function ne(e,o){e.relatedTarget!==null&&(e.relatedTarget===d.value||e.relatedTarget===m.value||e.relatedTarget===n.value||e.relatedTarget===s.value)||(o==="focus"?(He(e),I.value=!0):o==="blur"&&(Oe(e),I.value=!1))}function no(e,o){re(e,o,"change")}function to(e){Ge(e)}function io(e){Le(e),we()}function we(){r.pair?(ee(["",""],{source:"clear"}),oe(["",""],{source:"clear"})):(ee("",{source:"clear"}),oe("",{source:"clear"}))}function ao(e){const{onMousedown:o}=r;o&&o(e);const{tagName:t}=e.target;if(t!=="INPUT"&&t!=="TEXTAREA"){if(r.resizable){const{value:u}=s;if(u){const{left:g,top:c,width:V,height:O}=u.getBoundingClientRect(),H=14;if(g+V-H<e.clientX&&e.clientX<g+V&&c+O-H<e.clientY&&e.clientY<c+O)return}}e.preventDefault(),I.value||ye()}}function lo(){var e;W.value=!0,r.type==="textarea"&&((e=i.value)===null||e===void 0||e.handleMouseEnterWrapper())}function so(){var e;W.value=!1,r.type==="textarea"&&((e=i.value)===null||e===void 0||e.handleMouseLeaveWrapper())}function co(){P.value||X.value==="click"&&(Y.value=!Y.value)}function uo(e){if(P.value)return;e.preventDefault();const o=u=>{u.preventDefault(),Ae("mouseup",document,o)};if(Fe("mouseup",document,o),X.value!=="mousedown")return;Y.value=!0;const t=()=>{Y.value=!1,Ae("mouseup",document,t)};Fe("mouseup",document,t)}function ho(e){r.onKeyup&&C(r.onKeyup,e)}function fo(e){switch(r.onKeydown&&C(r.onKeydown,e),e.key){case"Escape":he();break;case"Enter":vo(e);break}}function vo(e){var o,t;if(r.passivelyActivated){const{value:u}=D;if(u){r.internalDeactivateOnEnter&&he();return}e.preventDefault(),r.type==="textarea"?(o=n.value)===null||o===void 0||o.focus():(t=d.value)===null||t===void 0||t.focus()}}function he(){r.passivelyActivated&&(D.value=!1,Ee(()=>{var e;(e=s.value)===null||e===void 0||e.focus()}))}function ye(){var e,o,t;P.value||(r.passivelyActivated?(e=s.value)===null||e===void 0||e.focus():((o=n.value)===null||o===void 0||o.focus(),(t=d.value)===null||t===void 0||t.focus()))}function po(){var e;!((e=s.value)===null||e===void 0)&&e.contains(document.activeElement)&&document.activeElement.blur()}function go(){var e,o;(e=n.value)===null||e===void 0||e.select(),(o=d.value)===null||o===void 0||o.select()}function bo(){P.value||(n.value?n.value.focus():d.value&&d.value.focus())}function mo(){const{value:e}=s;e?.contains(document.activeElement)&&e!==document.activeElement&&he()}function xo(e){if(r.type==="textarea"){const{value:o}=n;o?.scrollTo(e)}else{const{value:o}=d;o?.scrollTo(e)}}function fe(e){const{type:o,pair:t,autosize:u}=r;if(!t&&u)if(o==="textarea"){const{value:g}=v;g&&(g.textContent=`${e??""}\r
`)}else{const{value:g}=R;g&&(e?g.textContent=e:g.innerHTML="&nbsp;")}}function wo(){We()}const Ce=z({top:"0"});function yo(e){var o;const{scrollTop:t}=e.target;Ce.value.top=`${-t}px`,(o=i.value)===null||o===void 0||o.syncUnifiedContainer()}let te=null;Pe(()=>{const{autosize:e,type:o}=r;e&&o==="textarea"?te=Be(_,t=>{!Array.isArray(t)&&t!==K&&fe(t)}):te?.()});let ie=null;Pe(()=>{r.type==="textarea"?ie=Be(_,e=>{var o;!Array.isArray(e)&&e!==K&&((o=i.value)===null||o===void 0||o.syncUnifiedContainer())}):ie?.()}),Gr(ke,{mergedValueRef:_,maxlengthRef:De,mergedClsPrefixRef:f,countGraphemesRef:Te(r,"countGraphemes")});const Co={wrapperElRef:s,inputElRef:d,textareaElRef:n,isCompositing:B,clear:we,focus:ye,blur:po,select:go,deactivate:mo,activate:bo,scrollTo:xo},zo=cr("Input",S,f),ze=k(()=>{const{value:e}=j,{common:{cubicBezierEaseInOut:o},self:{color:t,borderRadius:u,textColor:g,caretColor:c,caretColorError:V,caretColorWarning:O,textDecorationColor:H,border:q,borderDisabled:J,borderHover:ve,borderFocus:So,placeholderColor:$o,placeholderColorDisabled:Fo,lineHeightTextarea:Ao,colorDisabled:_o,colorFocus:Ro,textColorDisabled:Eo,boxShadowFocus:To,iconSize:Bo,colorFocusWarning:Po,boxShadowFocusWarning:Io,borderWarning:ko,borderFocusWarning:Mo,borderHoverWarning:Wo,colorFocusError:Do,boxShadowFocusError:Vo,borderError:Oo,borderFocusError:Ho,borderHoverError:Lo,clearSize:No,clearColor:jo,clearColorHover:Ko,clearColorPressed:Uo,iconColor:Go,iconColorDisabled:Xo,suffixTextColor:Yo,countTextColor:qo,countTextColorDisabled:Jo,iconColorHover:Qo,iconColorPressed:Zo,loadingColor:er,loadingColorError:or,loadingColorWarning:rr,fontWeight:nr,[be("padding",e)]:tr,[be("fontSize",e)]:ir,[be("height",e)]:ar}}=b.value,{left:lr,right:sr}=wr(tr);return{"--n-bezier":o,"--n-count-text-color":qo,"--n-count-text-color-disabled":Jo,"--n-color":t,"--n-font-size":ir,"--n-font-weight":nr,"--n-border-radius":u,"--n-height":ar,"--n-padding-left":lr,"--n-padding-right":sr,"--n-text-color":g,"--n-caret-color":c,"--n-text-decoration-color":H,"--n-border":q,"--n-border-disabled":J,"--n-border-hover":ve,"--n-border-focus":So,"--n-placeholder-color":$o,"--n-placeholder-color-disabled":Fo,"--n-icon-size":Bo,"--n-line-height-textarea":Ao,"--n-color-disabled":_o,"--n-color-focus":Ro,"--n-text-color-disabled":Eo,"--n-box-shadow-focus":To,"--n-loading-color":er,"--n-caret-color-warning":O,"--n-color-focus-warning":Po,"--n-box-shadow-focus-warning":Io,"--n-border-warning":ko,"--n-border-focus-warning":Mo,"--n-border-hover-warning":Wo,"--n-loading-color-warning":rr,"--n-caret-color-error":V,"--n-color-focus-error":Do,"--n-box-shadow-focus-error":Vo,"--n-border-error":Oo,"--n-border-focus-error":Ho,"--n-border-hover-error":Lo,"--n-loading-color-error":or,"--n-clear-color":jo,"--n-clear-size":No,"--n-clear-color-hover":Ko,"--n-clear-color-pressed":Uo,"--n-icon-color":Go,"--n-icon-color-hover":Qo,"--n-icon-color-pressed":Zo,"--n-icon-color-disabled":Xo,"--n-suffix-text-color":Yo}}),L=F?gr("input",k(()=>{const{value:e}=j;return e[0]}),ze,r):void 0;return Object.assign(Object.assign({},Co),{wrapperElRef:s,inputElRef:d,inputMirrorElRef:R,inputEl2Ref:m,textareaElRef:n,textareaMirrorElRef:v,textareaScrollbarInstRef:i,rtlEnabled:zo,uncontrolledValue:x,mergedValue:_,passwordVisible:Y,mergedPlaceholder:U,showPlaceholder1:ce,showPlaceholder2:ue,mergedFocus:G,isComposing:B,activated:D,showClearButton:de,mergedSize:j,mergedDisabled:P,textDecorationStyle:Me,mergedClsPrefix:f,mergedBordered:$,mergedShowPasswordOn:X,placeholderStyle:Ce,mergedStatus:se,textAreaScrollContainerWidth:xe,handleTextAreaScroll:yo,handleCompositionStart:qe,handleCompositionEnd:Je,handleInput:re,handleInputBlur:Ze,handleInputFocus:eo,handleWrapperBlur:oo,handleWrapperFocus:ro,handleMouseEnter:lo,handleMouseLeave:so,handleMouseDown:ao,handleChange:no,handleClick:to,handleClear:io,handlePasswordToggleClick:co,handlePasswordToggleMousedown:uo,handleWrapperKeydown:fo,handleWrapperKeyup:ho,handleTextAreaMirrorResize:wo,getTextareaScrollContainer:()=>n.value,mergedTheme:b,cssVars:F?void 0:ze,themeClass:L?.themeClass,onRender:L?.onRender})},render(){var r,f,$,F,S,b,s;const{mergedClsPrefix:n,mergedStatus:v,themeClass:R,type:d,countGraphemes:m,onRender:y}=this,p=this.$slots;return y?.(),l("div",{ref:"wrapperElRef",class:[`${n}-input`,R,v&&`${n}-input--${v}-status`,{[`${n}-input--rtl`]:this.rtlEnabled,[`${n}-input--disabled`]:this.mergedDisabled,[`${n}-input--textarea`]:d==="textarea",[`${n}-input--resizable`]:this.resizable&&!this.autosize,[`${n}-input--autosize`]:this.autosize,[`${n}-input--round`]:this.round&&d!=="textarea",[`${n}-input--pair`]:this.pair,[`${n}-input--focus`]:this.mergedFocus,[`${n}-input--stateful`]:this.stateful}],style:this.cssVars,tabindex:!this.mergedDisabled&&this.passivelyActivated&&!this.activated?0:void 0,onFocus:this.handleWrapperFocus,onBlur:this.handleWrapperBlur,onClick:this.handleClick,onMousedown:this.handleMouseDown,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd,onKeyup:this.handleWrapperKeyup,onKeydown:this.handleWrapperKeydown},l("div",{class:`${n}-input-wrapper`},ae(p.prefix,i=>i&&l("div",{class:`${n}-input__prefix`},i)),d==="textarea"?l(mr,{ref:"textareaScrollbarInstRef",class:`${n}-input__textarea`,container:this.getTextareaScrollContainer,theme:(f=(r=this.theme)===null||r===void 0?void 0:r.peers)===null||f===void 0?void 0:f.Scrollbar,themeOverrides:(F=($=this.themeOverrides)===null||$===void 0?void 0:$.peers)===null||F===void 0?void 0:F.Scrollbar,triggerDisplayManually:!0,useUnifiedContainer:!0,internalHoistYRail:!0},{default:()=>{var i,h;const{textAreaScrollContainerWidth:x}=this,A={width:this.autosize&&x&&`${x}px`};return l(jr,null,l("textarea",Object.assign({},this.inputProps,{ref:"textareaElRef",class:[`${n}-input__textarea-el`,(i=this.inputProps)===null||i===void 0?void 0:i.class],autofocus:this.autofocus,rows:Number(this.rows),placeholder:this.placeholder,value:this.mergedValue,disabled:this.mergedDisabled,maxlength:m?void 0:this.maxlength,minlength:m?void 0:this.minlength,readonly:this.readonly,tabindex:this.passivelyActivated&&!this.activated?-1:void 0,style:[this.textDecorationStyle[0],(h=this.inputProps)===null||h===void 0?void 0:h.style,A],onBlur:this.handleInputBlur,onFocus:_=>{this.handleInputFocus(_,2)},onInput:this.handleInput,onChange:this.handleChange,onScroll:this.handleTextAreaScroll})),this.showPlaceholder1?l("div",{class:`${n}-input__placeholder`,style:[this.placeholderStyle,A],key:"placeholder"},this.mergedPlaceholder[0]):null,this.autosize?l(xr,{onResize:this.handleTextAreaMirrorResize},{default:()=>l("div",{ref:"textareaMirrorElRef",class:`${n}-input__textarea-mirror`,key:"mirror"})}):null)}}):l("div",{class:`${n}-input__input`},l("input",Object.assign({type:d==="password"&&this.mergedShowPasswordOn&&this.passwordVisible?"text":d},this.inputProps,{ref:"inputElRef",class:[`${n}-input__input-el`,(S=this.inputProps)===null||S===void 0?void 0:S.class],style:[this.textDecorationStyle[0],(b=this.inputProps)===null||b===void 0?void 0:b.style],tabindex:this.passivelyActivated&&!this.activated?-1:(s=this.inputProps)===null||s===void 0?void 0:s.tabindex,placeholder:this.mergedPlaceholder[0],disabled:this.mergedDisabled,maxlength:m?void 0:this.maxlength,minlength:m?void 0:this.minlength,value:Array.isArray(this.mergedValue)?this.mergedValue[0]:this.mergedValue,readonly:this.readonly,autofocus:this.autofocus,size:this.attrSize,onBlur:this.handleInputBlur,onFocus:i=>{this.handleInputFocus(i,0)},onInput:i=>{this.handleInput(i,0)},onChange:i=>{this.handleChange(i,0)}})),this.showPlaceholder1?l("div",{class:`${n}-input__placeholder`},l("span",null,this.mergedPlaceholder[0])):null,this.autosize?l("div",{class:`${n}-input__input-mirror`,key:"mirror",ref:"inputMirrorElRef"}," "):null),!this.pair&&ae(p.suffix,i=>i||this.clearable||this.showCount||this.mergedShowPasswordOn||this.loading!==void 0?l("div",{class:`${n}-input__suffix`},[ae(p["clear-icon-placeholder"],h=>(this.clearable||h)&&l($e,{clsPrefix:n,show:this.showClearButton,onClear:this.handleClear},{placeholder:()=>h,icon:()=>{var x,A;return(A=(x=this.$slots)["clear-icon"])===null||A===void 0?void 0:A.call(x)}})),this.internalLoadingBeforeSuffix?null:i,this.loading!==void 0?l(zr,{clsPrefix:n,loading:this.loading,showArrow:!1,showClear:!1,style:this.cssVars}):null,this.internalLoadingBeforeSuffix?i:null,this.showCount&&this.type!=="textarea"?l(Re,null,{default:h=>{var x;const{renderCount:A}=this;return A?A(h):(x=p.count)===null||x===void 0?void 0:x.call(p,h)}}):null,this.mergedShowPasswordOn&&this.type==="password"?l("div",{class:`${n}-input__eye`,onMousedown:this.handlePasswordToggleMousedown,onClick:this.handlePasswordToggleClick},this.passwordVisible?ge(p["password-visible-icon"],()=>[l(_e,{clsPrefix:n},{default:()=>l(Ar,null)})]):ge(p["password-invisible-icon"],()=>[l(_e,{clsPrefix:n},{default:()=>l(Rr,null)})])):null]):null)),this.pair?l("span",{class:`${n}-input__separator`},ge(p.separator,()=>[this.separator])):null,this.pair?l("div",{class:`${n}-input-wrapper`},l("div",{class:`${n}-input__input`},l("input",{ref:"inputEl2Ref",type:this.type,class:`${n}-input__input-el`,tabindex:this.passivelyActivated&&!this.activated?-1:void 0,placeholder:this.mergedPlaceholder[1],disabled:this.mergedDisabled,maxlength:m?void 0:this.maxlength,minlength:m?void 0:this.minlength,value:Array.isArray(this.mergedValue)?this.mergedValue[1]:void 0,readonly:this.readonly,style:this.textDecorationStyle[1],onBlur:this.handleInputBlur,onFocus:i=>{this.handleInputFocus(i,1)},onInput:i=>{this.handleInput(i,1)},onChange:i=>{this.handleChange(i,1)}}),this.showPlaceholder2?l("div",{class:`${n}-input__placeholder`},l("span",null,this.mergedPlaceholder[1])):null),ae(p.suffix,i=>(this.clearable||i)&&l("div",{class:`${n}-input__suffix`},[this.clearable&&l($e,{clsPrefix:n,show:this.showClearButton,onClear:this.handleClear},{icon:()=>{var h;return(h=p["clear-icon"])===null||h===void 0?void 0:h.call(p)},placeholder:()=>{var h;return(h=p["clear-icon-placeholder"])===null||h===void 0?void 0:h.call(p)}}),i]))):null,this.mergedBordered?l("div",{class:`${n}-input__border`}):null,this.mergedBordered?l("div",{class:`${n}-input__state-border`}):null,this.showCount&&d==="textarea"?l(Re,null,{default:i=>{var h;const{renderCount:x}=this;return x?x(i):(h=p.count)===null||h===void 0?void 0:h.call(p,i)}}):null)}});export{Ar as EyeIcon,an as NInput,Er as commonVariables,Br as inputLight,Xr as inputProps};
