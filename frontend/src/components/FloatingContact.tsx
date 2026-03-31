"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle,
  Mail,
  Linkedin,
  Github,
  X,
  Twitter,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const contactLinks = [
  {
    name: "WhatsApp",
    icon: <FaWhatsapp className="w-5 h-5" />,
    url: "https://wa.me/94778525115",
    hoverColor: "text-[#25D366]",
  },
  {
    name: "Mail",
    icon: <Mail className="w-5 h-5" />,
    url: "mailto:nimeshkavindakarunasinghe@gmail.com",
    hoverColor: "text-red-400",
  },
  {
    name: "LinkedIn",
    icon: <Linkedin className="w-5 h-5" />,
    url: "http://www.linkedin.com/in/nimesh-kavinda-b363012b7",
    hoverColor: "text-blue-400",
  },
  {
    name: "Github",
    icon: <Github className="w-5 h-5" />,
    url: "https://github.com/Nimesh-Kavinda",
    hoverColor: "text-white",
  },
];

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-center gap-4">
      {/* Contact Icons List */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="flex flex-col gap-3 mb-2"
          >
            {contactLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0,  }}
                animate={{ 
                  opacity: 1, 
                  
                  transition: { delay: index * 0.05 } 
                }}
                whileHover={{ scale: 1.05, }}
                className="w-11 h-11 bg-white/[0.03] border border-white/10 backdrop-blur-2xl rounded-full flex items-center justify-center text-white/50 transition-all duration-300 relative group hover:bg-white/[0.08] hover:border-white/20 active:scale-95"
              >
                <div className={`transition-colors duration-300 ${link.hoverColor}`}>
                  {link.icon}
                </div>
                
                {/* Minimalist Tooltip */}
                <span className="absolute right-14 px-3 py-1.5 bg-black/80 backdrop-blur-xl border border-white/5 rounded-md text-[9px] font-black uppercase tracking-[0.2em] text-white/40 opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none translate-x-2 group-hover:translate-x-0">
                  {link.name}
                </span>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`w-14 h-14 rounded-full flex items-center justify-center text-white/80 ${
          isOpen ? "bg-white/10 border-white/20" : "bg-white/10 border-white/10"
        } border backdrop-blur-3xl shadow-2xl transition-all duration-500 group relative overflow-hidden active:scale-90`}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ opacity: 0, rotate: -45 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 45 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-5 h-5 flex-shrink-0" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ opacity: 0, rotate: 45 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: -45 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle className="w-5 h-5" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
