import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView } from "framer-motion";
import { profile, stats } from "../data/content";
import { fadeUp, hoverMorph, inView, stagger } from "../motion";

const rings = [
  { src: "ring-1", size: 100 },
  { src: "ring-2", size: 93 },
  { src: "ring-3", size: 85 },
  { src: "ring-4", size: 77 },
  { src: "ring-5", size: 69 },
  { src: "ring-6", size: 61 },
];

function Counter({ to, prefix }: { to: number; prefix: string }) {
  const ref = useRef<HTMLElement>(null);
  const seen = useInView(ref, { once: true, amount: 0.8 });
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!seen) return;
    const from = to > 1000 ? to - 25 : 0;
    const controls = animate(from, to, { duration: 1.4, ease: "easeOut", onUpdate: (v) => setValue(Math.round(v)) });
    return () => controls.stop();
  }, [seen, to]);
  return (
    <strong ref={ref}>
      {prefix}
      {value}
    </strong>
  );
}

export default function WhyMe() {
  return (
    <section className="why">
      <div className="container why-grid">
        <motion.div className="why-art" initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8 }}>
          {rings.map((r, i) => (
            <motion.img
              key={r.src}
              className="ring"
              src={`/assets/figma/${r.src}.svg`}
              alt=""
              style={{ width: `${r.size}%` }}
              animate={{ scale: [1, 1.06, 1], opacity: [0.9, 1, 0.9] }}
              transition={{ duration: 3, delay: i * 0.18, repeat: Infinity, ease: "easeInOut" }}
            />
          ))}
          <div className="why-photo">
            <img src={profile.photo.src} alt={profile.fullName} />
          </div>
        </motion.div>

        <motion.div className="why-copy" variants={stagger} {...inView}>
          <motion.h2 className="section-title" variants={fadeUp}>
            Why <span className="accent">Hire me</span>?
          </motion.h2>
          <motion.p variants={fadeUp}>{profile.summary}</motion.p>
          <motion.div className="why-stats" variants={fadeUp}>
            {stats.map((s) => (
              <div key={s.label}>
                <Counter to={s.value} prefix={s.prefix} />
                <span>{s.label}</span>
              </div>
            ))}
          </motion.div>
          <motion.a href="#contact" className="btn btn-outline" variants={fadeUp} initial="rest" whileHover="hover" animate="rest">
            <motion.span className="fill" variants={{ rest: { scaleX: 0, originX: 0 }, hover: { scaleX: 1, originX: 0 } }} transition={{ duration: 0.2, ease: "easeOut" }} />
            <motion.span variants={{ rest: { color: "#151515" }, hover: { color: "#ffffff" } }} transition={hoverMorph}>
              Hire me
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
