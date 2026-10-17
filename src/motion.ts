import type { Transition, Variants } from "framer-motion";

// Easing curves matching the Figma prototype's Smart Animate settings.
export const easeInOutBack = [0.68, -0.6, 0.32, 1.6] as const;
export const easeOutBack = [0.34, 1.56, 0.64, 1] as const;

export const hoverMorph: Transition = { duration: 0.3, ease: easeInOutBack };
export const clickMorph: Transition = { duration: 0.3, ease: easeOutBack };
export const gentle: Transition = { type: "spring", stiffness: 100, damping: 15 };
export const quick: Transition = { type: "spring", stiffness: 300, damping: 20 };

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

export const inView = { initial: "hidden", whileInView: "show", viewport: { once: true, amount: 0.25 } } as const;
