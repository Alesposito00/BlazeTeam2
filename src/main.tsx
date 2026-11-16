import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { registerSW } from 'virtual:pwa-register';
import App from './App.tsx';
import './index.css';

if ('serviceWorker' in navigator) {
  try {
    registerSW({
      immediate: true,
      onRegisterError() {
        // Ignore service worker registration errors in restricted preview contexts
      },
    });
  } catch {
    // Ignore synchronous registration errors
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
