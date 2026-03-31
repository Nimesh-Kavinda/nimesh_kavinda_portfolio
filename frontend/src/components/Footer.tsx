"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "Github", url: "https://github.com/nimeshkavinda" },
    { name: "LinkedIn", url: "https://linkedin.com" },
    { name: "Twitter", url: "https://twitter.com" },
    { name: "Instagram", url: "https://instagram.com" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black text-white py-24 px-6 md:px-12 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-end">
          {/* Left Side: Big Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-[12vw] lg:text-[8rem] font-bilmond leading-[0.85] tracking-tighter uppercase text-white mb-12">
              Let&apos;s <br />
              <span className="text-white/20">Connect</span>
            </h2>
            
            <a 
              href="mailto:nimeshkavinda@email.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl md:text-4xl font-NeueHaas font-light tracking-tight hover:text-white/50 transition-colors duration-500"
            >
              nimeshkavinda@email.com
            </a>
          </motion.div>

          {/* Right Side: Navigation & Socials */}
          <div className="flex flex-col gap-16 lg:items-end">
            <div className="flex flex-wrap gap-x-12 gap-y-6 lg:justify-end">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  className="text-sm uppercase tracking-[0.3em] font-bold text-white/40 hover:text-white transition-colors duration-300"
                >
                  {social.name}
                </motion.a>
              ))}
            </div>

            <button
              onClick={scrollToTop}
              className="group flex items-center gap-4 text-sm uppercase tracking-[0.3em] font-bold text-white/20 hover:text-white transition-colors duration-500"
            >
              Back to Top
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white transition-colors">
                <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
              </div>
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-32 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col gap-2 scale-75 md:scale-100 items-center md:items-start">
            <span className="text-[10px] uppercase tracking-[0.5em] text-white/20 font-bold">
              © {currentYear} | NIMESH KAVINDA
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-white/10 font-bold">
              Designed & Developed by Nimesh Kavinda
            </span>
          </div>

          <div className="flex items-center gap-8">
            <div className="flex flex-col items-center md:items-end gap-1">
              <span className="text-[10px] uppercase tracking-[0.3em] text-white/20 font-bold">Local Time</span>
              <span className="text-xs font-mono text-white/40 uppercase">Sri Lanka</span>
            </div>
            
            <motion.div 
              animate={{ opacity: [0.2, 1, 0.2] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

