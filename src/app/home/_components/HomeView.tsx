import Image from 'next/image';
import { FC } from 'react';

/**
 * Homeページ/view
 */
const HomeView: FC = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-primary">
      <div className="w-3/5 h-auto p-5 pb-7 flex items-center aspect-square bg-secondary rounded-full">
        <Image src="/logo.png" width={400} height={400} alt="MatsuribaTech" />
      </div>
    </div>
  );
};

export default HomeView;
