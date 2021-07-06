import React /*, { useEffect }*/ from "react";
// import { useSelector, useDispatch } from "react-redux";
//import { loginSuccess } from "../../redux/loginPage/actions/actionsCreators";

export default function Home() {
  // const dispatch = useDispatch();
  // const { userToken } = useSelector((state) => state.loginAndRegisterPage);

  // let user = JSON.parse(localStorage.getItem("token"));

  // useEffect(() => {
  //   if (user !== null) {
  //     dispatch(loginSuccess({ token: user }));
  //   }
  // }, [dispatch, user]);

  return (
    <>
      <h1>Главная страница</h1>
      {/* {userToken === null && (
        <p>
          Пройдите регистрацию. Если Вы зарегестрированный пользователь -
          авторизуйтесь!
        </p>
      )}
      {userToken !== null && userToken.token !== "" && (
        <p>Авторизация выполнена!</p>
      )} */}
    </>
  );
}
