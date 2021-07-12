import React from "react";
import CalculatorMenu from "./CalculatorMenu";
import RealtyForm from "./Forms/RealtyForm";
import CreditForm from "./Forms/CreditForm";
import PaymentForm from "./Forms/PaymentForm";
import { useMortgageCalculatorMenu } from "./MortgageCalculatorContexts/MortgageCalculatorContextMenu";

const handleSubmit = () => {
  console.log("Форма отправлена");
};

export default function Calculator() {
  const { form } = useMortgageCalculatorMenu();
  return (
    <>
      <div className="calculator">
        <div className="menu-and-form">
          <CalculatorMenu />
        </div>
        <form onSubmit={handleSubmit}>
          {form === "realty" && (
            <div className="form">
              <RealtyForm />
            </div>
          )}
          {form === "credit" && (
            <div className="form">
              <CreditForm />
            </div>
          )}
          {form === "payment" && (
            <div className="form">
              <PaymentForm />
            </div>
          )}
        </form>
      </div>
    </>
  );
}
