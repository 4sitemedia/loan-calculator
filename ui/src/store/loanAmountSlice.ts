import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { RootState } from './store';

interface LoanAmountState {
  value: number;
}

const initialState: LoanAmountState = {
  value: 0,
};

export const loanAmountSlice = createSlice({
  initialState,
  name: 'loanAmount',
  reducers: {
    setLoanAmount: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});

export const { setLoanAmount } = loanAmountSlice.actions;

export const selectLoanAmount = (state: RootState): number =>
  state.loanAmount.value;

export default loanAmountSlice.reducer;
