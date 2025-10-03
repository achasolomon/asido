// components/Timeline/Milestone.tsx

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Milestone as MilestoneType } from "@/types/milestones";
import { getColorClass } from "@/libs/utils";
import { useInView } from "@/hooks/useInView";

interface MilestoneProps {
  milestone: MilestoneType;
  index: number;
  isFirstOfYear?: boolean; // New prop to indicate if this is the first milestone of the year
}

export default function Milestone({ milestone, index, isFirstOfYear = false }: MilestoneProps) {
  const { ref, isInView } = useInView({ threshold: 0.2, triggerOnce: true });
  const isRight = milestone.position === "right";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className={`
        mb-16 md:mb-24 relative 
        pl-16 md:pl-0 
        ${isRight ? "md:pr-[55%]" : "md:pl-[55%]"}
      `}
    >
      <div className={`${isRight ? "md:text-left" : "md:text-left"}`}>
        {/* Content Card */}
        <div className="p-6 md:p-8 transition-shadow duration-300">
          {/* Year - Only show for first milestone of each year */}
          {isFirstOfYear && (
            <div className="mb-10 mt-[-37px]">
              <span className="text-primary text-base md:text-4xl font-bold">
                {milestone.year}
              </span>
            </div>
          )}

          {/* Title */}
          <h3
            className={`
              text-xl md:text-2xl font-bold mb-3 
              ${getColorClass(milestone.color)}
            `}
          >
            {milestone.title}
          </h3>

          {/* Description */}
          <p className="text-dark text-base md:text-lg mb-4 leading-relaxed">
            {milestone.description}
          </p>

          {/* Image */}
          {milestone.image && (
            <div className="relative mb-4 overflow-hidden">
              <Image
                src={milestone.image}
                alt={milestone.title}
                width={600}
                height={milestone.imageHeight}
                className="hover:scale-95 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          )}

          {/* Learn More Link */}
          {milestone.link && (
            <a
              href={milestone.link}
              className="inline-flex items-center gap-2 text-primary font-medium text-sm md:text-base transition-all duration-300 hover:gap-3 group"
            >
              LEARN MORE
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}