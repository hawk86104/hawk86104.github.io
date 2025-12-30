import { importShared, Fs, _l, ol, Kk } from './index.BxB45aCK1767105581793.js';
import { Pane } from './tweakpane.Cvt5w0bb1767105581793.js';
import { useTexture } from './customShaderMaterial.vue_vue_type_script_setup_true_lang.rDMIDGqx1767105581793.js';
import './index.vue_vue_type_script_setup_true_lang.D7-hpzmy1767105581793.js';
import { lodashExports } from './lodash.ClidmjoF1767105581793.js';

var vertex_default$3="attribute vec3 position;\nvarying vec2 coord;\n\nvoid main() {\n  coord = position.xy * 0.5 + 0.5;\n\n  gl_Position = vec4(position.xyz, 1.0);\n}";

var drop_fragment_default="precision highp float;\nprecision highp int;\n\nconst float PI = 3.141592653589793;\nuniform sampler2D texture;\nuniform vec2 center;\nuniform float radius;\nuniform float strength;\nvarying vec2 coord;\n\nvoid main() {\n  \n  vec4 info = texture2D(texture, coord);\n\n  /* Add the drop to the height */\n  float drop = max(0.0, 1.0 - length(center * 0.5 + 0.5 - coord) / radius);\n  drop = 0.5 - cos(drop * PI) * 0.5;\n  info.r += drop * strength;\n\n  gl_FragColor = info;\n}";

var normal_fragment_default="precision highp float;\nprecision highp int;\n\nuniform sampler2D texture;\nuniform vec2 delta;\nvarying vec2 coord;\n\nvoid main() {\n  \n  vec4 info = texture2D(texture, coord);\n\n  /* update the normal */\n  vec3 dx = vec3(delta.x, texture2D(texture, vec2(coord.x + delta.x, coord.y)).r - info.r, 0.0);\n  vec3 dy = vec3(0.0, texture2D(texture, vec2(coord.x, coord.y + delta.y)).r - info.r, delta.y);\n  info.ba = normalize(cross(dy, dx)).xz;\n\n  gl_FragColor = info;\n}";

var update_fragment_default="precision highp float;\nprecision highp int;\n\nuniform sampler2D texture;\nuniform vec2 delta;\nvarying vec2 coord;\n\nvoid main() {\n  \n  vec4 info = texture2D(texture, coord);\n\n  /* calculate average neighbor height */\n  vec2 dx = vec2(delta.x, 0.0);\n  vec2 dy = vec2(0.0, delta.y);\n  float average = (\n    texture2D(texture, coord - dx).r +\n    texture2D(texture, coord - dy).r +\n    texture2D(texture, coord + dx).r +\n    texture2D(texture, coord + dy).r\n  ) * 0.25;\n\n  /* change the velocity to move toward the average */\n  info.g += (average - info.r) * 2.0;\n\n  /* attenuate the velocity a little so waves do not last forever */\n  info.g *= 0.995;\n\n  /* move the vertex along the velocity */\n  info.r += info.g;\n\n  gl_FragColor = info;\n}";

