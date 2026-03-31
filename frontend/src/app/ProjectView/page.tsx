"use client";

import React, { Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import {
  ArrowLeft,
  Github,
  Building2,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { portfolioProjects } from "@/constants/projects";
import { motion, AnimatePresence } from "framer-motion";

const projects = portfolioProjects;

function ProjectContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const id = searchParams.get("id");
  const project = projects.find((p) => p.id === Number(id)) || projects[0];

  const fallbackImages = React.useMemo(() => {
    const images = Array.isArray(project.images) ? project.images : [];
    if (images.length > 0) return images;
    return project.image ? [project.image] : [];
  }, [project]);

  const [projectImages, setProjectImages] = React.useState<string[]>(fallbackImages);
  
  // Image Slider Logic
  const [currentImg, setCurrentImg] = React.useState(0);
  const imageCount = projectImages.length;

  const nextImg = () => {
    setCurrentImg((prev) => (prev + 1) % imageCount);
  };

  const prevImg = () => {
    setCurrentImg((prev) => (prev - 1 + imageCount) % imageCount);
  };

  // Auto-navigate logic
  React.useEffect(() => {
    if (imageCount <= 1) return;

    const interval = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % imageCount);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [imageCount]);

  React.useEffect(() => {
    setProjectImages(fallbackImages);
  }, [project.id, fallbackImages]);

  React.useEffect(() => {
    const getFolderFromPath = (imagePath: string) => {
      const normalized = imagePath.split("?")[0];
      const lastSlash = normalized.lastIndexOf("/");
      if (lastSlash <= 0) return "";
      return decodeURIComponent(normalized.slice(1, lastSlash));
    };

    const folder = getFolderFromPath(project.image);
    if (!folder) return;

    let isActive = true;

    const loadImages = async () => {
      try {
        const response = await fetch(`/api/project-images?folder=${encodeURIComponent(folder)}`);
        if (!response.ok) return;

        const data = (await response.json()) as { images?: string[] };
        if (!isActive) return;

        if (Array.isArray(data.images) && data.images.length > 0) {
          setProjectImages(data.images);
        }
      } catch {
        // Keep fallback images when API lookup fails.
      }
    };

    void loadImages();

    return () => {
      isActive = false;
    };
  }, [project.image]);

  return (
    <div className="min-h-screen bg-black text-white font-NeueHaas selection:bg-blue-400/30">
      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <button
            onClick={() => router.back()}
            className="group flex items-center gap-2 text-white/60 hover:text-white transition-colors"
          >
            <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/30 transition-all">
              <ArrowLeft className="w-4 h-4" />
            </div>
            <span className="text-sm font-medium tracking-wide">
              Back to Projects
            </span>
          </button>
{/* 
          <div className="flex items-center gap-4">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-5 py-2 rounded-full bg-white/5 border border-white/10 text-white text-sm font-bold overflow-hidden flex items-center gap-2 transition-all duration-300"
            >
              <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <span className="relative z-10 flex items-center gap-2 group-hover:text-black transition-colors duration-300">
                Live Demo <ExternalLink className="w-4 h-4" />
              </span>
            </a>
          </div> */}
        </div>
      </nav>

      <main className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-end">
            <div>
              <div className="flex flex-col gap-3 mb-6">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-blue-400/10 border border-blue-400/20 text-blue-400 text-xs font-bold rounded-full uppercase tracking-widest">
                    {project.category}
                  </span>
                  {project.company && (
                    <span className="flex items-center gap-1.5 text-white/40 text-xs font-medium uppercase tracking-widest">
                      <Building2 className="w-3.5 h-3.5" />
                      {project.company}
                    </span>
                  )}
                </div>
                {project.status && (
                  <div>
                    <span className="px-3 py-1  border-red-500/20 text-red-500 text-xs font-bold rounded-full uppercase tracking-widest animate-pulse">
                      {project.status}
                    </span>
                  </div>
                )}
              </div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                {project.title.split(" ").map((word, i) => (
                  <span
                    key={i}
                    className={i % 2 === 1 ? "text-white/30" : "text-white"}
                  >
                    {word}{" "}
                  </span>
                ))}
              </h1>
              <p className="text-xl text-white/60 leading-relaxed max-w-xl">
                {project.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-6 lg:justify-end">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-bold">
                  Role
                </span>
                <span className="text-sm font-medium">Software Engineer</span>
              </div>
              <div className="w-px h-10 bg-white/10 hidden sm:block" />
              <div className="flex flex-col gap-1">
                <span className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-bold">
                  Year
                </span>
                <span className="text-sm font-medium">2026</span>
              </div>
              <div className="w-px h-10 bg-white/10 hidden sm:block" />
              <div className="flex flex-col gap-1">
                <span className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-bold">
                  Deliverable
                </span>
                <span className="text-sm font-medium">Web Application</span>
              </div>
            </div>
          </div>

          {/* Hero Image / Slider Section */}
          <div className="relative aspect-video w-full rounded-[2rem] overflow-hidden border border-white/5 mb-20 group bg-white/1">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImg}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="relative w-full h-full"
              >
                <Image
                  src={projectImages[currentImg]}
                  alt={`${project.title} - Image ${currentImg + 1}`}
                  fill
                  className="object-contain"
                  priority
                />
              </motion.div>
            </AnimatePresence>

            {/* Slider Controls (Only if multiple images exist) */}
            {projectImages.length > 1 && (
              <>
                <div className="absolute inset-x-6 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      prevImg();
                    }}
                    className="w-12 h-12 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 transition-all pointer-events-auto z-10"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      nextImg();
                    }}
                    className="w-12 h-12 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 transition-all pointer-events-auto z-10"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>

                {/* Progress Indicators */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10 flex-wrap justify-center max-w-[80%]">
                  {projectImages.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentImg(i)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${i === currentImg ? "w-8 bg-white" : "w-1.5 bg-white/40 hover:bg-white/60"}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Project Details */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8">
              <section className="mb-16">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <div className="w-2 h-8 bg-blue-400 rounded-full" />
                  Overview
                </h2>
                <div className="space-y-6 text-lg text-white/70 leading-relaxed">
                  <p>{project.longDescription}</p>
                  <p>
                    Built with scalability and performance in mind, this project
                    represents the pinnacle of modern web development practices.
                    Every line of code was crafted to ensure the best possible
                    user experience while maintaining a clean, maintainable
                    codebase.
                  </p>
                </div>
              </section>

              <section>
                <div className="flex items-center gap-4 mb-12">
                  <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-blue-400">
                    Core Engineering
                  </h2>
                  <div className="h-px grow bg-linear-to-r from-blue-400/20 to-transparent" />
                </div>

                <div className="grid grid-cols-1 gap-12">
                  {project.features?.map((feature, i) => (
                    <div key={i} className="group relative">
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                        {/* Number & Title */}
                        <div className="md:col-span-4">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="text-[10px] font-mono text-white/20 group-hover:text-blue-400/50 transition-colors">
                              {String(i + 1).padStart(2, "0")}
                            </span>
                            <h3 className="text-lg  text-white tracking-tight group-hover:translate-x-1 transition-transform duration-300">
                              {feature.title}
                            </h3>
                          </div>
                        </div>

                        {/* Descriptions */}
                        <div className="md:col-span-8 flex flex-col gap-4">
                          <p className="text-white/50 text-sm leading-relaxed border-l border-white/5 pl-6 group-hover:border-white/20 transition-colors">
                            {feature.description}
                          </p>

                          <div className="pl-6 flex items-start gap-2">
                            <span className="text-[10px] uppercase tracking-wider text-white/40 font-bold shrink-0 mt-0.5">
                              How:
                            </span>
                            <p className="text-[11px] text-white/30 leading-relaxed font-medium italic">
                              {feature.implementation}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <div className="lg:col-span-4 space-y-10">
              <div className="sticky top-32">
                <div className="mb-10">
                  <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white/30 mb-6 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-blue-400" />
                    Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="text-sm font-medium text-white/60 hover:text-white transition-colors cursor-default after:content-[','] last:after:content-[''] after:mr-1.5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-3 pt-8 border-t border-white/5">
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10 text-white  overflow-hidden transition-all duration-300"
                    >
                      <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                      <span className="relative z-10 flex items-center justify-between w-full group-hover:text-black transition-colors duration-300">
                        Live Project
                        <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </span>
                    </a>
                  ) : (
                    <button
                      disabled
                      className="group relative flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10  overflow-hidden cursor-not-allowed w-full text-left"
                    >
                      <span className="absolute inset-0 bg-red-500/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                      <span className="relative z-10 flex items-center justify-between w-full group-hover:text-red-400 transition-colors duration-300">
                        <span className="group-hover:hidden">
                          Live Project
                        </span>
                        <span className="hidden group-hover:flex items-center gap-2">
                          Not available
                        </span>
                        <ArrowUpRight className="w-5 h-5 opacity-50" />
                      </span>
                    </button>
                  )}
                  
                  <button
                    disabled
                    className="group relative flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10  overflow-hidden cursor-not-allowed w-full text-left"
                  >
                    <span className="absolute inset-0 bg-red-500/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                    <span className="relative z-10 flex items-center justify-between w-full group-hover:text-red-400 transition-colors duration-300">
                      <span className="group-hover:hidden">
                        View Source Code
                      </span>
                      <span className="hidden group-hover:flex items-center gap-2">
                        Not allowed to view code
                      </span>
                      <Github className="w-5 h-5 opacity-50" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Background decoration */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-[120px]" />
      </div>
    </div>
  );
}

export default function ProjectView() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-black flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-400"></div>
        </div>
      }
    >
      <ProjectContent />
    </Suspense>
  );
}
