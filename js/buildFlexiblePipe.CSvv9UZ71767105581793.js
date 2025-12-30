import { importShared } from './index.BxB45aCK1767105581793.js';

const THREE = await importShared('three');

class Arc3Curve extends THREE.Curve {
  constructor(center, xAxis, yAxis, radius, startAngle, deltaAngle) {
    super();
    this.center = center.clone();
    this.xAxis = xAxis.clone().normalize();
    this.yAxis = yAxis.clone().normalize();
    this.radius = radius;
    this.startAngle = startAngle;
    this.deltaAngle = deltaAngle;
  }
  getPoint(t, optionalTarget) {
    const a = this.startAngle + this.deltaAngle * t;
    const cos = Math.cos(a), sin = Math.sin(a);
    const p = (optionalTarget || new THREE.Vector3()).copy(this.xAxis).multiplyScalar(cos * this.radius).addScaledVector(this.yAxis, sin * this.radius).add(this.center);
    return p;
  }
}
function buildRoundedPath(points, radius, arcSegments = 16) {
  const EPS = 1e-6;
  const path = new THREE.CurvePath();
  if (points.length < 2) return path;
  let lastAddedPoint = points[0].clone();
  const almostEqual = (a, b) => a.distanceToSquared(b) < 1e-8;
  for (let i = 1; i < points.length - 1; i++) {
    const pPrev = points[i - 1].clone();
    const pCurr = points[i].clone();
    const pNext = points[i + 1].clone();
    const v1 = pPrev.clone().sub(pCurr);
    const v2 = pNext.clone().sub(pCurr);
    const l1 = v1.length();
    const l2 = v2.length();
    if (l1 < EPS || l2 < EPS) {
      if (!almostEqual(lastAddedPoint, pCurr)) path.add(new THREE.LineCurve3(lastAddedPoint.clone(), pCurr.clone()));
      lastAddedPoint = pCurr.clone();
      continue;
    }
    const u1 = v1.clone().normalize();
    const u2 = v2.clone().normalize();
    const cosPhi = THREE.MathUtils.clamp(u1.dot(u2), -1, 1);
    const phi = Math.acos(cosPhi);
    if (phi < 1e-4) {
      if (!almostEqual(lastAddedPoint, pCurr)) path.add(new THREE.LineCurve3(lastAddedPoint.clone(), pCurr.clone()));
      lastAddedPoint = pCurr.clone();
      continue;
    }
    const tDesired = radius / Math.tan(phi / 2);
    const tMax = Math.min(l1, l2) - 1e-6;
    const t = Math.min(tDesired, Math.max(0, tMax));
    if (t <= 1e-6) {
      if (!almostEqual(lastAddedPoint, pCurr)) path.add(new THREE.LineCurve3(lastAddedPoint.clone(), pCurr.clone()));
      lastAddedPoint = pCurr.clone();
      continue;
    }
    const actualR = t * Math.tan(phi / 2);
    const bis = u1.clone().add(u2);
    if (bis.length() < 1e-6) {
      if (!almostEqual(lastAddedPoint, pCurr)) path.add(new THREE.LineCurve3(lastAddedPoint.clone(), pCurr.clone()));
      lastAddedPoint = pCurr.clone();
      continue;
    }
    const bisNorm = bis.clone().normalize();
    const centerDist = actualR / Math.sin(phi / 2);
    const center = pCurr.clone().add(bisNorm.multiplyScalar(centerDist));
    const pA = pCurr.clone().add(u1.clone().multiplyScalar(t));
    const pB = pCurr.clone().add(u2.clone().multiplyScalar(t));
    const vStart = pA.clone().sub(center);
    let xAxis = vStart.clone().normalize();
    const planeNormal = v1.clone().cross(v2);
    if (planeNormal.length() < 1e-7) {
      if (!almostEqual(lastAddedPoint, pCurr)) path.add(new THREE.LineCurve3(lastAddedPoint.clone(), pCurr.clone()));
      lastAddedPoint = pCurr.clone();
      continue;
    }
    const yAxis = planeNormal.clone().normalize().cross(xAxis).normalize();
    const startAngle = Math.atan2(vStart.dot(yAxis), vStart.dot(xAxis));
    const vEnd = pB.clone().sub(center);
    const endAngle = Math.atan2(vEnd.dot(yAxis), vEnd.dot(xAxis));
    let delta = endAngle - startAngle;
    while (delta <= -Math.PI) delta += Math.PI * 2;
    while (delta > Math.PI) delta -= Math.PI * 2;
    if (!almostEqual(lastAddedPoint, pA)) {
      path.add(new THREE.LineCurve3(lastAddedPoint.clone(), pA.clone()));
    }
    const arcCurve = new Arc3Curve(center, xAxis, yAxis, actualR, startAngle, delta);
    path.add(arcCurve);
    lastAddedPoint = pB.clone();
  }
  const lastPoint = points[points.length - 1].clone();
  if (!lastAddedPoint.equals(lastPoint) && lastAddedPoint.distanceToSquared(lastPoint) > 1e-8) {
    path.add(new THREE.LineCurve3(lastAddedPoint.clone(), lastPoint.clone()));
  }
  return path;
}

export { buildRoundedPath };
//# sourceMappingURL=buildFlexiblePipe.CSvv9UZ71767105581793.js.map
