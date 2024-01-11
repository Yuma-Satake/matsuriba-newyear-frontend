'use client';

import { FC } from 'react';
import { useSteps } from '@/hooks/useSteps';
import HomeView from './HomeView';

/**
 * Homeページ/container
 */
const HomeContainer: FC = () => {
  const [step, handler] = useSteps(3);

  return (
    <div>
      <HomeView step={step} handleSteps={handler} />
    </div>
  );
};

export default HomeContainer;
