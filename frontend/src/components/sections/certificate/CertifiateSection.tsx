"use client";
import React from "react";
import {
  GraduationCap,
  Calendar,
  MapPin,
  Award,
  BookOpen,
} from "lucide-react";

export default function CertificateSection() {
  const educationData = [
    {
      id: 1,
      year: "2018 - 2020",
      title: "GCE Advanced Level",
      institution: "KG/Bandaranayake M.V",
      location: "Kegalle, Sri Lanka",
      description:
        "Completed undergraduate studies with a focus on computer science fundamentals, mathematics, and software engineering principles.",
      icon: <BookOpen className="w-5 h-5" />,
    },
    {
      id: 2,
      year: "2023 - 2025",
      title: "Higher National Diploma in Information Technology",
      institution: "SLIATE",
      location: "Kegalle, Sri Lanka",
      description:
        "Specialized in Software Engineering, focusing on advanced data structures, algorithms, and full-stack development technologies.",
      icon: <GraduationCap className="w-5 h-5" />,
    },
    // {
    //   id: 3,
    //   year: "2018 - 2022",
    //   title: "Master Degree",
    //   institution: "University of Moratuwa",
    //   location: "Moratuwa, Sri Lanka",
    //   description:
    //     "Advanced research in Artificial Intelligence and Machine Learning, exploring modern architectures and scalable systems.",
    //   icon: <Award className="w-5 h-5" />,
    // },
  ];

  return (
    <section
      id="certificates"
      className="min-h-screen py-24 font-bilmond text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Section Header */}
        <div className="mb-24 text-right">
          <h2 className="text-5xl md:text-7xl lg:text-9xl font-bold uppercase tracking-tighter leading-none">
            Learning <br />
            <span className="text-white opacity-20">Journey</span>
          </h2>
        </div>

        {/* Education Listing - Minimalistic List */}
        <div className="space-y-0">
          {educationData.map((edu, index) => (
            <div 
              key={edu.id} 
              className="group relative border-t border-white/10 py-12 md:py-16 transition-all duration-700 hover:bg-white/[0.02]"
            >
              <div className="grid grid-cols-1 md:grid-cols-[200px_1fr_auto] gap-8 items-start">
                {/* Year */}
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-white/50  transition-colors">
                    <Calendar className="w-4 h-4" />
                    <span className="text-lg font-bold tracking-widest">{edu.year}</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/30 text-[10px] uppercase tracking-[0.2em]">
                    <MapPin className="w-3.5 h-3.5" />
                    {edu.location}
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-2 group-hover:translate-x-2 transition-transform duration-500">
                      {edu.title}
                    </h3>
                    <p className="text-xl md:text-2xl text-white/50 font-medium">
                      {edu.institution}
                    </p>
                  </div>
                  <p className="text-gray-400 text-lg leading-relaxed max-w-2xl font-sans opacity-60 group-hover:opacity-100 transition-all duration-500">
                    {edu.description}
                  </p>
                </div>

                {/* Minimal Icon */}
                <div className="hidden md:flex items-center justify-center p-6 border border-white/5 rounded-full opacity-20 group-hover:opacity-100 group-hover:rotate-12 transition-all duration-700">
                  {edu.icon}
                </div>
              </div>
            </div>
          ))}
          {/* Bottom Border */}
          <div className="border-t border-white/10 w-full"></div>
        </div>
      </div>
    </section>
  );
}
