"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn, stagger, VIEWPORT } from "@/lib/motion";
import { FAQ_ITEMS } from "@/constants";

function FAQItem({ item, index }: { item: typeof FAQ_ITEMS[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      variants={fadeIn("up", index * 0.06)}
      className={`glass-card rounded-2xl overflow-hidden transition-all ${open ? "border-accent/30" : ""}`}
    >
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-4 p-6 text-left"
      >
        <span className="font-bold text-text-primary text-sm leading-snug">{item.q}</span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-text-muted border border-white/10"
          aria-hidden
        >
          +
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{   height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-6 text-sm text-text-muted leading-relaxed border-t border-white/5 pt-4">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="section-pad">
      <div className="container-xl mx-auto max-w-3xl">
        <motion.div variants={stagger(0.05)} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <motion.p variants={fadeIn("up", 0)} className="section-label">FAQ</motion.p>
          <motion.h2 variants={fadeIn("up", 0.05)} className="section-title">
            Common <span className="gradient-text">Questions</span>
          </motion.h2>
          <motion.p variants={fadeIn("up", 0.1)} className="text-text-muted mb-12 text-base leading-relaxed">
            Things people often ask before reaching out.
          </motion.p>

          <div className="flex flex-col gap-3">
            {FAQ_ITEMS.map((item, i) => (
              <FAQItem key={i} item={item} index={i} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
