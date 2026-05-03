'use client';

import { motion } from 'framer-motion';
import { PROJECTS } from '@/constants';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';

export const ProjectGallery = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="projects">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-foreground/60 max-w-2xl mx-auto">
          A showcase of systems and applications I've built, focusing on scalability and user experience.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative rounded-2xl overflow-hidden border border-border bg-surface/50 backdrop-blur-sm shadow-xl"
          >
            {/* Image Container */}
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                <motion.button 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-primary text-black px-6 py-2 rounded-full font-bold flex items-center gap-2"
                >
                  <ExternalLink size={18} />
                  View Details
                </motion.button>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded bg-primary/10 text-primary border border-primary/20">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-foreground/60 text-sm leading-relaxed mb-4">
                {project.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
