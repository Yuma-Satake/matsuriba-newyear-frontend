import Image from 'next/image';
import { FC } from 'react';

const Header: FC = () => {
  return (
    <div className="p-2 flex justify-center bg-secondary">
      <Image src="/logo.png" width={150} height={150} alt="MatsuribaTech" />
    </div>
  );
};

export default Header;
