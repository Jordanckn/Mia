import '../globals.css';
import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';

const locales = ['en', 'fr', 'es', 'he'];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: 'Mia - AI-Powered Content Creation Platform',
  description: 'Generate, schedule, and publish engaging content automatically across Instagram, TikTok, YouTube, LinkedIn, and X with our advanced AI suite.',
  keywords: 'AI content creation, social media automation, content marketing, Instagram, TikTok, YouTube, LinkedIn, Twitter',
  authors: [{ name: 'Mia Team' }],
  openGraph: {
    title: 'Mia - AI-Powered Content Creation Platform',
    description: 'Generate, schedule, and publish engaging content automatically across all social platforms.',
    type: 'website',
    url: 'https://mia.ai',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Mia AI Content Creation Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mia - AI-Powered Content Creation Platform',
    description: 'Generate, schedule, and publish engaging content automatically across all social platforms.',
    images: ['/og-image.png'],
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#050510',
};

export default async function RootLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages({ locale });

  return (
    <html lang={locale} dir={locale === 'he' ? 'rtl' : 'ltr'}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );}