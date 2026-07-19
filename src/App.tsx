import "./App.css";

function App() {
  return (
    <div className="app">
      <aside className="sidebar">
        <h2>PFOS</h2>

        <nav>
          <ul>
            <li>🏠 Dashboard</li>
            <li>💰 Personal Finance</li>
            <li>📈 Investment Center</li>
            <li>🏦 Loan Center</li>
            <li>🧮 Calculators</li>
            <li>🎯 Goal Planning</li>
            <li>👴 Retirement</li>
            <li>📊 Reports</li>
            <li>📈 Market Center</li>
            <li>⚙ Settings</li>
          </ul>
        </nav>
      </aside>

      <main className="content">
        <header className="topbar">
          <h1>Personal Financial Operating System</h1>
        </header>

        <section className="dashboard">
          <h2>Dashboard</h2>
          <p>Welcome to PFOS 🚀</p>
        </section>
      </main>
    </div>
  );
}

export default App;