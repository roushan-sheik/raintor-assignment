import getObjectKeys from '../getObjectKeys';

/**
 * Creates a new object containing only the specified keys from the given object.
 *
 * @param object (Object): The source object.
 * @param array (...string | string[]): The keys to pick.
 *
 * @example
 * ```ts
 * const objectA = { a: 1, b: '2', c: 3 };
 * pick(objectA, ['a', 'c']); // { a: 1, c: 3 }
 * ```
 */
export function pick<T, K extends keyof T>(object: T, keys: readonly K[]) {
  return keys.reduce(
    (acc, key) => {
      return {
        ...acc,
        [key]: object[key],
      };
    },
    {} as Pick<T, K>,
  );
}

/**
 * Creates a new object by picking only the key-value pairs where the value satisfies the predicate function.
 *
 * @param object (Object): The source object.
 * @param predicate ((value: unknown, key: string) => boolean): A function to determine if a value is truthy.
 *
 * @example
 * ```ts
 * const objectA = { a: 1, b: '2', c: 3 };
 * pickBy(objectA, isNumber); // { a: 1, c: 3 }
 * ```
 */
export function pickBy<T extends object>(object: T, predicate: (value: unknown, key: keyof T) => boolean) {
  const keys = getObjectKeys(object).filter((key) => predicate(object[key], key));
  return pick(object, keys);
}
