import {
  changeFaceColor
} from "../../../../src/core/lib3d/utils.js";
import {
  CabinetData
} from "../../../../src/core/lib3d/CabinetData.js";
import { ConvexHull } from "../../../static/lib/threejs/jsm/math/ConvexHull.js"


export class DXF_Cutter {
  constructor(svgData) {
    this.svgData = svgData;

  }

  cutBySVGPath(currentMesh) {
    const loader = new THREE.SVGLoader();
    const svgPaths = loader.parse(this.svgData);
    console.log(svgPaths);
    const normalMat = new THREE.MeshNormalMaterial();
    const yellowMat = new THREE.MeshBasicMaterial({
      color: 0xffff00
    });
    var material = null;


    const combinedShape = new THREE.Shape();


    svgPaths.paths.forEach((path, index) => {
      const shapes = path.toShapes(true);
      shapes.forEach((shape, shapeIndex) => {
        if (index === 0 && shapeIndex === 0) {
          // 将第一个path作为第一个封闭shape，第一个path为大板子
          combinedShape.copy(shape);
        } else {
          // 后续的path作为孔洞加进来
          combinedShape.holes.push(shape);
          // combinedShape.curves.push(...shape.curves);
        }
      });
    });

    //挤压总体的二维的combinedShape作为三维geometry
    const extrudeSettings = {
      depth: 20,
      bevelEnabled: false
    };
    const geometry = new THREE.ExtrudeGeometry(combinedShape, extrudeSettings);


    // 坐标归零        
    geometry.computeBoundingBox();
    const boundingBox = geometry.boundingBox;

    // 计算需要平移的量，以将边界框中心移至原点
    const offset = boundingBox.getCenter(new THREE.Vector3()).negate();
    // 对几何体应用平移
    geometry.translate(offset.x, offset.y, offset.z);

    // 手动生成UV坐标 ,为了后续赋予纹理map
    geometry.computeBoundingBox();
    const max = geometry.boundingBox.max;
    const min = geometry.boundingBox.min;
    const offset1 = new THREE.Vector2(0 - min.x, 0 - min.y);
    const range = new THREE.Vector2(max.x - min.x, max.y - min.y);

    geometry.faceVertexUvs[0] = [];
    geometry.faces.forEach(function(face) {
      const v1 = geometry.vertices[face.a];
      const v2 = geometry.vertices[face.b];
      const v3 = geometry.vertices[face.c];

      geometry.faceVertexUvs[0].push([
        new THREE.Vector2((v1.x + offset1.x) / range.x, (v1.y + offset1.y) / range.y),
        new THREE.Vector2((v2.x + offset1.x) / range.x, (v2.y + offset1.y) / range.y),
        new THREE.Vector2((v3.x + offset1.x) / range.x, (v3.y + offset1.y) / range.y)
      ]);
    });
    geometry.uvsNeedUpdate = true;


    console.log(currentMesh);

    // 加载纹理
    var textureLoader = new THREE.TextureLoader();
    var texture = textureLoader.load("../img/floor2.jpg");
    material = new THREE.MeshBasicMaterial({ color: 0x000000,map: texture });  // 黑色基础材质

    // 创建球体的几何形状
  //  let geometry1 = new THREE.SphereGeometry(320, 32, 32);

    const mesh = new THREE.Mesh(geometry, material);

    // 设置异形板的横竖
    let boardType = currentMesh.mJsonData.type;
    let boardDefaultRotateX = currentMesh.mJsonData.rotateX;
    let boardDefaultRotateY = currentMesh.mJsonData.rotateY;
    let boardDefaultRotateZ = currentMesh.mJsonData.rotateZ;
    switch (boardType) {
      case "前板":
        console.log(boardType);
        mesh.rotation.order = 'XYZ';
        mesh.rotation.x = THREE.MathUtils.degToRad(boardDefaultRotateX);
        mesh.rotation.y = THREE.MathUtils.degToRad(boardDefaultRotateY);
        mesh.rotation.z = THREE.MathUtils.degToRad(boardDefaultRotateZ);

        break;
      case "顶板":
        mesh.rotation.order = 'YZX';
        mesh.rotation.x = THREE.MathUtils.degToRad(90 + parseInt(boardDefaultRotateX)); //围绕x轴旋转90°是顶板的水平样子，再加上读取的要替换的板子的X旋转值，便可效果一致
        mesh.rotation.y = THREE.MathUtils.degToRad(boardDefaultRotateY);
        mesh.rotation.z = THREE.MathUtils.degToRad(boardDefaultRotateZ);
        break;
      case "左侧板":
        mesh.rotation.order = 'XZY';
        mesh.rotation.x = THREE.MathUtils.degToRad(boardDefaultRotateX);
        mesh.rotation.y = THREE.MathUtils.degToRad(90 + parseInt(boardDefaultRotateY)); //围绕y轴旋转90°是左侧板的竖直样子，再加上读取的要替换的板子的y旋转值，便可效果一致
        mesh.rotation.z = THREE.MathUtils.degToRad(boardDefaultRotateZ);
        break;
    }

    //存储旋转角,弧度制
    currentMesh.mJsonData.rotateX = mesh.rotation.x * (180 / Math.PI);
    currentMesh.mJsonData.rotateY = mesh.rotation.y * (180 / Math.PI);
    currentMesh.mJsonData.rotateZ = mesh.rotation.z * (180 / Math.PI);

    // 设置位置
    let x = eval(currentMesh.mJsonData.m_vPos.x)
    let y = eval(currentMesh.mJsonData.m_vPos.y)
    let z = eval(currentMesh.mJsonData.m_vPos.z)
    mesh.position.set(x, y, z);
    


    // 属性保存
    // const userData = currentMesh.mMesh.userData;
    // /* 替换板子 */
    // mesh.userData = userData;//保存的这个属性是干嘛的？
    // currentMesh.mUnit.mGroup.remove(currentMesh.mMesh) //移除当前场景选中的板子
    // currentMesh.mUnit.mGroup.remove(currentMesh.mBoundingBox)

    window.mSceneClass.mCabinetClass.mCurUnit.OnDeleteParts(currentMesh); //从数组array删除原来obj，清除原来obj下的mesh和boundingbox
    currentMesh.mMesh = mesh;
    currentMesh.mMesh.name = "异形板";
    currentMesh.mJsonData.name = "异形板";
    currentMesh.mUnit.mGroup.add(mesh);
    window.mSceneClass.mCabinetClass.mCurUnit.mArray.push(currentMesh);

    //边缘线线框
    // var edgesMtl = new THREE.LineBasicMaterial({ color: 0x000000 });
    // var coneEdges = new THREE.EdgesGeometry(currentMesh.mMesh.geometry, 0.1);
    // let mBoundingBox = new THREE.LineSegments(coneEdges, edgesMtl);
    // mBoundingBox.position.copy(mesh.position);
    // mBoundingBox.rotation.copy(mesh.rotation);
    // currentMesh.mBoundingBox = mBoundingBox;
    // currentMesh.mUnit.mGroup.add(mBoundingBox);

    var edgesMtl = new THREE.LineBasicMaterial({ color: 0x000000 });
    var coneEdges = new THREE.EdgesGeometry(currentMesh.mMesh.geometry, 1);
    // 调用函数创建并添加到场景中
    var mBoundingBox = new THREE.LineSegments(coneEdges, edgesMtl);
    // var mBoundingBox = this.createThickEdges(coneEdges, edgesMtl, 5, 0.0001);
    mBoundingBox.renderOrder = 1;
    mBoundingBox.position.copy(mesh.position);
    mBoundingBox.rotation.copy(mesh.rotation);
    currentMesh.mBoundingBox = mBoundingBox;
    currentMesh.mUnit.mGroup.add(mBoundingBox);


    currentMesh.mMesh = window.footTools.AdduserDataProperties(currentMesh.mMesh,{
      pic: window.MaterialProperties,
      wrap: "N",
      },currentMesh);
    

    changeFaceColor(currentMesh.mMesh, currentMesh.mJsonData);


    currentMesh.mJsonData.svgDataElement = this.svgData;//保存svg标签数据，供保存场景使用
    this.getPath(currentMesh);
  }

