"use client";

import React from "react";
import { motion } from "framer-motion";
import Beams from "@/components/Beams";
import { ArrowDown } from "lucide-react";

export default function Heropage() {
  const dynamicWords = [
    "Planning",
    "Designing",
    "Coding",
    "Testing",
    "Deploying",
  ];

  return (
    <section
      id="home"
      className="relative min-h-[100dvh] w-full flex flex-col bg-[#080808] overflow-hidden font-NeueHaas select-none"
    >
      {/* Visual Identity Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] bg-white/[0.02] rounded-full blur-[150px]" />
        <Beams
          beamWidth={3}
          beamHeight={30}
          beamNumber={20}
          lightColor="#F3F4F4"
          speed={2}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={30}
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col flex-1 pt-24 sm:pt-32">
        {/* Semantic H1 for SEO */}
        <h1 className="sr-only">Nimesh Kavinda | Full-Stack Web Developer Portfolio</h1>

        {/* Centerpiece Layout */}
        <div className="flex-1 flex flex-col justify-center items-center text-center">
          <div className="relative w-full max-w-6xl">
            {/* Background Big Text Overlay with extra blur */}
            <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[22vw] lg:text-[24rem] font-bilmond text-[#F3F4F4]/[0.035] leading-none select-none pointer-events-none whitespace-nowrap blur-[2px]">
              ENGINEERING
            </h2>

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10"
            >
              <h2 className="text-[14vw] lg:text-[11rem] font-bilmond leading-[1.1] tracking-tighter uppercase flex flex-col items-center">
                <span className="block italic opacity-40 mb-2 sm:mb-4 text-[#F3F4F4] tracking-[0.1em] text-[4vw] lg:text-[3rem]">
                  Creative
                </span>
                <div className="relative h-[1.2em] w-full flex justify-center items-center overflow-hidden">
                  {dynamicWords.map((word, i) => (
                    <motion.span
                      key={word}
                      initial={{ y: "100%", opacity: 0 }}
                      animate={{
                        y: ["100%", "0%", "0%", "-100%"],
                        opacity: [0, 1, 1, 0],
                      }}
                      transition={{
                        duration: 4,
                        times: [0, 0.1, 0.9, 1],
                        ease: [0.23, 1, 0.32, 1],
                        repeat: Infinity,
                        delay: i * 4,
                        repeatDelay: (dynamicWords.length - 1) * 4,
                      }}
                      className="absolute text-[#F3F4F4] drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]"
                    >
                      {word}
                    </motion.span>
                  ))}
                </div>
              </h2>

              {/* Decorative line under main text */}
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "120px", opacity: 1 }}
                transition={{ delay: 1.5, duration: 1.2 }}
                className="h-px bg-gradient-to-r from-transparent via-white/50 to-transparent mx-auto mt-4"
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="mt-20 sm:mt-28 flex flex-col items-center gap-12 max-w-2xl"
          >
            <p className="text-[#F3F4F4]/40 text-sm sm:text-lg leading-relaxed font-light tracking-wide italic max-w-lg">
              "Turning complex structural requirements into seamless digital
              experiences through modern engineering paradigms."
            </p>

            <a
              href="#projects"
              className="group relative flex flex-col items-center gap-6"
            >
              {/* Main Button Circle */}
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center transition-all duration-700">
                {/* Outer Rotating Ring */}
                <div className="absolute inset-0 rounded-full border border-[#5F9598]/20 group-hover:border-[#1D546D]/500 group-hover:scale-110 transition-all duration-700" />

                {/* Spinning Dash Ring (Optional visual flair) */}
                <svg className="absolute inset-0 w-full h-full animate-[spin_10s_linear_infinite] opacity-20 group-hover:opacity-100 transition-opacity">
                  <circle
                    cx="50%"
                    cy="50%"
                    r="48%"
                    stroke="white"
                    strokeWidth="1"
                    fill="none"
                    strokeDasharray="4 8"
                  />
                </svg>

                {/* Inner Solid Core */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#1D546D]/20 border border-[#5F9598]/20 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all duration-500 z-10">
                  <ArrowDown className="w-5 h-5 text-[#F3F4F4]/60 group-hover:text-[#061E29] group-hover:scale-110 transition-all duration-500" />
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-full bg-white/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>

              <div className="flex flex-col items-center gap-1">
                <span className="text-[10px] uppercase font-bold tracking-[0.6em] text-[#F3F4F4]/80 group-hover:text-[#F3F4F4] transition-colors">
                  Start Journey
                </span>
                <span className="text-[8px] uppercase tracking-[0.4em] text-[#F3F4F4]/20 group-hover:text-[#F3F4F4]/40 transition-colors italic">
                  Scroll to Discover
                </span>
              </div>
            </a>
          </motion.div>
        </div>

        {/* Global Footer Stats */}
        <div className="py-12 border-t border-[#1D546D]/50 grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
          {/* Top Info Bar Moved Here */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center md:items-start gap-1.5"
          >
            <span className="text-[#F3F4F4] text-[11px] font-bold uppercase tracking-[0.4em]">
              Nimesh Kavinda
            </span>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
              <span className="text-[#F3F4F4]/30 text-[9px] uppercase tracking-[0.3em]">
                Full-Stack Web Developer
              </span>
            </div>
          </motion.div>

          {/* Availability Block */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center gap-1.5"
          >
            <span className="text-[#F3F4F4]/20 text-[8px] uppercase tracking-[0.4em]">
              Availability
            </span>
            <span className="text-[#F3F4F4]/60 text-[9px] uppercase font-bold tracking-[0.2em] px-3 py-1 bg-white/[0.03] border border-[#1D546D]/50 rounded-full backdrop-blur-sm w-fit">
              Remote • Global
            </span>
          </motion.div>

          <div className="flex justify-center md:justify-end items-center">
            <span className="text-[#F3F4F4]/10 text-[9px] tracking-[0.3em]">
              ©26/NIMESH
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
