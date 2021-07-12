import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Menu from "./components/Menu";
import Home from "./components/Pages/Home";
import Login from "./components/Pages/LoginRegister/Login";
import Register from "./components/Pages/LoginRegister/Register";
import ListUsers from "./components/Pages/ListUsers/ListUsers";
import User from "./components/Pages/User/User";
import MortgageCalculator from "./components/Pages/MortgageCalculator/MortgageCalculator";
import Timer from "./components/Pages/Timer/Timer";
import "antd/dist/antd.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { LoginRegisterProvider } from "./components/Pages/LoginRegister/LoginRegisterContext";
import { MortgageCalculatorMenuProvider } from "./components/Pages/MortgageCalculator/MortgageCalculatorContexts/MortgageCalculatorContextMenu";
import { MortgageCalculatorFormProvider } from "./components/Pages/MortgageCalculator/MortgageCalculatorContexts/MortgageCalculatorContextForm";

const queryClient = new QueryClient();

function App() {
  return (
    <LoginRegisterProvider>
      <MortgageCalculatorMenuProvider>
        <MortgageCalculatorFormProvider>
          <QueryClientProvider client={queryClient}>
            <Router>
              <Menu />
              <Switch>
                <Route path="/timer" component={Timer} />
                <Route
                  path="/mortgage-calculator"
                  component={MortgageCalculator}
                />
                <Route path="/list-users/user-:id" component={User} />
                <Route path="/list-users" component={ListUsers} />
                <Route path="/register" component={Register} />
                <Route path="/login" component={Login} />
                <Route exact path="/" component={Home} />
              </Switch>
            </Router>
            <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>
        </MortgageCalculatorFormProvider>
      </MortgageCalculatorMenuProvider>
    </LoginRegisterProvider>
  );
}

export default App;
