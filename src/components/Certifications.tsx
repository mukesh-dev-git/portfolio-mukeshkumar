import { Fragment, useCallback, useState, type MouseEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { certifications, type Cert } from "../data/content";
import { clickMorph, easeOutBack, fadeUp, gentle, hoverMorph, inView, stagger } from "../motion";
import CertViewer, { type ViewerDoc } from "./CertViewer";

type OnView = (e: MouseEvent, file: string, title: string) => void;

const palettes = [
  ["#7C3AED", "#C4B5FD"],
  ["#0E9F6E", "#6EE7B7"],
  ["#F59E0B", "#FDE68A"],
];

const reveal = (i: number) => ({
  layout: true,
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  exit: { opacity: 0, scale: 0.9 },
  transition: { duration: 0.5, delay: (i % 3) * 0.1 },
});

function Meta({ cert, tag }: { cert: Cert; tag: string }) {
  return (
    <div className="cert-meta">
      <span className="tag">{tag}</span>
      <span className="dot-label">
        <img src="/assets/figma/dot-orange.svg" alt="" width={9} height={9} />
        {cert.issuer}
      </span>
    </div>
  );
}

function FolderCard({ cert, index, open, onToggle }: { cert: Cert; index: number; open: boolean; onToggle: () => void }) {
  const [hot, setHot] = useState(false);
  const lifted = hot || open;
  const count = cert.courses?.length ?? 0;

  return (
    <motion.button
      type="button"
      className="cert-card cert-folder"
      aria-expanded={open}
      onClick={onToggle}
      onMouseEnter={() => setHot(true)}
      onMouseLeave={() => setHot(false)}
      {...reveal(index)}
    >
      <div className="cert-thumb folder-thumb">
        <div className="folder-back" />
        {[0, 1, 2].map((s) => (
          <motion.div
            key={s}
            className={`folder-sheet s${s}`}
            animate={{ y: lifted ? -18 - s * 10 : 0, rotate: lifted ? (s - 1) * 4 : 0 }}
            transition={{ ...gentle, delay: lifted ? s * 0.04 : 0 }}
          />
        ))}
        <motion.div
          className="folder-front"
          style={{ transformOrigin: "bottom center" }}
          animate={{ rotateX: lifted ? -14 : 0 }}
          transition={gentle}
        >
          <span className="issuer">{cert.issuer}</span>
          <span className="big">{cert.title}</span>
          <span className="folder-count">{count} courses</span>
        </motion.div>
        <motion.span
          className="card-arrow icon-btn"
          animate={{ rotate: open ? 135 : 0, backgroundColor: lifted ? "#FD853A" : "#1D2939" }}
          transition={{ duration: 0.3, ease: easeOutBack }}
          aria-hidden
        >
          <img src="/assets/figma/arrow-up-right-card.svg" alt="" />
        </motion.span>
      </div>
      <Meta cert={cert} tag={cert.kind ?? "Certificate"} />
      <h3>{cert.title}</h3>
    </motion.button>
  );
}

function FolderPanel({ cert, onView }: { cert: Cert; onView: OnView }) {
  return (
    <motion.div
      className="folder-panel"
      layout
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={clickMorph}
    >
      <div className="folder-panel-inner">
        <div className="folder-panel-head">
          <div>
            <span className="eyebrow">
              {cert.kind} · {cert.date}
            </span>
            <h3>{cert.title}</h3>
          </div>
          <div className="folder-actions">
            <a className="btn btn-primary" href={cert.file} target="_blank" rel="noreferrer" onClick={(e) => onView(e, cert.file, cert.title)}>
              View certificate
            </a>
            {cert.verify && (
              <a className="btn btn-ghost" href={cert.verify} target="_blank" rel="noreferrer">
                Verify
              </a>
            )}
          </div>
        </div>
        <motion.ol className="course-list" initial="hidden" animate="show" variants={stagger}>
          {cert.courses?.map((c, i) => {
            const body = (
              <>
                <span className="course-no">{String(i + 1).padStart(2, "0")}</span>
                <span className="course-title">{c.title}</span>
                {c.file && <img className="course-arrow" src="/assets/figma/arrow-up-right-card.svg" alt="" />}
              </>
            );
            return (
              <motion.li key={c.title} variants={fadeUp}>
                {c.file ? (
                  <motion.a
                    href={c.file}
                    target="_blank"
                    rel="noreferrer"
                    className="course has-file"
                    whileHover={{ y: -3 }}
                    transition={gentle}
                    onClick={(e) => onView(e, c.file!, c.title)}
                  >
                    {body}
                  </motion.a>
                ) : (
                  <div className="course">{body}</div>
                )}
              </motion.li>
            );
          })}
        </motion.ol>
      </div>
    </motion.div>
  );
}

export default function Certifications() {
  const [showAll, setShowAll] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const [openFolder, setOpenFolder] = useState<string | null>(null);
  const [viewing, setViewing] = useState<ViewerDoc | null>(null);
  const closeViewer = useCallback(() => setViewing(null), []);
  // Plain clicks open the in-page viewer; modified clicks keep the browser's new-tab behaviour.
  const onView: OnView = (e, file, title) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
    e.preventDefault();
    setViewing({ file, title });
  };
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
            if (c.courses) {
              const open = openFolder === c.title;
              return (
                <Fragment key={c.title}>
                  <FolderCard cert={c} index={i} open={open} onToggle={() => setOpenFolder(open ? null : c.title)} />
                  <AnimatePresence>{open && <FolderPanel key={`${c.title}-panel`} cert={c} onView={onView} />}</AnimatePresence>
                </Fragment>
              );
            }
            const [from, to] = palettes[i % palettes.length];
            const hot = hovered === c.title;
            return (
              <motion.a
                key={c.title}
                href={c.file}
                target="_blank"
                rel="noreferrer"
                className="cert-card"
                onMouseEnter={() => setHovered(c.title)}
                onMouseLeave={() => setHovered(null)}
                onClick={(e) => onView(e, c.file, c.title)}
                {...reveal(i)}
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
                <Meta cert={c} tag="Certificate" />
                <h3>{c.title}</h3>
              </motion.a>
            );
          })}
        </AnimatePresence>
      </motion.div>
      <CertViewer doc={viewing} onClose={closeViewer} />
    </section>
  );
}
