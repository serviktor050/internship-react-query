import React, { useEffect } from "react";
import { useLoginRegister } from "./LoginRegister/LoginRegisterContext";
import { ADD_LOGIN } from "./LoginRegister/LoginRegisterContext";

export default function Home() {
  const { userToken, dispatch } = useLoginRegister();

  let user = JSON.parse(localStorage.getItem("token"));

  useEffect(() => {
    if (user !== null) {
      dispatch({ type: ADD_LOGIN, payload: user });
    }
  }, [dispatch, user]);

  return (
    <>
      <h1>Главная страница</h1>
      {userToken === null && (
        <p>
          Пройдите регистрацию. Если Вы зарегестрированный пользователь -
          авторизуйтесь!
        </p>
      )}
      {userToken !== null && <p>Авторизация выполнена!</p>}
    </>
  );
}
