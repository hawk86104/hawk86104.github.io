import { importShared, Fs, _l } from './index.BxB45aCK1767105581793.js';
import { clamp } from './MathUtils.BRweaORn1767105581793.js';
import { mergeGeometries } from './BufferGeometryUtils.NxcZsV4J1767105581793.js';
import { LineGeometry, Line2 } from './Line2.BapQCq2s1767105581793.js';
import { LineMaterial } from './LineSegments2.3MkrpAcm1767105581793.js';

const setDomPlacement = (domElement, placement) => {
  const [y, x] = placement.split("-");
  Object.assign(domElement.style, {
    left: x === "left" ? "0" : x === "center" ? `50%` : "",
    right: x === "right" ? "0" : "",
    top: y === "top" ? "0" : y === "bottom" ? "" : "50%",
    bottom: y === "bottom" ? "0" : "",
    transform: `${x === "center" ? "translateX(-50%)" : ""} ${y === "center" ? "translateY(-50%)" : ""}`
  });
  return placement;
};
const gizmoDomElement = ({
  placement,
  size,
  offset,
  id,
  className
}) => {
  const div = document.createElement("div");
  const { top, left, right, bottom } = offset;
  Object.assign(div.style, {
    id,
    position: "absolute",
    zIndex: "1000",
    height: `${size}px`,
    width: `${size}px`,
    margin: `${top}px ${right}px ${bottom}px ${left}px`,
    borderRadius: "100%"
  });
  setDomPlacement(div, placement);
  if (id) div.id = id;
  if (className) div.className = className;
  return div;
};

const getDomElement = (domElement) => {
  const element = typeof domElement === "string" ? document.querySelector(domElement) : domElement;
  if (!element) throw Error(`Invalid DOM element`);
  return element;
};

const {Vector3: Vector3$4} = await importShared('three');
const axisMap = [
  ["x", 0, 3],
  ["y", 1, 4],
  ["z", 2, 5]
];
const point = /* @__PURE__ */ new Vector3$4();
function updateAxis({ isSphere }, axes, camera) {
  if (!isSphere) return;
  point.set(0, 0, 1).applyQuaternion(camera.quaternion);
  axisMap.forEach(([axis, positiveIndex, negativeIndex]) => {
    const value = point[axis];
    let object = axes[positiveIndex];
    let opacity = object.userData.opacity;
    object.material.opacity = clamp(value >= 0 ? opacity : opacity / 2, 0, 1);
    object = axes[negativeIndex];
    opacity = object.userData.opacity;
    object.material.opacity = clamp(value >= 0 ? opacity / 2 : opacity, 0, 1);
  });
}

const isClick = (e, startCoords, threshold = 10) => Math.abs(e.clientX - startCoords.x) < threshold && Math.abs(e.clientY - startCoords.y) < threshold;

const {Vector2: Vector2$2,Raycaster} = await importShared('three');

const _raycaster = /* @__PURE__ */ new Raycaster();
const _mouse = /* @__PURE__ */ new Vector2$2();
const intersectedObjects = (event, domRect, camera, intersections) => {
  _mouse.set(
    (event.clientX - domRect.left) / domRect.width * 2 - 1,
    -((event.clientY - domRect.top) / domRect.height) * 2 + 1
  );
  _raycaster.setFromCamera(_mouse, camera);
  const intersects = _raycaster.intersectObjects(
    intersections,
    false
  );
  const intersection = intersects.length ? intersects[0] : null;
  return !intersection || !intersection.object.visible ? null : intersection;
};

const EPSILON = 1e-6;
const GIZMO_TURN_RATE = 2 * Math.PI;
const AXES = ["x", "y", "z"];
const GIZMO_AXES = [...AXES, "nx", "ny", "nz"];
const GIZMO_FACES = [
  "right",
  "top",
  "front",
  "left",
  "bottom",
  "back"
];
const GIZMO_SPHERE_AXES_DISTANCE = 1.3;

const updateBackground = (background, hovered = true) => {
  const { material, userData } = background;
  const { color, opacity } = hovered ? userData.hover : userData;
  material.color.set(color);
  material.opacity = opacity;
};

const deepClone = (obj) => JSON.parse(JSON.stringify(obj));

