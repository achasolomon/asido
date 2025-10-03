// components/Timeline/TimelineNode.tsx

"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";

interface TimelineNodeProps {
  year: number;
}

export default function TimelineNode({ year }: TimelineNodeProps) {
  const { ref, isInView } = useInView({ 
    threshold: 0.5, 
    triggerOnce: false 
  });

  return (
    <div ref={ref} className="relative mb-8 md:mb-12">
      {/* Desktop Layout - Centered on timeline */}
      <div className="hidden md:flex flex-col items-center absolute left-1/2 -translate-x-1/2 z-20">
        {/* Year Text Above */}
        {/* <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
          className="mb-3"
        >
          <span className={`
            text-2xl md:text-3xl font-bold transition-colors duration-400
            ${isInView ? "text-primary" : "text-gray-400"}
          `}>
            {year}
          </span>
        </motion.div> */}
        
        {/* Small Dot */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className={`
            w-8 h-8 rounded-full 
            transition-all duration-400
            ${isInView ? "bg-primary animate-pulse-glow" : "bg-gray-300"}
          `}
        />
      </div>

      {/* Mobile Layout - Left side */}
      <div className="md:hidden flex flex-col items-start absolute left-8 -translate-x-1/2 z-20">
        {/* Year Text */}
        {/* <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
          transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
          className="mb-2 ml-4"
        >
          <span className={`
            text-xl font-bold transition-colors duration-400
            ${isInView ? "text-primary" : "text-gray-400"}
          `}>
            {year}
          </span>
        </motion.div> */}
        
        {/* Small Dot */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className={`
            w-10 h-10 rounded-full border-3 border-white shadow-md
            transition-all duration-400
            ${isInView ? "bg-primary" : "bg-gray-300"}
          `}
        />
      </div>
    </div>
  );
}