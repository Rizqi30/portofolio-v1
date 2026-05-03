import { Mail } from 'lucide-react';
import Link from 'next/link';
import { GithubIcon, LinkedinIcon } from '@/components/icons';

export const Footer = () => {
  return (
    <footer className="bg-[var(--footer-bg)] border-t border-border pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          
          {/* Left: Tagline */}
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-bold text-foreground">
              RIZQI<span className="text-primary">.</span>
            </h3>
            <p className="text-foreground/60 max-w-xs leading-relaxed">
              Crafting high-performance, future-proof web solutions with a focus on architecture and user experience.
            </p>
          </div>

          {/* Center: Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-foreground uppercase tracking-widest text-sm">
              Quick Navigation
            </h4>
            <nav className="flex flex-col gap-2">
              <Link href="#experience" className="text-foreground/60 hover:text-primary transition-colors">Experience</Link>
              <Link href="#skills" className="text-foreground/60 hover:text-primary transition-colors">Skills</Link>
              <Link href="#projects" className="text-foreground/60 hover:text-primary transition-colors">Projects</Link>
            </nav>
          </div>

          {/* Right: Connect */}
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-foreground uppercase tracking-widest text-sm">
              Let's Connect
            </h4>
            <div className="flex gap-4 mb-4">
              <Link 
                href="https://linkedin.com/in/rizqiah" 
                target="_blank"
                className="p-3 rounded-full bg-surface-dark/5 dark:bg-stone-900 text-foreground/70 hover:bg-primary hover:text-black transition-all"
              >
                <LinkedinIcon size={20} />
              </Link>
              <Link 
                href="https://github.com/Rizqi30" 
                target="_blank"
                className="p-3 rounded-full bg-surface-dark/5 dark:bg-stone-900 text-foreground/70 hover:bg-primary hover:text-black transition-all"
              >
                <GithubIcon size={20} />
              </Link>
              <Link 
                href="mailto:rizqiah.rah14@gmail.com" 
                className="p-3 rounded-full bg-surface-dark/5 dark:bg-stone-900 text-foreground/70 hover:bg-primary hover:text-black transition-all"
              >
                <Mail size={20} />
              </Link>
            </div>
            <p className="text-sm text-foreground/50">rizqiah.rah14@gmail.com</p>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-foreground/50 text-sm">
            © {new Date().getFullYear()} Rizqi. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-xs text-foreground/40 hover:text-foreground/60">Privacy Policy</Link>
            <Link href="/terms" className="text-xs text-foreground/40 hover:text-foreground/60">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
