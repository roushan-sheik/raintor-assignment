/**
 * Creates a debounced function that delays invoking func until after wait milliseconds have elapsed
 * since the last time the debounced function was invoked.
 * The debounced function comes with a `cancel` method to cancel delayed invocations.
 *
 * @param func The function to debounce
 * @param wait The number of milliseconds to delay
 * @returns The debounced function with a cancel method
 *
 * @example
 * ```ts
 * const handleResize = debounce(() => {
 *   console.log('Window resized');
 * }, 200);
 *
 * window.addEventListener('resize', handleResize);
 *
 * // Cancel the delayed invocation
 * handleResize.cancel();
 * ```
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function debounce<T extends (...args: any[]) => any>(func: T, wait = 0) {
  let timeout: ReturnType<typeof setTimeout> | undefined;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function debounced(this: any, ...args: Parameters<T>) {
    const later = () => {
      timeout = undefined;
      func.apply(this, args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  }

  debounced.cancel = () => {
    clearTimeout(timeout);
    timeout = undefined;
  };

  return debounced as T & { cancel: () => void };
}

export default debounce;
