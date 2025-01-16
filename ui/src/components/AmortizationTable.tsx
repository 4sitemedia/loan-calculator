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
      <div className="border border-gray-400 h-120 rounded">
        <div className="bg-gray-200 px-4 py-2 text-xl">
          <h1>Amortization Table</h1>
        </div>
        <div className="h-100 my-4 overflow-y-auto px-4">
          {rows.length === 0 ? (
            <span>
              Please enter the Purchase Price, Loan Amount, Interest Rate, Loan
              Term, and optional Private Mortgage Insurance Rate.
            </span>
          ) : (
            <table className="overflow-y-hidden text-left">
              <thead className="bg-white sticky top-0">
                <tr>
                  <th className="pr-4">Payment Number</th>
                  <th className="pr-4">Payment Amount</th>
                  <th className="pr-4">Principal Amount</th>
                  <th className="pr-4">Interest Amount</th>
                  <th className="pr-4">PMI Amount</th>
                  <th className="pr-4">Balance</th>
                </tr>
              </thead>
              <tbody>{rows}</tbody>
              <tfoot className="bg-white bottom-0 sticky">
                <tr>
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
