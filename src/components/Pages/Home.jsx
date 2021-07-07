import React, { useEffect } from "react";
import { useLogin } from "../Pages/Login/LoginContext";

export default function Home() {
  const { userToken, addLogin } = useLogin();

  let user = JSON.parse(localStorage.getItem("token"));

  useEffect(() => {
    if (user !== null) {
      addLogin(user);
    }
  }, [user]);

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
