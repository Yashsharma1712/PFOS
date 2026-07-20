import DashboardCard from "../../components/DashboardCard/DashboardCard";

function Dashboard() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-6">
        Dashboard
      </h1>

      <div className="flex flex-wrap gap-5">
        <DashboardCard title="Net Worth" value="₹0" />
        <DashboardCard title="Assets" value="₹0" />
        <DashboardCard title="Liabilities" value="₹0" />
        <DashboardCard title="Monthly Income" value="₹0" />
        <DashboardCard title="Monthly Expenses" value="₹0" />
      </div>
    </>
  );
}

export default Dashboard;