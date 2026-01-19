import { motion } from "framer-motion";
import { Mail, MessageSquare } from "lucide-react";

const Contact = () => {
  return (
    <section className="relative py-32 bg-[#0b0f1a] overflow-hidden">
      <div className="absolute -top-40 left-1/3 w-130 h-130 bg-blue-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-105 h-105 bg-purple-600/10 rounded-full blur-3xl" />
      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Let’s talk about <span className="text-blue-500">your workflow</span>
          </h2>
          <p className="mt-6 text-lg text-gray-400 max-w-lg">
            Whether you’re planning a new product or fixing execution chaos,
            we’d love to hear what you’re building.
          </p>

          <div className="mt-10 space-y-4">
            <div className="flex items-center gap-4 text-gray-300">
              <Mail className="w-5 h-5 text-blue-400" />
              piratebay@email.com
            </div>
            <div className="flex items-center gap-4 text-gray-300">
              <MessageSquare className="w-5 h-5 text-purple-400" />
              Response within 24 hours
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="relative rounded-3xl p-10 bg-linear-to-br from-[#0b0f1a]/80 to-[#10162b]/80
          backdrop-blur-xl border border-white/10
          shadow-[0_0_80px_-20px_rgba(99,102,241,0.3)]"
        >
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Your name"
              className="w-full px-4 py-3 rounded-xl bg-[#0b0f1a] border border-white/10
              text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
            />
            <input
              type="email"
              placeholder="Email address"
              className="w-full px-4 py-3 rounded-xl bg-[#0b0f1a] border border-white/10
              text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
            />
            <textarea
              rows={4}
              placeholder="Tell us about your project"
              className="w-full px-4 py-3 rounded-xl bg-[#0b0f1a] border border-white/10
              text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
            />
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700
              transition text-white font-medium"
            >
              Send message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
