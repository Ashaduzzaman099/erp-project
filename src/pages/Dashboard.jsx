import { FaBoxOpen, FaFileInvoice, FaUserTie, FaUsers } from "react-icons/fa";
// import DashboardGraphs from "../components/DashboardGraphs";

const Dashboard = () => {
  const stats = [
    {
      title: "Total Officers",
      value: 12,
      icon: <FaUserTie className="w-6 h-6 text-green-600" />,
      date: "Updated: Jan 8, 2026",
    },
    {
      title: "Total Customers",
      value: 34,
      icon: <FaUsers className="w-6 h-6 text-blue-600" />,
      date: "Updated: Jan 8, 2026",
    },
    {
      title: "Total Products",
      value: 56,
      icon: <FaBoxOpen className="w-6 h-6 text-yellow-600" />,
      date: "Updated: Jan 8, 2026",
    },
    {
      title: "Total Invoices",
      value: 23,
      icon: <FaFileInvoice className="w-6 h-6 text-red-600" />,
      date: "Updated: Jan 8, 2026",
    },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {stats.map((item) => (
          <div
            key={item.title}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col gap-3"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-700">
                {item.title}
              </h3>
              {item.icon}
            </div>
            <div className="text-3xl font-bold text-gray-900">{item.value}</div>
            <div className="text-sm text-gray-400">{item.date}</div>
          </div>
        ))}
      </div>
      {/* Interactive Graphs */}
    </div>
  );
};

export default Dashboard;
