'use client';

import {useParams, usePathname} from 'next/navigation';
import { Link } from '@/navigation';
import { Languages } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem
} from '@/components/ui/dropdown-menu';

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'he', name: 'עברית', flag: '🇮🇱' }
];

export default function LanguageSwitcher() {
  const params = useParams();
  const currentLocale = params.locale as string;
  const pathname = usePathname();
  const basePath = pathname.replace(/^\/[a-z]{2}/, '');

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-2 px-3 py-2 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 text-white shadow-lg hover:opacity-90 transition">
        <Languages className="w-4 h-4" />
        <span className="text-sm">
          {languages.find((l) => l.code === currentLocale)?.flag}
        </span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-[#0d0d2b] border border-white/10 rounded-lg shadow-xl">
        {languages.map((lang) => (
          <DropdownMenuItem
            asChild
            key={lang.code}
            className={
              currentLocale === lang.code
                ? 'bg-white/10 text-white'
                : 'text-gray-300 hover:bg-white/5'
            }
          >
            <Link href={`/${lang.code}${basePath}`} className="flex items-center gap-2 w-full px-2 py-1">
              <span className="text-lg">{lang.flag}</span>
              <span className="text-sm">{lang.name}</span>
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
