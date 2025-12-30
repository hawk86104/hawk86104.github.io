import { importShared, _l, Fs, Kk, sz, Tz } from './index.BxB45aCK1767105581793.js';
import { Pane } from './tweakpane.Cvt5w0bb1767105581793.js';

/**
 * @description Loop Subdivision Surface
 * @about       Smooth subdivision surface modifier for use with three.js BufferGeometry.
 * @author      Stephens Nunnally <@stevinz>
 * @license     MIT - Copyright (c) 2022 Stephens Nunnally
 * @source      https://github.com/stevinz/three-subdivide
 */
/////////////////////////////////////////////////////////////////////////////////////
//
//  Functions
//      modify              Applies Loop subdivision to BufferGeometry, returns new BufferGeometry
//      edgeSplit           Splits all triangles at edges shared by coplanar triangles
//      flat                One iteration of Loop subdivision, without point averaging
//      smooth              One iteration of Loop subdivision, with point averaging
//
//  Info
//      This modifier uses the Loop (Charles Loop, 1987) subdivision surface algorithm to smooth
//      modern three.js BufferGeometry.
//
//      At one point, three.js included a subdivision surface modifier in the extended examples (see bottom
//      of file for links), it was removed in r125. The modifier was originally based on the Catmull-Clark
//      algorithm, which works best for geometry with convex coplanar n-gon faces. In three.js r60 the modifier
//      was changed to utilize the Loop algorithm. The Loop algorithm was designed to work better with triangle
//      based meshes.
//
//      The Loop algorithm, however, doesn't always provide uniform results as the vertices are
//      skewed toward the most used vertex positions. A triangle based box (e.g. BoxGeometry for example) will
//      tend to favor the corners. To alleviate this issue, this implementation includes an initial pass to split
//      coplanar faces at their shared edges. It starts by splitting along the longest shared edge first, and then
//      from that midpoint it splits to any remaining coplanar shared edges.
//
//      Also by default, this implementation inserts new uv coordinates, but does not average them using the Loop
//      algorithm. In some cases (often in flat geometries) this will produce undesired results, a
//      noticeable tearing will occur. In such cases, try passing 'uvSmooth' as true to enable uv averaging.
//
//  Note(s)
//      - This modifier returns a new BufferGeometry instance, it does not dispose() of the old geometry.
//
//      - This modifier returns a NonIndexed geometry. An Indexed geometry can be created by using the
//        BufferGeometryUtils.mergeVertices() function, see:
//        https://threejs.org/docs/?q=buffer#examples/en/utils/BufferGeometryUtils.mergeVertices
//
//      - This modifier works best with geometry whose triangles share edges AND edge vertices. See diagram below.
//
//          OKAY          NOT OKAY
//            O              O
//           /|\            / \
//          / | \          /   \
//         /  |  \        /     \
//        O---O---O      O---O---O
//         \  |  /        \  |  /
//          \ | /          \ | /
//           \|/            \|/
//            O              O
//
//  Reference(s)
//      - Subdivision Surfaces
//          https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/thesis-10.pdf
//          https://en.wikipedia.org/wiki/Loop_subdivision_surface
//          https://cseweb.ucsd.edu/~alchern/teaching/cse167_fa21/6-3Surfaces.pdf
//
//      - Original three.js SubdivisionModifier, r124 (Loop)
//          https://github.com/mrdoob/three.js/blob/r124/examples/jsm/modifiers/SubdivisionModifier.js
//
//      - Original three.js SubdivisionModifier, r59 (Catmull-Clark)
//          https://github.com/mrdoob/three.js/blob/r59/examples/js/modifiers/SubdivisionModifier.js
//
/////////////////////////////////////////////////////////////////////////////////////

const THREE$2 = await importShared('three');


///// Constants

const POSITION_DECIMALS = 2;

///// Local Variables

const _average = new THREE$2.Vector3();
const _center = new THREE$2.Vector3();
const _midpoint = new THREE$2.Vector3();
const _normal = new THREE$2.Vector3();
const _temp = new THREE$2.Vector3();

const _vector0 = new THREE$2.Vector3(); // .Vector4();
const _vector1 = new THREE$2.Vector3(); // .Vector4();
const _vector2 = new THREE$2.Vector3(); // .Vector4();
const _vec0to1 = new THREE$2.Vector3();
const _vec1to2 = new THREE$2.Vector3();
const _vec2to0 = new THREE$2.Vector3();

const _position = [
    new THREE$2.Vector3(),
    new THREE$2.Vector3(),
    new THREE$2.Vector3(),
];

const _vertex = [
    new THREE$2.Vector3(),
    new THREE$2.Vector3(),
    new THREE$2.Vector3(),
];

const _triangle = new THREE$2.Triangle();

/////////////////////////////////////////////////////////////////////////////////////
/////   Loop Subdivision Surface
/////////////////////////////////////////////////////////////////////////////////////

/** Loop subdivision surface modifier for use with modern three.js BufferGeometry */
class LoopSubdivision {

    /////////////////////////////////////////////////////////////////////////////////////
    /////   Modify
    ////////////////////

