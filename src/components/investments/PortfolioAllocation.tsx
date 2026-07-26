import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

interface PortfolioAllocationProps {
  chartData: {
    name: string;
    value: number;
  }[];
}

const COLORS = [
  "#2563eb",
  "#16a34a",
  "#f59e0b",
  "#dc2626",
  "#9333ea",
  "#0891b2",
  "#ea580c",
  "#64748b",
];

export default function PortfolioAllocation({
  chartData,
}: PortfolioAllocationProps) {
  const total = chartData.reduce(
    (sum, item) => sum + item.value,
    0
  );

  return (
    <div className="bg-white rounded-xl shadow p-6">

      <h2 className="text-2xl font-bold mb-6">
        📊 Portfolio Allocation
      </h2>

      {chartData.length === 0 ? (
        <div className="text-center text-gray-500 py-20">
          No investment data available.
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

          <ResponsiveContainer width="100%" height={350}>
            <PieChart>
              <Pie
                data={chartData}
                dataKey="value"
                nameKey="name"
                outerRadius={120}
                label={({ percent }) =>
                  `${(percent * 100).toFixed(1)}%`
                }
              >
                {chartData.map((_, index) => (
                  <Cell
                    key={index}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>

              <Tooltip
                formatter={(value: number) =>
                  `₹${value.toLocaleString("en-IN")}`
                }
              />

              <Legend />
            </PieChart>
          </ResponsiveContainer>

          <div className="space-y-3">

            <h3 className="text-lg font-semibold">
              Allocation Summary
            </h3>

            {chartData.map((item, index) => {

              const percent =
                total === 0
                  ? 0
                  : (item.value / total) * 100;

              return (

                <div
                  key={item.name}
                  className="flex justify-between items-center border-b pb-2"
                >

                  <div className="flex items-center gap-2">

                    <div
                      className="w-4 h-4 rounded-full"
                      style={{
                        backgroundColor:
                          COLORS[index % COLORS.length],
                      }}
                    />

                    <span>{item.name}</span>

                  </div>

                  <div className="text-right">

                    <div className="font-semibold">
                      ₹{item.value.toLocaleString("en-IN")}
                    </div>

                    <div className="text-sm text-gray-500">
                      {percent.toFixed(1)}%
                    </div>

                  </div>

                </div>

              );

            })}

          </div>

        </div>
      )}

    </div>
  );
}