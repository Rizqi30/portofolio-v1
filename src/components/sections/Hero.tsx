'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { SOCIALS } from '@/constants';
import { GithubIcon, LinkedinIcon } from '@/components/icons';

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="z-10"
        >
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block"
          >
            Front End Engineer @ PT. PLN (Persero)
          </motion.span>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-foreground">
            <span className="text-primary">RIZQI AKBAR HIDAYAT</span>
          </h1>
          
          <p className="text-lg text-foreground/70 mb-8 max-w-xl leading-relaxed">
            Informatics Engineering graduate from Universitas Dian Nuswantoro. 
            Currently a Front End Engineer at PT. PLN (Persero). I thrive on resolving technical challenges 
            and am deeply enthusiastic about the entire web development lifecycle.
          </p>
          
          {/* Spotlight Social Buttons */}
          <div className="flex flex-wrap gap-4 mb-10">
            <motion.a
              href={SOCIALS.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="group relative flex items-center gap-3 px-6 py-3 rounded-xl bg-[#181717] text-white font-bold transition-all hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            >
              <GithubIcon size={22} />
              GitHub
              <div className="absolute inset-0 rounded-xl bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.a>
            
            <motion.a
              href={SOCIALS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="group relative flex items-center gap-3 px-6 py-3 rounded-xl bg-[#0077B5] text-white font-bold transition-all hover:shadow-[0_0_20px_rgba(0,119,181,0.3)]"
            >
              <LinkedinIcon size={22} />
              LinkedIn
              <div className="absolute inset-0 rounded-xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.a>
          </div>
        </motion.div>

        {/* Visual Element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative flex justify-center items-center"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full animate-pulse" />
            <div className="absolute -inset-4 border-2 border-dashed border-primary/30 rounded-full animate-[spin_20s_linear_infinite]" />
            
            <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-gray-200 dark:border-gray-800 bg-surface shadow-2xl">
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                <Image 
                  src="/linkedin.jpg"
                  alt="Profile"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
