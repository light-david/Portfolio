import type { Variants } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

export const fadeUp = (delay = 0, duration = 0.65): Variants => ({
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration, delay, ease: EASE } },
});

export const fadeIn = (
  direction: "up" | "down" | "left" | "right",
  delay = 0,
  duration = 0.65
): Variants => ({
  hidden: {
    opacity: 0,
    y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
    x: direction === "left" ? 50 : direction === "right" ? -50 : 0,
  },
  visible: { opacity: 1, y: 0, x: 0, transition: { duration, delay, ease: EASE } },
});

export const stagger = (staggerChildren = 0.08, delayChildren = 0): Variants => ({
  hidden:  {},
  visible: { transition: { staggerChildren, delayChildren } },
});

export const scaleIn = (delay = 0): Variants => ({
  hidden:  { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, delay, ease: EASE } },
});

export const slideUp: Variants = {
  hidden:  { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0,  transition: { duration: 0.7, ease: EASE } },
};

export const VIEWPORT = { once: true, margin: "-80px" } as const;
