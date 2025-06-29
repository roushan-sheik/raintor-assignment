export const decommaizeNumber = (value: string) => {
  const result = Number(value.replaceAll(/,/g, ''));

  if (isNaN(result)) {
    console.warn('Is not right input.', result);
  }

  return result;
};
