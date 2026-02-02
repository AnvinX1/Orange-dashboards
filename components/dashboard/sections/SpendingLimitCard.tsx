interface SpendingLimitCardProps {
  spent: string;
  limit: string;
  percentage: number;
}

export function SpendingLimitCard({
  spent,
  limit,
  percentage,
}: SpendingLimitCardProps) {
  return (
    <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 shadow-sm border border-zinc-100 dark:border-zinc-800 transition-colors">
      <h3 className="text-sm font-bold mb-6">Monthly Spending Limit</h3>

      {/* Progress Bar */}
      <div className="h-4 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden mb-4 relative">
        <div
          className="h-full bg-[#FF5733] rounded-full transition-all duration-300"
          style={{ width: `${percentage}%` }}
        />
      </div>

      {/* Stats */}
      <div className="flex justify-between text-[11px] font-bold">
        <span className="text-zinc-700 dark:text-zinc-300">
          {spent}{' '}
          <span className="text-zinc-400 font-normal">spent out of</span>
        </span>
        <span className="text-zinc-900 dark:text-white">{limit}</span>
      </div>
    </div>
  );
}
