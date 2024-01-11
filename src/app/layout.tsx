import type { Metadata, NextPage, Viewport } from 'next';
import './globals.css';
import { ReactNode } from 'react';
import IsNotMobile from './_components/IsNotMobile';

export const viewport: Viewport = {
  themeColor: '#D6453A',
  userScalable: false,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: 'MatsuribaNewYear🏮2024',
  description: 'Matsuribaでデジタル絵馬を奉納して、2024年を良い年にしよう！',
  applicationName: 'MatsuribaNewYear🏮2024',
  authors: {
    name: 'Yuma-Satake',
    url: 'https://twitter.com/yuma_satake22',
  },
  icons: '/icon.png',
};

type Props = {
  children: ReactNode;
};

/**
 * Rootのレイアウト
 */
const RootLayout: NextPage<Props> = ({ children }) => {
  return (
    <html lang="ja">
      <body
        style={{
          height: '100vh',
          width: '100vw',
          overflow: 'hidden',
        }}
      >
        <div className="sm:hidden">{children}</div>
        <div className="hidden sm:block">
          <IsNotMobile />
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
