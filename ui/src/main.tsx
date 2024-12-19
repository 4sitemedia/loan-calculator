import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

const element: HTMLElement | null = document.getElementById('root');

if (element) {
  createRoot(element).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
