import { motion } from "motion/react";

function Contact() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-background-text">
        LET'S CONNECT
      </div>

      <div className="section-number">07</div>

      <div className="contact-content">
        <motion.span
          className="contact-small-title"
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: false,
            amount: 0.2,
          }}
        >
          HAVE A PROJECT IN MIND?
        </motion.span>

        <motion.h2
  initial={{
    opacity: 0,
    y: 120,
  }}
  whileInView={{
    opacity: 1,
    y: 0,
  }}
  viewport={{
    once: false,
    amount: 0.2,
  }}
  transition={{
    duration: 1.1,
    ease: [0.22, 1, 0.36, 1],
  }}
>
  Let's build
  <br />
  something <em>great.</em>
</motion.h2>

        <motion.a
          href="mailto:raulsiddhavi22@gmail.com"
          className="contact-email"
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: false,
            amount: 0.2,
          }}
          transition={{
            delay: 0.3,
          }}
          whileHover={{
            scale: 1.04,
            letterSpacing: "2px",
          }}
        >
          raulsiddhavi22@gmail.com
        </motion.a>

        <div className="contact-links">
          <motion.a
            href="https://www.linkedin.com/in/siddhaviraul22/"
            target="_blank"
            rel="noreferrer"
            whileHover={{
              y: -8,
              scale: 1.05,
            }}
          >
            LinkedIn ↗
          </motion.a>

          <motion.a
            href="https://github.com/Siddhaviraul22"
            target="_blank"
            rel="noreferrer"
            whileHover={{
              y: -8,
              scale: 1.05,
            }}
          >
            GitHub ↗
          </motion.a>

          <motion.a
            href="mailto:raulsiddhavi22@gmail.com"
            whileHover={{
              y: -8,
              scale: 1.05,
            }}
          >
            Email ↗
          </motion.a>
        </div>
      </div>

      <footer className="footer">
        <span>© {new Date().getFullYear()} Siddhavi Raul</span>

        <span>Designed & Built with React</span>

        <motion.button
          className="back-to-top"
          onClick={scrollToTop}
          whileHover={{
            y: -6,
          }}
          whileTap={{
            scale: 0.9,
          }}
        >
          <span>BACK TO TOP</span>

          <motion.span
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
          >
            ↑
          </motion.span>
        </motion.button>
      </footer>
    </section>
  );
}

export default Contact;