import React from "react";
import { useMortgageCalculatorForm } from "../MortgageCalculatorContexts/MortgageCalculatorContextForm";

export default function ChoosingLoanTerm() {
  const { changeLoanTermField } = useMortgageCalculatorForm();

  return (
    <div className="input-buttons">
      <div
        className="input-buttons-item"
        onClick={() => {
          changeLoanTermField(5);
        }}
      >
        <input type="radio" id="5years" name="choosingLoanTerm" />
        <label htmlFor="5years">5 лет</label>
      </div>
      <div
        className="input-buttons-item"
        onClick={() => {
          changeLoanTermField(10);
        }}
      >
        <input type="radio" id="10years" name="choosingLoanTerm" />
        <label htmlFor="10years">10 лет</label>
      </div>
      <div
        className="input-buttons-item"
        onClick={() => {
          changeLoanTermField(15);
        }}
      >
        <input type="radio" id="15years" name="choosingLoanTerm" />
        <label htmlFor="15years">15 лет</label>
      </div>
      <div
        className="input-buttons-item"
        onClick={() => {
          changeLoanTermField(20);
        }}
      >
        <input type="radio" id="20years" name="choosingLoanTerm" />
        <label htmlFor="20years">20 лет</label>
      </div>
    </div>
  );
}
