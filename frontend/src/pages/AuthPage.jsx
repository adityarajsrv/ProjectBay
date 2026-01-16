import { useState } from "react";
import loginSvg from "../assets/login.svg";
import signupSvg from "../assets/signup.svg";

const LoginVisual = () => (
  <img
    src={loginSvg}
    alt="Login visual"
    className="w-110"
  />
);

const SignupVisual = () => (
  <img
    src={signupSvg}
    alt="Signup visual"
    className="w-110"
  />
);


const AuthPage = () => {
  const [mode, setMode] = useState("login");

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0B0F1A] px-4">
      <div className="w-full max-w-5xl h-140 rounded-2xl overflow-hidden border border-white/10
        bg-[linear-gradient(180deg,rgba(11,16,32,0.9),rgba(11,15,26,0.95))]
        shadow-[0_0_120px_-40px_rgba(99,102,241,0.35)]
        grid grid-cols-1 md:grid-cols-2">

        {/* LEFT */}
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
            <div>
              <label className="text-sm text-white/70">Email</label>
              <input
                type="email"
                placeholder="example@email.com"
                className="mt-1 w-full rounded-lg bg-[#0F1525] border border-white/10 px-3 py-2 text-white outline-none focus:border-indigo-500"
              />
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label className="text-sm text-white/70">Password</label>
                {mode === "login" && (
                  <button className="cursor-pointer text-xs text-white/50 hover:text-white underline">
                    Forgot password?
                  </button>
                )}
              </div>
              <input
                type="password"
                className="mt-1 w-full rounded-lg bg-[#0F1525] border border-white/10 px-3 py-2 text-white outline-none focus:border-indigo-500"
              />
            </div>
            {mode === "signup" && (
              <div>
                <label className="text-sm text-white/70">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="mt-1 w-full rounded-lg bg-[#0F1525] border border-white/10 px-3 py-2 text-white outline-none focus:border-indigo-500"
                />
              </div>
            )}
          </div>
          <button className="cursor-pointer mt-6 w-full bg-indigo-500 text-black py-2.5 rounded-lg font-medium hover:bg-indigo-600 transition">
            {mode === "login" ? "Login" : "Create Account"}
          </button>
          <div className="flex items-center gap-3 my-6">
            <div className="h-px flex-1 bg-white/10" />
            <span className="text-xs text-white/40">
              Or continue with
            </span>
            <div className="h-px flex-1 bg-white/10" />
          </div>
          <p className="mt-2 text-sm text-white/50 text-center">
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
        {/* RIGHT */}
        <div className="hidden md:flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.06] animate-[gridMove_20s_linear_infinite]"
            style={{
              background:
                "white",
              backgroundSize: "32px 32px",
            }}
          />
          {mode === "login" ? <LoginVisual /> : <SignupVisual />}
        </div>
      </div>
      <p className="absolute bottom-6 text-xs text-white/40 text-center">
        By continuing, you agree to our{" "}
        <span className="underline">Terms</span> and{" "}
        <span className="underline">Privacy Policy</span>.
      </p>
    </div>
  );
};

export default AuthPage;
