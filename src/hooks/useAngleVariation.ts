import { useContext } from 'react';
import { FractalParamsContext } from '../context/FractalParamsContext';

export type UseAngleVariationType = () => number;

export const useAngleVariation = (): UseAngleVariationType => {
  const context = useContext(FractalParamsContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context.setAngleVariation;
};
