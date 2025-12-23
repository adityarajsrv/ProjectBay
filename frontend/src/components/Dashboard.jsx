/* eslint-disable react/prop-types */
const StatCard = ({ title, value, accent }) => {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 p-5">
      <div
        className={`absolute inset-0 opacity-20 blur-2xl ${accent}`}
      />
      <p className="text-sm text-white/60">{title}</p>
      <h3 className="mt-2 text-3xl font-semibold">{value}</h3>
    </div>
  );
};
    
const Dashboard = () => {
  return (
    <main className="ml-64 pt-20 px-8 min-h-screen bg-[#0b0f1a] text-white">
      <h2 className="text-2xl font-semibold mb-6">Dashboard</h2>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard title="Active Projects" value="3" accent="bg-blue-500" />
        <StatCard title="Velocity" value="87%" accent="bg-purple-500" />
        <StatCard title="Blockers" value="2" accent="bg-red-500" />
      </section>
      <section className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
          <h3 className="text-lg font-medium mb-4">Execution Health</h3>
          <div className="h-40 rounded-xl bg-linear-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center text-white/60">
            Real-time insights visualization
          </div>
        </div>
        <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
          <h3 className="text-lg font-medium mb-4">Recent Activity</h3>
          <ul className="space-y-3 text-sm text-white/70">
            <li>Roadmap generated for Project Atlas</li>
            <li>New blocker added to Sprint 3</li>
            <li>Velocity improved by 12%</li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default Dashboard;
