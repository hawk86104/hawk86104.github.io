import { importShared } from './index.BxB45aCK1767105581793.js';
import { Tween, Easing } from './tween.esm.DW3Z4hQ71767105581793.js';
import { loadGeojson } from './utils.-sNu4bkd1767105581793.js';
import { mercator } from './mercator.CP32Fc3N1767105581793.js';

const THREE = await importShared('three');


const flyTo = (camera, target, controls, duration = 1000) => {
    const startPosition = camera.value.position.clone();
    const startLookAt = controls.value.target.clone();
    const targetPosition = target.clone();
    const targetLookAt = target.clone();
    targetLookAt.y = 0;

    const tween = new Tween({
        x: startPosition.x,
        y: startPosition.y,
        z: startPosition.z,
        lookAtX: startLookAt.x,
        lookAtY: startLookAt.y,
        lookAtZ: startLookAt.z,
    })
        .to(
            {
                x: targetPosition.x,
                y: targetPosition.y,
                z: targetPosition.z,
                lookAtX: targetLookAt.x,
                lookAtY: targetLookAt.y,
                lookAtZ: targetLookAt.z,
            },
            duration,
        )
        .easing(Easing.Quadratic.InOut)
        .onUpdate((e) => {
            camera.value.position.set(e.x, e.y, e.z);
            controls.value.target.set(e.lookAtX, e.lookAtY, e.lookAtZ);

            // 如下参数 若controls 的 enableDamping 拖动参数 为false时，不自动刷新 则需要加上
            // controls.value.position0.set(e.x, e.y, e.z)
            // camera.value.lookAt(e.x, e.y, e.z)
            // camera.value.updateProjectionMatrix()
            // controls.value.update()

            // 若移动后 最后一整会被重置 那么需要考虑 相机默认旋转朝上的 向量
            // <TresPerspectiveCamera :up="[0, 0, -1]" />
        })
        .start()
        .onComplete(() => {
            tween.stop();
        });

    return tween
};
const flyToNative = (camera, target, controls, offsetZ = [-2e3, -2e3], duration = 1000) => {
    const startPosition = camera.position.clone();
    const startLookAt = controls.target.clone();
    const targetPosition = target.clone();
    const targetLookAt = target.clone();
    targetLookAt.y = 0;
    targetLookAt.x = targetLookAt.x + offsetZ[0];
    targetLookAt.z = targetLookAt.z + offsetZ[1];

    const tween = new Tween({
        x: startPosition.x,
        y: startPosition.y,
        z: startPosition.z,
        lookAtX: startLookAt.x,
        lookAtY: startLookAt.y,
        lookAtZ: startLookAt.z,
    })
        .to(
            {
                x: targetPosition.x,
                y: targetPosition.y,
                z: targetPosition.z,
                lookAtX: targetLookAt.x,
                lookAtY: targetLookAt.y,
                lookAtZ: targetLookAt.z,
            },
            duration,
        )
        .easing(Easing.Quadratic.InOut)
        .onUpdate((e) => {
            camera.position.set(e.x, e.y, e.z);
            controls.target.set(e.lookAtX, e.lookAtY, e.lookAtZ);
        })
        .start()
        .onComplete(() => {
            tween.stop();
        });

    return tween
};

const getlinePoints = async (geojson) => {
    const linePrimary = await loadGeojson(geojson);
    // 墨卡托投影转换
    const projection = mercator().center(linePrimary[0].properties.center).translate([0, 0]).scale(1000);
    const points = [];
    linePrimary[0].geometry.coordinates[0].forEach((iOne) => {
        iOne.forEach((lineOne) => {
            const [x, y] = projection(lineOne);
            points.push([x, 0, y]);
        });
    });
    return points
};

