/* eslint-disable react/prop-types */
import { Send, Bot, Hash, Paperclip, Mic } from "lucide-react";
import { useState } from "react";

const ProjectChat = ({ project }) => {
  const [message, setMessage] = useState("");

  if (!project) return null;

  return (
    <main className="ml-64 pt-16 min-h-screen bg-[#0A0E17] text-white flex flex-col">
      <div className="h-16 px-8 flex items-center justify-between border-b border-white/4 bg-linear-to-r from-[#0A0E17] to-[#0F1525]">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-linear-to-br from-indigo-500/10 to-blue-500/10 border border-white/3">
            <Hash size={18} className="text-indigo-400" />
          </div>
          <div>
            <h1 className="text-base font-semibold text-white tracking-tight">
              {project.name}
            </h1>
            <p className="text-xs text-white/60">Project chat room</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs text-white/40">
            {project.members || 3} members online
          </span>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto px-8 py-8 space-y-8 relative">
        <div className="absolute top-0 left-0 right-0 h-8 bg-linear-to-b from-[#0A0E17] to-transparent z-10 pointer-events-none" />
                <div className="flex gap-4 group">
          <div className="shrink-0">
            <div className="w-10 h-10 rounded-xl bg-linear-to-br from-indigo-500/20 to-blue-500/20 border border-indigo-500/20 flex items-center justify-center">
              <Bot size={18} className="text-indigo-400" />
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <div className="inline-block rounded-2xl rounded-tl-none bg-white/3 border border-white/4 px-5 py-3 max-w-2xl">
              <p className="text-sm text-white/90 leading-relaxed tracking-wide">
                Roadmap updated. Backend authentication task is blocked due to missing refresh token rotation.
              </p>
            </div>
            <div className="flex items-center gap-3 mt-2">
              <span className="text-xs text-white/40">System</span>
              <span className="text-xs text-white/20">•</span>
              <span className="text-xs text-white/40">2 minutes ago</span>
            </div>
          </div>
        </div>
        <div className="flex gap-4 group justify-end">
          <div className="flex-1 min-w-0 flex flex-col items-end">
            <div className="inline-block rounded-2xl rounded-tr-none bg-linear-to-r from-indigo-500 to-blue-500 px-5 py-3 max-w-2xl">
              <p className="text-sm text-white leading-relaxed tracking-wide">
                I&apos;ll fix the refresh token flow and push changes by tonight.
              </p>
            </div>
            <div className="flex items-center gap-3 mt-2">
              <span className="text-xs text-white/60">You</span>
              <span className="text-xs text-white/20">•</span>
              <span className="text-xs text-white/40">Just now</span>
            </div>
          </div>
          <div className="shrink-0">
            <div className="w-10 h-10 rounded-xl bg-linear-to-br from-blue-500 to-indigo-500 flex items-center justify-center font-semibold text-white">
              A
            </div>
          </div>
        </div>
        <div className="flex gap-4 group">
          <div className="shrink-0">
            <div className="w-10 h-10 rounded-xl bg-linear-to-br from-indigo-500/20 to-blue-500/20 border border-indigo-500/20 flex items-center justify-center">
              <Bot size={18} className="text-indigo-400" />
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <div className="inline-block rounded-2xl rounded-tl-none bg-white/3 border border-white/4 px-5 py-3 max-w-2xl">
              <p className="text-sm text-white/90 leading-relaxed tracking-wide">
                I&apos;ve detected a related issue in the middleware. Suggest reviewing lines 45-78 in `auth.js`.
              </p>
            </div>
            <div className="flex items-center gap-3 mt-2">
              <span className="text-xs text-white/40">AI Assistant</span>
              <span className="text-xs text-white/20">•</span>
              <span className="text-xs text-white/40">1 minute ago</span>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-linear-to-t from-[#0A0E17] to-transparent z-10 pointer-events-none" />
      </div>
      <div className="border-t border-white/4 bg-[#0A0E17] px-8 py-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <div className="flex items-center gap-2 text-xs text-white/50">
              <div className="w-2 h-2 rounded-full bg-green-500/60" />
              <span>Focus mode: Execution discussions only</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 shrink-0">
              <button className="p-2.5 rounded-xl bg-white/2 border border-white/3 text-white/50 hover:text-white/70 hover:bg-white/4 transition-colors">
                <Paperclip size={18} />
              </button>
              <button className="p-2.5 rounded-xl bg-white/2 border border-white/3 text-white/50 hover:text-white/70 hover:bg-white/4 transition-colors">
                <Mic size={18} />
              </button>
            </div>
            <div className="flex-1 relative">
              <input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Discuss execution, blockers, or decisions… (Shift+Enter for new line)"
                className="w-full rounded-xl bg-white/2 border border-white/3 px-5 py-3.5 text-sm text-white placeholder-white/30 outline-none focus:border-indigo-500/40 focus:bg-white/3 transition-all"
              />
              {!message && (
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <span className="text-xs text-white/30 px-2 py-1 bg-white/2 rounded-md">
                    Enter to send
                  </span>
                </div>
              )}
            </div>
            <button
              className={`shrink-0 h-12 w-12 rounded-xl flex items-center justify-center transition-all ${
                message 
                  ? 'bg-linear-to-r from-indigo-500 to-blue-500 text-white shadow-lg shadow-indigo-500/20' 
                  : 'bg-white/3 border border-white/3 text-white/30'
              }`}
              disabled={!message}
            >
              <Send size={18} />
            </button>
          </div>
          <div className="flex items-center justify-between mt-3">
            <p className="text-xs text-white/40">
              Project-scoped • All messages are indexed for context
            </p>
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {['M', 'J', 'S'].map((initial, i) => (
                  <div 
                    key={i}
                    className="w-6 h-6 rounded-full border border-[#0A0E17] bg-linear-to-br from-blue-500/20 to-indigo-500/20 flex items-center justify-center text-xs text-white/60"
                  >
                    {initial}
                  </div>
                ))}
              </div>
              <span className="text-xs text-white/40">Team active</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProjectChat;