"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import { useState, useRef } from "react";
import "@/styles/header.css";

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest: number) => {
    const previous = lastScrollY.current;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    lastScrollY.current = latest;
  });

  const navItems = [
    { name: "home", path: "#home", isSection: true },
    { name: "about", path: "#about", isSection: true },
    { name: "skills", path: "#skills", isSection: true },
    { name: "experience", path: "#experience", isSection: true },
    { name: "projects", path: "#projects", isSection: true },
    { name: "contact me", path: "#contact", isSection: true, isContactButton: true },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: typeof navItems[0]) => {
    if (item.isSection) {
      e.preventDefault();
      setActiveSection(item.path);
      
      if (pathname !== '/') {
        window.location.href = '/' + item.path;
        return;
      }
      
      const element = document.querySelector(item.path);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <motion.nav
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: -100, opacity: 0 },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 w-full z-50 flex justify-center pt-6 px-6"
    >
      <div className="flex items-center justify-between w-full max-w-7xl">
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-2 mx-auto px-2 py-2 bg-white/[0.08] backdrop-blur-2xl border border-white/20 rounded-full">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              onClick={(e) => handleNavClick(e, item)}
              className={`
                px-6 py-2.5 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold transition-all duration-500
                ${
                  item.isContactButton
                    ? "bg-white text-[#061E29] hover:bg-white/90 ml-2"
                    : (item.isSection ? activeSection === item.path : pathname === item.path)
                    ? "text-[#F3F4F4] bg-white/20"
                    : "text-[#F3F4F4]/60 hover:text-[#F3F4F4]"
                }
              `}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button - Minimalist Style */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden ml-auto p-4 text-[#F3F4F4] bg-white/10 backdrop-blur-xl border border-[#5F9598]/20 rounded-full hover:bg-white/20 transition-all"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu - High-end Minimal Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#061E29]/98 backdrop-blur-3xl z-40 flex flex-col items-center justify-center"
          >
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-10 right-10 p-6 text-[#F3F4F4]/50 hover:text-[#F3F4F4] transition-colors"
            >
              <X className="w-8 h-8 font-light" />
            </button>
            
            <ul className="flex flex-col gap-6 text-center">
              {navItems.map((item, index) => (
                <motion.li 
                  key={item.path}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.05, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    href={item.path}
                    onClick={(e) => {
                      handleNavClick(e, item);
                      setIsMenuOpen(false);
                    }}
                    className="text-4xl md:text-7xl font-bold uppercase tracking-tighter hover:text-[#F3F4F4] transition-colors block text-[#F3F4F4]/30"
                  >
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </ul>

            <div className="absolute bottom-16 text-[10px] uppercase tracking-[0.5em] text-[#F3F4F4]/10 font-bold">
              © 2026 // NIMESH KAVINDA
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}