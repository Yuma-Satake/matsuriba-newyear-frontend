import { H5 } from '@/components/typography/Typography';
import { FC } from 'react';

const IsNotMobile: FC = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <H5>
        当サイトはPC画面に非対応です
        <br />
        スマートフォンからご利用ください
      </H5>
    </div>
  );
};

export default IsNotMobile;
