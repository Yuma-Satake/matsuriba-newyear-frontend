import { H3 } from '@/components/typography/Typography';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { FC } from 'react';

type Props = {
  onClickNext: () => void;
};

/**
 * タイトルの表示/view
 */
const TitleView: FC<Props> = ({ onClickNext }) => {
  return (
    <div className="w-screen h-screen space-y-20 bg-primary">
      <div className="pt-12 flex justify-center">
        <div className="w-3/5 h-auto p-5 pb-7 flex items-center aspect-square bg-secondary rounded-full">
          <Image src="/logo.png" width={400} height={400} alt="MatsuribaTech" />
        </div>
      </div>
      <div className="flex justify-center">
        <Button onClick={onClickNext} size="lg" variant="secondary">
          <H3>絵馬を書く</H3>
        </Button>
      </div>
    </div>
  );
};

export default TitleView;
