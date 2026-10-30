import{importShared as B}from"./3d-tiles-renderer.duPTVMza1793343379643.js";import{gsapWithCSS as rt}from"./index.C1NmcAq51793343379643.js";import{_export_sfc as nt}from"./index.rdQY9uqN1793343379643.js";const v=await B("three");var ot=function(){function i(t){this.options={fov:45,distance:90,distRange:{max:Number.POSITIVE_INFINITY,min:Number.NEGATIVE_INFINITY},focusPos:new v.Vector3,rotation:new v.Vector3,rotRange:{xMax:Number.POSITIVE_INFINITY,xMin:Number.NEGATIVE_INFINITY,yMax:90,yMin:-90},eyeSeparation:0};for(var e in t)if(e==="rotRange")for(var e in t.rotRange)this.options.rotRange[e]=t.rotRange[e];else if(e==="distRange")for(var e in t.distRange)this.options.distRange[e]=t.distRange[e];else this.options[e]=t[e];this.distActual=this.options.distance,this.distTarget=this.options.distance,this.focusActual=this.options.focusPos.clone(),this.focusTarget=this.options.focusPos.clone(),this.rotActual=this.options.rotation.clone(),this.rotTarget=this.options.rotation.clone();var s=1,r=1;this.camera=new v.PerspectiveCamera(this.options.fov,s/r,.1,100),this.radians=Math.PI/180,this.quatX=new v.Quaternion,this.quatY=new v.Quaternion,this.gyro={orient:0},typeof window<"u"&&typeof window.orientation<"u"?this.defaultEuler=new v.Euler(90*this.radians,180*this.radians,(180+parseInt(window.orientation.toString(),10))*this.radians):this.defaultEuler=new v.Euler(0,0,0)}return i.prototype.setDistance=function(t){t===void 0&&(t=150),this.distActual=t,this.distTarget=t},i.prototype.setAngleRange=function(t,e,s,r){t===void 0&&(t=Number.POSITIVE_INFINITY),e===void 0&&(e=Number.NEGATIVE_INFINITY),s===void 0&&(s=90),r===void 0&&(r=-90),this.options.rotRange.xMax=t,this.options.rotRange.xMin=e,this.options.rotRange.yMax=s,this.options.rotRange.yMin=r},i.prototype.setRotation=function(t,e,s){t===void 0&&(t=0),e===void 0&&(e=0),s===void 0&&(s=0),this.rotActual.set(t,e,s),this.rotTarget.set(t,e,s),this.gyro.alpha=void 0,this.gyro.beta=void 0,this.gyro.gamma=void 0},i.prototype.setFocusPos=function(t,e,s){t===void 0&&(t=0),e===void 0&&(e=0),s===void 0&&(s=0),this.focusActual.set(t,e,s),this.focusTarget.set(t,e,s)},i.prototype.dolly=function(t){this.distTarget+=t/100,this.distTarget=v.MathUtils.clamp(this.distTarget,this.options.distRange.min,this.options.distRange.max)},i.prototype.orbitBy=function(t,e){this.rotTarget.x+=t,this.rotTarget.y+=e,this.rotTarget.x=v.MathUtils.clamp(this.rotTarget.x,this.options.rotRange.xMin,this.options.rotRange.xMax),this.rotTarget.y=v.MathUtils.clamp(this.rotTarget.y,this.options.rotRange.yMin,this.options.rotRange.yMax)},i.prototype.orbitTo=function(t,e){this.rotTarget.x=t,this.rotTarget.y=e,this.rotTarget.x=v.MathUtils.clamp(this.rotTarget.x,this.options.rotRange.xMin,this.options.rotRange.xMax),this.rotTarget.y=v.MathUtils.clamp(this.rotTarget.y,this.options.rotRange.yMin,this.options.rotRange.yMax)},i.prototype.pan=function(t,e){this.focusTarget.x-=t/10,this.focusTarget.y+=e/10},i.prototype.onWindowResize=function(t,e){this.camera.aspect=t/e,this.camera.updateProjectionMatrix()},i.prototype.onDeviceReorientation=function(t){this.gyro.orient=t*this.radians},i.prototype.onGyroMove=function(t,e,s){var r=this.gyro;r.alpha=t,r.beta=e,r.gamma=s},i.prototype.update=function(){this.distTarget=v.MathUtils.clamp(this.distTarget,this.options.distRange.min,this.options.distRange.max),this.distActual+=(this.distTarget-this.distActual)*.01,this.focusActual.lerp(this.focusTarget,.05),this.camera.position.copy(this.focusActual),[this.gyro.alpha,this.gyro.beta,this.gyro.gamma].every(Number.isFinite)?(this.camera.setRotationFromEuler(this.defaultEuler),this.camera.rotateZ(this.gyro.alpha*this.radians),this.camera.rotateX(this.gyro.beta*this.radians),this.camera.rotateY(this.gyro.gamma*this.radians),this.camera.rotation.z+=this.gyro.orient):(this.rotActual.lerp(this.rotTarget,.05),this.quatX.setFromAxisAngle(i.axisX,-v.MathUtils.degToRad(this.rotActual.y)),this.quatY.setFromAxisAngle(i.axisY,-v.MathUtils.degToRad(this.rotActual.x)),this.quatY.multiply(this.quatX),this.camera.quaternion.copy(this.quatY)),this.camera.translateZ(this.distActual)},i.prototype.follow=function(t){this.distTarget=v.MathUtils.clamp(this.distTarget,this.options.distRange.min,this.options.distRange.max),this.distActual+=(this.distTarget-this.distActual)*.01,this.focusTarget.set(t.x,t.y+1,t.z+this.distActual),this.focusActual.lerp(this.focusTarget,.01),this.camera.position.copy(this.focusActual),this.camera.lookAt(t)},i.axisX=new v.Vector3(1,0,0),i.axisY=new v.Vector3(0,1,0),i}();function st(i,t,e){return Math.max(0,Math.min(1,(i-t)/(e-t)))}function W(i,t,e){return Math.pow(st(i,t,e),2)}function Z(i,t,e){return i+(t-i)*Math.min(e,1)}var ht=function(){function i(t){this.fallBackRates=[60,40,30,20,15],this.prev=0,this.prevBreak=0,this.delta=0,this.timeFact=typeof t>"u"?1:t,this.frameCount=0,this.fallBackIndex=0,this.setFPS(60)}return i.prototype.update=function(t){return this.deltaBreak=Math.min(t-this.prevBreak,1),this.deltaBreak>this.spf?(this.delta=Math.min(t-this.prev,1),this.prev=t,this.prevBreak=t-this.deltaBreak%this.spf,!0):!1},i.prototype.checkFPS=function(){this.delta>this.spf*2&&(this.frameCount++,console.log(this.frameCount),this.frameCount>30&&(this.frameCount=0,this.fallBackIndex++,this.setFPS(this.fallBackRates[this.fallBackIndex])))},i.prototype.setFPS=function(t){this.fps=t,this.spf=1/this.fps},i}();function _(i,t){return(i%t+t)%t}const j=await B("three");var N=function(){function i(){}return i.Accel=5,i.Decel=-10,i.MaxVel=70*1610/3600,i.MaxTurn=Math.PI*.2,i.Length=5.25,i.Width=2.283,i.WheelTrack=1.72,i.WheelBase=3.2,i.WheelDiam=.78,i.WheelCirc=i.WheelDiam*Math.PI,i}(),q=function(){function i(t={}){this.vehicle={...N,...t},this.time=new ht,this.velocity=new j.Vector2,this.speed=0,this.accel=0,this.pos=new j.Vector2,this.joyVec=new j.Vector2,this.longitMomentum=0,this.lateralMomentum=0,this.wAngleInner=0,this.wAngleOuter=0,this.wAngleTarg=0,this.keys=new Array,this.braking=0,this.omega=0,this.theta=-Math.PI/2}return i.prototype.onKeyDown=function(t){t.keyCode>=37&&t.keyCode<=40&&t.preventDefault(),this.keys.indexOf(t.keyCode)===-1&&this.keys.push(t.keyCode)},i.prototype.onKeyUp=function(t){var e=this.keys.indexOf(t.keyCode);e!==-1&&this.keys.splice(e,1)},i.prototype.readKeyboardInput=function(){for(var t=0;t<this.keys.length;t++)switch(this.keys[t]){case 38:this.accel+=this.vehicle.Accel,this.accel*=W(this.speed,this.vehicle.MaxVel,this.vehicle.MaxVel-10);break;case 40:this.accel+=this.vehicle.Decel,this.braking=1;break;case 37:this.wAngleTarg+=this.vehicle.MaxTurn;break;case 39:this.wAngleTarg-=this.vehicle.MaxTurn;break}},i.prototype.onJoystickMove=function(t){this.joyVec.x=t.x/-40,this.joyVec.y=t.y/-40,Math.abs(this.joyVec.x)>.85&&(this.joyVec.y=0),Math.abs(this.joyVec.y)>.95&&(this.joyVec.x=0)},i.prototype.readJoyStickInput=function(){this.wAngleTarg=this.joyVec.x*this.vehicle.MaxTurn,this.joyVec.y>=0?(this.accel=this.joyVec.y*this.vehicle.Accel,this.accel*=W(this.speed,this.vehicle.MaxVel,this.vehicle.MaxVel-10),this.braking=0):(this.accel=this.joyVec.y*-this.vehicle.Decel,this.braking=1)},i.prototype.update=function(t){return this.time.update(t)===!1?!1:(this.accel=0,this.braking=0,this.wAngleTarg=0,this.keys.length>0?this.readKeyboardInput():(this.joyVec.x!=0||this.joyVec.y!=0)&&this.readJoyStickInput(),this.accel*=this.time.delta,this.speed+=this.accel,this.speed<0&&(this.speed=0,this.accel=0),this.frameDist=this.speed*this.time.delta,this.wAngleTarg*=W(this.speed,this.vehicle.MaxVel+10,3),this.wAngleInner=Z(this.wAngleInner,this.wAngleTarg,this.time.delta*2),this.wAngleSign=this.wAngleInner>.001?1:this.wAngleInner<-.001?-1:0,this.omega=this.wAngleInner*this.speed/this.vehicle.WheelBase,this.theta+=this.omega*this.time.delta,this.velocity.set(Math.cos(this.theta)*this.frameDist,-Math.sin(this.theta)*this.frameDist),this.pos.add(this.velocity),this.longitMomentum=Z(this.longitMomentum,this.accel/this.time.delta,this.time.delta*6),this.lateralMomentum=this.omega*this.speed,this.wAngleSign?(this.radFrontIn=this.vehicle.WheelBase/Math.sin(this.wAngleInner),this.radBackIn=this.vehicle.WheelBase/Math.tan(this.wAngleInner),this.radBackOut=this.radBackIn+this.vehicle.WheelTrack*this.wAngleSign,this.wAngleOuter=Math.atan(this.vehicle.WheelBase/this.radBackOut),this.radFrontOut=this.vehicle.WheelBase/Math.sin(this.wAngleOuter)):(this.radFrontOut=100,this.radBackOut=100,this.radBackIn=100,this.radFrontIn=100,this.wAngleOuter=0),!0)},i}();const h=await B("three");var lt=function(){function i(t,e){this.maxWheelTurn=Math.PI/9.69,this.parent=t,this.thread=e.thread,this.thread.minFilter=h.NearestFilter,this.thread.magFilter=h.LinearFilter,this.ogMatrix=new h.Matrix4().set(788e-6,0,0,-.3939,0,0,788e-6,-.3939,0,-788e-6,0,.15,0,0,0,1),this.invMatrix=new h.Matrix4().set(1,0,0,0,0,1,0,0,0,0,-1,0,0,0,0,1),this.wPosF=N.WheelBase,this.wPosB=0,this.wPosL=N.WheelTrack/-2,this.wPosR=N.WheelTrack/2,this.wPosY=N.WheelDiam/2;var s=e.vrWheelBrakes;this.addLeftWheels(s.getObjectByName("Wheel")),this.addRightWheels(),this.addBrakes(s.getObjectByName("Brake"))}return i.prototype.addLeftWheels=function(t){this.wheelFL=t,this.meshRubber=this.wheelFL.getObjectByName("Tire"),this.meshSilver=this.wheelFL.getObjectByName("RimsSilver"),this.meshBlack=this.wheelFL.getObjectByName("RimsBlack"),this.geomRubber=this.meshRubber.geometry,this.geomSilver=this.meshSilver.geometry,this.geomBlack=this.meshBlack.geometry,this.geomRubber.applyMatrix4(this.ogMatrix),this.geomSilver.applyMatrix4(this.ogMatrix),this.geomBlack.applyMatrix4(this.ogMatrix),this.geomRubber.computeVertexNormals(),this.geomSilver.computeVertexNormals(),this.geomBlack.computeVertexNormals(),this.matRubber=new h.MeshLambertMaterial({color:new h.Color().setHex(2105376,h.LinearSRGBColorSpace),map:this.thread}),this.matSilver=new h.MeshPhongMaterial({color:new h.Color().setHex(10066329,h.LinearSRGBColorSpace),shininess:50}),this.matBlack=new h.MeshPhongMaterial({color:new h.Color().setHex(1118481,h.LinearSRGBColorSpace),shininess:50}),this.meshRubber.material=this.matRubber,this.meshSilver.material=this.matSilver,this.meshBlack.material=this.matBlack,this.wheelFL.position.set(this.wPosF,this.wPosY,this.wPosL),this.parent.add(this.wheelFL),this.wheelBL=this.wheelFL.clone(),this.wheelBL.position.set(this.wPosB,this.wPosY,this.wPosL),this.parent.add(this.wheelBL)},i.prototype.addRightWheels=function(){this.iGeomRubber=this.geomRubber.clone(),this.iGeomSilver=this.geomSilver.clone(),this.iGeomBlack=this.geomBlack.clone(),this.iGeomRubber.applyMatrix4(this.invMatrix),this.iGeomSilver.applyMatrix4(this.invMatrix),this.iGeomBlack.applyMatrix4(this.invMatrix),this.iGeomRubber.computeVertexNormals(),this.iGeomSilver.computeVertexNormals(),this.iGeomBlack.computeVertexNormals();var t=this.matRubber.clone(),e=this.matSilver.clone(),s=this.matBlack.clone();t.side=h.BackSide,e.side=h.BackSide,s.side=h.BackSide,this.iMeshRubber=new h.Mesh(this.iGeomRubber,t),this.iMeshSilver=new h.Mesh(this.iGeomSilver,e),this.iMeshBlack=new h.Mesh(this.iGeomBlack,s),this.wheelFR=new h.Group,this.wheelFR.add(this.iMeshRubber),this.wheelFR.add(this.iMeshSilver),this.wheelFR.add(this.iMeshBlack),this.wheelFR.position.set(this.wPosF,this.wPosY,this.wPosR),this.parent.add(this.wheelFR),this.wheelBR=this.wheelFR.clone(),this.wheelBR.position.set(this.wPosB,this.wPosY,this.wPosR),this.parent.add(this.wheelBR)},i.prototype.addBrakes=function(t){this.brakeBL=t,this.brMeshDisc=this.brakeBL.getObjectByName("Disc"),this.brMeshPads=this.brakeBL.getObjectByName("Pad"),this.brGeomDisc=this.brMeshDisc.geometry,this.brGeomPads=this.brMeshPads.geometry,this.brGeomDisc.applyMatrix4(this.ogMatrix),this.brGeomPads.applyMatrix4(this.ogMatrix),this.brGeomDisc.computeVertexNormals(),this.brGeomPads.computeVertexNormals(),this.brMatDisc=new h.MeshPhongMaterial({color:new h.Color().setHex(5592405,h.LinearSRGBColorSpace),shininess:100,flatShading:!0}),this.brMatPads=new h.MeshPhongMaterial({color:new h.Color().setHex(3355443,h.LinearSRGBColorSpace),shininess:50,flatShading:!0}),this.brMeshDisc.material=this.brMatDisc,this.brMeshPads.material=this.brMatPads,this.brakeBL.position.set(this.wPosB,this.wPosY,this.wPosL),this.parent.add(this.brakeBL),this.brakeFL=this.brakeBL.clone(),this.brakeFL.position.set(this.wPosF,this.wPosY,this.wPosL),this.brakeFL.rotation.set(0,0,Math.PI),this.parent.add(this.brakeFL),this.brakeFR=this.brakeBL.clone(),this.brakeFR.position.set(this.wPosF,this.wPosY,this.wPosR),this.brakeFR.rotation.set(Math.PI,0,Math.PI),this.parent.add(this.brakeFR),this.brakeBR=this.brakeBL.clone(),this.brakeBR.position.set(this.wPosB,this.wPosY,this.wPosR),this.brakeBR.rotation.set(Math.PI,0,0),this.parent.add(this.brakeBR)},i.prototype.addHub=function(t,e,s){var r=new h.CylinderGeometry(.15,.15,.03,20);r.rotateX(Math.PI/2);var p=new h.MeshPhongMaterial({color:new h.Color().setHex(3355443,h.LinearSRGBColorSpace),shininess:50}),l=new h.Mesh(r,p);return l.position.set(t,e,s),this.parent.add(l),l},i.prototype.turnByRadiusRatio=function(t){this.rotOverall=-t.frameDist/N.WheelCirc*Math.PI*2,this.rotFL=this.rotBL=this.rotFR=this.rotBR=Math.max(this.rotOverall,-this.maxWheelTurn),t.wAngleSign!==0&&(this.ratioFO=t.radFrontOut/t.radBackIn,this.ratioBO=t.radBackOut/t.radBackIn,this.ratioFI=t.radFrontIn/t.radBackIn,this.ratioBI=1,t.wAngleSign==1?(this.rotFL*=this.ratioFI,this.rotBL*=this.ratioBI,this.rotFR*=this.ratioFO,this.rotBR*=this.ratioBO,this.wheelFL.rotation.y=t.wAngleInner,this.wheelFR.rotation.y=t.wAngleOuter,this.brakeFL.rotation.y=t.wAngleInner,this.brakeFR.rotation.y=-t.wAngleOuter):(this.rotFL*=this.ratioFO,this.rotBL*=this.ratioBO,this.rotFR*=this.ratioFI,this.rotBR*=this.ratioBI,this.wheelFL.rotation.y=t.wAngleOuter,this.wheelFR.rotation.y=t.wAngleInner,this.brakeFL.rotation.y=t.wAngleOuter,this.brakeFR.rotation.y=-t.wAngleInner),this.brakeBL.rotation.y=this.wheelBR.rotation.y=this.wheelBL.rotation.y=st(t.speed,22.2,0)*t.wAngleInner*-.09,this.brakeBR.rotation.y=-this.wheelBL.rotation.y),this.wheelFL.rotateZ(this.rotFL),this.wheelBL.rotateZ(this.rotBL),this.wheelFR.rotateZ(this.rotFR),this.wheelBR.rotateZ(this.rotBR)},i.prototype.update=function(t){this.turnByRadiusRatio(t)},i}();const ct=`float normFloat(float n, float minVal, float maxVal){
	return max(0.0, min(1.0, (n-minVal) / (maxVal-minVal)));
}

// Returns 1 if type matches val, 0 if not
float checkType(float type, float val){
	return step(val - 0.1, type) * step(type, val + 0.1);
}

uniform vec3 lightsT;
uniform vec3 lightsO;
attribute float type;
varying float wht;
varying float amb;

// z-up position because Blender is weird like that
void main() {
	vec2 posXY = vec2(position.y - 2299.0, position.z - 1355.0);
	float distOrigin = distance(posXY, vec2(0.0));   // FF Logo

	// 0: Daytime running lights
	wht = checkType(type, 0.0);
	
	// 1: nightlights
	wht += checkType(type, 1.0) * lightsO.y;
	
	// 2: high beams
	wht += checkType(type, 2.0) * lightsO.z;
	
	// 3: right turn signal
	wht += checkType(type, 3.0) * (1.0 - lightsT.x);
	amb = checkType(type, 3.0) * lightsT.z;
	
	// 4: left turn signal
	wht += checkType(type, 4.0) * (1.0 + lightsT.x);
	amb += checkType(type, 4.0) * lightsT.y;

	gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0 );
}
`,dt=`#define RED vec3(1.0, 0.1, 0.1) // red
#define AMB vec3(1.0, 0.6, 0.1)	// amber
#define WHT vec3(1.0, 1.0, 1.0)	// white

varying float wht;
varying float amb;

void main() {
	gl_FragColor = vec4((WHT * wht + AMB * amb), 1.0);
}
`,ut=`#define NIGHTLIGHT 0.4

float normFloat(float n, float minVal, float maxVal){
	return max(0.0, min(1.0, (n-minVal) / (maxVal-minVal)));
}

// Returns 1 if type matches val, 0 if not
float checkType(float type, float val){
	return step(val - 0.1, type) * step(type, val + 0.1);
}

uniform vec3 lightsT;
uniform vec3 lightsO;
attribute float type;
varying float red;
varying float amb;
varying float wht;
varying float brightness;

void main(){
	gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0 );
	brightness = 1.0;

	// Type 0: Reverse light?

	// Type 1: Right blinker
	amb = checkType(type, 1.0) * lightsT.z;

	// Type 2: Left blinker
	amb += checkType(type, 2.0) * lightsT.y;

	// Type 3: Side brakelights & side nightlights
	red = checkType(type, 3.0) * (NIGHTLIGHT + lightsO.x * (1.0 - NIGHTLIGHT));

	// Type 4: Center brakelight
	red += checkType(type, 4.0) * lightsO.x;

	// Type 5: Center nightlight
	red += checkType(type, 5.0) * NIGHTLIGHT;

	// Type 6: Lower foglights off
	red += checkType(type, 6.0) * NIGHTLIGHT * 0.2;

	// Type 7: Lower foglights on
	red += checkType(type, 7.0) * NIGHTLIGHT * 1.5;
}
`,pt=`#define NIGHTLIGHT 0.4

float normFloat(float n, float minVal, float maxVal){
	return max(0.0, min(1.0, (n-minVal) / (maxVal-minVal)));
}

// Returns 1 if type matches val, 0 if not
float checkType(float type, float val){
	return step(val - 0.1, type) * step(type, val + 0.1);
}

uniform vec3 lightsT;
uniform vec3 lightsO;
attribute float type;
varying float red;
varying float amb;
varying float wht;
varying float brightness;

void main(){
	gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0 );

 	vec3 realPos = vec3(modelMatrix * vec4(position, 1.0));
	vec3 realNorm = normalize(vec3(modelMatrix * vec4(normal, 0.0)));

	vec3 lightVector = normalize(cameraPosition - realPos);
	brightness = dot(realNorm, lightVector);
	brightness = normFloat(brightness, 0.3, 0.2) + 0.5;
	brightness *= brightness * brightness;
	
	// Type 0: FF logo	
	red = checkType(type, 0.0);
	// FF brightens on stop light
	red += red * lightsO.x;

	// Type 1: center grid
	red += checkType(type, 1.0) * NIGHTLIGHT;

	// Type 2: Right blinker
	red += (checkType(type, 2.0) * NIGHTLIGHT) * step(lightsT.x, 0.0);
	amb = checkType(type, 2.0) * lightsT.z;

	// Type 3: Left blinker
	red += (checkType(type, 3.0) * NIGHTLIGHT) * step(0.0, lightsT.x);
	amb += checkType(type, 3.0) * lightsT.y;
	
	brightness = clamp(brightness, 0.0, 1.0);
}
`,X=`#define RED vec3(1.0, 0.1, 0.1) // red
#define AMB vec3(1.0, 0.6, 0.1)	// amber
#define WHT vec3(1.0, 1.0, 1.0)	// white

varying float red;
varying float amb;
varying float wht;
varying float brightness;

void main() {
	gl_FragColor = vec4((RED * red + AMB * amb) * brightness, 1.0);
}
`,gt=`#define PI 3.1415926

uniform float vpH;
uniform float size;
uniform float brightness;
varying float opacity;

// Normalizes a value between 0 - 1
float normFloat(float n, float minVal, float maxVal){
    return max(0.0, min(1.0, (n-minVal) / (maxVal-minVal)));
}

void main() {
    vec4 realPos = modelMatrix * vec4(position, 1.0);
    vec3 realNorm = normalize(vec3(modelMatrix * vec4(normal, 0.0)));

    vec3 lightVector = normalize(cameraPosition - realPos.xyz);
    opacity = dot(realNorm, lightVector);
    opacity = normFloat(opacity, 0.5, 1.0) * brightness;

    vec4 mvPosition = viewMatrix * realPos;
    gl_Position = projectionMatrix * mvPosition;
    gl_PointSize = max((vpH * size / -mvPosition.z) * opacity, 0.0);
}
`,ft=`uniform vec3 color;
uniform sampler2D tSprite;

varying float opacity;

// Normalizes a value between 0 - 1
float normFloat(float n, float minVal, float maxVal){
    return max(0.0, min(1.0, (n-minVal) / (maxVal-minVal)));
}

void main() {
	// Additive
    gl_FragColor = texture2D( tSprite, gl_PointCoord);
    gl_FragColor.a = normFloat(opacity, 0.01, 0.1);
}
`,mt=`uniform vec3 lightsT;
varying float brightness;
varying vec2 vUV;

// Normalizes a value between 0 - 1
float normFloat(float n, float minVal, float maxVal){
    return max(0.0, min(1.0, (n-minVal) / (maxVal-minVal)));
}

void main() {
	vUV = uv;
    vec4 realPos = modelMatrix * vec4(position, 1.0);
    vec3 realNorm = normalize(vec3(modelMatrix * vec4(normal, 0.0)));

    vec3 lightVector = normalize(cameraPosition - realPos.xyz);
    float diffuse = dot(realNorm, lightVector);
    brightness = step(2000.0, position.y) * lightsT.z + step(position.y, 2000.0) * lightsT.y;
    brightness *= normFloat(diffuse, 0.0, 0.5);

    vec4 mvPosition = viewMatrix * realPos;
    gl_Position = projectionMatrix * mvPosition;
}
`,vt=`varying float brightness;
varying vec2 vUV;

// Normalizes a value between 0 - 1
float normFloat(float n, float minVal, float maxVal){
    return max(0.0, min(1.0, (n-minVal) / (maxVal-minVal)));
}

void main() {
	vUV = uv;
    vec4 realPos = modelMatrix * vec4(position, 1.0);
    vec3 realNorm = normalize(vec3(modelMatrix * vec4(normal, 0.0)));

    vec3 lightVector = normalize(cameraPosition - realPos.xyz);
    float diffuse = dot(realNorm, lightVector);
    brightness = normFloat(diffuse, 0.0, 0.5);

    vec4 mvPosition = viewMatrix * realPos;
    gl_Position = projectionMatrix * mvPosition;
}
`,K=`uniform sampler2D tSprite;
varying float brightness;
varying vec2 vUV;

// Normalizes a value between 0 - 1
float normFloat(float n, float minVal, float maxVal){
    return max(0.0, min(1.0, (n-minVal) / (maxVal-minVal)));
}

void main() {
	// Additive
    gl_FragColor = texture2D( tSprite, vUV) * brightness;

	// Subtractive
	// gl_FragColor = texture2D( tSprite, gl_PointCoord ) - vec4( color, 1.0 );
	// gl_FragColor *= opacity;

	// Multip
	/* gl_FragColor = -texture2D( tSprite, gl_PointCoord ) * opacity;
	gl_FragColor *= 1.0 - vec4( color, 1.0 );
	gl_FragColor += 1.0; */
}
`,u=await B("three");var yt=function(){function i(t,e){this.lfTimer=0,this.rtTimer=0,this.carChassis=t,this.flareHeadText=e.flareHead,this.flareTurnText=e.flareTurn,this.glowTurnText=e.lightTurn,this.glowStopText=e.lightStop,this.uniLightsTurn=new u.Vector3(0,0,0),this.uniLightsOther=new u.Vector3(0,1,0),this.initLightMeshes(),this.initHeadlightFlares(),this.initStopFlares(),this.initTurnFlares()}return i.prototype.initLightMeshes=function(){var t=this.carChassis.getObjectByName("TailGrid");t.geometry.computeVertexNormals(),this.matHeadLights=new u.ShaderMaterial({uniforms:{lightsT:{value:this.uniLightsTurn},lightsO:{value:this.uniLightsOther}},vertexShader:ct,fragmentShader:dt}),this.matTailLights=new u.ShaderMaterial({uniforms:{lightsT:{value:this.uniLightsTurn},lightsO:{value:this.uniLightsOther}},vertexShader:ut,fragmentShader:X}),this.matTailGrid=new u.ShaderMaterial({uniforms:{lightsT:{value:this.uniLightsTurn},lightsO:{value:this.uniLightsOther}},vertexShader:pt,fragmentShader:X}),this.carChassis.getObjectByName("HeadLights").material=this.matHeadLights,this.carChassis.getObjectByName("TailLights").material=this.matTailLights,t.material=this.matTailGrid},i.prototype.initHeadlightFlares=function(){this.flareHeadMat=new u.ShaderMaterial({uniforms:{tSprite:{value:this.flareHeadText},vpH:{value:1},size:{value:1.5},brightness:{value:1}},vertexShader:gt,fragmentShader:ft,blending:u.AdditiveBlending,transparent:!0,depthTest:!1});var t=new Float32Array([4e3,1875,1700,4300,1800,1700,4e3,1875,-1700,4300,1800,-1700]),e=new Float32Array([.87,.22,.44,.87,.22,.44,.87,.22,-.44,.87,.22,-.44]);this.flareHeadGeom=new u.BufferGeometry,this.flareHeadGeom.setAttribute("position",new u.BufferAttribute(t,3)),this.flareHeadGeom.setAttribute("normal",new u.BufferAttribute(e,3)),this.flareHeadPoints=new u.Points(this.flareHeadGeom,this.flareHeadMat),this.carChassis.add(this.flareHeadPoints)},i.prototype.initStopFlares=function(){var t=new u.ShaderMaterial({uniforms:{tSprite:{value:this.glowStopText}},vertexShader:vt,fragmentShader:K,blending:u.AdditiveBlending,transparent:!0,depthTest:!1});this.glowStop=this.carChassis.getObjectByName("Stop"),this.glowStop.material=t},i.prototype.initTurnFlares=function(){var t=new Float32Array([-4755,2227,-1269,-4703,2222,-1326,-4649,2215,-1381,-4590,2208,-1436,-4526,2200,-1492,-4459,2192,-1548,-4386,2182,-1604,-4718,2182,-1264,-4668,2179,-1321,-4301,2175,-1658,-4614,2175,-1377,-4556,2168,-1433,-4494,2163,-1489,-4429,2158,-1545,-4358,2151,-1600,-4266,2147,-1653,-4675,2136,-1260,-4627,2134,-1316,-4575,2132,-1373,-4520,2130,-1428,-4461,2128,-1485,-4400,2126,-1540,-4329,2123,-1597]),e=new Float32Array([-.9,0,-.4,-.9,0,-.4,-.9,0,-.4,-.9,0,-.4,-.9,0,-.4,-.9,0,-.4,-.9,0,-.4,-.9,0,-.4,-.9,0,-.4,-.9,0,-.4,-.9,0,-.4,-.9,0,-.4,-.9,0,-.4,-.9,0,-.4,-.9,0,-.4,-.9,0,-.4,-.9,0,-.4,-.9,0,-.4,-.9,0,-.4,-.9,0,-.4,-.9,0,-.4,-.9,0,-.4,-.9,0,-.4]);this.flareTurnMat=this.flareHeadMat.clone(),this.flareTurnMat.uniforms.tSprite.value=this.flareTurnText,this.flareTurnMat.uniforms.size.value=.05,this.flareTurnMat.uniforms.brightness.value=1;var s=new u.BufferGeometry;s.setAttribute("position",new u.BufferAttribute(t,3)),s.setAttribute("normal",new u.BufferAttribute(e,3)),this.flareLPoints=new u.Points(s,this.flareTurnMat),this.carChassis.add(this.flareLPoints),t=new Float32Array([-4755,2227,1269,-4703,2222,1326,-4649,2215,1381,-4590,2208,1436,-4526,2200,1492,-4459,2192,1548,-4386,2182,1604,-4718,2182,1264,-4668,2179,1321,-4301,2175,1658,-4614,2175,1377,-4556,2168,1433,-4494,2163,1489,-4429,2158,1545,-4358,2151,1600,-4266,2147,1653,-4675,2136,1260,-4627,2134,1316,-4575,2132,1373,-4520,2130,1428,-4461,2128,1485,-4400,2126,1540,-4329,2123,1597]),e=new Float32Array([-.9,0,.4,-.9,0,.4,-.9,0,.4,-.9,0,.4,-.9,0,.4,-.9,0,.4,-.9,0,.4,-.9,0,.4,-.9,0,.4,-.9,0,.4,-.9,0,.4,-.9,0,.4,-.9,0,.4,-.9,0,.4,-.9,0,.4,-.9,0,.4,-.9,0,.4,-.9,0,.4,-.9,0,.4,-.9,0,.4,-.9,0,.4,-.9,0,.4,-.9,0,.4]);var r=new u.BufferGeometry;r.setAttribute("position",new u.BufferAttribute(t,3)),r.setAttribute("normal",new u.BufferAttribute(e,3)),this.flareRPoints=new u.Points(r,this.flareTurnMat),this.carChassis.add(this.flareRPoints),this.glowTurnMat=new u.ShaderMaterial({uniforms:{tSprite:{value:this.glowTurnText},lightsT:{value:this.uniLightsTurn}},vertexShader:mt,fragmentShader:K,blending:u.AdditiveBlending,transparent:!0,depthTest:!1}),this.carChassis.getObjectByName("Turn").material=this.glowTurnMat},i.prototype.onWindowResize=function(t){this.flareHeadMat.uniforms.vpH.value=t,this.flareTurnMat.uniforms.vpH.value=t},i.prototype.update=function(t){t.wAngleTarg>0?(this.lfTimer=(this.lfTimer+t.time.delta*2)%2,this.uniLightsTurn.y=this.lfTimer>1?0:1,this.uniLightsTurn.z=0,this.uniLightsTurn.x=-1):t.wAngleTarg<0?(this.rtTimer=(this.rtTimer+t.time.delta*2)%2,this.uniLightsTurn.z=this.rtTimer>1?0:1,this.uniLightsTurn.y=0,this.uniLightsTurn.x=1):(this.lfTimer=0,this.rtTimer=0,this.uniLightsTurn.y=0,this.uniLightsTurn.z=0,this.uniLightsTurn.x=0),this.uniLightsOther.x=t.braking,this.glowStop.visible=!!t.braking,this.flareLPoints.visible=!!this.uniLightsTurn.y,this.flareRPoints.visible=!!this.uniLightsTurn.z},i}();const d=await B("three");var wt=function(){function i(t,e){this.parent=t,this.carWhole=new d.Group,this.carWhole.rotateY(-Math.PI/2),this.parent.add(this.carWhole),this.carChassis=this.buildCarChassis(e.vrBodyCompiled,e.envReflection),this.carWhole.add(this.carChassis),this.addShadow(e.shadow),this.carLights=new yt(this.carChassis,e),this.carWheels=new lt(this.carWhole,e)}return i.prototype.buildCarChassis=function(t,e){return t.scale.set(5e-4,5e-4,5e-4),t.position.set(1.56,0,0),this.envCube=e,this.matBodySilver=new d.MeshStandardMaterial({color:new d.Color().setHex(12303291,d.LinearSRGBColorSpace),metalness:.7,roughness:.7,envMap:this.envCube}),this.matBodyBlack=new d.MeshLambertMaterial({color:new d.Color().setHex(0,d.LinearSRGBColorSpace),emissive:new d.Color().setHex(4473924,d.LinearSRGBColorSpace),reflectivity:.8,envMap:this.envCube}),this.matGlassTinted=new d.MeshLambertMaterial({color:new d.Color().setHex(0,d.LinearSRGBColorSpace),emissive:new d.Color().setHex(6710886,d.LinearSRGBColorSpace),reflectivity:1,envMap:this.envCube}),this.matUndercarriage=new d.MeshBasicMaterial({color:new d.Color().setHex(0,d.LinearSRGBColorSpace)}),this.matGlassTransp=new d.MeshLambertMaterial({color:new d.Color().setHex(0,d.LinearSRGBColorSpace),emissive:new d.Color().setHex(6710886,d.LinearSRGBColorSpace),reflectivity:1,envMap:this.envCube,transparent:!0,blending:d.AdditiveBlending}),t.getObjectByName("BodyBlack").material=this.matBodyBlack,t.getObjectByName("BodySilver").material=this.matBodySilver,t.getObjectByName("GlassTransparent").material=this.matGlassTransp,t.getObjectByName("GlassTinted").material=this.matGlassTinted,t.getObjectByName("Undercarriage").material=this.matUndercarriage,t},i.prototype.addShadow=function(t){var e=new d.PlaneGeometry(6.5,6.5,1,1);e.rotateX(-Math.PI/2),e.translate(1.56,0,0);var s=new d.MeshBasicMaterial({map:t,side:d.DoubleSide,blending:d.MultiplyBlending,premultipliedAlpha:!0,transparent:!0,depthWrite:!1}),r=new d.Mesh(e,s);this.carWhole.add(r)},i.prototype.onWindowResize=function(t){this.carLights.onWindowResize(t)},i.prototype.update=function(t){this.carWhole.rotation.y=t.theta,this.carChassis.rotation.z=t.longitMomentum*.0015,this.carChassis.rotation.x=t.lateralMomentum*.002,this.carWheels.update(t),this.carLights.update(t)},i}();const bt=`precision highp float;
precision highp int;

in vec3 position;
in vec2 uv;
out vec2 vUv;

void main() {
	vUv = uv;
	gl_Position = vec4(position, 1.0);
}
`,xt=`precision highp float;
precision highp int;

#include <common>

uniform vec2 ripplePos;
uniform float rippleSize;
uniform float viscosity;
uniform float rippleImpact;
uniform sampler2D heightmap;

#define deltaTime ( 1.0 / 60.0 )
#define GRAVITY_CONSTANT ( resolution.x * deltaTime * 1.0 )

out vec4 outColor;

void main()	{

	vec2 cellSize = 1.0 / resolution.xy;

	vec2 uv = gl_FragCoord.xy * cellSize;

	// heightmapValue.x == height
	// heightmapValue.y == velocity
	// heightmapValue.z, heightmapValue.w not used
	vec4 heightmapValue = texture( heightmap, uv );

	// Get neighbours
	float north = texture( heightmap, uv + vec2( 0.0, cellSize.y ) ).r;
	float south = texture( heightmap, uv + vec2( 0.0, - cellSize.y ) ).r;
	float east = texture( heightmap, uv + vec2( cellSize.x, 0.0 ) ).r;
	float west = texture( heightmap, uv + vec2( - cellSize.x, 0.0 ) ).r;

	float sump = north + south + east + west - 4.0 * heightmapValue.x;

	float accel = sump * GRAVITY_CONSTANT;

	// Dynamics
	heightmapValue.y += accel;
	heightmapValue.x += heightmapValue.y * deltaTime;

	// Viscosity
	heightmapValue.x += sump * viscosity;

	// Mouse influence
	float mousePhase = clamp( 
		length(( uv - vec2( 0.5 ) ) * BOUNDS - vec2( ripplePos.x, - ripplePos.y ) ) * PI / rippleSize, 
		0.0, 
		PI
	);
	heightmapValue.x += (cos( mousePhase ) + 1.0) * rippleImpact;

	// Bring X back to 0 over time to prevent endless growth
	heightmapValue.x *= 0.998;

	// outColor = vec4(heightmapValue.x, 0.0, 0.0, 1.0);
	outColor = heightmapValue;
}
`,y=await B("three");var Tt=function(){function i(t,e,s){s===void 0&&(s=64),this.renderChange=!1,this.devMode=!1,this.renderer=t,this.textureSize=s;var r=y.HalfFloatType;this.rTarget1=new y.WebGLRenderTarget(this.textureSize,this.textureSize,{minFilter:y.NearestFilter,magFilter:y.NearestFilter,stencilBuffer:!1,depthBuffer:!1,format:y.RGBAFormat,type:r,wrapS:y.RepeatWrapping,wrapT:y.RepeatWrapping}),this.rTarget2=this.rTarget1.clone(),this.gpScene=new y.Scene,this.gpCam=new y.Camera,this.gpCam.position.z=1;var p="vec2( "+this.textureSize.toFixed(1)+", "+this.textureSize.toFixed(1)+" )";this.gpGeom=new y.PlaneGeometry(2,2),this.gpMat=new y.RawShaderMaterial({glslVersion:y.GLSL3,uniforms:{ripplePos:{value:e},rippleSize:{value:1},rippleImpact:{value:1},viscosity:{value:.01},heightmap:{value:null}},defines:{BOUNDS:this.textureSize.toFixed(1),resolution:p},vertexShader:bt,fragmentShader:xt,depthWrite:!1}),this.uniSize=this.gpMat.uniforms.rippleSize,this.uniImpact=this.gpMat.uniforms.rippleImpact,this.gpMesh=new y.Mesh(this.gpGeom,this.gpMat),this.gpScene.add(this.gpMesh),this.devMode&&(this.devScene=new y.Scene,this.devCam=new y.Camera,this.devCam.position.z=1,this.devGeom=new y.PlaneGeometry(2,2),this.devMat=new y.MeshBasicMaterial({map:this.rTarget1.texture}),this.devMesh=new y.Mesh(this.devGeom,this.devMat),this.devScene.add(this.devMesh))}return i.prototype.renderTo=function(t){const e=this.renderer.getRenderTarget();this.renderer.setRenderTarget(t),this.renderer.render(this.gpScene,this.gpCam),this.renderer.setRenderTarget(e)},i.prototype.dispose=function(){this.rTarget1.dispose(),this.rTarget2.dispose(),this.gpGeom.dispose(),this.gpMat.dispose(),this.devGeom&&this.devGeom.dispose(),this.devMat&&this.devMat.dispose()},i.prototype.newRippleSize=function(t){this.uniSize.value=t},i.prototype.newRippleImpact=function(t){this.uniImpact.value=t},i.prototype.update=function(){return this.renderChange=!this.renderChange,this.renderChange?(this.gpMat.uniforms.heightmap.value=this.rTarget2.texture,this.renderTo(this.rTarget1),this.devMode&&(this.renderer.setViewport(0,0,this.textureSize*2,this.textureSize*2),this.renderer.render(this.devScene,this.devCam),this.renderer.setViewport(0,0,this.renderer.domElement.width,this.renderer.domElement.height)),this.rTarget1.texture):(this.gpMat.uniforms.heightmap.value=this.rTarget1.texture,this.renderTo(this.rTarget2),this.devMode&&(this.renderer.setViewport(0,0,this.textureSize*2,this.textureSize*2),this.renderer.render(this.devScene,this.devCam),this.renderer.setViewport(0,0,this.renderer.domElement.width,this.renderer.domElement.height)),this.rTarget2.texture)},i}();const Mt=`uniform sampler2D led;
uniform vec3 color;

varying float opacity;
varying float diag;

void main() {
	// Multiplicative
    // gl_FragColor = -texture2D( led, vec2(abs(diag - gl_PointCoord.x), gl_PointCoord.y )) * opacity;
    // gl_FragColor += 1.0;

	// Additive
    gl_FragColor = texture2D( led, vec2(abs(diag - gl_PointCoord.x), gl_PointCoord.y )) * vec4(color, opacity);
}
`,St=`#define PI 3.1415926

attribute float diagonal;

uniform sampler2D heightmap;
uniform float vpH;
uniform vec2 origin;
uniform float prog;

varying float opacity;
varying float diag;

// Normalizes a value between 0 - 1
float normFloat(float n, float minVal, float maxVal){
	return max(0.0, min(1.0, (n-minVal) / (maxVal-minVal)));
}

void main() {	diag = diagonal;
	float fluctuation = -texture2D(heightmap, uv).r;

	// Endless threadmill
	vec3 newPos = position;
	newPos.xz -= origin;
	newPos.x = (fract((newPos.x + RANGE) / RANGE2) * RANGE2) - RANGE;
	newPos.z = (fract((newPos.z + RANGE) / RANGE2) * RANGE2) - RANGE;
	newPos.y = fluctuation * 0.5;

	// Size
	float size = normFloat(abs(cameraPosition.y), -0.5, 2.0) * 0.25;

	// Fade out as camera fog
	float distOrigin = distance(newPos.xz, vec2(-0.5, 0.0));
	opacity = (fluctuation + 0.5) * normFloat(distOrigin, RANGE, RANGE * 0.5);

	// Make logo
	float ffLogo = step(distOrigin, 1.7) * prog;
	//newPos.y = max(ffLogo * 0.5, newPos.y);
	opacity = max(ffLogo, opacity);
	size = max(ffLogo, size);

	// Position, size    
	vec4 mvPosition = modelViewMatrix * vec4(newPos, 1.0 );
	gl_Position = projectionMatrix * mvPosition;
	gl_PointSize = vpH * size / -mvPosition.z;
}
`,k=await B("three");var Rt=function(){function i(t,e,s){this.GRID_SIZE=32,this.GRID_HALFSIZE=16,this.parent=t,this.prevOrigin=new k.Vector2,this.ripplePos=new k.Vector2,this.ledSprite=s,this.rippleGen=new Tt(e,this.ripplePos,this.GRID_SIZE),this.generateGrid()}return i.prototype.generateGrid=function(){this.color=new k.Color(16777215),this.gridMaterial=new k.ShaderMaterial({uniforms:{led:{value:this.ledSprite},heightmap:{value:null},vpH:{value:1},prog:{value:0},origin:{value:new k.Vector2},color:{value:this.color}},defines:{RANGE:(this.GRID_SIZE/2).toFixed(1),RANGE2:this.GRID_SIZE.toFixed(1)},vertexShader:St,fragmentShader:Mt,transparent:!0,depthWrite:!1}),this.uniProgress=this.gridMaterial.uniforms.prog,this.uniOrigin=this.gridMaterial.uniforms.origin;var t=Math.pow(this.GRID_SIZE,2),e=new Float32Array(t*3),s=new Float32Array(t*2),r=new Uint16Array(t);k.MathUtils.randInt;for(var p=0,l=0,m=0,S=0;m<t;m++,S+=3)p=m%this.GRID_SIZE,l=Math.floor(m/this.GRID_SIZE),e[S+0]=p-this.GRID_HALFSIZE,e[S+1]=0,e[S+2]=l-this.GRID_HALFSIZE,s[m*2+0]=p/this.GRID_SIZE,s[m*2+1]=1-l/this.GRID_SIZE,r[m]=(p+l)%2;this.geometry=new k.BufferGeometry,this.geometry.setAttribute("position",new k.BufferAttribute(e,3)),this.geometry.setAttribute("uv",new k.BufferAttribute(s,2)),this.geometry.setAttribute("diagonal",new k.BufferAttribute(r,1)),this.lightGrid=new k.Points(this.geometry,this.gridMaterial),this.lightGrid.frustumCulled=!1,this.parent.add(this.lightGrid)},i.prototype.moveRippleOrigin=function(t,e){this.ripplePos.set(t,e)},i.prototype.update=function(t){typeof t<"u"&&t.speed>0&&(this.rippleGen.newRippleImpact(t.speed/64),this.moveRippleOrigin(_(t.pos.x+this.GRID_HALFSIZE,this.GRID_SIZE)-this.GRID_HALFSIZE,_(t.pos.y+this.GRID_HALFSIZE,this.GRID_SIZE)-this.GRID_HALFSIZE),this.uniOrigin.value=t.pos),this.gridMaterial.uniforms.heightmap.value=this.rippleGen.update(),this.moveRippleOrigin(1e3,1e3)},i.prototype.onWindowResize=function(t,e,s){this.gridMaterial.uniforms.vpH.value=e*s},i}();const{CubeTextureLoader:Bt,TextureLoader:Ft,ObjectLoader:Pt,NoColorSpace:kt}=await B("three");function at(i){const t=window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__||"./",e=i||new URL("plugins/ff91Drive/",new URL(t,document.baseURI)).href;return new URL(e.endsWith("/")?e:`${e}/`,document.baseURI).href}function J(i,t){i?.traverse?.(e=>{e.geometry&&t.add(e.geometry);for(const s of[e.material].flat().filter(Boolean)){t.add(s);for(const r of Object.values(s))r?.isTexture&&t.add(r);for(const r of Object.values(s.uniforms||{}))r.value?.isTexture&&t.add(r.value)}})}function It(i,t=()=>{}){const e=new Set,s={},r=new AbortController,p=[];let l=!1,m=0;const S=11,c=()=>new DOMException("FF 91 loading cancelled","AbortError"),T=()=>{l||t(++m/S)},w=(n,g=!1)=>{const F=g?new Bt:new Ft,R=g?["xp","xn","yp","yn","zp","zn"].map(A=>`${i}textures/${n}/${A}.jpg`):`${i}textures/${n}.${n==="ledA"?"png":"jpg"}`;p.push(new Promise((A,C)=>{s[n]=F.load(R,a=>{if(l){a.dispose(),C(c());return}T(),A(a)},void 0,()=>C(new Error(`Unable to load FF 91 texture: ${n}`))),s[n].colorSpace=kt,e.add(s[n])}))};w("envReflection",!0),w("envSkybox",!0);for(const n of["flareHead","flareTurn","lightTurn","lightStop","thread","shadow","ledA"])w(n);for(const n of["vrBodyCompiled","vrWheelBrakes"])p.push(fetch(`${i}meshes/${n}.json`,{signal:r.signal}).then(g=>{if(!g.ok)throw new Error(`Unable to load FF 91 model: ${n} (${g.status})`);return g.json()}).then(g=>{if(l)throw c();s[n]=new Pt().parse(g),J(s[n],e),T()}));return{cargo:s,ready:Promise.all(p).then(()=>{if(l)throw c();return s}),dispose(n){if(!l){l=!0,r.abort(),J(n,e),n?.background?.isTexture&&e.add(n.background),n?.environment?.isTexture&&e.add(n.environment);for(const g of e)g.dispose();e.clear();for(const g of Object.keys(s))delete s[g]}}}}const{MathUtils:Lt,Plane:At,Raycaster:Ct,Vector2:Q,Vector3:tt}=await B("three");function Vt(i,t,e=()=>{}){const s=[],r=new Map,p=new Ct,l=new At(new tt(0,1,0),0),m=new tt,S=new Q;let c=null,T=null,w=!1;const n=(a,o,f,M)=>{a.addEventListener(o,f,M),s.push(()=>a.removeEventListener(o,f,M))},g=()=>e({visible:!1,x:0,y:0,dx:0,dy:0}),F=()=>{t.props.keys.length=0,t.props.joyVec.set(0,0),c=T=null,r.clear(),g()},R=a=>{const o=i.getBoundingClientRect();S.set((a.clientX-o.left)/o.width*2-1,1-(a.clientY-o.top)/o.height*2),p.setFromCamera(S,t.camera.camera),p.ray.intersectPlane(l,m)&&t.grid.moveRippleOrigin(m.x,m.z)},A=a=>{const o=i.getBoundingClientRect(),f=a.pointerType!=="mouse"&&(w||a.x-o.left<o.width/2);c={mode:f?"drive":"orbit",start:a,last:a},f&&e({visible:!0,x:a.x-o.left,y:a.y-o.top,dx:0,dy:0})};n(i,"pointerdown",a=>{if(t.paused||!t.active||a.pointerType==="mouse"&&a.button!==0||a.target.closest("button, a, input, select, textarea"))return;a.preventDefault(),i.focus({preventScroll:!0}),i.setPointerCapture&&i.setPointerCapture(a.pointerId);const o={x:a.clientX,y:a.clientY,pointerType:a.pointerType};if(r.set(a.pointerId,o),!t.started){c={mode:"intro",start:o,last:o},R(a);return}if(r.size===1&&A(o),r.size===2){const[f,M]=[...r.values()];T={length:Math.hypot(f.x-M.x,f.y-M.y),distance:t.camera.distTarget},t.props.joyVec.set(0,0),g()}}),n(i,"pointermove",a=>{if(t.paused||!t.active){F();return}if(!r.has(a.pointerId))return;const o={x:a.clientX,y:a.clientY,pointerType:a.pointerType};if(r.set(a.pointerId,o),!t.started){R(a);return}if(r.size>1&&T){const[f,M]=[...r.values()],Y=Math.max(1,Math.hypot(f.x-M.x,f.y-M.y)),D=t.camera.options.distRange;t.camera.distTarget=Lt.clamp(T.distance*T.length/Y,D.min,D.max)}else if(c?.mode==="orbit")t.camera.orbitBy((o.x-c.last.x)*.25,(o.y-c.last.y)*.25);else if(c?.mode==="drive"){const f=new Q(o.x-c.start.x,o.y-c.start.y).clampLength(0,40);t.props.onJoystickMove(f);const M=i.getBoundingClientRect();e({visible:!0,x:c.start.x-M.left,y:c.start.y-M.top,dx:f.x,dy:f.y})}c&&(c.last=o)});const C=(a,o=!1)=>{const f=r.get(a.pointerId),M=f&&c?Math.hypot(f.x-c.start.x,f.y-c.start.y):0;r.delete(a.pointerId),i.hasPointerCapture?.(a.pointerId)&&i.releasePointerCapture(a.pointerId),t.props.joyVec.set(0,0),T=null,g(),!o&&!t.paused&&!t.started&&M<6&&t.start(),r.size===1?A([...r.values()][0]):c=null};if(n(i,"pointerup",a=>C(a)),n(i,"pointercancel",a=>C(a,!0)),n(i,"lostpointercapture",a=>{r.has(a.pointerId)&&C(a,!0)}),n(i,"keydown",a=>{a.target.closest("button, a, input, select, textarea")||(a.code==="Enter"||a.code==="Space"?(a.preventDefault(),t.start()):t.started&&!t.paused&&a.keyCode>=37&&a.keyCode<=40&&t.props.onKeyDown(a))}),n(i,"keyup",a=>t.props.onKeyUp(a)),n(i,"focusout",a=>{i.contains(a.relatedTarget)||F()}),n(window,"blur",F),n(i,"wheel",a=>{if(!t.started||t.paused)return;a.preventDefault();const o=a.deltaMode===1?20:a.deltaMode===2?40:.2;t.camera.dolly(a.deltaY*o)},{passive:!1}),t.options.gyroscope!==!1){const a=()=>{const o=window.screen.orientation?.angle??window.orientation??0;t.camera.onDeviceReorientation(-o),t.camera.defaultEuler.set(Math.PI/2,Math.PI,(180+o)*Math.PI/180)};a(),n(window,"orientationchange",a),window.screen.orientation?.addEventListener&&n(window.screen.orientation,"change",a),n(window,"deviceorientation",o=>{!t.active||!window.matchMedia("(pointer:coarse)").matches||[o.alpha,o.beta,o.gamma].every(Number.isFinite)&&(w=!0,t.camera.onGyroMove(o.alpha,o.beta,o.gamma))})}return n(i,"contextmenu",a=>a.preventDefault()),()=>{F();for(const a of s)a()}}const I=await B("three");class Gt{constructor(t,e){this.container=t,this.options=e,this.props=new q,this.status="loading",this.started=!1,this.disposed=!1,this.paused=!1,this.active=!1,this.tweens=new Set,this.pausedTweens=new Set,this.frameId=0,this.worldPosition=new I.Vector3,this.originalTabIndex=t.getAttribute("tabindex"),this.originalPosition=t.style.position,this.assetBase=at(e.assetBase)}initialize(){this.renderer=new I.WebGLRenderer({antialias:!0,alpha:!1});const t=Number.isFinite(this.options.pixelRatio)?I.MathUtils.clamp(this.options.pixelRatio,.5,2):1;if(this.renderer.setPixelRatio(t),this.renderer.setClearColor(3749171),this.renderer.toneMapping=I.NoToneMapping,this.renderer.outputColorSpace=I.LinearSRGBColorSpace,this.renderer.autoClear=!1,this.renderer.domElement.setAttribute("aria-hidden","true"),this.renderer.domElement.style.cssText="position:absolute;inset:0;display:block;width:100%;height:100%",!this.renderer.extensions.has("EXT_color_buffer_float"))throw new Error("This device cannot render the floating point textures required by the FF 91 ground effects.");this.positionChanged=getComputedStyle(this.container).position==="static",this.positionChanged&&(this.container.style.position="relative"),this.container.appendChild(this.renderer.domElement),this.container.hasAttribute("tabindex")||(this.container.tabIndex=0),this.scene=new I.Scene,this.camera=new ot({distance:7,focusPos:new I.Vector3(0,1,1.56),distRange:{max:40,min:4},rotation:new I.Vector3(45,0,0),rotRange:{yMin:-1}}),this.scene.add(new I.AmbientLight(16777215,.2)),this.light=new I.DirectionalLight(16777215,0),this.light.position.set(0,2,0),this.scene.add(this.light),this.assets=It(this.assetBase,e=>this.options.onProgress?.(e)),this.assets.ready.catch(()=>{}),this.grid=new Rt(this.scene,this.renderer,this.assets.cargo.ledA),this.resize(),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(this.container),this.removeInput=Vt(this.container,this,this.options.onJoystick),this.onVisibility=()=>this.updateActivity(),document.addEventListener("visibilitychange",this.onVisibility),this.updateActivity(),this.tween(this.grid.uniProgress,{value:1,duration:2}),this.tween(this.camera,{distTarget:30,duration:1}),this.tween(this.camera.rotTarget,{x:0,y:90,duration:1}),this.ready=this.assets.ready.then(e=>{if(!this.disposed)return this.car=new wt(this.scene,e),this.scene.background=e.envSkybox,this.setLights({headlights:!0,highBeams:!1}),this.status="ready",this.resize(),this.options.onReady?.(this),this.options.autoStart&&this.start(),this}).catch(e=>{throw this.disposed||(this.dispose(),this.status="error",this.options.onError?.(e)),e}),this.ready.catch(()=>{})}tween(t,e){const s=rt.to(t,{ease:"power2.inOut",overwrite:"auto",...e});return this.tweens.add(s),this.active||(s.pause(),this.pausedTweens.add(s)),s}resize(){if(this.disposed||!this.renderer)return;const t=Math.max(1,this.container.clientWidth),e=Math.max(1,this.container.clientHeight);this.renderer.setSize(t,e,!1),this.camera.onWindowResize(t,e),this.grid.onWindowResize(t,e,this.renderer.getPixelRatio()),this.car?.onWindowResize(e*this.renderer.getPixelRatio())}render(t){this.disposed||!this.active||(this.car&&this.props.update(t/1e3)&&(this.car.update(this.props),this.car.carChassis.getWorldPosition(this.worldPosition),this.camera.setFocusPos(this.worldPosition.x,1,this.worldPosition.z)),this.grid.update(this.car?this.props:void 0),this.camera.update(),this.light.position.copy(this.camera.camera.position).normalize(),this.light.position.y=1,this.renderer.setRenderTarget(null),this.renderer.clear(),this.renderer.render(this.scene,this.camera.camera),this.frameId=requestAnimationFrame(e=>this.render(e)))}updateActivity(){if(this.disposed)return;const t=!this.paused&&!document.hidden;if(t!==this.active)if(this.active=t,t){const e=performance.now()/1e3;this.props.time.prev=this.props.time.prevBreak=e;for(const s of this.pausedTweens)s.resume();this.pausedTweens.clear(),this.frameId=requestAnimationFrame(s=>this.render(s))}else{cancelAnimationFrame(this.frameId),this.props.keys.length=0,this.props.joyVec.set(0,0);for(const e of this.tweens)e.isActive()&&!e.paused()&&(e.pause(),this.pausedTweens.add(e))}}start(){return this.disposed||this.started||this.status!=="ready"?!1:(this.started=!0,this.status="running",this.container.focus({preventScroll:!0}),this.tween(this.grid.color,{r:0,g:0,b:0,duration:1}),this.tween(this.grid.uniProgress,{value:0,duration:1}),this.tween(this.camera.rotTarget,{x:-20,y:0,duration:1}),this.tween(this.camera,{distTarget:10,distActual:10,duration:1}),this.tween(this.light,{intensity:Math.PI,duration:3}),this.tween(this.props,{speed:12,duration:3}),this.options.onStart?.(),!0)}pause(){this.paused=!0,this.updateActivity()}resume(){this.paused=!1,this.updateActivity()}reset(){if(this.disposed||!this.car||!this.started)return;for(const e of this.tweens)e.kill();this.tweens.clear(),this.pausedTweens.clear(),this.props=new q;const t=performance.now()/1e3;this.props.time.prev=this.props.time.prevBreak=t,this.camera.setRotation(-20,0,0),this.camera.setDistance(10),this.grid.color.setRGB(0,0,0),this.grid.uniProgress.value=0,this.grid.uniOrigin.value=this.props.pos,this.light.intensity=Math.PI,this.car.carWheels.wheelFL.rotation.set(0,0,0),this.car.carWheels.wheelFR.rotation.set(0,0,0),this.car.carWheels.wheelBL.rotation.set(0,0,0),this.car.carWheels.wheelBR.rotation.set(0,0,0);for(const e of["brakeFL","brakeFR","brakeBL","brakeBR"])this.car.carWheels[e].rotation.y=0;this.setLights({headlights:!0,highBeams:!1})}setInput({throttle:t=0,steering:e=0,brake:s=!1}={}){if(this.disposed)return;const r=p=>I.MathUtils.clamp(Number.isFinite(p)?p:0,-1,1);this.props.joyVec.set(r(e),s?-1:r(t))}setLights({headlights:t,highBeams:e}={}){if(this.disposed||!this.car)return;const s=this.car.carLights;t!==void 0&&(s.uniLightsOther.y=t?1:0),e!==void 0&&(s.uniLightsOther.z=e?1:0),s.flareHeadMat.uniforms.brightness.value=s.uniLightsOther.y||s.uniLightsOther.z?1:0}getState(){return{status:this.status,started:this.started,paused:this.paused,speed:this.props.speed,braking:!!this.props.braking,steering:this.props.wAngleInner,leftSignal:!!this.car?.carLights.uniLightsTurn.y,rightSignal:!!this.car?.carLights.uniLightsTurn.z}}dispose(){if(!this.disposed){this.disposed=!0,this.status="disposed",cancelAnimationFrame(this.frameId),this.resizeObserver?.disconnect(),this.removeInput?.(),this.onVisibility&&document.removeEventListener("visibilitychange",this.onVisibility);for(const t of this.tweens)t.kill();this.tweens.clear(),this.pausedTweens.clear(),this.assets?.dispose(this.scene),this.grid?.rippleGen.dispose(),this.scene?.clear(),this.renderer?.dispose(),this.renderer?.forceContextLoss(),this.renderer?.domElement.remove(),this.positionChanged&&(this.container.style.position=this.originalPosition),this.originalTabIndex===null?this.container.removeAttribute("tabindex"):this.container.setAttribute("tabindex",this.originalTabIndex),this.car=this.grid=this.assets=this.scene=this.renderer=null}}}function zt(i,t={}){if(!i?.appendChild)throw new TypeError("FF 91 requires a DOM container.");const e=new Gt(i,t);try{return e.initialize(),e}catch(s){throw e.dispose(),s}}const{createElementVNode:L,normalizeStyle:U,openBlock:V,createElementBlock:G,createCommentVNode:E,toDisplayString:H,Fragment:et,normalizeClass:Nt,renderList:Et}=await B("vue"),Ot=["aria-label"],Ht=["aria-valuenow","aria-label"],Dt={role:"status","aria-live":"polite"},Wt=["aria-label"],jt={key:0,class:"ff91-hints","aria-hidden":"true"},Ut=["cx","cy"],{computed:Yt,onActivated:$t,onBeforeUnmount:Zt,onDeactivated:_t,onMounted:qt,ref:z,watch:it}=await B("vue"),Xt={__name:"FF91Drive",props:{assetBase:{type:String,default:""},autoStart:{type:Boolean,default:!1},showControls:{type:Boolean,default:!0},pixelRatio:{type:Number,default:1},locale:{type:String,default:"en"},paused:{type:Boolean,default:!1},gyroscope:{type:Boolean,default:!0}},emits:["ready","progress","start","error","dispose"],setup(i,{expose:t,emit:e}){const s=i,r=e,p=z(null),l=z("loading"),m=z(0),S=z(""),c=z({visible:!1,x:0,y:0,dx:0,dy:0}),T=z(""),w=Yt(()=>s.locale==="zh"?{loading:"加载中…",begin:"点击画面或按 Enter 开始",retry:"重新加载",hints:["方向控制","拖拽镜头","滑动缩放"],instructions:"FF 91 交互试驾。点击或按 Enter 开始；方向键驾驶，拖动镜头，滚轮缩放。触屏左侧驾驶、右侧转动镜头，双指缩放。"}:{loading:"Loading assets...",begin:"Tap screen to begin.",retry:"Try again",hints:["Car controls","Drag camera","Scroll zoom"],instructions:"FF 91 test ride. Click or press Enter to begin. Arrow keys drive, drag to orbit, scroll to zoom. On touch screens, drag the left half to drive, the right half to orbit, and pinch to zoom."});let n=null,g=!1,F=!1,R=0;const A=new Set;function C(){n?.dispose(),n=null;for(const b of A)document.fonts.delete(b);A.clear(),c.value={visible:!1,x:0,y:0,dx:0,dy:0}}function a(){if(!g)return;const b=++R;C(),l.value="loading",m.value=0,S.value="";const P=x=>{b===R&&(l.value="error",S.value=x.message,r("error",x))};try{if(T.value=at(s.assetBase),n=zt(p.value,{assetBase:T.value,autoStart:s.autoStart,pixelRatio:s.pixelRatio,gyroscope:s.gyroscope,onProgress:x=>{b===R&&(m.value=x,r("progress",x))},onReady:x=>{b===R&&(m.value=1,l.value="ready",r("ready",x))},onStart:()=>{b===R&&(l.value="running",r("start"))},onJoystick:x=>{b===R&&(c.value=x)},onError:P}),(s.paused||F)&&n.pause(),n.ready.catch(()=>{}),typeof FontFace<"u"&&document.fonts)for(const[x,O]of[[300,"light"],[700,"bold"]])new FontFace("FF91Roboto",`url("${T.value}fonts/roboto-${O}.ttf")`,{weight:String(x),display:"swap"}).load().then($=>{g&&b===R&&(document.fonts.add($),A.add($))}).catch(()=>{})}catch(x){P(x)}}const o=()=>n?.start();return t({start:o,pause:()=>n?.pause(),resume:()=>n?.resume(),reset:()=>n?.reset(),setInput:b=>n?.setInput(b),setLights:b=>n?.setLights(b),getState:()=>n?.getState()||{status:l.value}}),qt(()=>{g=!0,a()}),$t(()=>{F=!1,s.paused||n?.resume()}),_t(()=>{F=!0,n?.pause()}),Zt(()=>{g=!1,R++,C(),r("dispose")}),it(()=>[s.assetBase,s.pixelRatio,s.autoStart,s.gyroscope],a),it(()=>s.paused,b=>{b||F?n?.pause():n?.resume()}),(b,P)=>(V(),G("div",{ref_key:"container",ref:p,class:"ff91-drive",tabindex:"0","aria-label":w.value.instructions},[L("div",{class:Nt(["ff91-loader",{visible:l.value!=="running"}])},[P[1]||(P[1]=L("h1",null,"FF 91 VR Test Ride",-1)),l.value==="loading"?(V(),G("div",{key:0,class:"ff91-progress",role:"progressbar","aria-valuenow":Math.round(m.value*100),"aria-valuemin":"0","aria-valuemax":"100","aria-label":w.value.loading},[L("span",{style:U({width:`${m.value*100}%`})},null,4)],8,Ht)):E("",!0),L("p",Dt,H(l.value==="error"?S.value:l.value==="ready"?w.value.begin:w.value.loading),1),l.value==="ready"?(V(),G("button",{key:1,class:"ff91-begin",type:"button","aria-label":w.value.begin,onClick:o},H(w.value.begin),9,Wt)):E("",!0),l.value==="error"?(V(),G(et,{key:2},[L("button",{class:"ff91-retry",type:"button",onClick:a},H(w.value.retry),1),P[0]||(P[0]=L("a",{class:"ff91-gallery",href:"https://www.ff.com/us/ff-91",target:"_blank",rel:"noopener noreferrer"},"GO TO FF 91 GALLERY",-1))],64)):E("",!0)],2),i.showControls&&l.value==="running"?(V(),G("div",jt,[(V(!0),G(et,null,Et(w.value.hints,(x,O)=>(V(),G("div",{key:O,class:"ff91-hint"},[L("div",{class:"ff91-hint-icon",style:U({backgroundImage:`url('${T.value}textures/icoCtrls.png')`,backgroundPosition:`${O*50}% 50%`})},null,4),L("span",null,H(x),1)]))),128))])):E("",!0),c.value.visible?(V(),G("svg",{key:1,class:"ff91-joystick",style:U({left:`${c.value.x}px`,top:`${c.value.y}px`}),width:"120",height:"120",viewBox:"0 0 120 120","aria-hidden":"true"},[P[2]||(P[2]=L("circle",{cx:"60",cy:"60",r:"42",class:"outer"},null,-1)),P[3]||(P[3]=L("path",{d:"M49 11 60 2 71 11 M11 49 2 60 11 71 M71 107 60 118 49 107 M107 71 118 60 107 49"},null,-1)),L("circle",{cx:60+c.value.dx,cy:60+c.value.dy,r:"30",class:"inner"},null,8,Ut)],4)):E("",!0)],8,Ot))}},ie=nt(Xt,[["__scopeId","data-v-61fc5e62"]]);export{ot as CamControl,q as CarProps,ie as FF91Drive,Rt as Grid,Vt as bindInput};
