/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  LayoutDashboard,
  Folder,
  Map,
  Workflow,
  KanbanSquare,
  Activity,
  MessageSquare,
  Settings,
  HelpCircle,
} from "lucide-react";
import CreateProjectModal from "./CreateProjectModal.jsx";

const Sidebar = ({
  activeProject,
  setActiveProject,
  activeView,
  setActiveView,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [projects, setProjects] = useState([]);

  const handleCreateProject = (project) => {
    setProjects((prev) => [...prev, project]);
    setActiveProject(project);
    setActiveView("overview");
  };

  return (
    <>
      <aside className="fixed top-16 left-0 h-[calc(100vh-4rem)] w-64 bg-[#0B0F1A] border-r border-white/5 flex flex-col">
        <div className="p-4 space-y-5">
          <button
            onClick={() => setIsModalOpen(true)}
            className="cursor-pointer w-full bg-indigo-500 text-black py-2.5 rounded-lg font-medium hover:bg-indigo-600 transition"
          >
            + Create Project
          </button>
          <SidebarItem
            icon={LayoutDashboard}
            label="Dashboard"
            active={activeView === "dashboard"}
            onClick={() => {
              setActiveProject(null);
              setActiveView("dashboard");
            }}
          />
        </div>
        <div className="flex-1 px-4 overflow-y-auto scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
          <p className="px-3 text-xs uppercase tracking-wider text-white/40 mb-2">
            Projects
          </p>
          <div className="space-y-1">
            {projects.length === 0 && (
              <p className="px-3 text-sm text-white/40">No projects yet</p>
            )}

            {projects.map((project) => (
              <button
                key={project.id}
                onClick={() => {
                  setActiveProject(project);
                  setActiveView("overview");
                }}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition cursor-pointer
                  ${
                    activeProject?.id === project.id
                      ? "bg-white/5 text-white"
                      : "text-white/70 hover:bg-white/5 hover:text-white"
                  }`}
              >
                <Folder size={16} />
                <span className="truncate">{project.name}</span>
              </button>
            ))}
          </div>
        </div>
        <div className="px-4 py-4 border-t border-white/5 space-y-1">
          {activeProject ? (
            <>
              <p className="px-3 text-xs uppercase tracking-wider text-white/40 mb-1">
                Project: {activeProject.name}
              </p>
              <SidebarItem
                icon={Map}
                label="Overview"
                active={activeView === "overview"}
                onClick={() => setActiveView("overview")}
              />
              <SidebarItem
                icon={Workflow}
                label="Roadmap"
                active={activeView === "roadmap"}
                onClick={() => setActiveView("roadmap")}
              />
              <SidebarItem
                icon={KanbanSquare}
                label="Execution"
                active={activeView === "execution"}
                onClick={() => setActiveView("execution")}
              />
              <SidebarItem
                icon={Activity}
                label="Insights"
                active={activeView === "insights"}
                onClick={() => setActiveView("insights")}
              />
              <SidebarItem
                icon={MessageSquare}
                label="Chat"
                active={activeView === "chat"}
                onClick={() => setActiveView("chat")}
              />
            </>
          ) : (
            <>
              <p className="px-3 text-xs uppercase tracking-wider text-white/40 mb-1">
                Project Tools
              </p>
              <DisabledItem label="Overview" />
              <DisabledItem label="Roadmap" />
              <DisabledItem label="Execution" />
              <DisabledItem label="Insights" />
              <DisabledItem label="Chat" />
            </>
          )}
        </div>
        <div className="px-4 py-2 border-t border-white/5 space-y-1">
          <button className="cursor-pointer w-full flex items-center gap-3 px-3 py-2 rounded-lg text-white/60 hover:bg-white/5 hover:text-white transition">
            <Settings size={18} />
            Settings
          </button>
          <button className="cursor-pointer w-full flex items-center gap-3 px-3 py-2 rounded-lg text-white/60 hover:bg-white/5 hover:text-white transition">
            <HelpCircle size={18} />
            Help
          </button>
        </div>
      </aside>
      <CreateProjectModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onCreate={handleCreateProject}
      />
    </>
  );
};

const SidebarItem = ({ icon: Icon, label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`cursor-pointer w-full flex items-center gap-3 px-3 py-2 rounded-lg transition
      ${
        active
          ? "bg-indigo-500/20 text-white"
          : "text-white/70 hover:bg-white/5 hover:text-white"
      }`}
  >
    <Icon size={18} />
    {label}
  </button>
);

const DisabledItem = ({ label }) => (
  <button
    disabled
    className="w-full px-3 py-2 rounded-lg text-left text-white/40 cursor-not-allowed"
  >
    {label}
  </button>
);

export default Sidebar;
