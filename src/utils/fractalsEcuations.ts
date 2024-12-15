import { UseAngleVariationType } from '../hooks/useAngleVariation';
import { FractalOptions } from '../types/fractal';

export const fractalFunctions = {
  treeFractal: (ctx: CanvasRenderingContext2D, options: FractalOptions) => {
    const { x, y, length, angle, level, angleVariation } = options;

    const drawTree = (
      x: number,
      y: number,
      length: number,
      angle: number,
      level: number,
      angleVariation: UseAngleVariationType
    ) => {
      if (level === 0) return;

      const xEnd = x + length * Math.cos((angle * Math.PI) / 180);
      const yEnd = y - length * Math.sin((angle * Math.PI) / 180);

      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(xEnd, yEnd);
      ctx.strokeStyle = `hsl(${level * 36}, 70%, 50%)`;
      ctx.lineWidth = level;
      ctx.stroke();

      drawTree(
        xEnd,
        yEnd,
        length * 0.7,
        angle - angleVariation(),
        level - 1,
        angleVariation
      );
      drawTree(
        xEnd,
        yEnd,
        length * 0.7,
        angle + angleVariation(),
        level - 1,
        angleVariation
      );
    };

    drawTree(x, y, length, angle, level, angleVariation);
  },

  mandelbrotFractal: (
    ctx: CanvasRenderingContext2D,
    options: FractalOptions
  ) => {
    const { width, height, level } = options;

    const maxIterations = Math.min(level, 100);
    const imageData = ctx.createImageData(width, height);
    const data = imageData.data;

    for (let x = 0; x < width; x++) {
      for (let y = 0; y < height; y++) {
        let zx = 0,
          zy = 0;
        const cx = (x - width / 2) / 200;
        const cy = (y - height / 2) / 200;

        let iteration = 0;
        while (zx * zx + zy * zy < 4 && iteration < maxIterations) {
          const temp = zx * zx - zy * zy + cx;
          zy = 2 * zx * zy + cy;
          zx = temp;
          iteration++;
        }

        const color =
          iteration === maxIterations
            ? [0, 0, 0, 255] // Negro
            : [iteration * 5, iteration * 12, iteration * 24, 255];

        const index = (y * width + x) * 4;
        data[index] = color[0];
        data[index + 1] = color[1];
        data[index + 2] = color[2];
        data[index + 3] = color[3];
      }
    }

    ctx.putImageData(imageData, 0, 0); // Dibujar todo de una vez
  },
  juliaFractal: (ctx: CanvasRenderingContext2D, options: FractalOptions) => {
    const { width, height, level } = options;

    const maxIterations = 100; // Número máximo de iteraciones
    const zoom = 200; // Factor de zoom
    const cx = -0.7; // Parte real del valor constante
    const cy = 0.27015; // Parte imaginaria del valor constante

    const imageData = ctx.createImageData(width, height);
    const data = imageData.data;

    for (let x = 0; x < width; x++) {
      for (let y = 0; y < height; y++) {
        let zx = (x - width / 2) / zoom; // Coordenada x normalizada
        let zy = (y - height / 2) / zoom; // Coordenada y normalizada

        let iteration = 0;
        while (
          zx * zx + zy * zy < 4 &&
          iteration < Math.min(level, maxIterations)
        ) {
          const temp = zx * zx - zy * zy + cx; // Aplicar fórmula de Julia
          zy = 2 * zx * zy + cy;
          zx = temp;
          iteration++;
        }

        const color =
          iteration === maxIterations
            ? [0, 0, 0, 255] // Negro para los puntos dentro del conjunto
            : [
                (iteration * 16) % 255, // Rojo
                (iteration * 32) % 255, // Verde
                (iteration * 64) % 255, // Azul
                255, // Opacidad
              ];

        const index = (y * width + x) * 4;
        data[index] = color[0]; // R
        data[index + 1] = color[1]; // G
        data[index + 2] = color[2]; // B
        data[index + 3] = color[3]; // A
      }
    }

    ctx.putImageData(imageData, 0, 0); // Dibujar todo el fractal
  },
  kochSnowflake: (ctx: CanvasRenderingContext2D, options: FractalOptions) => {
    const { x, y, length, level } = options;

    const drawSegment = (
      x1: number,
      y1: number,
      x2: number,
      y2: number,
      level: number
    ) => {
      if (level === 0) {
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
        return;
      }

      const dx = (x2 - x1) / 3;
      const dy = (y2 - y1) / 3;

      const xA = x1 + dx;
      const yA = y1 + dy;
      const xB = x2 - dx;
      const yB = y2 - dy;

      const xPeak =
        xA + dx * Math.cos(Math.PI / 3) - dy * Math.sin(Math.PI / 3);
      const yPeak =
        yA + dx * Math.sin(Math.PI / 3) + dy * Math.cos(Math.PI / 3);

      drawSegment(x1, y1, xA, yA, level - 1);
      drawSegment(xA, yA, xPeak, yPeak, level - 1);
      drawSegment(xPeak, yPeak, xB, yB, level - 1);
      drawSegment(xB, yB, x2, y2, level - 1);
    };

    const x2 = x + length;
    const y2 = y;

    const x3 = x + length / 2;
    const y3 = y - Math.sin(Math.PI / 3) * length;

    drawSegment(x, y, x2, y2, level);
    drawSegment(x2, y2, x3, y3, level);
    drawSegment(x3, y3, x, y, level);
  },
  sierpinskiTriangle: (
    ctx: CanvasRenderingContext2D,
    options: FractalOptions
  ) => {
    const { x, y, level, length } = options;

    const drawTriangle = (
      x: number,
      y: number,
      size: number,
      depth: number
    ) => {
      if (depth === 0) {
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + size, y);
        ctx.lineTo(x + size / 2, y - (Math.sqrt(3) * size) / 2);
        ctx.closePath();
        ctx.fill();
        return;
      }

      const newSize = size / 2;
      drawTriangle(x, y, newSize, depth - 1);
      drawTriangle(x + newSize, y, newSize, depth - 1);
      drawTriangle(
        x + newSize / 2,
        y - (Math.sqrt(3) * newSize) / 2,
        newSize,
        depth - 1
      );
    };

    drawTriangle(x, y, length, level);
  },
  dragonFractal: (
    ctx: CanvasRenderingContext2D,
    options: FractalOptions
  ) => {
    const { x, y, length, level } = options;

    const drawDragon = (
      x1: number,
      y1: number,
      x2: number,
      y2: number,
      depth: number
    ) => {
      if (depth === 0) {
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);

        ctx.strokeStyle = `hsl(${level * 36}, 70%, 50%)`;

        ctx.stroke();
        return;
      }

      const midX = (x1 + x2) / 2 + (y2 - y1) / 2;
      const midY = (y1 + y2) / 2 - (x2 - x1) / 2;

      drawDragon(x1, y1, midX, midY, depth - 1);
      drawDragon(x2, y2, midX, midY, depth - 1);
    };

    drawDragon(x, y, x + length, y, level);
  },
};
