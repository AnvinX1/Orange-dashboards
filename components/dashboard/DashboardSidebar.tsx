'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Sun, Moon } from 'lucide-react';
import { SIDEBAR_ITEMS, BOTTOM_SIDEBAR_ITEMS } from '@/lib/constants';

interface DashboardSidebarProps {
  theme: 'light' | 'dark';
  onThemeToggle: () => void;
  className?: string;
  onLinkClick?: () => void;
}

export function DashboardSidebar({ theme, onThemeToggle, className = '', onLinkClick }: DashboardSidebarProps) {
  const pathname = usePathname();

  const isActive = (href: string) => {
    const pathSegment = '/' + pathname.split('/')[1];
    const hrefSegment = '/' + href.split('/')[1];
    return pathSegment === hrefSegment;
  };

  const SidebarIcon = ({ icon: Icon, active = false }: any) => (
    <div
      className={`p-3 cursor-pointer rounded-xl transition-all ${
        active
          ? 'bg-zinc-800 dark:bg-zinc-100 text-white dark:text-zinc-900 shadow-lg'
          : 'text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800'
      }`}
    >
      <Icon size={20} />
    </div>
  );

  return (
    <aside className={`w-20 border-r border-zinc-200 dark:border-zinc-800 flex flex-col items-center py-8 gap-8 bg-white dark:bg-zinc-900 shrink-0 transition-colors ${className}`}>
      {/* Logo */}
      <div className="w-10 h-10 bg-[#FF5733] rounded-xl flex items-center justify-center text-white mb-4">
        <span className="font-bold text-xl">A</span>
      </div>

      {/* Theme Switcher */}
      <div className="flex flex-col gap-2 p-1 bg-zinc-50 dark:bg-zinc-800 rounded-2xl">
        <button
          onClick={() => {
            if (theme === 'dark') onThemeToggle();
          }}
          className={`p-2 cursor-pointer rounded-xl transition-all ${
            theme === 'light' ? 'bg-white dark:bg-zinc-700 shadow-sm' : ''
          }`}
        >
          <Sun
            size={18}
            className={
              theme === 'light'
                ? 'text-zinc-800 dark:text-white'
                : 'text-zinc-400'
            }
          />
        </button>
        <button
          onClick={() => {
            if (theme === 'light') onThemeToggle();
          }}
          className={`p-2 cursor-pointer rounded-xl transition-all ${
            theme === 'dark' ? 'bg-white dark:bg-zinc-700 shadow-sm' : ''
          }`}
        >
          <Moon
            size={18}
            className={
              theme === 'dark'
                ? 'text-zinc-800 dark:text-white'
                : 'text-zinc-400'
            }
          />
        </button>
      </div>

      {/* Main Navigation */}
      <nav className="flex flex-col gap-4">
        {SIDEBAR_ITEMS.map((item) => (
          <Link key={item.id} href={item.href} title={item.label} onClick={onLinkClick}>
            <SidebarIcon icon={item.icon} active={isActive(item.href)} />
          </Link>
        ))}
      </nav>

      {/* Bottom Navigation */}
      <div className="mt-auto flex flex-col gap-4">
        {BOTTOM_SIDEBAR_ITEMS.map((item) => (
          <Link key={item.id} href={item.href} title={item.label} onClick={onLinkClick}>
            <SidebarIcon icon={item.icon} />
          </Link>
        ))}
      </div>
    </aside>
  );
}
