"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Code } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-black text-white  pb-10 py-10">
      {/* Green Accent Line */}
      <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-green-500 to-transparent mb-10" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10"
      >
        {/* Identity */}
        <div>
          <h2 className="text-xl font-semibold">
            Hatim Materwala<span className="text-green-500">.</span>
          </h2>
          <p className="text-sm text-white/60 mt-2">
            Software Engineer · Looking for Summer 2026 Internships
          </p>
          <p className="text-sm text-white/40 mt-1">
            Building clean systems & meaningful products.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-2 text-sm">
          <a href="#about" className="hover:text-green-400 transition">
            About
          </a>
          <a href="#projects" className="hover:text-green-400 transition">
            Projects
          </a>
          <a href="#experience" className="hover:text-green-400 transition">
            Experience
          </a>
          <a href="#contact" className="hover:text-green-400 transition">
            Contact
          </a>
        </div>

        {/* Socials */}
        {/* Socials */}
        <div className="flex flex-col gap-3 text-sm">
          <a
            href="https://github.com/HatimMaterwala"
            target="_blank"
            className="flex items-center gap-2 hover:text-green-400 transition"
          >
            <Github size={18} />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/hatim-materwala"
            target="_blank"
            className="flex items-center gap-2 hover:text-green-400 transition"
          >
            <Linkedin size={18} />
            LinkedIn
          </a>

          <a
            href="https://leetcode.com/u/HYPNODOX/"
            target="_blank"
            className="flex items-center gap-2 hover:text-green-400 transition"
          >
            <Code size={18} />
            LeetCode
          </a>

          <a
            href="mailto:hatimmater1234@gmail.com"
            className="flex items-center gap-2 hover:text-green-400 transition"
          >
            <Mail size={18} />
            Email
          </a>
        </div>
      </motion.div>

      {/* Bottom line */}
      <div className="mt-12 text-center text-xs text-white/40">
        Built with care by Hatim. Still learning. Always shipping.
      </div>
    </footer>
  );
}
