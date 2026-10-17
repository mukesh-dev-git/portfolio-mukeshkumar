import { motion } from "framer-motion";
import { clickMorph } from "../motion";

export default function Dots({ count, index, onSelect, label }: { count: number; index: number; onSelect: (i: number) => void; label: string }) {
  return (
    <div className="dots" role="tablist" aria-label={label}>
      {Array.from({ length: count }).map((_, i) => (
        <motion.button
          key={i}
          role="tab"
          aria-selected={i === index}
          aria-label={`${label} ${i + 1}`}
          className={`dot${i === index ? " active" : ""}`}
          onClick={() => onSelect(i)}
          layout
          transition={clickMorph}
        />
      ))}
    </div>
  );
}
