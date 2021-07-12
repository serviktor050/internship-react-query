export const getCostOfRealEstate = (payment, period, rate, initialPayment) => {
  let i = (rate / 12) * 0.01;

  let getCostOfRealEstate =
    initialPayment +
    (payment * (Math.pow(1 + i, period * 12) - 1)) /
      (i * Math.pow(1 + i, period * 12));

  return getCostOfRealEstate.toFixed();
};
