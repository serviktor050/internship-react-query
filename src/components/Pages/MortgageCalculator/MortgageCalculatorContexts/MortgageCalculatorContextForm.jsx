import React, { useContext, useReducer } from "react";
import { createContext } from "react";

/*Констаты */
export const CHANGE_COST_OF_REAL_ESTATE_FIELD =
  "CHANGE_COST_OF_REAL_ESTATE_FIELD";
export const CHANGE_INITIAL_PAYMENT_FIELD = "CHANGE_INITIAL_PAYMENT_FIELD";
export const CHANGE_LOAN_TERM_FIELD = "CHANGE_LOAN_TERM_FIELD";
export const CHANGE_LOAN_AMOUNT_FIELD = "CHANGE_LOAN_AMOUNT_FIELD";
export const CHANGE_INTEREST_RATE_FIELD = "CHANGE_INTEREST_RATE_FIELD";
export const CHANGE_MONTHLY_PAYMENT_FIELD = "CHANGE_MONTHLY_PAYMENT_FIELD";

/*Создание контекста */
export const MortgageCalculatorContextForm = createContext();

/*Создание функции для использования контекста в других компонентах */
export const useMortgageCalculatorForm = () => {
  return useContext(MortgageCalculatorContextForm);
};

/*Создание редьюсера */
const reducer = (state, action) => {
  switch (action.type) {
    case CHANGE_COST_OF_REAL_ESTATE_FIELD:
      return {
        ...state,
        costOfRealEstate: action.payload.value,
      };
    case CHANGE_INITIAL_PAYMENT_FIELD:
      return {
        ...state,
        initialPayment: action.payload.value,
      };
    case CHANGE_LOAN_TERM_FIELD:
      return {
        ...state,
        loanTerm: action.payload.value,
      };
    case CHANGE_LOAN_AMOUNT_FIELD:
      return {
        ...state,
        loanAmount: action.payload.value,
      };
    case CHANGE_INTEREST_RATE_FIELD:
      return {
        ...state,
        interestRate: action.payload.value,
      };
    case CHANGE_MONTHLY_PAYMENT_FIELD:
      return {
        ...state,
        monthlyPayment: action.payload.value,
      };
    default:
      return state;
  }
};

/*Создание основного компонента */
export const MortgageCalculatorFormProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    costOfRealEstate: 500000,
    initialPayment: 0,
    loanTerm: 1,
    loanAmount: 1,
    interestRate: 1,
    monthlyPayment: 2000,
  });

  const changeCostOfRealEstateField = (value) =>
    dispatch({
      type: CHANGE_COST_OF_REAL_ESTATE_FIELD,
      payload: { value },
    });

  const changeInitialPaymentField = (value) =>
    dispatch({
      type: CHANGE_INITIAL_PAYMENT_FIELD,
      payload: { value },
    });

  const changeLoanTermField = (value) =>
    dispatch({
      type: CHANGE_LOAN_TERM_FIELD,
      payload: { value },
    });

  const changeLoanAmountField = (value) =>
    dispatch({
      type: CHANGE_LOAN_AMOUNT_FIELD,
      payload: { value },
    });

  const changeInterestRateField = (value) =>
    dispatch({
      type: CHANGE_INTEREST_RATE_FIELD,
      payload: { value },
    });

  const changeMonthlyPaymentField = (value) =>
    dispatch({
      type: CHANGE_MONTHLY_PAYMENT_FIELD,
      payload: { value },
    });

  return (
    <MortgageCalculatorContextForm.Provider
      value={{
        costOfRealEstate: state.costOfRealEstate,
        initialPayment: state.initialPayment,
        loanTerm: state.loanTerm,
        loanAmount: state.loanAmount,
        interestRate: state.interestRate,
        monthlyPayment: state.monthlyPayment,
        changeCostOfRealEstateField,
        changeInitialPaymentField,
        changeLoanTermField,
        changeLoanAmountField,
        changeInterestRateField,
        changeMonthlyPaymentField,
        dispatch,
      }}
    >
      {children}
    </MortgageCalculatorContextForm.Provider>
  );
};
