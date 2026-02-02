'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export function usePageTransition() {
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    // Trigger transition on route change
    setIsTransitioning(true);
    const timer = setTimeout(() => setIsTransitioning(false), 50);
    return () => clearTimeout(timer);
  }, [pathname]);

  return { isTransitioning };
}
