import { ArrowDownLeft, ArrowUpRight } from 'lucide-react';
import type { DashboardStats, Wallet } from '@/lib/types';
import { WalletsSection } from './WalletsSection';

interface BalanceCardProps {
  stats: DashboardStats;
  wallets: Wallet[];
}

export function BalanceCard({ stats, wallets }: BalanceCardProps) {
  return (
    <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 shadow-sm border border-zinc-100 dark:border-zinc-800 transition-colors">
      <div className="flex justify-between items-start mb-4">
        <p className="text-zinc-400 text-sm">Total Balance</p>
        <div className="flex items-center gap-1 bg-zinc-50 dark:bg-zinc-800 px-2 py-1 rounded-md text-[10px] font-bold text-zinc-600 dark:text-zinc-300">
          🇺🇸 USD
        </div>
      </div>

      <h2 className="text-4xl font-bold mb-1">{stats.totalBalance}</h2>
      <p className="text-green-500 text-xs font-semibold mb-6">
        ↑ {stats.balanceChange}%{' '}
        <span className="text-zinc-400 font-normal">than last month</span>
      </p>

      {/* Action Buttons */}
      <div className="grid grid-cols-2 gap-3 mb-8">
        <button className="flex items-center justify-center gap-2 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 py-3 rounded-2xl text-sm font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors">
          <ArrowDownLeft size={16} /> Transfer
        </button>
        <button className="flex items-center justify-center gap-2 bg-zinc-50 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 py-3 rounded-2xl text-sm font-semibold hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors">
          <ArrowUpRight size={16} /> Request
        </button>
      </div>

      {/* Wallets */}
      <WalletsSection wallets={wallets} />
    </div>
  );
}
