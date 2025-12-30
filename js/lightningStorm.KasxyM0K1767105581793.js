import { importShared, _l } from './index.BxB45aCK1767105581793.js';
import { _sfc_main as _sfc_main$2 } from './pagesShow.vue_vue_type_script_setup_true_lang.DfPQrWBQ1767105581793.js';
import { createNoise4D } from './simplex-noise.W37CxtWd1767105581793.js';
import './reflectorDiffuse.vue_vue_type_script_setup_true_lang.BuW1EemC1767105581793.js';
import './reflectorDUDV.vue_vue_type_script_setup_true_lang.Cce3m26z1767105581793.js';
import './reflectorShaderMesh.vue_vue_type_script_setup_true_lang.D0T9d0go1767105581793.js';
import './dynamicRotatingBase.vue_vue_type_script_setup_true_lang.B3Epdjc31767105581793.js';
import './whiteFloorMesh.vue_vue_type_script_setup_true_lang.B9UIV1AE1767105581793.js';
import { _sfc_main as _sfc_main$3 } from './gridPlusCom.vue_vue_type_script_setup_true_lang.BIqyIrzr1767105581793.js';
import './videoFloor.vue_vue_type_script_setup_true_lang.BEyCiDvU1767105581793.js';
import './digitalGround.vue_vue_type_script_setup_true_lang.BPvRJNY41767105581793.js';
import './imgFloor.vue_vue_type_script_setup_true_lang.D-OHfrvs1767105581793.js';
import './reflectorRoundedBox.vue_vue_type_script_setup_true_lang.B0i-7O7p1767105581793.js';
import './particleBase.vue_vue_type_script_setup_true_lang.BTwaqkrr1767105581793.js';
import './rippleFloor.vue_vue_type_script_setup_true_lang.DU-KS3_f1767105581793.js';
import { It, Kt } from './tresleches.B9l4RiSE1767105581793.js';

const {BufferGeometry,DynamicDrawUsage,Float32BufferAttribute,MathUtils: MathUtils$1,Uint32BufferAttribute,Vector3} = await importShared('three');

/**
 * @fileoverview LightningStrike object for creating lightning strikes and voltaic arcs.
 *
 *
 * Usage
 *
 * var myRay = new LightningStrike( paramsObject );
 * var myRayMesh = new THREE.Mesh( myRay, myMaterial );
 * scene.add( myRayMesh );
 * ...
 * myRay.update( currentTime );
 *
 * The "currentTime" can vary its rate, go forwards, backwards or even jump, but it cannot be negative.
 *
 * You should normally leave the ray position to (0, 0, 0). You should control it by changing the sourceOffset and destOffset parameters.
 *
 *
 * LightningStrike parameters
 *
 * The paramsObject can contain any of the following parameters.
 *
 * Legend:
 * 'LightningStrike' (also called 'ray'): An independent voltaic arc with its ramifications and defined with a set of parameters.
 * 'Subray': A ramification of the ray. It is not a LightningStrike object.
 * 'Segment': A linear segment piece of a subray.
 * 'Leaf segment': A ray segment which cannot be smaller.
 *
 *
 * The following parameters can be changed any time and if they vary smoothly, the ray form will also change smoothly:
 *
 * @param {Vector3} sourceOffset The point where the ray starts.
 *
 * @param {Vector3} destOffset The point where the ray ends.
 *
 * @param {double} timeScale The rate at wich the ray form changes in time. Default: 1
 *
 * @param {double} roughness From 0 to 1. The higher the value, the more wrinkled is the ray. Default: 0.9
 *
 * @param {double} straightness From 0 to 1. The higher the value, the more straight will be a subray path. Default: 0.7
 *
 * @param {Vector3} up0 Ray 'up' direction at the ray starting point. Must be normalized. It should be perpendicular to the ray forward direction but it doesn't matter much.
 *
 * @param {Vector3} up1 Like the up0 parameter but at the end of the ray. Must be normalized.
 *
 * @param {double} radius0 Radius of the main ray trunk at the start point. Default: 1
 *
 * @param {double} radius1 Radius of the main ray trunk at the end point. Default: 1
 *
 * @param {double} radius0Factor The radius0 of a subray is this factor times the radius0 of its parent subray. Default: 0.5
 *
 * @param {double} radius1Factor The radius1 of a subray is this factor times the radius1 of its parent subray. Default: 0.2
 *
 * @param {minRadius} Minimum value a subray radius0 or radius1 can get. Default: 0.1
 *
 *
 * The following parameters should not be changed after lightning creation. They can be changed but the ray will change its form abruptly:
 *
 * @param {boolean} isEternal If true the ray never extinguishes. Otherwise its life is controlled by the 'birthTime' and 'deathTime' parameters. Default: true if any of those two parameters is undefined.
 *
 * @param {double} birthTime The time at which the ray starts its life and begins propagating. Only if isEternal is false. Default: None.
 *
 * @param {double} deathTime The time at which the ray ends vanishing and its life. Only if isEternal is false. Default: None.
 *
 * @param {double} propagationTimeFactor From 0 to 1. Lifetime factor at which the ray ends propagating and enters the steady phase. For example, 0.1 means it is propagating 1/10 of its lifetime. Default: 0.1
 *
 * @param {double} vanishingTimeFactor From 0 to 1. Lifetime factor at which the ray ends the steady phase and begins vanishing. For example, 0.9 means it is vanishing 1/10 of its lifetime. Default: 0.9
 *
 * @param {double} subrayPeriod Subrays cycle periodically. This is their time period. Default: 4
 *
 * @param {double} subrayDutyCycle From 0 to 1. This is the fraction of time a subray is active. Default: 0.6
 *
 *
 * These parameters cannot change after lightning creation:
 *
 * @param {integer} maxIterations: Greater than 0. The number of ray's leaf segments is 2**maxIterations. Default: 9
 *
 * @param {boolean} isStatic Set to true only for rays which won't change over time and are not attached to moving objects (Rare case). It is used to set the vertex buffers non-dynamic. You can omit calling update() for these rays.
 *
 * @param {integer} ramification Greater than 0. Maximum number of child subrays a subray can have. Default: 5
 *
 * @param {integer} maxSubrayRecursion Greater than 0. Maximum level of recursion (subray descendant generations). Default: 3
 *
 * @param {double} recursionProbability From 0 to 1. The lower the value, the less chance each new generation of subrays has to generate new subrays. Default: 0.6
 *
 * @param {boolean} generateUVs If true, the ray geometry will have uv coordinates generated. u runs along the ray, and v across its perimeter. Default: false.
 *
 * @param {Object} randomGenerator Set here your random number generator which will seed the SimplexNoise and other decisions during ray tree creation.
 * It can be used to generate repeatable rays. For that, set also the noiseSeed parameter, and each ray created with that generator and seed pair will be identical in time.
 * The randomGenerator parameter should be an object with a random() function similar to Math.random, but seedable.
 * It must have also a getSeed() method, which returns the current seed, and a setSeed( seed ) method, which accepts as seed a fractional number from 0 to 1, as well as any other number.
 * The default value is an internal generator for some uses and Math.random for others (It is non-repeatable even if noiseSeed is supplied)
 *
 * @param {double} noiseSeed Seed used to make repeatable rays (see the randomGenerator)
 *
 * @param {function} onDecideSubrayCreation Set this to change the callback which decides subray creation. You can look at the default callback in the code (createDefaultSubrayCreationCallbacks)for more info.
 *
 * @param {function} onSubrayCreation This is another callback, more simple than the previous one. It can be used to adapt the form of subrays or other parameters once a subray has been created and initialized. It is used in the examples to adapt subrays to a sphere or to a plane.
 *
 *
 */

