"use client";

import { motion } from "framer-motion";
import { fadeIn, stagger, scaleIn, VIEWPORT } from "@/lib/motion";
import { SKILL_CATEGORIES } from "@/constants";

function SkillBar({ name, level, accent, index }: { name: string; level: number; accent: string; index: number }) {
  return (
    <motion.div
      variants={fadeIn("up", index * 0.04)}
      className="flex items-center gap-3"
    >
      <span className="text-xs font-medium text-text-muted w-24 flex-shrink-0 truncate">{name}</span>
      <div className="flex-1 h-1.5 rounded-full bg-white/5 overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${accent}, ${accent}99)` }}
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1, delay: 0.1 + index * 0.06, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
      <span className="text-[10px] font-bold text-text-muted2 w-8 text-right">{level}%</span>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section-pad">
      <div className="container-xl mx-auto">
        <motion.div
          variants={stagger(0.05)} initial="hidden" whileInView="visible" viewport={VIEWPORT}
        >
          <motion.p variants={fadeIn("up", 0)} className="section-label">What I Work With</motion.p>
          <motion.h2 variants={fadeIn("up", 0.05)} className="section-title">
            Skills & <span className="gradient-text">Expertise</span>
          </motion.h2>
          <motion.p variants={fadeIn("up", 0.1)} className="text-text-muted max-w-xl mb-14 text-base leading-relaxed">
            Seven years building production systems across the full data and cloud stack —
            from API design to distributed ETL to ML model deployment.
          </motion.p>

          <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {SKILL_CATEGORIES.map((cat, ci) => (
              <motion.div
                key={cat.id}
                variants={scaleIn(ci * 0.08)}
                className="glass-card rounded-2xl p-6 flex flex-col gap-5 hover:border-opacity-40 transition-all group relative overflow-hidden"
                style={{ borderColor: `${cat.accent}30` }}
              >
                {/* Glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                  style={{ background: `radial-gradient(circle at 50% 0%, ${cat.accent}12, transparent 70%)` }}
                />

                {/* Header */}
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{cat.emoji}</span>
                  <h3 className="font-black text-text-primary text-sm tracking-wide">{cat.title}</h3>
                </div>

                {/* Skill bars */}
                <motion.div
                  variants={stagger(0.05, 0.1)} initial="hidden" whileInView="visible" viewport={VIEWPORT}
                  className="flex flex-col gap-3"
                >
                  {cat.skills.map((skill, si) => (
                    <SkillBar key={skill.name} {...skill} accent={cat.accent} index={si} />
                  ))}
                </motion.div>

                {/* Pills */}
                <div className="flex flex-wrap gap-1.5 mt-auto pt-3 border-t border-white/5">
                  {cat.pills.map((pill) => (
                    <span
                      key={pill}
                      className="text-[10px] font-semibold px-2.5 py-1 rounded-full"
                      style={{ background: `${cat.accent}15`, color: cat.accent, border: `1px solid ${cat.accent}30` }}
                    >
                      {pill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
