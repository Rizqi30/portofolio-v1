'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface TimelineDotProps {
  icon: LucideIcon;
  isCurrent?: boolean;
}

export const TimelineDot = ({ icon: Icon, isCurrent }: TimelineDotProps) => {
  return (
    <div className="absolute left-4 md:left-1/2 top-0 z-10 -translate-x-1/2">
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "backOut" }}
        className={`relative flex h-10 w-10 items-center justify-center rounded-full border-2 bg-white dark:bg-stone-950 ${
          isCurrent 
            ? 'border-primary text-primary' 
            : 'border-gray-300 dark:border-gray-700 text-gray-500'
        }`}
      >
        <Icon className="h-5 w-5" />
        
        {isCurrent && (
          <>
            {/* Pulse Effect */}
            <motion.div
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute h-full w-full rounded-full bg-primary"
            />
            {/* Inner Glow */}
            <div className="absolute h-full w-full animate-pulse rounded-full shadow-[0_0_15px_var(--primary)]" />
          </>
        )}
      </motion.div>
    </div>
  );
};
