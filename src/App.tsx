import Sidebar from "./components/Sidebar/Sidebar";
import Topbar from "./components/Topbar/Topbar";
import DashboardCard from "./components/DashboardCard/DashboardCard";
function App() {
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <Sidebar />

      <main
        style={{
          flex: 1,
          padding: "30px",
          backgroundColor: "#F3F4F6",
          minHeight: "100vh",
        }}
      >
        <Topbar />

  <div className="flex flex-wrap gap-5 mt-5">
  <DashboardCard
    title="Net Worth"
    value="₹0"
  />

  <DashboardCard
    title="Assets"
    value="₹0"
  />

  <DashboardCard
    title="Liabilities"
    value="₹0"
  />

  <DashboardCard
    title="Monthly Income"
    value="₹0"
  />

  <DashboardCard
    title="Monthly Expenses"
    value="₹0"
  />
</div>
      </main>
    </div>
  );
}

export default App;