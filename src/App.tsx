import AmortizationTable from './components/AmortizationTable';
import Footer from './components/Footer';
import LoanPaymentCalculator from './components/LoanPaymentCalculator';

function App() {
  return (
    <>
      <div className="flex flex-col justify-between min-h-screen">
        <div className="flex m-4">
          <div className="min-w-80 mr-8 w-1/3">
            <LoanPaymentCalculator />
          </div>
          <div className="min-w-216 w-1/2">
            <AmortizationTable />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
