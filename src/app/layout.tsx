import type { Metadata, NextPage } from 'next';
import './globals.css';
import { ReactNode } from 'react';
import IsNotMobile from './_components/IsNotMobile';

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
      <body>
        <div className="sm:hidden">{children}</div>
        <div className="hidden sm:block">
          <IsNotMobile />
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
