import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="relative bg-[#0b0f1a] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between gap-12"
        >
          <div>
            <h3 className="text-2xl font-bold text-white">
              Pirate<span className="text-blue-500">Bay</span>.
            </h3>
            <p className="mt-4 text-gray-400 max-w-sm">
              A focused system for planning, collaboration, and execution -
              without tool sprawl.
            </p>
          </div>
          <div className="flex gap-16">
            <div>
              <h4 className="text-white font-medium mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="cursor-pointer">Roadmaps</li>
                <li className="cursor-pointer">Analytics</li>
                <li className="cursor-pointer">Collaboration</li>
                <li className="cursor-pointer">Pricing</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-medium mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="cursor-pointer">About</li>
                <li className="cursor-pointer">Blog</li>
                <li className="cursor-pointer">Careers</li>
                <li className="cursor-pointer">Contact</li>
              </ul>
            </div>
          </div>
        </motion.div>
        <div className="mt-16 flex flex-col md:flex-row justify-between items-center gap-6 border-t border-white/10 pt-8">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} PirateBay. All rights reserved.
          </p>
          <div className="flex gap-5 text-gray-400">
            <FaGithub className="w-5 h-5 hover:text-white transition" />
            <FaXTwitter className="w-5 h-5 hover:text-white transition" />
            <FaLinkedin className="w-5 h-5 hover:text-white transition" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
