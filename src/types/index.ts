import * as React from 'react';
import { LucideIcon } from 'lucide-react';

export interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  description: string[];
  icon: LucideIcon;
  isCurrent?: boolean;
}

export type SkillCategory = 'Frontend' | 'Backend' | 'Tools';

export interface Skill {
  name: string;
  category: SkillCategory;
  icon: React.ComponentType<{ size?: number; className?: string }>;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  github?: string;
}
