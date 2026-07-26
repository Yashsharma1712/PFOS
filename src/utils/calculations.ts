import type { FinanceData } from "../models/Finance";

export function getTotalAssets(data: FinanceData) {
  const investmentValue = data.investments.reduce(
    (sum, investment) => sum + investment.currentValue,
    0
  );

  return (
    data.bankBalance +
    data.cashInHand +
    investmentValue
  );
}

export function getTotalLiabilities(data: FinanceData) {
  return data.loans.reduce(
    (sum, loan) => sum + loan.outstanding,
    0
  );
}

export function getNetWorth(data: FinanceData) {
  return (
    getTotalAssets(data) -
    getTotalLiabilities(data)
  );
}

export function getMonthlySavings(data: FinanceData) {
  const income = data.income.reduce(
    (sum, item) => sum + item.amount,
    0
  );

  const expenses = data.expenses.reduce(
    (sum, item) => sum + item.amount,
    0
  );

  return income - expenses;
}