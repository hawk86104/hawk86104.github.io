import{importShared as a}from"./3d-tiles-renderer.DZNovkLO1767148983502.js";import{Fs as z,_l as T,ol as Y,Kk as q}from"./index.DTe2qqjO1767148983502.js";import{Pane as U}from"./tweakpane.BQRZXf8M1767148983502.js";import{useTexture as K}from"./customShaderMaterial.vue_vue_type_script_setup_true_lang.B7dQ_CiZ1767148983502.js";import"./index.vue_vue_type_script_setup_true_lang.CjsHShHS1767148983502.js";import{lodashExports as X}from"./lodash.BCH_m8QU1767148983502.js";var L=`attribute vec3 position;
varying vec2 coord;

void main() {
  coord = position.xy * 0.5 + 0.5;

  gl_Position = vec4(position.xyz, 1.0);
}`,Z=`precision highp float;
precision highp int;

const float PI = 3.141592653589793;
uniform sampler2D texture;
uniform vec2 center;
uniform float radius;
uniform float strength;
varying vec2 coord;

void main() {
  
  vec4 info = texture2D(texture, coord);

  /* Add the drop to the height */
  float drop = max(0.0, 1.0 - length(center * 0.5 + 0.5 - coord) / radius);
  drop = 0.5 - cos(drop * PI) * 0.5;
  info.r += drop * strength;

  gl_FragColor = info;
}`,J=`precision highp float;
precision highp int;

uniform sampler2D texture;
uniform vec2 delta;
varying vec2 coord;

void main() {
  
  vec4 info = texture2D(texture, coord);

  /* update the normal */
  vec3 dx = vec3(delta.x, texture2D(texture, vec2(coord.x + delta.x, coord.y)).r - info.r, 0.0);
  vec3 dy = vec3(0.0, texture2D(texture, vec2(coord.x, coord.y + delta.y)).r - info.r, delta.y);
  info.ba = normalize(cross(dy, dx)).xz;

  gl_FragColor = info;
}`,Q=`precision highp float;
precision highp int;

uniform sampler2D texture;
uniform vec2 delta;
varying vec2 coord;

void main() {
  
  vec4 info = texture2D(texture, coord);

  /* calculate average neighbor height */
  vec2 dx = vec2(delta.x, 0.0);
  vec2 dy = vec2(0.0, delta.y);
  float average = (
    texture2D(texture, coord - dx).r +
    texture2D(texture, coord - dy).r +
    texture2D(texture, coord + dx).r +
    texture2D(texture, coord + dy).r
  ) * 0.25;

  /* change the velocity to move toward the average */
  info.g += (average - info.r) * 2.0;

  /* attenuate the velocity a little so waves do not last forever */
  info.g *= 0.995;

  /* move the vertex along the velocity */
  info.r += info.g;

  gl_FragColor = info;
}`,ee=`precision highp float;
precision highp int;

varying vec3 oldPos;
varying vec3 newPos;
varying vec3 ray;

const float IOR_AIR = 1.0;
const float IOR_WATER = 1.333;

const vec3 abovewaterColor = vec3(0.25, 1.0, 1.25);
const vec3 underwaterColor = vec3(0.4, 0.9, 1.0);

const float poolHeight = 1.0;

uniform vec3 light;
uniform sampler2D tiles;
uniform sampler2D causticTex;
uniform sampler2D water;

vec2 intersectCube(vec3 origin, vec3 ray, vec3 cubeMin, vec3 cubeMax) {
  vec3 tMin = (cubeMin - origin) / ray;
  vec3 tMax = (cubeMax - origin) / ray;
  vec3 t1 = min(tMin, tMax);
  vec3 t2 = max(tMin, tMax);
  float tNear = max(max(t1.x, t1.y), t1.z);
  float tFar = min(min(t2.x, t2.y), t2.z);
  return vec2(tNear, tFar);
}

vec3 getWallColor(vec3 point) {
  float scale = 0.5;

  vec3 wallColor;
  vec3 normal;
  if (abs(point.x) > 0.999) {
    wallColor = texture2D(tiles, point.yz * 0.5 + vec2(1.0, 0.5)).rgb;
    normal = vec3(-point.x, 0.0, 0.0);
  } else if (abs(point.z) > 0.999) {
    wallColor = texture2D(tiles, point.yx * 0.5 + vec2(1.0, 0.5)).rgb;
    normal = vec3(0.0, 0.0, -point.z);
  } else {
    wallColor = texture2D(tiles, point.xz * 0.5 + 0.5).rgb;
    normal = vec3(0.0, 1.0, 0.0);
  }

  scale /= length(point); 

  /* caustics */
  vec3 refractedLight = -refract(-light, vec3(0.0, 1.0, 0.0), IOR_AIR / IOR_WATER);
  float diffuse = max(0.0, dot(refractedLight, normal));
  vec4 info = texture2D(water, point.xz * 0.5 + 0.5);
  if (point.y < info.r) {
    vec4 caustic = texture2D(causticTex, 0.75 * (point.xz - point.y * refractedLight.xz / refractedLight.y) * 0.5 + 0.5);
    scale += diffuse * caustic.r * 2.0 * caustic.g;
  } else {
    /* shadow for the rim of the pool */
    vec2 t = intersectCube(point, refractedLight, vec3(-1.0, -poolHeight, -1.0), vec3(1.0, 2.0, 1.0));
    diffuse *= 1.0 / (1.0 + exp(-200.0 / (1.0 + 10.0 * (t.y - t.x)) * (point.y + refractedLight.y * t.y - 2.0 / 12.0)));

    scale += diffuse * 0.5;
  }

  return wallColor * scale;
}

vec3 project(vec3 origin, vec3 ray, vec3 refractedLight) {
  vec2 tcube = intersectCube(origin, ray, vec3(-1.0, -poolHeight, -1.0), vec3(1.0, 2.0, 1.0));
  origin += ray * tcube.y;
  float tplane = (-origin.y - 1.0) / refractedLight.y;

  return origin + refractedLight * tplane;
}

void main() {
  vec4 info = texture2D(water, position.xy * 0.5 + 0.5);
  info.ba *= 0.5;
  vec3 normal = vec3(info.b, sqrt(1.0 - dot(info.ba, info.ba)), info.a);

  /* project the vertices along the refracted vertex ray */
  vec3 refractedLight = refract(-light, vec3(0.0, 1.0, 0.0), IOR_AIR / IOR_WATER);
  ray = refract(-light, normal, IOR_AIR / IOR_WATER);
  oldPos = project(position.xzy, refractedLight, refractedLight);
  newPos = project(position.xzy + vec3(0.0, info.r, 0.0), ray, refractedLight);

  gl_Position = vec4(0.75 * (newPos.xz + refractedLight.xz / refractedLight.y), 0.0, 1.0);
}`,te=`precision highp float;
precision highp int;

const float IOR_AIR = 1.0;
const float IOR_WATER = 1.333;

const vec3 abovewaterColor = vec3(0.25, 1.0, 1.25);
const vec3 underwaterColor = vec3(0.4, 0.9, 1.0);

const float poolHeight = 1.0;

uniform vec3 light;
uniform sampler2D tiles;
uniform sampler2D causticTex;
uniform sampler2D water;

vec2 intersectCube(vec3 origin, vec3 ray, vec3 cubeMin, vec3 cubeMax) {
  vec3 tMin = (cubeMin - origin) / ray;
  vec3 tMax = (cubeMax - origin) / ray;
  vec3 t1 = min(tMin, tMax);
  vec3 t2 = max(tMin, tMax);
  float tNear = max(max(t1.x, t1.y), t1.z);
  float tFar = min(min(t2.x, t2.y), t2.z);
  return vec2(tNear, tFar);
}

vec3 getWallColor(vec3 point) {
  float scale = 0.5;

  vec3 wallColor;
  vec3 normal;
  if (abs(point.x) > 0.999) {
    wallColor = texture2D(tiles, point.yz * 0.5 + vec2(1.0, 0.5)).rgb;
    normal = vec3(-point.x, 0.0, 0.0);
  } else if (abs(point.z) > 0.999) {
    wallColor = texture2D(tiles, point.yx * 0.5 + vec2(1.0, 0.5)).rgb;
    normal = vec3(0.0, 0.0, -point.z);
  } else {
    wallColor = texture2D(tiles, point.xz * 0.5 + 0.5).rgb;
    normal = vec3(0.0, 1.0, 0.0);
  }

  scale /= length(point); 

  /* caustics */
  vec3 refractedLight = -refract(-light, vec3(0.0, 1.0, 0.0), IOR_AIR / IOR_WATER);
  float diffuse = max(0.0, dot(refractedLight, normal));
  vec4 info = texture2D(water, point.xz * 0.5 + 0.5);
  if (point.y < info.r) {
    vec4 caustic = texture2D(causticTex, 0.75 * (point.xz - point.y * refractedLight.xz / refractedLight.y) * 0.5 + 0.5);
    scale += diffuse * caustic.r * 2.0 * caustic.g;
  } else {
    /* shadow for the rim of the pool */
    vec2 t = intersectCube(point, refractedLight, vec3(-1.0, -poolHeight, -1.0), vec3(1.0, 2.0, 1.0));
    diffuse *= 1.0 / (1.0 + exp(-200.0 / (1.0 + 10.0 * (t.y - t.x)) * (point.y + refractedLight.y * t.y - 2.0 / 12.0)));

    scale += diffuse * 0.5;
  }

  return wallColor * scale;
}

varying vec3 oldPos;
varying vec3 newPos;
varying vec3 ray;

void main() {
  
  float oldArea = length(dFdx(oldPos)) * length(dFdy(oldPos));
  float newArea = length(dFdx(newPos)) * length(dFdy(newPos));
  gl_FragColor = vec4(oldArea / newArea * 0.2, 1.0, 0.0, 0.0);

  vec3 refractedLight = refract(-light, vec3(0.0, 1.0, 0.0), IOR_AIR / IOR_WATER);

  /* shadow for the rim of the pool */
  vec2 t = intersectCube(newPos, -refractedLight, vec3(-1.0, -poolHeight, -1.0), vec3(1.0, 2.0, 1.0));
  gl_FragColor.r *= 1.0 / (1.0 + exp(-200.0 / (1.0 + 10.0 * (t.y - t.x)) * (newPos.y - refractedLight.y * t.y - 2.0 / 12.0)));
}`,ne=`uniform mat4 projectionMatrix;
uniform mat4 modelViewMatrix;
uniform sampler2D water;

attribute vec3 position;

varying vec3 eye;
varying vec3 pos;

void main() {
  vec4 info = texture2D(water, position.xy * 0.5 + 0.5);
  pos = position.xzy;
  pos.y += info.r;

  vec3 axis_x = vec3(modelViewMatrix[0].x, modelViewMatrix[0].y, modelViewMatrix[0].z);
  vec3 axis_y = vec3(modelViewMatrix[1].x, modelViewMatrix[1].y, modelViewMatrix[1].z);
  vec3 axis_z = vec3(modelViewMatrix[2].x, modelViewMatrix[2].y, modelViewMatrix[2].z);
  vec3 offset = vec3(modelViewMatrix[3].x, modelViewMatrix[3].y, modelViewMatrix[3].z);

  eye = vec3(dot(-offset, axis_x), dot(-offset, axis_y), dot(-offset, axis_z));

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}`,re=`precision highp float;
precision highp int;

const float IOR_AIR = 1.0;
const float IOR_WATER = 1.333;

const vec3 abovewaterColor = vec3(0.25, 1.0, 1.25);
const vec3 underwaterColor = vec3(0.4, 0.9, 1.0);

const float poolHeight = 1.0;

uniform vec3 light;
uniform sampler2D tiles;
uniform sampler2D causticTex;
uniform sampler2D water;

vec2 intersectCube(vec3 origin, vec3 ray, vec3 cubeMin, vec3 cubeMax) {
  vec3 tMin = (cubeMin - origin) / ray;
  vec3 tMax = (cubeMax - origin) / ray;
  vec3 t1 = min(tMin, tMax);
  vec3 t2 = max(tMin, tMax);
  float tNear = max(max(t1.x, t1.y), t1.z);
  float tFar = min(min(t2.x, t2.y), t2.z);
  return vec2(tNear, tFar);
}

vec3 getWallColor(vec3 point) {
  float scale = 0.5;

  vec3 wallColor;
  vec3 normal;
  if (abs(point.x) > 0.999) {
    wallColor = texture2D(tiles, point.yz * 0.5 + vec2(1.0, 0.5)).rgb;
    normal = vec3(-point.x, 0.0, 0.0);
  } else if (abs(point.z) > 0.999) {
    wallColor = texture2D(tiles, point.yx * 0.5 + vec2(1.0, 0.5)).rgb;
    normal = vec3(0.0, 0.0, -point.z);
  } else {
    wallColor = texture2D(tiles, point.xz * 0.5 + 0.5).rgb;
    normal = vec3(0.0, 1.0, 0.0);
  }

  scale /= length(point); 

  /* caustics */
  vec3 refractedLight = -refract(-light, vec3(0.0, 1.0, 0.0), IOR_AIR / IOR_WATER);
  float diffuse = max(0.0, dot(refractedLight, normal));
  vec4 info = texture2D(water, point.xz * 0.5 + 0.5);
  if (point.y < info.r) {
    vec4 caustic = texture2D(causticTex, 0.75 * (point.xz - point.y * refractedLight.xz / refractedLight.y) * 0.5 + 0.5);
    scale += diffuse * caustic.r * 2.0 * caustic.g;
  } else {
    /* shadow for the rim of the pool */
    vec2 t = intersectCube(point, refractedLight, vec3(-1.0, -poolHeight, -1.0), vec3(1.0, 2.0, 1.0));
    diffuse *= 1.0 / (1.0 + exp(-200.0 / (1.0 + 10.0 * (t.y - t.x)) * (point.y + refractedLight.y * t.y - 2.0 / 12.0)));

    scale += diffuse * 0.5;
  }

  return wallColor * scale;
}

uniform float underwater;
uniform samplerCube sky;

varying vec3 eye;
varying vec3 pos;

vec3 getSurfaceRayColor(vec3 origin, vec3 ray, vec3 waterColor) {
  vec3 color;

  if (ray.y < 0.0) {
    vec2 t = intersectCube(origin, ray, vec3(-1.0, -poolHeight, -1.0), vec3(1.0, 2.0, 1.0));
    color = getWallColor(origin + ray * t.y);
  } else {
    vec2 t = intersectCube(origin, ray, vec3(-1.0, -poolHeight, -1.0), vec3(1.0, 2.0, 1.0));
    vec3 hit = origin + ray * t.y;
    if (hit.y < 7.0 / 12.0) {
      color = getWallColor(hit);
    } else {
      color = textureCube(sky, ray).rgb;
      color += 0.01 * vec3(pow(max(0.0, dot(light, ray)), 20.0)) * vec3(10.0, 8.0, 6.0);
    }
  }

  if (ray.y < 0.0) color *= waterColor;

  return color;
}

void main() {
  vec2 coord = pos.xz * 0.5 + 0.5;
  vec4 info = texture2D(water, coord);

  
  for (int i = 0; i < 5; i++) {
    coord += info.ba * 0.005;
    info = texture2D(water, coord);
  }

  vec3 normal = vec3(info.b, sqrt(1.0 - dot(info.ba, info.ba)), info.a);
  vec3 incomingRay = normalize(pos - eye);

  if (underwater == 1.) {
    normal = -normal;
    vec3 reflectedRay = reflect(incomingRay, normal);
    vec3 refractedRay = refract(incomingRay, normal, IOR_WATER / IOR_AIR);
    float fresnel = mix(0.5, 1.0, pow(1.0 - dot(normal, -incomingRay), 3.0));

    vec3 reflectedColor = getSurfaceRayColor(pos, reflectedRay, underwaterColor);
    vec3 refractedColor = getSurfaceRayColor(pos, refractedRay, vec3(1.0)) * vec3(0.8, 1.0, 1.1);

    gl_FragColor = vec4(mix(reflectedColor, refractedColor, (1.0 - fresnel) * length(refractedRay)), 1.0);
  } else {
    vec3 reflectedRay = reflect(incomingRay, normal);
    vec3 refractedRay = refract(incomingRay, normal, IOR_AIR / IOR_WATER);
    float fresnel = mix(0.25, 1.0, pow(1.0 - dot(normal, -incomingRay), 3.0));

    vec3 reflectedColor = getSurfaceRayColor(pos, reflectedRay, abovewaterColor);
    vec3 refractedColor = getSurfaceRayColor(pos, refractedRay, abovewaterColor);

    gl_FragColor = vec4(mix(refractedColor, reflectedColor, fresnel), 1.0);
  }
}`,oe=`const float IOR_AIR = 1.0;
const float IOR_WATER = 1.333;

const vec3 abovewaterColor = vec3(0.25, 1.0, 1.25);
const vec3 underwaterColor = vec3(0.4, 0.9, 1.0);

const float poolHeight = 1.0;

uniform vec3 light;
uniform sampler2D tiles;
uniform sampler2D causticTex;
uniform sampler2D water;

vec2 intersectCube(vec3 origin, vec3 ray, vec3 cubeMin, vec3 cubeMax) {
  vec3 tMin = (cubeMin - origin) / ray;
  vec3 tMax = (cubeMax - origin) / ray;
  vec3 t1 = min(tMin, tMax);
  vec3 t2 = max(tMin, tMax);
  float tNear = max(max(t1.x, t1.y), t1.z);
  float tFar = min(min(t2.x, t2.y), t2.z);
  return vec2(tNear, tFar);
}

vec3 getWallColor(vec3 point) {
  float scale = 0.5;

  vec3 wallColor;
  vec3 normal;
  if (abs(point.x) > 0.999) {
    wallColor = texture2D(tiles, point.yz * 0.5 + vec2(1.0, 0.5)).rgb;
    normal = vec3(-point.x, 0.0, 0.0);
  } else if (abs(point.z) > 0.999) {
    wallColor = texture2D(tiles, point.yx * 0.5 + vec2(1.0, 0.5)).rgb;
    normal = vec3(0.0, 0.0, -point.z);
  } else {
    wallColor = texture2D(tiles, point.xz * 0.5 + 0.5).rgb;
    normal = vec3(0.0, 1.0, 0.0);
  }

  scale /= length(point); 

  /* caustics */
  vec3 refractedLight = -refract(-light, vec3(0.0, 1.0, 0.0), IOR_AIR / IOR_WATER);
  float diffuse = max(0.0, dot(refractedLight, normal));
  vec4 info = texture2D(water, point.xz * 0.5 + 0.5);
  if (point.y < info.r) {
    vec4 caustic = texture2D(causticTex, 0.75 * (point.xz - point.y * refractedLight.xz / refractedLight.y) * 0.5 + 0.5);
    scale += diffuse * caustic.r * 2.0 * caustic.g;
  } else {
    /* shadow for the rim of the pool */
    vec2 t = intersectCube(point, refractedLight, vec3(-1.0, -poolHeight, -1.0), vec3(1.0, 2.0, 1.0));
    diffuse *= 1.0 / (1.0 + exp(-200.0 / (1.0 + 10.0 * (t.y - t.x)) * (point.y + refractedLight.y * t.y - 2.0 / 12.0)));

    scale += diffuse * 0.5;
  }

  return wallColor * scale;
}

uniform mat4 projectionMatrix;
uniform mat4 modelViewMatrix;

attribute vec3 position;

varying vec3 pos;

void main() {
  pos = position.xyz;
  pos.y = ((1.0 - pos.y) * (7.0 / 12.0) - 1.0) * poolHeight;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}`,ae=`precision highp float;
precision highp int;

const float IOR_AIR = 1.0;
const float IOR_WATER = 1.333;

const vec3 abovewaterColor = vec3(0.25, 1.0, 1.25);
const vec3 underwaterColor = vec3(0.4, 0.9, 1.0);

const float poolHeight = 1.0;

uniform vec3 light;
uniform sampler2D tiles;
uniform sampler2D causticTex;
uniform sampler2D water;

vec2 intersectCube(vec3 origin, vec3 ray, vec3 cubeMin, vec3 cubeMax) {
  vec3 tMin = (cubeMin - origin) / ray;
  vec3 tMax = (cubeMax - origin) / ray;
  vec3 t1 = min(tMin, tMax);
  vec3 t2 = max(tMin, tMax);
  float tNear = max(max(t1.x, t1.y), t1.z);
  float tFar = min(min(t2.x, t2.y), t2.z);
  return vec2(tNear, tFar);
}

vec3 getWallColor(vec3 point) {
  float scale = 0.5;

  vec3 wallColor;
  vec3 normal;
  if (abs(point.x) > 0.999) {
    wallColor = texture2D(tiles, point.yz * 0.5 + vec2(1.0, 0.5)).rgb;
    normal = vec3(-point.x, 0.0, 0.0);
  } else if (abs(point.z) > 0.999) {
    wallColor = texture2D(tiles, point.yx * 0.5 + vec2(1.0, 0.5)).rgb;
    normal = vec3(0.0, 0.0, -point.z);
  } else {
    wallColor = texture2D(tiles, point.xz * 0.5 + 0.5).rgb;
    normal = vec3(0.0, 1.0, 0.0);
  }

  scale /= length(point); 

  /* caustics */
  vec3 refractedLight = -refract(-light, vec3(0.0, 1.0, 0.0), IOR_AIR / IOR_WATER);
  float diffuse = max(0.0, dot(refractedLight, normal));
  vec4 info = texture2D(water, point.xz * 0.5 + 0.5);
  if (point.y < info.r) {
    vec4 caustic = texture2D(causticTex, 0.75 * (point.xz - point.y * refractedLight.xz / refractedLight.y) * 0.5 + 0.5);
    scale += diffuse * caustic.r * 2.0 * caustic.g;
  } else {
    /* shadow for the rim of the pool */
    vec2 t = intersectCube(point, refractedLight, vec3(-1.0, -poolHeight, -1.0), vec3(1.0, 2.0, 1.0));
    diffuse *= 1.0 / (1.0 + exp(-200.0 / (1.0 + 10.0 * (t.y - t.x)) * (point.y + refractedLight.y * t.y - 2.0 / 12.0)));

    scale += diffuse * 0.5;
  }

  return wallColor * scale;
}

varying vec3 pos;

void main() {
  gl_FragColor = vec4(getWallColor(pos), 1.0);

  vec4 info = texture2D(water, pos.xz * 0.5 + 0.5);

  if (pos.y < info.r) {
    gl_FragColor.rgb *= underwaterColor * 1.2;
  }
}`;const{defineComponent:ie}=await a("vue"),w=await a("three"),ce=ie({__name:"pool",props:{waterTexture:{},causticsTexture:{},tiles:{},light:{}},setup(x){const n=x,s=new w.BufferGeometry,t=new Float32Array([-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,1,-1,1,-1,1,1,1,1,-1,-1,-1,1,-1,-1,-1,-1,1,1,-1,1,-1,1,-1,-1,1,1,1,1,-1,1,1,1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,-1,-1,-1,1,1,-1,1,-1,1,1,1,1,1]),c=new Uint32Array([0,1,2,2,1,3,4,5,6,6,5,7,12,13,14,14,13,15,16,17,18,18,17,19,20,21,22,22,21,23]);s.setAttribute("position",new w.BufferAttribute(t,3)),s.setIndex(new w.BufferAttribute(c,1));const d=new w.RawShaderMaterial({uniforms:{light:{value:n.light},tiles:{value:n.tiles},water:{value:null},causticTex:{value:null}},vertexShader:oe,fragmentShader:ae,side:w.FrontSide}),i=new w.Mesh(s,d),{renderer:f,camera:r}=z(),v=(g,l)=>{d.uniforms.water.value=g,d.uniforms.causticTex.value=l,f.render(i,r.value)},{onBeforeRender:m}=T();return m(()=>{v(n.waterTexture,n.causticsTexture)},-1),(g,l)=>null}}),{withAsyncContext:le,defineComponent:se}=await a("vue"),{unref:ue,openBlock:fe,createBlock:ve}=await a("vue"),{ref:de}=await a("vue"),_=await a("three"),me=se({__name:"water",props:{waterTexture:{},causticsTexture:{},geometry:{},light:{}},async setup(x){let n,s;const t=x,c=t.geometry,i=new _.CubeTextureLoader().setPath("https://opensource.cdn.icegl.cn/images/skyBox/6jpg/").load(["pos-x.jpg","neg-x.jpg","pos-y.jpg","neg-y.jpg","pos-z.jpg","neg-z.jpg"]),f=([n,s]=le(()=>K("./plugins/water/images/tiles.jpg")),n=await n,s(),n),r=new _.RawShaderMaterial({uniforms:{light:{value:t.light},tiles:{value:f},sky:{value:i},water:{value:null},causticTex:{value:null},underwater:{value:!1}},vertexShader:ne,fragmentShader:re}),v=new _.Mesh(c,r),m=de(null),g=new _.Color("white"),{renderer:l,camera:h}=z(),{onRender:D}=T();return D(()=>{l.setRenderTarget(null),l.setClearColor(g,1),l.clear(),r.uniforms.water.value=t.waterTexture,r.uniforms.causticTex.value=t.causticsTexture,r.side=_.FrontSide,r.uniforms.underwater.value=!0,l.render(v,h.value),r.side=_.BackSide,r.uniforms.underwater.value=!1,l.render(v,h.value)}),(R,p)=>(fe(),ve(ce,{tiles:ue(f),light:R.light,waterTexture:R.waterTexture,causticsTexture:R.causticsTexture,ref_key:"pooRef",ref:m},null,8,["tiles","light","waterTexture","causticsTexture"]))}}),{defineComponent:pe}=await a("vue"),{unref:P,createVNode:xe,Suspense:ge,withCtx:he,openBlock:ye,createBlock:we}=await a("vue"),C=await a("three"),_e=pe({__name:"caustics",props:{lightFrontGeometry:{},waterTexture:{},light:{}},setup(x){const n=x,s=new C.OrthographicCamera(0,1,1,0,0,2e3),t=new C.PlaneGeometry(2,2,200,200),c=new C.WebGLRenderTarget(1024,1024),d=new C.ShaderMaterial({uniforms:{light:{value:n.light},water:{value:null}},vertexShader:ee,fragmentShader:te}),i=new C.Mesh(t,d),f=new C.Color("black"),{renderer:r}=z(),{onBeforeRender:v}=T();return v(()=>{i.material.uniforms.water.value=n.waterTexture,r.setRenderTarget(c),r.setClearColor(f,0),r.clear(),r.render(i,s)}),(m,g)=>(ye(),we(ge,null,{default:he(()=>[xe(me,{waterTexture:m.waterTexture,causticsTexture:P(c).texture,light:m.light,geometry:P(t)},null,8,["waterTexture","causticsTexture","light","geometry"])]),_:1}))}}),{defineComponent:Ce}=await a("vue"),{unref:$,openBlock:Re,createBlock:be}=await a("vue"),o=await a("three"),{ref:Me}=await a("vue"),ze=Ce({__name:"waterSimulation",props:{light:{}},setup(x,{expose:n}){const s=new o.OrthographicCamera(0,1,1,0,0,2e3),t=new o.PlaneGeometry(2,2),c=new o.WebGLRenderTarget(256,256,{type:o.FloatType}),d=new o.WebGLRenderTarget(256,256,{type:o.FloatType}),i=new o.RawShaderMaterial({uniforms:{center:{value:[0,0]},radius:{value:0},strength:{value:0},texture:{value:null}},vertexShader:L,fragmentShader:Z}),f=new o.RawShaderMaterial({uniforms:{delta:{value:[1/256,1/256]},texture:{value:null}},vertexShader:L,fragmentShader:J}),r=new o.RawShaderMaterial({uniforms:{delta:{value:[1/256,1/256]},texture:{value:null}},vertexShader:L,fragmentShader:Q}),v=new o.Mesh(t,i),m=new o.Mesh(t,f),g=new o.Mesh(t,r);let l=c;const h=(e,u)=>{const M=l,y=l===c?d:c;u.material.uniforms.texture.value=M.texture,e.setRenderTarget(y),e.render(u,s),l=y},D=e=>{h(e,g)},R=e=>{h(e,m)},{renderer:p,camera:V}=z(),A=Me(new o.Raycaster);p.autoClear=!1;const{onBeforeRender:H}=T();H(()=>{D(p),R(p)});const E=(e,u,M,y)=>{v.material.uniforms.center.value=[e,u],v.material.uniforms.radius.value=M,v.material.uniforms.strength.value=y,h(p,v)},I=new o.Vector2,S=new o.PlaneGeometry(2,2),b=S.attributes.position;for(let e=0;e<b.count;e++){const u=-b.getY(e);b.setY(e,0),b.setZ(e,u)}b.needsUpdate=!0;const j=new o.Mesh(S),F=e=>{const u=p.domElement.getBoundingClientRect(),M=u.width,y=u.height;I.x=(e.clientX-u.left)*2/M-1,I.y=-(e.clientY-u.top)*2/y+1,A.value.setFromCamera(I,V.value);const G=A.value.intersectObject(j);for(let O of G)E(O.point.x,O.point.z,.03,.04)},N={handleEvent:F};return n({addDrop:E,mouseEvent:e=>{e?p.domElement.addEventListener("mousemove",X.throttle(F,30)):p.domElement.removeEventListener("mousemove",N)}}),(e,u)=>(Re(),be(_e,{lightFrontGeometry:$(t),waterTexture:$(l).texture,light:e.light},null,8,["lightFrontGeometry","waterTexture","light"]))}}),{defineComponent:Te}=await a("vue"),{createElementVNode:De,unref:B,createVNode:k,normalizeProps:Ie,guardReactiveProps:Le,withCtx:Ae,openBlock:Ee,createBlock:Se}=await a("vue"),{reactive:Fe,ref:W}=await a("vue"),He=Te({__name:"realWater",setup(x){const n=Fe({alpha:!0,antialias:!0,windowSize:!0,clearAlpha:0,renderMode:"manual"}),s=[.7559289460184544,.7559289460184544,-.3779644730092272],t=W(null),c=new U;c.addButton({label:"点击按钮",title:"随机增加波纹"}).on("click",()=>{for(var i=0;i<10;i++)t.value.addDrop(Math.random()*2-1,Math.random()*2-1,.03,i&1?.02:-.02)});const d=W(!1);return c.addBinding(d,"value",{label:"鼠标波纹"}).on("change",i=>{t.value.mouseEvent(i.value)}),(i,f)=>(Ee(),Se(B(Y),Ie(Le(n)),{default:Ae(()=>[f[0]||(f[0]=De("TresPerspectiveCamera",{position:[.426,.677,-2.095],fov:75,near:.01,far:1e3},null,-1)),k(B(q)),k(ze,{light:s,ref_key:"waterSimulationRef",ref:t},null,512)]),_:1},16))}});export{He as default};
