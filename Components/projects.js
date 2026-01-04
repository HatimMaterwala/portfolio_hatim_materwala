"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: "01",
    title: "DevConnect – Full Stack Social Platform",
    description:
      "A LinkedIn-style social network for developers with authentication, follow system, media posts, likes, comments, and full profile management. Built with scalable architecture and deployed to production.",
    tech: ["Next.js", "MongoDB", "NextAuth", "Tailwind", "Vercel"],
    link: "#",
    thumbnail: "assets/img/devconnect.png",
  },
  {
    id: "02",
    title: "Store IT – Google Drive Clone",
    description:
      "A cloud file storage platform supporting upload, update, delete, sharing, and secure OTP-based authentication. Designed with strong access control and real-world file handling.",
    tech: ["Next.js", "TypeScript", "Appwrite", "Auth", "Cloud Storage"],
    link: "#",
    thumbnail: "assets/img/storeit.png",
  },
  {
    id: "03",
    title: "YT Anything – Video Automation Tool",
    description:
      "A full-stack automation tool that processes YouTube links, validates inputs, downloads content securely, and cleans up resources efficiently. Backend deployed separately from frontend.",
    tech: ["FastAPI", "Python", "Next.js", "Railway", "Vercel"],
    link: "#",
    thumbnail: "assets/img/ytanything.png",
  },
  {
    id: "04",
    title: "Book Explorer – WEB422 Final Project",
    description:
      "A book discovery platform using Open Library APIs with pagination, user profiles, favorites management via Jotai, and cookie-based authentication using Express.",
    tech: ["Next.js", "Express", "Jotai", "REST APIs"],
    link: "#",
    thumbnail: "assets/img/bookexplorer.png",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-black text-white pt-1 px-6">
        <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-green-500 to-transparent my-15" />
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h2 className="text-4xl font-bold text-green-500 mb-4">
            Selected Projects
          </h2>
          <p className="text-gray-400 max-w-xl">
            A focused selection of production-grade projects demonstrating
            full-stack engineering, system design, and real-world problem solving.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="space-y-14">
          {projects.map((project, index) => (
            <motion.a
              key={project.id}
              href={project.link}
              target="_blank"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group grid md:grid-cols-3 gap-8 items-center border border-white/10 rounded-2xl p-6 hover:border-green-500/60 transition-all"
            >
              {/* Thumbnail */}
              <div className="relative overflow-hidden rounded-xl bg-white/5 border border-green-400 shadow-2xl shadow-green-700">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="md:col-span-2">
                <div className="flex items-center justify-between">
                  <span className="text-green-600 text-sm font-mono">
                    {project.id}
                  </span>
                  <ArrowUpRight className="text-green-500 opacity-0 group-hover:opacity-100 transition" />
                </div>

                <h3 className="text-2xl font-semibold mt-3 group-hover:text-green-400 transition">
                  {project.title}
                </h3>

                <p className="text-gray-400 mt-3 max-w-2xl">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3 mt-5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1 rounded-full border border-green-800 text-green-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
