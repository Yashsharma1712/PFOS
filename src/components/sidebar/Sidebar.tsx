import {
  Home,
  Wallet,
  TrendingUp,
  Landmark,
  Calculator,
  Target,
  BadgeIndianRupee,
  BarChart3,
  LineChart,
  Settings,
} from "lucide-react";
const menuItems = [
  { icon: Home, label: "Dashboard" },
  { icon: Wallet, label: "Personal Finance" },
  { icon: TrendingUp, label: "Investment Center" },
  { icon: Landmark, label: "Loan Center" },
  { icon: Calculator, label: "Calculators" },
  { icon: Target, label: "Goals" },
  { icon: BadgeIndianRupee, label: "Retirement" },
  { icon: Wallet, label: "Insurance" },
  { icon: BarChart3, label: "Reports" },
  { icon: LineChart, label: "Market Center" },
  { icon: Settings, label: "Settings" },
];
function Sidebar() {
  return (
    <aside className="w-64 bg-gray-900 text-white min-h-screen p-5">
      <h2 className="text-3xl font-bold mb-6">
  💰 PFOS
</h2>

      <hr className="border-gray-700 mb-6" />

      <nav>
  {menuItems.map((item) => {
    const Icon = item.icon;

    return (
      <p
  key={item.label}
  className="flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-gray-800 hover:text-blue-400 transition-all duration-200"
>
        <Icon size={20} />
        {item.label}
      </p>
    );
  })}
</nav>
    </aside>
  );
}

export default Sidebar;