class LightningStrike extends BufferGeometry {
    constructor(rayParameters = {}) {
        super();

        this.isLightningStrike = true;

        this.type = 'LightningStrike';

        // Set parameters, and set undefined parameters to default values
        this.init(LightningStrike.copyParameters(rayParameters, rayParameters));

        // Creates and populates the mesh
        this.createMesh();
    }

    static createRandomGenerator() {
        const numSeeds = 2053;
        const seeds = [];

        for (let i = 0; i < numSeeds; i++) {
            seeds.push(Math.random());
        }

        const generator = {
            currentSeed: 0,

            random: function () {
                const value = seeds[generator.currentSeed];

                generator.currentSeed = (generator.currentSeed + 1) % numSeeds;

                return value
            },

            getSeed: function () {
                return generator.currentSeed / numSeeds
            },

            setSeed: function (seed) {
                generator.currentSeed = Math.floor(seed * numSeeds) % numSeeds;
            },
        };

        return generator
    }

    static copyParameters(dest = {}, source = {}) {
        const vecCopy = function (v) {
            if (source === dest) {
                return v
            } else {
                return v.clone()
            }
        }

        ;(dest.sourceOffset = source.sourceOffset !== undefined ? vecCopy(source.sourceOffset) : new Vector3(0, 100, 0)),
            (dest.destOffset = source.destOffset !== undefined ? vecCopy(source.destOffset) : new Vector3(0, 0, 0)),
            (dest.timeScale = source.timeScale !== undefined ? source.timeScale : 1),
            (dest.roughness = source.roughness !== undefined ? source.roughness : 0.9),
            (dest.straightness = source.straightness !== undefined ? source.straightness : 0.7),
            (dest.up0 = source.up0 !== undefined ? vecCopy(source.up0) : new Vector3(0, 0, 1))
        ;(dest.up1 = source.up1 !== undefined ? vecCopy(source.up1) : new Vector3(0, 0, 1)),
            (dest.radius0 = source.radius0 !== undefined ? source.radius0 : 1),
            (dest.radius1 = source.radius1 !== undefined ? source.radius1 : 1),
            (dest.radius0Factor = source.radius0Factor !== undefined ? source.radius0Factor : 0.5),
            (dest.radius1Factor = source.radius1Factor !== undefined ? source.radius1Factor : 0.2),
            (dest.minRadius = source.minRadius !== undefined ? source.minRadius : 0.2),
            // These parameters should not be changed after lightning creation. They can be changed but the ray will change its form abruptly:

            (dest.isEternal = source.isEternal !== undefined ? source.isEternal : source.birthTime === undefined || source.deathTime === undefined),
            (dest.birthTime = source.birthTime),
            (dest.deathTime = source.deathTime),
            (dest.propagationTimeFactor = source.propagationTimeFactor !== undefined ? source.propagationTimeFactor : 0.1),
            (dest.vanishingTimeFactor = source.vanishingTimeFactor !== undefined ? source.vanishingTimeFactor : 0.9),
            (dest.subrayPeriod = source.subrayPeriod !== undefined ? source.subrayPeriod : 4),
            (dest.subrayDutyCycle = source.subrayDutyCycle !== undefined ? source.subrayDutyCycle : 0.6);

        // These parameters cannot change after lightning creation:

        dest.maxIterations = source.maxIterations !== undefined ? source.maxIterations : 9;
        dest.isStatic = source.isStatic !== undefined ? source.isStatic : false;
        dest.ramification = source.ramification !== undefined ? source.ramification : 5;
        dest.maxSubrayRecursion = source.maxSubrayRecursion !== undefined ? source.maxSubrayRecursion : 3;
        dest.recursionProbability = source.recursionProbability !== undefined ? source.recursionProbability : 0.6;
        dest.generateUVs = source.generateUVs !== undefined ? source.generateUVs : false
        ;(dest.randomGenerator = source.randomGenerator),
            (dest.noiseSeed = source.noiseSeed),
            (dest.onDecideSubrayCreation = source.onDecideSubrayCreation),
            (dest.onSubrayCreation = source.onSubrayCreation);

        return dest
    }

    update(time) {
        if (this.isStatic) return

        if (this.rayParameters.isEternal || (this.rayParameters.birthTime <= time && time <= this.rayParameters.deathTime)) {
            this.updateMesh(time);

            if (time < this.subrays[0].endPropagationTime) {
                this.state = LightningStrike.RAY_PROPAGATING;
            } else if (time > this.subrays[0].beginVanishingTime) {
                this.state = LightningStrike.RAY_VANISHING;
            } else {
                this.state = LightningStrike.RAY_STEADY;
            }

            this.visible = true;
        } else {
            this.visible = false;

            if (time < this.rayParameters.birthTime) {
                this.state = LightningStrike.RAY_UNBORN;
            } else {
                this.state = LightningStrike.RAY_EXTINGUISHED;
            }
        }
    }

