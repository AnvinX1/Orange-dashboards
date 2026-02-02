'use client';

import { useEffect, useState } from 'react';
import { PageHeader } from '../PageHeader';
import { BalanceCard } from '../sections/BalanceCard';
import { SpendingLimitCard } from '../sections/SpendingLimitCard';
import { CardsCarousel } from '../sections/CardsCarousel';
import { SummaryWidgets } from '../sections/SummaryWidgets';
import { IncomeChart } from '../sections/IncomeChart';
import { ActivityTable } from '../sections/ActivityTable';
import {
  MOCK_WALLETS,
  MOCK_ACTIVITIES,
  MOCK_CHART_DATA,
  MOCK_CARDS,
  MOCK_DASHBOARD_STATS,
  MOCK_SPENDING_LIMIT,
} from '@/lib/mock-data';

export function OverviewPage() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkDarkMode = () => {
      const isDarkMode = document.documentElement.classList.contains('dark');
      setIsDark(isDarkMode);
    };

    checkDarkMode();
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, { attributes: true });
    return () => observer.disconnect();
  }, []);

  // Transform summary widgets data
  const summaryWidgets = [
    {
      id: 'earnings',
      label: 'Total Earnings',
      value: MOCK_DASHBOARD_STATS.totalEarnings,
      trend: MOCK_DASHBOARD_STATS.earningsTrend.toString(),
      trendDirection: 'up' as const,
      isFeatured: true,
    },
    {
      id: 'spending',
      label: 'Total Spending',
      value: MOCK_DASHBOARD_STATS.totalSpending,
      trend: MOCK_DASHBOARD_STATS.spendingTrend.toString(),
      trendDirection: (MOCK_DASHBOARD_STATS.spendingTrend >= 0 ? 'up' : 'down') as const,
    },
    {
      id: 'income',
      label: 'Total Income',
      value: MOCK_DASHBOARD_STATS.totalIncome,
      trend: MOCK_DASHBOARD_STATS.incomeTrend.toString(),
      trendDirection: 'up' as const,
    },
    {
      id: 'revenue',
      label: 'Total Revenue',
      value: MOCK_DASHBOARD_STATS.totalRevenue,
      trend: MOCK_DASHBOARD_STATS.revenueTrend.toString(),
      trendDirection: 'up' as const,
    },
  ];

  return (
    <div className="space-y-6 animate-fadeInSlideUp">
      <div style={{ animation: 'fadeInSlideUp 0.5s ease-out' }}>
        <PageHeader
          title="Good morning, Sajibur"
          description="Stay on top of your tasks, monitor progress, and track status."
        />
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* Left Column */}
        <div
          className="col-span-12 lg:col-span-4 space-y-6"
          style={{ animation: 'fadeInSlideUp 0.5s ease-out 0.1s backwards' }}
        >
          <BalanceCard stats={MOCK_DASHBOARD_STATS} wallets={MOCK_WALLETS} />
          <SpendingLimitCard
            spent={MOCK_SPENDING_LIMIT.spent}
            limit={MOCK_SPENDING_LIMIT.limit}
            percentage={MOCK_SPENDING_LIMIT.percentage}
          />
          <CardsCarousel cards={MOCK_CARDS} />
        </div>

        {/* Right Column */}
        <div
          className="col-span-12 lg:col-span-8 space-y-6"
          style={{ animation: 'fadeInSlideUp 0.5s ease-out 0.2s backwards' }}
        >
          <SummaryWidgets widgets={summaryWidgets} />
          <IncomeChart data={MOCK_CHART_DATA} isDark={isDark} />
          <ActivityTable activities={MOCK_ACTIVITIES} />
        </div>
      </div>
    </div>
  );
}
