"use client";

import React from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

interface TickerProps {
  items: React.ReactNode[];
  offset: MotionValue<number>;
  className?: string;
}

const Ticker: React.FC<TickerProps> = ({ items, offset, className }) => {
  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <motion.div style={{ x: offset }} className="flex gap-10 w-max py-4">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="flex gap-10 items-center">
            {items.map((item, index) => (
              <div key={index} className="flex-shrink-0">
                {item}
              </div>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default function TextScroll() {
  const containerRef = React.useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, -500]);
  const x2 = useTransform(scrollYProgress, [0, 1], [-500, 0]);

  const lines = [
    { text: "Creative", x: x1 },
    { text: "Design", x: x2 },
    { text: "Problem solving", x: x1 },
    { text: "Thinking", x: x2 },
  ];

  return (
    <section ref={containerRef} className="relative py-4 bg-black  overflow-hidden select-none font-bilmond">
      <style>{`
        .ticker-line {
          height: auto;
          display: block;
        }
        .text-solid {
          font-size: 8vw;
          font-weight: 900;
          color: white;
          text-transform: uppercase;
          line-height: 1;
          display: block;
        }
        .text-outline {
          font-size: 8vw;
          font-weight: 900;
          color: transparent;
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.4);
          text-transform: uppercase;
          line-height: 1;
          display: block;
        }
        @media (min-width: 1024px) {
          .text-solid, .text-outline {
            font-size: 156px;
          }
        }
      `}</style>
      
      <div className="flex flex-col gap-2 md:gap-4">
        {lines.map((line, index) => (
          <Ticker
            key={`${line.text}-${index}`}
            className={`ticker-line ticker-${index}`}
            items={[
              <span className="text-solid">{line.text}</span>,
              <span className="text-outline">{line.text}</span>,
            ]}
            offset={line.x}
          />
        ))}
      </div>
    </section>
  );
}
