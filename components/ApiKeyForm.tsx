'use client';
import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';

export default function ApiKeyForm() {
  const t = useTranslations('dashboard');
  const [apiKey, setApiKey] = useState('');
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('openaiKey');
    if (stored) setApiKey(stored);
  }, []);

  const handleSave = () => {
    localStorage.setItem('openaiKey', apiKey);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="mt-6 max-w-md">
      <label className="block text-sm font-medium mb-1">
        {t('apiKeyLabel')}
      </label>
      <input
        type="password"
        value={apiKey}
        onChange={(e) => setApiKey(e.target.value)}
        className="w-full px-3 py-2 bg-white/5 border border-white/20 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
      />
      <button onClick={handleSave} className="btn-g mt-2">
        {t('saveKey')}
      </button>
      {saved && (
        <p className="text-green-500 text-sm mt-1">{t('keySaved')}</p>
      )}
    </div>
  );
}
