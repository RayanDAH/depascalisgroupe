import './globals.css';
import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { ThemeProvider } from '@/components/ThemeProvider';
import Script from 'next/script';
import SocialMediaPopup from '@/components/SocialMediaPopup';
import CookieConsentBanner from '@/components/CookieConsentBanner';
import CookieSettings from '@/components/CookieSettings';

export const metadata: Metadata = {
  title: 'De Pascalis Groupe | Rénovation Bâtiment & Immobilier',
  description:
    'Entreprise de rénovation bâtiment et immobilier à Belfort. Devis rapide sous 24-48h, équipe locale & réactive, finitions haut de gamme.',
  keywords:
    'rénovation, bâtiment, immobilier, Belfort, De Pascalis, construction, rénovation intérieure',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/images/Logo-groupe.ico" />
        <link rel="shortcut icon" href="/images/Logo-groupe.ico" />
        <link rel="apple-touch-icon" href="/images/Logo-groupe.png" />
        <Script async src="https://tally.so/widgets/embed.js" />
      </head>
      <body className="bg-black font-sans text-white">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Header />
          <main>{children}</main>
          <Footer />
          <SocialMediaPopup />
          <CookieConsentBanner />
          <CookieSettings />
        </ThemeProvider>
      </body>
    </html>
  );
}
