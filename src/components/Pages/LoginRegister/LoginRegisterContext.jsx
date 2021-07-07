import React, { useContext, useReducer } from "react";
import { createContext } from "react";

/*Констаты */
export const ADD_LOGIN = "ADD_LOGIN";
export const REMOVE_LOGIN = "REMOVE_LOGIN";
export const ADD_REGISTER = "ADD_REGISTER";

/*Создание контекста */
export const LoginRegisterContext = createContext();

/*Создание функции для использования контекста в других компонентах */
export const useLoginRegister = () => {
  return useContext(LoginRegisterContext);
};

/*Создание редьюсера */
const reducer = (state, action) => {
  switch (action.type) {
    case ADD_LOGIN:
      return {
        ...state,
        userToken: action.payload,
      };
    case REMOVE_LOGIN:
      localStorage.removeItem("token");
      return {
        ...state,
        userToken: null,
      };
    case ADD_REGISTER:
      return {
        ...state,
        userToken: action.payload,
      };
    default:
      return state;
  }
};

/*Создание основного компонента */
export const LoginRegisterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    userToken: null,
  });

  const addLogin = (token) => dispatch({ type: ADD_LOGIN, payload: token });
  const removeLogin = () => dispatch({ type: REMOVE_LOGIN });
  const addRegister = (token) =>
    dispatch({ type: ADD_REGISTER, payload: token });

  return (
    <LoginRegisterContext.Provider
      value={{
        userToken: state.userToken,
        addLogin,
        removeLogin,
        addRegister,
        dispatch,
      }}
    >
      {children}
    </LoginRegisterContext.Provider>
  );
};
