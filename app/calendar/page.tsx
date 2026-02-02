import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
import { CalendarPage } from '@/components/dashboard/pages/CalendarPage';

export const metadata = {
  title: 'Calendar - Dashboard',
  description: 'Manage your schedule and events.',
};

export default function Page() {
  return (
    <DashboardLayout showHeader={false}>
      <CalendarPage />
    </DashboardLayout>
  );
}
