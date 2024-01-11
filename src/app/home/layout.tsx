import { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

/**
 * Rootのレイアウト
 */
const RootLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <div className="fixed top-0 h-2/5 w-screen bg-secondary" style={{ zIndex: -10 }} />
      <div className="fixed bottom-0 h-3/5 w-screen bg-primary" style={{ zIndex: -10 }} />
      {children}
    </>
  );
};

export default RootLayout;
