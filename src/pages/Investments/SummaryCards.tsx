import SummaryCard from "../cards/SummaryCard";

type Props = {
  totalInvestment: number;
};

function SummaryCards({ totalInvestment }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
      <SummaryCard
        title="Total Investment"
        value={`₹${totalInvestment.toLocaleString("en-IN")}`}
      />

      <SummaryCard
        title="Current Value"
        value={`₹${totalInvestment.toLocaleString("en-IN")}`}
      />

      <SummaryCard
        title="Profit / Loss"
        value="₹0"
        color="text-green-600"
      />
    </div>
  );
}

export default SummaryCards;