var vertex_default$2="precision highp float;\nprecision highp int;\n\nvarying vec3 oldPos;\nvarying vec3 newPos;\nvarying vec3 ray;\n\nconst float IOR_AIR = 1.0;\nconst float IOR_WATER = 1.333;\n\nconst vec3 abovewaterColor = vec3(0.25, 1.0, 1.25);\nconst vec3 underwaterColor = vec3(0.4, 0.9, 1.0);\n\nconst float poolHeight = 1.0;\n\nuniform vec3 light;\nuniform sampler2D tiles;\nuniform sampler2D causticTex;\nuniform sampler2D water;\n\nvec2 intersectCube(vec3 origin, vec3 ray, vec3 cubeMin, vec3 cubeMax) {\n  vec3 tMin = (cubeMin - origin) / ray;\n  vec3 tMax = (cubeMax - origin) / ray;\n  vec3 t1 = min(tMin, tMax);\n  vec3 t2 = max(tMin, tMax);\n  float tNear = max(max(t1.x, t1.y), t1.z);\n  float tFar = min(min(t2.x, t2.y), t2.z);\n  return vec2(tNear, tFar);\n}\n\nvec3 getWallColor(vec3 point) {\n  float scale = 0.5;\n\n  vec3 wallColor;\n  vec3 normal;\n  if (abs(point.x) > 0.999) {\n    wallColor = texture2D(tiles, point.yz * 0.5 + vec2(1.0, 0.5)).rgb;\n    normal = vec3(-point.x, 0.0, 0.0);\n  } else if (abs(point.z) > 0.999) {\n    wallColor = texture2D(tiles, point.yx * 0.5 + vec2(1.0, 0.5)).rgb;\n    normal = vec3(0.0, 0.0, -point.z);\n  } else {\n    wallColor = texture2D(tiles, point.xz * 0.5 + 0.5).rgb;\n    normal = vec3(0.0, 1.0, 0.0);\n  }\n\n  scale /= length(point); \n\n  /* caustics */\n  vec3 refractedLight = -refract(-light, vec3(0.0, 1.0, 0.0), IOR_AIR / IOR_WATER);\n  float diffuse = max(0.0, dot(refractedLight, normal));\n  vec4 info = texture2D(water, point.xz * 0.5 + 0.5);\n  if (point.y < info.r) {\n    vec4 caustic = texture2D(causticTex, 0.75 * (point.xz - point.y * refractedLight.xz / refractedLight.y) * 0.5 + 0.5);\n    scale += diffuse * caustic.r * 2.0 * caustic.g;\n  } else {\n    /* shadow for the rim of the pool */\n    vec2 t = intersectCube(point, refractedLight, vec3(-1.0, -poolHeight, -1.0), vec3(1.0, 2.0, 1.0));\n    diffuse *= 1.0 / (1.0 + exp(-200.0 / (1.0 + 10.0 * (t.y - t.x)) * (point.y + refractedLight.y * t.y - 2.0 / 12.0)));\n\n    scale += diffuse * 0.5;\n  }\n\n  return wallColor * scale;\n}\n\nvec3 project(vec3 origin, vec3 ray, vec3 refractedLight) {\n  vec2 tcube = intersectCube(origin, ray, vec3(-1.0, -poolHeight, -1.0), vec3(1.0, 2.0, 1.0));\n  origin += ray * tcube.y;\n  float tplane = (-origin.y - 1.0) / refractedLight.y;\n\n  return origin + refractedLight * tplane;\n}\n\nvoid main() {\n  vec4 info = texture2D(water, position.xy * 0.5 + 0.5);\n  info.ba *= 0.5;\n  vec3 normal = vec3(info.b, sqrt(1.0 - dot(info.ba, info.ba)), info.a);\n\n  /* project the vertices along the refracted vertex ray */\n  vec3 refractedLight = refract(-light, vec3(0.0, 1.0, 0.0), IOR_AIR / IOR_WATER);\n  ray = refract(-light, normal, IOR_AIR / IOR_WATER);\n  oldPos = project(position.xzy, refractedLight, refractedLight);\n  newPos = project(position.xzy + vec3(0.0, info.r, 0.0), ray, refractedLight);\n\n  gl_Position = vec4(0.75 * (newPos.xz + refractedLight.xz / refractedLight.y), 0.0, 1.0);\n}";

var fragment_default$2="precision highp float;\nprecision highp int;\n\nconst float IOR_AIR = 1.0;\nconst float IOR_WATER = 1.333;\n\nconst vec3 abovewaterColor = vec3(0.25, 1.0, 1.25);\nconst vec3 underwaterColor = vec3(0.4, 0.9, 1.0);\n\nconst float poolHeight = 1.0;\n\nuniform vec3 light;\nuniform sampler2D tiles;\nuniform sampler2D causticTex;\nuniform sampler2D water;\n\nvec2 intersectCube(vec3 origin, vec3 ray, vec3 cubeMin, vec3 cubeMax) {\n  vec3 tMin = (cubeMin - origin) / ray;\n  vec3 tMax = (cubeMax - origin) / ray;\n  vec3 t1 = min(tMin, tMax);\n  vec3 t2 = max(tMin, tMax);\n  float tNear = max(max(t1.x, t1.y), t1.z);\n  float tFar = min(min(t2.x, t2.y), t2.z);\n  return vec2(tNear, tFar);\n}\n\nvec3 getWallColor(vec3 point) {\n  float scale = 0.5;\n\n  vec3 wallColor;\n  vec3 normal;\n  if (abs(point.x) > 0.999) {\n    wallColor = texture2D(tiles, point.yz * 0.5 + vec2(1.0, 0.5)).rgb;\n    normal = vec3(-point.x, 0.0, 0.0);\n  } else if (abs(point.z) > 0.999) {\n    wallColor = texture2D(tiles, point.yx * 0.5 + vec2(1.0, 0.5)).rgb;\n    normal = vec3(0.0, 0.0, -point.z);\n  } else {\n    wallColor = texture2D(tiles, point.xz * 0.5 + 0.5).rgb;\n    normal = vec3(0.0, 1.0, 0.0);\n  }\n\n  scale /= length(point); \n\n  /* caustics */\n  vec3 refractedLight = -refract(-light, vec3(0.0, 1.0, 0.0), IOR_AIR / IOR_WATER);\n  float diffuse = max(0.0, dot(refractedLight, normal));\n  vec4 info = texture2D(water, point.xz * 0.5 + 0.5);\n  if (point.y < info.r) {\n    vec4 caustic = texture2D(causticTex, 0.75 * (point.xz - point.y * refractedLight.xz / refractedLight.y) * 0.5 + 0.5);\n    scale += diffuse * caustic.r * 2.0 * caustic.g;\n  } else {\n    /* shadow for the rim of the pool */\n    vec2 t = intersectCube(point, refractedLight, vec3(-1.0, -poolHeight, -1.0), vec3(1.0, 2.0, 1.0));\n    diffuse *= 1.0 / (1.0 + exp(-200.0 / (1.0 + 10.0 * (t.y - t.x)) * (point.y + refractedLight.y * t.y - 2.0 / 12.0)));\n\n    scale += diffuse * 0.5;\n  }\n\n  return wallColor * scale;\n}\n\nvarying vec3 oldPos;\nvarying vec3 newPos;\nvarying vec3 ray;\n\nvoid main() {\n  \n  float oldArea = length(dFdx(oldPos)) * length(dFdy(oldPos));\n  float newArea = length(dFdx(newPos)) * length(dFdy(newPos));\n  gl_FragColor = vec4(oldArea / newArea * 0.2, 1.0, 0.0, 0.0);\n\n  vec3 refractedLight = refract(-light, vec3(0.0, 1.0, 0.0), IOR_AIR / IOR_WATER);\n\n  /* shadow for the rim of the pool */\n  vec2 t = intersectCube(newPos, -refractedLight, vec3(-1.0, -poolHeight, -1.0), vec3(1.0, 2.0, 1.0));\n  gl_FragColor.r *= 1.0 / (1.0 + exp(-200.0 / (1.0 + 10.0 * (t.y - t.x)) * (newPos.y - refractedLight.y * t.y - 2.0 / 12.0)));\n}";

