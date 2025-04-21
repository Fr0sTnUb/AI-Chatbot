import React from 'react';
import { cn } from '../utils/cn';

interface VectorProps {
  className?: string;
  animate?: boolean;
}

export const HangerVector: React.FC<VectorProps> = ({ className, animate = false }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={cn(
        "text-primary", 
        animate && "animate-pulse-slow", 
        className
      )}
    >
      <path d="M12 2a2 2 0 0 0-2 2c0 1.2 1.1 2 2 2 2.5 0 2.5 2 5 2s.5-2 0-2c-3 0-3-2-5-2zm0 4c-1.7 0-3-1.3-3-2 0-1.7 1.3-3 3-3s3 1.3 3 3c0 .7-1.3 2-3 2z" />
      <path d="M20.4 13.5L12 8l-8.4 5.5" />
      <path d="M20 16.5L4 16.5A1.5 1.5 0 0 1 2.5 15L4 7l16 0 1.5 8A1.5 1.5 0 0 1 20 16.5z" />
    </svg>
  );
};

export const DressVector: React.FC<VectorProps> = ({ className, animate = false }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={cn(
        "text-primary", 
        animate && "animate-pulse-slow", 
        className
      )}
    >
      <path d="M9 2c0 1.2-.5 2-2 2s-2-.8-2-2 .5-2 2-2 2 .8 2 2z" />
      <path d="M13 2c0 1.2.5 2 2 2s2-.8 2-2-.5-2-2-2-2 .8-2 2z" />
      <path d="M12 19l-3-6V7.5L12 6l3 1.5V13l-3 6z" />
      <path d="M10.5 22h3c2.5 0 2.5-3 0-3h-3c-2.5 0-2.5 3 0 3z" />
      <path d="M9 13H4l-1 4c0 1.5 2 1.5 2 0v-2h2" />
      <path d="M15 13h5l1 4c0 1.5-2 1.5-2 0v-2h-2" />
    </svg>
  );
};

export const TShirtVector: React.FC<VectorProps> = ({ className, animate = false }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={cn(
        "text-primary", 
        animate && "animate-pulse-slow", 
        className
      )}
    >
      <path d="M20 4l-2-2H6L4 4l-2 2c0 1.5 2 1.5 2 0l.5-1C7 9 7 9 12 9s5 0 7.5-4l.5 1c0 1.5 2 1.5 2 0l-2-2z" />
      <path d="M4 22h16V10c-5 0-5 2-8 2s-3-2-8-2v12z" />
    </svg>
  );
};

export const ShoesVector: React.FC<VectorProps> = ({ className, animate = false }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={cn(
        "text-primary", 
        animate && "animate-pulse-slow", 
        className
      )}
    >
      <path d="M4 9c0 1.5 0 3 2 4l12 2c3 .5 3 2 3 3v1H3v-2c0-1 1-2 2-2h15.5c.3 0 .5-.3.5-.6V9c0-1-1-1-1.5-1.5L16 6c-1.5-.5-2-2-2-2C6 4 4 7 4 9z" />
      <path d="M10.8 9.2c1-.2 1.7-1 1.7-2H7c0 1.5.8 2.2 3.8 2z" />
    </svg>
  );
};

export const AccessoriesVector: React.FC<VectorProps> = ({ className, animate = false }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={cn(
        "text-primary", 
        animate && "animate-pulse-slow", 
        className
      )}
    >
      <circle cx="12" cy="12" r="8" />
      <path d="M12 9a3 3 0 0 0 0 6 3 3 0 0 0 0-6z" />
      <path d="M7 6l1.5 1.5" />
      <path d="M17 6l-1.5 1.5" />
      <path d="M7 18l1.5-1.5" />
      <path d="M17 18l-1.5-1.5" />
    </svg>
  );
};

export const JewelryVector: React.FC<VectorProps> = ({ className, animate = false }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={cn(
        "text-primary", 
        animate && "animate-pulse-slow", 
        className
      )}
    >
      <path d="M12 2v6l3-3-3-3z" />
      <path d="M12 8v14l5-5-5-9z" />
      <path d="M12 8v14l-5-5 5-9z" />
    </svg>
  );
};

const fashionIcons = {
  hanger: HangerVector,
  dress: DressVector,
  tshirt: TShirtVector,
  shoes: ShoesVector,
  accessories: AccessoriesVector,
  jewelry: JewelryVector
};

export default fashionIcons; 