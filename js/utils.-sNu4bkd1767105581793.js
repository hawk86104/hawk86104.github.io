import { importShared, request } from './index.BxB45aCK1767105581793.js';
import { useTexture$1 as useTexture } from './customShaderMaterial.vue_vue_type_script_setup_true_lang.rDMIDGqx1767105581793.js';
import './index.vue_vue_type_script_setup_true_lang.D7-hpzmy1767105581793.js';
import { Water } from './Water2.DO8AhgFS1767105581793.js';
import { computeBoundsTree, disposeBoundsTree, acceleratedRaycast } from './ExtensionUtilities.DzCxl7kb1767105581793.js';

/*
 * @Description:
 * @Version: 1.668
 * @Autor: 地虎降天龙
 * @Date: 2023-11-09 09:33:51
 * @LastEditors: 地虎降天龙
 * @LastEditTime: 2025-09-26 16:16:21
 */
const {BufferAttribute,Box3,Vector3,RepeatWrapping,Color,Mesh,PlaneGeometry,Vector2,DoubleSide,Material,MeshBasicMaterial,BufferGeometry,Matrix4} = await importShared('three');

//重置UV 是否从中点 还是左上角的点
const resetUV = (geometry, isCenter = false) => {
    geometry.computeBoundingBox();
    const { max, min } = geometry.boundingBox;
    geometry.deleteAttribute('uv');
    const roomX = max.x - min.x;
    const roomY = max.y - min.y;
    const PuvList = [];
    for (let i = 0; i < geometry.attributes.position.count; i++) {
        if (isCenter) {
            PuvList.push((geometry.attributes.position.getX(i) - (min.x + max.x) / 2) / roomX);
            PuvList.push((geometry.attributes.position.getY(i) - (min.y + max.y) / 2) / roomY);
        } else {
            PuvList.push((geometry.attributes.position.getX(i) - min.x) / roomX);
            PuvList.push((geometry.attributes.position.getY(i) - min.y) / roomY);
        }
    }
    const Puvs = new Float32Array(PuvList);
    geometry.setAttribute('uv', new BufferAttribute(Puvs, 2));
};
const loadGeojson = (filepath, dataType) =>
    new Promise((resolve, reject) => {
        request(filepath, {}, { method: 'get', mergeRequest: true, responseType: 'json' })
            .then((res) => {
                if (dataType) {
                    resolve(res[dataType]);
                }
                resolve(res.features);
            })
            .catch((err) => {
                console.error(err);
                reject(err);
            });
    });

//自适应 几何中心 外面要再包一层
const adjustGroupCenter = (group) => {
    const box = new THREE.Box3().setFromObject(group);
    // 计算 Group 的几何中心
    const center = new THREE.Vector3();
    box.getCenter(center);
    // 调整每个子物体的位置，使 Group 的几何中心位于原点
    group.children.forEach((child) => {
        child.position.sub(center);
    });
    // 移动整个 Group 使几何中心对齐
    group.position.copy(center.negate());
};

const initMeshBvh = () => {
    BufferGeometry.prototype.computeBoundsTree = computeBoundsTree;
    BufferGeometry.prototype.disposeBoundsTree = disposeBoundsTree;
    Mesh.prototype.raycast = acceleratedRaycast;
};
const setThreeWater2 = async (mesh) => {
    const textures = await useTexture(['./plugins/water/images/Water_1_M_Normal.jpg', './plugins/water/images/Water_2_M_Normal.jpg']);
    const waterGeometry = mesh.geometry.clone();
    resetUV(waterGeometry);
    waterGeometry.computeBoundsTree();
    const tsWater = new Water(waterGeometry, {
        color: new Color('#fff'),
        scale: 20,
        flowDirection: new Vector2(1, 1),
        textureWidth: 1024,
        textureHeight: 1024,
        normalMap0: textures[0],
        normalMap1: textures[1],
    });
    tsWater.material.transparent = true;
    tsWater.material.depthWrite = true;
    tsWater.material.depthTest = true;
    tsWater.material.side = DoubleSide;
    tsWater.material.uniforms.config.value.w = 20;
    tsWater.material.uniforms.reflectivity.value = 0.46;
    return tsWater
};

function getcenterPoint(list) {
    const points = [];
    for (let i = 0; i < list.length; i++) {
        points.push(new Vector2(list[i].x, list[i].y));
    }

    // 初始化中心点
    const centerPoint = new Vector2();

    // 计算所有点的总和
    for (let i = 0; i < points.length; i++) {
        centerPoint.add(points[i]);
    }

    // 计算平均值
    centerPoint.divideScalar(points.length);

    // 将点转换为相对于中心点的偏移坐标
    for (let i = 0; i < points.length; i++) {
        points[i].sub(centerPoint);
    }

    return { points, centerPoint }
}

export { adjustGroupCenter, getcenterPoint, initMeshBvh, loadGeojson, resetUV, setThreeWater2 };
//# sourceMappingURL=utils.-sNu4bkd1767105581793.js.map
