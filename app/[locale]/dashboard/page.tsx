import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { redirect } from 'next/navigation';
import { useTranslations } from 'next-intl';
import ApiKeyForm from '@/components/ApiKeyForm';

export default async function Dashboard() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect('/en/login');
  }
  const t = useTranslations('dashboard');

  return (
    <div className="min-h-screen bg-[#050510] text-white p-8">
      <h1 className="text-3xl font-bold mb-4">{t('welcome')}</h1>
      <p>{t('connectSocials')}</p>
      {/* Placeholder for social connections */}
      <ApiKeyForm />
    </div>
  );
}