var vertex_default$1="uniform mat4 projectionMatrix;\nuniform mat4 modelViewMatrix;\nuniform sampler2D water;\n\nattribute vec3 position;\n\nvarying vec3 eye;\nvarying vec3 pos;\n\nvoid main() {\n  vec4 info = texture2D(water, position.xy * 0.5 + 0.5);\n  pos = position.xzy;\n  pos.y += info.r;\n\n  vec3 axis_x = vec3(modelViewMatrix[0].x, modelViewMatrix[0].y, modelViewMatrix[0].z);\n  vec3 axis_y = vec3(modelViewMatrix[1].x, modelViewMatrix[1].y, modelViewMatrix[1].z);\n  vec3 axis_z = vec3(modelViewMatrix[2].x, modelViewMatrix[2].y, modelViewMatrix[2].z);\n  vec3 offset = vec3(modelViewMatrix[3].x, modelViewMatrix[3].y, modelViewMatrix[3].z);\n\n  eye = vec3(dot(-offset, axis_x), dot(-offset, axis_y), dot(-offset, axis_z));\n\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);\n}";

var fragment_default$1="precision highp float;\nprecision highp int;\n\nconst float IOR_AIR = 1.0;\nconst float IOR_WATER = 1.333;\n\nconst vec3 abovewaterColor = vec3(0.25, 1.0, 1.25);\nconst vec3 underwaterColor = vec3(0.4, 0.9, 1.0);\n\nconst float poolHeight = 1.0;\n\nuniform vec3 light;\nuniform sampler2D tiles;\nuniform sampler2D causticTex;\nuniform sampler2D water;\n\nvec2 intersectCube(vec3 origin, vec3 ray, vec3 cubeMin, vec3 cubeMax) {\n  vec3 tMin = (cubeMin - origin) / ray;\n  vec3 tMax = (cubeMax - origin) / ray;\n  vec3 t1 = min(tMin, tMax);\n  vec3 t2 = max(tMin, tMax);\n  float tNear = max(max(t1.x, t1.y), t1.z);\n  float tFar = min(min(t2.x, t2.y), t2.z);\n  return vec2(tNear, tFar);\n}\n\nvec3 getWallColor(vec3 point) {\n  float scale = 0.5;\n\n  vec3 wallColor;\n  vec3 normal;\n  if (abs(point.x) > 0.999) {\n    wallColor = texture2D(tiles, point.yz * 0.5 + vec2(1.0, 0.5)).rgb;\n    normal = vec3(-point.x, 0.0, 0.0);\n  } else if (abs(point.z) > 0.999) {\n    wallColor = texture2D(tiles, point.yx * 0.5 + vec2(1.0, 0.5)).rgb;\n    normal = vec3(0.0, 0.0, -point.z);\n  } else {\n    wallColor = texture2D(tiles, point.xz * 0.5 + 0.5).rgb;\n    normal = vec3(0.0, 1.0, 0.0);\n  }\n\n  scale /= length(point); \n\n  /* caustics */\n  vec3 refractedLight = -refract(-light, vec3(0.0, 1.0, 0.0), IOR_AIR / IOR_WATER);\n  float diffuse = max(0.0, dot(refractedLight, normal));\n  vec4 info = texture2D(water, point.xz * 0.5 + 0.5);\n  if (point.y < info.r) {\n    vec4 caustic = texture2D(causticTex, 0.75 * (point.xz - point.y * refractedLight.xz / refractedLight.y) * 0.5 + 0.5);\n    scale += diffuse * caustic.r * 2.0 * caustic.g;\n  } else {\n    /* shadow for the rim of the pool */\n    vec2 t = intersectCube(point, refractedLight, vec3(-1.0, -poolHeight, -1.0), vec3(1.0, 2.0, 1.0));\n    diffuse *= 1.0 / (1.0 + exp(-200.0 / (1.0 + 10.0 * (t.y - t.x)) * (point.y + refractedLight.y * t.y - 2.0 / 12.0)));\n\n    scale += diffuse * 0.5;\n  }\n\n  return wallColor * scale;\n}\n\nuniform float underwater;\nuniform samplerCube sky;\n\nvarying vec3 eye;\nvarying vec3 pos;\n\nvec3 getSurfaceRayColor(vec3 origin, vec3 ray, vec3 waterColor) {\n  vec3 color;\n\n  if (ray.y < 0.0) {\n    vec2 t = intersectCube(origin, ray, vec3(-1.0, -poolHeight, -1.0), vec3(1.0, 2.0, 1.0));\n    color = getWallColor(origin + ray * t.y);\n  } else {\n    vec2 t = intersectCube(origin, ray, vec3(-1.0, -poolHeight, -1.0), vec3(1.0, 2.0, 1.0));\n    vec3 hit = origin + ray * t.y;\n    if (hit.y < 7.0 / 12.0) {\n      color = getWallColor(hit);\n    } else {\n      color = textureCube(sky, ray).rgb;\n      color += 0.01 * vec3(pow(max(0.0, dot(light, ray)), 20.0)) * vec3(10.0, 8.0, 6.0);\n    }\n  }\n\n  if (ray.y < 0.0) color *= waterColor;\n\n  return color;\n}\n\nvoid main() {\n  vec2 coord = pos.xz * 0.5 + 0.5;\n  vec4 info = texture2D(water, coord);\n\n  \n  for (int i = 0; i < 5; i++) {\n    coord += info.ba * 0.005;\n    info = texture2D(water, coord);\n  }\n\n  vec3 normal = vec3(info.b, sqrt(1.0 - dot(info.ba, info.ba)), info.a);\n  vec3 incomingRay = normalize(pos - eye);\n\n  if (underwater == 1.) {\n    normal = -normal;\n    vec3 reflectedRay = reflect(incomingRay, normal);\n    vec3 refractedRay = refract(incomingRay, normal, IOR_WATER / IOR_AIR);\n    float fresnel = mix(0.5, 1.0, pow(1.0 - dot(normal, -incomingRay), 3.0));\n\n    vec3 reflectedColor = getSurfaceRayColor(pos, reflectedRay, underwaterColor);\n    vec3 refractedColor = getSurfaceRayColor(pos, refractedRay, vec3(1.0)) * vec3(0.8, 1.0, 1.1);\n\n    gl_FragColor = vec4(mix(reflectedColor, refractedColor, (1.0 - fresnel) * length(refractedRay)), 1.0);\n  } else {\n    vec3 reflectedRay = reflect(incomingRay, normal);\n    vec3 refractedRay = refract(incomingRay, normal, IOR_AIR / IOR_WATER);\n    float fresnel = mix(0.25, 1.0, pow(1.0 - dot(normal, -incomingRay), 3.0));\n\n    vec3 reflectedColor = getSurfaceRayColor(pos, reflectedRay, abovewaterColor);\n    vec3 refractedColor = getSurfaceRayColor(pos, refractedRay, abovewaterColor);\n\n    gl_FragColor = vec4(mix(refractedColor, reflectedColor, fresnel), 1.0);\n  }\n}";

