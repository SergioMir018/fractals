import { createContext } from "react";

interface FractalParamsContextProps {
  depth: number;
  setDepth: React.Dispatch<React.SetStateAction<number>>;
  angle: number;
  setAngle: React.Dispatch<React.SetStateAction<number>>;
  setAngleVariation: () => number;
}

export const FractalParamsContext = createContext<
  FractalParamsContextProps | undefined
>(undefined);
