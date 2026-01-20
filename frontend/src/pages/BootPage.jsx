import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const messages = [
  "Setting up your workspace…",
  "Preparing execution environment…",
  "Syncing project state…",
  "Almost ready…",
];

const BootPage = () => {
  const navigate = useNavigate();
  const { setBooted } = useAuth();
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((s) => Math.min(s + 1, messages.length - 1));
    }, 600);

    const timeout = setTimeout(() => {
      setBooted(true);
      navigate("/dashboard", { replace: true });
    }, 2000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [navigate, setBooted]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0B0F1A] text-white">
      <div className="text-center space-y-6">
        <div className="h-12 w-12 rounded-full border-2 border-indigo-500 border-t-transparent animate-spin mx-auto" />
        <p className="text-sm text-white/70">{messages[step]}</p>
      </div>
    </div>
  );
};

export default BootPage;
