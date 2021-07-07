import React, { useContext, useReducer } from "react";
import { createContext } from "react";

/*Констаты */
const ADD_LOGIN = "ADD_LOGIN";
const REMOVE_LOGIN = "REMOVE_LOGIN";

/*Создание контекста */
export const LoginContext = createContext();

/*Создание функции для использования контекста в других компонентах */
export const useLogin = () => {
  return useContext(LoginContext);
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
    default:
      return state;
  }
};

/*Создание основного компонента */
export const LoginProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    userToken: null,
  });

  const addLogin = (token) => dispatch({ type: ADD_LOGIN, payload: token });
  const removeLogin = () => dispatch({ type: REMOVE_LOGIN });

  return (
    <LoginContext.Provider
      value={{
        userToken: state.userToken,
        addLogin,
        removeLogin,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};
