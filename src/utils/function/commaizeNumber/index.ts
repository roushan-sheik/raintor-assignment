import { decommaizeNumber } from '../decommaizeNumber';

const commaizeByRegex = (value: string) => value.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
const mergeByPoint = (prePoint: string, postPoint?: string) => [prePoint, postPoint].filter((v) => v != null).join('.');

/**
 * Returns a string with commas inserted every three digits for the given number.
 * Example: 1000000 -> '1,000,000'
 *
 * If a decimal number is provided, commas are added only to the integer part.
 *
 * @example
 * ```ts
 * commaizeNumber(1234567); // '1,234,567'
 * commaizeNumber('1234567'); // '1,234,567'
 * commaizeNumber(1234567.1234567); // '1,234,567.1234567'
 * commaizeNumber('1234567.1234567'); // '1,234,567.1234567'
 * ```
 */
const commaizeNumber = (value: number | string) => {
  const stringified = String(value);
  const [prePoint, postPoint] = stringified.split('.');

  const removeCommaPrePoint = String(decommaizeNumber(prePoint));
  const mergedNumber = mergeByPoint(removeCommaPrePoint, postPoint);

  if (isNaN(Number(mergedNumber))) {
    console.warn(`value is not number type, input: ${value}`);
    return '';
  }

  return mergeByPoint(commaizeByRegex(removeCommaPrePoint), postPoint);
};

export default commaizeNumber;
