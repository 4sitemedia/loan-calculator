import InterestRate from './InterestRate';
import LoanAmount from './LoanAmount';
import LoanTerm from './LoanTerm';
import MonthlyPayment from './MonthlyPayment';
import PMIRate from './PMIRate';
import PurchasePrice from './PurchasePrice';

function LoanPaymentCalculator() {
  return (
    <>
      <div className="border border-gray-400 h-120 rounded">
        <div className="bg-gray-200 px-4 py-2 text-xl">
          <h1>Loan Payment Calculator</h1>
        </div>
        <div className="p-4">
          <div className="mb-4">
            <PurchasePrice />
          </div>
          <div className="mb-4">
            <LoanAmount />
          </div>
          <div className="mb-4">
            <InterestRate />
          </div>
          <div className="mb-4">
            <LoanTerm />
          </div>
          <div className="mb-4">
            <PMIRate />
          </div>
          <MonthlyPayment />
        </div>
      </div>
    </>
  );
}

export default LoanPaymentCalculator;
