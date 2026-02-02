'use client';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts';
import type { ChartDataPoint } from '@/lib/types';

interface IncomeChartProps {
  data: ChartDataPoint[];
  isDark: boolean;
}

export function IncomeChart({ data, isDark }: IncomeChartProps) {
  return (
    <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 shadow-sm border border-zinc-100 dark:border-zinc-800 transition-colors">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-lg font-bold">Total Income</h3>
          <p className="text-xs text-zinc-400 dark:text-zinc-500">
            View your income in a certain period of time
          </p>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-sm bg-[#FF5733]" />
            <span className="text-[11px] font-bold text-zinc-600 dark:text-zinc-400">
              Profit
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-sm bg-zinc-900 dark:bg-zinc-100" />
            <span className="text-[11px] font-bold text-zinc-600 dark:text-zinc-400">
              Loss
            </span>
          </div>
        </div>
      </div>

      <div className="h-[250px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barGap={4}>
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke={isDark ? '#333' : '#f0f0f0'}
            />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{
                fill: isDark ? '#a1a1a1' : '#666',
                fontSize: 12,
              }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{
                fill: isDark ? '#a1a1a1' : '#666',
                fontSize: 12,
              }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: isDark ? '#18181b' : '#fff',
                border: `1px solid ${isDark ? '#3f3f46' : '#e4e4e7'}`,
                borderRadius: '8px',
              }}
              cursor={{ fill: 'rgba(255, 87, 51, 0.1)' }}
            />
            <Bar dataKey="profit" fill="#FF5733" radius={[8, 8, 0, 0]} />
            <Bar
              dataKey="loss"
              fill={isDark ? '#f4f4f5' : '#18181b'}
              radius={[8, 8, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
