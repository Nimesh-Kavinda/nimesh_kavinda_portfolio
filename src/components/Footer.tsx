"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "Github", url: "https://github.com/Nimesh-Kavinda" },
    { name: "LinkedIn", url: "http://www.linkedin.com/in/nimesh-kavinda-b363012b7" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#061E29] text-[#F3F4F4] py-24 px-6 md:px-12 border-t border-[#1D546D]/50 overflow-hidden">
      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start pb-24 md:pb-40">
          {/* Main Title Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-8 flex flex-col gap-12"
          >
            <div className="overflow-hidden">
              <h2 className="text-[clamp(4rem,15vw,12rem)] font-bilmond leading-[0.8] tracking-[-0.02em] uppercase text-[#F3F4F4]">
                <span className="block hover:translate-x-4 transition-transform duration-500 ease-out">Let&apos;s</span>
                <span className="block text-[#F3F4F4]/30 hover:translate-x-8 transition-transform duration-500 ease-out italic pr-4">Collaborate</span>
              </h2>
            </div>
            
            <a
              href="mailto:nimeshkavindakarunasinghe@gmail.com"
              className="group inline-flex items-center gap-6 text-xl md:text-3xl font-NeueHaas font-light tracking-wide text-[#F3F4F4]/80 hover:text-white transition-colors w-fit"
            >
              <div className="relative overflow-hidden pb-1">
                <span>nimeshkavindakarunasinghe@gmail.com</span>
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
              </div>
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-[#1D546D] flex items-center justify-center group-hover:bg-white group-hover:text-black group-hover:scale-110 transition-all duration-500">
                <ArrowUp className="w-5 h-5 md:w-6 md:h-6 rotate-45 group-hover:rotate-0 transition-transform duration-500" />
              </div>
            </a>
          </motion.div>

          {/* Social Links & Back to Top */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 1 }}
            className="lg:col-span-4 flex flex-row lg:flex-col justify-between items-start lg:items-end gap-16"
          >
            <div className="flex flex-col gap-8">
              <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#F3F4F4]/40 mb-2">Socials</span>
              <div className="flex flex-col gap-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 text-sm md:text-lg uppercase tracking-[0.2em] font-medium text-[#F3F4F4]/60 hover:text-white transition-colors"
                  >
                    <span className="relative overflow-hidden pb-1">
                      {social.name}
                      <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
                    </span>
                    <ArrowUp className="w-4 h-4 rotate-45 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </a>
                ))}
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="group flex flex-col items-center gap-4 group cursor-pointer"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-[#1D546D] flex items-center justify-center bg-[#061E29] hover:bg-white hover:border-white transition-all duration-500 overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center transform group-hover:-translate-y-[150%] transition-transform duration-500">
                  <ArrowUp className="w-6 h-6 text-[#F3F4F4]/60" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center transform translate-y-[150%] group-hover:translate-y-0 transition-transform duration-500">
                  <ArrowUp className="w-6 h-6 text-black" />
                </div>
              </div>
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#F3F4F4]/40 group-hover:text-white transition-colors duration-300">
                Back to Top
              </span>
            </button>
          </motion.div>
        </div>

        {/* Bottom Bar Full Width */}
        <div className="pt-8 border-t border-[#1D546D]/30 flex flex-col md:flex-row justify-between items-center gap-6 text-[#F3F4F4]/40">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-8">
            <span className="text-xs uppercase tracking-[0.2em] font-light">
              © {currentYear} Nimesh Kavinda
            </span>
            <span className="hidden md:block w-1 h-1 rounded-full bg-[#1D546D]" />
            <span className="text-xs uppercase tracking-[0.2em] font-light">
              All Rights Reserved
            </span>
          </div>

          <div className="flex items-center gap-4 bg-[#0a2836] px-4 py-2 rounded-full border border-[#1D546D]/30">
            <div className="relative flex items-center justify-center w-3 h-3">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-20 animate-ping"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
            </div>
            <span className="text-[10px] md:text-xs font-mono uppercase tracking-widest text-emerald-400/80">
              Colombo, Sri Lanka
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