    /**
     * Applies Loop subdivision modifier to geometry
     *
     * @param {Object} bufferGeometry - Three.js geometry to be subdivided
     * @param {Number} iterations - How many times to run subdividion
     * @param {Object} params - Optional parameters object, see below
     * @returns {Object} Returns new, subdivided, three.js BufferGeometry object
     *
     * Optional Parameters Object
     * @param {Boolean} split - Should coplanar faces be divided along shared edges before running Loop subdivision?
     * @param {Boolean} uvSmooth - Should UV values be averaged during subdivision?
     * @param {Boolean} preserveEdges - Should edges / breaks in geometry be ignored during subdivision?
     * @param {Boolean} flatOnly - If true, subdivision generates triangles, but does not modify positions
     * @param {Number} maxTriangles - If geometry contains more than this many triangles, subdivision will not continue
     * @param {Number} weight - How much to weigh favoring heavy corners vs favoring Loop's formula
     */
    static modify(bufferGeometry, iterations = 1, params = {}) {
        if (arguments.length > 3) console.warn(`LoopSubdivision.modify() now uses a parameter object. See readme for more info!`);

        if (typeof params !== 'object') params = {};

        ///// Parameters
        if (params.split === undefined) params.split = true;
        if (params.uvSmooth === undefined) params.uvSmooth = false;
        if (params.preserveEdges === undefined) params.preserveEdges = false;
        if (params.flatOnly === undefined) params.flatOnly = false;
        if (params.maxTriangles === undefined) params.maxTriangles = Infinity;
        if (params.weight === undefined) params.weight = 1;
        if (isNaN(params.weight) || !isFinite(params.weight)) params.weight = 1;
        params.weight = Math.max(0, (Math.min(1, params.weight)));

        ///// Geometries
        if (! verifyGeometry(bufferGeometry)) return bufferGeometry;
        let modifiedGeometry = bufferGeometry.clone();

        ///// Presplit
        if (params.split) {
            const splitGeometry = LoopSubdivision.edgeSplit(modifiedGeometry);
            modifiedGeometry.dispose();
            modifiedGeometry = splitGeometry;
        }

        ///// Apply Subdivision
        for (let i = 0; i < iterations; i++) {
            let currentTriangles = modifiedGeometry.attributes.position.count / 3;
            if (currentTriangles < params.maxTriangles) {
                let subdividedGeometry;

                // Subdivide
                if (params.flatOnly) {
                    subdividedGeometry = LoopSubdivision.flat(modifiedGeometry, params);
                } else {
                    subdividedGeometry = LoopSubdivision.smooth(modifiedGeometry, params);
                }

                // Copy and Resize Groups
                modifiedGeometry.groups.forEach((group) => {
                    subdividedGeometry.addGroup(group.start * 4, group.count * 4, group.materialIndex);
                });

                // Clean Up
                modifiedGeometry.dispose();
                modifiedGeometry = subdividedGeometry;
            }
        }

        ///// Return New Geometry
        return modifiedGeometry;
    }

    /////////////////////////////////////////////////////////////////////////////////////
    /////   Split Hypotenuse
    ////////////////////

