import React from "react";
import { Slider } from "antd";
import { useMortgageCalculatorForm } from "../MortgageCalculatorContexts/MortgageCalculatorContextForm";
import ChoosingInitialPayment from "../FastButtons/ChoosingInitialPayment";
import ChoosingLoanTerm from "../FastButtons/ChoosingLoanTerm";
import ChoosingInterestRate from "../FastButtons/ChoosingInterestRate";

export default function RealtyForm() {
  const {
    initialPayment,
    loanTerm,
    interestRate,
    costOfRealEstate,
    changeInitialPaymentField,
    changeLoanTermField,
    changeInterestRateField,
    changeCostOfRealEstateField,
  } = useMortgageCalculatorForm();

  return (
    <>
      <div className="form-item">
        <div className="form-item-name">Стоимость недвижимости</div>
        <div className="form-item-input">
          <input
            type="text"
            name="costOfRealEstate"
            onChange={(evt) => {
              changeCostOfRealEstateField(evt.target.value);
            }}
            value={costOfRealEstate}
          />
          <Slider
            defaultValue={500000}
            min={500000}
            max={99999999}
            onChange={(value) => {
              changeCostOfRealEstateField(value);
            }}
            value={costOfRealEstate}
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
            max={costOfRealEstate * 0.3}
            onChange={(value) => {
              changeInitialPaymentField(value);
            }}
            value={initialPayment}
          />
          <div className="units">₽</div>
        </div>
        <ChoosingInitialPayment />
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
          <div className="units">₽</div>
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
