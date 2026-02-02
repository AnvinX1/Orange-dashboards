import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
import { CardsPage } from '@/components/dashboard/pages/CardsPage';

export const metadata = {
  title: 'Cards - Dashboard',
  description: 'Manage your credit and debit cards.',
};

export default function Page() {
  return (
    <DashboardLayout showHeader={false}>
      <CardsPage />
    </DashboardLayout>
  );
}
