import React from "react";
import CalculatorMenu from "./CalculatorMenu";
import RealtyForm from "./Forms/RealtyForm";
import CreditForm from "./Forms/CreditForm";
import PaymentForm from "./Forms/PaymentForm";
import { useMortgageCalculatorMenu } from "./MortgageCalculatorContexts/MortgageCalculatorContextMenu";
import { useMortgageCalculatorForm } from "./MortgageCalculatorContexts/MortgageCalculatorContextForm";
import { getMonthlyPayment } from "../MortgageCalculator/CalculationFunctions/getMonthlyPayment";
import { getCostOfRealEstate } from "../MortgageCalculator/CalculationFunctions/getCostOfRealEstate";
import CreditInformation from "./Info/CreditInformation";
import PaymentInformation from "./Info/PaymentInformation";
import RealtyInformation from "./Info/RealtyInformation";
import CalculatorChartCredit from "./CalculatorChart/CalculatorChartCredit";
import CalculatorChartPayment from "./CalculatorChart/CalculatorChartPayment";
import CalculatorChartRealty from "./CalculatorChart/CalculatorChartRealty";

export default function Calculator() {
  const { form } = useMortgageCalculatorMenu();
  const {
    loanTerm,
    loanAmount,
    interestRate,
    costOfRealEstate,
    initialPayment,
    monthlyPayment,
  } = useMortgageCalculatorForm();

  let formToSend = {
    costOfRealEstate: costOfRealEstate,
    initialPayment: initialPayment,
    loanTerm: loanTerm,
    loanAmount: loanAmount,
    interestRate: interestRate,
    monthlyPayment: monthlyPayment,
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formToSend);
  };

  return (
    <>
      <div className="calculator">
        <div className="menu-and-form">
          <CalculatorMenu />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-and-info">
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
            <div className="info">
              {form === "realty" && (
                <>
                  <div className="total">
                    <div className="total-name">
                      <p>Ваш ежемесячный платеж</p>
                    </div>
                    <div className="total-value">
                      <h2>
                        {`${getMonthlyPayment(
                          Number(costOfRealEstate) - Number(initialPayment),
                          Number(loanTerm),
                          Number(interestRate)
                        )} ₽`}
                      </h2>
                    </div>
                  </div>
                  <RealtyInformation />
                </>
              )}
              {form === "credit" && (
                <>
                  <div className="total">
                    <div className="total-name">
                      <p>Ваш ежемесячный платеж</p>
                    </div>
                    <div className="total-value">
                      <h2>
                        {getMonthlyPayment(
                          Number(loanAmount),
                          Number(loanTerm),
                          Number(interestRate)
                        )}
                        ₽
                      </h2>
                    </div>
                  </div>
                  <CreditInformation />
                </>
              )}
              {form === "payment" && (
                <>
                  <div className="total">
                    <div className="total-name">
                      <p>Стоимость недвижимости</p>
                    </div>
                    <div className="total-value">
                      <h2>{`${getCostOfRealEstate(
                        Number(monthlyPayment),
                        Number(loanTerm),
                        Number(interestRate),
                        Number(initialPayment)
                      )} ₽`}</h2>
                    </div>
                  </div>
                  <PaymentInformation />
                </>
              )}
            </div>
          </div>
        </form>
        {form === "realty" && <CalculatorChartRealty />}
        {form === "credit" && <CalculatorChartCredit />}
        {form === "payment" && <CalculatorChartPayment />}
      </div>
    </>
  );
}
