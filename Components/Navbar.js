"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Code } from "lucide-react";

const links = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-black/60 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 flex items-center gap-6 shadow-xl"
    >
      <span className="text-white font-semibold tracking-wide">
        Hatim<span className="text-green-500">.</span>
      </span>

      <div className="flex gap-4 text-sm text-white/70">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="hover:text-green-400 transition"
          >
            {link.name}
          </a>
        ))}
      </div>

      <div className="flex gap-3 ml-4">
        <a href="https://github.com/HatimMaterwala  " target="_blank" className="hover:text-green-400"><Github size={18} /></a>
        <a href="www.linkedin.com/in/hatim-materwala" target="_blank" className="hover:text-green-400"><Linkedin size={18} /></a>
        <a href="https://leetcode.com/u/HYPNODOX/" target="_blank" className="hover:text-green-400"><Code size={18} /></a>
      </div>
    </motion.nav>
  );
}
