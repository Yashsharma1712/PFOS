import { useEffect, useState } from "react";
import { financeData } from "../../store/financeStore";

function Finance() {
  // Income
  const [salary, setSalary] = useState("");
  const [bonus, setBonus] = useState("");
  const [otherIncome, setOtherIncome] = useState("");

  // Expenses
  const [rent, setRent] = useState("");
  const [food, setFood] = useState("");
  const [fuel, setFuel] = useState("");
  const [electricity, setElectricity] = useState("");
  const [internet, setInternet] = useState("");

  // Bank
  const [bankBalance, setBankBalance] = useState("");
  const [cashInHand, setCashInHand] = useState("");

  // Live Calculations
  const totalIncome =
    Number(salary) +
    Number(bonus) +
    Number(otherIncome);

  const totalExpenses =
    Number(rent) +
    Number(food) +
    Number(fuel) +
    Number(electricity) +
    Number(internet);

  const savings = totalIncome - totalExpenses;
  useEffect(() => {
  const saved = localStorage.getItem("pfos-finance");

  if (!saved) return;

  const data = JSON.parse(saved);

  setSalary(data.salary || "");
  setBonus(data.bonus || "");
  setOtherIncome(data.otherIncome || "");

  setRent(data.rent || "");
  setFood(data.food || "");
  setFuel(data.fuel || "");
  setElectricity(data.electricity || "");
  setInternet(data.internet || "");

  setBankBalance(data.bankBalance || "");
  setCashInHand(data.cashInHand || "");
}, []);

  function handleSave() {
    localStorage.setItem(
  "pfos-finance",
  JSON.stringify({
    salary,
    bonus,
    otherIncome,

    rent,
    food,
    fuel,
    electricity,
    internet,

    bankBalance,
    cashInHand,
  })
);

alert("Data Saved Successfully!");

    alert("Data Saved Successfully!");
  }

  return (
    <div className="max-w-4xl mx-auto p-6">

  <h1 className="text-3xl font-bold mb-6">
    💰 Personal Finance
  </h1>

  {/* Income Card */}
  <div className="bg-white rounded-xl shadow p-6 mb-6">
    <h2 className="text-2xl font-semibold mb-4">
      💵 Income
    </h2>

    <div className="space-y-4">

      <input
        type="number"
        placeholder="Monthly Salary"
        className="w-full border rounded-lg p-3"
        value={salary}
        onChange={(e) => setSalary(e.target.value)}
      />

      <input
        type="number"
        placeholder="Bonus"
        className="w-full border rounded-lg p-3"
        value={bonus}
        onChange={(e) => setBonus(e.target.value)}
      />

      <input
        type="number"
        placeholder="Other Income"
        className="w-full border rounded-lg p-3"
        value={otherIncome}
        onChange={(e) => setOtherIncome(e.target.value)}
      />

    </div>
  </div>

  {/* Expense Card */}
  <div className="bg-white rounded-xl shadow p-6 mb-6">

    <h2 className="text-2xl font-semibold mb-4">
      💸 Monthly Expenses
    </h2>

    <div className="space-y-4">

      <input
        type="number"
        placeholder="House Rent"
        className="w-full border rounded-lg p-3"
        value={rent}
        onChange={(e) => setRent(e.target.value)}
      />

      <input
        type="number"
        placeholder="Food"
        className="w-full border rounded-lg p-3"
        value={food}
        onChange={(e) => setFood(e.target.value)}
      />

      <input
        type="number"
        placeholder="Fuel"
        className="w-full border rounded-lg p-3"
        value={fuel}
        onChange={(e) => setFuel(e.target.value)}
      />

      <input
        type="number"
        placeholder="Electricity"
        className="w-full border rounded-lg p-3"
        value={electricity}
        onChange={(e) => setElectricity(e.target.value)}
      />

      <input
        type="number"
        placeholder="Internet"
        className="w-full border rounded-lg p-3"
        value={internet}
        onChange={(e) => setInternet(e.target.value)}
      />

    </div>

  </div>
    {/* Bank & Cash Card */}
  <div className="bg-white rounded-xl shadow p-6 mb-6">

    <h2 className="text-2xl font-semibold mb-4">
      🏦 Bank & Cash
    </h2>

    <div className="space-y-4">

      <input
        type="number"
        placeholder="Bank Balance"
        className="w-full border rounded-lg p-3"
        value={bankBalance}
        onChange={(e) => setBankBalance(e.target.value)}
      />

      <input
        type="number"
        placeholder="Cash in Hand"
        className="w-full border rounded-lg p-3"
        value={cashInHand}
        onChange={(e) => setCashInHand(e.target.value)}
      />

    </div>

  </div>

  {/* Monthly Summary */}
  <div className="bg-green-50 rounded-xl shadow p-6 mb-6">

    <h2 className="text-2xl font-semibold mb-4">
      📊 Monthly Summary
    </h2>

    <div className="space-y-2">
      <p><strong>Total Income:</strong> ₹{totalIncome.toLocaleString("en-IN")}</p>
      <p><strong>Total Expenses:</strong> ₹{totalExpenses.toLocaleString("en-IN")}</p>
      <p className="text-green-700 font-bold text-lg">
        Savings: ₹{savings.toLocaleString("en-IN")}
      </p>
    </div>

  </div>

  <button
    onClick={handleSave}
    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold"
  >
    💾 Save Data
  </button>

</div>
  );
}

export default Finance;