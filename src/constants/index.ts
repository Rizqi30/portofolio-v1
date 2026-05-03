import { Experience, Skill, Project } from '@/types';
import { 
  Briefcase, 
  GraduationCap, 
  Code2, 
  Rocket, 
  LayoutPanelTop,
  Layers,
  Terminal,
  Database,
  Globe,
  Layout,
  Palette,
  Server,
  Cpu,
  GitBranch,
  PenTool,
  Zap
} from 'lucide-react';

export const EXPERIENCES: Experience[] = [
  {
    id: 'pln',
    company: 'PT. PLN (Persero)',
    role: 'Front End Engineer',
    duration: 'Nov 2025 – Present',
    description: [
      'Spearheading front-end development for internal utility applications.',
      'Optimizing performance and ensuring high-quality UI/UX across platforms.',
      'Collaborating with cross-functional teams to deliver scalable solutions.'
    ],
    icon: LayoutPanelTop,
    isCurrent: true,
  },
  // ... other experiences will be imported or kept here
  {
    id: 'bangga',
    company: 'PT. Tri Nindya Utama (Bangga Solutions)',
    role: 'Full Stack Developer',
    duration: 'Jul 2024 – Dec 2025',
    description: [
      'Developed and maintained robust full-stack applications.',
      'Implemented responsive designs and backend integrations.'
    ],
    icon: Code2,
  },
  {
    id: 'udinus',
    company: 'Universitas Dian Nuswantoro',
    role: 'Informatics Engineering',
    duration: '2020 – 2024',
    description: [
      'Graduated with a GPA of 3.77.',
      'Focused on software engineering and information systems.'
    ],
    icon: GraduationCap,
  },
];

export const SKILLS: Skill[] = [
  { name: 'React JS', category: 'Frontend', icon: Code2 },
  { name: 'Next JS', category: 'Frontend', icon: Layers },
  { name: 'Vue JS', category: 'Frontend', icon: Layout },
  { name: 'Typescript', category: 'Frontend', icon: Terminal },
  { name: 'Tailwind CSS', category: 'Frontend', icon: Palette },
  
  { name: 'Laravel', category: 'Backend', icon: Server },
  { name: 'Node JS', category: 'Backend', icon: Cpu },
  { name: 'MySQL', category: 'Backend', icon: Database },
  { name: 'MongoDB', category: 'Backend', icon: Database },
  
  { name: 'Git', category: 'Tools', icon: GitBranch },
  { name: 'Figma', category: 'Tools', icon: PenTool },
  { name: 'Midtrans Integration', category: 'Tools', icon: Zap },
];

export const PROJECTS: Project[] = [
  {
    id: 'sinusa',
    title: 'SINUSA (PTPN)',
    description: 'Investment execution & monitoring system for PTPN, focusing on real-time data tracking and reporting.',
    image: 'https://picsum.photos/seed/sinusa/600/400',
    tags: ['Next.js', 'Tailwind', 'Laravel', 'MySQL'],
    link: '#',
  },
  {
    id: 'erin',
    title: 'ERIN (PTPN)',
    description: 'Comprehensive risk management system for enterprise-level operational efficiency.',
    image: 'https://picsum.photos/seed/erin/600/400',
    tags: ['React', 'Express', 'Node.js', 'PostgreSQL'],
    link: '#',
  },
  {
    id: 'simpp',
    title: 'SIMPP',
    description: 'Assignment monitoring & reporting platform designed for streamlined task management.',
    image: 'https://picsum.photos/seed/simpp/600/400',
    tags: ['Vue.js', 'Bootstrap', 'Node.js'],
    link: '#',
  },
  {
    id: 'pamungkas',
    title: 'Official Pamungkas',
    description: 'E-commerce merchandise website with seamless payment integration and user-friendly interface.',
    image: 'https://picsum.photos/seed/pamungkas/600/400',
    tags: ['Next.js', 'Tailwind', 'Midtrans', 'MongoDB'],
    link: '#',
  },
];

export const SOCIALS = {
  github: 'https://github.com/Rizqi30',
  linkedin: 'https://linkedin.com/in/rizqiah',
  email: 'rizqiah.rah14@gmail.com',
};