  getPath(currentMesh) {
    const svgDataElementPaths = document.getElementById('main-svg').querySelectorAll('path');
    let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
    svgDataElementPaths.forEach(path => {
        const pathData = path.getAttribute('d');
        const points = this.parsePathData(pathData);
        points.forEach(point => {
            minX = Math.min(minX, point[0]);
            minY = Math.min(minY, point[1]);
            maxX = Math.max(maxX, point[0]);
            maxY = Math.max(maxY, point[1]);
        });
    });

    const centerX = (minX + maxX) / 2;
    const centerY = (minY + maxY) / 2;
    const width = maxX - minX;
    const height = maxY - minY;
    // 保存宽高
    currentMesh.mJsonData.width = width;
    currentMesh.mJsonData.height = height;

    const transformedPaths = Array.from(svgDataElementPaths).map(path => {
        const originalData = path.getAttribute('d');
        const transformedData = this.transformPathData(originalData, centerX, centerY);
        return {
            id: path.id,
            transformedData
        };
    });

    var jointPath = "";


    // 输出新的SVG
    transformedPaths.forEach(({ transformedData }, index) => {
        // if (index > 0) {
        //     jointPath += ' ';
        // }
        if (index === transformedPaths.length - 1) {
          jointPath += `${transformedData}`;
          console.log(`${transformedData}`);
       }else {
        console.log(`${transformedData}`);
        jointPath += `${transformedData};`;
      }
    });

    let cutPathData = {
        ID: 0,
        Width: width.toFixed(0),
        Height: height.toFixed(0),
        Desc: "yixingPath",
        Var: "",
        Path: jointPath,
    }
    currentMesh.mJsonData.cutPathData = cutPathData

    console.log(cutPathData);
}

// 解析路径数据
parsePathData(pathData) {
  const commands = pathData.match(/[a-df-z][^a-df-z]*/ig);
  const points = [];
  let currentPoint = [0, 0];

  commands.forEach(command => {
      const type = command[0];
      const values = command.slice(1).trim().split(/[\s,]+/).map(Number);
      switch (type) {
          case 'M':
              currentPoint = [values[0], values[1]];
              points.push([...currentPoint]);
              break;
          case 'L':
              currentPoint = [values[0], values[1]];
              points.push([...currentPoint]);
              break;
          case 'H':
              currentPoint[0] = values[0];
              points.push([...currentPoint]);
              break;
          case 'V':
              currentPoint[1] = values[0];
              points.push([...currentPoint]);
              break;
          case 'A':
              currentPoint = [values[5], values[6]];
              points.push([...currentPoint]);
              break;
          // 可以根据需要处理其他命令
      }
  });

  return points;
}

// 转换路径数据到相对坐标
transformPathData(pathData, centerX, centerY) {
  const commands = pathData.match(/[a-df-z][^a-df-z]*/ig);
  const transformedCommands = commands.map((command, index) => {
      const type = command[0];
      const values = command.slice(1).trim().split(/[\s,]+/).map(Number);
      let result;
      switch (type) {
          case 'M':
          case 'L':
              result = `${type} ${(values[0] - centerX).toFixed(2)},${(values[1] - centerY).toFixed(2)}`;
              break;
          case 'H':
              result = `${type} ${(values[0] - centerX).toFixed(2)}`;
              break;
          case 'V':
              result = `${type} ${(values[0] - centerY).toFixed(2)}`;
              break;
          case 'A':
              // 转换弧线命令中的终点坐标
              result = `${type} ${values[0].toFixed(2)},${values[1].toFixed(2)} ${values[2].toFixed(2)} ${values[3].toFixed(2)},${values[4].toFixed(2)} ${(values[5] - centerX).toFixed(2)},${(values[6] - centerY).toFixed(2)}`;
              break;
          // 可以根据需要处理其他命令
          default:
              result = command;
      }
      // 对于最后一个命令不加分号
      return index === commands.length - 1 ? result : result + ';';
  });
  return transformedCommands.join(' ') + ' Z';
}

// 通过叠加多条线条来实现更粗的效果
createThickEdges(geometry, material, width, scaleStep) {
  var edgesGroup = new THREE.Group();
  
  for (var i = 0; i < width; i++) {
      var line = new THREE.LineSegments(geometry, material);
      var scale = 1 + i * scaleStep;
      line.scale.set(scale, scale, scale);
      edgesGroup.add(line);
  }
  
  return edgesGroup;
}
 


