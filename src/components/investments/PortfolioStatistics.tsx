interface PortfolioStatisticsProps {
  totalHoldings: number;
  totalInvestment: number;
  totalCurrentValue: number;
  totalProfit: number;
  returnPercentage: number;

  bestPerformer: string;
  worstPerformer: string;

  largestInvestment: string;
  smallestInvestment: string;

  averageInvestment: number;
}

export default function PortfolioStatistics({
  totalHoldings,
  totalInvestment,
  totalCurrentValue,
  totalProfit,
  returnPercentage,
  bestPerformer,
  worstPerformer,
  largestInvestment,
  smallestInvestment,
  averageInvestment,
}: PortfolioStatisticsProps) {
  return (
    <div className="bg-white rounded-xl shadow p-6">

      <h2 className="text-2xl font-bold mb-6">
        📈 Portfolio Statistics
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        <StatCard
          title="💼 Holdings"
          value={totalHoldings.toString()}
        />

        <StatCard
          title="💰 Invested"
          value={`₹${totalInvestment.toLocaleString("en-IN")}`}
        />

        <StatCard
          title="📈 Current Value"
          value={`₹${totalCurrentValue.toLocaleString("en-IN")}`}
        />

        <StatCard
          title="💹 Return"
          value={`${returnPercentage.toFixed(2)}%`}
          color={
            totalProfit >= 0
              ? "text-green-600"
              : "text-red-600"
          }
        />

        <StatCard
          title="🏆 Best Performer"
          value={bestPerformer || "-"}
        />

        <StatCard
          title="📉 Worst Performer"
          value={worstPerformer || "-"}
        />

        <StatCard
          title="🎯 Largest Investment"
          value={largestInvestment || "-"}
        />

        <StatCard
          title="🔹 Smallest Investment"
          value={smallestInvestment || "-"}
        />

        <StatCard
          title="📊 Average Investment"
          value={`₹${averageInvestment.toLocaleString("en-IN")}`}
        />

      </div>

    </div>
  );
}

interface StatCardProps {
  title: string;
  value: string;
  color?: string;
}

function StatCard({
  title,
  value,
  color = "text-gray-800",
}: StatCardProps) {
  return (
    <div className="border rounded-lg p-4">

      <p className="text-gray-500 text-sm">
        {title}
      </p>

      <h3 className={`text-xl font-bold mt-2 ${color}`}>
        {value}
      </h3>

    </div>
  );
}