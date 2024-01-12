import { FC, ReactNode } from 'react';
import IsNotMobile from '../_components/IsNotMobile';

type Props = {
  children: ReactNode;
};

/**
 * Rootのレイアウト
 */
const RootLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <div className="sm:hidden">
        <div className="fixed top-0 h-2/5 w-screen bg-secondary" style={{ zIndex: -10 }} />
        <div className="fixed bottom-0 h-3/5 w-screen bg-primary" style={{ zIndex: -10 }} />
        {children}
      </div>
      <div className="hidden sm:block">
        <IsNotMobile />
      </div>
    </>
  );
};

export default RootLayout;
