import { MonthlyPaymentAmountInterface } from "../types/MonthlyPaymentAmountInterface";

const calculateDividend = (
  monthlyInterestRate: number,
  numberPayments: number
): number => {
  return (
    monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberPayments)
  );
};

const calculateDivisor = (
  monthlyInterestRate: number,
  numberPayments: number
): number => {
  return Math.pow(1 + monthlyInterestRate, numberPayments) - 1;
};

const calculatePMI = (
  purchasePrice: number,
  principalAmount: number,
  monthlyPMIRate?: number
): number => {
  if (!monthlyPMIRate || principalAmount / purchasePrice <= 0.8) {
    return 0;
  }

  return monthlyPMIRate * principalAmount;
};

/**
 * if possible, calculate a monthly mortgage payment based on the given data
 * based on the formula:
 * M = P * (r * (1 + r) ^ n) / ((1 + r) ^ (n - 1))
 *
 * @param parameters
 */
export const calculatePaymentAmount = (
  parameters: MonthlyPaymentAmountInterface
): number | undefined => {
  if (
    !parameters.monthlyInterestRate ||
    !parameters.numberPayments ||
    !parameters.principalAmount ||
    !parameters.purchasePrice
  ) {
    return;
  }

  const {
    monthlyInterestRate,
    monthlyPMIRate,
    numberPayments,
    principalAmount,
    purchasePrice,
  } = parameters;

  if (
    monthlyInterestRate <= 0 ||
    numberPayments <= 0 ||
    principalAmount <= 0 ||
    purchasePrice < principalAmount
  ) {
    return;
  }

  const dividend: number = calculateDividend(
    monthlyInterestRate,
    numberPayments
  );

  const divisor: number = calculateDivisor(monthlyInterestRate, numberPayments);
  const pmi: number = calculatePMI(
    purchasePrice,
    principalAmount,
    monthlyPMIRate
  );

  return principalAmount * (dividend / divisor) + pmi;
};
