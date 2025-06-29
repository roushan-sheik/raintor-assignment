import { describe, it, expect } from 'vitest';
import { chunkArray } from '.';

describe('chunkArray utility function', () => {
  it('should divide an array into chunks of specified size', () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const result = chunkArray(array, 3);

    expect(result).toEqual([[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]]);
  });

  it('should return an array of arrays', () => {
    const array = [1, 2, 3, 4];
    const result = chunkArray(array, 2);

    expect(Array.isArray(result)).toBe(true);
    result.forEach((chunk) => {
      expect(Array.isArray(chunk)).toBe(true);
    });
  });

  it('should handle chunk size equal to array length', () => {
    const array = [1, 2, 3, 4];
    const result = chunkArray(array, 4);

    expect(result).toEqual([[1, 2, 3, 4]]);
  });

  it('should handle chunk size larger than array length', () => {
    const array = [1, 2, 3];
    const result = chunkArray(array, 5);

    expect(result).toEqual([[1, 2, 3]]);
  });

  it('should handle empty array', () => {
    const array: number[] = [];
    const result = chunkArray(array, 3);

    expect(result).toEqual([]);
  });

  it('should maintain original array element order', () => {
    const array = ['a', 'b', 'c', 'd', 'e'];
    const result = chunkArray(array, 2);

    expect(result.flat()).toEqual(array);
  });

  it('should preserve element types', () => {
    const array = [1, 'two', true, { a: 4 }, [5]];
    const result = chunkArray(array, 2);

    expect(result.flat()).toEqual(array);
  });
});