    /**
     * Applies one iteration of split subdivision. Splits all triangles at edges shared by coplanar triangles.
     * Starts by splitting at longest shared edge, followed by splitting from that new center edge point to the
     * center of any other shared edges.
     */
    static edgeSplit(geometry) {

        ///// Geometries
        if (! verifyGeometry(geometry)) return geometry;
        const existing = (geometry.index !== null) ? geometry.toNonIndexed() : geometry.clone();
        const split = new THREE$2.BufferGeometry();

        ///// Attributes
        const attributeList = gatherAttributes(existing);
        const vertexCount = existing.attributes.position.count;
        const posAttribute = existing.getAttribute('position');
        const norAttribute = existing.getAttribute('normal');
        const edgeHashToTriangle = {};
        const triangleEdgeHashes = [];
        const edgeLength = {};
        const triangleExist = [];

        ///// Edges
        for (let i = 0; i < vertexCount; i += 3) {

            // Positions
            _vector0.fromBufferAttribute(posAttribute, i + 0);
            _vector1.fromBufferAttribute(posAttribute, i + 1);
            _vector2.fromBufferAttribute(posAttribute, i + 2);
            _normal.fromBufferAttribute(norAttribute, i);
            const vecHash0 = hashFromVector(_vector0);
            const vecHash1 = hashFromVector(_vector1);
            const vecHash2 = hashFromVector(_vector2);

            // Verify Area
            const triangleSize = _triangle.set(_vector0, _vector1, _vector2).getArea();
            triangleExist.push(! fuzzy(triangleSize, 0));
            if (! triangleExist[i / 3]) {
                triangleEdgeHashes.push([]);
                continue;
            }

            // Calculate Normals
            calcNormal(_normal, _vector0, _vector1, _vector2);
            const normalHash = hashFromVector(_normal);

            // Vertex Hashes
            const hashes = [
                `${vecHash0}_${vecHash1}_${normalHash}`, // [0]: 0to1
                `${vecHash1}_${vecHash0}_${normalHash}`, // [1]: 1to0
                `${vecHash1}_${vecHash2}_${normalHash}`, // [2]: 1to2
                `${vecHash2}_${vecHash1}_${normalHash}`, // [3]: 2to1
                `${vecHash2}_${vecHash0}_${normalHash}`, // [4]: 2to0
                `${vecHash0}_${vecHash2}_${normalHash}`, // [5]: 0to2
            ];

            // Store Edge Hashes
            const index = i / 3;
            for (let j = 0; j < hashes.length; j++) {
                // Attach Triangle Index to Edge Hash
                if (! edgeHashToTriangle[hashes[j]]) edgeHashToTriangle[hashes[j]] = [];
                edgeHashToTriangle[hashes[j]].push(index);

                // Edge Length
                if (! edgeLength[hashes[j]]) {
                    if (j === 0 || j === 1) edgeLength[hashes[j]] = _vector0.distanceTo(_vector1);
                    if (j === 2 || j === 3) edgeLength[hashes[j]] = _vector1.distanceTo(_vector2);
                    if (j === 4 || j === 5) edgeLength[hashes[j]] = _vector2.distanceTo(_vector0);
                }
            }

            // Triangle Edge Reference
            triangleEdgeHashes.push([ hashes[0], hashes[2], hashes[4] ]);
        }

        ///// Build Geometry, Set Attributes
        attributeList.forEach((attributeName) => {
            const attribute = existing.getAttribute(attributeName);
            if (! attribute) return;
            const floatArray = splitAttribute(attribute, attributeName);
            split.setAttribute(attributeName, new THREE$2.BufferAttribute(floatArray, attribute.itemSize));
        });

        ///// Morph Attributes
        const morphAttributes = existing.morphAttributes;
        for (const attributeName in morphAttributes) {
            const array = [];
            const morphAttribute = morphAttributes[attributeName];

            // Process Array of Float32BufferAttributes
            for (let i = 0, l = morphAttribute.length; i < l; i++) {
                if (morphAttribute[i].count !== vertexCount) continue;
                const floatArray = splitAttribute(morphAttribute[i], attributeName, true);
                array.push(new THREE$2.BufferAttribute(floatArray, morphAttribute[i].itemSize));
            }
            split.morphAttributes[attributeName] = array;
        }
        split.morphTargetsRelative = existing.morphTargetsRelative;

        // Clean Up, Return New Geometry
        existing.dispose();
        return split;

        // Loop Subdivide Function
        function splitAttribute(attribute, attributeName, morph = false) {
            const newTriangles = 4; /* maximum number of new triangles */
            const arrayLength = (vertexCount * attribute.itemSize) * newTriangles;
            const floatArray = new attribute.array.constructor(arrayLength);

            const processGroups = (attributeName === 'position' && ! morph && existing.groups.length > 0);
            let groupStart = undefined, groupMaterial = undefined;

            let index = 0;
            let skipped = 0;
            let step = attribute.itemSize;
            for (let i = 0; i < vertexCount; i += 3) {

                // Verify Triangle is Valid
                if (! triangleExist[i / 3]) {
                    skipped += 3;
                    continue;
                }

                // Get Triangle Points
                _vector0.fromBufferAttribute(attribute, i + 0);
                _vector1.fromBufferAttribute(attribute, i + 1);
                _vector2.fromBufferAttribute(attribute, i + 2);

                // Check for Shared Edges
                const existingIndex = i / 3;
                const edgeHash0to1 = triangleEdgeHashes[existingIndex][0];
                const edgeHash1to2 = triangleEdgeHashes[existingIndex][1];
                const edgeHash2to0 = triangleEdgeHashes[existingIndex][2];

                const edgeCount0to1 = edgeHashToTriangle[edgeHash0to1].length;
                const edgeCount1to2 = edgeHashToTriangle[edgeHash1to2].length;
                const edgeCount2to0 = edgeHashToTriangle[edgeHash2to0].length;
                const sharedCount = (edgeCount0to1 + edgeCount1to2 + edgeCount2to0) - 3;

                // New Index (Before New Triangles, used for Groups)
                const loopStartIndex = ((index * 3) / step) / 3;

                // No Shared Edges
                if (sharedCount === 0) {
                    setTriangle(floatArray, index, step, _vector0, _vector1, _vector2); index += (step * 3);

                // Shared Edges
                } else {
                    const length0to1 = edgeLength[edgeHash0to1];
                    const length1to2 = edgeLength[edgeHash1to2];
                    const length2to0 = edgeLength[edgeHash2to0];

                    // Add New Triangle Positions
                    if ((length0to1 > length1to2 || edgeCount1to2 <= 1) &&
                        (length0to1 > length2to0 || edgeCount2to0 <= 1) && edgeCount0to1 > 1) {
                        _center.copy(_vector0).add(_vector1).divideScalar(2.0);
                        if (edgeCount2to0 > 1) {
                            _midpoint.copy(_vector2).add(_vector0).divideScalar(2.0);
                            setTriangle(floatArray, index, step, _vector0, _center, _midpoint); index += (step * 3);
                            setTriangle(floatArray, index, step, _center, _vector2, _midpoint); index += (step * 3);
                        } else {
                            setTriangle(floatArray, index, step, _vector0, _center, _vector2); index += (step * 3);
                        }
                        if (edgeCount1to2 > 1) {
                            _midpoint.copy(_vector1).add(_vector2).divideScalar(2.0);
                            setTriangle(floatArray, index, step, _center, _vector1, _midpoint); index += (step * 3);
                            setTriangle(floatArray, index, step, _midpoint, _vector2, _center); index += (step * 3);
                        } else {
                            setTriangle(floatArray, index, step, _vector1, _vector2, _center); index += (step * 3);
                        }

                    } else if ((length1to2 > length2to0 || edgeCount2to0 <= 1) && edgeCount1to2 > 1) {
                        _center.copy(_vector1).add(_vector2).divideScalar(2.0);
                        if (edgeCount0to1 > 1) {
                            _midpoint.copy(_vector0).add(_vector1).divideScalar(2.0);
                            setTriangle(floatArray, index, step, _center, _midpoint, _vector1); index += (step * 3);
                            setTriangle(floatArray, index, step, _midpoint, _center, _vector0); index += (step * 3);
                        } else {
                            setTriangle(floatArray, index, step, _vector1, _center, _vector0); index += (step * 3);
                        }
                        if (edgeCount2to0 > 1) {
                            _midpoint.copy(_vector2).add(_vector0).divideScalar(2.0);
                            setTriangle(floatArray, index, step, _center, _vector2, _midpoint); index += (step * 3);
                            setTriangle(floatArray, index, step, _midpoint, _vector0, _center); index += (step * 3);
                        } else {
                            setTriangle(floatArray, index, step, _vector2, _vector0, _center); index += (step * 3);
                        }

                    } else if (edgeCount2to0 > 1) {
                        _center.copy(_vector2).add(_vector0).divideScalar(2.0);
                        if (edgeCount1to2 > 1) {
                            _midpoint.copy(_vector1).add(_vector2).divideScalar(2.0);
                            setTriangle(floatArray, index, step, _vector2, _center, _midpoint); index += (step * 3);
                            setTriangle(floatArray, index, step, _center, _vector1, _midpoint); index += (step * 3);
                        } else {
                            setTriangle(floatArray, index, step, _vector2, _center, _vector1); index += (step * 3);
                        }
                        if (edgeCount0to1 > 1) {
                            _midpoint.copy(_vector0).add(_vector1).divideScalar(2.0);
                            setTriangle(floatArray, index, step, _vector0, _midpoint, _center); index += (step * 3);
                            setTriangle(floatArray, index, step, _midpoint, _vector1, _center); index += (step * 3);
                        } else {
                            setTriangle(floatArray, index, step, _vector0, _vector1, _center); index += (step * 3);
                        }

                    } else {
                        setTriangle(floatArray, index, step, _vector0, _vector1, _vector2); index += (step * 3);
                    }
                }

                // Process Groups
                if (processGroups) {
                    existing.groups.forEach((group) => {
                        if (group.start === (i - skipped)) {
                            if (groupStart !== undefined && groupMaterial !== undefined) {
                                split.addGroup(groupStart, loopStartIndex - groupStart, groupMaterial);
                            }
                            groupStart = loopStartIndex;
                            groupMaterial = group.materialIndex;
                        }
                    });
                }

                // Reset Skipped Triangle Counter
                skipped = 0;
            }

            // Resize Array
            const reducedCount = (index * 3) / step;
            const reducedArray = new attribute.array.constructor(reducedCount);
            for (let i = 0; i < reducedCount; i++) {
                reducedArray[i] = floatArray[i];
            }

            // Final Group
            if (processGroups && groupStart !== undefined && groupMaterial !== undefined) {
                split.addGroup(groupStart, (((index * 3) / step) / 3) - groupStart, groupMaterial);
            }

            return reducedArray;
        }
    }

