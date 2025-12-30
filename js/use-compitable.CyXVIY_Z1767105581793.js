import { importShared } from './index.BxB45aCK1767105581793.js';

const {computed} = await importShared('vue');

function useCompitable(reactive, keys) {
    // @ts-expect-error
    return computed(() => {
        for (const key of keys) {
            if (reactive[key] !== undefined)
                return reactive[key];
        }
        return reactive[keys[keys.length - 1]];
    });
}

export { useCompitable };
//# sourceMappingURL=use-compitable.CyXVIY_Z1767105581793.js.map
