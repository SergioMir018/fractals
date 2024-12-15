# Fractals

**Fractals** is an interactive web application designed to visualize and explore the beauty of fractals. This project leverages the HTML5 Canvas API and React (with TypeScript) to create an engaging platform for rendering and interacting with fractal patterns in real time.

## Features

- **Dynamic Rendering**: Real-time rendering of fractals using the Canvas API.
- **Interactive Experience**: Zoom, pan, and explore intricate details of fractal patterns.
- **Customizable Parameters**: Adjust parameters to modify fractal shapes and designs.
- **Responsive Design**: Optimized for various screen sizes.

## Getting Started

### Prerequisites

Make sure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/fractal-explorer.git
   cd fractals
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to:

   ```
   http://localhost:5173
   ```

## Project Structure

```
fractal-explorer/
├── public/             # Static assets
├── src/
│   ├── components/     # Reusable React components
│   │   └── FractalCanvas.tsx  # Main fractal rendering component
│   ├── App.tsx         # Root React component
│   └── index.tsx       # Entry point
├── index.css           # Global styles
├── package.json        # Project dependencies and scripts
└── README.md           # Project documentation
```

## Development Goals

1. Implement fractal generation algorithms, starting with the **Mandelbrot Set**.
2. Add interactive controls (zooming, panning, parameter adjustments).
3. Optimize rendering performance for smooth interaction.
4. Extend the project to support additional fractal types (e.g., Julia Set, Barnsley Fern).

## Future Enhancements

- Add animation to fractals for dynamic visual effects.
- Implement a gallery to save and share fractal designs.
- Integrate WebGL for 3D fractal exploration.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests to improve the project.

## License

This project is licensed under the [MIT License](./LICENSE).

## Acknowledgments

- Inspired by the mathematical beauty of fractals.
- Built with React, TypeScript, and the Canvas API.