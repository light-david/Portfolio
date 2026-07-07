"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn, stagger, VIEWPORT } from "@/lib/motion";
import { PROJECTS } from "@/constants";

const FILTERS = [
  { label: "All",         value: "all"        },
  { label: "Mine",        value: "mine"       },
  { label: "Explored",    value: "explored"   },
  { label: "Contributed", value: "contributed"},
];

function ProjectCard({ project, index }: { project: typeof PROJECTS[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const [mx, setMx]           = useState("50%");
  const [my, setMy]           = useState("50%");

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    setMx(`${e.clientX - r.left}px`);
    setMy(`${e.clientY - r.top}px`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{    opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
      layout
      className="glass-card rounded-2xl p-6 flex flex-col gap-4 relative overflow-hidden group cursor-default"
      style={{ borderColor: `${project.accent}28` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMove}
    >
      {/* Spotlight */}
      {hovered && (
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300"
          style={{ background: `radial-gradient(200px circle at ${mx} ${my}, ${project.accent}14, transparent 70%)` }}
        />
      )}

      {/* Top accent line */}
      <div className="h-0.5 w-12 rounded-full" style={{ background: project.accent }} />

      {/* Category badge */}
      <div className="flex items-center justify-between">
        <span
          className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full"
          style={{ background: `${project.accent}18`, color: project.accent }}
        >
          {project.category}
        </span>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="w-8 h-8 rounded-lg flex items-center justify-center transition-all hover:bg-white/10"
          aria-label={`GitHub: ${project.title}`}
        >
          <svg className="w-4 h-4 text-text-muted" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
          </svg>
        </a>
      </div>

      <h3 className="font-black text-text-primary text-base leading-snug">{project.title}</h3>
      <p className="text-sm text-text-muted leading-relaxed flex-1">{project.description}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5">
        {project.tags.map((tag) => (
          <span key={tag} className="tag-pill text-[10px]">{tag}</span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [active, setActive] = useState("all");

  const filtered = PROJECTS.filter((p) => active === "all" || p.category === active);

  return (
    <section id="projects" className="section-pad">
      <div className="container-xl mx-auto">
        <motion.div variants={stagger(0.05)} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <motion.p variants={fadeIn("up", 0)} className="section-label">Portfolio</motion.p>
          <motion.h2 variants={fadeIn("up", 0.05)} className="section-title">
            What I've <span className="gradient-text">Built</span>
          </motion.h2>
          <motion.p variants={fadeIn("up", 0.1)} className="text-text-muted max-w-xl mb-10 text-base leading-relaxed">
            A selection of projects spanning cloud infrastructure, data engineering, and full-stack development.
          </motion.p>

          {/* Filter tabs */}
          <motion.div variants={fadeIn("up", 0.12)} className="flex flex-wrap gap-2 mb-10">
            {FILTERS.map((f) => (
              <button
                key={f.value}
                onClick={() => setActive(f.value)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  active === f.value
                    ? "text-white"
                    : "glass-card text-text-muted hover:text-text-primary"
                }`}
                style={
                  active === f.value
                    ? { background: "linear-gradient(135deg,#8b5cf6,#06b6d4)", boxShadow: "0 0 18px rgba(139,92,246,.4)" }
                    : {}
                }
              >
                {f.label}
              </button>
            ))}
          </motion.div>

          {/* Grid */}
          <motion.div
            layout
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
