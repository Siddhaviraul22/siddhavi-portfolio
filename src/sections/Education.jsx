import { motion } from "motion/react";

function Education() {
  return (
    <section className="section education-section" id="education">
      <div className="section-number">04</div>

      <div className="section-heading centered-heading">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          MY FOUNDATION
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Education
        </motion.h2>
      </div>

      <motion.div
        className="education-card"
        initial={{
          opacity: 0,
          scale: 0.9,
          y: 70,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 0.9,
        }}
        whileHover={{
          y: -10,
        }}
      >
        <div className="education-year">
          2017
          <span>—</span>
          2022
        </div>

        <div className="education-details">
          <span className="education-label">
            BACHELOR OF ENGINEERING
          </span>

          <h3>Information Technology</h3>

          <p>
            Sandip Institute of Technology and Research Center
          </p>

          <div className="education-bottom">
            <span>Nashik, Maharashtra</span>

            <strong>
              CGPA <b>7.4 / 10</b>
            </strong>
          </div>
        </div>

        <div className="education-symbol">&lt;/&gt;</div>
      </motion.div>
    </section>
  );
}

export default Education;