import AmortizationTable from './components/AmortizationTable';
import LoanPaymentCalculator from './components/LoanPaymentCalculator';

function App() {
  return (
    <>
      <div className="flex m-4">
        <div className="min-w-80 mr-8 w-1/3">
          <LoanPaymentCalculator />
        </div>
        <div className="min-w-216 w-1/2">
          <AmortizationTable />
        </div>
      </div>
    </>
  );
}

export default App;
