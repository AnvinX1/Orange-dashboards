import React from "react"
import { type LucideIcon } from 'lucide-react';

// Navigation Types
export interface SidebarItem {
  id: string;
  label: string;
  href: string;
  icon: LucideIcon;
}

export interface DashboardTab {
  id: string;
  label: string;
  value: string;
}

// Domain Model Types
export interface Wallet {
  id: number;
  currency: string;
  balance: string;
  limit: string;
  status: 'Active' | 'Inactive';
  icon: string;
}

export interface Activity {
  id: string;
  activity: string;
  icon: React.ReactNode;
  price: string;
  status: 'Completed' | 'Pending' | 'In Progress';
  date: string;
}

export interface Card {
  id: number;
  type: 'black' | 'orange';
  balance?: string;
  cardNumber: string;
  exp: string;
  cvv: string;
  status: 'Active' | 'Inactive';
}

export interface ChartDataPoint {
  name: string;
  profit: number;
  loss: number;
}

export interface SummaryWidget {
  id: string;
  label: string;
  value: string;
  trend: string;
  trendDirection: 'up' | 'down';
  icon: React.ReactNode;
  backgroundColor?: string;
  textColor?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: string;
  status: 'Active' | 'Inactive';
  joinDate: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  description: string;
  category: string;
}

export interface MailMessage {
  id: string;
  from: string;
  subject: string;
  preview: string;
  date: string;
  read: boolean;
  starred: boolean;
}

export interface DashboardStats {
  totalBalance: string;
  balanceChange: number;
  totalEarnings: string;
  earningsTrend: number;
  totalSpending: string;
  spendingTrend: number;
  totalIncome: string;
  incomeTrend: number;
  totalRevenue: string;
  revenueTrend: number;
}
