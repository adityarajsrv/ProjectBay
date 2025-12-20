import {motion} from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-[#0b0f1a]" />
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-3xl" />
      <div className="absolute top-1/3 -right-40 w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-3xl" />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-linear(to bottom, white 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="relative z-10 min-h-screenpx-4 mt-5">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen max-w-7xl mx-auto py-12 lg:py-0">
          <div className="lg:w-1/2">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Turn ideas into execution
              <span className="text-blue-500 block mt-2">not chaos.</span>
            </h1>
            <p className="text-xl text-gray-300 mt-8 max-w-lg">
              Plan, track, and collaborate using a living roadmap instead of
              scattered tools. One system for your entire project lifecycle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button className="cursor-pointer px-8 py-1 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition duration-200">
                Start a Project{" "}
                <span className="font-bold text-xl"> &rarr;</span>
              </button>
              <button className="cursor-pointer px-8 py-3 bg-transparent hover:bg-white/5 text-white font-medium rounded-lg border border-gray-600 transition duration-200">
                See how it works
              </button>
            </div>
            <div className="my-6 max-w-sm">
              <div className="h-px bg-linear-to-r from-transparent via-gray-600 to-transparent" />
            </div>
          </div>
          <div className="lg:w-3/4 mt-20 lg:mt-0 lg:pl-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative rounded-3xl border border-white/10 
    bg-[radial-gradient(1200px_circle_at_20%_20%,rgba(99,102,241,0.12),transparent_40%),radial-gradient(800px_circle_at_80%_80%,rgba(168,85,247,0.12),transparent_40%),linear-gradient(180deg,rgba(11,16,32,0.88),rgba(11,15,26,0.95))]
    backdrop-blur-2xl p-10 
    shadow-[0_0_120px_-30px_rgba(99,102,241,0.35)]
    overflow-hidden"
            >
              <div
                className="absolute inset-0 opacity-[0.03] animate-[gridMove_20s_linear_infinite]"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
                  backgroundSize: "32px 32px",
                }}
              />
              <div className="absolute -top-24 left-1/3 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" />
              <div className="relative w-full h-[340px]">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-10"
                >
                  <div
                    className="w-20 h-20 rounded-full bg-[#0b0f1a] border border-emerald-400/40 
        shadow-[0_0_30px_-5px_rgba(52,211,153,0.35)]
        flex items-center justify-center text-sm font-medium text-white cursor-pointer"
                  >
                    Idea
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: -16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                  className="absolute left-[170px] top-[48px] z-10"
                >
                  <div
                    className="px-6 py-3 rounded-xl bg-[#0b0f1a] border border-indigo-400/30 
        shadow-[0_0_24px_-6px_rgba(99,102,241,0.3)] text-sm text-white cursor-pointer"
                  >
                    Design
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45 }}
                  className="absolute left-[170px] bottom-[48px] z-10"
                >
                  <div
                    className="px-6 py-3 rounded-xl bg-[#0b0f1a] border border-fuchsia-400/30 
        shadow-[0_0_24px_-6px_rgba(217,70,239,0.3)] text-sm text-white cursor-pointer"
                  >
                    Research
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 }}
                  className="absolute left-[360px] top-1/2 -translate-y-1/2 z-10"
                >
                  <div
                    className="px-6 py-4 rounded-2xl bg-linear-to-br from-[#0b0f1a] to-[#10162b]
        border border-sky-400/40 shadow-[0_0_40px_-10px_rgba(56,189,248,0.4)]
        text-sm font-medium text-white cursor-pointer"
                  >
                    Code & Track
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.75 }}
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-10"
                >
                  <div
                    className="w-24 h-24 rounded-full bg-[#0b0f1a] border border-pink-400/40
        shadow-[0_0_35px_-8px_rgba(236,72,153,0.35)]
        flex items-center justify-center text-sm font-medium text-white cursor-pointer"
                  >
                    Execution
                  </div>
                </motion.div>
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  <defs>
                    <marker
                      id="soft-arrow"
                      markerWidth="8"
                      markerHeight="8"
                      refX="5"
                      refY="4"
                      orient="auto"
                    >
                      <path
                        d="M0,0 L0,8 L8,4 z"
                        fill="rgba(255,255,255,0.35)"
                      />
                    </marker>
                  </defs>
                  <line
                    x1="80"
                    y1="170"
                    x2="170"
                    y2="85"
                    stroke="rgba(255,255,255,0.25)"
                    strokeWidth="1.5"
                    markerEnd="url(#soft-arrow)"
                  />
                  <line
                    x1="80"
                    y1="170"
                    x2="170"
                    y2="255"
                    stroke="rgba(255,255,255,0.25)"
                    strokeWidth="1.5"
                    markerEnd="url(#soft-arrow)"
                  />
                  <line
                    x1="260"
                    y1="95"
                    x2="360"
                    y2="180"
                    stroke="rgba(255,255,255,0.25)"
                    strokeWidth="1.5"
                    markerEnd="url(#soft-arrow)"
                  />
                  <line
                    x1="280"
                    y1="255"
                    x2="360"
                    y2="180"
                    stroke="rgba(255,255,255,0.25)"
                    strokeWidth="1.5"
                    markerEnd="url(#soft-arrow)"
                  />
                  <line
                    x1="530"
                    y1="80"
                    x2="560"
                    y2="80"
                    stroke="rgba(255,255,255,0.25)"
                    strokeWidth="1.5"
                    markerEnd="url(#soft-arrow)"
                    transform="translate(-40, 90)"
                  />
                </svg>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
