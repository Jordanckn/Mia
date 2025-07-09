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
      <DropdownMenuTrigger className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
        <Languages className="w-4 h-4" />
        <span className="text-sm">
          {languages.find((l) => l.code === currentLocale)?.flag}
        </span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((lang) => (
          <DropdownMenuItem asChild key={lang.code} className={currentLocale === lang.code ? 'bg-white/5' : ''}>
            <Link href={`/${lang.code}${basePath}`}
              className="flex items-center gap-2 w-full">
              <span className="text-lg">{lang.flag}</span>
              <span className="text-sm">{lang.name}</span>
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
