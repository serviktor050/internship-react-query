import React from "react";
import { useMortgageCalculatorForm } from "../MortgageCalculatorContexts/MortgageCalculatorContextForm";

export default function ChoosingInitialPayment() {
  const { costOfRealEstate, changeInitialPaymentField } =
    useMortgageCalculatorForm();

  return (
    <div className="input-buttons">
      <div
        className="input-buttons-item"
        onClick={() => {
          if (costOfRealEstate !== "") {
            changeInitialPaymentField(costOfRealEstate * 0);
          } else {
            return;
          }
        }}
      >
        <input type="radio" id="0" name="choosingInitialPayment" />
        <label htmlFor="0">0%</label>
      </div>
      <div
        className="input-buttons-item"
        onClick={() => {
          if (costOfRealEstate !== "") {
            changeInitialPaymentField((costOfRealEstate * 0.1).toFixed());
          } else {
            return;
          }
        }}
      >
        <input type="radio" id="10" name="choosingInitialPayment" />
        <label htmlFor="10">10%</label>
      </div>
      <div
        className="input-buttons-item"
        onClick={() => {
          if (costOfRealEstate !== "") {
            changeInitialPaymentField((costOfRealEstate * 0.15).toFixed());
          } else {
            return;
          }
        }}
      >
        <input type="radio" id="15" name="choosingInitialPayment" />
        <label htmlFor="15">15%</label>
      </div>
      <div
        className="input-buttons-item"
        onClick={() => {
          if (costOfRealEstate !== "") {
            changeInitialPaymentField((costOfRealEstate * 0.2).toFixed());
          } else {
            return;
          }
        }}
      >
        <input type="radio" id="20" name="choosingInitialPayment" />
        <label htmlFor="20">20%</label>
      </div>
      <div
        className="input-buttons-item"
        onClick={() => {
          if (costOfRealEstate !== "") {
            changeInitialPaymentField((costOfRealEstate * 0.25).toFixed());
          } else {
            return;
          }
        }}
      >
        <input type="radio" id="25" name="choosingInitialPayment" />
        <label htmlFor="25">25%</label>
      </div>
      <div
        className="input-buttons-item"
        onClick={() => {
          if (costOfRealEstate !== "") {
            changeInitialPaymentField((costOfRealEstate * 0.3).toFixed());
          } else {
            return;
          }
        }}
      >
        <input type="radio" id="30" name="choosingInitialPayment" />
        <label htmlFor="30">30%</label>
      </div>
    </div>
  );
}