var vertex_default="const float IOR_AIR = 1.0;\nconst float IOR_WATER = 1.333;\n\nconst vec3 abovewaterColor = vec3(0.25, 1.0, 1.25);\nconst vec3 underwaterColor = vec3(0.4, 0.9, 1.0);\n\nconst float poolHeight = 1.0;\n\nuniform vec3 light;\nuniform sampler2D tiles;\nuniform sampler2D causticTex;\nuniform sampler2D water;\n\nvec2 intersectCube(vec3 origin, vec3 ray, vec3 cubeMin, vec3 cubeMax) {\n  vec3 tMin = (cubeMin - origin) / ray;\n  vec3 tMax = (cubeMax - origin) / ray;\n  vec3 t1 = min(tMin, tMax);\n  vec3 t2 = max(tMin, tMax);\n  float tNear = max(max(t1.x, t1.y), t1.z);\n  float tFar = min(min(t2.x, t2.y), t2.z);\n  return vec2(tNear, tFar);\n}\n\nvec3 getWallColor(vec3 point) {\n  float scale = 0.5;\n\n  vec3 wallColor;\n  vec3 normal;\n  if (abs(point.x) > 0.999) {\n    wallColor = texture2D(tiles, point.yz * 0.5 + vec2(1.0, 0.5)).rgb;\n    normal = vec3(-point.x, 0.0, 0.0);\n  } else if (abs(point.z) > 0.999) {\n    wallColor = texture2D(tiles, point.yx * 0.5 + vec2(1.0, 0.5)).rgb;\n    normal = vec3(0.0, 0.0, -point.z);\n  } else {\n    wallColor = texture2D(tiles, point.xz * 0.5 + 0.5).rgb;\n    normal = vec3(0.0, 1.0, 0.0);\n  }\n\n  scale /= length(point); \n\n  /* caustics */\n  vec3 refractedLight = -refract(-light, vec3(0.0, 1.0, 0.0), IOR_AIR / IOR_WATER);\n  float diffuse = max(0.0, dot(refractedLight, normal));\n  vec4 info = texture2D(water, point.xz * 0.5 + 0.5);\n  if (point.y < info.r) {\n    vec4 caustic = texture2D(causticTex, 0.75 * (point.xz - point.y * refractedLight.xz / refractedLight.y) * 0.5 + 0.5);\n    scale += diffuse * caustic.r * 2.0 * caustic.g;\n  } else {\n    /* shadow for the rim of the pool */\n    vec2 t = intersectCube(point, refractedLight, vec3(-1.0, -poolHeight, -1.0), vec3(1.0, 2.0, 1.0));\n    diffuse *= 1.0 / (1.0 + exp(-200.0 / (1.0 + 10.0 * (t.y - t.x)) * (point.y + refractedLight.y * t.y - 2.0 / 12.0)));\n\n    scale += diffuse * 0.5;\n  }\n\n  return wallColor * scale;\n}\n\nuniform mat4 projectionMatrix;\nuniform mat4 modelViewMatrix;\n\nattribute vec3 position;\n\nvarying vec3 pos;\n\nvoid main() {\n  pos = position.xyz;\n  pos.y = ((1.0 - pos.y) * (7.0 / 12.0) - 1.0) * poolHeight;\n\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);\n}";

