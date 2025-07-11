'use client';

import { signIn } from 'next-auth/react';
import { useTranslations } from 'next-intl';

export default function Login() {
  const t = useTranslations('login');

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#050510] text-white">
      <div className="card-glass p-8 rounded-xl space-y-4">
        <h1 className="text-2xl font-bold text-center">{t('title')}</h1>
        <button
          className="btn-g w-full"
          onClick={() => signIn('google')}
        >
          {t('googleButton')}
        </button>
      </div>
    </div>
  );
}
