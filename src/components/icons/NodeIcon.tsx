import { TechIconProps } from './types';

export const NodeIcon = ({ size = 24, className }: TechIconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M12.0125 19.9829L5.95547 16.4851V9.48956L12.0125 5.99175L18.0695 9.48956V16.4851L12.0125 19.9829Z" stroke="#339933" strokeWidth="2" strokeLinejoin="round"/>
    <path d="M12.0125 19.9829L12.0125 12.9873M12.0125 12.9873L5.95547 9.48956M12.0125 12.9873L18.0695 9.48956" stroke="#339933" strokeWidth="2" strokeLinejoin="round"/>
  </svg>
);
