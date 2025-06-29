import { describe, it, expect, vi } from 'vitest';
import { noop } from '.';

describe('noop utility function', () => {
  it('should be a function', () => {
    expect(typeof noop).toBe('function');
  });

  it('should return undefined when called', () => {
    expect(noop()).toBeUndefined();
  });

  it('should do nothing when called', () => {
    const spy = vi.fn();
    const result = noop();
    expect(spy).not.toHaveBeenCalled();
    expect(result).toBeUndefined();
  });

  it('should ignore parameters without error', () => {
    // @ts-expect-error - Testing that noop ignores parameters
    expect(() => noop('test')).not.toThrow();
    // @ts-expect-error - Testing that noop ignores parameters
    expect(() => noop(1, 2, 3)).not.toThrow();
    // @ts-expect-error - Testing that noop ignores parameters
    expect(() => noop({ a: 1 })).not.toThrow();
  });
});
