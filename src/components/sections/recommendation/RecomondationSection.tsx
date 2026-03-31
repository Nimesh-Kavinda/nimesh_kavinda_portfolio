"use client";
import React from "react";
import { motion } from "framer-motion";
import { Linkedin, ExternalLink } from "lucide-react";

export default function RecommendationSection() {
  const recommendations = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "Senior Product Manager",
      company: "Tech Innovations Inc.",
      recommendation:
        "Working with Nimesh has been an absolute pleasure. His technical expertise in full-stack development is outstanding, and he consistently delivers high-quality work ahead of schedule.",
      date: "Dec 2025",
      linkedinUrl: "https://linkedin.com/in/example",
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "CTO",
      company: "StartupHub",
      recommendation:
        "Nimesh is one of the most talented developers I've had the opportunity to work with. His deep understanding of modern web technologies and his ability to architect scalable solutions is remarkable.",
      date: "Nov 2025",
      linkedinUrl: "https://linkedin.com/in/example",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Lead Designer",
      company: "Creative Studio",
      recommendation:
        "Nimesh's ability to bridge the gap between design and development is impressive. He brought our design visions to life with pixel-perfect implementations and smooth animations.",
      date: "Oct 2025",
      linkedinUrl: "https://linkedin.com/in/example",
    },
    {
      id: 4,
      name: "David Kim",
      position: "Engineering Manager",
      company: "Global Solutions Corp",
      recommendation:
        "I highly recommend Nimesh for any full-stack development role. His expertise in both frontend and backend technologies, combined with his DevOps knowledge, makes him a versatile team member.",
      date: "Sep 2025",
      linkedinUrl: "https://linkedin.com/in/example",
    },
    {
      id: 5,
      name: "Lisa Anderson",
      position: "Project Manager",
      company: "Digital Agency Pro",
      recommendation:
        "Nimesh is not only technically brilliant but also an excellent communicator. He keeps stakeholders informed, meets deadlines consistently, and handles challenges with professionalism.",
      date: "Aug 2025",
      linkedinUrl: "https://linkedin.com/in/example",
    },
    {
      id: 6,
      name: "James Wilson",
      position: "Senior Developer",
      company: "Tech Ventures",
      recommendation:
        "Having Nimesh on our team elevated everyone's performance. He's always willing to help, share knowledge, and mentor junior developers. His code quality and best practices set a high standard.",
      date: "Jul 2025",
      linkedinUrl: "https://linkedin.com/in/example",
    },
  ];

  return (
    <section id="recommendations" className="py-24  text-[#F3F4F4] overflow-hidden" style={{
        backgroundColor: "#061E29",
        backgroundImage: "radial-gradient(circle, rgba(95, 149, 152, 0.4) 1.5px, transparent 1.5px)",
        backgroundSize: "30px 30px"
      }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
        {/* Header */}
        <motion.h2 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-[12vw] lg:text-[10rem] font-bilmond leading-[0.85] tracking-tighter uppercase text-[#F3F4F4]"
        >
          Kind // <br />
          <span className="text-[#F3F4F4]/20">Words</span>
        </motion.h2>
      </div>

      {/* Infinite Horizontal Marquee */}
      <div className="relative overflow-hidden py-10 garden-mask">
        <div className="flex gap-8 whitespace-nowrap marquee-scroll w-max">
          {/* Duplicate for infinite effect */}
          {[...recommendations, ...recommendations].map((rec, index) => (
            <div
              key={`${rec.id}-${index}`}
              className="w-[450px] md:w-[600px] flex-shrink-0 flex flex-col gap-6 p-10 md:p-12 border border-[#5F9598]/20 bg-white/[0.02] backdrop-blur-sm rounded-[2rem] hover:bg-white/[0.05] transition-[background-color,border-color] duration-500 transform-gpu"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-[#F3F4F4]">
                    {rec.name}
                  </h3>
                  <p className="text-[#F3F4F4]/40 uppercase text-[10px] tracking-[0.3em] font-semibold mt-1">
                    {rec.position} @ {rec.company}
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full border border-[#5F9598]/20 flex items-center justify-center">
                  <Linkedin className="w-4 h-4 text-[#F3F4F4]/40" />
                </div>
              </div>

              <p className="text-[#F3F4F4]/70 font-NeueHaas leading-relaxed text-lg md:text-xl italic font-light tracking-tight whitespace-normal line-clamp-4">
                "{rec.recommendation}"
              </p>

              <div className="mt-auto flex justify-between items-center pt-6 border-t border-[#1D546D]/50">
                <span className="text-[#F3F4F4]/20 font-mono text-[10px] tracking-widest uppercase">
                  Verified // {rec.date}
                </span>
                <span className="text-[#F3F4F4]/10 text-[10px] uppercase tracking-[0.2em] font-bold">
                  0{ (index % recommendations.length) + 1 }
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Gradient Overlays for smooth edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-20">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="pt-10 border-t border-[#1D546D]/50 flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <p className="text-[#F3F4F4]/20 text-[10px] uppercase tracking-[0.5em] font-bold">
            © 2026 // NIMESH KAVINDA
          </p>
          <div className="flex gap-8">
            <span className="text-[#F3F4F4]/30 text-[10px] uppercase tracking-[0.2em] font-bold">Trust</span>
            <span className="text-[#F3F4F4]/30 text-[10px] uppercase tracking-[0.2em] font-bold">Collaboration</span>
            <span className="text-[#F3F4F4]/30 text-[10px] uppercase tracking-[0.2em] font-bold">Results</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

