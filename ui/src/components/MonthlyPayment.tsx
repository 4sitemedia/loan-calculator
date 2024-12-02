import React, { useEffect, useState } from "react";
import { MonthlyPaymentAmountInterface } from "../types/MonthlyPaymentAmountInterface";
import { calculatePaymentAmount } from "../util/payment";

const MonthlyPayment = (
  props: MonthlyPaymentAmountInterface
): React.JSX.Element => {
  const [paymentAmount, setPaymentAmount] = useState<string>();

  useEffect(() => {
    const amount: number | undefined = calculatePaymentAmount(props);

    if (amount) {
      setPaymentAmount(
        new Intl.NumberFormat("us-US", {
          style: "currency",
          currency: "USD",
        }).format(amount)
      );
    } else {
      setPaymentAmount("");
    }
  }, [props]);

  return (
    <>
      <span className="font-bold">{paymentAmount}</span>
    </>
  );
};

export default MonthlyPayment;
