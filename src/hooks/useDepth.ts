import { useContext } from 'react';
import { FractalParamsContext } from '../context/FractalParamsContext';

type UseDepthType = [number, (value: number) => void]

export const useDepth = (): UseDepthType => {
  const context = useContext(FractalParamsContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return [context.depth, context.setDepth];
};
