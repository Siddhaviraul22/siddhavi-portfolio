import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useScroll,
} from "motion/react";

function Hero() {
  const { scrollY } = useScroll();

  const [mouse, setMouse] = useState({
    x: 0,
    y: 0,
  });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 80,
    damping: 20,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 80,
    damping: 20,
  });

  const orbX = useTransform(smoothX, [-500, 500], [-35, 35]);
  const orbY = useTransform(smoothY, [-500, 500], [-35, 35]);

  const titleX = useTransform(smoothX, [-500, 500], [-8, 8]);
  const titleY = useTransform(smoothY, [-500, 500], [-8, 8]);

  const heroY = useTransform(scrollY, [0, 800], [0, 220]);
  const heroOpacity = useTransform(scrollY, [0, 600], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      const x = event.clientX - centerX;
      const y = event.clientY - centerY;

      setMouse({
        x: event.clientX,
        y: event.clientY,
      });

      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  const technologies = [
    "JAVA",
    "SPRING BOOT",
    "REACT",
    "ANGULAR",
    "JAVASCRIPT",
    "SQL",
    "DOCKER",
    "AWS",
  ];

  return (
    <section className="hero" id="home">
      {/* Mouse-following light */}
      <motion.div
        className="hero-mouse-glow"
        animate={{
          x: mouse.x - 200,
          y: mouse.y - 200,
        }}
        transition={{
          type: "spring",
          stiffness: 40,
          damping: 20,
        }}
      />

      {/* Decorative particles */}
      <motion.span
        className="hero-particle particle-1"
        animate={{
          y: [0, -30, 0],
          x: [0, 15, 0],
          opacity: [0.2, 0.8, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
      />

      <motion.span
        className="hero-particle particle-2"
        animate={{
          y: [0, 25, 0],
          x: [0, -20, 0],
          opacity: [0.3, 1, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
      />

      <motion.span
        className="hero-particle particle-3"
        animate={{
          y: [0, -20, 0],
          opacity: [0.1, 0.8, 0.1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
      />

      <motion.div
        className="hero-parallax"
        style={{
          y: heroY,
          opacity: heroOpacity,
        }}
      >
        <div className="hero-left">
          <motion.div
            className="availability"
            initial={{
              opacity: 0,
              y: 30,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
          >
            <span className="availability-dot"></span>

            <span>Available for opportunities</span>

            <motion.span
              className="availability-arrow"
              animate={{
                x: [0, 5, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
            >
              →
            </motion.span>
          </motion.div>

          <motion.p
            className="hero-intro"
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.4,
            }}
          >
            HELLO, I'M
          </motion.p>

          <motion.div
            className="hero-title-wrapper"
            style={{
              x: titleX,
              y: titleY,
            }}
          >
            <h1 className="hero-title">
              <motion.span
                className="hero-title-word filled-name"
                initial={{
                  opacity: 0,
                  y: 100,
                  rotateX: 70,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  rotateX: 0,
                }}
                transition={{
                  duration: 1.1,
                  delay: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                Siddhavi
              </motion.span>

              <motion.span
                className="hero-title-word filled-name second-name"
                initial={{
                  opacity: 0,
                  y: 120,
                  rotateX: 70,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  rotateX: 0,
                }}
                transition={{
                  duration: 1.1,
                  delay: 0.65,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                Raul
              </motion.span>
            </h1>

            <motion.div
              className="name-light"
              animate={{
                x: ["-120%", "120%"],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatDelay: 2,
                ease: "easeInOut",
              }}
            />
          </motion.div>

          <motion.div
            className="hero-role"
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.9,
            }}
          >
            <span>JAVA FULL STACK DEVELOPER</span>

            <motion.span
              className="role-line"
              initial={{
                width: 0,
              }}
              animate={{
                width: 45,
              }}
              transition={{
                duration: 0.8,
                delay: 1.2,
              }}
            />

            <span>WEB DEVELOPER</span>
          </motion.div>

          <motion.p
            className="hero-description"
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 1.1,
            }}
          >
            I build modern web applications, APIs and interactive
            digital experiences using Java, Spring Boot, React,
            Angular and JavaScript.
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 1.3,
            }}
          >
            <motion.a
              href="#projects"
              className="primary-button hero-button"
              whileHover={{
                scale: 1.06,
                y: -5,
              }}
              whileTap={{
                scale: 0.95,
              }}
            >
              <span>Explore My Work</span>
              <motion.span
                className="button-arrow"
                animate={{
                  x: [0, 5, 0],
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                }}
              >
                ↗
              </motion.span>
            </motion.a>

            <motion.a
              href="#about"
              className="secondary-button hero-button"
              whileHover={{
                scale: 1.04,
                y: -5,
              }}
            >
              More About Me
            </motion.a>
          </motion.div>

          <motion.div
            className="hero-tech"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 1.5,
            }}
          >
            {technologies.map((technology, index) => (
              <motion.span
                key={technology}
                animate={{
                  y: [0, -4, 0],
                }}
                transition={{
                  duration: 2 + index * 0.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {technology}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* HERO VISUAL */}
        <div className="hero-visual">
          <motion.div
            className="hero-glow-orb"
            style={{
              x: orbX,
              y: orbY,
            }}
          />

          <motion.div
            className="hero-ring ring-large"
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <span className="orbit-dot"></span>
          </motion.div>

          <motion.div
            className="hero-ring ring-medium"
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <span className="orbit-dot second-orbit-dot"></span>
          </motion.div>

          <motion.div
            className="hero-ring ring-small"
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          <motion.div
            className="hero-center"
            animate={{
              y: [0, -18, 0],
              rotateZ: [0, 2, -2, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="center-glow"></div>

            <span>&lt;</span>
            <strong>SR</strong>
            <span>/&gt;</span>

            <motion.div
              className="center-pulse"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
              }}
            />
          </motion.div>

          <motion.div
            className="floating-card card-one"
            animate={{
              y: [0, -20, 0],
              rotate: [-5, -2, -5],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <span>01</span>
            <strong>BUILD</strong>

            <div className="mini-progress">
              <motion.div
                animate={{
                  width: ["20%", "85%", "20%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              />
            </div>
          </motion.div>

          <motion.div
            className="floating-card card-two"
            animate={{
              y: [0, 15, 0],
              rotate: [5, 2, 5],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <span>02</span>
            <strong>IMPROVE</strong>

            <div className="mini-dots">
              <i></i>
              <i></i>
              <i></i>
            </div>
          </motion.div>

          <motion.div
            className="floating-card card-three"
            animate={{
              y: [0, -13, 0],
              rotate: [-3, 2, -3],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <span>03</span>
            <strong>CREATE</strong>

            <div className="mini-code">
              {"{ }"}
            </div>
          </motion.div>

          <motion.div
            className="hero-code code-one"
            animate={{
              y: [0, -15, 0],
              opacity: [0.2, 0.7, 0.2],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          >
            const
          </motion.div>

          <motion.div
            className="hero-code code-two"
            animate={{
              y: [0, 15, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
          >
            {"{ }"}
          </motion.div>

          <motion.div
            className="hero-code code-three"
            animate={{
              rotate: [0, 10, 0],
              opacity: [0.2, 0.7, 0.2],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
          >
            01/0
          </motion.div>

          <div className="hero-vertical-text">
            <span>CREATIVE</span>
            <span>DEVELOPER</span>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="hero-bottom-line"
        initial={{
          scaleX: 0,
        }}
        animate={{
          scaleX: 1,
        }}
        transition={{
          duration: 1.5,
          delay: 1.8,
        }}
      />

      <motion.div
        className="scroll-indicator"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 1.8,
        }}
      >
        <span>SCROLL TO EXPLORE</span>

        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
        >
          ↓
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;