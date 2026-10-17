import { useState, type CSSProperties } from "react";
import { motion } from "framer-motion";
import { services } from "../data/content";
import { fadeUp, gentle, hoverMorph, inView, stagger } from "../motion";
import Dots from "./Dots";
import { useCarousel } from "./useCarousel";

function Blob({ style, delay, size }: { style: CSSProperties; delay: number; size: number }) {
  return (
    <motion.img
      src="/assets/figma/orange-blob.webp"
      alt=""
      className="blob"
      style={{ width: size, ...style }}
      animate={{ y: [0, -24, 0], rotate: [0, 8, 0] }}
      transition={{ duration: 12, delay, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

export default function Services() {
  const [hovered, setHovered] = useState<number | null>(null);
  const { trackRef, index, goTo } = useCarousel(services.length);

  return (
    <section id="about" className="dark-section">
      <img src="/assets/figma/dark-texture.webp" alt="" className="texture" />
      <Blob size={420} delay={0} style={{ left: -200, top: 260, filter: "blur(1.5px)" }} />
      <Blob size={170} delay={2} style={{ left: "38%", top: 20, filter: "blur(2.5px)" }} />
      <Blob size={620} delay={4} style={{ right: -260, bottom: -240 }} />

      <div className="container">
        <motion.div className="services-head" variants={stagger} {...inView}>
          <motion.h2 variants={fadeUp}>
            What <span className="accent">I Do</span>
          </motion.h2>
          <motion.p variants={fadeUp}>
            I work across the stack, from model training and LLM agents to firmware and web apps, and I like to measure the result
            before I call it done.
          </motion.p>
        </motion.div>

        <motion.div className="track" ref={trackRef} variants={stagger} {...inView}>
          {services.map((s, i) => {
            const active = hovered === i;
            return (
              <motion.article
                key={s.title}
                className="service-card"
                variants={fadeUp}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                onFocus={() => setHovered(i)}
                onBlur={() => setHovered(null)}
                tabIndex={0}
              >
                <div className="service-shape">
                  <motion.div className="service-fill" initial={false} animate={{ opacity: active ? 1 : 0 }} transition={hoverMorph} />
                </div>
                <div className="service-body">
                  <h3>{s.title}</h3>
                  <div className="rule" />
                  <p>{s.blurb}</p>
                  <div className="service-stack">
                    <div className="stack-sheet s1" />
                    <div className="stack-sheet s2" />
                    <div className="stack-front">
                      {s.stack.map((t) => (
                        <span key={t} className="chip">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <motion.span
                  className="card-arrow icon-btn"
                  initial={false}
                  animate={{ backgroundColor: active ? "#FD853A" : "#1D2939", rotate: active ? 45 : 0 }}
                  transition={gentle}
                  aria-hidden
                >
                  <img src="/assets/figma/arrow-up-right-card.svg" alt="" />
                </motion.span>
              </motion.article>
            );
          })}
        </motion.div>
        <Dots count={services.length} index={index} onSelect={goTo} label="Skill area" />
      </div>
    </section>
  );
}
