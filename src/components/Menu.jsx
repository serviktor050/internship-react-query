import React from "react";
import { NavLink } from "react-router-dom";
import { useLoginRegister } from "./Pages/LoginRegister/LoginRegisterContext";

export default function Menu() {
  const { userToken, removeLogin } = useLoginRegister();

  return (
    <>
      {userToken === null && (
        <div className="menu">
          <div className="menu-item">
            <NavLink to="/" activeClassName="menu-item-selected" exact>
              Главная
            </NavLink>
          </div>
          <div className="menu-item">
            <NavLink to="/login" activeClassName="menu-item-selected">
              Login
            </NavLink>
          </div>
          <div className="menu-item">
            <NavLink to="/register" activeClassName="menu-item-selected">
              Register
            </NavLink>
          </div>
        </div>
      )}
      {userToken !== null && (
        <div className="menu">
          <div className="menu-item">
            <NavLink to="/" activeClassName="menu-item-selected" exact>
              Главная
            </NavLink>
          </div>
          <div className="menu-item">
            <NavLink
              to="/list-users"
              activeClassName="menu-item-selected"
              exact
            >
              Пользователи
            </NavLink>
          </div>
          <div className="menu-item">
            <NavLink
              to="/mortgage-calculator"
              activeClassName="menu-item-selected"
              exact
            >
              Расчитать ипотеку
            </NavLink>
          </div>
          <div className="menu-item">
            <NavLink to="/timer" activeClassName="menu-item-selected" exact>
              Таймер
            </NavLink>
          </div>
          <div
            className="menu-item-logout"
            onClick={() => {
              removeLogin();
            }}
          >
            Logout
          </div>
        </div>
      )}
    </>
  );
}
