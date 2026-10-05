import { motion } from "motion/react";

function AnimatedBackground() {
  return (
    <div className="animated-background">
      <div className="background-grid"></div>

      <motion.div
        className="background-orb orb-one"
        animate={{
          x: [0, 120, -80, 0],
          y: [0, -100, 80, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="background-orb orb-two"
        animate={{
          x: [0, -100, 80, 0],
          y: [0, 80, -100, 0],
          scale: [1, 0.8, 1.2, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="background-orb orb-three"
        animate={{
          x: [0, 70, -60, 0],
          y: [0, 100, -50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="floating-symbol symbol-one">&lt;/&gt;</div>
      <div className="floating-symbol symbol-two">{"{}"}</div>
      <div className="floating-symbol symbol-three">01</div>
      <div className="floating-symbol symbol-four">JS</div>
      <div className="floating-symbol symbol-five">JAVA</div>
    </div>
  );
}

export default AnimatedBackground;