"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, stagger, VIEWPORT } from "@/lib/motion";

const FACTS = [
  { icon: "📍", label: "Location",  valueStatic: "Lagos, Nigeria"                      },
  { icon: "🎯", label: "Focus",     valueStatic: "Cloud & Data Engineering"            },
  { icon: "🔗", label: "LinkedIn",  valueStatic: "linkedin.com/in/david-arorote", href: "https://www.linkedin.com/in/david-arorote" },
  { icon: "💼", label: "Status",    valueStatic: "Open to Work"                        },
];

export default function About() {
  const [email, setEmail] = useState("");
  useEffect(() => { setEmail("aroroted" + "@" + "gmail.com"); }, []);

  const factsWithEmail = [
    FACTS[0],
    FACTS[1],
    { icon: "✉️", label: "Email", valueStatic: email || "···", href: email ? `mailto:${email}` : undefined },
    FACTS[2],
    FACTS[3],
  ];

  return (
    <section id="about" className="section-pad relative overflow-hidden">
      {/* Grid background accent */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
           style={{ backgroundImage: "linear-gradient(rgba(139,92,246,1) 1px,transparent 1px),linear-gradient(90deg,rgba(139,92,246,1) 1px,transparent 1px)", backgroundSize: "60px 60px" }} />

      <div className="container-xl mx-auto">
        <motion.div
          variants={stagger(0.1)} initial="hidden" whileInView="visible" viewport={VIEWPORT}
          className="grid lg:grid-cols-[1fr_1.1fr] gap-16 items-center"
        >
          {/* Left — text */}
          <div>
            <motion.p variants={fadeIn("up", 0)} className="section-label">About Me</motion.p>
            <motion.h2 variants={fadeIn("up", 0.05)} className="section-title">
              Building at the edge<br />
              <span className="gradient-text">of data & cloud</span>
            </motion.h2>
            <motion.div variants={fadeIn("up", 0.1)} className="space-y-4 text-text-muted leading-relaxed">
              <p>
                I'm a Full-Stack Developer and Data Engineer with 7+ years turning complex technical
                challenges into scalable, reliable systems. My work sits at the intersection of
                cloud infrastructure, data engineering, and machine learning — designing architectures
                that can grow from prototype to production without breaking a sweat.
              </p>
              <p>
                From building multi-cloud data pipelines that process hundreds of millions of events
                daily to shipping customer-facing React applications, I bring both depth and breadth
                to every engagement. I'm equally comfortable reviewing a Terraform plan, writing a
                dbt model, or debugging a React re-render.
              </p>
              <p>
                When I'm not engineering, I'm mentoring developers entering the cloud space and
                contributing to open-source tooling I actually use in production.
              </p>
            </motion.div>
          </div>

          {/* Right — fact card */}
          <motion.div variants={fadeIn("left", 0.15)} className="glass-card glow-purple rounded-2xl p-8 space-y-4">
            <h3 className="text-sm font-bold text-text-muted uppercase tracking-widest mb-6">Quick Facts</h3>
            {factsWithEmail.map((fact) => (
              <div key={fact.label} className="flex items-start gap-4 py-3 border-b border-white/5 last:border-0">
                <span className="text-xl mt-0.5 flex-shrink-0">{fact.icon}</span>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 min-w-0">
                  <span className="text-xs font-bold text-text-muted2 uppercase tracking-wider w-20 flex-shrink-0">
                    {fact.label}
                  </span>
                  {fact.href ? (
                    <a
                      href={fact.href}
                      target={fact.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-accent hover:underline truncate"
                    >
                      {fact.valueStatic}
                    </a>
                  ) : (
                    <span
                      className={`text-sm font-medium truncate ${
                        fact.label === "Status"
                          ? "text-green-400"
                          : "text-text-primary"
                      }`}
                    >
                      {fact.label === "Status" && (
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-400 mr-2 animate-pulse" />
                      )}
                      {fact.valueStatic}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
