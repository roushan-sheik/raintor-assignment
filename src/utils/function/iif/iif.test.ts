import { describe, it, expect } from 'vitest';
import { iif } from '.';

describe('iif utility function', () => {
  it('should return the true result when condition is true', () => {
    expect(iif(true, 'trueValue')).toBe('trueValue');
    expect(iif(true, 123)).toBe(123);
    expect(iif(true, { value: 'test' })).toEqual({ value: 'test' });
  });

  it('should return the false result when condition is false and false result is provided', () => {
    expect(iif(false, 'trueValue', 'falseValue')).toBe('falseValue');
    expect(iif(false, 123, 456)).toBe(456);
    expect(iif(false, { value: 'test' }, { value: 'other' })).toEqual({ value: 'other' });
  });

  it('should return undefined when condition is false and no false result is provided', () => {
    expect(iif(false, 'trueValue')).toBeUndefined();
    expect(iif(false, 123)).toBeUndefined();
    expect(iif(false, { value: 'test' })).toBeUndefined();
  });

  it('should work with expressions as the condition', () => {
    const value = 5;
    expect(iif(value > 3, 'greater', 'less')).toBe('greater');
    expect(iif(value < 3, 'less', 'greater')).toBe('greater');
  });
});
