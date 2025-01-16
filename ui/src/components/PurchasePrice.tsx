import React, { useState } from 'react';
import { useAppDispatch } from '../store/hooks';
import { setPurchasePrice } from '../store/purchasePriceSlice';
import { sanitizeNumberInput, validateNumber } from '../util/validation';
import ErrorMessage from './ErrorMessage';
import InputField from './InputField';

const PurchasePrice = (): React.JSX.Element => {
  const dispatch = useAppDispatch();

  const [errorMessage, setErrorMessage] = useState<string | undefined>('');
  const [purchasePrice, setPurchasePriceValue] = useState<string>('');

  /**
   * event handler for setting the purchase price
   * @param event
   */
  const onChangePurchasePrice = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const value: string = sanitizeNumberInput(event.target.value);
    const amount: number = Number.parseFloat(value);

    if (validateNumber(amount, 1)) {
      dispatch(setPurchasePrice(amount));
      setErrorMessage(undefined);
      setPurchasePriceValue(value.toString());
    } else {
      dispatch(setPurchasePrice(0));
      setErrorMessage('Please enter a positive number.');
      setPurchasePriceValue('');
    }
  };

  return (
    <>
      <InputField
        label="Purchase Price"
        name="purchase-price"
        placeholder="Purchase Price"
        onChange={onChangePurchasePrice}
        value={purchasePrice}
      />
      <ErrorMessage message={errorMessage} />
    </>
  );
};

export default PurchasePrice;
