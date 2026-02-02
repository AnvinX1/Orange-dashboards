'use client';

import { PageHeader } from '../PageHeader';
import { WalletsSection } from '../sections/WalletsSection';
import { MOCK_WALLETS, MOCK_CARDS } from '@/lib/mock-data';

export function ManagePage() {
  return (
    <div className="space-y-6 animate-fadeInSlideUp">
      <div style={{ animation: 'fadeInSlideUp 0.5s ease-out' }}>
        <PageHeader
          title="Manage"
          description="Manage your wallets, cards, and financial settings."
        />
      </div>

      <div className="grid grid-cols-12 gap-6" style={{ animation: 'fadeInSlideUp 0.5s ease-out 0.1s backwards' }}>
        {/* Wallets Section */}
        <div className="col-span-12 lg:col-span-6">
          <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 shadow-sm border border-zinc-100 dark:border-zinc-800 transition-colors">
            <WalletsSection wallets={MOCK_WALLETS} />
          </div>
        </div>

        {/* Cards Section */}
        <div className="col-span-12 lg:col-span-6">
          <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 shadow-sm border border-zinc-100 dark:border-zinc-800 transition-colors">
            <h3 className="text-sm font-bold mb-6">My Cards ({MOCK_CARDS.length})</h3>
            <div className="space-y-4">
              {MOCK_CARDS.map((card, idx) => (
                <div
                  key={card.id}
                  className="p-4 border border-zinc-100 dark:border-zinc-800 rounded-2xl bg-zinc-50/50 dark:bg-zinc-900/50 hover:bg-zinc-100/50 dark:hover:bg-zinc-800/50 transition-colors"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-xs font-bold text-zinc-900 dark:text-white">
                        Card {idx + 1}
                      </p>
                      <p className="text-[10px] text-zinc-400 mt-1">
                        {card.cardNumber}
                      </p>
                    </div>
                    <span className="px-2 py-1 rounded-full text-xs font-semibold bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400">
                      {card.status}
                    </span>
                  </div>
                  <div className="mt-4 flex justify-between text-[10px] text-zinc-600 dark:text-zinc-400">
                    <span>Exp: {card.exp}</span>
                    <span>CVV: {card.cvv}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Management Options Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 shadow-sm border border-zinc-100 dark:border-zinc-800 transition-colors">
          <h3 className="text-lg font-bold mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <button className="w-full py-3 px-4 bg-zinc-50 dark:bg-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-700 rounded-2xl text-sm font-semibold transition-colors text-left">
              + Add Wallet
            </button>
            <button className="w-full py-3 px-4 bg-zinc-50 dark:bg-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-700 rounded-2xl text-sm font-semibold transition-colors text-left">
              + Add Card
            </button>
            <button className="w-full py-3 px-4 bg-zinc-50 dark:bg-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-700 rounded-2xl text-sm font-semibold transition-colors text-left">
              Set Spending Limits
            </button>
            <button className="w-full py-3 px-4 bg-zinc-50 dark:bg-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-700 rounded-2xl text-sm font-semibold transition-colors text-left">
              Security Settings
            </button>
          </div>
        </div>

        <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 shadow-sm border border-zinc-100 dark:border-zinc-800 transition-colors">
          <h3 className="text-lg font-bold mb-4">Preferences</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm">Email Notifications</span>
              <input
                type="checkbox"
                defaultChecked
                className="w-4 h-4 rounded"
              />
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Transaction Alerts</span>
              <input
                type="checkbox"
                defaultChecked
                className="w-4 h-4 rounded"
              />
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Two-Factor Auth</span>
              <input type="checkbox" className="w-4 h-4 rounded" />
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Monthly Reports</span>
              <input
                type="checkbox"
                defaultChecked
                className="w-4 h-4 rounded"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
