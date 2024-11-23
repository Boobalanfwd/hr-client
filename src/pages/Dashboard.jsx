const Dashboard = () => {
  const stats = [
    { title: "Total Employees", value: 50, color: "indigo" },
    { title: "Active Employees", value: 40, color: "green" },
    { title: "Total Salary", value: "$200,000", color: "orange" },
  ];

  return (
    <div className="p-6 space-y-8">
      <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
      <div className="grid sm:grid-cols-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`relative flex flex-col  p-6 bg-white rounded-lg shadow-lg border-t-4 border-${stat.color}-500`}
          >
            <h2 className="text-lg font-semibold text-gray-600">
              {stat.title}
            </h2>
            <p className="mt-2 text-3xl font-bold text-gray-900">
              {stat.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
