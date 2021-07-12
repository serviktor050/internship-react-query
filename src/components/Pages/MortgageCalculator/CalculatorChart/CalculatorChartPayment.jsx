import React, { useState, useEffect } from "react";
import { getDataForChart } from "../CalculationFunctions/getDataForChart";
import { getCostOfRealEstate } from "../CalculationFunctions/getCostOfRealEstate";
import { useMortgageCalculatorForm } from "../MortgageCalculatorContexts/MortgageCalculatorContextForm";

import {
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Line,
} from "recharts";

export default function CalculatorChartPayment() {
  const { loanTerm, interestRate, initialPayment, monthlyPayment } =
    useMortgageCalculatorForm();

  const [count, setCount] = useState([
    {
      month: 0,
      percentPart: 0,
      debtPart: 0,
    },
  ]);

  useEffect(() => {
    let setCostOfRealEstate = getCostOfRealEstate(
      Number(monthlyPayment),
      Number(loanTerm),
      Number(interestRate),
      Number(initialPayment)
    );
    getDataForChart(
      Number(setCostOfRealEstate),
      Number(monthlyPayment),
      Number(interestRate),
      Number(loanTerm)
    );
    setCount(
      getDataForChart(
        Number(setCostOfRealEstate),
        Number(monthlyPayment),
        Number(interestRate),
        Number(loanTerm)
      )
    );
  }, [monthlyPayment, initialPayment, interestRate, loanTerm]);

  return (
    <div className="calculator-chart">
      <div className="calculator-chart-name">
        <h2>График "Платеж"</h2>
      </div>
      <div className="calculator-chart-description">
        <p>
          На данном графике предвталено визуально отображение основных
          составляющих кредита, где:
        </p>
        <ul>
          <li>синий - доля основного долга;</li>
          <li>красный - доля процентов;</li>
          <li>зеленый - величина ежемесячного платежа.</li>
        </ul>
      </div>
      <div className="calculator-chart-field">
        <LineChart width={800} height={300} data={count}>
          <XAxis dataKey="month" />
          <YAxis dataKey="payment" />
          <Tooltip />
          <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
          <Line type="monotone" dataKey="percentPart" stroke="red" />
          <Line type="monotone" dataKey="debtPart" stroke="blue" />
          <Line type="monotone" dataKey="payment" stroke="green" />
          payment
        </LineChart>
      </div>
    </div>
  );
}
