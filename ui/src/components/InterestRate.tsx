import React, { useState } from 'react';
import { useAppDispatch } from '../store/hooks';
import { setInterestRate } from '../store/interestRateSlice';
import { sanitizeNumberInput, validateNumber } from '../util/validation';
import ErrorMessage from './ErrorMessage';
import InputField from './InputField';

const InterestRate = (): React.JSX.Element => {
  const dispatch = useAppDispatch();

  const [annualInterestRate, setAnnualInterestRate] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string | undefined>();

  /**
   * event handler for setting the interest rate
   * @param event
   */
  const onChangeInterestRate = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const value: string = sanitizeNumberInput(event.target.value);
    const rate: number = Number.parseFloat(value);

    if (validateNumber(rate, 0, 100)) {
      dispatch(setInterestRate(rate));
      setAnnualInterestRate(value);
      setErrorMessage(undefined);
    } else {
      dispatch(setInterestRate(0));
      setAnnualInterestRate('');
      setErrorMessage('Please enter a number between zero and one hunderd.');
    }
  };

  return (
    <>
      <InputField
        label="Interest Rate"
        name="interest-rate"
        placeholder="Annual Interest Rate"
        onChange={onChangeInterestRate}
        value={annualInterestRate}
      />
      <ErrorMessage message={errorMessage} />
    </>
  );
};

export default InterestRate;
