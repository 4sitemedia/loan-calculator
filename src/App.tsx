import AmortizationTable from './components/AmortizationTable';
import Footer from './components/Footer';
import LoanPaymentCalculator from './components/LoanPaymentCalculator';

function App() {
  return (
    <>
      <div className="flex min-h-screen flex-col justify-between">
        <div className="m-4 flex flex-col xl:flex-row">
          <div className="mr-8 w-full max-w-192 min-w-80 lg:w-1/2 xl:w-1/3">
            <LoanPaymentCalculator />
          </div>
          <div className="mt-4 w-full max-w-216 overflow-x-scroll md:min-w-192 md:overflow-x-auto xl:mt-0">
            <AmortizationTable />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
