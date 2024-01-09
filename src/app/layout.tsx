import type { Metadata, NextPage } from 'next';
import './globals.css';
import { ReactNode } from 'react';

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
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
