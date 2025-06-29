import { describe, it, expect } from 'vitest';
import { isEmpty } from '.';

describe('isEmpty utility function', () => {
  it('should return true for null', () => {
    expect(isEmpty(null)).toBe(true);
  });

  it('should return true for undefined', () => {
    expect(isEmpty(undefined)).toBe(true);
  });

  it('should return true for empty string', () => {
    expect(isEmpty('')).toBe(true);
  });

  it('should return true for empty array', () => {
    expect(isEmpty([])).toBe(true);
  });

  it('should return true for empty object', () => {
    expect(isEmpty({})).toBe(true);
  });

  it('should return true for empty Map', () => {
    expect(isEmpty(new Map())).toBe(true);
  });

  it('should return true for empty Set', () => {
    expect(isEmpty(new Set())).toBe(true);
  });

  it('should return false for non-empty array', () => {
    expect(isEmpty([1, 2, 3])).toBe(false);
  });

  it('should return false for non-empty object', () => {
    expect(isEmpty({ a: 1 })).toBe(false);
  });

  it('should return false for non-empty Map', () => {
    const map = new Map();
    map.set('key', 'value');
    expect(isEmpty(map)).toBe(false);
  });

  it('should return false for non-empty Set', () => {
    const set = new Set();
    set.add('value');
    expect(isEmpty(set)).toBe(false);
  });
});
