import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'TCM Wellness — Your Guide to Traditional Chinese Medicine',
  description: 'Explore the ancient wisdom of Traditional Chinese Medicine. Learn about the Five Organs, tongue diagnosis, body constitutions, and natural remedies.',
  keywords: ['Traditional Chinese Medicine', 'TCM', 'acupuncture', 'Chinese herbs', 'five elements', 'tongue diagnosis', 'wellness'],
  verification: { google: 'google38b650d194b3a99b' },
  openGraph: {
    title: 'TCM Wellness',
    description: 'Your trusted guide to Traditional Chinese Medicine for modern wellness.',
    type: 'website',
    locale: 'en_US',
    siteName: 'TCM Wellness',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Playfair+Display:wght@500;600;700&display=swap" rel="stylesheet" />
        {/* Google tag (gtag.js) - replace GA_MEASUREMENT_ID when you have one */}
        {/*
        <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
        <script dangerouslySetInnerHTML={{
          __html: 'window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag("js", new Date()); gtag("config", "GA_MEASUREMENT_ID");'
        }} />
        */}
      </head>
      <body className="min-h-screen flex flex-col bg-bg-warm text-text-body font-sans antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}