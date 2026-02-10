/* eslint-disable react/prop-types */
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const velocityData = [
  { week: "W1", done: 3 },
  { week: "W2", done: 5 },
  { week: "W3", done: 4 },
  { week: "W4", done: 9 },
];

const blockerData = [
  { area: "Frontend", count: 2 },
  { area: "Backend", count: 4 },
  { area: "Infra", count: 1 },
];

const scopeData = [
  { week: "W1", planned: 20, added: 0 },
  { week: "W2", planned: 20, added: 3 },
  { week: "W3", planned: 20, added: 6 },
];

const Axis = {
  tick: { fill: "#94A3B8", fontSize: 11 },
  axisLine: false,
  tickLine: false,
};

const COLORS = {
  indigo: "#6366F1",
  emerald: "#22C55E",
  amber: "#F59E0B",
  slate: "#94A3B8",
  grid: "rgba(255,255,255,0.04)",
};

const InsightCard = ({ title, subtitle, children }) => (
  <div className="relative rounded-2xl border border-white/10 bg-linear-to-b from-[#11172A]/80 to-[#0F1525] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
    <div className="mb-4">
      <p className="text-xs uppercase tracking-wide text-white/40">
        {subtitle}
      </p>
      <p className="text-sm font-medium text-white/80">{title}</p>
    </div>
    <div className="h-56">{children}</div>
  </div>
);

const GlassTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-lg bg-[#0B0F1A]/80 backdrop-blur border border-white/10 px-3 py-2 text-xs">
      <p className="text-white/40 mb-1">{label}</p>
      <p className="text-white font-medium">{payload[0].value}</p>
    </div>
  );
};

const ProjectInsights = () => {
  return (
    <main className="ml-64 pt-20 px-8 min-h-screen bg-[#0B0F1A] text-white space-y-10">
      <div>
        <h2 className="text-xl font-semibold">Insights</h2>
        <p className="text-sm text-white/40 mt-1">
          Patterns, risks, and execution signals
        </p>
      </div>
      <InsightCard subtitle="Momentum" title="Execution Velocity">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={velocityData}>
            <CartesianGrid stroke={COLORS.grid} vertical={false} />
            <XAxis dataKey="week" {...Axis} />
            <YAxis {...Axis} />
            <Tooltip content={<GlassTooltip />} />
            <Line
              type="monotone"
              dataKey="done"
              stroke={COLORS.indigo}
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </InsightCard>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <InsightCard subtitle="Friction" title="Blocker Distribution">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={blockerData}>
              <CartesianGrid stroke={COLORS.grid} vertical={false} />
              <XAxis dataKey="area" {...Axis} />
              <YAxis {...Axis} />
              <Tooltip content={<GlassTooltip />} />
              <Bar dataKey="count" fill={COLORS.amber} radius={[8, 8, 4, 4]} />
            </BarChart>
          </ResponsiveContainer>
        </InsightCard>
        <InsightCard subtitle="Stability" title="Scope Drift">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={scopeData}>
              <CartesianGrid stroke={COLORS.grid} vertical={false} />
              <XAxis dataKey="week" {...Axis} />
              <YAxis {...Axis} />
              <Tooltip content={<GlassTooltip />} />
              <Area
                dataKey="planned"
                stackId="1"
                stroke={COLORS.indigo}
                fill={COLORS.indigo}
                fillOpacity={0.12}
              />
              <Area
                dataKey="added"
                stackId="1"
                stroke={COLORS.emerald}
                fill={COLORS.emerald}
                fillOpacity={0.2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </InsightCard>
      </div>
      <div className="rounded-2xl border border-white/10 bg-linear-to-b from-[#11172A]/70 to-[#0F1525] p-6">
        <p className="text-xs uppercase tracking-wide text-white/40 mb-3">
          Signals
        </p>
        <div className="space-y-2 text-sm">
          <p>• Backend tasks show repeated blockages</p>
          <p>• Scope increased ~30% since initial planning</p>
          <p className="text-emerald-400">
            • Execution velocity improved last sprint
          </p>
        </div>
      </div>
    </main>
  );
};

export default ProjectInsights;
