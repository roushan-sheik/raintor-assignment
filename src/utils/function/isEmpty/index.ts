import { isMap, isSet } from '../is';

/**
 * Determines whether the given value is an empty object, collection, map, or set.
 * For array-like values, it checks if the length is 0.
 * For `Map` or `Set`, it checks if the size is 0.
 *
 * @example
 * ```ts
 * isEmpty(null); // true
 * isEmpty(undefined); // true
 * isEmpty(true); // true
 * isEmpty(1); // true
 * isEmpty(''); // true
 * isEmpty([]); // true
 * isEmpty({}); // true
 * isEmpty([1,2,3]); // false
 * isEmpty({'a': 1}); // false
 * ```
 */
export function isEmpty<T>(value: T) {
  if (isMap(value) || isSet(value)) {
    return value.size === 0;
  } else {
    return value == null || !Object.keys(value).length;
  }
}
