import React from "react";
import { useLoginRegister } from "../LoginRegister/LoginRegisterContext";
import { Redirect } from "react-router-dom";
import Calculator from "../MortgageCalculator/Calculator";

export default function MortgageCalculator() {
  const { userToken } = useLoginRegister();
  return (
    <>
      {userToken === null && <Redirect to="/" />}
      <h1>Ипотечный калькулятор</h1>
      <p>С возможностью расчета досрочного погашения</p>
      <Calculator />
    </>
  );
}
