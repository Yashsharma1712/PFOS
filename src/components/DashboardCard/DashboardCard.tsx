type DashboardCardProps = {
  title: string;
  value: string;
};

function DashboardCard({ title, value }: DashboardCardProps) {
  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        borderRadius: "12px",
        padding: "20px",
        width: "220px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
      }}
    >
      <h3 style={{ margin: 0, color: "#6B7280" }}>{title}</h3>

      <h2 style={{ marginTop: "15px" }}>{value}</h2>
    </div>
  );
}

export default DashboardCard;