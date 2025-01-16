import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { RootState } from './store';

interface PMIRateState {
  value: number;
}

const initialState: PMIRateState = {
  value: 0,
};

export const pmiRateSlice = createSlice({
  initialState,
  name: 'pmiRate',
  reducers: {
    setPMIRate: (state, action: PayloadAction<number>) => {
      state.value = action.payload / 12 / 100;
    },
  },
});

export const { setPMIRate } = pmiRateSlice.actions;

export const selectPMIRate = (state: RootState): number => state.pmiRate.value;

export default pmiRateSlice.reducer;
