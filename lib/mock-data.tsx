import {
  TrendingUp,
  Calendar,
  PieChart,
  Settings,
} from 'lucide-react';
import type {
  Wallet,
  Activity,
  Card,
  ChartDataPoint,
  SummaryWidget,
  User,
  Event,
  MailMessage,
} from './types';

// Wallet Data
export const MOCK_WALLETS: Wallet[] = [
  {
    id: 1,
    currency: 'USD',
    balance: '$22,678.00',
    limit: '$10k a month',
    status: 'Active',
    icon: '🇺🇸',
  },
  {
    id: 2,
    currency: 'EUR',
    balance: '€18,345.00',
    limit: '$8k a month',
    status: 'Active',
    icon: '🇪🇺',
  },
  {
    id: 3,
    currency: 'GBP',
    balance: '£15,000.00',
    limit: '$7.5k a month',
    status: 'Inactive',
    icon: '🇬🇧',
  },
];

// Activity Data
export const MOCK_ACTIVITIES: Activity[] = [
  {
    id: 'INV_000076',
    activity: 'Mobile App Purchase',
    icon: (
      <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg text-blue-600 dark:text-blue-400">
        <TrendingUp size={14} />
      </div>
    ),
    price: '$25,500',
    status: 'Completed',
    date: '17 Apr, 2026 03:45 PM',
  },
  {
    id: 'INV_000075',
    activity: 'Hotel Booking',
    icon: (
      <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg text-blue-800 dark:text-blue-300">
        <Calendar size={14} />
      </div>
    ),
    price: '$32,750',
    status: 'Pending',
    date: '15 Apr, 2026 11:30 AM',
  },
  {
    id: 'INV_000074',
    activity: 'Flight Ticket Booking',
    icon: (
      <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg text-blue-400 dark:text-blue-300">
        <TrendingUp size={14} />
      </div>
    ),
    price: '$40,200',
    status: 'Completed',
    date: '15 Apr, 2026 12:00 PM',
  },
  {
    id: 'INV_000073',
    activity: 'Grocery Purchase',
    icon: (
      <div className="bg-yellow-100 dark:bg-yellow-900/30 p-2 rounded-lg text-yellow-600 dark:text-yellow-400">
        <PieChart size={14} />
      </div>
    ),
    price: '$50,200',
    status: 'In Progress',
    date: '14 Apr, 2026 09:15 PM',
  },
  {
    id: 'INV_000073_2',
    activity: 'Software License',
    icon: (
      <div className="bg-red-100 dark:bg-red-900/30 p-2 rounded-lg text-red-600 dark:text-red-400">
        <Settings size={14} />
      </div>
    ),
    price: '$15,900',
    status: 'Completed',
    date: '10 Apr, 2026 06:00 AM',
  },
];

// Chart Data
export const MOCK_CHART_DATA: ChartDataPoint[] = [
  { name: 'Jan', profit: 25, loss: 15 },
  { name: 'Feb', profit: 35, loss: 20 },
  { name: 'Mar', profit: 30, loss: 25 },
  { name: 'Apr', profit: 45, loss: 15 },
  { name: 'May', profit: 48, loss: 10 },
  { name: 'Jun', profit: 38, loss: 22 },
  { name: 'Jul', profit: 42, loss: 18 },
  { name: 'Aug', profit: 32, loss: 24 },
];

// Cards Data
export const MOCK_CARDS: Card[] = [
  {
    id: 1,
    type: 'black',
    balance: undefined,
    cardNumber: '**** **** 6782',
    exp: '09/29',
    cvv: '611',
    status: 'Active',
  },
  {
    id: 2,
    type: 'orange',
    balance: '$50,000',
    cardNumber: '**** 4356',
    exp: '12/28',
    cvv: '234',
    status: 'Active',
  },
];

// Summary Widget Data
export const MOCK_SUMMARY_WIDGETS: SummaryWidget[] = [
  {
    id: 'earnings',
    label: 'Total Earnings',
    value: '$950',
    trend: '7%',
    trendDirection: 'up',
    backgroundColor: '#FF5733',
    textColor: 'text-white',
    icon: null,
  },
  {
    id: 'spending',
    label: 'Total Spending',
    value: '$700',
    trend: '5%',
    trendDirection: 'down',
    icon: null,
  },
  {
    id: 'income',
    label: 'Total Income',
    value: '$1,050',
    trend: '8%',
    trendDirection: 'up',
    icon: null,
  },
  {
    id: 'revenue',
    label: 'Total Revenue',
    value: '$850',
    trend: '4%',
    trendDirection: 'up',
    icon: null,
  },
];

// Users Data
export const MOCK_USERS: User[] = [
  {
    id: '1',
    name: 'Alex Johnson',
    email: 'alex.johnson@example.com',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex',
    role: 'Administrator',
    status: 'Active',
    joinDate: '2023-01-15',
  },
  {
    id: '2',
    name: 'Emma Davis',
    email: 'emma.davis@example.com',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emma',
    role: 'Manager',
    status: 'Active',
    joinDate: '2023-03-20',
  },
  {
    id: '3',
    name: 'Michael Smith',
    email: 'michael.smith@example.com',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Michael',
    role: 'User',
    status: 'Active',
    joinDate: '2023-05-10',
  },
  {
    id: '4',
    name: 'Sarah Wilson',
    email: 'sarah.wilson@example.com',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
    role: 'Analyst',
    status: 'Inactive',
    joinDate: '2023-07-22',
  },
];

// Events Data
export const MOCK_EVENTS: Event[] = [
  {
    id: '1',
    title: 'Team Meeting',
    date: '2026-02-02',
    time: '10:00 AM',
    description: 'Weekly team sync-up',
    category: 'Meeting',
  },
  {
    id: '2',
    title: 'Project Deadline',
    date: '2026-02-05',
    time: '05:00 PM',
    description: 'Final project submission',
    category: 'Deadline',
  },
  {
    id: '3',
    title: 'Client Presentation',
    date: '2026-02-08',
    time: '02:00 PM',
    description: 'Q1 quarterly review presentation',
    category: 'Presentation',
  },
  {
    id: '4',
    title: 'Training Session',
    date: '2026-02-10',
    time: '03:00 PM',
    description: 'New feature training',
    category: 'Training',
  },
];

// Mail Data
export const MOCK_MAIL_MESSAGES: MailMessage[] = [
  {
    id: '1',
    from: 'hello@example.com',
    subject: 'Welcome to our platform',
    preview: 'We are excited to have you on board. This is your first message...',
    date: '2026-02-01',
    read: true,
    starred: false,
  },
  {
    id: '2',
    from: 'notifications@example.com',
    subject: 'Your monthly report is ready',
    preview: 'Your monthly activity report has been generated and is ready for...',
    date: '2026-02-02',
    read: false,
    starred: true,
  },
  {
    id: '3',
    from: 'support@example.com',
    subject: 'Re: Support ticket #12345',
    preview: 'Thank you for reaching out. We have reviewed your issue and...',
    date: '2026-02-02',
    read: false,
    starred: false,
  },
];

// Dashboard Stats
export const MOCK_DASHBOARD_STATS = {
  totalBalance: '$689,372.00',
  balanceChange: 5,
  totalEarnings: '$950',
  earningsTrend: 7,
  totalSpending: '$700',
  spendingTrend: -5,
  totalIncome: '$1,050',
  incomeTrend: 8,
  totalRevenue: '$850',
  revenueTrend: 4,
};

// Spending Limit
export const MOCK_SPENDING_LIMIT = {
  spent: '$1,400.00',
  limit: '$5,500.00',
  percentage: 25,
};
