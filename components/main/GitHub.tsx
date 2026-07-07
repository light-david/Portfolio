"use client";

import { motion } from "framer-motion";
import { fadeIn, stagger, VIEWPORT } from "@/lib/motion";
import { GITHUB_PROFILES } from "@/constants";

const GH_ICON = (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

export default function GitHub() {
  return (
    <section id="github" className="section-pad">
      <div className="container-xl mx-auto">
        <motion.div variants={stagger(0.06)} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <motion.p variants={fadeIn("up", 0)} className="section-label">Open Source</motion.p>
          <motion.h2 variants={fadeIn("up", 0.05)} className="section-title">
            My GitHub <span className="gradient-text">Presence</span>
          </motion.h2>
          <motion.p variants={fadeIn("up", 0.1)} className="text-text-muted max-w-xl mb-14 text-base leading-relaxed">
            Two GitHub profiles — one focused on ops & infrastructure, one on development & experiments.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-8">
            {GITHUB_PROFILES.map((profile, pi) => (
              <motion.div
                key={profile.username}
                variants={fadeIn(pi === 0 ? "left" : "right", 0.1 + pi * 0.06)}
                className="glass-card rounded-2xl p-7 flex flex-col gap-6 group relative overflow-hidden"
                style={{ borderColor: `${profile.accent}25` }}
              >
                {/* Background glow */}
                <div className="absolute top-0 right-0 w-48 h-48 rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                     style={{ background: `radial-gradient(circle,${profile.accent}12,transparent 70%)` }} />

                {/* Profile header */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                       style={{ background: `${profile.accent}20`, color: profile.accent }}>
                    {GH_ICON}
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-text-muted2 mb-0.5">{profile.label}</p>
                    <h3 className="font-black text-text-primary text-lg">@{profile.username}</h3>
                  </div>
                  <a
                    href={profile.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-auto px-4 py-2 rounded-full text-xs font-bold transition-all hover:scale-105"
                    style={{ background: `${profile.accent}20`, color: profile.accent, border: `1px solid ${profile.accent}30` }}
                  >
                    View Profile →
                  </a>
                </div>

                <p className="text-sm text-text-muted leading-relaxed">{profile.bio}</p>

                {/* Repos */}
                <div className="flex flex-col gap-2">
                  {profile.repos.map((repo) => (
                    <a
                      key={repo.name}
                      href={`${profile.url}/${repo.name}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 rounded-xl border transition-all hover:border-opacity-40 hover:bg-white/5"
                      style={{ borderColor: `${profile.accent}18` }}
                    >
                      <div className="flex items-center gap-2 min-w-0">
                        <svg className="w-3.5 h-3.5 flex-shrink-0 text-text-muted2" viewBox="0 0 16 16" fill="currentColor">
                          <path d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 010-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z" />
                        </svg>
                        <span className="text-xs font-mono font-semibold text-text-primary truncate">{repo.name}</span>
                      </div>
                      <div className="flex items-center gap-1.5 flex-shrink-0 ml-3">
                        <svg className="w-3 h-3 text-yellow-400" viewBox="0 0 16 16" fill="currentColor">
                          <path d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z" />
                        </svg>
                        <span className="text-[10px] font-bold text-text-muted2">{repo.stars}</span>
                      </div>
                    </a>
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
