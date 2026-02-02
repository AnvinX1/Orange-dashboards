import { Plus } from 'lucide-react';
import type { Card } from '@/lib/types';

interface CardsCarouselProps {
  cards: Card[];
}

export function CardsCarousel({ cards }: CardsCarouselProps) {
  return (
    <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 shadow-sm border border-zinc-100 dark:border-zinc-800 transition-colors">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <div className="bg-zinc-100 dark:bg-zinc-800 p-1.5 rounded-lg text-zinc-600 dark:text-zinc-300">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 10h18M7 15h10m4 0h.01M7 19h10m4 0h.01M3 7l1.293-1.293a1 1 0 011.414 0L9 7m0 0l1.293-1.293a1 1 0 011.414 0L15 7m0 0l1.293-1.293a1 1 0 011.414 0L21 7"
              />
            </svg>
          </div>
          <h3 className="text-sm font-bold">My Cards</h3>
        </div>
        <button className="text-[10px] font-bold bg-zinc-50 dark:bg-zinc-800 px-3 py-1.5 rounded-lg border border-zinc-100 dark:border-zinc-700 flex items-center gap-1 hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors">
          <Plus size={12} /> Add new
        </button>
      </div>

      {/* Cards Container */}
      <div className="flex gap-4 overflow-x-auto pb-2 scroll-smooth">
        {cards.map((card) =>
          card.type === 'black' ? (
            <div
              key={card.id}
              className="min-w-[200px] aspect-[1.6/1] bg-gradient-to-br from-zinc-800 to-zinc-950 rounded-2xl p-4 text-white relative shadow-xl flex flex-col justify-between"
            >
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-1 bg-white/10 px-2 py-0.5 rounded-md text-[8px] backdrop-blur-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  Active
                </div>
                <div className="flex">
                  <div className="w-6 h-6 rounded-full bg-[#EB001B]/80 z-10" />
                  <div className="w-6 h-6 rounded-full bg-[#F79E1B]/80 -ml-3" />
                </div>
              </div>

              <div>
                <p className="text-[8px] opacity-40 uppercase tracking-widest">
                  Card Number
                </p>
                <p className="text-sm tracking-widest font-mono">{card.cardNumber}</p>
              </div>

              <div className="flex justify-between items-end">
                <div>
                  <p className="text-[8px] opacity-40 uppercase">Exp</p>
                  <p className="text-[10px]">{card.exp}</p>
                </div>
                <div>
                  <p className="text-[8px] opacity-40 uppercase">CVV</p>
                  <p className="text-[10px]">{card.cvv}</p>
                </div>
              </div>
            </div>
          ) : (
            <div
              key={card.id}
              className="min-w-[140px] aspect-[1.2/1] bg-[#FF5733] rounded-2xl p-4 text-white shadow-xl flex flex-col justify-between"
            >
              <div className="flex items-center gap-1 bg-white/20 w-fit px-2 py-0.5 rounded-md text-[8px] backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                Active
              </div>

              <div>
                <p className="text-[8px] opacity-60 uppercase">Card Number</p>
                <p className="text-xs font-mono">{card.cardNumber}</p>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
