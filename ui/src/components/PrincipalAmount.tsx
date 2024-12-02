import React, { useState } from "react";
import { NumberInputProps } from "../types/NumberInputProps";
import { sanitizeNumberInput, validateNumber } from "../util/validation";

const PrincipalAmount = (props: NumberInputProps): React.JSX.Element => {
  const { setValue } = props;

  const [errorMessage, setErrorMessage] = useState<string>("");
  const [principal, setPrincipal] = useState<string>("");

  /**
   * event handler for setting the principal amount
   * @param event
   */
  const onChangePrincipal = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const value: string = sanitizeNumberInput(event.target.value);
    const amount: number = Number.parseFloat(value);

    if (validateNumber(amount, 1)) {
      setErrorMessage("");
      setPrincipal(value);
      setValue(amount);
    } else {
      setErrorMessage("Please enter a positive number.");
      setPrincipal("");
      setValue(undefined);
    }
  };

  return (
    <>
      <label className="text-gray-900">
        Principal Amount
        <input
          className="border px-1 py-0.5 w-full"
          name="principal"
          onChange={onChangePrincipal}
          placeholder="Principal Amount"
          value={principal}
        />
      </label>
      <span className="text-red-700 text-sm">{errorMessage}</span>
    </>
  );
};

export default PrincipalAmount;
