import Sidebar from "../components/Sidebar";
import Dashboard from "../components/Dashboard";
import UserNavbar from "../components/UserNavbar";

const DashboardPage = () => {
  return (
    <div className="min-h-screen bg-[#0b0f1a] text-white">
      <UserNavbar />
      <Sidebar />
      <Dashboard />
    </div>
  );
};

export default DashboardPage;
