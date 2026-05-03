import { TechIconProps } from './types';

export const VueIcon = ({ size = 24, className }: TechIconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M14.526 2L12 6.368L9.474 2H0L12 22L24 2H14.526Z" fill="#41B883"/>
    <path d="M14.526 2L12 6.368L9.474 2H4.737L12 14.526L19.263 2H14.526Z" fill="#34495E"/>
  </svg>
);
