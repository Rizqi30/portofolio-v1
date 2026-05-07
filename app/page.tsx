'use client';

import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Hero } from "@/components/sections/Hero";
import { WorkExperience } from "@/components/sections/WorkExperience";
import { Skills } from "@/components/sections/Skills";
import { ProjectGallery } from "@/components/sections/ProjectGallery";
import { Footer } from "@/components/sections/Footer";
import { motion, useScroll, useSpring } from "framer-motion";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative flex flex-col min-h-screen">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-[60] origin-left"
        style={{ scaleX }}
      />

      <div className="fixed top-6 right-6 z-50 flex items-center gap-4">
        <a 
          href="/CV_Rizqi.pdf" 
          download 
          className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-surface text-foreground font-semibold shadow-md border border-border hover:bg-gray-200 dark:hover:bg-stone-800 transition-all text-sm"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
          Download CV
        </a>
        <ThemeToggle />
      </div>
      
      <main className="flex-1">
        <Hero />
        
        <div id="experience" className="scroll-mt-20">
          <WorkExperience />
        </div>
        
        <div id="projects" className="scroll-mt-20">
          <ProjectGallery />
        </div>
        
        <div id="skills" className="scroll-mt-20">
          <Skills />
        </div>
      </main>

      <Footer />
    </div>
  );
}
