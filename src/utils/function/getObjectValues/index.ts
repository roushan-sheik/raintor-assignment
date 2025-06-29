/**
 * A type-safe alternative to `Object.values` that returns the actual types of the object's values instead of `any`.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getObjectValues<T extends Record<string, any>>(object: T) {
  return Object.values(object) as Array<T[keyof T]>;
}

export default getObjectValues;
