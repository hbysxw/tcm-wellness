import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'TCM Wellness — Your Guide to Traditional Chinese Medicine',
  description: 'Explore the ancient wisdom of Traditional Chinese Medicine. Learn about the Five Organs, tongue diagnosis, body constitutions, and natural remedies.',
  keywords: ['Traditional Chinese Medicine', 'TCM', 'acupuncture', 'Chinese herbs', 'five elements', 'tongue diagnosis', 'wellness'],
  openGraph: {
    title: 'TCM Wellness',
    description: 'Your trusted guide to Traditional Chinese Medicine for modern wellness.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Playfair+Display:wght@500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen flex flex-col bg-bg-warm text-text-body font-sans antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
