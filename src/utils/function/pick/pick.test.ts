import { describe, it, expect } from 'vitest';
import { pick, pickBy } from '.';
import { isNumber } from '../is';

describe('pick utility functions', () => {
  describe('pick', () => {
    it('should pick specified keys from an object', () => {
      const obj = { a: 1, b: '2', c: 3, d: true };

      expect(pick(obj, ['a', 'c'])).toEqual({ a: 1, c: 3 });
      expect(pick(obj, ['b', 'd'])).toEqual({ b: '2', d: true });
      expect(pick(obj, ['a', 'b', 'c', 'd'])).toEqual(obj);
    });

    it('should return an empty object when no keys are specified', () => {
      const obj = { a: 1, b: '2', c: 3 };

      expect(pick(obj, [])).toEqual({});
    });

    it('should handle picking undefined or non-existent keys', () => {
      const obj = { a: 1, b: undefined };

      expect(pick(obj, ['a', 'b'])).toEqual({ a: 1, b: undefined });
      // @ts-expect-error - Testing with non-existent key
      expect(pick(obj, ['c'])).toEqual({ c: undefined });
    });
  });

  describe('pickBy', () => {
    it('should pick keys based on predicate function', () => {
      const obj = { a: 1, b: '2', c: 3, d: true };

      const result = pickBy(obj, isNumber);
      expect(result).toEqual({ a: 1, c: 3 });
    });

    it('should return empty object when no values satisfy predicate', () => {
      const obj = { a: '1', b: '2', c: '3' };

      const result = pickBy(obj, isNumber);
      expect(result).toEqual({});
    });

    it('should work with custom predicates', () => {
      const obj = { a: 1, b: 2, c: 3, d: 4 };

      const isEven = (value: unknown) => typeof value === 'number' && (value as number) % 2 === 0;
      const result = pickBy(obj, isEven);

      expect(result).toEqual({ b: 2, d: 4 });
    });

    it('should provide key as second argument to predicate', () => {
      const obj = { a: 1, b: 2, c: 3 };

      const hasVowelKey = (value: unknown, key: string) => /[aeiou]/.test(key);
      const result = pickBy(obj, hasVowelKey);

      expect(result).toEqual({ a: 1 });
    });
  });
});
