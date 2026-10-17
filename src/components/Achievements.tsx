import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import { useRef, useState } from "react";
import { achievements } from "../data/content";
import { fadeUp, inView, stagger } from "../motion";

function Card({ a }: { a: (typeof achievements)[number] }) {
  return (
    <article className="achv-card">
      <img src="/assets/figma/quote-down.svg" alt="" className="achv-quote" />
      <div className="achv-top">
        {a.image ? (
          <img src={a.image} alt="" className="achv-avatar" loading="lazy" />
        ) : (
          <span className="achv-avatar" aria-hidden>
            <img src="/assets/figma/icon-award.svg" alt="" style={{ width: 28, filter: "brightness(0) invert(1)" }} />
          </span>
        )}
        <strong>{a.title}</strong>
      </div>
      <div className="stars" aria-hidden>
        {Array.from({ length: 5 }).map((_, i) => (
          <img key={i} src="/assets/figma/star.svg" alt="" />
        ))}
      </div>
      <p>{a.detail}</p>
    </article>
  );
}

export default function Achievements() {
  const x = useMotionValue(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  useAnimationFrame((_, delta) => {
    const track = trackRef.current;
    if (!track || paused) return;
    const half = track.scrollWidth / 2;
    let next = x.get() - delta * 0.06;
    if (-next >= half) next += half;
    x.set(next);
  });

  const loop = [...achievements, ...achievements];

  return (
    <section id="achievements" className="dark-section achievements">
      <img src="/assets/figma/dark-texture.webp" alt="" className="texture" />
      <div className="container">
        <motion.div className="head" variants={stagger} {...inView}>
          <motion.h2 variants={fadeUp}>
            Wins That
            <br />
            Speak to <span className="accent">My Results</span>
          </motion.h2>
          <motion.p variants={fadeUp}>
            Hackathons, challenges and pitches where the work held up against strong competition.
          </motion.p>
          <motion.img
            src="/assets/figma/sparkle-lines.svg"
            alt=""
            className="spark"
            style={{ right: "22%", top: -10, width: 28 }}
            animate={{ rotate: [0, 12, 0] }}
            transition={{ duration: 2.4, repeat: Infinity }}
          />
          <motion.img
            src="/assets/figma/sparkle-star-a.svg"
            alt=""
            className="spark"
            style={{ right: "12%", top: 110, width: 26 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
          <motion.img
            src="/assets/figma/sparkle-star-b.svg"
            alt=""
            className="spark"
            style={{ left: "14%", top: 150, width: 30 }}
            animate={{ rotate: -360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>
      </div>
      <div className="marquee-viewport" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
        <motion.div className="achv-track" ref={trackRef} style={{ x }}>
          {loop.map((a, i) => (
            <div key={i} aria-hidden={i >= achievements.length || undefined}>
              <Card a={a} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
