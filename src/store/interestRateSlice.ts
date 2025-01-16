import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { RootState } from './store';

interface InterestRateState {
  value: number;
}

const initialState: InterestRateState = {
  value: 0,
};

export const interestRateSlice = createSlice({
  initialState,
  name: 'interestRate',
  reducers: {
    setInterestRate: (state, action: PayloadAction<number>) => {
      state.value = action.payload / 12 / 100;
    },
  },
});

export const { setInterestRate } = interestRateSlice.actions;

export const selectInterestRate = (state: RootState): number =>
  state.interestRate.value;

export default interestRateSlice.reducer;