    /////////////////////////////////////////////////////////////////////////////////////
    /////   Flat
    ////////////////////

    /** Applies one iteration of Loop (flat) subdivision (1 triangle split into 4 triangles) */
    static flat(geometry, params = {}) {

        ///// Geometries
        if (! verifyGeometry(geometry)) return geometry;
        const existing = (geometry.index !== null) ? geometry.toNonIndexed() : geometry.clone();
        const loop = new THREE$2.BufferGeometry();

        ///// Attributes
        const attributeList = gatherAttributes(existing);
        const vertexCount = existing.attributes.position.count;

        ///// Build Geometry
        attributeList.forEach((attributeName) => {
            const attribute = existing.getAttribute(attributeName);
            if (! attribute) return;

            loop.setAttribute(attributeName, LoopSubdivision.flatAttribute(attribute, vertexCount, params));
        });

        ///// Morph Attributes
        const morphAttributes = existing.morphAttributes;
        for (const attributeName in morphAttributes) {
            const array = [];
            const morphAttribute = morphAttributes[attributeName];

            // Process Array of Float32BufferAttributes
			for (let i = 0, l = morphAttribute.length; i < l; i++) {
                if (morphAttribute[i].count !== vertexCount) continue;
                array.push(LoopSubdivision.flatAttribute(morphAttribute[i], vertexCount, params));
            }
            loop.morphAttributes[attributeName] = array;
        }
        loop.morphTargetsRelative = existing.morphTargetsRelative;

        ///// Clean Up
        existing.dispose();
        return loop;
    }

    static flatAttribute(attribute, vertexCount, params = {}) {
        const newTriangles = 4;
        const arrayLength = (vertexCount * attribute.itemSize) * newTriangles;
        const floatArray = new attribute.array.constructor(arrayLength);

        let index = 0;
        let step = attribute.itemSize;
        for (let i = 0; i < vertexCount; i += 3) {

            // Original Vertices
            _vector0.fromBufferAttribute(attribute, i + 0);
            _vector1.fromBufferAttribute(attribute, i + 1);
            _vector2.fromBufferAttribute(attribute, i + 2);

            // Midpoints
            _vec0to1.copy(_vector0).add(_vector1).divideScalar(2.0);
            _vec1to2.copy(_vector1).add(_vector2).divideScalar(2.0);
            _vec2to0.copy(_vector2).add(_vector0).divideScalar(2.0);

            // Add New Triangle Positions
            setTriangle(floatArray, index, step, _vector0, _vec0to1, _vec2to0); index += (step * 3);
            setTriangle(floatArray, index, step, _vector1, _vec1to2, _vec0to1); index += (step * 3);
            setTriangle(floatArray, index, step, _vector2, _vec2to0, _vec1to2); index += (step * 3);
            setTriangle(floatArray, index, step, _vec0to1, _vec1to2, _vec2to0); index += (step * 3);
        }

        return new THREE$2.BufferAttribute(floatArray, attribute.itemSize);
    }

