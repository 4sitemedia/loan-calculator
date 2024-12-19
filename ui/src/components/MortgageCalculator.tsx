import { useState } from "react";
import InterestRate from "./InterestRate";
import LoanTerm from "./LoanTerm";
import MonthlyPayment from "./MonthlyPayment";
import PMIRate from "./PMIRate";
import PrincipalAmount from "./PrincipalAmount";
import PurchasePrice from "./PurchasePrice";

function MortgageCalculator() {
  const [monthlyInterestRate, setMonthlyInterestRate] = useState<
    number | undefined
  >();
  const [monthlyPMIRate, setMonthlyPMIRate] = useState<number | undefined>();
  const [numberPayments, setNumberPayments] = useState<number | undefined>();
  const [principalAmount, setPrincipalAmount] = useState<number | undefined>();
  const [purchasePrice, setPurchasePrice] = useState<number | undefined>();

  return (
    <>
      <div className="border border-gray-400 rounded">
        <div className="bg-gray-200 px-4 py-2 text-xl">
          <h1>Mortgage Calculator</h1>
        </div>
        <div className="p-4">
          <div className="mb-4">
            <PurchasePrice setValue={setPurchasePrice} />
          </div>
          <div className="mb-4">
            <PrincipalAmount setValue={setPrincipalAmount} />
          </div>
          <div className="mb-4">
            <InterestRate setValue={setMonthlyInterestRate} />
          </div>
          <div className="mb-4">
            <LoanTerm setValue={setNumberPayments} />
          </div>
          <div className="mb-4">
            <PMIRate setValue={setMonthlyPMIRate} />
          </div>
          <MonthlyPayment
            monthlyInterestRate={monthlyInterestRate}
            monthlyPMIRate={monthlyPMIRate}
            numberPayments={numberPayments}
            principalAmount={principalAmount}
            purchasePrice={purchasePrice}
          />
        </div>
      </div>
    </>
  );
}

export default MortgageCalculator;
