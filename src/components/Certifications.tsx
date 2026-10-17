import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { certifications } from "../data/content";
import { clickMorph, fadeUp, gentle, hoverMorph, inView, stagger } from "../motion";

const palettes = [
  ["#7C3AED", "#C4B5FD"],
  ["#0E9F6E", "#6EE7B7"],
  ["#F59E0B", "#FDE68A"],
];

export default function Certifications() {
  const [showAll, setShowAll] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const shown = showAll ? certifications : certifications.slice(0, 3);

  return (
    <section className="container certs">
      <motion.div className="certs-head" variants={stagger} {...inView}>
        <motion.h2 variants={fadeUp}>
          Certifications
          <br />& courses
        </motion.h2>
        <motion.button
          variants={fadeUp}
          className="btn btn-primary"
          onClick={() => setShowAll((s) => !s)}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.95 }}
          transition={hoverMorph}
        >
          {showAll ? "Show Less" : "See All"}
        </motion.button>
      </motion.div>

      <motion.div className="cert-grid" layout transition={clickMorph}>
        <AnimatePresence initial={false}>
          {shown.map((c, i) => {
            const [from, to] = palettes[i % palettes.length];
            const hot = hovered === c.title;
            return (
              <motion.a
                key={c.title}
                href={c.file}
                target="_blank"
                rel="noreferrer"
                className="cert-card"
                layout
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                onMouseEnter={() => setHovered(c.title)}
                onMouseLeave={() => setHovered(null)}
              >
                <div className="cert-thumb">
                  <motion.div
                    className="cert-face"
                    style={{ background: `linear-gradient(140deg, ${from}, ${to})` }}
                    animate={{ y: hot ? -6 : 0 }}
                    transition={gentle}
                  >
                    <span className="issuer">{c.issuer}</span>
                    <span className="big">{c.title}</span>
                  </motion.div>
                  <motion.span
                    className="card-arrow icon-btn"
                    animate={{ rotate: hot ? 45 : 0, backgroundColor: hot ? "#FD853A" : "#1D2939" }}
                    transition={{ duration: 0.3, ease: "easeIn" }}
                    aria-hidden
                  >
                    <img src="/assets/figma/arrow-up-right-card.svg" alt="" />
                  </motion.span>
                </div>
                <div className="cert-meta">
                  <span className="tag">Certificate</span>
                  <span className="dot-label">
                    <img src="/assets/figma/dot-orange.svg" alt="" width={9} height={9} />
                    {c.issuer}
                  </span>
                </div>
                <h3>{c.title}</h3>
              </motion.a>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
