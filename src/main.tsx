import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@/styles/main.css';
import App from '@/app';

const root = document.getElementById('root');

if (root) {
  createRoot(root, {
    identifierPrefix: 'star-',
  }).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
