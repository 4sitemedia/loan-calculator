export const formatCurrency = (value = 0, currency = 'USD'): string =>
  new Intl.NumberFormat('us-US', {
    currency,
    style: 'currency',
  }).format(Math.abs(value));