    init(rayParameters) {
        // Init all the state from the parameters

        this.rayParameters = rayParameters;

        // These parameters cannot change after lightning creation:

        this.maxIterations = rayParameters.maxIterations !== undefined ? Math.floor(rayParameters.maxIterations) : 9;
        rayParameters.maxIterations = this.maxIterations;
        this.isStatic = rayParameters.isStatic !== undefined ? rayParameters.isStatic : false;
        rayParameters.isStatic = this.isStatic;
        this.ramification = rayParameters.ramification !== undefined ? Math.floor(rayParameters.ramification) : 5;
        rayParameters.ramification = this.ramification;
        this.maxSubrayRecursion = rayParameters.maxSubrayRecursion !== undefined ? Math.floor(rayParameters.maxSubrayRecursion) : 3;
        rayParameters.maxSubrayRecursion = this.maxSubrayRecursion;
        this.recursionProbability = rayParameters.recursionProbability !== undefined ? rayParameters.recursionProbability : 0.6;
        rayParameters.recursionProbability = this.recursionProbability;
        this.generateUVs = rayParameters.generateUVs !== undefined ? rayParameters.generateUVs : false;
        rayParameters.generateUVs = this.generateUVs;

        // Random generator
        if (rayParameters.randomGenerator !== undefined) {
            this.randomGenerator = rayParameters.randomGenerator;
            this.seedGenerator = rayParameters.randomGenerator;

            if (rayParameters.noiseSeed !== undefined) {
                this.seedGenerator.setSeed(rayParameters.noiseSeed);
            }
        } else {
            this.randomGenerator = LightningStrike.createRandomGenerator();
            this.seedGenerator = Math;
        }

        // Ray creation callbacks
        if (rayParameters.onDecideSubrayCreation !== undefined) {
            this.onDecideSubrayCreation = rayParameters.onDecideSubrayCreation;
        } else {
            this.createDefaultSubrayCreationCallbacks();

            if (rayParameters.onSubrayCreation !== undefined) {
                this.onSubrayCreation = rayParameters.onSubrayCreation;
            }
        }

        // Internal state

        this.state = LightningStrike.RAY_INITIALIZED;

        this.maxSubrays = Math.ceil(1 + Math.pow(this.ramification, Math.max(0, this.maxSubrayRecursion - 1)));
        rayParameters.maxSubrays = this.maxSubrays;

        this.maxRaySegments = 2 * (1 << this.maxIterations);

        this.subrays = [];

        for (let i = 0; i < this.maxSubrays; i++) {
            this.subrays.push(this.createSubray());
        }

        this.raySegments = [];

        for (let i = 0; i < this.maxRaySegments; i++) {
            this.raySegments.push(this.createSegment());
        }

        this.time = 0;
        this.timeFraction = 0;
        this.currentSegmentCallback = null;
        this.currentCreateTriangleVertices = this.generateUVs ? this.createTriangleVerticesWithUVs : this.createTriangleVerticesWithoutUVs;
        this.numSubrays = 0;
        this.currentSubray = null;
        this.currentSegmentIndex = 0;
        this.isInitialSegment = false;
        this.subrayProbability = 0;

        this.currentVertex = 0;
        this.currentIndex = 0;
        this.currentCoordinate = 0;
        this.currentUVCoordinate = 0;
        this.vertices = null;
        this.uvs = null;
        this.indices = null;
        this.positionAttribute = null;
        this.uvsAttribute = null;

        this.simplexX = createNoise4D(this.seedGenerator.random);
        this.simplexY = createNoise4D(this.seedGenerator.random);
        this.simplexZ = createNoise4D(this.seedGenerator.random);

        // Temp vectors
        this.forwards = new Vector3();
        this.forwardsFill = new Vector3();
        this.side = new Vector3();
        this.down = new Vector3();
        this.middlePos = new Vector3();
        this.middleLinPos = new Vector3();
        this.newPos = new Vector3();
        this.vPos = new Vector3();
        this.cross1 = new Vector3();
    }

    createMesh() {
        const maxDrawableSegmentsPerSubRay = 1 << this.maxIterations;

        const maxVerts = 3 * (maxDrawableSegmentsPerSubRay + 1) * this.maxSubrays;
        const maxIndices = 18 * maxDrawableSegmentsPerSubRay * this.maxSubrays;

        this.vertices = new Float32Array(maxVerts * 3);
        this.indices = new Uint32Array(maxIndices);

        if (this.generateUVs) {
            this.uvs = new Float32Array(maxVerts * 2);
        }

        // Populate the mesh
        this.fillMesh(0);

        this.setIndex(new Uint32BufferAttribute(this.indices, 1));

        this.positionAttribute = new Float32BufferAttribute(this.vertices, 3);
        this.setAttribute('position', this.positionAttribute);

        if (this.generateUVs) {
            this.uvsAttribute = new Float32BufferAttribute(new Float32Array(this.uvs), 2);
            this.setAttribute('uv', this.uvsAttribute);
        }

        if (!this.isStatic) {
            this.index.usage = DynamicDrawUsage;
            this.positionAttribute.usage = DynamicDrawUsage;

            if (this.generateUVs) {
                this.uvsAttribute.usage = DynamicDrawUsage;
            }
        }

        // Store buffers for later modification
        this.vertices = this.positionAttribute.array;
        this.indices = this.index.array;

        if (this.generateUVs) {
            this.uvs = this.uvsAttribute.array;
        }
    }

    updateMesh(time) {
        this.fillMesh(time);

        this.drawRange.count = this.currentIndex;

        this.index.needsUpdate = true;

        this.positionAttribute.needsUpdate = true;

        if (this.generateUVs) {
            this.uvsAttribute.needsUpdate = true;
        }
    }

    fillMesh(time) {
        const scope = this;

        this.currentVertex = 0;
        this.currentIndex = 0;
        this.currentCoordinate = 0;
        this.currentUVCoordinate = 0;

        this.fractalRay(time, function fillVertices(segment) {
            const subray = scope.currentSubray;

            if (time < subray.birthTime) {
                //&& ( ! this.rayParameters.isEternal || scope.currentSubray.recursion > 0 ) ) {

                return
            } else if (this.rayParameters.isEternal && scope.currentSubray.recursion == 0) {
                // Eternal rays don't propagate nor vanish, but its subrays do

                scope.createPrism(segment);

                scope.onDecideSubrayCreation(segment, scope);
            } else if (time < subray.endPropagationTime) {
                if (scope.timeFraction >= segment.fraction0 * subray.propagationTimeFactor) {
                    // Ray propagation has arrived to this segment

                    scope.createPrism(segment);

                    scope.onDecideSubrayCreation(segment, scope);
                }
            } else if (time < subray.beginVanishingTime) {
                // Ray is steady (nor propagating nor vanishing)

                scope.createPrism(segment);

                scope.onDecideSubrayCreation(segment, scope);
            } else {
                if (scope.timeFraction <= subray.vanishingTimeFactor + segment.fraction1 * (1 - subray.vanishingTimeFactor)) {
                    // Segment has not yet vanished

                    scope.createPrism(segment);
                }

                scope.onDecideSubrayCreation(segment, scope);
            }
        });
    }