const optionsFallback = (options) => {
  const type = options.type || "sphere";
  const isSphere = type === "sphere";
  const resolution = options.resolution || isSphere ? 64 : 128;
  const { container } = options;
  options.container = void 0;
  options = JSON.parse(JSON.stringify(options));
  options.container = container;
  GIZMO_FACES.forEach((face, index) => {
    if (options[face]) options[GIZMO_AXES[index]] = options[face];
  });
  const axesFallback = {
    enabled: true,
    color: 16777215,
    opacity: 1,
    scale: isSphere ? 0.7 : 0.7,
    labelColor: 2236962,
    line: false,
    border: {
      size: 0,
      color: 14540253
    },
    hover: {
      color: isSphere ? 16777215 : 9688043,
      labelColor: 2236962,
      opacity: 1,
      scale: isSphere ? 0.7 : 0.7,
      border: {
        size: 0,
        color: 14540253
      }
    }
  };
  const negativeAxesFallback = {
    line: false,
    scale: isSphere ? 0.45 : 0.7,
    hover: {
      scale: isSphere ? 0.5 : 0.7
    }
  };
  const optionsFallback2 = {
    type,
    container: document.body,
    size: 128,
    placement: "top-right",
    resolution,
    lineWidth: 20,
    radius: isSphere ? 1 : 0.2,
    smoothness: 18,
    animated: true,
    speed: 1,
    background: {
      enabled: true,
      color: isSphere ? 16777215 : 14739180,
      opacity: isSphere ? 0 : 1,
      hover: {
        color: isSphere ? 16777215 : 14739180,
        opacity: isSphere ? 0.2 : 1
      }
    },
    font: {
      family: "sans-serif",
      weight: 900
    },
    offset: {
      top: 10,
      left: 10,
      bottom: 10,
      right: 10
    },
    corners: {
      enabled: !isSphere,
      color: isSphere ? 15915362 : 16777215,
      opacity: 1,
      scale: isSphere ? 0.15 : 0.2,
      radius: 1,
      smoothness: 18,
      hover: {
        color: isSphere ? 16777215 : 9688043,
        opacity: 1,
        scale: isSphere ? 0.2 : 0.225
      }
    },
    edges: {
      enabled: !isSphere,
      color: isSphere ? 15915362 : 16777215,
      opacity: isSphere ? 1 : 0,
      radius: isSphere ? 1 : 0.125,
      smoothness: 18,
      scale: isSphere ? 0.15 : 1,
      hover: {
        color: isSphere ? 16777215 : 9688043,
        opacity: 1,
        scale: isSphere ? 0.2 : 1
      }
    },
    x: {
      ...deepClone(axesFallback),
      ...isSphere ? {
        label: "X",
        color: 16725587,
        line: true
      } : {
        label: "Right"
      }
    },
    y: {
      ...deepClone(axesFallback),
      ...isSphere ? {
        label: "Y",
        color: 9100032,
        line: true
      } : {
        label: "Top"
      }
    },
    z: {
      ...deepClone(axesFallback),
      ...isSphere ? {
        label: "Z",
        color: 2920447,
        line: true
      } : {
        label: "Front"
      }
    },
    nx: {
      ...deepClone(negativeAxesFallback),
      label: isSphere ? "" : "Left"
    },
    ny: {
      ...deepClone(negativeAxesFallback),
      label: isSphere ? "" : "Bottom"
    },
    nz: {
      ...deepClone(negativeAxesFallback),
      label: isSphere ? "" : "Back"
    }
  };
  assignNestedDefaults(options, optionsFallback2);
  AXES.forEach(
    (axis) => assignNestedDefaults(
      options[`n${axis}`],
      deepClone(options[axis])
    )
  );
  return { ...options, isSphere };
};
function assignNestedDefaults(target, ...defaultObjects) {
  if (target instanceof HTMLElement || typeof target !== "object" || target === null)
    return target;
  for (const defaults of defaultObjects) {
    for (const key in defaults) {
      if (key === "container") continue;
      if (key in defaults) {
        if (target[key] === void 0) {
          target[key] = defaults[key];
        } else if (typeof defaults[key] === "object" && !Array.isArray(defaults[key])) {
          target[key] = assignNestedDefaults(
            target[key] || {},
            defaults[key]
          );
        }
      }
    }
  }
  return target;
}

