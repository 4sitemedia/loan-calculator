import React, { useEffect, useState } from "react";
import axios from "axios";
import { NumberInputProps } from "../types/NumberInputProps";
import { sanitizeNumberInput, validateNumber } from "../util/validation";
import { PMIResponse } from "../types/PMIResponse";

const PMIRate = (props: NumberInputProps): React.JSX.Element => {
  const { setValue } = props;

  const [annualPMIRate, setAnnualPMIRate] = useState<string>("");

  /**
   * event handler for setting the pmi rate
   * @param event
   */
  const onChangePMIRate = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const value: string = sanitizeNumberInput(event.target.value);
    const rate: number = Number.parseFloat(value);

    if (validateNumber(rate, 0)) {
      setAnnualPMIRate(value);
      setValue(rate / 12 / 100);
    } else {
      setAnnualPMIRate("");
      setValue(undefined);
    }
  };

  useEffect(() => {
    /**
     * fetch the initial pmi value
     */
    async function fetchPMI() {
      try {
        const response = await axios.get<PMIResponse>(
          "http://localhost:3000/pmi"
        );
        const pmi: number = response.data.pmi;

        setAnnualPMIRate(pmi.toString());
      } catch (error) {
        console.error(error);
      }
    }

    void fetchPMI();
  }, []);

  return (
    <>
      <label className="text-gray-900">
        Private Mortgage Insurance (PMI) Rate
        <input
          className="border px-1 py-0.5 w-full"
          name="pmi-rate"
          onChange={onChangePMIRate}
          placeholder="Annual PMI Rate"
          value={annualPMIRate}
        />
      </label>
    </>
  );
};

export default PMIRate;