// 输入: ECEF 笛卡尔坐标 (单位: 米)
// 输出: ENU 三个方向向量 (THREE.Vector3)
const getENUAxesFromCartesian = (cartesian) => {
    const x = cartesian.x,
        y = cartesian.y;
        cartesian.z;
    const lng = Math.atan2(y, x); // 经度

    // up 向量（指向地心->点，归一化）
    const up = cartesian.clone().normalize();

    // 初始 east（经度方向），z 分量为 0
    const east = new THREE.Vector3(-Math.sin(lng), Math.cos(lng), 0);

    // 把 east 在 up 上正交化（去掉 east 在 up 上的分量），然后归一化
    // 这样可以避免 east 与 up 不是严格正交引起的误差
    const proj = up.clone().multiplyScalar(east.dot(up));
    east.sub(proj).normalize();

    // north = up × east （保证右手坐标系）
    const north = new THREE.Vector3().crossVectors(up, east).normalize();

    return { east, north, up }
};

const applyTransform = (object, isRotation = true, isRranslation = true) => {
    if (isRotation || isRranslation) {
        const transform = new THREE.Matrix4();
        if (isRotation) {
            transform.multiply(object.userData.tilesData.rotationMatrix);
        }

        if (isRranslation) {
            transform.multiply(object.userData.tilesData.translationMatrix);
        }
        object.matrixAutoUpdate = false;
        object.matrix.identity();
        object.matrix.copy(transform);
    } else {
        object.matrix.copy(object.userData.tilesData.initialMatrix);
    }

    object.updateMatrixWorld(true);
};
// 对齐 tiles center
const alignmentCenter = (tiles, isRotation = true, isRranslation = true) => {
    tiles.group.userData.tilesData = {
        initialMatrix: tiles.group.matrix.clone(),
    };

    const box = new THREE.Box3();
    const sphere = new THREE.Sphere();
    const center = new THREE.Vector3();

    // 1) 获取中心（注意：不要把 tiles.group.position 传进去以免“篡改”它）
    if (tiles.getBoundingBox(box)) {
        box.getCenter(center);
    } else if (tiles.getBoundingSphere(sphere)) {
        center.copy(sphere.center);
    } else {
        console.warn('tiles 没有 bounding 信息');
        return
    }

    // 2) 计算 ENU 轴
    const { east, north, up } = getENUAxesFromCartesian(center);

    // 3) 构建旋转矩阵：makeBasis(east,north,up) 会创建一个把 local axes -> ECEF 的矩阵（列为 axis）
    //    我们需要把 ECEF 坐标转换到 ENU（也就是做 R_transpose * (p - center)），所以需要转置
    const basis = new THREE.Matrix4().makeBasis(east, north, up); // columns = east,north,up
    const rotation = basis.clone().transpose(); // ECEF -> ENU
    tiles.group.userData.tilesData.rotationMatrix = rotation.clone();

    // 4) 平移矩阵（把 center 移到原点）
    const translation = new THREE.Matrix4().makeTranslation(-center.x, -center.y, -center.z);
    tiles.group.userData.tilesData.translationMatrix = translation.clone();
    applyTransform(tiles.group, isRotation, isRranslation);
};

const is3DTilesetJson = async (url) => {
    // 1. 基础检查：后缀和文件名
    if (!url.toLowerCase().endsWith('.json')) {
        return false
    }

    try {
        // 2. 请求并解析
        const response = await fetch(url);
        if (!response.ok) return false

        const json = await response.json();

        // 3. 必须字段检查
        const hasRequiredKeys = typeof json.asset === 'object' && typeof json.geometricError !== 'undefined' && typeof json.root === 'object';

        // 4. 验证 asset.version
        const validVersion = json.asset?.version === '1.0' || json.asset?.version === '1.1';

        return hasRequiredKeys && validVersion
    } catch (e) {
        console.error('❌ 验证失败:', e);
        return false
    }
};

export { alignmentCenter, applyTransform, flyTo, flyToNative, getlinePoints, is3DTilesetJson };
//# sourceMappingURL=utils.uRDybWT71767105581793.js.map
