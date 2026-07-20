type DashboardCardProps = {
  title: string;
  value: string;
};

function DashboardCard({ title, value }: DashboardCardProps) {
  return (
    <div className="bg-blue-600 text-white rounded-xl p-6 w-56 shadow-lg">
      <h3 className="text-sm opacity-80">{title}</h3>

      <h2 className="text-3xl font-bold mt-3">{value}</h2>
    </div>
  );
}

export default DashboardCard;