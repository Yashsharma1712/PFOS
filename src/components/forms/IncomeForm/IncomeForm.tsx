import { useState } from "react";

function IncomeForm() {
  const [salary, setSalary] = useState("");

  return (
    <div className="bg-white p-6 rounded-xl shadow mt-6 max-w-md">
      <h2 className="text-xl font-bold mb-4">
        Monthly Salary
      </h2>

      <input
        type="number"
        placeholder="Enter salary"
        value={salary}
        onChange={(e) => setSalary(e.target.value)}
        className="border p-3 rounded w-full"
      />

      <button
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
      >
        Save
      </button>

      <p className="mt-4">
        Salary: ₹{salary || 0}
      </p>
    </div>
  );
}

export default IncomeForm;