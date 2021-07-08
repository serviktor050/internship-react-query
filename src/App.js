import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Menu from "./components/Menu";
import Home from "./components/Pages/Home";
import Login from "./components/Pages/LoginRegister/Login";
import Register from "./components/Pages/LoginRegister/Register";
import ListUsers from "./components/Pages/ListUsers/ListUsers";
import "antd/dist/antd.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { LoginRegisterProvider } from "./components/Pages/LoginRegister/LoginRegisterContext";
import User from "./components/Pages/User/User";

const queryClient = new QueryClient();

function App() {
  return (
    <LoginRegisterProvider>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Menu />
          <Switch>
            <Route path="/list-users/user-:id" component={User} />
            <Route path="/list-users" component={ListUsers} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route exact path="/" component={Home} />
          </Switch>
        </Router>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </LoginRegisterProvider>
  );
}

export default App;
