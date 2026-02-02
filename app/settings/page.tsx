import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
import { SettingsPage } from '@/components/dashboard/pages/SettingsPage';

export const metadata = {
  title: 'Settings - Dashboard',
  description: 'Configure application and system settings.',
};

export default function Page() {
  return (
    <DashboardLayout showHeader={false}>
      <SettingsPage />
    </DashboardLayout>
  );
}
