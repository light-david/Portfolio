"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, stagger, VIEWPORT } from "@/lib/motion";

export default function Contact() {
  const [primaryEmail,   setPrimaryEmail]   = useState("");
  const [secondaryEmail, setSecondaryEmail] = useState("");
  const [status, setStatus]                 = useState<"idle" | "sending" | "sent" | "error">("idle");
  const formRef                             = useRef<HTMLFormElement>(null);

  useEffect(() => {
    setPrimaryEmail(  "aroroted" + "@" + "gmail.com");
    setSecondaryEmail("darorote" + "@" + "gmail.com");
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Client-side demo — swap for a real API (Resend, Formspree, etc.)
    await new Promise((r) => setTimeout(r, 1400));
    setStatus("sent");
    formRef.current?.reset();
    setTimeout(() => setStatus("idle"), 4000);
  };

  const channels = [
    {
      icon: "📧",
      label: "Primary Email",
      value: primaryEmail || "···",
      href:  primaryEmail ? `mailto:${primaryEmail}` : undefined,
      accent: "#8b5cf6",
    },
    {
      icon: "📨",
      label: "Secondary Email",
      value: secondaryEmail || "···",
      href:  secondaryEmail ? `mailto:${secondaryEmail}` : undefined,
      accent: "#06b6d4",
    },
    {
      icon: "💼",
      label: "LinkedIn",
      value: "linkedin.com/in/david-arorote",
      href:  "https://www.linkedin.com/in/david-arorote",
      accent: "#e879f9",
    },
  ];

  return (
    <section id="contact" className="section-pad relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 pointer-events-none rounded-full blur-3xl opacity-[0.06]"
           style={{ background: "radial-gradient(circle,#06b6d4,transparent)" }} />

      <div className="container-xl mx-auto">
        <motion.div variants={stagger(0.06)} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <motion.p variants={fadeIn("up", 0)} className="section-label">Get in Touch</motion.p>
          <motion.h2 variants={fadeIn("up", 0.05)} className="section-title">
            Let's <span className="gradient-text">Work Together</span>
          </motion.h2>
          <motion.p variants={fadeIn("up", 0.1)} className="text-text-muted max-w-xl mb-14 text-base leading-relaxed">
            Whether it's a full-time opportunity, a consulting engagement, or just a conversation —
            I'm happy to connect. I typically respond within 24 hours.
          </motion.p>

          <div className="grid lg:grid-cols-[auto_1fr] gap-10">
            {/* Channels */}
            <motion.div variants={fadeIn("right", 0.1)} className="flex flex-col gap-4 lg:w-72">
              {channels.map((ch) => (
                <div
                  key={ch.label}
                  className="glass-card rounded-2xl p-5 flex items-center gap-4 group hover:border-opacity-40 transition-all"
                  style={{ borderColor: `${ch.accent}25` }}
                >
                  <span className="text-2xl">{ch.icon}</span>
                  <div className="min-w-0">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-text-muted2 mb-0.5">{ch.label}</p>
                    {ch.href ? (
                      <a
                        href={ch.href}
                        target={ch.href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="text-sm font-semibold truncate block hover:underline"
                        style={{ color: ch.accent }}
                      >
                        {ch.value}
                      </a>
                    ) : (
                      <span className="text-sm font-semibold text-text-muted truncate block">{ch.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Form */}
            <motion.div variants={fadeIn("left", 0.12)} className="glass-card rounded-2xl p-8">
              <h3 className="font-black text-text-primary text-lg mb-6">Send a Message</h3>
              <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="cf-name" className="block text-xs font-bold text-text-muted2 uppercase tracking-wider mb-1.5">
                      Name *
                    </label>
                    <input
                      id="cf-name" name="name" type="text" required autoComplete="name"
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-text-primary placeholder-text-muted2 focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="cf-email" className="block text-xs font-bold text-text-muted2 uppercase tracking-wider mb-1.5">
                      Email *
                    </label>
                    <input
                      id="cf-email" name="email" type="email" required autoComplete="email"
                      placeholder="you@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-text-primary placeholder-text-muted2 focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="cf-subject" className="block text-xs font-bold text-text-muted2 uppercase tracking-wider mb-1.5">
                    Subject
                  </label>
                  <input
                    id="cf-subject" name="subject" type="text" autoComplete="off"
                    placeholder="What's this about?"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-text-primary placeholder-text-muted2 focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="cf-message" className="block text-xs font-bold text-text-muted2 uppercase tracking-wider mb-1.5">
                    Message *
                  </label>
                  <textarea
                    id="cf-message" name="message" rows={5} required
                    placeholder="Tell me about your project or opportunity…"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-text-primary placeholder-text-muted2 focus:outline-none focus:border-accent transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "sending" || status === "sent"}
                  className="btn-primary self-start"
                >
                  {status === "sending" ? "Sending…" : status === "sent" ? "✓ Message Sent!" : "Send Message →"}
                </button>
                {status === "error" && (
                  <p className="text-red-400 text-sm">Something went wrong. Please try emailing directly.</p>
                )}
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
