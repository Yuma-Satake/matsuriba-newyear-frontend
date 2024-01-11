'use client';

import { useMemo, useState } from 'react';

export type HandleSteps = {
  next: () => void;
  prev: () => void;
  reset: () => void;
};

type UseSteps = (stepLength: number) => [step: number, handler: HandleSteps];

/**
 * Formのステップを管理するHooks
 */
export const useSteps: UseSteps = (stepLength) => {
  const [step, setStep] = useState(0);

  const handler = useMemo(
    () => ({
      next: () => setStep((prev) => Math.min(prev + 1, stepLength - 1)),
      prev: () => setStep((prev) => Math.max(prev - 1, 0)),
      reset: () => setStep(0),
    }),
    []
  );

  return [step, handler];
};
