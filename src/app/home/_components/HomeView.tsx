import { FC } from 'react';
import TitleView from '@/app/home/_components/TitleView';
import { HandleSteps } from '@/hooks/useSteps';
import DescriptionView from './DescriptionView';

type Props = {
  step: number;
  handleSteps: HandleSteps;
};

/**
 * Homeページ/view
 */
const HomeView: FC<Props> = ({ step, handleSteps }) => {
  switch (step) {
    case 0:
      return <TitleView onClickNext={handleSteps.next} />;
    case 1:
      return <DescriptionView onClickNext={handleSteps.next} />;
    default:
      return null;
  }
};

export default HomeView;
