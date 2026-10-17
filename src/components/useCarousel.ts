import { useCallback, useEffect, useRef, useState } from "react";

// Tracks which card of a horizontally scrolling track is closest to the left edge,
// and scrolls to a given card when a dot is clicked.
export function useCarousel(count: number) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const onScroll = () => {
      const cards = Array.from(track.children) as HTMLElement[];
      const left = track.scrollLeft;
      let best = 0;
      let bestDist = Infinity;
      cards.forEach((c, i) => {
        const d = Math.abs(c.offsetLeft - track.offsetLeft - left);
        if (d < bestDist) {
          bestDist = d;
          best = i;
        }
      });
      const atEnd = left + track.clientWidth >= track.scrollWidth - 4;
      setIndex(atEnd ? count - 1 : best);
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, [count]);

  const goTo = useCallback((i: number) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[i] as HTMLElement | undefined;
    if (card) track.scrollTo({ left: card.offsetLeft - track.offsetLeft, behavior: "smooth" });
    setIndex(i);
  }, []);

  return { trackRef, index, goTo };
}
