import { useEffect, useRef } from 'react';
import { useFractal } from '../hooks/useFractal';
import { useAngle } from '../hooks/useAngle';
import { useDepth } from '../hooks/useDepth';
import { useAngleVariation } from '../hooks/useAngleVariation';

const FractalCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { drawFractal, selectedFractal } = useFractal();
  const [depth] = useDepth();
  const [angle] = useAngle();
  const angleVariation = useAngleVariation();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
    canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;

    // Limpiar canvas antes de dibujar
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Dibujar fractal
    drawFractal(ctx, {
      x: canvas.width / 2,
      y: canvas.height / 2,
      width: canvas.width,
      height: canvas.height,
      length: 150,
      angle: angle,
      level: depth,
      angleVariation,
    });
  }, [drawFractal, selectedFractal, depth, angle, angleVariation]);

  return (
    <canvas
      ref={canvasRef}
      className='border col-span-4 border-gray-700 w-full h-full'
    />
  );
};

export default FractalCanvas;
