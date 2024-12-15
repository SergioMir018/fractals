import { useContext } from 'react';
import {
  FractalContext,
  FractalContextType,
} from '../context/FractalFunctionsContext';

export const useFractal = (): FractalContextType => {
  const context = useContext(FractalContext);
  if (!context) {
    throw new Error('useFractal must be used within a FractalProvider');
  }
  return context;
};