    addNewSubray(/*rayParameters*/) {
        return this.subrays[this.numSubrays++]
    }

    initSubray(subray, rayParameters) {
        subray.pos0.copy(rayParameters.sourceOffset);
        subray.pos1.copy(rayParameters.destOffset);
        subray.up0.copy(rayParameters.up0);
        subray.up1.copy(rayParameters.up1);
        subray.radius0 = rayParameters.radius0;
        subray.radius1 = rayParameters.radius1;
        subray.birthTime = rayParameters.birthTime;
        subray.deathTime = rayParameters.deathTime;
        subray.timeScale = rayParameters.timeScale;
        subray.roughness = rayParameters.roughness;
        subray.straightness = rayParameters.straightness;
        subray.propagationTimeFactor = rayParameters.propagationTimeFactor;
        subray.vanishingTimeFactor = rayParameters.vanishingTimeFactor;

        subray.maxIterations = this.maxIterations;
        subray.seed = rayParameters.noiseSeed !== undefined ? rayParameters.noiseSeed : 0;
        subray.recursion = 0;
    }

    fractalRay(time, segmentCallback) {
        this.time = time;
        this.currentSegmentCallback = segmentCallback;
        this.numSubrays = 0;

        // Add the top level subray
        this.initSubray(this.addNewSubray(), this.rayParameters);

        // Process all subrays that are being generated until consuming all of them
        for (let subrayIndex = 0; subrayIndex < this.numSubrays; subrayIndex++) {
            const subray = this.subrays[subrayIndex];
            this.currentSubray = subray;

            this.randomGenerator.setSeed(subray.seed);

            subray.endPropagationTime = MathUtils$1.lerp(subray.birthTime, subray.deathTime, subray.propagationTimeFactor);
            subray.beginVanishingTime = MathUtils$1.lerp(subray.deathTime, subray.birthTime, 1 - subray.vanishingTimeFactor);

            const random1 = this.randomGenerator.random;
            subray.linPos0.set(random1(), random1(), random1()).multiplyScalar(1000);
            subray.linPos1.set(random1(), random1(), random1()).multiplyScalar(1000);

            this.timeFraction = (time - subray.birthTime) / (subray.deathTime - subray.birthTime);

            this.currentSegmentIndex = 0;
            this.isInitialSegment = true;

            const segment = this.getNewSegment();
            segment.iteration = 0;
            segment.pos0.copy(subray.pos0);
            segment.pos1.copy(subray.pos1);
            segment.linPos0.copy(subray.linPos0);
            segment.linPos1.copy(subray.linPos1);
            segment.up0.copy(subray.up0);
            segment.up1.copy(subray.up1);
            segment.radius0 = subray.radius0;
            segment.radius1 = subray.radius1;
            segment.fraction0 = 0;
            segment.fraction1 = 1;
            segment.positionVariationFactor = 1 - subray.straightness;

            this.subrayProbability = (this.ramification * Math.pow(this.recursionProbability, subray.recursion)) / (1 << subray.maxIterations);

            this.fractalRayRecursive(segment);
        }

        this.currentSegmentCallback = null;
        this.currentSubray = null;
    }

    fractalRayRecursive(segment) {
        // Leave recursion condition
        if (segment.iteration >= this.currentSubray.maxIterations) {
            this.currentSegmentCallback(segment);

            return
        }

        // Interpolation
        this.forwards.subVectors(segment.pos1, segment.pos0);
        let lForwards = this.forwards.length();

        if (lForwards < 0.000001) {
            this.forwards.set(0, 0, 0.01);
            lForwards = this.forwards.length();
        }

        const middleRadius = (segment.radius0 + segment.radius1) * 0.5;
        const middleFraction = (segment.fraction0 + segment.fraction1) * 0.5;

        const timeDimension = this.time * this.currentSubray.timeScale * Math.pow(2, segment.iteration);

        this.middlePos.lerpVectors(segment.pos0, segment.pos1, 0.5);
        this.middleLinPos.lerpVectors(segment.linPos0, segment.linPos1, 0.5);
        const p = this.middleLinPos;

        // Noise
        this.newPos.set(this.simplexX(p.x, p.y, p.z, timeDimension), this.simplexY(p.x, p.y, p.z, timeDimension), this.simplexZ(p.x, p.y, p.z, timeDimension));

        this.newPos.multiplyScalar(segment.positionVariationFactor * lForwards);
        this.newPos.add(this.middlePos);

        // Recursion

        const newSegment1 = this.getNewSegment();
        newSegment1.pos0.copy(segment.pos0);
        newSegment1.pos1.copy(this.newPos);
        newSegment1.linPos0.copy(segment.linPos0);
        newSegment1.linPos1.copy(this.middleLinPos);
        newSegment1.up0.copy(segment.up0);
        newSegment1.up1.copy(segment.up1);
        newSegment1.radius0 = segment.radius0;
        newSegment1.radius1 = middleRadius;
        newSegment1.fraction0 = segment.fraction0;
        newSegment1.fraction1 = middleFraction;
        newSegment1.positionVariationFactor = segment.positionVariationFactor * this.currentSubray.roughness;
        newSegment1.iteration = segment.iteration + 1;

        const newSegment2 = this.getNewSegment();
        newSegment2.pos0.copy(this.newPos);
        newSegment2.pos1.copy(segment.pos1);
        newSegment2.linPos0.copy(this.middleLinPos);
        newSegment2.linPos1.copy(segment.linPos1);
        this.cross1.crossVectors(segment.up0, this.forwards.normalize());
        newSegment2.up0.crossVectors(this.forwards, this.cross1).normalize();
        newSegment2.up1.copy(segment.up1);
        newSegment2.radius0 = middleRadius;
        newSegment2.radius1 = segment.radius1;
        newSegment2.fraction0 = middleFraction;
        newSegment2.fraction1 = segment.fraction1;
        newSegment2.positionVariationFactor = segment.positionVariationFactor * this.currentSubray.roughness;
        newSegment2.iteration = segment.iteration + 1;

        this.fractalRayRecursive(newSegment1);

        this.fractalRayRecursive(newSegment2);
    }

