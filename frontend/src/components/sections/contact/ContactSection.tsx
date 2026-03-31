"use client";

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Github, Linkedin, Instagram, Send, CheckCircle, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    
    setIsSubmitting(true);
    try {
      await emailjs.sendForm(
        'service_14ggknr', 
        'template_b1skc65', 
        formRef.current, 
        'ZHlh_wFapRkTRV-rU'
      );
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error('Email error:', error);
      alert("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative min-h-screen py-32 px-6 lg:px-20 bg-black overflow-hidden font-NeueHaas">
      {/* Background Element */}
      <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] bg-white/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-24 lg:mb-32">
          <motion.h2 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[15vw] lg:text-[12rem] font-bilmond leading-[0.85] tracking-tighter uppercase text-white"
          >
            Let's // <br />
            <span className="text-white/20">Connect</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-32">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-between h-full py-2"
          >
            <div className="space-y-12">
              <div className="space-y-4">
                <span className="text-white/20 font-mono text-[10px] tracking-[0.5em] uppercase">Status // Available</span>
                <p className="text-white/70 text-2xl md:text-3xl font-light leading-snug tracking-tight">
                  I am open to full-time roles, freelance collaborations, and product-focused engineering opportunities where I can contribute across frontend and backend delivery.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-2">
                  <span className="text-white/20 font-mono text-[10px] tracking-[0.3em] uppercase">Email</span>
                  <a href="mailto:nimeshkavinda@email.com" className="block text-white hover:text-white/50 transition-colors text-lg">
                   nimeshkavinda@email.com
                  </a>
                </div>
                <div className="space-y-2">
                  <span className="text-white/20 font-mono text-[10px] tracking-[0.3em] uppercase">Phone {"(WhatsApp)"}</span>
                  <a href="tel:+94752960845" className="block text-white hover:text-white/50 transition-colors text-lg">
                    +94 75 2960845
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-20 lg:mt-0 pt-12 border-t border-white/10 flex flex-wrap gap-12 sm:gap-20">
              {[
                { name: "GitHub", url: "https://github.com/nimeshkavinda", icon: <Github /> },
                { name: "LinkedIn", url: "https://linkedin.com", icon: <Linkedin /> },
                { name: "Instagram", url: "https://instagram.com", icon: <Instagram /> }
              ].map((link) => (
                <a 
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col gap-2 text-white/40 hover:text-white transition-all transition-duration-500"
                >
                  <span className="text-[10px] font-bold tracking-[0.3em] uppercase">{link.name}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">NimeshKavinda</span>
                    <ArrowUpRight className="w-3 h-3 translate-y-0.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="relative group">
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-white/20 py-4 focus:outline-none focus:border-white transition-colors peer text-white rounded-none"
                    placeholder=" "
                  />
                  <label className="absolute left-0 top-4 text-white/30 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:uppercase peer-focus:tracking-[0.2em] pointer-events-none">Full Name</label>
                </div>
                <div className="relative group">
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-white/20 py-4 focus:outline-none focus:border-white transition-colors peer text-white rounded-none"
                    placeholder=" "
                  />
                  <label className="absolute left-0 top-4 text-white/30 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:uppercase peer-focus:tracking-[0.2em] pointer-events-none">Email Address</label>
                </div>
              </div>

              <div className="relative group">
                <input
                  type="text"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-white/20 py-4 focus:outline-none focus:border-white transition-colors peer text-white rounded-none"
                  placeholder=" "
                />
                <label className="absolute left-0 top-4 text-white/30 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:uppercase peer-focus:tracking-[0.2em] pointer-events-none">Subject</label>
              </div>

              <div className="relative group">
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-white/20 py-4 focus:outline-none focus:border-white transition-colors peer text-white resize-none rounded-none"
                  placeholder=" "
                />
                <label className="absolute left-0 top-4 text-white/30 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:uppercase peer-focus:tracking-[0.2em] pointer-events-none">Your Message</label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className="relative group w-full h-20 rounded-full border border-white/20 hover:border-white transition-colors overflow-hidden disabled:opacity-50"
              >
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                <span className="relative z-10 flex items-center justify-center gap-4 text-sm font-bold uppercase tracking-[0.3em] text-white group-hover:text-black transition-colors">
                  {isSubmitting ? (
                    <>Sending... <Loader2 className="w-5 h-5 animate-spin" /></>
                  ) : isSubmitted ? (
                    <>Sent Successfully <CheckCircle className="w-5 h-5 text-black" /></>
                  ) : (
                    <>Send Message <Send className="w-5 h-5" /></>
                  )}
                </span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
