import React, { useContext, useReducer } from "react";
import { createContext } from "react";

const ADD_LOGIN = "ADD_LOGIN";
const REMOVE_LOGIN = "REMOVE_LOGIN";

export const LoginContext = createContext();

export const useLogin = () => {
  return useContext(LoginContext);
};

const reducer = (state, action) => {
  console.log(action.payload);
  switch (action.type) {
    case ADD_LOGIN:
      return {
        ...state,
        userToken: action.payload,
      };
    case REMOVE_LOGIN:
      return {
        ...state,
        userToken: null,
      };
    default:
      return state;
  }
};

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
