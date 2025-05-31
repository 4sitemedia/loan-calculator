import { selectAmortizationData } from '../store/amortizationDataSlice';
import { useAppSelector } from '../store/hooks';
import { AmortizationDataInterface } from '../types/AmortizationDataInterface';
import { AmortizationDataItemInterface } from '../types/AmortizationDataItemInterface';
import { formatCurrency } from '../util/formatCurrency';
import AmortizationTableRow from './AmortizationTableRow';

function AmortizationTable() {
  const data: AmortizationDataInterface = useAppSelector(
    selectAmortizationData
  );

  const rows = data.items.map((row: AmortizationDataItemInterface) => (
    <AmortizationTableRow data={row} key={row.paymentNumber} />
  ));

  return (
    <>
      <div className="h-120 rounded-sm border border-gray-400">
        <div className="bg-gray-200 px-4 py-2 text-xl">
          <h1>Amortization Table</h1>
        </div>
        <div className="my-4 h-100 overflow-y-auto px-4">
          {rows.length === 0 ? (
            <span>
              Please enter the Purchase Price, Loan Amount, Interest Rate, Loan
              Term, and optional Private Mortgage Insurance Rate.
            </span>
          ) : (
            <table className="overflow-y-hidden text-left">
              <thead className="sticky top-0 bg-white">
                <tr className="bg-gray-100 *:px-2 *:py-1 *:whitespace-nowrap">
                  <th>Payment Number</th>
                  <th>Payment Amount</th>
                  <th>Principal Amount</th>
                  <th>Interest Amount</th>
                  <th>PMI Amount</th>
                  <th>Balance</th>
                </tr>
              </thead>
              <tbody>{rows}</tbody>
              <tfoot className="sticky bottom-0 bg-white">
                <tr className="bg-gray-100 *:px-2 *:py-1">
                  <th>Total</th>
                  <th>{formatCurrency(data.totals?.paymentAmountTotal)}</th>
                  <th>{formatCurrency(data.totals?.principalAmountTotal)}</th>
                  <th>{formatCurrency(data.totals?.interestAmountTotal)}</th>
                  <th>{formatCurrency(data.totals?.pmiAmountTotal)}</th>
                  <th></th>
                </tr>
              </tfoot>
            </table>
          )}
        </div>
      </div>
    </>
  );
}

export default AmortizationTable;