var fragment_default="precision highp float;\nprecision highp int;\n\nconst float IOR_AIR = 1.0;\nconst float IOR_WATER = 1.333;\n\nconst vec3 abovewaterColor = vec3(0.25, 1.0, 1.25);\nconst vec3 underwaterColor = vec3(0.4, 0.9, 1.0);\n\nconst float poolHeight = 1.0;\n\nuniform vec3 light;\nuniform sampler2D tiles;\nuniform sampler2D causticTex;\nuniform sampler2D water;\n\nvec2 intersectCube(vec3 origin, vec3 ray, vec3 cubeMin, vec3 cubeMax) {\n  vec3 tMin = (cubeMin - origin) / ray;\n  vec3 tMax = (cubeMax - origin) / ray;\n  vec3 t1 = min(tMin, tMax);\n  vec3 t2 = max(tMin, tMax);\n  float tNear = max(max(t1.x, t1.y), t1.z);\n  float tFar = min(min(t2.x, t2.y), t2.z);\n  return vec2(tNear, tFar);\n}\n\nvec3 getWallColor(vec3 point) {\n  float scale = 0.5;\n\n  vec3 wallColor;\n  vec3 normal;\n  if (abs(point.x) > 0.999) {\n    wallColor = texture2D(tiles, point.yz * 0.5 + vec2(1.0, 0.5)).rgb;\n    normal = vec3(-point.x, 0.0, 0.0);\n  } else if (abs(point.z) > 0.999) {\n    wallColor = texture2D(tiles, point.yx * 0.5 + vec2(1.0, 0.5)).rgb;\n    normal = vec3(0.0, 0.0, -point.z);\n  } else {\n    wallColor = texture2D(tiles, point.xz * 0.5 + 0.5).rgb;\n    normal = vec3(0.0, 1.0, 0.0);\n  }\n\n  scale /= length(point); \n\n  /* caustics */\n  vec3 refractedLight = -refract(-light, vec3(0.0, 1.0, 0.0), IOR_AIR / IOR_WATER);\n  float diffuse = max(0.0, dot(refractedLight, normal));\n  vec4 info = texture2D(water, point.xz * 0.5 + 0.5);\n  if (point.y < info.r) {\n    vec4 caustic = texture2D(causticTex, 0.75 * (point.xz - point.y * refractedLight.xz / refractedLight.y) * 0.5 + 0.5);\n    scale += diffuse * caustic.r * 2.0 * caustic.g;\n  } else {\n    /* shadow for the rim of the pool */\n    vec2 t = intersectCube(point, refractedLight, vec3(-1.0, -poolHeight, -1.0), vec3(1.0, 2.0, 1.0));\n    diffuse *= 1.0 / (1.0 + exp(-200.0 / (1.0 + 10.0 * (t.y - t.x)) * (point.y + refractedLight.y * t.y - 2.0 / 12.0)));\n\n    scale += diffuse * 0.5;\n  }\n\n  return wallColor * scale;\n}\n\nvarying vec3 pos;\n\nvoid main() {\n  gl_FragColor = vec4(getWallColor(pos), 1.0);\n\n  vec4 info = texture2D(water, pos.xz * 0.5 + 0.5);\n\n  if (pos.y < info.r) {\n    gl_FragColor.rgb *= underwaterColor * 1.2;\n  }\n}";

