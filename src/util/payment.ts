const PMI_THRESHOLD = 0.8;

/**
 * calculate a monthly mortgage payment based on the given data based on the
 * formula:
 * M = P * (r * (1 + r) ^ n) / ((1 + r) ^ (n - 1)) + PMI
 *
 * where
 * M = monthly payment amount
 * P = the total loan amount
 * r = the monthly interest rate
 * n = the total number of payments
 * PMI = the additional private mortgage insurance amount if required
 *
 * @param parameters
 */
export const calculateMonthlyPaymentAmount = ({
  monthlyInterestRate,
  monthlyPMIRate,
  numberPayments,
  loanAmount,
  principalAmount,
  purchasePrice,
}: {
  monthlyInterestRate: number;
  monthlyPMIRate?: number;
  numberPayments: number;
  loanAmount: number;
  principalAmount: number;
  purchasePrice: number;
}): number => {
  if (
    loanAmount <= 0 ||
    monthlyInterestRate < 0 ||
    numberPayments <= 0 ||
    principalAmount <= 0 ||
    purchasePrice < loanAmount
  ) {
    return 0;
  }

  const monthlyPercentage = calculateMonthlyPercentage({
    monthlyInterestRate,
    numberPayments,
  });

  const pmi: number = calculateMonthlyPMIAmount({
    loanAmount,
    monthlyPMIRate,
    principalAmount,
    purchasePrice,
  });

  return loanAmount * monthlyPercentage + pmi;
};

/**
 * calculate the percentage of the loan amount paid per month based on the interest rate and number
 * of payments
 */
const calculateMonthlyPercentage = ({
  monthlyInterestRate,
  numberPayments,
}: {
  monthlyInterestRate: number;
  numberPayments: number;
}): number => {
  if (monthlyInterestRate === 0) {
    return 1 / numberPayments;
  }

  const dividend: number =
    monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberPayments);

  const divisor: number = Math.pow(1 + monthlyInterestRate, numberPayments) - 1;

  return dividend / divisor;
};

/**
 * calculate the monthly pmi amount based on total loan amount and pmi rate.
 * this is only required when the principal amount is more than 80% of the purchase price.
 */
export const calculateMonthlyPMIAmount = ({
  loanAmount,
  monthlyPMIRate,
  principalAmount,
  purchasePrice,
}: {
  loanAmount: number;
  monthlyPMIRate?: number;
  principalAmount: number;
  purchasePrice: number;
}): number => {
  if (!monthlyPMIRate || principalAmount / purchasePrice <= PMI_THRESHOLD) {
    return 0;
  }

  return monthlyPMIRate * loanAmount;
};
