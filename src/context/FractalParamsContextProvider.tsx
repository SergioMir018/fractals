import React, { useState } from 'react';
import { FractalParamsContext } from './FractalParamsContext';

export const FractalParamsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [depth, setDepth] = useState(1);
  const [angle, setAngle] = useState(-90);

  const setAngleVariation = () => angle;

  const value = {
    depth,
    setDepth,
    angle,
    setAngle,
    setAngleVariation,
  };

  return (
    <FractalParamsContext.Provider value={value}>
      {children}
    </FractalParamsContext.Provider>
  );
};
