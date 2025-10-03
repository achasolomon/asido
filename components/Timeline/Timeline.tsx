// components/Timeline/Timeline.tsx

"use client";

import { useMemo } from "react";
import { Milestone as MilestoneType } from "@/types/milestones";
import Milestone from "./MileStone";
// import TimelineNode from "./TimelineNode";

interface TimelineProps {
  milestones: MilestoneType[];
}

export default function Timeline({ milestones }: TimelineProps) {
  // Group milestones by year
  const groupedByYear = useMemo(() => {
    const groups: Record<number, MilestoneType[]> = {};
    
    milestones.forEach((milestone) => {
      if (!groups[milestone.year]) {
        groups[milestone.year] = [];
      }
      groups[milestone.year].push(milestone);
    });
    
    return groups;
  }, [milestones]);

  const years = Object.keys(groupedByYear)
    .map(Number)
    .sort((a, b) => a - b);

  return (
    <div className="relative pt-32 pb-24 px-4 md:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        
        {/* INTRODUCTORY LINE - Standalone, thick, bold */}
        <div className="relative h-20 md:h-24 mb-8 md:mb-12">
          {/* Desktop - Centered */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-1 h-full bg-primary rounded-full" />
          {/* Mobile - Left side */}
          <div className="md:hidden absolute left-8 -translate-x-1/2 w-1 h-full bg-primary rounded-full" />
        </div>

        {/* MAIN TIMELINE SECTION - Node + Milestones with continuous thin line */}
        <div className="relative">
          {/* First Year Node - Separate from main timeline */}
          {/* {years[0] && (
            <div className="mb-8 md:mb-12">
              <TimelineNode year={years[0]} />
            </div>
          )} */}

          {/* Thin continuous timeline line - Desktop (starts after first node gap) */}
          <div 
            className="hidden md:block absolute left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-primary/25 via-primary/20 to-primary/10"
            style={{ height: 'calc(100% - 80px)', top: '80px' }}
          />
          
          {/* Thin continuous timeline line - Mobile (starts after first node gap) */}
          <div 
            className="md:hidden absolute left-8 -translate-x-1/2 w-0.5 bg-gradient-to-b from-primary/25 via-primary/20 to-primary/10" 
            style={{ height: 'calc(100% - 64px)', top: '64px' }}
          />

          {/* All years with milestones */}
          {years.map((year) => (
            <div key={year} className="mb-16 md:mb-24">
              {/* Year Node - Skip first one since we rendered it above */}
              {/* {yearIndex > 0 && <TimelineNode year={year} />} */}

              {/* Milestones for this year */}
              <div className="space-y-8">
                {groupedByYear[year].map((milestone, milestoneIndex) => (
                  <Milestone
                    key={milestone.id}
                    milestone={milestone}
                    index={milestoneIndex}
                    isFirstOfYear={milestoneIndex === 0}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}