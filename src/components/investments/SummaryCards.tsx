interface SummaryCardsProps {
  totalInvestment: number;
  totalCurrentValue: number;
  totalProfit: number;
  totalHoldings: number;
}

export default function SummaryCards({
  totalInvestment,
  totalCurrentValue,
  totalProfit,
  totalHoldings,
}: SummaryCardsProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

      <Card
        title="💰 Total Investment"
        value={`₹${totalInvestment.toLocaleString("en-IN")}`}
        color="text-blue-600"
      />

      <Card
        title="📈 Current Value"
        value={`₹${totalCurrentValue.toLocaleString("en-IN")}`}
        color="text-green-600"
      />

      <Card
        title="💹 Total Return"
        value={`₹${totalProfit.toLocaleString("en-IN")}`}
        color={
          totalProfit >= 0
            ? "text-green-600"
            : "text-red-600"
        }
      />

      <Card
        title="💼 Holdings"
        value={totalHoldings.toString()}
        color="text-purple-600"
      />

    </div>
  );
}

interface CardProps {
  title: string;
  value: string;
  color: string;
}

function Card({
  title,
  value,
  color,
}: CardProps) {
  return (
    <div className="bg-white rounded-xl shadow p-6">

      <p className="text-gray-500 text-sm">
        {title}
      </p>

      <h2 className={`text-3xl font-bold mt-2 ${color}`}>
        {value}
      </h2>

    </div>
  );
}