const {CanvasTexture,Color: Color$1,RepeatWrapping,SRGBColorSpace} = await importShared('three');
const axesMap = (options, offset = 2) => {
  const colorManager = new Color$1();
  const doubleOffset = offset * 2;
  const { isSphere, resolution, radius, font, corners, edges } = options;
  const axes = GIZMO_AXES.map((axis) => ({ ...options[axis], radius }));
  if (isSphere && corners.enabled) axes.push(corners);
  if (isSphere && edges.enabled) axes.push(edges);
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = resolution * 2 + doubleOffset * 2;
  canvas.height = resolution * axes.length + doubleOffset * axes.length;
  const [fontStyle, fontYFix] = getFontStyle(axes, resolution, font);
  axes.forEach(
    ({
      radius: radius2,
      label,
      color,
      labelColor,
      border,
      hover: {
        color: hoverColor,
        labelColor: hoverLabel,
        border: hoverBorder
      }
    }, index) => {
      const y = resolution * index + index * doubleOffset + offset;
      drawAxis(
        offset,
        y,
        offset,
        resolution,
        radius2,
        label,
        border,
        color,
        labelColor
      );
      drawAxis(
        resolution + offset * 3,
        y,
        offset,
        resolution,
        radius2,
        label,
        hoverBorder ?? border,
        hoverColor ?? color,
        hoverLabel ?? labelColor
      );
    }
  );
  const colsCount = axes.length;
  const offsetX = offset / (resolution * 2);
  const offsetY = offset / (resolution * 6);
  const cellHeight = 1 / colsCount;
  const map = new CanvasTexture(canvas);
  map.repeat.set(0.5 - 2 * offsetX, cellHeight - 2 * offsetY);
  map.offset.set(offsetX, 1 - offsetY);
  Object.assign(map, {
    colorSpace: SRGBColorSpace,
    wrapS: RepeatWrapping,
    wrapT: RepeatWrapping,
    userData: {
      offsetX,
      offsetY,
      cellHeight
    }
  });
  return map;
  function drawAxis(x, y, offset2, size, radius2, label, border, color, labelColor) {
    radius2 = radius2 * (size / 2);
    if (color != null && color !== "") {
      drawRoundRectPath();
      ctx.fillStyle = colorManager.set(color).getStyle();
      ctx.fill();
    }
    if (border && border.size) {
      const halfBorderWidth = border.size * size / 2;
      x += halfBorderWidth;
      y += halfBorderWidth;
      size -= border.size * size;
      radius2 = Math.max(0, radius2 - halfBorderWidth);
      drawRoundRectPath();
      ctx.strokeStyle = colorManager.set(border.color).getStyle();
      ctx.lineWidth = border.size * size;
      ctx.stroke();
    }
    if (label)
      drawText(
        ctx,
        x + size / 2,
        y + (size + offset2) / 2,
        label,
        colorManager.set(labelColor).getStyle()
      );
    function drawRoundRectPath() {
      ctx.beginPath();
      ctx.moveTo(x + radius2, y);
      ctx.lineTo(x + size - radius2, y);
      ctx.arcTo(x + size, y, x + size, y + radius2, radius2);
      ctx.lineTo(x + size, y + size - radius2);
      ctx.arcTo(x + size, y + size, x + size - radius2, y + size, radius2);
      ctx.lineTo(x + radius2, y + size);
      ctx.arcTo(x, y + size, x, y + size - radius2, radius2);
      ctx.lineTo(x, y + radius2);
      ctx.arcTo(x, y, x + radius2, y, radius2);
      ctx.closePath();
    }
  }
  function getFontStyle(axis, resolution2, font2) {
    const longestLabel = [...axis].sort((a, b) => (a.label?.length || 0) - (b.label?.length || 0)).pop();
    const text = longestLabel.label;
    const { family, weight } = font2;
    const square = isSphere ? Math.sqrt(Math.pow(resolution2 * 0.7, 2) / 2) : resolution2;
    let fontSize = square;
    let textWidth = 0;
    let textHeight = 0;
    do {
      ctx.font = `${weight} ${fontSize}px ${family}`;
      const measure = ctx.measureText(text);
      textWidth = measure.width;
      textHeight = measure.fontBoundingBoxDescent;
      fontSize--;
    } while (textWidth > square && fontSize > 0);
    const yFix = square / textHeight;
    const scaleFactor = Math.min(square / textWidth, yFix);
    const finalFontSize = Math.floor(fontSize * scaleFactor);
    return [`${weight} ${finalFontSize}px ${family}`, yFix];
  }
  function drawText(ctx2, x, y, text, color) {
    ctx2.font = fontStyle;
    ctx2.textAlign = "center";
    ctx2.textBaseline = "middle";
    ctx2.fillStyle = color;
    ctx2.fillText(text, x, y + (isSphere ? fontYFix : 0));
  }
};
const setMapHoverOffset = (map, hover) => map.offset.x = (hover ? 0.5 : 0) + map.userData.offsetX;
const setMapColumnOffset = (map, col) => {
  const {
    offset,
    userData: { offsetY, cellHeight }
  } = map;
  offset.y = 1 - (col + 1) * cellHeight + offsetY;
};

const {BufferGeometry,BufferAttribute} = await importShared('three');

function roundedRectangleGeometry(radius, smoothness, width = 2, height = 2) {
  const wi = width / 2 - radius;
  const hi = height / 2 - radius;
  const ul = radius / width;
  const ur = (width - radius) / width;
  const vl = radius / height;
  const vh = (height - radius) / height;
  const positions = [wi, hi, 0, -wi, hi, 0, -wi, -hi, 0, wi, -hi, 0];
  const uvs = [ur, vh, ul, vh, ul, vl, ur, vl];
  const n = [
    3 * (smoothness + 1) + 3,
    3 * (smoothness + 1) + 4,
    smoothness + 4,
    smoothness + 5,
    2 * (smoothness + 1) + 4,
    2,
    1,
    2 * (smoothness + 1) + 3,
    3,
    4 * (smoothness + 1) + 3,
    4,
    0
  ];
  const indices = [0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7, 8, 9, 10, 8, 10, 11].map(
    (i) => n[i]
  );
  let phi, cos, sin, xc, yc, uc, vc, idx;
  for (let i = 0; i < 4; i++) {
    xc = i < 1 || i > 2 ? wi : -wi;
    yc = i < 2 ? hi : -hi;
    uc = i < 1 || i > 2 ? ur : ul;
    vc = i < 2 ? vh : vl;
    for (let j = 0; j <= smoothness; j++) {
      phi = Math.PI / 2 * (i + j / smoothness);
      cos = Math.cos(phi);
      sin = Math.sin(phi);
      positions.push(xc + radius * cos, yc + radius * sin, 0);
      uvs.push(uc + ul * cos, vc + vl * sin);
      if (j < smoothness) {
        idx = (smoothness + 1) * i + j + 4;
        indices.push(i, idx, idx + 1);
      }
    }
  }
  return new BufferGeometry().setIndex(new BufferAttribute(new Uint32Array(indices), 1)).setAttribute(
    "position",
    new BufferAttribute(new Float32Array(positions), 3)
  ).setAttribute("uv", new BufferAttribute(new Float32Array(uvs), 2));
}

