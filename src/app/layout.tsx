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
  description: 'MatsuribaNewYear🏮',
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
