import { describe, it, expect } from 'vitest';
import getObjectKeys from '.';

describe('getObjectKeys utility function', () => {
  it('should return all keys of an object', () => {
    const obj = { a: 1, b: 2, c: 3 };
    const keys = getObjectKeys(obj);
    expect(keys).toEqual(['a', 'b', 'c']);
  });

  it('should return empty array for an empty object', () => {
    const obj = {};
    const keys = getObjectKeys(obj);
    expect(keys).toEqual([]);
  });

  it('should handle objects with string and number keys', () => {
    const obj = { a: 1, b: 2, 1: 'one' };
    const keys = getObjectKeys(obj);
    // Object.keys converts numeric keys to strings
    expect(keys).toEqual(['1', 'a', 'b']);
  });

  it('should ignore inherited properties', () => {
    const proto = { inherited: 'property' };
    const obj = Object.create(proto);
    obj.own = 'property';

    const keys = getObjectKeys(obj);
    expect(keys).toEqual(['own']);
    expect(keys).not.toContain('inherited');
  });

  it('should handle objects with symbol keys', () => {
    const symbol = Symbol('test');
    const obj = { a: 1, [symbol]: 'symbol value' };

    const keys = getObjectKeys(obj);
    // Symbol keys are not included in Object.keys
    expect(keys).toEqual(['a']);
  });
});