    /////////////////////////////////////////////////////////////////////////////////////
    /////   Smooth
    ////////////////////

    /** Applies one iteration of Loop (smooth) subdivision (1 triangle split into 4 triangles) */
    static smooth(geometry, params = {}) {

        if (typeof params !== 'object') params = {};

        ///// Parameters
        if (params.uvSmooth === undefined) params.uvSmooth = false;
        if (params.preserveEdges === undefined) params.preserveEdges = false;

        ///// Geometries
        if (! verifyGeometry(geometry)) return geometry;
        const existing = (geometry.index !== null) ? geometry.toNonIndexed() : geometry.clone();
        const flat = LoopSubdivision.flat(existing, params);
        const loop = new THREE$2.BufferGeometry();

        ///// Attributes
        const attributeList = gatherAttributes(existing);
        const vertexCount = existing.attributes.position.count;
        const posAttribute = existing.getAttribute('position');
        const flatPosition = flat.getAttribute('position');
        const hashToIndex = {};             // Position hash mapped to index values of same position
        const existingNeighbors = {};       // Position hash mapped to existing vertex neighbors
        const flatOpposites = {};           // Position hash mapped to new edge point opposites
        const existingEdges = {};

        function addNeighbor(posHash, neighborHash, index) {
            if (! existingNeighbors[posHash]) existingNeighbors[posHash] = {};
            if (! existingNeighbors[posHash][neighborHash]) existingNeighbors[posHash][neighborHash] = [];
            existingNeighbors[posHash][neighborHash].push(index);
        }

        function addOpposite(posHash, index) {
            if (! flatOpposites[posHash]) flatOpposites[posHash] = [];
            flatOpposites[posHash].push(index);
        }

        function addEdgePoint(posHash, edgeHash) {
            if (! existingEdges[posHash]) existingEdges[posHash] = new Set();
            existingEdges[posHash].add(edgeHash);
        }

        ///// Existing Vertex Hashes
        for (let i = 0; i < vertexCount; i += 3) {
            const posHash0 = hashFromVector(_vertex[0].fromBufferAttribute(posAttribute, i + 0));
            const posHash1 = hashFromVector(_vertex[1].fromBufferAttribute(posAttribute, i + 1));
            const posHash2 = hashFromVector(_vertex[2].fromBufferAttribute(posAttribute, i + 2));

            // Neighbors (of Existing Geometry)
            addNeighbor(posHash0, posHash1, i + 1);
            addNeighbor(posHash0, posHash2, i + 2);
            addNeighbor(posHash1, posHash0, i + 0);
            addNeighbor(posHash1, posHash2, i + 2);
            addNeighbor(posHash2, posHash0, i + 0);
            addNeighbor(posHash2, posHash1, i + 1);

            // Opposites (of new FlatSubdivided vertices)
            _vec0to1.copy(_vertex[0]).add(_vertex[1]).divideScalar(2.0);
            _vec1to2.copy(_vertex[1]).add(_vertex[2]).divideScalar(2.0);
            _vec2to0.copy(_vertex[2]).add(_vertex[0]).divideScalar(2.0);
            const hash0to1 = hashFromVector(_vec0to1);
            const hash1to2 = hashFromVector(_vec1to2);
            const hash2to0 = hashFromVector(_vec2to0);
            addOpposite(hash0to1, i + 2);
            addOpposite(hash1to2, i + 0);
            addOpposite(hash2to0, i + 1);

            // Track Edges for 'edgePreserve'
            addEdgePoint(posHash0, hash0to1);
            addEdgePoint(posHash0, hash2to0);
            addEdgePoint(posHash1, hash0to1);
            addEdgePoint(posHash1, hash1to2);
            addEdgePoint(posHash2, hash1to2);
            addEdgePoint(posHash2, hash2to0);
        }

        ///// Flat Position to Index Map
        for (let i = 0; i < flat.attributes.position.count; i++) {
            const posHash = hashFromVector(_temp.fromBufferAttribute(flatPosition, i));
            if (! hashToIndex[posHash]) hashToIndex[posHash] = [];
            hashToIndex[posHash].push(i);
        }

        ///// Build Geometry, Set Attributes
        attributeList.forEach((attributeName) => {
            const existingAttribute = existing.getAttribute(attributeName);
            const flattenedAttribute = flat.getAttribute(attributeName);
            if (existingAttribute === undefined || flattenedAttribute === undefined) return;

            const floatArray = subdivideAttribute(attributeName, existingAttribute, flattenedAttribute);
            loop.setAttribute(attributeName, new THREE$2.BufferAttribute(floatArray, flattenedAttribute.itemSize));
        });

        ///// Morph Attributes
        const morphAttributes = existing.morphAttributes;
        for (const attributeName in morphAttributes) {
            const array = [];
            const morphAttribute = morphAttributes[attributeName];

            // Process Array of Float32BufferAttributes
            for (let i = 0, l = morphAttribute.length; i < l; i++) {
                if (morphAttribute[i].count !== vertexCount) continue;
                const existingAttribute = morphAttribute[i];
                const flattenedAttribute = LoopSubdivision.flatAttribute(morphAttribute[i], morphAttribute[i].count, params);

                const floatArray = subdivideAttribute(attributeName, existingAttribute, flattenedAttribute);
                array.push(new THREE$2.BufferAttribute(floatArray, flattenedAttribute.itemSize));
            }
            loop.morphAttributes[attributeName] = array;
        }
        loop.morphTargetsRelative = existing.morphTargetsRelative;

        ///// Clean Up
        flat.dispose();
        existing.dispose();
        return loop;

        //////////

        // Loop Subdivide Function
        function subdivideAttribute(attributeName, existingAttribute, flattenedAttribute) {
            const arrayLength = (flat.attributes.position.count * flattenedAttribute.itemSize);
            const floatArray = new existingAttribute.array.constructor(arrayLength);

            // Process Triangles
            let index = 0;
            for (let i = 0; i < flat.attributes.position.count; i += 3) {

                // Process Triangle Points
                for (let v = 0; v < 3; v++) {

                    if (attributeName === 'uv' && ! params.uvSmooth) {

                        _vertex[v].fromBufferAttribute(flattenedAttribute, i + v);

                    } else if (attributeName === 'normal') { // && params.normalSmooth) {

                        _position[v].fromBufferAttribute(flatPosition, i + v);
                        const positionHash = hashFromVector(_position[v]);
                        const positions = hashToIndex[positionHash];

                        const k = Object.keys(positions).length;
                        const beta = 0.75 / k;
                        const startWeight = 1.0 - (beta * k);

                        _vertex[v].fromBufferAttribute(flattenedAttribute, i + v);
                        _vertex[v].multiplyScalar(startWeight);

                        positions.forEach(positionIndex => {
                            _average.fromBufferAttribute(flattenedAttribute, positionIndex);
                            _average.multiplyScalar(beta);
                            _vertex[v].add(_average);
                        });


                    } else { // 'position', 'color', etc...

                        _vertex[v].fromBufferAttribute(flattenedAttribute, i + v);
                        _position[v].fromBufferAttribute(flatPosition, i + v);

                        const positionHash = hashFromVector(_position[v]);
                        const neighbors = existingNeighbors[positionHash];
                        const opposites = flatOpposites[positionHash];

                        ///// Adjust Source Vertex
                        if (neighbors) {

                            // Check Edges have even Opposite Points
                            if (params.preserveEdges) {
                                const edgeSet = existingEdges[positionHash];
                                let hasPair = true;
                                for (const edgeHash of edgeSet) {
                                    if (flatOpposites[edgeHash].length % 2 !== 0) hasPair = false;
                                }
                                if (! hasPair) continue;
                            }

                            // Number of Neighbors
                            const k = Object.keys(neighbors).length;

                            ///// Loop's Formula
                            const beta = 1 / k * ((5/8) - Math.pow((3/8) + (1/4) * Math.cos(2 * Math.PI / k), 2));

                            ///// Warren's Formula
                            // const beta = (k > 3) ? 3 / (8 * k) : ((k === 3) ? 3 / 16 : 0);

                            ///// Stevinz' Formula
                            // const beta = 0.5 / k;

                            ///// Corners
                            const heavy = (1 / k) / k;

                            ///// Interpolate Beta -> Heavy
                            const weight = lerp(heavy, beta, params.weight);

                            ///// Average with Neighbors
                            const startWeight = 1.0 - (weight * k);
                            _vertex[v].multiplyScalar(startWeight);

                            for (let neighborHash in neighbors) {
                                const neighborIndices = neighbors[neighborHash];

                                _average.set(0, 0, 0);
                                for (let j = 0; j < neighborIndices.length; j++) {
                                    _average.add(_temp.fromBufferAttribute(existingAttribute, neighborIndices[j]));
                                }
                                _average.divideScalar(neighborIndices.length);

                                _average.multiplyScalar(weight);
                                _vertex[v].add(_average);
                            }

                        ///// Newly Added Edge Vertex
                        } else if (opposites && opposites.length === 2) {
                            const k = opposites.length;
                            const beta = 0.125; /* 1/8 */
                            const startWeight = 1.0 - (beta * k);
                            _vertex[v].multiplyScalar(startWeight);

                            opposites.forEach(oppositeIndex => {
                                _average.fromBufferAttribute(existingAttribute, oppositeIndex);
                                _average.multiplyScalar(beta);
                                _vertex[v].add(_average);
                            });
                        }
                    }
                }

                // Add New Triangle Position
                setTriangle(floatArray, index, flattenedAttribute.itemSize, _vertex[0], _vertex[1], _vertex[2]);
                index += (flattenedAttribute.itemSize * 3);
            }

            return floatArray;
        }

    }

}

