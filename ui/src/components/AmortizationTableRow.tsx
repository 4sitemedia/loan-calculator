import { AmortizationTableRowProps } from '../types/AmortizationTableRowProps';

function AmortizationTableRow(props: AmortizationTableRowProps) {
  const { data } = props;

  return (
    <>
      <tr>
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