    createPrism(segment) {
        // Creates one triangular prism and its vertices at the segment

        this.forwardsFill.subVectors(segment.pos1, segment.pos0).normalize();

        if (this.isInitialSegment) {
            this.currentCreateTriangleVertices(segment.pos0, segment.up0, this.forwardsFill, segment.radius0, 0);

            this.isInitialSegment = false;
        }

        this.currentCreateTriangleVertices(segment.pos1, segment.up0, this.forwardsFill, segment.radius1, segment.fraction1);

        this.createPrismFaces();
    }

    createTriangleVerticesWithoutUVs(pos, up, forwards, radius) {
        // Create an equilateral triangle (only vertices)

        this.side.crossVectors(up, forwards).multiplyScalar(radius * LightningStrike.COS30DEG);
        this.down.copy(up).multiplyScalar(-radius * LightningStrike.SIN30DEG);

        const p = this.vPos;
        const v = this.vertices;

        p.copy(pos).sub(this.side).add(this.down);

        v[this.currentCoordinate++] = p.x;
        v[this.currentCoordinate++] = p.y;
        v[this.currentCoordinate++] = p.z;

        p.copy(pos).add(this.side).add(this.down);

        v[this.currentCoordinate++] = p.x;
        v[this.currentCoordinate++] = p.y;
        v[this.currentCoordinate++] = p.z;

        p.copy(up).multiplyScalar(radius).add(pos);

        v[this.currentCoordinate++] = p.x;
        v[this.currentCoordinate++] = p.y;
        v[this.currentCoordinate++] = p.z;

        this.currentVertex += 3;
    }

    createTriangleVerticesWithUVs(pos, up, forwards, radius, u) {
        // Create an equilateral triangle (only vertices)

        this.side.crossVectors(up, forwards).multiplyScalar(radius * LightningStrike.COS30DEG);
        this.down.copy(up).multiplyScalar(-radius * LightningStrike.SIN30DEG);

        const p = this.vPos;
        const v = this.vertices;
        const uv = this.uvs;

        p.copy(pos).sub(this.side).add(this.down);

        v[this.currentCoordinate++] = p.x;
        v[this.currentCoordinate++] = p.y;
        v[this.currentCoordinate++] = p.z;

        uv[this.currentUVCoordinate++] = u;
        uv[this.currentUVCoordinate++] = 0;

        p.copy(pos).add(this.side).add(this.down);

        v[this.currentCoordinate++] = p.x;
        v[this.currentCoordinate++] = p.y;
        v[this.currentCoordinate++] = p.z;

        uv[this.currentUVCoordinate++] = u;
        uv[this.currentUVCoordinate++] = 0.5;

        p.copy(up).multiplyScalar(radius).add(pos);

        v[this.currentCoordinate++] = p.x;
        v[this.currentCoordinate++] = p.y;
        v[this.currentCoordinate++] = p.z;

        uv[this.currentUVCoordinate++] = u;
        uv[this.currentUVCoordinate++] = 1;

        this.currentVertex += 3;
    }

    createPrismFaces(vertex /*, index*/) {
        const indices = this.indices;
        vertex = this.currentVertex - 6;

        indices[this.currentIndex++] = vertex + 1;
        indices[this.currentIndex++] = vertex + 2;
        indices[this.currentIndex++] = vertex + 5;
        indices[this.currentIndex++] = vertex + 1;
        indices[this.currentIndex++] = vertex + 5;
        indices[this.currentIndex++] = vertex + 4;
        indices[this.currentIndex++] = vertex + 0;
        indices[this.currentIndex++] = vertex + 1;
        indices[this.currentIndex++] = vertex + 4;
        indices[this.currentIndex++] = vertex + 0;
        indices[this.currentIndex++] = vertex + 4;
        indices[this.currentIndex++] = vertex + 3;
        indices[this.currentIndex++] = vertex + 2;
        indices[this.currentIndex++] = vertex + 0;
        indices[this.currentIndex++] = vertex + 3;
        indices[this.currentIndex++] = vertex + 2;
        indices[this.currentIndex++] = vertex + 3;
        indices[this.currentIndex++] = vertex + 5;
    }

