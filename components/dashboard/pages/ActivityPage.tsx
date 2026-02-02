'use client';

import { PageHeader } from '../PageHeader';
import { ActivityTable } from '../sections/ActivityTable';
import { MOCK_ACTIVITIES } from '@/lib/mock-data';

export function ActivityPage() {
  return (
    <div className="space-y-6 animate-fadeInSlideUp">
      <div style={{ animation: 'fadeInSlideUp 0.5s ease-out' }}>
        <PageHeader
          title="Activity"
          description="View and manage all your transactions and activities."
        />
      </div>

      <div className="grid grid-cols-12 gap-6" style={{ animation: 'fadeInSlideUp 0.5s ease-out 0.1s backwards' }}>
        <div className="col-span-12">
          <ActivityTable activities={MOCK_ACTIVITIES} />
        </div>
      </div>

      {/* Activity Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6" style={{ animation: 'fadeInSlideUp 0.5s ease-out 0.2s backwards' }}>
        <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 shadow-sm border border-zinc-100 dark:border-zinc-800">
          <p className="text-zinc-400 dark:text-zinc-500 text-xs font-semibold mb-2">
            Total Transactions
          </p>
          <h3 className="text-2xl font-bold">{MOCK_ACTIVITIES.length}</h3>
          <p className="text-xs text-zinc-400 mt-2">+2 this week</p>
        </div>
        <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 shadow-sm border border-zinc-100 dark:border-zinc-800">
          <p className="text-zinc-400 dark:text-zinc-500 text-xs font-semibold mb-2">
            Completed
          </p>
          <h3 className="text-2xl font-bold">
            {MOCK_ACTIVITIES.filter((a) => a.status === 'Completed').length}
          </h3>
          <p className="text-xs text-green-400 mt-2">✓ All good</p>
        </div>
        <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 shadow-sm border border-zinc-100 dark:border-zinc-800">
          <p className="text-zinc-400 dark:text-zinc-500 text-xs font-semibold mb-2">
            Pending
          </p>
          <h3 className="text-2xl font-bold">
            {MOCK_ACTIVITIES.filter((a) => a.status === 'Pending').length}
          </h3>
          <p className="text-xs text-amber-400 mt-2">⚠ Needs attention</p>
        </div>
        <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 shadow-sm border border-zinc-100 dark:border-zinc-800">
          <p className="text-zinc-400 dark:text-zinc-500 text-xs font-semibold mb-2">
            In Progress
          </p>
          <h3 className="text-2xl font-bold">
            {MOCK_ACTIVITIES.filter((a) => a.status === 'In Progress').length}
          </h3>
          <p className="text-xs text-blue-400 mt-2">⏳ Processing</p>
        </div>
      </div>
    </div>
  );
}
