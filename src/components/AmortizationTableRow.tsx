import { AmortizationTableRowProps } from '../types/AmortizationTableRowProps';

function AmortizationTableRow(props: AmortizationTableRowProps) {
  const { data } = props;

  return (
    <>
      <tr className="*:px-2 *:py-1 *:whitespace-nowrap">
        <td>{data.paymentNumber}</td>
        <td>{data.paymentAmount}</td>
        <td>{data.principalAmount}</td>
        <td>{data.interestAmount}</td>
        <td>{data.pmiAmount}</td>
        <td>{data.balanceAmount}</td>
      </tr>
    </>
  );
}

export default AmortizationTableRow;
