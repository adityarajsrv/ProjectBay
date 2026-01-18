import { motion } from "framer-motion";
import {
  Layers,
  MessageSquare,
  Activity,
  KanbanSquare,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    title: "Living Roadmaps",
    desc: "Roadmaps that evolve with execution phases, dependencies, and milestones stay in sync with reality.",
    icon: Layers,
    glow: "rgba(99,102,241,0.35)",
  },
  {
    title: "Contextual Collaboration",
    desc: "Every discussion lives exactly where work happens inside roadmap nodes and tasks.",
    icon: MessageSquare,
    glow: "rgba(217,70,239,0.35)",
  },
  {
    title: "Live Progress Signals",
    desc: "Understand velocity, blockers, and execution health so you can course-correct before delays become failures.",
    icon: Activity,
    glow: "rgba(52,211,153,0.35)",
  },
  {
    title: "Structured Task Control",
    desc: "Break phases into tasks, assign ownership, and track delivery without losing the big picture.",
    icon: KanbanSquare,
    glow: "rgba(251,191,36,0.35)",
  },
  {
    title: "Execution Insights",
    desc: "Spot bottlenecks, scope creep, and delivery risks before they become blockers.",
    icon: Sparkles,
    glow: "rgba(56,189,248,0.35)",
  },
  {
    title: "Security by Default",
    desc: "Role-based access, audit trails, and isolation built directly into the workflow.",
    icon: ShieldCheck,
    glow: "rgba(168,85,247,0.35)",
  },
];

const Features = () => {
  return (
    <section className="relative py-36 bg-[#0b0f1a] overflow-hidden">
      <div className="absolute -top-40 left-1/3 w-130 h-130 bg-blue-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-105 h-105 bg-purple-600/10 rounded-full blur-3xl" />
      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-28"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Everything you need to <span className="text-blue-500">Ship</span>
          </h2>
          <p className="mt-6 text-lg text-gray-400">
            A focused system for planning, collaboration, and execution
            built for teams that want momentum, not more software.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.12 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div
                  className="absolute inset-0 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition duration-500"
                  style={{ background: feature.glow }}
                />
                <div
                  className="relative rounded-3xl p-px
                  bg-linear-to-br from-white/20 via-white/5 to-transparent cursor-pointer
                  hover:bg-linear-to-br hover:from-white/30 hover:via-white/10 hover:to-transparent
                  transition-all duration-300"
                >
                  <div
                    className="relative rounded-3xl p-8
                    bg-linear-to-br from-[#0b0f1a]/90 to-[#10162b]/90
                    backdrop-blur-xl
                    shadow-[0_0_50px_-18px_rgba(0,0,0,0.9)]
                    transition-all duration-300
                    group-hover:-translate-y-1"
                  >
                    <div
                      className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition
                      bg-linear-to-r from-transparent via-white/5 to-transparent"
                    />
                    <div className="relative flex items-start gap-6">
                      <div
                        className="w-12 h-12 rounded-2xl flex items-center justify-center
                        bg-white/5 border border-white/10"
                      >
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">
                          {feature.title}
                        </h4>
                        <p className="text-sm text-gray-400 leading-relaxed max-w-md">
                          {feature.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
