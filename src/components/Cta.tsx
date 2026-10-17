import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { profile } from "../data/content";
import { fadeUp, hoverMorph, inView, stagger } from "../motion";

export default function Cta() {
  const [from, setFrom] = useState("");

  const send = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent("Let’s discuss a project");
    const body = encodeURIComponent(`Hi Mukeshkumar,\n\n\n— ${from}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <motion.section id="contact" className="container cta" variants={stagger} {...inView}>
      <motion.h2 className="section-title" variants={fadeUp}>
        Have an Idea Worth Building? <span className="accent">Let’s Discuss</span>
      </motion.h2>
      <motion.form className="cta-form" onSubmit={send} variants={fadeUp}>
        <span className="mail-icon" aria-hidden>
          <img src="/assets/figma/icon-sms.svg" alt="" />
        </span>
        <label htmlFor="cta-email" className="sr-only" style={{ position: "absolute", left: -9999 }}>
          Your email address
        </label>
        <input
          id="cta-email"
          type="email"
          placeholder="Enter your email address"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          required
        />
        <motion.button type="submit" className="btn btn-primary" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={hoverMorph}>
          Send
        </motion.button>
      </motion.form>
      <motion.div className="cta-badges" variants={fadeUp}>
        <span>
          <img src="/assets/figma/icon-star-bold.svg" alt="" />
          Rank 88 / 32,000+, Amazon ML Challenge
        </span>
        <span>
          <img src="/assets/figma/icon-award.svg" alt="" />
          Smart India Hackathon 2025 Winner
        </span>
        <span>
          <img src="/assets/figma/icon-shield-tick.svg" alt="" />
          Founder, Chillflare Innovations
        </span>
      </motion.div>
    </motion.section>
  );
}
