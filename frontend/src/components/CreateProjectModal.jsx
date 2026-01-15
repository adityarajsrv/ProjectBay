/* eslint-disable react/prop-types */
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const CreateProjectModal = ({ open, onClose, onCreate }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  if (!open) return null;

  const isValid = name.trim().length > 2;

  const handleCreate = () => {
    if (!isValid) return;

    onCreate({
      id: crypto.randomUUID(),
      name: name.trim(),
      description: description.trim(),
    });

    setName("");
    setDescription("");
    onClose();
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
      >
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ ease: "easeOut", duration: 0.25 }}
          className="w-full max-w-md rounded-2xl bg-[#0B0F1A] border border-white/10 p-6 shadow-xl"
        >
          <div className="flex items-start justify-between mb-5">
            <div>
              <h2 className="text-lg font-semibold text-white">
                Create a Project
              </h2>
              <p className="text-sm text-white/50 mt-1">
                Turn an idea into a technical execution roadmap
              </p>
            </div>
            <button onClick={onClose}>
              <X className="cursor-pointer text-white/60 hover:text-white" size={18} />
            </button>
          </div>
          <div className="space-y-4">
            <div>
              <label className="text-sm text-white/60">
                Project name <span className="text-white/40">(required)</span>
              </label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 w-full rounded-lg bg-[#0F1525] border border-white/10 px-3 py-2 text-white outline-none focus:border-indigo-500"
                placeholder="e.g. Developer Execution Platform"
                autoFocus
              />
            </div>
            <div>
              <label className="text-sm text-white/60">
                What are you trying to build?
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={4}
                className="mt-1 w-full rounded-lg bg-[#0F1525] border border-white/10 px-3 py-2 text-white outline-none focus:border-indigo-500 resize-none"
                placeholder="Briefly describe the idea. You can refine it later."
              />
            </div>
            <p className="text-xs text-white/40">
              This sets up a workspace where you’ll plan and execute the
              project.
            </p>
          </div>
          <div className="mt-6 flex justify-between items-center">
            <button
              onClick={onClose}
              className="cursor-pointer px-3 py-2 text-sm rounded-lg text-white/60 hover:text-white"
            >
              Cancel
            </button>
            <button
              onClick={handleCreate}
              disabled={!isValid}
              className={`cursor-pointer px-5 py-2 rounded-lg font-medium transition
                ${
                  isValid
                    ? "bg-indigo-500 text-black hover:bg-indigo-600"
                    : "bg-white/10 text-white/40 cursor-not-allowed"
                }`}
            >
              Create Project →
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CreateProjectModal;