const {Mesh: Mesh$3,MeshBasicMaterial: MeshBasicMaterial$3,Sprite: Sprite$2,SpriteMaterial: SpriteMaterial$2,Vector3: Vector3$3} = await importShared('three');
const axesFaces = (options, texture) => {
  const target = new Vector3$3();
  const { isSphere, radius, smoothness } = options;
  const geometry = roundedRectangleGeometry(radius, smoothness);
  return GIZMO_AXES.map((_, i) => {
    const isPositive = i < 3;
    const axis = GIZMO_AXES[i];
    const map = i ? texture.clone() : texture;
    setMapColumnOffset(map, i);
    const { enabled, scale, opacity, hover } = options[axis];
    const materialConfig = {
      map,
      opacity,
      transparent: true
    };
    const face = isSphere ? new Sprite$2(new SpriteMaterial$2(materialConfig)) : new Mesh$3(geometry, new MeshBasicMaterial$3(materialConfig));
    const direction = isPositive ? axis : axis[1];
    face.position[direction] = (isPositive ? 1 : -1) * (isSphere ? GIZMO_SPHERE_AXES_DISTANCE : 1);
    if (!isSphere) face.lookAt(target.copy(face.position).multiplyScalar(1.7));
    face.scale.setScalar(scale);
    face.renderOrder = 1;
    face.visible = enabled;
    face.userData = {
      scale,
      opacity,
      hover
    };
    return face;
  });
};

const {Mesh: Mesh$2,MeshBasicMaterial: MeshBasicMaterial$2,Sprite: Sprite$1,SpriteMaterial: SpriteMaterial$1,Vector3: Vector3$2} = await importShared('three');
const axesCorners = (options, texture) => {
  const { isSphere, corners } = options;
  if (!corners.enabled) return [];
  const { color, opacity, scale, radius, smoothness, hover } = corners;
  const geometry = isSphere ? null : roundedRectangleGeometry(radius, smoothness);
  const materialConfig = {
    transparent: true,
    opacity
  };
  const positions = [
    1,
    1,
    1,
    -1,
    1,
    1,
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
    -1,
    1,
    -1,
    -1,
    -1,
    -1,
    -1
  ].map((val) => val * 0.85);
  const target = new Vector3$2();
  return Array(positions.length / 3).fill(0).map((_, i) => {
    if (isSphere) {
      const map = texture.clone();
      setMapColumnOffset(map, 6);
      materialConfig.map = map;
    } else {
      materialConfig.color = color;
    }
    const corner = isSphere ? new Sprite$1(new SpriteMaterial$1(materialConfig)) : new Mesh$2(geometry, new MeshBasicMaterial$2(materialConfig));
    const i3 = i * 3;
    corner.position.set(positions[i3], positions[i3 + 1], positions[i3 + 2]);
    if (isSphere) corner.position.normalize().multiplyScalar(1.7);
    corner.scale.setScalar(scale);
    corner.lookAt(target.copy(corner.position).multiplyScalar(2));
    corner.renderOrder = 1;
    corner.userData = {
      color,
      opacity,
      scale,
      hover
    };
    return corner;
  });
};

const {Mesh: Mesh$1,MeshBasicMaterial: MeshBasicMaterial$1,Sprite,SpriteMaterial,Vector3: Vector3$1} = await importShared('three');
const axesEdges = (options, texture, textureColumn) => {
  const { isSphere, edges } = options;
  if (!edges.enabled) return [];
  const { color, opacity, scale, hover, radius, smoothness } = edges;
  const geometry = isSphere ? null : roundedRectangleGeometry(radius, smoothness, 1.2, 0.25);
  const materialConfig = {
    transparent: true,
    opacity
  };
  const positions = [
    0,
    1,
    1,
    0,
    -1,
    1,
    1,
    0,
    1,
    -1,
    0,
    1,
    0,
    1,
    -1,
    0,
    -1,
    -1,
    1,
    0,
    -1,
    -1,
    0,
    -1,
    1,
    1,
    0,
    1,
    -1,
    0,
    -1,
    1,
    0,
    -1,
    -1,
    0
  ].map((val) => val * 0.925);
  const target = new Vector3$1();
  return Array(positions.length / 3).fill(0).map((_, i) => {
    if (isSphere) {
      const map = texture.clone();
      setMapColumnOffset(map, textureColumn);
      materialConfig.map = map;
    } else {
      materialConfig.color = color;
    }
    const edge = isSphere ? new Sprite(new SpriteMaterial(materialConfig)) : new Mesh$1(geometry, new MeshBasicMaterial$1(materialConfig));
    const i3 = i * 3;
    edge.position.set(positions[i3], positions[i3 + 1], positions[i3 + 2]);
    if (isSphere) edge.position.normalize().multiplyScalar(1.7);
    edge.scale.setScalar(scale);
    edge.lookAt(target.copy(edge.position).multiplyScalar(2));
    if (!isSphere && !edge.position.y) edge.rotation.z = Math.PI / 2;
    edge.renderOrder = 1;
    edge.userData = {
      color,
      opacity,
      scale,
      hover
    };
    return edge;
  });
};

const {BackSide,Mesh,MeshBasicMaterial,SphereGeometry} = await importShared('three');
const gizmoBackground = (faces, options) => {
  const {
    isSphere,
    background: { enabled, color, opacity, hover }
  } = options;
  let background;
  const material = new MeshBasicMaterial({
    color,
    side: BackSide,
    opacity,
    transparent: true,
    depthWrite: false
  });
  if (!enabled) return null;
  if (isSphere) {
    background = new Mesh(
      new SphereGeometry(1.8, 64, 64),
      material
    );
  } else {
    let geometry;
    faces.forEach((plane) => {
      const originalScale = plane.scale.x;
      plane.scale.setScalar(0.9);
      plane.updateMatrix();
      const planeGeometry = plane.geometry.clone();
      planeGeometry.applyMatrix4(plane.matrix);
      geometry = !!geometry ? mergeGeometries([geometry, planeGeometry]) : planeGeometry;
      plane.scale.setScalar(originalScale);
    });
    background = new Mesh(geometry, material);
  }
  background.userData = {
    color,
    opacity,
    hover
  };
  return background;
};

const {Color,Vector2: Vector2$1} = await importShared('three');
const axesLines = (options) => {
  const colorManager = new Color();
  const positions = [];
  const colors = [];
  const { isSphere } = options;
  GIZMO_AXES.forEach((axisName, i) => {
    const { enabled, line, scale, color } = options[axisName];
    if (!enabled || !line) return;
    const negative = i < 3 ? 1 : -1;
    const distance = isSphere ? GIZMO_SPHERE_AXES_DISTANCE - scale / 2 : 0.975;
    const point = distance * negative;
    positions.push(
      axisName.includes("x") ? point : 0,
      axisName.includes("y") ? point : 0,
      axisName.includes("z") ? point : 0,
      0,
      0,
      0
    );
    const colorArray = colorManager.set(color).toArray();
    colors.push(...colorArray, ...colorArray);
  });
  if (!positions.length) return null;
  const geometry = new LineGeometry().setPositions(positions).setColors(colors);
  const material = new LineMaterial({
    linewidth: options.lineWidth,
    vertexColors: true,
    resolution: new Vector2$1(window.innerWidth, window.innerHeight)
  });
  return new Line2(geometry, material).computeLineDistances();
};

const axesObjects = (options) => {
  const { corners, edges } = options;
  const axes = [];
  const map = axesMap(options);
  const faces = axesFaces(options, map);
  axes.push(...faces);
  if (corners.enabled) axes.push(...axesCorners(options, map));
  if (edges.enabled)
    axes.push(...axesEdges(options, map, corners.enabled ? 7 : 6));
  const background = gizmoBackground(faces, options);
  const lines = axesLines(options);
  return [axes, background, lines];
};

const axisHover = (axis, hovered = true) => {
  const { material, userData } = axis;
  const { opacity, color, scale } = hovered ? userData.hover : userData;
  axis.scale.setScalar(scale);
  material.opacity = opacity;
  if (material.map) setMapHoverOffset(material.map, hovered);
  else material.color.set(color);
};

