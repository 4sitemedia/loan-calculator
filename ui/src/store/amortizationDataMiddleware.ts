import { createListenerMiddleware, isAnyOf } from '@reduxjs/toolkit';
import { AmortizationDataInterface } from '../types/AmortizationDataInterface';
import { calculateAmortizationData } from '../util/amortization';
import { setAmortizationData } from './amortizationDataSlice';
import { setInterestRate } from './interestRateSlice';
import { setLoanAmount } from './loanAmountSlice';
import { setLoanTerm } from './loanTermSlice';
import { setPMIRate } from './pmiRateSlice';
import { setPurchasePrice } from './purchasePriceSlice';
import { RootState } from './store';

export const amortizationDataMiddleware = createListenerMiddleware();

amortizationDataMiddleware.startListening({
  effect: (_, listenerApi) => {
    const state: RootState = listenerApi.getState() as RootState;

    const data: AmortizationDataInterface = calculateAmortizationData({
      loanAmount: state.loanAmount.value,
      monthlyInterestRate: state.interestRate.value,
      monthlyPMIRate: state.pmiRate.value,
      numberPayments: state.loanTerm.value,
      purchasePrice: state.purchasePrice.value,
    });

    listenerApi.dispatch(setAmortizationData(data));
  },
  matcher: isAnyOf(
    setInterestRate,
    setLoanAmount,
    setLoanTerm,
    setPMIRate,
    setPurchasePrice
  ),
});
