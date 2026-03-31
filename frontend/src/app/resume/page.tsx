"use client";

import React from "react";
import Image from "next/image";
import { Mail, Github, Linkedin, MapPin, Globe, Phone, Printer, GraduationCap, Calendar } from "lucide-react";
import { experiences } from "@/constants/experience";
import { skillsData } from "@/constants/skills";

export default function ResumePage() {
  const handlePrint = () => {
    window.print();
  };

  const educationData = [
    {
      year: "2023 - 2025",
      title: "Higher National Diploma in Information Technology",
      institution: "SLIATE",
      location: "Kegalle, Sri Lanka",
      description: "Specialized in Software Engineering, focusing on advanced data structures, algorithms, and full-stack development technologies."
    },
    {
      year: "2018 - 2020",
      title: "GCE Advanced Level",
      institution: "KG/Bandaranayake M.V",
      location: "Kegalle, Sri Lanka",
      description: "Completed undergraduate studies with a focus on computer science fundamentals, mathematics, and software engineering principles."
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-50 text-black p-4 md:p-12 font-sans selection:bg-gray-200">
      {/* Print Control - Hidden on Print */}
      <div className="max-w-4xl mx-auto mb-12 flex justify-between items-center print:hidden no-print">
        <button
          onClick={() => window.history.back()}
          className="text-sm font-medium text-gray-500 hover:text-black transition-colors flex items-center gap-2"
        >
          ← Back to Portfolio
        </button>
        <button
          onClick={handlePrint}
          className="flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full text-sm font-bold hover:bg-gray-800 transition-all shadow-xl hover:scale-105 active:scale-95"
        >
          <Printer size={18} />
          Print / Save as PDF
        </button>
      </div>

      <style jsx global>{`
        @media print {
          header, footer, nav, .no-print {
            display: none !important;
          }
          body {
            background: white !important;
            color: black !important;
            padding: 0 !important;
          }
          .resume-container {
            border: none !important;
            box-shadow: none !important;
            padding: 0 !important;
            width: 100% !important;
            max-width: none !important;
          }
          @page {
            margin: 1.5cm;
            size: A4;
          }
          .page-break {
            page-break-before: always;
          }
          section {
            break-inside: avoid;
          }
        }
      `}</style>

      {/* Resume Content */}
      <div className="resume-container max-w-4xl mx-auto bg-white border border-gray-200 p-10 md:p-16 shadow-2xl print:shadow-none print:border-none rounded-sm">
        
        {/* Header Section */}
        <header className="border-b-10 border-black pb-12 mb-16">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
            <div className="flex-1 space-y-8">
              <div className="space-y-4">
                <h1 className="text-7xl md:text-8xl font-black uppercase tracking-tighter leading-[0.8] text-black">
                  Nimesh<br />Kavinda
                </h1>
                <p className="text-2xl md:text-3xl font-light text-gray-500 tracking-[0.2em] uppercase">
                  Full-Stack Web Developer
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4">
                <div className="flex items-center gap-3 group">
                   <div className="w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 group-hover:bg-black group-hover:text-white transition-all duration-500"><Mail size={14} /></div>
                   <a href="mailto:nimeshkavindakarunasinghe@gmail.com" className="text-sm font-bold uppercase tracking-widest text-gray-600 hover:text-black transition-colors">nimeshkavindakarunasinghe@gmail.com</a>
                </div>
                <div className="flex items-center gap-3 group">
                   <div className="w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 group-hover:bg-black group-hover:text-white transition-all duration-500"><Phone size={14} /></div>
                   <a href="tel:0778525115" className="text-sm font-bold uppercase tracking-widest text-gray-600 hover:text-black transition-colors">0778525115</a>
                </div>
                <div className="flex items-center gap-3 group">
                   <div className="w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 group-hover:bg-black group-hover:text-white transition-all duration-500"><MapPin size={14} /></div>
                   <span className="text-sm font-bold uppercase tracking-widest text-gray-600">Kegalle, Sri Lanka</span>
                </div>
                <div className="flex items-center gap-3 group">
                   <div className="w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 group-hover:bg-black group-hover:text-white transition-all duration-500"><Globe size={14} /></div>
                   <a href="https://github.com/Nimesh-Kavinda" target="_blank" rel="noopener noreferrer" className="text-sm font-bold uppercase tracking-widest text-gray-600 hover:text-black transition-colors">github.com/Nimesh-Kavinda</a>
                </div>
              </div>

              <div className="flex items-center gap-6 pt-4 border-t border-gray-100 max-w-xs">
                 <a href="https://github.com/Nimesh-Kavinda" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-black transition-colors flex items-center gap-2 group">
                    <Github size={20} className="group-hover:scale-110 transition-transform" />
                    <span className="text-[10px] font-black uppercase tracking-widest">Github</span>
                 </a>
                 <div className="w-px h-4 bg-gray-200" />
                 <a href="http://www.linkedin.com/in/nimesh-kavinda-b363012b7" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-black transition-colors flex items-center gap-2 group">
                    <Linkedin size={20} className="group-hover:scale-110 transition-transform" />
                    <span className="text-[10px] font-black uppercase tracking-widest">LinkedIn</span>
                 </a>
              </div>
            </div>

            {/* Profile Image - Minimalist High Contrast */}
            <div className="relative group self-center lg:self-start">
              <div className="absolute inset-0 bg-black translate-x-3 translate-y-3 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500 -z-10" />
              <div className="relative w-48 h-64 md:w-56 md:h-72 border-2 border-black overflow-hidden bg-gray-100">
                <Image
                  src="/images/about.jpg" 
                  alt="Nimesh Kavinda"
                  fill
                  priority
                  className="object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:contrast-100 transition-all duration-1000"
                />
              </div>
            </div>
          </div>
        </header>

        {/* Summary */}
        <section className="mb-14">
          <h2 className="text-[11px] uppercase tracking-[0.4em] font-black text-black/30 mb-6 flex items-center gap-4">
            Professional Summary <div className="h-px bg-gray-100 flex-1" />
          </h2>
          <p className="text-xl leading-relaxed text-gray-800 font-medium italic border-l-4 border-black pl-6">
            &quot;Full-Stack Web Developer with professional experience at Oximay, internship experience at Vampior Designs, and freelance delivery across modern web applications, automation tools, and extension products.&quot;
          </p>
        </section>

        {/* Experience */}
        <section className="mb-14">
          <h2 className="text-[11px] uppercase tracking-[0.4em] font-black text-black/30 mb-8 flex items-center gap-4">
            Work Experience <div className="h-px bg-gray-100 flex-1" />
          </h2>
          <div className="space-y-12">
            {experiences.map((exp) => (
              <div key={exp.id} className="relative group">
                <div className="flex flex-col md:flex-row justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold tracking-tight text-black">{exp.title}</h3>
                    <p className="text-lg text-gray-500 font-semibold">{exp.company}</p>
                  </div>
                  <div className="md:text-right mt-2 md:mt-0">
                    <p className="text-sm font-bold bg-neutral-100 px-3 py-1 rounded-md inline-block mb-1">{exp.period}</p>
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">{exp.location}</p>
                  </div>
                </div>
                <ul className="space-y-3 text-gray-700 text-[15px] leading-snug">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-black font-bold mt-1.5">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Expertise */}
        <section className="mb-14">
          <h2 className="text-[11px] uppercase tracking-[0.4em] font-black text-black/30 mb-8 flex items-center gap-4">
            Technical Expertise <div className="h-px bg-gray-100 flex-1" />
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            {skillsData.map((skillGroup) => (
              <div key={skillGroup.id} className="break-inside-avoid">
                <h3 className="text-xs uppercase font-black tracking-widest text-black mb-3">
                  {skillGroup.category.split(" // ")[0]}
                </h3>
                <div className="flex flex-wrap gap-x-4 gap-y-2">
                  {skillGroup.skills.map((skill, i) => (
                    <span key={i} className="text-sm text-gray-600 font-medium">
                      {skill}{i !== skillGroup.skills.length - 1 ? " ·" : ""}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-14">
          <h2 className="text-[11px] uppercase tracking-[0.4em] font-black text-black/30 mb-8 flex items-center gap-4">
            Education <div className="h-px bg-gray-100 flex-1" />
          </h2>
          <div className="space-y-8">
            {educationData.map((edu, i) => (
              <div key={i} className="flex flex-col md:flex-row justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold">{edu.title}</h3>
                  <p className="text-md text-gray-500 font-bold">{edu.institution}</p>
                  <p className="text-sm text-gray-600 mt-2 max-w-2xl">{edu.description}</p>
                </div>
                <div className="md:text-right">
                  <span className="text-sm font-bold bg-neutral-100 px-3 py-1 rounded-md">{edu.year}</span>
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mt-2">{edu.location}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects (Detailed) */}
        <section className="mb-10">
          <h2 className="text-[11px] uppercase tracking-[0.4em] font-black text-black/30 mb-8 flex items-center gap-4">
            Signature Projects <div className="h-px bg-gray-100 flex-1" />
          </h2>
          <div className="grid grid-cols-1 gap-10">
            <div>
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-bold text-lg">TabTask - Enterprise SaaS</h3>
                <span className="text-[10px] uppercase font-bold text-gray-400">Collaborative Task Management</span>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                Engineered a comprehensive task management platform with complex Role-Based Access Control (RBAC), real-time sync via Socket.IO, and scalable PostgreSQL database. Features Kanban boards and advanced team analytics.
              </p>
              <p className="text-[10px] font-bold text-gray-400">Node.js · React · Socket.io · PostgreSQL · Redis · Supabase</p>
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-bold text-lg">Envio - Content Automation</h3>
                <span className="text-[10px] uppercase font-bold text-gray-400">Chrome Extension</span>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                Production-ready automation tool for bulk video generation, trusted by over 500 active users. Built with Manifest V3 and React 19, focusing on UX and performance scaling.
              </p>
              <p className="text-[10px] font-bold text-gray-400">React · Vite · Chrome MV3 · Firebase · Framer Motion</p>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-bold text-lg">Reframer - AI Video Tool</h3>
                <span className="text-[10px] uppercase font-bold text-gray-400">Media SaaS</span>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                AI-powered video reframing service utilizing a cloud-based AI processing API with token-based monetization and real-time processing dashboard.
              </p>
              <p className="text-[10px] font-bold text-gray-400">Express · AI Integration · Firebase · WebSocket</p>
            </div>
          </div>
        </section>

        {/* Footer Info */}
        <footer className="mt-20 pt-8 border-t border-gray-100 flex justify-between items-center text-[9px] text-gray-400 uppercase tracking-widest font-bold">
          <span>Portfolio-Generated Document</span>
          <span>©2026 Nimesh Kavinda</span>
          <span>Full-Stack Web Developer</span>
        </footer>
      </div>
    </div>
  );
}