const {Clock,Matrix4,Object3D,OrthographicCamera,PerspectiveCamera,Quaternion,Spherical,Vector2,Vector3,Vector4} = await importShared('three');
const _matrix = /* @__PURE__ */ new Matrix4();
const _spherical = /* @__PURE__ */ new Spherical();
const _vec3 = /* @__PURE__ */ new Vector3();
const _vec2 = /* @__PURE__ */ new Vector2();
class ViewportGizmo extends Object3D {
  /**
   * Creates a new ViewportGizmo instance.
   *
   * @param camera - The camera to be controlled by this gizmo
   * @param renderer - The WebGL renderer used to render the scene
   * @param options - {@link GizmoOptions}, Configuration options for the gizmo.
   * @param options.container - Parent element for the gizmo. Can be an HTMLElement or a CSS selector string
   * @param options.type - The gizmo configuration type. Either 'sphere' or 'cube', defaults to 'sphere'
   * @param options.size - Size of the gizmo widget in pixels. Defaults to 128
   * @param options.placement - Position of the gizmo in the viewport
   *    Options include:
   *    - `"top-left"`
   *    - `"top-center"`
   *    - `"top-right"`
   *    - `"center-left"`
   *    - `"center-center"`
   *    - `"center-right"`
   *    - `"bottom-left"`
   *    - `"bottom-center"`
   *    - `"bottom-right"`
   * @param options.offset - Offset of the gizmo from container edges in pixels
   * @param options.offset.left - Offset from the left edge
   * @param options.offset.top - Offset from the top edge
   * @param options.offset.right - Offset from the right edge
   * @param options.offset.bottom - Offset from the bottom edge
   * @param options.animated - Whether view changes should be animated. Defaults to true
   * @param options.speed - Animation speed multiplier. Defaults to 1
   * @param options.resolution - Texture resolution. Defaults to 64 for sphere, 128 for cube
   * @param options.lineWidth - Width of the axes lines in pixels
   * @param options.id - HTML `id` attribute for the gizmo container
   * @param options.className - HTML `class` attribute for the gizmo container
   * @param options.font - Font configuration for axis labels
   * @param options.font.family - Font family for axis labels
   * @param options.font.weight - Font weight for axis labels
   * @param options.background - Configuration for the background sphere/cube
   * @param options.background.enabled - Whether to display the background
   * @param options.background.color - Color of the background in normal state
   * @param options.background.opacity - Opacity of the background in normal state
   * @param options.background.hover.color - Color of the background when hovered
   * @param options.background.hover.opacity - Opacity of the background when hovered
   * @param options.corners - Configuration for corner indicators
   * @param options.corners.enabled - Whether to display corner indicators
   * @param options.corners.color - Base color of corner indicators
   * @param options.corners.opacity - Opacity of corner indicators
   * @param options.corners.scale - Scale multiplier for corner indicators
   * @param options.corners.radius - Radius of corner indicators
   * @param options.corners.smoothness - Smoothness of corner indicators
   * @param options.corners.hover.color - Color of corner indicators when hovered
   * @param options.corners.hover.opacity - Opacity of corner indicators when hovered
   * @param options.corners.hover.scale - Scale of corner indicators when hovered
   * @param options.edges - Configuration for edge indicators
   * @param options.edges.enabled - Whether to display edge indicators
   * @param options.edges.color - Base color of edge indicators
   * @param options.edges.opacity - Opacity of edge indicators
   * @param options.edges.scale - Scale multiplier for edge indicators
   * @param options.edges.radius - Radius of edge indicators
   * @param options.edges.smoothness - Smoothness of edge indicators
   * @param options.edges.hover.color - Color of edge indicators when hovered
   * @param options.edges.hover.opacity - Opacity of edge indicators when hovered
   * @param options.edges.hover.scale - Scale of edge indicators when hovered
   * @param options.x - Configuration for positive X axis/face
   * @param options.y - Configuration for positive Y axis/face
   * @param options.z - Configuration for positive Z axis/face
   * @param options.nx - Configuration for negative X axis/face
   * @param options.ny - Configuration for negative Y axis/face
   * @param options.nz - Configuration for negative Z axis/face
   *
   * @remarks Axis-specific configuration can also use alias names for cube mode:
   * - `right` (same as `x`)
   * - `left` (same as `nx`)
   * - `top` (same as `y`)
   * - `bottom` (same as `ny`)
   * - `front` (same as `z`)
   * - `back` (same as `nz`)
   *
   * For each axis/face configuration, the following options are available:
   * @param options.AXIS.enabled - Whether to draw the axis
   * @param options.AXIS.label - Custom text label for the axis
   * @param options.AXIS.opacity - Axis opacity
   * @param options.AXIS.scale - Scale multiplier for indicator size
   * @param options.AXIS.line - Whether to draw the axis line
   * @param options.AXIS.color - Axis indicator background color
   * @param options.AXIS.labelColor - Axis label color
   * @param options.AXIS.border.size - Border size around the axis indicator
   * @param options.AXIS.border.color - Border color around the axis indicator
   * @param options.AXIS.hover.color - Fill color on hover
   * @param options.AXIS.hover.labelColor - Label text color on hover
   * @param options.AXIS.hover.opacity - Opacity when hovered
   * @param options.AXIS.hover.scale - Indicator scale when hovered
   * @param options.AXIS.hover.border.size - Hover border size
   * @param options.AXIS.hover.border.color - Hover border color
   */
  constructor(camera, renderer, options = {}) {
    super();
    this.type = "ViewportGizmo";
    /** Whether the gizmo is currently active and responding to user input */
    this.enabled = true;
    /** The point around which the camera rotates */
    this.target = new Vector3();
    /** Whether view changes should be animated */
    this.animated = true;
    /** The speed of view change animations. Higher values result in faster animations */
    this.speed = 1;
    /**
     * Indicates whether the gizmo is currently being animated or not,
     * Useful when interacting with other camera controllers
     *
     * @readonly This value is set internally.
     **/
    this.animating = false;
    this._background = null;
    this._viewport = new Vector4();
    this._originalViewport = new Vector4();
    this._originalScissor = new Vector4();
    this._dragging = false;
    this._distance = 0;
    this._clock = new Clock();
    this._targetPosition = new Vector3();
    this._targetQuaternion = new Quaternion();
    this._quaternionStart = new Quaternion();
    this._quaternionEnd = new Quaternion();
    this._pointerStart = new Vector2();
    this._focus = null;
    this.camera = camera;
    this.renderer = renderer;
    this.set(options);
  }
  /** Gets the current placement of the gizmo relative to its container. */
  get placement() {
    return this._placement;
  }
  /**
   * Sets and update the placement of the gizmo relative to its container.
   *
   * @param placement - The new placement position
   */
  set placement(placement) {
    this._placement = setDomPlacement(this._domElement, placement);
    this.domUpdate();
  }
  /**
   * Regenerates the gizmo with the new options.
   *
   * @remarks
   * - Not recommended for use in real-time rendering or animation loops
   * - Provides a way to completely rebuild the gizmo with new options
   * - Can be computationally expensive, so use sparingly
   */
  set(options = {}) {
    this.dispose();
    this.options = options;
    this._options = optionsFallback(options);
    this._camera = this._options.isSphere ? new OrthographicCamera(-1.8, 1.8, 1.8, -1.8, 5, 10) : new PerspectiveCamera(26, 1, 5, 10);
    this._camera.position.set(0, 0, 7);
    const [axes, background, lines] = axesObjects(this._options);
    if (background) this.add(background);
    if (lines) this.add(lines);
    this.add(...axes);
    this._background = background;
    this._intersections = axes;
    const { container, animated, speed } = this._options;
    this.animated = animated;
    this.speed = speed;
    this._container = container ? getDomElement(container) : document.body;
    this._domElement = gizmoDomElement(this._options);
    this._domElement.onpointerdown = (e) => this._onPointerDown(e);
    this._domElement.onpointermove = (e) => this._onPointerMove(e);
    this._domElement.onpointerleave = () => this._onPointerLeave();
    this._container.appendChild(this._domElement);
    if (this._controls) this.attachControls(this._controls);
    this.update();
    return this;
  }
  /**
   * Renders the gizmo to the screen.
   * This method handles viewport and scissor management to ensure the gizmo
   * renders correctly without affecting the main scene rendering.
   *
   * @returns The gizmo instance for method chaining
   */
  render() {
    if (this.animating) this._animate();
    const { renderer, _viewport } = this;
    const _prevScissorTest = renderer.getScissorTest();
    const _prevAutoClear = renderer.autoClear;
    renderer.autoClear = false;
    renderer.setViewport(_viewport);
    if (_prevScissorTest) renderer.setScissor(_viewport);
    renderer.clear(false, true, false);
    renderer.render(this, this._camera);
    renderer.setViewport(this._originalViewport);
    if (_prevScissorTest) renderer.setScissor(this._originalScissor);
    renderer.autoClear = _prevAutoClear;
    return this;
  }
  /**
   * Updates the gizmo's DOM-related properties based on its current position
   * and size in the document.
   *
   * @returns The gizmo instance for method chaining
   */
  domUpdate() {
    this._domRect = this._domElement.getBoundingClientRect();
    const renderer = this.renderer;
    const domRect = this._domRect;
    const containerRect = renderer.domElement.getBoundingClientRect();
    this._viewport.set(
      domRect.left - containerRect.left,
      renderer.domElement.clientHeight - (domRect.top - containerRect.top + domRect.height),
      domRect.width,
      domRect.height
    );
    renderer.getViewport(this._originalViewport);
    if (renderer.getScissorTest()) renderer.getScissor(this._originalScissor);
    return this;
  }
  /**
   * Updates the gizmo's orientation to match the current camera orientation.
   *
   * @returns The gizmo instance for method chaining
   */
  cameraUpdate() {
    this._updateOrientation();
    return this;
  }
  /**
   * Performs a complete update of the gizmo, including both DOM and camera-related updates.
   *
   * @param controls - Internal. Set to `false` if the update event comes from the attached controls.
   *
   * @returns The gizmo instance for method chaining
   */
  update(controls = true) {
    if (controls && this._controls) this._controls.update();
    return this.domUpdate().cameraUpdate();
  }
  /**
   * Connects OrbitControls with the gizmo, handling interaction states and updates.
   * Automatically detaches any previously attached controls.
   *
   * @param controls - The scene's {@link https://threejs.org/docs/#examples/en/controls/OrbitControls OrbitControls}
   */
  attachControls(controls) {
    this.detachControls();
    this.target = controls.target;
    this._controlsListeners = {
      start: () => controls.enabled = false,
      end: () => controls.enabled = true,
      change: () => this.update(false)
    };
    this.addEventListener("start", this._controlsListeners.start);
    this.addEventListener("end", this._controlsListeners.end);
    controls.addEventListener("change", this._controlsListeners.change);
    this._controls = controls;
    return this;
  }
  /** Removes all control event listeners and references. Safe to call multiple times. */
  detachControls() {
    if (!this._controlsListeners || !this._controls) return;
    this.target = new Vector3().copy(this._controls.target);
    this.removeEventListener("start", this._controlsListeners.start);
    this.removeEventListener("end", this._controlsListeners.end);
    this._controls.removeEventListener(
      "change",
      this._controlsListeners.change
    );
    this._controlsListeners = void 0;
    this._controls = void 0;
    return this;
  }
  /** Cleans up all resources including geometries, materials, textures, and event listeners. */
  dispose() {
    this.detachControls();
    this.children.forEach((child) => {
      this.remove(child);
      const mesh = child;
      mesh.material?.dispose();
      mesh.material?.map?.dispose();
      mesh.geometry?.dispose();
    });
    this._domElement?.remove();
  }
  /**
   * Updates the gizmo's orientation either based on the camera or internal state.
   *
   * @private
   * @param fromCamera - Whether to update based on camera orientation (true) or internal state (false)
   */
  _updateOrientation(fromCamera = true) {
    if (fromCamera) {
      this.quaternion.copy(this.camera.quaternion).invert();
      this.updateMatrixWorld();
    }
    updateAxis(this._options, this._intersections, this.camera);
  }
  /**
   * Handles the animation of camera position and orientation changes.
   *
   * @private
   */
  _animate() {
    const { position, quaternion } = this.camera;
    position.set(0, 0, 1);
    if (!this.animated) {
      position.applyQuaternion(this._quaternionEnd).multiplyScalar(this._distance).add(this.target);
      quaternion.copy(this._targetQuaternion);
      this._updateOrientation();
      this.animating = false;
      this.dispatchEvent({ type: "change" });
      this.dispatchEvent({ type: "end" });
      return;
    }
    const delta = this._clock.getDelta();
    const step = delta * GIZMO_TURN_RATE * this.speed;
    this._quaternionStart.rotateTowards(this._quaternionEnd, step);
    position.applyQuaternion(this._quaternionStart).multiplyScalar(this._distance).add(this.target);
    quaternion.rotateTowards(this._targetQuaternion, step);
    this._updateOrientation();
    requestAnimationFrame(() => this.dispatchEvent({ type: "change" }));
    if (this._quaternionStart.angleTo(this._quaternionEnd) < EPSILON) {
      this.animating = false;
      this.dispatchEvent({ type: "end" });
    }
  }
  /**
   * Sets the camera orientation to look at the target from a specific axis.
   *
   * @private
   * @param position - The axis point position
   */
  _setOrientation(position) {
    const camera = this.camera;
    const focusPoint = this.target;
    this._targetPosition.copy(position).multiplyScalar(this._distance);
    _matrix.setPosition(this._targetPosition).lookAt(this._targetPosition, this.position, this.up);
    this._targetQuaternion.setFromRotationMatrix(_matrix);
    this._targetPosition.add(focusPoint);
    _matrix.lookAt(this._targetPosition, focusPoint, this.up);
    this._quaternionEnd.setFromRotationMatrix(_matrix);
    _matrix.setPosition(camera.position).lookAt(camera.position, focusPoint, this.up);
    this._quaternionStart.setFromRotationMatrix(_matrix);
    this.animating = true;
    this._clock.start();
    this.dispatchEvent({ type: "start" });
  }
  /**
   * Handles the pointer down event for starting drag operations.
   *
   * @private
   * @param e - The pointer event
   */
  _onPointerDown(e) {
    if (!this.enabled) return;
    const drag = (e2) => {
      if (!this._dragging) {
        if (isClick(e2, this._pointerStart)) return;
        this._dragging = true;
      }
      const pointerAngle = _vec2.set(e2.clientX, e2.clientY).sub(this._pointerStart).multiplyScalar(1 / this._domRect.width * Math.PI);
      const spherical = _spherical.setFromVector3(
        _vec3.subVectors(this.camera.position, this.target)
      );
      spherical.theta = initialTheta - pointerAngle.x;
      spherical.phi = clamp(
        initialPhi - pointerAngle.y,
        EPSILON,
        Math.PI - EPSILON
      );
      this.camera.position.setFromSpherical(spherical).add(this.target);
      this.camera.lookAt(this.target);
      this.quaternion.copy(this.camera.quaternion).invert();
      this._updateOrientation(false);
      this.dispatchEvent({ type: "change" });
    };
    const endDrag = () => {
      document.removeEventListener("pointermove", drag, false);
      document.removeEventListener("pointerup", endDrag, false);
      if (!this._dragging) return this._handleClick(e);
      if (this._focus) {
        axisHover(this._focus, false);
        this._focus = null;
      }
      this._dragging = false;
      this.dispatchEvent({ type: "end" });
    };
    if (this.animating) return;
    e.preventDefault();
    this._pointerStart.set(e.clientX, e.clientY);
    const initialSpherical = new Spherical().setFromVector3(
      _vec3.subVectors(this.camera.position, this.target)
    );
    const initialTheta = initialSpherical.theta;
    const initialPhi = initialSpherical.phi;
    this._distance = initialSpherical.radius;
    document.addEventListener("pointermove", drag, false);
    document.addEventListener("pointerup", endDrag, false);
    this.dispatchEvent({ type: "start" });
  }
  /**
   * Handles pointer move events for hover effects and drag operations.
   *
   * @private
   * @param e - The pointer event
   */
  _onPointerMove(e) {
    if (!this.enabled || this._dragging) return;
    if (this._background) updateBackground(this._background, true);
    this._handleHover(e);
  }
  /**
   * Handles pointer leave events to reset hover states.
   *
   * @private
   */
  _onPointerLeave() {
    if (!this.enabled || this._dragging) return;
    if (this._background) updateBackground(this._background, false);
    if (this._focus) axisHover(this._focus, false);
    this._domElement.style.cursor = "";
  }
  /**
   * Handles click events for axis selection.
   *
   * @private
   * @param e - The pointer event
   */
  _handleClick(e) {
    const intersection = intersectedObjects(
      e,
      this._domRect,
      this._camera,
      this._intersections
    );
    if (this._focus) {
      axisHover(this._focus, false);
      this._focus = null;
    }
    if (!intersection) return;
    this._setOrientation(intersection.object.position);
    this.dispatchEvent({ type: "change" });
  }
  /**
   * Handles hover effects for interactive elements.
   *
   * @private
   * @param e - The pointer event
   */
  _handleHover(e) {
    const intersection = intersectedObjects(
      e,
      this._domRect,
      this._camera,
      this._intersections
    );
    const object = intersection?.object || null;
    if (this._focus === object) return;
    this._domElement.style.cursor = object ? "pointer" : "";
    if (this._focus) axisHover(this._focus, false);
    if (this._focus = object) axisHover(object, true);
    else updateAxis(this._options, this._intersections, this.camera);
  }
}

const {defineComponent:_defineComponent} = await importShared('vue');

const {watch,toRaw,useAttrs} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "viewportGizmo",
  setup(__props) {
    const { camera, controls, renderer, sizes } = Fs();
    const attrs = useAttrs();
    const viewportConfig = { ...toRaw(attrs) };
    const gizmo = new ViewportGizmo(toRaw(camera.value), toRaw(renderer), viewportConfig);
    watch(
      () => controls.value,
      (cc) => {
        if (cc) {
          gizmo.attachControls(toRaw(cc));
          console.log("gizmo attached to controls");
        }
      },
      { immediate: true }
    );
    watch(
      [sizes.width, sizes.height],
      () => {
        gizmo.update();
      },
      {
        immediate: true
      }
    );
    const { onRender } = _l();
    onRender(() => {
      gizmo.render();
    }, 1);
    return (_ctx, _cache) => {
      return null;
    };
  }
});

export { _sfc_main };
//# sourceMappingURL=viewportGizmo.vue_vue_type_script_setup_true_lang.Df9F-KR41767105581793.js.map
