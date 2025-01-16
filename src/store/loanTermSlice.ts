import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { RootState } from './store';

interface LoanTermState {
  value: number;
}

const initialState: LoanTermState = {
  value: 0,
};

export const loanTermSlice = createSlice({
  initialState,
  name: 'loanTerm',
  reducers: {
    setLoanTerm: (state, action: PayloadAction<number>) => {
      state.value = action.payload * 12;
    },
  },
});

export const { setLoanTerm } = loanTermSlice.actions;

export const selectLoanTerm = (state: RootState): number =>
  state.loanTerm.value;

export default loanTermSlice.reducer;
