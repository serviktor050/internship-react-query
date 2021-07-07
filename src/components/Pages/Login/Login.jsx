import React, { useState, useEffect } from "react";
import { useMutation } from "react-query";
import { useLogin } from "./LoginContext";
import { Redirect } from "react-router-dom";
import { ADD_LOGIN } from "./LoginContext";

const fetchLogin = async (form) => {
  const response = await fetch("https://reqres.in/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(form),
  });
  let resultOfFetching = await response.json();
  if (resultOfFetching !== "") {
    localStorage.setItem("token", JSON.stringify(resultOfFetching.token));
  }
  return resultOfFetching;
};

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const mutation = useMutation(fetchLogin);
  const { dispatch } = useLogin();

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    mutation.mutate(form);
  };

  useEffect(() => {
    if (mutation.data) {
      dispatch({ type: ADD_LOGIN, payload: mutation.data.token });
    }
  }, [dispatch, mutation.isSuccess, mutation.data]);

  return (
    <>
      {mutation.isSuccess === true && <Redirect to="/" />}
      <div>
        <h1>Авторизация</h1>
        <form onSubmit={handleSubmit}>
          <input
            name="email"
            type="text"
            value={form.email}
            onChange={handleChange}
          />
          <input
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
          />
          <button>Войти</button>
        </form>
      </div>
    </>
  );
}
