var i=`varying vec2 vUv;
void main(){
	vUv=uv;
	gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);
}`;export{i as argestCircle_default};
