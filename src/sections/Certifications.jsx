import { motion } from "motion/react";

function Certifications() {
  const certifications = [
    {
      number: "01",
      name: "React - The Complete Guide 2024",
      provider: "Udemy",
      date: "Aug 2024 - Present",
      short: "REACT",
    },
    {
      number: "02",
      name: "Business Intelligence Using Power BI",
      provider: "Skill Nation",
      date: "May 2024",
      short: "POWER BI",
    },
    {
      number: "03",
      name: "Project Management Foundations",
      provider: "LinkedIn Learnings",
      date: "Sep 2023",
      short: "PROJECT",
    },
    {
      number: "04",
      name: "JavaScript Zero to Expert",
      provider: "Udemy",
      date: "Jan - Sep 2022",
      short: "JS",
    },
    {
      number: "05",
      name: "The Fundamentals of Digital Marketing",
      provider: "Google Digital Unlocked",
      date: "Apr 2021",
      short: "MARKETING",
    },
    {
      number: "06",
      name: "Machine Learning",
      provider: "Internshala Trainings",
      date: "Nov 2020",
      short: "ML",
    },
    {
      number: "07",
      name: "AWS Solutions Architect - Associate",
      provider: "Vibrant e Technologies",
      date: "Jan 2020",
      short: "AWS",
    },
  ];

  return (
    <section
      className="section certifications-section"
      id="certifications"
    >
      <div className="section-number">05</div>

      <div className="section-heading">
        <motion.span
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          CONTINUOUS LEARNING
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Certifications
        </motion.h2>
      </div>

      <motion.p
        className="certification-intro"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        A collection of courses and certifications that represent
        my continuous learning across development, cloud,
        analytics and technology.
      </motion.p>

      <div className="certification-track">
        {certifications.map((certificate, index) => (
          <motion.article
            className="certificate-card"
            key={certificate.name}
            initial={{
              opacity: 0,
              x: 100,
              rotateY: 20,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              rotateY: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              delay: index * 0.08,
              duration: 0.7,
            }}
            whileHover={{
              y: -15,
              rotateY: -5,
              scale: 1.03,
            }}
          >
            <div className="certificate-top">
              <span>{certificate.number}</span>
              <span>{certificate.date}</span>
            </div>

            <div className="certificate-icon">
              {certificate.short}
            </div>

            <h3>{certificate.name}</h3>

            <p>{certificate.provider}</p>

            <div className="certificate-line"></div>

            <span className="certificate-type">
              CERTIFICATION
            </span>
          </motion.article>
        ))}
      </div>

      <div className="certification-marquee">
        <div className="marquee-track reverse">
          <span>LEARN</span>
          <span>BUILD</span>
          <span>EXPERIMENT</span>
          <span>IMPROVE</span>
          <span>REPEAT</span>
          <span>LEARN</span>
          <span>BUILD</span>
          <span>EXPERIMENT</span>
          <span>IMPROVE</span>
          <span>REPEAT</span>
        </div>
      </div>
    </section>
  );
}

export default Certifications;