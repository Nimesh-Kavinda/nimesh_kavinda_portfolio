"use client";
import React, { Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import {
  ArrowLeft,
  Calendar,
  MapPin,
  Briefcase,
  Code,
  Award,
  CheckCircle2,
  Lightbulb,
  FolderGit2,
} from "lucide-react";
import { experiences, Experience } from "@/constants/experience";

function ExperienceDetailContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const experienceId = searchParams.get("id");

  const experience = experiences.find(
    (exp: Experience) => exp.id === Number(experienceId)
  );

  if (!experience) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center font-bilmond">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-8 opacity-20 uppercase tracking-tighter">Experience Not Found</h1>
          <button
            onClick={() => router.push("/#experience")}
            className="px-8 py-3 border border-white/10 hover:bg-white/5 transition-colors uppercase text-xs tracking-[0.2em] font-bold"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white py-24 font-bilmond relative overflow-hidden">
      {/* Subtle Noise/Grid Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3C%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
      />
      
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        {/* Navigation */}
        <button
          onClick={() => router.push("/#experience")}
          className="flex items-center gap-4 text-white/30 hover:text-white transition-all mb-20 group uppercase text-[10px] tracking-[0.3em] font-bold"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-2 transition-transform" />
          <span>Exit Journey</span>
        </button>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12 mb-32 items-end">
          <div>
            <div className="flex items-center gap-3 mb-6">
              
              <span className=" text-[10px] uppercase tracking-[0.4em] ">
                {experience.type}
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold uppercase tracking-tighter leading-[0.85] mb-8">
              {experience.title.split(' ').map((word, i) => (
                <React.Fragment key={i}>
                  {word} <br className="hidden md:block" />
                </React.Fragment>
              ))}
            </h1>
            <div className="flex flex-wrap gap-12 text-white/40">
              <div className="space-y-1">
                <span className="block text-[10px] uppercase tracking-widest font-bold opacity-30">Organization</span>
                <span className="text-xl md:text-2xl text-white font-medium">{experience.company}</span>
              </div>
              <div className="space-y-1">
                <span className="block text-[10px] uppercase tracking-widest font-bold opacity-30">Timeframe</span>
                <span className="text-xl md:text-2xl text-white font-medium">{experience.period}</span>
              </div>
              <div className="space-y-1">
                <span className="block text-[10px] uppercase tracking-widest font-bold opacity-30">Geography</span>
                <span className="text-xl md:text-2xl text-white font-medium">{experience.location}</span>
              </div>
            </div>
          </div>
          <div className="hidden lg:block pb-4">
            <div className="aspect-square border border-white/10 rounded-full flex items-center justify-center opacity-20 rotate-12 transition-transform hover:rotate-0 duration-700">
               <Briefcase className="w-24 h-24" />
            </div>
          </div>
        </div>

        {/* Content Modules */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-20">
          
          {/* Left Column: Narrative */}
          <div className="md:col-span-8 space-y-32">
            
            {/* Overview */}
            <section className="space-y-8">
              <h3 className="text-xs uppercase tracking-[0.4em] font-bold text-white/20 border-b border-white/10 pb-4">01 // The Role</h3>
              <p className="text-xl md:text-2xl text-gray-400 leading-relaxed font-sans font-light">
                {experience.detailedDescription}
              </p>
            </section>

            {/* Achievements */}
            <section className="space-y-12">
              <h3 className="text-xs uppercase tracking-[0.4em] font-bold text-white/20 border-b border-white/10 pb-4">02 // Impact</h3>
              <div className="grid gap-8">
                {experience.achievements.map((achievement: string, index: number) => (
                  <div key={index} className="group flex gap-8 items-start">
                    <span className="text-blue-500/30 font-bold font-sans text-sm mt-1">0{index + 1}</span>
                    <p className="text-lg md:text-xl text-gray-300 font-sans group-hover:text-white transition-colors duration-500">
                      {achievement}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Responsibilities */}
            <section className="space-y-12">
              <h3 className="text-xs uppercase tracking-[0.4em] font-bold text-white/20 border-b border-white/10 pb-4">03 // Execution</h3>
              <ul className="space-y-6">
                {experience.responsibilities.map((res: string, index: number) => (
                  <li key={index} className="flex items-center gap-4 text-gray-400 font-sans group hover:text-white transition-all">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500/20 group-hover:bg-blue-500 transition-colors" />
                    <span className="text-lg">{res}</span>
                  </li>
                ))}
              </ul>
            </section>

          </div>

          {/* Right Column: Metadata */}
          <div className="md:col-span-4 space-y-20">
            
            {/* Technologies */}
            <section className="space-y-8">
              <h3 className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/20">Technology Stack</h3>
              <div className="flex flex-wrap gap-x-6 gap-y-4">
                {experience.technologies.map((tech: string, index: number) => (
                  <div key={index} className="group flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-blue-500/40" />
                    <span className="text-sm uppercase tracking-widest text-white/60 group-hover:text-white transition-colors">
                      {tech}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Skills */}
            <section className="space-y-8">
              <h3 className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/20">Competencies</h3>
              <div className="grid gap-4">
                {experience.skills.map((skill: string, index: number) => (
                  <div key={index} className="text-sm uppercase tracking-[0.2em] text-white/40 border-l border-white/10 pl-4 py-1 hover:border-blue-500/50 hover:text-white transition-all">
                    {skill}
                  </div>
                ))}
              </div>
            </section>

            {/* Projects Small list */}
            <section className="space-y-8">
              <h3 className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/20">Core Projects</h3>
              <div className="space-y-10">
                {experience.projects.map((project: any, index: number) => (
                  <div key={index} className="group">
                    <h4 className="text-lg font-bold mb-2 group-hover:text-blue-400 transition-colors">{project.name}</h4>
                    <p className="text-sm text-gray-500 font-sans line-clamp-2 mb-4 leading-relaxed group-hover:text-gray-400 transition-colors">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-4">
                       {project.technologies.slice(0, 3).map((t: string) => (
                         <span key={t} className="text-[9px] uppercase tracking-[0.2em] text-white/20">{t}</span>
                       ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

          </div>
        </div>

        {/* Footer Signature */}
        <div className="mt-40 pt-10 border-t border-white/5 flex justify-between items-center text-white/10 text-[10px] uppercase tracking-[0.5em] font-bold">
          <span>End of Record</span>
          <span>© 2026 // BG</span>
        </div>
      </div>
    </div>
  );
}

export default function ExperienceDetailPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen relative text-white flex items-center justify-center overflow-hidden">
          <div className="text-2xl">Loading...</div>
          <div
            className="fixed inset-0 -z-10"
            style={{
              background: "#000000",
              backgroundImage: `
                radial-gradient(circle, rgba(255, 255, 255, 0.2) 1.5px, transparent 1.5px)
              `,
              backgroundSize: "30px 30px",
              backgroundPosition: "0 0",
            }}
          />
        </div>
      }
    >
      <ExperienceDetailContent />
    </Suspense>
  );
}
