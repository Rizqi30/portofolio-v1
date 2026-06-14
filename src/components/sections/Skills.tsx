'use client';

import { motion } from 'framer-motion';
import { SKILLS } from '@/constants';
import { SkillCategory } from '@/types';

const categories: SkillCategory[] = ['Frontend', 'Backend', 'Tools'];

export const Skills = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="skills">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        className="text-center mb-20"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
          Technology <span className="text-primary">Stack</span>
        </h2>
        <p className="text-foreground/60 max-w-2xl mx-auto">
          A collection of technologies I use to build robust and scalable digital solutions.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-12">
        {categories.map((category, catIndex) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: catIndex * 0.2 }}
            className="flex flex-col gap-6"
          >
            <h3 className="text-xl font-bold text-foreground flex items-center gap-3">
              <span className="w-8 h-1 bg-primary rounded-full" />
              {category}
            </h3>
            
            <div className="grid grid-cols-1 gap-4">
              {SKILLS.filter(s => s.category === category).map((skill, index) => (
                <motion.div
                  key={skill.name}
                  whileHover={{ 
                    scale: 1.05, 
                    x: 10,
                  }}
                  className="group relative flex items-center gap-4 p-4 rounded-xl border border-border bg-surface/50 backdrop-blur-sm transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
                >
                  <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-black transition-colors">
                    <skill.icon size={24} />
                  </div>
                  <span className="font-semibold text-foreground/80">
                    {skill.name}
                  </span>
                  
                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity blur-xl -z-10 bg-primary/10 rounded-xl" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
