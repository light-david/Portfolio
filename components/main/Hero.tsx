"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { HERO_STATS } from "@/constants";

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [val, setVal]   = useState(0);
  const started         = useRef(false);
  const ref             = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1800;
          const start    = performance.now();
          const tick = (now: number) => {
            const p = Math.min((now - start) / duration, 1);
            const e = 1 - Math.pow(1 - p, 4);
            setVal(Math.floor(e * target));
            if (p < 1) requestAnimationFrame(tick);
            else setVal(target);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target]);

  return <span ref={ref}>{val}{suffix}</span>;
}

export default function Hero() {
  const [email, setEmail] = useState("");
  useEffect(() => { setEmail("aroroted" + "@" + "gmail.com"); }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-24 pb-16 px-6"
    >
      {/* Decorative floating orbs */}
      <div className="absolute top-20 right-[8%]  w-80 h-80 rounded-full pointer-events-none"
           style={{ background: "radial-gradient(circle,rgba(139,92,246,.1),transparent 70%)", animation: "float 7s ease-in-out infinite" }} />
      <div className="absolute bottom-20 left-[4%] w-60 h-60 rounded-full pointer-events-none"
           style={{ background: "radial-gradient(circle,rgba(6,182,212,.08),transparent 70%)", animation: "float 9s ease-in-out infinite 2s" }} />

      <div className="container-xl mx-auto w-full">
        <div className="grid lg:grid-cols-[1fr_auto] gap-16 items-center">

          {/* ── Text column ── */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border text-xs font-semibold"
              style={{ borderColor: "rgba(139,92,246,.3)", background: "rgba(139,92,246,.08)", color: "#c4b5fd" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Open to Work · Lagos, Nigeria
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] mb-6"
            >
              Hi, I'm{" "}
              <span className="gradient-text">David</span>
              <br />
              <span className="text-text-primary">Arorote</span>
            </motion.h1>

            {/* Sub */}
            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg sm:text-xl text-text-muted max-w-xl mb-10 leading-relaxed"
            >
              Full-Stack Developer & Data Engineer — crafting cloud infrastructure,
              machine learning pipelines, and statistical data systems that{" "}
              <span className="text-text-primary font-medium">turn raw data into real impact</span>.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap gap-4 mb-14"
            >
              <a href="#projects" className="btn-primary">
                View Projects →
              </a>
              <a
                href={email ? `mailto:${email}` : "#contact"}
                className="btn-ghost"
              >
                Download CV
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap gap-8"
            >
              {HERO_STATS.map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="text-3xl font-black gradient-text">
                    <Counter target={stat.value} suffix={stat.suffix} />
                  </span>
                  <span className="text-xs text-text-muted2 font-medium mt-0.5 tracking-wide uppercase">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Photo column ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:flex justify-center items-center"
          >
            <div className="relative">
              {/* Rotating ring */}
              <div
                className="absolute inset-[-12px] rounded-full border border-accent/30"
                style={{ animation: "spin 20s linear infinite" }}
              />
              <div
                className="absolute inset-[-24px] rounded-full border border-accent-cyan/20"
                style={{ animation: "spin 30s linear infinite reverse" }}
              />
              {/* Glow */}
              <div className="absolute inset-0 rounded-full blur-3xl opacity-30"
                   style={{ background: "radial-gradient(circle,#8b5cf6,#06b6d4,transparent)" }} />
              {/* Photo frame */}
              <div
                className="relative w-64 h-64 rounded-full overflow-hidden"
                style={{ padding: "3px", background: "linear-gradient(135deg,#8b5cf6,#06b6d4,#e879f9)" }}
              >
                <div className="w-full h-full rounded-full overflow-hidden bg-deep-space flex items-center justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/profile.jpg"
                    alt="David Arorote"
                    className="w-full h-full object-cover object-center"
                    onError={(e) => {
                      const el = e.currentTarget;
                      el.style.display = "none";
                      (el.nextElementSibling as HTMLElement)!.style.display = "flex";
                    }}
                  />
                  <div
                    className="w-full h-full hidden items-center justify-center text-6xl"
                    aria-hidden
                  >
                    👤
                  </div>
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-3 -right-3 glass-card rounded-xl px-3 py-2 text-xs font-bold"
                   style={{ borderColor: "rgba(139,92,246,.3)" }}>
                <span className="gradient-text">7+ Years</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
      >
        <span className="text-[10px] tracking-widest uppercase text-text-muted2">Scroll</span>
        <div className="w-px h-8 relative overflow-hidden">
          <div className="absolute top-0 w-full rounded-full"
               style={{ height: "50%", background: "linear-gradient(to bottom,#8b5cf6,transparent)", animation: "float 1.8s ease-in-out infinite" }} />
        </div>
      </motion.div>
    </section>
  );
}
