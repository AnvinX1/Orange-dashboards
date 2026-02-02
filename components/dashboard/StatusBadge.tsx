import { STATUS_BADGE_STYLES } from '@/lib/constants';

interface StatusBadgeProps {
  status: keyof typeof STATUS_BADGE_STYLES;
  variant?: 'default' | 'dot';
}

export function StatusBadge({ status, variant = 'default' }: StatusBadgeProps) {
  const styles = STATUS_BADGE_STYLES[status] || '';

  if (variant === 'dot') {
    return (
      <span
        className={`inline-flex items-center gap-1 text-sm font-medium ${styles}`}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-current" />
        {status}
      </span>
    );
  }

  return (
    <span
      className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${styles}`}
    >
      <span
        className={`w-1.5 h-1.5 rounded-full ${
          status === 'Inactive' ? 'bg-zinc-300 dark:bg-zinc-600' : 'bg-current'
        }`}
      />
      {status}
    </span>
  );
}
