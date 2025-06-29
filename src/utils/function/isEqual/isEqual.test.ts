import { describe, it, expect } from 'vitest';
import { isEqual } from '.';

describe('isEqual utility function', () => {
  it('should return true for identical primitive values', () => {
    expect(isEqual(1, 1)).toBe(true);
    expect(isEqual('test', 'test')).toBe(true);
    expect(isEqual(true, true)).toBe(true);
    expect(isEqual(null, null)).toBe(true);
    expect(isEqual(undefined, undefined)).toBe(true);
  });

  it('should return false for different primitive values', () => {
    expect(isEqual(1, 2)).toBe(false);
    expect(isEqual('test', 'test2')).toBe(false);
    expect(isEqual(true, false)).toBe(false);
    expect(isEqual(null, undefined)).toBe(false);
  });

  it('should return true for identical arrays', () => {
    expect(isEqual([1, 2, 3], [1, 2, 3])).toBe(true);
    expect(isEqual(['a', 'b', 'c'], ['a', 'b', 'c'])).toBe(true);
    expect(isEqual([], [])).toBe(true);
  });

  it('should return false for different arrays', () => {
    expect(isEqual([1, 2, 3], [1, 2, 4])).toBe(false);
    expect(isEqual([1, 2, 3], [1, 2])).toBe(false);
    expect(isEqual([1, 2], [1, 2, 3])).toBe(false);
  });

  it('should return true for identical nested arrays', () => {
    expect(isEqual([1, [2, 3]], [1, [2, 3]])).toBe(true);
  });

  it('should return false for different nested arrays', () => {
    expect(isEqual([1, [2, 3]], [1, [2, 4]])).toBe(false);
  });

  it('should return true for identical objects', () => {
    expect(isEqual({ a: 1, b: 2 }, { a: 1, b: 2 })).toBe(true);
    expect(isEqual({}, {})).toBe(true);
  });

  it('should return false for different objects', () => {
    expect(isEqual({ a: 1, b: 2 }, { a: 1, b: 3 })).toBe(false);
    expect(isEqual({ a: 1, b: 2 }, { a: 1 })).toBe(false);
    expect(isEqual({ a: 1 }, { a: 1, b: 2 })).toBe(false);
  });

  it('should return true for identical nested objects', () => {
    expect(isEqual({ a: 1, b: { c: 3 } }, { a: 1, b: { c: 3 } })).toBe(true);
  });

  it('should return false for different nested objects', () => {
    expect(isEqual({ a: 1, b: { c: 3 } }, { a: 1, b: { c: 4 } })).toBe(false);
  });

  it('should return true for identical Maps', () => {
    const map1 = new Map([
      ['a', 1],
      ['b', 2],
    ]);
    const map2 = new Map([
      ['a', 1],
      ['b', 2],
    ]);
    expect(isEqual(map1, map2)).toBe(true);
  });

  it('should return false for different Maps', () => {
    const map1 = new Map([
      ['a', 1],
      ['b', 2],
    ]);
    const map2 = new Map([
      ['a', 1],
      ['b', 3],
    ]);
    expect(isEqual(map1, map2)).toBe(false);
  });

  it('should return true for identical Sets', () => {
    const set1 = new Set([1, 2, 3]);
    const set2 = new Set([1, 2, 3]);
    expect(isEqual(set1, set2)).toBe(true);
  });

  it('should return false for different Sets', () => {
    const set1 = new Set([1, 2, 3]);
    const set2 = new Set([1, 2, 4]);
    expect(isEqual(set1, set2)).toBe(false);
  });

  it('should return true for identical RegExp objects', () => {
    expect(isEqual(/abc/g, /abc/g)).toBe(true);
  });

  it('should return false for different RegExp objects', () => {
    expect(isEqual(/abc/g, /abc/i)).toBe(false);
    expect(isEqual(/abc/, /def/)).toBe(false);
  });

  it('should return true for objects with custom valueOf', () => {
    const obj1 = { valueOf: () => 42 };
    const obj2 = { valueOf: () => 42 };
    expect(isEqual(obj1, obj2)).toBe(true);
  });

  it('should handle TypedArrays correctly', () => {
    const arr1 = new Int8Array([1, 2, 3]);
    const arr2 = new Int8Array([1, 2, 3]);
    const arr3 = new Int8Array([1, 2, 4]);

    expect(isEqual(arr1, arr2)).toBe(true);
    expect(isEqual(arr1, arr3)).toBe(false);
  });
});
