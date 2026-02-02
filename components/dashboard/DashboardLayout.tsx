'use client';

import { ReactNode, useState, useEffect } from 'react';
import { DashboardSidebar } from './DashboardSidebar';
import { DashboardHeader } from './DashboardHeader';
import { useTheme } from '@/lib/hooks/useTheme';
import { Sheet, SheetContent } from '@/components/ui/sheet';

interface DashboardLayoutProps {
  children: ReactNode;
  showHeader?: boolean;
}

export function DashboardLayout({
  children,
  showHeader = true,
}: DashboardLayoutProps) {
  const { theme, toggleTheme, mounted } = useTheme();
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsInitialLoad(false);
  }, []);

  if (!mounted) return null;

  return (
    <div
      className={`${theme === 'dark' ? 'dark' : ''} h-screen flex overflow-hidden transition-opacity duration-500`}
      style={{
        opacity: isInitialLoad ? 0 : 1,
        animation: isInitialLoad ? 'fadeInSlideUp 0.6s ease-out' : 'none',
      }}
    >
      <div className="flex w-full h-full bg-[#F8F9FA] dark:bg-zinc-950 font-sans text-zinc-900 dark:text-zinc-100 transition-colors duration-300">
        {/* Desktop Sidebar */}
        <div className="hidden md:flex h-full">
          <DashboardSidebar theme={theme as 'light' | 'dark'} onThemeToggle={toggleTheme} />
        </div>

        {/* Mobile Sidebar */}
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetContent side="left" className="p-0 w-20 border-r border-zinc-200 dark:border-zinc-800 bg-transparent [&>button]:hidden">
            <DashboardSidebar 
              theme={theme as 'light' | 'dark'} 
              onThemeToggle={toggleTheme} 
              onLinkClick={() => setIsMobileMenuOpen(false)}
              className="h-full border-none"
            />
          </SheetContent>
        </Sheet>

        {/* Main Content */}
        <main className="flex-1 flex flex-col overflow-y-auto">
          {/* Header */}
          {showHeader && (
            <DashboardHeader 
              onMenuClick={() => setIsMobileMenuOpen(true)} 
            />
          )}

          {/* Page Content */}
          <div
            className="flex-1 px-4 md:px-8 pb-8 pt-4 md:pt-8"
            style={{
              opacity: isInitialLoad ? 0 : 1,
              animation: isInitialLoad ? 'fadeInSlideUp 0.7s ease-out 0.15s forwards' : 'none',
            }}
          >
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
