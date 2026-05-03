interface TechIconProps {
  size?: number;
  className?: string;
}

export const ReactIcon = ({ size = 24, className }: TechIconProps) => (
  <svg width={size} height={size} viewBox="-11.5 -10.23174 23 20.46348" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="0" cy="0" r="2.05" fill="#61dafb"/>
    <g stroke="#61dafb" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2"/>
      <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
      <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
    </g>
  </svg>
);

export const NextIcon = ({ size = 24, className }: TechIconProps) => (
  <svg width={size} height={size} viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <mask id="mask0_408_134" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180">
      <circle cx="90" cy="90" r="90" fill="currentColor"/>
    </mask>
    <g mask="url(#mask0_408_134)">
      <circle cx="90" cy="90" r="90" fill="currentColor"/>
      <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="url(#paint0_linear_408_134)"/>
      <rect x="115" y="54" width="12" height="72" fill="url(#paint1_linear_408_134)"/>
    </g>
    <defs>
      <linearGradient id="paint0_linear_408_134" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
        <stop stopColor="white"/>
        <stop offset="1" stopColor="white" stopOpacity="0"/>
      </linearGradient>
      <linearGradient id="paint1_linear_408_134" x1="121" y1="54" x2="120.799" y2="106.875" gradientUnits="userSpaceOnUse">
        <stop stopColor="white"/>
        <stop offset="1" stopColor="white" stopOpacity="0"/>
      </linearGradient>
    </defs>
  </svg>
);

export const VueIcon = ({ size = 24, className }: TechIconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M14.526 2L12 6.368L9.474 2H0L12 22L24 2H14.526Z" fill="#41B883"/>
    <path d="M14.526 2L12 6.368L9.474 2H4.737L12 14.526L19.263 2H14.526Z" fill="#34495E"/>
  </svg>
);

export const TsIcon = ({ size = 24, className }: TechIconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect width="24" height="24" fill="#3178C6"/>
    <path d="M11.025 10.9997V19.7891H8.38477V13.2505H4.25781V10.9997H11.025ZM18.5205 18.0267C17.6533 18.7845 16.5169 19.1634 15.1113 19.1634C13.8057 19.1634 12.6367 18.844 11.6045 18.2052L12.4346 16.0315C13.3447 16.5947 14.2874 16.8763 15.2627 16.8763C15.8258 16.8763 16.248 16.7356 16.5293 16.4544C16.8105 16.1624 16.9512 15.7891 16.9512 15.3347C16.9512 14.9019 16.8376 14.5666 16.6104 14.3286C16.3939 14.0797 16.042 13.8687 15.5547 13.6956C15.0781 13.5117 14.4717 13.3117 13.7354 13.0952C12.9883 12.868 12.3818 12.5975 11.916 12.2835C11.4616 11.9588 11.1208 11.5584 10.8936 11.0823C10.6771 10.5954 10.5688 10.0272 10.5688 9.37773C10.5688 8.44681 10.834 7.6458 11.3643 6.97477C11.9053 6.2929 12.6787 5.95197 13.6846 5.95197C14.7344 5.95197 15.7734 6.22256 16.8018 6.76373L15.9355 8.87431C15.0371 8.39801 14.209 8.15986 13.4512 8.15986C12.9531 8.15986 12.585 8.27354 12.3467 8.50091C12.1084 8.72827 11.9893 9.02058 11.9893 9.37773C11.9893 9.77815 12.1139 10.0975 12.3633 10.3355C12.623 10.5736 13.1426 10.8277 13.9224 11.0982C14.6797 11.3364 15.2858 11.6015 15.7407 11.8937C16.2061 12.1859 16.5576 12.5864 16.7959 13.0952C17.0449 13.5933 17.1694 14.2212 17.1694 14.9786C17.1694 15.9312 16.958 16.732 16.5352 17.3813C16.123 18.0306 15.4515 18.4257 14.5205 18.5663V18.0267Z" fill="white"/>
  </svg>
);

