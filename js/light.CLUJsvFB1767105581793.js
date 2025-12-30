import { baseAssignValue, assignValue, setToString, overRest, identity, isObject, isArrayLike, isIndex, eq, isPrototype, arrayLikeKeys, isObjectLike, isBuffer, isTypedArray, isArray, cloneBuffer, cloneTypedArray, isPlainObject, isArguments, isFunction, initCloneObject, Stack, importShared } from './index.BxB45aCK1767105581793.js';

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

/**
 * This function is like `assignValue` except that it doesn't assign
 * `undefined` values.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignMergeValue(object, key, value) {
  if ((value !== undefined && !eq(object[key], value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Gets the value at `key`, unless `key` is "__proto__" or "constructor".
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function safeGet(object, key) {
  if (key === 'constructor' && typeof object[key] === 'function') {
    return;
  }

  if (key == '__proto__') {
    return;
  }

  return object[key];
}

/**
 * Converts `value` to a plain object flattening inherited enumerable string
 * keyed properties of `value` to own properties of the plain object.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Object} Returns the converted plain object.
 * @example
 *
 * function Foo() {
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.assign({ 'a': 1 }, new Foo);
 * // => { 'a': 1, 'b': 2 }
 *
 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
 * // => { 'a': 1, 'b': 2, 'c': 3 }
 */
function toPlainObject(value) {
  return copyObject(value, keysIn(value));
}

/**
 * A specialized version of `baseMerge` for arrays and objects which performs
 * deep merges and tracks traversed objects enabling objects with circular
 * references to be merged.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {string} key The key of the value to merge.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} mergeFunc The function to merge values.
 * @param {Function} [customizer] The function to customize assigned values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = safeGet(object, key),
      srcValue = safeGet(source, key),
      stacked = stack.get(srcValue);

  if (stacked) {
    assignMergeValue(object, key, stacked);
    return;
  }
  var newValue = customizer
    ? customizer(objValue, srcValue, (key + ''), object, source, stack)
    : undefined;

  var isCommon = newValue === undefined;

  if (isCommon) {
    var isArr = isArray(srcValue),
        isBuff = !isArr && isBuffer(srcValue),
        isTyped = !isArr && !isBuff && isTypedArray(srcValue);

    newValue = srcValue;
    if (isArr || isBuff || isTyped) {
      if (isArray(objValue)) {
        newValue = objValue;
      }
      else if (isArrayLikeObject(objValue)) {
        newValue = copyArray(objValue);
      }
      else if (isBuff) {
        isCommon = false;
        newValue = cloneBuffer(srcValue, true);
      }
      else if (isTyped) {
        isCommon = false;
        newValue = cloneTypedArray(srcValue, true);
      }
      else {
        newValue = [];
      }
    }
    else if (isPlainObject(srcValue) || isArguments(srcValue)) {
      newValue = objValue;
      if (isArguments(objValue)) {
        newValue = toPlainObject(objValue);
      }
      else if (!isObject(objValue) || isFunction(objValue)) {
        newValue = initCloneObject(srcValue);
      }
    }
    else {
      isCommon = false;
    }
  }
  if (isCommon) {
    // Recursively merge objects and arrays (susceptible to call stack limits).
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack['delete'](srcValue);
  }
  assignMergeValue(object, key, newValue);
}

/**
 * The base implementation of `_.merge` without support for multiple sources.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} [customizer] The function to customize merged values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMerge(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }
  baseFor(source, function(srcValue, key) {
    stack || (stack = new Stack);
    if (isObject(srcValue)) {
      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
    }
    else {
      var newValue = customizer
        ? customizer(safeGet(object, key), srcValue, (key + ''), object, source, stack)
        : undefined;

      if (newValue === undefined) {
        newValue = srcValue;
      }
      assignMergeValue(object, key, newValue);
    }
  }, keysIn);
}

/**
 * This method is like `_.assign` except that it recursively merges own and
 * inherited enumerable string keyed properties of source objects into the
 * destination object. Source properties that resolve to `undefined` are
 * skipped if a destination value exists. Array and plain object properties
 * are merged recursively. Other objects and value types are overridden by
 * assignment. Source objects are applied from left to right. Subsequent
 * sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 0.5.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = {
 *   'a': [{ 'b': 2 }, { 'd': 4 }]
 * };
 *
 * var other = {
 *   'a': [{ 'c': 3 }, { 'e': 5 }]
 * };
 *
 * _.merge(object, other);
 * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
 */
var merge = createAssigner(function(object, source, srcIndex) {
  baseMerge(object, source, srcIndex);
});

function plugin$1(options) {
  let _bPrefix = ".";
  let _ePrefix = "__";
  let _mPrefix = "--";
  let c;
  if (options) {
    let t = options.blockPrefix;
    if (t) {
      _bPrefix = t;
    }
    t = options.elementPrefix;
    if (t) {
      _ePrefix = t;
    }
    t = options.modifierPrefix;
    if (t) {
      _mPrefix = t;
    }
  }
  const _plugin = {
    install(instance) {
      c = instance.c;
      const ctx = instance.context;
      ctx.bem = {};
      ctx.bem.b = null;
      ctx.bem.els = null;
    }
  };
  function b(arg) {
    let memorizedB;
    let memorizedE;
    return {
      before(ctx) {
        memorizedB = ctx.bem.b;
        memorizedE = ctx.bem.els;
        ctx.bem.els = null;
      },
      after(ctx) {
        ctx.bem.b = memorizedB;
        ctx.bem.els = memorizedE;
      },
      $({ context, props }) {
        arg = typeof arg === "string" ? arg : arg({ context, props });
        context.bem.b = arg;
        return `${(props === null || props === void 0 ? void 0 : props.bPrefix) || _bPrefix}${context.bem.b}`;
      }
    };
  }
  function e(arg) {
    let memorizedE;
    return {
      before(ctx) {
        memorizedE = ctx.bem.els;
      },
      after(ctx) {
        ctx.bem.els = memorizedE;
      },
      $({ context, props }) {
        arg = typeof arg === "string" ? arg : arg({ context, props });
        context.bem.els = arg.split(",").map((v) => v.trim());
        return context.bem.els.map((el) => `${(props === null || props === void 0 ? void 0 : props.bPrefix) || _bPrefix}${context.bem.b}${_ePrefix}${el}`).join(", ");
      }
    };
  }
  function m(arg) {
    return {
      $({ context, props }) {
        arg = typeof arg === "string" ? arg : arg({ context, props });
        const modifiers = arg.split(",").map((v) => v.trim());
        function elementToSelector(el) {
          return modifiers.map((modifier) => `&${(props === null || props === void 0 ? void 0 : props.bPrefix) || _bPrefix}${context.bem.b}${el !== void 0 ? `${_ePrefix}${el}` : ""}${_mPrefix}${modifier}`).join(", ");
        }
        const els = context.bem.els;
        if (els !== null) {
          return elementToSelector(els[0]);
        } else {
          return elementToSelector();
        }
      }
    };
  }
  function notM(arg) {
    return {
      $({ context, props }) {
        arg = typeof arg === "string" ? arg : arg({ context, props });
        const els = context.bem.els;
        return `&:not(${(props === null || props === void 0 ? void 0 : props.bPrefix) || _bPrefix}${context.bem.b}${els !== null && els.length > 0 ? `${_ePrefix}${els[0]}` : ""}${_mPrefix}${arg})`;
      }
    };
  }
  const cB = (...args) => c(b(args[0]), args[1], args[2]);
  const cE = (...args) => c(e(args[0]), args[1], args[2]);
  const cM = (...args) => c(m(args[0]), args[1], args[2]);
  const cNotM = (...args) => c(notM(args[0]), args[1], args[2]);
  Object.assign(_plugin, {
    cB,
    cE,
    cM,
    cNotM
  });
  return _plugin;
}

