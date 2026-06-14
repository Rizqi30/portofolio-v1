'use client';

import { motion } from 'framer-motion';

export const TimelineLine = () => {
  return (
    <div className="absolute left-4 md:left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-gray-200 dark:bg-gray-800">
      <motion.div
        initial={{ height: 0 }}
        whileInView={{ height: '100%' }}
        viewport={{ once: false }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="h-full w-full bg-primary shadow-[0_0_10px_var(--primary)]"
      />
    </div>
  );
};
