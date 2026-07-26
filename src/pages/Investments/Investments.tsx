import { useEffect, useMemo, useState } from "react";
import type { Investment } from "../../types/investment";
import SummaryCards from "../../components/investments/SummaryCards";
import PortfolioAllocation from "../../components/investments/PortfolioAllocation";
import PortfolioStatistics from "../../components/investments/PortfolioStatistics";
import InvestmentForm from "../../components/investments/InvestmentForm";
import InvestmentHistory from "../../components/investments/InvestmentHistory";
import { ASSET_COLORS } from "../../constants/assetColors";

export default function Investments() {

  const emptyInvestment: Investment = {
    id: "",
    assetClass: "Mutual Fund",
    name: "",
    platform: "",
    purchaseDate: "",
    buyPrice: 0,
    currentPrice: 0,
    quantity: 0,
    investedAmount: 0,
    remarks: "",
  };
  const [investments, setInvestments] = useState<Investment[]>(() => {
  const saved = localStorage.getItem("pfos-investments");

  return saved ? JSON.parse(saved) : [];
});
useEffect(() => {
  localStorage.setItem(
    "pfos-investments",
    JSON.stringify(investments)
  );
}, [investments]);

  const [investment, setInvestment] = useState<Investment>(emptyInvestment);

  const [search, setSearch] = useState("");

  const [filterType, setFilterType] = useState("All");

  const [editingId, setEditingId] = useState<string | null>(null);

  // -----------------------------
  // Portfolio Calculations
  // -----------------------------

  const totalInvestment = investments.reduce(
    (sum, item) => sum + item.investedAmount,
    0
  );

  const totalCurrentValue = investments.reduce(
    (sum, item) => sum + item.currentPrice * item.quantity,
    0
  );

  const totalProfit = totalCurrentValue - totalInvestment;

  const returnPercentage =
    totalInvestment === 0
      ? 0
      : (totalProfit / totalInvestment) * 100;

  const chartData = [
    ...Object.entries(
      investments.reduce((acc, item) => {
        acc[item.assetClass] =
          (acc[item.assetClass] || 0) + item.investedAmount;
        return acc;
      }, {} as Record<string, number>)
    ),
  ].map(([name, value]) => ({
    name,
    value,
  }));

  const totalHoldings = investments.length;
  const averageInvestment =
  totalHoldings === 0
    ? 0
    : totalInvestment / totalHoldings;

  const bestPerformer =
    investments.length > 0
      ? investments.reduce((a, b) =>
          (a.currentPrice - a.buyPrice) * a.quantity >
          (b.currentPrice - b.buyPrice) * b.quantity
            ? a
            : b
        ).name
      : "";

  const worstPerformer =
    investments.length > 0
      ? investments.reduce((a, b) =>
          (a.currentPrice - a.buyPrice) * a.quantity <
          (b.currentPrice - b.buyPrice) * b.quantity
            ? a
            : b
        ).name
      : "";

  const largestInvestment =
    investments.length > 0
      ? investments.reduce((a, b) =>
          a.investedAmount > b.investedAmount ? a : b
        ).name
      : "";

  const smallestInvestment =
    investments.length > 0
      ? investments.reduce((a, b) =>
          a.investedAmount < b.investedAmount ? a : b
        ).name
      : "";
    // -----------------------------
  // Save / Update Investment
  // -----------------------------

  const handleSave = () => {
    if (editingId) {
      setInvestments((prev) =>
        prev.map((item) =>
          item.id === editingId ? investment : item
        )
      );
    } else {
      setInvestments((prev) => [
        ...prev,
        {
          ...investment,
          id: crypto.randomUUID(),
        },
      ]);
    }

    resetForm();
  };

  // -----------------------------
  // Edit Investment
  // -----------------------------

  const handleEdit = (item: Investment) => {
    setInvestment(item);
    setEditingId(item.id);
  };

  // -----------------------------
  // Delete Investment
  // -----------------------------

  const handleDelete = (id: string) => {
    setInvestments((prev) =>
      prev.filter((item) => item.id !== id)
    );
  };

  // -----------------------------
  // Reset Form
  // -----------------------------

  const resetForm = () => {
    setInvestment({
      id: "",
      assetClass: "Mutual Fund",
      name: "",
      platform: "",
      purchaseDate: "",
      buyPrice: 0,
      currentPrice: 0,
      quantity: 0,
      investedAmount: 0,
      remarks: "",
    });

    setEditingId(null);
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6">

      <h1 className="text-3xl font-bold">
        📈 Investment Center
      </h1>

      <SummaryCards
  totalInvestment={totalInvestment}
  totalCurrentValue={totalCurrentValue}
  totalProfit={totalProfit}
  totalHoldings={totalHoldings}
/>

      <PortfolioAllocation
        chartData={chartData}
      />

      <PortfolioStatistics
  totalHoldings={totalHoldings}
  totalInvestment={totalInvestment}
  totalCurrentValue={totalCurrentValue}
  totalProfit={totalProfit}
  returnPercentage={returnPercentage}
  bestPerformer={bestPerformer}
  worstPerformer={worstPerformer}
  largestInvestment={largestInvestment}
  smallestInvestment={smallestInvestment}
  averageInvestment={averageInvestment}
/>

      <InvestmentForm
        investment={investment}
        setInvestment={setInvestment}
        onSave={handleSave}
        isEditing={editingId !== null}
      />

            <InvestmentHistory
        investments={investments}
        search={search}
        setSearch={setSearch}
        filterType={filterType}
        setFilterType={setFilterType}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

    </div>
  );
}