export const TailwindIcon = ({ size = 24, className }: TechIconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M12.001 5.4C9.60098 5.4 7.80098 6.6 6.60098 9C7.80098 7.8 9.00098 7.5 10.201 8.1C10.963 8.481 11.491 9.049 12.081 9.68C13.238 10.916 14.542 12.3 17.401 12.3C19.801 12.3 21.601 11.1 22.801 8.7C21.601 9.9 20.401 10.2 19.201 9.6C18.439 9.219 17.911 8.651 17.321 8.02C16.164 6.784 14.86 5.4 12.001 5.4ZM6.60098 11.7C4.20098 11.7 2.40098 12.9 1.20098 15.3C2.40098 14.1 3.60098 13.8 4.80098 14.4C5.56298 14.781 6.09098 15.349 6.68098 15.98C7.83798 17.216 9.14198 18.6 12.001 18.6C14.401 18.6 16.201 17.4 17.401 15C16.201 16.2 15.001 16.5 13.801 15.9C13.039 15.519 12.511 14.951 11.921 14.32C10.764 13.084 9.45998 11.7 6.60098 11.7Z" fill="#06B6D4"/>
  </svg>
);

export const LaravelIcon = ({ size = 24, className }: TechIconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M12.4419 23.3643C12.1643 23.5135 11.8336 23.5135 11.5559 23.3643L0.865961 17.6186C0.575825 17.4626 0.395172 17.1593 0.395172 16.8309L0.407767 5.1764C0.407767 4.84587 0.589839 4.54117 0.881729 4.38575L11.5644 0.63583C11.8362 0.485155 12.1638 0.485155 12.4356 0.63583L23.1183 4.38575C23.4102 4.54117 23.5922 4.84587 23.5922 5.1764V16.8309C23.5922 17.1593 23.4116 17.4626 23.1214 17.6186L12.4419 23.3643Z" fill="#F05340"/>
    <path d="M12 18.0673L4.79374 14.1539V6.36838L12 2.30234L19.2063 6.36838V14.1539L12 18.0673Z" fill="#F05340" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/>
  </svg>
);

export const NodeIcon = ({ size = 24, className }: TechIconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M12.0125 19.9829L5.95547 16.4851V9.48956L12.0125 5.99175L18.0695 9.48956V16.4851L12.0125 19.9829Z" stroke="#339933" strokeWidth="2" strokeLinejoin="round"/>
    <path d="M12.0125 19.9829L12.0125 12.9873M12.0125 12.9873L5.95547 9.48956M12.0125 12.9873L18.0695 9.48956" stroke="#339933" strokeWidth="2" strokeLinejoin="round"/>
  </svg>
);

export const DatabaseIcon = ({ size = 24, className }: TechIconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <ellipse cx="12" cy="5" rx="9" ry="3"/>
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
  </svg>
);

export const GitIcon = ({ size = 24, className }: TechIconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path fillRule="evenodd" clipRule="evenodd" d="M23.546 10.931L13.067.452a1.442 1.442 0 0 0-2.039 0L8.794 2.686l3.376 3.376c.642-.143 1.348.06 1.776.488.429.429.632 1.136.488 1.778l3.197 3.196c.642-.143 1.348.06 1.777.488.75.75.75 1.966 0 2.716-.75.75-1.966.75-2.716 0-.429-.429-.632-1.136-.488-1.778l-3.197-3.196v4.619c.143.642-.06 1.348-.488 1.777-.75.75-1.966.75-2.716 0-.75-.75-.75-1.966 0-2.716.429-.429 1.136-.632 1.778-.488V8.326c-.642-.143-1.348.06-1.778.488L6.42 5.06 1.472 10.01a1.442 1.442 0 0 0 0 2.039L11.95 22.528a1.442 1.442 0 0 0 2.039 0l9.557-9.557a1.442 1.442 0 0 0 0-2.04z" fill="#F05032"/>
  </svg>
);

export const FigmaIcon = ({ size = 24, className }: TechIconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M12 2C9.238 2 7 4.238 7 7V17C7 19.762 9.238 22 12 22C14.762 22 17 19.762 17 17C17 15.619 16.441 14.369 15.535 13.465C16.441 12.561 17 11.311 17 9.93V7C17 4.238 14.762 2 12 2ZM12 4C13.657 4 15 5.343 15 7V9.93C15 11.587 13.657 12.93 12 12.93C10.343 12.93 9 11.587 9 9.93V7C9 5.343 10.343 4 12 4ZM12 14.93C13.657 14.93 15 16.273 15 17.93C15 19.587 13.657 20.93 12 20.93C10.343 20.93 9 19.587 9 17.93V14.93H12Z" fill="#F24E1E"/>
    <circle cx="12" cy="7" r="3" fill="#1ABCFE"/>
    <circle cx="12" cy="17" r="3" fill="#0ACF83"/>
    <path d="M12 9.93C10.343 9.93 9 11.273 9 12.93H12C13.657 12.93 15 11.587 15 9.93H12Z" fill="#A259FF"/>
  </svg>
);

export const ZapIcon = ({ size = 24, className }: TechIconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>
);