  computeScale(currentMesh, orignMesh) {
    scene.updateMatrixWorld(true, true);
    // orignMesh.geometry.boundingBox.applyMatrix4(orignMesh.matrixWorld);
    const originalBox = new THREE.Box3().setFromObject(orignMesh);
    const originalSize = new THREE.Vector3();
    originalBox.getSize(originalSize);
    const currentMeshBox = new THREE.Box3().setFromObject(currentMesh);
    const helper = new THREE.Box3Helper(originalBox, new THREE.Color('red'));
    scene.add(helper);
    const currentMeshSize = new THREE.Vector3();
    currentMeshBox.getSize(currentMeshSize);
    console.log(currentMeshSize, originalSize);
    const scale = currentMeshSize.divide(originalSize);

    return scale;

  }
  convertShapeGeometriesToGeometry(extrudeGeometries) {
    // 创建一个空的 Geometry 实例
    var geometry = new THREE.Geometry();

    // 遍历所有的 ExtrudeGeometry
    for (var i = 0; i < extrudeGeometries.length; i++) {
      var extrudeGeometry = extrudeGeometries[i];

      // 获取 ExtrudeGeometry 的顶点和面数据
      var vertices = extrudeGeometry.vertices;
      var faces = extrudeGeometry.faces;

      // 计算顶点索引的偏移量
      var vertexOffset = geometry.vertices.length;

      // 复制 ExtrudeGeometry 中的顶点数据到 Geometry 中
      geometry.vertices = geometry.vertices.concat(vertices);

      // 复制 ExtrudeGeometry 中的面数据到 Geometry 中
      for (var j = 0; j < faces.length; j++) {
        var face = faces[j];
        // 需要根据顶点索引的偏移量进行调整
        geometry.faces.push(new THREE.Face3(face.a + vertexOffset, face.b + vertexOffset, face.c + vertexOffset));
      }
    }

    // 返回新的 Geometry 实例
    return geometry;
  }
}
