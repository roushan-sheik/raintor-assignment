/**
 * A type-safe alternative to `Object.keys` that returns only string keys, excluding non-key properties.
 */
function getObjectKeys<T extends object>(object: T) {
  return Object.keys(object) as Array<keyof T>;
}

export default getObjectKeys;