    createDefaultSubrayCreationCallbacks() {
        const random1 = this.randomGenerator.random;

        this.onDecideSubrayCreation = function (segment, lightningStrike) {
            // Decide subrays creation at parent (sub)ray segment

            const subray = lightningStrike.currentSubray;

            const period = lightningStrike.rayParameters.subrayPeriod;
            const dutyCycle = lightningStrike.rayParameters.subrayDutyCycle;

            const phase0 =
                lightningStrike.rayParameters.isEternal && subray.recursion == 0
                    ? -random1() * period
                    : MathUtils$1.lerp(subray.birthTime, subray.endPropagationTime, segment.fraction0) - random1() * period;

            const phase = lightningStrike.time - phase0;
            const currentCycle = Math.floor(phase / period);

            const childSubraySeed = random1() * (currentCycle + 1);

            const isActive = phase % period <= dutyCycle * period;

            let probability = 0;

            if (isActive) {
                probability = lightningStrike.subrayProbability;
                // Distribution test: probability *= segment.fraction0 > 0.5 && segment.fraction0 < 0.9 ? 1 / 0.4 : 0;
            }

            if (subray.recursion < lightningStrike.maxSubrayRecursion && lightningStrike.numSubrays < lightningStrike.maxSubrays && random1() < probability) {
                const childSubray = lightningStrike.addNewSubray();

                const parentSeed = lightningStrike.randomGenerator.getSeed();
                childSubray.seed = childSubraySeed;
                lightningStrike.randomGenerator.setSeed(childSubraySeed);

                childSubray.recursion = subray.recursion + 1;
                childSubray.maxIterations = Math.max(1, subray.maxIterations - 1);

                childSubray.linPos0.set(random1(), random1(), random1()).multiplyScalar(1000);
                childSubray.linPos1.set(random1(), random1(), random1()).multiplyScalar(1000);
                childSubray.up0.copy(subray.up0);
                childSubray.up1.copy(subray.up1);
                childSubray.radius0 = segment.radius0 * lightningStrike.rayParameters.radius0Factor;
                childSubray.radius1 = Math.min(lightningStrike.rayParameters.minRadius, segment.radius1 * lightningStrike.rayParameters.radius1Factor);

                childSubray.birthTime = phase0 + currentCycle * period;
                childSubray.deathTime = childSubray.birthTime + period * dutyCycle;

                if (!lightningStrike.rayParameters.isEternal && subray.recursion == 0) {
                    childSubray.birthTime = Math.max(childSubray.birthTime, subray.birthTime);
                    childSubray.deathTime = Math.min(childSubray.deathTime, subray.deathTime);
                }

                childSubray.timeScale = subray.timeScale * 2;
                childSubray.roughness = subray.roughness;
                childSubray.straightness = subray.straightness;
                childSubray.propagationTimeFactor = subray.propagationTimeFactor;
                childSubray.vanishingTimeFactor = subray.vanishingTimeFactor;

                lightningStrike.onSubrayCreation(segment, subray, childSubray, lightningStrike);

                lightningStrike.randomGenerator.setSeed(parentSeed);
            }
        };

        const vec1Pos = new Vector3();
        const vec2Forward = new Vector3();
        const vec3Side = new Vector3();
        const vec4Up = new Vector3();

        this.onSubrayCreation = function (segment, parentSubray, childSubray, lightningStrike) {
            // Decide childSubray origin and destination positions (pos0 and pos1) and possibly other properties of childSubray

            // Just use the default cone position generator
            lightningStrike.subrayCylinderPosition(segment, parentSubray, childSubray, 0.5, 0.6, 0.2);
        };

        this.subrayConePosition = function (segment, parentSubray, childSubray, heightFactor, sideWidthFactor, minSideWidthFactor) {
            // Sets childSubray pos0 and pos1 in a cone

            childSubray.pos0.copy(segment.pos0);

            vec1Pos.subVectors(parentSubray.pos1, parentSubray.pos0);
            vec2Forward.copy(vec1Pos).normalize();
            vec1Pos.multiplyScalar(segment.fraction0 + (1 - segment.fraction0) * (random1() * heightFactor));
            const length = vec1Pos.length();
            vec3Side.crossVectors(parentSubray.up0, vec2Forward);
            const angle = 2 * Math.PI * random1();
            vec3Side.multiplyScalar(Math.cos(angle));
            vec4Up.copy(parentSubray.up0).multiplyScalar(Math.sin(angle));

            childSubray.pos1
                .copy(vec3Side)
                .add(vec4Up)
                .multiplyScalar(length * sideWidthFactor * (minSideWidthFactor + random1() * (1 - minSideWidthFactor)))
                .add(vec1Pos)
                .add(parentSubray.pos0);
        };

        this.subrayCylinderPosition = function (segment, parentSubray, childSubray, heightFactor, sideWidthFactor, minSideWidthFactor) {
            // Sets childSubray pos0 and pos1 in a cylinder

            childSubray.pos0.copy(segment.pos0);

            vec1Pos.subVectors(parentSubray.pos1, parentSubray.pos0);
            vec2Forward.copy(vec1Pos).normalize();
            vec1Pos.multiplyScalar(segment.fraction0 + (1 - segment.fraction0) * ((2 * random1() - 1) * heightFactor));
            const length = vec1Pos.length();
            vec3Side.crossVectors(parentSubray.up0, vec2Forward);
            const angle = 2 * Math.PI * random1();
            vec3Side.multiplyScalar(Math.cos(angle));
            vec4Up.copy(parentSubray.up0).multiplyScalar(Math.sin(angle));

            childSubray.pos1
                .copy(vec3Side)
                .add(vec4Up)
                .multiplyScalar(length * sideWidthFactor * (minSideWidthFactor + random1() * (1 - minSideWidthFactor)))
                .add(vec1Pos)
                .add(parentSubray.pos0);
        };
    }

    createSubray() {
        return {
            seed: 0,
            maxIterations: 0,
            recursion: 0,
            pos0: new Vector3(),
            pos1: new Vector3(),
            linPos0: new Vector3(),
            linPos1: new Vector3(),
            up0: new Vector3(),
            up1: new Vector3(),
            radius0: 0,
            radius1: 0,
            birthTime: 0,
            deathTime: 0,
            timeScale: 0,
            roughness: 0,
            straightness: 0,
            propagationTimeFactor: 0,
            vanishingTimeFactor: 0,
            endPropagationTime: 0,
            beginVanishingTime: 0,
        }
    }

    createSegment() {
        return {
            iteration: 0,
            pos0: new Vector3(),
            pos1: new Vector3(),
            linPos0: new Vector3(),
            linPos1: new Vector3(),
            up0: new Vector3(),
            up1: new Vector3(),
            radius0: 0,
            radius1: 0,
            fraction0: 0,
            fraction1: 0,
            positionVariationFactor: 0,
        }
    }

    getNewSegment() {
        return this.raySegments[this.currentSegmentIndex++]
    }

    copy(source) {
        super.copy(source);

        this.init(LightningStrike.copyParameters({}, source.rayParameters));

        return this
    }

    clone() {
        return new this.constructor(LightningStrike.copyParameters({}, this.rayParameters))
    }
}

// Ray states
LightningStrike.RAY_INITIALIZED = 0;
LightningStrike.RAY_UNBORN = 1;
LightningStrike.RAY_PROPAGATING = 2;
LightningStrike.RAY_STEADY = 3;
LightningStrike.RAY_VANISHING = 4;
LightningStrike.RAY_EXTINGUISHED = 5;

LightningStrike.COS30DEG = Math.cos((30 * Math.PI) / 180);
LightningStrike.SIN30DEG = Math.sin((30 * Math.PI) / 180);

const {MathUtils,Mesh,MeshBasicMaterial,Object3D} = await importShared('three');

/**
 * @fileoverview Lightning strike object generator
 *
 *
 * Usage
 *
 * const myStorm = new LightningStorm( paramsObject );
 * myStorm.position.set( ... );
 * scene.add( myStorm );
 * ...
 * myStorm.update( currentTime );
 *
 * The "currentTime" can only go forwards or be stopped.
 *
 *
 * LightningStorm parameters:
 *
 * @param {double} size Size of the storm. If no 'onRayPosition' parameter is defined, it means the side of the rectangle the storm covers.
 *
 * @param {double} minHeight Minimum height a ray can start at. If no 'onRayPosition' parameter is defined, it means the height above plane y = 0.
 *
 * @param {double} maxHeight Maximum height a ray can start at. If no 'onRayPosition' parameter is defined, it means the height above plane y = 0.
 *
 * @param {double} maxSlope The maximum inclination slope of a ray. If no 'onRayPosition' parameter is defined, it means the slope relative to plane y = 0.
 *
 * @param {integer} maxLightnings Greater than 0. The maximum number of simultaneous rays.
 *
 * @param {double} lightningMinPeriod minimum time between two consecutive rays.
 *
 * @param {double} lightningMaxPeriod maximum time between two consecutive rays.
 *
 * @param {double} lightningMinDuration The minimum time a ray can last.
 *
 * @param {double} lightningMaxDuration The maximum time a ray can last.
 *
 * @param {Object} lightningParameters The parameters for created rays. See LightningStrike (geometry)
 *
 * @param {Material} lightningMaterial The THREE.Material used for the created rays.
 *
 * @param {function} onRayPosition Optional callback with two Vector3 parameters (source, dest). You can set here the start and end points for each created ray, using the standard size, minHeight, etc parameters and other values in your algorithm.
 *
 * @param {function} onLightningDown This optional callback is called with one parameter (lightningStrike) when a ray ends propagating, so it has hit the ground.
 *
 *
 */

