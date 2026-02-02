import { Wallet, TrendingUp, DollarSign, PieChart } from 'lucide-react';

interface Widget {
  id: string;
  label: string;
  value: string;
  trend: string;
  trendDirection: 'up' | 'down';
  isFeatured?: boolean;
}

interface SummaryWidgetsProps {
  widgets: Widget[];
}

export function SummaryWidgets({ widgets }: SummaryWidgetsProps) {
  const iconMap = {
    earnings: Wallet,
    spending: TrendingUp,
    income: DollarSign,
    revenue: PieChart,
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {widgets.map((widget) => {
        const Icon =
          iconMap[widget.id as keyof typeof iconMap] || PieChart;

        if (widget.isFeatured) {
          return (
            <div
              key={widget.id}
              className="bg-[#FF5733] text-white p-6 rounded-[32px] shadow-lg shadow-orange-100 dark:shadow-orange-900/10 hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-between items-start mb-4">
                <p className="text-[11px] opacity-80 font-medium">
                  {widget.label}
                </p>
                <div className="bg-white/20 p-1 rounded-md">
                  <Icon size={14} />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-1">{widget.value}</h3>
              <p className="text-[10px] opacity-70">
                ↑ {widget.trend} This month
              </p>
            </div>
          );
        }

        return (
          <div
            key={widget.id}
            className="bg-white dark:bg-zinc-900 p-6 rounded-[32px] shadow-sm border border-zinc-100 dark:border-zinc-800 hover:border-zinc-200 dark:hover:border-zinc-700 transition-colors"
          >
            <div className="flex justify-between items-start mb-4">
              <p className="text-[11px] text-zinc-400 dark:text-zinc-500 font-medium">
                {widget.label}
              </p>
              <div className="bg-zinc-50 dark:bg-zinc-800 p-1 rounded-md">
                <Icon size={14} />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-1">{widget.value}</h3>
            <p
              className={`text-[10px] ${
                widget.trendDirection === 'up'
                  ? 'text-green-400'
                  : 'text-red-400'
              }`}
            >
              {widget.trendDirection === 'up' ? '↑' : '↓'} {widget.trend} This
              month
            </p>
          </div>
        );
      })}
    </div>
  );
}
