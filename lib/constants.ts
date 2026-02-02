import {
  LayoutGrid,
  Calendar,
  Mail,
  CreditCard,
  Users,
  Settings,
  HelpCircle,
  LogOut,
} from 'lucide-react';
import type { SidebarItem, DashboardTab } from './types';

export const SIDEBAR_ITEMS: SidebarItem[] = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    href: '/overview',
    icon: LayoutGrid,
  },
  {
    id: 'calendar',
    label: 'Calendar',
    href: '/calendar',
    icon: Calendar,
  },
  {
    id: 'mail',
    label: 'Mail',
    href: '/mail',
    icon: Mail,
  },
  {
    id: 'cards',
    label: 'Cards',
    href: '/cards',
    icon: CreditCard,
  },
  {
    id: 'users',
    label: 'Users',
    href: '/users',
    icon: Users,
  },
  {
    id: 'settings',
    label: 'Settings',
    href: '/settings',
    icon: Settings,
  },
];

export const BOTTOM_SIDEBAR_ITEMS: SidebarItem[] = [
  {
    id: 'help',
    label: 'Help',
    href: '/help',
    icon: HelpCircle,
  },
  {
    id: 'logout',
    label: 'Logout',
    href: '/logout',
    icon: LogOut,
  },
];

export const DASHBOARD_TABS: DashboardTab[] = [
  { id: 'overview', label: 'Overview', value: 'overview' },
  { id: 'activity', label: 'Activity', value: 'activity' },
  { id: 'manage', label: 'Manage', value: 'manage' },
  { id: 'program', label: 'Program', value: 'program' },
  { id: 'account', label: 'Account', value: 'account' },
  { id: 'reports', label: 'Reports', value: 'reports' },
];

export const STATUS_BADGE_STYLES = {
  Completed: 'bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400',
  Pending: 'bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400',
  'In Progress': 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400',
  Active: 'text-green-500',
  Inactive: 'text-zinc-400',
};

export const DEFAULT_USER = {
  name: 'Sajibur Rahman',
  email: 'sajibur.rahman@gm...',
  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sajibur',
};
