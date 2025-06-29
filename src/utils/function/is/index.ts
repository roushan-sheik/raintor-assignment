import type { TypedArray } from '@/utils/_internal/getType';
import { getType, primitiveTypes, typedArrayTypeNames } from '@/utils/_internal/getType';

/**
 * A utility function for easily using type guards.
 *
 * However, if the type being guarded is not in a subtype relationship (e.g., `string | number` <=> `string`),
 * this function will still apply type guarding, which may lead to type-unsafe situations.
 *
 * If you use this function, always verify how the type is evaluated after applying the type guard.
 */
export function is<T>(value: unknown, validator: (v: unknown) => boolean): value is T {
  return validator(value);
}

/**
 * Returns whether the given value is of type `string`.
 *
 * @example
 * ```ts
 * isString('foo'); // true
 * isString(123); // false
 * ```
 */
export function isString(value: unknown): value is string {
  return getType(value) === '[object String]';
}

/**
 * Returns whether the given value is of type `number`.
 *
 * @example
 * ```ts
 * isNumber(-1); // true
 * isNumber('123'); // false
 * ```
 */
export function isNumber(value: unknown): value is number {
  return getType(value) === '[object Number]';
}

/**
 * Returns whether the given value is of type `Date`.
 *
 * @example
 * ```ts
 * isDate(new Date()); // true
 * isDate('2023-01-01'); // false
 * ```
 */
export function isDate(value: unknown): value is Date {
  return getType(value) === '[object Date]';
}

/**
 * Returns whether the given value is of type `boolean`.
 *
 * @example
 * ```ts
 * isBoolean(false); // true
 * isBoolean(0); // false
 * ```
 */
export function isBoolean(value: unknown): value is boolean {
  return getType(value) === '[object Boolean]';
}

/**
 * `isNil` is a function that checks whether the given value is `null` or `undefined`.
 *
 * @example
 * ```ts
 * isNil(null); // true
 * isNil(void 0); // true
 * isNil(NaN); // false
 * ```
 */
export function isNil(value: unknown): value is null | undefined {
  return value === null || value === undefined;
}

/**
 * `isNotNil` is a function that checks whether the given value is not `null` or `undefined`.
 *
 * @example
 * ```ts
 * isNotNil(null); // false
 * isNotNil(void 0); // false
 * isNotNil(NaN); // true
 * ```
 */
export function isNotNil<T = unknown>(value: T): value is NonNullable<T> {
  return value !== null && value !== undefined;
}

/**
 * Returns whether the given value is a primitive type.
 *
 * @example
 * ```ts
 * isPrimitiveType(''); // true
 * isPrimitiveType(1); // true
 * isPrimitiveType(false); // true
 * isPrimitiveType(NaN); // true
 * isPrimitiveType({}); // false
 * isPrimitiveType([]); // false
 * ```
 */
export function isPrimitiveType(value: unknown): value is string | boolean | number | null | undefined {
  return primitiveTypes.includes(getType(value));
}

/**
 * Returns whether the given value is a `Map`.
 *
 * @example
 * ```ts
 * const map = new Map();
 * isMap(map); // true
 * isMap({}); // false
 * ```
 */
export function isMap(value: unknown): value is Map<unknown, unknown> {
  return getType(value) === '[object Map]';
}

/**
 * Returns whether the given value is a `Set`.
 *
 * @example
 * ```ts
 * const set = new Set();
 * isSet(set); // true
 * isSet([]); // false
 * ```
 */
export function isSet(value: unknown): value is Set<unknown> {
  return getType(value) === '[object Set]';
}

/**
 * Returns whether the given value is a `TypedArray`.
 *
 * @example
 * ```ts
 * const arr = new Int16Array();
 * isTypedArray(arr); // true
 * isTypedArray([]); // false
 * ```
 */
export function isTypedArray(value: unknown): value is TypedArray {
  return typedArrayTypeNames.includes(getType(value));
}

/**
 * Returns whether the given value is a regular expression.
 *
 * @example
 * ```ts
 * const regex = /123/;
 * isRegExp(regex); // true
 * isRegExp('123'); // false
 * ```
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isRegExp(value: any): value is RegExp {
  return value !== null && value !== undefined && value.constructor === RegExp;
}
