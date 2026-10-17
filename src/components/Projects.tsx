import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projects, type ProjectCategory } from "../data/content";
import { clickMorph, fadeUp, gentle, hoverMorph, inView, stagger } from "../motion";
import Dots from "./Dots";
import { useCarousel } from "./useCarousel";

const filters: ("All" | ProjectCategory)[] = ["All", "AI/ML", "Embedded/IoT", "Full-Stack", "Hackathon"];

export default function Projects() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const [selected, setSelected] = useState(0);
  const [hovered, setHovered] = useState<number | null>(null);
  const list = useMemo(() => (filter === "All" ? projects : projects.filter((p) => p.categories.includes(filter))), [filter]);
  const { trackRef, index, goTo } = useCarousel(list.length);
  const current = list[Math.min(selected, list.length - 1)];

  const choose = (i: number) => {
    setSelected(i);
    goTo(i);
  };

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.div className="projects-head" variants={stagger} {...inView}>
          <motion.h2 className="section-title" variants={fadeUp}>
            Lets have a look at my <span className="accent">Portfolio</span>
          </motion.h2>
          <motion.a
            variants={fadeUp}
            href="https://github.com/mukesh-dev-git"
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
            transition={hoverMorph}
          >
            See All
          </motion.a>
        </motion.div>

        <div className="project-track" ref={trackRef}>
          <AnimatePresence mode="popLayout" initial={false}>
            {list.map((p, i) => (
              <motion.button
                key={p.title}
                layout
                className="project-card"
                onClick={() => choose(i)}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                aria-pressed={current?.title === p.title}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={clickMorph}
              >
                <motion.div
                  className="bg"
                  style={{ background: `radial-gradient(120% 120% at 85% 10%, ${p.accent[1]}, ${p.accent[0]} 62%)` }}
                  animate={{ scale: hovered === i ? 1.06 : 1 }}
                  transition={gentle}
                />
                <div className="shade" />
                <div className="tags">
                  {p.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                <motion.span
                  className="ring-arrow icon-btn"
                  animate={{ rotate: hovered === i ? -45 : 0, backgroundColor: hovered === i ? "#FD853A" : "rgba(255,255,255,0.08)" }}
                  transition={gentle}
                  aria-hidden
                >
                  <img src="/assets/figma/arrow-right-orange.svg" alt="" style={{ filter: hovered === i ? "brightness(0) invert(1)" : undefined }} />
                </motion.span>
                <div>
                  <h3>{p.short}</h3>
                  {p.event && <div className="event">{p.event}</div>}
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </div>
        <Dots count={list.length} index={index} onSelect={choose} label="Project" />

        <div className="chips" role="group" aria-label="Filter projects">
          {filters.map((f) => (
            <button
              key={f}
              className={`filter-chip${filter === f ? " active" : ""}`}
              onClick={() => {
                setFilter(f);
                setSelected(0);
                goTo(0);
              }}
              aria-pressed={filter === f}
            >
              {filter === f && <motion.span layoutId="filter-pill" className="chip-pill" transition={hoverMorph} />}
              {f}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {current && (
            <motion.div
              key={current.title}
              className="project-detail"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35 }}
            >
              <div className="title-row">
                <h3>{current.title}</h3>
                {current.link && (
                  <motion.a
                    href={current.link}
                    target="_blank"
                    rel="noreferrer"
                    className="solid-arrow icon-btn"
                    aria-label={`Open ${current.title} on GitHub`}
                    whileHover={{ rotate: 45, scale: 1.08 }}
                    transition={gentle}
                  >
                    <img src="/assets/figma/arrow-down-right-white.svg" alt="" style={{ transform: "rotate(-90deg)" }} />
                  </motion.a>
                )}
              </div>
              {current.event && <div className="event-line">{current.event}</div>}
              <p>{current.description}</p>
              {!current.link && <div className="private-note">Source is private; happy to walk through it on a call.</div>}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
