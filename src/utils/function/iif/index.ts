/**
 * Accepts a condition as the first argument and returns a value based on whether the condition is true or false.
 */
export function iif<T>(condition: boolean, trueResult: T): T | undefined;
export function iif<T>(condition: true, trueResult: T): T;
export function iif<T>(condition: false, trueResult: T): undefined;
export function iif<T, K>(condition: boolean, trueResult: T, falseResult: K): T | K;
export function iif<T, K>(condition: true, trueResult: T, falseResult: K): T;
export function iif<T, K>(condition: false, trueResult: T, falseResult: K): K;
export function iif<T, K>(condition: boolean, trueResult: T, falseResult?: K) {
  return condition ? trueResult : falseResult;
}
