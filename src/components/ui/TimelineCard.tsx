'use client';

import { motion } from 'framer-motion';
import { Experience } from '@/types';

interface TimelineCardProps {
  experience: Experience;
  index: number;
}

export const TimelineCard = ({ experience, index }: TimelineCardProps) => {
  const isEven = index % 2 === 0;

  return (
    <div className={`relative flex w-full flex-col md:flex-row ${isEven ? 'md:justify-start' : 'md:justify-end'} mb-12`}>
      <motion.div
        initial={{ 
          x: typeof window !== 'undefined' && window.innerWidth < 768 ? 50 : (isEven ? -100 : 100), 
          opacity: 0 
        }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={`ml-12 md:ml-0 w-[calc(100%-3rem)] md:w-[42%] p-8 rounded-2xl border border-border bg-surface/50 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow ${
          experience.isCurrent ? 'border-primary/30 ring-1 ring-primary/20' : ''
        }`}
      >
        <div className="mb-1 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
          <h3 className="text-xl font-bold text-foreground leading-tight">
            {experience.role}
          </h3>
          <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full w-fit">
            {experience.duration}
          </span>
        </div>
        
        <div className="mb-4 flex flex-col gap-1">
          <h4 className="text-md font-semibold text-foreground/60">
            {experience.company}
          </h4>
          {experience.location && (
            <span className="text-sm font-medium text-foreground/40">
              {experience.location}
            </span>
          )}
        </div>
        
        <ul className="space-y-2">
          {experience.description.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-foreground/70">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              {item}
            </li>
          ))}
        </ul>

        {/* Pointer for desktop */}
        <div 
          className={`hidden md:block absolute top-4 w-4 h-4 bg-inherit border-inherit rotate-45 ${
            isEven 
              ? '-right-2 border-t border-r translate-x-1/2' 
              : '-left-2 border-b border-l -translate-x-1/2'
          }`}
        />
      </motion.div>
    </div>
  );
};
