import { describe, it, expect, vi } from 'vitest';
import { decommaizeNumber } from '.';

describe('decommaizeNumber utility function', () => {
  it('should remove commas from numbers', () => {
    expect(decommaizeNumber('1,000')).toBe(1000);
    expect(decommaizeNumber('1,000,000')).toBe(1000000);
    expect(decommaizeNumber('123,456,789')).toBe(123456789);
  });

  it('should handle strings without commas', () => {
    expect(decommaizeNumber('1000')).toBe(1000);
    expect(decommaizeNumber('123456789')).toBe(123456789);
  });

  it('should handle decimal numbers with commas', () => {
    expect(decommaizeNumber('1,000.123')).toBe(1000.123);
    expect(decommaizeNumber('1,000,000.456')).toBe(1000000.456);
  });

  it('should handle negative numbers with commas', () => {
    expect(decommaizeNumber('-1,000')).toBe(-1000);
    expect(decommaizeNumber('-1,000,000.123')).toBe(-1000000.123);
  });

  it('should handle empty string', () => {
    expect(decommaizeNumber('')).toBe(0);
  });

  it('should warn for non-numeric input', () => {
    const consoleSpy = vi.spyOn(console, 'warn').mockImplementation(() => undefined);

    const result = decommaizeNumber('abc');
    expect(isNaN(result)).toBe(true);
    expect(consoleSpy).toHaveBeenCalled();

    consoleSpy.mockRestore();
  });

  it('should handle strings with other punctuation', () => {
    expect(decommaizeNumber('1,000-')).toBe(NaN);
    expect(decommaizeNumber('$1,000')).toBe(NaN);
  });
});
