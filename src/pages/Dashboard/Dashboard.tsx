import { useMemo } from "react";
import { financeData } from "../../store/financeStore";
import {
  getNetWorth,
  getTotalAssets,
  getTotalLiabilities,
  getMonthlySavings,
} from "../../utils/calculations";
import DashboardCard from "../../components/DashboardCard/DashboardCard";
import AssetAllocationChart from "../../components/dashboard/AssetAllocationChart";
import InvestmentSummary from "../../components/dashboard/InvestmentSummary";

function Dashboard() {
  const finance = useMemo(() => {
  const saved = localStorage.getItem("pfos-finance");

  if (!saved) {
    return {
      salary: 0,
      bonus: 0,
      otherIncome: 0,
      rent: 0,
      food: 0,
      fuel: 0,
      electricity: 0,
      internet: 0,
      bankBalance: 0,
      cashInHand: 0,
    };
  }

  const data = JSON.parse(saved);

  return {
    salary: Number(data.salary || 0),
    bonus: Number(data.bonus || 0),
    otherIncome: Number(data.otherIncome || 0),

    rent: Number(data.rent || 0),
    food: Number(data.food || 0),
    fuel: Number(data.fuel || 0),
    electricity: Number(data.electricity || 0),
    internet: Number(data.internet || 0),

    bankBalance: Number(data.bankBalance || 0),
    cashInHand: Number(data.cashInHand || 0),
  };
}, []);
const netWorth = getNetWorth(financeData);
const assets = getTotalAssets(financeData);
const liabilities = getTotalLiabilities(financeData);
const savings = getMonthlySavings(financeData);
const investments = useMemo(() => {
  const saved = localStorage.getItem("pfos-investments");
  return saved ? JSON.parse(saved) : [];
}, []);
  return (
    <>
      <h1 className="text-3xl font-bold mb-6">
        Dashboard
      </h1>

      <div className="flex flex-wrap gap-5">
        <DashboardCard
  title="Monthly Savings"
  value={`₹${(
    (finance.salary +
      finance.bonus +
      finance.otherIncome) -
    (finance.rent +
      finance.food +
      finance.fuel +
      finance.electricity +
      finance.internet)
  ).toLocaleString("en-IN")}`}
/>
        <DashboardCard title="Net Worth" value={`₹${netWorth.toLocaleString("en-IN")}`} />
        <DashboardCard title="Assets" value={`₹${assets.toLocaleString("en-IN")}`} />
        <DashboardCard title="Liabilities" value={`₹${liabilities.toLocaleString("en-IN")}`} />
        <DashboardCard
  title="Monthly Income"
  value={`₹${(
    finance.salary +
    finance.bonus +
    finance.otherIncome
  ).toLocaleString("en-IN")}`}
/>

<DashboardCard
  title="Monthly Expenses"
  value={`₹${(
    finance.rent +
    finance.food +
    finance.fuel +
    finance.electricity +
    finance.internet
  ).toLocaleString("en-IN")}`}
/>
      </div>
      <div className="mt-8">
  <InvestmentSummary investments={investments} />
</div>

<div className="mt-8">
  <AssetAllocationChart investments={investments} />
</div>
    </>
  );
}

export default Dashboard;