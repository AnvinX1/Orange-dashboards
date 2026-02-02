'use client';

import { ReactNode } from 'react';

interface PageTransitionProps {
  children: ReactNode;
  delay?: number;
}

export function PageTransition({ children, delay = 0 }: PageTransitionProps) {
  return (
    <div
      className="animate-in fade-in slide-in-from-bottom-4 duration-500"
      style={{
        animationDelay: `${delay}ms`,
        opacity: 0,
        animation: `fadeInSlideUp 0.5s ease-out ${delay}ms forwards`,
      }}
    >
      {children}
    </div>
  );
}

export function PageTransitionContainer({ children }: { children: ReactNode }) {
  return (
    <div
      className="w-full"
      style={{
        opacity: 0,
        animation: `fadeInSlideUp 0.5s ease-out forwards`,
      }}
    >
      {children}
    </div>
  );
}