class LightningStorm extends Object3D {
    constructor(stormParams = {}) {
        super();

        this.isLightningStorm = true;

        // Parameters

        this.stormParams = stormParams;

        stormParams.size = stormParams.size !== undefined ? stormParams.size : 1000.0;
        stormParams.minHeight = stormParams.minHeight !== undefined ? stormParams.minHeight : 80.0;
        stormParams.maxHeight = stormParams.maxHeight !== undefined ? stormParams.maxHeight : 100.0;
        stormParams.maxSlope = stormParams.maxSlope !== undefined ? stormParams.maxSlope : 1.1;

        stormParams.maxLightnings = stormParams.maxLightnings !== undefined ? stormParams.maxLightnings : 3;

        stormParams.lightningMinPeriod = stormParams.lightningMinPeriod !== undefined ? stormParams.lightningMinPeriod : 3.0;
        stormParams.lightningMaxPeriod = stormParams.lightningMaxPeriod !== undefined ? stormParams.lightningMaxPeriod : 7.0;

        stormParams.lightningMinDuration = stormParams.lightningMinDuration !== undefined ? stormParams.lightningMinDuration : 1.0;
        stormParams.lightningMaxDuration = stormParams.lightningMaxDuration !== undefined ? stormParams.lightningMaxDuration : 2.5;

        this.lightningParameters = LightningStrike.copyParameters(stormParams.lightningParameters, stormParams.lightningParameters);

        this.lightningParameters.isEternal = false;

        this.lightningMaterial = stormParams.lightningMaterial !== undefined ? stormParams.lightningMaterial : new MeshBasicMaterial({ color: 0xb0ffff });

        if (stormParams.onRayPosition !== undefined) {
            this.onRayPosition = stormParams.onRayPosition;
        } else {
            this.onRayPosition = function (source, dest) {
                dest.set((Math.random() - 0.5) * stormParams.size, 0, (Math.random() - 0.5) * stormParams.size);

                const height = MathUtils.lerp(stormParams.minHeight, stormParams.maxHeight, Math.random());

                source
                    .set(stormParams.maxSlope * (2 * Math.random() - 1), 1, stormParams.maxSlope * (2 * Math.random() - 1))
                    .multiplyScalar(height)
                    .add(dest);
            };
        }

        this.onLightningDown = stormParams.onLightningDown;

        // Internal state

        this.inited = false;
        this.nextLightningTime = 0;
        this.lightningsMeshes = [];
        this.deadLightningsMeshes = [];

        for (let i = 0; i < this.stormParams.maxLightnings; i++) {
            const lightning = new LightningStrike(LightningStrike.copyParameters({}, this.lightningParameters));
            const mesh = new Mesh(lightning, this.lightningMaterial);
            this.deadLightningsMeshes.push(mesh);
        }
    }

    update(time) {
        if (!this.inited) {
            this.nextLightningTime = this.getNextLightningTime(time) * Math.random();
            this.inited = true;
        }

        if (time >= this.nextLightningTime) {
            // Lightning creation

            const lightningMesh = this.deadLightningsMeshes.pop();

            if (lightningMesh) {
                const lightningParams1 = LightningStrike.copyParameters(lightningMesh.geometry.rayParameters, this.lightningParameters);

                lightningParams1.birthTime = time;
                lightningParams1.deathTime = time + MathUtils.lerp(this.stormParams.lightningMinDuration, this.stormParams.lightningMaxDuration, Math.random());

                this.onRayPosition(lightningParams1.sourceOffset, lightningParams1.destOffset);

                lightningParams1.noiseSeed = Math.random();

                this.add(lightningMesh);

                this.lightningsMeshes.push(lightningMesh);
            }

            // Schedule next lightning
            this.nextLightningTime = this.getNextLightningTime(time);
        }

        let i = 0,
            il = this.lightningsMeshes.length;

        while (i < il) {
            const mesh = this.lightningsMeshes[i];

            const lightning = mesh.geometry;

            const prevState = lightning.state;

            lightning.update(time);

            if (prevState === LightningStrike.RAY_PROPAGATING && lightning.state > prevState) {
                if (this.onLightningDown) {
                    this.onLightningDown(lightning);
                }
            }

            if (lightning.state === LightningStrike.RAY_EXTINGUISHED) {
                // Lightning is to be destroyed

                this.lightningsMeshes.splice(this.lightningsMeshes.indexOf(mesh), 1);

                this.deadLightningsMeshes.push(mesh);

                this.remove(mesh);

                il--;
            } else {
                i++;
            }
        }
    }

    getNextLightningTime(currentTime) {
        return (
            currentTime +
            MathUtils.lerp(this.stormParams.lightningMinPeriod, this.stormParams.lightningMaxPeriod, Math.random()) / (this.stormParams.maxLightnings + 1)
        )
    }

    copy(source, recursive) {
        super.copy(source, recursive);

        this.stormParams.size = source.stormParams.size;
        this.stormParams.minHeight = source.stormParams.minHeight;
        this.stormParams.maxHeight = source.stormParams.maxHeight;
        this.stormParams.maxSlope = source.stormParams.maxSlope;

        this.stormParams.maxLightnings = source.stormParams.maxLightnings;

        this.stormParams.lightningMinPeriod = source.stormParams.lightningMinPeriod;
        this.stormParams.lightningMaxPeriod = source.stormParams.lightningMaxPeriod;

        this.stormParams.lightningMinDuration = source.stormParams.lightningMinDuration;
        this.stormParams.lightningMaxDuration = source.stormParams.lightningMaxDuration;

        this.lightningParameters = LightningStrike.copyParameters({}, source.lightningParameters);

        this.lightningMaterial = source.stormParams.lightningMaterial;

        this.onLightningDown = source.onLightningDown;

        return this
    }

    clone() {
        return new this.constructor(this.stormParams).copy(this)
    }
}

