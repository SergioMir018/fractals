import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { FractalParamsProvider } from './context/FractalParamsContextProvider.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FractalParamsProvider>
      <App />
    </FractalParamsProvider>
  </StrictMode>
);
