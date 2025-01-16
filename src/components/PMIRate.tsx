import React, { useState } from 'react';
import { useAppDispatch } from '../store/hooks';
import { setPMIRate } from '../store/pmiRateSlice';
import { sanitizeNumberInput, validateNumber } from '../util/validation';
import ErrorMessage from './ErrorMessage';
import InputField from './InputField';

const PMIRate = (): React.JSX.Element => {
  const dispatch = useAppDispatch();

  const [annualPMIRate, setAnnualPMIRate] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string | undefined>();

  /**
   * event handler for setting the pmi rate
   * @param event
   */
  const onChangePMIRate = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const value: string = sanitizeNumberInput(event.target.value);
    const rate: number = Number.parseFloat(value);

    if (validateNumber(rate, 0, 100)) {
      dispatch(setPMIRate(rate));
      setAnnualPMIRate(value);
      setErrorMessage('');
    } else {
      dispatch(setPMIRate(0));
      setAnnualPMIRate('');

      if (value) {
        setErrorMessage('Please enter a number between zero and one hunderd.');
      }
    }
  };

  return (
    <>
      <InputField
        label="Private Mortgage Insurance (PMI) Rate"
        name="pmi-rate"
        placeholder="Annual PMI Rate"
        onChange={onChangePMIRate}
        value={annualPMIRate}
      />
      <ErrorMessage message={errorMessage} />
    </>
  );
};

export default PMIRate;
