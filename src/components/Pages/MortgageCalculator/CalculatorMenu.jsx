import React, { useState } from "react";
import { useMortgageCalculatorMenu } from "./MortgageCalculatorContexts/MortgageCalculatorContextMenu";

export default function CalculatorMenu() {
  const [form, setForm] = useState("realty");
  const { chooseRealty, chooseCredit, choosePayment } =
    useMortgageCalculatorMenu();
  return (
    <div className="menu">
      <div
        className="form-type-button"
        onClick={() => {
          setForm("realty");
          chooseRealty(form);
        }}
      >
        <input
          type="radio"
          id="realty"
          name="radioFormType"
          defaultChecked="checked"
        />
        <label htmlFor="realty">Недвижимость</label>
      </div>
      <div
        className="form-type-button"
        onClick={() => {
          setForm("credit");
          chooseCredit(form);
        }}
      >
        <input type="radio" id="credit" name="radioFormType" />
        <label htmlFor="credit">Кредит</label>
      </div>
      <div
        className="form-type-button"
        onClick={() => {
          setForm("payment");
          choosePayment(form);
        }}
      >
        <input type="radio" id="payment" name="radioFormType" />
        <label htmlFor="payment">Платеж</label>
      </div>
    </div>
  );
}
