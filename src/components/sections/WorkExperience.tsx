'use client';

import { EXPERIENCES } from '@/constants';
import { TimelineLine } from '@/components/ui/TimelineLine';
import { TimelineDot } from '@/components/ui/TimelineDot';
import { TimelineCard } from '@/components/ui/TimelineCard';
import { motion } from 'framer-motion';

export const WorkExperience = () => {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden" id="experience">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
          Work Experience & Education
        </h2>
        <div className="h-1.5 w-20 bg-primary mx-auto rounded-full" />
      </motion.div>

      <div className="relative">
        <TimelineLine />

        <div className="space-y-4">
          {EXPERIENCES.map((exp, index) => (
            <div key={exp.id} className="relative min-h-[150px]">
              <TimelineDot icon={exp.icon} isCurrent={exp.isCurrent} />
              <TimelineCard experience={exp} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