function ampCount(selector) {
    let cnt = 0;
    for (let i = 0; i < selector.length; ++i) {
        if (selector[i] === '&')
            ++cnt;
    }
    return cnt;
}
/**
 * Don't just use ',' to separate css selector. For example:
 * x:(a, b) {} will be split into 'x:(a' and 'b)', which is not expected.
 * Make sure comma doesn't exist inside parentheses.
 */
const separatorRegex = /\s*,(?![^(]*\))\s*/g;
const extraSpaceRegex = /\s+/g;
/**
 * selector must includes '&'
 * selector is trimmed
 * every part of amp is trimmed
 */
function resolveSelectorWithAmp(amp, selector) {
    const nextAmp = [];
    selector.split(separatorRegex).forEach(partialSelector => {
        let round = ampCount(partialSelector);
        // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
        if (!round) {
            amp.forEach(partialAmp => {
                nextAmp.push(
                // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
                (partialAmp && partialAmp + ' ') + partialSelector);
            });
            return;
        }
        else if (round === 1) {
            amp.forEach(partialAmp => {
                nextAmp.push(partialSelector.replace('&', partialAmp));
            });
            return;
        }
        let partialNextAmp = [
            partialSelector
        ];
        // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
        while (round--) {
            const nextPartialNextAmp = [];
            partialNextAmp.forEach(selectorItr => {
                amp.forEach(partialAmp => {
                    nextPartialNextAmp.push(selectorItr.replace('&', partialAmp));
                });
            });
            partialNextAmp = nextPartialNextAmp;
        }
        partialNextAmp.forEach(part => nextAmp.push(part));
    });
    return nextAmp;
}
/**
 * selector mustn't includes '&'
 * selector is trimmed
 */
function resolveSelector(amp, selector) {
    const nextAmp = [];
    selector.split(separatorRegex).forEach(partialSelector => {
        amp.forEach(partialAmp => {
            // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
            nextAmp.push(((partialAmp && partialAmp + ' ') + partialSelector));
        });
    });
    return nextAmp;
}
function parseSelectorPath(selectorPaths) {
    let amp = [''];
    selectorPaths.forEach(selector => {
        // eslint-disable-next-line
        selector = selector && selector.trim();
        if (
        // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
        !selector) {
            /**
             * if it's a empty selector, do nothing
             */
            return;
        }
        // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
        if (selector.includes('&')) {
            amp = resolveSelectorWithAmp(amp, selector);
        }
        else {
            amp = resolveSelector(amp, selector);
        }
    });
    return amp.join(', ').replace(extraSpaceRegex, ' ');
}

function removeElement(el) {
    /* istanbul ignore if */
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (!el)
        return;
    const parentElement = el.parentElement;
    /* istanbul ignore else */
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (parentElement)
        parentElement.removeChild(el);
}
function queryElement(id, parent) {
    return (parent !== null && parent !== void 0 ? parent : document.head).querySelector(`style[cssr-id="${id}"]`);
}
function createElement(id) {
    const el = document.createElement('style');
    el.setAttribute('cssr-id', id);
    return el;
}
function isMediaOrSupports(selector) {
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (!selector)
        return false;
    return /^\s*@(s|m)/.test(selector);
}

const kebabRegex = /[A-Z]/g;
function kebabCase(pattern) {
    return pattern.replace(kebabRegex, match => '-' + match.toLowerCase());
}
/** TODO: refine it to solve nested object */
function unwrapProperty(prop, indent = '  ') {
    if (typeof prop === 'object' && prop !== null) {
        return (' {\n' +
            Object.entries(prop).map(v => {
                return indent + `  ${kebabCase(v[0])}: ${v[1]};`;
            }).join('\n') +
            '\n' + indent + '}');
    }
    return `: ${prop};`;
}
/** unwrap properties */
function unwrapProperties(props, instance, params) {
    if (typeof props === 'function') {
        return props({
            context: instance.context,
            props: params
        });
    }
    return props;
}
function createStyle(selector, props, instance, params) {
    if (!props)
        return '';
    // eslint-disable-next-line
    const unwrappedProps = unwrapProperties(props, instance, params);
    if (!unwrappedProps)
        return '';
    if (typeof unwrappedProps === 'string') {
        return `${selector} {\n${unwrappedProps}\n}`;
    }
    const propertyNames = Object.keys(unwrappedProps);
    if (propertyNames.length === 0) {
        if (instance.config.keepEmptyBlock)
            return selector + ' {\n}';
        return '';
    }
    const statements = selector
        ? [
            selector + ' {'
        ]
        : [];
    propertyNames.forEach(propertyName => {
        const property = unwrappedProps[propertyName];
        if (propertyName === 'raw') {
            statements.push('\n' + property + '\n');
            return;
        }
        propertyName = kebabCase(propertyName);
        if (property !== null && property !== undefined) {
            statements.push(`  ${propertyName}${unwrapProperty(property)}`);
        }
    });
    if (selector) {
        statements.push('}');
    }
    return statements.join('\n');
}
function loopCNodeListWithCallback(children, options, callback) {
    /* istanbul ignore if */
    if (!children)
        return;
    children.forEach(child => {
        if (Array.isArray(child)) {
            loopCNodeListWithCallback(child, options, callback);
        }
        else if (typeof child === 'function') {
            const grandChildren = child(options);
            if (Array.isArray(grandChildren)) {
                loopCNodeListWithCallback(grandChildren, options, callback);
            }
            else if (grandChildren) {
                callback(grandChildren);
            }
        }
        else if (child) {
            callback(child);
        }
    });
}
function traverseCNode(node, selectorPaths, styles, instance, params) {
    const $ = node.$;
    let blockSelector = '';
    if (!$ || typeof $ === 'string') {
        if (isMediaOrSupports($)) {
            blockSelector = $;
        }
        else {
            // as a string selector
            selectorPaths.push($);
        }
    }
    else if (typeof $ === 'function') {
        const selector = $({
            context: instance.context,
            props: params
        });
        if (isMediaOrSupports(selector)) {
            blockSelector = selector;
        }
        else {
            // as a lazy selector
            selectorPaths.push(selector);
        }
    }
    else { // as a option selector
        if ($.before)
            $.before(instance.context);
        if (!$.$ || typeof $.$ === 'string') {
            if (isMediaOrSupports($.$)) {
                blockSelector = $.$;
            }
            else {
                // as a string selector
                selectorPaths.push($.$);
            }
        }
        else /* istanbul ignore else */ if ($.$) {
            const selector = $.$({
                context: instance.context,
                props: params
            });
            if (isMediaOrSupports(selector)) {
                blockSelector = selector;
            }
            else {
                // as a lazy selector
                selectorPaths.push(selector);
            }
        }
    }
    const selector = parseSelectorPath(selectorPaths);
    const style = createStyle(selector, node.props, instance, params);
    if (blockSelector) {
        styles.push(`${blockSelector} {`);
    }
    else if (style.length) {
        styles.push(style);
    }
    if (node.children) {
        loopCNodeListWithCallback(node.children, {
            context: instance.context,
            props: params
        }, childNode => {
            if (typeof childNode === 'string') {
                const style = createStyle(selector, { raw: childNode }, instance, params);
                styles.push(style);
            }
            else {
                traverseCNode(childNode, selectorPaths, styles, instance, params);
            }
        });
    }
    selectorPaths.pop();
    if (blockSelector) {
        styles.push('}');
    }
    if ($ && $.after)
        $.after(instance.context);
}
function render(node, instance, props) {
    const styles = [];
    traverseCNode(node, [], styles, instance, props);
    return styles.join('\n\n');
}