/////////////////////////////////////////////////////////////////////////////////////
/////   Local Functions, Hash
/////////////////////////////////////////////////////////////////////////////////////

const _positionShift = Math.pow(10, POSITION_DECIMALS);

/** Compares two numbers to see if they're almost the same */
function fuzzy(a, b, tolerance = 0.00001) {
    return ((a < (b + tolerance)) && (a > (b - tolerance)));
}

/** Generates hash strong from Number */
function hashFromNumber(num, shift = _positionShift) {
    let roundedNumber = round(num * shift);
    if (roundedNumber == 0) roundedNumber = 0; /* prevent -0 (signed 0 can effect Math.atan2(), etc.) */
    return `${roundedNumber}`;
}

/** Generates hash strong from Vector3 */
function hashFromVector(vector, shift = _positionShift) {
    return `${hashFromNumber(vector.x, shift)},${hashFromNumber(vector.y, shift)},${hashFromNumber(vector.z, shift)}`;
}

function lerp(x, y, t) {
    return (1 - t) * x + t * y;
}

function round(x) {
    return (x + ((x > 0) ? 0.5 : -0.5)) << 0;
}

/////////////////////////////////////////////////////////////////////////////////////
/////   Local Functions, Geometry
/////////////////////////////////////////////////////////////////////////////////////

