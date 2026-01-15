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

const Sidebar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [projects, setProjects] = useState([]);
  const [activeProjectId, setActiveProjectId] = useState(null);

  const activeProject = projects.find(p => p.id === activeProjectId);

  const handleCreateProject = (project) => {
    setProjects(prev => [...prev, project]);
    setActiveProjectId(project.id);
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
          <button className="cursor-pointer w-full flex items-center gap-3 px-3 py-2 rounded-lg bg-white/5 text-white">
            <LayoutDashboard size={18} />
            Dashboard
          </button>
        </div>
        <div className="flex-1 px-4 overflow-y-auto scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
          <p className="px-3 text-xs uppercase tracking-wider text-white/40 mb-2">
            Projects
          </p>
          <div className="space-y-1">
            {projects.length === 0 && (
              <p className="px-3 text-sm text-white/40">
                No projects yet
              </p>
            )}
            {projects.map(project => (
              <button
                key={project.id}
                onClick={() => setActiveProjectId(project.id)}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition cursor-pointer
                  ${
                    activeProjectId === project.id
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

              <SidebarItem icon={Map} label="Overview" />
              <SidebarItem icon={Workflow} label="Roadmap" />
              <SidebarItem icon={KanbanSquare} label="Execution" />
              <SidebarItem icon={Activity} label="Insights" />
              <SidebarItem icon={MessageSquare} label="Chat" />
            </>
          ) : (
            <>
              <p className="px-3 text-xs uppercase tracking-wider text-white/40 mb-1">
                Project Tools
              </p>
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

const SidebarItem = ({ icon: Icon, label }) => (
  <button className="cursor-pointer w-full flex items-center gap-3 px-3 py-2 rounded-lg text-white/70 hover:bg-white/5 hover:text-white transition">
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
