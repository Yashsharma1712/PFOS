import { useState } from "react";
import { financeData } from "../../store/financeStore";

function Finance() {
  const [salary, setSalary] = useState("");
  const [bonus, setBonus] = useState("");
  const [otherIncome, setOtherIncome] = useState("");
  const [rent, setRent] = useState("");
const [food, setFood] = useState("");
const [fuel, setFuel] = useState("");
const [electricity, setElectricity] = useState("");
const [internet, setInternet] = useState("");

  function handleSave() {
  financeData.monthlyIncome =
    Number(salary) +
    Number(bonus) +
    Number(otherIncome);

  financeData.monthlyExpenses =
    Number(rent) +
    Number(food) +
    Number(fuel) +
    Number(electricity) +
    Number(internet);

  alert("Income & Expenses Saved Successfully!");
}
  }

  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-bold mb-6">
        💵 Personal Finance
      </h1>

      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-xl font-semibold mb-5">
          Income
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

          <button
            onClick={handleSave}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg"
          >
            Save Income
          </button>
        </div>
      </div>
    </div>
  );
}

export default Finance;