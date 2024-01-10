import type { Metadata, NextPage } from 'next';
import './globals.css';
import { ReactNode } from 'react';
import IsNotMobile from './_components/IsNotMobile';

export const metadata: Metadata = {
  title: 'MatsuribaNewYear🏮2024',
  description: 'MatsuribaNewYear🏮',
  themeColor: '#D6453A',
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
