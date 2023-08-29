import { NextProvider } from '@/providers/NextProvider';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import MenuBar from '@/components/menu-bar';

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
    <html lang="en">
      <body className={inter.className}>
        <NextProvider>
          {children}
          <MenuBar />
        </NextProvider>
      </body>
    </html>
  );
}
