import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import type { Investment } from "../../types/investment";
import { ASSET_COLORS } from "../../constants/assetColors";

interface Props {
  investments: Investment[];
}

export default function AssetAllocationChart({
  investments,
}: Props) {
  const chartData = Object.values(
  investments.reduce((acc, item) => {
    if (!acc[item.assetClass]) {
      acc[item.assetClass] = {
        name: item.assetClass,
        value: 0,
      };
    }

    acc[item.assetClass].value +=
      item.currentPrice * item.quantity;

    return acc;
  }, {} as Record<string, { name: string; value: number }>)
);
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="text-xl font-semibold mb-4">
        Asset Allocation
      </h2>
      <ResponsiveContainer width="100%" height={320}>
        <PieChart>
          <Pie
            data={chartData}
            dataKey="value"
            nameKey="name"
            outerRadius={110}
            label
          >
            {chartData.map((entry, index) => (
  <Cell
  key={index}
  fill={ASSET_COLORS[entry.name] ?? "#94A3B8"}
/>
))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}