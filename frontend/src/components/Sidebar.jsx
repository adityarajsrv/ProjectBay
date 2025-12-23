import { LayoutDashboard, FolderPlus, Folder, Settings, HelpCircle } from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="fixed top-16 left-0 h-[calc(100vh-4rem)] w-64 bg-[#0b0f1a] border-r border-white/5 flex flex-col justify-between">
      <div className="p-4 space-y-6">
        <button className="w-full bg-blue-500 text-black py-2.5 rounded-lg font-medium hover:bg-blue-600 transition">
          + Create Project
        </button>

        <nav className="space-y-1">
          <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg bg-white/5 text-white">
            <LayoutDashboard size={18} />
            Dashboard
          </button>

          <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-white/70 hover:bg-white/5 hover:text-white transition">
            <Folder size={18} />
            Projects
          </button>
        </nav>

        <div className="pt-4 border-t border-white/5 space-y-1">
          <p className="px-3 text-xs uppercase tracking-wider text-white/40">
            Current Project
          </p>

          <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-white/70 hover:bg-white/5 hover:text-white transition">
            <FolderPlus size={18} />
            Overview
          </button>

          <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-white/70 hover:bg-white/5 hover:text-white transition">
            Roadmap
          </button>

          <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-white/70 hover:bg-white/5 hover:text-white transition">
            Analytics
          </button>
        </div>
      </div>

      <div className="p-4 border-t border-white/5 space-y-1">
        <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-white/60 hover:bg-white/5 hover:text-white transition">
          <Settings size={18} />
          Settings
        </button>
        <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-white/60 hover:bg-white/5 hover:text-white transition">
          <HelpCircle size={18} />
          Help
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
