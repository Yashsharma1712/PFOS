import type { FinanceData } from "../models/Finance";

export function getTotalAssets(data: FinanceData) {
  return (
    data.bankBalance +
    data.cashInHand +
    data.mutualFunds +
    data.stocks +
    data.gold +
    data.crypto
  );
}

export function getTotalLiabilities(data: FinanceData) {
  return (
    data.loans +
    data.creditCardDue
  );
}

export function getNetWorth(data: FinanceData) {
  return (
    getTotalAssets(data) -
    getTotalLiabilities(data)
  );
}

export function getMonthlySavings(data: FinanceData) {
  return (
    data.monthlyIncome -
    data.monthlyExpenses
  );
}