import React, { useContext, useReducer } from "react";
import { createContext } from "react";

/*Констаты */
export const CHOOSE_REALTY = "CHOOSE_REALTY";
export const CHOOSE_CREDIT = "CHOOSE_CREDIT";
export const CHOOSE_PAYMENT = "CHOOSE_PAYMENT";

/*Создание контекста */
export const MortgageCalculatorContextMenu = createContext();

/*Создание функции для использования контекста в других компонентах */
export const useMortgageCalculatorMenu = () => {
  return useContext(MortgageCalculatorContextMenu);
};

/*Создание редьюсера */
const reducer = (state, action) => {
  switch (action.type) {
    case CHOOSE_REALTY:
      return {
        ...state,
        form: action.payload,
      };
    case CHOOSE_CREDIT:
      return {
        ...state,
        form: action.payload,
      };
    case CHOOSE_PAYMENT:
      return {
        ...state,
        form: action.payload,
      };
    default:
      return state;
  }
};

/*Создание основного компонента */
export const MortgageCalculatorMenuProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    form: "realty",
  });

  const chooseRealty = (formType) =>
    dispatch({ type: CHOOSE_REALTY, payload: formType });
  const chooseCredit = (formType) =>
    dispatch({ type: CHOOSE_CREDIT, payload: formType });
  const choosePayment = (formType) =>
    dispatch({ type: CHOOSE_PAYMENT, payload: formType });

  return (
    <MortgageCalculatorContextMenu.Provider
      value={{
        form: state.form,
        chooseRealty,
        chooseCredit,
        choosePayment,
        dispatch,
      }}
    >
      {children}
    </MortgageCalculatorContextMenu.Provider>
  );
};
