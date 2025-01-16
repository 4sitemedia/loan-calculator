import { AmortizationDataInterface } from '../types/AmortizationDataInterface';
import { AmortizationDataItemInterface } from '../types/AmortizationDataItemInterface';
import { formatCurrency } from './formatCurrency';
import {
  calculateMonthlyPMIAmount,
  calculateMonthlyPaymentAmount,
} from './payment';

/**
 * calculate the amortization data based on the given loan data
 */
export const calculateAmortizationData = ({
  loanAmount,
  monthlyInterestRate,
  monthlyPMIRate,
  numberPayments,
  purchasePrice,
}: {
  loanAmount: number;
  monthlyInterestRate: number;
  monthlyPMIRate?: number;
  numberPayments: number;
  purchasePrice: number;
}): AmortizationDataInterface => {
  if (
    loanAmount <= 0 ||
    monthlyInterestRate < 0 ||
    numberPayments <= 0 ||
    purchasePrice < loanAmount
  ) {
    return {
      items: [],
    };
  }

  const items: AmortizationDataItemInterface[] = [];

  let interestAmountTotal = 0;
  let numberPMIPayments = 0;
  let paymentAmountTotal = 0;
  let pmiAmountTotal = 0;
  let principalAmount: number = loanAmount;

  for (
    let paymentNumber = 1;
    paymentNumber <= numberPayments;
    paymentNumber += 1
  ) {
    const paymentAmount = calculateMonthlyPaymentAmount({
      loanAmount,
      monthlyInterestRate,
      monthlyPMIRate,
      numberPayments,
      principalAmount,
      purchasePrice,
    });
    paymentAmountTotal += paymentAmount;

    const interestAmount = calculateMonthlyInterestAmount({
      monthlyInterestRate,
      principalAmount,
    });
    interestAmountTotal += interestAmount;

    const pmiAmount = calculateMonthlyPMIAmount({
      loanAmount,
      monthlyPMIRate,
      principalAmount,
      purchasePrice,
    });
    pmiAmountTotal += pmiAmount;

    if (pmiAmount > 0) {
      numberPMIPayments += 1;
    }

    const loanPaymentAmount = calculateMonthlyPrincipalAmount({
      interestAmount,
      paymentAmount,
      pmiAmount,
    });

    principalAmount -= loanPaymentAmount;

    const item: AmortizationDataItemInterface = {
      balanceAmount: formatCurrency(principalAmount),
      interestAmount: formatCurrency(interestAmount),
      paymentAmount: formatCurrency(paymentAmount),
      paymentNumber,
      pmiAmount: formatCurrency(pmiAmount),
      principalAmount: formatCurrency(loanPaymentAmount),
    };

    items.push(item);
  }

  return {
    items,
    totals: {
      interestAmountTotal,
      numberPMIPayments,
      numberPayments,
      paymentAmountTotal,
      pmiAmountTotal,
      principalAmountTotal: loanAmount,
    },
  };
};

/**
 * calculate the monthly interest payment amount based on the interest rate and
 * remaining principal
 */
export const calculateMonthlyInterestAmount = ({
  monthlyInterestRate,
  principalAmount,
}: {
  monthlyInterestRate: number;
  principalAmount: number;
}): number => {
  return monthlyInterestRate * principalAmount;
};

/**
 * calculate the monthly principal payment amount based on the total payment,
 * interest, and pmi amounts
 */
export const calculateMonthlyPrincipalAmount = ({
  interestAmount,
  paymentAmount,
  pmiAmount,
}: {
  interestAmount: number;
  paymentAmount: number;
  pmiAmount?: number;
}): number => {
  return paymentAmount - interestAmount - (pmiAmount ?? 0);
};
