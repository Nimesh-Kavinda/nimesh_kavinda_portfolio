"use client";
import React from "react";
import { motion } from "framer-motion";
import { skillsData } from "@/constants/skills";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6 md:px-12  bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-24 lg:mb-32">
          <motion.h2 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-[15vw] lg:text-[12rem] font-bilmond leading-[0.85] tracking-tighter uppercase text-white"
          >
            Technical // <br />
            <span className="text-white/20">Toolkit</span>
          </motion.h2>
        </div>

        {/* Categories Grid */}
        <div className="flex flex-col border-t border-white/10">
          {skillsData.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="group py-12 md:py-20 border-b border-white/10 hover:bg-white/1 transition-all duration-500 px-4 md:px-8 -mx-4 md:-mx-8"
            >
              <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] xl:grid-cols-[450px_1fr] gap-12 lg:gap-16 items-start">
                {/* Category Title */}
                <div className="flex flex-col gap-4">
                  <span className="text-white/20 font-mono text-sm tracking-widest">
                    0{index + 1} //
                  </span>
                  <h3 className="text-4xl md:text-5xl lg:text-5xl font-bold uppercase tracking-tight group-hover:text-white transition-colors wrap-break-word">
                    {category.category.split(" // ")[0]} <br className="hidden sm:block" />
                    <span className="text-white/30">{category.category.split(" // ")[1]}</span>
                  </h3>
                </div>

                {/* Skills Cloud */}
                <div className="flex flex-wrap gap-x-12 gap-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      whileHover={{ scale: 1.05, x: 5 }}
                      className="group/skill relative"
                    >
                      <span className="text-xl md:text-3xl font-NeueHaas font-light tracking-tight text-white/50 group-hover/skill:text-white transition-colors duration-300">
                        {skill}
                      </span>
                      <div className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover/skill:w-full opacity-50" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Note */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <p className="text-white/20 text-[10px] uppercase tracking-[0.5em] font-bold">
            © 2026 // NIMESH KAVINDA
          </p>
          <div className="flex gap-8">
            <span className="text-white/30 text-[10px] uppercase tracking-[0.2em] font-bold">Scalable</span>
            <span className="text-white/30 text-[10px] uppercase tracking-[0.2em] font-bold">Efficient</span>
            <span className="text-white/30 text-[10px] uppercase tracking-[0.2em] font-bold">Modern</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

