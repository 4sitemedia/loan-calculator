import React, { useState } from "react";
import { NumberInputProps } from "../types/NumberInputProps";
import { sanitizeNumberInput, validateNumber } from "../util/validation";

const PurchasePrice = (props: NumberInputProps): React.JSX.Element => {
  const { setValue } = props;

  const [errorMessage, setErrorMessage] = useState<string>("");
  const [price, setPrice] = useState<string>("");

  /**
   * event handler for setting the purchase price
   * @param event
   */
  const onChangePrice = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const value: string = sanitizeNumberInput(event.target.value);
    const amount: number = Number.parseFloat(value);

    if (validateNumber(amount, 1)) {
      setErrorMessage("");
      setPrice(value);
      setValue(amount);
    } else {
      setErrorMessage("Please enter a positive number.");
      setPrice("");
      setValue(undefined);
    }
  };

  return (
    <>
      <label className="text-gray-900">
        Purchase Price
        <input
          className="border px-1 py-0.5 w-full"
          name="principal"
          onChange={onChangePrice}
          placeholder="Principal Amount"
          value={price}
        />
      </label>
      <span className="text-red-700 text-sm">{errorMessage}</span>
    </>
  );
};

export default PurchasePrice;
