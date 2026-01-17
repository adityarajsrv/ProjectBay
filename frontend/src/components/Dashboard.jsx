import {
  SlidersHorizontal,
  LayoutGrid,
  List,
  Search,
  Users,
} from "lucide-react";
import { useEffect, useMemo, useState, useRef } from "react";

const Dashboard = () => {
  const [view, setView] = useState("grid");
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [showFilters, setShowFilters] = useState(false);
  const filterRef = useRef(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  /* ---------------- Debounce Search ---------------- */
  useEffect(() => {
    const t = setTimeout(() => {
      setDebouncedQuery(query.toLowerCase());
    }, 300);
    return () => clearTimeout(t);
  }, [query]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (filterRef.current && !filterRef.current.contains(e.target)) {
        setShowFilters(false);
      }
    };
    
    if (showFilters) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showFilters]);

  const stats = [
    { label: "Total Projects", value: 6 },
    { label: "Active", value: 3, color: "bg-yellow-400" },
    { label: "Completed", value: 2, color: "bg-emerald-400" },
    { label: "Pending", value: 1, color: "bg-rose-400" },
  ];

  const visibleProjects = useMemo(() => {
    const projects = [
      {
        title: "Product Redesign",
        description:
          "Complete overhaul of the user interface and experience for our flagship product.",
        progress: 68,
        status: "yellow",
        members: 5,
        due: "in 14 days",
        lastActive: "30 minutes ago",
      },
      {
        title: "API Migration",
        description:
          "Migrate legacy REST endpoints to GraphQL for improved performance.",
        progress: 100,
        status: "green",
        members: 3,
        due: "in about 1 month",
        lastActive: "2 hours ago",
      },
      {
        title: "Mobile App Launch",
        description: "Native iOS and Android apps with full feature parity.",
        progress: 85,
        status: "yellow",
        members: 8,
        due: "in 7 days",
        lastActive: "1 day ago",
      },
      {
        title: "Data Pipeline",
        description:
          "Event-driven analytics ingestion and processing pipeline.",
        progress: 15,
        status: "red",
        members: 6,
        due: "in 20 days",
        lastActive: "3 days ago",
      },
    ];

    return projects.filter((p) => {
      const matchesQuery =
        p.title.toLowerCase().includes(debouncedQuery) ||
        p.description.toLowerCase().includes(debouncedQuery);

      const matchesStatus = statusFilter === "all" || p.status === statusFilter;

      return matchesQuery && matchesStatus;
    });
  }, [debouncedQuery, statusFilter]);

  return (
    <main className="ml-64 pt-20 px-8 min-h-screen bg-[#0B0F1A] text-white">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold">Dashboard</h2>
        <p className="text-sm text-white/50 mt-1">
          Overview of ongoing execution across projects
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {stats.map((s, i) => (
          <div
            key={i}
            className="rounded-2xl border border-white/10 bg-[#0F1525] px-6 py-4"
          >
            <div className="flex items-center gap-2">
              {s.color && (
                <span className={`h-2.5 w-2.5 rounded-full ${s.color}`} />
              )}
              <p className="text-sm text-white/60">{s.label}</p>
            </div>
            <p className="text-2xl font-semibold mt-1">{s.value}</p>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between gap-4 mt-10">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects..."
            className="w-full rounded-lg bg-[#0F1525] border border-white/10 
              pl-10 pr-4 py-2 text-sm text-white outline-none 
              focus:border-indigo-500"
          />
        </div>
        <div ref={filterRef} className="flex gap-2 relative">
          <button
            onClick={() => setShowFilters((v) => !v)}
            className="rounded-lg border border-white/10 px-3 py-2 text-white/70 hover:bg-white/5 cursor-pointer"
          >
            <SlidersHorizontal className="h-4 w-4" />
          </button>
          {showFilters && (
            <div className="absolute right-0 top-12 z-10 w-44 rounded-lg border border-white/10 bg-[#0F1525] shadow-xl">
              <button
                onClick={() => {
                  setStatusFilter("all");
                  setShowFilters(false);
                }}
                className="w-full px-4 py-2 text-left text-sm text-white/70 hover:bg-white/5 cursor-pointer"
              >
                All
              </button>
              <button
                onClick={() => {
                  setStatusFilter("green");
                  setShowFilters(false);
                }}
                className="w-full px-4 py-2 text-left text-sm text-white/70 hover:bg-white/5 cursor-pointer"
              >
                Completed
              </button>
              <button
                onClick={() => {
                  setStatusFilter("yellow");
                  setShowFilters(false);
                }}
                className="w-full px-4 py-2 text-left text-sm text-white/70 hover:bg-white/5 cursor-pointer"
              >
                Active
              </button>
              <button
                onClick={() => {
                  setStatusFilter("red");
                  setShowFilters(false);
                }}
                className="w-full px-4 py-2 text-left text-sm text-white/70 hover:bg-white/5 cursor-pointer"
              >
                Pending
              </button>
            </div>
          )}
          <div className="flex overflow-hidden rounded-lg border border-white/10">
            <button
              onClick={() => setView("grid")}
              className={`px-3 py-2 cursor-pointer ${
                view === "grid"
                  ? "bg-white/10 text-white"
                  : "text-white/70 hover:bg-white/5"
              }`}
            >
              <LayoutGrid className="h-4 w-4" />
            </button>
            <div className="w-px bg-white/10" />
            <button
              onClick={() => setView("list")}
              className={`px-3 py-2 cursor-pointer ${
                view === "list"
                  ? "bg-white/10 text-white"
                  : "text-white/70 hover:bg-white/5"
              }`}
            >
              <List className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
      <div
        className={`mt-8 ${
          view === "grid"
            ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
            : "space-y-4"
        }`}
      >
        {visibleProjects.map((p, i) => {
          const statusDot =
            p.status === "green"
              ? "bg-emerald-400"
              : p.status === "yellow"
                ? "bg-amber-400"
                : "bg-rose-400";
          return (
            <div
              key={i}
              onClick={() => {
                setSelectedProject(p);
                setShowDetails(true);
              }}
              className="cursor-pointer rounded-2xl border border-white/10 bg-[#0F1525] p-6 hover:border-indigo-500/40 transition"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className={`h-2.5 w-2.5 rounded-full ${statusDot}`} />
                <h3 className="font-semibold">{p.title}</h3>
              </div>
              <p className="text-sm text-white/60 line-clamp-2">
                {p.description}
              </p>
              <div className="mt-4 flex justify-between text-xs text-white/50">
                <span>{p.progress}% complete</span>
                <div className="flex justify-between items-center">
                  <Users className="h-3.5 w-3.5 mr-1" />
                  <span>{p.members} members</span>
                </div>
                <span>{p.due}</span>
              </div>
              <div className="mt-3 border-t border-white/10 pt-2 text-xs text-white/40">
                Active {p.lastActive}
              </div>
            </div>
          );
        })}
      </div>
      {/* Details Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-[#0F1525] border-l border-white/10 
  transform transition-transform duration-300 z-50
  ${showDetails ? "translate-x-0" : "translate-x-full"}`}
      >
        {selectedProject && (
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Details</h3>
              <button
                onClick={() => setShowDetails(false)}
                className="text-white/50 hover:text-white cursor-pointer"
              >
                ✕
              </button>
            </div>
            <h4 className="text-xl font-semibold mb-2">
              {selectedProject.title}
            </h4>
            <p className="text-sm text-white/60 mb-4">
              {selectedProject.description}
            </p>
            <div className="mb-4">
              <p className="text-xs text-white/50 mb-1">Progress</p>
              <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                <div
                  className={`h-full transition-all duration-300 ${
                    selectedProject.progress === 100
                      ? "bg-green-500"
                      : selectedProject.progress < 40
                        ? "bg-red-500"
                        : "bg-yellow-400"
                  }`}
                  style={{ width: `${selectedProject.progress}%` }}
                />
              </div>
              <p className="text-xs text-white/40 mt-1">
                {selectedProject.progress}% complete
              </p>
            </div>
            <div className="space-y-2 text-sm text-white/60">
              <p><span className="font-semibold">Members:</span> {selectedProject.members}</p>
              <p><span className="font-semibold">Due:</span> {selectedProject.due}</p>
              <p><span className="font-semibold">Last Active:</span> {selectedProject.lastActive}</p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10">
              <p className="text-xs uppercase tracking-wide text-white/40 mb-3">
                Quick Actions
              </p>

              <div className="space-y-2">
                <button className="cursor-pointer w-full rounded-lg border border-white/10 px-4 py-2 text-sm text-white/70 hover:bg-white/5 text-left">
                  Open Roadmap
                </button>
                <button className="cursor-pointer w-full rounded-lg border border-white/10 px-4 py-2 text-sm text-white/70 hover:bg-white/5 text-left">
                  Open Execution Board
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default Dashboard;
