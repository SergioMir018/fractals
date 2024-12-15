import { useRef, useEffect } from 'react';
import { drawTree } from '../utils/fractalsEcuations';
import { useDepth } from '../hooks/useDepth';
import { useAngleVariation } from '../hooks/useAngleVariation';
import { useAngle } from '../hooks/useAngle';

const FractalTree: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const setAngleVariation = useAngleVariation()
  const [depth] = useDepth();
  const [angle] = useAngle();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const parentElement = canvas.parentElement as HTMLElement | null;
    if (!parentElement) return;

    canvas.width = parentElement.clientWidth * 0.8;
    canvas.height = parentElement.clientHeight;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    drawTree(
      canvas.width / 2,
      canvas.height / 2 - 200,
      190,
      -90,
      depth,
      ctx,
      setAngleVariation
    );
  }, [depth, angle, setAngleVariation]);

  return (
    <canvas
      ref={canvasRef}
      className='border col-span-4 border-gray-700 h-screen shadow-lg'
    />
  );
};

export default FractalTree;
