import type {Metadata} from 'next';
import { Inter } from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Aura Motors | Premium Electric Vehicles',
  description: 'Discover the future of driving with Aura Motors. Browse our premium selection of electric vehicles, from luxury sedans to high-performance sports cars.',
  keywords: ['electric vehicles', 'EV', 'luxury cars', 'sports cars', 'Aura Motors', 'sustainable driving'],
  authors: [{ name: 'Aura Motors' }],
  openGraph: {
    title: 'Aura Motors | Premium Electric Vehicles',
    description: 'Discover the future of driving with Aura Motors. Browse our premium selection of electric vehicles.',
    url: 'https://aura-motors.com',
    siteName: 'Aura Motors',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=2070&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Aura Motors Hero Image',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aura Motors | Premium Electric Vehicles',
    description: 'Discover the future of driving with Aura Motors.',
    images: ['https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=2070&auto=format&fit=crop'],
  },
  icons: {
    icon: '/icon.svg',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="font-sans antialiased" suppressHydrationWarning>{children}</body>
    </html>
  );
}