const {defineComponent:_defineComponent$1} = await importShared('vue');

const {unref:_unref$1,openBlock:_openBlock$1,createElementBlock:_createElementBlock$1} = await importShared('vue');

const _hoisted_1 = ["object"];
const THREE = await importShared('three');
const {watchEffect} = await importShared('vue');

const _sfc_main$1 = /* @__PURE__ */ _defineComponent$1({
  __name: "lightStorm",
  props: {
    color: { default: "#b0ffff" },
    size: { default: 2e3 },
    minHeight: { default: 100 },
    maxHeight: { default: 500 },
    maxLightnings: { default: 18 },
    roughness: { default: 0.85 },
    straightness: { default: 0.65 },
    radius0: { default: 1 },
    radius1: { default: 0.5 },
    timeScale: { default: 0.15 },
    subrayPeriod: { default: 4 },
    subrayDutyCycle: { default: 0.6 }
  },
  setup(__props) {
    const props = __props;
    const lightningColor = new THREE.Color(props.color);
    const lightningMaterial = new THREE.MeshBasicMaterial({ color: lightningColor });
    const rayDirection = new THREE.Vector3(0, -1, 0);
    let rayLength = 0;
    const vec1 = new THREE.Vector3();
    const vec2 = new THREE.Vector3();
    const rayParams = {
      roughness: props.roughness,
      straightness: props.straightness,
      radius0: props.radius0,
      radius1: props.radius1,
      timeScale: props.timeScale,
      subrayPeriod: props.subrayPeriod,
      subrayDutyCycle: props.subrayDutyCycle,
      minRadius: 0.3,
      maxIterations: 7,
      propagationTimeFactor: 0.2,
      vanishingTimeFactor: 0.9,
      maxSubrayRecursion: 3,
      ramification: 3,
      recursionProbability: 0.4,
      //@ts-ignore
      onSubrayCreation: function(segment, parentSubray, childSubray, lightningStrike) {
        lightningStrike.subrayConePosition(segment, parentSubray, childSubray, 0.6, 0.6, 0.5);
        rayLength = lightningStrike.rayParameters.sourceOffset.y;
        vec1.subVectors(childSubray.pos1, lightningStrike.rayParameters.sourceOffset);
        const proj = rayDirection.dot(vec1);
        vec2.copy(rayDirection).multiplyScalar(proj);
        vec1.sub(vec2);
        const scale = proj / rayLength > 0.5 ? rayLength / proj : 1;
        vec2.multiplyScalar(scale);
        vec1.add(vec2);
        childSubray.pos1.addVectors(vec1, lightningStrike.rayParameters.sourceOffset);
      }
    };
    const storm = new LightningStorm({
      size: props.size,
      minHeight: props.minHeight,
      maxHeight: props.maxHeight,
      maxSlope: 0.6,
      maxLightnings: props.maxLightnings,
      lightningParameters: rayParams,
      lightningMaterial
    });
    watchEffect(() => {
      const stormParams = storm.stormParams;
      stormParams.size = props.size;
      stormParams.minHeight = props.minHeight;
      stormParams.maxHeight = props.maxHeight;
      lightningMaterial.color.set(props.color);
      rayParams.roughness = props.roughness;
      rayParams.straightness = props.straightness;
      rayParams.radius0 = props.radius0;
      rayParams.radius1 = props.radius1;
      rayParams.timeScale = props.timeScale;
    });
    const { onBeforeRender } = _l();
    onBeforeRender(({ elapsed }) => {
      storm.update(elapsed);
    });
    return (_ctx, _cache) => {
      return _openBlock$1(), _createElementBlock$1("primitive", {
        object: _unref$1(storm),
        renderOrder: 9999
      }, null, 8, _hoisted_1);
    };
  }
});

const {defineComponent:_defineComponent} = await importShared('vue');

const {unref:_unref,createVNode:_createVNode,mergeProps:_mergeProps,withCtx:_withCtx,Fragment:_Fragment,openBlock:_openBlock,createElementBlock:_createElementBlock} = await importShared('vue');

const {reactive} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "lightningStorm",
  setup(__props) {
    const gridState = reactive({
      cellSize: 60,
      cellThickness: 1,
      cellColor: "#6f6f6f",
      sectionColor: "#92399e",
      sectionSize: 330,
      sectionThickness: 1.5,
      fadeDistance: 3600,
      fadeStrength: 1,
      followCamera: false,
      infiniteGrid: true
    });
    const { minHeight, maxHeight, color, roughness, straightness, radius0, radius1, timeScale } = It({
      minHeight: {
        label: "最低",
        value: 100,
        min: 10,
        max: 500,
        step: 10
      },
      maxHeight: {
        label: "最高",
        value: 1e3,
        min: 50,
        max: 2e3,
        step: 10
      },
      color: "#ffbde7",
      roughness: {
        label: "粗糙度",
        value: 0.85,
        min: 0,
        max: 1,
        step: 0.01
      },
      straightness: {
        label: "直度度",
        value: 0.65,
        min: 0,
        max: 1,
        step: 0.01
      },
      radius0: {
        label: "端部半径",
        value: 1,
        min: 0.1,
        max: 10,
        step: 0.01
      },
      radius1: {
        label: "未部半径",
        value: 0.5,
        min: 0.1,
        max: 10,
        step: 0.01
      },
      timeScale: {
        label: "时间缩放",
        value: 0.15,
        min: 0.01,
        max: 1,
        step: 0.01
      }
    });
    return (_ctx, _cache) => {
      return _openBlock(), _createElementBlock(_Fragment, null, [
        _createVNode(_sfc_main$2, {
          showAxesHelper: false,
          showGridHelper: false
        }, {
          ability: _withCtx(() => [
            _createVNode(_sfc_main$1, {
              minHeight: _unref(minHeight).value,
              maxHeight: _unref(maxHeight).value,
              color: _unref(color).value,
              roughness: _unref(roughness).value,
              straightness: _unref(straightness).value,
              radius0: _unref(radius0).value,
              radius1: _unref(radius1).value,
              timeScale: _unref(timeScale).value
            }, null, 8, ["minHeight", "maxHeight", "color", "roughness", "straightness", "radius0", "radius1", "timeScale"]),
            _createVNode(_unref(_sfc_main$3), _mergeProps({ args: [100, 100] }, gridState, { position: [0, -50, 0] }), null, 16)
          ]),
          _: 1
        }),
        _createVNode(_unref(Kt))
      ], 64);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=lightningStorm.KasxyM0K1767105581793.js.map
