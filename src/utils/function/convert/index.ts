/**
 * Returns the result of the formatter function if the first argument is not nullish (null or undefined).
 * If the first argument is nullish, it returns the argument as is.
 *
 * The formatter function can assume that its argument will always be present.
 *
 * @example
 * ```ts
 * convert(1, (v) => String(v)); // '1'
 *
 * interface Foo {
 *   bar?: string;
 * }
 * const foo: Foo = {};
 * convert(foo.bar, v => v.toUpperCase()); // string | undefined
 * ```
 */
export function convert<T, V>(value: T, formatter: (value: NonNullable<T>) => V): Extract<T, undefined | null> | V;
export function convert(value: null, formatter: (value: null) => unknown): null;
export function convert<T, V>(value: T, formatter: (value: NonNullable<T>) => V): Extract<T, undefined | null> | V {
  return value == null ? (value as Extract<T, undefined | null>) : formatter(value!);
}
