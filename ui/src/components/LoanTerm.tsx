import React, { useState } from 'react';
import { NumberInputProps } from '../types/NumberInputProps';
import { sanitizeNumberInput, validateNumber } from '../util/validation';

const LoanTerm = (props: NumberInputProps): React.JSX.Element => {
  const { setValue } = props;

  const [errorMessage, setErrorMessage] = useState<string>('');
  const [loanTerm, setLoanTerm] = useState<string>('');

  /**
   * event handler for setting the loan term
   * @param event
   */
  const onChangeLoanTerm = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const value: string = sanitizeNumberInput(event.target.value);
    const term: number = Number.parseFloat(value);

    if (validateNumber(term, 1, undefined, true)) {
      setErrorMessage('');
      setLoanTerm(value);
      setValue(term * 12);
    } else {
      setErrorMessage('Please enter a positive number.');
      setLoanTerm('');
      setValue(undefined);
    }
  };

  return (
    <>
      <label className="text-gray-900">
        Loan Term
        <input
          className="border px-1 py-0.5 w-full"
          name="principal"
          onChange={onChangeLoanTerm}
          placeholder="Loan Term (years)"
          value={loanTerm}
        />
      </label>
      <span className="text-red-700 text-sm">{errorMessage}</span>
    </>
  );
};

export default LoanTerm;
