export const getPercentages = (credit, payment, rate, duration) => {
  let rateInMonth = (rate / 12) * 0.01;
  let period = duration * 12;
  let percentages = 0;
  let remainingDebt = credit;

  for (let i = 0; i < period; i += 1) {
    let percentPart = remainingDebt * rateInMonth;
    remainingDebt -= payment - percentPart;
    percentages += percentPart;
  }
  return Number(percentages.toFixed());
};
