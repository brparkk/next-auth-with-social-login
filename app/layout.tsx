import type { Metadata } from 'next';
import { SessionProvider } from 'next-auth/react';
import { Noto_Sans } from 'next/font/google';
import './globals.css';

const notoSans = Noto_Sans();

export const metadata: Metadata = {
  title: 'Next Auth with Social Login',
  description: 'Examples of social login with Next.js & NextAuth.js',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={notoSans.className}>
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}
