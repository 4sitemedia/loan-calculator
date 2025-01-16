import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AmortizationDataInterface } from '../types/AmortizationDataInterface';
import type { RootState } from './store';

interface AmortizationDataState {
  value: AmortizationDataInterface;
}

const initialState: AmortizationDataState = {
  value: { items: [] },
};

export const amortizationDataSlice = createSlice({
  initialState,

  name: 'amortizationData',
  reducers: {
    setAmortizationData: (
      state,
      action: PayloadAction<AmortizationDataInterface>
    ) => {
      state.value = action.payload;
    },
  },
});

export const { setAmortizationData } = amortizationDataSlice.actions;

export const selectAmortizationData = (
  state: RootState
): AmortizationDataInterface => state.amortizationData.value;

export default amortizationDataSlice.reducer;
