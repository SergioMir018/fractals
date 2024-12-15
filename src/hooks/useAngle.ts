import { useContext } from 'react';
import { FractalParamsContext } from '../context/FractalParamsContext';

type UseAngleType = [number, (value: number) => void];

export const useAngle = (): UseAngleType => {
  const context = useContext(FractalParamsContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return [context.angle, context.setAngle];
};
