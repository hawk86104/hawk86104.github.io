import{importShared as ue}from"./3d-tiles-renderer.DZNovkLO1767148983502.js";import{fadeInScaleUpTransition as St}from"./Card.CLGorf6I1767148983502.js";import{useSsrAdapter as wn,derived as rt,cB as C,cE as F,c as ae,useConfig as lt,useTheme as Te,createKey as fe,useThemeClass as et,createTheme as qt,cM as K,cNotM as vt,resolveWrappedSlot as De,resolveSlot as xn,changeColor as Je,call as ce,insideModal as so,insidePopover as co,isSlotEmpty as Mt}from"./light.Bp388JKA1767148983502.js";import{c as Ct,cssrAnchorMetaName as yn,beforeNextFrameOnce as uo,internalSelectionMenuInjectionKey as Xt,internalSelectionMenuBodyInjectionKey as fo,popoverLight as ho,NPopover as vo,Binder as Cn,VTarget as Sn,VFollower as Rn,useAdjustedTo as it}from"./Popover.caJSk_RB1767148983502.js";import{VResizeObserver as Jt,depx as ke,pxfy as Ue,resizeObserverManager as Ot,scrollbarLight as go,Scrollbar as bo,getMargin as ut,Wrapper as po,getPreciseEventTarget as mo}from"./Scrollbar.BsFc6odp1767148983502.js";import{useLocale as kn,render as ot,NBaseSuffix as wo}from"./Suffix.D4O-Hju71767148983502.js";import{NTag as Pt}from"./Tag.B40cK7ZV1767148983502.js";import{useMemo as Qe,useRtl as Tn,isMounted as zn}from"./use-rtl.q0hodkC81767148983502.js";import{NBaseIcon as $n}from"./Close.BeIyDfIs1767148983502.js";import{NBaseLoading as Fn,useFormItem as Yt,iconSwitchTransition as Qt,NIconSwitchTransition as xo}from"./Loading.DOiIlXyA1767148983502.js";import{clickoutside as en}from"./keep.Bwm3V3-L1767148983502.js";import{useMergedState as Rt,on as pt,off as mt}from"./use-merged-state.qnrvbG9d1767148983502.js";import{useCompitable as yo}from"./use-compitable.DdqYCU_J1767148983502.js";import{markEventEffectPerformed as Co}from"./index.BBJKPpY61767148983502.js";function ft(e,t){let{target:n}=e;for(;n;){if(n.dataset&&n.dataset[t]!==void 0)return!0;n=n.parentElement}return!1}function tn(e){return e&-e}class Mn{constructor(t,n){this.l=t,this.min=n;const o=new Array(t+1);for(let i=0;i<t+1;++i)o[i]=0;this.ft=o}add(t,n){if(n===0)return;const{l:o,ft:i}=this;for(t+=1;t<=o;)i[t]+=n,t+=tn(t)}get(t){return this.sum(t+1)-this.sum(t)}sum(t){if(t===void 0&&(t=this.l),t<=0)return 0;const{ft:n,min:o,l:i}=this;if(t>i)throw new Error("[FinweckTree.sum]: `i` is larger than length.");let d=t*o;for(;t>0;)d+=n[t],t-=tn(t);return d}getBound(t){let n=0,o=this.l;for(;o>n;){const i=Math.floor((n+o)/2),d=this.sum(i);if(d>t){o=i;continue}else if(d<t){if(n===i)return this.sum(n+1)<=t?n+1:i;n=i}else return i}return n}}let wt;function So(){return typeof document>"u"?!1:(wt===void 0&&("matchMedia"in window?wt=window.matchMedia("(pointer:coarse)").matches:wt=!1),wt)}let It;function nn(){return typeof document>"u"?1:(It===void 0&&(It="chrome"in window?window.devicePixelRatio:1),It)}const On="VVirtualListXScroll",{computed:Ro,provide:ko,ref:on}=await ue("vue");function To({columnsRef:e,renderColRef:t,renderItemWithColsRef:n}){const o=on(0),i=on(0),d=Ro(()=>{const h=e.value;if(h.length===0)return null;const f=new Mn(h.length,0);return h.forEach((g,w)=>{f.add(w,g.width)}),f}),l=Qe(()=>{const h=d.value;return h!==null?Math.max(h.getBound(i.value)-1,0):0}),a=h=>{const f=d.value;return f!==null?f.sum(h):0},v=Qe(()=>{const h=d.value;return h!==null?Math.min(h.getBound(i.value+o.value)+1,e.value.length-1):0});return ko(On,{startIndexRef:l,endIndexRef:v,columnsRef:e,renderColRef:t,renderItemWithColsRef:n,getLeft:a}),{listWidthRef:o,scrollLeftRef:i}}const{defineComponent:zo,inject:$o}=await ue("vue"),rn=zo({name:"VirtualListRow",props:{index:{type:Number,required:!0},item:{type:Object,required:!0}},setup(){const{startIndexRef:e,endIndexRef:t,columnsRef:n,getLeft:o,renderColRef:i,renderItemWithColsRef:d}=$o(On);return{startIndex:e,endIndex:t,columns:n,renderCol:i,renderItemWithCols:d,getLeft:o}},render(){const{startIndex:e,endIndex:t,columns:n,renderCol:o,renderItemWithCols:i,getLeft:d,item:l}=this;if(i!=null)return i({itemIndex:this.index,startColIndex:e,endColIndex:t,allColumns:n,item:l,getLeft:d});if(o!=null){const a=[];for(let v=e;v<=t;++v){const h=n[v];a.push(o({column:h,left:d(v),item:l}))}return a}return null}}),{mergeProps:Fo,computed:at,defineComponent:Mo,ref:st,onMounted:Oo,h:Ye,onActivated:Po,onDeactivated:Io,toRef:Bt}=await ue("vue"),Bo=Ct(".v-vl",{maxHeight:"inherit",height:"100%",overflow:"auto",minWidth:"1px"},[Ct("&:not(.v-vl--show-scrollbar)",{scrollbarWidth:"none"},[Ct("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",{width:0,height:0,display:"none"})])]),_o=Mo({name:"VirtualList",inheritAttrs:!1,props:{showScrollbar:{type:Boolean,default:!0},columns:{type:Array,default:()=>[]},renderCol:Function,renderItemWithCols:Function,items:{type:Array,default:()=>[]},itemSize:{type:Number,required:!0},itemResizable:Boolean,itemsStyle:[String,Object],visibleItemsTag:{type:[String,Object],default:"div"},visibleItemsProps:Object,ignoreItemResize:Boolean,onScroll:Function,onWheel:Function,onResize:Function,defaultScrollKey:[Number,String],defaultScrollIndex:Number,keyField:{type:String,default:"key"},paddingTop:{type:[Number,String],default:0},paddingBottom:{type:[Number,String],default:0}},setup(e){const t=wn();Bo.mount({id:"vueuc/virtual-list",head:!0,anchorMetaName:yn,ssr:t}),Oo(()=>{const{defaultScrollIndex:p,defaultScrollKey:$}=e;p!=null?L({index:p}):$!=null&&L({key:$})});let n=!1,o=!1;Po(()=>{if(n=!1,!o){o=!0;return}L({top:k.value,left:l.value})}),Io(()=>{n=!0,o||(o=!0)});const i=Qe(()=>{if(e.renderCol==null&&e.renderItemWithCols==null||e.columns.length===0)return;let p=0;return e.columns.forEach($=>{p+=$.width}),p}),d=at(()=>{const p=new Map,{keyField:$}=e;return e.items.forEach((V,Z)=>{p.set(V[$],Z)}),p}),{scrollLeftRef:l,listWidthRef:a}=To({columnsRef:Bt(e,"columns"),renderColRef:Bt(e,"renderCol"),renderItemWithColsRef:Bt(e,"renderItemWithCols")}),v=st(null),h=st(void 0),f=new Map,g=at(()=>{const{items:p,itemSize:$,keyField:V}=e,Z=new Mn(p.length,$);return p.forEach((te,N)=>{const J=te[V],j=f.get(J);j!==void 0&&Z.add(N,j)}),Z}),w=st(0),k=st(0),y=Qe(()=>Math.max(g.value.getBound(k.value-ke(e.paddingTop))-1,0)),B=at(()=>{const{value:p}=h;if(p===void 0)return[];const{items:$,itemSize:V}=e,Z=y.value,te=Math.min(Z+Math.ceil(p/V+1),$.length-1),N=[];for(let J=Z;J<=te;++J)N.push($[J]);return N}),L=(p,$)=>{if(typeof p=="number"){m(p,$,"auto");return}const{left:V,top:Z,index:te,key:N,position:J,behavior:j,debounce:Y=!0}=p;if(V!==void 0||Z!==void 0)m(V,Z,j);else if(te!==void 0)O(te,j,Y);else if(N!==void 0){const b=d.value.get(N);b!==void 0&&O(b,j,Y)}else J==="bottom"?m(0,Number.MAX_SAFE_INTEGER,j):J==="top"&&m(0,0,j)};let T,P=null;function O(p,$,V){const{value:Z}=g,te=Z.sum(p)+ke(e.paddingTop);if(!V)v.value.scrollTo({left:0,top:te,behavior:$});else{T=p,P!==null&&window.clearTimeout(P),P=window.setTimeout(()=>{T=void 0,P=null},16);const{scrollTop:N,offsetHeight:J}=v.value;if(te>N){const j=Z.get(p);te+j<=N+J||v.value.scrollTo({left:0,top:te+j-J,behavior:$})}else v.value.scrollTo({left:0,top:te,behavior:$})}}function m(p,$,V){v.value.scrollTo({left:p,top:$,behavior:V})}function x(p,$){var V,Z,te;if(n||e.ignoreItemResize||re($.target))return;const{value:N}=g,J=d.value.get(p),j=N.get(J),Y=(te=(Z=(V=$.borderBoxSize)===null||V===void 0?void 0:V[0])===null||Z===void 0?void 0:Z.blockSize)!==null&&te!==void 0?te:$.contentRect.height;if(Y===j)return;Y-e.itemSize===0?f.delete(p):f.set(p,Y-e.itemSize);const S=Y-j;if(S===0)return;N.add(J,S);const X=v.value;if(X!=null){if(T===void 0){const de=N.sum(J);X.scrollTop>de&&X.scrollBy(0,S)}else if(J<T)X.scrollBy(0,S);else if(J===T){const de=N.sum(J);Y+de>X.scrollTop+X.offsetHeight&&X.scrollBy(0,S)}ee()}w.value++}const E=!So();let I=!1;function z(p){var $;($=e.onScroll)===null||$===void 0||$.call(e,p),(!E||!I)&&ee()}function U(p){var $;if(($=e.onWheel)===null||$===void 0||$.call(e,p),E){const V=v.value;if(V!=null){if(p.deltaX===0&&(V.scrollTop===0&&p.deltaY<=0||V.scrollTop+V.offsetHeight>=V.scrollHeight&&p.deltaY>=0))return;p.preventDefault(),V.scrollTop+=p.deltaY/nn(),V.scrollLeft+=p.deltaX/nn(),ee(),I=!0,uo(()=>{I=!1})}}}function A(p){if(n||re(p.target))return;if(e.renderCol==null&&e.renderItemWithCols==null){if(p.contentRect.height===h.value)return}else if(p.contentRect.height===h.value&&p.contentRect.width===a.value)return;h.value=p.contentRect.height,a.value=p.contentRect.width;const{onResize:$}=e;$!==void 0&&$(p)}function ee(){const{value:p}=v;p!=null&&(k.value=p.scrollTop,l.value=p.scrollLeft)}function re(p){let $=p;for(;$!==null;){if($.style.display==="none")return!0;$=$.parentElement}return!1}return{listHeight:h,listStyle:{overflow:"auto"},keyToIndex:d,itemsStyle:at(()=>{const{itemResizable:p}=e,$=Ue(g.value.sum());return w.value,[e.itemsStyle,{boxSizing:"content-box",width:Ue(i.value),height:p?"":$,minHeight:p?$:"",paddingTop:Ue(e.paddingTop),paddingBottom:Ue(e.paddingBottom)}]}),visibleItemsStyle:at(()=>(w.value,{transform:`translateY(${Ue(g.value.sum(y.value))})`})),viewportItems:B,listElRef:v,itemsElRef:st(null),scrollTo:L,handleListResize:A,handleListScroll:z,handleListWheel:U,handleItemResize:x}},render(){const{itemResizable:e,keyField:t,keyToIndex:n,visibleItemsTag:o}=this;return Ye(Jt,{onResize:this.handleListResize},{default:()=>{var i,d;return Ye("div",Fo(this.$attrs,{class:["v-vl",this.showScrollbar&&"v-vl--show-scrollbar"],onScroll:this.handleListScroll,onWheel:this.handleListWheel,ref:"listElRef"}),[this.items.length!==0?Ye("div",{ref:"itemsElRef",class:"v-vl-items",style:this.itemsStyle},[Ye(o,Object.assign({class:"v-vl-visible-items",style:this.visibleItemsStyle},this.visibleItemsProps),{default:()=>{const{renderCol:l,renderItemWithCols:a}=this;return this.viewportItems.map(v=>{const h=v[t],f=n.get(h),g=l!=null?Ye(rn,{index:f,item:v}):void 0,w=a!=null?Ye(rn,{index:f,item:v}):void 0,k=this.$slots.default({item:v,renderedCols:g,renderedItemWithCols:w,index:f})[0];return e?Ye(Jt,{key:h,onResize:y=>this.handleItemResize(h,y)},{default:()=>k}):(k.key=h,k)})}})]):(d=(i=this.$slots).empty)===null||d===void 0?void 0:d.call(i)])}})}}),{defineComponent:Ao,renderSlot:Eo,h:ln,onMounted:Lo,ref:an,nextTick:No}=await ue("vue"),Le="v-hidden",Do=Ct("[v-hidden]",{display:"none!important"}),sn=Ao({name:"Overflow",props:{getCounter:Function,getTail:Function,updateCounter:Function,onUpdateCount:Function,onUpdateOverflow:Function},setup(e,{slots:t}){const n=an(null),o=an(null);function i(l){const{value:a}=n,{getCounter:v,getTail:h}=e;let f;if(v!==void 0?f=v():f=o.value,!a||!f)return;f.hasAttribute(Le)&&f.removeAttribute(Le);const{children:g}=a;if(l.showAllItemsBeforeCalculate)for(const O of g)O.hasAttribute(Le)&&O.removeAttribute(Le);const w=a.offsetWidth,k=[],y=t.tail?h?.():null;let B=y?y.offsetWidth:0,L=!1;const T=a.children.length-(t.tail?1:0);for(let O=0;O<T-1;++O){if(O<0)continue;const m=g[O];if(L){m.hasAttribute(Le)||m.setAttribute(Le,"");continue}else m.hasAttribute(Le)&&m.removeAttribute(Le);const x=m.offsetWidth;if(B+=x,k[O]=x,B>w){const{updateCounter:E}=e;for(let I=O;I>=0;--I){const z=T-1-I;E!==void 0?E(z):f.textContent=`${z}`;const U=f.offsetWidth;if(B-=k[I],B+U<=w||I===0){L=!0,O=I-1,y&&(O===-1?(y.style.maxWidth=`${w-U}px`,y.style.boxSizing="border-box"):y.style.maxWidth="");const{onUpdateCount:A}=e;A&&A(z);break}}}}const{onUpdateOverflow:P}=e;L?P!==void 0&&P(!0):(P!==void 0&&P(!1),f.setAttribute(Le,""))}const d=wn();return Do.mount({id:"vueuc/overflow",head:!0,anchorMetaName:yn,ssr:d}),Lo(()=>i({showAllItemsBeforeCalculate:!1})),{selfRef:n,counterRef:o,sync:i}},render(){const{$slots:e}=this;return No(()=>this.sync({showAllItemsBeforeCalculate:!1})),ln("div",{class:"v-overflow",ref:"selfRef"},[Eo(e,"default"),e.counter?e.counter():ln("span",{style:{display:"inline-block"},ref:"counterRef"}),e.tail?e.tail():null])}}),{onBeforeUnmount:Vo,onMounted:Ho,watch:Wo}=await ue("vue");function Pn(e,t){t&&(Ho(()=>{const{value:n}=e;n&&Ot.registerHandler(n,t)}),Wo(e,(n,o)=>{o&&Ot.unregisterHandler(o)},{deep:!1}),Vo(()=>{const{value:n}=e;n&&Ot.unregisterHandler(n)}))}function dn(e){switch(typeof e){case"string":return e||void 0;case"number":return String(e);default:return}}function _t(e){const t=e.filter(n=>n!==void 0);if(t.length!==0)return t.length===1?t[0]:n=>{e.forEach(o=>{o&&o(n)})}}const{defineComponent:jo,h:At}=await ue("vue"),Ko=jo({name:"Checkmark",render(){return At("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},At("g",{fill:"none"},At("path",{d:"M14.046 3.486a.75.75 0 0 1-.032 1.06l-7.93 7.474a.85.85 0 0 1-1.188-.022l-2.68-2.72a.75.75 0 1 1 1.068-1.053l2.234 2.267l7.468-7.038a.75.75 0 0 1 1.06.032z",fill:"currentColor"})))}}),{defineComponent:Uo,h:Et}=await ue("vue"),Go=Uo({name:"Empty",render(){return Et("svg",{viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Et("path",{d:"M26 7.5C26 11.0899 23.0899 14 19.5 14C15.9101 14 13 11.0899 13 7.5C13 3.91015 15.9101 1 19.5 1C23.0899 1 26 3.91015 26 7.5ZM16.8536 4.14645C16.6583 3.95118 16.3417 3.95118 16.1464 4.14645C15.9512 4.34171 15.9512 4.65829 16.1464 4.85355L18.7929 7.5L16.1464 10.1464C15.9512 10.3417 15.9512 10.6583 16.1464 10.8536C16.3417 11.0488 16.6583 11.0488 16.8536 10.8536L19.5 8.20711L22.1464 10.8536C22.3417 11.0488 22.6583 11.0488 22.8536 10.8536C23.0488 10.6583 23.0488 10.3417 22.8536 10.1464L20.2071 7.5L22.8536 4.85355C23.0488 4.65829 23.0488 4.34171 22.8536 4.14645C22.6583 3.95118 22.3417 3.95118 22.1464 4.14645L19.5 6.79289L16.8536 4.14645Z",fill:"currentColor"}),Et("path",{d:"M25 22.75V12.5991C24.5572 13.0765 24.053 13.4961 23.5 13.8454V16H17.5L17.3982 16.0068C17.0322 16.0565 16.75 16.3703 16.75 16.75C16.75 18.2688 15.5188 19.5 14 19.5C12.4812 19.5 11.25 18.2688 11.25 16.75L11.2432 16.6482C11.1935 16.2822 10.8797 16 10.5 16H4.5V7.25C4.5 6.2835 5.2835 5.5 6.25 5.5H12.2696C12.4146 4.97463 12.6153 4.47237 12.865 4H6.25C4.45507 4 3 5.45507 3 7.25V22.75C3 24.5449 4.45507 26 6.25 26H21.75C23.5449 26 25 24.5449 25 22.75ZM4.5 22.75V17.5H9.81597L9.85751 17.7041C10.2905 19.5919 11.9808 21 14 21L14.215 20.9947C16.2095 20.8953 17.842 19.4209 18.184 17.5H23.5V22.75C23.5 23.7165 22.7165 24.5 21.75 24.5H6.25C5.2835 24.5 4.5 23.7165 4.5 22.75Z",fill:"currentColor"}))}}),{defineComponent:qo,h:Xo}=await ue("vue"),Yo=qo({props:{onFocus:Function,onBlur:Function},setup(e){return()=>Xo("div",{style:"width: 0; height: 0",tabindex:0,onFocus:e.onFocus,onBlur:e.onBlur})}});function cn(e){return Array.isArray(e)?e:[e]}const Gt={STOP:"STOP"};function In(e,t){const n=t(e);e.children!==void 0&&n!==Gt.STOP&&e.children.forEach(o=>In(o,t))}function Zo(e,t={}){const{preserveGroup:n=!1}=t,o=[],i=n?l=>{l.isLeaf||(o.push(l.key),d(l.children))}:l=>{l.isLeaf||(l.isGroup||o.push(l.key),d(l.children))};function d(l){l.forEach(i)}return d(e),o}function Jo(e,t){const{isLeaf:n}=e;return n!==void 0?n:!t(e)}function Qo(e){return e.children}function ei(e){return e.key}function ti(){return!1}function ni(e,t){const{isLeaf:n}=e;return!(n===!1&&!Array.isArray(t(e)))}function oi(e){return e.disabled===!0}function ii(e,t){return e.isLeaf===!1&&!Array.isArray(t(e))}function Lt(e){var t;return e==null?[]:Array.isArray(e)?e:(t=e.checkedKeys)!==null&&t!==void 0?t:[]}function Nt(e){var t;return e==null||Array.isArray(e)?[]:(t=e.indeterminateKeys)!==null&&t!==void 0?t:[]}function ri(e,t){const n=new Set(e);return t.forEach(o=>{n.has(o)||n.add(o)}),Array.from(n)}function li(e,t){const n=new Set(e);return t.forEach(o=>{n.has(o)&&n.delete(o)}),Array.from(n)}function ai(e){return e?.type==="group"}function si(e){const t=new Map;return e.forEach((n,o)=>{t.set(n.key,o)}),n=>{var o;return(o=t.get(n))!==null&&o!==void 0?o:null}}class di extends Error{constructor(){super(),this.message="SubtreeNotLoadedError: checking a subtree whose required nodes are not fully loaded."}}function ci(e,t,n,o){return kt(t.concat(e),n,o,!1)}function ui(e,t){const n=new Set;return e.forEach(o=>{const i=t.treeNodeMap.get(o);if(i!==void 0){let d=i.parent;for(;d!==null&&!(d.disabled||n.has(d.key));)n.add(d.key),d=d.parent}}),n}function fi(e,t,n,o){const i=kt(t,n,o,!1),d=kt(e,n,o,!0),l=ui(e,n),a=[];return i.forEach(v=>{(d.has(v)||l.has(v))&&a.push(v)}),a.forEach(v=>i.delete(v)),i}function Dt(e,t){const{checkedKeys:n,keysToCheck:o,keysToUncheck:i,indeterminateKeys:d,cascade:l,leafOnly:a,checkStrategy:v,allowNotLoaded:h}=e;if(!l)return o!==void 0?{checkedKeys:ri(n,o),indeterminateKeys:Array.from(d)}:i!==void 0?{checkedKeys:li(n,i),indeterminateKeys:Array.from(d)}:{checkedKeys:Array.from(n),indeterminateKeys:Array.from(d)};const{levelTreeNodeMap:f}=t;let g;i!==void 0?g=fi(i,n,t,h):o!==void 0?g=ci(o,n,t,h):g=kt(n,t,h,!1);const w=v==="parent",k=v==="child"||a,y=g,B=new Set,L=Math.max.apply(null,Array.from(f.keys()));for(let T=L;T>=0;T-=1){const P=T===0,O=f.get(T);for(const m of O){if(m.isLeaf)continue;const{key:x,shallowLoaded:E}=m;if(k&&E&&m.children.forEach(A=>{!A.disabled&&!A.isLeaf&&A.shallowLoaded&&y.has(A.key)&&y.delete(A.key)}),m.disabled||!E)continue;let I=!0,z=!1,U=!0;for(const A of m.children){const ee=A.key;if(!A.disabled){if(U&&(U=!1),y.has(ee))z=!0;else if(B.has(ee)){z=!0,I=!1;break}else if(I=!1,z)break}}I&&!U?(w&&m.children.forEach(A=>{!A.disabled&&y.has(A.key)&&y.delete(A.key)}),y.add(x)):z&&B.add(x),P&&k&&y.has(x)&&y.delete(x)}}return{checkedKeys:Array.from(y),indeterminateKeys:Array.from(B)}}function kt(e,t,n,o){const{treeNodeMap:i,getChildren:d}=t,l=new Set,a=new Set(e);return e.forEach(v=>{const h=i.get(v);h!==void 0&&In(h,f=>{if(f.disabled)return Gt.STOP;const{key:g}=f;if(!l.has(g)&&(l.add(g),a.add(g),ii(f.rawNode,d))){if(o)return Gt.STOP;if(!n)throw new di}})}),a}function hi(e,{includeGroup:t=!1,includeSelf:n=!0},o){var i;const d=o.treeNodeMap;let l=e==null?null:(i=d.get(e))!==null&&i!==void 0?i:null;const a={keyPath:[],treeNodePath:[],treeNode:l};if(l?.ignored)return a.treeNode=null,a;for(;l;)!l.ignored&&(t||!l.isGroup)&&a.treeNodePath.push(l),l=l.parent;return a.treeNodePath.reverse(),n||a.treeNodePath.pop(),a.keyPath=a.treeNodePath.map(v=>v.key),a}function vi(e){if(e.length===0)return null;const t=e[0];return t.isGroup||t.ignored||t.disabled?t.getNext():t}function gi(e,t){const n=e.siblings,o=n.length,{index:i}=e;return t?n[(i+1)%o]:i===n.length-1?null:n[i+1]}function un(e,t,{loop:n=!1,includeDisabled:o=!1}={}){const i=t==="prev"?bi:gi,d={reverse:t==="prev"};let l=!1,a=null;function v(h){if(h!==null){if(h===e){if(!l)l=!0;else if(!e.disabled&&!e.isGroup){a=e;return}}else if((!h.disabled||o)&&!h.ignored&&!h.isGroup){a=h;return}if(h.isGroup){const f=Zt(h,d);f!==null?a=f:v(i(h,n))}else{const f=i(h,!1);if(f!==null)v(f);else{const g=pi(h);g?.isGroup?v(i(g,n)):n&&v(i(h,!0))}}}}return v(e),a}function bi(e,t){const n=e.siblings,o=n.length,{index:i}=e;return t?n[(i-1+o)%o]:i===0?null:n[i-1]}function pi(e){return e.parent}function Zt(e,t={}){const{reverse:n=!1}=t,{children:o}=e;if(o){const{length:i}=o,d=n?i-1:0,l=n?-1:i,a=n?-1:1;for(let v=d;v!==l;v+=a){const h=o[v];if(!h.disabled&&!h.ignored)if(h.isGroup){const f=Zt(h,t);if(f!==null)return f}else return h}}return null}const mi={getChild(){return this.ignored?null:Zt(this)},getParent(){const{parent:e}=this;return e?.isGroup?e.getParent():e},getNext(e={}){return un(this,"next",e)},getPrev(e={}){return un(this,"prev",e)}};function wi(e,t){const n=t?new Set(t):void 0,o=[];function i(d){d.forEach(l=>{o.push(l),!(l.isLeaf||!l.children||l.ignored)&&(l.isGroup||n===void 0||n.has(l.key))&&i(l.children)})}return i(e),o}function xi(e,t){const n=e.key;for(;t;){if(t.key===n)return!0;t=t.parent}return!1}function Bn(e,t,n,o,i,d=null,l=0){const a=[];return e.forEach((v,h)=>{var f;const g=Object.create(o);if(g.rawNode=v,g.siblings=a,g.level=l,g.index=h,g.isFirstChild=h===0,g.isLastChild=h+1===e.length,g.parent=d,!g.ignored){const w=i(v);Array.isArray(w)&&(g.children=Bn(w,t,n,o,i,g,l+1))}a.push(g),t.set(g.key,g),n.has(l)||n.set(l,[]),(f=n.get(l))===null||f===void 0||f.push(g)}),a}function yi(e,t={}){var n;const o=new Map,i=new Map,{getDisabled:d=oi,getIgnored:l=ti,getIsGroup:a=ai,getKey:v=ei}=t,h=(n=t.getChildren)!==null&&n!==void 0?n:Qo,f=t.ignoreEmptyChildren?m=>{const x=h(m);return Array.isArray(x)?x.length?x:null:x}:h,g=Object.assign({get key(){return v(this.rawNode)},get disabled(){return d(this.rawNode)},get isGroup(){return a(this.rawNode)},get isLeaf(){return Jo(this.rawNode,f)},get shallowLoaded(){return ni(this.rawNode,f)},get ignored(){return l(this.rawNode)},contains(m){return xi(this,m)}},mi),w=Bn(e,o,i,g,f);function k(m){if(m==null)return null;const x=o.get(m);return x&&!x.isGroup&&!x.ignored?x:null}function y(m){if(m==null)return null;const x=o.get(m);return x&&!x.ignored?x:null}function B(m,x){const E=y(m);return E?E.getPrev(x):null}function L(m,x){const E=y(m);return E?E.getNext(x):null}function T(m){const x=y(m);return x?x.getParent():null}function P(m){const x=y(m);return x?x.getChild():null}const O={treeNodes:w,treeNodeMap:o,levelTreeNodeMap:i,maxLevel:Math.max(...i.keys()),getChildren:f,getFlattenedNodes(m){return wi(w,m)},getNode:k,getPrev:B,getNext:L,getParent:T,getChild:P,getFirstAvailableNode(){return vi(w)},getPath(m,x={}){return hi(m,x,O)},getCheckedKeys(m,x={}){const{cascade:E=!0,leafOnly:I=!1,checkStrategy:z="all",allowNotLoaded:U=!1}=x;return Dt({checkedKeys:Lt(m),indeterminateKeys:Nt(m),cascade:E,leafOnly:I,checkStrategy:z,allowNotLoaded:U},O)},check(m,x,E={}){const{cascade:I=!0,leafOnly:z=!1,checkStrategy:U="all",allowNotLoaded:A=!1}=E;return Dt({checkedKeys:Lt(x),indeterminateKeys:Nt(x),keysToCheck:m==null?[]:cn(m),cascade:I,leafOnly:z,checkStrategy:U,allowNotLoaded:A},O)},uncheck(m,x,E={}){const{cascade:I=!0,leafOnly:z=!1,checkStrategy:U="all",allowNotLoaded:A=!1}=E;return Dt({checkedKeys:Lt(x),indeterminateKeys:Nt(x),keysToUncheck:m==null?[]:cn(m),cascade:I,leafOnly:z,checkStrategy:U,allowNotLoaded:A},O)},getNonLeafKeys(m={}){return Zo(w,m)}};return O}const Ci={iconSizeTiny:"28px",iconSizeSmall:"34px",iconSizeMedium:"40px",iconSizeLarge:"46px",iconSizeHuge:"52px"};function Si(e){const{textColorDisabled:t,iconColor:n,textColor2:o,fontSizeTiny:i,fontSizeSmall:d,fontSizeMedium:l,fontSizeLarge:a,fontSizeHuge:v}=e;return Object.assign(Object.assign({},Ci),{fontSizeTiny:i,fontSizeSmall:d,fontSizeMedium:l,fontSizeLarge:a,fontSizeHuge:v,textColor:t,iconColor:n,extraTextColor:o})}const _n={name:"Empty",common:rt,self:Si},Ri=C("empty",`
 display: flex;
 flex-direction: column;
 align-items: center;
 font-size: var(--n-font-size);
`,[F("icon",`
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 line-height: var(--n-icon-size);
 color: var(--n-icon-color);
 transition:
 color .3s var(--n-bezier);
 `,[ae("+",[F("description",`
 margin-top: 8px;
 `)])]),F("description",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),F("extra",`
 text-align: center;
 transition: color .3s var(--n-bezier);
 margin-top: 12px;
 color: var(--n-extra-text-color);
 `)]),{computed:dt,defineComponent:ki,h:tt}=await ue("vue"),Ti=Object.assign(Object.assign({},Te.props),{description:String,showDescription:{type:Boolean,default:!0},showIcon:{type:Boolean,default:!0},size:{type:String,default:"medium"},renderIcon:Function}),zi=ki({name:"Empty",props:Ti,slots:Object,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:n,mergedComponentPropsRef:o}=lt(e),i=Te("Empty","-empty",Ri,_n,e,t),{localeRef:d}=kn("Empty"),l=dt(()=>{var f,g,w;return(f=e.description)!==null&&f!==void 0?f:(w=(g=o?.value)===null||g===void 0?void 0:g.Empty)===null||w===void 0?void 0:w.description}),a=dt(()=>{var f,g;return((g=(f=o?.value)===null||f===void 0?void 0:f.Empty)===null||g===void 0?void 0:g.renderIcon)||(()=>tt(Go,null))}),v=dt(()=>{const{size:f}=e,{common:{cubicBezierEaseInOut:g},self:{[fe("iconSize",f)]:w,[fe("fontSize",f)]:k,textColor:y,iconColor:B,extraTextColor:L}}=i.value;return{"--n-icon-size":w,"--n-font-size":k,"--n-bezier":g,"--n-text-color":y,"--n-icon-color":B,"--n-extra-text-color":L}}),h=n?et("empty",dt(()=>{let f="";const{size:g}=e;return f+=g[0],f}),v,e):void 0;return{mergedClsPrefix:t,mergedRenderIcon:a,localizedDescription:dt(()=>l.value||d.value.description),cssVars:n?void 0:v,themeClass:h?.themeClass,onRender:h?.onRender}},render(){const{$slots:e,mergedClsPrefix:t,onRender:n}=this;return n?.(),tt("div",{class:[`${t}-empty`,this.themeClass],style:this.cssVars},this.showIcon?tt("div",{class:`${t}-empty__icon`},e.icon?e.icon():tt($n,{clsPrefix:t},{default:this.mergedRenderIcon})):null,this.showDescription?tt("div",{class:`${t}-empty__description`},e.default?e.default():this.localizedDescription):null,e.extra?tt("div",{class:`${t}-empty__extra`},e.extra()):null)}}),$i={height:"calc(var(--n-option-height) * 7.6)",paddingTiny:"4px 0",paddingSmall:"4px 0",paddingMedium:"4px 0",paddingLarge:"4px 0",paddingHuge:"4px 0",optionPaddingTiny:"0 12px",optionPaddingSmall:"0 12px",optionPaddingMedium:"0 12px",optionPaddingLarge:"0 12px",optionPaddingHuge:"0 12px",loadingSize:"18px"};function Fi(e){const{borderRadius:t,popoverColor:n,textColor3:o,dividerColor:i,textColor2:d,primaryColorPressed:l,textColorDisabled:a,primaryColor:v,opacityDisabled:h,hoverColor:f,fontSizeTiny:g,fontSizeSmall:w,fontSizeMedium:k,fontSizeLarge:y,fontSizeHuge:B,heightTiny:L,heightSmall:T,heightMedium:P,heightLarge:O,heightHuge:m}=e;return Object.assign(Object.assign({},$i),{optionFontSizeTiny:g,optionFontSizeSmall:w,optionFontSizeMedium:k,optionFontSizeLarge:y,optionFontSizeHuge:B,optionHeightTiny:L,optionHeightSmall:T,optionHeightMedium:P,optionHeightLarge:O,optionHeightHuge:m,borderRadius:t,color:n,groupHeaderTextColor:o,actionDividerColor:i,optionTextColor:d,optionTextColorPressed:l,optionTextColorDisabled:a,optionTextColorActive:v,optionOpacityDisabled:h,optionCheckColor:v,optionColorPending:f,optionColorActive:"rgba(0, 0, 0, 0)",optionColorActivePending:f,actionTextColor:d,loadingColor:v})}const An=qt({name:"InternalSelectMenu",common:rt,peers:{Scrollbar:go,Empty:_n},self:Fi}),{defineComponent:Mi,h:Oi,inject:Pi}=await ue("vue"),fn=Mi({name:"NBaseSelectGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{renderLabelRef:e,renderOptionRef:t,labelFieldRef:n,nodePropsRef:o}=Pi(Xt);return{labelField:n,nodeProps:o,renderLabel:e,renderOption:t}},render(){const{clsPrefix:e,renderLabel:t,renderOption:n,nodeProps:o,tmNode:{rawNode:i}}=this,d=o?.(i),l=t?t(i,!1):ot(i[this.labelField],i,!1),a=Oi("div",Object.assign({},d,{class:[`${e}-base-select-group-header`,d?.class]}),l);return i.render?i.render({node:a,option:i}):n?n({node:a,option:i,selected:!1}):a}}),{defineComponent:Ii,h:ht,inject:Bi,Transition:_i}=await ue("vue");function Ai(e,t){return ht(_i,{name:"fade-in-scale-up-transition"},{default:()=>e?ht($n,{clsPrefix:t,class:`${t}-base-select-option__check`},{default:()=>ht(Ko)}):null})}const hn=Ii({name:"NBaseSelectOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(e){const{valueRef:t,pendingTmNodeRef:n,multipleRef:o,valueSetRef:i,renderLabelRef:d,renderOptionRef:l,labelFieldRef:a,valueFieldRef:v,showCheckmarkRef:h,nodePropsRef:f,handleOptionClick:g,handleOptionMouseEnter:w}=Bi(Xt),k=Qe(()=>{const{value:T}=n;return T?e.tmNode.key===T.key:!1});function y(T){const{tmNode:P}=e;P.disabled||g(T,P)}function B(T){const{tmNode:P}=e;P.disabled||w(T,P)}function L(T){const{tmNode:P}=e,{value:O}=k;P.disabled||O||w(T,P)}return{multiple:o,isGrouped:Qe(()=>{const{tmNode:T}=e,{parent:P}=T;return P&&P.rawNode.type==="group"}),showCheckmark:h,nodeProps:f,isPending:k,isSelected:Qe(()=>{const{value:T}=t,{value:P}=o;if(T===null)return!1;const O=e.tmNode.rawNode[v.value];if(P){const{value:m}=i;return m.has(O)}else return T===O}),labelField:a,renderLabel:d,renderOption:l,handleMouseMove:L,handleMouseEnter:B,handleClick:y}},render(){const{clsPrefix:e,tmNode:{rawNode:t},isSelected:n,isPending:o,isGrouped:i,showCheckmark:d,nodeProps:l,renderOption:a,renderLabel:v,handleClick:h,handleMouseEnter:f,handleMouseMove:g}=this,w=Ai(n,e),k=v?[v(t,n),d&&w]:[ot(t[this.labelField],t,n),d&&w],y=l?.(t),B=ht("div",Object.assign({},y,{class:[`${e}-base-select-option`,t.class,y?.class,{[`${e}-base-select-option--disabled`]:t.disabled,[`${e}-base-select-option--selected`]:n,[`${e}-base-select-option--grouped`]:i,[`${e}-base-select-option--pending`]:o,[`${e}-base-select-option--show-checkmark`]:d}],style:[y?.style||"",t.style||""],onClick:_t([h,y?.onClick]),onMouseenter:_t([f,y?.onMouseenter]),onMousemove:_t([g,y?.onMousemove])}),ht("div",{class:`${e}-base-select-option__content`},k));return t.render?t.render({node:B,option:t,selected:n}):a?a({node:B,option:t,selected:n}):B}}),Ei=C("base-select-menu",`
 line-height: 1.5;
 outline: none;
 z-index: 0;
 position: relative;
 border-radius: var(--n-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-color);
`,[C("scrollbar",`
 max-height: var(--n-height);
 `),C("virtual-list",`
 max-height: var(--n-height);
 `),C("base-select-option",`
 min-height: var(--n-option-height);
 font-size: var(--n-option-font-size);
 display: flex;
 align-items: center;
 `,[F("content",`
 z-index: 1;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 `)]),C("base-select-group-header",`
 min-height: var(--n-option-height);
 font-size: .93em;
 display: flex;
 align-items: center;
 `),C("base-select-menu-option-wrapper",`
 position: relative;
 width: 100%;
 `),F("loading, empty",`
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `),F("loading",`
 color: var(--n-loading-color);
 font-size: var(--n-loading-size);
 `),F("header",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),F("action",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-top: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),C("base-select-group-header",`
 position: relative;
 cursor: default;
 padding: var(--n-option-padding);
 color: var(--n-group-header-text-color);
 `),C("base-select-option",`
 cursor: pointer;
 position: relative;
 padding: var(--n-option-padding);
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 box-sizing: border-box;
 color: var(--n-option-text-color);
 opacity: 1;
 `,[K("show-checkmark",`
 padding-right: calc(var(--n-option-padding-right) + 20px);
 `),ae("&::before",`
 content: "";
 position: absolute;
 left: 4px;
 right: 4px;
 top: 0;
 bottom: 0;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),ae("&:active",`
 color: var(--n-option-text-color-pressed);
 `),K("grouped",`
 padding-left: calc(var(--n-option-padding-left) * 1.5);
 `),K("pending",[ae("&::before",`
 background-color: var(--n-option-color-pending);
 `)]),K("selected",`
 color: var(--n-option-text-color-active);
 `,[ae("&::before",`
 background-color: var(--n-option-color-active);
 `),K("pending",[ae("&::before",`
 background-color: var(--n-option-color-active-pending);
 `)])]),K("disabled",`
 cursor: not-allowed;
 `,[vt("selected",`
 color: var(--n-option-text-color-disabled);
 `),K("selected",`
 opacity: var(--n-option-opacity-disabled);
 `)]),F("check",`
 font-size: 16px;
 position: absolute;
 right: calc(var(--n-option-padding-right) - 4px);
 top: calc(50% - 7px);
 color: var(--n-option-check-color);
 transition: color .3s var(--n-bezier);
 `,[St({enterScale:"0.5"})])])]),{computed:je,defineComponent:Li,h:be,nextTick:Ni,onBeforeUnmount:Di,onMounted:Vi,provide:vn,ref:xt,toRef:Ne,watch:gn}=await ue("vue"),Hi=Li({name:"InternalSelectMenu",props:Object.assign(Object.assign({},Te.props),{clsPrefix:{type:String,required:!0},scrollable:{type:Boolean,default:!0},treeMate:{type:Object,required:!0},multiple:Boolean,size:{type:String,default:"medium"},value:{type:[String,Number,Array],default:null},autoPending:Boolean,virtualScroll:{type:Boolean,default:!0},show:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},loading:Boolean,focusable:Boolean,renderLabel:Function,renderOption:Function,nodeProps:Function,showCheckmark:{type:Boolean,default:!0},onMousedown:Function,onScroll:Function,onFocus:Function,onBlur:Function,onKeyup:Function,onKeydown:Function,onTabOut:Function,onMouseenter:Function,onMouseleave:Function,onResize:Function,resetMenuOnOptionsChange:{type:Boolean,default:!0},inlineThemeDisabled:Boolean,onToggle:Function}),setup(e){const{mergedClsPrefixRef:t,mergedRtlRef:n}=lt(e),o=Tn("InternalSelectMenu",n,t),i=Te("InternalSelectMenu","-internal-select-menu",Ei,An,e,Ne(e,"clsPrefix")),d=xt(null),l=xt(null),a=xt(null),v=je(()=>e.treeMate.getFlattenedNodes()),h=je(()=>si(v.value)),f=xt(null);function g(){const{treeMate:b}=e;let S=null;const{value:X}=e;X===null?S=b.getFirstAvailableNode():(e.multiple?S=b.getNode((X||[])[(X||[]).length-1]):S=b.getNode(X),(!S||S.disabled)&&(S=b.getFirstAvailableNode())),$(S||null)}function w(){const{value:b}=f;b&&!e.treeMate.getNode(b.key)&&(f.value=null)}let k;gn(()=>e.show,b=>{b?k=gn(()=>e.treeMate,()=>{e.resetMenuOnOptionsChange?(e.autoPending?g():w(),Ni(V)):w()},{immediate:!0}):k?.()},{immediate:!0}),Di(()=>{k?.()});const y=je(()=>ke(i.value.self[fe("optionHeight",e.size)])),B=je(()=>ut(i.value.self[fe("padding",e.size)])),L=je(()=>e.multiple&&Array.isArray(e.value)?new Set(e.value):new Set),T=je(()=>{const b=v.value;return b&&b.length===0});function P(b){const{onToggle:S}=e;S&&S(b)}function O(b){const{onScroll:S}=e;S&&S(b)}function m(b){var S;(S=a.value)===null||S===void 0||S.sync(),O(b)}function x(){var b;(b=a.value)===null||b===void 0||b.sync()}function E(){const{value:b}=f;return b||null}function I(b,S){S.disabled||$(S,!1)}function z(b,S){S.disabled||P(S)}function U(b){var S;ft(b,"action")||(S=e.onKeyup)===null||S===void 0||S.call(e,b)}function A(b){var S;ft(b,"action")||(S=e.onKeydown)===null||S===void 0||S.call(e,b)}function ee(b){var S;(S=e.onMousedown)===null||S===void 0||S.call(e,b),!e.focusable&&b.preventDefault()}function re(){const{value:b}=f;b&&$(b.getNext({loop:!0}),!0)}function p(){const{value:b}=f;b&&$(b.getPrev({loop:!0}),!0)}function $(b,S=!1){f.value=b,S&&V()}function V(){var b,S;const X=f.value;if(!X)return;const de=h.value(X.key);de!==null&&(e.virtualScroll?(b=l.value)===null||b===void 0||b.scrollTo({index:de}):(S=a.value)===null||S===void 0||S.scrollTo({index:de,elSize:y.value}))}function Z(b){var S,X;!((S=d.value)===null||S===void 0)&&S.contains(b.target)&&((X=e.onFocus)===null||X===void 0||X.call(e,b))}function te(b){var S,X;!((S=d.value)===null||S===void 0)&&S.contains(b.relatedTarget)||(X=e.onBlur)===null||X===void 0||X.call(e,b)}vn(Xt,{handleOptionMouseEnter:I,handleOptionClick:z,valueSetRef:L,pendingTmNodeRef:f,nodePropsRef:Ne(e,"nodeProps"),showCheckmarkRef:Ne(e,"showCheckmark"),multipleRef:Ne(e,"multiple"),valueRef:Ne(e,"value"),renderLabelRef:Ne(e,"renderLabel"),renderOptionRef:Ne(e,"renderOption"),labelFieldRef:Ne(e,"labelField"),valueFieldRef:Ne(e,"valueField")}),vn(fo,d),Vi(()=>{const{value:b}=a;b&&b.sync()});const N=je(()=>{const{size:b}=e,{common:{cubicBezierEaseInOut:S},self:{height:X,borderRadius:de,color:he,groupHeaderTextColor:ye,actionDividerColor:ve,optionTextColorPressed:se,optionTextColor:Ve,optionTextColorDisabled:$e,optionTextColorActive:Fe,optionOpacityDisabled:Me,optionCheckColor:Oe,actionTextColor:Ge,optionColorPending:_e,optionColorActive:Ae,loadingColor:qe,loadingSize:He,optionColorActivePending:Ce,[fe("optionFontSize",b)]:Ee,[fe("optionHeight",b)]:me,[fe("optionPadding",b)]:u}}=i.value;return{"--n-height":X,"--n-action-divider-color":ve,"--n-action-text-color":Ge,"--n-bezier":S,"--n-border-radius":de,"--n-color":he,"--n-option-font-size":Ee,"--n-group-header-text-color":ye,"--n-option-check-color":Oe,"--n-option-color-pending":_e,"--n-option-color-active":Ae,"--n-option-color-active-pending":Ce,"--n-option-height":me,"--n-option-opacity-disabled":Me,"--n-option-text-color":Ve,"--n-option-text-color-active":Fe,"--n-option-text-color-disabled":$e,"--n-option-text-color-pressed":se,"--n-option-padding":u,"--n-option-padding-left":ut(u,"left"),"--n-option-padding-right":ut(u,"right"),"--n-loading-color":qe,"--n-loading-size":He}}),{inlineThemeDisabled:J}=e,j=J?et("internal-select-menu",je(()=>e.size[0]),N,e):void 0,Y={selfRef:d,next:re,prev:p,getPendingTmNode:E};return Pn(d,e.onResize),Object.assign({mergedTheme:i,mergedClsPrefix:t,rtlEnabled:o,virtualListRef:l,scrollbarRef:a,itemSize:y,padding:B,flattenedNodes:v,empty:T,virtualListContainer(){const{value:b}=l;return b?.listElRef},virtualListContent(){const{value:b}=l;return b?.itemsElRef},doScroll:O,handleFocusin:Z,handleFocusout:te,handleKeyUp:U,handleKeyDown:A,handleMouseDown:ee,handleVirtualListResize:x,handleVirtualListScroll:m,cssVars:J?void 0:N,themeClass:j?.themeClass,onRender:j?.onRender},Y)},render(){const{$slots:e,virtualScroll:t,clsPrefix:n,mergedTheme:o,themeClass:i,onRender:d}=this;return d?.(),be("div",{ref:"selfRef",tabindex:this.focusable?0:-1,class:[`${n}-base-select-menu`,this.rtlEnabled&&`${n}-base-select-menu--rtl`,i,this.multiple&&`${n}-base-select-menu--multiple`],style:this.cssVars,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onKeyup:this.handleKeyUp,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},De(e.header,l=>l&&be("div",{class:`${n}-base-select-menu__header`,"data-header":!0,key:"header"},l)),this.loading?be("div",{class:`${n}-base-select-menu__loading`},be(Fn,{clsPrefix:n,strokeWidth:20})):this.empty?be("div",{class:`${n}-base-select-menu__empty`,"data-empty":!0},xn(e.empty,()=>[be(zi,{theme:o.peers.Empty,themeOverrides:o.peerOverrides.Empty,size:this.size})])):be(bo,{ref:"scrollbarRef",theme:o.peers.Scrollbar,themeOverrides:o.peerOverrides.Scrollbar,scrollable:this.scrollable,container:t?this.virtualListContainer:void 0,content:t?this.virtualListContent:void 0,onScroll:t?void 0:this.doScroll},{default:()=>t?be(_o,{ref:"virtualListRef",class:`${n}-virtual-list`,items:this.flattenedNodes,itemSize:this.itemSize,showScrollbar:!1,paddingTop:this.padding.top,paddingBottom:this.padding.bottom,onResize:this.handleVirtualListResize,onScroll:this.handleVirtualListScroll,itemResizable:!0},{default:({item:l})=>l.isGroup?be(fn,{key:l.key,clsPrefix:n,tmNode:l}):l.ignored?null:be(hn,{clsPrefix:n,key:l.key,tmNode:l})}):be("div",{class:`${n}-base-select-menu-option-wrapper`,style:{paddingTop:this.padding.top,paddingBottom:this.padding.bottom}},this.flattenedNodes.map(l=>l.isGroup?be(fn,{key:l.key,clsPrefix:n,tmNode:l}):be(hn,{clsPrefix:n,key:l.key,tmNode:l})))}),De(e.action,l=>l&&[be("div",{class:`${n}-base-select-menu__action`,"data-action":!0,key:"action"},l),be(Yo,{onFocus:this.onTabOut,key:"focus-detector"})]))}}),Wi={paddingSingle:"0 26px 0 12px",paddingMultiple:"3px 26px 0 12px",clearSize:"16px",arrowSize:"16px"};function ji(e){const{borderRadius:t,textColor2:n,textColorDisabled:o,inputColor:i,inputColorDisabled:d,primaryColor:l,primaryColorHover:a,warningColor:v,warningColorHover:h,errorColor:f,errorColorHover:g,borderColor:w,iconColor:k,iconColorDisabled:y,clearColor:B,clearColorHover:L,clearColorPressed:T,placeholderColor:P,placeholderColorDisabled:O,fontSizeTiny:m,fontSizeSmall:x,fontSizeMedium:E,fontSizeLarge:I,heightTiny:z,heightSmall:U,heightMedium:A,heightLarge:ee,fontWeight:re}=e;return Object.assign(Object.assign({},Wi),{fontSizeTiny:m,fontSizeSmall:x,fontSizeMedium:E,fontSizeLarge:I,heightTiny:z,heightSmall:U,heightMedium:A,heightLarge:ee,borderRadius:t,fontWeight:re,textColor:n,textColorDisabled:o,placeholderColor:P,placeholderColorDisabled:O,color:i,colorDisabled:d,colorActive:i,border:`1px solid ${w}`,borderHover:`1px solid ${a}`,borderActive:`1px solid ${l}`,borderFocus:`1px solid ${a}`,boxShadowHover:"none",boxShadowActive:`0 0 0 2px ${Je(l,{alpha:.2})}`,boxShadowFocus:`0 0 0 2px ${Je(l,{alpha:.2})}`,caretColor:l,arrowColor:k,arrowColorDisabled:y,loadingColor:l,borderWarning:`1px solid ${v}`,borderHoverWarning:`1px solid ${h}`,borderActiveWarning:`1px solid ${v}`,borderFocusWarning:`1px solid ${h}`,boxShadowHoverWarning:"none",boxShadowActiveWarning:`0 0 0 2px ${Je(v,{alpha:.2})}`,boxShadowFocusWarning:`0 0 0 2px ${Je(v,{alpha:.2})}`,colorActiveWarning:i,caretColorWarning:v,borderError:`1px solid ${f}`,borderHoverError:`1px solid ${g}`,borderActiveError:`1px solid ${f}`,borderFocusError:`1px solid ${g}`,boxShadowHoverError:"none",boxShadowActiveError:`0 0 0 2px ${Je(f,{alpha:.2})}`,boxShadowFocusError:`0 0 0 2px ${Je(f,{alpha:.2})}`,colorActiveError:i,caretColorError:f,clearColor:B,clearColorHover:L,clearColorPressed:T})}const En=qt({name:"InternalSelection",common:rt,peers:{Popover:ho},self:ji}),Ki=ae([C("base-selection",`
 --n-padding-single: var(--n-padding-single-top) var(--n-padding-single-right) var(--n-padding-single-bottom) var(--n-padding-single-left);
 --n-padding-multiple: var(--n-padding-multiple-top) var(--n-padding-multiple-right) var(--n-padding-multiple-bottom) var(--n-padding-multiple-left);
 position: relative;
 z-index: auto;
 box-shadow: none;
 width: 100%;
 max-width: 100%;
 display: inline-block;
 vertical-align: bottom;
 border-radius: var(--n-border-radius);
 min-height: var(--n-height);
 line-height: 1.5;
 font-size: var(--n-font-size);
 `,[C("base-loading",`
 color: var(--n-loading-color);
 `),C("base-selection-tags","min-height: var(--n-height);"),F("border, state-border",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border: var(--n-border);
 border-radius: inherit;
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),F("state-border",`
 z-index: 1;
 border-color: #0000;
 `),C("base-suffix",`
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `,[F("arrow",`
 font-size: var(--n-arrow-size);
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 `)]),C("base-selection-overlay",`
 display: flex;
 align-items: center;
 white-space: nowrap;
 pointer-events: none;
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 padding: var(--n-padding-single);
 transition: color .3s var(--n-bezier);
 `,[F("wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),C("base-selection-placeholder",`
 color: var(--n-placeholder-color);
 `,[F("inner",`
 max-width: 100%;
 overflow: hidden;
 `)]),C("base-selection-tags",`
 cursor: pointer;
 outline: none;
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 display: flex;
 padding: var(--n-padding-multiple);
 flex-wrap: wrap;
 align-items: center;
 width: 100%;
 vertical-align: bottom;
 background-color: var(--n-color);
 border-radius: inherit;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),C("base-selection-label",`
 height: var(--n-height);
 display: inline-flex;
 width: 100%;
 vertical-align: bottom;
 cursor: pointer;
 outline: none;
 z-index: auto;
 box-sizing: border-box;
 position: relative;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: inherit;
 background-color: var(--n-color);
 align-items: center;
 `,[C("base-selection-input",`
 font-size: inherit;
 line-height: inherit;
 outline: none;
 cursor: pointer;
 box-sizing: border-box;
 border:none;
 width: 100%;
 padding: var(--n-padding-single);
 background-color: #0000;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 caret-color: var(--n-caret-color);
 `,[F("content",`
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap; 
 `)]),F("render-label",`
 color: var(--n-text-color);
 `)]),vt("disabled",[ae("&:hover",[F("state-border",`
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]),K("focus",[F("state-border",`
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]),K("active",[F("state-border",`
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `),C("base-selection-label","background-color: var(--n-color-active);"),C("base-selection-tags","background-color: var(--n-color-active);")])]),K("disabled","cursor: not-allowed;",[F("arrow",`
 color: var(--n-arrow-color-disabled);
 `),C("base-selection-label",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[C("base-selection-input",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `),F("render-label",`
 color: var(--n-text-color-disabled);
 `)]),C("base-selection-tags",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `),C("base-selection-placeholder",`
 cursor: not-allowed;
 color: var(--n-placeholder-color-disabled);
 `)]),C("base-selection-input-tag",`
 height: calc(var(--n-height) - 6px);
 line-height: calc(var(--n-height) - 6px);
 outline: none;
 display: none;
 position: relative;
 margin-bottom: 3px;
 max-width: 100%;
 vertical-align: bottom;
 `,[F("input",`
 font-size: inherit;
 font-family: inherit;
 min-width: 1px;
 padding: 0;
 background-color: #0000;
 outline: none;
 border: none;
 max-width: 100%;
 overflow: hidden;
 width: 1em;
 line-height: inherit;
 cursor: pointer;
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 `),F("mirror",`
 position: absolute;
 left: 0;
 top: 0;
 white-space: pre;
 visibility: hidden;
 user-select: none;
 -webkit-user-select: none;
 opacity: 0;
 `)]),["warning","error"].map(e=>K(`${e}-status`,[F("state-border",`border: var(--n-border-${e});`),vt("disabled",[ae("&:hover",[F("state-border",`
 box-shadow: var(--n-box-shadow-hover-${e});
 border: var(--n-border-hover-${e});
 `)]),K("active",[F("state-border",`
 box-shadow: var(--n-box-shadow-active-${e});
 border: var(--n-border-active-${e});
 `),C("base-selection-label",`background-color: var(--n-color-active-${e});`),C("base-selection-tags",`background-color: var(--n-color-active-${e});`)]),K("focus",[F("state-border",`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))]),C("base-selection-popover",`
 margin-bottom: -3px;
 display: flex;
 flex-wrap: wrap;
 margin-right: -8px;
 `),C("base-selection-tag-wrapper",`
 max-width: 100%;
 display: inline-flex;
 padding: 0 7px 3px 0;
 `,[ae("&:last-child","padding-right: 0;"),C("tag",`
 font-size: 14px;
 max-width: 100%;
 `,[F("content",`
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]),{computed:nt,defineComponent:Ui,Fragment:Gi,h:q,nextTick:qi,onMounted:Xi,ref:we,toRef:Vt,watch:Ht,watchEffect:Yi}=await ue("vue"),Zi=Ui({name:"InternalSelection",props:Object.assign(Object.assign({},Te.props),{clsPrefix:{type:String,required:!0},bordered:{type:Boolean,default:void 0},active:Boolean,pattern:{type:String,default:""},placeholder:String,selectedOption:{type:Object,default:null},selectedOptions:{type:Array,default:null},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},multiple:Boolean,filterable:Boolean,clearable:Boolean,disabled:Boolean,size:{type:String,default:"medium"},loading:Boolean,autofocus:Boolean,showArrow:{type:Boolean,default:!0},inputProps:Object,focused:Boolean,renderTag:Function,onKeydown:Function,onClick:Function,onBlur:Function,onFocus:Function,onDeleteOption:Function,maxTagCount:[String,Number],ellipsisTagPopoverProps:Object,onClear:Function,onPatternInput:Function,onPatternFocus:Function,onPatternBlur:Function,renderLabel:Function,status:String,inlineThemeDisabled:Boolean,ignoreComposition:{type:Boolean,default:!0},onResize:Function}),setup(e){const{mergedClsPrefixRef:t,mergedRtlRef:n}=lt(e),o=Tn("InternalSelection",n,t),i=we(null),d=we(null),l=we(null),a=we(null),v=we(null),h=we(null),f=we(null),g=we(null),w=we(null),k=we(null),y=we(!1),B=we(!1),L=we(!1),T=Te("InternalSelection","-internal-selection",Ki,En,e,Vt(e,"clsPrefix")),P=nt(()=>e.clearable&&!e.disabled&&(L.value||e.active)),O=nt(()=>e.selectedOption?e.renderTag?e.renderTag({option:e.selectedOption,handleClose:()=>{}}):e.renderLabel?e.renderLabel(e.selectedOption,!0):ot(e.selectedOption[e.labelField],e.selectedOption,!0):e.placeholder),m=nt(()=>{const r=e.selectedOption;if(r)return r[e.labelField]}),x=nt(()=>e.multiple?!!(Array.isArray(e.selectedOptions)&&e.selectedOptions.length):e.selectedOption!==null);function E(){var r;const{value:c}=i;if(c){const{value:M}=d;M&&(M.style.width=`${c.offsetWidth}px`,e.maxTagCount!=="responsive"&&((r=w.value)===null||r===void 0||r.sync({showAllItemsBeforeCalculate:!1})))}}function I(){const{value:r}=k;r&&(r.style.display="none")}function z(){const{value:r}=k;r&&(r.style.display="inline-block")}Ht(Vt(e,"active"),r=>{r||I()}),Ht(Vt(e,"pattern"),()=>{e.multiple&&qi(E)});function U(r){const{onFocus:c}=e;c&&c(r)}function A(r){const{onBlur:c}=e;c&&c(r)}function ee(r){const{onDeleteOption:c}=e;c&&c(r)}function re(r){const{onClear:c}=e;c&&c(r)}function p(r){const{onPatternInput:c}=e;c&&c(r)}function $(r){var c;(!r.relatedTarget||!(!((c=l.value)===null||c===void 0)&&c.contains(r.relatedTarget)))&&U(r)}function V(r){var c;!((c=l.value)===null||c===void 0)&&c.contains(r.relatedTarget)||A(r)}function Z(r){re(r)}function te(){L.value=!0}function N(){L.value=!1}function J(r){!e.active||!e.filterable||r.target!==d.value&&r.preventDefault()}function j(r){ee(r)}const Y=we(!1);function b(r){if(r.key==="Backspace"&&!Y.value&&!e.pattern.length){const{selectedOptions:c}=e;c?.length&&j(c[c.length-1])}}let S=null;function X(r){const{value:c}=i;if(c){const M=r.target.value;c.textContent=M,E()}e.ignoreComposition&&Y.value?S=r:p(r)}function de(){Y.value=!0}function he(){Y.value=!1,e.ignoreComposition&&p(S),S=null}function ye(r){var c;B.value=!0,(c=e.onPatternFocus)===null||c===void 0||c.call(e,r)}function ve(r){var c;B.value=!1,(c=e.onPatternBlur)===null||c===void 0||c.call(e,r)}function se(){var r,c;if(e.filterable)B.value=!1,(r=h.value)===null||r===void 0||r.blur(),(c=d.value)===null||c===void 0||c.blur();else if(e.multiple){const{value:M}=a;M?.blur()}else{const{value:M}=v;M?.blur()}}function Ve(){var r,c,M;e.filterable?(B.value=!1,(r=h.value)===null||r===void 0||r.focus()):e.multiple?(c=a.value)===null||c===void 0||c.focus():(M=v.value)===null||M===void 0||M.focus()}function $e(){const{value:r}=d;r&&(z(),r.focus())}function Fe(){const{value:r}=d;r&&r.blur()}function Me(r){const{value:c}=f;c&&c.setTextContent(`+${r}`)}function Oe(){const{value:r}=g;return r}function Ge(){return d.value}let _e=null;function Ae(){_e!==null&&window.clearTimeout(_e)}function qe(){e.active||(Ae(),_e=window.setTimeout(()=>{x.value&&(y.value=!0)},100))}function He(){Ae()}function Ce(r){r||(Ae(),y.value=!1)}Ht(x,r=>{r||(y.value=!1)}),Xi(()=>{Yi(()=>{const r=h.value;r&&(e.disabled?r.removeAttribute("tabindex"):r.tabIndex=B.value?-1:0)})}),Pn(l,e.onResize);const{inlineThemeDisabled:Ee}=e,me=nt(()=>{const{size:r}=e,{common:{cubicBezierEaseInOut:c},self:{fontWeight:M,borderRadius:Q,color:ne,placeholderColor:ge,textColor:le,paddingSingle:oe,paddingMultiple:Se,caretColor:Xe,colorDisabled:We,textColorDisabled:Pe,placeholderColorDisabled:s,colorActive:R,boxShadowFocus:_,boxShadowActive:G,boxShadowHover:H,border:D,borderFocus:W,borderHover:ie,borderActive:Re,arrowColor:zt,arrowColorDisabled:$t,loadingColor:Ft,colorActiveWarning:Nn,boxShadowFocusWarning:Dn,boxShadowActiveWarning:Vn,boxShadowHoverWarning:Hn,borderWarning:Wn,borderFocusWarning:jn,borderHoverWarning:Kn,borderActiveWarning:Un,colorActiveError:Gn,boxShadowFocusError:qn,boxShadowActiveError:Xn,boxShadowHoverError:Yn,borderError:Zn,borderFocusError:Jn,borderHoverError:Qn,borderActiveError:eo,clearColor:to,clearColorHover:no,clearColorPressed:oo,clearSize:io,arrowSize:ro,[fe("height",r)]:lo,[fe("fontSize",r)]:ao}}=T.value,gt=ut(oe),bt=ut(Se);return{"--n-bezier":c,"--n-border":D,"--n-border-active":Re,"--n-border-focus":W,"--n-border-hover":ie,"--n-border-radius":Q,"--n-box-shadow-active":G,"--n-box-shadow-focus":_,"--n-box-shadow-hover":H,"--n-caret-color":Xe,"--n-color":ne,"--n-color-active":R,"--n-color-disabled":We,"--n-font-size":ao,"--n-height":lo,"--n-padding-single-top":gt.top,"--n-padding-multiple-top":bt.top,"--n-padding-single-right":gt.right,"--n-padding-multiple-right":bt.right,"--n-padding-single-left":gt.left,"--n-padding-multiple-left":bt.left,"--n-padding-single-bottom":gt.bottom,"--n-padding-multiple-bottom":bt.bottom,"--n-placeholder-color":ge,"--n-placeholder-color-disabled":s,"--n-text-color":le,"--n-text-color-disabled":Pe,"--n-arrow-color":zt,"--n-arrow-color-disabled":$t,"--n-loading-color":Ft,"--n-color-active-warning":Nn,"--n-box-shadow-focus-warning":Dn,"--n-box-shadow-active-warning":Vn,"--n-box-shadow-hover-warning":Hn,"--n-border-warning":Wn,"--n-border-focus-warning":jn,"--n-border-hover-warning":Kn,"--n-border-active-warning":Un,"--n-color-active-error":Gn,"--n-box-shadow-focus-error":qn,"--n-box-shadow-active-error":Xn,"--n-box-shadow-hover-error":Yn,"--n-border-error":Zn,"--n-border-focus-error":Jn,"--n-border-hover-error":Qn,"--n-border-active-error":eo,"--n-clear-size":io,"--n-clear-color":to,"--n-clear-color-hover":no,"--n-clear-color-pressed":oo,"--n-arrow-size":ro,"--n-font-weight":M}}),u=Ee?et("internal-selection",nt(()=>e.size[0]),me,e):void 0;return{mergedTheme:T,mergedClearable:P,mergedClsPrefix:t,rtlEnabled:o,patternInputFocused:B,filterablePlaceholder:O,label:m,selected:x,showTagsPanel:y,isComposing:Y,counterRef:f,counterWrapperRef:g,patternInputMirrorRef:i,patternInputRef:d,selfRef:l,multipleElRef:a,singleElRef:v,patternInputWrapperRef:h,overflowRef:w,inputTagElRef:k,handleMouseDown:J,handleFocusin:$,handleClear:Z,handleMouseEnter:te,handleMouseLeave:N,handleDeleteOption:j,handlePatternKeyDown:b,handlePatternInputInput:X,handlePatternInputBlur:ve,handlePatternInputFocus:ye,handleMouseEnterCounter:qe,handleMouseLeaveCounter:He,handleFocusout:V,handleCompositionEnd:he,handleCompositionStart:de,onPopoverUpdateShow:Ce,focus:Ve,focusInput:$e,blur:se,blurInput:Fe,updateCounter:Me,getCounter:Oe,getTail:Ge,renderLabel:e.renderLabel,cssVars:Ee?void 0:me,themeClass:u?.themeClass,onRender:u?.onRender}},render(){const{status:e,multiple:t,size:n,disabled:o,filterable:i,maxTagCount:d,bordered:l,clsPrefix:a,ellipsisTagPopoverProps:v,onRender:h,renderTag:f,renderLabel:g}=this;h?.();const w=d==="responsive",k=typeof d=="number",y=w||k,B=q(po,null,{default:()=>q(wo,{clsPrefix:a,loading:this.loading,showArrow:this.showArrow,showClear:this.mergedClearable&&this.selected,onClear:this.handleClear},{default:()=>{var T,P;return(P=(T=this.$slots).arrow)===null||P===void 0?void 0:P.call(T)}})});let L;if(t){const{labelField:T}=this,P=p=>q("div",{class:`${a}-base-selection-tag-wrapper`,key:p.value},f?f({option:p,handleClose:()=>{this.handleDeleteOption(p)}}):q(Pt,{size:n,closable:!p.disabled,disabled:o,onClose:()=>{this.handleDeleteOption(p)},internalCloseIsButtonTag:!1,internalCloseFocusable:!1},{default:()=>g?g(p,!0):ot(p[T],p,!0)})),O=()=>(k?this.selectedOptions.slice(0,d):this.selectedOptions).map(P),m=i?q("div",{class:`${a}-base-selection-input-tag`,ref:"inputTagElRef",key:"__input-tag__"},q("input",Object.assign({},this.inputProps,{ref:"patternInputRef",tabindex:-1,disabled:o,value:this.pattern,autofocus:this.autofocus,class:`${a}-base-selection-input-tag__input`,onBlur:this.handlePatternInputBlur,onFocus:this.handlePatternInputFocus,onKeydown:this.handlePatternKeyDown,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),q("span",{ref:"patternInputMirrorRef",class:`${a}-base-selection-input-tag__mirror`},this.pattern)):null,x=w?()=>q("div",{class:`${a}-base-selection-tag-wrapper`,ref:"counterWrapperRef"},q(Pt,{size:n,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,onMouseleave:this.handleMouseLeaveCounter,disabled:o})):void 0;let E;if(k){const p=this.selectedOptions.length-d;p>0&&(E=q("div",{class:`${a}-base-selection-tag-wrapper`,key:"__counter__"},q(Pt,{size:n,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,disabled:o},{default:()=>`+${p}`})))}const I=w?i?q(sn,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,getTail:this.getTail,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:O,counter:x,tail:()=>m}):q(sn,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:O,counter:x}):k&&E?O().concat(E):O(),z=y?()=>q("div",{class:`${a}-base-selection-popover`},w?O():this.selectedOptions.map(P)):void 0,U=y?Object.assign({show:this.showTagsPanel,trigger:"hover",overlap:!0,placement:"top",width:"trigger",onUpdateShow:this.onPopoverUpdateShow,theme:this.mergedTheme.peers.Popover,themeOverrides:this.mergedTheme.peerOverrides.Popover},v):null,ee=(this.selected?!1:this.active?!this.pattern&&!this.isComposing:!0)?q("div",{class:`${a}-base-selection-placeholder ${a}-base-selection-overlay`},q("div",{class:`${a}-base-selection-placeholder__inner`},this.placeholder)):null,re=i?q("div",{ref:"patternInputWrapperRef",class:`${a}-base-selection-tags`},I,w?null:m,B):q("div",{ref:"multipleElRef",class:`${a}-base-selection-tags`,tabindex:o?void 0:0},I,B);L=q(Gi,null,y?q(vo,Object.assign({},U,{scrollable:!0,style:"max-height: calc(var(--v-target-height) * 6.6);"}),{trigger:()=>re,default:z}):re,ee)}else if(i){const T=this.pattern||this.isComposing,P=this.active?!T:!this.selected,O=this.active?!1:this.selected;L=q("div",{ref:"patternInputWrapperRef",class:`${a}-base-selection-label`,title:this.patternInputFocused?void 0:dn(this.label)},q("input",Object.assign({},this.inputProps,{ref:"patternInputRef",class:`${a}-base-selection-input`,value:this.active?this.pattern:"",placeholder:"",readonly:o,disabled:o,tabindex:-1,autofocus:this.autofocus,onFocus:this.handlePatternInputFocus,onBlur:this.handlePatternInputBlur,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),O?q("div",{class:`${a}-base-selection-label__render-label ${a}-base-selection-overlay`,key:"input"},q("div",{class:`${a}-base-selection-overlay__wrapper`},f?f({option:this.selectedOption,handleClose:()=>{}}):g?g(this.selectedOption,!0):ot(this.label,this.selectedOption,!0))):null,P?q("div",{class:`${a}-base-selection-placeholder ${a}-base-selection-overlay`,key:"placeholder"},q("div",{class:`${a}-base-selection-overlay__wrapper`},this.filterablePlaceholder)):null,B)}else L=q("div",{ref:"singleElRef",class:`${a}-base-selection-label`,tabindex:this.disabled?void 0:0},this.label!==void 0?q("div",{class:`${a}-base-selection-input`,title:dn(this.label),key:"input"},q("div",{class:`${a}-base-selection-input__content`},f?f({option:this.selectedOption,handleClose:()=>{}}):g?g(this.selectedOption,!0):ot(this.label,this.selectedOption,!0))):q("div",{class:`${a}-base-selection-placeholder ${a}-base-selection-overlay`,key:"placeholder"},q("div",{class:`${a}-base-selection-placeholder__inner`},this.placeholder)),B);return q("div",{ref:"selfRef",class:[`${a}-base-selection`,this.rtlEnabled&&`${a}-base-selection--rtl`,this.themeClass,e&&`${a}-base-selection--${e}-status`,{[`${a}-base-selection--active`]:this.active,[`${a}-base-selection--selected`]:this.selected||this.active&&this.pattern,[`${a}-base-selection--disabled`]:this.disabled,[`${a}-base-selection--multiple`]:this.multiple,[`${a}-base-selection--focus`]:this.focused}],style:this.cssVars,onClick:this.onClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onKeydown:this.onKeydown,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onMousedown:this.handleMouseDown},L,l?q("div",{class:`${a}-base-selection__border`}):null,l?q("div",{class:`${a}-base-selection__state-border`}):null)}});function Tt(e){return e.type==="group"}function Ln(e){return e.type==="ignored"}function Wt(e,t){try{return!!(1+t.toString().toLowerCase().indexOf(e.trim().toLowerCase()))}catch{return!1}}function Ji(e,t){return{getIsGroup:Tt,getIgnored:Ln,getKey(o){return Tt(o)?o.name||o.key||"key-required":o[e]},getChildren(o){return o[t]}}}function Qi(e,t,n,o){if(!t)return e;function i(d){if(!Array.isArray(d))return[];const l=[];for(const a of d)if(Tt(a)){const v=i(a[o]);v.length&&l.push(Object.assign({},a,{[o]:v}))}else{if(Ln(a))continue;t(n,a)&&l.push(a)}return l}return i(e)}function er(e,t,n){const o=new Map;return e.forEach(i=>{Tt(i)?i[n].forEach(d=>{o.set(d[t],d)}):o.set(i[t],i)}),o}function tr(e){const{boxShadow2:t}=e;return{menuBoxShadow:t}}const nr=qt({name:"Select",common:rt,peers:{InternalSelection:En,InternalSelectMenu:An},self:tr}),or=ae([C("select",`
 z-index: auto;
 outline: none;
 width: 100%;
 position: relative;
 font-weight: var(--n-font-weight);
 `),C("select-menu",`
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `,[St({originalTransition:"background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)"})])]),{computed:Ie,defineComponent:ir,h:Ze,ref:ze,toRef:jt,Transition:rr,vShow:lr,watch:ar,watchEffect:Hr,withDirectives:sr}=await ue("vue"),dr=Object.assign(Object.assign({},Te.props),{to:it.propTo,bordered:{type:Boolean,default:void 0},clearable:Boolean,clearFilterAfterSelect:{type:Boolean,default:!0},options:{type:Array,default:()=>[]},defaultValue:{type:[String,Number,Array],default:null},keyboard:{type:Boolean,default:!0},value:[String,Number,Array],placeholder:String,menuProps:Object,multiple:Boolean,size:String,menuSize:{type:String},filterable:Boolean,disabled:{type:Boolean,default:void 0},remote:Boolean,loading:Boolean,filter:Function,placement:{type:String,default:"bottom-start"},widthMode:{type:String,default:"trigger"},tag:Boolean,onCreate:Function,fallbackOption:{type:[Function,Boolean],default:void 0},show:{type:Boolean,default:void 0},showArrow:{type:Boolean,default:!0},maxTagCount:[Number,String],ellipsisTagPopoverProps:Object,consistentMenuWidth:{type:Boolean,default:!0},virtualScroll:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},childrenField:{type:String,default:"children"},renderLabel:Function,renderOption:Function,renderTag:Function,"onUpdate:value":[Function,Array],inputProps:Object,nodeProps:Function,ignoreComposition:{type:Boolean,default:!0},showOnFocus:Boolean,onUpdateValue:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onFocus:[Function,Array],onScroll:[Function,Array],onSearch:[Function,Array],onUpdateShow:[Function,Array],"onUpdate:show":[Function,Array],displayDirective:{type:String,default:"show"},resetMenuOnOptionsChange:{type:Boolean,default:!0},status:String,showCheckmark:{type:Boolean,default:!0},onChange:[Function,Array],items:Array}),Wr=ir({name:"Select",props:dr,slots:Object,setup(e){const{mergedClsPrefixRef:t,mergedBorderedRef:n,namespaceRef:o,inlineThemeDisabled:i}=lt(e),d=Te("Select","-select",or,nr,e,t),l=ze(e.defaultValue),a=jt(e,"value"),v=Rt(a,l),h=ze(!1),f=ze(""),g=yo(e,["items","options"]),w=ze([]),k=ze([]),y=Ie(()=>k.value.concat(w.value).concat(g.value)),B=Ie(()=>{const{filter:s}=e;if(s)return s;const{labelField:R,valueField:_}=e;return(G,H)=>{if(!H)return!1;const D=H[R];if(typeof D=="string")return Wt(G,D);const W=H[_];return typeof W=="string"?Wt(G,W):typeof W=="number"?Wt(G,String(W)):!1}}),L=Ie(()=>{if(e.remote)return g.value;{const{value:s}=y,{value:R}=f;return!R.length||!e.filterable?s:Qi(s,B.value,R,e.childrenField)}}),T=Ie(()=>{const{valueField:s,childrenField:R}=e,_=Ji(s,R);return yi(L.value,_)}),P=Ie(()=>er(y.value,e.valueField,e.childrenField)),O=ze(!1),m=Rt(jt(e,"show"),O),x=ze(null),E=ze(null),I=ze(null),{localeRef:z}=kn("Select"),U=Ie(()=>{var s;return(s=e.placeholder)!==null&&s!==void 0?s:z.value.placeholder}),A=[],ee=ze(new Map),re=Ie(()=>{const{fallbackOption:s}=e;if(s===void 0){const{labelField:R,valueField:_}=e;return G=>({[R]:String(G),[_]:G})}return s===!1?!1:R=>Object.assign(s(R),{value:R})});function p(s){const R=e.remote,{value:_}=ee,{value:G}=P,{value:H}=re,D=[];return s.forEach(W=>{if(G.has(W))D.push(G.get(W));else if(R&&_.has(W))D.push(_.get(W));else if(H){const ie=H(W);ie&&D.push(ie)}}),D}const $=Ie(()=>{if(e.multiple){const{value:s}=v;return Array.isArray(s)?p(s):[]}return null}),V=Ie(()=>{const{value:s}=v;return!e.multiple&&!Array.isArray(s)?s===null?null:p([s])[0]||null:null}),Z=Yt(e),{mergedSizeRef:te,mergedDisabledRef:N,mergedStatusRef:J}=Z;function j(s,R){const{onChange:_,"onUpdate:value":G,onUpdateValue:H}=e,{nTriggerFormChange:D,nTriggerFormInput:W}=Z;_&&ce(_,s,R),H&&ce(H,s,R),G&&ce(G,s,R),l.value=s,D(),W()}function Y(s){const{onBlur:R}=e,{nTriggerFormBlur:_}=Z;R&&ce(R,s),_()}function b(){const{onClear:s}=e;s&&ce(s)}function S(s){const{onFocus:R,showOnFocus:_}=e,{nTriggerFormFocus:G}=Z;R&&ce(R,s),G(),_&&ve()}function X(s){const{onSearch:R}=e;R&&ce(R,s)}function de(s){const{onScroll:R}=e;R&&ce(R,s)}function he(){var s;const{remote:R,multiple:_}=e;if(R){const{value:G}=ee;if(_){const{valueField:H}=e;(s=$.value)===null||s===void 0||s.forEach(D=>{G.set(D[H],D)})}else{const H=V.value;H&&G.set(H[e.valueField],H)}}}function ye(s){const{onUpdateShow:R,"onUpdate:show":_}=e;R&&ce(R,s),_&&ce(_,s),O.value=s}function ve(){N.value||(ye(!0),O.value=!0,e.filterable&&oe())}function se(){ye(!1)}function Ve(){f.value="",k.value=A}const $e=ze(!1);function Fe(){e.filterable&&($e.value=!0)}function Me(){e.filterable&&($e.value=!1,m.value||Ve())}function Oe(){N.value||(m.value?e.filterable?oe():se():ve())}function Ge(s){var R,_;!((_=(R=I.value)===null||R===void 0?void 0:R.selfRef)===null||_===void 0)&&_.contains(s.relatedTarget)||(h.value=!1,Y(s),se())}function _e(s){S(s),h.value=!0}function Ae(){h.value=!0}function qe(s){var R;!((R=x.value)===null||R===void 0)&&R.$el.contains(s.relatedTarget)||(h.value=!1,Y(s),se())}function He(){var s;(s=x.value)===null||s===void 0||s.focus(),se()}function Ce(s){var R;m.value&&(!((R=x.value)===null||R===void 0)&&R.$el.contains(mo(s))||se())}function Ee(s){if(!Array.isArray(s))return[];if(re.value)return Array.from(s);{const{remote:R}=e,{value:_}=P;if(R){const{value:G}=ee;return s.filter(H=>_.has(H)||G.has(H))}else return s.filter(G=>_.has(G))}}function me(s){u(s.rawNode)}function u(s){if(N.value)return;const{tag:R,remote:_,clearFilterAfterSelect:G,valueField:H}=e;if(R&&!_){const{value:D}=k,W=D[0]||null;if(W){const ie=w.value;ie.length?ie.push(W):w.value=[W],k.value=A}}if(_&&ee.value.set(s[H],s),e.multiple){const D=Ee(v.value),W=D.findIndex(ie=>ie===s[H]);if(~W){if(D.splice(W,1),R&&!_){const ie=r(s[H]);~ie&&(w.value.splice(ie,1),G&&(f.value=""))}}else D.push(s[H]),G&&(f.value="");j(D,p(D))}else{if(R&&!_){const D=r(s[H]);~D?w.value=[w.value[D]]:w.value=A}le(),se(),j(s[H],s)}}function r(s){return w.value.findIndex(_=>_[e.valueField]===s)}function c(s){m.value||ve();const{value:R}=s.target;f.value=R;const{tag:_,remote:G}=e;if(X(R),_&&!G){if(!R){k.value=A;return}const{onCreate:H}=e,D=H?H(R):{[e.labelField]:R,[e.valueField]:R},{valueField:W,labelField:ie}=e;g.value.some(Re=>Re[W]===D[W]||Re[ie]===D[ie])||w.value.some(Re=>Re[W]===D[W]||Re[ie]===D[ie])?k.value=A:k.value=[D]}}function M(s){s.stopPropagation();const{multiple:R}=e;!R&&e.filterable&&se(),b(),R?j([],[]):j(null,null)}function Q(s){!ft(s,"action")&&!ft(s,"empty")&&!ft(s,"header")&&s.preventDefault()}function ne(s){de(s)}function ge(s){var R,_,G,H,D;if(!e.keyboard){s.preventDefault();return}switch(s.key){case" ":if(e.filterable)break;s.preventDefault();case"Enter":if(!(!((R=x.value)===null||R===void 0)&&R.isComposing)){if(m.value){const W=(_=I.value)===null||_===void 0?void 0:_.getPendingTmNode();W?me(W):e.filterable||(se(),le())}else if(ve(),e.tag&&$e.value){const W=k.value[0];if(W){const ie=W[e.valueField],{value:Re}=v;e.multiple&&Array.isArray(Re)&&Re.includes(ie)||u(W)}}}s.preventDefault();break;case"ArrowUp":if(s.preventDefault(),e.loading)return;m.value&&((G=I.value)===null||G===void 0||G.prev());break;case"ArrowDown":if(s.preventDefault(),e.loading)return;m.value?(H=I.value)===null||H===void 0||H.next():ve();break;case"Escape":m.value&&(Co(s),se()),(D=x.value)===null||D===void 0||D.focus();break}}function le(){var s;(s=x.value)===null||s===void 0||s.focus()}function oe(){var s;(s=x.value)===null||s===void 0||s.focusInput()}function Se(){var s;m.value&&((s=E.value)===null||s===void 0||s.syncPosition())}he(),ar(jt(e,"options"),he);const Xe={focus:()=>{var s;(s=x.value)===null||s===void 0||s.focus()},focusInput:()=>{var s;(s=x.value)===null||s===void 0||s.focusInput()},blur:()=>{var s;(s=x.value)===null||s===void 0||s.blur()},blurInput:()=>{var s;(s=x.value)===null||s===void 0||s.blurInput()}},We=Ie(()=>{const{self:{menuBoxShadow:s}}=d.value;return{"--n-menu-box-shadow":s}}),Pe=i?et("select",void 0,We,e):void 0;return Object.assign(Object.assign({},Xe),{mergedStatus:J,mergedClsPrefix:t,mergedBordered:n,namespace:o,treeMate:T,isMounted:zn(),triggerRef:x,menuRef:I,pattern:f,uncontrolledShow:O,mergedShow:m,adjustedTo:it(e),uncontrolledValue:l,mergedValue:v,followerRef:E,localizedPlaceholder:U,selectedOption:V,selectedOptions:$,mergedSize:te,mergedDisabled:N,focused:h,activeWithoutMenuOpen:$e,inlineThemeDisabled:i,onTriggerInputFocus:Fe,onTriggerInputBlur:Me,handleTriggerOrMenuResize:Se,handleMenuFocus:Ae,handleMenuBlur:qe,handleMenuTabOut:He,handleTriggerClick:Oe,handleToggle:me,handleDeleteOption:u,handlePatternInput:c,handleClear:M,handleTriggerBlur:Ge,handleTriggerFocus:_e,handleKeydown:ge,handleMenuAfterLeave:Ve,handleMenuClickOutside:Ce,handleMenuScroll:ne,handleMenuKeydown:ge,handleMenuMousedown:Q,mergedTheme:d,cssVars:i?void 0:We,themeClass:Pe?.themeClass,onRender:Pe?.onRender})},render(){return Ze("div",{class:`${this.mergedClsPrefix}-select`},Ze(Cn,null,{default:()=>[Ze(Sn,null,{default:()=>Ze(Zi,{ref:"triggerRef",inlineThemeDisabled:this.inlineThemeDisabled,status:this.mergedStatus,inputProps:this.inputProps,clsPrefix:this.mergedClsPrefix,showArrow:this.showArrow,maxTagCount:this.maxTagCount,ellipsisTagPopoverProps:this.ellipsisTagPopoverProps,bordered:this.mergedBordered,active:this.activeWithoutMenuOpen||this.mergedShow,pattern:this.pattern,placeholder:this.localizedPlaceholder,selectedOption:this.selectedOption,selectedOptions:this.selectedOptions,multiple:this.multiple,renderTag:this.renderTag,renderLabel:this.renderLabel,filterable:this.filterable,clearable:this.clearable,disabled:this.mergedDisabled,size:this.mergedSize,theme:this.mergedTheme.peers.InternalSelection,labelField:this.labelField,valueField:this.valueField,themeOverrides:this.mergedTheme.peerOverrides.InternalSelection,loading:this.loading,focused:this.focused,onClick:this.handleTriggerClick,onDeleteOption:this.handleDeleteOption,onPatternInput:this.handlePatternInput,onClear:this.handleClear,onBlur:this.handleTriggerBlur,onFocus:this.handleTriggerFocus,onKeydown:this.handleKeydown,onPatternBlur:this.onTriggerInputBlur,onPatternFocus:this.onTriggerInputFocus,onResize:this.handleTriggerOrMenuResize,ignoreComposition:this.ignoreComposition},{arrow:()=>{var e,t;return[(t=(e=this.$slots).arrow)===null||t===void 0?void 0:t.call(e)]}})}),Ze(Rn,{ref:"followerRef",show:this.mergedShow,to:this.adjustedTo,teleportDisabled:this.adjustedTo===it.tdkey,containerClass:this.namespace,width:this.consistentMenuWidth?"target":void 0,minWidth:"target",placement:this.placement},{default:()=>Ze(rr,{name:"fade-in-scale-up-transition",appear:this.isMounted,onAfterLeave:this.handleMenuAfterLeave},{default:()=>{var e,t,n;return this.mergedShow||this.displayDirective==="show"?((e=this.onRender)===null||e===void 0||e.call(this),sr(Ze(Hi,Object.assign({},this.menuProps,{ref:"menuRef",onResize:this.handleTriggerOrMenuResize,inlineThemeDisabled:this.inlineThemeDisabled,virtualScroll:this.consistentMenuWidth&&this.virtualScroll,class:[`${this.mergedClsPrefix}-select-menu`,this.themeClass,(t=this.menuProps)===null||t===void 0?void 0:t.class],clsPrefix:this.mergedClsPrefix,focusable:!0,labelField:this.labelField,valueField:this.valueField,autoPending:!0,nodeProps:this.nodeProps,theme:this.mergedTheme.peers.InternalSelectMenu,themeOverrides:this.mergedTheme.peerOverrides.InternalSelectMenu,treeMate:this.treeMate,multiple:this.multiple,size:this.menuSize,renderOption:this.renderOption,renderLabel:this.renderLabel,value:this.mergedValue,style:[(n=this.menuProps)===null||n===void 0?void 0:n.style,this.cssVars],onToggle:this.handleToggle,onScroll:this.handleMenuScroll,onFocus:this.handleMenuFocus,onBlur:this.handleMenuBlur,onKeydown:this.handleMenuKeydown,onTabOut:this.handleMenuTabOut,onMousedown:this.handleMenuMousedown,show:this.mergedShow,showCheckmark:this.showCheckmark,resetMenuOnOptionsChange:this.resetMenuOnOptionsChange}),{empty:()=>{var o,i;return[(i=(o=this.$slots).empty)===null||i===void 0?void 0:i.call(o)]},header:()=>{var o,i;return[(i=(o=this.$slots).header)===null||i===void 0?void 0:i.call(o)]},action:()=>{var o,i;return[(i=(o=this.$slots).action)===null||i===void 0?void 0:i.call(o)]}}),this.displayDirective==="show"?[[lr,this.mergedShow],[en,this.handleMenuClickOutside,void 0,{capture:!0}]]:[[en,this.handleMenuClickOutside,void 0,{capture:!0}]])):null}})})]}))}}),cr={railHeight:"4px",railWidthVertical:"4px",handleSize:"18px",dotHeight:"8px",dotWidth:"8px",dotBorderRadius:"4px"};function ur(e){const t="rgba(0, 0, 0, .85)",n="0 2px 8px 0 rgba(0, 0, 0, 0.12)",{railColor:o,primaryColor:i,baseColor:d,cardColor:l,modalColor:a,popoverColor:v,borderRadius:h,fontSize:f,opacityDisabled:g}=e;return Object.assign(Object.assign({},cr),{fontSize:f,markFontSize:f,railColor:o,railColorHover:o,fillColor:i,fillColorHover:i,opacityDisabled:g,handleColor:"#FFF",dotColor:l,dotColorModal:a,dotColorPopover:v,handleBoxShadow:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",handleBoxShadowHover:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",handleBoxShadowActive:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",handleBoxShadowFocus:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",indicatorColor:t,indicatorBoxShadow:n,indicatorTextColor:d,indicatorBorderRadius:h,dotBorder:`2px solid ${o}`,dotBorderActive:`2px solid ${i}`,dotBoxShadow:""})}const fr={common:rt,self:ur},hr={buttonHeightSmall:"14px",buttonHeightMedium:"18px",buttonHeightLarge:"22px",buttonWidthSmall:"14px",buttonWidthMedium:"18px",buttonWidthLarge:"22px",buttonWidthPressedSmall:"20px",buttonWidthPressedMedium:"24px",buttonWidthPressedLarge:"28px",railHeightSmall:"18px",railHeightMedium:"22px",railHeightLarge:"26px",railWidthSmall:"32px",railWidthMedium:"40px",railWidthLarge:"48px"};function vr(e){const{primaryColor:t,opacityDisabled:n,borderRadius:o,textColor3:i}=e;return Object.assign(Object.assign({},hr),{iconColor:i,textColor:"white",loadingColor:t,opacityDisabled:n,railColor:"rgba(0, 0, 0, .14)",railColorActive:t,buttonBoxShadow:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",buttonColor:"#FFF",railBorderRadiusSmall:o,railBorderRadiusMedium:o,railBorderRadiusLarge:o,buttonBorderRadiusSmall:o,buttonBorderRadiusMedium:o,buttonBorderRadiusLarge:o,boxShadowFocus:`0 0 0 2px ${Je(t,{alpha:.2})}`})}const gr={common:rt,self:vr},br=ae([C("slider",`
 display: block;
 padding: calc((var(--n-handle-size) - var(--n-rail-height)) / 2) 0;
 position: relative;
 z-index: 0;
 width: 100%;
 cursor: pointer;
 user-select: none;
 -webkit-user-select: none;
 `,[K("reverse",[C("slider-handles",[C("slider-handle-wrapper",`
 transform: translate(50%, -50%);
 `)]),C("slider-dots",[C("slider-dot",`
 transform: translateX(50%, -50%);
 `)]),K("vertical",[C("slider-handles",[C("slider-handle-wrapper",`
 transform: translate(-50%, -50%);
 `)]),C("slider-marks",[C("slider-mark",`
 transform: translateY(calc(-50% + var(--n-dot-height) / 2));
 `)]),C("slider-dots",[C("slider-dot",`
 transform: translateX(-50%) translateY(0);
 `)])])]),K("vertical",`
 box-sizing: content-box;
 padding: 0 calc((var(--n-handle-size) - var(--n-rail-height)) / 2);
 width: var(--n-rail-width-vertical);
 height: 100%;
 `,[C("slider-handles",`
 top: calc(var(--n-handle-size) / 2);
 right: 0;
 bottom: calc(var(--n-handle-size) / 2);
 left: 0;
 `,[C("slider-handle-wrapper",`
 top: unset;
 left: 50%;
 transform: translate(-50%, 50%);
 `)]),C("slider-rail",`
 height: 100%;
 `,[F("fill",`
 top: unset;
 right: 0;
 bottom: unset;
 left: 0;
 `)]),K("with-mark",`
 width: var(--n-rail-width-vertical);
 margin: 0 32px 0 8px;
 `),C("slider-marks",`
 top: calc(var(--n-handle-size) / 2);
 right: unset;
 bottom: calc(var(--n-handle-size) / 2);
 left: 22px;
 font-size: var(--n-mark-font-size);
 `,[C("slider-mark",`
 transform: translateY(50%);
 white-space: nowrap;
 `)]),C("slider-dots",`
 top: calc(var(--n-handle-size) / 2);
 right: unset;
 bottom: calc(var(--n-handle-size) / 2);
 left: 50%;
 `,[C("slider-dot",`
 transform: translateX(-50%) translateY(50%);
 `)])]),K("disabled",`
 cursor: not-allowed;
 opacity: var(--n-opacity-disabled);
 `,[C("slider-handle",`
 cursor: not-allowed;
 `)]),K("with-mark",`
 width: 100%;
 margin: 8px 0 32px 0;
 `),ae("&:hover",[C("slider-rail",{backgroundColor:"var(--n-rail-color-hover)"},[F("fill",{backgroundColor:"var(--n-fill-color-hover)"})]),C("slider-handle",{boxShadow:"var(--n-handle-box-shadow-hover)"})]),K("active",[C("slider-rail",{backgroundColor:"var(--n-rail-color-hover)"},[F("fill",{backgroundColor:"var(--n-fill-color-hover)"})]),C("slider-handle",{boxShadow:"var(--n-handle-box-shadow-hover)"})]),C("slider-marks",`
 position: absolute;
 top: 18px;
 left: calc(var(--n-handle-size) / 2);
 right: calc(var(--n-handle-size) / 2);
 `,[C("slider-mark",`
 position: absolute;
 transform: translateX(-50%);
 white-space: nowrap;
 `)]),C("slider-rail",`
 width: 100%;
 position: relative;
 height: var(--n-rail-height);
 background-color: var(--n-rail-color);
 transition: background-color .3s var(--n-bezier);
 border-radius: calc(var(--n-rail-height) / 2);
 `,[F("fill",`
 position: absolute;
 top: 0;
 bottom: 0;
 border-radius: calc(var(--n-rail-height) / 2);
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-fill-color);
 `)]),C("slider-handles",`
 position: absolute;
 top: 0;
 right: calc(var(--n-handle-size) / 2);
 bottom: 0;
 left: calc(var(--n-handle-size) / 2);
 `,[C("slider-handle-wrapper",`
 outline: none;
 position: absolute;
 top: 50%;
 transform: translate(-50%, -50%);
 cursor: pointer;
 display: flex;
 `,[C("slider-handle",`
 height: var(--n-handle-size);
 width: var(--n-handle-size);
 border-radius: 50%;
 overflow: hidden;
 transition: box-shadow .2s var(--n-bezier), background-color .3s var(--n-bezier);
 background-color: var(--n-handle-color);
 box-shadow: var(--n-handle-box-shadow);
 `,[ae("&:hover",`
 box-shadow: var(--n-handle-box-shadow-hover);
 `)]),ae("&:focus",[C("slider-handle",`
 box-shadow: var(--n-handle-box-shadow-focus);
 `,[ae("&:hover",`
 box-shadow: var(--n-handle-box-shadow-active);
 `)])])])]),C("slider-dots",`
 position: absolute;
 top: 50%;
 left: calc(var(--n-handle-size) / 2);
 right: calc(var(--n-handle-size) / 2);
 `,[K("transition-disabled",[C("slider-dot","transition: none;")]),C("slider-dot",`
 transition:
 border-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 position: absolute;
 transform: translate(-50%, -50%);
 height: var(--n-dot-height);
 width: var(--n-dot-width);
 border-radius: var(--n-dot-border-radius);
 overflow: hidden;
 box-sizing: border-box;
 border: var(--n-dot-border);
 background-color: var(--n-dot-color);
 `,[K("active","border: var(--n-dot-border-active);")])])]),C("slider-handle-indicator",`
 font-size: var(--n-font-size);
 padding: 6px 10px;
 border-radius: var(--n-indicator-border-radius);
 color: var(--n-indicator-text-color);
 background-color: var(--n-indicator-color);
 box-shadow: var(--n-indicator-box-shadow);
 `,[St()]),C("slider-handle-indicator",`
 font-size: var(--n-font-size);
 padding: 6px 10px;
 border-radius: var(--n-indicator-border-radius);
 color: var(--n-indicator-text-color);
 background-color: var(--n-indicator-color);
 box-shadow: var(--n-indicator-box-shadow);
 `,[K("top",`
 margin-bottom: 12px;
 `),K("right",`
 margin-left: 12px;
 `),K("bottom",`
 margin-top: 12px;
 `),K("left",`
 margin-right: 12px;
 `),St()]),so(C("slider",[C("slider-dot","background-color: var(--n-dot-color-modal);")])),co(C("slider",[C("slider-dot","background-color: var(--n-dot-color-popover);")]))]),{onBeforeUpdate:pr}=await ue("vue");function bn(e){return window.TouchEvent&&e instanceof window.TouchEvent}function pn(){const e=new Map,t=n=>o=>{e.set(n,o)};return pr(()=>{e.clear()}),[e,t]}const{computed:Be,defineComponent:mr,h:pe,nextTick:Kt,onBeforeUnmount:wr,ref:Ke,toRef:xr,Transition:yr,watch:mn}=await ue("vue"),Cr=0,Sr=Object.assign(Object.assign({},Te.props),{to:it.propTo,defaultValue:{type:[Number,Array],default:0},marks:Object,disabled:{type:Boolean,default:void 0},formatTooltip:Function,keyboard:{type:Boolean,default:!0},min:{type:Number,default:0},max:{type:Number,default:100},step:{type:[Number,String],default:1},range:Boolean,value:[Number,Array],placement:String,showTooltip:{type:Boolean,default:void 0},tooltip:{type:Boolean,default:!0},vertical:Boolean,reverse:Boolean,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onDragstart:[Function],onDragend:[Function]}),jr=mr({name:"Slider",props:Sr,slots:Object,setup(e){const{mergedClsPrefixRef:t,namespaceRef:n,inlineThemeDisabled:o}=lt(e),i=Te("Slider","-slider",br,fr,e,t),d=Ke(null),[l,a]=pn(),[v,h]=pn(),f=Ke(new Set),g=Yt(e),{mergedDisabledRef:w}=g,k=Be(()=>{const{step:u}=e;if(Number(u)<=0||u==="mark")return 0;const r=u.toString();let c=0;return r.includes(".")&&(c=r.length-r.indexOf(".")-1),c}),y=Ke(e.defaultValue),B=xr(e,"value"),L=Rt(B,y),T=Be(()=>{const{value:u}=L;return(e.range?u:[u]).map(b)}),P=Be(()=>T.value.length>2),O=Be(()=>e.placement===void 0?e.vertical?"right":"top":e.placement),m=Be(()=>{const{marks:u}=e;return u?Object.keys(u).map(Number.parseFloat):null}),x=Ke(-1),E=Ke(-1),I=Ke(-1),z=Ke(!1),U=Ke(!1),A=Be(()=>{const{vertical:u,reverse:r}=e;return u?r?"top":"bottom":r?"right":"left"}),ee=Be(()=>{if(P.value)return;const u=T.value,r=S(e.range?Math.min(...u):e.min),c=S(e.range?Math.max(...u):u[0]),{value:M}=A;return e.vertical?{[M]:`${r}%`,height:`${c-r}%`}:{[M]:`${r}%`,width:`${c-r}%`}}),re=Be(()=>{const u=[],{marks:r}=e;if(r){const c=T.value.slice();c.sort((le,oe)=>le-oe);const{value:M}=A,{value:Q}=P,{range:ne}=e,ge=Q?()=>!1:le=>ne?le>=c[0]&&le<=c[c.length-1]:le<=c[0];for(const le of Object.keys(r)){const oe=Number(le);u.push({active:ge(oe),key:oe,label:r[le],style:{[M]:`${S(oe)}%`}})}}return u});function p(u,r){const c=S(u),{value:M}=A;return{[M]:`${c}%`,zIndex:r===x.value?1:0}}function $(u){return e.showTooltip||I.value===u||x.value===u&&z.value}function V(u){return z.value?!(x.value===u&&E.value===u):!0}function Z(u){var r;~u&&(x.value=u,(r=l.get(u))===null||r===void 0||r.focus())}function te(){v.forEach((u,r)=>{$(r)&&u.syncPosition()})}function N(u){const{"onUpdate:value":r,onUpdateValue:c}=e,{nTriggerFormInput:M,nTriggerFormChange:Q}=g;c&&ce(c,u),r&&ce(r,u),y.value=u,M(),Q()}function J(u){const{range:r}=e;if(r){if(Array.isArray(u)){const{value:c}=T;u.join()!==c.join()&&N(u)}}else Array.isArray(u)||T.value[0]!==u&&N(u)}function j(u,r){if(e.range){const c=T.value.slice();c.splice(r,1,u),J(c)}else J(u)}function Y(u,r,c){const M=c!==void 0;c||(c=u-r>0?1:-1);const Q=m.value||[],{step:ne}=e;if(ne==="mark"){const oe=he(u,Q.concat(r),M?c:void 0);return oe?oe.value:r}if(ne<=0)return r;const{value:ge}=k;let le;if(M){const oe=Number((r/ne).toFixed(ge)),Se=Math.floor(oe),Xe=oe>Se?Se:Se-1,We=oe<Se?Se:Se+1;le=he(r,[Number((Xe*ne).toFixed(ge)),Number((We*ne).toFixed(ge)),...Q],c)}else{const oe=de(u);le=he(u,[...Q,oe])}return le?b(le.value):r}function b(u){return Math.min(e.max,Math.max(e.min,u))}function S(u){const{max:r,min:c}=e;return(u-c)/(r-c)*100}function X(u){const{max:r,min:c}=e;return c+(r-c)*u}function de(u){const{step:r,min:c}=e;if(Number(r)<=0||r==="mark")return u;const M=Math.round((u-c)/r)*r+c;return Number(M.toFixed(k.value))}function he(u,r=m.value,c){if(!r?.length)return null;let M=null,Q=-1;for(;++Q<r.length;){const ne=r[Q]-u,ge=Math.abs(ne);(c===void 0||ne*c>0)&&(M===null||ge<M.distance)&&(M={index:Q,distance:ge,value:r[Q]})}return M}function ye(u){const r=d.value;if(!r)return;const c=bn(u)?u.touches[0]:u,M=r.getBoundingClientRect();let Q;return e.vertical?Q=(M.bottom-c.clientY)/M.height:Q=(c.clientX-M.left)/M.width,e.reverse&&(Q=1-Q),X(Q)}function ve(u){if(w.value||!e.keyboard)return;const{vertical:r,reverse:c}=e;switch(u.key){case"ArrowUp":u.preventDefault(),se(r&&c?-1:1);break;case"ArrowRight":u.preventDefault(),se(!r&&c?-1:1);break;case"ArrowDown":u.preventDefault(),se(r&&c?1:-1);break;case"ArrowLeft":u.preventDefault(),se(!r&&c?1:-1);break}}function se(u){const r=x.value;if(r===-1)return;const{step:c}=e,M=T.value[r],Q=Number(c)<=0||c==="mark"?M:M+c*u;j(Y(Q,M,u>0?1:-1),r)}function Ve(u){var r,c;if(w.value||!bn(u)&&u.button!==Cr)return;const M=ye(u);if(M===void 0)return;const Q=T.value.slice(),ne=e.range?(c=(r=he(M,Q))===null||r===void 0?void 0:r.index)!==null&&c!==void 0?c:-1:0;ne!==-1&&(u.preventDefault(),Z(ne),$e(),j(Y(M,T.value[ne]),ne))}function $e(){z.value||(z.value=!0,e.onDragstart&&ce(e.onDragstart),pt("touchend",document,Oe),pt("mouseup",document,Oe),pt("touchmove",document,Me),pt("mousemove",document,Me))}function Fe(){z.value&&(z.value=!1,e.onDragend&&ce(e.onDragend),mt("touchend",document,Oe),mt("mouseup",document,Oe),mt("touchmove",document,Me),mt("mousemove",document,Me))}function Me(u){const{value:r}=x;if(!z.value||r===-1){Fe();return}const c=ye(u);c!==void 0&&j(Y(c,T.value[r]),r)}function Oe(){Fe()}function Ge(u){x.value=u,w.value||(I.value=u)}function _e(u){x.value===u&&(x.value=-1,Fe()),I.value===u&&(I.value=-1)}function Ae(u){I.value=u}function qe(u){I.value===u&&(I.value=-1)}mn(x,(u,r)=>void Kt(()=>E.value=r)),mn(L,()=>{if(e.marks){if(U.value)return;U.value=!0,Kt(()=>{U.value=!1})}Kt(te)}),wr(()=>{Fe()});const He=Be(()=>{const{self:{markFontSize:u,railColor:r,railColorHover:c,fillColor:M,fillColorHover:Q,handleColor:ne,opacityDisabled:ge,dotColor:le,dotColorModal:oe,handleBoxShadow:Se,handleBoxShadowHover:Xe,handleBoxShadowActive:We,handleBoxShadowFocus:Pe,dotBorder:s,dotBoxShadow:R,railHeight:_,railWidthVertical:G,handleSize:H,dotHeight:D,dotWidth:W,dotBorderRadius:ie,fontSize:Re,dotBorderActive:zt,dotColorPopover:$t},common:{cubicBezierEaseInOut:Ft}}=i.value;return{"--n-bezier":Ft,"--n-dot-border":s,"--n-dot-border-active":zt,"--n-dot-border-radius":ie,"--n-dot-box-shadow":R,"--n-dot-color":le,"--n-dot-color-modal":oe,"--n-dot-color-popover":$t,"--n-dot-height":D,"--n-dot-width":W,"--n-fill-color":M,"--n-fill-color-hover":Q,"--n-font-size":Re,"--n-handle-box-shadow":Se,"--n-handle-box-shadow-active":We,"--n-handle-box-shadow-focus":Pe,"--n-handle-box-shadow-hover":Xe,"--n-handle-color":ne,"--n-handle-size":H,"--n-opacity-disabled":ge,"--n-rail-color":r,"--n-rail-color-hover":c,"--n-rail-height":_,"--n-rail-width-vertical":G,"--n-mark-font-size":u}}),Ce=o?et("slider",void 0,He,e):void 0,Ee=Be(()=>{const{self:{fontSize:u,indicatorColor:r,indicatorBoxShadow:c,indicatorTextColor:M,indicatorBorderRadius:Q}}=i.value;return{"--n-font-size":u,"--n-indicator-border-radius":Q,"--n-indicator-box-shadow":c,"--n-indicator-color":r,"--n-indicator-text-color":M}}),me=o?et("slider-indicator",void 0,Ee,e):void 0;return{mergedClsPrefix:t,namespace:n,uncontrolledValue:y,mergedValue:L,mergedDisabled:w,mergedPlacement:O,isMounted:zn(),adjustedTo:it(e),dotTransitionDisabled:U,markInfos:re,isShowTooltip:$,shouldKeepTooltipTransition:V,handleRailRef:d,setHandleRefs:a,setFollowerRefs:h,fillStyle:ee,getHandleStyle:p,activeIndex:x,arrifiedValues:T,followerEnabledIndexSet:f,handleRailMouseDown:Ve,handleHandleFocus:Ge,handleHandleBlur:_e,handleHandleMouseEnter:Ae,handleHandleMouseLeave:qe,handleRailKeyDown:ve,indicatorCssVars:o?void 0:Ee,indicatorThemeClass:me?.themeClass,indicatorOnRender:me?.onRender,cssVars:o?void 0:He,themeClass:Ce?.themeClass,onRender:Ce?.onRender}},render(){var e;const{mergedClsPrefix:t,themeClass:n,formatTooltip:o}=this;return(e=this.onRender)===null||e===void 0||e.call(this),pe("div",{class:[`${t}-slider`,n,{[`${t}-slider--disabled`]:this.mergedDisabled,[`${t}-slider--active`]:this.activeIndex!==-1,[`${t}-slider--with-mark`]:this.marks,[`${t}-slider--vertical`]:this.vertical,[`${t}-slider--reverse`]:this.reverse}],style:this.cssVars,onKeydown:this.handleRailKeyDown,onMousedown:this.handleRailMouseDown,onTouchstart:this.handleRailMouseDown},pe("div",{class:`${t}-slider-rail`},pe("div",{class:`${t}-slider-rail__fill`,style:this.fillStyle}),this.marks?pe("div",{class:[`${t}-slider-dots`,this.dotTransitionDisabled&&`${t}-slider-dots--transition-disabled`]},this.markInfos.map(i=>pe("div",{key:i.key,class:[`${t}-slider-dot`,{[`${t}-slider-dot--active`]:i.active}],style:i.style}))):null,pe("div",{ref:"handleRailRef",class:`${t}-slider-handles`},this.arrifiedValues.map((i,d)=>{const l=this.isShowTooltip(d);return pe(Cn,null,{default:()=>[pe(Sn,null,{default:()=>pe("div",{ref:this.setHandleRefs(d),class:`${t}-slider-handle-wrapper`,tabindex:this.mergedDisabled?-1:0,role:"slider","aria-valuenow":i,"aria-valuemin":this.min,"aria-valuemax":this.max,"aria-orientation":this.vertical?"vertical":"horizontal","aria-disabled":this.disabled,style:this.getHandleStyle(i,d),onFocus:()=>{this.handleHandleFocus(d)},onBlur:()=>{this.handleHandleBlur(d)},onMouseenter:()=>{this.handleHandleMouseEnter(d)},onMouseleave:()=>{this.handleHandleMouseLeave(d)}},xn(this.$slots.thumb,()=>[pe("div",{class:`${t}-slider-handle`})]))}),this.tooltip&&pe(Rn,{ref:this.setFollowerRefs(d),show:l,to:this.adjustedTo,enabled:this.showTooltip&&!this.range||this.followerEnabledIndexSet.has(d),teleportDisabled:this.adjustedTo===it.tdkey,placement:this.mergedPlacement,containerClass:this.namespace},{default:()=>pe(yr,{name:"fade-in-scale-up-transition",appear:this.isMounted,css:this.shouldKeepTooltipTransition(d),onEnter:()=>{this.followerEnabledIndexSet.add(d)},onAfterLeave:()=>{this.followerEnabledIndexSet.delete(d)}},{default:()=>{var a;return l?((a=this.indicatorOnRender)===null||a===void 0||a.call(this),pe("div",{class:[`${t}-slider-handle-indicator`,this.indicatorThemeClass,`${t}-slider-handle-indicator--${this.mergedPlacement}`],style:this.indicatorCssVars},typeof o=="function"?o(i):i)):null}})})]})})),this.marks?pe("div",{class:`${t}-slider-marks`},this.markInfos.map(i=>pe("div",{key:i.key,class:`${t}-slider-mark`,style:i.style},typeof i.label=="function"?i.label():i.label))):null))}}),Rr=C("switch",`
 height: var(--n-height);
 min-width: var(--n-width);
 vertical-align: middle;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 outline: none;
 justify-content: center;
 align-items: center;
`,[F("children-placeholder",`
 height: var(--n-rail-height);
 display: flex;
 flex-direction: column;
 overflow: hidden;
 pointer-events: none;
 visibility: hidden;
 `),F("rail-placeholder",`
 display: flex;
 flex-wrap: none;
 `),F("button-placeholder",`
 width: calc(1.75 * var(--n-rail-height));
 height: var(--n-rail-height);
 `),C("base-loading",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 font-size: calc(var(--n-button-width) - 4px);
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 `,[Qt({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})]),F("checked, unchecked",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 box-sizing: border-box;
 position: absolute;
 white-space: nowrap;
 top: 0;
 bottom: 0;
 display: flex;
 align-items: center;
 line-height: 1;
 `),F("checked",`
 right: 0;
 padding-right: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),F("unchecked",`
 left: 0;
 justify-content: flex-end;
 padding-left: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),ae("&:focus",[F("rail",`
 box-shadow: var(--n-box-shadow-focus);
 `)]),K("round",[F("rail","border-radius: calc(var(--n-rail-height) / 2);",[F("button","border-radius: calc(var(--n-button-height) / 2);")])]),vt("disabled",[vt("icon",[K("rubber-band",[K("pressed",[F("rail",[F("button","max-width: var(--n-button-width-pressed);")])]),F("rail",[ae("&:active",[F("button","max-width: var(--n-button-width-pressed);")])]),K("active",[K("pressed",[F("rail",[F("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])]),F("rail",[ae("&:active",[F("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])])])])])]),K("active",[F("rail",[F("button","left: calc(100% - var(--n-button-width) - var(--n-offset))")])]),F("rail",`
 overflow: hidden;
 height: var(--n-rail-height);
 min-width: var(--n-rail-width);
 border-radius: var(--n-rail-border-radius);
 cursor: pointer;
 position: relative;
 transition:
 opacity .3s var(--n-bezier),
 background .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-rail-color);
 `,[F("button-icon",`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 font-size: calc(var(--n-button-height) - 4px);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 justify-content: center;
 align-items: center;
 line-height: 1;
 `,[Qt()]),F("button",`
 align-items: center; 
 top: var(--n-offset);
 left: var(--n-offset);
 height: var(--n-button-height);
 width: var(--n-button-width-pressed);
 max-width: var(--n-button-width);
 border-radius: var(--n-button-border-radius);
 background-color: var(--n-button-color);
 box-shadow: var(--n-button-box-shadow);
 box-sizing: border-box;
 cursor: inherit;
 content: "";
 position: absolute;
 transition:
 background-color .3s var(--n-bezier),
 left .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `)]),K("active",[F("rail","background-color: var(--n-rail-color-active);")]),K("loading",[F("rail",`
 cursor: wait;
 `)]),K("disabled",[F("rail",`
 cursor: not-allowed;
 opacity: .5;
 `)])]),{computed:yt,defineComponent:kr,h:xe,ref:Ut,toRef:Tr,watchEffect:Kr}=await ue("vue"),zr=Object.assign(Object.assign({},Te.props),{size:{type:String,default:"medium"},value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},onChange:[Function,Array]});let ct;const Ur=kr({name:"Switch",props:zr,slots:Object,setup(e){ct===void 0&&(typeof CSS<"u"?typeof CSS.supports<"u"?ct=CSS.supports("width","max(1px)"):ct=!1:ct=!0);const{mergedClsPrefixRef:t,inlineThemeDisabled:n}=lt(e),o=Te("Switch","-switch",Rr,gr,e,t),i=Yt(e),{mergedSizeRef:d,mergedDisabledRef:l}=i,a=Ut(e.defaultValue),v=Tr(e,"value"),h=Rt(v,a),f=yt(()=>h.value===e.checkedValue),g=Ut(!1),w=Ut(!1),k=yt(()=>{const{railStyle:z}=e;if(z)return z({focused:w.value,checked:f.value})});function y(z){const{"onUpdate:value":U,onChange:A,onUpdateValue:ee}=e,{nTriggerFormInput:re,nTriggerFormChange:p}=i;U&&ce(U,z),ee&&ce(ee,z),A&&ce(A,z),a.value=z,re(),p()}function B(){const{nTriggerFormFocus:z}=i;z()}function L(){const{nTriggerFormBlur:z}=i;z()}function T(){e.loading||l.value||(h.value!==e.checkedValue?y(e.checkedValue):y(e.uncheckedValue))}function P(){w.value=!0,B()}function O(){w.value=!1,L(),g.value=!1}function m(z){e.loading||l.value||z.key===" "&&(h.value!==e.checkedValue?y(e.checkedValue):y(e.uncheckedValue),g.value=!1)}function x(z){e.loading||l.value||z.key===" "&&(z.preventDefault(),g.value=!0)}const E=yt(()=>{const{value:z}=d,{self:{opacityDisabled:U,railColor:A,railColorActive:ee,buttonBoxShadow:re,buttonColor:p,boxShadowFocus:$,loadingColor:V,textColor:Z,iconColor:te,[fe("buttonHeight",z)]:N,[fe("buttonWidth",z)]:J,[fe("buttonWidthPressed",z)]:j,[fe("railHeight",z)]:Y,[fe("railWidth",z)]:b,[fe("railBorderRadius",z)]:S,[fe("buttonBorderRadius",z)]:X},common:{cubicBezierEaseInOut:de}}=o.value;let he,ye,ve;return ct?(he=`calc((${Y} - ${N}) / 2)`,ye=`max(${Y}, ${N})`,ve=`max(${b}, calc(${b} + ${N} - ${Y}))`):(he=Ue((ke(Y)-ke(N))/2),ye=Ue(Math.max(ke(Y),ke(N))),ve=ke(Y)>ke(N)?b:Ue(ke(b)+ke(N)-ke(Y))),{"--n-bezier":de,"--n-button-border-radius":X,"--n-button-box-shadow":re,"--n-button-color":p,"--n-button-width":J,"--n-button-width-pressed":j,"--n-button-height":N,"--n-height":ye,"--n-offset":he,"--n-opacity-disabled":U,"--n-rail-border-radius":S,"--n-rail-color":A,"--n-rail-color-active":ee,"--n-rail-height":Y,"--n-rail-width":b,"--n-width":ve,"--n-box-shadow-focus":$,"--n-loading-color":V,"--n-text-color":Z,"--n-icon-color":te}}),I=n?et("switch",yt(()=>d.value[0]),E,e):void 0;return{handleClick:T,handleBlur:O,handleFocus:P,handleKeyup:m,handleKeydown:x,mergedRailStyle:k,pressed:g,mergedClsPrefix:t,mergedValue:h,checked:f,mergedDisabled:l,cssVars:n?void 0:E,themeClass:I?.themeClass,onRender:I?.onRender}},render(){const{mergedClsPrefix:e,mergedDisabled:t,checked:n,mergedRailStyle:o,onRender:i,$slots:d}=this;i?.();const{checked:l,unchecked:a,icon:v,"checked-icon":h,"unchecked-icon":f}=d,g=!(Mt(v)&&Mt(h)&&Mt(f));return xe("div",{role:"switch","aria-checked":n,class:[`${e}-switch`,this.themeClass,g&&`${e}-switch--icon`,n&&`${e}-switch--active`,t&&`${e}-switch--disabled`,this.round&&`${e}-switch--round`,this.loading&&`${e}-switch--loading`,this.pressed&&`${e}-switch--pressed`,this.rubberBand&&`${e}-switch--rubber-band`],tabindex:this.mergedDisabled?void 0:0,style:this.cssVars,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},xe("div",{class:`${e}-switch__rail`,"aria-hidden":"true",style:o},De(l,w=>De(a,k=>w||k?xe("div",{"aria-hidden":!0,class:`${e}-switch__children-placeholder`},xe("div",{class:`${e}-switch__rail-placeholder`},xe("div",{class:`${e}-switch__button-placeholder`}),w),xe("div",{class:`${e}-switch__rail-placeholder`},xe("div",{class:`${e}-switch__button-placeholder`}),k)):null)),xe("div",{class:`${e}-switch__button`},De(v,w=>De(h,k=>De(f,y=>xe(xo,null,{default:()=>this.loading?xe(Fn,{key:"loading",clsPrefix:e,strokeWidth:20}):this.checked&&(k||w)?xe("div",{class:`${e}-switch__button-icon`,key:k?"checked-icon":"icon"},k||w):!this.checked&&(y||w)?xe("div",{class:`${e}-switch__button-icon`,key:y?"unchecked-icon":"icon"},y||w):null})))),De(l,w=>w&&xe("div",{key:"checked",class:`${e}-switch__checked`},w)),De(a,w=>w&&xe("div",{key:"unchecked",class:`${e}-switch__unchecked`},w)))))}});export{Ko as FinishedIcon,Yo as FocusDetector,zi as NEmpty,Hi as NInternalSelectMenu,Zi as NInternalSelection,Wr as NSelect,jr as NSlider,Ur as NSwitch,di as SubtreeNotLoadedError,sn as VOverflow,_o as VVirtualList,Wi as commonVariables,hr as commonVars,si as createIndexGetter,Ji as createTmOptions,yi as createTreeMate,_n as emptyLight,Ti as emptyProps,wi as flatten,dn as getTitleAttribute,ft as happensIn,An as internalSelectMenuLight,En as internalSelectionLight,_t as mergeEventHandlers,nr as selectLight,dr as selectProps,Si as self,Fi as self$1,tr as self$2,cr as sizeVariables,Sr as sliderProps,zr as switchProps,Pn as useOnResize};
