import {
  Action,
  ThunkAction,
  combineSlices,
  configureStore,
} from '@reduxjs/toolkit';
import { amortizationDataMiddleware } from './amortizationDataMiddleware';
import { amortizationDataSlice } from './amortizationDataSlice';
import { interestRateSlice } from './interestRateSlice';
import { loanAmountSlice } from './loanAmountSlice';
import { loanTermSlice } from './loanTermSlice';
import { pmiRateSlice } from './pmiRateSlice';
import { purchasePriceSlice } from './purchasePriceSlice';

const rootReducer = combineSlices(
  amortizationDataSlice,
  interestRateSlice,
  loanAmountSlice,
  loanTermSlice,
  pmiRateSlice,
  purchasePriceSlice
);

export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(amortizationDataMiddleware.middleware),
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>;
export type RootState = ReturnType<typeof store.getState>;
