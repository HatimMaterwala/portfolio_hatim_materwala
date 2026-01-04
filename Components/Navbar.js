"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Code, Menu, X } from "lucide-react";

const links = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* DESKTOP NAV */}
      <motion.nav
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="hidden md:flex fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-black/60 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 items-center gap-6 shadow-xl"
      >
        <span className="text-white font-semibold">
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

        <div className="flex gap-3 ml-2">
          <a href="https://github.com/HatimMaterwala" target="_blank">
            <Github size={18} className="hover:text-green-400" />
          </a>
          <a href="https://www.linkedin.com/in/hatim-materwala" target="_blank">
            <Linkedin size={18} className="hover:text-green-400" />
          </a>
          <a href="https://leetcode.com/u/HYPNODOX/" target="_blank">
            <Code size={18} className="hover:text-green-400" />
          </a>
        </div>
      </motion.nav>

      {/* MOBILE NAV */}
      <div className="md:hidden fixed top-4 left-4 right-4 z-50 flex items-center justify-between bg-black/60 backdrop-blur-xl border border-white/10 rounded-xl px-4 py-3">
        <span className="text-white font-semibold">
          Hatim<span className="text-green-500">.</span>
        </span>

        <button onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden fixed top-20 left-4 right-4 z-40 bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 space-y-4 shadow-2xl"
          >
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block text-white/80 hover:text-green-400 transition text-lg"
              >
                {link.name}
              </a>
            ))}

            <div className="flex gap-4 pt-4 border-t border-white/10">
              <a href="https://github.com/HatimMaterwala" target="_blank">
                <Github />
              </a>
              <a href="https://www.linkedin.com/in/hatim-materwala" target="_blank">
                <Linkedin />
              </a>
              <a href="https://leetcode.com/u/HYPNODOX/" target="_blank">
                <Code />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