function calcNormal(target, vec1, vec2, vec3) {
    _temp.subVectors(vec1, vec2);
    target.subVectors(vec2, vec3);
    target.cross(_temp).normalize();
}

function gatherAttributes(geometry) {
    const desired = [ 'position', 'normal', 'uv' ];
    const contains = Object.keys(geometry.attributes);
    const attributeList = Array.from(new Set(desired.concat(contains)));
    return attributeList;
}

function setTriangle(positions, index, step, vec0, vec1, vec2) {
    if (step >= 1) {
        positions[index + 0 + (step * 0)] = vec0.x;
        positions[index + 0 + (step * 1)] = vec1.x;
        positions[index + 0 + (step * 2)] = vec2.x;
    }
    if (step >= 2) {
        positions[index + 1 + (step * 0)] = vec0.y;
        positions[index + 1 + (step * 1)] = vec1.y;
        positions[index + 1 + (step * 2)] = vec2.y;
    }
    if (step >= 3) {
        positions[index + 2 + (step * 0)] = vec0.z;
        positions[index + 2 + (step * 1)] = vec1.z;
        positions[index + 2 + (step * 2)] = vec2.z;
    }
    if (step >= 4) {
        positions[index + 3 + (step * 0)] = vec0.w;
        positions[index + 3 + (step * 1)] = vec1.w;
        positions[index + 3 + (step * 2)] = vec2.w;
    }
}

function verifyGeometry(geometry) {
    if (geometry === undefined) {
        console.warn(`LoopSubdivision: Geometry provided is undefined`);
        return false;
    }

    if (! geometry.isBufferGeometry) {
        console.warn(`LoopSubdivision: Geometry provided is not 'BufferGeometry' type`);
        return false;
    }

    if (geometry.attributes.position === undefined) {
        console.warn(`LoopSubdivision: Geometry provided missing required 'position' attribute`);
        return false;
    }

    if (geometry.attributes.normal === undefined) {
        geometry.computeVertexNormals();
    }
    return true;
}

const {defineComponent:_defineComponent$1} = await importShared('vue');

const {normalizeProps:_normalizeProps,guardReactiveProps:_guardReactiveProps,createElementVNode:_createElementVNode$1,openBlock:_openBlock$1,createElementBlock:_createElementBlock} = await importShared('vue');

const _hoisted_1$1 = ["scale"];
const THREE$1 = await importShared('three');

const {ref: ref$1,watchEffect,watch} = await importShared('vue');
const _sfc_main$1 = /* @__PURE__ */ _defineComponent$1({
  __name: "shineShader",
  props: {
    srcMesh: {},
    scale: { default: 1.2 },
    color: { default: "#ffff00" },
    subdivision: { type: Boolean, default: true },
    c: { default: 1.1 },
    p: { default: 1.4 },
    side: { default: THREE$1.FrontSide },
    blending: { default: THREE$1.AdditiveBlending }
  },
  setup(__props) {
    const props = __props;
    const TSGref = ref$1();
    const smState = {
      uniforms: {
        c: { type: "f", value: props.c },
        p: { type: "f", value: props.p },
        glowColor: { type: "c", value: new THREE$1.Color(props.color) },
        viewVector: { type: "v3", value: { x: 0, y: 0, z: 0 } }
      },
      // 顶点着色器
      vertexShader: `
          uniform vec3 viewVector;
          uniform float c;
          uniform float p;
          varying float intensity;
          void main() {
            vec3 vNormal = normalize( normalMatrix * normal);
            vec3 vNormel = normalize( normalMatrix * viewVector);
            intensity = pow( c - dot(vNormal, vNormel), p );
            gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0);
          }
            `,
      // 片段着色器
      fragmentShader: `
          uniform vec3 glowColor;
          varying float intensity;
          void main() 
          {
          	vec3 glow = glowColor * intensity;
						if(intensity < 1.0){
            	gl_FragColor = vec4( glow, 1.0 );
						}
          }
        `,
      side: props.side,
      // DoubleSide BackSide FrontSide
      transparent: true,
      depthWrite: false,
      depthTest: true,
      blending: props.blending
      //在使用此材质显示对象时要使用何种混合。加法 NormalBlending
    };
    watchEffect(() => {
      if (props.srcMesh && TSGref.value) {
        if (!TSGref.value.geometry.attributes.position) {
          let geometry = props.srcMesh.geometry.clone();
          if (props.subdivision) {
            geometry = LoopSubdivision.modify(geometry, 2);
          }
          TSGref.value.geometry = geometry;
          TSGref.value.position.copy(props.srcMesh.position);
        }
      }
      if (props.color) {
        smState.uniforms.glowColor.value = new THREE$1.Color(props.color);
      }
      if (props.c) {
        smState.uniforms.c.value = props.c;
      }
      if (props.p) {
        smState.uniforms.p.value = props.p;
      }
    });
    watch(
      () => props.subdivision,
      (newVal) => {
        let geometry = props.srcMesh.geometry.clone();
        if (newVal) {
          geometry = LoopSubdivision.modify(geometry, 2);
        }
        TSGref.value.geometry = geometry;
      }
    );
    watch(
      () => props.side,
      (newVal) => {
        TSGref.value.material.side = newVal;
      }
    );
    watch(
      () => props.blending,
      (newVal) => {
        TSGref.value.material.blending = newVal;
      }
    );
    const { onRender } = _l();
    const { camera } = Fs();
    onRender(() => {
      if (camera.value && TSGref.value) {
        smState.uniforms.viewVector.value = new THREE$1.Vector3().subVectors(camera.value.position, TSGref.value.position);
      }
    });
    return (_ctx, _cache) => {
      return _openBlock$1(), _createElementBlock("TresMesh", {
        ref_key: "TSGref",
        ref: TSGref,
        scale: props.scale
      }, [
        _createElementVNode$1("TresShaderMaterial", _normalizeProps(_guardReactiveProps(smState)), null, 16)
      ], 8, _hoisted_1$1);
    };
  }
});

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,unref:_unref,createVNode:_createVNode,withCtx:_withCtx,mergeProps:_mergeProps,openBlock:_openBlock,createBlock:_createBlock,createCommentVNode:_createCommentVNode,resolveComponent:_resolveComponent} = await importShared('vue');

