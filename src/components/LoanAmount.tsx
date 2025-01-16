import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { setLoanAmount } from '../store/loanAmountSlice';
import { selectPurchasePrice } from '../store/purchasePriceSlice';
import { sanitizeNumberInput, validateNumber } from '../util/validation';
import ErrorMessage from './ErrorMessage';
import InputField from './InputField';

const LoanAmount = (): React.JSX.Element => {
  const dispatch = useAppDispatch();

  const [errorMessage, setErrorMessage] = useState<string | undefined>();
  const [loanAmount, setLoanAmountValue] = useState<string>('');
  const purchasePrice: number = useAppSelector(selectPurchasePrice);

  /**
   * event handler for setting the loan amount
   * @param event
   */
  const onChangeLoanAmount = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const value: string = sanitizeNumberInput(event.target.value);
    const amount: number = Number.parseFloat(value);

    if (validateNumber(amount, 1) && amount < purchasePrice) {
      dispatch(setLoanAmount(amount));
      setErrorMessage(undefined);
      setLoanAmountValue(value.toString());
    } else {
      dispatch(setLoanAmount(0));
      setErrorMessage(
        'Please enter a positive number that is less than the Purchase Price.'
      );
      setLoanAmountValue('');
    }
  };

  return (
    <>
      <InputField
        label="Loan Amount"
        name="loan-amount"
        placeholder="Loan Amount"
        onChange={onChangeLoanAmount}
        value={loanAmount}
      />
      <ErrorMessage message={errorMessage} />
    </>
  );
};

export default LoanAmount;
