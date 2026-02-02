import type { Wallet } from '@/lib/types';
import { StatusBadge } from '../StatusBadge';

interface WalletsSectionProps {
  wallets: Wallet[];
}

export function WalletsSection({ wallets }: WalletsSectionProps) {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-sm font-bold">
          Wallets{' '}
          <span className="text-zinc-400 font-normal">
            | Total {wallets.length} wallets
          </span>
        </h3>
      </div>
      <div className="space-y-4">
        {wallets.map((wallet) => (
          <div
            key={wallet.id}
            className="flex items-center justify-between p-3 border border-zinc-100 dark:border-zinc-800 rounded-2xl bg-zinc-50/50 dark:bg-zinc-900/50 hover:bg-zinc-100/50 dark:hover:bg-zinc-800/50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="text-xl">{wallet.icon}</div>
              <div>
                <p className="text-xs font-bold">{wallet.currency}</p>
                <p className="text-[10px] text-zinc-400">
                  Limit {wallet.limit}
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-xs font-bold">{wallet.balance}</p>
              <StatusBadge status={wallet.status} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
