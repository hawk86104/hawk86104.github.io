import { importShared } from './index.BxB45aCK1767105581793.js';

const THREE = await importShared('three');


function shaderMaterial(uniforms, vertexShader, fragmentShader, onInit) {
  const entries = Object.entries(uniforms);
  class Material extends THREE.ShaderMaterial {
    static key = THREE.MathUtils.generateUUID();
    constructor(parameters) {
      super({
        uniforms: entries.reduce((acc, [name, value]) => {
          const uniform = THREE.UniformsUtils.clone({
            [name]: {
              value
            }
          });
          return {
            ...acc,
            ...uniform
          };
        }, {}),
        vertexShader,
        fragmentShader
      });
      for (const [name] of entries) {
        Object.defineProperty(this, name, {
          get: () => this.uniforms[name].value,
          set: v => this.uniforms[name].value = v
        });
      }
      Object.assign(this, parameters);
    }
  }
  return Material;
}

export { shaderMaterial };
//# sourceMappingURL=shaderMaterial.BXDL7cvO1767105581793.js.map
