import './globals.css';
import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import { restaurant } from '@/lib/restaurant-data';

const serif = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-serif',
  display: 'swap',
});

const sans = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://pastaamanovr.com.br'),
  title: {
    default: 'Pasta a Mano — cozinha autoral | Volta Redonda, RJ',
    template: '%s | Pasta a Mano',
  },
  description:
    'Pasta a Mano — cozinha autoral em Volta Redonda. Massas artesanais feitas à mão, ambiente aconchegante, carta de vinhos e música ao vivo. Reserve sua mesa.',
  keywords: [
    'Pasta a Mano',
    'restaurante Volta Redonda',
    'massa artesanal',
    'cozinha autoral',
    'pasta fresca',
    'restaurante RJ',
    'reserva restaurante',
  ],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    title: 'Pasta a Mano — cozinha autoral | Volta Redonda, RJ',
    description:
      'Massas artesanais feitas à mão, ambiente aconchegante, carta de vinhos e música ao vivo em Volta Redonda.',
    siteName: 'Pasta a Mano',
    images: [
      {
        url: '/images/Screenshot_54%20copy.png',
        width: 940,
        height: 650,
        alt: 'Prato de pasta artesanal — Pasta a Mano',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pasta a Mano — cozinha autoral',
    description:
      'Massas artesanais feitas à mão em Volta Redonda, RJ.',
    images: [
      '/images/Screenshot_54%20copy.png',
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: 'Pasta a Mano — cozinha autoral',
    address: {
      '@type': 'PostalAddress',
      streetAddress: restaurant.address.street,
      addressLocality: restaurant.address.city,
      addressRegion: restaurant.address.state,
      addressCountry: 'BR',
    },
    telephone: restaurant.phone,
    servesCuisine: 'Italiana, Artesanal',
    priceRange: '$$',
    url: 'https://pastaamanovr.com.br',
    sameAs: [restaurant.instagram],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
        opens: '11:00',
        closes: '23:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Sunday',
        opens: '11:00',
        closes: '16:00',
      },
    ],
  };

  return (
    <html lang="pt-BR" className={`${serif.variable} ${sans.variable}`}>
      <body className="font-sans bg-cream text-charcoal antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
