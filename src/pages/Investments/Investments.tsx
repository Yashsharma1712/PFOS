import { useState } from "react";
import SummaryCards from "../../components/investments/SummaryCards";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function Investments() {
  const [investments, setInvestments] = useState<any[]>([]);
  const [investmentType, setInvestmentType] = useState("Mutual Fund");
  const [buyPrice, setBuyPrice] = useState("");
  const [units, setUnits] = useState("");
  const [purchaseDate, setPurchaseDate] = useState("");
  const [investmentName, setInvestmentName] = useState("");
  const [platform, setPlatform] = useState("");
  const [amount, setAmount] = useState("");
  const [remarks, setRemarks] = useState("");
  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState("All");
  const [currentPrice, setCurrentPrice] = useState("");
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const totalInvestment = investments.reduce(
    
  (total, item) => total + Number(item.amount),
  0
);
  const totalCurrentValue = investments.reduce(
  (total, item) =>
    total + Number(item.currentPrice || 0) * Number(item.units || 0),
  0
);

  const totalProfit = totalCurrentValue - totalInvestment;

  const portfolioSummary = Object.entries(
  investments.reduce((acc: any, item) => {
    acc[item.type] = (acc[item.type] || 0) + Number(item.amount);
    return acc;
  }, {})
).map(([type, amount]) => ({
  type,
  amount: Number(amount),
  percentage:
    totalInvestment > 0
      ? ((Number(amount) / totalInvestment) * 100).toFixed(1)
      : "0",
}));
  const chartData = portfolioSummary.map((item) => ({
  name: item.type,
  value: item.amount,
}));
  const returnPercentage =
  totalInvestment > 0
    ? (totalProfit / totalInvestment) * 100
    : 0;

  const totalHoldings = investments.length;

  const largestInvestment =
  investments.length > 0
    ? investments.reduce((prev, current) =>
        Number(prev.amount) > Number(current.amount)
          ? prev
          : current
      )
    : null;

  const smallestInvestment =
  investments.length > 0
    ? investments.reduce((prev, current) =>
        Number(prev.amount) < Number(current.amount)
          ? prev
          : current
      )
    : null;
  const bestPerformer =
  investments.length > 0
    ? investments.reduce((best, current) => {
        const bestReturn =
          ((Number(best.currentPrice || 0) - Number(best.buyPrice || 0)) /
            Number(best.buyPrice || 1)) *
          100;

  const currentReturn =
          ((Number(current.currentPrice || 0) -
            Number(current.buyPrice || 0)) /
            Number(current.buyPrice || 1)) *
          100;

        return currentReturn > bestReturn ? current : best;
      })
    : null;
  const worstPerformer =
  investments.length > 0
    ? investments.reduce((worst, current) => {
        const worstReturn =
          ((Number(worst.currentPrice || 0) - Number(worst.buyPrice || 0)) /
            Number(worst.buyPrice || 1)) *
          100;

        const currentReturn =
          ((Number(current.currentPrice || 0) -
            Number(current.buyPrice || 0)) /
            Number(current.buyPrice || 1)) *
          100;

        return currentReturn < worstReturn ? current : worst;
      })
    : null;        
const COLORS = [
  "#3B82F6",
  "#22C55E",
  "#FACC15",
  "#A855F7",
  "#EF4444",
  "#14B8A6",
];
  const deleteInvestment = (index: number) => {
  const updatedInvestments = investments.filter((_, i) => i !== index);
  setInvestments(updatedInvestments);
};
  return (
  <div className="max-w-6xl mx-auto">

    <h1 className="text-3xl font-bold mb-6">
      📈 Investment Center
    </h1>

    <SummaryCards
  totalInvestment={totalInvestment}
  totalCurrentValue={totalCurrentValue}
  totalProfit={totalProfit}
/>
 <div className="bg-white rounded-xl shadow p-6 mt-6">
  <h2 className="text-2xl font-semibold mb-5">
    📊 Portfolio Allocation
  </h2>
  <ResponsiveContainer width="100%" height={350}>
    <PieChart>
      <Pie
        data={chartData}
        cx="50%"
        cy="50%"
        outerRadius={120}
        dataKey="value"
        label
      >
        {chartData.map((entry, index) => (
          <Cell
            key={`cell-${index}`}
            fill={COLORS[index % COLORS.length]}
          />
        ))}
      </Pie>

      <Tooltip />
      <Legend />
    </PieChart>
  </ResponsiveContainer>
  <div className="mt-6 space-y-2">

  {portfolioSummary.map((item) => (

    <div
      key={item.type}
      className="flex justify-between border-b pb-2"
    >

      <span>
        {item.type}
      </span>

      <span className="font-semibold">
        ₹{item.amount.toLocaleString("en-IN")} ({item.percentage}%)
      </span>

    </div>
  ))}
</div>
</div>
<div className="bg-white rounded-xl shadow p-6 mt-6">

  <h2 className="text-2xl font-semibold mb-5">
    📈 Portfolio Statistics
  </h2>
  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

  <div>
    <p className="text-gray-500">💼 Holdings</p>
    <p className="text-2xl font-bold">{totalHoldings}</p>
  </div>

  <div>
    <p className="text-gray-500">💰 Invested</p>
    <p className="text-2xl font-bold text-blue-600">
      ₹{totalInvestment.toLocaleString("en-IN")}
    </p>
  </div>

  <div>
    <p className="text-gray-500">📈 Current Value</p>
    <p className="text-2xl font-bold text-green-600">
      ₹{totalCurrentValue.toLocaleString("en-IN")}
    </p>
  </div>

  <div>
    <p className="text-gray-500">💹 Total Return</p>
    <p
      className={`text-2xl font-bold ${
        totalProfit >= 0 ? "text-green-600" : "text-red-600"
      }`}
    >
      ₹{totalProfit.toLocaleString("en-IN")}
    </p>
    <p className="text-sm text-gray-500">
      ({returnPercentage.toFixed(2)}%)
    </p>
  </div>

  <div>
    <p className="text-gray-500">🏆 Best Performer</p>
    <p className="font-bold">
      {bestPerformer?.name || "-"}
    </p>
  </div>

  <div>
    <p className="text-gray-500">📉 Worst Performer</p>
    <p className="font-bold">
      {worstPerformer?.name || "-"}
    </p>
  </div>

  <div>
    <p className="text-gray-500">🎯 Largest Investment</p>
    <p className="font-bold">
      {largestInvestment?.name || "-"}
    </p>
    <p className="text-green-600">
      ₹{largestInvestment
        ? Number(largestInvestment.amount).toLocaleString("en-IN")
        : 0}
    </p>
  </div>
 <div>
  <p className="text-gray-500">🔹 Smallest Investment</p>
  <p className="font-bold">
    {smallestInvestment?.name || "-"}
  </p>
  <p className="text-blue-600">
    ₹{smallestInvestment
      ? Number(smallestInvestment.amount).toLocaleString("en-IN")
      : 0}
  </p>
</div>

</div>

</div>

{/* Add Investment */}
      <div className="bg-white rounded-xl shadow p-6">

        <h2 className="text-2xl font-semibold mb-5">
          ➕ Add Investment
        </h2>
       <div className="space-y-4">
  <select
    className="w-full border rounded-lg p-3"
    value={investmentType}
    onChange={(e) => setInvestmentType(e.target.value)}
  >
    <option>Mutual Fund</option>
    <option>Stock</option>
    <option>ETF</option>
    <option>Gold</option>
    <option>Crypto</option>
    <option>Fixed Deposit</option>
  </select>

  <input
    className="w-full border rounded-lg p-3"
    placeholder="Investment Name"
    value={investmentName}
    onChange={(e) => setInvestmentName(e.target.value)}
  />

  <input
    className="w-full border rounded-lg p-3"
    placeholder="Platform"
    value={platform}
    onChange={(e) => setPlatform(e.target.value)}
  />

  <input
    type="number"
    className="w-full border rounded-lg p-3"
    placeholder="Amount Invested"
    value={amount}
    onChange={(e) => setAmount(e.target.value)}
  />
  <input
  type="date"
  className="w-full border rounded-lg p-3"
  value={purchaseDate}
  onChange={(e) => setPurchaseDate(e.target.value)}
/>
<input
  type="number"
  className="w-full border rounded-lg p-3"
  placeholder={
    investmentType === "Mutual Fund"
      ? "NAV"
      : investmentType === "Fixed Deposit"
      ? "Interest Rate (%)"
      : "Buy Price"
  }
  value={buyPrice}
  onChange={(e) => setBuyPrice(e.target.value)}
/>
<input
  type="number"
  className="w-full border rounded-lg p-3"
  placeholder="Current Price / NAV"
  value={currentPrice}
  onChange={(e) => setCurrentPrice(e.target.value)}
/>
<input
  type="number"
  className="w-full border rounded-lg p-3"
  placeholder={
    investmentType === "Fixed Deposit"
      ? "Tenure (Months)"
      : "Units / Quantity"
  }
  value={units}
  onChange={(e) => setUnits(e.target.value)}
/>
<textarea
  className="w-full border rounded-lg p-3"
  placeholder="Notes / Remarks"
  value={remarks}
  onChange={(e) => setRemarks(e.target.value)}
  rows={3}
/>
<button
  className="bg-blue-600 text-white px-6 py-3 rounded-lg"
  onClick={() => {
    const newInvestment = {
      type: investmentType,
      name: investmentName,
      platform: platform,
      purchaseDate: purchaseDate,
      buyPrice: buyPrice,
      currentPrice: currentPrice,
      units: units,
      amount: amount,
      remarks: remarks,
    };

    if (editIndex === null) {
      setInvestments([...investments, newInvestment]);
    } else {
      const updated = [...investments];
      updated[editIndex] = newInvestment;
      setInvestments(updated);
      setEditIndex(null);
    }

    setInvestmentType("Mutual Fund");
    setInvestmentName("");
    setPlatform("");
    setAmount("");
    setPurchaseDate("");
    setBuyPrice("");
    setCurrentPrice("");
    setUnits("");
    setRemarks("");
  }}
>
  {editIndex === null ? "Save Investment" : "Update Investment"}
</button>
</div>
{/* Investment History */}

<div className="bg-white rounded-xl shadow p-6 mt-6">
  <div className="flex flex-wrap gap-2 mb-4">

  {[
    "All",
    "Mutual Fund",
    "Stock",
    "ETF",
    "Gold",
    "Crypto",
    "Fixed Deposit",
  ].map((type) => (

    <button
      key={type}
      onClick={() => setFilterType(type)}
      className={`px-4 py-2 rounded-lg border transition
        ${
          filterType === type
            ? "bg-blue-600 text-white"
            : "bg-white hover:bg-gray-100"
        }`}
    >
      {type}
    </button>

  ))}

</div>
  <input
    type="text"
    placeholder="🔍 Search Investment..."
    className="w-full border rounded-lg p-3 mb-5"
    value={search}
    onChange={(e) => setSearch(e.target.value)}
  />

  <h2 className="text-2xl font-semibold mb-5">
    📋 Investment History
  </h2>
   
  <table className="w-full">
    <thead>
      <tr className="border-b">
  <th className="text-left p-2">Type</th>
  <th className="text-left p-2">Name</th>
  <th className="text-left p-2">Platform</th>
  <th className="text-left p-2">Buy</th>
  <th className="text-left p-2">Current</th>
  <th className="text-left p-2">Units</th>
  <th className="text-right p-2">Amount</th>
  <th className="text-right p-2">P/L</th>
  <th className="text-left p-2">Remarks</th>
  <th className="text-center p-2">Edit</th>
  <th className="text-center p-2">Delete</th>
</tr>
    </thead>
   <tbody>
  {investments
  .filter((item) => {
  const query = search.toLowerCase();

  const matchesSearch =
    item.type.toLowerCase().includes(query) ||
    item.name.toLowerCase().includes(query) ||
    item.platform.toLowerCase().includes(query) ||
    (item.remarks ?? "").toLowerCase().includes(query);

  const matchesType =
    filterType === "All" || item.type === filterType;

  return matchesSearch && matchesType;
})
    .map((item, index) => {
      const profit =
        (Number(item.currentPrice || 0) - Number(item.buyPrice || 0)) *
        Number(item.units || 0);

      return (
        <tr key={index} className="border-b">
          <td className="p-2">{item.type}</td>

          <td className="p-2">{item.name}</td>

          <td className="p-2">{item.platform}</td>

          <td className="p-2">₹{item.buyPrice}</td>

          <td className="p-2">₹{item.currentPrice}</td>

          <td className="p-2">{item.units}</td>

          <td className="text-right p-2">
            ₹{Number(item.amount).toLocaleString("en-IN")}
          </td>

          <td
            className={`text-right p-2 font-bold ${
              profit >= 0 ? "text-green-600" : "text-red-600"
            }`}
          >
            ₹{profit.toLocaleString("en-IN")}
          </td>

          <td className="p-2">
            {item.remarks}
          </td>

          <td className="text-center p-2">
            <button
              className="bg-yellow-500 text-white px-3 py-1 rounded"
              onClick={() => {
                setEditIndex(index);
                setInvestmentType(item.type);
                setInvestmentName(item.name);
                setPlatform(item.platform);
                setAmount(item.amount);
                setPurchaseDate(item.purchaseDate);
                setBuyPrice(item.buyPrice);
                setCurrentPrice(item.currentPrice);
                setUnits(item.units);
              }}
            >
              ✏️
            </button>
          </td>

          <td className="text-center p-2">
            <button
              className="bg-red-600 text-white px-3 py-1 rounded"
              onClick={() => deleteInvestment(index)}
            >
              🗑️
            </button>
          </td>
        </tr>
      );
    })}
</tbody>
  </table>
</div>

      </div>

    </div>
    
  );
}

export default Investments;

