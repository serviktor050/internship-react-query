export const getMonthlyPayment = (sum, period, rate) => {
  let i = (rate / 12) * 0.01;

  let result =
    (sum * (i * Math.pow(1 + i, period * 12))) /
    (Math.pow(1 + i, period * 12) - 1);

  return result.toFixed();
};
