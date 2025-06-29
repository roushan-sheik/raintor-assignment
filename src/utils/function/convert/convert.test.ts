import { describe, it, expect } from 'vitest';
import { convert } from '.';

describe('convert utility function', () => {
  it('should apply formatter to non-null values', () => {
    expect(convert(5, (v) => v * 2)).toBe(10);
    expect(convert('hello', (v) => v.toUpperCase())).toBe('HELLO');
    expect(convert([1, 2, 3], (v) => v.length)).toBe(3);
    expect(convert({ name: 'test' }, (v) => v.name)).toBe('test');
  });

  it('should return null when input is null', () => {
    expect(convert(null, (v) => v)).toBe(null);
    expect(convert(null, (v) => 'transformed')).toBe(null);
  });

  it('should return undefined when input is undefined', () => {
    expect(convert(undefined, (v) => v)).toBe(undefined);
    expect(convert(undefined, (v) => 'transformed')).toBe(undefined);
  });

  it('should handle complex transformations', () => {
    const input = { items: [1, 2, 3] };
    const result = convert(input, (v) => ({
      count: v.items.length,
      sum: v.items.reduce((total, num) => total + num, 0),
    }));

    expect(result).toEqual({ count: 3, sum: 6 });
  });

  it('should work with booleans', () => {
    expect(convert(true, (v) => !v)).toBe(false);
    expect(convert(false, (v) => !v)).toBe(true);
  });

  it('should work with type narrowing', () => {
    type User = { name: string } | null | undefined;

    const user: User = { name: 'John' };
    const nullUser: User = null;
    const undefinedUser: User = undefined;

    // Type assertion to handle the non-null case
    expect(convert(user, (v) => v.name)).toBe('John');
    // For null and undefined we don't call the formatter
    expect(convert(nullUser, (v) => 'ignored')).toBe(null);
    expect(convert(undefinedUser, (v) => 'ignored')).toBe(undefined);
  });
});
