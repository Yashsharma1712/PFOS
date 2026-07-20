function Topbar() {
  const today = new Date().toLocaleDateString();

  return (
    <header
      style={{
        backgroundColor: "#ffffff",
        padding: "20px",
        borderRadius: "12px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "25px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
      }}
    >
      <div>
        <h2 style={{ margin: 0 }}>Dashboard</h2>
        <p style={{ margin: "5px 0 0 0", color: "gray" }}>
          Welcome to PFOS
        </p>
      </div>

      <div style={{ textAlign: "right" }}>
        <strong>{today}</strong>
      </div>
    </header>
  );
}

export default Topbar;