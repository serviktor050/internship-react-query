export const getDataForChart = (credit, payment, rate, duration) => {
  let rateInMonth = (rate / 12) * 0.01;
  let period = duration * 12;
  let remainingDebt = credit;
  let data = [];

  for (let i = 1; i <= period; i += 1) {
    let percentPart = remainingDebt * rateInMonth;
    remainingDebt -= payment - percentPart;
    data.push({
      month: i,
      percentPart: Number(percentPart.toFixed(2)),
      debtPart: Number((payment - percentPart).toFixed(2)),
      payment: Number(payment.toFixed(2)),
    });
  }
  return data;
};
