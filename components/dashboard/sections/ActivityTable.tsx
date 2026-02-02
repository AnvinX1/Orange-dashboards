import type { Activity } from '@/lib/types';
import { StatusBadge } from '../StatusBadge';

interface ActivityTableProps {
  activities: Activity[];
}

export function ActivityTable({ activities }: ActivityTableProps) {
  return (
    <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 shadow-sm border border-zinc-100 dark:border-zinc-800 transition-colors">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-lg font-bold">Recent Transactions</h3>
          <p className="text-xs text-zinc-400 dark:text-zinc-500">
            Your latest activities and transactions
          </p>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-zinc-100 dark:border-zinc-800">
              <th className="px-4 py-3 text-left font-semibold text-zinc-600 dark:text-zinc-400">
                ID
              </th>
              <th className="px-4 py-3 text-left font-semibold text-zinc-600 dark:text-zinc-400">
                Activity
              </th>
              <th className="px-4 py-3 text-left font-semibold text-zinc-600 dark:text-zinc-400">
                Amount
              </th>
              <th className="px-4 py-3 text-left font-semibold text-zinc-600 dark:text-zinc-400">
                Status
              </th>
              <th className="px-4 py-3 text-left font-semibold text-zinc-600 dark:text-zinc-400">
                Date
              </th>
            </tr>
          </thead>
          <tbody>
            {activities.map((activity) => (
              <tr
                key={activity.id}
                className="border-b border-zinc-100 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors"
              >
                <td className="px-4 py-4 font-mono text-xs text-zinc-600 dark:text-zinc-400">
                  {activity.id}
                </td>
                <td className="px-4 py-4">
                  <div className="flex items-center gap-3">
                    {activity.icon}
                    <span className="font-medium text-zinc-900 dark:text-white">
                      {activity.activity}
                    </span>
                  </div>
                </td>
                <td className="px-4 py-4 font-semibold text-zinc-900 dark:text-white">
                  {activity.price}
                </td>
                <td className="px-4 py-4">
                  <StatusBadge status={activity.status} />
                </td>
                <td className="px-4 py-4 text-zinc-600 dark:text-zinc-400 text-xs">
                  {activity.date}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
