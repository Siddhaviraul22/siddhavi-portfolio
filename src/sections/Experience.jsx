import { motion } from "motion/react";

function Experience() {
  const experiences = [
    {
      number: "01",
      role: "Trainee Associate Software Engineer",
      company: "Mphasis",
      period: "Nov 2023 — Apr 2024",
      points: [
        "Developed full-stack features using Spring Boot, Angular and Hibernate.",
        "Reduced delivery time by 30% through efficient development practices.",
        "Built REST APIs that improved data retrieval performance by 25%.",
        "Worked with Git, Maven, Jenkins and Docker for automated builds and continuous deployment.",
        "Participated in 3 Agile sprints and worked with business requirements.",
      ],
    },
    {
      number: "02",
      role: "Intern",
      company: "Digiyoda Media Group",
      period: "Sep 2021 — Nov 2021",
      points: [
        "Worked with machine learning models on 5,000+ website URLs.",
        "Helped detect fake websites and improved model accuracy by 25%.",
        "Automated preprocessing and model evaluation, reducing manual effort by 40%.",
        "Worked with NLP and supervised learning for malicious website classification.",
      ],
    },
  ];

  return (
    <section className="section experience-section" id="experience">
      <div className="section-number">03</div>

      <div className="section-heading">
        <motion.span
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          WHERE I'VE WORKED
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Experience & <em>Growth</em>
        </motion.h2>
      </div>

      <div className="experience-timeline">
        <motion.div
          className="timeline-line"
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          viewport={{ once: true }}
          transition={{
            duration: 1.8,
            ease: "easeInOut",
          }}
        />

        {experiences.map((experience, index) => (
          <motion.article
            className={`experience-card ${
              index % 2 === 0 ? "experience-left" : "experience-right"
            }`}
            key={experience.company}
            initial={{
              opacity: 0,
              x: index % 2 === 0 ? -100 : 100,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="timeline-dot">
              <span>{experience.number}</span>
            </div>

            <div className="experience-card-inner">
              <div className="experience-top">
                <span className="experience-period">
                  {experience.period}
                </span>

                <span className="experience-number">
                  {experience.number}
                </span>
              </div>

              <h3>{experience.role}</h3>

              <h4>{experience.company}</h4>

              <ul>
                {experience.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Experience;