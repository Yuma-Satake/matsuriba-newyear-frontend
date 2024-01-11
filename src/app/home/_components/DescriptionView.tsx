import { H3 } from '@/components/typography/Typography';
import { Button } from '@/components/ui/button';
import { FC } from 'react';

type Props = {
  onClickNext: () => void;
};

/**
 * タイトルの表示/view
 */
const DescriptionView: FC<Props> = ({ onClickNext }) => {
  return (
    <div className="w-screen h-screen space-y-20 bg-primary">
      <div className="flex justify-center">
        <Button onClick={onClickNext} size="lg" variant="secondary">
          <H3>確認する</H3>
        </Button>
      </div>
    </div>
  );
};

export default DescriptionView;
