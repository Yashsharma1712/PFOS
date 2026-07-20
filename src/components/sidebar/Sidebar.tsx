import { NavLink } from "react-router-dom";
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
  { icon: Home, label: "Dashboard", path: "/" },
  { icon: Wallet, label: "Personal Finance", path: "/finance" },
  { icon: TrendingUp, label: "Investment Center", path: "/investments" },
  { icon: Landmark, label: "Loan Center", path: "/loans" },
  { icon: Calculator, label: "Calculators", path: "/calculators" },
  { icon: Target, label: "Goals", path: "/goals" },
  { icon: BadgeIndianRupee, label: "Retirement", path: "/retirement" },
  { icon: Wallet, label: "Insurance", path: "/insurance" },
  { icon: BarChart3, label: "Reports", path: "/reports" },
  { icon: LineChart, label: "Market Center", path: "/market" },
  { icon: Settings, label: "Settings", path: "/settings" },
];
function Sidebar() {
  return (
    <aside className="w-64 bg-gray-900 text-white min-h-screen p-5">
      <h2 className="text-3xl font-bold mb-6">
  <h2 className="text-3xl font-bold mb-6 text-center">
  PFOS
</h2>
</h2>

      <hr className="border-gray-700 mb-6" />

      <nav className="space-y-1">
  {menuItems.map((item) => {
    const Icon = item.icon;

    return (
      <NavLink
  key={item.label}
  to={item.path}
  className={({ isActive }) =>
    `flex items-center gap-3 p-3 rounded-lg transition-all duration-200 ${
      isActive
        ? "bg-blue-600 text-white"
        : "hover:bg-gray-800 hover:text-blue-400"
    }`
  }
>
  <Icon size={20} />
  {item.label}
</NavLink>
    );
  })}
</nav>
    </aside>
  );
}

export default Sidebar;