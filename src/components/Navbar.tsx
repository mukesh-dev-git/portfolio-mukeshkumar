import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { nav } from "../data/content";
import { clickMorph, hoverMorph } from "../motion";

function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [ids]);
  return active;
}

const ids = nav.map((n) => n.id);

export default function Navbar() {
  const active = useActiveSection(ids);
  const [hovered, setHovered] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const left = nav.slice(0, 3);
  const right = nav.slice(3);

  const link = (item: (typeof nav)[number]) => (
    <a
      key={item.id}
      href={`#${item.id}`}
      className={`nav-link${active === item.id ? " active" : ""}`}
      onMouseEnter={() => setHovered(item.id)}
      onMouseLeave={() => setHovered(null)}
      aria-current={active === item.id ? "page" : undefined}
    >
      {active === item.id && <motion.span layoutId="nav-pill" className="nav-pill" transition={clickMorph} />}
      {hovered === item.id && active !== item.id && (
        <motion.span layoutId="nav-hover" className="nav-hover" transition={hoverMorph} />
      )}
      {item.label}
    </a>
  );

  return (
    <div className="nav-wrap container">
      <nav className="nav" aria-label="Main">
        <div className="nav-group">{left.map(link)}</div>
        <a href="#home" className="brand" aria-label="Mukeshkumar, home">
          <motion.span className="brand-mark" whileHover={{ rotate: -12, scale: 1.08 }} transition={hoverMorph}>
            MK
          </motion.span>
          MUKESHKUMAR
        </a>
        <div className="nav-group">{right.map(link)}</div>
        <button className="menu-btn" aria-expanded={open} aria-label="Menu" onClick={() => setOpen((o) => !o)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={clickMorph}
          >
            {nav.map((item) => (
              <a key={item.id} href={`#${item.id}`} className={active === item.id ? "active" : ""} onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
