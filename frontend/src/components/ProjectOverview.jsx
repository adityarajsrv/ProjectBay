/* eslint-disable react/prop-types */
import {
  Activity,
  Users,
  Calendar,
  AlertCircle,
} from "lucide-react";

const ProjectOverview = ({ project }) => {
  if (!project) return null;

  return (
    <main className="ml-64 pt-20 px-8 min-h-screen bg-[#0B0F1A] text-white">
      <div className="flex items-start justify-between mb-10">
        <div>
          <h2 className="text-2xl font-semibold">{project.name}</h2>
          <p className="text-sm text-white/50 mt-1 max-w-2xl">
            {project.description || "No description provided."}
          </p>
        </div>
        <span className="px-3 py-1 rounded-md text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
          Active
        </span>
      </div>
      <section className="mb-10">
        <p className="text-xs uppercase tracking-wider text-white/40 mb-3">
          Execution Health
        </p>
        <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-[#0F1525] px-5 py-3">
          <HealthPill label="Planning" color="emerald" />
          <div className="flex justify-center items-center h-0.5 w-8 bg-gray-600"></div>
          <HealthPill label="Backend" color="amber" />
          <div className="flex justify-center items-center h-0.5 w-8 bg-gray-600"></div>
          <HealthPill label="Frontend" color="rose" />
          <div className="flex justify-center items-center h-0.5 w-8 bg-gray-600"></div>
          <HealthPill label="Deployment" color="neutral" />
        </div>
      </section>
      <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-12">
        <MetricCard
          label="Execution Complete"
          value="42%"
          icon={<Activity className="h-4 w-4 text-emerald-400" />}
        />
        <MetricCard
          label="Open Tasks"
          value="12"
          icon={<Users className="h-4 w-4 text-indigo-400" />}
        />
        <MetricCard
          label="Blocked Items"
          value="2"
          danger
          icon={<AlertCircle className="h-4 w-4 text-rose-400" />}
        />
        <MetricCard
          label="Last Activity"
          value="2 hours ago"
          icon={<Calendar className="h-4 w-4 text-white/60" />}
        />
      </section>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2 space-y-6">
          <Card title="Current Focus">
            <ul className="text-sm text-white/70 space-y-2">
              <li>• Designing roadmap structure</li>
              <li>• Backend API stabilization</li>
              <li>• Identifying deployment blockers</li>
            </ul>
          </Card>
        </div>
        <div className="space-y-6">
          <Card title="Recent Activity">
            <ActivityItem text="API schema updated" time="2h ago" />
            <ActivityItem text="Task moved to In Progress" time="4h ago" />
            <ActivityItem text="Deployment blocked" time="Yesterday" danger />
          </Card>
        </div>
      </div>
    </main>
  );
};

const HealthPill = ({ label, color }) => {
  const map = {
    emerald: "text-emerald-400 bg-emerald-500/10",
    amber: "text-amber-400 bg-amber-500/10",
    rose: "text-rose-400 bg-rose-500/10",
    neutral: "text-white/40 bg-white/5",
  };

  return (
    <div
      className={`flex items-center gap-2 px-4 py-2 rounded-lg border border-white/5 text-sm ${map[color]}`}
    >
      <span className="h-2 w-2 rounded-full bg-current" />
      {label}
    </div>
  );
};

const MetricCard = ({ label, value, icon, danger }) => (
  <div
    className={`rounded-2xl border px-6 py-5 bg-[#0F1525]
      ${danger ? "border-rose-500/20" : "border-white/10"}`}
  >
    <div className="flex items-center gap-2 mb-2">
      {icon}
      <p className="text-sm text-white/60">{label}</p>
    </div>
    <p className="text-2xl font-semibold">{value}</p>
  </div>
);

const Card = ({ title, children }) => (
  <div className="rounded-2xl border border-white/10 bg-[#0F1525] p-6">
    <p className="text-sm font-semibold text-white/80 mb-3">{title}</p>
    {children}
  </div>
);

const ActivityItem = ({ text, time, danger }) => (
  <div className="flex justify-between text-sm mb-2">
    <span className={danger ? "text-rose-400" : "text-white/80"}>
      {text}
    </span>
    <span className="text-white/40">{time}</span>
  </div>
);

export default ProjectOverview;
