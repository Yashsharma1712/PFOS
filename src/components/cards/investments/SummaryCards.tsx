import SummaryCard from "../cards/SummaryCard";

interface Props {
  totalInvestment: number;
  totalCurrentValue: number;
  totalProfit: number;
}

export default function SummaryCards({
  totalInvestment,
  totalCurrentValue,
  totalProfit,
}: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
      <SummaryCard
        title="💰 Total Investment"
        value={`₹${totalInvestment.toLocaleString("en-IN")}`}
      />

      <SummaryCard
        title="📈 Current Value"
        value={`₹${totalCurrentValue.toLocaleString("en-IN")}`}
      />

      <SummaryCard
        title="💹 Profit / Loss"
        value={`₹${totalProfit.toLocaleString("en-IN")}`}
        color={
          totalProfit >= 0
            ? "text-green-600"
            : "text-red-600"
        }
      />
    </div>
  );
}