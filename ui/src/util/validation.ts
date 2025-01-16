/**
 * returns the given string with invalid / non-numeric characters removed
 *
 * @param input
 */
export const sanitizeNumberInput = (input: string): string => {
  const value: string = input.replace(/[^.\d]/g, '');
  const split: string[] = value.split('.');

  return split.length > 2 ? `${split[0]}.${split[1]}` : value;
};

/**
 * returns true if the given value is a valid number or false otherwise
 *
 * @param value
 * @param min
 * @param max
 */
export const validateNumber = (
  value: number | undefined,
  min?: number,
  max?: number
): boolean => {
  return (
    typeof value === 'number' &&
    (typeof max === 'undefined' || value <= max) &&
    (typeof min === 'undefined' || value >= min)
  );
};
