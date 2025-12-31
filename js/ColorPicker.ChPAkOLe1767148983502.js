import{importShared as M}from"./3d-tiles-renderer.DZNovkLO1767148983502.js";import{cB as d,c as x,cE as v,useConfig as Le,createTheme as dt,derived as ct,rgba as V,toHslaString as T,hsva as Y,hsv2hsl as ke,toRgbaString as q,hsv2rgb as L,toHexaString as j,hsla as ne,toHsvaString as J,hsl2hsv as je,hsl2rgb as Me,rgb2hsv as Pe,rgb2hsl as De,createInjectionKey as ht,toHexString as pe,toHslString as Ie,toRgbString as _e,toHsvString as Fe,warn as pt,cM as qe,useTheme as Ge,createKey as Ee,useThemeClass as ft,call as be}from"./light.Bp388JKA1767148983502.js";import{on as ie,off as ae,useMergedState as Ne}from"./use-merged-state.qnrvbG9d1767148983502.js";import{inputLight as mt,NInput as bt}from"./Input.FhrARThI1767148983502.js";import{useStyle as gt}from"./use-style.DGMS3HNI1767148983502.js";import{fadeInScaleUpTransition as vt}from"./Card.CLGorf6I1767148983502.js";import{Binder as xt,VTarget as wt,VFollower as kt,useAdjustedTo as Be}from"./Popover.caJSk_RB1767148983502.js";import{clickoutside as yt}from"./keep.Bwm3V3-L1767148983502.js";import{useFormItem as Ct}from"./Loading.DOiIlXyA1767148983502.js";import{useLocale as St}from"./Suffix.D4O-Hju71767148983502.js";import{isMounted as $t}from"./use-rtl.q0hodkC81767148983502.js";import{getPreciseEventTarget as Ut}from"./Scrollbar.BsFc6odp1767148983502.js";import{buttonLight as At,Button as ge}from"./Button.DslW6U6X1767148983502.js";const Rt=d("input-group",`
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
 `)])])])])])]),{defineComponent:zt,h:Vt}=await M("vue"),Mt={},Pt=zt({name:"InputGroup",props:Mt,setup(e){const{mergedClsPrefixRef:t}=Le(e);return gt("-input-group",Rt,t),{mergedClsPrefix:t}},render(){const{mergedClsPrefix:e}=this;return Vt("div",{class:`${e}-input-group`},this.$slots)}});function Dt(e){const{fontSize:t,boxShadow2:a,popoverColor:o,textColor2:i,borderRadius:n,borderColor:l,heightSmall:s,heightMedium:c,heightLarge:A,fontSizeSmall:R,fontSizeMedium:C,fontSizeLarge:P,dividerColor:D}=e;return{panelFontSize:t,boxShadow:a,color:o,textColor:i,borderRadius:n,border:`1px solid ${l}`,heightSmall:s,heightMedium:c,heightLarge:A,fontSizeSmall:R,fontSizeMedium:C,fontSizeLarge:P,dividerColor:D}}const It=dt({name:"ColorPicker",common:ct,peers:{Input:mt,Button:At},self:Dt});function _t(e,t){switch(e[0]){case"hex":return t?"#000000FF":"#000000";case"rgb":return t?"rgba(0, 0, 0, 1)":"rgb(0, 0, 0)";case"hsl":return t?"hsla(0, 0%, 0%, 1)":"hsl(0, 0%, 0%)";case"hsv":return t?"hsva(0, 0%, 0%, 1)":"hsv(0, 0%, 0%)"}return"#000000"}function fe(e){return e===null?null:/^ *#/.test(e)?"hex":e.includes("rgb")?"rgb":e.includes("hsl")?"hsl":e.includes("hsv")?"hsv":null}function Ft(e,t=[255,255,255],a="AA"){const[o,i,n,l]=V(T(e));if(l===1){const D=ve([o,i,n]),I=ve(t);return(Math.max(D,I)+.05)/(Math.min(D,I)+.05)>=(a==="AA"?4.5:7)}const s=Math.round(o*l+t[0]*(1-l)),c=Math.round(i*l+t[1]*(1-l)),A=Math.round(n*l+t[2]*(1-l)),R=ve([s,c,A]),C=ve(t);return(Math.max(R,C)+.05)/(Math.min(R,C)+.05)>=(a==="AA"?4.5:7)}function ve(e){const[t,a,o]=e.map(i=>(i/=255,i<=.03928?i/12.92:Math.pow((i+.055)/1.055,2.4)));return .2126*t+.7152*a+.0722*o}function Bt(e){return e=Math.round(e),e>=360?359:e<0?0:e}function Ht(e){return e=Math.round(e*100)/100,e>1?1:e<0?0:e}const Tt={rgb:{hex(e){return j(V(e))},hsl(e){const[t,a,o,i]=V(e);return T([...De(t,a,o),i])},hsv(e){const[t,a,o,i]=V(e);return J([...Pe(t,a,o),i])}},hex:{rgb(e){return q(V(e))},hsl(e){const[t,a,o,i]=V(e);return T([...De(t,a,o),i])},hsv(e){const[t,a,o,i]=V(e);return J([...Pe(t,a,o),i])}},hsl:{hex(e){const[t,a,o,i]=ne(e);return j([...Me(t,a,o),i])},rgb(e){const[t,a,o,i]=ne(e);return q([...Me(t,a,o),i])},hsv(e){const[t,a,o,i]=ne(e);return J([...je(t,a,o),i])}},hsv:{hex(e){const[t,a,o,i]=Y(e);return j([...L(t,a,o),i])},rgb(e){const[t,a,o,i]=Y(e);return q([...L(t,a,o),i])},hsl(e){const[t,a,o,i]=Y(e);return T([...ke(t,a,o),i])}}};function Ke(e,t,a){return a=a||fe(e),a?a===t?e:Tt[a][t](e):null}const{computed:qt,defineComponent:Et,h:X,ref:Nt}=await M("vue"),se="12px",Ot=12,Z="6px",Lt=Et({name:"AlphaSlider",props:{clsPrefix:{type:String,required:!0},rgba:{type:Array,default:null},alpha:{type:Number,default:0},onUpdateAlpha:{type:Function,required:!0},onComplete:Function},setup(e){const t=Nt(null);function a(n){!t.value||!e.rgba||(ie("mousemove",document,o),ie("mouseup",document,i),o(n))}function o(n){const{value:l}=t;if(!l)return;const{width:s,left:c}=l.getBoundingClientRect(),A=(n.clientX-c)/(s-Ot);e.onUpdateAlpha(Ht(A))}function i(){var n;ae("mousemove",document,o),ae("mouseup",document,i),(n=e.onComplete)===null||n===void 0||n.call(e)}return{railRef:t,railBackgroundImage:qt(()=>{const{rgba:n}=e;return n?`linear-gradient(to right, rgba(${n[0]}, ${n[1]}, ${n[2]}, 0) 0%, rgba(${n[0]}, ${n[1]}, ${n[2]}, 1) 100%)`:""}),handleMouseDown:a}},render(){const{clsPrefix:e}=this;return X("div",{class:`${e}-color-picker-slider`,ref:"railRef",style:{height:se,borderRadius:Z},onMousedown:this.handleMouseDown},X("div",{style:{borderRadius:Z,position:"absolute",left:0,right:0,top:0,bottom:0,overflow:"hidden"}},X("div",{class:`${e}-color-picker-checkboard`}),X("div",{class:`${e}-color-picker-slider__image`,style:{backgroundImage:this.railBackgroundImage}})),this.rgba&&X("div",{style:{position:"absolute",left:Z,right:Z,top:0,bottom:0}},X("div",{class:`${e}-color-picker-handle`,style:{left:`calc(${this.alpha*100}% - ${Z})`,borderRadius:Z,width:se,height:se}},X("div",{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:q(this.rgba),borderRadius:Z,width:se,height:se}}))))}}),He=ht("n-color-picker"),{defineComponent:jt,h:Gt,inject:Kt,ref:Xt,watchEffect:Zt}=await M("vue");function Wt(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(Number.parseInt(e),255)):!1}function Yt(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(Number.parseInt(e),360)):!1}function Jt(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(Number.parseInt(e),100)):!1}function Qt(e){const t=e.trim();return/^#[0-9a-fA-F]+$/.test(t)?[4,5,7,9].includes(t.length):!1}function er(e){return/^\d{1,3}\.?\d*%$/.test(e.trim())?Math.max(0,Math.min(Number.parseInt(e)/100,100)):!1}const tr={paddingSmall:"0 4px"},Oe=jt({name:"ColorInputUnit",props:{label:{type:String,required:!0},value:{type:[Number,String],default:null},showAlpha:Boolean,onUpdateValue:{type:Function,required:!0}},setup(e){const t=Xt(""),{themeRef:a}=Kt(He,null);Zt(()=>{t.value=o()});function o(){const{value:l}=e;if(l===null)return"";const{label:s}=e;return s==="HEX"?l:s==="A"?`${Math.floor(l*100)}%`:String(Math.floor(l))}function i(l){t.value=l}function n(l){let s,c;switch(e.label){case"HEX":c=Qt(l),c&&e.onUpdateValue(l),t.value=o();break;case"H":s=Yt(l),s===!1?t.value=o():e.onUpdateValue(s);break;case"S":case"L":case"V":s=Jt(l),s===!1?t.value=o():e.onUpdateValue(s);break;case"A":s=er(l),s===!1?t.value=o():e.onUpdateValue(s);break;case"R":case"G":case"B":s=Wt(l),s===!1?t.value=o():e.onUpdateValue(s);break}}return{mergedTheme:a,inputValue:t,handleInputChange:n,handleInputUpdateValue:i}},render(){const{mergedTheme:e}=this;return Gt(bt,{size:"small",placeholder:this.label,theme:e.peers.Input,themeOverrides:e.peerOverrides.Input,builtinThemeOverrides:tr,value:this.inputValue,onUpdateValue:this.handleInputUpdateValue,onChange:this.handleInputChange,style:this.label==="A"?"flex-grow: 1.25;":""})}}),{defineComponent:rr,h:ue}=await M("vue"),or=rr({name:"ColorInput",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},modes:{type:Array,required:!0},showAlpha:{type:Boolean,required:!0},value:{type:String,default:null},valueArr:{type:Array,default:null},onUpdateValue:{type:Function,required:!0},onUpdateMode:{type:Function,required:!0}},setup(e){return{handleUnitUpdateValue(t,a){const{showAlpha:o}=e;if(e.mode==="hex"){e.onUpdateValue((o?j:pe)(a));return}let i;switch(e.valueArr===null?i=[0,0,0,0]:i=Array.from(e.valueArr),e.mode){case"hsv":i[t]=a,e.onUpdateValue((o?J:Fe)(i));break;case"rgb":i[t]=a,e.onUpdateValue((o?q:_e)(i));break;case"hsl":i[t]=a,e.onUpdateValue((o?T:Ie)(i));break}}}},render(){const{clsPrefix:e,modes:t}=this;return ue("div",{class:`${e}-color-picker-input`},ue("div",{class:`${e}-color-picker-input__mode`,onClick:this.onUpdateMode,style:{cursor:t.length===1?"":"pointer"}},this.mode.toUpperCase()+(this.showAlpha?"A":"")),ue(Pt,null,{default:()=>{const{mode:a,valueArr:o,showAlpha:i}=this;if(a==="hex"){let n=null;try{n=o===null?null:(i?j:pe)(o)}catch{}return ue(Oe,{label:"HEX",showAlpha:i,value:n,onUpdateValue:l=>{this.handleUnitUpdateValue(0,l)}})}return(a+(i?"a":"")).split("").map((n,l)=>ue(Oe,{label:n.toUpperCase(),value:o===null?null:o[l],onUpdateValue:s=>{this.handleUnitUpdateValue(l,s)}}))}}))}}),{computed:nr,defineComponent:ir,h:Re}=await M("vue");function ar(e,t){if(t==="hsv"){const[a,o,i,n]=Y(e);return q([...L(a,o,i),n])}return e}function lr(e){const t=document.createElement("canvas").getContext("2d");return t?(t.fillStyle=e,t.fillStyle):"#000000"}const sr=ir({name:"ColorPickerSwatches",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},swatches:{type:Array,required:!0},onUpdateColor:{type:Function,required:!0}},setup(e){const t=nr(()=>e.swatches.map(n=>{const l=fe(n);return{value:n,mode:l,legalValue:ar(n,l)}}));function a(n){const{mode:l}=e;let{value:s,mode:c}=n;return c||(c="hex",/^[a-zA-Z]+$/.test(s)?s=lr(s):(pt("color-picker",`color ${s} in swatches is invalid.`),s="#000000")),c===l?s:Ke(s,l,c)}function o(n){e.onUpdateColor(a(n))}function i(n,l){n.key==="Enter"&&o(l)}return{parsedSwatchesRef:t,handleSwatchSelect:o,handleSwatchKeyDown:i}},render(){const{clsPrefix:e}=this;return Re("div",{class:`${e}-color-picker-swatches`},this.parsedSwatchesRef.map(t=>Re("div",{class:`${e}-color-picker-swatch`,tabindex:0,onClick:()=>{this.handleSwatchSelect(t)},onKeydown:a=>{this.handleSwatchKeyDown(a,t)}},Re("div",{class:`${e}-color-picker-swatch__fill`,style:{background:t.legalValue}}))))}}),{defineComponent:ur,h:de,inject:dr}=await M("vue"),cr=ur({name:"ColorPickerTrigger",slots:Object,props:{clsPrefix:{type:String,required:!0},value:{type:String,default:null},hsla:{type:Array,default:null},disabled:Boolean,onClick:Function},setup(e){const{colorPickerSlots:t,renderLabelRef:a}=dr(He,null);return()=>{const{hsla:o,value:i,clsPrefix:n,onClick:l,disabled:s}=e,c=t.label||a.value;return de("div",{class:[`${n}-color-picker-trigger`,s&&`${n}-color-picker-trigger--disabled`],onClick:s?void 0:l},de("div",{class:`${n}-color-picker-trigger__fill`},de("div",{class:`${n}-color-picker-checkboard`}),de("div",{style:{position:"absolute",left:0,right:0,top:0,bottom:0,backgroundColor:o?T(o):""}}),i&&o?de("div",{class:`${n}-color-picker-trigger__value`,style:{color:Ft(o)?"white":"black"}},c?c(i):i):null))}}}),{defineComponent:hr,h:ze}=await M("vue"),pr=hr({name:"ColorPreview",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},color:{type:String,default:null,validator:e=>{const t=fe(e);return!!(!e||t&&t!=="hsv")}},onUpdateColor:{type:Function,required:!0}},setup(e){function t(a){var o;const i=a.target.value;(o=e.onUpdateColor)===null||o===void 0||o.call(e,Ke(i.toUpperCase(),e.mode,"hex")),a.stopPropagation()}return{handleChange:t}},render(){const{clsPrefix:e}=this;return ze("div",{class:`${e}-color-picker-preview__preview`},ze("span",{class:`${e}-color-picker-preview__fill`,style:{background:this.color||"#000000"}}),ze("input",{class:`${e}-color-picker-preview__input`,type:"color",value:this.color,onChange:this.handleChange}))}}),{defineComponent:fr,h:ce,ref:mr}=await M("vue"),oe="12px",br=12,W="6px",gr=6,vr="linear-gradient(90deg,red,#ff0 16.66%,#0f0 33.33%,#0ff 50%,#00f 66.66%,#f0f 83.33%,red)",xr=fr({name:"HueSlider",props:{clsPrefix:{type:String,required:!0},hue:{type:Number,required:!0},onUpdateHue:{type:Function,required:!0},onComplete:Function},setup(e){const t=mr(null);function a(n){t.value&&(ie("mousemove",document,o),ie("mouseup",document,i),o(n))}function o(n){const{value:l}=t;if(!l)return;const{width:s,left:c}=l.getBoundingClientRect(),A=Bt((n.clientX-c-gr)/(s-br)*360);e.onUpdateHue(A)}function i(){var n;ae("mousemove",document,o),ae("mouseup",document,i),(n=e.onComplete)===null||n===void 0||n.call(e)}return{railRef:t,handleMouseDown:a}},render(){const{clsPrefix:e}=this;return ce("div",{class:`${e}-color-picker-slider`,style:{height:oe,borderRadius:W}},ce("div",{ref:"railRef",style:{boxShadow:"inset 0 0 2px 0 rgba(0, 0, 0, .24)",boxSizing:"border-box",backgroundImage:vr,height:oe,borderRadius:W,position:"relative"},onMousedown:this.handleMouseDown},ce("div",{style:{position:"absolute",left:W,right:W,top:0,bottom:0}},ce("div",{class:`${e}-color-picker-handle`,style:{left:`calc((${this.hue}%) / 359 * 100 - ${W})`,borderRadius:W,width:oe,height:oe}},ce("div",{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:`hsl(${this.hue}, 100%, 50%)`,borderRadius:W,width:oe,height:oe}})))))}}),{computed:wr,defineComponent:kr,h:he,ref:yr}=await M("vue"),xe="12px",we="6px",Cr=kr({name:"Pallete",props:{clsPrefix:{type:String,required:!0},rgba:{type:Array,default:null},displayedHue:{type:Number,required:!0},displayedSv:{type:Array,required:!0},onUpdateSV:{type:Function,required:!0},onComplete:Function},setup(e){const t=yr(null);function a(n){t.value&&(ie("mousemove",document,o),ie("mouseup",document,i),o(n))}function o(n){const{value:l}=t;if(!l)return;const{width:s,height:c,left:A,bottom:R}=l.getBoundingClientRect(),C=(R-n.clientY)/c,P=(n.clientX-A)/s,D=100*(P>1?1:P<0?0:P),I=100*(C>1?1:C<0?0:C);e.onUpdateSV(D,I)}function i(){var n;ae("mousemove",document,o),ae("mouseup",document,i),(n=e.onComplete)===null||n===void 0||n.call(e)}return{palleteRef:t,handleColor:wr(()=>{const{rgba:n}=e;return n?`rgb(${n[0]}, ${n[1]}, ${n[2]})`:""}),handleMouseDown:a}},render(){const{clsPrefix:e}=this;return he("div",{class:`${e}-color-picker-pallete`,onMousedown:this.handleMouseDown,ref:"palleteRef"},he("div",{class:`${e}-color-picker-pallete__layer`,style:{backgroundImage:`linear-gradient(90deg, white, hsl(${this.displayedHue}, 100%, 50%))`}}),he("div",{class:`${e}-color-picker-pallete__layer ${e}-color-picker-pallete__layer--shadowed`,style:{backgroundImage:"linear-gradient(180deg, rgba(0, 0, 0, 0%), rgba(0, 0, 0, 100%))"}}),this.rgba&&he("div",{class:`${e}-color-picker-handle`,style:{width:xe,height:xe,borderRadius:we,left:`calc(${this.displayedSv[0]}% - ${we})`,bottom:`calc(${this.displayedSv[1]}% - ${we})`}},he("div",{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:this.handleColor,borderRadius:we,width:xe,height:xe}})))}}),Sr=x([d("color-picker",`
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
 `,[vt(),d("input",`
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
 `)])])])])]),{computed:B,defineComponent:$r,h:p,nextTick:Ur,provide:Ar,ref:H,toRef:Ve,Transition:Rr,watch:zr,watchEffect:Vr,withDirectives:Mr}=await M("vue"),Pr=Object.assign(Object.assign({},Ge.props),{value:String,show:{type:Boolean,default:void 0},defaultShow:Boolean,defaultValue:String,modes:{type:Array,default:()=>["rgb","hex","hsl"]},placement:{type:String,default:"bottom-start"},to:Be.propTo,showAlpha:{type:Boolean,default:!0},showPreview:Boolean,swatches:Array,disabled:{type:Boolean,default:void 0},actions:{type:Array,default:null},internalActions:Array,size:String,renderLabel:Function,onComplete:Function,onConfirm:Function,onClear:Function,"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]}),Gr=$r({name:"ColorPicker",props:Pr,slots:Object,setup(e,{slots:t}){const a=H(null);let o=null;const i=Ct(e),{mergedSizeRef:n,mergedDisabledRef:l}=i,{localeRef:s}=St("global"),{mergedClsPrefixRef:c,namespaceRef:A,inlineThemeDisabled:R}=Le(e),C=Ge("ColorPicker","-color-picker",Sr,It,e,c);Ar(He,{themeRef:C,renderLabelRef:Ve(e,"renderLabel"),colorPickerSlots:t});const P=H(e.defaultShow),D=Ne(Ve(e,"show"),P);function I(r){const{onUpdateShow:u,"onUpdate:show":f}=e;u&&be(u,r),f&&be(f,r),P.value=r}const{defaultValue:ye}=e,Te=H(ye===void 0?_t(e.modes,e.showAlpha):ye),k=Ne(Ve(e,"value"),Te),Q=H([k.value]),_=H(0),Ce=B(()=>fe(k.value)),{modes:Xe}=e,z=H(fe(k.value)||Xe[0]||"rgb");function Ze(){const{modes:r}=e,{value:u}=z,f=r.findIndex(m=>m===u);~f?z.value=r[(f+1)%r.length]:z.value="rgb"}let S,$,ee,te,E,N,O,U;const le=B(()=>{const{value:r}=k;if(!r)return null;switch(Ce.value){case"hsv":return Y(r);case"hsl":return[S,$,ee,U]=ne(r),[...je(S,$,ee),U];case"rgb":case"hex":return[E,N,O,U]=V(r),[...Pe(E,N,O),U]}}),G=B(()=>{const{value:r}=k;if(!r)return null;switch(Ce.value){case"rgb":case"hex":return V(r);case"hsv":return[S,$,te,U]=Y(r),[...L(S,$,te),U];case"hsl":return[S,$,ee,U]=ne(r),[...Me(S,$,ee),U]}}),Se=B(()=>{const{value:r}=k;if(!r)return null;switch(Ce.value){case"hsl":return ne(r);case"hsv":return[S,$,te,U]=Y(r),[...ke(S,$,te),U];case"rgb":case"hex":return[E,N,O,U]=V(r),[...De(E,N,O),U]}}),We=B(()=>{switch(z.value){case"rgb":case"hex":return G.value;case"hsv":return le.value;case"hsl":return Se.value}}),me=H(0),$e=H(1),Ue=H([0,0]);function Ye(r,u){const{value:f}=le,m=me.value,b=f?f[3]:1;Ue.value=[r,u];const{showAlpha:h}=e;switch(z.value){case"hsv":g((h?J:Fe)([m,r,u,b]),"cursor");break;case"hsl":g((h?T:Ie)([...ke(m,r,u),b]),"cursor");break;case"rgb":g((h?q:_e)([...L(m,r,u),b]),"cursor");break;case"hex":g((h?j:pe)([...L(m,r,u),b]),"cursor");break}}function Je(r){me.value=r;const{value:u}=le;if(!u)return;const[,f,m,b]=u,{showAlpha:h}=e;switch(z.value){case"hsv":g((h?J:Fe)([r,f,m,b]),"cursor");break;case"rgb":g((h?q:_e)([...L(r,f,m),b]),"cursor");break;case"hex":g((h?j:pe)([...L(r,f,m),b]),"cursor");break;case"hsl":g((h?T:Ie)([...ke(r,f,m),b]),"cursor");break}}function Qe(r){switch(z.value){case"hsv":[S,$,te]=le.value,g(J([S,$,te,r]),"cursor");break;case"rgb":[E,N,O]=G.value,g(q([E,N,O,r]),"cursor");break;case"hex":[E,N,O]=G.value,g(j([E,N,O,r]),"cursor");break;case"hsl":[S,$,ee]=Se.value,g(T([S,$,ee,r]),"cursor");break}$e.value=r}function g(r,u){u==="cursor"?o=r:o=null;const{nTriggerFormChange:f,nTriggerFormInput:m}=i,{onUpdateValue:b,"onUpdate:value":h}=e;b&&be(b,r),h&&be(h,r),f(),m(),Te.value=r}function et(r){g(r,"input"),Ur(re)}function re(r=!0){const{value:u}=k;if(u){const{nTriggerFormChange:f,nTriggerFormInput:m}=i,{onComplete:b}=e;b&&b(u);const{value:h}=Q,{value:y}=_;r&&(h.splice(y+1,h.length,u),_.value=y+1),f(),m()}}function tt(){const{value:r}=_;r-1<0||(g(Q.value[r-1],"input"),re(!1),_.value=r-1)}function rt(){const{value:r}=_;r<0||r+1>=Q.value.length||(g(Q.value[r+1],"input"),re(!1),_.value=r+1)}function ot(){g(null,"input");const{onClear:r}=e;r&&r(),I(!1)}function nt(){const{value:r}=k,{onConfirm:u}=e;u&&u(r),I(!1)}const it=B(()=>_.value>=1),at=B(()=>{const{value:r}=Q;return r.length>1&&_.value<r.length-1});zr(D,r=>{r||(Q.value=[k.value],_.value=0)}),Vr(()=>{if(!(o&&o===k.value)){const{value:r}=le;r&&(me.value=r[0],$e.value=r[3],Ue.value=[r[1],r[2]])}o=null});const Ae=B(()=>{const{value:r}=n,{common:{cubicBezierEaseInOut:u},self:{textColor:f,color:m,panelFontSize:b,boxShadow:h,border:y,borderRadius:w,dividerColor:K,[Ee("height",r)]:st,[Ee("fontSize",r)]:ut}}=C.value;return{"--n-bezier":u,"--n-text-color":f,"--n-color":m,"--n-panel-font-size":b,"--n-font-size":ut,"--n-box-shadow":h,"--n-border":y,"--n-border-radius":w,"--n-height":st,"--n-divider-color":K}}),F=R?ft("color-picker",B(()=>n.value[0]),Ae,e):void 0;function lt(){var r;const{value:u}=G,{value:f}=me,{internalActions:m,modes:b,actions:h}=e,{value:y}=C,{value:w}=c;return p("div",{class:[`${w}-color-picker-panel`,F?.themeClass.value],onDragstart:K=>{K.preventDefault()},style:R?void 0:Ae.value},p("div",{class:`${w}-color-picker-control`},p(Cr,{clsPrefix:w,rgba:u,displayedHue:f,displayedSv:Ue.value,onUpdateSV:Ye,onComplete:re}),p("div",{class:`${w}-color-picker-preview`},p("div",{class:`${w}-color-picker-preview__sliders`},p(xr,{clsPrefix:w,hue:f,onUpdateHue:Je,onComplete:re}),e.showAlpha?p(Lt,{clsPrefix:w,rgba:u,alpha:$e.value,onUpdateAlpha:Qe,onComplete:re}):null),e.showPreview?p(pr,{clsPrefix:w,mode:z.value,color:G.value&&pe(G.value),onUpdateColor:K=>{g(K,"input")}}):null),p(or,{clsPrefix:w,showAlpha:e.showAlpha,mode:z.value,modes:b,onUpdateMode:Ze,value:k.value,valueArr:We.value,onUpdateValue:et}),((r=e.swatches)===null||r===void 0?void 0:r.length)&&p(sr,{clsPrefix:w,mode:z.value,swatches:e.swatches,onUpdateColor:K=>{g(K,"input")}})),h?.length?p("div",{class:`${w}-color-picker-action`},h.includes("confirm")&&p(ge,{size:"small",onClick:nt,theme:y.peers.Button,themeOverrides:y.peerOverrides.Button},{default:()=>s.value.confirm}),h.includes("clear")&&p(ge,{size:"small",onClick:ot,disabled:!k.value,theme:y.peers.Button,themeOverrides:y.peerOverrides.Button},{default:()=>s.value.clear})):null,t.action?p("div",{class:`${w}-color-picker-action`},{default:t.action}):m?p("div",{class:`${w}-color-picker-action`},m.includes("undo")&&p(ge,{size:"small",onClick:tt,disabled:!it.value,theme:y.peers.Button,themeOverrides:y.peerOverrides.Button},{default:()=>s.value.undo}),m.includes("redo")&&p(ge,{size:"small",onClick:rt,disabled:!at.value,theme:y.peers.Button,themeOverrides:y.peerOverrides.Button},{default:()=>s.value.redo})):null)}return{mergedClsPrefix:c,namespace:A,selfRef:a,hsla:Se,rgba:G,mergedShow:D,mergedDisabled:l,isMounted:$t(),adjustedTo:Be(e),mergedValue:k,handleTriggerClick(){I(!0)},handleClickOutside(r){var u;!((u=a.value)===null||u===void 0)&&u.contains(Ut(r))||I(!1)},renderPanel:lt,cssVars:R?void 0:Ae,themeClass:F?.themeClass,onRender:F?.onRender}},render(){const{mergedClsPrefix:e,onRender:t}=this;return t?.(),p("div",{class:[this.themeClass,`${e}-color-picker`],ref:"selfRef",style:this.cssVars},p(xt,null,{default:()=>[p(wt,null,{default:()=>p(cr,{clsPrefix:e,value:this.mergedValue,hsla:this.hsla,disabled:this.mergedDisabled,onClick:this.handleTriggerClick})}),p(kt,{placement:this.placement,show:this.mergedShow,containerClass:this.namespace,teleportDisabled:this.adjustedTo===Be.tdkey,to:this.adjustedTo},{default:()=>p(Rr,{name:"fade-in-scale-up-transition",appear:this.isMounted},{default:()=>this.mergedShow?Mr(this.renderPanel(),[[yt,this.handleClickOutside,void 0,{capture:!0}]]):null})})]}))}});export{Gr as NColorPicker,Pt as NInputGroup,Pr as colorPickerProps,Mt as inputGroupProps,Dt as self};
