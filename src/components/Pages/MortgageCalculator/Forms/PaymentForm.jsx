import React from "react";
import { Slider } from "antd";
import { useMortgageCalculatorForm } from "../MortgageCalculatorContexts/MortgageCalculatorContextForm";
import ChoosingLoanTerm from "../FastButtons/ChoosingLoanTerm";
import ChoosingInterestRate from "../FastButtons/ChoosingInterestRate";

export default function PaymentForm() {
  const {
    initialPayment,
    loanTerm,
    interestRate,
    monthlyPayment,
    changeInitialPaymentField,
    changeLoanTermField,
    changeInterestRateField,
    changeMonthlyPaymentField,
  } = useMortgageCalculatorForm();

  return (
    <>
      <div className="form-item">
        <div className="form-item-name">Ежемесячный платеж</div>
        <div className="form-item-input">
          <input
            type="text"
            name="monthlyPayment"
            onChange={(evt) => {
              changeMonthlyPaymentField(evt.target.value);
            }}
            value={monthlyPayment}
          />
          <Slider
            defaultValue={2000}
            min={2000}
            max={999999}
            onChange={(value) => {
              changeMonthlyPaymentField(value);
            }}
            value={monthlyPayment}
          />
          <div className="units">₽</div>
        </div>
      </div>
      <div className="form-item">
        <div className="form-item-name">Первоначальный взнос</div>
        <div className="form-item-input">
          <input
            type="text"
            name="initialPayment"
            onChange={(evt) => {
              changeInitialPaymentField(evt.target.value);
            }}
            value={initialPayment}
          />
          <Slider
            defaultValue={0}
            min={0}
            max={99499999}
            onChange={(value) => {
              changeInitialPaymentField(value);
            }}
            value={initialPayment}
          />
          <div className="units">₽</div>
        </div>
      </div>
      <div className="form-item">
        <div className="form-item-name">Срок кредита</div>
        <div className="form-item-input">
          <input
            type="text"
            name="loanTerm"
            onChange={(evt) => {
              changeLoanTermField(evt.target.value);
            }}
            value={loanTerm}
          />
          <Slider
            defaultValue={1}
            min={1}
            max={30}
            onChange={(value) => {
              changeLoanTermField(value);
            }}
            value={loanTerm}
          />
          <div className="units">Лет</div>
        </div>
        <ChoosingLoanTerm />
      </div>
      <div className="form-item">
        <div className="form-item-name">Процентная ставка</div>
        <div className="form-item-input">
          <input
            type="text"
            name="interestRate"
            onChange={(evt) => {
              changeInterestRateField(evt.target.value);
            }}
            value={interestRate}
          />
          <Slider
            defaultValue={1}
            min={1}
            max={30}
            step={0.1}
            onChange={(value) => {
              changeInterestRateField(value);
            }}
            value={interestRate}
          />
          <div className="units">%</div>
        </div>
        <ChoosingInterestRate />
      </div>
    </>
  );
}