const _hoisted_1 = ["map"];
const _hoisted_2 = ["map"];
const THREE = await importShared('three');

const {reactive,ref} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "shader",
  setup(__props) {
    const gl = {
      clearColor: "#222"
    };
    const TresMeshRefA = ref();
    const TresMeshRefB = ref();
    const TreBoxRef = ref();
    const shineState = reactive({
      scale: 1.6,
      color: "#00dfff",
      subdivision: true,
      c: 1.1,
      p: 1.4,
      side: THREE.FrontSide,
      blending: THREE.AdditiveBlending
    });
    const paneControl = new Pane({
      title: "参数",
      expanded: true
    });
    paneControl.addBinding(shineState, "color", {
      label: "颜色"
    });
    paneControl.addBinding(shineState, "scale", {
      label: "大小",
      min: 1,
      max: 3,
      step: 0.2
    });
    paneControl.addBinding(shineState, "subdivision", {
      label: "边缘处理"
    });
    paneControl.addBinding(shineState, "c", {
      label: "c",
      min: 0,
      max: 2,
      step: 0.1
    });
    paneControl.addBinding(shineState, "p", {
      label: "p",
      min: 0,
      max: 8,
      step: 0.2
    });
    paneControl.addBinding(shineState, "side", {
      options: {
        FrontSide: THREE.FrontSide,
        BackSide: THREE.BackSide,
        DoubleSide: THREE.DoubleSide
      }
    });
    paneControl.addBinding(shineState, "blending", {
      options: {
        AdditiveBlending: THREE.AdditiveBlending,
        NormalBlending: THREE.NormalBlending
      }
    });
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createBlock(_component_TresCanvas, _mergeProps(gl, { "window-size": "" }), {
        default: _withCtx(() => [
          _cache[2] || (_cache[2] = _createElementVNode("TresPerspectiveCamera", { position: [5, 5, 5] }, null, -1)),
          _cache[3] || (_cache[3] = _createElementVNode("TresAmbientLight", { intensity: 1 }, null, -1)),
          _createVNode(_unref(Kk)),
          _cache[4] || (_cache[4] = _createElementVNode("TresGridHelper", { args: [10, 10] }, null, -1)),
          _createVNode(_unref(sz), { path: "./plugins/earthSample/image/earthA/earth.jpg" }, {
            default: _withCtx(({ state: texture }) => [
              _createElementVNode("TresMesh", {
                ref_key: "TresMeshRefA",
                ref: TresMeshRefA,
                position: [-2, 1, 0]
              }, [
                _cache[0] || (_cache[0] = _createElementVNode("TresSphereGeometry", { args: [1, 32, 16] }, null, -1)),
                _createElementVNode("TresMeshBasicMaterial", { map: texture }, null, 8, _hoisted_1)
              ], 512)
            ]),
            _: 1
          }),
          _createVNode(_sfc_main$1, _mergeProps({ srcMesh: TresMeshRefA.value }, shineState), null, 16, ["srcMesh"]),
          _createVNode(_unref(sz), { path: "./logo.png" }, {
            default: _withCtx(({ state: texture }) => [
              _createVNode(_unref(Tz), {
                ref_key: "TreBoxRef",
                ref: TreBoxRef,
                args: [1, 1, 1],
                position: [2, 1, 0]
              }, {
                default: _withCtx(() => [
                  _createElementVNode("TresMeshBasicMaterial", { map: texture }, null, 8, _hoisted_2)
                ]),
                _: 2
              }, 1536)
            ]),
            _: 1
          }),
          TreBoxRef.value && TreBoxRef.value.instance ? (_openBlock(), _createBlock(_sfc_main$1, _mergeProps({
            key: 0,
            srcMesh: TreBoxRef.value.instance
          }, shineState), null, 16, ["srcMesh"])) : _createCommentVNode("", true),
          _createElementVNode("TresMesh", {
            ref_key: "TresMeshRefB",
            ref: TresMeshRefB,
            position: [0, 1, -2]
          }, [..._cache[1] || (_cache[1] = [
            _createElementVNode("TresBoxGeometry", { args: [1, 1, 1, 1, 1] }, null, -1),
            _createElementVNode("TresMeshBasicMaterial", { color: "#0ff" }, null, -1)
          ])], 512),
          _createVNode(_sfc_main$1, _mergeProps({ srcMesh: TresMeshRefB.value }, shineState), null, 16, ["srcMesh"])
        ]),
        _: 1
      }, 16);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=shader.B6l84AHT1767105581793.js.map
