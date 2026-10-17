import { Fragment } from "react";
import { motion } from "framer-motion";
import { experience } from "../data/content";
import { easeOutBack, fadeUp } from "../motion";

export default function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <motion.h2 className="section-title" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.6 }}>
          My <span className="accent">Work Experience</span>
        </motion.h2>

        <div className="timeline">
          <motion.div
            className="timeline-line"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
          />
          {experience.map((job, i) => (
            <Fragment key={job.org}>
              <motion.div
                className="tl-left"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                <h3>{job.org}</h3>
                <p>{job.period}</p>
              </motion.div>
              <motion.img
                className="tl-dot"
                src={i % 2 === 1 ? "/assets/figma/timeline-dot-dark.svg" : "/assets/figma/timeline-dot-orange.svg"}
                alt=""
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.15, ease: easeOutBack }}
              />
              <motion.div
                className="tl-right"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.15 }}
              >
                <h3>{job.role}</h3>
                <p>{job.detail}</p>
              </motion.div>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