const {defineComponent:_defineComponent$4} = await importShared('vue');

const THREE$3 = await importShared('three');
const _sfc_main$4 = /* @__PURE__ */ _defineComponent$4({
  __name: "pool",
  props: {
    waterTexture: {},
    causticsTexture: {},
    tiles: {},
    light: {}
  },
  setup(__props) {
    const props = __props;
    const _geometry = new THREE$3.BufferGeometry();
    const vertices = new Float32Array([
      -1,
      -1,
      -1,
      -1,
      -1,
      1,
      -1,
      1,
      -1,
      -1,
      1,
      1,
      1,
      -1,
      -1,
      1,
      1,
      -1,
      1,
      -1,
      1,
      1,
      1,
      1,
      -1,
      -1,
      -1,
      1,
      -1,
      -1,
      -1,
      -1,
      1,
      1,
      -1,
      1,
      -1,
      1,
      -1,
      -1,
      1,
      1,
      1,
      1,
      -1,
      1,
      1,
      1,
      -1,
      -1,
      -1,
      -1,
      1,
      -1,
      1,
      -1,
      -1,
      1,
      1,
      -1,
      -1,
      -1,
      1,
      1,
      -1,
      1,
      -1,
      1,
      1,
      1,
      1,
      1
    ]);
    const indices = new Uint32Array([0, 1, 2, 2, 1, 3, 4, 5, 6, 6, 5, 7, 12, 13, 14, 14, 13, 15, 16, 17, 18, 18, 17, 19, 20, 21, 22, 22, 21, 23]);
    _geometry.setAttribute("position", new THREE$3.BufferAttribute(vertices, 3));
    _geometry.setIndex(new THREE$3.BufferAttribute(indices, 1));
    const _material = new THREE$3.RawShaderMaterial({
      uniforms: {
        light: { value: props.light },
        tiles: { value: props.tiles },
        water: { value: null },
        causticTex: { value: null }
      },
      vertexShader: vertex_default,
      fragmentShader: fragment_default,
      side: THREE$3.FrontSide
    });
    const _mesh = new THREE$3.Mesh(_geometry, _material);
    const { renderer, camera } = Fs();
    const draw = (waterTexture, causticsTexture) => {
      _material.uniforms["water"].value = waterTexture;
      _material.uniforms["causticTex"].value = causticsTexture;
      renderer.render(_mesh, camera.value);
    };
    const { onBeforeRender } = _l();
    onBeforeRender(() => {
      draw(props.waterTexture, props.causticsTexture);
    }, -1);
    return (_ctx, _cache) => {
      return null;
    };
  }
});

const {withAsyncContext:_withAsyncContext,defineComponent:_defineComponent$3} = await importShared('vue');

const {unref:_unref$3,openBlock:_openBlock$3,createBlock:_createBlock$3} = await importShared('vue');

const {ref: ref$2} = await importShared('vue');

const THREE$2 = await importShared('three');
const _sfc_main$3 = /* @__PURE__ */ _defineComponent$3({
  __name: "water",
  props: {
    waterTexture: {},
    causticsTexture: {},
    geometry: {},
    light: {}
  },
  async setup(__props) {
    let __temp, __restore;
    const props = __props;
    const geometry = props.geometry;
    const cubetextureloader = new THREE$2.CubeTextureLoader();
    const textureCube = cubetextureloader.setPath(("https://opensource.cdn.icegl.cn") + "/images/skyBox/6jpg/").load(["pos-x.jpg", "neg-x.jpg", "pos-y.jpg", "neg-y.jpg", "pos-z.jpg", "neg-z.jpg"]);
    const pTexture = ([__temp, __restore] = _withAsyncContext(() => useTexture("./plugins/water/images/tiles.jpg")), __temp = await __temp, __restore(), __temp);
    const material = new THREE$2.RawShaderMaterial({
      uniforms: {
        light: { value: props.light },
        tiles: { value: pTexture },
        sky: { value: textureCube },
        water: { value: null },
        causticTex: { value: null },
        underwater: { value: false }
      },
      vertexShader: vertex_default$1,
      fragmentShader: fragment_default$1
    });
    const mesh = new THREE$2.Mesh(geometry, material);
    const pooRef = ref$2(null);
    const white = new THREE$2.Color("white");
    const { renderer, camera } = Fs();
    const { onRender } = _l();
    onRender(() => {
      renderer.setRenderTarget(null);
      renderer.setClearColor(white, 1);
      renderer.clear();
      material.uniforms["water"].value = props.waterTexture;
      material.uniforms["causticTex"].value = props.causticsTexture;
      material.side = THREE$2.FrontSide;
      material.uniforms["underwater"].value = true;
      renderer.render(mesh, camera.value);
      material.side = THREE$2.BackSide;
      material.uniforms["underwater"].value = false;
      renderer.render(mesh, camera.value);
    });
    return (_ctx, _cache) => {
      return _openBlock$3(), _createBlock$3(_sfc_main$4, {
        tiles: _unref$3(pTexture),
        light: _ctx.light,
        waterTexture: _ctx.waterTexture,
        causticsTexture: _ctx.causticsTexture,
        ref_key: "pooRef",
        ref: pooRef
      }, null, 8, ["tiles", "light", "waterTexture", "causticsTexture"]);
    };
  }
});