/* eslint-disable */
// Inspired by https://github.com/garycourt/murmurhash-js
// Ported from https://github.com/aappleby/smhasher/blob/61a0530f28277f2e850bfc39600ce61d02b518de/src/MurmurHash2.cpp#L37-L86
function murmur2(str) {
  // 'm' and 'r' are mixing constants generated offline.
  // They're not really 'magic', they just happen to work well.
  // const m = 0x5bd1e995;
  // const r = 24;
  // Initialize the hash
  var h = 0; // Mix 4 bytes at a time into the hash

  var k,
      i = 0,
      len = str.length;

  for (; len >= 4; ++i, len -= 4) {
    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
    k =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16);
    k ^=
    /* k >>> r: */
    k >>> 24;
    h =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16) ^
    /* Math.imul(h, m): */
    (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Handle the last few bytes of the input array


  switch (len) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;

    case 2:
      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;

    case 1:
      h ^= str.charCodeAt(i) & 0xff;
      h =
      /* Math.imul(h, m): */
      (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Do a few final mixes of the hash to ensure the last few
  // bytes are well-incorporated.


  h ^= h >>> 13;
  h =
  /* Math.imul(h, m): */
  (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  return ((h ^ h >>> 15) >>> 0).toString(36);
}

/* eslint-disable @typescript-eslint/prefer-ts-expect-error */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
if (typeof window !== 'undefined') {
    window.__cssrContext = {};
}
function unmount(instance, node, id, parent) {
    const { els } = node;
    // If id is undefined, unmount all styles
    if (id === undefined) {
        els.forEach(removeElement);
        node.els = [];
    }
    else {
        const target = queryElement(id, parent);
        // eslint-disable-next-line
        if (target && els.includes(target)) {
            removeElement(target);
            node.els = els.filter((el) => el !== target);
        }
    }
}
function addElementToList(els, target) {
    els.push(target);
}
function mount(instance, node, id, props, head, force, anchorMetaName, parent, ssrAdapter
// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
) {
    let style;
    if (id === undefined) {
        style = node.render(props);
        id = murmur2(style);
    }
    if (ssrAdapter) {
        ssrAdapter.adapter(id, style !== null && style !== void 0 ? style : node.render(props));
        return;
    }
    if (parent === undefined) {
        parent = document.head;
    }
    const queriedTarget = queryElement(id, parent);
    if (queriedTarget !== null && !force) {
        return queriedTarget;
    }
    const target = queriedTarget !== null && queriedTarget !== void 0 ? queriedTarget : createElement(id);
    if (style === undefined)
        style = node.render(props);
    target.textContent = style;
    if (queriedTarget !== null)
        return queriedTarget;
    if (anchorMetaName) {
        const anchorMetaEl = parent.querySelector(`meta[name="${anchorMetaName}"]`);
        if (anchorMetaEl) {
            parent.insertBefore(target, anchorMetaEl);
            addElementToList(node.els, target);
            return target;
        }
    }
    if (head) {
        parent.insertBefore(target, parent.querySelector('style, link'));
    }
    else {
        parent.appendChild(target);
    }
    addElementToList(node.els, target);
    return target;
}

function wrappedRender(props) {
    return render(this, this.instance, props);
}
// do not guard node calling, it should throw an error.
function wrappedMount(options = {}
// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
) {
    const { id, ssr, props, head = false, force = false, anchorMetaName, parent } = options;
    const targetElement = mount(this.instance, this, id, props, head, force, anchorMetaName, parent, ssr);
    return targetElement;
}
function wrappedUnmount(options = {}) {
    /* istanbul ignore next */
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    const { id, parent } = options;
    unmount(this.instance, this, id, parent);
}
const createCNode = function (instance, $, props, children) {
    return {
        instance,
        $,
        props,
        children,
        els: [],
        render: wrappedRender,
        mount: wrappedMount,
        unmount: wrappedUnmount
    };
};
const c$1 = function (instance, $, props, children) {
    if (Array.isArray($)) {
        return createCNode(instance, { $: null }, null, $);
    }
    else if (Array.isArray(props)) {
        return createCNode(instance, $, null, props);
    }
    else if (Array.isArray(children)) {
        return createCNode(instance, $, props, children);
    }
    else {
        return createCNode(instance, $, props, null);
    }
};

function CssRender(config = {}) {
    const cssr = {
        c: ((...args) => c$1(cssr, ...args)),
        use: (plugin, ...args) => plugin.install(cssr, ...args),
        find: queryElement,
        context: {},
        config
    };
    return cssr;
}

const namespace = 'n';
const prefix$1 = `.${namespace}-`;
const elementPrefix = '__';
const modifierPrefix = '--';
const cssr = CssRender();
const plugin = plugin$1({
  blockPrefix: prefix$1,
  elementPrefix,
  modifierPrefix
});
cssr.use(plugin);
const {
  c,
  find
} = cssr;
const {
  cB,
  cE,
  cM,
  cNotM
} = plugin;
function insideModal(style) {
  return c(({
    props: {
      bPrefix
    }
  }) => `${bPrefix || prefix$1}modal, ${bPrefix || prefix$1}drawer`, [style]);
}
function insidePopover(style) {
  return c(({
    props: {
      bPrefix
    }
  }) => `${bPrefix || prefix$1}popover`, [style]);
}
function asModal(style) {
  return c(({
    props: {
      bPrefix
    }
  }) => `&${bPrefix || prefix$1}modal`, style);
}
// child block
const cCB = (...args) => {
  return c('>', [cB(...args)]);
};
function createKey(prefix, suffix) {
  return prefix + (suffix === 'default' ? '' : suffix.replace(/^[a-z]/, startChar => startChar.toUpperCase()));
}

// src: https://www.w3schools.com/colors/colors_names.asp
const colors = {
    aliceblue: "#F0F8FF",
    antiquewhite: "#FAEBD7",
    aqua: "#0FF",
    aquamarine: "#7FFFD4",
    azure: "#F0FFFF",
    beige: "#F5F5DC",
    bisque: "#FFE4C4",
    black: "#000",
    blanchedalmond: "#FFEBCD",
    blue: "#00F",
    blueviolet: "#8A2BE2",
    brown: "#A52A2A",
    burlywood: "#DEB887",
    cadetblue: "#5F9EA0",
    chartreuse: "#7FFF00",
    chocolate: "#D2691E",
    coral: "#FF7F50",
    cornflowerblue: "#6495ED",
    cornsilk: "#FFF8DC",
    crimson: "#DC143C",
    cyan: "#0FF",
    darkblue: "#00008B",
    darkcyan: "#008B8B",
    darkgoldenrod: "#B8860B",
    darkgray: "#A9A9A9",
    darkgrey: "#A9A9A9",
    darkgreen: "#006400",
    darkkhaki: "#BDB76B",
    darkmagenta: "#8B008B",
    darkolivegreen: "#556B2F",
    darkorange: "#FF8C00",
    darkorchid: "#9932CC",
    darkred: "#8B0000",
    darksalmon: "#E9967A",
    darkseagreen: "#8FBC8F",
    darkslateblue: "#483D8B",
    darkslategray: "#2F4F4F",
    darkslategrey: "#2F4F4F",
    darkturquoise: "#00CED1",
    darkviolet: "#9400D3",
    deeppink: "#FF1493",
    deepskyblue: "#00BFFF",
    dimgray: "#696969",
    dimgrey: "#696969",
    dodgerblue: "#1E90FF",
    firebrick: "#B22222",
    floralwhite: "#FFFAF0",
    forestgreen: "#228B22",
    fuchsia: "#F0F",
    gainsboro: "#DCDCDC",
    ghostwhite: "#F8F8FF",
    gold: "#FFD700",
    goldenrod: "#DAA520",
    gray: "#808080",
    grey: "#808080",
    green: "#008000",
    greenyellow: "#ADFF2F",
    honeydew: "#F0FFF0",
    hotpink: "#FF69B4",
    indianred: "#CD5C5C",
    indigo: "#4B0082",
    ivory: "#FFFFF0",
    khaki: "#F0E68C",
    lavender: "#E6E6FA",
    lavenderblush: "#FFF0F5",
    lawngreen: "#7CFC00",
    lemonchiffon: "#FFFACD",
    lightblue: "#ADD8E6",
    lightcoral: "#F08080",
    lightcyan: "#E0FFFF",
    lightgoldenrodyellow: "#FAFAD2",
    lightgray: "#D3D3D3",
    lightgrey: "#D3D3D3",
    lightgreen: "#90EE90",
    lightpink: "#FFB6C1",
    lightsalmon: "#FFA07A",
    lightseagreen: "#20B2AA",
    lightskyblue: "#87CEFA",
    lightslategray: "#778899",
    lightslategrey: "#778899",
    lightsteelblue: "#B0C4DE",
    lightyellow: "#FFFFE0",
    lime: "#0F0",
    limegreen: "#32CD32",
    linen: "#FAF0E6",
    magenta: "#F0F",
    maroon: "#800000",
    mediumaquamarine: "#66CDAA",
    mediumblue: "#0000CD",
    mediumorchid: "#BA55D3",
    mediumpurple: "#9370DB",
    mediumseagreen: "#3CB371",
    mediumslateblue: "#7B68EE",
    mediumspringgreen: "#00FA9A",
    mediumturquoise: "#48D1CC",
    mediumvioletred: "#C71585",
    midnightblue: "#191970",
    mintcream: "#F5FFFA",
    mistyrose: "#FFE4E1",
    moccasin: "#FFE4B5",
    navajowhite: "#FFDEAD",
    navy: "#000080",
    oldlace: "#FDF5E6",
    olive: "#808000",
    olivedrab: "#6B8E23",
    orange: "#FFA500",
    orangered: "#FF4500",
    orchid: "#DA70D6",
    palegoldenrod: "#EEE8AA",
    palegreen: "#98FB98",
    paleturquoise: "#AFEEEE",
    palevioletred: "#DB7093",
    papayawhip: "#FFEFD5",
    peachpuff: "#FFDAB9",
    peru: "#CD853F",
    pink: "#FFC0CB",
    plum: "#DDA0DD",
    powderblue: "#B0E0E6",
    purple: "#800080",
    rebeccapurple: "#663399",
    red: "#F00",
    rosybrown: "#BC8F8F",
    royalblue: "#4169E1",
    saddlebrown: "#8B4513",
    salmon: "#FA8072",
    sandybrown: "#F4A460",
    seagreen: "#2E8B57",
    seashell: "#FFF5EE",
    sienna: "#A0522D",
    silver: "#C0C0C0",
    skyblue: "#87CEEB",
    slateblue: "#6A5ACD",
    slategray: "#708090",
    slategrey: "#708090",
    snow: "#FFFAFA",
    springgreen: "#00FF7F",
    steelblue: "#4682B4",
    tan: "#D2B48C",
    teal: "#008080",
    thistle: "#D8BFD8",
    tomato: "#FF6347",
    turquoise: "#40E0D0",
    violet: "#EE82EE",
    wheat: "#F5DEB3",
    white: "#FFF",
    whitesmoke: "#F5F5F5",
    yellow: "#FF0",
    yellowgreen: "#9ACD32",
    transparent: "#0000"
};

// All the algorithms credit to https://stackoverflow.com/questions/36721830/convert-hsl-to-rgb-and-hex/54014428#54014428
// original author: Kamil Kiełczewski
/**
 * @param h 360
 * @param s 100
 * @param l 100
 * @returns [h, s, v] 360, 100, 100
 */
function hsl2hsv(h, s, l) {
    s /= 100;
    l /= 100;
    const v = s * Math.min(l, 1 - l) + l;
    return [h, v ? (2 - (2 * l) / v) * 100 : 0, v * 100];
}
/**
 * @param h 360
 * @param s 100
 * @param v 100
 * @returns [h, s, l] 360, 100, 100
 */
function hsv2hsl(h, s, v) {
    s /= 100;
    v /= 100;
    const l = v - (v * s) / 2;
    const m = Math.min(l, 1 - l);
    return [h, m ? ((v - l) / m) * 100 : 0, l * 100];
}
/**
 * @param h 360
 * @param s 100
 * @param v 100
 * @returns [r, g, b] 255, 255, 255
 */
function hsv2rgb(h, s, v) {
    s /= 100;
    v /= 100;
    let f = (n, k = (n + h / 60) % 6) => v - v * s * Math.max(Math.min(k, 4 - k, 1), 0);
    return [f(5) * 255, f(3) * 255, f(1) * 255];
}
/**
 * @param r 255
 * @param g 255
 * @param b 255
 * @returns [360, 100, 100]
 */
function rgb2hsv(r, g, b) {
    r /= 255;
    g /= 255;
    b /= 255;
    let v = Math.max(r, g, b), c = v - Math.min(r, g, b);
    let h = c && (v == r ? (g - b) / c : v == g ? 2 + (b - r) / c : 4 + (r - g) / c);
    return [60 * (h < 0 ? h + 6 : h), v && (c / v) * 100, v * 100];
}
/**
 * @param r 255
 * @param g 255
 * @param b 255
 * @returns [360, 100, 100]
 */
function rgb2hsl(r, g, b) {
    r /= 255;
    g /= 255;
    b /= 255;
    let v = Math.max(r, g, b), c = v - Math.min(r, g, b), f = 1 - Math.abs(v + v - c - 1);
    let h = c && (v == r ? (g - b) / c : v == g ? 2 + (b - r) / c : 4 + (r - g) / c);
    return [60 * (h < 0 ? h + 6 : h), f ? (c / f) * 100 : 0, (v + v - c) * 50];
}
/**
 * @param h 360
 * @param s 100
 * @param l 100
 * @returns [255, 255, 255]
 */
function hsl2rgb(h, s, l) {
    s /= 100;
    l /= 100;
    let a = s * Math.min(l, 1 - l);
    let f = (n, k = (n + h / 30) % 12) => l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return [f(0) * 255, f(8) * 255, f(4) * 255];
}

const prefix = '^\\s*';
const suffix = '\\s*$';
const percent = '\\s*((\\.\\d+)|(\\d+(\\.\\d*)?))%\\s*'; // 4 offset
const float = '\\s*((\\.\\d+)|(\\d+(\\.\\d*)?))\\s*'; // 4 offset
const hex = '([0-9A-Fa-f])';
const dhex = '([0-9A-Fa-f]{2})';
const hslRegex = new RegExp(`${prefix}hsl\\s*\\(${float},${percent},${percent}\\)${suffix}`);
const hsvRegex = new RegExp(`${prefix}hsv\\s*\\(${float},${percent},${percent}\\)${suffix}`);
const hslaRegex = new RegExp(`${prefix}hsla\\s*\\(${float},${percent},${percent},${float}\\)${suffix}`);
const hsvaRegex = new RegExp(`${prefix}hsva\\s*\\(${float},${percent},${percent},${float}\\)${suffix}`);
const rgbRegex = new RegExp(`${prefix}rgb\\s*\\(${float},${float},${float}\\)${suffix}`);
const rgbaRegex = new RegExp(`${prefix}rgba\\s*\\(${float},${float},${float},${float}\\)${suffix}`);
const sHexRegex = new RegExp(`${prefix}#${hex}${hex}${hex}${suffix}`);
const hexRegex = new RegExp(`${prefix}#${dhex}${dhex}${dhex}${suffix}`);
const sHexaRegex = new RegExp(`${prefix}#${hex}${hex}${hex}${hex}${suffix}`);
const hexaRegex = new RegExp(`${prefix}#${dhex}${dhex}${dhex}${dhex}${suffix}`);
function parseHex(value) {
    return parseInt(value, 16);
}
/**
 * Convert color string to hsla array
 * @param color format like hsl(180, 100%, 100%), hsla(180, 100%, 100%, 1)
 * @returns
 */
function hsla(color) {
    try {
        let i;
        if ((i = hslaRegex.exec(color))) {
            return [
                roundDeg(i[1]),
                roundPercent(i[5]),
                roundPercent(i[9]),
                roundAlpha(i[13])
            ];
        }
        else if ((i = hslRegex.exec(color))) {
            return [roundDeg(i[1]), roundPercent(i[5]), roundPercent(i[9]), 1];
        }
        throw new Error(`[seemly/hsla]: Invalid color value ${color}.`);
    }
    catch (e) {
        throw e;
    }
}
/**
 * Convert color string to hsva array
 * @param color format like hsv(180, 100%, 100%), hsva(180, 100%, 100%, 1)
 * @returns
 */
function hsva(color) {
    try {
        let i;
        if ((i = hsvaRegex.exec(color))) {
            return [
                roundDeg(i[1]),
                roundPercent(i[5]),
                roundPercent(i[9]),
                roundAlpha(i[13])
            ];
        }
        else if ((i = hsvRegex.exec(color))) {
            return [roundDeg(i[1]), roundPercent(i[5]), roundPercent(i[9]), 1];
        }
        throw new Error(`[seemly/hsva]: Invalid color value ${color}.`);
    }
    catch (e) {
        throw e;
    }
}
/**
 * Convert color string to rgba array.
 * @param color format like #000[0], #000000[00], rgb(0, 0, 0),
 * rgba(0, 0, 0, 0), hsl(a) color, hsv(a) color and color keywords and
 * transparent
 * @returns
 */
function rgba(color) {
    try {
        let i;
        if ((i = hexRegex.exec(color))) {
            return [parseHex(i[1]), parseHex(i[2]), parseHex(i[3]), 1];
        }
        else if ((i = rgbRegex.exec(color))) {
            return [roundChannel(i[1]), roundChannel(i[5]), roundChannel(i[9]), 1];
        }
        else if ((i = rgbaRegex.exec(color))) {
            return [
                roundChannel(i[1]),
                roundChannel(i[5]),
                roundChannel(i[9]),
                roundAlpha(i[13])
            ];
        }
        else if ((i = sHexRegex.exec(color))) {
            return [
                parseHex(i[1] + i[1]),
                parseHex(i[2] + i[2]),
                parseHex(i[3] + i[3]),
                1
            ];
        }
        else if ((i = hexaRegex.exec(color))) {
            return [
                parseHex(i[1]),
                parseHex(i[2]),
                parseHex(i[3]),
                roundAlpha(parseHex(i[4]) / 255)
            ];
        }
        else if ((i = sHexaRegex.exec(color))) {
            return [
                parseHex(i[1] + i[1]),
                parseHex(i[2] + i[2]),
                parseHex(i[3] + i[3]),
                roundAlpha(parseHex(i[4] + i[4]) / 255)
            ];
        }
        else if (color in colors) {
            return rgba(colors[color]);
        }
        else if (hslRegex.test(color) || hslaRegex.test(color)) {
            const [h, s, l, a] = hsla(color);
            return [...hsl2rgb(h, s, l), a];
        }
        else if (hsvRegex.test(color) || hsvaRegex.test(color)) {
            const [h, s, v, a] = hsva(color);
            return [...hsv2rgb(h, s, v), a];
        }
        throw new Error(`[seemly/rgba]: Invalid color value ${color}.`);
    }
    catch (e) {
        throw e;
    }
}
function normalizeAlpha(alphaValue) {
    return alphaValue > 1 ? 1 : alphaValue < 0 ? 0 : alphaValue;
}
function stringifyRgb(r, g, b) {
    return `rgb(${roundChannel(r)}, ${roundChannel(g)}, ${roundChannel(b)})`;
}
function stringifyRgba(r, g, b, a) {
    return `rgba(${roundChannel(r)}, ${roundChannel(g)}, ${roundChannel(b)}, ${normalizeAlpha(a)})`;
}
function compositeChannel(v1, a1, v2, a2, a) {
    return roundChannel((v1 * a1 * (1 - a2) + v2 * a2) / a);
}
function composite(background, overlay) {
    if (!Array.isArray(background))
        background = rgba(background);
    if (!Array.isArray(overlay))
        overlay = rgba(overlay);
    const a1 = background[3];
    const a2 = overlay[3];
    const alpha = roundAlpha(a1 + a2 - a1 * a2);
    return stringifyRgba(compositeChannel(background[0], a1, overlay[0], a2, alpha), compositeChannel(background[1], a1, overlay[1], a2, alpha), compositeChannel(background[2], a1, overlay[2], a2, alpha), alpha);
}
function changeColor(base, options) {
    const [r, g, b, a = 1] = Array.isArray(base) ? base : rgba(base);
    if (typeof options.alpha === 'number') {
        return stringifyRgba(r, g, b, options.alpha);
    }
    return stringifyRgba(r, g, b, a);
}
function scaleColor(base, options) {
    const [r, g, b, a = 1] = Array.isArray(base) ? base : rgba(base);
    const { lightness = 1, alpha = 1 } = options;
    return toRgbaString([r * lightness, g * lightness, b * lightness, a * alpha]);
}
function roundAlpha(value) {
    const v = Math.round(Number(value) * 100) / 100;
    if (v > 1)
        return 1;
    if (v < 0)
        return 0;
    return v;
}
function roundDeg(value) {
    const v = Math.round(Number(value));
    if (v >= 360)
        return 0;
    if (v < 0)
        return 0;
    return v;
}
function roundChannel(value) {
    const v = Math.round(Number(value));
    if (v > 255)
        return 255;
    if (v < 0)
        return 0;
    return v;
}
function roundPercent(value) {
    const v = Math.round(Number(value));
    if (v > 100)
        return 100;
    if (v < 0)
        return 0;
    return v;
}
function toRgbString(base) {
    const [r, g, b] = Array.isArray(base) ? base : rgba(base);
    return stringifyRgb(r, g, b);
}
function toRgbaString(base) {
    const [r, g, b] = base;
    if (3 in base) {
        return `rgba(${roundChannel(r)}, ${roundChannel(g)}, ${roundChannel(b)}, ${roundAlpha(base[3])})`;
    }
    return `rgba(${roundChannel(r)}, ${roundChannel(g)}, ${roundChannel(b)}, 1)`;
}
function toHsvString(base) {
    return `hsv(${roundDeg(base[0])}, ${roundPercent(base[1])}%, ${roundPercent(base[2])}%)`;
}
function toHsvaString(base) {
    const [h, s, v] = base;
    if (3 in base) {
        return `hsva(${roundDeg(h)}, ${roundPercent(s)}%, ${roundPercent(v)}%, ${roundAlpha(base[3])})`;
    }
    return `hsva(${roundDeg(h)}, ${roundPercent(s)}%, ${roundPercent(v)}%, 1)`;
}
function toHslString(base) {
    return `hsl(${roundDeg(base[0])}, ${roundPercent(base[1])}%, ${roundPercent(base[2])}%)`;
}
function toHslaString(base) {
    const [h, s, l] = base;
    if (3 in base) {
        return `hsla(${roundDeg(h)}, ${roundPercent(s)}%, ${roundPercent(l)}%, ${roundAlpha(base[3])})`;
    }
    return `hsla(${roundDeg(h)}, ${roundPercent(s)}%, ${roundPercent(l)}%, 1)`;
}
/**
 *
 * @param base [255, 255, 255, 255], [255, 255, 255], any hex string
 * @returns
 */
function toHexaString(base) {
    if (typeof base === 'string') {
        let i;
        if (i = hexRegex.exec(base)) {
            return `${i[0]}FF`;
        }
        else if (i = hexaRegex.exec(base)) {
            return i[0];
        }
        else if (i = sHexRegex.exec(base)) {
            return `#${i[1]}${i[1]}${i[2]}${i[2]}${i[3]}${i[3]}FF`;
        }
        else if (i = sHexaRegex.exec(base)) {
            return `#${i[1]}${i[1]}${i[2]}${i[2]}${i[3]}${i[3]}${i[4]}${i[4]}`;
        }
        throw new Error(`[seemly/toHexString]: Invalid hex value ${base}.`);
    }
    const hex = `#${base
        .slice(0, 3)
        .map((unit) => roundChannel(unit).toString(16).toUpperCase().padStart(2, '0'))
        .join('')}`;
    const a = base.length === 3
        ? 'FF'
        : roundChannel(base[3] * 255)
            .toString(16)
            .padStart(2, '0')
            .toUpperCase();
    return hex + a;
}
/**
 *
 * @param base [255, 255, 255, 255], [255, 255, 255], any hex string
 * @returns
 */
function toHexString(base) {
    if (typeof base === 'string') {
        let i;
        if (i = hexRegex.exec(base)) {
            return i[0];
        }
        else if (i = hexaRegex.exec(base)) {
            return i[0].slice(0, 7);
        }
        else if (i = (sHexRegex.exec(base) || sHexaRegex.exec(base))) {
            return `#${i[1]}${i[1]}${i[2]}${i[2]}${i[3]}${i[3]}`;
        }
        throw new Error(`[seemly/toHexString]: Invalid hex value ${base}.`);
    }
    return `#${base
        .slice(0, 3)
        .map((unit) => roundChannel(unit).toString(16).toUpperCase().padStart(2, '0'))
        .join('')}`;
}

function createInjectionKey(key) {
  return key;
}

const {inject: inject$3} = await importShared('vue');

const ssrContextKey = '@css-render/vue3-ssr';
function createStyleString(id, style) {
    return `<style cssr-id="${id}">\n${style}\n</style>`;
}
function ssrAdapter(id, style, ssrContext) {
    const { styles, ids } = ssrContext;
    // we need to impl other options to make it behaves the same as the client side
    if (ids.has(id))
        return;
    if (styles !== null) {
        ids.add(id);
        styles.push(createStyleString(id, style));
    }
}
const isBrowser = typeof document !== 'undefined';
function useSsrAdapter() {
    if (isBrowser)
        return undefined;
    const context = inject$3(ssrContextKey, null);
    if (context === null)
        return undefined;
    return {
        adapter: (id, style) => ssrAdapter(id, style, context),
        context
    };
}

const warnedMessages = new Set();
function warnOnce(location, message) {
  const mergedMessage = `[naive/${location}]: ${message}`;
  if (warnedMessages.has(mergedMessage)) return;
  warnedMessages.add(mergedMessage);
  console.error(mergedMessage);
}
function warn(location, message) {
  console.error(`[naive/${location}]: ${message}`);
}
function error(location, message, error) {
  console.error(`[naive/${location}]: ${message}`, error);
}
function throwError(location, message) {
  throw new Error(`[naive/${location}]: ${message}`);
}

function call(funcs, ...args) {
  if (Array.isArray(funcs)) {
    funcs.forEach(func => call(func, ...args));
  } else {
    return funcs(...args);
  }
}

const {Comment,Fragment,isVNode} = await importShared('vue');

function ensureValidVNode(vnodes) {
  return vnodes.some(child => {
    if (!isVNode(child)) {
      return true;
    }
    if (child.type === Comment) {
      return false;
    }
    if (child.type === Fragment && !ensureValidVNode(child.children)) {
      return false;
    }
    return true;
  }) ? vnodes : null;
}
/**
 * We shouldn't use the following functions with slot flags `_: 1, 2, 3`
 */
function resolveSlot(slot, fallback) {
  return slot && ensureValidVNode(slot()) || fallback();
}
function resolveSlotWithTypedProps(slot, props, fallback) {
  return slot && ensureValidVNode(slot(props)) || fallback(props);
}
/**
 * Resolve slot with wrapper if content exists, no fallback
 */
function resolveWrappedSlot(slot, wrapper) {
  const children = slot && ensureValidVNode(slot());
  return wrapper(children || null);
}
/*
 * Resolve slot with wrapper if content exists, no fallback
 */
function resolveWrappedSlotWithProps(slot, props, wrapper) {
  const children = slot && ensureValidVNode(slot(props));
  return wrapper(children || null);
}
function isSlotEmpty(slot) {
  return !(slot && ensureValidVNode(slot()));
}

const configProviderInjectionKey = createInjectionKey('n-config-provider');

const {computed: computed$1,inject: inject$2,shallowRef} = await importShared('vue');
const defaultClsPrefix = 'n';
function useConfig(props = {}, options = {
  defaultBordered: true
}) {
  const NConfigProvider = inject$2(configProviderInjectionKey, null);
  return {
    // NConfigProvider,
    inlineThemeDisabled: NConfigProvider === null || NConfigProvider === void 0 ? void 0 : NConfigProvider.inlineThemeDisabled,
    mergedRtlRef: NConfigProvider === null || NConfigProvider === void 0 ? void 0 : NConfigProvider.mergedRtlRef,
    mergedComponentPropsRef: NConfigProvider === null || NConfigProvider === void 0 ? void 0 : NConfigProvider.mergedComponentPropsRef,
    mergedBreakpointsRef: NConfigProvider === null || NConfigProvider === void 0 ? void 0 : NConfigProvider.mergedBreakpointsRef,
    mergedBorderedRef: computed$1(() => {
      var _a, _b;
      const {
        bordered
      } = props;
      if (bordered !== undefined) return bordered;
      return (_b = (_a = NConfigProvider === null || NConfigProvider === void 0 ? void 0 : NConfigProvider.mergedBorderedRef.value) !== null && _a !== void 0 ? _a : options.defaultBordered) !== null && _b !== void 0 ? _b : true;
    }),
    mergedClsPrefixRef: NConfigProvider ? NConfigProvider.mergedClsPrefixRef : shallowRef(defaultClsPrefix),
    namespaceRef: computed$1(() => NConfigProvider === null || NConfigProvider === void 0 ? void 0 : NConfigProvider.mergedNamespaceRef.value)
  };
}
function useMergedClsPrefix() {
  const NConfigProvider = inject$2(configProviderInjectionKey, null);
  return NConfigProvider ? NConfigProvider.mergedClsPrefixRef : shallowRef(defaultClsPrefix);
}

const {inject: inject$1,ref,watchEffect} = await importShared('vue');
function useThemeClass(componentName, hashRef, cssVarsRef, props) {
  if (!cssVarsRef) throwError('useThemeClass', 'cssVarsRef is not passed');
  const NConfigProvider = inject$1(configProviderInjectionKey, null);
  const mergedThemeHashRef = NConfigProvider === null || NConfigProvider === void 0 ? void 0 : NConfigProvider.mergedThemeHashRef;
  const styleMountTarget = NConfigProvider === null || NConfigProvider === void 0 ? void 0 : NConfigProvider.styleMountTarget;
  const themeClassRef = ref('');
  const ssrAdapter = useSsrAdapter();
  let renderCallback;
  const hashClassPrefix = `__${componentName}`;
  const mountStyle = () => {
    let finalThemeHash = hashClassPrefix;
    const hashValue = hashRef ? hashRef.value : undefined;
    const themeHash = mergedThemeHashRef === null || mergedThemeHashRef === void 0 ? void 0 : mergedThemeHashRef.value;
    if (themeHash) finalThemeHash += `-${themeHash}`;
    if (hashValue) finalThemeHash += `-${hashValue}`;
    const {
      themeOverrides,
      builtinThemeOverrides
    } = props;
    if (themeOverrides) {
      finalThemeHash += `-${murmur2(JSON.stringify(themeOverrides))}`;
    }
    if (builtinThemeOverrides) {
      finalThemeHash += `-${murmur2(JSON.stringify(builtinThemeOverrides))}`;
    }
    themeClassRef.value = finalThemeHash;
    renderCallback = () => {
      const cssVars = cssVarsRef.value;
      let style = '';
      for (const key in cssVars) {
        style += `${key}: ${cssVars[key]};`;
      }
      c(`.${finalThemeHash}`, style).mount({
        id: finalThemeHash,
        ssr: ssrAdapter,
        parent: styleMountTarget
      });
      renderCallback = undefined;
    };
  };
  watchEffect(() => {
    mountStyle();
  });
  return {
    themeClass: themeClassRef,
    onRender: () => {
      renderCallback === null || renderCallback === void 0 ? void 0 : renderCallback();
    }
  };
}

const cssrAnchorMetaName = 'naive-ui-style';

const commonVariables = {
  fontFamily: 'v-sans, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  fontFamilyMono: 'v-mono, SFMono-Regular, Menlo, Consolas, Courier, monospace',
  fontWeight: '400',
  fontWeightStrong: '500',
  cubicBezierEaseInOut: 'cubic-bezier(.4, 0, .2, 1)',
  cubicBezierEaseOut: 'cubic-bezier(0, 0, .2, 1)',
  cubicBezierEaseIn: 'cubic-bezier(.4, 0, 1, 1)',
  borderRadius: '3px',
  borderRadiusSmall: '2px',
  fontSize: '14px',
  fontSizeMini: '12px',
  fontSizeTiny: '12px',
  fontSizeSmall: '14px',
  fontSizeMedium: '14px',
  fontSizeLarge: '15px',
  fontSizeHuge: '16px',
  lineHeight: '1.6',
  heightMini: '16px',
  // private now, it's too small
  heightTiny: '22px',
  heightSmall: '28px',
  heightMedium: '34px',
  heightLarge: '40px',
  heightHuge: '46px'
};

const {
  fontSize,
  fontFamily,
  lineHeight
} = commonVariables;
// All the components need the style
// It is static and won't be changed in the app's lifetime
// If user want to overrides it they need to use `n-global-style` is provided
//
// Technically we can remove font-size & font-family & line-height to make
// it pure. However the coding cost doesn't worth it.
//
// -webkit-tap-hilight-color:
// https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-tap-highlight-color
// In some android devices, there will be the style.
const globalStyle = c('body', `
 margin: 0;
 font-size: ${fontSize};
 font-family: ${fontFamily};
 line-height: ${lineHeight};
 -webkit-text-size-adjust: 100%;
 -webkit-tap-highlight-color: transparent;
`, [c('input', `
 font-family: inherit;
 font-size: inherit;
 `)]);

const {computed,inject,onBeforeMount} = await importShared('vue');
function createTheme(theme) {
  return theme;
}
function useTheme(resolveId, mountId, style, defaultTheme, props, clsPrefixRef) {
  const ssrAdapter = useSsrAdapter();
  const NConfigProvider = inject(configProviderInjectionKey, null);
  if (style) {
    const mountStyle = () => {
      const clsPrefix = clsPrefixRef === null || clsPrefixRef === void 0 ? void 0 : clsPrefixRef.value;
      style.mount({
        id: clsPrefix === undefined ? mountId : clsPrefix + mountId,
        head: true,
        props: {
          bPrefix: clsPrefix ? `.${clsPrefix}-` : undefined
        },
        anchorMetaName: cssrAnchorMetaName,
        ssr: ssrAdapter,
        parent: NConfigProvider === null || NConfigProvider === void 0 ? void 0 : NConfigProvider.styleMountTarget
      });
      if (!(NConfigProvider === null || NConfigProvider === void 0 ? void 0 : NConfigProvider.preflightStyleDisabled)) {
        globalStyle.mount({
          id: 'n-global',
          head: true,
          anchorMetaName: cssrAnchorMetaName,
          ssr: ssrAdapter,
          parent: NConfigProvider === null || NConfigProvider === void 0 ? void 0 : NConfigProvider.styleMountTarget
        });
      }
    };
    if (ssrAdapter) {
      mountStyle();
    } else {
      onBeforeMount(mountStyle);
    }
  }
  const mergedThemeRef = computed(() => {
    var _a;
    // keep props to make theme overrideable
    const {
      theme: {
        common: selfCommon,
        self,
        peers = {}
      } = {},
      themeOverrides: selfOverrides = {},
      builtinThemeOverrides: builtinOverrides = {}
    } = props;
    const {
      common: selfCommonOverrides,
      peers: peersOverrides
    } = selfOverrides;
    const {
      common: globalCommon = undefined,
      [resolveId]: {
        common: globalSelfCommon = undefined,
        self: globalSelf = undefined,
        peers: globalPeers = {}
      } = {}
    } = (NConfigProvider === null || NConfigProvider === void 0 ? void 0 : NConfigProvider.mergedThemeRef.value) || {};
    const {
      common: globalCommonOverrides = undefined,
      [resolveId]: globalSelfOverrides = {}
    } = (NConfigProvider === null || NConfigProvider === void 0 ? void 0 : NConfigProvider.mergedThemeOverridesRef.value) || {};
    const {
      common: globalSelfCommonOverrides,
      peers: globalPeersOverrides = {}
    } = globalSelfOverrides;
    const mergedCommon = merge({}, selfCommon || globalSelfCommon || globalCommon || defaultTheme.common, globalCommonOverrides, globalSelfCommonOverrides, selfCommonOverrides);
    const mergedSelf = merge(
    // {}, executed every time, no need for empty obj
    (_a = self || globalSelf || defaultTheme.self) === null || _a === void 0 ? void 0 : _a(mergedCommon), builtinOverrides, globalSelfOverrides, selfOverrides);
    return {
      common: mergedCommon,
      self: mergedSelf,
      peers: merge({}, defaultTheme.peers, globalPeers, peers),
      peerOverrides: merge({}, builtinOverrides.peers, globalPeersOverrides, peersOverrides)
    };
  });
  return mergedThemeRef;
}
useTheme.props = {
  theme: Object,
  themeOverrides: Object,
  builtinThemeOverrides: Object
};

const base = {
  neutralBase: '#FFF',
  neutralInvertBase: '#000',
  neutralTextBase: '#000',
  neutralPopover: '#fff',
  neutralCard: '#fff',
  neutralModal: '#fff',
  neutralBody: '#fff',
  alpha1: '0.82',
  alpha2: '0.72',
  alpha3: '0.38',
  alpha4: '0.24',
  // disabled text, placeholder, icon
  alpha5: '0.18',
  // disabled placeholder
  alphaClose: '0.6',
  alphaDisabled: '0.5',
  alphaAvatar: '0.2',
  alphaProgressRail: '.08',
  alphaInput: '0',
  alphaScrollbar: '0.25',
  alphaScrollbarHover: '0.4',
  // primary
  primaryHover: '#36ad6a',
  primaryDefault: '#18a058',
  primaryActive: '#0c7a43',
  primarySuppl: '#36ad6a',
  // info
  infoHover: '#4098fc',
  infoDefault: '#2080f0',
  infoActive: '#1060c9',
  infoSuppl: '#4098fc',
  // error
  errorHover: '#de576d',
  errorDefault: '#d03050',
  errorActive: '#ab1f3f',
  errorSuppl: '#de576d',
  // warning
  warningHover: '#fcb040',
  warningDefault: '#f0a020',
  warningActive: '#c97c10',
  warningSuppl: '#fcb040',
  // success
  successHover: '#36ad6a',
  successDefault: '#18a058',
  successActive: '#0c7a43',
  successSuppl: '#36ad6a'
};
const baseBackgroundRgb = rgba(base.neutralBase);
const baseInvertBackgroundRgb = rgba(base.neutralInvertBase);
const overlayPrefix = `rgba(${baseInvertBackgroundRgb.slice(0, 3).join(', ')}, `;
function overlay(alpha) {
  return `${overlayPrefix + String(alpha)})`;
}
function neutral(alpha) {
  const overlayRgba = Array.from(baseInvertBackgroundRgb);
  overlayRgba[3] = Number(alpha);
  return composite(baseBackgroundRgb, overlayRgba);
}
const derived = Object.assign(Object.assign({
  name: 'common'
}, commonVariables), {
  baseColor: base.neutralBase,
  // primary color
  primaryColor: base.primaryDefault,
  primaryColorHover: base.primaryHover,
  primaryColorPressed: base.primaryActive,
  primaryColorSuppl: base.primarySuppl,
  // info color
  infoColor: base.infoDefault,
  infoColorHover: base.infoHover,
  infoColorPressed: base.infoActive,
  infoColorSuppl: base.infoSuppl,
  // success color
  successColor: base.successDefault,
  successColorHover: base.successHover,
  successColorPressed: base.successActive,
  successColorSuppl: base.successSuppl,
  // warning color
  warningColor: base.warningDefault,
  warningColorHover: base.warningHover,
  warningColorPressed: base.warningActive,
  warningColorSuppl: base.warningSuppl,
  // error color
  errorColor: base.errorDefault,
  errorColorHover: base.errorHover,
  errorColorPressed: base.errorActive,
  errorColorSuppl: base.errorSuppl,
  // text color
  textColorBase: base.neutralTextBase,
  textColor1: 'rgb(31, 34, 37)',
  textColor2: 'rgb(51, 54, 57)',
  textColor3: 'rgb(118, 124, 130)',
  // textColor4: neutral(base.alpha4), // disabled, placeholder, icon
  // textColor5: neutral(base.alpha5),
  textColorDisabled: neutral(base.alpha4),
  placeholderColor: neutral(base.alpha4),
  placeholderColorDisabled: neutral(base.alpha5),
  iconColor: neutral(base.alpha4),
  iconColorHover: scaleColor(neutral(base.alpha4), {
    lightness: 0.75
  }),
  iconColorPressed: scaleColor(neutral(base.alpha4), {
    lightness: 0.9
  }),
  iconColorDisabled: neutral(base.alpha5),
  opacity1: base.alpha1,
  opacity2: base.alpha2,
  opacity3: base.alpha3,
  opacity4: base.alpha4,
  opacity5: base.alpha5,
  dividerColor: 'rgb(239, 239, 245)',
  borderColor: 'rgb(224, 224, 230)',
  // close
  closeIconColor: neutral(Number(base.alphaClose)),
  closeIconColorHover: neutral(Number(base.alphaClose)),
  closeIconColorPressed: neutral(Number(base.alphaClose)),
  closeColorHover: 'rgba(0, 0, 0, .09)',
  closeColorPressed: 'rgba(0, 0, 0, .13)',
  // clear
  clearColor: neutral(base.alpha4),
  clearColorHover: scaleColor(neutral(base.alpha4), {
    lightness: 0.75
  }),
  clearColorPressed: scaleColor(neutral(base.alpha4), {
    lightness: 0.9
  }),
  scrollbarColor: overlay(base.alphaScrollbar),
  scrollbarColorHover: overlay(base.alphaScrollbarHover),
  scrollbarWidth: '5px',
  scrollbarHeight: '5px',
  scrollbarBorderRadius: '5px',
  progressRailColor: neutral(base.alphaProgressRail),
  railColor: 'rgb(219, 219, 223)',
  popoverColor: base.neutralPopover,
  tableColor: base.neutralCard,
  cardColor: base.neutralCard,
  modalColor: base.neutralModal,
  bodyColor: base.neutralBody,
  tagColor: '#eee',
  avatarColor: neutral(base.alphaAvatar),
  invertedColor: 'rgb(0, 20, 40)',
  inputColor: neutral(base.alphaInput),
  codeColor: 'rgb(244, 244, 248)',
  tabColor: 'rgb(247, 247, 250)',
  actionColor: 'rgb(250, 250, 252)',
  tableHeaderColor: 'rgb(250, 250, 252)',
  hoverColor: 'rgb(243, 243, 245)',
  // use color with alpha since it can be nested with header filter & sorter effect
  tableColorHover: 'rgba(0, 0, 100, 0.03)',
  tableColorStriped: 'rgba(0, 0, 100, 0.02)',
  pressedColor: 'rgb(237, 237, 239)',
  opacityDisabled: base.alphaDisabled,
  inputColorDisabled: 'rgb(250, 250, 252)',
  // secondary button color
  // can also be used in tertiary button & quaternary button
  buttonColor2: 'rgba(46, 51, 56, .05)',
  buttonColor2Hover: 'rgba(46, 51, 56, .09)',
  buttonColor2Pressed: 'rgba(46, 51, 56, .13)',
  boxShadow1: '0 1px 2px -2px rgba(0, 0, 0, .08), 0 3px 6px 0 rgba(0, 0, 0, .06), 0 5px 12px 4px rgba(0, 0, 0, .04)',
  boxShadow2: '0 3px 6px -4px rgba(0, 0, 0, .12), 0 6px 16px 0 rgba(0, 0, 0, .08), 0 9px 28px 8px rgba(0, 0, 0, .05)',
  boxShadow3: '0 6px 16px -9px rgba(0, 0, 0, .08), 0 9px 28px 0 rgba(0, 0, 0, .05), 0 12px 48px 16px rgba(0, 0, 0, .03)'
});

export { CssRender, asModal, baseFor, c, cB, cCB, cE, cM, cNotM, call, changeColor, commonVariables, composite, configProviderInjectionKey, createInjectionKey, createKey, createTheme, cssrAnchorMetaName, defaultClsPrefix, derived, ensureValidVNode, error, globalStyle, hsl2hsv, hsl2rgb, hsla, hsv2hsl, hsv2rgb, hsva, insideModal, insidePopover, isSlotEmpty, merge, murmur2, queryElement, resolveSlot, resolveSlotWithTypedProps, resolveWrappedSlot, resolveWrappedSlotWithProps, rgb2hsl, rgb2hsv, rgba, scaleColor, throwError, toHexString, toHexaString, toHslString, toHslaString, toHsvString, toHsvaString, toRgbString, toRgbaString, useConfig, useMergedClsPrefix, useSsrAdapter, useTheme, useThemeClass, warn, warnOnce };
//# sourceMappingURL=light.CLUJsvFB1767105581793.js.map
