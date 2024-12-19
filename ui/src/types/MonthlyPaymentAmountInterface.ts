export interface MonthlyPaymentAmountInterface {
  monthlyInterestRate: number | undefined;
  monthlyPMIRate?: number | undefined;
  numberPayments: number | undefined;
  principalAmount: number | undefined;
  purchasePrice: number | undefined;
}
