function Sidebar() {
  return (
    <aside
      style={{
        width: "260px",
        backgroundColor: "#111827",
        color: "white",
        height: "100vh",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      <h2>💰 PFOS</h2>

      <hr />

      <nav>
        <p>🏠 Dashboard</p>
        <p>💵 Personal Finance</p>
        <p>📈 Investment Center</p>
        <p>🏦 Loan Center</p>
        <p>🧮 Calculators</p>
        <p>🎯 Goals</p>
        <p>👴 Retirement</p>
        <p>📊 Reports</p>
        <p>📈 Market Center</p>
        <p>⚙️ Settings</p>
      </nav>
    </aside>
  );
}

export default Sidebar;