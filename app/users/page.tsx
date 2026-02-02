import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
import { UsersPage } from '@/components/dashboard/pages/UsersPage';

export const metadata = {
  title: 'Users - Dashboard',
  description: 'Manage user accounts and permissions.',
};

export default function Page() {
  return (
    <DashboardLayout showHeader={false}>
      <UsersPage />
    </DashboardLayout>
  );
}
