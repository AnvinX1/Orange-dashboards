'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Search, Bell, Info, ChevronDown, Menu } from 'lucide-react';
import { DASHBOARD_TABS, DEFAULT_USER } from '@/lib/constants';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface DashboardHeaderProps {
  activeTab?: string;
  onMenuClick?: () => void;
}

export function DashboardHeader({ activeTab = 'overview', onMenuClick }: DashboardHeaderProps) {
  const searchParams = useSearchParams();
  const currentTab = searchParams.get('tab') || activeTab;

  return (
    <header className="px-4 md:px-8 py-4 md:py-6 flex items-center justify-between sticky top-0 bg-[#F8F9FA]/80 dark:bg-zinc-950/80 backdrop-blur-md z-10 transition-colors border-b border-zinc-200 dark:border-zinc-800 gap-4">
      {/* Mobile Menu Button */}
      <button 
        className="md:hidden p-2 -ml-2 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
        onClick={onMenuClick}
      >
        <Menu size={24} />
      </button>

      {/* Navigation Tabs */}
      <nav className="flex items-center gap-1 bg-white dark:bg-zinc-900 p-1 rounded-full shadow-sm border border-zinc-100 dark:border-zinc-800 overflow-x-auto scrollbar-hide max-w-[calc(100vw-140px)] md:max-w-none">
        {DASHBOARD_TABS.map((tab) => (
          <Link
            key={tab.id}
            href={`/overview?tab=${tab.value}`}
            className={`px-3 md:px-5 py-2 rounded-full text-xs md:text-sm font-medium transition-all whitespace-nowrap ${
              currentTab === tab.value
                ? 'bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 shadow-md'
                : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
            }`}
          >
            {tab.label}
          </Link>
        ))}
      </nav>

      {/* Right Section */}
      <div className="flex items-center gap-2 md:gap-6 ml-auto">
        {/* Search & Notifications */}
        <div className="flex items-center gap-2 md:gap-4 text-zinc-400 dark:text-zinc-500">
          <button className="cursor-pointer hover:text-zinc-900 dark:hover:text-white transition-colors hidden sm:block">
            <Search size={20} />
          </button>
          <div className="relative">
            <button className="cursor-pointer hover:text-zinc-900 dark:hover:text-white transition-colors">
              <Bell size={20} />
            </button>
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#FF5733] rounded-full border-2 border-white dark:border-zinc-950"></span>
          </div>
          <button className="hidden sm:block cursor-pointer hover:text-zinc-900 dark:hover:text-white transition-colors">
            <Info size={20} />
          </button>
        </div>

        {/* User Menu */}
        <div className="flex items-center gap-3 pl-2 md:pl-6 border-l border-zinc-200 dark:border-zinc-800">
          <div className="text-right hidden md:block">
            <p className="text-sm font-semibold">{DEFAULT_USER.name}</p>
            <p className="text-xs text-zinc-400">{DEFAULT_USER.email}</p>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden bg-zinc-200 dark:bg-zinc-800">
                  <img
                    src={DEFAULT_USER.avatar || "/placeholder.svg"}
                    alt="Avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <ChevronDown size={16} className="text-zinc-400 hidden sm:block" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
