import { describe, it, expect } from 'vitest';
import { is, isString, isNumber, isBoolean, isNil, isNotNil, isMap, isSet, isRegExp, isTypedArray, isDate } from '.';

describe('is utility functions', () => {
  describe('is', () => {
    it('should return true when validator returns true', () => {
      const validator = (value: unknown) => typeof value === 'string';
      expect(is<string>('test', validator)).toBe(true);
    });

    it('should return false when validator returns false', () => {
      const validator = (value: unknown) => typeof value === 'string';
      expect(is<string>(123, validator)).toBe(false);
    });
  });

  describe('isString', () => {
    it('should return true for string values', () => {
      expect(isString('test')).toBe(true);
      expect(isString('')).toBe(true);
      expect(isString(String('test'))).toBe(true);
    });

    it('should return false for non-string values', () => {
      expect(isString(123)).toBe(false);
      expect(isString(true)).toBe(false);
      expect(isString(null)).toBe(false);
      expect(isString(undefined)).toBe(false);
      expect(isString({})).toBe(false);
      expect(isString([])).toBe(false);
    });
  });

  describe('isNumber', () => {
    it('should return true for number values', () => {
      expect(isNumber(123)).toBe(true);
      expect(isNumber(0)).toBe(true);
      expect(isNumber(-1)).toBe(true);
      expect(isNumber(Number('123'))).toBe(true);
    });

    it('should return false for non-number values', () => {
      expect(isNumber('123')).toBe(false);
      expect(isNumber(true)).toBe(false);
      expect(isNumber(null)).toBe(false);
      expect(isNumber(undefined)).toBe(false);
      expect(isNumber({})).toBe(false);
      expect(isNumber([])).toBe(false);
    });
  });

  describe('isBoolean', () => {
    it('should return true for boolean values', () => {
      expect(isBoolean(true)).toBe(true);
      expect(isBoolean(false)).toBe(true);
      expect(isBoolean(Boolean(1))).toBe(true);
    });

    it('should return false for non-boolean values', () => {
      expect(isBoolean('true')).toBe(false);
      expect(isBoolean(1)).toBe(false);
      expect(isBoolean(null)).toBe(false);
      expect(isBoolean(undefined)).toBe(false);
      expect(isBoolean({})).toBe(false);
      expect(isBoolean([])).toBe(false);
    });
  });

  describe('isNil', () => {
    it('should return true for null and undefined', () => {
      expect(isNil(null)).toBe(true);
      expect(isNil(undefined)).toBe(true);
    });

    it('should return false for non-nil values', () => {
      expect(isNil('')).toBe(false);
      expect(isNil(0)).toBe(false);
      expect(isNil(false)).toBe(false);
      expect(isNil({})).toBe(false);
      expect(isNil([])).toBe(false);
    });
  });

  describe('isNotNil', () => {
    it('should return false for null and undefined', () => {
      expect(isNotNil(null)).toBe(false);
      expect(isNotNil(undefined)).toBe(false);
    });

    it('should return true for non-nil values', () => {
      expect(isNotNil('')).toBe(true);
      expect(isNotNil(0)).toBe(true);
      expect(isNotNil(false)).toBe(true);
      expect(isNotNil({})).toBe(true);
      expect(isNotNil([])).toBe(true);
    });
  });

  describe('isMap', () => {
    it('should return true for Map objects', () => {
      expect(isMap(new Map())).toBe(true);
    });

    it('should return false for non-Map values', () => {
      expect(isMap({})).toBe(false);
      expect(isMap([])).toBe(false);
      expect(isMap('map')).toBe(false);
    });
  });

  describe('isSet', () => {
    it('should return true for Set objects', () => {
      expect(isSet(new Set())).toBe(true);
    });

    it('should return false for non-Set values', () => {
      expect(isSet({})).toBe(false);
      expect(isSet([])).toBe(false);
      expect(isSet('set')).toBe(false);
    });
  });

  describe('isRegExp', () => {
    it('should return true for RegExp objects', () => {
      expect(isRegExp(/test/)).toBe(true);
      expect(isRegExp(new RegExp('test'))).toBe(true);
    });

    it('should return false for non-RegExp values', () => {
      expect(isRegExp('regex')).toBe(false);
      expect(isRegExp({})).toBe(false);
      expect(isRegExp([])).toBe(false);
      expect(isRegExp(null)).toBe(false);
      expect(isRegExp(undefined)).toBe(false);
    });
  });

  describe('isTypedArray', () => {
    it('should return true for TypedArray objects', () => {
      expect(isTypedArray(new Int8Array())).toBe(true);
      expect(isTypedArray(new Uint8Array())).toBe(true);
      expect(isTypedArray(new Int16Array())).toBe(true);
      expect(isTypedArray(new Uint16Array())).toBe(true);
      expect(isTypedArray(new Int32Array())).toBe(true);
      expect(isTypedArray(new Uint32Array())).toBe(true);
      expect(isTypedArray(new Float32Array())).toBe(true);
      expect(isTypedArray(new Float64Array())).toBe(true);
    });

    it('should return false for non-TypedArray values', () => {
      expect(isTypedArray([])).toBe(false);
      expect(isTypedArray({})).toBe(false);
      expect(isTypedArray('array')).toBe(false);
      expect(isTypedArray(null)).toBe(false);
      expect(isTypedArray(undefined)).toBe(false);
    });
  });

  describe('isDate', () => {
    it('should return true for Date objects', () => {
      expect(isDate(new Date())).toBe(true);
    });

    it('should return false for non-Date values', () => {
      expect(isDate('2023-01-01')).toBe(false);
      expect(isDate(123456789)).toBe(false);
      expect(isDate({})).toBe(false);
      expect(isDate(null)).toBe(false);
    });
  });
});
