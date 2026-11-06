import{importShared as V}from"./3d-tiles-renderer.DcET3QoP1793933382902.js";import{cB as d,c as x,cE as v,useConfig as je,rgba as R,toHslaString as F,hsva as Y,hsv2hsl as ke,toRgbaString as H,hsv2rgb as N,toHexaString as O,hsla as ne,toHsvaString as J,hsl2hsv as Le,hsl2rgb as ze,rgb2hsv as De,rgb2hsl as Me,createInjectionKey as dt,toHexString as he,toHslString as Ie,toRgbString as _e,toHsvString as Fe,warn as ct,cM as qe,useTheme as Ge,createKey as Ee,useThemeClass as pt,call as be}from"./light.DuSxoRPo1793933382902.js";import{on as ie,off as ae,useMergedState as Ne}from"./use-merged-state.Dio8Wvvf1793933382902.js";import{NInput as ht}from"./Input.BhI2cGz71793933382902.js";import{useStyle as ft}from"./use-style.Bkjnjxgx1793933382902.js";import{fadeInScaleUpTransition as mt}from"./Card.Djay_3lm1793933382902.js";import{Binder as bt,VTarget as gt,VFollower as vt,useAdjustedTo as He}from"./Popover.CLMMxNNP1793933382902.js";import{clickoutside as xt}from"./keep.C3PC6ed_1793933382902.js";import{useFormItem as wt}from"./Loading.B9nbN0PI1793933382902.js";import{useLocale as kt}from"./light.DdQWvR4Y1793933382902.js";import{isMounted as yt}from"./use-rtl.DYUZNIs91793933382902.js";import{getPreciseEventTarget as Ct}from"./Scrollbar.DMtfl89p1793933382902.js";import{colorPickerLight as $t}from"./light.C3AXPB-c1793933382902.js";import{Button as ge}from"./Button.k-7joR-31793933382902.js";const St=d("input-group",`
 display: inline-flex;
 width: 100%;
 flex-wrap: nowrap;
 vertical-align: bottom;
`,[x(">",[d("input",[x("&:not(:last-child)",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),x("&:not(:first-child)",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 margin-left: -1px!important;
 `)]),d("button",[x("&:not(:last-child)",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `,[v("state-border, border",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)]),x("&:not(:first-child)",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `,[v("state-border, border",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])]),x("*",[x("&:not(:last-child)",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `,[x(">",[d("input",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),d("base-selection",[d("base-selection-label",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),d("base-selection-tags",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),v("box-shadow, border, state-border",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)])])]),x("&:not(:first-child)",`
 margin-left: -1px!important;
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `,[x(">",[d("input",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),d("base-selection",[d("base-selection-label",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),d("base-selection-tags",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),v("box-shadow, border, state-border",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])])])])])]),{defineComponent:Ut,h:At}=await V("vue"),Rt={},Vt=Ut({name:"InputGroup",props:Rt,setup(e){const{mergedClsPrefixRef:t}=je(e);return ft("-input-group",St,t),{mergedClsPrefix:t}},render(){const{mergedClsPrefix:e}=this;return At("div",{class:`${e}-input-group`},this.$slots)}});function Pt(e,t){switch(e[0]){case"hex":return t?"#000000FF":"#000000";case"rgb":return t?"rgba(0, 0, 0, 1)":"rgb(0, 0, 0)";case"hsl":return t?"hsla(0, 0%, 0%, 1)":"hsl(0, 0%, 0%)";case"hsv":return t?"hsva(0, 0%, 0%, 1)":"hsv(0, 0%, 0%)"}return"#000000"}function fe(e){return e===null?null:/^ *#/.test(e)?"hex":e.includes("rgb")?"rgb":e.includes("hsl")?"hsl":e.includes("hsv")?"hsv":null}function zt(e,t=[255,255,255],a="AA"){const[o,i,n,l]=R(F(e));if(l===1){const L=ve([o,i,n]),z=ve(t);return(Math.max(L,z)+.05)/(Math.min(L,z)+.05)>=(a==="AA"?4.5:7)}const s=Math.round(o*l+t[0]*(1-l)),h=Math.round(i*l+t[1]*(1-l)),P=Math.round(n*l+t[2]*(1-l)),B=ve([s,h,P]),U=ve(t);return(Math.max(B,U)+.05)/(Math.min(B,U)+.05)>=(a==="AA"?4.5:7)}function ve(e){const[t,a,o]=e.map(i=>(i/=255,i<=.03928?i/12.92:Math.pow((i+.055)/1.055,2.4)));return .2126*t+.7152*a+.0722*o}function Dt(e){return e=Math.round(e),e>=360?359:e<0?0:e}function Mt(e){return e=Math.round(e*100)/100,e>1?1:e<0?0:e}const It={rgb:{hex(e){return O(R(e))},hsl(e){const[t,a,o,i]=R(e);return F([...Me(t,a,o),i])},hsv(e){const[t,a,o,i]=R(e);return J([...De(t,a,o),i])}},hex:{rgb(e){return H(R(e))},hsl(e){const[t,a,o,i]=R(e);return F([...Me(t,a,o),i])},hsv(e){const[t,a,o,i]=R(e);return J([...De(t,a,o),i])}},hsl:{hex(e){const[t,a,o,i]=ne(e);return O([...ze(t,a,o),i])},rgb(e){const[t,a,o,i]=ne(e);return H([...ze(t,a,o),i])},hsv(e){const[t,a,o,i]=ne(e);return J([...Le(t,a,o),i])}},hsv:{hex(e){const[t,a,o,i]=Y(e);return O([...N(t,a,o),i])},rgb(e){const[t,a,o,i]=Y(e);return H([...N(t,a,o),i])},hsl(e){const[t,a,o,i]=Y(e);return F([...ke(t,a,o),i])}}};function Ke(e,t,a){return a=a||fe(e),a?a===t?e:It[a][t](e):null}const{computed:_t,defineComponent:Ft,h:X,ref:Ht}=await V("vue"),se="12px",Bt=12,Z="6px",Tt=Ft({name:"AlphaSlider",props:{clsPrefix:{type:String,required:!0},rgba:{type:Array,default:null},alpha:{type:Number,default:0},onUpdateAlpha:{type:Function,required:!0},onComplete:Function},setup(e){const t=Ht(null);function a(n){!t.value||!e.rgba||(ie("mousemove",document,o),ie("mouseup",document,i),o(n))}function o(n){const{value:l}=t;if(!l)return;const{width:s,left:h}=l.getBoundingClientRect(),P=(n.clientX-h)/(s-Bt);e.onUpdateAlpha(Mt(P))}function i(){var n;ae("mousemove",document,o),ae("mouseup",document,i),(n=e.onComplete)===null||n===void 0||n.call(e)}return{railRef:t,railBackgroundImage:_t(()=>{const{rgba:n}=e;return n?`linear-gradient(to right, rgba(${n[0]}, ${n[1]}, ${n[2]}, 0) 0%, rgba(${n[0]}, ${n[1]}, ${n[2]}, 1) 100%)`:""}),handleMouseDown:a}},render(){const{clsPrefix:e}=this;return X("div",{class:`${e}-color-picker-slider`,ref:"railRef",style:{height:se,borderRadius:Z},onMousedown:this.handleMouseDown},X("div",{style:{borderRadius:Z,position:"absolute",left:0,right:0,top:0,bottom:0,overflow:"hidden"}},X("div",{class:`${e}-color-picker-checkboard`}),X("div",{class:`${e}-color-picker-slider__image`,style:{backgroundImage:this.railBackgroundImage}})),this.rgba&&X("div",{style:{position:"absolute",left:Z,right:Z,top:0,bottom:0}},X("div",{class:`${e}-color-picker-handle`,style:{left:`calc(${this.alpha*100}% - ${Z})`,borderRadius:Z,width:se,height:se}},X("div",{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:H(this.rgba),borderRadius:Z,width:se,height:se}}))))}}),Be=dt("n-color-picker"),{defineComponent:qt,h:Et,inject:Nt,ref:Ot,watchEffect:jt}=await V("vue");function Lt(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(Number.parseInt(e),255)):!1}function Gt(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(Number.parseInt(e),360)):!1}function Kt(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(Number.parseInt(e),100)):!1}function Xt(e){const t=e.trim();return/^#[0-9a-fA-F]+$/.test(t)?[4,5,7,9].includes(t.length):!1}function Zt(e){return/^\d{1,3}\.?\d*%$/.test(e.trim())?Math.max(0,Math.min(Number.parseInt(e)/100,100)):!1}const Wt={paddingSmall:"0 4px"},Oe=qt({name:"ColorInputUnit",props:{label:{type:String,required:!0},value:{type:[Number,String],default:null},showAlpha:Boolean,onUpdateValue:{type:Function,required:!0}},setup(e){const t=Ot(""),{themeRef:a}=Nt(Be,null);jt(()=>{t.value=o()});function o(){const{value:l}=e;if(l===null)return"";const{label:s}=e;return s==="HEX"?l:s==="A"?`${Math.floor(l*100)}%`:String(Math.floor(l))}function i(l){t.value=l}function n(l){let s,h;switch(e.label){case"HEX":h=Xt(l),h&&e.onUpdateValue(l),t.value=o();break;case"H":s=Gt(l),s===!1?t.value=o():e.onUpdateValue(s);break;case"S":case"L":case"V":s=Kt(l),s===!1?t.value=o():e.onUpdateValue(s);break;case"A":s=Zt(l),s===!1?t.value=o():e.onUpdateValue(s);break;case"R":case"G":case"B":s=Lt(l),s===!1?t.value=o():e.onUpdateValue(s);break}}return{mergedTheme:a,inputValue:t,handleInputChange:n,handleInputUpdateValue:i}},render(){const{mergedTheme:e}=this;return Et(ht,{size:"small",placeholder:this.label,theme:e.peers.Input,themeOverrides:e.peerOverrides.Input,builtinThemeOverrides:Wt,value:this.inputValue,onUpdateValue:this.handleInputUpdateValue,onChange:this.handleInputChange,style:this.label==="A"?"flex-grow: 1.25;":""})}}),{defineComponent:Yt,h:ue}=await V("vue"),Jt=Yt({name:"ColorInput",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},modes:{type:Array,required:!0},showAlpha:{type:Boolean,required:!0},value:{type:String,default:null},valueArr:{type:Array,default:null},onUpdateValue:{type:Function,required:!0},onUpdateMode:{type:Function,required:!0}},setup(e){return{handleUnitUpdateValue(t,a){const{showAlpha:o}=e;if(e.mode==="hex"){e.onUpdateValue((o?O:he)(a));return}let i;switch(e.valueArr===null?i=[0,0,0,0]:i=Array.from(e.valueArr),e.mode){case"hsv":i[t]=a,e.onUpdateValue((o?J:Fe)(i));break;case"rgb":i[t]=a,e.onUpdateValue((o?H:_e)(i));break;case"hsl":i[t]=a,e.onUpdateValue((o?F:Ie)(i));break}}}},render(){const{clsPrefix:e,modes:t}=this;return ue("div",{class:`${e}-color-picker-input`},ue("div",{class:`${e}-color-picker-input__mode`,onClick:this.onUpdateMode,style:{cursor:t.length===1?"":"pointer"}},this.mode.toUpperCase()+(this.showAlpha?"A":"")),ue(Vt,null,{default:()=>{const{mode:a,valueArr:o,showAlpha:i}=this;if(a==="hex"){let n=null;try{n=o===null?null:(i?O:he)(o)}catch{}return ue(Oe,{label:"HEX",showAlpha:i,value:n,onUpdateValue:l=>{this.handleUnitUpdateValue(0,l)}})}return(a+(i?"a":"")).split("").map((n,l)=>ue(Oe,{label:n.toUpperCase(),value:o===null?null:o[l],onUpdateValue:s=>{this.handleUnitUpdateValue(l,s)}}))}}))}}),{computed:Qt,defineComponent:er,h:Re}=await V("vue");function tr(e,t){if(t==="hsv"){const[a,o,i,n]=Y(e);return H([...N(a,o,i),n])}return e}function rr(e){const t=document.createElement("canvas").getContext("2d");return t?(t.fillStyle=e,t.fillStyle):"#000000"}const or=er({name:"ColorPickerSwatches",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},swatches:{type:Array,required:!0},onUpdateColor:{type:Function,required:!0}},setup(e){const t=Qt(()=>e.swatches.map(n=>{const l=fe(n);return{value:n,mode:l,legalValue:tr(n,l)}}));function a(n){const{mode:l}=e;let{value:s,mode:h}=n;return h||(h="hex",/^[a-zA-Z]+$/.test(s)?s=rr(s):(ct("color-picker",`color ${s} in swatches is invalid.`),s="#000000")),h===l?s:Ke(s,l,h)}function o(n){e.onUpdateColor(a(n))}function i(n,l){n.key==="Enter"&&o(l)}return{parsedSwatchesRef:t,handleSwatchSelect:o,handleSwatchKeyDown:i}},render(){const{clsPrefix:e}=this;return Re("div",{class:`${e}-color-picker-swatches`},this.parsedSwatchesRef.map(t=>Re("div",{class:`${e}-color-picker-swatch`,tabindex:0,onClick:()=>{this.handleSwatchSelect(t)},onKeydown:a=>{this.handleSwatchKeyDown(a,t)}},Re("div",{class:`${e}-color-picker-swatch__fill`,style:{background:t.legalValue}}))))}}),{defineComponent:nr,h:de,inject:ir}=await V("vue"),ar=nr({name:"ColorPickerTrigger",slots:Object,props:{clsPrefix:{type:String,required:!0},value:{type:String,default:null},hsla:{type:Array,default:null},disabled:Boolean,onClick:Function},setup(e){const{colorPickerSlots:t,renderLabelRef:a}=ir(Be,null);return()=>{const{hsla:o,value:i,clsPrefix:n,onClick:l,disabled:s}=e,h=t.label||a.value;return de("div",{class:[`${n}-color-picker-trigger`,s&&`${n}-color-picker-trigger--disabled`],onClick:s?void 0:l},de("div",{class:`${n}-color-picker-trigger__fill`},de("div",{class:`${n}-color-picker-checkboard`}),de("div",{style:{position:"absolute",left:0,right:0,top:0,bottom:0,backgroundColor:o?F(o):""}}),i&&o?de("div",{class:`${n}-color-picker-trigger__value`,style:{color:zt(o)?"white":"black"}},h?h(i):i):null))}}}),{defineComponent:lr,h:Ve}=await V("vue"),sr=lr({name:"ColorPreview",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},color:{type:String,default:null,validator:e=>{const t=fe(e);return!!(!e||t&&t!=="hsv")}},onUpdateColor:{type:Function,required:!0}},setup(e){function t(a){var o;const i=a.target.value;(o=e.onUpdateColor)===null||o===void 0||o.call(e,Ke(i.toUpperCase(),e.mode,"hex")),a.stopPropagation()}return{handleChange:t}},render(){const{clsPrefix:e}=this;return Ve("div",{class:`${e}-color-picker-preview__preview`},Ve("span",{class:`${e}-color-picker-preview__fill`,style:{background:this.color||"#000000"}}),Ve("input",{class:`${e}-color-picker-preview__input`,type:"color",value:this.color,onChange:this.handleChange}))}}),{defineComponent:ur,h:ce,ref:dr}=await V("vue"),oe="12px",cr=12,W="6px",pr=6,hr="linear-gradient(90deg,red,#ff0 16.66%,#0f0 33.33%,#0ff 50%,#00f 66.66%,#f0f 83.33%,red)",fr=ur({name:"HueSlider",props:{clsPrefix:{type:String,required:!0},hue:{type:Number,required:!0},onUpdateHue:{type:Function,required:!0},onComplete:Function},setup(e){const t=dr(null);function a(n){t.value&&(ie("mousemove",document,o),ie("mouseup",document,i),o(n))}function o(n){const{value:l}=t;if(!l)return;const{width:s,left:h}=l.getBoundingClientRect(),P=Dt((n.clientX-h-pr)/(s-cr)*360);e.onUpdateHue(P)}function i(){var n;ae("mousemove",document,o),ae("mouseup",document,i),(n=e.onComplete)===null||n===void 0||n.call(e)}return{railRef:t,handleMouseDown:a}},render(){const{clsPrefix:e}=this;return ce("div",{class:`${e}-color-picker-slider`,style:{height:oe,borderRadius:W}},ce("div",{ref:"railRef",style:{boxShadow:"inset 0 0 2px 0 rgba(0, 0, 0, .24)",boxSizing:"border-box",backgroundImage:hr,height:oe,borderRadius:W,position:"relative"},onMousedown:this.handleMouseDown},ce("div",{style:{position:"absolute",left:W,right:W,top:0,bottom:0}},ce("div",{class:`${e}-color-picker-handle`,style:{left:`calc((${this.hue}%) / 359 * 100 - ${W})`,borderRadius:W,width:oe,height:oe}},ce("div",{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:`hsl(${this.hue}, 100%, 50%)`,borderRadius:W,width:oe,height:oe}})))))}}),{computed:mr,defineComponent:br,h:pe,ref:gr}=await V("vue"),xe="12px",we="6px",vr=br({name:"Pallete",props:{clsPrefix:{type:String,required:!0},rgba:{type:Array,default:null},displayedHue:{type:Number,required:!0},displayedSv:{type:Array,required:!0},onUpdateSV:{type:Function,required:!0},onComplete:Function},setup(e){const t=gr(null);function a(n){t.value&&(ie("mousemove",document,o),ie("mouseup",document,i),o(n))}function o(n){const{value:l}=t;if(!l)return;const{width:s,height:h,left:P,bottom:B}=l.getBoundingClientRect(),U=(B-n.clientY)/h,j=(n.clientX-P)/s,L=100*(j>1?1:j<0?0:j),z=100*(U>1?1:U<0?0:U);e.onUpdateSV(L,z)}function i(){var n;ae("mousemove",document,o),ae("mouseup",document,i),(n=e.onComplete)===null||n===void 0||n.call(e)}return{palleteRef:t,handleColor:mr(()=>{const{rgba:n}=e;return n?`rgb(${n[0]}, ${n[1]}, ${n[2]})`:""}),handleMouseDown:a}},render(){const{clsPrefix:e}=this;return pe("div",{class:`${e}-color-picker-pallete`,onMousedown:this.handleMouseDown,ref:"palleteRef"},pe("div",{class:`${e}-color-picker-pallete__layer`,style:{backgroundImage:`linear-gradient(90deg, white, hsl(${this.displayedHue}, 100%, 50%))`}}),pe("div",{class:`${e}-color-picker-pallete__layer ${e}-color-picker-pallete__layer--shadowed`,style:{backgroundImage:"linear-gradient(180deg, rgba(0, 0, 0, 0%), rgba(0, 0, 0, 100%))"}}),this.rgba&&pe("div",{class:`${e}-color-picker-handle`,style:{width:xe,height:xe,borderRadius:we,left:`calc(${this.displayedSv[0]}% - ${we})`,bottom:`calc(${this.displayedSv[1]}% - ${we})`}},pe("div",{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:this.handleColor,borderRadius:we,width:xe,height:xe}})))}}),xr=x([d("color-picker",`
 display: inline-block;
 box-sizing: border-box;
 height: var(--n-height);
 font-size: var(--n-font-size);
 width: 100%;
 position: relative;
 `),d("color-picker-panel",`
 margin: 4px 0;
 width: 240px;
 font-size: var(--n-panel-font-size);
 color: var(--n-text-color);
 background-color: var(--n-color);
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 `,[mt(),d("input",`
 text-align: center;
 `)]),d("color-picker-checkboard",`
 background: white; 
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[x("&::after",`
 background-image: linear-gradient(45deg, #DDD 25%, #0000 25%), linear-gradient(-45deg, #DDD 25%, #0000 25%), linear-gradient(45deg, #0000 75%, #DDD 75%), linear-gradient(-45deg, #0000 75%, #DDD 75%);
 background-size: 12px 12px;
 background-position: 0 0, 0 6px, 6px -6px, -6px 0px;
 background-repeat: repeat;
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),d("color-picker-slider",`
 margin-bottom: 8px;
 position: relative;
 box-sizing: border-box;
 `,[v("image",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `),x("&::after",`
 content: "";
 position: absolute;
 border-radius: inherit;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, .24);
 pointer-events: none;
 `)]),d("color-picker-handle",`
 z-index: 1;
 box-shadow: 0 0 2px 0 rgba(0, 0, 0, .45);
 position: absolute;
 background-color: white;
 overflow: hidden;
 `,[v("fill",`
 box-sizing: border-box;
 border: 2px solid white;
 `)]),d("color-picker-pallete",`
 height: 180px;
 position: relative;
 margin-bottom: 8px;
 cursor: crosshair;
 `,[v("layer",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[qe("shadowed",`
 box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, .24);
 `)])]),d("color-picker-preview",`
 display: flex;
 `,[v("sliders",`
 flex: 1 0 auto;
 `),v("preview",`
 position: relative;
 height: 30px;
 width: 30px;
 margin: 0 0 8px 6px;
 border-radius: 50%;
 box-shadow: rgba(0, 0, 0, .15) 0px 0px 0px 1px inset;
 overflow: hidden;
 `),v("fill",`
 display: block;
 width: 30px;
 height: 30px;
 `),v("input",`
 position: absolute;
 top: 0;
 left: 0;
 width: 30px;
 height: 30px;
 opacity: 0;
 z-index: 1;
 `)]),d("color-picker-input",`
 display: flex;
 align-items: center;
 `,[d("input",`
 flex-grow: 1;
 flex-basis: 0;
 `),v("mode",`
 width: 72px;
 text-align: center;
 `)]),d("color-picker-control",`
 padding: 12px;
 `),d("color-picker-action",`
 display: flex;
 margin-top: -4px;
 border-top: 1px solid var(--n-divider-color);
 padding: 8px 12px;
 justify-content: flex-end;
 `,[d("button","margin-left: 8px;")]),d("color-picker-trigger",`
 border: var(--n-border);
 height: 100%;
 box-sizing: border-box;
 border-radius: var(--n-border-radius);
 transition: border-color .3s var(--n-bezier);
 cursor: pointer;
 `,[v("value",`
 white-space: nowrap;
 position: relative;
 `),v("fill",`
 border-radius: var(--n-border-radius);
 position: absolute;
 display: flex;
 align-items: center;
 justify-content: center;
 left: 4px;
 right: 4px;
 top: 4px;
 bottom: 4px;
 `),qe("disabled","cursor: not-allowed"),d("color-picker-checkboard",`
 border-radius: var(--n-border-radius);
 `,[x("&::after",`
 --n-block-size: calc((var(--n-height) - 8px) / 3);
 background-size: calc(var(--n-block-size) * 2) calc(var(--n-block-size) * 2);
 background-position: 0 0, 0 var(--n-block-size), var(--n-block-size) calc(-1 * var(--n-block-size)), calc(-1 * var(--n-block-size)) 0px; 
 `)])]),d("color-picker-swatches",`
 display: grid;
 grid-gap: 8px;
 flex-wrap: wrap;
 position: relative;
 grid-template-columns: repeat(auto-fill, 18px);
 margin-top: 10px;
 `,[d("color-picker-swatch",`
 width: 18px;
 height: 18px;
 background-image: linear-gradient(45deg, #DDD 25%, #0000 25%), linear-gradient(-45deg, #DDD 25%, #0000 25%), linear-gradient(45deg, #0000 75%, #DDD 75%), linear-gradient(-45deg, #0000 75%, #DDD 75%);
 background-size: 8px 8px;
 background-position: 0px 0, 0px 4px, 4px -4px, -4px 0px;
 background-repeat: repeat;
 `,[v("fill",`
 position: relative;
 width: 100%;
 height: 100%;
 border-radius: 3px;
 box-shadow: rgba(0, 0, 0, .15) 0px 0px 0px 1px inset;
 cursor: pointer;
 `),x("&:focus",`
 outline: none;
 `,[v("fill",[x("&::after",`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 background: inherit;
 filter: blur(2px);
 content: "";
 `)])])])])]),{computed:I,defineComponent:wr,h:p,nextTick:kr,provide:yr,ref:_,toRef:Pe,Transition:Cr,watch:$r,watchEffect:Sr,withDirectives:Ur}=await V("vue"),Ar=Object.assign(Object.assign({},Ge.props),{value:String,show:{type:Boolean,default:void 0},defaultShow:Boolean,defaultValue:String,modes:{type:Array,default:()=>["rgb","hex","hsl"]},placement:{type:String,default:"bottom-start"},to:He.propTo,showAlpha:{type:Boolean,default:!0},showPreview:Boolean,swatches:Array,disabled:{type:Boolean,default:void 0},actions:{type:Array,default:null},internalActions:Array,size:String,renderLabel:Function,onComplete:Function,onConfirm:Function,onClear:Function,"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]}),Nr=wr({name:"ColorPicker",props:Ar,slots:Object,setup(e,{slots:t}){const a=_(null);let o=null;const i=wt(e),{mergedSizeRef:n,mergedDisabledRef:l}=i,{localeRef:s}=kt("global"),{mergedClsPrefixRef:h,namespaceRef:P,inlineThemeDisabled:B}=je(e),U=Ge("ColorPicker","-color-picker",xr,$t,e,h);yr(Be,{themeRef:U,renderLabelRef:Pe(e,"renderLabel"),colorPickerSlots:t});const j=_(e.defaultShow),L=Ne(Pe(e,"show"),j);function z(r){const{onUpdateShow:u,"onUpdate:show":f}=e;u&&be(u,r),f&&be(f,r),j.value=r}const{defaultValue:ye}=e,Te=_(ye===void 0?Pt(e.modes,e.showAlpha):ye),k=Ne(Pe(e,"value"),Te),Q=_([k.value]),D=_(0),Ce=I(()=>fe(k.value)),{modes:Xe}=e,A=_(fe(k.value)||Xe[0]||"rgb");function Ze(){const{modes:r}=e,{value:u}=A,f=r.findIndex(m=>m===u);~f?A.value=r[(f+1)%r.length]:A.value="rgb"}let C,$,ee,te,T,q,E,S;const le=I(()=>{const{value:r}=k;if(!r)return null;switch(Ce.value){case"hsv":return Y(r);case"hsl":return[C,$,ee,S]=ne(r),[...Le(C,$,ee),S];case"rgb":case"hex":return[T,q,E,S]=R(r),[...De(T,q,E),S]}}),G=I(()=>{const{value:r}=k;if(!r)return null;switch(Ce.value){case"rgb":case"hex":return R(r);case"hsv":return[C,$,te,S]=Y(r),[...N(C,$,te),S];case"hsl":return[C,$,ee,S]=ne(r),[...ze(C,$,ee),S]}}),$e=I(()=>{const{value:r}=k;if(!r)return null;switch(Ce.value){case"hsl":return ne(r);case"hsv":return[C,$,te,S]=Y(r),[...ke(C,$,te),S];case"rgb":case"hex":return[T,q,E,S]=R(r),[...Me(T,q,E),S]}}),We=I(()=>{switch(A.value){case"rgb":case"hex":return G.value;case"hsv":return le.value;case"hsl":return $e.value}}),me=_(0),Se=_(1),Ue=_([0,0]);function Ye(r,u){const{value:f}=le,m=me.value,b=f?f[3]:1;Ue.value=[r,u];const{showAlpha:c}=e;switch(A.value){case"hsv":g((c?J:Fe)([m,r,u,b]),"cursor");break;case"hsl":g((c?F:Ie)([...ke(m,r,u),b]),"cursor");break;case"rgb":g((c?H:_e)([...N(m,r,u),b]),"cursor");break;case"hex":g((c?O:he)([...N(m,r,u),b]),"cursor");break}}function Je(r){me.value=r;const{value:u}=le;if(!u)return;const[,f,m,b]=u,{showAlpha:c}=e;switch(A.value){case"hsv":g((c?J:Fe)([r,f,m,b]),"cursor");break;case"rgb":g((c?H:_e)([...N(r,f,m),b]),"cursor");break;case"hex":g((c?O:he)([...N(r,f,m),b]),"cursor");break;case"hsl":g((c?F:Ie)([...ke(r,f,m),b]),"cursor");break}}function Qe(r){switch(A.value){case"hsv":[C,$,te]=le.value,g(J([C,$,te,r]),"cursor");break;case"rgb":[T,q,E]=G.value,g(H([T,q,E,r]),"cursor");break;case"hex":[T,q,E]=G.value,g(O([T,q,E,r]),"cursor");break;case"hsl":[C,$,ee]=$e.value,g(F([C,$,ee,r]),"cursor");break}Se.value=r}function g(r,u){u==="cursor"?o=r:o=null;const{nTriggerFormChange:f,nTriggerFormInput:m}=i,{onUpdateValue:b,"onUpdate:value":c}=e;b&&be(b,r),c&&be(c,r),f(),m(),Te.value=r}function et(r){g(r,"input"),kr(re)}function re(r=!0){const{value:u}=k;if(u){const{nTriggerFormChange:f,nTriggerFormInput:m}=i,{onComplete:b}=e;b&&b(u);const{value:c}=Q,{value:y}=D;r&&(c.splice(y+1,c.length,u),D.value=y+1),f(),m()}}function tt(){const{value:r}=D;r-1<0||(g(Q.value[r-1],"input"),re(!1),D.value=r-1)}function rt(){const{value:r}=D;r<0||r+1>=Q.value.length||(g(Q.value[r+1],"input"),re(!1),D.value=r+1)}function ot(){g(null,"input");const{onClear:r}=e;r&&r(),z(!1)}function nt(){const{value:r}=k,{onConfirm:u}=e;u&&u(r),z(!1)}const it=I(()=>D.value>=1),at=I(()=>{const{value:r}=Q;return r.length>1&&D.value<r.length-1});$r(L,r=>{r||(Q.value=[k.value],D.value=0)}),Sr(()=>{if(!(o&&o===k.value)){const{value:r}=le;r&&(me.value=r[0],Se.value=r[3],Ue.value=[r[1],r[2]])}o=null});const Ae=I(()=>{const{value:r}=n,{common:{cubicBezierEaseInOut:u},self:{textColor:f,color:m,panelFontSize:b,boxShadow:c,border:y,borderRadius:w,dividerColor:K,[Ee("height",r)]:st,[Ee("fontSize",r)]:ut}}=U.value;return{"--n-bezier":u,"--n-text-color":f,"--n-color":m,"--n-panel-font-size":b,"--n-font-size":ut,"--n-box-shadow":c,"--n-border":y,"--n-border-radius":w,"--n-height":st,"--n-divider-color":K}}),M=B?pt("color-picker",I(()=>n.value[0]),Ae,e):void 0;function lt(){var r;const{value:u}=G,{value:f}=me,{internalActions:m,modes:b,actions:c}=e,{value:y}=U,{value:w}=h;return p("div",{class:[`${w}-color-picker-panel`,M?.themeClass.value],onDragstart:K=>{K.preventDefault()},style:B?void 0:Ae.value},p("div",{class:`${w}-color-picker-control`},p(vr,{clsPrefix:w,rgba:u,displayedHue:f,displayedSv:Ue.value,onUpdateSV:Ye,onComplete:re}),p("div",{class:`${w}-color-picker-preview`},p("div",{class:`${w}-color-picker-preview__sliders`},p(fr,{clsPrefix:w,hue:f,onUpdateHue:Je,onComplete:re}),e.showAlpha?p(Tt,{clsPrefix:w,rgba:u,alpha:Se.value,onUpdateAlpha:Qe,onComplete:re}):null),e.showPreview?p(sr,{clsPrefix:w,mode:A.value,color:G.value&&he(G.value),onUpdateColor:K=>{g(K,"input")}}):null),p(Jt,{clsPrefix:w,showAlpha:e.showAlpha,mode:A.value,modes:b,onUpdateMode:Ze,value:k.value,valueArr:We.value,onUpdateValue:et}),((r=e.swatches)===null||r===void 0?void 0:r.length)&&p(or,{clsPrefix:w,mode:A.value,swatches:e.swatches,onUpdateColor:K=>{g(K,"input")}})),c?.length?p("div",{class:`${w}-color-picker-action`},c.includes("confirm")&&p(ge,{size:"small",onClick:nt,theme:y.peers.Button,themeOverrides:y.peerOverrides.Button},{default:()=>s.value.confirm}),c.includes("clear")&&p(ge,{size:"small",onClick:ot,disabled:!k.value,theme:y.peers.Button,themeOverrides:y.peerOverrides.Button},{default:()=>s.value.clear})):null,t.action?p("div",{class:`${w}-color-picker-action`},{default:t.action}):m?p("div",{class:`${w}-color-picker-action`},m.includes("undo")&&p(ge,{size:"small",onClick:tt,disabled:!it.value,theme:y.peers.Button,themeOverrides:y.peerOverrides.Button},{default:()=>s.value.undo}),m.includes("redo")&&p(ge,{size:"small",onClick:rt,disabled:!at.value,theme:y.peers.Button,themeOverrides:y.peerOverrides.Button},{default:()=>s.value.redo})):null)}return{mergedClsPrefix:h,namespace:P,selfRef:a,hsla:$e,rgba:G,mergedShow:L,mergedDisabled:l,isMounted:yt(),adjustedTo:He(e),mergedValue:k,handleTriggerClick(){z(!0)},handleClickOutside(r){var u;!((u=a.value)===null||u===void 0)&&u.contains(Ct(r))||z(!1)},renderPanel:lt,cssVars:B?void 0:Ae,themeClass:M?.themeClass,onRender:M?.onRender}},render(){const{mergedClsPrefix:e,onRender:t}=this;return t?.(),p("div",{class:[this.themeClass,`${e}-color-picker`],ref:"selfRef",style:this.cssVars},p(bt,null,{default:()=>[p(gt,null,{default:()=>p(ar,{clsPrefix:e,value:this.mergedValue,hsla:this.hsla,disabled:this.mergedDisabled,onClick:this.handleTriggerClick})}),p(vt,{placement:this.placement,show:this.mergedShow,containerClass:this.namespace,teleportDisabled:this.adjustedTo===He.tdkey,to:this.adjustedTo},{default:()=>p(Cr,{name:"fade-in-scale-up-transition",appear:this.isMounted},{default:()=>this.mergedShow?Ur(this.renderPanel(),[[xt,this.handleClickOutside,void 0,{capture:!0}]]):null})})]}))}});export{Nr as NColorPicker,Vt as NInputGroup,Ar as colorPickerProps,Rt as inputGroupProps};
