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
      'Spearheading front-end development for internal utility applications, optimizing performance, and ensuring high-quality UI/UX across platforms.',
      'Collaborating with cross-functional teams, including backend engineers and designers, to deliver scalable and robust solutions.',
      'Leading the transition to modern React and Next.js architectures to improve maintainability and developer productivity.'
    ],
    icon: LayoutPanelTop,
    isCurrent: true,
  },
  {
    id: 'bangga',
    company: 'PT. Tri Nindya Utama (Bangga Solutions)',
    location: 'Bandar Lampung, Indonesia',
    role: 'Full Stack Developer',
    duration: 'Jul 2024 – Dec 2025',
    description: [
      'Developed and maintained robust full-stack web applications tailored to address diverse client needs and streamline business operations.',
      'Designed efficient database schemas and implemented secure RESTful APIs to ensure smooth data flow and backend reliability.',
      'Created intuitive and responsive user interfaces using modern frontend frameworks, heavily emphasizing user experience and accessibility.'
    ],
    icon: Code2,
  },
  {
    id: 'samudera',
    company: 'Samudera Digital',
    location: 'Bandar Lampung, Indonesia',
    role: 'Freelance Frontend Developer',
    duration: 'Feb 2023 - Jun 2023',
    description: [
      'Led the frontend development for the Lampung Begawi project, delivering an interactive and visually engaging digital experience for the local event.',
      'Ensured cross-browser compatibility and optimized web assets for fast loading times, resulting in a highly performant application.',
      'Integrated complex third-party APIs and services seamlessly into the existing web architecture.'
    ],
    icon: Globe,
  },
  {
    id: 'presentologics',
    company: 'PT. Presentologics Dicoding Indonesia',
    location: 'Bandung, Indonesia',
    role: 'Frontend Web Developer Intern',
    duration: 'Jul 2024 - Aug 2024',
    description: [
      'Assisted in the development of responsive web applications, strictly following best practices for web accessibility and modern standard layouts.',
      'Participated in code reviews, successfully resolving bugs and collaborating with senior developers to improve overall codebase quality.',
      'Gained extensive hands-on experience with frontend tooling, testing frameworks, and continuous integration pipelines.'
    ],
    icon: Terminal,
  },
  {
    id: 'udinus',
    company: 'Universitas Dian Nuswantoro',
    location: 'Semarang, Indonesia',
    role: 'Informatics Engineering',
    duration: 'Aug 2020 – Mar 2024',
    description: [
      'Graduated with a GPA of 3.77, with a strong focus on software engineering, algorithm design, and modern web technologies.',
      'Completed a comprehensive capstone project centered on developing scalable web-based information systems for local businesses.',
      'Actively participated in coding competitions and technical workshops to further refine problem-solving skills.'
    ],
    icon: GraduationCap,
  },
];

import {
  ReactIcon,
  NextIcon,
  VueIcon,
  TsIcon,
  TailwindIcon,
  LaravelIcon,
  NodeIcon,
  DatabaseIcon,
  GitIcon,
  FigmaIcon,
  ZapIcon
} from '@/components/icons';

export const SKILLS: Skill[] = [
  { name: 'React JS', category: 'Frontend', icon: ReactIcon },
  { name: 'Next JS', category: 'Frontend', icon: NextIcon },
  { name: 'Vue JS', category: 'Frontend', icon: VueIcon },
  { name: 'Typescript', category: 'Frontend', icon: TsIcon },
  { name: 'Tailwind CSS', category: 'Frontend', icon: TailwindIcon },
  
  { name: 'Laravel', category: 'Backend', icon: LaravelIcon },
  { name: 'Node JS', category: 'Backend', icon: NodeIcon },
  { name: 'MySQL', category: 'Backend', icon: DatabaseIcon },
  { name: 'MongoDB', category: 'Backend', icon: DatabaseIcon },
  
  { name: 'Git', category: 'Tools', icon: GitIcon },
  { name: 'Figma', category: 'Tools', icon: FigmaIcon },
  { name: 'Midtrans Integration', category: 'Tools', icon: ZapIcon },
];

export const PROJECTS: Project[] = [
  {
    id: 'simpp',
    title: 'SIMPP (PLN)',
    image: '/projects/pln.png',
    tags: ['Vue.js', 'Bootstrap', 'Node.js'],
    link: 'https://dev.simpp.my.id/login',
  },
  {
    id: 'sales-ai',
    title: 'Sales Intelligence',
    image: '/projects/sales-ai.png',
    tags: ['React', 'Node.js', 'MongoDB'],
    link: 'https://ai-sales-generator-nine.vercel.app/',
  },
  {
    id: 'ads-ai',
    title: 'Ads AI Platform',
    image: '/projects/ads-ai.png',
    tags: ['React', 'Python', 'FastAPI', 'PostgreSQL'],
    link: 'https://ai-ads-optimization-advisor-omega.vercel.app/',
  },
  {
    id: 'research-ai',
    title: 'Research AI Tool',
    image: '/projects/research-ai.png',
    tags: ['Next.js', 'OpenAI', 'Python'],
    link: 'https://ai-research-assisant.vercel.app/',
  },
  {
    id: 'sinusa',
    title: 'SINUSA (PTPN)',
    image: '/projects/sinusa.png',
    tags: ['Next.js', 'Tailwind', 'Laravel', 'MySQL'],
    link: 'https://komite-investasi-dev.holding-perkebunan.com:8443/login',
  },
  {
    id: 'erin',
    title: 'ERIS (PTPN)',
    image: '/projects/eris.png',
    tags: ['React', 'Express', 'Node.js', 'PostgreSQL'],
    link: 'https://erisk-dev.holding-perkebunan.com:8443/login',
  },
  {
    id: 'absensi',
    title: 'Attendance System',
    image: '/projects/absensi.png',
    tags: ['Next.js', 'Tailwind', 'Laravel', 'MySQL'],
    link: 'https://my-absensi.vercel.app/',
  },
  {
    id: 'poliklinik',
    title: 'Clinic Management',
    image: '/projects/poliklinik.png',
    tags: ['Laravel', 'Bootstrap', 'MySQL'],
    link: 'https://poliklinik-gamma.vercel.app/',
  },
];

export const SOCIALS = {
  github: 'https://github.com/Rizqi30',
  linkedin: 'https://linkedin.com/in/rizqiah',
  email: 'rizqiah.rah14@gmail.com',
};
