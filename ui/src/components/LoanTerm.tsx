import React, { useState } from 'react';
import { useAppDispatch } from '../store/hooks';
import { setLoanTerm } from '../store/loanTermSlice';
import { validateNumber } from '../util/validation';
import ErrorMessage from './ErrorMessage';
import InputField from './InputField';

const LoanTerm = (): React.JSX.Element => {
  const dispatch = useAppDispatch();

  const [errorMessage, setErrorMessage] = useState<string | undefined>();
  const [loanTerm, setLoanTermValue] = useState<string>('');

  /**
   * event handler for setting the loan term
   * @param event
   */
  const onChangeLoanTerm = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const value: number = Number.parseInt(event.target.value);

    if (validateNumber(value, 1)) {
      dispatch(setLoanTerm(value));
      setErrorMessage(undefined);
      setLoanTermValue(value.toString());
    } else {
      dispatch(setLoanTerm(0));
      setErrorMessage('Please enter a positive number.');
      setLoanTermValue('');
    }
  };

  return (
    <>
      <InputField
        label="Loan Term (years)"
        name="loan-term"
        placeholder="Loan Term"
        onChange={onChangeLoanTerm}
        value={loanTerm}
      />
      <ErrorMessage message={errorMessage} />
    </>
  );
};

export default LoanTerm;
