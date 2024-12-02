import React, { useState } from "react";
import { NumberInputProps } from "../types/NumberInputProps";
import { sanitizeNumberInput, validateNumber } from "../util/validation";

const InterestRate = (props: NumberInputProps): React.JSX.Element => {
  const { setValue } = props;

  const [annualInterestRate, setAnnualInterestRate] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  /**
   * event handler for setting the interest rate
   * @param event
   */
  const onChangeInterestRate = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const value: string = sanitizeNumberInput(event.target.value);
    const rate: number = Number.parseFloat(value);

    if (validateNumber(rate, 0.1)) {
      setErrorMessage("");
      setAnnualInterestRate(value);
      setValue(rate / 12 / 100);
    } else {
      setErrorMessage("Please enter a positive number.");
      setAnnualInterestRate("");
      setValue(undefined);
    }
  };

  return (
    <>
      <label className="text-gray-900">
        Interest Rate
        <input
          className="border px-1 py-0.5 w-full"
          name="interest-rate"
          onChange={onChangeInterestRate}
          placeholder="Annual Interest Rate"
          value={annualInterestRate}
        />
      </label>
      <span className="text-red-700 text-sm">{errorMessage}</span>
    </>
  );
};

export default InterestRate;
