import { Bell, ChevronDown } from "lucide-react";

const UserNavbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-[#0b0f1a]/80 backdrop-blur-xl border-b border-white/5 z-50 flex items-center justify-between px-6">
      <h1 className="text-2xl font-semibold tracking-wide">
        Pirate<span className="text-blue-500">Bay</span>
      </h1>

      <div className="flex items-center gap-4">
        <button className="p-2 rounded-lg hover:bg-white/5 transition">
          <Bell size={18} />
        </button>
        <div className="flex items-center gap-2 cursor-pointer px-3 py-1.5 rounded-lg hover:bg-white/5 transition">
          <div className="w-8 h-8 rounded-full bg-blue-500 text-black flex items-center justify-center font-semibold">
            A
          </div>
          <ChevronDown size={16} />
        </div>
      </div>
    </header>
  );
};

export default UserNavbar;
