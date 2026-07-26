import type { Investment } from "../../types/investment";
import {
  Wallet,
  TrendingUp,
  TrendingDown,
  PieChart,
} from "lucide-react";

interface Props {
  investments: Investment[];
}

export default function InvestmentSummary({
  investments,
}: Props) {
  const totalInvested = investments.reduce(
    (sum, item) => sum + item.investedAmount,
    0
  );

  const currentValue = investments.reduce(
    (sum, item) => sum + item.currentPrice * item.quantity,
    0
  );

  const profitLoss = currentValue - totalInvested;

  const returnPercentage =
    totalInvested > 0
      ? (profitLoss / totalInvested) * 100
      : 0;

  return (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">

    <div className="bg-blue-600 text-white rounded-xl shadow-lg p-5">
      <div className="flex items-center justify-between">
  <p className="text-sm opacity-80">Total Invested</p>
  <Wallet size={24} />
</div>
      <h2 className="text-2xl font-bold mt-2">
        ₹{totalInvested.toLocaleString("en-IN")}
      </h2>
    </div>

    <div className="bg-green-600 text-white rounded-xl shadow-lg p-5">
      <div className="flex items-center justify-between">
  <p className="text-sm opacity-80">Portfolio Value</p>
  <PieChart size={24} />
</div>
      <h2 className="text-2xl font-bold mt-2">
        ₹{currentValue.toLocaleString("en-IN")}
      </h2>
    </div>

    <div
      className={`rounded-xl shadow-lg p-5 text-white ${
        profitLoss >= 0 ? "bg-emerald-600" : "bg-red-600"
      }`}
    >
      <div className="flex items-center justify-between">
  <p className="text-sm opacity-80">Profit / Loss</p>

  {profitLoss >= 0 ? (
    <TrendingUp size={24} />
  ) : (
    <TrendingDown size={24} />
  )}
</div>
      <h2 className="text-2xl font-bold mt-2">
        ₹{profitLoss.toLocaleString("en-IN")}
      </h2>
    </div>

    <div className="bg-purple-600 text-white rounded-xl shadow-lg p-5">
      <div className="flex items-center justify-between">
  <p className="text-sm opacity-80">Return %</p>
  <TrendingUp size={24} />
</div>
      <h2 className="text-2xl font-bold mt-2">
        {returnPercentage.toFixed(2)}%
      </h2>
    </div>
   </div>
  );
}