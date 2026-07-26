import type { Investment } from "../../types/investment";

interface InvestmentFormProps {
  investment: Investment;
  setInvestment: React.Dispatch<React.SetStateAction<Investment>>;
  onSave: () => void;
  isEditing: boolean;
}

export default function InvestmentForm({
  investment,
  setInvestment,
  onSave,
  isEditing,
}: InvestmentFormProps) {
  return (
    <div className="bg-white rounded-xl shadow p-6">

      <h2 className="text-2xl font-bold mb-6">
        ➕ {isEditing ? "Update Investment" : "Add Investment"}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        {/* Asset Class */}
        <select
          className="border rounded-lg p-3"
          value={investment.assetClass}
          onChange={(e) =>
            setInvestment({
              ...investment,
              assetClass: e.target.value as Investment["assetClass"],
            })
          }
        >
          <option>Mutual Fund</option>
          <option>Stock</option>
          <option>ETF</option>
          <option>Gold</option>
          <option>Crypto</option>
          <option>Fixed Deposit</option>
        </select>

        {/* Investment Name */}
        <input
          className="border rounded-lg p-3"
          placeholder="Investment Name"
          value={investment.name}
          onChange={(e) =>
            setInvestment({
              ...investment,
              name: e.target.value,
            })
          }
        />

        {/* Platform */}
        <input
          className="border rounded-lg p-3"
          placeholder="Platform"
          value={investment.platform}
          onChange={(e) =>
            setInvestment({
              ...investment,
              platform: e.target.value,
            })
          }
        />

        {/* Purchase Date */}
        <input
          type="date"
          className="border rounded-lg p-3"
          value={investment.purchaseDate}
          onChange={(e) =>
            setInvestment({
              ...investment,
              purchaseDate: e.target.value,
            })
          }
        />

        {/* Buy Price */}
        <input
          type="number"
          className="border rounded-lg p-3"
          placeholder="Buy Price"
          value={investment.buyPrice || ""}
          onChange={(e) =>
            setInvestment({
              ...investment,
              buyPrice: Number(e.target.value),
            })
          }
        />

        {/* Current Price */}
        <input
          type="number"
          className="border rounded-lg p-3"
          placeholder="Current Price"
          value={investment.currentPrice || ""}
          onChange={(e) =>
            setInvestment({
              ...investment,
              currentPrice: Number(e.target.value),
            })
          }
        />

        {/* Quantity */}
        <input
          type="number"
          className="border rounded-lg p-3"
          placeholder="Quantity / Units"
          value={investment.quantity || ""}
          onChange={(e) =>
            setInvestment({
              ...investment,
              quantity: Number(e.target.value),
            })
          }
        />

        {/* Invested Amount */}
        <input
          type="number"
          className="border rounded-lg p-3"
          placeholder="Invested Amount"
          value={investment.investedAmount || ""}
          onChange={(e) =>
            setInvestment({
              ...investment,
              investedAmount: Number(e.target.value),
            })
          }
        />

      </div>

      {/* Remarks */}
      <textarea
        className="border rounded-lg p-3 w-full mt-4"
        rows={4}
        placeholder="Remarks"
        value={investment.remarks}
        onChange={(e) =>
          setInvestment({
            ...investment,
            remarks: e.target.value,
          })
        }
      />

      <button
        onClick={onSave}
        className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg"
      >
        {isEditing ? "Update Investment" : "Save Investment"}
      </button>

    </div>
  );
}