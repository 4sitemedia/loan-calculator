import { AmortizationDataInterface } from '../types/AmortizationDataInterface';
import { AmortizationDataItemInterface } from '../types/AmortizationDataItemInterface';
import { formatCurrency } from './formatCurrency';
import { calculateMonthlyPaymentAmount, calculatePMIAmount } from './payment';

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

  let principalAmount: number = loanAmount;

  const items: AmortizationDataItemInterface[] = [];
  let interestAmountTotal = 0;
  let numberPMIPayments = 0;
  let paymentAmountTotal = 0;
  let pmiAmountTotal = 0;

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

    const interestAmount = calculateInterestAmount({
      loanAmount: principalAmount,
      monthlyInterestRate,
    });
    interestAmountTotal += interestAmount;

    const pmiAmount = calculatePMIAmount({
      loanAmount,
      monthlyPMIRate,
      principalAmount,
      purchasePrice,
    });
    pmiAmountTotal += pmiAmount;

    if (pmiAmount > 0) {
      numberPMIPayments += 1;
    }

    const loanPaymentAmount = calculateLoanPaymentAmount({
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

export const calculateInterestAmount = ({
  loanAmount,
  monthlyInterestRate,
}: {
  loanAmount: number;
  monthlyInterestRate: number;
}): number => {
  return monthlyInterestRate * loanAmount;
};

export const calculateLoanPaymentAmount = ({
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
