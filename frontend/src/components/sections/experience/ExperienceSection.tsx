"use client";
import React from "react";
import {
  Calendar,
  MapPin,
  ArrowUpRight,
  Code,
  Rocket,
  Users,
  Award,
} from "lucide-react";
import Link from "next/link";
import { experiences } from "@/constants/experience";

export default function ExperienceSection() {
  const iconMap: any = {
    Code: <Code className="w-5 h-5" />,
    Rocket: <Rocket className="w-5 h-5" />,
    Users: <Users className="w-5 h-5" />,
    Award: <Award className="w-5 h-5" />,
  };

  return (
    <section
      id="experience"
      className="min-h-screen text-[#F3F4F4] py-24 font-bilmond overflow-hidden" style={{
        backgroundColor: "#061E29",
        backgroundImage: "radial-gradient(circle, rgba(95, 149, 152, 0.4) 1.5px, transparent 1.5px)",
        backgroundSize: "30px 30px"
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Section Header */}
        <div className="mb-24 text-right">
          <h2 className="text-5xl md:text-7xl lg:text-9xl font-bold uppercase tracking-tighter leading-none">
            Work <br />
            <span className="text-[#F3F4F4] opacity-20">Experience</span>
          </h2>
        </div>

        {/* Experience List - Minimalist Row based layout */}
        <div className="space-y-0 backdrop-blur-md border border-[#5F9598]/20 p-6 rounded-3xl">
          {experiences.map((exp) => (
            <Link 
              key={exp.id} 
              href={`/view_experience?id=${exp.id}`}
              className="group block relative  border-b border-[#5F9598]/20 py-12 md:py-16 transition-all duration-700 hover:bg-white/[0.02]"
            >
              <div className="grid grid-cols-1 md:grid-cols-[200px_1fr_auto]  gap-8 items-start">
                
                {/* Period & Type */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-[#F3F4F4]/50  transition-colors">
                    <Calendar className="w-4 h-4" />
                    <span className="text-lg font-bold tracking-widest">{exp.period}</span>
                  </div>
                  <div className="inline-flex px-2 py-0.5 border border-[#5F9598]/20 rounded text-[10px] uppercase tracking-widest text-[#F3F4F4]/40  transition-all">
                    {exp.type}
                  </div>
                </div>

                {/* Main Content */}
                <div className="space-y-4">
                  <div className="space-y-1 ">
                    <h3 className="text-3xl md:text-5xl font-bold tracking-tight group-hover:translate-x-2 transition-transform duration-500">
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-3">
                      <span className="text-xl md:text-2xl text-[#F3F4F4]/50 font-medium">
                        {exp.company}
                      </span>
                      <span className="flex items-center gap-1 text-[#F3F4F4]/30 text-sm italic">
                        <MapPin className="w-3.5 h-3.5" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <p className="text-[#5F9598] text-lg leading-relaxed max-w-3xl font-sans opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                    {exp.description}
                  </p>

                  {/* Tech Tags - Minimalist */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {exp.technologies.slice(0, 5).map((tech, i) => (
                      <span 
                        key={i} 
                        className="text-[11px] uppercase tracking-[0.2em] text-[#F3F4F4]/30 border-b border-[#1D546D]/50"
                      >
                        {tech}
                      </span>
                      
                    ))}
                  </div>
                  <div className="w-full  mx-auto justify-center items-center flex">
                    <span className="text-[#F3F4F4]/20 text-center ">click here to view full details </span>
                  </div>
                </div>


                {/* Action Icon */}
                <div className="hidden md:flex items-center justify-center p-4 rounded-full border border-[#5F9598]/20 opacity-0 group-hover:opacity-100 group-hover:rotate-45 transition-all duration-700">
                  <ArrowUpRight className="w-6 h-6 " />
                </div>
              </div>
            </Link>
            
          ))}
          
          
          
        </div>
      </div>
    </section>
  );
}
