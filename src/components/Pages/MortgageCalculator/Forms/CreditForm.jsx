import React from "react";
import { Slider } from "antd";
import { useMortgageCalculatorForm } from "../MortgageCalculatorContexts/MortgageCalculatorContextForm";
import ChoosingLoanTerm from "../FastButtons/ChoosingLoanTerm";
import ChoosingInterestRate from "../FastButtons/ChoosingInterestRate";

export default function CreditForm() {
  const {
    loanTerm,
    loanAmount,
    interestRate,
    changeLoanAmountField,
    changeLoanTermField,
    changeInterestRateField,
  } = useMortgageCalculatorForm();

  return (
    <>
      <div className="form-item">
        <div className="form-item-name">Сумма кредита</div>
        <div className="form-item-input">
          <input
            type="text"
            name="loanAmount"
            onChange={(evt) => {
              changeLoanAmountField(evt.target.value);
            }}
            value={loanAmount}
          />
          <Slider
            defaultValue={0}
            min={0}
            max={99999999}
            onChange={(value) => {
              changeLoanAmountField(value);
            }}
            value={loanAmount}
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
