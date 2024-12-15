import { ReactNode, useState } from 'react';
import { fractalFunctions } from '../utils/fractalsEcuations';
import { FractalContext, FractalFuntion } from './FractalFunctionsContext';
import { FractalOptions } from '../types/fractal';

export const FractalProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [selectedFractal, setSelectedFractal] =
    useState<FractalFuntion>('treeFractal');

  const drawFractal = (
    ctx: CanvasRenderingContext2D,
    options: FractalOptions
  ) => {
    const fractalFunction = fractalFunctions[selectedFractal];
    if (fractalFunction) {
      fractalFunction(ctx, options);
    }
  };

  return (
    <FractalContext.Provider
      value={{ selectedFractal, setFractal: setSelectedFractal, drawFractal }}
    >
      {children}
    </FractalContext.Provider>
  );
};
