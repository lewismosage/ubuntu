import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ubuntu Afya - Reimagining Healthcare in Kenya',
  description: 'Ubuntu Afya is transforming healthcare delivery in underserved communities through innovative technology and community-centered approaches. Join us in making healthcare accessible to all.',
  keywords: 'healthcare, Kenya, NGO, community health, STONE-HMIS, health technology',
  authors: [{ name: 'Ubuntu Afya' }],
  openGraph: {
    title: 'Ubuntu Afya - Reimagining Healthcare in Kenya',
    description: 'Transforming healthcare delivery in underserved communities through innovative technology and community-centered approaches.',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}