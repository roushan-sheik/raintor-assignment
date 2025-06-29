import { describe, it, expect, vi } from 'vitest';
import commaizeNumber from '.';

describe('commaizeNumber utility function', () => {
  it('should add commas to whole numbers', () => {
    expect(commaizeNumber(1000)).toBe('1,000');
    expect(commaizeNumber(1000000)).toBe('1,000,000');
    expect(commaizeNumber(123456789)).toBe('123,456,789');
  });

  it('should handle string input', () => {
    expect(commaizeNumber('1000')).toBe('1,000');
    expect(commaizeNumber('1000000')).toBe('1,000,000');
    expect(commaizeNumber('123456789')).toBe('123,456,789');
  });

  it('should only add commas to the integer part of decimal numbers', () => {
    expect(commaizeNumber(1000.123)).toBe('1,000.123');
    expect(commaizeNumber(1000000.456789)).toBe('1,000,000.456789');
  });

  it('should handle decimal string input', () => {
    expect(commaizeNumber('1000.123')).toBe('1,000.123');
    expect(commaizeNumber('1000000.456789')).toBe('1,000,000.456789');
  });

  it("should handle small numbers that don't need commas", () => {
    expect(commaizeNumber(0)).toBe('0');
    expect(commaizeNumber(999)).toBe('999');
    expect(commaizeNumber(5)).toBe('5');
  });

  it('should handle negative numbers', () => {
    expect(commaizeNumber(-1000)).toBe('-1,000');
    expect(commaizeNumber(-1000000.123)).toBe('-1,000,000.123');
  });

  it('should handle numbers already containing commas', () => {
    expect(commaizeNumber('1,000')).toBe('1,000');
    expect(commaizeNumber('1,000,000')).toBe('1,000,000');
  });

  it('should return empty string for non-numeric values and warn', () => {
    const consoleSpy = vi.spyOn(console, 'warn').mockImplementation(() => undefined);

    expect(commaizeNumber('abc')).toBe('');
    expect(consoleSpy).toHaveBeenCalled();

    consoleSpy.mockRestore();
  });
});
