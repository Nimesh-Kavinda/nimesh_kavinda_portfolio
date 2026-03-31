"use client";

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, X, Download, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Icon, Gamepad2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

// Configure PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const AboutSection = () => {
  const [showCV, setShowCV] = useState(false);
  const [numPages, setNumPages] = useState<number | null>(null);
  const [scale, setScale] = useState(1.0);
  
  const options = useMemo(() => ({
    disableRange: true,
    disableStream: true
  }), []);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  return (
    <section id="about" className="relative min-h-screen py-32 px-6 lg:px-20 overflow-hidden bg-black  selection:bg-white selection:text-black">
      {/* Dynamic Background */}
      <div className="absolute top-0 right-0 w-[80vw] h-[80vw] bg-linear-to-bl from-white/5 to-transparent rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="pb-15 lg:mb-32">
          <motion.h2 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[15vw] lg:text-[12rem] font-bilmond leading-[0.85] tracking-tighter uppercase text-white"
          >
            About {"{}"}  <br />
            <span className="text-white/20">The Mind  </span>
          </motion.h2>
        </div>

        <div className="flex lg:hidden justify-center   mb-15">
          <div className="relative w-40 h-40 rounded-full overflow-hidden border border-white/10">
            <Image
              src="/images/my-profile.jpg"
              alt="Nimesh Kavinda - Full-Stack Web Developer"
              fill
              className="object-cover "
            />
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-20 items-start">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-10"
          >
            <div className="space-y-8">
              <h3 className="text-4xl md:text-6xl font-bold uppercase  leading-[0.9]">
                <span className='text-white'>Nimesh Kavinda</span> <br />
                <span className='text-white/40'>Full-Stack Web Developer</span>
              </h3>
              
              <p className="text-white/70 font-NeueHaas leading-relaxed text-xl md:text-2xl max-w-3xl font-light tracking-tight italic">
                "I build modern web products across frontend, backend, and browser extension ecosystems. My focus is turning real business ideas into scalable and user-friendly digital experiences."
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-white/10 pt-12">
              <div className="space-y-4">
                <span className="text-white/20 font-mono text-[10px] tracking-[0.5em] uppercase">The Experience // 01</span>
                <p className="text-white/60 font-NeueHaas leading-relaxed text-lg">
                  I have delivered diverse projects through Oximay and freelance work, including AI tools, extension automation products, dashboard systems, and conversion-focused product websites.
                </p>
              </div>
              <div className="space-y-4">
                <span className="text-white/20 font-mono text-[10px] tracking-[0.5em] uppercase">The Expertise // 02</span>
                <p className="text-white/60 font-NeueHaas leading-relaxed text-lg">
                  My core stack includes React, Next.js, Node.js, Laravel, PHP, and MySQL. I enjoy writing clean, maintainable code and continuously improving performance, usability, and delivery quality.
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-6 pt-6">
              <button 
                onClick={() => setShowCV(true)}
                className="group mx-auto lg:mx-0 rounded-full border p-1 border-white/20 flex items-center text-sm uppercase tracking-[0.3em] font-bold text-white hover:text-white/70 transition-colors"
              >
                <span className='ml-5'>
                View PDF Resume
                </span>
                <div className="w-12 h-12 rounded-full flex items-center justify-center group-hover:border-white transition-colors">
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>

              {/* <Link 
                href="/resume"
                className="group mx-auto lg:mx-0 rounded-full border p-1 border-white/20 flex items-center text-sm uppercase tracking-[0.3em] font-bold text-white hover:text-white/70 transition-colors"
              >
                <span className='ml-5'>
                Digital Bio-Data
                </span>
                <div className="w-12 h-12 rounded-full flex items-center justify-center group-hover:border-white transition-colors">
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link> */}

              <div className="flex items-center  mx-auto lg:mx-0 gap-4">
                {[
                  { icon: <Github />, url: "https://github.com/nimeshkavinda" },
                  { icon: <Linkedin />, url: "https://linkedin.com" },
                  { icon: <Mail />, url: "mailto:nimeshkavinda@email.com" },
                  { icon: <Gamepad2 />, url: "https://github.com/nimeshkavinda" }
                ].map((social, i) => (
                  <a 
                    key={i}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full border border-white/5 flex items-center justify-center text-white/30 hover:text-white hover:border-white/20 transition-all"
                  >
                    {React.cloneElement(social.icon as React.ReactElement<{size:number}>, { size: 18 })}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Image Sidebar */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-3/4 w-full overflow-hidden rounded-3xl  transition-all duration-700 ease-out group">
              <Image
                src="/images/my-profile.jpg"
                alt="Nimesh Kavinda - Full-Stack Web Developer Profile"
                fill
                className="object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-60" />
            </div>
            
            {/* Design elements */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border-l border-b border-white/20 rounded-bl-3xl -z-10" />
            <div className="absolute -top-6 -right-6 w-32 h-32 border-r border-t border-white/20 rounded-tr-3xl -z-10" />
          </motion.div>
        </div>
      </div>

      {/* CV Modal */}
      <AnimatePresence>
        {showCV && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 flex items-center justify-center bg-black/95 backdrop-blur-xl p-6"
          >
            <motion.div 
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="w-full max-w-5xl h-[85vh] bg-neutral-900 border border-white/10 rounded-3xl overflow-hidden flex flex-col relative"
            >
              {/* Modal Header */}
              <div className="p-6 border-b border-white/5 flex justify-between items-center bg-neutral-900/50">
                <div className="flex flex-col">
                  <span className="text-white font-bold tracking-[0.2em] uppercase text-xs">Full Resume</span>
                  <span className="text-white/40 text-[10px] uppercase tracking-widest mt-1">Nimesh.CV.pdf</span>
                </div>
                <div className="flex gap-4">
                  <a 
                    href="/cv/Junior_software_engineer.pdf?v=1" 
                    download 
                    className="flex items-center gap-2 px-6 h-12 rounded-full bg-white text-black text-xs font-bold uppercase tracking-widest hover:bg-white/90 transition-colors"
                  >
                    Download <Download size={14} />
                  </a>
                  <button 
                    onClick={() => setShowCV(false)}
                    className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors"
                  >
                    <X className="text-white" size={20} />
                  </button>
                </div>
              </div>

              {/* CV Preview */}
              <div className="flex-1 w-full bg-[#1e1e1e] overflow-y-auto flex flex-col items-center py-8 relative custom-scrollbar">
                {/* PDF Controls */}
                <div className="sticky top-4 z-50 flex items-center gap-4 bg-black/80 backdrop-blur-md px-6 py-3 rounded-full border border-white/10 mb-8 shadow-2xl">
                  <div className="flex items-center gap-4 border-r border-white/10 pr-4">
                    <span className="text-white font-mono text-sm">
                      {numPages || '--'} Pages
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <button 
                      onClick={() => setScale(prev => Math.max(prev - 0.1, 0.3))}
                      className="p-2 text-white/60 hover:text-white transition-colors"
                    >
                      <ZoomOut size={18} />
                    </button>
                    <span className="text-white font-mono text-sm min-w-12 text-center">
                      {Math.round(scale * 100)}%
                    </span>
                    <button 
                      onClick={() => setScale(prev => Math.min(prev + 0.2, 2.5))}
                      className="p-2 text-white/60 hover:text-white transition-colors"
                    >
                      <ZoomIn size={18} />
                    </button>
                  </div>
                </div>

                <div className="flex flex-col gap-6 pb-20">
                  <Document
                    file="/cv/Junior_software_engineer.pdf?v=1"
                    onLoadSuccess={onDocumentLoadSuccess}
                    className="flex flex-col items-center gap-6"
                    options={options}
                    loading={
                      <div className="w-[600px] h-[800px] flex items-center justify-center text-white/40">
                         <div className="animate-pulse flex flex-col items-center gap-4">
                            <div className="w-12 h-12 rounded-full border-2 border-white/20 border-t-white animate-spin"></div>
                            Loading Document...
                         </div>
                      </div>
                    }
                  >
                    {Array.from(new Array(numPages), (el, index) => (
                      <div key={`page_${index + 1}`} className="shadow-2xl rounded-sm overflow-hidden bg-white">
                        <Page 
                          pageNumber={index + 1} 
                          scale={scale}
                          renderAnnotationLayer={true}
                          renderTextLayer={true}
                          width={typeof window !== 'undefined' && window.innerWidth < 768 ? window.innerWidth - 64 : undefined}
                        />
                      </div>
                    ))}
                  </Document>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default AboutSection;
