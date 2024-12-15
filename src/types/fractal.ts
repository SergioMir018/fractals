import { UseAngleVariationType } from "../hooks/useAngleVariation";

export interface FractalOptions {
  x: number;
  y: number;
  length: number;
  angle: number;
  level: number;
  width: number;
  height: number;
  angleVariation: UseAngleVariationType
}
