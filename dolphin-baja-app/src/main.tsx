import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// ¡Línea vital para cargar Tailwind v4 y nuestra nueva paleta "Aguas Someras"!
import './index.css';

import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);