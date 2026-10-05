import { useEffect, useState } from "react";
import { motion } from "motion/react";

function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const moveCursor = (event) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });

      setVisible(true);
    };

    const handleMouseOver = (event) => {
      const target = event.target.closest(
        "a, button, .project-card, .skill-card, .certificate-card, .stat-item, .experience-card-inner, .education-card, .floating-card"
      );

      setHovering(Boolean(target));
    };

    const handleMouseLeave = () => {
      setVisible(false);
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <>
      <motion.div
        className={`cursor-dot ${visible ? "cursor-visible" : ""}`}
        animate={{
          x: position.x,
          y: position.y,
          scale: hovering ? 1.8 : 1,
        }}
        transition={{
          duration: 0.02,
        }}
      />

      <motion.div
        className={`cursor-ring ${hovering ? "cursor-hover" : ""}`}
        animate={{
          x: position.x,
          y: position.y,
        }}
        transition={{
          duration: 0.08,
          ease: "easeOut",
        }}
      />

      <motion.div
        className="cursor-aura"
        animate={{
          x: position.x,
          y: position.y,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.15,
        }}
      />
    </>
  );
}

export default CustomCursor;