const {defineComponent:_defineComponent$2} = await importShared('vue');

const {unref:_unref$2,createVNode:_createVNode$1,Suspense:_Suspense,withCtx:_withCtx$1,openBlock:_openBlock$2,createBlock:_createBlock$2} = await importShared('vue');

const THREE$1 = await importShared('three');
const _sfc_main$2 = /* @__PURE__ */ _defineComponent$2({
  __name: "caustics",
  props: {
    lightFrontGeometry: {},
    waterTexture: {},
    light: {}
  },
  setup(__props) {
    const props = __props;
    const _camera = new THREE$1.OrthographicCamera(0, 1, 1, 0, 0, 2e3);
    const _geometry = new THREE$1.PlaneGeometry(2, 2, 200, 200);
    const texture = new THREE$1.WebGLRenderTarget(1024, 1024);
    const material = new THREE$1.ShaderMaterial({
      uniforms: {
        light: { value: props.light },
        water: { value: null }
      },
      vertexShader: vertex_default$2,
      fragmentShader: fragment_default$2
    });
    const _causticMesh = new THREE$1.Mesh(_geometry, material);
    const black = new THREE$1.Color("black");
    const { renderer } = Fs();
    const { onBeforeRender } = _l();
    onBeforeRender(() => {
      _causticMesh.material.uniforms["water"].value = props.waterTexture;
      renderer.setRenderTarget(texture);
      renderer.setClearColor(black, 0);
      renderer.clear();
      renderer.render(_causticMesh, _camera);
    });
    return (_ctx, _cache) => {
      return _openBlock$2(), _createBlock$2(_Suspense, null, {
        default: _withCtx$1(() => [
          _createVNode$1(_sfc_main$3, {
            waterTexture: _ctx.waterTexture,
            causticsTexture: _unref$2(texture).texture,
            light: _ctx.light,
            geometry: _unref$2(_geometry)
          }, null, 8, ["waterTexture", "causticsTexture", "light", "geometry"])
        ]),
        _: 1
      });
    };
  }
});

const {defineComponent:_defineComponent$1} = await importShared('vue');

const {unref:_unref$1,openBlock:_openBlock$1,createBlock:_createBlock$1} = await importShared('vue');

const THREE = await importShared('three');

