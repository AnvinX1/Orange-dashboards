'use client';

import { Plus, Lock, Eye, EyeOff } from 'lucide-react';
import { PageHeader } from '../PageHeader';
import { MOCK_CARDS } from '@/lib/mock-data';
import { useState } from 'react';

export function CardsPage() {
  const [revealedCards, setRevealedCards] = useState<number[]>([]);

  const toggleReveal = (id: number) => {
    setRevealedCards((prev) =>
      prev.includes(id) ? prev.filter((cardId) => cardId !== id) : [...prev, id]
    );
  };

  return (
    <div className="space-y-6 animate-fadeInSlideUp">
      <div style={{ animation: 'fadeInSlideUp 0.5s ease-out' }}>
        <PageHeader
          title="My Cards"
          description="Manage your credit and debit cards."
        />
      </div>

      {/* Active Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" style={{ animation: 'fadeInSlideUp 0.5s ease-out 0.1s backwards' }}>
        {MOCK_CARDS.map((card) => (
          <div
            key={card.id}
            className={`${
              card.type === 'black'
                ? 'bg-gradient-to-br from-zinc-800 to-zinc-950'
                : 'bg-[#FF5733]'
            } text-white rounded-3xl p-6 shadow-lg relative overflow-hidden h-48`}
          >
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16" />

            <div className="flex justify-between items-start mb-8 relative z-10">
              <div>
                <p className="text-xs opacity-60 font-medium">Card</p>
                <p className="text-sm font-semibold mt-1">
                  {card.type === 'black' ? 'Premium' : 'Standard'}
                </p>
              </div>
              <span className="px-2 py-1 rounded-full text-xs backdrop-blur-sm bg-white/20 font-semibold">
                {card.status}
              </span>
            </div>

            <div className="relative z-10 mb-8">
              <p className="text-xs opacity-40 uppercase tracking-widest font-medium">
                Card Number
              </p>
              <p className="text-lg font-mono tracking-widest mt-2">
                {revealedCards.includes(card.id)
                  ? card.cardNumber.replace(/\*/g, '•')
                  : '**** **** ****'}
              </p>
            </div>

            <div className="flex justify-between items-end relative z-10">
              <div>
                <p className="text-xs opacity-40 uppercase">Name</p>
                <p className="text-sm font-semibold mt-1">Cardholder</p>
              </div>
              <button
                onClick={() => toggleReveal(card.id)}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              >
                {revealedCards.includes(card.id) ? (
                  <EyeOff size={18} />
                ) : (
                  <Eye size={18} />
                )}
              </button>
            </div>
          </div>
        ))}

        {/* Add Card Button */}
        <button className="border-2 border-dashed border-zinc-300 dark:border-zinc-700 rounded-3xl p-6 flex items-center justify-center hover:border-[#FF5733] dark:hover:border-[#FF5733] transition-colors min-h-48">
          <div className="text-center">
            <Plus size={32} className="mx-auto mb-2 opacity-50" />
            <p className="font-semibold">Add Card</p>
            <p className="text-xs text-zinc-400 mt-1">
              Add a new card to your account
            </p>
          </div>
        </button>
      </div>

      {/* Card Management */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Card Settings */}
        <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 shadow-sm border border-zinc-100 dark:border-zinc-800">
          <h3 className="text-lg font-bold mb-6">Card Settings</h3>

          <div className="space-y-4">
            {MOCK_CARDS.map((card, idx) => (
              <div
                key={card.id}
                className="p-4 border border-zinc-100 dark:border-zinc-800 rounded-2xl"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-semibold">Card {idx + 1}</span>
                  <span className="text-xs px-2 py-1 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-full">
                    {card.status}
                  </span>
                </div>

                <div className="space-y-2 text-sm">
                  <button className="w-full py-2 px-3 bg-zinc-50 dark:bg-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-700 rounded-lg transition-colors text-left">
                    ⚙️ Card Settings
                  </button>
                  <button className="w-full py-2 px-3 bg-zinc-50 dark:bg-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-700 rounded-lg transition-colors text-left">
                    🔒 Lock Card
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Card Limits */}
        <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 shadow-sm border border-zinc-100 dark:border-zinc-800">
          <h3 className="text-lg font-bold mb-6">Spending Limits</h3>

          <div className="space-y-6">
            {['Daily', 'Weekly', 'Monthly'].map((period, idx) => (
              <div key={idx}>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-semibold">{period} Limit</span>
                  <span className="text-sm font-bold">$5,000</span>
                </div>
                <div className="w-full h-2 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#FF5733] transition-all"
                    style={{ width: `${Math.random() * 70 + 10}%` }}
                  />
                </div>
                <p className="text-xs text-zinc-400 mt-1">
                  ${Math.floor(Math.random() * 2000 + 1000)} spent
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
