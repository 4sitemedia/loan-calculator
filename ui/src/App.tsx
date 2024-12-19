import AmortizationTable from "./components/AmortizationTable";
import MortgageCalculator from "./components/MortgageCalculator";

function App() {
  return (
    <>
      <div className="flex m-4">
        <div className="w-1/3">
          <MortgageCalculator />
        </div>
        <div className="ml-8 w-2/3">
          <AmortizationTable />
        </div>
      </div>
    </>
  );
}

export default App;
