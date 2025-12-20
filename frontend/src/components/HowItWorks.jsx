import { motion } from "framer-motion";
import {
  Lightbulb,
  GitBranch,
  Sliders,
  Users,
  BarChart3,
} from "lucide-react";

const steps = [
  {
    title: "Describe the Idea",
    desc: "Add a project title, description, and constraints. No rigid setup.",
    color: "from-emerald-400 to-teal-400",
    icon: Lightbulb,
  },
  {
    title: "Auto Roadmap",
    desc: "The system generates phases, dependencies, and checkpoints.",
    color: "from-indigo-400 to-sky-400",
    icon: GitBranch,
  },
  {
    title: "Customize & Plan",
    desc: "Drag nodes, add tasks, deadlines, and resources.",
    color: "from-fuchsia-400 to-pink-400",
    icon: Sliders,
  },
  {
    title: "Execute Together",
    desc: "Track progress, discuss inside nodes, move tasks live.",
    color: "from-amber-400 to-orange-400",
    icon: Users,
  },
  {
    title: "Analyze & Ship",
    desc: "See bottlenecks, velocity, and completion insights.",
    color: "from-cyan-400 to-blue-400",
    icon: BarChart3,
  },
];

const HowItWorks = () => {
  return (
    <section className="relative py-32 overflow-hidden bg-[#0b0f1a]">
      <div className="absolute -top-40 left-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-fuchsia-600/10 rounded-full blur-3xl" />

      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            How it <span className="text-blue-500">actually</span> works ?
          </h2>
          <p className="mt-6 text-lg text-gray-400">
            A structured flow that turns raw ideas into executed projects
            without context switching.
          </p>
        </motion.div>
        <div className="relative">
          <div className="absolute top-[32px] left-0 right-0 h-[2px] bg-linear-to-r from-transparent via-blue-500/30 to-transparent" />
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 relative z-10">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.15 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  <div
                    className={`mx-auto w-16 h-16 rounded-full bg-linear-to-br ${step.color}
                    shadow-[0_0_30px_-8px_rgba(99,102,241,0.5)]
                    flex items-center justify-center`}
                  >
                    <Icon className="w-8 h-8 text-black" />
                  </div>

                  <div
                    className="relative mt-10 p-6 pt-10 rounded-2xl
                    bg-linear-to-br from-[#0b0f1a]/80 to-[#10162b]/80
                    backdrop-blur-xl border border-white/10
                    shadow-[0_0_40px_-14px_rgba(99,102,241,0.25)]
                    transition-all duration-300
                    group-hover:-translate-y-2
                    group-hover:shadow-[0_0_60px_-12px_rgba(99,102,241,0.4)]"
                  >
                    <div className="absolute top-3 left-1/2 -translate-x-1/2 text-sm border border-blue-400 px-1.5 py-1 rounded-full font-mono text-blue-400/80">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <h4 className="text-white text-md font-semibold mb-2 mt-2 text-center">
                      {step.title}
                    </h4>
                    <p className="text-sm text-gray-400 leading-relaxed text-center">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
