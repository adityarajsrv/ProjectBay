import { Bell, ChevronDown, LogOut, User } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { logoutUser } from "../services/authService";
import { Link } from "react-router-dom";

const UserNavbar = () => {
  const { user, setUser, setBooted } = useAuth();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const initial =
    user?.fullName
      ?.split(" ")
      ?.map((n) => n[0])
      ?.join("")
      ?.slice(0, 2)
      ?.toUpperCase() || "?";

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = async () => {
    try {
      await logoutUser();
    } finally {
      setUser(null);
      setBooted(false);
      sessionStorage.removeItem("booted");
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-[#0b0f1a]/80 backdrop-blur-xl border-b border-white/5 z-50 flex items-center justify-between px-6">
      <h1 className="text-2xl font-semibold tracking-wide">
        Pirate<span className="text-blue-500">Bay</span>
      </h1>
      <div className="flex items-center gap-4" ref={ref}>
        <button className="p-2 rounded-lg hover:bg-white/5 transition">
          <Bell size={18} />
        </button>
        <div
          onClick={() => setOpen((v) => !v)}
          className="flex items-center gap-2 cursor-pointer px-3 py-1.5 rounded-lg hover:bg-white/5 transition"
        >
          <div className="w-8 h-8 rounded-full bg-blue-500 text-black flex items-center justify-center font-semibold">
            {initial}
          </div>
          <ChevronDown size={16} />
        </div>
        {open && (
          <div className="absolute right-6 top-16 w-48 rounded-xl border border-white/10 bg-[#0F1525] shadow-xl overflow-hidden">
            <div className="px-4 py-3 border-b border-white/10">
              <p className="text-sm font-medium text-white">{user.fullName}</p>
              <p className="text-xs text-white/50 truncate">{user.email}</p>
            </div>
            <button className="cursor-pointer w-full flex items-center gap-3 px-4 py-2.5 text-sm text-white/70 hover:bg-white/5 transition">
              <User size={16} />
              Profile
            </button>
            <Link to="/login">
              <button
                onClick={handleLogout}
                className="cursor-pointer w-full flex items-center gap-3 px-4 py-2.5 text-sm text-rose-400 hover:bg-white/5 transition"
              >
                <LogOut size={16} />
                Logout
              </button>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default UserNavbar;
