import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar13 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuVariants = {
    hidden: { y: "-100%" },
    visible: { 
      y: 0,
      transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] }
    },
    exit: {
      y: "-100%",
      transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1], delay: 0.3 }
    }
  };

  const linkVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.3 + (i * 0.1), duration: 0.5, ease: "easeOut" }
    }),
    exit: { opacity: 0, y: 20, transition: { duration: 0.2 } }
  };

  const navLinks = [
    { title: "MY WORK", href: "#work" },
    { title: "TESTIMONIALS", href: "#testimonials" },
    { title: "CASE STUDY", href: "#casestudy" },
    { title: "RATE CARD", href: "#ratecard" },
    { title: "CONTACT", href: "#contact" }
  ];

  return (
    <>
      <motion.nav 
        className="fixed top-0 left-0 w-full z-[100] px-8 py-6 flex justify-between items-center bg-white/70 backdrop-blur-md border-b border-black/5 shadow-sm"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Left Links */}
        <div className="flex-1 flex justify-start gap-8 hidden md:flex">
          <a href="#work" className="text-[var(--primary-navy-dark)] font-bold tracking-widest text-sm hover:text-[var(--accent-blue)] transition-colors relative group">
            MY WORK
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--accent-blue)] transition-all group-hover:w-full"></span>
          </a>
          <a href="#testimonials" className="text-[var(--primary-navy-dark)] font-bold tracking-widest text-sm hover:text-[var(--accent-blue)] transition-colors relative group">
            TESTIMONIALS
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--accent-blue)] transition-all group-hover:w-full"></span>
          </a>
        </div>
        
        {/* Centered Logo */}
        <div className="flex-1 flex justify-center text-3xl font-bold tracking-[0.2em] text-[var(--primary-navy)] font-heading">
          ALFI
        </div>

        {/* Right Links */}
        <div className="flex-1 flex justify-end gap-8 hidden md:flex items-center">
          <a href="#casestudy" className="text-[var(--primary-navy-dark)] font-bold tracking-widest text-sm hover:text-[var(--accent-blue)] transition-colors relative group">
            CASE STUDY
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--accent-blue)] transition-all group-hover:w-full"></span>
          </a>
          <a href="#contact" className="bg-[var(--primary-navy)] text-white px-6 py-2 rounded-full font-bold tracking-widest text-sm hover:bg-[var(--accent-blue)] hover:-translate-y-0.5 transition-all shadow-md">
            CONTACT
          </a>
        </div>

        {/* Hamburger Icon for Mobile */}
        <button 
          onClick={toggleMenu}
          className="md:hidden flex flex-col justify-center items-center gap-1.5 z-[101]"
        >
          <motion.div animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }} className="w-8 h-0.5 bg-[var(--primary-navy-dark)]"></motion.div>
          <motion.div animate={isOpen ? { opacity: 0 } : { opacity: 1 }} className="w-8 h-0.5 bg-[var(--primary-navy-dark)]"></motion.div>
          <motion.div animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }} className="w-8 h-0.5 bg-[var(--primary-navy-dark)]"></motion.div>
        </button>
      </motion.nav>

      {/* Full Screen Overlay Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 bg-[var(--primary-navy)] z-[99] flex flex-col justify-center items-center"
          >
            <div className="flex flex-col items-center gap-8 mt-12">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.title}
                  href={link.href}
                  custom={i}
                  variants={linkVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  onClick={toggleMenu}
                  className="text-white text-4xl md:text-6xl font-heading tracking-widest hover:text-[var(--accent-blue)] transition-colors"
                >
                  {link.title}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar13;
