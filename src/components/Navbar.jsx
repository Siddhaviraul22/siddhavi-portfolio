import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const handleClick = () => {
    setMenuOpen(false);
  };

  return (
    <motion.header
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <a href="#home" className="logo">
        <span className="logo-symbol">&lt;</span>
        SR
        <span className="logo-symbol">/&gt;</span>
      </a>

      <nav className="desktop-nav">
        {links.map((link, index) => (
          <motion.a
            key={link.name}
            href={link.href}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.08,
              duration: 0.5,
            }}
          >
            <span className="nav-number">
              0{index + 1}
            </span>
            {link.name}
          </motion.a>
        ))}
      </nav>

      <a href="#contact" className="nav-button">
        Let's Talk
      </a>

      <button
        className={`menu-button ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
      </button>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{
              opacity: 0,
              clipPath: "inset(0 0 100% 0)",
            }}
            animate={{
              opacity: 1,
              clipPath: "inset(0 0 0% 0)",
            }}
            exit={{
              opacity: 0,
              clipPath: "inset(0 0 100% 0)",
            }}
            transition={{
              duration: 0.5,
            }}
          >
            {links.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={handleClick}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: index * 0.07,
                }}
              >
                <span>0{index + 1}</span>
                {link.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Navbar;