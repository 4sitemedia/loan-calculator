import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { RootState } from './store';

interface PurchasePriceState {
  value: number;
}

const initialState: PurchasePriceState = {
  value: 0,
};

export const purchasePriceSlice = createSlice({
  initialState,
  name: 'purchasePrice',
  reducers: {
    setPurchasePrice: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});

export const { setPurchasePrice } = purchasePriceSlice.actions;

export const selectPurchasePrice = (state: RootState): number =>
  state.purchasePrice.value;

export default purchasePriceSlice.reducer;
