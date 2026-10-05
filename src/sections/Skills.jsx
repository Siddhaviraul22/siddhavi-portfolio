import { motion } from "motion/react";

function Skills() {
  const skillGroups = [
    {
      title: "Programming & Frameworks",
      skills: [
        "Java",
        "Python",
        "JavaScript",
        "Spring Boot",
        "React",
        "Angular",
        "Hibernate",
        "Microservices",
        "C",
        "C++",
        "HTML",
        "CSS",
      ],
    },
    {
      title: "Databases & Tools",
      skills: [
        "MySQL",
        "Git",
        "Maven",
        "Jenkins",
        "Docker",
        "CI/CD",
        "AWS",
        "Power BI",
      ],
    },
    {
      title: "Development & Testing",
      skills: [
        "REST APIs",
        "JUnit",
        "Unit Testing",
        "Agile",
        "Scrum",
        "SDLC",
      ],
    },
    {
      title: "Soft Skills",
      skills: [
        "Teamwork",
        "Problem Solving",
        "Communication",
        "Adaptability",
        "Time Management",
      ],
    },
  ];

  return (
    <section className="section skills-section" id="skills">
      <div className="section-number">02</div>

      <div className="section-heading centered-heading">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          WHAT I WORK WITH
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Skills & <em>Tools</em>
        </motion.h2>
      </div>

      <div className="skills-wrapper">
        {skillGroups.map((group, groupIndex) => (
          <motion.div
            className="skill-group"
            key={group.title}
            initial={{
              opacity: 0,
              y: 80,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              delay: groupIndex * 0.15,
              duration: 0.8,
            }}
          >
            <div className="skill-group-header">
              <span>0{groupIndex + 1}</span>
              <h3>{group.title}</h3>
            </div>

            <div className="skill-cards">
              {group.skills.map((skill, index) => (
                <motion.div
                  className="skill-card"
                  key={skill}
                  initial={{
                    opacity: 0,
                    scale: 0.7,
                    rotate: -5,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                    rotate: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    delay: groupIndex * 0.1 + index * 0.04,
                    duration: 0.5,
                  }}
                  whileHover={{
                    y: -8,
                    rotate: index % 2 === 0 ? 2 : -2,
                    scale: 1.05,
                  }}
                >
                  <span className="skill-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <strong>{skill}</strong>
                  <span className="skill-arrow">↗</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="skills-marquee">
        <div className="marquee-track">
          <span>JAVA</span>
          <span>REACT</span>
          <span>SPRING BOOT</span>
          <span>ANGULAR</span>
          <span>JAVASCRIPT</span>
          <span>DOCKER</span>
          <span>AWS</span>
          <span>SQL</span>

          <span>JAVA</span>
          <span>REACT</span>
          <span>SPRING BOOT</span>
          <span>ANGULAR</span>
          <span>JAVASCRIPT</span>
          <span>DOCKER</span>
          <span>AWS</span>
          <span>SQL</span>
        </div>
      </div>
    </section>
  );
}

export default Skills;