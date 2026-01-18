import { useState } from "react";
import loginSvg from "../assets/login.svg";
import signupSvg from "../assets/signup.svg";
import { loginUser, signupUser } from "../services/authService";

const LoginVisual = () => (
  <img src={loginSvg} alt="Login visual" className="w-110 saturate-150" />
);

const SignupVisual = () => (
  <img src={signupSvg} alt="Signup visual" className="w-110 saturate-100" />
);

const AuthPage = () => {
  const [mode, setMode] = useState("login");
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!form.email.includes("@")) {
      setError("Enter a valid email");
      return;
    }

    if (form.password.length < 8) {
      setError("Password must be at least 8 characters");
      return;
    }

    if (!/[A-Za-z]/.test(form.password) || !/[0-9]/.test(form.password)) {
      setError("Password must contain letters and numbers");
      return;
    }

    if (mode === "signup" && form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      setError("");

      if (mode === "login") {
        await loginUser({
          email: form.email,
          password: form.password,
        });
      } else {
        await signupUser({
          fullName: form.fullName,
          email: form.email,
          password: form.password,
        });
      }

      window.location.href = "/dashboard";
    } catch (err) {
      setError(err.response?.data?.message || "Authentication failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0B0F1A] px-4">
      <div
        className="w-full max-w-5xl h-160 rounded-2xl overflow-hidden border border-white/10
        bg-[linear-gradient(180deg,rgba(11,16,32,0.9),rgba(11,15,26,0.95))]
        shadow-[0_0_120px_-40px_rgba(99,102,241,0.35)]
        grid grid-cols-1 md:grid-cols-2"
      >
        <div className="p-10 flex flex-col justify-center">
          <h1 className="text-3xl font-semibold text-white mb-2">
            {mode === "login" ? "Welcome back" : "Create your account"}
          </h1>
          <p className="text-sm text-white/60 mb-8">
            {mode === "login"
              ? "Continue executing your projects"
              : "Turn ideas into structured execution"}
          </p>

          <div className="space-y-4">
            {mode === "signup" && (
              <div>
                <label className="text-sm text-white/70">Full Name</label>
                <input
                  name="fullName"
                  type="text"
                  required
                  value={form.fullName}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-lg bg-[#0F1525] border border-white/10 px-3 py-2 text-white outline-none focus:border-indigo-500"
                />
              </div>
            )}

            <div>
              <label className="text-sm text-white/70">Email</label>
              <input
                name="email"
                type="email"
                required
                pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
                value={form.email}
                onChange={handleChange}
                className="mt-1 w-full rounded-lg bg-[#0F1525] border border-white/10 px-3 py-2 text-white outline-none focus:border-indigo-500"
              />
            </div>

            <div>
              <label className="text-sm text-white/70">Password</label>
              <input
                name="password"
                type="password"
                required
                value={form.password}
                onChange={handleChange}
                className="mt-1 w-full rounded-lg bg-[#0F1525] border border-white/10 px-3 py-2 text-white outline-none focus:border-indigo-500"
              />
            </div>

            {mode === "signup" && (
              <div>
                <label className="text-sm text-white/70">
                  Confirm Password
                </label>
                <input
                  name="confirmPassword"
                  type="password"
                  required
                  value={form.confirmPassword}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-lg bg-[#0F1525] border border-white/10 px-3 py-2 text-white outline-none focus:border-indigo-500"
                />
              </div>
            )}
          </div>

          {error && <p className="mt-4 text-sm text-rose-400">{error}</p>}

          <button
            onClick={handleSubmit}
            className="cursor-pointer mt-6 w-full bg-indigo-500 text-black py-2.5 rounded-lg font-medium hover:bg-indigo-600 transition"
          >
            {mode === "login" ? "Login" : "Create Account"}
          </button>

          <p className="mt-6 text-sm text-white/50 text-center">
            {mode === "login" ? (
              <>
                Don&apos;t have an account?{" "}
                <button
                  onClick={() => setMode("signup")}
                  className="cursor-pointer underline hover:text-white"
                >
                  Sign up
                </button>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <button
                  onClick={() => setMode("login")}
                  className="cursor-pointer underline hover:text-white"
                >
                  Sign in
                </button>
              </>
            )}
          </p>
        </div>

        <div className="hidden md:flex items-center justify-center relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.06] animate-[gridMove_20s_linear_infinite]"
            style={{ background: "white", backgroundSize: "32px 32px" }}
          />
          {mode === "login" ? <LoginVisual /> : <SignupVisual />}
        </div>
      </div>

      <p className="absolute bottom-6 text-xs text-white/40 text-center">
        By continuing, you agree to our <span className="underline">Terms</span>{" "}
        and <span className="underline">Privacy Policy</span>.
      </p>
    </div>
  );
};

export default AuthPage;