const {ref: ref$1} = await importShared('vue');
const _sfc_main$1 = /* @__PURE__ */ _defineComponent$1({
  __name: "waterSimulation",
  props: {
    light: {}
  },
  setup(__props, { expose: __expose }) {
    const _camera = new THREE.OrthographicCamera(0, 1, 1, 0, 0, 2e3);
    const _geometry = new THREE.PlaneGeometry(2, 2);
    const _textureA = new THREE.WebGLRenderTarget(256, 256, { type: THREE.FloatType });
    const _textureB = new THREE.WebGLRenderTarget(256, 256, { type: THREE.FloatType });
    const dropMaterial = new THREE.RawShaderMaterial({
      uniforms: {
        center: { value: [0, 0] },
        radius: { value: 0 },
        strength: { value: 0 },
        texture: { value: null }
      },
      vertexShader: vertex_default$3,
      fragmentShader: drop_fragment_default
    });
    const normalMaterial = new THREE.RawShaderMaterial({
      uniforms: {
        delta: { value: [1 / 256, 1 / 256] },
        // TODO: Remove this useless uniform and hardcode it in shaders?
        texture: { value: null }
      },
      vertexShader: vertex_default$3,
      fragmentShader: normal_fragment_default
    });
    const updateMaterial = new THREE.RawShaderMaterial({
      uniforms: {
        delta: { value: [1 / 256, 1 / 256] },
        // TODO: Remove this useless uniform and hardcode it in shaders?
        texture: { value: null }
      },
      vertexShader: vertex_default$3,
      fragmentShader: update_fragment_default
    });
    const _dropMesh = new THREE.Mesh(_geometry, dropMaterial);
    const _normalMesh = new THREE.Mesh(_geometry, normalMaterial);
    const _updateMesh = new THREE.Mesh(_geometry, updateMaterial);
    let texture = _textureA;
    const _render = (renderer2, mesh) => {
      const oldTexture = texture;
      const newTexture = texture === _textureA ? _textureB : _textureA;
      mesh.material.uniforms.texture.value = oldTexture.texture;
      renderer2.setRenderTarget(newTexture);
      renderer2.render(mesh, _camera);
      texture = newTexture;
    };
    const stepSimulation = (renderer2) => {
      _render(renderer2, _updateMesh);
    };
    const updateNormals = (renderer2) => {
      _render(renderer2, _normalMesh);
    };
    const { renderer, camera } = Fs();
    const raycaster = ref$1(new THREE.Raycaster());
    renderer.autoClear = false;
    const { onBeforeRender } = _l();
    onBeforeRender(() => {
      stepSimulation(renderer);
      updateNormals(renderer);
    });
    const addDrop = (x, y, radius, strength) => {
      _dropMesh.material.uniforms["center"].value = [x, y];
      _dropMesh.material.uniforms["radius"].value = radius;
      _dropMesh.material.uniforms["strength"].value = strength;
      _render(renderer, _dropMesh);
    };
    const mouse = new THREE.Vector2();
    const targetgeometry = new THREE.PlaneGeometry(2, 2);
    const position = targetgeometry.attributes.position;
    for (let i = 0; i < position.count; i++) {
      const z = -position.getY(i);
      position.setY(i, 0);
      position.setZ(i, z);
    }
    position.needsUpdate = true;
    const targetmesh = new THREE.Mesh(targetgeometry);
    const onMouseMove = (event) => {
      const rect = renderer.domElement.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      mouse.x = (event.clientX - rect.left) * 2 / width - 1;
      mouse.y = -(event.clientY - rect.top) * 2 / height + 1;
      raycaster.value.setFromCamera(mouse, camera.value);
      const intersects = raycaster.value.intersectObject(targetmesh);
      for (let intersect of intersects) {
        addDrop(intersect.point.x, intersect.point.z, 0.03, 0.04);
      }
    };
    const mouseEventHandler = {
      handleEvent: onMouseMove
    };
    const mouseEvent = (isOn) => {
      if (isOn) {
        renderer.domElement.addEventListener("mousemove", lodashExports.throttle(onMouseMove, 30));
      } else {
        renderer.domElement.removeEventListener("mousemove", mouseEventHandler);
      }
    };
    __expose({ addDrop, mouseEvent });
    return (_ctx, _cache) => {
      return _openBlock$1(), _createBlock$1(_sfc_main$2, {
        lightFrontGeometry: _unref$1(_geometry),
        waterTexture: _unref$1(texture).texture,
        light: _ctx.light
      }, null, 8, ["lightFrontGeometry", "waterTexture", "light"]);
    };
  }
});

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,unref:_unref,createVNode:_createVNode,normalizeProps:_normalizeProps,guardReactiveProps:_guardReactiveProps,withCtx:_withCtx,openBlock:_openBlock,createBlock:_createBlock} = await importShared('vue');

const {reactive,ref} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "realWater",
  setup(__props) {
    const state = reactive({
      alpha: true,
      antialias: true,
      windowSize: true,
      clearAlpha: 0,
      // 有些版本 无效 需要自行设置 renderer.value.autoClear = false
      renderMode: "manual"
    });
    const light = [0.7559289460184544, 0.7559289460184544, -0.3779644730092272];
    const waterSimulationRef = ref(null);
    const paneControl = new Pane();
    paneControl.addButton({
      label: "点击按钮",
      title: "随机增加波纹"
    }).on("click", () => {
      for (var i = 0; i < 10; i++) {
        waterSimulationRef.value.addDrop(Math.random() * 2 - 1, Math.random() * 2 - 1, 0.03, i & 1 ? 0.02 : -0.02);
      }
    });
    const mouseE = ref(false);
    paneControl.addBinding(mouseE, "value", {
      label: "鼠标波纹"
    }).on("change", (e) => {
      waterSimulationRef.value.mouseEvent(e.value);
    });
    return (_ctx, _cache) => {
      return _openBlock(), _createBlock(_unref(ol), _normalizeProps(_guardReactiveProps(state)), {
        default: _withCtx(() => [
          _cache[0] || (_cache[0] = _createElementVNode("TresPerspectiveCamera", {
            position: [0.426, 0.677, -2.095],
            fov: 75,
            near: 0.01,
            far: 1e3
          }, null, -1)),
          _createVNode(_unref(Kk)),
          _createVNode(_sfc_main$1, {
            light,
            ref_key: "waterSimulationRef",
            ref: waterSimulationRef
          }, null, 512)
        ]),
        _: 1
      }, 16);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=realWater.qaep6SPE1767105581793.js.map
