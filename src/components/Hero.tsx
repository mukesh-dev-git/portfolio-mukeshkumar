import { useState } from "react";
import { motion } from "framer-motion";
import { profile } from "../data/content";
import { easeOutBack, hoverMorph } from "../motion";

const rise = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export default function Hero() {
  const [ctaHover, setCtaHover] = useState<"portfolio" | "hire">("portfolio");

  return (
    <section id="home" className="hero">
      <div className="hero-head">
        <motion.div className="hello" {...rise(0.1)}>
          <span className="hello-pill">Hello!</span>
          <motion.img
            src="/assets/figma/hello-doodle.svg"
            alt=""
            className="hello-doodle"
            animate={{ rotate: [0, -10, 0], scale: [1, 1.12, 1] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
        <motion.h1 className="hero-title" {...rise(0.2)}>
          I’m <span className="accent">{profile.firstName}</span>,
          <span className="role">{profile.role}</span>
        </motion.h1>
        <motion.img
          src="/assets/figma/arc-doodle.svg"
          alt=""
          className="arc-doodle"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.6, ease: easeOutBack }}
        />
      </div>

      <div className="hero-sides">
        <motion.div className="hero-side hero-quote" {...rise(0.5)}>
          <img src="/assets/figma/quote-up.svg" alt="" width={36} height={36} />
          <p>{profile.heroQuote}</p>
        </motion.div>

        <motion.div className="hero-side hero-badge" {...rise(0.6)}>
          <div className="stars" aria-hidden>
            {Array.from({ length: 5 }).map((_, i) => (
              <motion.img
                key={i}
                src="/assets/figma/star.svg"
                alt=""
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + i * 0.08, duration: 0.4, ease: easeOutBack }}
              />
            ))}
          </div>
          <strong>SIH 2025</strong>
          <span>Winner, Team Lead</span>
        </motion.div>
      </div>

      <div className="hero-stage">
        <motion.div
          className="hero-semicircle"
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: easeOutBack }}
        />
        <motion.img
          src={profile.photo.src}
          alt={`${profile.fullName}`}
          className={`hero-photo${profile.photo.cutout ? "" : " framed"}`}
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.div
          className="hero-cta"
          initial={{ y: 30, opacity: 0, x: "-50%" }}
          animate={{ y: 0, opacity: 1, x: "-50%" }}
          transition={{ delay: 1, duration: 0.6, ease: easeOutBack }}
          onMouseLeave={() => setCtaHover("portfolio")}
        >
          <a href="#projects" onMouseEnter={() => setCtaHover("portfolio")} onFocus={() => setCtaHover("portfolio")}>
            {ctaHover === "portfolio" && <motion.span layoutId="hero-cta-pill" className="cta-pill" transition={hoverMorph} />}
            Portfolio
            <img src="/assets/figma/arrow-up-right-white.svg" alt="" />
          </a>
          <a href="#contact" onMouseEnter={() => setCtaHover("hire")} onFocus={() => setCtaHover("hire")}>
            {ctaHover === "hire" && <motion.span layoutId="hero-cta-pill" className="cta-pill" transition={hoverMorph} />}
            Hire me
          </a>
        </motion.div>
      </div>
    </section>
  );
}
