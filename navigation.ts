import {createNavigation} from 'next-intl/navigation';

const locales = ['en', 'fr', 'es', 'he'] as const;

export const {Link, usePathname, useRouter, redirect, permanentRedirect} =
  createNavigation({locales, localePrefix: 'always'});
