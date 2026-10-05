import { motion } from "motion/react";

function About() {
  const stats = [
    {
      number: "30%",
      label: "Delivery Time Reduced",
    },
    {
      number: "25%",
      label: "API Retrieval Improvement",
    },
    {
      number: "5K+",
      label: "URLs Processed",
    },
    {
      number: "7+",
      label: "Certifications",
    },
  ];

  return (
    <section className="section about-section" id="about">
      <div className="section-number">01</div>

      <div className="section-heading">
        <motion.span
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          GET TO KNOW ME
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          About <em>Me</em>
        </motion.h2>
      </div>

      <div className="about-content">
        <motion.div
          className="about-main-text"
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <p className="large-text">
            Software professional with experience developing
            <span> web applications, APIs and database solutions.</span>
          </p>

          <p>
            I enjoy designing practical solutions, integrating tools
            and building responsive applications that solve real
            problems. My development journey covers Java, Spring Boot,
            React, Angular, JavaScript, SQL and modern development
            tools.
          </p>

          <p>
            I am adaptable, collaborative and continuously interested
            in learning new technologies and improving the way I build
            software.
          </p>
        </motion.div>

        <motion.div
          className="about-side"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="about-location">
            <span>BASED IN</span>
            <strong>Mumbai, Maharashtra</strong>
          </div>

          <div className="about-focus">
            <span>FOCUS</span>
            <strong>Full Stack Development</strong>
          </div>

          <div className="about-line"></div>

          <div className="about-quote">
            <span>"</span>
            <p>
              Build. Learn. Improve. Repeat.
            </p>
          </div>
        </motion.div>
      </div>

      <div className="stats-grid">
        {stats.map((stat, index) => (
          <motion.div
            className="stat-item"
            key={stat.label}
            initial={{
              opacity: 0,
              y: 50,
              scale: 0.8,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.12,
              duration: 0.7,
            }}
            whileHover={{
              y: -10,
            }}
          >
            <strong>{stat.number}</strong>
            <span>{stat.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default About;