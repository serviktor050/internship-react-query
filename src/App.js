import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Menu from "./components/Menu";
import Home from "./components/Pages/Home";
import Login from "./components/Pages/Login/Login";
import "antd/dist/antd.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { LoginProvider } from "./components/Pages/Login/LoginContext";

const queryClient = new QueryClient();

function App() {
  return (
    <LoginProvider>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Menu />
          <Switch>
            <Route path="/login" component={Login} />
            <Route exact path="/" component={Home} />
          </Switch>
        </Router>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </LoginProvider>
  );
}

export default App;
