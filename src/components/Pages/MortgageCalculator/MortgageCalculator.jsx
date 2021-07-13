import React from "react";
import { useLoginRegister } from "../LoginRegister/LoginRegisterContext";
import { Redirect } from "react-router-dom";
import Calculator from "../MortgageCalculator/Calculator";
import { MortgageCalculatorMenuProvider } from "../MortgageCalculator/MortgageCalculatorContexts/MortgageCalculatorContextMenu";
import { MortgageCalculatorFormProvider } from "../MortgageCalculator/MortgageCalculatorContexts/MortgageCalculatorContextForm";

export default function MortgageCalculator() {
  const { userToken } = useLoginRegister();
  return (
    <>
      {userToken === null && <Redirect to="/" />}
      <MortgageCalculatorMenuProvider>
        <MortgageCalculatorFormProvider>
          <h1>Ипотечный калькулятор</h1>
          <p>С возможностью расчета досрочного погашения</p>
          <Calculator />
        </MortgageCalculatorFormProvider>
      </MortgageCalculatorMenuProvider>
    </>
  );
}
