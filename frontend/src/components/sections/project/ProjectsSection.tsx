"use client";
import React, { useState, useMemo } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Sparkles, ArrowUpRight, Building2 } from "lucide-react";
import { portfolioProjects } from "@/constants/projects";

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;
  const router = useRouter();

  const handleProjectClick = (projectId: number) => {
    router.push(`/ProjectView?id=${projectId}`);
  };

  const projects = useMemo(() => portfolioProjects, []);

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(projects.map((project) => project.category)))],
    [projects],
  );

  const filteredProjects = useMemo(() => 
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter),
    [activeFilter, projects]
  );

  // Pagination Logic
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);

  // Reset to page 1 when filter changes
  React.useEffect(() => {
    setCurrentPage(1);
  }, [activeFilter]);

  return (
    <section
      id="projects"
      className="min-h-screen text-white py-16 font-NeueHaas"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-20">
        <div className="mb-10 sm:mb-14">
          <p className="text-[11px] tracking-[0.28em] uppercase text-white/40 mb-3">Selected Work</p>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
            Featured <span className="text-white/35">Projects</span>
          </h2>
        </div>

        <div className="flex flex-wrap gap-2 sm:gap-3 mb-8 sm:mb-10 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap border transition-colors ${
                activeFilter === category
                  ? "bg-white text-black border-white"
                  : "border-white/15 text-white/65 hover:text-white hover:border-white/30"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {currentProjects.map((project, index) => {
            const cardImages = project.images?.length > 0 ? project.images : [project.image];

            return (
            <div
              key={project.id}
              onClick={() => handleProjectClick(project.id)}
              className="group relative bg-black border border-white/10 rounded-3xl overflow-hidden transition-all duration-300 h-125 flex flex-col will-change-transform cursor-pointer"
            >
              {project.featured && (
                <div className="absolute top-4 left-4 z-20 bg-white px-3 py-1 rounded-full flex items-center gap-2 border border-white/20">
                  <Sparkles className="w-3 h-3 text-black" />
                  <span className="text-black text-xs font-bold">Featured</span>
                </div>
              )}

                <div className="relative h-48 bg-gray-800 overflow-hidden transform-gpu">
                  <div className="grid grid-cols-2 grid-rows-2 h-full gap-0.5">
                    {cardImages.slice(0, 4).map((imageSrc, imageIndex) => (
                      <div key={`${project.id}-${imageIndex}`} className="relative overflow-hidden">
                        <Image
                          src={imageSrc}
                          alt={`${project.title} ${imageIndex + 1}`}
                          fill
                          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                          priority={index < 3 && imageIndex === 0}
                          className="object-cover group-hover:scale-105 transition-transform duration-500 will-change-transform"
                        />
                      </div>
                    ))}
                  </div>
                  {cardImages.length > 4 && (
                    <div className="absolute bottom-2 right-2 px-2 py-1 text-[10px] rounded-full bg-black/70 text-white border border-white/20">
                      +{cardImages.length - 4} more
                    </div>
                  )}
                </div>

                <div className="p-6 relative flex flex-col grow overflow-hidden">
                  <div className="flex flex-col gap-3 mb-3">
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 bg-blue-400/20 backdrop-blur-sm  border-blue-400/30 text-blue-400 text-xs  rounded-full">
                        {project.category}
                      </span>
                      {project.company && (
                        <div className="flex items-center gap-1.5 text-gray-400">
                          <Building2 className="w-3.5 h-3.5" />
                          <span className="text-[10px] uppercase tracking-wider font-bold">
                            {project.company}
                          </span>
                        </div>
                      )}
                    </div>
                    {project.status && (
                      <div>
                        <span className="px-2 py-0.5  border-red-500/30 text-red-500 text-[10px] font-bold rounded-full animate-pulse">
                          {project.status}
                        </span>
                      </div>
                    )}
                  </div>

                  <h3 className="text-xl  text-white group-hover:text-blue-400 transition-colors duration-300 mb-3 line-clamp-1">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed mb-4 font-NeueHaas line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4 overflow-hidden">
                    {project.technologies.slice(0, 4).map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-xs text-gray-400 group-hover:bg-white/10 group-hover:border-blue-400/30 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="text-xs text-gray-500 py-1">+{project.technologies.length - 4}</span>
                    )}
                  </div>

                   <div className="mt-auto">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleProjectClick(project.id);
                      }}
                      className="inline-flex items-center gap-2 text-blue-200 text-sm hover:gap-3 transition-all duration-300"
                    >
                      View Project
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
            })}
        </div>

        {/* Minimalistic Pagination */}
        {totalPages > 1 && (
          <div className="mt-16 flex items-center justify-center gap-8">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                currentPage === 1 ? "text-white/20 cursor-not-allowed" : "text-white/60 hover:text-white"
              }`}
            >
              <ArrowUpRight className="w-4 h-4 rotate-225" />
              Prev
            </button>
            
            <div className="flex items-center gap-4">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`relative w-8 h-8 flex items-center justify-center text-xs font-bold transition-all ${
                    currentPage === page 
                      ? "text-blue-400" 
                      : "text-white/30 hover:text-white"
                  }`}
                >
                  {currentPage === page && (
                    <motion.div 
                      layoutId="activePage"
                      className="absolute inset-0 border border-blue-400/30 rounded-full"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  {page}
                </button>
              ))}
            </div>

            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                currentPage === totalPages ? "text-white/20 cursor-not-allowed" : "text-white/60 hover:text-white"
              }`}
            >
              Next
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
