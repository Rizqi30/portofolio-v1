'use client';

import * as React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = ({ 
  className, 
  variant = 'primary', 
  size = 'md', 
  ...props 
}: ButtonProps) => {
  const variants = {
    primary: 'bg-primary text-black hover:bg-primary-dark shadow-lg shadow-primary/20',
    secondary: 'bg-surface-dark text-white hover:bg-stone-800 dark:bg-surface-light dark:text-black dark:hover:bg-stone-100',
    outline: 'border-2 border-primary text-primary hover:bg-primary/5',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        'rounded-xl font-bold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    />
  );
};
