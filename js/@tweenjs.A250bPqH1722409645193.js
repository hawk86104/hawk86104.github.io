var t=Object.freeze({Linear:Object.freeze({None:function(t){return t},In:function(t){return t},Out:function(t){return t},InOut:function(t){return t}}),Quadratic:Object.freeze({In:function(t){return t*t},Out:function(t){return t*(2-t)},InOut:function(t){return(t*=2)<1?.5*t*t:-.5*(--t*(t-2)-1)}}),Cubic:Object.freeze({In:function(t){return t*t*t},Out:function(t){return--t*t*t+1},InOut:function(t){return(t*=2)<1?.5*t*t*t:.5*((t-=2)*t*t+2)}}),Quartic:Object.freeze({In:function(t){return t*t*t*t},Out:function(t){return 1- --t*t*t*t},InOut:function(t){return(t*=2)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)}}),Quintic:Object.freeze({In:function(t){return t*t*t*t*t},Out:function(t){return--t*t*t*t*t+1},InOut:function(t){return(t*=2)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)}}),Sinusoidal:Object.freeze({In:function(t){return 1-Math.sin((1-t)*Math.PI/2)},Out:function(t){return Math.sin(t*Math.PI/2)},InOut:function(t){return.5*(1-Math.sin(Math.PI*(.5-t)))}}),Exponential:Object.freeze({In:function(t){return 0===t?0:Math.pow(1024,t-1)},Out:function(t){return 1===t?1:1-Math.pow(2,-10*t)},InOut:function(t){return 0===t?0:1===t?1:(t*=2)<1?.5*Math.pow(1024,t-1):.5*(2-Math.pow(2,-10*(t-1)))}}),Circular:Object.freeze({In:function(t){return 1-Math.sqrt(1-t*t)},Out:function(t){return Math.sqrt(1- --t*t)},InOut:function(t){return(t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)}}),Elastic:Object.freeze({In:function(t){return 0===t?0:1===t?1:-Math.pow(2,10*(t-1))*Math.sin(5*(t-1.1)*Math.PI)},Out:function(t){return 0===t?0:1===t?1:Math.pow(2,-10*t)*Math.sin(5*(t-.1)*Math.PI)+1},InOut:function(t){return 0===t?0:1===t?1:(t*=2)<1?-.5*Math.pow(2,10*(t-1))*Math.sin(5*(t-1.1)*Math.PI):.5*Math.pow(2,-10*(t-1))*Math.sin(5*(t-1.1)*Math.PI)+1}}),Back:Object.freeze({In:function(t){var e=1.70158;return 1===t?1:t*t*((e+1)*t-e)},Out:function(t){var e=1.70158;return 0===t?0:--t*t*((e+1)*t+e)+1},InOut:function(t){var e=2.5949095;return(t*=2)<1?t*t*((e+1)*t-e)*.5:.5*((t-=2)*t*((e+1)*t+e)+2)}}),Bounce:Object.freeze({In:function(e){return 1-t.Bounce.Out(1-e)},Out:function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},InOut:function(e){return e<.5?.5*t.Bounce.In(2*e):.5*t.Bounce.Out(2*e-1)+.5}}),generatePow:function(t){return void 0===t&&(t=4),t=(t=t<Number.EPSILON?Number.EPSILON:t)>1e4?1e4:t,{In:function(e){return Math.pow(e,t)},Out:function(e){return 1-Math.pow(1-e,t)},InOut:function(e){return e<.5?Math.pow(2*e,t)/2:(1-Math.pow(2-2*e,t))/2+.5}}}}),e=function(){return performance.now()},i=function(){function t(){this._tweens={},this._tweensAddedDuringUpdate={}}return t.prototype.getAll=function(){var t=this;return Object.keys(this._tweens).map((function(e){return t._tweens[e]}))},t.prototype.removeAll=function(){this._tweens={}},t.prototype.add=function(t){this._tweens[t.getId()]=t,this._tweensAddedDuringUpdate[t.getId()]=t},t.prototype.remove=function(t){delete this._tweens[t.getId()],delete this._tweensAddedDuringUpdate[t.getId()]},t.prototype.update=function(t,i){void 0===t&&(t=e()),void 0===i&&(i=!1);var n=Object.keys(this._tweens);if(0===n.length)return!1;for(;n.length>0;){this._tweensAddedDuringUpdate={};for(var r=0;r<n.length;r++){var a=this._tweens[n[r]],o=!i;a&&!1===a.update(t,o)&&!i&&delete this._tweens[n[r]]}n=Object.keys(this._tweensAddedDuringUpdate)}return!0},t}(),n={Linear:function(t,e){var i=t.length-1,r=i*e,a=Math.floor(r),o=n.Utils.Linear;return e<0?o(t[0],t[1],r):e>1?o(t[i],t[i-1],i-r):o(t[a],t[a+1>i?i:a+1],r-a)},Bezier:function(t,e){for(var i=0,r=t.length-1,a=Math.pow,o=n.Utils.Bernstein,s=0;s<=r;s++)i+=a(1-e,r-s)*a(e,s)*t[s]*o(r,s);return i},CatmullRom:function(t,e){var i=t.length-1,r=i*e,a=Math.floor(r),o=n.Utils.CatmullRom;return t[0]===t[i]?(e<0&&(a=Math.floor(r=i*(1+e))),o(t[(a-1+i)%i],t[a],t[(a+1)%i],t[(a+2)%i],r-a)):e<0?t[0]-(o(t[0],t[0],t[1],t[1],-r)-t[0]):e>1?t[i]-(o(t[i],t[i],t[i-1],t[i-1],r-i)-t[i]):o(t[a?a-1:0],t[a],t[i<a+1?i:a+1],t[i<a+2?i:a+2],r-a)},Utils:{Linear:function(t,e,i){return(e-t)*i+t},Bernstein:function(t,e){var i=n.Utils.Factorial;return i(t)/i(e)/i(t-e)},Factorial:function(){var t=[1];return function(e){var i=1;if(t[e])return t[e];for(var n=e;n>1;n--)i*=n;return t[e]=i,i}}(),CatmullRom:function(t,e,i,n,r){var a=.5*(i-t),o=.5*(n-e),s=r*r;return(2*e-2*i+a+o)*(r*s)+(-3*e+3*i-2*a-o)*s+a*r+e}}},r=function(){function t(){}return t.nextId=function(){return t._nextId++},t._nextId=0,t}(),a=new i,o=function(){function i(e,i){void 0===i&&(i=a),this._object=e,this._group=i,this._isPaused=!1,this._pauseStart=0,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._isDynamic=!1,this._initialRepeat=0,this._repeat=0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=0,this._easingFunction=t.Linear.None,this._interpolationFunction=n.Linear,this._chainedTweens=[],this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._id=r.nextId(),this._isChainStopped=!1,this._propertiesAreSetUp=!1,this._goToEnd=!1}return i.prototype.getId=function(){return this._id},i.prototype.isPlaying=function(){return this._isPlaying},i.prototype.isPaused=function(){return this._isPaused},i.prototype.getDuration=function(){return this._duration},i.prototype.to=function(t,e){if(void 0===e&&(e=1e3),this._isPlaying)throw new Error("Can not call Tween.to() while Tween is already started or paused. Stop the Tween first.");return this._valuesEnd=t,this._propertiesAreSetUp=!1,this._duration=e<0?0:e,this},i.prototype.duration=function(t){return void 0===t&&(t=1e3),this._duration=t<0?0:t,this},i.prototype.dynamic=function(t){return void 0===t&&(t=!1),this._isDynamic=t,this},i.prototype.start=function(t,i){if(void 0===t&&(t=e()),void 0===i&&(i=!1),this._isPlaying)return this;if(this._group&&this._group.add(this),this._repeat=this._initialRepeat,this._reversed)for(var n in this._reversed=!1,this._valuesStartRepeat)this._swapEndStartRepeatValues(n),this._valuesStart[n]=this._valuesStartRepeat[n];if(this._isPlaying=!0,this._isPaused=!1,this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._isChainStopped=!1,this._startTime=t,this._startTime+=this._delayTime,!this._propertiesAreSetUp||i){if(this._propertiesAreSetUp=!0,!this._isDynamic){var r={};for(var a in this._valuesEnd)r[a]=this._valuesEnd[a];this._valuesEnd=r}this._setupProperties(this._object,this._valuesStart,this._valuesEnd,this._valuesStartRepeat,i)}return this},i.prototype.startFromCurrentValues=function(t){return this.start(t,!0)},i.prototype._setupProperties=function(t,e,i,n,r){for(var a in i){var o=t[a],s=Array.isArray(o),u=s?"array":typeof o,h=!s&&Array.isArray(i[a]);if("undefined"!==u&&"function"!==u){if(h){if(0===(v=i[a]).length)continue;for(var p=[o],_=0,l=v.length;_<l;_+=1){var c=this._handleRelativeValue(o,v[_]);if(isNaN(c)){h=!1,console.warn("Found invalid interpolation list. Skipping.");break}p.push(c)}h&&(i[a]=p)}if("object"!==u&&!s||!o||h)(void 0===e[a]||r)&&(e[a]=o),s||(e[a]*=1),n[a]=h?i[a].slice().reverse():e[a]||0;else{e[a]=s?[]:{};var d=o;for(var f in d)e[a][f]=d[f];n[a]=s?[]:{};var v=i[a];if(!this._isDynamic){var y={};for(var f in v)y[f]=v[f];i[a]=v=y}this._setupProperties(d,e[a],v,n[a],r)}}}},i.prototype.stop=function(){return this._isChainStopped||(this._isChainStopped=!0,this.stopChainedTweens()),this._isPlaying?(this._group&&this._group.remove(this),this._isPlaying=!1,this._isPaused=!1,this._onStopCallback&&this._onStopCallback(this._object),this):this},i.prototype.end=function(){return this._goToEnd=!0,this.update(1/0),this},i.prototype.pause=function(t){return void 0===t&&(t=e()),this._isPaused||!this._isPlaying||(this._isPaused=!0,this._pauseStart=t,this._group&&this._group.remove(this)),this},i.prototype.resume=function(t){return void 0===t&&(t=e()),this._isPaused&&this._isPlaying?(this._isPaused=!1,this._startTime+=t-this._pauseStart,this._pauseStart=0,this._group&&this._group.add(this),this):this},i.prototype.stopChainedTweens=function(){for(var t=0,e=this._chainedTweens.length;t<e;t++)this._chainedTweens[t].stop();return this},i.prototype.group=function(t){return void 0===t&&(t=a),this._group=t,this},i.prototype.delay=function(t){return void 0===t&&(t=0),this._delayTime=t,this},i.prototype.repeat=function(t){return void 0===t&&(t=0),this._initialRepeat=t,this._repeat=t,this},i.prototype.repeatDelay=function(t){return this._repeatDelayTime=t,this},i.prototype.yoyo=function(t){return void 0===t&&(t=!1),this._yoyo=t,this},i.prototype.easing=function(e){return void 0===e&&(e=t.Linear.None),this._easingFunction=e,this},i.prototype.interpolation=function(t){return void 0===t&&(t=n.Linear),this._interpolationFunction=t,this},i.prototype.chain=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return this._chainedTweens=t,this},i.prototype.onStart=function(t){return this._onStartCallback=t,this},i.prototype.onEveryStart=function(t){return this._onEveryStartCallback=t,this},i.prototype.onUpdate=function(t){return this._onUpdateCallback=t,this},i.prototype.onRepeat=function(t){return this._onRepeatCallback=t,this},i.prototype.onComplete=function(t){return this._onCompleteCallback=t,this},i.prototype.onStop=function(t){return this._onStopCallback=t,this},i.prototype.update=function(t,i){var n;if(void 0===t&&(t=e()),void 0===i&&(i=!0),this._isPaused)return!0;var r=this._startTime+this._duration;if(!this._goToEnd&&!this._isPlaying){if(t>r)return!1;i&&this.start(t,!0)}if(this._goToEnd=!1,t<this._startTime)return!0;!1===this._onStartCallbackFired&&(this._onStartCallback&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),!1===this._onEveryStartCallbackFired&&(this._onEveryStartCallback&&this._onEveryStartCallback(this._object),this._onEveryStartCallbackFired=!0);var a=t-this._startTime,o=this._duration+(null!==(n=this._repeatDelayTime)&&void 0!==n?n:this._delayTime),s=this._duration+this._repeat*o,u=this._calculateElapsedPortion(a,o,s),h=this._easingFunction(u),p=this._calculateCompletionStatus(a,o);if("repeat"===p&&this._processRepetition(a,o),this._updateProperties(this._object,this._valuesStart,this._valuesEnd,h),"about-to-repeat"===p&&this._processRepetition(a,o),this._onUpdateCallback&&this._onUpdateCallback(this._object,u),"repeat"===p||"about-to-repeat"===p)this._onRepeatCallback&&this._onRepeatCallback(this._object),this._onEveryStartCallbackFired=!1;else if("completed"===p){this._isPlaying=!1,this._onCompleteCallback&&this._onCompleteCallback(this._object);for(var _=0,l=this._chainedTweens.length;_<l;_++)this._chainedTweens[_].start(this._startTime+this._duration,!1)}return"completed"!==p},i.prototype._calculateElapsedPortion=function(t,e,i){if(0===this._duration||t>i)return 1;var n=t%e,r=Math.min(n/this._duration,1);return 0===r&&0!==t&&t%this._duration==0?1:r},i.prototype._calculateCompletionStatus=function(t,e){return 0!==this._duration&&t<this._duration?"playing":this._repeat<=0?"completed":t===this._duration?"about-to-repeat":"repeat"},i.prototype._processRepetition=function(t,e){var i=Math.min(Math.trunc((t-this._duration)/e)+1,this._repeat);for(var n in isFinite(this._repeat)&&(this._repeat-=i),this._valuesStartRepeat){var r=this._valuesEnd[n];this._yoyo||"string"!=typeof r||(this._valuesStartRepeat[n]=this._valuesStartRepeat[n]+parseFloat(r)),this._yoyo&&this._swapEndStartRepeatValues(n),this._valuesStart[n]=this._valuesStartRepeat[n]}this._yoyo&&(this._reversed=!this._reversed),this._startTime+=e*i},i.prototype._updateProperties=function(t,e,i,n){for(var r in i)if(void 0!==e[r]){var a=e[r]||0,o=i[r],s=Array.isArray(t[r]),u=Array.isArray(o);!s&&u?t[r]=this._interpolationFunction(o,n):"object"==typeof o&&o?this._updateProperties(t[r],a,o,n):"number"==typeof(o=this._handleRelativeValue(a,o))&&(t[r]=a+(o-a)*n)}},i.prototype._handleRelativeValue=function(t,e){return"string"!=typeof e?e:"+"===e.charAt(0)||"-"===e.charAt(0)?t+parseFloat(e):parseFloat(e)},i.prototype._swapEndStartRepeatValues=function(t){var e=this._valuesStartRepeat[t],i=this._valuesEnd[t];this._valuesStartRepeat[t]="string"==typeof i?this._valuesStartRepeat[t]+parseFloat(i):this._valuesEnd[t],this._valuesEnd[t]=e},i}(),s="23.1.2",u=r.nextId,h=a,p=h.getAll.bind(h),_=h.removeAll.bind(h),l=h.add.bind(h),c=h.remove.bind(h),d=h.update.bind(h),f={Easing:t,Group:i,Interpolation:n,now:e,Sequence:r,nextId:u,Tween:o,VERSION:s,getAll:p,removeAll:_,add:l,remove:c,update:d};const v=Object.freeze(Object.defineProperty({__proto__:null,Easing:t,Group:i,Interpolation:n,Sequence:r,Tween:o,VERSION:s,add:l,default:f,getAll:p,nextId:u,now:e,remove:c,removeAll:_,update:d},Symbol.toStringTag,{value:"Module"}));export{t as E,v as _,d as u};