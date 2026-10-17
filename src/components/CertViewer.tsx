import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { gentle } from "../motion";

export type ViewerDoc = { file: string; title: string };

async function renderPdf(file: string, host: HTMLDivElement, signal: { cancelled: boolean }) {
  const pdfjs = await import("pdfjs-dist");
  const worker = await import("pdfjs-dist/build/pdf.worker.min.mjs?url");
  pdfjs.GlobalWorkerOptions.workerSrc = worker.default;

  const task = pdfjs.getDocument({ url: encodeURI(file) });
  const doc = await task.promise;
  const ratio = Math.min(window.devicePixelRatio || 1, 2);
  for (let n = 1; n <= doc.numPages; n++) {
    if (signal.cancelled) break;
    const page = await doc.getPage(n);
    const base = page.getViewport({ scale: 1 });
    const viewport = page.getViewport({ scale: (host.clientWidth / base.width) * ratio });
    const canvas = document.createElement("canvas");
    canvas.width = viewport.width;
    canvas.height = viewport.height;
    await page.render({ canvas, viewport }).promise;
    if (!signal.cancelled) host.appendChild(canvas);
  }
  await task.destroy();
}

function Viewer({ doc, onClose }: { doc: ViewerDoc; onClose: () => void }) {
  const hostRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const [state, setState] = useState<"loading" | "ready" | "error">("loading");

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    const signal = { cancelled: false };
    host.replaceChildren();
    setState("loading");
    renderPdf(doc.file, host, signal)
      .then(() => !signal.cancelled && setState("ready"))
      .catch(() => !signal.cancelled && setState("error"));
    return () => {
      signal.cancelled = true;
    };
  }, [doc.file]);

  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener("keydown", onKey);
      previous?.focus();
    };
  }, [onClose]);

  return (
    <motion.div
      className="viewer-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
    >
      <motion.div
        className="viewer"
        role="dialog"
        aria-modal="true"
        aria-label={doc.title}
        initial={{ opacity: 0, y: 60, scale: 0.92 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.95, transition: { duration: 0.2 } }}
        transition={gentle}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="viewer-head">
          <h3>{doc.title}</h3>
          <div className="viewer-actions">
            <a className="viewer-open" href={doc.file} target="_blank" rel="noreferrer">
              Open PDF
            </a>
            <button ref={closeRef} type="button" className="viewer-close" onClick={onClose} aria-label="Close">
              ×
            </button>
          </div>
        </div>
        <div className="viewer-body">
          {state === "loading" && <div className="viewer-status">Loading certificate…</div>}
          {state === "error" && (
            <div className="viewer-status">
              Couldn't show the preview.{" "}
              <a href={doc.file} target="_blank" rel="noreferrer">
                Open the PDF
              </a>
            </div>
          )}
          <div ref={hostRef} className="viewer-pages" />
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function CertViewer({ doc, onClose }: { doc: ViewerDoc | null; onClose: () => void }) {
  return <AnimatePresence>{doc && <Viewer key={doc.file} doc={doc} onClose={onClose} />}</AnimatePresence>;
}
