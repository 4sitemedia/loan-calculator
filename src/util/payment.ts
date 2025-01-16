/**
 * if possible, calculate a monthly mortgage payment based on the given data
 * based on the formula:
 * M = P * (r * (1 + r) ^ n) / ((1 + r) ^ (n - 1)) + PMI
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

  const pmi: number = calculatePMIAmount({
    loanAmount,
    monthlyPMIRate,
    principalAmount,
    purchasePrice,
  });

  return loanAmount * monthlyPercentage + pmi;
};

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

export const calculatePMIAmount = ({
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
  if (!monthlyPMIRate || principalAmount / purchasePrice <= 0.8) {
    return 0;
  }

  return monthlyPMIRate * loanAmount;
};
