import { financeData } from "../../store/financeStore";
import {
  getNetWorth,
  getTotalAssets,
  getTotalLiabilities,
  getMonthlySavings,
} from "../../utils/calculations";
import DashboardCard from "../../components/DashboardCard/DashboardCard";

function Dashboard() {
    const netWorth = getNetWorth(financeData);
const assets = getTotalAssets(financeData);
const liabilities = getTotalLiabilities(financeData);
const savings = getMonthlySavings(financeData);
  return (
    <>
      <h1 className="text-3xl font-bold mb-6">
        Dashboard
      </h1>

      <div className="flex flex-wrap gap-5">
        <DashboardCard title="Net Worth" value={`₹${netWorth.toLocaleString("en-IN")}`} />
        <DashboardCard title="Assets" value={`₹${assets.toLocaleString("en-IN")}`} />
        <DashboardCard title="Liabilities" value={`₹${liabilities.toLocaleString("en-IN")}`} />
        <DashboardCard
  title="Monthly Income"
  value={`₹${financeData.income
    .reduce((sum, item) => sum + item.amount, 0)
    .toLocaleString("en-IN")}`}
/>

<DashboardCard
  title="Monthly Expenses"
  value={`₹${financeData.expenses
    .reduce((sum, item) => sum + item.amount, 0)
    .toLocaleString("en-IN")}`}
/>
      </div>
    </>
  );
}

export default Dashboard;