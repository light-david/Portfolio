"use client";

import { motion } from "framer-motion";
import { fadeIn, stagger, VIEWPORT } from "@/lib/motion";
import { EXPERIENCE } from "@/constants";

export default function Experience() {
  return (
    <section id="experience" className="section-pad relative overflow-hidden">
      {/* Side glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 rounded-full pointer-events-none blur-3xl opacity-[0.06]"
           style={{ background: "radial-gradient(circle,#8b5cf6,transparent)" }} />

      <div className="container-xl mx-auto">
        <motion.div variants={stagger(0.06)} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <motion.p variants={fadeIn("up", 0)} className="section-label">Career</motion.p>
          <motion.h2 variants={fadeIn("up", 0.05)} className="section-title">
            Work <span className="gradient-text">Experience</span>
          </motion.h2>
          <motion.p variants={fadeIn("up", 0.1)} className="text-text-muted max-w-xl mb-14 text-base leading-relaxed">
            Seven years building across data engineering, cloud infrastructure, and full-stack development.
          </motion.p>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-2 bottom-2 w-px hidden md:block"
                 style={{ background: "linear-gradient(to bottom,rgba(139,92,246,0),rgba(139,92,246,.4),rgba(139,92,246,0))" }} />

            <div className="flex flex-col gap-10">
              {EXPERIENCE.map((job, i) => (
                <motion.div
                  key={job.id}
                  variants={fadeIn("up", i * 0.08)}
                  className="group md:pl-20 relative"
                >
                  {/* Timeline dot */}
                  <div
                    className="absolute left-[18px] top-6 hidden md:block w-4 h-4 rounded-full border-2 border-deep-space transition-transform group-hover:scale-125"
                    style={{ background: job.accent, boxShadow: `0 0 12px ${job.accent}80` }}
                  />

                  {/* Card */}
                  <div
                    className="glass-card rounded-2xl p-6 relative overflow-hidden hover:border-opacity-40 transition-all"
                    style={{ borderColor: `${job.accent}25` }}
                  >
                    {/* Hover glow */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                      style={{ background: `radial-gradient(circle at 0% 50%, ${job.accent}0a, transparent 70%)` }}
                    />

                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                      <div>
                        <h3 className="font-black text-text-primary text-lg">{job.role}</h3>
                        <p className="text-sm font-semibold" style={{ color: job.accent }}>{job.company}</p>
                      </div>
                      <div className="flex flex-col sm:items-end gap-1 flex-shrink-0">
                        <span className="text-xs font-bold px-3 py-1 rounded-full"
                              style={{ background: `${job.accent}18`, color: job.accent }}>
                          {job.period}
                        </span>
                        <span className="text-[10px] text-text-muted2">{job.location}</span>
                      </div>
                    </div>

                    <p className="text-sm text-text-muted leading-relaxed mb-4">{job.description}</p>

                    <div className="flex flex-wrap gap-1.5">
                      {job.tags.map((tag) => (
                        <span key={tag} className="tag-pill">{tag}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
