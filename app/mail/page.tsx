import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
import { MailPage } from '@/components/dashboard/pages/MailPage';

export const metadata = {
  title: 'Mail - Dashboard',
  description: 'Manage your messages and communications.',
};

export default function Page() {
  return (
    <DashboardLayout showHeader={false}>
      <MailPage />
    </DashboardLayout>
  );
}
