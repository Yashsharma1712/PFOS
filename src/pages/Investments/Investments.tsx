import { useState } from "react";

function Investments() {
  const [investments, setInvestments] = useState<any[]>([]);
  const [investmentType, setInvestmentType] = useState("Mutual Fund");
  const [investmentName, setInvestmentName] = useState("");
  const [platform, setPlatform] = useState("");
  const [amount, setAmount] = useState("");
  const totalInvestment = investments.reduce(
  (total, item) => total + Number(item.amount),
  0
);
  return (
    <div className="max-w-6xl mx-auto">

      <h1 className="text-3xl font-bold mb-6">
        📈 Investment Center
      </h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">

        <div className="bg-white rounded-xl shadow p-5">
          <p className="text-gray-500">Total Investment</p>
          <h2 className="text-3xl font-bold mt-2">
  ₹{totalInvestment.toLocaleString("en-IN")}
</h2>
        </div>

        <div className="bg-white rounded-xl shadow p-5">
          <p className="text-gray-500">₹{totalInvestment.toLocaleString("en-IN")}</p>
          <h2 className="text-3xl font-bold mt-2">₹0</h2>
        </div>

        <div className="bg-white rounded-xl shadow p-5">
          <p className="text-gray-500">₹0</p>
          <h2 className="text-3xl font-bold text-green-600 mt-2">₹0</h2>
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

  <button
  className="bg-blue-600 text-white px-6 py-3 rounded-lg"
  onClick={() => {
    const newInvestment = {
      type: investmentType,
      name: investmentName,
      platform: platform,
      amount: amount,
    };

    setInvestments([...investments, newInvestment]);

    setInvestmentName("");
    setPlatform("");
    setAmount("");
  }}
>
  Save Investment
</button>

</div>
<div className="bg-white rounded-xl shadow p-6 mt-6">
  <h2 className="text-2xl font-semibold mb-5">
    📋 Investment History
  </h2>

  <table className="w-full">
    <thead>
      <tr className="border-b">
        <th className="text-left p-2">Type</th>
        <th className="text-left p-2">Name</th>
        <th className="text-left p-2">Platform</th>
        <th className="text-right p-2">Amount</th>
      </tr>
    </thead>

    <tbody>
      {investments.map((item, index) => (
        <tr key={index} className="border-b">
          <td className="p-2">{item.type}</td>
          <td className="p-2">{item.name}</td>
          <td className="p-2">{item.platform}</td>
          <td className="text-right p-2">
            ₹{Number(item.amount).toLocaleString("en-IN")}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

      </div>

    </div>
    
  );
}

export default Investments;