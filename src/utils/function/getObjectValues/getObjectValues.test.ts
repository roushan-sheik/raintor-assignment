import { describe, it, expect } from 'vitest';
import getObjectValues from '.';

describe('getObjectValues utility function', () => {
  it('should return all values of an object', () => {
    const obj = { a: 1, b: 2, c: 3 };
    const values = getObjectValues(obj);
    expect(values).toEqual([1, 2, 3]);
  });

  it('should return empty array for an empty object', () => {
    const obj = {};
    const values = getObjectValues(obj);
    expect(values).toEqual([]);
  });

  it('should handle objects with different value types', () => {
    const obj = { a: 1, b: 'string', c: true, d: null, e: undefined, f: { nested: 'object' } };
    const values = getObjectValues(obj);
    expect(values).toEqual([1, 'string', true, null, undefined, { nested: 'object' }]);
  });

  it('should ignore inherited properties', () => {
    const proto = { inherited: 'property' };
    const obj = Object.create(proto);
    obj.own = 'property';

    const values = getObjectValues(obj);
    expect(values).toEqual(['property']);
    expect(values).not.toContain('inherited property');
  });

  it('should handle objects with symbol keys', () => {
    const symbol = Symbol('test');
    const obj = { a: 1, [symbol]: 'symbol value' };

    const values = getObjectValues(obj);
    // Values associated with symbol keys are not included in Object.values
    expect(values).toEqual([1]);
  });
});
