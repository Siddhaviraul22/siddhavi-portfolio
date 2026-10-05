import { motion } from "motion/react";

function Projects() {
  const projects = [
    {
      number: "01",
      title: "CloudNest",
      category: "WEB DEVELOPMENT",
      description:
        "A cloud-based media file storage application with a modern interface and secure file management features.",
      technologies: ["React", "Next.js", "Node.js", "Express", "Supabase"],
      github: "https://github.com/Siddhaviraul22/cloudnest-frontend",
      backend:
        "https://github.com/Siddhaviraul22/cloudnest-backend",
      featured: true,
    },
    {
      number: "02",
      title: "Insurance Management Platform",
      category: "WEB APPLICATION",
      description:
        "A web application designed to manage insurance-related information and simplify different management operations.",
      technologies: ["Java", "Spring Boot", "React", "SQL"],
      github:
        "https://github.com/Siddhaviraul22/Insurance-Management-Platform",
      featured: false,
    },
    {
      number: "03",
      title: "AI Code Review Assistant",
      category: "AI / WEB DEVELOPMENT",
      description:
        "An AI-powered application that reviews source code and provides useful feedback to help developers identify and improve code issues.",
      technologies: ["React", "Node.js", "JavaScript", "AI"],
      github:
        "https://github.com/Siddhaviraul22/ai-code-review-assistant",
      featured: false,
    },
    {
      number: "04",
      title: "Splitly AI",
      category: "FULL STACK DEVELOPMENT",
      description:
        "An expense sharing application designed to help users manage group expenses, balances and settlements.",
      technologies: ["React", "Java", "Spring Boot", "MySQL"],
      github: "https://github.com/Siddhaviraul22/Splitly",
      featured: false,
    },
    {
      number: "05",
      title: "What's Cooking",
      category: "JAVA FULL STACK",
      description:
        "A full-stack recipe application with authentication, recipe management, search and responsive user interface.",
      technologies: ["Java", "Spring Boot", "Angular", "MySQL"],
      github:
        "https://github.com/Siddhaviraul22/What-s-Cooking-App-RLL-Project-",
      featured: false,
    },
  ];

  return (
    <section className="section projects-section" id="projects">
      <div className="section-number">07</div>

      <div className="section-header">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span>MY WORK</span>
          <h2>
            <em>Projects.</em>
          </h2>
        </motion.div>

        <motion.p
          className="projects-intro"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          A collection of web applications and full-stack projects built while
          learning, experimenting and solving real-world problems.
        </motion.p>
      </div>

      <div className="projects-list">
        {projects.map((project, index) => (
          <motion.article
            key={project.number}
            className={`project-card ${
              project.featured ? "featured-project" : ""
            }`}
            data-number={project.number}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              delay: index * 0.1,
            }}
            whileHover={{
              y: -10,
            }}
          >
            <div className="project-card-top">
              <span className="project-number">{project.number}</span>

              <motion.a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="project-arrow"
                aria-label={`Open ${project.title} GitHub repository`}
                whileHover={{
                  scale: 1.2,
                  rotate: 45,
                }}
                whileTap={{
                  scale: 0.9,
                }}
              >
                ↗
              </motion.a>
            </div>

            <div className="project-content">
              <motion.span
                className="project-category"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                {project.category}
              </motion.span>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-technologies">
                {project.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>

              {project.backend && (
                <motion.a
                  href={project.backend}
                  target="_blank"
                  rel="noreferrer"
                  className="project-backend-link"
                  whileHover={{ x: 5 }}
                >
                  Backend Repository <span>↗</span>
                </motion.a>
              )}
            </div>

            <motion.div
              className="project-bottom-line"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                delay: 0.3 + index * 0.1,
              }}
            />
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Projects;