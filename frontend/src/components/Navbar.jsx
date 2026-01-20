import { Link, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { ChevronDown, LogOut, LayoutDashboard, User } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { logoutUser } from "../services/authService";

const Navbar = () => {
  const { user, setUser, setBooted } = useAuth();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const navigate = useNavigate();

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
      navigate("/login", { replace: true });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="backdrop-blur-md bg-black/40 border-b border-white/10">
        <div className="h-16 max-w-7xl mx-auto flex items-center justify-between px-6 md:px-1">
          <h2 className="text-white text-3xl font-semibold tracking-tight cursor-pointer">
            Pirate<span className="text-blue-500">Bay</span>
          </h2>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            {["Home", "How It Works", "Features", "Contact"].map((item) => (
              <button
                key={item}
                className="text-white/80 hover:text-white transition-colors duration-200 cursor-pointer"
              >
                {item}
              </button>
            ))}
          </nav>
          {!user ? (
            <Link to="/login">
              <button className="cursor-pointer bg-blue-500/90 hover:bg-blue-500 text-black px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200 shadow-lg shadow-blue-500/20">
                Login
              </button>
            </Link>
          ) : (
            <div ref={ref} className="relative">
              <div
                onClick={() => setOpen((v) => !v)}
                className="flex items-center gap-2 cursor-pointer px-3 py-1.5 rounded-lg hover:bg-white/5 transition"
              >
                <div className="w-8 h-8 rounded-full bg-blue-500 text-black flex items-center justify-center font-semibold">
                  {initial}
                </div>
                <ChevronDown size={16} className="text-white/70" />
              </div>
              {open && (
                <div className="absolute right-0 top-12 w-44 rounded-xl border border-white/10 bg-[#0F1525] shadow-xl overflow-hidden">
                  <div className="px-4 py-3 border-b border-white/10">
                    <p className="text-sm font-medium text-white">
                      {user.fullName}
                    </p>
                    <p className="text-xs text-white/50 truncate">
                      {user.email}
                    </p>
                  </div>
                  <button className="cursor-pointer w-full flex items-center gap-3 px-4 py-2.5 text-sm text-white/70 hover:bg-white/5 transition">
                    <User size={16} />
                    Profile
                  </button>
                  <button
                    onClick={() => navigate("/dashboard")}
                    className="cursor-pointer w-full flex items-center gap-3 px-4 py-2.5 text-sm text-white/70 hover:bg-white/5 transition"
                  >
                    <LayoutDashboard size={16} />
                    Dashboard
                  </button>
                  <button
                    onClick={handleLogout}
                    className="cursor-pointer w-full flex items-center gap-3 px-4 py-2.5 text-sm text-rose-400 hover:bg-white/5 transition"
                  >
                    <LogOut size={16} />
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
