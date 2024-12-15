import { createContext } from "react";
import { FractalOptions } from "../types/fractal";
import { fractalFunctions } from "../utils/fractalsEcuations";

export type FractalFuntion = keyof typeof fractalFunctions;

export interface FractalContextType {
  selectedFractal: string;
  setFractal: (name: FractalFuntion) => void;
  drawFractal: (ctx: CanvasRenderingContext2D, options: FractalOptions) => void;
}

export const FractalContext = createContext<FractalContextType | null>(null);
