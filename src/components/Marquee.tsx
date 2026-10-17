import { motion } from "framer-motion";
import { marquee } from "../data/content";

export default function Marquee() {
  const row = [...marquee, ...marquee];
  return (
    <div className="marquee-band" aria-label={marquee.join(", ")}>
      <div className="marquee-strip">
        <motion.div
          className="marquee-row"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 28, ease: "linear", repeat: Infinity }}
          aria-hidden
        >
          {row.map((word, i) => (
            <span key={i} style={{ display: "contents" }}>
              <span>{word}</span>
              <img src={i % 4 === 3 ? "/assets/figma/marquee-star-alt.svg" : "/assets/figma/marquee-star.svg"} alt="" />
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
