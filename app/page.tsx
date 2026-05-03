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

      <ThemeToggle />
      
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
