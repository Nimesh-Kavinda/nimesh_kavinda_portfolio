'use client'

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 150);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen w-full fixed inset-0 z-100 flex flex-col justify-center items-center bg-black overflow-hidden backdrop-blur-xl">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px]" />
      
      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Animated logo/text */}
        <motion.div
           variants={{
             hidden: { opacity: 0 },
             show: {
               opacity: 1,
               transition: {
                 staggerChildren: 0.1,
                 delayChildren: 0.2,
               }
             }
           }}
           initial="hidden"
           animate="show"
           className="text-4xl md:text-6xl font-black tracking-tighter text-white uppercase flex gap-3"
        >
          {["Nimesh", "Kavinda"].map((word, wordIndex) => (
            <div key={wordIndex} className="flex">
              {word.split("").map((char, charIndex) => (
                <motion.span
                  key={charIndex}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0, transition: { type: "spring", damping: 12, stiffness: 100 } }
                  }}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              ))}
            </div>
          ))}
        </motion.div>

        {/* Progress Bar Container */}
        <div className="w-64 md:w-80 h-0.5 bg-white/10 rounded-full overflow-hidden relative">
          <motion.div 
            className="absolute top-0 left-0 h-full bg-cyan-400"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "easeInOut", duration: 0.3 }}
          />
        </div>

        {/* Percentage text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-cyan-400 font-mono text-sm tracking-widest font-medium"
        >
          {Math.min(progress, 100)}%
        </motion.div>
      </div>
    </div>
  );
}