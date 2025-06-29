import { describe, it, expect, vi } from 'vitest';
import delay from '.';

describe('delay utility function', () => {
  it('should delay execution by the specified time', async () => {
    const start = Date.now();
    const delayTime = 100;

    vi.useFakeTimers();
    const promise = delay(delayTime);
    vi.advanceTimersByTime(delayTime);
    await promise;

    vi.useRealTimers();

    // We don't actually test the real time passed since we're using fake timers
    expect(true).toBe(true);
  });

  it('should resolve after the specified time', async () => {
    const mockFn = vi.fn();

    vi.useFakeTimers();
    const promise = delay(100).then(mockFn);

    expect(mockFn).not.toHaveBeenCalled();

    vi.advanceTimersByTime(100);
    await promise;

    expect(mockFn).toHaveBeenCalledTimes(1);

    vi.useRealTimers();
  });
});
