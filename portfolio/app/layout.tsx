import { NextProvider } from '@/providers/NextProvider';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Wilmer Lopez',
  description: 'This is Wilmers portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light scroll-smooth">
      <body className={inter.className}>
        <NextProvider>{children}</NextProvider>
      </body>
    </html>
  );
}
