import React from 'react';
import { selectAmortizationData } from '../store/amortizationDataSlice';
import { useAppSelector } from '../store/hooks';
import { AmortizationDataInterface } from '../types/AmortizationDataInterface';

const MonthlyPayment = (): React.JSX.Element => {
  const data: AmortizationDataInterface = useAppSelector(
    selectAmortizationData
  );

  const numberPMIPayments: number = data.totals?.numberPMIPayments ?? 0;
  const numberPayments: number =
    (data.totals?.numberPayments ?? 0) - numberPMIPayments;

  const pmiAmount: string = data.items[0]?.paymentAmount ?? '';
  const paymentAmount: string =
    data.items[numberPMIPayments]?.paymentAmount ?? '';

  return (
    <>
      {numberPMIPayments ? (
        <>
          <span className="font-bold">{numberPMIPayments}</span> payments of{' '}
          <span className="font-bold">{pmiAmount}</span> (including PMI),{' '}
        </>
      ) : null}
      {numberPayments ? (
        <>
          <span className="font-bold">{numberPayments}</span> payments of{' '}
          <span className="font-bold">{paymentAmount}</span>
        </>
      ) : null}
    </>
  );
};

export default MonthlyPayment;
