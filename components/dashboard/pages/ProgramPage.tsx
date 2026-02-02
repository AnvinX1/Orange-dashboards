'use client';

import { PageHeader } from '../PageHeader';

export function ProgramPage() {
  const programs = [
    {
      id: 1,
      name: 'Cashback Rewards',
      description: 'Earn up to 5% cashback on eligible purchases',
      status: 'Active',
      points: 2500,
      tier: 'Gold',
    },
    {
      id: 2,
      name: 'Referral Program',
      description: 'Get $50 bonus for each successful referral',
      status: 'Active',
      points: 1200,
      tier: 'Silver',
    },
    {
      id: 3,
      name: 'VIP Benefits',
      description: 'Premium features and exclusive access',
      status: 'Active',
      points: 5000,
      tier: 'Platinum',
    },
  ];

  return (
    <div className="space-y-6 animate-fadeInSlideUp">
      <div style={{ animation: 'fadeInSlideUp 0.5s ease-out' }}>
        <PageHeader
          title="Programs & Rewards"
          description="Participate in loyalty programs and earn rewards."
        />
      </div>

      {/* Current Programs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" style={{ animation: 'fadeInSlideUp 0.5s ease-out 0.1s backwards' }}>
        {programs.map((program) => (
          <div
            key={program.id}
            className="bg-white dark:bg-zinc-900 rounded-3xl p-6 shadow-sm border border-zinc-100 dark:border-zinc-800 hover:shadow-md transition-all"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-sm font-bold">{program.name}</h3>
                <p className="text-[10px] text-zinc-400 mt-1">
                  {program.tier}
                </p>
              </div>
              <span className="px-2 py-1 rounded-full text-xs font-semibold bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400">
                {program.status}
              </span>
            </div>

            <p className="text-xs text-zinc-600 dark:text-zinc-400 mb-4">
              {program.description}
            </p>

            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-semibold">Points Earned</span>
                <span className="text-xs font-bold text-[#FF5733]">
                  {program.points}
                </span>
              </div>
              <div className="w-full h-2 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#FF5733]"
                  style={{ width: `${(program.points / 5000) * 100}%` }}
                />
              </div>
            </div>

            <button className="w-full py-2 px-4 bg-zinc-50 dark:bg-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-700 rounded-2xl text-sm font-semibold transition-colors">
              View Details
            </button>
          </div>
        ))}
      </div>

      {/* Rewards Catalog */}
      <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 shadow-sm border border-zinc-100 dark:border-zinc-800" style={{ animation: 'fadeInSlideUp 0.5s ease-out 0.2s backwards' }}>
        <h3 className="text-lg font-bold mb-6">Available Rewards</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { reward: 'Amazon Gift Card ($50)', cost: 5000 },
            { reward: 'Travel Voucher ($100)', cost: 8000 },
            { reward: 'Premium Membership (1 year)', cost: 12000 },
            { reward: 'Restaurant Gift Card ($30)', cost: 3000 },
            { reward: 'Tech Gadget Bundle', cost: 15000 },
            { reward: 'Donation to Charity', cost: 2000 },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-4 border border-zinc-100 dark:border-zinc-800 rounded-2xl hover:border-[#FF5733] dark:hover:border-[#FF5733] transition-colors"
            >
              <p className="text-sm font-semibold mb-2">{item.reward}</p>
              <p className="text-xs text-zinc-400 mb-3">{item.cost} points</p>
              <button className="w-full py-2 px-3 bg-zinc-50 dark:bg-zinc-800 hover:bg-[#FF5733]/10 dark:hover:bg-[#FF5733]/20 rounded-lg text-xs font-semibold transition-colors">
                Redeem
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
