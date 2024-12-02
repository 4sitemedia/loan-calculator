/**
 * returns the given string with non-numeric characters removed
 *
 * @param value
 */
export const sanitizeNumberInput = (value: string): string => {
  return value.replace(/[^.\d]/g, "");
};

/**
 * returns true if the given value is a valid number or false otherwise
 *
 * @param value
 * @param min
 * @param max
 * @param requireInteger
 */
export const validateNumber = (
  value: number | undefined,
  min?: number,
  max?: number,
  requireInteger = false
): boolean => {
  return (
    typeof value === "number" &&
    (!requireInteger || Number.isInteger(value)) &&
    (typeof max === "undefined" || value <= max) &&
    (typeof min === "undefined" || value >= min)
  );
};
