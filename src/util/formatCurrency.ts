export const formatCurrency = (
  value = 0,
  currency = 'USD',
  locale = 'us-US'
): string =>
  new Intl.NumberFormat(locale, {
    currency,
    style: 'currency',
  }).format(Math.abs(value));
