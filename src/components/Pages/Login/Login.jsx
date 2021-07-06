import React, { useState } from "react";
import { useMutation } from "react-query";
import { useLogin } from "./LoginContext";
import { Redirect } from "react-router-dom";

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
  console.log(mutation);
  const { userToken, addLogin } = useLogin();

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    mutation.mutate(form);
  };
  /*
  if (mutation.data) {
    addLogin(mutation.data.token);
  }
*/
  return (
    <>
      {userToken && <Redirect to="/" />}
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
