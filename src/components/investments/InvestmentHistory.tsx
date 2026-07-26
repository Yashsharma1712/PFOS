import type { Investment } from "../../types/investment";

interface InvestmentHistoryProps {
  investments: Investment[];
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  filterType: string;
  setFilterType: React.Dispatch<React.SetStateAction<string>>;
  onEdit: (investment: Investment) => void;
  onDelete: (id: string) => void;
}

export default function InvestmentHistory({
  investments,
  search,
  setSearch,
  filterType,
  setFilterType,
  onEdit,
  onDelete,
}: InvestmentHistoryProps) {

  const filteredInvestments = investments.filter((item) => {

    const matchesSearch =
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.platform.toLowerCase().includes(search.toLowerCase());

    const matchesFilter =
      filterType === "All" ||
      item.assetClass === filterType;

    return matchesSearch && matchesFilter;

  });

  return (
    <div className="bg-white rounded-xl shadow p-6">

      <h2 className="text-2xl font-bold mb-6">
        📋 Investment History
      </h2>

      <div className="flex gap-4 mb-6">

        <input
          className="border rounded-lg p-3 flex-1"
          placeholder="🔍 Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="border rounded-lg p-3"
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
        >
          <option>All</option>
          <option>Mutual Fund</option>
          <option>Stock</option>
          <option>ETF</option>
          <option>Gold</option>
          <option>Crypto</option>
          <option>Fixed Deposit</option>
        </select>

      </div>

      <div className="overflow-x-auto">

        <table className="w-full border">

          <thead className="bg-gray-100">

            <tr>

              <th className="p-3">Type</th>

              <th className="p-3">Name</th>

              <th className="p-3">Platform</th>

              <th className="p-3">Investment</th>

              <th className="p-3">Current Value</th>

              <th className="p-3">Return</th>

              <th className="p-3">Actions</th>

            </tr>

          </thead>

          <tbody>

            {filteredInvestments.length === 0 ? (

              <tr>

                <td
                  colSpan={7}
                  className="text-center p-6 text-gray-500"
                >
                  No Investments Found
                </td>

              </tr>

            ) : (

              filteredInvestments.map((item) => {

                const currentValue =
                  item.currentPrice * item.quantity;

                const profit =
                  currentValue - item.investedAmount;

                return (

                  <tr
                    key={item.id}
                    className="border-t"
                  >

                    <td className="p-3">
                      {item.assetClass}
                    </td>

                    <td className="p-3">
                      {item.name}
                    </td>

                    <td className="p-3">
                      {item.platform}
                    </td>

                    <td className="p-3">
                      ₹{item.investedAmount.toLocaleString("en-IN")}
                    </td>

                    <td className="p-3">
                      ₹{currentValue.toLocaleString("en-IN")}
                    </td>

                    <td
                      className={`p-3 font-semibold ${
                        profit >= 0
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      ₹{profit.toLocaleString("en-IN")}
                    </td>

                    <td className="p-3">

                      <button
                        onClick={() => onEdit(item)}
                        className="text-blue-600 mr-3"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() => onDelete(item.id)}
                        className="text-red-600"
                      >
                        Delete
                      </button>

                    </td>

                  </tr>

                );

              })

            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}